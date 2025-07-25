"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2550],
  {
    19163: (t, e, a) => {
      a.d(e, { S: () => n });
      var r = a(75905);
      function n(t, e) {
        if (t.accDescr) {
          e.setAccDescription?.(t.accDescr);
        }
        if (t.accTitle) {
          e.setAccTitle?.(t.accTitle);
        }
        if (t.title) {
          e.setDiagramTitle?.(t.title);
        }
      }
      (0, r.K2)(n, "populateCommonDb");
    },
    92550: (t, e, a) => {
      a.d(e, { diagram: () => B });
      var r = a(19163);
      var n = a(96049);
      var o = a(93113);
      var l = a(75905);
      var i = a(24010);
      var c = { packet: [] };
      var s = structuredClone(c);
      var d = l.UI.packet;
      var p = (0, l.K2)(() => {
        const t = (0, n.$t)({ ...d, ...(0, l.zj)().packet });
        if (t.showBits) {
          t.paddingY += 10;
        }
        return t;
      }, "getConfig");
      var k = (0, l.K2)(() => s.packet, "getPacket");
      var b = (0, l.K2)((t) => {
        if (t.length > 0) {
          s.packet.push(t);
        }
      }, "pushWord");
      var g = (0, l.K2)(() => {
        (0, l.IU)();
        s = structuredClone(c);
      }, "clear");
      var f = {
        pushWord: b,
        getPacket: k,
        getConfig: p,
        clear: g,
        setAccTitle: l.SV,
        getAccTitle: l.iN,
        setDiagramTitle: l.ke,
        getDiagramTitle: l.ab,
        getAccDescription: l.m7,
        setAccDescription: l.EI,
      };
      var h = 1e4;
      var u = (0, l.K2)((t) => {
        (0, r.S)(t, f);
        let e = -1;
        let a = [];
        let n = 1;
        const { bitsPerRow: o } = f.getConfig();
        for (let { start: r, end: i, label: c } of t.blocks) {
          if (i && i < r) {
            throw new Error(`Packet block ${r} - ${i} is invalid. End must be greater than start.`);
          }
          if (r !== e + 1) {
            throw new Error(`Packet block ${r} - ${i ?? r} is not contiguous. It should start from ${e + 1}.`);
          }
          e = i ?? r;
          l.Rm.debug(`Packet block ${r} - ${e} with label ${c}`);
          while (a.length <= o + 1 && f.getPacket().length < h) {
            const [t, e] = v({ start: r, end: i, label: c }, n, o);
            a.push(t);
            if (t.end + 1 === n * o) {
              f.pushWord(a);
              a = [];
              n++;
            }
            if (!e) {
              break;
            }
            ({ start: r, end: i, label: c } = e);
          }
        }
        f.pushWord(a);
      }, "populate");
      var v = (0, l.K2)((t, e, a) => {
        if (t.end === void 0) {
          t.end = t.start;
        }
        if (t.start > t.end) {
          throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
        }
        if (t.end + 1 <= e * a) {
          return [t, void 0];
        }
        return [
          { start: t.start, end: e * a - 1, label: t.label },
          { start: e * a, end: t.end, label: t.label },
        ];
      }, "getNextFittingBlock");
      var $ = {
        parse: (0, l.K2)(async (t) => {
          const e = await (0, i.qg)("packet", t);
          l.Rm.debug(e);
          u(e);
        }, "parse"),
      };
      var w = (0, l.K2)((t, e, a, r) => {
        const n = r.db;
        const i = n.getConfig();
        const { rowHeight: c, paddingY: s, bitWidth: d, bitsPerRow: p } = i;
        const k = n.getPacket();
        const b = n.getDiagramTitle();
        const g = c + s;
        const f = g * (k.length + 1) - (b ? 0 : c);
        const h = d * p + 2;
        const u = (0, o.D)(e);
        u.attr("viewbox", `0 0 ${h} ${f}`);
        (0, l.a$)(u, f, h, i.useMaxWidth);
        for (const [o, l] of k.entries()) {
          x(u, l, o, i);
        }
        u.append("text")
          .text(b)
          .attr("x", h / 2)
          .attr("y", f - g / 2)
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .attr("class", "packetTitle");
      }, "draw");
      var x = (0, l.K2)((t, e, a, { rowHeight: r, paddingX: n, paddingY: o, bitWidth: l, bitsPerRow: i, showBits: c }) => {
        const s = t.append("g");
        const d = a * (r + o) + o;
        for (const p of e) {
          const t = (p.start % i) * l + 1;
          const e = (p.end - p.start + 1) * l - n;
          s.append("rect").attr("x", t).attr("y", d).attr("width", e).attr("height", r).attr("class", "packetBlock");
          s.append("text")
            .attr("x", t + e / 2)
            .attr("y", d + r / 2)
            .attr("class", "packetLabel")
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .text(p.label);
          if (!c) {
            continue;
          }
          const a = p.end === p.start;
          const o = d - 2;
          s.append("text")
            .attr("x", t + (a ? e / 2 : 0))
            .attr("y", o)
            .attr("class", "packetByte start")
            .attr("dominant-baseline", "auto")
            .attr("text-anchor", a ? "middle" : "start")
            .text(p.start);
          if (!a) {
            s.append("text")
              .attr("x", t + e)
              .attr("y", o)
              .attr("class", "packetByte end")
              .attr("dominant-baseline", "auto")
              .attr("text-anchor", "end")
              .text(p.end);
          }
        }
      }, "drawWord");
      var m = { draw: w };
      var y = {
        byteFontSize: "10px",
        startByteColor: "black",
        endByteColor: "black",
        labelColor: "black",
        labelFontSize: "12px",
        titleColor: "black",
        titleFontSize: "14px",
        blockStrokeColor: "black",
        blockStrokeWidth: "1",
        blockFillColor: "#efefef",
      };
      var C = (0, l.K2)(({ packet: t } = {}) => {
        const e = (0, n.$t)(y, t);
        return `\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`;
      }, "styles");
      var B = { parser: $, db: f, renderer: m, styles: C };
    },
  },
]);
