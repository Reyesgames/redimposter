'use strict';

function y(g, a, b, d) {
    g.v.jc(g.Wa, a, b, d, void 0)
}

function F(g, a, b, d) {
    g.v.qa ? y(g, a, b, d) : g.v.af()._OnMessageFromDOM({
        type: "event",
        component: g.Wa,
        handler: a,
        dispatchOpts: d || null,
        data: b,
        responseId: null
    })
}

function H(g, a, b) {
    g.v.B(g.Wa, a, b)
}

function J(g, a) {
    for (const [b, d] of a) H(g, b, d)
}

function K(g) {
    g.Nb || (g.v.Me(g.Wd), g.Nb = !0)
}
window.rb = class {
    constructor(g, a) {
        this.v = g;
        this.Wa = a;
        this.Nb = !1;
        this.Wd = () => this.Ca()
    }
    Zc() {}
    Ca() {}
};

function L(g) {
    -1 !== g.Na && (self.clearTimeout(g.Na), g.Na = -1)
}
window.De = class {
    constructor(g, a) {
        this.Gc = g;
        this.qg = a;
        this.Na = -1;
        this.Ob = -Infinity;
        this.Xd = () => {
            this.Na = -1;
            this.Ob = Date.now();
            this.ab = !0;
            this.Gc();
            this.ab = !1
        };
        this.Fd = this.ab = !1
    }
    c() {
        L(this);
        this.Xd = this.Gc = null
    }
};
"use strict";

