<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\subcategory;
use App\Models\productVariationOptionValue;
use App\Models\productVariationOption;
use App\Models\imageGallery;
use App\Models\productCombination;
use App\Models\productDiscount;
use App\Models\product;
use Mongodb\BSON\ObjectID;

use App\Models\temp;
use Illuminate\Http\Request;
use Str;
use DB;

class adminController extends Controller
{
    public function getCategories(Request $request)
    {
        return category::select('name','id')->get();
    }
    
    public function getSubcategories(Request $request)
    {
        // $catId = DB::select(DB::raw("SELECT cc.id FROM categories cc WHERE cc.name = '".$request->value."'"))[0]->id;
        // $catId = category::where("name",''. $request->value.'')->get()->first()->id;
        // $test = [1,2,3];
        // $test2 = [12,13,14,15,16,17];
        // $test3 =  [7,8,9,4,5,6];
        // $iterate = new \MultipleIterator();
        // $iterate->attachIterator(new \ArrayIterator($test2));
        // $iterate->attachIterator(new \ArrayIterator($test3));
        // foreach ($iterate as $value) {
        //     list($one,$two) = $value;
        //     echo($one);
        //     echo("==");
        //     echo($two);
        //     echo(',');
        // temp::truncate();
        // }
        // return 1 == null ? 0 : 1;
        // return $test[12] ?? 88;
        return subCategory::select('name','id')->where('category_id',$request->value)->get();
    }
    public function getProducts(Request $request)
    {
        $user = $request->user();
        $products = null;
        if($user->role == 'admin')
            $products = DB::select(DB::raw('
            SELECT p.preview_front_image,p.id,p.name,p.flash,p.status,p.flash,pc.price,pc.id AS comb_id,p.category,p.summary,p.describtion,
            (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
            (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
            (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount
            FROM products p INNER JOIN product_combinations pc ON pc.product_id = p.id WHERE pc.defaults = 1
            '));
        
        else 
            $products = DB::select(DB::raw('
                SELECT p.preview_front_image,p.id,p.name,p.flash,p.status,p.flash,pc.price,pc.id AS comb_id,p.category,p.summary,p.describtion,
                (SELECT AVG(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS rate, 
                (SELECT  COUNT(r.rate) FROM reviews r WHERE r.product_id = p.id ) AS review_count, 
                (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount
                FROM products p INNER JOIN product_combinations pc ON pc.product_id = p.id WHERE pc.defaults = 1 AND p.user_id = '.$user->id));
        return response()->json(['products' => $products], 200);
    }
    public function AddProduct(Request $request)
    {
        
        $user = $request->user();
        try {
            
       

        $variations = $request->variations;
        $product = $request->product;
        $product_db = new product;
        $cat = category::find($product['category']);
        $subcat = subCategory::find($product['subcategory']);

        $idd = temp::findOrFail($request->default_image)->gallery_id;
        echo($idd);
        $previews = imageGallery::find($idd);

        
            $product_db->name = (string) $product['name'];
            $product_db->flash = $product['flash'] ?? NULL;
            $product_db->describtion = (string) $product['desc'];
            $product_db->summary = (string) $product['summary'];
            $product_db->category = (string) $cat->name;
            $product_db->subcategory = (string) $subcat->name;
            $product_db->category_id = $product['category'];
            $product_db->subcategory_id = $product['subcategory'];
            $product_db->user_id = $user->id;
            $product_db->unique_id = new ObjectID();
            $product_db->additional_infos = (string) json_encode($request->addInfos);
            $product_db->status =  $product['in_stock'] ?? "in stock";
            $product_db->preview_front_image = (string) $previews->front;
            $product_db->preview_rear_image = (string) $previews->rear;

        $product_db->save();

    } catch (\Throwable $th) {
        return response()->json(['message' => $th->getMessage(),"see" => $request->input(), "hum" => temp::all()], 500);
    }
    if(isset($product['discount'])){
        $pd = new productDiscount;
    
        $pd->product_id = $product_db->id;
        $pd->percentage = (int)$product['discount'] / 100 ;
        $pd->expires_at = $product['expires_at'];
        $pd->name = 'test name';
        $pd->save();
  
    }
    
        foreach ($variations as  $vars) {
            $variationOption_db = new productVariationOption;

            $variationOption_db->product_id = $product_db->id;
            $variationOption_db->name = $vars['name'];
            $variationOption_db->save();

            $iterate = new \MultipleIterator();
            $iterate->attachIterator(new \ArrayIterator($vars['values']));
            $iterate->attachIterator(new \ArrayIterator($vars['alias']));
            $default = $vars['def'];
            $t = 0;
            foreach ($iterate as $val) {
                list($key,$pair) = $val;
                $variationOptionValue_db = new productVariationOptionValue;

                $variationOptionValue_db->product_variation_id = $variationOption_db->id;
                $variationOptionValue_db->name = $key;
                $variationOptionValue_db->def = $default == $t ? true : false;
                $variationOptionValue_db->alias = $pair;
                $variationOptionValue_db->save();
                $t += 1;
            }
        }

        foreach ($request->combinations as $key) {
            $imageId = temp::find($key['gallery'])->gallery_id;
            $combination_db = new productCombination;
            $combination_db->price = $key['price'];
            $combination_db->unique_key = $key['key'];
            $combination_db->combination_string = $key['string'];
            $combination_db->defaults = $key['default'];
            $combination_db->product_id = $product_db->id;
            $combination_db->image_gallery_id = $imageId;
            $combination_db->save();
        }

        temp::truncate();
        return 'ok';
    }

    public function upload(Request $request)
    {
        $gallery = new imageGallery;
        $temp = new temp;
        $filepaths = [];
        $files = $request->file('images');
        foreach ($files as $file) {
            $filename = $file->getClientOriginalName();
            $filepath = $file->storeAs('products/images',$filename,"public");
            array_push($filepaths,$filepath);
            // $extension = $file->getClientOriginalExtension();
        }
            $gallery->front = $filepaths[0];
            $gallery->rear = $filepaths[1];
            $gallery->left_side = $filepaths[2];
            $gallery->right_side = $filepaths[3];
        $gallery->save();
        $temp->gallery_id = $gallery->id;
        $temp->save();
        return $temp->id;
    }
}