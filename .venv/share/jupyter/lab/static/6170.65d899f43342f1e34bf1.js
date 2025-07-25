"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6170, 8368],
  {
    85987: (e, t, r) => {
      r.r(t);
      r.d(t, { javascript: () => i, json: () => a, jsonld: () => u, typescript: () => f });
      function n(e) {
        var t = e.statementIndent;
        var r = e.jsonld;
        var n = e.json || r;
        var i = e.typescript;
        var a = e.wordCharacters || /[\w$\xa1-\uffff]/;
        var u = (function () {
          function e(e) {
            return { type: e, style: "keyword" };
          }
          var t = e("keyword a"),
            r = e("keyword b"),
            n = e("keyword c"),
            i = e("keyword d");
          var a = e("operator"),
            u = { type: "atom", style: "atom" };
          return {
            if: e("if"),
            while: t,
            with: t,
            else: r,
            do: r,
            try: r,
            finally: r,
            return: i,
            break: i,
            continue: i,
            new: e("new"),
            delete: n,
            void: n,
            throw: n,
            debugger: e("debugger"),
            var: e("var"),
            const: e("var"),
            let: e("var"),
            function: e("function"),
            catch: e("catch"),
            for: e("for"),
            switch: e("switch"),
            case: e("case"),
            default: e("default"),
            in: a,
            typeof: a,
            instanceof: a,
            true: u,
            false: u,
            null: u,
            undefined: u,
            NaN: u,
            Infinity: u,
            this: e("this"),
            class: e("class"),
            super: e("atom"),
            yield: n,
            export: e("export"),
            import: e("import"),
            extends: n,
            await: n,
          };
        })();
        var f = /[+\-*&%=<>!?|~^@]/;
        var s = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        function o(e) {
          var t = false,
            r,
            n = false;
          while ((r = e.next()) != null) {
            if (!t) {
              if (r == "/" && !n) return;
              if (r == "[") n = true;
              else if (n && r == "]") n = false;
            }
            t = !t && r == "\\";
          }
        }
        var l, c;
        function p(e, t, r) {
          l = e;
          c = r;
          return t;
        }
        function d(e, t) {
          var r = e.next();
          if (r == '"' || r == "'") {
            t.tokenize = m(r);
            return t.tokenize(e, t);
          } else if (r == "." && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
            return p("number", "number");
          } else if (r == "." && e.match("..")) {
            return p("spread", "meta");
          } else if (/[\[\]{}\(\),;\:\.]/.test(r)) {
            return p(r);
          } else if (r == "=" && e.eat(">")) {
            return p("=>", "operator");
          } else if (r == "0" && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
            return p("number", "number");
          } else if (/\d/.test(r)) {
            e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
            return p("number", "number");
          } else if (r == "/") {
            if (e.eat("*")) {
              t.tokenize = v;
              return v(e, t);
            } else if (e.eat("/")) {
              e.skipToEnd();
              return p("comment", "comment");
            } else if (et(e, t, 1)) {
              o(e);
              e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
              return p("regexp", "string.special");
            } else {
              e.eat("=");
              return p("operator", "operator", e.current());
            }
          } else if (r == "`") {
            t.tokenize = k;
            return k(e, t);
          } else if (r == "#" && e.peek() == "!") {
            e.skipToEnd();
            return p("meta", "meta");
          } else if (r == "#" && e.eatWhile(a)) {
            return p("variable", "property");
          } else if ((r == "<" && e.match("!--")) || (r == "-" && e.match("->") && !/\S/.test(e.string.slice(0, e.start)))) {
            e.skipToEnd();
            return p("comment", "comment");
          } else if (f.test(r)) {
            if (r != ">" || !t.lexical || t.lexical.type != ">") {
              if (e.eat("=")) {
                if (r == "!" || r == "=") e.eat("=");
              } else if (/[<>*+\-|&?]/.test(r)) {
                e.eat(r);
                if (r == ">") e.eat(r);
              }
            }
            if (r == "?" && e.eat(".")) return p(".");
            return p("operator", "operator", e.current());
          } else if (a.test(r)) {
            e.eatWhile(a);
            var n = e.current();
            if (t.lastType != ".") {
              if (u.propertyIsEnumerable(n)) {
                var i = u[n];
                return p(i.type, i.style, n);
              }
              if (n == "async" && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false)) return p("async", "keyword", n);
            }
            return p("variable", "variable", n);
          }
        }
        function m(e) {
          return function (t, n) {
            var i = false,
              a;
            if (r && t.peek() == "@" && t.match(s)) {
              n.tokenize = d;
              return p("jsonld-keyword", "meta");
            }
            while ((a = t.next()) != null) {
              if (a == e && !i) break;
              i = !i && a == "\\";
            }
            if (!i) n.tokenize = d;
            return p("string", "string");
          };
        }
        function v(e, t) {
          var r = false,
            n;
          while ((n = e.next())) {
            if (n == "/" && r) {
              t.tokenize = d;
              break;
            }
            r = n == "*";
          }
          return p("comment", "comment");
        }
        function k(e, t) {
          var r = false,
            n;
          while ((n = e.next()) != null) {
            if (!r && (n == "`" || (n == "$" && e.eat("{")))) {
              t.tokenize = d;
              break;
            }
            r = !r && n == "\\";
          }
          return p("quasi", "string.special", e.current());
        }
        var h = "([{}])";
        function y(e, t) {
          if (t.fatArrowAt) t.fatArrowAt = null;
          var r = e.string.indexOf("=>", e.start);
          if (r < 0) return;
          if (i) {
            var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, r));
            if (n) r = n.index;
          }
          var u = 0,
            f = false;
          for (var s = r - 1; s >= 0; --s) {
            var o = e.string.charAt(s);
            var l = h.indexOf(o);
            if (l >= 0 && l < 3) {
              if (!u) {
                ++s;
                break;
              }
              if (--u == 0) {
                if (o == "(") f = true;
                break;
              }
            } else if (l >= 3 && l < 6) {
              ++u;
            } else if (a.test(o)) {
              f = true;
            } else if (/["'\/`]/.test(o)) {
              for (; ; --s) {
                if (s == 0) return;
                var c = e.string.charAt(s - 1);
                if (c == o && e.string.charAt(s - 2) != "\\") {
                  s--;
                  break;
                }
              }
            } else if (f && !u) {
              ++s;
              break;
            }
          }
          if (f && !u) t.fatArrowAt = s;
        }
        var w = { atom: true, number: true, variable: true, string: true, regexp: true, this: true, import: true, "jsonld-keyword": true };
        function b(e, t, r, n, i, a) {
          this.indented = e;
          this.column = t;
          this.type = r;
          this.prev = i;
          this.info = a;
          if (n != null) this.align = n;
        }
        function g(e, t) {
          for (var r = e.localVars; r; r = r.next) if (r.name == t) return true;
          for (var n = e.context; n; n = n.prev) {
            for (var r = n.vars; r; r = r.next) if (r.name == t) return true;
          }
        }
        function x(e, t, r, i, a) {
          var u = e.cc;
          j.state = e;
          j.stream = a;
          j.marked = null;
          j.cc = u;
          j.style = t;
          if (!e.lexical.hasOwnProperty("align")) e.lexical.align = true;
          while (true) {
            var f = u.length ? u.pop() : n ? P : q;
            if (f(r, i)) {
              while (u.length && u[u.length - 1].lex) u.pop()();
              if (j.marked) return j.marked;
              if (r == "variable" && g(e, i)) return "variableName.local";
              return t;
            }
          }
        }
        var j = { state: null, column: null, marked: null, cc: null };
        function S() {
          for (var e = arguments.length - 1; e >= 0; e--) j.cc.push(arguments[e]);
        }
        function A() {
          S.apply(null, arguments);
          return true;
        }
        function L(e, t) {
          for (var r = t; r; r = r.next) if (r.name == e) return true;
          return false;
        }
        function T(t) {
          var r = j.state;
          j.marked = "def";
          if (r.context) {
            if (r.lexical.info == "var" && r.context && r.context.block) {
              var n = N(t, r.context);
              if (n != null) {
                r.context = n;
                return;
              }
            } else if (!L(t, r.localVars)) {
              r.localVars = new I(t, r.localVars);
              return;
            }
          }
          if (e.globalVars && !L(t, r.globalVars)) r.globalVars = new I(t, r.globalVars);
        }
        function N(e, t) {
          if (!t) {
            return null;
          } else if (t.block) {
            var r = N(e, t.prev);
            if (!r) return null;
            if (r == t.prev) return t;
            return new O(r, t.vars, true);
          } else if (L(e, t.vars)) {
            return t;
          } else {
            return new O(t.prev, new I(e, t.vars), false);
          }
        }
        function V(e) {
          return e == "public" || e == "private" || e == "protected" || e == "abstract" || e == "readonly";
        }
        function O(e, t, r) {
          this.prev = e;
          this.vars = t;
          this.block = r;
        }
        function I(e, t) {
          this.name = e;
          this.next = t;
        }
        var E = new I("this", new I("arguments", null));
        function z() {
          j.state.context = new O(j.state.context, j.state.localVars, false);
          j.state.localVars = E;
        }
        function C() {
          j.state.context = new O(j.state.context, j.state.localVars, true);
          j.state.localVars = null;
        }
        z.lex = C.lex = true;
        function _() {
          j.state.localVars = j.state.context.vars;
          j.state.context = j.state.context.prev;
        }
        _.lex = true;
        function $(e, t) {
          var r = function () {
            var r = j.state,
              n = r.indented;
            if (r.lexical.type == "stat") n = r.lexical.indented;
            else for (var i = r.lexical; i && i.type == ")" && i.align; i = i.prev) n = i.indented;
            r.lexical = new b(n, j.stream.column(), e, null, r.lexical, t);
          };
          r.lex = true;
          return r;
        }
        function D() {
          var e = j.state;
          if (e.lexical.prev) {
            if (e.lexical.type == ")") e.indented = e.lexical.indented;
            e.lexical = e.lexical.prev;
          }
        }
        D.lex = true;
        function F(e) {
          function t(r) {
            if (r == e) return A();
            else if (e == ";" || r == "}" || r == ")" || r == "]") return S();
            else return A(t);
          }
          return t;
        }
        function q(e, t) {
          if (e == "var") return A($("vardef", t), Se, F(";"), D);
          if (e == "keyword a") return A($("form"), B, q, D);
          if (e == "keyword b") return A($("form"), q, D);
          if (e == "keyword d") return j.stream.match(/^\s*$/, false) ? A() : A($("stat"), G, F(";"), D);
          if (e == "debugger") return A(F(";"));
          if (e == "{") return A($("}"), C, se, D, _);
          if (e == ";") return A();
          if (e == "if") {
            if (j.state.lexical.info == "else" && j.state.cc[j.state.cc.length - 1] == D) j.state.cc.pop()();
            return A($("form"), B, q, D, Oe);
          }
          if (e == "function") return A(Ce);
          if (e == "for") return A($("form"), C, Ie, q, _, D);
          if (e == "class" || (i && t == "interface")) {
            j.marked = "keyword";
            return A($("form", e == "class" ? e : t), qe, D);
          }
          if (e == "variable") {
            if (i && t == "declare") {
              j.marked = "keyword";
              return A(q);
            } else if (i && (t == "module" || t == "enum" || t == "type") && j.stream.match(/^\s*\w/, false)) {
              j.marked = "keyword";
              if (t == "enum") return A(Re);
              else if (t == "type") return A($e, F("operator"), de, F(";"));
              else return A($("form"), Ae, F("{"), $("}"), se, D, D);
            } else if (i && t == "namespace") {
              j.marked = "keyword";
              return A($("form"), P, q, D);
            } else if (i && t == "abstract") {
              j.marked = "keyword";
              return A(q);
            } else {
              return A($("stat"), te);
            }
          }
          if (e == "switch") return A($("form"), B, F("{"), $("}", "switch"), C, se, D, D, _);
          if (e == "case") return A(P, F(":"));
          if (e == "default") return A(F(":"));
          if (e == "catch") return A($("form"), z, U, q, D, _);
          if (e == "export") return A($("stat"), Be, D);
          if (e == "import") return A($("stat"), Ge, D);
          if (e == "async") return A(q);
          if (t == "@") return A(P, q);
          return S($("stat"), P, F(";"), D);
        }
        function U(e) {
          if (e == "(") return A(De, F(")"));
        }
        function P(e, t) {
          return Z(e, t, false);
        }
        function W(e, t) {
          return Z(e, t, true);
        }
        function B(e) {
          if (e != "(") return S();
          return A($(")"), G, F(")"), D);
        }
        function Z(e, t, r) {
          if (j.state.fatArrowAt == j.stream.start) {
            var n = r ? R : Q;
            if (e == "(") return A(z, $(")"), ue(De, ")"), D, F("=>"), n, _);
            else if (e == "variable") return S(z, Ae, F("=>"), n, _);
          }
          var a = r ? J : H;
          if (w.hasOwnProperty(e)) return A(a);
          if (e == "function") return A(Ce, a);
          if (e == "class" || (i && t == "interface")) {
            j.marked = "keyword";
            return A($("form"), Fe, D);
          }
          if (e == "keyword c" || e == "async") return A(r ? W : P);
          if (e == "(") return A($(")"), G, F(")"), D, a);
          if (e == "operator" || e == "spread") return A(r ? W : P);
          if (e == "[") return A($("]"), Qe, D, a);
          if (e == "{") return fe(ne, "}", null, a);
          if (e == "quasi") return S(K, a);
          if (e == "new") return A(X(r));
          return A();
        }
        function G(e) {
          if (e.match(/[;\}\)\],]/)) return S();
          return S(P);
        }
        function H(e, t) {
          if (e == ",") return A(G);
          return J(e, t, false);
        }
        function J(e, t, r) {
          var n = r == false ? H : J;
          var a = r == false ? P : W;
          if (e == "=>") return A(z, r ? R : Q, _);
          if (e == "operator") {
            if (/\+\+|--/.test(t) || (i && t == "!")) return A(n);
            if (i && t == "<" && j.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false)) return A($(">"), ue(de, ">"), D, n);
            if (t == "?") return A(P, F(":"), a);
            return A(a);
          }
          if (e == "quasi") {
            return S(K, n);
          }
          if (e == ";") return;
          if (e == "(") return fe(W, ")", "call", n);
          if (e == ".") return A(re, n);
          if (e == "[") return A($("]"), G, F("]"), D, n);
          if (i && t == "as") {
            j.marked = "keyword";
            return A(de, n);
          }
          if (e == "regexp") {
            j.state.lastType = j.marked = "operator";
            j.stream.backUp(j.stream.pos - j.stream.start - 1);
            return A(a);
          }
        }
        function K(e, t) {
          if (e != "quasi") return S();
          if (t.slice(t.length - 2) != "${") return A(K);
          return A(G, M);
        }
        function M(e) {
          if (e == "}") {
            j.marked = "string.special";
            j.state.tokenize = k;
            return A(K);
          }
        }
        function Q(e) {
          y(j.stream, j.state);
          return S(e == "{" ? q : P);
        }
        function R(e) {
          y(j.stream, j.state);
          return S(e == "{" ? q : W);
        }
        function X(e) {
          return function (t) {
            if (t == ".") return A(e ? ee : Y);
            else if (t == "variable" && i) return A(ge, e ? J : H);
            else return S(e ? W : P);
          };
        }
        function Y(e, t) {
          if (t == "target") {
            j.marked = "keyword";
            return A(H);
          }
        }
        function ee(e, t) {
          if (t == "target") {
            j.marked = "keyword";
            return A(J);
          }
        }
        function te(e) {
          if (e == ":") return A(D, q);
          return S(H, F(";"), D);
        }
        function re(e) {
          if (e == "variable") {
            j.marked = "property";
            return A();
          }
        }
        function ne(e, t) {
          if (e == "async") {
            j.marked = "property";
            return A(ne);
          } else if (e == "variable" || j.style == "keyword") {
            j.marked = "property";
            if (t == "get" || t == "set") return A(ie);
            var n;
            if (i && j.state.fatArrowAt == j.stream.start && (n = j.stream.match(/^\s*:\s*/, false))) j.state.fatArrowAt = j.stream.pos + n[0].length;
            return A(ae);
          } else if (e == "number" || e == "string") {
            j.marked = r ? "property" : j.style + " property";
            return A(ae);
          } else if (e == "jsonld-keyword") {
            return A(ae);
          } else if (i && V(t)) {
            j.marked = "keyword";
            return A(ne);
          } else if (e == "[") {
            return A(P, oe, F("]"), ae);
          } else if (e == "spread") {
            return A(W, ae);
          } else if (t == "*") {
            j.marked = "keyword";
            return A(ne);
          } else if (e == ":") {
            return S(ae);
          }
        }
        function ie(e) {
          if (e != "variable") return S(ae);
          j.marked = "property";
          return A(Ce);
        }
        function ae(e) {
          if (e == ":") return A(W);
          if (e == "(") return S(Ce);
        }
        function ue(e, t, r) {
          function n(i, a) {
            if (r ? r.indexOf(i) > -1 : i == ",") {
              var u = j.state.lexical;
              if (u.info == "call") u.pos = (u.pos || 0) + 1;
              return A(function (r, n) {
                if (r == t || n == t) return S();
                return S(e);
              }, n);
            }
            if (i == t || a == t) return A();
            if (r && r.indexOf(";") > -1) return S(e);
            return A(F(t));
          }
          return function (r, i) {
            if (r == t || i == t) return A();
            return S(e, n);
          };
        }
        function fe(e, t, r) {
          for (var n = 3; n < arguments.length; n++) j.cc.push(arguments[n]);
          return A($(t, r), ue(e, t), D);
        }
        function se(e) {
          if (e == "}") return A();
          return S(q, se);
        }
        function oe(e, t) {
          if (i) {
            if (e == ":") return A(de);
            if (t == "?") return A(oe);
          }
        }
        function le(e, t) {
          if (i && (e == ":" || t == "in")) return A(de);
        }
        function ce(e) {
          if (i && e == ":") {
            if (j.stream.match(/^\s*\w+\s+is\b/, false)) return A(P, pe, de);
            else return A(de);
          }
        }
        function pe(e, t) {
          if (t == "is") {
            j.marked = "keyword";
            return A();
          }
        }
        function de(e, t) {
          if (t == "keyof" || t == "typeof" || t == "infer" || t == "readonly") {
            j.marked = "keyword";
            return A(t == "typeof" ? W : de);
          }
          if (e == "variable" || t == "void") {
            j.marked = "type";
            return A(be);
          }
          if (t == "|" || t == "&") return A(de);
          if (e == "string" || e == "number" || e == "atom") return A(be);
          if (e == "[") return A($("]"), ue(de, "]", ","), D, be);
          if (e == "{") return A($("}"), ve, D, be);
          if (e == "(") return A(ue(we, ")"), me, be);
          if (e == "<") return A(ue(de, ">"), de);
          if (e == "quasi") return S(he, be);
        }
        function me(e) {
          if (e == "=>") return A(de);
        }
        function ve(e) {
          if (e.match(/[\}\)\]]/)) return A();
          if (e == "," || e == ";") return A(ve);
          return S(ke, ve);
        }
        function ke(e, t) {
          if (e == "variable" || j.style == "keyword") {
            j.marked = "property";
            return A(ke);
          } else if (t == "?" || e == "number" || e == "string") {
            return A(ke);
          } else if (e == ":") {
            return A(de);
          } else if (e == "[") {
            return A(F("variable"), le, F("]"), ke);
          } else if (e == "(") {
            return S(_e, ke);
          } else if (!e.match(/[;\}\)\],]/)) {
            return A();
          }
        }
        function he(e, t) {
          if (e != "quasi") return S();
          if (t.slice(t.length - 2) != "${") return A(he);
          return A(de, ye);
        }
        function ye(e) {
          if (e == "}") {
            j.marked = "string.special";
            j.state.tokenize = k;
            return A(he);
          }
        }
        function we(e, t) {
          if ((e == "variable" && j.stream.match(/^\s*[?:]/, false)) || t == "?") return A(we);
          if (e == ":") return A(de);
          if (e == "spread") return A(we);
          return S(de);
        }
        function be(e, t) {
          if (t == "<") return A($(">"), ue(de, ">"), D, be);
          if (t == "|" || e == "." || t == "&") return A(de);
          if (e == "[") return A(de, F("]"), be);
          if (t == "extends" || t == "implements") {
            j.marked = "keyword";
            return A(de);
          }
          if (t == "?") return A(de, F(":"), de);
        }
        function ge(e, t) {
          if (t == "<") return A($(">"), ue(de, ">"), D, be);
        }
        function xe() {
          return S(de, je);
        }
        function je(e, t) {
          if (t == "=") return A(de);
        }
        function Se(e, t) {
          if (t == "enum") {
            j.marked = "keyword";
            return A(Re);
          }
          return S(Ae, oe, Ne, Ve);
        }
        function Ae(e, t) {
          if (i && V(t)) {
            j.marked = "keyword";
            return A(Ae);
          }
          if (e == "variable") {
            T(t);
            return A();
          }
          if (e == "spread") return A(Ae);
          if (e == "[") return fe(Te, "]");
          if (e == "{") return fe(Le, "}");
        }
        function Le(e, t) {
          if (e == "variable" && !j.stream.match(/^\s*:/, false)) {
            T(t);
            return A(Ne);
          }
          if (e == "variable") j.marked = "property";
          if (e == "spread") return A(Ae);
          if (e == "}") return S();
          if (e == "[") return A(P, F("]"), F(":"), Le);
          return A(F(":"), Ae, Ne);
        }
        function Te() {
          return S(Ae, Ne);
        }
        function Ne(e, t) {
          if (t == "=") return A(W);
        }
        function Ve(e) {
          if (e == ",") return A(Se);
        }
        function Oe(e, t) {
          if (e == "keyword b" && t == "else") return A($("form", "else"), q, D);
        }
        function Ie(e, t) {
          if (t == "await") return A(Ie);
          if (e == "(") return A($(")"), Ee, D);
        }
        function Ee(e) {
          if (e == "var") return A(Se, ze);
          if (e == "variable") return A(ze);
          return S(ze);
        }
        function ze(e, t) {
          if (e == ")") return A();
          if (e == ";") return A(ze);
          if (t == "in" || t == "of") {
            j.marked = "keyword";
            return A(P, ze);
          }
          return S(P, ze);
        }
        function Ce(e, t) {
          if (t == "*") {
            j.marked = "keyword";
            return A(Ce);
          }
          if (e == "variable") {
            T(t);
            return A(Ce);
          }
          if (e == "(") return A(z, $(")"), ue(De, ")"), D, ce, q, _);
          if (i && t == "<") return A($(">"), ue(xe, ">"), D, Ce);
        }
        function _e(e, t) {
          if (t == "*") {
            j.marked = "keyword";
            return A(_e);
          }
          if (e == "variable") {
            T(t);
            return A(_e);
          }
          if (e == "(") return A(z, $(")"), ue(De, ")"), D, ce, _);
          if (i && t == "<") return A($(">"), ue(xe, ">"), D, _e);
        }
        function $e(e, t) {
          if (e == "keyword" || e == "variable") {
            j.marked = "type";
            return A($e);
          } else if (t == "<") {
            return A($(">"), ue(xe, ">"), D);
          }
        }
        function De(e, t) {
          if (t == "@") A(P, De);
          if (e == "spread") return A(De);
          if (i && V(t)) {
            j.marked = "keyword";
            return A(De);
          }
          if (i && e == "this") return A(oe, Ne);
          return S(Ae, oe, Ne);
        }
        function Fe(e, t) {
          if (e == "variable") return qe(e, t);
          return Ue(e, t);
        }
        function qe(e, t) {
          if (e == "variable") {
            T(t);
            return A(Ue);
          }
        }
        function Ue(e, t) {
          if (t == "<") return A($(">"), ue(xe, ">"), D, Ue);
          if (t == "extends" || t == "implements" || (i && e == ",")) {
            if (t == "implements") j.marked = "keyword";
            return A(i ? de : P, Ue);
          }
          if (e == "{") return A($("}"), Pe, D);
        }
        function Pe(e, t) {
          if (
            e == "async" ||
            (e == "variable" && (t == "static" || t == "get" || t == "set" || (i && V(t))) && j.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false))
          ) {
            j.marked = "keyword";
            return A(Pe);
          }
          if (e == "variable" || j.style == "keyword") {
            j.marked = "property";
            return A(We, Pe);
          }
          if (e == "number" || e == "string") return A(We, Pe);
          if (e == "[") return A(P, oe, F("]"), We, Pe);
          if (t == "*") {
            j.marked = "keyword";
            return A(Pe);
          }
          if (i && e == "(") return S(_e, Pe);
          if (e == ";" || e == ",") return A(Pe);
          if (e == "}") return A();
          if (t == "@") return A(P, Pe);
        }
        function We(e, t) {
          if (t == "!" || t == "?") return A(We);
          if (e == ":") return A(de, Ne);
          if (t == "=") return A(W);
          var r = j.state.lexical.prev,
            n = r && r.info == "interface";
          return S(n ? _e : Ce);
        }
        function Be(e, t) {
          if (t == "*") {
            j.marked = "keyword";
            return A(Me, F(";"));
          }
          if (t == "default") {
            j.marked = "keyword";
            return A(P, F(";"));
          }
          if (e == "{") return A(ue(Ze, "}"), Me, F(";"));
          return S(q);
        }
        function Ze(e, t) {
          if (t == "as") {
            j.marked = "keyword";
            return A(F("variable"));
          }
          if (e == "variable") return S(W, Ze);
        }
        function Ge(e) {
          if (e == "string") return A();
          if (e == "(") return S(P);
          if (e == ".") return S(H);
          return S(He, Je, Me);
        }
        function He(e, t) {
          if (e == "{") return fe(He, "}");
          if (e == "variable") T(t);
          if (t == "*") j.marked = "keyword";
          return A(Ke);
        }
        function Je(e) {
          if (e == ",") return A(He, Je);
        }
        function Ke(e, t) {
          if (t == "as") {
            j.marked = "keyword";
            return A(He);
          }
        }
        function Me(e, t) {
          if (t == "from") {
            j.marked = "keyword";
            return A(P);
          }
        }
        function Qe(e) {
          if (e == "]") return A();
          return S(ue(W, "]"));
        }
        function Re() {
          return S($("form"), Ae, F("{"), $("}"), ue(Xe, "}"), D, D);
        }
        function Xe() {
          return S(Ae, Ne);
        }
        function Ye(e, t) {
          return e.lastType == "operator" || e.lastType == "," || f.test(t.charAt(0)) || /[,.]/.test(t.charAt(0));
        }
        function et(e, t, r) {
          return (
            (t.tokenize == d && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)) ||
            (t.lastType == "quasi" && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
          );
        }
        return {
          name: e.name,
          startState: function (t) {
            var r = {
              tokenize: d,
              lastType: "sof",
              cc: [],
              lexical: new b(-t, 0, "block", false),
              localVars: e.localVars,
              context: e.localVars && new O(null, null, false),
              indented: 0,
            };
            if (e.globalVars && typeof e.globalVars == "object") r.globalVars = e.globalVars;
            return r;
          },
          token: function (e, t) {
            if (e.sol()) {
              if (!t.lexical.hasOwnProperty("align")) t.lexical.align = false;
              t.indented = e.indentation();
              y(e, t);
            }
            if (t.tokenize != v && e.eatSpace()) return null;
            var r = t.tokenize(e, t);
            if (l == "comment") return r;
            t.lastType = l == "operator" && (c == "++" || c == "--") ? "incdec" : l;
            return x(t, r, l, c, e);
          },
          indent: function (r, n, i) {
            if (r.tokenize == v || r.tokenize == k) return null;
            if (r.tokenize != d) return 0;
            var a = n && n.charAt(0),
              u = r.lexical,
              f;
            if (!/^\s*else\b/.test(n))
              for (var s = r.cc.length - 1; s >= 0; --s) {
                var o = r.cc[s];
                if (o == D) u = u.prev;
                else if (o != Oe && o != _) break;
              }
            while (
              (u.type == "stat" || u.type == "form") &&
              (a == "}" || ((f = r.cc[r.cc.length - 1]) && (f == H || f == J) && !/^[,\.=+\-*:?[\(]/.test(n)))
            )
              u = u.prev;
            if (t && u.type == ")" && u.prev.type == "stat") u = u.prev;
            var l = u.type,
              c = a == l;
            if (l == "vardef") return u.indented + (r.lastType == "operator" || r.lastType == "," ? u.info.length + 1 : 0);
            else if (l == "form" && a == "{") return u.indented;
            else if (l == "form") return u.indented + i.unit;
            else if (l == "stat") return u.indented + (Ye(r, n) ? t || i.unit : 0);
            else if (u.info == "switch" && !c && e.doubleIndentSwitch != false)
              return u.indented + (/^(?:case|default)\b/.test(n) ? i.unit : 2 * i.unit);
            else if (u.align) return u.column + (c ? 0 : 1);
            else return u.indented + (c ? 0 : i.unit);
          },
          languageData: {
            indentOnInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            commentTokens: n ? undefined : { line: "//", block: { open: "/*", close: "*/" } },
            closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
            wordChars: "$",
          },
        };
      }
      const i = n({ name: "javascript" });
      const a = n({ name: "json", json: true });
      const u = n({ name: "json", jsonld: true });
      const f = n({ name: "typescript", typescript: true });
    },
    96170: (e, t, r) => {
      r.r(t);
      r.d(t, { pug: () => M });
      var n = r(85987);
      var i = { "{": "}", "(": ")", "[": "]" };
      function a(e) {
        if (typeof e != "object") return e;
        let t = {};
        for (let r in e) {
          let n = e[r];
          t[r] = n instanceof Array ? n.slice() : n;
        }
        return t;
      }
      class u {
        constructor(e) {
          this.indentUnit = e;
          this.javaScriptLine = false;
          this.javaScriptLineExcludesColon = false;
          this.javaScriptArguments = false;
          this.javaScriptArgumentsDepth = 0;
          this.isInterpolating = false;
          this.interpolationNesting = 0;
          this.jsState = n.javascript.startState(e);
          this.restOfLine = "";
          this.isIncludeFiltered = false;
          this.isEach = false;
          this.lastTag = "";
          this.isAttrs = false;
          this.attrsNest = [];
          this.inAttributeName = true;
          this.attributeIsType = false;
          this.attrValue = "";
          this.indentOf = Infinity;
          this.indentToken = "";
        }
        copy() {
          var e = new u(this.indentUnit);
          e.javaScriptLine = this.javaScriptLine;
          e.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon;
          e.javaScriptArguments = this.javaScriptArguments;
          e.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth;
          e.isInterpolating = this.isInterpolating;
          e.interpolationNesting = this.interpolationNesting;
          e.jsState = (n.javascript.copyState || a)(this.jsState);
          e.restOfLine = this.restOfLine;
          e.isIncludeFiltered = this.isIncludeFiltered;
          e.isEach = this.isEach;
          e.lastTag = this.lastTag;
          e.isAttrs = this.isAttrs;
          e.attrsNest = this.attrsNest.slice();
          e.inAttributeName = this.inAttributeName;
          e.attributeIsType = this.attributeIsType;
          e.attrValue = this.attrValue;
          e.indentOf = this.indentOf;
          e.indentToken = this.indentToken;
          return e;
        }
      }
      function f(e, t) {
        if (e.sol()) {
          t.javaScriptLine = false;
          t.javaScriptLineExcludesColon = false;
        }
        if (t.javaScriptLine) {
          if (t.javaScriptLineExcludesColon && e.peek() === ":") {
            t.javaScriptLine = false;
            t.javaScriptLineExcludesColon = false;
            return;
          }
          var r = n.javascript.token(e, t.jsState);
          if (e.eol()) t.javaScriptLine = false;
          return r || true;
        }
      }
      function s(e, t) {
        if (t.javaScriptArguments) {
          if (t.javaScriptArgumentsDepth === 0 && e.peek() !== "(") {
            t.javaScriptArguments = false;
            return;
          }
          if (e.peek() === "(") {
            t.javaScriptArgumentsDepth++;
          } else if (e.peek() === ")") {
            t.javaScriptArgumentsDepth--;
          }
          if (t.javaScriptArgumentsDepth === 0) {
            t.javaScriptArguments = false;
            return;
          }
          var r = n.javascript.token(e, t.jsState);
          return r || true;
        }
      }
      function o(e) {
        if (e.match(/^yield\b/)) {
          return "keyword";
        }
      }
      function l(e) {
        if (e.match(/^(?:doctype) *([^\n]+)?/)) return "meta";
      }
      function c(e, t) {
        if (e.match("#{")) {
          t.isInterpolating = true;
          t.interpolationNesting = 0;
          return "punctuation";
        }
      }
      function p(e, t) {
        if (t.isInterpolating) {
          if (e.peek() === "}") {
            t.interpolationNesting--;
            if (t.interpolationNesting < 0) {
              e.next();
              t.isInterpolating = false;
              return "punctuation";
            }
          } else if (e.peek() === "{") {
            t.interpolationNesting++;
          }
          return n.javascript.token(e, t.jsState) || true;
        }
      }
      function d(e, t) {
        if (e.match(/^case\b/)) {
          t.javaScriptLine = true;
          return "keyword";
        }
      }
      function m(e, t) {
        if (e.match(/^when\b/)) {
          t.javaScriptLine = true;
          t.javaScriptLineExcludesColon = true;
          return "keyword";
        }
      }
      function v(e) {
        if (e.match(/^default\b/)) {
          return "keyword";
        }
      }
      function k(e, t) {
        if (e.match(/^extends?\b/)) {
          t.restOfLine = "string";
          return "keyword";
        }
      }
      function h(e, t) {
        if (e.match(/^append\b/)) {
          t.restOfLine = "variable";
          return "keyword";
        }
      }
      function y(e, t) {
        if (e.match(/^prepend\b/)) {
          t.restOfLine = "variable";
          return "keyword";
        }
      }
      function w(e, t) {
        if (e.match(/^block\b *(?:(prepend|append)\b)?/)) {
          t.restOfLine = "variable";
          return "keyword";
        }
      }
      function b(e, t) {
        if (e.match(/^include\b/)) {
          t.restOfLine = "string";
          return "keyword";
        }
      }
      function g(e, t) {
        if (e.match(/^include:([a-zA-Z0-9\-]+)/, false) && e.match("include")) {
          t.isIncludeFiltered = true;
          return "keyword";
        }
      }
      function x(e, t) {
        if (t.isIncludeFiltered) {
          var r = I(e, t);
          t.isIncludeFiltered = false;
          t.restOfLine = "string";
          return r;
        }
      }
      function j(e, t) {
        if (e.match(/^mixin\b/)) {
          t.javaScriptLine = true;
          return "keyword";
        }
      }
      function S(e, t) {
        if (e.match(/^\+([-\w]+)/)) {
          if (!e.match(/^\( *[-\w]+ *=/, false)) {
            t.javaScriptArguments = true;
            t.javaScriptArgumentsDepth = 0;
          }
          return "variable";
        }
        if (e.match("+#{", false)) {
          e.next();
          t.mixinCallAfter = true;
          return c(e, t);
        }
      }
      function A(e, t) {
        if (t.mixinCallAfter) {
          t.mixinCallAfter = false;
          if (!e.match(/^\( *[-\w]+ *=/, false)) {
            t.javaScriptArguments = true;
            t.javaScriptArgumentsDepth = 0;
          }
          return true;
        }
      }
      function L(e, t) {
        if (e.match(/^(if|unless|else if|else)\b/)) {
          t.javaScriptLine = true;
          return "keyword";
        }
      }
      function T(e, t) {
        if (e.match(/^(- *)?(each|for)\b/)) {
          t.isEach = true;
          return "keyword";
        }
      }
      function N(e, t) {
        if (t.isEach) {
          if (e.match(/^ in\b/)) {
            t.javaScriptLine = true;
            t.isEach = false;
            return "keyword";
          } else if (e.sol() || e.eol()) {
            t.isEach = false;
          } else if (e.next()) {
            while (!e.match(/^ in\b/, false) && e.next()) {}
            return "variable";
          }
        }
      }
      function V(e, t) {
        if (e.match(/^while\b/)) {
          t.javaScriptLine = true;
          return "keyword";
        }
      }
      function O(e, t) {
        var r;
        if ((r = e.match(/^(\w(?:[-:\w]*\w)?)\/?/))) {
          t.lastTag = r[1].toLowerCase();
          return "tag";
        }
      }
      function I(e, t) {
        if (e.match(/^:([\w\-]+)/)) {
          Z(e, t);
          return "atom";
        }
      }
      function E(e, t) {
        if (e.match(/^(!?=|-)/)) {
          t.javaScriptLine = true;
          return "punctuation";
        }
      }
      function z(e) {
        if (e.match(/^#([\w-]+)/)) {
          return "builtin";
        }
      }
      function C(e) {
        if (e.match(/^\.([\w-]+)/)) {
          return "className";
        }
      }
      function _(e, t) {
        if (e.peek() == "(") {
          e.next();
          t.isAttrs = true;
          t.attrsNest = [];
          t.inAttributeName = true;
          t.attrValue = "";
          t.attributeIsType = false;
          return "punctuation";
        }
      }
      function $(e, t) {
        if (t.isAttrs) {
          if (i[e.peek()]) {
            t.attrsNest.push(i[e.peek()]);
          }
          if (t.attrsNest[t.attrsNest.length - 1] === e.peek()) {
            t.attrsNest.pop();
          } else if (e.eat(")")) {
            t.isAttrs = false;
            return "punctuation";
          }
          if (t.inAttributeName && e.match(/^[^=,\)!]+/)) {
            if (e.peek() === "=" || e.peek() === "!") {
              t.inAttributeName = false;
              t.jsState = n.javascript.startState(2);
              if (t.lastTag === "script" && e.current().trim().toLowerCase() === "type") {
                t.attributeIsType = true;
              } else {
                t.attributeIsType = false;
              }
            }
            return "attribute";
          }
          var r = n.javascript.token(e, t.jsState);
          if (t.attrsNest.length === 0 && (r === "string" || r === "variable" || r === "keyword")) {
            try {
              Function("", "var x " + t.attrValue.replace(/,\s*$/, "").replace(/^!/, ""));
              t.inAttributeName = true;
              t.attrValue = "";
              e.backUp(e.current().length);
              return $(e, t);
            } catch (a) {}
          }
          t.attrValue += e.current();
          return r || true;
        }
      }
      function D(e, t) {
        if (e.match(/^&attributes\b/)) {
          t.javaScriptArguments = true;
          t.javaScriptArgumentsDepth = 0;
          return "keyword";
        }
      }
      function F(e) {
        if (e.sol() && e.eatSpace()) {
          return "indent";
        }
      }
      function q(e, t) {
        if (e.match(/^ *\/\/(-)?([^\n]*)/)) {
          t.indentOf = e.indentation();
          t.indentToken = "comment";
          return "comment";
        }
      }
      function U(e) {
        if (e.match(/^: */)) {
          return "colon";
        }
      }
      function P(e, t) {
        if (e.match(/^(?:\| ?| )([^\n]+)/)) {
          return "string";
        }
        if (e.match(/^(<[^\n]*)/, false)) {
          Z(e, t);
          e.skipToEnd();
          return t.indentToken;
        }
      }
      function W(e, t) {
        if (e.eat(".")) {
          Z(e, t);
          return "dot";
        }
      }
      function B(e) {
        e.next();
        return null;
      }
      function Z(e, t) {
        t.indentOf = e.indentation();
        t.indentToken = "string";
      }
      function G(e, t) {
        if (e.sol()) {
          t.restOfLine = "";
        }
        if (t.restOfLine) {
          e.skipToEnd();
          var r = t.restOfLine;
          t.restOfLine = "";
          return r;
        }
      }
      function H(e) {
        return new u(e);
      }
      function J(e) {
        return e.copy();
      }
      function K(e, t) {
        var r =
          G(e, t) ||
          p(e, t) ||
          x(e, t) ||
          N(e, t) ||
          $(e, t) ||
          f(e, t) ||
          s(e, t) ||
          A(e, t) ||
          o(e) ||
          l(e) ||
          c(e, t) ||
          d(e, t) ||
          m(e, t) ||
          v(e) ||
          k(e, t) ||
          h(e, t) ||
          y(e, t) ||
          w(e, t) ||
          b(e, t) ||
          g(e, t) ||
          j(e, t) ||
          S(e, t) ||
          L(e, t) ||
          T(e, t) ||
          V(e, t) ||
          O(e, t) ||
          I(e, t) ||
          E(e, t) ||
          z(e) ||
          C(e) ||
          _(e, t) ||
          D(e, t) ||
          F(e) ||
          P(e, t) ||
          q(e, t) ||
          U(e) ||
          W(e, t) ||
          B(e);
        return r === true ? null : r;
      }
      const M = { startState: H, copyState: J, token: K };
    },
  },
]);
