"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2590],
  {
    62590: (e, t, s) => {
      s.r(t);
      s.d(t, {
        $global: () => i,
        AttachedBehaviorHTMLDirective: () => T,
        AttributeConfiguration: () => oe,
        AttributeDefinition: () => ae,
        BindingBehavior: () => L,
        CSSDirective: () => we,
        ChildrenBehavior: () => ht,
        Controller: () => me,
        DOM: () => p,
        ElementStyles: () => X,
        ExecutionContext: () => x,
        FAST: () => r,
        FASTElement: () => Ce,
        FASTElementDefinition: () => pe,
        HTMLBindingDirective: () => E,
        HTMLDirective: () => S,
        HTMLView: () => W,
        Observable: () => v,
        PropertyChangeNotifier: () => b,
        RefBehavior: () => Ue,
        RepeatBehavior: () => tt,
        RepeatDirective: () => st,
        SlottedBehavior: () => ot,
        SubscriberSet: () => g,
        TargetedHTMLDirective: () => B,
        ViewTemplate: () => G,
        attr: () => ce,
        booleanConverter: () => le,
        children: () => at,
        compileTemplate: () => Q,
        createMetadataLocator: () => l,
        css: () => Be,
        cssPartial: () => Oe,
        customElement: () => xe,
        defaultExecutionContext: () => w,
        elements: () => nt,
        emptyArray: () => o,
        enableArrayObservation: () => Qe,
        html: () => K,
        nullableNumberConverter: () => he,
        observable: () => m,
        ref: () => We,
        repeat: () => it,
        slotted: () => lt,
        volatile: () => y,
        when: () => Xe,
      });
      const i = (function () {
        if (typeof globalThis !== "undefined") {
          return globalThis;
        }
        if (typeof s.g !== "undefined") {
          return s.g;
        }
        if (typeof self !== "undefined") {
          return self;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        try {
          return new Function("return this")();
        } catch (e) {
          return {};
        }
      })();
      if (i.trustedTypes === void 0) {
        i.trustedTypes = { createPolicy: (e, t) => t };
      }
      const n = { configurable: false, enumerable: false, writable: false };
      if (i.FAST === void 0) {
        Reflect.defineProperty(i, "FAST", Object.assign({ value: Object.create(null) }, n));
      }
      const r = i.FAST;
      if (r.getById === void 0) {
        const e = Object.create(null);
        Reflect.defineProperty(
          r,
          "getById",
          Object.assign(
            {
              value(t, s) {
                let i = e[t];
                if (i === void 0) {
                  i = s ? (e[t] = s()) : null;
                }
                return i;
              },
            },
            n
          )
        );
      }
      const o = Object.freeze([]);
      function l() {
        const e = new WeakMap();
        return function (t) {
          let s = e.get(t);
          if (s === void 0) {
            let i = Reflect.getPrototypeOf(t);
            while (s === void 0 && i !== null) {
              s = e.get(i);
              i = Reflect.getPrototypeOf(i);
            }
            s = s === void 0 ? [] : s.slice(0);
            e.set(t, s);
          }
          return s;
        };
      }
      const h = i.FAST.getById(1, () => {
        const e = [];
        const t = [];
        function s() {
          if (t.length) {
            throw t.shift();
          }
        }
        function n(e) {
          try {
            e.call();
          } catch (i) {
            t.push(i);
            setTimeout(s, 0);
          }
        }
        function r() {
          const t = 1024;
          let s = 0;
          while (s < e.length) {
            n(e[s]);
            s++;
            if (s > t) {
              for (let t = 0, i = e.length - s; t < i; t++) {
                e[t] = e[t + s];
              }
              e.length -= s;
              s = 0;
            }
          }
          e.length = 0;
        }
        function o(t) {
          if (e.length < 1) {
            i.requestAnimationFrame(r);
          }
          e.push(t);
        }
        return Object.freeze({ enqueue: o, process: r });
      });
      const a = i.trustedTypes.createPolicy("fast-html", { createHTML: (e) => e });
      let c = a;
      const u = `fast-${Math.random().toString(36).substring(2, 8)}`;
      const d = `${u}{`;
      const f = `}${u}`;
      const p = Object.freeze({
        supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype,
        setHTMLPolicy(e) {
          if (c !== a) {
            throw new Error("The HTML policy can only be set once.");
          }
          c = e;
        },
        createHTML(e) {
          return c.createHTML(e);
        },
        isMarker(e) {
          return e && e.nodeType === 8 && e.data.startsWith(u);
        },
        extractDirectiveIndexFromMarker(e) {
          return parseInt(e.data.replace(`${u}:`, ""));
        },
        createInterpolationPlaceholder(e) {
          return `${d}${e}${f}`;
        },
        createCustomAttributePlaceholder(e, t) {
          return `${e}="${this.createInterpolationPlaceholder(t)}"`;
        },
        createBlockPlaceholder(e) {
          return `\x3c!--${u}:${e}--\x3e`;
        },
        queueUpdate: h.enqueue,
        processUpdates: h.process,
        nextUpdate() {
          return new Promise(h.enqueue);
        },
        setAttribute(e, t, s) {
          if (s === null || s === undefined) {
            e.removeAttribute(t);
          } else {
            e.setAttribute(t, s);
          }
        },
        setBooleanAttribute(e, t, s) {
          s ? e.setAttribute(t, "") : e.removeAttribute(t);
        },
        removeChildNodes(e) {
          for (let t = e.firstChild; t !== null; t = e.firstChild) {
            e.removeChild(t);
          }
        },
        createTemplateWalker(e) {
          return document.createTreeWalker(e, 133, null, false);
        },
      });
      class g {
        constructor(e, t) {
          this.sub1 = void 0;
          this.sub2 = void 0;
          this.spillover = void 0;
          this.source = e;
          this.sub1 = t;
        }
        has(e) {
          return this.spillover === void 0 ? this.sub1 === e || this.sub2 === e : this.spillover.indexOf(e) !== -1;
        }
        subscribe(e) {
          const t = this.spillover;
          if (t === void 0) {
            if (this.has(e)) {
              return;
            }
            if (this.sub1 === void 0) {
              this.sub1 = e;
              return;
            }
            if (this.sub2 === void 0) {
              this.sub2 = e;
              return;
            }
            this.spillover = [this.sub1, this.sub2, e];
            this.sub1 = void 0;
            this.sub2 = void 0;
          } else {
            const s = t.indexOf(e);
            if (s === -1) {
              t.push(e);
            }
          }
        }
        unsubscribe(e) {
          const t = this.spillover;
          if (t === void 0) {
            if (this.sub1 === e) {
              this.sub1 = void 0;
            } else if (this.sub2 === e) {
              this.sub2 = void 0;
            }
          } else {
            const s = t.indexOf(e);
            if (s !== -1) {
              t.splice(s, 1);
            }
          }
        }
        notify(e) {
          const t = this.spillover;
          const s = this.source;
          if (t === void 0) {
            const t = this.sub1;
            const i = this.sub2;
            if (t !== void 0) {
              t.handleChange(s, e);
            }
            if (i !== void 0) {
              i.handleChange(s, e);
            }
          } else {
            for (let i = 0, n = t.length; i < n; ++i) {
              t[i].handleChange(s, e);
            }
          }
        }
      }
      class b {
        constructor(e) {
          this.subscribers = {};
          this.sourceSubscribers = null;
          this.source = e;
        }
        notify(e) {
          var t;
          const s = this.subscribers[e];
          if (s !== void 0) {
            s.notify(e);
          }
          (t = this.sourceSubscribers) === null || t === void 0 ? void 0 : t.notify(e);
        }
        subscribe(e, t) {
          var s;
          if (t) {
            let s = this.subscribers[t];
            if (s === void 0) {
              this.subscribers[t] = s = new g(this.source);
            }
            s.subscribe(e);
          } else {
            this.sourceSubscribers = (s = this.sourceSubscribers) !== null && s !== void 0 ? s : new g(this.source);
            this.sourceSubscribers.subscribe(e);
          }
        }
        unsubscribe(e, t) {
          var s;
          if (t) {
            const s = this.subscribers[t];
            if (s !== void 0) {
              s.unsubscribe(e);
            }
          } else {
            (s = this.sourceSubscribers) === null || s === void 0 ? void 0 : s.unsubscribe(e);
          }
        }
      }
      const v = r.getById(2, () => {
        const e = /(:|&&|\|\||if)/;
        const t = new WeakMap();
        const s = p.queueUpdate;
        let i = void 0;
        let n = (e) => {
          throw new Error("Must call enableArrayObservation before observing arrays.");
        };
        function r(e) {
          let s = e.$fastController || t.get(e);
          if (s === void 0) {
            if (Array.isArray(e)) {
              s = n(e);
            } else {
              t.set(e, (s = new b(e)));
            }
          }
          return s;
        }
        const o = l();
        class h {
          constructor(e) {
            this.name = e;
            this.field = `_${e}`;
            this.callback = `${e}Changed`;
          }
          getValue(e) {
            if (i !== void 0) {
              i.watch(e, this.name);
            }
            return e[this.field];
          }
          setValue(e, t) {
            const s = this.field;
            const i = e[s];
            if (i !== t) {
              e[s] = t;
              const n = e[this.callback];
              if (typeof n === "function") {
                n.call(e, i, t);
              }
              r(e).notify(this.name);
            }
          }
        }
        class a extends g {
          constructor(e, t, s = false) {
            super(e, t);
            this.binding = e;
            this.isVolatileBinding = s;
            this.needsRefresh = true;
            this.needsQueue = true;
            this.first = this;
            this.last = null;
            this.propertySource = void 0;
            this.propertyName = void 0;
            this.notifier = void 0;
            this.next = void 0;
          }
          observe(e, t) {
            if (this.needsRefresh && this.last !== null) {
              this.disconnect();
            }
            const s = i;
            i = this.needsRefresh ? this : void 0;
            this.needsRefresh = this.isVolatileBinding;
            const n = this.binding(e, t);
            i = s;
            return n;
          }
          disconnect() {
            if (this.last !== null) {
              let e = this.first;
              while (e !== void 0) {
                e.notifier.unsubscribe(this, e.propertyName);
                e = e.next;
              }
              this.last = null;
              this.needsRefresh = this.needsQueue = true;
            }
          }
          watch(e, t) {
            const s = this.last;
            const n = r(e);
            const o = s === null ? this.first : {};
            o.propertySource = e;
            o.propertyName = t;
            o.notifier = n;
            n.subscribe(this, t);
            if (s !== null) {
              if (!this.needsRefresh) {
                let t;
                i = void 0;
                t = s.propertySource[s.propertyName];
                i = this;
                if (e === t) {
                  this.needsRefresh = true;
                }
              }
              s.next = o;
            }
            this.last = o;
          }
          handleChange() {
            if (this.needsQueue) {
              this.needsQueue = false;
              s(this);
            }
          }
          call() {
            if (this.last !== null) {
              this.needsQueue = true;
              this.notify(this);
            }
          }
          records() {
            let e = this.first;
            return {
              next: () => {
                const t = e;
                if (t === undefined) {
                  return { value: void 0, done: true };
                } else {
                  e = e.next;
                  return { value: t, done: false };
                }
              },
              [Symbol.iterator]: function () {
                return this;
              },
            };
          }
        }
        return Object.freeze({
          setArrayObserverFactory(e) {
            n = e;
          },
          getNotifier: r,
          track(e, t) {
            if (i !== void 0) {
              i.watch(e, t);
            }
          },
          trackVolatile() {
            if (i !== void 0) {
              i.needsRefresh = true;
            }
          },
          notify(e, t) {
            r(e).notify(t);
          },
          defineProperty(e, t) {
            if (typeof t === "string") {
              t = new h(t);
            }
            o(e).push(t);
            Reflect.defineProperty(e, t.name, {
              enumerable: true,
              get: function () {
                return t.getValue(this);
              },
              set: function (e) {
                t.setValue(this, e);
              },
            });
          },
          getAccessors: o,
          binding(e, t, s = this.isVolatileBinding(e)) {
            return new a(e, t, s);
          },
          isVolatileBinding(t) {
            return e.test(t.toString());
          },
        });
      });
      function m(e, t) {
        v.defineProperty(e, t);
      }
      function y(e, t, s) {
        return Object.assign({}, s, {
          get: function () {
            v.trackVolatile();
            return s.get.apply(this);
          },
        });
      }
      const C = r.getById(3, () => {
        let e = null;
        return {
          get() {
            return e;
          },
          set(t) {
            e = t;
          },
        };
      });
      class x {
        constructor() {
          this.index = 0;
          this.length = 0;
          this.parent = null;
          this.parentContext = null;
        }
        get event() {
          return C.get();
        }
        get isEven() {
          return this.index % 2 === 0;
        }
        get isOdd() {
          return this.index % 2 !== 0;
        }
        get isFirst() {
          return this.index === 0;
        }
        get isInMiddle() {
          return !this.isFirst && !this.isLast;
        }
        get isLast() {
          return this.index === this.length - 1;
        }
        static setEvent(e) {
          C.set(e);
        }
      }
      v.defineProperty(x.prototype, "index");
      v.defineProperty(x.prototype, "length");
      const w = Object.seal(new x());
      class S {
        constructor() {
          this.targetIndex = 0;
        }
      }
      class B extends S {
        constructor() {
          super(...arguments);
          this.createPlaceholder = p.createInterpolationPlaceholder;
        }
      }
      class T extends S {
        constructor(e, t, s) {
          super();
          this.name = e;
          this.behavior = t;
          this.options = s;
        }
        createPlaceholder(e) {
          return p.createCustomAttributePlaceholder(this.name, e);
        }
        createBehavior(e) {
          return new this.behavior(e, this.options);
        }
      }
      function O(e, t) {
        this.source = e;
        this.context = t;
        if (this.bindingObserver === null) {
          this.bindingObserver = v.binding(this.binding, this, this.isBindingVolatile);
        }
        this.updateTarget(this.bindingObserver.observe(e, t));
      }
      function A(e, t) {
        this.source = e;
        this.context = t;
        this.target.addEventListener(this.targetName, this);
      }
      function N() {
        this.bindingObserver.disconnect();
        this.source = null;
        this.context = null;
      }
      function k() {
        this.bindingObserver.disconnect();
        this.source = null;
        this.context = null;
        const e = this.target.$fastView;
        if (e !== void 0 && e.isComposed) {
          e.unbind();
          e.needsBindOnly = true;
        }
      }
      function V() {
        this.target.removeEventListener(this.targetName, this);
        this.source = null;
        this.context = null;
      }
      function $(e) {
        p.setAttribute(this.target, this.targetName, e);
      }
      function F(e) {
        p.setBooleanAttribute(this.target, this.targetName, e);
      }
      function _(e) {
        if (e === null || e === undefined) {
          e = "";
        }
        if (e.create) {
          this.target.textContent = "";
          let t = this.target.$fastView;
          if (t === void 0) {
            t = e.create();
          } else {
            if (this.target.$fastTemplate !== e) {
              if (t.isComposed) {
                t.remove();
                t.unbind();
              }
              t = e.create();
            }
          }
          if (!t.isComposed) {
            t.isComposed = true;
            t.bind(this.source, this.context);
            t.insertBefore(this.target);
            this.target.$fastView = t;
            this.target.$fastTemplate = e;
          } else if (t.needsBindOnly) {
            t.needsBindOnly = false;
            t.bind(this.source, this.context);
          }
        } else {
          const t = this.target.$fastView;
          if (t !== void 0 && t.isComposed) {
            t.isComposed = false;
            t.remove();
            if (t.needsBindOnly) {
              t.needsBindOnly = false;
            } else {
              t.unbind();
            }
          }
          this.target.textContent = e;
        }
      }
      function I(e) {
        this.target[this.targetName] = e;
      }
      function M(e) {
        const t = this.classVersions || Object.create(null);
        const s = this.target;
        let i = this.version || 0;
        if (e !== null && e !== undefined && e.length) {
          const n = e.split(/\s+/);
          for (let e = 0, r = n.length; e < r; ++e) {
            const r = n[e];
            if (r === "") {
              continue;
            }
            t[r] = i;
            s.classList.add(r);
          }
        }
        this.classVersions = t;
        this.version = i + 1;
        if (i === 0) {
          return;
        }
        i -= 1;
        for (const n in t) {
          if (t[n] === i) {
            s.classList.remove(n);
          }
        }
      }
      class E extends B {
        constructor(e) {
          super();
          this.binding = e;
          this.bind = O;
          this.unbind = N;
          this.updateTarget = $;
          this.isBindingVolatile = v.isVolatileBinding(this.binding);
        }
        get targetName() {
          return this.originalTargetName;
        }
        set targetName(e) {
          this.originalTargetName = e;
          if (e === void 0) {
            return;
          }
          switch (e[0]) {
            case ":":
              this.cleanedTargetName = e.substr(1);
              this.updateTarget = I;
              if (this.cleanedTargetName === "innerHTML") {
                const e = this.binding;
                this.binding = (t, s) => p.createHTML(e(t, s));
              }
              break;
            case "?":
              this.cleanedTargetName = e.substr(1);
              this.updateTarget = F;
              break;
            case "@":
              this.cleanedTargetName = e.substr(1);
              this.bind = A;
              this.unbind = V;
              break;
            default:
              this.cleanedTargetName = e;
              if (e === "class") {
                this.updateTarget = M;
              }
              break;
          }
        }
        targetAtContent() {
          this.updateTarget = _;
          this.unbind = k;
        }
        createBehavior(e) {
          return new L(e, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
        }
      }
      class L {
        constructor(e, t, s, i, n, r, o) {
          this.source = null;
          this.context = null;
          this.bindingObserver = null;
          this.target = e;
          this.binding = t;
          this.isBindingVolatile = s;
          this.bind = i;
          this.unbind = n;
          this.updateTarget = r;
          this.targetName = o;
        }
        handleChange() {
          this.updateTarget(this.bindingObserver.observe(this.source, this.context));
        }
        handleEvent(e) {
          x.setEvent(e);
          const t = this.binding(this.source, this.context);
          x.setEvent(null);
          if (t !== true) {
            e.preventDefault();
          }
        }
      }
      let P = null;
      class j {
        addFactory(e) {
          e.targetIndex = this.targetIndex;
          this.behaviorFactories.push(e);
        }
        captureContentBinding(e) {
          e.targetAtContent();
          this.addFactory(e);
        }
        reset() {
          this.behaviorFactories = [];
          this.targetIndex = -1;
        }
        release() {
          P = this;
        }
        static borrow(e) {
          const t = P || new j();
          t.directives = e;
          t.reset();
          P = null;
          return t;
        }
      }
      function R(e) {
        if (e.length === 1) {
          return e[0];
        }
        let t;
        const s = e.length;
        const i = e.map((e) => {
          if (typeof e === "string") {
            return () => e;
          }
          t = e.targetName || t;
          return e.binding;
        });
        const n = (e, t) => {
          let n = "";
          for (let r = 0; r < s; ++r) {
            n += i[r](e, t);
          }
          return n;
        };
        const r = new E(n);
        r.targetName = t;
        return r;
      }
      const H = f.length;
      function z(e, t) {
        const s = t.split(d);
        if (s.length === 1) {
          return null;
        }
        const i = [];
        for (let n = 0, r = s.length; n < r; ++n) {
          const t = s[n];
          const r = t.indexOf(f);
          let o;
          if (r === -1) {
            o = t;
          } else {
            const s = parseInt(t.substring(0, r));
            i.push(e.directives[s]);
            o = t.substring(r + H);
          }
          if (o !== "") {
            i.push(o);
          }
        }
        return i;
      }
      function D(e, t, s = false) {
        const i = t.attributes;
        for (let n = 0, r = i.length; n < r; ++n) {
          const o = i[n];
          const l = o.value;
          const h = z(e, l);
          let a = null;
          if (h === null) {
            if (s) {
              a = new E(() => l);
              a.targetName = o.name;
            }
          } else {
            a = R(h);
          }
          if (a !== null) {
            t.removeAttributeNode(o);
            n--;
            r--;
            e.addFactory(a);
          }
        }
      }
      function q(e, t, s) {
        const i = z(e, t.textContent);
        if (i !== null) {
          let n = t;
          for (let r = 0, o = i.length; r < o; ++r) {
            const o = i[r];
            const l = r === 0 ? t : n.parentNode.insertBefore(document.createTextNode(""), n.nextSibling);
            if (typeof o === "string") {
              l.textContent = o;
            } else {
              l.textContent = " ";
              e.captureContentBinding(o);
            }
            n = l;
            e.targetIndex++;
            if (l !== t) {
              s.nextNode();
            }
          }
          e.targetIndex--;
        }
      }
      function Q(e, t) {
        const s = e.content;
        document.adoptNode(s);
        const i = j.borrow(t);
        D(i, e, true);
        const n = i.behaviorFactories;
        i.reset();
        const r = p.createTemplateWalker(s);
        let o;
        while ((o = r.nextNode())) {
          i.targetIndex++;
          switch (o.nodeType) {
            case 1:
              D(i, o);
              break;
            case 3:
              q(i, o, r);
              break;
            case 8:
              if (p.isMarker(o)) {
                i.addFactory(t[p.extractDirectiveIndexFromMarker(o)]);
              }
          }
        }
        let l = 0;
        if (p.isMarker(s.firstChild) || (s.childNodes.length === 1 && t.length)) {
          s.insertBefore(document.createComment(""), s.firstChild);
          l = -1;
        }
        const h = i.behaviorFactories;
        i.release();
        return { fragment: s, viewBehaviorFactories: h, hostBehaviorFactories: n, targetOffset: l };
      }
      const U = document.createRange();
      class W {
        constructor(e, t) {
          this.fragment = e;
          this.behaviors = t;
          this.source = null;
          this.context = null;
          this.firstChild = e.firstChild;
          this.lastChild = e.lastChild;
        }
        appendTo(e) {
          e.appendChild(this.fragment);
        }
        insertBefore(e) {
          if (this.fragment.hasChildNodes()) {
            e.parentNode.insertBefore(this.fragment, e);
          } else {
            const t = this.lastChild;
            if (e.previousSibling === t) return;
            const s = e.parentNode;
            let i = this.firstChild;
            let n;
            while (i !== t) {
              n = i.nextSibling;
              s.insertBefore(i, e);
              i = n;
            }
            s.insertBefore(t, e);
          }
        }
        remove() {
          const e = this.fragment;
          const t = this.lastChild;
          let s = this.firstChild;
          let i;
          while (s !== t) {
            i = s.nextSibling;
            e.appendChild(s);
            s = i;
          }
          e.appendChild(t);
        }
        dispose() {
          const e = this.firstChild.parentNode;
          const t = this.lastChild;
          let s = this.firstChild;
          let i;
          while (s !== t) {
            i = s.nextSibling;
            e.removeChild(s);
            s = i;
          }
          e.removeChild(t);
          const n = this.behaviors;
          const r = this.source;
          for (let o = 0, l = n.length; o < l; ++o) {
            n[o].unbind(r);
          }
        }
        bind(e, t) {
          const s = this.behaviors;
          if (this.source === e) {
            return;
          } else if (this.source !== null) {
            const i = this.source;
            this.source = e;
            this.context = t;
            for (let n = 0, r = s.length; n < r; ++n) {
              const r = s[n];
              r.unbind(i);
              r.bind(e, t);
            }
          } else {
            this.source = e;
            this.context = t;
            for (let i = 0, n = s.length; i < n; ++i) {
              s[i].bind(e, t);
            }
          }
        }
        unbind() {
          if (this.source === null) {
            return;
          }
          const e = this.behaviors;
          const t = this.source;
          for (let s = 0, i = e.length; s < i; ++s) {
            e[s].unbind(t);
          }
          this.source = null;
        }
        static disposeContiguousBatch(e) {
          if (e.length === 0) {
            return;
          }
          U.setStartBefore(e[0].firstChild);
          U.setEndAfter(e[e.length - 1].lastChild);
          U.deleteContents();
          for (let t = 0, s = e.length; t < s; ++t) {
            const s = e[t];
            const i = s.behaviors;
            const n = s.source;
            for (let e = 0, t = i.length; e < t; ++e) {
              i[e].unbind(n);
            }
          }
        }
      }
      class G {
        constructor(e, t) {
          this.behaviorCount = 0;
          this.hasHostBehaviors = false;
          this.fragment = null;
          this.targetOffset = 0;
          this.viewBehaviorFactories = null;
          this.hostBehaviorFactories = null;
          this.html = e;
          this.directives = t;
        }
        create(e) {
          if (this.fragment === null) {
            let e;
            const t = this.html;
            if (typeof t === "string") {
              e = document.createElement("template");
              e.innerHTML = p.createHTML(t);
              const s = e.content.firstElementChild;
              if (s !== null && s.tagName === "TEMPLATE") {
                e = s;
              }
            } else {
              e = t;
            }
            const s = Q(e, this.directives);
            this.fragment = s.fragment;
            this.viewBehaviorFactories = s.viewBehaviorFactories;
            this.hostBehaviorFactories = s.hostBehaviorFactories;
            this.targetOffset = s.targetOffset;
            this.behaviorCount = this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
            this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
          }
          const t = this.fragment.cloneNode(true);
          const s = this.viewBehaviorFactories;
          const i = new Array(this.behaviorCount);
          const n = p.createTemplateWalker(t);
          let r = 0;
          let o = this.targetOffset;
          let l = n.nextNode();
          for (let h = s.length; r < h; ++r) {
            const e = s[r];
            const t = e.targetIndex;
            while (l !== null) {
              if (o === t) {
                i[r] = e.createBehavior(l);
                break;
              } else {
                l = n.nextNode();
                o++;
              }
            }
          }
          if (this.hasHostBehaviors) {
            const t = this.hostBehaviorFactories;
            for (let s = 0, n = t.length; s < n; ++s, ++r) {
              i[r] = t[s].createBehavior(e);
            }
          }
          return new W(t, i);
        }
        render(e, t, s) {
          if (typeof t === "string") {
            t = document.getElementById(t);
          }
          if (s === void 0) {
            s = t;
          }
          const i = this.create(s);
          i.bind(e, w);
          i.appendTo(t);
          return i;
        }
      }
      const J =
        /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
      function K(e, ...t) {
        const s = [];
        let i = "";
        for (let n = 0, r = e.length - 1; n < r; ++n) {
          const r = e[n];
          let o = t[n];
          i += r;
          if (o instanceof G) {
            const e = o;
            o = () => e;
          }
          if (typeof o === "function") {
            o = new E(o);
          }
          if (o instanceof B) {
            const e = J.exec(r);
            if (e !== null) {
              o.targetName = e[2];
            }
          }
          if (o instanceof S) {
            i += o.createPlaceholder(s.length);
            s.push(o);
          } else {
            i += o;
          }
        }
        i += e[e.length - 1];
        return new G(i, s);
      }
      class X {
        constructor() {
          this.targets = new WeakSet();
        }
        addStylesTo(e) {
          this.targets.add(e);
        }
        removeStylesFrom(e) {
          this.targets.delete(e);
        }
        isAttachedTo(e) {
          return this.targets.has(e);
        }
        withBehaviors(...e) {
          this.behaviors = this.behaviors === null ? e : this.behaviors.concat(e);
          return this;
        }
      }
      X.create = (() => {
        if (p.supportsAdoptedStyleSheets) {
          const e = new Map();
          return (t) => new se(t, e);
        }
        return (e) => new re(e);
      })();
      function Y(e) {
        return e.map((e) => (e instanceof X ? Y(e.styles) : [e])).reduce((e, t) => e.concat(t), []);
      }
      function Z(e) {
        return e
          .map((e) => (e instanceof X ? e.behaviors : null))
          .reduce((e, t) => {
            if (t === null) {
              return e;
            }
            if (e === null) {
              e = [];
            }
            return e.concat(t);
          }, null);
      }
      let ee = (e, t) => {
        e.adoptedStyleSheets = [...e.adoptedStyleSheets, ...t];
      };
      let te = (e, t) => {
        e.adoptedStyleSheets = e.adoptedStyleSheets.filter((e) => t.indexOf(e) === -1);
      };
      if (p.supportsAdoptedStyleSheets) {
        try {
          document.adoptedStyleSheets.push();
          document.adoptedStyleSheets.splice();
          ee = (e, t) => {
            e.adoptedStyleSheets.push(...t);
          };
          te = (e, t) => {
            for (const s of t) {
              const t = e.adoptedStyleSheets.indexOf(s);
              if (t !== -1) {
                e.adoptedStyleSheets.splice(t, 1);
              }
            }
          };
        } catch (ct) {}
      }
      class se extends X {
        constructor(e, t) {
          super();
          this.styles = e;
          this.styleSheetCache = t;
          this._styleSheets = void 0;
          this.behaviors = Z(e);
        }
        get styleSheets() {
          if (this._styleSheets === void 0) {
            const e = this.styles;
            const t = this.styleSheetCache;
            this._styleSheets = Y(e).map((e) => {
              if (e instanceof CSSStyleSheet) {
                return e;
              }
              let s = t.get(e);
              if (s === void 0) {
                s = new CSSStyleSheet();
                s.replaceSync(e);
                t.set(e, s);
              }
              return s;
            });
          }
          return this._styleSheets;
        }
        addStylesTo(e) {
          ee(e, this.styleSheets);
          super.addStylesTo(e);
        }
        removeStylesFrom(e) {
          te(e, this.styleSheets);
          super.removeStylesFrom(e);
        }
      }
      let ie = 0;
      function ne() {
        return `fast-style-class-${++ie}`;
      }
      class re extends X {
        constructor(e) {
          super();
          this.styles = e;
          this.behaviors = null;
          this.behaviors = Z(e);
          this.styleSheets = Y(e);
          this.styleClass = ne();
        }
        addStylesTo(e) {
          const t = this.styleSheets;
          const s = this.styleClass;
          e = this.normalizeTarget(e);
          for (let i = 0; i < t.length; i++) {
            const n = document.createElement("style");
            n.innerHTML = t[i];
            n.className = s;
            e.append(n);
          }
          super.addStylesTo(e);
        }
        removeStylesFrom(e) {
          e = this.normalizeTarget(e);
          const t = e.querySelectorAll(`.${this.styleClass}`);
          for (let s = 0, i = t.length; s < i; ++s) {
            e.removeChild(t[s]);
          }
          super.removeStylesFrom(e);
        }
        isAttachedTo(e) {
          return super.isAttachedTo(this.normalizeTarget(e));
        }
        normalizeTarget(e) {
          return e === document ? document.body : e;
        }
      }
      const oe = Object.freeze({ locate: l() });
      const le = {
        toView(e) {
          return e ? "true" : "false";
        },
        fromView(e) {
          if (e === null || e === void 0 || e === "false" || e === false || e === 0) {
            return false;
          }
          return true;
        },
      };
      const he = {
        toView(e) {
          if (e === null || e === undefined) {
            return null;
          }
          const t = e * 1;
          return isNaN(t) ? null : t.toString();
        },
        fromView(e) {
          if (e === null || e === undefined) {
            return null;
          }
          const t = e * 1;
          return isNaN(t) ? null : t;
        },
      };
      class ae {
        constructor(e, t, s = t.toLowerCase(), i = "reflect", n) {
          this.guards = new Set();
          this.Owner = e;
          this.name = t;
          this.attribute = s;
          this.mode = i;
          this.converter = n;
          this.fieldName = `_${t}`;
          this.callbackName = `${t}Changed`;
          this.hasCallback = this.callbackName in e.prototype;
          if (i === "boolean" && n === void 0) {
            this.converter = le;
          }
        }
        setValue(e, t) {
          const s = e[this.fieldName];
          const i = this.converter;
          if (i !== void 0) {
            t = i.fromView(t);
          }
          if (s !== t) {
            e[this.fieldName] = t;
            this.tryReflectToAttribute(e);
            if (this.hasCallback) {
              e[this.callbackName](s, t);
            }
            e.$fastController.notify(this.name);
          }
        }
        getValue(e) {
          v.track(e, this.name);
          return e[this.fieldName];
        }
        onAttributeChangedCallback(e, t) {
          if (this.guards.has(e)) {
            return;
          }
          this.guards.add(e);
          this.setValue(e, t);
          this.guards.delete(e);
        }
        tryReflectToAttribute(e) {
          const t = this.mode;
          const s = this.guards;
          if (s.has(e) || t === "fromView") {
            return;
          }
          p.queueUpdate(() => {
            s.add(e);
            const i = e[this.fieldName];
            switch (t) {
              case "reflect":
                const t = this.converter;
                p.setAttribute(e, this.attribute, t !== void 0 ? t.toView(i) : i);
                break;
              case "boolean":
                p.setBooleanAttribute(e, this.attribute, i);
                break;
            }
            s.delete(e);
          });
        }
        static collect(e, ...t) {
          const s = [];
          t.push(oe.locate(e));
          for (let i = 0, n = t.length; i < n; ++i) {
            const n = t[i];
            if (n === void 0) {
              continue;
            }
            for (let t = 0, i = n.length; t < i; ++t) {
              const i = n[t];
              if (typeof i === "string") {
                s.push(new ae(e, i));
              } else {
                s.push(new ae(e, i.property, i.attribute, i.mode, i.converter));
              }
            }
          }
          return s;
        }
      }
      function ce(e, t) {
        let s;
        function i(e, t) {
          if (arguments.length > 1) {
            s.property = t;
          }
          oe.locate(e.constructor).push(s);
        }
        if (arguments.length > 1) {
          s = {};
          i(e, t);
          return;
        }
        s = e === void 0 ? {} : e;
        return i;
      }
      const ue = { mode: "open" };
      const de = {};
      const fe = r.getById(4, () => {
        const e = new Map();
        return Object.freeze({
          register(t) {
            if (e.has(t.type)) {
              return false;
            }
            e.set(t.type, t);
            return true;
          },
          getByType(t) {
            return e.get(t);
          },
        });
      });
      class pe {
        constructor(e, t = e.definition) {
          if (typeof t === "string") {
            t = { name: t };
          }
          this.type = e;
          this.name = t.name;
          this.template = t.template;
          const s = ae.collect(e, t.attributes);
          const i = new Array(s.length);
          const n = {};
          const r = {};
          for (let o = 0, l = s.length; o < l; ++o) {
            const e = s[o];
            i[o] = e.attribute;
            n[e.name] = e;
            r[e.attribute] = e;
          }
          this.attributes = s;
          this.observedAttributes = i;
          this.propertyLookup = n;
          this.attributeLookup = r;
          this.shadowOptions =
            t.shadowOptions === void 0 ? ue : t.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, ue), t.shadowOptions);
          this.elementOptions = t.elementOptions === void 0 ? de : Object.assign(Object.assign({}, de), t.elementOptions);
          this.styles =
            t.styles === void 0 ? void 0 : Array.isArray(t.styles) ? X.create(t.styles) : t.styles instanceof X ? t.styles : X.create([t.styles]);
        }
        get isDefined() {
          return !!fe.getByType(this.type);
        }
        define(e = customElements) {
          const t = this.type;
          if (fe.register(this)) {
            const e = this.attributes;
            const s = t.prototype;
            for (let t = 0, i = e.length; t < i; ++t) {
              v.defineProperty(s, e[t]);
            }
            Reflect.defineProperty(t, "observedAttributes", { value: this.observedAttributes, enumerable: true });
          }
          if (!e.get(this.name)) {
            e.define(this.name, t, this.elementOptions);
          }
          return this;
        }
      }
      pe.forType = fe.getByType;
      const ge = new WeakMap();
      const be = { bubbles: true, composed: true, cancelable: true };
      function ve(e) {
        return e.shadowRoot || ge.get(e) || null;
      }
      class me extends b {
        constructor(e, t) {
          super(e);
          this.boundObservables = null;
          this.behaviors = null;
          this.needsInitialization = true;
          this._template = null;
          this._styles = null;
          this._isConnected = false;
          this.$fastController = this;
          this.view = null;
          this.element = e;
          this.definition = t;
          const s = t.shadowOptions;
          if (s !== void 0) {
            const t = e.attachShadow(s);
            if (s.mode === "closed") {
              ge.set(e, t);
            }
          }
          const i = v.getAccessors(e);
          if (i.length > 0) {
            const t = (this.boundObservables = Object.create(null));
            for (let s = 0, n = i.length; s < n; ++s) {
              const n = i[s].name;
              const r = e[n];
              if (r !== void 0) {
                delete e[n];
                t[n] = r;
              }
            }
          }
        }
        get isConnected() {
          v.track(this, "isConnected");
          return this._isConnected;
        }
        setIsConnected(e) {
          this._isConnected = e;
          v.notify(this, "isConnected");
        }
        get template() {
          return this._template;
        }
        set template(e) {
          if (this._template === e) {
            return;
          }
          this._template = e;
          if (!this.needsInitialization) {
            this.renderTemplate(e);
          }
        }
        get styles() {
          return this._styles;
        }
        set styles(e) {
          if (this._styles === e) {
            return;
          }
          if (this._styles !== null) {
            this.removeStyles(this._styles);
          }
          this._styles = e;
          if (!this.needsInitialization && e !== null) {
            this.addStyles(e);
          }
        }
        addStyles(e) {
          const t = ve(this.element) || this.element.getRootNode();
          if (e instanceof HTMLStyleElement) {
            t.append(e);
          } else if (!e.isAttachedTo(t)) {
            const s = e.behaviors;
            e.addStylesTo(t);
            if (s !== null) {
              this.addBehaviors(s);
            }
          }
        }
        removeStyles(e) {
          const t = ve(this.element) || this.element.getRootNode();
          if (e instanceof HTMLStyleElement) {
            t.removeChild(e);
          } else if (e.isAttachedTo(t)) {
            const s = e.behaviors;
            e.removeStylesFrom(t);
            if (s !== null) {
              this.removeBehaviors(s);
            }
          }
        }
        addBehaviors(e) {
          const t = this.behaviors || (this.behaviors = new Map());
          const s = e.length;
          const i = [];
          for (let n = 0; n < s; ++n) {
            const s = e[n];
            if (t.has(s)) {
              t.set(s, t.get(s) + 1);
            } else {
              t.set(s, 1);
              i.push(s);
            }
          }
          if (this._isConnected) {
            const e = this.element;
            for (let t = 0; t < i.length; ++t) {
              i[t].bind(e, w);
            }
          }
        }
        removeBehaviors(e, t = false) {
          const s = this.behaviors;
          if (s === null) {
            return;
          }
          const i = e.length;
          const n = [];
          for (let r = 0; r < i; ++r) {
            const i = e[r];
            if (s.has(i)) {
              const e = s.get(i) - 1;
              e === 0 || t ? s.delete(i) && n.push(i) : s.set(i, e);
            }
          }
          if (this._isConnected) {
            const e = this.element;
            for (let t = 0; t < n.length; ++t) {
              n[t].unbind(e);
            }
          }
        }
        onConnectedCallback() {
          if (this._isConnected) {
            return;
          }
          const e = this.element;
          if (this.needsInitialization) {
            this.finishInitialization();
          } else if (this.view !== null) {
            this.view.bind(e, w);
          }
          const t = this.behaviors;
          if (t !== null) {
            for (const [s] of t) {
              s.bind(e, w);
            }
          }
          this.setIsConnected(true);
        }
        onDisconnectedCallback() {
          if (!this._isConnected) {
            return;
          }
          this.setIsConnected(false);
          const e = this.view;
          if (e !== null) {
            e.unbind();
          }
          const t = this.behaviors;
          if (t !== null) {
            const e = this.element;
            for (const [s] of t) {
              s.unbind(e);
            }
          }
        }
        onAttributeChangedCallback(e, t, s) {
          const i = this.definition.attributeLookup[e];
          if (i !== void 0) {
            i.onAttributeChangedCallback(this.element, s);
          }
        }
        emit(e, t, s) {
          if (this._isConnected) {
            return this.element.dispatchEvent(new CustomEvent(e, Object.assign(Object.assign({ detail: t }, be), s)));
          }
          return false;
        }
        finishInitialization() {
          const e = this.element;
          const t = this.boundObservables;
          if (t !== null) {
            const s = Object.keys(t);
            for (let i = 0, n = s.length; i < n; ++i) {
              const n = s[i];
              e[n] = t[n];
            }
            this.boundObservables = null;
          }
          const s = this.definition;
          if (this._template === null) {
            if (this.element.resolveTemplate) {
              this._template = this.element.resolveTemplate();
            } else if (s.template) {
              this._template = s.template || null;
            }
          }
          if (this._template !== null) {
            this.renderTemplate(this._template);
          }
          if (this._styles === null) {
            if (this.element.resolveStyles) {
              this._styles = this.element.resolveStyles();
            } else if (s.styles) {
              this._styles = s.styles || null;
            }
          }
          if (this._styles !== null) {
            this.addStyles(this._styles);
          }
          this.needsInitialization = false;
        }
        renderTemplate(e) {
          const t = this.element;
          const s = ve(t) || t;
          if (this.view !== null) {
            this.view.dispose();
            this.view = null;
          } else if (!this.needsInitialization) {
            p.removeChildNodes(s);
          }
          if (e) {
            this.view = e.render(t, s, t);
          }
        }
        static forCustomElement(e) {
          const t = e.$fastController;
          if (t !== void 0) {
            return t;
          }
          const s = pe.forType(e.constructor);
          if (s === void 0) {
            throw new Error("Missing FASTElement definition.");
          }
          return (e.$fastController = new me(e, s));
        }
      }
      function ye(e) {
        return class extends e {
          constructor() {
            super();
            me.forCustomElement(this);
          }
          $emit(e, t, s) {
            return this.$fastController.emit(e, t, s);
          }
          connectedCallback() {
            this.$fastController.onConnectedCallback();
          }
          disconnectedCallback() {
            this.$fastController.onDisconnectedCallback();
          }
          attributeChangedCallback(e, t, s) {
            this.$fastController.onAttributeChangedCallback(e, t, s);
          }
        };
      }
      const Ce = Object.assign(ye(HTMLElement), {
        from(e) {
          return ye(e);
        },
        define(e, t) {
          return new pe(e, t).define().type;
        },
      });
      function xe(e) {
        return function (t) {
          new pe(t, e).define();
        };
      }
      class we {
        createCSS() {
          return "";
        }
        createBehavior() {
          return undefined;
        }
      }
      function Se(e, t) {
        const s = [];
        let i = "";
        const n = [];
        for (let r = 0, o = e.length - 1; r < o; ++r) {
          i += e[r];
          let o = t[r];
          if (o instanceof we) {
            const e = o.createBehavior();
            o = o.createCSS();
            if (e) {
              n.push(e);
            }
          }
          if (o instanceof X || o instanceof CSSStyleSheet) {
            if (i.trim() !== "") {
              s.push(i);
              i = "";
            }
            s.push(o);
          } else {
            i += o;
          }
        }
        i += e[e.length - 1];
        if (i.trim() !== "") {
          s.push(i);
        }
        return { styles: s, behaviors: n };
      }
      function Be(e, ...t) {
        const { styles: s, behaviors: i } = Se(e, t);
        const n = X.create(s);
        if (i.length) {
          n.withBehaviors(...i);
        }
        return n;
      }
      class Te extends we {
        constructor(e, t) {
          super();
          this.behaviors = t;
          this.css = "";
          const s = e.reduce((e, t) => {
            if (typeof t === "string") {
              this.css += t;
            } else {
              e.push(t);
            }
            return e;
          }, []);
          if (s.length) {
            this.styles = X.create(s);
          }
        }
        createBehavior() {
          return this;
        }
        createCSS() {
          return this.css;
        }
        bind(e) {
          if (this.styles) {
            e.$fastController.addStyles(this.styles);
          }
          if (this.behaviors.length) {
            e.$fastController.addBehaviors(this.behaviors);
          }
        }
        unbind(e) {
          if (this.styles) {
            e.$fastController.removeStyles(this.styles);
          }
          if (this.behaviors.length) {
            e.$fastController.removeBehaviors(this.behaviors);
          }
        }
      }
      function Oe(e, ...t) {
        const { styles: s, behaviors: i } = Se(e, t);
        return new Te(s, i);
      }
      function Ae(e, t, s) {
        return { index: e, removed: t, addedCount: s };
      }
      const Ne = 0;
      const ke = 1;
      const Ve = 2;
      const $e = 3;
      function Fe(e, t, s, i, n, r) {
        const o = r - n + 1;
        const l = s - t + 1;
        const h = new Array(o);
        let a;
        let c;
        for (let u = 0; u < o; ++u) {
          h[u] = new Array(l);
          h[u][0] = u;
        }
        for (let u = 0; u < l; ++u) {
          h[0][u] = u;
        }
        for (let u = 1; u < o; ++u) {
          for (let s = 1; s < l; ++s) {
            if (e[t + s - 1] === i[n + u - 1]) {
              h[u][s] = h[u - 1][s - 1];
            } else {
              a = h[u - 1][s] + 1;
              c = h[u][s - 1] + 1;
              h[u][s] = a < c ? a : c;
            }
          }
        }
        return h;
      }
      function _e(e) {
        let t = e.length - 1;
        let s = e[0].length - 1;
        let i = e[t][s];
        const n = [];
        while (t > 0 || s > 0) {
          if (t === 0) {
            n.push(Ve);
            s--;
            continue;
          }
          if (s === 0) {
            n.push($e);
            t--;
            continue;
          }
          const r = e[t - 1][s - 1];
          const o = e[t - 1][s];
          const l = e[t][s - 1];
          let h;
          if (o < l) {
            h = o < r ? o : r;
          } else {
            h = l < r ? l : r;
          }
          if (h === r) {
            if (r === i) {
              n.push(Ne);
            } else {
              n.push(ke);
              i = r;
            }
            t--;
            s--;
          } else if (h === o) {
            n.push($e);
            t--;
            i = o;
          } else {
            n.push(Ve);
            s--;
            i = l;
          }
        }
        n.reverse();
        return n;
      }
      function Ie(e, t, s) {
        for (let i = 0; i < s; ++i) {
          if (e[i] !== t[i]) {
            return i;
          }
        }
        return s;
      }
      function Me(e, t, s) {
        let i = e.length;
        let n = t.length;
        let r = 0;
        while (r < s && e[--i] === t[--n]) {
          r++;
        }
        return r;
      }
      function Ee(e, t, s, i) {
        if (t < s || i < e) {
          return -1;
        }
        if (t === s || i === e) {
          return 0;
        }
        if (e < s) {
          if (t < i) {
            return t - s;
          }
          return i - s;
        }
        if (i < t) {
          return i - e;
        }
        return t - e;
      }
      function Le(e, t, s, i, n, r) {
        let l = 0;
        let h = 0;
        const a = Math.min(s - t, r - n);
        if (t === 0 && n === 0) {
          l = Ie(e, i, a);
        }
        if (s === e.length && r === i.length) {
          h = Me(e, i, a - l);
        }
        t += l;
        n += l;
        s -= h;
        r -= h;
        if (s - t === 0 && r - n === 0) {
          return o;
        }
        if (t === s) {
          const e = Ae(t, [], 0);
          while (n < r) {
            e.removed.push(i[n++]);
          }
          return [e];
        } else if (n === r) {
          return [Ae(t, [], s - t)];
        }
        const c = _e(Fe(e, t, s, i, n, r));
        const u = [];
        let d = void 0;
        let f = t;
        let p = n;
        for (let o = 0; o < c.length; ++o) {
          switch (c[o]) {
            case Ne:
              if (d !== void 0) {
                u.push(d);
                d = void 0;
              }
              f++;
              p++;
              break;
            case ke:
              if (d === void 0) {
                d = Ae(f, [], 0);
              }
              d.addedCount++;
              f++;
              d.removed.push(i[p]);
              p++;
              break;
            case Ve:
              if (d === void 0) {
                d = Ae(f, [], 0);
              }
              d.addedCount++;
              f++;
              break;
            case $e:
              if (d === void 0) {
                d = Ae(f, [], 0);
              }
              d.removed.push(i[p]);
              p++;
              break;
          }
        }
        if (d !== void 0) {
          u.push(d);
        }
        return u;
      }
      const Pe = Array.prototype.push;
      function je(e, t, s, i) {
        const n = Ae(t, s, i);
        let r = false;
        let o = 0;
        for (let l = 0; l < e.length; l++) {
          const t = e[l];
          t.index += o;
          if (r) {
            continue;
          }
          const s = Ee(n.index, n.index + n.removed.length, t.index, t.index + t.addedCount);
          if (s >= 0) {
            e.splice(l, 1);
            l--;
            o -= t.addedCount - t.removed.length;
            n.addedCount += t.addedCount - s;
            const i = n.removed.length + t.removed.length - s;
            if (!n.addedCount && !i) {
              r = true;
            } else {
              let e = t.removed;
              if (n.index < t.index) {
                const s = n.removed.slice(0, t.index - n.index);
                Pe.apply(s, e);
                e = s;
              }
              if (n.index + n.removed.length > t.index + t.addedCount) {
                const s = n.removed.slice(t.index + t.addedCount - n.index);
                Pe.apply(e, s);
              }
              n.removed = e;
              if (t.index < n.index) {
                n.index = t.index;
              }
            }
          } else if (n.index < t.index) {
            r = true;
            e.splice(l, 0, n);
            l++;
            const s = n.addedCount - n.removed.length;
            t.index += s;
            o += s;
          }
        }
        if (!r) {
          e.push(n);
        }
      }
      function Re(e) {
        const t = [];
        for (let s = 0, i = e.length; s < i; s++) {
          const i = e[s];
          je(t, i.index, i.removed, i.addedCount);
        }
        return t;
      }
      function He(e, t) {
        let s = [];
        const i = Re(t);
        for (let n = 0, r = i.length; n < r; ++n) {
          const t = i[n];
          if (t.addedCount === 1 && t.removed.length === 1) {
            if (t.removed[0] !== e[t.index]) {
              s.push(t);
            }
            continue;
          }
          s = s.concat(Le(e, t.index, t.index + t.addedCount, t.removed, 0, t.removed.length));
        }
        return s;
      }
      let ze = false;
      function De(e, t) {
        let s = e.index;
        const i = t.length;
        if (s > i) {
          s = i - e.addedCount;
        } else if (s < 0) {
          s = i + e.removed.length + s - e.addedCount;
        }
        if (s < 0) {
          s = 0;
        }
        e.index = s;
        return e;
      }
      class qe extends g {
        constructor(e) {
          super(e);
          this.oldCollection = void 0;
          this.splices = void 0;
          this.needsQueue = true;
          this.call = this.flush;
          Reflect.defineProperty(e, "$fastController", { value: this, enumerable: false });
        }
        subscribe(e) {
          this.flush();
          super.subscribe(e);
        }
        addSplice(e) {
          if (this.splices === void 0) {
            this.splices = [e];
          } else {
            this.splices.push(e);
          }
          if (this.needsQueue) {
            this.needsQueue = false;
            p.queueUpdate(this);
          }
        }
        reset(e) {
          this.oldCollection = e;
          if (this.needsQueue) {
            this.needsQueue = false;
            p.queueUpdate(this);
          }
        }
        flush() {
          const e = this.splices;
          const t = this.oldCollection;
          if (e === void 0 && t === void 0) {
            return;
          }
          this.needsQueue = true;
          this.splices = void 0;
          this.oldCollection = void 0;
          const s = t === void 0 ? He(this.source, e) : Le(this.source, 0, this.source.length, t, 0, t.length);
          this.notify(s);
        }
      }
      function Qe() {
        if (ze) {
          return;
        }
        ze = true;
        v.setArrayObserverFactory((e) => new qe(e));
        const e = Array.prototype;
        if (e.$fastPatch) {
          return;
        }
        Reflect.defineProperty(e, "$fastPatch", { value: 1, enumerable: false });
        const t = e.pop;
        const s = e.push;
        const i = e.reverse;
        const n = e.shift;
        const r = e.sort;
        const o = e.splice;
        const l = e.unshift;
        e.pop = function () {
          const e = this.length > 0;
          const s = t.apply(this, arguments);
          const i = this.$fastController;
          if (i !== void 0 && e) {
            i.addSplice(Ae(this.length, [s], 0));
          }
          return s;
        };
        e.push = function () {
          const e = s.apply(this, arguments);
          const t = this.$fastController;
          if (t !== void 0) {
            t.addSplice(De(Ae(this.length - arguments.length, [], arguments.length), this));
          }
          return e;
        };
        e.reverse = function () {
          let e;
          const t = this.$fastController;
          if (t !== void 0) {
            t.flush();
            e = this.slice();
          }
          const s = i.apply(this, arguments);
          if (t !== void 0) {
            t.reset(e);
          }
          return s;
        };
        e.shift = function () {
          const e = this.length > 0;
          const t = n.apply(this, arguments);
          const s = this.$fastController;
          if (s !== void 0 && e) {
            s.addSplice(Ae(0, [t], 0));
          }
          return t;
        };
        e.sort = function () {
          let e;
          const t = this.$fastController;
          if (t !== void 0) {
            t.flush();
            e = this.slice();
          }
          const s = r.apply(this, arguments);
          if (t !== void 0) {
            t.reset(e);
          }
          return s;
        };
        e.splice = function () {
          const e = o.apply(this, arguments);
          const t = this.$fastController;
          if (t !== void 0) {
            t.addSplice(De(Ae(+arguments[0], e, arguments.length > 2 ? arguments.length - 2 : 0), this));
          }
          return e;
        };
        e.unshift = function () {
          const e = l.apply(this, arguments);
          const t = this.$fastController;
          if (t !== void 0) {
            t.addSplice(De(Ae(0, [], arguments.length), this));
          }
          return e;
        };
      }
      class Ue {
        constructor(e, t) {
          this.target = e;
          this.propertyName = t;
        }
        bind(e) {
          e[this.propertyName] = this.target;
        }
        unbind() {}
      }
      function We(e) {
        return new T("fast-ref", Ue, e);
      }
      const Ge = (e) => typeof e === "function";
      const Je = () => null;
      function Ke(e) {
        return e === undefined ? Je : Ge(e) ? e : () => e;
      }
      function Xe(e, t, s) {
        const i = Ge(e) ? e : () => e;
        const n = Ke(t);
        const r = Ke(s);
        return (e, t) => (i(e, t) ? n(e, t) : r(e, t));
      }
      const Ye = Object.freeze({ positioning: false, recycle: true });
      function Ze(e, t, s, i) {
        e.bind(t[s], i);
      }
      function et(e, t, s, i) {
        const n = Object.create(i);
        n.index = s;
        n.length = t.length;
        e.bind(t[s], n);
      }
      class tt {
        constructor(e, t, s, i, n, r) {
          this.location = e;
          this.itemsBinding = t;
          this.templateBinding = i;
          this.options = r;
          this.source = null;
          this.views = [];
          this.items = null;
          this.itemsObserver = null;
          this.originalContext = void 0;
          this.childContext = void 0;
          this.bindView = Ze;
          this.itemsBindingObserver = v.binding(t, this, s);
          this.templateBindingObserver = v.binding(i, this, n);
          if (r.positioning) {
            this.bindView = et;
          }
        }
        bind(e, t) {
          this.source = e;
          this.originalContext = t;
          this.childContext = Object.create(t);
          this.childContext.parent = e;
          this.childContext.parentContext = this.originalContext;
          this.items = this.itemsBindingObserver.observe(e, this.originalContext);
          this.template = this.templateBindingObserver.observe(e, this.originalContext);
          this.observeItems(true);
          this.refreshAllViews();
        }
        unbind() {
          this.source = null;
          this.items = null;
          if (this.itemsObserver !== null) {
            this.itemsObserver.unsubscribe(this);
          }
          this.unbindAllViews();
          this.itemsBindingObserver.disconnect();
          this.templateBindingObserver.disconnect();
        }
        handleChange(e, t) {
          if (e === this.itemsBinding) {
            this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
            this.observeItems();
            this.refreshAllViews();
          } else if (e === this.templateBinding) {
            this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
            this.refreshAllViews(true);
          } else {
            this.updateViews(t);
          }
        }
        observeItems(e = false) {
          if (!this.items) {
            this.items = o;
            return;
          }
          const t = this.itemsObserver;
          const s = (this.itemsObserver = v.getNotifier(this.items));
          const i = t !== s;
          if (i && t !== null) {
            t.unsubscribe(this);
          }
          if (i || e) {
            s.subscribe(this);
          }
        }
        updateViews(e) {
          const t = this.childContext;
          const s = this.views;
          const i = this.bindView;
          const n = this.items;
          const r = this.template;
          const o = this.options.recycle;
          const l = [];
          let h = 0;
          let a = 0;
          for (let c = 0, u = e.length; c < u; ++c) {
            const u = e[c];
            const d = u.removed;
            let f = 0;
            let p = u.index;
            const g = p + u.addedCount;
            const b = s.splice(u.index, d.length);
            const v = (a = l.length + b.length);
            for (; p < g; ++p) {
              const e = s[p];
              const c = e ? e.firstChild : this.location;
              let u;
              if (o && a > 0) {
                if (f <= v && b.length > 0) {
                  u = b[f];
                  f++;
                } else {
                  u = l[h];
                  h++;
                }
                a--;
              } else {
                u = r.create();
              }
              s.splice(p, 0, u);
              i(u, n, p, t);
              u.insertBefore(c);
            }
            if (b[f]) {
              l.push(...b.slice(f));
            }
          }
          for (let c = h, u = l.length; c < u; ++c) {
            l[c].dispose();
          }
          if (this.options.positioning) {
            for (let e = 0, t = s.length; e < t; ++e) {
              const i = s[e].context;
              i.length = t;
              i.index = e;
            }
          }
        }
        refreshAllViews(e = false) {
          const t = this.items;
          const s = this.childContext;
          const i = this.template;
          const n = this.location;
          const r = this.bindView;
          let o = t.length;
          let l = this.views;
          let h = l.length;
          if (o === 0 || e || !this.options.recycle) {
            W.disposeContiguousBatch(l);
            h = 0;
          }
          if (h === 0) {
            this.views = l = new Array(o);
            for (let e = 0; e < o; ++e) {
              const o = i.create();
              r(o, t, e, s);
              l[e] = o;
              o.insertBefore(n);
            }
          } else {
            let e = 0;
            for (; e < o; ++e) {
              if (e < h) {
                const i = l[e];
                r(i, t, e, s);
              } else {
                const o = i.create();
                r(o, t, e, s);
                l.push(o);
                o.insertBefore(n);
              }
            }
            const a = l.splice(e, h - e);
            for (e = 0, o = a.length; e < o; ++e) {
              a[e].dispose();
            }
          }
        }
        unbindAllViews() {
          const e = this.views;
          for (let t = 0, s = e.length; t < s; ++t) {
            e[t].unbind();
          }
        }
      }
      class st extends S {
        constructor(e, t, s) {
          super();
          this.itemsBinding = e;
          this.templateBinding = t;
          this.options = s;
          this.createPlaceholder = p.createBlockPlaceholder;
          Qe();
          this.isItemsBindingVolatile = v.isVolatileBinding(e);
          this.isTemplateBindingVolatile = v.isVolatileBinding(t);
        }
        createBehavior(e) {
          return new tt(e, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
        }
      }
      function it(e, t, s = Ye) {
        const i = typeof t === "function" ? t : () => t;
        return new st(e, i, Object.assign(Object.assign({}, Ye), s));
      }
      function nt(e) {
        if (e) {
          return function (t, s, i) {
            return t.nodeType === 1 && t.matches(e);
          };
        }
        return function (e, t, s) {
          return e.nodeType === 1;
        };
      }
      class rt {
        constructor(e, t) {
          this.target = e;
          this.options = t;
          this.source = null;
        }
        bind(e) {
          const t = this.options.property;
          this.shouldUpdate = v.getAccessors(e).some((e) => e.name === t);
          this.source = e;
          this.updateTarget(this.computeNodes());
          if (this.shouldUpdate) {
            this.observe();
          }
        }
        unbind() {
          this.updateTarget(o);
          this.source = null;
          if (this.shouldUpdate) {
            this.disconnect();
          }
        }
        handleEvent() {
          this.updateTarget(this.computeNodes());
        }
        computeNodes() {
          let e = this.getNodes();
          if (this.options.filter !== void 0) {
            e = e.filter(this.options.filter);
          }
          return e;
        }
        updateTarget(e) {
          this.source[this.options.property] = e;
        }
      }
      class ot extends rt {
        constructor(e, t) {
          super(e, t);
        }
        observe() {
          this.target.addEventListener("slotchange", this);
        }
        disconnect() {
          this.target.removeEventListener("slotchange", this);
        }
        getNodes() {
          return this.target.assignedNodes(this.options);
        }
      }
      function lt(e) {
        if (typeof e === "string") {
          e = { property: e };
        }
        return new T("fast-slotted", ot, e);
      }
      class ht extends rt {
        constructor(e, t) {
          super(e, t);
          this.observer = null;
          t.childList = true;
        }
        observe() {
          if (this.observer === null) {
            this.observer = new MutationObserver(this.handleEvent.bind(this));
          }
          this.observer.observe(this.target, this.options);
        }
        disconnect() {
          this.observer.disconnect();
        }
        getNodes() {
          if ("subtree" in this.options) {
            return Array.from(this.target.querySelectorAll(this.options.selector));
          }
          return Array.from(this.target.childNodes);
        }
      }
      function at(e) {
        if (typeof e === "string") {
          e = { property: e };
        }
        return new T("fast-children", ht, e);
      }
    },
  },
]);
