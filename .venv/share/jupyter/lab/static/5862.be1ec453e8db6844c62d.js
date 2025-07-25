"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5862],
  {
    95862: (e, a, t) => {
      t.r(a);
      t.d(a, { mathematica: () => A });
      var r = "[a-zA-Z\\$][a-zA-Z0-9\\$]*";
      var n = "(?:\\d+)";
      var i = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)";
      var u = "(?:\\.\\w+|\\w+\\.\\w*|\\w+)";
      var l = "(?:`(?:`?" + i + ")?)";
      var c = new RegExp("(?:" + n + "(?:\\^\\^" + u + l + "?(?:\\*\\^[+-]?\\d+)?))");
      var f = new RegExp("(?:" + i + l + "?(?:\\*\\^[+-]?\\d+)?)");
      var m = new RegExp("(?:`?)(?:" + r + ")(?:`(?:" + r + "))*(?:`?)");
      function o(e, a) {
        var t;
        t = e.next();
        if (t === '"') {
          a.tokenize = s;
          return a.tokenize(e, a);
        }
        if (t === "(") {
          if (e.eat("*")) {
            a.commentLevel++;
            a.tokenize = z;
            return a.tokenize(e, a);
          }
        }
        e.backUp(1);
        if (e.match(c, true, false)) {
          return "number";
        }
        if (e.match(f, true, false)) {
          return "number";
        }
        if (e.match(/(?:In|Out)\[[0-9]*\]/, true, false)) {
          return "atom";
        }
        if (e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, true, false)) {
          return "meta";
        }
        if (e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false)) {
          return "string.special";
        }
        if (e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false)) {
          return "variableName.special";
        }
        if (e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
          return "variableName.special";
        }
        if (e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false)) {
          return "variableName.special";
        }
        if (e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
          return "variableName.special";
        }
        if (e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false)) {
          return "character";
        }
        if (e.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
          return "bracket";
        }
        if (e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false)) {
          return "variableName.constant";
        }
        if (e.match(m, true, false)) {
          return "keyword";
        }
        if (e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false)) {
          return "operator";
        }
        e.next();
        return "error";
      }
      function s(e, a) {
        var t,
          r = false,
          n = false;
        while ((t = e.next()) != null) {
          if (t === '"' && !n) {
            r = true;
            break;
          }
          n = !n && t === "\\";
        }
        if (r && !n) {
          a.tokenize = o;
        }
        return "string";
      }
      function z(e, a) {
        var t, r;
        while (a.commentLevel > 0 && (r = e.next()) != null) {
          if (t === "(" && r === "*") a.commentLevel++;
          if (t === "*" && r === ")") a.commentLevel--;
          t = r;
        }
        if (a.commentLevel <= 0) {
          a.tokenize = o;
        }
        return "comment";
      }
      const A = {
        name: "mathematica",
        startState: function () {
          return { tokenize: o, commentLevel: 0 };
        },
        token: function (e, a) {
          if (e.eatSpace()) return null;
          return a.tokenize(e, a);
        },
        languageData: { commentTokens: { block: { open: "(*", close: "*)" } } },
      };
    },
  },
]);
