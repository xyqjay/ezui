"use strict";
!function (e) { var t, n, o, i, c, d, l = '<svg><symbol id="icon-icon_placeholder" viewBox="0 0 1024 1024"><path d="M463.104 683.52L269.44 469.632A51.2 51.2 0 0 1 307.392 384h406.336a51.2 51.2 0 0 1 37.952 85.568L558.016 683.52a64 64 0 0 1-94.912 0z" fill="#2B2B2D" fill-opacity=".6" ></path></symbol></svg>', a = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss"); if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    }
    catch (e) {
        console && console.log(e);
    }
} function s() { c || (c = !0, o()); } t = function () { var e, t, n, o; (o = document.createElement("div")).innerHTML = l, l = null, (n = o.getElementsByTagName("svg")[0]) && (n.setAttribute("aria-hidden", "true"), n.style.position = "absolute", n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", e = n, (t = document.body).firstChild ? (o = e, (n = t.firstChild).parentNode.insertBefore(o, n)) : t.appendChild(e)); }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function () { document.removeEventListener("DOMContentLoaded", n, !1), t(); }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, (d = function () { try {
    i.documentElement.doScroll("left");
}
catch (e) {
    return void setTimeout(d, 50);
} s(); })(), i.onreadystatechange = function () { "complete" == i.readyState && (i.onreadystatechange = null, s()); }); }(window);
