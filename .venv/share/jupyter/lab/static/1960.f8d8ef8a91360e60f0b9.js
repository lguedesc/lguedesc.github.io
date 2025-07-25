"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1960],
  {
    41960: (e, t, n) => {
      n.r(t);
      n.d(t, { lua: () => d });
      function a(e) {
        return new RegExp("^(?:" + e.join("|") + ")", "i");
      }
      function r(e) {
        return new RegExp("^(?:" + e.join("|") + ")$", "i");
      }
      var i = r([
        "_G",
        "_VERSION",
        "assert",
        "collectgarbage",
        "dofile",
        "error",
        "getfenv",
        "getmetatable",
        "ipairs",
        "load",
        "loadfile",
        "loadstring",
        "module",
        "next",
        "pairs",
        "pcall",
        "print",
        "rawequal",
        "rawget",
        "rawset",
        "require",
        "select",
        "setfenv",
        "setmetatable",
        "tonumber",
        "tostring",
        "type",
        "unpack",
        "xpcall",
        "coroutine.create",
        "coroutine.resume",
        "coroutine.running",
        "coroutine.status",
        "coroutine.wrap",
        "coroutine.yield",
        "debug.debug",
        "debug.getfenv",
        "debug.gethook",
        "debug.getinfo",
        "debug.getlocal",
        "debug.getmetatable",
        "debug.getregistry",
        "debug.getupvalue",
        "debug.setfenv",
        "debug.sethook",
        "debug.setlocal",
        "debug.setmetatable",
        "debug.setupvalue",
        "debug.traceback",
        "close",
        "flush",
        "lines",
        "read",
        "seek",
        "setvbuf",
        "write",
        "io.close",
        "io.flush",
        "io.input",
        "io.lines",
        "io.open",
        "io.output",
        "io.popen",
        "io.read",
        "io.stderr",
        "io.stdin",
        "io.stdout",
        "io.tmpfile",
        "io.type",
        "io.write",
        "math.abs",
        "math.acos",
        "math.asin",
        "math.atan",
        "math.atan2",
        "math.ceil",
        "math.cos",
        "math.cosh",
        "math.deg",
        "math.exp",
        "math.floor",
        "math.fmod",
        "math.frexp",
        "math.huge",
        "math.ldexp",
        "math.log",
        "math.log10",
        "math.max",
        "math.min",
        "math.modf",
        "math.pi",
        "math.pow",
        "math.rad",
        "math.random",
        "math.randomseed",
        "math.sin",
        "math.sinh",
        "math.sqrt",
        "math.tan",
        "math.tanh",
        "os.clock",
        "os.date",
        "os.difftime",
        "os.execute",
        "os.exit",
        "os.getenv",
        "os.remove",
        "os.rename",
        "os.setlocale",
        "os.time",
        "os.tmpname",
        "package.cpath",
        "package.loaded",
        "package.loaders",
        "package.loadlib",
        "package.path",
        "package.preload",
        "package.seeall",
        "string.byte",
        "string.char",
        "string.dump",
        "string.find",
        "string.format",
        "string.gmatch",
        "string.gsub",
        "string.len",
        "string.lower",
        "string.match",
        "string.rep",
        "string.reverse",
        "string.sub",
        "string.upper",
        "table.concat",
        "table.insert",
        "table.maxn",
        "table.remove",
        "table.sort",
      ]);
      var o = r([
        "and",
        "break",
        "elseif",
        "false",
        "nil",
        "not",
        "or",
        "return",
        "true",
        "function",
        "end",
        "if",
        "then",
        "else",
        "do",
        "while",
        "repeat",
        "until",
        "for",
        "in",
        "local",
      ]);
      var u = r(["function", "if", "repeat", "do", "\\(", "{"]);
      var l = r(["end", "until", "\\)", "}"]);
      var s = a(["end", "until", "\\)", "}", "else", "elseif"]);
      function c(e) {
        var t = 0;
        while (e.eat("=")) ++t;
        e.eat("[");
        return t;
      }
      function g(e, t) {
        var n = e.next();
        if (n == "-" && e.eat("-")) {
          if (e.eat("[") && e.eat("[")) return (t.cur = m(c(e), "comment"))(e, t);
          e.skipToEnd();
          return "comment";
        }
        if (n == '"' || n == "'") return (t.cur = p(n))(e, t);
        if (n == "[" && /[\[=]/.test(e.peek())) return (t.cur = m(c(e), "string"))(e, t);
        if (/\d/.test(n)) {
          e.eatWhile(/[\w.%]/);
          return "number";
        }
        if (/[\w_]/.test(n)) {
          e.eatWhile(/[\w\\\-_.]/);
          return "variable";
        }
        return null;
      }
      function m(e, t) {
        return function (n, a) {
          var r = null,
            i;
          while ((i = n.next()) != null) {
            if (r == null) {
              if (i == "]") r = 0;
            } else if (i == "=") ++r;
            else if (i == "]" && r == e) {
              a.cur = g;
              break;
            } else r = null;
          }
          return t;
        };
      }
      function p(e) {
        return function (t, n) {
          var a = false,
            r;
          while ((r = t.next()) != null) {
            if (r == e && !a) break;
            a = !a && r == "\\";
          }
          if (!a) n.cur = g;
          return "string";
        };
      }
      const d = {
        name: "lua",
        startState: function () {
          return { basecol: 0, indentDepth: 0, cur: g };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          var n = t.cur(e, t);
          var a = e.current();
          if (n == "variable") {
            if (o.test(a)) n = "keyword";
            else if (i.test(a)) n = "builtin";
          }
          if (n != "comment" && n != "string") {
            if (u.test(a)) ++t.indentDepth;
            else if (l.test(a)) --t.indentDepth;
          }
          return n;
        },
        indent: function (e, t, n) {
          var a = s.test(t);
          return e.basecol + n.unit * (e.indentDepth - (a ? 1 : 0));
        },
        languageData: { indentOnInput: /^\s*(?:end|until|else|\)|\})$/, commentTokens: { line: "--", block: { open: "--[[", close: "]]--" } } },
      };
    },
  },
]);
