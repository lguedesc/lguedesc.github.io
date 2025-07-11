"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [805],
  {
    27574: (t, e, i) => {
      i.d(e, { A: () => a });
      var s = i(57991);
      var r = i(63221);
      const n = (t, e) => s.A.lang.round(r.A.parse(t)[e]);
      const a = n;
    },
    15051: (t, e, i) => {
      i.d(e, { A: () => n, P: () => a });
      var s = i(75905);
      var r = i(24982);
      var n = (0, s.K2)((t, e) => {
        let i;
        if (e === "sandbox") {
          i = (0, r.Ltv)("#i" + t);
        }
        const s = e === "sandbox" ? (0, r.Ltv)(i.nodes()[0].contentDocument.body) : (0, r.Ltv)("body");
        const n = s.select(`[id="${t}"]`);
        return n;
      }, "getDiagramElement");
      var a = (0, s.K2)((t, e, i, r) => {
        t.attr("class", i);
        const { width: n, height: a, x: l, y: h } = c(t, e);
        (0, s.a$)(t, a, n, r);
        const u = o(l, h, n, a, e);
        t.attr("viewBox", u);
        s.Rm.debug(`viewBox configured: ${u} with padding: ${e}`);
      }, "setupViewPortForSVG");
      var c = (0, s.K2)((t, e) => {
        const i = t.node()?.getBBox() || { width: 0, height: 0, x: 0, y: 0 };
        return { width: i.width + e * 2, height: i.height + e * 2, x: i.x, y: i.y };
      }, "calculateDimensionsWithPadding");
      var o = (0, s.K2)((t, e, i, s, r) => `${t - r} ${e - r} ${i} ${s}`, "createViewBox");
    },
    70805: (t, e, i) => {
      i.d(e, { diagram: () => O });
      var s = i(15051);
      var r = i(94065);
      var n = i(33416);
      var a = i(94746);
      var c = i(20778);
      var o = i(57590);
      var l = i(68232);
      var h = i(76261);
      var u = i(96049);
      var y = i(75905);
      var d = i(24982);
      var b = i(27574);
      var p = i(3635);
      var f = (function () {
        var t = (0, y.K2)(function (t, e, i, s) {
            for (i = i || {}, s = t.length; s--; i[t[s]] = e);
            return i;
          }, "o"),
          e = [6, 8, 10, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50],
          i = [1, 10],
          s = [1, 11],
          r = [1, 12],
          n = [1, 13],
          a = [1, 20],
          c = [1, 21],
          o = [1, 22],
          l = [1, 23],
          h = [1, 24],
          u = [1, 19],
          d = [1, 25],
          b = [1, 26],
          p = [1, 18],
          f = [1, 33],
          k = [1, 34],
          _ = [1, 35],
          g = [1, 36],
          m = [1, 37],
          E = [6, 8, 10, 13, 15, 17, 20, 21, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50, 63, 64, 65, 66, 67],
          v = [1, 42],
          S = [1, 43],
          O = [1, 52],
          T = [40, 50, 68, 69],
          A = [1, 63],
          R = [1, 61],
          N = [1, 58],
          I = [1, 62],
          x = [1, 64],
          C = [6, 8, 10, 13, 17, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 48, 49, 50, 63, 64, 65, 66, 67],
          $ = [63, 64, 65, 66, 67],
          D = [1, 81],
          w = [1, 80],
          K = [1, 78],
          L = [1, 79],
          M = [6, 10, 42, 47],
          B = [6, 10, 13, 41, 42, 47, 48, 49],
          F = [1, 89],
          P = [1, 88],
          Y = [1, 87],
          G = [19, 56],
          z = [1, 98],
          U = [1, 97],
          Z = [19, 56, 58, 60];
        var j = {
          trace: (0, y.K2)(function t() {}, "trace"),
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            ER_DIAGRAM: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NEWLINE: 10,
            entityName: 11,
            relSpec: 12,
            COLON: 13,
            role: 14,
            STYLE_SEPARATOR: 15,
            idList: 16,
            BLOCK_START: 17,
            attributes: 18,
            BLOCK_STOP: 19,
            SQS: 20,
            SQE: 21,
            title: 22,
            title_value: 23,
            acc_title: 24,
            acc_title_value: 25,
            acc_descr: 26,
            acc_descr_value: 27,
            acc_descr_multiline_value: 28,
            direction: 29,
            classDefStatement: 30,
            classStatement: 31,
            styleStatement: 32,
            direction_tb: 33,
            direction_bt: 34,
            direction_rl: 35,
            direction_lr: 36,
            CLASSDEF: 37,
            stylesOpt: 38,
            separator: 39,
            UNICODE_TEXT: 40,
            STYLE_TEXT: 41,
            COMMA: 42,
            CLASS: 43,
            STYLE: 44,
            style: 45,
            styleComponent: 46,
            SEMI: 47,
            NUM: 48,
            BRKT: 49,
            ENTITY_NAME: 50,
            attribute: 51,
            attributeType: 52,
            attributeName: 53,
            attributeKeyTypeList: 54,
            attributeComment: 55,
            ATTRIBUTE_WORD: 56,
            attributeKeyType: 57,
            ",": 58,
            ATTRIBUTE_KEY: 59,
            COMMENT: 60,
            cardinality: 61,
            relType: 62,
            ZERO_OR_ONE: 63,
            ZERO_OR_MORE: 64,
            ONE_OR_MORE: 65,
            ONLY_ONE: 66,
            MD_PARENT: 67,
            NON_IDENTIFYING: 68,
            IDENTIFYING: 69,
            WORD: 70,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "ER_DIAGRAM",
            6: "EOF",
            8: "SPACE",
            10: "NEWLINE",
            13: "COLON",
            15: "STYLE_SEPARATOR",
            17: "BLOCK_START",
            19: "BLOCK_STOP",
            20: "SQS",
            21: "SQE",
            22: "title",
            23: "title_value",
            24: "acc_title",
            25: "acc_title_value",
            26: "acc_descr",
            27: "acc_descr_value",
            28: "acc_descr_multiline_value",
            33: "direction_tb",
            34: "direction_bt",
            35: "direction_rl",
            36: "direction_lr",
            37: "CLASSDEF",
            40: "UNICODE_TEXT",
            41: "STYLE_TEXT",
            42: "COMMA",
            43: "CLASS",
            44: "STYLE",
            47: "SEMI",
            48: "NUM",
            49: "BRKT",
            50: "ENTITY_NAME",
            56: "ATTRIBUTE_WORD",
            58: ",",
            59: "ATTRIBUTE_KEY",
            60: "COMMENT",
            63: "ZERO_OR_ONE",
            64: "ZERO_OR_MORE",
            65: "ONE_OR_MORE",
            66: "ONLY_ONE",
            67: "MD_PARENT",
            68: "NON_IDENTIFYING",
            69: "IDENTIFYING",
            70: "WORD",
          },
          productions_: [
            0,
            [3, 3],
            [5, 0],
            [5, 2],
            [7, 2],
            [7, 1],
            [7, 1],
            [7, 1],
            [9, 5],
            [9, 9],
            [9, 7],
            [9, 7],
            [9, 4],
            [9, 6],
            [9, 3],
            [9, 5],
            [9, 1],
            [9, 3],
            [9, 7],
            [9, 9],
            [9, 6],
            [9, 8],
            [9, 4],
            [9, 6],
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [29, 1],
            [29, 1],
            [29, 1],
            [29, 1],
            [30, 4],
            [16, 1],
            [16, 1],
            [16, 3],
            [16, 3],
            [31, 3],
            [32, 4],
            [38, 1],
            [38, 3],
            [45, 1],
            [45, 2],
            [39, 1],
            [39, 1],
            [39, 1],
            [46, 1],
            [46, 1],
            [46, 1],
            [46, 1],
            [11, 1],
            [11, 1],
            [18, 1],
            [18, 2],
            [51, 2],
            [51, 3],
            [51, 3],
            [51, 4],
            [52, 1],
            [53, 1],
            [54, 1],
            [54, 3],
            [57, 1],
            [55, 1],
            [12, 3],
            [61, 1],
            [61, 1],
            [61, 1],
            [61, 1],
            [61, 1],
            [62, 1],
            [62, 1],
            [14, 1],
            [14, 1],
            [14, 1],
          ],
          performAction: (0, y.K2)(function t(e, i, s, r, n, a, c) {
            var o = a.length - 1;
            switch (n) {
              case 1:
                break;
              case 2:
                this.$ = [];
                break;
              case 3:
                a[o - 1].push(a[o]);
                this.$ = a[o - 1];
                break;
              case 4:
              case 5:
                this.$ = a[o];
                break;
              case 6:
              case 7:
                this.$ = [];
                break;
              case 8:
                r.addEntity(a[o - 4]);
                r.addEntity(a[o - 2]);
                r.addRelationship(a[o - 4], a[o], a[o - 2], a[o - 3]);
                break;
              case 9:
                r.addEntity(a[o - 8]);
                r.addEntity(a[o - 4]);
                r.addRelationship(a[o - 8], a[o], a[o - 4], a[o - 5]);
                r.setClass([a[o - 8]], a[o - 6]);
                r.setClass([a[o - 4]], a[o - 2]);
                break;
              case 10:
                r.addEntity(a[o - 6]);
                r.addEntity(a[o - 2]);
                r.addRelationship(a[o - 6], a[o], a[o - 2], a[o - 3]);
                r.setClass([a[o - 6]], a[o - 4]);
                break;
              case 11:
                r.addEntity(a[o - 6]);
                r.addEntity(a[o - 4]);
                r.addRelationship(a[o - 6], a[o], a[o - 4], a[o - 5]);
                r.setClass([a[o - 4]], a[o - 2]);
                break;
              case 12:
                r.addEntity(a[o - 3]);
                r.addAttributes(a[o - 3], a[o - 1]);
                break;
              case 13:
                r.addEntity(a[o - 5]);
                r.addAttributes(a[o - 5], a[o - 1]);
                r.setClass([a[o - 5]], a[o - 3]);
                break;
              case 14:
                r.addEntity(a[o - 2]);
                break;
              case 15:
                r.addEntity(a[o - 4]);
                r.setClass([a[o - 4]], a[o - 2]);
                break;
              case 16:
                r.addEntity(a[o]);
                break;
              case 17:
                r.addEntity(a[o - 2]);
                r.setClass([a[o - 2]], a[o]);
                break;
              case 18:
                r.addEntity(a[o - 6], a[o - 4]);
                r.addAttributes(a[o - 6], a[o - 1]);
                break;
              case 19:
                r.addEntity(a[o - 8], a[o - 6]);
                r.addAttributes(a[o - 8], a[o - 1]);
                r.setClass([a[o - 8]], a[o - 3]);
                break;
              case 20:
                r.addEntity(a[o - 5], a[o - 3]);
                break;
              case 21:
                r.addEntity(a[o - 7], a[o - 5]);
                r.setClass([a[o - 7]], a[o - 2]);
                break;
              case 22:
                r.addEntity(a[o - 3], a[o - 1]);
                break;
              case 23:
                r.addEntity(a[o - 5], a[o - 3]);
                r.setClass([a[o - 5]], a[o]);
                break;
              case 24:
              case 25:
                this.$ = a[o].trim();
                r.setAccTitle(this.$);
                break;
              case 26:
              case 27:
                this.$ = a[o].trim();
                r.setAccDescription(this.$);
                break;
              case 32:
                r.setDirection("TB");
                break;
              case 33:
                r.setDirection("BT");
                break;
              case 34:
                r.setDirection("RL");
                break;
              case 35:
                r.setDirection("LR");
                break;
              case 36:
                this.$ = a[o - 3];
                r.addClass(a[o - 2], a[o - 1]);
                break;
              case 37:
              case 38:
              case 56:
              case 64:
                this.$ = [a[o]];
                break;
              case 39:
              case 40:
                this.$ = a[o - 2].concat([a[o]]);
                break;
              case 41:
                this.$ = a[o - 2];
                r.setClass(a[o - 1], a[o]);
                break;
              case 42:
                this.$ = a[o - 3];
                r.addCssStyles(a[o - 2], a[o - 1]);
                break;
              case 43:
                this.$ = [a[o]];
                break;
              case 44:
                a[o - 2].push(a[o]);
                this.$ = a[o - 2];
                break;
              case 46:
                this.$ = a[o - 1] + a[o];
                break;
              case 54:
              case 76:
              case 77:
                this.$ = a[o].replace(/"/g, "");
                break;
              case 55:
              case 78:
                this.$ = a[o];
                break;
              case 57:
                a[o].push(a[o - 1]);
                this.$ = a[o];
                break;
              case 58:
                this.$ = { type: a[o - 1], name: a[o] };
                break;
              case 59:
                this.$ = { type: a[o - 2], name: a[o - 1], keys: a[o] };
                break;
              case 60:
                this.$ = { type: a[o - 2], name: a[o - 1], comment: a[o] };
                break;
              case 61:
                this.$ = { type: a[o - 3], name: a[o - 2], keys: a[o - 1], comment: a[o] };
                break;
              case 62:
              case 63:
              case 66:
                this.$ = a[o];
                break;
              case 65:
                a[o - 2].push(a[o]);
                this.$ = a[o - 2];
                break;
              case 67:
                this.$ = a[o].replace(/"/g, "");
                break;
              case 68:
                this.$ = { cardA: a[o], relType: a[o - 1], cardB: a[o - 2] };
                break;
              case 69:
                this.$ = r.Cardinality.ZERO_OR_ONE;
                break;
              case 70:
                this.$ = r.Cardinality.ZERO_OR_MORE;
                break;
              case 71:
                this.$ = r.Cardinality.ONE_OR_MORE;
                break;
              case 72:
                this.$ = r.Cardinality.ONLY_ONE;
                break;
              case 73:
                this.$ = r.Cardinality.MD_PARENT;
                break;
              case 74:
                this.$ = r.Identification.NON_IDENTIFYING;
                break;
              case 75:
                this.$ = r.Identification.IDENTIFYING;
                break;
            }
          }, "anonymous"),
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            t(e, [2, 2], { 5: 3 }),
            {
              6: [1, 4],
              7: 5,
              8: [1, 6],
              9: 7,
              10: [1, 8],
              11: 9,
              22: i,
              24: s,
              26: r,
              28: n,
              29: 14,
              30: 15,
              31: 16,
              32: 17,
              33: a,
              34: c,
              35: o,
              36: l,
              37: h,
              40: u,
              43: d,
              44: b,
              50: p,
            },
            t(e, [2, 7], { 1: [2, 1] }),
            t(e, [2, 3]),
            {
              9: 27,
              11: 9,
              22: i,
              24: s,
              26: r,
              28: n,
              29: 14,
              30: 15,
              31: 16,
              32: 17,
              33: a,
              34: c,
              35: o,
              36: l,
              37: h,
              40: u,
              43: d,
              44: b,
              50: p,
            },
            t(e, [2, 5]),
            t(e, [2, 6]),
            t(e, [2, 16], { 12: 28, 61: 32, 15: [1, 29], 17: [1, 30], 20: [1, 31], 63: f, 64: k, 65: _, 66: g, 67: m }),
            { 23: [1, 38] },
            { 25: [1, 39] },
            { 27: [1, 40] },
            t(e, [2, 27]),
            t(e, [2, 28]),
            t(e, [2, 29]),
            t(e, [2, 30]),
            t(e, [2, 31]),
            t(E, [2, 54]),
            t(E, [2, 55]),
            t(e, [2, 32]),
            t(e, [2, 33]),
            t(e, [2, 34]),
            t(e, [2, 35]),
            { 16: 41, 40: v, 41: S },
            { 16: 44, 40: v, 41: S },
            { 16: 45, 40: v, 41: S },
            t(e, [2, 4]),
            { 11: 46, 40: u, 50: p },
            { 16: 47, 40: v, 41: S },
            { 18: 48, 19: [1, 49], 51: 50, 52: 51, 56: O },
            { 11: 53, 40: u, 50: p },
            { 62: 54, 68: [1, 55], 69: [1, 56] },
            t(T, [2, 69]),
            t(T, [2, 70]),
            t(T, [2, 71]),
            t(T, [2, 72]),
            t(T, [2, 73]),
            t(e, [2, 24]),
            t(e, [2, 25]),
            t(e, [2, 26]),
            { 13: A, 38: 57, 41: R, 42: N, 45: 59, 46: 60, 48: I, 49: x },
            t(C, [2, 37]),
            t(C, [2, 38]),
            { 16: 65, 40: v, 41: S, 42: N },
            { 13: A, 38: 66, 41: R, 42: N, 45: 59, 46: 60, 48: I, 49: x },
            { 13: [1, 67], 15: [1, 68] },
            t(e, [2, 17], { 61: 32, 12: 69, 17: [1, 70], 42: N, 63: f, 64: k, 65: _, 66: g, 67: m }),
            { 19: [1, 71] },
            t(e, [2, 14]),
            { 18: 72, 19: [2, 56], 51: 50, 52: 51, 56: O },
            { 53: 73, 56: [1, 74] },
            { 56: [2, 62] },
            { 21: [1, 75] },
            { 61: 76, 63: f, 64: k, 65: _, 66: g, 67: m },
            t($, [2, 74]),
            t($, [2, 75]),
            { 6: D, 10: w, 39: 77, 42: K, 47: L },
            { 40: [1, 82], 41: [1, 83] },
            t(M, [2, 43], { 46: 84, 13: A, 41: R, 48: I, 49: x }),
            t(B, [2, 45]),
            t(B, [2, 50]),
            t(B, [2, 51]),
            t(B, [2, 52]),
            t(B, [2, 53]),
            t(e, [2, 41], { 42: N }),
            { 6: D, 10: w, 39: 85, 42: K, 47: L },
            { 14: 86, 40: F, 50: P, 70: Y },
            { 16: 90, 40: v, 41: S },
            { 11: 91, 40: u, 50: p },
            { 18: 92, 19: [1, 93], 51: 50, 52: 51, 56: O },
            t(e, [2, 12]),
            { 19: [2, 57] },
            t(G, [2, 58], { 54: 94, 55: 95, 57: 96, 59: z, 60: U }),
            t([19, 56, 59, 60], [2, 63]),
            t(e, [2, 22], { 15: [1, 100], 17: [1, 99] }),
            t([40, 50], [2, 68]),
            t(e, [2, 36]),
            { 13: A, 41: R, 45: 101, 46: 60, 48: I, 49: x },
            t(e, [2, 47]),
            t(e, [2, 48]),
            t(e, [2, 49]),
            t(C, [2, 39]),
            t(C, [2, 40]),
            t(B, [2, 46]),
            t(e, [2, 42]),
            t(e, [2, 8]),
            t(e, [2, 76]),
            t(e, [2, 77]),
            t(e, [2, 78]),
            { 13: [1, 102], 42: N },
            { 13: [1, 104], 15: [1, 103] },
            { 19: [1, 105] },
            t(e, [2, 15]),
            t(G, [2, 59], { 55: 106, 58: [1, 107], 60: U }),
            t(G, [2, 60]),
            t(Z, [2, 64]),
            t(G, [2, 67]),
            t(Z, [2, 66]),
            { 18: 108, 19: [1, 109], 51: 50, 52: 51, 56: O },
            { 16: 110, 40: v, 41: S },
            t(M, [2, 44], { 46: 84, 13: A, 41: R, 48: I, 49: x }),
            { 14: 111, 40: F, 50: P, 70: Y },
            { 16: 112, 40: v, 41: S },
            { 14: 113, 40: F, 50: P, 70: Y },
            t(e, [2, 13]),
            t(G, [2, 61]),
            { 57: 114, 59: z },
            { 19: [1, 115] },
            t(e, [2, 20]),
            t(e, [2, 23], { 17: [1, 116], 42: N }),
            t(e, [2, 11]),
            { 13: [1, 117], 42: N },
            t(e, [2, 10]),
            t(Z, [2, 65]),
            t(e, [2, 18]),
            { 18: 118, 19: [1, 119], 51: 50, 52: 51, 56: O },
            { 14: 120, 40: F, 50: P, 70: Y },
            { 19: [1, 121] },
            t(e, [2, 21]),
            t(e, [2, 9]),
            t(e, [2, 19]),
          ],
          defaultActions: { 52: [2, 62], 72: [2, 57] },
          parseError: (0, y.K2)(function t(e, i) {
            if (i.recoverable) {
              this.trace(e);
            } else {
              var s = new Error(e);
              s.hash = i;
              throw s;
            }
          }, "parseError"),
          parse: (0, y.K2)(function t(e) {
            var i = this,
              s = [0],
              r = [],
              n = [null],
              a = [],
              c = this.table,
              o = "",
              l = 0,
              h = 0,
              u = 0,
              d = 2,
              b = 1;
            var p = a.slice.call(arguments, 1);
            var f = Object.create(this.lexer);
            var k = { yy: {} };
            for (var _ in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, _)) {
                k.yy[_] = this.yy[_];
              }
            }
            f.setInput(e, k.yy);
            k.yy.lexer = f;
            k.yy.parser = this;
            if (typeof f.yylloc == "undefined") {
              f.yylloc = {};
            }
            var g = f.yylloc;
            a.push(g);
            var m = f.options && f.options.ranges;
            if (typeof k.yy.parseError === "function") {
              this.parseError = k.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function E(t) {
              s.length = s.length - 2 * t;
              n.length = n.length - t;
              a.length = a.length - t;
            }
            (0, y.K2)(E, "popStack");
            function v() {
              var t;
              t = r.pop() || f.lex() || b;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  r = t;
                  t = r.pop();
                }
                t = i.symbols_[t] || t;
              }
              return t;
            }
            (0, y.K2)(v, "lex");
            var S,
              O,
              T,
              A,
              R,
              N,
              I = {},
              x,
              C,
              $,
              D;
            while (true) {
              T = s[s.length - 1];
              if (this.defaultActions[T]) {
                A = this.defaultActions[T];
              } else {
                if (S === null || typeof S == "undefined") {
                  S = v();
                }
                A = c[T] && c[T][S];
              }
              if (typeof A === "undefined" || !A.length || !A[0]) {
                var w = "";
                D = [];
                for (x in c[T]) {
                  if (this.terminals_[x] && x > d) {
                    D.push("'" + this.terminals_[x] + "'");
                  }
                }
                if (f.showPosition) {
                  w =
                    "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    f.showPosition() +
                    "\nExpecting " +
                    D.join(", ") +
                    ", got '" +
                    (this.terminals_[S] || S) +
                    "'";
                } else {
                  w = "Parse error on line " + (l + 1) + ": Unexpected " + (S == b ? "end of input" : "'" + (this.terminals_[S] || S) + "'");
                }
                this.parseError(w, { text: f.match, token: this.terminals_[S] || S, line: f.yylineno, loc: g, expected: D });
              }
              if (A[0] instanceof Array && A.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + T + ", token: " + S);
              }
              switch (A[0]) {
                case 1:
                  s.push(S);
                  n.push(f.yytext);
                  a.push(f.yylloc);
                  s.push(A[1]);
                  S = null;
                  if (!O) {
                    h = f.yyleng;
                    o = f.yytext;
                    l = f.yylineno;
                    g = f.yylloc;
                    if (u > 0) {
                      u--;
                    }
                  } else {
                    S = O;
                    O = null;
                  }
                  break;
                case 2:
                  C = this.productions_[A[1]][1];
                  I.$ = n[n.length - C];
                  I._$ = {
                    first_line: a[a.length - (C || 1)].first_line,
                    last_line: a[a.length - 1].last_line,
                    first_column: a[a.length - (C || 1)].first_column,
                    last_column: a[a.length - 1].last_column,
                  };
                  if (m) {
                    I._$.range = [a[a.length - (C || 1)].range[0], a[a.length - 1].range[1]];
                  }
                  N = this.performAction.apply(I, [o, h, l, k.yy, A[1], n, a].concat(p));
                  if (typeof N !== "undefined") {
                    return N;
                  }
                  if (C) {
                    s = s.slice(0, -1 * C * 2);
                    n = n.slice(0, -1 * C);
                    a = a.slice(0, -1 * C);
                  }
                  s.push(this.productions_[A[1]][0]);
                  n.push(I.$);
                  a.push(I._$);
                  $ = c[s[s.length - 2]][s[s.length - 1]];
                  s.push($);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          }, "parse"),
        };
        var W = (function () {
          var t = {
            EOF: 1,
            parseError: (0, y.K2)(function t(e, i) {
              if (this.yy.parser) {
                this.yy.parser.parseError(e, i);
              } else {
                throw new Error(e);
              }
            }, "parseError"),
            setInput: (0, y.K2)(function (t, e) {
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
            input: (0, y.K2)(function () {
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
            unput: (0, y.K2)(function (t) {
              var e = t.length;
              var i = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - e);
              this.offset -= e;
              var s = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (i.length - 1) {
                this.yylineno -= i.length - 1;
              }
              var r = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: i
                  ? (i.length === s.length ? this.yylloc.first_column : 0) + s[s.length - i.length].length - i[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [r[0], r[0] + this.yyleng - e];
              }
              this.yyleng = this.yytext.length;
              return this;
            }, "unput"),
            more: (0, y.K2)(function () {
              this._more = true;
              return this;
            }, "more"),
            reject: (0, y.K2)(function () {
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
            less: (0, y.K2)(function (t) {
              this.unput(this.match.slice(t));
            }, "less"),
            pastInput: (0, y.K2)(function () {
              var t = this.matched.substr(0, this.matched.length - this.match.length);
              return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: (0, y.K2)(function () {
              var t = this.match;
              if (t.length < 20) {
                t += this._input.substr(0, 20 - t.length);
              }
              return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: (0, y.K2)(function () {
              var t = this.pastInput();
              var e = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + e + "^";
            }, "showPosition"),
            test_match: (0, y.K2)(function (t, e) {
              var i, s, r;
              if (this.options.backtrack_lexer) {
                r = {
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
                  r.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              s = t[0].match(/(?:\r\n?|\n).*/g);
              if (s) {
                this.yylineno += s.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
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
              i = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (i) {
                return i;
              } else if (this._backtrack) {
                for (var n in r) {
                  this[n] = r[n];
                }
                return false;
              }
              return false;
            }, "test_match"),
            next: (0, y.K2)(function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var t, e, i, s;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var r = this._currentRules();
              for (var n = 0; n < r.length; n++) {
                i = this._input.match(this.rules[r[n]]);
                if (i && (!e || i[0].length > e[0].length)) {
                  e = i;
                  s = n;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(i, r[n]);
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
                t = this.test_match(e, r[s]);
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
            lex: (0, y.K2)(function t() {
              var e = this.next();
              if (e) {
                return e;
              } else {
                return this.lex();
              }
            }, "lex"),
            begin: (0, y.K2)(function t(e) {
              this.conditionStack.push(e);
            }, "begin"),
            popState: (0, y.K2)(function t() {
              var e = this.conditionStack.length - 1;
              if (e > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            }, "popState"),
            _currentRules: (0, y.K2)(function t() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            }, "_currentRules"),
            topState: (0, y.K2)(function t(e) {
              e = this.conditionStack.length - 1 - Math.abs(e || 0);
              if (e >= 0) {
                return this.conditionStack[e];
              } else {
                return "INITIAL";
              }
            }, "topState"),
            pushState: (0, y.K2)(function t(e) {
              this.begin(e);
            }, "pushState"),
            stateStackSize: (0, y.K2)(function t() {
              return this.conditionStack.length;
            }, "stateStackSize"),
            options: { "case-insensitive": true },
            performAction: (0, y.K2)(function t(e, i, s, r) {
              var n = r;
              switch (s) {
                case 0:
                  this.begin("acc_title");
                  return 24;
                  break;
                case 1:
                  this.popState();
                  return "acc_title_value";
                  break;
                case 2:
                  this.begin("acc_descr");
                  return 26;
                  break;
                case 3:
                  this.popState();
                  return "acc_descr_value";
                  break;
                case 4:
                  this.begin("acc_descr_multiline");
                  break;
                case 5:
                  this.popState();
                  break;
                case 6:
                  return "acc_descr_multiline_value";
                  break;
                case 7:
                  return 33;
                  break;
                case 8:
                  return 34;
                  break;
                case 9:
                  return 35;
                  break;
                case 10:
                  return 36;
                  break;
                case 11:
                  return 10;
                  break;
                case 12:
                  break;
                case 13:
                  return 8;
                  break;
                case 14:
                  return 50;
                  break;
                case 15:
                  return 70;
                  break;
                case 16:
                  return 4;
                  break;
                case 17:
                  this.begin("block");
                  return 17;
                  break;
                case 18:
                  return 49;
                  break;
                case 19:
                  return 49;
                  break;
                case 20:
                  return 42;
                  break;
                case 21:
                  return 15;
                  break;
                case 22:
                  return 13;
                  break;
                case 23:
                  break;
                case 24:
                  return 59;
                  break;
                case 25:
                  return 56;
                  break;
                case 26:
                  return 56;
                  break;
                case 27:
                  return 60;
                  break;
                case 28:
                  break;
                case 29:
                  this.popState();
                  return 19;
                  break;
                case 30:
                  return i.yytext[0];
                  break;
                case 31:
                  return 20;
                  break;
                case 32:
                  return 21;
                  break;
                case 33:
                  this.begin("style");
                  return 44;
                  break;
                case 34:
                  this.popState();
                  return 10;
                  break;
                case 35:
                  break;
                case 36:
                  return 13;
                  break;
                case 37:
                  return 42;
                  break;
                case 38:
                  return 49;
                  break;
                case 39:
                  this.begin("style");
                  return 37;
                  break;
                case 40:
                  return 43;
                  break;
                case 41:
                  return 63;
                  break;
                case 42:
                  return 65;
                  break;
                case 43:
                  return 65;
                  break;
                case 44:
                  return 65;
                  break;
                case 45:
                  return 63;
                  break;
                case 46:
                  return 63;
                  break;
                case 47:
                  return 64;
                  break;
                case 48:
                  return 64;
                  break;
                case 49:
                  return 64;
                  break;
                case 50:
                  return 64;
                  break;
                case 51:
                  return 64;
                  break;
                case 52:
                  return 65;
                  break;
                case 53:
                  return 64;
                  break;
                case 54:
                  return 65;
                  break;
                case 55:
                  return 66;
                  break;
                case 56:
                  return 66;
                  break;
                case 57:
                  return 66;
                  break;
                case 58:
                  return 66;
                  break;
                case 59:
                  return 63;
                  break;
                case 60:
                  return 64;
                  break;
                case 61:
                  return 65;
                  break;
                case 62:
                  return 67;
                  break;
                case 63:
                  return 68;
                  break;
                case 64:
                  return 69;
                  break;
                case 65:
                  return 69;
                  break;
                case 66:
                  return 68;
                  break;
                case 67:
                  return 68;
                  break;
                case 68:
                  return 68;
                  break;
                case 69:
                  return 41;
                  break;
                case 70:
                  return 47;
                  break;
                case 71:
                  return 40;
                  break;
                case 72:
                  return 48;
                  break;
                case 73:
                  return i.yytext[0];
                  break;
                case 74:
                  return 6;
                  break;
              }
            }, "anonymous"),
            rules: [
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:[\}])/i,
              /^(?:[^\}]*)/i,
              /^(?:.*direction\s+TB[^\n]*)/i,
              /^(?:.*direction\s+BT[^\n]*)/i,
              /^(?:.*direction\s+RL[^\n]*)/i,
              /^(?:.*direction\s+LR[^\n]*)/i,
              /^(?:[\n]+)/i,
              /^(?:\s+)/i,
              /^(?:[\s]+)/i,
              /^(?:"[^"%\r\n\v\b\\]+")/i,
              /^(?:"[^"]*")/i,
              /^(?:erDiagram\b)/i,
              /^(?:\{)/i,
              /^(?:#)/i,
              /^(?:#)/i,
              /^(?:,)/i,
              /^(?::::)/i,
              /^(?::)/i,
              /^(?:\s+)/i,
              /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,
              /^(?:([^\s]*)[~].*[~]([^\s]*))/i,
              /^(?:([\*A-Za-z_\u00C0-\uFFFF][A-Za-z0-9\-\_\[\]\(\)\u00C0-\uFFFF\*]*))/i,
              /^(?:"[^"]*")/i,
              /^(?:[\n]+)/i,
              /^(?:\})/i,
              /^(?:.)/i,
              /^(?:\[)/i,
              /^(?:\])/i,
              /^(?:style\b)/i,
              /^(?:[\n]+)/i,
              /^(?:\s+)/i,
              /^(?::)/i,
              /^(?:,)/i,
              /^(?:#)/i,
              /^(?:classDef\b)/i,
              /^(?:class\b)/i,
              /^(?:one or zero\b)/i,
              /^(?:one or more\b)/i,
              /^(?:one or many\b)/i,
              /^(?:1\+)/i,
              /^(?:\|o\b)/i,
              /^(?:zero or one\b)/i,
              /^(?:zero or more\b)/i,
              /^(?:zero or many\b)/i,
              /^(?:0\+)/i,
              /^(?:\}o\b)/i,
              /^(?:many\(0\))/i,
              /^(?:many\(1\))/i,
              /^(?:many\b)/i,
              /^(?:\}\|)/i,
              /^(?:one\b)/i,
              /^(?:only one\b)/i,
              /^(?:1\b)/i,
              /^(?:\|\|)/i,
              /^(?:o\|)/i,
              /^(?:o\{)/i,
              /^(?:\|\{)/i,
              /^(?:\s*u\b)/i,
              /^(?:\.\.)/i,
              /^(?:--)/i,
              /^(?:to\b)/i,
              /^(?:optionally to\b)/i,
              /^(?:\.-)/i,
              /^(?:-\.)/i,
              /^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
              /^(?:;)/i,
              /^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
              /^(?:[0-9])/i,
              /^(?:.)/i,
              /^(?:$)/i,
            ],
            conditions: {
              style: { rules: [34, 35, 36, 37, 38, 69, 70], inclusive: false },
              acc_descr_multiline: { rules: [5, 6], inclusive: false },
              acc_descr: { rules: [3], inclusive: false },
              acc_title: { rules: [1], inclusive: false },
              block: { rules: [23, 24, 25, 26, 27, 28, 29, 30], inclusive: false },
              INITIAL: {
                rules: [
                  0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 31, 32, 33, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74,
                ],
                inclusive: true,
              },
            },
          };
          return t;
        })();
        j.lexer = W;
        function X() {
          this.yy = {};
        }
        (0, y.K2)(X, "Parser");
        X.prototype = j;
        j.Parser = X;
        return new X();
      })();
      f.parser = f;
      var k = f;
      var _ = class {
        constructor() {
          this.entities = new Map();
          this.relationships = [];
          this.classes = new Map();
          this.direction = "TB";
          this.Cardinality = {
            ZERO_OR_ONE: "ZERO_OR_ONE",
            ZERO_OR_MORE: "ZERO_OR_MORE",
            ONE_OR_MORE: "ONE_OR_MORE",
            ONLY_ONE: "ONLY_ONE",
            MD_PARENT: "MD_PARENT",
          };
          this.Identification = { NON_IDENTIFYING: "NON_IDENTIFYING", IDENTIFYING: "IDENTIFYING" };
          this.setAccTitle = y.SV;
          this.getAccTitle = y.iN;
          this.setAccDescription = y.EI;
          this.getAccDescription = y.m7;
          this.setDiagramTitle = y.ke;
          this.getDiagramTitle = y.ab;
          this.getConfig = (0, y.K2)(() => (0, y.D7)().er, "getConfig");
          this.clear();
          this.addEntity = this.addEntity.bind(this);
          this.addAttributes = this.addAttributes.bind(this);
          this.addRelationship = this.addRelationship.bind(this);
          this.setDirection = this.setDirection.bind(this);
          this.addCssStyles = this.addCssStyles.bind(this);
          this.addClass = this.addClass.bind(this);
          this.setClass = this.setClass.bind(this);
          this.setAccTitle = this.setAccTitle.bind(this);
          this.setAccDescription = this.setAccDescription.bind(this);
        }
        static {
          (0, y.K2)(this, "ErDB");
        }
        addEntity(t, e = "") {
          if (!this.entities.has(t)) {
            this.entities.set(t, {
              id: `entity-${t}-${this.entities.size}`,
              label: t,
              attributes: [],
              alias: e,
              shape: "erBox",
              look: (0, y.D7)().look ?? "default",
              cssClasses: "default",
              cssStyles: [],
            });
            y.Rm.info("Added new entity :", t);
          } else if (!this.entities.get(t)?.alias && e) {
            this.entities.get(t).alias = e;
            y.Rm.info(`Add alias '${e}' to entity '${t}'`);
          }
          return this.entities.get(t);
        }
        getEntity(t) {
          return this.entities.get(t);
        }
        getEntities() {
          return this.entities;
        }
        getClasses() {
          return this.classes;
        }
        addAttributes(t, e) {
          const i = this.addEntity(t);
          let s;
          for (s = e.length - 1; s >= 0; s--) {
            if (!e[s].keys) {
              e[s].keys = [];
            }
            if (!e[s].comment) {
              e[s].comment = "";
            }
            i.attributes.push(e[s]);
            y.Rm.debug("Added attribute ", e[s].name);
          }
        }
        addRelationship(t, e, i, s) {
          const r = this.entities.get(t);
          const n = this.entities.get(i);
          if (!r || !n) {
            return;
          }
          const a = { entityA: r.id, roleA: e, entityB: n.id, relSpec: s };
          this.relationships.push(a);
          y.Rm.debug("Added new relationship :", a);
        }
        getRelationships() {
          return this.relationships;
        }
        getDirection() {
          return this.direction;
        }
        setDirection(t) {
          this.direction = t;
        }
        getCompiledStyles(t) {
          let e = [];
          for (const i of t) {
            const t = this.classes.get(i);
            if (t?.styles) {
              e = [...e, ...(t.styles ?? [])].map((t) => t.trim());
            }
            if (t?.textStyles) {
              e = [...e, ...(t.textStyles ?? [])].map((t) => t.trim());
            }
          }
          return e;
        }
        addCssStyles(t, e) {
          for (const i of t) {
            const t = this.entities.get(i);
            if (!e || !t) {
              return;
            }
            for (const i of e) {
              t.cssStyles.push(i);
            }
          }
        }
        addClass(t, e) {
          t.forEach((t) => {
            let i = this.classes.get(t);
            if (i === void 0) {
              i = { id: t, styles: [], textStyles: [] };
              this.classes.set(t, i);
            }
            if (e) {
              e.forEach(function (t) {
                if (/color/.exec(t)) {
                  const e = t.replace("fill", "bgFill");
                  i.textStyles.push(e);
                }
                i.styles.push(t);
              });
            }
          });
        }
        setClass(t, e) {
          for (const i of t) {
            const t = this.entities.get(i);
            if (t) {
              for (const i of e) {
                t.cssClasses += " " + i;
              }
            }
          }
        }
        clear() {
          this.entities = new Map();
          this.classes = new Map();
          this.relationships = [];
          (0, y.IU)();
        }
        getData() {
          const t = [];
          const e = [];
          const i = (0, y.D7)();
          for (const r of this.entities.keys()) {
            const e = this.entities.get(r);
            if (e) {
              e.cssCompiledStyles = this.getCompiledStyles(e.cssClasses.split(" "));
              t.push(e);
            }
          }
          let s = 0;
          for (const r of this.relationships) {
            const t = {
              id: (0, u.rY)(r.entityA, r.entityB, { prefix: "id", counter: s++ }),
              type: "normal",
              curve: "basis",
              start: r.entityA,
              end: r.entityB,
              label: r.roleA,
              labelpos: "c",
              thickness: "normal",
              classes: "relationshipLine",
              arrowTypeStart: r.relSpec.cardB.toLowerCase(),
              arrowTypeEnd: r.relSpec.cardA.toLowerCase(),
              pattern: r.relSpec.relType == "IDENTIFYING" ? "solid" : "dashed",
              look: i.look,
            };
            e.push(t);
          }
          return { nodes: t, edges: e, other: {}, config: i, direction: "TB" };
        }
      };
      var g = {};
      (0, y.VA)(g, { draw: () => m });
      var m = (0, y.K2)(async function (t, e, i, n) {
        y.Rm.info("REF0:");
        y.Rm.info("Drawing er diagram (unified)", e);
        const { securityLevel: a, er: c, layout: o } = (0, y.D7)();
        const l = n.db.getData();
        const h = (0, s.A)(e, a);
        l.type = n.type;
        l.layoutAlgorithm = (0, r.q7)(o);
        l.config.flowchart.nodeSpacing = c?.nodeSpacing || 140;
        l.config.flowchart.rankSpacing = c?.rankSpacing || 80;
        l.direction = n.db.getDirection();
        l.markers = ["only_one", "zero_or_one", "one_or_more", "zero_or_more"];
        l.diagramId = e;
        await (0, r.XX)(l, h);
        if (l.layoutAlgorithm === "elk") {
          h.select(".edges").lower();
        }
        const b = h.selectAll('[id*="-background"]');
        if (Array.from(b).length > 0) {
          b.each(function () {
            const t = (0, d.Ltv)(this);
            const e = t.attr("id");
            const i = e.replace("-background", "");
            const s = h.select(`#${CSS.escape(i)}`);
            if (!s.empty()) {
              const e = s.attr("transform");
              t.attr("transform", e);
            }
          });
        }
        const p = 8;
        u._K.insertTitle(h, "erDiagramTitleText", c?.titleTopMargin ?? 25, n.db.getDiagramTitle());
        (0, s.P)(h, p, "erDiagram", c?.useMaxWidth ?? true);
      }, "draw");
      var E = (0, y.K2)((t, e) => {
        const i = b.A;
        const s = i(t, "r");
        const r = i(t, "g");
        const n = i(t, "b");
        return p.A(s, r, n, e);
      }, "fade");
      var v = (0, y.K2)(
        (t) =>
          `\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${
            t.tertiaryColor
          };\n    opacity: 0.7;\n    background-color: ${
            t.tertiaryColor
          };\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n  .labelBkg {\n    background-color: ${E(
            t.tertiaryColor,
            0.5
          )};\n  }\n\n  .edgeLabel .label {\n    fill: ${t.nodeBorder};\n    font-size: 14px;\n  }\n\n  .label {\n    font-family: ${
            t.fontFamily
          };\n    color: ${
            t.nodeTextColor || t.textColor
          };\n  }\n\n  .edge-pattern-dashed {\n    stroke-dasharray: 8,8;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon\n  {\n    fill: ${
            t.mainBkg
          };\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .relationshipLine {\n    stroke: ${
            t.lineColor
          };\n    stroke-width: 1;\n    fill: none;\n  }\n\n  .marker {\n    fill: none !important;\n    stroke: ${
            t.lineColor
          } !important;\n    stroke-width: 1;\n  }\n`,
        "getStyles"
      );
      var S = v;
      var O = {
        parser: k,
        get db() {
          return new _();
        },
        renderer: g,
        styles: S,
      };
    },
  },
]);
