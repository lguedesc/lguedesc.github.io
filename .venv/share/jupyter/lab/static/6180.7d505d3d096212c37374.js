"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6180],
  {
    15136: (e, t, r) => {
      r.r(t);
      r.d(t, { main: () => D });
      var o = r(66646);
      var n = r(5592);
      var s = r(20979);
      var l = r(25313);
      var a = r(56104);
      var i = r(11114);
      var c = r(72508);
      var u = r(2129);
      var p = r(99382);
      var f = r(36672);
      var _ = r(1904);
      var A = r(87779);
      var y = r(13067);
      var h = r(67374);
      var d = r(20135);
      var b = r(61689);
      var x = r(34072);
      var j = r(54336);
      var m = r(19457);
      var v = r(43017);
      var g = r(45695);
      var w = r(53640);
      var C = r(367);
      var k = r(68149);
      var P = r(87456);
      var S = r(4380);
      var E = r(61132);
      var O = r(57996);
      var R = r(41884);
      var I = r(51874);
      var L = r(90288);
      var M = r(87145);
      var N = r(90167);
      var $ = r(98547);
      var J = r(57292);
      var Q = r(80046);
      var B = r(54289);
      var T = r(40779);
      var U = r(48552);
      var Y = r(40005);
      var q = r(70558);
      var z = r(31747);
      var G = r(95527);
      var K = r(50277);
      var V = r(77767);
      var F = r(54549);
      var H = r(75591);
      async function Z(e, t) {
        try {
          const r = await window._JUPYTERLAB[e].get(t);
          const o = r();
          o.__scope__ = e;
          return o;
        } catch (r) {
          console.warn(`Failed to create module: package: ${e}; module: ${t}`);
          throw r;
        }
      }
      async function D() {
        var e = o.PageConfig.getOption("browserTest");
        if (e.toLowerCase() === "true") {
          var t = document.createElement("div");
          t.id = "browserTest";
          document.body.appendChild(t);
          t.textContent = "[]";
          t.style.display = "none";
          var s = [];
          var l = false;
          var a = 25e3;
          var i = function () {
            if (l) {
              return;
            }
            l = true;
            t.className = "completed";
          };
          window.onerror = function (e, r, o, n, l) {
            s.push(String(l));
            t.textContent = JSON.stringify(s);
          };
          console.error = function (e) {
            s.push(String(e));
            t.textContent = JSON.stringify(s);
          };
        }
        var c = new n.PluginRegistry();
        var u = r(30244).JupyterLab;
        var p = [];
        var f = [];
        var _ = [];
        var A = [];
        const y = [];
        const h = [];
        const d = [];
        const b = JSON.parse(o.PageConfig.getOption("federated_extensions"));
        const x = {
          "@jupyterlab/application:mimedocument": "@jupyterlab/application-extension:mimedocument",
          "@jupyterlab/help-extension:licenses": "@jupyterlab/apputils-extension:licenses-plugin",
          "@jupyterlab/lsp:ILSPCodeExtractorsManager": "@jupyterlab/lsp-extension:code-extractor-manager",
          "@jupyterlab/translation:translator": "@jupyterlab/translation-extension:translator",
          "@jupyterlab/workspaces:commands": "@jupyterlab/workspaces-extension:commands",
        };
        const j = o.PageConfig.Extension.disabled.map((e) => {
          if (x[e]) {
            console.warn(`Plugin ${e} has been renamed to ${x[e]}. Consider updating your config to use the new name.`);
            return x[e];
          }
          return e;
        });
        const m = o.PageConfig.Extension.deferred.map((e) => {
          if (x[e]) {
            console.warn(`Plugin id ${e} has been renamed to ${x[e]}. Consider updating your config to use the new name.`);
            return x[e];
          }
          return e;
        });
        const v = (e) => {
          const t = e.indexOf(":");
          let r = "";
          if (t !== -1) {
            r = e.slice(0, t);
          }
          return j.some((t) => t === e || (r && t === r));
        };
        const g = (e) => {
          const t = e.indexOf(":");
          let r = "";
          if (t !== -1) {
            r = e.slice(0, t);
          }
          return m.some((t) => t === e || (r && t === r));
        };
        const w = [];
        b.forEach((e) => {
          if (e.extension) {
            w.push(e.name);
            y.push(Z(e.name, e.extension));
          }
          if (e.mimeExtension) {
            w.push(e.name);
            h.push(Z(e.name, e.mimeExtension));
          }
          if (e.style && !v(e.name)) {
            d.push(Z(e.name, e.style));
          }
        });
        const C = [];
        function k(e) {
          let t;
          if (e.hasOwnProperty("__esModule")) {
            t = e.default;
          } else {
            t = e;
          }
          return Array.isArray(t) ? t : [t];
        }
        function* P(e) {
          const t = k(e);
          for (let r of t) {
            const t = v(r.id);
            C.push({
              id: r.id,
              description: r.description,
              requires: r.requires ?? [],
              optional: r.optional ?? [],
              provides: r.provides ?? null,
              autoStart: r.autoStart,
              enabled: !t,
              extension: e.__scope__,
            });
            if (t) {
              p.push(r.id);
              continue;
            }
            if (g(r.id)) {
              f.push(r.id);
              _.push(r.id);
            }
            yield r;
          }
        }
        const S = [];
        if (!w.includes("@jupyterlab/javascript-extension")) {
          try {
            let e = r(78068);
            e.__scope__ = "@jupyterlab/javascript-extension";
            for (let t of P(e)) {
              S.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/json-extension")) {
          try {
            let e = r(73312);
            e.__scope__ = "@jupyterlab/json-extension";
            for (let t of P(e)) {
              S.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/mermaid-extension")) {
          try {
            let e = r(47375);
            e.__scope__ = "@jupyterlab/mermaid-extension";
            for (let t of P(e)) {
              S.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/pdf-extension")) {
          try {
            let e = r(35784);
            e.__scope__ = "@jupyterlab/pdf-extension";
            for (let t of P(e)) {
              S.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/vega5-extension")) {
          try {
            let e = r(44884);
            e.__scope__ = "@jupyterlab/vega5-extension";
            for (let t of P(e)) {
              S.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        const E = await Promise.allSettled(h);
        E.forEach((e) => {
          if (e.status === "fulfilled") {
            for (let t of P(e.value)) {
              S.push(t);
            }
          } else {
            console.error(e.reason);
          }
        });
        if (!w.includes("@jupyterlab/application-extension")) {
          try {
            let e = r(40632);
            e.__scope__ = "@jupyterlab/application-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/apputils-extension")) {
          try {
            let e = r(87236);
            e.__scope__ = "@jupyterlab/apputils-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/cell-toolbar-extension")) {
          try {
            let e = r(30576);
            e.__scope__ = "@jupyterlab/cell-toolbar-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/celltags-extension")) {
          try {
            let e = r(30444);
            e.__scope__ = "@jupyterlab/celltags-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/codemirror-extension")) {
          try {
            let e = r(28416);
            e.__scope__ = "@jupyterlab/codemirror-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/completer-extension")) {
          try {
            let e = r(138);
            e.__scope__ = "@jupyterlab/completer-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/console-extension")) {
          try {
            let e = r(60834);
            e.__scope__ = "@jupyterlab/console-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/csvviewer-extension")) {
          try {
            let e = r(98448);
            e.__scope__ = "@jupyterlab/csvviewer-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/debugger-extension")) {
          try {
            let e = r(62204);
            e.__scope__ = "@jupyterlab/debugger-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/docmanager-extension")) {
          try {
            let e = r(82400);
            e.__scope__ = "@jupyterlab/docmanager-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/documentsearch-extension")) {
          try {
            let e = r(39760);
            e.__scope__ = "@jupyterlab/documentsearch-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/extensionmanager-extension")) {
          try {
            let e = r(51268);
            e.__scope__ = "@jupyterlab/extensionmanager-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/filebrowser-extension")) {
          try {
            let e = r(92704);
            e.__scope__ = "@jupyterlab/filebrowser-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/fileeditor-extension")) {
          try {
            let e = r(28420);
            e.__scope__ = "@jupyterlab/fileeditor-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/help-extension")) {
          try {
            let e = r(36988);
            e.__scope__ = "@jupyterlab/help-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/htmlviewer-extension")) {
          try {
            let e = r(52152);
            e.__scope__ = "@jupyterlab/htmlviewer-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/hub-extension")) {
          try {
            let e = r(76126);
            e.__scope__ = "@jupyterlab/hub-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/imageviewer-extension")) {
          try {
            let e = r(33658);
            e.__scope__ = "@jupyterlab/imageviewer-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/inspector-extension")) {
          try {
            let e = r(3446);
            e.__scope__ = "@jupyterlab/inspector-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/launcher-extension")) {
          try {
            let e = r(43804);
            e.__scope__ = "@jupyterlab/launcher-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/logconsole-extension")) {
          try {
            let e = r(10728);
            e.__scope__ = "@jupyterlab/logconsole-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/lsp-extension")) {
          try {
            let e = r(46042);
            e.__scope__ = "@jupyterlab/lsp-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/mainmenu-extension")) {
          try {
            let e = r(46336);
            e.__scope__ = "@jupyterlab/mainmenu-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/markdownviewer-extension")) {
          try {
            let e = r(69312);
            e.__scope__ = "@jupyterlab/markdownviewer-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/markedparser-extension")) {
          try {
            let e = r(45116);
            e.__scope__ = "@jupyterlab/markedparser-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/mathjax-extension")) {
          try {
            let e = r(21274);
            e.__scope__ = "@jupyterlab/mathjax-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/mermaid-extension")) {
          try {
            let e = r(43318);
            e.__scope__ = "@jupyterlab/mermaid-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/metadataform-extension")) {
          try {
            let e = r(45420);
            e.__scope__ = "@jupyterlab/metadataform-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/notebook-extension")) {
          try {
            let e = r(46564);
            e.__scope__ = "@jupyterlab/notebook-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/pluginmanager-extension")) {
          try {
            let e = r(43328);
            e.__scope__ = "@jupyterlab/pluginmanager-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/rendermime-extension")) {
          try {
            let e = r(37700);
            e.__scope__ = "@jupyterlab/rendermime-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/running-extension")) {
          try {
            let e = r(39870);
            e.__scope__ = "@jupyterlab/running-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/services-extension")) {
          try {
            let e = r(31524);
            e.__scope__ = "@jupyterlab/services-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/settingeditor-extension")) {
          try {
            let e = r(68306);
            e.__scope__ = "@jupyterlab/settingeditor-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/shortcuts-extension")) {
          try {
            let e = r(46703);
            e.__scope__ = "@jupyterlab/shortcuts-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/statusbar-extension")) {
          try {
            let e = r(62430);
            e.__scope__ = "@jupyterlab/statusbar-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/terminal-extension")) {
          try {
            let e = r(48088);
            e.__scope__ = "@jupyterlab/terminal-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/theme-dark-extension")) {
          try {
            let e = r(24992);
            e.__scope__ = "@jupyterlab/theme-dark-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/theme-dark-high-contrast-extension")) {
          try {
            let e = r(85304);
            e.__scope__ = "@jupyterlab/theme-dark-high-contrast-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/theme-light-extension")) {
          try {
            let e = r(97584);
            e.__scope__ = "@jupyterlab/theme-light-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/toc-extension")) {
          try {
            let e = r(15374);
            e.__scope__ = "@jupyterlab/toc-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/tooltip-extension")) {
          try {
            let e = r(37414);
            e.__scope__ = "@jupyterlab/tooltip-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/translation-extension")) {
          try {
            let e = r(49538);
            e.__scope__ = "@jupyterlab/translation-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/ui-components-extension")) {
          try {
            let e = r(21578);
            e.__scope__ = "@jupyterlab/ui-components-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        if (!w.includes("@jupyterlab/workspaces-extension")) {
          try {
            let e = r(18808);
            e.__scope__ = "@jupyterlab/workspaces-extension";
            for (let t of P(e)) {
              A.push(t);
            }
          } catch (Q) {
            console.error(Q);
          }
        }
        const O = await Promise.allSettled(y);
        O.forEach((e) => {
          if (e.status === "fulfilled") {
            for (let t of P(e.value)) {
              A.push(t);
            }
          } else {
            console.error(e.reason);
          }
        });
        (await Promise.allSettled(d))
          .filter(({ status: e }) => e === "rejected")
          .forEach(({ reason: e }) => {
            console.error(e);
          });
        c.registerPlugins(A);
        const R = r(24805).IConnectionStatus;
        const I = r(24805).IServiceManager;
        const L = await c.resolveOptionalService(R);
        const M = await c.resolveRequiredService(I);
        const N = new u({
          pluginRegistry: c,
          serviceManager: M,
          mimeExtensions: S,
          connectionStatus: L,
          disabled: {
            matches: p,
            patterns: j.map(function (e) {
              return e.raw;
            }),
          },
          deferred: {
            matches: f,
            patterns: m.map(function (e) {
              return e.raw;
            }),
          },
          availablePlugins: C,
        });
        N.start({ ignorePlugins: _, bubblingKeydown: true });
        var $ = (o.PageConfig.getOption("exposeAppInBrowser") || "").toLowerCase() === "true";
        var J = (o.PageConfig.getOption("devMode") || "").toLowerCase() === "true";
        if ($ || J) {
          window.jupyterapp = N;
        }
        if (e.toLowerCase() === "true") {
          N.restored
            .then(function () {
              i(s);
            })
            .catch(function (e) {
              i([`RestoreError: ${e.message}`]);
            });
          window.setTimeout(function () {
            i(s);
          }, a);
        }
      }
    },
    78269: (e) => {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII=";
    },
  },
]);
