! function() {
    function t(e, i, n) {
        function r(o, a) {
            if (!i[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (s) return s(o, !0);
                    var h = new Error("Cannot find module '" + o + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var c = i[o] = {
                    exports: {}
                };
                e[o][0].call(c.exports, function(t) {
                    var i = e[o][1][t];
                    return r(i ? i : t)
                }, c, c.exports, t, e, i, n)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
        return r
    }
    return t
}()({
    2: [function(t, e, i) {
        function n(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function r(t, e) {
            return 3 * e - 6 * t
        }

        function s(t) {
            return 3 * t
        }

        function o(t, e, i) {
            return ((n(e, i) * t + r(e, i)) * t + s(e)) * t
        }

        function a(t, e, i) {
            return 3 * n(e, i) * t * t + 2 * r(e, i) * t + s(e)
        }

        function l(t, e, i, n, r) {
            var s, a, l = 0;
            do a = e + (i - e) / 2, s = o(a, n, r) - t, s > 0 ? i = a : e = a; while (Math.abs(s) > p && ++l < d);
            return a
        }

        function h(t, e, i, n) {
            for (var r = 0; r < c; ++r) {
                var s = a(e, i, n);
                if (0 === s) return e;
                var l = o(e, i, n) - t;
                e -= l / s
            }
            return e
        }
        var c = 4,
            u = .001,
            p = 1e-7,
            d = 10,
            f = 11,
            m = 1 / (f - 1),
            v = "function" == typeof Float32Array;
        e.exports = function(t, e, i, n) {
            function r(e) {
                for (var n = 0, r = 1, o = f - 1; r !== o && s[r] <= e; ++r) n += m;
                --r;
                var c = (e - s[r]) / (s[r + 1] - s[r]),
                    p = n + c * m,
                    d = a(p, t, i);
                return d >= u ? h(e, p, t, i) : 0 === d ? p : l(e, n, n + m, t, i)
            }
            if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var s = v ? new Float32Array(f) : new Array(f);
            if (t !== e || i !== n)
                for (var c = 0; c < f; ++c) s[c] = o(c * m, t, i);
            return function(s) {
                return t === e && i === n ? s : 0 === s ? 0 : 1 === s ? 1 : o(r(s), e, n)
            }
        }
    }, {}],
    8: [function(t, e, i) {
        (function(t) {
            ! function(n) {
                function r(e) {
                    "use strict";
                    var i = this;
                    return this.events = {}, this.state = null, this.options = e || {}, this.options.env = this.options.env || (0 === Object.keys(n).length && t && t.browser !== !0 ? "server" : "client"), this.options.mode = this.options.mode || ("server" !== this.options.env && this.options.pushState && n.history && n.history.pushState ? "pushState" : "hashchange"), this.version = "0.6.4", "function" == typeof n.addEventListener && (n.addEventListener("hashchange", function() {
                        i.trigger("hashchange")
                    }), n.addEventListener("popstate", function(t) {
                        return (!i.state || null !== i.state.previousState) && void i.trigger("navigate")
                    })), this
                }

                function s(t, e) {
                    this.stack = s.global.slice(0),
                    this.router = t,
                    this.runCallback = !0,
                    this.callbackRan = !1
                    this.propagateEvent = !0,
                    this.value = "/";
                    return this
                }
                r.prototype.get = r.prototype.add = function (t) {
                    var e = this,
                        i = Array.prototype.slice.call(arguments, 1, -1),
                        n = Array.prototype.slice.call(arguments, -1)[0],
                        a = function() {
                            l = new s(e, {}).enqueue(i.concat(n));
                            l.callback()
                            return e
                        };
                    return a()
                }, r.prototype.on = r.prototype.bind = function(t, e) {
                    var i = this,
                        n = t.split(" ");
                    return r._forEach(n, function(t) {
                        i.events[t] ? i.events[t].push(e) : i.events[t] = [e]
                    }), this
                }, r.prototype.once = function(t, e) {
                    var i = !1;
                    return this.on(t, function() {
                        return !i && (i = !0, e.apply(this, arguments), e = null, !0)
                    })
                }, r.prototype.context = function(t) {
                    var e = this,
                        i = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var n = arguments[0],
                            r = arguments.length > 2 ? Array.prototype.slice.call(arguments, 1, -1) : [],
                            s = Array.prototype.slice.call(arguments, -1)[0],
                            o = "/" !== t.slice(-1) && "/" !== n && "" !== n ? t + "/" : t,
                            a = "/" !== n.substr(0, 1) ? n : n.substr(1),
                            l = o + a;
                        return e.add.apply(e, [l].concat(i).concat(r).concat([s]))
                    }
                }, r.prototype.navigate = function(t) {
                    return this.path(t).trigger("navigate")
                }, r.listen = function() {
                    var t, e;
                    return arguments[0] && arguments[1] ? (t = arguments[0], e = arguments[1]) : e = arguments[0],
                        function() {
                            for (var t in e) this.add.call(this, t, e[t]);
                            return this
                        }.call(new r(t || {}))
                }, s.global = [], s.prototype.preventDefault = function() {
                    this.runCallback = !1
                }, s.prototype.stopPropagation = function() {
                    this.propagateEvent = !1
                }, s.prototype.parent = function() {
                    var t = !(!this.previousState || !this.previousState.value || this.previousState.value != this.value);
                    return !!t && this.previousState
                }, s.prototype.callback = function() {
                    this.callbackRan = !0, this.timeStamp = Date.now(), this.next()
                }, s.prototype.enqueue = function(t, e) {
                    for (var i = Array.isArray(t) ? e < t.length ? t.reverse() : t : [t]; i.length;) this.stack.splice(e || this.stack.length + 1, 0, i.shift());
                    return this
                }, s.prototype.next = function() {
                    var t = this;
                    return this.stack.shift().call(this.router, this.req, this, function() {
                        t.next.call(t)
                    })
                }, r.CallStack = s, "function" != typeof n.define || n.define.amd.grapnel ? "object" == typeof e && "object" == typeof e.exports ? e.exports = i = r : n.Grapnel = r : n.define(function(t, e, i) {
                    return n.define.amd.grapnel = !0, r
                })
            }.call({}, "object" == typeof window ? window : this)
        }).call(this, t("_process"))
    }, {
        _process: 48
    }],
    9: [plugin, { "gsap/TweenLite": 10 }],
    10: [tween, {}],
    11: [gsap, {}],
    44: [detect, {}],
    48: [function(t, e, i) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (u === setTimeout) return setTimeout(t, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
            try {
                return u(t, 0)
            } catch (e) {
                try {
                    return u.call(null, t, 0)
                } catch (e) {
                    return u.call(this, t, 0)
                }
            }
        }

        function o(t) {
            if (p === clearTimeout) return clearTimeout(t);
            if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
            try {
                return p(t)
            } catch (e) {
                try {
                    return p.call(null, t)
                } catch (e) {
                    return p.call(this, t)
                }
            }
        }

        function a() {
            v && f && (v = !1, f.length ? m = f.concat(m) : g = -1, m.length && l())
        }

        function l() {
            if (!v) {
                var t = s(a);
                v = !0;
                for (var e = m.length; e;) {
                    for (f = m, m = []; ++g < e;) f && f[g].run();
                    g = -1, e = m.length
                }
                f = null, v = !1, o(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function c() {}
        var u, p, d = e.exports = {};
        ! function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                u = n
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                p = r
            }
        }();
        var f, m = [],
            v = !1,
            g = -1;
        d.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            m.push(new h(t, e)), 1 !== m.length || v || s(l)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(t) {
            return []
        }, d.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, {}],
    52: [smooth, {}],
    65: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var r = t("router"),
            s = t("helpers"),
            o = t("resize"),
            a = n(o),
            l = (t("gsap"), t("invert")),
            h = n(l),
            c = t("api"),
            u = n(c),
            p = t("landing"),
            d = n(p),
            w = t("ui"),
            T = n(w),
            S = t("loader"),
            M = n(S),
            P = {
                landing: d["default"],
            },
            E = {
                components: {
                    UI: null,
                    loader: null
                },
                init: function() {
                    var t = this,
                        e = !1;
                    (0, s.isTouchDevice)() && document.documentElement.classList.add("is-touch");
                    var i = new a["default"];
                    i.init(), h["default"].init();
                    var n = (0, s.nodesAsArray)(document.querySelectorAll(".js-invert"));
                    n.forEach(function(t) {
                        h["default"].addInvert(t)
                    });
                    this.components.UI = new T["default"]({
                        block: "c-ui",
                        elements: ["logo", "nav", "burger", "nav-item-anchor", "off-canvas-nav-items"],
                        settings: {
                            multiple: !1
                        }
                    }), this.components.loader = new M["default"]({
                        block: "c-loader",
                        elements: ["canvas"],
                        settings: {
                            multiple: !1
                        }
                    }, {
                        framesLoaded: function() {
                            u["default"].loader = t.components.loader,
                            (0, r.initRoute)({
                                routes: P,
                                initialRoute: e,
                                onHashChange: E.onHashChange.bind(t),
                                UI: t.components.UI
                            }), t.components.UI.animateIn()
                        }
                    })
                },
                onHashChange: function(t) {
                    this.components.UI && this.components.UI.closeMenu(), t()
                }
            };
        E.init()
    }, {
        "gsap": 11,
        "loader": 68,
        "ui": 69,
        "api": 71,
        "helpers": 75,
        "invert": 76,
        "resize": 80,
        "router": 81,
        "landing": 93
    }],
    68: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            c = t("block-helper"),
            u = n(c),
            p = t("router"),
            d = (t("helpers"), t("bezier-easing")),
            f = (n(d), t("gsap")),
            m = t("prefix"),
            v = function(t) {
                function e(t, i) {
                    r(this, e);
                    var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.isPresent ? (n.framesLoaded = i.framesLoaded, n.currImage = null, n.currImageIndex = 0, n.loadingFrame = n.draw.bind(n), n.requestAnimationFrame = null, n.fps = 15, n.fpsInterval = 0, n.then = 0, n.startTime = 0, n.now = 0, n.elapsed = 0, n.init(), n) : s(n)
                }
                return o(e, t), a(e, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        t.currImage = new Image,
                        t.framesLoaded()
                    }
                }, {
                    key: "startLoader",
                    value: function() {
                        "LANDING" !== (0, p.getCurrentRoute)().name && (this.block.style.visibility = "visible", f.TweenLite.to(this.block, .4, {
                            opacity: 1
                        }), this.fpsInterval = 1e3 / this.fps, this.then = Date.now(), this.startTime = this.then, this.draw())
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        this.now = Date.now(), this.elapsed = this.now - this.then, this.elapsed > this.fpsInterval && (this.then = this.now - this.elapsed % this.fpsInterval, this.changeImageFrame(), this.canvasCTX.drawImage(this.currImage, 0, 0, this.loaderWidth, this.loaderHeight)), this.requestAnimationFrame = (0, m.requestAnimationFrame)(this.loadingFrame)
                    }
                }, {
                    key: "onLoaded",
                    value: function() {
                        var t = this;
                        f.TweenLite.to(this.block, .2, {
                            opacity: 0,
                            delay: 0,
                            onComplete: function() {
                                t.stop(), t.block.style.visibility = "hidden"
                            }
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        (0, m.cancelAnimationFrame)(this.requestAnimationFrame)
                    }
                }, {
                    key: "changeImageFrame",
                    value: function() {}
                }]), e
            }(u["default"]);
        i["default"] = v
    }, {
        "bezier-easing": 2,
        "gsap": 11,
        "block-helper": 73,
        "helpers": 75,
        "prefix": 79,
        "router": 81
    }],
    69: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            l = t("block-helper"),
            h = n(l),
            c = t("helpers"),
            u = t("bezier-easing"),
            p = (n(u), t("gsap")),
            d = function(t) {
                function e(t, i) {
                    r(this, e);
                    var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    n.setEventListeners();
                }
                return o(e, t), a(e, [{
                    key: "getNavItemAnchor",
                    value: function(t) {
                    }
                }, {
                    key: "setEventListeners",
                    value: function() {
                        this.elements.burger.addEventListener("click", this.onBurgerClick.bind(this))
                    }
                }, {
                    key: "onBurgerClick",
                    value: function() {
                        this.isOpen ? this.closeMenu() : (this.addMod(this.block, "open"), this.isOpen = !0)
                    }
                }, {
                    key: "closeMenu",
                    value: function() {
                        this.removeMod(this.block, "open"), this.isOpen = !1
                    }
                }, {
                    key: "getItemBydName",
                    value: function(t) {
                    }
                }, {
                    key: "animateIn",
                    value: function() {
                        this.block.style.display = "block", p.TweenLite.to(this.block, .4, {
                            opacity: 1,
                            delay: 1
                        })
                    }
                }, {
                    key: "setActiveItem",
                    value: function(t) {
                        var e = this;
                    }
                }]), e
            }(h["default"]);
        i["default"] = d
    }, {
        "bezier-easing": 2,
        "gsap": 11,
        "block-helper": 73,
        "helpers": 75
    }],
    70: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            },
            r = {
                async: !0,
                processData: !0,
                json: !0,
                onSuccess: function() {},
                onError: function() {}
            },
            s = {
                x: function() {
                    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                    for (var t, e = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], i = 0; i < e.length; i++) try {
                        t = new ActiveXObject(e[i]);
                        break
                    } catch (n) {}
                    return t
                },
                parseData: function(t, e) {
                    return t ? JSON.parse(e) : e
                },
                send: function(t, e, i, n) {
                    var r = s.x();
                    r.open(n, t, i.async), r.onreadystatechange = function() {
                        r.readyState == r.DONE && (404 == r.status || 400 == r.status || 403 == r.status ? i.onError(s.parseData(i.json, r.responseText)) : i.onSuccess(s.parseData(i.json, r.responseText)))
                    }, "POST" == n && r.setRequestHeader("Content-type", "application/json"), r.send(e)
                },
                "delete": function(t, e, i) {
                    var o = n({}, r, i),
                        a = [];
                    for (var l in e) a.push(encodeURIComponent(l) + "=" + encodeURIComponent(e[l]));
                    s.send(t + (a.length ? "?" + a.join("&") : ""), {}, o, "DELETE")
                },
                get: function(t, e, i) {
                    var o = n({}, r, i),
                        a = [];
                    for (var l in e) a.push(encodeURIComponent(l) + "=" + encodeURIComponent(e[l]));
                    s.send(t + (a.length ? "?" + a.join("&") : ""), {}, o, "GET")
                },
                post: function(t, e, i) {
                    var o, a = n({}, r, i),
                        l = [];
                    if (a.processData) {
                        for (var h in e) l.push(encodeURIComponent(h) + "=" + encodeURIComponent(e[h]));
                        o = l.join("&")
                    } else o = JSON.stringify(e);
                    s.send(t, o, a, "POST")
                }
            };
        i["default"] = s
    }, {}],
    71: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t("ajax"),
            s = n(r),
            o = t("helpers"),
            a = t("router"),
            l = {
                loader: null,
                cache: {
                    landing: null,
                },
                base: o.apiBaseUrl + "/wp-json/wp/v2",
                endpoints: {
                    landing: "/pages?slug=startpage",
                },
                getLanding: function(t) {
					t.onSuccess(t)
                },
                getCases: function (t) {
                    var e = this;
                    this.cache.cases ? t.onSuccess(this.cache.cases) : ( t.onSuccess({}) )
                },
            };
        i["default"] = l
    }, {
        "ajax": 70,
        "helpers": 75,
        "router": 81
    }],
    72: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = {
            wrapper: document.querySelector(".c-app-wrapper"),
            colors: {
                transparent: "transparent",
                black: "#000000",
                white: "#ffffff"
            },
            componentToHex: function(t) {
                var e = t.toString(16);
                return 1 == e.length ? "0" + e : e
            },
            rgbToHex: function(t, e, i) {
                return "#" + this.componentToHex(t) + this.componentToHex(e) + this.componentToHex(i)
            },
            setColor: function(t) {
                this.wrapper.style.backgroundColor = this.colors[t], this.getColor(), this.wrapper.className = "c-app-wrapper " + t
            },
            getColor: function() {
                if (!this.wrapper.style.backgroundColor) return "transparent";
                if (this.wrapper.style.backgroundColor == this.colors.transparent) return "transparent";
                var t = this.wrapper.style.backgroundColor.split("(")[1].split(")")[0];
                t = t.split(",");
                var e = this.rgbToHex(parseInt(t[0]), parseInt(t[1]), parseInt(t[2]));
                return e == this.colors.black ? "black" : e == this.colors.white ? "white" : void 0
            },
            setColorByRGB: function(t) {
                "rgb(0, 0, 0)" == t ? this.setColor("black") : "rgb(255, 255, 255)" == t ? this.setColor("white") : this.setColor("transparent")
            }
        };
        i["default"] = n
    }, {}],
    73: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            },
            s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = function() {
                function t(e) {
                    n(this, t);
                    var i = {
                            multiple: !0
                        },
                        s = e.settings || {};
                    this.settings = r(i, s), this.id = e.block, this.parent = e.parent ? e.parent : document, this.block = this._getBlock(this.id), this.elements = this._getElements(e.elements), this.isPresent = !(!this.block || 0 === this.block.length)
                }
                return s(t, [{
                    key: "_getBlock",
                    value: function(t) {
                        if (t) return this.settings.multiple ? Array.prototype.slice.call(this.parent.querySelectorAll("." + this.id)) : this.parent.querySelector("." + this.id)
                    }
                }, {
                    key: "_getElements",
                    value: function(t) {
                        var e = this;
                        if (t) {
                            var i = {};
                            return t.forEach(function(t) {
                                var n = Array.prototype.slice.call(e.parent.querySelectorAll("." + e.id + " ." + e.id + "__" + t));
                                i[t.split("-").join("_")] = n.length > 1 ? n : n[0]
                            }), i
                        }
                    }
                }, {
                    key: "getChildren",
                    value: function(t, e, i) {
                        var n = void 0;
                        n = "undefined" != typeof i ? "." + this.id + "__" + e + "--" + i : "." + this.id + "__" + e;
                        var r = Array.prototype.slice.call(t.querySelectorAll(n));
                        return t && r.length > 1 ? r : !(!t || 1 != r.length) && r[0]
                    }
                }, {
                    key: "hasMod",
                    value: function(t, e) {
                        return t.classList.contains(this.id + "--" + e)
                    }
                }, {
                    key: "childrenHasMod",
                    value: function(t, e, i) {
                        return t.classList.contains(this.id + "__" + e + "--" + i)
                    }
                }, {
                    key: "addMod",
                    value: function(t, e) {
                        t.classList.add(this.id + "--" + e)
                    }
                }, {
                    key: "addChildrenMod",
                    value: function(t, e, i) {
                        t.classList.add(this.id + "__" + e + "--" + i)
                    }
                }, {
                    key: "removeMod",
                    value: function(t, e) {
                        t.classList.remove(this.id + "--" + e)
                    }
                }, {
                    key: "removeChildrenMod",
                    value: function(t, e, i) {
                        t.classList.remove(this.id + "__" + e + "--" + i)
                    }
                }, {
                    key: "getParentBlock",
                    value: function(t) {
                        for (var e = t; !e.parentNode.classList.contains(this.id);) e = e.parentNode;
                        return e.parentNode
                    }
                }]), t
            }();
        i["default"] = o
    }, {}],
    75: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }

        function s(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        }

        function o() {
            var t = 1300,
                e = 1100,
                i = 640;
            return {
                large: window.matchMedia("(min-width: " + t + "px)").matches,
                medium: window.matchMedia("(min-width: " + e + "px)").matches,
                small: window.matchMedia("(min-width: " + i + "px)").matches,
                xsmall: window.matchMedia("(max-width: " + (i - 1) + "px)").matches
            }
        }

        function a(t) {
            return [].slice.call(t)
        }

        function l() {
            return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0 || navigator.appVersion.indexOf("Edge") !== -1
        }

        function h() {
            var t = window.getComputedStyle(document.documentElement, ""),
                e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1],
                i = "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1];
            return {
                dom: i,
                lowercase: e,
                css: "-" + e + "-",
                js: e[0].toUpperCase() + e.substr(1)
            }
        }

        function c() {
            var t = document.createElement("div");
            if (null == t.style.transform) {
                var e = ["Webkit", "Moz", "ms"];
                for (var i in e)
                    if (void 0 !== t.style[e[i] + "Transform"]) return e[i] + "Transform"
            }
            return "transform"
        }

        function u() {
            document.onmousemove = function(t) {
                var e, i, n;
                t = t || window.event, null == t.pageX && null != t.clientX && (e = t.target && t.target.ownerDocument || document, i = e.documentElement, n = e.body, t.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), C.x = t.pageX, C.y = t.pageY
            }
        }

        function p() {
            return C
        }

        function d() {
            return {
                x: C.x - r().width / 2,
                y: C.y - r().height / 2
            }
        }

        function f() {
            var t = !!window.MSInputMethodContext && !!document.documentMode;
            return window.navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("MSIE") > -1 || t || !o().large
        }

        function m(t, e) {
            return (Math.random() * (e - t) + t).toFixed(2)
        }

        function v(t, e, i) {
            return Math.min(Math.max(parseFloat(t), e), i)
        }

        function g(t, e, i) {
            return t * (i - e) + e
        }

        function y(t) {
            return t * Math.PI / 180
        }

        function _(t) {
            return 180 * t / Math.PI
        }

        function b(t, e) {
            var i = t.map(e);
            return i
        }

        function x() {
            return "ontouchstart" in window || navigator.maxTouchPoints
        }

        function w() {
            var t = new L["default"](window.navigator.userAgent);
            return t.is("AndroidOS")
        }

        function T() {
            var t, e = document.createElement("canvas"),
                i = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
            if (navigator.userAgent.indexOf("MSIE") > -1) try {
                t = WebGLHelper.CreateGLContext(e, "canvas")
            } catch (n) {} else
                for (var r = 0; r < i.length; r++) try {
                    if (t = e.getContext(i[r])) break
                } catch (n) {}
            return !!t
        }

        function S(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        }

        function M(t, e) {
            var i = new Image;
            i.onload = e, i.src = t
        }

        function P(t) {}

        function E() {
            var t = prompt("Please enter password:", "");
            return t
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.cancelAnimationFrame = i.requestAnimationFrame = i.apiBaseUrl = i.cdnUrl = void 0, i.getDimensions = r, i.randomIntFromInterval = s, i.getMq = o, i.nodesAsArray = a, i.isIE = l, i.getPrefix = h, i.transformProp = c, i.initMouseHandler = u, i.getMouseMove = p, i.getMouseMoveCenter = d, i.noSmoothScroll = f, i.randomFloatFromInterval = m, i.limitNumber = v, i.getNormalizedValue = g, i.radians = y, i.degrees = _, i.mapElems = b, i.isTouchDevice = x, i.isAndroidBrowser = w, i.webglDetect = T, i.launchIntoFullscreen = S, i.loadImageAsync = M, i.setMetaTags = P, i.pwdProtectedArea = E;
        var A = t("mobile-detect"),
            L = n(A),
            C = (i.cdnUrl = "", i.apiBaseUrl = "", i.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, i.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame, {
                x: 0,
                y: 0
            })
    }, {
        "mobile-detect": 44
    }],
    76: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            return t === !0
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("resize"),
            o = n(s),
            a = (t("prefix"), t("helpers")),
            l = {
                causes: [],
                inverts: [],
                _reqAnim: null,
                _resize: null,
                scrollListener: null,
                scrollListenerId: -1,
                scrollX: 0,
                init: function() {
                    this._resize = new o["default"], this._resize.addListener(this.onResize.bind(this))
                },
                onScroll: function(t) {
                    var e = this;
                    this.scrollX = t, this.inverts.forEach(function(i) {
                        var n = i.x + i.width / 2;
                        e.causes.forEach(function(e, s) {
                            var o = e.x - t,
                                a = e.x + e.width - t,
                                l = n > a,
                                h = i.inverted.some(r);
                            n > o && !l && !h && (i.elem.classList.add("invert"), i.inverted[s] = !0), l && i.inverted[s] && (i.elem.classList.remove("invert"), i.inverted[s] = !1), n < o && i.inverted[s] && (i.elem.classList.remove("invert"), i.inverted[s] = !1)
                        })
                    })
                },
                onResize: function() {
                    var t = this;
                    this.inverts.forEach(function(t) {
                        t.x = t.elem.getBoundingClientRect().left, t.width = t.elem.offsetWidth, t.inverted = []
                    }), this.causes.forEach(function(e) {
                        e.x = e.elem.getBoundingClientRect().left + t.scrollX, e.width = e.elem.offsetWidth
                    })
                },
                addCause: function(t) {
                    this.causes.push({
                        elem: t,
                        x: t.getBoundingClientRect().left,
                        width: t.offsetWidth
                    })
                },
                addInvert: function(t) {
                    this.inverts.push({
                        elem: t,
                        x: t.getBoundingClientRect().left,
                        width: t.offsetWidth,
                        inverted: []
                    })
                },
                initTemplate: function(t, e) {
                    var i = this,
                        n = (0, a.nodesAsArray)(t.querySelectorAll(".js-invert-cause"));
                    this.scrollListener && this.scrollListener.removeListener(this.scrollListenerId), e && (this.scrollListener = e), this.causes = [], n.forEach(function(t) {
                        var e = t.getAttribute("data-isdark");
                        1 != e && "true" != e || i.addCause(t)
                    }), this.inverts.forEach(function(t) {
                        t.inverted = [], t.elem.classList.remove("invert"), i.causes.forEach(function(e) {
                            t.inverted.push(!1)
                        })
                    }), this.onScroll(0), e && (this.scrollListenerId = this.scrollListener.addListener(this.onScroll.bind(this)))
                }
            };
        i["default"] = l
    }, {
        "helpers": 75,
        "prefix": 79,
        "resize": 80
    }],
    77: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t("gsap"),
            s = (t("helpers"), t("bezier-easing")),
            o = n(s),
            a = {
                mask: document.querySelector(".c-overlay-mask"),
                animateIn: function(t) {
                    r.TweenLite.to(this.mask, .6, {
                        x: "0%",
                        delay: .2,
                        ease: (0, o["default"])(.77, 0, .175, 1),
                        onComplete: t
                    })
                },
                animateOut: function(t) {
                    var e = this;
                    r.TweenLite.to(this.mask, .6, {
                        x: "100%",
                        ease: (0, o["default"])(.77, 0, .175, 1),
                        onComplete: function() {
                            t(), r.TweenLite.to(e.mask, 0, {
                                x: "-100%"
                            })
                        }
                    })
                }
            };
        i["default"] = a
    }, {
        "bezier-easing": 2,
        "gsap": 11,
        "helpers": 75
    }],
    78: [overscroll, { "smooth-scrollbar": 52 }],
    79: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        i.prefix = function() {
            var t = window.getComputedStyle(document.documentElement, ""),
                e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1],
                i = "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1];
            return {
                dom: i,
                lowercase: e,
                css: "-" + e + "-",
                js: e[0].toUpperCase() + e.substr(1)
            }
        }(), i.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, i.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    }, {}],
    80: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            s = null,
            o = function() {
                function t() {
                    return n(this, t), s || (s = this), this._isResizing = !1, this._isResizingInterval = null, this._resizeListener = this._onResize.bind(this), this._callbacks = [], s
                }
                return r(t, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this._isResizingInterval = setInterval(function() {
                            t._isResizing && (t._isResizing = !1)
                        }, 100), window.addEventListener("resize", this._resizeListener)
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        this._isResizing = !0, this._callbacks.forEach(function(t) {
                            t.cb()
                        })
                    }
                }, {
                    key: "addListener",
                    value: function(t) {
                        var e = {
                            id: this._callbacks.length,
                            cb: t
                        };
                        return this._callbacks.push(e), e.id
                    }
                }, {
                    key: "getListenerBydId",
                    value: function(t) {
                        return this._callbacks.filter(function(e) {
                            return e.id == t
                        })[0]
                    }
                }, {
                    key: "removeListener",
                    value: function(t) {
                        var e = this.getListenerBydId(t);
                        if (e) {
                            var i = this._callbacks.indexOf(e);
                            i > -1 && this._callbacks.splice(i, 1)
                        }
                    }
                }]), t
            }();
        i["default"] = o
    }, {}],
    81: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return d.navigate(t, e, i)
        }

        function o() {
            return p.ViewSettings["LANDING"]
        }

        function a() {
            var t = d.grapnel.state.params.id;
            return !!t && t
        }

        function l(t) {
            d = new f(t), d.init()
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        i.navigate = s, i.getCurrentRoute = o, i.getCurrentRouteID = a, i.initRoute = l;
        var c = t("grapnel"),
            u = n(c),
            b = t("landing"),
            z = n(b)["default"],
            p = t("views-settings"),
            d = null,
            f = function() {
                function t(e) {
                    r(this, t), this.routes = e.routes, this.initialRoute = e.initialRoute, this.onHashChange = e.onHashChange || function() {}, this.UI = e.UI, this.animating = !1, this.grapnel = new u["default"]({
                        pushState: !0
                    })
                }
                return h(t, [{
                    key: "init",
                    value: function () {
                        this.declareRoutes()
                    }
                }, {
                    key: "declareRoutes",
                    value: function() {
                        var t = this;
                        Object.keys(this.routes).forEach(function(e) {
                            t.grapnel.get(t.routes[e].route, t.animateRoute.bind(t))
                        })
                    }
                }, {
                    key: "initRoutes",
                    value: function() {}
                }, {
                    key: "setRouteEventHandlers",
                    value: function() {}
                }, {
                    key: "setEventHandlers",
                    value: function() {}
                }, {
                    key: "onNavigate",
                    value: function(t) {}
                }, {
                    key: "navigate",
                    value: function(t) {}
                }, {
                    key: "getRouteByKey",
                    value: function(t) {}
                }, {
                    key: "animateRoute",
                    value: function(t, e, i) {
                        var n = this,
                            r = null !== e.previousState && e.previousState !== !1 && "undefined" != typeof e.previousState;
                        this.UI.setActiveItem(z.name), z.enable(t, function() {
                                n.showRoute(z.wrapper), n.setEventHandlers(), z.animateIn(function() {
                                    n.animating = !1
                                })
                            })
                    }
                }, {
                    key: "showRoute",
                    value: function(t) {
                        t.style.display = "block"
                    }
                }, {
                    key: "hideRoute",
                    value: function(t) {
                        t.style.display = "none"
                    }
                }]), t
            }()
    }, {
        "grapnel": 8,
        "views-settings": 86,
        "landing": 93
    }],
    82: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            s = t("prefix"),
            o = function() {
                function t(e) {
                    n(this, t), this.smoothScrollBar = e.smoothScrollBar, this._isScrolling = !1, this._scrollTop = 0, this._isScrollingInterval = null, this._scrollListener = this._onScroll.bind(this), this._callbacks = []
                }
                return r(t, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this._isScrollingInterval = setInterval(function() {
                            t._isScrolling && (t._isScrolling = !1)
                        }, 100), this.smoothScrollBar ? this.smoothScrollBar.addListener(this._scrollListener.bind(this)) : window.addEventListener("scroll", this._scrollListener.bind(this)), this._listen()
                    }
                }, {
                    key: "_onScroll",
                    value: function() {
                        this._isScrolling = !0
                    }
                }, {
                    key: "_listen",
                    value: function() {
                        this._reqAnim = (0, s.requestAnimationFrame)(this._listen.bind(this)), this._checkIfScrolling()
                    }
                }, {
                    key: "_checkIfScrolling",
                    value: function() {
                        var t = this;
                        this._isScrolling && (this._scrollTop = this.smoothScrollBar ? this.smoothScrollBar.offset.x : window.pageXOffset, this._callbacks.forEach(function(e) {
                            e.cb(t._scrollTop)
                        }))
                    }
                }, {
                    key: "getListenerBydId",
                    value: function(t) {
                        return this._callbacks.filter(function(e) {
                            return e.id == t
                        })[0]
                    }
                }, {
                    key: "addListener",
                    value: function(t) {
                        var e = {
                            id: this._callbacks.length,
                            cb: t
                        };
                        return this._callbacks.push(e), e.id
                    }
                }, {
                    key: "removeListener",
                    value: function(t) {
                        var e = this.getListenerBydId(t);
                        if (e) {
                            var i = this._callbacks.indexOf(e);
                            i > -1 && this._callbacks.splice(i, 1)
                        }
                    }
                }]), t
            }();
        i["default"] = o
    }, {
        "prefix": 79
    }],
    83: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            l = t("smooth-scrollbar"),
            h = n(l),
            c = t("overscroll"),
            u = n(c),
            p = t("scroll"),
            d = n(p),
            f = t("helpers"),
            m = function(t) {
                function e() {
                    return r(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return o(e, t), a(e, [{
                    key: "transformDelta",
                    value: function(t, e) {
                        return this.shouldInvertDelta(e) ? {
                            x: t.y,
                            y: 0
                        } : t
                    }
                }, {
                    key: "shouldInvertDelta",
                    value: function(t) {
                        return this.options.events.some(function(e) {
                            return t.type.match(e)
                        })
                    }
                }]), e
            }(l.ScrollbarPlugin);
        m.pluginName = "invertDelta", m.defaultOptions = {
            events: [/wheel/]
        }, h["default"].use(m), h["default"].use(u["default"]);
        var v = function g(t) {
            r(this, g);
            var e = (0, f.isTouchDevice)();
            h["default"].destroy(document.querySelector(".smooth-scrollbar")), e || (this.smoothScrollBar = h["default"].init(t.container, {
                damping: t.damping || .1,
                continuousScrolling: t.continuousScrolling || !1,
                syncCallbacks: !0,
                plugins: {
                    invertDelta: {
                        events: [/wheel/]
                    },
                    overscroll: {}
                }
            })), this.scrollListener = new d["default"]({
                smoothScrollBar: !e && this.smoothScrollBar
            }), this.scrollListener.init()
        };
        i["default"] = v
    }, {
        "smooth-scrollbar": 52,
        "overscroll": 78,
        "scroll": 82,
        "helpers": 75
		}],
    86: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = {
                LANDING: "LANDING",
                CASE: "CASE",
                CASES: "CASES",
                ABOUT: "ABOUT",
                CONTACT: "CONTACT"
            },
            r = {
                LANDING: {
                    name: n.LANDING,
                    route: "/:show?/:HNM?:DT?:MOH?:KSS?/",
                    wrapper: document.querySelector(".o-section--landing")
                },
                CASES: {
                    name: n.CASES,
                    route: "/work",
                    wrapper: document.querySelector(".o-section--cases")
                }
            };
        i.ViewSettings = r, i.Views = n
    }, {}],
    93: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t("gsap"),
            s = t("ScrollToPlugin"),
            o = (n(s), t("bezier-easing")),
            a = n(o),
            l = t("views-settings"),
            u = t("api"),
            p = n(u),
            d = t("overlay"),
            f = n(d),
            m = t("helpers"),
            y = t("smooth-scroll"),
            _ = n(y),
            b = t("bg-color"),
            x = n(b),
            C = function() {
                return '\n    <div class="o-landing__about">\n        <div class="c-intro-about">\n            <h2 class="c-intro-about__headline">{{{ about.intro_about_headline }}}</h2>\n        </div>\n    </div>\n\n    <div class="smooth-scrollbar o-landing__featured-scrollbar" style="height: 100%;">\n        <div class="o-landing__featured">\n            <div class="c-divider">\n                <span>Scroll for cases</span>\n                <div class="c-divider__arrows"></div>\n            </div>\n            <div class="o-featured"> \n                {{#each cases}}\n                    <a class="o-featured__case js-navigate js-invert-cause" data-isDark="{{this.isDark}}" data-name="{{ this.name }}" href="{{ this.url }}" data-href="{{ this.url }}">\n                        <div class="o-featured__background"></div>\n                        <div class="o-featured__inner">\n                            <div class="o-featured__media">\n                                <div class="o-featured__media-background"></div>\n                                {{#equal this.mediaType "image"}}\n                                    <img sizes="\n                                    (min-width: 1000px) calc(50vw - 120px),\n                                    calc(100vw - 60px)" \n                                    srcset="\n                                        {{ this.images.xsmall }} 520w,\n                                        {{ this.images.midsize }} 680w,\n                                        {{ this.images.afc_large }} 1020w,\n                                        {{ this.images.xlarge }} 1440w"\n                                    src="{{ this.images.xlarge }}" />\n                                {{/equal}}\n\n                                {{#equal this.mediaType "video"}}\n                                    <video src="{{ this.video }}" loop playsinline muted></video>\n                                {{/equal}}\n                                <div class="o-featured__media-overlay"></div>\n                            </div>\n                            <div class="o-featured__info">\n                                <div class="o-featured__info-name">\n                                    <h3 class="o-featured__headline">{{ this.headline }}</h3>\n                                    <h3 class="o-featured__subheadline">{{{ this.subheadline }}}</h3>\n                                </div>\n                                {{#equal this.isLocked true}}\n                                    <div class="o-featured__is-locked">\n                                        <span>Locked</span>\n                                        <svg class="o-featured__lock-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 9 12.7" style="enable-background:new 0 0 9 12.7;" xml:space="preserve">\n                                            <g>\n                                                <rect x="4" y="6.7" width="1" height="3"/>\n                                                <path d="M8,3.7V3.5C8,1.6,6.4,0,4.5,0S1,1.6,1,3.5v0.2H0v9h9v-9H8z M2,3.5C2,2.1,3.1,1,4.5,1S7,2.1,7,3.5v0.2H2V3.5z M8,11.7H1v-7\n                                                h1h5h1V11.7z"/>\n                                            </g>\n                                        </svg>\n                                    </div>\n                                {{/equal}}\n                            </div>\n                        </div>\n                    </a>\n                {{/each}}\n                <a class="c-contact-promo js-invert-cause js-navigate" data-isdark="true" data-href="/contact" href="/contact">\n                    <div class="c-contact-promo__text">\n                        <h3 class="c-contact-promo__headline">Hello</h3>\n                    </div>\n                    <div class="c-contact-promo__subheadline-wrapper">\n                        <h3 class="o-featured__headline c-contact-promo__subheadline">Want to know more?</h3>\n                        <div class="c-contact-promo__get-in-touch">\n                            <span>Get in touch</span>\n                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                                 viewBox="0 0 76 47.1" style="enable-background:new 0 0 76 47.1;" xml:space="preserve">\n                                <polygon points="66.5,21.1 0,21.1 0,26.1 66.5,26.1 48.9,43.6 52.4,47.1 76,23.5 52.4,0 48.9,3.5 "/>\n                            </svg>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n'
            },
            k = {
                route: l.ViewSettings.LANDING.route,
                name: l.ViewSettings.LANDING.name,
                wrapper: l.ViewSettings.LANDING.wrapper,
                overlay: null,
                data: null,
                featuredVideos: null,
                first: !0,
                components: {
                    aboutIntro: null,
                    fallingCubes: null
                },
                utils: {
                    scrollBar: null,
                    videoController: null
                },
                objects: {
                    cases: null
                },
                init: function() {},
                animateIn: function(t, e) {
                    e == l.Views.CASE || e == l.Views.ABOUT || e == l.Views.CONTACT || e == l.Views.CASES ? (x["default"].setColor("transparent"), f["default"].animateOut(t)) : t()
                },
                animateOut: function(t, e, i) {
                    e == l.Views.CASE ? (this.removeListeners(), this.objects.cases.animateOutCase(i.params.id, function(e) {
                        x["default"].setColorByRGB(e), t()
                    })) : e != l.Views.ABOUT && e != l.Views.CONTACT && e != l.Views.CASES || (x["default"].setColor("transparent"), f["default"].animateIn(t))
                },
                enable: function(t, e, i) {
                    var n = this,
                        r = this.wrapper;
                    p["default"].getLanding({
                        onSuccess: function(t) {
                            n.data = {}, n.data.about = "", n.data.cases = [], p["default"].getCases({
                                onSuccess: function(t) {
                                    n.data.cases = {}
                                    , n.wrapper.querySelectorAll(".smooth-scrollbar").length && (n.utils.scrollBar = new _["default"]({
                                        container: n.wrapper.querySelector(".smooth-scrollbar"),
                                        damping: .35
                                    })), n.initComponents(), e()
                                },
                                onError: function(t) {
                                    console.log(t)
                                }
                            })
                        },
                        onError: function(t) {
                            console.log(t)
                        }
                    })
                },
                removeListeners: function() {
                    this.components.fallingCubes.scrollbar.scrollListener.removeListener(this.components.fallingCubes.scrollListenerId), this.components.fallingCubes.stop(), this.utils.videoController.stop()
                },
                disable: function(t, e, i) {
                    this.removeListeners(), this.components.fallingCubes.block.style.display = "none", this.wrapper.innerHTML = "", e()
                },
				initComponents: function () {
					var t = this;
					var e = document.querySelector(".c-ui");
					r.TweenLite.to(e, .4, {
						opacity: 1
					});
					var i = (0, m.isTouchDevice)(),
						n = {
							scrollLeft: 0
						};
					setTimeout(function () {
						i ? r.TweenLite.to(window, 1.2, {
							scrollTo: {
								x: .25 * (0, m.getDimensions)().width + 30,
								autoKill: !1
							},
							ease: Power2.easeOut
						}) : t.utils.scrollBar && 0 == t.utils.scrollBar.smoothScrollBar.scrollLeft && r.TweenLite.to(n, 1.2, {
							scrollLeft: .25 * (0, m.getDimensions)().width + 60,
							ease: (0, a["default"])(.165, .84, .44, 1),
							onUpdate: function () {
								i || (t.utils.scrollBar.smoothScrollBar.scrollLeft = n.scrollLeft)
							}
						})
					}, 1e3)
				}
            };
        i["default"] = k
    }, {
        "gsap": 11,
        "ScrollToPlugin": 9,
        "bezier-easing": 2,
        "views-settings": 86,
        "api": 71,
        "overlay": 77,
        "helpers": 75,
        "smooth-scroll": 83,
        "bg-color": 72
    }]
	}, {}, [65]);