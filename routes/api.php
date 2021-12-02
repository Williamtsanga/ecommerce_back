<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\reviewCTL;
use App\Http\Controllers\cartItemCTL;
use App\Http\Controllers\wishlistCTL;
use App\Http\Controllers\homeCTL;
use App\Http\Controllers\specs;
use App\Http\Controllers\checkoutController;
use App\Http\Controllers\userController;


Route::group(['prefix' => 'cart'] , function() {
  Route::post('/add',[cartItemCTL::class , "add"]);
  Route::get('/get',[cartItemCTL::class , "get"]);
  Route::patch('update',[cartItemCTL::class,'update'] );
  Route::delete('delete',[cartItemCTL::class,'remove']);
});
Route::group(['prefix' => 'wishlist'] , function() {
  Route::post('add',[wishlistCTL::class , "add"]);
  Route::get('get',[wishlistCTL::class , "get"]);
  Route::get('count',[wishlistCTL::class , "count"]);
  Route::delete('remove',[wishlistCTL::class , "remove"]);

});
Route::group(['prefix' => 'checkout'], function ()
{
  Route::get('fetchinfo', [checkoutController::class,'getInfo']);
  Route::post('placeorder', [checkoutController::class,'placeOrder']);
});

Route::group(['prefix' => 'auth'] , function ()
{
    Route::post('login', [userController::class, 'login']);
    Route::post('register', [userController::class , 'register']);

});



Route::get('/view-profile', [userController::class,'viewProfile'] )->middleware('auth:api');

Route::group(['prefix' => 'home'], function ()
{
  	Route::get('start', [homeCTL::class,'fetchAll']);
});


Route::group(['prefix' => 'admin'], function ()
{
  Route::post('login', [userController::class, 'adminLogin']);
  Route::post('register', [userController::class , 'adminRegister']);
});

Route::group(['prefix' => 'admin',"middleware" => ['auth:api','scope:admin,seller']], function ()
{
	Route::get('categories', [adminController::class,'getCategories']);
	Route::post('addProduct', [adminController::class,'AddProduct']);
	Route::post('upload', [adminController::class,'upload']);
	Route::get('products', [adminController::class,'getProducts']);
	Route::get('subcategories', [adminController::class,'getSubcategories']);
  Route::get('view-profile',[userController::class,'viewProfile']);
  Route::get('logout', [userController::class,'logout'] );

});

Route::group(['prefix' => 'user',"middleware" => ['auth:api']], function ()
{
  Route::group(['prefix' => 'cart'], function ()
  {
    Route::post('add',[cartItemCTL::class , "add"]);
    Route::get('get',[cartItemCTL::class , "get"]);
    Route::get('try',[cartItemCTL::class , "try"]);
    Route::patch('update',[cartItemCTL::class,'update'] );
    Route::delete('delete',[cartItemCTL::class,'remove']);  
  
  });
  Route::group(['prefix' => 'checkout'], function ()
  {
    Route::get('fetchinfo', [checkoutController::class,'getInfo']);
    Route::post('placeorder', [checkoutController::class,'placeOrder']);
  });

  Route::group(['prefix' => 'wishlist'] , function() {
    Route::post('add',[wishlistCTL::class , "add"]);
    Route::get('get',[wishlistCTL::class , "get"]);
    Route::get('count',[wishlistCTL::class , "count"]);
    Route::delete('remove',[wishlistCTL::class , "remove"]);
  
  });

});

Route::get('/product', [ProductController::class , 'getProduct']);
Route::get('/product/combination', [ProductController::class , 'combination']);
Route::get('/shop', [ProductController::class , 'product_list']);


Route::group(['prefix' => 'review'], function ()
{
	Route::post('add', [reviewCTL::class,'add']);
});


Route::get('actions', [specs::class,'truncs'] );