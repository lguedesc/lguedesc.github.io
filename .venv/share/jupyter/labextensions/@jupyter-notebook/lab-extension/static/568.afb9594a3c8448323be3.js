"use strict";
(self.webpackChunk_jupyter_notebook_lab_extension = self.webpackChunk_jupyter_notebook_lab_extension || []).push([
  [568],
  {
    568: (e, o, t) => {
      t.r(o), t.d(o, { default: () => m });
      var n,
        a = t(358),
        r = t(943),
        c = t(281),
        l = t(490),
        i = t(414),
        s = t(882),
        b = t(509),
        d = t(449);
      !(function (e) {
        (e.launchNotebookTree = "jupyter-notebook:launch-tree"),
          (e.openNotebook = "jupyter-notebook:open-notebook"),
          (e.openLab = "jupyter-notebook:open-lab"),
          (e.openNbClassic = "jupyter-notebook:open-nbclassic");
      })(n || (n = {}));
      const u = {
          id: "@jupyter-notebook/lab-extension:interface-switcher",
          description: "A plugin to add custom toolbar items to the notebook page.",
          autoStart: !0,
          requires: [i.ITranslator],
          optional: [l.INotebookTracker, r.ICommandPalette, b.INotebookPathOpener, b.INotebookShell, a.ILabShell, r.IToolbarWidgetRegistry],
          activate: (e, o, t, a, r, l, i, u) => {
            if (!t) return;
            const { commands: m, shell: p } = e,
              k = c.PageConfig.getBaseUrl(),
              h = o.load("notebook"),
              _ = "true" === c.PageConfig.getOption("nbclassic_enabled"),
              g = new s.Menu({ commands: m }),
              f = [],
              N = null != r ? r : b.defaultNotebookPathOpener;
            l ||
              f.push({
                command: n.openNotebook,
                commandLabel: h.__("Notebook"),
                commandDescription: h.__("Open in %1", "Jupyter Notebook"),
                buttonLabel: "openNotebook",
                urlPrefix: `${k}tree`,
              }),
              i ||
                f.push({
                  command: n.openLab,
                  commandLabel: h.__("JupyterLab"),
                  commandDescription: h.__("Open in %1", "JupyterLab"),
                  buttonLabel: "openLab",
                  urlPrefix: `${k}doc/tree`,
                }),
              _ &&
                f.push({
                  command: n.openNbClassic,
                  commandLabel: h.__("NbClassic"),
                  commandDescription: h.__("Open in %1", "NbClassic"),
                  buttonLabel: "openNbClassic",
                  urlPrefix: `${k}nbclassic/notebooks`,
                });
            const y = () => null !== t.currentWidget && t.currentWidget === p.currentWidget;
            let C;
            if (
              (f.forEach((e) => {
                const { command: o } = e;
                ((e) => {
                  const { command: o, commandLabel: n, commandDescription: r, urlPrefix: c } = e;
                  m.addCommand(o, {
                    label: (e) => (e.noLabel, e.isMenu || e.isPalette ? r : n),
                    caption: n,
                    execute: () => {
                      const e = t.currentWidget;
                      e && N.open({ prefix: c, path: e.context.path });
                    },
                    isEnabled: y,
                  }),
                    a && a.addItem({ command: o, category: "Other", args: { isPalette: !0 } });
                })(e),
                  g.addItem({ command: o });
              }),
              1 === f.length)
            )
              C = (e) => {
                const o = new d.CommandToolbarButton({ commands: m, id: f[0].command, label: f[0].commandLabel, icon: d.launchIcon });
                return o.addClass("jp-nb-interface-switcher-button"), o;
              };
            else {
              const e = { overflowMenuOptions: { isVisible: !1 } },
                o = new s.MenuBar(e);
              (g.title.label = h.__("Open in...")),
                (g.title.icon = d.caretDownIcon),
                o.addMenu(g),
                (C = (o) => {
                  const t = new s.MenuBar(e);
                  return t.addMenu(g), t.addClass("jp-InterfaceSwitcher"), t;
                });
            }
            u && u.addFactory("Notebook", "interfaceSwitcher", C);
          },
        },
        m = [
          {
            id: "@jupyter-notebook/lab-extension:launch-tree",
            description: "A plugin to add a command to open the Jupyter Notebook Tree.",
            autoStart: !0,
            requires: [i.ITranslator],
            optional: [r.ICommandPalette],
            activate: (e, o, t) => {
              const { commands: a } = e,
                r = o.load("notebook"),
                l = r.__("Help");
              a.addCommand(n.launchNotebookTree, {
                label: r.__("Launch Jupyter Notebook File Browser"),
                execute: () => {
                  const e = c.URLExt.join(c.PageConfig.getBaseUrl(), "tree");
                  window.open(e);
                },
              }),
                t && t.addItem({ command: n.launchNotebookTree, category: l });
            },
          },
          u,
        ];
    },
  },
]);
