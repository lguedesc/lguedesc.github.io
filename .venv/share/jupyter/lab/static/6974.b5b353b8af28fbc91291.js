"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6974],
  {
    97134: (e, n, t) => {
      t.d(n, { A: () => o });
      var r = t(59386);
      var a = 4;
      function i(e) {
        return (0, r.A)(e, a);
      }
      const o = i;
    },
    66974: (e, n, t) => {
      t.r(n);
      t.d(n, { render: () => J });
      var r = t(33416);
      var a = t(94746);
      var i = t(20778);
      var o = t(57590);
      var s = t(68232);
      var d = t(76261);
      var c = t(96049);
      var l = t(75905);
      var g = t(82211);
      var f = t(89523);
      var u = t(97134);
      var p = t(8937);
      var h = t(65791);
      function m(e) {
        var n = { options: { directed: e.isDirected(), multigraph: e.isMultigraph(), compound: e.isCompound() }, nodes: w(e), edges: v(e) };
        if (!f.A(e.graph())) {
          n.value = u.A(e.graph());
        }
        return n;
      }
      function w(e) {
        return p.A(e.nodes(), function (n) {
          var t = e.node(n);
          var r = e.parent(n);
          var a = { v: n };
          if (!f.A(t)) {
            a.value = t;
          }
          if (!f.A(r)) {
            a.parent = r;
          }
          return a;
        });
      }
      function v(e) {
        return p.A(e.edges(), function (n) {
          var t = e.edge(n);
          var r = { v: n.v, w: n.w };
          if (!f.A(n.name)) {
            r.name = n.name;
          }
          if (!f.A(t)) {
            r.value = t;
          }
          return r;
        });
      }
      function R(e) {
        var n = new Graph(e.options).setGraph(e.value);
        _.each(e.nodes, function (e) {
          n.setNode(e.v, e.value);
          if (e.parent) {
            n.setParent(e.v, e.parent);
          }
        });
        _.each(e.edges, function (e) {
          n.setEdge({ v: e.v, w: e.w, name: e.name }, e.value);
        });
        return n;
      }
      var y = t(84416);
      var X = new Map();
      var b = new Map();
      var E = new Map();
      var N = (0, l.K2)(() => {
        b.clear();
        E.clear();
        X.clear();
      }, "clear");
      var C = (0, l.K2)((e, n) => {
        const t = b.get(n) || [];
        l.Rm.trace("In isDescendant", n, " ", e, " = ", t.includes(e));
        return t.includes(e);
      }, "isDescendant");
      var S = (0, l.K2)((e, n) => {
        const t = b.get(n) || [];
        l.Rm.info("Descendants of ", n, " is ", t);
        l.Rm.info("Edge is ", e);
        if (e.v === n || e.w === n) {
          return false;
        }
        if (!t) {
          l.Rm.debug("Tilt, ", n, ",not in descendants");
          return false;
        }
        return t.includes(e.v) || C(e.v, n) || C(e.w, n) || t.includes(e.w);
      }, "edgeInCluster");
      var x = (0, l.K2)((e, n, t, r) => {
        l.Rm.warn("Copying children of ", e, "root", r, "data", n.node(e), r);
        const a = n.children(e) || [];
        if (e !== r) {
          a.push(e);
        }
        l.Rm.warn("Copying (nodes) clusterId", e, "nodes", a);
        a.forEach((a) => {
          if (n.children(a).length > 0) {
            x(a, n, t, r);
          } else {
            const i = n.node(a);
            l.Rm.info("cp ", a, " to ", r, " with parent ", e);
            t.setNode(a, i);
            if (r !== n.parent(a)) {
              l.Rm.warn("Setting parent", a, n.parent(a));
              t.setParent(a, n.parent(a));
            }
            if (e !== r && a !== e) {
              l.Rm.debug("Setting parent", a, e);
              t.setParent(a, e);
            } else {
              l.Rm.info("In copy ", e, "root", r, "data", n.node(e), r);
              l.Rm.debug("Not Setting parent for node=", a, "cluster!==rootId", e !== r, "node!==clusterId", a !== e);
            }
            const o = n.edges(a);
            l.Rm.debug("Copying Edges", o);
            o.forEach((a) => {
              l.Rm.info("Edge", a);
              const i = n.edge(a.v, a.w, a.name);
              l.Rm.info("Edge data", i, r);
              try {
                if (S(a, r)) {
                  l.Rm.info("Copying as ", a.v, a.w, i, a.name);
                  t.setEdge(a.v, a.w, i, a.name);
                  l.Rm.info("newGraph edges ", t.edges(), t.edge(t.edges()[0]));
                } else {
                  l.Rm.info("Skipping copy of edge ", a.v, "--\x3e", a.w, " rootId: ", r, " clusterId:", e);
                }
              } catch (o) {
                l.Rm.error(o);
              }
            });
          }
          l.Rm.debug("Removing node", a);
          n.removeNode(a);
        });
      }, "copy");
      var I = (0, l.K2)((e, n) => {
        const t = n.children(e);
        let r = [...t];
        for (const a of t) {
          E.set(a, e);
          r = [...r, ...I(a, n)];
        }
        return r;
      }, "extractDescendants");
      var D = (0, l.K2)((e, n, t) => {
        const r = e.edges().filter((e) => e.v === n || e.w === n);
        const a = e.edges().filter((e) => e.v === t || e.w === t);
        const i = r.map((e) => ({ v: e.v === n ? t : e.v, w: e.w === n ? n : e.w }));
        const o = a.map((e) => ({ v: e.v, w: e.w }));
        const s = i.filter((e) => o.some((n) => e.v === n.v && e.w === n.w));
        return s;
      }, "findCommonEdges");
      var A = (0, l.K2)((e, n, t) => {
        const r = n.children(e);
        l.Rm.trace("Searching children of id ", e, r);
        if (r.length < 1) {
          return e;
        }
        let a;
        for (const i of r) {
          const e = A(i, n, t);
          const r = D(n, t, e);
          if (e) {
            if (r.length > 0) {
              a = e;
            } else {
              return e;
            }
          }
        }
        return a;
      }, "findNonClusterChild");
      var O = (0, l.K2)((e) => {
        if (!X.has(e)) {
          return e;
        }
        if (!X.get(e).externalConnections) {
          return e;
        }
        if (X.has(e)) {
          return X.get(e).id;
        }
        return e;
      }, "getAnchorId");
      var k = (0, l.K2)((e, n) => {
        if (!e || n > 10) {
          l.Rm.debug("Opting out, no graph ");
          return;
        } else {
          l.Rm.debug("Opting in, graph ");
        }
        e.nodes().forEach(function (n) {
          const t = e.children(n);
          if (t.length > 0) {
            l.Rm.warn("Cluster identified", n, " Replacement id in edges: ", A(n, e, n));
            b.set(n, I(n, e));
            X.set(n, { id: A(n, e, n), clusterData: e.node(n) });
          }
        });
        e.nodes().forEach(function (n) {
          const t = e.children(n);
          const r = e.edges();
          if (t.length > 0) {
            l.Rm.debug("Cluster identified", n, b);
            r.forEach((e) => {
              const t = C(e.v, n);
              const r = C(e.w, n);
              if (t ^ r) {
                l.Rm.warn("Edge: ", e, " leaves cluster ", n);
                l.Rm.warn("Descendants of XXX ", n, ": ", b.get(n));
                X.get(n).externalConnections = true;
              }
            });
          } else {
            l.Rm.debug("Not a cluster ", n, b);
          }
        });
        for (let t of X.keys()) {
          const n = X.get(t).id;
          const r = e.parent(n);
          if (r !== t && X.has(r) && !X.get(r).externalConnections) {
            X.get(t).id = r;
          }
        }
        e.edges().forEach(function (n) {
          const t = e.edge(n);
          l.Rm.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n));
          l.Rm.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
          let r = n.v;
          let a = n.w;
          l.Rm.warn("Fix XXX", X, "ids:", n.v, n.w, "Translating: ", X.get(n.v), " --- ", X.get(n.w));
          if (X.get(n.v) || X.get(n.w)) {
            l.Rm.warn("Fixing and trying - removing XXX", n.v, n.w, n.name);
            r = O(n.v);
            a = O(n.w);
            e.removeEdge(n.v, n.w, n.name);
            if (r !== n.v) {
              const a = e.parent(r);
              X.get(a).externalConnections = true;
              t.fromCluster = n.v;
            }
            if (a !== n.w) {
              const r = e.parent(a);
              X.get(r).externalConnections = true;
              t.toCluster = n.w;
            }
            l.Rm.warn("Fix Replacing with XXX", r, a, n.name);
            e.setEdge(r, a, t, n.name);
          }
        });
        l.Rm.warn("Adjusted Graph", m(e));
        G(e, 0);
        l.Rm.trace(X);
      }, "adjustClustersAndEdges");
      var G = (0, l.K2)((e, n) => {
        l.Rm.warn("extractor - ", n, m(e), e.children("D"));
        if (n > 10) {
          l.Rm.error("Bailing out");
          return;
        }
        let t = e.nodes();
        let r = false;
        for (const a of t) {
          const n = e.children(a);
          r = r || n.length > 0;
        }
        if (!r) {
          l.Rm.debug("Done, no node has children", e.nodes());
          return;
        }
        l.Rm.debug("Nodes = ", t, n);
        for (const a of t) {
          l.Rm.debug("Extracting node", a, X, X.has(a) && !X.get(a).externalConnections, !e.parent(a), e.node(a), e.children("D"), " Depth ", n);
          if (!X.has(a)) {
            l.Rm.debug("Not a cluster", a, n);
          } else if (!X.get(a).externalConnections && e.children(a) && e.children(a).length > 0) {
            l.Rm.warn("Cluster without external connections, without a parent and with children", a, n);
            const t = e.graph();
            let r = t.rankdir === "TB" ? "LR" : "TB";
            if (X.get(a)?.clusterData?.dir) {
              r = X.get(a).clusterData.dir;
              l.Rm.warn("Fixing dir", X.get(a).clusterData.dir, r);
            }
            const i = new y.T({ multigraph: true, compound: true })
              .setGraph({ rankdir: r, nodesep: 50, ranksep: 50, marginx: 8, marginy: 8 })
              .setDefaultEdgeLabel(function () {
                return {};
              });
            l.Rm.warn("Old graph before copy", m(e));
            x(a, e, i, a);
            e.setNode(a, { clusterNode: true, id: a, clusterData: X.get(a).clusterData, label: X.get(a).label, graph: i });
            l.Rm.warn("New graph after copy node: (", a, ")", m(i));
            l.Rm.debug("Old graph after copy", m(e));
          } else {
            l.Rm.warn(
              "Cluster ** ",
              a,
              " **not meeting the criteria !externalConnections:",
              !X.get(a).externalConnections,
              " no parent: ",
              !e.parent(a),
              " children ",
              e.children(a) && e.children(a).length > 0,
              e.children("D"),
              n
            );
            l.Rm.debug(X);
          }
        }
        t = e.nodes();
        l.Rm.warn("New list of nodes", t);
        for (const a of t) {
          const t = e.node(a);
          l.Rm.warn(" Now next level", a, t);
          if (t?.clusterNode) {
            G(t.graph, n + 1);
          }
        }
      }, "extractor");
      var K = (0, l.K2)((e, n) => {
        if (n.length === 0) {
          return [];
        }
        let t = Object.assign([], n);
        n.forEach((n) => {
          const r = e.children(n);
          const a = K(e, r);
          t = [...t, ...a];
        });
        return t;
      }, "sorter");
      var P = (0, l.K2)((e) => K(e, e.children()), "sortNodesByHierarchy");
      var T = (0, l.K2)(async (e, n, t, a, s, d) => {
        l.Rm.warn("Graph in recursive render:XAX", m(n), s);
        const c = n.graph().rankdir;
        l.Rm.trace("Dir in recursive render - dir:", c);
        const f = e.insert("g").attr("class", "root");
        if (!n.nodes()) {
          l.Rm.info("No nodes found for", n);
        } else {
          l.Rm.info("Recursive render XXX", n.nodes());
        }
        if (n.edges().length > 0) {
          l.Rm.info("Recursive edges", n.edge(n.edges()[0]));
        }
        const u = f.insert("g").attr("class", "clusters");
        const p = f.insert("g").attr("class", "edgePaths");
        const h = f.insert("g").attr("class", "edgeLabels");
        const w = f.insert("g").attr("class", "nodes");
        await Promise.all(
          n.nodes().map(async function (e) {
            const r = n.node(e);
            if (s !== void 0) {
              const t = JSON.parse(JSON.stringify(s.clusterData));
              l.Rm.trace("Setting data for parent cluster XXX\n Node.id = ", e, "\n data=", t.height, "\nParent cluster", s.height);
              n.setNode(s.id, t);
              if (!n.parent(e)) {
                l.Rm.trace("Setting parent", e, s.id);
                n.setParent(e, s.id, t);
              }
            }
            l.Rm.info("(Insert) Node XXX" + e + ": " + JSON.stringify(n.node(e)));
            if (r?.clusterNode) {
              l.Rm.info("Cluster identified XBX", e, r.width, n.node(e));
              const { ranksep: o, nodesep: s } = n.graph();
              r.graph.setGraph({ ...r.graph.graph(), ranksep: o + 25, nodesep: s });
              const c = await T(w, r.graph, t, a, n.node(e), d);
              const g = c.elem;
              (0, i.lC)(r, g);
              r.diff = c.diff || 0;
              l.Rm.info("New compound node after recursive render XAX", e, "width", r.width, "height", r.height);
              (0, i.U7)(g, r);
            } else {
              if (n.children(e).length > 0) {
                l.Rm.trace("Cluster - the non recursive path XBX", e, r.id, r, r.width, "Graph:", n);
                l.Rm.trace(A(r.id, n));
                X.set(r.id, { id: A(r.id, n), node: r });
              } else {
                l.Rm.trace("Node - the non recursive path XAX", e, w, n.node(e), c);
                await (0, i.on)(w, n.node(e), { config: d, dir: c });
              }
            }
          })
        );
        const v = (0, l.K2)(async () => {
          const e = n.edges().map(async function (e) {
            const t = n.edge(e.v, e.w, e.name);
            l.Rm.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
            l.Rm.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(n.edge(e)));
            l.Rm.info("Fix", X, "ids:", e.v, e.w, "Translating: ", X.get(e.v), X.get(e.w));
            await (0, r.jP)(h, t);
          });
          await Promise.all(e);
        }, "processEdges");
        await v();
        l.Rm.info("Graph before layout:", JSON.stringify(m(n)));
        l.Rm.info("############################################# XXX");
        l.Rm.info("###                Layout                 ### XXX");
        l.Rm.info("############################################# XXX");
        (0, g.Zp)(n);
        l.Rm.info("Graph after layout:", JSON.stringify(m(n)));
        let R = 0;
        let { subGraphTitleTotalMargin: y } = (0, o.O)(d);
        await Promise.all(
          P(n).map(async function (e) {
            const t = n.node(e);
            l.Rm.info("Position XBX => " + e + ": (" + t.x, "," + t.y, ") width: ", t.width, " height: ", t.height);
            if (t?.clusterNode) {
              t.y += y;
              l.Rm.info("A tainted cluster node XBX1", e, t.id, t.width, t.height, t.x, t.y, n.parent(e));
              X.get(t.id).node = t;
              (0, i.U_)(t);
            } else {
              if (n.children(e).length > 0) {
                l.Rm.info("A pure cluster node XBX1", e, t.id, t.x, t.y, t.width, t.height, n.parent(e));
                t.height += y;
                n.node(t.parentId);
                const r = t?.padding / 2 || 0;
                const a = t?.labelBBox?.height || 0;
                const o = a - r || 0;
                l.Rm.debug("OffsetY", o, "labelHeight", a, "halfPadding", r);
                await (0, i.U)(u, t);
                X.get(t.id).node = t;
              } else {
                const e = n.node(t.parentId);
                t.y += y / 2;
                l.Rm.info(
                  "A regular node XBX1 - using the padding",
                  t.id,
                  "parent",
                  t.parentId,
                  t.width,
                  t.height,
                  t.x,
                  t.y,
                  "offsetY",
                  t.offsetY,
                  "parent",
                  e,
                  e?.offsetY,
                  t
                );
                (0, i.U_)(t);
              }
            }
          })
        );
        n.edges().forEach(function (e) {
          const i = n.edge(e);
          l.Rm.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(i), i);
          i.points.forEach((e) => (e.y += y / 2));
          const o = n.node(e.v);
          var s = n.node(e.w);
          const d = (0, r.Jo)(p, i, X, t, o, s, a);
          (0, r.T_)(i, d);
        });
        n.nodes().forEach(function (e) {
          const t = n.node(e);
          l.Rm.info(e, t.type, t.diff);
          if (t.isGroup) {
            R = t.diff;
          }
        });
        l.Rm.warn("Returning from recursive render XAX", f, R);
        return { elem: f, diff: R };
      }, "recursiveRender");
      var J = (0, l.K2)(async (e, n) => {
        const t = new y.T({ multigraph: true, compound: true })
          .setGraph({
            rankdir: e.direction,
            nodesep: e.config?.nodeSpacing || e.config?.flowchart?.nodeSpacing || e.nodeSpacing,
            ranksep: e.config?.rankSpacing || e.config?.flowchart?.rankSpacing || e.rankSpacing,
            marginx: 8,
            marginy: 8,
          })
          .setDefaultEdgeLabel(function () {
            return {};
          });
        const a = n.select("g");
        (0, r.g0)(a, e.markers, e.type, e.diagramId);
        (0, i.gh)();
        (0, r.IU)();
        (0, i.IU)();
        N();
        e.nodes.forEach((e) => {
          t.setNode(e.id, { ...e });
          if (e.parentId) {
            t.setParent(e.id, e.parentId);
          }
        });
        l.Rm.debug("Edges:", e.edges);
        e.edges.forEach((e) => {
          if (e.start === e.end) {
            const n = e.start;
            const r = n + "---" + n + "---1";
            const a = n + "---" + n + "---2";
            const i = t.node(n);
            t.setNode(r, {
              domId: r,
              id: r,
              parentId: i.parentId,
              labelStyle: "",
              label: "",
              padding: 0,
              shape: "labelRect",
              style: "",
              width: 10,
              height: 10,
            });
            t.setParent(r, i.parentId);
            t.setNode(a, {
              domId: a,
              id: a,
              parentId: i.parentId,
              labelStyle: "",
              padding: 0,
              shape: "labelRect",
              label: "",
              style: "",
              width: 10,
              height: 10,
            });
            t.setParent(a, i.parentId);
            const o = structuredClone(e);
            const s = structuredClone(e);
            const d = structuredClone(e);
            o.label = "";
            o.arrowTypeEnd = "none";
            o.id = n + "-cyclic-special-1";
            s.arrowTypeStart = "none";
            s.arrowTypeEnd = "none";
            s.id = n + "-cyclic-special-mid";
            d.label = "";
            if (i.isGroup) {
              o.fromCluster = n;
              d.toCluster = n;
            }
            d.id = n + "-cyclic-special-2";
            d.arrowTypeStart = "none";
            t.setEdge(n, r, o, n + "-cyclic-special-0");
            t.setEdge(r, a, s, n + "-cyclic-special-1");
            t.setEdge(a, n, d, n + "-cyc<lic-special-2");
          } else {
            t.setEdge(e.start, e.end, { ...e }, e.id);
          }
        });
        l.Rm.warn("Graph at first:", JSON.stringify(m(t)));
        k(t);
        l.Rm.warn("Graph after XAX:", JSON.stringify(m(t)));
        const o = (0, l.D7)();
        await T(a, t, e.type, e.diagramId, void 0, o);
      }, "render");
    },
  },
]);
