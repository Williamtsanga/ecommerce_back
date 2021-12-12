<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\productVariationOptionValue;
use App\Models\productVariationOption;
use App\Models\imageGallery;
use App\Models\productCombination;
use App\Models\productDiscount;
use App\Models\product;
use App\Models\temp;
use App\Models\review;
use DB;
use Carbon\Carbon;
class specs extends Controller
{
    public function truncs()
    {
        // DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        // productCombination::truncate();
        // imageGallery::truncate();
        // productDiscount::truncate();
        // productVariationOptionValue::truncate();
        // productVariationOption::truncate();
        // review::truncate();
        // product::truncate();
        // DB::statement('SET FOREIGN_KEY_CHECKS=1;');
// DATE_FORMAT(r.created_at,'%M %c,%Y')
        return Carbon::parse('2021-12-02 14:00:54')->format('M d,Y');
        // return product::all();
        // return response()->json(['oui' => 20], 200)->cookie('test',456)->cookie('tast',123);
    }
}
