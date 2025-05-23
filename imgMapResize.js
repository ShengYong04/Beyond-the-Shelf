!(function () {
    "use strict";
    function r() {
        function e() {
            var r = { width: u.width / u.naturalWidth, height: u.height / u.naturalHeight },
                a = { width: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-left"), 10), height: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-top"), 10) };
            i.forEach(function (e, t) {
                var n = 0;
                o[t].coords = e
                    .split(",")
                    .map(function (e) {
                        var t = 1 == (n = 1 - n) ? "width" : "height";
                        return a[t] + Math.floor(Number(e) * r[t]);
                    })
                    .join(",");
            });
        }
        function t(e) {
            return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
        }
        function n() {
            clearTimeout(d), (d = setTimeout(e, 250));
        }
        function r(e) {
            return document.querySelector('img[usemap="' + e + '"]');
        }
        var a = this,
            o = null,
            i = null,
            u = null,
            d = null;
        "function" != typeof a._resize
            ? ((o = a.getElementsByTagName("area")),
              (i = Array.prototype.map.call(o, t)),
              (u = r("#" + a.name) || r(a.name)),
              (a._resize = e),
              u.addEventListener("load", e, !1),
              window.addEventListener("focus", e, !1),
              window.addEventListener("resize", n, !1),
              window.addEventListener("readystatechange", e, !1),
              document.addEventListener("fullscreenchange", e, !1),
              (u.width === u.naturalWidth && u.height === u.naturalHeight) || e())
            : a._resize();
    }
    function e() {
        function t(e) {
            e &&
                (!(function (e) {
                    if (!e.tagName) throw new TypeError("Object is not a valid DOM element");
                    if ("MAP" !== e.tagName.toUpperCase()) throw new TypeError("Expected <MAP> tag, found <" + e.tagName + ">.");
                })(e),
                r.call(e),
                n.push(e));
        }
        var n;
        return function (e) {
            switch (((n = []), typeof e)) {
                case "undefined":
                case "string":
                    Array.prototype.forEach.call(document.querySelectorAll(e || "map"), t);
                    break;
                case "object":
                    t(e);
                    break;
                default:
                    throw new TypeError("Unexpected data type (" + typeof e + ").");
            }
            return n;
        };
    }
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && "object" == typeof module.exports ? (module.exports = e()) : (window.imageMapResize = e()),
        "jQuery" in window &&
            (window.jQuery.fn.imageMapResize = function () {
                return this.filter("map").each(r).end();
            });
})();
