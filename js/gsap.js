function gsap(t, e, i) {
        (function(t) {
            var i = "undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function() {
                    "use strict";
                    i._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                            var n = function(t) {
                                    var e, i = [],
                                        n = t.length;
                                    for (e = 0; e !== n; i.push(t[e++]));
                                    return i
                                },
                                r = function(t, e, i) {
                                    var n, r, s = t.cycle;
                                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                                    delete t.cycle
                                },
                                s = function(t, e, n) {
                                    i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render
                                },
                                o = 1e-10,
                                a = i._internals,
                                l = a.isSelector,
                                h = a.isArray,
                                c = s.prototype = i.to({}, .1, {}),
                                u = [];
                            s.version = "1.20.4", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                                return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                            }, c.updateTo = function(t, e) {
                                var n, r = this.ratio,
                                    s = this.vars.immediateRender || t.immediateRender;
                                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                                for (n in t) this.vars[n] = t[n];
                                if (this._initted || s)
                                    if (e) this._initted = !1, s && this.render(0, !0, !0);
                                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                    var o = this._totalTime;
                                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                                } else if (this._initted = !1, this._init(), this._time > 0 || s)
                                    for (var a, l = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                                return this
                            }, c.render = function(t, e, n) {
                                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                                var r, s, l, h, c, u, p, d, f, m = this._dirty ? this.totalDuration() : this._totalDuration,
                                    v = this._time,
                                    g = this._totalTime,
                                    y = this._cycle,
                                    _ = this._duration,
                                    b = this._rawPrevTime;
                                if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (b < 0 || t <= 0 && t >= -1e-7 || b === o && "isPause" !== this.data) && b !== t && (n = !0, b > o && (s = "onReverseComplete")), this._rawPrevTime = d = !e || t || b === t ? t : o)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === _ && b > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || n) && (b >= 0 && (n = !0), this._rawPrevTime = d = !e || t || b === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = _ + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time, f = this._yoyoEase || this.vars.yoyoEase, f && (this._yoyoEase || (f !== !0 || this._initted ? this._yoyoEase = f = f === !0 ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((_ - this._time) / _) : 0)), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / _, u = this._easeType, p = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / _ < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / _))), v === this._time && !n && y === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = v, this._totalTime = g, this._rawPrevTime = b, this._cycle = y, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                                    !this._time || r || f ? r && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / _)
                                }
                                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== v && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== _ || e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== g || s) && this._callback("onUpdate")), this._cycle !== y && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === _ && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0)))
                            }, s.to = function(t, e, i) {
                                return new s(t, e, i)
                            }, s.from = function(t, e, i) {
                                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                            }, s.fromTo = function(t, e, i, n) {
                                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                            }, s.staggerTo = s.allTo = function(t, e, o, a, c, p, d) {
                                a = a || 0;
                                var f, m, v, g, y = 0,
                                    _ = [],
                                    b = function() {
                                        o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, p || u)
                                    },
                                    x = o.cycle,
                                    w = o.startAt && o.startAt.cycle;
                                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], a < 0 && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, v = 0; v <= f; v++) {
                                    m = {};
                                    for (g in o) m[g] = o[g];
                                    if (x && (r(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), w) {
                                        w = m.startAt = {};
                                        for (g in o.startAt) w[g] = o.startAt[g];
                                        r(m.startAt, t, v)
                                    }
                                    m.delay = y + (m.delay || 0), v === f && c && (m.onComplete = b), _[v] = new s(t[v], e, m), y += a
                                }
                                return _
                            }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                            }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                            }, s.delayedCall = function(t, e, i, n, r) {
                                return new s(e, 0, {
                                    delay: t,
                                    onComplete: e,
                                    onCompleteParams: i,
                                    callbackScope: n,
                                    onReverseComplete: e,
                                    onReverseCompleteParams: i,
                                    immediateRender: !1,
                                    useFrames: r,
                                    overwrite: 0
                                })
                            }, s.set = function(t, e) {
                                return new s(t, 0, e)
                            }, s.isTweening = function(t) {
                                return i.getTweensOf(t, !0).length > 0
                            };
                            var p = function(t, e) {
                                    for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(p(s, e)), r = n.length), s = s._next;
                                    return n
                                },
                                d = s.getAllTweens = function(e) {
                                    return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                                };
                            s.killAll = function(t, i, n, r) {
                                null == i && (i = !0), null == n && (n = !0);
                                var s, o, a, l = d(0 != r),
                                    h = l.length,
                                    c = i && n && r;
                                for (a = 0; a < h; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                            }, s.killChildTweensOf = function(t, e) {
                                if (null != t) {
                                    var r, o, c, u, p, d = a.tweenLookup;
                                    if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                                        for (u = t.length; --u > -1;) s.killChildTweensOf(t[u], e);
                                    else {
                                        r = [];
                                        for (c in d)
                                            for (o = d[c].target.parentNode; o;) o === t && (r = r.concat(d[c].tweens)), o = o.parentNode;
                                        for (p = r.length, u = 0; u < p; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                                    }
                                }
                            };
                            var f = function(t, i, n, r) {
                                i = i !== !1, n = n !== !1, r = r !== !1;
                                for (var s, o, a = d(r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                            };
                            return s.pauseAll = function(t, e, i) {
                                f(!0, t, e, i)
                            }, s.resumeAll = function(t, e, i) {
                                f(!1, t, e, i)
                            }, s.globalTimeScale = function(e) {
                                var n = t._rootTimeline,
                                    r = i.ticker.time;
                                return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                            }, c.progress = function(t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                            }, c.totalProgress = function(t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                            }, c.time = function(t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                            }, c.duration = function(e) {
                                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                            }, c.totalDuration = function(t) {
                                return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                            }, c.repeat = function(t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                            }, c.repeatDelay = function(t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                            }, c.yoyo = function(t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                            }, s
                        }, !0), i._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                            var r = function(t) {
                                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                    var i, n, r = this.vars;
                                    for (n in r) i = r[n], h(i) && i.join("").indexOf("{self}") !== -1 && (r[n] = this._swapSelfInParams(i));
                                    h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                                },
                                s = 1e-10,
                                o = n._internals,
                                a = r._internals = {},
                                l = o.isSelector,
                                h = o.isArray,
                                c = o.lazyTweens,
                                u = o.lazyRender,
                                p = i._gsDefine.globals,
                                d = function(t) {
                                    var e, i = {};
                                    for (e in t) i[e] = t[e];
                                    return i
                                },
                                f = function(t, e, i) {
                                    var n, r, s = t.cycle;
                                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                                    delete t.cycle
                                },
                                m = a.pauseCallback = function() {},
                                v = function(t) {
                                    var e, i = [],
                                        n = t.length;
                                    for (e = 0; e !== n; i.push(t[e++]));
                                    return i
                                },
                                g = r.prototype = new e;
                            return r.version = "1.20.4", g.constructor = r, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, i, r) {
                                var s = i.repeat && p.TweenMax || n;
                                return e ? this.add(new s(t, e, i), r) : this.set(t, i, r)
                            }, g.from = function(t, e, i, r) {
                                return this.add((i.repeat && p.TweenMax || n).from(t, e, i), r)
                            }, g.fromTo = function(t, e, i, r, s) {
                                var o = r.repeat && p.TweenMax || n;
                                return e ? this.add(o.fromTo(t, e, i, r), s) : this.set(t, r, s)
                            }, g.staggerTo = function(t, e, i, s, o, a, h, c) {
                                var u, p, m = new r({
                                        onComplete: a,
                                        onCompleteParams: h,
                                        callbackScope: c,
                                        smoothChildTiming: this.smoothChildTiming
                                    }),
                                    g = i.cycle;
                                for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], l(t) && (t = v(t)), s = s || 0, s < 0 && (t = v(t), t.reverse(), s *= -1), p = 0; p < t.length; p++) u = d(i), u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), g && (f(u, t, p), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[p], e, u, p * s);
                                return this.add(m, o)
                            }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                            }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                            }, g.call = function(t, e, i, r) {
                                return this.add(n.delayedCall(0, t, e, i), r)
                            }, g.set = function(t, e, i) {
                                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
                            }, r.exportRoot = function(t, e) {
                                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                                var i, s, o, a, l = new r(t),
                                    h = l._timeline;
                                for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next, e && o instanceof n && o.target === o.vars.onComplete || (s = o._startTime - o._delay, s < 0 && (i = 1), l.add(o, s)), o = a;
                                return h.add(l, 0), i && l.totalDuration(), l
                            }, g.add = function(i, s, o, a) {
                                var l, c, u, p, d, f;
                                if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof t)) {
                                    if (i instanceof Array || i && i.push && h(i)) {
                                        for (o = o || "normal", a = a || 0, l = s, c = i.length, u = 0; u < c; u++) h(p = i[u]) && (p = new r({
                                            tweens: p
                                        })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === o ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), l += a;
                                        return this._uncache(!0)
                                    }
                                    if ("string" == typeof i) return this.addLabel(i, s);
                                    if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                                    i = n.delayedCall(0, i)
                                }
                                if (e.prototype.add.call(this, i, s), i._time && i.render((this.rawTime() - i._startTime) * i._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                    for (d = this, f = d.rawTime() > i._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                                return this
                            }, g.remove = function(e) {
                                if (e instanceof t) {
                                    this._remove(e, !1);
                                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                                }
                                if (e instanceof Array || e && e.push && h(e)) {
                                    for (var n = e.length; --n > -1;) this.remove(e[n]);
                                    return this
                                }
                                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                            }, g._remove = function(t, i) {
                                e.prototype._remove.call(this, t, i);
                                var n = this._last;
                                return n ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                            }, g.append = function(t, e) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                            }, g.insert = g.insertMultiple = function(t, e, i, n) {
                                return this.add(t, e || 0, i, n)
                            }, g.appendMultiple = function(t, e, i, n) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                            }, g.addLabel = function(t, e) {
                                return this._labels[t] = this._parseTimeOrLabel(e), this
                            }, g.addPause = function(t, e, i, r) {
                                var s = n.delayedCall(0, m, i, r || this);
                                return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                            }, g.removeLabel = function(t) {
                                return delete this._labels[t], this
                            }, g.getLabelTime = function(t) {
                                return null != this._labels[t] ? this._labels[t] : -1
                            }, g._parseTimeOrLabel = function(e, i, n, r) {
                                var s, o;
                                if (r instanceof t && r.timeline === this) this.remove(r);
                                else if (r && (r instanceof Array || r.push && h(r)))
                                    for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                                if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
                                else {
                                    if (o = e.indexOf("="), o === -1) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                                }
                                return Number(e) + i
                            }, g.seek = function(t, e) {
                                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                            }, g.stop = function() {
                                return this.paused(!0)
                            }, g.gotoAndPlay = function(t, e) {
                                return this.play(t, e)
                            }, g.gotoAndStop = function(t, e) {
                                return this.pause(t, e)
                            }, g.render = function(t, e, i) {
                                this._gc && this._enabled(!0, !1);
                                var n, r, o, a, l, h, p, d = this._time,
                                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                                    m = this._startTime,
                                    v = this._timeScale,
                                    g = this._paused;
                                if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = f + 1e-4;
                                else if (t < 1e-7)
                                    if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                                    else {
                                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                        t = 0, this._initted || (l = !0)
                                    }
                                else {
                                    if (this._hasPause && !this._forcingPlayhead && !e) {
                                        if (t >= d)
                                            for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                                        else
                                            for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                                        h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                    }
                                    this._totalTime = this._time = this._rawPrevTime = t
                                }
                                if (this._time !== d && this._first || i || l || h) {
                                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), p = this._time, p >= d)
                                        for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || g));)(n._active || n._startTime <= p && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                    else
                                        for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || g));) {
                                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                                if (h === n) {
                                                    for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                                    h = null, this.pause()
                                                }
                                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                            }
                                            n = o
                                        }
                                    this._onUpdate && (e || (c.length && u(),
                                        this._callback("onUpdate"))), a && (this._gc || m !== this._startTime && v === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                                }
                            }, g._hasPausedChild = function() {
                                for (var t = this._first; t;) {
                                    if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                                    t = t._next
                                }
                                return !1
                            }, g.getChildren = function(t, e, i, r) {
                                r = r || -9999999999;
                                for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof n ? e !== !1 && (s[a++] = o) : (i !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, i)), a = s.length))), o = o._next;
                                return s
                            }, g.getTweensOf = function(t, e) {
                                var i, r, s = this._gc,
                                    o = [],
                                    a = 0;
                                for (s && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (o[a++] = i[r]);
                                return s && this._enabled(!1, !0), o
                            }, g.recent = function() {
                                return this._recent
                            }, g._contains = function(t) {
                                for (var e = t.timeline; e;) {
                                    if (e === this) return !0;
                                    e = e.timeline
                                }
                                return !1
                            }, g.shiftChildren = function(t, e, i) {
                                i = i || 0;
                                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                                if (e)
                                    for (n in s) s[n] >= i && (s[n] += t);
                                return this._uncache(!0)
                            }, g._kill = function(t, e) {
                                if (!t && !e) return this._enabled(!1, !1);
                                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                                return r
                            }, g.clear = function(t) {
                                var e = this.getChildren(!1, !0, !0),
                                    i = e.length;
                                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                                return t !== !1 && (this._labels = {}), this._uncache(!0)
                            }, g.invalidate = function() {
                                for (var e = this._first; e;) e.invalidate(), e = e._next;
                                return t.prototype.invalidate.call(this)
                            }, g._enabled = function(t, i) {
                                if (t === this._gc)
                                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                                return e.prototype._enabled.call(this, t, i)
                            }, g.totalTime = function(e, i, n) {
                                this._forcingPlayhead = !0;
                                var r = t.prototype.totalTime.apply(this, arguments);
                                return this._forcingPlayhead = !1, r
                            }, g.duration = function(t) {
                                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                            }, g.totalDuration = function(t) {
                                if (!arguments.length) {
                                    if (this._dirty) {
                                        for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                                        this._duration = this._totalDuration = n, this._dirty = !1
                                    }
                                    return this._totalDuration
                                }
                                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                            }, g.paused = function(e) {
                                if (!e)
                                    for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                                return t.prototype.paused.apply(this, arguments)
                            }, g.usesFrames = function() {
                                for (var e = this._timeline; e._timeline;) e = e._timeline;
                                return e === t._rootFramesTimeline
                            }, g.rawTime = function(t) {
                                return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                            }, r
                        }, !0), i._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) {
                            var r = function(e) {
                                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                                },
                                s = 1e-10,
                                o = e._internals,
                                a = o.lazyTweens,
                                l = o.lazyRender,
                                h = i._gsDefine.globals,
                                c = new n(null, null, 1, 0),
                                u = r.prototype = new t;
                            return u.constructor = r, u.kill()._gc = !1, r.version = "1.20.4", u.invalidate = function() {
                                return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                            }, u.addCallback = function(t, i, n, r) {
                                return this.add(e.delayedCall(0, t, n, r), i)
                            }, u.removeCallback = function(t, e) {
                                if (t)
                                    if (null == e) this._kill(null, t);
                                    else
                                        for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                                return this
                            }, u.removePause = function(e) {
                                return this.removeCallback(t._internals.pauseCallback, e)
                            }, u.tweenTo = function(t, i) {
                                i = i || {};
                                var n, r, s, o = {
                                        ease: c,
                                        useFrames: this.usesFrames(),
                                        immediateRender: !1,
                                        lazy: !1
                                    },
                                    a = i.repeat && h.TweenMax || e;
                                for (r in i) o[r] = i[r];
                                return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function() {
                                    s.target.paused(!0), s.vars.time === s.target.time() || n !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                                }, s
                            }, u.tweenFromTo = function(t, e, i) {
                                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                                    onComplete: this.seek,
                                    onCompleteParams: [t],
                                    callbackScope: this
                                }, i.immediateRender = i.immediateRender !== !1;
                                var n = this.tweenTo(e, i);
                                return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                            }, u.render = function(t, e, i) {
                                this._gc && this._enabled(!0, !1);
                                var n, r, o, h, c, u, p, d, f = this._time,
                                    m = this._dirty ? this.totalDuration() : this._totalDuration,
                                    v = this._duration,
                                    g = this._totalTime,
                                    y = this._startTime,
                                    _ = this._timeScale,
                                    b = this._rawPrevTime,
                                    x = this._paused,
                                    w = this._cycle;
                                if (f !== this._time && (t += this._time - f), t >= m - 1e-7 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || b < 0 || b === s) && b !== t && this._first && (c = !0, b > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = v, t = v + 1e-4);
                                else if (t < 1e-7)
                                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === v && b !== s && (b > 0 || t < 0 && b >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : b >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                                    else {
                                        if (this._rawPrevTime = v || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                        t = 0, this._initted || (c = !0)
                                    }
                                else if (0 === v && b < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = v + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? (this._time = v, t = v + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                                    if (t = this._time, t >= f || this._repeat && w !== this._cycle)
                                        for (n = this._first; n && n._startTime <= t && !p;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n), n = n._next;
                                    else
                                        for (n = this._last; n && n._startTime >= t && !p;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n), n = n._prev;
                                    p && p._startTime < v && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                if (this._cycle !== w && !this._locked) {
                                    var T = this._yoyo && 0 !== (1 & w),
                                        S = T === (this._yoyo && 0 !== (1 & this._cycle)),
                                        M = this._totalTime,
                                        P = this._cycle,
                                        E = this._rawPrevTime,
                                        A = this._time;
                                    if (this._totalTime = w * v, this._cycle < w ? T = !T : this._totalTime += v, this._time = f, this._rawPrevTime = 0 === v ? b - 1e-4 : b, this._cycle = w, this._locked = !0, f = T ? 0 : v, this.render(f, e, 0 === v), e || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                                    if (S && (this._cycle = w, this._locked = !0, f = T ? v + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
                                    this._time = A, this._totalTime = M, this._cycle = P, this._rawPrevTime = E
                                }
                                if (!(this._time !== f && this._first || i || c || p)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), d = this._time, d >= f)
                                    for (n = this._first; n && (o = n._next, d === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                else
                                    for (n = this._last; n && (o = n._prev, d === this._time && (!this._paused || x));) {
                                        if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                            if (p === n) {
                                                for (p = n._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                                p = null, this.pause()
                                            }
                                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                        }
                                        n = o
                                    }
                                this._onUpdate && (e || (a.length && l(), this._callback("onUpdate"))), h && (this._locked || this._gc || y !== this._startTime && _ === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (r && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                            }, u.getActive = function(t, e, i) {
                                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                                var n, r, s = [],
                                    o = this.getChildren(t, e, i),
                                    a = 0,
                                    l = o.length;
                                for (n = 0; n < l; n++) r = o[n], r.isActive() && (s[a++] = r);
                                return s
                            }, u.getLabelAfter = function(t) {
                                t || 0 !== t && (t = this._time);
                                var e, i = this.getLabelsArray(),
                                    n = i.length;
                                for (e = 0; e < n; e++)
                                    if (i[e].time > t) return i[e].name;
                                return null
                            }, u.getLabelBefore = function(t) {
                                null == t && (t = this._time);
                                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                                    if (e[i].time < t) return e[i].name;
                                return null
                            }, u.getLabelsArray = function() {
                                var t, e = [],
                                    i = 0;
                                for (t in this._labels) e[i++] = {
                                    time: this._labels[t],
                                    name: t
                                };
                                return e.sort(function(t, e) {
                                    return t.time - e.time
                                }), e
                            }, u.invalidate = function() {
                                return this._locked = !1, t.prototype.invalidate.call(this)
                            }, u.progress = function(t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                            }, u.totalProgress = function(t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                            }, u.totalDuration = function(e) {
                                return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                            }, u.time = function(t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                            }, u.repeat = function(t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                            }, u.repeatDelay = function(t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                            }, u.yoyo = function(t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                            }, u.currentLabel = function(t) {
                                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                            }, r
                        }, !0),
                        function() {
                            var t = 180 / Math.PI,
                                e = [],
                                n = [],
                                r = [],
                                s = {},
                                o = i._gsDefine.globals,
                                a = function(t, e, i, n) {
                                    i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                                },
                                l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                                h = function(t, e, i, n) {
                                    var r = {
                                            a: t
                                        },
                                        s = {},
                                        o = {},
                                        a = {
                                            c: n
                                        },
                                        l = (t + e) / 2,
                                        h = (e + i) / 2,
                                        c = (i + n) / 2,
                                        u = (l + h) / 2,
                                        p = (h + c) / 2,
                                        d = (p - u) / 8;
                                    return r.b = l + (t - l) / 4, s.b = u + d, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + p) / 2, o.b = p - d, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                                },
                                c = function(t, i, s, o, a) {
                                    var l, c, u, p, d, f, m, v, g, y, _, b, x, w = t.length - 1,
                                        T = 0,
                                        S = t[0].a;
                                    for (l = 0; l < w; l++) d = t[T], c = d.a, u = d.d, p = t[T + 1].d, a ? (_ = e[l], b = n[l], x = (b + _) * i * .25 / (o ? .5 : r[l] || .5), f = u - (u - c) * (o ? .5 * i : 0 !== _ ? x / _ : 0), m = u + (p - u) * (o ? .5 * i : 0 !== b ? x / b : 0), v = u - (f + ((m - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (f = u - (u - c) * i * .5, m = u + (p - u) * i * .5, v = u - (f + m) / 2), f += v, m += v, d.c = g = f, 0 !== l ? d.b = S : d.b = S = d.a + .6 * (d.c - d.a), d.da = u - c, d.ca = g - c, d.ba = S - c, s ? (y = h(c, S, g, u), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
                                    d = t[T], d.b = S, d.c = S + .4 * (d.d - S), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = S - d.a, s && (y = h(d.a, S, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                                },
                                u = function(t, i, r, s) {
                                    var o, l, h, c, u, p, d = [];
                                    if (s)
                                        for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][i]) && "=" === p.charAt(1) && (t[l][i] = s[i] + Number(p.charAt(0) + p.substr(2)));
                                    if (o = t.length - 2, o < 0) return d[0] = new a(t[0][i], 0, 0, t[0][i]), d;
                                    for (l = 0; l < o; l++) h = t[l][i], c = t[l + 1][i], d[l] = new a(h, 0, 0, c), r && (u = t[l + 2][i], e[l] = (e[l] || 0) + (c - h) * (c - h), n[l] = (n[l] || 0) + (u - c) * (u - c));
                                    return d[l] = new a(t[l][i], 0, 0, t[l + 1][i]), d
                                },
                                p = function(t, i, o, a, h, p) {
                                    var d, f, m, v, g, y, _, b, x = {},
                                        w = [],
                                        T = p || t[0];
                                    h = "string" == typeof h ? "," + h + "," : l, null == i && (i = 1);
                                    for (f in t[0]) w.push(f);
                                    if (t.length > 1) {
                                        for (b = t[t.length - 1], _ = !0, d = w.length; --d > -1;)
                                            if (f = w[d], Math.abs(T[f] - b[f]) > .05) {
                                                _ = !1;
                                                break
                                            } _ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                                    }
                                    for (e.length = n.length = r.length = 0, d = w.length; --d > -1;) f = w[d], s[f] = h.indexOf("," + f + ",") !== -1, x[f] = u(t, f, s[f], p);
                                    for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), n[d] = Math.sqrt(n[d]);
                                    if (!a) {
                                        for (d = w.length; --d > -1;)
                                            if (s[f])
                                                for (m = x[w[d]], y = m.length - 1, v = 0; v < y; v++) g = m[v + 1].da / n[v] + m[v].da / e[v] || 0, r[v] = (r[v] || 0) + g * g;
                                        for (d = r.length; --d > -1;) r[d] = Math.sqrt(r[d])
                                    }
                                    for (d = w.length, v = o ? 4 : 1; --d > -1;) f = w[d], m = x[f], c(m, i, o, a, s[f]), _ && (m.splice(0, v), m.splice(m.length - v, v));
                                    return x
                                },
                                d = function(t, e, i) {
                                    e = e || "soft";
                                    var n, r, s, o, l, h, c, u, p, d, f, m = {},
                                        v = "cubic" === e ? 3 : 2,
                                        g = "soft" === e,
                                        y = [];
                                    if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                                    for (p in t[0]) y.push(p);
                                    for (h = y.length; --h > -1;) {
                                        for (p = y[h], m[p] = l = [], d = 0, u = t.length, c = 0; c < u; c++) n = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && c < u - 1 && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
                                        for (u = d - v + 1, d = 0, c = 0; c < u; c += v) n = l[c], r = l[c + 1], s = l[c + 2], o = 2 === v ? 0 : l[c + 3], l[d++] = f = 3 === v ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                                        l.length = d
                                    }
                                    return m
                                },
                                f = function(t, e, i) {
                                    for (var n, r, s, o, a, l, h, c, u, p, d, f = 1 / i, m = t.length; --m > -1;)
                                        for (p = t[m], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; c <= i; c++) h = f * c, u = 1 - h, n = r - (r = (h * h * o + 3 * u * (h * a + u * l)) * h), d = m * i + c - 1, e[d] = (e[d] || 0) + n * n
                                },
                                m = function(t, e) {
                                    e = e >> 0 || 6;
                                    var i, n, r, s, o = [],
                                        a = [],
                                        l = 0,
                                        h = 0,
                                        c = e - 1,
                                        u = [],
                                        p = [];
                                    for (i in t) f(t[i], o, e);
                                    for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), s = n % e, p[s] = l, s === c && (h += l, s = n / e >> 0, u[s] = p, a[s] = h, l = 0, p = []);
                                    return {
                                        length: h,
                                        lengths: a,
                                        segments: u
                                    }
                                },
                                v = i._gsDefine.plugin({
                                    propName: "bezier",
                                    priority: -1,
                                    version: "1.3.8",
                                    API: 2,
                                    global: !0,
                                    init: function(t, e, i) {
                                        this._target = t, e instanceof Array && (e = {
                                            values: e
                                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                        var n, r, s, o, a, l = e.values || [],
                                            h = {},
                                            c = l[0],
                                            u = e.autoRotate || i.vars.orientToBezier;
                                        this._autoRotate = u ? u instanceof Array ? u : [
                                            ["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]
                                        ] : null;
                                        for (n in c) this._props.push(n);
                                        for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                            var f = m(this._beziers, this._timeRes);
                                            this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                        }
                                        if (u = this._autoRotate)
                                            for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), s = u.length; --s > -1;) {
                                                for (o = 0; o < 3; o++) n = u[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                                n = u[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                            }
                                        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                                    },
                                    set: function(e) {
                                        var i, n, r, s, o, a, l, h, c, u, p = this._segCount,
                                            d = this._func,
                                            f = this._target,
                                            m = e !== this._startRatio;
                                        if (this._timeRes) {
                                            if (c = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < p - 1) {
                                                for (h = p - 1; r < h && (this._l2 = c[++r]) <= e;);
                                                this._l1 = c[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                            } else if (e < this._l1 && r > 0) {
                                                for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                                0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                            }
                                            if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                                for (h = u.length - 1; r < h && (this._s2 = u[++r]) <= e;);
                                                this._s1 = u[r - 1], this._si = r
                                            } else if (e < this._s1 && r > 0) {
                                                for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                                0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                            }
                                            a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                        } else i = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                                        for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, f)), d[s] ? f[s](l) : f[s] = l;
                                        if (this._autoRotate) {
                                            var v, g, y, _, b, x, w, T = this._autoRotate;
                                            for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], v = this._beziers[T[r][1]], o && v && (o = o[i], v = v[i], g = o.a + (o.b - o.a) * a, _ = o.b + (o.c - o.b) * a, g += (_ - g) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = v.a + (v.b - v.a) * a, b = v.b + (v.c - v.b) * a, y += (b - y) * a, b += (v.c + (v.d - v.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - g) * w + x : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, f)), d[s] ? f[s](l) : f[s] = l)
                                        }
                                    }
                                }),
                                g = v.prototype;
                            v.bezierThrough = p, v.cubicToQuadratic = h, v._autoCSS = !0, v.quadraticToCubic = function(t, e, i) {
                                return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                            }, v._cssRegister = function() {
                                var t = o.CSSPlugin;
                                if (t) {
                                    var e = t._internals,
                                        i = e._parseToProxy,
                                        n = e._setPluginRatio,
                                        r = e.CSSPropTween;
                                    e._registerComplexSpecialProp("bezier", {
                                        parser: function(t, e, s, o, a, l) {
                                            e instanceof Array && (e = {
                                                values: e
                                            }), l = new v;
                                            var h, c, u, p = e.values,
                                                d = p.length - 1,
                                                f = [],
                                                m = {};
                                            if (d < 0) return a;
                                            for (h = 0; h <= d; h++) u = i(t, p[h], o, a, l, d !== h), f[h] = u.end;
                                            for (c in e) m[c] = e[c];
                                            return m.values = f, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                                ["left", "top", "rotation", h, !1]
                                            ] : null != u.end.x && [
                                                ["x", "y", "rotation", h, !1]
                                            ]), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, o._tween), a
                                        }
                                    })
                                }
                            }, g._mod = function(t) {
                                for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = t[i[n]], e && "function" == typeof e && (this._mod[i[n]] = e)
                            }, g._kill = function(t) {
                                var e, i, n = this._props;
                                for (e in this._beziers)
                                    if (e in t)
                                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                                if (n = this._autoRotate)
                                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                                return this._super._kill.call(this, t)
                            }
                        }(), i._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                            var n, r, s, o, a = function() {
                                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                                },
                                l = i._gsDefine.globals,
                                h = {},
                                c = a.prototype = new t("css");
                            c.constructor = a, a.version = "1.20.4", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, c = "px", a.suffixMap = {
                                top: c,
                                right: c,
                                bottom: c,
                                left: c,
                                width: c,
                                height: c,
                                fontSize: c,
                                padding: c,
                                margin: c,
                                perspective: c,
                                lineHeight: ""
                            };
                            var u, p, d, f, m, v, g, y, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                                b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                                x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                                w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                                T = /(?:\d|\-|\+|=|#|\.)*/g,
                                S = /opacity *= *([^)]*)/i,
                                M = /opacity:([^;]*)/i,
                                P = /alpha\(opacity *=.+?\)/i,
                                E = /^(rgb|hsl)/,
                                A = /([A-Z])/g,
                                L = /-([a-z])/gi,
                                C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                                k = function(t, e) {
                                    return e.toUpperCase()
                                },
                                R = /(?:Left|Right|Width)/i,
                                I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                                N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                                O = /,(?=[^\)]*(?:\(|$))/gi,
                                z = /[\s,\(]/i,
                                D = Math.PI / 180,
                                B = 180 / Math.PI,
                                U = {},
                                j = {
                                    style: {}
                                },
                                G = i.document || {
                                    createElement: function() {
                                        return j
                                    }
                                },
                                F = function(t, e) {
                                    return G.createElementNS ? G.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : G.createElement(t)
                                },
                                H = F("div"),
                                V = F("img"),
                                W = a._internals = {
                                    _specialProps: h
                                },
                                X = (i.navigator || {}).userAgent || "",
                                q = function() {
                                    var t = X.indexOf("Android"),
                                        e = F("a");
                                    return d = X.indexOf("Safari") !== -1 && X.indexOf("Chrome") === -1 && (t === -1 || parseFloat(X.substr(t + 8, 2)) > 3), m = d && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, f = X.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                                }(),
                                Y = function(t) {
                                    return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                                },
                                K = function(t) {
                                    i.console && console.log(t)
                                },
                                Z = "",
                                Q = "",
                                J = function(t, e) {
                                    e = e || H;
                                    var i, n, r = e.style;
                                    if (void 0 !== r[t]) return t;
                                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                                    return n >= 0 ? (Q = 3 === n ? "ms" : i[n], Z = "-" + Q.toLowerCase() + "-", Q + t) : null
                                },
                                $ = G.defaultView ? G.defaultView.getComputedStyle : function() {},
                                tt = a.getStyle = function(t, e, i, n, r) {
                                    var s;
                                    return q || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || $(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Y(t)
                                },
                                et = W.convertToPixels = function(t, i, n, r, s) {
                                    if ("px" === r || !r && "lineHeight" !== i) return n;
                                    if ("auto" === r || !n) return 0;
                                    var o, l, h, c = R.test(i),
                                        u = t,
                                        p = H.style,
                                        d = n < 0,
                                        f = 1 === n;
                                    if (d && (n = -n), f && (n *= 100), "lineHeight" !== i || r)
                                        if ("%" === r && i.indexOf("border") !== -1) o = n / 100 * (c ? t.clientWidth : t.clientHeight);
                                        else {
                                            if (p.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                            else {
                                                if (u = t.parentNode || G.body, tt(u, "display").indexOf("flex") !== -1 && (p.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                                p[c ? "width" : "height"] = n + r
                                            }
                                            u.appendChild(H), o = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(H), c && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = o / n * 100), 0 !== o || s || (o = et(t, i, n, r, !0))
                                        }
                                    else l = $(t).lineHeight, t.style.lineHeight = n, o = parseFloat($(t).lineHeight), t.style.lineHeight = l;
                                    return f && (o /= 100), d ? -o : o
                                },
                                it = W.calculateOffset = function(t, e, i) {
                                    if ("absolute" !== tt(t, "position", i)) return 0;
                                    var n = "left" === e ? "Left" : "Top",
                                        r = tt(t, "margin" + n, i);
                                    return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(T, "")) || 0)
                                },
                                nt = function(t, e) {
                                    var i, n, r, s = {};
                                    if (e = e || $(t, null))
                                        if (i = e.length)
                                            for (; --i > -1;) r = e[i], r.indexOf("-transform") !== -1 && Ct !== r || (s[r.replace(L, k)] = e.getPropertyValue(r));
                                        else
                                            for (i in e) i.indexOf("Transform") !== -1 && Lt !== i || (s[i] = e[i]);
                                    else if (e = t.currentStyle || t.style)
                                        for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(L, k)] = e[i]);
                                    return q || (s.opacity = Y(t)), n = Vt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Rt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                                },
                                rt = function(t, e, i, n, r) {
                                    var s, o, a, l = {},
                                        h = t.style;
                                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && o.indexOf("Origin") === -1 && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0 : it(t, o), void 0 !== h[o] && (a = new _t(h, o, h[o], a))));
                                    if (n)
                                        for (o in n) "className" !== o && (l[o] = n[o]);
                                    return {
                                        difs: l,
                                        firstMPT: a
                                    }
                                },
                                st = {
                                    width: ["Left", "Right"],
                                    height: ["Top", "Bottom"]
                                },
                                ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                                at = function(t, e, i) {
                                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || $(t))[e] || 0;
                                    if (t.getCTM && Gt(t)) return t.getBBox()[e] || 0;
                                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                        r = st[e],
                                        s = r.length;
                                    for (i = i || $(t, null); --s > -1;) n -= parseFloat(tt(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[s] + "Width", i, !0)) || 0;
                                    return n
                                },
                                lt = function(t, e) {
                                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                    null != t && "" !== t || (t = "0 0");
                                    var i, n = t.split(" "),
                                        r = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : n[0],
                                        s = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : n[1];
                                    if (n.length > 3 && !e) {
                                        for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(lt(n[i]));
                                        return t.join(",")
                                    }
                                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = r.indexOf("%") !== -1, e.oyp = s.indexOf("%") !== -1, e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(s.replace(w, "")), e.v = t), e || t
                                },
                                ht = function(t, e) {
                                    return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                                },
                                ct = function(t, e) {
                                    return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                                },
                                ut = function(t, e, i, n) {
                                    var r, s, o, a, l, h = 1e-6;
                                    return "function" == typeof t && (t = t(y, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (t.indexOf("rad") === -1 ? 1 : B) - (l ? 0 : e), s.length && (n && (n[i] = e + o), t.indexOf("short") !== -1 && (o %= r, o !== o % (r / 2) && (o = o < 0 ? o + r : o - r)), t.indexOf("_cw") !== -1 && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : t.indexOf("ccw") !== -1 && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < h && a > -h && (a = 0), a
                                },
                                pt = {
                                    aqua: [0, 255, 255],
                                    lime: [0, 255, 0],
                                    silver: [192, 192, 192],
                                    black: [0, 0, 0],
                                    maroon: [128, 0, 0],
                                    teal: [0, 128, 128],
                                    blue: [0, 0, 255],
                                    navy: [0, 0, 128],
                                    white: [255, 255, 255],
                                    fuchsia: [255, 0, 255],
                                    olive: [128, 128, 0],
                                    yellow: [255, 255, 0],
                                    orange: [255, 165, 0],
                                    gray: [128, 128, 128],
                                    purple: [128, 0, 128],
                                    green: [0, 128, 0],
                                    red: [255, 0, 0],
                                    pink: [255, 192, 203],
                                    cyan: [0, 255, 255],
                                    transparent: [255, 255, 255, 0]
                                },
                                dt = function(t, e, i) {
                                    return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                                },
                                ft = a.parseColor = function(t, e) {
                                    var i, n, r, s, o, a, l, h, c, u, p;
                                    if (t)
                                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                        else {
                                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                                            else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                            else if ("hsl" === t.substr(0, 3))
                                                if (i = p = t.match(_), e) {
                                                    if (t.indexOf("=") !== -1) return t.match(b)
                                                } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = dt(o + 1 / 3, n, r), i[1] = dt(o, n, r), i[2] = dt(o - 1 / 3, n, r);
                                            else i = t.match(_) || pt.transparent;
                                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                        }
                                    else i = pt.black;
                                    return e && !p && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, h = Math.max(n, r, s), c = Math.min(n, r, s), l = (h + c) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === n ? (r - s) / u + (r < s ? 6 : 0) : h === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                                },
                                mt = function(t, e) {
                                    var i, n, r, s = t.match(vt) || [],
                                        o = 0,
                                        a = "";
                                    if (!s.length) return t;
                                    for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = ft(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                                    return a + t.substr(o)
                                },
                                vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                            for (c in pt) vt += "|" + c + "\\b";
                            vt = new RegExp(vt + ")", "gi"), a.colorStringFilter = function(t) {
                                var e, i = t[0] + " " + t[1];
                                vt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, t[0] = mt(t[0], e), t[1] = mt(t[1], e)), vt.lastIndex = 0
                            }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                            var gt = function(t, e, i, n) {
                                    if (null == t) return function(t) {
                                        return t
                                    };
                                    var r, s = e ? (t.match(vt) || [""])[0] : "",
                                        o = t.split(s).join("").match(x) || [],
                                        a = t.substr(0, t.indexOf(o[0])),
                                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                        h = t.indexOf(" ") !== -1 ? " " : ",",
                                        c = o.length,
                                        u = c > 0 ? o[0].replace(_, "") : "";
                                    return c ? r = e ? function(t) {
                                        var e, p, d, f;
                                        if ("number" == typeof t) t += u;
                                        else if (n && O.test(t)) {
                                            for (f = t.replace(O, "|").split("|"), d = 0; d < f.length; d++) f[d] = r(f[d]);
                                            return f.join(",")
                                        }
                                        if (e = (t.match(vt) || [s])[0], p = t.split(e).join("").match(x) || [], d = p.length, c > d--)
                                            for (; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
                                        return a + p.join(h) + h + e + l + (t.indexOf("inset") !== -1 ? " inset" : "")
                                    } : function(t) {
                                        var e, s, p;
                                        if ("number" == typeof t) t += u;
                                        else if (n && O.test(t)) {
                                            for (s = t.replace(O, "|").split("|"), p = 0; p < s.length; p++) s[p] = r(s[p]);
                                            return s.join(",")
                                        }
                                        if (e = t.match(x) || [], p = e.length, c > p--)
                                            for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                                        return a + e.join(h) + l
                                    } : function(t) {
                                        return t
                                    }
                                },
                                yt = function(t) {
                                    return t = t.split(","),
                                        function(e, i, n, r, s, o, a) {
                                            var l, h = (i + "").split(" ");
                                            for (a = {}, l = 0; l < 4; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                            return r.parse(e, a, s, o)
                                        }
                                },
                                _t = (W._setPluginRatio = function(t) {
                                    this.plugin.setRatio(t);
                                    for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : e < h && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                                    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                        for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                            if (i = l.t, i.type) {
                                                if (1 === i.type) {
                                                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                                    i[s] = r
                                                }
                                            } else i[s] = i.s + i.xs0;
                                            l = l._next
                                        }
                                }, function(t, e, i, n, r) {
                                    this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                                }),
                                bt = (W._parseToProxy = function(t, e, i, n, r, s) {
                                    var o, a, l, h, c, u = n,
                                        p = {},
                                        d = {},
                                        f = i._transform,
                                        m = U;
                                    for (i._transform = null, U = e, n = c = i.parse(t, e, n, r), U = m, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                                        if (n.type <= 1 && (a = n.p, d[a] = n.s + n.c, p[a] = n.s, s || (h = new _t(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                            for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, d[a] = n.data[l], p[a] = n[l], s || (h = new _t(n, l, a, h, n.rxp[l]));
                                        n = n._next
                                    }
                                    return {
                                        proxy: p,
                                        end: d,
                                        firstMPT: h,
                                        pt: c
                                    }
                                }, W.CSSPropTween = function(t, e, i, r, s, a, l, h, c, u, p) {
                                    this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof bt || o.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === u ? i : u, this.e = void 0 === p ? i + r : p, s && (this._next = s, s._prev = this)
                                }),
                                xt = function(t, e, i, n, r, s) {
                                    var o = new bt(t, e, i, n - i, r, (-1), s);
                                    return o.b = i, o.e = o.xs0 = n, o
                                },
                                wt = a.parseComplex = function(t, e, i, n, r, s, o, l, h, c) {
                                    i = i || s || "", "function" == typeof n && (n = n(y, g)), o = new bt(t, e, 0, 0, o, c ? 2 : 1, null, (!1), l, i, n), n += "", r && vt.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                                    var p, d, f, m, v, x, w, T, S, M, P, E, A, L = i.split(", ").join(",").split(" "),
                                        C = n.split(", ").join(",").split(" "),
                                        k = L.length,
                                        R = u !== !1;
                                    for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || ((n + i).indexOf("rgb") !== -1 || (n + i).indexOf("hsl") !== -1 ? (L = L.join(" ").replace(O, ", ").split(" "), C = C.join(" ").replace(O, ", ").split(" ")) : (L = L.join(" ").split(",").join(", ").split(" "), C = C.join(" ").split(",").join(", ").split(" ")), k = L.length), k !== C.length && (L = (s || "").split(" "), k = L.length), o.plugin = h, o.setRatio = c, vt.lastIndex = 0, p = 0; p < k; p++)
                                        if (m = L[p], v = C[p], T = parseFloat(m), T || 0 === T) o.appendXtra("", T, ht(v, T), v.replace(b, ""), R && v.indexOf("px") !== -1, !0);
                                        else if (r && vt.test(m)) E = v.indexOf(")") + 1, E = ")" + (E ? v.substr(E) : ""), A = v.indexOf("hsl") !== -1 && q, M = v, m = ft(m, A), v = ft(v, A), S = m.length + v.length > 6, S && !q && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[p]).join("transparent")) : (q || (S = !1), A ? o.appendXtra(M.substr(0, M.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], ht(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], ht(v[1], m[1]), "%,", !1).appendXtra("", m[2], ht(v[2], m[2]), S ? "%," : "%" + E, !1) : o.appendXtra(M.substr(0, M.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], S ? "," : E, !0),
                                        S && (m = m.length < 4 ? 1 : m[3], o.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, E, !1))), vt.lastIndex = 0;
                                    else if (x = m.match(_)) {
                                        if (w = v.match(b), !w || w.length !== x.length) return o;
                                        for (f = 0, d = 0; d < x.length; d++) P = x[d], M = m.indexOf(P, f), o.appendXtra(m.substr(f, M - f), Number(P), ht(w[d], P), "", R && "px" === m.substr(M + P.length, 2), 0 === d), f = M + P.length;
                                        o["xs" + o.l] += m.substr(f)
                                    } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + v : v;
                                    if (n.indexOf("=") !== -1 && o.data) {
                                        for (E = o.xs0 + o.data.s, p = 1; p < o.l; p++) E += o["xs" + p] + o.data["xn" + p];
                                        o.e = E + o["xs" + p]
                                    }
                                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                                },
                                Tt = 9;
                            for (c = bt.prototype, c.l = c.pr = 0; --Tt > 0;) c["xn" + Tt] = 0, c["xs" + Tt] = "";
                            c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, r, s) {
                                var o = this,
                                    a = o.l;
                                return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new bt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                                    s: e + i
                                }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                            };
                            var St = function(t, e) {
                                    e = e || {}, this.p = e.prefix ? J(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                                },
                                Mt = W._registerComplexSpecialProp = function(t, e, i) {
                                    "object" != typeof e && (e = {
                                        parser: i
                                    });
                                    var n, r, s = t.split(","),
                                        o = e.defaultValue;
                                    for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new St(s[n], e)
                                },
                                Pt = W._registerPluginProp = function(t) {
                                    if (!h[t]) {
                                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                        Mt(t, {
                                            parser: function(t, i, n, r, s, o, a) {
                                                var c = l.com.greensock.plugins[e];
                                                return c ? (c._cssRegister(), h[n].parse(t, i, n, r, s, o, a)) : (K("Error: " + e + " js file not loaded."), s)
                                            }
                                        })
                                    }
                                };
                            c = St.prototype, c.parseComplex = function(t, e, i, n, r, s) {
                                var o, a, l, h, c, u, p = this.keyword;
                                if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : p && (a = [e], l = [i])), l) {
                                    for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (u === -1 ? a[o] = a[o].split(p).join("") : c === -1 && (a[o] += " " + p)));
                                    e = a.join(", "), i = l.join(", ")
                                }
                                return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                            }, c.parse = function(t, e, i, n, r, o, a) {
                                return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                            }, a.registerSpecialProp = function(t, e, i) {
                                Mt(t, {
                                    parser: function(t, n, r, s, o, a, l) {
                                        var h = new bt(t, r, 0, 0, o, 2, r, (!1), i);
                                        return h.plugin = a, h.setRatio = e(t, n, s._tween, r), h
                                    },
                                    priority: i
                                })
                            }, a.useSVGTransformAttr = !0;
                            var Et, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                                Lt = J("transform"),
                                Ct = Z + "transform",
                                kt = J("transformOrigin"),
                                Rt = null !== J("perspective"),
                                It = W.Transform = function() {
                                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !Rt) && (a.defaultForce3D || "auto")
                                },
                                Nt = i.SVGElement,
                                Ot = function(t, e, i) {
                                    var n, r = G.createElementNS("http://www.w3.org/2000/svg", t),
                                        s = /([a-z])([A-Z])/g;
                                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                                    return e.appendChild(r), r
                                },
                                zt = G.documentElement || {},
                                Dt = function() {
                                    var t, e, n, r = v || /Android/i.test(X) && !i.chrome;
                                    return G.createElementNS && !r && (t = Ot("svg", zt), e = Ot("rect", t, {
                                        width: 100,
                                        height: 50,
                                        x: 100
                                    }), n = e.getBoundingClientRect().width, e.style[kt] = "50% 50%", e.style[Lt] = "scaleX(0.5)", r = n === e.getBoundingClientRect().width && !(f && Rt), zt.removeChild(t)), r
                                }(),
                                Bt = function(t, e, i, n, r, s) {
                                    var o, l, h, c, u, p, d, f, m, v, g, y, _, b, x = t._gsTransform,
                                        w = Ht(t, !0);
                                    x && (_ = x.xOrigin, b = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (d = t.getBBox(), 0 === d.x && 0 === d.y && d.width + d.height === 0 && (d = {
                                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0
                                    }), e = lt(e).split(" "), o = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = c = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), n && w !== Ft && (p = w[0], d = w[1], f = w[2], m = w[3], v = w[4], g = w[5], y = p * m - d * f, y && (l = c * (m / y) + u * (-f / y) + (f * g - m * v) / y, h = c * (-d / y) + u * (p / y) - (p * g - d * v) / y, c = i.xOrigin = o[0] = l, u = i.yOrigin = o[1] = h)), x && (s && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (l = c - _, h = u - b, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                                },
                                Ut = function(t) {
                                    var e, i = F("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                        n = this.parentNode,
                                        r = this.nextSibling,
                                        s = this.style.cssText;
                                    if (zt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ut
                                    } catch (o) {} else this._originalGetBBox && (e = this._originalGetBBox());
                                    return r ? n.insertBefore(this, r) : n.appendChild(this), zt.removeChild(i), this.style.cssText = s, e
                                },
                                jt = function(t) {
                                    try {
                                        return t.getBBox()
                                    } catch (e) {
                                        return Ut.call(t, !0)
                                    }
                                },
                                Gt = function(t) {
                                    return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !jt(t))
                                },
                                Ft = [1, 0, 0, 1, 0, 0],
                                Ht = function(t, e) {
                                    var i, n, r, s, o, a, l = t._gsTransform || new It,
                                        h = 1e5,
                                        c = t.style;
                                    if (Lt ? n = tt(t, Ct, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(I), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Lt || !(a = !$(t) || "none" === $(t).display) && t.parentNode || (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, zt.appendChild(t)), n = tt(t, Ct, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : a && Yt(c, "display"), o && zt.removeChild(t)), (l.svg || t.getCTM && Gt(t)) && (i && (c[Lt] + "").indexOf("matrix") !== -1 && (n = c[Lt], i = 0), r = t.getAttribute("transform"), i && r && (r = t.transform.baseVal.consolidate().matrix, n = "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return Ft;
                                    for (r = (n || "").match(_) || [], Tt = r.length; --Tt > -1;) s = Number(r[Tt]), r[Tt] = (o = s - (s |= 0)) ? (o * h + (o < 0 ? -.5 : .5) | 0) / h + s : s;
                                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                                },
                                Vt = W.getTransform = function(t, i, n, r) {
                                    if (t._gsTransform && n && !r) return t._gsTransform;
                                    var s, o, l, h, c, u, p = n ? t._gsTransform || new It : new It,
                                        d = p.scaleX < 0,
                                        f = 2e-5,
                                        m = 1e5,
                                        v = Rt ? parseFloat(tt(t, kt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                                        g = parseFloat(a.defaultTransformPerspective) || 0;
                                    if (p.svg = !(!t.getCTM || !Gt(t)), p.svg && (Bt(t, tt(t, kt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Et = a.useSVGTransformAttr || Dt), s = Ht(t), s !== Ft) {
                                        if (16 === s.length) {
                                            var y, _, b, x, w, T = s[0],
                                                S = s[1],
                                                M = s[2],
                                                P = s[3],
                                                E = s[4],
                                                A = s[5],
                                                L = s[6],
                                                C = s[7],
                                                k = s[8],
                                                R = s[9],
                                                I = s[10],
                                                N = s[12],
                                                O = s[13],
                                                z = s[14],
                                                D = s[11],
                                                U = Math.atan2(L, I);
                                            p.zOrigin && (z = -p.zOrigin, N = k * z - s[12], O = R * z - s[13], z = I * z + p.zOrigin - s[14]), p.rotationX = U * B, U && (x = Math.cos(-U), w = Math.sin(-U), y = E * x + k * w, _ = A * x + R * w, b = L * x + I * w, k = E * -w + k * x, R = A * -w + R * x, I = L * -w + I * x, D = C * -w + D * x, E = y, A = _, L = b), U = Math.atan2(-M, I), p.rotationY = U * B, U && (x = Math.cos(-U), w = Math.sin(-U), y = T * x - k * w, _ = S * x - R * w, b = M * x - I * w, R = S * w + R * x, I = M * w + I * x, D = P * w + D * x, T = y, S = _, M = b), U = Math.atan2(S, T), p.rotation = U * B, U && (x = Math.cos(U), w = Math.sin(U), y = T * x + S * w, _ = E * x + A * w, b = k * x + R * w, S = S * x - T * w, A = A * x - E * w, R = R * x - k * w, T = y, E = _, k = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), U = Math.atan2(E, A), p.scaleX = (Math.sqrt(T * T + S * S + M * M) * m + .5 | 0) / m, p.scaleY = (Math.sqrt(A * A + L * L) * m + .5 | 0) / m, p.scaleZ = (Math.sqrt(k * k + R * R + I * I) * m + .5 | 0) / m, T /= p.scaleX, E /= p.scaleY, S /= p.scaleX, A /= p.scaleY, Math.abs(U) > f ? (p.skewX = U * B, E = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(U))) : p.skewX = 0, p.perspective = D ? 1 / (D < 0 ? -D : D) : 0, p.x = N, p.y = O, p.z = z, p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * E), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * A))
                                        } else if (!Rt || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
                                            var j = s.length >= 6,
                                                G = j ? s[0] : 1,
                                                F = s[1] || 0,
                                                H = s[2] || 0,
                                                V = j ? s[3] : 1;
                                            p.x = s[4] || 0, p.y = s[5] || 0, l = Math.sqrt(G * G + F * F), h = Math.sqrt(V * V + H * H), c = G || F ? Math.atan2(F, G) * B : p.rotation || 0, u = H || V ? Math.atan2(H, V) * B + c : p.skewX || 0, p.scaleX = l, p.scaleY = h, p.rotation = c, p.skewX = u, Rt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = g, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * G + p.yOrigin * H), p.y -= p.yOrigin - (p.xOrigin * F + p.yOrigin * V))
                                        }
                                        Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = v;
                                        for (o in p) p[o] < f && p[o] > -f && (p[o] = 0)
                                    }
                                    return n && (t._gsTransform = p, p.svg && (Et && t.style[Lt] ? e.delayedCall(.001, function() {
                                        Yt(t.style, Lt)
                                    }) : !Et && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                        t.removeAttribute("transform")
                                    }))), p
                                },
                                Wt = function(t) {
                                    var e, i, n = this.data,
                                        r = -n.rotation * D,
                                        s = r + n.skewX * D,
                                        o = 1e5,
                                        a = (Math.cos(r) * n.scaleX * o | 0) / o,
                                        l = (Math.sin(r) * n.scaleX * o | 0) / o,
                                        h = (Math.sin(s) * -n.scaleY * o | 0) / o,
                                        c = (Math.cos(s) * n.scaleY * o | 0) / o,
                                        u = this.t.style,
                                        p = this.t.currentStyle;
                                    if (p) {
                                        i = l, l = -h, h = -i, e = p.filter, u.filter = "";
                                        var d, f, m = this.t.offsetWidth,
                                            g = this.t.offsetHeight,
                                            y = "absolute" !== p.position,
                                            _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                            b = n.x + m * n.xPercent / 100,
                                            x = n.y + g * n.yPercent / 100;
                                        if (null != n.ox && (d = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, f = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, b += d - (d * a + f * l), x += f - (d * h + f * c)), y ? (d = m / 2, f = g / 2, _ += ", Dx=" + (d - (d * a + f * l) + b) + ", Dy=" + (f - (d * h + f * c) + x) + ")") : _ += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? u.filter = e.replace(N, _) : u.filter = _ + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === h && 1 === c && (y && _.indexOf("Dx=0, Dy=0") === -1 || S.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && u.removeAttribute("filter")), !y) {
                                            var w, M, P, E = v < 8 ? 1 : -1;
                                            for (d = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + b), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (h < 0 ? -h : h) * m)) / 2 + x), Tt = 0; Tt < 4; Tt++) M = ot[Tt], w = p[M], i = w.indexOf("px") !== -1 ? parseFloat(w) : et(this.t, M, parseFloat(w), w.replace(T, "")) || 0, P = i !== n[M] ? Tt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Tt < 2 ? d - n.ieOffsetX : f - n.ieOffsetY, u[M] = (n[M] = Math.round(i - P * (0 === Tt || 2 === Tt ? 1 : E))) + "px"
                                        }
                                    }
                                },
                                Xt = W.set3DTransformRatio = W.setTransformRatio = function(t) {
                                    var e, i, n, r, s, o, a, l, h, c, u, p, d, m, v, g, y, _, b, x, w, T, S, M = this.data,
                                        P = this.t.style,
                                        E = M.rotation,
                                        A = M.rotationX,
                                        L = M.rotationY,
                                        C = M.scaleX,
                                        k = M.scaleY,
                                        R = M.scaleZ,
                                        I = M.x,
                                        N = M.y,
                                        O = M.z,
                                        z = M.svg,
                                        B = M.perspective,
                                        U = M.force3D,
                                        j = M.skewY,
                                        G = M.skewX;
                                    if (j && (G += j, E += j), ((1 === t || 0 === t) && "auto" === U && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !U) && !O && !B && !L && !A && 1 === R || Et && z || !Rt) return void(E || G || z ? (E *= D, T = G * D, S = 1e5, i = Math.cos(E) * C, s = Math.sin(E) * C, n = Math.sin(E - T) * -k, o = Math.cos(E - T) * k, T && "simple" === M.skewType && (e = Math.tan(T - j * D), e = Math.sqrt(1 + e * e), n *= e, o *= e, j && (e = Math.tan(j * D), e = Math.sqrt(1 + e * e), i *= e, s *= e)), z && (I += M.xOrigin - (M.xOrigin * i + M.yOrigin * n) + M.xOffset, N += M.yOrigin - (M.xOrigin * s + M.yOrigin * o) + M.yOffset, Et && (M.xPercent || M.yPercent) && (v = this.t.getBBox(), I += .01 * M.xPercent * v.width, N += .01 * M.yPercent * v.height), v = 1e-6, I < v && I > -v && (I = 0), N < v && N > -v && (N = 0)), b = (i * S | 0) / S + "," + (s * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + I + "," + N + ")", z && Et ? this.t.setAttribute("transform", "matrix(" + b) : P[Lt] = (M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) matrix(" : "matrix(") + b) : P[Lt] = (M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + k + "," + I + "," + N + ")");
                                    if (f && (v = 1e-4, C < v && C > -v && (C = R = 2e-5), k < v && k > -v && (k = R = 2e-5), !B || M.z || M.rotationX || M.rotationY || (B = 0)), E || G) E *= D, g = i = Math.cos(E), y = s = Math.sin(E), G && (E -= G * D, g = Math.cos(E), y = Math.sin(E), "simple" === M.skewType && (e = Math.tan((G - j) * D), e = Math.sqrt(1 + e * e), g *= e, y *= e, M.skewY && (e = Math.tan(j * D), e = Math.sqrt(1 + e * e), i *= e, s *= e))), n = -y, o = g;
                                    else {
                                        if (!(L || A || 1 !== R || B || z)) return void(P[Lt] = (M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + N + "px," + O + "px)" + (1 !== C || 1 !== k ? " scale(" + C + "," + k + ")" : ""));
                                        i = o = 1, n = s = 0
                                    }
                                    c = 1, r = a = l = h = u = p = 0, d = B ? -1 / B : 0, m = M.zOrigin, v = 1e-6, x = ",", w = "0", E = L * D, E && (g = Math.cos(E), y = Math.sin(E), l = -y, u = d * -y, r = i * y, a = s * y, c = g, d *= g, i *= g, s *= g), E = A * D, E && (g = Math.cos(E), y = Math.sin(E), e = n * g + r * y, _ = o * g + a * y, h = c * y, p = d * y, r = n * -y + r * g, a = o * -y + a * g, c *= g, d *= g, n = e, o = _), 1 !== R && (r *= R, a *= R, c *= R, d *= R), 1 !== k && (n *= k, o *= k, h *= k, p *= k), 1 !== C && (i *= C, s *= C, l *= C, u *= C), (m || z) && (m && (I += r * -m, N += a * -m, O += c * -m + m), z && (I += M.xOrigin - (M.xOrigin * i + M.yOrigin * n) + M.xOffset, N += M.yOrigin - (M.xOrigin * s + M.yOrigin * o) + M.yOffset), I < v && I > -v && (I = w), N < v && N > -v && (N = w), O < v && O > -v && (O = 0)), b = M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < v && i > -v ? w : i) + x + (s < v && s > -v ? w : s) + x + (l < v && l > -v ? w : l), b += x + (u < v && u > -v ? w : u) + x + (n < v && n > -v ? w : n) + x + (o < v && o > -v ? w : o), A || L || 1 !== R ? (b += x + (h < v && h > -v ? w : h) + x + (p < v && p > -v ? w : p) + x + (r < v && r > -v ? w : r), b += x + (a < v && a > -v ? w : a) + x + (c < v && c > -v ? w : c) + x + (d < v && d > -v ? w : d) + x) : b += ",0,0,0,0,1,0,", b += I + x + N + x + O + x + (B ? 1 + -O / B : 1) + ")", P[Lt] = b
                                };
                            c = It.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, Mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                                parser: function(t, e, i, n, r, o, l) {
                                    if (n._lastParsedTransform === l) return r;
                                    n._lastParsedTransform = l;
                                    var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                    "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(y, t));
                                    var u, p, d, f, m, v, _, b, x, w = t._gsTransform,
                                        T = t.style,
                                        S = 1e-6,
                                        M = At.length,
                                        P = l,
                                        E = {},
                                        A = "transformOrigin",
                                        L = Vt(t, s, !0, P.parseTransform),
                                        C = P.transform && ("function" == typeof P.transform ? P.transform(y, g) : P.transform);
                                    if (L.skewType = P.skewType || L.skewType || a.defaultSkewType, n._transform = L, C && "string" == typeof C && Lt) p = H.style, p[Lt] = C, p.display = "block", p.position = "absolute", G.body.appendChild(H), u = Vt(H, null, !1), "simple" === L.skewType && (u.scaleY *= Math.cos(u.skewX * D)), L.svg && (v = L.xOrigin, _ = L.yOrigin, u.x -= L.xOffset, u.y -= L.yOffset, (P.transformOrigin || P.svgOrigin) && (C = {}, Bt(t, lt(P.transformOrigin), C, P.svgOrigin, P.smoothOrigin, !0), v = C.xOrigin, _ = C.yOrigin, u.x -= C.xOffset - L.xOffset, u.y -= C.yOffset - L.yOffset), (v || _) && (b = Ht(H, !0), u.x -= v - (v * b[0] + _ * b[2]), u.y -= _ - (v * b[1] + _ * b[3]))), G.body.removeChild(H), u.perspective || (u.perspective = L.perspective), null != P.xPercent && (u.xPercent = ct(P.xPercent, L.xPercent)), null != P.yPercent && (u.yPercent = ct(P.yPercent, L.yPercent));
                                    else if ("object" == typeof P) {
                                        if (u = {
                                                scaleX: ct(null != P.scaleX ? P.scaleX : P.scale, L.scaleX),
                                                scaleY: ct(null != P.scaleY ? P.scaleY : P.scale, L.scaleY),
                                                scaleZ: ct(P.scaleZ, L.scaleZ),
                                                x: ct(P.x, L.x),
                                                y: ct(P.y, L.y),
                                                z: ct(P.z, L.z),
                                                xPercent: ct(P.xPercent, L.xPercent),
                                                yPercent: ct(P.yPercent, L.yPercent),
                                                perspective: ct(P.transformPerspective, L.perspective)
                                            }, m = P.directionalRotation, null != m)
                                            if ("object" == typeof m)
                                                for (p in m) P[p] = m[p];
                                            else P.rotation = m;
                                        "string" == typeof P.x && P.x.indexOf("%") !== -1 && (u.x = 0, u.xPercent = ct(P.x, L.xPercent)), "string" == typeof P.y && P.y.indexOf("%") !== -1 && (u.y = 0, u.yPercent = ct(P.y, L.yPercent)), u.rotation = ut("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : L.rotation, L.rotation, "rotation", E), Rt && (u.rotationX = ut("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : L.rotationX || 0, L.rotationX, "rotationX", E), u.rotationY = ut("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : L.rotationY || 0, L.rotationY, "rotationY", E)), u.skewX = ut(P.skewX, L.skewX), u.skewY = ut(P.skewY, L.skewY)
                                    }
                                    for (Rt && null != P.force3D && (L.force3D = P.force3D, f = !0), d = L.force3D || L.z || L.rotationX || L.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, d || null == P.scale || (u.scaleZ = 1); --M > -1;) x = At[M], C = u[x] - L[x], (C > S || C < -S || null != P[x] || null != U[x]) && (f = !0, r = new bt(L, x, L[x], C, r), x in E && (r.e = E[x]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                                    return C = P.transformOrigin, L.svg && (C || P.svgOrigin) && (v = L.xOffset, _ = L.yOffset, Bt(t, lt(C), u, P.svgOrigin, P.smoothOrigin), r = xt(L, "xOrigin", (w ? L : u).xOrigin, u.xOrigin, r, A), r = xt(L, "yOrigin", (w ? L : u).yOrigin, u.yOrigin, r, A), v === L.xOffset && _ === L.yOffset || (r = xt(L, "xOffset", w ? v : L.xOffset, L.xOffset, r, A), r = xt(L, "yOffset", w ? _ : L.yOffset, L.yOffset, r, A)), C = "0px 0px"), (C || Rt && d && L.zOrigin) && (Lt ? (f = !0, x = kt, C = (C || tt(t, x, s, !1, "50% 50%")) + "", r = new bt(T, x, 0, 0, r, (-1), A), r.b = T[x], r.plugin = o, Rt ? (p = L.zOrigin, C = C.split(" "), L.zOrigin = (C.length > 2 && (0 === p || "0px" !== C[2]) ? parseFloat(C[2]) : p) || 0, r.xs0 = r.e = C[0] + " " + (C[1] || "50%") + " 0px", r = new bt(L, "zOrigin", 0, 0, r, (-1), r.n), r.b = p, r.xs0 = r.e = L.zOrigin) : r.xs0 = r.e = C) : lt(C + "", L)), f && (n._transformType = L.svg && Et || !d && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), r
                                },
                                prefix: !0
                            }), Mt("boxShadow", {
                                defaultValue: "0px 0px 0px 0px #999",
                                prefix: !0,
                                color: !0,
                                multi: !0,
                                keyword: "inset"
                            }), Mt("borderRadius", {
                                defaultValue: "0px",
                                parser: function(t, e, i, n, o, a) {
                                    e = this.format(e);
                                    var l, h, c, u, p, d, f, m, v, g, y, _, b, x, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                        M = t.style;
                                    for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = J(S[h])), p = u = tt(t, S[h], s, !1, "0px"), p.indexOf(" ") !== -1 && (u = p.split(" "), p = u[0], u = u[1]), d = c = l[h], f = parseFloat(p), _ = p.substr((f + "").length), b = "=" === d.charAt(1), b ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = r[i] || _), y !== _ && (x = et(t, "borderLeft", f, _), w = et(t, "borderTop", f, _), "%" === y ? (p = x / v * 100 + "%", u = w / g * 100 + "%") : "em" === y ? (T = et(t, "borderLeft", 1, "em"), p = x / T + "em", u = w / T + "em") : (p = x + "px", u = w + "px"), b && (d = parseFloat(p) + m + y, c = parseFloat(u) + m + y)), o = wt(M, S[h], p + " " + u, d + " " + c, !1, "0px", o);
                                    return o
                                },
                                prefix: !0,
                                formatter: gt("0px 0px 0px 0px", !1, !0)
                            }), Mt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                                defaultValue: "0px",
                                parser: function(t, e, i, n, r, o) {
                                    return wt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                                },
                                prefix: !0,
                                formatter: gt("0px 0px", !1, !0)
                            }), Mt("backgroundPosition", {
                                defaultValue: "0 0",
                                parser: function(t, e, i, n, r, o) {
                                    var a, l, h, c, u, p, d = "background-position",
                                        f = s || $(t, null),
                                        m = this.format((f ? v ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                        g = this.format(e);
                                    if (m.indexOf("%") !== -1 != (g.indexOf("%") !== -1) && g.split(",").length < 2 && (p = tt(t, "backgroundImage").replace(C, ""), p && "none" !== p)) {
                                        for (a = m.split(" "), l = g.split(" "), V.setAttribute("src", p), h = 2; --h > -1;) m = a[h], c = m.indexOf("%") !== -1, c !== (l[h].indexOf("%") !== -1) && (u = 0 === h ? t.offsetWidth - V.width : t.offsetHeight - V.height, a[h] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                                        m = a.join(" ")
                                    }
                                    return this.parseComplex(t.style, m, g, r, o)
                                },
                                formatter: lt
                            }), Mt("backgroundSize", {
                                defaultValue: "0 0",
                                formatter: function(t) {
                                    return t += "", lt(t.indexOf(" ") === -1 ? t + " " + t : t)
                                }
                            }), Mt("perspective", {
                                defaultValue: "0px",
                                prefix: !0
                            }), Mt("perspectiveOrigin", {
                                defaultValue: "50% 50%",
                                prefix: !0
                            }), Mt("transformStyle", {
                                prefix: !0
                            }), Mt("backfaceVisibility", {
                                prefix: !0
                            }), Mt("userSelect", {
                                prefix: !0
                            }), Mt("margin", {
                                parser: yt("marginTop,marginRight,marginBottom,marginLeft")
                            }), Mt("padding", {
                                parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                            }), Mt("clip", {
                                defaultValue: "rect(0px,0px,0px,0px)",
                                parser: function(t, e, i, n, r, o) {
                                    var a, l, h;
                                    return v < 9 ? (l = t.currentStyle, h = v < 8 ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(tt(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                                }
                            }), Mt("textShadow", {
                                defaultValue: "0px 0px 0px #999",
                                color: !0,
                                multi: !0
                            }), Mt("autoRound,strictUnits", {
                                parser: function(t, e, i, n, r) {
                                    return r
                                }
                            }), Mt("border", {
                                defaultValue: "0px solid #000",
                                parser: function(t, e, i, n, r, o) {
                                    var a = tt(t, "borderTopWidth", s, !1, "0px"),
                                        l = this.format(e).split(" "),
                                        h = l[0].replace(T, "");
                                    return "px" !== h && (a = parseFloat(a) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
                                },
                                color: !0,
                                formatter: function(t) {
                                    var e = t.split(" ");
                                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                                }
                            }), Mt("borderWidth", {
                                parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                            }), Mt("float,cssFloat,styleFloat", {
                                parser: function(t, e, i, n, r, s) {
                                    var o = t.style,
                                        a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                                    return new bt(o, a, 0, 0, r, (-1), i, (!1), 0, o[a], e)
                                }
                            });
                            var qt = function(t) {
                                var e, i = this.t,
                                    n = i.filter || tt(this.data, "filter") || "",
                                    r = this.s + this.c * t | 0;
                                100 === r && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), n.indexOf("pacity") === -1 ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(S, "opacity=" + r))
                            };
                            Mt("opacity,alpha,autoAlpha", {
                                defaultValue: "1",
                                parser: function(t, e, i, n, r, o) {
                                    var a = parseFloat(tt(t, "opacity", s, !1, "1")),
                                        l = t.style,
                                        h = "autoAlpha" === i;
                                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === tt(t, "visibility", s) && 0 !== e && (a = 0), q ? r = new bt(l, "opacity", a, e - a, r) : (r = new bt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = qt), h && (r = new bt(l, "visibility", 0, 0, r, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                                }
                            });
                            var Yt = function(t, e) {
                                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
                                },
                                Kt = function(t) {
                                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Yt(i, e.p), e = e._next;
                                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                                };
                            Mt("className", {
                                parser: function(t, e, i, r, o, a, l) {
                                    var h, c, u, p, d, f = t.getAttribute("class") || "",
                                        m = t.style.cssText;
                                    if (o = r._classNamePT = new bt(t, i, 0, 0, o, 2), o.setRatio = Kt, o.pr = -11, n = !0, o.b = f, c = nt(t, s), u = t._gsClassPT) {
                                        for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                                        u.setRatio(1)
                                    }
                                    return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = rt(t, c, nt(t), l, p), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = r.parse(t, h.difs, o, a)
                                }
                            });
                            var Zt = function(t) {
                                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                    var e, i, n, r, s, o = this.t.style,
                                        a = h.transform.parse;
                                    if ("all" === this.e) o.cssText = "", r = !0;
                                    else
                                        for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? kt : h[i].p), Yt(o, i);
                                    r && (Yt(o, Lt), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                                }
                            };
                            for (Mt("clearProps", {
                                    parser: function(t, e, i, r, s) {
                                        return s = new bt(t, i, 0, 0, s, 2), s.setRatio = Zt, s.e = e, s.pr = -10, s.data = r._tween, n = !0, s
                                    }
                                }), c = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = c.length; Tt--;) Pt(c[Tt]);
                            c = a.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, i, l) {
                                if (!t.nodeType) return !1;
                                this._target = g = t, this._tween = i, this._vars = e, y = l, u = e.autoRound, n = !1, r = e.suffixMap || a.suffixMap, s = $(t, ""), o = this._overwriteProps;
                                var c, f, v, _, b, x, w, T, S, P = t.style;
                                if (p && "" === P.zIndex && (c = tt(t, "zIndex", s), "auto" !== c && "" !== c || this._addLazySet(P, "zIndex", 0)), "string" == typeof e && (_ = P.cssText, c = nt(t, s), P.cssText = _ + ";" + e, c = rt(t, c, nt(t)).difs, !q && M.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, P.cssText = _), e.className ? this._firstPT = f = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                                    for (S = 3 === this._transformType, Lt ? d && (p = !0, "" === P.zIndex && (w = tt(t, "zIndex", s), "auto" !== w && "" !== w || this._addLazySet(P, "zIndex", 0)), m && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : P.zoom = 1, v = f; v && v._next;) v = v._next;
                                    T = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = Lt ? Xt : Wt, T.data = this._transform || Vt(t, s, !0), T.tween = i, T.pr = -1, o.pop()
                                }
                                if (n) {
                                    for (; f;) {
                                        for (x = f._next, v = _; v && v.pr > f.pr;) v = v._next;
                                        (f._prev = v ? v._prev : b) ? f._prev._next = f: _ = f, (f._next = v) ? v._prev = f : b = f, f = x
                                    }
                                    this._firstPT = _
                                }
                                return !0
                            }, c.parse = function(t, e, i, n) {
                                var o, a, l, c, p, d, f, m, v, _, b = t.style;
                                for (o in e) {
                                    if (d = e[o], "function" == typeof d && (d = d(y, g)), a = h[o]) i = a.parse(t, d, o, this, i, n, e);
                                    else {
                                        if ("--" === o.substr(0, 2)) {
                                            this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", $(t).getPropertyValue(o) + "", d + "", o, !1, o);
                                            continue
                                        }
                                        p = tt(t, o, s) + "", v = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || o.indexOf("Color") !== -1 || v && E.test(d) ? (v || (d = ft(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = wt(b, o, p, d, !0, "transparent", i, 0, n)) : v && z.test(d) ? i = wt(b, o, p, d, !0, null, i, 0, n) : (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", "" !== p && "auto" !== p || ("width" === o || "height" === o ? (l = at(t, o, s), f = "px") : "left" === o || "top" === o ? (l = it(t, o, s), f = "px") : (l = "opacity" !== o ? 0 : 1, f = "")), _ = v && "=" === d.charAt(1), _ ? (c = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), c *= parseFloat(d), m = d.replace(T, "")) : (c = parseFloat(d), m = v ? d.replace(T, "") : ""), "" === m && (m = o in r ? r[o] : f), d = c || 0 === c ? (_ ? c + l : c) + m : e[o], f !== m && ("" === m && "lineHeight" !== o || (c || 0 === c) && l && (l = et(t, o, l, f), "%" === m ? (l /= et(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= et(t, o, 1, m) : "px" !== m && (c = et(t, o, c, m), m = "px"), _ && (c || 0 === c) && (d = c + l + m))), _ && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== b[o] && (d || d + "" != "NaN" && null != d) ? (i = new bt(b, o, c || l || 0, 0, i, (-1), o, (!1), 0, p, d), i.xs0 = "none" !== d || "display" !== o && o.indexOf("Style") === -1 ? d : p) : K("invalid " + o + " tween value: " + e[o]) : (i = new bt(b, o, l, c - l, i, 0, o, u !== !1 && ("px" === m || "zIndex" === o), 0, p, d), i.xs0 = m))
                                    }
                                    n && i && !i.plugin && (i.plugin = n)
                                }
                                return i
                            }, c.setRatio = function(t) {
                                var e, i, n, r = this._firstPT,
                                    s = 1e-6;
                                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                        for (; r;) {
                                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < s && e > -s && (e = 0), r.type)
                                                if (1 === r.type)
                                                    if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            } else r.type === -1 ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                            else r.t[r.p] = e + r.xs0;
                                            r = r._next
                                        } else
                                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                                    else
                                        for (; r;) {
                                            if (2 !== r.type)
                                                if (r.r && r.type !== -1)
                                                    if (e = Math.round(r.s + r.c), r.type) {
                                                        if (1 === r.type) {
                                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                            r.t[r.p] = i
                                                        }
                                                    } else r.t[r.p] = e + r.xs0;
                                            else r.t[r.p] = r.e;
                                            else r.setRatio(t);
                                            r = r._next
                                        }
                            }, c._enableTransforms = function(t) {
                                this._transform = this._transform || Vt(this._target, s, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
                            };
                            var Qt = function(t) {
                                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                            };
                            c._addLazySet = function(t, e, i) {
                                var n = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
                                n.e = i, n.setRatio = Qt, n.data = this
                            }, c._linkCSSP = function(t, e, i, n) {
                                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                            }, c._mod = function(t) {
                                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                            }, c._kill = function(e) {
                                var i, n, r, s = e;
                                if (e.autoAlpha || e.alpha) {
                                    s = {};
                                    for (n in e) s[n] = e[n];
                                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                                }
                                for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                                return t.prototype._kill.call(this, s)
                            };
                            var Jt = function(t, e, i) {
                                var n, r, s, o;
                                if (t.slice)
                                    for (r = t.length; --r > -1;) Jt(t[r], e, i);
                                else
                                    for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(nt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Jt(s, e, i)
                            };
                            return a.cascadeTo = function(t, i, n) {
                                var r, s, o, a, l = e.to(t, i, n),
                                    h = [l],
                                    c = [],
                                    u = [],
                                    p = [],
                                    d = e._internals.reservedProps;
                                for (t = l._targets || l.target, Jt(t, c, p), l.render(i, !0, !0), Jt(t, u), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                                    if (s = rt(p[r], c[r], u[r]), s.firstMPT) {
                                        s = s.difs;
                                        for (o in n) d[o] && (s[o] = n[o]);
                                        a = {};
                                        for (o in s) a[o] = c[r][o];
                                        h.push(e.fromTo(p[r], i, a, s))
                                    } return h
                            }, t.activate([a]), a
                        }, !0),
                        function() {
                            var t = i._gsDefine.plugin({
                                    propName: "roundProps",
                                    version: "1.6.0",
                                    priority: -1,
                                    API: 2,
                                    init: function(t, e, i) {
                                        return this._tween = i, !0
                                    }
                                }),
                                e = function(t) {
                                    for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                                },
                                n = t.prototype;
                            n._onInitAllProps = function() {
                                for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
                                for (o = s.length; --o > -1;)
                                    for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                                return !1
                            }, n._add = function(t, e, i, n) {
                                this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                            }
                        }(),
                        function() {
                            i._gsDefine.plugin({
                                propName: "attr",
                                API: 2,
                                version: "0.6.1",
                                init: function(t, e, i, n) {
                                    var r, s;
                                    if ("function" != typeof t.setAttribute) return !1;
                                    for (r in e) s = e[r], "function" == typeof s && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                                    return !0
                                }
                            })
                        }(), i._gsDefine.plugin({
                            propName: "directionalRotation",
                            version: "0.3.1",
                            API: 2,
                            init: function(t, e, i, n) {
                                "object" != typeof e && (e = {
                                    rotation: e
                                }), this.finals = {};
                                var r, s, o, a, l, h, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                                    u = 1e-6;
                                for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), h = (a + "").split("_"), s = h[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, h.length && (s = h.join("_"), s.indexOf("short") !== -1 && (l %= c, l !== l % (c / 2) && (l = l < 0 ? l + c : l - c)), s.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : s.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > u || l < -u) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                                return !0
                            },
                            set: function(t) {
                                var e;
                                if (1 !== t) this._super.setRatio.call(this, t);
                                else
                                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                            }
                        })._autoCSS = !0, i._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                            var e, n, r, s, o = i.GreenSockGlobals || i,
                                a = o.com.greensock,
                                l = 2 * Math.PI,
                                h = Math.PI / 2,
                                c = a._class,
                                u = function(e, i) {
                                    var n = c("easing." + e, function() {}, !0),
                                        r = n.prototype = new t;
                                    return r.constructor = n, r.getRatio = i, n
                                },
                                p = t.register || function() {},
                                d = function(t, e, i, n, r) {
                                    var s = c("easing." + t, {
                                        easeOut: new e,
                                        easeIn: new i,
                                        easeInOut: new n
                                    }, !0);
                                    return p(s, t), s
                                },
                                f = function(t, e, i) {
                                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                                },
                                m = function(e, i) {
                                    var n = c("easing." + e, function(t) {
                                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                        }, !0),
                                        r = n.prototype = new t;
                                    return r.constructor = n, r.getRatio = i, r.config = function(t) {
                                        return new n(t)
                                    }, n
                                },
                                v = d("Back", m("BackOut", function(t) {
                                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                                }), m("BackIn", function(t) {
                                    return t * t * ((this._p1 + 1) * t - this._p1)
                                }), m("BackInOut", function(t) {
                                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                                })),
                                g = c("easing.SlowMo", function(t, e, i) {
                                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                                }, !0),
                                y = g.prototype = new t;
                            return y.constructor = g, y.getRatio = function(t) {
                                var e = t + (.5 - t) * this._p;
                                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                            }, g.ease = new g(.7, .7), y.config = g.config = function(t, e, i) {
                                return new g(t, e, i)
                            }, e = c("easing.SteppedEase", function(t, e) {
                                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                            }, !0), y = e.prototype = new t, y.constructor = e, y.getRatio = function(t) {
                                return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                            }, y.config = e.config = function(t, i) {
                                return new e(t, i)
                            }, n = c("easing.ExpoScaleEase", function(t, e, i) {
                                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
                            }, !0), y = n.prototype = new t, y.constructor = n, y.getRatio = function(t) {
                                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                            }, y.config = n.config = function(t, e, i) {
                                return new n(t, e, i)
                            }, r = c("easing.RoughEase", function(e) {
                                e = e || {};
                                for (var i, n, r, s, o, a, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), p = u, d = e.randomize !== !1, m = e.clamp === !0, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = d ? Math.random() : 1 / u * p, n = v ? v.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : i < .5 ? (s = 2 * i, r = s * s * .5 * g) : (s = 2 * (1 - i), r = s * s * .5 * g), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[c++] = {
                                    x: i,
                                    y: n
                                };
                                for (h.sort(function(t, e) {
                                        return t.x - e.x
                                    }), a = new f(1, 1, null), p = u; --p > -1;) o = h[p], a = new f(o.x, o.y, a);
                                this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                            }, !0), y = r.prototype = new t, y.constructor = r, y.getRatio = function(t) {
                                var e = this._prev;
                                if (t > e.t) {
                                    for (; e.next && t >= e.t;) e = e.next;
                                    e = e.prev
                                } else
                                    for (; e.prev && t <= e.t;) e = e.prev;
                                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                            }, y.config = function(t) {
                                return new r(t)
                            }, r.ease = new r, d("Bounce", u("BounceOut", function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            }), u("BounceIn", function(t) {
                                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            }), u("BounceInOut", function(t) {
                                var e = t < .5;
                                return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                            })), d("Circ", u("CircOut", function(t) {
                                return Math.sqrt(1 - (t -= 1) * t)
                            }), u("CircIn", function(t) {
                                return -(Math.sqrt(1 - t * t) - 1)
                            }), u("CircInOut", function(t) {
                                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            })), s = function(e, i, n) {
                                var r = c("easing." + e, function(t, e) {
                                        this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0), this._p2 = l / this._p2
                                    }, !0),
                                    s = r.prototype = new t;
                                return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                                    return new r(t, e)
                                }, r
                            }, d("Elastic", s("ElasticOut", function(t) {
                                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                            }, .3), s("ElasticIn", function(t) {
                                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                            }, .3), s("ElasticInOut", function(t) {
                                return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                            }, .45)), d("Expo", u("ExpoOut", function(t) {
                                return 1 - Math.pow(2, -10 * t)
                            }), u("ExpoIn", function(t) {
                                return Math.pow(2, 10 * (t - 1)) - .001
                            }), u("ExpoInOut", function(t) {
                                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                            })), d("Sine", u("SineOut", function(t) {
                                return Math.sin(t * h)
                            }), u("SineIn", function(t) {
                                return -Math.cos(t * h) + 1
                            }), u("SineInOut", function(t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            })), c("easing.EaseLookup", {
                                find: function(e) {
                                    return t.map[e]
                                }
                            }, !0), p(o.SlowMo, "SlowMo", "ease,"), p(r, "RoughEase", "ease,"), p(e, "SteppedEase", "ease,"), v
                        }, !0)
                }), i._gsDefine && i._gsQueue.pop()(),
                function(t, i) {
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
                }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenMax")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }