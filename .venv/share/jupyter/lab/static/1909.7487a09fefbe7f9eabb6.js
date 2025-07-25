/*! For license information please see 1909.7487a09fefbe7f9eabb6.js.LICENSE.txt */
"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1909],
  {
    31909: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.AllPackages = void 0;
      r(11252);
      r(3654);
      r(48600);
      r(62684);
      r(12512);
      r(79224);
      r(82792);
      r(77774);
      r(2362);
      r(12796);
      r(50228);
      r(79712);
      r(69600);
      r(90272);
      r(45320);
      r(13726);
      r(48128);
      r(15472);
      r(95120);
      r(98452);
      r(7932);
      r(75802);
      r(36912);
      r(21018);
      r(68916);
      r(23468);
      r(91610);
      r(18560);
      r(46370);
      r(29302);
      r(82736);
      r(69112);
      r(22232);
      if (typeof MathJax !== "undefined" && MathJax.loader) {
        MathJax.loader.preLoad(
          "[tex]/action",
          "[tex]/ams",
          "[tex]/amscd",
          "[tex]/bbox",
          "[tex]/boldsymbol",
          "[tex]/braket",
          "[tex]/bussproofs",
          "[tex]/cancel",
          "[tex]/cases",
          "[tex]/centernot",
          "[tex]/color",
          "[tex]/colorv2",
          "[tex]/colortbl",
          "[tex]/empheq",
          "[tex]/enclose",
          "[tex]/extpfeil",
          "[tex]/gensymb",
          "[tex]/html",
          "[tex]/mathtools",
          "[tex]/mhchem",
          "[tex]/newcommand",
          "[tex]/noerrors",
          "[tex]/noundefined",
          "[tex]/physics",
          "[tex]/upgreek",
          "[tex]/unicode",
          "[tex]/verb",
          "[tex]/configmacros",
          "[tex]/tagformat",
          "[tex]/textcomp",
          "[tex]/textmacros",
          "[tex]/setoptions"
        );
      }
      t.AllPackages = [
        "base",
        "action",
        "ams",
        "amscd",
        "bbox",
        "boldsymbol",
        "braket",
        "bussproofs",
        "cancel",
        "cases",
        "centernot",
        "color",
        "colortbl",
        "empheq",
        "enclose",
        "extpfeil",
        "gensymb",
        "html",
        "mathtools",
        "mhchem",
        "newcommand",
        "noerrors",
        "noundefined",
        "upgreek",
        "unicode",
        "verb",
        "configmacros",
        "tagformat",
        "textcomp",
        "textmacros",
      ];
    },
    3654: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.ActionConfiguration = t.ActionMethods = void 0;
      var n = r(56441);
      var o = a(r(75845));
      var i = r(80209);
      var s = a(r(38364));
      t.ActionMethods = {};
      t.ActionMethods.Macro = s.default.Macro;
      t.ActionMethods.Toggle = function (e, t) {
        var r = [];
        var a;
        while ((a = e.GetArgument(t)) !== "\\endtoggle") {
          r.push(new o.default(a, e.stack.env, e.configuration).mml());
        }
        e.Push(e.create("node", "maction", r, { actiontype: "toggle" }));
      };
      t.ActionMethods.Mathtip = function (e, t) {
        var r = e.ParseArg(t);
        var a = e.ParseArg(t);
        e.Push(e.create("node", "maction", [r, a], { actiontype: "tooltip" }));
      };
      new i.CommandMap(
        "action-macros",
        { toggle: "Toggle", mathtip: "Mathtip", texttip: ["Macro", "\\mathtip{#1}{\\text{#2}}", 2] },
        t.ActionMethods
      );
      t.ActionConfiguration = n.Configuration.create("action", { handler: { macro: ["action-macros"] } });
    },
    48600: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n;
      Object.defineProperty(t, "__esModule", { value: true });
      t.AmsConfiguration = t.AmsTags = void 0;
      var o = r(56441);
      var i = r(92902);
      var s = r(17782);
      var l = r(98840);
      r(97403);
      var u = r(80209);
      var c = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        return t;
      })(s.AbstractTags);
      t.AmsTags = c;
      var f = function (e) {
        new u.CommandMap(l.NEW_OPS, {}, {});
        e.append(o.Configuration.local({ handler: { macro: [l.NEW_OPS] }, priority: -1 }));
      };
      t.AmsConfiguration = o.Configuration.create("ams", {
        handler: {
          character: ["AMSmath-operatorLetter"],
          delimiter: ["AMSsymbols-delimiter", "AMSmath-delimiter"],
          macro: [
            "AMSsymbols-mathchar0mi",
            "AMSsymbols-mathchar0mo",
            "AMSsymbols-delimiter",
            "AMSsymbols-macros",
            "AMSmath-mathchar0mo",
            "AMSmath-macros",
            "AMSmath-delimiter",
          ],
          environment: ["AMSmath-environment"],
        },
        items: ((n = {}), (n[i.MultlineItem.prototype.kind] = i.MultlineItem), (n[i.FlalignItem.prototype.kind] = i.FlalignItem), n),
        tags: { ams: c },
        init: f,
        config: function (e, t) {
          if (t.parseOptions.options.multlineWidth) {
            t.parseOptions.options.ams.multlineWidth = t.parseOptions.options.multlineWidth;
          }
          delete t.parseOptions.options.multlineWidth;
        },
        options: { multlineWidth: "", ams: { multlineWidth: "100%", multlineIndent: "1em" } },
      });
    },
    92902: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, a = arguments.length; r < a; r++) {
                t = arguments[r];
                for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
              }
              return e;
            };
          return n.apply(this, arguments);
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.FlalignItem = t.MultlineItem = void 0;
      var i = r(94650);
      var s = o(r(6980));
      var l = o(r(72691));
      var u = o(r(98770));
      var c = r(80469);
      var f = (function (e) {
        a(t, e);
        function t(t) {
          var r = [];
          for (var a = 1; a < arguments.length; a++) {
            r[a - 1] = arguments[a];
          }
          var n = e.call(this, t) || this;
          n.factory.configuration.tags.start("multline", true, r[0]);
          return n;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "multline";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.EndEntry = function () {
          if (this.table.length) {
            s.default.fixInitialMO(this.factory.configuration, this.nodes);
          }
          var e = this.getProperty("shove");
          var t = this.create("node", "mtd", this.nodes, e ? { columnalign: e } : {});
          this.setProperty("shove", null);
          this.row.push(t);
          this.Clear();
        };
        t.prototype.EndRow = function () {
          if (this.row.length !== 1) {
            throw new u.default("MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline");
          }
          var e = this.create("node", "mtr", this.row);
          this.table.push(e);
          this.row = [];
        };
        t.prototype.EndTable = function () {
          e.prototype.EndTable.call(this);
          if (this.table.length) {
            var t = this.table.length - 1,
              r = -1;
            if (!l.default.getAttribute(l.default.getChildren(this.table[0])[0], "columnalign")) {
              l.default.setAttribute(l.default.getChildren(this.table[0])[0], "columnalign", c.TexConstant.Align.LEFT);
            }
            if (!l.default.getAttribute(l.default.getChildren(this.table[t])[0], "columnalign")) {
              l.default.setAttribute(l.default.getChildren(this.table[t])[0], "columnalign", c.TexConstant.Align.RIGHT);
            }
            var a = this.factory.configuration.tags.getTag();
            if (a) {
              r = this.arraydef.side === c.TexConstant.Align.LEFT ? 0 : this.table.length - 1;
              var n = this.table[r];
              var o = this.create("node", "mlabeledtr", [a].concat(l.default.getChildren(n)));
              l.default.copyAttributes(n, o);
              this.table[r] = o;
            }
          }
          this.factory.configuration.tags.end();
        };
        return t;
      })(i.ArrayItem);
      t.MultlineItem = f;
      var d = (function (e) {
        a(t, e);
        function t(t, r, a, n, o) {
          var i = e.call(this, t) || this;
          i.name = r;
          i.numbered = a;
          i.padded = n;
          i.center = o;
          i.factory.configuration.tags.start(r, a, a);
          return i;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "flalign";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.EndEntry = function () {
          e.prototype.EndEntry.call(this);
          var t = this.getProperty("xalignat");
          if (!t) return;
          if (this.row.length > t) {
            throw new u.default("XalignOverflow", "Extra %1 in row of %2", "&", this.name);
          }
        };
        t.prototype.EndRow = function () {
          var t;
          var r = this.row;
          var a = this.getProperty("xalignat");
          while (r.length < a) {
            r.push(this.create("node", "mtd"));
          }
          this.row = [];
          if (this.padded) {
            this.row.push(this.create("node", "mtd"));
          }
          while ((t = r.shift())) {
            this.row.push(t);
            t = r.shift();
            if (t) this.row.push(t);
            if (r.length || this.padded) {
              this.row.push(this.create("node", "mtd"));
            }
          }
          if (this.row.length > this.maxrow) {
            this.maxrow = this.row.length;
          }
          e.prototype.EndRow.call(this);
          var o = this.table[this.table.length - 1];
          if (this.getProperty("zeroWidthLabel") && o.isKind("mlabeledtr")) {
            var i = l.default.getChildren(o)[0];
            var s = this.factory.configuration.options["tagSide"];
            var u = n({ width: 0 }, s === "right" ? { lspace: "-1width" } : {});
            var c = this.create("node", "mpadded", l.default.getChildren(i), u);
            i.setChildren([c]);
          }
        };
        t.prototype.EndTable = function () {
          e.prototype.EndTable.call(this);
          if (this.center) {
            if (this.maxrow <= 2) {
              var t = this.arraydef;
              delete t.width;
              delete this.global.indentalign;
            }
          }
        };
        return t;
      })(i.EqnArrayItem);
      t.FlalignItem = d;
    },
    97403: function (e, t, r) {
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) a(t, e, r);
          n(t, e);
          return t;
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var s = r(98840);
      var l = o(r(80209));
      var u = r(80469);
      var c = i(r(22960));
      var f = i(r(6980));
      var d = r(80747);
      var p = r(86810);
      new l.CharacterMap("AMSmath-mathchar0mo", c.default.mathchar0mo, { iiiint: ["⨌", { texClass: d.TEXCLASS.OP }] });
      new l.RegExpMap("AMSmath-operatorLetter", s.AmsMethods.operatorLetter, /[-*]/i);
      new l.CommandMap(
        "AMSmath-macros",
        {
          mathring: ["Accent", "02DA"],
          nobreakspace: "Tilde",
          negmedspace: ["Spacer", p.MATHSPACE.negativemediummathspace],
          negthickspace: ["Spacer", p.MATHSPACE.negativethickmathspace],
          idotsint: ["MultiIntegral", "\\int\\cdots\\int"],
          dddot: ["Accent", "20DB"],
          ddddot: ["Accent", "20DC"],
          sideset: "SideSet",
          boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
          tag: "HandleTag",
          notag: "HandleNoTag",
          eqref: ["HandleRef", true],
          substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1],
          injlim: ["NamedOp", "inj&thinsp;lim"],
          projlim: ["NamedOp", "proj&thinsp;lim"],
          varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
          varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
          varinjlim: ["Macro", "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"],
          varprojlim: ["Macro", "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"],
          DeclareMathOperator: "HandleDeclareOp",
          operatorname: "HandleOperatorName",
          genfrac: "Genfrac",
          frac: ["Genfrac", "", "", "", ""],
          tfrac: ["Genfrac", "", "", "", "1"],
          dfrac: ["Genfrac", "", "", "", "0"],
          binom: ["Genfrac", "(", ")", "0", ""],
          tbinom: ["Genfrac", "(", ")", "0", "1"],
          dbinom: ["Genfrac", "(", ")", "0", "0"],
          cfrac: "CFrac",
          shoveleft: ["HandleShove", u.TexConstant.Align.LEFT],
          shoveright: ["HandleShove", u.TexConstant.Align.RIGHT],
          xrightarrow: ["xArrow", 8594, 5, 10],
          xleftarrow: ["xArrow", 8592, 10, 5],
        },
        s.AmsMethods
      );
      new l.EnvironmentMap(
        "AMSmath-environment",
        c.default.environment,
        {
          "equation*": ["Equation", null, false],
          "eqnarray*": ["EqnArray", null, false, true, "rcl", f.default.cols(0, p.MATHSPACE.thickmathspace), ".5em"],
          align: ["EqnArray", null, true, true, "rl", f.default.cols(0, 2)],
          "align*": ["EqnArray", null, false, true, "rl", f.default.cols(0, 2)],
          multline: ["Multline", null, true],
          "multline*": ["Multline", null, false],
          split: ["EqnArray", null, false, false, "rl", f.default.cols(0)],
          gather: ["EqnArray", null, true, true, "c"],
          "gather*": ["EqnArray", null, false, true, "c"],
          alignat: ["AlignAt", null, true, true],
          "alignat*": ["AlignAt", null, false, true],
          alignedat: ["AlignAt", null, false, false],
          aligned: ["AmsEqnArray", null, null, null, "rl", f.default.cols(0, 2), ".5em", "D"],
          gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"],
          xalignat: ["XalignAt", null, true, true],
          "xalignat*": ["XalignAt", null, false, true],
          xxalignat: ["XalignAt", null, false, false],
          flalign: ["FlalignArray", null, true, false, true, "rlc", "auto auto fit"],
          "flalign*": ["FlalignArray", null, false, false, true, "rlc", "auto auto fit"],
          subarray: ["Array", null, null, null, null, f.default.cols(0), "0.1em", "S", 1],
          smallmatrix: ["Array", null, null, null, "c", f.default.cols(1 / 3), ".2em", "S", 1],
          matrix: ["Array", null, null, null, "c"],
          pmatrix: ["Array", null, "(", ")", "c"],
          bmatrix: ["Array", null, "[", "]", "c"],
          Bmatrix: ["Array", null, "\\{", "\\}", "c"],
          vmatrix: ["Array", null, "\\vert", "\\vert", "c"],
          Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"],
          cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"],
        },
        s.AmsMethods
      );
      new l.DelimiterMap("AMSmath-delimiter", c.default.delimiter, {
        "\\lvert": ["|", { texClass: d.TEXCLASS.OPEN }],
        "\\rvert": ["|", { texClass: d.TEXCLASS.CLOSE }],
        "\\lVert": ["‖", { texClass: d.TEXCLASS.OPEN }],
        "\\rVert": ["‖", { texClass: d.TEXCLASS.CLOSE }],
      });
      new l.CharacterMap("AMSsymbols-mathchar0mi", c.default.mathchar0mi, {
        digamma: "ϝ",
        varkappa: "ϰ",
        varGamma: ["Γ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varDelta: ["Δ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varTheta: ["Θ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varLambda: ["Λ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varXi: ["Ξ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varPi: ["Π", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varSigma: ["Σ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varUpsilon: ["Υ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varPhi: ["Φ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varPsi: ["Ψ", { mathvariant: u.TexConstant.Variant.ITALIC }],
        varOmega: ["Ω", { mathvariant: u.TexConstant.Variant.ITALIC }],
        beth: "ℶ",
        gimel: "ℷ",
        daleth: "ℸ",
        backprime: ["‵", { variantForm: true }],
        hslash: "ℏ",
        varnothing: ["∅", { variantForm: true }],
        blacktriangle: "▴",
        triangledown: ["▽", { variantForm: true }],
        blacktriangledown: "▾",
        square: "◻",
        Box: "◻",
        blacksquare: "◼",
        lozenge: "◊",
        Diamond: "◊",
        blacklozenge: "⧫",
        circledS: ["Ⓢ", { mathvariant: u.TexConstant.Variant.NORMAL }],
        bigstar: "★",
        sphericalangle: "∢",
        measuredangle: "∡",
        nexists: "∄",
        complement: "∁",
        mho: "℧",
        eth: ["ð", { mathvariant: u.TexConstant.Variant.NORMAL }],
        Finv: "Ⅎ",
        diagup: "╱",
        Game: "⅁",
        diagdown: "╲",
        Bbbk: ["k", { mathvariant: u.TexConstant.Variant.DOUBLESTRUCK }],
        yen: "¥",
        circledR: "®",
        checkmark: "✓",
        maltese: "✠",
      });
      new l.CharacterMap("AMSsymbols-mathchar0mo", c.default.mathchar0mo, {
        dotplus: "∔",
        ltimes: "⋉",
        smallsetminus: ["∖", { variantForm: true }],
        rtimes: "⋊",
        Cap: "⋒",
        doublecap: "⋒",
        leftthreetimes: "⋋",
        Cup: "⋓",
        doublecup: "⋓",
        rightthreetimes: "⋌",
        barwedge: "⊼",
        curlywedge: "⋏",
        veebar: "⊻",
        curlyvee: "⋎",
        doublebarwedge: "⩞",
        boxminus: "⊟",
        circleddash: "⊝",
        boxtimes: "⊠",
        circledast: "⊛",
        boxdot: "⊡",
        circledcirc: "⊚",
        boxplus: "⊞",
        centerdot: ["⋅", { variantForm: true }],
        divideontimes: "⋇",
        intercal: "⊺",
        leqq: "≦",
        geqq: "≧",
        leqslant: "⩽",
        geqslant: "⩾",
        eqslantless: "⪕",
        eqslantgtr: "⪖",
        lesssim: "≲",
        gtrsim: "≳",
        lessapprox: "⪅",
        gtrapprox: "⪆",
        approxeq: "≊",
        lessdot: "⋖",
        gtrdot: "⋗",
        lll: "⋘",
        llless: "⋘",
        ggg: "⋙",
        gggtr: "⋙",
        lessgtr: "≶",
        gtrless: "≷",
        lesseqgtr: "⋚",
        gtreqless: "⋛",
        lesseqqgtr: "⪋",
        gtreqqless: "⪌",
        doteqdot: "≑",
        Doteq: "≑",
        eqcirc: "≖",
        risingdotseq: "≓",
        circeq: "≗",
        fallingdotseq: "≒",
        triangleq: "≜",
        backsim: "∽",
        thicksim: ["∼", { variantForm: true }],
        backsimeq: "⋍",
        thickapprox: ["≈", { variantForm: true }],
        subseteqq: "⫅",
        supseteqq: "⫆",
        Subset: "⋐",
        Supset: "⋑",
        sqsubset: "⊏",
        sqsupset: "⊐",
        preccurlyeq: "≼",
        succcurlyeq: "≽",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        precsim: "≾",
        succsim: "≿",
        precapprox: "⪷",
        succapprox: "⪸",
        vartriangleleft: "⊲",
        lhd: "⊲",
        vartriangleright: "⊳",
        rhd: "⊳",
        trianglelefteq: "⊴",
        unlhd: "⊴",
        trianglerighteq: "⊵",
        unrhd: "⊵",
        vDash: ["⊨", { variantForm: true }],
        Vdash: "⊩",
        Vvdash: "⊪",
        smallsmile: ["⌣", { variantForm: true }],
        shortmid: ["∣", { variantForm: true }],
        smallfrown: ["⌢", { variantForm: true }],
        shortparallel: ["∥", { variantForm: true }],
        bumpeq: "≏",
        between: "≬",
        Bumpeq: "≎",
        pitchfork: "⋔",
        varpropto: ["∝", { variantForm: true }],
        backepsilon: "∍",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        therefore: "∴",
        because: "∵",
        eqsim: "≂",
        vartriangle: ["△", { variantForm: true }],
        Join: "⋈",
        nless: "≮",
        ngtr: "≯",
        nleq: "≰",
        ngeq: "≱",
        nleqslant: ["⪇", { variantForm: true }],
        ngeqslant: ["⪈", { variantForm: true }],
        nleqq: ["≰", { variantForm: true }],
        ngeqq: ["≱", { variantForm: true }],
        lneq: "⪇",
        gneq: "⪈",
        lneqq: "≨",
        gneqq: "≩",
        lvertneqq: ["≨", { variantForm: true }],
        gvertneqq: ["≩", { variantForm: true }],
        lnsim: "⋦",
        gnsim: "⋧",
        lnapprox: "⪉",
        gnapprox: "⪊",
        nprec: "⊀",
        nsucc: "⊁",
        npreceq: ["⋠", { variantForm: true }],
        nsucceq: ["⋡", { variantForm: true }],
        precneqq: "⪵",
        succneqq: "⪶",
        precnsim: "⋨",
        succnsim: "⋩",
        precnapprox: "⪹",
        succnapprox: "⪺",
        nsim: "≁",
        ncong: "≇",
        nshortmid: ["∤", { variantForm: true }],
        nshortparallel: ["∦", { variantForm: true }],
        nmid: "∤",
        nparallel: "∦",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        ntriangleleft: "⋪",
        ntriangleright: "⋫",
        ntrianglelefteq: "⋬",
        ntrianglerighteq: "⋭",
        nsubseteq: "⊈",
        nsupseteq: "⊉",
        nsubseteqq: ["⊈", { variantForm: true }],
        nsupseteqq: ["⊉", { variantForm: true }],
        subsetneq: "⊊",
        supsetneq: "⊋",
        varsubsetneq: ["⊊", { variantForm: true }],
        varsupsetneq: ["⊋", { variantForm: true }],
        subsetneqq: "⫋",
        supsetneqq: "⫌",
        varsubsetneqq: ["⫋", { variantForm: true }],
        varsupsetneqq: ["⫌", { variantForm: true }],
        leftleftarrows: "⇇",
        rightrightarrows: "⇉",
        leftrightarrows: "⇆",
        rightleftarrows: "⇄",
        Lleftarrow: "⇚",
        Rrightarrow: "⇛",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        leftarrowtail: "↢",
        rightarrowtail: "↣",
        looparrowleft: "↫",
        looparrowright: "↬",
        leftrightharpoons: "⇋",
        rightleftharpoons: ["⇌", { variantForm: true }],
        curvearrowleft: "↶",
        curvearrowright: "↷",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        Lsh: "↰",
        Rsh: "↱",
        upuparrows: "⇈",
        downdownarrows: "⇊",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        downharpoonleft: "⇃",
        restriction: "↾",
        multimap: "⊸",
        downharpoonright: "⇂",
        leftrightsquigarrow: "↭",
        rightsquigarrow: "⇝",
        leadsto: "⇝",
        dashrightarrow: "⇢",
        dashleftarrow: "⇠",
        nleftarrow: "↚",
        nrightarrow: "↛",
        nLeftarrow: "⇍",
        nRightarrow: "⇏",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
      });
      new l.DelimiterMap("AMSsymbols-delimiter", c.default.delimiter, { "\\ulcorner": "⌜", "\\urcorner": "⌝", "\\llcorner": "⌞", "\\lrcorner": "⌟" });
      new l.CommandMap(
        "AMSsymbols-macros",
        { implies: ["Macro", "\\;\\Longrightarrow\\;"], impliedby: ["Macro", "\\;\\Longleftarrow\\;"] },
        s.AmsMethods
      );
    },
    98840: function (e, t, r) {
      var a =
        (this && this.__assign) ||
        function () {
          a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, a = arguments.length; r < a; r++) {
                t = arguments[r];
                for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
              }
              return e;
            };
          return a.apply(this, arguments);
        };
      var n =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.NEW_OPS = t.AmsMethods = void 0;
      var i = o(r(6980));
      var s = o(r(22960));
      var l = o(r(72691));
      var u = r(80469);
      var c = o(r(75845));
      var f = o(r(98770));
      var d = r(27151);
      var p = o(r(38364));
      var m = r(80747);
      t.AmsMethods = {};
      t.AmsMethods.AmsEqnArray = function (e, t, r, a, n, o, s) {
        var l = e.GetBrackets("\\begin{" + t.getName() + "}");
        var u = p.default.EqnArray(e, t, r, a, n, o, s);
        return i.default.setArrayAlign(u, l);
      };
      t.AmsMethods.AlignAt = function (e, r, a, n) {
        var o = r.getName();
        var s,
          l,
          u = "",
          c = [];
        if (!n) {
          l = e.GetBrackets("\\begin{" + o + "}");
        }
        s = e.GetArgument("\\begin{" + o + "}");
        if (s.match(/[^0-9]/)) {
          throw new f.default("PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + o + "}");
        }
        var d = parseInt(s, 10);
        while (d > 0) {
          u += "rl";
          c.push("0em 0em");
          d--;
        }
        var p = c.join(" ");
        if (n) {
          return t.AmsMethods.EqnArray(e, r, a, n, u, p);
        }
        var m = t.AmsMethods.EqnArray(e, r, a, n, u, p);
        return i.default.setArrayAlign(m, l);
      };
      t.AmsMethods.Multline = function (e, t, r) {
        e.Push(t);
        i.default.checkEqnEnv(e);
        var a = e.itemFactory.create("multline", r, e.stack);
        a.arraydef = {
          displaystyle: true,
          rowspacing: ".5em",
          columnspacing: "100%",
          width: e.options.ams["multlineWidth"],
          side: e.options["tagSide"],
          minlabelspacing: e.options["tagIndent"],
          framespacing: e.options.ams["multlineIndent"] + " 0",
          frame: "",
          "data-width-includes-label": true,
        };
        return a;
      };
      t.AmsMethods.XalignAt = function (e, r, a, n) {
        var o = e.GetArgument("\\begin{" + r.getName() + "}");
        if (o.match(/[^0-9]/)) {
          throw new f.default("PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + r.getName() + "}");
        }
        var i = n ? "crl" : "rlc";
        var s = n ? "fit auto auto" : "auto auto fit";
        var l = t.AmsMethods.FlalignArray(e, r, a, n, false, i, s, true);
        l.setProperty("xalignat", 2 * parseInt(o));
        return l;
      };
      t.AmsMethods.FlalignArray = function (e, t, r, a, n, o, s, l) {
        if (l === void 0) {
          l = false;
        }
        e.Push(t);
        i.default.checkEqnEnv(e);
        o = o.split("").join(" ").replace(/r/g, "right").replace(/l/g, "left").replace(/c/g, "center");
        var u = e.itemFactory.create("flalign", t.getName(), r, a, n, e.stack);
        u.arraydef = {
          width: "100%",
          displaystyle: true,
          columnalign: o,
          columnspacing: "0em",
          columnwidth: s,
          rowspacing: "3pt",
          side: e.options["tagSide"],
          minlabelspacing: l ? "0" : e.options["tagIndent"],
          "data-width-includes-label": true,
        };
        u.setProperty("zeroWidthLabel", l);
        return u;
      };
      t.NEW_OPS = "ams-declare-ops";
      t.AmsMethods.HandleDeclareOp = function (e, r) {
        var a = e.GetStar() ? "*" : "";
        var n = i.default.trimSpaces(e.GetArgument(r));
        if (n.charAt(0) === "\\") {
          n = n.substr(1);
        }
        var o = e.GetArgument(r);
        e.configuration.handlers.retrieve(t.NEW_OPS).add(n, new d.Macro(n, t.AmsMethods.Macro, ["\\operatorname".concat(a, "{").concat(o, "}")]));
      };
      t.AmsMethods.HandleOperatorName = function (e, t) {
        var r = e.GetStar();
        var n = i.default.trimSpaces(e.GetArgument(t));
        var o = new c.default(
          n,
          a(a({}, e.stack.env), { font: u.TexConstant.Variant.NORMAL, multiLetterIdentifiers: /^[-*a-z]+/i, operatorLetters: true }),
          e.configuration
        ).mml();
        if (!o.isKind("mi")) {
          o = e.create("node", "TeXAtom", [o]);
        }
        l.default.setProperties(o, { movesupsub: r, movablelimits: true, texClass: m.TEXCLASS.OP });
        if (!r) {
          var s = e.GetNext(),
            f = e.i;
          if (s === "\\" && ++e.i && e.GetCS() !== "limits") {
            e.i = f;
          }
        }
        e.Push(o);
      };
      t.AmsMethods.SideSet = function (e, t) {
        var r = n(h(e.ParseArg(t)), 2),
          a = r[0],
          o = r[1];
        var s = n(h(e.ParseArg(t)), 2),
          u = s[0],
          c = s[1];
        var f = e.ParseArg(t);
        var d = f;
        if (a) {
          if (o) {
            a.replaceChild(
              e.create("node", "mphantom", [e.create("node", "mpadded", [i.default.copyNode(f, e)], { width: 0 })]),
              l.default.getChildAt(a, 0)
            );
          } else {
            d = e.create("node", "mmultiscripts", [f]);
            if (u) {
              l.default.appendChildren(d, [
                l.default.getChildAt(u, 1) || e.create("node", "none"),
                l.default.getChildAt(u, 2) || e.create("node", "none"),
              ]);
            }
            l.default.setProperty(d, "scriptalign", "left");
            l.default.appendChildren(d, [
              e.create("node", "mprescripts"),
              l.default.getChildAt(a, 1) || e.create("node", "none"),
              l.default.getChildAt(a, 2) || e.create("node", "none"),
            ]);
          }
        }
        if (u && d === f) {
          u.replaceChild(f, l.default.getChildAt(u, 0));
          d = u;
        }
        var p = e.create("node", "TeXAtom", [], { texClass: m.TEXCLASS.OP, movesupsub: true, movablelimits: true });
        if (o) {
          a && p.appendChild(a);
          p.appendChild(o);
        }
        p.appendChild(d);
        c && p.appendChild(c);
        e.Push(p);
      };
      function h(e) {
        if (!e || (e.isInferred && e.childNodes.length === 0)) return [null, null];
        if (e.isKind("msubsup") && v(e)) return [e, null];
        var t = l.default.getChildAt(e, 0);
        if (!(e.isInferred && t && v(t))) return [null, e];
        e.childNodes.splice(0, 1);
        return [t, e];
      }
      function v(e) {
        var t = e.childNodes[0];
        return t && t.isKind("mi") && t.getText() === "";
      }
      t.AmsMethods.operatorLetter = function (e, t) {
        return e.stack.env.operatorLetters ? s.default.variable(e, t) : false;
      };
      t.AmsMethods.MultiIntegral = function (e, t, r) {
        var a = e.GetNext();
        if (a === "\\") {
          var n = e.i;
          a = e.GetArgument(t);
          e.i = n;
          if (a === "\\limits") {
            if (t === "\\idotsint") {
              r = "\\!\\!\\mathop{\\,\\," + r + "}";
            } else {
              r = "\\!\\!\\!\\mathop{\\,\\,\\," + r + "}";
            }
          }
        }
        e.string = r + " " + e.string.slice(e.i);
        e.i = 0;
      };
      t.AmsMethods.xArrow = function (e, t, r, a, n) {
        var o = { width: "+" + i.default.Em((a + n) / 18), lspace: i.default.Em(a / 18) };
        var s = e.GetBrackets(t);
        var u = e.ParseArg(t);
        var f = e.create("node", "mspace", [], { depth: ".25em" });
        var d = e.create("token", "mo", { stretchy: true, texClass: m.TEXCLASS.REL }, String.fromCodePoint(r));
        d = e.create("node", "mstyle", [d], { scriptlevel: 0 });
        var p = e.create("node", "munderover", [d]);
        var h = e.create("node", "mpadded", [u, f], o);
        l.default.setAttribute(h, "voffset", "-.2em");
        l.default.setAttribute(h, "height", "-.2em");
        l.default.setChild(p, p.over, h);
        if (s) {
          var v = new c.default(s, e.stack.env, e.configuration).mml();
          var g = e.create("node", "mspace", [], { height: ".75em" });
          h = e.create("node", "mpadded", [v, g], o);
          l.default.setAttribute(h, "voffset", ".15em");
          l.default.setAttribute(h, "depth", "-.15em");
          l.default.setChild(p, p.under, h);
        }
        l.default.setProperty(p, "subsupOK", true);
        e.Push(p);
      };
      t.AmsMethods.HandleShove = function (e, t, r) {
        var a = e.stack.Top();
        if (a.kind !== "multline") {
          throw new f.default("CommandOnlyAllowedInEnv", "%1 only allowed in %2 environment", e.currentCS, "multline");
        }
        if (a.Size()) {
          throw new f.default("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", e.currentCS);
        }
        a.setProperty("shove", r);
      };
      t.AmsMethods.CFrac = function (e, t) {
        var r = i.default.trimSpaces(e.GetBrackets(t, ""));
        var a = e.GetArgument(t);
        var n = e.GetArgument(t);
        var o = { l: u.TexConstant.Align.LEFT, r: u.TexConstant.Align.RIGHT, "": "" };
        var s = new c.default("\\strut\\textstyle{" + a + "}", e.stack.env, e.configuration).mml();
        var d = new c.default("\\strut\\textstyle{" + n + "}", e.stack.env, e.configuration).mml();
        var p = e.create("node", "mfrac", [s, d]);
        r = o[r];
        if (r == null) {
          throw new f.default("IllegalAlign", "Illegal alignment specified in %1", e.currentCS);
        }
        if (r) {
          l.default.setProperties(p, { numalign: r, denomalign: r });
        }
        e.Push(p);
      };
      t.AmsMethods.Genfrac = function (e, t, r, a, n, o) {
        if (r == null) {
          r = e.GetDelimiterArg(t);
        }
        if (a == null) {
          a = e.GetDelimiterArg(t);
        }
        if (n == null) {
          n = e.GetArgument(t);
        }
        if (o == null) {
          o = i.default.trimSpaces(e.GetArgument(t));
        }
        var s = e.ParseArg(t);
        var u = e.ParseArg(t);
        var c = e.create("node", "mfrac", [s, u]);
        if (n !== "") {
          l.default.setAttribute(c, "linethickness", n);
        }
        if (r || a) {
          l.default.setProperty(c, "withDelims", true);
          c = i.default.fixedFence(e.configuration, r, c, a);
        }
        if (o !== "") {
          var d = parseInt(o, 10);
          var p = ["D", "T", "S", "SS"][d];
          if (p == null) {
            throw new f.default("BadMathStyleFor", "Bad math style for %1", e.currentCS);
          }
          c = e.create("node", "mstyle", [c]);
          if (p === "D") {
            l.default.setProperties(c, { displaystyle: true, scriptlevel: 0 });
          } else {
            l.default.setProperties(c, { displaystyle: false, scriptlevel: d - 1 });
          }
        }
        e.Push(c);
      };
      t.AmsMethods.HandleTag = function (e, t) {
        if (!e.tags.currentTag.taggable && e.tags.env) {
          throw new f.default("CommandNotAllowedInEnv", "%1 not allowed in %2 environment", e.currentCS, e.tags.env);
        }
        if (e.tags.currentTag.tag) {
          throw new f.default("MultipleCommand", "Multiple %1", e.currentCS);
        }
        var r = e.GetStar();
        var a = i.default.trimSpaces(e.GetArgument(t));
        e.tags.tag(a, r);
      };
      t.AmsMethods.HandleNoTag = p.default.HandleNoTag;
      t.AmsMethods.HandleRef = p.default.HandleRef;
      t.AmsMethods.Macro = p.default.Macro;
      t.AmsMethods.Accent = p.default.Accent;
      t.AmsMethods.Tilde = p.default.Tilde;
      t.AmsMethods.Array = p.default.Array;
      t.AmsMethods.Spacer = p.default.Spacer;
      t.AmsMethods.NamedOp = p.default.NamedOp;
      t.AmsMethods.EqnArray = p.default.EqnArray;
      t.AmsMethods.Equation = p.default.Equation;
    },
    62684: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.AmsCdConfiguration = void 0;
      var a = r(56441);
      r(14831);
      t.AmsCdConfiguration = a.Configuration.create("amscd", {
        handler: { character: ["amscd_special"], macro: ["amscd_macros"], environment: ["amscd_environment"] },
        options: { amscd: { colspace: "5pt", rowspace: "5pt", harrowsize: "2.75em", varrowsize: "1.75em", hideHorizontalLabels: false } },
      });
    },
    14831: function (e, t, r) {
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) a(t, e, r);
          n(t, e);
          return t;
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var s = o(r(80209));
      var l = i(r(22960));
      var u = i(r(55828));
      new s.EnvironmentMap("amscd_environment", l.default.environment, { CD: "CD" }, u.default);
      new s.CommandMap("amscd_macros", { minCDarrowwidth: "minCDarrowwidth", minCDarrowheight: "minCDarrowheight" }, u.default);
      new s.MacroMap("amscd_special", { "@": "arrow" }, u.default);
    },
    55828: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(75845));
      var o = r(11252);
      var i = r(80747);
      var s = a(r(72691));
      var l = {};
      l.CD = function (e, t) {
        e.Push(t);
        var r = e.itemFactory.create("array");
        var a = e.configuration.options.amscd;
        r.setProperties({ minw: e.stack.env.CD_minw || a.harrowsize, minh: e.stack.env.CD_minh || a.varrowsize });
        r.arraydef = { columnalign: "center", columnspacing: a.colspace, rowspacing: a.rowspace, displaystyle: true };
        return r;
      };
      l.arrow = function (e, t) {
        var r = e.string.charAt(e.i);
        if (!r.match(/[><VA.|=]/)) {
          return (0, o.Other)(e, t);
        } else {
          e.i++;
        }
        var a = e.stack.Top();
        if (!a.isKind("array") || a.Size()) {
          l.cell(e, t);
          a = e.stack.Top();
        }
        var u = a;
        var c = u.table.length % 2 === 1;
        var f = (u.row.length + (c ? 0 : 1)) % 2;
        while (f) {
          l.cell(e, t);
          f--;
        }
        var d;
        var p = { minsize: u.getProperty("minw"), stretchy: true },
          m = { minsize: u.getProperty("minh"), stretchy: true, symmetric: true, lspace: 0, rspace: 0 };
        if (r === ".") {
        } else if (r === "|") {
          d = e.create("token", "mo", m, "∥");
        } else if (r === "=") {
          d = e.create("token", "mo", p, "=");
        } else {
          var h = { ">": "→", "<": "←", V: "↓", A: "↑" }[r];
          var v = e.GetUpTo(t + r, r);
          var g = e.GetUpTo(t + r, r);
          if (r === ">" || r === "<") {
            d = e.create("token", "mo", p, h);
            if (!v) {
              v = "\\kern " + u.getProperty("minw");
            }
            if (v || g) {
              var y = { width: "+.67em", lspace: ".33em" };
              d = e.create("node", "munderover", [d]);
              if (v) {
                var b = new n.default(v, e.stack.env, e.configuration).mml();
                var x = e.create("node", "mpadded", [b], y);
                s.default.setAttribute(x, "voffset", ".1em");
                s.default.setChild(d, d.over, x);
              }
              if (g) {
                var _ = new n.default(g, e.stack.env, e.configuration).mml();
                s.default.setChild(d, d.under, e.create("node", "mpadded", [_], y));
              }
              if (e.configuration.options.amscd.hideHorizontalLabels) {
                d = e.create("node", "mpadded", d, { depth: 0, height: ".67em" });
              }
            }
          } else {
            var w = e.create("token", "mo", m, h);
            d = w;
            if (v || g) {
              d = e.create("node", "mrow");
              if (v) {
                s.default.appendChildren(d, [new n.default("\\scriptstyle\\llap{" + v + "}", e.stack.env, e.configuration).mml()]);
              }
              w.texClass = i.TEXCLASS.ORD;
              s.default.appendChildren(d, [w]);
              if (g) {
                s.default.appendChildren(d, [new n.default("\\scriptstyle\\rlap{" + g + "}", e.stack.env, e.configuration).mml()]);
              }
            }
          }
        }
        if (d) {
          e.Push(d);
        }
        l.cell(e, t);
      };
      l.cell = function (e, t) {
        var r = e.stack.Top();
        if ((r.table || []).length % 2 === 0 && (r.row || []).length === 0) {
          e.Push(e.create("node", "mpadded", [], { height: "8.5pt", depth: "2pt" }));
        }
        e.Push(e.itemFactory.create("cell").setProperties({ isEntry: true, name: t }));
      };
      l.minCDarrowwidth = function (e, t) {
        e.stack.env.CD_minw = e.GetDimen(t);
      };
      l.minCDarrowheight = function (e, t) {
        e.stack.env.CD_minh = e.GetDimen(t);
      };
      t["default"] = l;
    },
    12512: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.BboxConfiguration = t.BboxMethods = void 0;
      var n = r(56441);
      var o = r(80209);
      var i = a(r(98770));
      t.BboxMethods = {};
      t.BboxMethods.BBox = function (e, t) {
        var r = e.GetBrackets(t, "");
        var a = e.ParseArg(t);
        var n = r.split(/,/);
        var o, u, c;
        for (var f = 0, d = n.length; f < d; f++) {
          var p = n[f].trim();
          var m = p.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
          if (m) {
            if (o) {
              throw new i.default("MultipleBBoxProperty", "%1 specified twice in %2", "Padding", t);
            }
            var h = l(m[1] + m[3]);
            if (h) {
              o = { height: "+" + h, depth: "+" + h, lspace: h, width: "+" + 2 * parseInt(m[1], 10) + m[3] };
            }
          } else if (p.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
            if (u) {
              throw new i.default("MultipleBBoxProperty", "%1 specified twice in %2", "Background", t);
            }
            u = p;
          } else if (p.match(/^[-a-z]+:/i)) {
            if (c) {
              throw new i.default("MultipleBBoxProperty", "%1 specified twice in %2", "Style", t);
            }
            c = s(p);
          } else if (p !== "") {
            throw new i.default("InvalidBBoxProperty", '"%1" doesn\'t look like a color, a padding dimension, or a style', p);
          }
        }
        if (o) {
          a = e.create("node", "mpadded", [a], o);
        }
        if (u || c) {
          o = {};
          if (u) {
            Object.assign(o, { mathbackground: u });
          }
          if (c) {
            Object.assign(o, { style: c });
          }
          a = e.create("node", "mstyle", [a], o);
        }
        e.Push(a);
      };
      var s = function (e) {
        return e;
      };
      var l = function (e) {
        return e;
      };
      new o.CommandMap("bbox", { bbox: "BBox" }, t.BboxMethods);
      t.BboxConfiguration = n.Configuration.create("bbox", { handler: { macro: ["bbox"] } });
    },
    79224: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.BoldsymbolConfiguration = t.rewriteBoldTokens = t.createBoldToken = t.BoldsymbolMethods = void 0;
      var o = r(56441);
      var i = n(r(72691));
      var s = r(80469);
      var l = r(80209);
      var u = r(55361);
      var c = {};
      c[s.TexConstant.Variant.NORMAL] = s.TexConstant.Variant.BOLD;
      c[s.TexConstant.Variant.ITALIC] = s.TexConstant.Variant.BOLDITALIC;
      c[s.TexConstant.Variant.FRAKTUR] = s.TexConstant.Variant.BOLDFRAKTUR;
      c[s.TexConstant.Variant.SCRIPT] = s.TexConstant.Variant.BOLDSCRIPT;
      c[s.TexConstant.Variant.SANSSERIF] = s.TexConstant.Variant.BOLDSANSSERIF;
      c["-tex-calligraphic"] = "-tex-bold-calligraphic";
      c["-tex-oldstyle"] = "-tex-bold-oldstyle";
      c["-tex-mathit"] = s.TexConstant.Variant.BOLDITALIC;
      t.BoldsymbolMethods = {};
      t.BoldsymbolMethods.Boldsymbol = function (e, t) {
        var r = e.stack.env["boldsymbol"];
        e.stack.env["boldsymbol"] = true;
        var a = e.ParseArg(t);
        e.stack.env["boldsymbol"] = r;
        e.Push(a);
      };
      new l.CommandMap("boldsymbol", { boldsymbol: "Boldsymbol" }, t.BoldsymbolMethods);
      function f(e, t, r, a) {
        var n = u.NodeFactory.createToken(e, t, r, a);
        if (t !== "mtext" && e.configuration.parser.stack.env["boldsymbol"]) {
          i.default.setProperty(n, "fixBold", true);
          e.configuration.addNode("fixBold", n);
        }
        return n;
      }
      t.createBoldToken = f;
      function d(e) {
        var t, r;
        try {
          for (var n = a(e.data.getList("fixBold")), o = n.next(); !o.done; o = n.next()) {
            var l = o.value;
            if (i.default.getProperty(l, "fixBold")) {
              var u = i.default.getAttribute(l, "mathvariant");
              if (u == null) {
                i.default.setAttribute(l, "mathvariant", s.TexConstant.Variant.BOLD);
              } else {
                i.default.setAttribute(l, "mathvariant", c[u] || u);
              }
              i.default.removeProperties(l, "fixBold");
            }
          }
        } catch (f) {
          t = { error: f };
        } finally {
          try {
            if (o && !o.done && (r = n.return)) r.call(n);
          } finally {
            if (t) throw t.error;
          }
        }
      }
      t.rewriteBoldTokens = d;
      t.BoldsymbolConfiguration = o.Configuration.create("boldsymbol", {
        handler: { macro: ["boldsymbol"] },
        nodes: { token: f },
        postprocessors: [d],
      });
    },
    82792: (e, t, r) => {
      var a;
      Object.defineProperty(t, "__esModule", { value: true });
      t.BraketConfiguration = void 0;
      var n = r(56441);
      var o = r(85046);
      r(75755);
      t.BraketConfiguration = n.Configuration.create("braket", {
        handler: { character: ["Braket-characters"], macro: ["Braket-macros"] },
        items: ((a = {}), (a[o.BraketItem.prototype.kind] = o.BraketItem), a),
      });
    },
    85046: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.BraketItem = void 0;
      var o = r(37720);
      var i = r(80747);
      var s = n(r(6980));
      var l = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "braket";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("close")) {
            return [[this.factory.create("mml", this.toMml())], true];
          }
          if (t.isKind("mml")) {
            this.Push(t.toMml());
            if (this.getProperty("single")) {
              return [[this.toMml()], true];
            }
            return o.BaseItem.fail;
          }
          return e.prototype.checkItem.call(this, t);
        };
        t.prototype.toMml = function () {
          var t = e.prototype.toMml.call(this);
          var r = this.getProperty("open");
          var a = this.getProperty("close");
          if (this.getProperty("stretchy")) {
            return s.default.fenced(this.factory.configuration, r, t, a);
          }
          var n = { fence: true, stretchy: false, symmetric: true, texClass: i.TEXCLASS.OPEN };
          var o = this.create("token", "mo", n, r);
          n.texClass = i.TEXCLASS.CLOSE;
          var l = this.create("token", "mo", n, a);
          var u = this.create("node", "mrow", [o, t, l], { open: r, close: a, texClass: i.TEXCLASS.INNER });
          return u;
        };
        return t;
      })(o.BaseItem);
      t.BraketItem = l;
    },
    75755: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(80209);
      var o = a(r(22792));
      new n.CommandMap(
        "Braket-macros",
        {
          bra: ["Macro", "{\\langle {#1} \\vert}", 1],
          ket: ["Macro", "{\\vert {#1} \\rangle}", 1],
          braket: ["Braket", "⟨", "⟩", false, Infinity],
          set: ["Braket", "{", "}", false, 1],
          Bra: ["Macro", "{\\left\\langle {#1} \\right\\vert}", 1],
          Ket: ["Macro", "{\\left\\vert {#1} \\right\\rangle}", 1],
          Braket: ["Braket", "⟨", "⟩", true, Infinity],
          Set: ["Braket", "{", "}", true, 1],
          ketbra: ["Macro", "{\\vert {#1} \\rangle\\langle {#2} \\vert}", 2],
          Ketbra: ["Macro", "{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}", 2],
          "|": "Bar",
        },
        o.default
      );
      new n.MacroMap("Braket-characters", { "|": "Bar" }, o.default);
    },
    22792: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(38364));
      var o = r(80747);
      var i = a(r(98770));
      var s = {};
      s.Macro = n.default.Macro;
      s.Braket = function (e, t, r, a, n, o) {
        var s = e.GetNext();
        if (s === "") {
          throw new i.default("MissingArgFor", "Missing argument for %1", e.currentCS);
        }
        var l = true;
        if (s === "{") {
          e.i++;
          l = false;
        }
        e.Push(e.itemFactory.create("braket").setProperties({ barmax: o, barcount: 0, open: r, close: a, stretchy: n, single: l }));
      };
      s.Bar = function (e, t) {
        var r = t === "|" ? "|" : "∥";
        var a = e.stack.Top();
        if (a.kind !== "braket" || a.getProperty("barcount") >= a.getProperty("barmax")) {
          var n = e.create("token", "mo", { texClass: o.TEXCLASS.ORD, stretchy: false }, r);
          e.Push(n);
          return;
        }
        if (r === "|" && e.GetNext() === "|") {
          e.i++;
          r = "∥";
        }
        var i = a.getProperty("stretchy");
        if (!i) {
          var s = e.create("token", "mo", { stretchy: false, braketbar: true }, r);
          e.Push(s);
          return;
        }
        var l = e.create("node", "TeXAtom", [], { texClass: o.TEXCLASS.CLOSE });
        e.Push(l);
        a.setProperty("barcount", a.getProperty("barcount") + 1);
        l = e.create("token", "mo", { stretchy: true, braketbar: true }, r);
        e.Push(l);
        l = e.create("node", "TeXAtom", [], { texClass: o.TEXCLASS.OPEN });
        e.Push(l);
      };
      t["default"] = s;
    },
    77774: (e, t, r) => {
      var a;
      Object.defineProperty(t, "__esModule", { value: true });
      t.BussproofsConfiguration = void 0;
      var n = r(56441);
      var o = r(13224);
      var i = r(86366);
      r(38529);
      t.BussproofsConfiguration = n.Configuration.create("bussproofs", {
        handler: { macro: ["Bussproofs-macros"], environment: ["Bussproofs-environments"] },
        items: ((a = {}), (a[o.ProofTreeItem.prototype.kind] = o.ProofTreeItem), a),
        preprocessors: [[i.saveDocument, 1]],
        postprocessors: [
          [i.clearDocument, 3],
          [i.makeBsprAttributes, 2],
          [i.balanceRules, 1],
        ],
      });
    },
    13224: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) n(t, e, r);
          o(t, e);
          return t;
        };
      var s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.ProofTreeItem = void 0;
      var l = s(r(98770));
      var u = r(37720);
      var c = s(r(32859));
      var f = i(r(86366));
      var d = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.leftLabel = null;
          t.rigthLabel = null;
          t.innerStack = new c.default(t.factory, {}, true);
          return t;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "proofTree";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (e) {
          if (e.isKind("end") && e.getName() === "prooftree") {
            var t = this.toMml();
            f.setProperty(t, "proof", true);
            return [[this.factory.create("mml", t), e], true];
          }
          if (e.isKind("stop")) {
            throw new l.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
          }
          this.innerStack.Push(e);
          return u.BaseItem.fail;
        };
        t.prototype.toMml = function () {
          var t = e.prototype.toMml.call(this);
          var r = this.innerStack.Top();
          if (r.isKind("start") && !r.Size()) {
            return t;
          }
          this.innerStack.Push(this.factory.create("stop"));
          var a = this.innerStack.Top().toMml();
          return this.create("node", "mrow", [a, t], {});
        };
        return t;
      })(u.BaseItem);
      t.ProofTreeItem = d;
    },
    38529: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(86158));
      var o = a(r(22960));
      var i = r(80209);
      new i.CommandMap(
        "Bussproofs-macros",
        {
          AxiomC: "Axiom",
          UnaryInfC: ["Inference", 1],
          BinaryInfC: ["Inference", 2],
          TrinaryInfC: ["Inference", 3],
          QuaternaryInfC: ["Inference", 4],
          QuinaryInfC: ["Inference", 5],
          RightLabel: ["Label", "right"],
          LeftLabel: ["Label", "left"],
          AXC: "Axiom",
          UIC: ["Inference", 1],
          BIC: ["Inference", 2],
          TIC: ["Inference", 3],
          RL: ["Label", "right"],
          LL: ["Label", "left"],
          noLine: ["SetLine", "none", false],
          singleLine: ["SetLine", "solid", false],
          solidLine: ["SetLine", "solid", false],
          dashedLine: ["SetLine", "dashed", false],
          alwaysNoLine: ["SetLine", "none", true],
          alwaysSingleLine: ["SetLine", "solid", true],
          alwaysSolidLine: ["SetLine", "solid", true],
          alwaysDashedLine: ["SetLine", "dashed", true],
          rootAtTop: ["RootAtTop", true],
          alwaysRootAtTop: ["RootAtTop", true],
          rootAtBottom: ["RootAtTop", false],
          alwaysRootAtBottom: ["RootAtTop", false],
          fCenter: "FCenter",
          Axiom: "AxiomF",
          UnaryInf: ["InferenceF", 1],
          BinaryInf: ["InferenceF", 2],
          TrinaryInf: ["InferenceF", 3],
          QuaternaryInf: ["InferenceF", 4],
          QuinaryInf: ["InferenceF", 5],
        },
        n.default
      );
      new i.EnvironmentMap("Bussproofs-environments", o.default.environment, { prooftree: ["Prooftree", null, false] }, n.default);
    },
    86158: function (e, t, r) {
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) a(t, e, r);
          n(t, e);
          return t;
        };
      var i =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var s =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, o; a < n; a++) {
              if (o || !(a in t)) {
                if (!o) o = Array.prototype.slice.call(t, 0, a);
                o[a] = t[a];
              }
            }
          return e.concat(o || Array.prototype.slice.call(t));
        };
      var l =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var u = l(r(98770));
      var c = l(r(75845));
      var f = l(r(6980));
      var d = o(r(86366));
      var p = {};
      p.Prooftree = function (e, t) {
        e.Push(t);
        var r = e.itemFactory.create("proofTree").setProperties({ name: t.getName(), line: "solid", currentLine: "solid", rootAtTop: false });
        return r;
      };
      p.Axiom = function (e, t) {
        var r = e.stack.Top();
        if (r.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        var a = m(e, e.GetArgument(t));
        d.setProperty(a, "axiom", true);
        r.Push(a);
      };
      var m = function (e, t) {
        var r = f.default.internalMath(e, f.default.trimSpaces(t), 0);
        if (!r[0].childNodes[0].childNodes.length) {
          return e.create("node", "mrow", []);
        }
        var a = e.create("node", "mspace", [], { width: ".5ex" });
        var n = e.create("node", "mspace", [], { width: ".5ex" });
        return e.create("node", "mrow", s(s([a], i(r), false), [n], false));
      };
      p.Inference = function (e, t, r) {
        var a = e.stack.Top();
        if (a.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        if (a.Size() < r) {
          throw new u.default("BadProofTree", "Proof tree badly specified.");
        }
        var n = a.getProperty("rootAtTop");
        var o = r === 1 && !a.Peek()[0].childNodes.length ? 0 : r;
        var i = [];
        do {
          if (i.length) {
            i.unshift(e.create("node", "mtd", [], {}));
          }
          i.unshift(e.create("node", "mtd", [a.Pop()], { rowalign: n ? "top" : "bottom" }));
          r--;
        } while (r > 0);
        var s = e.create("node", "mtr", i, {});
        var l = e.create("node", "mtable", [s], { framespacing: "0 0" });
        var c = m(e, e.GetArgument(t));
        var f = a.getProperty("currentLine");
        if (f !== a.getProperty("line")) {
          a.setProperty("currentLine", a.getProperty("line"));
        }
        var p = h(e, l, [c], a.getProperty("left"), a.getProperty("right"), f, n);
        a.setProperty("left", null);
        a.setProperty("right", null);
        d.setProperty(p, "inference", o);
        e.configuration.addNode("inference", p);
        a.Push(p);
      };
      function h(e, t, r, a, n, o, i) {
        var s = e.create("node", "mtr", [e.create("node", "mtd", [t], {})], {});
        var l = e.create("node", "mtr", [e.create("node", "mtd", r, {})], {});
        var u = e.create("node", "mtable", i ? [l, s] : [s, l], { align: "top 2", rowlines: o, framespacing: "0 0" });
        d.setProperty(u, "inferenceRule", i ? "up" : "down");
        var c, f;
        if (a) {
          c = e.create("node", "mpadded", [a], { height: "+.5em", width: "+.5em", voffset: "-.15em" });
          d.setProperty(c, "prooflabel", "left");
        }
        if (n) {
          f = e.create("node", "mpadded", [n], { height: "+.5em", width: "+.5em", voffset: "-.15em" });
          d.setProperty(f, "prooflabel", "right");
        }
        var p, m;
        if (a && n) {
          p = [c, u, f];
          m = "both";
        } else if (a) {
          p = [c, u];
          m = "left";
        } else if (n) {
          p = [u, f];
          m = "right";
        } else {
          return u;
        }
        u = e.create("node", "mrow", p);
        d.setProperty(u, "labelledRule", m);
        return u;
      }
      p.Label = function (e, t, r) {
        var a = e.stack.Top();
        if (a.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        var n = f.default.internalMath(e, e.GetArgument(t), 0);
        var o = n.length > 1 ? e.create("node", "mrow", n, {}) : n[0];
        a.setProperty(r, o);
      };
      p.SetLine = function (e, t, r, a) {
        var n = e.stack.Top();
        if (n.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        n.setProperty("currentLine", r);
        if (a) {
          n.setProperty("line", r);
        }
      };
      p.RootAtTop = function (e, t, r) {
        var a = e.stack.Top();
        if (a.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        a.setProperty("rootAtTop", r);
      };
      p.AxiomF = function (e, t) {
        var r = e.stack.Top();
        if (r.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        var a = v(e, t);
        d.setProperty(a, "axiom", true);
        r.Push(a);
      };
      function v(e, t) {
        var r = e.GetNext();
        if (r !== "$") {
          throw new u.default("IllegalUseOfCommand", "Use of %1 does not match it's definition.", t);
        }
        e.i++;
        var a = e.GetUpTo(t, "$");
        if (a.indexOf("\\fCenter") === -1) {
          throw new u.default("IllegalUseOfCommand", "Missing \\fCenter in %1.", t);
        }
        var n = i(a.split("\\fCenter"), 2),
          o = n[0],
          s = n[1];
        var l = new c.default(o, e.stack.env, e.configuration).mml();
        var f = new c.default(s, e.stack.env, e.configuration).mml();
        var p = new c.default("\\fCenter", e.stack.env, e.configuration).mml();
        var m = e.create("node", "mtd", [l], {});
        var h = e.create("node", "mtd", [p], {});
        var v = e.create("node", "mtd", [f], {});
        var g = e.create("node", "mtr", [m, h, v], {});
        var y = e.create("node", "mtable", [g], { columnspacing: ".5ex", columnalign: "center 2" });
        d.setProperty(y, "sequent", true);
        e.configuration.addNode("sequent", g);
        return y;
      }
      p.FCenter = function (e, t) {};
      p.InferenceF = function (e, t, r) {
        var a = e.stack.Top();
        if (a.kind !== "proofTree") {
          throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
        }
        if (a.Size() < r) {
          throw new u.default("BadProofTree", "Proof tree badly specified.");
        }
        var n = a.getProperty("rootAtTop");
        var o = r === 1 && !a.Peek()[0].childNodes.length ? 0 : r;
        var i = [];
        do {
          if (i.length) {
            i.unshift(e.create("node", "mtd", [], {}));
          }
          i.unshift(e.create("node", "mtd", [a.Pop()], { rowalign: n ? "top" : "bottom" }));
          r--;
        } while (r > 0);
        var s = e.create("node", "mtr", i, {});
        var l = e.create("node", "mtable", [s], { framespacing: "0 0" });
        var c = v(e, t);
        var f = a.getProperty("currentLine");
        if (f !== a.getProperty("line")) {
          a.setProperty("currentLine", a.getProperty("line"));
        }
        var p = h(e, l, [c], a.getProperty("left"), a.getProperty("right"), f, n);
        a.setProperty("left", null);
        a.setProperty("right", null);
        d.setProperty(p, "inference", o);
        e.configuration.addNode("inference", p);
        a.Push(p);
      };
      t["default"] = p;
    },
    86366: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var i;
      Object.defineProperty(t, "__esModule", { value: true });
      t.clearDocument = t.saveDocument = t.makeBsprAttributes = t.removeProperty = t.getProperty = t.setProperty = t.balanceRules = void 0;
      var s = o(r(72691));
      var l = o(r(6980));
      var u = null;
      var c = null;
      var f = function (e) {
        c.root = e;
        var t = u.outputJax.getBBox(c, u).w;
        return t;
      };
      var d = function (e) {
        var t = 0;
        while (e && !s.default.isType(e, "mtable")) {
          if (s.default.isType(e, "text")) {
            return null;
          }
          if (s.default.isType(e, "mrow")) {
            e = e.childNodes[0];
            t = 0;
            continue;
          }
          e = e.parent.childNodes[t];
          t++;
        }
        return e;
      };
      var p = function (e, t) {
        return e.childNodes[t === "up" ? 1 : 0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
      };
      var m = function (e, t) {
        return e.childNodes[t].childNodes[0].childNodes[0];
      };
      var h = function (e) {
        return m(e, 0);
      };
      var v = function (e) {
        return m(e, e.childNodes.length - 1);
      };
      var g = function (e, t) {
        return e.childNodes[t === "up" ? 0 : 1].childNodes[0].childNodes[0].childNodes[0];
      };
      var y = function (e) {
        while (e && !s.default.isType(e, "mtd")) {
          e = e.parent;
        }
        return e;
      };
      var b = function (e) {
        return e.parent.childNodes[e.parent.childNodes.indexOf(e) + 1];
      };
      var x = function (e) {
        return e.parent.childNodes[e.parent.childNodes.indexOf(e) - 1];
      };
      var _ = function (e) {
        while (e && (0, t.getProperty)(e, "inference") == null) {
          e = e.parent;
        }
        return e;
      };
      var w = function (e, t, r) {
        if (r === void 0) {
          r = false;
        }
        var a = 0;
        if (e === t) {
          return a;
        }
        if (e !== t.parent) {
          var n = e.childNodes;
          var o = r ? n.length - 1 : 0;
          if (s.default.isType(n[o], "mspace")) {
            a += f(n[o]);
          }
          e = t.parent;
        }
        if (e === t) {
          return a;
        }
        var i = e.childNodes;
        var l = r ? i.length - 1 : 0;
        if (i[l] !== t) {
          a += f(i[l]);
        }
        return a;
      };
      var M = function (e, r) {
        if (r === void 0) {
          r = false;
        }
        var a = d(e);
        var n = g(a, (0, t.getProperty)(a, "inferenceRule"));
        var o = w(e, a, r);
        var i = f(a);
        var s = f(n);
        return o + (i - s) / 2;
      };
      var A = function (e, r, a, n) {
        if (n === void 0) {
          n = false;
        }
        if ((0, t.getProperty)(r, "inferenceRule") || (0, t.getProperty)(r, "labelledRule")) {
          var o = e.nodeFactory.create("node", "mrow");
          r.parent.replaceChild(o, r);
          o.setChildren([r]);
          C(r, o);
          r = o;
        }
        var i = n ? r.childNodes.length - 1 : 0;
        var u = r.childNodes[i];
        if (s.default.isType(u, "mspace")) {
          s.default.setAttribute(u, "width", l.default.Em(l.default.dimen2em(s.default.getAttribute(u, "width")) + a));
          return;
        }
        u = e.nodeFactory.create("node", "mspace", [], { width: l.default.Em(a) });
        if (n) {
          r.appendChild(u);
          return;
        }
        u.parent = r;
        r.childNodes.unshift(u);
      };
      var C = function (e, r) {
        var a = ["inference", "proof", "maxAdjust", "labelledRule"];
        a.forEach(function (a) {
          var n = (0, t.getProperty)(e, a);
          if (n != null) {
            (0, t.setProperty)(r, a, n);
            (0, t.removeProperty)(e, a);
          }
        });
      };
      var P = function (e) {
        var r = e.nodeLists["sequent"];
        if (!r) {
          return;
        }
        for (var a = r.length - 1, n = void 0; (n = r[a]); a--) {
          if ((0, t.getProperty)(n, "sequentProcessed")) {
            (0, t.removeProperty)(n, "sequentProcessed");
            continue;
          }
          var o = [];
          var i = _(n);
          if ((0, t.getProperty)(i, "inference") !== 1) {
            continue;
          }
          o.push(n);
          while ((0, t.getProperty)(i, "inference") === 1) {
            i = d(i);
            var s = h(p(i, (0, t.getProperty)(i, "inferenceRule")));
            var l = (0, t.getProperty)(s, "inferenceRule") ? g(s, (0, t.getProperty)(s, "inferenceRule")) : s;
            if ((0, t.getProperty)(l, "sequent")) {
              n = l.childNodes[0];
              o.push(n);
              (0, t.setProperty)(n, "sequentProcessed", true);
            }
            i = s;
          }
          k(e, o);
        }
      };
      var S = function (e, r, a, n, o) {
        var i = e.nodeFactory.create("node", "mspace", [], { width: l.default.Em(o) });
        if (n === "left") {
          var s = r.childNodes[a].childNodes[0];
          i.parent = s;
          s.childNodes.unshift(i);
        } else {
          r.childNodes[a].appendChild(i);
        }
        (0, t.setProperty)(r.parent, "sequentAdjust_" + n, o);
      };
      var k = function (e, r) {
        var n = r.pop();
        while (r.length) {
          var o = r.pop();
          var i = a(O(n, o), 2),
            s = i[0],
            l = i[1];
          if ((0, t.getProperty)(n.parent, "axiom")) {
            S(e, s < 0 ? n : o, 0, "left", Math.abs(s));
            S(e, l < 0 ? n : o, 2, "right", Math.abs(l));
          }
          n = o;
        }
      };
      var O = function (e, t) {
        var r = f(e.childNodes[2]);
        var a = f(t.childNodes[2]);
        var n = f(e.childNodes[0]);
        var o = f(t.childNodes[0]);
        var i = n - o;
        var s = r - a;
        return [i, s];
      };
      var q = function (e) {
        var r, a;
        c = new e.document.options.MathItem("", null, e.math.display);
        var o = e.data;
        P(o);
        var i = o.nodeLists["inference"] || [];
        try {
          for (var s = n(i), l = s.next(); !l.done; l = s.next()) {
            var u = l.value;
            var f = (0, t.getProperty)(u, "proof");
            var m = d(u);
            var g = p(m, (0, t.getProperty)(m, "inferenceRule"));
            var x = h(g);
            if ((0, t.getProperty)(x, "inference")) {
              var C = M(x);
              if (C) {
                A(o, x, -C);
                var S = w(u, m, false);
                A(o, u, C - S);
              }
            }
            var k = v(g);
            if ((0, t.getProperty)(k, "inference") == null) {
              continue;
            }
            var O = M(k, true);
            A(o, k, -O, true);
            var q = w(u, m, true);
            var T = (0, t.getProperty)(u, "maxAdjust");
            if (T != null) {
              O = Math.max(O, T);
            }
            var E = void 0;
            if (f || !(E = y(u))) {
              A(o, (0, t.getProperty)(u, "proof") ? u : u.parent, O - q, true);
              continue;
            }
            var I = b(E);
            if (I) {
              var D = o.nodeFactory.create("node", "mspace", [], { width: O - q + "em" });
              I.appendChild(D);
              u.removeProperty("maxAdjust");
              continue;
            }
            var N = _(E);
            if (!N) {
              continue;
            }
            O = (0, t.getProperty)(N, "maxAdjust") ? Math.max((0, t.getProperty)(N, "maxAdjust"), O) : O;
            (0, t.setProperty)(N, "maxAdjust", O);
          }
        } catch (G) {
          r = { error: G };
        } finally {
          try {
            if (l && !l.done && (a = s.return)) a.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
      };
      t.balanceRules = q;
      var T = "bspr_";
      var E = ((i = {}), (i[T + "maxAdjust"] = true), i);
      var I = function (e, t, r) {
        s.default.setProperty(e, T + t, r);
      };
      t.setProperty = I;
      var D = function (e, t) {
        return s.default.getProperty(e, T + t);
      };
      t.getProperty = D;
      var N = function (e, t) {
        e.removeProperty(T + t);
      };
      t.removeProperty = N;
      var G = function (e) {
        e.data.root.walkTree(function (e, t) {
          var r = [];
          e.getPropertyNames().forEach(function (t) {
            if (!E[t] && t.match(RegExp("^" + T))) {
              r.push(t + ":" + e.getProperty(t));
            }
          });
          if (r.length) {
            s.default.setAttribute(e, "semantics", r.join(";"));
          }
        });
      };
      t.makeBsprAttributes = G;
      var B = function (e) {
        u = e.document;
        if (!("getBBox" in u.outputJax)) {
          throw Error("The bussproofs extension requires an output jax with a getBBox() method");
        }
      };
      t.saveDocument = B;
      var F = function (e) {
        u = null;
      };
      t.clearDocument = F;
    },
    2362: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.CancelConfiguration = t.CancelMethods = void 0;
      var n = r(56441);
      var o = r(80469);
      var i = r(80209);
      var s = a(r(6980));
      var l = r(48128);
      t.CancelMethods = {};
      t.CancelMethods.Cancel = function (e, t, r) {
        var a = e.GetBrackets(t, "");
        var n = e.ParseArg(t);
        var o = s.default.keyvalOptions(a, l.ENCLOSE_OPTIONS);
        o["notation"] = r;
        e.Push(e.create("node", "menclose", [n], o));
      };
      t.CancelMethods.CancelTo = function (e, t) {
        var r = e.GetBrackets(t, "");
        var a = e.ParseArg(t);
        var n = e.ParseArg(t);
        var i = s.default.keyvalOptions(r, l.ENCLOSE_OPTIONS);
        i["notation"] = [o.TexConstant.Notation.UPDIAGONALSTRIKE, o.TexConstant.Notation.UPDIAGONALARROW, o.TexConstant.Notation.NORTHEASTARROW].join(
          " "
        );
        a = e.create("node", "mpadded", [a], { depth: "-.1em", height: "+.1em", voffset: ".1em" });
        e.Push(e.create("node", "msup", [e.create("node", "menclose", [n], i), a]));
      };
      new i.CommandMap(
        "cancel",
        {
          cancel: ["Cancel", o.TexConstant.Notation.UPDIAGONALSTRIKE],
          bcancel: ["Cancel", o.TexConstant.Notation.DOWNDIAGONALSTRIKE],
          xcancel: ["Cancel", o.TexConstant.Notation.UPDIAGONALSTRIKE + " " + o.TexConstant.Notation.DOWNDIAGONALSTRIKE],
          cancelto: "CancelTo",
        },
        t.CancelMethods
      );
      t.CancelConfiguration = n.Configuration.create("cancel", { handler: { macro: ["cancel"] } });
    },
    12796: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var o;
      Object.defineProperty(t, "__esModule", { value: true });
      t.CasesConfiguration = t.CasesMethods = t.CasesTags = t.CasesBeginItem = void 0;
      var i = r(56441);
      var s = r(80209);
      var l = n(r(6980));
      var u = n(r(38364));
      var c = n(r(98770));
      var f = r(94650);
      var d = r(48600);
      var p = r(99118);
      var m = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "cases-begin";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("end") && t.getName() === this.getName()) {
            if (this.getProperty("end")) {
              this.setProperty("end", false);
              return [[], true];
            }
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(f.BeginItem);
      t.CasesBeginItem = m;
      var h = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.subcounter = 0;
          return t;
        }
        t.prototype.start = function (t, r, a) {
          this.subcounter = 0;
          e.prototype.start.call(this, t, r, a);
        };
        t.prototype.autoTag = function () {
          if (this.currentTag.tag != null) return;
          if (this.currentTag.env === "subnumcases") {
            if (this.subcounter === 0) this.counter++;
            this.subcounter++;
            this.tag(this.formatNumber(this.counter, this.subcounter), false);
          } else {
            if (this.subcounter === 0 || this.currentTag.env !== "numcases-left") this.counter++;
            this.tag(this.formatNumber(this.counter), false);
          }
        };
        t.prototype.formatNumber = function (e, t) {
          if (t === void 0) {
            t = null;
          }
          return e.toString() + (t === null ? "" : String.fromCharCode(96 + t));
        };
        return t;
      })(d.AmsTags);
      t.CasesTags = h;
      t.CasesMethods = {
        NumCases: function (e, t) {
          if (e.stack.env.closing === t.getName()) {
            delete e.stack.env.closing;
            e.Push(e.itemFactory.create("end").setProperty("name", t.getName()));
            var r = e.stack.Top();
            var a = r.Last;
            var n = l.default.copyNode(a, e);
            var o = r.getProperty("left");
            p.EmpheqUtil.left(a, n, o + "\\empheqlbrace\\,", e, "numcases-left");
            e.Push(e.itemFactory.create("end").setProperty("name", t.getName()));
            return null;
          } else {
            var o = e.GetArgument("\\begin{" + t.getName() + "}");
            t.setProperty("left", o);
            var i = u.default.EqnArray(e, t, true, true, "ll");
            i.arraydef.displaystyle = false;
            i.arraydef.rowspacing = ".2em";
            i.setProperty("numCases", true);
            e.Push(t);
            return i;
          }
        },
        Entry: function (e, t) {
          if (!e.stack.Top().getProperty("numCases")) {
            return u.default.Entry(e, t);
          }
          e.Push(e.itemFactory.create("cell").setProperties({ isEntry: true, name: t }));
          var r = e.string;
          var a = 0,
            n = e.i,
            o = r.length;
          while (n < o) {
            var i = r.charAt(n);
            if (i === "{") {
              a++;
              n++;
            } else if (i === "}") {
              if (a === 0) {
                break;
              } else {
                a--;
                n++;
              }
            } else if (i === "&" && a === 0) {
              throw new c.default("ExtraCasesAlignTab", "Extra alignment tab in text for numcase environment");
            } else if (i === "\\" && a === 0) {
              var s = (r.slice(n + 1).match(/^[a-z]+|./i) || [])[0];
              if (s === "\\" || s === "cr" || s === "end" || s === "label") {
                break;
              } else {
                n += s.length;
              }
            } else {
              n++;
            }
          }
          var f = r.substr(e.i, n - e.i).replace(/^\s*/, "");
          e.PushAll(l.default.internalMath(e, f, 0));
          e.i = n;
        },
      };
      new s.EnvironmentMap(
        "cases-env",
        p.EmpheqUtil.environment,
        { numcases: ["NumCases", "cases"], subnumcases: ["NumCases", "cases"] },
        t.CasesMethods
      );
      new s.MacroMap("cases-macros", { "&": "Entry" }, t.CasesMethods);
      t.CasesConfiguration = i.Configuration.create("cases", {
        handler: { environment: ["cases-env"], character: ["cases-macros"] },
        items: ((o = {}), (o[m.prototype.kind] = m), o),
        tags: { cases: h },
      });
    },
    50228: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.CenternotConfiguration = t.filterCenterOver = void 0;
      var o = r(56441);
      var i = n(r(75845));
      var s = n(r(72691));
      var l = r(80209);
      var u = n(r(38364));
      new l.CommandMap(
        "centernot",
        { centerOver: "CenterOver", centernot: ["Macro", "\\centerOver{#1}{{⧸}}", 1] },
        {
          CenterOver: function (e, t) {
            var r = "{" + e.GetArgument(t) + "}";
            var a = e.ParseArg(t);
            var n = new i.default(r, e.stack.env, e.configuration).mml();
            var o = e.create("node", "TeXAtom", [
              new i.default(r, e.stack.env, e.configuration).mml(),
              e.create("node", "mpadded", [e.create("node", "mpadded", [a], { width: 0, lspace: "-.5width" }), e.create("node", "mphantom", [n])], {
                width: 0,
                lspace: "-.5width",
              }),
            ]);
            e.configuration.addNode("centerOver", n);
            e.Push(o);
          },
          Macro: u.default.Macro,
        }
      );
      function c(e) {
        var t, r;
        var n = e.data;
        try {
          for (var o = a(n.getList("centerOver")), i = o.next(); !i.done; i = o.next()) {
            var l = i.value;
            var u = s.default.getTexClass(l.childNodes[0].childNodes[0]);
            if (u !== null) {
              s.default.setProperties(l.parent.parent.parent.parent.parent.parent, { texClass: u });
            }
          }
        } catch (c) {
          t = { error: c };
        } finally {
          try {
            if (i && !i.done && (r = o.return)) r.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
      }
      t.filterCenterOver = c;
      t.CenternotConfiguration = o.Configuration.create("centernot", { handler: { macro: ["centernot"] }, postprocessors: [c] });
    },
    79712: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.ColorConfiguration = void 0;
      var a = r(80209);
      var n = r(56441);
      var o = r(8080);
      var i = r(21860);
      new a.CommandMap(
        "color",
        { color: "Color", textcolor: "TextColor", definecolor: "DefineColor", colorbox: "ColorBox", fcolorbox: "FColorBox" },
        o.ColorMethods
      );
      var s = function (e, t) {
        t.parseOptions.packageData.set("color", { model: new i.ColorModel() });
      };
      t.ColorConfiguration = n.Configuration.create("color", {
        handler: { macro: ["color"] },
        options: { color: { padding: "5px", borderWidth: "2px" } },
        config: s,
      });
    },
    54187: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.COLORS = void 0;
      t.COLORS = new Map([
        ["Apricot", "#FBB982"],
        ["Aquamarine", "#00B5BE"],
        ["Bittersweet", "#C04F17"],
        ["Black", "#221E1F"],
        ["Blue", "#2D2F92"],
        ["BlueGreen", "#00B3B8"],
        ["BlueViolet", "#473992"],
        ["BrickRed", "#B6321C"],
        ["Brown", "#792500"],
        ["BurntOrange", "#F7921D"],
        ["CadetBlue", "#74729A"],
        ["CarnationPink", "#F282B4"],
        ["Cerulean", "#00A2E3"],
        ["CornflowerBlue", "#41B0E4"],
        ["Cyan", "#00AEEF"],
        ["Dandelion", "#FDBC42"],
        ["DarkOrchid", "#A4538A"],
        ["Emerald", "#00A99D"],
        ["ForestGreen", "#009B55"],
        ["Fuchsia", "#8C368C"],
        ["Goldenrod", "#FFDF42"],
        ["Gray", "#949698"],
        ["Green", "#00A64F"],
        ["GreenYellow", "#DFE674"],
        ["JungleGreen", "#00A99A"],
        ["Lavender", "#F49EC4"],
        ["LimeGreen", "#8DC73E"],
        ["Magenta", "#EC008C"],
        ["Mahogany", "#A9341F"],
        ["Maroon", "#AF3235"],
        ["Melon", "#F89E7B"],
        ["MidnightBlue", "#006795"],
        ["Mulberry", "#A93C93"],
        ["NavyBlue", "#006EB8"],
        ["OliveGreen", "#3C8031"],
        ["Orange", "#F58137"],
        ["OrangeRed", "#ED135A"],
        ["Orchid", "#AF72B0"],
        ["Peach", "#F7965A"],
        ["Periwinkle", "#7977B8"],
        ["PineGreen", "#008B72"],
        ["Plum", "#92268F"],
        ["ProcessBlue", "#00B0F0"],
        ["Purple", "#99479B"],
        ["RawSienna", "#974006"],
        ["Red", "#ED1B23"],
        ["RedOrange", "#F26035"],
        ["RedViolet", "#A1246B"],
        ["Rhodamine", "#EF559F"],
        ["RoyalBlue", "#0071BC"],
        ["RoyalPurple", "#613F99"],
        ["RubineRed", "#ED017D"],
        ["Salmon", "#F69289"],
        ["SeaGreen", "#3FBC9D"],
        ["Sepia", "#671800"],
        ["SkyBlue", "#46C5DD"],
        ["SpringGreen", "#C6DC67"],
        ["Tan", "#DA9D76"],
        ["TealBlue", "#00AEB3"],
        ["Thistle", "#D883B7"],
        ["Turquoise", "#00B4CE"],
        ["Violet", "#58429B"],
        ["VioletRed", "#EF58A0"],
        ["White", "#FFFFFF"],
        ["WildStrawberry", "#EE2967"],
        ["Yellow", "#FFF200"],
        ["YellowGreen", "#98CC70"],
        ["YellowOrange", "#FAA21A"],
      ]);
    },
    8080: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.ColorMethods = void 0;
      var n = a(r(72691));
      var o = a(r(6980));
      function i(e) {
        var t = "+".concat(e);
        var r = e.replace(/^.*?([a-z]*)$/, "$1");
        var a = 2 * parseFloat(t);
        return { width: "+".concat(a).concat(r), height: t, depth: t, lspace: e };
      }
      t.ColorMethods = {};
      t.ColorMethods.Color = function (e, t) {
        var r = e.GetBrackets(t, "");
        var a = e.GetArgument(t);
        var n = e.configuration.packageData.get("color").model;
        var o = n.getColor(r, a);
        var i = e.itemFactory.create("style").setProperties({ styles: { mathcolor: o } });
        e.stack.env["color"] = o;
        e.Push(i);
      };
      t.ColorMethods.TextColor = function (e, t) {
        var r = e.GetBrackets(t, "");
        var a = e.GetArgument(t);
        var n = e.configuration.packageData.get("color").model;
        var o = n.getColor(r, a);
        var i = e.stack.env["color"];
        e.stack.env["color"] = o;
        var s = e.ParseArg(t);
        if (i) {
          e.stack.env["color"] = i;
        } else {
          delete e.stack.env["color"];
        }
        var l = e.create("node", "mstyle", [s], { mathcolor: o });
        e.Push(l);
      };
      t.ColorMethods.DefineColor = function (e, t) {
        var r = e.GetArgument(t);
        var a = e.GetArgument(t);
        var n = e.GetArgument(t);
        var o = e.configuration.packageData.get("color").model;
        o.defineColor(a, r, n);
      };
      t.ColorMethods.ColorBox = function (e, t) {
        var r = e.GetArgument(t);
        var a = o.default.internalMath(e, e.GetArgument(t));
        var s = e.configuration.packageData.get("color").model;
        var l = e.create("node", "mpadded", a, { mathbackground: s.getColor("named", r) });
        n.default.setProperties(l, i(e.options.color.padding));
        e.Push(l);
      };
      t.ColorMethods.FColorBox = function (e, t) {
        var r = e.GetArgument(t);
        var a = e.GetArgument(t);
        var s = o.default.internalMath(e, e.GetArgument(t));
        var l = e.options.color;
        var u = e.configuration.packageData.get("color").model;
        var c = e.create("node", "mpadded", s, {
          mathbackground: u.getColor("named", a),
          style: "border: ".concat(l.borderWidth, " solid ").concat(u.getColor("named", r)),
        });
        n.default.setProperties(c, i(l.padding));
        e.Push(c);
      };
    },
    21860: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.ColorModel = void 0;
      var o = n(r(98770));
      var i = r(54187);
      var s = new Map();
      var l = (function () {
        function e() {
          this.userColors = new Map();
        }
        e.prototype.normalizeColor = function (e, t) {
          if (!e || e === "named") {
            return t;
          }
          if (s.has(e)) {
            var r = s.get(e);
            return r(t);
          }
          throw new o.default("UndefinedColorModel", "Color model '%1' not defined", e);
        };
        e.prototype.getColor = function (e, t) {
          if (!e || e === "named") {
            return this.getColorByName(t);
          }
          return this.normalizeColor(e, t);
        };
        e.prototype.getColorByName = function (e) {
          if (this.userColors.has(e)) {
            return this.userColors.get(e);
          }
          if (i.COLORS.has(e)) {
            return i.COLORS.get(e);
          }
          return e;
        };
        e.prototype.defineColor = function (e, t, r) {
          var a = this.normalizeColor(e, r);
          this.userColors.set(t, a);
        };
        return e;
      })();
      t.ColorModel = l;
      s.set("rgb", function (e) {
        var t, r;
        var n = e.trim().split(/\s*,\s*/);
        var i = "#";
        if (n.length !== 3) {
          throw new o.default("ModelArg1", "Color values for the %1 model require 3 numbers", "rgb");
        }
        try {
          for (var s = a(n), l = s.next(); !l.done; l = s.next()) {
            var u = l.value;
            if (!u.match(/^(\d+(\.\d*)?|\.\d+)$/)) {
              throw new o.default("InvalidDecimalNumber", "Invalid decimal number");
            }
            var c = parseFloat(u);
            if (c < 0 || c > 1) {
              throw new o.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "rgb", "0", "1");
            }
            var f = Math.floor(c * 255).toString(16);
            if (f.length < 2) {
              f = "0" + f;
            }
            i += f;
          }
        } catch (d) {
          t = { error: d };
        } finally {
          try {
            if (l && !l.done && (r = s.return)) r.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        return i;
      });
      s.set("RGB", function (e) {
        var t, r;
        var n = e.trim().split(/\s*,\s*/);
        var i = "#";
        if (n.length !== 3) {
          throw new o.default("ModelArg1", "Color values for the %1 model require 3 numbers", "RGB");
        }
        try {
          for (var s = a(n), l = s.next(); !l.done; l = s.next()) {
            var u = l.value;
            if (!u.match(/^\d+$/)) {
              throw new o.default("InvalidNumber", "Invalid number");
            }
            var c = parseInt(u);
            if (c > 255) {
              throw new o.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "RGB", "0", "255");
            }
            var f = c.toString(16);
            if (f.length < 2) {
              f = "0" + f;
            }
            i += f;
          }
        } catch (d) {
          t = { error: d };
        } finally {
          try {
            if (l && !l.done && (r = s.return)) r.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        return i;
      });
      s.set("gray", function (e) {
        if (!e.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)) {
          throw new o.default("InvalidDecimalNumber", "Invalid decimal number");
        }
        var t = parseFloat(e);
        if (t < 0 || t > 1) {
          throw new o.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "gray", "0", "1");
        }
        var r = Math.floor(t * 255).toString(16);
        if (r.length < 2) {
          r = "0" + r;
        }
        return "#".concat(r).concat(r).concat(r);
      });
    },
    90272: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.ColortblConfiguration = t.ColorArrayItem = void 0;
      var o = r(94650);
      var i = r(56441);
      var s = r(80209);
      var l = n(r(98770));
      var u = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.color = { cell: "", row: "", col: [] };
          t.hasColor = false;
          return t;
        }
        t.prototype.EndEntry = function () {
          e.prototype.EndEntry.call(this);
          var t = this.row[this.row.length - 1];
          var r = this.color.cell || this.color.row || this.color.col[this.row.length - 1];
          if (r) {
            t.attributes.set("mathbackground", r);
            this.color.cell = "";
            this.hasColor = true;
          }
        };
        t.prototype.EndRow = function () {
          e.prototype.EndRow.call(this);
          this.color.row = "";
        };
        t.prototype.createMml = function () {
          var t = e.prototype.createMml.call(this);
          var r = t.isKind("mrow") ? t.childNodes[1] : t;
          if (r.isKind("menclose")) {
            r = r.childNodes[0].childNodes[0];
          }
          if (this.hasColor && r.attributes.get("frame") === "none") {
            r.attributes.set("frame", "");
          }
          return t;
        };
        return t;
      })(o.ArrayItem);
      t.ColorArrayItem = u;
      new s.CommandMap(
        "colortbl",
        { cellcolor: ["TableColor", "cell"], rowcolor: ["TableColor", "row"], columncolor: ["TableColor", "col"] },
        {
          TableColor: function (e, t, r) {
            var a = e.configuration.packageData.get("color").model;
            var n = e.GetBrackets(t, "");
            var o = a.getColor(n, e.GetArgument(t));
            var i = e.stack.Top();
            if (!(i instanceof u)) {
              throw new l.default("UnsupportedTableColor", "Unsupported use of %1", e.currentCS);
            }
            if (r === "col") {
              if (i.table.length) {
                throw new l.default("ColumnColorNotTop", "%1 must be in the top row", t);
              }
              i.color.col[i.row.length] = o;
              if (e.GetBrackets(t, "")) {
                e.GetBrackets(t, "");
              }
            } else {
              i.color[r] = o;
              if (r === "row" && (i.Size() || i.row.length)) {
                throw new l.default("RowColorNotFirst", "%1 must be at the beginning of a row", t);
              }
            }
          },
        }
      );
      var c = function (e, t) {
        if (!t.parseOptions.packageData.has("color")) {
          i.ConfigurationHandler.get("color").config(e, t);
        }
      };
      t.ColortblConfiguration = i.Configuration.create("colortbl", {
        handler: { macro: ["colortbl"] },
        items: { array: u },
        priority: 10,
        config: [c, 10],
      });
    },
    69600: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.ColorConfiguration = t.ColorV2Methods = void 0;
      var a = r(80209);
      var n = r(56441);
      t.ColorV2Methods = {
        Color: function (e, t) {
          var r = e.GetArgument(t);
          var a = e.stack.env["color"];
          e.stack.env["color"] = r;
          var n = e.ParseArg(t);
          if (a) {
            e.stack.env["color"] = a;
          } else {
            delete e.stack.env["color"];
          }
          var o = e.create("node", "mstyle", [n], { mathcolor: r });
          e.Push(o);
        },
      };
      new a.CommandMap("colorv2", { color: "Color" }, t.ColorV2Methods);
      t.ColorConfiguration = n.Configuration.create("colorv2", { handler: { macro: ["colorv2"] } });
    },
    45320: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var o;
      Object.defineProperty(t, "__esModule", { value: true });
      t.ConfigMacrosConfiguration = void 0;
      var i = r(56441);
      var s = r(34981);
      var l = r(80209);
      var u = n(r(22960));
      var c = r(27151);
      var f = n(r(91200));
      var d = r(73694);
      var p = "configmacros-map";
      var m = "configmacros-env-map";
      function h(e) {
        new l.CommandMap(p, {}, {});
        new l.EnvironmentMap(m, u.default.environment, {}, {});
        e.append(i.Configuration.local({ handler: { macro: [p], environment: [m] }, priority: 3 }));
      }
      function v(e, t) {
        g(t);
        y(t);
      }
      function g(e) {
        var t, r;
        var n = e.parseOptions.handlers.retrieve(p);
        var o = e.parseOptions.options.macros;
        try {
          for (var i = a(Object.keys(o)), s = i.next(); !s.done; s = i.next()) {
            var l = s.value;
            var u = typeof o[l] === "string" ? [o[l]] : o[l];
            var d = Array.isArray(u[2])
              ? new c.Macro(l, f.default.MacroWithTemplate, u.slice(0, 2).concat(u[2]))
              : new c.Macro(l, f.default.Macro, u);
            n.add(l, d);
          }
        } catch (m) {
          t = { error: m };
        } finally {
          try {
            if (s && !s.done && (r = i.return)) r.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
      }
      function y(e) {
        var t, r;
        var n = e.parseOptions.handlers.retrieve(m);
        var o = e.parseOptions.options.environments;
        try {
          for (var i = a(Object.keys(o)), s = i.next(); !s.done; s = i.next()) {
            var l = s.value;
            n.add(l, new c.Macro(l, f.default.BeginEnv, [true].concat(o[l])));
          }
        } catch (u) {
          t = { error: u };
        } finally {
          try {
            if (s && !s.done && (r = i.return)) r.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
      }
      t.ConfigMacrosConfiguration = i.Configuration.create("configmacros", {
        init: h,
        config: v,
        items: ((o = {}), (o[d.BeginEnvItem.prototype.kind] = d.BeginEnvItem), o),
        options: { macros: (0, s.expandable)({}), environments: (0, s.expandable)({}) },
      });
    },
    13726: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var i;
      Object.defineProperty(t, "__esModule", { value: true });
      t.EmpheqConfiguration = t.EmpheqMethods = t.EmpheqBeginItem = void 0;
      var s = r(56441);
      var l = r(80209);
      var u = o(r(6980));
      var c = o(r(98770));
      var f = r(94650);
      var d = r(99118);
      var p = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "empheq-begin";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("end") && t.getName() === this.getName()) {
            this.setProperty("end", false);
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(f.BeginItem);
      t.EmpheqBeginItem = p;
      t.EmpheqMethods = {
        Empheq: function (e, t) {
          if (e.stack.env.closing === t.getName()) {
            delete e.stack.env.closing;
            e.Push(e.itemFactory.create("end").setProperty("name", e.stack.global.empheq));
            e.stack.global.empheq = "";
            var r = e.stack.Top();
            d.EmpheqUtil.adjustTable(r, e);
            e.Push(e.itemFactory.create("end").setProperty("name", "empheq"));
          } else {
            u.default.checkEqnEnv(e);
            delete e.stack.global.eqnenv;
            var a = e.GetBrackets("\\begin{" + t.getName() + "}") || "";
            var o = n((e.GetArgument("\\begin{" + t.getName() + "}") || "").split(/=/), 2),
              i = o[0],
              s = o[1];
            if (!d.EmpheqUtil.checkEnv(i)) {
              throw new c.default("UnknownEnv", 'Unknown environment "%1"', i);
            }
            if (a) {
              t.setProperties(d.EmpheqUtil.splitOptions(a, { left: 1, right: 1 }));
            }
            e.stack.global.empheq = i;
            e.string = "\\begin{" + i + "}" + (s ? "{" + s + "}" : "") + e.string.slice(e.i);
            e.i = 0;
            e.Push(t);
          }
        },
        EmpheqMO: function (e, t, r) {
          e.Push(e.create("token", "mo", {}, r));
        },
        EmpheqDelim: function (e, t) {
          var r = e.GetDelimiter(t);
          e.Push(e.create("token", "mo", { stretchy: true, symmetric: true }, r));
        },
      };
      new l.EnvironmentMap("empheq-env", d.EmpheqUtil.environment, { empheq: ["Empheq", "empheq"] }, t.EmpheqMethods);
      new l.CommandMap(
        "empheq-macros",
        {
          empheqlbrace: ["EmpheqMO", "{"],
          empheqrbrace: ["EmpheqMO", "}"],
          empheqlbrack: ["EmpheqMO", "["],
          empheqrbrack: ["EmpheqMO", "]"],
          empheqlangle: ["EmpheqMO", "⟨"],
          empheqrangle: ["EmpheqMO", "⟩"],
          empheqlparen: ["EmpheqMO", "("],
          empheqrparen: ["EmpheqMO", ")"],
          empheqlvert: ["EmpheqMO", "|"],
          empheqrvert: ["EmpheqMO", "|"],
          empheqlVert: ["EmpheqMO", "‖"],
          empheqrVert: ["EmpheqMO", "‖"],
          empheqlfloor: ["EmpheqMO", "⌊"],
          empheqrfloor: ["EmpheqMO", "⌋"],
          empheqlceil: ["EmpheqMO", "⌈"],
          empheqrceil: ["EmpheqMO", "⌉"],
          empheqbiglbrace: ["EmpheqMO", "{"],
          empheqbigrbrace: ["EmpheqMO", "}"],
          empheqbiglbrack: ["EmpheqMO", "["],
          empheqbigrbrack: ["EmpheqMO", "]"],
          empheqbiglangle: ["EmpheqMO", "⟨"],
          empheqbigrangle: ["EmpheqMO", "⟩"],
          empheqbiglparen: ["EmpheqMO", "("],
          empheqbigrparen: ["EmpheqMO", ")"],
          empheqbiglvert: ["EmpheqMO", "|"],
          empheqbigrvert: ["EmpheqMO", "|"],
          empheqbiglVert: ["EmpheqMO", "‖"],
          empheqbigrVert: ["EmpheqMO", "‖"],
          empheqbiglfloor: ["EmpheqMO", "⌊"],
          empheqbigrfloor: ["EmpheqMO", "⌋"],
          empheqbiglceil: ["EmpheqMO", "⌈"],
          empheqbigrceil: ["EmpheqMO", "⌉"],
          empheql: "EmpheqDelim",
          empheqr: "EmpheqDelim",
          empheqbigl: "EmpheqDelim",
          empheqbigr: "EmpheqDelim",
        },
        t.EmpheqMethods
      );
      t.EmpheqConfiguration = s.Configuration.create("empheq", {
        handler: { macro: ["empheq-macros"], environment: ["empheq-env"] },
        items: ((i = {}), (i[p.prototype.kind] = p), i),
      });
    },
    99118: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, o; a < n; a++) {
              if (o || !(a in t)) {
                if (!o) o = Array.prototype.slice.call(t, 0, a);
                o[a] = t[a];
              }
            }
          return e.concat(o || Array.prototype.slice.call(t));
        };
      var o =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.EmpheqUtil = void 0;
      var s = i(r(6980));
      var l = i(r(75845));
      t.EmpheqUtil = {
        environment: function (e, t, r, o) {
          var i = o[0];
          var s = e.itemFactory.create(i + "-begin").setProperties({ name: t, end: i });
          e.Push(r.apply(void 0, n([e, s], a(o.slice(1)), false)));
        },
        splitOptions: function (e, t) {
          if (t === void 0) {
            t = null;
          }
          return s.default.keyvalOptions(e, t, true);
        },
        columnCount: function (e) {
          var t, r;
          var a = 0;
          try {
            for (var n = o(e.childNodes), i = n.next(); !i.done; i = n.next()) {
              var s = i.value;
              var l = s.childNodes.length - (s.isKind("mlabeledtr") ? 1 : 0);
              if (l > a) a = l;
            }
          } catch (u) {
            t = { error: u };
          } finally {
            try {
              if (i && !i.done && (r = n.return)) r.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
          return a;
        },
        cellBlock: function (e, t, r, a) {
          var n, i;
          var s = r.create("node", "mpadded", [], { height: 0, depth: 0, voffset: "-1height" });
          var u = new l.default(e, r.stack.env, r.configuration);
          var c = u.mml();
          if (a && u.configuration.tags.label) {
            u.configuration.tags.currentTag.env = a;
            u.configuration.tags.getTag(true);
          }
          try {
            for (var f = o(c.isInferred ? c.childNodes : [c]), d = f.next(); !d.done; d = f.next()) {
              var p = d.value;
              s.appendChild(p);
            }
          } catch (m) {
            n = { error: m };
          } finally {
            try {
              if (d && !d.done && (i = f.return)) i.call(f);
            } finally {
              if (n) throw n.error;
            }
          }
          s.appendChild(r.create("node", "mphantom", [r.create("node", "mpadded", [t], { width: 0 })]));
          return s;
        },
        topRowTable: function (e, t) {
          var r = s.default.copyNode(e, t);
          r.setChildren(r.childNodes.slice(0, 1));
          r.attributes.set("align", "baseline 1");
          return e.factory.create("mphantom", {}, [t.create("node", "mpadded", [r], { width: 0 })]);
        },
        rowspanCell: function (e, t, r, a, n) {
          e.appendChild(
            a.create("node", "mpadded", [this.cellBlock(t, s.default.copyNode(r, a), a, n), this.topRowTable(r, a)], {
              height: 0,
              depth: 0,
              voffset: "height",
            })
          );
        },
        left: function (e, t, r, a, n) {
          var i, s;
          if (n === void 0) {
            n = "";
          }
          e.attributes.set("columnalign", "right " + (e.attributes.get("columnalign") || ""));
          e.attributes.set("columnspacing", "0em " + (e.attributes.get("columnspacing") || ""));
          var l;
          try {
            for (var u = o(e.childNodes.slice(0).reverse()), c = u.next(); !c.done; c = u.next()) {
              var f = c.value;
              l = a.create("node", "mtd");
              f.childNodes.unshift(l);
              l.parent = f;
              if (f.isKind("mlabeledtr")) {
                f.childNodes[0] = f.childNodes[1];
                f.childNodes[1] = l;
              }
            }
          } catch (d) {
            i = { error: d };
          } finally {
            try {
              if (c && !c.done && (s = u.return)) s.call(u);
            } finally {
              if (i) throw i.error;
            }
          }
          this.rowspanCell(l, r, t, a, n);
        },
        right: function (e, r, a, n, o) {
          if (o === void 0) {
            o = "";
          }
          if (e.childNodes.length === 0) {
            e.appendChild(n.create("node", "mtr"));
          }
          var i = t.EmpheqUtil.columnCount(e);
          var s = e.childNodes[0];
          while (s.childNodes.length < i) s.appendChild(n.create("node", "mtd"));
          var l = s.appendChild(n.create("node", "mtd"));
          t.EmpheqUtil.rowspanCell(l, a, r, n, o);
          e.attributes.set("columnalign", (e.attributes.get("columnalign") || "").split(/ /).slice(0, i).join(" ") + " left");
          e.attributes.set(
            "columnspacing",
            (e.attributes.get("columnspacing") || "")
              .split(/ /)
              .slice(0, i - 1)
              .join(" ") + " 0em"
          );
        },
        adjustTable: function (e, t) {
          var r = e.getProperty("left");
          var a = e.getProperty("right");
          if (r || a) {
            var n = e.Last;
            var o = s.default.copyNode(n, t);
            if (r) this.left(n, o, r, t);
            if (a) this.right(n, o, a, t);
          }
        },
        allowEnv: { equation: true, align: true, gather: true, flalign: true, alignat: true, multline: true },
        checkEnv: function (e) {
          return this.allowEnv.hasOwnProperty(e.replace(/\*$/, "")) || false;
        },
      };
    },
    48128: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.EncloseConfiguration = t.EncloseMethods = t.ENCLOSE_OPTIONS = void 0;
      var n = r(56441);
      var o = r(80209);
      var i = a(r(6980));
      t.ENCLOSE_OPTIONS = { "data-arrowhead": 1, color: 1, mathcolor: 1, background: 1, mathbackground: 1, "data-padding": 1, "data-thickness": 1 };
      t.EncloseMethods = {};
      t.EncloseMethods.Enclose = function (e, r) {
        var a = e.GetArgument(r).replace(/,/g, " ");
        var n = e.GetBrackets(r, "");
        var o = e.ParseArg(r);
        var s = i.default.keyvalOptions(n, t.ENCLOSE_OPTIONS);
        s.notation = a;
        e.Push(e.create("node", "menclose", [o], s));
      };
      new o.CommandMap("enclose", { enclose: "Enclose" }, t.EncloseMethods);
      t.EncloseConfiguration = n.Configuration.create("enclose", { handler: { macro: ["enclose"] } });
    },
    15472: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.ExtpfeilConfiguration = t.ExtpfeilMethods = void 0;
      var n = r(56441);
      var o = r(80209);
      var i = r(98840);
      var s = a(r(67668));
      var l = r(36912);
      var u = a(r(98770));
      t.ExtpfeilMethods = {};
      t.ExtpfeilMethods.xArrow = i.AmsMethods.xArrow;
      t.ExtpfeilMethods.NewExtArrow = function (e, r) {
        var a = e.GetArgument(r);
        var n = e.GetArgument(r);
        var o = e.GetArgument(r);
        if (!a.match(/^\\([a-z]+|.)$/i)) {
          throw new u.default("NewextarrowArg1", "First argument to %1 must be a control sequence name", r);
        }
        if (!n.match(/^(\d+),(\d+)$/)) {
          throw new u.default("NewextarrowArg2", "Second argument to %1 must be two integers separated by a comma", r);
        }
        if (!o.match(/^(\d+|0x[0-9A-F]+)$/i)) {
          throw new u.default("NewextarrowArg3", "Third argument to %1 must be a unicode character number", r);
        }
        a = a.substr(1);
        var i = n.split(",");
        s.default.addMacro(e, a, t.ExtpfeilMethods.xArrow, [parseInt(o), parseInt(i[0]), parseInt(i[1])]);
      };
      new o.CommandMap(
        "extpfeil",
        {
          xtwoheadrightarrow: ["xArrow", 8608, 12, 16],
          xtwoheadleftarrow: ["xArrow", 8606, 17, 13],
          xmapsto: ["xArrow", 8614, 6, 7],
          xlongequal: ["xArrow", 61, 7, 7],
          xtofrom: ["xArrow", 8644, 12, 12],
          Newextarrow: "NewExtArrow",
        },
        t.ExtpfeilMethods
      );
      var c = function (e) {
        l.NewcommandConfiguration.init(e);
      };
      t.ExtpfeilConfiguration = n.Configuration.create("extpfeil", { handler: { macro: ["extpfeil"] }, init: c });
    },
    95120: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.GensymbConfiguration = void 0;
      var a = r(56441);
      var n = r(80469);
      var o = r(80209);
      function i(e, t) {
        var r = t.attributes || {};
        r.mathvariant = n.TexConstant.Variant.NORMAL;
        r.class = "MathML-Unit";
        var a = e.create("token", "mi", r, t.char);
        e.Push(a);
      }
      new o.CharacterMap("gensymb-symbols", i, { ohm: "Ω", degree: "°", celsius: "℃", perthousand: "‰", micro: "µ" });
      t.GensymbConfiguration = a.Configuration.create("gensymb", { handler: { macro: ["gensymb-symbols"] } });
    },
    98452: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.HtmlConfiguration = void 0;
      var n = r(56441);
      var o = r(80209);
      var i = a(r(2140));
      new o.CommandMap("html_macros", { href: "Href", class: "Class", style: "Style", cssId: "Id" }, i.default);
      t.HtmlConfiguration = n.Configuration.create("html", { handler: { macro: ["html_macros"] } });
    },
    2140: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(72691));
      var o = {};
      o.Href = function (e, t) {
        var r = e.GetArgument(t);
        var a = i(e, t);
        n.default.setAttribute(a, "href", r);
        e.Push(a);
      };
      o.Class = function (e, t) {
        var r = e.GetArgument(t);
        var a = i(e, t);
        var o = n.default.getAttribute(a, "class");
        if (o) {
          r = o + " " + r;
        }
        n.default.setAttribute(a, "class", r);
        e.Push(a);
      };
      o.Style = function (e, t) {
        var r = e.GetArgument(t);
        var a = i(e, t);
        var o = n.default.getAttribute(a, "style");
        if (o) {
          if (r.charAt(r.length - 1) !== ";") {
            r += ";";
          }
          r = o + " " + r;
        }
        n.default.setAttribute(a, "style", r);
        e.Push(a);
      };
      o.Id = function (e, t) {
        var r = e.GetArgument(t);
        var a = i(e, t);
        n.default.setAttribute(a, "id", r);
        e.Push(a);
      };
      var i = function (e, t) {
        var r = e.ParseArg(t);
        if (!n.default.isInferred(r)) {
          return r;
        }
        var a = n.default.getChildren(r);
        if (a.length === 1) {
          return a[0];
        }
        var o = e.create("node", "mrow");
        n.default.copyChildren(r, o);
        n.default.copyAttributes(r, o);
        return o;
      };
      t["default"] = o;
    },
    7932: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var o;
      Object.defineProperty(t, "__esModule", { value: true });
      t.MathtoolsConfiguration = t.fixPrescripts = t.PAIREDDELIMS = void 0;
      var i = r(56441);
      var s = r(80209);
      var l = n(r(72691));
      var u = r(34981);
      r(5615);
      var c = r(90352);
      var f = r(81197);
      var d = r(16226);
      t.PAIREDDELIMS = "mathtools-paired-delims";
      function p(e) {
        new s.CommandMap(t.PAIREDDELIMS, {}, {});
        e.append(i.Configuration.local({ handler: { macro: [t.PAIREDDELIMS] }, priority: -5 }));
      }
      function m(e, t) {
        var r, n;
        var o = t.parseOptions;
        var i = o.options.mathtools.pairedDelimiters;
        try {
          for (var s = a(Object.keys(i)), l = s.next(); !l.done; l = s.next()) {
            var u = l.value;
            c.MathtoolsUtil.addPairedDelims(o, u, i[u]);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            if (l && !l.done && (n = s.return)) n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        (0, f.MathtoolsTagFormat)(e, t);
      }
      function h(e) {
        var t, r, n, o, i, s;
        var u = e.data;
        try {
          for (var c = a(u.getList("mmultiscripts")), f = c.next(); !f.done; f = c.next()) {
            var d = f.value;
            if (!d.getProperty("fixPrescript")) continue;
            var p = l.default.getChildren(d);
            var m = 0;
            try {
              for (var h = ((n = void 0), a([1, 2])), v = h.next(); !v.done; v = h.next()) {
                var g = v.value;
                if (!p[g]) {
                  l.default.setChild(d, g, u.nodeFactory.create("node", "none"));
                  m++;
                }
              }
            } catch (x) {
              n = { error: x };
            } finally {
              try {
                if (v && !v.done && (o = h.return)) o.call(h);
              } finally {
                if (n) throw n.error;
              }
            }
            try {
              for (var y = ((i = void 0), a([4, 5])), b = y.next(); !b.done; b = y.next()) {
                var g = b.value;
                if (l.default.isType(p[g], "mrow") && l.default.getChildren(p[g]).length === 0) {
                  l.default.setChild(d, g, u.nodeFactory.create("node", "none"));
                }
              }
            } catch (_) {
              i = { error: _ };
            } finally {
              try {
                if (b && !b.done && (s = y.return)) s.call(y);
              } finally {
                if (i) throw i.error;
              }
            }
            if (m === 2) {
              p.splice(1, 2);
            }
          }
        } catch (w) {
          t = { error: w };
        } finally {
          try {
            if (f && !f.done && (r = c.return)) r.call(c);
          } finally {
            if (t) throw t.error;
          }
        }
      }
      t.fixPrescripts = h;
      t.MathtoolsConfiguration = i.Configuration.create("mathtools", {
        handler: {
          macro: ["mathtools-macros", "mathtools-delimiters"],
          environment: ["mathtools-environments"],
          delimiter: ["mathtools-delimiters"],
          character: ["mathtools-characters"],
        },
        items: ((o = {}), (o[d.MultlinedItem.prototype.kind] = d.MultlinedItem), o),
        init: p,
        config: m,
        postprocessors: [[h, -6]],
        options: {
          mathtools: {
            multlinegap: "1em",
            "multlined-pos": "c",
            "firstline-afterskip": "",
            "lastline-preskip": "",
            "smallmatrix-align": "c",
            shortvdotsadjustabove: ".2em",
            shortvdotsadjustbelow: ".2em",
            centercolon: false,
            "centercolon-offset": ".04em",
            "thincolon-dx": "-.04em",
            "thincolon-dw": "-.08em",
            "use-unicode": false,
            "prescript-sub-format": "",
            "prescript-sup-format": "",
            "prescript-arg-format": "",
            "allow-mathtoolsset": true,
            pairedDelimiters: (0, u.expandable)({}),
            tagforms: (0, u.expandable)({}),
          },
        },
      });
    },
    16226: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.MultlinedItem = void 0;
      var o = r(92902);
      var i = n(r(72691));
      var s = r(80469);
      var l = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "multlined";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.EndTable = function () {
          if (this.Size() || this.row.length) {
            this.EndEntry();
            this.EndRow();
          }
          if (this.table.length > 1) {
            var t = this.factory.configuration.options.mathtools;
            var r = t.multlinegap;
            var a = t["firstline-afterskip"] || r;
            var n = t["lastline-preskip"] || r;
            var o = i.default.getChildren(this.table[0])[0];
            if (i.default.getAttribute(o, "columnalign") !== s.TexConstant.Align.RIGHT) {
              o.appendChild(this.create("node", "mspace", [], { width: a }));
            }
            var l = i.default.getChildren(this.table[this.table.length - 1])[0];
            if (i.default.getAttribute(l, "columnalign") !== s.TexConstant.Align.LEFT) {
              var u = i.default.getChildren(l)[0];
              u.childNodes.unshift(null);
              var c = this.create("node", "mspace", [], { width: n });
              i.default.setChild(u, 0, c);
            }
          }
          e.prototype.EndTable.call(this);
        };
        return t;
      })(o.MultlineItem);
      t.MultlinedItem = l;
    },
    5615: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(22960));
      var o = r(80209);
      var i = r(80469);
      var s = r(75316);
      new o.CommandMap(
        "mathtools-macros",
        {
          shoveleft: ["HandleShove", i.TexConstant.Align.LEFT],
          shoveright: ["HandleShove", i.TexConstant.Align.RIGHT],
          xleftrightarrow: ["xArrow", 8596, 10, 10],
          xLeftarrow: ["xArrow", 8656, 12, 7],
          xRightarrow: ["xArrow", 8658, 7, 12],
          xLeftrightarrow: ["xArrow", 8660, 12, 12],
          xhookleftarrow: ["xArrow", 8617, 10, 5],
          xhookrightarrow: ["xArrow", 8618, 5, 10],
          xmapsto: ["xArrow", 8614, 10, 10],
          xrightharpoondown: ["xArrow", 8641, 5, 10],
          xleftharpoondown: ["xArrow", 8637, 10, 5],
          xrightleftharpoons: ["xArrow", 8652, 10, 10],
          xrightharpoonup: ["xArrow", 8640, 5, 10],
          xleftharpoonup: ["xArrow", 8636, 10, 5],
          xleftrightharpoons: ["xArrow", 8651, 10, 10],
          mathllap: ["MathLap", "l", false],
          mathrlap: ["MathLap", "r", false],
          mathclap: ["MathLap", "c", false],
          clap: ["MtLap", "c"],
          textllap: ["MtLap", "l"],
          textrlap: ["MtLap", "r"],
          textclap: ["MtLap", "c"],
          cramped: "Cramped",
          crampedllap: ["MathLap", "l", true],
          crampedrlap: ["MathLap", "r", true],
          crampedclap: ["MathLap", "c", true],
          crampedsubstack: ["Macro", "\\begin{crampedsubarray}{c}#1\\end{crampedsubarray}", 1],
          mathmbox: "MathMBox",
          mathmakebox: "MathMakeBox",
          overbracket: "UnderOverBracket",
          underbracket: "UnderOverBracket",
          refeq: "HandleRef",
          MoveEqLeft: ["Macro", "\\hspace{#1em}&\\hspace{-#1em}", 1, "2"],
          Aboxed: "Aboxed",
          ArrowBetweenLines: "ArrowBetweenLines",
          vdotswithin: "VDotsWithin",
          shortvdotswithin: "ShortVDotsWithin",
          MTFlushSpaceAbove: "FlushSpaceAbove",
          MTFlushSpaceBelow: "FlushSpaceBelow",
          DeclarePairedDelimiter: "DeclarePairedDelimiter",
          DeclarePairedDelimiterX: "DeclarePairedDelimiterX",
          DeclarePairedDelimiterXPP: "DeclarePairedDelimiterXPP",
          DeclarePairedDelimiters: "DeclarePairedDelimiter",
          DeclarePairedDelimitersX: "DeclarePairedDelimiterX",
          DeclarePairedDelimitersXPP: "DeclarePairedDelimiterXPP",
          centercolon: ["CenterColon", true, true],
          ordinarycolon: ["CenterColon", false],
          MTThinColon: ["CenterColon", true, true, true],
          coloneqq: ["Relation", ":=", "≔"],
          Coloneqq: ["Relation", "::=", "⩴"],
          coloneq: ["Relation", ":-"],
          Coloneq: ["Relation", "::-"],
          eqqcolon: ["Relation", "=:", "≕"],
          Eqqcolon: ["Relation", "=::"],
          eqcolon: ["Relation", "-:", "∹"],
          Eqcolon: ["Relation", "-::"],
          colonapprox: ["Relation", ":\\approx"],
          Colonapprox: ["Relation", "::\\approx"],
          colonsim: ["Relation", ":\\sim"],
          Colonsim: ["Relation", "::\\sim"],
          dblcolon: ["Relation", "::", "∷"],
          nuparrow: ["NArrow", "↑", ".06em"],
          ndownarrow: ["NArrow", "↓", ".25em"],
          bigtimes: ["Macro", "\\mathop{\\Large\\kern-.1em\\boldsymbol{\\times}\\kern-.1em}"],
          splitfrac: ["SplitFrac", false],
          splitdfrac: ["SplitFrac", true],
          xmathstrut: "XMathStrut",
          prescript: "Prescript",
          newtagform: ["NewTagForm", false],
          renewtagform: ["NewTagForm", true],
          usetagform: "UseTagForm",
          adjustlimits: [
            "MacroWithTemplate",
            "\\mathop{{#1}\\vphantom{{#3}}}_{{#2}\\vphantom{{#4}}}\\mathop{{#3}\\vphantom{{#1}}}_{{#4}\\vphantom{{#2}}}",
            4,
            ,
            "_",
            ,
            "_",
          ],
          mathtoolsset: "SetOptions",
        },
        s.MathtoolsMethods
      );
      new o.EnvironmentMap(
        "mathtools-environments",
        n.default.environment,
        {
          dcases: ["Array", null, "\\{", "", "ll", null, ".2em", "D"],
          rcases: ["Array", null, "", "\\}", "ll", null, ".2em"],
          drcases: ["Array", null, "", "\\}", "ll", null, ".2em", "D"],
          "dcases*": ["Cases", null, "{", "", "D"],
          "rcases*": ["Cases", null, "", "}"],
          "drcases*": ["Cases", null, "", "}", "D"],
          "cases*": ["Cases", null, "{", ""],
          "matrix*": ["MtMatrix", null, null, null],
          "pmatrix*": ["MtMatrix", null, "(", ")"],
          "bmatrix*": ["MtMatrix", null, "[", "]"],
          "Bmatrix*": ["MtMatrix", null, "\\{", "\\}"],
          "vmatrix*": ["MtMatrix", null, "\\vert", "\\vert"],
          "Vmatrix*": ["MtMatrix", null, "\\Vert", "\\Vert"],
          "smallmatrix*": ["MtSmallMatrix", null, null, null],
          psmallmatrix: ["MtSmallMatrix", null, "(", ")", "c"],
          "psmallmatrix*": ["MtSmallMatrix", null, "(", ")"],
          bsmallmatrix: ["MtSmallMatrix", null, "[", "]", "c"],
          "bsmallmatrix*": ["MtSmallMatrix", null, "[", "]"],
          Bsmallmatrix: ["MtSmallMatrix", null, "\\{", "\\}", "c"],
          "Bsmallmatrix*": ["MtSmallMatrix", null, "\\{", "\\}"],
          vsmallmatrix: ["MtSmallMatrix", null, "\\vert", "\\vert", "c"],
          "vsmallmatrix*": ["MtSmallMatrix", null, "\\vert", "\\vert"],
          Vsmallmatrix: ["MtSmallMatrix", null, "\\Vert", "\\Vert", "c"],
          "Vsmallmatrix*": ["MtSmallMatrix", null, "\\Vert", "\\Vert"],
          crampedsubarray: ["Array", null, null, null, null, "0em", "0.1em", "S'", 1],
          multlined: "MtMultlined",
          spreadlines: ["SpreadLines", true],
          lgathered: ["AmsEqnArray", null, null, null, "l", null, ".5em", "D"],
          rgathered: ["AmsEqnArray", null, null, null, "r", null, ".5em", "D"],
        },
        s.MathtoolsMethods
      );
      new o.DelimiterMap("mathtools-delimiters", n.default.delimiter, { "\\lparen": "(", "\\rparen": ")" });
      new o.CommandMap("mathtools-characters", { ":": ["CenterColon", true] }, s.MathtoolsMethods);
    },
    75316: function (e, t, r) {
      var a =
        (this && this.__assign) ||
        function () {
          a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, a = arguments.length; r < a; r++) {
                t = arguments[r];
                for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
              }
              return e;
            };
          return a.apply(this, arguments);
        };
      var n =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.MathtoolsMethods = void 0;
      var s = i(r(6980));
      var l = r(98840);
      var u = i(r(38364));
      var c = i(r(75845));
      var f = i(r(98770));
      var d = i(r(72691));
      var p = r(80747);
      var m = r(86810);
      var h = r(34981);
      var v = i(r(67668));
      var g = i(r(91200));
      var y = r(90352);
      t.MathtoolsMethods = {
        MtMatrix: function (e, r, a, n) {
          var o = e.GetBrackets("\\begin{".concat(r.getName(), "}"), "c");
          return t.MathtoolsMethods.Array(e, r, a, n, o);
        },
        MtSmallMatrix: function (e, r, a, n, o) {
          if (!o) {
            o = e.GetBrackets("\\begin{".concat(r.getName(), "}"), e.options.mathtools["smallmatrix-align"]);
          }
          return t.MathtoolsMethods.Array(e, r, a, n, o, s.default.Em(1 / 3), ".2em", "S", 1);
        },
        MtMultlined: function (e, t) {
          var r;
          var a = "\\begin{".concat(t.getName(), "}");
          var o = e.GetBrackets(a, e.options.mathtools["multlined-pos"] || "c");
          var i = o ? e.GetBrackets(a, "") : "";
          if (o && !o.match(/^[cbt]$/)) {
            (r = n([o, i], 2)), (i = r[0]), (o = r[1]);
          }
          e.Push(t);
          var l = e.itemFactory.create("multlined", e, t);
          l.arraydef = { displaystyle: true, rowspacing: ".5em", width: i || "auto", columnwidth: "100%" };
          return s.default.setArrayAlign(l, o || "c");
        },
        HandleShove: function (e, t, r) {
          var a = e.stack.Top();
          if (a.kind !== "multline" && a.kind !== "multlined") {
            throw new f.default("CommandInMultlined", "%1 can only appear within the multline or multlined environments", t);
          }
          if (a.Size()) {
            throw new f.default("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", t);
          }
          a.setProperty("shove", r);
          var n = e.GetBrackets(t);
          var o = e.ParseArg(t);
          if (n) {
            var i = e.create("node", "mrow", []);
            var s = e.create("node", "mspace", [], { width: n });
            if (r === "left") {
              i.appendChild(s);
              i.appendChild(o);
            } else {
              i.appendChild(o);
              i.appendChild(s);
            }
            o = i;
          }
          e.Push(o);
        },
        SpreadLines: function (e, t) {
          var r, a;
          if (e.stack.env.closing === t.getName()) {
            delete e.stack.env.closing;
            var n = e.stack.Pop();
            var i = n.toMml();
            var s = n.getProperty("spread");
            if (i.isInferred) {
              try {
                for (var l = o(d.default.getChildren(i)), u = l.next(); !u.done; u = l.next()) {
                  var c = u.value;
                  y.MathtoolsUtil.spreadLines(c, s);
                }
              } catch (f) {
                r = { error: f };
              } finally {
                try {
                  if (u && !u.done && (a = l.return)) a.call(l);
                } finally {
                  if (r) throw r.error;
                }
              }
            } else {
              y.MathtoolsUtil.spreadLines(i, s);
            }
            e.Push(i);
          } else {
            var s = e.GetDimen("\\begin{".concat(t.getName(), "}"));
            t.setProperty("spread", s);
            e.Push(t);
          }
        },
        Cases: function (e, t, r, a, n) {
          var o = e.itemFactory.create("array").setProperty("casesEnv", t.getName());
          o.arraydef = { rowspacing: ".2em", columnspacing: "1em", columnalign: "left" };
          if (n === "D") {
            o.arraydef.displaystyle = true;
          }
          o.setProperties({ open: r, close: a });
          e.Push(t);
          return o;
        },
        MathLap: function (e, t, r, n) {
          var o = e.GetBrackets(t, "").trim();
          var i = e.create(
            "node",
            "mstyle",
            [e.create("node", "mpadded", [e.ParseArg(t)], a({ width: 0 }, r === "r" ? {} : { lspace: r === "l" ? "-1width" : "-.5width" }))],
            { "data-cramped": n }
          );
          y.MathtoolsUtil.setDisplayLevel(i, o);
          e.Push(e.create("node", "TeXAtom", [i]));
        },
        Cramped: function (e, t) {
          var r = e.GetBrackets(t, "").trim();
          var a = e.ParseArg(t);
          var n = e.create("node", "mstyle", [a], { "data-cramped": true });
          y.MathtoolsUtil.setDisplayLevel(n, r);
          e.Push(n);
        },
        MtLap: function (e, t, r) {
          var a = s.default.internalMath(e, e.GetArgument(t), 0);
          var n = e.create("node", "mpadded", a, { width: 0 });
          if (r !== "r") {
            d.default.setAttribute(n, "lspace", r === "l" ? "-1width" : "-.5width");
          }
          e.Push(n);
        },
        MathMakeBox: function (e, t) {
          var r = e.GetBrackets(t);
          var a = e.GetBrackets(t, "c");
          var n = e.create("node", "mpadded", [e.ParseArg(t)]);
          if (r) {
            d.default.setAttribute(n, "width", r);
          }
          var o = (0, h.lookup)(a, { c: "center", r: "right" }, "");
          if (o) {
            d.default.setAttribute(n, "data-align", o);
          }
          e.Push(n);
        },
        MathMBox: function (e, t) {
          e.Push(e.create("node", "mrow", [e.ParseArg(t)]));
        },
        UnderOverBracket: function (e, t) {
          var r = (0, m.length2em)(e.GetBrackets(t, ".1em"), 0.1);
          var a = e.GetBrackets(t, ".2em");
          var o = e.GetArgument(t);
          var i = n(t.charAt(1) === "o" ? ["over", "accent", "bottom"] : ["under", "accentunder", "top"], 3),
            l = i[0],
            u = i[1],
            f = i[2];
          var p = (0, m.em)(r);
          var h = new c.default(o, e.stack.env, e.configuration).mml();
          var v = new c.default(o, e.stack.env, e.configuration).mml();
          var g = e.create("node", "mpadded", [e.create("node", "mphantom", [v])], {
            style: "border: ".concat(p, " solid; border-").concat(f, ": none"),
            height: a,
            depth: 0,
          });
          var y = s.default.underOver(e, h, g, l, true);
          var b = d.default.getChildAt(d.default.getChildAt(y, 0), 0);
          d.default.setAttribute(b, u, true);
          e.Push(y);
        },
        Aboxed: function (e, t) {
          var r = y.MathtoolsUtil.checkAlignment(e, t);
          if (r.row.length % 2 === 1) {
            r.row.push(e.create("node", "mtd", []));
          }
          var a = e.GetArgument(t);
          var n = e.string.substr(e.i);
          e.string = a + "&&\\endAboxed";
          e.i = 0;
          var o = e.GetUpTo(t, "&");
          var i = e.GetUpTo(t, "&");
          e.GetUpTo(t, "\\endAboxed");
          var l = s.default.substituteArgs(e, [o, i], "\\rlap{\\boxed{#1{}#2}}\\kern.267em\\phantom{#1}&\\phantom{{}#2}\\kern.267em");
          e.string = l + n;
          e.i = 0;
        },
        ArrowBetweenLines: function (e, t) {
          var r = y.MathtoolsUtil.checkAlignment(e, t);
          if (r.Size() || r.row.length) {
            throw new f.default("BetweenLines", "%1 must be on a row by itself", t);
          }
          var a = e.GetStar();
          var n = e.GetBrackets(t, "\\Updownarrow");
          if (a) {
            r.EndEntry();
            r.EndEntry();
          }
          var o = a ? "\\quad" + n : n + "\\quad";
          var i = new c.default(o, e.stack.env, e.configuration).mml();
          e.Push(i);
          r.EndEntry();
          r.EndRow();
        },
        VDotsWithin: function (e, t) {
          var r = e.stack.Top();
          var n = r.getProperty("flushspaceabove") === r.table.length;
          var o = "\\mmlToken{mi}{}" + e.GetArgument(t) + "\\mmlToken{mi}{}";
          var i = new c.default(o, e.stack.env, e.configuration).mml();
          var s = e.create(
            "node",
            "mpadded",
            [
              e.create(
                "node",
                "mpadded",
                [e.create("node", "mo", [e.create("text", "⋮")])],
                a({ width: 0, lspace: "-.5width" }, n ? { height: "-.6em", voffset: "-.18em" } : {})
              ),
              e.create("node", "mphantom", [i]),
            ],
            { lspace: ".5width" }
          );
          e.Push(s);
        },
        ShortVDotsWithin: function (e, r) {
          var a = e.stack.Top();
          var n = e.GetStar();
          t.MathtoolsMethods.FlushSpaceAbove(e, "\\MTFlushSpaceAbove");
          !n && a.EndEntry();
          t.MathtoolsMethods.VDotsWithin(e, "\\vdotswithin");
          n && a.EndEntry();
          t.MathtoolsMethods.FlushSpaceBelow(e, "\\MTFlushSpaceBelow");
        },
        FlushSpaceAbove: function (e, t) {
          var r = y.MathtoolsUtil.checkAlignment(e, t);
          r.setProperty("flushspaceabove", r.table.length);
          r.addRowSpacing("-" + e.options.mathtools["shortvdotsadjustabove"]);
        },
        FlushSpaceBelow: function (e, t) {
          var r = y.MathtoolsUtil.checkAlignment(e, t);
          r.Size() && r.EndEntry();
          r.EndRow();
          r.addRowSpacing("-" + e.options.mathtools["shortvdotsadjustbelow"]);
        },
        PairedDelimiters: function (e, t, r, a, o, i, l, u) {
          if (o === void 0) {
            o = "#1";
          }
          if (i === void 0) {
            i = 1;
          }
          if (l === void 0) {
            l = "";
          }
          if (u === void 0) {
            u = "";
          }
          var c = e.GetStar();
          var f = c ? "" : e.GetBrackets(t);
          var d = n(c ? ["\\left", "\\right"] : f ? [f + "l", f + "r"] : ["", ""], 2),
            p = d[0],
            m = d[1];
          var h = c ? "\\middle" : f || "";
          if (i) {
            var v = [];
            for (var g = v.length; g < i; g++) {
              v.push(e.GetArgument(t));
            }
            l = s.default.substituteArgs(e, v, l);
            o = s.default.substituteArgs(e, v, o);
            u = s.default.substituteArgs(e, v, u);
          }
          o = o.replace(/\\delimsize/g, h);
          e.string = [l, p, r, o, m, a, u, e.string.substr(e.i)].reduce(function (t, r) {
            return s.default.addArgs(e, t, r);
          }, "");
          e.i = 0;
          s.default.checkMaxMacros(e);
        },
        DeclarePairedDelimiter: function (e, t) {
          var r = v.default.GetCsNameArgument(e, t);
          var a = e.GetArgument(t);
          var n = e.GetArgument(t);
          y.MathtoolsUtil.addPairedDelims(e.configuration, r, [a, n]);
        },
        DeclarePairedDelimiterX: function (e, t) {
          var r = v.default.GetCsNameArgument(e, t);
          var a = v.default.GetArgCount(e, t);
          var n = e.GetArgument(t);
          var o = e.GetArgument(t);
          var i = e.GetArgument(t);
          y.MathtoolsUtil.addPairedDelims(e.configuration, r, [n, o, i, a]);
        },
        DeclarePairedDelimiterXPP: function (e, t) {
          var r = v.default.GetCsNameArgument(e, t);
          var a = v.default.GetArgCount(e, t);
          var n = e.GetArgument(t);
          var o = e.GetArgument(t);
          var i = e.GetArgument(t);
          var s = e.GetArgument(t);
          var l = e.GetArgument(t);
          y.MathtoolsUtil.addPairedDelims(e.configuration, r, [o, i, l, a, n, s]);
        },
        CenterColon: function (e, t, r, n, o) {
          if (n === void 0) {
            n = false;
          }
          if (o === void 0) {
            o = false;
          }
          var i = e.options.mathtools;
          var s = e.create("token", "mo", {}, ":");
          if (r && (i["centercolon"] || n)) {
            var l = i["centercolon-offset"];
            s = e.create(
              "node",
              "mpadded",
              [s],
              a({ voffset: l, height: "+".concat(l), depth: "-".concat(l) }, o ? { width: i["thincolon-dw"], lspace: i["thincolon-dx"] } : {})
            );
          }
          e.Push(s);
        },
        Relation: function (e, t, r, a) {
          var n = e.options.mathtools;
          if (n["use-unicode"] && a) {
            e.Push(e.create("token", "mo", { texClass: p.TEXCLASS.REL }, a));
          } else {
            r = "\\mathrel{" + r.replace(/:/g, "\\MTThinColon").replace(/-/g, "\\mathrel{-}") + "}";
            e.string = s.default.addArgs(e, r, e.string.substr(e.i));
            e.i = 0;
          }
        },
        NArrow: function (e, t, r, a) {
          e.Push(
            e.create(
              "node",
              "TeXAtom",
              [
                e.create("token", "mtext", {}, r),
                e.create(
                  "node",
                  "mpadded",
                  [
                    e.create(
                      "node",
                      "mpadded",
                      [
                        e.create("node", "menclose", [e.create("node", "mspace", [], { height: ".2em", depth: 0, width: ".4em" })], {
                          notation: "updiagonalstrike",
                          "data-thickness": ".05em",
                          "data-padding": 0,
                        }),
                      ],
                      { width: 0, lspace: "-.5width", voffset: a }
                    ),
                    e.create("node", "mphantom", [e.create("token", "mtext", {}, r)]),
                  ],
                  { width: 0, lspace: "-.5width" }
                ),
              ],
              { texClass: p.TEXCLASS.REL }
            )
          );
        },
        SplitFrac: function (e, t, r) {
          var a = e.ParseArg(t);
          var n = e.ParseArg(t);
          e.Push(
            e.create(
              "node",
              "mstyle",
              [
                e.create(
                  "node",
                  "mfrac",
                  [
                    e.create("node", "mstyle", [a, e.create("token", "mi"), e.create("token", "mspace", { width: "1em" })], { scriptlevel: 0 }),
                    e.create("node", "mstyle", [e.create("token", "mspace", { width: "1em" }), e.create("token", "mi"), n], { scriptlevel: 0 }),
                  ],
                  { linethickness: 0, numalign: "left", denomalign: "right" }
                ),
              ],
              { displaystyle: r, scriptlevel: 0 }
            )
          );
        },
        XMathStrut: function (e, t) {
          var r = e.GetBrackets(t);
          var a = e.GetArgument(t);
          a = y.MathtoolsUtil.plusOrMinus(t, a);
          r = y.MathtoolsUtil.plusOrMinus(t, r || a);
          e.Push(
            e.create(
              "node",
              "TeXAtom",
              [
                e.create("node", "mpadded", [e.create("node", "mphantom", [e.create("token", "mo", { stretchy: false }, "(")])], {
                  width: 0,
                  height: a + "height",
                  depth: r + "depth",
                }),
              ],
              { texClass: p.TEXCLASS.ORD }
            )
          );
        },
        Prescript: function (e, t) {
          var r = y.MathtoolsUtil.getScript(e, t, "sup");
          var a = y.MathtoolsUtil.getScript(e, t, "sub");
          var n = y.MathtoolsUtil.getScript(e, t, "arg");
          if (d.default.isType(r, "none") && d.default.isType(a, "none")) {
            e.Push(n);
            return;
          }
          var o = e.create("node", "mmultiscripts", [n]);
          d.default.getChildren(o).push(null, null);
          d.default.appendChildren(o, [e.create("node", "mprescripts"), a, r]);
          o.setProperty("fixPrescript", true);
          e.Push(o);
        },
        NewTagForm: function (e, t, r) {
          if (r === void 0) {
            r = false;
          }
          var a = e.tags;
          if (!("mtFormats" in a)) {
            throw new f.default("TagsNotMT", "%1 can only be used with ams or mathtools tags", t);
          }
          var n = e.GetArgument(t).trim();
          if (!n) {
            throw new f.default("InvalidTagFormID", "Tag form name can't be empty");
          }
          var o = e.GetBrackets(t, "");
          var i = e.GetArgument(t);
          var s = e.GetArgument(t);
          if (!r && a.mtFormats.has(n)) {
            throw new f.default("DuplicateTagForm", "Duplicate tag form: %1", n);
          }
          a.mtFormats.set(n, [i, s, o]);
        },
        UseTagForm: function (e, t) {
          var r = e.tags;
          if (!("mtFormats" in r)) {
            throw new f.default("TagsNotMT", "%1 can only be used with ams or mathtools tags", t);
          }
          var a = e.GetArgument(t).trim();
          if (!a) {
            r.mtCurrent = null;
            return;
          }
          if (!r.mtFormats.has(a)) {
            throw new f.default("UndefinedTagForm", "Undefined tag form: %1", a);
          }
          r.mtCurrent = r.mtFormats.get(a);
        },
        SetOptions: function (e, t) {
          var r, a;
          var n = e.options.mathtools;
          if (!n["allow-mathtoolsset"]) {
            throw new f.default("ForbiddenMathtoolsSet", "%1 is disabled", t);
          }
          var i = {};
          Object.keys(n).forEach(function (e) {
            if (e !== "pariedDelimiters" && e !== "tagforms" && e !== "allow-mathtoolsset") {
              i[e] = 1;
            }
          });
          var l = e.GetArgument(t);
          var u = s.default.keyvalOptions(l, i, true);
          try {
            for (var c = o(Object.keys(u)), d = c.next(); !d.done; d = c.next()) {
              var p = d.value;
              n[p] = u[p];
            }
          } catch (m) {
            r = { error: m };
          } finally {
            try {
              if (d && !d.done && (a = c.return)) a.call(c);
            } finally {
              if (r) throw r.error;
            }
          }
        },
        Array: u.default.Array,
        Macro: u.default.Macro,
        xArrow: l.AmsMethods.xArrow,
        HandleRef: l.AmsMethods.HandleRef,
        AmsEqnArray: l.AmsMethods.AmsEqnArray,
        MacroWithTemplate: g.default.MacroWithTemplate,
      };
    },
    81197: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var o =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.MathtoolsTagFormat = void 0;
      var s = i(r(98770));
      var l = r(17782);
      var u = 0;
      function c(e, t) {
        var r = t.parseOptions.options.tags;
        if (r !== "base" && e.tags.hasOwnProperty(r)) {
          l.TagsFactory.add(r, e.tags[r]);
        }
        var i = l.TagsFactory.create(t.parseOptions.options.tags).constructor;
        var c = (function (e) {
          a(r, e);
          function r() {
            var r, a;
            var o = e.call(this) || this;
            o.mtFormats = new Map();
            o.mtCurrent = null;
            var i = t.parseOptions.options.mathtools.tagforms;
            try {
              for (var l = n(Object.keys(i)), u = l.next(); !u.done; u = l.next()) {
                var c = u.value;
                if (!Array.isArray(i[c]) || i[c].length !== 3) {
                  throw new s.default("InvalidTagFormDef", 'The tag form definition for "%1" should be an array fo three strings', c);
                }
                o.mtFormats.set(c, i[c]);
              }
            } catch (f) {
              r = { error: f };
            } finally {
              try {
                if (u && !u.done && (a = l.return)) a.call(l);
              } finally {
                if (r) throw r.error;
              }
            }
            return o;
          }
          r.prototype.formatTag = function (t) {
            if (this.mtCurrent) {
              var r = o(this.mtCurrent, 3),
                a = r[0],
                n = r[1],
                i = r[2];
              return i ? "".concat(a).concat(i, "{").concat(t, "}").concat(n) : "".concat(a).concat(t).concat(n);
            }
            return e.prototype.formatTag.call(this, t);
          };
          return r;
        })(i);
        u++;
        var f = "MathtoolsTags-" + u;
        l.TagsFactory.add(f, c);
        t.parseOptions.options.tags = f;
      }
      t.MathtoolsTagFormat = c;
    },
    90352: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.MathtoolsUtil = void 0;
      var o = r(94650);
      var i = n(r(6980));
      var s = n(r(75845));
      var l = n(r(98770));
      var u = r(27151);
      var c = r(34981);
      var f = r(75316);
      var d = r(7932);
      t.MathtoolsUtil = {
        setDisplayLevel: function (e, t) {
          if (!t) return;
          var r = a(
              (0, c.lookup)(
                t,
                { "\\displaystyle": [true, 0], "\\textstyle": [false, 0], "\\scriptstyle": [false, 1], "\\scriptscriptstyle": [false, 2] },
                [null, null]
              ),
              2
            ),
            n = r[0],
            o = r[1];
          if (n !== null) {
            e.attributes.set("displaystyle", n);
            e.attributes.set("scriptlevel", o);
          }
        },
        checkAlignment: function (e, t) {
          var r = e.stack.Top();
          if (r.kind !== o.EqnArrayItem.prototype.kind) {
            throw new l.default("NotInAlignment", "%1 can only be used in aligment environments", t);
          }
          return r;
        },
        addPairedDelims: function (e, t, r) {
          var a = e.handlers.retrieve(d.PAIREDDELIMS);
          a.add(t, new u.Macro(t, f.MathtoolsMethods.PairedDelimiters, r));
        },
        spreadLines: function (e, t) {
          if (!e.isKind("mtable")) return;
          var r = e.attributes.get("rowspacing");
          if (r) {
            var a = i.default.dimen2em(t);
            r = r
              .split(/ /)
              .map(function (e) {
                return i.default.Em(Math.max(0, i.default.dimen2em(e) + a));
              })
              .join(" ");
          } else {
            r = t;
          }
          e.attributes.set("rowspacing", r);
        },
        plusOrMinus: function (e, t) {
          t = t.trim();
          if (!t.match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/)) {
            throw new l.default("NotANumber", "Argument to %1 is not a number", e);
          }
          return t.match(/^[-+]/) ? t : "+" + t;
        },
        getScript: function (e, t, r) {
          var a = i.default.trimSpaces(e.GetArgument(t));
          if (a === "") {
            return e.create("node", "none");
          }
          var n = e.options.mathtools["prescript-".concat(r, "-format")];
          n && (a = "".concat(n, "{").concat(a, "}"));
          return new s.default(a, e.stack.env, e.configuration).mml();
        },
      };
    },
    75802: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.MhchemConfiguration = void 0;
      var n = r(56441);
      var o = r(80209);
      var i = a(r(98770));
      var s = a(r(38364));
      var l = r(98840);
      var u = r(62691);
      var c = {};
      c.Macro = s.default.Macro;
      c.xArrow = l.AmsMethods.xArrow;
      c.Machine = function (e, t, r) {
        var a = e.GetArgument(t);
        var n;
        try {
          n = u.mhchemParser.toTex(a, r);
        } catch (o) {
          throw new i.default(o[0], o[1]);
        }
        e.string = n + e.string.substr(e.i);
        e.i = 0;
      };
      new o.CommandMap(
        "mhchem",
        {
          ce: ["Machine", "ce"],
          pu: ["Machine", "pu"],
          longrightleftharpoons: ["Macro", "\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],
          longRightleftharpoons: ["Macro", "\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{\\leftharpoondown}}"],
          longLeftrightharpoons: ["Macro", "\\stackrel{\\textstyle\\vphantom{{-}}{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],
          longleftrightarrows: ["Macro", "\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}"],
          tripledash: ["Macro", "\\vphantom{-}\\raise2mu{\\kern2mu\\tiny\\text{-}\\kern1mu\\text{-}\\kern1mu\\text{-}\\kern2mu}"],
          xleftrightarrow: ["xArrow", 8596, 6, 6],
          xrightleftharpoons: ["xArrow", 8652, 5, 7],
          xRightleftharpoons: ["xArrow", 8652, 5, 7],
          xLeftrightharpoons: ["xArrow", 8652, 5, 7],
        },
        c
      );
      t.MhchemConfiguration = n.Configuration.create("mhchem", { handler: { macro: ["mhchem"] } });
    },
    36912: function (e, t, r) {
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) a(t, e, r);
          n(t, e);
          return t;
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var s;
      Object.defineProperty(t, "__esModule", { value: true });
      t.NewcommandConfiguration = void 0;
      var l = r(56441);
      var u = r(73694);
      var c = i(r(67668));
      r(56819);
      var f = i(r(22960));
      var d = o(r(80209));
      var p = function (e) {
        new d.DelimiterMap(c.default.NEW_DELIMITER, f.default.delimiter, {});
        new d.CommandMap(c.default.NEW_COMMAND, {}, {});
        new d.EnvironmentMap(c.default.NEW_ENVIRONMENT, f.default.environment, {}, {});
        e.append(
          l.Configuration.local({
            handler: {
              character: [],
              delimiter: [c.default.NEW_DELIMITER],
              macro: [c.default.NEW_DELIMITER, c.default.NEW_COMMAND],
              environment: [c.default.NEW_ENVIRONMENT],
            },
            priority: -1,
          })
        );
      };
      t.NewcommandConfiguration = l.Configuration.create("newcommand", {
        handler: { macro: ["Newcommand-macros"] },
        items: ((s = {}), (s[u.BeginEnvItem.prototype.kind] = u.BeginEnvItem), s),
        options: { maxMacros: 1e3 },
        init: p,
      });
    },
    73694: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.BeginEnvItem = void 0;
      var o = n(r(98770));
      var i = r(37720);
      var s = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "beginEnv";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            if (t.getName() !== this.getName()) {
              throw new o.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), t.getName());
            }
            return [[this.factory.create("mml", this.toMml())], true];
          }
          if (t.isKind("stop")) {
            throw new o.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(i.BaseItem);
      t.BeginEnvItem = s;
    },
    56819: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(91200));
      var o = r(80209);
      new o.CommandMap(
        "Newcommand-macros",
        {
          newcommand: "NewCommand",
          renewcommand: "NewCommand",
          newenvironment: "NewEnvironment",
          renewenvironment: "NewEnvironment",
          def: "MacroDef",
          let: "Let",
        },
        n.default
      );
    },
    91200: function (e, t, r) {
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) a(t, e, r);
          n(t, e);
          return t;
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var s = i(r(98770));
      var l = o(r(80209));
      var u = i(r(38364));
      var c = i(r(6980));
      var f = i(r(67668));
      var d = {};
      d.NewCommand = function (e, t) {
        var r = f.default.GetCsNameArgument(e, t);
        var a = f.default.GetArgCount(e, t);
        var n = e.GetBrackets(t);
        var o = e.GetArgument(t);
        f.default.addMacro(e, r, d.Macro, [o, a, n]);
      };
      d.NewEnvironment = function (e, t) {
        var r = c.default.trimSpaces(e.GetArgument(t));
        var a = f.default.GetArgCount(e, t);
        var n = e.GetBrackets(t);
        var o = e.GetArgument(t);
        var i = e.GetArgument(t);
        f.default.addEnvironment(e, r, d.BeginEnv, [true, o, i, a, n]);
      };
      d.MacroDef = function (e, t) {
        var r = f.default.GetCSname(e, t);
        var a = f.default.GetTemplate(e, t, "\\" + r);
        var n = e.GetArgument(t);
        !(a instanceof Array) ? f.default.addMacro(e, r, d.Macro, [n, a]) : f.default.addMacro(e, r, d.MacroWithTemplate, [n].concat(a));
      };
      d.Let = function (e, t) {
        var r = f.default.GetCSname(e, t);
        var a = e.GetNext();
        if (a === "=") {
          e.i++;
          a = e.GetNext();
        }
        var n = e.configuration.handlers;
        if (a === "\\") {
          t = f.default.GetCSname(e, t);
          var o = n.get("delimiter").lookup("\\" + t);
          if (o) {
            f.default.addDelimiter(e, "\\" + r, o.char, o.attributes);
            return;
          }
          var i = n.get("macro").applicable(t);
          if (!i) {
            return;
          }
          if (i instanceof l.MacroMap) {
            var s = i.lookup(t);
            f.default.addMacro(e, r, s.func, s.args, s.symbol);
            return;
          }
          o = i.lookup(t);
          var u = f.default.disassembleSymbol(r, o);
          var c = function (e, t) {
            var r = [];
            for (var a = 2; a < arguments.length; a++) {
              r[a - 2] = arguments[a];
            }
            var n = f.default.assembleSymbol(r);
            return i.parser(e, n);
          };
          f.default.addMacro(e, r, c, u);
          return;
        }
        e.i++;
        var p = n.get("delimiter").lookup(a);
        if (p) {
          f.default.addDelimiter(e, "\\" + r, p.char, p.attributes);
          return;
        }
        f.default.addMacro(e, r, d.Macro, [a]);
      };
      d.MacroWithTemplate = function (e, t, r, a) {
        var n = [];
        for (var o = 4; o < arguments.length; o++) {
          n[o - 4] = arguments[o];
        }
        var i = parseInt(a, 10);
        if (i) {
          var l = [];
          e.GetNext();
          if (n[0] && !f.default.MatchParam(e, n[0])) {
            throw new s.default("MismatchUseDef", "Use of %1 doesn't match its definition", t);
          }
          for (var u = 0; u < i; u++) {
            l.push(f.default.GetParameter(e, t, n[u + 1]));
          }
          r = c.default.substituteArgs(e, l, r);
        }
        e.string = c.default.addArgs(e, r, e.string.slice(e.i));
        e.i = 0;
        c.default.checkMaxMacros(e);
      };
      d.BeginEnv = function (e, t, r, a, n, o) {
        if (t.getProperty("end") && e.stack.env["closing"] === t.getName()) {
          delete e.stack.env["closing"];
          var i = e.string.slice(e.i);
          e.string = a;
          e.i = 0;
          e.Parse();
          e.string = i;
          e.i = 0;
          return e.itemFactory.create("end").setProperty("name", t.getName());
        }
        if (n) {
          var s = [];
          if (o != null) {
            var l = e.GetBrackets("\\begin{" + t.getName() + "}");
            s.push(l == null ? o : l);
          }
          for (var u = s.length; u < n; u++) {
            s.push(e.GetArgument("\\begin{" + t.getName() + "}"));
          }
          r = c.default.substituteArgs(e, s, r);
          a = c.default.substituteArgs(e, [], a);
        }
        e.string = c.default.addArgs(e, r, e.string.slice(e.i));
        e.i = 0;
        return e.itemFactory.create("beginEnv").setProperty("name", t.getName());
      };
      d.Macro = u.default.Macro;
      t["default"] = d;
    },
    67668: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = a(r(6980));
      var o = a(r(98770));
      var i = r(27151);
      var s;
      (function (e) {
        function t(e, t) {
          var r = [e, t.char];
          if (t.attributes) {
            for (var a in t.attributes) {
              r.push(a);
              r.push(t.attributes[a]);
            }
          }
          return r;
        }
        e.disassembleSymbol = t;
        function r(e) {
          var t = e[0];
          var r = e[1];
          var a = {};
          for (var n = 2; n < e.length; n = n + 2) {
            a[e[n]] = e[n + 1];
          }
          return new i.Symbol(t, r, a);
        }
        e.assembleSymbol = r;
        function a(e, t) {
          var r = e.GetNext();
          if (r !== "\\") {
            throw new o.default("MissingCS", "%1 must be followed by a control sequence", t);
          }
          var a = n.default.trimSpaces(e.GetArgument(t));
          return a.substr(1);
        }
        e.GetCSname = a;
        function s(e, t) {
          var r = n.default.trimSpaces(e.GetArgument(t));
          if (r.charAt(0) === "\\") {
            r = r.substr(1);
          }
          if (!r.match(/^(.|[a-z]+)$/i)) {
            throw new o.default("IllegalControlSequenceName", "Illegal control sequence name for %1", t);
          }
          return r;
        }
        e.GetCsNameArgument = s;
        function l(e, t) {
          var r = e.GetBrackets(t);
          if (r) {
            r = n.default.trimSpaces(r);
            if (!r.match(/^[0-9]+$/)) {
              throw new o.default("IllegalParamNumber", "Illegal number of parameters specified in %1", t);
            }
          }
          return r;
        }
        e.GetArgCount = l;
        function u(e, t, r) {
          var a = e.GetNext();
          var n = [];
          var i = 0;
          var s = e.i;
          while (e.i < e.string.length) {
            a = e.GetNext();
            if (a === "#") {
              if (s !== e.i) {
                n[i] = e.string.substr(s, e.i - s);
              }
              a = e.string.charAt(++e.i);
              if (!a.match(/^[1-9]$/)) {
                throw new o.default("CantUseHash2", "Illegal use of # in template for %1", r);
              }
              if (parseInt(a) !== ++i) {
                throw new o.default("SequentialParam", "Parameters for %1 must be numbered sequentially", r);
              }
              s = e.i + 1;
            } else if (a === "{") {
              if (s !== e.i) {
                n[i] = e.string.substr(s, e.i - s);
              }
              if (n.length > 0) {
                return [i.toString()].concat(n);
              } else {
                return i;
              }
            }
            e.i++;
          }
          throw new o.default("MissingReplacementString", "Missing replacement string for definition of %1", t);
        }
        e.GetTemplate = u;
        function c(e, t, r) {
          if (r == null) {
            return e.GetArgument(t);
          }
          var a = e.i;
          var n = 0;
          var i = 0;
          while (e.i < e.string.length) {
            var s = e.string.charAt(e.i);
            if (s === "{") {
              if (e.i === a) {
                i = 1;
              }
              e.GetArgument(t);
              n = e.i - a;
            } else if (f(e, r)) {
              if (i) {
                a++;
                n -= 2;
              }
              return e.string.substr(a, n);
            } else if (s === "\\") {
              e.i++;
              n++;
              i = 0;
              var l = e.string.substr(e.i).match(/[a-z]+|./i);
              if (l) {
                e.i += l[0].length;
                n = e.i - a;
              }
            } else {
              e.i++;
              n++;
              i = 0;
            }
          }
          throw new o.default("RunawayArgument", "Runaway argument for %1?", t);
        }
        e.GetParameter = c;
        function f(e, t) {
          if (e.string.substr(e.i, t.length) !== t) {
            return 0;
          }
          if (t.match(/\\[a-z]+$/i) && e.string.charAt(e.i + t.length).match(/[a-z]/i)) {
            return 0;
          }
          e.i += t.length;
          return 1;
        }
        e.MatchParam = f;
        function d(t, r, a, n) {
          var o = t.configuration.handlers;
          var s = o.retrieve(e.NEW_DELIMITER);
          s.add(r, new i.Symbol(r, a, n));
        }
        e.addDelimiter = d;
        function p(t, r, a, n, o) {
          if (o === void 0) {
            o = "";
          }
          var s = t.configuration.handlers;
          var l = s.retrieve(e.NEW_COMMAND);
          l.add(r, new i.Macro(o ? o : r, a, n));
        }
        e.addMacro = p;
        function m(t, r, a, n) {
          var o = t.configuration.handlers;
          var s = o.retrieve(e.NEW_ENVIRONMENT);
          s.add(r, new i.Macro(r, a, n));
        }
        e.addEnvironment = m;
        e.NEW_DELIMITER = "new-Delimiter";
        e.NEW_COMMAND = "new-Command";
        e.NEW_ENVIRONMENT = "new-Environment";
      })(s || (s = {}));
      t["default"] = s;
    },
    21018: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.NoErrorsConfiguration = void 0;
      var a = r(56441);
      function n(e, t, r, a) {
        var n = e.create("token", "mtext", {}, a.replace(/\n/g, " "));
        var o = e.create("node", "merror", [n], { "data-mjx-error": t, title: t });
        return o;
      }
      t.NoErrorsConfiguration = a.Configuration.create("noerrors", { nodes: { error: n } });
    },
    68916: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.NoUndefinedConfiguration = void 0;
      var n = r(56441);
      function o(e, t) {
        var r, n;
        var o = e.create("text", "\\" + t);
        var i = e.options.noundefined || {};
        var s = {};
        try {
          for (var l = a(["color", "background", "size"]), u = l.next(); !u.done; u = l.next()) {
            var c = u.value;
            if (i[c]) {
              s["math" + c] = i[c];
            }
          }
        } catch (f) {
          r = { error: f };
        } finally {
          try {
            if (u && !u.done && (n = l.return)) n.call(l);
          } finally {
            if (r) throw r.error;
          }
        }
        e.Push(e.create("node", "mtext", [], s, o));
      }
      t.NoUndefinedConfiguration = n.Configuration.create("noundefined", {
        fallback: { macro: o },
        options: { noundefined: { color: "red", background: "", size: "" } },
        priority: 3,
      });
    },
    23468: (e, t, r) => {
      var a;
      Object.defineProperty(t, "__esModule", { value: true });
      t.PhysicsConfiguration = void 0;
      var n = r(56441);
      var o = r(34834);
      r(23423);
      t.PhysicsConfiguration = n.Configuration.create("physics", {
        handler: {
          macro: [
            "Physics-automatic-bracing-macros",
            "Physics-vector-macros",
            "Physics-vector-mo",
            "Physics-vector-mi",
            "Physics-derivative-macros",
            "Physics-expressions-macros",
            "Physics-quick-quad-macros",
            "Physics-bra-ket-macros",
            "Physics-matrix-macros",
          ],
          character: ["Physics-characters"],
          environment: ["Physics-aux-envs"],
        },
        items: ((a = {}), (a[o.AutoOpen.prototype.kind] = o.AutoOpen), a),
        options: { physics: { italicdiff: false, arrowdel: false } },
      });
    },
    34834: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.AutoOpen = void 0;
      var o = r(37720);
      var i = n(r(6980));
      var s = n(r(72691));
      var l = n(r(75845));
      var u = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.openCount = 0;
          return t;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "auto open";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.toMml = function () {
          var t = this.factory.configuration.parser;
          var r = this.getProperty("right");
          if (this.getProperty("smash")) {
            var a = e.prototype.toMml.call(this);
            var n = t.create("node", "mpadded", [a], { height: 0, depth: 0 });
            this.Clear();
            this.Push(t.create("node", "TeXAtom", [n]));
          }
          if (r) {
            this.Push(new l.default(r, t.stack.env, t.configuration).mml());
          }
          var o = i.default.fenced(
            this.factory.configuration,
            this.getProperty("open"),
            e.prototype.toMml.call(this),
            this.getProperty("close"),
            this.getProperty("big")
          );
          s.default.removeProperties(o, "open", "close", "texClass");
          return o;
        };
        t.prototype.checkItem = function (t) {
          if (t.isKind("mml") && t.Size() === 1) {
            var r = t.toMml();
            if (r.isKind("mo") && r.getText() === this.getProperty("open")) {
              this.openCount++;
            }
          }
          var a = t.getProperty("autoclose");
          if (a && a === this.getProperty("close") && !this.openCount--) {
            if (this.getProperty("ignore")) {
              this.Clear();
              return [[], true];
            }
            return [[this.toMml()], true];
          }
          return e.prototype.checkItem.call(this, t);
        };
        t.errors = Object.assign(Object.create(o.BaseItem.errors), { stop: ["ExtraOrMissingDelims", "Extra open or missing close delimiter"] });
        return t;
      })(o.BaseItem);
      t.AutoOpen = u;
    },
    23423: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(80209);
      var o = a(r(66052));
      var i = r(80469);
      var s = a(r(22960));
      var l = r(80747);
      new n.CommandMap(
        "Physics-automatic-bracing-macros",
        {
          quantity: "Quantity",
          qty: "Quantity",
          pqty: ["Quantity", "(", ")", true],
          bqty: ["Quantity", "[", "]", true],
          vqty: ["Quantity", "|", "|", true],
          Bqty: ["Quantity", "\\{", "\\}", true],
          absolutevalue: ["Quantity", "|", "|", true],
          abs: ["Quantity", "|", "|", true],
          norm: ["Quantity", "\\|", "\\|", true],
          evaluated: "Eval",
          eval: "Eval",
          order: ["Quantity", "(", ")", true, "O", i.TexConstant.Variant.CALLIGRAPHIC],
          commutator: "Commutator",
          comm: "Commutator",
          anticommutator: ["Commutator", "\\{", "\\}"],
          acomm: ["Commutator", "\\{", "\\}"],
          poissonbracket: ["Commutator", "\\{", "\\}"],
          pb: ["Commutator", "\\{", "\\}"],
        },
        o.default
      );
      new n.CharacterMap("Physics-vector-mo", s.default.mathchar0mo, {
        dotproduct: ["⋅", { mathvariant: i.TexConstant.Variant.BOLD }],
        vdot: ["⋅", { mathvariant: i.TexConstant.Variant.BOLD }],
        crossproduct: "×",
        cross: "×",
        cp: "×",
        gradientnabla: ["∇", { mathvariant: i.TexConstant.Variant.BOLD }],
      });
      new n.CharacterMap("Physics-vector-mi", s.default.mathchar0mi, {
        real: ["ℜ", { mathvariant: i.TexConstant.Variant.NORMAL }],
        imaginary: ["ℑ", { mathvariant: i.TexConstant.Variant.NORMAL }],
      });
      new n.CommandMap(
        "Physics-vector-macros",
        {
          vnabla: "Vnabla",
          vectorbold: "VectorBold",
          vb: "VectorBold",
          vectorarrow: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
          va: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
          vectorunit: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
          vu: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
          gradient: ["OperatorApplication", "\\vnabla", "(", "["],
          grad: ["OperatorApplication", "\\vnabla", "(", "["],
          divergence: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
          div: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
          curl: ["VectorOperator", "\\vnabla\\crossproduct", "(", "["],
          laplacian: ["OperatorApplication", "\\nabla^2", "(", "["],
        },
        o.default
      );
      new n.CommandMap(
        "Physics-expressions-macros",
        {
          sin: "Expression",
          sinh: "Expression",
          arcsin: "Expression",
          asin: "Expression",
          cos: "Expression",
          cosh: "Expression",
          arccos: "Expression",
          acos: "Expression",
          tan: "Expression",
          tanh: "Expression",
          arctan: "Expression",
          atan: "Expression",
          csc: "Expression",
          csch: "Expression",
          arccsc: "Expression",
          acsc: "Expression",
          sec: "Expression",
          sech: "Expression",
          arcsec: "Expression",
          asec: "Expression",
          cot: "Expression",
          coth: "Expression",
          arccot: "Expression",
          acot: "Expression",
          exp: ["Expression", false],
          log: "Expression",
          ln: "Expression",
          det: ["Expression", false],
          Pr: ["Expression", false],
          tr: ["Expression", false],
          trace: ["Expression", false, "tr"],
          Tr: ["Expression", false],
          Trace: ["Expression", false, "Tr"],
          rank: "NamedFn",
          erf: ["Expression", false],
          Residue: ["Macro", "\\mathrm{Res}"],
          Res: ["OperatorApplication", "\\Residue", "(", "[", "{"],
          principalvalue: ["OperatorApplication", "{\\cal P}"],
          pv: ["OperatorApplication", "{\\cal P}"],
          PV: ["OperatorApplication", "{\\rm P.V.}"],
          Re: ["OperatorApplication", "\\mathrm{Re}", "{"],
          Im: ["OperatorApplication", "\\mathrm{Im}", "{"],
          sine: ["NamedFn", "sin"],
          hypsine: ["NamedFn", "sinh"],
          arcsine: ["NamedFn", "arcsin"],
          asine: ["NamedFn", "asin"],
          cosine: ["NamedFn", "cos"],
          hypcosine: ["NamedFn", "cosh"],
          arccosine: ["NamedFn", "arccos"],
          acosine: ["NamedFn", "acos"],
          tangent: ["NamedFn", "tan"],
          hyptangent: ["NamedFn", "tanh"],
          arctangent: ["NamedFn", "arctan"],
          atangent: ["NamedFn", "atan"],
          cosecant: ["NamedFn", "csc"],
          hypcosecant: ["NamedFn", "csch"],
          arccosecant: ["NamedFn", "arccsc"],
          acosecant: ["NamedFn", "acsc"],
          secant: ["NamedFn", "sec"],
          hypsecant: ["NamedFn", "sech"],
          arcsecant: ["NamedFn", "arcsec"],
          asecant: ["NamedFn", "asec"],
          cotangent: ["NamedFn", "cot"],
          hypcotangent: ["NamedFn", "coth"],
          arccotangent: ["NamedFn", "arccot"],
          acotangent: ["NamedFn", "acot"],
          exponential: ["NamedFn", "exp"],
          logarithm: ["NamedFn", "log"],
          naturallogarithm: ["NamedFn", "ln"],
          determinant: ["NamedFn", "det"],
          Probability: ["NamedFn", "Pr"],
        },
        o.default
      );
      new n.CommandMap(
        "Physics-quick-quad-macros",
        {
          qqtext: "Qqtext",
          qq: "Qqtext",
          qcomma: ["Macro", "\\qqtext*{,}"],
          qc: ["Macro", "\\qqtext*{,}"],
          qcc: ["Qqtext", "c.c."],
          qif: ["Qqtext", "if"],
          qthen: ["Qqtext", "then"],
          qelse: ["Qqtext", "else"],
          qotherwise: ["Qqtext", "otherwise"],
          qunless: ["Qqtext", "unless"],
          qgiven: ["Qqtext", "given"],
          qusing: ["Qqtext", "using"],
          qassume: ["Qqtext", "assume"],
          qsince: ["Qqtext", "since"],
          qlet: ["Qqtext", "let"],
          qfor: ["Qqtext", "for"],
          qall: ["Qqtext", "all"],
          qeven: ["Qqtext", "even"],
          qodd: ["Qqtext", "odd"],
          qinteger: ["Qqtext", "integer"],
          qand: ["Qqtext", "and"],
          qor: ["Qqtext", "or"],
          qas: ["Qqtext", "as"],
          qin: ["Qqtext", "in"],
        },
        o.default
      );
      new n.CommandMap(
        "Physics-derivative-macros",
        {
          diffd: "DiffD",
          flatfrac: ["Macro", "\\left.#1\\middle/#2\\right.", 2],
          differential: ["Differential", "\\diffd"],
          dd: ["Differential", "\\diffd"],
          variation: ["Differential", "\\delta"],
          var: ["Differential", "\\delta"],
          derivative: ["Derivative", 2, "\\diffd"],
          dv: ["Derivative", 2, "\\diffd"],
          partialderivative: ["Derivative", 3, "\\partial"],
          pderivative: ["Derivative", 3, "\\partial"],
          pdv: ["Derivative", 3, "\\partial"],
          functionalderivative: ["Derivative", 2, "\\delta"],
          fderivative: ["Derivative", 2, "\\delta"],
          fdv: ["Derivative", 2, "\\delta"],
        },
        o.default
      );
      new n.CommandMap(
        "Physics-bra-ket-macros",
        {
          bra: "Bra",
          ket: "Ket",
          innerproduct: "BraKet",
          ip: "BraKet",
          braket: "BraKet",
          outerproduct: "KetBra",
          dyad: "KetBra",
          ketbra: "KetBra",
          op: "KetBra",
          expectationvalue: "Expectation",
          expval: "Expectation",
          ev: "Expectation",
          matrixelement: "MatrixElement",
          matrixel: "MatrixElement",
          mel: "MatrixElement",
        },
        o.default
      );
      new n.CommandMap(
        "Physics-matrix-macros",
        {
          matrixquantity: "MatrixQuantity",
          mqty: "MatrixQuantity",
          pmqty: ["Macro", "\\mqty(#1)", 1],
          Pmqty: ["Macro", "\\mqty*(#1)", 1],
          bmqty: ["Macro", "\\mqty[#1]", 1],
          vmqty: ["Macro", "\\mqty|#1|", 1],
          smallmatrixquantity: ["MatrixQuantity", true],
          smqty: ["MatrixQuantity", true],
          spmqty: ["Macro", "\\smqty(#1)", 1],
          sPmqty: ["Macro", "\\smqty*(#1)", 1],
          sbmqty: ["Macro", "\\smqty[#1]", 1],
          svmqty: ["Macro", "\\smqty|#1|", 1],
          matrixdeterminant: ["Macro", "\\vmqty{#1}", 1],
          mdet: ["Macro", "\\vmqty{#1}", 1],
          smdet: ["Macro", "\\svmqty{#1}", 1],
          identitymatrix: "IdentityMatrix",
          imat: "IdentityMatrix",
          xmatrix: "XMatrix",
          xmat: "XMatrix",
          zeromatrix: ["Macro", "\\xmat{0}{#1}{#2}", 2],
          zmat: ["Macro", "\\xmat{0}{#1}{#2}", 2],
          paulimatrix: "PauliMatrix",
          pmat: "PauliMatrix",
          diagonalmatrix: "DiagonalMatrix",
          dmat: "DiagonalMatrix",
          antidiagonalmatrix: ["DiagonalMatrix", true],
          admat: ["DiagonalMatrix", true],
        },
        o.default
      );
      new n.EnvironmentMap(
        "Physics-aux-envs",
        s.default.environment,
        { smallmatrix: ["Array", null, null, null, "c", "0.333em", ".2em", "S", 1] },
        o.default
      );
      new n.MacroMap("Physics-characters", { "|": ["AutoClose", l.TEXCLASS.ORD], ")": "AutoClose", "]": "AutoClose" }, o.default);
    },
    66052: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var o = n(r(38364));
      var i = n(r(75845));
      var s = n(r(98770));
      var l = r(80747);
      var u = n(r(6980));
      var c = n(r(72691));
      var f = r(55361);
      var d = {};
      var p = { "(": ")", "[": "]", "{": "}", "|": "|" };
      var m = /^(b|B)i(g{1,2})$/;
      d.Quantity = function (e, t, r, a, n, o, f) {
        if (r === void 0) {
          r = "(";
        }
        if (a === void 0) {
          a = ")";
        }
        if (n === void 0) {
          n = false;
        }
        if (o === void 0) {
          o = "";
        }
        if (f === void 0) {
          f = "";
        }
        var d = n ? e.GetStar() : false;
        var h = e.GetNext();
        var v = e.i;
        var g = null;
        if (h === "\\") {
          e.i++;
          g = e.GetCS();
          if (!g.match(m)) {
            var y = e.create("node", "mrow");
            e.Push(u.default.fenced(e.configuration, r, y, a));
            e.i = v;
            return;
          }
          h = e.GetNext();
        }
        var b = p[h];
        if (n && h !== "{") {
          throw new s.default("MissingArgFor", "Missing argument for %1", e.currentCS);
        }
        if (!b) {
          var y = e.create("node", "mrow");
          e.Push(u.default.fenced(e.configuration, r, y, a));
          e.i = v;
          return;
        }
        if (o) {
          var x = e.create("token", "mi", { texClass: l.TEXCLASS.OP }, o);
          if (f) {
            c.default.setAttribute(x, "mathvariant", f);
          }
          e.Push(e.itemFactory.create("fn", x));
        }
        if (h === "{") {
          var _ = e.GetArgument(t);
          h = n ? r : "\\{";
          b = n ? a : "\\}";
          _ = d ? h + " " + _ + " " + b : g ? "\\" + g + "l" + h + " " + _ + " " + "\\" + g + "r" + b : "\\left" + h + " " + _ + " " + "\\right" + b;
          e.Push(new i.default(_, e.stack.env, e.configuration).mml());
          return;
        }
        if (n) {
          h = r;
          b = a;
        }
        e.i++;
        e.Push(e.itemFactory.create("auto open").setProperties({ open: h, close: b, big: g }));
      };
      d.Eval = function (e, t) {
        var r = e.GetStar();
        var a = e.GetNext();
        if (a === "{") {
          var n = e.GetArgument(t);
          var o = "\\left. " + (r ? "\\smash{" + n + "}" : n) + " " + "\\vphantom{\\int}\\right|";
          e.string = e.string.slice(0, e.i) + o + e.string.slice(e.i);
          return;
        }
        if (a === "(" || a === "[") {
          e.i++;
          e.Push(e.itemFactory.create("auto open").setProperties({ open: a, close: "|", smash: r, right: "\\vphantom{\\int}" }));
          return;
        }
        throw new s.default("MissingArgFor", "Missing argument for %1", e.currentCS);
      };
      d.Commutator = function (e, t, r, a) {
        if (r === void 0) {
          r = "[";
        }
        if (a === void 0) {
          a = "]";
        }
        var n = e.GetStar();
        var o = e.GetNext();
        var l = null;
        if (o === "\\") {
          e.i++;
          l = e.GetCS();
          if (!l.match(m)) {
            throw new s.default("MissingArgFor", "Missing argument for %1", e.currentCS);
          }
          o = e.GetNext();
        }
        if (o !== "{") {
          throw new s.default("MissingArgFor", "Missing argument for %1", e.currentCS);
        }
        var u = e.GetArgument(t);
        var c = e.GetArgument(t);
        var f = u + "," + c;
        f = n ? r + " " + f + " " + a : l ? "\\" + l + "l" + r + " " + f + " " + "\\" + l + "r" + a : "\\left" + r + " " + f + " " + "\\right" + a;
        e.Push(new i.default(f, e.stack.env, e.configuration).mml());
      };
      var h = [65, 90];
      var v = [97, 122];
      var g = [913, 937];
      var y = [945, 969];
      var b = [48, 57];
      function x(e, t) {
        return e >= t[0] && e <= t[1];
      }
      function _(e, t, r, a) {
        var n = e.configuration.parser;
        var o = f.NodeFactory.createToken(e, t, r, a);
        var i = a.codePointAt(0);
        if (
          a.length === 1 &&
          !n.stack.env.font &&
          n.stack.env.vectorFont &&
          (x(i, h) || x(i, v) || x(i, g) || x(i, b) || (x(i, y) && n.stack.env.vectorStar) || c.default.getAttribute(o, "accent"))
        ) {
          c.default.setAttribute(o, "mathvariant", n.stack.env.vectorFont);
        }
        return o;
      }
      d.VectorBold = function (e, t) {
        var r = e.GetStar();
        var a = e.GetArgument(t);
        var n = e.configuration.nodeFactory.get("token");
        var o = e.stack.env.font;
        delete e.stack.env.font;
        e.configuration.nodeFactory.set("token", _);
        e.stack.env.vectorFont = r ? "bold-italic" : "bold";
        e.stack.env.vectorStar = r;
        var s = new i.default(a, e.stack.env, e.configuration).mml();
        if (o) {
          e.stack.env.font = o;
        }
        delete e.stack.env.vectorFont;
        delete e.stack.env.vectorStar;
        e.configuration.nodeFactory.set("token", n);
        e.Push(s);
      };
      d.StarMacro = function (e, t, r) {
        var a = [];
        for (var n = 3; n < arguments.length; n++) {
          a[n - 3] = arguments[n];
        }
        var o = e.GetStar();
        var i = [];
        if (r) {
          for (var s = i.length; s < r; s++) {
            i.push(e.GetArgument(t));
          }
        }
        var l = a.join(o ? "*" : "");
        l = u.default.substituteArgs(e, i, l);
        e.string = u.default.addArgs(e, l, e.string.slice(e.i));
        e.i = 0;
        u.default.checkMaxMacros(e);
      };
      var w = function (e, t, r, a, n) {
        var o = new i.default(a, e.stack.env, e.configuration).mml();
        e.Push(e.itemFactory.create(t, o));
        var s = e.GetNext();
        var l = p[s];
        if (!l) {
          return;
        }
        var u = "",
          c = "",
          f = "";
        var d = n.indexOf(s) !== -1;
        if (s === "{") {
          f = e.GetArgument(r);
          u = d ? "\\left\\{" : "";
          c = d ? "\\right\\}" : "";
          var m = u + " " + f + " " + c;
          e.string = m + e.string.slice(e.i);
          e.i = 0;
          return;
        }
        if (!d) {
          return;
        }
        e.i++;
        e.Push(e.itemFactory.create("auto open").setProperties({ open: s, close: l }));
      };
      d.OperatorApplication = function (e, t, r) {
        var a = [];
        for (var n = 3; n < arguments.length; n++) {
          a[n - 3] = arguments[n];
        }
        w(e, "fn", t, r, a);
      };
      d.VectorOperator = function (e, t, r) {
        var a = [];
        for (var n = 3; n < arguments.length; n++) {
          a[n - 3] = arguments[n];
        }
        w(e, "mml", t, r, a);
      };
      d.Expression = function (e, t, r, a) {
        if (r === void 0) {
          r = true;
        }
        if (a === void 0) {
          a = "";
        }
        a = a || t.slice(1);
        var n = r ? e.GetBrackets(t) : null;
        var o = e.create("token", "mi", { texClass: l.TEXCLASS.OP }, a);
        if (n) {
          var s = new i.default(n, e.stack.env, e.configuration).mml();
          o = e.create("node", "msup", [o, s]);
        }
        e.Push(e.itemFactory.create("fn", o));
        if (e.GetNext() !== "(") {
          return;
        }
        e.i++;
        e.Push(e.itemFactory.create("auto open").setProperties({ open: "(", close: ")" }));
      };
      d.Qqtext = function (e, t, r) {
        var a = e.GetStar();
        var n = r ? r : e.GetArgument(t);
        var o = (a ? "" : "\\quad") + "\\text{" + n + "}\\quad ";
        e.string = e.string.slice(0, e.i) + o + e.string.slice(e.i);
      };
      d.Differential = function (e, t, r) {
        var a = e.GetBrackets(t);
        var n = a != null ? "^{" + a + "}" : " ";
        var o = e.GetNext() === "(";
        var s = e.GetNext() === "{";
        var u = r + n;
        if (!(o || s)) {
          u += e.GetArgument(t, true) || "";
          var c = new i.default(u, e.stack.env, e.configuration).mml();
          e.Push(c);
          return;
        }
        if (s) {
          u += e.GetArgument(t);
          var c = new i.default(u, e.stack.env, e.configuration).mml();
          e.Push(e.create("node", "TeXAtom", [c], { texClass: l.TEXCLASS.OP }));
          return;
        }
        e.Push(new i.default(u, e.stack.env, e.configuration).mml());
        e.i++;
        e.Push(e.itemFactory.create("auto open").setProperties({ open: "(", close: ")" }));
      };
      d.Derivative = function (e, t, r, a) {
        var n = e.GetStar();
        var o = e.GetBrackets(t);
        var s = 1;
        var l = [];
        l.push(e.GetArgument(t));
        while (e.GetNext() === "{" && s < r) {
          l.push(e.GetArgument(t));
          s++;
        }
        var u = false;
        var c = " ";
        var f = " ";
        if (r > 2 && l.length > 2) {
          c = "^{" + (l.length - 1) + "}";
          u = true;
        } else if (o != null) {
          if (r > 2 && l.length > 1) {
            u = true;
          }
          c = "^{" + o + "}";
          f = c;
        }
        var d = n ? "\\flatfrac" : "\\frac";
        var p = l.length > 1 ? l[0] : "";
        var m = l.length > 1 ? l[1] : l[0];
        var h = "";
        for (var v = 2, g = void 0; (g = l[v]); v++) {
          h += a + " " + g;
        }
        var y = d + "{" + a + c + p + "}" + "{" + a + " " + m + f + " " + h + "}";
        e.Push(new i.default(y, e.stack.env, e.configuration).mml());
        if (e.GetNext() === "(") {
          e.i++;
          e.Push(e.itemFactory.create("auto open").setProperties({ open: "(", close: ")", ignore: u }));
        }
      };
      d.Bra = function (e, t) {
        var r = e.GetStar();
        var a = e.GetArgument(t);
        var n = "";
        var o = false;
        var s = false;
        if (e.GetNext() === "\\") {
          var l = e.i;
          e.i++;
          var u = e.GetCS();
          var c = e.lookup("macro", u);
          if (c && c.symbol === "ket") {
            o = true;
            l = e.i;
            s = e.GetStar();
            if (e.GetNext() === "{") {
              n = e.GetArgument(u, true);
            } else {
              e.i = l;
              s = false;
            }
          } else {
            e.i = l;
          }
        }
        var f = "";
        if (o) {
          f =
            r || s
              ? "\\langle{".concat(a, "}\\vert{").concat(n, "}\\rangle")
              : "\\left\\langle{".concat(a, "}\\middle\\vert{").concat(n, "}\\right\\rangle");
        } else {
          f = r || s ? "\\langle{".concat(a, "}\\vert") : "\\left\\langle{".concat(a, "}\\right\\vert{").concat(n, "}");
        }
        e.Push(new i.default(f, e.stack.env, e.configuration).mml());
      };
      d.Ket = function (e, t) {
        var r = e.GetStar();
        var a = e.GetArgument(t);
        var n = r ? "\\vert{".concat(a, "}\\rangle") : "\\left\\vert{".concat(a, "}\\right\\rangle");
        e.Push(new i.default(n, e.stack.env, e.configuration).mml());
      };
      d.BraKet = function (e, t) {
        var r = e.GetStar();
        var a = e.GetArgument(t);
        var n = null;
        if (e.GetNext() === "{") {
          n = e.GetArgument(t, true);
        }
        var o = "";
        if (n == null) {
          o = r
            ? "\\langle{".concat(a, "}\\vert{").concat(a, "}\\rangle")
            : "\\left\\langle{".concat(a, "}\\middle\\vert{").concat(a, "}\\right\\rangle");
        } else {
          o = r
            ? "\\langle{".concat(a, "}\\vert{").concat(n, "}\\rangle")
            : "\\left\\langle{".concat(a, "}\\middle\\vert{").concat(n, "}\\right\\rangle");
        }
        e.Push(new i.default(o, e.stack.env, e.configuration).mml());
      };
      d.KetBra = function (e, t) {
        var r = e.GetStar();
        var a = e.GetArgument(t);
        var n = null;
        if (e.GetNext() === "{") {
          n = e.GetArgument(t, true);
        }
        var o = "";
        if (n == null) {
          o = r
            ? "\\vert{".concat(a, "}\\rangle\\!\\langle{").concat(a, "}\\vert")
            : "\\left\\vert{".concat(a, "}\\middle\\rangle\\!\\middle\\langle{").concat(a, "}\\right\\vert");
        } else {
          o = r
            ? "\\vert{".concat(a, "}\\rangle\\!\\langle{").concat(n, "}\\vert")
            : "\\left\\vert{".concat(a, "}\\middle\\rangle\\!\\middle\\langle{").concat(n, "}\\right\\vert");
        }
        e.Push(new i.default(o, e.stack.env, e.configuration).mml());
      };
      function M(e, t, r) {
        var n = a(e, 3),
          o = n[0],
          i = n[1],
          s = n[2];
        return t && r
          ? "\\left\\langle{".concat(o, "}\\middle\\vert{").concat(i, "}\\middle\\vert{").concat(s, "}\\right\\rangle")
          : t
            ? "\\langle{".concat(o, "}\\vert{").concat(i, "}\\vert{").concat(s, "}\\rangle")
            : "\\left\\langle{".concat(o, "}\\right\\vert{").concat(i, "}\\left\\vert{").concat(s, "}\\right\\rangle");
      }
      d.Expectation = function (e, t) {
        var r = e.GetStar();
        var a = r && e.GetStar();
        var n = e.GetArgument(t);
        var o = null;
        if (e.GetNext() === "{") {
          o = e.GetArgument(t, true);
        }
        var s = n && o ? M([o, n, o], r, a) : r ? "\\langle {".concat(n, "} \\rangle") : "\\left\\langle {".concat(n, "} \\right\\rangle");
        e.Push(new i.default(s, e.stack.env, e.configuration).mml());
      };
      d.MatrixElement = function (e, t) {
        var r = e.GetStar();
        var a = r && e.GetStar();
        var n = e.GetArgument(t);
        var o = e.GetArgument(t);
        var s = e.GetArgument(t);
        var l = M([n, o, s], r, a);
        e.Push(new i.default(l, e.stack.env, e.configuration).mml());
      };
      d.MatrixQuantity = function (e, t, r) {
        var a = e.GetStar();
        var n = e.GetNext();
        var o = r ? "smallmatrix" : "array";
        var s = "";
        var l = "";
        var u = "";
        switch (n) {
          case "{":
            s = e.GetArgument(t);
            break;
          case "(":
            e.i++;
            l = a ? "\\lgroup" : "(";
            u = a ? "\\rgroup" : ")";
            s = e.GetUpTo(t, ")");
            break;
          case "[":
            e.i++;
            l = "[";
            u = "]";
            s = e.GetUpTo(t, "]");
            break;
          case "|":
            e.i++;
            l = "|";
            u = "|";
            s = e.GetUpTo(t, "|");
            break;
          default:
            l = "(";
            u = ")";
            break;
        }
        var c = (l ? "\\left" : "") + l + "\\begin{" + o + "}{} " + s + "\\end{" + o + "}" + (l ? "\\right" : "") + u;
        e.Push(new i.default(c, e.stack.env, e.configuration).mml());
      };
      d.IdentityMatrix = function (e, t) {
        var r = e.GetArgument(t);
        var a = parseInt(r, 10);
        if (isNaN(a)) {
          throw new s.default("InvalidNumber", "Invalid number");
        }
        if (a <= 1) {
          e.string = "1" + e.string.slice(e.i);
          e.i = 0;
          return;
        }
        var n = Array(a).fill("0");
        var o = [];
        for (var i = 0; i < a; i++) {
          var l = n.slice();
          l[i] = "1";
          o.push(l.join(" & "));
        }
        e.string = o.join("\\\\ ") + e.string.slice(e.i);
        e.i = 0;
      };
      d.XMatrix = function (e, t) {
        var r = e.GetStar();
        var a = e.GetArgument(t);
        var n = e.GetArgument(t);
        var o = e.GetArgument(t);
        var i = parseInt(n, 10);
        var l = parseInt(o, 10);
        if (isNaN(i) || isNaN(l) || l.toString() !== o || i.toString() !== n) {
          throw new s.default("InvalidNumber", "Invalid number");
        }
        i = i < 1 ? 1 : i;
        l = l < 1 ? 1 : l;
        if (!r) {
          var u = Array(l).fill(a).join(" & ");
          var c = Array(i).fill(u).join("\\\\ ");
          e.string = c + e.string.slice(e.i);
          e.i = 0;
          return;
        }
        var f = "";
        if (i === 1 && l === 1) {
          f = a;
        } else if (i === 1) {
          var u = [];
          for (var d = 1; d <= l; d++) {
            u.push("".concat(a, "_{").concat(d, "}"));
          }
          f = u.join(" & ");
        } else if (l === 1) {
          var u = [];
          for (var d = 1; d <= i; d++) {
            u.push("".concat(a, "_{").concat(d, "}"));
          }
          f = u.join("\\\\ ");
        } else {
          var p = [];
          for (var d = 1; d <= i; d++) {
            var u = [];
            for (var m = 1; m <= l; m++) {
              u.push("".concat(a, "_{{").concat(d, "}{").concat(m, "}}"));
            }
            p.push(u.join(" & "));
          }
          f = p.join("\\\\ ");
        }
        e.string = f + e.string.slice(e.i);
        e.i = 0;
        return;
      };
      d.PauliMatrix = function (e, t) {
        var r = e.GetArgument(t);
        var a = r.slice(1);
        switch (r[0]) {
          case "0":
            a += " 1 & 0\\\\ 0 & 1";
            break;
          case "1":
          case "x":
            a += " 0 & 1\\\\ 1 & 0";
            break;
          case "2":
          case "y":
            a += " 0 & -i\\\\ i & 0";
            break;
          case "3":
          case "z":
            a += " 1 & 0\\\\ 0 & -1";
            break;
          default:
        }
        e.string = a + e.string.slice(e.i);
        e.i = 0;
      };
      d.DiagonalMatrix = function (e, t, r) {
        if (e.GetNext() !== "{") {
          return;
        }
        var a = e.i;
        e.GetArgument(t);
        var n = e.i;
        e.i = a + 1;
        var o = [];
        var i = "";
        var s = e.i;
        while (s < n) {
          try {
            i = e.GetUpTo(t, ",");
          } catch (l) {
            e.i = n;
            o.push(e.string.slice(s, n - 1));
            break;
          }
          if (e.i >= n) {
            o.push(e.string.slice(s, n));
            break;
          }
          s = e.i;
          o.push(i);
        }
        e.string = A(o, r) + e.string.slice(n);
        e.i = 0;
      };
      function A(e, t) {
        var r = e.length;
        var a = [];
        for (var n = 0; n < r; n++) {
          a.push(Array(t ? r - n : n + 1).join("&") + "\\mqty{" + e[n] + "}");
        }
        return a.join("\\\\ ");
      }
      d.AutoClose = function (e, t, r) {
        var a = e.create("token", "mo", { stretchy: false }, t);
        var n = e.itemFactory.create("mml", a).setProperties({ autoclose: t });
        e.Push(n);
      };
      d.Vnabla = function (e, t) {
        var r = e.options.physics.arrowdel ? "\\vec{\\gradientnabla}" : "{\\gradientnabla}";
        return e.Push(new i.default(r, e.stack.env, e.configuration).mml());
      };
      d.DiffD = function (e, t) {
        var r = e.options.physics.italicdiff ? "d" : "{\\rm d}";
        return e.Push(new i.default(r, e.stack.env, e.configuration).mml());
      };
      d.Macro = o.default.Macro;
      d.NamedFn = o.default.NamedFn;
      d.Array = o.default.Array;
      t["default"] = d;
    },
    91610: function (e, t, r) {
      var a =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.SetOptionsConfiguration = t.SetOptionsUtil = void 0;
      var o = r(56441);
      var i = r(80209);
      var s = n(r(98770));
      var l = n(r(6980));
      var u = r(27151);
      var c = n(r(38364));
      var f = r(34981);
      t.SetOptionsUtil = {
        filterPackage: function (e, t) {
          if (t !== "tex" && !o.ConfigurationHandler.get(t)) {
            throw new s.default("NotAPackage", "Not a defined package: %1", t);
          }
          var r = e.options.setoptions;
          var a = r.allowOptions[t];
          if ((a === undefined && !r.allowPackageDefault) || a === false) {
            throw new s.default("PackageNotSettable", 'Options can\'t be set for package "%1"', t);
          }
          return true;
        },
        filterOption: function (e, t, r) {
          var a;
          var n = e.options.setoptions;
          var o = n.allowOptions[t] || {};
          var i = o.hasOwnProperty(r) && !(0, f.isObject)(o[r]) ? o[r] : null;
          if (i === false || (i === null && !n.allowOptionsDefault)) {
            throw new s.default("OptionNotSettable", 'Option "%1" is not allowed to be set', r);
          }
          if (!((a = t === "tex" ? e.options : e.options[t]) === null || a === void 0 ? void 0 : a.hasOwnProperty(r))) {
            if (t === "tex") {
              throw new s.default("InvalidTexOption", 'Invalid TeX option "%1"', r);
            } else {
              throw new s.default("InvalidOptionKey", 'Invalid option "%1" for package "%2"', r, t);
            }
          }
          return true;
        },
        filterValue: function (e, t, r, a) {
          return a;
        },
      };
      var d = new i.CommandMap(
        "setoptions",
        { setOptions: "SetOptions" },
        {
          SetOptions: function (e, t) {
            var r, n;
            var o = e.GetBrackets(t) || "tex";
            var i = l.default.keyvalOptions(e.GetArgument(t));
            var s = e.options.setoptions;
            if (!s.filterPackage(e, o)) return;
            try {
              for (var u = a(Object.keys(i)), c = u.next(); !c.done; c = u.next()) {
                var f = c.value;
                if (s.filterOption(e, o, f)) {
                  (o === "tex" ? e.options : e.options[o])[f] = s.filterValue(e, o, f, i[f]);
                }
              }
            } catch (d) {
              r = { error: d };
            } finally {
              try {
                if (c && !c.done && (n = u.return)) n.call(u);
              } finally {
                if (r) throw r.error;
              }
            }
          },
        }
      );
      function p(e, t) {
        var r = t.parseOptions.handlers.get("macro").lookup("require");
        if (r) {
          d.add("Require", new u.Macro("Require", r._func));
          d.add("require", new u.Macro("require", c.default.Macro, ["\\Require{#2}\\setOptions[#2]{#1}", 2, ""]));
        }
      }
      t.SetOptionsConfiguration = o.Configuration.create("setoptions", {
        handler: { macro: ["setoptions"] },
        config: p,
        priority: 3,
        options: {
          setoptions: {
            filterPackage: t.SetOptionsUtil.filterPackage,
            filterOption: t.SetOptionsUtil.filterOption,
            filterValue: t.SetOptionsUtil.filterValue,
            allowPackageDefault: true,
            allowOptionsDefault: true,
            allowOptions: (0, f.expandable)({
              tex: {
                FindTeX: false,
                formatError: false,
                package: false,
                baseURL: false,
                tags: false,
                maxBuffer: false,
                maxMaxros: false,
                macros: false,
                environments: false,
              },
              setoptions: false,
              autoload: false,
              require: false,
              configmacros: false,
              tagformat: false,
            }),
          },
        },
      });
    },
    18560: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      Object.defineProperty(t, "__esModule", { value: true });
      t.TagFormatConfiguration = t.tagformatConfig = void 0;
      var n = r(56441);
      var o = r(17782);
      var i = 0;
      function s(e, t) {
        var r = t.parseOptions.options.tags;
        if (r !== "base" && e.tags.hasOwnProperty(r)) {
          o.TagsFactory.add(r, e.tags[r]);
        }
        var n = o.TagsFactory.create(t.parseOptions.options.tags).constructor;
        var s = (function (e) {
          a(r, e);
          function r() {
            return (e !== null && e.apply(this, arguments)) || this;
          }
          r.prototype.formatNumber = function (e) {
            return t.parseOptions.options.tagformat.number(e);
          };
          r.prototype.formatTag = function (e) {
            return t.parseOptions.options.tagformat.tag(e);
          };
          r.prototype.formatId = function (e) {
            return t.parseOptions.options.tagformat.id(e);
          };
          r.prototype.formatUrl = function (e, r) {
            return t.parseOptions.options.tagformat.url(e, r);
          };
          return r;
        })(n);
        i++;
        var l = "configTags-" + i;
        o.TagsFactory.add(l, s);
        t.parseOptions.options.tags = l;
      }
      t.tagformatConfig = s;
      t.TagFormatConfiguration = n.Configuration.create("tagformat", {
        config: [s, 10],
        options: {
          tagformat: {
            number: function (e) {
              return e.toString();
            },
            tag: function (e) {
              return "(" + e + ")";
            },
            id: function (e) {
              return "mjx-eqn:" + e.replace(/\s/g, "_");
            },
            url: function (e, t) {
              return t + "#" + encodeURIComponent(e);
            },
          },
        },
      });
    },
    46370: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.TextcompConfiguration = void 0;
      var a = r(56441);
      r(47173);
      t.TextcompConfiguration = a.Configuration.create("textcomp", { handler: { macro: ["textcomp-macros"] } });
    },
    47173: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(80209);
      var o = r(80469);
      var i = r(56774);
      var s = a(r(6980));
      var l = r(53880);
      new n.CommandMap(
        "textcomp-macros",
        {
          textasciicircum: ["Insert", "^"],
          textasciitilde: ["Insert", "~"],
          textasteriskcentered: ["Insert", "*"],
          textbackslash: ["Insert", "\\"],
          textbar: ["Insert", "|"],
          textbraceleft: ["Insert", "{"],
          textbraceright: ["Insert", "}"],
          textbullet: ["Insert", "•"],
          textdagger: ["Insert", "†"],
          textdaggerdbl: ["Insert", "‡"],
          textellipsis: ["Insert", "…"],
          textemdash: ["Insert", "—"],
          textendash: ["Insert", "–"],
          textexclamdown: ["Insert", "¡"],
          textgreater: ["Insert", ">"],
          textless: ["Insert", "<"],
          textordfeminine: ["Insert", "ª"],
          textordmasculine: ["Insert", "º"],
          textparagraph: ["Insert", "¶"],
          textperiodcentered: ["Insert", "·"],
          textquestiondown: ["Insert", "¿"],
          textquotedblleft: ["Insert", "“"],
          textquotedblright: ["Insert", "”"],
          textquoteleft: ["Insert", "‘"],
          textquoteright: ["Insert", "’"],
          textsection: ["Insert", "§"],
          textunderscore: ["Insert", "_"],
          textvisiblespace: ["Insert", "␣"],
          textacutedbl: ["Insert", "˝"],
          textasciiacute: ["Insert", "´"],
          textasciibreve: ["Insert", "˘"],
          textasciicaron: ["Insert", "ˇ"],
          textasciidieresis: ["Insert", "¨"],
          textasciimacron: ["Insert", "¯"],
          textgravedbl: ["Insert", "˵"],
          texttildelow: ["Insert", "˷"],
          textbaht: ["Insert", "฿"],
          textcent: ["Insert", "¢"],
          textcolonmonetary: ["Insert", "₡"],
          textcurrency: ["Insert", "¤"],
          textdollar: ["Insert", "$"],
          textdong: ["Insert", "₫"],
          texteuro: ["Insert", "€"],
          textflorin: ["Insert", "ƒ"],
          textguarani: ["Insert", "₲"],
          textlira: ["Insert", "₤"],
          textnaira: ["Insert", "₦"],
          textpeso: ["Insert", "₱"],
          textsterling: ["Insert", "£"],
          textwon: ["Insert", "₩"],
          textyen: ["Insert", "¥"],
          textcircledP: ["Insert", "℗"],
          textcompwordmark: ["Insert", "‌"],
          textcopyleft: ["Insert", "🄯"],
          textcopyright: ["Insert", "©"],
          textregistered: ["Insert", "®"],
          textservicemark: ["Insert", "℠"],
          texttrademark: ["Insert", "™"],
          textbardbl: ["Insert", "‖"],
          textbigcircle: ["Insert", "◯"],
          textblank: ["Insert", "␢"],
          textbrokenbar: ["Insert", "¦"],
          textdiscount: ["Insert", "⁒"],
          textestimated: ["Insert", "℮"],
          textinterrobang: ["Insert", "‽"],
          textinterrobangdown: ["Insert", "⸘"],
          textmusicalnote: ["Insert", "♪"],
          textnumero: ["Insert", "№"],
          textopenbullet: ["Insert", "◦"],
          textpertenthousand: ["Insert", "‱"],
          textperthousand: ["Insert", "‰"],
          textrecipe: ["Insert", "℞"],
          textreferencemark: ["Insert", "※"],
          textlangle: ["Insert", "〈"],
          textrangle: ["Insert", "〉"],
          textlbrackdbl: ["Insert", "⟦"],
          textrbrackdbl: ["Insert", "⟧"],
          textlquill: ["Insert", "⁅"],
          textrquill: ["Insert", "⁆"],
          textcelsius: ["Insert", "℃"],
          textdegree: ["Insert", "°"],
          textdiv: ["Insert", "÷"],
          textdownarrow: ["Insert", "↓"],
          textfractionsolidus: ["Insert", "⁄"],
          textleftarrow: ["Insert", "←"],
          textlnot: ["Insert", "¬"],
          textmho: ["Insert", "℧"],
          textminus: ["Insert", "−"],
          textmu: ["Insert", "µ"],
          textohm: ["Insert", "Ω"],
          textonehalf: ["Insert", "½"],
          textonequarter: ["Insert", "¼"],
          textonesuperior: ["Insert", "¹"],
          textpm: ["Insert", "±"],
          textrightarrow: ["Insert", "→"],
          textsurd: ["Insert", "√"],
          textthreequarters: ["Insert", "¾"],
          textthreesuperior: ["Insert", "³"],
          texttimes: ["Insert", "×"],
          texttwosuperior: ["Insert", "²"],
          textuparrow: ["Insert", "↑"],
          textborn: ["Insert", "*"],
          textdied: ["Insert", "†"],
          textdivorced: ["Insert", "⚮"],
          textmarried: ["Insert", "⚭"],
          textcentoldstyle: ["Insert", "¢", o.TexConstant.Variant.OLDSTYLE],
          textdollaroldstyle: ["Insert", "$", o.TexConstant.Variant.OLDSTYLE],
          textzerooldstyle: ["Insert", "0", o.TexConstant.Variant.OLDSTYLE],
          textoneoldstyle: ["Insert", "1", o.TexConstant.Variant.OLDSTYLE],
          texttwooldstyle: ["Insert", "2", o.TexConstant.Variant.OLDSTYLE],
          textthreeoldstyle: ["Insert", "3", o.TexConstant.Variant.OLDSTYLE],
          textfouroldstyle: ["Insert", "4", o.TexConstant.Variant.OLDSTYLE],
          textfiveoldstyle: ["Insert", "5", o.TexConstant.Variant.OLDSTYLE],
          textsixoldstyle: ["Insert", "6", o.TexConstant.Variant.OLDSTYLE],
          textsevenoldstyle: ["Insert", "7", o.TexConstant.Variant.OLDSTYLE],
          texteightoldstyle: ["Insert", "8", o.TexConstant.Variant.OLDSTYLE],
          textnineoldstyle: ["Insert", "9", o.TexConstant.Variant.OLDSTYLE],
        },
        {
          Insert: function (e, t, r, a) {
            if (e instanceof l.TextParser) {
              if (!a) {
                i.TextMacrosMethods.Insert(e, t, r);
                return;
              }
              e.saveText();
            }
            e.Push(s.default.internalText(e, r, a ? { mathvariant: a } : {}));
          },
        }
      );
    },
    29302: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var n;
      Object.defineProperty(t, "__esModule", { value: true });
      t.TextMacrosConfiguration = t.TextBaseConfiguration = void 0;
      var o = r(56441);
      var i = a(r(24404));
      var s = r(17782);
      var l = r(94650);
      var u = r(53880);
      var c = r(56774);
      r(5705);
      t.TextBaseConfiguration = o.Configuration.create("text-base", {
        parser: "text",
        handler: { character: ["command", "text-special"], macro: ["text-macros"] },
        fallback: {
          character: function (e, t) {
            e.text += t;
          },
          macro: function (e, t) {
            var r = e.texParser;
            var a = r.lookup("macro", t);
            if (a && a._func !== c.TextMacrosMethods.Macro) {
              e.Error("MathMacro", "%1 is only supported in math mode", "\\" + t);
            }
            r.parse("macro", [e, t]);
          },
        },
        items:
          ((n = {}),
          (n[l.StartItem.prototype.kind] = l.StartItem),
          (n[l.StopItem.prototype.kind] = l.StopItem),
          (n[l.MmlItem.prototype.kind] = l.MmlItem),
          (n[l.StyleItem.prototype.kind] = l.StyleItem),
          n),
      });
      function f(e, t, r, a) {
        var n = e.configuration.packageData.get("textmacros");
        if (!(e instanceof u.TextParser)) {
          n.texParser = e;
        }
        return [new u.TextParser(t, a ? { mathvariant: a } : {}, n.parseOptions, r).mml()];
      }
      t.TextMacrosConfiguration = o.Configuration.create("textmacros", {
        config: function (e, t) {
          var r = new o.ParserConfiguration(t.parseOptions.options.textmacros.packages, ["tex", "text"]);
          r.init();
          var a = new i.default(r, []);
          a.options = t.parseOptions.options;
          r.config(t);
          s.TagsFactory.addTags(r.tags);
          a.tags = s.TagsFactory.getDefault();
          a.tags.configuration = a;
          a.packageData = t.parseOptions.packageData;
          a.packageData.set("textmacros", { parseOptions: a, jax: t, texParser: null });
          a.options.internalMath = f;
        },
        preprocessors: [
          function (e) {
            var t = e.data.packageData.get("textmacros");
            t.parseOptions.nodeFactory.setMmlFactory(t.jax.mmlFactory);
          },
        ],
        options: { textmacros: { packages: ["text-base"] } },
      });
    },
    5705: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      var a = r(80209);
      var n = r(80469);
      var o = r(56774);
      var i = r(86810);
      new a.MacroMap(
        "text-special",
        {
          $: "Math",
          "%": "Comment",
          "^": "MathModeOnly",
          _: "MathModeOnly",
          "&": "Misplaced",
          "#": "Misplaced",
          "~": "Tilde",
          " ": "Space",
          "\t": "Space",
          "\r": "Space",
          "\n": "Space",
          " ": "Tilde",
          "{": "OpenBrace",
          "}": "CloseBrace",
          "`": "OpenQuote",
          "'": "CloseQuote",
        },
        o.TextMacrosMethods
      );
      new a.CommandMap(
        "text-macros",
        {
          "(": "Math",
          $: "SelfQuote",
          _: "SelfQuote",
          "%": "SelfQuote",
          "{": "SelfQuote",
          "}": "SelfQuote",
          " ": "SelfQuote",
          "&": "SelfQuote",
          "#": "SelfQuote",
          "\\": "SelfQuote",
          "'": ["Accent", "´"],
          "’": ["Accent", "´"],
          "`": ["Accent", "`"],
          "‘": ["Accent", "`"],
          "^": ["Accent", "^"],
          '"': ["Accent", "¨"],
          "~": ["Accent", "~"],
          "=": ["Accent", "¯"],
          ".": ["Accent", "˙"],
          u: ["Accent", "˘"],
          v: ["Accent", "ˇ"],
          emph: "Emph",
          rm: ["SetFont", n.TexConstant.Variant.NORMAL],
          mit: ["SetFont", n.TexConstant.Variant.ITALIC],
          oldstyle: ["SetFont", n.TexConstant.Variant.OLDSTYLE],
          cal: ["SetFont", n.TexConstant.Variant.CALLIGRAPHIC],
          it: ["SetFont", "-tex-mathit"],
          bf: ["SetFont", n.TexConstant.Variant.BOLD],
          bbFont: ["SetFont", n.TexConstant.Variant.DOUBLESTRUCK],
          scr: ["SetFont", n.TexConstant.Variant.SCRIPT],
          frak: ["SetFont", n.TexConstant.Variant.FRAKTUR],
          sf: ["SetFont", n.TexConstant.Variant.SANSSERIF],
          tt: ["SetFont", n.TexConstant.Variant.MONOSPACE],
          tiny: ["SetSize", 0.5],
          Tiny: ["SetSize", 0.6],
          scriptsize: ["SetSize", 0.7],
          small: ["SetSize", 0.85],
          normalsize: ["SetSize", 1],
          large: ["SetSize", 1.2],
          Large: ["SetSize", 1.44],
          LARGE: ["SetSize", 1.73],
          huge: ["SetSize", 2.07],
          Huge: ["SetSize", 2.49],
          Bbb: ["Macro", "{\\bbFont #1}", 1],
          textnormal: ["Macro", "{\\rm #1}", 1],
          textup: ["Macro", "{\\rm #1}", 1],
          textrm: ["Macro", "{\\rm #1}", 1],
          textit: ["Macro", "{\\it #1}", 1],
          textbf: ["Macro", "{\\bf #1}", 1],
          textsf: ["Macro", "{\\sf #1}", 1],
          texttt: ["Macro", "{\\tt #1}", 1],
          dagger: ["Insert", "†"],
          ddagger: ["Insert", "‡"],
          S: ["Insert", "§"],
          ",": ["Spacer", i.MATHSPACE.thinmathspace],
          ":": ["Spacer", i.MATHSPACE.mediummathspace],
          ">": ["Spacer", i.MATHSPACE.mediummathspace],
          ";": ["Spacer", i.MATHSPACE.thickmathspace],
          "!": ["Spacer", i.MATHSPACE.negativethinmathspace],
          enspace: ["Spacer", 0.5],
          quad: ["Spacer", 1],
          qquad: ["Spacer", 2],
          thinspace: ["Spacer", i.MATHSPACE.thinmathspace],
          negthinspace: ["Spacer", i.MATHSPACE.negativethinmathspace],
          hskip: "Hskip",
          hspace: "Hskip",
          kern: "Hskip",
          mskip: "Hskip",
          mspace: "Hskip",
          mkern: "Hskip",
          rule: "rule",
          Rule: ["Rule"],
          Space: ["Rule", "blank"],
          color: "CheckAutoload",
          textcolor: "CheckAutoload",
          colorbox: "CheckAutoload",
          fcolorbox: "CheckAutoload",
          href: "CheckAutoload",
          style: "CheckAutoload",
          class: "CheckAutoload",
          cssId: "CheckAutoload",
          unicode: "CheckAutoload",
          ref: ["HandleRef", false],
          eqref: ["HandleRef", true],
        },
        o.TextMacrosMethods
      );
    },
    56774: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.TextMacrosMethods = void 0;
      var n = a(r(75845));
      var o = r(9841);
      var i = a(r(38364));
      t.TextMacrosMethods = {
        Comment: function (e, t) {
          while (e.i < e.string.length && e.string.charAt(e.i) !== "\n") {
            e.i++;
          }
          e.i++;
        },
        Math: function (e, t) {
          e.saveText();
          var r = e.i;
          var a, o;
          var i = 0;
          while ((o = e.GetNext())) {
            a = e.i++;
            switch (o) {
              case "\\":
                var s = e.GetCS();
                if (s === ")") o = "\\(";
              case "$":
                if (i === 0 && t === o) {
                  var l = e.texParser.configuration;
                  var u = new n.default(e.string.substr(r, a - r), e.stack.env, l).mml();
                  e.PushMath(u);
                  return;
                }
                break;
              case "{":
                i++;
                break;
              case "}":
                if (i === 0) {
                  e.Error("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
                }
                i--;
                break;
            }
          }
          e.Error("MathNotTerminated", "Math-mode is not properly terminated");
        },
        MathModeOnly: function (e, t) {
          e.Error("MathModeOnly", "'%1' allowed only in math mode", t);
        },
        Misplaced: function (e, t) {
          e.Error("Misplaced", "'%1' can not be used here", t);
        },
        OpenBrace: function (e, t) {
          var r = e.stack.env;
          e.envStack.push(r);
          e.stack.env = Object.assign({}, r);
        },
        CloseBrace: function (e, t) {
          if (e.envStack.length) {
            e.saveText();
            e.stack.env = e.envStack.pop();
          } else {
            e.Error("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
          }
        },
        OpenQuote: function (e, t) {
          if (e.string.charAt(e.i) === t) {
            e.text += "“";
            e.i++;
          } else {
            e.text += "‘";
          }
        },
        CloseQuote: function (e, t) {
          if (e.string.charAt(e.i) === t) {
            e.text += "”";
            e.i++;
          } else {
            e.text += "’";
          }
        },
        Tilde: function (e, t) {
          e.text += " ";
        },
        Space: function (e, t) {
          e.text += " ";
          while (e.GetNext().match(/\s/)) e.i++;
        },
        SelfQuote: function (e, t) {
          e.text += t.substr(1);
        },
        Insert: function (e, t, r) {
          e.text += r;
        },
        Accent: function (e, t, r) {
          var a = e.ParseArg(t);
          var n = e.create("token", "mo", {}, r);
          e.addAttributes(n);
          e.Push(e.create("node", "mover", [a, n]));
        },
        Emph: function (e, t) {
          var r = e.stack.env.mathvariant === "-tex-mathit" ? "normal" : "-tex-mathit";
          e.Push(e.ParseTextArg(t, { mathvariant: r }));
        },
        SetFont: function (e, t, r) {
          e.saveText();
          e.stack.env.mathvariant = r;
        },
        SetSize: function (e, t, r) {
          e.saveText();
          e.stack.env.mathsize = r;
        },
        CheckAutoload: function (e, t) {
          var r = e.configuration.packageData.get("autoload");
          var a = e.texParser;
          t = t.slice(1);
          var n = a.lookup("macro", t);
          if (!n || (r && n._func === r.Autoload)) {
            a.parse("macro", [a, t]);
            if (!n) return;
            (0, o.retryAfter)(Promise.resolve());
          }
          a.parse("macro", [e, t]);
        },
        Macro: i.default.Macro,
        Spacer: i.default.Spacer,
        Hskip: i.default.Hskip,
        rule: i.default.rule,
        Rule: i.default.Rule,
        HandleRef: i.default.HandleRef,
      };
    },
    53880: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var o =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            o = [],
            i;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) o.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
      var i =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, o; a < n; a++) {
              if (o || !(a in t)) {
                if (!o) o = Array.prototype.slice.call(t, 0, a);
                o[a] = t[a];
              }
            }
          return e.concat(o || Array.prototype.slice.call(t));
        };
      var s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.TextParser = void 0;
      var l = s(r(75845));
      var u = s(r(98770));
      var c = s(r(6980));
      var f = r(80747);
      var d = s(r(72691));
      var p = r(94650);
      var m = (function (e) {
        a(t, e);
        function t(t, r, a, n) {
          var o = e.call(this, t, r, a) || this;
          o.level = n;
          return o;
        }
        Object.defineProperty(t.prototype, "texParser", {
          get: function () {
            return this.configuration.packageData.get("textmacros").texParser;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "tags", {
          get: function () {
            return this.texParser.tags;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.mml = function () {
          return this.level != null
            ? this.create("node", "mstyle", this.nodes, { displaystyle: false, scriptlevel: this.level })
            : this.nodes.length === 1
              ? this.nodes[0]
              : this.create("node", "mrow", this.nodes);
        };
        t.prototype.Parse = function () {
          this.text = "";
          this.nodes = [];
          this.envStack = [];
          e.prototype.Parse.call(this);
        };
        t.prototype.saveText = function () {
          if (this.text) {
            var e = this.stack.env.mathvariant;
            var t = c.default.internalText(this, this.text, e ? { mathvariant: e } : {});
            this.text = "";
            this.Push(t);
          }
        };
        t.prototype.Push = function (t) {
          if (this.text) {
            this.saveText();
          }
          if (t instanceof p.StopItem) {
            return e.prototype.Push.call(this, t);
          }
          if (t instanceof p.StyleItem) {
            this.stack.env.mathcolor = this.stack.env.color;
            return;
          }
          if (t instanceof f.AbstractMmlNode) {
            this.addAttributes(t);
            this.nodes.push(t);
          }
        };
        t.prototype.PushMath = function (e) {
          var t, r;
          var a = this.stack.env;
          if (!e.isKind("TeXAtom")) {
            e = this.create("node", "TeXAtom", [e]);
          }
          try {
            for (var o = n(["mathsize", "mathcolor"]), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              if (a[s] && !e.attributes.getExplicit(s)) {
                if (!e.isToken && !e.isKind("mstyle")) {
                  e = this.create("node", "mstyle", [e]);
                }
                d.default.setAttribute(e, s, a[s]);
              }
            }
          } catch (l) {
            t = { error: l };
          } finally {
            try {
              if (i && !i.done && (r = o.return)) r.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          if (e.isInferred) {
            e = this.create("node", "mrow", e.childNodes);
          }
          this.nodes.push(e);
        };
        t.prototype.addAttributes = function (e) {
          var t, r;
          var a = this.stack.env;
          if (!e.isToken) return;
          try {
            for (var o = n(["mathsize", "mathcolor", "mathvariant"]), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              if (a[s] && !e.attributes.getExplicit(s)) {
                d.default.setAttribute(e, s, a[s]);
              }
            }
          } catch (l) {
            t = { error: l };
          } finally {
            try {
              if (i && !i.done && (r = o.return)) r.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        t.prototype.ParseTextArg = function (e, r) {
          var a = this.GetArgument(e);
          r = Object.assign(Object.assign({}, this.stack.env), r);
          return new t(a, r, this.configuration).mml();
        };
        t.prototype.ParseArg = function (e) {
          return new t(this.GetArgument(e), this.stack.env, this.configuration).mml();
        };
        t.prototype.Error = function (e, t) {
          var r = [];
          for (var a = 2; a < arguments.length; a++) {
            r[a - 2] = arguments[a];
          }
          throw new (u.default.bind.apply(u.default, i([void 0, e, t], o(r), false)))();
        };
        return t;
      })(l.default);
      t.TextParser = m;
    },
    69112: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.UnicodeConfiguration = t.UnicodeMethods = void 0;
      var n = r(56441);
      var o = a(r(98770));
      var i = r(80209);
      var s = a(r(6980));
      var l = a(r(72691));
      var u = r(38316);
      t.UnicodeMethods = {};
      var c = {};
      t.UnicodeMethods.Unicode = function (e, t) {
        var r = e.GetBrackets(t);
        var a = null;
        var n = null;
        if (r) {
          if (r.replace(/ /g, "").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)) {
            a = r.replace(/ /g, "").split(/,/);
            n = e.GetBrackets(t);
          } else {
            n = r;
          }
        }
        var i = s.default.trimSpaces(e.GetArgument(t)).replace(/^0x/, "x");
        if (!i.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/)) {
          throw new o.default("BadUnicode", "Argument to \\unicode must be a number");
        }
        var f = parseInt(i.match(/^x/) ? "0" + i : i);
        if (!c[f]) {
          c[f] = [800, 200, n, f];
        } else if (!n) {
          n = c[f][2];
        }
        if (a) {
          c[f][0] = Math.floor(parseFloat(a[0]) * 1e3);
          c[f][1] = Math.floor(parseFloat(a[1]) * 1e3);
        }
        var d = e.stack.env.font;
        var p = {};
        if (n) {
          c[f][2] = p.fontfamily = n.replace(/'/g, "'");
          if (d) {
            if (d.match(/bold/)) {
              p.fontweight = "bold";
            }
            if (d.match(/italic|-mathit/)) {
              p.fontstyle = "italic";
            }
          }
        } else if (d) {
          p.mathvariant = d;
        }
        var m = e.create("token", "mtext", p, (0, u.numeric)(i));
        l.default.setProperty(m, "unicode", true);
        e.Push(m);
      };
      new i.CommandMap("unicode", { unicode: "Unicode" }, t.UnicodeMethods);
      t.UnicodeConfiguration = n.Configuration.create("unicode", { handler: { macro: ["unicode"] } });
    },
    82736: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.UpgreekConfiguration = void 0;
      var a = r(56441);
      var n = r(80209);
      var o = r(80469);
      function i(e, t) {
        var r = t.attributes || {};
        r.mathvariant = o.TexConstant.Variant.NORMAL;
        var a = e.create("token", "mi", r, t.char);
        e.Push(a);
      }
      new n.CharacterMap("upgreek", i, {
        upalpha: "α",
        upbeta: "β",
        upgamma: "γ",
        updelta: "δ",
        upepsilon: "ϵ",
        upzeta: "ζ",
        upeta: "η",
        uptheta: "θ",
        upiota: "ι",
        upkappa: "κ",
        uplambda: "λ",
        upmu: "μ",
        upnu: "ν",
        upxi: "ξ",
        upomicron: "ο",
        uppi: "π",
        uprho: "ρ",
        upsigma: "σ",
        uptau: "τ",
        upupsilon: "υ",
        upphi: "ϕ",
        upchi: "χ",
        uppsi: "ψ",
        upomega: "ω",
        upvarepsilon: "ε",
        upvartheta: "ϑ",
        upvarpi: "ϖ",
        upvarrho: "ϱ",
        upvarsigma: "ς",
        upvarphi: "φ",
        Upgamma: "Γ",
        Updelta: "Δ",
        Uptheta: "Θ",
        Uplambda: "Λ",
        Upxi: "Ξ",
        Uppi: "Π",
        Upsigma: "Σ",
        Upupsilon: "Υ",
        Upphi: "Φ",
        Uppsi: "Ψ",
        Upomega: "Ω",
      });
      t.UpgreekConfiguration = a.Configuration.create("upgreek", { handler: { macro: ["upgreek"] } });
    },
    22232: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.VerbConfiguration = t.VerbMethods = void 0;
      var n = r(56441);
      var o = r(80469);
      var i = r(80209);
      var s = a(r(98770));
      t.VerbMethods = {};
      t.VerbMethods.Verb = function (e, t) {
        var r = e.GetNext();
        var a = ++e.i;
        if (r === "") {
          throw new s.default("MissingArgFor", "Missing argument for %1", t);
        }
        while (e.i < e.string.length && e.string.charAt(e.i) !== r) {
          e.i++;
        }
        if (e.i === e.string.length) {
          throw new s.default("NoClosingDelim", "Can't find closing delimiter for %1", e.currentCS);
        }
        var n = e.string.slice(a, e.i).replace(/ /g, " ");
        e.i++;
        e.Push(e.create("token", "mtext", { mathvariant: o.TexConstant.Variant.MONOSPACE }, n));
      };
      new i.CommandMap("verb", { verb: "Verb" }, t.VerbMethods);
      t.VerbConfiguration = n.Configuration.create("verb", { handler: { macro: ["verb"] } });
    },
    62691: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.mhchemParser = void 0;
      var r = (function () {
        function e() {}
        e.toTex = function (e, t) {
          return o.go(n.go(e, t), t !== "tex");
        };
        return e;
      })();
      t.mhchemParser = r;
      function a(e) {
        var t, r;
        var a = {};
        for (t in e) {
          for (r in e[t]) {
            var n = r.split("|");
            e[t][r].stateArray = n;
            for (var o = 0; o < n.length; o++) {
              a[n[o]] = [];
            }
          }
        }
        for (t in e) {
          for (r in e[t]) {
            var n = e[t][r].stateArray || [];
            for (var o = 0; o < n.length; o++) {
              var i = e[t][r];
              i.action_ = [].concat(i.action_);
              for (var s = 0; s < i.action_.length; s++) {
                if (typeof i.action_[s] === "string") {
                  i.action_[s] = { type_: i.action_[s] };
                }
              }
              var l = t.split("|");
              for (var u = 0; u < l.length; u++) {
                if (n[o] === "*") {
                  var c = void 0;
                  for (c in a) {
                    a[c].push({ pattern: l[u], task: i });
                  }
                } else {
                  a[n[o]].push({ pattern: l[u], task: i });
                }
              }
            }
          }
        }
        return a;
      }
      var n = {
        go: function (e, t) {
          if (!e) {
            return [];
          }
          if (t === undefined) {
            t = "ce";
          }
          var r = "0";
          var a = {};
          a["parenthesisLevel"] = 0;
          e = e.replace(/\n/g, " ");
          e = e.replace(/[\u2212\u2013\u2014\u2010]/g, "-");
          e = e.replace(/[\u2026]/g, "...");
          var o;
          var i = 10;
          var s = [];
          while (true) {
            if (o !== e) {
              i = 10;
              o = e;
            } else {
              i--;
            }
            var l = n.stateMachines[t];
            var u = l.transitions[r] || l.transitions["*"];
            e: for (var c = 0; c < u.length; c++) {
              var f = n.patterns.match_(u[c].pattern, e);
              if (f) {
                var d = u[c].task;
                for (var p = 0; p < d.action_.length; p++) {
                  var m = void 0;
                  if (l.actions[d.action_[p].type_]) {
                    m = l.actions[d.action_[p].type_](a, f.match_, d.action_[p].option);
                  } else if (n.actions[d.action_[p].type_]) {
                    m = n.actions[d.action_[p].type_](a, f.match_, d.action_[p].option);
                  } else {
                    throw ["MhchemBugA", "mhchem bug A. Please report. (" + d.action_[p].type_ + ")"];
                  }
                  n.concatArray(s, m);
                }
                r = d.nextState || r;
                if (e.length > 0) {
                  if (!d.revisit) {
                    e = f.remainder;
                  }
                  if (!d.toContinue) {
                    break e;
                  }
                } else {
                  return s;
                }
              }
            }
            if (i <= 0) {
              throw ["MhchemBugU", "mhchem bug U. Please report."];
            }
          }
        },
        concatArray: function (e, t) {
          if (t) {
            if (Array.isArray(t)) {
              for (var r = 0; r < t.length; r++) {
                e.push(t[r]);
              }
            } else {
              e.push(t);
            }
          }
        },
        patterns: {
          patterns: {
            empty: /^$/,
            else: /^./,
            else2: /^./,
            space: /^\s/,
            "space A": /^\s(?=[A-Z\\$])/,
            space$: /^\s$/,
            "a-z": /^[a-z]/,
            x: /^x/,
            x$: /^x$/,
            i$: /^i$/,
            letters:
              /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,
            "\\greek":
              /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,
            "one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/,
            "$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,
            "one lowercase greek letter $":
              /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,
            digits: /^[0-9]+/,
            "-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,
            "-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/,
            "(-)(9.,9)(e)(99)": function (e) {
              var t = e.match(
                /^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:(?:([eE])|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/
              );
              if (t && t[0]) {
                return { match_: t.slice(1), remainder: e.substr(t[0].length) };
              }
              return null;
            },
            "(-)(9)^(-9)": /^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/,
            "state of aggregation $": function (e) {
              var t = n.patterns.findObserveGroups(e, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");
              if (t && t.remainder.match(/^($|[\s,;\)\]\}])/)) {
                return t;
              }
              var r = e.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
              if (r) {
                return { match_: r[0], remainder: e.substr(r[0].length) };
              }
              return null;
            },
            "_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/,
            "{[(": /^(?:\\\{|\[|\()/,
            ")]}": /^(?:\)|\]|\\\})/,
            ", ": /^[,;]\s*/,
            ",": /^[,;]/,
            ".": /^[.]/,
            ". __* ": /^([.\u22C5\u00B7\u2022]|[*])\s*/,
            "...": /^\.\.\.(?=$|[^.])/,
            "^{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "^{", "", "", "}");
            },
            "^($...$)": function (e) {
              return n.patterns.findObserveGroups(e, "^", "$", "$", "");
            },
            "^a": /^\^([0-9]+|[^\\_])/,
            "^\\x{}{}": function (e) {
              return n.patterns.findObserveGroups(e, "^", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true);
            },
            "^\\x{}": function (e) {
              return n.patterns.findObserveGroups(e, "^", /^\\[a-zA-Z]+\{/, "}", "");
            },
            "^\\x": /^\^(\\[a-zA-Z]+)\s*/,
            "^(-1)": /^\^(-?\d+)/,
            "'": /^'/,
            "_{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "_{", "", "", "}");
            },
            "_($...$)": function (e) {
              return n.patterns.findObserveGroups(e, "_", "$", "$", "");
            },
            _9: /^_([+\-]?[0-9]+|[^\\])/,
            "_\\x{}{}": function (e) {
              return n.patterns.findObserveGroups(e, "_", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true);
            },
            "_\\x{}": function (e) {
              return n.patterns.findObserveGroups(e, "_", /^\\[a-zA-Z]+\{/, "}", "");
            },
            "_\\x": /^_(\\[a-zA-Z]+)\s*/,
            "^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,
            "{}^": /^\{\}(?=\^)/,
            "{}": /^\{\}/,
            "{...}": function (e) {
              return n.patterns.findObserveGroups(e, "", "{", "}", "");
            },
            "{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "{", "", "", "}");
            },
            "$...$": function (e) {
              return n.patterns.findObserveGroups(e, "", "$", "$", "");
            },
            "${(...)}$__$(...)$": function (e) {
              return n.patterns.findObserveGroups(e, "${", "", "", "}$") || n.patterns.findObserveGroups(e, "$", "", "", "$");
            },
            "=<>": /^[=<>]/,
            "#": /^[#\u2261]/,
            "+": /^\+/,
            "-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/,
            "-9": /^-(?=[0-9])/,
            "- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,
            "-": /^-/,
            "pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,
            operator: /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,
            arrowUpDown: /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,
            "\\bond{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\bond{", "", "", "}");
            },
            "->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
            CMT: /^[CMT](?=\[)/,
            "[(...)]": function (e) {
              return n.patterns.findObserveGroups(e, "[", "", "", "]");
            },
            "1st-level escape": /^(&|\\\\|\\hline)\s*/,
            "\\,": /^(?:\\[,\ ;:])/,
            "\\x{}{}": function (e) {
              return n.patterns.findObserveGroups(e, "", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true);
            },
            "\\x{}": function (e) {
              return n.patterns.findObserveGroups(e, "", /^\\[a-zA-Z]+\{/, "}", "");
            },
            "\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/,
            "\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,
            orbital: /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,
            others: /^[\/~|]/,
            "\\frac{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\frac{", "", "", "}", "{", "", "", "}");
            },
            "\\overset{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\overset{", "", "", "}", "{", "", "", "}");
            },
            "\\underset{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\underset{", "", "", "}", "{", "", "", "}");
            },
            "\\underbrace{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\underbrace{", "", "", "}_", "{", "", "", "}");
            },
            "\\color{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\color{", "", "", "}");
            },
            "\\color{(...)}{(...)}": function (e) {
              return (
                n.patterns.findObserveGroups(e, "\\color{", "", "", "}", "{", "", "", "}") ||
                n.patterns.findObserveGroups(e, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}")
              );
            },
            "\\ce{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\ce{", "", "", "}");
            },
            "\\pu{(...)}": function (e) {
              return n.patterns.findObserveGroups(e, "\\pu{", "", "", "}");
            },
            oxidation$: /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
            "d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
            "roman numeral": /^[IVX]+/,
            "1/2$": /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,
            amount: function (e) {
              var t;
              t = e.match(
                /^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/
              );
              if (t) {
                return { match_: t[0], remainder: e.substr(t[0].length) };
              }
              var r = n.patterns.findObserveGroups(e, "", "$", "$", "");
              if (r) {
                t = r.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/);
                if (t) {
                  return { match_: t[0], remainder: e.substr(t[0].length) };
                }
              }
              return null;
            },
            amount2: function (e) {
              return this["amount"](e);
            },
            "(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/,
            formula$: function (e) {
              if (e.match(/^\([a-z]+\)$/)) {
                return null;
              }
              var t = e.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);
              if (t) {
                return { match_: t[0], remainder: e.substr(t[0].length) };
              }
              return null;
            },
            uprightEntities: /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,
            "/": /^\s*(\/)\s*/,
            "//": /^\s*(\/\/)\s*/,
            "*": /^\s*[*.]\s*/,
          },
          findObserveGroups: function (e, t, r, a, n, o, i, s, l, u) {
            var c = function (e, t) {
              if (typeof t === "string") {
                if (e.indexOf(t) !== 0) {
                  return null;
                }
                return t;
              } else {
                var r = e.match(t);
                if (!r) {
                  return null;
                }
                return r[0];
              }
            };
            var f = function (e, t, r) {
              var a = 0;
              while (t < e.length) {
                var n = e.charAt(t);
                var o = c(e.substr(t), r);
                if (o !== null && a === 0) {
                  return { endMatchBegin: t, endMatchEnd: t + o.length };
                } else if (n === "{") {
                  a++;
                } else if (n === "}") {
                  if (a === 0) {
                    throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
                  } else {
                    a--;
                  }
                }
                t++;
              }
              if (a > 0) {
                return null;
              }
              return null;
            };
            var d = c(e, t);
            if (d === null) {
              return null;
            }
            e = e.substr(d.length);
            d = c(e, r);
            if (d === null) {
              return null;
            }
            var p = f(e, d.length, a || n);
            if (p === null) {
              return null;
            }
            var m = e.substring(0, a ? p.endMatchEnd : p.endMatchBegin);
            if (!(o || i)) {
              return { match_: m, remainder: e.substr(p.endMatchEnd) };
            } else {
              var h = this.findObserveGroups(e.substr(p.endMatchEnd), o, i, s, l);
              if (h === null) {
                return null;
              }
              var v = [m, h.match_];
              return { match_: u ? v.join("") : v, remainder: h.remainder };
            }
          },
          match_: function (e, t) {
            var r = n.patterns.patterns[e];
            if (r === undefined) {
              throw ["MhchemBugP", "mhchem bug P. Please report. (" + e + ")"];
            } else if (typeof r === "function") {
              return n.patterns.patterns[e](t);
            } else {
              var a = t.match(r);
              if (a) {
                if (a.length > 2) {
                  return { match_: a.slice(1), remainder: t.substr(a[0].length) };
                } else {
                  return { match_: a[1] || a[0], remainder: t.substr(a[0].length) };
                }
              }
              return null;
            }
          },
        },
        actions: {
          "a=": function (e, t) {
            e.a = (e.a || "") + t;
            return undefined;
          },
          "b=": function (e, t) {
            e.b = (e.b || "") + t;
            return undefined;
          },
          "p=": function (e, t) {
            e.p = (e.p || "") + t;
            return undefined;
          },
          "o=": function (e, t) {
            e.o = (e.o || "") + t;
            return undefined;
          },
          "q=": function (e, t) {
            e.q = (e.q || "") + t;
            return undefined;
          },
          "d=": function (e, t) {
            e.d = (e.d || "") + t;
            return undefined;
          },
          "rm=": function (e, t) {
            e.rm = (e.rm || "") + t;
            return undefined;
          },
          "text=": function (e, t) {
            e.text_ = (e.text_ || "") + t;
            return undefined;
          },
          insert: function (e, t, r) {
            return { type_: r };
          },
          "insert+p1": function (e, t, r) {
            return { type_: r, p1: t };
          },
          "insert+p1+p2": function (e, t, r) {
            return { type_: r, p1: t[0], p2: t[1] };
          },
          copy: function (e, t) {
            return t;
          },
          write: function (e, t, r) {
            return r;
          },
          rm: function (e, t) {
            return { type_: "rm", p1: t };
          },
          text: function (e, t) {
            return n.go(t, "text");
          },
          "tex-math": function (e, t) {
            return n.go(t, "tex-math");
          },
          "tex-math tight": function (e, t) {
            return n.go(t, "tex-math tight");
          },
          bond: function (e, t, r) {
            return { type_: "bond", kind_: r || t };
          },
          "color0-output": function (e, t) {
            return { type_: "color0", color: t };
          },
          ce: function (e, t) {
            return n.go(t, "ce");
          },
          pu: function (e, t) {
            return n.go(t, "pu");
          },
          "1/2": function (e, t) {
            var r = [];
            if (t.match(/^[+\-]/)) {
              r.push(t.substr(0, 1));
              t = t.substr(1);
            }
            var a = t.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
            a[1] = a[1].replace(/\$/g, "");
            r.push({ type_: "frac", p1: a[1], p2: a[2] });
            if (a[3]) {
              a[3] = a[3].replace(/\$/g, "");
              r.push({ type_: "tex-math", p1: a[3] });
            }
            return r;
          },
          "9,9": function (e, t) {
            return n.go(t, "9,9");
          },
        },
        stateMachines: {
          tex: {
            transitions: a({
              empty: { 0: { action_: "copy" } },
              "\\ce{(...)}": { 0: { action_: [{ type_: "write", option: "{" }, "ce", { type_: "write", option: "}" }] } },
              "\\pu{(...)}": { 0: { action_: [{ type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              else: { 0: { action_: "copy" } },
            }),
            actions: {},
          },
          ce: {
            transitions: a({
              empty: { "*": { action_: "output" } },
              else: { "0|1|2": { action_: "beginsWithBond=false", revisit: true, toContinue: true } },
              oxidation$: { 0: { action_: "oxidation-output" } },
              CMT: { r: { action_: "rdt=", nextState: "rt" }, rd: { action_: "rqt=", nextState: "rdt" } },
              arrowUpDown: { "0|1|2|as": { action_: ["sb=false", "output", "operator"], nextState: "1" } },
              uprightEntities: { "0|1|2": { action_: ["o=", "output"], nextState: "1" } },
              orbital: { "0|1|2|3": { action_: "o=", nextState: "o" } },
              "->": {
                "0|1|2|3": { action_: "r=", nextState: "r" },
                "a|as": { action_: ["output", "r="], nextState: "r" },
                "*": { action_: ["output", "r="], nextState: "r" },
              },
              "+": {
                o: { action_: "d= kv", nextState: "d" },
                "d|D": { action_: "d=", nextState: "d" },
                q: { action_: "d=", nextState: "qd" },
                "qd|qD": { action_: "d=", nextState: "qd" },
                dq: { action_: ["output", "d="], nextState: "d" },
                3: { action_: ["sb=false", "output", "operator"], nextState: "0" },
              },
              amount: { "0|2": { action_: "a=", nextState: "a" } },
              "pm-operator": { "0|1|2|a|as": { action_: ["sb=false", "output", { type_: "operator", option: "\\pm" }], nextState: "0" } },
              operator: { "0|1|2|a|as": { action_: ["sb=false", "output", "operator"], nextState: "0" } },
              "-$": {
                "o|q": { action_: ["charge or bond", "output"], nextState: "qd" },
                d: { action_: "d=", nextState: "d" },
                D: { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" },
                q: { action_: "d=", nextState: "qd" },
                qd: { action_: "d=", nextState: "qd" },
                "qD|dq": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" },
              },
              "-9": { "3|o": { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "3" } },
              "- orbital overlap": {
                o: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" },
                d: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" },
              },
              "-": {
                "0|1|2": { action_: [{ type_: "output", option: 1 }, "beginsWithBond=true", { type_: "bond", option: "-" }], nextState: "3" },
                3: { action_: { type_: "bond", option: "-" } },
                a: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" },
                as: {
                  action_: [
                    { type_: "output", option: 2 },
                    { type_: "bond", option: "-" },
                  ],
                  nextState: "3",
                },
                b: { action_: "b=" },
                o: { action_: { type_: "- after o/d", option: false }, nextState: "2" },
                q: { action_: { type_: "- after o/d", option: false }, nextState: "2" },
                "d|qd|dq": { action_: { type_: "- after o/d", option: true }, nextState: "2" },
                "D|qD|p": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" },
              },
              amount2: { "1|3": { action_: "a=", nextState: "a" } },
              letters: {
                "0|1|2|3|a|as|b|p|bp|o": { action_: "o=", nextState: "o" },
                "q|dq": { action_: ["output", "o="], nextState: "o" },
                "d|D|qd|qD": { action_: "o after d", nextState: "o" },
              },
              digits: {
                o: { action_: "q=", nextState: "q" },
                "d|D": { action_: "q=", nextState: "dq" },
                q: { action_: ["output", "o="], nextState: "o" },
                a: { action_: "o=", nextState: "o" },
              },
              "space A": { "b|p|bp": { action_: [] } },
              space: {
                a: { action_: [], nextState: "as" },
                0: { action_: "sb=false" },
                "1|2": { action_: "sb=true" },
                "r|rt|rd|rdt|rdq": { action_: "output", nextState: "0" },
                "*": { action_: ["output", "sb=true"], nextState: "1" },
              },
              "1st-level escape": {
                "1|2": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }] },
                "*": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }], nextState: "0" },
              },
              "[(...)]": { "r|rt": { action_: "rd=", nextState: "rd" }, "rd|rdt": { action_: "rq=", nextState: "rdq" } },
              "...": {
                "o|d|D|dq|qd|qD": { action_: ["output", { type_: "bond", option: "..." }], nextState: "3" },
                "*": {
                  action_: [
                    { type_: "output", option: 1 },
                    { type_: "insert", option: "ellipsis" },
                  ],
                  nextState: "1",
                },
              },
              ". __* ": { "*": { action_: ["output", { type_: "insert", option: "addition compound" }], nextState: "1" } },
              "state of aggregation $": { "*": { action_: ["output", "state of aggregation"], nextState: "1" } },
              "{[(": {
                "a|as|o": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" },
                "0|1|2|3": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" },
                "*": { action_: ["output", "o=", "output", "parenthesisLevel++"], nextState: "2" },
              },
              ")]}": {
                "0|1|2|3|b|p|bp|o": { action_: ["o=", "parenthesisLevel--"], nextState: "o" },
                "a|as|d|D|q|qd|qD|dq": { action_: ["output", "o=", "parenthesisLevel--"], nextState: "o" },
              },
              ", ": { "*": { action_: ["output", "comma"], nextState: "0" } },
              "^_": { "*": { action_: [] } },
              "^{(...)}|^($...$)": {
                "0|1|2|as": { action_: "b=", nextState: "b" },
                p: { action_: "b=", nextState: "bp" },
                "3|o": { action_: "d= kv", nextState: "D" },
                q: { action_: "d=", nextState: "qD" },
                "d|D|qd|qD|dq": { action_: ["output", "d="], nextState: "D" },
              },
              "^a|^\\x{}{}|^\\x{}|^\\x|'": {
                "0|1|2|as": { action_: "b=", nextState: "b" },
                p: { action_: "b=", nextState: "bp" },
                "3|o": { action_: "d= kv", nextState: "d" },
                q: { action_: "d=", nextState: "qd" },
                "d|qd|D|qD": { action_: "d=" },
                dq: { action_: ["output", "d="], nextState: "d" },
              },
              "_{(state of aggregation)}$": { "d|D|q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" } },
              "_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": {
                "0|1|2|as": { action_: "p=", nextState: "p" },
                b: { action_: "p=", nextState: "bp" },
                "3|o": { action_: "q=", nextState: "q" },
                "d|D": { action_: "q=", nextState: "dq" },
                "q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" },
              },
              "=<>": { "0|1|2|3|a|as|o|q|d|D|qd|qD|dq": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" } },
              "#": {
                "0|1|2|3|a|as|o": {
                  action_: [
                    { type_: "output", option: 2 },
                    { type_: "bond", option: "#" },
                  ],
                  nextState: "3",
                },
              },
              "{}^": {
                "*": {
                  action_: [
                    { type_: "output", option: 1 },
                    { type_: "insert", option: "tinySkip" },
                  ],
                  nextState: "1",
                },
              },
              "{}": { "*": { action_: { type_: "output", option: 1 }, nextState: "1" } },
              "{...}": {
                "0|1|2|3|a|as|b|p|bp": { action_: "o=", nextState: "o" },
                "o|d|D|q|qd|qD|dq": { action_: ["output", "o="], nextState: "o" },
              },
              "$...$": {
                a: { action_: "a=" },
                "0|1|2|3|as|b|p|bp|o": { action_: "o=", nextState: "o" },
                "as|o": { action_: "o=" },
                "q|d|D|qd|qD|dq": { action_: ["output", "o="], nextState: "o" },
              },
              "\\bond{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" } },
              "\\frac{(...)}": { "*": { action_: [{ type_: "output", option: 1 }, "frac-output"], nextState: "3" } },
              "\\overset{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "overset-output"], nextState: "3" } },
              "\\underset{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "underset-output"], nextState: "3" } },
              "\\underbrace{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "underbrace-output"], nextState: "3" } },
              "\\color{(...)}{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "color-output"], nextState: "3" } },
              "\\color{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "color0-output"] } },
              "\\ce{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "ce"], nextState: "3" } },
              "\\,": { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "1" } },
              "\\pu{(...)}": { "*": { action_: ["output", { type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }], nextState: "3" } },
              "\\x{}{}|\\x{}|\\x": {
                "0|1|2|3|a|as|b|p|bp|o|c0": { action_: ["o=", "output"], nextState: "3" },
                "*": { action_: ["output", "o=", "output"], nextState: "3" },
              },
              others: { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "3" } },
              else2: {
                a: { action_: "a to o", nextState: "o", revisit: true },
                as: { action_: ["output", "sb=true"], nextState: "1", revisit: true },
                "r|rt|rd|rdt|rdq": { action_: ["output"], nextState: "0", revisit: true },
                "*": { action_: ["output", "copy"], nextState: "3" },
              },
            }),
            actions: {
              "o after d": function (e, t) {
                var r;
                if ((e.d || "").match(/^[1-9][0-9]*$/)) {
                  var a = e.d;
                  e.d = undefined;
                  r = this["output"](e);
                  r.push({ type_: "tinySkip" });
                  e.b = a;
                } else {
                  r = this["output"](e);
                }
                n.actions["o="](e, t);
                return r;
              },
              "d= kv": function (e, t) {
                e.d = t;
                e.dType = "kv";
                return undefined;
              },
              "charge or bond": function (e, t) {
                if (e["beginsWithBond"]) {
                  var r = [];
                  n.concatArray(r, this["output"](e));
                  n.concatArray(r, n.actions["bond"](e, t, "-"));
                  return r;
                } else {
                  e.d = t;
                  return undefined;
                }
              },
              "- after o/d": function (e, t, r) {
                var a = n.patterns.match_("orbital", e.o || "");
                var o = n.patterns.match_("one lowercase greek letter $", e.o || "");
                var i = n.patterns.match_("one lowercase latin letter $", e.o || "");
                var s = n.patterns.match_("$one lowercase latin letter$ $", e.o || "");
                var l = t === "-" && ((a && a.remainder === "") || o || i || s);
                if (l && !e.a && !e.b && !e.p && !e.d && !e.q && !a && i) {
                  e.o = "$" + e.o + "$";
                }
                var u = [];
                if (l) {
                  n.concatArray(u, this["output"](e));
                  u.push({ type_: "hyphen" });
                } else {
                  a = n.patterns.match_("digits", e.d || "");
                  if (r && a && a.remainder === "") {
                    n.concatArray(u, n.actions["d="](e, t));
                    n.concatArray(u, this["output"](e));
                  } else {
                    n.concatArray(u, this["output"](e));
                    n.concatArray(u, n.actions["bond"](e, t, "-"));
                  }
                }
                return u;
              },
              "a to o": function (e) {
                e.o = e.a;
                e.a = undefined;
                return undefined;
              },
              "sb=true": function (e) {
                e.sb = true;
                return undefined;
              },
              "sb=false": function (e) {
                e.sb = false;
                return undefined;
              },
              "beginsWithBond=true": function (e) {
                e["beginsWithBond"] = true;
                return undefined;
              },
              "beginsWithBond=false": function (e) {
                e["beginsWithBond"] = false;
                return undefined;
              },
              "parenthesisLevel++": function (e) {
                e["parenthesisLevel"]++;
                return undefined;
              },
              "parenthesisLevel--": function (e) {
                e["parenthesisLevel"]--;
                return undefined;
              },
              "state of aggregation": function (e, t) {
                return { type_: "state of aggregation", p1: n.go(t, "o") };
              },
              comma: function (e, t) {
                var r = t.replace(/\s*$/, "");
                var a = r !== t;
                if (a && e["parenthesisLevel"] === 0) {
                  return { type_: "comma enumeration L", p1: r };
                } else {
                  return { type_: "comma enumeration M", p1: r };
                }
              },
              output: function (e, t, r) {
                var a;
                if (!e.r) {
                  a = [];
                  if (!e.a && !e.b && !e.p && !e.o && !e.q && !e.d && !r) {
                  } else {
                    if (e.sb) {
                      a.push({ type_: "entitySkip" });
                    }
                    if (!e.o && !e.q && !e.d && !e.b && !e.p && r !== 2) {
                      e.o = e.a;
                      e.a = undefined;
                    } else if (!e.o && !e.q && !e.d && (e.b || e.p)) {
                      e.o = e.a;
                      e.d = e.b;
                      e.q = e.p;
                      e.a = e.b = e.p = undefined;
                    } else {
                      if (e.o && e.dType === "kv" && n.patterns.match_("d-oxidation$", e.d || "")) {
                        e.dType = "oxidation";
                      } else if (e.o && e.dType === "kv" && !e.q) {
                        e.dType = undefined;
                      }
                    }
                    a.push({
                      type_: "chemfive",
                      a: n.go(e.a, "a"),
                      b: n.go(e.b, "bd"),
                      p: n.go(e.p, "pq"),
                      o: n.go(e.o, "o"),
                      q: n.go(e.q, "pq"),
                      d: n.go(e.d, e.dType === "oxidation" ? "oxidation" : "bd"),
                      dType: e.dType,
                    });
                  }
                } else {
                  var o = void 0;
                  if (e.rdt === "M") {
                    o = n.go(e.rd, "tex-math");
                  } else if (e.rdt === "T") {
                    o = [{ type_: "text", p1: e.rd || "" }];
                  } else {
                    o = n.go(e.rd, "ce");
                  }
                  var i = void 0;
                  if (e.rqt === "M") {
                    i = n.go(e.rq, "tex-math");
                  } else if (e.rqt === "T") {
                    i = [{ type_: "text", p1: e.rq || "" }];
                  } else {
                    i = n.go(e.rq, "ce");
                  }
                  a = { type_: "arrow", r: e.r, rd: o, rq: i };
                }
                for (var s in e) {
                  if (s !== "parenthesisLevel" && s !== "beginsWithBond") {
                    delete e[s];
                  }
                }
                return a;
              },
              "oxidation-output": function (e, t) {
                var r = ["{"];
                n.concatArray(r, n.go(t, "oxidation"));
                r.push("}");
                return r;
              },
              "frac-output": function (e, t) {
                return { type_: "frac-ce", p1: n.go(t[0], "ce"), p2: n.go(t[1], "ce") };
              },
              "overset-output": function (e, t) {
                return { type_: "overset", p1: n.go(t[0], "ce"), p2: n.go(t[1], "ce") };
              },
              "underset-output": function (e, t) {
                return { type_: "underset", p1: n.go(t[0], "ce"), p2: n.go(t[1], "ce") };
              },
              "underbrace-output": function (e, t) {
                return { type_: "underbrace", p1: n.go(t[0], "ce"), p2: n.go(t[1], "ce") };
              },
              "color-output": function (e, t) {
                return { type_: "color", color1: t[0], color2: n.go(t[1], "ce") };
              },
              "r=": function (e, t) {
                e.r = t;
                return undefined;
              },
              "rdt=": function (e, t) {
                e.rdt = t;
                return undefined;
              },
              "rd=": function (e, t) {
                e.rd = t;
                return undefined;
              },
              "rqt=": function (e, t) {
                e.rqt = t;
                return undefined;
              },
              "rq=": function (e, t) {
                e.rq = t;
                return undefined;
              },
              operator: function (e, t, r) {
                return { type_: "operator", kind_: r || t };
              },
            },
          },
          a: {
            transitions: a({
              empty: { "*": { action_: [] } },
              "1/2$": { 0: { action_: "1/2" } },
              else: { 0: { action_: [], nextState: "1", revisit: true } },
              "${(...)}$__$(...)$": { "*": { action_: "tex-math tight", nextState: "1" } },
              ",": { "*": { action_: { type_: "insert", option: "commaDecimal" } } },
              else2: { "*": { action_: "copy" } },
            }),
            actions: {},
          },
          o: {
            transitions: a({
              empty: { "*": { action_: [] } },
              "1/2$": { 0: { action_: "1/2" } },
              else: { 0: { action_: [], nextState: "1", revisit: true } },
              letters: { "*": { action_: "rm" } },
              "\\ca": { "*": { action_: { type_: "insert", option: "circa" } } },
              "\\pu{(...)}": { "*": { action_: [{ type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              "\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
              "${(...)}$__$(...)$": { "*": { action_: "tex-math" } },
              "{(...)}": { "*": { action_: [{ type_: "write", option: "{" }, "text", { type_: "write", option: "}" }] } },
              else2: { "*": { action_: "copy" } },
            }),
            actions: {},
          },
          text: {
            transitions: a({
              empty: { "*": { action_: "output" } },
              "{...}": { "*": { action_: "text=" } },
              "${(...)}$__$(...)$": { "*": { action_: "tex-math" } },
              "\\greek": { "*": { action_: ["output", "rm"] } },
              "\\pu{(...)}": { "*": { action_: ["output", { type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: ["output", "copy"] } },
              else: { "*": { action_: "text=" } },
            }),
            actions: {
              output: function (e) {
                if (e.text_) {
                  var t = { type_: "text", p1: e.text_ };
                  for (var r in e) {
                    delete e[r];
                  }
                  return t;
                }
                return undefined;
              },
            },
          },
          pq: {
            transitions: a({
              empty: { "*": { action_: [] } },
              "state of aggregation $": { "*": { action_: "state of aggregation" } },
              i$: { 0: { action_: [], nextState: "!f", revisit: true } },
              "(KV letters),": { 0: { action_: "rm", nextState: "0" } },
              formula$: { 0: { action_: [], nextState: "f", revisit: true } },
              "1/2$": { 0: { action_: "1/2" } },
              else: { 0: { action_: [], nextState: "!f", revisit: true } },
              "${(...)}$__$(...)$": { "*": { action_: "tex-math" } },
              "{(...)}": { "*": { action_: "text" } },
              "a-z": { f: { action_: "tex-math" } },
              letters: { "*": { action_: "rm" } },
              "-9.,9": { "*": { action_: "9,9" } },
              ",": { "*": { action_: { type_: "insert+p1", option: "comma enumeration S" } } },
              "\\color{(...)}{(...)}": { "*": { action_: "color-output" } },
              "\\color{(...)}": { "*": { action_: "color0-output" } },
              "\\ce{(...)}": { "*": { action_: "ce" } },
              "\\pu{(...)}": { "*": { action_: [{ type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
              else2: { "*": { action_: "copy" } },
            }),
            actions: {
              "state of aggregation": function (e, t) {
                return { type_: "state of aggregation subscript", p1: n.go(t, "o") };
              },
              "color-output": function (e, t) {
                return { type_: "color", color1: t[0], color2: n.go(t[1], "pq") };
              },
            },
          },
          bd: {
            transitions: a({
              empty: { "*": { action_: [] } },
              x$: { 0: { action_: [], nextState: "!f", revisit: true } },
              formula$: { 0: { action_: [], nextState: "f", revisit: true } },
              else: { 0: { action_: [], nextState: "!f", revisit: true } },
              "-9.,9 no missing 0": { "*": { action_: "9,9" } },
              ".": { "*": { action_: { type_: "insert", option: "electron dot" } } },
              "a-z": { f: { action_: "tex-math" } },
              x: { "*": { action_: { type_: "insert", option: "KV x" } } },
              letters: { "*": { action_: "rm" } },
              "'": { "*": { action_: { type_: "insert", option: "prime" } } },
              "${(...)}$__$(...)$": { "*": { action_: "tex-math" } },
              "{(...)}": { "*": { action_: "text" } },
              "\\color{(...)}{(...)}": { "*": { action_: "color-output" } },
              "\\color{(...)}": { "*": { action_: "color0-output" } },
              "\\ce{(...)}": { "*": { action_: "ce" } },
              "\\pu{(...)}": { "*": { action_: [{ type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
              else2: { "*": { action_: "copy" } },
            }),
            actions: {
              "color-output": function (e, t) {
                return { type_: "color", color1: t[0], color2: n.go(t[1], "bd") };
              },
            },
          },
          oxidation: {
            transitions: a({
              empty: { "*": { action_: [] } },
              "roman numeral": { "*": { action_: "roman-numeral" } },
              "${(...)}$__$(...)$": { "*": { action_: "tex-math" } },
              else: { "*": { action_: "copy" } },
            }),
            actions: {
              "roman-numeral": function (e, t) {
                return { type_: "roman numeral", p1: t };
              },
            },
          },
          "tex-math": {
            transitions: a({
              empty: { "*": { action_: "output" } },
              "\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
              "\\pu{(...)}": { "*": { action_: ["output", { type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
              else: { "*": { action_: "o=" } },
            }),
            actions: {
              output: function (e) {
                if (e.o) {
                  var t = { type_: "tex-math", p1: e.o };
                  for (var r in e) {
                    delete e[r];
                  }
                  return t;
                }
                return undefined;
              },
            },
          },
          "tex-math tight": {
            transitions: a({
              empty: { "*": { action_: "output" } },
              "\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
              "\\pu{(...)}": { "*": { action_: ["output", { type_: "write", option: "{" }, "pu", { type_: "write", option: "}" }] } },
              "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
              "-|+": { "*": { action_: "tight operator" } },
              else: { "*": { action_: "o=" } },
            }),
            actions: {
              "tight operator": function (e, t) {
                e.o = (e.o || "") + "{" + t + "}";
                return undefined;
              },
              output: function (e) {
                if (e.o) {
                  var t = { type_: "tex-math", p1: e.o };
                  for (var r in e) {
                    delete e[r];
                  }
                  return t;
                }
                return undefined;
              },
            },
          },
          "9,9": {
            transitions: a({ empty: { "*": { action_: [] } }, ",": { "*": { action_: "comma" } }, else: { "*": { action_: "copy" } } }),
            actions: {
              comma: function () {
                return { type_: "commaDecimal" };
              },
            },
          },
          pu: {
            transitions: a({
              empty: { "*": { action_: "output" } },
              space$: { "*": { action_: ["output", "space"] } },
              "{[(|)]}": { "0|a": { action_: "copy" } },
              "(-)(9)^(-9)": { 0: { action_: "number^", nextState: "a" } },
              "(-)(9.,9)(e)(99)": { 0: { action_: "enumber", nextState: "a" } },
              space: { "0|a": { action_: [] } },
              "pm-operator": { "0|a": { action_: { type_: "operator", option: "\\pm" }, nextState: "0" } },
              operator: { "0|a": { action_: "copy", nextState: "0" } },
              "//": { d: { action_: "o=", nextState: "/" } },
              "/": { d: { action_: "o=", nextState: "/" } },
              "{...}|else": {
                "0|d": { action_: "d=", nextState: "d" },
                a: { action_: ["space", "d="], nextState: "d" },
                "/|q": { action_: "q=", nextState: "q" },
              },
            }),
            actions: {
              enumber: function (e, t) {
                var r = [];
                if (t[0] === "+-" || t[0] === "+/-") {
                  r.push("\\pm ");
                } else if (t[0]) {
                  r.push(t[0]);
                }
                if (t[1]) {
                  n.concatArray(r, n.go(t[1], "pu-9,9"));
                  if (t[2]) {
                    if (t[2].match(/[,.]/)) {
                      n.concatArray(r, n.go(t[2], "pu-9,9"));
                    } else {
                      r.push(t[2]);
                    }
                  }
                  if (t[3] || t[4]) {
                    if (t[3] === "e" || t[4] === "*") {
                      r.push({ type_: "cdot" });
                    } else {
                      r.push({ type_: "times" });
                    }
                  }
                }
                if (t[5]) {
                  r.push("10^{" + t[5] + "}");
                }
                return r;
              },
              "number^": function (e, t) {
                var r = [];
                if (t[0] === "+-" || t[0] === "+/-") {
                  r.push("\\pm ");
                } else if (t[0]) {
                  r.push(t[0]);
                }
                n.concatArray(r, n.go(t[1], "pu-9,9"));
                r.push("^{" + t[2] + "}");
                return r;
              },
              operator: function (e, t, r) {
                return { type_: "operator", kind_: r || t };
              },
              space: function () {
                return { type_: "pu-space-1" };
              },
              output: function (e) {
                var t;
                var r = n.patterns.match_("{(...)}", e.d || "");
                if (r && r.remainder === "") {
                  e.d = r.match_;
                }
                var a = n.patterns.match_("{(...)}", e.q || "");
                if (a && a.remainder === "") {
                  e.q = a.match_;
                }
                if (e.d) {
                  e.d = e.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C");
                  e.d = e.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
                }
                if (e.q) {
                  e.q = e.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C");
                  e.q = e.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
                  var o = { d: n.go(e.d, "pu"), q: n.go(e.q, "pu") };
                  if (e.o === "//") {
                    t = { type_: "pu-frac", p1: o.d, p2: o.q };
                  } else {
                    t = o.d;
                    if (o.d.length > 1 || o.q.length > 1) {
                      t.push({ type_: " / " });
                    } else {
                      t.push({ type_: "/" });
                    }
                    n.concatArray(t, o.q);
                  }
                } else {
                  t = n.go(e.d, "pu-2");
                }
                for (var i in e) {
                  delete e[i];
                }
                return t;
              },
            },
          },
          "pu-2": {
            transitions: a({
              empty: { "*": { action_: "output" } },
              "*": { "*": { action_: ["output", "cdot"], nextState: "0" } },
              "\\x": { "*": { action_: "rm=" } },
              space: { "*": { action_: ["output", "space"], nextState: "0" } },
              "^{(...)}|^(-1)": { 1: { action_: "^(-1)" } },
              "-9.,9": { 0: { action_: "rm=", nextState: "0" }, 1: { action_: "^(-1)", nextState: "0" } },
              "{...}|else": { "*": { action_: "rm=", nextState: "1" } },
            }),
            actions: {
              cdot: function () {
                return { type_: "tight cdot" };
              },
              "^(-1)": function (e, t) {
                e.rm += "^{" + t + "}";
                return undefined;
              },
              space: function () {
                return { type_: "pu-space-2" };
              },
              output: function (e) {
                var t = [];
                if (e.rm) {
                  var r = n.patterns.match_("{(...)}", e.rm || "");
                  if (r && r.remainder === "") {
                    t = n.go(r.match_, "pu");
                  } else {
                    t = { type_: "rm", p1: e.rm };
                  }
                }
                for (var a in e) {
                  delete e[a];
                }
                return t;
              },
            },
          },
          "pu-9,9": {
            transitions: a({
              empty: { 0: { action_: "output-0" }, o: { action_: "output-o" } },
              ",": { 0: { action_: ["output-0", "comma"], nextState: "o" } },
              ".": { 0: { action_: ["output-0", "copy"], nextState: "o" } },
              else: { "*": { action_: "text=" } },
            }),
            actions: {
              comma: function () {
                return { type_: "commaDecimal" };
              },
              "output-0": function (e) {
                var t = [];
                e.text_ = e.text_ || "";
                if (e.text_.length > 4) {
                  var r = e.text_.length % 3;
                  if (r === 0) {
                    r = 3;
                  }
                  for (var a = e.text_.length - 3; a > 0; a -= 3) {
                    t.push(e.text_.substr(a, 3));
                    t.push({ type_: "1000 separator" });
                  }
                  t.push(e.text_.substr(0, r));
                  t.reverse();
                } else {
                  t.push(e.text_);
                }
                for (var n in e) {
                  delete e[n];
                }
                return t;
              },
              "output-o": function (e) {
                var t = [];
                e.text_ = e.text_ || "";
                if (e.text_.length > 4) {
                  var r = e.text_.length - 3;
                  var a = void 0;
                  for (a = 0; a < r; a += 3) {
                    t.push(e.text_.substr(a, 3));
                    t.push({ type_: "1000 separator" });
                  }
                  t.push(e.text_.substr(a));
                } else {
                  t.push(e.text_);
                }
                for (var n in e) {
                  delete e[n];
                }
                return t;
              },
            },
          },
        },
      };
      var o = {
        go: function (e, t) {
          if (!e) {
            return "";
          }
          var r = "";
          var a = false;
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            if (typeof i === "string") {
              r += i;
            } else {
              r += o._go2(i);
              if (i.type_ === "1st-level escape") {
                a = true;
              }
            }
          }
          if (t && !a && r) {
            r = "{" + r + "}";
          }
          return r;
        },
        _goInner: function (e) {
          return o.go(e, false);
        },
        _go2: function (e) {
          var t;
          switch (e.type_) {
            case "chemfive":
              t = "";
              var r = { a: o._goInner(e.a), b: o._goInner(e.b), p: o._goInner(e.p), o: o._goInner(e.o), q: o._goInner(e.q), d: o._goInner(e.d) };
              if (r.a) {
                if (r.a.match(/^[+\-]/)) {
                  r.a = "{" + r.a + "}";
                }
                t += r.a + "\\,";
              }
              if (r.b || r.p) {
                t += "{\\vphantom{A}}";
                t += "^{\\hphantom{" + (r.b || "") + "}}_{\\hphantom{" + (r.p || "") + "}}";
                t += "\\mkern-1.5mu";
                t += "{\\vphantom{A}}";
                t += "^{\\smash[t]{\\vphantom{2}}\\llap{" + (r.b || "") + "}}";
                t += "_{\\vphantom{2}\\llap{\\smash[t]{" + (r.p || "") + "}}}";
              }
              if (r.o) {
                if (r.o.match(/^[+\-]/)) {
                  r.o = "{" + r.o + "}";
                }
                t += r.o;
              }
              if (e.dType === "kv") {
                if (r.d || r.q) {
                  t += "{\\vphantom{A}}";
                }
                if (r.d) {
                  t += "^{" + r.d + "}";
                }
                if (r.q) {
                  t += "_{\\smash[t]{" + r.q + "}}";
                }
              } else if (e.dType === "oxidation") {
                if (r.d) {
                  t += "{\\vphantom{A}}";
                  t += "^{" + r.d + "}";
                }
                if (r.q) {
                  t += "{\\vphantom{A}}";
                  t += "_{\\smash[t]{" + r.q + "}}";
                }
              } else {
                if (r.q) {
                  t += "{\\vphantom{A}}";
                  t += "_{\\smash[t]{" + r.q + "}}";
                }
                if (r.d) {
                  t += "{\\vphantom{A}}";
                  t += "^{" + r.d + "}";
                }
              }
              break;
            case "rm":
              t = "\\mathrm{" + e.p1 + "}";
              break;
            case "text":
              if (e.p1.match(/[\^_]/)) {
                e.p1 = e.p1.replace(" ", "~").replace("-", "\\text{-}");
                t = "\\mathrm{" + e.p1 + "}";
              } else {
                t = "\\text{" + e.p1 + "}";
              }
              break;
            case "roman numeral":
              t = "\\mathrm{" + e.p1 + "}";
              break;
            case "state of aggregation":
              t = "\\mskip2mu " + o._goInner(e.p1);
              break;
            case "state of aggregation subscript":
              t = "\\mskip1mu " + o._goInner(e.p1);
              break;
            case "bond":
              t = o._getBond(e.kind_);
              if (!t) {
                throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + e.kind_ + ")"];
              }
              break;
            case "frac":
              var a = "\\frac{" + e.p1 + "}{" + e.p2 + "}";
              t = "\\mathchoice{\\textstyle" + a + "}{" + a + "}{" + a + "}{" + a + "}";
              break;
            case "pu-frac":
              var n = "\\frac{" + o._goInner(e.p1) + "}{" + o._goInner(e.p2) + "}";
              t = "\\mathchoice{\\textstyle" + n + "}{" + n + "}{" + n + "}{" + n + "}";
              break;
            case "tex-math":
              t = e.p1 + " ";
              break;
            case "frac-ce":
              t = "\\frac{" + o._goInner(e.p1) + "}{" + o._goInner(e.p2) + "}";
              break;
            case "overset":
              t = "\\overset{" + o._goInner(e.p1) + "}{" + o._goInner(e.p2) + "}";
              break;
            case "underset":
              t = "\\underset{" + o._goInner(e.p1) + "}{" + o._goInner(e.p2) + "}";
              break;
            case "underbrace":
              t = "\\underbrace{" + o._goInner(e.p1) + "}_{" + o._goInner(e.p2) + "}";
              break;
            case "color":
              t = "{\\color{" + e.color1 + "}{" + o._goInner(e.color2) + "}}";
              break;
            case "color0":
              t = "\\color{" + e.color + "}";
              break;
            case "arrow":
              var s = { rd: o._goInner(e.rd), rq: o._goInner(e.rq) };
              var l = o._getArrow(e.r);
              if (s.rd || s.rq) {
                if (e.r === "<=>" || e.r === "<=>>" || e.r === "<<=>" || e.r === "<--\x3e") {
                  l = "\\long" + l;
                  if (s.rd) {
                    l = "\\overset{" + s.rd + "}{" + l + "}";
                  }
                  if (s.rq) {
                    if (e.r === "<--\x3e") {
                      l = "\\underset{\\lower2mu{" + s.rq + "}}{" + l + "}";
                    } else {
                      l = "\\underset{\\lower6mu{" + s.rq + "}}{" + l + "}";
                    }
                  }
                  l = " {}\\mathrel{" + l + "}{} ";
                } else {
                  if (s.rq) {
                    l += "[{" + s.rq + "}]";
                  }
                  l += "{" + s.rd + "}";
                  l = " {}\\mathrel{\\x" + l + "}{} ";
                }
              } else {
                l = " {}\\mathrel{\\long" + l + "}{} ";
              }
              t = l;
              break;
            case "operator":
              t = o._getOperator(e.kind_);
              break;
            case "1st-level escape":
              t = e.p1 + " ";
              break;
            case "space":
              t = " ";
              break;
            case "tinySkip":
              t = "\\mkern2mu";
              break;
            case "entitySkip":
              t = "~";
              break;
            case "pu-space-1":
              t = "~";
              break;
            case "pu-space-2":
              t = "\\mkern3mu ";
              break;
            case "1000 separator":
              t = "\\mkern2mu ";
              break;
            case "commaDecimal":
              t = "{,}";
              break;
            case "comma enumeration L":
              t = "{" + e.p1 + "}\\mkern6mu ";
              break;
            case "comma enumeration M":
              t = "{" + e.p1 + "}\\mkern3mu ";
              break;
            case "comma enumeration S":
              t = "{" + e.p1 + "}\\mkern1mu ";
              break;
            case "hyphen":
              t = "\\text{-}";
              break;
            case "addition compound":
              t = "\\,{\\cdot}\\,";
              break;
            case "electron dot":
              t = "\\mkern1mu \\bullet\\mkern1mu ";
              break;
            case "KV x":
              t = "{\\times}";
              break;
            case "prime":
              t = "\\prime ";
              break;
            case "cdot":
              t = "\\cdot ";
              break;
            case "tight cdot":
              t = "\\mkern1mu{\\cdot}\\mkern1mu ";
              break;
            case "times":
              t = "\\times ";
              break;
            case "circa":
              t = "{\\sim}";
              break;
            case "^":
              t = "uparrow";
              break;
            case "v":
              t = "downarrow";
              break;
            case "ellipsis":
              t = "\\ldots ";
              break;
            case "/":
              t = "/";
              break;
            case " / ":
              t = "\\,/\\,";
              break;
            default:
              i(e);
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
          return t;
        },
        _getArrow: function (e) {
          switch (e) {
            case "->":
              return "rightarrow";
            case "→":
              return "rightarrow";
            case "⟶":
              return "rightarrow";
            case "<-":
              return "leftarrow";
            case "<->":
              return "leftrightarrow";
            case "<--\x3e":
              return "leftrightarrows";
            case "<=>":
              return "rightleftharpoons";
            case "⇌":
              return "rightleftharpoons";
            case "<=>>":
              return "Rightleftharpoons";
            case "<<=>":
              return "Leftrightharpoons";
            default:
              i(e);
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
        },
        _getBond: function (e) {
          switch (e) {
            case "-":
              return "{-}";
            case "1":
              return "{-}";
            case "=":
              return "{=}";
            case "2":
              return "{=}";
            case "#":
              return "{\\equiv}";
            case "3":
              return "{\\equiv}";
            case "~":
              return "{\\tripledash}";
            case "~-":
              return "{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";
            case "~=":
              return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
            case "~--":
              return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
            case "-~-":
              return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";
            case "...":
              return "{{\\cdot}{\\cdot}{\\cdot}}";
            case "....":
              return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
            case "->":
              return "{\\rightarrow}";
            case "<-":
              return "{\\leftarrow}";
            case "<":
              return "{<}";
            case ">":
              return "{>}";
            default:
              i(e);
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
        },
        _getOperator: function (e) {
          switch (e) {
            case "+":
              return " {}+{} ";
            case "-":
              return " {}-{} ";
            case "=":
              return " {}={} ";
            case "<":
              return " {}<{} ";
            case ">":
              return " {}>{} ";
            case "<<":
              return " {}\\ll{} ";
            case ">>":
              return " {}\\gg{} ";
            case "\\pm":
              return " {}\\pm{} ";
            case "\\approx":
              return " {}\\approx{} ";
            case "$\\approx$":
              return " {}\\approx{} ";
            case "v":
              return " \\downarrow{} ";
            case "(v)":
              return " \\downarrow{} ";
            case "^":
              return " \\uparrow{} ";
            case "(^)":
              return " \\uparrow{} ";
            default:
              i(e);
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
        },
      };
      function i(e) {}
    },
  },
]);
