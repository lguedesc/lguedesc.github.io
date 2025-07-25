"use strict";
(self.webpackChunk_jupyter_notebook_lab_extension = self.webpackChunk_jupyter_notebook_lab_extension || []).push([
  [928],
  {
    950: (t, e, r) => {
      r.d(e, { as: () => p });
      var n = r(943),
        i = r(353),
        a = r(191),
        o = r(414),
        s = r(449),
        c = r(930),
        d = r(4);
      const u = new c.Token(
        "@jupyterlab/application:ILayoutRestorer",
        "A service providing application layout restoration functionality. Use this to have your activities restored across page loads."
      );
      var y;
      !(function (t) {
        function e(r) {
          return r && r.type
            ? "tab-area" === r.type
              ? { type: "tab-area", currentIndex: r.currentIndex, widgets: r.widgets.map((e) => t.nameProperty.get(e)).filter((t) => !!t) }
              : { type: "split-area", orientation: r.orientation, sizes: r.sizes, children: r.children.map(e).filter((t) => !!t) }
            : null;
        }
        function r(t, e) {
          if (!t) return null;
          const n = t.type || "unknown";
          if ("unknown" === n || ("tab-area" !== n && "split-area" !== n)) return console.warn(`Attempted to deserialize unknown type: ${n}`), null;
          if ("tab-area" === n) {
            const { currentIndex: r, widgets: n } = t,
              i = { type: "tab-area", currentIndex: r || 0, widgets: (n && n.map((t) => e.get(t)).filter((t) => !!t)) || [] };
            return i.currentIndex > i.widgets.length - 1 && (i.currentIndex = 0), i;
          }
          const { orientation: i, sizes: a, children: o } = t;
          return { type: "split-area", orientation: i, sizes: a || [], children: (o && o.map((t) => r(t, e)).filter((t) => !!t)) || [] };
        }
        (t.nameProperty = new d.AttachedProperty({ name: "name", create: (t) => "" })),
          (t.serializeMain = function (r) {
            const n = { dock: (r && r.dock && e(r.dock.main)) || null };
            if (r && r.currentWidget) {
              const e = t.nameProperty.get(r.currentWidget);
              e && (n.current = e);
            }
            return n;
          }),
          (t.deserializeMain = function (t, e) {
            if (!t) return null;
            const n = t.current || null,
              i = t.dock || null;
            return { currentWidget: (n && e.has(n) && e.get(n)) || null, dock: i ? { main: r(i, e) } : null };
          });
      })(y || (y = {}));
      const l = new c.Token(
        "@jupyterlab/application:IMimeDocumentTracker",
        "A widget tracker for documents rendered using a mime renderer extension. Use this if you want to list and interact with documents rendered by such extensions."
      );
      function p(t) {
        const e = [],
          r = new n.WidgetTracker({ namespace: "application-mimedocuments" });
        return (
          t.forEach((t) => {
            let n = t.default;
            t.hasOwnProperty("__esModule") || (n = t),
              Array.isArray(n) || (n = [n]),
              n.forEach((t) => {
                e.push(
                  (function (t, e) {
                    return {
                      id: e.id,
                      description: e.description,
                      requires: [a.IRenderMimeRegistry, o.ITranslator],
                      autoStart: !0,
                      activate: (r, n, a) => {
                        if (
                          (void 0 !== e.rank ? n.addFactory(e.rendererFactory, e.rank) : n.addFactory(e.rendererFactory),
                          !e.documentWidgetFactoryOptions)
                        )
                          return;
                        const o = r.docRegistry;
                        let c = [];
                        (c = Array.isArray(e.documentWidgetFactoryOptions) ? e.documentWidgetFactoryOptions : [e.documentWidgetFactoryOptions]),
                          e.fileTypes &&
                            e.fileTypes.forEach((t) => {
                              t.icon && (t = { ...t, icon: s.LabIcon.resolve({ icon: t.icon }) }), r.docRegistry.addFileType(t);
                            }),
                          c.forEach((r) => {
                            const s = r.toolbarFactory ? (t) => r.toolbarFactory(t.content.renderer) : void 0,
                              c = new i.MimeDocumentFactory({
                                renderTimeout: e.renderTimeout,
                                dataType: e.dataType,
                                rendermime: n,
                                modelName: r.modelName,
                                name: r.name,
                                primaryFileType: o.getFileType(r.primaryFileType),
                                fileTypes: r.fileTypes,
                                defaultFor: r.defaultFor,
                                defaultRendered: r.defaultRendered,
                                toolbarFactory: s,
                                translator: a,
                                factory: e.rendererFactory,
                              });
                            o.addWidgetFactory(c),
                              c.widgetCreated.connect((e, r) => {
                                m.factoryNameProperty.set(r, c.name),
                                  r.context.pathChanged.connect(() => {
                                    t.save(r);
                                  }),
                                  t.add(r);
                              });
                          });
                      },
                    };
                  })(r, t)
                );
              });
          }),
          e.push({
            id: "@jupyterlab/application-extension:mimedocument",
            description: "Provides a mime document widget tracker.",
            optional: [u],
            provides: l,
            autoStart: !0,
            activate: (t, e) => (
              e &&
                e.restore(r, {
                  command: "docmanager:open",
                  args: (t) => ({ path: t.context.path, factory: m.factoryNameProperty.get(t) }),
                  name: (t) => `${t.context.path}:${m.factoryNameProperty.get(t)}`,
                }),
              r
            ),
          }),
          e
        );
      }
      var m;
      !(function (t) {
        t.factoryNameProperty = new d.AttachedProperty({ name: "factoryName", create: () => {} });
      })(m || (m = {}));
    },
    448: (t, e, r) => {
      r.d(e, { J: () => a });
      var n = r(717),
        i = r(901);
      class a {
        constructor(t) {
          (this._busyCount = 0), (this._dirtyCount = 0), (this._busySignal = new i.Signal(t)), (this._dirtySignal = new i.Signal(t));
        }
        get busySignal() {
          return this._busySignal;
        }
        get dirtySignal() {
          return this._dirtySignal;
        }
        get isBusy() {
          return this._busyCount > 0;
        }
        get isDirty() {
          return this._dirtyCount > 0;
        }
        setDirty() {
          const t = this.isDirty;
          return (
            this._dirtyCount++,
            this.isDirty !== t && this._dirtySignal.emit(this.isDirty),
            new n.DisposableDelegate(() => {
              const t = this.isDirty;
              (this._dirtyCount = Math.max(0, this._dirtyCount - 1)), this.isDirty !== t && this._dirtySignal.emit(this.isDirty);
            })
          );
        }
        setBusy() {
          const t = this.isBusy;
          return (
            this._busyCount++,
            this.isBusy !== t && this._busySignal.emit(this.isBusy),
            new n.DisposableDelegate(() => {
              const t = this.isBusy;
              this._busyCount--, this.isBusy !== t && this._busySignal.emit(this.isBusy);
            })
          );
        }
      }
    },
  },
]);
