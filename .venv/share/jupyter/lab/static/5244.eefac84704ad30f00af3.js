"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5244, 4981],
  {
    75244: function (t, e, r) {
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var i =
        (this && this.__assign) ||
        function () {
          i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) t[i] = e[i];
              }
              return t;
            };
          return i.apply(this, arguments);
        };
      var a =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            a = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) a.push(i.value);
          } catch (l) {
            o = { error: l };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var n = 0, i = e.length, a; n < i; n++) {
              if (a || !(n in e)) {
                if (!a) a = Array.prototype.slice.call(e, 0, n);
                a[n] = e[n];
              }
            }
          return t.concat(a || Array.prototype.slice.call(e));
        };
      var l =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.SafeHandler = e.SafeMathDocumentMixin = void 0;
      var s = r(23466);
      function f(t) {
        var e;
        return (
          (e = (function (t) {
            n(e, t);
            function e() {
              var e, r;
              var n = [];
              for (var i = 0; i < arguments.length; i++) {
                n[i] = arguments[i];
              }
              var s = t.apply(this, o([], a(n), false)) || this;
              s.safe = new s.options.SafeClass(s, s.options.safeOptions);
              var f = s.constructor.ProcessBits;
              if (!f.has("safe")) {
                f.allocate("safe");
              }
              try {
                for (var u = l(s.inputJax), c = u.next(); !c.done; c = u.next()) {
                  var p = c.value;
                  if (p.name.match(/MathML/)) {
                    p.mathml.filterAttribute = s.safe.mmlAttribute.bind(s.safe);
                    p.mathml.filterClassList = s.safe.mmlClassList.bind(s.safe);
                  } else if (p.name.match(/TeX/)) {
                    p.postFilters.add(s.sanitize.bind(p), -5.5);
                  }
                }
              } catch (y) {
                e = { error: y };
              } finally {
                try {
                  if (c && !c.done && (r = u.return)) r.call(u);
                } finally {
                  if (e) throw e.error;
                }
              }
              return s;
            }
            e.prototype.sanitize = function (t) {
              t.math.root = this.parseOptions.root;
              t.document.safe.sanitize(t.math, t.document);
            };
            return e;
          })(t)),
          (e.OPTIONS = i(i({}, t.OPTIONS), { safeOptions: i({}, s.Safe.OPTIONS), SafeClass: s.Safe })),
          e
        );
      }
      e.SafeMathDocumentMixin = f;
      function u(t) {
        t.documentClass = f(t.documentClass);
        return t;
      }
      e.SafeHandler = u;
    },
    91894: function (t, e, r) {
      var n =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            a = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) a.push(i.value);
          } catch (l) {
            o = { error: l };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.SafeMethods = void 0;
      var a = r(86810);
      e.SafeMethods = {
        filterURL: function (t, e) {
          var r = (e.match(/^\s*([a-z]+):/i) || [null, ""])[1].toLowerCase();
          var n = t.allow.URLs;
          return n === "all" || (n === "safe" && (t.options.safeProtocols[r] || !r)) ? e : null;
        },
        filterClassList: function (t, e) {
          var r = this;
          var n = e.trim().replace(/\s\s+/g, " ").split(/ /);
          return n
            .map(function (e) {
              return r.filterClass(t, e) || "";
            })
            .join(" ")
            .trim()
            .replace(/\s\s+/g, "");
        },
        filterClass: function (t, e) {
          var r = t.allow.classes;
          return r === "all" || (r === "safe" && e.match(t.options.classPattern)) ? e : null;
        },
        filterID: function (t, e) {
          var r = t.allow.cssIDs;
          return r === "all" || (r === "safe" && e.match(t.options.idPattern)) ? e : null;
        },
        filterStyles: function (t, e) {
          var r, i, a, o;
          if (t.allow.styles === "all") return e;
          if (t.allow.styles !== "safe") return null;
          var l = t.adaptor;
          var s = t.options;
          try {
            var f = l.node("div", { style: e });
            var u = l.node("div");
            try {
              for (var c = n(Object.keys(s.safeStyles)), p = c.next(); !p.done; p = c.next()) {
                var y = p.value;
                if (s.styleParts[y]) {
                  try {
                    for (var h = ((a = void 0), n(["Top", "Right", "Bottom", "Left"])), v = h.next(); !v.done; v = h.next()) {
                      var d = v.value;
                      var m = y + d;
                      var b = this.filterStyle(t, m, f);
                      if (b) {
                        l.setStyle(u, m, b);
                      }
                    }
                  } catch (g) {
                    a = { error: g };
                  } finally {
                    try {
                      if (v && !v.done && (o = h.return)) o.call(h);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                } else {
                  var b = this.filterStyle(t, y, f);
                  if (b) {
                    l.setStyle(u, y, b);
                  }
                }
              }
            } catch (S) {
              r = { error: S };
            } finally {
              try {
                if (p && !p.done && (i = c.return)) i.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
            e = l.allStyles(u);
          } catch (O) {
            e = "";
          }
          return e;
        },
        filterStyle: function (t, e, r) {
          var n = t.adaptor.getStyle(r, e);
          if (
            typeof n !== "string" ||
            n === "" ||
            n.match(/^\s*calc/) ||
            (n.match(/javascript:/) && !t.options.safeProtocols.javascript) ||
            (n.match(/data:/) && !t.options.safeProtocols.data)
          ) {
            return null;
          }
          var i = e.replace(/Top|Right|Left|Bottom/, "");
          if (!t.options.safeStyles[e] && !t.options.safeStyles[i]) {
            return null;
          }
          return this.filterStyleValue(t, e, n, r);
        },
        filterStyleValue: function (t, e, r, n) {
          var i = t.options.styleLengths[e];
          if (!i) {
            return r;
          }
          if (typeof i !== "string") {
            return this.filterStyleLength(t, e, r);
          }
          var a = this.filterStyleLength(t, i, t.adaptor.getStyle(n, i));
          if (!a) {
            return null;
          }
          t.adaptor.setStyle(n, i, a);
          return t.adaptor.getStyle(n, e);
        },
        filterStyleLength: function (t, e, r) {
          if (!r.match(/^(.+)(em|ex|ch|rem|px|mm|cm|in|pt|pc|%)$/)) return null;
          var n = (0, a.length2em)(r, 1);
          var o = t.options.styleLengths[e];
          var l = i(Array.isArray(o) ? o : [-t.options.lengthMax, t.options.lengthMax], 2),
            s = l[0],
            f = l[1];
          return s <= n && n <= f ? r : (n < s ? s : f).toFixed(3).replace(/\.?0+$/, "") + "em";
        },
        filterFontSize: function (t, e) {
          return this.filterStyleLength(t, "fontSize", e);
        },
        filterSizeMultiplier: function (t, e) {
          var r = i(t.options.scriptsizemultiplierRange || [-Infinity, Infinity], 2),
            n = r[0],
            a = r[1];
          return Math.min(a, Math.max(n, parseFloat(e))).toString();
        },
        filterScriptLevel: function (t, e) {
          var r = i(t.options.scriptlevelRange || [-Infinity, Infinity], 2),
            n = r[0],
            a = r[1];
          return Math.min(a, Math.max(n, parseInt(e))).toString();
        },
        filterData: function (t, e, r) {
          return r.match(t.options.dataPattern) ? e : null;
        },
      };
    },
    23466: function (t, e, r) {
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) t[i] = e[i];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.Safe = void 0;
      var a = r(34981);
      var o = r(91894);
      var l = (function () {
        function t(t, e) {
          this.filterAttributes = new Map([
            ["href", "filterURL"],
            ["src", "filterURL"],
            ["altimg", "filterURL"],
            ["class", "filterClassList"],
            ["style", "filterStyles"],
            ["id", "filterID"],
            ["fontsize", "filterFontSize"],
            ["mathsize", "filterFontSize"],
            ["scriptminsize", "filterFontSize"],
            ["scriptsizemultiplier", "filterSizeMultiplier"],
            ["scriptlevel", "filterScriptLevel"],
            ["data-", "filterData"],
          ]);
          this.filterMethods = n({}, o.SafeMethods);
          this.adaptor = t.adaptor;
          this.options = e;
          this.allow = this.options.allow;
        }
        t.prototype.sanitize = function (t, e) {
          try {
            t.root.walkTree(this.sanitizeNode.bind(this));
          } catch (r) {
            e.options.compileError(e, t, r);
          }
        };
        t.prototype.sanitizeNode = function (t) {
          var e, r;
          var n = t.attributes.getAllAttributes();
          try {
            for (var a = i(Object.keys(n)), o = a.next(); !o.done; o = a.next()) {
              var l = o.value;
              var s = this.filterAttributes.get(l);
              if (s) {
                var f = this.filterMethods[s](this, n[l]);
                if (f) {
                  if (f !== (typeof f === "number" ? parseFloat(n[l]) : n[l])) {
                    n[l] = f;
                  }
                } else {
                  delete n[l];
                }
              }
            }
          } catch (u) {
            e = { error: u };
          } finally {
            try {
              if (o && !o.done && (r = a.return)) r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.prototype.mmlAttribute = function (t, e) {
          if (t === "class") return null;
          var r = this.filterAttributes.get(t);
          var n = r || (t.substr(0, 5) === "data-" ? this.filterAttributes.get("data-") : null);
          if (!n) {
            return e;
          }
          var i = this.filterMethods[n](this, e, t);
          return typeof i === "number" || typeof i === "boolean" ? String(i) : i;
        };
        t.prototype.mmlClassList = function (t) {
          var e = this;
          return t
            .map(function (t) {
              return e.filterMethods.filterClass(e, t);
            })
            .filter(function (t) {
              return t !== null;
            });
        };
        t.OPTIONS = {
          allow: { URLs: "safe", classes: "safe", cssIDs: "safe", styles: "safe" },
          lengthMax: 3,
          scriptsizemultiplierRange: [0.6, 1],
          scriptlevelRange: [-2, 2],
          classPattern: /^mjx-[-a-zA-Z0-9_.]+$/,
          idPattern: /^mjx-[-a-zA-Z0-9_.]+$/,
          dataPattern: /^data-mjx-/,
          safeProtocols: (0, a.expandable)({ http: true, https: true, file: true, javascript: false, data: false }),
          safeStyles: (0, a.expandable)({
            color: true,
            backgroundColor: true,
            border: true,
            cursor: true,
            margin: true,
            padding: true,
            textShadow: true,
            fontFamily: true,
            fontSize: true,
            fontStyle: true,
            fontWeight: true,
            opacity: true,
            outline: true,
          }),
          styleParts: (0, a.expandable)({ border: true, padding: true, margin: true, outline: true }),
          styleLengths: (0, a.expandable)({
            borderTop: "borderTopWidth",
            borderRight: "borderRightWidth",
            borderBottom: "borderBottomWidth",
            borderLeft: "borderLeftWidth",
            paddingTop: true,
            paddingRight: true,
            paddingBottom: true,
            paddingLeft: true,
            marginTop: true,
            marginRight: true,
            marginBottom: true,
            marginLeft: true,
            outlineTop: true,
            outlineRight: true,
            outlineBottom: true,
            outlineLeft: true,
            fontSize: [0.707, 1.44],
          }),
        };
        return t;
      })();
      e.Safe = l;
    },
    34981: function (t, e) {
      var r =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            a = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) a.push(i.value);
          } catch (l) {
            o = { error: l };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        };
      var i =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var n = 0, i = e.length, a; n < i; n++) {
              if (a || !(n in e)) {
                if (!a) a = Array.prototype.slice.call(e, 0, n);
                a[n] = e[n];
              }
            }
          return t.concat(a || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.lookup =
        e.separateOptions =
        e.selectOptionsFromKeys =
        e.selectOptions =
        e.userOptions =
        e.defaultOptions =
        e.insert =
        e.copy =
        e.keys =
        e.makeArray =
        e.expandable =
        e.Expandable =
        e.OPTIONS =
        e.REMOVE =
        e.APPEND =
        e.isObject =
          void 0;
      var a = {}.constructor;
      function o(t) {
        return typeof t === "object" && t !== null && (t.constructor === a || t.constructor === l);
      }
      e.isObject = o;
      e.APPEND = "[+]";
      e.REMOVE = "[-]";
      e.OPTIONS = {
        invalidOption: "warn",
        optionError: function (t, r) {
          if (e.OPTIONS.invalidOption === "fatal") {
            throw new Error(t);
          }
          console.warn("MathJax: " + t);
        },
      };
      var l = (function () {
        function t() {}
        return t;
      })();
      e.Expandable = l;
      function s(t) {
        return Object.assign(Object.create(l.prototype), t);
      }
      e.expandable = s;
      function f(t) {
        return Array.isArray(t) ? t : [t];
      }
      e.makeArray = f;
      function u(t) {
        if (!t) {
          return [];
        }
        return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
      }
      e.keys = u;
      function c(t) {
        var e, n;
        var i = {};
        try {
          for (var a = r(u(t)), f = a.next(); !f.done; f = a.next()) {
            var y = f.value;
            var h = Object.getOwnPropertyDescriptor(t, y);
            var v = h.value;
            if (Array.isArray(v)) {
              h.value = p([], v, false);
            } else if (o(v)) {
              h.value = c(v);
            }
            if (h.enumerable) {
              i[y] = h;
            }
          }
        } catch (d) {
          e = { error: d };
        } finally {
          try {
            if (f && !f.done && (n = a.return)) n.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        return Object.defineProperties(t.constructor === l ? s({}) : {}, i);
      }
      e.copy = c;
      function p(t, a, s) {
        var f, y;
        if (s === void 0) {
          s = true;
        }
        var h = function (r) {
          if (s && t[r] === undefined && t.constructor !== l) {
            if (typeof r === "symbol") {
              r = r.toString();
            }
            e.OPTIONS.optionError('Invalid option "'.concat(r, '" (no default value).'), r);
            return "continue";
          }
          var f = a[r],
            y = t[r];
          if (o(f) && y !== null && (typeof y === "object" || typeof y === "function")) {
            var h = u(f);
            if (
              Array.isArray(y) &&
              ((h.length === 1 && (h[0] === e.APPEND || h[0] === e.REMOVE) && Array.isArray(f[h[0]])) ||
                (h.length === 2 && h.sort().join(",") === e.APPEND + "," + e.REMOVE && Array.isArray(f[e.APPEND]) && Array.isArray(f[e.REMOVE])))
            ) {
              if (f[e.REMOVE]) {
                y = t[r] = y.filter(function (t) {
                  return f[e.REMOVE].indexOf(t) < 0;
                });
              }
              if (f[e.APPEND]) {
                t[r] = i(i([], n(y), false), n(f[e.APPEND]), false);
              }
            } else {
              p(y, f, s);
            }
          } else if (Array.isArray(f)) {
            t[r] = [];
            p(t[r], f, false);
          } else if (o(f)) {
            t[r] = c(f);
          } else {
            t[r] = f;
          }
        };
        try {
          for (var v = r(u(a)), d = v.next(); !d.done; d = v.next()) {
            var m = d.value;
            h(m);
          }
        } catch (b) {
          f = { error: b };
        } finally {
          try {
            if (d && !d.done && (y = v.return)) y.call(v);
          } finally {
            if (f) throw f.error;
          }
        }
        return t;
      }
      e.insert = p;
      function y(t) {
        var e = [];
        for (var r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }
        e.forEach(function (e) {
          return p(t, e, false);
        });
        return t;
      }
      e.defaultOptions = y;
      function h(t) {
        var e = [];
        for (var r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }
        e.forEach(function (e) {
          return p(t, e, true);
        });
        return t;
      }
      e.userOptions = h;
      function v(t) {
        var e, n;
        var i = [];
        for (var a = 1; a < arguments.length; a++) {
          i[a - 1] = arguments[a];
        }
        var o = {};
        try {
          for (var l = r(i), s = l.next(); !s.done; s = l.next()) {
            var f = s.value;
            if (t.hasOwnProperty(f)) {
              o[f] = t[f];
            }
          }
        } catch (u) {
          e = { error: u };
        } finally {
          try {
            if (s && !s.done && (n = l.return)) n.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        return o;
      }
      e.selectOptions = v;
      function d(t, e) {
        return v.apply(void 0, i([t], n(Object.keys(e)), false));
      }
      e.selectOptionsFromKeys = d;
      function m(t) {
        var e, n, i, a;
        var o = [];
        for (var l = 1; l < arguments.length; l++) {
          o[l - 1] = arguments[l];
        }
        var s = [];
        try {
          for (var f = r(o), u = f.next(); !u.done; u = f.next()) {
            var c = u.value;
            var p = {},
              y = {};
            try {
              for (var h = ((i = void 0), r(Object.keys(t || {}))), v = h.next(); !v.done; v = h.next()) {
                var d = v.value;
                (c[d] === undefined ? y : p)[d] = t[d];
              }
            } catch (m) {
              i = { error: m };
            } finally {
              try {
                if (v && !v.done && (a = h.return)) a.call(h);
              } finally {
                if (i) throw i.error;
              }
            }
            s.push(p);
            t = y;
          }
        } catch (b) {
          e = { error: b };
        } finally {
          try {
            if (u && !u.done && (n = f.return)) n.call(f);
          } finally {
            if (e) throw e.error;
          }
        }
        s.unshift(t);
        return s;
      }
      e.separateOptions = m;
      function b(t, e, r) {
        if (r === void 0) {
          r = null;
        }
        return e.hasOwnProperty(t) ? e[t] : r;
      }
      e.lookup = b;
    },
    86810: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.px = e.emRounded = e.em = e.percent = e.length2em = e.MATHSPACE = e.RELUNITS = e.UNITS = e.BIGDIMEN = void 0;
      e.BIGDIMEN = 1e6;
      e.UNITS = { px: 1, in: 96, cm: 96 / 2.54, mm: 96 / 25.4 };
      e.RELUNITS = { em: 1, ex: 0.431, pt: 1 / 10, pc: 12 / 10, mu: 1 / 18 };
      e.MATHSPACE = {
        veryverythinmathspace: 1 / 18,
        verythinmathspace: 2 / 18,
        thinmathspace: 3 / 18,
        mediummathspace: 4 / 18,
        thickmathspace: 5 / 18,
        verythickmathspace: 6 / 18,
        veryverythickmathspace: 7 / 18,
        negativeveryverythinmathspace: -1 / 18,
        negativeverythinmathspace: -2 / 18,
        negativethinmathspace: -3 / 18,
        negativemediummathspace: -4 / 18,
        negativethickmathspace: -5 / 18,
        negativeverythickmathspace: -6 / 18,
        negativeveryverythickmathspace: -7 / 18,
        thin: 0.04,
        medium: 0.06,
        thick: 0.1,
        normal: 1,
        big: 2,
        small: 1 / Math.sqrt(2),
        infinity: e.BIGDIMEN,
      };
      function r(t, r, n, i) {
        if (r === void 0) {
          r = 0;
        }
        if (n === void 0) {
          n = 1;
        }
        if (i === void 0) {
          i = 16;
        }
        if (typeof t !== "string") {
          t = String(t);
        }
        if (t === "" || t == null) {
          return r;
        }
        if (e.MATHSPACE[t]) {
          return e.MATHSPACE[t];
        }
        var a = t.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
        if (!a) {
          return r;
        }
        var o = parseFloat(a[1] || "1"),
          l = a[2];
        if (e.UNITS.hasOwnProperty(l)) {
          return (o * e.UNITS[l]) / i / n;
        }
        if (e.RELUNITS.hasOwnProperty(l)) {
          return o * e.RELUNITS[l];
        }
        if (l === "%") {
          return (o / 100) * r;
        }
        return o * r;
      }
      e.length2em = r;
      function n(t) {
        return (100 * t).toFixed(1).replace(/\.?0+$/, "") + "%";
      }
      e.percent = n;
      function i(t) {
        if (Math.abs(t) < 0.001) return "0";
        return t.toFixed(3).replace(/\.?0+$/, "") + "em";
      }
      e.em = i;
      function a(t, e) {
        if (e === void 0) {
          e = 16;
        }
        t = (Math.round(t * e) + 0.05) / e;
        if (Math.abs(t) < 0.001) return "0em";
        return t.toFixed(3).replace(/\.?0+$/, "") + "em";
      }
      e.emRounded = a;
      function o(t, r, n) {
        if (r === void 0) {
          r = -e.BIGDIMEN;
        }
        if (n === void 0) {
          n = 16;
        }
        t *= n;
        if (r && t < r) t = r;
        if (Math.abs(t) < 0.1) return "0";
        return t.toFixed(1).replace(/\.0$/, "") + "px";
      }
      e.px = o;
    },
  },
]);
