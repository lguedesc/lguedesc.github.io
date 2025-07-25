"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7694],
  {
    57694: (e, n, t) => {
      t.r(n);
      t.d(n, { jinja2: () => c });
      var a = [
          "and",
          "as",
          "block",
          "endblock",
          "by",
          "cycle",
          "debug",
          "else",
          "elif",
          "extends",
          "filter",
          "endfilter",
          "firstof",
          "do",
          "for",
          "endfor",
          "if",
          "endif",
          "ifchanged",
          "endifchanged",
          "ifequal",
          "endifequal",
          "ifnotequal",
          "set",
          "raw",
          "endraw",
          "endifnotequal",
          "in",
          "include",
          "load",
          "not",
          "now",
          "or",
          "parsed",
          "regroup",
          "reversed",
          "spaceless",
          "call",
          "endcall",
          "macro",
          "endmacro",
          "endspaceless",
          "ssi",
          "templatetag",
          "openblock",
          "closeblock",
          "openvariable",
          "closevariable",
          "without",
          "context",
          "openbrace",
          "closebrace",
          "opencomment",
          "closecomment",
          "widthratio",
          "url",
          "with",
          "endwith",
          "get_current_language",
          "trans",
          "endtrans",
          "noop",
          "blocktrans",
          "endblocktrans",
          "get_available_languages",
          "get_current_language_bidi",
          "pluralize",
          "autoescape",
          "endautoescape",
        ],
        i = /^[+\-*&%=<>!?|~^]/,
        r = /^[:\[\(\{]/,
        s = ["true", "false"],
        l = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
      a = new RegExp("((" + a.join(")|(") + "))\\b");
      s = new RegExp("((" + s.join(")|(") + "))\\b");
      function o(e, n) {
        var t = e.peek();
        if (n.incomment) {
          if (!e.skipTo("#}")) {
            e.skipToEnd();
          } else {
            e.eatWhile(/\#|}/);
            n.incomment = false;
          }
          return "comment";
        } else if (n.intag) {
          if (n.operator) {
            n.operator = false;
            if (e.match(s)) {
              return "atom";
            }
            if (e.match(l)) {
              return "number";
            }
          }
          if (n.sign) {
            n.sign = false;
            if (e.match(s)) {
              return "atom";
            }
            if (e.match(l)) {
              return "number";
            }
          }
          if (n.instring) {
            if (t == n.instring) {
              n.instring = false;
            }
            e.next();
            return "string";
          } else if (t == "'" || t == '"') {
            n.instring = t;
            e.next();
            return "string";
          } else if (n.inbraces > 0 && t == ")") {
            e.next();
            n.inbraces--;
          } else if (t == "(") {
            e.next();
            n.inbraces++;
          } else if (n.inbrackets > 0 && t == "]") {
            e.next();
            n.inbrackets--;
          } else if (t == "[") {
            e.next();
            n.inbrackets++;
          } else if (!n.lineTag && (e.match(n.intag + "}") || (e.eat("-") && e.match(n.intag + "}")))) {
            n.intag = false;
            return "tag";
          } else if (e.match(i)) {
            n.operator = true;
            return "operator";
          } else if (e.match(r)) {
            n.sign = true;
          } else {
            if (e.column() == 1 && n.lineTag && e.match(a)) {
              return "keyword";
            }
            if (e.eat(" ") || e.sol()) {
              if (e.match(a)) {
                return "keyword";
              }
              if (e.match(s)) {
                return "atom";
              }
              if (e.match(l)) {
                return "number";
              }
              if (e.sol()) {
                e.next();
              }
            } else {
              e.next();
            }
          }
          return "variable";
        } else if (e.eat("{")) {
          if (e.eat("#")) {
            n.incomment = true;
            if (!e.skipTo("#}")) {
              e.skipToEnd();
            } else {
              e.eatWhile(/\#|}/);
              n.incomment = false;
            }
            return "comment";
          } else if ((t = e.eat(/\{|%/))) {
            n.intag = t;
            n.inbraces = 0;
            n.inbrackets = 0;
            if (t == "{") {
              n.intag = "}";
            }
            e.eat("-");
            return "tag";
          }
        } else if (e.eat("#")) {
          if (e.peek() == "#") {
            e.skipToEnd();
            return "comment";
          } else if (!e.eol()) {
            n.intag = true;
            n.lineTag = true;
            n.inbraces = 0;
            n.inbrackets = 0;
            return "tag";
          }
        }
        e.next();
      }
      const c = {
        name: "jinja2",
        startState: function () {
          return { tokenize: o, inbrackets: 0, inbraces: 0 };
        },
        token: function (e, n) {
          var t = n.tokenize(e, n);
          if (e.eol() && n.lineTag && !n.instring && n.inbraces == 0 && n.inbrackets == 0) {
            n.intag = false;
            n.lineTag = false;
          }
          return t;
        },
        languageData: { commentTokens: { block: { open: "{#", close: "#}", line: "##" } } },
      };
    },
  },
]);
