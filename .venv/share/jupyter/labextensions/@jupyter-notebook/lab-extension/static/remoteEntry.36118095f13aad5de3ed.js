var _JUPYTERLAB;
(() => {
  "use strict";
  var e,
    r,
    t,
    o,
    n,
    a,
    i,
    l,
    u,
    s,
    f,
    d,
    p,
    c,
    h,
    b,
    v,
    m,
    g,
    y,
    j,
    w,
    k,
    S = {
      215: (e, r, t) => {
        var o = {
            "./index": () => Promise.all([t.e(937), t.e(568)]).then(() => () => t(568)),
            "./extension": () => Promise.all([t.e(937), t.e(568)]).then(() => () => t(568)),
            "./style": () => t.e(93).then(() => () => t(93)),
          },
          n = (e, r) => (
            (t.R = r),
            (r = t.o(o, e)
              ? o[e]()
              : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.');
                })),
            (t.R = void 0),
            r
          ),
          a = (e, r) => {
            if (t.S) {
              var o = "default",
                n = t.S[o];
              if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return (t.S[o] = e), t.I(o, r);
            }
          };
        t.d(r, { get: () => n, init: () => a });
      },
    },
    P = {};
  function x(e) {
    var r = P[e];
    if (void 0 !== r) return r.exports;
    var t = (P[e] = { id: e, exports: {} });
    return S[e](t, t.exports, x), t.exports;
  }
  (x.m = S),
    (x.c = P),
    (x.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return x.d(r, { a: r }), r;
    }),
    (x.d = (e, r) => {
      for (var t in r) x.o(r, t) && !x.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (x.f = {}),
    (x.e = (e) => Promise.all(Object.keys(x.f).reduce((r, t) => (x.f[t](e, r), r), []))),
    (x.u = (e) =>
      e +
      "." +
      {
        93: "eae3497dd223d842d198",
        199: "7ed7a39f5aead3cdd8b1",
        568: "afb9594a3c8448323be3",
        928: "23e13d929eef18fd73d1",
        937: "6592f5674832766c5191",
      }[e] +
      ".js?v=" +
      {
        93: "eae3497dd223d842d198",
        199: "7ed7a39f5aead3cdd8b1",
        568: "afb9594a3c8448323be3",
        928: "23e13d929eef18fd73d1",
        937: "6592f5674832766c5191",
      }[e]),
    (x.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (x.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "@jupyter-notebook/lab-extension:"),
    (x.l = (t, o, n, a) => {
      if (e[t]) e[t].push(o);
      else {
        var i, l;
        if (void 0 !== n)
          for (var u = document.getElementsByTagName("script"), s = 0; s < u.length; s++) {
            var f = u[s];
            if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == r + n) {
              i = f;
              break;
            }
          }
        i ||
          ((l = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          x.nc && i.setAttribute("nonce", x.nc),
          i.setAttribute("data-webpack", r + n),
          (i.src = t)),
          (e[t] = [o]);
        var d = (r, o) => {
            (i.onerror = i.onload = null), clearTimeout(p);
            var n = e[t];
            if ((delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e) => e(o)), r)) return r(o);
          },
          p = setTimeout(d.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        (i.onerror = d.bind(null, i.onerror)), (i.onload = d.bind(null, i.onload)), l && document.head.appendChild(i);
      }
    }),
    (x.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      x.S = {};
      var e = {},
        r = {};
      x.I = (t, o) => {
        o || (o = []);
        var n = r[t];
        if ((n || (n = r[t] = {}), !(o.indexOf(n) >= 0))) {
          if ((o.push(n), e[t])) return e[t];
          x.o(x.S, t) || (x.S[t] = {});
          var a = x.S[t],
            i = "@jupyter-notebook/lab-extension",
            l = (e, r, t, o) => {
              var n = (a[e] = a[e] || {}),
                l = n[r];
              (!l || (!l.loaded && (!o != !l.eager ? o : i > l.from))) && (n[r] = { get: t, from: i, eager: !!o });
            },
            u = [];
          return (
            "default" === t &&
              (l("@jupyter-notebook/application", "7.4.3", () => Promise.all([x.e(928), x.e(199), x.e(937)]).then(() => () => x(30))),
              l("@jupyter-notebook/lab-extension", "7.4.3", () => Promise.all([x.e(937), x.e(568)]).then(() => () => x(568)))),
            (e[t] = u.length ? Promise.all(u).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      x.g.importScripts && (e = x.g.location + "");
      var r = x.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        if (t.length) for (var o = t.length - 1; o > -1 && !e; ) e = t[o--].src;
      }
      if (!e) throw new Error("Automatic publicPath is not supported in this browser");
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (x.p = e);
    })(),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        o = t[1] ? r(t[1]) : [];
      return t[2] && (o.length++, o.push.apply(o, r(t[2]))), t[3] && (o.push([]), o.push.apply(o, r(t[3]))), o;
    }),
    (o = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var o = 0; ; ) {
        if (o >= e.length) return o < r.length && "u" != (typeof r[o])[0];
        var n = e[o],
          a = (typeof n)[0];
        if (o >= r.length) return "u" == a;
        var i = r[o],
          l = (typeof i)[0];
        if (a != l) return ("o" == a && "n" == l) || "s" == l || "u" == a;
        if ("o" != a && "u" != a && n != i) return n < i;
        o++;
      }
    }),
    (n = (e) => {
      var r = e[0],
        t = "";
      if (1 === e.length) return "*";
      if (r + 0.5) {
        t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
        for (var o = 1, a = 1; a < e.length; a++) o--, (t += "u" == (typeof (l = e[a]))[0] ? "-" : (o > 0 ? "." : "") + ((o = 2), l));
        return t;
      }
      var i = [];
      for (a = 1; a < e.length; a++) {
        var l = e[a];
        i.push(0 === l ? "not(" + u() + ")" : 1 === l ? "(" + u() + " || " + u() + ")" : 2 === l ? i.pop() + " " + i.pop() : n(l));
      }
      return u();
      function u() {
        return i.pop().replace(/^\((.+)\)$/, "$1");
      }
    }),
    (a = (e, r) => {
      if (0 in e) {
        r = t(r);
        var o = e[0],
          n = o < 0;
        n && (o = -o - 1);
        for (var i = 0, l = 1, u = !0; ; l++, i++) {
          var s,
            f,
            d = l < e.length ? (typeof e[l])[0] : "";
          if (i >= r.length || "o" == (f = (typeof (s = r[i]))[0])) return !u || ("u" == d ? l > o && !n : ("" == d) != n);
          if ("u" == f) {
            if (!u || "u" != d) return !1;
          } else if (u)
            if (d == f)
              if (l <= o) {
                if (s != e[l]) return !1;
              } else {
                if (n ? s > e[l] : s < e[l]) return !1;
                s != e[l] && (u = !1);
              }
            else if ("s" != d && "n" != d) {
              if (n || l <= o) return !1;
              (u = !1), l--;
            } else {
              if (l <= o || f < d != n) return !1;
              u = !1;
            }
          else "s" != d && "n" != d && ((u = !1), l--);
        }
      }
      var p = [],
        c = p.pop.bind(p);
      for (i = 1; i < e.length; i++) {
        var h = e[i];
        p.push(1 == h ? c() | c() : 2 == h ? c() & c() : h ? a(h, r) : !c());
      }
      return !!c();
    }),
    (i = (e, r) => {
      var t = x.S[e];
      if (!t || !x.o(t, r)) throw new Error("Shared module " + r + " doesn't exist in shared scope " + e);
      return t;
    }),
    (l = (e, r) => {
      var t = e[r];
      return (r = Object.keys(t).reduce((e, r) => (!e || o(e, r) ? r : e), 0)) && t[r];
    }),
    (u = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce((e, r) => (!e || (!t[e].loaded && o(e, r)) ? r : e), 0);
    }),
    (s = (e, r, t, o) =>
      "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + n(o) + ")"),
    (f = (e, r, t, o) => {
      var n = u(e, t);
      return a(o, n) || c(s(e, t, n, o)), b(e[t][n]);
    }),
    (d = (e, r, t) => {
      var n = e[r];
      return (r = Object.keys(n).reduce((e, r) => (!a(t, r) || (e && !o(e, r)) ? e : r), 0)) && n[r];
    }),
    (p = (e, r, t, o) => {
      var a = e[t];
      return (
        "No satisfying version (" +
        n(o) +
        ") of shared module " +
        t +
        " found in shared scope " +
        r +
        ".\nAvailable versions: " +
        Object.keys(a)
          .map((e) => e + " from " + a[e].from)
          .join(", ")
      );
    }),
    (c = (e) => {
      "undefined" != typeof console && console.warn && console.warn(e);
    }),
    (h = (e, r, t, o) => {
      c(p(e, r, t, o));
    }),
    (b = (e) => ((e.loaded = 1), e.get())),
    (m = (v = (e) =>
      function (r, t, o, n) {
        var a = x.I(r);
        return a && a.then ? a.then(e.bind(e, r, x.S[r], t, o, n)) : e(r, x.S[r], t, o, n);
      })((e, r, t, o) => (i(e, t), b(d(r, t, o) || h(r, e, t, o) || l(r, t))))),
    (g = v((e, r, t, o) => (i(e, t), f(r, 0, t, o)))),
    (y = v((e, r, t, o, n) => {
      var a = r && x.o(r, t) && d(r, t, o);
      return a ? b(a) : n();
    })),
    (j = {}),
    (w = {
      281: () => g("default", "@jupyterlab/coreutils", [1, 6, 4, 3]),
      358: () => g("default", "@jupyterlab/application", [1, 4, 4, 3]),
      414: () => g("default", "@jupyterlab/translation", [1, 4, 4, 3]),
      449: () => g("default", "@jupyterlab/ui-components", [1, 4, 4, 3]),
      882: () => g("default", "@lumino/widgets", [1, 2, 3, 1, , "alpha", 0]),
      943: () => g("default", "@jupyterlab/apputils", [1, 4, 5, 3]),
      490: () => g("default", "@jupyterlab/notebook", [1, 4, 4, 3]),
      509: () => y("default", "@jupyter-notebook/application", [1, 7, 4, 3], () => Promise.all([x.e(928), x.e(199)]).then(() => () => x(30))),
      4: () => g("default", "@lumino/properties", [1, 2, 0, 0]),
      191: () => g("default", "@jupyterlab/rendermime", [1, 4, 4, 3]),
      353: () => m("default", "@jupyterlab/docregistry", [1, 4, 4, 3]),
      633: () => g("default", "@lumino/messaging", [1, 2, 0, 0]),
      697: () => g("default", "@lumino/algorithm", [1, 2, 0, 0]),
      717: () => g("default", "@lumino/disposable", [1, 2, 0, 0]),
      797: () => g("default", "@lumino/polling", [1, 2, 0, 0]),
      901: () => g("default", "@lumino/signaling", [1, 2, 0, 0]),
      930: () => g("default", "@lumino/coreutils", [1, 2, 0, 0]),
    }),
    (k = { 199: [4, 191, 353, 633, 697, 717, 797, 901, 930], 568: [490, 509], 937: [281, 358, 414, 449, 882, 943] }),
    (x.f.consumes = (e, r) => {
      x.o(k, e) &&
        k[e].forEach((e) => {
          if (x.o(j, e)) return r.push(j[e]);
          var t = (r) => {
              (j[e] = 0),
                (x.m[e] = (t) => {
                  delete x.c[e], (t.exports = r());
                });
            },
            o = (r) => {
              delete j[e],
                (x.m[e] = (t) => {
                  throw (delete x.c[e], r);
                });
            };
          try {
            var n = w[e]();
            n.then ? r.push((j[e] = n.then(t).catch(o))) : t(n);
          } catch (e) {
            o(e);
          }
        });
    }),
    (() => {
      var e = { 572: 0 };
      x.f.j = (r, t) => {
        var o = x.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if (937 != r) {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var a = x.p + x.u(r),
              i = new Error();
            x.l(
              a,
              (t) => {
                if (x.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  (i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = n),
                    (i.request = a),
                    o[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      };
      var r = (r, t) => {
          var o,
            n,
            [a, i, l] = t,
            u = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (o in i) x.o(i, o) && (x.m[o] = i[o]);
            l && l(x);
          }
          for (r && r(t); u < a.length; u++) (n = a[u]), x.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
        },
        t = (self.webpackChunk_jupyter_notebook_lab_extension = self.webpackChunk_jupyter_notebook_lab_extension || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (x.nc = void 0);
  var E = x(215);
  (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)["@jupyter-notebook/lab-extension"] = E;
})();
