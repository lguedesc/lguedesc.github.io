"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8606],
  {
    82887: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
    },
    71363: (t, n, e) => {
      e.d(n, { Ay: () => c, Jj: () => o, ah: () => u });
      var i = e(82887);
      var r = e(9791);
      var s = e(40168);
      const a = (0, r.A)(i.A);
      const o = a.right;
      const u = a.left;
      const h = (0, r.A)(s.A).center;
      const c = o;
    },
    9791: (t, n, e) => {
      e.d(n, { A: () => s });
      var i = e(82887);
      function r(t, n) {
        return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      }
      function s(t) {
        let n, e, s;
        if (t.length !== 2) {
          n = i.A;
          e = (n, e) => (0, i.A)(t(n), e);
          s = (n, e) => t(n) - e;
        } else {
          n = t === i.A || t === r ? t : a;
          e = t;
          s = t;
        }
        function o(t, i, r = 0, s = t.length) {
          if (r < s) {
            if (n(i, i) !== 0) return s;
            do {
              const n = (r + s) >>> 1;
              if (e(t[n], i) < 0) r = n + 1;
              else s = n;
            } while (r < s);
          }
          return r;
        }
        function u(t, i, r = 0, s = t.length) {
          if (r < s) {
            if (n(i, i) !== 0) return s;
            do {
              const n = (r + s) >>> 1;
              if (e(t[n], i) <= 0) r = n + 1;
              else s = n;
            } while (r < s);
          }
          return r;
        }
        function h(t, n, e = 0, i = t.length) {
          const r = o(t, n, e, i - 1);
          return r > e && s(t[r - 1], n) > -s(t[r], n) ? r - 1 : r;
        }
        return { left: o, center: h, right: u };
      }
      function a() {
        return 0;
      }
    },
    21671: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        let e;
        if (n === undefined) {
          for (const n of t) {
            if (n != null && (e < n || (e === undefined && n >= n))) {
              e = n;
            }
          }
        } else {
          let i = -1;
          for (let r of t) {
            if ((r = n(r, ++i, t)) != null && (e < r || (e === undefined && r >= r))) {
              e = r;
            }
          }
        }
        return e;
      }
    },
    44317: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        let e;
        if (n === undefined) {
          for (const n of t) {
            if (n != null && (e > n || (e === undefined && n >= n))) {
              e = n;
            }
          }
        } else {
          let i = -1;
          for (let r of t) {
            if ((r = n(r, ++i, t)) != null && (e > r || (e === undefined && r >= r))) {
              e = r;
            }
          }
        }
        return e;
      }
    },
    40168: (t, n, e) => {
      e.d(n, { A: () => i, n: () => r });
      function i(t) {
        return t === null ? NaN : +t;
      }
      function* r(t, n) {
        if (n === undefined) {
          for (let n of t) {
            if (n != null && (n = +n) >= n) {
              yield n;
            }
          }
        } else {
          let e = -1;
          for (let i of t) {
            if ((i = n(i, ++e, t)) != null && (i = +i) >= i) {
              yield i;
            }
          }
        }
      }
    },
    18312: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n, e) {
        (t = +t), (n = +n), (e = (r = arguments.length) < 2 ? ((n = t), (t = 0), 1) : r < 3 ? 1 : +e);
        var i = -1,
          r = Math.max(0, Math.ceil((n - t) / e)) | 0,
          s = new Array(r);
        while (++i < r) {
          s[i] = t + i * e;
        }
        return s;
      }
    },
    97119: (t, n, e) => {
      e.d(n, { Ay: () => o, lq: () => u, sG: () => h });
      const i = Math.sqrt(50),
        r = Math.sqrt(10),
        s = Math.sqrt(2);
      function a(t, n, e) {
        const o = (n - t) / Math.max(0, e),
          u = Math.floor(Math.log10(o)),
          h = o / Math.pow(10, u),
          c = h >= i ? 10 : h >= r ? 5 : h >= s ? 2 : 1;
        let l, f, _;
        if (u < 0) {
          _ = Math.pow(10, -u) / c;
          l = Math.round(t * _);
          f = Math.round(n * _);
          if (l / _ < t) ++l;
          if (f / _ > n) --f;
          _ = -_;
        } else {
          _ = Math.pow(10, u) * c;
          l = Math.round(t / _);
          f = Math.round(n / _);
          if (l * _ < t) ++l;
          if (f * _ > n) --f;
        }
        if (f < l && 0.5 <= e && e < 2) return a(t, n, e * 2);
        return [l, f, _];
      }
      function o(t, n, e) {
        (n = +n), (t = +t), (e = +e);
        if (!(e > 0)) return [];
        if (t === n) return [t];
        const i = n < t,
          [r, s, o] = i ? a(n, t, e) : a(t, n, e);
        if (!(s >= r)) return [];
        const u = s - r + 1,
          h = new Array(u);
        if (i) {
          if (o < 0) for (let t = 0; t < u; ++t) h[t] = (s - t) / -o;
          else for (let t = 0; t < u; ++t) h[t] = (s - t) * o;
        } else {
          if (o < 0) for (let t = 0; t < u; ++t) h[t] = (r + t) / -o;
          else for (let t = 0; t < u; ++t) h[t] = (r + t) * o;
        }
        return h;
      }
      function u(t, n, e) {
        (n = +n), (t = +t), (e = +e);
        return a(t, n, e)[2];
      }
      function h(t, n, e) {
        (n = +n), (t = +t), (e = +e);
        const i = n < t,
          r = i ? u(n, t, e) : u(t, n, e);
        return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
      }
    },
    33844: (t, n, e) => {
      e.d(n, { Ay: () => b, Gw: () => N, KI: () => R, Q1: () => r, Qh: () => k, Uw: () => a, b: () => T, ef: () => s });
      var i = e(47592);
      function r() {}
      var s = 0.7;
      var a = 1 / s;
      var o = "\\s*([+-]?\\d+)\\s*",
        u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        h = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        c = /^#([0-9a-f]{3,8})$/,
        l = new RegExp(`^rgb\\(${o},${o},${o}\\)$`),
        f = new RegExp(`^rgb\\(${h},${h},${h}\\)$`),
        _ = new RegExp(`^rgba\\(${o},${o},${o},${u}\\)$`),
        p = new RegExp(`^rgba\\(${h},${h},${h},${u}\\)$`),
        y = new RegExp(`^hsl\\(${u},${h},${h}\\)$`),
        g = new RegExp(`^hsla\\(${u},${h},${h},${u}\\)$`);
      var d = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
      (0, i.A)(r, b, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: v,
        formatHex: v,
        formatHex8: x,
        formatHsl: w,
        formatRgb: m,
        toString: m,
      });
      function v() {
        return this.rgb().formatHex();
      }
      function x() {
        return this.rgb().formatHex8();
      }
      function w() {
        return E(this).formatHsl();
      }
      function m() {
        return this.rgb().formatRgb();
      }
      function b(t) {
        var n, e;
        t = (t + "").trim().toLowerCase();
        return (n = c.exec(t))
          ? ((e = n[1].length),
            (n = parseInt(n[1], 16)),
            e === 6
              ? A(n)
              : e === 3
                ? new N(((n >> 8) & 15) | ((n >> 4) & 240), ((n >> 4) & 15) | (n & 240), ((n & 15) << 4) | (n & 15), 1)
                : e === 8
                  ? M((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
                  : e === 4
                    ? M(
                        ((n >> 12) & 15) | ((n >> 8) & 240),
                        ((n >> 8) & 15) | ((n >> 4) & 240),
                        ((n >> 4) & 15) | (n & 240),
                        (((n & 15) << 4) | (n & 15)) / 255
                      )
                    : null)
          : (n = l.exec(t))
            ? new N(n[1], n[2], n[3], 1)
            : (n = f.exec(t))
              ? new N((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
              : (n = _.exec(t))
                ? M(n[1], n[2], n[3], n[4])
                : (n = p.exec(t))
                  ? M((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
                  : (n = y.exec(t))
                    ? P(n[1], n[2] / 100, n[3] / 100, 1)
                    : (n = g.exec(t))
                      ? P(n[1], n[2] / 100, n[3] / 100, n[4])
                      : d.hasOwnProperty(t)
                        ? A(d[t])
                        : t === "transparent"
                          ? new N(NaN, NaN, NaN, 0)
                          : null;
      }
      function A(t) {
        return new N((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
      }
      function M(t, n, e, i) {
        if (i <= 0) t = n = e = NaN;
        return new N(t, n, e, i);
      }
      function T(t) {
        if (!(t instanceof r)) t = b(t);
        if (!t) return new N();
        t = t.rgb();
        return new N(t.r, t.g, t.b, t.opacity);
      }
      function k(t, n, e, i) {
        return arguments.length === 1 ? T(t) : new N(t, n, e, i == null ? 1 : i);
      }
      function N(t, n, e, i) {
        this.r = +t;
        this.g = +n;
        this.b = +e;
        this.opacity = +i;
      }
      (0, i.A)(
        N,
        k,
        (0, i.X)(r, {
          brighter(t) {
            t = t == null ? a : Math.pow(a, t);
            return new N(this.r * t, this.g * t, this.b * t, this.opacity);
          },
          darker(t) {
            t = t == null ? s : Math.pow(s, t);
            return new N(this.r * t, this.g * t, this.b * t, this.opacity);
          },
          rgb() {
            return this;
          },
          clamp() {
            return new N(D(this.r), D(this.g), D(this.b), F(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: C,
          formatHex: C,
          formatHex8: $,
          formatRgb: U,
          toString: U,
        })
      );
      function C() {
        return `#${S(this.r)}${S(this.g)}${S(this.b)}`;
      }
      function $() {
        return `#${S(this.r)}${S(this.g)}${S(this.b)}${S((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
      }
      function U() {
        const t = F(this.opacity);
        return `${t === 1 ? "rgb(" : "rgba("}${D(this.r)}, ${D(this.g)}, ${D(this.b)}${t === 1 ? ")" : `, ${t})`}`;
      }
      function F(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function D(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function S(t) {
        t = D(t);
        return (t < 16 ? "0" : "") + t.toString(16);
      }
      function P(t, n, e, i) {
        if (i <= 0) t = n = e = NaN;
        else if (e <= 0 || e >= 1) t = n = NaN;
        else if (n <= 0) t = NaN;
        return new H(t, n, e, i);
      }
      function E(t) {
        if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
        if (!(t instanceof r)) t = b(t);
        if (!t) return new H();
        if (t instanceof H) return t;
        t = t.rgb();
        var n = t.r / 255,
          e = t.g / 255,
          i = t.b / 255,
          s = Math.min(n, e, i),
          a = Math.max(n, e, i),
          o = NaN,
          u = a - s,
          h = (a + s) / 2;
        if (u) {
          if (n === a) o = (e - i) / u + (e < i) * 6;
          else if (e === a) o = (i - n) / u + 2;
          else o = (n - e) / u + 4;
          u /= h < 0.5 ? a + s : 2 - a - s;
          o *= 60;
        } else {
          u = h > 0 && h < 1 ? 0 : o;
        }
        return new H(o, u, h, t.opacity);
      }
      function R(t, n, e, i) {
        return arguments.length === 1 ? E(t) : new H(t, n, e, i == null ? 1 : i);
      }
      function H(t, n, e, i) {
        this.h = +t;
        this.s = +n;
        this.l = +e;
        this.opacity = +i;
      }
      (0, i.A)(
        H,
        R,
        (0, i.X)(r, {
          brighter(t) {
            t = t == null ? a : Math.pow(a, t);
            return new H(this.h, this.s, this.l * t, this.opacity);
          },
          darker(t) {
            t = t == null ? s : Math.pow(s, t);
            return new H(this.h, this.s, this.l * t, this.opacity);
          },
          rgb() {
            var t = (this.h % 360) + (this.h < 0) * 360,
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              i = e + (e < 0.5 ? e : 1 - e) * n,
              r = 2 * e - i;
            return new N(L(t >= 240 ? t - 240 : t + 120, r, i), L(t, r, i), L(t < 120 ? t + 240 : t - 120, r, i), this.opacity);
          },
          clamp() {
            return new H(Y(this.h), q(this.s), q(this.l), F(this.opacity));
          },
          displayable() {
            return ((0 <= this.s && this.s <= 1) || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
          },
          formatHsl() {
            const t = F(this.opacity);
            return `${t === 1 ? "hsl(" : "hsla("}${Y(this.h)}, ${q(this.s) * 100}%, ${q(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
          },
        })
      );
      function Y(t) {
        t = (t || 0) % 360;
        return t < 0 ? t + 360 : t;
      }
      function q(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function L(t, n, e) {
        return (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n) * 255;
      }
    },
    47592: (t, n, e) => {
      e.d(n, { A: () => i, X: () => r });
      function i(t, n, e) {
        t.prototype = n.prototype = e;
        e.constructor = t;
      }
      function r(t, n) {
        var e = Object.create(t.prototype);
        for (var i in n) e[i] = n[i];
        return e;
      }
    },
    14180: (t, n, e) => {
      e.d(n, { Ay: () => g, aq: () => M });
      var i = e(47592);
      var r = e(33844);
      var s = e(77689);
      const a = 18,
        o = 0.96422,
        u = 1,
        h = 0.82521,
        c = 4 / 29,
        l = 6 / 29,
        f = 3 * l * l,
        _ = l * l * l;
      function p(t) {
        if (t instanceof d) return new d(t.l, t.a, t.b, t.opacity);
        if (t instanceof T) return k(t);
        if (!(t instanceof r.Gw)) t = (0, r.b)(t);
        var n = m(t.r),
          e = m(t.g),
          i = m(t.b),
          s = v((0.2225045 * n + 0.7168786 * e + 0.0606169 * i) / u),
          a,
          c;
        if (n === e && e === i) a = c = s;
        else {
          a = v((0.4360747 * n + 0.3850649 * e + 0.1430804 * i) / o);
          c = v((0.0139322 * n + 0.0971045 * e + 0.7141733 * i) / h);
        }
        return new d(116 * s - 16, 500 * (a - s), 200 * (s - c), t.opacity);
      }
      function y(t, n) {
        return new d(t, 0, 0, n == null ? 1 : n);
      }
      function g(t, n, e, i) {
        return arguments.length === 1 ? p(t) : new d(t, n, e, i == null ? 1 : i);
      }
      function d(t, n, e, i) {
        this.l = +t;
        this.a = +n;
        this.b = +e;
        this.opacity = +i;
      }
      (0, i.A)(
        d,
        g,
        (0, i.X)(r.Q1, {
          brighter(t) {
            return new d(this.l + a * (t == null ? 1 : t), this.a, this.b, this.opacity);
          },
          darker(t) {
            return new d(this.l - a * (t == null ? 1 : t), this.a, this.b, this.opacity);
          },
          rgb() {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;
            n = o * x(n);
            t = u * x(t);
            e = h * x(e);
            return new r.Gw(
              w(3.1338561 * n - 1.6168667 * t - 0.4906146 * e),
              w(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
              w(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
              this.opacity
            );
          },
        })
      );
      function v(t) {
        return t > _ ? Math.pow(t, 1 / 3) : t / f + c;
      }
      function x(t) {
        return t > l ? t * t * t : f * (t - c);
      }
      function w(t) {
        return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
      }
      function m(t) {
        return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function b(t) {
        if (t instanceof T) return new T(t.h, t.c, t.l, t.opacity);
        if (!(t instanceof d)) t = p(t);
        if (t.a === 0 && t.b === 0) return new T(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * s.u;
        return new T(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      }
      function A(t, n, e, i) {
        return arguments.length === 1 ? b(t) : new T(e, n, t, i == null ? 1 : i);
      }
      function M(t, n, e, i) {
        return arguments.length === 1 ? b(t) : new T(t, n, e, i == null ? 1 : i);
      }
      function T(t, n, e, i) {
        this.h = +t;
        this.c = +n;
        this.l = +e;
        this.opacity = +i;
      }
      function k(t) {
        if (isNaN(t.h)) return new d(t.l, 0, 0, t.opacity);
        var n = t.h * s.F;
        return new d(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      (0, i.A)(
        T,
        M,
        (0, i.X)(r.Q1, {
          brighter(t) {
            return new T(this.h, this.c, this.l + a * (t == null ? 1 : t), this.opacity);
          },
          darker(t) {
            return new T(this.h, this.c, this.l - a * (t == null ? 1 : t), this.opacity);
          },
          rgb() {
            return k(this).rgb();
          },
        })
      );
    },
    77689: (t, n, e) => {
      e.d(n, { F: () => i, u: () => r });
      const i = Math.PI / 180;
      const r = 180 / Math.PI;
    },
    62996: (t, n, e) => {
      e.d(n, { A: () => h });
      var i = { value: () => {} };
      function r() {
        for (var t = 0, n = arguments.length, e = {}, i; t < n; ++t) {
          if (!(i = arguments[t] + "") || i in e || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
          e[i] = [];
        }
        return new s(e);
      }
      function s(t) {
        this._ = t;
      }
      function a(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              i = t.indexOf(".");
            if (i >= 0) (e = t.slice(i + 1)), (t = t.slice(0, i));
            if (t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return { type: t, name: e };
          });
      }
      s.prototype = r.prototype = {
        constructor: s,
        on: function (t, n) {
          var e = this._,
            i = a(t + "", e),
            r,
            s = -1,
            h = i.length;
          if (arguments.length < 2) {
            while (++s < h) if ((r = (t = i[s]).type) && (r = o(e[r], t.name))) return r;
            return;
          }
          if (n != null && typeof n !== "function") throw new Error("invalid callback: " + n);
          while (++s < h) {
            if ((r = (t = i[s]).type)) e[r] = u(e[r], t.name, n);
            else if (n == null) for (r in e) e[r] = u(e[r], t.name, null);
          }
          return this;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new s(t);
        },
        call: function (t, n) {
          if ((r = arguments.length - 2) > 0) for (var e = new Array(r), i = 0, r, s; i < r; ++i) e[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (s = this._[t], i = 0, r = s.length; i < r; ++i) s[i].value.apply(n, e);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var i = this._[t], r = 0, s = i.length; r < s; ++r) i[r].value.apply(n, e);
        },
      };
      function o(t, n) {
        for (var e = 0, i = t.length, r; e < i; ++e) {
          if ((r = t[e]).name === n) {
            return r.value;
          }
        }
      }
      function u(t, n, e) {
        for (var r = 0, s = t.length; r < s; ++r) {
          if (t[r].name === n) {
            (t[r] = i), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        }
        if (e != null) t.push({ name: n, value: e });
        return t;
      }
      const h = r;
    },
    24626: (t, n, e) => {
      e.d(n, { GP: () => s, s: () => a });
      var i = e(25216);
      var r;
      var s;
      var a;
      o({ thousands: ",", grouping: [3], currency: ["$", ""] });
      function o(t) {
        r = (0, i.A)(t);
        s = r.format;
        a = r.formatPrefix;
        return r;
      }
    },
    40886: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(23735);
      function r(t) {
        return (t = (0, i.f)(Math.abs(t))), t ? t[1] : NaN;
      }
    },
    23735: (t, n, e) => {
      e.d(n, { A: () => i, f: () => r });
      function i(t) {
        return Math.abs((t = Math.round(t))) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
      }
      function r(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e,
          i = t.slice(0, e);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)];
      }
    },
    71688: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function r(t) {
        if (!(n = i.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new s({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      r.prototype = s.prototype;
      function s(t) {
        this.fill = t.fill === undefined ? " " : t.fill + "";
        this.align = t.align === undefined ? ">" : t.align + "";
        this.sign = t.sign === undefined ? "-" : t.sign + "";
        this.symbol = t.symbol === undefined ? "" : t.symbol + "";
        this.zero = !!t.zero;
        this.width = t.width === undefined ? undefined : +t.width;
        this.comma = !!t.comma;
        this.precision = t.precision === undefined ? undefined : +t.precision;
        this.trim = !!t.trim;
        this.type = t.type === undefined ? "" : t.type + "";
      }
      s.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (this.width === undefined ? "" : Math.max(1, this.width | 0)) +
          (this.comma ? "," : "") +
          (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) +
          (this.trim ? "~" : "") +
          this.type
        );
      };
    },
    25216: (t, n, e) => {
      e.d(n, { A: () => g });
      var i = e(40886);
      function r(t, n) {
        return function (e, i) {
          var r = e.length,
            s = [],
            a = 0,
            o = t[0],
            u = 0;
          while (r > 0 && o > 0) {
            if (u + o + 1 > i) o = Math.max(1, i - u);
            s.push(e.substring((r -= o), r + o));
            if ((u += o + 1) > i) break;
            o = t[(a = (a + 1) % t.length)];
          }
          return s.reverse().join(n);
        };
      }
      function s(t) {
        return function (n) {
          return n.replace(/[0-9]/g, function (n) {
            return t[+n];
          });
        };
      }
      var a = e(71688);
      function o(t) {
        t: for (var n = t.length, e = 1, i = -1, r; e < n; ++e) {
          switch (t[e]) {
            case ".":
              i = r = e;
              break;
            case "0":
              if (i === 0) i = e;
              r = e;
              break;
            default:
              if (!+t[e]) break t;
              if (i > 0) i = 0;
              break;
          }
        }
        return i > 0 ? t.slice(0, i) + t.slice(r + 1) : t;
      }
      var u = e(23735);
      var h;
      function c(t, n) {
        var e = (0, u.f)(t, n);
        if (!e) return t + "";
        var i = e[0],
          r = e[1],
          s = r - (h = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1,
          a = i.length;
        return s === a
          ? i
          : s > a
            ? i + new Array(s - a + 1).join("0")
            : s > 0
              ? i.slice(0, s) + "." + i.slice(s)
              : "0." + new Array(1 - s).join("0") + (0, u.f)(t, Math.max(0, n + s - 1))[0];
      }
      function l(t, n) {
        var e = (0, u.f)(t, n);
        if (!e) return t + "";
        var i = e[0],
          r = e[1];
        return r < 0
          ? "0." + new Array(-r).join("0") + i
          : i.length > r + 1
            ? i.slice(0, r + 1) + "." + i.slice(r + 1)
            : i + new Array(r - i.length + 2).join("0");
      }
      const f = {
        "%": (t, n) => (t * 100).toFixed(n),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: u.A,
        e: (t, n) => t.toExponential(n),
        f: (t, n) => t.toFixed(n),
        g: (t, n) => t.toPrecision(n),
        o: (t) => Math.round(t).toString(8),
        p: (t, n) => l(t * 100, n),
        r: l,
        s: c,
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function _(t) {
        return t;
      }
      var p = Array.prototype.map,
        y = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      function g(t) {
        var n = t.grouping === undefined || t.thousands === undefined ? _ : r(p.call(t.grouping, Number), t.thousands + ""),
          e = t.currency === undefined ? "" : t.currency[0] + "",
          u = t.currency === undefined ? "" : t.currency[1] + "",
          c = t.decimal === undefined ? "." : t.decimal + "",
          l = t.numerals === undefined ? _ : s(p.call(t.numerals, String)),
          g = t.percent === undefined ? "%" : t.percent + "",
          d = t.minus === undefined ? "−" : t.minus + "",
          v = t.nan === undefined ? "NaN" : t.nan + "";
        function x(t) {
          t = (0, a.A)(t);
          var i = t.fill,
            r = t.align,
            s = t.sign,
            _ = t.symbol,
            p = t.zero,
            x = t.width,
            w = t.comma,
            m = t.precision,
            b = t.trim,
            A = t.type;
          if (A === "n") (w = true), (A = "g");
          else if (!f[A]) m === undefined && (m = 12), (b = true), (A = "g");
          if (p || (i === "0" && r === "=")) (p = true), (i = "0"), (r = "=");
          var M = _ === "$" ? e : _ === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "",
            T = _ === "$" ? u : /[%p]/.test(A) ? g : "";
          var k = f[A],
            N = /[defgprs%]/.test(A);
          m = m === undefined ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m));
          function C(t) {
            var e = M,
              a = T,
              u,
              f,
              _;
            if (A === "c") {
              a = k(t) + a;
              t = "";
            } else {
              t = +t;
              var g = t < 0 || 1 / t < 0;
              t = isNaN(t) ? v : k(Math.abs(t), m);
              if (b) t = o(t);
              if (g && +t === 0 && s !== "+") g = false;
              e = (g ? (s === "(" ? s : d) : s === "-" || s === "(" ? "" : s) + e;
              a = (A === "s" ? y[8 + h / 3] : "") + a + (g && s === "(" ? ")" : "");
              if (N) {
                (u = -1), (f = t.length);
                while (++u < f) {
                  if (((_ = t.charCodeAt(u)), 48 > _ || _ > 57)) {
                    a = (_ === 46 ? c + t.slice(u + 1) : t.slice(u)) + a;
                    t = t.slice(0, u);
                    break;
                  }
                }
              }
            }
            if (w && !p) t = n(t, Infinity);
            var C = e.length + t.length + a.length,
              $ = C < x ? new Array(x - C + 1).join(i) : "";
            if (w && p) (t = n($ + t, $.length ? x - a.length : Infinity)), ($ = "");
            switch (r) {
              case "<":
                t = e + t + a + $;
                break;
              case "=":
                t = e + $ + t + a;
                break;
              case "^":
                t = $.slice(0, (C = $.length >> 1)) + e + t + a + $.slice(C);
                break;
              default:
                t = $ + e + t + a;
                break;
            }
            return l(t);
          }
          C.toString = function () {
            return t + "";
          };
          return C;
        }
        function w(t, n) {
          var e = x(((t = (0, a.A)(t)), (t.type = "f"), t)),
            r = Math.max(-8, Math.min(8, Math.floor((0, i.A)(n) / 3))) * 3,
            s = Math.pow(10, -r),
            o = y[8 + r / 3];
          return function (t) {
            return e(s * t) + o;
          };
        }
        return { format: x, formatPrefix: w };
      }
    },
    93391: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(40886);
      function r(t) {
        return Math.max(0, -(0, i.A)(Math.abs(t)));
      }
    },
    86093: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(40886);
      function r(t, n) {
        return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, i.A)(n) / 3))) * 3 - (0, i.A)(Math.abs(t)));
      }
    },
    78209: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(40886);
      function r(t, n) {
        (t = Math.abs(t)), (n = Math.abs(n) - t);
        return Math.max(0, (0, i.A)(n) - (0, i.A)(t)) + 1;
      }
    },
    69266: (t, n, e) => {
      e.d(n, { $: () => a, A: () => s });
      var i = e(21406);
      var r = e(48561);
      function s(t, n) {
        return ((0, r.p)(n) ? r.A : a)(t, n);
      }
      function a(t, n) {
        var e = n ? n.length : 0,
          r = t ? Math.min(e, t.length) : 0,
          s = new Array(r),
          a = new Array(e),
          o;
        for (o = 0; o < r; ++o) s[o] = (0, i.A)(t[o], n[o]);
        for (; o < e; ++o) a[o] = n[o];
        return function (t) {
          for (o = 0; o < r; ++o) a[o] = s[o](t);
          return a;
        };
      }
    },
    13029: (t, n, e) => {
      e.d(n, { A: () => r, H: () => i });
      function i(t, n, e, i, r) {
        var s = t * t,
          a = s * t;
        return ((1 - 3 * t + 3 * s - a) * n + (4 - 6 * s + 3 * a) * e + (1 + 3 * t + 3 * s - 3 * a) * i + a * r) / 6;
      }
      function r(t) {
        var n = t.length - 1;
        return function (e) {
          var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            s = t[r],
            a = t[r + 1],
            o = r > 0 ? t[r - 1] : 2 * s - a,
            u = r < n - 1 ? t[r + 2] : 2 * a - s;
          return i((e - r / n) * n, o, s, a, u);
        };
      }
    },
    64425: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(13029);
      function r(t) {
        var n = t.length;
        return function (e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            s = t[(r + n - 1) % n],
            a = t[r % n],
            o = t[(r + 1) % n],
            u = t[(r + 2) % n];
          return (0, i.H)((e - r / n) * n, s, a, o, u);
        };
      }
    },
    6504: (t, n, e) => {
      e.d(n, { Ay: () => u, lG: () => a, uN: () => o });
      var i = e(80319);
      function r(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function s(t, n, e) {
        return (
          (t = Math.pow(t, e)),
          (n = Math.pow(n, e) - t),
          (e = 1 / e),
          function (i) {
            return Math.pow(t + i * n, e);
          }
        );
      }
      function a(t, n) {
        var e = n - t;
        return e ? r(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : (0, i.A)(isNaN(t) ? n : t);
      }
      function o(t) {
        return (t = +t) === 1
          ? u
          : function (n, e) {
              return e - n ? s(n, e, t) : (0, i.A)(isNaN(n) ? e : n);
            };
      }
      function u(t, n) {
        var e = n - t;
        return e ? r(t, e) : (0, i.A)(isNaN(t) ? n : t);
      }
    },
    80319: (t, n, e) => {
      e.d(n, { A: () => i });
      const i = (t) => () => t;
    },
    57007: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        var e = new Date();
        return (
          (t = +t),
          (n = +n),
          function (i) {
            return e.setTime(t * (1 - i) + n * i), e;
          }
        );
      }
    },
    67360: (t, n, e) => {
      e.r(n);
      e.d(n, {
        interpolate: () => i.A,
        interpolateArray: () => r.A,
        interpolateBasis: () => s.A,
        interpolateBasisClosed: () => a.A,
        interpolateCubehelix: () => G,
        interpolateCubehelixLong: () => J,
        interpolateDate: () => o.A,
        interpolateDiscrete: () => u,
        interpolateHcl: () => U,
        interpolateHclLong: () => F,
        interpolateHsl: () => T,
        interpolateHslLong: () => k,
        interpolateHue: () => c,
        interpolateLab: () => C,
        interpolateNumber: () => l.A,
        interpolateNumberArray: () => f.A,
        interpolateObject: () => _.A,
        interpolateRgb: () => b.Ay,
        interpolateRgbBasis: () => b.Ik,
        interpolateRgbBasisClosed: () => b.uL,
        interpolateRound: () => p.A,
        interpolateString: () => y.A,
        interpolateTransformCss: () => g.T,
        interpolateTransformSvg: () => g.I,
        interpolateZoom: () => m,
        piecewise: () => Z.A,
        quantize: () => Q,
      });
      var i = e(21406);
      var r = e(69266);
      var s = e(13029);
      var a = e(64425);
      var o = e(57007);
      function u(t) {
        var n = t.length;
        return function (e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      }
      var h = e(6504);
      function c(t, n) {
        var e = (0, h.lG)(+t, +n);
        return function (t) {
          var n = e(t);
          return n - 360 * Math.floor(n / 360);
        };
      }
      var l = e(85566);
      var f = e(48561);
      var _ = e(86088);
      var p = e(15307);
      var y = e(23318);
      var g = e(39480);
      var d = 1e-12;
      function v(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      function x(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2;
      }
      function w(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1);
      }
      const m = (function t(n, e, i) {
        function r(t, r) {
          var s = t[0],
            a = t[1],
            o = t[2],
            u = r[0],
            h = r[1],
            c = r[2],
            l = u - s,
            f = h - a,
            _ = l * l + f * f,
            p,
            y;
          if (_ < d) {
            y = Math.log(c / o) / n;
            p = function (t) {
              return [s + t * l, a + t * f, o * Math.exp(n * t * y)];
            };
          } else {
            var g = Math.sqrt(_),
              m = (c * c - o * o + i * _) / (2 * o * e * g),
              b = (c * c - o * o - i * _) / (2 * c * e * g),
              A = Math.log(Math.sqrt(m * m + 1) - m),
              M = Math.log(Math.sqrt(b * b + 1) - b);
            y = (M - A) / n;
            p = function (t) {
              var i = t * y,
                r = v(A),
                u = (o / (e * g)) * (r * w(n * i + A) - x(A));
              return [s + u * l, a + u * f, (o * r) / v(n * i + A)];
            };
          }
          p.duration = (y * 1e3 * n) / Math.SQRT2;
          return p;
        }
        r.rho = function (n) {
          var e = Math.max(0.001, +n),
            i = e * e,
            r = i * i;
          return t(e, i, r);
        };
        return r;
      })(Math.SQRT2, 2, 4);
      var b = e(79948);
      var A = e(33844);
      function M(t) {
        return function (n, e) {
          var i = t((n = (0, A.KI)(n)).h, (e = (0, A.KI)(e)).h),
            r = (0, h.Ay)(n.s, e.s),
            s = (0, h.Ay)(n.l, e.l),
            a = (0, h.Ay)(n.opacity, e.opacity);
          return function (t) {
            n.h = i(t);
            n.s = r(t);
            n.l = s(t);
            n.opacity = a(t);
            return n + "";
          };
        };
      }
      const T = M(h.lG);
      var k = M(h.Ay);
      var N = e(14180);
      function C(t, n) {
        var e = (0, h.Ay)((t = (0, N.Ay)(t)).l, (n = (0, N.Ay)(n)).l),
          i = (0, h.Ay)(t.a, n.a),
          r = (0, h.Ay)(t.b, n.b),
          s = (0, h.Ay)(t.opacity, n.opacity);
        return function (n) {
          t.l = e(n);
          t.a = i(n);
          t.b = r(n);
          t.opacity = s(n);
          return t + "";
        };
      }
      function $(t) {
        return function (n, e) {
          var i = t((n = (0, N.aq)(n)).h, (e = (0, N.aq)(e)).h),
            r = (0, h.Ay)(n.c, e.c),
            s = (0, h.Ay)(n.l, e.l),
            a = (0, h.Ay)(n.opacity, e.opacity);
          return function (t) {
            n.h = i(t);
            n.c = r(t);
            n.l = s(t);
            n.opacity = a(t);
            return n + "";
          };
        };
      }
      const U = $(h.lG);
      var F = $(h.Ay);
      var D = e(47592);
      var S = e(77689);
      var P = -0.14861,
        E = +1.78277,
        R = -0.29227,
        H = -0.90649,
        Y = +1.97294,
        q = Y * H,
        L = Y * E,
        j = E * R - H * P;
      function z(t) {
        if (t instanceof I) return new I(t.h, t.s, t.l, t.opacity);
        if (!(t instanceof A.Gw)) t = (0, A.b)(t);
        var n = t.r / 255,
          e = t.g / 255,
          i = t.b / 255,
          r = (j * i + q * n - L * e) / (j + q - L),
          s = i - r,
          a = (Y * (e - r) - R * s) / H,
          o = Math.sqrt(a * a + s * s) / (Y * r * (1 - r)),
          u = o ? Math.atan2(a, s) * S.u - 120 : NaN;
        return new I(u < 0 ? u + 360 : u, o, r, t.opacity);
      }
      function X(t, n, e, i) {
        return arguments.length === 1 ? z(t) : new I(t, n, e, i == null ? 1 : i);
      }
      function I(t, n, e, i) {
        this.h = +t;
        this.s = +n;
        this.l = +e;
        this.opacity = +i;
      }
      (0, D.A)(
        I,
        X,
        (0, D.X)(A.Q1, {
          brighter(t) {
            t = t == null ? A.Uw : Math.pow(A.Uw, t);
            return new I(this.h, this.s, this.l * t, this.opacity);
          },
          darker(t) {
            t = t == null ? A.ef : Math.pow(A.ef, t);
            return new I(this.h, this.s, this.l * t, this.opacity);
          },
          rgb() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * S.F,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              i = Math.cos(t),
              r = Math.sin(t);
            return new A.Gw(255 * (n + e * (P * i + E * r)), 255 * (n + e * (R * i + H * r)), 255 * (n + e * (Y * i)), this.opacity);
          },
        })
      );
      function O(t) {
        return (function n(e) {
          e = +e;
          function i(n, i) {
            var r = t((n = X(n)).h, (i = X(i)).h),
              s = (0, h.Ay)(n.s, i.s),
              a = (0, h.Ay)(n.l, i.l),
              o = (0, h.Ay)(n.opacity, i.opacity);
            return function (t) {
              n.h = r(t);
              n.s = s(t);
              n.l = a(Math.pow(t, e));
              n.opacity = o(t);
              return n + "";
            };
          }
          i.gamma = n;
          return i;
        })(1);
      }
      const G = O(h.lG);
      var J = O(h.Ay);
      var Z = e(99793);
      function Q(t, n) {
        var e = new Array(n);
        for (var i = 0; i < n; ++i) e[i] = t(i / (n - 1));
        return e;
      }
    },
    85566: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return t * (1 - e) + n * e;
          }
        );
      }
    },
    48561: (t, n, e) => {
      e.d(n, { A: () => i, p: () => r });
      function i(t, n) {
        if (!n) n = [];
        var e = t ? Math.min(n.length, t.length) : 0,
          i = n.slice(),
          r;
        return function (s) {
          for (r = 0; r < e; ++r) i[r] = t[r] * (1 - s) + n[r] * s;
          return i;
        };
      }
      function r(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
    },
    86088: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(21406);
      function r(t, n) {
        var e = {},
          r = {},
          s;
        if (t === null || typeof t !== "object") t = {};
        if (n === null || typeof n !== "object") n = {};
        for (s in n) {
          if (s in t) {
            e[s] = (0, i.A)(t[s], n[s]);
          } else {
            r[s] = n[s];
          }
        }
        return function (t) {
          for (s in e) r[s] = e[s](t);
          return r;
        };
      }
    },
    99793: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(21406);
      function r(t, n) {
        if (n === undefined) (n = t), (t = i.A);
        var e = 0,
          r = n.length - 1,
          s = n[0],
          a = new Array(r < 0 ? 0 : r);
        while (e < r) a[e] = t(s, (s = n[++e]));
        return function (t) {
          var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
          return a[n](t - n);
        };
      }
    },
    79948: (t, n, e) => {
      e.d(n, { Ay: () => o, Ik: () => h, uL: () => c });
      var i = e(33844);
      var r = e(13029);
      var s = e(64425);
      var a = e(6504);
      const o = (function t(n) {
        var e = (0, a.uN)(n);
        function r(t, n) {
          var r = e((t = (0, i.Qh)(t)).r, (n = (0, i.Qh)(n)).r),
            s = e(t.g, n.g),
            o = e(t.b, n.b),
            u = (0, a.Ay)(t.opacity, n.opacity);
          return function (n) {
            t.r = r(n);
            t.g = s(n);
            t.b = o(n);
            t.opacity = u(n);
            return t + "";
          };
        }
        r.gamma = t;
        return r;
      })(1);
      function u(t) {
        return function (n) {
          var e = n.length,
            r = new Array(e),
            s = new Array(e),
            a = new Array(e),
            o,
            u;
          for (o = 0; o < e; ++o) {
            u = (0, i.Qh)(n[o]);
            r[o] = u.r || 0;
            s[o] = u.g || 0;
            a[o] = u.b || 0;
          }
          r = t(r);
          s = t(s);
          a = t(a);
          u.opacity = 1;
          return function (t) {
            u.r = r(t);
            u.g = s(t);
            u.b = a(t);
            return u + "";
          };
        };
      }
      var h = u(r.A);
      var c = u(s.A);
    },
    15307: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return Math.round(t * (1 - e) + n * e);
          }
        );
      }
    },
    23318: (t, n, e) => {
      e.d(n, { A: () => u });
      var i = e(85566);
      var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        s = new RegExp(r.source, "g");
      function a(t) {
        return function () {
          return t;
        };
      }
      function o(t) {
        return function (n) {
          return t(n) + "";
        };
      }
      function u(t, n) {
        var e = (r.lastIndex = s.lastIndex = 0),
          u,
          h,
          c,
          l = -1,
          f = [],
          _ = [];
        (t = t + ""), (n = n + "");
        while ((u = r.exec(t)) && (h = s.exec(n))) {
          if ((c = h.index) > e) {
            c = n.slice(e, c);
            if (f[l]) f[l] += c;
            else f[++l] = c;
          }
          if ((u = u[0]) === (h = h[0])) {
            if (f[l]) f[l] += h;
            else f[++l] = h;
          } else {
            f[++l] = null;
            _.push({ i: l, x: (0, i.A)(u, h) });
          }
          e = s.lastIndex;
        }
        if (e < n.length) {
          c = n.slice(e);
          if (f[l]) f[l] += c;
          else f[++l] = c;
        }
        return f.length < 2
          ? _[0]
            ? o(_[0].x)
            : a(n)
          : ((n = _.length),
            function (t) {
              for (var e = 0, i; e < n; ++e) f[(i = _[e]).i] = i.x(t);
              return f.join("");
            });
      }
    },
    39480: (t, n, e) => {
      e.d(n, { T: () => l, I: () => f });
      var i = e(85566);
      var r = 180 / Math.PI;
      var s = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      function a(t, n, e, i, s, a) {
        var o, u, h;
        if ((o = Math.sqrt(t * t + n * n))) (t /= o), (n /= o);
        if ((h = t * e + n * i)) (e -= t * h), (i -= n * h);
        if ((u = Math.sqrt(e * e + i * i))) (e /= u), (i /= u), (h /= u);
        if (t * i < n * e) (t = -t), (n = -n), (h = -h), (o = -o);
        return { translateX: s, translateY: a, rotate: Math.atan2(n, t) * r, skewX: Math.atan(h) * r, scaleX: o, scaleY: u };
      }
      var o;
      function u(t) {
        const n = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
        return n.isIdentity ? s : a(n.a, n.b, n.c, n.d, n.e, n.f);
      }
      function h(t) {
        if (t == null) return s;
        if (!o) o = document.createElementNS("http://www.w3.org/2000/svg", "g");
        o.setAttribute("transform", t);
        if (!(t = o.transform.baseVal.consolidate())) return s;
        t = t.matrix;
        return a(t.a, t.b, t.c, t.d, t.e, t.f);
      }
      function c(t, n, e, r) {
        function s(t) {
          return t.length ? t.pop() + " " : "";
        }
        function a(t, r, s, a, o, u) {
          if (t !== s || r !== a) {
            var h = o.push("translate(", null, n, null, e);
            u.push({ i: h - 4, x: (0, i.A)(t, s) }, { i: h - 2, x: (0, i.A)(r, a) });
          } else if (s || a) {
            o.push("translate(" + s + n + a + e);
          }
        }
        function o(t, n, e, a) {
          if (t !== n) {
            if (t - n > 180) n += 360;
            else if (n - t > 180) t += 360;
            a.push({ i: e.push(s(e) + "rotate(", null, r) - 2, x: (0, i.A)(t, n) });
          } else if (n) {
            e.push(s(e) + "rotate(" + n + r);
          }
        }
        function u(t, n, e, a) {
          if (t !== n) {
            a.push({ i: e.push(s(e) + "skewX(", null, r) - 2, x: (0, i.A)(t, n) });
          } else if (n) {
            e.push(s(e) + "skewX(" + n + r);
          }
        }
        function h(t, n, e, r, a, o) {
          if (t !== e || n !== r) {
            var u = a.push(s(a) + "scale(", null, ",", null, ")");
            o.push({ i: u - 4, x: (0, i.A)(t, e) }, { i: u - 2, x: (0, i.A)(n, r) });
          } else if (e !== 1 || r !== 1) {
            a.push(s(a) + "scale(" + e + "," + r + ")");
          }
        }
        return function (n, e) {
          var i = [],
            r = [];
          (n = t(n)), (e = t(e));
          a(n.translateX, n.translateY, e.translateX, e.translateY, i, r);
          o(n.rotate, e.rotate, i, r);
          u(n.skewX, e.skewX, i, r);
          h(n.scaleX, n.scaleY, e.scaleX, e.scaleY, i, r);
          n = e = null;
          return function (t) {
            var n = -1,
              e = r.length,
              s;
            while (++n < e) i[(s = r[n]).i] = s.x(t);
            return i.join("");
          };
        };
      }
      var l = c(u, "px, ", "px)", "deg)");
      var f = c(h, ", ", ")", ")");
    },
    21406: (t, n, e) => {
      e.d(n, { A: () => f });
      var i = e(33844);
      var r = e(79948);
      var s = e(69266);
      var a = e(57007);
      var o = e(85566);
      var u = e(86088);
      var h = e(23318);
      var c = e(80319);
      var l = e(48561);
      function f(t, n) {
        var e = typeof n,
          f;
        return n == null || e === "boolean"
          ? (0, c.A)(n)
          : (e === "number"
              ? o.A
              : e === "string"
                ? (f = (0, i.Ay)(n))
                  ? ((n = f), r.Ay)
                  : h.A
                : n instanceof i.Ay
                  ? r.Ay
                  : n instanceof Date
                    ? a.A
                    : (0, l.p)(n)
                      ? l.A
                      : Array.isArray(n)
                        ? s.$
                        : (typeof n.valueOf !== "function" && typeof n.toString !== "function") || isNaN(n)
                          ? u.A
                          : o.A)(t, n);
      }
    },
    69450: (t, n, e) => {
      e.d(n, { Ae: () => c, wA: () => h });
      const i = Math.PI,
        r = 2 * i,
        s = 1e-6,
        a = r - s;
      function o(t) {
        this._ += t[0];
        for (let n = 1, e = t.length; n < e; ++n) {
          this._ += arguments[n] + t[n];
        }
      }
      function u(t) {
        let n = Math.floor(t);
        if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
        if (n > 15) return o;
        const e = 10 ** n;
        return function (t) {
          this._ += t[0];
          for (let n = 1, i = t.length; n < i; ++n) {
            this._ += Math.round(arguments[n] * e) / e + t[n];
          }
        };
      }
      class h {
        constructor(t) {
          this._x0 = this._y0 = this._x1 = this._y1 = null;
          this._ = "";
          this._append = t == null ? o : u(t);
        }
        moveTo(t, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
        }
        closePath() {
          if (this._x1 !== null) {
            (this._x1 = this._x0), (this._y1 = this._y0);
            this._append`Z`;
          }
        }
        lineTo(t, n) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
        }
        quadraticCurveTo(t, n, e, i) {
          this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +i)}`;
        }
        bezierCurveTo(t, n, e, i, r, s) {
          this._append`C${+t},${+n},${+e},${+i},${(this._x1 = +r)},${(this._y1 = +s)}`;
        }
        arcTo(t, n, e, r, a) {
          (t = +t), (n = +n), (e = +e), (r = +r), (a = +a);
          if (a < 0) throw new Error(`negative radius: ${a}`);
          let o = this._x1,
            u = this._y1,
            h = e - t,
            c = r - n,
            l = o - t,
            f = u - n,
            _ = l * l + f * f;
          if (this._x1 === null) {
            this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
          } else if (!(_ > s));
          else if (!(Math.abs(f * h - c * l) > s) || !a) {
            this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
          } else {
            let p = e - o,
              y = r - u,
              g = h * h + c * c,
              d = p * p + y * y,
              v = Math.sqrt(g),
              x = Math.sqrt(_),
              w = a * Math.tan((i - Math.acos((g + _ - d) / (2 * v * x))) / 2),
              m = w / x,
              b = w / v;
            if (Math.abs(m - 1) > s) {
              this._append`L${t + m * l},${n + m * f}`;
            }
            this._append`A${a},${a},0,0,${+(f * p > l * y)},${(this._x1 = t + b * h)},${(this._y1 = n + b * c)}`;
          }
        }
        arc(t, n, e, o, u, h) {
          (t = +t), (n = +n), (e = +e), (h = !!h);
          if (e < 0) throw new Error(`negative radius: ${e}`);
          let c = e * Math.cos(o),
            l = e * Math.sin(o),
            f = t + c,
            _ = n + l,
            p = 1 ^ h,
            y = h ? o - u : u - o;
          if (this._x1 === null) {
            this._append`M${f},${_}`;
          } else if (Math.abs(this._x1 - f) > s || Math.abs(this._y1 - _) > s) {
            this._append`L${f},${_}`;
          }
          if (!e) return;
          if (y < 0) y = (y % r) + r;
          if (y > a) {
            this._append`A${e},${e},0,1,${p},${t - c},${n - l}A${e},${e},0,1,${p},${(this._x1 = f)},${(this._y1 = _)}`;
          } else if (y > s) {
            this._append`A${e},${e},0,${+(y >= i)},${p},${(this._x1 = t + e * Math.cos(u))},${(this._y1 = n + e * Math.sin(u))}`;
          }
        }
        rect(t, n, e, i) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(e = +e)}v${+i}h${-e}Z`;
        }
        toString() {
          return this._;
        }
      }
      function c() {
        return new h();
      }
      c.prototype = h.prototype;
      function l(t = 3) {
        return new h(+t);
      }
    },
    58177: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t) {
        var n = (t.length / 6) | 0,
          e = new Array(n),
          i = 0;
        while (i < n) e[i] = "#" + t.slice(i * 6, ++i * 6);
        return e;
      }
    },
    52178: (t, n, e) => {
      e.d(n, { C: () => y, Ay: () => d, D_: () => c, Gu: () => g });
      var i = e(71363);
      var r = e(21406);
      var s = e(85566);
      var a = e(15307);
      function o(t) {
        return function () {
          return t;
        };
      }
      var u = e(60117);
      var h = [0, 1];
      function c(t) {
        return t;
      }
      function l(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : o(isNaN(n) ? NaN : 0.5);
      }
      function f(t, n) {
        var e;
        if (t > n) (e = t), (t = n), (n = e);
        return function (e) {
          return Math.max(t, Math.min(n, e));
        };
      }
      function _(t, n, e) {
        var i = t[0],
          r = t[1],
          s = n[0],
          a = n[1];
        if (r < i) (i = l(r, i)), (s = e(a, s));
        else (i = l(i, r)), (s = e(s, a));
        return function (t) {
          return s(i(t));
        };
      }
      function p(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
          s = new Array(r),
          a = new Array(r),
          o = -1;
        if (t[r] < t[0]) {
          t = t.slice().reverse();
          n = n.slice().reverse();
        }
        while (++o < r) {
          s[o] = l(t[o], t[o + 1]);
          a[o] = e(n[o], n[o + 1]);
        }
        return function (n) {
          var e = (0, i.Ay)(t, n, 1, r) - 1;
          return a[e](s[e](n));
        };
      }
      function y(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
      }
      function g() {
        var t = h,
          n = h,
          e = r.A,
          i,
          o,
          l,
          y = c,
          g,
          d,
          v;
        function x() {
          var e = Math.min(t.length, n.length);
          if (y !== c) y = f(t[0], t[e - 1]);
          g = e > 2 ? p : _;
          d = v = null;
          return w;
        }
        function w(r) {
          return r == null || isNaN((r = +r)) ? l : (d || (d = g(t.map(i), n, e)))(i(y(r)));
        }
        w.invert = function (e) {
          return y(o((v || (v = g(n, t.map(i), s.A)))(e)));
        };
        w.domain = function (n) {
          return arguments.length ? ((t = Array.from(n, u.A)), x()) : t.slice();
        };
        w.range = function (t) {
          return arguments.length ? ((n = Array.from(t)), x()) : n.slice();
        };
        w.rangeRound = function (t) {
          return (n = Array.from(t)), (e = a.A), x();
        };
        w.clamp = function (t) {
          return arguments.length ? ((y = t ? true : c), x()) : y !== c;
        };
        w.interpolate = function (t) {
          return arguments.length ? ((e = t), x()) : e;
        };
        w.unknown = function (t) {
          return arguments.length ? ((l = t), w) : l;
        };
        return function (t, n) {
          (i = t), (o = n);
          return x();
        };
      }
      function d() {
        return g()(c, c);
      }
    },
    25758: (t, n, e) => {
      e.d(n, { C: () => i, K: () => r });
      function i(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
            break;
        }
        return this;
      }
      function r(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1: {
            if (typeof t === "function") this.interpolator(t);
            else this.range(t);
            break;
          }
          default: {
            this.domain(t);
            if (typeof n === "function") this.interpolator(n);
            else this.range(n);
            break;
          }
        }
        return this;
      }
    },
    20481: (t, n, e) => {
      e.d(n, { A: () => u, C: () => o });
      var i = e(97119);
      var r = e(52178);
      var s = e(25758);
      var a = e(26698);
      function o(t) {
        var n = t.domain;
        t.ticks = function (t) {
          var e = n();
          return (0, i.Ay)(e[0], e[e.length - 1], t == null ? 10 : t);
        };
        t.tickFormat = function (t, e) {
          var i = n();
          return (0, a.A)(i[0], i[i.length - 1], t == null ? 10 : t, e);
        };
        t.nice = function (e) {
          if (e == null) e = 10;
          var r = n();
          var s = 0;
          var a = r.length - 1;
          var o = r[s];
          var u = r[a];
          var h;
          var c;
          var l = 10;
          if (u < o) {
            (c = o), (o = u), (u = c);
            (c = s), (s = a), (a = c);
          }
          while (l-- > 0) {
            c = (0, i.lq)(o, u, e);
            if (c === h) {
              r[s] = o;
              r[a] = u;
              return n(r);
            } else if (c > 0) {
              o = Math.floor(o / c) * c;
              u = Math.ceil(u / c) * c;
            } else if (c < 0) {
              o = Math.ceil(o * c) / c;
              u = Math.floor(u * c) / c;
            } else {
              break;
            }
            h = c;
          }
          return t;
        };
        return t;
      }
      function u() {
        var t = (0, r.Ay)();
        t.copy = function () {
          return (0, r.C)(t, u());
        };
        s.C.apply(t, arguments);
        return o(t);
      }
    },
    60125: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t, n) {
        t = t.slice();
        var e = 0,
          i = t.length - 1,
          r = t[e],
          s = t[i],
          a;
        if (s < r) {
          (a = e), (e = i), (i = a);
          (a = r), (r = s), (s = a);
        }
        t[e] = n.floor(r);
        t[i] = n.ceil(s);
        return t;
      }
    },
    60117: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t) {
        return +t;
      }
    },
    16527: (t, n, e) => {
      e.d(n, { A: () => a, h: () => s });
      var i = e(30352);
      var r = e(25758);
      const s = Symbol("implicit");
      function a() {
        var t = new i.B(),
          n = [],
          e = [],
          o = s;
        function u(i) {
          let r = t.get(i);
          if (r === undefined) {
            if (o !== s) return o;
            t.set(i, (r = n.push(i) - 1));
          }
          return e[r % e.length];
        }
        u.domain = function (e) {
          if (!arguments.length) return n.slice();
          (n = []), (t = new i.B());
          for (const i of e) {
            if (t.has(i)) continue;
            t.set(i, n.push(i) - 1);
          }
          return u;
        };
        u.range = function (t) {
          return arguments.length ? ((e = Array.from(t)), u) : e.slice();
        };
        u.unknown = function (t) {
          return arguments.length ? ((o = t), u) : o;
        };
        u.copy = function () {
          return a(n, e).unknown(o);
        };
        r.C.apply(u, arguments);
        return u;
      }
    },
    26698: (t, n, e) => {
      e.d(n, { A: () => h });
      var i = e(97119);
      var r = e(71688);
      var s = e(86093);
      var a = e(24626);
      var o = e(78209);
      var u = e(93391);
      function h(t, n, e, h) {
        var c = (0, i.sG)(t, n, e),
          l;
        h = (0, r.A)(h == null ? ",f" : h);
        switch (h.type) {
          case "s": {
            var f = Math.max(Math.abs(t), Math.abs(n));
            if (h.precision == null && !isNaN((l = (0, s.A)(c, f)))) h.precision = l;
            return (0, a.s)(h, f);
          }
          case "":
          case "e":
          case "g":
          case "p":
          case "r": {
            if (h.precision == null && !isNaN((l = (0, o.A)(c, Math.max(Math.abs(t), Math.abs(n)))))) h.precision = l - (h.type === "e");
            break;
          }
          case "f":
          case "%": {
            if (h.precision == null && !isNaN((l = (0, u.A)(c)))) h.precision = l - (h.type === "%") * 2;
            break;
          }
        }
        return (0, a.GP)(h);
      }
    },
    74725: (t, n, e) => {
      e.d(n, { A: () => v, B: () => d });
      var i = e(20421);
      var r = e(42706);
      var s = e(77849);
      var a = e(61779);
      var o = e(20293);
      var u = e(9017);
      var h = e(23383);
      var c = e(61147);
      var l = e(82692);
      var f = e(52178);
      var _ = e(25758);
      var p = e(60125);
      function y(t) {
        return new Date(t);
      }
      function g(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function d(t, n, e, i, r, s, a, o, u, h) {
        var c = (0, f.Ay)(),
          l = c.invert,
          _ = c.domain;
        var v = h(".%L"),
          x = h(":%S"),
          w = h("%I:%M"),
          m = h("%I %p"),
          b = h("%a %d"),
          A = h("%b %d"),
          M = h("%B"),
          T = h("%Y");
        function k(t) {
          return (u(t) < t ? v : o(t) < t ? x : a(t) < t ? w : s(t) < t ? m : i(t) < t ? (r(t) < t ? b : A) : e(t) < t ? M : T)(t);
        }
        c.invert = function (t) {
          return new Date(l(t));
        };
        c.domain = function (t) {
          return arguments.length ? _(Array.from(t, g)) : _().map(y);
        };
        c.ticks = function (n) {
          var e = _();
          return t(e[0], e[e.length - 1], n == null ? 10 : n);
        };
        c.tickFormat = function (t, n) {
          return n == null ? k : h(n);
        };
        c.nice = function (t) {
          var e = _();
          if (!t || typeof t.range !== "function") t = n(e[0], e[e.length - 1], t == null ? 10 : t);
          return t ? _((0, p.A)(e, t)) : c;
        };
        c.copy = function () {
          return (0, f.C)(c, d(t, n, e, i, r, s, a, o, u, h));
        };
        return c;
      }
      function v() {
        return _.C.apply(d(i.Cf, i.yE, r.he, s.Ui, a.YP, o.UA, u.Ag, h.wX, c.R, l.DC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
      }
    },
    16681: (t, n, e) => {
      e.d(n, { A: () => _ });
      var i = e(84653);
      var r = e(98247);
      var s = e(18226);
      function a(t) {
        return t.innerRadius;
      }
      function o(t) {
        return t.outerRadius;
      }
      function u(t) {
        return t.startAngle;
      }
      function h(t) {
        return t.endAngle;
      }
      function c(t) {
        return t && t.padAngle;
      }
      function l(t, n, e, i, s, a, o, u) {
        var h = e - t,
          c = i - n,
          l = o - s,
          f = u - a,
          _ = f * h - l * c;
        if (_ * _ < r.Ni) return;
        _ = (l * (n - a) - f * (t - s)) / _;
        return [t + _ * h, n + _ * c];
      }
      function f(t, n, e, i, s, a, o) {
        var u = t - e,
          h = n - i,
          c = (o ? a : -a) / (0, r.RZ)(u * u + h * h),
          l = c * h,
          f = -c * u,
          _ = t + l,
          p = n + f,
          y = e + l,
          g = i + f,
          d = (_ + y) / 2,
          v = (p + g) / 2,
          x = y - _,
          w = g - p,
          m = x * x + w * w,
          b = s - a,
          A = _ * g - y * p,
          M = (w < 0 ? -1 : 1) * (0, r.RZ)((0, r.T9)(0, b * b * m - A * A)),
          T = (A * w - x * M) / m,
          k = (-A * x - w * M) / m,
          N = (A * w + x * M) / m,
          C = (-A * x + w * M) / m,
          $ = T - d,
          U = k - v,
          F = N - d,
          D = C - v;
        if ($ * $ + U * U > F * F + D * D) (T = N), (k = C);
        return { cx: T, cy: k, x01: -l, y01: -f, x11: T * (s / b - 1), y11: k * (s / b - 1) };
      }
      function _() {
        var t = a,
          n = o,
          e = (0, i.A)(0),
          _ = null,
          p = u,
          y = h,
          g = c,
          d = null,
          v = (0, s.i)(x);
        function x() {
          var i,
            s,
            a = +t.apply(this, arguments),
            o = +n.apply(this, arguments),
            u = p.apply(this, arguments) - r.TW,
            h = y.apply(this, arguments) - r.TW,
            c = (0, r.tn)(h - u),
            x = h > u;
          if (!d) d = i = v();
          if (o < a) (s = o), (o = a), (a = s);
          if (!(o > r.Ni)) d.moveTo(0, 0);
          else if (c > r.FA - r.Ni) {
            d.moveTo(o * (0, r.gn)(u), o * (0, r.F8)(u));
            d.arc(0, 0, o, u, h, !x);
            if (a > r.Ni) {
              d.moveTo(a * (0, r.gn)(h), a * (0, r.F8)(h));
              d.arc(0, 0, a, h, u, x);
            }
          } else {
            var w = u,
              m = h,
              b = u,
              A = h,
              M = c,
              T = c,
              k = g.apply(this, arguments) / 2,
              N = k > r.Ni && (_ ? +_.apply(this, arguments) : (0, r.RZ)(a * a + o * o)),
              C = (0, r.jk)((0, r.tn)(o - a) / 2, +e.apply(this, arguments)),
              $ = C,
              U = C,
              F,
              D;
            if (N > r.Ni) {
              var S = (0, r.qR)((N / a) * (0, r.F8)(k)),
                P = (0, r.qR)((N / o) * (0, r.F8)(k));
              if ((M -= S * 2) > r.Ni) (S *= x ? 1 : -1), (b += S), (A -= S);
              else (M = 0), (b = A = (u + h) / 2);
              if ((T -= P * 2) > r.Ni) (P *= x ? 1 : -1), (w += P), (m -= P);
              else (T = 0), (w = m = (u + h) / 2);
            }
            var E = o * (0, r.gn)(w),
              R = o * (0, r.F8)(w),
              H = a * (0, r.gn)(A),
              Y = a * (0, r.F8)(A);
            if (C > r.Ni) {
              var q = o * (0, r.gn)(m),
                L = o * (0, r.F8)(m),
                j = a * (0, r.gn)(b),
                z = a * (0, r.F8)(b),
                X;
              if (c < r.pi) {
                if ((X = l(E, R, j, z, q, L, H, Y))) {
                  var I = E - X[0],
                    O = R - X[1],
                    G = q - X[0],
                    J = L - X[1],
                    Z = 1 / (0, r.F8)((0, r.HQ)((I * G + O * J) / ((0, r.RZ)(I * I + O * O) * (0, r.RZ)(G * G + J * J))) / 2),
                    Q = (0, r.RZ)(X[0] * X[0] + X[1] * X[1]);
                  $ = (0, r.jk)(C, (a - Q) / (Z - 1));
                  U = (0, r.jk)(C, (o - Q) / (Z + 1));
                } else {
                  $ = U = 0;
                }
              }
            }
            if (!(T > r.Ni)) d.moveTo(E, R);
            else if (U > r.Ni) {
              F = f(j, z, E, R, o, U, x);
              D = f(q, L, H, Y, o, U, x);
              d.moveTo(F.cx + F.x01, F.cy + F.y01);
              if (U < C) d.arc(F.cx, F.cy, U, (0, r.FP)(F.y01, F.x01), (0, r.FP)(D.y01, D.x01), !x);
              else {
                d.arc(F.cx, F.cy, U, (0, r.FP)(F.y01, F.x01), (0, r.FP)(F.y11, F.x11), !x);
                d.arc(0, 0, o, (0, r.FP)(F.cy + F.y11, F.cx + F.x11), (0, r.FP)(D.cy + D.y11, D.cx + D.x11), !x);
                d.arc(D.cx, D.cy, U, (0, r.FP)(D.y11, D.x11), (0, r.FP)(D.y01, D.x01), !x);
              }
            } else d.moveTo(E, R), d.arc(0, 0, o, w, m, !x);
            if (!(a > r.Ni) || !(M > r.Ni)) d.lineTo(H, Y);
            else if ($ > r.Ni) {
              F = f(H, Y, q, L, a, -$, x);
              D = f(E, R, j, z, a, -$, x);
              d.lineTo(F.cx + F.x01, F.cy + F.y01);
              if ($ < C) d.arc(F.cx, F.cy, $, (0, r.FP)(F.y01, F.x01), (0, r.FP)(D.y01, D.x01), !x);
              else {
                d.arc(F.cx, F.cy, $, (0, r.FP)(F.y01, F.x01), (0, r.FP)(F.y11, F.x11), !x);
                d.arc(0, 0, a, (0, r.FP)(F.cy + F.y11, F.cx + F.x11), (0, r.FP)(D.cy + D.y11, D.cx + D.x11), x);
                d.arc(D.cx, D.cy, $, (0, r.FP)(D.y11, D.x11), (0, r.FP)(D.y01, D.x01), !x);
              }
            } else d.arc(0, 0, a, A, b, x);
          }
          d.closePath();
          if (i) return (d = null), i + "" || null;
        }
        x.centroid = function () {
          var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            i = (+p.apply(this, arguments) + +y.apply(this, arguments)) / 2 - r.pi / 2;
          return [(0, r.gn)(i) * e, (0, r.F8)(i) * e];
        };
        x.innerRadius = function (n) {
          return arguments.length ? ((t = typeof n === "function" ? n : (0, i.A)(+n)), x) : t;
        };
        x.outerRadius = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : (0, i.A)(+t)), x) : n;
        };
        x.cornerRadius = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, i.A)(+t)), x) : e;
        };
        x.padRadius = function (t) {
          return arguments.length ? ((_ = t == null ? null : typeof t === "function" ? t : (0, i.A)(+t)), x) : _;
        };
        x.startAngle = function (t) {
          return arguments.length ? ((p = typeof t === "function" ? t : (0, i.A)(+t)), x) : p;
        };
        x.endAngle = function (t) {
          return arguments.length ? ((y = typeof t === "function" ? t : (0, i.A)(+t)), x) : y;
        };
        x.padAngle = function (t) {
          return arguments.length ? ((g = typeof t === "function" ? t : (0, i.A)(+t)), x) : g;
        };
        x.context = function (t) {
          return arguments.length ? ((d = t == null ? null : t), x) : d;
        };
        return x;
      }
    },
    12736: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = Array.prototype.slice;
      function r(t) {
        return typeof t === "object" && "length" in t ? t : Array.from(t);
      }
    },
    84653: (t, n, e) => {
      e.d(n, { A: () => i });
      function i(t) {
        return function n() {
          return t;
        };
      }
    },
    24363: (t, n, e) => {
      e.d(n, { Ay: () => s, xO: () => r, zx: () => i });
      function i(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function r(t) {
        this._context = t;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              i(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
              i(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
        },
      };
      function s(t) {
        return new r(t);
      }
    },
    60075: (t, n, e) => {
      e.d(n, { A: () => a });
      var i = e(71649);
      var r = e(24363);
      function s(t) {
        this._context = t;
      }
      s.prototype = {
        areaStart: i.A,
        areaEnd: i.A,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1: {
              this._context.moveTo(this._x2, this._y2);
              this._context.closePath();
              break;
            }
            case 2: {
              this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
              this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
              this._context.closePath();
              break;
            }
            case 3: {
              this.point(this._x2, this._y2);
              this.point(this._x3, this._y3);
              this.point(this._x4, this._y4);
              break;
            }
          }
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              (this._x2 = t), (this._y2 = n);
              break;
            case 1:
              this._point = 2;
              (this._x3 = t), (this._y3 = n);
              break;
            case 2:
              this._point = 3;
              (this._x4 = t), (this._y4 = n);
              this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
              break;
            default:
              (0, r.zx)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
        },
      };
      function a(t) {
        return new s(t);
      }
    },
    69683: (t, n, e) => {
      e.d(n, { A: () => s });
      var i = e(24363);
      function r(t) {
        this._context = t;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
              this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
              break;
            case 3:
              this._point = 4;
            default:
              (0, i.zx)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
        },
      };
      function s(t) {
        return new r(t);
      }
    },
    54545: (t, n, e) => {
      e.d(n, { A: () => s });
      var i = e(24363);
      function r(t, n) {
        this._basis = new i.xO(t);
        this._beta = n;
      }
      r.prototype = {
        lineStart: function () {
          this._x = [];
          this._y = [];
          this._basis.lineStart();
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length - 1;
          if (e > 0) {
            var i = t[0],
              r = n[0],
              s = t[e] - i,
              a = n[e] - r,
              o = -1,
              u;
            while (++o <= e) {
              u = o / e;
              this._basis.point(this._beta * t[o] + (1 - this._beta) * (i + u * s), this._beta * n[o] + (1 - this._beta) * (r + u * a));
            }
          }
          this._x = this._y = null;
          this._basis.lineEnd();
        },
        point: function (t, n) {
          this._x.push(+t);
          this._y.push(+n);
        },
      };
      const s = (function t(n) {
        function e(t) {
          return n === 1 ? new i.xO(t) : new r(t, n);
        }
        e.beta = function (n) {
          return t(+n);
        };
        return e;
      })(0.85);
    },
    43793: (t, n, e) => {
      e.d(n, { Ay: () => s, vP: () => r, zx: () => i });
      function i(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function r(t, n) {
        this._context = t;
        this._k = (1 - n) / 6;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              i(this, this._x1, this._y1);
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              i(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const s = (function t(n) {
        function e(t) {
          return new r(t, n);
        }
        e.tension = function (n) {
          return t(+n);
        };
        return e;
      })(0);
    },
    13893: (t, n, e) => {
      e.d(n, { A: () => a, L: () => s });
      var i = e(71649);
      var r = e(43793);
      function s(t, n) {
        this._context = t;
        this._k = (1 - n) / 6;
      }
      s.prototype = {
        areaStart: i.A,
        areaEnd: i.A,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1: {
              this._context.moveTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 2: {
              this._context.lineTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 3: {
              this.point(this._x3, this._y3);
              this.point(this._x4, this._y4);
              this.point(this._x5, this._y5);
              break;
            }
          }
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              this._point = 2;
              this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              this._point = 3;
              (this._x5 = t), (this._y5 = n);
              break;
            default:
              (0, r.zx)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const a = (function t(n) {
        function e(t) {
          return new s(t, n);
        }
        e.tension = function (n) {
          return t(+n);
        };
        return e;
      })(0);
    },
    46457: (t, n, e) => {
      e.d(n, { A: () => s, H: () => r });
      var i = e(43793);
      function r(t, n) {
        this._context = t;
        this._k = (1 - n) / 6;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              (0, i.zx)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const s = (function t(n) {
        function e(t) {
          return new r(t, n);
        }
        e.tension = function (n) {
          return t(+n);
        };
        return e;
      })(0);
    },
    76413: (t, n, e) => {
      e.d(n, { A: () => o, z: () => s });
      var i = e(98247);
      var r = e(43793);
      function s(t, n, e) {
        var r = t._x1,
          s = t._y1,
          a = t._x2,
          o = t._y2;
        if (t._l01_a > i.Ni) {
          var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            h = 3 * t._l01_a * (t._l01_a + t._l12_a);
          r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / h;
          s = (s * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / h;
        }
        if (t._l23_a > i.Ni) {
          var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            l = 3 * t._l23_a * (t._l23_a + t._l12_a);
          a = (a * c + t._x1 * t._l23_2a - n * t._l12_2a) / l;
          o = (o * c + t._y1 * t._l23_2a - e * t._l12_2a) / l;
        }
        t._context.bezierCurveTo(r, s, a, o, t._x2, t._y2);
      }
      function a(t, n) {
        this._context = t;
        this._alpha = n;
      }
      a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              s(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
          (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const o = (function t(n) {
        function e(t) {
          return n ? new a(t, n) : new r.vP(t, 0);
        }
        e.alpha = function (n) {
          return t(+n);
        };
        return e;
      })(0.5);
    },
    25633: (t, n, e) => {
      e.d(n, { A: () => o });
      var i = e(13893);
      var r = e(71649);
      var s = e(76413);
      function a(t, n) {
        this._context = t;
        this._alpha = n;
      }
      a.prototype = {
        areaStart: r.A,
        areaEnd: r.A,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1: {
              this._context.moveTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 2: {
              this._context.lineTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 3: {
              this.point(this._x3, this._y3);
              this.point(this._x4, this._y4);
              this.point(this._x5, this._y5);
              break;
            }
          }
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              this._point = 2;
              this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              this._point = 3;
              (this._x5 = t), (this._y5 = n);
              break;
            default:
              (0, s.z)(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
          (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const o = (function t(n) {
        function e(t) {
          return n ? new a(t, n) : new i.L(t, 0);
        }
        e.alpha = function (n) {
          return t(+n);
        };
        return e;
      })(0.5);
    },
    13309: (t, n, e) => {
      e.d(n, { A: () => a });
      var i = e(46457);
      var r = e(76413);
      function s(t, n) {
        this._context = t;
        this._alpha = n;
      }
      s.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              (0, r.z)(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
          (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const a = (function t(n) {
        function e(t) {
          return n ? new s(t, n) : new i.H(t, 0);
        }
        e.alpha = function (n) {
          return t(+n);
        };
        return e;
      })(0.5);
    },
    71228: (t, n, e) => {
      e.d(n, { A: () => r });
      function i(t) {
        this._context = t;
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
              break;
          }
        },
      };
      function r(t) {
        return new i(t);
      }
    },
    43272: (t, n, e) => {
      e.d(n, { A: () => s });
      var i = e(71649);
      function r(t) {
        this._context = t;
      }
      r.prototype = {
        areaStart: i.A,
        areaEnd: i.A,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._point) this._context.closePath();
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) this._context.lineTo(t, n);
          else (this._point = 1), this._context.moveTo(t, n);
        },
      };
      function s(t) {
        return new r(t);
      }
    },
    67694: (t, n, e) => {
      e.d(n, { G: () => c, N: () => l });
      function i(t) {
        return t < 0 ? -1 : 1;
      }
      function r(t, n, e) {
        var r = t._x1 - t._x0,
          s = n - t._x1,
          a = (t._y1 - t._y0) / (r || (s < 0 && -0)),
          o = (e - t._y1) / (s || (r < 0 && -0)),
          u = (a * s + o * r) / (r + s);
        return (i(a) + i(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
      }
      function s(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function a(t, n, e) {
        var i = t._x0,
          r = t._y0,
          s = t._x1,
          a = t._y1,
          o = (s - i) / 3;
        t._context.bezierCurveTo(i + o, r + o * n, s - o, a - o * e, s, a);
      }
      function o(t) {
        this._context = t;
      }
      o.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              a(this, this._t0, s(this, this._t0));
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          var e = NaN;
          (t = +t), (n = +n);
          if (t === this._x1 && n === this._y1) return;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              a(this, s(this, (e = r(this, t, n))), e);
              break;
            default:
              a(this, this._t0, (e = r(this, t, n)));
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
          this._t0 = e;
        },
      };
      function u(t) {
        this._context = new h(t);
      }
      (u.prototype = Object.create(o.prototype)).point = function (t, n) {
        o.prototype.point.call(this, n, t);
      };
      function h(t) {
        this._context = t;
      }
      h.prototype = {
        moveTo: function (t, n) {
          this._context.moveTo(n, t);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (t, n) {
          this._context.lineTo(n, t);
        },
        bezierCurveTo: function (t, n, e, i, r, s) {
          this._context.bezierCurveTo(n, t, i, e, s, r);
        },
      };
      function c(t) {
        return new o(t);
      }
      function l(t) {
        return new u(t);
      }
    },
    29944: (t, n, e) => {
      e.d(n, { A: () => s });
      function i(t) {
        this._context = t;
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x = [];
          this._y = [];
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length;
          if (e) {
            this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]);
            if (e === 2) {
              this._context.lineTo(t[1], n[1]);
            } else {
              var i = r(t),
                s = r(n);
              for (var a = 0, o = 1; o < e; ++a, ++o) {
                this._context.bezierCurveTo(i[0][a], s[0][a], i[1][a], s[1][a], t[o], n[o]);
              }
            }
          }
          if (this._line || (this._line !== 0 && e === 1)) this._context.closePath();
          this._line = 1 - this._line;
          this._x = this._y = null;
        },
        point: function (t, n) {
          this._x.push(+t);
          this._y.push(+n);
        },
      };
      function r(t) {
        var n,
          e = t.length - 1,
          i,
          r = new Array(e),
          s = new Array(e),
          a = new Array(e);
        (r[0] = 0), (s[0] = 2), (a[0] = t[0] + 2 * t[1]);
        for (n = 1; n < e - 1; ++n) (r[n] = 1), (s[n] = 4), (a[n] = 4 * t[n] + 2 * t[n + 1]);
        (r[e - 1] = 2), (s[e - 1] = 7), (a[e - 1] = 8 * t[e - 1] + t[e]);
        for (n = 1; n < e; ++n) (i = r[n] / s[n - 1]), (s[n] -= i), (a[n] -= i * a[n - 1]);
        r[e - 1] = a[e - 1] / s[e - 1];
        for (n = e - 2; n >= 0; --n) r[n] = (a[n] - r[n + 1]) / s[n];
        s[e - 1] = (t[e] + r[e - 1]) / 2;
        for (n = 0; n < e - 1; ++n) s[n] = 2 * t[n + 1] - r[n + 1];
        return [r, s];
      }
      function s(t) {
        return new i(t);
      }
    },
    79011: (t, n, e) => {
      e.d(n, { Ay: () => r, Ko: () => s, Ps: () => a });
      function i(t, n) {
        this._context = t;
        this._t = n;
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x = this._y = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          if (this._line >= 0) (this._t = 1 - this._t), (this._line = 1 - this._line);
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default: {
              if (this._t <= 0) {
                this._context.lineTo(this._x, n);
                this._context.lineTo(t, n);
              } else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y);
                this._context.lineTo(e, n);
              }
              break;
            }
          }
          (this._x = t), (this._y = n);
        },
      };
      function r(t) {
        return new i(t, 0.5);
      }
      function s(t) {
        return new i(t, 0);
      }
      function a(t) {
        return new i(t, 1);
      }
    },
    58679: (t, n, e) => {
      e.d(n, { A: () => u });
      var i = e(12736);
      var r = e(84653);
      var s = e(71228);
      var a = e(18226);
      var o = e(59835);
      function u(t, n) {
        var e = (0, r.A)(true),
          u = null,
          h = s.A,
          c = null,
          l = (0, a.i)(f);
        t = typeof t === "function" ? t : t === undefined ? o.x : (0, r.A)(t);
        n = typeof n === "function" ? n : n === undefined ? o.y : (0, r.A)(n);
        function f(r) {
          var s,
            a = (r = (0, i.A)(r)).length,
            o,
            f = false,
            _;
          if (u == null) c = h((_ = l()));
          for (s = 0; s <= a; ++s) {
            if (!(s < a && e((o = r[s]), s, r)) === f) {
              if ((f = !f)) c.lineStart();
              else c.lineEnd();
            }
            if (f) c.point(+t(o, s, r), +n(o, s, r));
          }
          if (_) return (c = null), _ + "" || null;
        }
        f.x = function (n) {
          return arguments.length ? ((t = typeof n === "function" ? n : (0, r.A)(+n)), f) : t;
        };
        f.y = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : (0, r.A)(+t)), f) : n;
        };
        f.defined = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, r.A)(!!t)), f) : e;
        };
        f.curve = function (t) {
          return arguments.length ? ((h = t), u != null && (c = h(u)), f) : h;
        };
        f.context = function (t) {
          return arguments.length ? (t == null ? (u = c = null) : (c = h((u = t))), f) : u;
        };
        return f;
      }
    },
    98247: (t, n, e) => {
      e.d(n, {
        F8: () => u,
        FA: () => _,
        FP: () => r,
        HQ: () => p,
        Ni: () => c,
        RZ: () => h,
        T9: () => a,
        TW: () => f,
        gn: () => s,
        jk: () => o,
        pi: () => l,
        qR: () => y,
        tn: () => i,
      });
      const i = Math.abs;
      const r = Math.atan2;
      const s = Math.cos;
      const a = Math.max;
      const o = Math.min;
      const u = Math.sin;
      const h = Math.sqrt;
      const c = 1e-12;
      const l = Math.PI;
      const f = l / 2;
      const _ = 2 * l;
      function p(t) {
        return t > 1 ? 0 : t < -1 ? l : Math.acos(t);
      }
      function y(t) {
        return t >= 1 ? f : t <= -1 ? -f : Math.asin(t);
      }
    },
    71649: (t, n, e) => {
      e.d(n, { A: () => i });
      function i() {}
    },
    18226: (t, n, e) => {
      e.d(n, { i: () => r });
      var i = e(69450);
      function r(t) {
        let n = 3;
        t.digits = function (e) {
          if (!arguments.length) return n;
          if (e == null) {
            n = null;
          } else {
            const t = Math.floor(e);
            if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
            n = t;
          }
          return t;
        };
        return () => new i.wA(n);
      }
    },
    59835: (t, n, e) => {
      e.d(n, { x: () => i, y: () => r });
      function i(t) {
        return t[0];
      }
      function r(t) {
        return t[1];
      }
    },
    82692: (t, n, e) => {
      e.d(n, { DC: () => s, GY: () => u, T6: () => a, aL: () => o });
      var i = e(77613);
      var r;
      var s;
      var a;
      var o;
      var u;
      h({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      });
      function h(t) {
        r = (0, i.A)(t);
        s = r.format;
        a = r.parse;
        o = r.utcFormat;
        u = r.utcParse;
        return r;
      }
    },
    77613: (t, n, e) => {
      e.d(n, { A: () => h });
      var i = e(61779);
      var r = e(20293);
      var s = e(42706);
      function a(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          n.setFullYear(t.y);
          return n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function o(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          n.setUTCFullYear(t.y);
          return n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function u(t, n, e) {
        return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
      }
      function h(t) {
        var n = t.dateTime,
          e = t.date,
          s = t.time,
          h = t.periods,
          l = t.days,
          f = t.shortDays,
          _ = t.months,
          p = t.shortMonths;
        var y = g(h),
          Q = d(h),
          yt = g(l),
          Nt = d(l),
          Ct = g(f),
          $t = d(f),
          Ut = g(_),
          Ft = d(_),
          Dt = g(p),
          St = d(p);
        var Pt = {
          a: Zt,
          A: Qt,
          b: Bt,
          B: Wt,
          c: null,
          d: Y,
          e: Y,
          f: X,
          g: tt,
          G: et,
          H: q,
          I: L,
          j,
          L: z,
          m: I,
          M: O,
          p: Vt,
          q: Kt,
          Q: Tt,
          s: kt,
          S: G,
          u: J,
          U: Z,
          V: B,
          w: W,
          W: V,
          x: null,
          X: null,
          y: K,
          Y: nt,
          Z: it,
          "%": Mt,
        };
        var Et = {
          a: tn,
          A: nn,
          b: en,
          B: rn,
          c: null,
          d: rt,
          e: rt,
          f: ht,
          g: wt,
          G: bt,
          H: st,
          I: at,
          j: ot,
          L: ut,
          m: ct,
          M: lt,
          p: sn,
          q: an,
          Q: Tt,
          s: kt,
          S: ft,
          u: _t,
          U: pt,
          V: gt,
          w: dt,
          W: vt,
          x: null,
          X: null,
          y: xt,
          Y: mt,
          Z: At,
          "%": Mt,
        };
        var Rt = {
          a: jt,
          A: zt,
          b: Xt,
          B: It,
          c: Ot,
          d: C,
          e: C,
          f: P,
          g: M,
          G: A,
          H: U,
          I: U,
          j: $,
          L: S,
          m: N,
          M: F,
          p: Lt,
          q: k,
          Q: R,
          s: H,
          S: D,
          u: x,
          U: w,
          V: m,
          w: v,
          W: b,
          x: Gt,
          X: Jt,
          y: M,
          Y: A,
          Z: T,
          "%": E,
        };
        Pt.x = Ht(e, Pt);
        Pt.X = Ht(s, Pt);
        Pt.c = Ht(n, Pt);
        Et.x = Ht(e, Et);
        Et.X = Ht(s, Et);
        Et.c = Ht(n, Et);
        function Ht(t, n) {
          return function (e) {
            var i = [],
              r = -1,
              s = 0,
              a = t.length,
              o,
              u,
              h;
            if (!(e instanceof Date)) e = new Date(+e);
            while (++r < a) {
              if (t.charCodeAt(r) === 37) {
                i.push(t.slice(s, r));
                if ((u = c[(o = t.charAt(++r))]) != null) o = t.charAt(++r);
                else u = o === "e" ? " " : "0";
                if ((h = n[o])) o = h(e, u);
                i.push(o);
                s = r + 1;
              }
            }
            i.push(t.slice(s, r));
            return i.join("");
          };
        }
        function Yt(t, n) {
          return function (e) {
            var s = u(1900, undefined, 1),
              h = qt(s, t, (e += ""), 0),
              c,
              l;
            if (h != e.length) return null;
            if ("Q" in s) return new Date(s.Q);
            if ("s" in s) return new Date(s.s * 1e3 + ("L" in s ? s.L : 0));
            if (n && !("Z" in s)) s.Z = 0;
            if ("p" in s) s.H = (s.H % 12) + s.p * 12;
            if (s.m === undefined) s.m = "q" in s ? s.q : 0;
            if ("V" in s) {
              if (s.V < 1 || s.V > 53) return null;
              if (!("w" in s)) s.w = 1;
              if ("Z" in s) {
                (c = o(u(s.y, 0, 1))), (l = c.getUTCDay());
                c = l > 4 || l === 0 ? i.rt.ceil(c) : (0, i.rt)(c);
                c = r.dA.offset(c, (s.V - 1) * 7);
                s.y = c.getUTCFullYear();
                s.m = c.getUTCMonth();
                s.d = c.getUTCDate() + ((s.w + 6) % 7);
              } else {
                (c = a(u(s.y, 0, 1))), (l = c.getDay());
                c = l > 4 || l === 0 ? i.AB.ceil(c) : (0, i.AB)(c);
                c = r.UA.offset(c, (s.V - 1) * 7);
                s.y = c.getFullYear();
                s.m = c.getMonth();
                s.d = c.getDate() + ((s.w + 6) % 7);
              }
            } else if ("W" in s || "U" in s) {
              if (!("w" in s)) s.w = "u" in s ? s.u % 7 : "W" in s ? 1 : 0;
              l = "Z" in s ? o(u(s.y, 0, 1)).getUTCDay() : a(u(s.y, 0, 1)).getDay();
              s.m = 0;
              s.d = "W" in s ? ((s.w + 6) % 7) + s.W * 7 - ((l + 5) % 7) : s.w + s.U * 7 - ((l + 6) % 7);
            }
            if ("Z" in s) {
              s.H += (s.Z / 100) | 0;
              s.M += s.Z % 100;
              return o(s);
            }
            return a(s);
          };
        }
        function qt(t, n, e, i) {
          var r = 0,
            s = n.length,
            a = e.length,
            o,
            u;
          while (r < s) {
            if (i >= a) return -1;
            o = n.charCodeAt(r++);
            if (o === 37) {
              o = n.charAt(r++);
              u = Rt[o in c ? n.charAt(r++) : o];
              if (!u || (i = u(t, e, i)) < 0) return -1;
            } else if (o != e.charCodeAt(i++)) {
              return -1;
            }
          }
          return i;
        }
        function Lt(t, n, e) {
          var i = y.exec(n.slice(e));
          return i ? ((t.p = Q.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function jt(t, n, e) {
          var i = Ct.exec(n.slice(e));
          return i ? ((t.w = $t.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function zt(t, n, e) {
          var i = yt.exec(n.slice(e));
          return i ? ((t.w = Nt.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function Xt(t, n, e) {
          var i = Dt.exec(n.slice(e));
          return i ? ((t.m = St.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function It(t, n, e) {
          var i = Ut.exec(n.slice(e));
          return i ? ((t.m = Ft.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function Ot(t, e, i) {
          return qt(t, n, e, i);
        }
        function Gt(t, n, i) {
          return qt(t, e, n, i);
        }
        function Jt(t, n, e) {
          return qt(t, s, n, e);
        }
        function Zt(t) {
          return f[t.getDay()];
        }
        function Qt(t) {
          return l[t.getDay()];
        }
        function Bt(t) {
          return p[t.getMonth()];
        }
        function Wt(t) {
          return _[t.getMonth()];
        }
        function Vt(t) {
          return h[+(t.getHours() >= 12)];
        }
        function Kt(t) {
          return 1 + ~~(t.getMonth() / 3);
        }
        function tn(t) {
          return f[t.getUTCDay()];
        }
        function nn(t) {
          return l[t.getUTCDay()];
        }
        function en(t) {
          return p[t.getUTCMonth()];
        }
        function rn(t) {
          return _[t.getUTCMonth()];
        }
        function sn(t) {
          return h[+(t.getUTCHours() >= 12)];
        }
        function an(t) {
          return 1 + ~~(t.getUTCMonth() / 3);
        }
        return {
          format: function (t) {
            var n = Ht((t += ""), Pt);
            n.toString = function () {
              return t;
            };
            return n;
          },
          parse: function (t) {
            var n = Yt((t += ""), false);
            n.toString = function () {
              return t;
            };
            return n;
          },
          utcFormat: function (t) {
            var n = Ht((t += ""), Et);
            n.toString = function () {
              return t;
            };
            return n;
          },
          utcParse: function (t) {
            var n = Yt((t += ""), true);
            n.toString = function () {
              return t;
            };
            return n;
          },
        };
      }
      var c = { "-": "", _: " ", 0: "0" },
        l = /^\s*\d+/,
        f = /^%/,
        _ = /[\\^$*+?|[\]().{}]/g;
      function p(t, n, e) {
        var i = t < 0 ? "-" : "",
          r = (i ? -t : t) + "",
          s = r.length;
        return i + (s < e ? new Array(e - s + 1).join(n) + r : r);
      }
      function y(t) {
        return t.replace(_, "\\$&");
      }
      function g(t) {
        return new RegExp("^(?:" + t.map(y).join("|") + ")", "i");
      }
      function d(t) {
        return new Map(t.map((t, n) => [t.toLowerCase(), n]));
      }
      function v(t, n, e) {
        var i = l.exec(n.slice(e, e + 1));
        return i ? ((t.w = +i[0]), e + i[0].length) : -1;
      }
      function x(t, n, e) {
        var i = l.exec(n.slice(e, e + 1));
        return i ? ((t.u = +i[0]), e + i[0].length) : -1;
      }
      function w(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.U = +i[0]), e + i[0].length) : -1;
      }
      function m(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.V = +i[0]), e + i[0].length) : -1;
      }
      function b(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.W = +i[0]), e + i[0].length) : -1;
      }
      function A(t, n, e) {
        var i = l.exec(n.slice(e, e + 4));
        return i ? ((t.y = +i[0]), e + i[0].length) : -1;
      }
      function M(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), e + i[0].length) : -1;
      }
      function T(t, n, e) {
        var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return i ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), e + i[0].length) : -1;
      }
      function k(t, n, e) {
        var i = l.exec(n.slice(e, e + 1));
        return i ? ((t.q = i[0] * 3 - 3), e + i[0].length) : -1;
      }
      function N(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.m = i[0] - 1), e + i[0].length) : -1;
      }
      function C(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.d = +i[0]), e + i[0].length) : -1;
      }
      function $(t, n, e) {
        var i = l.exec(n.slice(e, e + 3));
        return i ? ((t.m = 0), (t.d = +i[0]), e + i[0].length) : -1;
      }
      function U(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.H = +i[0]), e + i[0].length) : -1;
      }
      function F(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.M = +i[0]), e + i[0].length) : -1;
      }
      function D(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.S = +i[0]), e + i[0].length) : -1;
      }
      function S(t, n, e) {
        var i = l.exec(n.slice(e, e + 3));
        return i ? ((t.L = +i[0]), e + i[0].length) : -1;
      }
      function P(t, n, e) {
        var i = l.exec(n.slice(e, e + 6));
        return i ? ((t.L = Math.floor(i[0] / 1e3)), e + i[0].length) : -1;
      }
      function E(t, n, e) {
        var i = f.exec(n.slice(e, e + 1));
        return i ? e + i[0].length : -1;
      }
      function R(t, n, e) {
        var i = l.exec(n.slice(e));
        return i ? ((t.Q = +i[0]), e + i[0].length) : -1;
      }
      function H(t, n, e) {
        var i = l.exec(n.slice(e));
        return i ? ((t.s = +i[0]), e + i[0].length) : -1;
      }
      function Y(t, n) {
        return p(t.getDate(), n, 2);
      }
      function q(t, n) {
        return p(t.getHours(), n, 2);
      }
      function L(t, n) {
        return p(t.getHours() % 12 || 12, n, 2);
      }
      function j(t, n) {
        return p(1 + r.UA.count((0, s.he)(t), t), n, 3);
      }
      function z(t, n) {
        return p(t.getMilliseconds(), n, 3);
      }
      function X(t, n) {
        return z(t, n) + "000";
      }
      function I(t, n) {
        return p(t.getMonth() + 1, n, 2);
      }
      function O(t, n) {
        return p(t.getMinutes(), n, 2);
      }
      function G(t, n) {
        return p(t.getSeconds(), n, 2);
      }
      function J(t) {
        var n = t.getDay();
        return n === 0 ? 7 : n;
      }
      function Z(t, n) {
        return p(i.YP.count((0, s.he)(t) - 1, t), n, 2);
      }
      function Q(t) {
        var n = t.getDay();
        return n >= 4 || n === 0 ? (0, i.Mo)(t) : i.Mo.ceil(t);
      }
      function B(t, n) {
        t = Q(t);
        return p(i.Mo.count((0, s.he)(t), t) + ((0, s.he)(t).getDay() === 4), n, 2);
      }
      function W(t) {
        return t.getDay();
      }
      function V(t, n) {
        return p(i.AB.count((0, s.he)(t) - 1, t), n, 2);
      }
      function K(t, n) {
        return p(t.getFullYear() % 100, n, 2);
      }
      function tt(t, n) {
        t = Q(t);
        return p(t.getFullYear() % 100, n, 2);
      }
      function nt(t, n) {
        return p(t.getFullYear() % 1e4, n, 4);
      }
      function et(t, n) {
        var e = t.getDay();
        t = e >= 4 || e === 0 ? (0, i.Mo)(t) : i.Mo.ceil(t);
        return p(t.getFullYear() % 1e4, n, 4);
      }
      function it(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : ((n *= -1), "+")) + p((n / 60) | 0, "0", 2) + p(n % 60, "0", 2);
      }
      function rt(t, n) {
        return p(t.getUTCDate(), n, 2);
      }
      function st(t, n) {
        return p(t.getUTCHours(), n, 2);
      }
      function at(t, n) {
        return p(t.getUTCHours() % 12 || 12, n, 2);
      }
      function ot(t, n) {
        return p(1 + r.dA.count((0, s.Mb)(t), t), n, 3);
      }
      function ut(t, n) {
        return p(t.getUTCMilliseconds(), n, 3);
      }
      function ht(t, n) {
        return ut(t, n) + "000";
      }
      function ct(t, n) {
        return p(t.getUTCMonth() + 1, n, 2);
      }
      function lt(t, n) {
        return p(t.getUTCMinutes(), n, 2);
      }
      function ft(t, n) {
        return p(t.getUTCSeconds(), n, 2);
      }
      function _t(t) {
        var n = t.getUTCDay();
        return n === 0 ? 7 : n;
      }
      function pt(t, n) {
        return p(i.Hl.count((0, s.Mb)(t) - 1, t), n, 2);
      }
      function yt(t) {
        var n = t.getUTCDay();
        return n >= 4 || n === 0 ? (0, i.pT)(t) : i.pT.ceil(t);
      }
      function gt(t, n) {
        t = yt(t);
        return p(i.pT.count((0, s.Mb)(t), t) + ((0, s.Mb)(t).getUTCDay() === 4), n, 2);
      }
      function dt(t) {
        return t.getUTCDay();
      }
      function vt(t, n) {
        return p(i.rt.count((0, s.Mb)(t) - 1, t), n, 2);
      }
      function xt(t, n) {
        return p(t.getUTCFullYear() % 100, n, 2);
      }
      function wt(t, n) {
        t = yt(t);
        return p(t.getUTCFullYear() % 100, n, 2);
      }
      function mt(t, n) {
        return p(t.getUTCFullYear() % 1e4, n, 4);
      }
      function bt(t, n) {
        var e = t.getUTCDay();
        t = e >= 4 || e === 0 ? (0, i.pT)(t) : i.pT.ceil(t);
        return p(t.getUTCFullYear() % 1e4, n, 4);
      }
      function At() {
        return "+0000";
      }
      function Mt() {
        return "%";
      }
      function Tt(t) {
        return +t;
      }
      function kt(t) {
        return Math.floor(+t / 1e3);
      }
    },
    20293: (t, n, e) => {
      e.d(n, { TW: () => h, UA: () => s, dA: () => o });
      var i = e(12834);
      var r = e(29551);
      const s = (0, i.f)(
        (t) => t.setHours(0, 0, 0, 0),
        (t, n) => t.setDate(t.getDate() + n),
        (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * r.rR) / r.Nm,
        (t) => t.getDate() - 1
      );
      const a = s.range;
      const o = (0, i.f)(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCDate(t.getUTCDate() + n);
        },
        (t, n) => (n - t) / r.Nm,
        (t) => t.getUTCDate() - 1
      );
      const u = o.range;
      const h = (0, i.f)(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCDate(t.getUTCDate() + n);
        },
        (t, n) => (n - t) / r.Nm,
        (t) => Math.floor(t / r.Nm)
      );
      const c = h.range;
    },
    29551: (t, n, e) => {
      e.d(n, { Fq: () => o, JJ: () => s, MP: () => h, Nm: () => a, Pv: () => u, Tt: () => i, rR: () => r });
      const i = 1e3;
      const r = i * 60;
      const s = r * 60;
      const a = s * 24;
      const o = a * 7;
      const u = a * 30;
      const h = a * 365;
    },
    9017: (t, n, e) => {
      e.d(n, { Ag: () => s, pz: () => o });
      var i = e(12834);
      var r = e(29551);
      const s = (0, i.f)(
        (t) => {
          t.setTime(t - t.getMilliseconds() - t.getSeconds() * r.Tt - t.getMinutes() * r.rR);
        },
        (t, n) => {
          t.setTime(+t + n * r.JJ);
        },
        (t, n) => (n - t) / r.JJ,
        (t) => t.getHours()
      );
      const a = s.range;
      const o = (0, i.f)(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, n) => {
          t.setTime(+t + n * r.JJ);
        },
        (t, n) => (n - t) / r.JJ,
        (t) => t.getUTCHours()
      );
      const u = o.range;
    },
    12834: (t, n, e) => {
      e.d(n, { f: () => s });
      const i = new Date(),
        r = new Date();
      function s(t, n, e, a) {
        function o(n) {
          return t((n = arguments.length === 0 ? new Date() : new Date(+n))), n;
        }
        o.floor = (n) => (t((n = new Date(+n))), n);
        o.ceil = (e) => (t((e = new Date(e - 1))), n(e, 1), t(e), e);
        o.round = (t) => {
          const n = o(t),
            e = o.ceil(t);
          return t - n < e - t ? n : e;
        };
        o.offset = (t, e) => (n((t = new Date(+t)), e == null ? 1 : Math.floor(e)), t);
        o.range = (e, i, r) => {
          const s = [];
          e = o.ceil(e);
          r = r == null ? 1 : Math.floor(r);
          if (!(e < i) || !(r > 0)) return s;
          let a;
          do {
            s.push((a = new Date(+e))), n(e, r), t(e);
          } while (a < e && e < i);
          return s;
        };
        o.filter = (e) =>
          s(
            (n) => {
              if (n >= n) while ((t(n), !e(n))) n.setTime(n - 1);
            },
            (t, i) => {
              if (t >= t) {
                if (i < 0)
                  while (++i <= 0) {
                    while ((n(t, -1), !e(t))) {}
                  }
                else
                  while (--i >= 0) {
                    while ((n(t, +1), !e(t))) {}
                  }
              }
            }
          );
        if (e) {
          o.count = (n, s) => {
            i.setTime(+n), r.setTime(+s);
            t(i), t(r);
            return Math.floor(e(i, r));
          };
          o.every = (t) => {
            t = Math.floor(t);
            return !isFinite(t) || !(t > 0) ? null : !(t > 1) ? o : o.filter(a ? (n) => a(n) % t === 0 : (n) => o.count(0, n) % t === 0);
          };
        }
        return o;
      }
    },
    26530: (t, n, e) => {
      e.d(n, { y: () => r });
      var i = e(12834);
      const r = (0, i.f)(
        () => {},
        (t, n) => {
          t.setTime(+t + n);
        },
        (t, n) => n - t
      );
      r.every = (t) => {
        t = Math.floor(t);
        if (!isFinite(t) || !(t > 0)) return null;
        if (!(t > 1)) return r;
        return (0, i.f)(
          (n) => {
            n.setTime(Math.floor(n / t) * t);
          },
          (n, e) => {
            n.setTime(+n + e * t);
          },
          (n, e) => (e - n) / t
        );
      };
      const s = r.range;
    },
    23383: (t, n, e) => {
      e.d(n, { vD: () => o, wX: () => s });
      var i = e(12834);
      var r = e(29551);
      const s = (0, i.f)(
        (t) => {
          t.setTime(t - t.getMilliseconds() - t.getSeconds() * r.Tt);
        },
        (t, n) => {
          t.setTime(+t + n * r.rR);
        },
        (t, n) => (n - t) / r.rR,
        (t) => t.getMinutes()
      );
      const a = s.range;
      const o = (0, i.f)(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, n) => {
          t.setTime(+t + n * r.rR);
        },
        (t, n) => (n - t) / r.rR,
        (t) => t.getUTCMinutes()
      );
      const u = o.range;
    },
    77849: (t, n, e) => {
      e.d(n, { R6: () => a, Ui: () => r });
      var i = e(12834);
      const r = (0, i.f)(
        (t) => {
          t.setDate(1);
          t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setMonth(t.getMonth() + n);
        },
        (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      const s = r.range;
      const a = (0, i.f)(
        (t) => {
          t.setUTCDate(1);
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCMonth(t.getUTCMonth() + n);
        },
        (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      const o = a.range;
    },
    61147: (t, n, e) => {
      e.d(n, { R: () => s });
      var i = e(12834);
      var r = e(29551);
      const s = (0, i.f)(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, n) => {
          t.setTime(+t + n * r.Tt);
        },
        (t, n) => (n - t) / r.Tt,
        (t) => t.getUTCSeconds()
      );
      const a = s.range;
    },
    20421: (t, n, e) => {
      e.d(n, { $Z: () => y, Cf: () => d, lk: () => g, yE: () => v });
      var i = e(9791);
      var r = e(97119);
      var s = e(29551);
      var a = e(26530);
      var o = e(61147);
      var u = e(23383);
      var h = e(9017);
      var c = e(20293);
      var l = e(61779);
      var f = e(77849);
      var _ = e(42706);
      function p(t, n, e, u, h, c) {
        const l = [
          [o.R, 1, s.Tt],
          [o.R, 5, 5 * s.Tt],
          [o.R, 15, 15 * s.Tt],
          [o.R, 30, 30 * s.Tt],
          [c, 1, s.rR],
          [c, 5, 5 * s.rR],
          [c, 15, 15 * s.rR],
          [c, 30, 30 * s.rR],
          [h, 1, s.JJ],
          [h, 3, 3 * s.JJ],
          [h, 6, 6 * s.JJ],
          [h, 12, 12 * s.JJ],
          [u, 1, s.Nm],
          [u, 2, 2 * s.Nm],
          [e, 1, s.Fq],
          [n, 1, s.Pv],
          [n, 3, 3 * s.Pv],
          [t, 1, s.MP],
        ];
        function f(t, n, e) {
          const i = n < t;
          if (i) [t, n] = [n, t];
          const r = e && typeof e.range === "function" ? e : _(t, n, e);
          const s = r ? r.range(t, +n + 1) : [];
          return i ? s.reverse() : s;
        }
        function _(n, e, o) {
          const u = Math.abs(e - n) / o;
          const h = (0, i.A)(([, , t]) => t).right(l, u);
          if (h === l.length) return t.every((0, r.sG)(n / s.MP, e / s.MP, o));
          if (h === 0) return a.y.every(Math.max((0, r.sG)(n, e, o), 1));
          const [c, f] = l[u / l[h - 1][2] < l[h][2] / u ? h - 1 : h];
          return c.every(f);
        }
        return [f, _];
      }
      const [y, g] = p(_.Mb, f.R6, l.Hl, c.TW, h.pz, u.vD);
      const [d, v] = p(_.he, f.Ui, l.YP, c.UA, h.Ag, u.wX);
    },
    61779: (t, n, e) => {
      e.d(n, { AB: () => o, Gu: () => h, Hl: () => m, Mo: () => c, PG: () => u, TU: () => l, YP: () => a, pT: () => T, rG: () => f, rt: () => b });
      var i = e(12834);
      var r = e(29551);
      function s(t) {
        return (0, i.f)(
          (n) => {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7));
            n.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setDate(t.getDate() + n * 7);
          },
          (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * r.rR) / r.Fq
        );
      }
      const a = s(0);
      const o = s(1);
      const u = s(2);
      const h = s(3);
      const c = s(4);
      const l = s(5);
      const f = s(6);
      const _ = a.range;
      const p = o.range;
      const y = u.range;
      const g = h.range;
      const d = c.range;
      const v = l.range;
      const x = f.range;
      function w(t) {
        return (0, i.f)(
          (n) => {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7));
            n.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCDate(t.getUTCDate() + n * 7);
          },
          (t, n) => (n - t) / r.Fq
        );
      }
      const m = w(0);
      const b = w(1);
      const A = w(2);
      const M = w(3);
      const T = w(4);
      const k = w(5);
      const N = w(6);
      const C = m.range;
      const $ = b.range;
      const U = A.range;
      const F = M.range;
      const D = T.range;
      const S = k.range;
      const P = N.range;
    },
    42706: (t, n, e) => {
      e.d(n, { Mb: () => a, he: () => r });
      var i = e(12834);
      const r = (0, i.f)(
        (t) => {
          t.setMonth(0, 1);
          t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n);
        },
        (t, n) => n.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      r.every = (t) =>
        !isFinite((t = Math.floor(t))) || !(t > 0)
          ? null
          : (0, i.f)(
              (n) => {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t);
                n.setMonth(0, 1);
                n.setHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setFullYear(n.getFullYear() + e * t);
              }
            );
      const s = r.range;
      const a = (0, i.f)(
        (t) => {
          t.setUTCMonth(0, 1);
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n);
        },
        (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      a.every = (t) =>
        !isFinite((t = Math.floor(t))) || !(t > 0)
          ? null
          : (0, i.f)(
              (n) => {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t);
                n.setUTCMonth(0, 1);
                n.setUTCHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setUTCFullYear(n.getUTCFullYear() + e * t);
              }
            );
      const o = a.range;
    },
    14036: (t, n, e) => {
      e.d(n, { M4: () => g, O1: () => d, tB: () => p });
      var i = 0,
        r = 0,
        s = 0,
        a = 1e3,
        o,
        u,
        h = 0,
        c = 0,
        l = 0,
        f = typeof performance === "object" && performance.now ? performance : Date,
        _ =
          typeof window === "object" && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function p() {
        return c || (_(y), (c = f.now() + l));
      }
      function y() {
        c = 0;
      }
      function g() {
        this._call = this._time = this._next = null;
      }
      g.prototype = d.prototype = {
        constructor: g,
        restart: function (t, n, e) {
          if (typeof t !== "function") throw new TypeError("callback is not a function");
          e = (e == null ? p() : +e) + (n == null ? 0 : +n);
          if (!this._next && u !== this) {
            if (u) u._next = this;
            else o = this;
            u = this;
          }
          this._call = t;
          this._time = e;
          b();
        },
        stop: function () {
          if (this._call) {
            this._call = null;
            this._time = Infinity;
            b();
          }
        },
      };
      function d(t, n, e) {
        var i = new g();
        i.restart(t, n, e);
        return i;
      }
      function v() {
        p();
        ++i;
        var t = o,
          n;
        while (t) {
          if ((n = c - t._time) >= 0) t._call.call(undefined, n);
          t = t._next;
        }
        --i;
      }
      function x() {
        c = (h = f.now()) + l;
        i = r = 0;
        try {
          v();
        } finally {
          i = 0;
          m();
          c = 0;
        }
      }
      function w() {
        var t = f.now(),
          n = t - h;
        if (n > a) (l -= n), (h = t);
      }
      function m() {
        var t,
          n = o,
          e,
          i = Infinity;
        while (n) {
          if (n._call) {
            if (i > n._time) i = n._time;
            (t = n), (n = n._next);
          } else {
            (e = n._next), (n._next = null);
            n = t ? (t._next = e) : (o = e);
          }
        }
        u = t;
        b(i);
      }
      function b(t) {
        if (i) return;
        if (r) r = clearTimeout(r);
        var n = t - c;
        if (n > 24) {
          if (t < Infinity) r = setTimeout(x, t - f.now() - l);
          if (s) s = clearInterval(s);
        } else {
          if (!s) (h = f.now()), (s = setInterval(w, a));
          (i = 1), _(x);
        }
      }
    },
    30352: (t, n, e) => {
      e.d(n, { B: () => i, v: () => r });
      class i extends Map {
        constructor(t, n = u) {
          super();
          Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } });
          if (t != null) for (const [e, i] of t) this.set(e, i);
        }
        get(t) {
          return super.get(s(this, t));
        }
        has(t) {
          return super.has(s(this, t));
        }
        set(t, n) {
          return super.set(a(this, t), n);
        }
        delete(t) {
          return super.delete(o(this, t));
        }
      }
      class r extends Set {
        constructor(t, n = u) {
          super();
          Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } });
          if (t != null) for (const e of t) this.add(e);
        }
        has(t) {
          return super.has(s(this, t));
        }
        add(t) {
          return super.add(a(this, t));
        }
        delete(t) {
          return super.delete(o(this, t));
        }
      }
      function s({ _intern: t, _key: n }, e) {
        const i = n(e);
        return t.has(i) ? t.get(i) : e;
      }
      function a({ _intern: t, _key: n }, e) {
        const i = n(e);
        if (t.has(i)) return t.get(i);
        t.set(i, e);
        return e;
      }
      function o({ _intern: t, _key: n }, e) {
        const i = n(e);
        if (t.has(i)) {
          e = t.get(e);
          t.delete(i);
        }
        return e;
      }
      function u(t) {
        return t !== null && typeof t === "object" ? t.valueOf() : t;
      }
    },
  },
]);
