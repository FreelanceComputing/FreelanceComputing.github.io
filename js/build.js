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
    /*3: [function(t, e, i) {
        "use strict";
        var n = t("component-emitter"),
            r = t("debounce"),
            s = e.exports;
        n(s), s.debounceDelay = 50, s.onGlobalResize = function() {
            this.width = window.innerWidth, this.height = window.innerHeight, this.halfWidth = .5 * this.width, this.halfHeight = .5 * this.height, this.applyResize(), this.debounceDelay > 0 ? this.debounceResize() : this.applyResizeDebounce()
        }, s.applyResizeDebounce = function() {
            this.emit("resizeDebounce")
        }, s.applyResize = function() {
            this.emit("resize")
        }, s.addListener = function(t, e) {
            this.on(e ? "resize" : "resizeDebounce", t)
        }, s.removeListener = function(t) {
            t && (this.off("resize", t), this.off("resizeDebounce", t))
        }, s.debounceResize = r(s.applyResizeDebounce.bind(s), s.debounceDelay), s.onGlobalResize(), window.addEventListener("resize", s.onGlobalResize.bind(s))
    }, {
        "component-emitter": 5,
        debounce: 6
    }],
    4: [function(t, e, i) {}, {}],
    5: [function(t, e, i) {
        function n(t) {
            if (t) return r(t)
        }

        function r(t) {
            for (var e in n.prototype) t[e] = n.prototype[e];
            return t
        }
        "undefined" != typeof e && (e.exports = n), n.prototype.on = n.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
        }, n.prototype.once = function(t, e) {
            function i() {
                this.off(t, i), e.apply(this, arguments)
            }
            return i.fn = e, this.on(t, i), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var i = this._callbacks["$" + t];
            if (!i) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
            for (var n, r = 0; r < i.length; r++)
                if (n = i[r], n === e || n.fn === e) {
                    i.splice(r, 1);
                    break
                } return this
        }, n.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1),
                i = this._callbacks["$" + t];
            if (i) {
                i = i.slice(0);
                for (var n = 0, r = i.length; n < r; ++n) i[n].apply(this, e)
            }
            return this
        }, n.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
        }, n.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }, {}],
    6: [function(t, e, i) {
        e.exports = function(t, e, i) {
            function n() {
                var h = Date.now() - a;
                h < e && h >= 0 ? r = setTimeout(n, e - h) : (r = null, i || (l = t.apply(o, s), o = s = null))
            }
            var r, s, o, a, l;
            null == e && (e = 100);
            var h = function() {
                o = this, s = arguments, a = Date.now();
                var h = i && !r;
                return r || (r = setTimeout(n, e)), h && (l = t.apply(o, s), o = s = null), l
            };
            return h.clear = function() {
                r && (clearTimeout(r), r = null)
            }, h.flush = function() {
                r && (l = t.apply(o, s), o = s = null, clearTimeout(r), r = null)
            }, h
        }
    }, {}],
    7: [function(t, e, i) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(t) {
            return "function" == typeof t
        }

        function s(t) {
            return "number" == typeof t
        }

        function o(t) {
            return "object" == typeof t && null !== t
        }

        function a(t) {
            return void 0 === t
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
            if (!s(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, n.prototype.emit = function(t) {
            var e, i, n, s, l, h;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                if (e = arguments[1], e instanceof Error) throw e;
                var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw c.context = e, c
            }
            if (i = this._events[t], a(i)) return !1;
            if (r(i)) switch (arguments.length) {
                case 1:
                    i.call(this);
                    break;
                case 2:
                    i.call(this, arguments[1]);
                    break;
                case 3:
                    i.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), i.apply(this, s)
            } else if (o(i))
                for (s = Array.prototype.slice.call(arguments, 1), h = i.slice(), n = h.length, l = 0; l < n; l++) h[l].apply(this, s);
            return !0
        }, n.prototype.addListener = function(t, e) {
            var i;
            if (!r(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
            function i() {
                this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
            }
            if (!r(e)) throw TypeError("listener must be a function");
            var n = !1;
            return i.listener = e, this.on(t, i), this
        }, n.prototype.removeListener = function(t, e) {
            var i, n, s, a;
            if (!r(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (i = this._events[t], s = i.length, n = -1, i === e || r(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
            else if (o(i)) {
                for (a = s; a-- > 0;)
                    if (i[a] === e || i[a].listener && i[a].listener === e) {
                        n = a;
                        break
                    } if (n < 0) return this;
                1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, n.prototype.removeAllListeners = function(t) {
            var e, i;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (i = this._events[t], r(i)) this.removeListener(t, i);
            else if (i)
                for (; i.length;) this.removeListener(t, i[i.length - 1]);
            return delete this._events[t], this
        }, n.prototype.listeners = function(t) {
            var e;
            return e = this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, n.prototype.listenerCount = function(t) {
            if (this._events) {
                var e = this._events[t];
                if (r(e)) return 1;
                if (e) return e.length
            }
            return 0
        }, n.listenerCount = function(t, e) {
            return t.listenerCount(e)
        }
    }, {}],*/
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
    /*12: [function(t, e, i) {
        e.exports = function(t, e, i) {
            if (arguments.length < 3) throw new Error("Handlebars Helper equal needs 2 parameters");
            return t != e ? i.inverse(this) : i.fn(this)
        }
    }, {}],
    13: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r() {
            var t = g();
            return t.compile = function(e, i) {
                return c.compile(e, i, t)
            }, t.precompile = function(e, i) {
                return c.precompile(e, i, t)
            }, t.AST = l["default"], t.Compiler = c.Compiler, t.JavaScriptCompiler = p["default"], t.Parser = h.parser, t.parse = h.parse, t
        }
        i.__esModule = !0;
        var s = t("./handlebars.runtime"),
            o = n(s),
            a = t("./handlebars/compiler/ast"),
            l = n(a),
            h = t("./handlebars/compiler/base"),
            c = t("./handlebars/compiler/compiler"),
            u = t("./handlebars/compiler/javascript-compiler"),
            p = n(u),
            d = t("./handlebars/compiler/visitor"),
            f = n(d),
            m = t("./handlebars/no-conflict"),
            v = n(m),
            g = o["default"].create,
            y = r();
        y.create = r, v["default"](y), y.Visitor = f["default"], y["default"] = y, i["default"] = y, e.exports = i["default"]
    }, {
        "./handlebars.runtime": 14,
        "./handlebars/compiler/ast": 16,
        "./handlebars/compiler/base": 17,
        "./handlebars/compiler/compiler": 19,
        "./handlebars/compiler/javascript-compiler": 21,
        "./handlebars/compiler/visitor": 24,
        "./handlebars/no-conflict": 38
    }],
    14: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function s() {
            var t = new a.HandlebarsEnvironment;
            return d.extend(t, a), t.SafeString = h["default"], t.Exception = u["default"], t.Utils = d, t.escapeExpression = d.escapeExpression, t.VM = m, t.template = function(e) {
                return m.template(e, t)
            }, t
        }
        i.__esModule = !0;
        var o = t("./handlebars/base"),
            a = r(o),
            l = t("./handlebars/safe-string"),
            h = n(l),
            c = t("./handlebars/exception"),
            u = n(c),
            p = t("./handlebars/utils"),
            d = r(p),
            f = t("./handlebars/runtime"),
            m = r(f),
            v = t("./handlebars/no-conflict"),
            g = n(v),
            y = s();
        y.create = s, g["default"](y), y["default"] = y, i["default"] = y, e.exports = i["default"]
    }, {
        "./handlebars/base": 15,
        "./handlebars/exception": 28,
        "./handlebars/no-conflict": 38,
        "./handlebars/runtime": 39,
        "./handlebars/safe-string": 40,
        "./handlebars/utils": 41
    }],
    15: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e, i) {
            this.helpers = t || {}, this.partials = e || {}, this.decorators = i || {}, l.registerDefaultHelpers(this), h.registerDefaultDecorators(this)
        }
        i.__esModule = !0, i.HandlebarsEnvironment = r;
        var s = t("./utils"),
            o = t("./exception"),
            a = n(o),
            l = t("./helpers"),
            h = t("./decorators"),
            c = t("./logger"),
            u = n(c),
            p = "4.0.11";
        i.VERSION = p;
        var d = 7;
        i.COMPILER_REVISION = d;
        var f = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        i.REVISION_CHANGES = f;
        var m = "[object Object]";
        r.prototype = {
            constructor: r,
            logger: u["default"],
            log: u["default"].log,
            registerHelper: function(t, e) {
                if (s.toString.call(t) === m) {
                    if (e) throw new a["default"]("Arg not supported with multiple helpers");
                    s.extend(this.helpers, t)
                } else this.helpers[t] = e
            },
            unregisterHelper: function(t) {
                delete this.helpers[t]
            },
            registerPartial: function(t, e) {
                if (s.toString.call(t) === m) s.extend(this.partials, t);
                else {
                    if ("undefined" == typeof e) throw new a["default"]('Attempting to register a partial called "' + t + '" as undefined');
                    this.partials[t] = e
                }
            },
            unregisterPartial: function(t) {
                delete this.partials[t]
            },
            registerDecorator: function(t, e) {
                if (s.toString.call(t) === m) {
                    if (e) throw new a["default"]("Arg not supported with multiple decorators");
                    s.extend(this.decorators, t)
                } else this.decorators[t] = e
            },
            unregisterDecorator: function(t) {
                delete this.decorators[t]
            }
        };
        var v = u["default"].log;
        i.log = v, i.createFrame = s.createFrame, i.logger = u["default"]
    }, {
        "./decorators": 26,
        "./exception": 28,
        "./helpers": 29,
        "./logger": 37,
        "./utils": 41
    }],
    16: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var n = {
            helpers: {
                helperExpression: function(t) {
                    return "SubExpression" === t.type || ("MustacheStatement" === t.type || "BlockStatement" === t.type) && !!(t.params && t.params.length || t.hash)
                },
                scopedId: function(t) {
                    return /^\.|this\b/.test(t.original)
                },
                simpleId: function(t) {
                    return 1 === t.parts.length && !n.helpers.scopedId(t) && !t.depth
                }
            }
        };
        i["default"] = n, e.exports = i["default"]
    }, {}],
    17: [function(t, e, i) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if ("Program" === t.type) return t;
            a["default"].yy = d, d.locInfo = function(t) {
                return new d.SourceLocation(e && e.srcName, t)
            };
            var i = new h["default"](e);
            return i.accept(a["default"].parse(t))
        }
        i.__esModule = !0, i.parse = s;
        var o = t("./parser"),
            a = r(o),
            l = t("./whitespace-control"),
            h = r(l),
            c = t("./helpers"),
            u = n(c),
            p = t("../utils");
        i.parser = a["default"];
        var d = {};
        p.extend(d, u)
    }, {
        "../utils": 41,
        "./helpers": 20,
        "./parser": 22,
        "./whitespace-control": 25
    }],
    18: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            if (s.isArray(t)) {
                for (var n = [], r = 0, o = t.length; r < o; r++) n.push(e.wrap(t[r], i));
                return n
            }
            return "boolean" == typeof t || "number" == typeof t ? t + "" : t
        }

        function r(t) {
            this.srcFile = t, this.source = []
        }
        i.__esModule = !0;
        var s = t("../utils"),
            o = void 0;
        try {
            if ("function" != typeof define || !define.amd) {
                var a = t("source-map");
                o = a.SourceNode
            }
        } catch (l) {}
        o || (o = function(t, e, i, n) {
            this.src = "", n && this.add(n)
        }, o.prototype = {
            add: function(t) {
                s.isArray(t) && (t = t.join("")), this.src += t
            },
            prepend: function(t) {
                s.isArray(t) && (t = t.join("")), this.src = t + this.src
            },
            toStringWithSourceMap: function() {
                return {
                    code: this.toString()
                }
            },
            toString: function() {
                return this.src
            }
        }), r.prototype = {
            isEmpty: function() {
                return !this.source.length
            },
            prepend: function(t, e) {
                this.source.unshift(this.wrap(t, e))
            },
            push: function(t, e) {
                this.source.push(this.wrap(t, e))
            },
            merge: function() {
                var t = this.empty();
                return this.each(function(e) {
                    t.add(["  ", e, "\n"])
                }), t
            },
            each: function(t) {
                for (var e = 0, i = this.source.length; e < i; e++) t(this.source[e])
            },
            empty: function() {
                var t = this.currentLocation || {
                    start: {}
                };
                return new o(t.start.line, t.start.column, this.srcFile)
            },
            wrap: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
                    start: {}
                } : arguments[1];
                return t instanceof o ? t : (t = n(t, this, e), new o(e.start.line, e.start.column, this.srcFile, t))
            },
            functionCall: function(t, e, i) {
                return i = this.generateList(i), this.wrap([t, e ? "." + e + "(" : "(", i, ")"])
            },
            quotedString: function(t) {
                return '"' + (t + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(t) {
                var e = [];
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var r = n(t[i], this);
                        "undefined" !== r && e.push([this.quotedString(i), ":", r])
                    } var s = this.generateList(e);
                return s.prepend("{"), s.add("}"), s
            },
            generateList: function(t) {
                for (var e = this.empty(), i = 0, r = t.length; i < r; i++) i && e.add(","), e.add(n(t[i], this));
                return e
            },
            generateArray: function(t) {
                var e = this.generateList(t);
                return e.prepend("["), e.add("]"), e
            }
        }, i["default"] = r, e.exports = i["default"]
    }, {
        "../utils": 41,
        "source-map": 53
    }],*/
    //19: [function(t, e, i) {
    //    "use strict";

    //    function n(t) {
    //        return t && t.__esModule ? t : {
    //            "default": t
    //        }
    //    }

    //    function r() {}

    //    function s(t, e, i) {
    //        if (null == t || "string" != typeof t && "Program" !== t.type) throw new c["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
    //        e = e || {}, "data" in e || (e.data = !0), e.compat && (e.useDepths = !0);
    //        var n = i.parse(t, e),
    //            r = (new i.Compiler).compile(n, e);
    //        return (new i.JavaScriptCompiler).compile(r, e)
    //    }

    //    function o(t, e, i) {
    //        function n() {
    //            var n = i.parse(t, e),
    //                r = (new i.Compiler).compile(n, e),
    //                s = (new i.JavaScriptCompiler).compile(r, e, void 0, !0);
    //            return i.template(s)
    //        }

    //        function r(t, e) {
    //            return s || (s = n()), s.call(this, t, e)
    //        }
    //        if (void 0 === e && (e = {}), null == t || "string" != typeof t && "Program" !== t.type) throw new c["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
    //        e = u.extend({}, e), "data" in e || (e.data = !0), e.compat && (e.useDepths = !0);
    //        var s = void 0;
    //        return r._setup = function(t) {
    //            return s || (s = n()), s._setup(t)
    //        }, r._child = function(t, e, i, r) {
    //            return s || (s = n()), s._child(t, e, i, r)
    //        }, r
    //    }

    //    function a(t, e) {
    //        if (t === e) return !0;
    //        if (u.isArray(t) && u.isArray(e) && t.length === e.length) {
    //            for (var i = 0; i < t.length; i++)
    //                if (!a(t[i], e[i])) return !1;
    //            return !0
    //        }
    //    }

    //    function l(t) {
    //        if (!t.path.parts) {
    //            var e = t.path;
    //            t.path = {
    //                type: "PathExpression",
    //                data: !1,
    //                depth: 0,
    //                parts: [e.original + ""],
    //                original: e.original + "",
    //                loc: e.loc
    //            }
    //        }
    //    }
    //    i.__esModule = !0, i.Compiler = r, i.precompile = s, i.compile = o;
    //    var h = t("../exception"),
    //        c = n(h),
    //        u = t("../utils"),
    //        p = t("./ast"),
    //        d = n(p),
    //        f = [].slice;
    //    r.prototype = {
    //        compiler: r,
    //        equals: function(t) {
    //            var e = this.opcodes.length;
    //            if (t.opcodes.length !== e) return !1;
    //            for (var i = 0; i < e; i++) {
    //                var n = this.opcodes[i],
    //                    r = t.opcodes[i];
    //                if (n.opcode !== r.opcode || !a(n.args, r.args)) return !1
    //            }
    //            e = this.children.length;
    //            for (var i = 0; i < e; i++)
    //                if (!this.children[i].equals(t.children[i])) return !1;
    //            return !0
    //        },
    //        guid: 0,
    //        compile: function(t, e) {
    //            this.sourceNode = [], this.opcodes = [], this.children = [], this.options = e, this.stringParams = e.stringParams, this.trackIds = e.trackIds, e.blockParams = e.blockParams || [];
    //            var i = e.knownHelpers;
    //            if (e.knownHelpers = {
    //                    helperMissing: !0,
    //                    blockHelperMissing: !0,
    //                    each: !0,
    //                    "if": !0,
    //                    unless: !0,
    //                    "with": !0,
    //                    log: !0,
    //                    lookup: !0
    //                }, i)
    //                for (var n in i) n in i && (this.options.knownHelpers[n] = i[n]);
    //            return this.accept(t)
    //        },
    //        compileProgram: function(t) {
    //            var e = new this.compiler,
    //                i = e.compile(t, this.options),
    //                n = this.guid++;
    //            return this.usePartial = this.usePartial || i.usePartial, this.children[n] = i, this.useDepths = this.useDepths || i.useDepths, n
    //        },
    //        accept: function(t) {
    //            if (!this[t.type]) throw new c["default"]("Unknown type: " + t.type, t);
    //            this.sourceNode.unshift(t);
    //            var e = this[t.type](t);
    //            return this.sourceNode.shift(), e
    //        },
    //        Program: function(t) {
    //            this.options.blockParams.unshift(t.blockParams);
    //            for (var e = t.body, i = e.length, n = 0; n < i; n++) this.accept(e[n]);
    //            return this.options.blockParams.shift(), this.isSimple = 1 === i, this.blockParams = t.blockParams ? t.blockParams.length : 0, this
    //        },
    //        BlockStatement: function(t) {
    //            l(t);
    //            var e = t.program,
    //                i = t.inverse;
    //            e = e && this.compileProgram(e), i = i && this.compileProgram(i);
    //            var n = this.classifySexpr(t);
    //            "helper" === n ? this.helperSexpr(t, e, i) : "simple" === n ? (this.simpleSexpr(t), this.opcode("pushProgram", e), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("blockValue", t.path.original)) : (this.ambiguousSexpr(t, e, i), this.opcode("pushProgram", e), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
    //        },
    //        DecoratorBlock: function(t) {
    //            var e = t.program && this.compileProgram(t.program),
    //                i = this.setupFullMustacheParams(t, e, void 0),
    //                n = t.path;
    //            this.useDecorators = !0, this.opcode("registerDecorator", i.length, n.original)
    //        },
    //        PartialStatement: function(t) {
    //            this.usePartial = !0;
    //            var e = t.program;
    //            e && (e = this.compileProgram(t.program));
    //            var i = t.params;
    //            if (i.length > 1) throw new c["default"]("Unsupported number of partial arguments: " + i.length, t);
    //            i.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : i.push({
    //                type: "PathExpression",
    //                parts: [],
    //                depth: 0
    //            }));
    //            var n = t.name.original,
    //                r = "SubExpression" === t.name.type;
    //            r && this.accept(t.name), this.setupFullMustacheParams(t, e, void 0, !0);
    //            var s = t.indent || "";
    //            this.options.preventIndent && s && (this.opcode("appendContent", s), s = ""), this.opcode("invokePartial", r, n, s), this.opcode("append")
    //        },
    //        PartialBlockStatement: function(t) {
    //            this.PartialStatement(t)
    //        },
    //        MustacheStatement: function(t) {
    //            this.SubExpression(t), t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
    //        },
    //        Decorator: function(t) {
    //            this.DecoratorBlock(t)
    //        },
    //        ContentStatement: function(t) {
    //            t.value && this.opcode("appendContent", t.value)
    //        },
    //        CommentStatement: function() {},
    //        SubExpression: function(t) {
    //            l(t);
    //            var e = this.classifySexpr(t);
    //            "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
    //        },
    //        ambiguousSexpr: function(t, e, i) {
    //            var n = t.path,
    //                r = n.parts[0],
    //                s = null != e || null != i;
    //            this.opcode("getContext", n.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", i), n.strict = !0, this.accept(n), this.opcode("invokeAmbiguous", r, s)
    //        },
    //        simpleSexpr: function(t) {
    //            var e = t.path;
    //            e.strict = !0, this.accept(e), this.opcode("resolvePossibleLambda")
    //        },
    //        helperSexpr: function(t, e, i) {
    //            var n = this.setupFullMustacheParams(t, e, i),
    //                r = t.path,
    //                s = r.parts[0];
    //            if (this.options.knownHelpers[s]) this.opcode("invokeKnownHelper", n.length, s);
    //            else {
    //                if (this.options.knownHelpersOnly) throw new c["default"]("You specified knownHelpersOnly, but used the unknown helper " + s, t);
    //                r.strict = !0, r.falsy = !0, this.accept(r), this.opcode("invokeHelper", n.length, r.original, d["default"].helpers.simpleId(r))
    //            }
    //        },
    //        PathExpression: function(t) {
    //            this.addDepth(t.depth), this.opcode("getContext", t.depth);
    //            var e = t.parts[0],
    //                i = d["default"].helpers.scopedId(t),
    //                n = !t.depth && !i && this.blockParamIndex(e);
    //            n ? this.opcode("lookupBlockParam", n, t.parts) : e ? t.data ? (this.options.data = !0, this.opcode("lookupData", t.depth, t.parts, t.strict)) : this.opcode("lookupOnContext", t.parts, t.falsy, t.strict, i) : this.opcode("pushContext")
    //        },
    //        StringLiteral: function(t) {
    //            this.opcode("pushString", t.value)
    //        },
    //        NumberLiteral: function(t) {
    //            this.opcode("pushLiteral", t.value)
    //        },
    //        BooleanLiteral: function(t) {
    //            this.opcode("pushLiteral", t.value)
    //        },
    //        UndefinedLiteral: function() {
    //            this.opcode("pushLiteral", "undefined")
    //        },
    //        NullLiteral: function() {
    //            this.opcode("pushLiteral", "null")
    //        },
    //        Hash: function(t) {
    //            var e = t.pairs,
    //                i = 0,
    //                n = e.length;
    //            for (this.opcode("pushHash"); i < n; i++) this.pushParam(e[i].value);
    //            for (; i--;) this.opcode("assignToHash", e[i].key);
    //            this.opcode("popHash")
    //        },
    //        opcode: function(t) {
    //            this.opcodes.push({
    //                opcode: t,
    //                args: f.call(arguments, 1),
    //                loc: this.sourceNode[0].loc
    //            })
    //        },
    //        addDepth: function(t) {
    //            t && (this.useDepths = !0)
    //        },
    //        classifySexpr: function(t) {
    //            var e = d["default"].helpers.simpleId(t.path),
    //                i = e && !!this.blockParamIndex(t.path.parts[0]),
    //                n = !i && d["default"].helpers.helperExpression(t),
    //                r = !i && (n || e);
    //            if (r && !n) {
    //                var s = t.path.parts[0],
    //                    o = this.options;
    //                o.knownHelpers[s] ? n = !0 : o.knownHelpersOnly && (r = !1)
    //            }
    //            return n ? "helper" : r ? "ambiguous" : "simple"
    //        },
    //        pushParams: function(t) {
    //            for (var e = 0, i = t.length; e < i; e++) this.pushParam(t[e])
    //        },
    //        pushParam: function(t) {
    //            var e = null != t.value ? t.value : t.original || "";
    //            if (this.stringParams) e.replace && (e = e.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", e, t.type), "SubExpression" === t.type && this.accept(t);
    //            else {
    //                if (this.trackIds) {
    //                    var i = void 0;
    //                    if (!t.parts || d["default"].helpers.scopedId(t) || t.depth || (i = this.blockParamIndex(t.parts[0])), i) {
    //                        var n = t.parts.slice(1).join(".");
    //                        this.opcode("pushId", "BlockParam", i, n)
    //                    } else e = t.original || e, e.replace && (e = e.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", t.type, e)
    //                }
    //                this.accept(t)
    //            }
    //        },
    //        setupFullMustacheParams: function(t, e, i, n) {
    //            var r = t.params;
    //            return this.pushParams(r), this.opcode("pushProgram", e), this.opcode("pushProgram", i), t.hash ? this.accept(t.hash) : this.opcode("emptyHash", n), r
    //        },
    //        blockParamIndex: function(t) {
    //            for (var e = 0, i = this.options.blockParams.length; e < i; e++) {
    //                var n = this.options.blockParams[e],
    //                    r = n && u.indexOf(n, t);
    //                if (n && r >= 0) return [e, r]
    //            }
    //        }
    //    }
    //}, {
    //    "../exception": 28,
    //    "../utils": 41,
    //    "./ast": 16
    //}],
    //20: [function(t, e, i) {
    //    "use strict";

    //    function n(t) {
    //        return t && t.__esModule ? t : {
    //            "default": t
    //        }
    //    }

    //    function r(t, e) {
    //        if (e = e.path ? e.path.original : e, t.path.original !== e) {
    //            var i = {
    //                loc: t.path.loc
    //            };
    //            throw new v["default"](t.path.original + " doesn't match " + e, i)
    //        }
    //    }

    //    function s(t, e) {
    //        this.source = t, this.start = {
    //            line: e.first_line,
    //            column: e.first_column
    //        }, this.end = {
    //            line: e.last_line,
    //            column: e.last_column
    //        }
    //    }

    //    function o(t) {
    //        return /^\[.*\]$/.test(t) ? t.substr(1, t.length - 2) : t
    //    }

    //    function a(t, e) {
    //        return {
    //            open: "~" === t.charAt(2),
    //            close: "~" === e.charAt(e.length - 3)
    //        }
    //    }

    //    function l(t) {
    //        return t.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
    //    }

    //    function h(t, e, i) {
    //        i = this.locInfo(i);
    //        for (var n = t ? "@" : "", r = [], s = 0, o = "", a = 0, l = e.length; a < l; a++) {
    //            var h = e[a].part,
    //                c = e[a].original !== h;
    //            if (n += (e[a].separator || "") + h, c || ".." !== h && "." !== h && "this" !== h) r.push(h);
    //            else {
    //                if (r.length > 0) throw new v["default"]("Invalid path: " + n, {
    //                    loc: i
    //                });
    //                ".." === h && (s++, o += "../")
    //            }
    //        }
    //        return {
    //            type: "PathExpression",
    //            data: t,
    //            depth: s,
    //            parts: r,
    //            original: n,
    //            loc: i
    //        }
    //    }

    //    function c(t, e, i, n, r, s) {
    //        var o = n.charAt(3) || n.charAt(2),
    //            a = "{" !== o && "&" !== o,
    //            l = /\*/.test(n);
    //        return {
    //            type: l ? "Decorator" : "MustacheStatement",
    //            path: t,
    //            params: e,
    //            hash: i,
    //            escaped: a,
    //            strip: r,
    //            loc: this.locInfo(s)
    //        }
    //    }

    //    function u(t, e, i, n) {
    //        r(t, i), n = this.locInfo(n);
    //        var s = {
    //            type: "Program",
    //            body: e,
    //            strip: {},
    //            loc: n
    //        };
    //        return {
    //            type: "BlockStatement",
    //            path: t.path,
    //            params: t.params,
    //            hash: t.hash,
    //            program: s,
    //            openStrip: {},
    //            inverseStrip: {},
    //            closeStrip: {},
    //            loc: n
    //        }
    //    }

    //    function p(t, e, i, n, s, o) {
    //        n && n.path && r(t, n);
    //        var a = /\*/.test(t.open);
    //        e.blockParams = t.blockParams;
    //        var l = void 0,
    //            h = void 0;
    //        if (i) {
    //            if (a) throw new v["default"]("Unexpected inverse block on decorator", i);
    //            i.chain && (i.program.body[0].closeStrip = n.strip), h = i.strip, l = i.program
    //        }
    //        return s && (s = l, l = e, e = s), {
    //            type: a ? "DecoratorBlock" : "BlockStatement",
    //            path: t.path,
    //            params: t.params,
    //            hash: t.hash,
    //            program: e,
    //            inverse: l,
    //            openStrip: t.strip,
    //            inverseStrip: h,
    //            closeStrip: n && n.strip,
    //            loc: this.locInfo(o)
    //        }
    //    }

    //    function d(t, e) {
    //        if (!e && t.length) {
    //            var i = t[0].loc,
    //                n = t[t.length - 1].loc;
    //            i && n && (e = {
    //                source: i.source,
    //                start: {
    //                    line: i.start.line,
    //                    column: i.start.column
    //                },
    //                end: {
    //                    line: n.end.line,
    //                    column: n.end.column
    //                }
    //            })
    //        }
    //        return {
    //            type: "Program",
    //            body: t,
    //            strip: {},
    //            loc: e
    //        }
    //    }

    //    function f(t, e, i, n) {
    //        return r(t, i), {
    //            type: "PartialBlockStatement",
    //            name: t.path,
    //            params: t.params,
    //            hash: t.hash,
    //            program: e,
    //            openStrip: t.strip,
    //            closeStrip: i && i.strip,
    //            loc: this.locInfo(n)
    //        }
    //    }
    //    i.__esModule = !0, i.SourceLocation = s, i.id = o, i.stripFlags = a, i.stripComment = l, i.preparePath = h, i.prepareMustache = c, i.prepareRawBlock = u, i.prepareBlock = p, i.prepareProgram = d, i.preparePartialBlock = f;
    //    var m = t("../exception"),
    //        v = n(m)
    //}, {
    //    "../exception": 28
    //}],
    /*21: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            this.value = t
        }

        function s() {}

        function o(t, e, i, n) {
            var r = e.popStack(),
                s = 0,
                o = i.length;
            for (t && o--; s < o; s++) r = e.nameLookup(r, i[s], n);
            return t ? [e.aliasable("container.strict"), "(", r, ", ", e.quotedString(i[s]), ")"] : r
        }
        i.__esModule = !0;
        var a = t("../base"),
            l = t("../exception"),
            h = n(l),
            c = t("../utils"),
            u = t("./code-gen"),
            p = n(u);
        s.prototype = {
                nameLookup: function(t, e) {
                    return s.isValidJavaScriptVariableName(e) ? [t, ".", e] : [t, "[", JSON.stringify(e), "]"]
                },
                depthedLookup: function(t) {
                    return [this.aliasable("container.lookup"), '(depths, "', t, '")']
                },
                compilerInfo: function() {
                    var t = a.COMPILER_REVISION,
                        e = a.REVISION_CHANGES[t];
                    return [t, e]
                },
                appendToBuffer: function(t, e, i) {
                    return c.isArray(t) || (t = [t]), t = this.source.wrap(t, e), this.environment.isSimple ? ["return ", t, ";"] : i ? ["buffer += ", t, ";"] : (t.appendToBuffer = !0, t)
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                compile: function(t, e, i, n) {
                    this.environment = t, this.options = e, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !n, this.name = this.environment.name, this.isChild = !!i, this.context = i || {
                        decorators: [],
                        programs: [],
                        environments: []
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(t, e), this.useDepths = this.useDepths || t.useDepths || t.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || t.useBlockParams;
                    var r = t.opcodes,
                        s = void 0,
                        o = void 0,
                        a = void 0,
                        l = void 0;
                    for (a = 0, l = r.length; a < l; a++) s = r[a], this.source.currentLocation = s.loc, o = o || s.loc, this[s.opcode].apply(this, s.args);
                    if (this.source.currentLocation = o, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new h["default"]("Compile completed with content left on stack");
                    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), n ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                    var c = this.createFunctionContext(n);
                    if (this.isChild) return c;
                    var u = {
                        compiler: this.compilerInfo(),
                        main: c
                    };
                    this.decorators && (u.main_d = this.decorators, u.useDecorators = !0);
                    var p = this.context,
                        d = p.programs,
                        f = p.decorators;
                    for (a = 0, l = d.length; a < l; a++) d[a] && (u[a] = d[a], f[a] && (u[a + "_d"] = f[a], u.useDecorators = !0));
                    return this.environment.usePartial && (u.usePartial = !0), this.options.data && (u.useData = !0), this.useDepths && (u.useDepths = !0), this.useBlockParams && (u.useBlockParams = !0), this.options.compat && (u.compat = !0), n ? u.compilerOptions = this.options : (u.compiler = JSON.stringify(u.compiler), this.source.currentLocation = {
                        start: {
                            line: 1,
                            column: 0
                        }
                    }, u = this.objectLiteral(u), e.srcName ? (u = u.toStringWithSourceMap({
                        file: e.destName
                    }), u.map = u.map && u.map.toString()) : u = u.toString()), u
                },
                preamble: function() {
                    this.lastContext = 0, this.source = new p["default"](this.options.srcName), this.decorators = new p["default"](this.options.srcName)
                },
                createFunctionContext: function(t) {
                    var e = "",
                        i = this.stackVars.concat(this.registers.list);
                    i.length > 0 && (e += ", " + i.join(", "));
                    var n = 0;
                    for (var r in this.aliases) {
                        var s = this.aliases[r];
                        this.aliases.hasOwnProperty(r) && s.children && s.referenceCount > 1 && (e += ", alias" + ++n + "=" + r, s.children[0] = "alias" + n)
                    }
                    var o = ["container", "depth0", "helpers", "partials", "data"];
                    (this.useBlockParams || this.useDepths) && o.push("blockParams"), this.useDepths && o.push("depths");
                    var a = this.mergeSource(e);
                    return t ? (o.push(a), Function.apply(this, o)) : this.source.wrap(["function(", o.join(","), ") {\n  ", a, "}"])
                },
                mergeSource: function(t) {
                    var e = this.environment.isSimple,
                        i = !this.forceBuffer,
                        n = void 0,
                        r = void 0,
                        s = void 0,
                        o = void 0;
                    return this.source.each(function(t) {
                        t.appendToBuffer ? (s ? t.prepend("  + ") : s = t, o = t) : (s && (r ? s.prepend("buffer += ") : n = !0, o.add(";"), s = o = void 0), r = !0, e || (i = !1))
                    }), i ? s ? (s.prepend("return "), o.add(";")) : r || this.source.push('return "";') : (t += ", buffer = " + (n ? "" : this.initializeBuffer()), s ? (s.prepend("return buffer + "), o.add(";")) : this.source.push("return buffer;")), t && this.source.prepend("var " + t.substring(2) + (n ? "" : ";\n")), this.source.merge()
                },
                blockValue: function(t) {
                    var e = this.aliasable("helpers.blockHelperMissing"),
                        i = [this.contextName(0)];
                    this.setupHelperArgs(t, 0, i);
                    var n = this.popStack();
                    i.splice(1, 0, n), this.push(this.source.functionCall(e, "call", i))
                },
                ambiguousBlockValue: function() {
                    var t = this.aliasable("helpers.blockHelperMissing"),
                        e = [this.contextName(0)];
                    this.setupHelperArgs("", 0, e, !0), this.flushInline();
                    var i = this.topStack();
                    e.splice(1, 0, i), this.pushSource(["if (!", this.lastHelper, ") { ", i, " = ", this.source.functionCall(t, "call", e), "}"])
                },
                appendContent: function(t) {
                    this.pendingContent ? t = this.pendingContent + t : this.pendingLocation = this.source.currentLocation, this.pendingContent = t
                },
                append: function() {
                    if (this.isInline()) this.replaceStack(function(t) {
                        return [" != null ? ", t, ' : ""']
                    }), this.pushSource(this.appendToBuffer(this.popStack()));
                    else {
                        var t = this.popStack();
                        this.pushSource(["if (", t, " != null) { ", this.appendToBuffer(t, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                    }
                },
                appendEscaped: function() {
                    this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
                },
                getContext: function(t) {
                    this.lastContext = t
                },
                pushContext: function() {
                    this.pushStackLiteral(this.contextName(this.lastContext))
                },
                lookupOnContext: function(t, e, i, n) {
                    var r = 0;
                    n || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[r++])), this.resolvePath("context", t, r, e, i)
                },
                lookupBlockParam: function(t, e) {
                    this.useBlockParams = !0, this.push(["blockParams[", t[0], "][", t[1], "]"]), this.resolvePath("context", e, 1)
                },
                lookupData: function(t, e, i) {
                    t ? this.pushStackLiteral("container.data(data, " + t + ")") : this.pushStackLiteral("data"), this.resolvePath("data", e, 0, !0, i)
                },
                resolvePath: function(t, e, i, n, r) {
                    var s = this;
                    if (this.options.strict || this.options.assumeObjects) return void this.push(o(this.options.strict && r, this, e, t));
                    for (var a = e.length; i < a; i++) this.replaceStack(function(r) {
                        var o = s.nameLookup(r, e[i], t);
                        return n ? [" && ", o] : [" != null ? ", o, " : ", r]
                    })
                },
                resolvePossibleLambda: function() {
                    this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                },
                pushStringParam: function(t, e) {
                    this.pushContext(), this.pushString(e), "SubExpression" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
                },
                emptyHash: function(t) {
                    this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(t ? "undefined" : "{}")
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: [],
                        types: [],
                        contexts: [],
                        ids: []
                    }
                },
                popHash: function() {
                    var t = this.hash;
                    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(t.ids)), this.stringParams && (this.push(this.objectLiteral(t.contexts)), this.push(this.objectLiteral(t.types))), this.push(this.objectLiteral(t.values))
                },
                pushString: function(t) {
                    this.pushStackLiteral(this.quotedString(t))
                },
                pushLiteral: function(t) {
                    this.pushStackLiteral(t)
                },
                pushProgram: function(t) {
                    null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
                },
                registerDecorator: function(t, e) {
                    var i = this.nameLookup("decorators", e, "decorator"),
                        n = this.setupHelperArgs(e, t);
                    this.decorators.push(["fn = ", this.decorators.functionCall(i, "", ["fn", "props", "container", n]), " || fn;"])
                },
                invokeHelper: function(t, e, i) {
                    var n = this.popStack(),
                        r = this.setupHelper(t, e),
                        s = i ? [r.name, " || "] : "",
                        o = ["("].concat(s, n);
                    this.options.strict || o.push(" || ", this.aliasable("helpers.helperMissing")), o.push(")"), this.push(this.source.functionCall(o, "call", r.callParams))
                },
                invokeKnownHelper: function(t, e) {
                    var i = this.setupHelper(t, e);
                    this.push(this.source.functionCall(i.name, "call", i.callParams))
                },
                invokeAmbiguous: function(t, e) {
                    this.useRegister("helper");
                    var i = this.popStack();
                    this.emptyHash();
                    var n = this.setupHelper(0, t, e),
                        r = this.lastHelper = this.nameLookup("helpers", t, "helper"),
                        s = ["(", "(helper = ", r, " || ", i, ")"];
                    this.options.strict || (s[0] = "(helper = ", s.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", s, n.paramsInit ? ["),(", n.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", n.callParams), " : helper))"])
                },
                invokePartial: function(t, e, i) {
                    var n = [],
                        r = this.setupParams(e, 1, n);
                    t && (e = this.popStack(), delete r.name), i && (r.indent = JSON.stringify(i)), r.helpers = "helpers", r.partials = "partials", r.decorators = "container.decorators", t ? n.unshift(e) : n.unshift(this.nameLookup("partials", e, "partial")), this.options.compat && (r.depths = "depths"), r = this.objectLiteral(r), n.push(r), this.push(this.source.functionCall("container.invokePartial", "", n))
                },
                assignToHash: function(t) {
                    var e = this.popStack(),
                        i = void 0,
                        n = void 0,
                        r = void 0;
                    this.trackIds && (r = this.popStack()), this.stringParams && (n = this.popStack(), i = this.popStack());
                    var s = this.hash;
                    i && (s.contexts[t] = i), n && (s.types[t] = n), r && (s.ids[t] = r), s.values[t] = e
                },
                pushId: function(t, e, i) {
                    "BlockParam" === t ? this.pushStackLiteral("blockParams[" + e[0] + "].path[" + e[1] + "]" + (i ? " + " + JSON.stringify("." + i) : "")) : "PathExpression" === t ? this.pushString(e) : "SubExpression" === t ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                },
                compiler: s,
                compileChildren: function(t, e) {
                    for (var i = t.children, n = void 0, r = void 0, s = 0, o = i.length; s < o; s++) {
                        n = i[s], r = new this.compiler;
                        var a = this.matchExistingProgram(n);
                        if (null == a) {
                            this.context.programs.push("");
                            var l = this.context.programs.length;
                            n.index = l, n.name = "program" + l, this.context.programs[l] = r.compile(n, e, this.context, !this.precompile), this.context.decorators[l] = r.decorators, this.context.environments[l] = n, this.useDepths = this.useDepths || r.useDepths, this.useBlockParams = this.useBlockParams || r.useBlockParams, n.useDepths = this.useDepths, n.useBlockParams = this.useBlockParams
                        } else n.index = a.index, n.name = "program" + a.index, this.useDepths = this.useDepths || a.useDepths, this.useBlockParams = this.useBlockParams || a.useBlockParams
                    }
                },
                matchExistingProgram: function(t) {
                    for (var e = 0, i = this.context.environments.length; e < i; e++) {
                        var n = this.context.environments[e];
                        if (n && n.equals(t)) return n
                    }
                },
                programExpression: function(t) {
                    var e = this.environment.children[t],
                        i = [e.index, "data", e.blockParams];
                    return (this.useBlockParams || this.useDepths) && i.push("blockParams"), this.useDepths && i.push("depths"), "container.program(" + i.join(", ") + ")"
                },
                useRegister: function(t) {
                    this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
                },
                push: function(t) {
                    return t instanceof r || (t = this.source.wrap(t)), this.inlineStack.push(t), t
                },
                pushStackLiteral: function(t) {
                    this.push(new r(t))
                },
                pushSource: function(t) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), t && this.source.push(t)
                },
                replaceStack: function(t) {
                    var e = ["("],
                        i = void 0,
                        n = void 0,
                        s = void 0;
                    if (!this.isInline()) throw new h["default"]("replaceStack on non-inline");
                    var o = this.popStack(!0);
                    if (o instanceof r) i = [o.value], e = ["(", i], s = !0;
                    else {
                        n = !0;
                        var a = this.incrStack();
                        e = ["((", this.push(a), " = ", o, ")"], i = this.topStack()
                    }
                    var l = t.call(this, i);
                    s || this.popStack(), n && this.stackSlot--, this.push(e.concat(l, ")"))
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var t = this.inlineStack;
                    this.inlineStack = [];
                    for (var e = 0, i = t.length; e < i; e++) {
                        var n = t[e];
                        if (n instanceof r) this.compileStack.push(n);
                        else {
                            var s = this.incrStack();
                            this.pushSource([s, " = ", n, ";"]), this.compileStack.push(s)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(t) {
                    var e = this.isInline(),
                        i = (e ? this.inlineStack : this.compileStack).pop();
                    if (!t && i instanceof r) return i.value;
                    if (!e) {
                        if (!this.stackSlot) throw new h["default"]("Invalid stack pop");
                        this.stackSlot--
                    }
                    return i
                },
                topStack: function() {
                    var t = this.isInline() ? this.inlineStack : this.compileStack,
                        e = t[t.length - 1];
                    return e instanceof r ? e.value : e
                },
                contextName: function(t) {
                    return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
                },
                quotedString: function(t) {
                    return this.source.quotedString(t)
                },
                objectLiteral: function(t) {
                    return this.source.objectLiteral(t)
                },
                aliasable: function(t) {
                    var e = this.aliases[t];
                    return e ? (e.referenceCount++, e) : (e = this.aliases[t] = this.source.wrap(t), e.aliasable = !0, e.referenceCount = 1, e)
                },
                setupHelper: function(t, e, i) {
                    var n = [],
                        r = this.setupHelperArgs(e, t, n, i),
                        s = this.nameLookup("helpers", e, "helper"),
                        o = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
                    return {
                        params: n,
                        paramsInit: r,
                        name: s,
                        callParams: [o].concat(n)
                    }
                },
                setupParams: function(t, e, i) {
                    var n = {},
                        r = [],
                        s = [],
                        o = [],
                        a = !i,
                        l = void 0;
                    a && (i = []), n.name = this.quotedString(t), n.hash = this.popStack(), this.trackIds && (n.hashIds = this.popStack()), this.stringParams && (n.hashTypes = this.popStack(), n.hashContexts = this.popStack());
                    var h = this.popStack(),
                        c = this.popStack();
                    (c || h) && (n.fn = c || "container.noop", n.inverse = h || "container.noop");
                    for (var u = e; u--;) l = this.popStack(), i[u] = l, this.trackIds && (o[u] = this.popStack()), this.stringParams && (s[u] = this.popStack(), r[u] = this.popStack());
                    return a && (n.args = this.source.generateArray(i)), this.trackIds && (n.ids = this.source.generateArray(o)), this.stringParams && (n.types = this.source.generateArray(s), n.contexts = this.source.generateArray(r)), this.options.data && (n.data = "data"), this.useBlockParams && (n.blockParams = "blockParams"), n
                },
                setupHelperArgs: function(t, e, i, n) {
                    var r = this.setupParams(t, e, i);
                    return r = this.objectLiteral(r), n ? (this.useRegister("options"), i.push("options"), ["options=", r]) : i ? (i.push(r), "") : r
                }
            },
            function() {
                for (var t = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), e = s.RESERVED_WORDS = {}, i = 0, n = t.length; i < n; i++) e[t[i]] = !0
            }(), s.isValidJavaScriptVariableName = function(t) {
                return !s.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
            }, i["default"] = s, e.exports = i["default"]
    }, {
        "../base": 15,
        "../exception": 28,
        "../utils": 41,
        "./code-gen": 18
    }], */   
    /*23: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            return (new s).accept(t)
        }

        function s() {
            this.padding = 0
        }
        i.__esModule = !0, i.print = r, i.PrintVisitor = s;
        var o = t("./visitor"),
            a = n(o);
        s.prototype = new a["default"], s.prototype.pad = function(t) {
            for (var e = "", i = 0, n = this.padding; i < n; i++) e += "  ";
            return e += t + "\n"
        }, s.prototype.Program = function(t) {
            var e = "",
                i = t.body,
                n = void 0,
                r = void 0;
            if (t.blockParams) {
                var s = "BLOCK PARAMS: [";
                for (n = 0, r = t.blockParams.length; n < r; n++) s += " " + t.blockParams[n];
                s += " ]", e += this.pad(s)
            }
            for (n = 0, r = i.length; n < r; n++) e += this.accept(i[n]);
            return this.padding--, e
        }, s.prototype.MustacheStatement = function(t) {
            return this.pad("{{ " + this.SubExpression(t) + " }}")
        }, s.prototype.Decorator = function(t) {
            return this.pad("{{ DIRECTIVE " + this.SubExpression(t) + " }}")
        }, s.prototype.BlockStatement = s.prototype.DecoratorBlock = function(t) {
            var e = "";
            return e += this.pad(("DecoratorBlock" === t.type ? "DIRECTIVE " : "") + "BLOCK:"), this.padding++, e += this.pad(this.SubExpression(t)), t.program && (e += this.pad("PROGRAM:"), this.padding++, e += this.accept(t.program), this.padding--), t.inverse && (t.program && this.padding++, e += this.pad("{{^}}"), this.padding++, e += this.accept(t.inverse), this.padding--, t.program && this.padding--), this.padding--, e
        }, s.prototype.PartialStatement = function(t) {
            var e = "PARTIAL:" + t.name.original;
            return t.params[0] && (e += " " + this.accept(t.params[0])), t.hash && (e += " " + this.accept(t.hash)), this.pad("{{> " + e + " }}")
        }, s.prototype.PartialBlockStatement = function(t) {
            var e = "PARTIAL BLOCK:" + t.name.original;
            return t.params[0] && (e += " " + this.accept(t.params[0])), t.hash && (e += " " + this.accept(t.hash)), e += " " + this.pad("PROGRAM:"), this.padding++, e += this.accept(t.program), this.padding--, this.pad("{{> " + e + " }}")
        }, s.prototype.ContentStatement = function(t) {
            return this.pad("CONTENT[ '" + t.value + "' ]")
        }, s.prototype.CommentStatement = function(t) {
            return this.pad("{{! '" + t.value + "' }}")
        }, s.prototype.SubExpression = function(t) {
            for (var e = t.params, i = [], n = void 0, r = 0, s = e.length; r < s; r++) i.push(this.accept(e[r]));
            return e = "[" + i.join(", ") + "]", n = t.hash ? " " + this.accept(t.hash) : "", this.accept(t.path) + " " + e + n
        }, s.prototype.PathExpression = function(t) {
            var e = t.parts.join("/");
            return (t.data ? "@" : "") + "PATH:" + e
        }, s.prototype.StringLiteral = function(t) {
            return '"' + t.value + '"'
        }, s.prototype.NumberLiteral = function(t) {
            return "NUMBER{" + t.value + "}"
        }, s.prototype.BooleanLiteral = function(t) {
            return "BOOLEAN{" + t.value + "}"
        }, s.prototype.UndefinedLiteral = function() {
            return "UNDEFINED"
        }, s.prototype.NullLiteral = function() {
            return "NULL"
        }, s.prototype.Hash = function(t) {
            for (var e = t.pairs, i = [], n = 0, r = e.length; n < r; n++) i.push(this.accept(e[n]));
            return "HASH{" + i.join(", ") + "}"
        }, s.prototype.HashPair = function(t) {
            return t.key + "=" + this.accept(t.value)
        }
    }, {
        "./visitor": 24
    }],*/
    /*24: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r() {
            this.parents = []
        }

        function s(t) {
            this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash")
        }

        function o(t) {
            s.call(this, t), this.acceptKey(t, "program"), this.acceptKey(t, "inverse")
        }

        function a(t) {
            this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash")
        }
        i.__esModule = !0;
        var l = t("../exception"),
            h = n(l);
        r.prototype = {
            constructor: r,
            mutating: !1,
            acceptKey: function(t, e) {
                var i = this.accept(t[e]);
                if (this.mutating) {
                    if (i && !r.prototype[i.type]) throw new h["default"]('Unexpected node type "' + i.type + '" found when accepting ' + e + " on " + t.type);
                    t[e] = i
                }
            },
            acceptRequired: function(t, e) {
                if (this.acceptKey(t, e), !t[e]) throw new h["default"](t.type + " requires " + e)
            },
            acceptArray: function(t) {
                for (var e = 0, i = t.length; e < i; e++) this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, i--)
            },
            accept: function(t) {
                if (t) {
                    if (!this[t.type]) throw new h["default"]("Unknown type: " + t.type, t);
                    this.current && this.parents.unshift(this.current), this.current = t;
                    var e = this[t.type](t);
                    return this.current = this.parents.shift(), !this.mutating || e ? e : e !== !1 ? t : void 0
                }
            },
            Program: function(t) {
                this.acceptArray(t.body)
            },
            MustacheStatement: s,
            Decorator: s,
            BlockStatement: o,
            DecoratorBlock: o,
            PartialStatement: a,
            PartialBlockStatement: function(t) {
                a.call(this, t), this.acceptKey(t, "program")
            },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: s,
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            UndefinedLiteral: function() {},
            NullLiteral: function() {},
            Hash: function(t) {
                this.acceptArray(t.pairs)
            },
            HashPair: function(t) {
                this.acceptRequired(t, "value")
            }
        }, i["default"] = r, e.exports = i["default"]
    }, {
        "../exception": 28
    }],
    25: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            this.options = t
        }

        function s(t, e, i) {
            void 0 === e && (e = t.length);
            var n = t[e - 1],
                r = t[e - 2];
            return n ? "ContentStatement" === n.type ? (r || !i ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(n.original) : void 0 : i
        }

        function o(t, e, i) {
            void 0 === e && (e = -1);
            var n = t[e + 1],
                r = t[e + 2];
            return n ? "ContentStatement" === n.type ? (r || !i ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(n.original) : void 0 : i
        }

        function a(t, e, i) {
            var n = t[null == e ? 0 : e + 1];
            if (n && "ContentStatement" === n.type && (i || !n.rightStripped)) {
                var r = n.value;
                n.value = n.value.replace(i ? /^\s+/ : /^[ \t]*\r?\n?/, ""), n.rightStripped = n.value !== r
            }
        }

        function l(t, e, i) {
            var n = t[null == e ? t.length - 1 : e - 1];
            if (n && "ContentStatement" === n.type && (i || !n.leftStripped)) {
                var r = n.value;
                return n.value = n.value.replace(i ? /\s+$/ : /[ \t]+$/, ""), n.leftStripped = n.value !== r, n.leftStripped
            }
        }
        i.__esModule = !0;
        var h = t("./visitor"),
            c = n(h);
        r.prototype = new c["default"], r.prototype.Program = function(t) {
            var e = !this.options.ignoreStandalone,
                i = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var n = t.body, r = 0, h = n.length; r < h; r++) {
                var c = n[r],
                    u = this.accept(c);
                if (u) {
                    var p = s(n, r, i),
                        d = o(n, r, i),
                        f = u.openStandalone && p,
                        m = u.closeStandalone && d,
                        v = u.inlineStandalone && p && d;
                    u.close && a(n, r, !0), u.open && l(n, r, !0), e && v && (a(n, r), l(n, r) && "PartialStatement" === c.type && (c.indent = /([ \t]+$)/.exec(n[r - 1].original)[1])), e && f && (a((c.program || c.inverse).body), l(n, r)), e && m && (a(n, r), l((c.inverse || c.program).body))
                }
            }
            return t
        }, r.prototype.BlockStatement = r.prototype.DecoratorBlock = r.prototype.PartialBlockStatement = function(t) {
            this.accept(t.program), this.accept(t.inverse);
            var e = t.program || t.inverse,
                i = t.program && t.inverse,
                n = i,
                r = i;
            if (i && i.chained)
                for (n = i.body[0].program; r.chained;) r = r.body[r.body.length - 1].program;
            var h = {
                open: t.openStrip.open,
                close: t.closeStrip.close,
                openStandalone: o(e.body),
                closeStandalone: s((n || e).body)
            };
            if (t.openStrip.close && a(e.body, null, !0), i) {
                var c = t.inverseStrip;
                c.open && l(e.body, null, !0), c.close && a(n.body, null, !0), t.closeStrip.open && l(r.body, null, !0), !this.options.ignoreStandalone && s(e.body) && o(n.body) && (l(e.body), a(n.body))
            } else t.closeStrip.open && l(e.body, null, !0);
            return h
        }, r.prototype.Decorator = r.prototype.MustacheStatement = function(t) {
            return t.strip
        }, r.prototype.PartialStatement = r.prototype.CommentStatement = function(t) {
            var e = t.strip || {};
            return {
                inlineStandalone: !0,
                open: e.open,
                close: e.close
            }
        }, i["default"] = r, e.exports = i["default"]
    }, {
        "./visitor": 24
    }],
    26: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            o["default"](t)
        }
        i.__esModule = !0, i.registerDefaultDecorators = r;
        var s = t("./decorators/inline"),
            o = n(s)
    }, {
        "./decorators/inline": 27
    }],
    27: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var n = t("../utils");
        i["default"] = function(t) {
            t.registerDecorator("inline", function(t, e, i, r) {
                var s = t;
                return e.partials || (e.partials = {}, s = function(r, s) {
                    var o = i.partials;
                    i.partials = n.extend({}, o, e.partials);
                    var a = t(r, s);
                    return i.partials = o, a
                }), e.partials[r.args[0]] = r.fn, s
            })
        }, e.exports = i["default"]
    }, {
        "../utils": 41
    }],
    28: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            var i = e && e.loc,
                s = void 0,
                o = void 0;
            i && (s = i.start.line, o = i.start.column, t += " - " + s + ":" + o);
            for (var a = Error.prototype.constructor.call(this, t), l = 0; l < r.length; l++) this[r[l]] = a[r[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, n);
            try {
                i && (this.lineNumber = s, Object.defineProperty ? Object.defineProperty(this, "column", {
                    value: o,
                    enumerable: !0
                }) : this.column = o)
            } catch (h) {}
        }
        i.__esModule = !0;
        var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        n.prototype = new Error, i["default"] = n, e.exports = i["default"]
    }, {}],
    29: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            o["default"](t), l["default"](t), c["default"](t), p["default"](t), f["default"](t), v["default"](t), y["default"](t)
        }
        i.__esModule = !0, i.registerDefaultHelpers = r;
        var s = t("./helpers/block-helper-missing"),
            o = n(s),
            a = t("./helpers/each"),
            l = n(a),
            h = t("./helpers/helper-missing"),
            c = n(h),
            u = t("./helpers/if"),
            p = n(u),
            d = t("./helpers/log"),
            f = n(d),
            m = t("./helpers/lookup"),
            v = n(m),
            g = t("./helpers/with"),
            y = n(g)
    }, {
        "./helpers/block-helper-missing": 30,
        "./helpers/each": 31,
        "./helpers/helper-missing": 32,
        "./helpers/if": 33,
        "./helpers/log": 34,
        "./helpers/lookup": 35,
        "./helpers/with": 36
    }],
    30: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var n = t("../utils");
        i["default"] = function(t) {
            t.registerHelper("blockHelperMissing", function(e, i) {
                var r = i.inverse,
                    s = i.fn;
                if (e === !0) return s(this);
                if (e === !1 || null == e) return r(this);
                if (n.isArray(e)) return e.length > 0 ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i)) : r(this);
                if (i.data && i.ids) {
                    var o = n.createFrame(i.data);
                    o.contextPath = n.appendContextPath(i.data.contextPath, i.name), i = {
                        data: o
                    }
                }
                return s(e, i)
            })
        }, e.exports = i["default"]
    }, {
        "../utils": 41
    }],
    31: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        i.__esModule = !0;
        var r = t("../utils"),
            s = t("../exception"),
            o = n(s);
        i["default"] = function(t) {
            t.registerHelper("each", function(t, e) {
                function i(e, i, s) {
                    h && (h.key = e, h.index = i, h.first = 0 === i, h.last = !!s, c && (h.contextPath = c + e)), l += n(t[e], {
                        data: h,
                        blockParams: r.blockParams([t[e], e], [c + e, null])
                    })
                }
                if (!e) throw new o["default"]("Must pass iterator to #each");
                var n = e.fn,
                    s = e.inverse,
                    a = 0,
                    l = "",
                    h = void 0,
                    c = void 0;
                if (e.data && e.ids && (c = r.appendContextPath(e.data.contextPath, e.ids[0]) + "."), r.isFunction(t) && (t = t.call(this)), e.data && (h = r.createFrame(e.data)), t && "object" == typeof t)
                    if (r.isArray(t))
                        for (var u = t.length; a < u; a++) a in t && i(a, a, a === t.length - 1);
                    else {
                        var p = void 0;
                        for (var d in t) t.hasOwnProperty(d) && (void 0 !== p && i(p, a - 1), p = d, a++);
                        void 0 !== p && i(p, a - 1, !0)
                    } return 0 === a && (l = s(this)), l
            })
        }, e.exports = i["default"]
    }, {
        "../exception": 28,
        "../utils": 41
    }],
    32: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        i.__esModule = !0;
        var r = t("../exception"),
            s = n(r);
        i["default"] = function(t) {
            t.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new s["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, e.exports = i["default"]
    }, {
        "../exception": 28
    }],
    33: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var n = t("../utils");
        i["default"] = function(t) {
            t.registerHelper("if", function(t, e) {
                return n.isFunction(t) && (t = t.call(this)), !e.hash.includeZero && !t || n.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }), t.registerHelper("unless", function(e, i) {
                return t.helpers["if"].call(this, e, {
                    fn: i.inverse,
                    inverse: i.fn,
                    hash: i.hash
                })
            })
        }, e.exports = i["default"]
    }, {
        "../utils": 41
    }],
    34: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i["default"] = function(t) {
            t.registerHelper("log", function() {
                for (var e = [void 0], i = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++) e.push(arguments[n]);
                var r = 1;
                null != i.hash.level ? r = i.hash.level : i.data && null != i.data.level && (r = i.data.level), e[0] = r, t.log.apply(t, e)
            })
        }, e.exports = i["default"]
    }, {}],
    35: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i["default"] = function(t) {
            t.registerHelper("lookup", function(t, e) {
                return t && t[e]
            })
        }, e.exports = i["default"]
    }, {}],
    36: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var n = t("../utils");
        i["default"] = function(t) {
            t.registerHelper("with", function(t, e) {
                n.isFunction(t) && (t = t.call(this));
                var i = e.fn;
                if (n.isEmpty(t)) return e.inverse(this);
                var r = e.data;
                return e.data && e.ids && (r = n.createFrame(e.data), r.contextPath = n.appendContextPath(e.data.contextPath, e.ids[0])), i(t, {
                    data: r,
                    blockParams: n.blockParams([t], [r && r.contextPath])
                })
            })
        }, e.exports = i["default"]
    }, {
        "../utils": 41
    }],
    37: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var n = t("./utils"),
            r = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(t) {
                    if ("string" == typeof t) {
                        var e = n.indexOf(r.methodMap, t.toLowerCase());
                        t = e >= 0 ? e : parseInt(t, 10)
                    }
                    return t
                },
                log: function(t) {
                    if (t = r.lookupLevel(t), "undefined" != typeof console && r.lookupLevel(r.level) <= t) {
                        var e = r.methodMap[t];
                        console[e] || (e = "log");
                        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                        console[e].apply(console, n)
                    }
                }
            };
        i["default"] = r, e.exports = i["default"]
    }, {
        "./utils": 41
    }],
    38: [function(t, e, i) {
        (function(t) {
            "use strict";
            i.__esModule = !0, i["default"] = function(e) {
                var i = "undefined" != typeof t ? t : window,
                    n = i.Handlebars;
                e.noConflict = function() {
                    return i.Handlebars === e && (i.Handlebars = n), e
                }
            }, e.exports = i["default"]
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],*/
    /*39: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function s(t) {
            var e = t && t[0] || 1,
                i = g.COMPILER_REVISION;
            if (e !== i) {
                if (e < i) {
                    var n = g.REVISION_CHANGES[i],
                        r = g.REVISION_CHANGES[e];
                    throw new v["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + r + ").")
                }
                throw new v["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }

        function o(t, e) {
            function i(i, n, r) {
                r.hash && (n = f.extend({}, n, r.hash), r.ids && (r.ids[0] = !0)), i = e.VM.resolvePartial.call(this, i, n, r);
                var s = e.VM.invokePartial.call(this, i, n, r);
                if (null == s && e.compile && (r.partials[r.name] = e.compile(i, t.compilerOptions, e), s = r.partials[r.name](n, r)), null != s) {
                    if (r.indent) {
                        for (var o = s.split("\n"), a = 0, l = o.length; a < l && (o[a] || a + 1 !== l); a++) o[a] = r.indent + o[a];
                        s = o.join("\n")
                    }
                    return s
                }
                throw new v["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode")
            }

            function n(e) {
                function i(e) {
                    return "" + t.main(r, e, r.helpers, r.partials, o, l, a)
                }
                var s = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = s.data;
                n._setup(s), !s.partial && t.useData && (o = u(e, o));
                var a = void 0,
                    l = t.useBlockParams ? [] : void 0;
                return t.useDepths && (a = s.depths ? e != s.depths[0] ? [e].concat(s.depths) : s.depths : [e]), (i = p(t.main, i, r, s.depths || [], o, l))(e, s)
            }
            if (!e) throw new v["default"]("No environment passed to template");
            if (!t || !t.main) throw new v["default"]("Unknown template object: " + typeof t);
            t.main.decorator = t.main_d, e.VM.checkRevision(t.compiler);
            var r = {
                strict: function(t, e) {
                    if (!(e in t)) throw new v["default"]('"' + e + '" not defined in ' + t);
                    return t[e]
                },
                lookup: function(t, e) {
                    for (var i = t.length, n = 0; n < i; n++)
                        if (t[n] && null != t[n][e]) return t[n][e]
                },
                lambda: function(t, e) {
                    return "function" == typeof t ? t.call(e) : t
                },
                escapeExpression: f.escapeExpression,
                invokePartial: i,
                fn: function(e) {
                    var i = t[e];
                    return i.decorator = t[e + "_d"], i
                },
                programs: [],
                program: function(t, e, i, n, r) {
                    var s = this.programs[t],
                        o = this.fn(t);
                    return e || r || n || i ? s = a(this, t, o, e, i, n, r) : s || (s = this.programs[t] = a(this, t, o)), s
                },
                data: function(t, e) {
                    for (; t && e--;) t = t._parent;
                    return t
                },
                merge: function(t, e) {
                    var i = t || e;
                    return t && e && t !== e && (i = f.extend({}, e, t)), i
                },
                nullContext: Object.seal({}),
                noop: e.VM.noop,
                compilerInfo: t.compiler
            };
            return n.isTop = !0, n._setup = function(i) {
                i.partial ? (r.helpers = i.helpers, r.partials = i.partials, r.decorators = i.decorators) : (r.helpers = r.merge(i.helpers, e.helpers), t.usePartial && (r.partials = r.merge(i.partials, e.partials)), (t.usePartial || t.useDecorators) && (r.decorators = r.merge(i.decorators, e.decorators)))
            }, n._child = function(e, i, n, s) {
                if (t.useBlockParams && !n) throw new v["default"]("must pass block params");
                if (t.useDepths && !s) throw new v["default"]("must pass parent depths");
                return a(r, e, t[e], i, 0, n, s)
            }, n
        }

        function a(t, e, i, n, r, s, o) {
            function a(e) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    a = o;
                return !o || e == o[0] || e === t.nullContext && null === o[0] || (a = [e].concat(o)), i(t, e, t.helpers, t.partials, r.data || n, s && [r.blockParams].concat(s), a)
            }
            return a = p(i, a, t, o, n, s), a.program = e, a.depth = o ? o.length : 0, a.blockParams = r || 0, a
        }

        function l(t, e, i) {
            return t ? t.call || i.name || (i.name = t, t = i.partials[t]) : t = "@partial-block" === i.name ? i.data["partial-block"] : i.partials[i.name], t
        }

        function h(t, e, i) {
            var n = i.data && i.data["partial-block"];
            i.partial = !0, i.ids && (i.data.contextPath = i.ids[0] || i.data.contextPath);
            var r = void 0;
            if (i.fn && i.fn !== c && ! function() {
                    i.data = g.createFrame(i.data);
                    var t = i.fn;
                    r = i.data["partial-block"] = function(e) {
                        var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return i.data = g.createFrame(i.data), i.data["partial-block"] = n, t(e, i)
                    }, t.partials && (i.partials = f.extend({}, i.partials, t.partials))
                }(), void 0 === t && r && (t = r), void 0 === t) throw new v["default"]("The partial " + i.name + " could not be found");
            if (t instanceof Function) return t(e, i)
        }

        function c() {
            return ""
        }

        function u(t, e) {
            return e && "root" in e || (e = e ? g.createFrame(e) : {}, e.root = t), e
        }

        function p(t, e, i, n, r, s) {
            if (t.decorator) {
                var o = {};
                e = t.decorator(e, o, i, n && n[0], r, s, n), f.extend(e, o)
            }
            return e
        }
        i.__esModule = !0, i.checkRevision = s, i.template = o, i.wrapProgram = a, i.resolvePartial = l, i.invokePartial = h, i.noop = c;
        var d = t("./utils"),
            f = r(d),
            m = t("./exception"),
            v = n(m),
            g = t("./base")
    }, {
        "./base": 15,
        "./exception": 28,
        "./utils": 41
    }],*/
    /*40: [function(t, e, i) {
        "use strict";

        function n(t) {
            this.string = t
        }
        i.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
            return "" + this.string
        }, i["default"] = n, e.exports = i["default"]
    }, {}],
    41: [function(t, e, i) {
        "use strict";

        function n(t) {
            return u[t]
        }

        function r(t) {
            for (var e = 1; e < arguments.length; e++)
                for (var i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i]);
            return t
        }

        function s(t, e) {
            for (var i = 0, n = t.length; i < n; i++)
                if (t[i] === e) return i;
            return -1
        }

        function o(t) {
            if ("string" != typeof t) {
                if (t && t.toHTML) return t.toHTML();
                if (null == t) return "";
                if (!t) return t + "";
                t = "" + t
            }
            return d.test(t) ? t.replace(p, n) : t
        }

        function a(t) {
            return !t && 0 !== t || !(!v(t) || 0 !== t.length)
        }

        function l(t) {
            var e = r({}, t);
            return e._parent = t, e
        }

        function h(t, e) {
            return t.path = e, t
        }

        function c(t, e) {
            return (t ? t + "." : "") + e
        }
        i.__esModule = !0, i.extend = r, i.indexOf = s, i.escapeExpression = o, i.isEmpty = a, i.createFrame = l, i.blockParams = h, i.appendContextPath = c;
        var u = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            p = /[&<>"'`=]/g,
            d = /[&<>"'`=]/,
            f = Object.prototype.toString;
        i.toString = f;
        var m = function(t) {
            return "function" == typeof t
        };
        m(/x/) && (i.isFunction = m = function(t) {
            return "function" == typeof t && "[object Function]" === f.call(t)
        }), i.isFunction = m;
        var v = Array.isArray || function(t) {
            return !(!t || "object" != typeof t) && "[object Array]" === f.call(t)
        };
        i.isArray = v
    }, {}],
    42: [function(t, e, i) {
        function n(e, i) {
            var n = t("fs"),
                s = n.readFileSync(i, "utf8");
            e.exports = r.compile(s)
        }
        var r = t("../dist/cjs/handlebars")["default"],
            s = t("../dist/cjs/handlebars/compiler/printer");
        r.PrintVisitor = s.PrintVisitor, r.print = s.print, e.exports = r, "undefined" != typeof t && t.extensions && (t.extensions[".handlebars"] = n, t.extensions[".hbs"] = n)
    }, {
        "../dist/cjs/handlebars": 13,
        "../dist/cjs/handlebars/compiler/printer": 23,
        fs: 4
    }],*/
    /*43: [function(t, e, i) {
        "function" == typeof Object.create ? e.exports = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(t, e) {
            t.super_ = e;
            var i = function() {};
            i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
        }
    }, {}],*/
    44: [function(t, e, i) {
        ! function(t, e) {
            t(function() {
                "use strict";

                function t(t, e) {
                    return null != t && null != e && t.toLowerCase() === e.toLowerCase()
                }

                function i(t, e) {
                    var i, n, r = t.length;
                    if (!r || !e) return !1;
                    for (i = e.toLowerCase(), n = 0; n < r; ++n)
                        if (i === t[n].toLowerCase()) return !0;
                    return !1
                }

                function n(t) {
                    for (var e in t) l.call(t, e) && (t[e] = new RegExp(t[e], "i"))
                }

                function r(t) {
                    return (t || "").substr(0, 500)
                }

                function s(t, e) {
                    this.ua = r(t), this._cache = {}, this.maxPhoneWidth = e || 600
                }
                var o = {};
                o.mobileDetectRules = {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                        Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092",
                        Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F",
                        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        NokiaLumia: "Lumia [0-9]{3,4}",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo 3DS",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-8703F",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        NokiaLumiaTablet: "Lumia 2520",
                        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android.*\\bG1\\b",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9",
                        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        KocasoTablet: "\\b(TB-1207)\\b",
                        HisenseTablet: "\\b(F5281|E2371)\\b",
                        Hudl: "Hudl HT7S3|Hudl 2",
                        TelstraTablet: "T-Hub2",
                        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW"
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        Edge: "Mobile Safari/[.0-9]* Edge",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Puffin: "Puffin",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                        Fennec: "Fennec/[VER]",
                        Edge: "Edge/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        SamsungBrowser: "SamsungBrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        PaleMoon: "PaleMoon/[VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        Goanna: "Goanna/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                    },
                    utils: {
                        Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700"
                    }
                }, o.detectMobileBrowsers = {
                    fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    tabletPattern: /android|ipad|playbook|silk/i
                };
                var a, l = Object.prototype.hasOwnProperty;
                return o.FALLBACK_PHONE = "UnknownPhone", o.FALLBACK_TABLET = "UnknownTablet", o.FALLBACK_MOBILE = "UnknownMobile", a = "isArray" in Array ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    function() {
                        var t, e, i, r, s, h, c = o.mobileDetectRules;
                        for (t in c.props)
                            if (l.call(c.props, t)) {
                                for (e = c.props[t], a(e) || (e = [e]), s = e.length, r = 0; r < s; ++r) i = e[r], h = i.indexOf("[VER]"), h >= 0 && (i = i.substring(0, h) + "([\\w._\\+]+)" + i.substring(h + 5)), e[r] = new RegExp(i, "i");
                                c.props[t] = e
                            } n(c.oss), n(c.phones), n(c.tablets), n(c.uas), n(c.utils), c.oss0 = {
                            WindowsPhoneOS: c.oss.WindowsPhoneOS,
                            WindowsMobileOS: c.oss.WindowsMobileOS
                        }
                    }(), o.findMatch = function(t, e) {
                        for (var i in t)
                            if (l.call(t, i) && t[i].test(e)) return i;
                        return null
                    }, o.findMatches = function(t, e) {
                        var i = [];
                        for (var n in t) l.call(t, n) && t[n].test(e) && i.push(n);
                        return i
                    }, o.getVersionStr = function(t, e) {
                        var i, n, r, s, a = o.mobileDetectRules.props;
                        if (l.call(a, t))
                            for (i = a[t], r = i.length, n = 0; n < r; ++n)
                                if (s = i[n].exec(e), null !== s) return s[1];
                        return null
                    }, o.getVersion = function(t, e) {
                        var i = o.getVersionStr(t, e);
                        return i ? o.prepareVersionNo(i) : NaN
                    }, o.prepareVersionNo = function(t) {
                        var e;
                        return e = t.split(/[a-z._ \/\-]/i), 1 === e.length && (t = e[0]), e.length > 1 && (t = e[0] + ".", e.shift(), t += e.join("")), Number(t)
                    }, o.isMobileFallback = function(t) {
                        return o.detectMobileBrowsers.fullPattern.test(t) || o.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
                    }, o.isTabletFallback = function(t) {
                        return o.detectMobileBrowsers.tabletPattern.test(t)
                    }, o.prepareDetectionCache = function(t, i, n) {
                        if (t.mobile === e) {
                            var r, a, l;
                            return (a = o.findMatch(o.mobileDetectRules.tablets, i)) ? (t.mobile = t.tablet = a, void(t.phone = null)) : (r = o.findMatch(o.mobileDetectRules.phones, i)) ? (t.mobile = t.phone = r, void(t.tablet = null)) : void(o.isMobileFallback(i) ? (l = s.isPhoneSized(n), l === e ? (t.mobile = o.FALLBACK_MOBILE, t.tablet = t.phone = null) : l ? (t.mobile = t.phone = o.FALLBACK_PHONE, t.tablet = null) : (t.mobile = t.tablet = o.FALLBACK_TABLET, t.phone = null)) : o.isTabletFallback(i) ? (t.mobile = t.tablet = o.FALLBACK_TABLET, t.phone = null) : t.mobile = t.tablet = t.phone = null)
                        }
                    }, o.mobileGrade = function(t) {
                        var e = null !== t.mobile();
                        return t.os("iOS") && t.version("iPad") >= 4.3 || t.os("iOS") && t.version("iPhone") >= 3.1 || t.os("iOS") && t.version("iPod") >= 3.1 || t.version("Android") > 2.1 && t.is("Webkit") || t.version("Windows Phone OS") >= 7 || t.is("BlackBerry") && t.version("BlackBerry") >= 6 || t.match("Playbook.*Tablet") || t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi") || t.match("hp.*TouchPad") || t.is("Firefox") && t.version("Firefox") >= 12 || t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4 || t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3 || t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS") || t.is("MeeGoOS") || t.is("Tizen") || t.is("Dolfin") && t.version("Bada") >= 2 || (t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3 || t.match("Kindle Fire") || t.is("Kindle") && t.version("Kindle") >= 3 || t.is("AndroidOS") && t.is("NookTablet") || t.version("Chrome") >= 11 && !e || t.version("Safari") >= 5 && !e || t.version("Firefox") >= 4 && !e || t.version("MSIE") >= 7 && !e || t.version("Opera") >= 10 && !e ? "A" : t.os("iOS") && t.version("iPad") < 4.3 || t.os("iOS") && t.version("iPhone") < 3.1 || t.os("iOS") && t.version("iPod") < 3.1 || t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6 || t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS")) || t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || t.version("Opera Mobi") >= 11 && t.is("SymbianOS") ? "B" : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile") <= 5.2, "C")
                    }, o.detectOS = function(t) {
                        return o.findMatch(o.mobileDetectRules.oss0, t) || o.findMatch(o.mobileDetectRules.oss, t)
                    }, o.getDeviceSmallerSide = function() {
                        return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                    }, s.prototype = {
                        constructor: s,
                        mobile: function() {
                            return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                        },
                        phone: function() {
                            return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                        },
                        tablet: function() {
                            return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                        },
                        userAgent: function() {
                            return this._cache.userAgent === e && (this._cache.userAgent = o.findMatch(o.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                        },
                        userAgents: function() {
                            return this._cache.userAgents === e && (this._cache.userAgents = o.findMatches(o.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                        },
                        os: function() {
                            return this._cache.os === e && (this._cache.os = o.detectOS(this.ua)), this._cache.os
                        },
                        version: function(t) {
                            return o.getVersion(t, this.ua)
                        },
                        versionStr: function(t) {
                            return o.getVersionStr(t, this.ua)
                        },
                        is: function(e) {
                            return i(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || i(o.findMatches(o.mobileDetectRules.utils, this.ua), e)
                        },
                        match: function(t) {
                            return t instanceof RegExp || (t = new RegExp(t, "i")), t.test(this.ua)
                        },
                        isPhoneSized: function(t) {
                            return s.isPhoneSized(t || this.maxPhoneWidth)
                        },
                        mobileGrade: function() {
                            return this._cache.grade === e && (this._cache.grade = o.mobileGrade(this)), this._cache.grade
                        }
                    }, "undefined" != typeof window && window.screen ? s.isPhoneSized = function(t) {
                        return t < 0 ? e : o.getDeviceSmallerSide() <= t
                    } : s.isPhoneSized = function() {}, s._impl = o, s.version = "1.4.1 2017-12-24", s
            })
        }(function(t) {
            if ("undefined" != typeof e && e.exports) return function(t) {
                e.exports = t()
            };
            if ("function" == typeof define && define.amd) return define;
            if ("undefined" != typeof window) return function(t) {
                window.MobileDetect = t()
            };
            throw new Error("unknown environment")
        }())
    }, {}],    
    /*46: [function(t, e, i) {
        (function(t) {
            function e(t, e) {
                for (var i = 0, n = t.length - 1; n >= 0; n--) {
                    var r = t[n];
                    "." === r ? t.splice(n, 1) : ".." === r ? (t.splice(n, 1), i++) : i && (t.splice(n, 1), i--)
                }
                if (e)
                    for (; i--; i) t.unshift("..");
                return t
            }

            function n(t, e) {
                if (t.filter) return t.filter(e);
                for (var i = [], n = 0; n < t.length; n++) e(t[n], n, t) && i.push(t[n]);
                return i
            }
            var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                s = function(t) {
                    return r.exec(t).slice(1)
                };
            i.resolve = function() {
                for (var i = "", r = !1, s = arguments.length - 1; s >= -1 && !r; s--) {
                    var o = s >= 0 ? arguments[s] : t.cwd();
                    if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                    o && (i = o + "/" + i, r = "/" === o.charAt(0))
                }
                return i = e(n(i.split("/"), function(t) {
                    return !!t
                }), !r).join("/"), (r ? "/" : "") + i || "."
            }, i.normalize = function(t) {
                var r = i.isAbsolute(t),
                    s = "/" === o(t, -1);
                return t = e(n(t.split("/"), function(t) {
                    return !!t
                }), !r).join("/"), t || r || (t = "."), t && s && (t += "/"), (r ? "/" : "") + t
            }, i.isAbsolute = function(t) {
                return "/" === t.charAt(0)
            }, i.join = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return i.normalize(n(t, function(t, e) {
                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t
                }).join("/"))
            }, i.relative = function(t, e) {
                function n(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++);
                    for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                    return e > i ? [] : t.slice(e, i - e + 1)
                }
                t = i.resolve(t).substr(1), e = i.resolve(e).substr(1);
                for (var r = n(t.split("/")), s = n(e.split("/")), o = Math.min(r.length, s.length), a = o, l = 0; l < o; l++)
                    if (r[l] !== s[l]) {
                        a = l;
                        break
                    } for (var h = [], l = a; l < r.length; l++) h.push("..");
                return h = h.concat(s.slice(a)), h.join("/")
            }, i.sep = "/", i.delimiter = ":", i.dirname = function(t) {
                var e = s(t),
                    i = e[0],
                    n = e[1];
                return i || n ? (n && (n = n.substr(0, n.length - 1)), i + n) : "."
            }, i.basename = function(t, e) {
                var i = s(t)[2];
                return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
            }, i.extname = function(t) {
                return s(t)[3]
            };
            var o = "b" === "ab".substr(-1) ? function(t, e, i) {
                return t.substr(e, i)
            } : function(t, e, i) {
                return e < 0 && (e = t.length + e), t.substr(e, i)
            }
        }).call(this, t("_process"))
    }, {
        _process: 48
    }],
    47: [function(t, e, i) {
        (function(t) {
            (function() {
                var i, n, r, s, o, a;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" != typeof t && null !== t && t.hrtime ? (e.exports = function() {
                    return (i() - o) / 1e6
                }, n = t.hrtime, i = function() {
                    var t;
                    return t = n(), 1e9 * t[0] + t[1]
                }, s = i(), a = 1e9 * t.uptime(), o = s - a) : Date.now ? (e.exports = function() {
                    return Date.now() - r
                }, r = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - r
                }, r = (new Date).getTime())
            }).call(this)
        }).call(this, t("_process"))
    }, {
        _process: 48
    }],*/
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
    /*49: [function(t, e, i) {
        function n(t) {
            return this instanceof n ? (this.running = !1, this.last = o(), this._frame = 0, this._tick = this.tick.bind(this), void(t && this.on("tick", t))) : new n(t)
        }
        var r = t("inherits"),
            s = t("events").EventEmitter,
            o = t("right-now"),
            a = t("raf");
        e.exports = n, r(n, s), n.prototype.start = function() {
            if (!this.running) return this.running = !0, this.last = o(), this._frame = a(this._tick), this
        }, n.prototype.stop = function() {
            return this.running = !1, 0 !== this._frame && a.cancel(this._frame), this._frame = 0, this
        }, n.prototype.tick = function() {
            this._frame = a(this._tick);
            var t = o(),
                e = t - this.last;
            this.emit("tick", e), this.last = t
        }
    }, {
        events: 7,
        inherits: 43,
        raf: 50,
        "right-now": 51
    }],*/
    /*50: [function(t, e, i) {
        (function(i) {
            for (var n = t("performance-now"), r = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], o = "AnimationFrame", a = r["request" + o], l = r["cancel" + o] || r["cancelRequest" + o], h = 0; !a && h < s.length; h++) a = r[s[h] + "Request" + o], l = r[s[h] + "Cancel" + o] || r[s[h] + "CancelRequest" + o];
            if (!a || !l) {
                var c = 0,
                    u = 0,
                    p = [],
                    d = 1e3 / 60;
                a = function(t) {
                    if (0 === p.length) {
                        var e = n(),
                            i = Math.max(0, d - (e - c));
                        c = i + e, setTimeout(function() {
                            var t = p.slice(0);
                            p.length = 0;
                            for (var e = 0; e < t.length; e++)
                                if (!t[e].cancelled) try {
                                    t[e].callback(c)
                                } catch (i) {
                                    setTimeout(function() {
                                        throw i
                                    }, 0)
                                }
                        }, Math.round(i))
                    }
                    return p.push({
                        handle: ++u,
                        callback: t,
                        cancelled: !1
                    }), u
                }, l = function(t) {
                    for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0)
                }
            }
            e.exports = function(t) {
                return a.call(r, t)
            }, e.exports.cancel = function() {
                l.apply(r, arguments)
            }, e.exports.polyfill = function(t) {
                t || (t = r), t.requestAnimationFrame = a, t.cancelAnimationFrame = l
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "performance-now": 47
    }],
    51: [function(t, e, i) {
        (function(t) {
            e.exports = t.performance && t.performance.now ? function() {
                return performance.now()
            } : Date.now || function() {
                return +new Date
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],*/
    52: [smooth, {}],
    /*53: [function(t, e, i) {
        i.SourceMapGenerator = t("./source-map/source-map-generator").SourceMapGenerator, i.SourceMapConsumer = t("./source-map/source-map-consumer").SourceMapConsumer, i.SourceNode = t("./source-map/source-node").SourceNode
    }, {
        "./source-map/source-map-consumer": 60,
        "./source-map/source-map-generator": 61,
        "./source-map/source-node": 62
    }],*/
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