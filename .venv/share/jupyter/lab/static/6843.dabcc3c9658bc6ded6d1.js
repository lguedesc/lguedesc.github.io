"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6843],
  {
    6843: (e, t, n) => {
      n.r(t);
      n.d(t, { tiki: () => _ });
      function r(e, t, n) {
        return function (r, i) {
          while (!r.eol()) {
            if (r.match(t)) {
              i.tokenize = u;
              break;
            }
            r.next();
          }
          if (n) i.tokenize = n;
          return e;
        };
      }
      function i(e) {
        return function (t, n) {
          while (!t.eol()) {
            t.next();
          }
          n.tokenize = u;
          return e;
        };
      }
      function u(e, t) {
        function n(n) {
          t.tokenize = n;
          return n(e, t);
        }
        var a = e.sol();
        var o = e.next();
        switch (o) {
          case "{":
            e.eat("/");
            e.eatSpace();
            e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/);
            t.tokenize = c;
            return "tag";
          case "_":
            if (e.eat("_")) return n(r("strong", "__", u));
            break;
          case "'":
            if (e.eat("'")) return n(r("em", "''", u));
            break;
          case "(":
            if (e.eat("(")) return n(r("link", "))", u));
            break;
          case "[":
            return n(r("url", "]", u));
            break;
          case "|":
            if (e.eat("|")) return n(r("comment", "||"));
            break;
          case "-":
            if (e.eat("=")) {
              return n(r("header string", "=-", u));
            } else if (e.eat("-")) {
              return n(r("error tw-deleted", "--", u));
            }
            break;
          case "=":
            if (e.match("==")) return n(r("tw-underline", "===", u));
            break;
          case ":":
            if (e.eat(":")) return n(r("comment", "::"));
            break;
          case "^":
            return n(r("tw-box", "^"));
            break;
          case "~":
            if (e.match("np~")) return n(r("meta", "~/np~"));
            break;
        }
        if (a) {
          switch (o) {
            case "!":
              if (e.match("!!!!!")) {
                return n(i("header string"));
              } else if (e.match("!!!!")) {
                return n(i("header string"));
              } else if (e.match("!!!")) {
                return n(i("header string"));
              } else if (e.match("!!")) {
                return n(i("header string"));
              } else {
                return n(i("header string"));
              }
              break;
            case "*":
            case "#":
            case "+":
              return n(i("tw-listitem bracket"));
              break;
          }
        }
        return null;
      }
      var a, o;
      function c(e, t) {
        var n = e.next();
        var r = e.peek();
        if (n == "}") {
          t.tokenize = u;
          return "tag";
        } else if (n == "(" || n == ")") {
          return "bracket";
        } else if (n == "=") {
          o = "equals";
          if (r == ">") {
            e.next();
            r = e.peek();
          }
          if (!/[\'\"]/.test(r)) {
            t.tokenize = s();
          }
          return "operator";
        } else if (/[\'\"]/.test(n)) {
          t.tokenize = f(n);
          return t.tokenize(e, t);
        } else {
          e.eatWhile(/[^\s\u00a0=\"\'\/?]/);
          return "keyword";
        }
      }
      function f(e) {
        return function (t, n) {
          while (!t.eol()) {
            if (t.next() == e) {
              n.tokenize = c;
              break;
            }
          }
          return "string";
        };
      }
      function s() {
        return function (e, t) {
          while (!e.eol()) {
            var n = e.next();
            var r = e.peek();
            if (n == " " || n == "," || /[ )}]/.test(r)) {
              t.tokenize = c;
              break;
            }
          }
          return "string";
        };
      }
      var l, k;
      function p() {
        for (var e = arguments.length - 1; e >= 0; e--) l.cc.push(arguments[e]);
      }
      function d() {
        p.apply(null, arguments);
        return true;
      }
      function h(e, t) {
        var n = l.context && l.context.noIndent;
        l.context = { prev: l.context, pluginName: e, indent: l.indented, startOfLine: t, noIndent: n };
      }
      function g() {
        if (l.context) l.context = l.context.prev;
      }
      function b(e) {
        if (e == "openPlugin") {
          l.pluginName = a;
          return d(v, m(l.startOfLine));
        } else if (e == "closePlugin") {
          var t = false;
          if (l.context) {
            t = l.context.pluginName != a;
            g();
          } else {
            t = true;
          }
          if (t) k = "error";
          return d(x(t));
        } else if (e == "string") {
          if (!l.context || l.context.name != "!cdata") h("!cdata");
          if (l.tokenize == u) g();
          return d();
        } else return d();
      }
      function m(e) {
        return function (t) {
          if (t == "selfclosePlugin" || t == "endPlugin") return d();
          if (t == "endPlugin") {
            h(l.pluginName, e);
            return d();
          }
          return d();
        };
      }
      function x(e) {
        return function (t) {
          if (e) k = "error";
          if (t == "endPlugin") return d();
          return p();
        };
      }
      function v(e) {
        if (e == "keyword") {
          k = "attribute";
          return d(v);
        }
        if (e == "equals") return d(w, v);
        return p();
      }
      function w(e) {
        if (e == "keyword") {
          k = "string";
          return d();
        }
        if (e == "string") return d(z);
        return p();
      }
      function z(e) {
        if (e == "string") return d(z);
        else return p();
      }
      const _ = {
        name: "tiki",
        startState: function () {
          return { tokenize: u, cc: [], indented: 0, startOfLine: true, pluginName: null, context: null };
        },
        token: function (e, t) {
          if (e.sol()) {
            t.startOfLine = true;
            t.indented = e.indentation();
          }
          if (e.eatSpace()) return null;
          k = o = a = null;
          var n = t.tokenize(e, t);
          if ((n || o) && n != "comment") {
            l = t;
            while (true) {
              var r = t.cc.pop() || b;
              if (r(o || n)) break;
            }
          }
          t.startOfLine = false;
          return k || n;
        },
        indent: function (e, t, n) {
          var r = e.context;
          if (r && r.noIndent) return 0;
          if (r && /^{\//.test(t)) r = r.prev;
          while (r && !r.startOfLine) r = r.prev;
          if (r) return r.indent + n.unit;
          else return 0;
        },
      };
    },
  },
]);
