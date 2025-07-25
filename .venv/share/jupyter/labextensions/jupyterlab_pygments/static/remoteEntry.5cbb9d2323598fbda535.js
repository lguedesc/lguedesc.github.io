var _JUPYTERLAB;
(() => {
  'use strict';
  var e,
    r,
    t = {
      741: (e, r, t) => {
        var n = {
            './index': () => t.e(568).then(() => () => t(568)),
            './extension': () => t.e(568).then(() => () => t(568)),
            './style': () => t.e(747).then(() => () => t(747))
          },
          a = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          o = (e, r) => {
            if (t.S) {
              var n = 'default',
                a = t.S[n];
              if (a && a !== e)
                throw new Error(
                  'Container initialization failed as it has already been initialized with a different share scope'
                );
              return (t.S[n] = e), t.I(n, r);
            }
          };
        t.d(r, { get: () => a, init: () => o });
      }
    },
    n = {};
  function a(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var o = (n[e] = { id: e, exports: {} });
    return t[e](o, o.exports, a), o.exports;
  }
  (a.m = t),
    (a.c = n),
    (a.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return a.d(r, { a: r }), r;
    }),
    (a.d = (e, r) => {
      for (var t in r)
        a.o(r, t) &&
          !a.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (a.f = {}),
    (a.e = e =>
      Promise.all(Object.keys(a.f).reduce((r, t) => (a.f[t](e, r), r), []))),
    (a.u = e =>
      e +
      '.' +
      { 568: '1e2faa2ba0bbe59c4780', 747: '67662283a5707eeb4d4c' }[e] +
      '.js?v=' +
      { 568: '1e2faa2ba0bbe59c4780', 747: '67662283a5707eeb4d4c' }[e]),
    (a.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = 'jupyterlab_pygments:'),
    (a.l = (t, n, o, i) => {
      if (e[t]) e[t].push(n);
      else {
        var l, u;
        if (void 0 !== o)
          for (
            var s = document.getElementsByTagName('script'), d = 0;
            d < s.length;
            d++
          ) {
            var c = s[d];
            if (
              c.getAttribute('src') == t ||
              c.getAttribute('data-webpack') == r + o
            ) {
              l = c;
              break;
            }
          }
        l ||
          ((u = !0),
          ((l = document.createElement('script')).charset = 'utf-8'),
          (l.timeout = 120),
          a.nc && l.setAttribute('nonce', a.nc),
          l.setAttribute('data-webpack', r + o),
          (l.src = t)),
          (e[t] = [n]);
        var p = (r, n) => {
            (l.onerror = l.onload = null), clearTimeout(f);
            var a = e[t];
            if (
              (delete e[t],
              l.parentNode && l.parentNode.removeChild(l),
              a && a.forEach(e => e(n)),
              r)
            )
              return r(n);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: 'timeout', target: l }),
            12e4
          );
        (l.onerror = p.bind(null, l.onerror)),
          (l.onload = p.bind(null, l.onload)),
          u && document.head.appendChild(l);
      }
    }),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      a.S = {};
      var e = {},
        r = {};
      a.I = (t, n) => {
        n || (n = []);
        var o = r[t];
        if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
          if ((n.push(o), e[t])) return e[t];
          a.o(a.S, t) || (a.S[t] = {});
          var i = a.S[t],
            l = 'jupyterlab_pygments',
            u = [];
          return (
            'default' === t &&
              ((e, r, t, n) => {
                var o = (i[e] = i[e] || {}),
                  u = o[r];
                (!u || (!u.loaded && (1 != !u.eager ? n : l > u.from))) &&
                  (o[r] = {
                    get: () => a.e(568).then(() => () => a(568)),
                    from: l,
                    eager: !1
                  });
              })('jupyterlab_pygments', '0.3.0'),
            (e[t] = u.length ? Promise.all(u).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + '');
      var r = a.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        if (t.length) for (var n = t.length - 1; n > -1 && !e; ) e = t[n--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (a.p = e);
    })(),
    (() => {
      var e = { 761: 0 };
      a.f.j = (r, t) => {
        var n = a.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else {
            var o = new Promise((t, a) => (n = e[r] = [t, a]));
            t.push((n[2] = o));
            var i = a.p + a.u(r),
              l = new Error();
            a.l(
              i,
              t => {
                if (a.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ('load' === t.type ? 'missing' : t.type),
                    i = t && t.target && t.target.src;
                  (l.message =
                    'Loading chunk ' + r + ' failed.\n(' + o + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = o),
                    (l.request = i),
                    n[1](l);
                }
              },
              'chunk-' + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            o,
            [i, l, u] = t,
            s = 0;
          if (i.some(r => 0 !== e[r])) {
            for (n in l) a.o(l, n) && (a.m[n] = l[n]);
            u && u(a);
          }
          for (r && r(t); s < i.length; s++)
            (o = i[s]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        t = (self.webpackChunkjupyterlab_pygments =
          self.webpackChunkjupyterlab_pygments || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (a.nc = void 0);
  var o = a(741);
  (_JUPYTERLAB =
    void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB).jupyterlab_pygments = o;
})();
