<!-- 메뉴 관리 영역 -->
<div id="menu-manage" class="mx-auto">
<div class="d-flex justify-content-between">
    <h4 class="ml-3">메뉴관리</h4>
    <button id="addmenu-btn" class="btn btn-outline-dark">메인메뉴 등록</button>
</div>
<div id="main-menu-list" class="mt-3">
    <table class="table">
        <thead>
            <tr>
                <th>순번</th>
                <th>메뉴명</th>
                <th>순서변경</th>
                <th>서브메뉴관리</th>
                <th>삭제</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>

<div id="sub-menus" class="d-none">
    <div class="d-flex justify-content-between mt-5">
        <h4 id="sub-menu-name" class="ml-3">서브메뉴관리</h4>
        <button id="addsubmenu-btn" class="btn btn-outline-dark">서브메뉴 등록</button>
    </div>
    <div id="sub-menu-list" class="mt-3">
        <table class="table">
            <thead>
                <tr>
                    <th>순번</th>
                    <th>메뉴명</th>
                    <th>메뉴종류</th>
                    <th>순서변경</th>
                    <th>내용관리</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>
</div>