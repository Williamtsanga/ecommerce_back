<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use DB;
use Str;
use Mongodb\BSON\ObjectID;
use App\Models\category;
use App\Models\review;
use App\Models\productCombination;
use App\Models\imageGallery;

class ProductController extends Controller
{
//     SELECT pvo.variationName AS varName,pvov.variationValue,pvov.value AS alias FROM products p
// INNER JOIN product_variation_options pvo ON pvo.product_id = p.id
// INNER JOIN product_variation_option_values pvov ON pvov.product_varaition_id = pvo.id
// WHERE p.id = 7000001
    public function product_list(Request $request)
    {
        $category = category::where('unique_id',$request->category)->first();
        if (!$category->count())
            return response()->json(['message' => "Error",'see'=>$request->category], 400);
            $raw_products_db = '
            SELECT p.id,p.price,p.preview_front_image,p.preview_rear_image,p.name , p.flash,
        (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
        (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
        (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount,
        CASE 
            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) IS NULL THEN p.price
            ELSE (SELECT (p.price - d.percentage*p.price) FROM product_discounts d WHERE d.product_id = p.id ) 
            END AS new_price
        FROM products p  WHERE p.category_id = ';
        $raw_products_db = Str::finish($raw_products_db, $category->id);
        $raw_variation_db = '
        SELECT var.name AS name, varo.name AS value FROM variations var
        INNER JOIN variation_options varo ON var.id = varo.variation_id
        WHERE var.category_id = ';
        $raw_variation_db = Str::finish($raw_variation_db, $category->id);

        $variations = DB::select(DB::raw($raw_variation_db));
        
        DB::statement("SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));");
        $subcategory_string = '
            SELECT ps.name AS name,
            CASE
                WHEN p.id IS NULL THEN  0
                ELSE COUNT(*)
            END AS number
            FROM subcategories ps LEFT JOIN  products AS p ON ps.id = p.subcategory_id WHERE ps.category_id = subcat_id GROUP BY ps.id ORDER BY ps.id DESC LIMIT 0, 25;
        ';
        $raw_subcategory_db = str_replace('subcat_id', $category->id, $subcategory_string);
        $subcategory = DB::select(DB::raw($raw_subcategory_db));
            // $raw_products_db = str_replace('catID', $request->category, $raw_products_db);
            $id = new ObjectID();
        return response()->json([
            'subcategories' => $subcategory,
            'products' => DB::select(DB::raw($raw_products_db)),
            'variations' => $this->group($variations) 
        ], 200);
    }

    public function combination(Request $request)
    {
        if(!$request->unique_key)
            return response()->json([], 501);

        $raw_comb = str_replace('uniqueKey',trim($request->unique_key),"SELECT * FROM product_combinations pc
        WHERE pc.unique_key = 'uniqueKey' AND pc.product_id = ".$request->item);
        $combination = DB::select(DB::raw($raw_comb));
        if($combination){
            $images = imageGallery::find($combination[0]->image_gallery_id);
            return response()->json([
                'images' => $images,
                'combination' => $combination[0]
            ], 200);
        }
        else 
            return response()->json([], 501);

        

    }

    public function fish($var,$key,$sort=0)
    {   
        $strr = "";
        $result = array();
        $init = array();
        foreach ($var as $value) {
            if ($sort && $value->def) {
                $strr = $strr.$value->alias;
                $init[$value->$key] = $value->alias;
            }
            $copy = clone $value;
            unset($copy->$key);
            $result[$value->$key][] = $copy;
        }
        if ($sort)
            {
                $parts = str_split($strr);
                sort($parts);
                $temp = implode('',$parts);
                
                return [$result,trim($temp),$init] ;
            }
        return $result;
    }
    protected function group($var)
    {
        $tem = array();
        foreach ($var as $key) {
            // echo($key->name);
            $tem[$key->name][] = $key->value;
        }
        $out = array();
        foreach ($tem as $key => $value) {
            $out[$key] = $value;
        }
        return $out;
    }

    public function getProduct(Request $request) {  

        if (!$request->item)
            return response()->json(['message' => "Error"], 500);   
        $product = DB::select(DB::raw(Str::finish('SELECT p.id,p.price,p.name , p.flash,p.category,p.summary,p.describtion,p.additional_infos,
        (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
        (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
        (SELECT cc.unique_id FROM categories cc WHERE cc.id = p.category_id ) AS unique_id,
        (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount,
        CASE 
            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) IS NULL THEN p.price
            ELSE (SELECT (p.price - d.percentage*p.price) FROM product_discounts d WHERE d.product_id = p.id ) 
            END AS new_price
        FROM products p  WHERE p.id = ',$request->item)));
        if (!$product)
            return response()->json(['message' => "Error"], 500);
        $product = $product[0];


        $reviews = review::select('name','message','user_id','product_id','email','id',DB::raw("DATE_FORMAT(reviews.created_at,'%M %c,%Y') AS date"))->where('product_id',$request->item);

        $related = DB::select( DB::raw("
        SELECT p.id,p.price,p.name , p.flash,p.preview_front_image,p.preview_rear_image,
        (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
        (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
        (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount,
        CASE 
            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) IS NULL THEN p.price
            ELSE (SELECT (p.price - d.percentage*p.price) FROM product_discounts d WHERE d.product_id = p.id ) 
            END AS new_price
        FROM products p"));
        $variations = $this->fish(DB::select(DB::raw("SELECT pvo.name AS varName,pvov.name,pvov.alias AS alias ,pvov.def FROM products p
        INNER JOIN product_variation_options pvo ON pvo.product_id = p.id
        INNER JOIN product_variation_option_values pvov ON pvov.product_variation_id = pvo.id
        WHERE p.id = ".$request->item)),'varName',1);

        $combination = productCombination::where(["unique_key" => $variations[1],"product_id" => $request->item])->get()->first();
        $images = imageGallery::find($combination->image_gallery_id);
        $cookies = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cookies));
        $recent = null;

        if($cookies && isset($code['recent_items'])) { 
                $db_string = Str::replace('product_array' , implode(',' , $code['recent_items']) , "SELECT p.id,p.price,p.name , p.flash,p.preview_front_image,p.preview_rear_image,
                (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
                (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
                (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount,
                CASE 
                    WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) IS NULL THEN p.price
                    ELSE (SELECT (p.price - d.percentage*p.price) FROM product_discounts d WHERE d.product_id = p.id ) 
                    END AS new_price
                FROM products p WHERE p.id in (product_array)" );
                $recent = DB::select( DB::raw($db_string));

                if(count($code['recent_items']) < 4 && ! in_array($request->item , $code['recent_items'])){
                    array_push($code['recent_items'],$product->id);
                    }            
        }
        else {
            $code['recent_items'] = [$product->id];
        }
        
        return response()->json([
            'recent_products' => $recent,
            'cook' => base64_encode(serialize($code)),
            "rate" => (int) $reviews->avg('rate'),
            'item' => $product , 
            "related_products" => $related , 
            "reviews" => $reviews->get(),
            'variations' => $variations[0],
            'combination' => $combination,
            'init' => $variations[2],
            "images" => $images
        ], 200)->cookie('_ltsi',base64_encode(serialize($code)),5000);

    }

}
