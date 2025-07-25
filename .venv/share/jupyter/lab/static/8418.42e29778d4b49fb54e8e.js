"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8418],
  {
    28418: (e, t, r) => {
      r.r(t);
      r.d(t, { go: () => d });
      var n = {
        break: true,
        case: true,
        chan: true,
        const: true,
        continue: true,
        default: true,
        defer: true,
        else: true,
        fallthrough: true,
        for: true,
        func: true,
        go: true,
        goto: true,
        if: true,
        import: true,
        interface: true,
        map: true,
        package: true,
        range: true,
        return: true,
        select: true,
        struct: true,
        switch: true,
        type: true,
        var: true,
        bool: true,
        byte: true,
        complex64: true,
        complex128: true,
        float32: true,
        float64: true,
        int8: true,
        int16: true,
        int32: true,
        int64: true,
        string: true,
        uint8: true,
        uint16: true,
        uint32: true,
        uint64: true,
        int: true,
        uint: true,
        uintptr: true,
        error: true,
        rune: true,
        any: true,
        comparable: true,
      };
      var u = {
        true: true,
        false: true,
        iota: true,
        nil: true,
        append: true,
        cap: true,
        close: true,
        complex: true,
        copy: true,
        delete: true,
        imag: true,
        len: true,
        make: true,
        new: true,
        panic: true,
        print: true,
        println: true,
        real: true,
        recover: true,
      };
      var i = /[+\-*&^%:=<>!|\/]/;
      var a;
      function l(e, t) {
        var r = e.next();
        if (r == '"' || r == "'" || r == "`") {
          t.tokenize = o(r);
          return t.tokenize(e, t);
        }
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
        if (/[\[\]{}\(\),;\:\.]/.test(r)) {
          a = r;
          return null;
        }
        if (r == "/") {
          if (e.eat("*")) {
            t.tokenize = c;
            return c(e, t);
          }
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (i.test(r)) {
          e.eatWhile(i);
          return "operator";
        }
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var l = e.current();
        if (n.propertyIsEnumerable(l)) {
          if (l == "case" || l == "default") a = "case";
          return "keyword";
        }
        if (u.propertyIsEnumerable(l)) return "atom";
        return "variable";
      }
      function o(e) {
        return function (t, r) {
          var n = false,
            u,
            i = false;
          while ((u = t.next()) != null) {
            if (u == e && !n) {
              i = true;
              break;
            }
            n = !n && e != "`" && u == "\\";
          }
          if (i || !(n || e == "`")) r.tokenize = l;
          return "string";
        };
      }
      function c(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "/" && r) {
            t.tokenize = l;
            break;
          }
          r = n == "*";
        }
        return "comment";
      }
      function f(e, t, r, n, u) {
        this.indented = e;
        this.column = t;
        this.type = r;
        this.align = n;
        this.prev = u;
      }
      function s(e, t, r) {
        return (e.context = new f(e.indented, t, r, null, e.context));
      }
      function p(e) {
        if (!e.context.prev) return;
        var t = e.context.type;
        if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const d = {
        name: "go",
        startState: function (e) {
          return { tokenize: null, context: new f(-e, 0, "top", false), indented: 0, startOfLine: true };
        },
        token: function (e, t) {
          var r = t.context;
          if (e.sol()) {
            if (r.align == null) r.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
            if (r.type == "case") r.type = "}";
          }
          if (e.eatSpace()) return null;
          a = null;
          var n = (t.tokenize || l)(e, t);
          if (n == "comment") return n;
          if (r.align == null) r.align = true;
          if (a == "{") s(t, e.column(), "}");
          else if (a == "[") s(t, e.column(), "]");
          else if (a == "(") s(t, e.column(), ")");
          else if (a == "case") r.type = "case";
          else if (a == "}" && r.type == "}") p(t);
          else if (a == r.type) p(t);
          t.startOfLine = false;
          return n;
        },
        indent: function (e, t, r) {
          if (e.tokenize != l && e.tokenize != null) return null;
          var n = e.context,
            u = t && t.charAt(0);
          if (n.type == "case" && /^(?:case|default)\b/.test(t)) return n.indented;
          var i = u == n.type;
          if (n.align) return n.column + (i ? 0 : 1);
          else return n.indented + (i ? 0 : r.unit);
        },
        languageData: { indentOnInput: /^\s([{}]|case |default\s*:)$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } } },
      };
    },
  },
]);
