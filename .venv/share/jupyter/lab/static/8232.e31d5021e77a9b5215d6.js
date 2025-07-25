"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8232],
  {
    38232: (e, t, r) => {
      r.r(t);
      r.d(t, { pascal: () => p });
      function n(e) {
        var t = {},
          r = e.split(" ");
        for (var n = 0; n < r.length; ++n) t[r[n]] = true;
        return t;
      }
      var a = n(
        "absolute and array asm begin case const constructor destructor div do " +
          "downto else end file for function goto if implementation in inherited " +
          "inline interface label mod nil not object of operator or packed procedure " +
          "program record reintroduce repeat self set shl shr string then to type " +
          "unit until uses var while with xor as class dispinterface except exports " +
          "finalization finally initialization inline is library on out packed " +
          "property raise resourcestring threadvar try absolute abstract alias " +
          "assembler bitpacked break cdecl continue cppdecl cvar default deprecated " +
          "dynamic enumerator experimental export external far far16 forward generic " +
          "helper implements index interrupt iocheck local message name near " +
          "nodefault noreturn nostackframe oldfpccall otherwise overload override " +
          "pascal platform private protected public published read register " +
          "reintroduce result safecall saveregisters softfloat specialize static " +
          "stdcall stored strict unaligned unimplemented varargs virtual write"
      );
      var i = { null: true };
      var o = /[+\-*&%=<>!?|\/]/;
      function l(e, t) {
        var r = e.next();
        if (r == "#" && t.startOfLine) {
          e.skipToEnd();
          return "meta";
        }
        if (r == '"' || r == "'") {
          t.tokenize = u(r);
          return t.tokenize(e, t);
        }
        if (r == "(" && e.eat("*")) {
          t.tokenize = s;
          return s(e, t);
        }
        if (r == "{") {
          t.tokenize = c;
          return c(e, t);
        }
        if (/[\[\]\(\),;\:\.]/.test(r)) {
          return null;
        }
        if (/\d/.test(r)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (r == "/") {
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (o.test(r)) {
          e.eatWhile(o);
          return "operator";
        }
        e.eatWhile(/[\w\$_]/);
        var n = e.current().toLowerCase();
        if (a.propertyIsEnumerable(n)) return "keyword";
        if (i.propertyIsEnumerable(n)) return "atom";
        return "variable";
      }
      function u(e) {
        return function (t, r) {
          var n = false,
            a,
            i = false;
          while ((a = t.next()) != null) {
            if (a == e && !n) {
              i = true;
              break;
            }
            n = !n && a == "\\";
          }
          if (i || !n) r.tokenize = null;
          return "string";
        };
      }
      function s(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == ")" && r) {
            t.tokenize = null;
            break;
          }
          r = n == "*";
        }
        return "comment";
      }
      function c(e, t) {
        var r;
        while ((r = e.next())) {
          if (r == "}") {
            t.tokenize = null;
            break;
          }
        }
        return "comment";
      }
      const p = {
        name: "pascal",
        startState: function () {
          return { tokenize: null };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          var r = (t.tokenize || l)(e, t);
          if (r == "comment" || r == "meta") return r;
          return r;
        },
        languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { block: { open: "(*", close: "*)" } } },
      };
    },
  },
]);
