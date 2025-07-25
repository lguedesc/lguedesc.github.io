"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5318],
  {
    55318: (e, t, n) => {
      n.r(t);
      n.d(t, { d: () => g });
      function r(e) {
        var t = {},
          n = e.split(" ");
        for (var r = 0; r < n.length; ++r) t[n[r]] = true;
        return t;
      }
      var i =
        "body catch class do else enum for foreach foreach_reverse if in interface mixin " +
        "out scope struct switch try union unittest version while with";
      const a = {
        keywords: r(
          "abstract alias align asm assert auto break case cast cdouble cent cfloat const continue " +
            "debug default delegate delete deprecated export extern final finally function goto immutable " +
            "import inout invariant is lazy macro module new nothrow override package pragma private " +
            "protected public pure ref return shared short static super synchronized template this " +
            "throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters " +
            i
        ),
        blockKeywords: r(i),
        builtin: r(
          "bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte " +
            "ucent uint ulong ushort wchar wstring void size_t sizediff_t"
        ),
        atoms: r("exit failure success true false null"),
        hooks: {
          "@": function (e, t) {
            e.eatWhile(/[\w\$_]/);
            return "meta";
          },
        },
      };
      var o = a.statementIndentUnit,
        l = a.keywords,
        u = a.builtin,
        s = a.blockKeywords,
        f = a.atoms,
        c = a.hooks,
        p = a.multiLineStrings;
      var d = /[+\-*&%=<>!?|\/]/;
      var m;
      function h(e, t) {
        var n = e.next();
        if (c[n]) {
          var r = c[n](e, t);
          if (r !== false) return r;
        }
        if (n == '"' || n == "'" || n == "`") {
          t.tokenize = y(n);
          return t.tokenize(e, t);
        }
        if (/[\[\]{}\(\),;\:\.]/.test(n)) {
          m = n;
          return null;
        }
        if (/\d/.test(n)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (n == "/") {
          if (e.eat("+")) {
            t.tokenize = k;
            return k(e, t);
          }
          if (e.eat("*")) {
            t.tokenize = b;
            return b(e, t);
          }
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (d.test(n)) {
          e.eatWhile(d);
          return "operator";
        }
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var i = e.current();
        if (l.propertyIsEnumerable(i)) {
          if (s.propertyIsEnumerable(i)) m = "newstatement";
          return "keyword";
        }
        if (u.propertyIsEnumerable(i)) {
          if (s.propertyIsEnumerable(i)) m = "newstatement";
          return "builtin";
        }
        if (f.propertyIsEnumerable(i)) return "atom";
        return "variable";
      }
      function y(e) {
        return function (t, n) {
          var r = false,
            i,
            a = false;
          while ((i = t.next()) != null) {
            if (i == e && !r) {
              a = true;
              break;
            }
            r = !r && i == "\\";
          }
          if (a || !(r || p)) n.tokenize = null;
          return "string";
        };
      }
      function b(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (r == "/" && n) {
            t.tokenize = null;
            break;
          }
          n = r == "*";
        }
        return "comment";
      }
      function k(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (r == "/" && n) {
            t.tokenize = null;
            break;
          }
          n = r == "+";
        }
        return "comment";
      }
      function v(e, t, n, r, i) {
        this.indented = e;
        this.column = t;
        this.type = n;
        this.align = r;
        this.prev = i;
      }
      function w(e, t, n) {
        var r = e.indented;
        if (e.context && e.context.type == "statement") r = e.context.indented;
        return (e.context = new v(r, t, n, null, e.context));
      }
      function _(e) {
        var t = e.context.type;
        if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const g = {
        name: "d",
        startState: function (e) {
          return { tokenize: null, context: new v(-e, 0, "top", false), indented: 0, startOfLine: true };
        },
        token: function (e, t) {
          var n = t.context;
          if (e.sol()) {
            if (n.align == null) n.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
          }
          if (e.eatSpace()) return null;
          m = null;
          var r = (t.tokenize || h)(e, t);
          if (r == "comment" || r == "meta") return r;
          if (n.align == null) n.align = true;
          if ((m == ";" || m == ":" || m == ",") && n.type == "statement") _(t);
          else if (m == "{") w(t, e.column(), "}");
          else if (m == "[") w(t, e.column(), "]");
          else if (m == "(") w(t, e.column(), ")");
          else if (m == "}") {
            while (n.type == "statement") n = _(t);
            if (n.type == "}") n = _(t);
            while (n.type == "statement") n = _(t);
          } else if (m == n.type) _(t);
          else if (((n.type == "}" || n.type == "top") && m != ";") || (n.type == "statement" && m == "newstatement")) w(t, e.column(), "statement");
          t.startOfLine = false;
          return r;
        },
        indent: function (e, t, n) {
          if (e.tokenize != h && e.tokenize != null) return null;
          var r = e.context,
            i = t && t.charAt(0);
          if (r.type == "statement" && i == "}") r = r.prev;
          var a = i == r.type;
          if (r.type == "statement") return r.indented + (i == "{" ? 0 : o || n.unit);
          else if (r.align) return r.column + (a ? 0 : 1);
          else return r.indented + (a ? 0 : n.unit);
        },
        languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } } },
      };
    },
  },
]);
