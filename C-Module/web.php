<?php

use Kty\App\Route;

Route::get('/', 'MainController@index');

if (__SESSION) {
    Route::get('/menu', 'MainController@menu');
} else {
    Route::post('/user/login', 'UserController@loginProcess');
    Route::post('/user/register', 'UserController@registerProcess');
}