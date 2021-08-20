const log = console.log;
const myStorage = localStorage;

window.onload = () => {
    const app = new App();
}

class App {
    constructor() {
        this.mainMenuList = [];
        this.nowMenu;
        this.subMenuType = { "general": "일반형", "board": "게시판" };

        // this.init();
        this.addEvent();
    }

    // 초기 설정
    init() {
        if (myStorage.length < 1) return;
        this.mainMenuList = JSON.parse(myStorage.getItem('mainMenu'));
        this.subMenuList = JSON.parse(myStorage.getItem('subMenu'));
        this.menuListRender(this.mainMenuList, "main");
    }

    // 이벤트 등록
    addEvent() {
        const addMenuPopup = document.querySelector("#addmenu-popup");
        const closeBtn = document.querySelectorAll(".close-btn");

        $("#addmenu-btn").on("click", () => {
            $(addMenuPopup).fadeIn('slow');
            $(addMenuPopup).css('display', 'flex');
        });

        $(closeBtn).on("click", () => {
            this.closePopup();
        });

        $("#menu-add-btn").on("click", () => {
            if ($("#menu-name").val().trim() == "") return;
            this.mainMenuList.push({ "id": this.mainMenuList.length + 1, "menuName": $("#menu-name").val(), "subMenuList": [] });
            this.menuListRender(this.mainMenuList, "main");
        });

        $("#addsubmenu-btn").on("click", () => {
            const addsubMenuPopup = document.querySelector("#addsubmenu-popup");
            $(addsubMenuPopup).fadeIn('slow');
            $(addsubMenuPopup).css('display', 'flex');
        });

        $("#submenu-add-btn").on("click", () => {
            if ($("#submenu-name").val().trim() == "") return;

            const submenuType = this.subMenuType[$("#submenu-type").val()];
            this.nowMenu.subMenuList.push({ "id": this.nowMenu.subMenuList.length + 1, "menuName": $("#submenu-name").val(), "type": submenuType });
            this.menuListRender(this.nowMenu.subMenuList, "sub");
        });

        $("#login-btn").on("click", () => {
            $("#login-popup").fadeIn('slow').css('display', 'flex');
        });

        $("#user-login-btn").on("click", () => {
            const userId = document.querySelector("#login-id").value;
            const userPwd = document.querySelector("#login-pwd").value;

            if (userId.trim() === "" || userPwd.trim() === "") return alert("빈 값이 있습니다.");

            $.ajax({
                url: '/user/login',
                type: 'POST',
                data: { id: userId, password: userPwd },
                success: e => {
                    log(e);
                    if (e == "성공") {
                        this.closePopup();
                        alert("성공적으로 로그인 되었습니다.");
                    } else {
                        alert(e);
                    }
                }
            })
        });

        $("#register-btn").on("click", () => {
            $("#register-popup").fadeIn('slow').css('display', 'flex');
        });

        $("#user-register-btn").on("click", () => {
            const userId = document.querySelector("#user-id").value;
            const userName = document.querySelector("#user-name").value;
            const userPwd = document.querySelector("#user-pwd").value;

            if (userId.trim() === "" || userName.trim() === "" || userPwd.trim() === "") return alert("빈 값이 있습니다.");
            log(userId, userName, userPwd);
            $.ajax({
                url: '/user/register',
                type: 'POST',
                data: { id: userId, name: userName, password: userPwd },
                success: e => {
                    if (e == "성공") {
                        this.closePopup();
                        alert("성공적으로 회원가입 되었습니다.");
                    } else {
                        alert(e);
                    }
                }
            });
        });
    }

