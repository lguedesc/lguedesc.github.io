"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1491],
  {
    21491: (e, t, i) => {
      i.r(t);
      i.d(t, {
        AsyncCellRenderer: () => k,
        BasicKeyHandler: () => y,
        BasicMouseHandler: () => b,
        BasicSelectionModel: () => O,
        BooleanCellEditor: () => V,
        CellEditor: () => D,
        CellEditorController: () => K,
        CellGroup: () => S,
        CellRenderer: () => x,
        DataGrid: () => ee,
        DataModel: () => q,
        DateCellEditor: () => X,
        DynamicOptionCellEditor: () => Y,
        GraphicsContext: () => $,
        HyperlinkRenderer: () => M,
        ImageRenderer: () => ne,
        InputCellEditor: () => G,
        IntegerCellEditor: () => P,
        IntegerInputValidator: () => T,
        JSONModel: () => ie,
        MutableDataModel: () => j,
        NumberCellEditor: () => A,
        NumberInputValidator: () => B,
        OptionCellEditor: () => N,
        PassInputValidator: () => L,
        RendererMap: () => J,
        SectionList: () => Z,
        SelectionModel: () => R,
        TextCellEditor: () => I,
        TextInputValidator: () => W,
        TextRenderer: () => v,
        resolveOption: () => F,
      });
      var s = i(76326);
      var o = i.n(s);
      var r = i(77162);
      var n = i.n(r);
      var l = i(10970);
      var a = i.n(l);
      var h = i(34236);
      var c = i.n(h);
      var d = i(2336);
      var u = i.n(d);
      var f = i(1143);
      var _ = i.n(f);
      var m = i(42856);
      var g = i.n(m);
      var p = i(5592);
      var w = i.n(p);
      class y {
        constructor() {
          this._disposed = false;
        }
        get isDisposed() {
          return this._disposed;
        }
        dispose() {
          this._disposed = true;
        }
        onKeyDown(e, t) {
          if (e.editable && e.selectionModel.cursorRow !== -1 && e.selectionModel.cursorColumn !== -1) {
            const i = String.fromCharCode(t.keyCode);
            if (/[a-zA-Z0-9-_ ]/.test(i)) {
              const i = e.selectionModel.cursorRow;
              const s = e.selectionModel.cursorColumn;
              const o = { grid: e, row: i, column: s };
              e.editorController.edit(o);
              if ((0, r.getKeyboardLayout)().keyForKeydownEvent(t) === "Space") {
                t.stopPropagation();
                t.preventDefault();
              }
              return;
            }
          }
          switch ((0, r.getKeyboardLayout)().keyForKeydownEvent(t)) {
            case "ArrowLeft":
              this.onArrowLeft(e, t);
              break;
            case "ArrowRight":
              this.onArrowRight(e, t);
              break;
            case "ArrowUp":
              this.onArrowUp(e, t);
              break;
            case "ArrowDown":
              this.onArrowDown(e, t);
              break;
            case "PageUp":
              this.onPageUp(e, t);
              break;
            case "PageDown":
              this.onPageDown(e, t);
              break;
            case "Escape":
              this.onEscape(e, t);
              break;
            case "Delete":
              this.onDelete(e, t);
              break;
            case "C":
              this.onKeyC(e, t);
              break;
            case "Enter":
              if (e.selectionModel) {
                e.moveCursor(t.shiftKey ? "up" : "down");
                e.scrollToCursor();
              }
              break;
            case "Tab":
              if (e.selectionModel) {
                e.moveCursor(t.shiftKey ? "left" : "right");
                e.scrollToCursor();
                t.stopPropagation();
                t.preventDefault();
              }
              break;
          }
        }
        onArrowLeft(e, t) {
          t.preventDefault();
          t.stopPropagation();
          let i = e.selectionModel;
          let o = t.shiftKey;
          let r = s.Platform.accelKey(t);
          if (!i && r) {
            e.scrollTo(0, e.scrollY);
            return;
          }
          if (!i) {
            e.scrollByStep("left");
            return;
          }
          let n = i.selectionMode;
          if (n === "row" && r) {
            e.scrollTo(0, e.scrollY);
            return;
          }
          if (n === "row") {
            e.scrollByStep("left");
            return;
          }
          let l = i.cursorRow;
          let a = i.cursorColumn;
          let h = i.currentSelection();
          let c;
          let d;
          let u;
          let f;
          let _;
          let m;
          let g;
          if (r && o) {
            c = h ? h.r1 : 0;
            d = h ? h.r2 : 0;
            u = h ? h.c1 : 0;
            f = 0;
            _ = l;
            m = a;
            g = "current";
          } else if (o) {
            c = h ? h.r1 : 0;
            d = h ? h.r2 : 0;
            u = h ? h.c1 : 0;
            f = h ? h.c2 - 1 : 0;
            _ = l;
            m = a;
            g = "current";
          } else if (r) {
            c = l;
            d = l;
            u = 0;
            f = 0;
            _ = c;
            m = u;
            g = "all";
          } else {
            c = l;
            d = l;
            u = a - 1;
            f = a - 1;
            _ = c;
            m = u;
            g = "all";
          }
          i.select({ r1: c, c1: u, r2: d, c2: f, cursorRow: _, cursorColumn: m, clear: g });
          h = i.currentSelection();
          if (!h) {
            return;
          }
          if (o || n === "column") {
            e.scrollToColumn(h.c2);
          } else {
            e.scrollToCursor();
          }
        }
        onArrowRight(e, t) {
          t.preventDefault();
          t.stopPropagation();
          let i = e.selectionModel;
          let o = t.shiftKey;
          let r = s.Platform.accelKey(t);
          if (!i && r) {
            e.scrollTo(e.maxScrollX, e.scrollY);
            return;
          }
          if (!i) {
            e.scrollByStep("right");
            return;
          }
          let n = i.selectionMode;
          if (n === "row" && r) {
            e.scrollTo(e.maxScrollX, e.scrollY);
            return;
          }
          if (n === "row") {
            e.scrollByStep("right");
            return;
          }
          let l = i.cursorRow;
          let a = i.cursorColumn;
          let h = i.currentSelection();
          let c;
          let d;
          let u;
          let f;
          let _;
          let m;
          let g;
          if (r && o) {
            c = h ? h.r1 : 0;
            d = h ? h.r2 : 0;
            u = h ? h.c1 : 0;
            f = Infinity;
            _ = l;
            m = a;
            g = "current";
          } else if (o) {
            c = h ? h.r1 : 0;
            d = h ? h.r2 : 0;
            u = h ? h.c1 : 0;
            f = h ? h.c2 + 1 : 0;
            _ = l;
            m = a;
            g = "current";
          } else if (r) {
            c = l;
            d = l;
            u = Infinity;
            f = Infinity;
            _ = c;
            m = u;
            g = "all";
          } else {
            c = l;
            d = l;
            u = a + 1;
            f = a + 1;
            _ = c;
            m = u;
            g = "all";
          }
          i.select({ r1: c, c1: u, r2: d, c2: f, cursorRow: _, cursorColumn: m, clear: g });
          h = i.currentSelection();
          if (!h) {
            return;
          }
          if (o || n === "column") {
            e.scrollToColumn(h.c2);
          } else {
            e.scrollToCursor();
          }
        }
        onArrowUp(e, t) {
          t.preventDefault();
          t.stopPropagation();
          let i = e.selectionModel;
          let o = t.shiftKey;
          let r = s.Platform.accelKey(t);
          if (!i && r) {
            e.scrollTo(e.scrollX, 0);
            return;
          }
          if (!i) {
            e.scrollByStep("up");
            return;
          }
          let n = i.selectionMode;
          if (n === "column" && r) {
            e.scrollTo(e.scrollX, 0);
            return;
          }
          if (n === "column") {
            e.scrollByStep("up");
            return;
          }
          let l = i.cursorRow;
          let a = i.cursorColumn;
          let h = i.currentSelection();
          let c;
          let d;
          let u;
          let f;
          let _;
          let m;
          let g;
          if (r && o) {
            c = h ? h.r1 : 0;
            d = 0;
            u = h ? h.c1 : 0;
            f = h ? h.c2 : 0;
            _ = l;
            m = a;
            g = "current";
          } else if (o) {
            c = h ? h.r1 : 0;
            d = h ? h.r2 - 1 : 0;
            u = h ? h.c1 : 0;
            f = h ? h.c2 : 0;
            _ = l;
            m = a;
            g = "current";
          } else if (r) {
            c = 0;
            d = 0;
            u = a;
            f = a;
            _ = c;
            m = u;
            g = "all";
          } else {
            c = l - 1;
            d = l - 1;
            u = a;
            f = a;
            _ = c;
            m = u;
            g = "all";
          }
          i.select({ r1: c, c1: u, r2: d, c2: f, cursorRow: _, cursorColumn: m, clear: g });
          h = i.currentSelection();
          if (!h) {
            return;
          }
          if (o || n === "row") {
            e.scrollToRow(h.r2);
          } else {
            e.scrollToCursor();
          }
        }
        onArrowDown(e, t) {
          t.preventDefault();
          t.stopPropagation();
          let i = e.selectionModel;
          let o = t.shiftKey;
          let r = s.Platform.accelKey(t);
          if (!i && r) {
            e.scrollTo(e.scrollX, e.maxScrollY);
            return;
          }
          if (!i) {
            e.scrollByStep("down");
            return;
          }
          let n = i.selectionMode;
          if (n === "column" && r) {
            e.scrollTo(e.scrollX, e.maxScrollY);
            return;
          }
          if (n === "column") {
            e.scrollByStep("down");
            return;
          }
          let l = i.cursorRow;
          let a = i.cursorColumn;
          let h = i.currentSelection();
          let c;
          let d;
          let u;
          let f;
          let _;
          let m;
          let g;
          if (r && o) {
            c = h ? h.r1 : 0;
            d = Infinity;
            u = h ? h.c1 : 0;
            f = h ? h.c2 : 0;
            _ = l;
            m = a;
            g = "current";
          } else if (o) {
            c = h ? h.r1 : 0;
            d = h ? h.r2 + 1 : 0;
            u = h ? h.c1 : 0;
            f = h ? h.c2 : 0;
            _ = l;
            m = a;
            g = "current";
          } else if (r) {
            c = Infinity;
            d = Infinity;
            u = a;
            f = a;
            _ = c;
            m = u;
            g = "all";
          } else {
            c = l + 1;
            d = l + 1;
            u = a;
            f = a;
            _ = c;
            m = u;
            g = "all";
          }
          i.select({ r1: c, c1: u, r2: d, c2: f, cursorRow: _, cursorColumn: m, clear: g });
          h = i.currentSelection();
          if (!h) {
            return;
          }
          if (o || n === "row") {
            e.scrollToRow(h.r2);
          } else {
            e.scrollToCursor();
          }
        }
        onPageUp(e, t) {
          if (s.Platform.accelKey(t)) {
            return;
          }
          t.preventDefault();
          t.stopPropagation();
          let i = e.selectionModel;
          if (!i || i.selectionMode === "column") {
            e.scrollByPage("up");
            return;
          }
          let o = Math.floor(e.pageHeight / e.defaultSizes.rowHeight);
          let r = i.cursorRow;
          let n = i.cursorColumn;
          let l = i.currentSelection();
          let a;
          let h;
          let c;
          let d;
          let u;
          let f;
          let _;
          if (t.shiftKey) {
            a = l ? l.r1 : 0;
            h = l ? l.r2 - o : 0;
            c = l ? l.c1 : 0;
            d = l ? l.c2 : 0;
            u = r;
            f = n;
            _ = "current";
          } else {
            a = l ? l.r1 - o : 0;
            h = a;
            c = n;
            d = n;
            u = a;
            f = n;
            _ = "all";
          }
          i.select({ r1: a, c1: c, r2: h, c2: d, cursorRow: u, cursorColumn: f, clear: _ });
          l = i.currentSelection();
          if (!l) {
            return;
          }
          e.scrollToRow(l.r2);
        }
        onPageDown(e, t) {
          if (s.Platform.accelKey(t)) {
            return;
          }
          t.preventDefault();
          t.stopPropagation();
          let i = e.selectionModel;
          if (!i || i.selectionMode === "column") {
            e.scrollByPage("down");
            return;
          }
          let o = Math.floor(e.pageHeight / e.defaultSizes.rowHeight);
          let r = i.cursorRow;
          let n = i.cursorColumn;
          let l = i.currentSelection();
          let a;
          let h;
          let c;
          let d;
          let u;
          let f;
          let _;
          if (t.shiftKey) {
            a = l ? l.r1 : 0;
            h = l ? l.r2 + o : 0;
            c = l ? l.c1 : 0;
            d = l ? l.c2 : 0;
            u = r;
            f = n;
            _ = "current";
          } else {
            a = l ? l.r1 + o : 0;
            h = a;
            c = n;
            d = n;
            u = a;
            f = n;
            _ = "all";
          }
          i.select({ r1: a, c1: c, r2: h, c2: d, cursorRow: u, cursorColumn: f, clear: _ });
          l = i.currentSelection();
          if (!l) {
            return;
          }
          e.scrollToRow(l.r2);
        }
        onEscape(e, t) {
          if (e.selectionModel) {
            e.selectionModel.clear();
          }
        }
        onDelete(e, t) {
          if (e.editable && !e.selectionModel.isEmpty) {
            const t = e.dataModel;
            let i = t.rowCount("body") - 1;
            let s = t.columnCount("body") - 1;
            for (let o of e.selectionModel.selections()) {
              let e = Math.max(0, Math.min(o.r1, i));
              let r = Math.max(0, Math.min(o.c1, s));
              let n = Math.max(0, Math.min(o.r2, i));
              let l = Math.max(0, Math.min(o.c2, s));
              for (let i = e; i <= n; ++i) {
                for (let e = r; e <= l; ++e) {
                  t.setData("body", i, e, null);
                }
              }
            }
          }
        }
        onKeyC(e, t) {
          if (t.shiftKey || !s.Platform.accelKey(t)) {
            return;
          }
          t.preventDefault();
          t.stopPropagation();
          e.copyToClipboard();
        }
      }
      class x {}
      (function (e) {
        function t(e, t) {
          return typeof e === "function" ? e(t) : e;
        }
        e.resolveOption = t;
      })(x || (x = {}));
      class v extends x {
        constructor(e = {}) {
          super();
          this.font = e.font || "12px sans-serif";
          this.textColor = e.textColor || "#000000";
          this.backgroundColor = e.backgroundColor || "";
          this.verticalAlignment = e.verticalAlignment || "center";
          this.horizontalAlignment = e.horizontalAlignment || "left";
          this.horizontalPadding = e.horizontalPadding || 8;
          this.format = e.format || v.formatGeneric();
          this.elideDirection = e.elideDirection || "none";
          this.wrapText = e.wrapText || false;
        }
        paint(e, t) {
          this.drawBackground(e, t);
          this.drawText(e, t);
        }
        drawBackground(e, t) {
          let i = x.resolveOption(this.backgroundColor, t);
          if (!i) {
            return;
          }
          e.fillStyle = i;
          e.fillRect(t.x, t.y, t.width, t.height);
        }
        getText(e) {
          return this.format(e);
        }
        drawText(e, t) {
          let i = x.resolveOption(this.font, t);
          if (!i) {
            return;
          }
          let s = x.resolveOption(this.textColor, t);
          if (!s) {
            return;
          }
          let o = this.getText(t);
          if (!o) {
            return;
          }
          let r = x.resolveOption(this.verticalAlignment, t);
          let n = x.resolveOption(this.horizontalAlignment, t);
          let l = x.resolveOption(this.elideDirection, t);
          let a = x.resolveOption(this.wrapText, t);
          let h = t.height - (r === "center" ? 1 : 2);
          if (h <= 0) {
            return;
          }
          let c = v.measureFontHeight(i);
          let d;
          let u;
          let f;
          switch (r) {
            case "top":
              u = t.y + 2 + c;
              break;
            case "center":
              u = t.y + t.height / 2 + c / 2;
              break;
            case "bottom":
              u = t.y + t.height - 2;
              break;
            default:
              throw "unreachable";
          }
          switch (n) {
            case "left":
              d = t.x + this.horizontalPadding;
              f = t.width - 14;
              break;
            case "center":
              d = t.x + t.width / 2;
              f = t.width;
              break;
            case "right":
              d = t.x + t.width - this.horizontalPadding;
              f = t.width - 14;
              break;
            default:
              throw "unreachable";
          }
          if (c > h) {
            e.beginPath();
            e.rect(t.x, t.y, t.width, t.height - 1);
            e.clip();
          }
          e.font = i;
          e.fillStyle = s;
          e.textAlign = n;
          e.textBaseline = "bottom";
          if (l === "none" && !a) {
            e.fillText(o, d, u);
            return;
          }
          let _ = e.measureText(o).width;
          if (a && _ > f) {
            e.beginPath();
            e.rect(t.x, t.y, t.width, t.height - 1);
            e.clip();
            const i = o.split(/\s(?=\b)/);
            let s = u;
            let r = i.shift();
            if (i.length === 0) {
              let t = e.measureText(r).width;
              while (t > f && r !== "") {
                for (let i = r.length; i > 0; i--) {
                  const o = r.substring(0, i);
                  const n = e.measureText(o).width;
                  if (n < f || o.length === 1) {
                    const n = r.substring(i, r.length);
                    r = n;
                    t = e.measureText(r).width;
                    e.fillText(o, d, s);
                    s += c;
                    break;
                  }
                }
              }
            } else {
              while (i.length !== 0) {
                const t = i.shift();
                const o = [r, t].join(" ");
                const n = e.measureText(o).width;
                if (n > f) {
                  e.fillText(r, d, s);
                  s += c;
                  r = t;
                } else {
                  r = o;
                }
              }
            }
            e.fillText(r, d, s);
            return;
          }
          const m = "…";
          while (_ > f && o.length > 1) {
            const t = [...o];
            if (l === "right") {
              if (t.length > 4 && _ >= 2 * f) {
                o = t.slice(0, Math.floor(t.length / 2 + 1)).join("") + m;
              } else {
                o = t.slice(0, t.length - 2).join("") + m;
              }
            } else {
              if (t.length > 4 && _ >= 2 * f) {
                o = m + t.slice(Math.floor(t.length / 2)).join("");
              } else {
                o = m + t.slice(2).join("");
              }
            }
            _ = e.measureText(o).width;
          }
          e.fillText(o, d, u);
        }
      }
      (function (e) {
        function t(e = {}) {
          let t = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            return String(e);
          };
        }
        e.formatGeneric = t;
        function i(e = {}) {
          let t = e.digits;
          let i = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return i;
            }
            return Number(e).toFixed(t);
          };
        }
        e.formatFixed = i;
        function s(e = {}) {
          let t = e.digits;
          let i = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return i;
            }
            return Number(e).toPrecision(t);
          };
        }
        e.formatPrecision = s;
        function o(e = {}) {
          let t = e.digits;
          let i = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return i;
            }
            return Number(e).toExponential(t);
          };
        }
        e.formatExponential = o;
        function r(e = {}) {
          let t = e.missing || "";
          let i = new Intl.NumberFormat(e.locales, e.options);
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            return i.format(e);
          };
        }
        e.formatIntlNumber = r;
        function n(e = {}) {
          let t = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            if (e instanceof Date) {
              return e.toDateString();
            }
            return new Date(e).toDateString();
          };
        }
        e.formatDate = n;
        function l(e = {}) {
          let t = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            if (e instanceof Date) {
              return e.toTimeString();
            }
            return new Date(e).toTimeString();
          };
        }
        e.formatTime = l;
        function a(e = {}) {
          let t = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            if (e instanceof Date) {
              return e.toISOString();
            }
            return new Date(e).toISOString();
          };
        }
        e.formatISODateTime = a;
        function h(e = {}) {
          let t = e.missing || "";
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            if (e instanceof Date) {
              return e.toUTCString();
            }
            return new Date(e).toUTCString();
          };
        }
        e.formatUTCDateTime = h;
        function c(e = {}) {
          let t = e.missing || "";
          let i = new Intl.DateTimeFormat(e.locales, e.options);
          return ({ value: e }) => {
            if (e === null || e === undefined) {
              return t;
            }
            return i.format(e);
          };
        }
        e.formatIntlDateTime = c;
        function d(e) {
          let t = C.fontHeightCache[e];
          if (t !== undefined) {
            return t;
          }
          C.fontMeasurementGC.font = e;
          let i = C.fontMeasurementGC.font;
          C.fontMeasurementNode.style.font = i;
          document.body.appendChild(C.fontMeasurementNode);
          t = C.fontMeasurementNode.offsetHeight;
          document.body.removeChild(C.fontMeasurementNode);
          C.fontHeightCache[e] = t;
          C.fontHeightCache[i] = t;
          return t;
        }
        e.measureFontHeight = d;
      })(v || (v = {}));
      var C;
      (function (e) {
        e.fontHeightCache = Object.create(null);
        e.fontMeasurementNode = (() => {
          let e = document.createElement("div");
          e.style.position = "absolute";
          e.style.top = "-99999px";
          e.style.left = "-99999px";
          e.style.visibility = "hidden";
          e.textContent = "M";
          return e;
        })();
        e.fontMeasurementGC = (() => {
          let e = document.createElement("canvas");
          e.width = 0;
          e.height = 0;
          return e.getContext("2d");
        })();
      })(C || (C = {}));
      class M extends v {
        constructor(e = {}) {
          e.textColor = e.textColor || "navy";
          e.font = e.font || "bold 12px sans-serif";
          super(e);
          this.url = e.url;
          this.urlName = e.urlName;
        }
        getText(e) {
          let t = x.resolveOption(this.urlName, e);
          if (t) {
            return this.format({ ...e, value: t });
          }
          return this.format(e);
        }
        drawText(e, t) {
          let i = x.resolveOption(this.font, t);
          if (!i) {
            return;
          }
          let s = x.resolveOption(this.textColor, t);
          if (!s) {
            return;
          }
          let o = this.getText(t);
          if (!o) {
            return;
          }
          let r = x.resolveOption(this.verticalAlignment, t);
          let n = x.resolveOption(this.horizontalAlignment, t);
          let l = x.resolveOption(this.elideDirection, t);
          let a = x.resolveOption(this.wrapText, t);
          let h = t.height - (r === "center" ? 1 : 2);
          if (h <= 0) {
            return;
          }
          let c = M.measureFontHeight(i);
          let d;
          let u;
          let f;
          switch (r) {
            case "top":
              u = t.y + 2 + c;
              break;
            case "center":
              u = t.y + t.height / 2 + c / 2;
              break;
            case "bottom":
              u = t.y + t.height - 2;
              break;
            default:
              throw "unreachable";
          }
          switch (n) {
            case "left":
              d = t.x + 8;
              f = t.width - 14;
              break;
            case "center":
              d = t.x + t.width / 2;
              f = t.width;
              break;
            case "right":
              d = t.x + t.width - 8;
              f = t.width - 14;
              break;
            default:
              throw "unreachable";
          }
          if (c > h) {
            e.beginPath();
            e.rect(t.x, t.y, t.width, t.height - 1);
            e.clip();
          }
          e.font = i;
          e.fillStyle = s;
          e.textAlign = n;
          e.textBaseline = "bottom";
          if (l === "none" && !a) {
            e.fillText(o, d, u);
            return;
          }
          let _ = e.measureText(o).width;
          if (a && _ > f) {
            e.beginPath();
            e.rect(t.x, t.y, t.width, t.height - 1);
            e.clip();
            const i = o.split(/\s(?=\b)/);
            let s = u;
            let r = i.shift();
            if (i.length === 0) {
              let t = e.measureText(r).width;
              while (t > f && r !== "") {
                for (let i = r.length; i > 0; i--) {
                  const o = r.substring(0, i);
                  const n = e.measureText(o).width;
                  if (n < f || o.length === 1) {
                    const n = r.substring(i, r.length);
                    r = n;
                    t = e.measureText(r).width;
                    e.fillText(o, d, s);
                    s += c;
                    break;
                  }
                }
              }
            } else {
              while (i.length !== 0) {
                const t = i.shift();
                const o = [r, t].join(" ");
                const n = e.measureText(o).width;
                if (n > f) {
                  e.fillText(r, d, s);
                  s += c;
                  r = t;
                } else {
                  r = o;
                }
              }
            }
            e.fillText(r, d, s);
            return;
          }
          let m = "…";
          if (l === "right") {
            while (_ > f && o.length > 1) {
              if (o.length > 4 && _ >= 2 * f) {
                o = o.substring(0, o.length / 2 + 1) + m;
              } else {
                o = o.substring(0, o.length - 2) + m;
              }
              _ = e.measureText(o).width;
            }
          } else {
            while (_ > f && o.length > 1) {
              if (o.length > 4 && _ >= 2 * f) {
                o = m + o.substring(o.length / 2);
              } else {
                o = m + o.substring(2);
              }
              _ = e.measureText(o).width;
            }
          }
          e.fillText(o, d, u);
        }
      }
      var S;
      (function (e) {
        function t(e, t, i) {
          if (i === "row") {
            return (
              (e.r1 >= t.r1 && e.r1 <= t.r2) || (e.r2 >= t.r1 && e.r2 <= t.r2) || (t.r1 >= e.r1 && t.r1 <= e.r2) || (t.r2 >= e.r1 && t.r2 <= e.r2)
            );
          }
          return (e.c1 >= t.c1 && e.c1 <= t.c2) || (e.c2 >= t.c1 && e.c2 <= t.c2) || (t.c1 >= e.c1 && t.c1 <= e.c2) || (t.c2 >= e.c1 && t.c2 <= e.c2);
        }
        e.areCellGroupsIntersectingAtAxis = t;
        function i(e, t) {
          return (
            ((e.r1 >= t.r1 && e.r1 <= t.r2) || (e.r2 >= t.r1 && e.r2 <= t.r2) || (t.r1 >= e.r1 && t.r1 <= e.r2) || (t.r2 >= e.r1 && t.r2 <= e.r2)) &&
            ((e.c1 >= t.c1 && e.c1 <= t.c2) || (e.c2 >= t.c1 && e.c2 <= t.c2) || (t.c1 >= e.c1 && t.c1 <= e.c2) || (t.c2 >= e.c1 && t.c2 <= e.c2))
          );
        }
        e.areCellGroupsIntersecting = i;
        function s(e, t, i, s) {
          const o = e.groupCount(t);
          for (let r = 0; r < o; r++) {
            const o = e.group(t, r);
            if (i >= o.r1 && i <= o.r2 && s >= o.c1 && s <= o.c2) {
              return r;
            }
          }
          return -1;
        }
        e.getGroupIndex = s;
        function o(e, t, i, o) {
          const r = s(e, t, i, o);
          if (r === -1) {
            return null;
          }
          return e.group(t, r);
        }
        e.getGroup = o;
        function r(e, t) {
          let i = [];
          const s = e.groupCount(t);
          for (let o = 0; o < s; o++) {
            const s = e.group(t, o);
            i.push(s);
          }
          return i;
        }
        e.getCellGroupsAtRegion = r;
        function n(e) {
          let t = Number.MAX_VALUE;
          let i = Number.MIN_VALUE;
          let s = Number.MAX_VALUE;
          let o = Number.MIN_VALUE;
          for (const r of e) {
            t = Math.min(t, r.r1);
            i = Math.max(i, r.r2);
            s = Math.min(s, r.c1);
            o = Math.max(o, r.c2);
          }
          return { r1: t, r2: i, c1: s, c2: o };
        }
        e.joinCellGroups = n;
        function l(e, t, s) {
          let o = { ...t };
          const l = r(e, s);
          for (let r = 0; r < l.length; r++) {
            const e = l[r];
            if (i(o, e)) {
              o = n([o, e]);
            }
          }
          return o;
        }
        e.joinCellGroupWithMergedCellGroups = l;
        function a(e, t, i) {
          let s = [];
          const o = e.groupCount(t);
          for (let r = 0; r < o; r++) {
            const o = e.group(t, r);
            if (i >= o.r1 && i <= o.r2) {
              s.push(o);
            }
          }
          return s;
        }
        e.getCellGroupsAtRow = a;
        function h(e, t, i) {
          let s = [];
          const o = e.groupCount(t);
          for (let r = 0; r < o; r++) {
            const o = e.group(t, r);
            if (i >= o.c1 && i <= o.c2) {
              s.push(o);
            }
          }
          return s;
        }
        e.getCellGroupsAtColumn = h;
        function c(t, i, s, o) {
          let r = [];
          if (s === "row") {
            for (const s of i) {
              for (let i = o.r1; i <= o.r2; i++) {
                r = r.concat(e.getCellGroupsAtRow(t, s, i));
              }
            }
          } else {
            for (const s of i) {
              for (let i = o.c1; i <= o.c2; i++) {
                r = r.concat(e.getCellGroupsAtColumn(t, s, i));
              }
            }
          }
          let n = e.joinCellGroups(r);
          if (r.length > 0) {
            let o = [];
            for (const s of i) {
              o = o.concat(e.getCellGroupsAtRegion(t, s));
            }
            for (let t = 0; t < o.length; t++) {
              const i = o[t];
              if (e.areCellGroupsIntersectingAtAxis(n, i, s)) {
                n = e.joinCellGroups([i, n]);
                o.splice(t, 1);
                t = 0;
              }
            }
          }
          return n;
        }
        e.joinCellGroupsIntersectingAtAxis = c;
      })(S || (S = {}));
      class b {
        constructor() {
          this._disposed = false;
          this._pressData = null;
        }
        dispose() {
          if (this._disposed) {
            return;
          }
          this.release();
          this._disposed = true;
        }
        get isDisposed() {
          return this._disposed;
        }
        release() {
          if (!this._pressData) {
            return;
          }
          if (this._pressData.type === "select") {
            this._pressData.timeout = -1;
          }
          this._pressData.override.dispose();
          this._pressData = null;
        }
        onMouseHover(e, t) {
          let i = e.hitTest(t.clientX, t.clientY);
          let s = H.resizeHandleForHitTest(i);
          let o = this.cursorForHandle(s);
          const r = H.createCellConfigObject(e, i);
          if (r) {
            const t = e.cellRenderers.get(r);
            if (t instanceof M) {
              o = this.cursorForHandle("hyperlink");
            }
          }
          e.viewport.node.style.cursor = o;
        }
        onMouseLeave(e, t) {
          e.viewport.node.style.cursor = "";
        }
        onMouseDown(e, t) {
          let { clientX: i, clientY: o } = t;
          let r = e.hitTest(i, o);
          const { region: n, row: a, column: h } = r;
          if (n === "void") {
            return;
          }
          let c = t.shiftKey;
          let d = s.Platform.accelKey(t);
          if (e) {
            const t = H.createCellConfigObject(e, r);
            let i = e.cellRenderers.get(t);
            if (i instanceof M) {
              let s = x.resolveOption(i.url, t);
              if (!s) {
                const e = v.formatGeneric();
                s = e(t);
              }
              if (d) {
                window.open(s);
                const t = this.cursorForHandle("none");
                e.viewport.node.style.cursor = t;
                return;
              }
            }
          }
          if (n === "body") {
            let t = e.selectionModel;
            if (!t) {
              return;
            }
            let i = l.Drag.overrideCursor("default");
            this._pressData = { type: "select", region: n, row: a, column: h, override: i, localX: -1, localY: -1, timeout: -1 };
            let s;
            let o;
            let r;
            let u;
            let f;
            let _;
            let m;
            if (d) {
              s = a;
              r = a;
              o = h;
              u = h;
              f = a;
              _ = h;
              m = "none";
            } else if (c) {
              s = t.cursorRow;
              r = a;
              o = t.cursorColumn;
              u = h;
              f = t.cursorRow;
              _ = t.cursorColumn;
              m = "current";
            } else {
              s = a;
              r = a;
              o = h;
              u = h;
              f = a;
              _ = h;
              m = "all";
            }
            t.select({ r1: s, c1: o, r2: r, c2: u, cursorRow: f, cursorColumn: _, clear: m });
            return;
          }
          let u = H.resizeHandleForHitTest(r);
          let f = this.cursorForHandle(u);
          if (u === "left" || u === "right") {
            const t = "column-resize";
            let s = n === "column-header" ? "body" : "row-header";
            let o = u === "left" ? h - 1 : h;
            let r = e.columnSize(s, o);
            let a = l.Drag.overrideCursor(f);
            this._pressData = { type: t, region: s, index: o, size: r, clientX: i, override: a };
            return;
          }
          if (u === "top" || u === "bottom") {
            const t = "row-resize";
            let i = n === "row-header" ? "body" : "column-header";
            let s = u === "top" ? a - 1 : a;
            let r = e.rowSize(i, s);
            let h = l.Drag.overrideCursor(f);
            this._pressData = { type: t, region: i, index: s, size: r, clientY: o, override: h };
            return;
          }
          let _ = e.selectionModel;
          if (!_) {
            return;
          }
          let m = l.Drag.overrideCursor("default");
          this._pressData = { type: "select", region: n, row: a, column: h, override: m, localX: -1, localY: -1, timeout: -1 };
          let g;
          let p;
          let w;
          let y;
          let C;
          let b;
          let R;
          if (n === "corner-header") {
            g = 0;
            w = Infinity;
            p = 0;
            y = Infinity;
            C = d ? 0 : c ? _.cursorRow : 0;
            b = d ? 0 : c ? _.cursorColumn : 0;
            R = d ? "none" : c ? "current" : "all";
          } else if (n === "row-header") {
            g = d ? a : c ? _.cursorRow : a;
            w = a;
            const t = { r1: g, c1: 0, r2: w, c2: 0 };
            const i = S.joinCellGroupsIntersectingAtAxis(e.dataModel, ["row-header", "body"], "row", t);
            if (i.r1 != Number.MAX_VALUE) {
              g = i.r1;
              w = i.r2;
            }
            p = 0;
            y = Infinity;
            C = d ? a : c ? _.cursorRow : a;
            b = d ? 0 : c ? _.cursorColumn : 0;
            R = d ? "none" : c ? "current" : "all";
          } else if (n === "column-header") {
            g = 0;
            w = Infinity;
            p = d ? h : c ? _.cursorColumn : h;
            y = h;
            const t = { r1: 0, c1: p, r2: 0, c2: y };
            const i = S.joinCellGroupsIntersectingAtAxis(e.dataModel, ["column-header", "body"], "column", t);
            if (i.c1 != Number.MAX_VALUE) {
              p = i.c1;
              y = i.c2;
            }
            C = d ? 0 : c ? _.cursorRow : 0;
            b = d ? h : c ? _.cursorColumn : h;
            R = d ? "none" : c ? "current" : "all";
          } else {
            g = d ? a : c ? _.cursorRow : a;
            w = a;
            p = d ? h : c ? _.cursorColumn : h;
            y = h;
            C = d ? a : c ? _.cursorRow : a;
            b = d ? h : c ? _.cursorColumn : h;
            R = d ? "none" : c ? "current" : "all";
          }
          _.select({ r1: g, c1: p, r2: w, c2: y, cursorRow: C, cursorColumn: b, clear: R });
        }
        onMouseMove(e, t) {
          const i = this._pressData;
          if (!i) {
            return;
          }
          if (i.type === "row-resize") {
            let s = t.clientY - i.clientY;
            e.resizeRow(i.region, i.index, i.size + s);
            return;
          }
          if (i.type === "column-resize") {
            let s = t.clientX - i.clientX;
            e.resizeColumn(i.region, i.index, i.size + s);
            return;
          }
          if (i.region === "corner-header") {
            return;
          }
          let s = e.selectionModel;
          if (!s) {
            return;
          }
          let { lx: o, ly: r } = e.mapToLocal(t.clientX, t.clientY);
          i.localX = o;
          i.localY = r;
          let n = e.headerWidth;
          let l = e.headerHeight;
          let a = e.viewportWidth;
          let h = e.viewportHeight;
          let c = e.scrollX;
          let d = e.scrollY;
          let u = e.maxScrollY;
          let f = e.maxScrollY;
          let _ = s.selectionMode;
          let m = -1;
          if (i.region === "row-header" || _ === "row") {
            if (r < l && d > 0) {
              m = H.computeTimeout(l - r);
            } else if (r >= h && d < f) {
              m = H.computeTimeout(r - h);
            }
          } else if (i.region === "column-header" || _ === "column") {
            if (o < n && c > 0) {
              m = H.computeTimeout(n - o);
            } else if (o >= a && c < u) {
              m = H.computeTimeout(o - a);
            }
          } else {
            if (o < n && c > 0) {
              m = H.computeTimeout(n - o);
            } else if (o >= a && c < u) {
              m = H.computeTimeout(o - a);
            } else if (r < l && d > 0) {
              m = H.computeTimeout(l - r);
            } else if (r >= h && d < f) {
              m = H.computeTimeout(r - h);
            }
          }
          if (m >= 0) {
            if (i.timeout < 0) {
              i.timeout = m;
              setTimeout(() => {
                H.autoselect(e, i);
              }, m);
            } else {
              i.timeout = m;
            }
            return;
          }
          i.timeout = -1;
          let { vx: g, vy: p } = e.mapToVirtual(t.clientX, t.clientY);
          g = Math.max(0, Math.min(g, e.bodyWidth - 1));
          p = Math.max(0, Math.min(p, e.bodyHeight - 1));
          let w;
          let y;
          let x;
          let v;
          let C = s.cursorRow;
          let M = s.cursorColumn;
          let b = "current";
          if (i.region === "row-header" || _ === "row") {
            w = i.row;
            x = e.rowAt("body", p);
            const t = { r1: w, c1: 0, r2: x, c2: 0 };
            const s = S.joinCellGroupsIntersectingAtAxis(e.dataModel, ["row-header", "body"], "row", t);
            if (s.r1 != Number.MAX_VALUE) {
              w = Math.min(w, s.r1);
              x = Math.max(x, s.r2);
            }
            y = 0;
            v = Infinity;
          } else if (i.region === "column-header" || _ === "column") {
            w = 0;
            x = Infinity;
            y = i.column;
            v = e.columnAt("body", g);
            const t = { r1: 0, c1: y, r2: 0, c2: v };
            const s = S.joinCellGroupsIntersectingAtAxis(e.dataModel, ["column-header", "body"], "column", t);
            if (s.c1 != Number.MAX_VALUE) {
              y = s.c1;
              v = s.c2;
            }
          } else {
            w = C;
            x = e.rowAt("body", p);
            y = M;
            v = e.columnAt("body", g);
          }
          s.select({ r1: w, c1: y, r2: x, c2: v, cursorRow: C, cursorColumn: M, clear: b });
        }
        onMouseUp(e, t) {
          this.release();
        }
        onMouseDoubleClick(e, t) {
          var i, s, o;
          if (!e.dataModel) {
            this.release();
            return;
          }
          let { clientX: r, clientY: n } = t;
          let l = e.hitTest(r, n);
          let { region: a, row: h, column: c } = l;
          if (a === "void") {
            this.release();
            return;
          }
          if (a === "column-header" || a === "corner-header") {
            const t = H.resizeHandleForHitTest(l);
            if (t === "left" || t === "right") {
              let r = t === "left" ? c - 1 : c;
              let n = a === "column-header" ? "body" : "row-header";
              if (r < 0) {
                if (a === "column-header") {
                  r = e.dataModel.columnCount("row-header") - 1;
                  n = "row-header";
                } else {
                  return;
                }
              }
              const l = (i = e.selectionModel) === null || i === void 0 ? void 0 : i.currentSelection();
              const h = e.currentViewport;
              const d =
                (o = (s = e.selectionModel) === null || s === void 0 ? void 0 : s.dataModel.rowCount("body")) !== null && o !== void 0 ? o : 0;
              if (n == "body" && l != null && h != null && l.r1 == 0 && l.r2 == d - 1) {
                let t = Math.max(Math.min(l.c1, l.c2), h.firstColumn);
                let i = Math.min(Math.max(l.c1, l.c2), h.lastColumn);
                if (t <= r && r <= i) {
                  for (let s = t; s <= i; s++) {
                    e.resizeColumn(n, s, null);
                  }
                } else {
                  e.resizeColumn(n, r, null);
                }
              } else {
                e.resizeColumn(n, r, null);
              }
            }
          }
          if (a === "body") {
            if (e.editable) {
              const t = { grid: e, row: h, column: c };
              e.editorController.edit(t);
            }
          }
          this.release();
        }
        onContextMenu(e, t) {}
        onWheel(e, t) {
          if (this._pressData) {
            return;
          }
          let i = t.deltaX;
          let s = t.deltaY;
          switch (t.deltaMode) {
            case 0:
              break;
            case 1: {
              let t = e.defaultSizes;
              i *= t.columnWidth;
              s *= t.rowHeight;
              break;
            }
            case 2:
              i *= e.pageWidth;
              s *= e.pageHeight;
              break;
            default:
              throw "unreachable";
          }
          if (
            (i < 0 && e.scrollX !== 0) ||
            (i > 0 && e.scrollX !== e.maxScrollX) ||
            (s < 0 && e.scrollY !== 0) ||
            (s > 0 && e.scrollY !== e.maxScrollY)
          ) {
            t.preventDefault();
            t.stopPropagation();
            e.scrollBy(i, s);
          }
        }
        cursorForHandle(e) {
          return H.cursorMap[e];
        }
        get pressData() {
          return this._pressData;
        }
      }
      var H;
      (function (e) {
        function t(e, t) {
          const { region: i, row: s, column: o } = t;
          if (i === "void") {
            return undefined;
          }
          const r = e.dataModel.data(i, s, o);
          const n = e.dataModel.metadata(i, s, o);
          const l = { ...t, value: r, metadata: n };
          return l;
        }
        e.createCellConfigObject = t;
        function i(e) {
          let t = e.row;
          let i = e.column;
          let s = e.x;
          let o = e.y;
          let r = e.width - e.x;
          let n = e.height - e.y;
          let l;
          switch (e.region) {
            case "corner-header":
              if (i > 0 && s <= 5) {
                l = "left";
              } else if (r <= 6) {
                l = "right";
              } else if (t > 0 && o <= 5) {
                l = "top";
              } else if (n <= 6) {
                l = "bottom";
              } else {
                l = "none";
              }
              break;
            case "column-header":
              if (i > 0 && s <= 5) {
                l = "left";
              } else if (r <= 6) {
                l = "right";
              } else if (t > 0 && o <= 5) {
                l = "top";
              } else if (n <= 6) {
                l = "bottom";
              } else {
                l = "none";
              }
              break;
            case "row-header":
              if (i > 0 && s <= 5) {
                l = "left";
              } else if (r <= 6) {
                l = "right";
              } else if (t > 0 && o <= 5) {
                l = "top";
              } else if (n <= 6) {
                l = "bottom";
              } else {
                l = "none";
              }
              break;
            case "body":
              l = "none";
              break;
            case "void":
              l = "none";
              break;
            default:
              throw "unreachable";
          }
          return l;
        }
        e.resizeHandleForHitTest = i;
        function s(e, t) {
          if (t.timeout < 0) {
            return;
          }
          let i = e.selectionModel;
          if (!i) {
            return;
          }
          let o = i.currentSelection();
          if (!o) {
            return;
          }
          let r = t.localX;
          let n = t.localY;
          let l = o.r1;
          let a = o.c1;
          let h = o.r2;
          let c = o.c2;
          let d = i.cursorRow;
          let u = i.cursorColumn;
          let f = "current";
          let _ = e.headerWidth;
          let m = e.headerHeight;
          let g = e.viewportWidth;
          let p = e.viewportHeight;
          let w = i.selectionMode;
          if (t.region === "row-header" || w === "row") {
            h += n <= m ? -1 : n >= p ? 1 : 0;
          } else if (t.region === "column-header" || w === "column") {
            c += r <= _ ? -1 : r >= g ? 1 : 0;
          } else {
            h += n <= m ? -1 : n >= p ? 1 : 0;
            c += r <= _ ? -1 : r >= g ? 1 : 0;
          }
          i.select({ r1: l, c1: a, r2: h, c2: c, cursorRow: d, cursorColumn: u, clear: f });
          o = i.currentSelection();
          if (!o) {
            return;
          }
          if (t.region === "row-header" || w === "row") {
            e.scrollToRow(o.r2);
          } else if (t.region === "column-header" || w == "column") {
            e.scrollToColumn(o.c2);
          } else if (w === "cell") {
            e.scrollToCell(o.r2, o.c2);
          }
          setTimeout(() => {
            s(e, t);
          }, t.timeout);
        }
        e.autoselect = s;
        function o(e) {
          return 5 + 120 * (1 - Math.min(128, Math.abs(e)) / 128);
        }
        e.computeTimeout = o;
        e.cursorMap = { top: "ns-resize", left: "ew-resize", right: "ew-resize", bottom: "ns-resize", hyperlink: "pointer", none: "default" };
      })(H || (H = {}));
      class R {
        constructor(e) {
          this._changed = new d.Signal(this);
          this._selectionMode = "cell";
          this.dataModel = e.dataModel;
          this._selectionMode = e.selectionMode || "cell";
          this.dataModel.changed.connect(this.onDataModelChanged, this);
        }
        get changed() {
          return this._changed;
        }
        get selectionMode() {
          return this._selectionMode;
        }
        set selectionMode(e) {
          if (this._selectionMode === e) {
            return;
          }
          this._selectionMode = e;
          this.clear();
        }
        isRowSelected(e) {
          return (0, h.some)(this.selections(), (t) => z.containsRow(t, e));
        }
        isColumnSelected(e) {
          return (0, h.some)(this.selections(), (t) => z.containsColumn(t, e));
        }
        isCellSelected(e, t) {
          return (0, h.some)(this.selections(), (i) => z.containsCell(i, e, t));
        }
        onDataModelChanged(e, t) {}
        emitChanged() {
          this._changed.emit(undefined);
        }
      }
      var z;
      (function (e) {
        function t(e, t) {
          let { r1: i, r2: s } = e;
          return (t >= i && t <= s) || (t >= s && t <= i);
        }
        e.containsRow = t;
        function i(e, t) {
          let { c1: i, c2: s } = e;
          return (t >= i && t <= s) || (t >= s && t <= i);
        }
        e.containsColumn = i;
        function s(e, s, o) {
          return t(e, s) && i(e, o);
        }
        e.containsCell = s;
      })(z || (z = {}));
      class O extends R {
        constructor() {
          super(...arguments);
          this._cursorRow = -1;
          this._cursorColumn = -1;
          this._cursorRectIndex = -1;
          this._selections = [];
        }
        get isEmpty() {
          return this._selections.length === 0;
        }
        get cursorRow() {
          return this._cursorRow;
        }
        get cursorColumn() {
          return this._cursorColumn;
        }
        moveCursorWithinSelections(e) {
          if (this.isEmpty || this.cursorRow === -1 || this._cursorColumn === -1) {
            return;
          }
          const t = this._selections[0];
          if (this._selections.length === 1 && t.r1 === t.r2 && t.c1 === t.c2) {
            return;
          }
          if (this._cursorRectIndex === -1) {
            this._cursorRectIndex = this._selections.length - 1;
          }
          let i = this._selections[this._cursorRectIndex];
          const s = e === "down" ? 1 : e === "up" ? -1 : 0;
          const o = e === "right" ? 1 : e === "left" ? -1 : 0;
          let r = this._cursorRow + s;
          let n = this._cursorColumn + o;
          const l = Math.min(i.r1, i.r2);
          const a = Math.max(i.r1, i.r2);
          const h = Math.min(i.c1, i.c2);
          const c = Math.max(i.c1, i.c2);
          const d = () => {
            this._cursorRectIndex = (this._cursorRectIndex + 1) % this._selections.length;
            i = this._selections[this._cursorRectIndex];
            r = Math.min(i.r1, i.r2);
            n = Math.min(i.c1, i.c2);
          };
          const u = () => {
            this._cursorRectIndex = this._cursorRectIndex === 0 ? this._selections.length - 1 : this._cursorRectIndex - 1;
            i = this._selections[this._cursorRectIndex];
            r = Math.max(i.r1, i.r2);
            n = Math.max(i.c1, i.c2);
          };
          if (r > a) {
            r = l;
            n += 1;
            if (n > c) {
              d();
            }
          } else if (r < l) {
            r = a;
            n -= 1;
            if (n < h) {
              u();
            }
          } else if (n > c) {
            n = h;
            r += 1;
            if (r > a) {
              d();
            }
          } else if (n < h) {
            n = c;
            r -= 1;
            if (r < l) {
              u();
            }
          }
          this._cursorRow = r;
          this._cursorColumn = n;
          this.emitChanged();
        }
        currentSelection() {
          return this._selections[this._selections.length - 1] || null;
        }
        *selections() {
          yield* this._selections;
        }
        select(e) {
          let t = this.dataModel.rowCount("body");
          let i = this.dataModel.columnCount("body");
          if (t <= 0 || i <= 0) {
            return;
          }
          let { r1: s, c1: o, r2: r, c2: n, cursorRow: l, cursorColumn: a, clear: h } = e;
          if (h === "all") {
            this._selections.length = 0;
          } else if (h === "current") {
            this._selections.pop();
          }
          s = Math.max(0, Math.min(s, t - 1));
          r = Math.max(0, Math.min(r, t - 1));
          o = Math.max(0, Math.min(o, i - 1));
          n = Math.max(0, Math.min(n, i - 1));
          let c = false;
          if (this.selectionMode === "row") {
            o = 0;
            n = i - 1;
            c = this._selections.filter((e) => e.r1 === s).length !== 0;
            this._selections = c ? this._selections.filter((e) => e.r1 !== s) : this._selections;
          } else if (this.selectionMode === "column") {
            s = 0;
            r = t - 1;
            c = this._selections.filter((e) => e.c1 === o).length !== 0;
            this._selections = c ? this._selections.filter((e) => e.c1 !== o) : this._selections;
          }
          let d = l;
          let u = a;
          if (d < 0 || (d < s && d < r) || (d > s && d > r)) {
            d = s;
          }
          if (u < 0 || (u < o && u < n) || (u > o && u > n)) {
            u = o;
          }
          this._cursorRow = d;
          this._cursorColumn = u;
          this._cursorRectIndex = this._selections.length;
          if (!c) {
            this._selections.push({ r1: s, c1: o, r2: r, c2: n });
          }
          this.emitChanged();
        }
        clear() {
          if (this._selections.length === 0) {
            return;
          }
          this._cursorRow = -1;
          this._cursorColumn = -1;
          this._cursorRectIndex = -1;
          this._selections.length = 0;
          this.emitChanged();
        }
        onDataModelChanged(e, t) {
          if (this._selections.length === 0) {
            return;
          }
          if (t.type === "cells-changed") {
            return;
          }
          if (t.type === "rows-moved" || t.type === "columns-moved") {
            return;
          }
          let i = e.rowCount("body") - 1;
          let s = e.columnCount("body") - 1;
          if (i < 0 || s < 0) {
            this._selections.length = 0;
            this.emitChanged();
            return;
          }
          let o = this.selectionMode;
          let r = 0;
          for (let n = 0, l = this._selections.length; n < l; ++n) {
            let { r1: e, c1: t, r2: l, c2: a } = this._selections[n];
            if ((i < e && i < l) || (s < t && s < a)) {
              continue;
            }
            if (o === "row") {
              e = Math.max(0, Math.min(e, i));
              l = Math.max(0, Math.min(l, i));
              t = 0;
              a = s;
            } else if (o === "column") {
              e = 0;
              l = i;
              t = Math.max(0, Math.min(t, s));
              a = Math.max(0, Math.min(a, s));
            } else {
              e = Math.max(0, Math.min(e, i));
              l = Math.max(0, Math.min(l, i));
              t = Math.max(0, Math.min(t, s));
              a = Math.max(0, Math.min(a, s));
            }
            this._selections[r++] = { r1: e, c1: t, r2: l, c2: a };
          }
          this._selections.length = r;
          this.emitChanged();
        }
      }
      class k extends x {}
      const E = "Invalid input!";
      class L {
        validate(e, t) {
          return { valid: true };
        }
      }
      class W {
        constructor() {
          this.minLength = Number.NaN;
          this.maxLength = Number.NaN;
          this.pattern = null;
        }
        validate(e, t) {
          if (t === null) {
            return { valid: true };
          }
          if (typeof t !== "string") {
            return { valid: false, message: "Input must be valid text" };
          }
          if (!isNaN(this.minLength) && t.length < this.minLength) {
            return { valid: false, message: `Text length must be greater than ${this.minLength}` };
          }
          if (!isNaN(this.maxLength) && t.length > this.maxLength) {
            return { valid: false, message: `Text length must be less than ${this.maxLength}` };
          }
          if (this.pattern && !this.pattern.test(t)) {
            return { valid: false, message: `Text doesn't match the required pattern` };
          }
          return { valid: true };
        }
      }
      class T {
        constructor() {
          this.min = Number.NaN;
          this.max = Number.NaN;
        }
        validate(e, t) {
          if (t === null) {
            return { valid: true };
          }
          if (isNaN(t) || t % 1 !== 0) {
            return { valid: false, message: "Input must be valid integer" };
          }
          if (!isNaN(this.min) && t < this.min) {
            return { valid: false, message: `Input must be greater than ${this.min}` };
          }
          if (!isNaN(this.max) && t > this.max) {
            return { valid: false, message: `Input must be less than ${this.max}` };
          }
          return { valid: true };
        }
      }
      class B {
        constructor() {
          this.min = Number.NaN;
          this.max = Number.NaN;
        }
        validate(e, t) {
          if (t === null) {
            return { valid: true };
          }
          if (isNaN(t)) {
            return { valid: false, message: "Input must be valid number" };
          }
          if (!isNaN(this.min) && t < this.min) {
            return { valid: false, message: `Input must be greater than ${this.min}` };
          }
          if (!isNaN(this.max) && t > this.max) {
            return { valid: false, message: `Input must be less than ${this.max}` };
          }
          return { valid: true };
        }
      }
      class D {
        constructor() {
          this.inputChanged = new d.Signal(this);
          this.validityNotification = null;
          this._disposed = false;
          this._validInput = true;
          this._gridWheelEventHandler = null;
          this.inputChanged.connect(() => {
            this.validate();
          });
        }
        get isDisposed() {
          return this._disposed;
        }
        dispose() {
          if (this._disposed) {
            return;
          }
          if (this._gridWheelEventHandler) {
            this.cell.grid.node.removeEventListener("wheel", this._gridWheelEventHandler);
            this._gridWheelEventHandler = null;
          }
          this._closeValidityNotification();
          this._disposed = true;
          this.cell.grid.node.removeChild(this.viewportOccluder);
        }
        edit(e, t) {
          this.cell = e;
          this.onCommit = t && t.onCommit;
          this.onCancel = t && t.onCancel;
          this.validator = t && t.validator ? t.validator : this.createValidatorBasedOnType();
          this._gridWheelEventHandler = () => {
            this._closeValidityNotification();
            this.updatePosition();
          };
          e.grid.node.addEventListener("wheel", this._gridWheelEventHandler);
          this._addContainer();
          this.updatePosition();
          this.startEditing();
        }
        cancel() {
          if (this._disposed) {
            return;
          }
          this.dispose();
          if (this.onCancel) {
            this.onCancel();
          }
        }
        get validInput() {
          return this._validInput;
        }
        validate() {
          let e;
          try {
            e = this.getInput();
          } catch (t) {
            console.log(`Input error: ${t.message}`);
            this.setValidity(false, t.message || E);
            return;
          }
          if (this.validator) {
            const t = this.validator.validate(this.cell, e);
            if (t.valid) {
              this.setValidity(true);
            } else {
              this.setValidity(false, t.message || E);
            }
          } else {
            this.setValidity(true);
          }
        }
        setValidity(e, t = "") {
          this._validInput = e;
          this._closeValidityNotification();
          if (e) {
            this.editorContainer.classList.remove("lm-mod-invalid");
          } else {
            this.editorContainer.classList.add("lm-mod-invalid");
            if (t !== "") {
              this.validityNotification = new D.Notification({ target: this.editorContainer, message: t, placement: "bottom", timeout: 5e3 });
              this.validityNotification.show();
            }
          }
        }
        createValidatorBasedOnType() {
          const e = this.cell;
          const t = e.grid.dataModel.metadata("body", e.row, e.column);
          switch (t && t.type) {
            case "string": {
              const e = new W();
              if (typeof t.format === "string") {
                const i = t.format;
                switch (i) {
                  case "email":
                    e.pattern = new RegExp("^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$");
                    break;
                  case "uuid":
                    e.pattern = new RegExp("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}");
                    break;
                }
              }
              if (t.constraint) {
                if (t.constraint.minLength !== undefined) {
                  e.minLength = t.constraint.minLength;
                }
                if (t.constraint.maxLength !== undefined) {
                  e.maxLength = t.constraint.maxLength;
                }
                if (typeof t.constraint.pattern === "string") {
                  e.pattern = new RegExp(t.constraint.pattern);
                }
              }
              return e;
            }
            case "number": {
              const e = new B();
              if (t.constraint) {
                if (t.constraint.minimum !== undefined) {
                  e.min = t.constraint.minimum;
                }
                if (t.constraint.maximum !== undefined) {
                  e.max = t.constraint.maximum;
                }
              }
              return e;
            }
            case "integer": {
              const e = new T();
              if (t.constraint) {
                if (t.constraint.minimum !== undefined) {
                  e.min = t.constraint.minimum;
                }
                if (t.constraint.maximum !== undefined) {
                  e.max = t.constraint.maximum;
                }
              }
              return e;
            }
          }
          return undefined;
        }
        getCellInfo(e) {
          const { grid: t, row: i, column: s } = e;
          let o, r, n, l, a;
          const h = S.getGroup(t.dataModel, "body", i, s);
          if (h) {
            r = t.headerWidth - t.scrollX + t.columnOffset("body", h.c1);
            n = t.headerHeight - t.scrollY + t.rowOffset("body", h.r1);
            l = 0;
            a = 0;
            for (let e = h.r1; e <= h.r2; e++) {
              a += t.rowSize("body", e);
            }
            for (let e = h.c1; e <= h.c2; e++) {
              l += t.columnSize("body", e);
            }
            o = t.dataModel.data("body", h.r1, h.c1);
          } else {
            r = t.headerWidth - t.scrollX + t.columnOffset("body", s);
            n = t.headerHeight - t.scrollY + t.rowOffset("body", i);
            l = t.columnSize("body", s);
            a = t.rowSize("body", i);
            o = t.dataModel.data("body", i, s);
          }
          return { grid: t, row: i, column: s, data: o, x: r, y: n, width: l, height: a };
        }
        updatePosition() {
          const e = this.cell.grid;
          const t = this.getCellInfo(this.cell);
          const i = e.headerHeight;
          const s = e.headerWidth;
          this.viewportOccluder.style.top = i + "px";
          this.viewportOccluder.style.left = s + "px";
          this.viewportOccluder.style.width = e.viewportWidth - s + "px";
          this.viewportOccluder.style.height = e.viewportHeight - i + "px";
          this.viewportOccluder.style.position = "absolute";
          this.editorContainer.style.left = t.x - 1 - s + "px";
          this.editorContainer.style.top = t.y - 1 - i + "px";
          this.editorContainer.style.width = t.width + 1 + "px";
          this.editorContainer.style.height = t.height + 1 + "px";
          this.editorContainer.style.visibility = "visible";
          this.editorContainer.style.position = "absolute";
        }
        commit(e = "none") {
          this.validate();
          if (!this._validInput) {
            return false;
          }
          let t;
          try {
            t = this.getInput();
          } catch (i) {
            console.log(`Input error: ${i.message}`);
            return false;
          }
          this.dispose();
          if (this.onCommit) {
            this.onCommit({ cell: this.cell, value: t, cursorMovement: e });
          }
          return true;
        }
        _addContainer() {
          this.viewportOccluder = document.createElement("div");
          this.viewportOccluder.className = "lm-DataGrid-cellEditorOccluder";
          this.cell.grid.node.appendChild(this.viewportOccluder);
          this.editorContainer = document.createElement("div");
          this.editorContainer.className = "lm-DataGrid-cellEditorContainer";
          this.viewportOccluder.appendChild(this.editorContainer);
          this.editorContainer.addEventListener("mouseleave", (e) => {
            this.viewportOccluder.style.pointerEvents = this._validInput ? "none" : "auto";
          });
          this.editorContainer.addEventListener("mouseenter", (e) => {
            this.viewportOccluder.style.pointerEvents = "none";
          });
        }
        _closeValidityNotification() {
          if (this.validityNotification) {
            this.validityNotification.close();
            this.validityNotification = null;
          }
        }
      }
      class G extends D {
        handleEvent(e) {
          switch (e.type) {
            case "keydown":
              this._onKeyDown(e);
              break;
            case "blur":
              this._onBlur(e);
              break;
            case "input":
              this._onInput(e);
              break;
          }
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this._unbindEvents();
          super.dispose();
        }
        startEditing() {
          this.createWidget();
          const e = this.cell;
          const t = this.getCellInfo(e);
          this.input.value = this.deserialize(t.data);
          this.editorContainer.appendChild(this.input);
          this.input.focus();
          this.input.select();
          this.bindEvents();
        }
        deserialize(e) {
          if (e === null || e === undefined) {
            return "";
          }
          return e.toString();
        }
        createWidget() {
          const e = document.createElement("input");
          e.classList.add("lm-DataGrid-cellEditorWidget");
          e.classList.add("lm-DataGrid-cellEditorInput");
          e.spellcheck = false;
          e.type = this.inputType;
          this.input = e;
        }
        bindEvents() {
          this.input.addEventListener("keydown", this);
          this.input.addEventListener("blur", this);
          this.input.addEventListener("input", this);
        }
        _unbindEvents() {
          this.input.removeEventListener("keydown", this);
          this.input.removeEventListener("blur", this);
          this.input.removeEventListener("input", this);
        }
        _onKeyDown(e) {
          switch ((0, r.getKeyboardLayout)().keyForKeydownEvent(e)) {
            case "Enter":
              this.commit(e.shiftKey ? "up" : "down");
              break;
            case "Tab":
              this.commit(e.shiftKey ? "left" : "right");
              e.stopPropagation();
              e.preventDefault();
              break;
            case "Escape":
              this.cancel();
              break;
          }
        }
        _onBlur(e) {
          if (this.isDisposed) {
            return;
          }
          if (!this.commit()) {
            e.preventDefault();
            e.stopPropagation();
            this.input.focus();
          }
        }
        _onInput(e) {
          this.inputChanged.emit(void 0);
        }
      }
      class I extends G {
        constructor() {
          super(...arguments);
          this.inputType = "text";
        }
        getInput() {
          return this.input.value;
        }
      }
      class A extends G {
        constructor() {
          super(...arguments);
          this.inputType = "number";
        }
        startEditing() {
          super.startEditing();
          this.input.step = "any";
          const e = this.cell;
          const t = e.grid.dataModel.metadata("body", e.row, e.column);
          const i = t.constraint;
          if (i) {
            if (i.minimum) {
              this.input.min = i.minimum;
            }
            if (i.maximum) {
              this.input.max = i.maximum;
            }
          }
        }
        getInput() {
          let e = this.input.value;
          if (e.trim() === "") {
            return null;
          }
          const t = parseFloat(e);
          if (isNaN(t)) {
            throw new Error("Invalid input");
          }
          return t;
        }
      }
      class P extends G {
        constructor() {
          super(...arguments);
          this.inputType = "number";
        }
        startEditing() {
          super.startEditing();
          this.input.step = "1";
          const e = this.cell;
          const t = e.grid.dataModel.metadata("body", e.row, e.column);
          const i = t.constraint;
          if (i) {
            if (i.minimum) {
              this.input.min = i.minimum;
            }
            if (i.maximum) {
              this.input.max = i.maximum;
            }
          }
        }
        getInput() {
          let e = this.input.value;
          if (e.trim() === "") {
            return null;
          }
          let t = parseInt(e);
          if (isNaN(t)) {
            throw new Error("Invalid input");
          }
          return t;
        }
      }
      class X extends D {
        handleEvent(e) {
          switch (e.type) {
            case "keydown":
              this._onKeyDown(e);
              break;
            case "blur":
              this._onBlur(e);
              break;
          }
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this._unbindEvents();
          super.dispose();
        }
        startEditing() {
          this._createWidget();
          const e = this.cell;
          const t = this.getCellInfo(e);
          this._input.value = this._deserialize(t.data);
          this.editorContainer.appendChild(this._input);
          this._input.focus();
          this._bindEvents();
        }
        getInput() {
          return this._input.value;
        }
        _deserialize(e) {
          if (e === null || e === undefined) {
            return "";
          }
          return e.toString();
        }
        _createWidget() {
          const e = document.createElement("input");
          e.type = "date";
          e.pattern = "d{4}-d{2}-d{2}";
          e.classList.add("lm-DataGrid-cellEditorWidget");
          e.classList.add("lm-DataGrid-cellEditorInput");
          this._input = e;
        }
        _bindEvents() {
          this._input.addEventListener("keydown", this);
          this._input.addEventListener("blur", this);
        }
        _unbindEvents() {
          this._input.removeEventListener("keydown", this);
          this._input.removeEventListener("blur", this);
        }
        _onKeyDown(e) {
          switch ((0, r.getKeyboardLayout)().keyForKeydownEvent(e)) {
            case "Enter":
              this.commit(e.shiftKey ? "up" : "down");
              break;
            case "Tab":
              this.commit(e.shiftKey ? "left" : "right");
              e.stopPropagation();
              e.preventDefault();
              break;
            case "Escape":
              this.cancel();
              break;
          }
        }
        _onBlur(e) {
          if (this.isDisposed) {
            return;
          }
          if (!this.commit()) {
            e.preventDefault();
            e.stopPropagation();
            this._input.focus();
          }
        }
      }
      class V extends D {
        handleEvent(e) {
          switch (e.type) {
            case "keydown":
              this._onKeyDown(e);
              break;
            case "mousedown":
              this._input.focus();
              e.stopPropagation();
              e.preventDefault();
              break;
            case "blur":
              this._onBlur(e);
              break;
          }
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this._unbindEvents();
          super.dispose();
        }
        startEditing() {
          this._createWidget();
          const e = this.cell;
          const t = this.getCellInfo(e);
          this._input.checked = this._deserialize(t.data);
          this.editorContainer.appendChild(this._input);
          this._input.focus();
          this._bindEvents();
        }
        getInput() {
          return this._input.checked;
        }
        _deserialize(e) {
          if (e === null || e === undefined) {
            return false;
          }
          return e == true;
        }
        _createWidget() {
          const e = document.createElement("input");
          e.classList.add("lm-DataGrid-cellEditorWidget");
          e.classList.add("lm-DataGrid-cellEditorCheckbox");
          e.type = "checkbox";
          e.spellcheck = false;
          this._input = e;
        }
        _bindEvents() {
          this._input.addEventListener("keydown", this);
          this._input.addEventListener("mousedown", this);
          this._input.addEventListener("blur", this);
        }
        _unbindEvents() {
          this._input.removeEventListener("keydown", this);
          this._input.removeEventListener("mousedown", this);
          this._input.removeEventListener("blur", this);
        }
        _onKeyDown(e) {
          switch ((0, r.getKeyboardLayout)().keyForKeydownEvent(e)) {
            case "Enter":
              this.commit(e.shiftKey ? "up" : "down");
              break;
            case "Tab":
              this.commit(e.shiftKey ? "left" : "right");
              e.stopPropagation();
              e.preventDefault();
              break;
            case "Escape":
              this.cancel();
              break;
          }
        }
        _onBlur(e) {
          if (this.isDisposed) {
            return;
          }
          if (!this.commit()) {
            e.preventDefault();
            e.stopPropagation();
            this._input.focus();
          }
        }
      }
      class N extends D {
        constructor() {
          super(...arguments);
          this._isMultiSelect = false;
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          super.dispose();
          if (this._isMultiSelect) {
            document.body.removeChild(this._select);
          }
        }
        startEditing() {
          const e = this.cell;
          const t = this.getCellInfo(e);
          const i = e.grid.dataModel.metadata("body", e.row, e.column);
          this._isMultiSelect = i.type === "array";
          this._createWidget();
          if (this._isMultiSelect) {
            this._select.multiple = true;
            const e = this._deserialize(t.data);
            for (let t = 0; t < this._select.options.length; ++t) {
              const i = this._select.options.item(t);
              i.selected = e.indexOf(i.value) !== -1;
            }
            document.body.appendChild(this._select);
          } else {
            this._select.value = this._deserialize(t.data);
            this.editorContainer.appendChild(this._select);
          }
          this._select.focus();
          this._bindEvents();
          this.updatePosition();
        }
        getInput() {
          if (this._isMultiSelect) {
            const e = [];
            for (let t = 0; t < this._select.selectedOptions.length; ++t) {
              e.push(this._select.selectedOptions.item(t).value);
            }
            return e;
          } else {
            return this._select.value;
          }
        }
        updatePosition() {
          super.updatePosition();
          if (!this._isMultiSelect) {
            return;
          }
          const e = this.getCellInfo(this.cell);
          this._select.style.position = "absolute";
          const t = this.editorContainer.getBoundingClientRect();
          this._select.style.left = t.left + "px";
          this._select.style.top = t.top + e.height + "px";
          this._select.style.width = t.width + "px";
          this._select.style.maxHeight = "60px";
          this.editorContainer.style.visibility = "hidden";
        }
        _deserialize(e) {
          if (e === null || e === undefined) {
            return "";
          }
          if (this._isMultiSelect) {
            const t = [];
            if (Array.isArray(e)) {
              for (let i of e) {
                t.push(i.toString());
              }
            }
            return t;
          } else {
            return e.toString();
          }
        }
        _createWidget() {
          const e = this.cell;
          const t = e.grid.dataModel.metadata("body", e.row, e.column);
          const i = t.constraint.enum;
          const s = document.createElement("select");
          s.classList.add("lm-DataGrid-cellEditorWidget");
          for (let o of i) {
            const e = document.createElement("option");
            e.value = o;
            e.text = o;
            s.appendChild(e);
          }
          this._select = s;
        }
        _bindEvents() {
          this._select.addEventListener("keydown", this._onKeyDown.bind(this));
          this._select.addEventListener("blur", this._onBlur.bind(this));
        }
        _onKeyDown(e) {
          switch ((0, r.getKeyboardLayout)().keyForKeydownEvent(e)) {
            case "Enter":
              this.commit(e.shiftKey ? "up" : "down");
              break;
            case "Tab":
              this.commit(e.shiftKey ? "left" : "right");
              e.stopPropagation();
              e.preventDefault();
              break;
            case "Escape":
              this.cancel();
              break;
          }
        }
        _onBlur(e) {
          if (this.isDisposed) {
            return;
          }
          if (!this.commit()) {
            e.preventDefault();
            e.stopPropagation();
            this._select.focus();
          }
        }
      }
      class Y extends D {
        handleEvent(e) {
          switch (e.type) {
            case "keydown":
              this._onKeyDown(e);
              break;
            case "blur":
              this._onBlur(e);
              break;
          }
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this._unbindEvents();
          super.dispose();
        }
        startEditing() {
          this._createWidget();
          const e = this.cell;
          const t = this.getCellInfo(e);
          this._input.value = this._deserialize(t.data);
          this.editorContainer.appendChild(this._input);
          this._input.focus();
          this._input.select();
          this._bindEvents();
        }
        getInput() {
          return this._input.value;
        }
        _deserialize(e) {
          if (e === null || e === undefined) {
            return "";
          }
          return e.toString();
        }
        _createWidget() {
          const e = this.cell;
          const t = e.grid;
          const i = t.dataModel;
          const s = i.rowCount("body");
          const o = "cell-editor-list";
          const r = document.createElement("datalist");
          r.id = o;
          const n = document.createElement("input");
          n.classList.add("lm-DataGrid-cellEditorWidget");
          n.classList.add("lm-DataGrid-cellEditorInput");
          const l = new Set();
          for (let a = 0; a < s; ++a) {
            const t = i.data("body", a, e.column);
            if (t) {
              l.add(t);
            }
          }
          l.forEach((e) => {
            const t = document.createElement("option");
            t.value = e;
            t.text = e;
            r.appendChild(t);
          });
          this.editorContainer.appendChild(r);
          n.setAttribute("list", o);
          this._input = n;
        }
        _bindEvents() {
          this._input.addEventListener("keydown", this);
          this._input.addEventListener("blur", this);
        }
        _unbindEvents() {
          this._input.removeEventListener("keydown", this);
          this._input.removeEventListener("blur", this);
        }
        _onKeyDown(e) {
          switch ((0, r.getKeyboardLayout)().keyForKeydownEvent(e)) {
            case "Enter":
              this.commit(e.shiftKey ? "up" : "down");
              break;
            case "Tab":
              this.commit(e.shiftKey ? "left" : "right");
              e.stopPropagation();
              e.preventDefault();
              break;
            case "Escape":
              this.cancel();
              break;
          }
        }
        _onBlur(e) {
          if (this.isDisposed) {
            return;
          }
          if (!this.commit()) {
            e.preventDefault();
            e.stopPropagation();
            this._input.focus();
          }
        }
      }
      (function (e) {
        class t extends f.Widget {
          constructor(e) {
            super({ node: t.createNode() });
            this._message = "";
            this.addClass("lm-DataGrid-notification");
            this.setFlag(f.Widget.Flag.DisallowLayout);
            this._target = e.target;
            this._message = e.message || "";
            this._placement = e.placement || "bottom";
            f.Widget.attach(this, document.body);
            if (e.timeout && e.timeout > 0) {
              setTimeout(() => {
                this.close();
              }, e.timeout);
            }
          }
          handleEvent(e) {
            switch (e.type) {
              case "mousedown":
                this._evtMouseDown(e);
                break;
              case "contextmenu":
                e.preventDefault();
                e.stopPropagation();
                break;
            }
          }
          get placement() {
            return this._placement;
          }
          set placement(e) {
            if (this._placement === e) {
              return;
            }
            this._placement = e;
            this.update();
          }
          get message() {
            return this._message;
          }
          set message(e) {
            if (this._message === e) {
              return;
            }
            this._message = e;
            this.update();
          }
          get messageNode() {
            return this.node.getElementsByClassName("lm-DataGrid-notificationMessage")[0];
          }
          onBeforeAttach(e) {
            this.node.addEventListener("mousedown", this);
            this.update();
          }
          onAfterDetach(e) {
            this.node.removeEventListener("mousedown", this);
          }
          onUpdateRequest(e) {
            const t = this._target.getBoundingClientRect();
            const i = this.node.style;
            switch (this._placement) {
              case "bottom":
                i.left = t.left + "px";
                i.top = t.bottom + "px";
                break;
              case "top":
                i.left = t.left + "px";
                i.height = t.top + "px";
                i.top = "0";
                i.alignItems = "flex-end";
                i.justifyContent = "flex-end";
                break;
              case "left":
                i.left = "0";
                i.width = t.left + "px";
                i.top = t.top + "px";
                i.alignItems = "flex-end";
                i.justifyContent = "flex-end";
                break;
              case "right":
                i.left = t.right + "px";
                i.top = t.top + "px";
                break;
            }
            this.messageNode.innerHTML = this._message;
          }
          _evtMouseDown(e) {
            if (e.button !== 0) {
              return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.close();
          }
        }
        e.Notification = t;
        (function (e) {
          function t() {
            const e = document.createElement("div");
            const t = document.createElement("div");
            t.className = "lm-DataGrid-notificationContainer";
            const i = document.createElement("span");
            i.className = "lm-DataGrid-notificationMessage";
            t.appendChild(i);
            e.appendChild(t);
            return e;
          }
          e.createNode = t;
        })((t = e.Notification || (e.Notification = {})));
      })(D || (D = {}));
      function F(e, t) {
        return typeof e === "function" ? e(t) : e;
      }
      class K {
        constructor() {
          this._editor = null;
          this._cell = null;
          this._typeBasedOverrides = new Map();
          this._metadataBasedOverrides = new Map();
        }
        setEditor(e, t) {
          if (typeof e === "string") {
            this._typeBasedOverrides.set(e, t);
          } else {
            const i = this._metadataIdentifierToKey(e);
            this._metadataBasedOverrides.set(i, [e, t]);
          }
        }
        edit(e, t) {
          const i = e.grid;
          if (!i.editable) {
            console.error("Grid cannot be edited!");
            return false;
          }
          this.cancel();
          this._cell = e;
          t = t || {};
          t.onCommit = t.onCommit || this._onCommit.bind(this);
          t.onCancel = t.onCancel || this._onCancel.bind(this);
          if (t.editor) {
            this._editor = t.editor;
            t.editor.edit(e, t);
            return true;
          }
          const s = this._getEditor(e);
          if (s) {
            this._editor = s;
            s.edit(e, t);
            return true;
          }
          return false;
        }
        cancel() {
          if (this._editor) {
            this._editor.cancel();
            this._editor = null;
          }
          this._cell = null;
        }
        _onCommit(e) {
          const t = this._cell;
          if (!t) {
            return;
          }
          const i = t.grid;
          const s = i.dataModel;
          let o = t.row;
          let r = t.column;
          const n = S.getGroup(i.dataModel, "body", o, r);
          if (n) {
            o = n.r1;
            r = n.c1;
          }
          s.setData("body", o, r, e.value);
          i.viewport.node.focus();
          if (e.cursorMovement !== "none") {
            i.moveCursor(e.cursorMovement);
            i.scrollToCursor();
          }
        }
        _onCancel() {
          if (!this._cell) {
            return;
          }
          this._cell.grid.viewport.node.focus();
        }
        _getDataTypeKey(e) {
          const t = e.grid.dataModel ? e.grid.dataModel.metadata("body", e.row, e.column) : null;
          if (!t) {
            return "default";
          }
          let i = "";
          if (t) {
            i = t.type;
          }
          if (t.constraint && t.constraint.enum) {
            if (t.constraint.enum === "dynamic") {
              i += ":dynamic-option";
            } else {
              i += ":option";
            }
          }
          return i;
        }
        _objectToKey(e) {
          let t = "";
          for (let i in e) {
            const s = e[i];
            if (typeof s === "object") {
              t += `${i}:${this._objectToKey(s)}`;
            } else {
              t += `[${i}:${s}]`;
            }
          }
          return t;
        }
        _metadataIdentifierToKey(e) {
          return this._objectToKey(e);
        }
        _metadataMatchesIdentifier(e, t) {
          for (let i in t) {
            if (!e.hasOwnProperty(i)) {
              return false;
            }
            const s = t[i];
            const o = e[i];
            if (typeof s === "object") {
              if (!this._metadataMatchesIdentifier(o, s)) {
                return false;
              }
            } else if (o !== s) {
              return false;
            }
          }
          return true;
        }
        _getMetadataBasedEditor(e) {
          let t;
          const i = e.grid.dataModel.metadata("body", e.row, e.column);
          if (i) {
            this._metadataBasedOverrides.forEach((s) => {
              if (!t) {
                let [o, r] = s;
                if (this._metadataMatchesIdentifier(i, o)) {
                  t = F(r, e);
                }
              }
            });
          }
          return t;
        }
        _getEditor(e) {
          const t = this._getDataTypeKey(e);
          if (this._typeBasedOverrides.has(t)) {
            const i = this._typeBasedOverrides.get(t);
            return F(i, e);
          } else if (this._metadataBasedOverrides.size > 0) {
            const t = this._getMetadataBasedEditor(e);
            if (t) {
              return t;
            }
          }
          switch (t) {
            case "string":
              return new I();
            case "number":
              return new A();
            case "integer":
              return new P();
            case "boolean":
              return new V();
            case "date":
              return new X();
            case "string:option":
            case "number:option":
            case "integer:option":
            case "date:option":
            case "array:option":
              return new N();
            case "string:dynamic-option":
            case "number:dynamic-option":
            case "integer:dynamic-option":
            case "date:dynamic-option":
              return new Y();
          }
          if (this._typeBasedOverrides.has("default")) {
            const t = this._typeBasedOverrides.get("default");
            return F(t, e);
          }
          const i = e.grid.dataModel.data("body", e.row, e.column);
          if (!i || typeof i !== "object") {
            return new I();
          }
          return undefined;
        }
      }
      class q {
        constructor() {
          this._changed = new d.Signal(this);
        }
        get changed() {
          return this._changed;
        }
        groupCount(e) {
          return 0;
        }
        metadata(e, t, i) {
          return q.emptyMetadata;
        }
        group(e, t) {
          return null;
        }
        emitChanged(e) {
          this._changed.emit(e);
        }
      }
      class j extends q {}
      (function (e) {
        e.emptyMetadata = Object.freeze({});
      })(q || (q = {}));
      class $ {
        constructor(e) {
          this._disposed = false;
          this._context = e;
          this._state = U.State.create(e);
        }
        dispose() {
          if (this._disposed) {
            return;
          }
          this._disposed = true;
          while (this._state.next) {
            this._state = this._state.next;
            this._context.restore();
          }
        }
        get isDisposed() {
          return this._disposed;
        }
        get fillStyle() {
          return this._context.fillStyle;
        }
        set fillStyle(e) {
          if (this._state.fillStyle !== e) {
            this._state.fillStyle = e;
            this._context.fillStyle = e;
          }
        }
        get strokeStyle() {
          return this._context.strokeStyle;
        }
        set strokeStyle(e) {
          if (this._state.strokeStyle !== e) {
            this._state.strokeStyle = e;
            this._context.strokeStyle = e;
          }
        }
        get font() {
          return this._context.font;
        }
        set font(e) {
          if (this._state.font !== e) {
            this._state.font = e;
            this._context.font = e;
          }
        }
        get textAlign() {
          return this._context.textAlign;
        }
        set textAlign(e) {
          if (this._state.textAlign !== e) {
            this._state.textAlign = e;
            this._context.textAlign = e;
          }
        }
        get textBaseline() {
          return this._context.textBaseline;
        }
        set textBaseline(e) {
          if (this._state.textBaseline !== e) {
            this._state.textBaseline = e;
            this._context.textBaseline = e;
          }
        }
        get lineCap() {
          return this._context.lineCap;
        }
        set lineCap(e) {
          if (this._state.lineCap !== e) {
            this._state.lineCap = e;
            this._context.lineCap = e;
          }
        }
        get lineDashOffset() {
          return this._context.lineDashOffset;
        }
        set lineDashOffset(e) {
          if (this._state.lineDashOffset !== e) {
            this._state.lineDashOffset = e;
            this._context.lineDashOffset = e;
          }
        }
        get lineJoin() {
          return this._context.lineJoin;
        }
        set lineJoin(e) {
          if (this._state.lineJoin !== e) {
            this._state.lineJoin = e;
            this._context.lineJoin = e;
          }
        }
        get lineWidth() {
          return this._context.lineWidth;
        }
        set lineWidth(e) {
          if (this._state.lineWidth !== e) {
            this._state.lineWidth = e;
            this._context.lineWidth = e;
          }
        }
        get miterLimit() {
          return this._context.miterLimit;
        }
        set miterLimit(e) {
          if (this._state.miterLimit !== e) {
            this._state.miterLimit = e;
            this._context.miterLimit = e;
          }
        }
        get shadowBlur() {
          return this._context.shadowBlur;
        }
        set shadowBlur(e) {
          if (this._state.shadowBlur !== e) {
            this._state.shadowBlur = e;
            this._context.shadowBlur = e;
          }
        }
        get shadowColor() {
          return this._context.shadowColor;
        }
        set shadowColor(e) {
          if (this._state.shadowColor !== e) {
            this._state.shadowColor = e;
            this._context.shadowColor = e;
          }
        }
        get shadowOffsetX() {
          return this._context.shadowOffsetX;
        }
        set shadowOffsetX(e) {
          if (this._state.shadowOffsetX !== e) {
            this._state.shadowOffsetX = e;
            this._context.shadowOffsetX = e;
          }
        }
        get shadowOffsetY() {
          return this._context.shadowOffsetY;
        }
        set shadowOffsetY(e) {
          if (this._state.shadowOffsetY !== e) {
            this._state.shadowOffsetY = e;
            this._context.shadowOffsetY = e;
          }
        }
        get imageSmoothingEnabled() {
          return this._context.imageSmoothingEnabled;
        }
        set imageSmoothingEnabled(e) {
          if (this._state.imageSmoothingEnabled !== e) {
            this._state.imageSmoothingEnabled = e;
            this._context.imageSmoothingEnabled = e;
          }
        }
        get globalAlpha() {
          return this._context.globalAlpha;
        }
        set globalAlpha(e) {
          if (this._state.globalAlpha !== e) {
            this._state.globalAlpha = e;
            this._context.globalAlpha = e;
          }
        }
        get globalCompositeOperation() {
          return this._context.globalCompositeOperation;
        }
        set globalCompositeOperation(e) {
          if (this._state.globalCompositeOperation !== e) {
            this._state.globalCompositeOperation = e;
            this._context.globalCompositeOperation = e;
          }
        }
        getLineDash() {
          return this._context.getLineDash();
        }
        setLineDash(e) {
          this._context.setLineDash(e);
        }
        rotate(e) {
          this._context.rotate(e);
        }
        scale(e, t) {
          this._context.scale(e, t);
        }
        transform(e, t, i, s, o, r) {
          this._context.transform(e, t, i, s, o, r);
        }
        translate(e, t) {
          this._context.translate(e, t);
        }
        setTransform(e, t, i, s, o, r) {
          this._context.setTransform(e, t, i, s, o, r);
        }
        save() {
          this._state = U.State.push(this._state);
          this._context.save();
        }
        restore() {
          if (!this._state.next) {
            return;
          }
          this._state = U.State.pop(this._state);
          this._context.restore();
        }
        beginPath() {
          return this._context.beginPath();
        }
        closePath() {
          this._context.closePath();
        }
        isPointInPath(e, t, i) {
          let s;
          if (arguments.length === 2) {
            s = this._context.isPointInPath(e, t);
          } else {
            s = this._context.isPointInPath(e, t, i);
          }
          return s;
        }
        arc(e, t, i, s, o, r) {
          if (arguments.length === 5) {
            this._context.arc(e, t, i, s, o);
          } else {
            this._context.arc(e, t, i, s, o, r);
          }
        }
        arcTo(e, t, i, s, o) {
          this._context.arcTo(e, t, i, s, o);
        }
        bezierCurveTo(e, t, i, s, o, r) {
          this._context.bezierCurveTo(e, t, i, s, o, r);
        }
        ellipse(e, t, i, s, o, r, n, l) {
          if (arguments.length === 7) {
            this._context.ellipse(e, t, i, s, o, r, n);
          } else {
            this._context.ellipse(e, t, i, s, o, r, n, l);
          }
        }
        lineTo(e, t) {
          this._context.lineTo(e, t);
        }
        moveTo(e, t) {
          this._context.moveTo(e, t);
        }
        quadraticCurveTo(e, t, i, s) {
          this._context.quadraticCurveTo(e, t, i, s);
        }
        rect(e, t, i, s) {
          this._context.rect(e, t, i, s);
        }
        clip(e) {
          if (arguments.length === 0) {
            this._context.clip();
          } else {
            this._context.clip(e);
          }
        }
        fill(e) {
          if (arguments.length === 0) {
            this._context.fill();
          } else {
            this._context.fill(e);
          }
        }
        stroke() {
          this._context.stroke();
        }
        clearRect(e, t, i, s) {
          return this._context.clearRect(e, t, i, s);
        }
        fillRect(e, t, i, s) {
          this._context.fillRect(e, t, i, s);
        }
        fillText(e, t, i, s) {
          if (arguments.length === 3) {
            this._context.fillText(e, t, i);
          } else {
            this._context.fillText(e, t, i, s);
          }
        }
        strokeRect(e, t, i, s) {
          this._context.strokeRect(e, t, i, s);
        }
        strokeText(e, t, i, s) {
          if (arguments.length === 3) {
            this._context.strokeText(e, t, i);
          } else {
            this._context.strokeText(e, t, i, s);
          }
        }
        measureText(e) {
          return this._context.measureText(e);
        }
        createLinearGradient(e, t, i, s) {
          return this._context.createLinearGradient(e, t, i, s);
        }
        createRadialGradient(e, t, i, s, o, r) {
          return this._context.createRadialGradient(e, t, i, s, o, r);
        }
        createPattern(e, t) {
          return this._context.createPattern(e, t);
        }
        createImageData() {
          return this._context.createImageData.apply(this._context, arguments);
        }
        getImageData(e, t, i, s) {
          return this._context.getImageData(e, t, i, s);
        }
        putImageData() {
          this._context.putImageData.apply(this._context, arguments);
        }
        drawImage() {
          this._context.drawImage.apply(this._context, arguments);
        }
        drawFocusIfNeeded(e) {
          this._context.drawFocusIfNeeded(e);
        }
      }
      var U;
      (function (e) {
        let t = -1;
        const i = [];
        class s {
          static create(e) {
            let o = t < 0 ? new s() : i[t--];
            o.next = null;
            o.fillStyle = e.fillStyle;
            o.font = e.font;
            o.globalAlpha = e.globalAlpha;
            o.globalCompositeOperation = e.globalCompositeOperation;
            o.imageSmoothingEnabled = e.imageSmoothingEnabled;
            o.lineCap = e.lineCap;
            o.lineDashOffset = e.lineDashOffset;
            o.lineJoin = e.lineJoin;
            o.lineWidth = e.lineWidth;
            o.miterLimit = e.miterLimit;
            o.shadowBlur = e.shadowBlur;
            o.shadowColor = e.shadowColor;
            o.shadowOffsetX = e.shadowOffsetX;
            o.shadowOffsetY = e.shadowOffsetY;
            o.strokeStyle = e.strokeStyle;
            o.textAlign = e.textAlign;
            o.textBaseline = e.textBaseline;
            return o;
          }
          static push(e) {
            let o = t < 0 ? new s() : i[t--];
            o.next = e;
            o.fillStyle = e.fillStyle;
            o.font = e.font;
            o.globalAlpha = e.globalAlpha;
            o.globalCompositeOperation = e.globalCompositeOperation;
            o.imageSmoothingEnabled = e.imageSmoothingEnabled;
            o.lineCap = e.lineCap;
            o.lineDashOffset = e.lineDashOffset;
            o.lineJoin = e.lineJoin;
            o.lineWidth = e.lineWidth;
            o.miterLimit = e.miterLimit;
            o.shadowBlur = e.shadowBlur;
            o.shadowColor = e.shadowColor;
            o.shadowOffsetX = e.shadowOffsetX;
            o.shadowOffsetY = e.shadowOffsetY;
            o.strokeStyle = e.strokeStyle;
            o.textAlign = e.textAlign;
            o.textBaseline = e.textBaseline;
            return o;
          }
          static pop(e) {
            e.fillStyle = "";
            e.strokeStyle = "";
            i[++t] = e;
            return e.next;
          }
        }
        e.State = s;
      })(U || (U = {}));
      class J {
        constructor(e = {}, t) {
          this._changed = new d.Signal(this);
          this._values = { ...e };
          this._fallback = t || new v();
        }
        get changed() {
          return this._changed;
        }
        get(e) {
          let t = this._values[e.region];
          if (typeof t === "function") {
            try {
              t = t(e);
            } catch (i) {
              t = undefined;
              console.error(i);
            }
          }
          return t || this._fallback;
        }
        update(e = {}, t) {
          this._values = { ...this._values, ...e };
          this._fallback = t || this._fallback;
          this._changed.emit(undefined);
        }
      }
      class Z {
        constructor(e) {
          this._count = 0;
          this._length = 0;
          this._sections = [];
          this._minimumSize = e.minimumSize || 2;
          this._defaultSize = Math.max(this._minimumSize, Math.floor(e.defaultSize));
        }
        get length() {
          return this._length;
        }
        get count() {
          return this._count;
        }
        get minimumSize() {
          return this._minimumSize;
        }
        set minimumSize(e) {
          e = Math.max(2, Math.floor(e));
          if (this._minimumSize === e) {
            return;
          }
          this._minimumSize = e;
          if (e > this._defaultSize) {
            this.defaultSize = e;
          }
        }
        get defaultSize() {
          return this._defaultSize;
        }
        set defaultSize(e) {
          e = Math.max(this._minimumSize, Math.floor(e));
          if (this._defaultSize === e) {
            return;
          }
          let t = e - this._defaultSize;
          this._defaultSize = e;
          this._length += t * (this._count - this._sections.length);
          if (this._sections.length === 0) {
            return;
          }
          for (let i = 0, s = this._sections.length; i < s; ++i) {
            let t = this._sections[i - 1];
            let s = this._sections[i];
            if (t) {
              let i = s.index - t.index - 1;
              s.offset = t.offset + t.size + i * e;
            } else {
              s.offset = s.index * e;
            }
          }
        }
        clampSize(e) {
          return Math.max(this._minimumSize, Math.floor(e));
        }
        indexOf(e) {
          if (e < 0 || e >= this._length || this._count === 0) {
            return -1;
          }
          if (this._sections.length === 0) {
            return Math.floor(e / this._defaultSize);
          }
          let t = h.ArrayExt.lowerBound(this._sections, e, Q.offsetCmp);
          if (t < this._sections.length && this._sections[t].offset <= e) {
            return this._sections[t].index;
          }
          if (t === 0) {
            return Math.floor(e / this._defaultSize);
          }
          let i = this._sections[t - 1];
          let s = e - (i.offset + i.size);
          return i.index + Math.floor(s / this._defaultSize) + 1;
        }
        offsetOf(e) {
          if (e < 0 || e >= this._count) {
            return -1;
          }
          if (this._sections.length === 0) {
            return e * this._defaultSize;
          }
          let t = h.ArrayExt.lowerBound(this._sections, e, Q.indexCmp);
          if (t < this._sections.length && this._sections[t].index === e) {
            return this._sections[t].offset;
          }
          if (t === 0) {
            return e * this._defaultSize;
          }
          let i = this._sections[t - 1];
          let s = e - i.index - 1;
          return i.offset + i.size + s * this._defaultSize;
        }
        extentOf(e) {
          if (e < 0 || e >= this._count) {
            return -1;
          }
          if (this._sections.length === 0) {
            return (e + 1) * this._defaultSize - 1;
          }
          let t = h.ArrayExt.lowerBound(this._sections, e, Q.indexCmp);
          if (t < this._sections.length && this._sections[t].index === e) {
            return this._sections[t].offset + this._sections[t].size - 1;
          }
          if (t === 0) {
            return (e + 1) * this._defaultSize - 1;
          }
          let i = this._sections[t - 1];
          let s = e - i.index;
          return i.offset + i.size + s * this._defaultSize - 1;
        }
        sizeOf(e) {
          if (e < 0 || e >= this._count) {
            return -1;
          }
          if (this._sections.length === 0) {
            return this._defaultSize;
          }
          let t = h.ArrayExt.lowerBound(this._sections, e, Q.indexCmp);
          if (t < this._sections.length && this._sections[t].index === e) {
            return this._sections[t].size;
          }
          return this._defaultSize;
        }
        resize(e, t) {
          if (e < 0 || e >= this._count) {
            return;
          }
          t = Math.max(this._minimumSize, Math.floor(t));
          let i = h.ArrayExt.lowerBound(this._sections, e, Q.indexCmp);
          let s;
          if (i < this._sections.length && this._sections[i].index === e) {
            let e = this._sections[i];
            s = t - e.size;
            e.size = t;
          } else if (i === 0) {
            let o = e * this._defaultSize;
            h.ArrayExt.insert(this._sections, i, { index: e, offset: o, size: t });
            s = t - this._defaultSize;
          } else {
            let o = this._sections[i - 1];
            let r = e - o.index - 1;
            let n = o.offset + o.size + r * this._defaultSize;
            h.ArrayExt.insert(this._sections, i, { index: e, offset: n, size: t });
            s = t - this._defaultSize;
          }
          this._length += s;
          for (let o = i + 1, r = this._sections.length; o < r; ++o) {
            this._sections[o].offset += s;
          }
        }
        insert(e, t) {
          if (t <= 0) {
            return;
          }
          e = Math.max(0, Math.min(e, this._count));
          let i = t * this._defaultSize;
          this._count += t;
          this._length += i;
          if (this._sections.length === 0) {
            return;
          }
          let s = h.ArrayExt.lowerBound(this._sections, e, Q.indexCmp);
          for (let o = this._sections.length; s < o; ++s) {
            let e = this._sections[s];
            e.index += t;
            e.offset += i;
          }
        }
        remove(e, t) {
          if (e < 0 || e >= this._count || t <= 0) {
            return;
          }
          t = Math.min(this._count - e, t);
          if (this._sections.length === 0) {
            this._count -= t;
            this._length -= t * this._defaultSize;
            return;
          }
          if (t === this._count) {
            this._length = 0;
            this._count = 0;
            this._sections.length = 0;
            return;
          }
          let i = h.ArrayExt.lowerBound(this._sections, e, Q.indexCmp);
          let s = h.ArrayExt.lowerBound(this._sections, e + t, Q.indexCmp);
          let o = this._sections.splice(i, s - i);
          let r = (t - o.length) * this._defaultSize;
          for (let n = 0, l = o.length; n < l; ++n) {
            r += o[n].size;
          }
          this._count -= t;
          this._length -= r;
          for (let n = i, l = this._sections.length; n < l; ++n) {
            let e = this._sections[n];
            e.index -= t;
            e.offset -= r;
          }
        }
        move(e, t, i) {
          if (e < 0 || e >= this._count || t <= 0) {
            return;
          }
          if (this._sections.length === 0) {
            return;
          }
          t = Math.min(t, this._count - e);
          i = Math.min(Math.max(0, i), this._count - t);
          if (e === i) {
            return;
          }
          let s = Math.min(e, i);
          let o = h.ArrayExt.lowerBound(this._sections, s, Q.indexCmp);
          if (o === this._sections.length) {
            return;
          }
          let r = Math.max(e + t - 1, i + t - 1);
          let n = h.ArrayExt.upperBound(this._sections, r, Q.indexCmp) - 1;
          if (n < o) {
            return;
          }
          let l = i < e ? e : e + t;
          let a = l - s;
          let c = r - l + 1;
          let d = a * this._defaultSize;
          let u = c * this._defaultSize;
          for (let h = o; h <= n; ++h) {
            let e = this._sections[h];
            if (e.index < l) {
              d += e.size - this._defaultSize;
            } else {
              u += e.size - this._defaultSize;
            }
          }
          let f = h.ArrayExt.lowerBound(this._sections, l, Q.indexCmp);
          if (o <= f && f <= n) {
            h.ArrayExt.rotate(this._sections, f - o, o, n);
          }
          for (let h = o; h <= n; ++h) {
            let e = this._sections[h];
            if (e.index < l) {
              e.index += c;
              e.offset += u;
            } else {
              e.index -= a;
              e.offset -= d;
            }
          }
        }
        reset() {
          this._sections.length = 0;
          this._length = this._count * this._defaultSize;
        }
        clear() {
          this._count = 0;
          this._length = 0;
          this._sections.length = 0;
        }
      }
      var Q;
      (function (e) {
        function t(e, t) {
          if (t < e.offset) {
            return 1;
          }
          if (e.offset + e.size <= t) {
            return -1;
          }
          return 0;
        }
        e.offsetCmp = t;
        function i(e, t) {
          return e.index - t;
        }
        e.indexCmp = i;
      })(Q || (Q = {}));
      class ee extends f.Widget {
        constructor(e = {}) {
          super();
          this._scrollX = 0;
          this._scrollY = 0;
          this._viewportWidth = 0;
          this._viewportHeight = 0;
          this._mousedown = false;
          this._keyHandler = null;
          this._mouseHandler = null;
          this._vScrollBarMinWidth = 0;
          this._hScrollBarMinHeight = 0;
          this._dpiRatio = Math.ceil(window.devicePixelRatio);
          this._dataModel = null;
          this._selectionModel = null;
          this._editingEnabled = false;
          this.addClass("lm-DataGrid");
          this._style = e.style || ee.defaultStyle;
          this._stretchLastRow = e.stretchLastRow || false;
          this._stretchLastColumn = e.stretchLastColumn || false;
          this._headerVisibility = e.headerVisibility || "all";
          this._cellRenderers = e.cellRenderers || new J();
          this._copyConfig = e.copyConfig || ee.defaultCopyConfig;
          this._cellRenderers.changed.connect(this._onRenderersChanged, this);
          let t = e.defaultSizes || ee.defaultSizes;
          let i = e.minimumSizes || ee.minimumSizes;
          this._rowSections = new Z({ defaultSize: t.rowHeight, minimumSize: i.rowHeight });
          this._columnSections = new Z({ defaultSize: t.columnWidth, minimumSize: i.columnWidth });
          this._rowHeaderSections = new Z({ defaultSize: t.rowHeaderWidth, minimumSize: i.rowHeaderWidth });
          this._columnHeaderSections = new Z({ defaultSize: t.columnHeaderHeight, minimumSize: i.columnHeaderHeight });
          this._canvas = te.createCanvas();
          this._buffer = te.createCanvas();
          this._overlay = te.createCanvas();
          this._canvasGC = this._canvas.getContext("2d");
          this._bufferGC = this._buffer.getContext("2d");
          this._overlayGC = this._overlay.getContext("2d");
          this._canvas.style.position = "absolute";
          this._canvas.style.top = "0px";
          this._canvas.style.left = "0px";
          this._canvas.style.width = "0px";
          this._canvas.style.height = "0px";
          this._overlay.style.position = "absolute";
          this._overlay.style.top = "0px";
          this._overlay.style.left = "0px";
          this._overlay.style.width = "0px";
          this._overlay.style.height = "0px";
          this._viewport = new f.Widget();
          this._viewport.node.tabIndex = -1;
          this._viewport.node.style.outline = "none";
          this._vScrollBar = new f.ScrollBar({ orientation: "vertical" });
          this._hScrollBar = new f.ScrollBar({ orientation: "horizontal" });
          this._scrollCorner = new f.Widget();
          this._editorController = new K();
          this._viewport.addClass("lm-DataGrid-viewport");
          this._vScrollBar.addClass("lm-DataGrid-scrollBar");
          this._hScrollBar.addClass("lm-DataGrid-scrollBar");
          this._scrollCorner.addClass("lm-DataGrid-scrollCorner");
          this._viewport.node.appendChild(this._canvas);
          this._viewport.node.appendChild(this._overlay);
          m.MessageLoop.installMessageHook(this._viewport, this);
          m.MessageLoop.installMessageHook(this._hScrollBar, this);
          m.MessageLoop.installMessageHook(this._vScrollBar, this);
          this._vScrollBar.hide();
          this._hScrollBar.hide();
          this._scrollCorner.hide();
          this._vScrollBar.thumbMoved.connect(this._onThumbMoved, this);
          this._hScrollBar.thumbMoved.connect(this._onThumbMoved, this);
          this._vScrollBar.pageRequested.connect(this._onPageRequested, this);
          this._hScrollBar.pageRequested.connect(this._onPageRequested, this);
          this._vScrollBar.stepRequested.connect(this._onStepRequested, this);
          this._hScrollBar.stepRequested.connect(this._onStepRequested, this);
          f.GridLayout.setCellConfig(this._viewport, { row: 0, column: 0 });
          f.GridLayout.setCellConfig(this._vScrollBar, { row: 0, column: 1 });
          f.GridLayout.setCellConfig(this._hScrollBar, { row: 1, column: 0 });
          f.GridLayout.setCellConfig(this._scrollCorner, { row: 1, column: 1 });
          let s = new f.GridLayout({ rowCount: 2, columnCount: 2, rowSpacing: 0, columnSpacing: 0, fitPolicy: "set-no-constraint" });
          s.setRowStretch(0, 1);
          s.setRowStretch(1, 0);
          s.setColumnStretch(0, 1);
          s.setColumnStretch(1, 0);
          s.addWidget(this._viewport);
          s.addWidget(this._vScrollBar);
          s.addWidget(this._hScrollBar);
          s.addWidget(this._scrollCorner);
          this.layout = s;
        }
        dispose() {
          this._releaseMouse();
          if (this._keyHandler) {
            this._keyHandler.dispose();
          }
          if (this._mouseHandler) {
            this._mouseHandler.dispose();
          }
          this._keyHandler = null;
          this._mouseHandler = null;
          this._dataModel = null;
          this._selectionModel = null;
          this._rowSections.clear();
          this._columnSections.clear();
          this._rowHeaderSections.clear();
          this._columnHeaderSections.clear();
          super.dispose();
        }
        get dataModel() {
          return this._dataModel;
        }
        set dataModel(e) {
          if (this._dataModel === e) {
            return;
          }
          this._releaseMouse();
          this.selectionModel = null;
          if (this._dataModel) {
            this._dataModel.changed.disconnect(this._onDataModelChanged, this);
          }
          if (e) {
            e.changed.connect(this._onDataModelChanged, this);
          }
          this._dataModel = e;
          this._rowSections.clear();
          this._columnSections.clear();
          this._rowHeaderSections.clear();
          this._columnHeaderSections.clear();
          if (e) {
            this._rowSections.insert(0, e.rowCount("body"));
            this._columnSections.insert(0, e.columnCount("body"));
            this._rowHeaderSections.insert(0, e.columnCount("row-header"));
            this._columnHeaderSections.insert(0, e.rowCount("column-header"));
          }
          this._scrollX = 0;
          this._scrollY = 0;
          this._syncViewport();
        }
        get selectionModel() {
          return this._selectionModel;
        }
        set selectionModel(e) {
          if (this._selectionModel === e) {
            return;
          }
          this._releaseMouse();
          if (e && e.dataModel !== this._dataModel) {
            throw new Error("SelectionModel.dataModel !== DataGrid.dataModel");
          }
          if (this._selectionModel) {
            this._selectionModel.changed.disconnect(this._onSelectionsChanged, this);
          }
          if (e) {
            e.changed.connect(this._onSelectionsChanged, this);
          }
          this._selectionModel = e;
          this.repaintOverlay();
        }
        get keyHandler() {
          return this._keyHandler;
        }
        set keyHandler(e) {
          this._keyHandler = e;
        }
        get mouseHandler() {
          return this._mouseHandler;
        }
        set mouseHandler(e) {
          if (this._mouseHandler === e) {
            return;
          }
          this._releaseMouse();
          this._mouseHandler = e;
        }
        get style() {
          return this._style;
        }
        set style(e) {
          if (this._style === e) {
            return;
          }
          this._style = { ...e };
          this.repaintContent();
          this.repaintOverlay();
        }
        get cellRenderers() {
          return this._cellRenderers;
        }
        set cellRenderers(e) {
          if (this._cellRenderers === e) {
            return;
          }
          this._cellRenderers.changed.disconnect(this._onRenderersChanged, this);
          e.changed.connect(this._onRenderersChanged, this);
          this._cellRenderers = e;
          this.repaintContent();
        }
        get headerVisibility() {
          return this._headerVisibility;
        }
        set headerVisibility(e) {
          if (this._headerVisibility === e) {
            return;
          }
          this._headerVisibility = e;
          this._syncViewport();
        }
        get defaultSizes() {
          let e = this._rowSections.defaultSize;
          let t = this._columnSections.defaultSize;
          let i = this._rowHeaderSections.defaultSize;
          let s = this._columnHeaderSections.defaultSize;
          return { rowHeight: e, columnWidth: t, rowHeaderWidth: i, columnHeaderHeight: s };
        }
        set defaultSizes(e) {
          this._rowSections.defaultSize = e.rowHeight;
          this._columnSections.defaultSize = e.columnWidth;
          this._rowHeaderSections.defaultSize = e.rowHeaderWidth;
          this._columnHeaderSections.defaultSize = e.columnHeaderHeight;
          this._syncViewport();
        }
        get minimumSizes() {
          let e = this._rowSections.minimumSize;
          let t = this._columnSections.minimumSize;
          let i = this._rowHeaderSections.minimumSize;
          let s = this._columnHeaderSections.minimumSize;
          return { rowHeight: e, columnWidth: t, rowHeaderWidth: i, columnHeaderHeight: s };
        }
        set minimumSizes(e) {
          this._rowSections.minimumSize = e.rowHeight;
          this._columnSections.minimumSize = e.columnWidth;
          this._rowHeaderSections.minimumSize = e.rowHeaderWidth;
          this._columnHeaderSections.minimumSize = e.columnHeaderHeight;
          this._syncViewport();
        }
        get copyConfig() {
          return this._copyConfig;
        }
        set copyConfig(e) {
          this._copyConfig = e;
        }
        get stretchLastRow() {
          return this._stretchLastRow;
        }
        set stretchLastRow(e) {
          if (e === this._stretchLastRow) {
            return;
          }
          this._stretchLastRow = e;
          this._syncViewport();
        }
        get stretchLastColumn() {
          return this._stretchLastColumn;
        }
        set stretchLastColumn(e) {
          if (e === this._stretchLastColumn) {
            return;
          }
          this._stretchLastColumn = e;
          this._syncViewport();
        }
        get headerWidth() {
          if (this._headerVisibility === "none") {
            return 0;
          }
          if (this._headerVisibility === "column") {
            return 0;
          }
          return this._rowHeaderSections.length;
        }
        get headerHeight() {
          if (this._headerVisibility === "none") {
            return 0;
          }
          if (this._headerVisibility === "row") {
            return 0;
          }
          return this._columnHeaderSections.length;
        }
        get bodyWidth() {
          return this._columnSections.length;
        }
        get bodyHeight() {
          return this._rowSections.length;
        }
        get totalWidth() {
          return this.headerWidth + this.bodyWidth;
        }
        get totalHeight() {
          return this.headerHeight + this.bodyHeight;
        }
        get viewportWidth() {
          return this._viewportWidth;
        }
        get viewportHeight() {
          return this._viewportHeight;
        }
        get pageWidth() {
          return Math.max(0, this.viewportWidth - this.headerWidth);
        }
        get pageHeight() {
          return Math.max(0, this.viewportHeight - this.headerHeight);
        }
        get scrollX() {
          return this._hScrollBar.value;
        }
        get scrollY() {
          return this._vScrollBar.value;
        }
        get maxScrollX() {
          return Math.max(0, this.bodyWidth - this.pageWidth - 1);
        }
        get maxScrollY() {
          return Math.max(0, this.bodyHeight - this.pageHeight - 1);
        }
        get viewport() {
          return this._viewport;
        }
        get editorController() {
          return this._editorController;
        }
        set editorController(e) {
          this._editorController = e;
        }
        get editingEnabled() {
          return this._editingEnabled;
        }
        set editingEnabled(e) {
          this._editingEnabled = e;
        }
        get editable() {
          return this._editingEnabled && this._selectionModel !== null && this._editorController !== null && this.dataModel instanceof j;
        }
        get canvasGC() {
          return this._canvasGC;
        }
        get rowSections() {
          return this._rowSections;
        }
        get columnSections() {
          return this._columnSections;
        }
        get rowHeaderSections() {
          return this._rowHeaderSections;
        }
        get columnHeaderSections() {
          return this._columnHeaderSections;
        }
        scrollToRow(e) {
          let t = this._rowSections.count;
          if (t === 0) {
            return;
          }
          e = Math.floor(e);
          e = Math.max(0, Math.min(e, t - 1));
          let i = this._rowSections.offsetOf(e);
          let s = this._rowSections.extentOf(e);
          let o = this._scrollY;
          let r = this._scrollY + this.pageHeight - 1;
          let n = 0;
          if (i < o) {
            n = i - o - 10;
          } else if (s > r) {
            n = s - r + 10;
          }
          if (n === 0) {
            return;
          }
          this.scrollBy(0, n);
        }
        scrollToColumn(e) {
          let t = this._columnSections.count;
          if (t === 0) {
            return;
          }
          e = Math.floor(e);
          e = Math.max(0, Math.min(e, t - 1));
          let i = this._columnSections.offsetOf(e);
          let s = this._columnSections.extentOf(e);
          let o = this._scrollX;
          let r = this._scrollX + this.pageWidth - 1;
          let n = 0;
          if (i < o) {
            n = i - o - 10;
          } else if (s > r) {
            n = s - r + 10;
          }
          if (n === 0) {
            return;
          }
          this.scrollBy(n, 0);
        }
        scrollToCell(e, t) {
          let i = this._rowSections.count;
          let s = this._columnSections.count;
          if (i === 0 || s === 0) {
            return;
          }
          e = Math.floor(e);
          t = Math.floor(t);
          e = Math.max(0, Math.min(e, i - 1));
          t = Math.max(0, Math.min(t, s - 1));
          let o = this._columnSections.offsetOf(t);
          let r = this._columnSections.extentOf(t);
          let n = this._rowSections.offsetOf(e);
          let l = this._rowSections.extentOf(e);
          let a = this._scrollX;
          let h = this._scrollX + this.pageWidth - 1;
          let c = this._scrollY;
          let d = this._scrollY + this.pageHeight - 1;
          let u = 0;
          let f = 0;
          if (o < a) {
            u = o - a - 10;
          } else if (r > h) {
            u = r - h + 10;
          }
          if (n < c) {
            f = n - c - 10;
          } else if (l > d) {
            f = l - d + 10;
          }
          if (u === 0 && f === 0) {
            return;
          }
          this.scrollBy(u, f);
        }
        moveCursor(e) {
          if (!this.dataModel || !this._selectionModel || this._selectionModel.isEmpty) {
            return;
          }
          const t = this._selectionModel.selections();
          const i = t.next() && !t.next();
          if (i) {
            const t = this._selectionModel.currentSelection();
            if (t.r1 === t.r2 && t.c1 === t.c2) {
              const i = e === "down" ? 1 : e === "up" ? -1 : 0;
              const s = e === "right" ? 1 : e === "left" ? -1 : 0;
              let o = t.r1 + i;
              let r = t.c1 + s;
              const n = this.dataModel.rowCount("body");
              const l = this.dataModel.columnCount("body");
              if (o >= n) {
                o = 0;
                r += 1;
              } else if (o === -1) {
                o = n - 1;
                r -= 1;
              }
              if (r >= l) {
                r = 0;
                o += 1;
                if (o >= n) {
                  o = 0;
                }
              } else if (r === -1) {
                r = l - 1;
                o -= 1;
                if (o === -1) {
                  o = n - 1;
                }
              }
              this._selectionModel.select({ r1: o, c1: r, r2: o, c2: r, cursorRow: o, cursorColumn: r, clear: "all" });
              return;
            }
          }
          this._selectionModel.moveCursorWithinSelections(e);
        }
        scrollToCursor() {
          if (!this._selectionModel) {
            return;
          }
          let e = this._selectionModel.cursorRow;
          let t = this._selectionModel.cursorColumn;
          this.scrollToCell(e, t);
        }
        scrollBy(e, t) {
          this.scrollTo(this.scrollX + e, this.scrollY + t);
        }
        scrollByPage(e) {
          let t = 0;
          let i = 0;
          switch (e) {
            case "up":
              i = -this.pageHeight;
              break;
            case "down":
              i = this.pageHeight;
              break;
            case "left":
              t = -this.pageWidth;
              break;
            case "right":
              t = this.pageWidth;
              break;
            default:
              throw "unreachable";
          }
          this.scrollTo(this.scrollX + t, this.scrollY + i);
        }
        scrollByStep(e) {
          let t;
          let i;
          let s = this.scrollX;
          let o = this.scrollY;
          let r = this._rowSections;
          let n = this._columnSections;
          switch (e) {
            case "up":
              t = r.indexOf(o - 1);
              o = t < 0 ? o : r.offsetOf(t);
              break;
            case "down":
              t = r.indexOf(o);
              o = t < 0 ? o : r.offsetOf(t) + r.sizeOf(t);
              break;
            case "left":
              i = n.indexOf(s - 1);
              s = i < 0 ? s : n.offsetOf(i);
              break;
            case "right":
              i = n.indexOf(s);
              s = i < 0 ? s : n.offsetOf(i) + n.sizeOf(i);
              break;
            default:
              throw "unreachable";
          }
          this.scrollTo(s, o);
        }
        scrollTo(e, t) {
          e = Math.max(0, Math.min(Math.floor(e), this.maxScrollX));
          t = Math.max(0, Math.min(Math.floor(t), this.maxScrollY));
          this._hScrollBar.value = e;
          this._vScrollBar.value = t;
          m.MessageLoop.postMessage(this._viewport, te.ScrollRequest);
        }
        rowCount(e) {
          let t;
          if (e === "body") {
            t = this._rowSections.count;
          } else {
            t = this._columnHeaderSections.count;
          }
          return t;
        }
        columnCount(e) {
          let t;
          if (e === "body") {
            t = this._columnSections.count;
          } else {
            t = this._rowHeaderSections.count;
          }
          return t;
        }
        rowAt(e, t) {
          if (t < 0) {
            return -1;
          }
          if (e === "column-header") {
            return this._columnHeaderSections.indexOf(t);
          }
          let i = this._rowSections.indexOf(t);
          if (i >= 0) {
            return i;
          }
          if (!this._stretchLastRow) {
            return -1;
          }
          let s = this.bodyHeight;
          let o = this.pageHeight;
          if (o <= s) {
            return -1;
          }
          if (t >= o) {
            return -1;
          }
          return this._rowSections.count - 1;
        }
        columnAt(e, t) {
          if (t < 0) {
            return -1;
          }
          if (e === "row-header") {
            return this._rowHeaderSections.indexOf(t);
          }
          let i = this._columnSections.indexOf(t);
          if (i >= 0) {
            return i;
          }
          if (!this._stretchLastColumn) {
            return -1;
          }
          let s = this.bodyWidth;
          let o = this.pageWidth;
          if (o <= s) {
            return -1;
          }
          if (t >= o) {
            return -1;
          }
          return this._columnSections.count - 1;
        }
        rowOffset(e, t) {
          let i;
          if (e === "body") {
            i = this._rowSections.offsetOf(t);
          } else {
            i = this._columnHeaderSections.offsetOf(t);
          }
          return i;
        }
        columnOffset(e, t) {
          let i;
          if (e === "body") {
            i = this._columnSections.offsetOf(t);
          } else {
            i = this._rowHeaderSections.offsetOf(t);
          }
          return i;
        }
        rowSize(e, t) {
          if (e === "column-header") {
            return this._columnHeaderSections.sizeOf(t);
          }
          let i = this._rowSections.sizeOf(t);
          if (i < 0) {
            return i;
          }
          if (!this._stretchLastRow) {
            return i;
          }
          if (t < this._rowSections.count - 1) {
            return i;
          }
          let s = this.bodyHeight;
          let o = this.pageHeight;
          if (o <= s) {
            return i;
          }
          return i + (o - s);
        }
        columnSize(e, t) {
          if (e === "row-header") {
            return this._rowHeaderSections.sizeOf(t);
          }
          let i = this._columnSections.sizeOf(t);
          if (i < 0) {
            return i;
          }
          if (!this._stretchLastColumn) {
            return i;
          }
          if (t < this._columnSections.count - 1) {
            return i;
          }
          let s = this.bodyWidth;
          let o = this.pageWidth;
          if (o <= s) {
            return i;
          }
          return i + (o - s);
        }
        resizeRow(e, t, i) {
          let s = new te.RowResizeRequest(e, t, i);
          m.MessageLoop.postMessage(this._viewport, s);
        }
        resizeColumn(e, t, i) {
          let s = new te.ColumnResizeRequest(e, t, i);
          m.MessageLoop.postMessage(this._viewport, s);
        }
        resetRows(e) {
          switch (e) {
            case "all":
              this._rowSections.reset();
              this._columnHeaderSections.reset();
              break;
            case "body":
              this._rowSections.reset();
              break;
            case "column-header":
              this._columnHeaderSections.reset();
              break;
            default:
              throw "unreachable";
          }
          this.repaintContent();
          this.repaintOverlay();
        }
        resetColumns(e) {
          switch (e) {
            case "all":
              this._columnSections.reset();
              this._rowHeaderSections.reset();
              break;
            case "body":
              this._columnSections.reset();
              break;
            case "row-header":
              this._rowHeaderSections.reset();
              break;
            default:
              throw "unreachable";
          }
          this.repaintContent();
          this.repaintOverlay();
        }
        fitColumnNames(e = "all", t = 15, i) {
          if (this.dataModel) {
            let s = i === undefined || i < 0 ? undefined : i;
            if (e === "row-header" || e === "all") {
              if (s !== undefined) {
                const e = this.dataModel.columnCount("row-header");
                if (s - e < 0) {
                  this._fitRowColumnHeaders(this.dataModel, t, s);
                  s = 0;
                } else {
                  this._fitRowColumnHeaders(this.dataModel, t, e);
                  s = s - e;
                }
              } else {
                this._fitRowColumnHeaders(this.dataModel, t);
              }
            }
            if (e === "body" || e === "all") {
              if (s !== undefined) {
                const e = this.dataModel.columnCount("body");
                if (s - e < 0) {
                  this._fitBodyColumnHeaders(this.dataModel, t, s);
                } else {
                  this._fitBodyColumnHeaders(this.dataModel, t, Math.min(s, e));
                }
              } else {
                this._fitBodyColumnHeaders(this.dataModel, t);
              }
            }
          }
        }
        mapToLocal(e, t) {
          let i = this._viewport.node.getBoundingClientRect();
          let { left: s, top: o } = i;
          s = Math.floor(s);
          o = Math.floor(o);
          let r = e - s;
          let n = t - o;
          return { lx: r, ly: n };
        }
        mapToVirtual(e, t) {
          let { lx: i, ly: s } = this.mapToLocal(e, t);
          let o = i + this.scrollX - this.headerWidth;
          let r = s + this.scrollY - this.headerHeight;
          return { vx: o, vy: r };
        }
        hitTest(e, t) {
          let { lx: i, ly: s } = this.mapToLocal(e, t);
          let o = this.headerWidth;
          let r = this.headerHeight;
          let n = this.bodyWidth;
          let l = this.bodyHeight;
          let a = this.pageHeight;
          let h = this.pageWidth;
          if (this._stretchLastColumn && h > n) {
            n = h;
          }
          if (this._stretchLastRow && a > l) {
            l = a;
          }
          if (i >= 0 && i < o && s >= 0 && s < r) {
            let e = i;
            let t = s;
            let o = this.rowAt("column-header", t);
            let r = this.columnAt("row-header", e);
            let n = this.columnOffset("row-header", r);
            let l = this.rowOffset("column-header", o);
            let a = this.columnSize("row-header", r);
            let h = this.rowSize("column-header", o);
            let c = e - n;
            let d = t - l;
            return { region: "corner-header", row: o, column: r, x: c, y: d, width: a, height: h };
          }
          if (s >= 0 && s < r && i >= 0 && i < o + n) {
            let e = i + this._scrollX - o;
            let t = s;
            let r = this.rowAt("column-header", t);
            let n = this.columnAt("body", e);
            let l = this.columnOffset("body", n);
            let a = this.rowOffset("column-header", r);
            let h = this.columnSize("body", n);
            let c = this.rowSize("column-header", r);
            let d = e - l;
            let u = t - a;
            return { region: "column-header", row: r, column: n, x: d, y: u, width: h, height: c };
          }
          if (i >= 0 && i < o && s >= 0 && s < r + l) {
            let e = i;
            let t = s + this._scrollY - r;
            let o = this.rowAt("body", t);
            let n = this.columnAt("row-header", e);
            let l = this.columnOffset("row-header", n);
            let a = this.rowOffset("body", o);
            let h = this.columnSize("row-header", n);
            let c = this.rowSize("body", o);
            let d = e - l;
            let u = t - a;
            return { region: "row-header", row: o, column: n, x: d, y: u, width: h, height: c };
          }
          if (i >= o && i < o + n && s >= r && s < r + l) {
            let e = i + this._scrollX - o;
            let t = s + this._scrollY - r;
            let n = this.rowAt("body", t);
            let l = this.columnAt("body", e);
            let a = this.columnOffset("body", l);
            let h = this.rowOffset("body", n);
            let c = this.columnSize("body", l);
            let d = this.rowSize("body", n);
            let u = e - a;
            let f = t - h;
            return { region: "body", row: n, column: l, x: u, y: f, width: c, height: d };
          }
          let c = -1;
          let d = -1;
          let u = -1;
          let f = -1;
          let _ = -1;
          let m = -1;
          return { region: "void", row: c, column: d, x: u, y: f, width: _, height: m };
        }
        copyToClipboard() {
          let e = this._dataModel;
          if (!e) {
            return;
          }
          let t = this._selectionModel;
          if (!t) {
            return;
          }
          let i = Array.from(t.selections());
          if (i.length === 0) {
            return;
          }
          if (i.length > 1) {
            alert("Cannot copy multiple grid selections.");
            return;
          }
          let o = e.rowCount("body");
          let r = e.columnCount("body");
          if (o === 0 || r === 0) {
            return;
          }
          let { r1: n, c1: l, r2: a, c2: h } = i[0];
          n = Math.max(0, Math.min(n, o - 1));
          l = Math.max(0, Math.min(l, r - 1));
          a = Math.max(0, Math.min(a, o - 1));
          h = Math.max(0, Math.min(h, r - 1));
          if (a < n) [n, a] = [a, n];
          if (h < l) [l, h] = [h, l];
          let c = e.columnCount("row-header");
          let d = e.rowCount("column-header");
          let u = this._copyConfig.separator;
          let f = this._copyConfig.format;
          let _ = this._copyConfig.headers;
          let m = this._copyConfig.warningThreshold;
          let g = a - n + 1;
          let p = h - l + 1;
          switch (_) {
            case "none":
              c = 0;
              d = 0;
              break;
            case "row":
              d = 0;
              p += c;
              break;
            case "column":
              c = 0;
              g += d;
              break;
            case "all":
              g += d;
              p += c;
              break;
            default:
              throw "unreachable";
          }
          let w = g * p;
          if (w > m) {
            let e = `Copying ${w} cells may take a while. Continue?`;
            if (!window.confirm(e)) {
              return;
            }
          }
          let y = { region: "body", row: 0, column: 0, value: null, metadata: {} };
          let x = new Array(g);
          for (let s = 0; s < g; ++s) {
            let t = new Array(p);
            for (let i = 0; i < p; ++i) {
              let o;
              let r;
              let a;
              if (s < d && i < c) {
                o = "corner-header";
                r = s;
                a = i;
              } else if (s < d) {
                o = "column-header";
                r = s;
                a = i - c + l;
              } else if (i < c) {
                o = "row-header";
                r = s - d + n;
                a = i;
              } else {
                o = "body";
                r = s - d + n;
                a = i - c + l;
              }
              y.region = o;
              y.row = r;
              y.column = a;
              y.value = e.data(o, r, a);
              y.metadata = e.metadata(o, r, a);
              t[i] = f(y);
            }
            x[s] = t;
          }
          let v = x.map((e) => e.join(u));
          let C = v.join("\n");
          s.ClipboardExt.copyText(C);
        }
        processMessage(e) {
          if (e.type === "child-shown" || e.type === "child-hidden") {
            return;
          }
          if (e.type === "fit-request") {
            let e = s.ElementExt.sizeLimits(this._vScrollBar.node);
            let t = s.ElementExt.sizeLimits(this._hScrollBar.node);
            this._vScrollBarMinWidth = e.minWidth;
            this._hScrollBarMinHeight = t.minHeight;
          }
          super.processMessage(e);
        }
        messageHook(e, t) {
          if (e === this._viewport) {
            this._processViewportMessage(t);
            return true;
          }
          if (e === this._hScrollBar && t.type === "activate-request") {
            this.activate();
            return false;
          }
          if (e === this._vScrollBar && t.type === "activate-request") {
            this.activate();
            return false;
          }
          return true;
        }
        handleEvent(e) {
          switch (e.type) {
            case "keydown":
              this._evtKeyDown(e);
              break;
            case "mousedown":
              this._evtMouseDown(e);
              break;
            case "mousemove":
              this._evtMouseMove(e);
              break;
            case "mouseup":
              this._evtMouseUp(e);
              break;
            case "dblclick":
              this._evtMouseDoubleClick(e);
              break;
            case "mouseleave":
              this._evtMouseLeave(e);
              break;
            case "contextmenu":
              this._evtContextMenu(e);
              break;
            case "wheel":
              this._evtWheel(e);
              break;
            case "resize":
              this._refreshDPI();
              break;
          }
        }
        get currentViewport() {
          let e = this.viewport.node.offsetWidth;
          let t = this.viewport.node.offsetHeight;
          e = Math.round(e);
          t = Math.round(t);
          if (e <= 0 || t <= 0) {
            return;
          }
          const i = this._columnSections.length - this.scrollX;
          const s = this._rowSections.length - this.scrollY;
          const o = this.headerWidth;
          const r = this.headerHeight;
          const n = o;
          const l = r;
          const a = Math.min(e - 1, o + i - 1);
          const h = Math.min(t - 1, r + s - 1);
          const c = this._rowSections.indexOf(l - r + this.scrollY);
          const d = this._columnSections.indexOf(n - o + this.scrollX);
          const u = this._rowSections.indexOf(h - r + this.scrollY);
          const f = this._columnSections.indexOf(a - o + this.scrollX);
          return { firstRow: c, firstColumn: d, lastRow: u, lastColumn: f };
        }
        onActivateRequest(e) {
          this.viewport.node.focus({ preventScroll: true });
        }
        onBeforeAttach(e) {
          window.addEventListener("resize", this);
          this.node.addEventListener("wheel", this);
          this._viewport.node.addEventListener("keydown", this);
          this._viewport.node.addEventListener("mousedown", this);
          this._viewport.node.addEventListener("mousemove", this);
          this._viewport.node.addEventListener("dblclick", this);
          this._viewport.node.addEventListener("mouseleave", this);
          this._viewport.node.addEventListener("contextmenu", this);
          this.repaintContent();
          this.repaintOverlay();
        }
        onAfterDetach(e) {
          window.removeEventListener("resize", this);
          this.node.removeEventListener("wheel", this);
          this._viewport.node.removeEventListener("keydown", this);
          this._viewport.node.removeEventListener("mousedown", this);
          this._viewport.node.removeEventListener("mousemove", this);
          this._viewport.node.removeEventListener("mouseleave", this);
          this._viewport.node.removeEventListener("dblclick", this);
          this._viewport.node.removeEventListener("contextmenu", this);
          this._releaseMouse();
        }
        onBeforeShow(e) {
          this.repaintContent();
          this.repaintOverlay();
        }
        onResize(e) {
          if (this._editorController) {
            this._editorController.cancel();
          }
          this._syncScrollState();
        }
        repaintContent() {
          let e = new te.PaintRequest("all", 0, 0, 0, 0);
          m.MessageLoop.postMessage(this._viewport, e);
        }
        repaintRegion(e, t, i, s, o) {
          let r = new te.PaintRequest(e, t, i, s, o);
          m.MessageLoop.postMessage(this._viewport, r);
        }
        repaintOverlay() {
          m.MessageLoop.postMessage(this._viewport, te.OverlayPaintRequest);
        }
        _getMaxWidthInColumn(e, t) {
          const i = this.dataModel;
          if (!i) {
            return null;
          }
          const s = t == "row-header" ? "corner-header" : "column-header";
          return Math.max(this._getMaxWidthInArea(i, e, s, "column-header"), this._getMaxWidthInArea(i, e, t, "body"));
        }
        _getMaxWidthInArea(e, t, i, s) {
          const o = e.rowCount(s);
          const r = Array.from({ length: Math.min(o, 1e6) }, (s, o) => ee._getConfig(e, o, t, i));
          if (o > 1e5) {
            r.sort((e) => -this._getTextToRender(e).length);
          }
          let n = 0;
          for (let l = 0; l < o && l < 1e5; ++l) {
            const e = this._getCellTextWidth(r[l]);
            n = Math.max(n, e);
          }
          return n;
        }
        static _getConfig(e, t, i, s) {
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            region: s,
            row: t,
            column: i,
            value: ee._getCellValue(e, s, t, i),
            metadata: ee._getCellMetadata(e, s, t, i),
          };
        }
        _getTextToRender(e) {
          const t = this.cellRenderers.get(e);
          return t.getText(e);
        }
        _getCellTextWidth(e) {
          const t = this.cellRenderers.get(e);
          const i = this.canvasGC;
          i.font = x.resolveOption(t.font, e);
          i.fillStyle = x.resolveOption(t.textColor, e);
          i.textAlign = x.resolveOption(t.horizontalAlignment, e);
          i.textBaseline = "bottom";
          const s = this._getTextToRender(e);
          return i.measureText(s).width + 2 * t.horizontalPadding;
        }
        _resizeCanvasIfNeeded(e, t) {
          e = e * this._dpiRatio;
          t = t * this._dpiRatio;
          let i = (Math.ceil((e + 1) / 512) + 1) * 512;
          let s = (Math.ceil((t + 1) / 512) + 1) * 512;
          let o = this._canvas.width;
          let r = this._canvas.height;
          if (o >= e && r >= t && o <= i && r <= s) {
            return;
          }
          let n = i - 512;
          let l = s - 512;
          this._canvasGC.setTransform(1, 0, 0, 1, 0, 0);
          this._bufferGC.setTransform(1, 0, 0, 1, 0, 0);
          this._overlayGC.setTransform(1, 0, 0, 1, 0, 0);
          if (o < e) {
            this._buffer.width = n;
          } else if (o > i) {
            this._buffer.width = i;
          }
          if (r < t) {
            this._buffer.height = l;
          } else if (r > s) {
            this._buffer.height = s;
          }
          let a = o > 0 && r > 0 && e > 0 && t > 0;
          if (a) {
            this._bufferGC.drawImage(this._canvas, 0, 0);
          }
          if (o < e) {
            this._canvas.width = n;
            this._canvas.style.width = `${n / this._dpiRatio}px`;
          } else if (o > i) {
            this._canvas.width = i;
            this._canvas.style.width = `${i / this._dpiRatio}px`;
          }
          if (r < t) {
            this._canvas.height = l;
            this._canvas.style.height = `${l / this._dpiRatio}px`;
          } else if (r > s) {
            this._canvas.height = s;
            this._canvas.style.height = `${s / this._dpiRatio}px`;
          }
          if (a) {
            this._canvasGC.drawImage(this._buffer, 0, 0);
          }
          if (a) {
            this._bufferGC.drawImage(this._overlay, 0, 0);
          }
          if (o < e) {
            this._overlay.width = n;
            this._overlay.style.width = `${n / this._dpiRatio}px`;
          } else if (o > i) {
            this._overlay.width = i;
            this._overlay.style.width = `${i / this._dpiRatio}px`;
          }
          if (r < t) {
            this._overlay.height = l;
            this._overlay.style.height = `${l / this._dpiRatio}px`;
          } else if (r > s) {
            this._overlay.height = s;
            this._overlay.style.height = `${s / this._dpiRatio}px`;
          }
          if (a) {
            this._overlayGC.drawImage(this._buffer, 0, 0);
          }
        }
        _syncScrollState() {
          let e = this.bodyWidth;
          let t = this.bodyHeight;
          let i = this.pageWidth;
          let s = this.pageHeight;
          let o = !this._vScrollBar.isHidden;
          let r = !this._hScrollBar.isHidden;
          let n = this._vScrollBarMinWidth;
          let l = this._hScrollBarMinHeight;
          let a = i + (o ? n : 0);
          let h = s + (r ? l : 0);
          let c = h < t - 1;
          let d = a < e - 1;
          if (c && !d) {
            d = a - n < e - 1;
          }
          if (d && !c) {
            c = h - l < t - 1;
          }
          if (c !== o || d !== r) {
            this._vScrollBar.setHidden(!c);
            this._hScrollBar.setHidden(!d);
            this._scrollCorner.setHidden(!c || !d);
            m.MessageLoop.sendMessage(this, f.Widget.Msg.FitRequest);
          }
          this._vScrollBar.maximum = this.maxScrollY;
          this._vScrollBar.page = this.pageHeight;
          this._hScrollBar.maximum = this.maxScrollX;
          this._hScrollBar.page = this.pageWidth;
          this._scrollTo(this._scrollX, this._scrollY);
        }
        _syncViewport() {
          this.repaintContent();
          this.repaintOverlay();
          this._syncScrollState();
        }
        _processViewportMessage(e) {
          switch (e.type) {
            case "resize":
              this._onViewportResize(e);
              break;
            case "scroll-request":
              this._onViewportScrollRequest(e);
              break;
            case "paint-request":
              this._onViewportPaintRequest(e);
              break;
            case "overlay-paint-request":
              this._onViewportOverlayPaintRequest(e);
              break;
            case "row-resize-request":
              this._onViewportRowResizeRequest(e);
              break;
            case "column-resize-request":
              this._onViewportColumnResizeRequest(e);
              break;
          }
        }
        _onViewportResize(e) {
          if (!this._viewport.isVisible) {
            return;
          }
          let { width: t, height: i } = e;
          if (t === -1) {
            t = this._viewport.node.offsetWidth;
          }
          if (i === -1) {
            i = this._viewport.node.offsetHeight;
          }
          t = Math.round(t);
          i = Math.round(i);
          let s = this._viewportWidth;
          let o = this._viewportHeight;
          this._viewportWidth = t;
          this._viewportHeight = i;
          this._resizeCanvasIfNeeded(t, i);
          if (t === 0 || i === 0) {
            return;
          }
          if (s === 0 || o === 0) {
            this.paintContent(0, 0, t, i);
            this._paintOverlay();
            return;
          }
          if (this._stretchLastColumn && this.pageWidth > this.bodyWidth) {
            let e = this._columnSections.offsetOf(this._columnSections.count - 1);
            let o = Math.min(this.headerWidth + e, s);
            this.paintContent(o, 0, t - o, i);
          } else if (t > s) {
            this.paintContent(s, 0, t - s + 1, i);
          }
          if (this._stretchLastRow && this.pageHeight > this.bodyHeight) {
            let e = this._rowSections.offsetOf(this._rowSections.count - 1);
            let s = Math.min(this.headerHeight + e, o);
            this.paintContent(0, s, t, i - s);
          } else if (i > o) {
            this.paintContent(0, o, t, i - o + 1);
          }
          this._paintOverlay();
        }
        _onViewportScrollRequest(e) {
          this._scrollTo(this._hScrollBar.value, this._vScrollBar.value);
        }
        _onViewportPaintRequest(e) {
          if (!this._viewport.isVisible) {
            return;
          }
          if (this._viewportWidth === 0 || this._viewportHeight === 0) {
            return;
          }
          let t = 0;
          let i = 0;
          let s = this._viewportWidth - 1;
          let o = this._viewportHeight - 1;
          let r = this._scrollX;
          let n = this._scrollY;
          let l = this.headerWidth;
          let a = this.headerHeight;
          let h = this._rowSections;
          let c = this._columnSections;
          let d = this._rowHeaderSections;
          let u = this._columnHeaderSections;
          let { region: f, r1: _, c1: m, r2: g, c2: p } = e;
          let w;
          let y;
          let x;
          let v;
          switch (f) {
            case "all":
              w = t;
              y = i;
              x = s;
              v = o;
              break;
            case "body":
              _ = Math.max(0, Math.min(_, h.count));
              m = Math.max(0, Math.min(m, c.count));
              g = Math.max(0, Math.min(g, h.count));
              p = Math.max(0, Math.min(p, c.count));
              w = c.offsetOf(m) - r + l;
              y = h.offsetOf(_) - n + a;
              x = c.extentOf(p) - r + l;
              v = h.extentOf(g) - n + a;
              break;
            case "row-header":
              _ = Math.max(0, Math.min(_, h.count));
              m = Math.max(0, Math.min(m, d.count));
              g = Math.max(0, Math.min(g, h.count));
              p = Math.max(0, Math.min(p, d.count));
              w = d.offsetOf(m);
              y = h.offsetOf(_) - n + a;
              x = d.extentOf(p);
              v = h.extentOf(g) - n + a;
              break;
            case "column-header":
              _ = Math.max(0, Math.min(_, u.count));
              m = Math.max(0, Math.min(m, c.count));
              g = Math.max(0, Math.min(g, u.count));
              p = Math.max(0, Math.min(p, c.count));
              w = c.offsetOf(m) - r + l;
              y = u.offsetOf(_);
              x = c.extentOf(p) - r + l;
              v = u.extentOf(g);
              break;
            case "corner-header":
              _ = Math.max(0, Math.min(_, u.count));
              m = Math.max(0, Math.min(m, d.count));
              g = Math.max(0, Math.min(g, u.count));
              p = Math.max(0, Math.min(p, d.count));
              w = d.offsetOf(m);
              y = u.offsetOf(_);
              x = d.extentOf(p);
              v = u.extentOf(g);
              break;
            default:
              throw "unreachable";
          }
          if (x < t || v < i || w > s || y > o) {
            return;
          }
          w = Math.max(t, Math.min(w, s));
          y = Math.max(i, Math.min(y, o));
          x = Math.max(t, Math.min(x, s));
          v = Math.max(i, Math.min(v, o));
          this.paintContent(w, y, x - w + 1, v - y + 1);
        }
        _onViewportOverlayPaintRequest(e) {
          if (!this._viewport.isVisible) {
            return;
          }
          if (this._viewportWidth === 0 || this._viewportHeight === 0) {
            return;
          }
          this._paintOverlay();
        }
        _onViewportRowResizeRequest(e) {
          if (e.region === "body") {
            this._resizeRow(e.index, e.size);
          } else {
            this._resizeColumnHeader(e.index, e.size);
          }
        }
        _onViewportColumnResizeRequest(e) {
          if (e.region === "body") {
            this._resizeColumn(e.index, e.size);
          } else {
            this._resizeRowHeader(e.index, e.size);
          }
        }
        _onThumbMoved(e) {
          m.MessageLoop.postMessage(this._viewport, te.ScrollRequest);
        }
        _onPageRequested(e, t) {
          if (e === this._vScrollBar) {
            this.scrollByPage(t === "decrement" ? "up" : "down");
          } else {
            this.scrollByPage(t === "decrement" ? "left" : "right");
          }
        }
        _onStepRequested(e, t) {
          if (e === this._vScrollBar) {
            this.scrollByStep(t === "decrement" ? "up" : "down");
          } else {
            this.scrollByStep(t === "decrement" ? "left" : "right");
          }
        }
        _onDataModelChanged(e, t) {
          switch (t.type) {
            case "rows-inserted":
              this._onRowsInserted(t);
              break;
            case "columns-inserted":
              this._onColumnsInserted(t);
              break;
            case "rows-removed":
              this._onRowsRemoved(t);
              break;
            case "columns-removed":
              this._onColumnsRemoved(t);
              break;
            case "rows-moved":
              this._onRowsMoved(t);
              break;
            case "columns-moved":
              this._onColumnsMoved(t);
              break;
            case "cells-changed":
              this._onCellsChanged(t);
              break;
            case "model-reset":
              this._onModelReset(t);
              break;
            default:
              throw "unreachable";
          }
        }
        _onSelectionsChanged(e) {
          this.repaintOverlay();
        }
        _onRowsInserted(e) {
          let { region: t, index: i, span: s } = e;
          if (s <= 0) {
            return;
          }
          let o;
          if (t === "body") {
            o = this._rowSections;
          } else {
            o = this._columnHeaderSections;
          }
          if (this._scrollY === this.maxScrollY && this.maxScrollY > 0) {
            o.insert(i, s);
            this._scrollY = this.maxScrollY;
          } else {
            o.insert(i, s);
          }
          this._syncViewport();
        }
        _onColumnsInserted(e) {
          let { region: t, index: i, span: s } = e;
          if (s <= 0) {
            return;
          }
          let o;
          if (t === "body") {
            o = this._columnSections;
          } else {
            o = this._rowHeaderSections;
          }
          if (this._scrollX === this.maxScrollX && this.maxScrollX > 0) {
            o.insert(i, s);
            this._scrollX = this.maxScrollX;
          } else {
            o.insert(i, s);
          }
          this._syncViewport();
        }
        _onRowsRemoved(e) {
          let { region: t, index: i, span: s } = e;
          if (s <= 0) {
            return;
          }
          let o;
          if (t === "body") {
            o = this._rowSections;
          } else {
            o = this._columnHeaderSections;
          }
          if (i < 0 || i >= o.count) {
            return;
          }
          if (this._scrollY === this.maxScrollY && this.maxScrollY > 0) {
            o.remove(i, s);
            this._scrollY = this.maxScrollY;
          } else {
            o.remove(i, s);
          }
          this._syncViewport();
        }
        _onColumnsRemoved(e) {
          let { region: t, index: i, span: s } = e;
          if (s <= 0) {
            return;
          }
          let o;
          if (t === "body") {
            o = this._columnSections;
          } else {
            o = this._rowHeaderSections;
          }
          if (i < 0 || i >= o.count) {
            return;
          }
          if (this._scrollX === this.maxScrollX && this.maxScrollX > 0) {
            o.remove(i, s);
            this._scrollX = this.maxScrollX;
          } else {
            o.remove(i, s);
          }
          this._syncViewport();
        }
        _onRowsMoved(e) {
          let { region: t, index: i, span: s, destination: o } = e;
          if (s <= 0) {
            return;
          }
          let r;
          if (t === "body") {
            r = this._rowSections;
          } else {
            r = this._columnHeaderSections;
          }
          if (i < 0 || i >= r.count) {
            return;
          }
          s = Math.min(s, r.count - i);
          o = Math.min(Math.max(0, o), r.count - s);
          if (i === o) {
            return;
          }
          let n = Math.min(i, o);
          let l = Math.max(i + s - 1, o + s - 1);
          r.move(i, s, o);
          if (t === "body") {
            this.repaintRegion("body", n, 0, l, Infinity);
            this.repaintRegion("row-header", n, 0, l, Infinity);
          } else {
            this.repaintRegion("column-header", n, 0, l, Infinity);
            this.repaintRegion("corner-header", n, 0, l, Infinity);
          }
          this._syncViewport();
        }
        _onColumnsMoved(e) {
          let { region: t, index: i, span: s, destination: o } = e;
          if (s <= 0) {
            return;
          }
          let r;
          if (t === "body") {
            r = this._columnSections;
          } else {
            r = this._rowHeaderSections;
          }
          if (i < 0 || i >= r.count) {
            return;
          }
          s = Math.min(s, r.count - i);
          o = Math.min(Math.max(0, o), r.count - s);
          if (i === o) {
            return;
          }
          r.move(i, s, o);
          let n = Math.min(i, o);
          let l = Math.max(i + s - 1, o + s - 1);
          if (t === "body") {
            this.repaintRegion("body", 0, n, Infinity, l);
            this.repaintRegion("column-header", 0, n, Infinity, l);
          } else {
            this.repaintRegion("row-header", 0, n, Infinity, l);
            this.repaintRegion("corner-header", 0, n, Infinity, l);
          }
          this._syncViewport();
        }
        _onCellsChanged(e) {
          let { region: t, row: i, column: s, rowSpan: o, columnSpan: r } = e;
          if (o <= 0 && r <= 0) {
            return;
          }
          let n = i;
          let l = s;
          let a = n + o - 1;
          let h = l + r - 1;
          this.repaintRegion(t, n, l, a, h);
        }
        _onModelReset(e) {
          let t = this._rowSections.count;
          let i = this._columnSections.count;
          let s = this._rowHeaderSections.count;
          let o = this._columnHeaderSections.count;
          let r = this._dataModel.rowCount("body") - t;
          let n = this._dataModel.columnCount("body") - i;
          let l = this._dataModel.columnCount("row-header") - s;
          let a = this._dataModel.rowCount("column-header") - o;
          if (r > 0) {
            this._rowSections.insert(t, r);
          } else if (r < 0) {
            this._rowSections.remove(t + r, -r);
          }
          if (n > 0) {
            this._columnSections.insert(i, n);
          } else if (n < 0) {
            this._columnSections.remove(i + n, -n);
          }
          if (l > 0) {
            this._rowHeaderSections.insert(s, l);
          } else if (l < 0) {
            this._rowHeaderSections.remove(s + l, -l);
          }
          if (a > 0) {
            this._columnHeaderSections.insert(o, a);
          } else if (a < 0) {
            this._columnHeaderSections.remove(o + a, -a);
          }
          this._syncViewport();
        }
        _onRenderersChanged() {
          this.repaintContent();
        }
        _evtKeyDown(e) {
          if (this._mousedown) {
            e.preventDefault();
            e.stopPropagation();
          } else if (this._keyHandler) {
            this._keyHandler.onKeyDown(this, e);
          }
        }
        _evtMouseDown(e) {
          if (e.button !== 0) {
            return;
          }
          this.activate();
          e.preventDefault();
          e.stopPropagation();
          document.addEventListener("keydown", this, true);
          document.addEventListener("mouseup", this, true);
          document.addEventListener("mousedown", this, true);
          document.addEventListener("mousemove", this, true);
          document.addEventListener("contextmenu", this, true);
          this._mousedown = true;
          if (this._mouseHandler) {
            this._mouseHandler.onMouseDown(this, e);
          }
        }
        _evtMouseMove(e) {
          if (this._mousedown) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (!this._mouseHandler) {
            return;
          }
          if (this._mousedown) {
            this._mouseHandler.onMouseMove(this, e);
          } else {
            this._mouseHandler.onMouseHover(this, e);
          }
        }
        _evtMouseUp(e) {
          if (e.button !== 0) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          if (this._mouseHandler) {
            this._mouseHandler.onMouseUp(this, e);
          }
          this._releaseMouse();
        }
        _evtMouseDoubleClick(e) {
          if (e.button !== 0) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          if (this._mouseHandler) {
            this._mouseHandler.onMouseDoubleClick(this, e);
          }
          this._releaseMouse();
        }
        _evtMouseLeave(e) {
          if (this._mousedown) {
            e.preventDefault();
            e.stopPropagation();
          } else if (this._mouseHandler) {
            this._mouseHandler.onMouseLeave(this, e);
          }
        }
        _evtContextMenu(e) {
          if (this._mousedown) {
            e.preventDefault();
            e.stopPropagation();
          } else if (this._mouseHandler) {
            this._mouseHandler.onContextMenu(this, e);
          }
        }
        _evtWheel(e) {
          if (s.Platform.accelKey(e)) {
            return;
          }
          if (!this._mouseHandler) {
            return;
          }
          this._mouseHandler.onWheel(this, e);
        }
        _releaseMouse() {
          this._mousedown = false;
          if (this._mouseHandler) {
            this._mouseHandler.release();
          }
          document.removeEventListener("keydown", this, true);
          document.removeEventListener("mouseup", this, true);
          document.removeEventListener("mousedown", this, true);
          document.removeEventListener("mousemove", this, true);
          document.removeEventListener("contextmenu", this, true);
        }
        _refreshDPI() {
          let e = Math.ceil(window.devicePixelRatio);
          if (this._dpiRatio === e) {
            return;
          }
          this._dpiRatio = e;
          this.repaintContent();
          this.repaintOverlay();
          this._resizeCanvasIfNeeded(this._viewportWidth, this._viewportHeight);
          this._canvas.style.width = `${this._canvas.width / this._dpiRatio}px`;
          this._canvas.style.height = `${this._canvas.height / this._dpiRatio}px`;
          this._overlay.style.width = `${this._overlay.width / this._dpiRatio}px`;
          this._overlay.style.height = `${this._overlay.height / this._dpiRatio}px`;
        }
        _resizeRow(e, t) {
          let i = this._rowSections;
          if (e < 0 || e >= i.count) {
            return;
          }
          let s = i.sizeOf(e);
          let o = i.clampSize(t);
          if (s === o) {
            return;
          }
          i.resize(e, o);
          let r = this._viewportWidth;
          let n = this._viewportHeight;
          if (!this._viewport.isVisible || r === 0 || n === 0) {
            this._syncScrollState();
            return;
          }
          let l = o - s;
          let a = this.headerHeight;
          let h = i.offsetOf(e) + a - this._scrollY;
          if (a >= n || h >= n) {
            this._syncScrollState();
            return;
          }
          if (h + s <= a) {
            this._scrollY += l;
            this._syncScrollState();
            return;
          }
          let c = Math.max(a, h);
          if (h + s >= n || h + o >= n) {
            this.paintContent(0, c, r, n - c);
            this._paintOverlay();
            this._syncScrollState();
            return;
          }
          let d = 0;
          let u = r;
          let f = 0;
          let _;
          let m;
          let g;
          if (h + o <= a) {
            _ = a - l;
            m = n - _;
            g = a;
          } else {
            _ = h + s;
            m = n - _;
            g = _ + l;
          }
          this._blitContent(this._canvas, d, _, u, m, f, g);
          if (o > 0 && h + o > a) {
            this.paintContent(0, c, r, h + o - c);
          }
          if (this._stretchLastRow && this.pageHeight > this.bodyHeight) {
            let e = this._rowSections.count - 1;
            let t = a + this._rowSections.offsetOf(e);
            this.paintContent(0, t, r, n - t);
          } else if (l < 0) {
            this.paintContent(0, n + l, r, -l);
          }
          for (const p of ["body", "row-header"]) {
            const t = S.getCellGroupsAtRow(this.dataModel, p, e);
            let i = { region: p, xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
            let s = undefined;
            switch (p) {
              case "body":
                i.xMin = this.headerWidth;
                i.xMax = this.headerWidth + this.bodyWidth;
                i.yMin = this.headerHeight;
                i.yMax = this.headerHeight + this.bodyHeight;
                s = this._style.backgroundColor;
                break;
              case "row-header":
                i.xMin = 0;
                i.xMax = this.headerWidth;
                i.yMin = this.headerHeight;
                i.yMax = this.headerHeight + this.bodyHeight;
                s = this._style.headerBackgroundColor;
                break;
            }
            this._paintMergedCells(t, i, s);
          }
          this._paintOverlay();
          this._syncScrollState();
        }
        _resizeColumn(e, t) {
          let i = this._columnSections;
          if (e < 0 || e >= i.count) {
            return;
          }
          const s = t !== null && t !== void 0 ? t : this._getMaxWidthInColumn(e, "body");
          if (!s || s == 0) {
            return;
          }
          let o = i.sizeOf(e);
          let r = i.clampSize(s);
          if (o === r) {
            return;
          }
          i.resize(e, r);
          let n = this._viewportWidth;
          let l = this._viewportHeight;
          if (!this._viewport.isVisible || n === 0 || l === 0) {
            this._syncScrollState();
            return;
          }
          let a = r - o;
          let h = this.headerWidth;
          let c = i.offsetOf(e) + h - this._scrollX;
          if (h >= n || c >= n) {
            this._syncScrollState();
            return;
          }
          if (c + o <= h) {
            this._scrollX += a;
            this._syncScrollState();
            return;
          }
          let d = Math.max(h, c);
          if (c + o >= n || c + r >= n) {
            this.paintContent(d, 0, n - d, l);
            this._paintOverlay();
            this._syncScrollState();
            return;
          }
          let u = 0;
          let f = l;
          let _ = 0;
          let m;
          let g;
          let p;
          if (c + r <= h) {
            m = h - a;
            g = n - m;
            p = h;
          } else {
            m = c + o;
            g = n - m;
            p = m + a;
          }
          this._blitContent(this._canvas, m, u, g, f, p, _);
          if (r > 0 && c + r > h) {
            this.paintContent(d, 0, c + r - d, l);
          }
          if (this._stretchLastColumn && this.pageWidth > this.bodyWidth) {
            let e = this._columnSections.count - 1;
            let t = h + this._columnSections.offsetOf(e);
            this.paintContent(t, 0, n - t, l);
          } else if (a < 0) {
            this.paintContent(n + a, 0, -a, l);
          }
          for (const w of ["body", "column-header"]) {
            const t = S.getCellGroupsAtColumn(this.dataModel, w, e);
            let i = { region: w, xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
            let s = undefined;
            switch (w) {
              case "body":
                i.xMin = this.headerWidth;
                i.xMax = this.headerWidth + this.bodyWidth;
                i.yMin = this.headerHeight;
                i.yMax = this.headerHeight + this.bodyHeight;
                s = this._style.backgroundColor;
                break;
              case "column-header":
                i.xMin = this.headerWidth;
                i.xMax = this.headerWidth + this.bodyWidth;
                i.yMin = 0;
                i.yMax = this.headerHeight;
                s = this._style.headerBackgroundColor;
                break;
            }
            this._paintMergedCells(t, i, s);
          }
          this._paintOverlay();
          this._syncScrollState();
        }
        _resizeRowHeader(e, t) {
          let i = this._rowHeaderSections;
          if (e < 0 || e >= i.count) {
            return;
          }
          const s = t !== null && t !== void 0 ? t : this._getMaxWidthInColumn(e, "row-header");
          if (!s || s == 0) {
            return;
          }
          let o = i.sizeOf(e);
          let r = i.clampSize(s);
          if (o === r) {
            return;
          }
          i.resize(e, r);
          let n = this._viewportWidth;
          let l = this._viewportHeight;
          if (!this._viewport.isVisible || n === 0 || l === 0) {
            this._syncScrollState();
            return;
          }
          let a = r - o;
          let h = i.offsetOf(e);
          if (h >= n) {
            this._syncScrollState();
            return;
          }
          if (h + o >= n || h + r >= n) {
            this.paintContent(h, 0, n - h, l);
            this._paintOverlay();
            this._syncScrollState();
            return;
          }
          let c = h + o;
          let d = 0;
          let u = n - c;
          let f = l;
          let _ = c + a;
          let m = 0;
          this._blitContent(this._canvas, c, d, u, f, _, m);
          if (r > 0) {
            this.paintContent(h, 0, r, l);
          }
          if (this._stretchLastColumn && this.pageWidth > this.bodyWidth) {
            let e = this._columnSections.count - 1;
            let t = this.headerWidth + this._columnSections.offsetOf(e);
            this.paintContent(t, 0, n - t, l);
          } else if (a < 0) {
            this.paintContent(n + a, 0, -a, l);
          }
          for (const g of ["corner-header", "row-header"]) {
            const t = S.getCellGroupsAtColumn(this.dataModel, g, e);
            let i = { region: g, xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
            switch (g) {
              case "corner-header":
                i.xMin = 0;
                i.xMax = this.headerWidth;
                i.yMin = 0;
                i.yMax = this.headerHeight;
                break;
              case "row-header":
                i.xMin = 0;
                i.xMax = this.headerWidth;
                i.yMin = this.headerHeight;
                i.yMax = this.headerHeight + this.bodyHeight;
                break;
            }
            this._paintMergedCells(t, i, this._style.headerBackgroundColor);
          }
          this._paintOverlay();
          this._syncScrollState();
        }
        _resizeColumnHeader(e, t) {
          let i = this._columnHeaderSections;
          if (e < 0 || e >= i.count) {
            return;
          }
          let s = i.sizeOf(e);
          let o = i.clampSize(t);
          if (s === o) {
            return;
          }
          i.resize(e, o);
          let r = this._viewportWidth;
          let n = this._viewportHeight;
          if (!this._viewport.isVisible || r === 0 || n === 0) {
            this._syncScrollState();
            return;
          }
          this._paintOverlay();
          let l = o - s;
          let a = i.offsetOf(e);
          if (a >= n) {
            this._syncScrollState();
            return;
          }
          if (a + s >= n || a + o >= n) {
            this.paintContent(0, a, r, n - a);
            this._paintOverlay();
            this._syncScrollState();
            return;
          }
          let h = 0;
          let c = a + s;
          let d = r;
          let u = n - c;
          let f = 0;
          let _ = c + l;
          this._blitContent(this._canvas, h, c, d, u, f, _);
          if (o > 0) {
            this.paintContent(0, a, r, o);
          }
          if (this._stretchLastRow && this.pageHeight > this.bodyHeight) {
            let e = this._rowSections.count - 1;
            let t = this.headerHeight + this._rowSections.offsetOf(e);
            this.paintContent(0, t, r, n - t);
          } else if (l < 0) {
            this.paintContent(0, n + l, r, -l);
          }
          for (const m of ["corner-header", "column-header"]) {
            const t = S.getCellGroupsAtRow(this.dataModel, m, e);
            let i = { region: m, xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
            switch (m) {
              case "corner-header":
                i.xMin = 0;
                i.xMax = this.headerWidth;
                i.yMin = 0;
                i.yMax = this.headerHeight;
                break;
              case "column-header":
                i.xMin = this.headerWidth;
                i.xMax = this.headerWidth + this.bodyWidth;
                i.yMin = 0;
                i.yMax = this.headerHeight;
                break;
            }
            this._paintMergedCells(t, i, this._style.headerBackgroundColor);
          }
          this._paintOverlay();
          this._syncScrollState();
        }
        _scrollTo(e, t) {
          if (!this.dataModel) {
            return;
          }
          e = Math.max(0, Math.min(Math.floor(e), this.maxScrollX));
          t = Math.max(0, Math.min(Math.floor(t), this.maxScrollY));
          this._hScrollBar.value = e;
          this._vScrollBar.value = t;
          let i = e - this._scrollX;
          let s = t - this._scrollY;
          if (i === 0 && s === 0) {
            return;
          }
          if (!this._viewport.isVisible) {
            this._scrollX = e;
            this._scrollY = t;
            return;
          }
          let o = this._viewportWidth;
          let r = this._viewportHeight;
          if (o === 0 || r === 0) {
            this._scrollX = e;
            this._scrollY = t;
            return;
          }
          let n = this.headerWidth;
          let l = this.headerHeight;
          let a = o - n;
          let h = r - l;
          if (a <= 0 && h <= 0) {
            this._scrollX = e;
            this._scrollY = t;
            return;
          }
          let c = 0;
          if (i !== 0 && a > 0) {
            if (Math.abs(i) >= a) {
              c = a * r;
            } else {
              c = Math.abs(i) * r;
            }
          }
          let d = 0;
          if (s !== 0 && h > 0) {
            if (Math.abs(s) >= h) {
              d = o * h;
            } else {
              d = o * Math.abs(s);
            }
          }
          if (c + d >= o * r) {
            this._scrollX = e;
            this._scrollY = t;
            this.paintContent(0, 0, o, r);
            this._paintOverlay();
            return;
          }
          this._scrollY = t;
          if (s !== 0 && h > 0) {
            if (Math.abs(s) >= h) {
              this.paintContent(0, l, o, h);
            } else {
              const e = 0;
              const t = s < 0 ? l : l + s;
              const i = o;
              const n = h - Math.abs(s);
              this._blitContent(this._canvas, e, t, i, n, e, t - s);
              this.paintContent(0, s < 0 ? l : r - s, o, Math.abs(s));
              for (const s of ["body", "row-header"]) {
                const e = S.getCellGroupsAtRegion(this.dataModel, s);
                let t = { region: s, xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
                let i = undefined;
                switch (s) {
                  case "body":
                    t.xMin = this.headerWidth;
                    t.xMax = this.headerWidth + this.bodyWidth;
                    t.yMin = this.headerHeight;
                    t.yMax = this.headerHeight + this.bodyHeight;
                    i = this._style.backgroundColor;
                    break;
                  case "row-header":
                    t.xMin = 0;
                    t.xMax = this.headerWidth;
                    t.yMin = this.headerHeight;
                    t.yMax = this.headerHeight + this.bodyHeight;
                    i = this._style.headerBackgroundColor;
                    break;
                }
                this._paintMergedCells(e, t, i);
              }
            }
          }
          this._scrollX = e;
          if (i !== 0 && a > 0) {
            if (Math.abs(i) >= a) {
              this.paintContent(n, 0, a, r);
            } else {
              const e = i < 0 ? n : n + i;
              const t = 0;
              const s = a - Math.abs(i);
              const l = r;
              this._blitContent(this._canvas, e, t, s, l, e - i, t);
              this.paintContent(i < 0 ? n : o - i, 0, Math.abs(i), r);
              for (const i of ["body", "column-header"]) {
                const e = S.getCellGroupsAtRegion(this.dataModel, i);
                let t = { region: i, xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
                let s = undefined;
                switch (i) {
                  case "body":
                    t.xMin = this.headerWidth;
                    t.xMax = this.headerWidth + this.bodyWidth;
                    t.yMin = this.headerHeight;
                    t.yMax = this.headerHeight + this.bodyHeight;
                    s = this._style.backgroundColor;
                    break;
                  case "column-header":
                    t.xMin = this.headerWidth;
                    t.xMax = this.headerWidth + this.bodyWidth;
                    t.yMin = 0;
                    t.yMax = this.headerHeight;
                    s = this._style.headerBackgroundColor;
                    break;
                }
                this._paintMergedCells(e, t, s);
              }
            }
          }
          this._paintOverlay();
        }
        _blitContent(e, t, i, s, o, r, n) {
          t *= this._dpiRatio;
          i *= this._dpiRatio;
          s *= this._dpiRatio;
          o *= this._dpiRatio;
          r *= this._dpiRatio;
          n *= this._dpiRatio;
          this._canvasGC.save();
          this._canvasGC.setTransform(1, 0, 0, 1, 0, 0);
          this._canvasGC.drawImage(e, t, i, s, o, r, n, s, o);
          this._canvasGC.restore();
        }
        paintContent(e, t, i, s) {
          this._canvasGC.setTransform(this._dpiRatio, 0, 0, this._dpiRatio, 0, 0);
          this._bufferGC.setTransform(this._dpiRatio, 0, 0, this._dpiRatio, 0, 0);
          this._canvasGC.clearRect(e, t, i, s);
          this._drawVoidRegion(e, t, i, s);
          this._drawBodyRegion(e, t, i, s);
          this._drawRowHeaderRegion(e, t, i, s);
          this._drawColumnHeaderRegion(e, t, i, s);
          this.drawCornerHeaderRegion(e, t, i, s);
        }
        _fitBodyColumnHeaders(e, t, i) {
          const s = i === undefined ? e.columnCount("body") : i;
          for (let o = 0; o < s; o++) {
            const i = e.rowCount("column-header");
            let s = 0;
            for (let t = 0; t < i; t++) {
              const i = ee._getConfig(e, t, o, "column-header");
              const r = this._getCellTextWidth(i);
              s = Math.max(s, r);
            }
            this.resizeColumn("body", o, s + t);
          }
        }
        _fitRowColumnHeaders(e, t, i) {
          const s = i === undefined ? e.columnCount("row-header") : i;
          for (let o = 0; o < s; o++) {
            const i = e.rowCount("column-header");
            let s = 0;
            for (let t = 0; t < i; t++) {
              const i = ee._getConfig(e, t, o, "corner-header");
              const r = this._getCellTextWidth(i);
              s = Math.max(s, r);
            }
            this.resizeColumn("row-header", o, s + t);
          }
        }
        _paintOverlay() {
          this._overlayGC.setTransform(this._dpiRatio, 0, 0, this._dpiRatio, 0, 0);
          this._overlayGC.clearRect(0, 0, this._overlay.width, this._overlay.height);
          this._drawBodySelections();
          this._drawRowHeaderSelections();
          this._drawColumnHeaderSelections();
          this._drawCursor();
          this._drawShadows();
        }
        _drawVoidRegion(e, t, i, s) {
          let o = this._style.voidColor;
          if (!o) {
            return;
          }
          this._canvasGC.fillStyle = o;
          this._canvasGC.fillRect(e, t, i, s);
        }
        _drawBodyRegion(e, t, i, s) {
          let o = this._columnSections.length - this._scrollX;
          let r = this._rowSections.length - this._scrollY;
          if (o <= 0 || r <= 0) {
            return;
          }
          let n = this.headerWidth;
          let l = this.headerHeight;
          if (e + i <= n) {
            return;
          }
          if (t + s <= l) {
            return;
          }
          if (e >= n + o) {
            return;
          }
          if (t >= l + r) {
            return;
          }
          let a = this.bodyHeight;
          let h = this.bodyWidth;
          let c = this.pageHeight;
          let d = this.pageWidth;
          let u = Math.max(e, n);
          let f = Math.max(t, l);
          let _ = Math.min(e + i - 1, n + o - 1);
          let m = Math.min(t + s - 1, l + r - 1);
          let g = this._rowSections.indexOf(f - l + this._scrollY);
          let p = this._columnSections.indexOf(u - n + this._scrollX);
          let w = this._rowSections.indexOf(m - l + this._scrollY);
          let y = this._columnSections.indexOf(_ - n + this._scrollX);
          let x = this._rowSections.count - 1;
          let v = this._columnSections.count - 1;
          if (w < 0) {
            w = x;
          }
          if (y < 0) {
            y = v;
          }
          let C = this._columnSections.offsetOf(p) + n - this._scrollX;
          let M = this._rowSections.offsetOf(g) + l - this._scrollY;
          let b = 0;
          let H = 0;
          let R = new Array(w - g + 1);
          let z = new Array(y - p + 1);
          for (let S = g; S <= w; ++S) {
            let e = this._rowSections.sizeOf(S);
            R[S - g] = e;
            H += e;
          }
          for (let S = p; S <= y; ++S) {
            let e = this._columnSections.sizeOf(S);
            z[S - p] = e;
            b += e;
          }
          if (this._stretchLastRow && c > a && w === x) {
            let e = this.pageHeight - this.bodyHeight;
            R[R.length - 1] += e;
            H += e;
            m += e;
          }
          if (this._stretchLastColumn && d > h && y === v) {
            let e = this.pageWidth - this.bodyWidth;
            z[z.length - 1] += e;
            b += e;
            _ += e;
          }
          let O = {
            region: "body",
            xMin: u,
            yMin: f,
            xMax: _,
            yMax: m,
            x: C,
            y: M,
            width: b,
            height: H,
            row: g,
            column: p,
            rowSizes: R,
            columnSizes: z,
          };
          this._drawBackground(O, this._style.backgroundColor);
          this._drawRowBackground(O, this._style.rowBackgroundColor);
          this._drawColumnBackground(O, this._style.columnBackgroundColor);
          this._drawCells(O);
          this._drawHorizontalGridLines(O, this._style.horizontalGridLineColor || this._style.gridLineColor);
          this._drawVerticalGridLines(O, this._style.verticalGridLineColor || this._style.gridLineColor);
          const k = S.getCellGroupsAtRegion(this.dataModel, O.region).filter((e) => this.cellGroupInteresectsRegion(e, O));
          this._paintMergedCells(k, O, this._style.backgroundColor);
        }
        _drawRowHeaderRegion(e, t, i, s) {
          let o = this.headerWidth;
          let r = this.bodyHeight - this._scrollY;
          if (o <= 0 || r <= 0) {
            return;
          }
          let n = 0;
          let l = this.headerHeight;
          if (e + i <= n) {
            return;
          }
          if (t + s <= l) {
            return;
          }
          if (e >= n + o) {
            return;
          }
          if (t >= l + r) {
            return;
          }
          let a = this.bodyHeight;
          let h = this.pageHeight;
          let c = e;
          let d = Math.max(t, l);
          let u = Math.min(e + i - 1, n + o - 1);
          let f = Math.min(t + s - 1, l + r - 1);
          let _ = this._rowSections.indexOf(d - l + this._scrollY);
          let m = this._rowHeaderSections.indexOf(c);
          let g = this._rowSections.indexOf(f - l + this._scrollY);
          let p = this._rowHeaderSections.indexOf(u);
          let w = this._rowSections.count - 1;
          let y = this._rowHeaderSections.count - 1;
          if (g < 0) {
            g = w;
          }
          if (p < 0) {
            p = y;
          }
          let x = this._rowHeaderSections.offsetOf(m);
          let v = this._rowSections.offsetOf(_) + l - this._scrollY;
          let C = 0;
          let M = 0;
          let b = new Array(g - _ + 1);
          let H = new Array(p - m + 1);
          for (let S = _; S <= g; ++S) {
            let e = this._rowSections.sizeOf(S);
            b[S - _] = e;
            M += e;
          }
          for (let S = m; S <= p; ++S) {
            let e = this._rowHeaderSections.sizeOf(S);
            H[S - m] = e;
            C += e;
          }
          if (this._stretchLastRow && h > a && g === w) {
            let e = this.pageHeight - this.bodyHeight;
            b[b.length - 1] += e;
            M += e;
            f += e;
          }
          let R = {
            region: "row-header",
            xMin: c,
            yMin: d,
            xMax: u,
            yMax: f,
            x,
            y: v,
            width: C,
            height: M,
            row: _,
            column: m,
            rowSizes: b,
            columnSizes: H,
          };
          this._drawBackground(R, this._style.headerBackgroundColor);
          this._drawCells(R);
          this._drawHorizontalGridLines(R, this._style.headerHorizontalGridLineColor || this._style.headerGridLineColor);
          this._drawVerticalGridLines(R, this._style.headerVerticalGridLineColor || this._style.headerGridLineColor);
          const z = S.getCellGroupsAtRegion(this.dataModel, R.region).filter((e) => this.cellGroupInteresectsRegion(e, R));
          this._paintMergedCells(z, R, this._style.headerBackgroundColor);
        }
        _drawColumnHeaderRegion(e, t, i, s) {
          let o = this.bodyWidth - this._scrollX;
          let r = this.headerHeight;
          if (o <= 0 || r <= 0) {
            return;
          }
          let n = this.headerWidth;
          let l = 0;
          if (e + i <= n) {
            return;
          }
          if (t + s <= l) {
            return;
          }
          if (e >= n + o) {
            return;
          }
          if (t >= l + r) {
            return;
          }
          let a = this.bodyWidth;
          let h = this.pageWidth;
          let c = Math.max(e, n);
          let d = t;
          let u = Math.min(e + i - 1, n + o - 1);
          let f = Math.min(t + s - 1, l + r - 1);
          let _ = this._columnHeaderSections.indexOf(d);
          let m = this._columnSections.indexOf(c - n + this._scrollX);
          let g = this._columnHeaderSections.indexOf(f);
          let p = this._columnSections.indexOf(u - n + this._scrollX);
          let w = this._columnHeaderSections.count - 1;
          let y = this._columnSections.count - 1;
          if (g < 0) {
            g = w;
          }
          if (p < 0) {
            p = y;
          }
          let x = this._columnSections.offsetOf(m) + n - this._scrollX;
          let v = this._columnHeaderSections.offsetOf(_);
          let C = 0;
          let M = 0;
          let b = new Array(g - _ + 1);
          let H = new Array(p - m + 1);
          for (let S = _; S <= g; ++S) {
            let e = this._columnHeaderSections.sizeOf(S);
            b[S - _] = e;
            M += e;
          }
          for (let S = m; S <= p; ++S) {
            let e = this._columnSections.sizeOf(S);
            H[S - m] = e;
            C += e;
          }
          if (this._stretchLastColumn && h > a && p === y) {
            let e = this.pageWidth - this.bodyWidth;
            H[H.length - 1] += e;
            C += e;
            u += e;
          }
          let R = {
            region: "column-header",
            xMin: c,
            yMin: d,
            xMax: u,
            yMax: f,
            x,
            y: v,
            width: C,
            height: M,
            row: _,
            column: m,
            rowSizes: b,
            columnSizes: H,
          };
          this._drawBackground(R, this._style.headerBackgroundColor);
          this._drawCells(R);
          this._drawHorizontalGridLines(R, this._style.headerHorizontalGridLineColor || this._style.headerGridLineColor);
          this._drawVerticalGridLines(R, this._style.headerVerticalGridLineColor || this._style.headerGridLineColor);
          const z = S.getCellGroupsAtRegion(this.dataModel, R.region).filter((e) => this.cellGroupInteresectsRegion(e, R));
          this._paintMergedCells(z, R, this._style.headerBackgroundColor);
        }
        drawCornerHeaderRegion(e, t, i, s) {
          let o = this.headerWidth;
          let r = this.headerHeight;
          if (o <= 0 || r <= 0) {
            return;
          }
          let n = 0;
          let l = 0;
          if (e + i <= n) {
            return;
          }
          if (t + s <= l) {
            return;
          }
          if (e >= n + o) {
            return;
          }
          if (t >= l + r) {
            return;
          }
          let a = e;
          let h = t;
          let c = Math.min(e + i - 1, n + o - 1);
          let d = Math.min(t + s - 1, l + r - 1);
          let u = this._columnHeaderSections.indexOf(h);
          let f = this._rowHeaderSections.indexOf(a);
          let _ = this._columnHeaderSections.indexOf(d);
          let m = this._rowHeaderSections.indexOf(c);
          if (_ < 0) {
            _ = this._columnHeaderSections.count - 1;
          }
          if (m < 0) {
            m = this._rowHeaderSections.count - 1;
          }
          let g = this._rowHeaderSections.offsetOf(f);
          let p = this._columnHeaderSections.offsetOf(u);
          let w = 0;
          let y = 0;
          let x = new Array(_ - u + 1);
          let v = new Array(m - f + 1);
          for (let S = u; S <= _; ++S) {
            let e = this._columnHeaderSections.sizeOf(S);
            x[S - u] = e;
            y += e;
          }
          for (let S = f; S <= m; ++S) {
            let e = this._rowHeaderSections.sizeOf(S);
            v[S - f] = e;
            w += e;
          }
          let C = {
            region: "corner-header",
            xMin: a,
            yMin: h,
            xMax: c,
            yMax: d,
            x: g,
            y: p,
            width: w,
            height: y,
            row: u,
            column: f,
            rowSizes: x,
            columnSizes: v,
          };
          this._drawBackground(C, this._style.headerBackgroundColor);
          this._drawCells(C);
          this._drawHorizontalGridLines(C, this._style.headerHorizontalGridLineColor || this._style.headerGridLineColor);
          this._drawVerticalGridLines(C, this._style.headerVerticalGridLineColor || this._style.headerGridLineColor);
          const M = S.getCellGroupsAtRegion(this.dataModel, C.region).filter((e) => this.cellGroupInteresectsRegion(e, C));
          this._paintMergedCells(M, C, this._style.headerBackgroundColor);
        }
        _drawBackground(e, t) {
          if (!t) {
            return;
          }
          let { xMin: i, yMin: s, xMax: o, yMax: r } = e;
          this._canvasGC.fillStyle = t;
          this._canvasGC.fillRect(i, s, o - i + 1, r - s + 1);
        }
        _drawRowBackground(e, t) {
          if (!t) {
            return;
          }
          let i = Math.max(e.xMin, e.x);
          let s = Math.min(e.x + e.width - 1, e.xMax);
          for (let o = e.y, r = 0, n = e.rowSizes.length; r < n; ++r) {
            let n = e.rowSizes[r];
            if (n === 0) {
              continue;
            }
            let l = t(e.row + r);
            if (l) {
              let t = Math.max(e.yMin, o);
              let r = Math.min(o + n - 1, e.yMax);
              this._canvasGC.fillStyle = l;
              this._canvasGC.fillRect(i, t, s - i + 1, r - t + 1);
            }
            o += n;
          }
        }
        _drawColumnBackground(e, t) {
          if (!t) {
            return;
          }
          let i = Math.max(e.yMin, e.y);
          let s = Math.min(e.y + e.height - 1, e.yMax);
          for (let o = e.x, r = 0, n = e.columnSizes.length; r < n; ++r) {
            let n = e.columnSizes[r];
            if (n === 0) {
              continue;
            }
            let l = t(e.column + r);
            if (l) {
              let t = Math.max(e.xMin, o);
              let r = Math.min(o + n - 1, e.xMax);
              this._canvasGC.fillStyle = l;
              this._canvasGC.fillRect(t, i, r - t + 1, s - i + 1);
            }
            o += n;
          }
        }
        _getColumnSize(e, t) {
          if (e === "corner-header") {
            return this._rowHeaderSections.sizeOf(t);
          }
          return this.columnSize(e, t);
        }
        _getRowSize(e, t) {
          if (e === "corner-header") {
            return this._columnHeaderSections.sizeOf(t);
          }
          return this.rowSize(e, t);
        }
        _drawCells(e) {
          if (!this._dataModel) {
            return;
          }
          let t = { x: 0, y: 0, width: 0, height: 0, region: e.region, row: 0, column: 0, value: null, metadata: q.emptyMetadata };
          let i = -1;
          this._bufferGC.save();
          let s = new $(this._bufferGC);
          let o = 0;
          for (let n = e.x, l = 0, a = e.columnSizes.length; l < a; ++l) {
            let a = e.columnSizes[l];
            if (a === 0) {
              continue;
            }
            let h = e.column + l;
            t.x = n;
            t.width = a;
            t.column = h;
            for (let l = e.y, c = 0, d = e.rowSizes.length; c < d; ++c) {
              o = e.rowSizes[c];
              if (o === 0) {
                continue;
              }
              let d = e.row + c;
              i = S.getGroupIndex(this.dataModel, t.region, d, h);
              if (i !== -1) {
                l += o;
                continue;
              }
              s.clearRect(n, l, a, o);
              let u = ee._getCellValue(this.dataModel, e.region, d, h);
              let f = ee._getCellMetadata(this.dataModel, e.region, d, h);
              t.y = l;
              t.height = o;
              t.width = a;
              t.row = d;
              t.value = u;
              t.metadata = f;
              let _ = this._cellRenderers.get(t);
              s.save();
              try {
                if (_ instanceof k) {
                  if (_.isReady(t)) {
                    _.paint(s, t);
                  } else {
                    _.paintPlaceholder(s, t);
                    _.load(t).then(() => {
                      const t = d;
                      const i = d + 1;
                      const s = h;
                      const o = h + 1;
                      this.repaintRegion(e.region, t, s, i, o);
                    });
                  }
                } else {
                  _.paint(s, t);
                }
              } catch (r) {
                console.error(r);
              }
              s.restore();
              let m = Math.max(e.xMin, t.x);
              let g = Math.min(t.x + t.width - 1, e.xMax);
              let p = Math.max(e.yMin, t.y);
              let w = Math.min(t.y + t.height - 1, e.yMax);
              this._blitContent(this._buffer, m, p, g - m + 1, w - p + 1, m, p);
              l += o;
            }
            s.restore();
            n += a;
          }
          s.dispose();
          this._bufferGC.restore();
        }
        cellGroupInteresectsRegion(e, t) {
          const i = t.row;
          const s = t.row + t.rowSizes.length;
          const o = t.column;
          const r = t.column + t.columnSizes.length;
          const n = Math.min(e.r2, s) - Math.max(e.r1, i);
          const l = Math.min(e.c2, r) - Math.max(e.c1, o);
          return n >= 0 && l >= 0;
        }
        static _getCellValue(e, t, i, s) {
          try {
            return e.data(t, i, s);
          } catch (o) {
            console.error(o);
            return null;
          }
        }
        static _getCellMetadata(e, t, i, s) {
          try {
            return e.metadata(t, i, s);
          } catch (o) {
            console.error(o);
            return q.emptyMetadata;
          }
        }
        _paintMergedCells(e, t, i) {
          if (!this._dataModel) {
            return;
          }
          let s = { x: 0, y: 0, width: 0, height: 0, region: t.region, row: 0, column: 0, value: null, metadata: q.emptyMetadata };
          if (i) {
            this._canvasGC.fillStyle = i;
          }
          this._canvasGC.lineWidth = 1;
          this._bufferGC.save();
          let o = new $(this._bufferGC);
          for (const n of e) {
            let e = 0;
            for (let i = n.c1; i <= n.c2; i++) {
              e += this._getColumnSize(t.region, i);
            }
            let l = 0;
            for (let i = n.r1; i <= n.r2; i++) {
              l += this._getRowSize(t.region, i);
            }
            let a = ee._getCellValue(this.dataModel, t.region, n.r1, n.c1);
            let h = ee._getCellMetadata(this.dataModel, t.region, n.r1, n.c2);
            let c = 0;
            let d = 0;
            switch (t.region) {
              case "body":
                c = this._columnSections.offsetOf(n.c1) + this.headerWidth - this._scrollX;
                d = this._rowSections.offsetOf(n.r1) + this.headerHeight - this._scrollY;
                break;
              case "column-header":
                c = this._columnSections.offsetOf(n.c1) + this.headerWidth - this._scrollX;
                d = this._rowSections.offsetOf(n.r1);
                break;
              case "row-header":
                c = this._columnSections.offsetOf(n.c1);
                d = this._rowSections.offsetOf(n.r1) + this.headerHeight - this._scrollY;
                break;
              case "corner-header":
                c = this._columnSections.offsetOf(n.c1);
                d = this._rowSections.offsetOf(n.r1);
                break;
            }
            s.x = c;
            s.y = d;
            s.width = e;
            s.height = l;
            s.region = t.region;
            s.row = n.r1;
            s.column = n.c1;
            s.value = a;
            s.metadata = h;
            const u = Math.max(t.xMin, c);
            const f = Math.min(c + e - 2, t.xMax);
            const _ = Math.max(t.yMin, d);
            const m = Math.min(d + l - 2, t.yMax);
            if (f <= u || m <= _) {
              continue;
            }
            if (i) {
              this._canvasGC.fillRect(u, _, f - u + 1, m - _ + 1);
            }
            let g = this._cellRenderers.get(s);
            o.clearRect(s.x, s.y, e, l);
            o.save();
            try {
              if (g instanceof k) {
                if (g.isReady(s)) {
                  g.paint(o, s);
                } else {
                  g.paintPlaceholder(o, s);
                  const e = n.r1;
                  const i = n.r2;
                  const r = n.c1;
                  const l = n.c2;
                  g.load(s).then(() => {
                    this.repaintRegion(t.region, e, r, i, l);
                  });
                }
              } else {
                g.paint(o, s);
              }
            } catch (r) {
              console.error(r);
            }
            o.restore();
            this._blitContent(this._buffer, u, _, f - u + 1, m - _ + 1, u, _);
          }
          o.dispose();
          this._bufferGC.restore();
        }
        _drawHorizontalGridLines(e, t) {
          if (!t) {
            return;
          }
          const i = Math.max(e.xMin, e.x);
          const s = Math.min(e.x + e.width, e.xMax + 1);
          this._canvasGC.beginPath();
          this._canvasGC.lineWidth = 1;
          const o = this.bodyHeight;
          const r = this.pageHeight;
          let n = e.rowSizes.length;
          if (this._stretchLastRow && r > o) {
            if (e.row + n === this._rowSections.count) {
              n -= 1;
            }
          }
          for (let l = e.y, a = 0; a < n; ++a) {
            let t = e.rowSizes[a];
            if (t === 0) {
              continue;
            }
            let o = l + t - 1;
            if (o >= e.yMin && o <= e.yMax) {
              this._canvasGC.moveTo(i, o + 0.5);
              this._canvasGC.lineTo(s, o + 0.5);
            }
            l += t;
          }
          this._canvasGC.strokeStyle = t;
          this._canvasGC.stroke();
        }
        _drawVerticalGridLines(e, t) {
          if (!t) {
            return;
          }
          const i = Math.max(e.yMin, e.y);
          const s = Math.min(e.y + e.height, e.yMax + 1);
          this._canvasGC.beginPath();
          this._canvasGC.lineWidth = 1;
          const o = this.bodyWidth;
          const r = this.pageWidth;
          let n = e.columnSizes.length;
          if (this._stretchLastColumn && r > o) {
            if (e.column + n === this._columnSections.count) {
              n -= 1;
            }
          }
          for (let l = e.x, a = 0; a < n; ++a) {
            let t = e.columnSizes[a];
            if (t === 0) {
              continue;
            }
            let o = l + t - 1;
            if (o >= e.xMin && o <= e.xMax) {
              this._canvasGC.moveTo(o + 0.5, i);
              this._canvasGC.lineTo(o + 0.5, s);
            }
            l += t;
          }
          this._canvasGC.strokeStyle = t;
          this._canvasGC.stroke();
        }
        _drawBodySelections() {
          let e = this._selectionModel;
          if (!e || e.isEmpty) {
            return;
          }
          let t = this._style.selectionFillColor;
          let i = this._style.selectionBorderColor;
          if (!t && !i) {
            return;
          }
          let s = this._scrollX;
          let o = this._scrollY;
          let r = this._rowSections.indexOf(o);
          let n = this._columnSections.indexOf(s);
          if (r < 0 || n < 0) {
            return;
          }
          let l = this.bodyWidth;
          let a = this.bodyHeight;
          let h = this.pageWidth;
          let c = this.pageHeight;
          let d = this.headerWidth;
          let u = this.headerHeight;
          let f = this._rowSections.indexOf(o + c);
          let _ = this._columnSections.indexOf(s + h);
          let m = this._rowSections.count - 1;
          let g = this._columnSections.count - 1;
          f = f < 0 ? m : f;
          _ = _ < 0 ? g : _;
          let p = this._overlayGC;
          p.save();
          p.beginPath();
          p.rect(d, u, h, c);
          p.clip();
          if (t) {
            p.fillStyle = t;
          }
          if (i) {
            p.strokeStyle = i;
            p.lineWidth = 1;
          }
          for (let w of e.selections()) {
            if (w.r1 < r && w.r2 < r) {
              continue;
            }
            if (w.r1 > f && w.r2 > f) {
              continue;
            }
            if (w.c1 < n && w.c2 < n) {
              continue;
            }
            if (w.c1 > _ && w.c2 > _) {
              continue;
            }
            let e = Math.max(0, Math.min(w.r1, m));
            let y = Math.max(0, Math.min(w.c1, g));
            let x = Math.max(0, Math.min(w.r2, m));
            let v = Math.max(0, Math.min(w.c2, g));
            let C;
            if (e > x) {
              C = e;
              e = x;
              x = C;
            }
            if (y > v) {
              C = y;
              y = v;
              v = C;
            }
            const M = S.joinCellGroupWithMergedCellGroups(this.dataModel, { r1: e, r2: x, c1: y, c2: v }, "body");
            e = M.r1;
            x = M.r2;
            y = M.c1;
            v = M.c2;
            let b = this._columnSections.offsetOf(y) - s + d;
            let H = this._rowSections.offsetOf(e) - o + u;
            let R = this._columnSections.extentOf(v) - s + d;
            let z = this._rowSections.extentOf(x) - o + u;
            if (this._stretchLastColumn && h > l && v === g) {
              R = d + h - 1;
            }
            if (this._stretchLastRow && c > a && x === m) {
              z = u + c - 1;
            }
            b = Math.max(d - 1, b);
            H = Math.max(u - 1, H);
            R = Math.min(d + h + 1, R);
            z = Math.min(u + c + 1, z);
            if (R < b || z < H) {
              continue;
            }
            if (t) {
              p.fillRect(b, H, R - b + 1, z - H + 1);
            }
            if (i) {
              p.strokeRect(b - 0.5, H - 0.5, R - b + 1, z - H + 1);
            }
          }
          p.restore();
        }
        _drawRowHeaderSelections() {
          let e = this._selectionModel;
          if (!e || e.isEmpty || e.selectionMode == "column") {
            return;
          }
          if (this.headerWidth === 0 || this.pageHeight === 0) {
            return;
          }
          let t = this._style.headerSelectionFillColor;
          let i = this._style.headerSelectionBorderColor;
          if (!t && !i) {
            return;
          }
          let s = this._scrollY;
          let o = this.bodyHeight;
          let r = this.pageHeight;
          let n = this.headerWidth;
          let l = this.headerHeight;
          let a = this._rowSections;
          let h = this._overlayGC;
          h.save();
          h.beginPath();
          h.rect(0, l, n, r);
          h.clip();
          if (t) {
            h.fillStyle = t;
          }
          if (i) {
            h.strokeStyle = i;
            h.lineWidth = 1;
          }
          let c = a.count - 1;
          let d = a.indexOf(s);
          let u = a.indexOf(s + r - 1);
          u = u < 0 ? c : u;
          for (let f = d; f <= u; ++f) {
            if (!e.isRowSelected(f)) {
              continue;
            }
            let d = a.offsetOf(f) - s + l;
            let u = a.sizeOf(f);
            if (this._stretchLastRow && r > o && f === c) {
              u = l + r - d;
            }
            if (u === 0) {
              continue;
            }
            if (t) {
              h.fillRect(0, d, n, u);
            }
            if (i) {
              h.beginPath();
              h.moveTo(n - 0.5, d - 1);
              h.lineTo(n - 0.5, d + u);
              h.stroke();
            }
          }
          h.restore();
        }
        _drawColumnHeaderSelections() {
          let e = this._selectionModel;
          if (!e || e.isEmpty || e.selectionMode == "row") {
            return;
          }
          if (this.headerHeight === 0 || this.pageWidth === 0) {
            return;
          }
          let t = this._style.headerSelectionFillColor;
          let i = this._style.headerSelectionBorderColor;
          if (!t && !i) {
            return;
          }
          let s = this._scrollX;
          let o = this.bodyWidth;
          let r = this.pageWidth;
          let n = this.headerWidth;
          let l = this.headerHeight;
          let a = this._columnSections;
          let h = this._overlayGC;
          h.save();
          h.beginPath();
          h.rect(n, 0, r, l);
          h.clip();
          if (t) {
            h.fillStyle = t;
          }
          if (i) {
            h.strokeStyle = i;
            h.lineWidth = 1;
          }
          let c = a.count - 1;
          let d = a.indexOf(s);
          let u = a.indexOf(s + r - 1);
          u = u < 0 ? c : u;
          for (let f = d; f <= u; ++f) {
            if (!e.isColumnSelected(f)) {
              continue;
            }
            let d = a.offsetOf(f) - s + n;
            let u = a.sizeOf(f);
            if (this._stretchLastColumn && r > o && f === c) {
              u = n + r - d;
            }
            if (u === 0) {
              continue;
            }
            if (t) {
              h.fillRect(d, 0, u, l);
            }
            if (i) {
              h.beginPath();
              h.moveTo(d - 1, l - 0.5);
              h.lineTo(d + u, l - 0.5);
              h.stroke();
            }
          }
          h.restore();
        }
        _drawCursor() {
          let e = this._selectionModel;
          if (!e || e.isEmpty || e.selectionMode !== "cell") {
            return;
          }
          let t = this._style.cursorFillColor;
          let i = this._style.cursorBorderColor;
          if (!t && !i) {
            return;
          }
          let s = e.cursorRow;
          let o = e.cursorColumn;
          let r = this._rowSections.count - 1;
          let n = this._columnSections.count - 1;
          if (s < 0 || s > r) {
            return;
          }
          if (o < 0 || o > n) {
            return;
          }
          let l = s;
          let a = o;
          const h = S.joinCellGroupWithMergedCellGroups(this.dataModel, { r1: s, r2: l, c1: o, c2: a }, "body");
          s = h.r1;
          l = h.r2;
          o = h.c1;
          a = h.c2;
          let c = this._scrollX;
          let d = this._scrollY;
          let u = this.bodyWidth;
          let f = this.bodyHeight;
          let _ = this.pageWidth;
          let m = this.pageHeight;
          let g = this.headerWidth;
          let p = this.headerHeight;
          let w = this._viewportWidth;
          let y = this._viewportHeight;
          let x = this._columnSections.offsetOf(o) - c + g;
          let v = this._columnSections.extentOf(a) - c + g;
          let C = this._rowSections.offsetOf(s) - d + p;
          let M = this._rowSections.extentOf(l) - d + p;
          if (this._stretchLastColumn && _ > u && o === n) {
            v = w - 1;
          }
          if (this._stretchLastRow && m > f && s === r) {
            M = y - 1;
          }
          if (v < x || M < C) {
            return;
          }
          if (x - 1 >= w || C - 1 >= y || v + 1 < g || M + 1 < p) {
            return;
          }
          let b = this._overlayGC;
          b.save();
          b.beginPath();
          b.rect(g, p, _, m);
          b.clip();
          b.clearRect(x, C, v - x + 1, M - C + 1);
          if (t) {
            b.fillStyle = t;
            b.fillRect(x, C, v - x + 1, M - C + 1);
          }
          if (i) {
            b.strokeStyle = i;
            b.lineWidth = 2;
            b.strokeRect(x, C, v - x, M - C);
          }
          b.restore();
        }
        _drawShadows() {
          let e = this._style.scrollShadow;
          if (!e) {
            return;
          }
          let t = this._scrollX;
          let i = this._scrollY;
          let s = this.maxScrollX;
          let o = this.maxScrollY;
          let r = this.headerWidth;
          let n = this.headerHeight;
          let l = this.pageWidth;
          let a = this.pageHeight;
          let h = this._viewportWidth;
          let c = this._viewportHeight;
          let d = this.bodyWidth;
          let u = this.bodyHeight;
          if (this._stretchLastRow && a > u) {
            u = a;
          }
          if (this._stretchLastColumn && l > d) {
            d = l;
          }
          let f = this._overlayGC;
          f.save();
          if (i > 0) {
            let i = 0;
            let s = n;
            let o = 0;
            let a = s + e.size;
            let h = f.createLinearGradient(i, s, o, a);
            h.addColorStop(0, e.color1);
            h.addColorStop(0.5, e.color2);
            h.addColorStop(1, e.color3);
            let c = 0;
            let u = n;
            let _ = r + Math.min(l, d - t);
            let m = e.size;
            f.fillStyle = h;
            f.fillRect(c, u, _, m);
          }
          if (t > 0) {
            let t = r;
            let s = 0;
            let o = t + e.size;
            let l = 0;
            let h = f.createLinearGradient(t, s, o, l);
            h.addColorStop(0, e.color1);
            h.addColorStop(0.5, e.color2);
            h.addColorStop(1, e.color3);
            let c = r;
            let d = 0;
            let _ = e.size;
            let m = n + Math.min(a, u - i);
            f.fillStyle = h;
            f.fillRect(c, d, _, m);
          }
          if (i < o) {
            let i = 0;
            let s = c;
            let o = 0;
            let n = c - e.size;
            let a = f.createLinearGradient(i, s, o, n);
            a.addColorStop(0, e.color1);
            a.addColorStop(0.5, e.color2);
            a.addColorStop(1, e.color3);
            let h = 0;
            let u = c - e.size;
            let _ = r + Math.min(l, d - t);
            let m = e.size;
            f.fillStyle = a;
            f.fillRect(h, u, _, m);
          }
          if (t < s) {
            let t = h;
            let s = 0;
            let o = h - e.size;
            let r = 0;
            let l = f.createLinearGradient(t, s, o, r);
            l.addColorStop(0, e.color1);
            l.addColorStop(0.5, e.color2);
            l.addColorStop(1, e.color3);
            let c = h - e.size;
            let d = 0;
            let _ = e.size;
            let m = n + Math.min(a, u - i);
            f.fillStyle = l;
            f.fillRect(c, d, _, m);
          }
          f.restore();
        }
      }
      (function (e) {
        function t(e) {
          if (e.value === null || e.value === undefined) {
            return "";
          }
          return String(e.value);
        }
        e.copyFormatGeneric = t;
        e.defaultStyle = {
          voidColor: "#F3F3F3",
          backgroundColor: "#FFFFFF",
          gridLineColor: "rgba(20, 20, 20, 0.15)",
          headerBackgroundColor: "#F3F3F3",
          headerGridLineColor: "rgba(20, 20, 20, 0.25)",
          selectionFillColor: "rgba(49, 119, 229, 0.2)",
          selectionBorderColor: "rgba(0, 107, 247, 1.0)",
          cursorBorderColor: "rgba(0, 107, 247, 1.0)",
          headerSelectionFillColor: "rgba(20, 20, 20, 0.1)",
          headerSelectionBorderColor: "rgba(0, 107, 247, 1.0)",
          scrollShadow: { size: 10, color1: "rgba(0, 0, 0, 0.20)", color2: "rgba(0, 0, 0, 0.05)", color3: "rgba(0, 0, 0, 0.00)" },
        };
        e.defaultSizes = { rowHeight: 20, columnWidth: 64, rowHeaderWidth: 64, columnHeaderHeight: 20 };
        e.minimumSizes = { rowHeight: 20, columnWidth: 10, rowHeaderWidth: 10, columnHeaderHeight: 20 };
        e.defaultCopyConfig = { separator: "\t", format: t, headers: "none", warningThreshold: 1e6 };
      })(ee || (ee = {}));
      var te;
      (function (e) {
        e.ScrollRequest = new m.ConflatableMessage("scroll-request");
        e.OverlayPaintRequest = new m.ConflatableMessage("overlay-paint-request");
        function t() {
          let e = document.createElement("canvas");
          e.width = 0;
          e.height = 0;
          return e;
        }
        e.createCanvas = t;
        function i(e, t) {
          const i = S.getCellGroupsAtRegion(e, t);
          return i.length > 0;
        }
        e.regionHasMergedCells = i;
        class s extends m.ConflatableMessage {
          constructor(e, t, i, s, o) {
            super("paint-request");
            this._region = e;
            this._r1 = t;
            this._c1 = i;
            this._r2 = s;
            this._c2 = o;
          }
          get region() {
            return this._region;
          }
          get r1() {
            return this._r1;
          }
          get c1() {
            return this._c1;
          }
          get r2() {
            return this._r2;
          }
          get c2() {
            return this._c2;
          }
          conflate(e) {
            if (this._region === "all") {
              return true;
            }
            if (e._region === "all") {
              this._region = "all";
              return true;
            }
            if (this._region !== e._region) {
              return false;
            }
            this._r1 = Math.min(this._r1, e._r1);
            this._c1 = Math.min(this._c1, e._c1);
            this._r2 = Math.max(this._r2, e._r2);
            this._c2 = Math.max(this._c2, e._c2);
            return true;
          }
        }
        e.PaintRequest = s;
        class o extends m.ConflatableMessage {
          constructor(e, t, i) {
            super("row-resize-request");
            this._region = e;
            this._index = t;
            this._size = i;
          }
          get region() {
            return this._region;
          }
          get index() {
            return this._index;
          }
          get size() {
            return this._size;
          }
          conflate(e) {
            if (this._region !== e._region || this._index !== e._index) {
              return false;
            }
            this._size = e._size;
            return true;
          }
        }
        e.RowResizeRequest = o;
        class r extends m.ConflatableMessage {
          constructor(e, t, i) {
            super("column-resize-request");
            this._region = e;
            this._index = t;
            this._size = i;
          }
          get region() {
            return this._region;
          }
          get index() {
            return this._index;
          }
          get size() {
            return this._size;
          }
          conflate(e) {
            if (this._region !== e._region || this._index !== e._index) {
              return false;
            }
            this._size = e._size;
            return true;
          }
        }
        e.ColumnResizeRequest = r;
      })(te || (te = {}));
      class ie extends q {
        constructor(e) {
          super();
          let t = se.splitFields(e.schema);
          this._data = e.data;
          this._bodyFields = t.bodyFields;
          this._headerFields = t.headerFields;
          this._missingValues = se.createMissingMap(e.schema);
        }
        rowCount(e) {
          if (e === "body") {
            return this._data.length;
          }
          return 1;
        }
        columnCount(e) {
          if (e === "body") {
            return this._bodyFields.length;
          }
          return this._headerFields.length;
        }
        data(e, t, i) {
          let s;
          let o;
          switch (e) {
            case "body":
              s = this._bodyFields[i];
              o = this._data[t][s.name];
              break;
            case "column-header":
              s = this._bodyFields[i];
              o = s.title || s.name;
              break;
            case "row-header":
              s = this._headerFields[i];
              o = this._data[t][s.name];
              break;
            case "corner-header":
              s = this._headerFields[i];
              o = s.title || s.name;
              break;
            default:
              throw "unreachable";
          }
          let r = this._missingValues !== null && typeof o === "string" && this._missingValues[o] === true;
          return r ? null : o;
        }
        metadata(e, t, i) {
          if (e === "body" || e === "column-header") {
            return this._bodyFields[i];
          }
          return this._headerFields[i];
        }
      }
      var se;
      (function (e) {
        function t(e) {
          let t;
          if (e.primaryKey === undefined) {
            t = [];
          } else if (typeof e.primaryKey === "string") {
            t = [e.primaryKey];
          } else {
            t = e.primaryKey;
          }
          let i = [];
          let s = [];
          for (let o of e.fields) {
            if (t.indexOf(o.name) === -1) {
              i.push(o);
            } else {
              s.push(o);
            }
          }
          return { bodyFields: i, headerFields: s };
        }
        e.splitFields = t;
        function i(e) {
          if (!e.missingValues || e.missingValues.length === 0) {
            return null;
          }
          let t = Object.create(null);
          for (let i of e.missingValues) {
            t[i] = true;
          }
          return t;
        }
        e.createMissingMap = i;
      })(se || (se = {}));
      const oe = /^(\d+(\.\d+)?)%$/;
      const re = /^(\d+(\.\d+)?)px$/;
      class ne extends k {
        constructor(e = {}) {
          super();
          this.backgroundColor = e.backgroundColor || "";
          this.textColor = e.textColor || "#000000";
          this.placeholder = e.placeholder || "...";
          this.width = e.width || "";
          this.height = e.height === undefined ? "100%" : e.height;
        }
        isReady(e) {
          return !e.value || ne.dataCache.get(e.value) !== undefined;
        }
        async load(e) {
          if (!e.value) {
            return;
          }
          const t = e.value;
          const i = new p.PromiseDelegate();
          ne.dataCache.set(t, undefined);
          const s = new Image();
          s.onload = () => {
            ne.dataCache.set(t, s);
            i.resolve();
          };
          s.src = t;
          return i.promise;
        }
        paintPlaceholder(e, t) {
          this.drawBackground(e, t);
          this.drawPlaceholder(e, t);
        }
        paint(e, t) {
          this.drawBackground(e, t);
          this.drawImage(e, t);
        }
        drawBackground(e, t) {
          const i = x.resolveOption(this.backgroundColor, t);
          if (!i) {
            return;
          }
          e.fillStyle = i;
          e.fillRect(t.x, t.y, t.width, t.height);
        }
        drawPlaceholder(e, t) {
          const i = x.resolveOption(this.placeholder, t);
          const s = x.resolveOption(this.textColor, t);
          const o = t.x + t.width / 2;
          const r = t.y + t.height / 2;
          e.fillStyle = s;
          e.fillText(i, o, r);
        }
        drawImage(e, t) {
          if (!t.value) {
            return;
          }
          const i = ne.dataCache.get(t.value);
          if (!i) {
            return this.drawPlaceholder(e, t);
          }
          const s = x.resolveOption(this.width, t);
          const o = x.resolveOption(this.height, t);
          if (!s && !o) {
            e.drawImage(i, t.x, t.y);
            return;
          }
          let r = i.width;
          let n = i.height;
          let l;
          let a;
          let h;
          let c;
          if ((l = s.match(oe))) {
            r = (parseFloat(l[1]) / 100) * t.width;
          } else if ((a = s.match(re))) {
            r = parseFloat(a[1]);
          }
          if ((h = o.match(oe))) {
            n = (parseFloat(h[1]) / 100) * t.height;
          } else if ((c = o.match(re))) {
            n = parseFloat(c[1]);
          }
          if (!s) {
            r = (i.width / i.height) * n;
          }
          if (!o) {
            n = (i.height / i.width) * r;
          }
          e.drawImage(i, t.x, t.y, r, n);
        }
      }
      ne.dataCache = new Map();
    },
  },
]);
