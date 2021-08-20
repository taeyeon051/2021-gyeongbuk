<!-- 내용관리 영역 -->
<div class="content-manage-page d-flex justify-content-center align-items-center">
    <div class="inner">
        <div class="content-manage-header w-100 d-flex justify-content-between">
            <h4 id="content-manage-menu-name" class="ml-3"></h4>
            <button id="back-menu" class="btn btn-primary">메뉴</button>
        </div>
        <div class="content-manage-btns my-3 w-100 d-flex">
            <button id="layout-register" class="btn btn-primary">레이아웃 등록</button>
            <button id="text-input" class="btn btn-primary" disabled>텍스트 입력</button>
            <button id="image-input" class="btn btn-primary" disabled>이미지 입력</button>
            <button id="content-modify-btn" class="btn btn-primary" disabled>수정</button>
            <button id="content-delete-btn" class="btn btn-primary" disabled>삭제</button>
        </div>
        <div id="content-div"></div>
    </div>
</div>

<!-- 메인메뉴 등록 팝업 -->
<div id="addmenu-popup" class="popup">
    <div class="inner p-2">
        <div class="popup-header m-3 d-flex justify-content-between">
            <h5>메인메뉴 등록</h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="menu-name" class="col-sm-3 col-form-label">메뉴명</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="menu-name">
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="menu-add-btn" class="btn btn-primary">등록</button>
        </div>
    </div>
</div>

<!-- 서브메뉴 등록 팝업 -->
<div id="addsubmenu-popup" class="popup">
    <div class="inner p-2">
        <div class="addsubmenu-header m-3 d-flex justify-content-between">
            <h5>서브메뉴 등록</h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="submenu-name" class="col-sm-3 col-form-label">메뉴명</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="submenu-name">
            </div>
        </div>
        <div class="row m-4">
            <label for="submenu-type" class="col-sm-3 col-form-label">메뉴종류</label>
            <div class="col-sm-9">
                <select name="submenu-type" class="form-control" id="submenu-type">
                    <option value="general">일반형</option>
                    <option value="board">게시판</option>
                </select>
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="submenu-add-btn" class="btn btn-primary">등록</button>
        </div>
    </div>
</div>

<!-- 레이아웃 등록 팝업 -->
<div id="layout-popup" class="popup">
    <div class="inner p-2">
        <div class="popup-header m-3 d-flex justify-content-between">
            <h5 id="layout-popup-title"></h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="layout-width" class="col-sm-3 col-form-label">넓이</label>
            <div class="col-sm-9">
                <input type="number" class="form-control" id="layout-width">
            </div>
        </div>
        <div class="row m-4">
            <label for="layout-height" class="col-sm-3 col-form-label">높이</label>
            <div class="col-sm-9">
                <input type="number" class="form-control" id="layout-height">
            </div>
        </div>
        <div class="row m-4">
            <label for="x-start" class="col-sm-3 col-form-label">X축 시작점</label>
            <div class="col-sm-9">
                <input type="number" class="form-control" id="x-start">
            </div>
        </div>
        <div class="row m-4">
            <label for="y-start" class="col-sm-3 col-form-label">Y축 시작점</label>
            <div class="col-sm-9">
                <input type="number" class="form-control" id="y-start">
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="layout-add-btn" class="btn btn-primary">등록</button>
        </div>
    </div>
</div>

<!-- 텍스트 입력 팝업 -->
<div id="text-input-popup" class="popup">
    <div class="inner p-2">
        <div class="popup-header m-3 d-flex justify-content-between">
            <h5>텍스트 입력</h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="font-size" class="col-sm-3 col-form-label">폰트 사이즈</label>
            <div class="col-sm-9">
                <input type="number" class="form-control" id="font-size">
            </div>
        </div>
        <div class="row m-4">
            <label for="text-content" class="col-sm-3 col-form-label">내용</label>
            <div class="col-sm-9">
                <textarea id="text-content" class="form-control" rows="6"></textarea>
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="text-add-btn" class="btn btn-primary">등록</button>
        </div>
    </div>
</div>

<!-- 이미지 입력 팝업 -->
<div id="image-input-popup" class="popup">
    <div class="inner p-2">
        <div class="popup-header m-3 d-flex justify-content-between">
            <h5>이미지 입력</h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="image-file" class="col-sm-3 col-form-label">이미지 선택</label>
            <div class="col-sm-9">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image-file" accept="image/*">
                    <label for="image-file" class="custom-file-label"></label>
                </div>
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="image-add-btn" class="btn btn-primary">등록</button>
        </div>
    </div>
</div>

<!-- 회원가입 팝업 -->
<div id="register-popup" class="popup">
    <div class="inner p-2">
        <div class="popup-header m-3 d-flex justify-content-between">
            <h5>회원가입</h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="user-id" class="col-sm-3 col-form-label">아이디</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="user-id">
            </div>
        </div>
        <div class="row m-4">
            <label for="user-name" class="col-sm-3 col-form-label">이름</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="user-name">
            </div>
        </div>
        <div class="row m-4">
            <label for="user-pwd" class="col-sm-3 col-form-label">비밀번호</label>
            <div class="col-sm-9">
                <input type="password" class="form-control" id="user-pwd">
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="user-register-btn" class="btn btn-primary">등록</button>
        </div>
    </div>
</div>

<!-- 로그인 팝업 -->
<div id="login-popup" class="popup">
    <div class="inner p-2">
        <div class="popup-header m-3 d-flex justify-content-between">
            <h5>로그인</h5>
            <div class="close-btn btn btn-outline-danger d-flex justify-content-center align-items-center">&times;
            </div>
        </div>
        <div class="row m-4">
            <label for="login-id" class="col-sm-3 col-form-label">아이디</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="login-id">
            </div>
        </div>
        <div class="row m-4">
            <label for="login-pwd" class="col-sm-3 col-form-label">비밀번호</label>
            <div class="col-sm-9">
                <input type="password" class="form-control" id="login-pwd">
            </div>
        </div>
        <div class="popup-btns float-right mx-3">
            <button class="close-btn btn btn-secondary">취소</button>
            <button id="user-login-btn" class="btn btn-primary">로그인</button>
        </div>
    </div>
</div>
</body>

</html>