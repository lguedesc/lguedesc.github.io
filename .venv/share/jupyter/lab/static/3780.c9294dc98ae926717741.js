"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3780],
  {
    23780: (e, t, a) => {
      a.r(t);
      a.d(t, { spreadsheet: () => r });
      const r = {
        name: "spreadsheet",
        startState: function () {
          return { stringType: null, stack: [] };
        },
        token: function (e, t) {
          if (!e) return;
          if (t.stack.length === 0) {
            if (e.peek() == '"' || e.peek() == "'") {
              t.stringType = e.peek();
              e.next();
              t.stack.unshift("string");
            }
          }
          switch (t.stack[0]) {
            case "string":
              while (t.stack[0] === "string" && !e.eol()) {
                if (e.peek() === t.stringType) {
                  e.next();
                  t.stack.shift();
                } else if (e.peek() === "\\") {
                  e.next();
                  e.next();
                } else {
                  e.match(/^.[^\\\"\']*/);
                }
              }
              return "string";
            case "characterClass":
              while (t.stack[0] === "characterClass" && !e.eol()) {
                if (!(e.match(/^[^\]\\]+/) || e.match(/^\\./))) t.stack.shift();
              }
              return "operator";
          }
          var a = e.peek();
          switch (a) {
            case "[":
              e.next();
              t.stack.unshift("characterClass");
              return "bracket";
            case ":":
              e.next();
              return "operator";
            case "\\":
              if (e.match(/\\[a-z]+/)) return "string.special";
              else {
                e.next();
                return "atom";
              }
            case ".":
            case ",":
            case ";":
            case "*":
            case "-":
            case "+":
            case "^":
            case "<":
            case "/":
            case "=":
              e.next();
              return "atom";
            case "$":
              e.next();
              return "builtin";
          }
          if (e.match(/\d+/)) {
            if (e.match(/^\w+/)) return "error";
            return "number";
          } else if (e.match(/^[a-zA-Z_]\w*/)) {
            if (e.match(/(?=[\(.])/, false)) return "keyword";
            return "variable";
          } else if (["[", "]", "(", ")", "{", "}"].indexOf(a) != -1) {
            e.next();
            return "bracket";
          } else if (!e.eatSpace()) {
            e.next();
          }
          return null;
        },
      };
    },
  },
]);
