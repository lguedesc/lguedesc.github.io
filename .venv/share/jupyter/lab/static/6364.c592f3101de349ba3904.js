"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6364],
  {
    65791: (t, e, r) => {
      r.d(e, { T: () => w });
      var a = r(33659);
      var s = r(58807);
      var i = r(37947);
      var n = r(97133);
      var o = r(74650);
      var l = r(69769);
      var c = r(89523);
      var h = r(62040);
      var d = r(55881);
      var u = r(19363);
      var g = r(10654);
      var p = (0, d.A)(function (t) {
        return (0, u.A)((0, h.A)(t, 1, g.A, true));
      });
      const y = p;
      var f = r(44882);
      var b = r(65339);
      var x = "\0";
      var m = "\0";
      var k = "";
      class w {
        constructor(t = {}) {
          this._isDirected = Object.prototype.hasOwnProperty.call(t, "directed") ? t.directed : true;
          this._isMultigraph = Object.prototype.hasOwnProperty.call(t, "multigraph") ? t.multigraph : false;
          this._isCompound = Object.prototype.hasOwnProperty.call(t, "compound") ? t.compound : false;
          this._label = undefined;
          this._defaultNodeLabelFn = a.A(undefined);
          this._defaultEdgeLabelFn = a.A(undefined);
          this._nodes = {};
          if (this._isCompound) {
            this._parent = {};
            this._children = {};
            this._children[m] = {};
          }
          this._in = {};
          this._preds = {};
          this._out = {};
          this._sucs = {};
          this._edgeObjs = {};
          this._edgeLabels = {};
        }
        isDirected() {
          return this._isDirected;
        }
        isMultigraph() {
          return this._isMultigraph;
        }
        isCompound() {
          return this._isCompound;
        }
        setGraph(t) {
          this._label = t;
          return this;
        }
        graph() {
          return this._label;
        }
        setDefaultNodeLabel(t) {
          if (!s.A(t)) {
            t = a.A(t);
          }
          this._defaultNodeLabelFn = t;
          return this;
        }
        nodeCount() {
          return this._nodeCount;
        }
        nodes() {
          return i.A(this._nodes);
        }
        sources() {
          var t = this;
          return n.A(this.nodes(), function (e) {
            return o.A(t._in[e]);
          });
        }
        sinks() {
          var t = this;
          return n.A(this.nodes(), function (e) {
            return o.A(t._out[e]);
          });
        }
        setNodes(t, e) {
          var r = arguments;
          var a = this;
          l.A(t, function (t) {
            if (r.length > 1) {
              a.setNode(t, e);
            } else {
              a.setNode(t);
            }
          });
          return this;
        }
        setNode(t, e) {
          if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
            if (arguments.length > 1) {
              this._nodes[t] = e;
            }
            return this;
          }
          this._nodes[t] = arguments.length > 1 ? e : this._defaultNodeLabelFn(t);
          if (this._isCompound) {
            this._parent[t] = m;
            this._children[t] = {};
            this._children[m][t] = true;
          }
          this._in[t] = {};
          this._preds[t] = {};
          this._out[t] = {};
          this._sucs[t] = {};
          ++this._nodeCount;
          return this;
        }
        node(t) {
          return this._nodes[t];
        }
        hasNode(t) {
          return Object.prototype.hasOwnProperty.call(this._nodes, t);
        }
        removeNode(t) {
          if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
            var e = (t) => this.removeEdge(this._edgeObjs[t]);
            delete this._nodes[t];
            if (this._isCompound) {
              this._removeFromParentsChildList(t);
              delete this._parent[t];
              l.A(this.children(t), (t) => {
                this.setParent(t);
              });
              delete this._children[t];
            }
            l.A(i.A(this._in[t]), e);
            delete this._in[t];
            delete this._preds[t];
            l.A(i.A(this._out[t]), e);
            delete this._out[t];
            delete this._sucs[t];
            --this._nodeCount;
          }
          return this;
        }
        setParent(t, e) {
          if (!this._isCompound) {
            throw new Error("Cannot set parent in a non-compound graph");
          }
          if (c.A(e)) {
            e = m;
          } else {
            e += "";
            for (var r = e; !c.A(r); r = this.parent(r)) {
              if (r === t) {
                throw new Error("Setting " + e + " as parent of " + t + " would create a cycle");
              }
            }
            this.setNode(e);
          }
          this.setNode(t);
          this._removeFromParentsChildList(t);
          this._parent[t] = e;
          this._children[e][t] = true;
          return this;
        }
        _removeFromParentsChildList(t) {
          delete this._children[this._parent[t]][t];
        }
        parent(t) {
          if (this._isCompound) {
            var e = this._parent[t];
            if (e !== m) {
              return e;
            }
          }
        }
        children(t) {
          if (c.A(t)) {
            t = m;
          }
          if (this._isCompound) {
            var e = this._children[t];
            if (e) {
              return i.A(e);
            }
          } else if (t === m) {
            return this.nodes();
          } else if (this.hasNode(t)) {
            return [];
          }
        }
        predecessors(t) {
          var e = this._preds[t];
          if (e) {
            return i.A(e);
          }
        }
        successors(t) {
          var e = this._sucs[t];
          if (e) {
            return i.A(e);
          }
        }
        neighbors(t) {
          var e = this.predecessors(t);
          if (e) {
            return y(e, this.successors(t));
          }
        }
        isLeaf(t) {
          var e;
          if (this.isDirected()) {
            e = this.successors(t);
          } else {
            e = this.neighbors(t);
          }
          return e.length === 0;
        }
        filterNodes(t) {
          var e = new this.constructor({ directed: this._isDirected, multigraph: this._isMultigraph, compound: this._isCompound });
          e.setGraph(this.graph());
          var r = this;
          l.A(this._nodes, function (r, a) {
            if (t(a)) {
              e.setNode(a, r);
            }
          });
          l.A(this._edgeObjs, function (t) {
            if (e.hasNode(t.v) && e.hasNode(t.w)) {
              e.setEdge(t, r.edge(t));
            }
          });
          var a = {};
          function s(t) {
            var i = r.parent(t);
            if (i === undefined || e.hasNode(i)) {
              a[t] = i;
              return i;
            } else if (i in a) {
              return a[i];
            } else {
              return s(i);
            }
          }
          if (this._isCompound) {
            l.A(e.nodes(), function (t) {
              e.setParent(t, s(t));
            });
          }
          return e;
        }
        setDefaultEdgeLabel(t) {
          if (!s.A(t)) {
            t = a.A(t);
          }
          this._defaultEdgeLabelFn = t;
          return this;
        }
        edgeCount() {
          return this._edgeCount;
        }
        edges() {
          return f.A(this._edgeObjs);
        }
        setPath(t, e) {
          var r = this;
          var a = arguments;
          b.A(t, function (t, s) {
            if (a.length > 1) {
              r.setEdge(t, s, e);
            } else {
              r.setEdge(t, s);
            }
            return s;
          });
          return this;
        }
        setEdge() {
          var t, e, r, a;
          var s = false;
          var i = arguments[0];
          if (typeof i === "object" && i !== null && "v" in i) {
            t = i.v;
            e = i.w;
            r = i.name;
            if (arguments.length === 2) {
              a = arguments[1];
              s = true;
            }
          } else {
            t = i;
            e = arguments[1];
            r = arguments[3];
            if (arguments.length > 2) {
              a = arguments[2];
              s = true;
            }
          }
          t = "" + t;
          e = "" + e;
          if (!c.A(r)) {
            r = "" + r;
          }
          var n = v(this._isDirected, t, e, r);
          if (Object.prototype.hasOwnProperty.call(this._edgeLabels, n)) {
            if (s) {
              this._edgeLabels[n] = a;
            }
            return this;
          }
          if (!c.A(r) && !this._isMultigraph) {
            throw new Error("Cannot set a named edge when isMultigraph = false");
          }
          this.setNode(t);
          this.setNode(e);
          this._edgeLabels[n] = s ? a : this._defaultEdgeLabelFn(t, e, r);
          var o = S(this._isDirected, t, e, r);
          t = o.v;
          e = o.w;
          Object.freeze(o);
          this._edgeObjs[n] = o;
          L(this._preds[e], t);
          L(this._sucs[t], e);
          this._in[e][n] = o;
          this._out[t][n] = o;
          this._edgeCount++;
          return this;
        }
        edge(t, e, r) {
          var a = arguments.length === 1 ? E(this._isDirected, arguments[0]) : v(this._isDirected, t, e, r);
          return this._edgeLabels[a];
        }
        hasEdge(t, e, r) {
          var a = arguments.length === 1 ? E(this._isDirected, arguments[0]) : v(this._isDirected, t, e, r);
          return Object.prototype.hasOwnProperty.call(this._edgeLabels, a);
        }
        removeEdge(t, e, r) {
          var a = arguments.length === 1 ? E(this._isDirected, arguments[0]) : v(this._isDirected, t, e, r);
          var s = this._edgeObjs[a];
          if (s) {
            t = s.v;
            e = s.w;
            delete this._edgeLabels[a];
            delete this._edgeObjs[a];
            _(this._preds[e], t);
            _(this._sucs[t], e);
            delete this._in[e][a];
            delete this._out[t][a];
            this._edgeCount--;
          }
          return this;
        }
        inEdges(t, e) {
          var r = this._in[t];
          if (r) {
            var a = f.A(r);
            if (!e) {
              return a;
            }
            return n.A(a, function (t) {
              return t.v === e;
            });
          }
        }
        outEdges(t, e) {
          var r = this._out[t];
          if (r) {
            var a = f.A(r);
            if (!e) {
              return a;
            }
            return n.A(a, function (t) {
              return t.w === e;
            });
          }
        }
        nodeEdges(t, e) {
          var r = this.inEdges(t, e);
          if (r) {
            return r.concat(this.outEdges(t, e));
          }
        }
      }
      w.prototype._nodeCount = 0;
      w.prototype._edgeCount = 0;
      function L(t, e) {
        if (t[e]) {
          t[e]++;
        } else {
          t[e] = 1;
        }
      }
      function _(t, e) {
        if (!--t[e]) {
          delete t[e];
        }
      }
      function v(t, e, r, a) {
        var s = "" + e;
        var i = "" + r;
        if (!t && s > i) {
          var n = s;
          s = i;
          i = n;
        }
        return s + k + i + k + (c.A(a) ? x : a);
      }
      function S(t, e, r, a) {
        var s = "" + e;
        var i = "" + r;
        if (!t && s > i) {
          var n = s;
          s = i;
          i = n;
        }
        var o = { v: s, w: i };
        if (a) {
          o.name = a;
        }
        return o;
      }
      function E(t, e) {
        return v(t, e.v, e.w, e.name);
      }
    },
    84416: (t, e, r) => {
      r.d(e, { T: () => a.T });
      var a = r(65791);
      const s = "2.1.9-pre";
    },
    27574: (t, e, r) => {
      r.d(e, { A: () => n });
      var a = r(57991);
      var s = r(63221);
      const i = (t, e) => a.A.lang.round(s.A.parse(t)[e]);
      const n = i;
    },
    97134: (t, e, r) => {
      r.d(e, { A: () => n });
      var a = r(59386);
      var s = 4;
      function i(t) {
        return (0, a.A)(t, s);
      }
      const n = i;
    },
    46364: (t, e, r) => {
      r.d(e, { diagram: () => Me });
      var a = r(94746);
      var s = r(57590);
      var i = r(76261);
      var n = r(96049);
      var o = r(75905);
      var l = r(97134);
      var c = r(27574);
      var h = r(3635);
      var d = r(24982);
      var u = r(84416);
      var g = (function () {
        var t = (0, o.K2)(function (t, e, r, a) {
            for (r = r || {}, a = t.length; a--; r[t[a]] = e);
            return r;
          }, "o"),
          e = [1, 7],
          r = [1, 13],
          a = [1, 14],
          s = [1, 15],
          i = [1, 19],
          n = [1, 16],
          l = [1, 17],
          c = [1, 18],
          h = [8, 30],
          d = [8, 21, 28, 29, 30, 31, 32, 40, 44, 47],
          u = [1, 23],
          g = [1, 24],
          p = [8, 15, 16, 21, 28, 29, 30, 31, 32, 40, 44, 47],
          y = [8, 15, 16, 21, 27, 28, 29, 30, 31, 32, 40, 44, 47],
          f = [1, 49];
        var b = {
          trace: (0, o.K2)(function t() {}, "trace"),
          yy: {},
          symbols_: {
            error: 2,
            spaceLines: 3,
            SPACELINE: 4,
            NL: 5,
            separator: 6,
            SPACE: 7,
            EOF: 8,
            start: 9,
            BLOCK_DIAGRAM_KEY: 10,
            document: 11,
            stop: 12,
            statement: 13,
            link: 14,
            LINK: 15,
            START_LINK: 16,
            LINK_LABEL: 17,
            STR: 18,
            nodeStatement: 19,
            columnsStatement: 20,
            SPACE_BLOCK: 21,
            blockStatement: 22,
            classDefStatement: 23,
            cssClassStatement: 24,
            styleStatement: 25,
            node: 26,
            SIZE: 27,
            COLUMNS: 28,
            "id-block": 29,
            end: 30,
            block: 31,
            NODE_ID: 32,
            nodeShapeNLabel: 33,
            dirList: 34,
            DIR: 35,
            NODE_DSTART: 36,
            NODE_DEND: 37,
            BLOCK_ARROW_START: 38,
            BLOCK_ARROW_END: 39,
            classDef: 40,
            CLASSDEF_ID: 41,
            CLASSDEF_STYLEOPTS: 42,
            DEFAULT: 43,
            class: 44,
            CLASSENTITY_IDS: 45,
            STYLECLASS: 46,
            style: 47,
            STYLE_ENTITY_IDS: 48,
            STYLE_DEFINITION_DATA: 49,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "SPACELINE",
            5: "NL",
            7: "SPACE",
            8: "EOF",
            10: "BLOCK_DIAGRAM_KEY",
            15: "LINK",
            16: "START_LINK",
            17: "LINK_LABEL",
            18: "STR",
            21: "SPACE_BLOCK",
            27: "SIZE",
            28: "COLUMNS",
            29: "id-block",
            30: "end",
            31: "block",
            32: "NODE_ID",
            35: "DIR",
            36: "NODE_DSTART",
            37: "NODE_DEND",
            38: "BLOCK_ARROW_START",
            39: "BLOCK_ARROW_END",
            40: "classDef",
            41: "CLASSDEF_ID",
            42: "CLASSDEF_STYLEOPTS",
            43: "DEFAULT",
            44: "class",
            45: "CLASSENTITY_IDS",
            46: "STYLECLASS",
            47: "style",
            48: "STYLE_ENTITY_IDS",
            49: "STYLE_DEFINITION_DATA",
          },
          productions_: [
            0,
            [3, 1],
            [3, 2],
            [3, 2],
            [6, 1],
            [6, 1],
            [6, 1],
            [9, 3],
            [12, 1],
            [12, 1],
            [12, 2],
            [12, 2],
            [11, 1],
            [11, 2],
            [14, 1],
            [14, 4],
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1],
            [13, 1],
            [19, 3],
            [19, 2],
            [19, 1],
            [20, 1],
            [22, 4],
            [22, 3],
            [26, 1],
            [26, 2],
            [34, 1],
            [34, 2],
            [33, 3],
            [33, 4],
            [23, 3],
            [23, 3],
            [24, 3],
            [25, 3],
          ],
          performAction: (0, o.K2)(function t(e, r, a, s, i, n, o) {
            var l = n.length - 1;
            switch (i) {
              case 4:
                s.getLogger().debug("Rule: separator (NL) ");
                break;
              case 5:
                s.getLogger().debug("Rule: separator (Space) ");
                break;
              case 6:
                s.getLogger().debug("Rule: separator (EOF) ");
                break;
              case 7:
                s.getLogger().debug("Rule: hierarchy: ", n[l - 1]);
                s.setHierarchy(n[l - 1]);
                break;
              case 8:
                s.getLogger().debug("Stop NL ");
                break;
              case 9:
                s.getLogger().debug("Stop EOF ");
                break;
              case 10:
                s.getLogger().debug("Stop NL2 ");
                break;
              case 11:
                s.getLogger().debug("Stop EOF2 ");
                break;
              case 12:
                s.getLogger().debug("Rule: statement: ", n[l]);
                typeof n[l].length === "number" ? (this.$ = n[l]) : (this.$ = [n[l]]);
                break;
              case 13:
                s.getLogger().debug("Rule: statement #2: ", n[l - 1]);
                this.$ = [n[l - 1]].concat(n[l]);
                break;
              case 14:
                s.getLogger().debug("Rule: link: ", n[l], e);
                this.$ = { edgeTypeStr: n[l], label: "" };
                break;
              case 15:
                s.getLogger().debug("Rule: LABEL link: ", n[l - 3], n[l - 1], n[l]);
                this.$ = { edgeTypeStr: n[l], label: n[l - 1] };
                break;
              case 18:
                const t = parseInt(n[l]);
                const r = s.generateId();
                this.$ = { id: r, type: "space", label: "", width: t, children: [] };
                break;
              case 23:
                s.getLogger().debug("Rule: (nodeStatement link node) ", n[l - 2], n[l - 1], n[l], " typestr: ", n[l - 1].edgeTypeStr);
                const a = s.edgeStrToEdgeData(n[l - 1].edgeTypeStr);
                this.$ = [
                  { id: n[l - 2].id, label: n[l - 2].label, type: n[l - 2].type, directions: n[l - 2].directions },
                  {
                    id: n[l - 2].id + "-" + n[l].id,
                    start: n[l - 2].id,
                    end: n[l].id,
                    label: n[l - 1].label,
                    type: "edge",
                    directions: n[l].directions,
                    arrowTypeEnd: a,
                    arrowTypeStart: "arrow_open",
                  },
                  { id: n[l].id, label: n[l].label, type: s.typeStr2Type(n[l].typeStr), directions: n[l].directions },
                ];
                break;
              case 24:
                s.getLogger().debug("Rule: nodeStatement (abc88 node size) ", n[l - 1], n[l]);
                this.$ = {
                  id: n[l - 1].id,
                  label: n[l - 1].label,
                  type: s.typeStr2Type(n[l - 1].typeStr),
                  directions: n[l - 1].directions,
                  widthInColumns: parseInt(n[l], 10),
                };
                break;
              case 25:
                s.getLogger().debug("Rule: nodeStatement (node) ", n[l]);
                this.$ = { id: n[l].id, label: n[l].label, type: s.typeStr2Type(n[l].typeStr), directions: n[l].directions, widthInColumns: 1 };
                break;
              case 26:
                s.getLogger().debug("APA123", this ? this : "na");
                s.getLogger().debug("COLUMNS: ", n[l]);
                this.$ = { type: "column-setting", columns: n[l] === "auto" ? -1 : parseInt(n[l]) };
                break;
              case 27:
                s.getLogger().debug("Rule: id-block statement : ", n[l - 2], n[l - 1]);
                const i = s.generateId();
                this.$ = { ...n[l - 2], type: "composite", children: n[l - 1] };
                break;
              case 28:
                s.getLogger().debug("Rule: blockStatement : ", n[l - 2], n[l - 1], n[l]);
                const o = s.generateId();
                this.$ = { id: o, type: "composite", label: "", children: n[l - 1] };
                break;
              case 29:
                s.getLogger().debug("Rule: node (NODE_ID separator): ", n[l]);
                this.$ = { id: n[l] };
                break;
              case 30:
                s.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", n[l - 1], n[l]);
                this.$ = { id: n[l - 1], label: n[l].label, typeStr: n[l].typeStr, directions: n[l].directions };
                break;
              case 31:
                s.getLogger().debug("Rule: dirList: ", n[l]);
                this.$ = [n[l]];
                break;
              case 32:
                s.getLogger().debug("Rule: dirList: ", n[l - 1], n[l]);
                this.$ = [n[l - 1]].concat(n[l]);
                break;
              case 33:
                s.getLogger().debug("Rule: nodeShapeNLabel: ", n[l - 2], n[l - 1], n[l]);
                this.$ = { typeStr: n[l - 2] + n[l], label: n[l - 1] };
                break;
              case 34:
                s.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", n[l - 3], n[l - 2], " #3:", n[l - 1], n[l]);
                this.$ = { typeStr: n[l - 3] + n[l], label: n[l - 2], directions: n[l - 1] };
                break;
              case 35:
              case 36:
                this.$ = { type: "classDef", id: n[l - 1].trim(), css: n[l].trim() };
                break;
              case 37:
                this.$ = { type: "applyClass", id: n[l - 1].trim(), styleClass: n[l].trim() };
                break;
              case 38:
                this.$ = { type: "applyStyles", id: n[l - 1].trim(), stylesStr: n[l].trim() };
                break;
            }
          }, "anonymous"),
          table: [
            { 9: 1, 10: [1, 2] },
            { 1: [3] },
            { 11: 3, 13: 4, 19: 5, 20: 6, 21: e, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r, 29: a, 31: s, 32: i, 40: n, 44: l, 47: c },
            { 8: [1, 20] },
            t(h, [2, 12], {
              13: 4,
              19: 5,
              20: 6,
              22: 8,
              23: 9,
              24: 10,
              25: 11,
              26: 12,
              11: 21,
              21: e,
              28: r,
              29: a,
              31: s,
              32: i,
              40: n,
              44: l,
              47: c,
            }),
            t(d, [2, 16], { 14: 22, 15: u, 16: g }),
            t(d, [2, 17]),
            t(d, [2, 18]),
            t(d, [2, 19]),
            t(d, [2, 20]),
            t(d, [2, 21]),
            t(d, [2, 22]),
            t(p, [2, 25], { 27: [1, 25] }),
            t(d, [2, 26]),
            { 19: 26, 26: 12, 32: i },
            { 11: 27, 13: 4, 19: 5, 20: 6, 21: e, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r, 29: a, 31: s, 32: i, 40: n, 44: l, 47: c },
            { 41: [1, 28], 43: [1, 29] },
            { 45: [1, 30] },
            { 48: [1, 31] },
            t(y, [2, 29], { 33: 32, 36: [1, 33], 38: [1, 34] }),
            { 1: [2, 7] },
            t(h, [2, 13]),
            { 26: 35, 32: i },
            { 32: [2, 14] },
            { 17: [1, 36] },
            t(p, [2, 24]),
            {
              11: 37,
              13: 4,
              14: 22,
              15: u,
              16: g,
              19: 5,
              20: 6,
              21: e,
              22: 8,
              23: 9,
              24: 10,
              25: 11,
              26: 12,
              28: r,
              29: a,
              31: s,
              32: i,
              40: n,
              44: l,
              47: c,
            },
            { 30: [1, 38] },
            { 42: [1, 39] },
            { 42: [1, 40] },
            { 46: [1, 41] },
            { 49: [1, 42] },
            t(y, [2, 30]),
            { 18: [1, 43] },
            { 18: [1, 44] },
            t(p, [2, 23]),
            { 18: [1, 45] },
            { 30: [1, 46] },
            t(d, [2, 28]),
            t(d, [2, 35]),
            t(d, [2, 36]),
            t(d, [2, 37]),
            t(d, [2, 38]),
            { 37: [1, 47] },
            { 34: 48, 35: f },
            { 15: [1, 50] },
            t(d, [2, 27]),
            t(y, [2, 33]),
            { 39: [1, 51] },
            { 34: 52, 35: f, 39: [2, 31] },
            { 32: [2, 15] },
            t(y, [2, 34]),
            { 39: [2, 32] },
          ],
          defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] },
          parseError: (0, o.K2)(function t(e, r) {
            if (r.recoverable) {
              this.trace(e);
            } else {
              var a = new Error(e);
              a.hash = r;
              throw a;
            }
          }, "parseError"),
          parse: (0, o.K2)(function t(e) {
            var r = this,
              a = [0],
              s = [],
              i = [null],
              n = [],
              l = this.table,
              c = "",
              h = 0,
              d = 0,
              u = 0,
              g = 2,
              p = 1;
            var y = n.slice.call(arguments, 1);
            var f = Object.create(this.lexer);
            var b = { yy: {} };
            for (var x in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, x)) {
                b.yy[x] = this.yy[x];
              }
            }
            f.setInput(e, b.yy);
            b.yy.lexer = f;
            b.yy.parser = this;
            if (typeof f.yylloc == "undefined") {
              f.yylloc = {};
            }
            var m = f.yylloc;
            n.push(m);
            var k = f.options && f.options.ranges;
            if (typeof b.yy.parseError === "function") {
              this.parseError = b.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function w(t) {
              a.length = a.length - 2 * t;
              i.length = i.length - t;
              n.length = n.length - t;
            }
            (0, o.K2)(w, "popStack");
            function L() {
              var t;
              t = s.pop() || f.lex() || p;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  s = t;
                  t = s.pop();
                }
                t = r.symbols_[t] || t;
              }
              return t;
            }
            (0, o.K2)(L, "lex");
            var _,
              v,
              S,
              E,
              D,
              N,
              K = {},
              R,
              C,
              T,
              $;
            while (true) {
              S = a[a.length - 1];
              if (this.defaultActions[S]) {
                E = this.defaultActions[S];
              } else {
                if (_ === null || typeof _ == "undefined") {
                  _ = L();
                }
                E = l[S] && l[S][_];
              }
              if (typeof E === "undefined" || !E.length || !E[0]) {
                var A = "";
                $ = [];
                for (R in l[S]) {
                  if (this.terminals_[R] && R > g) {
                    $.push("'" + this.terminals_[R] + "'");
                  }
                }
                if (f.showPosition) {
                  A =
                    "Parse error on line " +
                    (h + 1) +
                    ":\n" +
                    f.showPosition() +
                    "\nExpecting " +
                    $.join(", ") +
                    ", got '" +
                    (this.terminals_[_] || _) +
                    "'";
                } else {
                  A = "Parse error on line " + (h + 1) + ": Unexpected " + (_ == p ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
                }
                this.parseError(A, { text: f.match, token: this.terminals_[_] || _, line: f.yylineno, loc: m, expected: $ });
              }
              if (E[0] instanceof Array && E.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + S + ", token: " + _);
              }
              switch (E[0]) {
                case 1:
                  a.push(_);
                  i.push(f.yytext);
                  n.push(f.yylloc);
                  a.push(E[1]);
                  _ = null;
                  if (!v) {
                    d = f.yyleng;
                    c = f.yytext;
                    h = f.yylineno;
                    m = f.yylloc;
                    if (u > 0) {
                      u--;
                    }
                  } else {
                    _ = v;
                    v = null;
                  }
                  break;
                case 2:
                  C = this.productions_[E[1]][1];
                  K.$ = i[i.length - C];
                  K._$ = {
                    first_line: n[n.length - (C || 1)].first_line,
                    last_line: n[n.length - 1].last_line,
                    first_column: n[n.length - (C || 1)].first_column,
                    last_column: n[n.length - 1].last_column,
                  };
                  if (k) {
                    K._$.range = [n[n.length - (C || 1)].range[0], n[n.length - 1].range[1]];
                  }
                  N = this.performAction.apply(K, [c, d, h, b.yy, E[1], i, n].concat(y));
                  if (typeof N !== "undefined") {
                    return N;
                  }
                  if (C) {
                    a = a.slice(0, -1 * C * 2);
                    i = i.slice(0, -1 * C);
                    n = n.slice(0, -1 * C);
                  }
                  a.push(this.productions_[E[1]][0]);
                  i.push(K.$);
                  n.push(K._$);
                  T = l[a[a.length - 2]][a[a.length - 1]];
                  a.push(T);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          }, "parse"),
        };
        var x = (function () {
          var t = {
            EOF: 1,
            parseError: (0, o.K2)(function t(e, r) {
              if (this.yy.parser) {
                this.yy.parser.parseError(e, r);
              } else {
                throw new Error(e);
              }
            }, "parseError"),
            setInput: (0, o.K2)(function (t, e) {
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
            input: (0, o.K2)(function () {
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
            unput: (0, o.K2)(function (t) {
              var e = t.length;
              var r = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - e);
              this.offset -= e;
              var a = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (r.length - 1) {
                this.yylineno -= r.length - 1;
              }
              var s = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: r
                  ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [s[0], s[0] + this.yyleng - e];
              }
              this.yyleng = this.yytext.length;
              return this;
            }, "unput"),
            more: (0, o.K2)(function () {
              this._more = true;
              return this;
            }, "more"),
            reject: (0, o.K2)(function () {
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
            less: (0, o.K2)(function (t) {
              this.unput(this.match.slice(t));
            }, "less"),
            pastInput: (0, o.K2)(function () {
              var t = this.matched.substr(0, this.matched.length - this.match.length);
              return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: (0, o.K2)(function () {
              var t = this.match;
              if (t.length < 20) {
                t += this._input.substr(0, 20 - t.length);
              }
              return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: (0, o.K2)(function () {
              var t = this.pastInput();
              var e = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + e + "^";
            }, "showPosition"),
            test_match: (0, o.K2)(function (t, e) {
              var r, a, s;
              if (this.options.backtrack_lexer) {
                s = {
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
                  s.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              a = t[0].match(/(?:\r\n?|\n).*/g);
              if (a) {
                this.yylineno += a.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
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
              r = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (r) {
                return r;
              } else if (this._backtrack) {
                for (var i in s) {
                  this[i] = s[i];
                }
                return false;
              }
              return false;
            }, "test_match"),
            next: (0, o.K2)(function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var t, e, r, a;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var s = this._currentRules();
              for (var i = 0; i < s.length; i++) {
                r = this._input.match(this.rules[s[i]]);
                if (r && (!e || r[0].length > e[0].length)) {
                  e = r;
                  a = i;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(r, s[i]);
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
                t = this.test_match(e, s[a]);
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
            lex: (0, o.K2)(function t() {
              var e = this.next();
              if (e) {
                return e;
              } else {
                return this.lex();
              }
            }, "lex"),
            begin: (0, o.K2)(function t(e) {
              this.conditionStack.push(e);
            }, "begin"),
            popState: (0, o.K2)(function t() {
              var e = this.conditionStack.length - 1;
              if (e > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            }, "popState"),
            _currentRules: (0, o.K2)(function t() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            }, "_currentRules"),
            topState: (0, o.K2)(function t(e) {
              e = this.conditionStack.length - 1 - Math.abs(e || 0);
              if (e >= 0) {
                return this.conditionStack[e];
              } else {
                return "INITIAL";
              }
            }, "topState"),
            pushState: (0, o.K2)(function t(e) {
              this.begin(e);
            }, "pushState"),
            stateStackSize: (0, o.K2)(function t() {
              return this.conditionStack.length;
            }, "stateStackSize"),
            options: {},
            performAction: (0, o.K2)(function t(e, r, a, s) {
              var i = s;
              switch (a) {
                case 0:
                  return 10;
                  break;
                case 1:
                  e.getLogger().debug("Found space-block");
                  return 31;
                  break;
                case 2:
                  e.getLogger().debug("Found nl-block");
                  return 31;
                  break;
                case 3:
                  e.getLogger().debug("Found space-block");
                  return 29;
                  break;
                case 4:
                  e.getLogger().debug(".", r.yytext);
                  break;
                case 5:
                  e.getLogger().debug("_", r.yytext);
                  break;
                case 6:
                  return 5;
                  break;
                case 7:
                  r.yytext = -1;
                  return 28;
                  break;
                case 8:
                  r.yytext = r.yytext.replace(/columns\s+/, "");
                  e.getLogger().debug("COLUMNS (LEX)", r.yytext);
                  return 28;
                  break;
                case 9:
                  this.pushState("md_string");
                  break;
                case 10:
                  return "MD_STR";
                  break;
                case 11:
                  this.popState();
                  break;
                case 12:
                  this.pushState("string");
                  break;
                case 13:
                  e.getLogger().debug("LEX: POPPING STR:", r.yytext);
                  this.popState();
                  break;
                case 14:
                  e.getLogger().debug("LEX: STR end:", r.yytext);
                  return "STR";
                  break;
                case 15:
                  r.yytext = r.yytext.replace(/space\:/, "");
                  e.getLogger().debug("SPACE NUM (LEX)", r.yytext);
                  return 21;
                  break;
                case 16:
                  r.yytext = "1";
                  e.getLogger().debug("COLUMNS (LEX)", r.yytext);
                  return 21;
                  break;
                case 17:
                  return 43;
                  break;
                case 18:
                  return "LINKSTYLE";
                  break;
                case 19:
                  return "INTERPOLATE";
                  break;
                case 20:
                  this.pushState("CLASSDEF");
                  return 40;
                  break;
                case 21:
                  this.popState();
                  this.pushState("CLASSDEFID");
                  return "DEFAULT_CLASSDEF_ID";
                  break;
                case 22:
                  this.popState();
                  this.pushState("CLASSDEFID");
                  return 41;
                  break;
                case 23:
                  this.popState();
                  return 42;
                  break;
                case 24:
                  this.pushState("CLASS");
                  return 44;
                  break;
                case 25:
                  this.popState();
                  this.pushState("CLASS_STYLE");
                  return 45;
                  break;
                case 26:
                  this.popState();
                  return 46;
                  break;
                case 27:
                  this.pushState("STYLE_STMNT");
                  return 47;
                  break;
                case 28:
                  this.popState();
                  this.pushState("STYLE_DEFINITION");
                  return 48;
                  break;
                case 29:
                  this.popState();
                  return 49;
                  break;
                case 30:
                  this.pushState("acc_title");
                  return "acc_title";
                  break;
                case 31:
                  this.popState();
                  return "acc_title_value";
                  break;
                case 32:
                  this.pushState("acc_descr");
                  return "acc_descr";
                  break;
                case 33:
                  this.popState();
                  return "acc_descr_value";
                  break;
                case 34:
                  this.pushState("acc_descr_multiline");
                  break;
                case 35:
                  this.popState();
                  break;
                case 36:
                  return "acc_descr_multiline_value";
                  break;
                case 37:
                  return 30;
                  break;
                case 38:
                  this.popState();
                  e.getLogger().debug("Lex: ((");
                  return "NODE_DEND";
                  break;
                case 39:
                  this.popState();
                  e.getLogger().debug("Lex: ((");
                  return "NODE_DEND";
                  break;
                case 40:
                  this.popState();
                  e.getLogger().debug("Lex: ))");
                  return "NODE_DEND";
                  break;
                case 41:
                  this.popState();
                  e.getLogger().debug("Lex: ((");
                  return "NODE_DEND";
                  break;
                case 42:
                  this.popState();
                  e.getLogger().debug("Lex: ((");
                  return "NODE_DEND";
                  break;
                case 43:
                  this.popState();
                  e.getLogger().debug("Lex: (-");
                  return "NODE_DEND";
                  break;
                case 44:
                  this.popState();
                  e.getLogger().debug("Lex: -)");
                  return "NODE_DEND";
                  break;
                case 45:
                  this.popState();
                  e.getLogger().debug("Lex: ((");
                  return "NODE_DEND";
                  break;
                case 46:
                  this.popState();
                  e.getLogger().debug("Lex: ]]");
                  return "NODE_DEND";
                  break;
                case 47:
                  this.popState();
                  e.getLogger().debug("Lex: (");
                  return "NODE_DEND";
                  break;
                case 48:
                  this.popState();
                  e.getLogger().debug("Lex: ])");
                  return "NODE_DEND";
                  break;
                case 49:
                  this.popState();
                  e.getLogger().debug("Lex: /]");
                  return "NODE_DEND";
                  break;
                case 50:
                  this.popState();
                  e.getLogger().debug("Lex: /]");
                  return "NODE_DEND";
                  break;
                case 51:
                  this.popState();
                  e.getLogger().debug("Lex: )]");
                  return "NODE_DEND";
                  break;
                case 52:
                  this.popState();
                  e.getLogger().debug("Lex: )");
                  return "NODE_DEND";
                  break;
                case 53:
                  this.popState();
                  e.getLogger().debug("Lex: ]>");
                  return "NODE_DEND";
                  break;
                case 54:
                  this.popState();
                  e.getLogger().debug("Lex: ]");
                  return "NODE_DEND";
                  break;
                case 55:
                  e.getLogger().debug("Lexa: -)");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 56:
                  e.getLogger().debug("Lexa: (-");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 57:
                  e.getLogger().debug("Lexa: ))");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 58:
                  e.getLogger().debug("Lexa: )");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 59:
                  e.getLogger().debug("Lex: (((");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 60:
                  e.getLogger().debug("Lexa: )");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 61:
                  e.getLogger().debug("Lexa: )");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 62:
                  e.getLogger().debug("Lexa: )");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 63:
                  e.getLogger().debug("Lexc: >");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 64:
                  e.getLogger().debug("Lexa: ([");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 65:
                  e.getLogger().debug("Lexa: )");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 66:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 67:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 68:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 69:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 70:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 71:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 72:
                  this.pushState("NODE");
                  return 36;
                  break;
                case 73:
                  e.getLogger().debug("Lexa: [");
                  this.pushState("NODE");
                  return 36;
                  break;
                case 74:
                  this.pushState("BLOCK_ARROW");
                  e.getLogger().debug("LEX ARR START");
                  return 38;
                  break;
                case 75:
                  e.getLogger().debug("Lex: NODE_ID", r.yytext);
                  return 32;
                  break;
                case 76:
                  e.getLogger().debug("Lex: EOF", r.yytext);
                  return 8;
                  break;
                case 77:
                  this.pushState("md_string");
                  break;
                case 78:
                  this.pushState("md_string");
                  break;
                case 79:
                  return "NODE_DESCR";
                  break;
                case 80:
                  this.popState();
                  break;
                case 81:
                  e.getLogger().debug("Lex: Starting string");
                  this.pushState("string");
                  break;
                case 82:
                  e.getLogger().debug("LEX ARR: Starting string");
                  this.pushState("string");
                  break;
                case 83:
                  e.getLogger().debug("LEX: NODE_DESCR:", r.yytext);
                  return "NODE_DESCR";
                  break;
                case 84:
                  e.getLogger().debug("LEX POPPING");
                  this.popState();
                  break;
                case 85:
                  e.getLogger().debug("Lex: =>BAE");
                  this.pushState("ARROW_DIR");
                  break;
                case 86:
                  r.yytext = r.yytext.replace(/^,\s*/, "");
                  e.getLogger().debug("Lex (right): dir:", r.yytext);
                  return "DIR";
                  break;
                case 87:
                  r.yytext = r.yytext.replace(/^,\s*/, "");
                  e.getLogger().debug("Lex (left):", r.yytext);
                  return "DIR";
                  break;
                case 88:
                  r.yytext = r.yytext.replace(/^,\s*/, "");
                  e.getLogger().debug("Lex (x):", r.yytext);
                  return "DIR";
                  break;
                case 89:
                  r.yytext = r.yytext.replace(/^,\s*/, "");
                  e.getLogger().debug("Lex (y):", r.yytext);
                  return "DIR";
                  break;
                case 90:
                  r.yytext = r.yytext.replace(/^,\s*/, "");
                  e.getLogger().debug("Lex (up):", r.yytext);
                  return "DIR";
                  break;
                case 91:
                  r.yytext = r.yytext.replace(/^,\s*/, "");
                  e.getLogger().debug("Lex (down):", r.yytext);
                  return "DIR";
                  break;
                case 92:
                  r.yytext = "]>";
                  e.getLogger().debug("Lex (ARROW_DIR end):", r.yytext);
                  this.popState();
                  this.popState();
                  return "BLOCK_ARROW_END";
                  break;
                case 93:
                  e.getLogger().debug("Lex: LINK", "#" + r.yytext + "#");
                  return 15;
                  break;
                case 94:
                  e.getLogger().debug("Lex: LINK", r.yytext);
                  return 15;
                  break;
                case 95:
                  e.getLogger().debug("Lex: LINK", r.yytext);
                  return 15;
                  break;
                case 96:
                  e.getLogger().debug("Lex: LINK", r.yytext);
                  return 15;
                  break;
                case 97:
                  e.getLogger().debug("Lex: START_LINK", r.yytext);
                  this.pushState("LLABEL");
                  return 16;
                  break;
                case 98:
                  e.getLogger().debug("Lex: START_LINK", r.yytext);
                  this.pushState("LLABEL");
                  return 16;
                  break;
                case 99:
                  e.getLogger().debug("Lex: START_LINK", r.yytext);
                  this.pushState("LLABEL");
                  return 16;
                  break;
                case 100:
                  this.pushState("md_string");
                  break;
                case 101:
                  e.getLogger().debug("Lex: Starting string");
                  this.pushState("string");
                  return "LINK_LABEL";
                  break;
                case 102:
                  this.popState();
                  e.getLogger().debug("Lex: LINK", "#" + r.yytext + "#");
                  return 15;
                  break;
                case 103:
                  this.popState();
                  e.getLogger().debug("Lex: LINK", r.yytext);
                  return 15;
                  break;
                case 104:
                  this.popState();
                  e.getLogger().debug("Lex: LINK", r.yytext);
                  return 15;
                  break;
                case 105:
                  e.getLogger().debug("Lex: COLON", r.yytext);
                  r.yytext = r.yytext.slice(1);
                  return 27;
                  break;
              }
            }, "anonymous"),
            rules: [
              /^(?:block-beta\b)/,
              /^(?:block\s+)/,
              /^(?:block\n+)/,
              /^(?:block:)/,
              /^(?:[\s]+)/,
              /^(?:[\n]+)/,
              /^(?:((\u000D\u000A)|(\u000A)))/,
              /^(?:columns\s+auto\b)/,
              /^(?:columns\s+[\d]+)/,
              /^(?:["][`])/,
              /^(?:[^`"]+)/,
              /^(?:[`]["])/,
              /^(?:["])/,
              /^(?:["])/,
              /^(?:[^"]*)/,
              /^(?:space[:]\d+)/,
              /^(?:space\b)/,
              /^(?:default\b)/,
              /^(?:linkStyle\b)/,
              /^(?:interpolate\b)/,
              /^(?:classDef\s+)/,
              /^(?:DEFAULT\s+)/,
              /^(?:\w+\s+)/,
              /^(?:[^\n]*)/,
              /^(?:class\s+)/,
              /^(?:(\w+)+((,\s*\w+)*))/,
              /^(?:[^\n]*)/,
              /^(?:style\s+)/,
              /^(?:(\w+)+((,\s*\w+)*))/,
              /^(?:[^\n]*)/,
              /^(?:accTitle\s*:\s*)/,
              /^(?:(?!\n||)*[^\n]*)/,
              /^(?:accDescr\s*:\s*)/,
              /^(?:(?!\n||)*[^\n]*)/,
              /^(?:accDescr\s*\{\s*)/,
              /^(?:[\}])/,
              /^(?:[^\}]*)/,
              /^(?:end\b\s*)/,
              /^(?:\(\(\()/,
              /^(?:\)\)\))/,
              /^(?:[\)]\))/,
              /^(?:\}\})/,
              /^(?:\})/,
              /^(?:\(-)/,
              /^(?:-\))/,
              /^(?:\(\()/,
              /^(?:\]\])/,
              /^(?:\()/,
              /^(?:\]\))/,
              /^(?:\\\])/,
              /^(?:\/\])/,
              /^(?:\)\])/,
              /^(?:[\)])/,
              /^(?:\]>)/,
              /^(?:[\]])/,
              /^(?:-\))/,
              /^(?:\(-)/,
              /^(?:\)\))/,
              /^(?:\))/,
              /^(?:\(\(\()/,
              /^(?:\(\()/,
              /^(?:\{\{)/,
              /^(?:\{)/,
              /^(?:>)/,
              /^(?:\(\[)/,
              /^(?:\()/,
              /^(?:\[\[)/,
              /^(?:\[\|)/,
              /^(?:\[\()/,
              /^(?:\)\)\))/,
              /^(?:\[\\)/,
              /^(?:\[\/)/,
              /^(?:\[\\)/,
              /^(?:\[)/,
              /^(?:<\[)/,
              /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
              /^(?:$)/,
              /^(?:["][`])/,
              /^(?:["][`])/,
              /^(?:[^`"]+)/,
              /^(?:[`]["])/,
              /^(?:["])/,
              /^(?:["])/,
              /^(?:[^"]+)/,
              /^(?:["])/,
              /^(?:\]>\s*\()/,
              /^(?:,?\s*right\s*)/,
              /^(?:,?\s*left\s*)/,
              /^(?:,?\s*x\s*)/,
              /^(?:,?\s*y\s*)/,
              /^(?:,?\s*up\s*)/,
              /^(?:,?\s*down\s*)/,
              /^(?:\)\s*)/,
              /^(?:\s*[xo<]?--+[-xo>]\s*)/,
              /^(?:\s*[xo<]?==+[=xo>]\s*)/,
              /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
              /^(?:\s*~~[\~]+\s*)/,
              /^(?:\s*[xo<]?--\s*)/,
              /^(?:\s*[xo<]?==\s*)/,
              /^(?:\s*[xo<]?-\.\s*)/,
              /^(?:["][`])/,
              /^(?:["])/,
              /^(?:\s*[xo<]?--+[-xo>]\s*)/,
              /^(?:\s*[xo<]?==+[=xo>]\s*)/,
              /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
              /^(?::\d+)/,
            ],
            conditions: {
              STYLE_DEFINITION: { rules: [29], inclusive: false },
              STYLE_STMNT: { rules: [28], inclusive: false },
              CLASSDEFID: { rules: [23], inclusive: false },
              CLASSDEF: { rules: [21, 22], inclusive: false },
              CLASS_STYLE: { rules: [26], inclusive: false },
              CLASS: { rules: [25], inclusive: false },
              LLABEL: { rules: [100, 101, 102, 103, 104], inclusive: false },
              ARROW_DIR: { rules: [86, 87, 88, 89, 90, 91, 92], inclusive: false },
              BLOCK_ARROW: { rules: [77, 82, 85], inclusive: false },
              NODE: { rules: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 78, 81], inclusive: false },
              md_string: { rules: [10, 11, 79, 80], inclusive: false },
              space: { rules: [], inclusive: false },
              string: { rules: [13, 14, 83, 84], inclusive: false },
              acc_descr_multiline: { rules: [35, 36], inclusive: false },
              acc_descr: { rules: [33], inclusive: false },
              acc_title: { rules: [31], inclusive: false },
              INITIAL: {
                rules: [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 24, 27, 30, 32, 34, 37, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
                  67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 93, 94, 95, 96, 97, 98, 99, 105,
                ],
                inclusive: true,
              },
            },
          };
          return t;
        })();
        b.lexer = x;
        function m() {
          this.yy = {};
        }
        (0, o.K2)(m, "Parser");
        m.prototype = b;
        b.Parser = m;
        return new m();
      })();
      g.parser = g;
      var p = g;
      var y = new Map();
      var f = [];
      var b = new Map();
      var x = "color";
      var m = "fill";
      var k = "bgFill";
      var w = ",";
      var L = (0, o.D7)();
      var _ = new Map();
      var v = (0, o.K2)((t) => o.Y2.sanitizeText(t, L), "sanitizeText");
      var S = (0, o.K2)(function (t, e = "") {
        let r = _.get(t);
        if (!r) {
          r = { id: t, styles: [], textStyles: [] };
          _.set(t, r);
        }
        if (e !== void 0 && e !== null) {
          e.split(w).forEach((t) => {
            const e = t.replace(/([^;]*);/, "$1").trim();
            if (RegExp(x).exec(t)) {
              const t = e.replace(m, k);
              const a = t.replace(x, m);
              r.textStyles.push(a);
            }
            r.styles.push(e);
          });
        }
      }, "addStyleClass");
      var E = (0, o.K2)(function (t, e = "") {
        const r = y.get(t);
        if (e !== void 0 && e !== null) {
          r.styles = e.split(w);
        }
      }, "addStyle2Node");
      var D = (0, o.K2)(function (t, e) {
        t.split(",").forEach(function (t) {
          let r = y.get(t);
          if (r === void 0) {
            const e = t.trim();
            r = { id: e, type: "na", children: [] };
            y.set(e, r);
          }
          if (!r.classes) {
            r.classes = [];
          }
          r.classes.push(e);
        });
      }, "setCssClass");
      var N = (0, o.K2)((t, e) => {
        const r = t.flat();
        const a = [];
        for (const s of r) {
          if (s.label) {
            s.label = v(s.label);
          }
          if (s.type === "classDef") {
            S(s.id, s.css);
            continue;
          }
          if (s.type === "applyClass") {
            D(s.id, s?.styleClass ?? "");
            continue;
          }
          if (s.type === "applyStyles") {
            if (s?.stylesStr) {
              E(s.id, s?.stylesStr);
            }
            continue;
          }
          if (s.type === "column-setting") {
            e.columns = s.columns ?? -1;
          } else if (s.type === "edge") {
            const t = (b.get(s.id) ?? 0) + 1;
            b.set(s.id, t);
            s.id = t + "-" + s.id;
            f.push(s);
          } else {
            if (!s.label) {
              if (s.type === "composite") {
                s.label = "";
              } else {
                s.label = s.id;
              }
            }
            const t = y.get(s.id);
            if (t === void 0) {
              y.set(s.id, s);
            } else {
              if (s.type !== "na") {
                t.type = s.type;
              }
              if (s.label !== s.id) {
                t.label = s.label;
              }
            }
            if (s.children) {
              N(s.children, s);
            }
            if (s.type === "space") {
              const t = s.width ?? 1;
              for (let e = 0; e < t; e++) {
                const t = (0, l.A)(s);
                t.id = t.id + "-" + e;
                y.set(t.id, t);
                a.push(t);
              }
            } else if (t === void 0) {
              a.push(s);
            }
          }
        }
        e.children = a;
      }, "populateBlockDatabase");
      var K = [];
      var R = { id: "root", type: "composite", children: [], columns: -1 };
      var C = (0, o.K2)(() => {
        o.Rm.debug("Clear called");
        (0, o.IU)();
        R = { id: "root", type: "composite", children: [], columns: -1 };
        y = new Map([["root", R]]);
        K = [];
        _ = new Map();
        f = [];
        b = new Map();
      }, "clear");
      function T(t) {
        o.Rm.debug("typeStr2Type", t);
        switch (t) {
          case "[]":
            return "square";
          case "()":
            o.Rm.debug("we have a round");
            return "round";
          case "(())":
            return "circle";
          case ">]":
            return "rect_left_inv_arrow";
          case "{}":
            return "diamond";
          case "{{}}":
            return "hexagon";
          case "([])":
            return "stadium";
          case "[[]]":
            return "subroutine";
          case "[()]":
            return "cylinder";
          case "((()))":
            return "doublecircle";
          case "[//]":
            return "lean_right";
          case "[\\\\]":
            return "lean_left";
          case "[/\\]":
            return "trapezoid";
          case "[\\/]":
            return "inv_trapezoid";
          case "<[]>":
            return "block_arrow";
          default:
            return "na";
        }
      }
      (0, o.K2)(T, "typeStr2Type");
      function $(t) {
        o.Rm.debug("typeStr2Type", t);
        switch (t) {
          case "==":
            return "thick";
          default:
            return "normal";
        }
      }
      (0, o.K2)($, "edgeTypeStr2Type");
      function A(t) {
        switch (t.trim()) {
          case "--x":
            return "arrow_cross";
          case "--o":
            return "arrow_circle";
          default:
            return "arrow_point";
        }
      }
      (0, o.K2)(A, "edgeStrToEdgeData");
      var O = 0;
      var I = (0, o.K2)(() => {
        O++;
        return "id-" + Math.random().toString(36).substr(2, 12) + "-" + O;
      }, "generateId");
      var B = (0, o.K2)((t) => {
        R.children = t;
        N(t, R);
        K = R.children;
      }, "setHierarchy");
      var z = (0, o.K2)((t) => {
        const e = y.get(t);
        if (!e) {
          return -1;
        }
        if (e.columns) {
          return e.columns;
        }
        if (!e.children) {
          return -1;
        }
        return e.children.length;
      }, "getColumns");
      var M = (0, o.K2)(() => [...y.values()], "getBlocksFlat");
      var P = (0, o.K2)(() => K || [], "getBlocks");
      var Y = (0, o.K2)(() => f, "getEdges");
      var j = (0, o.K2)((t) => y.get(t), "getBlock");
      var F = (0, o.K2)((t) => {
        y.set(t.id, t);
      }, "setBlock");
      var W = (0, o.K2)(() => console, "getLogger");
      var X = (0, o.K2)(function () {
        return _;
      }, "getClasses");
      var H = {
        getConfig: (0, o.K2)(() => (0, o.zj)().block, "getConfig"),
        typeStr2Type: T,
        edgeTypeStr2Type: $,
        edgeStrToEdgeData: A,
        getLogger: W,
        getBlocksFlat: M,
        getBlocks: P,
        getEdges: Y,
        setHierarchy: B,
        getBlock: j,
        setBlock: F,
        getColumns: z,
        getClasses: X,
        clear: C,
        generateId: I,
      };
      var U = H;
      var Z = (0, o.K2)((t, e) => {
        const r = c.A;
        const a = r(t, "r");
        const s = r(t, "g");
        const i = r(t, "b");
        return h.A(a, s, i, e);
      }, "fade");
      var q = (0, o.K2)(
        (t) =>
          `.label {\n    font-family: ${t.fontFamily};\n    color: ${t.nodeTextColor || t.textColor};\n  }\n  .cluster-label text {\n    fill: ${
            t.titleColor
          };\n  }\n  .cluster-label span,p {\n    color: ${t.titleColor};\n  }\n\n\n\n  .label text,span,p {\n    fill: ${
            t.nodeTextColor || t.textColor
          };\n    color: ${
            t.nodeTextColor || t.textColor
          };\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${
            t.nodeBorder
          };\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${
            t.arrowheadColor
          };\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${
            t.lineColor
          };\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${
            t.edgeLabelBackground
          };\n    rect {\n      opacity: 0.5;\n      background-color: ${t.edgeLabelBackground};\n      fill: ${
            t.edgeLabelBackground
          };\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${Z(
            t.edgeLabelBackground,
            0.5
          )};\n    // background-color:\n  }\n\n  .node .cluster {\n    // fill: ${Z(t.mainBkg, 0.5)};\n    fill: ${Z(
            t.clusterBkg,
            0.5
          )};\n    stroke: ${Z(
            t.clusterBorder,
            0.2
          )};\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${
            t.titleColor
          };\n  }\n\n  .cluster span,p {\n    color: ${t.titleColor};\n  }\n  /* .cluster div {\n    color: ${
            t.titleColor
          };\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${
            t.fontFamily
          };\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${
            t.border2
          };\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${
            t.textColor
          };\n  }\n`,
        "getStyles"
      );
      var G = q;
      var J = (0, o.K2)((t, e, r, a) => {
        e.forEach((e) => {
          ot[e](t, r, a);
        });
      }, "insertMarkers");
      var V = (0, o.K2)((t, e, r) => {
        o.Rm.trace("Making markers for ", r);
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-extensionStart")
          .attr("class", "marker extension " + e)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-extensionEnd")
          .attr("class", "marker extension " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
      }, "extension");
      var Q = (0, o.K2)((t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-compositionStart")
          .attr("class", "marker composition " + e)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-compositionEnd")
          .attr("class", "marker composition " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      }, "composition");
      var tt = (0, o.K2)((t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-aggregationStart")
          .attr("class", "marker aggregation " + e)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-aggregationEnd")
          .attr("class", "marker aggregation " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      }, "aggregation");
      var et = (0, o.K2)((t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-dependencyStart")
          .attr("class", "marker dependency " + e)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-dependencyEnd")
          .attr("class", "marker dependency " + e)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      }, "dependency");
      var rt = (0, o.K2)((t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-lollipopStart")
          .attr("class", "marker lollipop " + e)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-lollipopEnd")
          .attr("class", "marker lollipop " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
      }, "lollipop");
      var at = (0, o.K2)((t, e, r) => {
        t.append("marker")
          .attr("id", r + "_" + e + "-pointEnd")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 6)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        t.append("marker")
          .attr("id", r + "_" + e + "-pointStart")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 4.5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 5 L 10 10 L 10 0 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      }, "point");
      var st = (0, o.K2)((t, e, r) => {
        t.append("marker")
          .attr("id", r + "_" + e + "-circleEnd")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 11)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        t.append("marker")
          .attr("id", r + "_" + e + "-circleStart")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -1)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      }, "circle");
      var it = (0, o.K2)((t, e, r) => {
        t.append("marker")
          .attr("id", r + "_" + e + "-crossEnd")
          .attr("class", "marker cross " + e)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", 12)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
        t.append("marker")
          .attr("id", r + "_" + e + "-crossStart")
          .attr("class", "marker cross " + e)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", -1)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
      }, "cross");
      var nt = (0, o.K2)((t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-barbEnd")
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "strokeWidth")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
      }, "barb");
      var ot = { extension: V, composition: Q, aggregation: tt, dependency: et, lollipop: rt, point: at, circle: st, cross: it, barb: nt };
      var lt = J;
      var ct = (0, o.D7)()?.block?.padding ?? 8;
      function ht(t, e) {
        if (t === 0 || !Number.isInteger(t)) {
          throw new Error("Columns must be an integer !== 0.");
        }
        if (e < 0 || !Number.isInteger(e)) {
          throw new Error("Position must be a non-negative integer." + e);
        }
        if (t < 0) {
          return { px: e, py: 0 };
        }
        if (t === 1) {
          return { px: 0, py: e };
        }
        const r = e % t;
        const a = Math.floor(e / t);
        return { px: r, py: a };
      }
      (0, o.K2)(ht, "calculateBlockPosition");
      var dt = (0, o.K2)((t) => {
        let e = 0;
        let r = 0;
        for (const a of t.children) {
          const { width: s, height: i, x: n, y: l } = a.size ?? { width: 0, height: 0, x: 0, y: 0 };
          o.Rm.debug("getMaxChildSize abc95 child:", a.id, "width:", s, "height:", i, "x:", n, "y:", l, a.type);
          if (a.type === "space") {
            continue;
          }
          if (s > e) {
            e = s / (t.widthInColumns ?? 1);
          }
          if (i > r) {
            r = i;
          }
        }
        return { width: e, height: r };
      }, "getMaxChildSize");
      function ut(t, e, r = 0, a = 0) {
        o.Rm.debug("setBlockSizes abc95 (start)", t.id, t?.size?.x, "block width =", t?.size, "sieblingWidth", r);
        if (!t?.size?.width) {
          t.size = { width: r, height: a, x: 0, y: 0 };
        }
        let s = 0;
        let i = 0;
        if (t.children?.length > 0) {
          for (const r of t.children) {
            ut(r, e);
          }
          const n = dt(t);
          s = n.width;
          i = n.height;
          o.Rm.debug("setBlockSizes abc95 maxWidth of", t.id, ":s children is ", s, i);
          for (const e of t.children) {
            if (e.size) {
              o.Rm.debug(`abc95 Setting size of children of ${t.id} id=${e.id} ${s} ${i} ${JSON.stringify(e.size)}`);
              e.size.width = s * (e.widthInColumns ?? 1) + ct * ((e.widthInColumns ?? 1) - 1);
              e.size.height = i;
              e.size.x = 0;
              e.size.y = 0;
              o.Rm.debug(`abc95 updating size of ${t.id} children child:${e.id} maxWidth:${s} maxHeight:${i}`);
            }
          }
          for (const r of t.children) {
            ut(r, e, s, i);
          }
          const l = t.columns ?? -1;
          let c = 0;
          for (const e of t.children) {
            c += e.widthInColumns ?? 1;
          }
          let h = t.children.length;
          if (l > 0 && l < c) {
            h = l;
          }
          const d = Math.ceil(c / h);
          let u = h * (s + ct) + ct;
          let g = d * (i + ct) + ct;
          if (u < r) {
            o.Rm.debug(`Detected to small siebling: abc95 ${t.id} sieblingWidth ${r} sieblingHeight ${a} width ${u}`);
            u = r;
            g = a;
            const e = (r - h * ct - ct) / h;
            const n = (a - d * ct - ct) / d;
            o.Rm.debug("Size indata abc88", t.id, "childWidth", e, "maxWidth", s);
            o.Rm.debug("Size indata abc88", t.id, "childHeight", n, "maxHeight", i);
            o.Rm.debug("Size indata abc88 xSize", h, "padding", ct);
            for (const r of t.children) {
              if (r.size) {
                r.size.width = e;
                r.size.height = n;
                r.size.x = 0;
                r.size.y = 0;
              }
            }
          }
          o.Rm.debug(`abc95 (finale calc) ${t.id} xSize ${h} ySize ${d} columns ${l}${t.children.length} width=${Math.max(u, t.size?.width || 0)}`);
          if (u < (t?.size?.width || 0)) {
            u = t?.size?.width || 0;
            const e = l > 0 ? Math.min(t.children.length, l) : t.children.length;
            if (e > 0) {
              const r = (u - e * ct - ct) / e;
              o.Rm.debug("abc95 (growing to fit) width", t.id, u, t.size?.width, r);
              for (const e of t.children) {
                if (e.size) {
                  e.size.width = r;
                }
              }
            }
          }
          t.size = { width: u, height: g, x: 0, y: 0 };
        }
        o.Rm.debug("setBlockSizes abc94 (done)", t.id, t?.size?.x, t?.size?.width, t?.size?.y, t?.size?.height);
      }
      (0, o.K2)(ut, "setBlockSizes");
      function gt(t, e) {
        o.Rm.debug(`abc85 layout blocks (=>layoutBlocks) ${t.id} x: ${t?.size?.x} y: ${t?.size?.y} width: ${t?.size?.width}`);
        const r = t.columns ?? -1;
        o.Rm.debug("layoutBlocks columns abc95", t.id, "=>", r, t);
        if (t.children && t.children.length > 0) {
          const a = t?.children[0]?.size?.width ?? 0;
          const s = t.children.length * a + (t.children.length - 1) * ct;
          o.Rm.debug("widthOfChildren 88", s, "posX");
          let i = 0;
          o.Rm.debug("abc91 block?.size?.x", t.id, t?.size?.x);
          let n = t?.size?.x ? t?.size?.x + (-t?.size?.width / 2 || 0) : -ct;
          let l = 0;
          for (const c of t.children) {
            const a = t;
            if (!c.size) {
              continue;
            }
            const { width: s, height: h } = c.size;
            const { px: d, py: u } = ht(r, i);
            if (u != l) {
              l = u;
              n = t?.size?.x ? t?.size?.x + (-t?.size?.width / 2 || 0) : -ct;
              o.Rm.debug("New row in layout for block", t.id, " and child ", c.id, l);
            }
            o.Rm.debug(
              `abc89 layout blocks (child) id: ${c.id} Pos: ${i} (px, py) ${d},${u} (${a?.size?.x},${a?.size?.y}) parent: ${a.id} width: ${s}${ct}`
            );
            if (a.size) {
              const t = s / 2;
              c.size.x = n + ct + t;
              o.Rm.debug(
                `abc91 layout blocks (calc) px, pyid:${c.id} startingPos=X${n} new startingPosX${
                  c.size.x
                } ${t} padding=${ct} width=${s} halfWidth=${t} => x:${c.size.x} y:${c.size.y} ${c.widthInColumns} (width * (child?.w || 1)) / 2 ${
                  (s * (c?.widthInColumns ?? 1)) / 2
                }`
              );
              n = c.size.x + t;
              c.size.y = a.size.y - a.size.height / 2 + u * (h + ct) + h / 2 + ct;
              o.Rm.debug(
                `abc88 layout blocks (calc) px, pyid:${c.id}startingPosX${n}${ct}${t}=>x:${c.size.x}y:${c.size.y}${
                  c.widthInColumns
                }(width * (child?.w || 1)) / 2${(s * (c?.widthInColumns ?? 1)) / 2}`
              );
            }
            if (c.children) {
              gt(c, e);
            }
            i += c?.widthInColumns ?? 1;
            o.Rm.debug("abc88 columnsPos", c, i);
          }
        }
        o.Rm.debug(`layout blocks (<==layoutBlocks) ${t.id} x: ${t?.size?.x} y: ${t?.size?.y} width: ${t?.size?.width}`);
      }
      (0, o.K2)(gt, "layoutBlocks");
      function pt(t, { minX: e, minY: r, maxX: a, maxY: s } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
        if (t.size && t.id !== "root") {
          const { x: i, y: n, width: o, height: l } = t.size;
          if (i - o / 2 < e) {
            e = i - o / 2;
          }
          if (n - l / 2 < r) {
            r = n - l / 2;
          }
          if (i + o / 2 > a) {
            a = i + o / 2;
          }
          if (n + l / 2 > s) {
            s = n + l / 2;
          }
        }
        if (t.children) {
          for (const i of t.children) {
            ({ minX: e, minY: r, maxX: a, maxY: s } = pt(i, { minX: e, minY: r, maxX: a, maxY: s }));
          }
        }
        return { minX: e, minY: r, maxX: a, maxY: s };
      }
      (0, o.K2)(pt, "findBounds");
      function yt(t) {
        const e = t.getBlock("root");
        if (!e) {
          return;
        }
        ut(e, t, 0, 0);
        gt(e, t);
        o.Rm.debug("getBlocks", JSON.stringify(e, null, 2));
        const { minX: r, minY: a, maxX: s, maxY: i } = pt(e);
        const n = i - a;
        const l = s - r;
        return { x: r, y: a, width: l, height: n };
      }
      (0, o.K2)(yt, "layout");
      function ft(t, e) {
        if (e) {
          t.attr("style", e);
        }
      }
      (0, o.K2)(ft, "applyStyle");
      function bt(t) {
        const e = (0, d.Ltv)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
        const r = e.append("xhtml:div");
        const a = t.label;
        const s = t.isNode ? "nodeLabel" : "edgeLabel";
        const i = r.append("span");
        i.html(a);
        ft(i, t.labelStyle);
        i.attr("class", s);
        ft(r, t.labelStyle);
        r.style("display", "inline-block");
        r.style("white-space", "nowrap");
        r.attr("xmlns", "http://www.w3.org/1999/xhtml");
        return e.node();
      }
      (0, o.K2)(bt, "addHtmlLabel");
      var xt = (0, o.K2)((t, e, r, a) => {
        let s = t || "";
        if (typeof s === "object") {
          s = s[0];
        }
        if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
          s = s.replace(/\\n|\n/g, "<br />");
          o.Rm.debug("vertexText" + s);
          const t = { isNode: a, label: (0, i.hE)((0, n.Sm)(s)), labelStyle: e.replace("fill:", "color:") };
          let r = bt(t);
          return r;
        } else {
          const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
          t.setAttribute("style", e.replace("color:", "fill:"));
          let a = [];
          if (typeof s === "string") {
            a = s.split(/\\n|\n|<br\s*\/?>/gi);
          } else if (Array.isArray(s)) {
            a = s;
          } else {
            a = [];
          }
          for (const e of a) {
            const a = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            a.setAttribute("dy", "1em");
            a.setAttribute("x", "0");
            if (r) {
              a.setAttribute("class", "title-row");
            } else {
              a.setAttribute("class", "row");
            }
            a.textContent = e.trim();
            t.appendChild(a);
          }
          return t;
        }
      }, "createLabel");
      var mt = xt;
      var kt = (0, o.K2)((t, e, r, a, s) => {
        if (e.arrowTypeStart) {
          Lt(t, "start", e.arrowTypeStart, r, a, s);
        }
        if (e.arrowTypeEnd) {
          Lt(t, "end", e.arrowTypeEnd, r, a, s);
        }
      }, "addEdgeMarkers");
      var wt = {
        arrow_cross: "cross",
        arrow_point: "point",
        arrow_barb: "barb",
        arrow_circle: "circle",
        aggregation: "aggregation",
        extension: "extension",
        composition: "composition",
        dependency: "dependency",
        lollipop: "lollipop",
      };
      var Lt = (0, o.K2)((t, e, r, a, s, i) => {
        const n = wt[r];
        if (!n) {
          o.Rm.warn(`Unknown arrow type: ${r}`);
          return;
        }
        const l = e === "start" ? "Start" : "End";
        t.attr(`marker-${e}`, `url(${a}#${s}_${i}-${n}${l})`);
      }, "addEdgeMarker");
      var _t = {};
      var vt = {};
      var St = (0, o.K2)((t, e) => {
        const r = (0, o.D7)();
        const a = (0, o._3)(r.flowchart.htmlLabels);
        const s =
          e.labelType === "markdown"
            ? (0, i.GZ)(t, e.label, { style: e.labelStyle, useHtmlLabels: a, addSvgBackground: true }, r)
            : mt(e.label, e.labelStyle);
        const n = t.insert("g").attr("class", "edgeLabel");
        const l = n.insert("g").attr("class", "label");
        l.node().appendChild(s);
        let c = s.getBBox();
        if (a) {
          const t = s.children[0];
          const e = (0, d.Ltv)(s);
          c = t.getBoundingClientRect();
          e.attr("width", c.width);
          e.attr("height", c.height);
        }
        l.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")");
        _t[e.id] = n;
        e.width = c.width;
        e.height = c.height;
        let h;
        if (e.startLabelLeft) {
          const r = mt(e.startLabelLeft, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const s = a.insert("g").attr("class", "inner");
          h = s.node().appendChild(r);
          const i = r.getBBox();
          s.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")");
          if (!vt[e.id]) {
            vt[e.id] = {};
          }
          vt[e.id].startLeft = a;
          Et(h, e.startLabelLeft);
        }
        if (e.startLabelRight) {
          const r = mt(e.startLabelRight, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const s = a.insert("g").attr("class", "inner");
          h = a.node().appendChild(r);
          s.node().appendChild(r);
          const i = r.getBBox();
          s.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")");
          if (!vt[e.id]) {
            vt[e.id] = {};
          }
          vt[e.id].startRight = a;
          Et(h, e.startLabelRight);
        }
        if (e.endLabelLeft) {
          const r = mt(e.endLabelLeft, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const s = a.insert("g").attr("class", "inner");
          h = s.node().appendChild(r);
          const i = r.getBBox();
          s.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")");
          a.node().appendChild(r);
          if (!vt[e.id]) {
            vt[e.id] = {};
          }
          vt[e.id].endLeft = a;
          Et(h, e.endLabelLeft);
        }
        if (e.endLabelRight) {
          const r = mt(e.endLabelRight, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const s = a.insert("g").attr("class", "inner");
          h = s.node().appendChild(r);
          const i = r.getBBox();
          s.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")");
          a.node().appendChild(r);
          if (!vt[e.id]) {
            vt[e.id] = {};
          }
          vt[e.id].endRight = a;
          Et(h, e.endLabelRight);
        }
        return s;
      }, "insertEdgeLabel");
      function Et(t, e) {
        if ((0, o.D7)().flowchart.htmlLabels && t) {
          t.style.width = e.length * 9 + "px";
          t.style.height = "12px";
        }
      }
      (0, o.K2)(Et, "setTerminalWidth");
      var Dt = (0, o.K2)((t, e) => {
        o.Rm.debug("Moving label abc88 ", t.id, t.label, _t[t.id], e);
        let r = e.updatedPath ? e.updatedPath : e.originalPath;
        const a = (0, o.D7)();
        const { subGraphTitleTotalMargin: i } = (0, s.O)(a);
        if (t.label) {
          const a = _t[t.id];
          let s = t.x;
          let l = t.y;
          if (r) {
            const a = n._K.calcLabelPosition(r);
            o.Rm.debug("Moving label " + t.label + " from (", s, ",", l, ") to (", a.x, ",", a.y, ") abc88");
            if (e.updatedPath) {
              s = a.x;
              l = a.y;
            }
          }
          a.attr("transform", `translate(${s}, ${l + i / 2})`);
        }
        if (t.startLabelLeft) {
          const e = vt[t.id].startLeft;
          let a = t.x;
          let s = t.y;
          if (r) {
            const e = n._K.calcTerminalLabelPosition(t.arrowTypeStart ? 10 : 0, "start_left", r);
            a = e.x;
            s = e.y;
          }
          e.attr("transform", `translate(${a}, ${s})`);
        }
        if (t.startLabelRight) {
          const e = vt[t.id].startRight;
          let a = t.x;
          let s = t.y;
          if (r) {
            const e = n._K.calcTerminalLabelPosition(t.arrowTypeStart ? 10 : 0, "start_right", r);
            a = e.x;
            s = e.y;
          }
          e.attr("transform", `translate(${a}, ${s})`);
        }
        if (t.endLabelLeft) {
          const e = vt[t.id].endLeft;
          let a = t.x;
          let s = t.y;
          if (r) {
            const e = n._K.calcTerminalLabelPosition(t.arrowTypeEnd ? 10 : 0, "end_left", r);
            a = e.x;
            s = e.y;
          }
          e.attr("transform", `translate(${a}, ${s})`);
        }
        if (t.endLabelRight) {
          const e = vt[t.id].endRight;
          let a = t.x;
          let s = t.y;
          if (r) {
            const e = n._K.calcTerminalLabelPosition(t.arrowTypeEnd ? 10 : 0, "end_right", r);
            a = e.x;
            s = e.y;
          }
          e.attr("transform", `translate(${a}, ${s})`);
        }
      }, "positionEdgeLabel");
      var Nt = (0, o.K2)((t, e) => {
        const r = t.x;
        const a = t.y;
        const s = Math.abs(e.x - r);
        const i = Math.abs(e.y - a);
        const n = t.width / 2;
        const o = t.height / 2;
        if (s >= n || i >= o) {
          return true;
        }
        return false;
      }, "outsideNode");
      var Kt = (0, o.K2)((t, e, r) => {
        o.Rm.debug(
          `intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(r)}\n  node        : x:${t.x} y:${
            t.y
          } w:${t.width} h:${t.height}`
        );
        const a = t.x;
        const s = t.y;
        const i = Math.abs(a - r.x);
        const n = t.width / 2;
        let l = r.x < e.x ? n - i : n + i;
        const c = t.height / 2;
        const h = Math.abs(e.y - r.y);
        const d = Math.abs(e.x - r.x);
        if (Math.abs(s - e.y) * n > Math.abs(a - e.x) * c) {
          let t = r.y < e.y ? e.y - c - s : s - c - e.y;
          l = (d * t) / h;
          const a = { x: r.x < e.x ? r.x + l : r.x - d + l, y: r.y < e.y ? r.y + h - t : r.y - h + t };
          if (l === 0) {
            a.x = e.x;
            a.y = e.y;
          }
          if (d === 0) {
            a.x = e.x;
          }
          if (h === 0) {
            a.y = e.y;
          }
          o.Rm.debug(`abc89 topp/bott calc, Q ${h}, q ${t}, R ${d}, r ${l}`, a);
          return a;
        } else {
          if (r.x < e.x) {
            l = e.x - n - a;
          } else {
            l = a - n - e.x;
          }
          let t = (h * l) / d;
          let s = r.x < e.x ? r.x + d - l : r.x - d + l;
          let i = r.y < e.y ? r.y + t : r.y - t;
          o.Rm.debug(`sides calc abc89, Q ${h}, q ${t}, R ${d}, r ${l}`, { _x: s, _y: i });
          if (l === 0) {
            s = e.x;
            i = e.y;
          }
          if (d === 0) {
            s = e.x;
          }
          if (h === 0) {
            i = e.y;
          }
          return { x: s, y: i };
        }
      }, "intersection");
      var Rt = (0, o.K2)((t, e) => {
        o.Rm.debug("abc88 cutPathAtIntersect", t, e);
        let r = [];
        let a = t[0];
        let s = false;
        t.forEach((t) => {
          if (!Nt(e, t) && !s) {
            const i = Kt(e, a, t);
            let n = false;
            r.forEach((t) => {
              n = n || (t.x === i.x && t.y === i.y);
            });
            if (!r.some((t) => t.x === i.x && t.y === i.y)) {
              r.push(i);
            }
            s = true;
          } else {
            a = t;
            if (!s) {
              r.push(t);
            }
          }
        });
        return r;
      }, "cutPathAtIntersect");
      var Ct = (0, o.K2)(function (t, e, r, s, i, n, l) {
        let c = r.points;
        o.Rm.debug("abc88 InsertEdge: edge=", r, "e=", e);
        let h = false;
        const u = n.node(e.v);
        var g = n.node(e.w);
        if (g?.intersect && u?.intersect) {
          c = c.slice(1, r.points.length - 1);
          c.unshift(u.intersect(c[0]));
          c.push(g.intersect(c[c.length - 1]));
        }
        if (r.toCluster) {
          o.Rm.debug("to cluster abc88", s[r.toCluster]);
          c = Rt(r.points, s[r.toCluster].node);
          h = true;
        }
        if (r.fromCluster) {
          o.Rm.debug("from cluster abc88", s[r.fromCluster]);
          c = Rt(c.reverse(), s[r.fromCluster].node).reverse();
          h = true;
        }
        const p = c.filter((t) => !Number.isNaN(t.y));
        let y = d.qrM;
        if (r.curve && (i === "graph" || i === "flowchart")) {
          y = r.curve;
        }
        const { x: f, y: b } = (0, a.R)(r);
        const x = (0, d.n8j)().x(f).y(b).curve(y);
        let m;
        switch (r.thickness) {
          case "normal":
            m = "edge-thickness-normal";
            break;
          case "thick":
            m = "edge-thickness-thick";
            break;
          case "invisible":
            m = "edge-thickness-thick";
            break;
          default:
            m = "";
        }
        switch (r.pattern) {
          case "solid":
            m += " edge-pattern-solid";
            break;
          case "dotted":
            m += " edge-pattern-dotted";
            break;
          case "dashed":
            m += " edge-pattern-dashed";
            break;
        }
        const k = t
          .append("path")
          .attr("d", x(p))
          .attr("id", r.id)
          .attr("class", " " + m + (r.classes ? " " + r.classes : ""))
          .attr("style", r.style);
        let w = "";
        if ((0, o.D7)().flowchart.arrowMarkerAbsolute || (0, o.D7)().state.arrowMarkerAbsolute) {
          w = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
          w = w.replace(/\(/g, "\\(");
          w = w.replace(/\)/g, "\\)");
        }
        kt(k, r, w, l, i);
        let L = {};
        if (h) {
          L.updatedPath = c;
        }
        L.originalPath = r.points;
        return L;
      }, "insertEdge");
      var Tt = (0, o.K2)((t) => {
        const e = new Set();
        for (const r of t) {
          switch (r) {
            case "x":
              e.add("right");
              e.add("left");
              break;
            case "y":
              e.add("up");
              e.add("down");
              break;
            default:
              e.add(r);
              break;
          }
        }
        return e;
      }, "expandAndDeduplicateDirections");
      var $t = (0, o.K2)((t, e, r) => {
        const a = Tt(t);
        const s = 2;
        const i = e.height + 2 * r.padding;
        const n = i / s;
        const o = e.width + 2 * n + r.padding;
        const l = r.padding / 2;
        if (a.has("right") && a.has("left") && a.has("up") && a.has("down")) {
          return [
            { x: 0, y: 0 },
            { x: n, y: 0 },
            { x: o / 2, y: 2 * l },
            { x: o - n, y: 0 },
            { x: o, y: 0 },
            { x: o, y: -i / 3 },
            { x: o + 2 * l, y: -i / 2 },
            { x: o, y: (-2 * i) / 3 },
            { x: o, y: -i },
            { x: o - n, y: -i },
            { x: o / 2, y: -i - 2 * l },
            { x: n, y: -i },
            { x: 0, y: -i },
            { x: 0, y: (-2 * i) / 3 },
            { x: -2 * l, y: -i / 2 },
            { x: 0, y: -i / 3 },
          ];
        }
        if (a.has("right") && a.has("left") && a.has("up")) {
          return [
            { x: n, y: 0 },
            { x: o - n, y: 0 },
            { x: o, y: -i / 2 },
            { x: o - n, y: -i },
            { x: n, y: -i },
            { x: 0, y: -i / 2 },
          ];
        }
        if (a.has("right") && a.has("left") && a.has("down")) {
          return [
            { x: 0, y: 0 },
            { x: n, y: -i },
            { x: o - n, y: -i },
            { x: o, y: 0 },
          ];
        }
        if (a.has("right") && a.has("up") && a.has("down")) {
          return [
            { x: 0, y: 0 },
            { x: o, y: -n },
            { x: o, y: -i + n },
            { x: 0, y: -i },
          ];
        }
        if (a.has("left") && a.has("up") && a.has("down")) {
          return [
            { x: o, y: 0 },
            { x: 0, y: -n },
            { x: 0, y: -i + n },
            { x: o, y: -i },
          ];
        }
        if (a.has("right") && a.has("left")) {
          return [
            { x: n, y: 0 },
            { x: n, y: -l },
            { x: o - n, y: -l },
            { x: o - n, y: 0 },
            { x: o, y: -i / 2 },
            { x: o - n, y: -i },
            { x: o - n, y: -i + l },
            { x: n, y: -i + l },
            { x: n, y: -i },
            { x: 0, y: -i / 2 },
          ];
        }
        if (a.has("up") && a.has("down")) {
          return [
            { x: o / 2, y: 0 },
            { x: 0, y: -l },
            { x: n, y: -l },
            { x: n, y: -i + l },
            { x: 0, y: -i + l },
            { x: o / 2, y: -i },
            { x: o, y: -i + l },
            { x: o - n, y: -i + l },
            { x: o - n, y: -l },
            { x: o, y: -l },
          ];
        }
        if (a.has("right") && a.has("up")) {
          return [
            { x: 0, y: 0 },
            { x: o, y: -n },
            { x: 0, y: -i },
          ];
        }
        if (a.has("right") && a.has("down")) {
          return [
            { x: 0, y: 0 },
            { x: o, y: 0 },
            { x: 0, y: -i },
          ];
        }
        if (a.has("left") && a.has("up")) {
          return [
            { x: o, y: 0 },
            { x: 0, y: -n },
            { x: o, y: -i },
          ];
        }
        if (a.has("left") && a.has("down")) {
          return [
            { x: o, y: 0 },
            { x: 0, y: 0 },
            { x: o, y: -i },
          ];
        }
        if (a.has("right")) {
          return [
            { x: n, y: -l },
            { x: n, y: -l },
            { x: o - n, y: -l },
            { x: o - n, y: 0 },
            { x: o, y: -i / 2 },
            { x: o - n, y: -i },
            { x: o - n, y: -i + l },
            { x: n, y: -i + l },
            { x: n, y: -i + l },
          ];
        }
        if (a.has("left")) {
          return [
            { x: n, y: 0 },
            { x: n, y: -l },
            { x: o - n, y: -l },
            { x: o - n, y: -i + l },
            { x: n, y: -i + l },
            { x: n, y: -i },
            { x: 0, y: -i / 2 },
          ];
        }
        if (a.has("up")) {
          return [
            { x: n, y: -l },
            { x: n, y: -i + l },
            { x: 0, y: -i + l },
            { x: o / 2, y: -i },
            { x: o, y: -i + l },
            { x: o - n, y: -i + l },
            { x: o - n, y: -l },
          ];
        }
        if (a.has("down")) {
          return [
            { x: o / 2, y: 0 },
            { x: 0, y: -l },
            { x: n, y: -l },
            { x: n, y: -i + l },
            { x: o - n, y: -i + l },
            { x: o - n, y: -l },
            { x: o, y: -l },
          ];
        }
        return [{ x: 0, y: 0 }];
      }, "getArrowPoints");
      function At(t, e) {
        return t.intersect(e);
      }
      (0, o.K2)(At, "intersectNode");
      var Ot = At;
      function It(t, e, r, a) {
        var s = t.x;
        var i = t.y;
        var n = s - a.x;
        var o = i - a.y;
        var l = Math.sqrt(e * e * o * o + r * r * n * n);
        var c = Math.abs((e * r * n) / l);
        if (a.x < s) {
          c = -c;
        }
        var h = Math.abs((e * r * o) / l);
        if (a.y < i) {
          h = -h;
        }
        return { x: s + c, y: i + h };
      }
      (0, o.K2)(It, "intersectEllipse");
      var Bt = It;
      function zt(t, e, r) {
        return Bt(t, e, e, r);
      }
      (0, o.K2)(zt, "intersectCircle");
      var Mt = zt;
      function Pt(t, e, r, a) {
        var s, i, n, o, l, c;
        var h, d, u, g;
        var p, y, f;
        var b, x;
        s = e.y - t.y;
        n = t.x - e.x;
        l = e.x * t.y - t.x * e.y;
        u = s * r.x + n * r.y + l;
        g = s * a.x + n * a.y + l;
        if (u !== 0 && g !== 0 && Yt(u, g)) {
          return;
        }
        i = a.y - r.y;
        o = r.x - a.x;
        c = a.x * r.y - r.x * a.y;
        h = i * t.x + o * t.y + c;
        d = i * e.x + o * e.y + c;
        if (h !== 0 && d !== 0 && Yt(h, d)) {
          return;
        }
        p = s * o - i * n;
        if (p === 0) {
          return;
        }
        y = Math.abs(p / 2);
        f = n * c - o * l;
        b = f < 0 ? (f - y) / p : (f + y) / p;
        f = i * l - s * c;
        x = f < 0 ? (f - y) / p : (f + y) / p;
        return { x: b, y: x };
      }
      (0, o.K2)(Pt, "intersectLine");
      function Yt(t, e) {
        return t * e > 0;
      }
      (0, o.K2)(Yt, "sameSign");
      var jt = Pt;
      var Ft = Wt;
      function Wt(t, e, r) {
        var a = t.x;
        var s = t.y;
        var i = [];
        var n = Number.POSITIVE_INFINITY;
        var o = Number.POSITIVE_INFINITY;
        if (typeof e.forEach === "function") {
          e.forEach(function (t) {
            n = Math.min(n, t.x);
            o = Math.min(o, t.y);
          });
        } else {
          n = Math.min(n, e.x);
          o = Math.min(o, e.y);
        }
        var l = a - t.width / 2 - n;
        var c = s - t.height / 2 - o;
        for (var h = 0; h < e.length; h++) {
          var d = e[h];
          var u = e[h < e.length - 1 ? h + 1 : 0];
          var g = jt(t, r, { x: l + d.x, y: c + d.y }, { x: l + u.x, y: c + u.y });
          if (g) {
            i.push(g);
          }
        }
        if (!i.length) {
          return t;
        }
        if (i.length > 1) {
          i.sort(function (t, e) {
            var a = t.x - r.x;
            var s = t.y - r.y;
            var i = Math.sqrt(a * a + s * s);
            var n = e.x - r.x;
            var o = e.y - r.y;
            var l = Math.sqrt(n * n + o * o);
            return i < l ? -1 : i === l ? 0 : 1;
          });
        }
        return i[0];
      }
      (0, o.K2)(Wt, "intersectPolygon");
      var Xt = (0, o.K2)((t, e) => {
        var r = t.x;
        var a = t.y;
        var s = e.x - r;
        var i = e.y - a;
        var n = t.width / 2;
        var o = t.height / 2;
        var l, c;
        if (Math.abs(i) * n > Math.abs(s) * o) {
          if (i < 0) {
            o = -o;
          }
          l = i === 0 ? 0 : (o * s) / i;
          c = o;
        } else {
          if (s < 0) {
            n = -n;
          }
          l = n;
          c = s === 0 ? 0 : (n * i) / s;
        }
        return { x: r + l, y: a + c };
      }, "intersectRect");
      var Ht = Xt;
      var Ut = { node: Ot, circle: Mt, ellipse: Bt, polygon: Ft, rect: Ht };
      var Zt = (0, o.K2)(async (t, e, r, a) => {
        const s = (0, o.D7)();
        let l;
        const c = e.useHtmlLabels || (0, o._3)(s.flowchart.htmlLabels);
        if (!r) {
          l = "node default";
        } else {
          l = r;
        }
        const h = t
          .insert("g")
          .attr("class", l)
          .attr("id", e.domId || e.id);
        const u = h.insert("g").attr("class", "label").attr("style", e.labelStyle);
        let g;
        if (e.labelText === void 0) {
          g = "";
        } else {
          g = typeof e.labelText === "string" ? e.labelText : e.labelText[0];
        }
        const p = u.node();
        let y;
        if (e.labelType === "markdown") {
          y = (0, i.GZ)(
            u,
            (0, o.jZ)((0, n.Sm)(g), s),
            { useHtmlLabels: c, width: e.width || s.flowchart.wrappingWidth, classes: "markdown-node-label" },
            s
          );
        } else {
          y = p.appendChild(mt((0, o.jZ)((0, n.Sm)(g), s), e.labelStyle, false, a));
        }
        let f = y.getBBox();
        const b = e.padding / 2;
        if ((0, o._3)(s.flowchart.htmlLabels)) {
          const t = y.children[0];
          const e = (0, d.Ltv)(y);
          const r = t.getElementsByTagName("img");
          if (r) {
            const t = g.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all(
              [...r].map(
                (e) =>
                  new Promise((r) => {
                    function a() {
                      e.style.display = "flex";
                      e.style.flexDirection = "column";
                      if (t) {
                        const t = s.fontSize ? s.fontSize : window.getComputedStyle(document.body).fontSize;
                        const r = 5;
                        const a = parseInt(t, 10) * r + "px";
                        e.style.minWidth = a;
                        e.style.maxWidth = a;
                      } else {
                        e.style.width = "100%";
                      }
                      r(e);
                    }
                    (0, o.K2)(a, "setupImage");
                    setTimeout(() => {
                      if (e.complete) {
                        a();
                      }
                    });
                    e.addEventListener("error", a);
                    e.addEventListener("load", a);
                  })
              )
            );
          }
          f = t.getBoundingClientRect();
          e.attr("width", f.width);
          e.attr("height", f.height);
        }
        if (c) {
          u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")");
        } else {
          u.attr("transform", "translate(0, " + -f.height / 2 + ")");
        }
        if (e.centerLabel) {
          u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")");
        }
        u.insert("rect", ":first-child");
        return { shapeSvg: h, bbox: f, halfPadding: b, label: u };
      }, "labelHelper");
      var qt = (0, o.K2)((t, e) => {
        const r = e.node().getBBox();
        t.width = r.width;
        t.height = r.height;
      }, "updateNodeBounds");
      function Gt(t, e, r, a) {
        return t
          .insert("polygon", ":first-child")
          .attr(
            "points",
            a
              .map(function (t) {
                return t.x + "," + t.y;
              })
              .join(" ")
          )
          .attr("class", "label-container")
          .attr("transform", "translate(" + -e / 2 + "," + r / 2 + ")");
      }
      (0, o.K2)(Gt, "insertPolygonShape");
      var Jt = (0, o.K2)(async (t, e) => {
        const r = e.useHtmlLabels || (0, o.D7)().flowchart.htmlLabels;
        if (!r) {
          e.centerLabel = true;
        }
        const { shapeSvg: a, bbox: s, halfPadding: i } = await Zt(t, e, "node " + e.classes, true);
        o.Rm.info("Classes = ", e.classes);
        const n = a.insert("rect", ":first-child");
        n.attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", -s.width / 2 - i)
          .attr("y", -s.height / 2 - i)
          .attr("width", s.width + e.padding)
          .attr("height", s.height + e.padding);
        qt(e, n);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return a;
      }, "note");
      var Vt = Jt;
      var Qt = (0, o.K2)((t) => {
        if (t) {
          return " " + t;
        }
        return "";
      }, "formatClass");
      var te = (0, o.K2)((t, e) => `${e ? e : "node default"}${Qt(t.classes)} ${Qt(t.class)}`, "getClassesFromNode");
      var ee = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = s + i;
        const l = [
          { x: n / 2, y: 0 },
          { x: n, y: -n / 2 },
          { x: n / 2, y: -n },
          { x: 0, y: -n / 2 },
        ];
        o.Rm.info("Question main (Circle)");
        const c = Gt(r, n, n, l);
        c.attr("style", e.style);
        qt(e, c);
        e.intersect = function (t) {
          o.Rm.warn("Intersect called");
          return Ut.polygon(e, l, t);
        };
        return r;
      }, "question");
      var re = (0, o.K2)((t, e) => {
        const r = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        const a = 28;
        const s = [
          { x: 0, y: a / 2 },
          { x: a / 2, y: 0 },
          { x: 0, y: -a / 2 },
          { x: -a / 2, y: 0 },
        ];
        const i = r.insert("polygon", ":first-child").attr(
          "points",
          s
            .map(function (t) {
              return t.x + "," + t.y;
            })
            .join(" ")
        );
        i.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
        e.width = 28;
        e.height = 28;
        e.intersect = function (t) {
          return Ut.circle(e, 14, t);
        };
        return r;
      }, "choice");
      var ae = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = 4;
        const i = a.height + e.padding;
        const n = i / s;
        const o = a.width + 2 * n + e.padding;
        const l = [
          { x: n, y: 0 },
          { x: o - n, y: 0 },
          { x: o, y: -i / 2 },
          { x: o - n, y: -i },
          { x: n, y: -i },
          { x: 0, y: -i / 2 },
        ];
        const c = Gt(r, o, i, l);
        c.attr("style", e.style);
        qt(e, c);
        e.intersect = function (t) {
          return Ut.polygon(e, l, t);
        };
        return r;
      }, "hexagon");
      var se = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, void 0, true);
        const s = 2;
        const i = a.height + 2 * e.padding;
        const n = i / s;
        const o = a.width + 2 * n + e.padding;
        const l = $t(e.directions, a, e);
        const c = Gt(r, o, i, l);
        c.attr("style", e.style);
        qt(e, c);
        e.intersect = function (t) {
          return Ut.polygon(e, l, t);
        };
        return r;
      }, "block_arrow");
      var ie = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: -i / 2, y: 0 },
          { x: s, y: 0 },
          { x: s, y: -i },
          { x: -i / 2, y: -i },
          { x: 0, y: -i / 2 },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        e.width = s + i;
        e.height = i;
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "rect_left_inv_arrow");
      var ne = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: (-2 * i) / 6, y: 0 },
          { x: s - i / 6, y: 0 },
          { x: s + (2 * i) / 6, y: -i },
          { x: i / 6, y: -i },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        qt(e, o);
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "lean_right");
      var oe = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: (2 * i) / 6, y: 0 },
          { x: s + i / 6, y: 0 },
          { x: s - (2 * i) / 6, y: -i },
          { x: -i / 6, y: -i },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        qt(e, o);
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "lean_left");
      var le = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: (-2 * i) / 6, y: 0 },
          { x: s + (2 * i) / 6, y: 0 },
          { x: s - i / 6, y: -i },
          { x: i / 6, y: -i },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        qt(e, o);
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "trapezoid");
      var ce = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: i / 6, y: 0 },
          { x: s - i / 6, y: 0 },
          { x: s + (2 * i) / 6, y: -i },
          { x: (-2 * i) / 6, y: -i },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        qt(e, o);
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "inv_trapezoid");
      var he = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: 0, y: 0 },
          { x: s + i / 2, y: 0 },
          { x: s, y: -i / 2 },
          { x: s + i / 2, y: -i },
          { x: 0, y: -i },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        qt(e, o);
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "rect_right_inv_arrow");
      var de = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = s / 2;
        const n = i / (2.5 + s / 50);
        const o = a.height + n + e.padding;
        const l =
          "M 0," +
          n +
          " a " +
          i +
          "," +
          n +
          " 0,0,0 " +
          s +
          " 0 a " +
          i +
          "," +
          n +
          " 0,0,0 " +
          -s +
          " 0 l 0," +
          o +
          " a " +
          i +
          "," +
          n +
          " 0,0,0 " +
          s +
          " 0 l 0," +
          -o;
        const c = r
          .attr("label-offset-y", n)
          .insert("path", ":first-child")
          .attr("style", e.style)
          .attr("d", l)
          .attr("transform", "translate(" + -s / 2 + "," + -(o / 2 + n) + ")");
        qt(e, c);
        e.intersect = function (t) {
          const r = Ut.rect(e, t);
          const a = r.x - e.x;
          if (i != 0 && (Math.abs(a) < e.width / 2 || (Math.abs(a) == e.width / 2 && Math.abs(r.y - e.y) > e.height / 2 - n))) {
            let s = n * n * (1 - (a * a) / (i * i));
            if (s != 0) {
              s = Math.sqrt(s);
            }
            s = n - s;
            if (t.y - e.y > 0) {
              s = -s;
            }
            r.y += s;
          }
          return r;
        };
        return r;
      }, "cylinder");
      var ue = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a, halfPadding: s } = await Zt(t, e, "node " + e.classes + " " + e.class, true);
        const i = r.insert("rect", ":first-child");
        const n = e.positioned ? e.width : a.width + e.padding;
        const l = e.positioned ? e.height : a.height + e.padding;
        const c = e.positioned ? -n / 2 : -a.width / 2 - s;
        const h = e.positioned ? -l / 2 : -a.height / 2 - s;
        i.attr("class", "basic label-container")
          .attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", c)
          .attr("y", h)
          .attr("width", n)
          .attr("height", l);
        if (e.props) {
          const t = new Set(Object.keys(e.props));
          if (e.props.borders) {
            ye(i, e.props.borders, n, l);
            t.delete("borders");
          }
          t.forEach((t) => {
            o.Rm.warn(`Unknown node property ${t}`);
          });
        }
        qt(e, i);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return r;
      }, "rect");
      var ge = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a, halfPadding: s } = await Zt(t, e, "node " + e.classes, true);
        const i = r.insert("rect", ":first-child");
        const n = e.positioned ? e.width : a.width + e.padding;
        const l = e.positioned ? e.height : a.height + e.padding;
        const c = e.positioned ? -n / 2 : -a.width / 2 - s;
        const h = e.positioned ? -l / 2 : -a.height / 2 - s;
        i.attr("class", "basic cluster composite label-container")
          .attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", c)
          .attr("y", h)
          .attr("width", n)
          .attr("height", l);
        if (e.props) {
          const t = new Set(Object.keys(e.props));
          if (e.props.borders) {
            ye(i, e.props.borders, n, l);
            t.delete("borders");
          }
          t.forEach((t) => {
            o.Rm.warn(`Unknown node property ${t}`);
          });
        }
        qt(e, i);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return r;
      }, "composite");
      var pe = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r } = await Zt(t, e, "label", true);
        o.Rm.trace("Classes = ", e.class);
        const a = r.insert("rect", ":first-child");
        const s = 0;
        const i = 0;
        a.attr("width", s).attr("height", i);
        r.attr("class", "label edgeLabel");
        if (e.props) {
          const t = new Set(Object.keys(e.props));
          if (e.props.borders) {
            ye(a, e.props.borders, s, i);
            t.delete("borders");
          }
          t.forEach((t) => {
            o.Rm.warn(`Unknown node property ${t}`);
          });
        }
        qt(e, a);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return r;
      }, "labelRect");
      function ye(t, e, r, a) {
        const s = [];
        const i = (0, o.K2)((t) => {
          s.push(t, 0);
        }, "addBorder");
        const n = (0, o.K2)((t) => {
          s.push(0, t);
        }, "skipBorder");
        if (e.includes("t")) {
          o.Rm.debug("add top border");
          i(r);
        } else {
          n(r);
        }
        if (e.includes("r")) {
          o.Rm.debug("add right border");
          i(a);
        } else {
          n(a);
        }
        if (e.includes("b")) {
          o.Rm.debug("add bottom border");
          i(r);
        } else {
          n(r);
        }
        if (e.includes("l")) {
          o.Rm.debug("add left border");
          i(a);
        } else {
          n(a);
        }
        t.attr("stroke-dasharray", s.join(" "));
      }
      (0, o.K2)(ye, "applyNodePropertyBorders");
      var fe = (0, o.K2)((t, e) => {
        let r;
        if (!e.classes) {
          r = "node default";
        } else {
          r = "node " + e.classes;
        }
        const a = t
          .insert("g")
          .attr("class", r)
          .attr("id", e.domId || e.id);
        const s = a.insert("rect", ":first-child");
        const i = a.insert("line");
        const n = a.insert("g").attr("class", "label");
        const l = e.labelText.flat ? e.labelText.flat() : e.labelText;
        let c = "";
        if (typeof l === "object") {
          c = l[0];
        } else {
          c = l;
        }
        o.Rm.info("Label text abc79", c, l, typeof l === "object");
        const h = n.node().appendChild(mt(c, e.labelStyle, true, true));
        let u = { width: 0, height: 0 };
        if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
          const t = h.children[0];
          const e = (0, d.Ltv)(h);
          u = t.getBoundingClientRect();
          e.attr("width", u.width);
          e.attr("height", u.height);
        }
        o.Rm.info("Text 2", l);
        const g = l.slice(1, l.length);
        let p = h.getBBox();
        const y = n.node().appendChild(mt(g.join ? g.join("<br/>") : g, e.labelStyle, true, true));
        if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
          const t = y.children[0];
          const e = (0, d.Ltv)(y);
          u = t.getBoundingClientRect();
          e.attr("width", u.width);
          e.attr("height", u.height);
        }
        const f = e.padding / 2;
        (0, d.Ltv)(y).attr("transform", "translate( " + (u.width > p.width ? 0 : (p.width - u.width) / 2) + ", " + (p.height + f + 5) + ")");
        (0, d.Ltv)(h).attr("transform", "translate( " + (u.width < p.width ? 0 : -(p.width - u.width) / 2) + ", 0)");
        u = n.node().getBBox();
        n.attr("transform", "translate(" + -u.width / 2 + ", " + (-u.height / 2 - f + 3) + ")");
        s.attr("class", "outer title-state")
          .attr("x", -u.width / 2 - f)
          .attr("y", -u.height / 2 - f)
          .attr("width", u.width + e.padding)
          .attr("height", u.height + e.padding);
        i.attr("class", "divider")
          .attr("x1", -u.width / 2 - f)
          .attr("x2", u.width / 2 + f)
          .attr("y1", -u.height / 2 - f + p.height + f)
          .attr("y2", -u.height / 2 - f + p.height + f);
        qt(e, s);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return a;
      }, "rectWithTitle");
      var be = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.height + e.padding;
        const i = a.width + s / 4 + e.padding;
        const n = r
          .insert("rect", ":first-child")
          .attr("style", e.style)
          .attr("rx", s / 2)
          .attr("ry", s / 2)
          .attr("x", -i / 2)
          .attr("y", -s / 2)
          .attr("width", i)
          .attr("height", s);
        qt(e, n);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return r;
      }, "stadium");
      var xe = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a, halfPadding: s } = await Zt(t, e, te(e, void 0), true);
        const i = r.insert("circle", ":first-child");
        i.attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("r", a.width / 2 + s)
          .attr("width", a.width + e.padding)
          .attr("height", a.height + e.padding);
        o.Rm.info("Circle main");
        qt(e, i);
        e.intersect = function (t) {
          o.Rm.info("Circle intersect", e, a.width / 2 + s, t);
          return Ut.circle(e, a.width / 2 + s, t);
        };
        return r;
      }, "circle");
      var me = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a, halfPadding: s } = await Zt(t, e, te(e, void 0), true);
        const i = 5;
        const n = r.insert("g", ":first-child");
        const l = n.insert("circle");
        const c = n.insert("circle");
        n.attr("class", e.class);
        l.attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("r", a.width / 2 + s + i)
          .attr("width", a.width + e.padding + i * 2)
          .attr("height", a.height + e.padding + i * 2);
        c.attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("r", a.width / 2 + s)
          .attr("width", a.width + e.padding)
          .attr("height", a.height + e.padding);
        o.Rm.info("DoubleCircle main");
        qt(e, l);
        e.intersect = function (t) {
          o.Rm.info("DoubleCircle intersect", e, a.width / 2 + s + i, t);
          return Ut.circle(e, a.width / 2 + s + i, t);
        };
        return r;
      }, "doublecircle");
      var ke = (0, o.K2)(async (t, e) => {
        const { shapeSvg: r, bbox: a } = await Zt(t, e, te(e, void 0), true);
        const s = a.width + e.padding;
        const i = a.height + e.padding;
        const n = [
          { x: 0, y: 0 },
          { x: s, y: 0 },
          { x: s, y: -i },
          { x: 0, y: -i },
          { x: 0, y: 0 },
          { x: -8, y: 0 },
          { x: s + 8, y: 0 },
          { x: s + 8, y: -i },
          { x: -8, y: -i },
          { x: -8, y: 0 },
        ];
        const o = Gt(r, s, i, n);
        o.attr("style", e.style);
        qt(e, o);
        e.intersect = function (t) {
          return Ut.polygon(e, n, t);
        };
        return r;
      }, "subroutine");
      var we = (0, o.K2)((t, e) => {
        const r = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        const a = r.insert("circle", ":first-child");
        a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
        qt(e, a);
        e.intersect = function (t) {
          return Ut.circle(e, 7, t);
        };
        return r;
      }, "start");
      var Le = (0, o.K2)((t, e, r) => {
        const a = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        let s = 70;
        let i = 10;
        if (r === "LR") {
          s = 10;
          i = 70;
        }
        const n = a
          .append("rect")
          .attr("x", (-1 * s) / 2)
          .attr("y", (-1 * i) / 2)
          .attr("width", s)
          .attr("height", i)
          .attr("class", "fork-join");
        qt(e, n);
        e.height = e.height + e.padding / 2;
        e.width = e.width + e.padding / 2;
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return a;
      }, "forkJoin");
      var _e = (0, o.K2)((t, e) => {
        const r = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        const a = r.insert("circle", ":first-child");
        const s = r.insert("circle", ":first-child");
        s.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
        a.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
        qt(e, s);
        e.intersect = function (t) {
          return Ut.circle(e, 7, t);
        };
        return r;
      }, "end");
      var ve = (0, o.K2)((t, e) => {
        const r = e.padding / 2;
        const a = 4;
        const s = 8;
        let i;
        if (!e.classes) {
          i = "node default";
        } else {
          i = "node " + e.classes;
        }
        const n = t
          .insert("g")
          .attr("class", i)
          .attr("id", e.domId || e.id);
        const l = n.insert("rect", ":first-child");
        const c = n.insert("line");
        const h = n.insert("line");
        let u = 0;
        let g = a;
        const p = n.insert("g").attr("class", "label");
        let y = 0;
        const f = e.classData.annotations?.[0];
        const b = e.classData.annotations[0] ? "«" + e.classData.annotations[0] + "»" : "";
        const x = p.node().appendChild(mt(b, e.labelStyle, true, true));
        let m = x.getBBox();
        if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
          const t = x.children[0];
          const e = (0, d.Ltv)(x);
          m = t.getBoundingClientRect();
          e.attr("width", m.width);
          e.attr("height", m.height);
        }
        if (e.classData.annotations[0]) {
          g += m.height + a;
          u += m.width;
        }
        let k = e.classData.label;
        if (e.classData.type !== void 0 && e.classData.type !== "") {
          if ((0, o.D7)().flowchart.htmlLabels) {
            k += "&lt;" + e.classData.type + "&gt;";
          } else {
            k += "<" + e.classData.type + ">";
          }
        }
        const w = p.node().appendChild(mt(k, e.labelStyle, true, true));
        (0, d.Ltv)(w).attr("class", "classTitle");
        let L = w.getBBox();
        if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
          const t = w.children[0];
          const e = (0, d.Ltv)(w);
          L = t.getBoundingClientRect();
          e.attr("width", L.width);
          e.attr("height", L.height);
        }
        g += L.height + a;
        if (L.width > u) {
          u = L.width;
        }
        const _ = [];
        e.classData.members.forEach((t) => {
          const r = t.getDisplayDetails();
          let s = r.displayText;
          if ((0, o.D7)().flowchart.htmlLabels) {
            s = s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          const i = p.node().appendChild(mt(s, r.cssStyle ? r.cssStyle : e.labelStyle, true, true));
          let n = i.getBBox();
          if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
            const t = i.children[0];
            const e = (0, d.Ltv)(i);
            n = t.getBoundingClientRect();
            e.attr("width", n.width);
            e.attr("height", n.height);
          }
          if (n.width > u) {
            u = n.width;
          }
          g += n.height + a;
          _.push(i);
        });
        g += s;
        const v = [];
        e.classData.methods.forEach((t) => {
          const r = t.getDisplayDetails();
          let s = r.displayText;
          if ((0, o.D7)().flowchart.htmlLabels) {
            s = s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          const i = p.node().appendChild(mt(s, r.cssStyle ? r.cssStyle : e.labelStyle, true, true));
          let n = i.getBBox();
          if ((0, o._3)((0, o.D7)().flowchart.htmlLabels)) {
            const t = i.children[0];
            const e = (0, d.Ltv)(i);
            n = t.getBoundingClientRect();
            e.attr("width", n.width);
            e.attr("height", n.height);
          }
          if (n.width > u) {
            u = n.width;
          }
          g += n.height + a;
          v.push(i);
        });
        g += s;
        if (f) {
          let t = (u - m.width) / 2;
          (0, d.Ltv)(x).attr("transform", "translate( " + ((-1 * u) / 2 + t) + ", " + (-1 * g) / 2 + ")");
          y = m.height + a;
        }
        let S = (u - L.width) / 2;
        (0, d.Ltv)(w).attr("transform", "translate( " + ((-1 * u) / 2 + S) + ", " + ((-1 * g) / 2 + y) + ")");
        y += L.height + a;
        c.attr("class", "divider")
          .attr("x1", -u / 2 - r)
          .attr("x2", u / 2 + r)
          .attr("y1", -g / 2 - r + s + y)
          .attr("y2", -g / 2 - r + s + y);
        y += s;
        _.forEach((t) => {
          (0, d.Ltv)(t).attr("transform", "translate( " + -u / 2 + ", " + ((-1 * g) / 2 + y + s / 2) + ")");
          const e = t?.getBBox();
          y += (e?.height ?? 0) + a;
        });
        y += s;
        h.attr("class", "divider")
          .attr("x1", -u / 2 - r)
          .attr("x2", u / 2 + r)
          .attr("y1", -g / 2 - r + s + y)
          .attr("y2", -g / 2 - r + s + y);
        y += s;
        v.forEach((t) => {
          (0, d.Ltv)(t).attr("transform", "translate( " + -u / 2 + ", " + ((-1 * g) / 2 + y) + ")");
          const e = t?.getBBox();
          y += (e?.height ?? 0) + a;
        });
        l.attr("style", e.style)
          .attr("class", "outer title-state")
          .attr("x", -u / 2 - r)
          .attr("y", -(g / 2) - r)
          .attr("width", u + e.padding)
          .attr("height", g + e.padding);
        qt(e, l);
        e.intersect = function (t) {
          return Ut.rect(e, t);
        };
        return n;
      }, "class_box");
      var Se = {
        rhombus: ee,
        composite: ge,
        question: ee,
        rect: ue,
        labelRect: pe,
        rectWithTitle: fe,
        choice: re,
        circle: xe,
        doublecircle: me,
        stadium: be,
        hexagon: ae,
        block_arrow: se,
        rect_left_inv_arrow: ie,
        lean_right: ne,
        lean_left: oe,
        trapezoid: le,
        inv_trapezoid: ce,
        rect_right_inv_arrow: he,
        cylinder: de,
        start: we,
        end: _e,
        note: Vt,
        subroutine: ke,
        fork: Le,
        join: Le,
        class_box: ve,
      };
      var Ee = {};
      var De = (0, o.K2)(async (t, e, r) => {
        let a;
        let s;
        if (e.link) {
          let i;
          if ((0, o.D7)().securityLevel === "sandbox") {
            i = "_top";
          } else if (e.linkTarget) {
            i = e.linkTarget || "_blank";
          }
          a = t.insert("svg:a").attr("xlink:href", e.link).attr("target", i);
          s = await Se[e.shape](a, e, r);
        } else {
          s = await Se[e.shape](t, e, r);
          a = s;
        }
        if (e.tooltip) {
          s.attr("title", e.tooltip);
        }
        if (e.class) {
          s.attr("class", "node default " + e.class);
        }
        Ee[e.id] = a;
        if (e.haveCallback) {
          Ee[e.id].attr("class", Ee[e.id].attr("class") + " clickable");
        }
        return a;
      }, "insertNode");
      var Ne = (0, o.K2)((t) => {
        const e = Ee[t.id];
        o.Rm.trace("Transforming node", t.diff, t, "translate(" + (t.x - t.width / 2 - 5) + ", " + t.width / 2 + ")");
        const r = 8;
        const a = t.diff || 0;
        if (t.clusterNode) {
          e.attr("transform", "translate(" + (t.x + a - t.width / 2) + ", " + (t.y - t.height / 2 - r) + ")");
        } else {
          e.attr("transform", "translate(" + t.x + ", " + t.y + ")");
        }
        return a;
      }, "positionNode");
      function Ke(t, e, r = false) {
        const a = t;
        let s = "default";
        if ((a?.classes?.length || 0) > 0) {
          s = (a?.classes ?? []).join(" ");
        }
        s = s + " flowchart-label";
        let i = 0;
        let l = "";
        let c;
        switch (a.type) {
          case "round":
            i = 5;
            l = "rect";
            break;
          case "composite":
            i = 0;
            l = "composite";
            c = 0;
            break;
          case "square":
            l = "rect";
            break;
          case "diamond":
            l = "question";
            break;
          case "hexagon":
            l = "hexagon";
            break;
          case "block_arrow":
            l = "block_arrow";
            break;
          case "odd":
            l = "rect_left_inv_arrow";
            break;
          case "lean_right":
            l = "lean_right";
            break;
          case "lean_left":
            l = "lean_left";
            break;
          case "trapezoid":
            l = "trapezoid";
            break;
          case "inv_trapezoid":
            l = "inv_trapezoid";
            break;
          case "rect_left_inv_arrow":
            l = "rect_left_inv_arrow";
            break;
          case "circle":
            l = "circle";
            break;
          case "ellipse":
            l = "ellipse";
            break;
          case "stadium":
            l = "stadium";
            break;
          case "subroutine":
            l = "subroutine";
            break;
          case "cylinder":
            l = "cylinder";
            break;
          case "group":
            l = "rect";
            break;
          case "doublecircle":
            l = "doublecircle";
            break;
          default:
            l = "rect";
        }
        const h = (0, n.sM)(a?.styles ?? []);
        const d = a.label;
        const u = a.size ?? { width: 0, height: 0, x: 0, y: 0 };
        const g = {
          labelStyle: h.labelStyle,
          shape: l,
          labelText: d,
          rx: i,
          ry: i,
          class: s,
          style: h.style,
          id: a.id,
          directions: a.directions,
          width: u.width,
          height: u.height,
          x: u.x,
          y: u.y,
          positioned: r,
          intersect: void 0,
          type: a.type,
          padding: c ?? (0, o.zj)()?.block?.padding ?? 0,
        };
        return g;
      }
      (0, o.K2)(Ke, "getNodeFromBlock");
      async function Re(t, e, r) {
        const a = Ke(e, r, false);
        if (a.type === "group") {
          return;
        }
        const s = (0, o.zj)();
        const i = await De(t, a, { config: s });
        const n = i.node().getBBox();
        const l = r.getBlock(a.id);
        l.size = { width: n.width, height: n.height, x: 0, y: 0, node: i };
        r.setBlock(l);
        i.remove();
      }
      (0, o.K2)(Re, "calculateBlockSize");
      async function Ce(t, e, r) {
        const a = Ke(e, r, true);
        const s = r.getBlock(a.id);
        if (s.type !== "space") {
          const r = (0, o.zj)();
          await De(t, a, { config: r });
          e.intersect = a?.intersect;
          Ne(a);
        }
      }
      (0, o.K2)(Ce, "insertBlockPositioned");
      async function Te(t, e, r, a) {
        for (const s of e) {
          await a(t, s, r);
          if (s.children) {
            await Te(t, s.children, r, a);
          }
        }
      }
      (0, o.K2)(Te, "performOperations");
      async function $e(t, e, r) {
        await Te(t, e, r, Re);
      }
      (0, o.K2)($e, "calculateBlockSizes");
      async function Ae(t, e, r) {
        await Te(t, e, r, Ce);
      }
      (0, o.K2)(Ae, "insertBlocks");
      async function Oe(t, e, r, a, s) {
        const i = new u.T({ multigraph: true, compound: true });
        i.setGraph({ rankdir: "TB", nodesep: 10, ranksep: 10, marginx: 8, marginy: 8 });
        for (const n of r) {
          if (n.size) {
            i.setNode(n.id, { width: n.size.width, height: n.size.height, intersect: n.intersect });
          }
        }
        for (const n of e) {
          if (n.start && n.end) {
            const e = a.getBlock(n.start);
            const r = a.getBlock(n.end);
            if (e?.size && r?.size) {
              const a = e.size;
              const o = r.size;
              const l = [
                { x: a.x, y: a.y },
                { x: a.x + (o.x - a.x) / 2, y: a.y + (o.y - a.y) / 2 },
                { x: o.x, y: o.y },
              ];
              Ct(
                t,
                { v: n.start, w: n.end, name: n.id },
                {
                  ...n,
                  arrowTypeEnd: n.arrowTypeEnd,
                  arrowTypeStart: n.arrowTypeStart,
                  points: l,
                  classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
                },
                void 0,
                "block",
                i,
                s
              );
              if (n.label) {
                await St(t, {
                  ...n,
                  label: n.label,
                  labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
                  arrowTypeEnd: n.arrowTypeEnd,
                  arrowTypeStart: n.arrowTypeStart,
                  points: l,
                  classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
                });
                Dt({ ...n, x: l[1].x, y: l[1].y }, { originalPath: l });
              }
            }
          }
        }
      }
      (0, o.K2)(Oe, "insertEdges");
      var Ie = (0, o.K2)(function (t, e) {
        return e.db.getClasses();
      }, "getClasses");
      var Be = (0, o.K2)(async function (t, e, r, a) {
        const { securityLevel: s, block: i } = (0, o.zj)();
        const n = a.db;
        let l;
        if (s === "sandbox") {
          l = (0, d.Ltv)("#i" + e);
        }
        const c = s === "sandbox" ? (0, d.Ltv)(l.nodes()[0].contentDocument.body) : (0, d.Ltv)("body");
        const h = s === "sandbox" ? c.select(`[id="${e}"]`) : (0, d.Ltv)(`[id="${e}"]`);
        const u = ["point", "circle", "cross"];
        lt(h, u, a.type, e);
        const g = n.getBlocks();
        const p = n.getBlocksFlat();
        const y = n.getEdges();
        const f = h.insert("g").attr("class", "block");
        await $e(f, g, n);
        const b = yt(n);
        await Ae(f, g, n);
        await Oe(f, y, p, n, e);
        if (b) {
          const t = b;
          const e = Math.max(1, Math.round(0.125 * (t.width / t.height)));
          const r = t.height + e + 10;
          const a = t.width + 10;
          const { useMaxWidth: s } = i;
          (0, o.a$)(h, r, a, !!s);
          o.Rm.debug("Here Bounds", b, t);
          h.attr("viewBox", `${t.x - 5} ${t.y - 5} ${t.width + 10} ${t.height + 10}`);
        }
      }, "draw");
      var ze = { draw: Be, getClasses: Ie };
      var Me = { parser: p, db: U, renderer: ze, styles: G };
    },
  },
]);
