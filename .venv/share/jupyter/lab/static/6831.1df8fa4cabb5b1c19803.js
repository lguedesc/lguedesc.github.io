"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6831],
  {
    86831: (e, t, r) => {
      r.r(t);
      r.d(t, { fcl: () => d });
      var n = { term: true, method: true, accu: true, rule: true, then: true, is: true, and: true, or: true, if: true, default: true };
      var u = { var_input: true, var_output: true, fuzzify: true, defuzzify: true, function_block: true, ruleblock: true };
      var i = { end_ruleblock: true, end_defuzzify: true, end_function_block: true, end_fuzzify: true, end_var: true };
      var a = { true: true, false: true, nan: true, real: true, min: true, max: true, cog: true, cogs: true };
      var o = /[+\-*&^%:=<>!|\/]/;
      function l(e, t) {
        var r = e.next();
        if (/[\d\.]/.test(r)) {
          if (r == ".") {
            e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
          } else if (r == "0") {
            e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/);
          } else {
            e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
          }
          return "number";
        }
        if (r == "/" || r == "(") {
          if (e.eat("*")) {
            t.tokenize = f;
            return f(e, t);
          }
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (o.test(r)) {
          e.eatWhile(o);
          return "operator";
        }
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var l = e.current().toLowerCase();
        if (n.propertyIsEnumerable(l) || u.propertyIsEnumerable(l) || i.propertyIsEnumerable(l)) {
          return "keyword";
        }
        if (a.propertyIsEnumerable(l)) return "atom";
        return "variable";
      }
      function f(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if ((n == "/" || n == ")") && r) {
            t.tokenize = l;
            break;
          }
          r = n == "*";
        }
        return "comment";
      }
      function c(e, t, r, n, u) {
        this.indented = e;
        this.column = t;
        this.type = r;
        this.align = n;
        this.prev = u;
      }
      function s(e, t, r) {
        return (e.context = new c(e.indented, t, r, null, e.context));
      }
      function p(e) {
        if (!e.context.prev) return;
        var t = e.context.type;
        if (t == "end_block") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const d = {
        name: "fcl",
        startState: function (e) {
          return { tokenize: null, context: new c(-e, 0, "top", false), indented: 0, startOfLine: true };
        },
        token: function (e, t) {
          var r = t.context;
          if (e.sol()) {
            if (r.align == null) r.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
          }
          if (e.eatSpace()) return null;
          var n = (t.tokenize || l)(e, t);
          if (n == "comment") return n;
          if (r.align == null) r.align = true;
          var a = e.current().toLowerCase();
          if (u.propertyIsEnumerable(a)) s(t, e.column(), "end_block");
          else if (i.propertyIsEnumerable(a)) p(t);
          t.startOfLine = false;
          return n;
        },
        indent: function (e, t, r) {
          if (e.tokenize != l && e.tokenize != null) return 0;
          var n = e.context;
          var u = i.propertyIsEnumerable(t);
          if (n.align) return n.column + (u ? 0 : 1);
          else return n.indented + (u ? 0 : r.unit);
        },
        languageData: { commentTokens: { line: "//", block: { open: "(*", close: "*)" } } },
      };
    },
  },
]);
