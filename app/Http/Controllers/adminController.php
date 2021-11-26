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
    public function AddProduct(Request $request)
    {
        try {
            
       
        $idd = temp::find($request->default_image)->gallery_id;
        $previews = imageGallery::find($idd);

        $variations = $request->variations;
        $product = $request->product;
        $product_db = new product;
        $combination_db = new productCombination;
        $variationOption_db = new productVariationOption;
        $variationOptionValue_db = new productVariationOptionValue;
        $cat = category::find($product['category']);
        $subcat = subCategory::find($product['subcategory']);

        $product_id = $product_db::create([
            'name' =>(string) $product['name'],
            'flash' => (string) $product['flash'],
            'describtion' => (string) $product['desc'],
            'summary' => (string) $product['summary'],
            'category' => (string) $cat->name,
            'subcategory' => (string) $subcat->name,
            'category_id' => $product['category'],
            'subcategory_id' => $product['subcategory'],
            'price' => $product['price'],
            'additional_infos' => (string) json_encode($request->addInfos),
            'status' =>  "in stock",
            'preview_front_image' => (string) $previews->front,
            'preview_rear_image' => (string) $previews->rear
        ])->id;

    } catch (\Throwable $th) {
        return response()->json(['message' => $th->getMessage(),"see" => $request->input()], 500);
    }
  
        foreach ($variations as  $vars) {
            $varNameId = $variationOption_db::create([
                "product_id" => $product_id,
                "name" => $vars['name'],
            ])->id;
            $iterate = new \MultipleIterator();
            $iterate->attachIterator(new \ArrayIterator($vars['values']));
            $iterate->attachIterator(new \ArrayIterator($vars['alias']));
            $default = $vars['def'];
            $t = 0;
            foreach ($iterate as $val) {
                list($key,$pair) = $val;

                $variationOptionValue_db::create([
                    'product_variation_id' => $varNameId,
                    'name' => $key,
                    'def' => $default == $t ? true : false,
                    'alias' => $pair
                ]);
                $t += 1;
            }
        }

        foreach ($request->combinations as $key) {
            $imageId = temp::find($key['gallery'])->gallery_id;
            productCombination::create([
                'price' => $key['price'],
                'unique_key' => $key['key'],
                'combination_string' => $key['string'],
                'product_id' => $product_id,
                'image_gallery_id' => $imageId
            ]);
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
            $filepath = $file->storeAs('images/products/',$filename,"public");
            array_push($filepaths,$filepath);
            // $extension = $file->getClientOriginalExtension();
        }
        $save = $gallery::create([
            'front' => $filepaths[0],
            'rear' => $filepaths[1],
            'left_side' => $filepaths[2],
            'right_side' => $filepaths[3]
        ]);
        $temp::create(['gallery_id' => $save->id]);
        return 'ok';
    }
}