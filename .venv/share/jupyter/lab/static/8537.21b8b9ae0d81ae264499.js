"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8537],
  {
    98537: (a, r, e) => {
      e.d(r, { diagram: () => l });
      var t = e(59357);
      var n = e(93113);
      var s = e(75905);
      var i = e(24010);
      var p = {
        parse: (0, s.K2)(async (a) => {
          const r = await (0, i.qg)("info", a);
          s.Rm.debug(r);
        }, "parse"),
      };
      var o = { version: t.n.version };
      var v = (0, s.K2)(() => o.version, "getVersion");
      var d = { getVersion: v };
      var c = (0, s.K2)((a, r, e) => {
        s.Rm.debug("rendering info diagram\n" + a);
        const t = (0, n.D)(r);
        (0, s.a$)(t, 100, 400, true);
        const i = t.append("g");
        i.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${e}`);
      }, "draw");
      var g = { draw: c };
      var l = { parser: p, db: d, renderer: g };
    },
  },
]);
