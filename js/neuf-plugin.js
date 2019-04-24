function plugin(t, e, i) {
        (function(i) {
            var n = "undefined" != typeof e && e.exports && "undefined" != typeof i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function() {
                    "use strict";
                    var t = (n.document || {}).documentElement,
                        e = n,
                        i = function(i, n) {
                            var r = "x" === n ? "Width" : "Height",
                                s = "scroll" + r,
                                o = "client" + r,
                                a = document.body;
                            return i === e || i === t || i === a ? Math.max(t[s], a[s]) - (e["inner" + r] || t[o] || a[o]) : i[s] - i["offset" + r]
                        },
                        r = function(t) {
                            return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || t.nodeType && t.style ? t : null
                        },
                        s = function(i, n) {
                            var r = "scroll" + ("x" === n ? "Left" : "Top");
                            return i === e && (null != i.pageXOffset ? r = "page" + n.toUpperCase() + "Offset" : i = null != t[r] ? t : document.body),
                                function() {
                                    return i[r]
                                }
                        },
                        o = function(i, n) {
                            var o = r(i).getBoundingClientRect(),
                                a = !n || n === e || n === document.body,
                                l = (a ? t : n).getBoundingClientRect(),
                                h = {
                                    x: o.left - l.left,
                                    y: o.top - l.top
                                };
                            return !a && n && (h.x += s(n, "x")(), h.y += s(n, "y")()), h
                        },
                        a = function(t, e, n) {
                            var r = typeof t;
                            return isNaN(t) ? "number" === r || "string" === r && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), o(t, e)[n]) : parseFloat(t)
                        },
                        l = n._gsDefine.plugin({
                            propName: "scrollTo",
                            API: 2,
                            global: !0,
                            version: "1.9.0",
                            init: function(t, i, n) {
                                return this._wdw = t === e, this._target = t, this._tween = n, "object" != typeof i ? (i = {
                                    y: i
                                }, "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                                    y: i,
                                    x: i
                                }), this.vars = i, this._autoKill = i.autoKill !== !1, this.getX = s(t, "x"), this.getY = s(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, a(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, a(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                            },
                            set: function(t) {
                                this._super.setRatio.call(this, t);
                                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                                    s = r - this.yPrev,
                                    o = n - this.xPrev,
                                    a = l.autoKillThreshold;
                                this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (o > a || o < -a) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (s > a || s < -a) && r < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                            }
                        }),
                        h = l.prototype;
                    l.max = i, l.getOffset = o, l.buildGetter = s, l.autoKillThreshold = 7, h._kill = function(t) {
                        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
                    }
                }), n._gsDefine && n._gsQueue.pop()(),
                function(i) {
                    "use strict";
                    var r = function() {
                        return (n.GreenSockGlobals || n)[i]
                    };
                    "undefined" != typeof e && e.exports ? (t("gsap/TweenLite"), e.exports = r()) : "function" == typeof define && define.amd && define(["gsap/TweenLite"], r)
                }("ScrollToPlugin")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
	
function tween(t, e, i) {
        (function(t) {
            ! function(t, i) {
                "use strict";
                var n = {},
                    r = t.document,
                    s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (!s.TweenLite) {
                    var o, a, l, h, c, u = function(t) {
                            var e, i = t.split("."),
                                n = s;
                            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        p = u("com.greensock"),
                        d = 1e-10,
                        f = function(t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]));
                            return i
                        },
                        m = function() {},
                        v = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        g = {},
                        y = function(r, o, a, l) {
                            this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = a;
                            var h = [];
                            this.check = function(c) {
                                for (var p, d, f, m, v = o.length, _ = v; --v > -1;)(p = g[o[v]] || new y(o[v], [])).gsClass ? (h[v] = p.gsClass, _--) : c && p.sc.push(this);
                                if (0 === _ && a) {
                                    if (d = ("com.greensock." + r).split("."), f = d.pop(), m = u(d.join("."))[f] = this.gsClass = a.apply(a, h), l)
                                        if (s[f] = n[f] = m, "undefined" != typeof e && e.exports)
                                            if (r === i) {
                                                e.exports = n[i] = m;
                                                for (v in n) m[v] = n[v]
                                            } else n[i] && (n[i][f] = m);
                                    else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                        return m
                                    });
                                    for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                                }
                            }, this.check(!0)
                        },
                        _ = t._gsDefine = function(t, e, i, n) {
                            return new y(t, e, i, n)
                        },
                        b = p._class = function(t, e, i) {
                            return e = e || function() {}, _(t, [], function() {
                                return e
                            }, i), e
                        };
                    _.globals = s;
                    var x = [0, 0, 1, 1],
                        w = b("easing.Ease", function(t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
                        }, !0),
                        T = w.map = {},
                        S = w.register = function(t, e, i, n) {
                            for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                for (s = l[h], r = n ? b("easing." + s, null, !0) : p.easing[s] || {}, o = c.length; --o > -1;) a = c[o], T[s + "." + a] = T[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                        };
                    for (l = w.prototype, l._calcEnd = !1, l.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                i = this._power,
                                n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                        }, o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = o.length; --a > -1;) l = o[a] + ",Power" + a, S(new w(null, null, 1, a), l, "easeOut", !0), S(new w(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), S(new w(null, null, 3, a), l, "easeInOut");
                    T.linear = p.easing.Linear.easeIn, T.swing = p.easing.Quad.easeInOut;
                    var M = b("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    l = M.prototype, l.addEventListener = function(t, e, i, n, r) {
                        r = r || 0;
                        var s, o, a = this._listeners[t],
                            l = 0;
                        for (this !== h || c || h.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) s = a[o], s.c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                        a.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, l.removeEventListener = function(t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e) return void n.splice(i, 1)
                    }, l.dispatchEvent = function(t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var P = t.requestAnimationFrame,
                        E = t.cancelAnimationFrame,
                        A = Date.now || function() {
                            return (new Date).getTime()
                        },
                        L = A();
                    for (o = ["ms", "moz", "webkit", "o"], a = o.length; --a > -1 && !P;) P = t[o[a] + "RequestAnimationFrame"], E = t[o[a] + "CancelAnimationFrame"] || t[o[a] + "CancelRequestAnimationFrame"];
                    b("Ticker", function(t, e) {
                        var i, n, s, o, a, l = this,
                            u = A(),
                            p = !(e === !1 || !P) && "auto",
                            f = 500,
                            v = 33,
                            g = "tick",
                            y = function(t) {
                                var e, r, h = A() - L;
                                h > f && (u += h - v), L += h, l.time = (L - u) / 1e3, e = l.time - a, (!i || e > 0 || t === !0) && (l.frame++, a += e + (e >= o ? .004 : o - e), r = !0), t !== !0 && (s = n(y)), r && l.dispatchEvent(g)
                            };
                        M.call(l), l.time = l.frame = 0, l.tick = function() {
                            y(!0)
                        }, l.lagSmoothing = function(t, e) {
                            return arguments.length ? (f = t || 1 / d, void(v = Math.min(e, f, 0))) : f < 1 / d
                        }, l.sleep = function() {
                            null != s && (p && E ? E(s) : clearTimeout(s), n = m, s = null, l === h && (c = !1))
                        }, l.wake = function(t) {
                            null !== s ? l.sleep() : t ? u += -L + (L = A()) : l.frame > 10 && (L = A() - f + 5), n = 0 === i ? m : p && P ? P : function(t) {
                                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                            }, l === h && (c = !0), y(2)
                        }, l.fps = function(t) {
                            return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void l.wake()) : i
                        }, l.useRAF = function(t) {
                            return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
                        }, l.fps(t), setTimeout(function() {
                            "auto" === p && l.frame < 5 && "hidden" !== (r || {}).visibilityState && l.useRAF(!1)
                        }, 1500)
                    }), l = p.Ticker.prototype = new p.events.EventDispatcher, l.constructor = p.Ticker;
                    var C = b("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Z) {
                            c || h.wake();
                            var i = this.vars.useFrames ? K : Z;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    h = C.ticker = new p.Ticker, l = C.prototype, l._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
                    var k = function() {
                        c && A() - L > 2e3 && ("hidden" !== (r || {}).visibilityState || !h.lagSmoothing()) && h.wake();
                        var t = setTimeout(k, 2e3);
                        t.unref && t.unref()
                    };
                    k(), l.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, l.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, l.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, l.seek = function(t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }, l.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }, l.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, l.render = function(t, e, i) {}, l.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, l.isActive = function() {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                    }, l._enabled = function(t, e) {
                        return c || h.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, l._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, l.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, l._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, l._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, l._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this,
                            s = n ? n.length : 0;
                        switch (s) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, l.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = v(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, l.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, l.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, l.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, l.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, l.totalTime = function(t, e, i) {
                        if (c || h.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && J(), this.render(t, e, !1), z.length && J())
                        }
                        return this
                    }, l.progress = l.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, l.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, l.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, l.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, i;
                        for (t = t || d, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, l.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, l.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (c || t || h.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var R = b("core.SimpleTimeline", function(t) {
                        C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    l = R.prototype = new C, l.constructor = R, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(t, e, i, n) {
                        var r, s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, l._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, l.render = function(t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, l.rawTime = function() {
                        return c || h.wake(), this._totalTime
                    };
                    var I = b("TweenLite", function(e, i, n) {
                            if (C.call(this, i, n), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                            this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                            var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? Y[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (a || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
                                for (this._targets = o = f(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(f(s))) : (this._siblings[r] = $(s, this, !1), 1 === l && this._siblings[r].length > 1 && et(s, this, null, 1, this._siblings[r])) : (s = o[r--] = I.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -d, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        N = function(e) {
                            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                        },
                        O = function(t, e) {
                            var i, n = {};
                            for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        };
                    l = I.prototype = new C, l.constructor = I, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, I.version = "1.20.4", I.defaultEase = l._ease = new w(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = h, I.autoSleep = 120, I.lagSmoothing = function(t, e) {
                        h.lagSmoothing(t, e)
                    }, I.selector = t.$ || t.jQuery || function(e) {
                        var i = t.$ || t.jQuery;
                        return i ? (I.selector = i, i(e)) : "undefined" == typeof r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                    };
                    var z = [],
                        D = {},
                        B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        U = /[\+-]=-?[\.\d]/,
                        j = function(t) {
                            for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < n && e > -n && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        G = function(t, e, i, n) {
                            var r, s, o, a, l, h, c, u = [],
                                p = 0,
                                d = "",
                                f = 0;
                            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(B) || [], s = e.match(B) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = s.length, a = 0; a < l; a++) c = s[a], h = e.substr(p, e.indexOf(c, p) - p), d += h || !a ? h : ",", p += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === r[a] || r.length <= a ? d += c : (d && (u.push(d), d = ""), o = parseFloat(r[a]), u.push(o), u._firstPT = {
                                _next: u._firstPT,
                                t: u,
                                p: u.length - 1,
                                s: o,
                                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                                f: 0,
                                m: f && f < 4 ? Math.round : 0
                            }), p += c.length;
                            return d += e.substr(p), d && u.push(d), u.setRatio = j, U.test(e) && (u.end = null), u
                        },
                        F = function(t, e, i, n, r, s, o, a, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var h, c = typeof t[e],
                                u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                p = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                                d = "string" == typeof n && "=" === n.charAt(1),
                                f = {
                                    t: t,
                                    p: e,
                                    s: p,
                                    f: "function" === c,
                                    pg: 0,
                                    n: r || e,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
                                };
                            if (("number" != typeof p || "number" != typeof n && !d) && (o || isNaN(p) || !d && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (f.fp = o, h = G(p, d ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, a || I.defaultStringFilter, f), f = {
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (f.s = parseFloat(p), d || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
                        },
                        H = I._internals = {
                            isArray: v,
                            isSelector: N,
                            lazyTweens: z,
                            blobDif: G
                        },
                        V = I._plugins = {},
                        W = H.tweenLookup = {},
                        X = 0,
                        q = H.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        Y = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            "true": 1,
                            "false": 0
                        },
                        K = C._rootFramesTimeline = new R,
                        Z = C._rootTimeline = new R,
                        Q = 30,
                        J = H.lazyRender = function() {
                            var t, e = z.length;
                            for (D = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            z.length = 0
                        };
                    Z._startTime = h.time, K._startTime = h.frame, Z._active = K._active = !0, setTimeout(J, 1), C._updateRoot = I.render = function() {
                        var t, e, i;
                        if (z.length && J(), Z.render((h.time - Z._startTime) * Z._timeScale, !1, !1), K.render((h.frame - K._startTime) * K._timeScale, !1, !1), z.length && J(), h.frame >= Q) {
                            Q = h.frame + (parseInt(I.autoSleep, 10) || 120);
                            for (i in W) {
                                for (e = W[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete W[i]
                            }
                            if (i = Z._first, (!i || i._paused) && I.autoSleep && !K._first && 1 === h._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || h.sleep()
                            }
                        }
                    }, h.addEventListener("tick", C._updateRoot);
                    var $ = function(t, e, i) {
                            var n, r, s = t._gsTweenID;
                            if (W[s || (t._gsTweenID = s = "t" + X++)] || (W[s] = {
                                    target: t,
                                    tweens: []
                                }), e && (n = W[s].tweens, n[r = n.length] = e, i))
                                for (; --r > -1;) n[r] === e && n.splice(r, 1);
                            return W[s].tweens
                        },
                        tt = function(t, e, i, n) {
                            var r, s, o = t.vars.onOverwrite;
                            return o && (r = o(t, e, i, n)), o = I.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                        },
                        et = function(t, e, i, n, r) {
                            var s, o, a, l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, s = 0; s < l; s++)
                                    if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                                    else if (5 === n) break;
                                return o
                            }
                            var h, c = e._startTime + d,
                                u = [],
                                p = 0,
                                f = 0 === e._duration;
                            for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || it(e, 0, f), 0 === it(a, h, f) && (u[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (u[p++] = a)));
                            for (s = p; --s > -1;)
                                if (a = u[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !tt(a, e)) continue;
                                    a._enabled(!1, !1) && (o = !0)
                                } return o
                        },
                        it = function(t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                                if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return s /= r, s > e ? s - e : i && s === e || !t._initted && s - e < 2 * d ? d : (s += t.totalDuration() / t._timeScale / r) > e + d ? 0 : s - e - d
                        };
                    l._init = function() {
                        var t, e, i, n, r, s, o = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            h = !!o.immediateRender,
                            c = o.ease;
                        if (o.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in o.startAt) r[n] = o.startAt[n];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && o.lazy !== !1, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = I.to(this.target, 0, r), h)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (o.runBackwards && 0 !== l)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (h = !1), i = {};
                                for (n in o) q[n] && "autoCSS" !== n || (i[n] = o[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && o.lazy !== !1, i.immediateRender = h, this._startAt = I.to(this.target, 0, i), h) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, o.easeParams) : T[c] || I.defaultEase : I.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = o.onUpdate, this._initted = !0
                    }, l._initProps = function(e, i, n, r, s) {
                        var o, a, l, h, c, u;
                        if (null == e) return !1;
                        D[e._gsTweenID] && J(), this.vars.css || e.style && e !== t && e.nodeType && V.css && this.vars.autoCSS !== !1 && O(this.vars, e);
                        for (o in this.vars)
                            if (u = this.vars[o], q[o]) u && (u instanceof Array || u.push && v(u)) && u.join("").indexOf("{self}") !== -1 && (this.vars[o] = u = this._swapSelfInParams(u, this));
                            else if (V[o] && (h = new V[o])._onInitTween(e, this.vars[o], this, s)) {
                            for (this._firstPT = c = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: o,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                            (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                        } else i[o] = F.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, s);
                        return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && et(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), l)
                    }, l.render = function(t, e, i) {
                        var n, r, s, o, a = this._time,
                            l = this._duration,
                            h = this._rawPrevTime;
                        if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === d && "isPause" !== this.data) && h !== t && (i = !0, h > d && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : d);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== d || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : d)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var c = t / l,
                                u = this._easeType,
                                p = this._easePower;
                            (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : t / l < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, z.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === d && o !== d && (this._rawPrevTime = 0)))
                        }
                    }, l._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                        var n, r, s, o, a, l, h, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((v(e) || N(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (h = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in h) a[s] && (u || (u = []), u.push(s));
                                    if ((u || !t) && !tt(this, i, e, u)) return !1
                                }
                                for (s in h)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, l.invalidate = function() {
                        return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(Math.min(0, -this._delay))), this
                    }, l._enabled = function(t, e) {
                        if (c || h.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = $(n[i], this, !0);
                            else this._siblings = $(this.target, this, !0)
                        }
                        return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, I.to = function(t, e, i) {
                        return new I(t, e, i)
                    }, I.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
                    }, I.fromTo = function(t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n)
                    }, I.delayedCall = function(t, e, i, n, r) {
                        return new I(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, I.set = function(t, e) {
                        return new I(t, 0, e)
                    }, I.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        t = "string" != typeof t ? t : I.selector(t) || t;
                        var i, n, r, s;
                        if ((v(t) || N(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) n = n.concat(I.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (n = $(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = I.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                    };
                    var nt = b("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
                    }, !0);
                    if (l = nt.prototype, nt.version = "1.19.0", nt.API = 2, l._firstPT = null, l._addTween = F, l.setRatio = j, l._kill = function(t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, l._mod = l._roundProps = function(t) {
                            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, I._onPluginEvent = function(t, e) {
                            var i, n, r, s, o, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                                    (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                                }
                                a = e._firstPT = r
                            }
                            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, nt.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === nt.API && (V[(new t[e])._propName] = t[e]);
                            return !0
                        }, _.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                s = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                o = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    nt.call(this, i, n), this._overwriteProps = r || []
                                }, t.global === !0),
                                a = o.prototype = new nt(i);
                            a.constructor = o, o.API = t.API;
                            for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                            return o.version = t.version, nt.activate([o]), o
                        }, o = t._gsQueue) {
                        for (a = 0; a < o.length; a++) o[a]();
                        for (l in g) g[l].func || t.console.log("GSAP encountered missing dependency: " + l)
                    }
                    c = !1
                }
            }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenLite")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
//https://www.uglifyjs.net/