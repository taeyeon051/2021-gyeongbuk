class ContentManage {
    constructor(main, sub) {
        this.app = new App();
        this.contentDom = document.querySelector("#content-div");
        this.nowLayout;
        this.isModify = false;
        this.main = main;
        this.sub = sub;

        this.init();
        this.addEvent();
    }

    // 초기 설정
    init() {
        const { main, sub } = this;
        document.querySelector("#content-manage-menu-name").innerHTML = `${main.menuName} - ${sub.menuName} - 내용관리`;
        this.layoutSelected(true);
        
        if (sub.data == undefined) document.querySelector("#content-div").innerHTML = "";
        else {
            document.querySelector("#content-div").innerHTML = sub.data;
            $(".content-layout").on("click", e => {
                $(".content-layout").removeClass("selected");
                e.target.classList.add("selected");
                this.nowLayout = e.target;
                this.layoutSelected(false);
            });
        }
    }

    // 이벤트 등록
    addEvent() {
        // 메뉴 버튼
        $("#back-menu").on("click", () => {
            const { app, main, sub } = this;
            $(".content-layout").removeClass("selected");
            const mainIdx = app.mainMenuList.findIndex(f => f.id == main.id);
            const subIdx = app.mainMenuList[mainIdx].subMenuList.findIndex(f => f.id == sub.id);
            this.app.mainMenuList[mainIdx].subMenuList[subIdx].data = document.querySelector("#content-div").innerHTML;
            $(".content-manage-page").animate({ "left": "100%" }, 500);
        });

        // 레이아웃 등록 버튼
        $("#layout-register").on("click", () => {
            $("#layout-popup").fadeIn('slow').css('display', 'flex');
            $("#layout-popup-title").text("레이아웃 등록");
        });

        $("#layout-add-btn").on("click", () => {
            if (this.valueCheck("#layout-width") || this.valueCheck("#layout-height") || this.valueCheck("#x-start") || this.valueCheck("#y-start")) return;
            else this.layoutRender();
        });

        // 텍스트 입력 버튼
        $("#text-input").on("click", () => {
            $("#text-input-popup").fadeIn('slow').css('display', 'flex');
        });

        $("#text-add-btn").on("click", () => {
            if (this.valueCheck("#font-size") || this.valueCheck("#text-content")) return;
            const font = $("#font-size").val();
            const content = $("#text-content").val();

            const div = document.createElement("div");
            div.classList.add("content-text");
            div.innerHTML = content;
            $(div).css({ "font-size": `${font}px`, 'white-space': 'pre-wrap', 'word-break': 'break-word' });
            $(this.nowLayout).append(div);

            this.app.closePopup();
        });

        // 이미지 입력 버튼
        $("#image-input").on("click", () => {
            $("#image-input-popup").fadeIn('slow').css('display', 'flex');
        });

        $("#image-file").change(e => {
            if (e.target.files[0] == undefined) return;
            $(".custom-file-label").text(e.target.files[0].name);
        });

        $("#image-add-btn").on("click", () => {
            const imageFile = document.querySelector("#image-file");
            const file = imageFile.files.length > 0 ? imageFile.files[0] : null;
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    $(this.nowLayout).css({ 'background-image': `url(${reader.result})` });
                    this.app.closePopup();
                }
            }
        });

        // 레이아웃 수정 버튼
        $("#content-modify-btn").on("click", () => {
            $("#layout-popup").fadeIn('slow').css('display', 'flex');
            $("#layout-popup-title").text("레이아웃 수정");
            this.isModify = true;

            const { style } = this.nowLayout;
            let w, h, x, y;
            w = style.width;
            h = style.height;
            x = style.left;
            y = style.top;

            $("#layout-width").val(w.replace("px", ""));
            $("#layout-height").val(h.replace("px", ""));
            $("#x-start").val(x.replace("px", ""));
            $("#y-start").val(y.replace("px", ""));
        });

        $("#content-delete-btn").on("click", () => {
            this.nowLayout.remove();
            this.layoutSelected(true);
        });
    }

    // 레이아웃 등록, 수정
    layoutRender() {
        const { contentDom, isModify } = this;
        let w, h, x, y;
        w = document.querySelector("#layout-width").value;
        h = document.querySelector("#layout-height").value;
        x = document.querySelector("#x-start").value;
        y = document.querySelector("#y-start").value;

        if (isModify) {
            $(this.nowLayout).css({ "width": `${w}px`, "height": `${h}px`, "left": `${x}px`, "top": `${y}px` });
            this.isModify = false;
        } else {
            const div = document.createElement("div");
            div.classList.add("content-layout");
            $(div).css({ "width": `${w}px`, "height": `${h}px`, "left": `${x}px`, "top": `${y}px` });
            div.addEventListener("click", e => {
                $(".content-layout").removeClass("selected");
                div.classList.add("selected");
                this.nowLayout = div;
                this.layoutSelected(false);
            });
            contentDom.appendChild(div);
        }

        this.app.closePopup();
    }

    layoutSelected(bool) {
        $("#text-input").attr("disabled", bool);
        $("#image-input").attr("disabled", bool);
        $("#content-modify-btn").attr("disabled", bool);
        $("#content-delete-btn").attr("disabled", bool);
    }

    // 빈 값 체크
    valueCheck(dom) {
        return $(dom).val().trim() === "";
    }
}