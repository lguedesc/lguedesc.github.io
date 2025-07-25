"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7136],
  {
    97136: (e, t, r) => {
      r.r(t);
      r.d(t, { r: () => _ });
      function n(e) {
        var t = {};
        for (var r = 0; r < e.length; ++r) t[e[r]] = true;
        return t;
      }
      var i = ["NULL", "NA", "Inf", "NaN", "NA_integer_", "NA_real_", "NA_complex_", "NA_character_", "TRUE", "FALSE"];
      var a = ["list", "quote", "bquote", "eval", "return", "call", "parse", "deparse"];
      var l = ["if", "else", "repeat", "while", "function", "for", "in", "next", "break"];
      var f = ["if", "else", "repeat", "while", "function", "for"];
      var u = n(i);
      var c = n(a);
      var s = n(l);
      var o = n(f);
      var p = /[+\-*\/^<>=!&|~$:]/;
      var m;
      function d(e, t) {
        m = null;
        var r = e.next();
        if (r == "#") {
          e.skipToEnd();
          return "comment";
        } else if (r == "0" && e.eat("x")) {
          e.eatWhile(/[\da-f]/i);
          return "number";
        } else if (r == "." && e.eat(/\d/)) {
          e.match(/\d*(?:e[+\-]?\d+)?/);
          return "number";
        } else if (/\d/.test(r)) {
          e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/);
          return "number";
        } else if (r == "'" || r == '"') {
          t.tokenize = v(r);
          return "string";
        } else if (r == "`") {
          e.match(/[^`]+`/);
          return "string.special";
        } else if (r == "." && e.match(/.(?:[.]|\d+)/)) {
          return "keyword";
        } else if (/[a-zA-Z\.]/.test(r)) {
          e.eatWhile(/[\w\.]/);
          var n = e.current();
          if (u.propertyIsEnumerable(n)) return "atom";
          if (s.propertyIsEnumerable(n)) {
            if (o.propertyIsEnumerable(n) && !e.match(/\s*if(\s+|$)/, false)) m = "block";
            return "keyword";
          }
          if (c.propertyIsEnumerable(n)) return "builtin";
          return "variable";
        } else if (r == "%") {
          if (e.skipTo("%")) e.next();
          return "variableName.special";
        } else if ((r == "<" && e.eat("-")) || (r == "<" && e.match("<-")) || (r == "-" && e.match(/>>?/))) {
          return "operator";
        } else if (r == "=" && t.ctx.argList) {
          return "operator";
        } else if (p.test(r)) {
          if (r == "$") return "operator";
          e.eatWhile(p);
          return "operator";
        } else if (/[\(\){}\[\];]/.test(r)) {
          m = r;
          if (r == ";") return "punctuation";
          return null;
        } else {
          return null;
        }
      }
      function v(e) {
        return function (t, r) {
          if (t.eat("\\")) {
            var n = t.next();
            if (n == "x") t.match(/^[a-f0-9]{2}/i);
            else if ((n == "u" || n == "U") && t.eat("{") && t.skipTo("}")) t.next();
            else if (n == "u") t.match(/^[a-f0-9]{4}/i);
            else if (n == "U") t.match(/^[a-f0-9]{8}/i);
            else if (/[0-7]/.test(n)) t.match(/^[0-7]{1,2}/);
            return "string.special";
          } else {
            var i;
            while ((i = t.next()) != null) {
              if (i == e) {
                r.tokenize = d;
                break;
              }
              if (i == "\\") {
                t.backUp(1);
                break;
              }
            }
            return "string";
          }
        };
      }
      var k = 1,
        x = 2,
        b = 4;
      function h(e, t, r) {
        e.ctx = { type: t, indent: e.indent, flags: 0, column: r.column(), prev: e.ctx };
      }
      function g(e, t) {
        var r = e.ctx;
        e.ctx = { type: r.type, indent: r.indent, flags: r.flags | t, column: r.column, prev: r.prev };
      }
      function y(e) {
        e.indent = e.ctx.indent;
        e.ctx = e.ctx.prev;
      }
      const _ = {
        name: "r",
        startState: function (e) {
          return { tokenize: d, ctx: { type: "top", indent: -e, flags: x }, indent: 0, afterIdent: false };
        },
        token: function (e, t) {
          if (e.sol()) {
            if ((t.ctx.flags & 3) == 0) t.ctx.flags |= x;
            if (t.ctx.flags & b) y(t);
            t.indent = e.indentation();
          }
          if (e.eatSpace()) return null;
          var r = t.tokenize(e, t);
          if (r != "comment" && (t.ctx.flags & x) == 0) g(t, k);
          if ((m == ";" || m == "{" || m == "}") && t.ctx.type == "block") y(t);
          if (m == "{") h(t, "}", e);
          else if (m == "(") {
            h(t, ")", e);
            if (t.afterIdent) t.ctx.argList = true;
          } else if (m == "[") h(t, "]", e);
          else if (m == "block") h(t, "block", e);
          else if (m == t.ctx.type) y(t);
          else if (t.ctx.type == "block" && r != "comment") g(t, b);
          t.afterIdent = r == "variable" || r == "keyword";
          return r;
        },
        indent: function (e, t, r) {
          if (e.tokenize != d) return 0;
          var n = t && t.charAt(0),
            i = e.ctx,
            a = n == i.type;
          if (i.flags & b) i = i.prev;
          if (i.type == "block") return i.indent + (n == "{" ? 0 : r.unit);
          else if (i.flags & k) return i.column + (a ? 0 : 1);
          else return i.indent + (a ? 0 : r.unit);
        },
        languageData: { wordChars: ".", commentTokens: { line: "#" }, autocomplete: i.concat(a, l) },
      };
    },
  },
]);
