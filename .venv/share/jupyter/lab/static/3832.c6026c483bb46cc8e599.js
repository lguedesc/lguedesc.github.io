"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3832],
  {
    83832: (e, t, n) => {
      n.r(t);
      n.d(t, { modelica: () => v });
      function r(e) {
        var t = {},
          n = e.split(" ");
        for (var r = 0; r < n.length; ++r) t[n[r]] = true;
        return t;
      }
      var i = r(
        "algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"
      );
      var l = r(
        "abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"
      );
      var a = r("Real Boolean Integer String");
      var o = [].concat(Object.keys(i), Object.keys(l), Object.keys(a));
      var s = /[;=\(:\),{}.*<>+\-\/^\[\]]/;
      var u = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/;
      var c = /[0-9]/;
      var f = /[_a-zA-Z]/;
      function p(e, t) {
        e.skipToEnd();
        t.tokenize = null;
        return "comment";
      }
      function k(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (n && r == "/") {
            t.tokenize = null;
            break;
          }
          n = r == "*";
        }
        return "comment";
      }
      function m(e, t) {
        var n = false,
          r;
        while ((r = e.next()) != null) {
          if (r == '"' && !n) {
            t.tokenize = null;
            t.sol = false;
            break;
          }
          n = !n && r == "\\";
        }
        return "string";
      }
      function d(e, t) {
        e.eatWhile(c);
        while (e.eat(c) || e.eat(f)) {}
        var n = e.current();
        if (t.sol && (n == "package" || n == "model" || n == "when" || n == "connector")) t.level++;
        else if (t.sol && n == "end" && t.level > 0) t.level--;
        t.tokenize = null;
        t.sol = false;
        if (i.propertyIsEnumerable(n)) return "keyword";
        else if (l.propertyIsEnumerable(n)) return "builtin";
        else if (a.propertyIsEnumerable(n)) return "atom";
        else return "variable";
      }
      function h(e, t) {
        while (e.eat(/[^']/)) {}
        t.tokenize = null;
        t.sol = false;
        if (e.eat("'")) return "variable";
        else return "error";
      }
      function b(e, t) {
        e.eatWhile(c);
        if (e.eat(".")) {
          e.eatWhile(c);
        }
        if (e.eat("e") || e.eat("E")) {
          if (!e.eat("-")) e.eat("+");
          e.eatWhile(c);
        }
        t.tokenize = null;
        t.sol = false;
        return "number";
      }
      const v = {
        name: "modelica",
        startState: function () {
          return { tokenize: null, level: 0, sol: true };
        },
        token: function (e, t) {
          if (t.tokenize != null) {
            return t.tokenize(e, t);
          }
          if (e.sol()) {
            t.sol = true;
          }
          if (e.eatSpace()) {
            t.tokenize = null;
            return null;
          }
          var n = e.next();
          if (n == "/" && e.eat("/")) {
            t.tokenize = p;
          } else if (n == "/" && e.eat("*")) {
            t.tokenize = k;
          } else if (u.test(n + e.peek())) {
            e.next();
            t.tokenize = null;
            return "operator";
          } else if (s.test(n)) {
            t.tokenize = null;
            return "operator";
          } else if (f.test(n)) {
            t.tokenize = d;
          } else if (n == "'" && e.peek() && e.peek() != "'") {
            t.tokenize = h;
          } else if (n == '"') {
            t.tokenize = m;
          } else if (c.test(n)) {
            t.tokenize = b;
          } else {
            t.tokenize = null;
            return "error";
          }
          return t.tokenize(e, t);
        },
        indent: function (e, t, n) {
          if (e.tokenize != null) return null;
          var r = e.level;
          if (/(algorithm)/.test(t)) r--;
          if (/(equation)/.test(t)) r--;
          if (/(initial algorithm)/.test(t)) r--;
          if (/(initial equation)/.test(t)) r--;
          if (/(end)/.test(t)) r--;
          if (r > 0) return n.unit * r;
          else return 0;
        },
        languageData: { commentTokens: { line: "//", block: { open: "/*", close: "*/" } }, autocomplete: o },
      };
    },
  },
]);
