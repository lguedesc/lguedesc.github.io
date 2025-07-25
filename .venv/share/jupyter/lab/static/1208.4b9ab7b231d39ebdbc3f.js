"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1208],
  {
    91208: (e, t, r) => {
      r.r(t);
      r.d(t, {
        DefaultBufferLength: () => n,
        IterMode: () => d,
        MountedTree: () => o,
        NodeProp: () => l,
        NodeSet: () => u,
        NodeType: () => h,
        NodeWeakMap: () => E,
        Parser: () => j,
        Tree: () => c,
        TreeBuffer: () => m,
        TreeCursor: () => I,
        TreeFragment: () => O,
        parseMixed: () => D,
      });
      const n = 1024;
      let i = 0;
      class s {
        constructor(e, t) {
          this.from = e;
          this.to = t;
        }
      }
      class l {
        constructor(e = {}) {
          this.id = i++;
          this.perNode = !!e.perNode;
          this.deserialize =
            e.deserialize ||
            (() => {
              throw new Error("This node type doesn't define a deserialize function");
            });
        }
        add(e) {
          if (this.perNode) throw new RangeError("Can't add per-node props to node types");
          if (typeof e != "function") e = h.match(e);
          return (t) => {
            let r = e(t);
            return r === undefined ? null : [this, r];
          };
        }
      }
      l.closedBy = new l({ deserialize: (e) => e.split(" ") });
      l.openedBy = new l({ deserialize: (e) => e.split(" ") });
      l.group = new l({ deserialize: (e) => e.split(" ") });
      l.isolate = new l({
        deserialize: (e) => {
          if (e && e != "rtl" && e != "ltr" && e != "auto") throw new RangeError("Invalid value for isolate: " + e);
          return e || "auto";
        },
      });
      l.contextHash = new l({ perNode: true });
      l.lookAhead = new l({ perNode: true });
      l.mounted = new l({ perNode: true });
      class o {
        constructor(e, t, r) {
          this.tree = e;
          this.overlay = t;
          this.parser = r;
        }
        static get(e) {
          return e && e.props && e.props[l.mounted.id];
        }
      }
      const f = Object.create(null);
      class h {
        constructor(e, t, r, n = 0) {
          this.name = e;
          this.props = t;
          this.id = r;
          this.flags = n;
        }
        static define(e) {
          let t = e.props && e.props.length ? Object.create(null) : f;
          let r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0);
          let n = new h(e.name || "", t, e.id, r);
          if (e.props)
            for (let i of e.props) {
              if (!Array.isArray(i)) i = i(n);
              if (i) {
                if (i[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
                t[i[0].id] = i[1];
              }
            }
          return n;
        }
        prop(e) {
          return this.props[e.id];
        }
        get isTop() {
          return (this.flags & 1) > 0;
        }
        get isSkipped() {
          return (this.flags & 2) > 0;
        }
        get isError() {
          return (this.flags & 4) > 0;
        }
        get isAnonymous() {
          return (this.flags & 8) > 0;
        }
        is(e) {
          if (typeof e == "string") {
            if (this.name == e) return true;
            let t = this.prop(l.group);
            return t ? t.indexOf(e) > -1 : false;
          }
          return this.id == e;
        }
        static match(e) {
          let t = Object.create(null);
          for (let r in e) for (let n of r.split(" ")) t[n] = e[r];
          return (e) => {
            for (let r = e.prop(l.group), n = -1; n < (r ? r.length : 0); n++) {
              let i = t[n < 0 ? e.name : r[n]];
              if (i) return i;
            }
          };
        }
      }
      h.none = new h("", Object.create(null), 0, 8);
      class u {
        constructor(e) {
          this.types = e;
          for (let t = 0; t < e.length; t++)
            if (e[t].id != t) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
        }
        extend(...e) {
          let t = [];
          for (let r of this.types) {
            let n = null;
            for (let t of e) {
              let e = t(r);
              if (e) {
                if (!n) n = Object.assign({}, r.props);
                n[e[0].id] = e[1];
              }
            }
            t.push(n ? new h(r.name, n, r.id, r.flags) : r);
          }
          return new u(t);
        }
      }
      const a = new WeakMap(),
        p = new WeakMap();
      var d;
      (function (e) {
        e[(e["ExcludeBuffers"] = 1)] = "ExcludeBuffers";
        e[(e["IncludeAnonymous"] = 2)] = "IncludeAnonymous";
        e[(e["IgnoreMounts"] = 4)] = "IgnoreMounts";
        e[(e["IgnoreOverlays"] = 8)] = "IgnoreOverlays";
      })(d || (d = {}));
      class c {
        constructor(e, t, r, n, i) {
          this.type = e;
          this.children = t;
          this.positions = r;
          this.length = n;
          this.props = null;
          if (i && i.length) {
            this.props = Object.create(null);
            for (let [e, t] of i) this.props[typeof e == "number" ? e : e.id] = t;
          }
        }
        toString() {
          let e = o.get(this);
          if (e && !e.overlay) return e.tree.toString();
          let t = "";
          for (let r of this.children) {
            let e = r.toString();
            if (e) {
              if (t) t += ",";
              t += e;
            }
          }
          return !this.type.name
            ? t
            : (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "");
        }
        cursor(e = 0) {
          return new I(this.topNode, e);
        }
        cursorAt(e, t = 0, r = 0) {
          let n = a.get(this) || this.topNode;
          let i = new I(n);
          i.moveTo(e, t);
          a.set(this, i._tree);
          return i;
        }
        get topNode() {
          return new w(this, 0, 0, null);
        }
        resolve(e, t = 0) {
          let r = x(a.get(this) || this.topNode, e, t, false);
          a.set(this, r);
          return r;
        }
        resolveInner(e, t = 0) {
          let r = x(p.get(this) || this.topNode, e, t, true);
          p.set(this, r);
          return r;
        }
        resolveStack(e, t = 0) {
          return N(this, e, t);
        }
        iterate(e) {
          let { enter: t, leave: r, from: n = 0, to: i = this.length } = e;
          let s = e.mode || 0,
            l = (s & d.IncludeAnonymous) > 0;
          for (let o = this.cursor(s | d.IncludeAnonymous); ; ) {
            let e = false;
            if (o.from <= i && o.to >= n && ((!l && o.type.isAnonymous) || t(o) !== false)) {
              if (o.firstChild()) continue;
              e = true;
            }
            for (;;) {
              if (e && r && (l || !o.type.isAnonymous)) r(o);
              if (o.nextSibling()) break;
              if (!o.parent()) return;
              e = true;
            }
          }
        }
        prop(e) {
          return !e.perNode ? this.type.prop(e) : this.props ? this.props[e.id] : undefined;
        }
        get propValues() {
          let e = [];
          if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
          return e;
        }
        balance(e = {}) {
          return this.children.length <= 8
            ? this
            : P(
                h.none,
                this.children,
                this.positions,
                0,
                this.children.length,
                0,
                this.length,
                (e, t, r) => new c(this.type, e, t, r, this.propValues),
                e.makeTree || ((e, t, r) => new c(h.none, e, t, r))
              );
        }
        static build(e) {
          return T(e);
        }
      }
      c.empty = new c(h.none, [], [], 0);
      class g {
        constructor(e, t) {
          this.buffer = e;
          this.index = t;
        }
        get id() {
          return this.buffer[this.index - 4];
        }
        get start() {
          return this.buffer[this.index - 3];
        }
        get end() {
          return this.buffer[this.index - 2];
        }
        get size() {
          return this.buffer[this.index - 1];
        }
        get pos() {
          return this.index;
        }
        next() {
          this.index -= 4;
        }
        fork() {
          return new g(this.buffer, this.index);
        }
      }
      class m {
        constructor(e, t, r) {
          this.buffer = e;
          this.length = t;
          this.set = r;
        }
        get type() {
          return h.none;
        }
        toString() {
          let e = [];
          for (let t = 0; t < this.buffer.length; ) {
            e.push(this.childString(t));
            t = this.buffer[t + 3];
          }
          return e.join(",");
        }
        childString(e) {
          let t = this.buffer[e],
            r = this.buffer[e + 3];
          let n = this.set.types[t],
            i = n.name;
          if (/\W/.test(i) && !n.isError) i = JSON.stringify(i);
          e += 4;
          if (r == e) return i;
          let s = [];
          while (e < r) {
            s.push(this.childString(e));
            e = this.buffer[e + 3];
          }
          return i + "(" + s.join(",") + ")";
        }
        findChild(e, t, r, n, i) {
          let { buffer: s } = this,
            l = -1;
          for (let o = e; o != t; o = s[o + 3]) {
            if (b(i, n, s[o + 1], s[o + 2])) {
              l = o;
              if (r > 0) break;
            }
          }
          return l;
        }
        slice(e, t, r) {
          let n = this.buffer;
          let i = new Uint16Array(t - e),
            s = 0;
          for (let l = e, o = 0; l < t; ) {
            i[o++] = n[l++];
            i[o++] = n[l++] - r;
            let t = (i[o++] = n[l++] - r);
            i[o++] = n[l++] - e;
            s = Math.max(s, t);
          }
          return new m(i, s, this.set);
        }
      }
      function b(e, t, r, n) {
        switch (e) {
          case -2:
            return r < t;
          case -1:
            return n >= t && r < t;
          case 0:
            return r < t && n > t;
          case 1:
            return r <= t && n > t;
          case 2:
            return n > t;
          case 4:
            return true;
        }
      }
      function x(e, t, r, n) {
        var i;
        while (e.from == e.to || (r < 1 ? e.from >= t : e.from > t) || (r > -1 ? e.to <= t : e.to < t)) {
          let t = !n && e instanceof w && e.index < 0 ? null : e.parent;
          if (!t) return e;
          e = t;
        }
        let s = n ? 0 : d.IgnoreOverlays;
        if (n)
          for (let l = e, o = l.parent; o; l = o, o = l.parent) {
            if (l instanceof w && l.index < 0 && ((i = o.enter(t, r, s)) === null || i === void 0 ? void 0 : i.from) != l.from) e = o;
          }
        for (;;) {
          let n = e.enter(t, r, s);
          if (!n) return e;
          e = n;
        }
      }
      class y {
        cursor(e = 0) {
          return new I(this, e);
        }
        getChild(e, t = null, r = null) {
          let n = v(this, e, t, r);
          return n.length ? n[0] : null;
        }
        getChildren(e, t = null, r = null) {
          return v(this, e, t, r);
        }
        resolve(e, t = 0) {
          return x(this, e, t, false);
        }
        resolveInner(e, t = 0) {
          return x(this, e, t, true);
        }
        matchContext(e) {
          return _(this, e);
        }
        enterUnfinishedNodesBefore(e) {
          let t = this.childBefore(e),
            r = this;
          while (t) {
            let e = t.lastChild;
            if (!e || e.to != t.to) break;
            if (e.type.isError && e.from == e.to) {
              r = t;
              t = e.prevSibling;
            } else {
              t = e;
            }
          }
          return r;
        }
        get node() {
          return this;
        }
        get next() {
          return this.parent;
        }
      }
      class w extends y {
        constructor(e, t, r, n) {
          super();
          this._tree = e;
          this.from = t;
          this.index = r;
          this._parent = n;
        }
        get type() {
          return this._tree.type;
        }
        get name() {
          return this._tree.type.name;
        }
        get to() {
          return this.from + this._tree.length;
        }
        nextChild(e, t, r, n, i = 0) {
          for (let s = this; ; ) {
            for (let { children: l, positions: f } = s._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
              let h = l[e],
                u = f[e] + s.from;
              if (!b(n, r, u, u + h.length)) continue;
              if (h instanceof m) {
                if (i & d.ExcludeBuffers) continue;
                let l = h.findChild(0, h.buffer.length, t, r - u, n);
                if (l > -1) return new A(new k(s, h, e, u), null, l);
              } else if (i & d.IncludeAnonymous || !h.type.isAnonymous || B(h)) {
                let l;
                if (!(i & d.IgnoreMounts) && (l = o.get(h)) && !l.overlay) return new w(l.tree, u, e, s);
                let f = new w(h, u, e, s);
                return i & d.IncludeAnonymous || !f.type.isAnonymous ? f : f.nextChild(t < 0 ? h.children.length - 1 : 0, t, r, n);
              }
            }
            if (i & d.IncludeAnonymous || !s.type.isAnonymous) return null;
            if (s.index >= 0) e = s.index + t;
            else e = t < 0 ? -1 : s._parent._tree.children.length;
            s = s._parent;
            if (!s) return null;
          }
        }
        get firstChild() {
          return this.nextChild(0, 1, 0, 4);
        }
        get lastChild() {
          return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
        }
        childAfter(e) {
          return this.nextChild(0, 1, e, 2);
        }
        childBefore(e) {
          return this.nextChild(this._tree.children.length - 1, -1, e, -2);
        }
        enter(e, t, r = 0) {
          let n;
          if (!(r & d.IgnoreOverlays) && (n = o.get(this._tree)) && n.overlay) {
            let r = e - this.from;
            for (let { from: e, to: i } of n.overlay) {
              if ((t > 0 ? e <= r : e < r) && (t < 0 ? i >= r : i > r)) return new w(n.tree, n.overlay[0].from + this.from, -1, this);
            }
          }
          return this.nextChild(0, 1, e, t, r);
        }
        nextSignificantParent() {
          let e = this;
          while (e.type.isAnonymous && e._parent) e = e._parent;
          return e;
        }
        get parent() {
          return this._parent ? this._parent.nextSignificantParent() : null;
        }
        get nextSibling() {
          return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
        }
        get prevSibling() {
          return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
        }
        get tree() {
          return this._tree;
        }
        toTree() {
          return this._tree;
        }
        toString() {
          return this._tree.toString();
        }
      }
      function v(e, t, r, n) {
        let i = e.cursor(),
          s = [];
        if (!i.firstChild()) return s;
        if (r != null)
          for (let l = false; !l; ) {
            l = i.type.is(r);
            if (!i.nextSibling()) return s;
          }
        for (;;) {
          if (n != null && i.type.is(n)) return s;
          if (i.type.is(t)) s.push(i.node);
          if (!i.nextSibling()) return n == null ? s : [];
        }
      }
      function _(e, t, r = t.length - 1) {
        for (let n = e.parent; r >= 0; n = n.parent) {
          if (!n) return false;
          if (!n.type.isAnonymous) {
            if (t[r] && t[r] != n.name) return false;
            r--;
          }
        }
        return true;
      }
      class k {
        constructor(e, t, r, n) {
          this.parent = e;
          this.buffer = t;
          this.index = r;
          this.start = n;
        }
      }
      class A extends y {
        get name() {
          return this.type.name;
        }
        get from() {
          return this.context.start + this.context.buffer.buffer[this.index + 1];
        }
        get to() {
          return this.context.start + this.context.buffer.buffer[this.index + 2];
        }
        constructor(e, t, r) {
          super();
          this.context = e;
          this._parent = t;
          this.index = r;
          this.type = e.buffer.set.types[e.buffer.buffer[r]];
        }
        child(e, t, r) {
          let { buffer: n } = this.context;
          let i = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, r);
          return i < 0 ? null : new A(this.context, this, i);
        }
        get firstChild() {
          return this.child(1, 0, 4);
        }
        get lastChild() {
          return this.child(-1, 0, 4);
        }
        childAfter(e) {
          return this.child(1, e, 2);
        }
        childBefore(e) {
          return this.child(-1, e, -2);
        }
        enter(e, t, r = 0) {
          if (r & d.ExcludeBuffers) return null;
          let { buffer: n } = this.context;
          let i = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
          return i < 0 ? null : new A(this.context, this, i);
        }
        get parent() {
          return this._parent || this.context.parent.nextSignificantParent();
        }
        externalSibling(e) {
          return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
        }
        get nextSibling() {
          let { buffer: e } = this.context;
          let t = e.buffer[this.index + 3];
          if (t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)) return new A(this.context, this._parent, t);
          return this.externalSibling(1);
        }
        get prevSibling() {
          let { buffer: e } = this.context;
          let t = this._parent ? this._parent.index + 4 : 0;
          if (this.index == t) return this.externalSibling(-1);
          return new A(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
        }
        get tree() {
          return null;
        }
        toTree() {
          let e = [],
            t = [];
          let { buffer: r } = this.context;
          let n = this.index + 4,
            i = r.buffer[this.index + 3];
          if (i > n) {
            let s = r.buffer[this.index + 1];
            e.push(r.slice(n, i, s));
            t.push(0);
          }
          return new c(this.type, e, t, this.to - this.from);
        }
        toString() {
          return this.context.buffer.childString(this.index);
        }
      }
      function C(e) {
        if (!e.length) return null;
        let t = 0,
          r = e[0];
        for (let s = 1; s < e.length; s++) {
          let n = e[s];
          if (n.from > r.from || n.to < r.to) {
            r = n;
            t = s;
          }
        }
        let n = r instanceof w && r.index < 0 ? null : r.parent;
        let i = e.slice();
        if (n) i[t] = n;
        else i.splice(t, 1);
        return new S(i, r);
      }
      class S {
        constructor(e, t) {
          this.heads = e;
          this.node = t;
        }
        get next() {
          return C(this.heads);
        }
      }
      function N(e, t, r) {
        let n = e.resolveInner(t, r),
          i = null;
        for (let s = n instanceof w ? n : n.context.parent; s; s = s.parent) {
          if (s.index < 0) {
            let e = s.parent;
            (i || (i = [n])).push(e.resolve(t, r));
            s = e;
          } else {
            let e = o.get(s.tree);
            if (e && e.overlay && e.overlay[0].from <= t && e.overlay[e.overlay.length - 1].to >= t) {
              let l = new w(e.tree, e.overlay[0].from + s.from, -1, s);
              (i || (i = [n])).push(x(l, t, r, false));
            }
          }
        }
        return i ? C(i) : n;
      }
      class I {
        get name() {
          return this.type.name;
        }
        constructor(e, t = 0) {
          this.mode = t;
          this.buffer = null;
          this.stack = [];
          this.index = 0;
          this.bufferNode = null;
          if (e instanceof w) {
            this.yieldNode(e);
          } else {
            this._tree = e.context.parent;
            this.buffer = e.context;
            for (let t = e._parent; t; t = t._parent) this.stack.unshift(t.index);
            this.bufferNode = e;
            this.yieldBuf(e.index);
          }
        }
        yieldNode(e) {
          if (!e) return false;
          this._tree = e;
          this.type = e.type;
          this.from = e.from;
          this.to = e.to;
          return true;
        }
        yieldBuf(e, t) {
          this.index = e;
          let { start: r, buffer: n } = this.buffer;
          this.type = t || n.set.types[n.buffer[e]];
          this.from = r + n.buffer[e + 1];
          this.to = r + n.buffer[e + 2];
          return true;
        }
        yield(e) {
          if (!e) return false;
          if (e instanceof w) {
            this.buffer = null;
            return this.yieldNode(e);
          }
          this.buffer = e.context;
          return this.yieldBuf(e.index, e.type);
        }
        toString() {
          return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
        }
        enterChild(e, t, r) {
          if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, r, this.mode));
          let { buffer: n } = this.buffer;
          let i = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, r);
          if (i < 0) return false;
          this.stack.push(this.index);
          return this.yieldBuf(i);
        }
        firstChild() {
          return this.enterChild(1, 0, 4);
        }
        lastChild() {
          return this.enterChild(-1, 0, 4);
        }
        childAfter(e) {
          return this.enterChild(1, e, 2);
        }
        childBefore(e) {
          return this.enterChild(-1, e, -2);
        }
        enter(e, t, r = this.mode) {
          if (!this.buffer) return this.yield(this._tree.enter(e, t, r));
          return r & d.ExcludeBuffers ? false : this.enterChild(1, e, t);
        }
        parent() {
          if (!this.buffer) return this.yieldNode(this.mode & d.IncludeAnonymous ? this._tree._parent : this._tree.parent);
          if (this.stack.length) return this.yieldBuf(this.stack.pop());
          let e = this.mode & d.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
          this.buffer = null;
          return this.yieldNode(e);
        }
        sibling(e) {
          if (!this.buffer)
            return !this._tree._parent
              ? false
              : this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode));
          let { buffer: t } = this.buffer,
            r = this.stack.length - 1;
          if (e < 0) {
            let e = r < 0 ? 0 : this.stack[r] + 4;
            if (this.index != e) return this.yieldBuf(t.findChild(e, this.index, -1, 0, 4));
          } else {
            let e = t.buffer[this.index + 3];
            if (e < (r < 0 ? t.buffer.length : t.buffer[this.stack[r] + 3])) return this.yieldBuf(e);
          }
          return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : false;
        }
        nextSibling() {
          return this.sibling(1);
        }
        prevSibling() {
          return this.sibling(-1);
        }
        atLastNode(e) {
          let t,
            r,
            { buffer: n } = this;
          if (n) {
            if (e > 0) {
              if (this.index < n.buffer.buffer.length) return false;
            } else {
              for (let e = 0; e < this.index; e++) if (n.buffer.buffer[e + 3] < this.index) return false;
            }
            ({ index: t, parent: r } = n);
          } else {
            ({ index: t, _parent: r } = this._tree);
          }
          for (; r; { index: t, _parent: r } = r) {
            if (t > -1)
              for (let n = t + e, i = e < 0 ? -1 : r._tree.children.length; n != i; n += e) {
                let e = r._tree.children[n];
                if (this.mode & d.IncludeAnonymous || e instanceof m || !e.type.isAnonymous || B(e)) return false;
              }
          }
          return true;
        }
        move(e, t) {
          if (t && this.enterChild(e, 0, 4)) return true;
          for (;;) {
            if (this.sibling(e)) return true;
            if (this.atLastNode(e) || !this.parent()) return false;
          }
        }
        next(e = true) {
          return this.move(1, e);
        }
        prev(e = true) {
          return this.move(-1, e);
        }
        moveTo(e, t = 0) {
          while (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) if (!this.parent()) break;
          while (this.enterChild(1, e, t)) {}
          return this;
        }
        get node() {
          if (!this.buffer) return this._tree;
          let e = this.bufferNode,
            t = null,
            r = 0;
          if (e && e.context == this.buffer) {
            e: for (let n = this.index, i = this.stack.length; i >= 0; ) {
              for (let s = e; s; s = s._parent)
                if (s.index == n) {
                  if (n == this.index) return s;
                  t = s;
                  r = i + 1;
                  break e;
                }
              n = this.stack[--i];
            }
          }
          for (let n = r; n < this.stack.length; n++) t = new A(this.buffer, t, this.stack[n]);
          return (this.bufferNode = new A(this.buffer, t, this.index));
        }
        get tree() {
          return this.buffer ? null : this._tree._tree;
        }
        iterate(e, t) {
          for (let r = 0; ; ) {
            let n = false;
            if (this.type.isAnonymous || e(this) !== false) {
              if (this.firstChild()) {
                r++;
                continue;
              }
              if (!this.type.isAnonymous) n = true;
            }
            for (;;) {
              if (n && t) t(this);
              n = this.type.isAnonymous;
              if (this.nextSibling()) break;
              if (!r) return;
              this.parent();
              r--;
              n = true;
            }
          }
        }
        matchContext(e) {
          if (!this.buffer) return _(this.node, e);
          let { buffer: t } = this.buffer,
            { types: r } = t.set;
          for (let n = e.length - 1, i = this.stack.length - 1; n >= 0; i--) {
            if (i < 0) return _(this.node, e, n);
            let s = r[t.buffer[this.stack[i]]];
            if (!s.isAnonymous) {
              if (e[n] && e[n] != s.name) return false;
              n--;
            }
          }
          return true;
        }
      }
      function B(e) {
        return e.children.some((e) => e instanceof m || !e.type.isAnonymous || B(e));
      }
      function T(e) {
        var t;
        let { buffer: r, nodeSet: i, maxBufferLength: s = n, reused: o = [], minRepeatType: f = i.types.length } = e;
        let h = Array.isArray(r) ? new g(r, r.length) : r;
        let u = i.types;
        let a = 0,
          p = 0;
        function d(e, t, r, n, l, c) {
          let { id: g, start: k, end: A, size: C } = h;
          let S = p;
          while (C < 0) {
            h.next();
            if (C == -1) {
              let t = o[g];
              r.push(t);
              n.push(k - e);
              return;
            } else if (C == -3) {
              a = g;
              return;
            } else if (C == -4) {
              p = g;
              return;
            } else {
              throw new RangeError(`Unrecognized record size: ${C}`);
            }
          }
          let N = u[g],
            I,
            B;
          let T = k - e;
          if (A - k <= s && (B = v(h.pos - t, l))) {
            let t = new Uint16Array(B.size - B.skip);
            let r = h.pos - B.size,
              n = t.length;
            while (h.pos > r) n = _(B.start, t, n);
            I = new m(t, A - B.start, i);
            T = B.start - e;
          } else {
            let e = h.pos - C;
            h.next();
            let t = [],
              r = [];
            let n = g >= f ? g : -1;
            let i = 0,
              l = A;
            while (h.pos > e) {
              if (n >= 0 && h.id == n && h.size >= 0) {
                if (h.end <= l - s) {
                  y(t, r, k, i, h.end, l, n, S);
                  i = t.length;
                  l = h.end;
                }
                h.next();
              } else if (c > 2500) {
                b(k, e, t, r);
              } else {
                d(k, e, t, r, n, c + 1);
              }
            }
            if (n >= 0 && i > 0 && i < t.length) y(t, r, k, i, k, l, n, S);
            t.reverse();
            r.reverse();
            if (n > -1 && i > 0) {
              let e = x(N);
              I = P(N, t, r, 0, t.length, 0, A - k, e, e);
            } else {
              I = w(N, t, r, A - k, S - A);
            }
          }
          r.push(I);
          n.push(T);
        }
        function b(e, t, r, n) {
          let l = [];
          let o = 0,
            f = -1;
          while (h.pos > t) {
            let { id: e, start: t, end: r, size: n } = h;
            if (n > 4) {
              h.next();
            } else if (f > -1 && t < f) {
              break;
            } else {
              if (f < 0) f = r - s;
              l.push(e, t, r);
              o++;
              h.next();
            }
          }
          if (o) {
            let t = new Uint16Array(o * 4);
            let s = l[l.length - 2];
            for (let e = l.length - 3, r = 0; e >= 0; e -= 3) {
              t[r++] = l[e];
              t[r++] = l[e + 1] - s;
              t[r++] = l[e + 2] - s;
              t[r++] = r;
            }
            r.push(new m(t, l[2] - s, i));
            n.push(s - e);
          }
        }
        function x(e) {
          return (t, r, n) => {
            let i = 0,
              s = t.length - 1,
              o,
              f;
            if (s >= 0 && (o = t[s]) instanceof c) {
              if (!s && o.type == e && o.length == n) return o;
              if ((f = o.prop(l.lookAhead))) i = r[s] + o.length + f;
            }
            return w(e, t, r, n, i);
          };
        }
        function y(e, t, r, n, s, l, o, f) {
          let h = [],
            u = [];
          while (e.length > n) {
            h.push(e.pop());
            u.push(t.pop() + r - s);
          }
          e.push(w(i.types[o], h, u, l - s, f - l));
          t.push(s - r);
        }
        function w(e, t, r, n, i = 0, s) {
          if (a) {
            let e = [l.contextHash, a];
            s = s ? [e].concat(s) : [e];
          }
          if (i > 25) {
            let e = [l.lookAhead, i];
            s = s ? [e].concat(s) : [e];
          }
          return new c(e, t, r, n, s);
        }
        function v(e, t) {
          let r = h.fork();
          let n = 0,
            i = 0,
            l = 0,
            o = r.end - s;
          let u = { size: 0, start: 0, skip: 0 };
          e: for (let s = r.pos - e; r.pos > s; ) {
            let e = r.size;
            if (r.id == t && e >= 0) {
              u.size = n;
              u.start = i;
              u.skip = l;
              l += 4;
              n += 4;
              r.next();
              continue;
            }
            let h = r.pos - e;
            if (e < 0 || h < s || r.start < o) break;
            let a = r.id >= f ? 4 : 0;
            let p = r.start;
            r.next();
            while (r.pos > h) {
              if (r.size < 0) {
                if (r.size == -3) a += 4;
                else break e;
              } else if (r.id >= f) {
                a += 4;
              }
              r.next();
            }
            i = p;
            n += e;
            l += a;
          }
          if (t < 0 || n == e) {
            u.size = n;
            u.start = i;
            u.skip = l;
          }
          return u.size > 4 ? u : undefined;
        }
        function _(e, t, r) {
          let { id: n, start: i, end: s, size: l } = h;
          h.next();
          if (l >= 0 && n < f) {
            let o = r;
            if (l > 4) {
              let n = h.pos - (l - 4);
              while (h.pos > n) r = _(e, t, r);
            }
            t[--r] = o;
            t[--r] = s - e;
            t[--r] = i - e;
            t[--r] = n;
          } else if (l == -3) {
            a = n;
          } else if (l == -4) {
            p = n;
          }
          return r;
        }
        let k = [],
          A = [];
        while (h.pos > 0) d(e.start || 0, e.bufferStart || 0, k, A, -1, 0);
        let C = (t = e.length) !== null && t !== void 0 ? t : k.length ? A[0] + k[0].length : 0;
        return new c(u[e.topID], k.reverse(), A.reverse(), C);
      }
      const M = new WeakMap();
      function z(e, t) {
        if (!e.isAnonymous || t instanceof m || t.type != e) return 1;
        let r = M.get(t);
        if (r == null) {
          r = 1;
          for (let n of t.children) {
            if (n.type != e || !(n instanceof c)) {
              r = 1;
              break;
            }
            r += z(e, n);
          }
          M.set(t, r);
        }
        return r;
      }
      function P(e, t, r, n, i, s, l, o, f) {
        let h = 0;
        for (let c = n; c < i; c++) h += z(e, t[c]);
        let u = Math.ceil((h * 1.5) / 8);
        let a = [],
          p = [];
        function d(t, r, n, i, l) {
          for (let o = n; o < i; ) {
            let n = o,
              h = r[o],
              c = z(e, t[o]);
            o++;
            for (; o < i; o++) {
              let r = z(e, t[o]);
              if (c + r >= u) break;
              c += r;
            }
            if (o == n + 1) {
              if (c > u) {
                let e = t[n];
                d(e.children, e.positions, 0, e.children.length, r[n] + l);
                continue;
              }
              a.push(t[n]);
            } else {
              let i = r[o - 1] + t[o - 1].length - h;
              a.push(P(e, t, r, n, o, h, i, null, f));
            }
            p.push(h + l - s);
          }
        }
        d(t, r, n, i, 0);
        return (o || f)(a, p, l);
      }
      class E {
        constructor() {
          this.map = new WeakMap();
        }
        setBuffer(e, t, r) {
          let n = this.map.get(e);
          if (!n) this.map.set(e, (n = new Map()));
          n.set(t, r);
        }
        getBuffer(e, t) {
          let r = this.map.get(e);
          return r && r.get(t);
        }
        set(e, t) {
          if (e instanceof A) this.setBuffer(e.context.buffer, e.index, t);
          else if (e instanceof w) this.map.set(e.tree, t);
        }
        get(e) {
          return e instanceof A ? this.getBuffer(e.context.buffer, e.index) : e instanceof w ? this.map.get(e.tree) : undefined;
        }
        cursorSet(e, t) {
          if (e.buffer) this.setBuffer(e.buffer.buffer, e.index, t);
          else this.map.set(e.tree, t);
        }
        cursorGet(e) {
          return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
        }
      }
      class O {
        constructor(e, t, r, n, i = false, s = false) {
          this.from = e;
          this.to = t;
          this.tree = r;
          this.offset = n;
          this.open = (i ? 1 : 0) | (s ? 2 : 0);
        }
        get openStart() {
          return (this.open & 1) > 0;
        }
        get openEnd() {
          return (this.open & 2) > 0;
        }
        static addTree(e, t = [], r = false) {
          let n = [new O(0, e.length, e, 0, false, r)];
          for (let i of t) if (i.to > e.length) n.push(i);
          return n;
        }
        static applyChanges(e, t, r = 128) {
          if (!t.length) return e;
          let n = [];
          let i = 1,
            s = e.length ? e[0] : null;
          for (let l = 0, o = 0, f = 0; ; l++) {
            let h = l < t.length ? t[l] : null;
            let u = h ? h.fromA : 1e9;
            if (u - o >= r)
              while (s && s.from < u) {
                let t = s;
                if (o >= t.from || u <= t.to || f) {
                  let e = Math.max(t.from, o) - f,
                    r = Math.min(t.to, u) - f;
                  t = e >= r ? null : new O(e, r, t.tree, t.offset + f, l > 0, !!h);
                }
                if (t) n.push(t);
                if (s.to > u) break;
                s = i < e.length ? e[i++] : null;
              }
            if (!h) break;
            o = h.toA;
            f = h.toA - h.toB;
          }
          return n;
        }
      }
      class j {
        startParse(e, t, r) {
          if (typeof e == "string") e = new F(e);
          r = !r ? [new s(0, e.length)] : r.length ? r.map((e) => new s(e.from, e.to)) : [new s(0, 0)];
          return this.createParse(e, t || [], r);
        }
        parse(e, t, r) {
          let n = this.startParse(e, t, r);
          for (;;) {
            let e = n.advance();
            if (e) return e;
          }
        }
      }
      class F {
        constructor(e) {
          this.string = e;
        }
        get length() {
          return this.string.length;
        }
        chunk(e) {
          return this.string.slice(e);
        }
        get lineChunks() {
          return false;
        }
        read(e, t) {
          return this.string.slice(e, t);
        }
      }
      function D(e) {
        return (t, r, n, i) => new J(t, e, r, n, i);
      }
      class R {
        constructor(e, t, r, n, i) {
          this.parser = e;
          this.parse = t;
          this.overlay = r;
          this.target = n;
          this.from = i;
        }
      }
      function W(e) {
        if (!e.length || e.some((e) => e.from >= e.to)) throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(e));
      }
      class U {
        constructor(e, t, r, n, i, s, l) {
          this.parser = e;
          this.predicate = t;
          this.mounts = r;
          this.index = n;
          this.start = i;
          this.target = s;
          this.prev = l;
          this.depth = 0;
          this.ranges = [];
        }
      }
      const L = new l({ perNode: true });
      class J {
        constructor(e, t, r, n, i) {
          this.nest = t;
          this.input = r;
          this.fragments = n;
          this.ranges = i;
          this.inner = [];
          this.innerDone = 0;
          this.baseTree = null;
          this.stoppedAt = null;
          this.baseParse = e;
        }
        advance() {
          if (this.baseParse) {
            let e = this.baseParse.advance();
            if (!e) return null;
            this.baseParse = null;
            this.baseTree = e;
            this.startInner();
            if (this.stoppedAt != null) for (let t of this.inner) t.parse.stopAt(this.stoppedAt);
          }
          if (this.innerDone == this.inner.length) {
            let e = this.baseTree;
            if (this.stoppedAt != null) e = new c(e.type, e.children, e.positions, e.length, e.propValues.concat([[L, this.stoppedAt]]));
            return e;
          }
          let e = this.inner[this.innerDone],
            t = e.parse.advance();
          if (t) {
            this.innerDone++;
            let r = Object.assign(Object.create(null), e.target.props);
            r[l.mounted.id] = new o(t, e.overlay, e.parser);
            e.target.props = r;
          }
          return null;
        }
        get parsedPos() {
          if (this.baseParse) return 0;
          let e = this.input.length;
          for (let t = this.innerDone; t < this.inner.length; t++) {
            if (this.inner[t].from < e) e = Math.min(e, this.inner[t].parse.parsedPos);
          }
          return e;
        }
        stopAt(e) {
          this.stoppedAt = e;
          if (this.baseParse) this.baseParse.stopAt(e);
          else for (let t = this.innerDone; t < this.inner.length; t++) this.inner[t].parse.stopAt(e);
        }
        startInner() {
          let e = new q(this.fragments);
          let t = null;
          let r = null;
          let n = new I(new w(this.baseTree, this.ranges[0].from, 0, null), d.IncludeAnonymous | d.IgnoreMounts);
          e: for (let i, l; ; ) {
            let o = true,
              f;
            if (this.stoppedAt != null && n.from >= this.stoppedAt) {
              o = false;
            } else if (e.hasNode(n)) {
              if (t) {
                let e = t.mounts.find((e) => e.frag.from <= n.from && e.frag.to >= n.to && e.mount.overlay);
                if (e)
                  for (let r of e.mount.overlay) {
                    let i = r.from + e.pos,
                      s = r.to + e.pos;
                    if (i >= n.from && s <= n.to && !t.ranges.some((e) => e.from < s && e.to > i)) t.ranges.push({ from: i, to: s });
                  }
              }
              o = false;
            } else if (r && (l = V(r.ranges, n.from, n.to))) {
              o = l != 2;
            } else if (!n.type.isAnonymous && (i = this.nest(n, this.input)) && (n.from < n.to || !i.overlay)) {
              if (!n.tree) G(n);
              let l = e.findMounts(n.from, i.parser);
              if (typeof i.overlay == "function") {
                t = new U(i.parser, i.overlay, l, this.inner.length, n.from, n.tree, t);
              } else {
                let e = K(this.ranges, i.overlay || (n.from < n.to ? [new s(n.from, n.to)] : []));
                if (e.length) W(e);
                if (e.length || !i.overlay)
                  this.inner.push(
                    new R(
                      i.parser,
                      e.length ? i.parser.startParse(this.input, X(l, e), e) : i.parser.startParse(""),
                      i.overlay ? i.overlay.map((e) => new s(e.from - n.from, e.to - n.from)) : null,
                      n.tree,
                      e.length ? e[0].from : n.from
                    )
                  );
                if (!i.overlay) o = false;
                else if (e.length) r = { ranges: e, depth: 0, prev: r };
              }
            } else if (t && (f = t.predicate(n))) {
              if (f === true) f = new s(n.from, n.to);
              if (f.from < f.to) t.ranges.push(f);
            }
            if (o && n.firstChild()) {
              if (t) t.depth++;
              if (r) r.depth++;
            } else {
              for (;;) {
                if (n.nextSibling()) break;
                if (!n.parent()) break e;
                if (t && !--t.depth) {
                  let e = K(this.ranges, t.ranges);
                  if (e.length) {
                    W(e);
                    this.inner.splice(
                      t.index,
                      0,
                      new R(
                        t.parser,
                        t.parser.startParse(this.input, X(t.mounts, e), e),
                        t.ranges.map((e) => new s(e.from - t.start, e.to - t.start)),
                        t.target,
                        e[0].from
                      )
                    );
                  }
                  t = t.prev;
                }
                if (r && !--r.depth) r = r.prev;
              }
            }
          }
        }
      }
      function V(e, t, r) {
        for (let n of e) {
          if (n.from >= r) break;
          if (n.to > t) return n.from <= t && n.to >= r ? 2 : 1;
        }
        return 0;
      }
      function H(e, t, r, n, i, s) {
        if (t < r) {
          let l = e.buffer[t + 1];
          n.push(e.slice(t, r, l));
          i.push(l - s);
        }
      }
      function G(e) {
        let { node: t } = e,
          r = [];
        let n = t.context.buffer;
        do {
          r.push(e.index);
          e.parent();
        } while (!e.tree);
        let i = e.tree,
          s = i.children.indexOf(n);
        let l = i.children[s],
          o = l.buffer,
          f = [s];
        function u(e, n, i, s, h, a) {
          let p = r[a];
          let d = [],
            g = [];
          H(l, e, p, d, g, s);
          let m = o[p + 1],
            b = o[p + 2];
          f.push(d.length);
          let x = a ? u(p + 4, o[p + 3], l.set.types[o[p]], m, b - m, a - 1) : t.toTree();
          d.push(x);
          g.push(m - s);
          H(l, o[p + 3], n, d, g, s);
          return new c(i, d, g, h);
        }
        i.children[s] = u(0, o.length, h.none, 0, l.length, r.length - 1);
        for (let h of f) {
          let t = e.tree.children[h],
            r = e.tree.positions[h];
          e.yield(new w(t, r + e.from, h, e._tree));
        }
      }
      class $ {
        constructor(e, t) {
          this.offset = t;
          this.done = false;
          this.cursor = e.cursor(d.IncludeAnonymous | d.IgnoreMounts);
        }
        moveTo(e) {
          let { cursor: t } = this,
            r = e - this.offset;
          while (!this.done && t.from < r) {
            if (t.to >= e && t.enter(r, 1, d.IgnoreOverlays | d.ExcludeBuffers));
            else if (!t.next(false)) this.done = true;
          }
        }
        hasNode(e) {
          this.moveTo(e.from);
          if (!this.done && this.cursor.from + this.offset == e.from && this.cursor.tree) {
            for (let t = this.cursor.tree; ; ) {
              if (t == e.tree) return true;
              if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof c) t = t.children[0];
              else break;
            }
          }
          return false;
        }
      }
      class q {
        constructor(e) {
          var t;
          this.fragments = e;
          this.curTo = 0;
          this.fragI = 0;
          if (e.length) {
            let r = (this.curFrag = e[0]);
            this.curTo = (t = r.tree.prop(L)) !== null && t !== void 0 ? t : r.to;
            this.inner = new $(r.tree, -r.offset);
          } else {
            this.curFrag = this.inner = null;
          }
        }
        hasNode(e) {
          while (this.curFrag && e.from >= this.curTo) this.nextFrag();
          return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
        }
        nextFrag() {
          var e;
          this.fragI++;
          if (this.fragI == this.fragments.length) {
            this.curFrag = this.inner = null;
          } else {
            let t = (this.curFrag = this.fragments[this.fragI]);
            this.curTo = (e = t.tree.prop(L)) !== null && e !== void 0 ? e : t.to;
            this.inner = new $(t.tree, -t.offset);
          }
        }
        findMounts(e, t) {
          var r;
          let n = [];
          if (this.inner) {
            this.inner.cursor.moveTo(e, 1);
            for (let e = this.inner.cursor.node; e; e = e.parent) {
              let i = (r = e.tree) === null || r === void 0 ? void 0 : r.prop(l.mounted);
              if (i && i.parser == t) {
                for (let t = this.fragI; t < this.fragments.length; t++) {
                  let r = this.fragments[t];
                  if (r.from >= e.to) break;
                  if (r.tree == this.curFrag.tree) n.push({ frag: r, pos: e.from - r.offset, mount: i });
                }
              }
            }
          }
          return n;
        }
      }
      function K(e, t) {
        let r = null,
          n = t;
        for (let i = 1, l = 0; i < e.length; i++) {
          let o = e[i - 1].to,
            f = e[i].from;
          for (; l < n.length; l++) {
            let e = n[l];
            if (e.from >= f) break;
            if (e.to <= o) continue;
            if (!r) n = r = t.slice();
            if (e.from < o) {
              r[l] = new s(e.from, o);
              if (e.to > f) r.splice(l + 1, 0, new s(f, e.to));
            } else if (e.to > f) {
              r[l--] = new s(f, e.to);
            } else {
              r.splice(l--, 1);
            }
          }
        }
        return n;
      }
      function Q(e, t, r, n) {
        let i = 0,
          l = 0,
          o = false,
          f = false,
          h = -1e9;
        let u = [];
        for (;;) {
          let a = i == e.length ? 1e9 : o ? e[i].to : e[i].from;
          let p = l == t.length ? 1e9 : f ? t[l].to : t[l].from;
          if (o != f) {
            let e = Math.max(h, r),
              t = Math.min(a, p, n);
            if (e < t) u.push(new s(e, t));
          }
          h = Math.min(a, p);
          if (h == 1e9) break;
          if (a == h) {
            if (!o) o = true;
            else {
              o = false;
              i++;
            }
          }
          if (p == h) {
            if (!f) f = true;
            else {
              f = false;
              l++;
            }
          }
        }
        return u;
      }
      function X(e, t) {
        let r = [];
        for (let { pos: n, mount: i, frag: l } of e) {
          let e = n + (i.overlay ? i.overlay[0].from : 0),
            o = e + i.tree.length;
          let f = Math.max(l.from, e),
            h = Math.min(l.to, o);
          if (i.overlay) {
            let o = i.overlay.map((e) => new s(e.from + n, e.to + n));
            let u = Q(t, o, f, h);
            for (let t = 0, n = f; ; t++) {
              let s = t == u.length,
                o = s ? h : u[t].from;
              if (o > n) r.push(new O(n, o, i.tree, -e, l.from >= n || l.openStart, l.to <= o || l.openEnd));
              if (s) break;
              n = u[t].to;
            }
          } else {
            r.push(new O(f, h, i.tree, -e, l.from >= e || l.openStart, l.to <= o || l.openEnd));
          }
        }
        return r;
      }
    },
  },
]);
