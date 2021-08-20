<?php

namespace Kty\Controller;

class MainController extends MasterController
{
    public function index()
    {
        $this->render("main");
    }
}