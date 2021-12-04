function loaddown() {
    var tmp = document.getElementById("in_text1");
    tmp.style.transition = "2s ease";
    tmp.style.transform = "none";
    tmp.style.opacity = 1;
    var tmp = document.getElementById("in_text2");
    tmp.style.transition = "2s ease";
    tmp.style.transform = "none";
    tmp.style.opacity = 1;
    var tmp = document.getElementById("in_text3");
    tmp.style.transition = "2s ease";
    tmp.style.transform = "none";
    tmp.style.opacity = 1;

    // 底边栏
    var tmp = document.getElementById("footer_trans");
    tmp.style.transition = "2s ease";
    tmp.style.transform = "none";
    tmp.style.opacity = 1;

    // 侧边栏
    var tmp = document.getElementById("side_trans");
    tmp.style.animationName = "disappre";

    // egg
    let str_base64 = "5YON44GE44Gf44KJ44CB6LKg44GR77yB";
    let title = document.getElementById("in_text3")
    title.title = atou(str_base64)
}

function atou(str) {
    return decodeURIComponent(escape(window.atob(str)))
}
