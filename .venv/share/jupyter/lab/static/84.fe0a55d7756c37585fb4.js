"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [84],
  {
    50084: (e, t, n) => {
      n.r(t);
      n.d(t, { shell: () => p });
      var r = {};
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          r[t[n]] = e;
        }
      }
      var i = ["true", "false"];
      var o = [
        "if",
        "then",
        "do",
        "else",
        "elif",
        "while",
        "until",
        "for",
        "in",
        "esac",
        "fi",
        "fin",
        "fil",
        "done",
        "exit",
        "set",
        "unset",
        "export",
        "function",
      ];
      var u = [
        "ab",
        "awk",
        "bash",
        "beep",
        "cat",
        "cc",
        "cd",
        "chown",
        "chmod",
        "chroot",
        "clear",
        "cp",
        "curl",
        "cut",
        "diff",
        "echo",
        "find",
        "gawk",
        "gcc",
        "get",
        "git",
        "grep",
        "hg",
        "kill",
        "killall",
        "ln",
        "ls",
        "make",
        "mkdir",
        "openssl",
        "mv",
        "nc",
        "nl",
        "node",
        "npm",
        "ping",
        "ps",
        "restart",
        "rm",
        "rmdir",
        "sed",
        "service",
        "sh",
        "shopt",
        "shred",
        "source",
        "sort",
        "sleep",
        "ssh",
        "start",
        "stop",
        "su",
        "sudo",
        "svn",
        "tee",
        "telnet",
        "top",
        "touch",
        "vi",
        "vim",
        "wall",
        "wc",
        "wget",
        "who",
        "write",
        "yes",
        "zsh",
      ];
      s("atom", i);
      s("keyword", o);
      s("builtin", u);
      function a(e, t) {
        if (e.eatSpace()) return null;
        var n = e.sol();
        var s = e.next();
        if (s === "\\") {
          e.next();
          return null;
        }
        if (s === "'" || s === '"' || s === "`") {
          t.tokens.unshift(f(s, s === "`" ? "quote" : "string"));
          return h(e, t);
        }
        if (s === "#") {
          if (n && e.eat("!")) {
            e.skipToEnd();
            return "meta";
          }
          e.skipToEnd();
          return "comment";
        }
        if (s === "$") {
          t.tokens.unshift(c);
          return h(e, t);
        }
        if (s === "+" || s === "=") {
          return "operator";
        }
        if (s === "-") {
          e.eat("-");
          e.eatWhile(/\w/);
          return "attribute";
        }
        if (s == "<") {
          if (e.match("<<")) return "operator";
          var i = e.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);
          if (i) {
            t.tokens.unshift(k(i[1] || i[2]));
            return "string.special";
          }
        }
        if (/\d/.test(s)) {
          e.eatWhile(/\d/);
          if (e.eol() || !/\w/.test(e.peek())) {
            return "number";
          }
        }
        e.eatWhile(/[\w-]/);
        var o = e.current();
        if (e.peek() === "=" && /\w+/.test(o)) return "def";
        return r.hasOwnProperty(o) ? r[o] : null;
      }
      function f(e, t) {
        var n = e == "(" ? ")" : e == "{" ? "}" : e;
        return function (r, s) {
          var i,
            o = false;
          while ((i = r.next()) != null) {
            if (i === n && !o) {
              s.tokens.shift();
              break;
            } else if (i === "$" && !o && e !== "'" && r.peek() != n) {
              o = true;
              r.backUp(1);
              s.tokens.unshift(c);
              break;
            } else if (!o && e !== n && i === e) {
              s.tokens.unshift(f(e, t));
              return h(r, s);
            } else if (!o && /['"]/.test(i) && !/['"]/.test(e)) {
              s.tokens.unshift(l(i, "string"));
              r.backUp(1);
              break;
            }
            o = !o && i === "\\";
          }
          return t;
        };
      }
      function l(e, t) {
        return function (n, r) {
          r.tokens[0] = f(e, t);
          n.next();
          return h(n, r);
        };
      }
      var c = function (e, t) {
        if (t.tokens.length > 1) e.eat("$");
        var n = e.next();
        if (/['"({]/.test(n)) {
          t.tokens[0] = f(n, n == "(" ? "quote" : n == "{" ? "def" : "string");
          return h(e, t);
        }
        if (!/\d/.test(n)) e.eatWhile(/\w/);
        t.tokens.shift();
        return "def";
      };
      function k(e) {
        return function (t, n) {
          if (t.sol() && t.string == e) n.tokens.shift();
          t.skipToEnd();
          return "string.special";
        };
      }
      function h(e, t) {
        return (t.tokens[0] || a)(e, t);
      }
      const p = {
        name: "shell",
        startState: function () {
          return { tokens: [] };
        },
        token: function (e, t) {
          return h(e, t);
        },
        languageData: { autocomplete: i.concat(o, u), closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] }, commentTokens: { line: "#" } },
      };
    },
  },
]);
