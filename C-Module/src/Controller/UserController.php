<?php

namespace Kty\Controller;

use Kty\App\DB;
use Kty\Library\Lib;

class UserController extends MasterController
{
    public function loginProcess()
    {
        $id = $_POST['id'];
        $password = $_POST['password'];

        $getUserSql = "SELECT * FROM users WHERE user_id = ? AND user_pwd = PASSWORD(?)";
        $getUser = DB::fetch($getUserSql, [$id, $password]);
        if ($getUser) {
            $_SESSION['user'] = $getUser;
            echo json_encode($getUser, JSON_UNESCAPED_UNICODE);
        } else echo "유효하지 않은 아이디 또는 비밀번호입니다.";
    }

    public function registerProcess()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $password = $_POST['password'];

        $getUserSql = "SELECT * FROM users WHERE user_id = ?";
        $addUserSql = "INSERT INTO users (user_id, user_name, user_pwd) VALUES (?, ?, PASSWORD(?))";
        $adminCheck = DB::fetch($getUserSql, ["admin"]);
        if (!$adminCheck) DB::execute($addUserSql, ["admin", "관리자", "1234"]);

        $getUser = DB::fetch($getUserSql, [$id]);

        if ($getUser) echo "이미 존재하는 아이디 입니다.";
        else {
            $result = DB::execute($addUserSql, [$id, $name, $password]);
            if ($result) echo "성공";
            else echo "DB 오류로 인하여 회원가입에 실패 하였습니다.";
        }
    }

    public function logout()
    {
    }
}