function M(g, a) {
    H(g, "get-element", b => {
        const d = g.ca.get(b.elementId);
        return a(d, b)
    })
}
window.Jg = class extends self.rb {
    constructor(g, a) {
        super(g, a);
        this.ca = new Map;
        this.Fc = !0;
        J(this, [
            ["create", () => {
                throw Error("required override");
            }],
            ["destroy", b => {
                {
                    b = b.elementId;
                    const d = this.ca.get(b);
                    this.Fc && d.parentElement.removeChild(d);
                    this.ca.delete(b)
                }
            }],
            ["set-visible", b => {
                this.Fc && (this.ca.get(b.elementId).style.display = b.isVisible ? "" : "none")
            }],
            ["update-position", b => {
                if (this.Fc) {
                    var d = this.ca.get(b.elementId);
                    d.style.left = b.left + "px";
                    d.style.top = b.top + "px";
                    d.style.width = b.width + "px";
                    d.style.height =
                        b.height + "px";
                    b = b.fontSize;
                    null !== b && (d.style.fontSize = b + "em")
                }
            }],
            ["update-state", b => {
                this.ca.get(b.elementId);
                throw Error("required override");
            }],
            ["focus", b => {
                {
                    const d = this.ca.get(b.elementId);
                    b.focus ? d.focus() : d.blur()
                }
            }],
            ["set-css-style", b => {
                this.ca.get(b.elementId).style[b.prop] = b.val
            }],
            ["set-attribute", b => {
                this.ca.get(b.elementId).setAttribute(b.name, b.val)
            }],
            ["remove-attribute", b => {
                this.ca.get(b.elementId).removeAttribute(b.name)
            }]
        ]);
        M(this, b => b)
    }
};
"use strict"; {
    const g = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);
    let a = 0;

    function b(m) {
        const c = document.createElement("script");
        c.async = !1;
        c.type = "module";
        return m.Ag ? new Promise(k => {
            const l = "c3_resolve_" + a;
            ++a;
            self[l] = k;
            c.textContent = m.Dg + `\n\nself["${l}"]();`;
            document.head.appendChild(c)
        }) : new Promise((k, l) => {
            c.onload = k;
            c.onerror = l;
            c.src = m;
            document.head.appendChild(c)
        })
    }
    let d = !1,
        f = !1;

    function n() {
        if (!d) {
            try {
                new Worker("blob://", {
                    get type() {
                        f = !0
                    }
                })
            } catch (m) {}
            d = !0
        }
        return f
    }
    let p =
        new Audio;
    const w = {
        "audio/webm; codecs=opus": !!p.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!p.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!p.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!p.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!p.canPlayType("audio/mp4"),
        "audio/mpeg": !!p.canPlayType("audio/mpeg")
    };
    p = null;
    async function B(m) {
        m = await C(m);
        return (new TextDecoder("utf-8")).decode(m)
    }

    function C(m) {
        return new Promise((c,
            k) => {
            const l = new FileReader;
            l.onload = q => c(q.target.result);
            l.onerror = q => k(q);
            l.readAsArrayBuffer(m)
        })
    }
    const v = [];
    let x = 0;
    window.RealFile = window.File;
    const D = [],
        z = new Map,
        E = new Map;
    let G = 0;
    const I = [];
    self.runOnStartup = function(m) {
        if ("function" !== typeof m) throw Error("runOnStartup called without a function");
        I.push(m)
    };
    const e = new Set(["cordova", "playable-ad", "instant-games"]);
    let h = !1;
    window.wb = class m {
        constructor(c) {
            this.qa = c.Fg;
            this.oa = null;
            this.F = "";
            this.Wb = c.Cg;
            this.pb = {};
            this.Ga = this.ob = null;
            this.Lb = [];
            this.cb = this.K = this.La = null;
            this.Ka = -1;
            this.vg = () => this.Af();
            this.Ja = [];
            this.C = c.Yd;
            !this.qa || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && n() || (this.qa = !1);
            e.has(this.C) && this.qa && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is currently disabled in WebViews. Reverting to DOM mode."), this.qa = !1);
            this.Qb = this.ha = null;
            "html5" !== this.C && "playable-ad" !== this.C || "file" !== location.protocol.substr(0, 4) || alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
            this.B("runtime", "cordova-fetch-local-file", k => this.jf(k));
            this.B("runtime", "create-job-worker", () => this.kf());
            "cordova" === this.C ? document.addEventListener("deviceready", () => this.rd(c)) : this.rd(c)
        }
        c() {
            this.pc();
            this.oa && (this.oa = this.oa.onmessage = null);
            this.ob && (this.ob.terminate(), this.ob = null);
            this.Ga && (this.Ga.c(), this.Ga = null);
            this.K && (this.K.parentElement.removeChild(this.K), this.K = null)
        }
        gd() {
            return g && "cordova" === this.C
        }
        ic() {
            return g && e.has(this.C) || navigator.standalone
        }
        async rd(c) {
            "macos-wkwebview" ===
            this.C && this.Tf();
            if ("playable-ad" === this.C) {
                this.ha = self.c3_base64files;
                this.Qb = {};
                await this.Re();
                for (let l = 0, q = c.Oa.length; l < q; ++l) {
                    var k = c.Oa[l].toLowerCase();
                    this.Qb.hasOwnProperty(k) ? c.Oa[l] = {
                        Ag: !0,
                        Dg: this.Qb[k]
                    } : this.ha.hasOwnProperty(k) && (c.Oa[l] = URL.createObjectURL(this.ha[k]))
                }
            }
            c.wg ? this.F = c.wg : (k = location.origin, this.F = ("null" === k ? "file:///" : k) + location.pathname, k = this.F.lastIndexOf("/"), -1 !== k && (this.F = this.F.substr(0, k + 1)));
            c.Hg && (this.pb = c.Hg);
            k = new MessageChannel;
            this.oa = k.port1;
            this.oa.onmessage =
                l => this._OnMessageFromRuntime(l.data);
            window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(l => this.wf(l));
            this.cb = new self.ze(this);
            await N(this.cb);
            "object" === typeof window.StatusBar && window.StatusBar.hide();
            "object" === typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode();
            this.qa ? await this.cf(c, k.port2) : await this.bf(c, k.port2)
        }
        sc(c) {
            c = this.pb.hasOwnProperty(c) ? this.pb[c] : c.endsWith("/workermain.js") && this.pb.hasOwnProperty("workermain.js") ? this.pb["workermain.js"] :
                "playable-ad" === this.C && this.ha.hasOwnProperty(c.toLowerCase()) ? this.ha[c.toLowerCase()] : c;
            c instanceof Blob && (c = URL.createObjectURL(c));
            return c
        }
        async bc(c, k, l) {
            if (c.startsWith("blob:")) return new Worker(c, l);
            if (this.gd() && "file:" === location.protocol) return c = await this.qb(this.Wb + c), new Worker(URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            })), l);
            c = new URL(c, k);
            if (location.origin !== c.origin) {
                c = await fetch(c);
                if (!c.ok) throw Error("failed to fetch worker script");
                c = await c.blob();
                return new Worker(URL.createObjectURL(c), l)
            }
            return new Worker(c, l)
        }
        va() {
            return Math.max(window.innerWidth, 1)
        }
        ua() {
            return Math.max(window.innerHeight, 1)
        }
        qd(c) {
            var k = this.cb;
            return {
                baseUrl: this.F,
                windowInnerWidth: this.va(),
                windowInnerHeight: this.ua(),
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: m.Ra(),
                projectData: c.Ng,
                previewImageBlobs: window.cr_previewImageBlobs || this.ha,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                previewProjectFileSWUrls: window.cr_previewProjectFiles,
                swClientId: window.Lg ||
                    "",
                exportType: c.Yd,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.Mg,
                jobScheduler: {
                    inputPort: k.Mc,
                    outputPort: k.Tc,
                    maxNumWorkers: k.sg
                },
                supportedAudioFormats: w,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.Wb + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.Wb + "opus.wasm.wasm",
                isiOSCordova: this.gd(),
                isiOSWebView: this.ic(),
                isFBInstantAvailable: "undefined" !== typeof self.FBInstant
            }
        }
        async cf(c, k) {
            var l = this.sc(c.Gg);
            this.ob = await this.bc(l, this.F, {
                type: "module",
                name: "Runtime"
            });
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            l = this.K.transferControlToOffscreen();
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.ob.postMessage(Object.assign(this.qd(c), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: k,
                canvas: l,
                workerDependencyScripts: c.Yc || [],
                engineScripts: c.Oa,
                projectScripts: c.$d,
                mainProjectScript: c.Zd,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [k, l, ...O(this.cb)]);
            this.Lb = D.map(q => new q(this));
            this.pd();
            self.c3_callFunction = (q, u) =>
                this.La.df(q, u);
            "preview" === this.C && (self.goToLastErrorScript = () => this.jc("runtime", "go-to-last-error-script"))
        }
        async bf(c, k) {
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.Lb = D.map(r => new r(this));
            this.pd();
            var l = c.Oa.map(r => "string" === typeof r ? (new URL(r, this.F)).toString() : r);
            Array.isArray(c.Yc) && l.unshift(...c.Yc);
            l = await Promise.all(l.map(r => this.wc(r)));
            await Promise.all(l.map(r => b(r)));
            l = self.C3_ProjectScriptsStatus;
            const q = c.Zd,
                u = c.$d;
            for (let [r, t] of u)
                if (t || (t = r), r === q) try {
                    t = await this.wc(t), await b(t), "preview" !== this.C || l[r] || this.zd(r, "main script did not run to completion")
                } catch (A) {
                    this.zd(r, A)
                } else if ("scriptsInEvents.js" === r || r.endsWith("/scriptsInEvents.js")) t = await this.wc(t), await b(t);
            "preview" === this.C && "object" !== typeof self.Ig.Kg ? (this.Fb(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."), alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) :
                (c = Object.assign(this.qd(c), {
                    isInWorker: !1,
                    messagePort: k,
                    canvas: this.K,
                    runOnStartupFunctions: I
                }), this.td(), this.Ga = self.C3_CreateRuntime(c), await self.C3_InitRuntime(this.Ga, c))
        }
        zd(c, k) {
            this.Fb();
            console.error(`[Preview] Failed to load project main script (${c}): `, k);
            alert(`Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
        }
        td() {
            this.Fb()
        }
        Fb() {
            const c = window.xg;
            c && (c.parentElement.removeChild(c), window.xg =
                null)
        }
        async kf() {
            const c = await P(this.cb);
            return {
                outputPort: c,
                transferables: [c]
            }
        }
        af() {
            if (this.qa) throw Error("not available in worker mode");
            return this.Ga
        }
        jc(c, k, l, q, u) {
            this.oa.postMessage({
                type: "event",
                component: c,
                handler: k,
                dispatchOpts: q || null,
                data: l,
                responseId: null
            }, u)
        }
        hd(c, k, l, q, u) {
            const r = G++,
                t = new Promise((A, S) => {
                    E.set(r, {
                        resolve: A,
                        reject: S
                    })
                });
            this.oa.postMessage({
                type: "event",
                component: c,
                handler: k,
                dispatchOpts: q || null,
                data: l,
                responseId: r
            }, u);
            return t
        }["_OnMessageFromRuntime"](c) {
            const k =
                c.type;
            if ("event" === k) return this.qf(c);
            if ("result" === k) this.Df(c);
            else if ("runtime-ready" === k) this.Ef();
            else if ("alert-error" === k) this.Fb(), alert(c.message);
            else if ("creating-runtime" === k) this.td();
            else throw Error(`unknown message '${k}'`);
        }
        qf(c) {
            const k = c.component,
                l = c.handler,
                q = c.data,
                u = c.responseId;
            if (c = z.get(k))
                if (c = c.get(l)) {
                    var r = null;
                    try {
                        r = c(q)
                    } catch (t) {
                        console.error(`Exception in '${k}' handler '${l}':`, t);
                        null !== u && this.Db(u, !1, "" + t);
                        return
                    }
                    if (null === u) return r;
                    r && r.then ? r.then(t => this.Db(u, !0, t)).catch(t => {
                        console.error(`Rejection from '${k}' handler '${l}':`, t);
                        this.Db(u, !1, "" + t)
                    }) : this.Db(u, !0, r)
                } else console.warn(`[DOM] No handler '${l}' for component '${k}'`);
            else console.warn(`[DOM] No event handlers for component '${k}'`)
        }
        Db(c, k, l) {
            let q;
            l && l.transferables && (q = l.transferables);
            this.oa.postMessage({
                type: "result",
                responseId: c,
                isOk: k,
                result: l
            }, q)
        }
        Df(c) {
            const k = c.responseId,
                l = c.isOk;
            c = c.result;
            const q = E.get(k);
            l ? q.resolve(c) : q.reject(c);
            E.delete(k)
        }
        B(c, k, l) {
            let q = z.get(c);
            q || (q = new Map,
                z.set(c, q));
            if (q.has(k)) throw Error(`[DOM] Component '${c}' already has handler '${k}'`);
            q.set(k, l)
        }
        static $b(c) {
            if (D.includes(c)) throw Error("DOM handler already added");
            D.push(c)
        }
        pd() {
            for (const c of this.Lb)
                if ("runtime" === c.Wa) {
                    this.La = c;
                    return
                }
            throw Error("cannot find runtime DOM handler");
        }
        wf(c) {
            this.jc("debugger", "message", c)
        }
        Ef() {
            for (const c of this.Lb) c.Zc()
        }
        static Ra() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || h)
        }
        static Ad(c) {
            h = !!c
        }
        Me(c) {
            this.Ja.push(c);
            this.Dc()
        }
        Qf(c) {
            c = this.Ja.indexOf(c);
            if (-1 === c) throw Error("invalid callback");
            this.Ja.splice(c, 1);
            this.Ja.length || this.pc()
        }
        Dc() {
            -1 === this.Ka && this.Ja.length && (this.Ka = requestAnimationFrame(this.vg))
        }
        pc() {
            -1 !== this.Ka && (cancelAnimationFrame(this.Ka), this.Ka = -1)
        }
        Af() {
            this.Ka = -1;
            for (const c of this.Ja) c();
            this.Dc()
        }
        ta(c) {
            this.La.ta(c)
        }
        Ba(c) {
            this.La.Ba(c)
        }
        Cc() {
            this.La.Cc()
        }
        yb(c) {
            this.La.yb(c)
        }
        ye() {
            return !!w["audio/webm; codecs=opus"]
        }
        async og(c) {
            c = await this.hd("runtime", "opus-decode", {
                    arrayBuffer: c
                },
                null, [c]);
            return new Float32Array(c)
        }
        xe(c) {
            return /^(?:[a-z\-]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
        }
        fd(c) {
            return !this.xe(c)
        }
        async wc(c) {
            return "cordova" === this.C && (c.startsWith("file:") || "file:" === location.protocol && this.fd(c)) ? (c.startsWith(this.F) && (c = c.substr(this.F.length)), c = await this.qb(c), URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            }))) : c
        }
        async jf(c) {
            const k = c.filename;
            switch (c.as) {
                case "text":
                    return await this.qe(k);
                case "buffer":
                    return await this.qb(k);
                default:
                    throw Error("unsupported type");
            }
        }
        bd(c) {
            const k = window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
            return new Promise((l, q) => {
                window.resolveLocalFileSystemURL(k, u => {
                    u.file(l, q)
                }, q)
            })
        }
        async qe(c) {
            c = await this.bd(c);
            return await B(c)
        }
        qc() {
            if (v.length && !(8 <= x)) {
                x++;
                var c = v.shift();
                this.Se(c.filename, c.Eg, c.zg)
            }
        }
        qb(c) {
            return new Promise((k, l) => {
                v.push({
                    filename: c,
                    Eg: q => {
                        x--;
                        this.qc();
                        k(q)
                    },
                    zg: q => {
                        x--;
                        this.qc();
                        l(q)
                    }
                });
                this.qc()
            })
        }
        async Se(c, k, l) {
            try {
                const q = await this.bd(c),
                    u = await C(q);
                k(u)
            } catch (q) {
                l(q)
            }
        }
        Tf() {
            var c = {
                type: "ready"
            };
            if ("windows-webview2" === this.C) window.chrome.webview.postMessage(JSON.stringify(c));
            else if ("macos-wkwebview" === this.C) window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(c));
            else throw Error("cannot send wrapper message");
        }
        async Re() {
            const c = [];
            for (const [k, l] of Object.entries(this.ha)) c.push(this.Qe(k, l));
            await Promise.all(c)
        }
        async Qe(c, k) {
            if ("object" === typeof k) this.ha[c] = new Blob([k.str], {
                type: k.type
            }), this.Qb[c] = k.str;
            else {
                let l = await this.Ze(k);
                l || (l = this.Ue(k));
                this.ha[c] = l
            }
        }
        async Ze(c) {
            try {
                return await (await fetch(c)).blob()
            } catch (k) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", k), null
            }
        }
        Ue(c) {
            c = this.Kf(c);
            return this.Pe(c.data, c.Bg)
        }
        Kf(c) {
            var k = c.indexOf(",");
            if (0 > k) throw new URIError("expected comma in data: uri");
            var l = c.substring(k + 1);
            k = c.substring(5, k).split(";");
            c = k[0] ||
                "";
            const q = k[2];
            l = "base64" === k[1] || "base64" === q ? atob(l) : decodeURIComponent(l);
            return {
                Bg: c,
                data: l
            }
        }
        Pe(c, k) {
            var l = c.length;
            let q = l >> 2,
                u = new Uint8Array(l),
                r = new Uint32Array(u.buffer, 0, q),
                t, A;
            for (A = t = 0; t < q; ++t) r[t] = c.charCodeAt(A++) | c.charCodeAt(A++) << 8 | c.charCodeAt(A++) << 16 | c.charCodeAt(A++) << 24;
            for (l &= 3; l--;) u[A] = c.charCodeAt(A), ++A;
            return new Blob([u], {
                type: k
            })
        }
    }
}
"use strict"; {
    const g = self.wb;

    function a(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }
    const b = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        d = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        f = {
            dispatchUserScriptEvent: !0
        },
        n = {
            dispatchRuntimeEvent: !0
        };

    function p(e) {
        return new Promise((h, m) => {
            const c = document.createElement("link");
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.rel =
                "stylesheet";
            c.href = e;
            document.head.appendChild(c)
        })
    }

    function w(e) {
        return new Promise((h, m) => {
            const c = new Image;
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.src = e
        })
    }
    async function B(e) {
        e = URL.createObjectURL(e);
        try {
            return await w(e)
        } finally {
            URL.revokeObjectURL(e)
        }
    }

    function C(e) {
        return new Promise((h, m) => {
            let c = new FileReader;
            c.onload = k => h(k.target.result);
            c.onerror = k => m(k);
            c.readAsText(e)
        })
    }
    async function v(e, h, m) {
        if (!/firefox/i.test(navigator.userAgent)) return await B(e);
        var c = await C(e);
        c = (new DOMParser).parseFromString(c,
            "image/svg+xml");
        const k = c.documentElement;
        if (k.hasAttribute("width") && k.hasAttribute("height")) {
            const l = k.getAttribute("width"),
                q = k.getAttribute("height");
            if (!l.includes("%") && !q.includes("%")) return await B(e)
        }
        k.setAttribute("width", h + "px");
        k.setAttribute("height", m + "px");
        c = (new XMLSerializer).serializeToString(c);
        e = new Blob([c], {
            type: "image/svg+xml"
        });
        return await B(e)
    }

    function x(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }
    const D = new Set(["canvas",
        "body", "html"
    ]);

    function z(e) {
        D.has(e.target.tagName.toLowerCase()) && e.preventDefault()
    }

    function E(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }
    self.C3_GetSvgImageSize = async function(e) {
        e = await B(e);
        if (0 < e.width && 0 < e.height) return [e.width, e.height]; {
            e.style.position = "absolute";
            e.style.left = "0px";
            e.style.top = "0px";
            e.style.visibility = "hidden";
            document.body.appendChild(e);
            const h = e.getBoundingClientRect();
            document.body.removeChild(e);
            return [h.width, h.height]
        }
    };
    self.C3_RasterSvgImageBlob = async function(e,
        h, m, c, k) {
        e = await v(e, h, m);
        const l = document.createElement("canvas");
        l.width = c;
        l.height = k;
        l.getContext("2d").drawImage(e, 0, 0, h, m);
        return l
    };
    let G = !1;
    document.addEventListener("pause", () => G = !0);
    document.addEventListener("resume", () => G = !1);

    function I() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    g.$b(class extends self.rb {
        constructor(e) {
            super(e, "runtime");
            this.Kd = !0;
            this.Ma = -1;
            this.Vc = "any";
            this.Bd = this.Cd = !1;
            this.Pc = this.lb = this.xa = null;
            e.B("canvas", "update-size", c =>
                this.Hf(c));
            e.B("runtime", "invoke-download", c => this.uf(c));
            e.B("runtime", "raster-svg-image", c => this.Bf(c));
            e.B("runtime", "get-svg-image-size", c => this.sf(c));
            e.B("runtime", "set-target-orientation", c => this.Ff(c));
            e.B("runtime", "register-sw", () => this.Cf());
            e.B("runtime", "post-to-debugger", c => this.vd(c));
            e.B("runtime", "go-to-script", c => this.vd(c));
            e.B("runtime", "before-start-ticking", () => this.hf());
            e.B("runtime", "debug-highlight", c => this.lf(c));
            e.B("runtime", "enable-device-orientation", () => this.Oe());
            e.B("runtime", "enable-device-motion", () => this.Ne());
            e.B("runtime", "add-stylesheet", c => this.ff(c));
            e.B("runtime", "alert", c => this.gf(c));
            e.B("runtime", "hide-cordova-splash", () => this.tf());
            const h = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", c => {
                const k = c.target;
                h.has(k.tagName.toLowerCase()) || x(k) || c.preventDefault()
            });
            const m = e.K;
            window.addEventListener("selectstart", z);
            window.addEventListener("gesturehold", z);
            m.addEventListener("selectstart", z);
            m.addEventListener("gesturehold",
                z);
            window.addEventListener("touchstart", z, {
                passive: !1
            });
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", z, {
                passive: !1
            }), m.addEventListener("pointerdown", z)) : m.addEventListener("touchstart", z);
            this.ib = 0;
            window.addEventListener("mousedown", c => {
                1 === c.button && c.preventDefault()
            });
            window.addEventListener("mousewheel", E, {
                passive: !1
            });
            window.addEventListener("wheel", E, {
                passive: !1
            });
            window.addEventListener("resize", () => this.If());
            window.addEventListener("fullscreenchange", () => this.Ta());
            window.addEventListener("webkitfullscreenchange", () => this.Ta());
            window.addEventListener("mozfullscreenchange", () => this.Ta());
            window.addEventListener("fullscreenerror", c => this.yc(c));
            window.addEventListener("webkitfullscreenerror", c => this.yc(c));
            window.addEventListener("mozfullscreenerror", c => this.yc(c));
            e.ic() && window.addEventListener("focusout", () => {
                {
                    const l = document.activeElement;
                    if (l) {
                        var c = l.tagName.toLowerCase();
                        var k = new Set("email number password search tel text url".split(" "));
                        c = "textarea" ===
                            c ? !0 : "input" === c ? k.has(l.type.toLowerCase() || "text") : x(l)
                    } else c = !1
                }
                c || (document.scrollingElement.scrollTop = 0)
            });
            self.C3WrapperOnMessage = c => this.Jf(c);
            this.Ha = new Set;
            this.Rb = new WeakSet;
            this.na = !1
        }
        hf() {
            "cordova" === this.v.C ? (document.addEventListener("pause", () => this.Bc(!0)), document.addEventListener("resume", () => this.Bc(!1))) : document.addEventListener("visibilitychange", () => this.Bc(document.hidden));
            return {
                isSuspended: !(!document.hidden && !G)
            }
        }
        Zc() {
            window.addEventListener("focus", () => this.Eb("window-focus"));
            window.addEventListener("blur", () => {
                this.Eb("window-blur", {
                    parentHasFocus: I()
                });
                this.ib = 0
            });
            window.addEventListener("keydown", h => this.ud("keydown", h));
            window.addEventListener("keyup", h => this.ud("keyup", h));
            window.addEventListener("dblclick", h => this.zc("dblclick", h, d));
            window.addEventListener("wheel", h => this.yf(h));
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", h => {
                    this.tc(h);
                    this.Ua("pointerdown", h)
                }), this.v.qa && "undefined" !== typeof window.onpointerrawupdate && self === self.top ?
                (this.lb = new self.De(() => this.Xe(), 5), this.lb.Fd = !0, window.addEventListener("pointerrawupdate", h => this.zf(h))) : window.addEventListener("pointermove", h => this.Ua("pointermove", h)), window.addEventListener("pointerup", h => this.Ua("pointerup", h)), window.addEventListener("pointercancel", h => this.Ua("pointercancel", h))) : (window.addEventListener("mousedown", h => {
                this.tc(h);
                this.Ac("pointerdown", h)
            }), window.addEventListener("mousemove", h => this.Ac("pointermove", h)), window.addEventListener("mouseup", h => this.Ac("pointerup",
                h)), window.addEventListener("touchstart", h => {
                this.tc(h);
                this.Cb("pointerdown", h)
            }), window.addEventListener("touchmove", h => this.Cb("pointermove", h)), window.addEventListener("touchend", h => this.Cb("pointerup", h)), window.addEventListener("touchcancel", h => this.Cb("pointercancel", h)));
            const e = () => this.Cc();
            window.addEventListener("pointerup", e, !0);
            window.addEventListener("touchend", e, !0);
            window.addEventListener("click", e, !0);
            window.addEventListener("keydown", e, !0);
            window.addEventListener("gamepadconnected",
                e, !0)
        }
        Eb(e, h) {
            y(this, e, h || null, n)
        }
        va() {
            return this.v.va()
        }
        ua() {
            return this.v.ua()
        }
        If() {
            const e = this.va(),
                h = this.ua();
            this.Eb("window-resize", {
                innerWidth: e,
                innerHeight: h,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: g.Ra()
            });
            this.v.ic() && (-1 !== this.Ma && clearTimeout(this.Ma), this.wd(e, h, 0))
        }
        Rf(e, h, m) {
            -1 !== this.Ma && clearTimeout(this.Ma);
            this.Ma = setTimeout(() => this.wd(e, h, m), 48)
        }
        wd(e, h, m) {
            const c = this.va(),
                k = this.ua();
            this.Ma = -1;
            c != e || k != h ? this.Eb("window-resize", {
                innerWidth: c,
                innerHeight: k,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: g.Ra()
            }) : 10 > m && this.Rf(c, k, m + 1)
        }
        Ff(e) {
            this.Vc = e.targetOrientation
        }
        kg() {
            const e = this.Vc;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(h => console.warn("[Construct 3] Failed to lock orientation: ", h));
            else try {
                let h = !1;
                screen.lockOrientation ? h = screen.lockOrientation(e) : screen.webkitLockOrientation ? h = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? h = screen.mozLockOrientation(e) : screen.msLockOrientation && (h = screen.msLockOrientation(e));
                h || console.warn("[Construct 3] Failed to lock orientation")
            } catch (h) {
                console.warn("[Construct 3] Failed to lock orientation: ",
                    h)
            }
        }
        Ta() {
            const e = g.Ra();
            e && "any" !== this.Vc && this.kg();
            y(this, "fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.va(),
                innerHeight: this.ua()
            })
        }
        yc(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e);
            y(this, "fullscreenerror", {
                isFullscreen: g.Ra(),
                innerWidth: this.va(),
                innerHeight: this.ua()
            })
        }
        Bc(e) {
            e ? this.v.pc() : this.v.Dc();
            y(this, "visibilitychange", {
                hidden: e
            })
        }
        ud(e, h) {
            "Backspace" === h.key && z(h);
            const m = b.get(h.code) || h.code;
            F(this, e, {
                code: m,
                key: h.key,
                which: h.which,
                repeat: h.repeat,
                altKey: h.altKey,
                ctrlKey: h.ctrlKey,
                metaKey: h.metaKey,
                shiftKey: h.shiftKey,
                timeStamp: h.timeStamp
            }, d)
        }
        yf(e) {
            y(this, "wheel", {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                deltaMode: e.deltaMode,
                timeStamp: e.timeStamp
            }, d)
        }
        zc(e, h, m) {
            a(h) || F(this, e, {
                button: h.button,
                buttons: h.buttons,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                timeStamp: h.timeStamp
            }, m)
        }
        Ac(e, h) {
            if (!a(h)) {
                var m = this.ib;
                "pointerdown" === e && 0 !== m ? e = "pointermove" : "pointerup" ===
                    e && 0 !== h.buttons && (e = "pointermove");
                F(this, e, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: h.button,
                    buttons: h.buttons,
                    lastButtons: m,
                    clientX: h.clientX,
                    clientY: h.clientY,
                    pageX: h.pageX,
                    pageY: h.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: h.timeStamp
                }, d);
                this.ib = h.buttons;
                this.zc(h.type, h, f)
            }
        }
        Ua(e, h) {
            if (this.lb && "pointermove" !== e) {
                var m = this.lb;
                m.ab || (L(m), m.Ob = Date.now())
            }
            m = 0;
            "mouse" === h.pointerType && (m = this.ib);
            F(this, e, {
                pointerId: h.pointerId,
                pointerType: h.pointerType,
                button: h.button,
                buttons: h.buttons,
                lastButtons: m,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                width: h.width || 0,
                height: h.height || 0,
                pressure: h.pressure || 0,
                tangentialPressure: h.tangentialPressure || 0,
                tiltX: h.tiltX || 0,
                tiltY: h.tiltY || 0,
                twist: h.twist || 0,
                timeStamp: h.timeStamp
            }, d);
            "mouse" === h.pointerType && (m = "mousemove", "pointerdown" === e ? m = "mousedown" : "pointerup" === e && (m = "mouseup"), this.zc(m, h, f), this.ib = h.buttons)
        }
        zf(e) {
            this.Pc = e;
            e = this.lb;
            if (-1 === e.Na) {
                var h = Date.now(),
                    m = h - e.Ob,
                    c = e.qg;
                m >= c && e.Fd ? (e.Ob = h, e.ab = !0, e.Gc(), e.ab = !1) : e.Na = self.setTimeout(e.Xd, Math.max(c - m, 4))
            }
        }
        Xe() {
            this.Ua("pointermove", this.Pc);
            this.Pc = null
        }
        Cb(e, h) {
            for (let m = 0, c = h.changedTouches.length; m < c; ++m) {
                const k = h.changedTouches[m];
                F(this, e, {
                    pointerId: k.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: k.clientX,
                    clientY: k.clientY,
                    pageX: k.pageX,
                    pageY: k.pageY,
                    width: 2 * (k.radiusX || k.webkitRadiusX || 0),
                    height: 2 * (k.radiusY || k.webkitRadiusY || 0),
                    pressure: k.force || k.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: k.rotationAngle || 0,
                    timeStamp: h.timeStamp
                }, d)
            }
        }
        tc(e) {
            window !== window.top && window.focus();
            this.sd(e.target) && document.activeElement && !this.sd(document.activeElement) && document.activeElement.blur()
        }
        sd(e) {
            return !e || e === document || e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        Oe() {
            this.Cd || (this.Cd = !0, window.addEventListener("deviceorientation", e => this.nf(e)), window.addEventListener("deviceorientationabsolute", e => this.pf(e)))
        }
        Ne() {
            this.Bd || (this.Bd = !0, window.addEventListener("devicemotion",
                e => this.mf(e)))
        }
        nf(e) {
            y(this, "deviceorientation", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp,
                webkitCompassHeading: e.webkitCompassHeading,
                webkitCompassAccuracy: e.webkitCompassAccuracy
            }, d)
        }
        pf(e) {
            y(this, "deviceorientationabsolute", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, d)
        }
        mf(e) {
            let h = null;
            var m = e.acceleration;
            m && (h = {
                x: m.x || 0,
                y: m.y || 0,
                z: m.z || 0
            });
            m = null;
            var c = e.accelerationIncludingGravity;
            c && (m = {
                x: c.x ||
                    0,
                y: c.y || 0,
                z: c.z || 0
            });
            c = null;
            const k = e.rotationRate;
            k && (c = {
                alpha: k.alpha || 0,
                beta: k.beta || 0,
                gamma: k.gamma || 0
            });
            y(this, "devicemotion", {
                acceleration: h,
                accelerationIncludingGravity: m,
                rotationRate: c,
                interval: e.interval,
                timeStamp: e.timeStamp
            }, d)
        }
        Hf(e) {
            const h = this.v.K;
            h.style.width = e.styleWidth + "px";
            h.style.height = e.styleHeight + "px";
            h.style.marginLeft = e.marginLeft + "px";
            h.style.marginTop = e.marginTop + "px";
            this.Kd && (h.style.display = "", this.Kd = !1)
        }
        uf(e) {
            const h = e.url;
            e = e.filename;
            const m = document.createElement("a"),
                c = document.body;
            m.textContent = e;
            m.href = h;
            m.download = e;
            c.appendChild(m);
            m.click();
            c.removeChild(m)
        }
        async Bf(e) {
            var h = e.imageBitmapOpts;
            e = await self.C3_RasterSvgImageBlob(e.blob, e.imageWidth, e.imageHeight, e.surfaceWidth, e.surfaceHeight);
            h = h ? await createImageBitmap(e, h) : await createImageBitmap(e);
            return {
                imageBitmap: h,
                transferables: [h]
            }
        }
        async sf(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async ff(e) {
            await p(e.url)
        }
        Cc() {
            var e = [...this.Ha];
            this.Ha.clear();
            if (!this.na)
                for (const h of e)(e = h.play()) &&
                    e.catch(() => {
                        this.Rb.has(h) || this.Ha.add(h)
                    })
        }
        ta(e) {
            if ("function" !== typeof e.play) throw Error("missing play function");
            this.Rb.delete(e);
            let h;
            try {
                h = e.play()
            } catch (m) {
                this.Ha.add(e);
                return
            }
            h && h.catch(() => {
                this.Rb.has(e) || this.Ha.add(e)
            })
        }
        Ba(e) {
            this.Ha.delete(e);
            this.Rb.add(e)
        }
        yb(e) {
            this.na = !!e
        }
        tf() {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        lf(e) {
            if (e.show) {
                this.xa || (this.xa = document.createElement("div"), this.xa.id = "inspectOutline", document.body.appendChild(this.xa));
                var h = this.xa;
                h.style.display = "";
                h.style.left = e.left - 1 + "px";
                h.style.top = e.top - 1 + "px";
                h.style.width = e.width + 2 + "px";
                h.style.height = e.height + 2 + "px";
                h.textContent = e.name
            } else this.xa && (this.xa.style.display = "none")
        }
        Cf() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        vd(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        df(e, h) {
            return this.v.hd(this.Wa, "js-invoke-function", {
                name: e,
                params: h
            }, void 0, void 0)
        }
        gf(e) {
            alert(e.message)
        }
        Jf(e) {
            "entered-fullscreen" === e ? (g.Ad(!0), this.Ta()) :
                "exited-fullscreen" === e ? (g.Ad(!1), this.Ta()) : console.warn("Unknown wrapper message: ", e)
        }
    })
}
"use strict";
async function N(g) {
    if (g.pg) throw Error("already initialised");
    g.pg = !0;
    var a = g.Vb.sc("dispatchworker.js");
    g.Ic = await g.Vb.bc(a, g.F, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    g.Mc = a.port1;
    g.Ic.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    g.Tc = await P(g)
}

function O(g) {
    return [g.Mc, g.Tc]
}
async function P(g) {
    const a = g.Ld.length;
    var b = g.Vb.sc("jobworker.js");
    b = await g.Vb.bc(b, g.F, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        f = new MessageChannel;
    g.Ic.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    b.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": f.port2
    }, [d.port2, f.port2]);
    g.Ld.push(b);
    return f.port1
}
self.ze = class {
    constructor(g) {
        this.Vb = g;
        this.F = g.F;
        this.F = "preview" === g.C ? this.F + "c3/workers/" : this.F + g.Wb;
        this.sg = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Ic = null;
        this.Ld = [];
        this.Tc = this.Mc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.wb({
    Fg: !1,
    Gg: "workermain.js",
    Oa: ["scripts/c3runtime.js"],
    $d: [],
    Zd: "",
    Cg: "scripts/",
    Yc: [],
    Yd: "html5"
}));
"use strict";
async function Q(g, a) {
    a = a.type;
    let b = !0;
    0 === a ? b = await R() : 1 === a && (b = await T());
    y(g, "permission-result", {
        type: a,
        result: b
    })
}
async function R() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (g) {
        return console.warn("[Touch] Failed to request orientation permission: ", g), !1
    }
}
async function T() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (g) {
        return console.warn("[Touch] Failed to request motion permission: ", g), !1
    }
}
self.wb.$b(class extends self.rb {
    constructor(g) {
        super(g, "touch");
        H(this, "request-permission", a => Q(this, a))
    }
});
"use strict"; {
    const g = 180 / Math.PI;
    self.da = class extends self.rb {
        constructor(a) {
            super(a, "audio");
            this.Kb = this.f = null;
            this.Mb = this.Lc = !1;
            this.pa = () => this.lg();
            this.aa = [];
            this.D = [];
            this.ga = null;
            this.Md = "";
            this.Nd = -1;
            this.kb = new Map;
            this.Qc = 1;
            this.na = !1;
            this.Wc = 0;
            this.Yb = 1;
            this.Jc = 0;
            this.Pd = "HRTF";
            this.Gd = "inverse";
            this.Qd = 600;
            this.Od = 1E4;
            this.Sd = 1;
            this.Id = this.Uc = !1;
            this.Vd = this.v.ye();
            this.ba = new Map;
            this.Ea = new Set;
            this.Nc = !1;
            this.Rc = "";
            this.ya = null;
            self.C3Audio_OnMicrophoneStream = (b, d) => this.xf(b, d);
            this.Jb = null;
            self.C3Audio_GetOutputStream = () => this.rf();
            self.C3Audio_DOMInterface = this;
            J(this, [
                ["create-audio-context", b => this.Te(b)],
                ["play", b => this.Lf(b)],
                ["stop", b => this.ig(b)],
                ["stop-all", () => this.jg()],
                ["set-paused", b => this.bg(b)],
                ["set-volume", b => this.gg(b)],
                ["fade-volume", b => this.Ye(b)],
                ["set-master-volume", b => this.$f(b)],
                ["set-muted", b => this.ag(b)],
                ["set-silent", b => this.dg(b)],
                ["set-looping", b => this.Zf(b)],
                ["set-playback-rate", b => this.cg(b)],
                ["seek", b => this.Sf(b)],
                ["preload", b => this.Mf(b)],
                ["unload", b =>
                    this.mg(b)
                ],
                ["unload-all", () => this.ng()],
                ["set-suspended", b => this.eg(b)],
                ["add-effect", b => this.nd(b)],
                ["set-effect-param", b => this.Wf(b)],
                ["remove-effects", b => this.Of(b)],
                ["tick", b => this.Gf(b)],
                ["load-state", b => this.vf(b)]
            ])
        }
        async Te(a) {
            a.isiOSCordova && (this.Uc = !0);
            this.Wc = a.timeScaleMode;
            this.Pd = ["equalpower", "HRTF", "soundfield"][a.panningModel];
            this.Gd = ["linear", "inverse", "exponential"][a.distanceModel];
            this.Qd = a.refDistance;
            this.Od = a.maxDistance;
            this.Sd = a.rolloffFactor;
            var b = {
                latencyHint: a.latencyHint
            };
            this.Vd || (b.sampleRate = 48E3);
            if ("undefined" !== typeof AudioContext) this.f = new AudioContext(b);
            else if ("undefined" !== typeof webkitAudioContext) this.f = new webkitAudioContext(b);
            else throw Error("Web Audio API not supported");
            this.od();
            this.f.onstatechange = () => {
                "running" !== this.f.state && this.od()
            };
            this.Kb = this.f.createGain();
            this.Kb.connect(this.f.destination);
            b = a.listenerPos;
            this.f.listener.setPosition(b[0], b[1], b[2]);
            this.f.listener.setOrientation(0, 0, 1, 0, -1, 0);
            self.C3_GetAudioContextCurrentTime = () =>
                this.cc();
            try {
                await Promise.all(a.preloadList.map(d => this.Ab(d.originalUrl, d.url, d.type, !1)))
            } catch (d) {
                console.error("[Construct 3] Preloading sounds failed: ", d)
            }
            return {
                sampleRate: this.f.sampleRate
            }
        }
        od() {
            this.Mb || (this.Lc = !1, window.addEventListener("pointerup", this.pa, !0), window.addEventListener("touchend", this.pa, !0), window.addEventListener("click", this.pa, !0), window.addEventListener("keydown", this.pa, !0), this.Mb = !0)
        }
        Ve() {
            this.Mb && (this.Lc = !0, window.removeEventListener("pointerup", this.pa, !0), window.removeEventListener("touchend",
                this.pa, !0), window.removeEventListener("click", this.pa, !0), window.removeEventListener("keydown", this.pa, !0), this.Mb = !1)
        }
        lg() {
            if (!this.Lc) {
                var a = this.f;
                "suspended" === a.state && a.resume && a.resume();
                var b = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = b;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.Ve()
            }
        }
        W() {
            return this.f
        }
        cc() {
            return this.f.currentTime
        }
        ra() {
            return this.Kb
        }
        dd(a) {
            return (a = this.ba.get(a.toLowerCase())) ? a[0].P() : this.ra()
        }
        ae(a, b) {
            a = a.toLowerCase();
            let d = this.ba.get(a);
            d || (d = [], this.ba.set(a, d));
            b.Yf(d.length);
            b.fg(a);
            d.push(b);
            this.yd(a)
        }
        yd(a) {
            let b = this.ra();
            const d = this.ba.get(a);
            if (d && d.length) {
                b = d[0].P();
                for (let f = 0, n = d.length; f < n; ++f) {
                    const p = d[f];
                    f + 1 === n ? p.S(this.ra()) : p.S(d[f + 1].P())
                }
            }
            for (const f of this.la(a)) f.Ee(b);
            this.ya && this.Rc === a && (this.ya.disconnect(), this.ya.connect(b))
        }
        tb() {
            return this.Qc
        }
        ub() {
            return this.na
        }
        Xf() {
            this.Id = !0
        }
        se(a, b) {
            return b ? this.v.og(a).then(d => {
                    const f = this.f.createBuffer(1, d.length, 48E3);
                    f.getChannelData(0).set(d);
                    return f
                }) :
                new Promise((d, f) => {
                    this.f.decodeAudioData(a, d, f)
                })
        }
        ta(a) {
            this.v.ta(a)
        }
        Ba(a) {
            this.v.Ba(a)
        }
        jd(a) {
            let b = 0;
            for (let d = 0, f = this.D.length; d < f; ++d) {
                const n = this.D[d];
                this.D[b] = n;
                n.L === a ? n.c() : ++b
            }
            this.D.length = b
        }
        Fe() {
            let a = 0;
            for (let b = 0, d = this.aa.length; b < d; ++b) {
                const f = this.aa[b];
                this.aa[a] = f;
                f.sa() ? f.c() : ++a
            }
            this.aa.length = a
        }* la(a) {
            if (a)
                for (const b of this.D) self.da.te(b.Z, a) && (yield b);
            else this.ga && !this.ga.T() && (yield this.ga)
        }
        async Ab(a, b, d, f, n) {
            for (const p of this.aa)
                if (p.Qa() === b) return await U(p),
                    p;
            if (n) return null;
            f && (this.Uc || this.Id) && this.Fe();
            n = "audio/webm; codecs=opus" === d && !this.Vd;
            f && n && this.Xf();
            a = !f || this.Uc || n ? new self.oe(this, a, b, d, f, n) : new self.me(this, a, b, d, f);
            this.aa.push(a);
            await U(a);
            return a
        }
        async rc(a, b, d, f, n) {
            for (const p of this.D)
                if (p.Qa() === b && (p.ac() || n)) return p.He(f), p;
            a = await this.Ab(a, b, d, n);
            f = "html5" === a.Ec ? new self.ne(a.i, a, f) : new self.pe(a.i, a, f);
            this.D.push(f);
            return f
        }
        Le(a) {
            let b = this.kb.get(a);
            if (!b) {
                let d = null;
                b = {
                    Xc: 0,
                    promise: new Promise(f => d = f),
                    resolve: d
                };
                this.kb.set(a, b)
            }
            b.Xc++
        }
        Pf(a) {
            const b = this.kb.get(a);
            if (!b) throw Error("expected pending tag");
            b.Xc--;
            0 === b.Xc && (b.resolve(), this.kb.delete(a))
        }
        oc(a) {
            a || (a = this.Md);
            return (a = this.kb.get(a)) ? a.promise : Promise.resolve()
        }
        Bb() {
            if (0 < this.Ea.size) K(this);
            else
                for (const a of this.D)
                    if (a.ed()) {
                        K(this);
                        break
                    }
        }
        Ca() {
            for (var a of this.Ea) a.Ca();
            a = this.cc();
            for (var b of this.D) b.Ca(a);
            b = this.D.filter(d => d.ed()).map(d => d.Pa());
            y(this, "state", {
                tickCount: this.Nd,
                audioInstances: b,
                analysers: [...this.Ea].map(d => d.ve())
            });
            0 === b.length && 0 === this.Ea.size && this.Nb && (this.v.Qf(this.Wd), this.Nb = !1)
        }
        kc(a, b, d) {
            y(this, "trigger", {
                type: a,
                tag: b,
                aiid: d
            })
        }
        async Lf(a) {
            const b = a.originalUrl,
                d = a.url,
                f = a.type,
                n = a.isMusic,
                p = a.tag,
                w = a.isLooping,
                B = a.vol,
                C = a.pos,
                v = a.panning;
            let x = a.off;
            0 < x && !a.trueClock && (this.f.getOutputTimestamp ? (a = this.f.getOutputTimestamp(), x = x - a.performanceTime / 1E3 + a.contextTime) : x = x - performance.now() / 1E3 + this.f.currentTime);
            this.Md = p;
            this.Le(p);
            try {
                this.ga = await this.rc(b, d, f, p, n), v ? (this.ga.xb(!0), this.ga.Ge(v.x,
                    v.y, v.angle, v.innerAngle, v.outerAngle, v.outerGain), v.hasOwnProperty("uid") && this.ga.Ie(v.uid)) : this.ga.xb(!1), this.ga.Play(w, B, C, x)
            } catch (D) {
                console.error("[Construct 3] Audio: error starting playback: ", D);
                return
            } finally {
                this.Pf(p)
            }
            K(this)
        }
        ig(a) {
            a = a.tag;
            for (const b of this.la(a)) b.ma()
        }
        jg() {
            for (const a of this.D) a.ma()
        }
        bg(a) {
            const b = a.tag;
            a = a.paused;
            for (const d of this.la(b)) a ? d.Sa() : d.vb();
            this.Bb()
        }
        gg(a) {
            const b = a.tag;
            a = a.vol;
            for (const d of this.la(b)) d.zb(a)
        }
        async Ye(a) {
            const b = a.tag,
                d = a.vol,
                f = a.duration;
            a = a.stopOnEnd;
            await this.oc(b);
            for (const n of this.la(b)) n.ue(d, f, a);
            this.Bb()
        }
        $f(a) {
            this.Qc = a.vol;
            for (const b of this.D) b.Hb()
        }
        ag(a) {
            const b = a.tag;
            a = a.isMuted;
            for (const d of this.la(b)) d.kd(a)
        }
        dg(a) {
            this.na = a.isSilent;
            this.v.yb(this.na);
            for (const b of this.D) b.Gb()
        }
        Zf(a) {
            const b = a.tag;
            a = a.isLooping;
            for (const d of this.la(b)) d.mc(a)
        }
        async cg(a) {
            const b = a.tag;
            a = a.rate;
            await this.oc(b);
            for (const d of this.la(b)) d.md(a)
        }
        async Sf(a) {
            const b = a.tag;
            a = a.pos;
            await this.oc(b);
            for (const d of this.la(b)) d.lc(a)
        }
        async Mf(a) {
            const b =
                a.originalUrl,
                d = a.url,
                f = a.type;
            a = a.isMusic;
            try {
                await this.rc(b, d, f, "", a)
            } catch (n) {
                console.error("[Construct 3] Audio: error preloading: ", n)
            }
        }
        async mg(a) {
            if (a = await this.Ab("", a.url, a.type, a.isMusic, !0)) a.c(), a = this.aa.indexOf(a), -1 !== a && this.aa.splice(a, 1)
        }
        ng() {
            for (const a of this.aa) a.c();
            this.aa.length = 0
        }
        eg(a) {
            a = a.isSuspended;
            !a && this.f.resume && this.f.resume();
            for (const b of this.D) b.nc(a);
            a && this.f.suspend && this.f.suspend()
        }
        Gf(a) {
            this.Yb = a.timeScale;
            this.Jc = a.gameTime;
            this.Nd = a.tickCount;
            if (0 !==
                this.Wc)
                for (var b of this.D) b.Da();
            (b = a.listenerPos) && this.f.listener.setPosition(b[0], b[1], b[2]);
            for (const d of a.instPans) {
                a = d.uid;
                for (const f of this.D) f.fa === a && f.ld(d.x, d.y, d.angle)
            }
        }
        async nd(a) {
            var b = a.type;
            const d = a.tag;
            var f = a.params;
            if ("filter" === b) f = new self.ge(this, ...f);
            else if ("delay" === b) f = new self.ee(this, ...f);
            else if ("convolution" === b) {
                b = null;
                try {
                    b = await this.Ab(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
                } catch (n) {
                    console.log("[Construct 3] Audio: error loading convolution: ",
                        n);
                    return
                }
                f = new self.de(this, b.$, ...f);
                f.Uf(a.bufferOriginalUrl, a.bufferType)
            } else if ("flanger" === b) f = new self.he(this, ...f);
            else if ("phaser" === b) f = new self.je(this, ...f);
            else if ("gain" === b) f = new self.ie(this, ...f);
            else if ("tremolo" === b) f = new self.le(this, ...f);
            else if ("ringmod" === b) f = new self.ke(this, ...f);
            else if ("distortion" === b) f = new self.fe(this, ...f);
            else if ("compressor" === b) f = new self.ce(this, ...f);
            else if ("analyser" === b) f = new self.be(this, ...f);
            else throw Error("invalid effect type");
            this.ae(d,
                f);
            this.xd()
        }
        Wf(a) {
            const b = a.index,
                d = a.param,
                f = a.value,
                n = a.ramp,
                p = a.time;
            a = this.ba.get(a.tag);
            !a || 0 > b || b >= a.length || (a[b].X(d, f, n, p), this.xd())
        }
        Of(a) {
            a = a.tag.toLowerCase();
            const b = this.ba.get(a);
            if (b && b.length) {
                for (const d of b) d.c();
                this.ba.delete(a);
                this.yd(a)
            }
        }
        Ke(a) {
            this.Ea.add(a);
            this.Bb()
        }
        Nf(a) {
            this.Ea.delete(a)
        }
        xd() {
            this.Nc || (this.Nc = !0, Promise.resolve().then(() => this.We()))
        }
        We() {
            const a = {};
            for (const [b, d] of this.ba) a[b] = d.map(f => f.Pa());
            y(this, "fxstate", {
                fxstate: a
            });
            this.Nc = !1
        }
        async vf(a) {
            const b =
                a.saveLoadMode;
            if (3 !== b)
                for (var d of this.D) d.sa() && 1 === b || (d.sa() || 2 !== b) && d.ma();
            for (const f of this.ba.values())
                for (const n of f) n.c();
            this.ba.clear();
            this.Yb = a.timeScale;
            this.Jc = a.gameTime;
            d = a.listenerPos;
            this.f.listener.setPosition(d[0], d[1], d[2]);
            this.na = a.isSilent;
            this.v.yb(this.na);
            this.Qc = a.masterVolume;
            d = [];
            for (const f of Object.values(a.effects)) d.push(Promise.all(f.map(n => this.nd(n))));
            await Promise.all(d);
            await Promise.all(a.playing.map(f => this.ef(f, b)));
            this.Bb()
        }
        async ef(a, b) {
            if (3 !==
                b) {
                var d = a.bufferOriginalUrl,
                    f = a.bufferUrl,
                    n = a.bufferType,
                    p = a.isMusic,
                    w = a.tag,
                    B = a.isLooping,
                    C = a.volume,
                    v = a.playbackTime;
                if (!p || 1 !== b)
                    if (p || 2 !== b) {
                        b = null;
                        try {
                            b = await this.rc(d, f, n, w, p)
                        } catch (x) {
                            console.error("[Construct 3] Audio: error loading audio state: ", x);
                            return
                        }
                        b.Ce(a.pan);
                        b.Play(B, C, v, 0);
                        a.isPlaying || b.Sa();
                        b.vc(a)
                    }
            }
        }
        xf(a, b) {
            this.ya && this.ya.disconnect();
            this.Rc = b.toLowerCase();
            this.ya = this.f.createMediaStreamSource(a);
            this.ya.connect(this.dd(this.Rc))
        }
        rf() {
            this.Jb || (this.Jb = this.f.createMediaStreamDestination(),
                this.Kb.connect(this.Jb));
            return this.Jb.stream
        }
        static te(a, b) {
            return a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
        }
        static Je(a) {
            return a * g
        }
        static re(a) {
            return Math.pow(10, a / 20)
        }
        static cd(a) {
            return Math.max(Math.min(self.da.re(a), 1), 0)
        }
        static Be(a) {
            return Math.log(a) / Math.log(10) * 20
        }
        static Ae(a) {
            return self.da.Be(Math.max(Math.min(a, 1), 0))
        }
        static yg(a, b) {
            return 1 - Math.exp(-b * a)
        }
    };
    self.wb.$b(self.da)
}
"use strict";

function U(g) {
    g.Pb || (g.Pb = g.uc());
    return g.Pb
}
self.$c = class {
    constructor(g, a, b, d, f) {
        this.i = g;
        this.ug = a;
        this.za = b;
        this.R = d;
        this.rg = f;
        this.Ec = "";
        this.Pb = null
    }
    c() {
        this.Pb = this.i = null
    }
    uc() {}
    W() {
        return this.i.W()
    }
    ec() {
        return this.ug
    }
    Qa() {
        return this.za
    }
    dc() {
        return this.R
    }
    sa() {
        return this.rg
    }
    ea() {}
};
"use strict";
self.me = class extends self.$c {
    constructor(g, a, b, d, f) {
        super(g, a, b, d, f);
        this.Ec = "html5";
        this.J = new Audio;
        this.J.crossOrigin = "anonymous";
        this.J.autoplay = !1;
        this.J.preload = "auto";
        this.eb = this.fb = null;
        this.J.addEventListener("canplaythrough", () => !0);
        this.jb = this.W().createGain();
        this.hb = null;
        this.J.addEventListener("canplay", () => {
            this.fb && (this.fb(), this.eb = this.fb = null);
            !this.hb && this.J && (this.hb = this.W().createMediaElementSource(this.J), this.hb.connect(this.jb))
        });
        this.onended = null;
        this.J.addEventListener("ended",
            () => {
                if (this.onended) this.onended()
            });
        this.J.addEventListener("error", n => {
            console.error(`[Construct 3] Audio '${this.za}' error: `, n);
            this.eb && (this.eb(n), this.eb = this.fb = null)
        })
    }
    c() {
        this.i.jd(this);
        this.jb.disconnect();
        this.jb = null;
        this.hb.disconnect();
        this.hb = null;
        this.J && !this.J.paused && this.J.pause();
        this.J = this.onended = null;
        super.c()
    }
    uc() {
        return new Promise((g, a) => {
            this.fb = g;
            this.eb = a;
            this.J.src = this.za
        })
    }
    O() {
        return this.J
    }
    ea() {
        return this.J.duration
    }
};
"use strict";
async function V(g) {
    if (g.wa) return g.wa;
    var a = g.i.v;
    if ("cordova" === a.C && a.fd(g.za) && "file:" === location.protocol) g.wa = await a.qb(g.za);
    else {
        a = await fetch(g.za);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        g.wa = await a.arrayBuffer()
    }
}
async function W(g) {
    if (g.$) return g.$;
    g.$ = await g.i.se(g.wa, g.tg);
    g.wa = null
}
self.oe = class extends self.$c {
    constructor(g, a, b, d, f, n) {
        super(g, a, b, d, f);
        this.Ec = "webaudio";
        this.$ = this.wa = null;
        this.tg = !!n
    }
    c() {
        this.i.jd(this);
        this.$ = this.wa = null;
        super.c()
    }
    async uc() {
        try {
            await V(this), await W(this)
        } catch (g) {
            console.error(`[Construct 3] Failed to load audio '${this.za}': `, g)
        }
    }
    ea() {
        return this.$ ? this.$.duration : 0
    }
};
"use strict"; {
    let g = 0;
    self.ad = class {
        constructor(a, b, d) {
            this.i = a;
            this.L = b;
            this.Z = d;
            this.Ib = g++;
            this.M = this.W().createGain();
            this.M.connect(this.ra());
            this.A = null;
            this.bb = !1;
            this.ja = [0, 0, 0];
            this.ia = [0, 0, 0];
            this.H = !0;
            this.V = this.ka = this.G = !1;
            this.nb = 1;
            this.Fa = !1;
            this.Y = 1;
            a = this.i.Wc;
            this.Oc = 1 === a && !this.sa() || 2 === a;
            this.Za = this.fa = -1;
            this.Ud = !1
        }
        c() {
            this.L = this.i = null;
            this.A && (this.A.disconnect(), this.A = null);
            this.M.disconnect();
            this.M = null
        }
        W() {
            return this.i.W()
        }
        ra() {
            return this.i.dd(this.Z)
        }
        tb() {
            return this.i.tb()
        }
        sb() {
            return this.Oc ?
                this.i.Jc : performance.now() / 1E3
        }
        ec() {
            return this.L.ec()
        }
        Qa() {
            return this.L.Qa()
        }
        dc() {
            return this.L.dc()
        }
        sa() {
            return this.L.sa()
        }
        He(a) {
            this.Z = a
        }
        T() {}
        ac() {}
        IsPlaying() {
            return !this.H && !this.G && !this.T()
        }
        ed() {
            return !this.H && !this.T()
        }
        Aa() {}
        ea() {
            return this.L.ea()
        }
        Play() {}
        ma() {}
        Sa() {}
        vb() {}
        zb(a) {
            this.nb = a;
            this.M.gain.cancelScheduledValues(0);
            this.Za = -1;
            this.M.gain.value = this.fc()
        }
        ue(a, b, d) {
            if (!this.Fa) {
                a *= this.tb();
                var f = this.M.gain;
                f.cancelScheduledValues(0);
                var n = this.i.cc();
                b = n + b;
                f.setValueAtTime(f.value,
                    n);
                f.linearRampToValueAtTime(a, b);
                this.nb = a;
                this.Za = b;
                this.Ud = d
            }
        }
        Hb() {
            this.zb(this.nb)
        }
        Ca(a) {
            -1 !== this.Za && a >= this.Za && (this.Za = -1, this.Ud && this.ma(), this.i.kc("fade-ended", this.Z, this.Ib))
        }
        fc() {
            const a = this.nb * this.tb();
            return isFinite(a) ? a : 0
        }
        kd(a) {
            a = !!a;
            this.Fa !== a && (this.Fa = a, this.Gb())
        }
        ub() {
            return this.i.ub()
        }
        Gb() {}
        mc() {}
        md(a) {
            this.Y !== a && (this.Y = a, this.Da())
        }
        Da() {}
        lc() {}
        nc() {}
        xb(a) {
            a = !!a;
            this.bb !== a && ((this.bb = a) ? (this.A || (this.A = this.W().createPanner(), this.A.panningModel = this.i.Pd, this.A.distanceModel =
                this.i.Gd, this.A.refDistance = this.i.Qd, this.A.maxDistance = this.i.Od, this.A.rolloffFactor = this.i.Sd), this.M.disconnect(), this.M.connect(this.A), this.A.connect(this.ra())) : (this.A.disconnect(), this.M.disconnect(), this.M.connect(this.ra())))
        }
        Ge(a, b, d, f, n, p) {
            this.bb && (this.ld(a, b, d), a = self.da.Je, this.A.coneInnerAngle = a(f), this.A.coneOuterAngle = a(n), this.A.coneOuterGain = p)
        }
        ld(a, b, d) {
            this.bb && (this.ja[0] = a, this.ja[1] = b, this.ja[2] = 0, this.ia[0] = Math.cos(d), this.ia[1] = Math.sin(d), this.ia[2] = 0, this.A.setPosition(...this.ja),
                this.A.setOrientation(...this.ia))
        }
        Ie(a) {
            this.fa = a
        }
        hc() {}
        Ee(a) {
            const b = this.A || this.M;
            b.disconnect();
            b.connect(a)
        }
        Pa() {
            return {
                aiid: this.Ib,
                tag: this.Z,
                duration: this.ea(),
                volume: this.nb,
                isPlaying: this.IsPlaying(),
                playbackTime: this.Aa(),
                playbackRate: this.Y,
                uid: this.fa,
                bufferOriginalUrl: this.ec(),
                bufferUrl: "",
                bufferType: this.dc(),
                isMusic: this.sa(),
                isLooping: this.V,
                isMuted: this.Fa,
                resumePosition: this.hc(),
                pan: this.we()
            }
        }
        vc(a) {
            this.md(a.playbackRate);
            this.kd(a.isMuted)
        }
        we() {
            if (!this.A) return null;
            const a =
                this.A;
            return {
                pos: this.ja,
                orient: this.ia,
                cia: a.coneInnerAngle,
                coa: a.coneOuterAngle,
                cog: a.coneOuterGain,
                uid: this.fa
            }
        }
        Ce(a) {
            if (a) {
                this.xb(!0);
                a = this.A;
                var b = a.pos;
                this.ja[0] = b[0];
                this.ja[1] = b[1];
                this.ja[2] = b[2];
                b = a.orient;
                this.ia[0] = b[0];
                this.ia[1] = b[1];
                this.ia[2] = b[2];
                a.setPosition(...this.ja);
                a.setOrientation(...this.ia);
                a.coneInnerAngle = a.cia;
                a.coneOuterAngle = a.coa;
                a.coneOuterGain = a.cog;
                this.fa = a.uid
            } else this.xb(!1)
        }
    }
}
"use strict";
self.ne = class extends self.ad {
    constructor(g, a, b) {
        super(g, a, b);
        this.L.jb.connect(this.M);
        this.L.onended = () => this.xc()
    }
    c() {
        this.ma();
        this.L.jb.disconnect();
        super.c()
    }
    O() {
        return this.L.O()
    }
    xc() {
        this.H = !0;
        this.fa = -1;
        this.i.kc("ended", this.Z, this.Ib)
    }
    T() {
        return this.O().ended
    }
    ac() {
        return this.H ? !0 : this.T()
    }
    Aa(g) {
        let a = this.O().currentTime;
        g && (a *= this.Y);
        this.V || (a = Math.min(a, this.ea()));
        return a
    }
    Play(g, a, b) {
        const d = this.O();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== g && (d.loop = g);
        this.zb(a);
        d.muted &&
            (d.muted = !1);
        if (d.currentTime !== b) try {
            d.currentTime = b
        } catch (f) {
            console.warn(`[Construct 3] Exception seeking audio '${this.L.Qa()}' to position '${b}': `, f)
        }
        this.i.ta(d);
        this.G = this.H = !1;
        this.V = g;
        this.Y = 1
    }
    ma() {
        const g = this.O();
        g.paused || g.pause();
        this.i.Ba(g);
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Sa() {
        if (!(this.G || this.H || this.T())) {
            var g = this.O();
            g.paused || g.pause();
            this.i.Ba(g);
            this.G = !0
        }
    }
    vb() {
        !this.G || this.H || this.T() || (this.i.ta(this.O()), this.G = !1)
    }
    Gb() {
        this.O().muted = this.Fa || this.ub()
    }
    mc(g) {
        g = !!g;
        this.V !== g && (this.V = g, this.O().loop = g)
    }
    Da() {
        let g = this.Y;
        this.Oc && (g *= this.i.Yb);
        try {
            this.O().playbackRate = g
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${g}':`, a)
        }
    }
    lc(g) {
        if (!this.H && !this.T()) try {
            this.O().currentTime = g
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${g}': `, a)
        }
    }
    hc() {
        return this.Aa()
    }
    nc(g) {
        g ? this.IsPlaying() ? (this.O().pause(), this.ka = !0) : this.ka = !1 : this.ka && (this.i.ta(this.O()), this.ka = !1)
    }
};
"use strict";

function X(g) {
    g.j && g.j.disconnect();
    g.j = null;
    g.Va = null
}
self.pe = class extends self.ad {
    constructor(g, a, b) {
        super(g, a, b);
        this.j = null;
        this.Sb = d => this.xc(d);
        this.Kc = !0;
        this.Va = null;
        this.N = this.Xb = 0;
        this.Sc = 1
    }
    c() {
        this.ma();
        X(this);
        this.Sb = null;
        super.c()
    }
    xc(g) {
        this.G || this.ka || g.target !== this.Va || (this.H = this.Kc = !0, this.fa = -1, X(this), this.i.kc("ended", this.Z, this.Ib))
    }
    T() {
        return !this.H && this.j && this.j.loop || this.G ? !1 : this.Kc
    }
    ac() {
        return !this.j || this.H ? !0 : this.T()
    }
    Aa(g) {
        let a;
        a = this.G ? this.N : this.sb() - this.Xb;
        g && (a *= this.Y);
        this.V || (a = Math.min(a, this.ea()));
        return a
    }
    Play(g,
        a, b, d) {
        this.Sc = 1;
        this.zb(a);
        X(this);
        this.j = this.W().createBufferSource();
        this.j.buffer = this.L.$;
        this.j.connect(this.M);
        this.Va = this.j;
        this.j.onended = this.Sb;
        this.j.loop = g;
        this.j.start(d, b);
        this.G = this.H = this.Kc = !1;
        this.V = g;
        this.Y = 1;
        this.Xb = this.sb() - b
    }
    ma() {
        if (this.j) try {
            this.j.stop(0)
        } catch (g) {}
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Sa() {
        this.G || this.H || this.T() || (this.N = this.Aa(!0), this.V && (this.N %= this.ea()), this.G = !0, this.j.stop(0))
    }
    vb() {
        !this.G || this.H || this.T() || (X(this), this.j = this.W().createBufferSource(),
            this.j.buffer = this.L.$, this.j.connect(this.M), this.Va = this.j, this.j.onended = this.Sb, this.j.loop = this.V, this.Hb(), this.Da(), this.Xb = this.sb() - this.N / (this.Y || .001), this.j.start(0, this.N), this.G = !1)
    }
    fc() {
        return super.fc() * this.Sc
    }
    Gb() {
        this.Sc = this.Fa || this.ub() ? 0 : 1;
        this.Hb()
    }
    mc(g) {
        g = !!g;
        this.V !== g && (this.V = g, this.j && (this.j.loop = g))
    }
    Da() {
        let g = this.Y;
        this.Oc && (g *= this.i.Yb);
        this.j && (this.j.playbackRate.value = g)
    }
    lc(g) {
        this.H || this.T() || (this.G ? this.N = g : (this.Sa(), this.N = g, this.vb()))
    }
    hc() {
        return this.N
    }
    nc(g) {
        g ?
            this.IsPlaying() ? (this.ka = !0, this.N = this.Aa(!0), this.V && (this.N %= this.ea()), this.j.stop(0)) : this.ka = !1 : this.ka && (X(this), this.j = this.W().createBufferSource(), this.j.buffer = this.L.$, this.j.connect(this.M), this.Va = this.j, this.j.onended = this.Sb, this.j.loop = this.V, this.Hb(), this.Da(), this.Xb = this.sb() - this.N / (this.Y || .001), this.j.start(0, this.N), this.ka = !1)
    }
    vc(g) {
        super.vc(g);
        this.N = g.resumePosition
    }
};
"use strict"; {
    class g {
        constructor(a) {
            this.i = a;
            this.f = a.W();
            this.Jd = -1;
            this.R = this.Z = "";
            this.g = null
        }
        c() {
            this.f = null
        }
        Yf(a) {
            this.Jd = a
        }
        fg(a) {
            this.Z = a
        }
        o() {
            return this.f.createGain()
        }
        P() {}
        S() {}
        m(a, b, d, f) {
            a.cancelScheduledValues(0);
            if (0 === f) a.value = b;
            else {
                var n = this.f.currentTime;
                f += n;
                switch (d) {
                    case 0:
                        a.setValueAtTime(b, f);
                        break;
                    case 1:
                        a.setValueAtTime(a.value, n);
                        a.linearRampToValueAtTime(b, f);
                        break;
                    case 2:
                        a.setValueAtTime(a.value, n), a.exponentialRampToValueAtTime(b, f)
                }
            }
        }
        Pa() {
            return {
                type: this.R,
                tag: this.Z,
                params: this.g
            }
        }
    }
    self.ge = class extends g {
        constructor(a, b, d, f, n, p, w) {
            super(a);
            this.R = "filter";
            this.g = [b, d, f, n, p, w];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = w;
            this.a = this.o();
            this.a.gain.value = 1 - w;
            this.u = this.f.createBiquadFilter();
            this.u.type = b;
            this.u.frequency.value = d;
            this.u.detune.value = f;
            this.u.Q.value = n;
            this.u.gain.vlaue = p;
            this.l.connect(this.u);
            this.l.connect(this.a);
            this.u.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.u.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b, d, f);
                    this.m(this.a.gain, 1 - b, d, f);
                    break;
                case 1:
                    this.g[1] = b;
                    this.m(this.u.frequency, b, d, f);
                    break;
                case 2:
                    this.g[2] = b;
                    this.m(this.u.detune, b, d, f);
                    break;
                case 3:
                    this.g[3] = b;
                    this.m(this.u.Q, b, d, f);
                    break;
                case 4:
                    this.g[4] = b, this.m(this.u.gain, b, d, f)
            }
        }
    };
    self.ee = class extends g {
        constructor(a, b, d, f) {
            super(a);
            this.R = "delay";
            this.g = [b, d, f];
            this.l =
                this.o();
            this.b = this.o();
            this.b.gain.value = f;
            this.a = this.o();
            this.a.gain.value = 1 - f;
            this.gb = this.o();
            this.U = this.f.createDelay(b);
            this.U.delayTime.value = b;
            this.Ya = this.o();
            this.Ya.gain.value = d;
            this.l.connect(this.gb);
            this.l.connect(this.a);
            this.gb.connect(this.b);
            this.gb.connect(this.U);
            this.U.connect(this.Ya);
            this.Ya.connect(this.gb)
        }
        c() {
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            this.gb.disconnect();
            this.U.disconnect();
            this.Ya.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, f) {
            const n = self.da.cd;
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[2] = b;
                    this.m(this.b.gain, b, d, f);
                    this.m(this.a.gain, 1 - b, d, f);
                    break;
                case 4:
                    this.g[1] = n(b);
                    this.m(this.Ya.gain, n(b), d, f);
                    break;
                case 5:
                    this.g[0] = b, this.m(this.U.delayTime, b, d, f)
            }
        }
    };
    self.de = class extends g {
        constructor(a, b, d, f) {
            super(a);
            this.R = "convolution";
            this.g = [d, f];
            this.Ed = this.Dd = "";
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = f;
            this.a = this.o();
            this.a.gain.value =
                1 - f;
            this.Xa = this.f.createConvolver();
            this.Xa.normalize = d;
            this.Xa.buffer = b;
            this.l.connect(this.Xa);
            this.l.connect(this.a);
            this.Xa.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Xa.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[1] = b, this.m(this.b.gain, b, d, f), this.m(this.a.gain, 1 - b, d, f)
            }
        }
        Uf(a, b) {
            this.Dd = a;
            this.Ed = b
        }
        Pa() {
            const a =
                super.Pa();
            a.bufferOriginalUrl = this.Dd;
            a.bufferUrl = "";
            a.bufferType = this.Ed;
            return a
        }
    };
    self.he = class extends g {
        constructor(a, b, d, f, n, p) {
            super(a);
            this.R = "flanger";
            this.g = [b, d, f, n, p];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - p / 2;
            this.b = this.o();
            this.b.gain.value = p / 2;
            this.$a = this.o();
            this.$a.gain.value = n;
            this.U = this.f.createDelay(b + d);
            this.U.delayTime.value = b;
            this.s = this.f.createOscillator();
            this.s.frequency.value = f;
            this.I = this.o();
            this.I.gain.value = d;
            this.l.connect(this.U);
            this.l.connect(this.a);
            this.U.connect(this.b);
            this.U.connect(this.$a);
            this.$a.connect(this.U);
            this.s.connect(this.I);
            this.I.connect(this.U.delayTime);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.U.disconnect();
            this.s.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            this.$a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[4] = b;
                    this.m(this.b.gain,
                        b / 2, d, f);
                    this.m(this.a.gain, 1 - b / 2, d, f);
                    break;
                case 6:
                    this.g[1] = b / 1E3;
                    this.m(this.I.gain, b / 1E3, d, f);
                    break;
                case 7:
                    this.g[2] = b;
                    this.m(this.s.frequency, b, d, f);
                    break;
                case 8:
                    this.g[3] = b / 100, this.m(this.$a.gain, b / 100, d, f)
            }
        }
    };
    self.je = class extends g {
        constructor(a, b, d, f, n, p, w) {
            super(a);
            this.R = "phaser";
            this.g = [b, d, f, n, p, w];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - w / 2;
            this.b = this.o();
            this.b.gain.value = w / 2;
            this.u = this.f.createBiquadFilter();
            this.u.type = "allpass";
            this.u.frequency.value = b;
            this.u.detune.value =
                d;
            this.u.Q.value = f;
            this.s = this.f.createOscillator();
            this.s.frequency.value = p;
            this.I = this.o();
            this.I.gain.value = n;
            this.l.connect(this.u);
            this.l.connect(this.a);
            this.u.connect(this.b);
            this.s.connect(this.I);
            this.I.connect(this.u.frequency);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.u.disconnect();
            this.s.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a,
            b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b / 2, d, f);
                    this.m(this.a.gain, 1 - b / 2, d, f);
                    break;
                case 1:
                    this.g[0] = b;
                    this.m(this.u.frequency, b, d, f);
                    break;
                case 2:
                    this.g[1] = b;
                    this.m(this.u.detune, b, d, f);
                    break;
                case 3:
                    this.g[2] = b;
                    this.m(this.u.Q, b, d, f);
                    break;
                case 6:
                    this.g[3] = b;
                    this.m(this.I.gain, b, d, f);
                    break;
                case 7:
                    this.g[4] = b, this.m(this.s.frequency, b, d, f)
            }
        }
    };
    self.ie = class extends g {
        constructor(a, b) {
            super(a);
            this.R = "gain";
            this.g = [b];
            this.h = this.o();
            this.h.gain.value =
                b
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, f) {
            const n = self.da.cd;
            switch (a) {
                case 4:
                    this.g[0] = n(b), this.m(this.h.gain, n(b), d, f)
            }
        }
    };
    self.le = class extends g {
        constructor(a, b, d) {
            super(a);
            this.R = "tremolo";
            this.g = [b, d];
            this.h = this.o();
            this.h.gain.value = 1 - d / 2;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.I = this.o();
            this.I.gain.value = d / 2;
            this.s.connect(this.I);
            this.I.connect(this.h.gain);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.I.disconnect();
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.h.gain, 1 - b / 2, d, f);
                    this.m(this.I.gain, b / 2, d, f);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, f)
            }
        }
    };
    self.ke = class extends g {
        constructor(a, b, d) {
            super(a);
            this.R = "ringmod";
            this.g = [b, d];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = d;
            this.a = this.o();
            this.a.gain.value = 1 - d;
            this.mb = this.o();
            this.mb.gain.value =
                0;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.s.connect(this.mb.gain);
            this.s.start(0);
            this.l.connect(this.mb);
            this.l.connect(this.a);
            this.mb.connect(this.b)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.mb.disconnect();
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.b.gain, b, d, f);
                    this.m(this.a.gain, 1 - b, d, f);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, f)
            }
        }
    };
    self.fe = class extends g {
        constructor(a, b, d, f, n, p) {
            super(a);
            this.R = "distortion";
            this.g = [b, d, f, n, p];
            this.l = this.o();
            this.Ub = this.o();
            this.Tb = this.o();
            this.Vf(f, n);
            this.b = this.o();
            this.b.gain.value = p;
            this.a = this.o();
            this.a.gain.value = 1 - p;
            this.Zb = this.f.createWaveShaper();
            this.Hc = new Float32Array(65536);
            this.$e(b, d);
            this.Zb.curve = this.Hc;
            this.l.connect(this.Ub);
            this.l.connect(this.a);
            this.Ub.connect(this.Zb);
            this.Zb.connect(this.Tb);
            this.Tb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Ub.disconnect();
            this.Zb.disconnect();
            this.Tb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        Vf(a, b) {
            .01 > a && (a = .01);
            this.Ub.gain.value = a;
            this.Tb.gain.value = Math.pow(1 / a, .6) * b
        }
        $e(a, b) {
            for (let d = 0; 32768 > d; ++d) {
                let f = d / 32768;
                f = this.hg(f, a, b);
                this.Hc[32768 + d] = f;
                this.Hc[32768 - d - 1] = -f
            }
        }
        hg(a, b, d) {
            d = 1.05 * d * b - b;
            const f = 0 > a ? -a : a;
            return (f < b ? f : b + d * self.da.yg(f - b, 1 / d)) * (0 > a ? -1 : 1)
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, f) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[4] = b, this.m(this.b.gain, b, d, f), this.m(this.a.gain, 1 - b, d, f)
            }
        }
    };
    self.ce = class extends g {
        constructor(a, b, d, f, n, p) {
            super(a);
            this.R = "compressor";
            this.g = [b, d, f, n, p];
            this.h = this.f.createDynamicsCompressor();
            this.h.threshold.value = b;
            this.h.knee.value = d;
            this.h.ratio.value = f;
            this.h.attack.value = n;
            this.h.release.value = p
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
    };
    self.be = class extends g {
        constructor(a, b, d) {
            super(a);
            this.R = "analyser";
            this.g = [b, d];
            this.h = this.f.createAnalyser();
            this.h.fftSize = b;
            this.h.smoothingTimeConstant = d;
            this.Hd = new Float32Array(this.h.frequencyBinCount);
            this.Td = new Uint8Array(b);
            this.Rd = this.Ia = 0;
            this.i.Ke(this)
        }
        c() {
            this.i.Nf(this);
            this.h.disconnect();
            super.c()
        }
        Ca() {
            this.h.getFloatFrequencyData(this.Hd);
            this.h.getByteTimeDomainData(this.Td);
            const a = this.h.fftSize;
            let b = this.Ia = 0;
            for (var d = 0; d < a; ++d) {
                let f = (this.Td[d] - 128) / 128;
                0 > f && (f = -f);
                this.Ia < f && (this.Ia = f);
                b += f * f
            }
            d = self.da.Ae;
            this.Ia = d(this.Ia);
            this.Rd = d(Math.sqrt(b / a))
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
        ve() {
            return {
                tag: this.Z,
                index: this.Jd,
                peak: this.Ia,
                rms: this.Rd,
                binCount: this.h.frequencyBinCount,
                freqBins: this.Hd
            }
        }
    }
};