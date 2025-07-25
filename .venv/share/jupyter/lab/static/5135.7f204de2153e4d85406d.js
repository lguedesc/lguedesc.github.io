"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5135],
  {
    60148: (t, e, n) => {
      n.d(e, { CP: () => c, HT: () => u, PB: () => h, aC: () => l, lC: () => s, m: () => o, tk: () => a });
      var r = n(75905);
      var i = n(16750);
      var a = (0, r.K2)((t, e) => {
        const n = t.append("rect");
        n.attr("x", e.x);
        n.attr("y", e.y);
        n.attr("fill", e.fill);
        n.attr("stroke", e.stroke);
        n.attr("width", e.width);
        n.attr("height", e.height);
        if (e.name) {
          n.attr("name", e.name);
        }
        if (e.rx) {
          n.attr("rx", e.rx);
        }
        if (e.ry) {
          n.attr("ry", e.ry);
        }
        if (e.attrs !== void 0) {
          for (const t in e.attrs) {
            n.attr(t, e.attrs[t]);
          }
        }
        if (e.class) {
          n.attr("class", e.class);
        }
        return n;
      }, "drawRect");
      var s = (0, r.K2)((t, e) => {
        const n = { x: e.startx, y: e.starty, width: e.stopx - e.startx, height: e.stopy - e.starty, fill: e.fill, stroke: e.stroke, class: "rect" };
        const r = a(t, n);
        r.lower();
      }, "drawBackgroundRect");
      var o = (0, r.K2)((t, e) => {
        const n = e.text.replace(r.H1, " ");
        const i = t.append("text");
        i.attr("x", e.x);
        i.attr("y", e.y);
        i.attr("class", "legend");
        i.style("text-anchor", e.anchor);
        if (e.class) {
          i.attr("class", e.class);
        }
        const a = i.append("tspan");
        a.attr("x", e.x + e.textMargin * 2);
        a.text(n);
        return i;
      }, "drawText");
      var l = (0, r.K2)((t, e, n, r) => {
        const a = t.append("image");
        a.attr("x", e);
        a.attr("y", n);
        const s = (0, i.J)(r);
        a.attr("xlink:href", s);
      }, "drawImage");
      var c = (0, r.K2)((t, e, n, r) => {
        const a = t.append("use");
        a.attr("x", e);
        a.attr("y", n);
        const s = (0, i.J)(r);
        a.attr("xlink:href", `#${s}`);
      }, "drawEmbeddedImage");
      var h = (0, r.K2)(() => {
        const t = { x: 0, y: 0, width: 100, height: 100, fill: "#EDF2AE", stroke: "#666", anchor: "start", rx: 0, ry: 0 };
        return t;
      }, "getNoteRect");
      var u = (0, r.K2)(() => {
        const t = { x: 0, y: 0, width: 100, height: 100, "text-anchor": "start", style: "#666", textMargin: 0, rx: 0, ry: 0, tspan: true };
        return t;
      }, "getTextObj");
    },
    85135: (t, e, n) => {
      n.d(e, { diagram: () => J });
      var r = n(60148);
      var i = n(75905);
      var a = n(24982);
      var s = (function () {
        var t = (0, i.K2)(function (t, e, n, r) {
            for (n = n || {}, r = t.length; r--; n[t[r]] = e);
            return n;
          }, "o"),
          e = [6, 8, 10, 11, 12, 14, 16, 17, 18],
          n = [1, 9],
          r = [1, 10],
          a = [1, 11],
          s = [1, 12],
          o = [1, 13],
          l = [1, 14];
        var c = {
          trace: (0, i.K2)(function t() {}, "trace"),
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            journey: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NEWLINE: 10,
            title: 11,
            acc_title: 12,
            acc_title_value: 13,
            acc_descr: 14,
            acc_descr_value: 15,
            acc_descr_multiline_value: 16,
            section: 17,
            taskName: 18,
            taskData: 19,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "journey",
            6: "EOF",
            8: "SPACE",
            10: "NEWLINE",
            11: "title",
            12: "acc_title",
            13: "acc_title_value",
            14: "acc_descr",
            15: "acc_descr_value",
            16: "acc_descr_multiline_value",
            17: "section",
            18: "taskName",
            19: "taskData",
          },
          productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
          performAction: (0, i.K2)(function t(e, n, r, i, a, s, o) {
            var l = s.length - 1;
            switch (a) {
              case 1:
                return s[l - 1];
                break;
              case 2:
                this.$ = [];
                break;
              case 3:
                s[l - 1].push(s[l]);
                this.$ = s[l - 1];
                break;
              case 4:
              case 5:
                this.$ = s[l];
                break;
              case 6:
              case 7:
                this.$ = [];
                break;
              case 8:
                i.setDiagramTitle(s[l].substr(6));
                this.$ = s[l].substr(6);
                break;
              case 9:
                this.$ = s[l].trim();
                i.setAccTitle(this.$);
                break;
              case 10:
              case 11:
                this.$ = s[l].trim();
                i.setAccDescription(this.$);
                break;
              case 12:
                i.addSection(s[l].substr(8));
                this.$ = s[l].substr(8);
                break;
              case 13:
                i.addTask(s[l - 1], s[l]);
                this.$ = "task";
                break;
            }
          }, "anonymous"),
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            t(e, [2, 2], { 5: 3 }),
            { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: n, 12: r, 14: a, 16: s, 17: o, 18: l },
            t(e, [2, 7], { 1: [2, 1] }),
            t(e, [2, 3]),
            { 9: 15, 11: n, 12: r, 14: a, 16: s, 17: o, 18: l },
            t(e, [2, 5]),
            t(e, [2, 6]),
            t(e, [2, 8]),
            { 13: [1, 16] },
            { 15: [1, 17] },
            t(e, [2, 11]),
            t(e, [2, 12]),
            { 19: [1, 18] },
            t(e, [2, 4]),
            t(e, [2, 9]),
            t(e, [2, 10]),
            t(e, [2, 13]),
          ],
          defaultActions: {},
          parseError: (0, i.K2)(function t(e, n) {
            if (n.recoverable) {
              this.trace(e);
            } else {
              var r = new Error(e);
              r.hash = n;
              throw r;
            }
          }, "parseError"),
          parse: (0, i.K2)(function t(e) {
            var n = this,
              r = [0],
              a = [],
              s = [null],
              o = [],
              l = this.table,
              c = "",
              h = 0,
              u = 0,
              y = 0,
              p = 2,
              f = 1;
            var d = o.slice.call(arguments, 1);
            var g = Object.create(this.lexer);
            var x = { yy: {} };
            for (var m in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, m)) {
                x.yy[m] = this.yy[m];
              }
            }
            g.setInput(e, x.yy);
            x.yy.lexer = g;
            x.yy.parser = this;
            if (typeof g.yylloc == "undefined") {
              g.yylloc = {};
            }
            var k = g.yylloc;
            o.push(k);
            var b = g.options && g.options.ranges;
            if (typeof x.yy.parseError === "function") {
              this.parseError = x.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function v(t) {
              r.length = r.length - 2 * t;
              s.length = s.length - t;
              o.length = o.length - t;
            }
            (0, i.K2)(v, "popStack");
            function _() {
              var t;
              t = a.pop() || g.lex() || f;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  a = t;
                  t = a.pop();
                }
                t = n.symbols_[t] || t;
              }
              return t;
            }
            (0, i.K2)(_, "lex");
            var w,
              K,
              $,
              T,
              M,
              S,
              E = {},
              I,
              P,
              C,
              A;
            while (true) {
              $ = r[r.length - 1];
              if (this.defaultActions[$]) {
                T = this.defaultActions[$];
              } else {
                if (w === null || typeof w == "undefined") {
                  w = _();
                }
                T = l[$] && l[$][w];
              }
              if (typeof T === "undefined" || !T.length || !T[0]) {
                var j = "";
                A = [];
                for (I in l[$]) {
                  if (this.terminals_[I] && I > p) {
                    A.push("'" + this.terminals_[I] + "'");
                  }
                }
                if (g.showPosition) {
                  j =
                    "Parse error on line " +
                    (h + 1) +
                    ":\n" +
                    g.showPosition() +
                    "\nExpecting " +
                    A.join(", ") +
                    ", got '" +
                    (this.terminals_[w] || w) +
                    "'";
                } else {
                  j = "Parse error on line " + (h + 1) + ": Unexpected " + (w == f ? "end of input" : "'" + (this.terminals_[w] || w) + "'");
                }
                this.parseError(j, { text: g.match, token: this.terminals_[w] || w, line: g.yylineno, loc: k, expected: A });
              }
              if (T[0] instanceof Array && T.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + w);
              }
              switch (T[0]) {
                case 1:
                  r.push(w);
                  s.push(g.yytext);
                  o.push(g.yylloc);
                  r.push(T[1]);
                  w = null;
                  if (!K) {
                    u = g.yyleng;
                    c = g.yytext;
                    h = g.yylineno;
                    k = g.yylloc;
                    if (y > 0) {
                      y--;
                    }
                  } else {
                    w = K;
                    K = null;
                  }
                  break;
                case 2:
                  P = this.productions_[T[1]][1];
                  E.$ = s[s.length - P];
                  E._$ = {
                    first_line: o[o.length - (P || 1)].first_line,
                    last_line: o[o.length - 1].last_line,
                    first_column: o[o.length - (P || 1)].first_column,
                    last_column: o[o.length - 1].last_column,
                  };
                  if (b) {
                    E._$.range = [o[o.length - (P || 1)].range[0], o[o.length - 1].range[1]];
                  }
                  S = this.performAction.apply(E, [c, u, h, x.yy, T[1], s, o].concat(d));
                  if (typeof S !== "undefined") {
                    return S;
                  }
                  if (P) {
                    r = r.slice(0, -1 * P * 2);
                    s = s.slice(0, -1 * P);
                    o = o.slice(0, -1 * P);
                  }
                  r.push(this.productions_[T[1]][0]);
                  s.push(E.$);
                  o.push(E._$);
                  C = l[r[r.length - 2]][r[r.length - 1]];
                  r.push(C);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          }, "parse"),
        };
        var h = (function () {
          var t = {
            EOF: 1,
            parseError: (0, i.K2)(function t(e, n) {
              if (this.yy.parser) {
                this.yy.parser.parseError(e, n);
              } else {
                throw new Error(e);
              }
            }, "parseError"),
            setInput: (0, i.K2)(function (t, e) {
              this.yy = e || this.yy || {};
              this._input = t;
              this._more = this._backtrack = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              if (this.options.ranges) {
                this.yylloc.range = [0, 0];
              }
              this.offset = 0;
              return this;
            }, "setInput"),
            input: (0, i.K2)(function () {
              var t = this._input[0];
              this.yytext += t;
              this.yyleng++;
              this.offset++;
              this.match += t;
              this.matched += t;
              var e = t.match(/(?:\r\n?|\n).*/g);
              if (e) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }
              if (this.options.ranges) {
                this.yylloc.range[1]++;
              }
              this._input = this._input.slice(1);
              return t;
            }, "input"),
            unput: (0, i.K2)(function (t) {
              var e = t.length;
              var n = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - e);
              this.offset -= e;
              var r = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (n.length - 1) {
                this.yylineno -= n.length - 1;
              }
              var i = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: n
                  ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [i[0], i[0] + this.yyleng - e];
              }
              this.yyleng = this.yytext.length;
              return this;
            }, "unput"),
            more: (0, i.K2)(function () {
              this._more = true;
              return this;
            }, "more"),
            reject: (0, i.K2)(function () {
              if (this.options.backtrack_lexer) {
                this._backtrack = true;
              } else {
                return this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              }
              return this;
            }, "reject"),
            less: (0, i.K2)(function (t) {
              this.unput(this.match.slice(t));
            }, "less"),
            pastInput: (0, i.K2)(function () {
              var t = this.matched.substr(0, this.matched.length - this.match.length);
              return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: (0, i.K2)(function () {
              var t = this.match;
              if (t.length < 20) {
                t += this._input.substr(0, 20 - t.length);
              }
              return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: (0, i.K2)(function () {
              var t = this.pastInput();
              var e = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + e + "^";
            }, "showPosition"),
            test_match: (0, i.K2)(function (t, e) {
              var n, r, i;
              if (this.options.backtrack_lexer) {
                i = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                };
                if (this.options.ranges) {
                  i.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              r = t[0].match(/(?:\r\n?|\n).*/g);
              if (r) {
                this.yylineno += r.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
              };
              this.yytext += t[0];
              this.match += t[0];
              this.matches = t;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
              }
              this._more = false;
              this._backtrack = false;
              this._input = this._input.slice(t[0].length);
              this.matched += t[0];
              n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (n) {
                return n;
              } else if (this._backtrack) {
                for (var a in i) {
                  this[a] = i[a];
                }
                return false;
              }
              return false;
            }, "test_match"),
            next: (0, i.K2)(function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var t, e, n, r;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var i = this._currentRules();
              for (var a = 0; a < i.length; a++) {
                n = this._input.match(this.rules[i[a]]);
                if (n && (!e || n[0].length > e[0].length)) {
                  e = n;
                  r = a;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(n, i[a]);
                    if (t !== false) {
                      return t;
                    } else if (this._backtrack) {
                      e = false;
                      continue;
                    } else {
                      return false;
                    }
                  } else if (!this.options.flex) {
                    break;
                  }
                }
              }
              if (e) {
                t = this.test_match(e, i[r]);
                if (t !== false) {
                  return t;
                }
                return false;
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno,
                });
              }
            }, "next"),
            lex: (0, i.K2)(function t() {
              var e = this.next();
              if (e) {
                return e;
              } else {
                return this.lex();
              }
            }, "lex"),
            begin: (0, i.K2)(function t(e) {
              this.conditionStack.push(e);
            }, "begin"),
            popState: (0, i.K2)(function t() {
              var e = this.conditionStack.length - 1;
              if (e > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            }, "popState"),
            _currentRules: (0, i.K2)(function t() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            }, "_currentRules"),
            topState: (0, i.K2)(function t(e) {
              e = this.conditionStack.length - 1 - Math.abs(e || 0);
              if (e >= 0) {
                return this.conditionStack[e];
              } else {
                return "INITIAL";
              }
            }, "topState"),
            pushState: (0, i.K2)(function t(e) {
              this.begin(e);
            }, "pushState"),
            stateStackSize: (0, i.K2)(function t() {
              return this.conditionStack.length;
            }, "stateStackSize"),
            options: { "case-insensitive": true },
            performAction: (0, i.K2)(function t(e, n, r, i) {
              var a = i;
              switch (r) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  return 10;
                  break;
                case 3:
                  break;
                case 4:
                  break;
                case 5:
                  return 4;
                  break;
                case 6:
                  return 11;
                  break;
                case 7:
                  this.begin("acc_title");
                  return 12;
                  break;
                case 8:
                  this.popState();
                  return "acc_title_value";
                  break;
                case 9:
                  this.begin("acc_descr");
                  return 14;
                  break;
                case 10:
                  this.popState();
                  return "acc_descr_value";
                  break;
                case 11:
                  this.begin("acc_descr_multiline");
                  break;
                case 12:
                  this.popState();
                  break;
                case 13:
                  return "acc_descr_multiline_value";
                  break;
                case 14:
                  return 17;
                  break;
                case 15:
                  return 18;
                  break;
                case 16:
                  return 19;
                  break;
                case 17:
                  return ":";
                  break;
                case 18:
                  return 6;
                  break;
                case 19:
                  return "INVALID";
                  break;
              }
            }, "anonymous"),
            rules: [
              /^(?:%(?!\{)[^\n]*)/i,
              /^(?:[^\}]%%[^\n]*)/i,
              /^(?:[\n]+)/i,
              /^(?:\s+)/i,
              /^(?:#[^\n]*)/i,
              /^(?:journey\b)/i,
              /^(?:title\s[^#\n;]+)/i,
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:[\}])/i,
              /^(?:[^\}]*)/i,
              /^(?:section\s[^#:\n;]+)/i,
              /^(?:[^#:\n;]+)/i,
              /^(?::[^#\n;]+)/i,
              /^(?::)/i,
              /^(?:$)/i,
              /^(?:.)/i,
            ],
            conditions: {
              acc_descr_multiline: { rules: [12, 13], inclusive: false },
              acc_descr: { rules: [10], inclusive: false },
              acc_title: { rules: [8], inclusive: false },
              INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true },
            },
          };
          return t;
        })();
        c.lexer = h;
        function u() {
          this.yy = {};
        }
        (0, i.K2)(u, "Parser");
        u.prototype = c;
        c.Parser = u;
        return new u();
      })();
      s.parser = s;
      var o = s;
      var l = "";
      var c = [];
      var h = [];
      var u = [];
      var y = (0, i.K2)(function () {
        c.length = 0;
        h.length = 0;
        l = "";
        u.length = 0;
        (0, i.IU)();
      }, "clear");
      var p = (0, i.K2)(function (t) {
        l = t;
        c.push(t);
      }, "addSection");
      var f = (0, i.K2)(function () {
        return c;
      }, "getSections");
      var d = (0, i.K2)(function () {
        let t = k();
        const e = 100;
        let n = 0;
        while (!t && n < e) {
          t = k();
          n++;
        }
        h.push(...u);
        return h;
      }, "getTasks");
      var g = (0, i.K2)(function () {
        const t = [];
        h.forEach((e) => {
          if (e.people) {
            t.push(...e.people);
          }
        });
        const e = new Set(t);
        return [...e].sort();
      }, "updateActors");
      var x = (0, i.K2)(function (t, e) {
        const n = e.substr(1).split(":");
        let r = 0;
        let i = [];
        if (n.length === 1) {
          r = Number(n[0]);
          i = [];
        } else {
          r = Number(n[0]);
          i = n[1].split(",");
        }
        const a = i.map((t) => t.trim());
        const s = { section: l, type: l, people: a, task: t, score: r };
        u.push(s);
      }, "addTask");
      var m = (0, i.K2)(function (t) {
        const e = { section: l, type: l, description: t, task: t, classes: [] };
        h.push(e);
      }, "addTaskOrg");
      var k = (0, i.K2)(function () {
        const t = (0, i.K2)(function (t) {
          return u[t].processed;
        }, "compileTask");
        let e = true;
        for (const [n, r] of u.entries()) {
          t(n);
          e = e && r.processed;
        }
        return e;
      }, "compileTasks");
      var b = (0, i.K2)(function () {
        return g();
      }, "getActors");
      var v = {
        getConfig: (0, i.K2)(() => (0, i.D7)().journey, "getConfig"),
        clear: y,
        setDiagramTitle: i.ke,
        getDiagramTitle: i.ab,
        setAccTitle: i.SV,
        getAccTitle: i.iN,
        setAccDescription: i.EI,
        getAccDescription: i.m7,
        addSection: p,
        getSections: f,
        getTasks: d,
        addTask: x,
        addTaskOrg: m,
        getActors: b,
      };
      var _ = (0, i.K2)(
        (t) =>
          `.label {\n    font-family: ${t.fontFamily};\n    color: ${
            t.textColor
          };\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${
            t.textColor
          };\n    font-family: ${t.fontFamily};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${
            t.textColor
          }\n  }\n\n  .face {\n    ${
            t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"
          };\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${
            t.mainBkg
          };\n    stroke: ${
            t.nodeBorder
          };\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${
            t.arrowheadColor
          };\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${
            t.lineColor
          };\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${
            t.edgeLabelBackground
          };\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${
            t.titleColor
          };\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${
            t.fontFamily
          };\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${
            t.border2
          };\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${
            t.fillType0 ? `fill: ${t.fillType0}` : ""
          };\n  }\n  .task-type-1, .section-type-1  {\n    ${
            t.fillType0 ? `fill: ${t.fillType1}` : ""
          };\n  }\n  .task-type-2, .section-type-2  {\n    ${
            t.fillType0 ? `fill: ${t.fillType2}` : ""
          };\n  }\n  .task-type-3, .section-type-3  {\n    ${
            t.fillType0 ? `fill: ${t.fillType3}` : ""
          };\n  }\n  .task-type-4, .section-type-4  {\n    ${
            t.fillType0 ? `fill: ${t.fillType4}` : ""
          };\n  }\n  .task-type-5, .section-type-5  {\n    ${
            t.fillType0 ? `fill: ${t.fillType5}` : ""
          };\n  }\n  .task-type-6, .section-type-6  {\n    ${
            t.fillType0 ? `fill: ${t.fillType6}` : ""
          };\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};\n  }\n\n  .actor-0 {\n    ${
            t.actor0 ? `fill: ${t.actor0}` : ""
          };\n  }\n  .actor-1 {\n    ${t.actor1 ? `fill: ${t.actor1}` : ""};\n  }\n  .actor-2 {\n    ${
            t.actor2 ? `fill: ${t.actor2}` : ""
          };\n  }\n  .actor-3 {\n    ${t.actor3 ? `fill: ${t.actor3}` : ""};\n  }\n  .actor-4 {\n    ${
            t.actor4 ? `fill: ${t.actor4}` : ""
          };\n  }\n  .actor-5 {\n    ${t.actor5 ? `fill: ${t.actor5}` : ""};\n  }\n`,
        "getStyles"
      );
      var w = _;
      var K = (0, i.K2)(function (t, e) {
        return (0, r.tk)(t, e);
      }, "drawRect");
      var $ = (0, i.K2)(function (t, e) {
        const n = 15;
        const r = t
          .append("circle")
          .attr("cx", e.cx)
          .attr("cy", e.cy)
          .attr("class", "face")
          .attr("r", n)
          .attr("stroke-width", 2)
          .attr("overflow", "visible");
        const s = t.append("g");
        s.append("circle")
          .attr("cx", e.cx - n / 3)
          .attr("cy", e.cy - n / 3)
          .attr("r", 1.5)
          .attr("stroke-width", 2)
          .attr("fill", "#666")
          .attr("stroke", "#666");
        s.append("circle")
          .attr("cx", e.cx + n / 3)
          .attr("cy", e.cy - n / 3)
          .attr("r", 1.5)
          .attr("stroke-width", 2)
          .attr("fill", "#666")
          .attr("stroke", "#666");
        function o(t) {
          const r = (0, a.JLW)()
            .startAngle(Math.PI / 2)
            .endAngle(3 * (Math.PI / 2))
            .innerRadius(n / 2)
            .outerRadius(n / 2.2);
          t.append("path")
            .attr("class", "mouth")
            .attr("d", r)
            .attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
        }
        (0, i.K2)(o, "smile");
        function l(t) {
          const r = (0, a.JLW)()
            .startAngle((3 * Math.PI) / 2)
            .endAngle(5 * (Math.PI / 2))
            .innerRadius(n / 2)
            .outerRadius(n / 2.2);
          t.append("path")
            .attr("class", "mouth")
            .attr("d", r)
            .attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
        }
        (0, i.K2)(l, "sad");
        function c(t) {
          t.append("line")
            .attr("class", "mouth")
            .attr("stroke", 2)
            .attr("x1", e.cx - 5)
            .attr("y1", e.cy + 7)
            .attr("x2", e.cx + 5)
            .attr("y2", e.cy + 7)
            .attr("class", "mouth")
            .attr("stroke-width", "1px")
            .attr("stroke", "#666");
        }
        (0, i.K2)(c, "ambivalent");
        if (e.score > 3) {
          o(s);
        } else if (e.score < 3) {
          l(s);
        } else {
          c(s);
        }
        return r;
      }, "drawFace");
      var T = (0, i.K2)(function (t, e) {
        const n = t.append("circle");
        n.attr("cx", e.cx);
        n.attr("cy", e.cy);
        n.attr("class", "actor-" + e.pos);
        n.attr("fill", e.fill);
        n.attr("stroke", e.stroke);
        n.attr("r", e.r);
        if (n.class !== void 0) {
          n.attr("class", n.class);
        }
        if (e.title !== void 0) {
          n.append("title").text(e.title);
        }
        return n;
      }, "drawCircle");
      var M = (0, i.K2)(function (t, e) {
        return (0, r.m)(t, e);
      }, "drawText");
      var S = (0, i.K2)(function (t, e) {
        function n(t, e, n, r, i) {
          return (
            t +
            "," +
            e +
            " " +
            (t + n) +
            "," +
            e +
            " " +
            (t + n) +
            "," +
            (e + r - i) +
            " " +
            (t + n - i * 1.2) +
            "," +
            (e + r) +
            " " +
            t +
            "," +
            (e + r)
          );
        }
        (0, i.K2)(n, "genPoints");
        const r = t.append("polygon");
        r.attr("points", n(e.x, e.y, 50, 20, 7));
        r.attr("class", "labelBox");
        e.y = e.y + e.labelMargin;
        e.x = e.x + 0.5 * e.labelMargin;
        M(t, e);
      }, "drawLabel");
      var E = (0, i.K2)(function (t, e, n) {
        const i = t.append("g");
        const a = (0, r.PB)();
        a.x = e.x;
        a.y = e.y;
        a.fill = e.fill;
        a.width = n.width * e.taskCount + n.diagramMarginX * (e.taskCount - 1);
        a.height = n.height;
        a.class = "journey-section section-type-" + e.num;
        a.rx = 3;
        a.ry = 3;
        K(i, a);
        A(n)(e.text, i, a.x, a.y, a.width, a.height, { class: "journey-section section-type-" + e.num }, n, e.colour);
      }, "drawSection");
      var I = -1;
      var P = (0, i.K2)(function (t, e, n) {
        const i = e.x + n.width / 2;
        const a = t.append("g");
        I++;
        const s = 300 + 5 * 30;
        a.append("line")
          .attr("id", "task" + I)
          .attr("x1", i)
          .attr("y1", e.y)
          .attr("x2", i)
          .attr("y2", s)
          .attr("class", "task-line")
          .attr("stroke-width", "1px")
          .attr("stroke-dasharray", "4 2")
          .attr("stroke", "#666");
        $(a, { cx: i, cy: 300 + (5 - e.score) * 30, score: e.score });
        const o = (0, r.PB)();
        o.x = e.x;
        o.y = e.y;
        o.fill = e.fill;
        o.width = n.width;
        o.height = n.height;
        o.class = "task task-type-" + e.num;
        o.rx = 3;
        o.ry = 3;
        K(a, o);
        let l = e.x + 14;
        e.people.forEach((t) => {
          const n = e.actors[t].color;
          const r = { cx: l, cy: e.y, r: 7, fill: n, stroke: "#000", title: t, pos: e.actors[t].position };
          T(a, r);
          l += 10;
        });
        A(n)(e.task, a, o.x, o.y, o.width, o.height, { class: "task" }, n, e.colour);
      }, "drawTask");
      var C = (0, i.K2)(function (t, e) {
        (0, r.lC)(t, e);
      }, "drawBackgroundRect");
      var A = (function () {
        function t(t, e, n, i, a, s, o, l) {
          const c = e
            .append("text")
            .attr("x", n + a / 2)
            .attr("y", i + s / 2 + 5)
            .style("font-color", l)
            .style("text-anchor", "middle")
            .text(t);
          r(c, o);
        }
        (0, i.K2)(t, "byText");
        function e(t, e, n, i, a, s, o, l, c) {
          const { taskFontSize: h, taskFontFamily: u } = l;
          const y = t.split(/<br\s*\/?>/gi);
          for (let p = 0; p < y.length; p++) {
            const t = p * h - (h * (y.length - 1)) / 2;
            const l = e
              .append("text")
              .attr("x", n + a / 2)
              .attr("y", i)
              .attr("fill", c)
              .style("text-anchor", "middle")
              .style("font-size", h)
              .style("font-family", u);
            l.append("tspan")
              .attr("x", n + a / 2)
              .attr("dy", t)
              .text(y[p]);
            l.attr("y", i + s / 2)
              .attr("dominant-baseline", "central")
              .attr("alignment-baseline", "central");
            r(l, o);
          }
        }
        (0, i.K2)(e, "byTspan");
        function n(t, n, i, a, s, o, l, c) {
          const h = n.append("switch");
          const u = h.append("foreignObject").attr("x", i).attr("y", a).attr("width", s).attr("height", o).attr("position", "fixed");
          const y = u.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
          y.append("div")
            .attr("class", "label")
            .style("display", "table-cell")
            .style("text-align", "center")
            .style("vertical-align", "middle")
            .text(t);
          e(t, h, i, a, s, o, l, c);
          r(y, l);
        }
        (0, i.K2)(n, "byFo");
        function r(t, e) {
          for (const n in e) {
            if (n in e) {
              t.attr(n, e[n]);
            }
          }
        }
        (0, i.K2)(r, "_setTextAttrs");
        return function (r) {
          return r.textPlacement === "fo" ? n : r.textPlacement === "old" ? t : e;
        };
      })();
      var j = (0, i.K2)(function (t) {
        t.append("defs")
          .append("marker")
          .attr("id", "arrowhead")
          .attr("refX", 5)
          .attr("refY", 2)
          .attr("markerWidth", 6)
          .attr("markerHeight", 4)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0,0 V 4 L6,2 Z");
      }, "initGraphics");
      var D = { drawRect: K, drawCircle: T, drawSection: E, drawText: M, drawLabel: S, drawTask: P, drawBackgroundRect: C, initGraphics: j };
      var L = (0, i.K2)(function (t) {
        const e = Object.keys(t);
        e.forEach(function (e) {
          B[e] = t[e];
        });
      }, "setConf");
      var V = {};
      function F(t) {
        const e = (0, i.D7)().journey;
        let n = 60;
        Object.keys(V).forEach((r) => {
          const i = V[r].color;
          const a = { cx: 20, cy: n, r: 7, fill: i, stroke: "#000", pos: V[r].position };
          D.drawCircle(t, a);
          const s = { x: 40, y: n + 7, fill: "#666", text: r, textMargin: e.boxTextMargin | 5 };
          D.drawText(t, s);
          n += 20;
        });
      }
      (0, i.K2)(F, "drawActorLegend");
      var B = (0, i.D7)().journey;
      var O = B.leftMargin;
      var N = (0, i.K2)(function (t, e, n, r) {
        const s = (0, i.D7)().journey;
        const o = (0, i.D7)().securityLevel;
        let l;
        if (o === "sandbox") {
          l = (0, a.Ltv)("#i" + e);
        }
        const c = o === "sandbox" ? (0, a.Ltv)(l.nodes()[0].contentDocument.body) : (0, a.Ltv)("body");
        R.init();
        const h = c.select("#" + e);
        D.initGraphics(h);
        const u = r.db.getTasks();
        const y = r.db.getDiagramTitle();
        const p = r.db.getActors();
        for (const i in V) {
          delete V[i];
        }
        let f = 0;
        p.forEach((t) => {
          V[t] = { color: s.actorColours[f % s.actorColours.length], position: f };
          f++;
        });
        F(h);
        R.insert(0, 0, O, Object.keys(V).length * 50);
        Y(h, u, 0);
        const d = R.getBounds();
        if (y) {
          h.append("text").text(y).attr("x", O).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
        }
        const g = d.stopy - d.starty + 2 * s.diagramMarginY;
        const x = O + d.stopx + 2 * s.diagramMarginX;
        (0, i.a$)(h, g, x, s.useMaxWidth);
        h.append("line")
          .attr("x1", O)
          .attr("y1", s.height * 4)
          .attr("x2", x - O - 4)
          .attr("y2", s.height * 4)
          .attr("stroke-width", 4)
          .attr("stroke", "black")
          .attr("marker-end", "url(#arrowhead)");
        const m = y ? 70 : 0;
        h.attr("viewBox", `${d.startx} -25 ${x} ${g + m}`);
        h.attr("preserveAspectRatio", "xMinYMin meet");
        h.attr("height", g + m + 25);
      }, "draw");
      var R = {
        data: { startx: void 0, stopx: void 0, starty: void 0, stopy: void 0 },
        verticalPos: 0,
        sequenceItems: [],
        init: (0, i.K2)(function () {
          this.sequenceItems = [];
          this.data = { startx: void 0, stopx: void 0, starty: void 0, stopy: void 0 };
          this.verticalPos = 0;
        }, "init"),
        updateVal: (0, i.K2)(function (t, e, n, r) {
          if (t[e] === void 0) {
            t[e] = n;
          } else {
            t[e] = r(n, t[e]);
          }
        }, "updateVal"),
        updateBounds: (0, i.K2)(function (t, e, n, r) {
          const a = (0, i.D7)().journey;
          const s = this;
          let o = 0;
          function l(l) {
            return (0, i.K2)(function i(c) {
              o++;
              const h = s.sequenceItems.length - o + 1;
              s.updateVal(c, "starty", e - h * a.boxMargin, Math.min);
              s.updateVal(c, "stopy", r + h * a.boxMargin, Math.max);
              s.updateVal(R.data, "startx", t - h * a.boxMargin, Math.min);
              s.updateVal(R.data, "stopx", n + h * a.boxMargin, Math.max);
              if (!(l === "activation")) {
                s.updateVal(c, "startx", t - h * a.boxMargin, Math.min);
                s.updateVal(c, "stopx", n + h * a.boxMargin, Math.max);
                s.updateVal(R.data, "starty", e - h * a.boxMargin, Math.min);
                s.updateVal(R.data, "stopy", r + h * a.boxMargin, Math.max);
              }
            }, "updateItemBounds");
          }
          (0, i.K2)(l, "updateFn");
          this.sequenceItems.forEach(l());
        }, "updateBounds"),
        insert: (0, i.K2)(function (t, e, n, r) {
          const i = Math.min(t, n);
          const a = Math.max(t, n);
          const s = Math.min(e, r);
          const o = Math.max(e, r);
          this.updateVal(R.data, "startx", i, Math.min);
          this.updateVal(R.data, "starty", s, Math.min);
          this.updateVal(R.data, "stopx", a, Math.max);
          this.updateVal(R.data, "stopy", o, Math.max);
          this.updateBounds(i, s, a, o);
        }, "insert"),
        bumpVerticalPos: (0, i.K2)(function (t) {
          this.verticalPos = this.verticalPos + t;
          this.data.stopy = this.verticalPos;
        }, "bumpVerticalPos"),
        getVerticalPos: (0, i.K2)(function () {
          return this.verticalPos;
        }, "getVerticalPos"),
        getBounds: (0, i.K2)(function () {
          return this.data;
        }, "getBounds"),
      };
      var z = B.sectionFills;
      var W = B.sectionColours;
      var Y = (0, i.K2)(function (t, e, n) {
        const r = (0, i.D7)().journey;
        let a = "";
        const s = r.height * 2 + r.diagramMarginY;
        const o = n + s;
        let l = 0;
        let c = "#CCC";
        let h = "black";
        let u = 0;
        for (const [i, y] of e.entries()) {
          if (a !== y.section) {
            c = z[l % z.length];
            u = l % z.length;
            h = W[l % W.length];
            let n = 0;
            const s = y.section;
            for (let t = i; t < e.length; t++) {
              if (e[t].section == s) {
                n = n + 1;
              } else {
                break;
              }
            }
            const o = { x: i * r.taskMargin + i * r.width + O, y: 50, text: y.section, fill: c, num: u, colour: h, taskCount: n };
            D.drawSection(t, o, r);
            a = y.section;
            l++;
          }
          const n = y.people.reduce((t, e) => {
            if (V[e]) {
              t[e] = V[e];
            }
            return t;
          }, {});
          y.x = i * r.taskMargin + i * r.width + O;
          y.y = o;
          y.width = r.diagramMarginX;
          y.height = r.diagramMarginY;
          y.colour = h;
          y.fill = c;
          y.num = u;
          y.actors = n;
          D.drawTask(t, y, r);
          R.insert(y.x, y.y, y.x + y.width + r.taskMargin, 300 + 5 * 30);
        }
      }, "drawTasks");
      var q = { setConf: L, draw: N };
      var J = {
        parser: o,
        db: v,
        renderer: q,
        styles: w,
        init: (0, i.K2)((t) => {
          q.setConf(t.journey);
          v.clear();
        }, "init"),
      };
    },
  },
]);
