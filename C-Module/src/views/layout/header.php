<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/fontawesome-free-5.13.1-web/fontawesome-free-5.13.1-web/css/all.css">
    <link rel="stylesheet" href="/bootstrap-4.5.0-dist/bootstrap-4.5.0-dist/css/bootstrap.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/jquery-3.5.1.js"></script>
    <script src="/js/app.js"></script>
    <title>대전빵집순례</title>
</head>

<body>
    <div id="container">
        <!-- 헤더 영역 -->
        <header class="bg-white">
            <input type="checkbox" name="menu-check" id="menu-check" hidden>
            <div id="logo">
                <img src="/images/logo.png" alt="logo" title="logo">
            </div>
            <label for="menu-check" class="menu-bar-icon">
                <i class="fas fa-bars"></i>
            </label>
            <ul id="menu" class="mb-0 justify-content-between align-items-center">
                <li>
                    <a href="#">성심당</a>
                    <ul>
                        <li><a href="#">성심당 소개</a></li>
                        <li><a href="#">찾아오시는 길</a></li>
                        <li><a href="#">이용후기</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">하레하레</a>
                    <ul>
                        <li><a href="#">하레하레 소개</a></li>
                        <li><a href="#">찾아오시는 길</a></li>
                        <li><a href="#">이용후기</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">르뺑99-1</a>
                    <ul>
                        <li><a href="#">르뺑99-1 소개</a></li>
                        <li><a href="#">찾아오신는 길</a></li>
                        <li><a href="#">이용후기</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="login-btns mb-0 d-flex justify-content-between">
                <li>
                    <button id="login-btn" class="btn">
                        <i class="fas fa-sign-in-alt"></i>
                        로그인
                    </button>
                </li>
                <span class="menu-bar">|</span>
                <li>
                    <button id="register-btn" class="btn">
                        <div class="fas fa-user"></div>
                        회원가입
                    </button>
                </li>
            </ul>
        </header>