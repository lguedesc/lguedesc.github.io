"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5489],
  {
    25489: (e, t, r) => {
      r.d(t, { default: () => vn });
      class a {
        constructor(e, t, r) {
          this.lexer = void 0;
          this.start = void 0;
          this.end = void 0;
          this.lexer = e;
          this.start = t;
          this.end = r;
        }
        static range(e, t) {
          if (!t) {
            return e && e.loc;
          } else if (!e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer) {
            return null;
          } else {
            return new a(e.loc.lexer, e.loc.start, t.loc.end);
          }
        }
      }
      class i {
        constructor(e, t) {
          this.text = void 0;
          this.loc = void 0;
          this.noexpand = void 0;
          this.treatAsRelax = void 0;
          this.text = e;
          this.loc = t;
        }
        range(e, t) {
          return new i(t, a.range(this, e));
        }
      }
      class n {
        constructor(e, t) {
          this.name = void 0;
          this.position = void 0;
          this.length = void 0;
          this.rawMessage = void 0;
          var r = "KaTeX parse error: " + e;
          var a;
          var i;
          var s = t && t.loc;
          if (s && s.start <= s.end) {
            var o = s.lexer.input;
            a = s.start;
            i = s.end;
            if (a === o.length) {
              r += " at end of input: ";
            } else {
              r += " at position " + (a + 1) + ": ";
            }
            var l = o.slice(a, i).replace(/[^]/g, "$&̲");
            var h;
            if (a > 15) {
              h = "…" + o.slice(a - 15, a);
            } else {
              h = o.slice(0, a);
            }
            var u;
            if (i + 15 < o.length) {
              u = o.slice(i, i + 15) + "…";
            } else {
              u = o.slice(i);
            }
            r += h + l + u;
          }
          var m = new Error(r);
          m.name = "ParseError";
          m.__proto__ = n.prototype;
          m.position = a;
          if (a != null && i != null) {
            m.length = i - a;
          }
          m.rawMessage = e;
          return m;
        }
      }
      n.prototype.__proto__ = Error.prototype;
      var s = function e(t, r) {
        return t.indexOf(r) !== -1;
      };
      var o = function e(t, r) {
        return t === undefined ? r : t;
      };
      var l = /([A-Z])/g;
      var h = function e(t) {
        return t.replace(l, "-$1").toLowerCase();
      };
      var u = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" };
      var m = /[&><"']/g;
      function c(e) {
        return String(e).replace(m, (e) => u[e]);
      }
      var p = function e(t) {
        if (t.type === "ordgroup") {
          if (t.body.length === 1) {
            return e(t.body[0]);
          } else {
            return t;
          }
        } else if (t.type === "color") {
          if (t.body.length === 1) {
            return e(t.body[0]);
          } else {
            return t;
          }
        } else if (t.type === "font") {
          return e(t.body);
        } else {
          return t;
        }
      };
      var d = function e(t) {
        var r = p(t);
        return r.type === "mathord" || r.type === "textord" || r.type === "atom";
      };
      var f = function e(t) {
        if (!t) {
          throw new Error("Expected non-null, but got " + String(t));
        }
        return t;
      };
      var v = function e(t) {
        var r = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
        if (!r) {
          return "_relative";
        }
        if (r[2] !== ":") {
          return null;
        }
        if (!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(r[1])) {
          return null;
        }
        return r[1].toLowerCase();
      };
      var g = { contains: s, deflt: o, escape: c, hyphenate: h, getBaseElem: p, isCharacterBox: d, protocolFromUrl: v };
      var b = {
        displayMode: {
          type: "boolean",
          description:
            "Render math in display mode, which puts the math in " +
            "display style (so \\int and \\sum are large, for example), and " +
            "centers the math on the page on its own line.",
          cli: "-d, --display-mode",
        },
        output: {
          type: { enum: ["htmlAndMathml", "html", "mathml"] },
          description: "Determines the markup language of the output.",
          cli: "-F, --format <type>",
        },
        leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." },
        fleqn: { type: "boolean", description: "Render display math flush left." },
        throwOnError: {
          type: "boolean",
          default: true,
          cli: "-t, --no-throw-on-error",
          cliDescription:
            "Render errors (in the color given by --error-color) ins" + "tead of throwing a ParseError exception when encountering an error.",
        },
        errorColor: {
          type: "string",
          default: "#cc0000",
          cli: "-c, --error-color <color>",
          cliDescription:
            "A color string given in the format 'rgb' or 'rrggbb' " +
            "(no #). This option determines the color of errors rendered by the " +
            "-t option.",
          cliProcessor: (e) => "#" + e,
        },
        macros: {
          type: "object",
          cli: "-m, --macro <def>",
          cliDescription: "Define custom macro of the form '\\foo:expansion' (use " + "multiple -m arguments for multiple macros).",
          cliDefault: [],
          cliProcessor: (e, t) => {
            t.push(e);
            return t;
          },
        },
        minRuleThickness: {
          type: "number",
          description:
            "Specifies a minimum thickness, in ems, for fraction lines," +
            " `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, " +
            "`\\hdashline`, `\\underline`, `\\overline`, and the borders of " +
            "`\\fbox`, `\\boxed`, and `\\fcolorbox`.",
          processor: (e) => Math.max(0, e),
          cli: "--min-rule-thickness <size>",
          cliProcessor: parseFloat,
        },
        colorIsTextColor: {
          type: "boolean",
          description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, " + "instead of LaTeX's one-argument \\color mode change.",
          cli: "-b, --color-is-text-color",
        },
        strict: {
          type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"],
          description:
            "Turn on strict / LaTeX faithfulness mode, which throws an " + "error if the input uses features that are not supported by LaTeX.",
          cli: "-S, --strict",
          cliDefault: false,
        },
        trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" },
        maxSize: {
          type: "number",
          default: Infinity,
          description:
            "If non-zero, all user-specified sizes, e.g. in " +
            "\\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, " +
            "elements and spaces can be arbitrarily large",
          processor: (e) => Math.max(0, e),
          cli: "-s, --max-size <n>",
          cliProcessor: parseInt,
        },
        maxExpand: {
          type: "number",
          default: 1e3,
          description:
            "Limit the number of macro expansions to the specified " +
            "number, to prevent e.g. infinite macro loops. If set to Infinity, " +
            "the macro expander will try to fully expand as in LaTeX.",
          processor: (e) => Math.max(0, e),
          cli: "-e, --max-expand <n>",
          cliProcessor: (e) => (e === "Infinity" ? Infinity : parseInt(e)),
        },
        globalGroup: { type: "boolean", cli: false },
      };
      function y(e) {
        if (e.default) {
          return e.default;
        }
        var t = e.type;
        var r = Array.isArray(t) ? t[0] : t;
        if (typeof r !== "string") {
          return r.enum[0];
        }
        switch (r) {
          case "boolean":
            return false;
          case "string":
            return "";
          case "number":
            return 0;
          case "object":
            return {};
        }
      }
      class x {
        constructor(e) {
          this.displayMode = void 0;
          this.output = void 0;
          this.leqno = void 0;
          this.fleqn = void 0;
          this.throwOnError = void 0;
          this.errorColor = void 0;
          this.macros = void 0;
          this.minRuleThickness = void 0;
          this.colorIsTextColor = void 0;
          this.strict = void 0;
          this.trust = void 0;
          this.maxSize = void 0;
          this.maxExpand = void 0;
          this.globalGroup = void 0;
          e = e || {};
          for (var t in b) {
            if (b.hasOwnProperty(t)) {
              var r = b[t];
              this[t] = e[t] !== undefined ? (r.processor ? r.processor(e[t]) : e[t]) : y(r);
            }
          }
        }
        reportNonstrict(e, t, r) {
          var a = this.strict;
          if (typeof a === "function") {
            a = a(e, t, r);
          }
          if (!a || a === "ignore") {
            return;
          } else if (a === true || a === "error") {
            throw new n("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
          } else if (a === "warn") {
            typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]"));
          } else {
            typeof console !== "undefined" &&
              console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
          }
        }
        useStrictBehavior(e, t, r) {
          var a = this.strict;
          if (typeof a === "function") {
            try {
              a = a(e, t, r);
            } catch (i) {
              a = "error";
            }
          }
          if (!a || a === "ignore") {
            return false;
          } else if (a === true || a === "error") {
            return true;
          } else if (a === "warn") {
            typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]"));
            return false;
          } else {
            typeof console !== "undefined" &&
              console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
            return false;
          }
        }
        isTrusted(e) {
          if (e.url && !e.protocol) {
            var t = g.protocolFromUrl(e.url);
            if (t == null) {
              return false;
            }
            e.protocol = t;
          }
          var r = typeof this.trust === "function" ? this.trust(e) : this.trust;
          return Boolean(r);
        }
      }
      class w {
        constructor(e, t, r) {
          this.id = void 0;
          this.size = void 0;
          this.cramped = void 0;
          this.id = e;
          this.size = t;
          this.cramped = r;
        }
        sup() {
          return N[q[this.id]];
        }
        sub() {
          return N[I[this.id]];
        }
        fracNum() {
          return N[R[this.id]];
        }
        fracDen() {
          return N[H[this.id]];
        }
        cramp() {
          return N[O[this.id]];
        }
        text() {
          return N[E[this.id]];
        }
        isTight() {
          return this.size >= 2;
        }
      }
      var k = 0;
      var S = 1;
      var M = 2;
      var z = 3;
      var A = 4;
      var T = 5;
      var B = 6;
      var C = 7;
      var N = [
        new w(k, 0, false),
        new w(S, 0, true),
        new w(M, 1, false),
        new w(z, 1, true),
        new w(A, 2, false),
        new w(T, 2, true),
        new w(B, 3, false),
        new w(C, 3, true),
      ];
      var q = [A, T, A, T, B, C, B, C];
      var I = [T, T, T, T, C, C, C, C];
      var R = [M, z, A, T, B, C, B, C];
      var H = [z, z, T, T, C, C, C, C];
      var O = [S, S, z, z, T, T, C, C];
      var E = [k, S, M, z, M, z, M, z];
      var L = { DISPLAY: N[k], TEXT: N[M], SCRIPT: N[A], SCRIPTSCRIPT: N[B] };
      var D = [
        {
          name: "latin",
          blocks: [
            [256, 591],
            [768, 879],
          ],
        },
        { name: "cyrillic", blocks: [[1024, 1279]] },
        { name: "armenian", blocks: [[1328, 1423]] },
        { name: "brahmic", blocks: [[2304, 4255]] },
        { name: "georgian", blocks: [[4256, 4351]] },
        {
          name: "cjk",
          blocks: [
            [12288, 12543],
            [19968, 40879],
            [65280, 65376],
          ],
        },
        { name: "hangul", blocks: [[44032, 55215]] },
      ];
      function V(e) {
        for (var t = 0; t < D.length; t++) {
          var r = D[t];
          for (var a = 0; a < r.blocks.length; a++) {
            var i = r.blocks[a];
            if (e >= i[0] && e <= i[1]) {
              return r.name;
            }
          }
        }
        return null;
      }
      var P = [];
      D.forEach((e) => e.blocks.forEach((e) => P.push(...e)));
      function F(e) {
        for (var t = 0; t < P.length; t += 2) {
          if (e >= P[t] && e <= P[t + 1]) {
            return true;
          }
        }
        return false;
      }
      var G = 80;
      var U = function e(t, r) {
        return (
          "M95," +
          (622 + t + r) +
          "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" +
          t / 2.075 +
          " -" +
          t +
          "\nc5.3,-9.3,12,-14,20,-14\nH400000v" +
          (40 + t) +
          "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" +
          (834 + t) +
          " " +
          r +
          "h400000v" +
          (40 + t) +
          "h-400000z"
        );
      };
      var Y = function e(t, r) {
        return (
          "M263," +
          (601 + t + r) +
          "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" +
          t / 2.084 +
          " -" +
          t +
          "\nc4.7,-7.3,11,-11,19,-11\nH40000v" +
          (40 + t) +
          "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" +
          (1001 + t) +
          " " +
          r +
          "h400000v" +
          (40 + t) +
          "h-400000z"
        );
      };
      var X = function e(t, r) {
        return (
          "M983 " +
          (10 + t + r) +
          "\nl" +
          t / 3.13 +
          " -" +
          t +
          "\nc4,-6.7,10,-10,18,-10 H400000v" +
          (40 + t) +
          "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" +
          (1001 + t) +
          " " +
          r +
          "h400000v" +
          (40 + t) +
          "h-400000z"
        );
      };
      var W = function e(t, r) {
        return (
          "M424," +
          (2398 + t + r) +
          "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" +
          t / 4.223 +
          " -" +
          t +
          "c4,-6.7,10,-10,18,-10 H400000\nv" +
          (40 + t) +
          "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" +
          (1001 + t) +
          " " +
          r +
          "\nh400000v" +
          (40 + t) +
          "h-400000z"
        );
      };
      var _ = function e(t, r) {
        return (
          "M473," +
          (2713 + t + r) +
          "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" +
          t / 5.298 +
          " -" +
          t +
          "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" +
          (40 + t) +
          "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" +
          (1001 + t) +
          " " +
          r +
          "h400000v" +
          (40 + t) +
          "H1017.7z"
        );
      };
      var j = function e(t) {
        var r = t / 2;
        return "M400000 " + t + " H0 L" + r + " 0 l65 45 L145 " + (t - 80) + " H400000z";
      };
      var $ = function e(t, r, a) {
        var i = a - 54 - r - t;
        return (
          "M702 " +
          (t + r) +
          "H400000" +
          (40 + t) +
          "\nH742v" +
          i +
          "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " +
          r +
          "H400000v" +
          (40 + t) +
          "H742z"
        );
      };
      var Z = function e(t, r, a) {
        r = 1e3 * r;
        var i = "";
        switch (t) {
          case "sqrtMain":
            i = U(r, G);
            break;
          case "sqrtSize1":
            i = Y(r, G);
            break;
          case "sqrtSize2":
            i = X(r, G);
            break;
          case "sqrtSize3":
            i = W(r, G);
            break;
          case "sqrtSize4":
            i = _(r, G);
            break;
          case "sqrtTall":
            i = $(r, G, a);
        }
        return i;
      };
      var K = function e(t, r) {
        switch (t) {
          case "⎜":
            return "M291 0 H417 V" + r + " H291z M291 0 H417 V" + r + " H291z";
          case "∣":
            return "M145 0 H188 V" + r + " H145z M145 0 H188 V" + r + " H145z";
          case "∥":
            return "M145 0 H188 V" + r + " H145z M145 0 H188 V" + r + " H145z" + ("M367 0 H410 V" + r + " H367z M367 0 H410 V" + r + " H367z");
          case "⎟":
            return "M457 0 H583 V" + r + " H457z M457 0 H583 V" + r + " H457z";
          case "⎢":
            return "M319 0 H403 V" + r + " H319z M319 0 H403 V" + r + " H319z";
          case "⎥":
            return "M263 0 H347 V" + r + " H263z M263 0 H347 V" + r + " H263z";
          case "⎪":
            return "M384 0 H504 V" + r + " H384z M384 0 H504 V" + r + " H384z";
          case "⏐":
            return "M312 0 H355 V" + r + " H312z M312 0 H355 V" + r + " H312z";
          case "‖":
            return "M257 0 H300 V" + r + " H257z M257 0 H300 V" + r + " H257z" + ("M478 0 H521 V" + r + " H478z M478 0 H521 V" + r + " H478z");
          default:
            return "";
        }
      };
      var J = {
        doubleleftarrow:
          "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
        doublerightarrow:
          "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
        leftarrow:
          "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
        leftbrace:
          "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
        leftbraceunder:
          "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
        leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
        leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
        leftharpoon:
          "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
        leftharpoonplus:
          "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
        leftharpoondown:
          "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
        leftharpoondownplus:
          "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
        lefthook:
          "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
        leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
        leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
        leftToFrom:
          "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
        longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
        midbrace:
          "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
        midbraceunder:
          "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
        oiintSize1:
          "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
        oiintSize2:
          "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
        oiiintSize1:
          "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
        oiiintSize2:
          "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
        rightarrow:
          "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
        rightbrace:
          "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
        rightbraceunder:
          "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
        rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
        rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
        rightharpoon:
          "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
        rightharpoonplus:
          "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
        rightharpoondown:
          "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
        rightharpoondownplus:
          "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
        righthook:
          "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
        rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
        rightToFrom:
          "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
        twoheadleftarrow:
          "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
        twoheadrightarrow:
          "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
        tilde1:
          "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
        tilde2:
          "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
        tilde3:
          "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
        tilde4:
          "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
        vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
        widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
        widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widecheck1:
          "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
        widecheck2:
          "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        widecheck3:
          "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        widecheck4:
          "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        baraboveleftarrow:
          "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
        rightarrowabovebar:
          "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
        baraboveshortleftharpoon:
          "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
        rightharpoonaboveshortbar:
          "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
        shortbaraboveleftharpoon:
          "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
        shortrightharpoonabovebar:
          "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z",
      };
      var Q = function e(t, r) {
        switch (t) {
          case "lbrack":
            return "M403 1759 V84 H666 V0 H319 V1759 v" + r + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + r + " v1759 h84z";
          case "rbrack":
            return "M347 1759 V0 H0 V84 H263 V1759 v" + r + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + r + " v1759 h84z";
          case "vert":
            return (
              "M145 15 v585 v" +
              r +
              " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
              -r +
              " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" +
              r +
              " v585 h43z"
            );
          case "doublevert":
            return (
              "M145 15 v585 v" +
              r +
              " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
              -r +
              " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" +
              r +
              " v585 h43z\nM367 15 v585 v" +
              r +
              " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
              -r +
              " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" +
              r +
              " v585 h43z"
            );
          case "lfloor":
            return "M319 602 V0 H403 V602 v" + r + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + r + " v1715 H319z";
          case "rfloor":
            return "M319 602 V0 H403 V602 v" + r + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + r + " v1715 H319z";
          case "lceil":
            return "M403 1759 V84 H666 V0 H319 V1759 v" + r + " v602 h84z\nM403 1759 V0 H319 V1759 v" + r + " v602 h84z";
          case "rceil":
            return "M347 1759 V0 H0 V84 H263 V1759 v" + r + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + r + " v602 h84z";
          case "lparen":
            return (
              "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," +
              (r + 84) +
              "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" +
              (r + 92) +
              "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z"
            );
          case "rparen":
            return (
              "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," +
              (r + 9) +
              "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" +
              (r + 144) +
              "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z"
            );
          default:
            throw new Error("Unknown stretchy delimiter.");
        }
      };
      class ee {
        constructor(e) {
          this.children = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          this.children = e;
          this.classes = [];
          this.height = 0;
          this.depth = 0;
          this.maxFontSize = 0;
          this.style = {};
        }
        hasClass(e) {
          return g.contains(this.classes, e);
        }
        toNode() {
          var e = document.createDocumentFragment();
          for (var t = 0; t < this.children.length; t++) {
            e.appendChild(this.children[t].toNode());
          }
          return e;
        }
        toMarkup() {
          var e = "";
          for (var t = 0; t < this.children.length; t++) {
            e += this.children[t].toMarkup();
          }
          return e;
        }
        toText() {
          var e = (e) => e.toText();
          return this.children.map(e).join("");
        }
      }
      var te = {
        "AMS-Regular": {
          32: [0, 0, 0, 0, 0.25],
          65: [0, 0.68889, 0, 0, 0.72222],
          66: [0, 0.68889, 0, 0, 0.66667],
          67: [0, 0.68889, 0, 0, 0.72222],
          68: [0, 0.68889, 0, 0, 0.72222],
          69: [0, 0.68889, 0, 0, 0.66667],
          70: [0, 0.68889, 0, 0, 0.61111],
          71: [0, 0.68889, 0, 0, 0.77778],
          72: [0, 0.68889, 0, 0, 0.77778],
          73: [0, 0.68889, 0, 0, 0.38889],
          74: [0.16667, 0.68889, 0, 0, 0.5],
          75: [0, 0.68889, 0, 0, 0.77778],
          76: [0, 0.68889, 0, 0, 0.66667],
          77: [0, 0.68889, 0, 0, 0.94445],
          78: [0, 0.68889, 0, 0, 0.72222],
          79: [0.16667, 0.68889, 0, 0, 0.77778],
          80: [0, 0.68889, 0, 0, 0.61111],
          81: [0.16667, 0.68889, 0, 0, 0.77778],
          82: [0, 0.68889, 0, 0, 0.72222],
          83: [0, 0.68889, 0, 0, 0.55556],
          84: [0, 0.68889, 0, 0, 0.66667],
          85: [0, 0.68889, 0, 0, 0.72222],
          86: [0, 0.68889, 0, 0, 0.72222],
          87: [0, 0.68889, 0, 0, 1],
          88: [0, 0.68889, 0, 0, 0.72222],
          89: [0, 0.68889, 0, 0, 0.72222],
          90: [0, 0.68889, 0, 0, 0.66667],
          107: [0, 0.68889, 0, 0, 0.55556],
          160: [0, 0, 0, 0, 0.25],
          165: [0, 0.675, 0.025, 0, 0.75],
          174: [0.15559, 0.69224, 0, 0, 0.94666],
          240: [0, 0.68889, 0, 0, 0.55556],
          295: [0, 0.68889, 0, 0, 0.54028],
          710: [0, 0.825, 0, 0, 2.33334],
          732: [0, 0.9, 0, 0, 2.33334],
          770: [0, 0.825, 0, 0, 2.33334],
          771: [0, 0.9, 0, 0, 2.33334],
          989: [0.08167, 0.58167, 0, 0, 0.77778],
          1008: [0, 0.43056, 0.04028, 0, 0.66667],
          8245: [0, 0.54986, 0, 0, 0.275],
          8463: [0, 0.68889, 0, 0, 0.54028],
          8487: [0, 0.68889, 0, 0, 0.72222],
          8498: [0, 0.68889, 0, 0, 0.55556],
          8502: [0, 0.68889, 0, 0, 0.66667],
          8503: [0, 0.68889, 0, 0, 0.44445],
          8504: [0, 0.68889, 0, 0, 0.66667],
          8513: [0, 0.68889, 0, 0, 0.63889],
          8592: [-0.03598, 0.46402, 0, 0, 0.5],
          8594: [-0.03598, 0.46402, 0, 0, 0.5],
          8602: [-0.13313, 0.36687, 0, 0, 1],
          8603: [-0.13313, 0.36687, 0, 0, 1],
          8606: [0.01354, 0.52239, 0, 0, 1],
          8608: [0.01354, 0.52239, 0, 0, 1],
          8610: [0.01354, 0.52239, 0, 0, 1.11111],
          8611: [0.01354, 0.52239, 0, 0, 1.11111],
          8619: [0, 0.54986, 0, 0, 1],
          8620: [0, 0.54986, 0, 0, 1],
          8621: [-0.13313, 0.37788, 0, 0, 1.38889],
          8622: [-0.13313, 0.36687, 0, 0, 1],
          8624: [0, 0.69224, 0, 0, 0.5],
          8625: [0, 0.69224, 0, 0, 0.5],
          8630: [0, 0.43056, 0, 0, 1],
          8631: [0, 0.43056, 0, 0, 1],
          8634: [0.08198, 0.58198, 0, 0, 0.77778],
          8635: [0.08198, 0.58198, 0, 0, 0.77778],
          8638: [0.19444, 0.69224, 0, 0, 0.41667],
          8639: [0.19444, 0.69224, 0, 0, 0.41667],
          8642: [0.19444, 0.69224, 0, 0, 0.41667],
          8643: [0.19444, 0.69224, 0, 0, 0.41667],
          8644: [0.1808, 0.675, 0, 0, 1],
          8646: [0.1808, 0.675, 0, 0, 1],
          8647: [0.1808, 0.675, 0, 0, 1],
          8648: [0.19444, 0.69224, 0, 0, 0.83334],
          8649: [0.1808, 0.675, 0, 0, 1],
          8650: [0.19444, 0.69224, 0, 0, 0.83334],
          8651: [0.01354, 0.52239, 0, 0, 1],
          8652: [0.01354, 0.52239, 0, 0, 1],
          8653: [-0.13313, 0.36687, 0, 0, 1],
          8654: [-0.13313, 0.36687, 0, 0, 1],
          8655: [-0.13313, 0.36687, 0, 0, 1],
          8666: [0.13667, 0.63667, 0, 0, 1],
          8667: [0.13667, 0.63667, 0, 0, 1],
          8669: [-0.13313, 0.37788, 0, 0, 1],
          8672: [-0.064, 0.437, 0, 0, 1.334],
          8674: [-0.064, 0.437, 0, 0, 1.334],
          8705: [0, 0.825, 0, 0, 0.5],
          8708: [0, 0.68889, 0, 0, 0.55556],
          8709: [0.08167, 0.58167, 0, 0, 0.77778],
          8717: [0, 0.43056, 0, 0, 0.42917],
          8722: [-0.03598, 0.46402, 0, 0, 0.5],
          8724: [0.08198, 0.69224, 0, 0, 0.77778],
          8726: [0.08167, 0.58167, 0, 0, 0.77778],
          8733: [0, 0.69224, 0, 0, 0.77778],
          8736: [0, 0.69224, 0, 0, 0.72222],
          8737: [0, 0.69224, 0, 0, 0.72222],
          8738: [0.03517, 0.52239, 0, 0, 0.72222],
          8739: [0.08167, 0.58167, 0, 0, 0.22222],
          8740: [0.25142, 0.74111, 0, 0, 0.27778],
          8741: [0.08167, 0.58167, 0, 0, 0.38889],
          8742: [0.25142, 0.74111, 0, 0, 0.5],
          8756: [0, 0.69224, 0, 0, 0.66667],
          8757: [0, 0.69224, 0, 0, 0.66667],
          8764: [-0.13313, 0.36687, 0, 0, 0.77778],
          8765: [-0.13313, 0.37788, 0, 0, 0.77778],
          8769: [-0.13313, 0.36687, 0, 0, 0.77778],
          8770: [-0.03625, 0.46375, 0, 0, 0.77778],
          8774: [0.30274, 0.79383, 0, 0, 0.77778],
          8776: [-0.01688, 0.48312, 0, 0, 0.77778],
          8778: [0.08167, 0.58167, 0, 0, 0.77778],
          8782: [0.06062, 0.54986, 0, 0, 0.77778],
          8783: [0.06062, 0.54986, 0, 0, 0.77778],
          8785: [0.08198, 0.58198, 0, 0, 0.77778],
          8786: [0.08198, 0.58198, 0, 0, 0.77778],
          8787: [0.08198, 0.58198, 0, 0, 0.77778],
          8790: [0, 0.69224, 0, 0, 0.77778],
          8791: [0.22958, 0.72958, 0, 0, 0.77778],
          8796: [0.08198, 0.91667, 0, 0, 0.77778],
          8806: [0.25583, 0.75583, 0, 0, 0.77778],
          8807: [0.25583, 0.75583, 0, 0, 0.77778],
          8808: [0.25142, 0.75726, 0, 0, 0.77778],
          8809: [0.25142, 0.75726, 0, 0, 0.77778],
          8812: [0.25583, 0.75583, 0, 0, 0.5],
          8814: [0.20576, 0.70576, 0, 0, 0.77778],
          8815: [0.20576, 0.70576, 0, 0, 0.77778],
          8816: [0.30274, 0.79383, 0, 0, 0.77778],
          8817: [0.30274, 0.79383, 0, 0, 0.77778],
          8818: [0.22958, 0.72958, 0, 0, 0.77778],
          8819: [0.22958, 0.72958, 0, 0, 0.77778],
          8822: [0.1808, 0.675, 0, 0, 0.77778],
          8823: [0.1808, 0.675, 0, 0, 0.77778],
          8828: [0.13667, 0.63667, 0, 0, 0.77778],
          8829: [0.13667, 0.63667, 0, 0, 0.77778],
          8830: [0.22958, 0.72958, 0, 0, 0.77778],
          8831: [0.22958, 0.72958, 0, 0, 0.77778],
          8832: [0.20576, 0.70576, 0, 0, 0.77778],
          8833: [0.20576, 0.70576, 0, 0, 0.77778],
          8840: [0.30274, 0.79383, 0, 0, 0.77778],
          8841: [0.30274, 0.79383, 0, 0, 0.77778],
          8842: [0.13597, 0.63597, 0, 0, 0.77778],
          8843: [0.13597, 0.63597, 0, 0, 0.77778],
          8847: [0.03517, 0.54986, 0, 0, 0.77778],
          8848: [0.03517, 0.54986, 0, 0, 0.77778],
          8858: [0.08198, 0.58198, 0, 0, 0.77778],
          8859: [0.08198, 0.58198, 0, 0, 0.77778],
          8861: [0.08198, 0.58198, 0, 0, 0.77778],
          8862: [0, 0.675, 0, 0, 0.77778],
          8863: [0, 0.675, 0, 0, 0.77778],
          8864: [0, 0.675, 0, 0, 0.77778],
          8865: [0, 0.675, 0, 0, 0.77778],
          8872: [0, 0.69224, 0, 0, 0.61111],
          8873: [0, 0.69224, 0, 0, 0.72222],
          8874: [0, 0.69224, 0, 0, 0.88889],
          8876: [0, 0.68889, 0, 0, 0.61111],
          8877: [0, 0.68889, 0, 0, 0.61111],
          8878: [0, 0.68889, 0, 0, 0.72222],
          8879: [0, 0.68889, 0, 0, 0.72222],
          8882: [0.03517, 0.54986, 0, 0, 0.77778],
          8883: [0.03517, 0.54986, 0, 0, 0.77778],
          8884: [0.13667, 0.63667, 0, 0, 0.77778],
          8885: [0.13667, 0.63667, 0, 0, 0.77778],
          8888: [0, 0.54986, 0, 0, 1.11111],
          8890: [0.19444, 0.43056, 0, 0, 0.55556],
          8891: [0.19444, 0.69224, 0, 0, 0.61111],
          8892: [0.19444, 0.69224, 0, 0, 0.61111],
          8901: [0, 0.54986, 0, 0, 0.27778],
          8903: [0.08167, 0.58167, 0, 0, 0.77778],
          8905: [0.08167, 0.58167, 0, 0, 0.77778],
          8906: [0.08167, 0.58167, 0, 0, 0.77778],
          8907: [0, 0.69224, 0, 0, 0.77778],
          8908: [0, 0.69224, 0, 0, 0.77778],
          8909: [-0.03598, 0.46402, 0, 0, 0.77778],
          8910: [0, 0.54986, 0, 0, 0.76042],
          8911: [0, 0.54986, 0, 0, 0.76042],
          8912: [0.03517, 0.54986, 0, 0, 0.77778],
          8913: [0.03517, 0.54986, 0, 0, 0.77778],
          8914: [0, 0.54986, 0, 0, 0.66667],
          8915: [0, 0.54986, 0, 0, 0.66667],
          8916: [0, 0.69224, 0, 0, 0.66667],
          8918: [0.0391, 0.5391, 0, 0, 0.77778],
          8919: [0.0391, 0.5391, 0, 0, 0.77778],
          8920: [0.03517, 0.54986, 0, 0, 1.33334],
          8921: [0.03517, 0.54986, 0, 0, 1.33334],
          8922: [0.38569, 0.88569, 0, 0, 0.77778],
          8923: [0.38569, 0.88569, 0, 0, 0.77778],
          8926: [0.13667, 0.63667, 0, 0, 0.77778],
          8927: [0.13667, 0.63667, 0, 0, 0.77778],
          8928: [0.30274, 0.79383, 0, 0, 0.77778],
          8929: [0.30274, 0.79383, 0, 0, 0.77778],
          8934: [0.23222, 0.74111, 0, 0, 0.77778],
          8935: [0.23222, 0.74111, 0, 0, 0.77778],
          8936: [0.23222, 0.74111, 0, 0, 0.77778],
          8937: [0.23222, 0.74111, 0, 0, 0.77778],
          8938: [0.20576, 0.70576, 0, 0, 0.77778],
          8939: [0.20576, 0.70576, 0, 0, 0.77778],
          8940: [0.30274, 0.79383, 0, 0, 0.77778],
          8941: [0.30274, 0.79383, 0, 0, 0.77778],
          8994: [0.19444, 0.69224, 0, 0, 0.77778],
          8995: [0.19444, 0.69224, 0, 0, 0.77778],
          9416: [0.15559, 0.69224, 0, 0, 0.90222],
          9484: [0, 0.69224, 0, 0, 0.5],
          9488: [0, 0.69224, 0, 0, 0.5],
          9492: [0, 0.37788, 0, 0, 0.5],
          9496: [0, 0.37788, 0, 0, 0.5],
          9585: [0.19444, 0.68889, 0, 0, 0.88889],
          9586: [0.19444, 0.74111, 0, 0, 0.88889],
          9632: [0, 0.675, 0, 0, 0.77778],
          9633: [0, 0.675, 0, 0, 0.77778],
          9650: [0, 0.54986, 0, 0, 0.72222],
          9651: [0, 0.54986, 0, 0, 0.72222],
          9654: [0.03517, 0.54986, 0, 0, 0.77778],
          9660: [0, 0.54986, 0, 0, 0.72222],
          9661: [0, 0.54986, 0, 0, 0.72222],
          9664: [0.03517, 0.54986, 0, 0, 0.77778],
          9674: [0.11111, 0.69224, 0, 0, 0.66667],
          9733: [0.19444, 0.69224, 0, 0, 0.94445],
          10003: [0, 0.69224, 0, 0, 0.83334],
          10016: [0, 0.69224, 0, 0, 0.83334],
          10731: [0.11111, 0.69224, 0, 0, 0.66667],
          10846: [0.19444, 0.75583, 0, 0, 0.61111],
          10877: [0.13667, 0.63667, 0, 0, 0.77778],
          10878: [0.13667, 0.63667, 0, 0, 0.77778],
          10885: [0.25583, 0.75583, 0, 0, 0.77778],
          10886: [0.25583, 0.75583, 0, 0, 0.77778],
          10887: [0.13597, 0.63597, 0, 0, 0.77778],
          10888: [0.13597, 0.63597, 0, 0, 0.77778],
          10889: [0.26167, 0.75726, 0, 0, 0.77778],
          10890: [0.26167, 0.75726, 0, 0, 0.77778],
          10891: [0.48256, 0.98256, 0, 0, 0.77778],
          10892: [0.48256, 0.98256, 0, 0, 0.77778],
          10901: [0.13667, 0.63667, 0, 0, 0.77778],
          10902: [0.13667, 0.63667, 0, 0, 0.77778],
          10933: [0.25142, 0.75726, 0, 0, 0.77778],
          10934: [0.25142, 0.75726, 0, 0, 0.77778],
          10935: [0.26167, 0.75726, 0, 0, 0.77778],
          10936: [0.26167, 0.75726, 0, 0, 0.77778],
          10937: [0.26167, 0.75726, 0, 0, 0.77778],
          10938: [0.26167, 0.75726, 0, 0, 0.77778],
          10949: [0.25583, 0.75583, 0, 0, 0.77778],
          10950: [0.25583, 0.75583, 0, 0, 0.77778],
          10955: [0.28481, 0.79383, 0, 0, 0.77778],
          10956: [0.28481, 0.79383, 0, 0, 0.77778],
          57350: [0.08167, 0.58167, 0, 0, 0.22222],
          57351: [0.08167, 0.58167, 0, 0, 0.38889],
          57352: [0.08167, 0.58167, 0, 0, 0.77778],
          57353: [0, 0.43056, 0.04028, 0, 0.66667],
          57356: [0.25142, 0.75726, 0, 0, 0.77778],
          57357: [0.25142, 0.75726, 0, 0, 0.77778],
          57358: [0.41951, 0.91951, 0, 0, 0.77778],
          57359: [0.30274, 0.79383, 0, 0, 0.77778],
          57360: [0.30274, 0.79383, 0, 0, 0.77778],
          57361: [0.41951, 0.91951, 0, 0, 0.77778],
          57366: [0.25142, 0.75726, 0, 0, 0.77778],
          57367: [0.25142, 0.75726, 0, 0, 0.77778],
          57368: [0.25142, 0.75726, 0, 0, 0.77778],
          57369: [0.25142, 0.75726, 0, 0, 0.77778],
          57370: [0.13597, 0.63597, 0, 0, 0.77778],
          57371: [0.13597, 0.63597, 0, 0, 0.77778],
        },
        "Caligraphic-Regular": {
          32: [0, 0, 0, 0, 0.25],
          65: [0, 0.68333, 0, 0.19445, 0.79847],
          66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
          67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
          68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
          69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
          70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
          71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
          72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
          73: [0, 0.68333, 0.07382, 0, 0.54452],
          74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
          75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
          76: [0, 0.68333, 0, 0.13889, 0.68972],
          77: [0, 0.68333, 0, 0.13889, 1.2009],
          78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
          79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
          80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
          81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
          82: [0, 0.68333, 0, 0.08334, 0.8475],
          83: [0, 0.68333, 0.075, 0.13889, 0.60556],
          84: [0, 0.68333, 0.25417, 0, 0.54464],
          85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
          86: [0, 0.68333, 0.08222, 0, 0.61278],
          87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
          88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
          89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
          90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
          160: [0, 0, 0, 0, 0.25],
        },
        "Fraktur-Regular": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69141, 0, 0, 0.29574],
          34: [0, 0.69141, 0, 0, 0.21471],
          38: [0, 0.69141, 0, 0, 0.73786],
          39: [0, 0.69141, 0, 0, 0.21201],
          40: [0.24982, 0.74947, 0, 0, 0.38865],
          41: [0.24982, 0.74947, 0, 0, 0.38865],
          42: [0, 0.62119, 0, 0, 0.27764],
          43: [0.08319, 0.58283, 0, 0, 0.75623],
          44: [0, 0.10803, 0, 0, 0.27764],
          45: [0.08319, 0.58283, 0, 0, 0.75623],
          46: [0, 0.10803, 0, 0, 0.27764],
          47: [0.24982, 0.74947, 0, 0, 0.50181],
          48: [0, 0.47534, 0, 0, 0.50181],
          49: [0, 0.47534, 0, 0, 0.50181],
          50: [0, 0.47534, 0, 0, 0.50181],
          51: [0.18906, 0.47534, 0, 0, 0.50181],
          52: [0.18906, 0.47534, 0, 0, 0.50181],
          53: [0.18906, 0.47534, 0, 0, 0.50181],
          54: [0, 0.69141, 0, 0, 0.50181],
          55: [0.18906, 0.47534, 0, 0, 0.50181],
          56: [0, 0.69141, 0, 0, 0.50181],
          57: [0.18906, 0.47534, 0, 0, 0.50181],
          58: [0, 0.47534, 0, 0, 0.21606],
          59: [0.12604, 0.47534, 0, 0, 0.21606],
          61: [-0.13099, 0.36866, 0, 0, 0.75623],
          63: [0, 0.69141, 0, 0, 0.36245],
          65: [0, 0.69141, 0, 0, 0.7176],
          66: [0, 0.69141, 0, 0, 0.88397],
          67: [0, 0.69141, 0, 0, 0.61254],
          68: [0, 0.69141, 0, 0, 0.83158],
          69: [0, 0.69141, 0, 0, 0.66278],
          70: [0.12604, 0.69141, 0, 0, 0.61119],
          71: [0, 0.69141, 0, 0, 0.78539],
          72: [0.06302, 0.69141, 0, 0, 0.7203],
          73: [0, 0.69141, 0, 0, 0.55448],
          74: [0.12604, 0.69141, 0, 0, 0.55231],
          75: [0, 0.69141, 0, 0, 0.66845],
          76: [0, 0.69141, 0, 0, 0.66602],
          77: [0, 0.69141, 0, 0, 1.04953],
          78: [0, 0.69141, 0, 0, 0.83212],
          79: [0, 0.69141, 0, 0, 0.82699],
          80: [0.18906, 0.69141, 0, 0, 0.82753],
          81: [0.03781, 0.69141, 0, 0, 0.82699],
          82: [0, 0.69141, 0, 0, 0.82807],
          83: [0, 0.69141, 0, 0, 0.82861],
          84: [0, 0.69141, 0, 0, 0.66899],
          85: [0, 0.69141, 0, 0, 0.64576],
          86: [0, 0.69141, 0, 0, 0.83131],
          87: [0, 0.69141, 0, 0, 1.04602],
          88: [0, 0.69141, 0, 0, 0.71922],
          89: [0.18906, 0.69141, 0, 0, 0.83293],
          90: [0.12604, 0.69141, 0, 0, 0.60201],
          91: [0.24982, 0.74947, 0, 0, 0.27764],
          93: [0.24982, 0.74947, 0, 0, 0.27764],
          94: [0, 0.69141, 0, 0, 0.49965],
          97: [0, 0.47534, 0, 0, 0.50046],
          98: [0, 0.69141, 0, 0, 0.51315],
          99: [0, 0.47534, 0, 0, 0.38946],
          100: [0, 0.62119, 0, 0, 0.49857],
          101: [0, 0.47534, 0, 0, 0.40053],
          102: [0.18906, 0.69141, 0, 0, 0.32626],
          103: [0.18906, 0.47534, 0, 0, 0.5037],
          104: [0.18906, 0.69141, 0, 0, 0.52126],
          105: [0, 0.69141, 0, 0, 0.27899],
          106: [0, 0.69141, 0, 0, 0.28088],
          107: [0, 0.69141, 0, 0, 0.38946],
          108: [0, 0.69141, 0, 0, 0.27953],
          109: [0, 0.47534, 0, 0, 0.76676],
          110: [0, 0.47534, 0, 0, 0.52666],
          111: [0, 0.47534, 0, 0, 0.48885],
          112: [0.18906, 0.52396, 0, 0, 0.50046],
          113: [0.18906, 0.47534, 0, 0, 0.48912],
          114: [0, 0.47534, 0, 0, 0.38919],
          115: [0, 0.47534, 0, 0, 0.44266],
          116: [0, 0.62119, 0, 0, 0.33301],
          117: [0, 0.47534, 0, 0, 0.5172],
          118: [0, 0.52396, 0, 0, 0.5118],
          119: [0, 0.52396, 0, 0, 0.77351],
          120: [0.18906, 0.47534, 0, 0, 0.38865],
          121: [0.18906, 0.47534, 0, 0, 0.49884],
          122: [0.18906, 0.47534, 0, 0, 0.39054],
          160: [0, 0, 0, 0, 0.25],
          8216: [0, 0.69141, 0, 0, 0.21471],
          8217: [0, 0.69141, 0, 0, 0.21471],
          58112: [0, 0.62119, 0, 0, 0.49749],
          58113: [0, 0.62119, 0, 0, 0.4983],
          58114: [0.18906, 0.69141, 0, 0, 0.33328],
          58115: [0.18906, 0.69141, 0, 0, 0.32923],
          58116: [0.18906, 0.47534, 0, 0, 0.50343],
          58117: [0, 0.69141, 0, 0, 0.33301],
          58118: [0, 0.62119, 0, 0, 0.33409],
          58119: [0, 0.47534, 0, 0, 0.50073],
        },
        "Main-Bold": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.35],
          34: [0, 0.69444, 0, 0, 0.60278],
          35: [0.19444, 0.69444, 0, 0, 0.95833],
          36: [0.05556, 0.75, 0, 0, 0.575],
          37: [0.05556, 0.75, 0, 0, 0.95833],
          38: [0, 0.69444, 0, 0, 0.89444],
          39: [0, 0.69444, 0, 0, 0.31944],
          40: [0.25, 0.75, 0, 0, 0.44722],
          41: [0.25, 0.75, 0, 0, 0.44722],
          42: [0, 0.75, 0, 0, 0.575],
          43: [0.13333, 0.63333, 0, 0, 0.89444],
          44: [0.19444, 0.15556, 0, 0, 0.31944],
          45: [0, 0.44444, 0, 0, 0.38333],
          46: [0, 0.15556, 0, 0, 0.31944],
          47: [0.25, 0.75, 0, 0, 0.575],
          48: [0, 0.64444, 0, 0, 0.575],
          49: [0, 0.64444, 0, 0, 0.575],
          50: [0, 0.64444, 0, 0, 0.575],
          51: [0, 0.64444, 0, 0, 0.575],
          52: [0, 0.64444, 0, 0, 0.575],
          53: [0, 0.64444, 0, 0, 0.575],
          54: [0, 0.64444, 0, 0, 0.575],
          55: [0, 0.64444, 0, 0, 0.575],
          56: [0, 0.64444, 0, 0, 0.575],
          57: [0, 0.64444, 0, 0, 0.575],
          58: [0, 0.44444, 0, 0, 0.31944],
          59: [0.19444, 0.44444, 0, 0, 0.31944],
          60: [0.08556, 0.58556, 0, 0, 0.89444],
          61: [-0.10889, 0.39111, 0, 0, 0.89444],
          62: [0.08556, 0.58556, 0, 0, 0.89444],
          63: [0, 0.69444, 0, 0, 0.54305],
          64: [0, 0.69444, 0, 0, 0.89444],
          65: [0, 0.68611, 0, 0, 0.86944],
          66: [0, 0.68611, 0, 0, 0.81805],
          67: [0, 0.68611, 0, 0, 0.83055],
          68: [0, 0.68611, 0, 0, 0.88194],
          69: [0, 0.68611, 0, 0, 0.75555],
          70: [0, 0.68611, 0, 0, 0.72361],
          71: [0, 0.68611, 0, 0, 0.90416],
          72: [0, 0.68611, 0, 0, 0.9],
          73: [0, 0.68611, 0, 0, 0.43611],
          74: [0, 0.68611, 0, 0, 0.59444],
          75: [0, 0.68611, 0, 0, 0.90138],
          76: [0, 0.68611, 0, 0, 0.69166],
          77: [0, 0.68611, 0, 0, 1.09166],
          78: [0, 0.68611, 0, 0, 0.9],
          79: [0, 0.68611, 0, 0, 0.86388],
          80: [0, 0.68611, 0, 0, 0.78611],
          81: [0.19444, 0.68611, 0, 0, 0.86388],
          82: [0, 0.68611, 0, 0, 0.8625],
          83: [0, 0.68611, 0, 0, 0.63889],
          84: [0, 0.68611, 0, 0, 0.8],
          85: [0, 0.68611, 0, 0, 0.88472],
          86: [0, 0.68611, 0.01597, 0, 0.86944],
          87: [0, 0.68611, 0.01597, 0, 1.18888],
          88: [0, 0.68611, 0, 0, 0.86944],
          89: [0, 0.68611, 0.02875, 0, 0.86944],
          90: [0, 0.68611, 0, 0, 0.70277],
          91: [0.25, 0.75, 0, 0, 0.31944],
          92: [0.25, 0.75, 0, 0, 0.575],
          93: [0.25, 0.75, 0, 0, 0.31944],
          94: [0, 0.69444, 0, 0, 0.575],
          95: [0.31, 0.13444, 0.03194, 0, 0.575],
          97: [0, 0.44444, 0, 0, 0.55902],
          98: [0, 0.69444, 0, 0, 0.63889],
          99: [0, 0.44444, 0, 0, 0.51111],
          100: [0, 0.69444, 0, 0, 0.63889],
          101: [0, 0.44444, 0, 0, 0.52708],
          102: [0, 0.69444, 0.10903, 0, 0.35139],
          103: [0.19444, 0.44444, 0.01597, 0, 0.575],
          104: [0, 0.69444, 0, 0, 0.63889],
          105: [0, 0.69444, 0, 0, 0.31944],
          106: [0.19444, 0.69444, 0, 0, 0.35139],
          107: [0, 0.69444, 0, 0, 0.60694],
          108: [0, 0.69444, 0, 0, 0.31944],
          109: [0, 0.44444, 0, 0, 0.95833],
          110: [0, 0.44444, 0, 0, 0.63889],
          111: [0, 0.44444, 0, 0, 0.575],
          112: [0.19444, 0.44444, 0, 0, 0.63889],
          113: [0.19444, 0.44444, 0, 0, 0.60694],
          114: [0, 0.44444, 0, 0, 0.47361],
          115: [0, 0.44444, 0, 0, 0.45361],
          116: [0, 0.63492, 0, 0, 0.44722],
          117: [0, 0.44444, 0, 0, 0.63889],
          118: [0, 0.44444, 0.01597, 0, 0.60694],
          119: [0, 0.44444, 0.01597, 0, 0.83055],
          120: [0, 0.44444, 0, 0, 0.60694],
          121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
          122: [0, 0.44444, 0, 0, 0.51111],
          123: [0.25, 0.75, 0, 0, 0.575],
          124: [0.25, 0.75, 0, 0, 0.31944],
          125: [0.25, 0.75, 0, 0, 0.575],
          126: [0.35, 0.34444, 0, 0, 0.575],
          160: [0, 0, 0, 0, 0.25],
          163: [0, 0.69444, 0, 0, 0.86853],
          168: [0, 0.69444, 0, 0, 0.575],
          172: [0, 0.44444, 0, 0, 0.76666],
          176: [0, 0.69444, 0, 0, 0.86944],
          177: [0.13333, 0.63333, 0, 0, 0.89444],
          184: [0.17014, 0, 0, 0, 0.51111],
          198: [0, 0.68611, 0, 0, 1.04166],
          215: [0.13333, 0.63333, 0, 0, 0.89444],
          216: [0.04861, 0.73472, 0, 0, 0.89444],
          223: [0, 0.69444, 0, 0, 0.59722],
          230: [0, 0.44444, 0, 0, 0.83055],
          247: [0.13333, 0.63333, 0, 0, 0.89444],
          248: [0.09722, 0.54167, 0, 0, 0.575],
          305: [0, 0.44444, 0, 0, 0.31944],
          338: [0, 0.68611, 0, 0, 1.16944],
          339: [0, 0.44444, 0, 0, 0.89444],
          567: [0.19444, 0.44444, 0, 0, 0.35139],
          710: [0, 0.69444, 0, 0, 0.575],
          711: [0, 0.63194, 0, 0, 0.575],
          713: [0, 0.59611, 0, 0, 0.575],
          714: [0, 0.69444, 0, 0, 0.575],
          715: [0, 0.69444, 0, 0, 0.575],
          728: [0, 0.69444, 0, 0, 0.575],
          729: [0, 0.69444, 0, 0, 0.31944],
          730: [0, 0.69444, 0, 0, 0.86944],
          732: [0, 0.69444, 0, 0, 0.575],
          733: [0, 0.69444, 0, 0, 0.575],
          915: [0, 0.68611, 0, 0, 0.69166],
          916: [0, 0.68611, 0, 0, 0.95833],
          920: [0, 0.68611, 0, 0, 0.89444],
          923: [0, 0.68611, 0, 0, 0.80555],
          926: [0, 0.68611, 0, 0, 0.76666],
          928: [0, 0.68611, 0, 0, 0.9],
          931: [0, 0.68611, 0, 0, 0.83055],
          933: [0, 0.68611, 0, 0, 0.89444],
          934: [0, 0.68611, 0, 0, 0.83055],
          936: [0, 0.68611, 0, 0, 0.89444],
          937: [0, 0.68611, 0, 0, 0.83055],
          8211: [0, 0.44444, 0.03194, 0, 0.575],
          8212: [0, 0.44444, 0.03194, 0, 1.14999],
          8216: [0, 0.69444, 0, 0, 0.31944],
          8217: [0, 0.69444, 0, 0, 0.31944],
          8220: [0, 0.69444, 0, 0, 0.60278],
          8221: [0, 0.69444, 0, 0, 0.60278],
          8224: [0.19444, 0.69444, 0, 0, 0.51111],
          8225: [0.19444, 0.69444, 0, 0, 0.51111],
          8242: [0, 0.55556, 0, 0, 0.34444],
          8407: [0, 0.72444, 0.15486, 0, 0.575],
          8463: [0, 0.69444, 0, 0, 0.66759],
          8465: [0, 0.69444, 0, 0, 0.83055],
          8467: [0, 0.69444, 0, 0, 0.47361],
          8472: [0.19444, 0.44444, 0, 0, 0.74027],
          8476: [0, 0.69444, 0, 0, 0.83055],
          8501: [0, 0.69444, 0, 0, 0.70277],
          8592: [-0.10889, 0.39111, 0, 0, 1.14999],
          8593: [0.19444, 0.69444, 0, 0, 0.575],
          8594: [-0.10889, 0.39111, 0, 0, 1.14999],
          8595: [0.19444, 0.69444, 0, 0, 0.575],
          8596: [-0.10889, 0.39111, 0, 0, 1.14999],
          8597: [0.25, 0.75, 0, 0, 0.575],
          8598: [0.19444, 0.69444, 0, 0, 1.14999],
          8599: [0.19444, 0.69444, 0, 0, 1.14999],
          8600: [0.19444, 0.69444, 0, 0, 1.14999],
          8601: [0.19444, 0.69444, 0, 0, 1.14999],
          8636: [-0.10889, 0.39111, 0, 0, 1.14999],
          8637: [-0.10889, 0.39111, 0, 0, 1.14999],
          8640: [-0.10889, 0.39111, 0, 0, 1.14999],
          8641: [-0.10889, 0.39111, 0, 0, 1.14999],
          8656: [-0.10889, 0.39111, 0, 0, 1.14999],
          8657: [0.19444, 0.69444, 0, 0, 0.70277],
          8658: [-0.10889, 0.39111, 0, 0, 1.14999],
          8659: [0.19444, 0.69444, 0, 0, 0.70277],
          8660: [-0.10889, 0.39111, 0, 0, 1.14999],
          8661: [0.25, 0.75, 0, 0, 0.70277],
          8704: [0, 0.69444, 0, 0, 0.63889],
          8706: [0, 0.69444, 0.06389, 0, 0.62847],
          8707: [0, 0.69444, 0, 0, 0.63889],
          8709: [0.05556, 0.75, 0, 0, 0.575],
          8711: [0, 0.68611, 0, 0, 0.95833],
          8712: [0.08556, 0.58556, 0, 0, 0.76666],
          8715: [0.08556, 0.58556, 0, 0, 0.76666],
          8722: [0.13333, 0.63333, 0, 0, 0.89444],
          8723: [0.13333, 0.63333, 0, 0, 0.89444],
          8725: [0.25, 0.75, 0, 0, 0.575],
          8726: [0.25, 0.75, 0, 0, 0.575],
          8727: [-0.02778, 0.47222, 0, 0, 0.575],
          8728: [-0.02639, 0.47361, 0, 0, 0.575],
          8729: [-0.02639, 0.47361, 0, 0, 0.575],
          8730: [0.18, 0.82, 0, 0, 0.95833],
          8733: [0, 0.44444, 0, 0, 0.89444],
          8734: [0, 0.44444, 0, 0, 1.14999],
          8736: [0, 0.69224, 0, 0, 0.72222],
          8739: [0.25, 0.75, 0, 0, 0.31944],
          8741: [0.25, 0.75, 0, 0, 0.575],
          8743: [0, 0.55556, 0, 0, 0.76666],
          8744: [0, 0.55556, 0, 0, 0.76666],
          8745: [0, 0.55556, 0, 0, 0.76666],
          8746: [0, 0.55556, 0, 0, 0.76666],
          8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
          8764: [-0.10889, 0.39111, 0, 0, 0.89444],
          8768: [0.19444, 0.69444, 0, 0, 0.31944],
          8771: [0.00222, 0.50222, 0, 0, 0.89444],
          8773: [0.027, 0.638, 0, 0, 0.894],
          8776: [0.02444, 0.52444, 0, 0, 0.89444],
          8781: [0.00222, 0.50222, 0, 0, 0.89444],
          8801: [0.00222, 0.50222, 0, 0, 0.89444],
          8804: [0.19667, 0.69667, 0, 0, 0.89444],
          8805: [0.19667, 0.69667, 0, 0, 0.89444],
          8810: [0.08556, 0.58556, 0, 0, 1.14999],
          8811: [0.08556, 0.58556, 0, 0, 1.14999],
          8826: [0.08556, 0.58556, 0, 0, 0.89444],
          8827: [0.08556, 0.58556, 0, 0, 0.89444],
          8834: [0.08556, 0.58556, 0, 0, 0.89444],
          8835: [0.08556, 0.58556, 0, 0, 0.89444],
          8838: [0.19667, 0.69667, 0, 0, 0.89444],
          8839: [0.19667, 0.69667, 0, 0, 0.89444],
          8846: [0, 0.55556, 0, 0, 0.76666],
          8849: [0.19667, 0.69667, 0, 0, 0.89444],
          8850: [0.19667, 0.69667, 0, 0, 0.89444],
          8851: [0, 0.55556, 0, 0, 0.76666],
          8852: [0, 0.55556, 0, 0, 0.76666],
          8853: [0.13333, 0.63333, 0, 0, 0.89444],
          8854: [0.13333, 0.63333, 0, 0, 0.89444],
          8855: [0.13333, 0.63333, 0, 0, 0.89444],
          8856: [0.13333, 0.63333, 0, 0, 0.89444],
          8857: [0.13333, 0.63333, 0, 0, 0.89444],
          8866: [0, 0.69444, 0, 0, 0.70277],
          8867: [0, 0.69444, 0, 0, 0.70277],
          8868: [0, 0.69444, 0, 0, 0.89444],
          8869: [0, 0.69444, 0, 0, 0.89444],
          8900: [-0.02639, 0.47361, 0, 0, 0.575],
          8901: [-0.02639, 0.47361, 0, 0, 0.31944],
          8902: [-0.02778, 0.47222, 0, 0, 0.575],
          8968: [0.25, 0.75, 0, 0, 0.51111],
          8969: [0.25, 0.75, 0, 0, 0.51111],
          8970: [0.25, 0.75, 0, 0, 0.51111],
          8971: [0.25, 0.75, 0, 0, 0.51111],
          8994: [-0.13889, 0.36111, 0, 0, 1.14999],
          8995: [-0.13889, 0.36111, 0, 0, 1.14999],
          9651: [0.19444, 0.69444, 0, 0, 1.02222],
          9657: [-0.02778, 0.47222, 0, 0, 0.575],
          9661: [0.19444, 0.69444, 0, 0, 1.02222],
          9667: [-0.02778, 0.47222, 0, 0, 0.575],
          9711: [0.19444, 0.69444, 0, 0, 1.14999],
          9824: [0.12963, 0.69444, 0, 0, 0.89444],
          9825: [0.12963, 0.69444, 0, 0, 0.89444],
          9826: [0.12963, 0.69444, 0, 0, 0.89444],
          9827: [0.12963, 0.69444, 0, 0, 0.89444],
          9837: [0, 0.75, 0, 0, 0.44722],
          9838: [0.19444, 0.69444, 0, 0, 0.44722],
          9839: [0.19444, 0.69444, 0, 0, 0.44722],
          10216: [0.25, 0.75, 0, 0, 0.44722],
          10217: [0.25, 0.75, 0, 0, 0.44722],
          10815: [0, 0.68611, 0, 0, 0.9],
          10927: [0.19667, 0.69667, 0, 0, 0.89444],
          10928: [0.19667, 0.69667, 0, 0, 0.89444],
          57376: [0.19444, 0.69444, 0, 0, 0],
        },
        "Main-BoldItalic": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0.11417, 0, 0.38611],
          34: [0, 0.69444, 0.07939, 0, 0.62055],
          35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
          37: [0.05556, 0.75, 0.12861, 0, 0.94444],
          38: [0, 0.69444, 0.08528, 0, 0.88555],
          39: [0, 0.69444, 0.12945, 0, 0.35555],
          40: [0.25, 0.75, 0.15806, 0, 0.47333],
          41: [0.25, 0.75, 0.03306, 0, 0.47333],
          42: [0, 0.75, 0.14333, 0, 0.59111],
          43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
          44: [0.19444, 0.14722, 0, 0, 0.35555],
          45: [0, 0.44444, 0.02611, 0, 0.41444],
          46: [0, 0.14722, 0, 0, 0.35555],
          47: [0.25, 0.75, 0.15806, 0, 0.59111],
          48: [0, 0.64444, 0.13167, 0, 0.59111],
          49: [0, 0.64444, 0.13167, 0, 0.59111],
          50: [0, 0.64444, 0.13167, 0, 0.59111],
          51: [0, 0.64444, 0.13167, 0, 0.59111],
          52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
          53: [0, 0.64444, 0.13167, 0, 0.59111],
          54: [0, 0.64444, 0.13167, 0, 0.59111],
          55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
          56: [0, 0.64444, 0.13167, 0, 0.59111],
          57: [0, 0.64444, 0.13167, 0, 0.59111],
          58: [0, 0.44444, 0.06695, 0, 0.35555],
          59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
          61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
          63: [0, 0.69444, 0.11472, 0, 0.59111],
          64: [0, 0.69444, 0.09208, 0, 0.88555],
          65: [0, 0.68611, 0, 0, 0.86555],
          66: [0, 0.68611, 0.0992, 0, 0.81666],
          67: [0, 0.68611, 0.14208, 0, 0.82666],
          68: [0, 0.68611, 0.09062, 0, 0.87555],
          69: [0, 0.68611, 0.11431, 0, 0.75666],
          70: [0, 0.68611, 0.12903, 0, 0.72722],
          71: [0, 0.68611, 0.07347, 0, 0.89527],
          72: [0, 0.68611, 0.17208, 0, 0.8961],
          73: [0, 0.68611, 0.15681, 0, 0.47166],
          74: [0, 0.68611, 0.145, 0, 0.61055],
          75: [0, 0.68611, 0.14208, 0, 0.89499],
          76: [0, 0.68611, 0, 0, 0.69777],
          77: [0, 0.68611, 0.17208, 0, 1.07277],
          78: [0, 0.68611, 0.17208, 0, 0.8961],
          79: [0, 0.68611, 0.09062, 0, 0.85499],
          80: [0, 0.68611, 0.0992, 0, 0.78721],
          81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
          82: [0, 0.68611, 0.02559, 0, 0.85944],
          83: [0, 0.68611, 0.11264, 0, 0.64999],
          84: [0, 0.68611, 0.12903, 0, 0.7961],
          85: [0, 0.68611, 0.17208, 0, 0.88083],
          86: [0, 0.68611, 0.18625, 0, 0.86555],
          87: [0, 0.68611, 0.18625, 0, 1.15999],
          88: [0, 0.68611, 0.15681, 0, 0.86555],
          89: [0, 0.68611, 0.19803, 0, 0.86555],
          90: [0, 0.68611, 0.14208, 0, 0.70888],
          91: [0.25, 0.75, 0.1875, 0, 0.35611],
          93: [0.25, 0.75, 0.09972, 0, 0.35611],
          94: [0, 0.69444, 0.06709, 0, 0.59111],
          95: [0.31, 0.13444, 0.09811, 0, 0.59111],
          97: [0, 0.44444, 0.09426, 0, 0.59111],
          98: [0, 0.69444, 0.07861, 0, 0.53222],
          99: [0, 0.44444, 0.05222, 0, 0.53222],
          100: [0, 0.69444, 0.10861, 0, 0.59111],
          101: [0, 0.44444, 0.085, 0, 0.53222],
          102: [0.19444, 0.69444, 0.21778, 0, 0.4],
          103: [0.19444, 0.44444, 0.105, 0, 0.53222],
          104: [0, 0.69444, 0.09426, 0, 0.59111],
          105: [0, 0.69326, 0.11387, 0, 0.35555],
          106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
          107: [0, 0.69444, 0.11111, 0, 0.53222],
          108: [0, 0.69444, 0.10861, 0, 0.29666],
          109: [0, 0.44444, 0.09426, 0, 0.94444],
          110: [0, 0.44444, 0.09426, 0, 0.64999],
          111: [0, 0.44444, 0.07861, 0, 0.59111],
          112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
          113: [0.19444, 0.44444, 0.105, 0, 0.53222],
          114: [0, 0.44444, 0.11111, 0, 0.50167],
          115: [0, 0.44444, 0.08167, 0, 0.48694],
          116: [0, 0.63492, 0.09639, 0, 0.385],
          117: [0, 0.44444, 0.09426, 0, 0.62055],
          118: [0, 0.44444, 0.11111, 0, 0.53222],
          119: [0, 0.44444, 0.11111, 0, 0.76777],
          120: [0, 0.44444, 0.12583, 0, 0.56055],
          121: [0.19444, 0.44444, 0.105, 0, 0.56166],
          122: [0, 0.44444, 0.13889, 0, 0.49055],
          126: [0.35, 0.34444, 0.11472, 0, 0.59111],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.69444, 0.11473, 0, 0.59111],
          176: [0, 0.69444, 0, 0, 0.94888],
          184: [0.17014, 0, 0, 0, 0.53222],
          198: [0, 0.68611, 0.11431, 0, 1.02277],
          216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
          223: [0.19444, 0.69444, 0.09736, 0, 0.665],
          230: [0, 0.44444, 0.085, 0, 0.82666],
          248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
          305: [0, 0.44444, 0.09426, 0, 0.35555],
          338: [0, 0.68611, 0.11431, 0, 1.14054],
          339: [0, 0.44444, 0.085, 0, 0.82666],
          567: [0.19444, 0.44444, 0.04611, 0, 0.385],
          710: [0, 0.69444, 0.06709, 0, 0.59111],
          711: [0, 0.63194, 0.08271, 0, 0.59111],
          713: [0, 0.59444, 0.10444, 0, 0.59111],
          714: [0, 0.69444, 0.08528, 0, 0.59111],
          715: [0, 0.69444, 0, 0, 0.59111],
          728: [0, 0.69444, 0.10333, 0, 0.59111],
          729: [0, 0.69444, 0.12945, 0, 0.35555],
          730: [0, 0.69444, 0, 0, 0.94888],
          732: [0, 0.69444, 0.11472, 0, 0.59111],
          733: [0, 0.69444, 0.11472, 0, 0.59111],
          915: [0, 0.68611, 0.12903, 0, 0.69777],
          916: [0, 0.68611, 0, 0, 0.94444],
          920: [0, 0.68611, 0.09062, 0, 0.88555],
          923: [0, 0.68611, 0, 0, 0.80666],
          926: [0, 0.68611, 0.15092, 0, 0.76777],
          928: [0, 0.68611, 0.17208, 0, 0.8961],
          931: [0, 0.68611, 0.11431, 0, 0.82666],
          933: [0, 0.68611, 0.10778, 0, 0.88555],
          934: [0, 0.68611, 0.05632, 0, 0.82666],
          936: [0, 0.68611, 0.10778, 0, 0.88555],
          937: [0, 0.68611, 0.0992, 0, 0.82666],
          8211: [0, 0.44444, 0.09811, 0, 0.59111],
          8212: [0, 0.44444, 0.09811, 0, 1.18221],
          8216: [0, 0.69444, 0.12945, 0, 0.35555],
          8217: [0, 0.69444, 0.12945, 0, 0.35555],
          8220: [0, 0.69444, 0.16772, 0, 0.62055],
          8221: [0, 0.69444, 0.07939, 0, 0.62055],
        },
        "Main-Italic": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0.12417, 0, 0.30667],
          34: [0, 0.69444, 0.06961, 0, 0.51444],
          35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
          37: [0.05556, 0.75, 0.13639, 0, 0.81777],
          38: [0, 0.69444, 0.09694, 0, 0.76666],
          39: [0, 0.69444, 0.12417, 0, 0.30667],
          40: [0.25, 0.75, 0.16194, 0, 0.40889],
          41: [0.25, 0.75, 0.03694, 0, 0.40889],
          42: [0, 0.75, 0.14917, 0, 0.51111],
          43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
          44: [0.19444, 0.10556, 0, 0, 0.30667],
          45: [0, 0.43056, 0.02826, 0, 0.35778],
          46: [0, 0.10556, 0, 0, 0.30667],
          47: [0.25, 0.75, 0.16194, 0, 0.51111],
          48: [0, 0.64444, 0.13556, 0, 0.51111],
          49: [0, 0.64444, 0.13556, 0, 0.51111],
          50: [0, 0.64444, 0.13556, 0, 0.51111],
          51: [0, 0.64444, 0.13556, 0, 0.51111],
          52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
          53: [0, 0.64444, 0.13556, 0, 0.51111],
          54: [0, 0.64444, 0.13556, 0, 0.51111],
          55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
          56: [0, 0.64444, 0.13556, 0, 0.51111],
          57: [0, 0.64444, 0.13556, 0, 0.51111],
          58: [0, 0.43056, 0.0582, 0, 0.30667],
          59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
          61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
          63: [0, 0.69444, 0.1225, 0, 0.51111],
          64: [0, 0.69444, 0.09597, 0, 0.76666],
          65: [0, 0.68333, 0, 0, 0.74333],
          66: [0, 0.68333, 0.10257, 0, 0.70389],
          67: [0, 0.68333, 0.14528, 0, 0.71555],
          68: [0, 0.68333, 0.09403, 0, 0.755],
          69: [0, 0.68333, 0.12028, 0, 0.67833],
          70: [0, 0.68333, 0.13305, 0, 0.65277],
          71: [0, 0.68333, 0.08722, 0, 0.77361],
          72: [0, 0.68333, 0.16389, 0, 0.74333],
          73: [0, 0.68333, 0.15806, 0, 0.38555],
          74: [0, 0.68333, 0.14028, 0, 0.525],
          75: [0, 0.68333, 0.14528, 0, 0.76888],
          76: [0, 0.68333, 0, 0, 0.62722],
          77: [0, 0.68333, 0.16389, 0, 0.89666],
          78: [0, 0.68333, 0.16389, 0, 0.74333],
          79: [0, 0.68333, 0.09403, 0, 0.76666],
          80: [0, 0.68333, 0.10257, 0, 0.67833],
          81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
          82: [0, 0.68333, 0.03868, 0, 0.72944],
          83: [0, 0.68333, 0.11972, 0, 0.56222],
          84: [0, 0.68333, 0.13305, 0, 0.71555],
          85: [0, 0.68333, 0.16389, 0, 0.74333],
          86: [0, 0.68333, 0.18361, 0, 0.74333],
          87: [0, 0.68333, 0.18361, 0, 0.99888],
          88: [0, 0.68333, 0.15806, 0, 0.74333],
          89: [0, 0.68333, 0.19383, 0, 0.74333],
          90: [0, 0.68333, 0.14528, 0, 0.61333],
          91: [0.25, 0.75, 0.1875, 0, 0.30667],
          93: [0.25, 0.75, 0.10528, 0, 0.30667],
          94: [0, 0.69444, 0.06646, 0, 0.51111],
          95: [0.31, 0.12056, 0.09208, 0, 0.51111],
          97: [0, 0.43056, 0.07671, 0, 0.51111],
          98: [0, 0.69444, 0.06312, 0, 0.46],
          99: [0, 0.43056, 0.05653, 0, 0.46],
          100: [0, 0.69444, 0.10333, 0, 0.51111],
          101: [0, 0.43056, 0.07514, 0, 0.46],
          102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
          103: [0.19444, 0.43056, 0.08847, 0, 0.46],
          104: [0, 0.69444, 0.07671, 0, 0.51111],
          105: [0, 0.65536, 0.1019, 0, 0.30667],
          106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
          107: [0, 0.69444, 0.10764, 0, 0.46],
          108: [0, 0.69444, 0.10333, 0, 0.25555],
          109: [0, 0.43056, 0.07671, 0, 0.81777],
          110: [0, 0.43056, 0.07671, 0, 0.56222],
          111: [0, 0.43056, 0.06312, 0, 0.51111],
          112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
          113: [0.19444, 0.43056, 0.08847, 0, 0.46],
          114: [0, 0.43056, 0.10764, 0, 0.42166],
          115: [0, 0.43056, 0.08208, 0, 0.40889],
          116: [0, 0.61508, 0.09486, 0, 0.33222],
          117: [0, 0.43056, 0.07671, 0, 0.53666],
          118: [0, 0.43056, 0.10764, 0, 0.46],
          119: [0, 0.43056, 0.10764, 0, 0.66444],
          120: [0, 0.43056, 0.12042, 0, 0.46389],
          121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
          122: [0, 0.43056, 0.12292, 0, 0.40889],
          126: [0.35, 0.31786, 0.11585, 0, 0.51111],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.66786, 0.10474, 0, 0.51111],
          176: [0, 0.69444, 0, 0, 0.83129],
          184: [0.17014, 0, 0, 0, 0.46],
          198: [0, 0.68333, 0.12028, 0, 0.88277],
          216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
          223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
          230: [0, 0.43056, 0.07514, 0, 0.71555],
          248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
          338: [0, 0.68333, 0.12028, 0, 0.98499],
          339: [0, 0.43056, 0.07514, 0, 0.71555],
          710: [0, 0.69444, 0.06646, 0, 0.51111],
          711: [0, 0.62847, 0.08295, 0, 0.51111],
          713: [0, 0.56167, 0.10333, 0, 0.51111],
          714: [0, 0.69444, 0.09694, 0, 0.51111],
          715: [0, 0.69444, 0, 0, 0.51111],
          728: [0, 0.69444, 0.10806, 0, 0.51111],
          729: [0, 0.66786, 0.11752, 0, 0.30667],
          730: [0, 0.69444, 0, 0, 0.83129],
          732: [0, 0.66786, 0.11585, 0, 0.51111],
          733: [0, 0.69444, 0.1225, 0, 0.51111],
          915: [0, 0.68333, 0.13305, 0, 0.62722],
          916: [0, 0.68333, 0, 0, 0.81777],
          920: [0, 0.68333, 0.09403, 0, 0.76666],
          923: [0, 0.68333, 0, 0, 0.69222],
          926: [0, 0.68333, 0.15294, 0, 0.66444],
          928: [0, 0.68333, 0.16389, 0, 0.74333],
          931: [0, 0.68333, 0.12028, 0, 0.71555],
          933: [0, 0.68333, 0.11111, 0, 0.76666],
          934: [0, 0.68333, 0.05986, 0, 0.71555],
          936: [0, 0.68333, 0.11111, 0, 0.76666],
          937: [0, 0.68333, 0.10257, 0, 0.71555],
          8211: [0, 0.43056, 0.09208, 0, 0.51111],
          8212: [0, 0.43056, 0.09208, 0, 1.02222],
          8216: [0, 0.69444, 0.12417, 0, 0.30667],
          8217: [0, 0.69444, 0.12417, 0, 0.30667],
          8220: [0, 0.69444, 0.1685, 0, 0.51444],
          8221: [0, 0.69444, 0.06961, 0, 0.51444],
          8463: [0, 0.68889, 0, 0, 0.54028],
        },
        "Main-Regular": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.27778],
          34: [0, 0.69444, 0, 0, 0.5],
          35: [0.19444, 0.69444, 0, 0, 0.83334],
          36: [0.05556, 0.75, 0, 0, 0.5],
          37: [0.05556, 0.75, 0, 0, 0.83334],
          38: [0, 0.69444, 0, 0, 0.77778],
          39: [0, 0.69444, 0, 0, 0.27778],
          40: [0.25, 0.75, 0, 0, 0.38889],
          41: [0.25, 0.75, 0, 0, 0.38889],
          42: [0, 0.75, 0, 0, 0.5],
          43: [0.08333, 0.58333, 0, 0, 0.77778],
          44: [0.19444, 0.10556, 0, 0, 0.27778],
          45: [0, 0.43056, 0, 0, 0.33333],
          46: [0, 0.10556, 0, 0, 0.27778],
          47: [0.25, 0.75, 0, 0, 0.5],
          48: [0, 0.64444, 0, 0, 0.5],
          49: [0, 0.64444, 0, 0, 0.5],
          50: [0, 0.64444, 0, 0, 0.5],
          51: [0, 0.64444, 0, 0, 0.5],
          52: [0, 0.64444, 0, 0, 0.5],
          53: [0, 0.64444, 0, 0, 0.5],
          54: [0, 0.64444, 0, 0, 0.5],
          55: [0, 0.64444, 0, 0, 0.5],
          56: [0, 0.64444, 0, 0, 0.5],
          57: [0, 0.64444, 0, 0, 0.5],
          58: [0, 0.43056, 0, 0, 0.27778],
          59: [0.19444, 0.43056, 0, 0, 0.27778],
          60: [0.0391, 0.5391, 0, 0, 0.77778],
          61: [-0.13313, 0.36687, 0, 0, 0.77778],
          62: [0.0391, 0.5391, 0, 0, 0.77778],
          63: [0, 0.69444, 0, 0, 0.47222],
          64: [0, 0.69444, 0, 0, 0.77778],
          65: [0, 0.68333, 0, 0, 0.75],
          66: [0, 0.68333, 0, 0, 0.70834],
          67: [0, 0.68333, 0, 0, 0.72222],
          68: [0, 0.68333, 0, 0, 0.76389],
          69: [0, 0.68333, 0, 0, 0.68056],
          70: [0, 0.68333, 0, 0, 0.65278],
          71: [0, 0.68333, 0, 0, 0.78472],
          72: [0, 0.68333, 0, 0, 0.75],
          73: [0, 0.68333, 0, 0, 0.36111],
          74: [0, 0.68333, 0, 0, 0.51389],
          75: [0, 0.68333, 0, 0, 0.77778],
          76: [0, 0.68333, 0, 0, 0.625],
          77: [0, 0.68333, 0, 0, 0.91667],
          78: [0, 0.68333, 0, 0, 0.75],
          79: [0, 0.68333, 0, 0, 0.77778],
          80: [0, 0.68333, 0, 0, 0.68056],
          81: [0.19444, 0.68333, 0, 0, 0.77778],
          82: [0, 0.68333, 0, 0, 0.73611],
          83: [0, 0.68333, 0, 0, 0.55556],
          84: [0, 0.68333, 0, 0, 0.72222],
          85: [0, 0.68333, 0, 0, 0.75],
          86: [0, 0.68333, 0.01389, 0, 0.75],
          87: [0, 0.68333, 0.01389, 0, 1.02778],
          88: [0, 0.68333, 0, 0, 0.75],
          89: [0, 0.68333, 0.025, 0, 0.75],
          90: [0, 0.68333, 0, 0, 0.61111],
          91: [0.25, 0.75, 0, 0, 0.27778],
          92: [0.25, 0.75, 0, 0, 0.5],
          93: [0.25, 0.75, 0, 0, 0.27778],
          94: [0, 0.69444, 0, 0, 0.5],
          95: [0.31, 0.12056, 0.02778, 0, 0.5],
          97: [0, 0.43056, 0, 0, 0.5],
          98: [0, 0.69444, 0, 0, 0.55556],
          99: [0, 0.43056, 0, 0, 0.44445],
          100: [0, 0.69444, 0, 0, 0.55556],
          101: [0, 0.43056, 0, 0, 0.44445],
          102: [0, 0.69444, 0.07778, 0, 0.30556],
          103: [0.19444, 0.43056, 0.01389, 0, 0.5],
          104: [0, 0.69444, 0, 0, 0.55556],
          105: [0, 0.66786, 0, 0, 0.27778],
          106: [0.19444, 0.66786, 0, 0, 0.30556],
          107: [0, 0.69444, 0, 0, 0.52778],
          108: [0, 0.69444, 0, 0, 0.27778],
          109: [0, 0.43056, 0, 0, 0.83334],
          110: [0, 0.43056, 0, 0, 0.55556],
          111: [0, 0.43056, 0, 0, 0.5],
          112: [0.19444, 0.43056, 0, 0, 0.55556],
          113: [0.19444, 0.43056, 0, 0, 0.52778],
          114: [0, 0.43056, 0, 0, 0.39167],
          115: [0, 0.43056, 0, 0, 0.39445],
          116: [0, 0.61508, 0, 0, 0.38889],
          117: [0, 0.43056, 0, 0, 0.55556],
          118: [0, 0.43056, 0.01389, 0, 0.52778],
          119: [0, 0.43056, 0.01389, 0, 0.72222],
          120: [0, 0.43056, 0, 0, 0.52778],
          121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
          122: [0, 0.43056, 0, 0, 0.44445],
          123: [0.25, 0.75, 0, 0, 0.5],
          124: [0.25, 0.75, 0, 0, 0.27778],
          125: [0.25, 0.75, 0, 0, 0.5],
          126: [0.35, 0.31786, 0, 0, 0.5],
          160: [0, 0, 0, 0, 0.25],
          163: [0, 0.69444, 0, 0, 0.76909],
          167: [0.19444, 0.69444, 0, 0, 0.44445],
          168: [0, 0.66786, 0, 0, 0.5],
          172: [0, 0.43056, 0, 0, 0.66667],
          176: [0, 0.69444, 0, 0, 0.75],
          177: [0.08333, 0.58333, 0, 0, 0.77778],
          182: [0.19444, 0.69444, 0, 0, 0.61111],
          184: [0.17014, 0, 0, 0, 0.44445],
          198: [0, 0.68333, 0, 0, 0.90278],
          215: [0.08333, 0.58333, 0, 0, 0.77778],
          216: [0.04861, 0.73194, 0, 0, 0.77778],
          223: [0, 0.69444, 0, 0, 0.5],
          230: [0, 0.43056, 0, 0, 0.72222],
          247: [0.08333, 0.58333, 0, 0, 0.77778],
          248: [0.09722, 0.52778, 0, 0, 0.5],
          305: [0, 0.43056, 0, 0, 0.27778],
          338: [0, 0.68333, 0, 0, 1.01389],
          339: [0, 0.43056, 0, 0, 0.77778],
          567: [0.19444, 0.43056, 0, 0, 0.30556],
          710: [0, 0.69444, 0, 0, 0.5],
          711: [0, 0.62847, 0, 0, 0.5],
          713: [0, 0.56778, 0, 0, 0.5],
          714: [0, 0.69444, 0, 0, 0.5],
          715: [0, 0.69444, 0, 0, 0.5],
          728: [0, 0.69444, 0, 0, 0.5],
          729: [0, 0.66786, 0, 0, 0.27778],
          730: [0, 0.69444, 0, 0, 0.75],
          732: [0, 0.66786, 0, 0, 0.5],
          733: [0, 0.69444, 0, 0, 0.5],
          915: [0, 0.68333, 0, 0, 0.625],
          916: [0, 0.68333, 0, 0, 0.83334],
          920: [0, 0.68333, 0, 0, 0.77778],
          923: [0, 0.68333, 0, 0, 0.69445],
          926: [0, 0.68333, 0, 0, 0.66667],
          928: [0, 0.68333, 0, 0, 0.75],
          931: [0, 0.68333, 0, 0, 0.72222],
          933: [0, 0.68333, 0, 0, 0.77778],
          934: [0, 0.68333, 0, 0, 0.72222],
          936: [0, 0.68333, 0, 0, 0.77778],
          937: [0, 0.68333, 0, 0, 0.72222],
          8211: [0, 0.43056, 0.02778, 0, 0.5],
          8212: [0, 0.43056, 0.02778, 0, 1],
          8216: [0, 0.69444, 0, 0, 0.27778],
          8217: [0, 0.69444, 0, 0, 0.27778],
          8220: [0, 0.69444, 0, 0, 0.5],
          8221: [0, 0.69444, 0, 0, 0.5],
          8224: [0.19444, 0.69444, 0, 0, 0.44445],
          8225: [0.19444, 0.69444, 0, 0, 0.44445],
          8230: [0, 0.123, 0, 0, 1.172],
          8242: [0, 0.55556, 0, 0, 0.275],
          8407: [0, 0.71444, 0.15382, 0, 0.5],
          8463: [0, 0.68889, 0, 0, 0.54028],
          8465: [0, 0.69444, 0, 0, 0.72222],
          8467: [0, 0.69444, 0, 0.11111, 0.41667],
          8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
          8476: [0, 0.69444, 0, 0, 0.72222],
          8501: [0, 0.69444, 0, 0, 0.61111],
          8592: [-0.13313, 0.36687, 0, 0, 1],
          8593: [0.19444, 0.69444, 0, 0, 0.5],
          8594: [-0.13313, 0.36687, 0, 0, 1],
          8595: [0.19444, 0.69444, 0, 0, 0.5],
          8596: [-0.13313, 0.36687, 0, 0, 1],
          8597: [0.25, 0.75, 0, 0, 0.5],
          8598: [0.19444, 0.69444, 0, 0, 1],
          8599: [0.19444, 0.69444, 0, 0, 1],
          8600: [0.19444, 0.69444, 0, 0, 1],
          8601: [0.19444, 0.69444, 0, 0, 1],
          8614: [0.011, 0.511, 0, 0, 1],
          8617: [0.011, 0.511, 0, 0, 1.126],
          8618: [0.011, 0.511, 0, 0, 1.126],
          8636: [-0.13313, 0.36687, 0, 0, 1],
          8637: [-0.13313, 0.36687, 0, 0, 1],
          8640: [-0.13313, 0.36687, 0, 0, 1],
          8641: [-0.13313, 0.36687, 0, 0, 1],
          8652: [0.011, 0.671, 0, 0, 1],
          8656: [-0.13313, 0.36687, 0, 0, 1],
          8657: [0.19444, 0.69444, 0, 0, 0.61111],
          8658: [-0.13313, 0.36687, 0, 0, 1],
          8659: [0.19444, 0.69444, 0, 0, 0.61111],
          8660: [-0.13313, 0.36687, 0, 0, 1],
          8661: [0.25, 0.75, 0, 0, 0.61111],
          8704: [0, 0.69444, 0, 0, 0.55556],
          8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
          8707: [0, 0.69444, 0, 0, 0.55556],
          8709: [0.05556, 0.75, 0, 0, 0.5],
          8711: [0, 0.68333, 0, 0, 0.83334],
          8712: [0.0391, 0.5391, 0, 0, 0.66667],
          8715: [0.0391, 0.5391, 0, 0, 0.66667],
          8722: [0.08333, 0.58333, 0, 0, 0.77778],
          8723: [0.08333, 0.58333, 0, 0, 0.77778],
          8725: [0.25, 0.75, 0, 0, 0.5],
          8726: [0.25, 0.75, 0, 0, 0.5],
          8727: [-0.03472, 0.46528, 0, 0, 0.5],
          8728: [-0.05555, 0.44445, 0, 0, 0.5],
          8729: [-0.05555, 0.44445, 0, 0, 0.5],
          8730: [0.2, 0.8, 0, 0, 0.83334],
          8733: [0, 0.43056, 0, 0, 0.77778],
          8734: [0, 0.43056, 0, 0, 1],
          8736: [0, 0.69224, 0, 0, 0.72222],
          8739: [0.25, 0.75, 0, 0, 0.27778],
          8741: [0.25, 0.75, 0, 0, 0.5],
          8743: [0, 0.55556, 0, 0, 0.66667],
          8744: [0, 0.55556, 0, 0, 0.66667],
          8745: [0, 0.55556, 0, 0, 0.66667],
          8746: [0, 0.55556, 0, 0, 0.66667],
          8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
          8764: [-0.13313, 0.36687, 0, 0, 0.77778],
          8768: [0.19444, 0.69444, 0, 0, 0.27778],
          8771: [-0.03625, 0.46375, 0, 0, 0.77778],
          8773: [-0.022, 0.589, 0, 0, 0.778],
          8776: [-0.01688, 0.48312, 0, 0, 0.77778],
          8781: [-0.03625, 0.46375, 0, 0, 0.77778],
          8784: [-0.133, 0.673, 0, 0, 0.778],
          8801: [-0.03625, 0.46375, 0, 0, 0.77778],
          8804: [0.13597, 0.63597, 0, 0, 0.77778],
          8805: [0.13597, 0.63597, 0, 0, 0.77778],
          8810: [0.0391, 0.5391, 0, 0, 1],
          8811: [0.0391, 0.5391, 0, 0, 1],
          8826: [0.0391, 0.5391, 0, 0, 0.77778],
          8827: [0.0391, 0.5391, 0, 0, 0.77778],
          8834: [0.0391, 0.5391, 0, 0, 0.77778],
          8835: [0.0391, 0.5391, 0, 0, 0.77778],
          8838: [0.13597, 0.63597, 0, 0, 0.77778],
          8839: [0.13597, 0.63597, 0, 0, 0.77778],
          8846: [0, 0.55556, 0, 0, 0.66667],
          8849: [0.13597, 0.63597, 0, 0, 0.77778],
          8850: [0.13597, 0.63597, 0, 0, 0.77778],
          8851: [0, 0.55556, 0, 0, 0.66667],
          8852: [0, 0.55556, 0, 0, 0.66667],
          8853: [0.08333, 0.58333, 0, 0, 0.77778],
          8854: [0.08333, 0.58333, 0, 0, 0.77778],
          8855: [0.08333, 0.58333, 0, 0, 0.77778],
          8856: [0.08333, 0.58333, 0, 0, 0.77778],
          8857: [0.08333, 0.58333, 0, 0, 0.77778],
          8866: [0, 0.69444, 0, 0, 0.61111],
          8867: [0, 0.69444, 0, 0, 0.61111],
          8868: [0, 0.69444, 0, 0, 0.77778],
          8869: [0, 0.69444, 0, 0, 0.77778],
          8872: [0.249, 0.75, 0, 0, 0.867],
          8900: [-0.05555, 0.44445, 0, 0, 0.5],
          8901: [-0.05555, 0.44445, 0, 0, 0.27778],
          8902: [-0.03472, 0.46528, 0, 0, 0.5],
          8904: [0.005, 0.505, 0, 0, 0.9],
          8942: [0.03, 0.903, 0, 0, 0.278],
          8943: [-0.19, 0.313, 0, 0, 1.172],
          8945: [-0.1, 0.823, 0, 0, 1.282],
          8968: [0.25, 0.75, 0, 0, 0.44445],
          8969: [0.25, 0.75, 0, 0, 0.44445],
          8970: [0.25, 0.75, 0, 0, 0.44445],
          8971: [0.25, 0.75, 0, 0, 0.44445],
          8994: [-0.14236, 0.35764, 0, 0, 1],
          8995: [-0.14236, 0.35764, 0, 0, 1],
          9136: [0.244, 0.744, 0, 0, 0.412],
          9137: [0.244, 0.745, 0, 0, 0.412],
          9651: [0.19444, 0.69444, 0, 0, 0.88889],
          9657: [-0.03472, 0.46528, 0, 0, 0.5],
          9661: [0.19444, 0.69444, 0, 0, 0.88889],
          9667: [-0.03472, 0.46528, 0, 0, 0.5],
          9711: [0.19444, 0.69444, 0, 0, 1],
          9824: [0.12963, 0.69444, 0, 0, 0.77778],
          9825: [0.12963, 0.69444, 0, 0, 0.77778],
          9826: [0.12963, 0.69444, 0, 0, 0.77778],
          9827: [0.12963, 0.69444, 0, 0, 0.77778],
          9837: [0, 0.75, 0, 0, 0.38889],
          9838: [0.19444, 0.69444, 0, 0, 0.38889],
          9839: [0.19444, 0.69444, 0, 0, 0.38889],
          10216: [0.25, 0.75, 0, 0, 0.38889],
          10217: [0.25, 0.75, 0, 0, 0.38889],
          10222: [0.244, 0.744, 0, 0, 0.412],
          10223: [0.244, 0.745, 0, 0, 0.412],
          10229: [0.011, 0.511, 0, 0, 1.609],
          10230: [0.011, 0.511, 0, 0, 1.638],
          10231: [0.011, 0.511, 0, 0, 1.859],
          10232: [0.024, 0.525, 0, 0, 1.609],
          10233: [0.024, 0.525, 0, 0, 1.638],
          10234: [0.024, 0.525, 0, 0, 1.858],
          10236: [0.011, 0.511, 0, 0, 1.638],
          10815: [0, 0.68333, 0, 0, 0.75],
          10927: [0.13597, 0.63597, 0, 0, 0.77778],
          10928: [0.13597, 0.63597, 0, 0, 0.77778],
          57376: [0.19444, 0.69444, 0, 0, 0],
        },
        "Math-BoldItalic": {
          32: [0, 0, 0, 0, 0.25],
          48: [0, 0.44444, 0, 0, 0.575],
          49: [0, 0.44444, 0, 0, 0.575],
          50: [0, 0.44444, 0, 0, 0.575],
          51: [0.19444, 0.44444, 0, 0, 0.575],
          52: [0.19444, 0.44444, 0, 0, 0.575],
          53: [0.19444, 0.44444, 0, 0, 0.575],
          54: [0, 0.64444, 0, 0, 0.575],
          55: [0.19444, 0.44444, 0, 0, 0.575],
          56: [0, 0.64444, 0, 0, 0.575],
          57: [0.19444, 0.44444, 0, 0, 0.575],
          65: [0, 0.68611, 0, 0, 0.86944],
          66: [0, 0.68611, 0.04835, 0, 0.8664],
          67: [0, 0.68611, 0.06979, 0, 0.81694],
          68: [0, 0.68611, 0.03194, 0, 0.93812],
          69: [0, 0.68611, 0.05451, 0, 0.81007],
          70: [0, 0.68611, 0.15972, 0, 0.68889],
          71: [0, 0.68611, 0, 0, 0.88673],
          72: [0, 0.68611, 0.08229, 0, 0.98229],
          73: [0, 0.68611, 0.07778, 0, 0.51111],
          74: [0, 0.68611, 0.10069, 0, 0.63125],
          75: [0, 0.68611, 0.06979, 0, 0.97118],
          76: [0, 0.68611, 0, 0, 0.75555],
          77: [0, 0.68611, 0.11424, 0, 1.14201],
          78: [0, 0.68611, 0.11424, 0, 0.95034],
          79: [0, 0.68611, 0.03194, 0, 0.83666],
          80: [0, 0.68611, 0.15972, 0, 0.72309],
          81: [0.19444, 0.68611, 0, 0, 0.86861],
          82: [0, 0.68611, 0.00421, 0, 0.87235],
          83: [0, 0.68611, 0.05382, 0, 0.69271],
          84: [0, 0.68611, 0.15972, 0, 0.63663],
          85: [0, 0.68611, 0.11424, 0, 0.80027],
          86: [0, 0.68611, 0.25555, 0, 0.67778],
          87: [0, 0.68611, 0.15972, 0, 1.09305],
          88: [0, 0.68611, 0.07778, 0, 0.94722],
          89: [0, 0.68611, 0.25555, 0, 0.67458],
          90: [0, 0.68611, 0.06979, 0, 0.77257],
          97: [0, 0.44444, 0, 0, 0.63287],
          98: [0, 0.69444, 0, 0, 0.52083],
          99: [0, 0.44444, 0, 0, 0.51342],
          100: [0, 0.69444, 0, 0, 0.60972],
          101: [0, 0.44444, 0, 0, 0.55361],
          102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
          103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
          104: [0, 0.69444, 0, 0, 0.66759],
          105: [0, 0.69326, 0, 0, 0.4048],
          106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
          107: [0, 0.69444, 0.01852, 0, 0.6037],
          108: [0, 0.69444, 0.0088, 0, 0.34815],
          109: [0, 0.44444, 0, 0, 1.0324],
          110: [0, 0.44444, 0, 0, 0.71296],
          111: [0, 0.44444, 0, 0, 0.58472],
          112: [0.19444, 0.44444, 0, 0, 0.60092],
          113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
          114: [0, 0.44444, 0.03194, 0, 0.5287],
          115: [0, 0.44444, 0, 0, 0.53125],
          116: [0, 0.63492, 0, 0, 0.41528],
          117: [0, 0.44444, 0, 0, 0.68102],
          118: [0, 0.44444, 0.03704, 0, 0.56666],
          119: [0, 0.44444, 0.02778, 0, 0.83148],
          120: [0, 0.44444, 0, 0, 0.65903],
          121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
          122: [0, 0.44444, 0.04213, 0, 0.55509],
          160: [0, 0, 0, 0, 0.25],
          915: [0, 0.68611, 0.15972, 0, 0.65694],
          916: [0, 0.68611, 0, 0, 0.95833],
          920: [0, 0.68611, 0.03194, 0, 0.86722],
          923: [0, 0.68611, 0, 0, 0.80555],
          926: [0, 0.68611, 0.07458, 0, 0.84125],
          928: [0, 0.68611, 0.08229, 0, 0.98229],
          931: [0, 0.68611, 0.05451, 0, 0.88507],
          933: [0, 0.68611, 0.15972, 0, 0.67083],
          934: [0, 0.68611, 0, 0, 0.76666],
          936: [0, 0.68611, 0.11653, 0, 0.71402],
          937: [0, 0.68611, 0.04835, 0, 0.8789],
          945: [0, 0.44444, 0, 0, 0.76064],
          946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
          947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
          948: [0, 0.69444, 0.03819, 0, 0.52222],
          949: [0, 0.44444, 0, 0, 0.52882],
          950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
          951: [0.19444, 0.44444, 0.03704, 0, 0.6],
          952: [0, 0.69444, 0.03194, 0, 0.5618],
          953: [0, 0.44444, 0, 0, 0.41204],
          954: [0, 0.44444, 0, 0, 0.66759],
          955: [0, 0.69444, 0, 0, 0.67083],
          956: [0.19444, 0.44444, 0, 0, 0.70787],
          957: [0, 0.44444, 0.06898, 0, 0.57685],
          958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
          959: [0, 0.44444, 0, 0, 0.58472],
          960: [0, 0.44444, 0.03704, 0, 0.68241],
          961: [0.19444, 0.44444, 0, 0, 0.6118],
          962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
          963: [0, 0.44444, 0.03704, 0, 0.68588],
          964: [0, 0.44444, 0.13472, 0, 0.52083],
          965: [0, 0.44444, 0.03704, 0, 0.63055],
          966: [0.19444, 0.44444, 0, 0, 0.74722],
          967: [0.19444, 0.44444, 0, 0, 0.71805],
          968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
          969: [0, 0.44444, 0.03704, 0, 0.71782],
          977: [0, 0.69444, 0, 0, 0.69155],
          981: [0.19444, 0.69444, 0, 0, 0.7125],
          982: [0, 0.44444, 0.03194, 0, 0.975],
          1009: [0.19444, 0.44444, 0, 0, 0.6118],
          1013: [0, 0.44444, 0, 0, 0.48333],
          57649: [0, 0.44444, 0, 0, 0.39352],
          57911: [0.19444, 0.44444, 0, 0, 0.43889],
        },
        "Math-Italic": {
          32: [0, 0, 0, 0, 0.25],
          48: [0, 0.43056, 0, 0, 0.5],
          49: [0, 0.43056, 0, 0, 0.5],
          50: [0, 0.43056, 0, 0, 0.5],
          51: [0.19444, 0.43056, 0, 0, 0.5],
          52: [0.19444, 0.43056, 0, 0, 0.5],
          53: [0.19444, 0.43056, 0, 0, 0.5],
          54: [0, 0.64444, 0, 0, 0.5],
          55: [0.19444, 0.43056, 0, 0, 0.5],
          56: [0, 0.64444, 0, 0, 0.5],
          57: [0.19444, 0.43056, 0, 0, 0.5],
          65: [0, 0.68333, 0, 0.13889, 0.75],
          66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
          67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
          68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
          69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
          70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
          71: [0, 0.68333, 0, 0.08334, 0.78625],
          72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
          73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
          74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
          75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
          76: [0, 0.68333, 0, 0.02778, 0.68056],
          77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
          78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
          79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
          80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
          81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
          82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
          83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
          84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
          85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
          86: [0, 0.68333, 0.22222, 0, 0.58333],
          87: [0, 0.68333, 0.13889, 0, 0.94445],
          88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
          89: [0, 0.68333, 0.22222, 0, 0.58056],
          90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
          97: [0, 0.43056, 0, 0, 0.52859],
          98: [0, 0.69444, 0, 0, 0.42917],
          99: [0, 0.43056, 0, 0.05556, 0.43276],
          100: [0, 0.69444, 0, 0.16667, 0.52049],
          101: [0, 0.43056, 0, 0.05556, 0.46563],
          102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
          103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
          104: [0, 0.69444, 0, 0, 0.57616],
          105: [0, 0.65952, 0, 0, 0.34451],
          106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
          107: [0, 0.69444, 0.03148, 0, 0.5206],
          108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
          109: [0, 0.43056, 0, 0, 0.87801],
          110: [0, 0.43056, 0, 0, 0.60023],
          111: [0, 0.43056, 0, 0.05556, 0.48472],
          112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
          113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
          114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
          115: [0, 0.43056, 0, 0.05556, 0.46875],
          116: [0, 0.61508, 0, 0.08334, 0.36111],
          117: [0, 0.43056, 0, 0.02778, 0.57246],
          118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
          119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
          120: [0, 0.43056, 0, 0.02778, 0.57153],
          121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
          122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
          160: [0, 0, 0, 0, 0.25],
          915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
          916: [0, 0.68333, 0, 0.16667, 0.83334],
          920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
          923: [0, 0.68333, 0, 0.16667, 0.69445],
          926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
          928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
          931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
          933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
          934: [0, 0.68333, 0, 0.08334, 0.66667],
          936: [0, 0.68333, 0.11, 0.05556, 0.61222],
          937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
          945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
          946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
          947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
          948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
          949: [0, 0.43056, 0, 0.08334, 0.46632],
          950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
          951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
          952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
          953: [0, 0.43056, 0, 0.05556, 0.35394],
          954: [0, 0.43056, 0, 0, 0.57616],
          955: [0, 0.69444, 0, 0, 0.58334],
          956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
          957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
          958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
          959: [0, 0.43056, 0, 0.05556, 0.48472],
          960: [0, 0.43056, 0.03588, 0, 0.57003],
          961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
          962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
          963: [0, 0.43056, 0.03588, 0, 0.57141],
          964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
          965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
          966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
          967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
          968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
          969: [0, 0.43056, 0.03588, 0, 0.62245],
          977: [0, 0.69444, 0, 0.08334, 0.59144],
          981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
          982: [0, 0.43056, 0.02778, 0, 0.82813],
          1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
          1013: [0, 0.43056, 0, 0.05556, 0.4059],
          57649: [0, 0.43056, 0, 0.02778, 0.32246],
          57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
        },
        "SansSerif-Bold": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.36667],
          34: [0, 0.69444, 0, 0, 0.55834],
          35: [0.19444, 0.69444, 0, 0, 0.91667],
          36: [0.05556, 0.75, 0, 0, 0.55],
          37: [0.05556, 0.75, 0, 0, 1.02912],
          38: [0, 0.69444, 0, 0, 0.83056],
          39: [0, 0.69444, 0, 0, 0.30556],
          40: [0.25, 0.75, 0, 0, 0.42778],
          41: [0.25, 0.75, 0, 0, 0.42778],
          42: [0, 0.75, 0, 0, 0.55],
          43: [0.11667, 0.61667, 0, 0, 0.85556],
          44: [0.10556, 0.13056, 0, 0, 0.30556],
          45: [0, 0.45833, 0, 0, 0.36667],
          46: [0, 0.13056, 0, 0, 0.30556],
          47: [0.25, 0.75, 0, 0, 0.55],
          48: [0, 0.69444, 0, 0, 0.55],
          49: [0, 0.69444, 0, 0, 0.55],
          50: [0, 0.69444, 0, 0, 0.55],
          51: [0, 0.69444, 0, 0, 0.55],
          52: [0, 0.69444, 0, 0, 0.55],
          53: [0, 0.69444, 0, 0, 0.55],
          54: [0, 0.69444, 0, 0, 0.55],
          55: [0, 0.69444, 0, 0, 0.55],
          56: [0, 0.69444, 0, 0, 0.55],
          57: [0, 0.69444, 0, 0, 0.55],
          58: [0, 0.45833, 0, 0, 0.30556],
          59: [0.10556, 0.45833, 0, 0, 0.30556],
          61: [-0.09375, 0.40625, 0, 0, 0.85556],
          63: [0, 0.69444, 0, 0, 0.51945],
          64: [0, 0.69444, 0, 0, 0.73334],
          65: [0, 0.69444, 0, 0, 0.73334],
          66: [0, 0.69444, 0, 0, 0.73334],
          67: [0, 0.69444, 0, 0, 0.70278],
          68: [0, 0.69444, 0, 0, 0.79445],
          69: [0, 0.69444, 0, 0, 0.64167],
          70: [0, 0.69444, 0, 0, 0.61111],
          71: [0, 0.69444, 0, 0, 0.73334],
          72: [0, 0.69444, 0, 0, 0.79445],
          73: [0, 0.69444, 0, 0, 0.33056],
          74: [0, 0.69444, 0, 0, 0.51945],
          75: [0, 0.69444, 0, 0, 0.76389],
          76: [0, 0.69444, 0, 0, 0.58056],
          77: [0, 0.69444, 0, 0, 0.97778],
          78: [0, 0.69444, 0, 0, 0.79445],
          79: [0, 0.69444, 0, 0, 0.79445],
          80: [0, 0.69444, 0, 0, 0.70278],
          81: [0.10556, 0.69444, 0, 0, 0.79445],
          82: [0, 0.69444, 0, 0, 0.70278],
          83: [0, 0.69444, 0, 0, 0.61111],
          84: [0, 0.69444, 0, 0, 0.73334],
          85: [0, 0.69444, 0, 0, 0.76389],
          86: [0, 0.69444, 0.01528, 0, 0.73334],
          87: [0, 0.69444, 0.01528, 0, 1.03889],
          88: [0, 0.69444, 0, 0, 0.73334],
          89: [0, 0.69444, 0.0275, 0, 0.73334],
          90: [0, 0.69444, 0, 0, 0.67223],
          91: [0.25, 0.75, 0, 0, 0.34306],
          93: [0.25, 0.75, 0, 0, 0.34306],
          94: [0, 0.69444, 0, 0, 0.55],
          95: [0.35, 0.10833, 0.03056, 0, 0.55],
          97: [0, 0.45833, 0, 0, 0.525],
          98: [0, 0.69444, 0, 0, 0.56111],
          99: [0, 0.45833, 0, 0, 0.48889],
          100: [0, 0.69444, 0, 0, 0.56111],
          101: [0, 0.45833, 0, 0, 0.51111],
          102: [0, 0.69444, 0.07639, 0, 0.33611],
          103: [0.19444, 0.45833, 0.01528, 0, 0.55],
          104: [0, 0.69444, 0, 0, 0.56111],
          105: [0, 0.69444, 0, 0, 0.25556],
          106: [0.19444, 0.69444, 0, 0, 0.28611],
          107: [0, 0.69444, 0, 0, 0.53056],
          108: [0, 0.69444, 0, 0, 0.25556],
          109: [0, 0.45833, 0, 0, 0.86667],
          110: [0, 0.45833, 0, 0, 0.56111],
          111: [0, 0.45833, 0, 0, 0.55],
          112: [0.19444, 0.45833, 0, 0, 0.56111],
          113: [0.19444, 0.45833, 0, 0, 0.56111],
          114: [0, 0.45833, 0.01528, 0, 0.37222],
          115: [0, 0.45833, 0, 0, 0.42167],
          116: [0, 0.58929, 0, 0, 0.40417],
          117: [0, 0.45833, 0, 0, 0.56111],
          118: [0, 0.45833, 0.01528, 0, 0.5],
          119: [0, 0.45833, 0.01528, 0, 0.74445],
          120: [0, 0.45833, 0, 0, 0.5],
          121: [0.19444, 0.45833, 0.01528, 0, 0.5],
          122: [0, 0.45833, 0, 0, 0.47639],
          126: [0.35, 0.34444, 0, 0, 0.55],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.69444, 0, 0, 0.55],
          176: [0, 0.69444, 0, 0, 0.73334],
          180: [0, 0.69444, 0, 0, 0.55],
          184: [0.17014, 0, 0, 0, 0.48889],
          305: [0, 0.45833, 0, 0, 0.25556],
          567: [0.19444, 0.45833, 0, 0, 0.28611],
          710: [0, 0.69444, 0, 0, 0.55],
          711: [0, 0.63542, 0, 0, 0.55],
          713: [0, 0.63778, 0, 0, 0.55],
          728: [0, 0.69444, 0, 0, 0.55],
          729: [0, 0.69444, 0, 0, 0.30556],
          730: [0, 0.69444, 0, 0, 0.73334],
          732: [0, 0.69444, 0, 0, 0.55],
          733: [0, 0.69444, 0, 0, 0.55],
          915: [0, 0.69444, 0, 0, 0.58056],
          916: [0, 0.69444, 0, 0, 0.91667],
          920: [0, 0.69444, 0, 0, 0.85556],
          923: [0, 0.69444, 0, 0, 0.67223],
          926: [0, 0.69444, 0, 0, 0.73334],
          928: [0, 0.69444, 0, 0, 0.79445],
          931: [0, 0.69444, 0, 0, 0.79445],
          933: [0, 0.69444, 0, 0, 0.85556],
          934: [0, 0.69444, 0, 0, 0.79445],
          936: [0, 0.69444, 0, 0, 0.85556],
          937: [0, 0.69444, 0, 0, 0.79445],
          8211: [0, 0.45833, 0.03056, 0, 0.55],
          8212: [0, 0.45833, 0.03056, 0, 1.10001],
          8216: [0, 0.69444, 0, 0, 0.30556],
          8217: [0, 0.69444, 0, 0, 0.30556],
          8220: [0, 0.69444, 0, 0, 0.55834],
          8221: [0, 0.69444, 0, 0, 0.55834],
        },
        "SansSerif-Italic": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0.05733, 0, 0.31945],
          34: [0, 0.69444, 0.00316, 0, 0.5],
          35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
          36: [0.05556, 0.75, 0.11156, 0, 0.5],
          37: [0.05556, 0.75, 0.03126, 0, 0.83334],
          38: [0, 0.69444, 0.03058, 0, 0.75834],
          39: [0, 0.69444, 0.07816, 0, 0.27778],
          40: [0.25, 0.75, 0.13164, 0, 0.38889],
          41: [0.25, 0.75, 0.02536, 0, 0.38889],
          42: [0, 0.75, 0.11775, 0, 0.5],
          43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
          44: [0.125, 0.08333, 0, 0, 0.27778],
          45: [0, 0.44444, 0.01946, 0, 0.33333],
          46: [0, 0.08333, 0, 0, 0.27778],
          47: [0.25, 0.75, 0.13164, 0, 0.5],
          48: [0, 0.65556, 0.11156, 0, 0.5],
          49: [0, 0.65556, 0.11156, 0, 0.5],
          50: [0, 0.65556, 0.11156, 0, 0.5],
          51: [0, 0.65556, 0.11156, 0, 0.5],
          52: [0, 0.65556, 0.11156, 0, 0.5],
          53: [0, 0.65556, 0.11156, 0, 0.5],
          54: [0, 0.65556, 0.11156, 0, 0.5],
          55: [0, 0.65556, 0.11156, 0, 0.5],
          56: [0, 0.65556, 0.11156, 0, 0.5],
          57: [0, 0.65556, 0.11156, 0, 0.5],
          58: [0, 0.44444, 0.02502, 0, 0.27778],
          59: [0.125, 0.44444, 0.02502, 0, 0.27778],
          61: [-0.13, 0.37, 0.05087, 0, 0.77778],
          63: [0, 0.69444, 0.11809, 0, 0.47222],
          64: [0, 0.69444, 0.07555, 0, 0.66667],
          65: [0, 0.69444, 0, 0, 0.66667],
          66: [0, 0.69444, 0.08293, 0, 0.66667],
          67: [0, 0.69444, 0.11983, 0, 0.63889],
          68: [0, 0.69444, 0.07555, 0, 0.72223],
          69: [0, 0.69444, 0.11983, 0, 0.59722],
          70: [0, 0.69444, 0.13372, 0, 0.56945],
          71: [0, 0.69444, 0.11983, 0, 0.66667],
          72: [0, 0.69444, 0.08094, 0, 0.70834],
          73: [0, 0.69444, 0.13372, 0, 0.27778],
          74: [0, 0.69444, 0.08094, 0, 0.47222],
          75: [0, 0.69444, 0.11983, 0, 0.69445],
          76: [0, 0.69444, 0, 0, 0.54167],
          77: [0, 0.69444, 0.08094, 0, 0.875],
          78: [0, 0.69444, 0.08094, 0, 0.70834],
          79: [0, 0.69444, 0.07555, 0, 0.73611],
          80: [0, 0.69444, 0.08293, 0, 0.63889],
          81: [0.125, 0.69444, 0.07555, 0, 0.73611],
          82: [0, 0.69444, 0.08293, 0, 0.64584],
          83: [0, 0.69444, 0.09205, 0, 0.55556],
          84: [0, 0.69444, 0.13372, 0, 0.68056],
          85: [0, 0.69444, 0.08094, 0, 0.6875],
          86: [0, 0.69444, 0.1615, 0, 0.66667],
          87: [0, 0.69444, 0.1615, 0, 0.94445],
          88: [0, 0.69444, 0.13372, 0, 0.66667],
          89: [0, 0.69444, 0.17261, 0, 0.66667],
          90: [0, 0.69444, 0.11983, 0, 0.61111],
          91: [0.25, 0.75, 0.15942, 0, 0.28889],
          93: [0.25, 0.75, 0.08719, 0, 0.28889],
          94: [0, 0.69444, 0.0799, 0, 0.5],
          95: [0.35, 0.09444, 0.08616, 0, 0.5],
          97: [0, 0.44444, 0.00981, 0, 0.48056],
          98: [0, 0.69444, 0.03057, 0, 0.51667],
          99: [0, 0.44444, 0.08336, 0, 0.44445],
          100: [0, 0.69444, 0.09483, 0, 0.51667],
          101: [0, 0.44444, 0.06778, 0, 0.44445],
          102: [0, 0.69444, 0.21705, 0, 0.30556],
          103: [0.19444, 0.44444, 0.10836, 0, 0.5],
          104: [0, 0.69444, 0.01778, 0, 0.51667],
          105: [0, 0.67937, 0.09718, 0, 0.23889],
          106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
          107: [0, 0.69444, 0.08336, 0, 0.48889],
          108: [0, 0.69444, 0.09483, 0, 0.23889],
          109: [0, 0.44444, 0.01778, 0, 0.79445],
          110: [0, 0.44444, 0.01778, 0, 0.51667],
          111: [0, 0.44444, 0.06613, 0, 0.5],
          112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
          113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
          114: [0, 0.44444, 0.10836, 0, 0.34167],
          115: [0, 0.44444, 0.0778, 0, 0.38333],
          116: [0, 0.57143, 0.07225, 0, 0.36111],
          117: [0, 0.44444, 0.04169, 0, 0.51667],
          118: [0, 0.44444, 0.10836, 0, 0.46111],
          119: [0, 0.44444, 0.10836, 0, 0.68334],
          120: [0, 0.44444, 0.09169, 0, 0.46111],
          121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
          122: [0, 0.44444, 0.08752, 0, 0.43472],
          126: [0.35, 0.32659, 0.08826, 0, 0.5],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.67937, 0.06385, 0, 0.5],
          176: [0, 0.69444, 0, 0, 0.73752],
          184: [0.17014, 0, 0, 0, 0.44445],
          305: [0, 0.44444, 0.04169, 0, 0.23889],
          567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
          710: [0, 0.69444, 0.0799, 0, 0.5],
          711: [0, 0.63194, 0.08432, 0, 0.5],
          713: [0, 0.60889, 0.08776, 0, 0.5],
          714: [0, 0.69444, 0.09205, 0, 0.5],
          715: [0, 0.69444, 0, 0, 0.5],
          728: [0, 0.69444, 0.09483, 0, 0.5],
          729: [0, 0.67937, 0.07774, 0, 0.27778],
          730: [0, 0.69444, 0, 0, 0.73752],
          732: [0, 0.67659, 0.08826, 0, 0.5],
          733: [0, 0.69444, 0.09205, 0, 0.5],
          915: [0, 0.69444, 0.13372, 0, 0.54167],
          916: [0, 0.69444, 0, 0, 0.83334],
          920: [0, 0.69444, 0.07555, 0, 0.77778],
          923: [0, 0.69444, 0, 0, 0.61111],
          926: [0, 0.69444, 0.12816, 0, 0.66667],
          928: [0, 0.69444, 0.08094, 0, 0.70834],
          931: [0, 0.69444, 0.11983, 0, 0.72222],
          933: [0, 0.69444, 0.09031, 0, 0.77778],
          934: [0, 0.69444, 0.04603, 0, 0.72222],
          936: [0, 0.69444, 0.09031, 0, 0.77778],
          937: [0, 0.69444, 0.08293, 0, 0.72222],
          8211: [0, 0.44444, 0.08616, 0, 0.5],
          8212: [0, 0.44444, 0.08616, 0, 1],
          8216: [0, 0.69444, 0.07816, 0, 0.27778],
          8217: [0, 0.69444, 0.07816, 0, 0.27778],
          8220: [0, 0.69444, 0.14205, 0, 0.5],
          8221: [0, 0.69444, 0.00316, 0, 0.5],
        },
        "SansSerif-Regular": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.31945],
          34: [0, 0.69444, 0, 0, 0.5],
          35: [0.19444, 0.69444, 0, 0, 0.83334],
          36: [0.05556, 0.75, 0, 0, 0.5],
          37: [0.05556, 0.75, 0, 0, 0.83334],
          38: [0, 0.69444, 0, 0, 0.75834],
          39: [0, 0.69444, 0, 0, 0.27778],
          40: [0.25, 0.75, 0, 0, 0.38889],
          41: [0.25, 0.75, 0, 0, 0.38889],
          42: [0, 0.75, 0, 0, 0.5],
          43: [0.08333, 0.58333, 0, 0, 0.77778],
          44: [0.125, 0.08333, 0, 0, 0.27778],
          45: [0, 0.44444, 0, 0, 0.33333],
          46: [0, 0.08333, 0, 0, 0.27778],
          47: [0.25, 0.75, 0, 0, 0.5],
          48: [0, 0.65556, 0, 0, 0.5],
          49: [0, 0.65556, 0, 0, 0.5],
          50: [0, 0.65556, 0, 0, 0.5],
          51: [0, 0.65556, 0, 0, 0.5],
          52: [0, 0.65556, 0, 0, 0.5],
          53: [0, 0.65556, 0, 0, 0.5],
          54: [0, 0.65556, 0, 0, 0.5],
          55: [0, 0.65556, 0, 0, 0.5],
          56: [0, 0.65556, 0, 0, 0.5],
          57: [0, 0.65556, 0, 0, 0.5],
          58: [0, 0.44444, 0, 0, 0.27778],
          59: [0.125, 0.44444, 0, 0, 0.27778],
          61: [-0.13, 0.37, 0, 0, 0.77778],
          63: [0, 0.69444, 0, 0, 0.47222],
          64: [0, 0.69444, 0, 0, 0.66667],
          65: [0, 0.69444, 0, 0, 0.66667],
          66: [0, 0.69444, 0, 0, 0.66667],
          67: [0, 0.69444, 0, 0, 0.63889],
          68: [0, 0.69444, 0, 0, 0.72223],
          69: [0, 0.69444, 0, 0, 0.59722],
          70: [0, 0.69444, 0, 0, 0.56945],
          71: [0, 0.69444, 0, 0, 0.66667],
          72: [0, 0.69444, 0, 0, 0.70834],
          73: [0, 0.69444, 0, 0, 0.27778],
          74: [0, 0.69444, 0, 0, 0.47222],
          75: [0, 0.69444, 0, 0, 0.69445],
          76: [0, 0.69444, 0, 0, 0.54167],
          77: [0, 0.69444, 0, 0, 0.875],
          78: [0, 0.69444, 0, 0, 0.70834],
          79: [0, 0.69444, 0, 0, 0.73611],
          80: [0, 0.69444, 0, 0, 0.63889],
          81: [0.125, 0.69444, 0, 0, 0.73611],
          82: [0, 0.69444, 0, 0, 0.64584],
          83: [0, 0.69444, 0, 0, 0.55556],
          84: [0, 0.69444, 0, 0, 0.68056],
          85: [0, 0.69444, 0, 0, 0.6875],
          86: [0, 0.69444, 0.01389, 0, 0.66667],
          87: [0, 0.69444, 0.01389, 0, 0.94445],
          88: [0, 0.69444, 0, 0, 0.66667],
          89: [0, 0.69444, 0.025, 0, 0.66667],
          90: [0, 0.69444, 0, 0, 0.61111],
          91: [0.25, 0.75, 0, 0, 0.28889],
          93: [0.25, 0.75, 0, 0, 0.28889],
          94: [0, 0.69444, 0, 0, 0.5],
          95: [0.35, 0.09444, 0.02778, 0, 0.5],
          97: [0, 0.44444, 0, 0, 0.48056],
          98: [0, 0.69444, 0, 0, 0.51667],
          99: [0, 0.44444, 0, 0, 0.44445],
          100: [0, 0.69444, 0, 0, 0.51667],
          101: [0, 0.44444, 0, 0, 0.44445],
          102: [0, 0.69444, 0.06944, 0, 0.30556],
          103: [0.19444, 0.44444, 0.01389, 0, 0.5],
          104: [0, 0.69444, 0, 0, 0.51667],
          105: [0, 0.67937, 0, 0, 0.23889],
          106: [0.19444, 0.67937, 0, 0, 0.26667],
          107: [0, 0.69444, 0, 0, 0.48889],
          108: [0, 0.69444, 0, 0, 0.23889],
          109: [0, 0.44444, 0, 0, 0.79445],
          110: [0, 0.44444, 0, 0, 0.51667],
          111: [0, 0.44444, 0, 0, 0.5],
          112: [0.19444, 0.44444, 0, 0, 0.51667],
          113: [0.19444, 0.44444, 0, 0, 0.51667],
          114: [0, 0.44444, 0.01389, 0, 0.34167],
          115: [0, 0.44444, 0, 0, 0.38333],
          116: [0, 0.57143, 0, 0, 0.36111],
          117: [0, 0.44444, 0, 0, 0.51667],
          118: [0, 0.44444, 0.01389, 0, 0.46111],
          119: [0, 0.44444, 0.01389, 0, 0.68334],
          120: [0, 0.44444, 0, 0, 0.46111],
          121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
          122: [0, 0.44444, 0, 0, 0.43472],
          126: [0.35, 0.32659, 0, 0, 0.5],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.67937, 0, 0, 0.5],
          176: [0, 0.69444, 0, 0, 0.66667],
          184: [0.17014, 0, 0, 0, 0.44445],
          305: [0, 0.44444, 0, 0, 0.23889],
          567: [0.19444, 0.44444, 0, 0, 0.26667],
          710: [0, 0.69444, 0, 0, 0.5],
          711: [0, 0.63194, 0, 0, 0.5],
          713: [0, 0.60889, 0, 0, 0.5],
          714: [0, 0.69444, 0, 0, 0.5],
          715: [0, 0.69444, 0, 0, 0.5],
          728: [0, 0.69444, 0, 0, 0.5],
          729: [0, 0.67937, 0, 0, 0.27778],
          730: [0, 0.69444, 0, 0, 0.66667],
          732: [0, 0.67659, 0, 0, 0.5],
          733: [0, 0.69444, 0, 0, 0.5],
          915: [0, 0.69444, 0, 0, 0.54167],
          916: [0, 0.69444, 0, 0, 0.83334],
          920: [0, 0.69444, 0, 0, 0.77778],
          923: [0, 0.69444, 0, 0, 0.61111],
          926: [0, 0.69444, 0, 0, 0.66667],
          928: [0, 0.69444, 0, 0, 0.70834],
          931: [0, 0.69444, 0, 0, 0.72222],
          933: [0, 0.69444, 0, 0, 0.77778],
          934: [0, 0.69444, 0, 0, 0.72222],
          936: [0, 0.69444, 0, 0, 0.77778],
          937: [0, 0.69444, 0, 0, 0.72222],
          8211: [0, 0.44444, 0.02778, 0, 0.5],
          8212: [0, 0.44444, 0.02778, 0, 1],
          8216: [0, 0.69444, 0, 0, 0.27778],
          8217: [0, 0.69444, 0, 0, 0.27778],
          8220: [0, 0.69444, 0, 0, 0.5],
          8221: [0, 0.69444, 0, 0, 0.5],
        },
        "Script-Regular": {
          32: [0, 0, 0, 0, 0.25],
          65: [0, 0.7, 0.22925, 0, 0.80253],
          66: [0, 0.7, 0.04087, 0, 0.90757],
          67: [0, 0.7, 0.1689, 0, 0.66619],
          68: [0, 0.7, 0.09371, 0, 0.77443],
          69: [0, 0.7, 0.18583, 0, 0.56162],
          70: [0, 0.7, 0.13634, 0, 0.89544],
          71: [0, 0.7, 0.17322, 0, 0.60961],
          72: [0, 0.7, 0.29694, 0, 0.96919],
          73: [0, 0.7, 0.19189, 0, 0.80907],
          74: [0.27778, 0.7, 0.19189, 0, 1.05159],
          75: [0, 0.7, 0.31259, 0, 0.91364],
          76: [0, 0.7, 0.19189, 0, 0.87373],
          77: [0, 0.7, 0.15981, 0, 1.08031],
          78: [0, 0.7, 0.3525, 0, 0.9015],
          79: [0, 0.7, 0.08078, 0, 0.73787],
          80: [0, 0.7, 0.08078, 0, 1.01262],
          81: [0, 0.7, 0.03305, 0, 0.88282],
          82: [0, 0.7, 0.06259, 0, 0.85],
          83: [0, 0.7, 0.19189, 0, 0.86767],
          84: [0, 0.7, 0.29087, 0, 0.74697],
          85: [0, 0.7, 0.25815, 0, 0.79996],
          86: [0, 0.7, 0.27523, 0, 0.62204],
          87: [0, 0.7, 0.27523, 0, 0.80532],
          88: [0, 0.7, 0.26006, 0, 0.94445],
          89: [0, 0.7, 0.2939, 0, 0.70961],
          90: [0, 0.7, 0.24037, 0, 0.8212],
          160: [0, 0, 0, 0, 0.25],
        },
        "Size1-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [0.35001, 0.85, 0, 0, 0.45834],
          41: [0.35001, 0.85, 0, 0, 0.45834],
          47: [0.35001, 0.85, 0, 0, 0.57778],
          91: [0.35001, 0.85, 0, 0, 0.41667],
          92: [0.35001, 0.85, 0, 0, 0.57778],
          93: [0.35001, 0.85, 0, 0, 0.41667],
          123: [0.35001, 0.85, 0, 0, 0.58334],
          125: [0.35001, 0.85, 0, 0, 0.58334],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.72222, 0, 0, 0.55556],
          732: [0, 0.72222, 0, 0, 0.55556],
          770: [0, 0.72222, 0, 0, 0.55556],
          771: [0, 0.72222, 0, 0, 0.55556],
          8214: [-99e-5, 0.601, 0, 0, 0.77778],
          8593: [1e-5, 0.6, 0, 0, 0.66667],
          8595: [1e-5, 0.6, 0, 0, 0.66667],
          8657: [1e-5, 0.6, 0, 0, 0.77778],
          8659: [1e-5, 0.6, 0, 0, 0.77778],
          8719: [0.25001, 0.75, 0, 0, 0.94445],
          8720: [0.25001, 0.75, 0, 0, 0.94445],
          8721: [0.25001, 0.75, 0, 0, 1.05556],
          8730: [0.35001, 0.85, 0, 0, 1],
          8739: [-0.00599, 0.606, 0, 0, 0.33333],
          8741: [-0.00599, 0.606, 0, 0, 0.55556],
          8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
          8748: [0.306, 0.805, 0.19445, 0, 0.47222],
          8749: [0.306, 0.805, 0.19445, 0, 0.47222],
          8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
          8896: [0.25001, 0.75, 0, 0, 0.83334],
          8897: [0.25001, 0.75, 0, 0, 0.83334],
          8898: [0.25001, 0.75, 0, 0, 0.83334],
          8899: [0.25001, 0.75, 0, 0, 0.83334],
          8968: [0.35001, 0.85, 0, 0, 0.47222],
          8969: [0.35001, 0.85, 0, 0, 0.47222],
          8970: [0.35001, 0.85, 0, 0, 0.47222],
          8971: [0.35001, 0.85, 0, 0, 0.47222],
          9168: [-99e-5, 0.601, 0, 0, 0.66667],
          10216: [0.35001, 0.85, 0, 0, 0.47222],
          10217: [0.35001, 0.85, 0, 0, 0.47222],
          10752: [0.25001, 0.75, 0, 0, 1.11111],
          10753: [0.25001, 0.75, 0, 0, 1.11111],
          10754: [0.25001, 0.75, 0, 0, 1.11111],
          10756: [0.25001, 0.75, 0, 0, 0.83334],
          10758: [0.25001, 0.75, 0, 0, 0.83334],
        },
        "Size2-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [0.65002, 1.15, 0, 0, 0.59722],
          41: [0.65002, 1.15, 0, 0, 0.59722],
          47: [0.65002, 1.15, 0, 0, 0.81111],
          91: [0.65002, 1.15, 0, 0, 0.47222],
          92: [0.65002, 1.15, 0, 0, 0.81111],
          93: [0.65002, 1.15, 0, 0, 0.47222],
          123: [0.65002, 1.15, 0, 0, 0.66667],
          125: [0.65002, 1.15, 0, 0, 0.66667],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.75, 0, 0, 1],
          732: [0, 0.75, 0, 0, 1],
          770: [0, 0.75, 0, 0, 1],
          771: [0, 0.75, 0, 0, 1],
          8719: [0.55001, 1.05, 0, 0, 1.27778],
          8720: [0.55001, 1.05, 0, 0, 1.27778],
          8721: [0.55001, 1.05, 0, 0, 1.44445],
          8730: [0.65002, 1.15, 0, 0, 1],
          8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
          8748: [0.862, 1.36, 0.44445, 0, 0.55556],
          8749: [0.862, 1.36, 0.44445, 0, 0.55556],
          8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
          8896: [0.55001, 1.05, 0, 0, 1.11111],
          8897: [0.55001, 1.05, 0, 0, 1.11111],
          8898: [0.55001, 1.05, 0, 0, 1.11111],
          8899: [0.55001, 1.05, 0, 0, 1.11111],
          8968: [0.65002, 1.15, 0, 0, 0.52778],
          8969: [0.65002, 1.15, 0, 0, 0.52778],
          8970: [0.65002, 1.15, 0, 0, 0.52778],
          8971: [0.65002, 1.15, 0, 0, 0.52778],
          10216: [0.65002, 1.15, 0, 0, 0.61111],
          10217: [0.65002, 1.15, 0, 0, 0.61111],
          10752: [0.55001, 1.05, 0, 0, 1.51112],
          10753: [0.55001, 1.05, 0, 0, 1.51112],
          10754: [0.55001, 1.05, 0, 0, 1.51112],
          10756: [0.55001, 1.05, 0, 0, 1.11111],
          10758: [0.55001, 1.05, 0, 0, 1.11111],
        },
        "Size3-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [0.95003, 1.45, 0, 0, 0.73611],
          41: [0.95003, 1.45, 0, 0, 0.73611],
          47: [0.95003, 1.45, 0, 0, 1.04445],
          91: [0.95003, 1.45, 0, 0, 0.52778],
          92: [0.95003, 1.45, 0, 0, 1.04445],
          93: [0.95003, 1.45, 0, 0, 0.52778],
          123: [0.95003, 1.45, 0, 0, 0.75],
          125: [0.95003, 1.45, 0, 0, 0.75],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.75, 0, 0, 1.44445],
          732: [0, 0.75, 0, 0, 1.44445],
          770: [0, 0.75, 0, 0, 1.44445],
          771: [0, 0.75, 0, 0, 1.44445],
          8730: [0.95003, 1.45, 0, 0, 1],
          8968: [0.95003, 1.45, 0, 0, 0.58334],
          8969: [0.95003, 1.45, 0, 0, 0.58334],
          8970: [0.95003, 1.45, 0, 0, 0.58334],
          8971: [0.95003, 1.45, 0, 0, 0.58334],
          10216: [0.95003, 1.45, 0, 0, 0.75],
          10217: [0.95003, 1.45, 0, 0, 0.75],
        },
        "Size4-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [1.25003, 1.75, 0, 0, 0.79167],
          41: [1.25003, 1.75, 0, 0, 0.79167],
          47: [1.25003, 1.75, 0, 0, 1.27778],
          91: [1.25003, 1.75, 0, 0, 0.58334],
          92: [1.25003, 1.75, 0, 0, 1.27778],
          93: [1.25003, 1.75, 0, 0, 0.58334],
          123: [1.25003, 1.75, 0, 0, 0.80556],
          125: [1.25003, 1.75, 0, 0, 0.80556],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.825, 0, 0, 1.8889],
          732: [0, 0.825, 0, 0, 1.8889],
          770: [0, 0.825, 0, 0, 1.8889],
          771: [0, 0.825, 0, 0, 1.8889],
          8730: [1.25003, 1.75, 0, 0, 1],
          8968: [1.25003, 1.75, 0, 0, 0.63889],
          8969: [1.25003, 1.75, 0, 0, 0.63889],
          8970: [1.25003, 1.75, 0, 0, 0.63889],
          8971: [1.25003, 1.75, 0, 0, 0.63889],
          9115: [0.64502, 1.155, 0, 0, 0.875],
          9116: [1e-5, 0.6, 0, 0, 0.875],
          9117: [0.64502, 1.155, 0, 0, 0.875],
          9118: [0.64502, 1.155, 0, 0, 0.875],
          9119: [1e-5, 0.6, 0, 0, 0.875],
          9120: [0.64502, 1.155, 0, 0, 0.875],
          9121: [0.64502, 1.155, 0, 0, 0.66667],
          9122: [-99e-5, 0.601, 0, 0, 0.66667],
          9123: [0.64502, 1.155, 0, 0, 0.66667],
          9124: [0.64502, 1.155, 0, 0, 0.66667],
          9125: [-99e-5, 0.601, 0, 0, 0.66667],
          9126: [0.64502, 1.155, 0, 0, 0.66667],
          9127: [1e-5, 0.9, 0, 0, 0.88889],
          9128: [0.65002, 1.15, 0, 0, 0.88889],
          9129: [0.90001, 0, 0, 0, 0.88889],
          9130: [0, 0.3, 0, 0, 0.88889],
          9131: [1e-5, 0.9, 0, 0, 0.88889],
          9132: [0.65002, 1.15, 0, 0, 0.88889],
          9133: [0.90001, 0, 0, 0, 0.88889],
          9143: [0.88502, 0.915, 0, 0, 1.05556],
          10216: [1.25003, 1.75, 0, 0, 0.80556],
          10217: [1.25003, 1.75, 0, 0, 0.80556],
          57344: [-0.00499, 0.605, 0, 0, 1.05556],
          57345: [-0.00499, 0.605, 0, 0, 1.05556],
          57680: [0, 0.12, 0, 0, 0.45],
          57681: [0, 0.12, 0, 0, 0.45],
          57682: [0, 0.12, 0, 0, 0.45],
          57683: [0, 0.12, 0, 0, 0.45],
        },
        "Typewriter-Regular": {
          32: [0, 0, 0, 0, 0.525],
          33: [0, 0.61111, 0, 0, 0.525],
          34: [0, 0.61111, 0, 0, 0.525],
          35: [0, 0.61111, 0, 0, 0.525],
          36: [0.08333, 0.69444, 0, 0, 0.525],
          37: [0.08333, 0.69444, 0, 0, 0.525],
          38: [0, 0.61111, 0, 0, 0.525],
          39: [0, 0.61111, 0, 0, 0.525],
          40: [0.08333, 0.69444, 0, 0, 0.525],
          41: [0.08333, 0.69444, 0, 0, 0.525],
          42: [0, 0.52083, 0, 0, 0.525],
          43: [-0.08056, 0.53055, 0, 0, 0.525],
          44: [0.13889, 0.125, 0, 0, 0.525],
          45: [-0.08056, 0.53055, 0, 0, 0.525],
          46: [0, 0.125, 0, 0, 0.525],
          47: [0.08333, 0.69444, 0, 0, 0.525],
          48: [0, 0.61111, 0, 0, 0.525],
          49: [0, 0.61111, 0, 0, 0.525],
          50: [0, 0.61111, 0, 0, 0.525],
          51: [0, 0.61111, 0, 0, 0.525],
          52: [0, 0.61111, 0, 0, 0.525],
          53: [0, 0.61111, 0, 0, 0.525],
          54: [0, 0.61111, 0, 0, 0.525],
          55: [0, 0.61111, 0, 0, 0.525],
          56: [0, 0.61111, 0, 0, 0.525],
          57: [0, 0.61111, 0, 0, 0.525],
          58: [0, 0.43056, 0, 0, 0.525],
          59: [0.13889, 0.43056, 0, 0, 0.525],
          60: [-0.05556, 0.55556, 0, 0, 0.525],
          61: [-0.19549, 0.41562, 0, 0, 0.525],
          62: [-0.05556, 0.55556, 0, 0, 0.525],
          63: [0, 0.61111, 0, 0, 0.525],
          64: [0, 0.61111, 0, 0, 0.525],
          65: [0, 0.61111, 0, 0, 0.525],
          66: [0, 0.61111, 0, 0, 0.525],
          67: [0, 0.61111, 0, 0, 0.525],
          68: [0, 0.61111, 0, 0, 0.525],
          69: [0, 0.61111, 0, 0, 0.525],
          70: [0, 0.61111, 0, 0, 0.525],
          71: [0, 0.61111, 0, 0, 0.525],
          72: [0, 0.61111, 0, 0, 0.525],
          73: [0, 0.61111, 0, 0, 0.525],
          74: [0, 0.61111, 0, 0, 0.525],
          75: [0, 0.61111, 0, 0, 0.525],
          76: [0, 0.61111, 0, 0, 0.525],
          77: [0, 0.61111, 0, 0, 0.525],
          78: [0, 0.61111, 0, 0, 0.525],
          79: [0, 0.61111, 0, 0, 0.525],
          80: [0, 0.61111, 0, 0, 0.525],
          81: [0.13889, 0.61111, 0, 0, 0.525],
          82: [0, 0.61111, 0, 0, 0.525],
          83: [0, 0.61111, 0, 0, 0.525],
          84: [0, 0.61111, 0, 0, 0.525],
          85: [0, 0.61111, 0, 0, 0.525],
          86: [0, 0.61111, 0, 0, 0.525],
          87: [0, 0.61111, 0, 0, 0.525],
          88: [0, 0.61111, 0, 0, 0.525],
          89: [0, 0.61111, 0, 0, 0.525],
          90: [0, 0.61111, 0, 0, 0.525],
          91: [0.08333, 0.69444, 0, 0, 0.525],
          92: [0.08333, 0.69444, 0, 0, 0.525],
          93: [0.08333, 0.69444, 0, 0, 0.525],
          94: [0, 0.61111, 0, 0, 0.525],
          95: [0.09514, 0, 0, 0, 0.525],
          96: [0, 0.61111, 0, 0, 0.525],
          97: [0, 0.43056, 0, 0, 0.525],
          98: [0, 0.61111, 0, 0, 0.525],
          99: [0, 0.43056, 0, 0, 0.525],
          100: [0, 0.61111, 0, 0, 0.525],
          101: [0, 0.43056, 0, 0, 0.525],
          102: [0, 0.61111, 0, 0, 0.525],
          103: [0.22222, 0.43056, 0, 0, 0.525],
          104: [0, 0.61111, 0, 0, 0.525],
          105: [0, 0.61111, 0, 0, 0.525],
          106: [0.22222, 0.61111, 0, 0, 0.525],
          107: [0, 0.61111, 0, 0, 0.525],
          108: [0, 0.61111, 0, 0, 0.525],
          109: [0, 0.43056, 0, 0, 0.525],
          110: [0, 0.43056, 0, 0, 0.525],
          111: [0, 0.43056, 0, 0, 0.525],
          112: [0.22222, 0.43056, 0, 0, 0.525],
          113: [0.22222, 0.43056, 0, 0, 0.525],
          114: [0, 0.43056, 0, 0, 0.525],
          115: [0, 0.43056, 0, 0, 0.525],
          116: [0, 0.55358, 0, 0, 0.525],
          117: [0, 0.43056, 0, 0, 0.525],
          118: [0, 0.43056, 0, 0, 0.525],
          119: [0, 0.43056, 0, 0, 0.525],
          120: [0, 0.43056, 0, 0, 0.525],
          121: [0.22222, 0.43056, 0, 0, 0.525],
          122: [0, 0.43056, 0, 0, 0.525],
          123: [0.08333, 0.69444, 0, 0, 0.525],
          124: [0.08333, 0.69444, 0, 0, 0.525],
          125: [0.08333, 0.69444, 0, 0, 0.525],
          126: [0, 0.61111, 0, 0, 0.525],
          127: [0, 0.61111, 0, 0, 0.525],
          160: [0, 0, 0, 0, 0.525],
          176: [0, 0.61111, 0, 0, 0.525],
          184: [0.19445, 0, 0, 0, 0.525],
          305: [0, 0.43056, 0, 0, 0.525],
          567: [0.22222, 0.43056, 0, 0, 0.525],
          711: [0, 0.56597, 0, 0, 0.525],
          713: [0, 0.56555, 0, 0, 0.525],
          714: [0, 0.61111, 0, 0, 0.525],
          715: [0, 0.61111, 0, 0, 0.525],
          728: [0, 0.61111, 0, 0, 0.525],
          730: [0, 0.61111, 0, 0, 0.525],
          770: [0, 0.61111, 0, 0, 0.525],
          771: [0, 0.61111, 0, 0, 0.525],
          776: [0, 0.61111, 0, 0, 0.525],
          915: [0, 0.61111, 0, 0, 0.525],
          916: [0, 0.61111, 0, 0, 0.525],
          920: [0, 0.61111, 0, 0, 0.525],
          923: [0, 0.61111, 0, 0, 0.525],
          926: [0, 0.61111, 0, 0, 0.525],
          928: [0, 0.61111, 0, 0, 0.525],
          931: [0, 0.61111, 0, 0, 0.525],
          933: [0, 0.61111, 0, 0, 0.525],
          934: [0, 0.61111, 0, 0, 0.525],
          936: [0, 0.61111, 0, 0, 0.525],
          937: [0, 0.61111, 0, 0, 0.525],
          8216: [0, 0.61111, 0, 0, 0.525],
          8217: [0, 0.61111, 0, 0, 0.525],
          8242: [0, 0.61111, 0, 0, 0.525],
          9251: [0.11111, 0.21944, 0, 0, 0.525],
        },
      };
      var re = {
        slant: [0.25, 0.25, 0.25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [0.431, 0.431, 0.431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [0.677, 0.732, 0.925],
        num2: [0.394, 0.384, 0.387],
        num3: [0.444, 0.471, 0.504],
        denom1: [0.686, 0.752, 1.025],
        denom2: [0.345, 0.344, 0.532],
        sup1: [0.413, 0.503, 0.504],
        sup2: [0.363, 0.431, 0.404],
        sup3: [0.289, 0.286, 0.294],
        sub1: [0.15, 0.143, 0.2],
        sub2: [0.247, 0.286, 0.4],
        supDrop: [0.386, 0.353, 0.494],
        subDrop: [0.05, 0.071, 0.1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [0.25, 0.25, 0.25],
        defaultRuleThickness: [0.04, 0.049, 0.049],
        bigOpSpacing1: [0.111, 0.111, 0.111],
        bigOpSpacing2: [0.166, 0.166, 0.166],
        bigOpSpacing3: [0.2, 0.2, 0.2],
        bigOpSpacing4: [0.6, 0.611, 0.611],
        bigOpSpacing5: [0.1, 0.143, 0.143],
        sqrtRuleThickness: [0.04, 0.04, 0.04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [0.2, 0.2, 0.2],
        arrayRuleWidth: [0.04, 0.04, 0.04],
        fboxsep: [0.3, 0.3, 0.3],
        fboxrule: [0.04, 0.04, 0.04],
      };
      var ae = {
        Å: "A",
        Ð: "D",
        Þ: "o",
        å: "a",
        ð: "d",
        þ: "o",
        А: "A",
        Б: "B",
        В: "B",
        Г: "F",
        Д: "A",
        Е: "E",
        Ж: "K",
        З: "3",
        И: "N",
        Й: "N",
        К: "K",
        Л: "N",
        М: "M",
        Н: "H",
        О: "O",
        П: "N",
        Р: "P",
        С: "C",
        Т: "T",
        У: "y",
        Ф: "O",
        Х: "X",
        Ц: "U",
        Ч: "h",
        Ш: "W",
        Щ: "W",
        Ъ: "B",
        Ы: "X",
        Ь: "B",
        Э: "3",
        Ю: "X",
        Я: "R",
        а: "a",
        б: "b",
        в: "a",
        г: "r",
        д: "y",
        е: "e",
        ж: "m",
        з: "e",
        и: "n",
        й: "n",
        к: "n",
        л: "n",
        м: "m",
        н: "n",
        о: "o",
        п: "n",
        р: "p",
        с: "c",
        т: "o",
        у: "y",
        ф: "b",
        х: "x",
        ц: "n",
        ч: "n",
        ш: "w",
        щ: "w",
        ъ: "a",
        ы: "m",
        ь: "a",
        э: "e",
        ю: "m",
        я: "r",
      };
      function ie(e, t) {
        te[e] = t;
      }
      function ne(e, t, r) {
        if (!te[t]) {
          throw new Error("Font metrics not found for font: " + t + ".");
        }
        var a = e.charCodeAt(0);
        var i = te[t][a];
        if (!i && e[0] in ae) {
          a = ae[e[0]].charCodeAt(0);
          i = te[t][a];
        }
        if (!i && r === "text") {
          if (F(a)) {
            i = te[t][77];
          }
        }
        if (i) {
          return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] };
        }
      }
      var se = {};
      function oe(e) {
        var t;
        if (e >= 5) {
          t = 0;
        } else if (e >= 3) {
          t = 1;
        } else {
          t = 2;
        }
        if (!se[t]) {
          var r = (se[t] = { cssEmPerMu: re.quad[t] / 18 });
          for (var a in re) {
            if (re.hasOwnProperty(a)) {
              r[a] = re[a][t];
            }
          }
        }
        return se[t];
      }
      var le = [
        [1, 1, 1],
        [2, 1, 1],
        [3, 1, 1],
        [4, 2, 1],
        [5, 2, 1],
        [6, 3, 1],
        [7, 4, 2],
        [8, 6, 3],
        [9, 7, 6],
        [10, 8, 7],
        [11, 10, 9],
      ];
      var he = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488];
      var ue = function e(t, r) {
        return r.size < 2 ? t : le[t - 1][r.size - 1];
      };
      class me {
        constructor(e) {
          this.style = void 0;
          this.color = void 0;
          this.size = void 0;
          this.textSize = void 0;
          this.phantom = void 0;
          this.font = void 0;
          this.fontFamily = void 0;
          this.fontWeight = void 0;
          this.fontShape = void 0;
          this.sizeMultiplier = void 0;
          this.maxSize = void 0;
          this.minRuleThickness = void 0;
          this._fontMetrics = void 0;
          this.style = e.style;
          this.color = e.color;
          this.size = e.size || me.BASESIZE;
          this.textSize = e.textSize || this.size;
          this.phantom = !!e.phantom;
          this.font = e.font || "";
          this.fontFamily = e.fontFamily || "";
          this.fontWeight = e.fontWeight || "";
          this.fontShape = e.fontShape || "";
          this.sizeMultiplier = he[this.size - 1];
          this.maxSize = e.maxSize;
          this.minRuleThickness = e.minRuleThickness;
          this._fontMetrics = undefined;
        }
        extend(e) {
          var t = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness,
          };
          for (var r in e) {
            if (e.hasOwnProperty(r)) {
              t[r] = e[r];
            }
          }
          return new me(t);
        }
        havingStyle(e) {
          if (this.style === e) {
            return this;
          } else {
            return this.extend({ style: e, size: ue(this.textSize, e) });
          }
        }
        havingCrampedStyle() {
          return this.havingStyle(this.style.cramp());
        }
        havingSize(e) {
          if (this.size === e && this.textSize === e) {
            return this;
          } else {
            return this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: he[e - 1] });
          }
        }
        havingBaseStyle(e) {
          e = e || this.style.text();
          var t = ue(me.BASESIZE, e);
          if (this.size === t && this.textSize === me.BASESIZE && this.style === e) {
            return this;
          } else {
            return this.extend({ style: e, size: t });
          }
        }
        havingBaseSizing() {
          var e;
          switch (this.style.id) {
            case 4:
            case 5:
              e = 3;
              break;
            case 6:
            case 7:
              e = 1;
              break;
            default:
              e = 6;
          }
          return this.extend({ style: this.style.text(), size: e });
        }
        withColor(e) {
          return this.extend({ color: e });
        }
        withPhantom() {
          return this.extend({ phantom: true });
        }
        withFont(e) {
          return this.extend({ font: e });
        }
        withTextFontFamily(e) {
          return this.extend({ fontFamily: e, font: "" });
        }
        withTextFontWeight(e) {
          return this.extend({ fontWeight: e, font: "" });
        }
        withTextFontShape(e) {
          return this.extend({ fontShape: e, font: "" });
        }
        sizingClasses(e) {
          if (e.size !== this.size) {
            return ["sizing", "reset-size" + e.size, "size" + this.size];
          } else {
            return [];
          }
        }
        baseSizingClasses() {
          if (this.size !== me.BASESIZE) {
            return ["sizing", "reset-size" + this.size, "size" + me.BASESIZE];
          } else {
            return [];
          }
        }
        fontMetrics() {
          if (!this._fontMetrics) {
            this._fontMetrics = oe(this.size);
          }
          return this._fontMetrics;
        }
        getColor() {
          if (this.phantom) {
            return "transparent";
          } else {
            return this.color;
          }
        }
      }
      me.BASESIZE = 6;
      var ce = {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        in: 72.27,
        bp: 803 / 800,
        pc: 12,
        dd: 1238 / 1157,
        cc: 14856 / 1157,
        nd: 685 / 642,
        nc: 1370 / 107,
        sp: 1 / 65536,
        px: 803 / 800,
      };
      var pe = { ex: true, em: true, mu: true };
      var de = function e(t) {
        if (typeof t !== "string") {
          t = t.unit;
        }
        return t in ce || t in pe || t === "ex";
      };
      var fe = function e(t, r) {
        var a;
        if (t.unit in ce) {
          a = ce[t.unit] / r.fontMetrics().ptPerEm / r.sizeMultiplier;
        } else if (t.unit === "mu") {
          a = r.fontMetrics().cssEmPerMu;
        } else {
          var i;
          if (r.style.isTight()) {
            i = r.havingStyle(r.style.text());
          } else {
            i = r;
          }
          if (t.unit === "ex") {
            a = i.fontMetrics().xHeight;
          } else if (t.unit === "em") {
            a = i.fontMetrics().quad;
          } else {
            throw new n("Invalid unit: '" + t.unit + "'");
          }
          if (i !== r) {
            a *= i.sizeMultiplier / r.sizeMultiplier;
          }
        }
        return Math.min(t.number * a, r.maxSize);
      };
      var ve = function e(t) {
        return +t.toFixed(4) + "em";
      };
      var ge = function e(t) {
        return t.filter((e) => e).join(" ");
      };
      var be = function e(t, r, a) {
        this.classes = t || [];
        this.attributes = {};
        this.height = 0;
        this.depth = 0;
        this.maxFontSize = 0;
        this.style = a || {};
        if (r) {
          if (r.style.isTight()) {
            this.classes.push("mtight");
          }
          var i = r.getColor();
          if (i) {
            this.style.color = i;
          }
        }
      };
      var ye = function e(t) {
        var r = document.createElement(t);
        r.className = ge(this.classes);
        for (var a in this.style) {
          if (this.style.hasOwnProperty(a)) {
            r.style[a] = this.style[a];
          }
        }
        for (var i in this.attributes) {
          if (this.attributes.hasOwnProperty(i)) {
            r.setAttribute(i, this.attributes[i]);
          }
        }
        for (var n = 0; n < this.children.length; n++) {
          r.appendChild(this.children[n].toNode());
        }
        return r;
      };
      var xe = /[\s"'>/=\x00-\x1f]/;
      var we = function e(t) {
        var r = "<" + t;
        if (this.classes.length) {
          r += ' class="' + g.escape(ge(this.classes)) + '"';
        }
        var a = "";
        for (var i in this.style) {
          if (this.style.hasOwnProperty(i)) {
            a += g.hyphenate(i) + ":" + this.style[i] + ";";
          }
        }
        if (a) {
          r += ' style="' + g.escape(a) + '"';
        }
        for (var s in this.attributes) {
          if (this.attributes.hasOwnProperty(s)) {
            if (xe.test(s)) {
              throw new n("Invalid attribute name '" + s + "'");
            }
            r += " " + s + '="' + g.escape(this.attributes[s]) + '"';
          }
        }
        r += ">";
        for (var o = 0; o < this.children.length; o++) {
          r += this.children[o].toMarkup();
        }
        r += "</" + t + ">";
        return r;
      };
      class ke {
        constructor(e, t, r, a) {
          this.children = void 0;
          this.attributes = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.width = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          be.call(this, e, r, a);
          this.children = t || [];
        }
        setAttribute(e, t) {
          this.attributes[e] = t;
        }
        hasClass(e) {
          return g.contains(this.classes, e);
        }
        toNode() {
          return ye.call(this, "span");
        }
        toMarkup() {
          return we.call(this, "span");
        }
      }
      class Se {
        constructor(e, t, r, a) {
          this.children = void 0;
          this.attributes = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          be.call(this, t, a);
          this.children = r || [];
          this.setAttribute("href", e);
        }
        setAttribute(e, t) {
          this.attributes[e] = t;
        }
        hasClass(e) {
          return g.contains(this.classes, e);
        }
        toNode() {
          return ye.call(this, "a");
        }
        toMarkup() {
          return we.call(this, "a");
        }
      }
      class Me {
        constructor(e, t, r) {
          this.src = void 0;
          this.alt = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          this.alt = t;
          this.src = e;
          this.classes = ["mord"];
          this.style = r;
        }
        hasClass(e) {
          return g.contains(this.classes, e);
        }
        toNode() {
          var e = document.createElement("img");
          e.src = this.src;
          e.alt = this.alt;
          e.className = "mord";
          for (var t in this.style) {
            if (this.style.hasOwnProperty(t)) {
              e.style[t] = this.style[t];
            }
          }
          return e;
        }
        toMarkup() {
          var e = '<img src="' + g.escape(this.src) + '"' + (' alt="' + g.escape(this.alt) + '"');
          var t = "";
          for (var r in this.style) {
            if (this.style.hasOwnProperty(r)) {
              t += g.hyphenate(r) + ":" + this.style[r] + ";";
            }
          }
          if (t) {
            e += ' style="' + g.escape(t) + '"';
          }
          e += "'/>";
          return e;
        }
      }
      var ze = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
      class Ae {
        constructor(e, t, r, a, i, n, s, o) {
          this.text = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.italic = void 0;
          this.skew = void 0;
          this.width = void 0;
          this.maxFontSize = void 0;
          this.classes = void 0;
          this.style = void 0;
          this.text = e;
          this.height = t || 0;
          this.depth = r || 0;
          this.italic = a || 0;
          this.skew = i || 0;
          this.width = n || 0;
          this.classes = s || [];
          this.style = o || {};
          this.maxFontSize = 0;
          var l = V(this.text.charCodeAt(0));
          if (l) {
            this.classes.push(l + "_fallback");
          }
          if (/[îïíì]/.test(this.text)) {
            this.text = ze[this.text];
          }
        }
        hasClass(e) {
          return g.contains(this.classes, e);
        }
        toNode() {
          var e = document.createTextNode(this.text);
          var t = null;
          if (this.italic > 0) {
            t = document.createElement("span");
            t.style.marginRight = ve(this.italic);
          }
          if (this.classes.length > 0) {
            t = t || document.createElement("span");
            t.className = ge(this.classes);
          }
          for (var r in this.style) {
            if (this.style.hasOwnProperty(r)) {
              t = t || document.createElement("span");
              t.style[r] = this.style[r];
            }
          }
          if (t) {
            t.appendChild(e);
            return t;
          } else {
            return e;
          }
        }
        toMarkup() {
          var e = false;
          var t = "<span";
          if (this.classes.length) {
            e = true;
            t += ' class="';
            t += g.escape(ge(this.classes));
            t += '"';
          }
          var r = "";
          if (this.italic > 0) {
            r += "margin-right:" + this.italic + "em;";
          }
          for (var a in this.style) {
            if (this.style.hasOwnProperty(a)) {
              r += g.hyphenate(a) + ":" + this.style[a] + ";";
            }
          }
          if (r) {
            e = true;
            t += ' style="' + g.escape(r) + '"';
          }
          var i = g.escape(this.text);
          if (e) {
            t += ">";
            t += i;
            t += "</span>";
            return t;
          } else {
            return i;
          }
        }
      }
      class Te {
        constructor(e, t) {
          this.children = void 0;
          this.attributes = void 0;
          this.children = e || [];
          this.attributes = t || {};
        }
        toNode() {
          var e = "http://www.w3.org/2000/svg";
          var t = document.createElementNS(e, "svg");
          for (var r in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
              t.setAttribute(r, this.attributes[r]);
            }
          }
          for (var a = 0; a < this.children.length; a++) {
            t.appendChild(this.children[a].toNode());
          }
          return t;
        }
        toMarkup() {
          var e = '<svg xmlns="http://www.w3.org/2000/svg"';
          for (var t in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, t)) {
              e += " " + t + '="' + g.escape(this.attributes[t]) + '"';
            }
          }
          e += ">";
          for (var r = 0; r < this.children.length; r++) {
            e += this.children[r].toMarkup();
          }
          e += "</svg>";
          return e;
        }
      }
      class Be {
        constructor(e, t) {
          this.pathName = void 0;
          this.alternate = void 0;
          this.pathName = e;
          this.alternate = t;
        }
        toNode() {
          var e = "http://www.w3.org/2000/svg";
          var t = document.createElementNS(e, "path");
          if (this.alternate) {
            t.setAttribute("d", this.alternate);
          } else {
            t.setAttribute("d", J[this.pathName]);
          }
          return t;
        }
        toMarkup() {
          if (this.alternate) {
            return '<path d="' + g.escape(this.alternate) + '"/>';
          } else {
            return '<path d="' + g.escape(J[this.pathName]) + '"/>';
          }
        }
      }
      class Ce {
        constructor(e) {
          this.attributes = void 0;
          this.attributes = e || {};
        }
        toNode() {
          var e = "http://www.w3.org/2000/svg";
          var t = document.createElementNS(e, "line");
          for (var r in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
              t.setAttribute(r, this.attributes[r]);
            }
          }
          return t;
        }
        toMarkup() {
          var e = "<line";
          for (var t in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, t)) {
              e += " " + t + '="' + g.escape(this.attributes[t]) + '"';
            }
          }
          e += "/>";
          return e;
        }
      }
      function Ne(e) {
        if (e instanceof Ae) {
          return e;
        } else {
          throw new Error("Expected symbolNode but got " + String(e) + ".");
        }
      }
      function qe(e) {
        if (e instanceof ke) {
          return e;
        } else {
          throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".");
        }
      }
      var Ie = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 };
      var Re = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 };
      var He = { math: {}, text: {} };
      function Oe(e, t, r, a, i, n) {
        He[e][i] = { font: t, group: r, replace: a };
        if (n && a) {
          He[e][a] = He[e][i];
        }
      }
      var Ee = "math";
      var Le = "text";
      var De = "main";
      var Ve = "ams";
      var Pe = "accent-token";
      var Fe = "bin";
      var Ge = "close";
      var Ue = "inner";
      var Ye = "mathord";
      var Xe = "op-token";
      var We = "open";
      var _e = "punct";
      var je = "rel";
      var $e = "spacing";
      var Ze = "textord";
      Oe(Ee, De, je, "≡", "\\equiv", true);
      Oe(Ee, De, je, "≺", "\\prec", true);
      Oe(Ee, De, je, "≻", "\\succ", true);
      Oe(Ee, De, je, "∼", "\\sim", true);
      Oe(Ee, De, je, "⊥", "\\perp");
      Oe(Ee, De, je, "⪯", "\\preceq", true);
      Oe(Ee, De, je, "⪰", "\\succeq", true);
      Oe(Ee, De, je, "≃", "\\simeq", true);
      Oe(Ee, De, je, "∣", "\\mid", true);
      Oe(Ee, De, je, "≪", "\\ll", true);
      Oe(Ee, De, je, "≫", "\\gg", true);
      Oe(Ee, De, je, "≍", "\\asymp", true);
      Oe(Ee, De, je, "∥", "\\parallel");
      Oe(Ee, De, je, "⋈", "\\bowtie", true);
      Oe(Ee, De, je, "⌣", "\\smile", true);
      Oe(Ee, De, je, "⊑", "\\sqsubseteq", true);
      Oe(Ee, De, je, "⊒", "\\sqsupseteq", true);
      Oe(Ee, De, je, "≐", "\\doteq", true);
      Oe(Ee, De, je, "⌢", "\\frown", true);
      Oe(Ee, De, je, "∋", "\\ni", true);
      Oe(Ee, De, je, "∝", "\\propto", true);
      Oe(Ee, De, je, "⊢", "\\vdash", true);
      Oe(Ee, De, je, "⊣", "\\dashv", true);
      Oe(Ee, De, je, "∋", "\\owns");
      Oe(Ee, De, _e, ".", "\\ldotp");
      Oe(Ee, De, _e, "⋅", "\\cdotp");
      Oe(Ee, De, Ze, "#", "\\#");
      Oe(Le, De, Ze, "#", "\\#");
      Oe(Ee, De, Ze, "&", "\\&");
      Oe(Le, De, Ze, "&", "\\&");
      Oe(Ee, De, Ze, "ℵ", "\\aleph", true);
      Oe(Ee, De, Ze, "∀", "\\forall", true);
      Oe(Ee, De, Ze, "ℏ", "\\hbar", true);
      Oe(Ee, De, Ze, "∃", "\\exists", true);
      Oe(Ee, De, Ze, "∇", "\\nabla", true);
      Oe(Ee, De, Ze, "♭", "\\flat", true);
      Oe(Ee, De, Ze, "ℓ", "\\ell", true);
      Oe(Ee, De, Ze, "♮", "\\natural", true);
      Oe(Ee, De, Ze, "♣", "\\clubsuit", true);
      Oe(Ee, De, Ze, "℘", "\\wp", true);
      Oe(Ee, De, Ze, "♯", "\\sharp", true);
      Oe(Ee, De, Ze, "♢", "\\diamondsuit", true);
      Oe(Ee, De, Ze, "ℜ", "\\Re", true);
      Oe(Ee, De, Ze, "♡", "\\heartsuit", true);
      Oe(Ee, De, Ze, "ℑ", "\\Im", true);
      Oe(Ee, De, Ze, "♠", "\\spadesuit", true);
      Oe(Ee, De, Ze, "§", "\\S", true);
      Oe(Le, De, Ze, "§", "\\S");
      Oe(Ee, De, Ze, "¶", "\\P", true);
      Oe(Le, De, Ze, "¶", "\\P");
      Oe(Ee, De, Ze, "†", "\\dag");
      Oe(Le, De, Ze, "†", "\\dag");
      Oe(Le, De, Ze, "†", "\\textdagger");
      Oe(Ee, De, Ze, "‡", "\\ddag");
      Oe(Le, De, Ze, "‡", "\\ddag");
      Oe(Le, De, Ze, "‡", "\\textdaggerdbl");
      Oe(Ee, De, Ge, "⎱", "\\rmoustache", true);
      Oe(Ee, De, We, "⎰", "\\lmoustache", true);
      Oe(Ee, De, Ge, "⟯", "\\rgroup", true);
      Oe(Ee, De, We, "⟮", "\\lgroup", true);
      Oe(Ee, De, Fe, "∓", "\\mp", true);
      Oe(Ee, De, Fe, "⊖", "\\ominus", true);
      Oe(Ee, De, Fe, "⊎", "\\uplus", true);
      Oe(Ee, De, Fe, "⊓", "\\sqcap", true);
      Oe(Ee, De, Fe, "∗", "\\ast");
      Oe(Ee, De, Fe, "⊔", "\\sqcup", true);
      Oe(Ee, De, Fe, "◯", "\\bigcirc", true);
      Oe(Ee, De, Fe, "∙", "\\bullet", true);
      Oe(Ee, De, Fe, "‡", "\\ddagger");
      Oe(Ee, De, Fe, "≀", "\\wr", true);
      Oe(Ee, De, Fe, "⨿", "\\amalg");
      Oe(Ee, De, Fe, "&", "\\And");
      Oe(Ee, De, je, "⟵", "\\longleftarrow", true);
      Oe(Ee, De, je, "⇐", "\\Leftarrow", true);
      Oe(Ee, De, je, "⟸", "\\Longleftarrow", true);
      Oe(Ee, De, je, "⟶", "\\longrightarrow", true);
      Oe(Ee, De, je, "⇒", "\\Rightarrow", true);
      Oe(Ee, De, je, "⟹", "\\Longrightarrow", true);
      Oe(Ee, De, je, "↔", "\\leftrightarrow", true);
      Oe(Ee, De, je, "⟷", "\\longleftrightarrow", true);
      Oe(Ee, De, je, "⇔", "\\Leftrightarrow", true);
      Oe(Ee, De, je, "⟺", "\\Longleftrightarrow", true);
      Oe(Ee, De, je, "↦", "\\mapsto", true);
      Oe(Ee, De, je, "⟼", "\\longmapsto", true);
      Oe(Ee, De, je, "↗", "\\nearrow", true);
      Oe(Ee, De, je, "↩", "\\hookleftarrow", true);
      Oe(Ee, De, je, "↪", "\\hookrightarrow", true);
      Oe(Ee, De, je, "↘", "\\searrow", true);
      Oe(Ee, De, je, "↼", "\\leftharpoonup", true);
      Oe(Ee, De, je, "⇀", "\\rightharpoonup", true);
      Oe(Ee, De, je, "↙", "\\swarrow", true);
      Oe(Ee, De, je, "↽", "\\leftharpoondown", true);
      Oe(Ee, De, je, "⇁", "\\rightharpoondown", true);
      Oe(Ee, De, je, "↖", "\\nwarrow", true);
      Oe(Ee, De, je, "⇌", "\\rightleftharpoons", true);
      Oe(Ee, Ve, je, "≮", "\\nless", true);
      Oe(Ee, Ve, je, "", "\\@nleqslant");
      Oe(Ee, Ve, je, "", "\\@nleqq");
      Oe(Ee, Ve, je, "⪇", "\\lneq", true);
      Oe(Ee, Ve, je, "≨", "\\lneqq", true);
      Oe(Ee, Ve, je, "", "\\@lvertneqq");
      Oe(Ee, Ve, je, "⋦", "\\lnsim", true);
      Oe(Ee, Ve, je, "⪉", "\\lnapprox", true);
      Oe(Ee, Ve, je, "⊀", "\\nprec", true);
      Oe(Ee, Ve, je, "⋠", "\\npreceq", true);
      Oe(Ee, Ve, je, "⋨", "\\precnsim", true);
      Oe(Ee, Ve, je, "⪹", "\\precnapprox", true);
      Oe(Ee, Ve, je, "≁", "\\nsim", true);
      Oe(Ee, Ve, je, "", "\\@nshortmid");
      Oe(Ee, Ve, je, "∤", "\\nmid", true);
      Oe(Ee, Ve, je, "⊬", "\\nvdash", true);
      Oe(Ee, Ve, je, "⊭", "\\nvDash", true);
      Oe(Ee, Ve, je, "⋪", "\\ntriangleleft");
      Oe(Ee, Ve, je, "⋬", "\\ntrianglelefteq", true);
      Oe(Ee, Ve, je, "⊊", "\\subsetneq", true);
      Oe(Ee, Ve, je, "", "\\@varsubsetneq");
      Oe(Ee, Ve, je, "⫋", "\\subsetneqq", true);
      Oe(Ee, Ve, je, "", "\\@varsubsetneqq");
      Oe(Ee, Ve, je, "≯", "\\ngtr", true);
      Oe(Ee, Ve, je, "", "\\@ngeqslant");
      Oe(Ee, Ve, je, "", "\\@ngeqq");
      Oe(Ee, Ve, je, "⪈", "\\gneq", true);
      Oe(Ee, Ve, je, "≩", "\\gneqq", true);
      Oe(Ee, Ve, je, "", "\\@gvertneqq");
      Oe(Ee, Ve, je, "⋧", "\\gnsim", true);
      Oe(Ee, Ve, je, "⪊", "\\gnapprox", true);
      Oe(Ee, Ve, je, "⊁", "\\nsucc", true);
      Oe(Ee, Ve, je, "⋡", "\\nsucceq", true);
      Oe(Ee, Ve, je, "⋩", "\\succnsim", true);
      Oe(Ee, Ve, je, "⪺", "\\succnapprox", true);
      Oe(Ee, Ve, je, "≆", "\\ncong", true);
      Oe(Ee, Ve, je, "", "\\@nshortparallel");
      Oe(Ee, Ve, je, "∦", "\\nparallel", true);
      Oe(Ee, Ve, je, "⊯", "\\nVDash", true);
      Oe(Ee, Ve, je, "⋫", "\\ntriangleright");
      Oe(Ee, Ve, je, "⋭", "\\ntrianglerighteq", true);
      Oe(Ee, Ve, je, "", "\\@nsupseteqq");
      Oe(Ee, Ve, je, "⊋", "\\supsetneq", true);
      Oe(Ee, Ve, je, "", "\\@varsupsetneq");
      Oe(Ee, Ve, je, "⫌", "\\supsetneqq", true);
      Oe(Ee, Ve, je, "", "\\@varsupsetneqq");
      Oe(Ee, Ve, je, "⊮", "\\nVdash", true);
      Oe(Ee, Ve, je, "⪵", "\\precneqq", true);
      Oe(Ee, Ve, je, "⪶", "\\succneqq", true);
      Oe(Ee, Ve, je, "", "\\@nsubseteqq");
      Oe(Ee, Ve, Fe, "⊴", "\\unlhd");
      Oe(Ee, Ve, Fe, "⊵", "\\unrhd");
      Oe(Ee, Ve, je, "↚", "\\nleftarrow", true);
      Oe(Ee, Ve, je, "↛", "\\nrightarrow", true);
      Oe(Ee, Ve, je, "⇍", "\\nLeftarrow", true);
      Oe(Ee, Ve, je, "⇏", "\\nRightarrow", true);
      Oe(Ee, Ve, je, "↮", "\\nleftrightarrow", true);
      Oe(Ee, Ve, je, "⇎", "\\nLeftrightarrow", true);
      Oe(Ee, Ve, je, "△", "\\vartriangle");
      Oe(Ee, Ve, Ze, "ℏ", "\\hslash");
      Oe(Ee, Ve, Ze, "▽", "\\triangledown");
      Oe(Ee, Ve, Ze, "◊", "\\lozenge");
      Oe(Ee, Ve, Ze, "Ⓢ", "\\circledS");
      Oe(Ee, Ve, Ze, "®", "\\circledR");
      Oe(Le, Ve, Ze, "®", "\\circledR");
      Oe(Ee, Ve, Ze, "∡", "\\measuredangle", true);
      Oe(Ee, Ve, Ze, "∄", "\\nexists");
      Oe(Ee, Ve, Ze, "℧", "\\mho");
      Oe(Ee, Ve, Ze, "Ⅎ", "\\Finv", true);
      Oe(Ee, Ve, Ze, "⅁", "\\Game", true);
      Oe(Ee, Ve, Ze, "‵", "\\backprime");
      Oe(Ee, Ve, Ze, "▲", "\\blacktriangle");
      Oe(Ee, Ve, Ze, "▼", "\\blacktriangledown");
      Oe(Ee, Ve, Ze, "■", "\\blacksquare");
      Oe(Ee, Ve, Ze, "⧫", "\\blacklozenge");
      Oe(Ee, Ve, Ze, "★", "\\bigstar");
      Oe(Ee, Ve, Ze, "∢", "\\sphericalangle", true);
      Oe(Ee, Ve, Ze, "∁", "\\complement", true);
      Oe(Ee, Ve, Ze, "ð", "\\eth", true);
      Oe(Le, De, Ze, "ð", "ð");
      Oe(Ee, Ve, Ze, "╱", "\\diagup");
      Oe(Ee, Ve, Ze, "╲", "\\diagdown");
      Oe(Ee, Ve, Ze, "□", "\\square");
      Oe(Ee, Ve, Ze, "□", "\\Box");
      Oe(Ee, Ve, Ze, "◊", "\\Diamond");
      Oe(Ee, Ve, Ze, "¥", "\\yen", true);
      Oe(Le, Ve, Ze, "¥", "\\yen", true);
      Oe(Ee, Ve, Ze, "✓", "\\checkmark", true);
      Oe(Le, Ve, Ze, "✓", "\\checkmark");
      Oe(Ee, Ve, Ze, "ℶ", "\\beth", true);
      Oe(Ee, Ve, Ze, "ℸ", "\\daleth", true);
      Oe(Ee, Ve, Ze, "ℷ", "\\gimel", true);
      Oe(Ee, Ve, Ze, "ϝ", "\\digamma", true);
      Oe(Ee, Ve, Ze, "ϰ", "\\varkappa");
      Oe(Ee, Ve, We, "┌", "\\@ulcorner", true);
      Oe(Ee, Ve, Ge, "┐", "\\@urcorner", true);
      Oe(Ee, Ve, We, "└", "\\@llcorner", true);
      Oe(Ee, Ve, Ge, "┘", "\\@lrcorner", true);
      Oe(Ee, Ve, je, "≦", "\\leqq", true);
      Oe(Ee, Ve, je, "⩽", "\\leqslant", true);
      Oe(Ee, Ve, je, "⪕", "\\eqslantless", true);
      Oe(Ee, Ve, je, "≲", "\\lesssim", true);
      Oe(Ee, Ve, je, "⪅", "\\lessapprox", true);
      Oe(Ee, Ve, je, "≊", "\\approxeq", true);
      Oe(Ee, Ve, Fe, "⋖", "\\lessdot");
      Oe(Ee, Ve, je, "⋘", "\\lll", true);
      Oe(Ee, Ve, je, "≶", "\\lessgtr", true);
      Oe(Ee, Ve, je, "⋚", "\\lesseqgtr", true);
      Oe(Ee, Ve, je, "⪋", "\\lesseqqgtr", true);
      Oe(Ee, Ve, je, "≑", "\\doteqdot");
      Oe(Ee, Ve, je, "≓", "\\risingdotseq", true);
      Oe(Ee, Ve, je, "≒", "\\fallingdotseq", true);
      Oe(Ee, Ve, je, "∽", "\\backsim", true);
      Oe(Ee, Ve, je, "⋍", "\\backsimeq", true);
      Oe(Ee, Ve, je, "⫅", "\\subseteqq", true);
      Oe(Ee, Ve, je, "⋐", "\\Subset", true);
      Oe(Ee, Ve, je, "⊏", "\\sqsubset", true);
      Oe(Ee, Ve, je, "≼", "\\preccurlyeq", true);
      Oe(Ee, Ve, je, "⋞", "\\curlyeqprec", true);
      Oe(Ee, Ve, je, "≾", "\\precsim", true);
      Oe(Ee, Ve, je, "⪷", "\\precapprox", true);
      Oe(Ee, Ve, je, "⊲", "\\vartriangleleft");
      Oe(Ee, Ve, je, "⊴", "\\trianglelefteq");
      Oe(Ee, Ve, je, "⊨", "\\vDash", true);
      Oe(Ee, Ve, je, "⊪", "\\Vvdash", true);
      Oe(Ee, Ve, je, "⌣", "\\smallsmile");
      Oe(Ee, Ve, je, "⌢", "\\smallfrown");
      Oe(Ee, Ve, je, "≏", "\\bumpeq", true);
      Oe(Ee, Ve, je, "≎", "\\Bumpeq", true);
      Oe(Ee, Ve, je, "≧", "\\geqq", true);
      Oe(Ee, Ve, je, "⩾", "\\geqslant", true);
      Oe(Ee, Ve, je, "⪖", "\\eqslantgtr", true);
      Oe(Ee, Ve, je, "≳", "\\gtrsim", true);
      Oe(Ee, Ve, je, "⪆", "\\gtrapprox", true);
      Oe(Ee, Ve, Fe, "⋗", "\\gtrdot");
      Oe(Ee, Ve, je, "⋙", "\\ggg", true);
      Oe(Ee, Ve, je, "≷", "\\gtrless", true);
      Oe(Ee, Ve, je, "⋛", "\\gtreqless", true);
      Oe(Ee, Ve, je, "⪌", "\\gtreqqless", true);
      Oe(Ee, Ve, je, "≖", "\\eqcirc", true);
      Oe(Ee, Ve, je, "≗", "\\circeq", true);
      Oe(Ee, Ve, je, "≜", "\\triangleq", true);
      Oe(Ee, Ve, je, "∼", "\\thicksim");
      Oe(Ee, Ve, je, "≈", "\\thickapprox");
      Oe(Ee, Ve, je, "⫆", "\\supseteqq", true);
      Oe(Ee, Ve, je, "⋑", "\\Supset", true);
      Oe(Ee, Ve, je, "⊐", "\\sqsupset", true);
      Oe(Ee, Ve, je, "≽", "\\succcurlyeq", true);
      Oe(Ee, Ve, je, "⋟", "\\curlyeqsucc", true);
      Oe(Ee, Ve, je, "≿", "\\succsim", true);
      Oe(Ee, Ve, je, "⪸", "\\succapprox", true);
      Oe(Ee, Ve, je, "⊳", "\\vartriangleright");
      Oe(Ee, Ve, je, "⊵", "\\trianglerighteq");
      Oe(Ee, Ve, je, "⊩", "\\Vdash", true);
      Oe(Ee, Ve, je, "∣", "\\shortmid");
      Oe(Ee, Ve, je, "∥", "\\shortparallel");
      Oe(Ee, Ve, je, "≬", "\\between", true);
      Oe(Ee, Ve, je, "⋔", "\\pitchfork", true);
      Oe(Ee, Ve, je, "∝", "\\varpropto");
      Oe(Ee, Ve, je, "◀", "\\blacktriangleleft");
      Oe(Ee, Ve, je, "∴", "\\therefore", true);
      Oe(Ee, Ve, je, "∍", "\\backepsilon");
      Oe(Ee, Ve, je, "▶", "\\blacktriangleright");
      Oe(Ee, Ve, je, "∵", "\\because", true);
      Oe(Ee, Ve, je, "⋘", "\\llless");
      Oe(Ee, Ve, je, "⋙", "\\gggtr");
      Oe(Ee, Ve, Fe, "⊲", "\\lhd");
      Oe(Ee, Ve, Fe, "⊳", "\\rhd");
      Oe(Ee, Ve, je, "≂", "\\eqsim", true);
      Oe(Ee, De, je, "⋈", "\\Join");
      Oe(Ee, Ve, je, "≑", "\\Doteq", true);
      Oe(Ee, Ve, Fe, "∔", "\\dotplus", true);
      Oe(Ee, Ve, Fe, "∖", "\\smallsetminus");
      Oe(Ee, Ve, Fe, "⋒", "\\Cap", true);
      Oe(Ee, Ve, Fe, "⋓", "\\Cup", true);
      Oe(Ee, Ve, Fe, "⩞", "\\doublebarwedge", true);
      Oe(Ee, Ve, Fe, "⊟", "\\boxminus", true);
      Oe(Ee, Ve, Fe, "⊞", "\\boxplus", true);
      Oe(Ee, Ve, Fe, "⋇", "\\divideontimes", true);
      Oe(Ee, Ve, Fe, "⋉", "\\ltimes", true);
      Oe(Ee, Ve, Fe, "⋊", "\\rtimes", true);
      Oe(Ee, Ve, Fe, "⋋", "\\leftthreetimes", true);
      Oe(Ee, Ve, Fe, "⋌", "\\rightthreetimes", true);
      Oe(Ee, Ve, Fe, "⋏", "\\curlywedge", true);
      Oe(Ee, Ve, Fe, "⋎", "\\curlyvee", true);
      Oe(Ee, Ve, Fe, "⊝", "\\circleddash", true);
      Oe(Ee, Ve, Fe, "⊛", "\\circledast", true);
      Oe(Ee, Ve, Fe, "⋅", "\\centerdot");
      Oe(Ee, Ve, Fe, "⊺", "\\intercal", true);
      Oe(Ee, Ve, Fe, "⋒", "\\doublecap");
      Oe(Ee, Ve, Fe, "⋓", "\\doublecup");
      Oe(Ee, Ve, Fe, "⊠", "\\boxtimes", true);
      Oe(Ee, Ve, je, "⇢", "\\dashrightarrow", true);
      Oe(Ee, Ve, je, "⇠", "\\dashleftarrow", true);
      Oe(Ee, Ve, je, "⇇", "\\leftleftarrows", true);
      Oe(Ee, Ve, je, "⇆", "\\leftrightarrows", true);
      Oe(Ee, Ve, je, "⇚", "\\Lleftarrow", true);
      Oe(Ee, Ve, je, "↞", "\\twoheadleftarrow", true);
      Oe(Ee, Ve, je, "↢", "\\leftarrowtail", true);
      Oe(Ee, Ve, je, "↫", "\\looparrowleft", true);
      Oe(Ee, Ve, je, "⇋", "\\leftrightharpoons", true);
      Oe(Ee, Ve, je, "↶", "\\curvearrowleft", true);
      Oe(Ee, Ve, je, "↺", "\\circlearrowleft", true);
      Oe(Ee, Ve, je, "↰", "\\Lsh", true);
      Oe(Ee, Ve, je, "⇈", "\\upuparrows", true);
      Oe(Ee, Ve, je, "↿", "\\upharpoonleft", true);
      Oe(Ee, Ve, je, "⇃", "\\downharpoonleft", true);
      Oe(Ee, De, je, "⊶", "\\origof", true);
      Oe(Ee, De, je, "⊷", "\\imageof", true);
      Oe(Ee, Ve, je, "⊸", "\\multimap", true);
      Oe(Ee, Ve, je, "↭", "\\leftrightsquigarrow", true);
      Oe(Ee, Ve, je, "⇉", "\\rightrightarrows", true);
      Oe(Ee, Ve, je, "⇄", "\\rightleftarrows", true);
      Oe(Ee, Ve, je, "↠", "\\twoheadrightarrow", true);
      Oe(Ee, Ve, je, "↣", "\\rightarrowtail", true);
      Oe(Ee, Ve, je, "↬", "\\looparrowright", true);
      Oe(Ee, Ve, je, "↷", "\\curvearrowright", true);
      Oe(Ee, Ve, je, "↻", "\\circlearrowright", true);
      Oe(Ee, Ve, je, "↱", "\\Rsh", true);
      Oe(Ee, Ve, je, "⇊", "\\downdownarrows", true);
      Oe(Ee, Ve, je, "↾", "\\upharpoonright", true);
      Oe(Ee, Ve, je, "⇂", "\\downharpoonright", true);
      Oe(Ee, Ve, je, "⇝", "\\rightsquigarrow", true);
      Oe(Ee, Ve, je, "⇝", "\\leadsto");
      Oe(Ee, Ve, je, "⇛", "\\Rrightarrow", true);
      Oe(Ee, Ve, je, "↾", "\\restriction");
      Oe(Ee, De, Ze, "‘", "`");
      Oe(Ee, De, Ze, "$", "\\$");
      Oe(Le, De, Ze, "$", "\\$");
      Oe(Le, De, Ze, "$", "\\textdollar");
      Oe(Ee, De, Ze, "%", "\\%");
      Oe(Le, De, Ze, "%", "\\%");
      Oe(Ee, De, Ze, "_", "\\_");
      Oe(Le, De, Ze, "_", "\\_");
      Oe(Le, De, Ze, "_", "\\textunderscore");
      Oe(Ee, De, Ze, "∠", "\\angle", true);
      Oe(Ee, De, Ze, "∞", "\\infty", true);
      Oe(Ee, De, Ze, "′", "\\prime");
      Oe(Ee, De, Ze, "△", "\\triangle");
      Oe(Ee, De, Ze, "Γ", "\\Gamma", true);
      Oe(Ee, De, Ze, "Δ", "\\Delta", true);
      Oe(Ee, De, Ze, "Θ", "\\Theta", true);
      Oe(Ee, De, Ze, "Λ", "\\Lambda", true);
      Oe(Ee, De, Ze, "Ξ", "\\Xi", true);
      Oe(Ee, De, Ze, "Π", "\\Pi", true);
      Oe(Ee, De, Ze, "Σ", "\\Sigma", true);
      Oe(Ee, De, Ze, "Υ", "\\Upsilon", true);
      Oe(Ee, De, Ze, "Φ", "\\Phi", true);
      Oe(Ee, De, Ze, "Ψ", "\\Psi", true);
      Oe(Ee, De, Ze, "Ω", "\\Omega", true);
      Oe(Ee, De, Ze, "A", "Α");
      Oe(Ee, De, Ze, "B", "Β");
      Oe(Ee, De, Ze, "E", "Ε");
      Oe(Ee, De, Ze, "Z", "Ζ");
      Oe(Ee, De, Ze, "H", "Η");
      Oe(Ee, De, Ze, "I", "Ι");
      Oe(Ee, De, Ze, "K", "Κ");
      Oe(Ee, De, Ze, "M", "Μ");
      Oe(Ee, De, Ze, "N", "Ν");
      Oe(Ee, De, Ze, "O", "Ο");
      Oe(Ee, De, Ze, "P", "Ρ");
      Oe(Ee, De, Ze, "T", "Τ");
      Oe(Ee, De, Ze, "X", "Χ");
      Oe(Ee, De, Ze, "¬", "\\neg", true);
      Oe(Ee, De, Ze, "¬", "\\lnot");
      Oe(Ee, De, Ze, "⊤", "\\top");
      Oe(Ee, De, Ze, "⊥", "\\bot");
      Oe(Ee, De, Ze, "∅", "\\emptyset");
      Oe(Ee, Ve, Ze, "∅", "\\varnothing");
      Oe(Ee, De, Ye, "α", "\\alpha", true);
      Oe(Ee, De, Ye, "β", "\\beta", true);
      Oe(Ee, De, Ye, "γ", "\\gamma", true);
      Oe(Ee, De, Ye, "δ", "\\delta", true);
      Oe(Ee, De, Ye, "ϵ", "\\epsilon", true);
      Oe(Ee, De, Ye, "ζ", "\\zeta", true);
      Oe(Ee, De, Ye, "η", "\\eta", true);
      Oe(Ee, De, Ye, "θ", "\\theta", true);
      Oe(Ee, De, Ye, "ι", "\\iota", true);
      Oe(Ee, De, Ye, "κ", "\\kappa", true);
      Oe(Ee, De, Ye, "λ", "\\lambda", true);
      Oe(Ee, De, Ye, "μ", "\\mu", true);
      Oe(Ee, De, Ye, "ν", "\\nu", true);
      Oe(Ee, De, Ye, "ξ", "\\xi", true);
      Oe(Ee, De, Ye, "ο", "\\omicron", true);
      Oe(Ee, De, Ye, "π", "\\pi", true);
      Oe(Ee, De, Ye, "ρ", "\\rho", true);
      Oe(Ee, De, Ye, "σ", "\\sigma", true);
      Oe(Ee, De, Ye, "τ", "\\tau", true);
      Oe(Ee, De, Ye, "υ", "\\upsilon", true);
      Oe(Ee, De, Ye, "ϕ", "\\phi", true);
      Oe(Ee, De, Ye, "χ", "\\chi", true);
      Oe(Ee, De, Ye, "ψ", "\\psi", true);
      Oe(Ee, De, Ye, "ω", "\\omega", true);
      Oe(Ee, De, Ye, "ε", "\\varepsilon", true);
      Oe(Ee, De, Ye, "ϑ", "\\vartheta", true);
      Oe(Ee, De, Ye, "ϖ", "\\varpi", true);
      Oe(Ee, De, Ye, "ϱ", "\\varrho", true);
      Oe(Ee, De, Ye, "ς", "\\varsigma", true);
      Oe(Ee, De, Ye, "φ", "\\varphi", true);
      Oe(Ee, De, Fe, "∗", "*", true);
      Oe(Ee, De, Fe, "+", "+");
      Oe(Ee, De, Fe, "−", "-", true);
      Oe(Ee, De, Fe, "⋅", "\\cdot", true);
      Oe(Ee, De, Fe, "∘", "\\circ", true);
      Oe(Ee, De, Fe, "÷", "\\div", true);
      Oe(Ee, De, Fe, "±", "\\pm", true);
      Oe(Ee, De, Fe, "×", "\\times", true);
      Oe(Ee, De, Fe, "∩", "\\cap", true);
      Oe(Ee, De, Fe, "∪", "\\cup", true);
      Oe(Ee, De, Fe, "∖", "\\setminus", true);
      Oe(Ee, De, Fe, "∧", "\\land");
      Oe(Ee, De, Fe, "∨", "\\lor");
      Oe(Ee, De, Fe, "∧", "\\wedge", true);
      Oe(Ee, De, Fe, "∨", "\\vee", true);
      Oe(Ee, De, Ze, "√", "\\surd");
      Oe(Ee, De, We, "⟨", "\\langle", true);
      Oe(Ee, De, We, "∣", "\\lvert");
      Oe(Ee, De, We, "∥", "\\lVert");
      Oe(Ee, De, Ge, "?", "?");
      Oe(Ee, De, Ge, "!", "!");
      Oe(Ee, De, Ge, "⟩", "\\rangle", true);
      Oe(Ee, De, Ge, "∣", "\\rvert");
      Oe(Ee, De, Ge, "∥", "\\rVert");
      Oe(Ee, De, je, "=", "=");
      Oe(Ee, De, je, ":", ":");
      Oe(Ee, De, je, "≈", "\\approx", true);
      Oe(Ee, De, je, "≅", "\\cong", true);
      Oe(Ee, De, je, "≥", "\\ge");
      Oe(Ee, De, je, "≥", "\\geq", true);
      Oe(Ee, De, je, "←", "\\gets");
      Oe(Ee, De, je, ">", "\\gt", true);
      Oe(Ee, De, je, "∈", "\\in", true);
      Oe(Ee, De, je, "", "\\@not");
      Oe(Ee, De, je, "⊂", "\\subset", true);
      Oe(Ee, De, je, "⊃", "\\supset", true);
      Oe(Ee, De, je, "⊆", "\\subseteq", true);
      Oe(Ee, De, je, "⊇", "\\supseteq", true);
      Oe(Ee, Ve, je, "⊈", "\\nsubseteq", true);
      Oe(Ee, Ve, je, "⊉", "\\nsupseteq", true);
      Oe(Ee, De, je, "⊨", "\\models");
      Oe(Ee, De, je, "←", "\\leftarrow", true);
      Oe(Ee, De, je, "≤", "\\le");
      Oe(Ee, De, je, "≤", "\\leq", true);
      Oe(Ee, De, je, "<", "\\lt", true);
      Oe(Ee, De, je, "→", "\\rightarrow", true);
      Oe(Ee, De, je, "→", "\\to");
      Oe(Ee, Ve, je, "≱", "\\ngeq", true);
      Oe(Ee, Ve, je, "≰", "\\nleq", true);
      Oe(Ee, De, $e, " ", "\\ ");
      Oe(Ee, De, $e, " ", "\\space");
      Oe(Ee, De, $e, " ", "\\nobreakspace");
      Oe(Le, De, $e, " ", "\\ ");
      Oe(Le, De, $e, " ", " ");
      Oe(Le, De, $e, " ", "\\space");
      Oe(Le, De, $e, " ", "\\nobreakspace");
      Oe(Ee, De, $e, null, "\\nobreak");
      Oe(Ee, De, $e, null, "\\allowbreak");
      Oe(Ee, De, _e, ",", ",");
      Oe(Ee, De, _e, ";", ";");
      Oe(Ee, Ve, Fe, "⊼", "\\barwedge", true);
      Oe(Ee, Ve, Fe, "⊻", "\\veebar", true);
      Oe(Ee, De, Fe, "⊙", "\\odot", true);
      Oe(Ee, De, Fe, "⊕", "\\oplus", true);
      Oe(Ee, De, Fe, "⊗", "\\otimes", true);
      Oe(Ee, De, Ze, "∂", "\\partial", true);
      Oe(Ee, De, Fe, "⊘", "\\oslash", true);
      Oe(Ee, Ve, Fe, "⊚", "\\circledcirc", true);
      Oe(Ee, Ve, Fe, "⊡", "\\boxdot", true);
      Oe(Ee, De, Fe, "△", "\\bigtriangleup");
      Oe(Ee, De, Fe, "▽", "\\bigtriangledown");
      Oe(Ee, De, Fe, "†", "\\dagger");
      Oe(Ee, De, Fe, "⋄", "\\diamond");
      Oe(Ee, De, Fe, "⋆", "\\star");
      Oe(Ee, De, Fe, "◃", "\\triangleleft");
      Oe(Ee, De, Fe, "▹", "\\triangleright");
      Oe(Ee, De, We, "{", "\\{");
      Oe(Le, De, Ze, "{", "\\{");
      Oe(Le, De, Ze, "{", "\\textbraceleft");
      Oe(Ee, De, Ge, "}", "\\}");
      Oe(Le, De, Ze, "}", "\\}");
      Oe(Le, De, Ze, "}", "\\textbraceright");
      Oe(Ee, De, We, "{", "\\lbrace");
      Oe(Ee, De, Ge, "}", "\\rbrace");
      Oe(Ee, De, We, "[", "\\lbrack", true);
      Oe(Le, De, Ze, "[", "\\lbrack", true);
      Oe(Ee, De, Ge, "]", "\\rbrack", true);
      Oe(Le, De, Ze, "]", "\\rbrack", true);
      Oe(Ee, De, We, "(", "\\lparen", true);
      Oe(Ee, De, Ge, ")", "\\rparen", true);
      Oe(Le, De, Ze, "<", "\\textless", true);
      Oe(Le, De, Ze, ">", "\\textgreater", true);
      Oe(Ee, De, We, "⌊", "\\lfloor", true);
      Oe(Ee, De, Ge, "⌋", "\\rfloor", true);
      Oe(Ee, De, We, "⌈", "\\lceil", true);
      Oe(Ee, De, Ge, "⌉", "\\rceil", true);
      Oe(Ee, De, Ze, "\\", "\\backslash");
      Oe(Ee, De, Ze, "∣", "|");
      Oe(Ee, De, Ze, "∣", "\\vert");
      Oe(Le, De, Ze, "|", "\\textbar", true);
      Oe(Ee, De, Ze, "∥", "\\|");
      Oe(Ee, De, Ze, "∥", "\\Vert");
      Oe(Le, De, Ze, "∥", "\\textbardbl");
      Oe(Le, De, Ze, "~", "\\textasciitilde");
      Oe(Le, De, Ze, "\\", "\\textbackslash");
      Oe(Le, De, Ze, "^", "\\textasciicircum");
      Oe(Ee, De, je, "↑", "\\uparrow", true);
      Oe(Ee, De, je, "⇑", "\\Uparrow", true);
      Oe(Ee, De, je, "↓", "\\downarrow", true);
      Oe(Ee, De, je, "⇓", "\\Downarrow", true);
      Oe(Ee, De, je, "↕", "\\updownarrow", true);
      Oe(Ee, De, je, "⇕", "\\Updownarrow", true);
      Oe(Ee, De, Xe, "∐", "\\coprod");
      Oe(Ee, De, Xe, "⋁", "\\bigvee");
      Oe(Ee, De, Xe, "⋀", "\\bigwedge");
      Oe(Ee, De, Xe, "⨄", "\\biguplus");
      Oe(Ee, De, Xe, "⋂", "\\bigcap");
      Oe(Ee, De, Xe, "⋃", "\\bigcup");
      Oe(Ee, De, Xe, "∫", "\\int");
      Oe(Ee, De, Xe, "∫", "\\intop");
      Oe(Ee, De, Xe, "∬", "\\iint");
      Oe(Ee, De, Xe, "∭", "\\iiint");
      Oe(Ee, De, Xe, "∏", "\\prod");
      Oe(Ee, De, Xe, "∑", "\\sum");
      Oe(Ee, De, Xe, "⨂", "\\bigotimes");
      Oe(Ee, De, Xe, "⨁", "\\bigoplus");
      Oe(Ee, De, Xe, "⨀", "\\bigodot");
      Oe(Ee, De, Xe, "∮", "\\oint");
      Oe(Ee, De, Xe, "∯", "\\oiint");
      Oe(Ee, De, Xe, "∰", "\\oiiint");
      Oe(Ee, De, Xe, "⨆", "\\bigsqcup");
      Oe(Ee, De, Xe, "∫", "\\smallint");
      Oe(Le, De, Ue, "…", "\\textellipsis");
      Oe(Ee, De, Ue, "…", "\\mathellipsis");
      Oe(Le, De, Ue, "…", "\\ldots", true);
      Oe(Ee, De, Ue, "…", "\\ldots", true);
      Oe(Ee, De, Ue, "⋯", "\\@cdots", true);
      Oe(Ee, De, Ue, "⋱", "\\ddots", true);
      Oe(Ee, De, Ze, "⋮", "\\varvdots");
      Oe(Le, De, Ze, "⋮", "\\varvdots");
      Oe(Ee, De, Pe, "ˊ", "\\acute");
      Oe(Ee, De, Pe, "ˋ", "\\grave");
      Oe(Ee, De, Pe, "¨", "\\ddot");
      Oe(Ee, De, Pe, "~", "\\tilde");
      Oe(Ee, De, Pe, "ˉ", "\\bar");
      Oe(Ee, De, Pe, "˘", "\\breve");
      Oe(Ee, De, Pe, "ˇ", "\\check");
      Oe(Ee, De, Pe, "^", "\\hat");
      Oe(Ee, De, Pe, "⃗", "\\vec");
      Oe(Ee, De, Pe, "˙", "\\dot");
      Oe(Ee, De, Pe, "˚", "\\mathring");
      Oe(Ee, De, Ye, "", "\\@imath");
      Oe(Ee, De, Ye, "", "\\@jmath");
      Oe(Ee, De, Ze, "ı", "ı");
      Oe(Ee, De, Ze, "ȷ", "ȷ");
      Oe(Le, De, Ze, "ı", "\\i", true);
      Oe(Le, De, Ze, "ȷ", "\\j", true);
      Oe(Le, De, Ze, "ß", "\\ss", true);
      Oe(Le, De, Ze, "æ", "\\ae", true);
      Oe(Le, De, Ze, "œ", "\\oe", true);
      Oe(Le, De, Ze, "ø", "\\o", true);
      Oe(Le, De, Ze, "Æ", "\\AE", true);
      Oe(Le, De, Ze, "Œ", "\\OE", true);
      Oe(Le, De, Ze, "Ø", "\\O", true);
      Oe(Le, De, Pe, "ˊ", "\\'");
      Oe(Le, De, Pe, "ˋ", "\\`");
      Oe(Le, De, Pe, "ˆ", "\\^");
      Oe(Le, De, Pe, "˜", "\\~");
      Oe(Le, De, Pe, "ˉ", "\\=");
      Oe(Le, De, Pe, "˘", "\\u");
      Oe(Le, De, Pe, "˙", "\\.");
      Oe(Le, De, Pe, "¸", "\\c");
      Oe(Le, De, Pe, "˚", "\\r");
      Oe(Le, De, Pe, "ˇ", "\\v");
      Oe(Le, De, Pe, "¨", '\\"');
      Oe(Le, De, Pe, "˝", "\\H");
      Oe(Le, De, Pe, "◯", "\\textcircled");
      var Ke = { "--": true, "---": true, "``": true, "''": true };
      Oe(Le, De, Ze, "–", "--", true);
      Oe(Le, De, Ze, "–", "\\textendash");
      Oe(Le, De, Ze, "—", "---", true);
      Oe(Le, De, Ze, "—", "\\textemdash");
      Oe(Le, De, Ze, "‘", "`", true);
      Oe(Le, De, Ze, "‘", "\\textquoteleft");
      Oe(Le, De, Ze, "’", "'", true);
      Oe(Le, De, Ze, "’", "\\textquoteright");
      Oe(Le, De, Ze, "“", "``", true);
      Oe(Le, De, Ze, "“", "\\textquotedblleft");
      Oe(Le, De, Ze, "”", "''", true);
      Oe(Le, De, Ze, "”", "\\textquotedblright");
      Oe(Ee, De, Ze, "°", "\\degree", true);
      Oe(Le, De, Ze, "°", "\\degree");
      Oe(Le, De, Ze, "°", "\\textdegree", true);
      Oe(Ee, De, Ze, "£", "\\pounds");
      Oe(Ee, De, Ze, "£", "\\mathsterling", true);
      Oe(Le, De, Ze, "£", "\\pounds");
      Oe(Le, De, Ze, "£", "\\textsterling", true);
      Oe(Ee, Ve, Ze, "✠", "\\maltese");
      Oe(Le, Ve, Ze, "✠", "\\maltese");
      var Je = '0123456789/@."';
      for (var Qe = 0; Qe < Je.length; Qe++) {
        var et = Je.charAt(Qe);
        Oe(Ee, De, Ze, et, et);
      }
      var tt = '0123456789!@*()-=+";:?/.,';
      for (var rt = 0; rt < tt.length; rt++) {
        var at = tt.charAt(rt);
        Oe(Le, De, Ze, at, at);
      }
      var it = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var nt = 0; nt < it.length; nt++) {
        var st = it.charAt(nt);
        Oe(Ee, De, Ye, st, st);
        Oe(Le, De, Ze, st, st);
      }
      Oe(Ee, Ve, Ze, "C", "ℂ");
      Oe(Le, Ve, Ze, "C", "ℂ");
      Oe(Ee, Ve, Ze, "H", "ℍ");
      Oe(Le, Ve, Ze, "H", "ℍ");
      Oe(Ee, Ve, Ze, "N", "ℕ");
      Oe(Le, Ve, Ze, "N", "ℕ");
      Oe(Ee, Ve, Ze, "P", "ℙ");
      Oe(Le, Ve, Ze, "P", "ℙ");
      Oe(Ee, Ve, Ze, "Q", "ℚ");
      Oe(Le, Ve, Ze, "Q", "ℚ");
      Oe(Ee, Ve, Ze, "R", "ℝ");
      Oe(Le, Ve, Ze, "R", "ℝ");
      Oe(Ee, Ve, Ze, "Z", "ℤ");
      Oe(Le, Ve, Ze, "Z", "ℤ");
      Oe(Ee, De, Ye, "h", "ℎ");
      Oe(Le, De, Ye, "h", "ℎ");
      var ot = "";
      for (var lt = 0; lt < it.length; lt++) {
        var ht = it.charAt(lt);
        ot = String.fromCharCode(55349, 56320 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56372 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56424 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56580 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56684 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56736 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56788 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56840 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        ot = String.fromCharCode(55349, 56944 + lt);
        Oe(Ee, De, Ye, ht, ot);
        Oe(Le, De, Ze, ht, ot);
        if (lt < 26) {
          ot = String.fromCharCode(55349, 56632 + lt);
          Oe(Ee, De, Ye, ht, ot);
          Oe(Le, De, Ze, ht, ot);
          ot = String.fromCharCode(55349, 56476 + lt);
          Oe(Ee, De, Ye, ht, ot);
          Oe(Le, De, Ze, ht, ot);
        }
      }
      ot = String.fromCharCode(55349, 56668);
      Oe(Ee, De, Ye, "k", ot);
      Oe(Le, De, Ze, "k", ot);
      for (var ut = 0; ut < 10; ut++) {
        var mt = ut.toString();
        ot = String.fromCharCode(55349, 57294 + ut);
        Oe(Ee, De, Ye, mt, ot);
        Oe(Le, De, Ze, mt, ot);
        ot = String.fromCharCode(55349, 57314 + ut);
        Oe(Ee, De, Ye, mt, ot);
        Oe(Le, De, Ze, mt, ot);
        ot = String.fromCharCode(55349, 57324 + ut);
        Oe(Ee, De, Ye, mt, ot);
        Oe(Le, De, Ze, mt, ot);
        ot = String.fromCharCode(55349, 57334 + ut);
        Oe(Ee, De, Ye, mt, ot);
        Oe(Le, De, Ze, mt, ot);
      }
      var ct = "ÐÞþ";
      for (var pt = 0; pt < ct.length; pt++) {
        var dt = ct.charAt(pt);
        Oe(Ee, De, Ye, dt, dt);
        Oe(Le, De, Ze, dt, dt);
      }
      var ft = [
        ["mathbf", "textbf", "Main-Bold"],
        ["mathbf", "textbf", "Main-Bold"],
        ["mathnormal", "textit", "Math-Italic"],
        ["mathnormal", "textit", "Math-Italic"],
        ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
        ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
        ["mathscr", "textscr", "Script-Regular"],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["mathfrak", "textfrak", "Fraktur-Regular"],
        ["mathfrak", "textfrak", "Fraktur-Regular"],
        ["mathbb", "textbb", "AMS-Regular"],
        ["mathbb", "textbb", "AMS-Regular"],
        ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
        ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathitsf", "textitsf", "SansSerif-Italic"],
        ["mathitsf", "textitsf", "SansSerif-Italic"],
        ["", "", ""],
        ["", "", ""],
        ["mathtt", "texttt", "Typewriter-Regular"],
        ["mathtt", "texttt", "Typewriter-Regular"],
      ];
      var vt = [
        ["mathbf", "textbf", "Main-Bold"],
        ["", "", ""],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathtt", "texttt", "Typewriter-Regular"],
      ];
      var gt = function e(t, r) {
        var a = t.charCodeAt(0);
        var i = t.charCodeAt(1);
        var s = (a - 55296) * 1024 + (i - 56320) + 65536;
        var o = r === "math" ? 0 : 1;
        if (119808 <= s && s < 120484) {
          var l = Math.floor((s - 119808) / 26);
          return [ft[l][2], ft[l][o]];
        } else if (120782 <= s && s <= 120831) {
          var h = Math.floor((s - 120782) / 10);
          return [vt[h][2], vt[h][o]];
        } else if (s === 120485 || s === 120486) {
          return [ft[0][2], ft[0][o]];
        } else if (120486 < s && s < 120782) {
          return ["", ""];
        } else {
          throw new n("Unsupported character: " + t);
        }
      };
      var bt = function e(t, r, a) {
        if (He[a][t] && He[a][t].replace) {
          t = He[a][t].replace;
        }
        return { value: t, metrics: ne(t, r, a) };
      };
      var yt = function e(t, r, a, i, n) {
        var s = bt(t, r, a);
        var o = s.metrics;
        t = s.value;
        var l;
        if (o) {
          var h = o.italic;
          if (a === "text" || (i && i.font === "mathit")) {
            h = 0;
          }
          l = new Ae(t, o.height, o.depth, h, o.skew, o.width, n);
        } else {
          typeof console !== "undefined" && console.warn("No character metrics " + ("for '" + t + "' in style '" + r + "' and mode '" + a + "'"));
          l = new Ae(t, 0, 0, 0, 0, 0, n);
        }
        if (i) {
          l.maxFontSize = i.sizeMultiplier;
          if (i.style.isTight()) {
            l.classes.push("mtight");
          }
          var u = i.getColor();
          if (u) {
            l.style.color = u;
          }
        }
        return l;
      };
      var xt = function e(t, r, a, i) {
        if (i === void 0) {
          i = [];
        }
        if (a.font === "boldsymbol" && bt(t, "Main-Bold", r).metrics) {
          return yt(t, "Main-Bold", r, a, i.concat(["mathbf"]));
        } else if (t === "\\" || He[r][t].font === "main") {
          return yt(t, "Main-Regular", r, a, i);
        } else {
          return yt(t, "AMS-Regular", r, a, i.concat(["amsrm"]));
        }
      };
      var wt = function e(t, r, a, i, n) {
        if (n !== "textord" && bt(t, "Math-BoldItalic", r).metrics) {
          return { fontName: "Math-BoldItalic", fontClass: "boldsymbol" };
        } else {
          return { fontName: "Main-Bold", fontClass: "mathbf" };
        }
      };
      var kt = function e(t, r, a) {
        var i = t.mode;
        var n = t.text;
        var s = ["mord"];
        var o = i === "math" || (i === "text" && r.font);
        var l = o ? r.font : r.fontFamily;
        var h = "";
        var u = "";
        if (n.charCodeAt(0) === 55349) {
          [h, u] = gt(n, i);
        }
        if (h.length > 0) {
          return yt(n, h, i, r, s.concat(u));
        } else if (l) {
          var m;
          var c;
          if (l === "boldsymbol") {
            var p = wt(n, i, r, s, a);
            m = p.fontName;
            c = [p.fontClass];
          } else if (o) {
            m = Et[l].fontName;
            c = [l];
          } else {
            m = Ot(l, r.fontWeight, r.fontShape);
            c = [l, r.fontWeight, r.fontShape];
          }
          if (bt(n, m, i).metrics) {
            return yt(n, m, i, r, s.concat(c));
          } else if (Ke.hasOwnProperty(n) && m.slice(0, 10) === "Typewriter") {
            var d = [];
            for (var f = 0; f < n.length; f++) {
              d.push(yt(n[f], m, i, r, s.concat(c)));
            }
            return Nt(d);
          }
        }
        if (a === "mathord") {
          return yt(n, "Math-Italic", i, r, s.concat(["mathnormal"]));
        } else if (a === "textord") {
          var v = He[i][n] && He[i][n].font;
          if (v === "ams") {
            var g = Ot("amsrm", r.fontWeight, r.fontShape);
            return yt(n, g, i, r, s.concat("amsrm", r.fontWeight, r.fontShape));
          } else if (v === "main" || !v) {
            var b = Ot("textrm", r.fontWeight, r.fontShape);
            return yt(n, b, i, r, s.concat(r.fontWeight, r.fontShape));
          } else {
            var y = Ot(v, r.fontWeight, r.fontShape);
            return yt(n, y, i, r, s.concat(y, r.fontWeight, r.fontShape));
          }
        } else {
          throw new Error("unexpected type: " + a + " in makeOrd");
        }
      };
      var St = (e, t) => {
        if (ge(e.classes) !== ge(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) {
          return false;
        }
        if (e.classes.length === 1) {
          var r = e.classes[0];
          if (r === "mbin" || r === "mord") {
            return false;
          }
        }
        for (var a in e.style) {
          if (e.style.hasOwnProperty(a) && e.style[a] !== t.style[a]) {
            return false;
          }
        }
        for (var i in t.style) {
          if (t.style.hasOwnProperty(i) && e.style[i] !== t.style[i]) {
            return false;
          }
        }
        return true;
      };
      var Mt = (e) => {
        for (var t = 0; t < e.length - 1; t++) {
          var r = e[t];
          var a = e[t + 1];
          if (r instanceof Ae && a instanceof Ae && St(r, a)) {
            r.text += a.text;
            r.height = Math.max(r.height, a.height);
            r.depth = Math.max(r.depth, a.depth);
            r.italic = a.italic;
            e.splice(t + 1, 1);
            t--;
          }
        }
        return e;
      };
      var zt = function e(t) {
        var r = 0;
        var a = 0;
        var i = 0;
        for (var n = 0; n < t.children.length; n++) {
          var s = t.children[n];
          if (s.height > r) {
            r = s.height;
          }
          if (s.depth > a) {
            a = s.depth;
          }
          if (s.maxFontSize > i) {
            i = s.maxFontSize;
          }
        }
        t.height = r;
        t.depth = a;
        t.maxFontSize = i;
      };
      var At = function e(t, r, a, i) {
        var n = new ke(t, r, a, i);
        zt(n);
        return n;
      };
      var Tt = (e, t, r, a) => new ke(e, t, r, a);
      var Bt = function e(t, r, a) {
        var i = At([t], [], r);
        i.height = Math.max(a || r.fontMetrics().defaultRuleThickness, r.minRuleThickness);
        i.style.borderBottomWidth = ve(i.height);
        i.maxFontSize = 1;
        return i;
      };
      var Ct = function e(t, r, a, i) {
        var n = new Se(t, r, a, i);
        zt(n);
        return n;
      };
      var Nt = function e(t) {
        var r = new ee(t);
        zt(r);
        return r;
      };
      var qt = function e(t, r) {
        if (t instanceof ee) {
          return At([], [t], r);
        }
        return t;
      };
      var It = function e(t) {
        if (t.positionType === "individualShift") {
          var r = t.children;
          var a = [r[0]];
          var i = -r[0].shift - r[0].elem.depth;
          var n = i;
          for (var s = 1; s < r.length; s++) {
            var o = -r[s].shift - n - r[s].elem.depth;
            var l = o - (r[s - 1].elem.height + r[s - 1].elem.depth);
            n = n + o;
            a.push({ type: "kern", size: l });
            a.push(r[s]);
          }
          return { children: a, depth: i };
        }
        var h;
        if (t.positionType === "top") {
          var u = t.positionData;
          for (var m = 0; m < t.children.length; m++) {
            var c = t.children[m];
            u -= c.type === "kern" ? c.size : c.elem.height + c.elem.depth;
          }
          h = u;
        } else if (t.positionType === "bottom") {
          h = -t.positionData;
        } else {
          var p = t.children[0];
          if (p.type !== "elem") {
            throw new Error('First child must have type "elem".');
          }
          if (t.positionType === "shift") {
            h = -p.elem.depth - t.positionData;
          } else if (t.positionType === "firstBaseline") {
            h = -p.elem.depth;
          } else {
            throw new Error("Invalid positionType " + t.positionType + ".");
          }
        }
        return { children: t.children, depth: h };
      };
      var Rt = function e(t, r) {
        var { children: a, depth: i } = It(t);
        var n = 0;
        for (var s = 0; s < a.length; s++) {
          var o = a[s];
          if (o.type === "elem") {
            var l = o.elem;
            n = Math.max(n, l.maxFontSize, l.height);
          }
        }
        n += 2;
        var h = At(["pstrut"], []);
        h.style.height = ve(n);
        var u = [];
        var m = i;
        var c = i;
        var p = i;
        for (var d = 0; d < a.length; d++) {
          var f = a[d];
          if (f.type === "kern") {
            p += f.size;
          } else {
            var v = f.elem;
            var g = f.wrapperClasses || [];
            var b = f.wrapperStyle || {};
            var y = At(g, [h, v], undefined, b);
            y.style.top = ve(-n - p - v.depth);
            if (f.marginLeft) {
              y.style.marginLeft = f.marginLeft;
            }
            if (f.marginRight) {
              y.style.marginRight = f.marginRight;
            }
            u.push(y);
            p += v.height + v.depth;
          }
          m = Math.min(m, p);
          c = Math.max(c, p);
        }
        var x = At(["vlist"], u);
        x.style.height = ve(c);
        var w;
        if (m < 0) {
          var k = At([], []);
          var S = At(["vlist"], [k]);
          S.style.height = ve(-m);
          var M = At(["vlist-s"], [new Ae("​")]);
          w = [At(["vlist-r"], [x, M]), At(["vlist-r"], [S])];
        } else {
          w = [At(["vlist-r"], [x])];
        }
        var z = At(["vlist-t"], w);
        if (w.length === 2) {
          z.classes.push("vlist-t2");
        }
        z.height = c;
        z.depth = -m;
        return z;
      };
      var Ht = (e, t) => {
        var r = At(["mspace"], [], t);
        var a = fe(e, t);
        r.style.marginRight = ve(a);
        return r;
      };
      var Ot = function e(t, r, a) {
        var i = "";
        switch (t) {
          case "amsrm":
            i = "AMS";
            break;
          case "textrm":
            i = "Main";
            break;
          case "textsf":
            i = "SansSerif";
            break;
          case "texttt":
            i = "Typewriter";
            break;
          default:
            i = t;
        }
        var n;
        if (r === "textbf" && a === "textit") {
          n = "BoldItalic";
        } else if (r === "textbf") {
          n = "Bold";
        } else if (r === "textit") {
          n = "Italic";
        } else {
          n = "Regular";
        }
        return i + "-" + n;
      };
      var Et = {
        mathbf: { variant: "bold", fontName: "Main-Bold" },
        mathrm: { variant: "normal", fontName: "Main-Regular" },
        textit: { variant: "italic", fontName: "Main-Italic" },
        mathit: { variant: "italic", fontName: "Main-Italic" },
        mathnormal: { variant: "italic", fontName: "Math-Italic" },
        mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" },
        mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
        mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
        mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
        mathscr: { variant: "script", fontName: "Script-Regular" },
        mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
        mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
      };
      var Lt = {
        vec: ["vec", 0.471, 0.714],
        oiintSize1: ["oiintSize1", 0.957, 0.499],
        oiintSize2: ["oiintSize2", 1.472, 0.659],
        oiiintSize1: ["oiiintSize1", 1.304, 0.499],
        oiiintSize2: ["oiiintSize2", 1.98, 0.659],
      };
      var Dt = function e(t, r) {
        var [a, i, n] = Lt[t];
        var s = new Be(a);
        var o = new Te([s], {
          width: ve(i),
          height: ve(n),
          style: "width:" + ve(i),
          viewBox: "0 0 " + 1e3 * i + " " + 1e3 * n,
          preserveAspectRatio: "xMinYMin",
        });
        var l = Tt(["overlay"], [o], r);
        l.height = n;
        l.style.height = ve(n);
        l.style.width = ve(i);
        return l;
      };
      var Vt = {
        fontMap: Et,
        makeSymbol: yt,
        mathsym: xt,
        makeSpan: At,
        makeSvgSpan: Tt,
        makeLineSpan: Bt,
        makeAnchor: Ct,
        makeFragment: Nt,
        wrapFragment: qt,
        makeVList: Rt,
        makeOrd: kt,
        makeGlue: Ht,
        staticSvg: Dt,
        svgData: Lt,
        tryCombineChars: Mt,
      };
      var Pt = { number: 3, unit: "mu" };
      var Ft = { number: 4, unit: "mu" };
      var Gt = { number: 5, unit: "mu" };
      var Ut = {
        mord: { mop: Pt, mbin: Ft, mrel: Gt, minner: Pt },
        mop: { mord: Pt, mop: Pt, mrel: Gt, minner: Pt },
        mbin: { mord: Ft, mop: Ft, mopen: Ft, minner: Ft },
        mrel: { mord: Gt, mop: Gt, mopen: Gt, minner: Gt },
        mopen: {},
        mclose: { mop: Pt, mbin: Ft, mrel: Gt, minner: Pt },
        mpunct: { mord: Pt, mop: Pt, mrel: Gt, mopen: Pt, mclose: Pt, mpunct: Pt, minner: Pt },
        minner: { mord: Pt, mop: Pt, mbin: Ft, mrel: Gt, mopen: Pt, mpunct: Pt, minner: Pt },
      };
      var Yt = { mord: { mop: Pt }, mop: { mord: Pt, mop: Pt }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Pt }, mpunct: {}, minner: { mop: Pt } };
      var Xt = {};
      var Wt = {};
      var _t = {};
      function jt(e) {
        var { type: t, names: r, props: a, handler: i, htmlBuilder: n, mathmlBuilder: s } = e;
        var o = {
          type: t,
          numArgs: a.numArgs,
          argTypes: a.argTypes,
          allowedInArgument: !!a.allowedInArgument,
          allowedInText: !!a.allowedInText,
          allowedInMath: a.allowedInMath === undefined ? true : a.allowedInMath,
          numOptionalArgs: a.numOptionalArgs || 0,
          infix: !!a.infix,
          primitive: !!a.primitive,
          handler: i,
        };
        for (var l = 0; l < r.length; ++l) {
          Xt[r[l]] = o;
        }
        if (t) {
          if (n) {
            Wt[t] = n;
          }
          if (s) {
            _t[t] = s;
          }
        }
      }
      function $t(e) {
        var { type: t, htmlBuilder: r, mathmlBuilder: a } = e;
        jt({
          type: t,
          names: [],
          props: { numArgs: 0 },
          handler() {
            throw new Error("Should never be called.");
          },
          htmlBuilder: r,
          mathmlBuilder: a,
        });
      }
      var Zt = function e(t) {
        return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
      };
      var Kt = function e(t) {
        return t.type === "ordgroup" ? t.body : [t];
      };
      var Jt = Vt.makeSpan;
      var Qt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"];
      var er = ["rightmost", "mrel", "mclose", "mpunct"];
      var tr = { display: L.DISPLAY, text: L.TEXT, script: L.SCRIPT, scriptscript: L.SCRIPTSCRIPT };
      var rr = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" };
      var ar = function e(t, r, a, i) {
        if (i === void 0) {
          i = [null, null];
        }
        var n = [];
        for (var s = 0; s < t.length; s++) {
          var o = hr(t[s], r);
          if (o instanceof ee) {
            var l = o.children;
            n.push(...l);
          } else {
            n.push(o);
          }
        }
        Vt.tryCombineChars(n);
        if (!a) {
          return n;
        }
        var h = r;
        if (t.length === 1) {
          var u = t[0];
          if (u.type === "sizing") {
            h = r.havingSize(u.size);
          } else if (u.type === "styling") {
            h = r.havingStyle(tr[u.style]);
          }
        }
        var m = Jt([i[0] || "leftmost"], [], r);
        var c = Jt([i[1] || "rightmost"], [], r);
        var p = a === "root";
        ir(
          n,
          (e, t) => {
            var r = t.classes[0];
            var a = e.classes[0];
            if (r === "mbin" && g.contains(er, a)) {
              t.classes[0] = "mord";
            } else if (a === "mbin" && g.contains(Qt, r)) {
              e.classes[0] = "mord";
            }
          },
          { node: m },
          c,
          p
        );
        ir(
          n,
          (e, t) => {
            var r = or(t);
            var a = or(e);
            var i = r && a ? (e.hasClass("mtight") ? Yt[r][a] : Ut[r][a]) : null;
            if (i) {
              return Vt.makeGlue(i, h);
            }
          },
          { node: m },
          c,
          p
        );
        return n;
      };
      var ir = function e(t, r, a, i, n) {
        if (i) {
          t.push(i);
        }
        var s = 0;
        for (; s < t.length; s++) {
          var o = t[s];
          var l = nr(o);
          if (l) {
            e(l.children, r, a, null, n);
            continue;
          }
          var h = !o.hasClass("mspace");
          if (h) {
            var u = r(o, a.node);
            if (u) {
              if (a.insertAfter) {
                a.insertAfter(u);
              } else {
                t.unshift(u);
                s++;
              }
            }
          }
          if (h) {
            a.node = o;
          } else if (n && o.hasClass("newline")) {
            a.node = Jt(["leftmost"]);
          }
          a.insertAfter = ((e) => (r) => {
            t.splice(e + 1, 0, r);
            s++;
          })(s);
        }
        if (i) {
          t.pop();
        }
      };
      var nr = function e(t) {
        if (t instanceof ee || t instanceof Se || (t instanceof ke && t.hasClass("enclosing"))) {
          return t;
        }
        return null;
      };
      var sr = function e(t, r) {
        var a = nr(t);
        if (a) {
          var i = a.children;
          if (i.length) {
            if (r === "right") {
              return e(i[i.length - 1], "right");
            } else if (r === "left") {
              return e(i[0], "left");
            }
          }
        }
        return t;
      };
      var or = function e(t, r) {
        if (!t) {
          return null;
        }
        if (r) {
          t = sr(t, r);
        }
        return rr[t.classes[0]] || null;
      };
      var lr = function e(t, r) {
        var a = ["nulldelimiter"].concat(t.baseSizingClasses());
        return Jt(r.concat(a));
      };
      var hr = function e(t, r, a) {
        if (!t) {
          return Jt();
        }
        if (Wt[t.type]) {
          var i = Wt[t.type](t, r);
          if (a && r.size !== a.size) {
            i = Jt(r.sizingClasses(a), [i], r);
            var s = r.sizeMultiplier / a.sizeMultiplier;
            i.height *= s;
            i.depth *= s;
          }
          return i;
        } else {
          throw new n("Got group of unknown type: '" + t.type + "'");
        }
      };
      function ur(e, t) {
        var r = Jt(["base"], e, t);
        var a = Jt(["strut"]);
        a.style.height = ve(r.height + r.depth);
        if (r.depth) {
          a.style.verticalAlign = ve(-r.depth);
        }
        r.children.unshift(a);
        return r;
      }
      function mr(e, t) {
        var r = null;
        if (e.length === 1 && e[0].type === "tag") {
          r = e[0].tag;
          e = e[0].body;
        }
        var a = ar(e, t, "root");
        var i;
        if (a.length === 2 && a[1].hasClass("tag")) {
          i = a.pop();
        }
        var n = [];
        var s = [];
        for (var o = 0; o < a.length; o++) {
          s.push(a[o]);
          if (a[o].hasClass("mbin") || a[o].hasClass("mrel") || a[o].hasClass("allowbreak")) {
            var l = false;
            while (o < a.length - 1 && a[o + 1].hasClass("mspace") && !a[o + 1].hasClass("newline")) {
              o++;
              s.push(a[o]);
              if (a[o].hasClass("nobreak")) {
                l = true;
              }
            }
            if (!l) {
              n.push(ur(s, t));
              s = [];
            }
          } else if (a[o].hasClass("newline")) {
            s.pop();
            if (s.length > 0) {
              n.push(ur(s, t));
              s = [];
            }
            n.push(a[o]);
          }
        }
        if (s.length > 0) {
          n.push(ur(s, t));
        }
        var h;
        if (r) {
          h = ur(ar(r, t, true));
          h.classes = ["tag"];
          n.push(h);
        } else if (i) {
          n.push(i);
        }
        var u = Jt(["katex-html"], n);
        u.setAttribute("aria-hidden", "true");
        if (h) {
          var m = h.children[0];
          m.style.height = ve(u.height + u.depth);
          if (u.depth) {
            m.style.verticalAlign = ve(-u.depth);
          }
        }
        return u;
      }
      function cr(e) {
        return new ee(e);
      }
      class pr {
        constructor(e, t, r) {
          this.type = void 0;
          this.attributes = void 0;
          this.children = void 0;
          this.classes = void 0;
          this.type = e;
          this.attributes = {};
          this.children = t || [];
          this.classes = r || [];
        }
        setAttribute(e, t) {
          this.attributes[e] = t;
        }
        getAttribute(e) {
          return this.attributes[e];
        }
        toNode() {
          var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
          for (var t in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, t)) {
              e.setAttribute(t, this.attributes[t]);
            }
          }
          if (this.classes.length > 0) {
            e.className = ge(this.classes);
          }
          for (var r = 0; r < this.children.length; r++) {
            if (this.children[r] instanceof dr && this.children[r + 1] instanceof dr) {
              var a = this.children[r].toText() + this.children[++r].toText();
              while (this.children[r + 1] instanceof dr) {
                a += this.children[++r].toText();
              }
              e.appendChild(new dr(a).toNode());
            } else {
              e.appendChild(this.children[r].toNode());
            }
          }
          return e;
        }
        toMarkup() {
          var e = "<" + this.type;
          for (var t in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, t)) {
              e += " " + t + '="';
              e += g.escape(this.attributes[t]);
              e += '"';
            }
          }
          if (this.classes.length > 0) {
            e += ' class ="' + g.escape(ge(this.classes)) + '"';
          }
          e += ">";
          for (var r = 0; r < this.children.length; r++) {
            e += this.children[r].toMarkup();
          }
          e += "</" + this.type + ">";
          return e;
        }
        toText() {
          return this.children.map((e) => e.toText()).join("");
        }
      }
      class dr {
        constructor(e) {
          this.text = void 0;
          this.text = e;
        }
        toNode() {
          return document.createTextNode(this.text);
        }
        toMarkup() {
          return g.escape(this.toText());
        }
        toText() {
          return this.text;
        }
      }
      class fr {
        constructor(e) {
          this.width = void 0;
          this.character = void 0;
          this.width = e;
          if (e >= 0.05555 && e <= 0.05556) {
            this.character = " ";
          } else if (e >= 0.1666 && e <= 0.1667) {
            this.character = " ";
          } else if (e >= 0.2222 && e <= 0.2223) {
            this.character = " ";
          } else if (e >= 0.2777 && e <= 0.2778) {
            this.character = "  ";
          } else if (e >= -0.05556 && e <= -0.05555) {
            this.character = " ⁣";
          } else if (e >= -0.1667 && e <= -0.1666) {
            this.character = " ⁣";
          } else if (e >= -0.2223 && e <= -0.2222) {
            this.character = " ⁣";
          } else if (e >= -0.2778 && e <= -0.2777) {
            this.character = " ⁣";
          } else {
            this.character = null;
          }
        }
        toNode() {
          if (this.character) {
            return document.createTextNode(this.character);
          } else {
            var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
            e.setAttribute("width", ve(this.width));
            return e;
          }
        }
        toMarkup() {
          if (this.character) {
            return "<mtext>" + this.character + "</mtext>";
          } else {
            return '<mspace width="' + ve(this.width) + '"/>';
          }
        }
        toText() {
          if (this.character) {
            return this.character;
          } else {
            return " ";
          }
        }
      }
      var vr = { MathNode: pr, TextNode: dr, SpaceNode: fr, newDocumentFragment: cr };
      var gr = function e(t, r, a) {
        if (
          He[r][t] &&
          He[r][t].replace &&
          t.charCodeAt(0) !== 55349 &&
          !(Ke.hasOwnProperty(t) && a && ((a.fontFamily && a.fontFamily.slice(4, 6) === "tt") || (a.font && a.font.slice(4, 6) === "tt")))
        ) {
          t = He[r][t].replace;
        }
        return new vr.TextNode(t);
      };
      var br = function e(t) {
        if (t.length === 1) {
          return t[0];
        } else {
          return new vr.MathNode("mrow", t);
        }
      };
      var yr = function e(t, r) {
        if (r.fontFamily === "texttt") {
          return "monospace";
        } else if (r.fontFamily === "textsf") {
          if (r.fontShape === "textit" && r.fontWeight === "textbf") {
            return "sans-serif-bold-italic";
          } else if (r.fontShape === "textit") {
            return "sans-serif-italic";
          } else if (r.fontWeight === "textbf") {
            return "bold-sans-serif";
          } else {
            return "sans-serif";
          }
        } else if (r.fontShape === "textit" && r.fontWeight === "textbf") {
          return "bold-italic";
        } else if (r.fontShape === "textit") {
          return "italic";
        } else if (r.fontWeight === "textbf") {
          return "bold";
        }
        var a = r.font;
        if (!a || a === "mathnormal") {
          return null;
        }
        var i = t.mode;
        if (a === "mathit") {
          return "italic";
        } else if (a === "boldsymbol") {
          return t.type === "textord" ? "bold" : "bold-italic";
        } else if (a === "mathbf") {
          return "bold";
        } else if (a === "mathbb") {
          return "double-struck";
        } else if (a === "mathsfit") {
          return "sans-serif-italic";
        } else if (a === "mathfrak") {
          return "fraktur";
        } else if (a === "mathscr" || a === "mathcal") {
          return "script";
        } else if (a === "mathsf") {
          return "sans-serif";
        } else if (a === "mathtt") {
          return "monospace";
        }
        var n = t.text;
        if (g.contains(["\\imath", "\\jmath"], n)) {
          return null;
        }
        if (He[i][n] && He[i][n].replace) {
          n = He[i][n].replace;
        }
        var s = Vt.fontMap[a].fontName;
        if (ne(n, s, i)) {
          return Vt.fontMap[a].variant;
        }
        return null;
      };
      function xr(e) {
        if (!e) {
          return false;
        }
        if (e.type === "mi" && e.children.length === 1) {
          var t = e.children[0];
          return t instanceof dr && t.text === ".";
        } else if (
          e.type === "mo" &&
          e.children.length === 1 &&
          e.getAttribute("separator") === "true" &&
          e.getAttribute("lspace") === "0em" &&
          e.getAttribute("rspace") === "0em"
        ) {
          var r = e.children[0];
          return r instanceof dr && r.text === ",";
        } else {
          return false;
        }
      }
      var wr = function e(t, r, a) {
        if (t.length === 1) {
          var i = Sr(t[0], r);
          if (a && i instanceof pr && i.type === "mo") {
            i.setAttribute("lspace", "0em");
            i.setAttribute("rspace", "0em");
          }
          return [i];
        }
        var n = [];
        var s;
        for (var o = 0; o < t.length; o++) {
          var l = Sr(t[o], r);
          if (l instanceof pr && s instanceof pr) {
            if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
              s.children.push(...l.children);
              continue;
            } else if (l.type === "mn" && s.type === "mn") {
              s.children.push(...l.children);
              continue;
            } else if (xr(l) && s.type === "mn") {
              s.children.push(...l.children);
              continue;
            } else if (l.type === "mn" && xr(s)) {
              l.children = [...s.children, ...l.children];
              n.pop();
            } else if ((l.type === "msup" || l.type === "msub") && l.children.length >= 1 && (s.type === "mn" || xr(s))) {
              var h = l.children[0];
              if (h instanceof pr && h.type === "mn") {
                h.children = [...s.children, ...h.children];
                n.pop();
              }
            } else if (s.type === "mi" && s.children.length === 1) {
              var u = s.children[0];
              if (u instanceof dr && u.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
                var m = l.children[0];
                if (m instanceof dr && m.text.length > 0) {
                  m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1);
                  n.pop();
                }
              }
            }
          }
          n.push(l);
          s = l;
        }
        return n;
      };
      var kr = function e(t, r, a) {
        return br(wr(t, r, a));
      };
      var Sr = function e(t, r) {
        if (!t) {
          return new vr.MathNode("mrow");
        }
        if (_t[t.type]) {
          var a = _t[t.type](t, r);
          return a;
        } else {
          throw new n("Got group of unknown type: '" + t.type + "'");
        }
      };
      function Mr(e, t, r, a, i) {
        var n = wr(e, r);
        var s;
        if (n.length === 1 && n[0] instanceof pr && g.contains(["mrow", "mtable"], n[0].type)) {
          s = n[0];
        } else {
          s = new vr.MathNode("mrow", n);
        }
        var o = new vr.MathNode("annotation", [new vr.TextNode(t)]);
        o.setAttribute("encoding", "application/x-tex");
        var l = new vr.MathNode("semantics", [s, o]);
        var h = new vr.MathNode("math", [l]);
        h.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
        if (a) {
          h.setAttribute("display", "block");
        }
        var u = i ? "katex" : "katex-mathml";
        return Vt.makeSpan([u], [h]);
      }
      var zr = function e(t) {
        return new me({ style: t.displayMode ? L.DISPLAY : L.TEXT, maxSize: t.maxSize, minRuleThickness: t.minRuleThickness });
      };
      var Ar = function e(t, r) {
        if (r.displayMode) {
          var a = ["katex-display"];
          if (r.leqno) {
            a.push("leqno");
          }
          if (r.fleqn) {
            a.push("fleqn");
          }
          t = Vt.makeSpan(a, [t]);
        }
        return t;
      };
      var Tr = function e(t, r, a) {
        var i = zr(a);
        var n;
        if (a.output === "mathml") {
          return Mr(t, r, i, a.displayMode, true);
        } else if (a.output === "html") {
          var s = mr(t, i);
          n = Vt.makeSpan(["katex"], [s]);
        } else {
          var o = Mr(t, r, i, a.displayMode, false);
          var l = mr(t, i);
          n = Vt.makeSpan(["katex"], [o, l]);
        }
        return Ar(n, a);
      };
      var Br = function e(t, r, a) {
        var i = zr(a);
        var n = mr(t, i);
        var s = Vt.makeSpan(["katex"], [n]);
        return Ar(s, a);
      };
      var Cr = {
        widehat: "^",
        widecheck: "ˇ",
        widetilde: "~",
        utilde: "~",
        overleftarrow: "←",
        underleftarrow: "←",
        xleftarrow: "←",
        overrightarrow: "→",
        underrightarrow: "→",
        xrightarrow: "→",
        underbrace: "⏟",
        overbrace: "⏞",
        overgroup: "⏠",
        undergroup: "⏡",
        overleftrightarrow: "↔",
        underleftrightarrow: "↔",
        xleftrightarrow: "↔",
        Overrightarrow: "⇒",
        xRightarrow: "⇒",
        overleftharpoon: "↼",
        xleftharpoonup: "↼",
        overrightharpoon: "⇀",
        xrightharpoonup: "⇀",
        xLeftarrow: "⇐",
        xLeftrightarrow: "⇔",
        xhookleftarrow: "↩",
        xhookrightarrow: "↪",
        xmapsto: "↦",
        xrightharpoondown: "⇁",
        xleftharpoondown: "↽",
        xrightleftharpoons: "⇌",
        xleftrightharpoons: "⇋",
        xtwoheadleftarrow: "↞",
        xtwoheadrightarrow: "↠",
        xlongequal: "=",
        xtofrom: "⇄",
        xrightleftarrows: "⇄",
        xrightequilibrium: "⇌",
        xleftequilibrium: "⇋",
        "\\cdrightarrow": "→",
        "\\cdleftarrow": "←",
        "\\cdlongequal": "=",
      };
      var Nr = function e(t) {
        var r = new vr.MathNode("mo", [new vr.TextNode(Cr[t.replace(/^\\/, "")])]);
        r.setAttribute("stretchy", "true");
        return r;
      };
      var qr = {
        overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
        "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
        xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
        "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
        Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
        xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
        xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
        overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
        overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
        xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
        "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
        xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
        xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
        overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
        underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
        underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
        xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
        xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
        xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
        xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
        xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
        overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
        undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
        xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
        xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
        xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
        xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
        xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716],
      };
      var Ir = function e(t) {
        if (t.type === "ordgroup") {
          return t.body.length;
        } else {
          return 1;
        }
      };
      var Rr = function e(t, r) {
        function a() {
          var e = 4e5;
          var a = t.label.slice(1);
          if (g.contains(["widehat", "widecheck", "widetilde", "utilde"], a)) {
            var i = t;
            var n = Ir(i.base);
            var s;
            var o;
            var l;
            if (n > 5) {
              if (a === "widehat" || a === "widecheck") {
                s = 420;
                e = 2364;
                l = 0.42;
                o = a + "4";
              } else {
                s = 312;
                e = 2340;
                l = 0.34;
                o = "tilde4";
              }
            } else {
              var h = [1, 1, 2, 2, 3, 3][n];
              if (a === "widehat" || a === "widecheck") {
                e = [0, 1062, 2364, 2364, 2364][h];
                s = [0, 239, 300, 360, 420][h];
                l = [0, 0.24, 0.3, 0.3, 0.36, 0.42][h];
                o = a + h;
              } else {
                e = [0, 600, 1033, 2339, 2340][h];
                s = [0, 260, 286, 306, 312][h];
                l = [0, 0.26, 0.286, 0.3, 0.306, 0.34][h];
                o = "tilde" + h;
              }
            }
            var u = new Be(o);
            var m = new Te([u], { width: "100%", height: ve(l), viewBox: "0 0 " + e + " " + s, preserveAspectRatio: "none" });
            return { span: Vt.makeSvgSpan([], [m], r), minWidth: 0, height: l };
          } else {
            var c = [];
            var p = qr[a];
            var [d, f, v] = p;
            var b = v / 1e3;
            var y = d.length;
            var x;
            var w;
            if (y === 1) {
              var k = p[3];
              x = ["hide-tail"];
              w = [k];
            } else if (y === 2) {
              x = ["halfarrow-left", "halfarrow-right"];
              w = ["xMinYMin", "xMaxYMin"];
            } else if (y === 3) {
              x = ["brace-left", "brace-center", "brace-right"];
              w = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            } else {
              throw new Error("Correct katexImagesData or update code here to support\n                    " + y + " children.");
            }
            for (var S = 0; S < y; S++) {
              var M = new Be(d[S]);
              var z = new Te([M], { width: "400em", height: ve(b), viewBox: "0 0 " + e + " " + v, preserveAspectRatio: w[S] + " slice" });
              var A = Vt.makeSvgSpan([x[S]], [z], r);
              if (y === 1) {
                return { span: A, minWidth: f, height: b };
              } else {
                A.style.height = ve(b);
                c.push(A);
              }
            }
            return { span: Vt.makeSpan(["stretchy"], c, r), minWidth: f, height: b };
          }
        }
        var { span: i, minWidth: n, height: s } = a();
        i.height = s;
        i.style.height = ve(s);
        if (n > 0) {
          i.style.minWidth = ve(n);
        }
        return i;
      };
      var Hr = function e(t, r, a, i, n) {
        var s;
        var o = t.height + t.depth + a + i;
        if (/fbox|color|angl/.test(r)) {
          s = Vt.makeSpan(["stretchy", r], [], n);
          if (r === "fbox") {
            var l = n.color && n.getColor();
            if (l) {
              s.style.borderColor = l;
            }
          }
        } else {
          var h = [];
          if (/^[bx]cancel$/.test(r)) {
            h.push(new Ce({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" }));
          }
          if (/^x?cancel$/.test(r)) {
            h.push(new Ce({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
          }
          var u = new Te(h, { width: "100%", height: ve(o) });
          s = Vt.makeSvgSpan([], [u], n);
        }
        s.height = o;
        s.style.height = ve(o);
        return s;
      };
      var Or = { encloseSpan: Hr, mathMLnode: Nr, svgSpan: Rr };
      function Er(e, t) {
        if (!e || e.type !== t) {
          throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
        }
        return e;
      }
      function Lr(e) {
        var t = Dr(e);
        if (!t) {
          throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
        }
        return t;
      }
      function Dr(e) {
        if (e && (e.type === "atom" || Re.hasOwnProperty(e.type))) {
          return e;
        }
        return null;
      }
      var Vr = (e, t) => {
        var r;
        var a;
        var i;
        if (e && e.type === "supsub") {
          a = Er(e.base, "accent");
          r = a.base;
          e.base = r;
          i = qe(hr(e, t));
          e.base = a;
        } else {
          a = Er(e, "accent");
          r = a.base;
        }
        var n = hr(r, t.havingCrampedStyle());
        var s = a.isShifty && g.isCharacterBox(r);
        var o = 0;
        if (s) {
          var l = g.getBaseElem(r);
          var h = hr(l, t.havingCrampedStyle());
          o = Ne(h).skew;
        }
        var u = a.label === "\\c";
        var m = u ? n.height + n.depth : Math.min(n.height, t.fontMetrics().xHeight);
        var c;
        if (!a.isStretchy) {
          var p;
          var d;
          if (a.label === "\\vec") {
            p = Vt.staticSvg("vec", t);
            d = Vt.svgData.vec[1];
          } else {
            p = Vt.makeOrd({ mode: a.mode, text: a.label }, t, "textord");
            p = Ne(p);
            p.italic = 0;
            d = p.width;
            if (u) {
              m += p.depth;
            }
          }
          c = Vt.makeSpan(["accent-body"], [p]);
          var f = a.label === "\\textcircled";
          if (f) {
            c.classes.push("accent-full");
            m = n.height;
          }
          var v = o;
          if (!f) {
            v -= d / 2;
          }
          c.style.left = ve(v);
          if (a.label === "\\textcircled") {
            c.style.top = ".2em";
          }
          c = Vt.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: n },
                { type: "kern", size: -m },
                { type: "elem", elem: c },
              ],
            },
            t
          );
        } else {
          c = Or.svgSpan(a, t);
          c = Vt.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: n },
                {
                  type: "elem",
                  elem: c,
                  wrapperClasses: ["svg-align"],
                  wrapperStyle: o > 0 ? { width: "calc(100% - " + ve(2 * o) + ")", marginLeft: ve(2 * o) } : undefined,
                },
              ],
            },
            t
          );
        }
        var b = Vt.makeSpan(["mord", "accent"], [c], t);
        if (i) {
          i.children[0] = b;
          i.height = Math.max(b.height, i.height);
          i.classes[0] = "mord";
          return i;
        } else {
          return b;
        }
      };
      var Pr = (e, t) => {
        var r = e.isStretchy ? Or.mathMLnode(e.label) : new vr.MathNode("mo", [gr(e.label, e.mode)]);
        var a = new vr.MathNode("mover", [Sr(e.base, t), r]);
        a.setAttribute("accent", "true");
        return a;
      };
      var Fr = new RegExp(
        ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"]
          .map((e) => "\\" + e)
          .join("|")
      );
      jt({
        type: "accent",
        names: [
          "\\acute",
          "\\grave",
          "\\ddot",
          "\\tilde",
          "\\bar",
          "\\breve",
          "\\check",
          "\\hat",
          "\\vec",
          "\\dot",
          "\\mathring",
          "\\widecheck",
          "\\widehat",
          "\\widetilde",
          "\\overrightarrow",
          "\\overleftarrow",
          "\\Overrightarrow",
          "\\overleftrightarrow",
          "\\overgroup",
          "\\overlinesegment",
          "\\overleftharpoon",
          "\\overrightharpoon",
        ],
        props: { numArgs: 1 },
        handler: (e, t) => {
          var r = Zt(t[0]);
          var a = !Fr.test(e.funcName);
          var i = !a || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
          return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: a, isShifty: i, base: r };
        },
        htmlBuilder: Vr,
        mathmlBuilder: Pr,
      });
      jt({
        type: "accent",
        names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
        props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] },
        handler: (e, t) => {
          var r = t[0];
          var a = e.parser.mode;
          if (a === "math") {
            e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode");
            a = "text";
          }
          return { type: "accent", mode: a, label: e.funcName, isStretchy: false, isShifty: true, base: r };
        },
        htmlBuilder: Vr,
        mathmlBuilder: Pr,
      });
      jt({
        type: "accentUnder",
        names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
        props: { numArgs: 1 },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          return { type: "accentUnder", mode: r.mode, label: a, base: i };
        },
        htmlBuilder: (e, t) => {
          var r = hr(e.base, t);
          var a = Or.svgSpan(e, t);
          var i = e.label === "\\utilde" ? 0.12 : 0;
          var n = Vt.makeVList(
            {
              positionType: "top",
              positionData: r.height,
              children: [
                { type: "elem", elem: a, wrapperClasses: ["svg-align"] },
                { type: "kern", size: i },
                { type: "elem", elem: r },
              ],
            },
            t
          );
          return Vt.makeSpan(["mord", "accentunder"], [n], t);
        },
        mathmlBuilder: (e, t) => {
          var r = Or.mathMLnode(e.label);
          var a = new vr.MathNode("munder", [Sr(e.base, t), r]);
          a.setAttribute("accentunder", "true");
          return a;
        },
      });
      var Gr = (e) => {
        var t = new vr.MathNode("mpadded", e ? [e] : []);
        t.setAttribute("width", "+0.6em");
        t.setAttribute("lspace", "0.3em");
        return t;
      };
      jt({
        type: "xArrow",
        names: [
          "\\xleftarrow",
          "\\xrightarrow",
          "\\xLeftarrow",
          "\\xRightarrow",
          "\\xleftrightarrow",
          "\\xLeftrightarrow",
          "\\xhookleftarrow",
          "\\xhookrightarrow",
          "\\xmapsto",
          "\\xrightharpoondown",
          "\\xrightharpoonup",
          "\\xleftharpoondown",
          "\\xleftharpoonup",
          "\\xrightleftharpoons",
          "\\xleftrightharpoons",
          "\\xlongequal",
          "\\xtwoheadrightarrow",
          "\\xtwoheadleftarrow",
          "\\xtofrom",
          "\\xrightleftarrows",
          "\\xrightequilibrium",
          "\\xleftequilibrium",
          "\\\\cdrightarrow",
          "\\\\cdleftarrow",
          "\\\\cdlongequal",
        ],
        props: { numArgs: 1, numOptionalArgs: 1 },
        handler(e, t, r) {
          var { parser: a, funcName: i } = e;
          return { type: "xArrow", mode: a.mode, label: i, body: t[0], below: r[0] };
        },
        htmlBuilder(e, t) {
          var r = t.style;
          var a = t.havingStyle(r.sup());
          var i = Vt.wrapFragment(hr(e.body, a, t), t);
          var n = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
          i.classes.push(n + "-arrow-pad");
          var s;
          if (e.below) {
            a = t.havingStyle(r.sub());
            s = Vt.wrapFragment(hr(e.below, a, t), t);
            s.classes.push(n + "-arrow-pad");
          }
          var o = Or.svgSpan(e, t);
          var l = -t.fontMetrics().axisHeight + 0.5 * o.height;
          var h = -t.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
          if (i.depth > 0.25 || e.label === "\\xleftequilibrium") {
            h -= i.depth;
          }
          var u;
          if (s) {
            var m = -t.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
            u = Vt.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: i, shift: h },
                  { type: "elem", elem: o, shift: l },
                  { type: "elem", elem: s, shift: m },
                ],
              },
              t
            );
          } else {
            u = Vt.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: i, shift: h },
                  { type: "elem", elem: o, shift: l },
                ],
              },
              t
            );
          }
          u.children[0].children[0].children[1].classes.push("svg-align");
          return Vt.makeSpan(["mrel", "x-arrow"], [u], t);
        },
        mathmlBuilder(e, t) {
          var r = Or.mathMLnode(e.label);
          r.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
          var a;
          if (e.body) {
            var i = Gr(Sr(e.body, t));
            if (e.below) {
              var n = Gr(Sr(e.below, t));
              a = new vr.MathNode("munderover", [r, n, i]);
            } else {
              a = new vr.MathNode("mover", [r, i]);
            }
          } else if (e.below) {
            var s = Gr(Sr(e.below, t));
            a = new vr.MathNode("munder", [r, s]);
          } else {
            a = Gr();
            a = new vr.MathNode("mover", [r, a]);
          }
          return a;
        },
      });
      var Ur = Vt.makeSpan;
      function Yr(e, t) {
        var r = ar(e.body, t, true);
        return Ur([e.mclass], r, t);
      }
      function Xr(e, t) {
        var r;
        var a = wr(e.body, t);
        if (e.mclass === "minner") {
          r = new vr.MathNode("mpadded", a);
        } else if (e.mclass === "mord") {
          if (e.isCharacterBox) {
            r = a[0];
            r.type = "mi";
          } else {
            r = new vr.MathNode("mi", a);
          }
        } else {
          if (e.isCharacterBox) {
            r = a[0];
            r.type = "mo";
          } else {
            r = new vr.MathNode("mo", a);
          }
          if (e.mclass === "mbin") {
            r.attributes.lspace = "0.22em";
            r.attributes.rspace = "0.22em";
          } else if (e.mclass === "mpunct") {
            r.attributes.lspace = "0em";
            r.attributes.rspace = "0.17em";
          } else if (e.mclass === "mopen" || e.mclass === "mclose") {
            r.attributes.lspace = "0em";
            r.attributes.rspace = "0em";
          } else if (e.mclass === "minner") {
            r.attributes.lspace = "0.0556em";
            r.attributes.width = "+0.1111em";
          }
        }
        return r;
      }
      jt({
        type: "mclass",
        names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
        props: { numArgs: 1, primitive: true },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          return { type: "mclass", mode: r.mode, mclass: "m" + a.slice(5), body: Kt(i), isCharacterBox: g.isCharacterBox(i) };
        },
        htmlBuilder: Yr,
        mathmlBuilder: Xr,
      });
      var Wr = (e) => {
        var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
        if (t.type === "atom" && (t.family === "bin" || t.family === "rel")) {
          return "m" + t.family;
        } else {
          return "mord";
        }
      };
      jt({
        type: "mclass",
        names: ["\\@binrel"],
        props: { numArgs: 2 },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "mclass", mode: r.mode, mclass: Wr(t[0]), body: Kt(t[1]), isCharacterBox: g.isCharacterBox(t[1]) };
        },
      });
      jt({
        type: "mclass",
        names: ["\\stackrel", "\\overset", "\\underset"],
        props: { numArgs: 2 },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          var i = t[1];
          var n = t[0];
          var s;
          if (a !== "\\stackrel") {
            s = Wr(i);
          } else {
            s = "mrel";
          }
          var o = {
            type: "op",
            mode: i.mode,
            limits: true,
            alwaysHandleSupSub: true,
            parentIsSupSub: false,
            symbol: false,
            suppressBaseShift: a !== "\\stackrel",
            body: Kt(i),
          };
          var l = { type: "supsub", mode: n.mode, base: o, sup: a === "\\underset" ? null : n, sub: a === "\\underset" ? n : null };
          return { type: "mclass", mode: r.mode, mclass: s, body: [l], isCharacterBox: g.isCharacterBox(l) };
        },
        htmlBuilder: Yr,
        mathmlBuilder: Xr,
      });
      jt({
        type: "pmb",
        names: ["\\pmb"],
        props: { numArgs: 1, allowedInText: true },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "pmb", mode: r.mode, mclass: Wr(t[0]), body: Kt(t[0]) };
        },
        htmlBuilder(e, t) {
          var r = ar(e.body, t, true);
          var a = Vt.makeSpan([e.mclass], r, t);
          a.style.textShadow = "0.02em 0.01em 0.04px";
          return a;
        },
        mathmlBuilder(e, t) {
          var r = wr(e.body, t);
          var a = new vr.MathNode("mstyle", r);
          a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
          return a;
        },
      });
      var _r = {
        ">": "\\\\cdrightarrow",
        "<": "\\\\cdleftarrow",
        "=": "\\\\cdlongequal",
        A: "\\uparrow",
        V: "\\downarrow",
        "|": "\\Vert",
        ".": "no arrow",
      };
      var jr = () => ({ type: "styling", body: [], mode: "math", style: "display" });
      var $r = (e) => e.type === "textord" && e.text === "@";
      var Zr = (e, t) => (e.type === "mathord" || e.type === "atom") && e.text === t;
      function Kr(e, t, r) {
        var a = _r[e];
        switch (a) {
          case "\\\\cdrightarrow":
          case "\\\\cdleftarrow":
            return r.callFunction(a, [t[0]], [t[1]]);
          case "\\uparrow":
          case "\\downarrow": {
            var i = r.callFunction("\\\\cdleft", [t[0]], []);
            var n = { type: "atom", text: a, mode: "math", family: "rel" };
            var s = r.callFunction("\\Big", [n], []);
            var o = r.callFunction("\\\\cdright", [t[1]], []);
            var l = { type: "ordgroup", mode: "math", body: [i, s, o] };
            return r.callFunction("\\\\cdparent", [l], []);
          }
          case "\\\\cdlongequal":
            return r.callFunction("\\\\cdlongequal", [], []);
          case "\\Vert": {
            var h = { type: "textord", text: "\\Vert", mode: "math" };
            return r.callFunction("\\Big", [h], []);
          }
          default:
            return { type: "textord", text: " ", mode: "math" };
        }
      }
      function Jr(e) {
        var t = [];
        e.gullet.beginGroup();
        e.gullet.macros.set("\\cr", "\\\\\\relax");
        e.gullet.beginGroup();
        while (true) {
          t.push(e.parseExpression(false, "\\\\"));
          e.gullet.endGroup();
          e.gullet.beginGroup();
          var r = e.fetch().text;
          if (r === "&" || r === "\\\\") {
            e.consume();
          } else if (r === "\\end") {
            if (t[t.length - 1].length === 0) {
              t.pop();
            }
            break;
          } else {
            throw new n("Expected \\\\ or \\cr or \\end", e.nextToken);
          }
        }
        var a = [];
        var i = [a];
        for (var s = 0; s < t.length; s++) {
          var o = t[s];
          var l = jr();
          for (var h = 0; h < o.length; h++) {
            if (!$r(o[h])) {
              l.body.push(o[h]);
            } else {
              a.push(l);
              h += 1;
              var u = Lr(o[h]).text;
              var m = new Array(2);
              m[0] = { type: "ordgroup", mode: "math", body: [] };
              m[1] = { type: "ordgroup", mode: "math", body: [] };
              if ("=|.".indexOf(u) > -1);
              else if ("<>AV".indexOf(u) > -1) {
                for (var c = 0; c < 2; c++) {
                  var p = true;
                  for (var d = h + 1; d < o.length; d++) {
                    if (Zr(o[d], u)) {
                      p = false;
                      h = d;
                      break;
                    }
                    if ($r(o[d])) {
                      throw new n("Missing a " + u + " character to complete a CD arrow.", o[d]);
                    }
                    m[c].body.push(o[d]);
                  }
                  if (p) {
                    throw new n("Missing a " + u + " character to complete a CD arrow.", o[h]);
                  }
                }
              } else {
                throw new n('Expected one of "<>AV=|." after @', o[h]);
              }
              var f = Kr(u, m, e);
              var v = { type: "styling", body: [f], mode: "math", style: "display" };
              a.push(v);
              l = jr();
            }
          }
          if (s % 2 === 0) {
            a.push(l);
          } else {
            a.shift();
          }
          a = [];
          i.push(a);
        }
        e.gullet.endGroup();
        e.gullet.endGroup();
        var g = new Array(i[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
        return {
          type: "array",
          mode: "math",
          body: i,
          arraystretch: 1,
          addJot: true,
          rowGaps: [null],
          cols: g,
          colSeparationType: "CD",
          hLinesBeforeRow: new Array(i.length + 1).fill([]),
        };
      }
      jt({
        type: "cdlabel",
        names: ["\\\\cdleft", "\\\\cdright"],
        props: { numArgs: 1 },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          return { type: "cdlabel", mode: r.mode, side: a.slice(4), label: t[0] };
        },
        htmlBuilder(e, t) {
          var r = t.havingStyle(t.style.sup());
          var a = Vt.wrapFragment(hr(e.label, r, t), t);
          a.classes.push("cd-label-" + e.side);
          a.style.bottom = ve(0.8 - a.depth);
          a.height = 0;
          a.depth = 0;
          return a;
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mrow", [Sr(e.label, t)]);
          r = new vr.MathNode("mpadded", [r]);
          r.setAttribute("width", "0");
          if (e.side === "left") {
            r.setAttribute("lspace", "-1width");
          }
          r.setAttribute("voffset", "0.7em");
          r = new vr.MathNode("mstyle", [r]);
          r.setAttribute("displaystyle", "false");
          r.setAttribute("scriptlevel", "1");
          return r;
        },
      });
      jt({
        type: "cdlabelparent",
        names: ["\\\\cdparent"],
        props: { numArgs: 1 },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "cdlabelparent", mode: r.mode, fragment: t[0] };
        },
        htmlBuilder(e, t) {
          var r = Vt.wrapFragment(hr(e.fragment, t), t);
          r.classes.push("cd-vert-arrow");
          return r;
        },
        mathmlBuilder(e, t) {
          return new vr.MathNode("mrow", [Sr(e.fragment, t)]);
        },
      });
      jt({
        type: "textord",
        names: ["\\@char"],
        props: { numArgs: 1, allowedInText: true },
        handler(e, t) {
          var { parser: r } = e;
          var a = Er(t[0], "ordgroup");
          var i = a.body;
          var s = "";
          for (var o = 0; o < i.length; o++) {
            var l = Er(i[o], "textord");
            s += l.text;
          }
          var h = parseInt(s);
          var u;
          if (isNaN(h)) {
            throw new n("\\@char has non-numeric argument " + s);
          } else if (h < 0 || h >= 1114111) {
            throw new n("\\@char with invalid code point " + s);
          } else if (h <= 65535) {
            u = String.fromCharCode(h);
          } else {
            h -= 65536;
            u = String.fromCharCode((h >> 10) + 55296, (h & 1023) + 56320);
          }
          return { type: "textord", mode: r.mode, text: u };
        },
      });
      var Qr = (e, t) => {
        var r = ar(e.body, t.withColor(e.color), false);
        return Vt.makeFragment(r);
      };
      var ea = (e, t) => {
        var r = wr(e.body, t.withColor(e.color));
        var a = new vr.MathNode("mstyle", r);
        a.setAttribute("mathcolor", e.color);
        return a;
      };
      jt({
        type: "color",
        names: ["\\textcolor"],
        props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] },
        handler(e, t) {
          var { parser: r } = e;
          var a = Er(t[0], "color-token").color;
          var i = t[1];
          return { type: "color", mode: r.mode, color: a, body: Kt(i) };
        },
        htmlBuilder: Qr,
        mathmlBuilder: ea,
      });
      jt({
        type: "color",
        names: ["\\color"],
        props: { numArgs: 1, allowedInText: true, argTypes: ["color"] },
        handler(e, t) {
          var { parser: r, breakOnTokenText: a } = e;
          var i = Er(t[0], "color-token").color;
          r.gullet.macros.set("\\current@color", i);
          var n = r.parseExpression(true, a);
          return { type: "color", mode: r.mode, color: i, body: n };
        },
        htmlBuilder: Qr,
        mathmlBuilder: ea,
      });
      jt({
        type: "cr",
        names: ["\\\\"],
        props: { numArgs: 0, numOptionalArgs: 0, allowedInText: true },
        handler(e, t, r) {
          var { parser: a } = e;
          var i = a.gullet.future().text === "[" ? a.parseSizeGroup(true) : null;
          var n =
            !a.settings.displayMode ||
            !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline " + "does nothing in display mode");
          return { type: "cr", mode: a.mode, newLine: n, size: i && Er(i, "size").value };
        },
        htmlBuilder(e, t) {
          var r = Vt.makeSpan(["mspace"], [], t);
          if (e.newLine) {
            r.classes.push("newline");
            if (e.size) {
              r.style.marginTop = ve(fe(e.size, t));
            }
          }
          return r;
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mspace");
          if (e.newLine) {
            r.setAttribute("linebreak", "newline");
            if (e.size) {
              r.setAttribute("height", ve(fe(e.size, t)));
            }
          }
          return r;
        },
      });
      var ta = {
        "\\global": "\\global",
        "\\long": "\\\\globallong",
        "\\\\globallong": "\\\\globallong",
        "\\def": "\\gdef",
        "\\gdef": "\\gdef",
        "\\edef": "\\xdef",
        "\\xdef": "\\xdef",
        "\\let": "\\\\globallet",
        "\\futurelet": "\\\\globalfuture",
      };
      var ra = (e) => {
        var t = e.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) {
          throw new n("Expected a control sequence", e);
        }
        return t;
      };
      var aa = (e) => {
        var t = e.gullet.popToken();
        if (t.text === "=") {
          t = e.gullet.popToken();
          if (t.text === " ") {
            t = e.gullet.popToken();
          }
        }
        return t;
      };
      var ia = (e, t, r, a) => {
        var i = e.gullet.macros.get(r.text);
        if (i == null) {
          r.noexpand = true;
          i = { tokens: [r], numArgs: 0, unexpandable: !e.gullet.isExpandable(r.text) };
        }
        e.gullet.macros.set(t, i, a);
      };
      jt({
        type: "internal",
        names: ["\\global", "\\long", "\\\\globallong"],
        props: { numArgs: 0, allowedInText: true },
        handler(e) {
          var { parser: t, funcName: r } = e;
          t.consumeSpaces();
          var a = t.fetch();
          if (ta[a.text]) {
            if (r === "\\global" || r === "\\\\globallong") {
              a.text = ta[a.text];
            }
            return Er(t.parseFunction(), "internal");
          }
          throw new n("Invalid token after macro prefix", a);
        },
      });
      jt({
        type: "internal",
        names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
        props: { numArgs: 0, allowedInText: true, primitive: true },
        handler(e) {
          var { parser: t, funcName: r } = e;
          var a = t.gullet.popToken();
          var i = a.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(i)) {
            throw new n("Expected a control sequence", a);
          }
          var s = 0;
          var o;
          var l = [[]];
          while (t.gullet.future().text !== "{") {
            a = t.gullet.popToken();
            if (a.text === "#") {
              if (t.gullet.future().text === "{") {
                o = t.gullet.future();
                l[s].push("{");
                break;
              }
              a = t.gullet.popToken();
              if (!/^[1-9]$/.test(a.text)) {
                throw new n('Invalid argument number "' + a.text + '"');
              }
              if (parseInt(a.text) !== s + 1) {
                throw new n('Argument number "' + a.text + '" out of order');
              }
              s++;
              l.push([]);
            } else if (a.text === "EOF") {
              throw new n("Expected a macro definition");
            } else {
              l[s].push(a.text);
            }
          }
          var { tokens: h } = t.gullet.consumeArg();
          if (o) {
            h.unshift(o);
          }
          if (r === "\\edef" || r === "\\xdef") {
            h = t.gullet.expandTokens(h);
            h.reverse();
          }
          t.gullet.macros.set(i, { tokens: h, numArgs: s, delimiters: l }, r === ta[r]);
          return { type: "internal", mode: t.mode };
        },
      });
      jt({
        type: "internal",
        names: ["\\let", "\\\\globallet"],
        props: { numArgs: 0, allowedInText: true, primitive: true },
        handler(e) {
          var { parser: t, funcName: r } = e;
          var a = ra(t.gullet.popToken());
          t.gullet.consumeSpaces();
          var i = aa(t);
          ia(t, a, i, r === "\\\\globallet");
          return { type: "internal", mode: t.mode };
        },
      });
      jt({
        type: "internal",
        names: ["\\futurelet", "\\\\globalfuture"],
        props: { numArgs: 0, allowedInText: true, primitive: true },
        handler(e) {
          var { parser: t, funcName: r } = e;
          var a = ra(t.gullet.popToken());
          var i = t.gullet.popToken();
          var n = t.gullet.popToken();
          ia(t, a, n, r === "\\\\globalfuture");
          t.gullet.pushToken(n);
          t.gullet.pushToken(i);
          return { type: "internal", mode: t.mode };
        },
      });
      var na = function e(t, r, a) {
        var i = He.math[t] && He.math[t].replace;
        var n = ne(i || t, r, a);
        if (!n) {
          throw new Error("Unsupported symbol " + t + " and font size " + r + ".");
        }
        return n;
      };
      var sa = function e(t, r, a, i) {
        var n = a.havingBaseStyle(r);
        var s = Vt.makeSpan(i.concat(n.sizingClasses(a)), [t], a);
        var o = n.sizeMultiplier / a.sizeMultiplier;
        s.height *= o;
        s.depth *= o;
        s.maxFontSize = n.sizeMultiplier;
        return s;
      };
      var oa = function e(t, r, a) {
        var i = r.havingBaseStyle(a);
        var n = (1 - r.sizeMultiplier / i.sizeMultiplier) * r.fontMetrics().axisHeight;
        t.classes.push("delimcenter");
        t.style.top = ve(n);
        t.height -= n;
        t.depth += n;
      };
      var la = function e(t, r, a, i, n, s) {
        var o = Vt.makeSymbol(t, "Main-Regular", n, i);
        var l = sa(o, r, i, s);
        if (a) {
          oa(l, i, r);
        }
        return l;
      };
      var ha = function e(t, r, a, i) {
        return Vt.makeSymbol(t, "Size" + r + "-Regular", a, i);
      };
      var ua = function e(t, r, a, i, n, s) {
        var o = ha(t, r, n, i);
        var l = sa(Vt.makeSpan(["delimsizing", "size" + r], [o], i), L.TEXT, i, s);
        if (a) {
          oa(l, i, L.TEXT);
        }
        return l;
      };
      var ma = function e(t, r, a) {
        var i;
        if (r === "Size1-Regular") {
          i = "delim-size1";
        } else {
          i = "delim-size4";
        }
        var n = Vt.makeSpan(["delimsizinginner", i], [Vt.makeSpan([], [Vt.makeSymbol(t, r, a)])]);
        return { type: "elem", elem: n };
      };
      var ca = function e(t, r, a) {
        var i = te["Size4-Regular"][t.charCodeAt(0)] ? te["Size4-Regular"][t.charCodeAt(0)][4] : te["Size1-Regular"][t.charCodeAt(0)][4];
        var n = new Be("inner", K(t, Math.round(1e3 * r)));
        var s = new Te([n], {
          width: ve(i),
          height: ve(r),
          style: "width:" + ve(i),
          viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * r),
          preserveAspectRatio: "xMinYMin",
        });
        var o = Vt.makeSvgSpan([], [s], a);
        o.height = r;
        o.style.height = ve(r);
        o.style.width = ve(i);
        return { type: "elem", elem: o };
      };
      var pa = 0.008;
      var da = { type: "kern", size: -1 * pa };
      var fa = ["|", "\\lvert", "\\rvert", "\\vert"];
      var va = ["\\|", "\\lVert", "\\rVert", "\\Vert"];
      var ga = function e(t, r, a, i, n, s) {
        var o;
        var l;
        var h;
        var u;
        var m = "";
        var c = 0;
        o = h = u = t;
        l = null;
        var p = "Size1-Regular";
        if (t === "\\uparrow") {
          h = u = "⏐";
        } else if (t === "\\Uparrow") {
          h = u = "‖";
        } else if (t === "\\downarrow") {
          o = h = "⏐";
        } else if (t === "\\Downarrow") {
          o = h = "‖";
        } else if (t === "\\updownarrow") {
          o = "\\uparrow";
          h = "⏐";
          u = "\\downarrow";
        } else if (t === "\\Updownarrow") {
          o = "\\Uparrow";
          h = "‖";
          u = "\\Downarrow";
        } else if (g.contains(fa, t)) {
          h = "∣";
          m = "vert";
          c = 333;
        } else if (g.contains(va, t)) {
          h = "∥";
          m = "doublevert";
          c = 556;
        } else if (t === "[" || t === "\\lbrack") {
          o = "⎡";
          h = "⎢";
          u = "⎣";
          p = "Size4-Regular";
          m = "lbrack";
          c = 667;
        } else if (t === "]" || t === "\\rbrack") {
          o = "⎤";
          h = "⎥";
          u = "⎦";
          p = "Size4-Regular";
          m = "rbrack";
          c = 667;
        } else if (t === "\\lfloor" || t === "⌊") {
          h = o = "⎢";
          u = "⎣";
          p = "Size4-Regular";
          m = "lfloor";
          c = 667;
        } else if (t === "\\lceil" || t === "⌈") {
          o = "⎡";
          h = u = "⎢";
          p = "Size4-Regular";
          m = "lceil";
          c = 667;
        } else if (t === "\\rfloor" || t === "⌋") {
          h = o = "⎥";
          u = "⎦";
          p = "Size4-Regular";
          m = "rfloor";
          c = 667;
        } else if (t === "\\rceil" || t === "⌉") {
          o = "⎤";
          h = u = "⎥";
          p = "Size4-Regular";
          m = "rceil";
          c = 667;
        } else if (t === "(" || t === "\\lparen") {
          o = "⎛";
          h = "⎜";
          u = "⎝";
          p = "Size4-Regular";
          m = "lparen";
          c = 875;
        } else if (t === ")" || t === "\\rparen") {
          o = "⎞";
          h = "⎟";
          u = "⎠";
          p = "Size4-Regular";
          m = "rparen";
          c = 875;
        } else if (t === "\\{" || t === "\\lbrace") {
          o = "⎧";
          l = "⎨";
          u = "⎩";
          h = "⎪";
          p = "Size4-Regular";
        } else if (t === "\\}" || t === "\\rbrace") {
          o = "⎫";
          l = "⎬";
          u = "⎭";
          h = "⎪";
          p = "Size4-Regular";
        } else if (t === "\\lgroup" || t === "⟮") {
          o = "⎧";
          u = "⎩";
          h = "⎪";
          p = "Size4-Regular";
        } else if (t === "\\rgroup" || t === "⟯") {
          o = "⎫";
          u = "⎭";
          h = "⎪";
          p = "Size4-Regular";
        } else if (t === "\\lmoustache" || t === "⎰") {
          o = "⎧";
          u = "⎭";
          h = "⎪";
          p = "Size4-Regular";
        } else if (t === "\\rmoustache" || t === "⎱") {
          o = "⎫";
          u = "⎩";
          h = "⎪";
          p = "Size4-Regular";
        }
        var d = na(o, p, n);
        var f = d.height + d.depth;
        var v = na(h, p, n);
        var b = v.height + v.depth;
        var y = na(u, p, n);
        var x = y.height + y.depth;
        var w = 0;
        var k = 1;
        if (l !== null) {
          var S = na(l, p, n);
          w = S.height + S.depth;
          k = 2;
        }
        var M = f + x + w;
        var z = Math.max(0, Math.ceil((r - M) / (k * b)));
        var A = M + z * k * b;
        var T = i.fontMetrics().axisHeight;
        if (a) {
          T *= i.sizeMultiplier;
        }
        var B = A / 2 - T;
        var C = [];
        if (m.length > 0) {
          var N = A - f - x;
          var q = Math.round(A * 1e3);
          var I = Q(m, Math.round(N * 1e3));
          var R = new Be(m, I);
          var H = (c / 1e3).toFixed(3) + "em";
          var O = (q / 1e3).toFixed(3) + "em";
          var E = new Te([R], { width: H, height: O, viewBox: "0 0 " + c + " " + q });
          var D = Vt.makeSvgSpan([], [E], i);
          D.height = q / 1e3;
          D.style.width = H;
          D.style.height = O;
          C.push({ type: "elem", elem: D });
        } else {
          C.push(ma(u, p, n));
          C.push(da);
          if (l === null) {
            var V = A - f - x + 2 * pa;
            C.push(ca(h, V, i));
          } else {
            var P = (A - f - x - w) / 2 + 2 * pa;
            C.push(ca(h, P, i));
            C.push(da);
            C.push(ma(l, p, n));
            C.push(da);
            C.push(ca(h, P, i));
          }
          C.push(da);
          C.push(ma(o, p, n));
        }
        var F = i.havingBaseStyle(L.TEXT);
        var G = Vt.makeVList({ positionType: "bottom", positionData: B, children: C }, F);
        return sa(Vt.makeSpan(["delimsizing", "mult"], [G], F), L.TEXT, i, s);
      };
      var ba = 80;
      var ya = 0.08;
      var xa = function e(t, r, a, i, n) {
        var s = Z(t, i, a);
        var o = new Be(t, s);
        var l = new Te([o], { width: "400em", height: ve(r), viewBox: "0 0 400000 " + a, preserveAspectRatio: "xMinYMin slice" });
        return Vt.makeSvgSpan(["hide-tail"], [l], n);
      };
      var wa = function e(t, r) {
        var a = r.havingBaseSizing();
        var i = qa("\\surd", t * a.sizeMultiplier, Ca, a);
        var n = a.sizeMultiplier;
        var s = Math.max(0, r.minRuleThickness - r.fontMetrics().sqrtRuleThickness);
        var o;
        var l = 0;
        var h = 0;
        var u = 0;
        var m;
        if (i.type === "small") {
          u = 1e3 + 1e3 * s + ba;
          if (t < 1) {
            n = 1;
          } else if (t < 1.4) {
            n = 0.7;
          }
          l = (1 + s + ya) / n;
          h = (1 + s) / n;
          o = xa("sqrtMain", l, u, s, r);
          o.style.minWidth = "0.853em";
          m = 0.833 / n;
        } else if (i.type === "large") {
          u = (1e3 + ba) * za[i.size];
          h = (za[i.size] + s) / n;
          l = (za[i.size] + s + ya) / n;
          o = xa("sqrtSize" + i.size, l, u, s, r);
          o.style.minWidth = "1.02em";
          m = 1 / n;
        } else {
          l = t + s + ya;
          h = t + s;
          u = Math.floor(1e3 * t + s) + ba;
          o = xa("sqrtTall", l, u, s, r);
          o.style.minWidth = "0.742em";
          m = 1.056;
        }
        o.height = h;
        o.style.height = ve(l);
        return { span: o, advanceWidth: m, ruleWidth: (r.fontMetrics().sqrtRuleThickness + s) * n };
      };
      var ka = [
        "(",
        "\\lparen",
        ")",
        "\\rparen",
        "[",
        "\\lbrack",
        "]",
        "\\rbrack",
        "\\{",
        "\\lbrace",
        "\\}",
        "\\rbrace",
        "\\lfloor",
        "\\rfloor",
        "⌊",
        "⌋",
        "\\lceil",
        "\\rceil",
        "⌈",
        "⌉",
        "\\surd",
      ];
      var Sa = [
        "\\uparrow",
        "\\downarrow",
        "\\updownarrow",
        "\\Uparrow",
        "\\Downarrow",
        "\\Updownarrow",
        "|",
        "\\|",
        "\\vert",
        "\\Vert",
        "\\lvert",
        "\\rvert",
        "\\lVert",
        "\\rVert",
        "\\lgroup",
        "\\rgroup",
        "⟮",
        "⟯",
        "\\lmoustache",
        "\\rmoustache",
        "⎰",
        "⎱",
      ];
      var Ma = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];
      var za = [0, 1.2, 1.8, 2.4, 3];
      var Aa = function e(t, r, a, i, s) {
        if (t === "<" || t === "\\lt" || t === "⟨") {
          t = "\\langle";
        } else if (t === ">" || t === "\\gt" || t === "⟩") {
          t = "\\rangle";
        }
        if (g.contains(ka, t) || g.contains(Ma, t)) {
          return ua(t, r, false, a, i, s);
        } else if (g.contains(Sa, t)) {
          return ga(t, za[r], false, a, i, s);
        } else {
          throw new n("Illegal delimiter: '" + t + "'");
        }
      };
      var Ta = [
        { type: "small", style: L.SCRIPTSCRIPT },
        { type: "small", style: L.SCRIPT },
        { type: "small", style: L.TEXT },
        { type: "large", size: 1 },
        { type: "large", size: 2 },
        { type: "large", size: 3 },
        { type: "large", size: 4 },
      ];
      var Ba = [{ type: "small", style: L.SCRIPTSCRIPT }, { type: "small", style: L.SCRIPT }, { type: "small", style: L.TEXT }, { type: "stack" }];
      var Ca = [
        { type: "small", style: L.SCRIPTSCRIPT },
        { type: "small", style: L.SCRIPT },
        { type: "small", style: L.TEXT },
        { type: "large", size: 1 },
        { type: "large", size: 2 },
        { type: "large", size: 3 },
        { type: "large", size: 4 },
        { type: "stack" },
      ];
      var Na = function e(t) {
        if (t.type === "small") {
          return "Main-Regular";
        } else if (t.type === "large") {
          return "Size" + t.size + "-Regular";
        } else if (t.type === "stack") {
          return "Size4-Regular";
        } else {
          throw new Error("Add support for delim type '" + t.type + "' here.");
        }
      };
      var qa = function e(t, r, a, i) {
        var n = Math.min(2, 3 - i.style.size);
        for (var s = n; s < a.length; s++) {
          if (a[s].type === "stack") {
            break;
          }
          var o = na(t, Na(a[s]), "math");
          var l = o.height + o.depth;
          if (a[s].type === "small") {
            var h = i.havingBaseStyle(a[s].style);
            l *= h.sizeMultiplier;
          }
          if (l > r) {
            return a[s];
          }
        }
        return a[a.length - 1];
      };
      var Ia = function e(t, r, a, i, n, s) {
        if (t === "<" || t === "\\lt" || t === "⟨") {
          t = "\\langle";
        } else if (t === ">" || t === "\\gt" || t === "⟩") {
          t = "\\rangle";
        }
        var o;
        if (g.contains(Ma, t)) {
          o = Ta;
        } else if (g.contains(ka, t)) {
          o = Ca;
        } else {
          o = Ba;
        }
        var l = qa(t, r, o, i);
        if (l.type === "small") {
          return la(t, l.style, a, i, n, s);
        } else if (l.type === "large") {
          return ua(t, l.size, a, i, n, s);
        } else {
          return ga(t, r, a, i, n, s);
        }
      };
      var Ra = function e(t, r, a, i, n, s) {
        var o = i.fontMetrics().axisHeight * i.sizeMultiplier;
        var l = 901;
        var h = 5 / i.fontMetrics().ptPerEm;
        var u = Math.max(r - o, a + o);
        var m = Math.max((u / 500) * l, 2 * u - h);
        return Ia(t, m, true, i, n, s);
      };
      var Ha = { sqrtImage: wa, sizedDelim: Aa, sizeToMaxHeight: za, customSizedDelim: Ia, leftRightDelim: Ra };
      var Oa = {
        "\\bigl": { mclass: "mopen", size: 1 },
        "\\Bigl": { mclass: "mopen", size: 2 },
        "\\biggl": { mclass: "mopen", size: 3 },
        "\\Biggl": { mclass: "mopen", size: 4 },
        "\\bigr": { mclass: "mclose", size: 1 },
        "\\Bigr": { mclass: "mclose", size: 2 },
        "\\biggr": { mclass: "mclose", size: 3 },
        "\\Biggr": { mclass: "mclose", size: 4 },
        "\\bigm": { mclass: "mrel", size: 1 },
        "\\Bigm": { mclass: "mrel", size: 2 },
        "\\biggm": { mclass: "mrel", size: 3 },
        "\\Biggm": { mclass: "mrel", size: 4 },
        "\\big": { mclass: "mord", size: 1 },
        "\\Big": { mclass: "mord", size: 2 },
        "\\bigg": { mclass: "mord", size: 3 },
        "\\Bigg": { mclass: "mord", size: 4 },
      };
      var Ea = [
        "(",
        "\\lparen",
        ")",
        "\\rparen",
        "[",
        "\\lbrack",
        "]",
        "\\rbrack",
        "\\{",
        "\\lbrace",
        "\\}",
        "\\rbrace",
        "\\lfloor",
        "\\rfloor",
        "⌊",
        "⌋",
        "\\lceil",
        "\\rceil",
        "⌈",
        "⌉",
        "<",
        ">",
        "\\langle",
        "⟨",
        "\\rangle",
        "⟩",
        "\\lt",
        "\\gt",
        "\\lvert",
        "\\rvert",
        "\\lVert",
        "\\rVert",
        "\\lgroup",
        "\\rgroup",
        "⟮",
        "⟯",
        "\\lmoustache",
        "\\rmoustache",
        "⎰",
        "⎱",
        "/",
        "\\backslash",
        "|",
        "\\vert",
        "\\|",
        "\\Vert",
        "\\uparrow",
        "\\Uparrow",
        "\\downarrow",
        "\\Downarrow",
        "\\updownarrow",
        "\\Updownarrow",
        ".",
      ];
      function La(e, t) {
        var r = Dr(e);
        if (r && g.contains(Ea, r.text)) {
          return r;
        } else if (r) {
          throw new n("Invalid delimiter '" + r.text + "' after '" + t.funcName + "'", e);
        } else {
          throw new n("Invalid delimiter type '" + e.type + "'", e);
        }
      }
      jt({
        type: "delimsizing",
        names: [
          "\\bigl",
          "\\Bigl",
          "\\biggl",
          "\\Biggl",
          "\\bigr",
          "\\Bigr",
          "\\biggr",
          "\\Biggr",
          "\\bigm",
          "\\Bigm",
          "\\biggm",
          "\\Biggm",
          "\\big",
          "\\Big",
          "\\bigg",
          "\\Bigg",
        ],
        props: { numArgs: 1, argTypes: ["primitive"] },
        handler: (e, t) => {
          var r = La(t[0], e);
          return { type: "delimsizing", mode: e.parser.mode, size: Oa[e.funcName].size, mclass: Oa[e.funcName].mclass, delim: r.text };
        },
        htmlBuilder: (e, t) => {
          if (e.delim === ".") {
            return Vt.makeSpan([e.mclass]);
          }
          return Ha.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass]);
        },
        mathmlBuilder: (e) => {
          var t = [];
          if (e.delim !== ".") {
            t.push(gr(e.delim, e.mode));
          }
          var r = new vr.MathNode("mo", t);
          if (e.mclass === "mopen" || e.mclass === "mclose") {
            r.setAttribute("fence", "true");
          } else {
            r.setAttribute("fence", "false");
          }
          r.setAttribute("stretchy", "true");
          var a = ve(Ha.sizeToMaxHeight[e.size]);
          r.setAttribute("minsize", a);
          r.setAttribute("maxsize", a);
          return r;
        },
      });
      function Da(e) {
        if (!e.body) {
          throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
        }
      }
      jt({
        type: "leftright-right",
        names: ["\\right"],
        props: { numArgs: 1, primitive: true },
        handler: (e, t) => {
          var r = e.parser.gullet.macros.get("\\current@color");
          if (r && typeof r !== "string") {
            throw new n("\\current@color set to non-string in \\right");
          }
          return { type: "leftright-right", mode: e.parser.mode, delim: La(t[0], e).text, color: r };
        },
      });
      jt({
        type: "leftright",
        names: ["\\left"],
        props: { numArgs: 1, primitive: true },
        handler: (e, t) => {
          var r = La(t[0], e);
          var a = e.parser;
          ++a.leftrightDepth;
          var i = a.parseExpression(false);
          --a.leftrightDepth;
          a.expect("\\right", false);
          var n = Er(a.parseFunction(), "leftright-right");
          return { type: "leftright", mode: a.mode, body: i, left: r.text, right: n.delim, rightColor: n.color };
        },
        htmlBuilder: (e, t) => {
          Da(e);
          var r = ar(e.body, t, true, ["mopen", "mclose"]);
          var a = 0;
          var i = 0;
          var n = false;
          for (var s = 0; s < r.length; s++) {
            if (r[s].isMiddle) {
              n = true;
            } else {
              a = Math.max(r[s].height, a);
              i = Math.max(r[s].depth, i);
            }
          }
          a *= t.sizeMultiplier;
          i *= t.sizeMultiplier;
          var o;
          if (e.left === ".") {
            o = lr(t, ["mopen"]);
          } else {
            o = Ha.leftRightDelim(e.left, a, i, t, e.mode, ["mopen"]);
          }
          r.unshift(o);
          if (n) {
            for (var l = 1; l < r.length; l++) {
              var h = r[l];
              var u = h.isMiddle;
              if (u) {
                r[l] = Ha.leftRightDelim(u.delim, a, i, u.options, e.mode, []);
              }
            }
          }
          var m;
          if (e.right === ".") {
            m = lr(t, ["mclose"]);
          } else {
            var c = e.rightColor ? t.withColor(e.rightColor) : t;
            m = Ha.leftRightDelim(e.right, a, i, c, e.mode, ["mclose"]);
          }
          r.push(m);
          return Vt.makeSpan(["minner"], r, t);
        },
        mathmlBuilder: (e, t) => {
          Da(e);
          var r = wr(e.body, t);
          if (e.left !== ".") {
            var a = new vr.MathNode("mo", [gr(e.left, e.mode)]);
            a.setAttribute("fence", "true");
            r.unshift(a);
          }
          if (e.right !== ".") {
            var i = new vr.MathNode("mo", [gr(e.right, e.mode)]);
            i.setAttribute("fence", "true");
            if (e.rightColor) {
              i.setAttribute("mathcolor", e.rightColor);
            }
            r.push(i);
          }
          return br(r);
        },
      });
      jt({
        type: "middle",
        names: ["\\middle"],
        props: { numArgs: 1, primitive: true },
        handler: (e, t) => {
          var r = La(t[0], e);
          if (!e.parser.leftrightDepth) {
            throw new n("\\middle without preceding \\left", r);
          }
          return { type: "middle", mode: e.parser.mode, delim: r.text };
        },
        htmlBuilder: (e, t) => {
          var r;
          if (e.delim === ".") {
            r = lr(t, []);
          } else {
            r = Ha.sizedDelim(e.delim, 1, t, e.mode, []);
            var a = { delim: e.delim, options: t };
            r.isMiddle = a;
          }
          return r;
        },
        mathmlBuilder: (e, t) => {
          var r = e.delim === "\\vert" || e.delim === "|" ? gr("|", "text") : gr(e.delim, e.mode);
          var a = new vr.MathNode("mo", [r]);
          a.setAttribute("fence", "true");
          a.setAttribute("lspace", "0.05em");
          a.setAttribute("rspace", "0.05em");
          return a;
        },
      });
      var Va = (e, t) => {
        var r = Vt.wrapFragment(hr(e.body, t), t);
        var a = e.label.slice(1);
        var i = t.sizeMultiplier;
        var n;
        var s = 0;
        var o = g.isCharacterBox(e.body);
        if (a === "sout") {
          n = Vt.makeSpan(["stretchy", "sout"]);
          n.height = t.fontMetrics().defaultRuleThickness / i;
          s = -0.5 * t.fontMetrics().xHeight;
        } else if (a === "phase") {
          var l = fe({ number: 0.6, unit: "pt" }, t);
          var h = fe({ number: 0.35, unit: "ex" }, t);
          var u = t.havingBaseSizing();
          i = i / u.sizeMultiplier;
          var m = r.height + r.depth + l + h;
          r.style.paddingLeft = ve(m / 2 + l);
          var c = Math.floor(1e3 * m * i);
          var p = j(c);
          var d = new Te([new Be("phase", p)], {
            width: "400em",
            height: ve(c / 1e3),
            viewBox: "0 0 400000 " + c,
            preserveAspectRatio: "xMinYMin slice",
          });
          n = Vt.makeSvgSpan(["hide-tail"], [d], t);
          n.style.height = ve(m);
          s = r.depth + l + h;
        } else {
          if (/cancel/.test(a)) {
            if (!o) {
              r.classes.push("cancel-pad");
            }
          } else if (a === "angl") {
            r.classes.push("anglpad");
          } else {
            r.classes.push("boxpad");
          }
          var f = 0;
          var v = 0;
          var b = 0;
          if (/box/.test(a)) {
            b = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
            f = t.fontMetrics().fboxsep + (a === "colorbox" ? 0 : b);
            v = f;
          } else if (a === "angl") {
            b = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness);
            f = 4 * b;
            v = Math.max(0, 0.25 - r.depth);
          } else {
            f = o ? 0.2 : 0;
            v = f;
          }
          n = Or.encloseSpan(r, a, f, v, t);
          if (/fbox|boxed|fcolorbox/.test(a)) {
            n.style.borderStyle = "solid";
            n.style.borderWidth = ve(b);
          } else if (a === "angl" && b !== 0.049) {
            n.style.borderTopWidth = ve(b);
            n.style.borderRightWidth = ve(b);
          }
          s = r.depth + v;
          if (e.backgroundColor) {
            n.style.backgroundColor = e.backgroundColor;
            if (e.borderColor) {
              n.style.borderColor = e.borderColor;
            }
          }
        }
        var y;
        if (e.backgroundColor) {
          y = Vt.makeVList(
            {
              positionType: "individualShift",
              children: [
                { type: "elem", elem: n, shift: s },
                { type: "elem", elem: r, shift: 0 },
              ],
            },
            t
          );
        } else {
          var x = /cancel|phase/.test(a) ? ["svg-align"] : [];
          y = Vt.makeVList(
            {
              positionType: "individualShift",
              children: [
                { type: "elem", elem: r, shift: 0 },
                { type: "elem", elem: n, shift: s, wrapperClasses: x },
              ],
            },
            t
          );
        }
        if (/cancel/.test(a)) {
          y.height = r.height;
          y.depth = r.depth;
        }
        if (/cancel/.test(a) && !o) {
          return Vt.makeSpan(["mord", "cancel-lap"], [y], t);
        } else {
          return Vt.makeSpan(["mord"], [y], t);
        }
      };
      var Pa = (e, t) => {
        var r = 0;
        var a = new vr.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Sr(e.body, t)]);
        switch (e.label) {
          case "\\cancel":
            a.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            a.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\phase":
            a.setAttribute("notation", "phasorangle");
            break;
          case "\\sout":
            a.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            a.setAttribute("notation", "box");
            break;
          case "\\angl":
            a.setAttribute("notation", "actuarial");
            break;
          case "\\fcolorbox":
          case "\\colorbox":
            r = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm;
            a.setAttribute("width", "+" + 2 * r + "pt");
            a.setAttribute("height", "+" + 2 * r + "pt");
            a.setAttribute("lspace", r + "pt");
            a.setAttribute("voffset", r + "pt");
            if (e.label === "\\fcolorbox") {
              var i = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
              a.setAttribute("style", "border: " + i + "em solid " + String(e.borderColor));
            }
            break;
          case "\\xcancel":
            a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
        }
        if (e.backgroundColor) {
          a.setAttribute("mathbackground", e.backgroundColor);
        }
        return a;
      };
      jt({
        type: "enclose",
        names: ["\\colorbox"],
        props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] },
        handler(e, t, r) {
          var { parser: a, funcName: i } = e;
          var n = Er(t[0], "color-token").color;
          var s = t[1];
          return { type: "enclose", mode: a.mode, label: i, backgroundColor: n, body: s };
        },
        htmlBuilder: Va,
        mathmlBuilder: Pa,
      });
      jt({
        type: "enclose",
        names: ["\\fcolorbox"],
        props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] },
        handler(e, t, r) {
          var { parser: a, funcName: i } = e;
          var n = Er(t[0], "color-token").color;
          var s = Er(t[1], "color-token").color;
          var o = t[2];
          return { type: "enclose", mode: a.mode, label: i, backgroundColor: s, borderColor: n, body: o };
        },
        htmlBuilder: Va,
        mathmlBuilder: Pa,
      });
      jt({
        type: "enclose",
        names: ["\\fbox"],
        props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "enclose", mode: r.mode, label: "\\fbox", body: t[0] };
        },
      });
      jt({
        type: "enclose",
        names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
        props: { numArgs: 1 },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          return { type: "enclose", mode: r.mode, label: a, body: i };
        },
        htmlBuilder: Va,
        mathmlBuilder: Pa,
      });
      jt({
        type: "enclose",
        names: ["\\angl"],
        props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "enclose", mode: r.mode, label: "\\angl", body: t[0] };
        },
      });
      var Fa = {};
      function Ga(e) {
        var { type: t, names: r, props: a, handler: i, htmlBuilder: n, mathmlBuilder: s } = e;
        var o = { type: t, numArgs: a.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: i };
        for (var l = 0; l < r.length; ++l) {
          Fa[r[l]] = o;
        }
        if (n) {
          Wt[t] = n;
        }
        if (s) {
          _t[t] = s;
        }
      }
      var Ua = {};
      function Ya(e, t) {
        Ua[e] = t;
      }
      function Xa(e) {
        var t = [];
        e.consumeSpaces();
        var r = e.fetch().text;
        if (r === "\\relax") {
          e.consume();
          e.consumeSpaces();
          r = e.fetch().text;
        }
        while (r === "\\hline" || r === "\\hdashline") {
          e.consume();
          t.push(r === "\\hdashline");
          e.consumeSpaces();
          r = e.fetch().text;
        }
        return t;
      }
      var Wa = (e) => {
        var t = e.parser.settings;
        if (!t.displayMode) {
          throw new n("{" + e.envName + "} can be used only in" + " display mode.");
        }
      };
      function _a(e) {
        if (e.indexOf("ed") === -1) {
          return e.indexOf("*") === -1;
        }
      }
      function ja(e, t, r) {
        var {
          hskipBeforeAndAfter: a,
          addJot: s,
          cols: o,
          arraystretch: l,
          colSeparationType: h,
          autoTag: u,
          singleRow: m,
          emptySingleRow: c,
          maxNumCols: p,
          leqno: d,
        } = t;
        e.gullet.beginGroup();
        if (!m) {
          e.gullet.macros.set("\\cr", "\\\\\\relax");
        }
        if (!l) {
          var f = e.gullet.expandMacroAsText("\\arraystretch");
          if (f == null) {
            l = 1;
          } else {
            l = parseFloat(f);
            if (!l || l < 0) {
              throw new n("Invalid \\arraystretch: " + f);
            }
          }
        }
        e.gullet.beginGroup();
        var v = [];
        var g = [v];
        var b = [];
        var y = [];
        var x = u != null ? [] : undefined;
        function w() {
          if (u) {
            e.gullet.macros.set("\\@eqnsw", "1", true);
          }
        }
        function k() {
          if (x) {
            if (e.gullet.macros.get("\\df@tag")) {
              x.push(e.subparse([new i("\\df@tag")]));
              e.gullet.macros.set("\\df@tag", undefined, true);
            } else {
              x.push(Boolean(u) && e.gullet.macros.get("\\@eqnsw") === "1");
            }
          }
        }
        w();
        y.push(Xa(e));
        while (true) {
          var S = e.parseExpression(false, m ? "\\end" : "\\\\");
          e.gullet.endGroup();
          e.gullet.beginGroup();
          S = { type: "ordgroup", mode: e.mode, body: S };
          if (r) {
            S = { type: "styling", mode: e.mode, style: r, body: [S] };
          }
          v.push(S);
          var M = e.fetch().text;
          if (M === "&") {
            if (p && v.length === p) {
              if (m || h) {
                throw new n("Too many tab characters: &", e.nextToken);
              } else {
                e.settings.reportNonstrict("textEnv", "Too few columns " + "specified in the {array} column argument.");
              }
            }
            e.consume();
          } else if (M === "\\end") {
            k();
            if (v.length === 1 && S.type === "styling" && S.body[0].body.length === 0 && (g.length > 1 || !c)) {
              g.pop();
            }
            if (y.length < g.length + 1) {
              y.push([]);
            }
            break;
          } else if (M === "\\\\") {
            e.consume();
            var z = void 0;
            if (e.gullet.future().text !== " ") {
              z = e.parseSizeGroup(true);
            }
            b.push(z ? z.value : null);
            k();
            y.push(Xa(e));
            v = [];
            g.push(v);
            w();
          } else {
            throw new n("Expected & or \\\\ or \\cr or \\end", e.nextToken);
          }
        }
        e.gullet.endGroup();
        e.gullet.endGroup();
        return {
          type: "array",
          mode: e.mode,
          addJot: s,
          arraystretch: l,
          body: g,
          cols: o,
          rowGaps: b,
          hskipBeforeAndAfter: a,
          hLinesBeforeRow: y,
          colSeparationType: h,
          tags: x,
          leqno: d,
        };
      }
      function $a(e) {
        if (e.slice(0, 1) === "d") {
          return "display";
        } else {
          return "text";
        }
      }
      var Za = function e(t, r) {
        var a;
        var i;
        var s = t.body.length;
        var o = t.hLinesBeforeRow;
        var l = 0;
        var h = new Array(s);
        var u = [];
        var m = Math.max(r.fontMetrics().arrayRuleWidth, r.minRuleThickness);
        var c = 1 / r.fontMetrics().ptPerEm;
        var p = 5 * c;
        if (t.colSeparationType && t.colSeparationType === "small") {
          var d = r.havingStyle(L.SCRIPT).sizeMultiplier;
          p = 0.2778 * (d / r.sizeMultiplier);
        }
        var f = t.colSeparationType === "CD" ? fe({ number: 3, unit: "ex" }, r) : 12 * c;
        var v = 3 * c;
        var b = t.arraystretch * f;
        var y = 0.7 * b;
        var x = 0.3 * b;
        var w = 0;
        function k(e) {
          for (var t = 0; t < e.length; ++t) {
            if (t > 0) {
              w += 0.25;
            }
            u.push({ pos: w, isDashed: e[t] });
          }
        }
        k(o[0]);
        for (a = 0; a < t.body.length; ++a) {
          var S = t.body[a];
          var M = y;
          var z = x;
          if (l < S.length) {
            l = S.length;
          }
          var A = new Array(S.length);
          for (i = 0; i < S.length; ++i) {
            var T = hr(S[i], r);
            if (z < T.depth) {
              z = T.depth;
            }
            if (M < T.height) {
              M = T.height;
            }
            A[i] = T;
          }
          var B = t.rowGaps[a];
          var C = 0;
          if (B) {
            C = fe(B, r);
            if (C > 0) {
              C += x;
              if (z < C) {
                z = C;
              }
              C = 0;
            }
          }
          if (t.addJot) {
            z += v;
          }
          A.height = M;
          A.depth = z;
          w += M;
          A.pos = w;
          w += z + C;
          h[a] = A;
          k(o[a + 1]);
        }
        var N = w / 2 + r.fontMetrics().axisHeight;
        var q = t.cols || [];
        var I = [];
        var R;
        var H;
        var O = [];
        if (t.tags && t.tags.some((e) => e)) {
          for (a = 0; a < s; ++a) {
            var E = h[a];
            var D = E.pos - N;
            var V = t.tags[a];
            var P = void 0;
            if (V === true) {
              P = Vt.makeSpan(["eqn-num"], [], r);
            } else if (V === false) {
              P = Vt.makeSpan([], [], r);
            } else {
              P = Vt.makeSpan([], ar(V, r, true), r);
            }
            P.depth = E.depth;
            P.height = E.height;
            O.push({ type: "elem", elem: P, shift: D });
          }
        }
        for (i = 0, H = 0; i < l || H < q.length; ++i, ++H) {
          var F = q[H] || {};
          var G = true;
          while (F.type === "separator") {
            if (!G) {
              R = Vt.makeSpan(["arraycolsep"], []);
              R.style.width = ve(r.fontMetrics().doubleRuleSep);
              I.push(R);
            }
            if (F.separator === "|" || F.separator === ":") {
              var U = F.separator === "|" ? "solid" : "dashed";
              var Y = Vt.makeSpan(["vertical-separator"], [], r);
              Y.style.height = ve(w);
              Y.style.borderRightWidth = ve(m);
              Y.style.borderRightStyle = U;
              Y.style.margin = "0 " + ve(-m / 2);
              var X = w - N;
              if (X) {
                Y.style.verticalAlign = ve(-X);
              }
              I.push(Y);
            } else {
              throw new n("Invalid separator type: " + F.separator);
            }
            H++;
            F = q[H] || {};
            G = false;
          }
          if (i >= l) {
            continue;
          }
          var W = void 0;
          if (i > 0 || t.hskipBeforeAndAfter) {
            W = g.deflt(F.pregap, p);
            if (W !== 0) {
              R = Vt.makeSpan(["arraycolsep"], []);
              R.style.width = ve(W);
              I.push(R);
            }
          }
          var _ = [];
          for (a = 0; a < s; ++a) {
            var j = h[a];
            var $ = j[i];
            if (!$) {
              continue;
            }
            var Z = j.pos - N;
            $.depth = j.depth;
            $.height = j.height;
            _.push({ type: "elem", elem: $, shift: Z });
          }
          _ = Vt.makeVList({ positionType: "individualShift", children: _ }, r);
          _ = Vt.makeSpan(["col-align-" + (F.align || "c")], [_]);
          I.push(_);
          if (i < l - 1 || t.hskipBeforeAndAfter) {
            W = g.deflt(F.postgap, p);
            if (W !== 0) {
              R = Vt.makeSpan(["arraycolsep"], []);
              R.style.width = ve(W);
              I.push(R);
            }
          }
        }
        h = Vt.makeSpan(["mtable"], I);
        if (u.length > 0) {
          var K = Vt.makeLineSpan("hline", r, m);
          var J = Vt.makeLineSpan("hdashline", r, m);
          var Q = [{ type: "elem", elem: h, shift: 0 }];
          while (u.length > 0) {
            var ee = u.pop();
            var te = ee.pos - N;
            if (ee.isDashed) {
              Q.push({ type: "elem", elem: J, shift: te });
            } else {
              Q.push({ type: "elem", elem: K, shift: te });
            }
          }
          h = Vt.makeVList({ positionType: "individualShift", children: Q }, r);
        }
        if (O.length === 0) {
          return Vt.makeSpan(["mord"], [h], r);
        } else {
          var re = Vt.makeVList({ positionType: "individualShift", children: O }, r);
          re = Vt.makeSpan(["tag"], [re], r);
          return Vt.makeFragment([h, re]);
        }
      };
      var Ka = { c: "center ", l: "left ", r: "right " };
      var Ja = function e(t, r) {
        var a = [];
        var i = new vr.MathNode("mtd", [], ["mtr-glue"]);
        var n = new vr.MathNode("mtd", [], ["mml-eqn-num"]);
        for (var s = 0; s < t.body.length; s++) {
          var o = t.body[s];
          var l = [];
          for (var h = 0; h < o.length; h++) {
            l.push(new vr.MathNode("mtd", [Sr(o[h], r)]));
          }
          if (t.tags && t.tags[s]) {
            l.unshift(i);
            l.push(i);
            if (t.leqno) {
              l.unshift(n);
            } else {
              l.push(n);
            }
          }
          a.push(new vr.MathNode("mtr", l));
        }
        var u = new vr.MathNode("mtable", a);
        var m = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
        u.setAttribute("rowspacing", ve(m));
        var c = "";
        var p = "";
        if (t.cols && t.cols.length > 0) {
          var d = t.cols;
          var f = "";
          var v = false;
          var g = 0;
          var b = d.length;
          if (d[0].type === "separator") {
            c += "top ";
            g = 1;
          }
          if (d[d.length - 1].type === "separator") {
            c += "bottom ";
            b -= 1;
          }
          for (var y = g; y < b; y++) {
            if (d[y].type === "align") {
              p += Ka[d[y].align];
              if (v) {
                f += "none ";
              }
              v = true;
            } else if (d[y].type === "separator") {
              if (v) {
                f += d[y].separator === "|" ? "solid " : "dashed ";
                v = false;
              }
            }
          }
          u.setAttribute("columnalign", p.trim());
          if (/[sd]/.test(f)) {
            u.setAttribute("columnlines", f.trim());
          }
        }
        if (t.colSeparationType === "align") {
          var x = t.cols || [];
          var w = "";
          for (var k = 1; k < x.length; k++) {
            w += k % 2 ? "0em " : "1em ";
          }
          u.setAttribute("columnspacing", w.trim());
        } else if (t.colSeparationType === "alignat" || t.colSeparationType === "gather") {
          u.setAttribute("columnspacing", "0em");
        } else if (t.colSeparationType === "small") {
          u.setAttribute("columnspacing", "0.2778em");
        } else if (t.colSeparationType === "CD") {
          u.setAttribute("columnspacing", "0.5em");
        } else {
          u.setAttribute("columnspacing", "1em");
        }
        var S = "";
        var M = t.hLinesBeforeRow;
        c += M[0].length > 0 ? "left " : "";
        c += M[M.length - 1].length > 0 ? "right " : "";
        for (var z = 1; z < M.length - 1; z++) {
          S += M[z].length === 0 ? "none " : M[z][0] ? "dashed " : "solid ";
        }
        if (/[sd]/.test(S)) {
          u.setAttribute("rowlines", S.trim());
        }
        if (c !== "") {
          u = new vr.MathNode("menclose", [u]);
          u.setAttribute("notation", c.trim());
        }
        if (t.arraystretch && t.arraystretch < 1) {
          u = new vr.MathNode("mstyle", [u]);
          u.setAttribute("scriptlevel", "1");
        }
        return u;
      };
      var Qa = function e(t, r) {
        if (t.envName.indexOf("ed") === -1) {
          Wa(t);
        }
        var a = [];
        var i = t.envName.indexOf("at") > -1 ? "alignat" : "align";
        var s = t.envName === "split";
        var o = ja(
          t.parser,
          {
            cols: a,
            addJot: true,
            autoTag: s ? undefined : _a(t.envName),
            emptySingleRow: true,
            colSeparationType: i,
            maxNumCols: s ? 2 : undefined,
            leqno: t.parser.settings.leqno,
          },
          "display"
        );
        var l;
        var h = 0;
        var u = { type: "ordgroup", mode: t.mode, body: [] };
        if (r[0] && r[0].type === "ordgroup") {
          var m = "";
          for (var c = 0; c < r[0].body.length; c++) {
            var p = Er(r[0].body[c], "textord");
            m += p.text;
          }
          l = Number(m);
          h = l * 2;
        }
        var d = !h;
        o.body.forEach(function (e) {
          for (var t = 1; t < e.length; t += 2) {
            var r = Er(e[t], "styling");
            var a = Er(r.body[0], "ordgroup");
            a.body.unshift(u);
          }
          if (!d) {
            var i = e.length / 2;
            if (l < i) {
              throw new n("Too many math in a row: " + ("expected " + l + ", but got " + i), e[0]);
            }
          } else if (h < e.length) {
            h = e.length;
          }
        });
        for (var f = 0; f < h; ++f) {
          var v = "r";
          var g = 0;
          if (f % 2 === 1) {
            v = "l";
          } else if (f > 0 && d) {
            g = 1;
          }
          a[f] = { type: "align", align: v, pregap: g, postgap: 0 };
        }
        o.colSeparationType = d ? "align" : "alignat";
        return o;
      };
      Ga({
        type: "array",
        names: ["array", "darray"],
        props: { numArgs: 1 },
        handler(e, t) {
          var r = Dr(t[0]);
          var a = r ? [t[0]] : Er(t[0], "ordgroup").body;
          var i = a.map(function (e) {
            var t = Lr(e);
            var r = t.text;
            if ("lcr".indexOf(r) !== -1) {
              return { type: "align", align: r };
            } else if (r === "|") {
              return { type: "separator", separator: "|" };
            } else if (r === ":") {
              return { type: "separator", separator: ":" };
            }
            throw new n("Unknown column alignment: " + r, e);
          });
          var s = { cols: i, hskipBeforeAndAfter: true, maxNumCols: i.length };
          return ja(e.parser, s, $a(e.envName));
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({
        type: "array",
        names: [
          "matrix",
          "pmatrix",
          "bmatrix",
          "Bmatrix",
          "vmatrix",
          "Vmatrix",
          "matrix*",
          "pmatrix*",
          "bmatrix*",
          "Bmatrix*",
          "vmatrix*",
          "Vmatrix*",
        ],
        props: { numArgs: 0 },
        handler(e) {
          var t = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"],
          }[e.envName.replace("*", "")];
          var r = "c";
          var a = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: r }] };
          if (e.envName.charAt(e.envName.length - 1) === "*") {
            var i = e.parser;
            i.consumeSpaces();
            if (i.fetch().text === "[") {
              i.consume();
              i.consumeSpaces();
              r = i.fetch().text;
              if ("lcr".indexOf(r) === -1) {
                throw new n("Expected l or c or r", i.nextToken);
              }
              i.consume();
              i.consumeSpaces();
              i.expect("]");
              i.consume();
              a.cols = [{ type: "align", align: r }];
            }
          }
          var s = ja(e.parser, a, $a(e.envName));
          var o = Math.max(0, ...s.body.map((e) => e.length));
          s.cols = new Array(o).fill({ type: "align", align: r });
          return t ? { type: "leftright", mode: e.mode, body: [s], left: t[0], right: t[1], rightColor: undefined } : s;
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({
        type: "array",
        names: ["smallmatrix"],
        props: { numArgs: 0 },
        handler(e) {
          var t = { arraystretch: 0.5 };
          var r = ja(e.parser, t, "script");
          r.colSeparationType = "small";
          return r;
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({
        type: "array",
        names: ["subarray"],
        props: { numArgs: 1 },
        handler(e, t) {
          var r = Dr(t[0]);
          var a = r ? [t[0]] : Er(t[0], "ordgroup").body;
          var i = a.map(function (e) {
            var t = Lr(e);
            var r = t.text;
            if ("lc".indexOf(r) !== -1) {
              return { type: "align", align: r };
            }
            throw new n("Unknown column alignment: " + r, e);
          });
          if (i.length > 1) {
            throw new n("{subarray} can contain only one column");
          }
          var s = { cols: i, hskipBeforeAndAfter: false, arraystretch: 0.5 };
          s = ja(e.parser, s, "script");
          if (s.body.length > 0 && s.body[0].length > 1) {
            throw new n("{subarray} can contain only one column");
          }
          return s;
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({
        type: "array",
        names: ["cases", "dcases", "rcases", "drcases"],
        props: { numArgs: 0 },
        handler(e) {
          var t = {
            arraystretch: 1.2,
            cols: [
              { type: "align", align: "l", pregap: 0, postgap: 1 },
              { type: "align", align: "l", pregap: 0, postgap: 0 },
            ],
          };
          var r = ja(e.parser, t, $a(e.envName));
          return {
            type: "leftright",
            mode: e.mode,
            body: [r],
            left: e.envName.indexOf("r") > -1 ? "." : "\\{",
            right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
            rightColor: undefined,
          };
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Qa, htmlBuilder: Za, mathmlBuilder: Ja });
      Ga({
        type: "array",
        names: ["gathered", "gather", "gather*"],
        props: { numArgs: 0 },
        handler(e) {
          if (g.contains(["gather", "gather*"], e.envName)) {
            Wa(e);
          }
          var t = {
            cols: [{ type: "align", align: "c" }],
            addJot: true,
            colSeparationType: "gather",
            autoTag: _a(e.envName),
            emptySingleRow: true,
            leqno: e.parser.settings.leqno,
          };
          return ja(e.parser, t, "display");
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Qa, htmlBuilder: Za, mathmlBuilder: Ja });
      Ga({
        type: "array",
        names: ["equation", "equation*"],
        props: { numArgs: 0 },
        handler(e) {
          Wa(e);
          var t = { autoTag: _a(e.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e.parser.settings.leqno };
          return ja(e.parser, t, "display");
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ga({
        type: "array",
        names: ["CD"],
        props: { numArgs: 0 },
        handler(e) {
          Wa(e);
          return Jr(e.parser);
        },
        htmlBuilder: Za,
        mathmlBuilder: Ja,
      });
      Ya("\\nonumber", "\\gdef\\@eqnsw{0}");
      Ya("\\notag", "\\nonumber");
      jt({
        type: "text",
        names: ["\\hline", "\\hdashline"],
        props: { numArgs: 0, allowedInText: true, allowedInMath: true },
        handler(e, t) {
          throw new n(e.funcName + " valid only within array environment");
        },
      });
      var ei = Fa;
      jt({
        type: "environment",
        names: ["\\begin", "\\end"],
        props: { numArgs: 1, argTypes: ["text"] },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          if (i.type !== "ordgroup") {
            throw new n("Invalid environment name", i);
          }
          var s = "";
          for (var o = 0; o < i.body.length; ++o) {
            s += Er(i.body[o], "textord").text;
          }
          if (a === "\\begin") {
            if (!ei.hasOwnProperty(s)) {
              throw new n("No such environment: " + s, i);
            }
            var l = ei[s];
            var { args: h, optArgs: u } = r.parseArguments("\\begin{" + s + "}", l);
            var m = { mode: r.mode, envName: s, parser: r };
            var c = l.handler(m, h, u);
            r.expect("\\end", false);
            var p = r.nextToken;
            var d = Er(r.parseFunction(), "environment");
            if (d.name !== s) {
              throw new n("Mismatch: \\begin{" + s + "} matched by \\end{" + d.name + "}", p);
            }
            return c;
          }
          return { type: "environment", mode: r.mode, name: s, nameGroup: i };
        },
      });
      var ti = (e, t) => {
        var r = e.font;
        var a = t.withFont(r);
        return hr(e.body, a);
      };
      var ri = (e, t) => {
        var r = e.font;
        var a = t.withFont(r);
        return Sr(e.body, a);
      };
      var ai = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
      jt({
        type: "font",
        names: [
          "\\mathrm",
          "\\mathit",
          "\\mathbf",
          "\\mathnormal",
          "\\mathsfit",
          "\\mathbb",
          "\\mathcal",
          "\\mathfrak",
          "\\mathscr",
          "\\mathsf",
          "\\mathtt",
          "\\Bbb",
          "\\bold",
          "\\frak",
        ],
        props: { numArgs: 1, allowedInArgument: true },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = Zt(t[0]);
          var n = a;
          if (n in ai) {
            n = ai[n];
          }
          return { type: "font", mode: r.mode, font: n.slice(1), body: i };
        },
        htmlBuilder: ti,
        mathmlBuilder: ri,
      });
      jt({
        type: "mclass",
        names: ["\\boldsymbol", "\\bm"],
        props: { numArgs: 1 },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = t[0];
          var i = g.isCharacterBox(a);
          return {
            type: "mclass",
            mode: r.mode,
            mclass: Wr(a),
            body: [{ type: "font", mode: r.mode, font: "boldsymbol", body: a }],
            isCharacterBox: i,
          };
        },
      });
      jt({
        type: "font",
        names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
        props: { numArgs: 0, allowedInText: true },
        handler: (e, t) => {
          var { parser: r, funcName: a, breakOnTokenText: i } = e;
          var { mode: n } = r;
          var s = r.parseExpression(true, i);
          var o = "math" + a.slice(1);
          return { type: "font", mode: n, font: o, body: { type: "ordgroup", mode: r.mode, body: s } };
        },
        htmlBuilder: ti,
        mathmlBuilder: ri,
      });
      var ii = (e, t) => {
        var r = t;
        if (e === "display") {
          r = r.id >= L.SCRIPT.id ? r.text() : L.DISPLAY;
        } else if (e === "text" && r.size === L.DISPLAY.size) {
          r = L.TEXT;
        } else if (e === "script") {
          r = L.SCRIPT;
        } else if (e === "scriptscript") {
          r = L.SCRIPTSCRIPT;
        }
        return r;
      };
      var ni = (e, t) => {
        var r = ii(e.size, t.style);
        var a = r.fracNum();
        var i = r.fracDen();
        var n;
        n = t.havingStyle(a);
        var s = hr(e.numer, n, t);
        if (e.continued) {
          var o = 8.5 / t.fontMetrics().ptPerEm;
          var l = 3.5 / t.fontMetrics().ptPerEm;
          s.height = s.height < o ? o : s.height;
          s.depth = s.depth < l ? l : s.depth;
        }
        n = t.havingStyle(i);
        var h = hr(e.denom, n, t);
        var u;
        var m;
        var c;
        if (e.hasBarLine) {
          if (e.barSize) {
            m = fe(e.barSize, t);
            u = Vt.makeLineSpan("frac-line", t, m);
          } else {
            u = Vt.makeLineSpan("frac-line", t);
          }
          m = u.height;
          c = u.height;
        } else {
          u = null;
          m = 0;
          c = t.fontMetrics().defaultRuleThickness;
        }
        var p;
        var d;
        var f;
        if (r.size === L.DISPLAY.size || e.size === "display") {
          p = t.fontMetrics().num1;
          if (m > 0) {
            d = 3 * c;
          } else {
            d = 7 * c;
          }
          f = t.fontMetrics().denom1;
        } else {
          if (m > 0) {
            p = t.fontMetrics().num2;
            d = c;
          } else {
            p = t.fontMetrics().num3;
            d = 3 * c;
          }
          f = t.fontMetrics().denom2;
        }
        var v;
        if (!u) {
          var g = p - s.depth - (h.height - f);
          if (g < d) {
            p += 0.5 * (d - g);
            f += 0.5 * (d - g);
          }
          v = Vt.makeVList(
            {
              positionType: "individualShift",
              children: [
                { type: "elem", elem: h, shift: f },
                { type: "elem", elem: s, shift: -p },
              ],
            },
            t
          );
        } else {
          var b = t.fontMetrics().axisHeight;
          if (p - s.depth - (b + 0.5 * m) < d) {
            p += d - (p - s.depth - (b + 0.5 * m));
          }
          if (b - 0.5 * m - (h.height - f) < d) {
            f += d - (b - 0.5 * m - (h.height - f));
          }
          var y = -(b - 0.5 * m);
          v = Vt.makeVList(
            {
              positionType: "individualShift",
              children: [
                { type: "elem", elem: h, shift: f },
                { type: "elem", elem: u, shift: y },
                { type: "elem", elem: s, shift: -p },
              ],
            },
            t
          );
        }
        n = t.havingStyle(r);
        v.height *= n.sizeMultiplier / t.sizeMultiplier;
        v.depth *= n.sizeMultiplier / t.sizeMultiplier;
        var x;
        if (r.size === L.DISPLAY.size) {
          x = t.fontMetrics().delim1;
        } else if (r.size === L.SCRIPTSCRIPT.size) {
          x = t.havingStyle(L.SCRIPT).fontMetrics().delim2;
        } else {
          x = t.fontMetrics().delim2;
        }
        var w;
        var k;
        if (e.leftDelim == null) {
          w = lr(t, ["mopen"]);
        } else {
          w = Ha.customSizedDelim(e.leftDelim, x, true, t.havingStyle(r), e.mode, ["mopen"]);
        }
        if (e.continued) {
          k = Vt.makeSpan([]);
        } else if (e.rightDelim == null) {
          k = lr(t, ["mclose"]);
        } else {
          k = Ha.customSizedDelim(e.rightDelim, x, true, t.havingStyle(r), e.mode, ["mclose"]);
        }
        return Vt.makeSpan(["mord"].concat(n.sizingClasses(t)), [w, Vt.makeSpan(["mfrac"], [v]), k], t);
      };
      var si = (e, t) => {
        var r = new vr.MathNode("mfrac", [Sr(e.numer, t), Sr(e.denom, t)]);
        if (!e.hasBarLine) {
          r.setAttribute("linethickness", "0px");
        } else if (e.barSize) {
          var a = fe(e.barSize, t);
          r.setAttribute("linethickness", ve(a));
        }
        var i = ii(e.size, t.style);
        if (i.size !== t.style.size) {
          r = new vr.MathNode("mstyle", [r]);
          var n = i.size === L.DISPLAY.size ? "true" : "false";
          r.setAttribute("displaystyle", n);
          r.setAttribute("scriptlevel", "0");
        }
        if (e.leftDelim != null || e.rightDelim != null) {
          var s = [];
          if (e.leftDelim != null) {
            var o = new vr.MathNode("mo", [new vr.TextNode(e.leftDelim.replace("\\", ""))]);
            o.setAttribute("fence", "true");
            s.push(o);
          }
          s.push(r);
          if (e.rightDelim != null) {
            var l = new vr.MathNode("mo", [new vr.TextNode(e.rightDelim.replace("\\", ""))]);
            l.setAttribute("fence", "true");
            s.push(l);
          }
          return br(s);
        }
        return r;
      };
      jt({
        type: "genfrac",
        names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
        props: { numArgs: 2, allowedInArgument: true },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          var n = t[1];
          var s;
          var o = null;
          var l = null;
          var h = "auto";
          switch (a) {
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
              s = true;
              break;
            case "\\\\atopfrac":
              s = false;
              break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
              s = false;
              o = "(";
              l = ")";
              break;
            case "\\\\bracefrac":
              s = false;
              o = "\\{";
              l = "\\}";
              break;
            case "\\\\brackfrac":
              s = false;
              o = "[";
              l = "]";
              break;
            default:
              throw new Error("Unrecognized genfrac command");
          }
          switch (a) {
            case "\\dfrac":
            case "\\dbinom":
              h = "display";
              break;
            case "\\tfrac":
            case "\\tbinom":
              h = "text";
              break;
          }
          return {
            type: "genfrac",
            mode: r.mode,
            continued: false,
            numer: i,
            denom: n,
            hasBarLine: s,
            leftDelim: o,
            rightDelim: l,
            size: h,
            barSize: null,
          };
        },
        htmlBuilder: ni,
        mathmlBuilder: si,
      });
      jt({
        type: "genfrac",
        names: ["\\cfrac"],
        props: { numArgs: 2 },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          var n = t[1];
          return {
            type: "genfrac",
            mode: r.mode,
            continued: true,
            numer: i,
            denom: n,
            hasBarLine: true,
            leftDelim: null,
            rightDelim: null,
            size: "display",
            barSize: null,
          };
        },
      });
      jt({
        type: "infix",
        names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
        props: { numArgs: 0, infix: true },
        handler(e) {
          var { parser: t, funcName: r, token: a } = e;
          var i;
          switch (r) {
            case "\\over":
              i = "\\frac";
              break;
            case "\\choose":
              i = "\\binom";
              break;
            case "\\atop":
              i = "\\\\atopfrac";
              break;
            case "\\brace":
              i = "\\\\bracefrac";
              break;
            case "\\brack":
              i = "\\\\brackfrac";
              break;
            default:
              throw new Error("Unrecognized infix genfrac command");
          }
          return { type: "infix", mode: t.mode, replaceWith: i, token: a };
        },
      });
      var oi = ["display", "text", "script", "scriptscript"];
      var li = function e(t) {
        var r = null;
        if (t.length > 0) {
          r = t;
          r = r === "." ? null : r;
        }
        return r;
      };
      jt({
        type: "genfrac",
        names: ["\\genfrac"],
        props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] },
        handler(e, t) {
          var { parser: r } = e;
          var a = t[4];
          var i = t[5];
          var n = Zt(t[0]);
          var s = n.type === "atom" && n.family === "open" ? li(n.text) : null;
          var o = Zt(t[1]);
          var l = o.type === "atom" && o.family === "close" ? li(o.text) : null;
          var h = Er(t[2], "size");
          var u;
          var m = null;
          if (h.isBlank) {
            u = true;
          } else {
            m = h.value;
            u = m.number > 0;
          }
          var c = "auto";
          var p = t[3];
          if (p.type === "ordgroup") {
            if (p.body.length > 0) {
              var d = Er(p.body[0], "textord");
              c = oi[Number(d.text)];
            }
          } else {
            p = Er(p, "textord");
            c = oi[Number(p.text)];
          }
          return {
            type: "genfrac",
            mode: r.mode,
            numer: a,
            denom: i,
            continued: false,
            hasBarLine: u,
            barSize: m,
            leftDelim: s,
            rightDelim: l,
            size: c,
          };
        },
        htmlBuilder: ni,
        mathmlBuilder: si,
      });
      jt({
        type: "infix",
        names: ["\\above"],
        props: { numArgs: 1, argTypes: ["size"], infix: true },
        handler(e, t) {
          var { parser: r, funcName: a, token: i } = e;
          return { type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: Er(t[0], "size").value, token: i };
        },
      });
      jt({
        type: "genfrac",
        names: ["\\\\abovefrac"],
        props: { numArgs: 3, argTypes: ["math", "size", "math"] },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          var n = f(Er(t[1], "infix").size);
          var s = t[2];
          var o = n.number > 0;
          return {
            type: "genfrac",
            mode: r.mode,
            numer: i,
            denom: s,
            continued: false,
            hasBarLine: o,
            barSize: n,
            leftDelim: null,
            rightDelim: null,
            size: "auto",
          };
        },
        htmlBuilder: ni,
        mathmlBuilder: si,
      });
      var hi = (e, t) => {
        var r = t.style;
        var a;
        var i;
        if (e.type === "supsub") {
          a = e.sup ? hr(e.sup, t.havingStyle(r.sup()), t) : hr(e.sub, t.havingStyle(r.sub()), t);
          i = Er(e.base, "horizBrace");
        } else {
          i = Er(e, "horizBrace");
        }
        var n = hr(i.base, t.havingBaseStyle(L.DISPLAY));
        var s = Or.svgSpan(i, t);
        var o;
        if (i.isOver) {
          o = Vt.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: n },
                { type: "kern", size: 0.1 },
                { type: "elem", elem: s },
              ],
            },
            t
          );
          o.children[0].children[0].children[1].classes.push("svg-align");
        } else {
          o = Vt.makeVList(
            {
              positionType: "bottom",
              positionData: n.depth + 0.1 + s.height,
              children: [
                { type: "elem", elem: s },
                { type: "kern", size: 0.1 },
                { type: "elem", elem: n },
              ],
            },
            t
          );
          o.children[0].children[0].children[0].classes.push("svg-align");
        }
        if (a) {
          var l = Vt.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], t);
          if (i.isOver) {
            o = Vt.makeVList(
              {
                positionType: "firstBaseline",
                children: [
                  { type: "elem", elem: l },
                  { type: "kern", size: 0.2 },
                  { type: "elem", elem: a },
                ],
              },
              t
            );
          } else {
            o = Vt.makeVList(
              {
                positionType: "bottom",
                positionData: l.depth + 0.2 + a.height + a.depth,
                children: [
                  { type: "elem", elem: a },
                  { type: "kern", size: 0.2 },
                  { type: "elem", elem: l },
                ],
              },
              t
            );
          }
        }
        return Vt.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], t);
      };
      var ui = (e, t) => {
        var r = Or.mathMLnode(e.label);
        return new vr.MathNode(e.isOver ? "mover" : "munder", [Sr(e.base, t), r]);
      };
      jt({
        type: "horizBrace",
        names: ["\\overbrace", "\\underbrace"],
        props: { numArgs: 1 },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          return { type: "horizBrace", mode: r.mode, label: a, isOver: /^\\over/.test(a), base: t[0] };
        },
        htmlBuilder: hi,
        mathmlBuilder: ui,
      });
      jt({
        type: "href",
        names: ["\\href"],
        props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = t[1];
          var i = Er(t[0], "url").url;
          if (!r.settings.isTrusted({ command: "\\href", url: i })) {
            return r.formatUnsupportedCmd("\\href");
          }
          return { type: "href", mode: r.mode, href: i, body: Kt(a) };
        },
        htmlBuilder: (e, t) => {
          var r = ar(e.body, t, false);
          return Vt.makeAnchor(e.href, [], r, t);
        },
        mathmlBuilder: (e, t) => {
          var r = kr(e.body, t);
          if (!(r instanceof pr)) {
            r = new pr("mrow", [r]);
          }
          r.setAttribute("href", e.href);
          return r;
        },
      });
      jt({
        type: "href",
        names: ["\\url"],
        props: { numArgs: 1, argTypes: ["url"], allowedInText: true },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = Er(t[0], "url").url;
          if (!r.settings.isTrusted({ command: "\\url", url: a })) {
            return r.formatUnsupportedCmd("\\url");
          }
          var i = [];
          for (var n = 0; n < a.length; n++) {
            var s = a[n];
            if (s === "~") {
              s = "\\textasciitilde";
            }
            i.push({ type: "textord", mode: "text", text: s });
          }
          var o = { type: "text", mode: r.mode, font: "\\texttt", body: i };
          return { type: "href", mode: r.mode, href: a, body: Kt(o) };
        },
      });
      jt({
        type: "hbox",
        names: ["\\hbox"],
        props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "hbox", mode: r.mode, body: Kt(t[0]) };
        },
        htmlBuilder(e, t) {
          var r = ar(e.body, t, false);
          return Vt.makeFragment(r);
        },
        mathmlBuilder(e, t) {
          return new vr.MathNode("mrow", wr(e.body, t));
        },
      });
      jt({
        type: "html",
        names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
        props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true },
        handler: (e, t) => {
          var { parser: r, funcName: a, token: i } = e;
          var s = Er(t[0], "raw").string;
          var o = t[1];
          if (r.settings.strict) {
            r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
          }
          var l;
          var h = {};
          switch (a) {
            case "\\htmlClass":
              h.class = s;
              l = { command: "\\htmlClass", class: s };
              break;
            case "\\htmlId":
              h.id = s;
              l = { command: "\\htmlId", id: s };
              break;
            case "\\htmlStyle":
              h.style = s;
              l = { command: "\\htmlStyle", style: s };
              break;
            case "\\htmlData": {
              var u = s.split(",");
              for (var m = 0; m < u.length; m++) {
                var c = u[m].split("=");
                if (c.length !== 2) {
                  throw new n("Error parsing key-value for \\htmlData");
                }
                h["data-" + c[0].trim()] = c[1].trim();
              }
              l = { command: "\\htmlData", attributes: h };
              break;
            }
            default:
              throw new Error("Unrecognized html command");
          }
          if (!r.settings.isTrusted(l)) {
            return r.formatUnsupportedCmd(a);
          }
          return { type: "html", mode: r.mode, attributes: h, body: Kt(o) };
        },
        htmlBuilder: (e, t) => {
          var r = ar(e.body, t, false);
          var a = ["enclosing"];
          if (e.attributes.class) {
            a.push(...e.attributes.class.trim().split(/\s+/));
          }
          var i = Vt.makeSpan(a, r, t);
          for (var n in e.attributes) {
            if (n !== "class" && e.attributes.hasOwnProperty(n)) {
              i.setAttribute(n, e.attributes[n]);
            }
          }
          return i;
        },
        mathmlBuilder: (e, t) => kr(e.body, t),
      });
      jt({
        type: "htmlmathml",
        names: ["\\html@mathml"],
        props: { numArgs: 2, allowedInText: true },
        handler: (e, t) => {
          var { parser: r } = e;
          return { type: "htmlmathml", mode: r.mode, html: Kt(t[0]), mathml: Kt(t[1]) };
        },
        htmlBuilder: (e, t) => {
          var r = ar(e.html, t, false);
          return Vt.makeFragment(r);
        },
        mathmlBuilder: (e, t) => kr(e.mathml, t),
      });
      var mi = function e(t) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t)) {
          return { number: +t, unit: "bp" };
        } else {
          var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
          if (!r) {
            throw new n("Invalid size: '" + t + "' in \\includegraphics");
          }
          var a = { number: +(r[1] + r[2]), unit: r[3] };
          if (!de(a)) {
            throw new n("Invalid unit: '" + a.unit + "' in \\includegraphics.");
          }
          return a;
        }
      };
      jt({
        type: "includegraphics",
        names: ["\\includegraphics"],
        props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false },
        handler: (e, t, r) => {
          var { parser: a } = e;
          var i = { number: 0, unit: "em" };
          var s = { number: 0.9, unit: "em" };
          var o = { number: 0, unit: "em" };
          var l = "";
          if (r[0]) {
            var h = Er(r[0], "raw").string;
            var u = h.split(",");
            for (var m = 0; m < u.length; m++) {
              var c = u[m].split("=");
              if (c.length === 2) {
                var p = c[1].trim();
                switch (c[0].trim()) {
                  case "alt":
                    l = p;
                    break;
                  case "width":
                    i = mi(p);
                    break;
                  case "height":
                    s = mi(p);
                    break;
                  case "totalheight":
                    o = mi(p);
                    break;
                  default:
                    throw new n("Invalid key: '" + c[0] + "' in \\includegraphics.");
                }
              }
            }
          }
          var d = Er(t[0], "url").url;
          if (l === "") {
            l = d;
            l = l.replace(/^.*[\\/]/, "");
            l = l.substring(0, l.lastIndexOf("."));
          }
          if (!a.settings.isTrusted({ command: "\\includegraphics", url: d })) {
            return a.formatUnsupportedCmd("\\includegraphics");
          }
          return { type: "includegraphics", mode: a.mode, alt: l, width: i, height: s, totalheight: o, src: d };
        },
        htmlBuilder: (e, t) => {
          var r = fe(e.height, t);
          var a = 0;
          if (e.totalheight.number > 0) {
            a = fe(e.totalheight, t) - r;
          }
          var i = 0;
          if (e.width.number > 0) {
            i = fe(e.width, t);
          }
          var n = { height: ve(r + a) };
          if (i > 0) {
            n.width = ve(i);
          }
          if (a > 0) {
            n.verticalAlign = ve(-a);
          }
          var s = new Me(e.src, e.alt, n);
          s.height = r;
          s.depth = a;
          return s;
        },
        mathmlBuilder: (e, t) => {
          var r = new vr.MathNode("mglyph", []);
          r.setAttribute("alt", e.alt);
          var a = fe(e.height, t);
          var i = 0;
          if (e.totalheight.number > 0) {
            i = fe(e.totalheight, t) - a;
            r.setAttribute("valign", ve(-i));
          }
          r.setAttribute("height", ve(a + i));
          if (e.width.number > 0) {
            var n = fe(e.width, t);
            r.setAttribute("width", ve(n));
          }
          r.setAttribute("src", e.src);
          return r;
        },
      });
      jt({
        type: "kern",
        names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
        props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          var i = Er(t[0], "size");
          if (r.settings.strict) {
            var n = a[1] === "m";
            var s = i.value.unit === "mu";
            if (n) {
              if (!s) {
                r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + i.value.unit + " units"));
              }
              if (r.mode !== "math") {
                r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode");
              }
            } else {
              if (s) {
                r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
              }
            }
          }
          return { type: "kern", mode: r.mode, dimension: i.value };
        },
        htmlBuilder(e, t) {
          return Vt.makeGlue(e.dimension, t);
        },
        mathmlBuilder(e, t) {
          var r = fe(e.dimension, t);
          return new vr.SpaceNode(r);
        },
      });
      jt({
        type: "lap",
        names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
        props: { numArgs: 1, allowedInText: true },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          return { type: "lap", mode: r.mode, alignment: a.slice(5), body: i };
        },
        htmlBuilder: (e, t) => {
          var r;
          if (e.alignment === "clap") {
            r = Vt.makeSpan([], [hr(e.body, t)]);
            r = Vt.makeSpan(["inner"], [r], t);
          } else {
            r = Vt.makeSpan(["inner"], [hr(e.body, t)]);
          }
          var a = Vt.makeSpan(["fix"], []);
          var i = Vt.makeSpan([e.alignment], [r, a], t);
          var n = Vt.makeSpan(["strut"]);
          n.style.height = ve(i.height + i.depth);
          if (i.depth) {
            n.style.verticalAlign = ve(-i.depth);
          }
          i.children.unshift(n);
          i = Vt.makeSpan(["thinbox"], [i], t);
          return Vt.makeSpan(["mord", "vbox"], [i], t);
        },
        mathmlBuilder: (e, t) => {
          var r = new vr.MathNode("mpadded", [Sr(e.body, t)]);
          if (e.alignment !== "rlap") {
            var a = e.alignment === "llap" ? "-1" : "-0.5";
            r.setAttribute("lspace", a + "width");
          }
          r.setAttribute("width", "0px");
          return r;
        },
      });
      jt({
        type: "styling",
        names: ["\\(", "$"],
        props: { numArgs: 0, allowedInText: true, allowedInMath: false },
        handler(e, t) {
          var { funcName: r, parser: a } = e;
          var i = a.mode;
          a.switchMode("math");
          var n = r === "\\(" ? "\\)" : "$";
          var s = a.parseExpression(false, n);
          a.expect(n);
          a.switchMode(i);
          return { type: "styling", mode: a.mode, style: "text", body: s };
        },
      });
      jt({
        type: "text",
        names: ["\\)", "\\]"],
        props: { numArgs: 0, allowedInText: true, allowedInMath: false },
        handler(e, t) {
          throw new n("Mismatched " + e.funcName);
        },
      });
      var ci = (e, t) => {
        switch (t.style.size) {
          case L.DISPLAY.size:
            return e.display;
          case L.TEXT.size:
            return e.text;
          case L.SCRIPT.size:
            return e.script;
          case L.SCRIPTSCRIPT.size:
            return e.scriptscript;
          default:
            return e.text;
        }
      };
      jt({
        type: "mathchoice",
        names: ["\\mathchoice"],
        props: { numArgs: 4, primitive: true },
        handler: (e, t) => {
          var { parser: r } = e;
          return { type: "mathchoice", mode: r.mode, display: Kt(t[0]), text: Kt(t[1]), script: Kt(t[2]), scriptscript: Kt(t[3]) };
        },
        htmlBuilder: (e, t) => {
          var r = ci(e, t);
          var a = ar(r, t, false);
          return Vt.makeFragment(a);
        },
        mathmlBuilder: (e, t) => {
          var r = ci(e, t);
          return kr(r, t);
        },
      });
      var pi = (e, t, r, a, i, n, s) => {
        e = Vt.makeSpan([], [e]);
        var o = r && g.isCharacterBox(r);
        var l;
        var h;
        if (t) {
          var u = hr(t, a.havingStyle(i.sup()), a);
          h = { elem: u, kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - u.depth) };
        }
        if (r) {
          var m = hr(r, a.havingStyle(i.sub()), a);
          l = { elem: m, kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - m.height) };
        }
        var c;
        if (h && l) {
          var p = a.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + e.depth + s;
          c = Vt.makeVList(
            {
              positionType: "bottom",
              positionData: p,
              children: [
                { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
                { type: "elem", elem: l.elem, marginLeft: ve(-n) },
                { type: "kern", size: l.kern },
                { type: "elem", elem: e },
                { type: "kern", size: h.kern },
                { type: "elem", elem: h.elem, marginLeft: ve(n) },
                { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
              ],
            },
            a
          );
        } else if (l) {
          var d = e.height - s;
          c = Vt.makeVList(
            {
              positionType: "top",
              positionData: d,
              children: [
                { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
                { type: "elem", elem: l.elem, marginLeft: ve(-n) },
                { type: "kern", size: l.kern },
                { type: "elem", elem: e },
              ],
            },
            a
          );
        } else if (h) {
          var f = e.depth + s;
          c = Vt.makeVList(
            {
              positionType: "bottom",
              positionData: f,
              children: [
                { type: "elem", elem: e },
                { type: "kern", size: h.kern },
                { type: "elem", elem: h.elem, marginLeft: ve(n) },
                { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
              ],
            },
            a
          );
        } else {
          return e;
        }
        var v = [c];
        if (l && n !== 0 && !o) {
          var b = Vt.makeSpan(["mspace"], [], a);
          b.style.marginRight = ve(n);
          v.unshift(b);
        }
        return Vt.makeSpan(["mop", "op-limits"], v, a);
      };
      var di = ["\\smallint"];
      var fi = (e, t) => {
        var r;
        var a;
        var i = false;
        var n;
        if (e.type === "supsub") {
          r = e.sup;
          a = e.sub;
          n = Er(e.base, "op");
          i = true;
        } else {
          n = Er(e, "op");
        }
        var s = t.style;
        var o = false;
        if (s.size === L.DISPLAY.size && n.symbol && !g.contains(di, n.name)) {
          o = true;
        }
        var l;
        if (n.symbol) {
          var h = o ? "Size2-Regular" : "Size1-Regular";
          var u = "";
          if (n.name === "\\oiint" || n.name === "\\oiiint") {
            u = n.name.slice(1);
            n.name = u === "oiint" ? "\\iint" : "\\iiint";
          }
          l = Vt.makeSymbol(n.name, h, "math", t, ["mop", "op-symbol", o ? "large-op" : "small-op"]);
          if (u.length > 0) {
            var m = l.italic;
            var c = Vt.staticSvg(u + "Size" + (o ? "2" : "1"), t);
            l = Vt.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: l, shift: 0 },
                  { type: "elem", elem: c, shift: o ? 0.08 : 0 },
                ],
              },
              t
            );
            n.name = "\\" + u;
            l.classes.unshift("mop");
            l.italic = m;
          }
        } else if (n.body) {
          var p = ar(n.body, t, true);
          if (p.length === 1 && p[0] instanceof Ae) {
            l = p[0];
            l.classes[0] = "mop";
          } else {
            l = Vt.makeSpan(["mop"], p, t);
          }
        } else {
          var d = [];
          for (var f = 1; f < n.name.length; f++) {
            d.push(Vt.mathsym(n.name[f], n.mode, t));
          }
          l = Vt.makeSpan(["mop"], d, t);
        }
        var v = 0;
        var b = 0;
        if ((l instanceof Ae || n.name === "\\oiint" || n.name === "\\oiiint") && !n.suppressBaseShift) {
          v = (l.height - l.depth) / 2 - t.fontMetrics().axisHeight;
          b = l.italic;
        }
        if (i) {
          return pi(l, r, a, t, s, b, v);
        } else {
          if (v) {
            l.style.position = "relative";
            l.style.top = ve(v);
          }
          return l;
        }
      };
      var vi = (e, t) => {
        var r;
        if (e.symbol) {
          r = new pr("mo", [gr(e.name, e.mode)]);
          if (g.contains(di, e.name)) {
            r.setAttribute("largeop", "false");
          }
        } else if (e.body) {
          r = new pr("mo", wr(e.body, t));
        } else {
          r = new pr("mi", [new dr(e.name.slice(1))]);
          var a = new pr("mo", [gr("⁡", "text")]);
          if (e.parentIsSupSub) {
            r = new pr("mrow", [r, a]);
          } else {
            r = cr([r, a]);
          }
        }
        return r;
      };
      var gi = {
        "∏": "\\prod",
        "∐": "\\coprod",
        "∑": "\\sum",
        "⋀": "\\bigwedge",
        "⋁": "\\bigvee",
        "⋂": "\\bigcap",
        "⋃": "\\bigcup",
        "⨀": "\\bigodot",
        "⨁": "\\bigoplus",
        "⨂": "\\bigotimes",
        "⨄": "\\biguplus",
        "⨆": "\\bigsqcup",
      };
      jt({
        type: "op",
        names: [
          "\\coprod",
          "\\bigvee",
          "\\bigwedge",
          "\\biguplus",
          "\\bigcap",
          "\\bigcup",
          "\\intop",
          "\\prod",
          "\\sum",
          "\\bigotimes",
          "\\bigoplus",
          "\\bigodot",
          "\\bigsqcup",
          "\\smallint",
          "∏",
          "∐",
          "∑",
          "⋀",
          "⋁",
          "⋂",
          "⋃",
          "⨀",
          "⨁",
          "⨂",
          "⨄",
          "⨆",
        ],
        props: { numArgs: 0 },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = a;
          if (i.length === 1) {
            i = gi[i];
          }
          return { type: "op", mode: r.mode, limits: true, parentIsSupSub: false, symbol: true, name: i };
        },
        htmlBuilder: fi,
        mathmlBuilder: vi,
      });
      jt({
        type: "op",
        names: ["\\mathop"],
        props: { numArgs: 1, primitive: true },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = t[0];
          return { type: "op", mode: r.mode, limits: false, parentIsSupSub: false, symbol: false, body: Kt(a) };
        },
        htmlBuilder: fi,
        mathmlBuilder: vi,
      });
      var bi = { "∫": "\\int", "∬": "\\iint", "∭": "\\iiint", "∮": "\\oint", "∯": "\\oiint", "∰": "\\oiiint" };
      jt({
        type: "op",
        names: [
          "\\arcsin",
          "\\arccos",
          "\\arctan",
          "\\arctg",
          "\\arcctg",
          "\\arg",
          "\\ch",
          "\\cos",
          "\\cosec",
          "\\cosh",
          "\\cot",
          "\\cotg",
          "\\coth",
          "\\csc",
          "\\ctg",
          "\\cth",
          "\\deg",
          "\\dim",
          "\\exp",
          "\\hom",
          "\\ker",
          "\\lg",
          "\\ln",
          "\\log",
          "\\sec",
          "\\sin",
          "\\sinh",
          "\\sh",
          "\\tan",
          "\\tanh",
          "\\tg",
          "\\th",
        ],
        props: { numArgs: 0 },
        handler(e) {
          var { parser: t, funcName: r } = e;
          return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: false, name: r };
        },
        htmlBuilder: fi,
        mathmlBuilder: vi,
      });
      jt({
        type: "op",
        names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
        props: { numArgs: 0 },
        handler(e) {
          var { parser: t, funcName: r } = e;
          return { type: "op", mode: t.mode, limits: true, parentIsSupSub: false, symbol: false, name: r };
        },
        htmlBuilder: fi,
        mathmlBuilder: vi,
      });
      jt({
        type: "op",
        names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
        props: { numArgs: 0 },
        handler(e) {
          var { parser: t, funcName: r } = e;
          var a = r;
          if (a.length === 1) {
            a = bi[a];
          }
          return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: true, name: a };
        },
        htmlBuilder: fi,
        mathmlBuilder: vi,
      });
      var yi = (e, t) => {
        var r;
        var a;
        var i = false;
        var n;
        if (e.type === "supsub") {
          r = e.sup;
          a = e.sub;
          n = Er(e.base, "operatorname");
          i = true;
        } else {
          n = Er(e, "operatorname");
        }
        var s;
        if (n.body.length > 0) {
          var o = n.body.map((e) => {
            var t = e.text;
            if (typeof t === "string") {
              return { type: "textord", mode: e.mode, text: t };
            } else {
              return e;
            }
          });
          var l = ar(o, t.withFont("mathrm"), true);
          for (var h = 0; h < l.length; h++) {
            var u = l[h];
            if (u instanceof Ae) {
              u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
            }
          }
          s = Vt.makeSpan(["mop"], l, t);
        } else {
          s = Vt.makeSpan(["mop"], [], t);
        }
        if (i) {
          return pi(s, r, a, t, t.style, 0, 0);
        } else {
          return s;
        }
      };
      var xi = (e, t) => {
        var r = wr(e.body, t.withFont("mathrm"));
        var a = true;
        for (var i = 0; i < r.length; i++) {
          var n = r[i];
          if (n instanceof vr.SpaceNode);
          else if (n instanceof vr.MathNode) {
            switch (n.type) {
              case "mi":
              case "mn":
              case "ms":
              case "mspace":
              case "mtext":
                break;
              case "mo": {
                var s = n.children[0];
                if (n.children.length === 1 && s instanceof vr.TextNode) {
                  s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
                } else {
                  a = false;
                }
                break;
              }
              default:
                a = false;
            }
          } else {
            a = false;
          }
        }
        if (a) {
          var o = r.map((e) => e.toText()).join("");
          r = [new vr.TextNode(o)];
        }
        var l = new vr.MathNode("mi", r);
        l.setAttribute("mathvariant", "normal");
        var h = new vr.MathNode("mo", [gr("⁡", "text")]);
        if (e.parentIsSupSub) {
          return new vr.MathNode("mrow", [l, h]);
        } else {
          return vr.newDocumentFragment([l, h]);
        }
      };
      jt({
        type: "operatorname",
        names: ["\\operatorname@", "\\operatornamewithlimits"],
        props: { numArgs: 1 },
        handler: (e, t) => {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          return {
            type: "operatorname",
            mode: r.mode,
            body: Kt(i),
            alwaysHandleSupSub: a === "\\operatornamewithlimits",
            limits: false,
            parentIsSupSub: false,
          };
        },
        htmlBuilder: yi,
        mathmlBuilder: xi,
      });
      Ya("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
      $t({
        type: "ordgroup",
        htmlBuilder(e, t) {
          if (e.semisimple) {
            return Vt.makeFragment(ar(e.body, t, false));
          }
          return Vt.makeSpan(["mord"], ar(e.body, t, true), t);
        },
        mathmlBuilder(e, t) {
          return kr(e.body, t, true);
        },
      });
      jt({
        type: "overline",
        names: ["\\overline"],
        props: { numArgs: 1 },
        handler(e, t) {
          var { parser: r } = e;
          var a = t[0];
          return { type: "overline", mode: r.mode, body: a };
        },
        htmlBuilder(e, t) {
          var r = hr(e.body, t.havingCrampedStyle());
          var a = Vt.makeLineSpan("overline-line", t);
          var i = t.fontMetrics().defaultRuleThickness;
          var n = Vt.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: r },
                { type: "kern", size: 3 * i },
                { type: "elem", elem: a },
                { type: "kern", size: i },
              ],
            },
            t
          );
          return Vt.makeSpan(["mord", "overline"], [n], t);
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mo", [new vr.TextNode("‾")]);
          r.setAttribute("stretchy", "true");
          var a = new vr.MathNode("mover", [Sr(e.body, t), r]);
          a.setAttribute("accent", "true");
          return a;
        },
      });
      jt({
        type: "phantom",
        names: ["\\phantom"],
        props: { numArgs: 1, allowedInText: true },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = t[0];
          return { type: "phantom", mode: r.mode, body: Kt(a) };
        },
        htmlBuilder: (e, t) => {
          var r = ar(e.body, t.withPhantom(), false);
          return Vt.makeFragment(r);
        },
        mathmlBuilder: (e, t) => {
          var r = wr(e.body, t);
          return new vr.MathNode("mphantom", r);
        },
      });
      jt({
        type: "hphantom",
        names: ["\\hphantom"],
        props: { numArgs: 1, allowedInText: true },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = t[0];
          return { type: "hphantom", mode: r.mode, body: a };
        },
        htmlBuilder: (e, t) => {
          var r = Vt.makeSpan([], [hr(e.body, t.withPhantom())]);
          r.height = 0;
          r.depth = 0;
          if (r.children) {
            for (var a = 0; a < r.children.length; a++) {
              r.children[a].height = 0;
              r.children[a].depth = 0;
            }
          }
          r = Vt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t);
          return Vt.makeSpan(["mord"], [r], t);
        },
        mathmlBuilder: (e, t) => {
          var r = wr(Kt(e.body), t);
          var a = new vr.MathNode("mphantom", r);
          var i = new vr.MathNode("mpadded", [a]);
          i.setAttribute("height", "0px");
          i.setAttribute("depth", "0px");
          return i;
        },
      });
      jt({
        type: "vphantom",
        names: ["\\vphantom"],
        props: { numArgs: 1, allowedInText: true },
        handler: (e, t) => {
          var { parser: r } = e;
          var a = t[0];
          return { type: "vphantom", mode: r.mode, body: a };
        },
        htmlBuilder: (e, t) => {
          var r = Vt.makeSpan(["inner"], [hr(e.body, t.withPhantom())]);
          var a = Vt.makeSpan(["fix"], []);
          return Vt.makeSpan(["mord", "rlap"], [r, a], t);
        },
        mathmlBuilder: (e, t) => {
          var r = wr(Kt(e.body), t);
          var a = new vr.MathNode("mphantom", r);
          var i = new vr.MathNode("mpadded", [a]);
          i.setAttribute("width", "0px");
          return i;
        },
      });
      jt({
        type: "raisebox",
        names: ["\\raisebox"],
        props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true },
        handler(e, t) {
          var { parser: r } = e;
          var a = Er(t[0], "size").value;
          var i = t[1];
          return { type: "raisebox", mode: r.mode, dy: a, body: i };
        },
        htmlBuilder(e, t) {
          var r = hr(e.body, t);
          var a = fe(e.dy, t);
          return Vt.makeVList({ positionType: "shift", positionData: -a, children: [{ type: "elem", elem: r }] }, t);
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mpadded", [Sr(e.body, t)]);
          var a = e.dy.number + e.dy.unit;
          r.setAttribute("voffset", a);
          return r;
        },
      });
      jt({
        type: "internal",
        names: ["\\relax"],
        props: { numArgs: 0, allowedInText: true },
        handler(e) {
          var { parser: t } = e;
          return { type: "internal", mode: t.mode };
        },
      });
      jt({
        type: "rule",
        names: ["\\rule"],
        props: { numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["size", "size", "size"] },
        handler(e, t, r) {
          var { parser: a } = e;
          var i = r[0];
          var n = Er(t[0], "size");
          var s = Er(t[1], "size");
          return { type: "rule", mode: a.mode, shift: i && Er(i, "size").value, width: n.value, height: s.value };
        },
        htmlBuilder(e, t) {
          var r = Vt.makeSpan(["mord", "rule"], [], t);
          var a = fe(e.width, t);
          var i = fe(e.height, t);
          var n = e.shift ? fe(e.shift, t) : 0;
          r.style.borderRightWidth = ve(a);
          r.style.borderTopWidth = ve(i);
          r.style.bottom = ve(n);
          r.width = a;
          r.height = i + n;
          r.depth = -n;
          r.maxFontSize = i * 1.125 * t.sizeMultiplier;
          return r;
        },
        mathmlBuilder(e, t) {
          var r = fe(e.width, t);
          var a = fe(e.height, t);
          var i = e.shift ? fe(e.shift, t) : 0;
          var n = (t.color && t.getColor()) || "black";
          var s = new vr.MathNode("mspace");
          s.setAttribute("mathbackground", n);
          s.setAttribute("width", ve(r));
          s.setAttribute("height", ve(a));
          var o = new vr.MathNode("mpadded", [s]);
          if (i >= 0) {
            o.setAttribute("height", ve(i));
          } else {
            o.setAttribute("height", ve(i));
            o.setAttribute("depth", ve(-i));
          }
          o.setAttribute("voffset", ve(i));
          return o;
        },
      });
      function wi(e, t, r) {
        var a = ar(e, t, false);
        var i = t.sizeMultiplier / r.sizeMultiplier;
        for (var n = 0; n < a.length; n++) {
          var s = a[n].classes.indexOf("sizing");
          if (s < 0) {
            Array.prototype.push.apply(a[n].classes, t.sizingClasses(r));
          } else if (a[n].classes[s + 1] === "reset-size" + t.size) {
            a[n].classes[s + 1] = "reset-size" + r.size;
          }
          a[n].height *= i;
          a[n].depth *= i;
        }
        return Vt.makeFragment(a);
      }
      var ki = [
        "\\tiny",
        "\\sixptsize",
        "\\scriptsize",
        "\\footnotesize",
        "\\small",
        "\\normalsize",
        "\\large",
        "\\Large",
        "\\LARGE",
        "\\huge",
        "\\Huge",
      ];
      var Si = (e, t) => {
        var r = t.havingSize(e.size);
        return wi(e.body, r, t);
      };
      jt({
        type: "sizing",
        names: ki,
        props: { numArgs: 0, allowedInText: true },
        handler: (e, t) => {
          var { breakOnTokenText: r, funcName: a, parser: i } = e;
          var n = i.parseExpression(false, r);
          return { type: "sizing", mode: i.mode, size: ki.indexOf(a) + 1, body: n };
        },
        htmlBuilder: Si,
        mathmlBuilder: (e, t) => {
          var r = t.havingSize(e.size);
          var a = wr(e.body, r);
          var i = new vr.MathNode("mstyle", a);
          i.setAttribute("mathsize", ve(r.sizeMultiplier));
          return i;
        },
      });
      jt({
        type: "smash",
        names: ["\\smash"],
        props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true },
        handler: (e, t, r) => {
          var { parser: a } = e;
          var i = false;
          var n = false;
          var s = r[0] && Er(r[0], "ordgroup");
          if (s) {
            var o = "";
            for (var l = 0; l < s.body.length; ++l) {
              var h = s.body[l];
              o = h.text;
              if (o === "t") {
                i = true;
              } else if (o === "b") {
                n = true;
              } else {
                i = false;
                n = false;
                break;
              }
            }
          } else {
            i = true;
            n = true;
          }
          var u = t[0];
          return { type: "smash", mode: a.mode, body: u, smashHeight: i, smashDepth: n };
        },
        htmlBuilder: (e, t) => {
          var r = Vt.makeSpan([], [hr(e.body, t)]);
          if (!e.smashHeight && !e.smashDepth) {
            return r;
          }
          if (e.smashHeight) {
            r.height = 0;
            if (r.children) {
              for (var a = 0; a < r.children.length; a++) {
                r.children[a].height = 0;
              }
            }
          }
          if (e.smashDepth) {
            r.depth = 0;
            if (r.children) {
              for (var i = 0; i < r.children.length; i++) {
                r.children[i].depth = 0;
              }
            }
          }
          var n = Vt.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t);
          return Vt.makeSpan(["mord"], [n], t);
        },
        mathmlBuilder: (e, t) => {
          var r = new vr.MathNode("mpadded", [Sr(e.body, t)]);
          if (e.smashHeight) {
            r.setAttribute("height", "0px");
          }
          if (e.smashDepth) {
            r.setAttribute("depth", "0px");
          }
          return r;
        },
      });
      jt({
        type: "sqrt",
        names: ["\\sqrt"],
        props: { numArgs: 1, numOptionalArgs: 1 },
        handler(e, t, r) {
          var { parser: a } = e;
          var i = r[0];
          var n = t[0];
          return { type: "sqrt", mode: a.mode, body: n, index: i };
        },
        htmlBuilder(e, t) {
          var r = hr(e.body, t.havingCrampedStyle());
          if (r.height === 0) {
            r.height = t.fontMetrics().xHeight;
          }
          r = Vt.wrapFragment(r, t);
          var a = t.fontMetrics();
          var i = a.defaultRuleThickness;
          var n = i;
          if (t.style.id < L.TEXT.id) {
            n = t.fontMetrics().xHeight;
          }
          var s = i + n / 4;
          var o = r.height + r.depth + s + i;
          var { span: l, ruleWidth: h, advanceWidth: u } = Ha.sqrtImage(o, t);
          var m = l.height - h;
          if (m > r.height + r.depth + s) {
            s = (s + m - r.height - r.depth) / 2;
          }
          var c = l.height - r.height - s - h;
          r.style.paddingLeft = ve(u);
          var p = Vt.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: r, wrapperClasses: ["svg-align"] },
                { type: "kern", size: -(r.height + c) },
                { type: "elem", elem: l },
                { type: "kern", size: h },
              ],
            },
            t
          );
          if (!e.index) {
            return Vt.makeSpan(["mord", "sqrt"], [p], t);
          } else {
            var d = t.havingStyle(L.SCRIPTSCRIPT);
            var f = hr(e.index, d, t);
            var v = 0.6 * (p.height - p.depth);
            var g = Vt.makeVList({ positionType: "shift", positionData: -v, children: [{ type: "elem", elem: f }] }, t);
            var b = Vt.makeSpan(["root"], [g]);
            return Vt.makeSpan(["mord", "sqrt"], [b, p], t);
          }
        },
        mathmlBuilder(e, t) {
          var { body: r, index: a } = e;
          return a ? new vr.MathNode("mroot", [Sr(r, t), Sr(a, t)]) : new vr.MathNode("msqrt", [Sr(r, t)]);
        },
      });
      var Mi = { display: L.DISPLAY, text: L.TEXT, script: L.SCRIPT, scriptscript: L.SCRIPTSCRIPT };
      jt({
        type: "styling",
        names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
        props: { numArgs: 0, allowedInText: true, primitive: true },
        handler(e, t) {
          var { breakOnTokenText: r, funcName: a, parser: i } = e;
          var n = i.parseExpression(true, r);
          var s = a.slice(1, a.length - 5);
          return { type: "styling", mode: i.mode, style: s, body: n };
        },
        htmlBuilder(e, t) {
          var r = Mi[e.style];
          var a = t.havingStyle(r).withFont("");
          return wi(e.body, a, t);
        },
        mathmlBuilder(e, t) {
          var r = Mi[e.style];
          var a = t.havingStyle(r);
          var i = wr(e.body, a);
          var n = new vr.MathNode("mstyle", i);
          var s = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] };
          var o = s[e.style];
          n.setAttribute("scriptlevel", o[0]);
          n.setAttribute("displaystyle", o[1]);
          return n;
        },
      });
      var zi = function e(t, r) {
        var a = t.base;
        if (!a) {
          return null;
        } else if (a.type === "op") {
          var i = a.limits && (r.style.size === L.DISPLAY.size || a.alwaysHandleSupSub);
          return i ? fi : null;
        } else if (a.type === "operatorname") {
          var n = a.alwaysHandleSupSub && (r.style.size === L.DISPLAY.size || a.limits);
          return n ? yi : null;
        } else if (a.type === "accent") {
          return g.isCharacterBox(a.base) ? Vr : null;
        } else if (a.type === "horizBrace") {
          var s = !t.sub;
          return s === a.isOver ? hi : null;
        } else {
          return null;
        }
      };
      $t({
        type: "supsub",
        htmlBuilder(e, t) {
          var r = zi(e, t);
          if (r) {
            return r(e, t);
          }
          var { base: a, sup: i, sub: n } = e;
          var s = hr(a, t);
          var o;
          var l;
          var h = t.fontMetrics();
          var u = 0;
          var m = 0;
          var c = a && g.isCharacterBox(a);
          if (i) {
            var p = t.havingStyle(t.style.sup());
            o = hr(i, p, t);
            if (!c) {
              u = s.height - (p.fontMetrics().supDrop * p.sizeMultiplier) / t.sizeMultiplier;
            }
          }
          if (n) {
            var d = t.havingStyle(t.style.sub());
            l = hr(n, d, t);
            if (!c) {
              m = s.depth + (d.fontMetrics().subDrop * d.sizeMultiplier) / t.sizeMultiplier;
            }
          }
          var f;
          if (t.style === L.DISPLAY) {
            f = h.sup1;
          } else if (t.style.cramped) {
            f = h.sup3;
          } else {
            f = h.sup2;
          }
          var v = t.sizeMultiplier;
          var b = ve(0.5 / h.ptPerEm / v);
          var y = null;
          if (l) {
            var x = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
            if (s instanceof Ae || x) {
              y = ve(-s.italic);
            }
          }
          var w;
          if (o && l) {
            u = Math.max(u, f, o.depth + 0.25 * h.xHeight);
            m = Math.max(m, h.sub2);
            var k = h.defaultRuleThickness;
            var S = 4 * k;
            if (u - o.depth - (l.height - m) < S) {
              m = S - (u - o.depth) + l.height;
              var M = 0.8 * h.xHeight - (u - o.depth);
              if (M > 0) {
                u += M;
                m -= M;
              }
            }
            var z = [
              { type: "elem", elem: l, shift: m, marginRight: b, marginLeft: y },
              { type: "elem", elem: o, shift: -u, marginRight: b },
            ];
            w = Vt.makeVList({ positionType: "individualShift", children: z }, t);
          } else if (l) {
            m = Math.max(m, h.sub1, l.height - 0.8 * h.xHeight);
            var A = [{ type: "elem", elem: l, marginLeft: y, marginRight: b }];
            w = Vt.makeVList({ positionType: "shift", positionData: m, children: A }, t);
          } else if (o) {
            u = Math.max(u, f, o.depth + 0.25 * h.xHeight);
            w = Vt.makeVList({ positionType: "shift", positionData: -u, children: [{ type: "elem", elem: o, marginRight: b }] }, t);
          } else {
            throw new Error("supsub must have either sup or sub.");
          }
          var T = or(s, "right") || "mord";
          return Vt.makeSpan([T], [s, Vt.makeSpan(["msupsub"], [w])], t);
        },
        mathmlBuilder(e, t) {
          var r = false;
          var a;
          var i;
          if (e.base && e.base.type === "horizBrace") {
            i = !!e.sup;
            if (i === e.base.isOver) {
              r = true;
              a = e.base.isOver;
            }
          }
          if (e.base && (e.base.type === "op" || e.base.type === "operatorname")) {
            e.base.parentIsSupSub = true;
          }
          var n = [Sr(e.base, t)];
          if (e.sub) {
            n.push(Sr(e.sub, t));
          }
          if (e.sup) {
            n.push(Sr(e.sup, t));
          }
          var s;
          if (r) {
            s = a ? "mover" : "munder";
          } else if (!e.sub) {
            var o = e.base;
            if (o && o.type === "op" && o.limits && (t.style === L.DISPLAY || o.alwaysHandleSupSub)) {
              s = "mover";
            } else if (o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || t.style === L.DISPLAY)) {
              s = "mover";
            } else {
              s = "msup";
            }
          } else if (!e.sup) {
            var l = e.base;
            if (l && l.type === "op" && l.limits && (t.style === L.DISPLAY || l.alwaysHandleSupSub)) {
              s = "munder";
            } else if (l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || t.style === L.DISPLAY)) {
              s = "munder";
            } else {
              s = "msub";
            }
          } else {
            var h = e.base;
            if (h && h.type === "op" && h.limits && t.style === L.DISPLAY) {
              s = "munderover";
            } else if (h && h.type === "operatorname" && h.alwaysHandleSupSub && (t.style === L.DISPLAY || h.limits)) {
              s = "munderover";
            } else {
              s = "msubsup";
            }
          }
          return new vr.MathNode(s, n);
        },
      });
      $t({
        type: "atom",
        htmlBuilder(e, t) {
          return Vt.mathsym(e.text, e.mode, t, ["m" + e.family]);
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mo", [gr(e.text, e.mode)]);
          if (e.family === "bin") {
            var a = yr(e, t);
            if (a === "bold-italic") {
              r.setAttribute("mathvariant", a);
            }
          } else if (e.family === "punct") {
            r.setAttribute("separator", "true");
          } else if (e.family === "open" || e.family === "close") {
            r.setAttribute("stretchy", "false");
          }
          return r;
        },
      });
      var Ai = { mi: "italic", mn: "normal", mtext: "normal" };
      $t({
        type: "mathord",
        htmlBuilder(e, t) {
          return Vt.makeOrd(e, t, "mathord");
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mi", [gr(e.text, e.mode, t)]);
          var a = yr(e, t) || "italic";
          if (a !== Ai[r.type]) {
            r.setAttribute("mathvariant", a);
          }
          return r;
        },
      });
      $t({
        type: "textord",
        htmlBuilder(e, t) {
          return Vt.makeOrd(e, t, "textord");
        },
        mathmlBuilder(e, t) {
          var r = gr(e.text, e.mode, t);
          var a = yr(e, t) || "normal";
          var i;
          if (e.mode === "text") {
            i = new vr.MathNode("mtext", [r]);
          } else if (/[0-9]/.test(e.text)) {
            i = new vr.MathNode("mn", [r]);
          } else if (e.text === "\\prime") {
            i = new vr.MathNode("mo", [r]);
          } else {
            i = new vr.MathNode("mi", [r]);
          }
          if (a !== Ai[i.type]) {
            i.setAttribute("mathvariant", a);
          }
          return i;
        },
      });
      var Ti = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" };
      var Bi = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
      $t({
        type: "spacing",
        htmlBuilder(e, t) {
          if (Bi.hasOwnProperty(e.text)) {
            var r = Bi[e.text].className || "";
            if (e.mode === "text") {
              var a = Vt.makeOrd(e, t, "textord");
              a.classes.push(r);
              return a;
            } else {
              return Vt.makeSpan(["mspace", r], [Vt.mathsym(e.text, e.mode, t)], t);
            }
          } else if (Ti.hasOwnProperty(e.text)) {
            return Vt.makeSpan(["mspace", Ti[e.text]], [], t);
          } else {
            throw new n('Unknown type of space "' + e.text + '"');
          }
        },
        mathmlBuilder(e, t) {
          var r;
          if (Bi.hasOwnProperty(e.text)) {
            r = new vr.MathNode("mtext", [new vr.TextNode(" ")]);
          } else if (Ti.hasOwnProperty(e.text)) {
            return new vr.MathNode("mspace");
          } else {
            throw new n('Unknown type of space "' + e.text + '"');
          }
          return r;
        },
      });
      var Ci = () => {
        var e = new vr.MathNode("mtd", []);
        e.setAttribute("width", "50%");
        return e;
      };
      $t({
        type: "tag",
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mtable", [
            new vr.MathNode("mtr", [Ci(), new vr.MathNode("mtd", [kr(e.body, t)]), Ci(), new vr.MathNode("mtd", [kr(e.tag, t)])]),
          ]);
          r.setAttribute("width", "100%");
          return r;
        },
      });
      var Ni = { "\\text": undefined, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" };
      var qi = { "\\textbf": "textbf", "\\textmd": "textmd" };
      var Ii = { "\\textit": "textit", "\\textup": "textup" };
      var Ri = (e, t) => {
        var r = e.font;
        if (!r) {
          return t;
        } else if (Ni[r]) {
          return t.withTextFontFamily(Ni[r]);
        } else if (qi[r]) {
          return t.withTextFontWeight(qi[r]);
        } else if (r === "\\emph") {
          return t.fontShape === "textit" ? t.withTextFontShape("textup") : t.withTextFontShape("textit");
        }
        return t.withTextFontShape(Ii[r]);
      };
      jt({
        type: "text",
        names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"],
        props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true },
        handler(e, t) {
          var { parser: r, funcName: a } = e;
          var i = t[0];
          return { type: "text", mode: r.mode, body: Kt(i), font: a };
        },
        htmlBuilder(e, t) {
          var r = Ri(e, t);
          var a = ar(e.body, r, true);
          return Vt.makeSpan(["mord", "text"], a, r);
        },
        mathmlBuilder(e, t) {
          var r = Ri(e, t);
          return kr(e.body, r);
        },
      });
      jt({
        type: "underline",
        names: ["\\underline"],
        props: { numArgs: 1, allowedInText: true },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "underline", mode: r.mode, body: t[0] };
        },
        htmlBuilder(e, t) {
          var r = hr(e.body, t);
          var a = Vt.makeLineSpan("underline-line", t);
          var i = t.fontMetrics().defaultRuleThickness;
          var n = Vt.makeVList(
            {
              positionType: "top",
              positionData: r.height,
              children: [
                { type: "kern", size: i },
                { type: "elem", elem: a },
                { type: "kern", size: 3 * i },
                { type: "elem", elem: r },
              ],
            },
            t
          );
          return Vt.makeSpan(["mord", "underline"], [n], t);
        },
        mathmlBuilder(e, t) {
          var r = new vr.MathNode("mo", [new vr.TextNode("‾")]);
          r.setAttribute("stretchy", "true");
          var a = new vr.MathNode("munder", [Sr(e.body, t), r]);
          a.setAttribute("accentunder", "true");
          return a;
        },
      });
      jt({
        type: "vcenter",
        names: ["\\vcenter"],
        props: { numArgs: 1, argTypes: ["original"], allowedInText: false },
        handler(e, t) {
          var { parser: r } = e;
          return { type: "vcenter", mode: r.mode, body: t[0] };
        },
        htmlBuilder(e, t) {
          var r = hr(e.body, t);
          var a = t.fontMetrics().axisHeight;
          var i = 0.5 * (r.height - a - (r.depth + a));
          return Vt.makeVList({ positionType: "shift", positionData: i, children: [{ type: "elem", elem: r }] }, t);
        },
        mathmlBuilder(e, t) {
          return new vr.MathNode("mpadded", [Sr(e.body, t)], ["vcenter"]);
        },
      });
      jt({
        type: "verb",
        names: ["\\verb"],
        props: { numArgs: 0, allowedInText: true },
        handler(e, t, r) {
          throw new n("\\verb ended by end of line instead of matching delimiter");
        },
        htmlBuilder(e, t) {
          var r = Hi(e);
          var a = [];
          var i = t.havingStyle(t.style.text());
          for (var n = 0; n < r.length; n++) {
            var s = r[n];
            if (s === "~") {
              s = "\\textasciitilde";
            }
            a.push(Vt.makeSymbol(s, "Typewriter-Regular", e.mode, i, ["mord", "texttt"]));
          }
          return Vt.makeSpan(["mord", "text"].concat(i.sizingClasses(t)), Vt.tryCombineChars(a), i);
        },
        mathmlBuilder(e, t) {
          var r = new vr.TextNode(Hi(e));
          var a = new vr.MathNode("mtext", [r]);
          a.setAttribute("mathvariant", "monospace");
          return a;
        },
      });
      var Hi = (e) => e.body.replace(/ /g, e.star ? "␣" : " ");
      var Oi = Xt;
      var Ei = "[ \r\n\t]";
      var Li = "\\\\[a-zA-Z@]+";
      var Di = "\\\\[^\ud800-\udfff]";
      var Vi = "(" + Li + ")" + Ei + "*";
      var Pi = "\\\\(\n|[ \r\t]+\n?)[ \r\t]*";
      var Fi = "[̀-ͯ]";
      var Gi = new RegExp(Fi + "+$");
      var Ui =
        "(" +
        Ei +
        "+)|" +
        (Pi + "|") +
        "([!-\\[\\]-‧‪-퟿豈-￿]" +
        (Fi + "*") +
        "|[\ud800-\udbff][\udc00-\udfff]" +
        (Fi + "*") +
        "|\\\\verb\\*([^]).*?\\4" +
        "|\\\\verb([^*a-zA-Z]).*?\\5" +
        ("|" + Vi) +
        ("|" + Di + ")");
      class Yi {
        constructor(e, t) {
          this.input = void 0;
          this.settings = void 0;
          this.tokenRegex = void 0;
          this.catcodes = void 0;
          this.input = e;
          this.settings = t;
          this.tokenRegex = new RegExp(Ui, "g");
          this.catcodes = { "%": 14, "~": 13 };
        }
        setCatcode(e, t) {
          this.catcodes[e] = t;
        }
        lex() {
          var e = this.input;
          var t = this.tokenRegex.lastIndex;
          if (t === e.length) {
            return new i("EOF", new a(this, t, t));
          }
          var r = this.tokenRegex.exec(e);
          if (r === null || r.index !== t) {
            throw new n("Unexpected character: '" + e[t] + "'", new i(e[t], new a(this, t, t + 1)));
          }
          var s = r[6] || r[3] || (r[2] ? "\\ " : " ");
          if (this.catcodes[s] === 14) {
            var o = e.indexOf("\n", this.tokenRegex.lastIndex);
            if (o === -1) {
              this.tokenRegex.lastIndex = e.length;
              this.settings.reportNonstrict(
                "commentAtEnd",
                "% comment has no terminating newline; LaTeX would " + "fail because of commenting the end of math mode (e.g. $)"
              );
            } else {
              this.tokenRegex.lastIndex = o + 1;
            }
            return this.lex();
          }
          return new i(s, new a(this, t, this.tokenRegex.lastIndex));
        }
      }
      class Xi {
        constructor(e, t) {
          if (e === void 0) {
            e = {};
          }
          if (t === void 0) {
            t = {};
          }
          this.current = void 0;
          this.builtins = void 0;
          this.undefStack = void 0;
          this.current = t;
          this.builtins = e;
          this.undefStack = [];
        }
        beginGroup() {
          this.undefStack.push({});
        }
        endGroup() {
          if (this.undefStack.length === 0) {
            throw new n("Unbalanced namespace destruction: attempt " + "to pop global namespace; please report this as a bug");
          }
          var e = this.undefStack.pop();
          for (var t in e) {
            if (e.hasOwnProperty(t)) {
              if (e[t] == null) {
                delete this.current[t];
              } else {
                this.current[t] = e[t];
              }
            }
          }
        }
        endGroups() {
          while (this.undefStack.length > 0) {
            this.endGroup();
          }
        }
        has(e) {
          return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
        }
        get(e) {
          if (this.current.hasOwnProperty(e)) {
            return this.current[e];
          } else {
            return this.builtins[e];
          }
        }
        set(e, t, r) {
          if (r === void 0) {
            r = false;
          }
          if (r) {
            for (var a = 0; a < this.undefStack.length; a++) {
              delete this.undefStack[a][e];
            }
            if (this.undefStack.length > 0) {
              this.undefStack[this.undefStack.length - 1][e] = t;
            }
          } else {
            var i = this.undefStack[this.undefStack.length - 1];
            if (i && !i.hasOwnProperty(e)) {
              i[e] = this.current[e];
            }
          }
          if (t == null) {
            delete this.current[e];
          } else {
            this.current[e] = t;
          }
        }
      }
      var Wi = Ua;
      Ya("\\noexpand", function (e) {
        var t = e.popToken();
        if (e.isExpandable(t.text)) {
          t.noexpand = true;
          t.treatAsRelax = true;
        }
        return { tokens: [t], numArgs: 0 };
      });
      Ya("\\expandafter", function (e) {
        var t = e.popToken();
        e.expandOnce(true);
        return { tokens: [t], numArgs: 0 };
      });
      Ya("\\@firstoftwo", function (e) {
        var t = e.consumeArgs(2);
        return { tokens: t[0], numArgs: 0 };
      });
      Ya("\\@secondoftwo", function (e) {
        var t = e.consumeArgs(2);
        return { tokens: t[1], numArgs: 0 };
      });
      Ya("\\@ifnextchar", function (e) {
        var t = e.consumeArgs(3);
        e.consumeSpaces();
        var r = e.future();
        if (t[0].length === 1 && t[0][0].text === r.text) {
          return { tokens: t[1], numArgs: 0 };
        } else {
          return { tokens: t[2], numArgs: 0 };
        }
      });
      Ya("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
      Ya("\\TextOrMath", function (e) {
        var t = e.consumeArgs(2);
        if (e.mode === "text") {
          return { tokens: t[0], numArgs: 0 };
        } else {
          return { tokens: t[1], numArgs: 0 };
        }
      });
      var _i = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        A: 10,
        b: 11,
        B: 11,
        c: 12,
        C: 12,
        d: 13,
        D: 13,
        e: 14,
        E: 14,
        f: 15,
        F: 15,
      };
      Ya("\\char", function (e) {
        var t = e.popToken();
        var r;
        var a = "";
        if (t.text === "'") {
          r = 8;
          t = e.popToken();
        } else if (t.text === '"') {
          r = 16;
          t = e.popToken();
        } else if (t.text === "`") {
          t = e.popToken();
          if (t.text[0] === "\\") {
            a = t.text.charCodeAt(1);
          } else if (t.text === "EOF") {
            throw new n("\\char` missing argument");
          } else {
            a = t.text.charCodeAt(0);
          }
        } else {
          r = 10;
        }
        if (r) {
          a = _i[t.text];
          if (a == null || a >= r) {
            throw new n("Invalid base-" + r + " digit " + t.text);
          }
          var i;
          while ((i = _i[e.future().text]) != null && i < r) {
            a *= r;
            a += i;
            e.popToken();
          }
        }
        return "\\@char{" + a + "}";
      });
      var ji = (e, t, r, a) => {
        var i = e.consumeArg().tokens;
        if (i.length !== 1) {
          throw new n("\\newcommand's first argument must be a macro name");
        }
        var s = i[0].text;
        var o = e.isDefined(s);
        if (o && !t) {
          throw new n("\\newcommand{" + s + "} attempting to redefine " + (s + "; use \\renewcommand"));
        }
        if (!o && !r) {
          throw new n("\\renewcommand{" + s + "} when command " + s + " " + "does not yet exist; use \\newcommand");
        }
        var l = 0;
        i = e.consumeArg().tokens;
        if (i.length === 1 && i[0].text === "[") {
          var h = "";
          var u = e.expandNextToken();
          while (u.text !== "]" && u.text !== "EOF") {
            h += u.text;
            u = e.expandNextToken();
          }
          if (!h.match(/^\s*[0-9]+\s*$/)) {
            throw new n("Invalid number of arguments: " + h);
          }
          l = parseInt(h);
          i = e.consumeArg().tokens;
        }
        if (!(o && a)) {
          e.macros.set(s, { tokens: i, numArgs: l });
        }
        return "";
      };
      Ya("\\newcommand", (e) => ji(e, false, true, false));
      Ya("\\renewcommand", (e) => ji(e, true, false, false));
      Ya("\\providecommand", (e) => ji(e, true, true, true));
      Ya("\\message", (e) => {
        var t = e.consumeArgs(1)[0];
        console.log(
          t
            .reverse()
            .map((e) => e.text)
            .join("")
        );
        return "";
      });
      Ya("\\errmessage", (e) => {
        var t = e.consumeArgs(1)[0];
        console.error(
          t
            .reverse()
            .map((e) => e.text)
            .join("")
        );
        return "";
      });
      Ya("\\show", (e) => {
        var t = e.popToken();
        var r = t.text;
        console.log(t, e.macros.get(r), Oi[r], He.math[r], He.text[r]);
        return "";
      });
      Ya("\\bgroup", "{");
      Ya("\\egroup", "}");
      Ya("~", "\\nobreakspace");
      Ya("\\lq", "`");
      Ya("\\rq", "'");
      Ya("\\aa", "\\r a");
      Ya("\\AA", "\\r A");
      Ya("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
      Ya("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
      Ya("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
      Ya("ℬ", "\\mathscr{B}");
      Ya("ℰ", "\\mathscr{E}");
      Ya("ℱ", "\\mathscr{F}");
      Ya("ℋ", "\\mathscr{H}");
      Ya("ℐ", "\\mathscr{I}");
      Ya("ℒ", "\\mathscr{L}");
      Ya("ℳ", "\\mathscr{M}");
      Ya("ℛ", "\\mathscr{R}");
      Ya("ℭ", "\\mathfrak{C}");
      Ya("ℌ", "\\mathfrak{H}");
      Ya("ℨ", "\\mathfrak{Z}");
      Ya("\\Bbbk", "\\Bbb{k}");
      Ya("·", "\\cdotp");
      Ya("\\llap", "\\mathllap{\\textrm{#1}}");
      Ya("\\rlap", "\\mathrlap{\\textrm{#1}}");
      Ya("\\clap", "\\mathclap{\\textrm{#1}}");
      Ya("\\mathstrut", "\\vphantom{(}");
      Ya("\\underbar", "\\underline{\\text{#1}}");
      Ya("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
      Ya("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
      Ya("\\ne", "\\neq");
      Ya("≠", "\\neq");
      Ya("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}" + "{\\mathrel{\\char`∉}}");
      Ya("∉", "\\notin");
      Ya("≘", "\\html@mathml{" + "\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}" + "}{\\mathrel{\\char`≘}}");
      Ya("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
      Ya("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
      Ya("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}" + "{\\mathrel{\\char`≛}}");
      Ya("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}" + "{\\mathrel{\\char`≝}}");
      Ya("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}" + "{\\mathrel{\\char`≞}}");
      Ya("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
      Ya("⟂", "\\perp");
      Ya("‼", "\\mathclose{!\\mkern-0.8mu!}");
      Ya("∌", "\\notni");
      Ya("⌜", "\\ulcorner");
      Ya("⌝", "\\urcorner");
      Ya("⌞", "\\llcorner");
      Ya("⌟", "\\lrcorner");
      Ya("©", "\\copyright");
      Ya("®", "\\textregistered");
      Ya("️", "\\textregistered");
      Ya("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
      Ya("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
      Ya("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
      Ya("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
      Ya("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
      Ya("⋮", "\\vdots");
      Ya("\\varGamma", "\\mathit{\\Gamma}");
      Ya("\\varDelta", "\\mathit{\\Delta}");
      Ya("\\varTheta", "\\mathit{\\Theta}");
      Ya("\\varLambda", "\\mathit{\\Lambda}");
      Ya("\\varXi", "\\mathit{\\Xi}");
      Ya("\\varPi", "\\mathit{\\Pi}");
      Ya("\\varSigma", "\\mathit{\\Sigma}");
      Ya("\\varUpsilon", "\\mathit{\\Upsilon}");
      Ya("\\varPhi", "\\mathit{\\Phi}");
      Ya("\\varPsi", "\\mathit{\\Psi}");
      Ya("\\varOmega", "\\mathit{\\Omega}");
      Ya("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
      Ya("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}" + "\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
      Ya("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
      Ya("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
      Ya("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
      Ya("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
      Ya("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
      Ya("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
      var $i = {
        ",": "\\dotsc",
        "\\not": "\\dotsb",
        "+": "\\dotsb",
        "=": "\\dotsb",
        "<": "\\dotsb",
        ">": "\\dotsb",
        "-": "\\dotsb",
        "*": "\\dotsb",
        ":": "\\dotsb",
        "\\DOTSB": "\\dotsb",
        "\\coprod": "\\dotsb",
        "\\bigvee": "\\dotsb",
        "\\bigwedge": "\\dotsb",
        "\\biguplus": "\\dotsb",
        "\\bigcap": "\\dotsb",
        "\\bigcup": "\\dotsb",
        "\\prod": "\\dotsb",
        "\\sum": "\\dotsb",
        "\\bigotimes": "\\dotsb",
        "\\bigoplus": "\\dotsb",
        "\\bigodot": "\\dotsb",
        "\\bigsqcup": "\\dotsb",
        "\\And": "\\dotsb",
        "\\longrightarrow": "\\dotsb",
        "\\Longrightarrow": "\\dotsb",
        "\\longleftarrow": "\\dotsb",
        "\\Longleftarrow": "\\dotsb",
        "\\longleftrightarrow": "\\dotsb",
        "\\Longleftrightarrow": "\\dotsb",
        "\\mapsto": "\\dotsb",
        "\\longmapsto": "\\dotsb",
        "\\hookrightarrow": "\\dotsb",
        "\\doteq": "\\dotsb",
        "\\mathbin": "\\dotsb",
        "\\mathrel": "\\dotsb",
        "\\relbar": "\\dotsb",
        "\\Relbar": "\\dotsb",
        "\\xrightarrow": "\\dotsb",
        "\\xleftarrow": "\\dotsb",
        "\\DOTSI": "\\dotsi",
        "\\int": "\\dotsi",
        "\\oint": "\\dotsi",
        "\\iint": "\\dotsi",
        "\\iiint": "\\dotsi",
        "\\iiiint": "\\dotsi",
        "\\idotsint": "\\dotsi",
        "\\DOTSX": "\\dotsx",
      };
      Ya("\\dots", function (e) {
        var t = "\\dotso";
        var r = e.expandAfterFuture().text;
        if (r in $i) {
          t = $i[r];
        } else if (r.slice(0, 4) === "\\not") {
          t = "\\dotsb";
        } else if (r in He.math) {
          if (g.contains(["bin", "rel"], He.math[r].group)) {
            t = "\\dotsb";
          }
        }
        return t;
      });
      var Zi = {
        ")": true,
        "]": true,
        "\\rbrack": true,
        "\\}": true,
        "\\rbrace": true,
        "\\rangle": true,
        "\\rceil": true,
        "\\rfloor": true,
        "\\rgroup": true,
        "\\rmoustache": true,
        "\\right": true,
        "\\bigr": true,
        "\\biggr": true,
        "\\Bigr": true,
        "\\Biggr": true,
        $: true,
        ";": true,
        ".": true,
        ",": true,
      };
      Ya("\\dotso", function (e) {
        var t = e.future().text;
        if (t in Zi) {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });
      Ya("\\dotsc", function (e) {
        var t = e.future().text;
        if (t in Zi && t !== ",") {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });
      Ya("\\cdots", function (e) {
        var t = e.future().text;
        if (t in Zi) {
          return "\\@cdots\\,";
        } else {
          return "\\@cdots";
        }
      });
      Ya("\\dotsb", "\\cdots");
      Ya("\\dotsm", "\\cdots");
      Ya("\\dotsi", "\\!\\cdots");
      Ya("\\dotsx", "\\ldots\\,");
      Ya("\\DOTSI", "\\relax");
      Ya("\\DOTSB", "\\relax");
      Ya("\\DOTSX", "\\relax");
      Ya("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
      Ya("\\,", "\\tmspace+{3mu}{.1667em}");
      Ya("\\thinspace", "\\,");
      Ya("\\>", "\\mskip{4mu}");
      Ya("\\:", "\\tmspace+{4mu}{.2222em}");
      Ya("\\medspace", "\\:");
      Ya("\\;", "\\tmspace+{5mu}{.2777em}");
      Ya("\\thickspace", "\\;");
      Ya("\\!", "\\tmspace-{3mu}{.1667em}");
      Ya("\\negthinspace", "\\!");
      Ya("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
      Ya("\\negthickspace", "\\tmspace-{5mu}{.277em}");
      Ya("\\enspace", "\\kern.5em ");
      Ya("\\enskip", "\\hskip.5em\\relax");
      Ya("\\quad", "\\hskip1em\\relax");
      Ya("\\qquad", "\\hskip2em\\relax");
      Ya("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
      Ya("\\tag@paren", "\\tag@literal{({#1})}");
      Ya("\\tag@literal", (e) => {
        if (e.macros.get("\\df@tag")) {
          throw new n("Multiple \\tag");
        }
        return "\\gdef\\df@tag{\\text{#1}}";
      });
      Ya(
        "\\bmod",
        "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}" +
          "\\mathbin{\\rm mod}" +
          "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"
      );
      Ya("\\pod", "\\allowbreak" + "\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
      Ya("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
      Ya("\\mod", "\\allowbreak" + "\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}" + "{\\rm mod}\\,\\,#1");
      Ya("\\newline", "\\\\\\relax");
      Ya("\\TeX", "\\textrm{\\html@mathml{" + "T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX" + "}{TeX}}");
      var Ki = ve(te["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * te["Main-Regular"]["A".charCodeAt(0)][1]);
      Ya("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Ki + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
      Ya("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Ki + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
      Ya("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
      Ya("\\@hspace", "\\hskip #1\\relax");
      Ya("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
      Ya("\\ordinarycolon", ":");
      Ya("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
      Ya("\\dblcolon", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}" + '{\\mathop{\\char"2237}}');
      Ya("\\coloneqq", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}" + '{\\mathop{\\char"2254}}');
      Ya("\\Coloneqq", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}" + '{\\mathop{\\char"2237\\char"3d}}');
      Ya("\\coloneq", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}" + '{\\mathop{\\char"3a\\char"2212}}');
      Ya("\\Coloneq", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}" + '{\\mathop{\\char"2237\\char"2212}}');
      Ya("\\eqqcolon", "\\html@mathml{" + "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}" + '{\\mathop{\\char"2255}}');
      Ya("\\Eqqcolon", "\\html@mathml{" + "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}" + '{\\mathop{\\char"3d\\char"2237}}');
      Ya("\\eqcolon", "\\html@mathml{" + "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}" + '{\\mathop{\\char"2239}}');
      Ya("\\Eqcolon", "\\html@mathml{" + "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}" + '{\\mathop{\\char"2212\\char"2237}}');
      Ya("\\colonapprox", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}" + '{\\mathop{\\char"3a\\char"2248}}');
      Ya("\\Colonapprox", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}" + '{\\mathop{\\char"2237\\char"2248}}');
      Ya("\\colonsim", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}" + '{\\mathop{\\char"3a\\char"223c}}');
      Ya("\\Colonsim", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}" + '{\\mathop{\\char"2237\\char"223c}}');
      Ya("∷", "\\dblcolon");
      Ya("∹", "\\eqcolon");
      Ya("≔", "\\coloneqq");
      Ya("≕", "\\eqqcolon");
      Ya("⩴", "\\Coloneqq");
      Ya("\\ratio", "\\vcentcolon");
      Ya("\\coloncolon", "\\dblcolon");
      Ya("\\colonequals", "\\coloneqq");
      Ya("\\coloncolonequals", "\\Coloneqq");
      Ya("\\equalscolon", "\\eqqcolon");
      Ya("\\equalscoloncolon", "\\Eqqcolon");
      Ya("\\colonminus", "\\coloneq");
      Ya("\\coloncolonminus", "\\Coloneq");
      Ya("\\minuscolon", "\\eqcolon");
      Ya("\\minuscoloncolon", "\\Eqcolon");
      Ya("\\coloncolonapprox", "\\Colonapprox");
      Ya("\\coloncolonsim", "\\Colonsim");
      Ya("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
      Ya("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
      Ya("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
      Ya("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
      Ya("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
      Ya("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
      Ya("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
      Ya("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
      Ya("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
      Ya("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
      Ya("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
      Ya("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
      Ya("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
      Ya("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
      Ya("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
      Ya("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
      Ya("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
      Ya("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
      Ya("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
      Ya("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
      Ya("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
      Ya("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
      Ya("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
      Ya("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
      Ya("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
      Ya("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
      Ya("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
      Ya("\\imath", "\\html@mathml{\\@imath}{ı}");
      Ya("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
      Ya("\\llbracket", "\\html@mathml{" + "\\mathopen{[\\mkern-3.2mu[}}" + "{\\mathopen{\\char`⟦}}");
      Ya("\\rrbracket", "\\html@mathml{" + "\\mathclose{]\\mkern-3.2mu]}}" + "{\\mathclose{\\char`⟧}}");
      Ya("⟦", "\\llbracket");
      Ya("⟧", "\\rrbracket");
      Ya("\\lBrace", "\\html@mathml{" + "\\mathopen{\\{\\mkern-3.2mu[}}" + "{\\mathopen{\\char`⦃}}");
      Ya("\\rBrace", "\\html@mathml{" + "\\mathclose{]\\mkern-3.2mu\\}}}" + "{\\mathclose{\\char`⦄}}");
      Ya("⦃", "\\lBrace");
      Ya("⦄", "\\rBrace");
      Ya(
        "\\minuso",
        "\\mathbin{\\html@mathml{" +
          "{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}" +
          "{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}" +
          "{\\char`⦵}}"
      );
      Ya("⦵", "\\minuso");
      Ya("\\darr", "\\downarrow");
      Ya("\\dArr", "\\Downarrow");
      Ya("\\Darr", "\\Downarrow");
      Ya("\\lang", "\\langle");
      Ya("\\rang", "\\rangle");
      Ya("\\uarr", "\\uparrow");
      Ya("\\uArr", "\\Uparrow");
      Ya("\\Uarr", "\\Uparrow");
      Ya("\\N", "\\mathbb{N}");
      Ya("\\R", "\\mathbb{R}");
      Ya("\\Z", "\\mathbb{Z}");
      Ya("\\alef", "\\aleph");
      Ya("\\alefsym", "\\aleph");
      Ya("\\Alpha", "\\mathrm{A}");
      Ya("\\Beta", "\\mathrm{B}");
      Ya("\\bull", "\\bullet");
      Ya("\\Chi", "\\mathrm{X}");
      Ya("\\clubs", "\\clubsuit");
      Ya("\\cnums", "\\mathbb{C}");
      Ya("\\Complex", "\\mathbb{C}");
      Ya("\\Dagger", "\\ddagger");
      Ya("\\diamonds", "\\diamondsuit");
      Ya("\\empty", "\\emptyset");
      Ya("\\Epsilon", "\\mathrm{E}");
      Ya("\\Eta", "\\mathrm{H}");
      Ya("\\exist", "\\exists");
      Ya("\\harr", "\\leftrightarrow");
      Ya("\\hArr", "\\Leftrightarrow");
      Ya("\\Harr", "\\Leftrightarrow");
      Ya("\\hearts", "\\heartsuit");
      Ya("\\image", "\\Im");
      Ya("\\infin", "\\infty");
      Ya("\\Iota", "\\mathrm{I}");
      Ya("\\isin", "\\in");
      Ya("\\Kappa", "\\mathrm{K}");
      Ya("\\larr", "\\leftarrow");
      Ya("\\lArr", "\\Leftarrow");
      Ya("\\Larr", "\\Leftarrow");
      Ya("\\lrarr", "\\leftrightarrow");
      Ya("\\lrArr", "\\Leftrightarrow");
      Ya("\\Lrarr", "\\Leftrightarrow");
      Ya("\\Mu", "\\mathrm{M}");
      Ya("\\natnums", "\\mathbb{N}");
      Ya("\\Nu", "\\mathrm{N}");
      Ya("\\Omicron", "\\mathrm{O}");
      Ya("\\plusmn", "\\pm");
      Ya("\\rarr", "\\rightarrow");
      Ya("\\rArr", "\\Rightarrow");
      Ya("\\Rarr", "\\Rightarrow");
      Ya("\\real", "\\Re");
      Ya("\\reals", "\\mathbb{R}");
      Ya("\\Reals", "\\mathbb{R}");
      Ya("\\Rho", "\\mathrm{P}");
      Ya("\\sdot", "\\cdot");
      Ya("\\sect", "\\S");
      Ya("\\spades", "\\spadesuit");
      Ya("\\sub", "\\subset");
      Ya("\\sube", "\\subseteq");
      Ya("\\supe", "\\supseteq");
      Ya("\\Tau", "\\mathrm{T}");
      Ya("\\thetasym", "\\vartheta");
      Ya("\\weierp", "\\wp");
      Ya("\\Zeta", "\\mathrm{Z}");
      Ya("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
      Ya("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
      Ya("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
      Ya("\\bra", "\\mathinner{\\langle{#1}|}");
      Ya("\\ket", "\\mathinner{|{#1}\\rangle}");
      Ya("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
      Ya("\\Bra", "\\left\\langle#1\\right|");
      Ya("\\Ket", "\\left|#1\\right\\rangle");
      var Ji = (e) => (t) => {
        var r = t.consumeArg().tokens;
        var a = t.consumeArg().tokens;
        var i = t.consumeArg().tokens;
        var n = t.consumeArg().tokens;
        var s = t.macros.get("|");
        var o = t.macros.get("\\|");
        t.macros.beginGroup();
        var l = (t) => (r) => {
          if (e) {
            r.macros.set("|", s);
            if (i.length) {
              r.macros.set("\\|", o);
            }
          }
          var n = t;
          if (!t && i.length) {
            var l = r.future();
            if (l.text === "|") {
              r.popToken();
              n = true;
            }
          }
          return { tokens: n ? i : a, numArgs: 0 };
        };
        t.macros.set("|", l(false));
        if (i.length) {
          t.macros.set("\\|", l(true));
        }
        var h = t.consumeArg().tokens;
        var u = t.expandTokens([...n, ...h, ...r]);
        t.macros.endGroup();
        return { tokens: u.reverse(), numArgs: 0 };
      };
      Ya("\\bra@ket", Ji(false));
      Ya("\\bra@set", Ji(true));
      Ya("\\Braket", "\\bra@ket{\\left\\langle}" + "{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
      Ya("\\Set", "\\bra@set{\\left\\{\\:}" + "{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
      Ya("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
      Ya("\\angln", "{\\angl n}");
      Ya("\\blue", "\\textcolor{##6495ed}{#1}");
      Ya("\\orange", "\\textcolor{##ffa500}{#1}");
      Ya("\\pink", "\\textcolor{##ff00af}{#1}");
      Ya("\\red", "\\textcolor{##df0030}{#1}");
      Ya("\\green", "\\textcolor{##28ae7b}{#1}");
      Ya("\\gray", "\\textcolor{gray}{#1}");
      Ya("\\purple", "\\textcolor{##9d38bd}{#1}");
      Ya("\\blueA", "\\textcolor{##ccfaff}{#1}");
      Ya("\\blueB", "\\textcolor{##80f6ff}{#1}");
      Ya("\\blueC", "\\textcolor{##63d9ea}{#1}");
      Ya("\\blueD", "\\textcolor{##11accd}{#1}");
      Ya("\\blueE", "\\textcolor{##0c7f99}{#1}");
      Ya("\\tealA", "\\textcolor{##94fff5}{#1}");
      Ya("\\tealB", "\\textcolor{##26edd5}{#1}");
      Ya("\\tealC", "\\textcolor{##01d1c1}{#1}");
      Ya("\\tealD", "\\textcolor{##01a995}{#1}");
      Ya("\\tealE", "\\textcolor{##208170}{#1}");
      Ya("\\greenA", "\\textcolor{##b6ffb0}{#1}");
      Ya("\\greenB", "\\textcolor{##8af281}{#1}");
      Ya("\\greenC", "\\textcolor{##74cf70}{#1}");
      Ya("\\greenD", "\\textcolor{##1fab54}{#1}");
      Ya("\\greenE", "\\textcolor{##0d923f}{#1}");
      Ya("\\goldA", "\\textcolor{##ffd0a9}{#1}");
      Ya("\\goldB", "\\textcolor{##ffbb71}{#1}");
      Ya("\\goldC", "\\textcolor{##ff9c39}{#1}");
      Ya("\\goldD", "\\textcolor{##e07d10}{#1}");
      Ya("\\goldE", "\\textcolor{##a75a05}{#1}");
      Ya("\\redA", "\\textcolor{##fca9a9}{#1}");
      Ya("\\redB", "\\textcolor{##ff8482}{#1}");
      Ya("\\redC", "\\textcolor{##f9685d}{#1}");
      Ya("\\redD", "\\textcolor{##e84d39}{#1}");
      Ya("\\redE", "\\textcolor{##bc2612}{#1}");
      Ya("\\maroonA", "\\textcolor{##ffbde0}{#1}");
      Ya("\\maroonB", "\\textcolor{##ff92c6}{#1}");
      Ya("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
      Ya("\\maroonD", "\\textcolor{##ca337c}{#1}");
      Ya("\\maroonE", "\\textcolor{##9e034e}{#1}");
      Ya("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
      Ya("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
      Ya("\\purpleC", "\\textcolor{##aa87ff}{#1}");
      Ya("\\purpleD", "\\textcolor{##7854ab}{#1}");
      Ya("\\purpleE", "\\textcolor{##543b78}{#1}");
      Ya("\\mintA", "\\textcolor{##f5f9e8}{#1}");
      Ya("\\mintB", "\\textcolor{##edf2df}{#1}");
      Ya("\\mintC", "\\textcolor{##e0e5cc}{#1}");
      Ya("\\grayA", "\\textcolor{##f6f7f7}{#1}");
      Ya("\\grayB", "\\textcolor{##f0f1f2}{#1}");
      Ya("\\grayC", "\\textcolor{##e3e5e6}{#1}");
      Ya("\\grayD", "\\textcolor{##d6d8da}{#1}");
      Ya("\\grayE", "\\textcolor{##babec2}{#1}");
      Ya("\\grayF", "\\textcolor{##888d93}{#1}");
      Ya("\\grayG", "\\textcolor{##626569}{#1}");
      Ya("\\grayH", "\\textcolor{##3b3e40}{#1}");
      Ya("\\grayI", "\\textcolor{##21242c}{#1}");
      Ya("\\kaBlue", "\\textcolor{##314453}{#1}");
      Ya("\\kaGreen", "\\textcolor{##71B307}{#1}");
      var Qi = { "^": true, _: true, "\\limits": true, "\\nolimits": true };
      class en {
        constructor(e, t, r) {
          this.settings = void 0;
          this.expansionCount = void 0;
          this.lexer = void 0;
          this.macros = void 0;
          this.stack = void 0;
          this.mode = void 0;
          this.settings = t;
          this.expansionCount = 0;
          this.feed(e);
          this.macros = new Xi(Wi, t.macros);
          this.mode = r;
          this.stack = [];
        }
        feed(e) {
          this.lexer = new Yi(e, this.settings);
        }
        switchMode(e) {
          this.mode = e;
        }
        beginGroup() {
          this.macros.beginGroup();
        }
        endGroup() {
          this.macros.endGroup();
        }
        endGroups() {
          this.macros.endGroups();
        }
        future() {
          if (this.stack.length === 0) {
            this.pushToken(this.lexer.lex());
          }
          return this.stack[this.stack.length - 1];
        }
        popToken() {
          this.future();
          return this.stack.pop();
        }
        pushToken(e) {
          this.stack.push(e);
        }
        pushTokens(e) {
          this.stack.push(...e);
        }
        scanArgument(e) {
          var t;
          var r;
          var a;
          if (e) {
            this.consumeSpaces();
            if (this.future().text !== "[") {
              return null;
            }
            t = this.popToken();
            ({ tokens: a, end: r } = this.consumeArg(["]"]));
          } else {
            ({ tokens: a, start: t, end: r } = this.consumeArg());
          }
          this.pushToken(new i("EOF", r.loc));
          this.pushTokens(a);
          return t.range(r, "");
        }
        consumeSpaces() {
          for (;;) {
            var e = this.future();
            if (e.text === " ") {
              this.stack.pop();
            } else {
              break;
            }
          }
        }
        consumeArg(e) {
          var t = [];
          var r = e && e.length > 0;
          if (!r) {
            this.consumeSpaces();
          }
          var a = this.future();
          var i;
          var s = 0;
          var o = 0;
          do {
            i = this.popToken();
            t.push(i);
            if (i.text === "{") {
              ++s;
            } else if (i.text === "}") {
              --s;
              if (s === -1) {
                throw new n("Extra }", i);
              }
            } else if (i.text === "EOF") {
              throw new n("Unexpected end of input in a macro argument" + ", expected '" + (e && r ? e[o] : "}") + "'", i);
            }
            if (e && r) {
              if ((s === 0 || (s === 1 && e[o] === "{")) && i.text === e[o]) {
                ++o;
                if (o === e.length) {
                  t.splice(-o, o);
                  break;
                }
              } else {
                o = 0;
              }
            }
          } while (s !== 0 || r);
          if (a.text === "{" && t[t.length - 1].text === "}") {
            t.pop();
            t.shift();
          }
          t.reverse();
          return { tokens: t, start: a, end: i };
        }
        consumeArgs(e, t) {
          if (t) {
            if (t.length !== e + 1) {
              throw new n("The length of delimiters doesn't match the number of args!");
            }
            var r = t[0];
            for (var a = 0; a < r.length; a++) {
              var i = this.popToken();
              if (r[a] !== i.text) {
                throw new n("Use of the macro doesn't match its definition", i);
              }
            }
          }
          var s = [];
          for (var o = 0; o < e; o++) {
            s.push(this.consumeArg(t && t[o + 1]).tokens);
          }
          return s;
        }
        countExpansion(e) {
          this.expansionCount += e;
          if (this.expansionCount > this.settings.maxExpand) {
            throw new n("Too many expansions: infinite loop or " + "need to increase maxExpand setting");
          }
        }
        expandOnce(e) {
          var t = this.popToken();
          var r = t.text;
          var a = !t.noexpand ? this._getExpansion(r) : null;
          if (a == null || (e && a.unexpandable)) {
            if (e && a == null && r[0] === "\\" && !this.isDefined(r)) {
              throw new n("Undefined control sequence: " + r);
            }
            this.pushToken(t);
            return false;
          }
          this.countExpansion(1);
          var i = a.tokens;
          var s = this.consumeArgs(a.numArgs, a.delimiters);
          if (a.numArgs) {
            i = i.slice();
            for (var o = i.length - 1; o >= 0; --o) {
              var l = i[o];
              if (l.text === "#") {
                if (o === 0) {
                  throw new n("Incomplete placeholder at end of macro body", l);
                }
                l = i[--o];
                if (l.text === "#") {
                  i.splice(o + 1, 1);
                } else if (/^[1-9]$/.test(l.text)) {
                  i.splice(o, 2, ...s[+l.text - 1]);
                } else {
                  throw new n("Not a valid argument number", l);
                }
              }
            }
          }
          this.pushTokens(i);
          return i.length;
        }
        expandAfterFuture() {
          this.expandOnce();
          return this.future();
        }
        expandNextToken() {
          for (;;) {
            if (this.expandOnce() === false) {
              var e = this.stack.pop();
              if (e.treatAsRelax) {
                e.text = "\\relax";
              }
              return e;
            }
          }
          throw new Error();
        }
        expandMacro(e) {
          return this.macros.has(e) ? this.expandTokens([new i(e)]) : undefined;
        }
        expandTokens(e) {
          var t = [];
          var r = this.stack.length;
          this.pushTokens(e);
          while (this.stack.length > r) {
            if (this.expandOnce(true) === false) {
              var a = this.stack.pop();
              if (a.treatAsRelax) {
                a.noexpand = false;
                a.treatAsRelax = false;
              }
              t.push(a);
            }
          }
          this.countExpansion(t.length);
          return t;
        }
        expandMacroAsText(e) {
          var t = this.expandMacro(e);
          if (t) {
            return t.map((e) => e.text).join("");
          } else {
            return t;
          }
        }
        _getExpansion(e) {
          var t = this.macros.get(e);
          if (t == null) {
            return t;
          }
          if (e.length === 1) {
            var r = this.lexer.catcodes[e];
            if (r != null && r !== 13) {
              return;
            }
          }
          var a = typeof t === "function" ? t(this) : t;
          if (typeof a === "string") {
            var i = 0;
            if (a.indexOf("#") !== -1) {
              var n = a.replace(/##/g, "");
              while (n.indexOf("#" + (i + 1)) !== -1) {
                ++i;
              }
            }
            var s = new Yi(a, this.settings);
            var o = [];
            var l = s.lex();
            while (l.text !== "EOF") {
              o.push(l);
              l = s.lex();
            }
            o.reverse();
            var h = { tokens: o, numArgs: i };
            return h;
          }
          return a;
        }
        isDefined(e) {
          return this.macros.has(e) || Oi.hasOwnProperty(e) || He.math.hasOwnProperty(e) || He.text.hasOwnProperty(e) || Qi.hasOwnProperty(e);
        }
        isExpandable(e) {
          var t = this.macros.get(e);
          return t != null ? typeof t === "string" || typeof t === "function" || !t.unexpandable : Oi.hasOwnProperty(e) && !Oi[e].primitive;
        }
      }
      var tn = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
      var rn = Object.freeze({
        "₊": "+",
        "₋": "-",
        "₌": "=",
        "₍": "(",
        "₎": ")",
        "₀": "0",
        "₁": "1",
        "₂": "2",
        "₃": "3",
        "₄": "4",
        "₅": "5",
        "₆": "6",
        "₇": "7",
        "₈": "8",
        "₉": "9",
        ₐ: "a",
        ₑ: "e",
        ₕ: "h",
        ᵢ: "i",
        ⱼ: "j",
        ₖ: "k",
        ₗ: "l",
        ₘ: "m",
        ₙ: "n",
        ₒ: "o",
        ₚ: "p",
        ᵣ: "r",
        ₛ: "s",
        ₜ: "t",
        ᵤ: "u",
        ᵥ: "v",
        ₓ: "x",
        ᵦ: "β",
        ᵧ: "γ",
        ᵨ: "ρ",
        ᵩ: "ϕ",
        ᵪ: "χ",
        "⁺": "+",
        "⁻": "-",
        "⁼": "=",
        "⁽": "(",
        "⁾": ")",
        "⁰": "0",
        "¹": "1",
        "²": "2",
        "³": "3",
        "⁴": "4",
        "⁵": "5",
        "⁶": "6",
        "⁷": "7",
        "⁸": "8",
        "⁹": "9",
        ᴬ: "A",
        ᴮ: "B",
        ᴰ: "D",
        ᴱ: "E",
        ᴳ: "G",
        ᴴ: "H",
        ᴵ: "I",
        ᴶ: "J",
        ᴷ: "K",
        ᴸ: "L",
        ᴹ: "M",
        ᴺ: "N",
        ᴼ: "O",
        ᴾ: "P",
        ᴿ: "R",
        ᵀ: "T",
        ᵁ: "U",
        ⱽ: "V",
        ᵂ: "W",
        ᵃ: "a",
        ᵇ: "b",
        ᶜ: "c",
        ᵈ: "d",
        ᵉ: "e",
        ᶠ: "f",
        ᵍ: "g",
        ʰ: "h",
        ⁱ: "i",
        ʲ: "j",
        ᵏ: "k",
        ˡ: "l",
        ᵐ: "m",
        ⁿ: "n",
        ᵒ: "o",
        ᵖ: "p",
        ʳ: "r",
        ˢ: "s",
        ᵗ: "t",
        ᵘ: "u",
        ᵛ: "v",
        ʷ: "w",
        ˣ: "x",
        ʸ: "y",
        ᶻ: "z",
        ᵝ: "β",
        ᵞ: "γ",
        ᵟ: "δ",
        ᵠ: "ϕ",
        ᵡ: "χ",
        ᶿ: "θ",
      });
      var an = {
        "́": { text: "\\'", math: "\\acute" },
        "̀": { text: "\\`", math: "\\grave" },
        "̈": { text: '\\"', math: "\\ddot" },
        "̃": { text: "\\~", math: "\\tilde" },
        "̄": { text: "\\=", math: "\\bar" },
        "̆": { text: "\\u", math: "\\breve" },
        "̌": { text: "\\v", math: "\\check" },
        "̂": { text: "\\^", math: "\\hat" },
        "̇": { text: "\\.", math: "\\dot" },
        "̊": { text: "\\r", math: "\\mathring" },
        "̋": { text: "\\H" },
        "̧": { text: "\\c" },
      };
      var nn = {
        á: "á",
        à: "à",
        ä: "ä",
        ǟ: "ǟ",
        ã: "ã",
        ā: "ā",
        ă: "ă",
        ắ: "ắ",
        ằ: "ằ",
        ẵ: "ẵ",
        ǎ: "ǎ",
        â: "â",
        ấ: "ấ",
        ầ: "ầ",
        ẫ: "ẫ",
        ȧ: "ȧ",
        ǡ: "ǡ",
        å: "å",
        ǻ: "ǻ",
        ḃ: "ḃ",
        ć: "ć",
        ḉ: "ḉ",
        č: "č",
        ĉ: "ĉ",
        ċ: "ċ",
        ç: "ç",
        ď: "ď",
        ḋ: "ḋ",
        ḑ: "ḑ",
        é: "é",
        è: "è",
        ë: "ë",
        ẽ: "ẽ",
        ē: "ē",
        ḗ: "ḗ",
        ḕ: "ḕ",
        ĕ: "ĕ",
        ḝ: "ḝ",
        ě: "ě",
        ê: "ê",
        ế: "ế",
        ề: "ề",
        ễ: "ễ",
        ė: "ė",
        ȩ: "ȩ",
        ḟ: "ḟ",
        ǵ: "ǵ",
        ḡ: "ḡ",
        ğ: "ğ",
        ǧ: "ǧ",
        ĝ: "ĝ",
        ġ: "ġ",
        ģ: "ģ",
        ḧ: "ḧ",
        ȟ: "ȟ",
        ĥ: "ĥ",
        ḣ: "ḣ",
        ḩ: "ḩ",
        í: "í",
        ì: "ì",
        ï: "ï",
        ḯ: "ḯ",
        ĩ: "ĩ",
        ī: "ī",
        ĭ: "ĭ",
        ǐ: "ǐ",
        î: "î",
        ǰ: "ǰ",
        ĵ: "ĵ",
        ḱ: "ḱ",
        ǩ: "ǩ",
        ķ: "ķ",
        ĺ: "ĺ",
        ľ: "ľ",
        ļ: "ļ",
        ḿ: "ḿ",
        ṁ: "ṁ",
        ń: "ń",
        ǹ: "ǹ",
        ñ: "ñ",
        ň: "ň",
        ṅ: "ṅ",
        ņ: "ņ",
        ó: "ó",
        ò: "ò",
        ö: "ö",
        ȫ: "ȫ",
        õ: "õ",
        ṍ: "ṍ",
        ṏ: "ṏ",
        ȭ: "ȭ",
        ō: "ō",
        ṓ: "ṓ",
        ṑ: "ṑ",
        ŏ: "ŏ",
        ǒ: "ǒ",
        ô: "ô",
        ố: "ố",
        ồ: "ồ",
        ỗ: "ỗ",
        ȯ: "ȯ",
        ȱ: "ȱ",
        ő: "ő",
        ṕ: "ṕ",
        ṗ: "ṗ",
        ŕ: "ŕ",
        ř: "ř",
        ṙ: "ṙ",
        ŗ: "ŗ",
        ś: "ś",
        ṥ: "ṥ",
        š: "š",
        ṧ: "ṧ",
        ŝ: "ŝ",
        ṡ: "ṡ",
        ş: "ş",
        ẗ: "ẗ",
        ť: "ť",
        ṫ: "ṫ",
        ţ: "ţ",
        ú: "ú",
        ù: "ù",
        ü: "ü",
        ǘ: "ǘ",
        ǜ: "ǜ",
        ǖ: "ǖ",
        ǚ: "ǚ",
        ũ: "ũ",
        ṹ: "ṹ",
        ū: "ū",
        ṻ: "ṻ",
        ŭ: "ŭ",
        ǔ: "ǔ",
        û: "û",
        ů: "ů",
        ű: "ű",
        ṽ: "ṽ",
        ẃ: "ẃ",
        ẁ: "ẁ",
        ẅ: "ẅ",
        ŵ: "ŵ",
        ẇ: "ẇ",
        ẘ: "ẘ",
        ẍ: "ẍ",
        ẋ: "ẋ",
        ý: "ý",
        ỳ: "ỳ",
        ÿ: "ÿ",
        ỹ: "ỹ",
        ȳ: "ȳ",
        ŷ: "ŷ",
        ẏ: "ẏ",
        ẙ: "ẙ",
        ź: "ź",
        ž: "ž",
        ẑ: "ẑ",
        ż: "ż",
        Á: "Á",
        À: "À",
        Ä: "Ä",
        Ǟ: "Ǟ",
        Ã: "Ã",
        Ā: "Ā",
        Ă: "Ă",
        Ắ: "Ắ",
        Ằ: "Ằ",
        Ẵ: "Ẵ",
        Ǎ: "Ǎ",
        Â: "Â",
        Ấ: "Ấ",
        Ầ: "Ầ",
        Ẫ: "Ẫ",
        Ȧ: "Ȧ",
        Ǡ: "Ǡ",
        Å: "Å",
        Ǻ: "Ǻ",
        Ḃ: "Ḃ",
        Ć: "Ć",
        Ḉ: "Ḉ",
        Č: "Č",
        Ĉ: "Ĉ",
        Ċ: "Ċ",
        Ç: "Ç",
        Ď: "Ď",
        Ḋ: "Ḋ",
        Ḑ: "Ḑ",
        É: "É",
        È: "È",
        Ë: "Ë",
        Ẽ: "Ẽ",
        Ē: "Ē",
        Ḗ: "Ḗ",
        Ḕ: "Ḕ",
        Ĕ: "Ĕ",
        Ḝ: "Ḝ",
        Ě: "Ě",
        Ê: "Ê",
        Ế: "Ế",
        Ề: "Ề",
        Ễ: "Ễ",
        Ė: "Ė",
        Ȩ: "Ȩ",
        Ḟ: "Ḟ",
        Ǵ: "Ǵ",
        Ḡ: "Ḡ",
        Ğ: "Ğ",
        Ǧ: "Ǧ",
        Ĝ: "Ĝ",
        Ġ: "Ġ",
        Ģ: "Ģ",
        Ḧ: "Ḧ",
        Ȟ: "Ȟ",
        Ĥ: "Ĥ",
        Ḣ: "Ḣ",
        Ḩ: "Ḩ",
        Í: "Í",
        Ì: "Ì",
        Ï: "Ï",
        Ḯ: "Ḯ",
        Ĩ: "Ĩ",
        Ī: "Ī",
        Ĭ: "Ĭ",
        Ǐ: "Ǐ",
        Î: "Î",
        İ: "İ",
        Ĵ: "Ĵ",
        Ḱ: "Ḱ",
        Ǩ: "Ǩ",
        Ķ: "Ķ",
        Ĺ: "Ĺ",
        Ľ: "Ľ",
        Ļ: "Ļ",
        Ḿ: "Ḿ",
        Ṁ: "Ṁ",
        Ń: "Ń",
        Ǹ: "Ǹ",
        Ñ: "Ñ",
        Ň: "Ň",
        Ṅ: "Ṅ",
        Ņ: "Ņ",
        Ó: "Ó",
        Ò: "Ò",
        Ö: "Ö",
        Ȫ: "Ȫ",
        Õ: "Õ",
        Ṍ: "Ṍ",
        Ṏ: "Ṏ",
        Ȭ: "Ȭ",
        Ō: "Ō",
        Ṓ: "Ṓ",
        Ṑ: "Ṑ",
        Ŏ: "Ŏ",
        Ǒ: "Ǒ",
        Ô: "Ô",
        Ố: "Ố",
        Ồ: "Ồ",
        Ỗ: "Ỗ",
        Ȯ: "Ȯ",
        Ȱ: "Ȱ",
        Ő: "Ő",
        Ṕ: "Ṕ",
        Ṗ: "Ṗ",
        Ŕ: "Ŕ",
        Ř: "Ř",
        Ṙ: "Ṙ",
        Ŗ: "Ŗ",
        Ś: "Ś",
        Ṥ: "Ṥ",
        Š: "Š",
        Ṧ: "Ṧ",
        Ŝ: "Ŝ",
        Ṡ: "Ṡ",
        Ş: "Ş",
        Ť: "Ť",
        Ṫ: "Ṫ",
        Ţ: "Ţ",
        Ú: "Ú",
        Ù: "Ù",
        Ü: "Ü",
        Ǘ: "Ǘ",
        Ǜ: "Ǜ",
        Ǖ: "Ǖ",
        Ǚ: "Ǚ",
        Ũ: "Ũ",
        Ṹ: "Ṹ",
        Ū: "Ū",
        Ṻ: "Ṻ",
        Ŭ: "Ŭ",
        Ǔ: "Ǔ",
        Û: "Û",
        Ů: "Ů",
        Ű: "Ű",
        Ṽ: "Ṽ",
        Ẃ: "Ẃ",
        Ẁ: "Ẁ",
        Ẅ: "Ẅ",
        Ŵ: "Ŵ",
        Ẇ: "Ẇ",
        Ẍ: "Ẍ",
        Ẋ: "Ẋ",
        Ý: "Ý",
        Ỳ: "Ỳ",
        Ÿ: "Ÿ",
        Ỹ: "Ỹ",
        Ȳ: "Ȳ",
        Ŷ: "Ŷ",
        Ẏ: "Ẏ",
        Ź: "Ź",
        Ž: "Ž",
        Ẑ: "Ẑ",
        Ż: "Ż",
        ά: "ά",
        ὰ: "ὰ",
        ᾱ: "ᾱ",
        ᾰ: "ᾰ",
        έ: "έ",
        ὲ: "ὲ",
        ή: "ή",
        ὴ: "ὴ",
        ί: "ί",
        ὶ: "ὶ",
        ϊ: "ϊ",
        ΐ: "ΐ",
        ῒ: "ῒ",
        ῑ: "ῑ",
        ῐ: "ῐ",
        ό: "ό",
        ὸ: "ὸ",
        ύ: "ύ",
        ὺ: "ὺ",
        ϋ: "ϋ",
        ΰ: "ΰ",
        ῢ: "ῢ",
        ῡ: "ῡ",
        ῠ: "ῠ",
        ώ: "ώ",
        ὼ: "ὼ",
        Ύ: "Ύ",
        Ὺ: "Ὺ",
        Ϋ: "Ϋ",
        Ῡ: "Ῡ",
        Ῠ: "Ῠ",
        Ώ: "Ώ",
        Ὼ: "Ὼ",
      };
      class sn {
        constructor(e, t) {
          this.mode = void 0;
          this.gullet = void 0;
          this.settings = void 0;
          this.leftrightDepth = void 0;
          this.nextToken = void 0;
          this.mode = "math";
          this.gullet = new en(e, t, this.mode);
          this.settings = t;
          this.leftrightDepth = 0;
        }
        expect(e, t) {
          if (t === void 0) {
            t = true;
          }
          if (this.fetch().text !== e) {
            throw new n("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
          }
          if (t) {
            this.consume();
          }
        }
        consume() {
          this.nextToken = null;
        }
        fetch() {
          if (this.nextToken == null) {
            this.nextToken = this.gullet.expandNextToken();
          }
          return this.nextToken;
        }
        switchMode(e) {
          this.mode = e;
          this.gullet.switchMode(e);
        }
        parse() {
          if (!this.settings.globalGroup) {
            this.gullet.beginGroup();
          }
          if (this.settings.colorIsTextColor) {
            this.gullet.macros.set("\\color", "\\textcolor");
          }
          try {
            var e = this.parseExpression(false);
            this.expect("EOF");
            if (!this.settings.globalGroup) {
              this.gullet.endGroup();
            }
            return e;
          } finally {
            this.gullet.endGroups();
          }
        }
        subparse(e) {
          var t = this.nextToken;
          this.consume();
          this.gullet.pushToken(new i("}"));
          this.gullet.pushTokens(e);
          var r = this.parseExpression(false);
          this.expect("}");
          this.nextToken = t;
          return r;
        }
        parseExpression(e, t) {
          var r = [];
          while (true) {
            if (this.mode === "math") {
              this.consumeSpaces();
            }
            var a = this.fetch();
            if (sn.endOfExpression.indexOf(a.text) !== -1) {
              break;
            }
            if (t && a.text === t) {
              break;
            }
            if (e && Oi[a.text] && Oi[a.text].infix) {
              break;
            }
            var i = this.parseAtom(t);
            if (!i) {
              break;
            } else if (i.type === "internal") {
              continue;
            }
            r.push(i);
          }
          if (this.mode === "text") {
            this.formLigatures(r);
          }
          return this.handleInfixNodes(r);
        }
        handleInfixNodes(e) {
          var t = -1;
          var r;
          for (var a = 0; a < e.length; a++) {
            if (e[a].type === "infix") {
              if (t !== -1) {
                throw new n("only one infix operator per group", e[a].token);
              }
              t = a;
              r = e[a].replaceWith;
            }
          }
          if (t !== -1 && r) {
            var i;
            var s;
            var o = e.slice(0, t);
            var l = e.slice(t + 1);
            if (o.length === 1 && o[0].type === "ordgroup") {
              i = o[0];
            } else {
              i = { type: "ordgroup", mode: this.mode, body: o };
            }
            if (l.length === 1 && l[0].type === "ordgroup") {
              s = l[0];
            } else {
              s = { type: "ordgroup", mode: this.mode, body: l };
            }
            var h;
            if (r === "\\\\abovefrac") {
              h = this.callFunction(r, [i, e[t], s], []);
            } else {
              h = this.callFunction(r, [i, s], []);
            }
            return [h];
          } else {
            return e;
          }
        }
        handleSupSubscript(e) {
          var t = this.fetch();
          var r = t.text;
          this.consume();
          this.consumeSpaces();
          var a = this.parseGroup(e);
          if (!a) {
            throw new n("Expected group after '" + r + "'", t);
          }
          return a;
        }
        formatUnsupportedCmd(e) {
          var t = [];
          for (var r = 0; r < e.length; r++) {
            t.push({ type: "textord", mode: "text", text: e[r] });
          }
          var a = { type: "text", mode: this.mode, body: t };
          var i = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [a] };
          return i;
        }
        parseAtom(e) {
          var t = this.parseGroup("atom", e);
          if (this.mode === "text") {
            return t;
          }
          var r;
          var a;
          while (true) {
            this.consumeSpaces();
            var s = this.fetch();
            if (s.text === "\\limits" || s.text === "\\nolimits") {
              if (t && t.type === "op") {
                var o = s.text === "\\limits";
                t.limits = o;
                t.alwaysHandleSupSub = true;
              } else if (t && t.type === "operatorname") {
                if (t.alwaysHandleSupSub) {
                  t.limits = s.text === "\\limits";
                }
              } else {
                throw new n("Limit controls must follow a math operator", s);
              }
              this.consume();
            } else if (s.text === "^") {
              if (r) {
                throw new n("Double superscript", s);
              }
              r = this.handleSupSubscript("superscript");
            } else if (s.text === "_") {
              if (a) {
                throw new n("Double subscript", s);
              }
              a = this.handleSupSubscript("subscript");
            } else if (s.text === "'") {
              if (r) {
                throw new n("Double superscript", s);
              }
              var l = { type: "textord", mode: this.mode, text: "\\prime" };
              var h = [l];
              this.consume();
              while (this.fetch().text === "'") {
                h.push(l);
                this.consume();
              }
              if (this.fetch().text === "^") {
                h.push(this.handleSupSubscript("superscript"));
              }
              r = { type: "ordgroup", mode: this.mode, body: h };
            } else if (rn[s.text]) {
              var u = tn.test(s.text);
              var m = [];
              m.push(new i(rn[s.text]));
              this.consume();
              while (true) {
                var c = this.fetch().text;
                if (!rn[c]) {
                  break;
                }
                if (tn.test(c) !== u) {
                  break;
                }
                m.unshift(new i(rn[c]));
                this.consume();
              }
              var p = this.subparse(m);
              if (u) {
                a = { type: "ordgroup", mode: "math", body: p };
              } else {
                r = { type: "ordgroup", mode: "math", body: p };
              }
            } else {
              break;
            }
          }
          if (r || a) {
            return { type: "supsub", mode: this.mode, base: t, sup: r, sub: a };
          } else {
            return t;
          }
        }
        parseFunction(e, t) {
          var r = this.fetch();
          var a = r.text;
          var i = Oi[a];
          if (!i) {
            return null;
          }
          this.consume();
          if (t && t !== "atom" && !i.allowedInArgument) {
            throw new n("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
          } else if (this.mode === "text" && !i.allowedInText) {
            throw new n("Can't use function '" + a + "' in text mode", r);
          } else if (this.mode === "math" && i.allowedInMath === false) {
            throw new n("Can't use function '" + a + "' in math mode", r);
          }
          var { args: s, optArgs: o } = this.parseArguments(a, i);
          return this.callFunction(a, s, o, r, e);
        }
        callFunction(e, t, r, a, i) {
          var s = { funcName: e, parser: this, token: a, breakOnTokenText: i };
          var o = Oi[e];
          if (o && o.handler) {
            return o.handler(s, t, r);
          } else {
            throw new n("No function handler for " + e);
          }
        }
        parseArguments(e, t) {
          var r = t.numArgs + t.numOptionalArgs;
          if (r === 0) {
            return { args: [], optArgs: [] };
          }
          var a = [];
          var i = [];
          for (var s = 0; s < r; s++) {
            var o = t.argTypes && t.argTypes[s];
            var l = s < t.numOptionalArgs;
            if ((t.primitive && o == null) || (t.type === "sqrt" && s === 1 && i[0] == null)) {
              o = "primitive";
            }
            var h = this.parseGroupOfType("argument to '" + e + "'", o, l);
            if (l) {
              i.push(h);
            } else if (h != null) {
              a.push(h);
            } else {
              throw new n("Null argument, please report this as a bug");
            }
          }
          return { args: a, optArgs: i };
        }
        parseGroupOfType(e, t, r) {
          switch (t) {
            case "color":
              return this.parseColorGroup(r);
            case "size":
              return this.parseSizeGroup(r);
            case "url":
              return this.parseUrlGroup(r);
            case "math":
            case "text":
              return this.parseArgumentGroup(r, t);
            case "hbox": {
              var a = this.parseArgumentGroup(r, "text");
              return a != null ? { type: "styling", mode: a.mode, body: [a], style: "text" } : null;
            }
            case "raw": {
              var i = this.parseStringGroup("raw", r);
              return i != null ? { type: "raw", mode: "text", string: i.text } : null;
            }
            case "primitive": {
              if (r) {
                throw new n("A primitive argument cannot be optional");
              }
              var s = this.parseGroup(e);
              if (s == null) {
                throw new n("Expected group as " + e, this.fetch());
              }
              return s;
            }
            case "original":
            case null:
            case undefined:
              return this.parseArgumentGroup(r);
            default:
              throw new n("Unknown group type as " + e, this.fetch());
          }
        }
        consumeSpaces() {
          while (this.fetch().text === " ") {
            this.consume();
          }
        }
        parseStringGroup(e, t) {
          var r = this.gullet.scanArgument(t);
          if (r == null) {
            return null;
          }
          var a = "";
          var i;
          while ((i = this.fetch()).text !== "EOF") {
            a += i.text;
            this.consume();
          }
          this.consume();
          r.text = a;
          return r;
        }
        parseRegexGroup(e, t) {
          var r = this.fetch();
          var a = r;
          var i = "";
          var s;
          while ((s = this.fetch()).text !== "EOF" && e.test(i + s.text)) {
            a = s;
            i += a.text;
            this.consume();
          }
          if (i === "") {
            throw new n("Invalid " + t + ": '" + r.text + "'", r);
          }
          return r.range(a, i);
        }
        parseColorGroup(e) {
          var t = this.parseStringGroup("color", e);
          if (t == null) {
            return null;
          }
          var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
          if (!r) {
            throw new n("Invalid color: '" + t.text + "'", t);
          }
          var a = r[0];
          if (/^[0-9a-f]{6}$/i.test(a)) {
            a = "#" + a;
          }
          return { type: "color-token", mode: this.mode, color: a };
        }
        parseSizeGroup(e) {
          var t;
          var r = false;
          this.gullet.consumeSpaces();
          if (!e && this.gullet.future().text !== "{") {
            t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
          } else {
            t = this.parseStringGroup("size", e);
          }
          if (!t) {
            return null;
          }
          if (!e && t.text.length === 0) {
            t.text = "0pt";
            r = true;
          }
          var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
          if (!a) {
            throw new n("Invalid size: '" + t.text + "'", t);
          }
          var i = { number: +(a[1] + a[2]), unit: a[3] };
          if (!de(i)) {
            throw new n("Invalid unit: '" + i.unit + "'", t);
          }
          return { type: "size", mode: this.mode, value: i, isBlank: r };
        }
        parseUrlGroup(e) {
          this.gullet.lexer.setCatcode("%", 13);
          this.gullet.lexer.setCatcode("~", 12);
          var t = this.parseStringGroup("url", e);
          this.gullet.lexer.setCatcode("%", 14);
          this.gullet.lexer.setCatcode("~", 13);
          if (t == null) {
            return null;
          }
          var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return { type: "url", mode: this.mode, url: r };
        }
        parseArgumentGroup(e, t) {
          var r = this.gullet.scanArgument(e);
          if (r == null) {
            return null;
          }
          var a = this.mode;
          if (t) {
            this.switchMode(t);
          }
          this.gullet.beginGroup();
          var i = this.parseExpression(false, "EOF");
          this.expect("EOF");
          this.gullet.endGroup();
          var n = { type: "ordgroup", mode: this.mode, loc: r.loc, body: i };
          if (t) {
            this.switchMode(a);
          }
          return n;
        }
        parseGroup(e, t) {
          var r = this.fetch();
          var i = r.text;
          var s;
          if (i === "{" || i === "\\begingroup") {
            this.consume();
            var o = i === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var l = this.parseExpression(false, o);
            var h = this.fetch();
            this.expect(o);
            this.gullet.endGroup();
            s = { type: "ordgroup", mode: this.mode, loc: a.range(r, h), body: l, semisimple: i === "\\begingroup" || undefined };
          } else {
            s = this.parseFunction(t, e) || this.parseSymbol();
            if (s == null && i[0] === "\\" && !Qi.hasOwnProperty(i)) {
              if (this.settings.throwOnError) {
                throw new n("Undefined control sequence: " + i, r);
              }
              s = this.formatUnsupportedCmd(i);
              this.consume();
            }
          }
          return s;
        }
        formLigatures(e) {
          var t = e.length - 1;
          for (var r = 0; r < t; ++r) {
            var i = e[r];
            var n = i.text;
            if (n === "-" && e[r + 1].text === "-") {
              if (r + 1 < t && e[r + 2].text === "-") {
                e.splice(r, 3, { type: "textord", mode: "text", loc: a.range(i, e[r + 2]), text: "---" });
                t -= 2;
              } else {
                e.splice(r, 2, { type: "textord", mode: "text", loc: a.range(i, e[r + 1]), text: "--" });
                t -= 1;
              }
            }
            if ((n === "'" || n === "`") && e[r + 1].text === n) {
              e.splice(r, 2, { type: "textord", mode: "text", loc: a.range(i, e[r + 1]), text: n + n });
              t -= 1;
            }
          }
        }
        parseSymbol() {
          var e = this.fetch();
          var t = e.text;
          if (/^\\verb[^a-zA-Z]/.test(t)) {
            this.consume();
            var r = t.slice(5);
            var i = r.charAt(0) === "*";
            if (i) {
              r = r.slice(1);
            }
            if (r.length < 2 || r.charAt(0) !== r.slice(-1)) {
              throw new n("\\verb assertion failed --\n                    please report what input caused this bug");
            }
            r = r.slice(1, -1);
            return { type: "verb", mode: "text", body: r, star: i };
          }
          if (nn.hasOwnProperty(t[0]) && !He[this.mode][t[0]]) {
            if (this.settings.strict && this.mode === "math") {
              this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in ' + "math mode", e);
            }
            t = nn[t[0]] + t.slice(1);
          }
          var s = Gi.exec(t);
          if (s) {
            t = t.substring(0, s.index);
            if (t === "i") {
              t = "ı";
            } else if (t === "j") {
              t = "ȷ";
            }
          }
          var o;
          if (He[this.mode][t]) {
            if (this.settings.strict && this.mode === "math" && ct.indexOf(t) >= 0) {
              this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in ' + "math mode", e);
            }
            var l = He[this.mode][t].group;
            var h = a.range(e);
            var u;
            if (Ie.hasOwnProperty(l)) {
              var m = l;
              u = { type: "atom", mode: this.mode, family: m, loc: h, text: t };
            } else {
              u = { type: l, mode: this.mode, loc: h, text: t };
            }
            o = u;
          } else if (t.charCodeAt(0) >= 128) {
            if (this.settings.strict) {
              if (!F(t.charCodeAt(0))) {
                this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e);
              } else if (this.mode === "math") {
                this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e);
              }
            }
            o = { type: "textord", mode: "text", loc: a.range(e), text: t };
          } else {
            return null;
          }
          this.consume();
          if (s) {
            for (var c = 0; c < s[0].length; c++) {
              var p = s[0][c];
              if (!an[p]) {
                throw new n("Unknown accent ' " + p + "'", e);
              }
              var d = an[p][this.mode] || an[p].text;
              if (!d) {
                throw new n("Accent " + p + " unsupported in " + this.mode + " mode", e);
              }
              o = { type: "accent", mode: this.mode, loc: a.range(e), label: d, isStretchy: false, isShifty: true, base: o };
            }
          }
          return o;
        }
      }
      sn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
      var on = function e(t, r) {
        if (!(typeof t === "string" || t instanceof String)) {
          throw new TypeError("KaTeX can only parse string typed expression");
        }
        var a = new sn(t, r);
        delete a.gullet.macros.current["\\df@tag"];
        var s = a.parse();
        delete a.gullet.macros.current["\\current@color"];
        delete a.gullet.macros.current["\\color"];
        if (a.gullet.macros.get("\\df@tag")) {
          if (!r.displayMode) {
            throw new n("\\tag works only in display equations");
          }
          s = [{ type: "tag", mode: "text", body: s, tag: a.subparse([new i("\\df@tag")]) }];
        }
        return s;
      };
      var ln = function e(t, r, a) {
        r.textContent = "";
        var i = cn(t, a).toNode();
        r.appendChild(i);
      };
      if (typeof document !== "undefined") {
        if (document.compatMode !== "CSS1Compat") {
          typeof console !== "undefined" &&
            console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your " + "website has a suitable doctype.");
          ln = function e() {
            throw new n("KaTeX doesn't work in quirks mode.");
          };
        }
      }
      var hn = function e(t, r) {
        var a = cn(t, r).toMarkup();
        return a;
      };
      var un = function e(t, r) {
        var a = new x(r);
        return on(t, a);
      };
      var mn = function e(t, r, a) {
        if (a.throwOnError || !(t instanceof n)) {
          throw t;
        }
        var i = Vt.makeSpan(["katex-error"], [new Ae(r)]);
        i.setAttribute("title", t.toString());
        i.setAttribute("style", "color:" + a.errorColor);
        return i;
      };
      var cn = function e(t, r) {
        var a = new x(r);
        try {
          var i = on(t, a);
          return Tr(i, t, a);
        } catch (n) {
          return mn(n, t, a);
        }
      };
      var pn = function e(t, r) {
        var a = new x(r);
        try {
          var i = on(t, a);
          return Br(i, t, a);
        } catch (n) {
          return mn(n, t, a);
        }
      };
      var dn = "0.16.21";
      var fn = { Span: ke, Anchor: Se, SymbolNode: Ae, SvgNode: Te, PathNode: Be, LineNode: Ce };
      var vn = {
        version: dn,
        render: ln,
        renderToString: hn,
        ParseError: n,
        SETTINGS_SCHEMA: b,
        __parse: un,
        __renderToDomTree: cn,
        __renderToHTMLTree: pn,
        __setFontMetrics: ie,
        __defineSymbol: Oe,
        __defineFunction: jt,
        __defineMacro: Ya,
        __domTree: fn,
      };
    },
  },
]);
