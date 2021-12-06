<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
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
        if(!$request->category && !$category->count())
            return response()->json(['message' => "Error",'see'=>$request->category], 400);
        $whereclause = ['category_id' => $category->id,'product_combinations.defaults' => 1];

        if($request->subcategory)
            $whereclause['subcategory'] = $request->subcategory;



        //     SELECT
        //     `products`.`id`,
        //     `unique_id`,
        //     `products`.`name`,
        //     `preview_front_image`,
        //     `preview_rear_image`,
        //     `flash`,
        //     `status`,
        //     `product_combinations`.`price`,
        //     `product_combinations`.`id` AS `comb_id`,
        //     pvo.name AS pvo,
        //     pvov.name AS pvov,
        //     pvov.alias AS alias,
        //     (
        //     SELECT
        //         AVG(r.rate)
        //     FROM
        //         reviews r
        //     WHERE
        //         r.product_id = products.id
        // ) AS rate,
        // (
        //     SELECT
        //         COUNT(r.rate)
        //     FROM
        //         reviews r
        //     WHERE
        //         r.product_id = products.id
        // ) AS review_count,
        // (
        //     SELECT
        //         d.percentage
        //     FROM
        //         product_discounts d
        //     WHERE
        //         d.product_id = products.id
        // ) AS discount,
        // CASE WHEN(
        //     SELECT
        //         d.percentage
        //     FROM
        //         product_discounts d
        //     WHERE
        //         d.product_id = products.id
        // ) IS NULL THEN product_combinations.price ELSE(
        //     SELECT
        //         (
        //             product_combinations.price - d.percentage * product_combinations.price
        //         )
        //     FROM
        //         product_discounts d
        //     WHERE
        //         d.product_id = products.id
        // )
        // END AS new_price
        // FROM
        //     `products`
        // INNER JOIN `product_combinations` ON `product_combinations`.`product_id` = `products`.`id`
        // INNER JOIN product_variation_options pvo ON
        //     pvo.product_id = products.id
        // INNER JOIN product_variation_option_values pvov ON
        //     pvov.product_variation_id = pvo.id
        // WHERE
        //     (
        //         `category_id` = 4 AND `product_combinations`.`defaults` = 1
        //     )

            $products = product::where($whereclause)            
            ->select("products.id","products.unique_id","products.name","preview_front_image","preview_rear_image","flash","status","product_combinations.price","product_combinations.id AS comb_id")
            ->selectRaw('(SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = products.id ) AS rate')
            ->selectRaw('(SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = products.id ) AS review_count')
            ->selectRaw('(SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) AS discount')
            ->selectRaw('CASE 
                            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) IS NULL THEN product_combinations.price
                            ELSE (SELECT (product_combinations.price - d.percentage*product_combinations.price) FROM product_discounts d WHERE d.product_id = products.id ) 
                        END AS new_price')
            ->join('product_combinations','product_combinations.product_id','=','products.id')
            ->join('product_variation_options','product_variation_options.product_id','=','products.id')
            ->join('product_variation_option_values','product_variation_option_values.product_variation_id','=','product_variation_options.id')
            ->get();
            
        $raw_variation_db = '
        SELECT var.name AS name, varo.name AS value FROM variations var
        INNER JOIN variation_options varo ON var.id = varo.variation_id
        WHERE var.category_id = '. $category->id;

        $variations = DB::select(DB::raw($raw_variation_db));
        
        DB::statement("SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));");
        $raw_subcategory_db = '
            SELECT ps.name AS name,
            CASE
                WHEN p.id IS NULL THEN  0
                ELSE COUNT(*)
            END AS number
            FROM subcategories ps LEFT JOIN  products AS p ON ps.id = p.subcategory_id WHERE ps.category_id = '.$category->id.' GROUP BY ps.id ORDER BY ps.id DESC LIMIT 0, 25;
        ';

        $subcategory = DB::select(DB::raw($raw_subcategory_db));
            // $raw_products_db = str_replace('catID', $request->category, $raw_products_db);
            // $id = new ObjectID();
        return response()->json([
            'subcategories' => $subcategory,
            'products' => $products,
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

    public function fish($var,$key)
    {   
        $strr = "";
        $result = array();
        $init = array();
        foreach ($var as $value) {
            if ($value->def) {
                $strr = $strr.$value->alias;
                $init[$value->$key] = $value->alias;
            }
            $copy = clone $value;
            unset($copy->$key);
            $result[$value->$key][] = $copy;
        }
        return [$result,$init] ;
            
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
        // $product = DB::select(DB::raw());
        
        // $product_str = str_replace('prodUniqueId', '?', "SELECT p.id,p.unique_id,p.name,p.flash,p.status,pc.price,pc.id AS comb_id,p.category,p.summary,p.describtion,p.additional_infos,
        // (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
        // (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
        // (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount
        // FROM products p INNER JOIN product_combinations pc ON pc.product_id = p.id 
        // WHERE pc.defaults = 1 AND p.unique_id = 'prodUniqueId' ");
       
        // echo(DB::raw($product_str));
        // $product =  DB::select(DB::raw($product_str), [$request->item]);
        // $product = Product::select('products.id','products.unique_id','products.name','products.flash','products.status','product_combinations.price','product_combinations.id AS comb_id','products.category','products.summary','products.describtion','products.additional_infos')
        // ->selectRaw('(SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = products.id ) AS rate,')
        // ->selectRaw('(SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = products.id ) AS review_count,')
        // ->selectRaw('(SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) AS discount')
        // ->join('product_combinations','product_combinations.product_id','=','products.id')
        // ->where('products.unique_id', $request->item)->get();

        $product = Product::where(["unique_id"=>$request->item,'product_combinations.defaults'=>1])
        ->selectRaw('(SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = products.id ) AS rate')
        ->selectRaw('(SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = products.id ) AS review_count')
        ->selectRaw('(SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) AS discount')
        ->join('product_combinations','product_combinations.product_id','=','products.id')
        ->select('products.id','products.unique_id','products.name','products.flash','products.status','products.category','products.summary','products.describtion','products.additional_infos')
        ->get()->first();



        // dd($product);
        if (!$product)
            return response()->json(['message' => "Error"], 500);


        $reviews = review::select('name','message','user_id','product_id','email','id',DB::raw("DATE_FORMAT(reviews.created_at,'%M %c,%Y') AS date"))->where('product_id',$request->item);

        $related = DB::select( DB::raw("
        SELECT p.id,p.name,p.unique_id,p.preview_front_image,p.preview_rear_image,p.flash,p.status,pc.price,pc.id AS comb_id,
            (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
            (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
            (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount,
            CASE 
                WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) IS NULL THEN pc.price
                ELSE (SELECT (pc.price - d.percentage*pc.price) FROM product_discounts d WHERE d.product_id = p.id ) 
            END AS new_price
            FROM products p INNER JOIN product_combinations pc ON pc.product_id = p.id WHERE pc.defaults = 1"));
       


       $variations = $this->fish(Product::where('unique_id',$request->item)
       ->join('product_variation_options','product_variation_options.product_id','=','products.id')
       ->join('product_variation_option_values','product_variation_option_values.product_variation_id','=','product_variation_options.id')
       ->select("product_variation_options.name AS varName","product_variation_option_values.name","product_variation_option_values.alias AS alias" ,"product_variation_option_values.def")
       ->get(),'varName');

        $combination = productCombination::where(["defaults" => 1,"product_id" => $product->id])->get()->first();
        $images = imageGallery::find($combination->image_gallery_id);
        $cookies = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cookies));
        $recent = null;

        if($cookies && isset($code['recent_items'])) { 
                $db_string = Str::replace('product_array' , implode(',' , $code['recent_items']) , "SELECT p.id,p.name,p.unique_id , p.flash,p.preview_front_image,p.preview_rear_image,
                (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
                (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
                (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount,
                (SELECT pc.price FROM product_combinations pc WHERE pc.product_id = p.id AND pc.defaults = 1) AS price,
                (SELECT pc.id FROM product_combinations pc WHERE pc.product_id = p.id AND pc.defaults = 1) AS comb_id
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
            'init' => $variations[1],
            "images" => $images
        ], 200)->cookie('_ltsi',base64_encode(serialize($code)),5000);

    }

}
