"use strict";
(self.webpackChunk_jupyter_notebook_lab_extension = self.webpackChunk_jupyter_notebook_lab_extension || []).push([
  [93],
  {
    122: (e, n, t) => {
      t.d(n, { Z: () => c });
      var r = t(961),
        o = t.n(r),
        a = t(242),
        i = t.n(a)()(o());
      i.push([
        e.id,
        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-InterfaceSwitcher {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.jp-InterfaceSwitcher .lm-MenuBar-itemIcon svg {\n  vertical-align: sub;\n}\n\n.jp-nb-interface-switcher-button > .jp-ToolbarButtonComponent::part(content) {\n  flex-direction: row-reverse;\n}\n\n.jp-nb-interface-switcher-button > .jp-ToolbarButtonComponent > svg {\n  padding-left: 3px;\n}\n",
        "",
      ]);
      const c = i;
    },
    242: (e) => {
      e.exports = function (e) {
        var n = [];
        return (
          (n.toString = function () {
            return this.map(function (n) {
              var t = "",
                r = void 0 !== n[5];
              return (
                n[4] && (t += "@supports (".concat(n[4], ") {")),
                n[2] && (t += "@media ".concat(n[2], " {")),
                r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")),
                (t += e(n)),
                r && (t += "}"),
                n[2] && (t += "}"),
                n[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (n.i = function (e, t, r, o, a) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var i = {};
            if (r)
              for (var c = 0; c < this.length; c++) {
                var s = this[c][0];
                null != s && (i[s] = !0);
              }
            for (var u = 0; u < e.length; u++) {
              var p = [].concat(e[u]);
              (r && i[p[0]]) ||
                (void 0 !== a &&
                  (void 0 === p[5] || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")), (p[5] = a)),
                t && (p[2] ? ((p[1] = "@media ".concat(p[2], " {").concat(p[1], "}")), (p[2] = t)) : (p[2] = t)),
                o && (p[4] ? ((p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}")), (p[4] = o)) : (p[4] = "".concat(o))),
                n.push(p));
            }
          }),
          n
        );
      };
    },
    961: (e) => {
      e.exports = function (e) {
        return e[1];
      };
    },
    398: (e) => {
      var n = [];
      function t(e) {
        for (var t = -1, r = 0; r < n.length; r++)
          if (n[r].identifier === e) {
            t = r;
            break;
          }
        return t;
      }
      function r(e, r) {
        for (var a = {}, i = [], c = 0; c < e.length; c++) {
          var s = e[c],
            u = r.base ? s[0] + r.base : s[0],
            p = a[u] || 0,
            l = "".concat(u, " ").concat(p);
          a[u] = p + 1;
          var f = t(l),
            d = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
          if (-1 !== f) n[f].references++, n[f].updater(d);
          else {
            var v = o(d, r);
            (r.byIndex = c), n.splice(c, 0, { identifier: l, updater: v, references: 1 });
          }
          i.push(l);
        }
        return i;
      }
      function o(e, n) {
        var t = n.domAPI(n);
        return (
          t.update(e),
          function (n) {
            if (n) {
              if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
              t.update((e = n));
            } else t.remove();
          }
        );
      }
      e.exports = function (e, o) {
        var a = r((e = e || []), (o = o || {}));
        return function (e) {
          e = e || [];
          for (var i = 0; i < a.length; i++) {
            var c = t(a[i]);
            n[c].references--;
          }
          for (var s = r(e, o), u = 0; u < a.length; u++) {
            var p = t(a[u]);
            0 === n[p].references && (n[p].updater(), n.splice(p, 1));
          }
          a = s;
        };
      };
    },
    955: (e) => {
      var n = {};
      e.exports = function (e, t) {
        var r = (function (e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            n[e] = t;
          }
          return n[e];
        })(e);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(t);
      };
    },
    133: (e) => {
      e.exports = function (e) {
        var n = document.createElement("style");
        return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
      };
    },
    826: (e, n, t) => {
      e.exports = function (e) {
        var n = t.nc;
        n && e.setAttribute("nonce", n);
      };
    },
    608: (e) => {
      e.exports = function (e) {
        if ("undefined" == typeof document) return { update: function () {}, remove: function () {} };
        var n = e.insertStyleElement(e);
        return {
          update: function (t) {
            !(function (e, n, t) {
              var r = "";
              t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
              var o = void 0 !== t.layer;
              o && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")),
                (r += t.css),
                o && (r += "}"),
                t.media && (r += "}"),
                t.supports && (r += "}");
              var a = t.sourceMap;
              a &&
                "undefined" != typeof btoa &&
                (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                n.styleTagTransform(r, e, n.options);
            })(n, e, t);
          },
          remove: function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          },
        };
      };
    },
    51: (e) => {
      e.exports = function (e, n) {
        if (n.styleSheet) n.styleSheet.cssText = e;
        else {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(e));
        }
      };
    },
    93: (e, n, t) => {
      t.r(n);
      var r = t(398),
        o = t.n(r),
        a = t(608),
        i = t.n(a),
        c = t(955),
        s = t.n(c),
        u = t(826),
        p = t.n(u),
        l = t(133),
        f = t.n(l),
        d = t(51),
        v = t.n(d),
        m = t(122),
        h = {};
      (h.styleTagTransform = v()),
        (h.setAttributes = p()),
        (h.insert = s().bind(null, "head")),
        (h.domAPI = i()),
        (h.insertStyleElement = f()),
        o()(m.Z, h),
        m.Z && m.Z.locals && m.Z.locals;
    },
  },
]);
