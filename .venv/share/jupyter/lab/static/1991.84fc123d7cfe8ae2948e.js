"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1991],
  {
    91991: (e, r, t) => {
      t.r(r);
      t.d(r, { diff: () => p });
      var n = { "+": "inserted", "-": "deleted", "@": "meta" };
      const p = {
        name: "diff",
        token: function (e) {
          var r = e.string.search(/[\t ]+?$/);
          if (!e.sol() || r === 0) {
            e.skipToEnd();
            return ("error " + (n[e.string.charAt(0)] || "")).replace(/ $/, "");
          }
          var t = n[e.peek()] || e.skipToEnd();
          if (r === -1) {
            e.skipToEnd();
          } else {
            e.pos = r;
          }
          return t;
        },
      };
    },
  },
]);
