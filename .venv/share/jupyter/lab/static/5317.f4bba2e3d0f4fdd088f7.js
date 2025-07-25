"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5317],
  {
    55317: (e, n, t) => {
      t.r(n);
      t.d(n, { cmake: () => u });
      var r = /({)?[a-zA-Z0-9_]+(})?/;
      function i(e, n) {
        var t,
          r,
          i = false;
        while (!e.eol() && (t = e.next()) != n.pending) {
          if (t === "$" && r != "\\" && n.pending == '"') {
            i = true;
            break;
          }
          r = t;
        }
        if (i) {
          e.backUp(1);
        }
        if (t == n.pending) {
          n.continueString = false;
        } else {
          n.continueString = true;
        }
        return "string";
      }
      function a(e, n) {
        var t = e.next();
        if (t === "$") {
          if (e.match(r)) {
            return "variableName.special";
          }
          return "variable";
        }
        if (n.continueString) {
          e.backUp(1);
          return i(e, n);
        }
        if (e.match(/(\s+)?\w+\(/) || e.match(/(\s+)?\w+\ \(/)) {
          e.backUp(1);
          return "def";
        }
        if (t == "#") {
          e.skipToEnd();
          return "comment";
        }
        if (t == "'" || t == '"') {
          n.pending = t;
          return i(e, n);
        }
        if (t == "(" || t == ")") {
          return "bracket";
        }
        if (t.match(/[0-9]/)) {
          return "number";
        }
        e.eatWhile(/[\w-]/);
        return null;
      }
      const u = {
        name: "cmake",
        startState: function () {
          var e = {};
          e.inDefinition = false;
          e.inInclude = false;
          e.continueString = false;
          e.pending = false;
          return e;
        },
        token: function (e, n) {
          if (e.eatSpace()) return null;
          return a(e, n);
        },
      };
    },
  },
]);