    // 메인메뉴 그리기
    menuListRender(list, ms) {
        let dom = document.querySelector(`#${ms}-menu-list tbody`);
        dom.innerHTML = "";

        myStorage.setItem('mainMenu', JSON.stringify(this.mainMenuList));
        list.sort((a, b) => { return a.id - b.id });
        const len = list.length;

        for (let i = 1; i <= len; i++) {
            const tr = document.createElement("tr");
            const numberSelect = document.createElement("select");
            numberSelect.id = i < 10 ? "0" + i : i;
            numberSelect.name = "number";

            for (let j = 1; j <= len; j++) {
                const option = document.createElement("option");
                option.value = j;
                option.innerHTML = j;
                if (i == j) $(option).attr("selected", "true");
                numberSelect.appendChild(option);
            }

            if (ms == "main") {
                tr.innerHTML =
                    `<td>${list[i - 1].id}</td>
                    <td>${list[i - 1].menuName}</td>
                    <td>${numberSelect.outerHTML}</td>
                    <td><button data-idx="${list[i - 1].id}" class="btn btn-outline-dark py-0 sub-menu-manage">서브관리</button></td>
                    <td><button data-idx="${list[i - 1].id}" class="btn btn-outline-dark py-0 menu-delete">삭제</button></td>`;
            } else if (ms == "sub") {
                let trText = '';
                trText +=
                    `<td>${list[i - 1].id}</td>
                    <td>${list[i - 1].menuName}</td>
                    <td>${list[i - 1].type}</td>
                    <td>${numberSelect.outerHTML}</td>`;
                if (list[i - 1].type == "일반형") trText += `<td><button data-idx="${list[i - 1].id}" class="btn btn-outline-dark py-0 content-manage">내용관리</button></td>`;
                else trText += `<td></td>`;
                trText += `<td><button data-idx="${list[i - 1].id}" class="btn btn-outline-dark py-0 submenu-delete">삭제</button></td>`;
                tr.innerHTML = trText;
            }

            dom.appendChild(tr);
        }

        if (ms == "main") this.mainButtonEvent();
        else if (ms == "sub") this.subButtonEvent();
        this.optionEvent(list, ms);
        this.closePopup();
    }

    // 옵션 클릭 이벤트
    optionEvent(list, ms) {
        const select = document.querySelectorAll(`#${ms}-menu-list select`);

        $(select).change(e => {
            const { id, value } = e.target;
            const changeCheck = confirm('정말 변경 하시겠습니까?');
            if (changeCheck) {
                const idx = list.findIndex(menu => menu.id == id);
                let changeMenu = list.splice(idx, 1);
                changeMenu[0].id = value * 1;

                for (let i = 1; i <= list.length; i++) list[i - 1].id = i;
                list.splice(value - 1, 0, changeMenu[0]);
                for (let i = value; i <= list.length; i++) list[i - 1].id = i * 1;

                if (ms == "main") this.menuListRender(this.mainMenuList, "main");
                else if (ms == "sub") this.menuListRender(this.nowMenu.subMenuList, "sub");
            } else e.target.value = id * 1;
        });
    }

    // 서브관리, 삭제 버튼 클릭 이벤트
    mainButtonEvent() {
        const subMenuManage = document.querySelectorAll(".sub-menu-manage");
        const menuDeleteBtn = document.querySelectorAll(".menu-delete");

        $(menuDeleteBtn).on("click", e => {
            const { idx } = e.target.dataset;
            const { length } = this.mainMenuList;
            if (confirm("정말 삭제하시겠습니까?")) {
                this.mainMenuList.splice(idx - 1, 1);
                for (let i = 1; i < length; i++) this.mainMenuList[i - 1].id = i * 1;
                this.menuListRender(this.mainMenuList, "main");
                this.subMenuClear();
            }
        });

        $(subMenuManage).on("click", e => {
            const { idx } = e.target.dataset;
            const mainMenu = this.mainMenuList.find(menu => menu.id == idx);
            const menus = document.querySelector("#sub-menus");
            menus.classList.remove("d-none");
            document.querySelector("#sub-menu-name").innerHTML = `${mainMenu.menuName} - 서브메뉴관리`;
            this.nowMenu = mainMenu;
            this.menuListRender(this.nowMenu.subMenuList, "sub");
        });
    }

    // 서브메뉴 내용관리, 삭제 버튼 클릭 이벤트
    subButtonEvent() {
        const contentManage = document.querySelectorAll(".content-manage");
        const submenuDelete = document.querySelectorAll(".submenu-delete");

        $(contentManage).on("click", e => {
            const { idx } = e.target.dataset;
            const subMenu = this.nowMenu.subMenuList[idx - 1];
            new ContentManage(this.nowMenu, subMenu);
            $(".content-manage-page").animate({ "left": 0 }, 500, () => {
                this.subMenuClear();
            });
        });

        $(submenuDelete).on("click", e => {
            const { idx } = e.target.dataset;
            const len = this.nowMenu.subMenuList.length;
            if (confirm("정말 삭제하시겠습니까?")) {
                this.nowMenu.subMenuList.splice(idx - 1, 1);
                for (let i = 1; i < len; i++) this.nowMenu.subMenuList[i - 1].id = i * 1;
                this.menuListRender(this.nowMenu.subMenuList, "sub");
            }
        });
    }

    // 서브메뉴 클리어
    subMenuClear() {
        document.querySelector("#sub-menus").classList.add("d-none");
    }

    // 팝업 닫기
    closePopup() {
        if ($(".popup textarea")) $(".popup textarea").val("");
        $(".popup input").val("");
        $(".popup").fadeOut('slow');
    }
}