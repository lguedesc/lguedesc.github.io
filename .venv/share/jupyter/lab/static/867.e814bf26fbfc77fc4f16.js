"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [867],
  {
    90867: (e, t, r) => {
      r.r(t);
      r.d(t, { erlang: () => H });
      var n = ["-type", "-spec", "-export_type", "-opaque"];
      var i = ["after", "begin", "catch", "case", "cond", "end", "fun", "if", "let", "of", "query", "receive", "try", "when"];
      var a = /[\->,;]/;
      var o = ["->", ";", ","];
      var u = ["and", "andalso", "band", "bnot", "bor", "bsl", "bsr", "bxor", "div", "not", "or", "orelse", "rem", "xor"];
      var s = /[\+\-\*\/<>=\|:!]/;
      var c = ["=", "+", "-", "*", "/", ">", ">=", "<", "=<", "=:=", "==", "=/=", "/=", "||", "<-", "!"];
      var l = /[<\(\[\{]/;
      var f = ["<<", "(", "[", "{"];
      var _ = /[>\)\]\}]/;
      var p = ["}", "]", ")", ">>"];
      var m = [
        "is_atom",
        "is_binary",
        "is_bitstring",
        "is_boolean",
        "is_float",
        "is_function",
        "is_integer",
        "is_list",
        "is_number",
        "is_pid",
        "is_port",
        "is_record",
        "is_reference",
        "is_tuple",
        "atom",
        "binary",
        "bitstring",
        "boolean",
        "function",
        "integer",
        "list",
        "number",
        "pid",
        "port",
        "record",
        "reference",
        "tuple",
      ];
      var b = [
        "abs",
        "adler32",
        "adler32_combine",
        "alive",
        "apply",
        "atom_to_binary",
        "atom_to_list",
        "binary_to_atom",
        "binary_to_existing_atom",
        "binary_to_list",
        "binary_to_term",
        "bit_size",
        "bitstring_to_list",
        "byte_size",
        "check_process_code",
        "contact_binary",
        "crc32",
        "crc32_combine",
        "date",
        "decode_packet",
        "delete_module",
        "disconnect_node",
        "element",
        "erase",
        "exit",
        "float",
        "float_to_list",
        "garbage_collect",
        "get",
        "get_keys",
        "group_leader",
        "halt",
        "hd",
        "integer_to_list",
        "internal_bif",
        "iolist_size",
        "iolist_to_binary",
        "is_alive",
        "is_atom",
        "is_binary",
        "is_bitstring",
        "is_boolean",
        "is_float",
        "is_function",
        "is_integer",
        "is_list",
        "is_number",
        "is_pid",
        "is_port",
        "is_process_alive",
        "is_record",
        "is_reference",
        "is_tuple",
        "length",
        "link",
        "list_to_atom",
        "list_to_binary",
        "list_to_bitstring",
        "list_to_existing_atom",
        "list_to_float",
        "list_to_integer",
        "list_to_pid",
        "list_to_tuple",
        "load_module",
        "make_ref",
        "module_loaded",
        "monitor_node",
        "node",
        "node_link",
        "node_unlink",
        "nodes",
        "notalive",
        "now",
        "open_port",
        "pid_to_list",
        "port_close",
        "port_command",
        "port_connect",
        "port_control",
        "pre_loaded",
        "process_flag",
        "process_info",
        "processes",
        "purge_module",
        "put",
        "register",
        "registered",
        "round",
        "self",
        "setelement",
        "size",
        "spawn",
        "spawn_link",
        "spawn_monitor",
        "spawn_opt",
        "split_binary",
        "statistics",
        "term_to_binary",
        "time",
        "throw",
        "tl",
        "trunc",
        "tuple_size",
        "tuple_to_list",
        "unlink",
        "unregister",
        "whereis",
      ];
      var d = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/;
      var k = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
      function g(e, t) {
        if (t.in_string) {
          t.in_string = !y(e);
          return W(t, e, "string");
        }
        if (t.in_atom) {
          t.in_atom = !w(e);
          return W(t, e, "atom");
        }
        if (e.eatSpace()) {
          return W(t, e, "whitespace");
        }
        if (!Z(t) && e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) {
          if (z(e.current(), n)) {
            return W(t, e, "type");
          } else {
            return W(t, e, "attribute");
          }
        }
        var r = e.next();
        if (r == "%") {
          e.skipToEnd();
          return W(t, e, "comment");
        }
        if (r == ":") {
          return W(t, e, "colon");
        }
        if (r == "?") {
          e.eatSpace();
          e.eatWhile(d);
          return W(t, e, "macro");
        }
        if (r == "#") {
          e.eatSpace();
          e.eatWhile(d);
          return W(t, e, "record");
        }
        if (r == "$") {
          if (e.next() == "\\" && !e.match(k)) {
            return W(t, e, "error");
          }
          return W(t, e, "number");
        }
        if (r == ".") {
          return W(t, e, "dot");
        }
        if (r == "'") {
          if (!(t.in_atom = !w(e))) {
            if (e.match(/\s*\/\s*[0-9]/, false)) {
              e.match(/\s*\/\s*[0-9]/, true);
              return W(t, e, "fun");
            }
            if (e.match(/\s*\(/, false) || e.match(/\s*:/, false)) {
              return W(t, e, "function");
            }
          }
          return W(t, e, "atom");
        }
        if (r == '"') {
          t.in_string = !y(e);
          return W(t, e, "string");
        }
        if (/[A-Z_Ø-ÞÀ-Ö]/.test(r)) {
          e.eatWhile(d);
          return W(t, e, "variable");
        }
        if (/[a-z_ß-öø-ÿ]/.test(r)) {
          e.eatWhile(d);
          if (e.match(/\s*\/\s*[0-9]/, false)) {
            e.match(/\s*\/\s*[0-9]/, true);
            return W(t, e, "fun");
          }
          var g = e.current();
          if (z(g, i)) {
            return W(t, e, "keyword");
          } else if (z(g, u)) {
            return W(t, e, "operator");
          } else if (e.match(/\s*\(/, false)) {
            if (z(g, b) && (Z(t).token != ":" || Z(t, 2).token == "erlang")) {
              return W(t, e, "builtin");
            } else if (z(g, m)) {
              return W(t, e, "guard");
            } else {
              return W(t, e, "function");
            }
          } else if (S(e) == ":") {
            if (g == "erlang") {
              return W(t, e, "builtin");
            } else {
              return W(t, e, "function");
            }
          } else if (z(g, ["true", "false"])) {
            return W(t, e, "boolean");
          } else {
            return W(t, e, "atom");
          }
        }
        var x = /[0-9]/;
        var U = /[0-9a-zA-Z]/;
        if (x.test(r)) {
          e.eatWhile(x);
          if (e.eat("#")) {
            if (!e.eatWhile(U)) {
              e.backUp(1);
            }
          } else if (e.eat(".")) {
            if (!e.eatWhile(x)) {
              e.backUp(1);
            } else {
              if (e.eat(/[eE]/)) {
                if (e.eat(/[-+]/)) {
                  if (!e.eatWhile(x)) {
                    e.backUp(2);
                  }
                } else {
                  if (!e.eatWhile(x)) {
                    e.backUp(1);
                  }
                }
              }
            }
          }
          return W(t, e, "number");
        }
        if (h(e, l, f)) {
          return W(t, e, "open_paren");
        }
        if (h(e, _, p)) {
          return W(t, e, "close_paren");
        }
        if (v(e, a, o)) {
          return W(t, e, "separator");
        }
        if (v(e, s, c)) {
          return W(t, e, "operator");
        }
        return W(t, e, null);
      }
      function h(e, t, r) {
        if (e.current().length == 1 && t.test(e.current())) {
          e.backUp(1);
          while (t.test(e.peek())) {
            e.next();
            if (z(e.current(), r)) {
              return true;
            }
          }
          e.backUp(e.current().length - 1);
        }
        return false;
      }
      function v(e, t, r) {
        if (e.current().length == 1 && t.test(e.current())) {
          while (t.test(e.peek())) {
            e.next();
          }
          while (0 < e.current().length) {
            if (z(e.current(), r)) {
              return true;
            } else {
              e.backUp(1);
            }
          }
          e.next();
        }
        return false;
      }
      function y(e) {
        return x(e, '"', "\\");
      }
      function w(e) {
        return x(e, "'", "\\");
      }
      function x(e, t, r) {
        while (!e.eol()) {
          var n = e.next();
          if (n == t) {
            return true;
          } else if (n == r) {
            e.next();
          }
        }
        return false;
      }
      function S(e) {
        var t = e.match(/^\s*([^\s%])/, false);
        return t ? t[1] : "";
      }
      function z(e, t) {
        return -1 < t.indexOf(e);
      }
      function W(e, t, r) {
        j(e, A(r, t));
        switch (r) {
          case "atom":
            return "atom";
          case "attribute":
            return "attribute";
          case "boolean":
            return "atom";
          case "builtin":
            return "builtin";
          case "close_paren":
            return null;
          case "colon":
            return null;
          case "comment":
            return "comment";
          case "dot":
            return null;
          case "error":
            return "error";
          case "fun":
            return "meta";
          case "function":
            return "tag";
          case "guard":
            return "property";
          case "keyword":
            return "keyword";
          case "macro":
            return "macroName";
          case "number":
            return "number";
          case "open_paren":
            return null;
          case "operator":
            return "operator";
          case "record":
            return "bracket";
          case "separator":
            return null;
          case "string":
            return "string";
          case "type":
            return "def";
          case "variable":
            return "variable";
          default:
            return null;
        }
      }
      function U(e, t, r, n) {
        return { token: e, column: t, indent: r, type: n };
      }
      function A(e, t) {
        return U(t.current(), t.column(), t.indentation(), e);
      }
      function E(e) {
        return U(e, 0, 0, e);
      }
      function Z(e, t) {
        var r = e.tokenStack.length;
        var n = t ? t : 1;
        if (r < n) {
          return false;
        } else {
          return e.tokenStack[r - n];
        }
      }
      function j(e, t) {
        if (!(t.type == "comment" || t.type == "whitespace")) {
          e.tokenStack = q(e.tokenStack, t);
          e.tokenStack = C(e.tokenStack);
        }
      }
      function q(e, t) {
        var r = e.length - 1;
        if (0 < r && e[r].type === "record" && t.type === "dot") {
          e.pop();
        } else if (0 < r && e[r].type === "group") {
          e.pop();
          e.push(t);
        } else {
          e.push(t);
        }
        return e;
      }
      function C(e) {
        if (!e.length) return e;
        var t = e.length - 1;
        if (e[t].type === "dot") {
          return [];
        }
        if (t > 1 && e[t].type === "fun" && e[t - 1].token === "fun") {
          return e.slice(0, t - 1);
        }
        switch (e[t].token) {
          case "}":
            return T(e, { g: ["{"] });
          case "]":
            return T(e, { i: ["["] });
          case ")":
            return T(e, { i: ["("] });
          case ">>":
            return T(e, { i: ["<<"] });
          case "end":
            return T(e, { i: ["begin", "case", "fun", "if", "receive", "try"] });
          case ",":
            return T(e, { e: ["begin", "try", "when", "->", ",", "(", "[", "{", "<<"] });
          case "->":
            return T(e, { r: ["when"], m: ["try", "if", "case", "receive"] });
          case ";":
            return T(e, { E: ["case", "fun", "if", "receive", "try", "when"] });
          case "catch":
            return T(e, { e: ["try"] });
          case "of":
            return T(e, { e: ["case"] });
          case "after":
            return T(e, { e: ["receive", "try"] });
          default:
            return e;
        }
      }
      function T(e, t) {
        for (var r in t) {
          var n = e.length - 1;
          var i = t[r];
          for (var a = n - 1; -1 < a; a--) {
            if (z(e[a].token, i)) {
              var o = e.slice(0, a);
              switch (r) {
                case "m":
                  return o.concat(e[a]).concat(e[n]);
                case "r":
                  return o.concat(e[n]);
                case "i":
                  return o;
                case "g":
                  return o.concat(E("group"));
                case "E":
                  return o.concat(e[a]);
                case "e":
                  return o.concat(e[a]);
              }
            }
          }
        }
        return r == "E" ? [] : e;
      }
      function D(e, t, r) {
        var n;
        var i = N(t);
        var a = Z(e, 1);
        var o = Z(e, 2);
        if (e.in_string || e.in_atom) {
          return null;
        } else if (!o) {
          return 0;
        } else if (a.token == "when") {
          return a.column + r.unit;
        } else if (i === "when" && o.type === "function") {
          return o.indent + r.unit;
        } else if (i === "(" && a.token === "fun") {
          return a.column + 3;
        } else if (i === "catch" && (n = B(e, ["try"]))) {
          return n.column;
        } else if (z(i, ["end", "after", "of"])) {
          n = B(e, ["begin", "case", "fun", "if", "receive", "try"]);
          return n ? n.column : null;
        } else if (z(i, p)) {
          n = B(e, f);
          return n ? n.column : null;
        } else if (z(a.token, [",", "|", "||"]) || z(i, [",", "|", "||"])) {
          n = O(e);
          return n ? n.column + n.token.length : r.unit;
        } else if (a.token == "->") {
          if (z(o.token, ["receive", "case", "if", "try"])) {
            return o.column + r.unit + r.unit;
          } else {
            return o.column + r.unit;
          }
        } else if (z(a.token, f)) {
          return a.column + a.token.length;
        } else {
          n = $(e);
          return G(n) ? n.column + r.unit : 0;
        }
      }
      function N(e) {
        var t = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
        return G(t) && t.index === 0 ? t[0] : "";
      }
      function O(e) {
        var t = e.tokenStack.slice(0, -1);
        var r = F(t, "type", ["open_paren"]);
        return G(t[r]) ? t[r] : false;
      }
      function $(e) {
        var t = e.tokenStack;
        var r = F(t, "type", ["open_paren", "separator", "keyword"]);
        var n = F(t, "type", ["operator"]);
        if (G(r) && G(n) && r < n) {
          return t[r + 1];
        } else if (G(r)) {
          return t[r];
        } else {
          return false;
        }
      }
      function B(e, t) {
        var r = e.tokenStack;
        var n = F(r, "token", t);
        return G(r[n]) ? r[n] : false;
      }
      function F(e, t, r) {
        for (var n = e.length - 1; -1 < n; n--) {
          if (z(e[n][t], r)) {
            return n;
          }
        }
        return false;
      }
      function G(e) {
        return e !== false && e != null;
      }
      const H = {
        name: "erlang",
        startState() {
          return { tokenStack: [], in_string: false, in_atom: false };
        },
        token: g,
        indent: D,
        languageData: { commentTokens: { line: "%" } },
      };
    },
  },
]);
