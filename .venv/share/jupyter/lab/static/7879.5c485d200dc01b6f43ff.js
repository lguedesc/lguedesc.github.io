"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7879],
  {
    45948: (t, e, n) => {
      n.d(e, { P: () => g });
      const i = "view",
        r = "[",
        s = "]",
        a = "{",
        o = "}",
        u = ":",
        l = ",",
        c = "@",
        f = ">",
        d = /[[\]{}]/,
        h = { "*": 1, arc: 1, area: 1, group: 1, image: 1, line: 1, path: 1, rect: 1, rule: 1, shape: 1, symbol: 1, text: 1, trail: 1 };
      let p, m;
      function g(t, e, n) {
        p = e || i;
        m = n || h;
        return b(t.trim()).map(x);
      }
      function y(t) {
        return m[t];
      }
      function v(t, e, n, i, r) {
        const s = t.length;
        let a = 0,
          o;
        for (; e < s; ++e) {
          o = t[e];
          if (!a && o === n) return e;
          else if (r && r.indexOf(o) >= 0) --a;
          else if (i && i.indexOf(o) >= 0) ++a;
        }
        return e;
      }
      function b(t) {
        const e = [],
          n = t.length;
        let i = 0,
          u = 0;
        while (u < n) {
          u = v(t, u, l, r + a, s + o);
          e.push(t.substring(i, u).trim());
          i = ++u;
        }
        if (e.length === 0) {
          throw "Empty event selector: " + t;
        }
        return e;
      }
      function x(t) {
        return t[0] === "[" ? _(t) : w(t);
      }
      function _(t) {
        const e = t.length;
        let n = 1,
          i;
        n = v(t, n, s, r, s);
        if (n === e) {
          throw "Empty between selector: " + t;
        }
        i = b(t.substring(1, n));
        if (i.length !== 2) {
          throw "Between selector must have two elements: " + t;
        }
        t = t.slice(n + 1).trim();
        if (t[0] !== f) {
          throw "Expected '>' after between selector: " + t;
        }
        i = i.map(x);
        const a = x(t.slice(1).trim());
        if (a.between) {
          return { between: i, stream: a };
        } else {
          a.between = i;
        }
        return a;
      }
      function w(t) {
        const e = { source: p },
          n = [];
        let i = [0, 0],
          l = 0,
          f = 0,
          h = t.length,
          m = 0,
          g,
          b;
        if (t[h - 1] === o) {
          m = t.lastIndexOf(a);
          if (m >= 0) {
            try {
              i = A(t.substring(m + 1, h - 1));
            } catch (x) {
              throw "Invalid throttle specification: " + t;
            }
            t = t.slice(0, m).trim();
            h = t.length;
          } else throw "Unmatched right brace: " + t;
          m = 0;
        }
        if (!h) throw t;
        if (t[0] === c) l = ++m;
        g = v(t, m, u);
        if (g < h) {
          n.push(t.substring(f, g).trim());
          f = m = ++g;
        }
        m = v(t, m, r);
        if (m === h) {
          n.push(t.substring(f, h).trim());
        } else {
          n.push(t.substring(f, m).trim());
          b = [];
          f = ++m;
          if (f === h) throw "Unmatched left bracket: " + t;
        }
        while (m < h) {
          m = v(t, m, s);
          if (m === h) throw "Unmatched left bracket: " + t;
          b.push(t.substring(f, m).trim());
          if (m < h - 1 && t[++m] !== r) throw "Expected left bracket: " + t;
          f = ++m;
        }
        if (!(h = n.length) || d.test(n[h - 1])) {
          throw "Invalid event selector: " + t;
        }
        if (h > 1) {
          e.type = n[1];
          if (l) {
            e.markname = n[0].slice(1);
          } else if (y(n[0])) {
            e.marktype = n[0];
          } else {
            e.source = n[0];
          }
        } else {
          e.type = n[0];
        }
        if (e.type.slice(-1) === "!") {
          e.consume = true;
          e.type = e.type.slice(0, -1);
        }
        if (b != null) e.filter = b;
        if (i[0]) e.throttle = i[0];
        if (i[1]) e.debounce = i[1];
        return e;
      }
      function A(t) {
        const e = t.split(l);
        if (!t.length || e.length > 2) throw t;
        return e.map((e) => {
          const n = +e;
          if (n !== n) throw t;
          return n;
        });
      }
    },
    37879: (t, e, n) => {
      n.r(e);
      n.d(e, {
        Bounds: () => vd,
        CanvasHandler: () => jm,
        CanvasRenderer: () => Zm,
        DATE: () => it,
        DAY: () => rt,
        DAYOFYEAR: () => st,
        Dataflow: () => Si,
        Debug: () => p.y,
        Error: () => p.$D,
        EventStream: () => Ln,
        Gradient: () => Hc,
        GroupItem: () => xd,
        HOURS: () => at,
        Handler: () => hm,
        HybridHandler: () => ey,
        HybridRenderer: () => ty,
        Info: () => p.R2,
        Item: () => bd,
        MILLISECONDS: () => lt,
        MINUTES: () => ot,
        MONTH: () => et,
        Marks: () => Qp,
        MultiPulse: () => pi,
        None: () => p.NV,
        Operator: () => $n,
        Parameters: () => Dn,
        Pulse: () => ci,
        QUARTER: () => tt,
        RenderType: () => oy,
        Renderer: () => mm,
        ResourceLoader: () => _d,
        SECONDS: () => ut,
        SVGHandler: () => eg,
        SVGRenderer: () => Rg,
        SVGStringRenderer: () => Qg,
        Scenegraph: () => rm,
        TIME_UNITS: () => ct,
        Transform: () => zi,
        View: () => Hq,
        WEEK: () => nt,
        Warn: () => p.P$,
        YEAR: () => J,
        accessor: () => p.sY,
        accessorFields: () => p.nS,
        accessorName: () => p.N6,
        array: () => p.YO,
        ascending: () => p.V_,
        bandwidthNRD: () => er,
        bin: () => nr,
        bootstrapCI: () => sr,
        boundClip: () => gy,
        boundContext: () => jd,
        boundItem: () => Kp,
        boundMark: () => Jp,
        boundStroke: () => kd,
        changeset: () => En,
        clampRange: () => p.BS,
        codegenExpression: () => cO,
        compare: () => p.UD,
        constant: () => p.dY,
        cumulativeLogNormal: () => wr,
        cumulativeNormal: () => mr,
        cumulativeUniform: () => Cr,
        dayofyear: () => yt,
        debounce: () => p.sg,
        defaultLocale: () => Fe,
        definition: () => Ri,
        densityLogNormal: () => _r,
        densityNormal: () => pr,
        densityUniform: () => Dr,
        domChild: () => um,
        domClear: () => lm,
        domCreate: () => am,
        domFind: () => om,
        dotbin: () => ar,
        error: () => p.z3,
        expressionFunction: () => UL,
        extend: () => p.X$,
        extent: () => p.Xx,
        extentIndex: () => p.n,
        falsy: () => p.me,
        fastmap: () => p.nG,
        field: () => p.ZZ,
        flush: () => p.bX,
        font: () => Lp,
        fontFamily: () => Np,
        fontSize: () => Fp,
        format: () => an,
        formatLocale: () => xe,
        formats: () => on,
        hasOwnProperty: () => p.mQ,
        id: () => p.id,
        identity: () => p.D_,
        inferType: () => Qe,
        inferTypes: () => Ke,
        ingest: () => bn,
        inherits: () => p.B,
        inrange: () => p.PK,
        interpolate: () => oc,
        interpolateColors: () => ic,
        interpolateRange: () => nc,
        intersect: () => cy,
        intersectBoxLine: () => th,
        intersectPath: () => Qd,
        intersectPoint: () => Kd,
        intersectRule: () => Jd,
        isArray: () => p.cy,
        isBoolean: () => p.Lm,
        isDate: () => p.$P,
        isFunction: () => p.Tn,
        isIterable: () => p.xZ,
        isNumber: () => p.Et,
        isObject: () => p.Gv,
        isRegExp: () => p.gd,
        isString: () => p.Kg,
        isTuple: () => gn,
        key: () => p.Eb,
        lerp: () => p.Cc,
        lineHeight: () => Sp,
        loader: () => fn,
        locale: () => Ce,
        logger: () => p.vF,
        lruCache: () => p.EV,
        markup: () => Eg,
        merge: () => p.h1,
        mergeConfig: () => p.io,
        multiLineOffset: () => $p,
        one: () => p.xH,
        pad: () => p.eV,
        panLinear: () => p.VC,
        panLog: () => p.KH,
        panPow: () => p.co,
        panSymlog: () => p.zy,
        parse: () => mW,
        parseExpression: () => aO,
        parseSelector: () => Jq.P,
        path: () => Qo.Ae,
        pathCurves: () => Qc,
        pathEqual: () => by,
        pathParse: () => nf,
        pathRectangle: () => Bf,
        pathRender: () => yf,
        pathSymbols: () => _f,
        pathTrail: () => zf,
        peek: () => p.se,
        point: () => fm,
        projection: () => wk,
        quantileLogNormal: () => Ar,
        quantileNormal: () => gr,
        quantileUniform: () => Fr,
        quantiles: () => Ji,
        quantizeInterpolator: () => rc,
        quarter: () => p.$G,
        quartiles: () => tr,
        random: () => ir,
        randomInteger: () => lr,
        randomKDE: () => br,
        randomLCG: () => ur,
        randomLogNormal: () => kr,
        randomMixture: () => Er,
        randomNormal: () => vr,
        randomUniform: () => Sr,
        read: () => ln,
        regressionConstant: () => Br,
        regressionExp: () => Lr,
        regressionLinear: () => Tr,
        regressionLoess: () => Wr,
        regressionLog: () => Nr,
        regressionPoly: () => Ir,
        regressionPow: () => Pr,
        regressionQuad: () => qr,
        renderModule: () => ly,
        repeat: () => p.ux,
        resetDefaultLocale: () => Se,
        resetSVGClipId: () => gd,
        resetSVGDefIds: () => _y,
        responseType: () => un,
        runtimeContext: () => bP,
        sampleCurve: () => Kr,
        sampleLogNormal: () => xr,
        sampleNormal: () => hr,
        sampleUniform: () => Mr,
        scale: () => Yl,
        sceneEqual: () => vy,
        sceneFromJSON: () => nm,
        scenePickVisit: () => dh,
        sceneToJSON: () => em,
        sceneVisit: () => fh,
        sceneZOrder: () => ch,
        scheme: () => pc,
        serializeXML: () => Mg,
        setHybridRendererOptions: () => Jg,
        setRandom: () => rr,
        span: () => p.Ln,
        splitAccessPath: () => p.iv,
        stringValue: () => p.r$,
        textMetrics: () => Ap,
        timeBin: () => ce,
        timeFloor: () => Rt,
        timeFormatLocale: () => Me,
        timeInterval: () => qt,
        timeOffset: () => jt,
        timeSequence: () => Wt,
        timeUnitSpecifier: () => pt,
        timeUnits: () => dt,
        toBoolean: () => p.G4,
        toDate: () => p.ay,
        toNumber: () => p.Ro,
        toSet: () => p.M1,
        toString: () => p.dI,
        transform: () => Oi,
        transforms: () => $i,
        truncate: () => p.xv,
        truthy: () => p.vN,
        tupleid: () => yn,
        typeParsers: () => Xe,
        utcFloor: () => Nt,
        utcInterval: () => It,
        utcOffset: () => Gt,
        utcSequence: () => Xt,
        utcdayofyear: () => At,
        utcquarter: () => p.vu,
        utcweek: () => kt,
        version: () => gW,
        visitArray: () => p.rt,
        week: () => vt,
        writeConfig: () => p.AU,
        zero: () => p.v_,
        zoomLinear: () => p.lL,
        zoomLog: () => p.oV,
        zoomPow: () => p.SW,
        zoomSymlog: () => p.B2,
      });
      var i = {};
      n.r(i);
      n.d(i, {
        aggregate: () => xs,
        bin: () => ws,
        collect: () => ks,
        compare: () => Es,
        countpattern: () => Ds,
        cross: () => Fs,
        density: () => Ts,
        dotbin: () => js,
        expression: () => Ys,
        extent: () => Xs,
        facet: () => Vs,
        field: () => Qs,
        filter: () => Zs,
        flatten: () => Js,
        fold: () => ta,
        formula: () => ea,
        generate: () => na,
        impute: () => sa,
        joinaggregate: () => la,
        kde: () => ca,
        key: () => fa,
        load: () => ha,
        lookup: () => ga,
        multiextent: () => ya,
        multivalues: () => ba,
        params: () => _a,
        pivot: () => wa,
        prefacet: () => Ma,
        project: () => Da,
        proxy: () => Fa,
        quantile: () => Sa,
        relay: () => za,
        sample: () => $a,
        sequence: () => Ra,
        sieve: () => Oa,
        subflow: () => Hs,
        timeunit: () => Ta,
        tupleindex: () => La,
        values: () => Pa,
        window: () => Xa,
      });
      var r = {};
      n.r(r);
      n.d(r, { bound: () => sv, identifier: () => uv, mark: () => cv, overlap: () => dv, render: () => xv, viewlayout: () => Qv });
      var s = {};
      n.r(s);
      n.d(s, {
        axisticks: () => eb,
        datajoin: () => nb,
        encode: () => sb,
        legendentries: () => ab,
        linkpath: () => fb,
        pie: () => Eb,
        scale: () => Sb,
        sortitems: () => jb,
        stack: () => Hb,
      });
      var a = {};
      n.r(a);
      n.d(a, {
        contour: () => Jk,
        geojson: () => iE,
        geopath: () => rE,
        geopoint: () => aE,
        geoshape: () => oE,
        graticule: () => lE,
        heatmap: () => cE,
        isocontour: () => qk,
        kde2d: () => Vk,
        projection: () => mE,
      });
      var o = {};
      n.r(o);
      n.d(o, { force: () => yM });
      var u = {};
      n.r(u);
      n.d(u, { nest: () => oC, pack: () => mC, partition: () => yC, stratify: () => vC, tree: () => _C, treelinks: () => wC, treemap: () => EC });
      var l = {};
      n.r(l);
      n.d(l, { label: () => fF });
      var c = {};
      n.r(c);
      n.d(c, { loess: () => hF, regression: () => gF });
      var f = {};
      n.r(f);
      n.d(f, { voronoi: () => _z });
      var d = {};
      n.r(d);
      n.d(d, { wordcloud: () => qz });
      var h = {};
      n.r(h);
      n.d(h, { crossfilter: () => Zz, resolvefilter: () => Jz });
      var p = n(26372);
      var m = {},
        g = {},
        y = 34,
        v = 10,
        b = 13;
      function x(t) {
        return new Function(
          "d",
          "return {" +
            t
              .map(function (t, e) {
                return JSON.stringify(t) + ": d[" + e + '] || ""';
              })
              .join(",") +
            "}"
        );
      }
      function _(t, e) {
        var n = x(t);
        return function (i, r) {
          return e(n(i), r, t);
        };
      }
      function w(t) {
        var e = Object.create(null),
          n = [];
        t.forEach(function (t) {
          for (var i in t) {
            if (!(i in e)) {
              n.push((e[i] = i));
            }
          }
        });
        return n;
      }
      function A(t, e) {
        var n = t + "",
          i = n.length;
        return i < e ? new Array(e - i + 1).join(0) + n : n;
      }
      function k(t) {
        return t < 0 ? "-" + A(-t, 6) : t > 9999 ? "+" + A(t, 6) : A(t, 4);
      }
      function E(t) {
        var e = t.getUTCHours(),
          n = t.getUTCMinutes(),
          i = t.getUTCSeconds(),
          r = t.getUTCMilliseconds();
        return isNaN(t)
          ? "Invalid Date"
          : k(t.getUTCFullYear(), 4) +
              "-" +
              A(t.getUTCMonth() + 1, 2) +
              "-" +
              A(t.getUTCDate(), 2) +
              (r
                ? "T" + A(e, 2) + ":" + A(n, 2) + ":" + A(i, 2) + "." + A(r, 3) + "Z"
                : i
                  ? "T" + A(e, 2) + ":" + A(n, 2) + ":" + A(i, 2) + "Z"
                  : n || e
                    ? "T" + A(e, 2) + ":" + A(n, 2) + "Z"
                    : "");
      }
      function M(t) {
        var e = new RegExp('["' + t + "\n\r]"),
          n = t.charCodeAt(0);
        function i(t, e) {
          var n,
            i,
            s = r(t, function (t, r) {
              if (n) return n(t, r - 1);
              (i = t), (n = e ? _(t, e) : x(t));
            });
          s.columns = i || [];
          return s;
        }
        function r(t, e) {
          var i = [],
            r = t.length,
            s = 0,
            a = 0,
            o,
            u = r <= 0,
            l = false;
          if (t.charCodeAt(r - 1) === v) --r;
          if (t.charCodeAt(r - 1) === b) --r;
          function c() {
            if (u) return g;
            if (l) return (l = false), m;
            var e,
              i = s,
              a;
            if (t.charCodeAt(i) === y) {
              while ((s++ < r && t.charCodeAt(s) !== y) || t.charCodeAt(++s) === y);
              if ((e = s) >= r) u = true;
              else if ((a = t.charCodeAt(s++)) === v) l = true;
              else if (a === b) {
                l = true;
                if (t.charCodeAt(s) === v) ++s;
              }
              return t.slice(i + 1, e - 1).replace(/""/g, '"');
            }
            while (s < r) {
              if ((a = t.charCodeAt((e = s++))) === v) l = true;
              else if (a === b) {
                l = true;
                if (t.charCodeAt(s) === v) ++s;
              } else if (a !== n) continue;
              return t.slice(i, e);
            }
            return (u = true), t.slice(i, r);
          }
          while ((o = c()) !== g) {
            var f = [];
            while (o !== m && o !== g) f.push(o), (o = c());
            if (e && (f = e(f, a++)) == null) continue;
            i.push(f);
          }
          return i;
        }
        function s(e, n) {
          return e.map(function (e) {
            return n
              .map(function (t) {
                return c(e[t]);
              })
              .join(t);
          });
        }
        function a(e, n) {
          if (n == null) n = w(e);
          return [n.map(c).join(t)].concat(s(e, n)).join("\n");
        }
        function o(t, e) {
          if (e == null) e = w(t);
          return s(t, e).join("\n");
        }
        function u(t) {
          return t.map(l).join("\n");
        }
        function l(e) {
          return e.map(c).join(t);
        }
        function c(t) {
          return t == null ? "" : t instanceof Date ? E(t) : e.test((t += "")) ? '"' + t.replace(/"/g, '""') + '"' : t;
        }
        return { parse: i, parseRows: r, format: a, formatBody: o, formatRows: u, formatRow: l, formatValue: c };
      }
      function D(t, e) {
        var n,
          i = t.length,
          r = i - e;
        while (r < --i) (n = t[r]), (t[r++] = t[i]), (t[i] = n);
      }
      function C(t) {
        return t;
      }
      function F(t) {
        if (t == null) return C;
        var e,
          n,
          i = t.scale[0],
          r = t.scale[1],
          s = t.translate[0],
          a = t.translate[1];
        return function (t, o) {
          if (!o) e = n = 0;
          var u = 2,
            l = t.length,
            c = new Array(l);
          c[0] = (e += t[0]) * i + s;
          c[1] = (n += t[1]) * r + a;
          while (u < l) (c[u] = t[u]), ++u;
          return c;
        };
      }
      function S(t, e) {
        if (typeof e === "string") e = t.objects[e];
        return e.type === "GeometryCollection"
          ? {
              type: "FeatureCollection",
              features: e.geometries.map(function (e) {
                return B(t, e);
              }),
            }
          : B(t, e);
      }
      function B(t, e) {
        var n = e.id,
          i = e.bbox,
          r = e.properties == null ? {} : e.properties,
          s = z(t, e);
        return n == null && i == null
          ? { type: "Feature", properties: r, geometry: s }
          : i == null
            ? { type: "Feature", id: n, properties: r, geometry: s }
            : { type: "Feature", id: n, bbox: i, properties: r, geometry: s };
      }
      function z(t, e) {
        var n = F(t.transform),
          i = t.arcs;
        function r(t, e) {
          if (e.length) e.pop();
          for (var r = i[t < 0 ? ~t : t], s = 0, a = r.length; s < a; ++s) {
            e.push(n(r[s], s));
          }
          if (t < 0) D(e, a);
        }
        function s(t) {
          return n(t);
        }
        function a(t) {
          var e = [];
          for (var n = 0, i = t.length; n < i; ++n) r(t[n], e);
          if (e.length < 2) e.push(e[0]);
          return e;
        }
        function o(t) {
          var e = a(t);
          while (e.length < 4) e.push(e[0]);
          return e;
        }
        function u(t) {
          return t.map(o);
        }
        function l(t) {
          var e = t.type,
            n;
          switch (e) {
            case "GeometryCollection":
              return { type: e, geometries: t.geometries.map(l) };
            case "Point":
              n = s(t.coordinates);
              break;
            case "MultiPoint":
              n = t.coordinates.map(s);
              break;
            case "LineString":
              n = a(t.arcs);
              break;
            case "MultiLineString":
              n = t.arcs.map(a);
              break;
            case "Polygon":
              n = u(t.arcs);
              break;
            case "MultiPolygon":
              n = t.arcs.map(u);
              break;
            default:
              return null;
          }
          return { type: e, coordinates: n };
        }
        return l(e);
      }
      function $(t, e) {
        var n = {},
          i = {},
          r = {},
          s = [],
          a = -1;
        e.forEach(function (n, i) {
          var r = t.arcs[n < 0 ? ~n : n],
            s;
          if (r.length < 3 && !r[1][0] && !r[1][1]) {
            (s = e[++a]), (e[a] = n), (e[i] = s);
          }
        });
        e.forEach(function (t) {
          var e = o(t),
            n = e[0],
            s = e[1],
            a,
            u;
          if ((a = r[n])) {
            delete r[a.end];
            a.push(t);
            a.end = s;
            if ((u = i[s])) {
              delete i[u.start];
              var l = u === a ? a : a.concat(u);
              i[(l.start = a.start)] = r[(l.end = u.end)] = l;
            } else {
              i[a.start] = r[a.end] = a;
            }
          } else if ((a = i[s])) {
            delete i[a.start];
            a.unshift(t);
            a.start = n;
            if ((u = r[n])) {
              delete r[u.end];
              var c = u === a ? a : u.concat(a);
              i[(c.start = u.start)] = r[(c.end = a.end)] = c;
            } else {
              i[a.start] = r[a.end] = a;
            }
          } else {
            a = [t];
            i[(a.start = n)] = r[(a.end = s)] = a;
          }
        });
        function o(e) {
          var n = t.arcs[e < 0 ? ~e : e],
            i = n[0],
            r;
          if (t.transform)
            (r = [0, 0]),
              n.forEach(function (t) {
                (r[0] += t[0]), (r[1] += t[1]);
              });
          else r = n[n.length - 1];
          return e < 0 ? [r, i] : [i, r];
        }
        function u(t, e) {
          for (var i in t) {
            var r = t[i];
            delete e[r.start];
            delete r.start;
            delete r.end;
            r.forEach(function (t) {
              n[t < 0 ? ~t : t] = 1;
            });
            s.push(r);
          }
        }
        u(r, i);
        u(i, r);
        e.forEach(function (t) {
          if (!n[t < 0 ? ~t : t]) s.push([t]);
        });
        return s;
      }
      function R(t) {
        return z(t, O.apply(this, arguments));
      }
      function O(t, e, n) {
        var i, r, s;
        if (arguments.length > 1) i = T(t, e, n);
        else for (r = 0, i = new Array((s = t.arcs.length)); r < s; ++r) i[r] = r;
        return { type: "MultiLineString", arcs: $(t, i) };
      }
      function T(t, e, n) {
        var i = [],
          r = [],
          s;
        function a(t) {
          var e = t < 0 ? ~t : t;
          (r[e] || (r[e] = [])).push({ i: t, g: s });
        }
        function o(t) {
          t.forEach(a);
        }
        function u(t) {
          t.forEach(o);
        }
        function l(t) {
          t.forEach(u);
        }
        function c(t) {
          switch (((s = t), t.type)) {
            case "GeometryCollection":
              t.geometries.forEach(c);
              break;
            case "LineString":
              o(t.arcs);
              break;
            case "MultiLineString":
            case "Polygon":
              u(t.arcs);
              break;
            case "MultiPolygon":
              l(t.arcs);
              break;
          }
        }
        c(e);
        r.forEach(
          n == null
            ? function (t) {
                i.push(t[0].i);
              }
            : function (t) {
                if (n(t[0].g, t[t.length - 1].g)) i.push(t[0].i);
              }
        );
        return i;
      }
      var N = n(97119);
      var L = n(71688);
      var P = n(86093);
      var q = n(78209);
      var I = n(93391);
      var U = n(24626);
      var j = n(25216);
      var G = n(20293);
      var Y = n(61779);
      var W = n(42706);
      var X = n(77849);
      var H = n(9017);
      var V = n(23383);
      var Q = n(61147);
      var K = n(26530);
      var Z = n(9791);
      const J = "year";
      const tt = "quarter";
      const et = "month";
      const nt = "week";
      const it = "date";
      const rt = "day";
      const st = "dayofyear";
      const at = "hours";
      const ot = "minutes";
      const ut = "seconds";
      const lt = "milliseconds";
      const ct = [J, tt, et, nt, it, rt, st, at, ot, ut, lt];
      const ft = ct.reduce((t, e, n) => ((t[e] = 1 + n), t), {});
      function dt(t) {
        const e = (0, p.YO)(t).slice(),
          n = {};
        if (!e.length) (0, p.z3)("Missing time unit.");
        e.forEach((t) => {
          if ((0, p.mQ)(ft, t)) {
            n[t] = 1;
          } else {
            (0, p.z3)(`Invalid time unit: ${t}.`);
          }
        });
        const i = (n[nt] || n[rt] ? 1 : 0) + (n[tt] || n[et] || n[it] ? 1 : 0) + (n[st] ? 1 : 0);
        if (i > 1) {
          (0, p.z3)(`Incompatible time units: ${t}`);
        }
        e.sort((t, e) => ft[t] - ft[e]);
        return e;
      }
      const ht = {
        [J]: "%Y ",
        [tt]: "Q%q ",
        [et]: "%b ",
        [it]: "%d ",
        [nt]: "W%U ",
        [rt]: "%a ",
        [st]: "%j ",
        [at]: "%H:00",
        [ot]: "00:%M",
        [ut]: ":%S",
        [lt]: ".%L",
        [`${J}-${et}`]: "%Y-%m ",
        [`${J}-${et}-${it}`]: "%Y-%m-%d ",
        [`${at}-${ot}`]: "%H:%M",
      };
      function pt(t, e) {
        const n = (0, p.X$)({}, ht, e),
          i = dt(t),
          r = i.length;
        let s = "",
          a = 0,
          o,
          u;
        for (a = 0; a < r; ) {
          for (o = i.length; o > a; --o) {
            u = i.slice(a, o).join("-");
            if (n[u] != null) {
              s += n[u];
              a = o;
              break;
            }
          }
        }
        return s.trim();
      }
      const mt = new Date();
      function gt(t) {
        mt.setFullYear(t);
        mt.setMonth(0);
        mt.setDate(1);
        mt.setHours(0, 0, 0, 0);
        return mt;
      }
      function yt(t) {
        return bt(new Date(t));
      }
      function vt(t) {
        return xt(new Date(t));
      }
      function bt(t) {
        return G.UA.count(gt(t.getFullYear()) - 1, t);
      }
      function xt(t) {
        return Y.YP.count(gt(t.getFullYear()) - 1, t);
      }
      function _t(t) {
        return gt(t).getDay();
      }
      function wt(t, e, n, i, r, s, a) {
        if (0 <= t && t < 100) {
          const o = new Date(-1, e, n, i, r, s, a);
          o.setFullYear(t);
          return o;
        }
        return new Date(t, e, n, i, r, s, a);
      }
      function At(t) {
        return Et(new Date(t));
      }
      function kt(t) {
        return Mt(new Date(t));
      }
      function Et(t) {
        const e = Date.UTC(t.getUTCFullYear(), 0, 1);
        return G.dA.count(e - 1, t);
      }
      function Mt(t) {
        const e = Date.UTC(t.getUTCFullYear(), 0, 1);
        return Y.Hl.count(e - 1, t);
      }
      function Dt(t) {
        mt.setTime(Date.UTC(t, 0, 1));
        return mt.getUTCDay();
      }
      function Ct(t, e, n, i, r, s, a) {
        if (0 <= t && t < 100) {
          const t = new Date(Date.UTC(-1, e, n, i, r, s, a));
          t.setUTCFullYear(n.y);
          return t;
        }
        return new Date(Date.UTC(t, e, n, i, r, s, a));
      }
      function Ft(t, e, n, i, r) {
        const s = e || 1,
          a = (0, p.se)(t),
          o = (t, e, r) => {
            r = r || t;
            return St(n[r], i[r], t === a && s, e);
          };
        const u = new Date(),
          l = (0, p.M1)(t),
          c = l[J] ? o(J) : (0, p.dY)(2012),
          f = l[et] ? o(et) : l[tt] ? o(tt) : p.v_,
          d = l[nt] && l[rt] ? o(rt, 1, nt + rt) : l[nt] ? o(nt, 1) : l[rt] ? o(rt, 1) : l[it] ? o(it, 1) : l[st] ? o(st, 1) : p.xH,
          h = l[at] ? o(at) : p.v_,
          m = l[ot] ? o(ot) : p.v_,
          g = l[ut] ? o(ut) : p.v_,
          y = l[lt] ? o(lt) : p.v_;
        return function (t) {
          u.setTime(+t);
          const e = c(u);
          return r(e, f(u), d(u, e), h(u), m(u), g(u), y(u));
        };
      }
      function St(t, e, n, i) {
        const r = n <= 1 ? t : i ? (e, r) => i + n * Math.floor((t(e, r) - i) / n) : (e, i) => n * Math.floor(t(e, i) / n);
        return e ? (t, n) => e(r(t, n), n) : r;
      }
      function Bt(t, e, n) {
        return e + t * 7 - ((n + 6) % 7);
      }
      const zt = {
        [J]: (t) => t.getFullYear(),
        [tt]: (t) => Math.floor(t.getMonth() / 3),
        [et]: (t) => t.getMonth(),
        [it]: (t) => t.getDate(),
        [at]: (t) => t.getHours(),
        [ot]: (t) => t.getMinutes(),
        [ut]: (t) => t.getSeconds(),
        [lt]: (t) => t.getMilliseconds(),
        [st]: (t) => bt(t),
        [nt]: (t) => xt(t),
        [nt + rt]: (t, e) => Bt(xt(t), t.getDay(), _t(e)),
        [rt]: (t, e) => Bt(1, t.getDay(), _t(e)),
      };
      const $t = { [tt]: (t) => 3 * t, [nt]: (t, e) => Bt(t, 0, _t(e)) };
      function Rt(t, e) {
        return Ft(t, e || 1, zt, $t, wt);
      }
      const Ot = {
        [J]: (t) => t.getUTCFullYear(),
        [tt]: (t) => Math.floor(t.getUTCMonth() / 3),
        [et]: (t) => t.getUTCMonth(),
        [it]: (t) => t.getUTCDate(),
        [at]: (t) => t.getUTCHours(),
        [ot]: (t) => t.getUTCMinutes(),
        [ut]: (t) => t.getUTCSeconds(),
        [lt]: (t) => t.getUTCMilliseconds(),
        [st]: (t) => Et(t),
        [nt]: (t) => Mt(t),
        [rt]: (t, e) => Bt(1, t.getUTCDay(), Dt(e)),
        [nt + rt]: (t, e) => Bt(Mt(t), t.getUTCDay(), Dt(e)),
      };
      const Tt = { [tt]: (t) => 3 * t, [nt]: (t, e) => Bt(t, 0, Dt(e)) };
      function Nt(t, e) {
        return Ft(t, e || 1, Ot, Tt, Ct);
      }
      const Lt = {
        [J]: W.he,
        [tt]: X.Ui.every(3),
        [et]: X.Ui,
        [nt]: Y.YP,
        [it]: G.UA,
        [rt]: G.UA,
        [st]: G.UA,
        [at]: H.Ag,
        [ot]: V.wX,
        [ut]: Q.R,
        [lt]: K.y,
      };
      const Pt = {
        [J]: W.Mb,
        [tt]: X.R6.every(3),
        [et]: X.R6,
        [nt]: Y.Hl,
        [it]: G.dA,
        [rt]: G.dA,
        [st]: G.dA,
        [at]: H.pz,
        [ot]: V.vD,
        [ut]: Q.R,
        [lt]: K.y,
      };
      function qt(t) {
        return Lt[t];
      }
      function It(t) {
        return Pt[t];
      }
      function Ut(t, e, n) {
        return t ? t.offset(e, n) : undefined;
      }
      function jt(t, e, n) {
        return Ut(qt(t), e, n);
      }
      function Gt(t, e, n) {
        return Ut(It(t), e, n);
      }
      function Yt(t, e, n, i) {
        return t ? t.range(e, n, i) : undefined;
      }
      function Wt(t, e, n, i) {
        return Yt(qt(t), e, n, i);
      }
      function Xt(t, e, n, i) {
        return Yt(It(t), e, n, i);
      }
      const Ht = 1e3,
        Vt = Ht * 60,
        Qt = Vt * 60,
        Kt = Qt * 24,
        Zt = Kt * 7,
        Jt = Kt * 30,
        te = Kt * 365;
      const ee = [J, et, it, at, ot, ut, lt],
        ne = ee.slice(0, -1),
        ie = ne.slice(0, -1),
        re = ie.slice(0, -1),
        se = re.slice(0, -1),
        ae = [J, nt],
        oe = [J, et],
        ue = [J];
      const le = [
        [ne, 1, Ht],
        [ne, 5, 5 * Ht],
        [ne, 15, 15 * Ht],
        [ne, 30, 30 * Ht],
        [ie, 1, Vt],
        [ie, 5, 5 * Vt],
        [ie, 15, 15 * Vt],
        [ie, 30, 30 * Vt],
        [re, 1, Qt],
        [re, 3, 3 * Qt],
        [re, 6, 6 * Qt],
        [re, 12, 12 * Qt],
        [se, 1, Kt],
        [ae, 1, Zt],
        [oe, 1, Jt],
        [oe, 3, 3 * Jt],
        [ue, 1, te],
      ];
      function ce(t) {
        const e = t.extent,
          n = t.maxbins || 40,
          i = Math.abs((0, p.Ln)(e)) / n;
        let r = (0, Z.A)((t) => t[2]).right(le, i),
          s,
          a;
        if (r === le.length) {
          (s = ue), (a = (0, N.sG)(e[0] / te, e[1] / te, n));
        } else if (r) {
          r = le[i / le[r - 1][2] < le[r][2] / i ? r - 1 : r];
          s = r[0];
          a = r[1];
        } else {
          s = ee;
          a = Math.max((0, N.sG)(e[0], e[1], n), 1);
        }
        return { units: s, step: a };
      }
      var fe = n(82692);
      var de = n(77613);
      function he(t) {
        const e = {};
        return (n) => e[n] || (e[n] = t(n));
      }
      function pe(t, e) {
        return (n) => {
          const i = t(n),
            r = i.indexOf(e);
          if (r < 0) return i;
          let s = me(i, r);
          const a = s < i.length ? i.slice(s) : "";
          while (--s > r)
            if (i[s] !== "0") {
              ++s;
              break;
            }
          return i.slice(0, s) + a;
        };
      }
      function me(t, e) {
        let n = t.lastIndexOf("e"),
          i;
        if (n > 0) return n;
        for (n = t.length; --n > e; ) {
          i = t.charCodeAt(n);
          if (i >= 48 && i <= 57) return n + 1;
        }
      }
      function ge(t) {
        const e = he(t.format),
          n = t.formatPrefix;
        return {
          format: e,
          formatPrefix: n,
          formatFloat(t) {
            const n = (0, L.A)(t || ",");
            if (n.precision == null) {
              n.precision = 12;
              switch (n.type) {
                case "%":
                  n.precision -= 2;
                  break;
                case "e":
                  n.precision -= 1;
                  break;
              }
              return pe(e(n), e(".1f")(1)[1]);
            } else {
              return e(n);
            }
          },
          formatSpan(t, i, r, s) {
            s = (0, L.A)(s == null ? ",f" : s);
            const a = (0, N.sG)(t, i, r),
              o = Math.max(Math.abs(t), Math.abs(i));
            let u;
            if (s.precision == null) {
              switch (s.type) {
                case "s": {
                  if (!isNaN((u = (0, P.A)(a, o)))) {
                    s.precision = u;
                  }
                  return n(s, o);
                }
                case "":
                case "e":
                case "g":
                case "p":
                case "r": {
                  if (!isNaN((u = (0, q.A)(a, o)))) {
                    s.precision = u - (s.type === "e");
                  }
                  break;
                }
                case "f":
                case "%": {
                  if (!isNaN((u = (0, I.A)(a)))) {
                    s.precision = u - (s.type === "%") * 2;
                  }
                  break;
                }
              }
            }
            return e(s);
          },
        };
      }
      let ye;
      ve();
      function ve() {
        return (ye = ge({ format: U.GP, formatPrefix: U.s }));
      }
      function be(t) {
        return ge((0, j.A)(t));
      }
      function xe(t) {
        return arguments.length ? (ye = be(t)) : ye;
      }
      function _e(t, e, n) {
        n = n || {};
        if (!(0, p.Gv)(n)) {
          (0, p.z3)(`Invalid time multi-format specifier: ${n}`);
        }
        const i = e(ut),
          r = e(ot),
          s = e(at),
          a = e(it),
          o = e(nt),
          u = e(et),
          l = e(tt),
          c = e(J),
          f = t(n[lt] || ".%L"),
          d = t(n[ut] || ":%S"),
          h = t(n[ot] || "%I:%M"),
          m = t(n[at] || "%I %p"),
          g = t(n[it] || n[rt] || "%a %d"),
          y = t(n[nt] || "%b %d"),
          v = t(n[et] || "%B"),
          b = t(n[tt] || "%B"),
          x = t(n[J] || "%Y");
        return (t) =>
          (i(t) < t ? f : r(t) < t ? d : s(t) < t ? h : a(t) < t ? m : u(t) < t ? (o(t) < t ? g : y) : c(t) < t ? (l(t) < t ? v : b) : x)(t);
      }
      function we(t) {
        const e = he(t.format),
          n = he(t.utcFormat);
        return {
          timeFormat: (t) => ((0, p.Kg)(t) ? e(t) : _e(e, qt, t)),
          utcFormat: (t) => ((0, p.Kg)(t) ? n(t) : _e(n, It, t)),
          timeParse: he(t.parse),
          utcParse: he(t.utcParse),
        };
      }
      let Ae;
      ke();
      function ke() {
        return (Ae = we({ format: fe.DC, parse: fe.T6, utcFormat: fe.aL, utcParse: fe.GY }));
      }
      function Ee(t) {
        return we((0, de.A)(t));
      }
      function Me(t) {
        return arguments.length ? (Ae = Ee(t)) : Ae;
      }
      const De = (t, e) => (0, p.X$)({}, t, e);
      function Ce(t, e) {
        const n = t ? be(t) : xe();
        const i = e ? Ee(e) : Me();
        return De(n, i);
      }
      function Fe(t, e) {
        const n = arguments.length;
        if (n && n !== 2) {
          (0, p.z3)("defaultLocale expects either zero or two arguments.");
        }
        return n ? De(xe(t), Me(e)) : De(xe(), Me());
      }
      function Se() {
        ve();
        ke();
        return Fe();
      }
      const Be = /^(data:|([A-Za-z]+:)?\/\/)/;
      const ze = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
      const $e = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;
      const Re = "file://";
      function Oe(t, e) {
        return (n) => ({ options: n || {}, sanitize: Ne, load: Te, fileAccess: false, file: Le(e), http: qe(t) });
      }
      async function Te(t, e) {
        const n = await this.sanitize(t, e),
          i = n.href;
        return n.localFile ? this.file(i) : this.http(i, e);
      }
      async function Ne(t, e) {
        e = (0, p.X$)({}, this.options, e);
        const n = this.fileAccess,
          i = { href: null };
        let r, s, a;
        const o = ze.test(t.replace($e, ""));
        if (t == null || typeof t !== "string" || !o) {
          (0, p.z3)("Sanitize failure, invalid URI: " + (0, p.r$)(t));
        }
        const u = Be.test(t);
        if ((a = e.baseURL) && !u) {
          if (!t.startsWith("/") && !a.endsWith("/")) {
            t = "/" + t;
          }
          t = a + t;
        }
        s = (r = t.startsWith(Re)) || e.mode === "file" || (e.mode !== "http" && !u && n);
        if (r) {
          t = t.slice(Re.length);
        } else if (t.startsWith("//")) {
          if (e.defaultProtocol === "file") {
            t = t.slice(2);
            s = true;
          } else {
            t = (e.defaultProtocol || "http") + ":" + t;
          }
        }
        Object.defineProperty(i, "localFile", { value: !!s });
        i.href = t;
        if (e.target) {
          i.target = e.target + "";
        }
        if (e.rel) {
          i.rel = e.rel + "";
        }
        if (e.context === "image" && e.crossOrigin) {
          i.crossOrigin = e.crossOrigin + "";
        }
        return i;
      }
      function Le(t) {
        return t
          ? (e) =>
              new Promise((n, i) => {
                t.readFile(e, (t, e) => {
                  if (t) i(t);
                  else n(e);
                });
              })
          : Pe;
      }
      async function Pe() {
        (0, p.z3)("No file system access.");
      }
      function qe(t) {
        return t
          ? async function (e, n) {
              const i = (0, p.X$)({}, this.options.http, n),
                r = n && n.response,
                s = await t(e, i);
              return !s.ok ? (0, p.z3)(s.status + "" + s.statusText) : (0, p.Tn)(s[r]) ? s[r]() : s.text();
            }
          : Ie;
      }
      async function Ie() {
        (0, p.z3)("No HTTP fetch method available.");
      }
      const Ue = (t) => t != null && t === t;
      const je = (t) => t === "true" || t === "false" || t === true || t === false;
      const Ge = (t) => !Number.isNaN(Date.parse(t));
      const Ye = (t) => !Number.isNaN(+t) && !(t instanceof Date);
      const We = (t) => Ye(t) && Number.isInteger(+t);
      const Xe = { boolean: p.G4, integer: p.Ro, number: p.Ro, date: p.ay, string: p.dI, unknown: p.D_ };
      const He = [je, We, Ye, Ge];
      const Ve = ["boolean", "integer", "number", "date"];
      function Qe(t, e) {
        if (!t || !t.length) return "unknown";
        const n = t.length,
          i = He.length,
          r = He.map((t, e) => e + 1);
        for (let s = 0, a = 0, o, u; s < n; ++s) {
          u = e ? t[s][e] : t[s];
          for (o = 0; o < i; ++o) {
            if (r[o] && Ue(u) && !He[o](u)) {
              r[o] = 0;
              ++a;
              if (a === He.length) return "string";
            }
          }
        }
        return Ve[r.reduce((t, e) => (t === 0 ? e : t), 0) - 1];
      }
      function Ke(t, e) {
        return e.reduce((e, n) => {
          e[n] = Qe(t, n);
          return e;
        }, {});
      }
      function Ze(t) {
        const e = function (e, n) {
          const i = { delimiter: t };
          return Je(e, n ? (0, p.X$)(n, i) : i);
        };
        e.responseType = "text";
        return e;
      }
      function Je(t, e) {
        if (e.header) {
          t = e.header.map(p.r$).join(e.delimiter) + "\n" + t;
        }
        return M(e.delimiter).parse(t + "");
      }
      Je.responseType = "text";
      function tn(t) {
        return typeof Buffer === "function" && (0, p.Tn)(Buffer.isBuffer) ? Buffer.isBuffer(t) : false;
      }
      function en(t, e) {
        const n = e && e.property ? (0, p.ZZ)(e.property) : p.D_;
        return (0, p.Gv)(t) && !tn(t) ? nn(n(t), e) : n(JSON.parse(t));
      }
      en.responseType = "json";
      function nn(t, e) {
        if (!(0, p.cy)(t) && (0, p.xZ)(t)) {
          t = [...t];
        }
        return e && e.copy ? JSON.parse(JSON.stringify(t)) : t;
      }
      const rn = { interior: (t, e) => t !== e, exterior: (t, e) => t === e };
      function sn(t, e) {
        let n, i, r, s;
        t = en(t, e);
        if (e && e.feature) {
          n = S;
          r = e.feature;
        } else if (e && e.mesh) {
          n = R;
          r = e.mesh;
          s = rn[e.filter];
        } else {
          (0, p.z3)("Missing TopoJSON feature or mesh parameter.");
        }
        i = (i = t.objects[r]) ? n(t, i, s) : (0, p.z3)("Invalid TopoJSON object: " + r);
        return (i && i.features) || [i];
      }
      sn.responseType = "json";
      const an = { dsv: Je, csv: Ze(","), tsv: Ze("\t"), json: en, topojson: sn };
      function on(t, e) {
        if (arguments.length > 1) {
          an[t] = e;
          return this;
        } else {
          return (0, p.mQ)(an, t) ? an[t] : null;
        }
      }
      function un(t) {
        const e = on(t);
        return (e && e.responseType) || "text";
      }
      function ln(t, e, n, i) {
        e = e || {};
        const r = on(e.type || "json");
        if (!r) (0, p.z3)("Unknown data format type: " + e.type);
        t = r(t, e);
        if (e.parse) cn(t, e.parse, n, i);
        if ((0, p.mQ)(t, "columns")) delete t.columns;
        return t;
      }
      function cn(t, e, n, i) {
        if (!t.length) return;
        const r = Me();
        n = n || r.timeParse;
        i = i || r.utcParse;
        let s = t.columns || Object.keys(t[0]),
          a,
          o,
          u,
          l,
          c,
          f;
        if (e === "auto") e = Ke(t, s);
        s = Object.keys(e);
        const d = s.map((t) => {
          const r = e[t];
          let s, a;
          if (r && (r.startsWith("date:") || r.startsWith("utc:"))) {
            s = r.split(/:(.+)?/, 2);
            a = s[1];
            if ((a[0] === "'" && a[a.length - 1] === "'") || (a[0] === '"' && a[a.length - 1] === '"')) {
              a = a.slice(1, -1);
            }
            const t = s[0] === "utc" ? i : n;
            return t(a);
          }
          if (!Xe[r]) {
            throw Error("Illegal format pattern: " + t + ":" + r);
          }
          return Xe[r];
        });
        for (u = 0, c = t.length, f = s.length; u < c; ++u) {
          a = t[u];
          for (l = 0; l < f; ++l) {
            o = s[l];
            a[o] = d[l](a[o]);
          }
        }
      }
      const fn = Oe(typeof fetch !== "undefined" && fetch, null);
      function dn(t) {
        const e = t || p.D_,
          n = [],
          i = {};
        n.add = (t) => {
          const r = e(t);
          if (!i[r]) {
            i[r] = 1;
            n.push(t);
          }
          return n;
        };
        n.remove = (t) => {
          const r = e(t);
          if (i[r]) {
            i[r] = 0;
            const e = n.indexOf(t);
            if (e >= 0) n.splice(e, 1);
          }
          return n;
        };
        return n;
      }
      async function hn(t, e) {
        try {
          await e(t);
        } catch (n) {
          t.error(n);
        }
      }
      const pn = Symbol("vega_id");
      let mn = 1;
      function gn(t) {
        return !!(t && yn(t));
      }
      function yn(t) {
        return t[pn];
      }
      function vn(t, e) {
        t[pn] = e;
        return t;
      }
      function bn(t) {
        const e = t === Object(t) ? t : { data: t };
        return yn(e) ? e : vn(e, mn++);
      }
      function xn(t) {
        return _n(t, bn({}));
      }
      function _n(t, e) {
        for (const n in t) e[n] = t[n];
        return e;
      }
      function wn(t, e) {
        return vn(e, yn(t));
      }
      function An(t, e) {
        return !t ? null : e ? (n, i) => t(n, i) || yn(e(n)) - yn(e(i)) : (e, n) => t(e, n) || yn(e) - yn(n);
      }
      function kn(t) {
        return t && t.constructor === En;
      }
      function En() {
        const t = [],
          e = [],
          n = [],
          i = [],
          r = [];
        let s = null,
          a = false;
        return {
          constructor: En,
          insert(e) {
            const n = (0, p.YO)(e),
              i = n.length;
            for (let r = 0; r < i; ++r) t.push(n[r]);
            return this;
          },
          remove(t) {
            const n = (0, p.Tn)(t) ? i : e,
              r = (0, p.YO)(t),
              s = r.length;
            for (let e = 0; e < s; ++e) n.push(r[e]);
            return this;
          },
          modify(t, e, i) {
            const s = { field: e, value: (0, p.dY)(i) };
            if ((0, p.Tn)(t)) {
              s.filter = t;
              r.push(s);
            } else {
              s.tuple = t;
              n.push(s);
            }
            return this;
          },
          encode(t, e) {
            if ((0, p.Tn)(t)) r.push({ filter: t, field: e });
            else n.push({ tuple: t, field: e });
            return this;
          },
          clean(t) {
            s = t;
            return this;
          },
          reflow() {
            a = true;
            return this;
          },
          pulse(o, u) {
            const l = {},
              c = {};
            let f, d, h, p, m, g;
            for (f = 0, d = u.length; f < d; ++f) {
              l[yn(u[f])] = 1;
            }
            for (f = 0, d = e.length; f < d; ++f) {
              m = e[f];
              l[yn(m)] = -1;
            }
            for (f = 0, d = i.length; f < d; ++f) {
              p = i[f];
              u.forEach((t) => {
                if (p(t)) l[yn(t)] = -1;
              });
            }
            for (f = 0, d = t.length; f < d; ++f) {
              m = t[f];
              g = yn(m);
              if (l[g]) {
                l[g] = 1;
              } else {
                o.add.push(bn(t[f]));
              }
            }
            for (f = 0, d = u.length; f < d; ++f) {
              m = u[f];
              if (l[yn(m)] < 0) o.rem.push(m);
            }
            function y(t, e, n) {
              if (n) {
                t[e] = n(t);
              } else {
                o.encode = e;
              }
              if (!a) c[yn(t)] = t;
            }
            for (f = 0, d = n.length; f < d; ++f) {
              h = n[f];
              m = h.tuple;
              p = h.field;
              g = l[yn(m)];
              if (g > 0) {
                y(m, p, h.value);
                o.modifies(p);
              }
            }
            for (f = 0, d = r.length; f < d; ++f) {
              h = r[f];
              p = h.filter;
              u.forEach((t) => {
                if (p(t) && l[yn(t)] > 0) {
                  y(t, h.field, h.value);
                }
              });
              o.modifies(h.field);
            }
            if (a) {
              o.mod = e.length || i.length ? u.filter((t) => l[yn(t)] > 0) : u.slice();
            } else {
              for (g in c) o.mod.push(c[g]);
            }
            if (s || (s == null && (e.length || i.length))) {
              o.clean(true);
            }
            return o;
          },
        };
      }
      const Mn = "_:mod:_";
      function Dn() {
        Object.defineProperty(this, Mn, { writable: true, value: {} });
      }
      Dn.prototype = {
        set(t, e, n, i) {
          const r = this,
            s = r[t],
            a = r[Mn];
          if (e != null && e >= 0) {
            if (s[e] !== n || i) {
              s[e] = n;
              a[e + ":" + t] = -1;
              a[t] = -1;
            }
          } else if (s !== n || i) {
            r[t] = n;
            a[t] = (0, p.cy)(n) ? 1 + n.length : -1;
          }
          return r;
        },
        modified(t, e) {
          const n = this[Mn];
          if (!arguments.length) {
            for (const t in n) {
              if (n[t]) return true;
            }
            return false;
          } else if ((0, p.cy)(t)) {
            for (let e = 0; e < t.length; ++e) {
              if (n[t[e]]) return true;
            }
            return false;
          }
          return e != null && e >= 0 ? e + 1 < n[t] || !!n[e + ":" + t] : !!n[t];
        },
        clear() {
          this[Mn] = {};
          return this;
        },
      };
      let Cn = 0;
      const Fn = "pulse",
        Sn = new Dn();
      const Bn = 1,
        zn = 2;
      function $n(t, e, n, i) {
        this.id = ++Cn;
        this.value = t;
        this.stamp = -1;
        this.rank = -1;
        this.qrank = -1;
        this.flags = 0;
        if (e) {
          this._update = e;
        }
        if (n) this.parameters(n, i);
      }
      function Rn(t) {
        return function (e) {
          const n = this.flags;
          if (arguments.length === 0) return !!(n & t);
          this.flags = e ? n | t : n & ~t;
          return this;
        };
      }
      $n.prototype = {
        targets() {
          return this._targets || (this._targets = dn(p.id));
        },
        set(t) {
          if (this.value !== t) {
            this.value = t;
            return 1;
          } else {
            return 0;
          }
        },
        skip: Rn(Bn),
        modified: Rn(zn),
        parameters(t, e, n) {
          e = e !== false;
          const i = (this._argval = this._argval || new Dn()),
            r = (this._argops = this._argops || []),
            s = [];
          let a, o, u, l;
          const c = (t, n, a) => {
            if (a instanceof $n) {
              if (a !== this) {
                if (e) a.targets().add(this);
                s.push(a);
              }
              r.push({ op: a, name: t, index: n });
            } else {
              i.set(t, n, a);
            }
          };
          for (a in t) {
            o = t[a];
            if (a === Fn) {
              (0, p.YO)(o).forEach((t) => {
                if (!(t instanceof $n)) {
                  (0, p.z3)("Pulse parameters must be operator instances.");
                } else if (t !== this) {
                  t.targets().add(this);
                  s.push(t);
                }
              });
              this.source = o;
            } else if ((0, p.cy)(o)) {
              i.set(a, -1, Array((u = o.length)));
              for (l = 0; l < u; ++l) c(a, l, o[l]);
            } else {
              c(a, -1, o);
            }
          }
          this.marshall().clear();
          if (n) r.initonly = true;
          return s;
        },
        marshall(t) {
          const e = this._argval || Sn,
            n = this._argops;
          let i, r, s, a;
          if (n) {
            const o = n.length;
            for (r = 0; r < o; ++r) {
              i = n[r];
              s = i.op;
              a = s.modified() && s.stamp === t;
              e.set(i.name, i.index, s.value, a);
            }
            if (n.initonly) {
              for (r = 0; r < o; ++r) {
                i = n[r];
                i.op.targets().remove(this);
              }
              this._argops = null;
              this._update = null;
            }
          }
          return e;
        },
        detach() {
          const t = this._argops;
          let e, n, i, r;
          if (t) {
            for (e = 0, n = t.length; e < n; ++e) {
              i = t[e];
              r = i.op;
              if (r._targets) {
                r._targets.remove(this);
              }
            }
          }
          this.pulse = null;
          this.source = null;
        },
        evaluate(t) {
          const e = this._update;
          if (e) {
            const n = this.marshall(t.stamp),
              i = e.call(this, n, t);
            n.clear();
            if (i !== this.value) {
              this.value = i;
            } else if (!this.modified()) {
              return t.StopPropagation;
            }
          }
        },
        run(t) {
          if (t.stamp < this.stamp) return t.StopPropagation;
          let e;
          if (this.skip()) {
            this.skip(false);
            e = 0;
          } else {
            e = this.evaluate(t);
          }
          return (this.pulse = e || t);
        },
      };
      function On(t, e, n, i) {
        let r = 1,
          s;
        if (t instanceof $n) {
          s = t;
        } else if (t && t.prototype instanceof $n) {
          s = new t();
        } else if ((0, p.Tn)(t)) {
          s = new $n(null, t);
        } else {
          r = 0;
          s = new $n(t, e);
        }
        this.rank(s);
        if (r) {
          i = n;
          n = e;
        }
        if (n) this.connect(s, s.parameters(n, i));
        this.touch(s);
        return s;
      }
      function Tn(t, e) {
        const n = t.rank,
          i = e.length;
        for (let r = 0; r < i; ++r) {
          if (n < e[r].rank) {
            this.rerank(t);
            return;
          }
        }
      }
      let Nn = 0;
      function Ln(t, e, n) {
        this.id = ++Nn;
        this.value = null;
        if (n) this.receive = n;
        if (t) this._filter = t;
        if (e) this._apply = e;
      }
      function Pn(t, e, n) {
        return new Ln(t, e, n);
      }
      Ln.prototype = {
        _filter: p.vN,
        _apply: p.D_,
        targets() {
          return this._targets || (this._targets = dn(p.id));
        },
        consume(t) {
          if (!arguments.length) return !!this._consume;
          this._consume = !!t;
          return this;
        },
        receive(t) {
          if (this._filter(t)) {
            const e = (this.value = this._apply(t)),
              n = this._targets,
              i = n ? n.length : 0;
            for (let t = 0; t < i; ++t) n[t].receive(e);
            if (this._consume) {
              t.preventDefault();
              t.stopPropagation();
            }
          }
        },
        filter(t) {
          const e = Pn(t);
          this.targets().add(e);
          return e;
        },
        apply(t) {
          const e = Pn(null, t);
          this.targets().add(e);
          return e;
        },
        merge() {
          const t = Pn();
          this.targets().add(t);
          for (let e = 0, n = arguments.length; e < n; ++e) {
            arguments[e].targets().add(t);
          }
          return t;
        },
        throttle(t) {
          let e = -1;
          return this.filter(() => {
            const n = Date.now();
            if (n - e > t) {
              e = n;
              return 1;
            } else {
              return 0;
            }
          });
        },
        debounce(t) {
          const e = Pn();
          this.targets().add(
            Pn(
              null,
              null,
              (0, p.sg)(t, (t) => {
                const n = t.dataflow;
                e.receive(t);
                if (n && n.run) n.run();
              })
            )
          );
          return e;
        },
        between(t, e) {
          let n = false;
          t.targets().add(Pn(null, null, () => (n = true)));
          e.targets().add(Pn(null, null, () => (n = false)));
          return this.filter(() => n);
        },
        detach() {
          this._filter = p.vN;
          this._targets = null;
        },
      };
      function qn(t, e, n, i) {
        const r = this,
          s = Pn(n, i),
          a = function (t) {
            t.dataflow = r;
            try {
              s.receive(t);
            } catch (e) {
              r.error(e);
            } finally {
              r.run();
            }
          };
        let o;
        if (typeof t === "string" && typeof document !== "undefined") {
          o = document.querySelectorAll(t);
        } else {
          o = (0, p.YO)(t);
        }
        const u = o.length;
        for (let l = 0; l < u; ++l) {
          o[l].addEventListener(e, a);
        }
        return s;
      }
      function In(t, e) {
        const n = this.locale();
        return ln(t, e, n.timeParse, n.utcParse);
      }
      function Un(t, e, n) {
        e = this.parse(e, n);
        return this.pulse(t, this.changeset().insert(e));
      }
      async function jn(t, e) {
        const n = this;
        let i = 0,
          r;
        try {
          r = await n.loader().load(t, { context: "dataflow", response: un(e && e.type) });
          try {
            r = n.parse(r, e);
          } catch (s) {
            i = -2;
            n.warn("Data ingestion failed", t, s);
          }
        } catch (s) {
          i = -1;
          n.warn("Loading failed", t, s);
        }
        return { data: r, status: i };
      }
      async function Gn(t, e, n) {
        const i = this,
          r = i._pending || Yn(i);
        r.requests += 1;
        const s = await i.request(e, n);
        i.pulse(
          t,
          i
            .changeset()
            .remove(p.vN)
            .insert(s.data || [])
        );
        r.done();
        return s;
      }
      function Yn(t) {
        let e;
        const n = new Promise((t) => (e = t));
        n.requests = 0;
        n.done = () => {
          if (--n.requests === 0) {
            t._pending = null;
            e(t);
          }
        };
        return (t._pending = n);
      }
      const Wn = { skip: true };
      function Xn(t, e, n, i, r) {
        const s = t instanceof $n ? Vn : Hn;
        s(this, t, e, n, i, r);
        return this;
      }
      function Hn(t, e, n, i, r, s) {
        const a = (0, p.X$)({}, s, Wn);
        let o, u;
        if (!(0, p.Tn)(n)) n = (0, p.dY)(n);
        if (i === undefined) {
          o = (e) => t.touch(n(e));
        } else if ((0, p.Tn)(i)) {
          u = new $n(null, i, r, false);
          o = (e) => {
            u.evaluate(e);
            const i = n(e),
              r = u.value;
            kn(r) ? t.pulse(i, r, s) : t.update(i, r, a);
          };
        } else {
          o = (e) => t.update(n(e), i, a);
        }
        e.apply(o);
      }
      function Vn(t, e, n, i, r, s) {
        if (i === undefined) {
          e.targets().add(n);
        } else {
          const a = s || {},
            o = new $n(null, Qn(n, i), r, false);
          o.modified(a.force);
          o.rank = e.rank;
          e.targets().add(o);
          if (n) {
            o.skip(true);
            o.value = n.value;
            o.targets().add(n);
            t.connect(n, [o]);
          }
        }
      }
      function Qn(t, e) {
        e = (0, p.Tn)(e) ? e : (0, p.dY)(e);
        return t
          ? function (n, i) {
              const r = e(n, i);
              if (!t.skip()) {
                t.skip(r !== this.value).value = r;
              }
              return r;
            }
          : e;
      }
      function Kn(t) {
        t.rank = ++this._rank;
      }
      function Zn(t) {
        const e = [t];
        let n, i, r;
        while (e.length) {
          this.rank((n = e.pop()));
          if ((i = n._targets)) {
            for (r = i.length; --r >= 0; ) {
              e.push((n = i[r]));
              if (n === t) (0, p.z3)("Cycle detected in dataflow graph.");
            }
          }
        }
      }
      const Jn = {};
      const ti = 1 << 0,
        ei = 1 << 1,
        ni = 1 << 2,
        ii = ti | ei,
        ri = ti | ni,
        si = ti | ei | ni,
        ai = 1 << 3,
        oi = 1 << 4,
        ui = 1 << 5,
        li = 1 << 6;
      function ci(t, e, n) {
        this.dataflow = t;
        this.stamp = e == null ? -1 : e;
        this.add = [];
        this.rem = [];
        this.mod = [];
        this.fields = null;
        this.encode = n || null;
      }
      function fi(t, e) {
        const n = [];
        (0, p.rt)(t, e, (t) => n.push(t));
        return n;
      }
      function di(t, e) {
        const n = {};
        t.visit(e, (t) => {
          n[yn(t)] = 1;
        });
        return (t) => (n[yn(t)] ? null : t);
      }
      function hi(t, e) {
        return t ? (n, i) => t(n, i) && e(n, i) : e;
      }
      ci.prototype = {
        StopPropagation: Jn,
        ADD: ti,
        REM: ei,
        MOD: ni,
        ADD_REM: ii,
        ADD_MOD: ri,
        ALL: si,
        REFLOW: ai,
        SOURCE: oi,
        NO_SOURCE: ui,
        NO_FIELDS: li,
        fork(t) {
          return new ci(this.dataflow).init(this, t);
        },
        clone() {
          const t = this.fork(si);
          t.add = t.add.slice();
          t.rem = t.rem.slice();
          t.mod = t.mod.slice();
          if (t.source) t.source = t.source.slice();
          return t.materialize(si | oi);
        },
        addAll() {
          let t = this;
          const e = !t.source || t.add === t.rem || (!t.rem.length && t.source.length === t.add.length);
          if (e) {
            return t;
          } else {
            t = new ci(this.dataflow).init(this);
            t.add = t.source;
            t.rem = [];
            return t;
          }
        },
        init(t, e) {
          const n = this;
          n.stamp = t.stamp;
          n.encode = t.encode;
          if (t.fields && !(e & li)) {
            n.fields = t.fields;
          }
          if (e & ti) {
            n.addF = t.addF;
            n.add = t.add;
          } else {
            n.addF = null;
            n.add = [];
          }
          if (e & ei) {
            n.remF = t.remF;
            n.rem = t.rem;
          } else {
            n.remF = null;
            n.rem = [];
          }
          if (e & ni) {
            n.modF = t.modF;
            n.mod = t.mod;
          } else {
            n.modF = null;
            n.mod = [];
          }
          if (e & ui) {
            n.srcF = null;
            n.source = null;
          } else {
            n.srcF = t.srcF;
            n.source = t.source;
            if (t.cleans) n.cleans = t.cleans;
          }
          return n;
        },
        runAfter(t) {
          this.dataflow.runAfter(t);
        },
        changed(t) {
          const e = t || si;
          return (e & ti && this.add.length) || (e & ei && this.rem.length) || (e & ni && this.mod.length);
        },
        reflow(t) {
          if (t) return this.fork(si).reflow();
          const e = this.add.length,
            n = this.source && this.source.length;
          if (n && n !== e) {
            this.mod = this.source;
            if (e) this.filter(ni, di(this, ti));
          }
          return this;
        },
        clean(t) {
          if (arguments.length) {
            this.cleans = !!t;
            return this;
          } else {
            return this.cleans;
          }
        },
        modifies(t) {
          const e = this.fields || (this.fields = {});
          if ((0, p.cy)(t)) {
            t.forEach((t) => (e[t] = true));
          } else {
            e[t] = true;
          }
          return this;
        },
        modified(t, e) {
          const n = this.fields;
          return !((e || this.mod.length) && n) ? false : !arguments.length ? !!n : (0, p.cy)(t) ? t.some((t) => n[t]) : n[t];
        },
        filter(t, e) {
          const n = this;
          if (t & ti) n.addF = hi(n.addF, e);
          if (t & ei) n.remF = hi(n.remF, e);
          if (t & ni) n.modF = hi(n.modF, e);
          if (t & oi) n.srcF = hi(n.srcF, e);
          return n;
        },
        materialize(t) {
          t = t || si;
          const e = this;
          if (t & ti && e.addF) {
            e.add = fi(e.add, e.addF);
            e.addF = null;
          }
          if (t & ei && e.remF) {
            e.rem = fi(e.rem, e.remF);
            e.remF = null;
          }
          if (t & ni && e.modF) {
            e.mod = fi(e.mod, e.modF);
            e.modF = null;
          }
          if (t & oi && e.srcF) {
            e.source = e.source.filter(e.srcF);
            e.srcF = null;
          }
          return e;
        },
        visit(t, e) {
          const n = this,
            i = e;
          if (t & oi) {
            (0, p.rt)(n.source, n.srcF, i);
            return n;
          }
          if (t & ti) (0, p.rt)(n.add, n.addF, i);
          if (t & ei) (0, p.rt)(n.rem, n.remF, i);
          if (t & ni) (0, p.rt)(n.mod, n.modF, i);
          const r = n.source;
          if (t & ai && r) {
            const t = n.add.length + n.mod.length;
            if (t === r.length);
            else if (t) {
              (0, p.rt)(r, di(n, ri), i);
            } else {
              (0, p.rt)(r, n.srcF, i);
            }
          }
          return n;
        },
      };
      function pi(t, e, n, i) {
        const r = this;
        let s = 0;
        this.dataflow = t;
        this.stamp = e;
        this.fields = null;
        this.encode = i || null;
        this.pulses = n;
        for (const a of n) {
          if (a.stamp !== e) continue;
          if (a.fields) {
            const t = r.fields || (r.fields = {});
            for (const e in a.fields) {
              t[e] = 1;
            }
          }
          if (a.changed(r.ADD)) s |= r.ADD;
          if (a.changed(r.REM)) s |= r.REM;
          if (a.changed(r.MOD)) s |= r.MOD;
        }
        this.changes = s;
      }
      (0, p.B)(pi, ci, {
        fork(t) {
          const e = new ci(this.dataflow).init(this, t & this.NO_FIELDS);
          if (t !== undefined) {
            if (t & e.ADD) this.visit(e.ADD, (t) => e.add.push(t));
            if (t & e.REM) this.visit(e.REM, (t) => e.rem.push(t));
            if (t & e.MOD) this.visit(e.MOD, (t) => e.mod.push(t));
          }
          return e;
        },
        changed(t) {
          return this.changes & t;
        },
        modified(t) {
          const e = this,
            n = e.fields;
          return !(n && e.changes & e.MOD) ? 0 : (0, p.cy)(t) ? t.some((t) => n[t]) : n[t];
        },
        filter() {
          (0, p.z3)("MultiPulse does not support filtering.");
        },
        materialize() {
          (0, p.z3)("MultiPulse does not support materialization.");
        },
        visit(t, e) {
          const n = this,
            i = n.pulses,
            r = i.length;
          let s = 0;
          if (t & n.SOURCE) {
            for (; s < r; ++s) {
              i[s].visit(t, e);
            }
          } else {
            for (; s < r; ++s) {
              if (i[s].stamp === n.stamp) {
                i[s].visit(t, e);
              }
            }
          }
          return n;
        },
      });
      async function mi(t, e, n) {
        const i = this,
          r = [];
        if (i._pulse) return bi(i);
        if (i._pending) await i._pending;
        if (e) await hn(i, e);
        if (!i._touched.length) {
          i.debug("Dataflow invoked, but nothing to do.");
          return i;
        }
        const s = ++i._clock;
        i._pulse = new ci(i, s, t);
        i._touched.forEach((t) => i._enqueue(t, true));
        i._touched = dn(p.id);
        let a = 0,
          o,
          u,
          l;
        try {
          while (i._heap.size() > 0) {
            o = i._heap.pop();
            if (o.rank !== o.qrank) {
              i._enqueue(o, true);
              continue;
            }
            u = o.run(i._getPulse(o, t));
            if (u.then) {
              u = await u;
            } else if (u.async) {
              r.push(u.async);
              u = Jn;
            }
            if (u !== Jn) {
              if (o._targets) o._targets.forEach((t) => i._enqueue(t));
            }
            ++a;
          }
        } catch (c) {
          i._heap.clear();
          l = c;
        }
        i._input = {};
        i._pulse = null;
        i.debug(`Pulse ${s}: ${a} operators`);
        if (l) {
          i._postrun = [];
          i.error(l);
        }
        if (i._postrun.length) {
          const t = i._postrun.sort((t, e) => e.priority - t.priority);
          i._postrun = [];
          for (let e = 0; e < t.length; ++e) {
            await hn(i, t[e].callback);
          }
        }
        if (n) await hn(i, n);
        if (r.length) {
          Promise.all(r).then((t) =>
            i.runAsync(null, () => {
              t.forEach((t) => {
                try {
                  t(i);
                } catch (c) {
                  i.error(c);
                }
              });
            })
          );
        }
        return i;
      }
      async function gi(t, e, n) {
        while (this._running) await this._running;
        const i = () => (this._running = null);
        (this._running = this.evaluate(t, e, n)).then(i, i);
        return this._running;
      }
      function yi(t, e, n) {
        return this._pulse ? bi(this) : (this.evaluate(t, e, n), this);
      }
      function vi(t, e, n) {
        if (this._pulse || e) {
          this._postrun.push({ priority: n || 0, callback: t });
        } else {
          try {
            t(this);
          } catch (i) {
            this.error(i);
          }
        }
      }
      function bi(t) {
        t.error("Dataflow already running. Use runAsync() to chain invocations.");
        return t;
      }
      function xi(t, e) {
        const n = t.stamp < this._clock;
        if (n) t.stamp = this._clock;
        if (n || e) {
          t.qrank = t.rank;
          this._heap.push(t);
        }
      }
      function _i(t, e) {
        const n = t.source,
          i = this._clock;
        return n && (0, p.cy)(n)
          ? new pi(
              this,
              i,
              n.map((t) => t.pulse),
              e
            )
          : this._input[t.id] || wi(this._pulse, n && n.pulse);
      }
      function wi(t, e) {
        if (e && e.stamp === t.stamp) {
          return e;
        }
        t = t.fork();
        if (e && e !== Jn) {
          t.source = e.source;
        }
        return t;
      }
      const Ai = { skip: false, force: false };
      function ki(t, e) {
        const n = e || Ai;
        if (this._pulse) {
          this._enqueue(t);
        } else {
          this._touched.add(t);
        }
        if (n.skip) t.skip(true);
        return this;
      }
      function Ei(t, e, n) {
        const i = n || Ai;
        if (t.set(e) || i.force) {
          this.touch(t, i);
        }
        return this;
      }
      function Mi(t, e, n) {
        this.touch(t, n || Ai);
        const i = new ci(this, this._clock + (this._pulse ? 0 : 1)),
          r = (t.pulse && t.pulse.source) || [];
        i.target = t;
        this._input[t.id] = e.pulse(i, r);
        return this;
      }
      function Di(t) {
        let e = [];
        return {
          clear: () => (e = []),
          size: () => e.length,
          peek: () => e[0],
          push: (n) => {
            e.push(n);
            return Ci(e, 0, e.length - 1, t);
          },
          pop: () => {
            const n = e.pop();
            let i;
            if (e.length) {
              i = e[0];
              e[0] = n;
              Fi(e, 0, t);
            } else {
              i = n;
            }
            return i;
          },
        };
      }
      function Ci(t, e, n, i) {
        let r, s;
        const a = t[n];
        while (n > e) {
          s = (n - 1) >> 1;
          r = t[s];
          if (i(a, r) < 0) {
            t[n] = r;
            n = s;
            continue;
          }
          break;
        }
        return (t[n] = a);
      }
      function Fi(t, e, n) {
        const i = e,
          r = t.length,
          s = t[e];
        let a = (e << 1) + 1,
          o;
        while (a < r) {
          o = a + 1;
          if (o < r && n(t[a], t[o]) >= 0) {
            a = o;
          }
          t[e] = t[a];
          e = a;
          a = (e << 1) + 1;
        }
        t[e] = s;
        return Ci(t, i, e, n);
      }
      function Si() {
        this.logger((0, p.vF)());
        this.logLevel(p.$D);
        this._clock = 0;
        this._rank = 0;
        this._locale = Fe();
        try {
          this._loader = fn();
        } catch (t) {}
        this._touched = dn(p.id);
        this._input = {};
        this._pulse = null;
        this._heap = Di((t, e) => t.qrank - e.qrank);
        this._postrun = [];
      }
      function Bi(t) {
        return function () {
          return this._log[t].apply(this, arguments);
        };
      }
      Si.prototype = {
        stamp() {
          return this._clock;
        },
        loader(t) {
          if (arguments.length) {
            this._loader = t;
            return this;
          } else {
            return this._loader;
          }
        },
        locale(t) {
          if (arguments.length) {
            this._locale = t;
            return this;
          } else {
            return this._locale;
          }
        },
        logger(t) {
          if (arguments.length) {
            this._log = t;
            return this;
          } else {
            return this._log;
          }
        },
        error: Bi("error"),
        warn: Bi("warn"),
        info: Bi("info"),
        debug: Bi("debug"),
        logLevel: Bi("level"),
        cleanThreshold: 1e4,
        add: On,
        connect: Tn,
        rank: Kn,
        rerank: Zn,
        pulse: Mi,
        touch: ki,
        update: Ei,
        changeset: En,
        ingest: Un,
        parse: In,
        preload: Gn,
        request: jn,
        events: qn,
        on: Xn,
        evaluate: mi,
        run: yi,
        runAsync: gi,
        runAfter: vi,
        _enqueue: xi,
        _getPulse: _i,
      };
      function zi(t, e) {
        $n.call(this, t, null, e);
      }
      (0, p.B)(zi, $n, {
        run(t) {
          if (t.stamp < this.stamp) return t.StopPropagation;
          let e;
          if (this.skip()) {
            this.skip(false);
          } else {
            e = this.evaluate(t);
          }
          e = e || t;
          if (e.then) {
            e = e.then((t) => (this.pulse = t));
          } else if (e !== t.StopPropagation) {
            this.pulse = e;
          }
          return e;
        },
        evaluate(t) {
          const e = this.marshall(t.stamp),
            n = this.transform(e, t);
          e.clear();
          return n;
        },
        transform() {},
      });
      const $i = {};
      function Ri(t) {
        const e = Oi(t);
        return (e && e.Definition) || null;
      }
      function Oi(t) {
        t = t && t.toLowerCase();
        return (0, p.mQ)($i, t) ? $i[t] : null;
      }
      var Ti = n(82887);
      var Ni = n(21671);
      var Li = n(44317);
      function Pi(t, ...e) {
        if (typeof t[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
        t = Array.from(t);
        let [n] = e;
        if ((n && n.length !== 2) || e.length > 1) {
          const i = Uint32Array.from(t, (t, e) => e);
          if (e.length > 1) {
            e = e.map((e) => t.map(e));
            i.sort((t, n) => {
              for (const i of e) {
                const e = Ii(i[t], i[n]);
                if (e) return e;
              }
            });
          } else {
            n = t.map(n);
            i.sort((t, e) => Ii(n[t], n[e]));
          }
          return permute(t, i);
        }
        return t.sort(qi(n));
      }
      function qi(t = Ti.A) {
        if (t === Ti.A) return Ii;
        if (typeof t !== "function") throw new TypeError("compare is not a function");
        return (e, n) => {
          const i = t(e, n);
          if (i || i === 0) return i;
          return (t(n, n) === 0) - (t(e, e) === 0);
        };
      }
      function Ii(t, e) {
        return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0);
      }
      function Ui(t, e, n = 0, i = Infinity, r) {
        e = Math.floor(e);
        n = Math.floor(Math.max(0, n));
        i = Math.floor(Math.min(t.length - 1, i));
        if (!(n <= e && e <= i)) return t;
        r = r === undefined ? Ii : qi(r);
        while (i > n) {
          if (i - n > 600) {
            const s = i - n + 1;
            const a = e - n + 1;
            const o = Math.log(s);
            const u = 0.5 * Math.exp((2 * o) / 3);
            const l = 0.5 * Math.sqrt((o * u * (s - u)) / s) * (a - s / 2 < 0 ? -1 : 1);
            const c = Math.max(n, Math.floor(e - (a * u) / s + l));
            const f = Math.min(i, Math.floor(e + ((s - a) * u) / s + l));
            Ui(t, e, c, f, r);
          }
          const s = t[e];
          let a = n;
          let o = i;
          ji(t, n, e);
          if (r(t[i], s) > 0) ji(t, n, i);
          while (a < o) {
            ji(t, a, o), ++a, --o;
            while (r(t[a], s) < 0) ++a;
            while (r(t[o], s) > 0) --o;
          }
          if (r(t[n], s) === 0) ji(t, n, o);
          else ++o, ji(t, o, i);
          if (o <= e) n = o + 1;
          if (e <= o) i = o - 1;
        }
        return t;
      }
      function ji(t, e, n) {
        const i = t[e];
        t[e] = t[n];
        t[n] = i;
      }
      var Gi = n(40168);
      function Yi(t, e, n) {
        t = Float64Array.from((0, Gi.n)(t, n));
        if (!(i = t.length) || isNaN((e = +e))) return;
        if (e <= 0 || i < 2) return (0, Li.A)(t);
        if (e >= 1) return (0, Ni.A)(t);
        var i,
          r = (i - 1) * e,
          s = Math.floor(r),
          a = (0, Ni.A)(Ui(t, s).subarray(0, s + 1)),
          o = (0, Li.A)(t.subarray(s + 1));
        return a + (o - a) * (r - s);
      }
      function Wi(t, e, n = Gi.A) {
        if (!(i = t.length) || isNaN((e = +e))) return;
        if (e <= 0 || i < 2) return +n(t[0], 0, t);
        if (e >= 1) return +n(t[i - 1], i - 1, t);
        var i,
          r = (i - 1) * e,
          s = Math.floor(r),
          a = +n(t[s], s, t),
          o = +n(t[s + 1], s + 1, t);
        return a + (o - a) * (r - s);
      }
      function Xi(t, e, n = number) {
        if (isNaN((e = +e))) return;
        i = Float64Array.from(t, (e, i) => number(n(t[i], i, t)));
        if (e <= 0) return minIndex(i);
        if (e >= 1) return maxIndex(i);
        var i,
          r = Uint32Array.from(t, (t, e) => e),
          s = i.length - 1,
          a = Math.floor(s * e);
        quickselect(r, a, 0, s, (t, e) => ascendingDefined(i[t], i[e]));
        a = greatest(r.subarray(0, a + 1), (t) => i[t]);
        return a >= 0 ? a : -1;
      }
      function Hi(t, e) {
        let n = 0;
        let i;
        let r = 0;
        let s = 0;
        if (e === undefined) {
          for (let e of t) {
            if (e != null && (e = +e) >= e) {
              i = e - r;
              r += i / ++n;
              s += i * (e - r);
            }
          }
        } else {
          let a = -1;
          for (let o of t) {
            if ((o = e(o, ++a, t)) != null && (o = +o) >= o) {
              i = o - r;
              r += i / ++n;
              s += i * (o - r);
            }
          }
        }
        if (n > 1) return s / (n - 1);
      }
      function Vi(t, e) {
        const n = Hi(t, e);
        return n ? Math.sqrt(n) : n;
      }
      function Qi(t, e) {
        return Yi(t, 0.5, e);
      }
      function Ki(t, e) {
        return quantileIndex(t, 0.5, e);
      }
      function* Zi(t, e) {
        if (e == null) {
          for (let e of t) {
            if (e != null && e !== "" && (e = +e) >= e) {
              yield e;
            }
          }
        } else {
          let n = -1;
          for (let i of t) {
            i = e(i, ++n, t);
            if (i != null && i !== "" && (i = +i) >= i) {
              yield i;
            }
          }
        }
      }
      function Ji(t, e, n) {
        const i = Float64Array.from(Zi(t, n));
        i.sort(Ti.A);
        return e.map((t) => Wi(i, t));
      }
      function tr(t, e) {
        return Ji(t, [0.25, 0.5, 0.75], e);
      }
      function er(t, e) {
        const n = t.length,
          i = Vi(t, e),
          r = tr(t, e),
          s = (r[2] - r[0]) / 1.34,
          a = Math.min(i, s) || i || Math.abs(r[0]) || 1;
        return 1.06 * a * Math.pow(n, -0.2);
      }
      function nr(t) {
        const e = t.maxbins || 20,
          n = t.base || 10,
          i = Math.log(n),
          r = t.divide || [5, 2];
        let s = t.extent[0],
          a = t.extent[1],
          o,
          u,
          l,
          c,
          f,
          d;
        const h = t.span || a - s || Math.abs(s) || 1;
        if (t.step) {
          o = t.step;
        } else if (t.steps) {
          c = h / e;
          for (f = 0, d = t.steps.length; f < d && t.steps[f] < c; ++f);
          o = t.steps[Math.max(0, f - 1)];
        } else {
          u = Math.ceil(Math.log(e) / i);
          l = t.minstep || 0;
          o = Math.max(l, Math.pow(n, Math.round(Math.log(h) / i) - u));
          while (Math.ceil(h / o) > e) {
            o *= n;
          }
          for (f = 0, d = r.length; f < d; ++f) {
            c = o / r[f];
            if (c >= l && h / c <= e) o = c;
          }
        }
        c = Math.log(o);
        const p = c >= 0 ? 0 : ~~(-c / i) + 1,
          m = Math.pow(n, -p - 1);
        if (t.nice || t.nice === undefined) {
          c = Math.floor(s / o + m) * o;
          s = s < c ? c - o : c;
          a = Math.ceil(a / o) * o;
        }
        return { start: s, stop: a === s ? s + o : a, step: o };
      }
      var ir = Math.random;
      function rr(t) {
        ir = t;
      }
      function sr(t, e, n, i) {
        if (!t.length) return [undefined, undefined];
        const r = Float64Array.from(Zi(t, i)),
          s = r.length,
          a = e;
        let o, u, l, c;
        for (l = 0, c = Array(a); l < a; ++l) {
          for (o = 0, u = 0; u < s; ++u) {
            o += r[~~(ir() * s)];
          }
          c[l] = o / s;
        }
        c.sort(Ti.A);
        return [Yi(c, n / 2), Yi(c, 1 - n / 2)];
      }
      function ar(t, e, n, i) {
        i = i || ((t) => t);
        const r = t.length,
          s = new Float64Array(r);
        let a = 0,
          o = 1,
          u = i(t[0]),
          l = u,
          c = u + e,
          f;
        for (; o < r; ++o) {
          f = i(t[o]);
          if (f >= c) {
            l = (u + l) / 2;
            for (; a < o; ++a) s[a] = l;
            c = f + e;
            u = f;
          }
          l = f;
        }
        l = (u + l) / 2;
        for (; a < o; ++a) s[a] = l;
        return n ? or(s, e + e / 4) : s;
      }
      function or(t, e) {
        const n = t.length;
        let i = 0,
          r = 1,
          s,
          a;
        while (t[i] === t[r]) ++r;
        while (r < n) {
          s = r + 1;
          while (t[r] === t[s]) ++s;
          if (t[r] - t[r - 1] < e) {
            a = r + ((i + s - r - r) >> 1);
            while (a < r) t[a++] = t[r];
            while (a > r) t[a--] = t[i];
          }
          i = r;
          r = s;
        }
        return t;
      }
      function ur(t) {
        return function () {
          t = (1103515245 * t + 12345) % 2147483647;
          return t / 2147483647;
        };
      }
      function lr(t, e) {
        if (e == null) {
          e = t;
          t = 0;
        }
        let n, i, r;
        const s = {
          min(t) {
            if (arguments.length) {
              n = t || 0;
              r = i - n;
              return s;
            } else {
              return n;
            }
          },
          max(t) {
            if (arguments.length) {
              i = t || 0;
              r = i - n;
              return s;
            } else {
              return i;
            }
          },
          sample() {
            return n + Math.floor(r * ir());
          },
          pdf(t) {
            return t === Math.floor(t) && t >= n && t < i ? 1 / r : 0;
          },
          cdf(t) {
            const e = Math.floor(t);
            return e < n ? 0 : e >= i ? 1 : (e - n + 1) / r;
          },
          icdf(t) {
            return t >= 0 && t <= 1 ? n - 1 + Math.floor(t * r) : NaN;
          },
        };
        return s.min(t).max(e);
      }
      const cr = Math.sqrt(2 * Math.PI);
      const fr = Math.SQRT2;
      let dr = NaN;
      function hr(t, e) {
        t = t || 0;
        e = e == null ? 1 : e;
        let n = 0,
          i = 0,
          r,
          s;
        if (dr === dr) {
          n = dr;
          dr = NaN;
        } else {
          do {
            n = ir() * 2 - 1;
            i = ir() * 2 - 1;
            r = n * n + i * i;
          } while (r === 0 || r > 1);
          s = Math.sqrt((-2 * Math.log(r)) / r);
          n *= s;
          dr = i * s;
        }
        return t + n * e;
      }
      function pr(t, e, n) {
        n = n == null ? 1 : n;
        const i = (t - (e || 0)) / n;
        return Math.exp(-0.5 * i * i) / (n * cr);
      }
      function mr(t, e, n) {
        e = e || 0;
        n = n == null ? 1 : n;
        const i = (t - e) / n,
          r = Math.abs(i);
        let s;
        if (r > 37) {
          s = 0;
        } else {
          const t = Math.exp((-r * r) / 2);
          let e;
          if (r < 7.07106781186547) {
            e = 0.0352624965998911 * r + 0.700383064443688;
            e = e * r + 6.37396220353165;
            e = e * r + 33.912866078383;
            e = e * r + 112.079291497871;
            e = e * r + 221.213596169931;
            e = e * r + 220.206867912376;
            s = t * e;
            e = 0.0883883476483184 * r + 1.75566716318264;
            e = e * r + 16.064177579207;
            e = e * r + 86.7807322029461;
            e = e * r + 296.564248779674;
            e = e * r + 637.333633378831;
            e = e * r + 793.826512519948;
            e = e * r + 440.413735824752;
            s = s / e;
          } else {
            e = r + 0.65;
            e = r + 4 / e;
            e = r + 3 / e;
            e = r + 2 / e;
            e = r + 1 / e;
            s = t / e / 2.506628274631;
          }
        }
        return i > 0 ? 1 - s : s;
      }
      function gr(t, e, n) {
        if (t < 0 || t > 1) return NaN;
        return (e || 0) + (n == null ? 1 : n) * fr * yr(2 * t - 1);
      }
      function yr(t) {
        let e = -Math.log((1 - t) * (1 + t)),
          n;
        if (e < 6.25) {
          e -= 3.125;
          n = -364441206401782e-35;
          n = -16850591381820166e-35 + n * e;
          n = 128584807152564e-32 + n * e;
          n = 11157877678025181e-33 + n * e;
          n = -1333171662854621e-31 + n * e;
          n = 20972767875968562e-33 + n * e;
          n = 6637638134358324e-30 + n * e;
          n = -4054566272975207e-29 + n * e;
          n = -8151934197605472e-29 + n * e;
          n = 26335093153082323e-28 + n * e;
          n = -12975133253453532e-27 + n * e;
          n = -5415412054294628e-26 + n * e;
          n = 1.0512122733215323e-9 + n * e;
          n = -4.112633980346984e-9 + n * e;
          n = -2.9070369957882005e-8 + n * e;
          n = 4.2347877827932404e-7 + n * e;
          n = -13654692000834679e-22 + n * e;
          n = -13882523362786469e-21 + n * e;
          n = 0.00018673420803405714 + n * e;
          n = -0.000740702534166267 + n * e;
          n = -0.006033670871430149 + n * e;
          n = 0.24015818242558962 + n * e;
          n = 1.6536545626831027 + n * e;
        } else if (e < 16) {
          e = Math.sqrt(e) - 3.25;
          n = 2.2137376921775787e-9;
          n = 9.075656193888539e-8 + n * e;
          n = -2.7517406297064545e-7 + n * e;
          n = 1.8239629214389228e-8 + n * e;
          n = 15027403968909828e-22 + n * e;
          n = -4013867526981546e-21 + n * e;
          n = 29234449089955446e-22 + n * e;
          n = 12475304481671779e-21 + n * e;
          n = -47318229009055734e-21 + n * e;
          n = 6828485145957318e-20 + n * e;
          n = 24031110387097894e-21 + n * e;
          n = -0.0003550375203628475 + n * e;
          n = 0.0009532893797373805 + n * e;
          n = -0.0016882755560235047 + n * e;
          n = 0.002491442096107851 + n * e;
          n = -0.003751208507569241 + n * e;
          n = 0.005370914553590064 + n * e;
          n = 1.0052589676941592 + n * e;
          n = 3.0838856104922208 + n * e;
        } else if (Number.isFinite(e)) {
          e = Math.sqrt(e) - 5;
          n = -27109920616438573e-27;
          n = -2.555641816996525e-10 + n * e;
          n = 1.5076572693500548e-9 + n * e;
          n = -3.789465440126737e-9 + n * e;
          n = 7.61570120807834e-9 + n * e;
          n = -1.496002662714924e-8 + n * e;
          n = 2.914795345090108e-8 + n * e;
          n = -6.771199775845234e-8 + n * e;
          n = 2.2900482228026655e-7 + n * e;
          n = -9.9298272942317e-7 + n * e;
          n = 4526062597223154e-21 + n * e;
          n = -1968177810553167e-20 + n * e;
          n = 7599527703001776e-20 + n * e;
          n = -0.00021503011930044477 + n * e;
          n = -0.00013871931833623122 + n * e;
          n = 1.0103004648645344 + n * e;
          n = 4.849906401408584 + n * e;
        } else {
          n = Infinity;
        }
        return n * t;
      }
      function vr(t, e) {
        let n, i;
        const r = {
          mean(t) {
            if (arguments.length) {
              n = t || 0;
              return r;
            } else {
              return n;
            }
          },
          stdev(t) {
            if (arguments.length) {
              i = t == null ? 1 : t;
              return r;
            } else {
              return i;
            }
          },
          sample: () => hr(n, i),
          pdf: (t) => pr(t, n, i),
          cdf: (t) => mr(t, n, i),
          icdf: (t) => gr(t, n, i),
        };
        return r.mean(t).stdev(e);
      }
      function br(t, e) {
        const n = vr();
        let i = 0;
        const r = {
          data(n) {
            if (arguments.length) {
              t = n;
              i = n ? n.length : 0;
              return r.bandwidth(e);
            } else {
              return t;
            }
          },
          bandwidth(n) {
            if (!arguments.length) return e;
            e = n;
            if (!e && t) e = er(t);
            return r;
          },
          sample() {
            return t[~~(ir() * i)] + e * n.sample();
          },
          pdf(r) {
            let s = 0,
              a = 0;
            for (; a < i; ++a) {
              s += n.pdf((r - t[a]) / e);
            }
            return s / e / i;
          },
          cdf(r) {
            let s = 0,
              a = 0;
            for (; a < i; ++a) {
              s += n.cdf((r - t[a]) / e);
            }
            return s / i;
          },
          icdf() {
            throw Error("KDE icdf not supported.");
          },
        };
        return r.data(t);
      }
      function xr(t, e) {
        t = t || 0;
        e = e == null ? 1 : e;
        return Math.exp(t + hr() * e);
      }
      function _r(t, e, n) {
        if (t <= 0) return 0;
        e = e || 0;
        n = n == null ? 1 : n;
        const i = (Math.log(t) - e) / n;
        return Math.exp(-0.5 * i * i) / (n * cr * t);
      }
      function wr(t, e, n) {
        return mr(Math.log(t), e, n);
      }
      function Ar(t, e, n) {
        return Math.exp(gr(t, e, n));
      }
      function kr(t, e) {
        let n, i;
        const r = {
          mean(t) {
            if (arguments.length) {
              n = t || 0;
              return r;
            } else {
              return n;
            }
          },
          stdev(t) {
            if (arguments.length) {
              i = t == null ? 1 : t;
              return r;
            } else {
              return i;
            }
          },
          sample: () => xr(n, i),
          pdf: (t) => _r(t, n, i),
          cdf: (t) => wr(t, n, i),
          icdf: (t) => Ar(t, n, i),
        };
        return r.mean(t).stdev(e);
      }
      function Er(t, e) {
        let n = 0,
          i;
        function r(t) {
          const e = [];
          let i = 0,
            r;
          for (r = 0; r < n; ++r) {
            i += e[r] = t[r] == null ? 1 : +t[r];
          }
          for (r = 0; r < n; ++r) {
            e[r] /= i;
          }
          return e;
        }
        const s = {
          weights(t) {
            if (arguments.length) {
              i = r((e = t || []));
              return s;
            }
            return e;
          },
          distributions(i) {
            if (arguments.length) {
              if (i) {
                n = i.length;
                t = i;
              } else {
                n = 0;
                t = [];
              }
              return s.weights(e);
            }
            return t;
          },
          sample() {
            const e = ir();
            let r = t[n - 1],
              s = i[0],
              a = 0;
            for (; a < n - 1; s += i[++a]) {
              if (e < s) {
                r = t[a];
                break;
              }
            }
            return r.sample();
          },
          pdf(e) {
            let r = 0,
              s = 0;
            for (; s < n; ++s) {
              r += i[s] * t[s].pdf(e);
            }
            return r;
          },
          cdf(e) {
            let r = 0,
              s = 0;
            for (; s < n; ++s) {
              r += i[s] * t[s].cdf(e);
            }
            return r;
          },
          icdf() {
            throw Error("Mixture icdf not supported.");
          },
        };
        return s.distributions(t).weights(e);
      }
      function Mr(t, e) {
        if (e == null) {
          e = t == null ? 1 : t;
          t = 0;
        }
        return t + (e - t) * ir();
      }
      function Dr(t, e, n) {
        if (n == null) {
          n = e == null ? 1 : e;
          e = 0;
        }
        return t >= e && t <= n ? 1 / (n - e) : 0;
      }
      function Cr(t, e, n) {
        if (n == null) {
          n = e == null ? 1 : e;
          e = 0;
        }
        return t < e ? 0 : t > n ? 1 : (t - e) / (n - e);
      }
      function Fr(t, e, n) {
        if (n == null) {
          n = e == null ? 1 : e;
          e = 0;
        }
        return t >= 0 && t <= 1 ? e + t * (n - e) : NaN;
      }
      function Sr(t, e) {
        let n, i;
        const r = {
          min(t) {
            if (arguments.length) {
              n = t || 0;
              return r;
            } else {
              return n;
            }
          },
          max(t) {
            if (arguments.length) {
              i = t == null ? 1 : t;
              return r;
            } else {
              return i;
            }
          },
          sample: () => Mr(n, i),
          pdf: (t) => Dr(t, n, i),
          cdf: (t) => Cr(t, n, i),
          icdf: (t) => Fr(t, n, i),
        };
        if (e == null) {
          e = t == null ? 1 : t;
          t = 0;
        }
        return r.min(t).max(e);
      }
      function Br(t, e, n) {
        let i = 0,
          r = 0;
        for (const s of t) {
          const t = n(s);
          if (e(s) == null || t == null || isNaN(t)) continue;
          i += (t - i) / ++r;
        }
        return { coef: [i], predict: () => i, rSquared: 0 };
      }
      function zr(t, e, n, i) {
        const r = i - t * t,
          s = Math.abs(r) < 1e-24 ? 0 : (n - t * e) / r,
          a = e - s * t;
        return [a, s];
      }
      function $r(t, e, n, i) {
        t = t.filter((t) => {
          let i = e(t),
            r = n(t);
          return i != null && (i = +i) >= i && r != null && (r = +r) >= r;
        });
        if (i) {
          t.sort((t, n) => e(t) - e(n));
        }
        const r = t.length,
          s = new Float64Array(r),
          a = new Float64Array(r);
        let o = 0,
          u = 0,
          l = 0,
          c,
          f,
          d;
        for (d of t) {
          s[o] = c = +e(d);
          a[o] = f = +n(d);
          ++o;
          u += (c - u) / o;
          l += (f - l) / o;
        }
        for (o = 0; o < r; ++o) {
          s[o] -= u;
          a[o] -= l;
        }
        return [s, a, u, l];
      }
      function Rr(t, e, n, i) {
        let r = -1,
          s,
          a;
        for (const o of t) {
          s = e(o);
          a = n(o);
          if (s != null && (s = +s) >= s && a != null && (a = +a) >= a) {
            i(s, a, ++r);
          }
        }
      }
      function Or(t, e, n, i, r) {
        let s = 0,
          a = 0;
        Rr(t, e, n, (t, e) => {
          const n = e - r(t),
            o = e - i;
          s += n * n;
          a += o * o;
        });
        return 1 - s / a;
      }
      function Tr(t, e, n) {
        let i = 0,
          r = 0,
          s = 0,
          a = 0,
          o = 0;
        Rr(t, e, n, (t, e) => {
          ++o;
          i += (t - i) / o;
          r += (e - r) / o;
          s += (t * e - s) / o;
          a += (t * t - a) / o;
        });
        const u = zr(i, r, s, a),
          l = (t) => u[0] + u[1] * t;
        return { coef: u, predict: l, rSquared: Or(t, e, n, r, l) };
      }
      function Nr(t, e, n) {
        let i = 0,
          r = 0,
          s = 0,
          a = 0,
          o = 0;
        Rr(t, e, n, (t, e) => {
          ++o;
          t = Math.log(t);
          i += (t - i) / o;
          r += (e - r) / o;
          s += (t * e - s) / o;
          a += (t * t - a) / o;
        });
        const u = zr(i, r, s, a),
          l = (t) => u[0] + u[1] * Math.log(t);
        return { coef: u, predict: l, rSquared: Or(t, e, n, r, l) };
      }
      function Lr(t, e, n) {
        const [i, r, s, a] = $r(t, e, n);
        let o = 0,
          u = 0,
          l = 0,
          c = 0,
          f = 0,
          d,
          h,
          p;
        Rr(t, e, n, (t, e) => {
          d = i[f++];
          h = Math.log(e);
          p = d * e;
          o += (e * h - o) / f;
          u += (p - u) / f;
          l += (p * h - l) / f;
          c += (d * p - c) / f;
        });
        const [m, g] = zr(u / a, o / a, l / a, c / a),
          y = (t) => Math.exp(m + g * (t - s));
        return { coef: [Math.exp(m - g * s), g], predict: y, rSquared: Or(t, e, n, a, y) };
      }
      function Pr(t, e, n) {
        let i = 0,
          r = 0,
          s = 0,
          a = 0,
          o = 0,
          u = 0;
        Rr(t, e, n, (t, e) => {
          const n = Math.log(t),
            l = Math.log(e);
          ++u;
          i += (n - i) / u;
          r += (l - r) / u;
          s += (n * l - s) / u;
          a += (n * n - a) / u;
          o += (e - o) / u;
        });
        const l = zr(i, r, s, a),
          c = (t) => l[0] * Math.pow(t, l[1]);
        l[0] = Math.exp(l[0]);
        return { coef: l, predict: c, rSquared: Or(t, e, n, o, c) };
      }
      function qr(t, e, n) {
        const [i, r, s, a] = $r(t, e, n),
          o = i.length;
        let u = 0,
          l = 0,
          c = 0,
          f = 0,
          d = 0,
          h,
          p,
          m,
          g;
        for (h = 0; h < o; ) {
          p = i[h];
          m = r[h++];
          g = p * p;
          u += (g - u) / h;
          l += (g * p - l) / h;
          c += (g * g - c) / h;
          f += (p * m - f) / h;
          d += (g * m - d) / h;
        }
        const y = c - u * u,
          v = u * y - l * l,
          b = (d * u - f * l) / v,
          x = (f * y - d * l) / v,
          _ = -b * u,
          w = (t) => {
            t = t - s;
            return b * t * t + x * t + _ + a;
          };
        return { coef: [_ - x * s + b * s * s + a, x - 2 * b * s, b], predict: w, rSquared: Or(t, e, n, a, w) };
      }
      function Ir(t, e, n, i) {
        if (i === 0) return Br(t, e, n);
        if (i === 1) return Tr(t, e, n);
        if (i === 2) return qr(t, e, n);
        const [r, s, a, o] = $r(t, e, n),
          u = r.length,
          l = [],
          c = [],
          f = i + 1;
        let d, h, p, m, g;
        for (d = 0; d < f; ++d) {
          for (p = 0, m = 0; p < u; ++p) {
            m += Math.pow(r[p], d) * s[p];
          }
          l.push(m);
          g = new Float64Array(f);
          for (h = 0; h < f; ++h) {
            for (p = 0, m = 0; p < u; ++p) {
              m += Math.pow(r[p], d + h);
            }
            g[h] = m;
          }
          c.push(g);
        }
        c.push(l);
        const y = jr(c),
          v = (t) => {
            t -= a;
            let e = o + y[0] + y[1] * t + y[2] * t * t;
            for (d = 3; d < f; ++d) e += y[d] * Math.pow(t, d);
            return e;
          };
        return { coef: Ur(f, y, -a, o), predict: v, rSquared: Or(t, e, n, o, v) };
      }
      function Ur(t, e, n, i) {
        const r = Array(t);
        let s, a, o, u;
        for (s = 0; s < t; ++s) r[s] = 0;
        for (s = t - 1; s >= 0; --s) {
          o = e[s];
          u = 1;
          r[s] += o;
          for (a = 1; a <= s; ++a) {
            u *= (s + 1 - a) / a;
            r[s - a] += o * Math.pow(n, a) * u;
          }
        }
        r[0] += i;
        return r;
      }
      function jr(t) {
        const e = t.length - 1,
          n = [];
        let i, r, s, a, o;
        for (i = 0; i < e; ++i) {
          a = i;
          for (r = i + 1; r < e; ++r) {
            if (Math.abs(t[i][r]) > Math.abs(t[i][a])) {
              a = r;
            }
          }
          for (s = i; s < e + 1; ++s) {
            o = t[s][i];
            t[s][i] = t[s][a];
            t[s][a] = o;
          }
          for (r = i + 1; r < e; ++r) {
            for (s = e; s >= i; s--) {
              t[s][r] -= (t[s][i] * t[i][r]) / t[i][i];
            }
          }
        }
        for (r = e - 1; r >= 0; --r) {
          o = 0;
          for (s = r + 1; s < e; ++s) {
            o += t[s][r] * n[s];
          }
          n[r] = (t[e][r] - o) / t[r][r];
        }
        return n;
      }
      const Gr = 2,
        Yr = 1e-12;
      function Wr(t, e, n, i) {
        const [r, s, a, o] = $r(t, e, n, true),
          u = r.length,
          l = Math.max(2, ~~(i * u)),
          c = new Float64Array(u),
          f = new Float64Array(u),
          d = new Float64Array(u).fill(1);
        for (let h = -1; ++h <= Gr; ) {
          const t = [0, l - 1];
          for (let n = 0; n < u; ++n) {
            const e = r[n],
              i = t[0],
              a = t[1],
              o = e - r[i] > r[a] - e ? i : a;
            let u = 0,
              l = 0,
              h = 0,
              p = 0,
              m = 0;
            const g = 1 / Math.abs(r[o] - e || 1);
            for (let t = i; t <= a; ++t) {
              const n = r[t],
                i = s[t],
                a = Xr(Math.abs(e - n) * g) * d[t],
                o = n * a;
              u += a;
              l += o;
              h += i * a;
              p += i * o;
              m += n * o;
            }
            const [y, v] = zr(l / u, h / u, p / u, m / u);
            c[n] = y + v * e;
            f[n] = Math.abs(s[n] - c[n]);
            Hr(r, n + 1, t);
          }
          if (h === Gr) {
            break;
          }
          const e = Qi(f);
          if (Math.abs(e) < Yr) break;
          for (let n = 0, i, r; n < u; ++n) {
            i = f[n] / (6 * e);
            d[n] = i >= 1 ? Yr : (r = 1 - i * i) * r;
          }
        }
        return Vr(r, c, a, o);
      }
      function Xr(t) {
        return (t = 1 - t * t * t) * t * t;
      }
      function Hr(t, e, n) {
        const i = t[e];
        let r = n[0],
          s = n[1] + 1;
        if (s >= t.length) return;
        while (e > r && t[s] - i <= i - t[r]) {
          n[0] = ++r;
          n[1] = s;
          ++s;
        }
      }
      function Vr(t, e, n, i) {
        const r = t.length,
          s = [];
        let a = 0,
          o = 0,
          u = [],
          l;
        for (; a < r; ++a) {
          l = t[a] + n;
          if (u[0] === l) {
            u[1] += (e[a] - u[1]) / ++o;
          } else {
            o = 0;
            u[1] += i;
            u = [l, e[a]];
            s.push(u);
          }
        }
        u[1] += i;
        return s;
      }
      const Qr = (0.5 * Math.PI) / 180;
      function Kr(t, e, n, i) {
        n = n || 25;
        i = Math.max(n, i || 200);
        const r = (e) => [e, t(e)],
          s = e[0],
          a = e[1],
          o = a - s,
          u = o / i,
          l = [r(s)],
          c = [];
        if (n === i) {
          for (let t = 1; t < i; ++t) {
            l.push(r(s + (t / n) * o));
          }
          l.push(r(a));
          return l;
        } else {
          c.push(r(a));
          for (let t = n; --t > 0; ) {
            c.push(r(s + (t / n) * o));
          }
        }
        let f = l[0];
        let d = c[c.length - 1];
        const h = 1 / o;
        const p = Zr(f[1], c);
        while (d) {
          const t = r((f[0] + d[0]) / 2);
          const e = t[0] - f[0] >= u;
          if (e && Jr(f, t, d, h, p) > Qr) {
            c.push(t);
          } else {
            f = d;
            l.push(d);
            c.pop();
          }
          d = c[c.length - 1];
        }
        return l;
      }
      function Zr(t, e) {
        let n = t;
        let i = t;
        const r = e.length;
        for (let s = 0; s < r; ++s) {
          const t = e[s][1];
          if (t < n) n = t;
          if (t > i) i = t;
        }
        return 1 / (i - n);
      }
      function Jr(t, e, n, i, r) {
        const s = Math.atan2(r * (n[1] - t[1]), i * (n[0] - t[0])),
          a = Math.atan2(r * (e[1] - t[1]), i * (e[0] - t[0]));
        return Math.abs(s - a);
      }
      function ts(t, e) {
        let n = 0;
        let i = 0;
        if (e === undefined) {
          for (let e of t) {
            if (e != null && (e = +e) >= e) {
              ++n, (i += e);
            }
          }
        } else {
          let r = -1;
          for (let s of t) {
            if ((s = e(s, ++r, t)) != null && (s = +s) >= s) {
              ++n, (i += s);
            }
          }
        }
        if (n) return i / n;
      }
      var es = n(18312);
      function ns(t) {
        return (e) => {
          const n = t.length;
          let i = 1,
            r = String(t[0](e));
          for (; i < n; ++i) {
            r += "|" + t[i](e);
          }
          return r;
        };
      }
      function is(t) {
        return !t || !t.length
          ? function () {
              return "";
            }
          : t.length === 1
            ? t[0]
            : ns(t);
      }
      function rs(t, e, n) {
        return n || t + (!e ? "" : "_" + e);
      }
      const ss = () => {};
      const as = { init: ss, add: ss, rem: ss, idx: 0 };
      const os = {
        values: { init: (t) => (t.cell.store = true), value: (t) => t.cell.data.values(), idx: -1 },
        count: { value: (t) => t.cell.num },
        __count__: { value: (t) => t.missing + t.valid },
        missing: { value: (t) => t.missing },
        valid: { value: (t) => t.valid },
        sum: { init: (t) => (t.sum = 0), value: (t) => (t.valid ? t.sum : undefined), add: (t, e) => (t.sum += +e), rem: (t, e) => (t.sum -= e) },
        product: {
          init: (t) => (t.product = 1),
          value: (t) => (t.valid ? t.product : undefined),
          add: (t, e) => (t.product *= e),
          rem: (t, e) => (t.product /= e),
        },
        mean: {
          init: (t) => (t.mean = 0),
          value: (t) => (t.valid ? t.mean : undefined),
          add: (t, e) => ((t.mean_d = e - t.mean), (t.mean += t.mean_d / t.valid)),
          rem: (t, e) => ((t.mean_d = e - t.mean), (t.mean -= t.valid ? t.mean_d / t.valid : t.mean)),
        },
        average: { value: (t) => (t.valid ? t.mean : undefined), req: ["mean"], idx: 1 },
        variance: {
          init: (t) => (t.dev = 0),
          value: (t) => (t.valid > 1 ? t.dev / (t.valid - 1) : undefined),
          add: (t, e) => (t.dev += t.mean_d * (e - t.mean)),
          rem: (t, e) => (t.dev -= t.mean_d * (e - t.mean)),
          req: ["mean"],
          idx: 1,
        },
        variancep: { value: (t) => (t.valid > 1 ? t.dev / t.valid : undefined), req: ["variance"], idx: 2 },
        stdev: { value: (t) => (t.valid > 1 ? Math.sqrt(t.dev / (t.valid - 1)) : undefined), req: ["variance"], idx: 2 },
        stdevp: { value: (t) => (t.valid > 1 ? Math.sqrt(t.dev / t.valid) : undefined), req: ["variance"], idx: 2 },
        stderr: { value: (t) => (t.valid > 1 ? Math.sqrt(t.dev / (t.valid * (t.valid - 1))) : undefined), req: ["variance"], idx: 2 },
        distinct: { value: (t) => t.cell.data.distinct(t.get), req: ["values"], idx: 3 },
        ci0: { value: (t) => t.cell.data.ci0(t.get), req: ["values"], idx: 3 },
        ci1: { value: (t) => t.cell.data.ci1(t.get), req: ["values"], idx: 3 },
        median: { value: (t) => t.cell.data.q2(t.get), req: ["values"], idx: 3 },
        q1: { value: (t) => t.cell.data.q1(t.get), req: ["values"], idx: 3 },
        q3: { value: (t) => t.cell.data.q3(t.get), req: ["values"], idx: 3 },
        min: {
          init: (t) => (t.min = undefined),
          value: (t) => (t.min = Number.isNaN(t.min) ? t.cell.data.min(t.get) : t.min),
          add: (t, e) => {
            if (e < t.min || t.min === undefined) t.min = e;
          },
          rem: (t, e) => {
            if (e <= t.min) t.min = NaN;
          },
          req: ["values"],
          idx: 4,
        },
        max: {
          init: (t) => (t.max = undefined),
          value: (t) => (t.max = Number.isNaN(t.max) ? t.cell.data.max(t.get) : t.max),
          add: (t, e) => {
            if (e > t.max || t.max === undefined) t.max = e;
          },
          rem: (t, e) => {
            if (e >= t.max) t.max = NaN;
          },
          req: ["values"],
          idx: 4,
        },
        argmin: {
          init: (t) => (t.argmin = undefined),
          value: (t) => t.argmin || t.cell.data.argmin(t.get),
          add: (t, e, n) => {
            if (e < t.min) t.argmin = n;
          },
          rem: (t, e) => {
            if (e <= t.min) t.argmin = undefined;
          },
          req: ["min", "values"],
          idx: 3,
        },
        argmax: {
          init: (t) => (t.argmax = undefined),
          value: (t) => t.argmax || t.cell.data.argmax(t.get),
          add: (t, e, n) => {
            if (e > t.max) t.argmax = n;
          },
          rem: (t, e) => {
            if (e >= t.max) t.argmax = undefined;
          },
          req: ["max", "values"],
          idx: 3,
        },
        exponential: {
          init: (t, e) => {
            t.exp = 0;
            t.exp_r = e;
          },
          value: (t) => (t.valid ? (t.exp * (1 - t.exp_r)) / (1 - t.exp_r ** t.valid) : undefined),
          add: (t, e) => (t.exp = t.exp_r * t.exp + e),
          rem: (t, e) => (t.exp = (t.exp - e / t.exp_r ** (t.valid - 1)) / t.exp_r),
        },
        exponentialb: { value: (t) => (t.valid ? t.exp * (1 - t.exp_r) : undefined), req: ["exponential"], idx: 1 },
      };
      const us = Object.keys(os).filter((t) => t !== "__count__");
      function ls(t, e) {
        return (n, i) => (0, p.X$)({ name: t, aggregate_param: i, out: n || t }, as, e);
      }
      [...us, "__count__"].forEach((t) => {
        os[t] = ls(t, os[t]);
      });
      function cs(t, e, n) {
        return os[t](n, e);
      }
      function fs(t, e) {
        return t.idx - e.idx;
      }
      function ds(t) {
        const e = {};
        t.forEach((t) => (e[t.name] = t));
        const n = (t) => {
          if (!t.req) return;
          t.req.forEach((t) => {
            if (!e[t]) n((e[t] = os[t]()));
          });
        };
        t.forEach(n);
        return Object.values(e).sort(fs);
      }
      function hs() {
        this.valid = 0;
        this.missing = 0;
        this._ops.forEach((t) => (t.aggregate_param == null ? t.init(this) : t.init(this, t.aggregate_param)));
      }
      function ps(t, e) {
        if (t == null || t === "") {
          ++this.missing;
          return;
        }
        if (t !== t) return;
        ++this.valid;
        this._ops.forEach((n) => n.add(this, t, e));
      }
      function ms(t, e) {
        if (t == null || t === "") {
          --this.missing;
          return;
        }
        if (t !== t) return;
        --this.valid;
        this._ops.forEach((n) => n.rem(this, t, e));
      }
      function gs(t) {
        this._out.forEach((e) => (t[e.out] = e.value(this)));
        return t;
      }
      function ys(t, e) {
        const n = e || p.D_,
          i = ds(t),
          r = t.slice().sort(fs);
        function s(t) {
          this._ops = i;
          this._out = r;
          this.cell = t;
          this.init();
        }
        s.prototype.init = hs;
        s.prototype.add = ps;
        s.prototype.rem = ms;
        s.prototype.set = gs;
        s.prototype.get = n;
        s.fields = t.map((t) => t.out);
        return s;
      }
      function vs(t) {
        this._key = t ? (0, p.ZZ)(t) : yn;
        this.reset();
      }
      const bs = vs.prototype;
      bs.reset = function () {
        this._add = [];
        this._rem = [];
        this._ext = null;
        this._get = null;
        this._q = null;
      };
      bs.add = function (t) {
        this._add.push(t);
      };
      bs.rem = function (t) {
        this._rem.push(t);
      };
      bs.values = function () {
        this._get = null;
        if (this._rem.length === 0) return this._add;
        const t = this._add,
          e = this._rem,
          n = this._key,
          i = t.length,
          r = e.length,
          s = Array(i - r),
          a = {};
        let o, u, l;
        for (o = 0; o < r; ++o) {
          a[n(e[o])] = 1;
        }
        for (o = 0, u = 0; o < i; ++o) {
          if (a[n((l = t[o]))]) {
            a[n(l)] = 0;
          } else {
            s[u++] = l;
          }
        }
        this._rem = [];
        return (this._add = s);
      };
      bs.distinct = function (t) {
        const e = this.values(),
          n = {};
        let i = e.length,
          r = 0,
          s;
        while (--i >= 0) {
          s = t(e[i]) + "";
          if (!(0, p.mQ)(n, s)) {
            n[s] = 1;
            ++r;
          }
        }
        return r;
      };
      bs.extent = function (t) {
        if (this._get !== t || !this._ext) {
          const e = this.values(),
            n = (0, p.n)(e, t);
          this._ext = [e[n[0]], e[n[1]]];
          this._get = t;
        }
        return this._ext;
      };
      bs.argmin = function (t) {
        return this.extent(t)[0] || {};
      };
      bs.argmax = function (t) {
        return this.extent(t)[1] || {};
      };
      bs.min = function (t) {
        const e = this.extent(t)[0];
        return e != null ? t(e) : undefined;
      };
      bs.max = function (t) {
        const e = this.extent(t)[1];
        return e != null ? t(e) : undefined;
      };
      bs.quartile = function (t) {
        if (this._get !== t || !this._q) {
          this._q = tr(this.values(), t);
          this._get = t;
        }
        return this._q;
      };
      bs.q1 = function (t) {
        return this.quartile(t)[0];
      };
      bs.q2 = function (t) {
        return this.quartile(t)[1];
      };
      bs.q3 = function (t) {
        return this.quartile(t)[2];
      };
      bs.ci = function (t) {
        if (this._get !== t || !this._ci) {
          this._ci = sr(this.values(), 1e3, 0.05, t);
          this._get = t;
        }
        return this._ci;
      };
      bs.ci0 = function (t) {
        return this.ci(t)[0];
      };
      bs.ci1 = function (t) {
        return this.ci(t)[1];
      };
      function xs(t) {
        zi.call(this, null, t);
        this._adds = [];
        this._mods = [];
        this._alen = 0;
        this._mlen = 0;
        this._drop = true;
        this._cross = false;
        this._dims = [];
        this._dnames = [];
        this._measures = [];
        this._countOnly = false;
        this._counts = null;
        this._prev = null;
        this._inputs = null;
        this._outputs = null;
      }
      xs.Definition = {
        type: "Aggregate",
        metadata: { generates: true, changes: true },
        params: [
          { name: "groupby", type: "field", array: true },
          { name: "ops", type: "enum", array: true, values: us },
          { name: "aggregate_params", type: "number", null: true, array: true },
          { name: "fields", type: "field", null: true, array: true },
          { name: "as", type: "string", null: true, array: true },
          { name: "drop", type: "boolean", default: true },
          { name: "cross", type: "boolean", default: false },
          { name: "key", type: "field" },
        ],
      };
      (0, p.B)(xs, zi, {
        transform(t, e) {
          const n = this,
            i = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            r = t.modified();
          n.stamp = i.stamp;
          if (n.value && (r || e.modified(n._inputs, true))) {
            n._prev = n.value;
            n.value = r ? n.init(t) : Object.create(null);
            e.visit(e.SOURCE, (t) => n.add(t));
          } else {
            n.value = n.value || n.init(t);
            e.visit(e.REM, (t) => n.rem(t));
            e.visit(e.ADD, (t) => n.add(t));
          }
          i.modifies(n._outputs);
          n._drop = t.drop !== false;
          if (t.cross && n._dims.length > 1) {
            n._drop = false;
            n.cross();
          }
          if (e.clean() && n._drop) {
            i.clean(true).runAfter(() => this.clean());
          }
          return n.changes(i);
        },
        cross() {
          const t = this,
            e = t.value,
            n = t._dnames,
            i = n.map(() => ({})),
            r = n.length;
          function s(t) {
            let e, s, a, o;
            for (e in t) {
              a = t[e].tuple;
              for (s = 0; s < r; ++s) {
                i[s][(o = a[n[s]])] = o;
              }
            }
          }
          s(t._prev);
          s(e);
          function a(s, o, u) {
            const l = n[u],
              c = i[u++];
            for (const n in c) {
              const i = s ? s + "|" + n : n;
              o[l] = c[n];
              if (u < r) a(i, o, u);
              else if (!e[i]) t.cell(i, o);
            }
          }
          a("", {}, 0);
        },
        init(t) {
          const e = (this._inputs = []),
            n = (this._outputs = []),
            i = {};
          function r(t) {
            const n = (0, p.YO)((0, p.nS)(t)),
              r = n.length;
            let s = 0,
              a;
            for (; s < r; ++s) {
              if (!i[(a = n[s])]) {
                i[a] = 1;
                e.push(a);
              }
            }
          }
          this._dims = (0, p.YO)(t.groupby);
          this._dnames = this._dims.map((t) => {
            const e = (0, p.N6)(t);
            r(t);
            n.push(e);
            return e;
          });
          this.cellkey = t.key ? t.key : is(this._dims);
          this._countOnly = true;
          this._counts = [];
          this._measures = [];
          const s = t.fields || [null],
            a = t.ops || ["count"],
            o = t.aggregate_params || [null],
            u = t.as || [],
            l = s.length,
            c = {};
          let f, d, h, m, g, y, v;
          if (l !== a.length) {
            (0, p.z3)("Unmatched number of fields and aggregate ops.");
          }
          for (v = 0; v < l; ++v) {
            f = s[v];
            d = a[v];
            h = o[v] || null;
            if (f == null && d !== "count") {
              (0, p.z3)("Null aggregate field specified.");
            }
            g = (0, p.N6)(f);
            y = rs(d, g, u[v]);
            n.push(y);
            if (d === "count") {
              this._counts.push(y);
              continue;
            }
            m = c[g];
            if (!m) {
              r(f);
              m = c[g] = [];
              m.field = f;
              this._measures.push(m);
            }
            if (d !== "count") this._countOnly = false;
            m.push(cs(d, h, y));
          }
          this._measures = this._measures.map((t) => ys(t, t.field));
          return Object.create(null);
        },
        cellkey: is(),
        cell(t, e) {
          let n = this.value[t];
          if (!n) {
            n = this.value[t] = this.newcell(t, e);
            this._adds[this._alen++] = n;
          } else if (n.num === 0 && this._drop && n.stamp < this.stamp) {
            n.stamp = this.stamp;
            this._adds[this._alen++] = n;
          } else if (n.stamp < this.stamp) {
            n.stamp = this.stamp;
            this._mods[this._mlen++] = n;
          }
          return n;
        },
        newcell(t, e) {
          const n = { key: t, num: 0, agg: null, tuple: this.newtuple(e, this._prev && this._prev[t]), stamp: this.stamp, store: false };
          if (!this._countOnly) {
            const t = this._measures,
              e = t.length;
            n.agg = Array(e);
            for (let i = 0; i < e; ++i) {
              n.agg[i] = new t[i](n);
            }
          }
          if (n.store) {
            n.data = new vs();
          }
          return n;
        },
        newtuple(t, e) {
          const n = this._dnames,
            i = this._dims,
            r = i.length,
            s = {};
          for (let a = 0; a < r; ++a) {
            s[n[a]] = i[a](t);
          }
          return e ? wn(e.tuple, s) : bn(s);
        },
        clean() {
          const t = this.value;
          for (const e in t) {
            if (t[e].num === 0) {
              delete t[e];
            }
          }
        },
        add(t) {
          const e = this.cellkey(t),
            n = this.cell(e, t);
          n.num += 1;
          if (this._countOnly) return;
          if (n.store) n.data.add(t);
          const i = n.agg;
          for (let r = 0, s = i.length; r < s; ++r) {
            i[r].add(i[r].get(t), t);
          }
        },
        rem(t) {
          const e = this.cellkey(t),
            n = this.cell(e, t);
          n.num -= 1;
          if (this._countOnly) return;
          if (n.store) n.data.rem(t);
          const i = n.agg;
          for (let r = 0, s = i.length; r < s; ++r) {
            i[r].rem(i[r].get(t), t);
          }
        },
        celltuple(t) {
          const e = t.tuple,
            n = this._counts;
          if (t.store) {
            t.data.values();
          }
          for (let i = 0, r = n.length; i < r; ++i) {
            e[n[i]] = t.num;
          }
          if (!this._countOnly) {
            const n = t.agg;
            for (let t = 0, i = n.length; t < i; ++t) {
              n[t].set(e);
            }
          }
          return e;
        },
        changes(t) {
          const e = this._adds,
            n = this._mods,
            i = this._prev,
            r = this._drop,
            s = t.add,
            a = t.rem,
            o = t.mod;
          let u, l, c, f;
          if (i)
            for (l in i) {
              u = i[l];
              if (!r || u.num) a.push(u.tuple);
            }
          for (c = 0, f = this._alen; c < f; ++c) {
            s.push(this.celltuple(e[c]));
            e[c] = null;
          }
          for (c = 0, f = this._mlen; c < f; ++c) {
            u = n[c];
            (u.num === 0 && r ? a : o).push(this.celltuple(u));
            n[c] = null;
          }
          this._alen = this._mlen = 0;
          this._prev = null;
          return t;
        },
      });
      const _s = 1e-14;
      function ws(t) {
        zi.call(this, null, t);
      }
      ws.Definition = {
        type: "Bin",
        metadata: { modifies: true },
        params: [
          { name: "field", type: "field", required: true },
          { name: "interval", type: "boolean", default: true },
          { name: "anchor", type: "number" },
          { name: "maxbins", type: "number", default: 20 },
          { name: "base", type: "number", default: 10 },
          { name: "divide", type: "number", array: true, default: [5, 2] },
          { name: "extent", type: "number", array: true, length: 2, required: true },
          { name: "span", type: "number" },
          { name: "step", type: "number" },
          { name: "steps", type: "number", array: true },
          { name: "minstep", type: "number", default: 0 },
          { name: "nice", type: "boolean", default: true },
          { name: "name", type: "string" },
          { name: "as", type: "string", array: true, length: 2, default: ["bin0", "bin1"] },
        ],
      };
      (0, p.B)(ws, zi, {
        transform(t, e) {
          const n = t.interval !== false,
            i = this._bins(t),
            r = i.start,
            s = i.step,
            a = t.as || ["bin0", "bin1"],
            o = a[0],
            u = a[1];
          let l;
          if (t.modified()) {
            e = e.reflow(true);
            l = e.SOURCE;
          } else {
            l = e.modified((0, p.nS)(t.field)) ? e.ADD_MOD : e.ADD;
          }
          e.visit(
            l,
            n
              ? (t) => {
                  const e = i(t);
                  t[o] = e;
                  t[u] = e == null ? null : r + s * (1 + (e - r) / s);
                }
              : (t) => (t[o] = i(t))
          );
          return e.modifies(n ? a : o);
        },
        _bins(t) {
          if (this.value && !t.modified()) {
            return this.value;
          }
          const e = t.field,
            n = nr(t),
            i = n.step;
          let r = n.start,
            s = r + Math.ceil((n.stop - r) / i) * i,
            a,
            o;
          if ((a = t.anchor) != null) {
            o = a - (r + i * Math.floor((a - r) / i));
            r += o;
            s += o;
          }
          const u = function (t) {
            let n = (0, p.Ro)(e(t));
            return n == null
              ? null
              : n < r
                ? -Infinity
                : n > s
                  ? +Infinity
                  : ((n = Math.max(r, Math.min(n, s - i))), r + i * Math.floor(_s + (n - r) / i));
          };
          u.start = r;
          u.stop = n.stop;
          u.step = i;
          return (this.value = (0, p.sY)(u, (0, p.nS)(e), t.name || "bin_" + (0, p.N6)(e)));
        },
      });
      function As(t, e, n) {
        const i = t;
        let r = e || [],
          s = n || [],
          a = {},
          o = 0;
        return {
          add: (t) => s.push(t),
          remove: (t) => (a[i(t)] = ++o),
          size: () => r.length,
          data: (t, e) => {
            if (o) {
              r = r.filter((t) => !a[i(t)]);
              a = {};
              o = 0;
            }
            if (e && t) {
              r.sort(t);
            }
            if (s.length) {
              r = t ? (0, p.h1)(t, r, s.sort(t)) : r.concat(s);
              s = [];
            }
            return r;
          },
        };
      }
      function ks(t) {
        zi.call(this, [], t);
      }
      ks.Definition = { type: "Collect", metadata: { source: true }, params: [{ name: "sort", type: "compare" }] };
      (0, p.B)(ks, zi, {
        transform(t, e) {
          const n = e.fork(e.ALL),
            i = As(yn, this.value, n.materialize(n.ADD).add),
            r = t.sort,
            s = e.changed() || (r && (t.modified("sort") || e.modified(r.fields)));
          n.visit(n.REM, i.remove);
          this.modified(s);
          this.value = n.source = i.data(An(r), s);
          if (e.source && e.source.root) {
            this.value.root = e.source.root;
          }
          return n;
        },
      });
      function Es(t) {
        $n.call(this, null, Ms, t);
      }
      (0, p.B)(Es, $n);
      function Ms(t) {
        return this.value && !t.modified() ? this.value : (0, p.UD)(t.fields, t.orders);
      }
      function Ds(t) {
        zi.call(this, null, t);
      }
      Ds.Definition = {
        type: "CountPattern",
        metadata: { generates: true, changes: true },
        params: [
          { name: "field", type: "field", required: true },
          { name: "case", type: "enum", values: ["upper", "lower", "mixed"], default: "mixed" },
          { name: "pattern", type: "string", default: '[\\w"]+' },
          { name: "stopwords", type: "string", default: "" },
          { name: "as", type: "string", array: true, length: 2, default: ["text", "count"] },
        ],
      };
      function Cs(t, e, n) {
        switch (e) {
          case "upper":
            t = t.toUpperCase();
            break;
          case "lower":
            t = t.toLowerCase();
            break;
        }
        return t.match(n);
      }
      (0, p.B)(Ds, zi, {
        transform(t, e) {
          const n = (e) => (n) => {
            var i = Cs(o(n), t.case, s) || [],
              r;
            for (var u = 0, l = i.length; u < l; ++u) {
              if (!a.test((r = i[u]))) e(r);
            }
          };
          const i = this._parameterCheck(t, e),
            r = this._counts,
            s = this._match,
            a = this._stop,
            o = t.field,
            u = t.as || ["text", "count"],
            l = n((t) => (r[t] = 1 + (r[t] || 0))),
            c = n((t) => (r[t] -= 1));
          if (i) {
            e.visit(e.SOURCE, l);
          } else {
            e.visit(e.ADD, l);
            e.visit(e.REM, c);
          }
          return this._finish(e, u);
        },
        _parameterCheck(t, e) {
          let n = false;
          if (t.modified("stopwords") || !this._stop) {
            this._stop = new RegExp("^" + (t.stopwords || "") + "$", "i");
            n = true;
          }
          if (t.modified("pattern") || !this._match) {
            this._match = new RegExp(t.pattern || "[\\w']+", "g");
            n = true;
          }
          if (t.modified("field") || e.modified(t.field.fields)) {
            n = true;
          }
          if (n) this._counts = {};
          return n;
        },
        _finish(t, e) {
          const n = this._counts,
            i = this._tuples || (this._tuples = {}),
            r = e[0],
            s = e[1],
            a = t.fork(t.NO_SOURCE | t.NO_FIELDS);
          let o, u, l;
          for (o in n) {
            u = i[o];
            l = n[o] || 0;
            if (!u && l) {
              i[o] = u = bn({});
              u[r] = o;
              u[s] = l;
              a.add.push(u);
            } else if (l === 0) {
              if (u) a.rem.push(u);
              n[o] = null;
              i[o] = null;
            } else if (u[s] !== l) {
              u[s] = l;
              a.mod.push(u);
            }
          }
          return a.modifies(e);
        },
      });
      function Fs(t) {
        zi.call(this, null, t);
      }
      Fs.Definition = {
        type: "Cross",
        metadata: { generates: true },
        params: [
          { name: "filter", type: "expr" },
          { name: "as", type: "string", array: true, length: 2, default: ["a", "b"] },
        ],
      };
      (0, p.B)(Fs, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE),
            i = t.as || ["a", "b"],
            r = i[0],
            s = i[1],
            a = !this.value || e.changed(e.ADD_REM) || t.modified("as") || t.modified("filter");
          let o = this.value;
          if (a) {
            if (o) n.rem = o;
            o = e.materialize(e.SOURCE).source;
            n.add = this.value = Ss(o, r, s, t.filter || p.vN);
          } else {
            n.mod = o;
          }
          n.source = this.value;
          return n.modifies(i);
        },
      });
      function Ss(t, e, n, i) {
        var r = [],
          s = {},
          a = t.length,
          o = 0,
          u,
          l;
        for (; o < a; ++o) {
          s[e] = l = t[o];
          for (u = 0; u < a; ++u) {
            s[n] = t[u];
            if (i(s)) {
              r.push(bn(s));
              s = {};
              s[e] = l;
            }
          }
        }
        return r;
      }
      const Bs = { kde: br, mixture: Er, normal: vr, lognormal: kr, uniform: Sr };
      const zs = "distributions",
        $s = "function",
        Rs = "field";
      function Os(t, e) {
        const n = t[$s];
        if (!(0, p.mQ)(Bs, n)) {
          (0, p.z3)("Unknown distribution function: " + n);
        }
        const i = Bs[n]();
        for (const r in t) {
          if (r === Rs) {
            i.data((t.from || e()).map(t[r]));
          } else if (r === zs) {
            i[r](t[r].map((t) => Os(t, e)));
          } else if (typeof i[r] === $s) {
            i[r](t[r]);
          }
        }
        return i;
      }
      function Ts(t) {
        zi.call(this, null, t);
      }
      const Ns = [
        {
          key: { function: "normal" },
          params: [
            { name: "mean", type: "number", default: 0 },
            { name: "stdev", type: "number", default: 1 },
          ],
        },
        {
          key: { function: "lognormal" },
          params: [
            { name: "mean", type: "number", default: 0 },
            { name: "stdev", type: "number", default: 1 },
          ],
        },
        {
          key: { function: "uniform" },
          params: [
            { name: "min", type: "number", default: 0 },
            { name: "max", type: "number", default: 1 },
          ],
        },
        {
          key: { function: "kde" },
          params: [
            { name: "field", type: "field", required: true },
            { name: "from", type: "data" },
            { name: "bandwidth", type: "number", default: 0 },
          ],
        },
      ];
      const Ls = {
        key: { function: "mixture" },
        params: [
          { name: "distributions", type: "param", array: true, params: Ns },
          { name: "weights", type: "number", array: true },
        ],
      };
      Ts.Definition = {
        type: "Density",
        metadata: { generates: true },
        params: [
          { name: "extent", type: "number", array: true, length: 2 },
          { name: "steps", type: "number" },
          { name: "minsteps", type: "number", default: 25 },
          { name: "maxsteps", type: "number", default: 200 },
          { name: "method", type: "string", default: "pdf", values: ["pdf", "cdf"] },
          { name: "distribution", type: "param", params: Ns.concat(Ls) },
          { name: "as", type: "string", array: true, default: ["value", "density"] },
        ],
      };
      (0, p.B)(Ts, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE | e.NO_FIELDS);
          if (!this.value || e.changed() || t.modified()) {
            const i = Os(t.distribution, Ps(e)),
              r = t.steps || t.minsteps || 25,
              s = t.steps || t.maxsteps || 200;
            let a = t.method || "pdf";
            if (a !== "pdf" && a !== "cdf") {
              (0, p.z3)("Invalid density method: " + a);
            }
            if (!t.extent && !i.data) {
              (0, p.z3)("Missing density extent parameter.");
            }
            a = i[a];
            const o = t.as || ["value", "density"],
              u = t.extent || (0, p.Xx)(i.data()),
              l = Kr(a, u, r, s).map((t) => {
                const e = {};
                e[o[0]] = t[0];
                e[o[1]] = t[1];
                return bn(e);
              });
            if (this.value) n.rem = this.value;
            this.value = n.add = n.source = l;
          }
          return n;
        },
      });
      function Ps(t) {
        return () => t.materialize(t.SOURCE).source;
      }
      function qs(t, e) {
        if (!t) return null;
        return t.map((t, n) => e[n] || (0, p.N6)(t));
      }
      function Is(t, e, n) {
        const i = [],
          r = (t) => t(u);
        let s, a, o, u, l, c;
        if (e == null) {
          i.push(t.map(n));
        } else {
          for (s = {}, a = 0, o = t.length; a < o; ++a) {
            u = t[a];
            l = e.map(r);
            c = s[l];
            if (!c) {
              s[l] = c = [];
              c.dims = l;
              i.push(c);
            }
            c.push(n(u));
          }
        }
        return i;
      }
      const Us = "bin";
      function js(t) {
        zi.call(this, null, t);
      }
      js.Definition = {
        type: "DotBin",
        metadata: { modifies: true },
        params: [
          { name: "field", type: "field", required: true },
          { name: "groupby", type: "field", array: true },
          { name: "step", type: "number" },
          { name: "smooth", type: "boolean", default: false },
          { name: "as", type: "string", default: Us },
        ],
      };
      const Gs = (t, e) => (0, p.Ln)((0, p.Xx)(t, e)) / 30;
      (0, p.B)(js, zi, {
        transform(t, e) {
          if (this.value && !(t.modified() || e.changed())) {
            return e;
          }
          const n = e.materialize(e.SOURCE).source,
            i = Is(e.source, t.groupby, p.D_),
            r = t.smooth || false,
            s = t.field,
            a = t.step || Gs(n, s),
            o = An((t, e) => s(t) - s(e)),
            u = t.as || Us,
            l = i.length;
          let c = Infinity,
            f = -Infinity,
            d = 0,
            h;
          for (; d < l; ++d) {
            const t = i[d].sort(o);
            h = -1;
            for (const e of ar(t, a, r, s)) {
              if (e < c) c = e;
              if (e > f) f = e;
              t[++h][u] = e;
            }
          }
          this.value = { start: c, stop: f, step: a };
          return e.reflow(true).modifies(u);
        },
      });
      function Ys(t) {
        $n.call(this, null, Ws, t);
        this.modified(true);
      }
      (0, p.B)(Ys, $n);
      function Ws(t) {
        const e = t.expr;
        return this.value && !t.modified("expr") ? this.value : (0, p.sY)((n) => e(n, t), (0, p.nS)(e), (0, p.N6)(e));
      }
      function Xs(t) {
        zi.call(this, [undefined, undefined], t);
      }
      Xs.Definition = { type: "Extent", metadata: {}, params: [{ name: "field", type: "field", required: true }] };
      (0, p.B)(Xs, zi, {
        transform(t, e) {
          const n = this.value,
            i = t.field,
            r = e.changed() || e.modified(i.fields) || t.modified("field");
          let s = n[0],
            a = n[1];
          if (r || s == null) {
            s = +Infinity;
            a = -Infinity;
          }
          e.visit(r ? e.SOURCE : e.ADD, (t) => {
            const e = (0, p.Ro)(i(t));
            if (e != null) {
              if (e < s) s = e;
              if (e > a) a = e;
            }
          });
          if (!Number.isFinite(s) || !Number.isFinite(a)) {
            let t = (0, p.N6)(i);
            if (t) t = ` for field "${t}"`;
            e.dataflow.warn(`Infinite extent${t}: [${s}, ${a}]`);
            s = a = undefined;
          }
          this.value = [s, a];
        },
      });
      function Hs(t, e) {
        $n.call(this, t);
        this.parent = e;
        this.count = 0;
      }
      (0, p.B)(Hs, $n, {
        connect(t) {
          this.detachSubflow = t.detachSubflow;
          this.targets().add(t);
          return (t.source = this);
        },
        add(t) {
          this.count += 1;
          this.value.add.push(t);
        },
        rem(t) {
          this.count -= 1;
          this.value.rem.push(t);
        },
        mod(t) {
          this.value.mod.push(t);
        },
        init(t) {
          this.value.init(t, t.NO_SOURCE);
        },
        evaluate() {
          return this.value;
        },
      });
      function Vs(t) {
        zi.call(this, {}, t);
        this._keys = (0, p.nG)();
        const e = (this._targets = []);
        e.active = 0;
        e.forEach = (t) => {
          for (let n = 0, i = e.active; n < i; ++n) {
            t(e[n], n, e);
          }
        };
      }
      (0, p.B)(Vs, zi, {
        activate(t) {
          this._targets[this._targets.active++] = t;
        },
        subflow(t, e, n, i) {
          const r = this.value;
          let s = (0, p.mQ)(r, t) && r[t],
            a,
            o;
          if (!s) {
            o = i || ((o = this._group[t]) && o.tuple);
            a = n.dataflow;
            s = new Hs(n.fork(n.NO_SOURCE), this);
            a.add(s).connect(e(a, t, o));
            r[t] = s;
            this.activate(s);
          } else if (s.value.stamp < n.stamp) {
            s.init(n);
            this.activate(s);
          }
          return s;
        },
        clean() {
          const t = this.value;
          let e = 0;
          for (const n in t) {
            if (t[n].count === 0) {
              const i = t[n].detachSubflow;
              if (i) i();
              delete t[n];
              ++e;
            }
          }
          if (e) {
            const t = this._targets.filter((t) => t && t.count > 0);
            this.initTargets(t);
          }
        },
        initTargets(t) {
          const e = this._targets,
            n = e.length,
            i = t ? t.length : 0;
          let r = 0;
          for (; r < i; ++r) {
            e[r] = t[r];
          }
          for (; r < n && e[r] != null; ++r) {
            e[r] = null;
          }
          e.active = i;
        },
        transform(t, e) {
          const n = e.dataflow,
            i = t.key,
            r = t.subflow,
            s = this._keys,
            a = t.modified("key"),
            o = (t) => this.subflow(t, r, e);
          this._group = t.group || {};
          this.initTargets();
          e.visit(e.REM, (t) => {
            const e = yn(t),
              n = s.get(e);
            if (n !== undefined) {
              s.delete(e);
              o(n).rem(t);
            }
          });
          e.visit(e.ADD, (t) => {
            const e = i(t);
            s.set(yn(t), e);
            o(e).add(t);
          });
          if (a || e.modified(i.fields)) {
            e.visit(e.MOD, (t) => {
              const e = yn(t),
                n = s.get(e),
                r = i(t);
              if (n === r) {
                o(r).mod(t);
              } else {
                s.set(e, r);
                o(n).rem(t);
                o(r).add(t);
              }
            });
          } else if (e.changed(e.MOD)) {
            e.visit(e.MOD, (t) => {
              o(s.get(yn(t))).mod(t);
            });
          }
          if (a) {
            e.visit(e.REFLOW, (t) => {
              const e = yn(t),
                n = s.get(e),
                r = i(t);
              if (n !== r) {
                s.set(e, r);
                o(n).rem(t);
                o(r).add(t);
              }
            });
          }
          if (e.clean()) {
            n.runAfter(() => {
              this.clean();
              s.clean();
            });
          } else if (s.empty > n.cleanThreshold) {
            n.runAfter(s.clean);
          }
          return e;
        },
      });
      function Qs(t) {
        $n.call(this, null, Ks, t);
      }
      (0, p.B)(Qs, $n);
      function Ks(t) {
        return this.value && !t.modified() ? this.value : (0, p.cy)(t.name) ? (0, p.YO)(t.name).map((t) => (0, p.ZZ)(t)) : (0, p.ZZ)(t.name, t.as);
      }
      function Zs(t) {
        zi.call(this, (0, p.nG)(), t);
      }
      Zs.Definition = { type: "Filter", metadata: { changes: true }, params: [{ name: "expr", type: "expr", required: true }] };
      (0, p.B)(Zs, zi, {
        transform(t, e) {
          const n = e.dataflow,
            i = this.value,
            r = e.fork(),
            s = r.add,
            a = r.rem,
            o = r.mod,
            u = t.expr;
          let l = true;
          e.visit(e.REM, (t) => {
            const e = yn(t);
            if (!i.has(e)) a.push(t);
            else i.delete(e);
          });
          e.visit(e.ADD, (e) => {
            if (u(e, t)) s.push(e);
            else i.set(yn(e), 1);
          });
          function c(e) {
            const n = yn(e),
              r = u(e, t),
              c = i.get(n);
            if (r && c) {
              i.delete(n);
              s.push(e);
            } else if (!r && !c) {
              i.set(n, 1);
              a.push(e);
            } else if (l && r && !c) {
              o.push(e);
            }
          }
          e.visit(e.MOD, c);
          if (t.modified()) {
            l = false;
            e.visit(e.REFLOW, c);
          }
          if (i.empty > n.cleanThreshold) n.runAfter(i.clean);
          return r;
        },
      });
      function Js(t) {
        zi.call(this, [], t);
      }
      Js.Definition = {
        type: "Flatten",
        metadata: { generates: true },
        params: [
          { name: "fields", type: "field", array: true, required: true },
          { name: "index", type: "string" },
          { name: "as", type: "string", array: true },
        ],
      };
      (0, p.B)(Js, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE),
            i = t.fields,
            r = qs(i, t.as || []),
            s = t.index || null,
            a = r.length;
          n.rem = this.value;
          e.visit(e.SOURCE, (t) => {
            const e = i.map((e) => e(t)),
              o = e.reduce((t, e) => Math.max(t, e.length), 0);
            let u = 0,
              l,
              c,
              f;
            for (; u < o; ++u) {
              c = xn(t);
              for (l = 0; l < a; ++l) {
                c[r[l]] = (f = e[l][u]) == null ? null : f;
              }
              if (s) {
                c[s] = u;
              }
              n.add.push(c);
            }
          });
          this.value = n.source = n.add;
          if (s) n.modifies(s);
          return n.modifies(r);
        },
      });
      function ta(t) {
        zi.call(this, [], t);
      }
      ta.Definition = {
        type: "Fold",
        metadata: { generates: true },
        params: [
          { name: "fields", type: "field", array: true, required: true },
          { name: "as", type: "string", array: true, length: 2, default: ["key", "value"] },
        ],
      };
      (0, p.B)(ta, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE),
            i = t.fields,
            r = i.map(p.N6),
            s = t.as || ["key", "value"],
            a = s[0],
            o = s[1],
            u = i.length;
          n.rem = this.value;
          e.visit(e.SOURCE, (t) => {
            for (let e = 0, s; e < u; ++e) {
              s = xn(t);
              s[a] = r[e];
              s[o] = i[e](t);
              n.add.push(s);
            }
          });
          this.value = n.source = n.add;
          return n.modifies(s);
        },
      });
      function ea(t) {
        zi.call(this, null, t);
      }
      ea.Definition = {
        type: "Formula",
        metadata: { modifies: true },
        params: [
          { name: "expr", type: "expr", required: true },
          { name: "as", type: "string", required: true },
          { name: "initonly", type: "boolean" },
        ],
      };
      (0, p.B)(ea, zi, {
        transform(t, e) {
          const n = t.expr,
            i = t.as,
            r = t.modified(),
            s = t.initonly ? e.ADD : r ? e.SOURCE : e.modified(n.fields) || e.modified(i) ? e.ADD_MOD : e.ADD;
          if (r) {
            e = e.materialize().reflow(true);
          }
          if (!t.initonly) {
            e.modifies(i);
          }
          return e.visit(s, (e) => (e[i] = n(e, t)));
        },
      });
      function na(t) {
        zi.call(this, [], t);
      }
      (0, p.B)(na, zi, {
        transform(t, e) {
          const n = e.fork(e.ALL),
            i = t.generator;
          let r = this.value,
            s = t.size - r.length,
            a,
            o,
            u;
          if (s > 0) {
            for (a = []; --s >= 0; ) {
              a.push((u = bn(i(t))));
              r.push(u);
            }
            n.add = n.add.length ? n.materialize(n.ADD).add.concat(a) : a;
          } else {
            o = r.slice(0, -s);
            n.rem = n.rem.length ? n.materialize(n.REM).rem.concat(o) : o;
            r = r.slice(-s);
          }
          n.source = this.value = r;
          return n;
        },
      });
      const ia = { value: "value", median: Qi, mean: ts, min: Li.A, max: Ni.A };
      const ra = [];
      function sa(t) {
        zi.call(this, [], t);
      }
      sa.Definition = {
        type: "Impute",
        metadata: { changes: true },
        params: [
          { name: "field", type: "field", required: true },
          { name: "key", type: "field", required: true },
          { name: "keyvals", array: true },
          { name: "groupby", type: "field", array: true },
          { name: "method", type: "enum", default: "value", values: ["value", "mean", "median", "max", "min"] },
          { name: "value", default: 0 },
        ],
      };
      function aa(t) {
        var e = t.method || ia.value,
          n;
        if (ia[e] == null) {
          (0, p.z3)("Unrecognized imputation method: " + e);
        } else if (e === ia.value) {
          n = t.value !== undefined ? t.value : 0;
          return () => n;
        } else {
          return ia[e];
        }
      }
      function oa(t) {
        const e = t.field;
        return (t) => (t ? e(t) : NaN);
      }
      (0, p.B)(sa, zi, {
        transform(t, e) {
          var n = e.fork(e.ALL),
            i = aa(t),
            r = oa(t),
            s = (0, p.N6)(t.field),
            a = (0, p.N6)(t.key),
            o = (t.groupby || []).map(p.N6),
            u = ua(e.source, t.groupby, t.key, t.keyvals),
            l = [],
            c = this.value,
            f = u.domain.length,
            d,
            h,
            m,
            g,
            y,
            v,
            b,
            x,
            _,
            w;
          for (y = 0, x = u.length; y < x; ++y) {
            d = u[y];
            m = d.values;
            h = NaN;
            for (b = 0; b < f; ++b) {
              if (d[b] != null) continue;
              g = u.domain[b];
              w = { _impute: true };
              for (v = 0, _ = m.length; v < _; ++v) w[o[v]] = m[v];
              w[a] = g;
              w[s] = Number.isNaN(h) ? (h = i(d, r)) : h;
              l.push(bn(w));
            }
          }
          if (l.length) n.add = n.materialize(n.ADD).add.concat(l);
          if (c.length) n.rem = n.materialize(n.REM).rem.concat(c);
          this.value = l;
          return n;
        },
      });
      function ua(t, e, n, i) {
        var r = (t) => t(g),
          s = [],
          a = i ? i.slice() : [],
          o = {},
          u = {},
          l,
          c,
          f,
          d,
          h,
          p,
          m,
          g;
        a.forEach((t, e) => (o[t] = e + 1));
        for (d = 0, m = t.length; d < m; ++d) {
          g = t[d];
          p = n(g);
          h = o[p] || (o[p] = a.push(p));
          c = (l = e ? e.map(r) : ra) + "";
          if (!(f = u[c])) {
            f = u[c] = [];
            s.push(f);
            f.values = l;
          }
          f[h - 1] = g;
        }
        s.domain = a;
        return s;
      }
      function la(t) {
        xs.call(this, t);
      }
      la.Definition = {
        type: "JoinAggregate",
        metadata: { modifies: true },
        params: [
          { name: "groupby", type: "field", array: true },
          { name: "fields", type: "field", null: true, array: true },
          { name: "ops", type: "enum", array: true, values: us },
          { name: "as", type: "string", null: true, array: true },
          { name: "key", type: "field" },
        ],
      };
      (0, p.B)(la, xs, {
        transform(t, e) {
          const n = this,
            i = t.modified();
          let r;
          if (n.value && (i || e.modified(n._inputs, true))) {
            r = n.value = i ? n.init(t) : {};
            e.visit(e.SOURCE, (t) => n.add(t));
          } else {
            r = n.value = n.value || this.init(t);
            e.visit(e.REM, (t) => n.rem(t));
            e.visit(e.ADD, (t) => n.add(t));
          }
          n.changes();
          e.visit(e.SOURCE, (t) => {
            (0, p.X$)(t, r[n.cellkey(t)].tuple);
          });
          return e.reflow(i).modifies(this._outputs);
        },
        changes() {
          const t = this._adds,
            e = this._mods;
          let n, i;
          for (n = 0, i = this._alen; n < i; ++n) {
            this.celltuple(t[n]);
            t[n] = null;
          }
          for (n = 0, i = this._mlen; n < i; ++n) {
            this.celltuple(e[n]);
            e[n] = null;
          }
          this._alen = this._mlen = 0;
        },
      });
      function ca(t) {
        zi.call(this, null, t);
      }
      ca.Definition = {
        type: "KDE",
        metadata: { generates: true },
        params: [
          { name: "groupby", type: "field", array: true },
          { name: "field", type: "field", required: true },
          { name: "cumulative", type: "boolean", default: false },
          { name: "counts", type: "boolean", default: false },
          { name: "bandwidth", type: "number", default: 0 },
          { name: "extent", type: "number", array: true, length: 2 },
          { name: "resolve", type: "enum", values: ["shared", "independent"], default: "independent" },
          { name: "steps", type: "number" },
          { name: "minsteps", type: "number", default: 25 },
          { name: "maxsteps", type: "number", default: 200 },
          { name: "as", type: "string", array: true, default: ["value", "density"] },
        ],
      };
      (0, p.B)(ca, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE | e.NO_FIELDS);
          if (!this.value || e.changed() || t.modified()) {
            const i = e.materialize(e.SOURCE).source,
              r = Is(i, t.groupby, t.field),
              s = (t.groupby || []).map(p.N6),
              a = t.bandwidth,
              o = t.cumulative ? "cdf" : "pdf",
              u = t.as || ["value", "density"],
              l = [];
            let c = t.extent,
              f = t.steps || t.minsteps || 25,
              d = t.steps || t.maxsteps || 200;
            if (o !== "pdf" && o !== "cdf") {
              (0, p.z3)("Invalid density method: " + o);
            }
            if (t.resolve === "shared") {
              if (!c) c = (0, p.Xx)(i, t.field);
              f = d = t.steps || d;
            }
            r.forEach((e) => {
              const n = br(e, a)[o],
                i = t.counts ? e.length : 1,
                r = c || (0, p.Xx)(e);
              Kr(n, r, f, d).forEach((t) => {
                const n = {};
                for (let i = 0; i < s.length; ++i) {
                  n[s[i]] = e.dims[i];
                }
                n[u[0]] = t[0];
                n[u[1]] = t[1] * i;
                l.push(bn(n));
              });
            });
            if (this.value) n.rem = this.value;
            this.value = n.add = n.source = l;
          }
          return n;
        },
      });
      function fa(t) {
        $n.call(this, null, da, t);
      }
      (0, p.B)(fa, $n);
      function da(t) {
        return this.value && !t.modified() ? this.value : (0, p.Eb)(t.fields, t.flat);
      }
      function ha(t) {
        zi.call(this, [], t);
        this._pending = null;
      }
      (0, p.B)(ha, zi, {
        transform(t, e) {
          const n = e.dataflow;
          if (this._pending) {
            return ma(this, e, this._pending);
          }
          if (pa(t)) return e.StopPropagation;
          if (t.values) {
            return ma(this, e, n.parse(t.values, t.format));
          } else if (t.async) {
            const e = n.request(t.url, t.format).then((t) => {
              this._pending = (0, p.YO)(t.data);
              return (t) => t.touch(this);
            });
            return { async: e };
          } else {
            return n.request(t.url, t.format).then((t) => ma(this, e, (0, p.YO)(t.data)));
          }
        },
      });
      function pa(t) {
        return t.modified("async") && !(t.modified("values") || t.modified("url") || t.modified("format"));
      }
      function ma(t, e, n) {
        n.forEach(bn);
        const i = e.fork(e.NO_FIELDS & e.NO_SOURCE);
        i.rem = t.value;
        t.value = i.source = i.add = n;
        t._pending = null;
        if (i.rem.length) i.clean(true);
        return i;
      }
      function ga(t) {
        zi.call(this, {}, t);
      }
      ga.Definition = {
        type: "Lookup",
        metadata: { modifies: true },
        params: [
          {
            name: "index",
            type: "index",
            params: [
              { name: "from", type: "data", required: true },
              { name: "key", type: "field", required: true },
            ],
          },
          { name: "values", type: "field", array: true },
          { name: "fields", type: "field", array: true, required: true },
          { name: "as", type: "string", array: true },
          { name: "default", default: null },
        ],
      };
      (0, p.B)(ga, zi, {
        transform(t, e) {
          const n = t.fields,
            i = t.index,
            r = t.values,
            s = t.default == null ? null : t.default,
            a = t.modified(),
            o = n.length;
          let u = a ? e.SOURCE : e.ADD,
            l = e,
            c = t.as,
            f,
            d,
            h;
          if (r) {
            d = r.length;
            if (o > 1 && !c) {
              (0, p.z3)('Multi-field lookup requires explicit "as" parameter.');
            }
            if (c && c.length !== o * d) {
              (0, p.z3)('The "as" parameter has too few output field names.');
            }
            c = c || r.map(p.N6);
            f = function (t) {
              for (var e = 0, a = 0, u, l; e < o; ++e) {
                l = i.get(n[e](t));
                if (l == null) for (u = 0; u < d; ++u, ++a) t[c[a]] = s;
                else for (u = 0; u < d; ++u, ++a) t[c[a]] = r[u](l);
              }
            };
          } else {
            if (!c) {
              (0, p.z3)("Missing output field names.");
            }
            f = function (t) {
              for (var e = 0, r; e < o; ++e) {
                r = i.get(n[e](t));
                t[c[e]] = r == null ? s : r;
              }
            };
          }
          if (a) {
            l = e.reflow(true);
          } else {
            h = n.some((t) => e.modified(t.fields));
            u |= h ? e.MOD : 0;
          }
          e.visit(u, f);
          return l.modifies(c);
        },
      });
      function ya(t) {
        $n.call(this, null, va, t);
      }
      (0, p.B)(ya, $n);
      function va(t) {
        if (this.value && !t.modified()) {
          return this.value;
        }
        const e = t.extents,
          n = e.length;
        let i = +Infinity,
          r = -Infinity,
          s,
          a;
        for (s = 0; s < n; ++s) {
          a = e[s];
          if (a[0] < i) i = a[0];
          if (a[1] > r) r = a[1];
        }
        return [i, r];
      }
      function ba(t) {
        $n.call(this, null, xa, t);
      }
      (0, p.B)(ba, $n);
      function xa(t) {
        return this.value && !t.modified() ? this.value : t.values.reduce((t, e) => t.concat(e), []);
      }
      function _a(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(_a, zi, {
        transform(t, e) {
          this.modified(t.modified());
          this.value = t;
          return e.fork(e.NO_SOURCE | e.NO_FIELDS);
        },
      });
      function wa(t) {
        xs.call(this, t);
      }
      wa.Definition = {
        type: "Pivot",
        metadata: { generates: true, changes: true },
        params: [
          { name: "groupby", type: "field", array: true },
          { name: "field", type: "field", required: true },
          { name: "value", type: "field", required: true },
          { name: "op", type: "enum", values: us, default: "sum" },
          { name: "limit", type: "number", default: 0 },
          { name: "key", type: "field" },
        ],
      };
      (0, p.B)(wa, xs, {
        _transform: xs.prototype.transform,
        transform(t, e) {
          return this._transform(Aa(t, e), e);
        },
      });
      function Aa(t, e) {
        const n = t.field,
          i = t.value,
          r = (t.op === "count" ? "__count__" : t.op) || "sum",
          s = (0, p.nS)(n).concat((0, p.nS)(i)),
          a = Ea(n, t.limit || 0, e);
        if (e.changed()) t.set("__pivot__", null, null, true);
        return {
          key: t.key,
          groupby: t.groupby,
          ops: a.map(() => r),
          fields: a.map((t) => ka(t, n, i, s)),
          as: a.map((t) => t + ""),
          modified: t.modified.bind(t),
        };
      }
      function ka(t, e, n, i) {
        return (0, p.sY)((i) => (e(i) === t ? n(i) : NaN), i, t + "");
      }
      function Ea(t, e, n) {
        const i = {},
          r = [];
        n.visit(n.SOURCE, (e) => {
          const n = t(e);
          if (!i[n]) {
            i[n] = 1;
            r.push(n);
          }
        });
        r.sort(p.V_);
        return e ? r.slice(0, e) : r;
      }
      function Ma(t) {
        Vs.call(this, t);
      }
      (0, p.B)(Ma, Vs, {
        transform(t, e) {
          const n = t.subflow,
            i = t.field,
            r = (t) => this.subflow(yn(t), n, e, t);
          if (t.modified("field") || (i && e.modified((0, p.nS)(i)))) {
            (0, p.z3)("PreFacet does not support field modification.");
          }
          this.initTargets();
          if (i) {
            e.visit(e.MOD, (t) => {
              const e = r(t);
              i(t).forEach((t) => e.mod(t));
            });
            e.visit(e.ADD, (t) => {
              const e = r(t);
              i(t).forEach((t) => e.add(bn(t)));
            });
            e.visit(e.REM, (t) => {
              const e = r(t);
              i(t).forEach((t) => e.rem(t));
            });
          } else {
            e.visit(e.MOD, (t) => r(t).mod(t));
            e.visit(e.ADD, (t) => r(t).add(t));
            e.visit(e.REM, (t) => r(t).rem(t));
          }
          if (e.clean()) {
            e.runAfter(() => this.clean());
          }
          return e;
        },
      });
      function Da(t) {
        zi.call(this, null, t);
      }
      Da.Definition = {
        type: "Project",
        metadata: { generates: true, changes: true },
        params: [
          { name: "fields", type: "field", array: true },
          { name: "as", type: "string", null: true, array: true },
        ],
      };
      (0, p.B)(Da, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE),
            i = t.fields,
            r = qs(t.fields, t.as || []),
            s = i ? (t, e) => Ca(t, e, i, r) : _n;
          let a;
          if (this.value) {
            a = this.value;
          } else {
            e = e.addAll();
            a = this.value = {};
          }
          e.visit(e.REM, (t) => {
            const e = yn(t);
            n.rem.push(a[e]);
            a[e] = null;
          });
          e.visit(e.ADD, (t) => {
            const e = s(t, bn({}));
            a[yn(t)] = e;
            n.add.push(e);
          });
          e.visit(e.MOD, (t) => {
            n.mod.push(s(t, a[yn(t)]));
          });
          return n;
        },
      });
      function Ca(t, e, n, i) {
        for (let r = 0, s = n.length; r < s; ++r) {
          e[i[r]] = n[r](t);
        }
        return e;
      }
      function Fa(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(Fa, zi, {
        transform(t, e) {
          this.value = t.value;
          return t.modified("value") ? e.fork(e.NO_SOURCE | e.NO_FIELDS) : e.StopPropagation;
        },
      });
      function Sa(t) {
        zi.call(this, null, t);
      }
      Sa.Definition = {
        type: "Quantile",
        metadata: { generates: true, changes: true },
        params: [
          { name: "groupby", type: "field", array: true },
          { name: "field", type: "field", required: true },
          { name: "probs", type: "number", array: true },
          { name: "step", type: "number", default: 0.01 },
          { name: "as", type: "string", array: true, default: ["prob", "value"] },
        ],
      };
      const Ba = 1e-14;
      (0, p.B)(Sa, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            i = t.as || ["prob", "value"];
          if (this.value && !t.modified() && !e.changed()) {
            n.source = this.value;
            return n;
          }
          const r = e.materialize(e.SOURCE).source,
            s = Is(r, t.groupby, t.field),
            a = (t.groupby || []).map(p.N6),
            o = [],
            u = t.step || 0.01,
            l = t.probs || (0, es.A)(u / 2, 1 - Ba, u),
            c = l.length;
          s.forEach((t) => {
            const e = Ji(t, l);
            for (let n = 0; n < c; ++n) {
              const r = {};
              for (let e = 0; e < a.length; ++e) {
                r[a[e]] = t.dims[e];
              }
              r[i[0]] = l[n];
              r[i[1]] = e[n];
              o.push(bn(r));
            }
          });
          if (this.value) n.rem = this.value;
          this.value = n.add = n.source = o;
          return n;
        },
      });
      function za(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(za, zi, {
        transform(t, e) {
          let n, i;
          if (this.value) {
            i = this.value;
          } else {
            n = e = e.addAll();
            i = this.value = {};
          }
          if (t.derive) {
            n = e.fork(e.NO_SOURCE);
            e.visit(e.REM, (t) => {
              const e = yn(t);
              n.rem.push(i[e]);
              i[e] = null;
            });
            e.visit(e.ADD, (t) => {
              const e = xn(t);
              i[yn(t)] = e;
              n.add.push(e);
            });
            e.visit(e.MOD, (t) => {
              const e = i[yn(t)];
              for (const i in t) {
                e[i] = t[i];
                n.modifies(i);
              }
              n.mod.push(e);
            });
          }
          return n;
        },
      });
      function $a(t) {
        zi.call(this, [], t);
        this.count = 0;
      }
      $a.Definition = { type: "Sample", metadata: {}, params: [{ name: "size", type: "number", default: 1e3 }] };
      (0, p.B)($a, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE),
            i = t.modified("size"),
            r = t.size,
            s = this.value.reduce((t, e) => ((t[yn(e)] = 1), t), {});
          let a = this.value,
            o = this.count,
            u = 0;
          function l(t) {
            let e, i;
            if (a.length < r) {
              a.push(t);
            } else {
              i = ~~((o + 1) * ir());
              if (i < a.length && i >= u) {
                e = a[i];
                if (s[yn(e)]) n.rem.push(e);
                a[i] = t;
              }
            }
            ++o;
          }
          if (e.rem.length) {
            e.visit(e.REM, (t) => {
              const e = yn(t);
              if (s[e]) {
                s[e] = -1;
                n.rem.push(t);
              }
              --o;
            });
            a = a.filter((t) => s[yn(t)] !== -1);
          }
          if ((e.rem.length || i) && a.length < r && e.source) {
            u = o = a.length;
            e.visit(e.SOURCE, (t) => {
              if (!s[yn(t)]) l(t);
            });
            u = -1;
          }
          if (i && a.length > r) {
            const t = a.length - r;
            for (let e = 0; e < t; ++e) {
              s[yn(a[e])] = -1;
              n.rem.push(a[e]);
            }
            a = a.slice(t);
          }
          if (e.mod.length) {
            e.visit(e.MOD, (t) => {
              if (s[yn(t)]) n.mod.push(t);
            });
          }
          if (e.add.length) {
            e.visit(e.ADD, l);
          }
          if (e.add.length || u < 0) {
            n.add = a.filter((t) => !s[yn(t)]);
          }
          this.count = o;
          this.value = n.source = a;
          return n;
        },
      });
      function Ra(t) {
        zi.call(this, null, t);
      }
      Ra.Definition = {
        type: "Sequence",
        metadata: { generates: true, changes: true },
        params: [
          { name: "start", type: "number", required: true },
          { name: "stop", type: "number", required: true },
          { name: "step", type: "number", default: 1 },
          { name: "as", type: "string", default: "data" },
        ],
      };
      (0, p.B)(Ra, zi, {
        transform(t, e) {
          if (this.value && !t.modified()) return;
          const n = e.materialize().fork(e.MOD),
            i = t.as || "data";
          n.rem = this.value ? e.rem.concat(this.value) : e.rem;
          this.value = (0, es.A)(t.start, t.stop, t.step || 1).map((t) => {
            const e = {};
            e[i] = t;
            return bn(e);
          });
          n.add = e.add.concat(this.value);
          return n;
        },
      });
      function Oa(t) {
        zi.call(this, null, t);
        this.modified(true);
      }
      (0, p.B)(Oa, zi, {
        transform(t, e) {
          this.value = e.source;
          return e.changed() ? e.fork(e.NO_SOURCE | e.NO_FIELDS) : e.StopPropagation;
        },
      });
      function Ta(t) {
        zi.call(this, null, t);
      }
      const Na = ["unit0", "unit1"];
      Ta.Definition = {
        type: "TimeUnit",
        metadata: { modifies: true },
        params: [
          { name: "field", type: "field", required: true },
          { name: "interval", type: "boolean", default: true },
          { name: "units", type: "enum", values: ct, array: true },
          { name: "step", type: "number", default: 1 },
          { name: "maxbins", type: "number", default: 40 },
          { name: "extent", type: "date", array: true },
          { name: "timezone", type: "enum", default: "local", values: ["local", "utc"] },
          { name: "as", type: "string", array: true, length: 2, default: Na },
        ],
      };
      (0, p.B)(Ta, zi, {
        transform(t, e) {
          const n = t.field,
            i = t.interval !== false,
            r = t.timezone === "utc",
            s = this._floor(t, e),
            a = (r ? It : qt)(s.unit).offset,
            o = t.as || Na,
            u = o[0],
            l = o[1],
            c = s.step;
          let f = s.start || Infinity,
            d = s.stop || -Infinity,
            h = e.ADD;
          if (t.modified() || e.changed(e.REM) || e.modified((0, p.nS)(n))) {
            e = e.reflow(true);
            h = e.SOURCE;
            f = Infinity;
            d = -Infinity;
          }
          e.visit(h, (t) => {
            const e = n(t);
            let r, o;
            if (e == null) {
              t[u] = null;
              if (i) t[l] = null;
            } else {
              t[u] = r = o = s(e);
              if (i) t[l] = o = a(r, c);
              if (r < f) f = r;
              if (o > d) d = o;
            }
          });
          s.start = f;
          s.stop = d;
          return e.modifies(i ? o : u);
        },
        _floor(t, e) {
          const n = t.timezone === "utc";
          const { units: i, step: r } = t.units
            ? { units: t.units, step: t.step || 1 }
            : ce({ extent: t.extent || (0, p.Xx)(e.materialize(e.SOURCE).source, t.field), maxbins: t.maxbins });
          const s = dt(i),
            a = this.value || {},
            o = (n ? Nt : Rt)(s, r);
          o.unit = (0, p.se)(s);
          o.units = s;
          o.step = r;
          o.start = a.start;
          o.stop = a.stop;
          return (this.value = o);
        },
      });
      function La(t) {
        zi.call(this, (0, p.nG)(), t);
      }
      (0, p.B)(La, zi, {
        transform(t, e) {
          const n = e.dataflow,
            i = t.field,
            r = this.value,
            s = (t) => r.set(i(t), t);
          let a = true;
          if (t.modified("field") || e.modified(i.fields)) {
            r.clear();
            e.visit(e.SOURCE, s);
          } else if (e.changed()) {
            e.visit(e.REM, (t) => r.delete(i(t)));
            e.visit(e.ADD, s);
          } else {
            a = false;
          }
          this.modified(a);
          if (r.empty > n.cleanThreshold) n.runAfter(r.clean);
          return e.fork();
        },
      });
      function Pa(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(Pa, zi, {
        transform(t, e) {
          const n = !this.value || t.modified("field") || t.modified("sort") || e.changed() || (t.sort && e.modified(t.sort.fields));
          if (n) {
            this.value = (t.sort ? e.source.slice().sort(An(t.sort)) : e.source).map(t.field);
          }
        },
      });
      function qa(t, e, n, i) {
        const r = Ia[t](e, n);
        return {
          init: r.init || p.v_,
          update: function (t, e) {
            e[i] = r.next(t);
          },
        };
      }
      const Ia = {
        row_number: function () {
          return { next: (t) => t.index + 1 };
        },
        rank: function () {
          let t;
          return {
            init: () => (t = 1),
            next: (e) => {
              const n = e.index,
                i = e.data;
              return n && e.compare(i[n - 1], i[n]) ? (t = n + 1) : t;
            },
          };
        },
        dense_rank: function () {
          let t;
          return {
            init: () => (t = 1),
            next: (e) => {
              const n = e.index,
                i = e.data;
              return n && e.compare(i[n - 1], i[n]) ? ++t : t;
            },
          };
        },
        percent_rank: function () {
          const t = Ia.rank(),
            e = t.next;
          return { init: t.init, next: (t) => (e(t) - 1) / (t.data.length - 1) };
        },
        cume_dist: function () {
          let t;
          return {
            init: () => (t = 0),
            next: (e) => {
              const n = e.data,
                i = e.compare;
              let r = e.index;
              if (t < r) {
                while (r + 1 < n.length && !i(n[r], n[r + 1])) ++r;
                t = r;
              }
              return (1 + t) / n.length;
            },
          };
        },
        ntile: function (t, e) {
          e = +e;
          if (!(e > 0)) (0, p.z3)("ntile num must be greater than zero.");
          const n = Ia.cume_dist(),
            i = n.next;
          return { init: n.init, next: (t) => Math.ceil(e * i(t)) };
        },
        lag: function (t, e) {
          e = +e || 1;
          return {
            next: (n) => {
              const i = n.index - e;
              return i >= 0 ? t(n.data[i]) : null;
            },
          };
        },
        lead: function (t, e) {
          e = +e || 1;
          return {
            next: (n) => {
              const i = n.index + e,
                r = n.data;
              return i < r.length ? t(r[i]) : null;
            },
          };
        },
        first_value: function (t) {
          return { next: (e) => t(e.data[e.i0]) };
        },
        last_value: function (t) {
          return { next: (e) => t(e.data[e.i1 - 1]) };
        },
        nth_value: function (t, e) {
          e = +e;
          if (!(e > 0)) (0, p.z3)("nth_value nth must be greater than zero.");
          return {
            next: (n) => {
              const i = n.i0 + (e - 1);
              return i < n.i1 ? t(n.data[i]) : null;
            },
          };
        },
        prev_value: function (t) {
          let e;
          return {
            init: () => (e = null),
            next: (n) => {
              const i = t(n.data[n.index]);
              return i != null ? (e = i) : e;
            },
          };
        },
        next_value: function (t) {
          let e, n;
          return {
            init: () => ((e = null), (n = -1)),
            next: (i) => {
              const r = i.data;
              return i.index <= n ? e : (n = Ua(t, r, i.index)) < 0 ? ((n = r.length), (e = null)) : (e = t(r[n]));
            },
          };
        },
      };
      function Ua(t, e, n) {
        for (let i = e.length; n < i; ++n) {
          const i = t(e[n]);
          if (i != null) return n;
        }
        return -1;
      }
      const ja = Object.keys(Ia);
      function Ga(t) {
        const e = (0, p.YO)(t.ops),
          n = (0, p.YO)(t.fields),
          i = (0, p.YO)(t.params),
          r = (0, p.YO)(t.aggregate_params),
          s = (0, p.YO)(t.as),
          a = (this.outputs = []),
          o = (this.windows = []),
          u = {},
          l = {},
          c = [],
          f = [];
        let d = true;
        function h(t) {
          (0, p.YO)((0, p.nS)(t)).forEach((t) => (u[t] = 1));
        }
        h(t.sort);
        e.forEach((t, e) => {
          const u = n[e],
            m = i[e],
            g = r[e] || null,
            y = (0, p.N6)(u),
            v = rs(t, y, s[e]);
          h(u);
          a.push(v);
          if ((0, p.mQ)(Ia, t)) {
            o.push(qa(t, u, m, v));
          } else {
            if (u == null && t !== "count") {
              (0, p.z3)("Null aggregate field specified.");
            }
            if (t === "count") {
              c.push(v);
              return;
            }
            d = false;
            let e = l[y];
            if (!e) {
              e = l[y] = [];
              e.field = u;
              f.push(e);
            }
            e.push(cs(t, g, v));
          }
        });
        if (c.length || f.length) {
          this.cell = Wa(f, c, d);
        }
        this.inputs = Object.keys(u);
      }
      const Ya = Ga.prototype;
      Ya.init = function () {
        this.windows.forEach((t) => t.init());
        if (this.cell) this.cell.init();
      };
      Ya.update = function (t, e) {
        const n = this.cell,
          i = this.windows,
          r = t.data,
          s = i && i.length;
        let a;
        if (n) {
          for (a = t.p0; a < t.i0; ++a) n.rem(r[a]);
          for (a = t.p1; a < t.i1; ++a) n.add(r[a]);
          n.set(e);
        }
        for (a = 0; a < s; ++a) i[a].update(t, e);
      };
      function Wa(t, e, n) {
        t = t.map((t) => ys(t, t.field));
        const i = { num: 0, agg: null, store: false, count: e };
        if (!n) {
          var r = t.length,
            s = (i.agg = Array(r)),
            a = 0;
          for (; a < r; ++a) s[a] = new t[a](i);
        }
        if (i.store) {
          var o = (i.data = new vs());
        }
        i.add = function (t) {
          i.num += 1;
          if (n) return;
          if (o) o.add(t);
          for (let e = 0; e < r; ++e) {
            s[e].add(s[e].get(t), t);
          }
        };
        i.rem = function (t) {
          i.num -= 1;
          if (n) return;
          if (o) o.rem(t);
          for (let e = 0; e < r; ++e) {
            s[e].rem(s[e].get(t), t);
          }
        };
        i.set = function (t) {
          let r, a;
          if (o) o.values();
          for (r = 0, a = e.length; r < a; ++r) t[e[r]] = i.num;
          if (!n) for (r = 0, a = s.length; r < a; ++r) s[r].set(t);
        };
        i.init = function () {
          i.num = 0;
          if (o) o.reset();
          for (let t = 0; t < r; ++t) s[t].init();
        };
        return i;
      }
      function Xa(t) {
        zi.call(this, {}, t);
        this._mlen = 0;
        this._mods = [];
      }
      Xa.Definition = {
        type: "Window",
        metadata: { modifies: true },
        params: [
          { name: "sort", type: "compare" },
          { name: "groupby", type: "field", array: true },
          { name: "ops", type: "enum", array: true, values: ja.concat(us) },
          { name: "params", type: "number", null: true, array: true },
          { name: "aggregate_params", type: "number", null: true, array: true },
          { name: "fields", type: "field", null: true, array: true },
          { name: "as", type: "string", null: true, array: true },
          { name: "frame", type: "number", null: true, array: true, length: 2, default: [null, 0] },
          { name: "ignorePeers", type: "boolean", default: false },
        ],
      };
      (0, p.B)(Xa, zi, {
        transform(t, e) {
          this.stamp = e.stamp;
          const n = t.modified(),
            i = An(t.sort),
            r = is(t.groupby),
            s = (t) => this.group(r(t));
          let a = this.state;
          if (!a || n) {
            a = this.state = new Ga(t);
          }
          if (n || e.modified(a.inputs)) {
            this.value = {};
            e.visit(e.SOURCE, (t) => s(t).add(t));
          } else {
            e.visit(e.REM, (t) => s(t).remove(t));
            e.visit(e.ADD, (t) => s(t).add(t));
          }
          for (let o = 0, u = this._mlen; o < u; ++o) {
            Ha(this._mods[o], a, i, t);
          }
          this._mlen = 0;
          this._mods = [];
          return e.reflow(n).modifies(a.outputs);
        },
        group(t) {
          let e = this.value[t];
          if (!e) {
            e = this.value[t] = As(yn);
            e.stamp = -1;
          }
          if (e.stamp < this.stamp) {
            e.stamp = this.stamp;
            this._mods[this._mlen++] = e;
          }
          return e;
        },
      });
      function Ha(t, e, n, i) {
        const r = i.sort,
          s = r && !i.ignorePeers,
          a = i.frame || [null, 0],
          o = t.data(n),
          u = o.length,
          l = s ? (0, Z.A)(r) : null,
          c = { i0: 0, i1: 0, p0: 0, p1: 0, index: 0, data: o, compare: r || (0, p.dY)(-1) };
        e.init();
        for (let f = 0; f < u; ++f) {
          Va(c, a, f, u);
          if (s) Qa(c, l);
          e.update(c, o[f]);
        }
      }
      function Va(t, e, n, i) {
        t.p0 = t.i0;
        t.p1 = t.i1;
        t.i0 = e[0] == null ? 0 : Math.max(0, n - Math.abs(e[0]));
        t.i1 = e[1] == null ? i : Math.min(i, n + Math.abs(e[1]) + 1);
        t.index = n;
      }
      function Qa(t, e) {
        const n = t.i0,
          i = t.i1 - 1,
          r = t.compare,
          s = t.data,
          a = s.length - 1;
        if (n > 0 && !r(s[n], s[n - 1])) t.i0 = e.left(s, s[n]);
        if (i < a && !r(s[i], s[i + 1])) t.i1 = e.right(s, s[i]);
      }
      var Ka = n(24363);
      var Za = n(60075);
      var Ja = n(69683);
      var to = n(54545);
      var eo = n(43793);
      var no = n(46457);
      var io = n(13893);
      var ro = n(76413);
      var so = n(25633);
      var ao = n(13309);
      var oo = n(71228);
      var uo = n(43272);
      var lo = n(67694);
      var co = n(29944);
      var fo = n(79011);
      var ho = n(16681);
      var po = n(12736);
      var mo = n(84653);
      var go = n(58679);
      var yo = n(18226);
      var vo = n(59835);
      function bo(t, e, n) {
        var i = null,
          r = (0, mo.A)(true),
          s = null,
          a = oo.A,
          o = null,
          u = (0, yo.i)(l);
        t = typeof t === "function" ? t : t === undefined ? vo.x : (0, mo.A)(+t);
        e = typeof e === "function" ? e : e === undefined ? (0, mo.A)(0) : (0, mo.A)(+e);
        n = typeof n === "function" ? n : n === undefined ? vo.y : (0, mo.A)(+n);
        function l(l) {
          var c,
            f,
            d,
            h = (l = (0, po.A)(l)).length,
            p,
            m = false,
            g,
            y = new Array(h),
            v = new Array(h);
          if (s == null) o = a((g = u()));
          for (c = 0; c <= h; ++c) {
            if (!(c < h && r((p = l[c]), c, l)) === m) {
              if ((m = !m)) {
                f = c;
                o.areaStart();
                o.lineStart();
              } else {
                o.lineEnd();
                o.lineStart();
                for (d = c - 1; d >= f; --d) {
                  o.point(y[d], v[d]);
                }
                o.lineEnd();
                o.areaEnd();
              }
            }
            if (m) {
              (y[c] = +t(p, c, l)), (v[c] = +e(p, c, l));
              o.point(i ? +i(p, c, l) : y[c], n ? +n(p, c, l) : v[c]);
            }
          }
          if (g) return (o = null), g + "" || null;
        }
        function c() {
          return (0, go.A)().defined(r).curve(a).context(s);
        }
        l.x = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : (0, mo.A)(+e)), (i = null), l) : t;
        };
        l.x0 = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : (0, mo.A)(+e)), l) : t;
        };
        l.x1 = function (t) {
          return arguments.length ? ((i = t == null ? null : typeof t === "function" ? t : (0, mo.A)(+t)), l) : i;
        };
        l.y = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, mo.A)(+t)), (n = null), l) : e;
        };
        l.y0 = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, mo.A)(+t)), l) : e;
        };
        l.y1 = function (t) {
          return arguments.length ? ((n = t == null ? null : typeof t === "function" ? t : (0, mo.A)(+t)), l) : n;
        };
        l.lineX0 = l.lineY0 = function () {
          return c().x(t).y(e);
        };
        l.lineY1 = function () {
          return c().x(t).y(n);
        };
        l.lineX1 = function () {
          return c().x(i).y(e);
        };
        l.defined = function (t) {
          return arguments.length ? ((r = typeof t === "function" ? t : (0, mo.A)(!!t)), l) : r;
        };
        l.curve = function (t) {
          return arguments.length ? ((a = t), s != null && (o = a(s)), l) : a;
        };
        l.context = function (t) {
          return arguments.length ? (t == null ? (s = o = null) : (o = a((s = t))), l) : s;
        };
        return l;
      }
      var xo = n(98247);
      const _o = (0, xo.RZ)(3);
      const wo = {
        draw(t, e) {
          const n = (0, xo.RZ)(e + (0, xo.jk)(e / 28, 0.75)) * 0.59436;
          const i = n / 2;
          const r = i * _o;
          t.moveTo(0, n);
          t.lineTo(0, -n);
          t.moveTo(-r, -i);
          t.lineTo(r, i);
          t.moveTo(-r, i);
          t.lineTo(r, -i);
        },
      };
      const Ao = {
        draw(t, e) {
          const n = (0, xo.RZ)(e / xo.pi);
          t.moveTo(n, 0);
          t.arc(0, 0, n, 0, xo.FA);
        },
      };
      const ko = {
        draw(t, e) {
          const n = (0, xo.RZ)(e / 5) / 2;
          t.moveTo(-3 * n, -n);
          t.lineTo(-n, -n);
          t.lineTo(-n, -3 * n);
          t.lineTo(n, -3 * n);
          t.lineTo(n, -n);
          t.lineTo(3 * n, -n);
          t.lineTo(3 * n, n);
          t.lineTo(n, n);
          t.lineTo(n, 3 * n);
          t.lineTo(-n, 3 * n);
          t.lineTo(-n, n);
          t.lineTo(-3 * n, n);
          t.closePath();
        },
      };
      const Eo = (0, xo.RZ)(1 / 3);
      const Mo = Eo * 2;
      const Do = {
        draw(t, e) {
          const n = (0, xo.RZ)(e / Mo);
          const i = n * Eo;
          t.moveTo(0, -n);
          t.lineTo(i, 0);
          t.lineTo(0, n);
          t.lineTo(-i, 0);
          t.closePath();
        },
      };
      const Co = {
        draw(t, e) {
          const n = (0, xo.RZ)(e) * 0.62625;
          t.moveTo(0, -n);
          t.lineTo(n, 0);
          t.lineTo(0, n);
          t.lineTo(-n, 0);
          t.closePath();
        },
      };
      const Fo = {
        draw(t, e) {
          const n = (0, xo.RZ)(e - (0, xo.jk)(e / 7, 2)) * 0.87559;
          t.moveTo(-n, 0);
          t.lineTo(n, 0);
          t.moveTo(0, n);
          t.lineTo(0, -n);
        },
      };
      const So = {
        draw(t, e) {
          const n = (0, xo.RZ)(e);
          const i = -n / 2;
          t.rect(i, i, n, n);
        },
      };
      const Bo = {
        draw(t, e) {
          const n = (0, xo.RZ)(e) * 0.4431;
          t.moveTo(n, n);
          t.lineTo(n, -n);
          t.lineTo(-n, -n);
          t.lineTo(-n, n);
          t.closePath();
        },
      };
      const zo = 0.8908130915292852;
      const $o = (0, xo.F8)(xo.pi / 10) / (0, xo.F8)((7 * xo.pi) / 10);
      const Ro = (0, xo.F8)(xo.FA / 10) * $o;
      const Oo = -(0, xo.gn)(xo.FA / 10) * $o;
      const To = {
        draw(t, e) {
          const n = (0, xo.RZ)(e * zo);
          const i = Ro * n;
          const r = Oo * n;
          t.moveTo(0, -n);
          t.lineTo(i, r);
          for (let s = 1; s < 5; ++s) {
            const e = (xo.FA * s) / 5;
            const a = (0, xo.gn)(e);
            const o = (0, xo.F8)(e);
            t.lineTo(o * n, -a * n);
            t.lineTo(a * i - o * r, o * i + a * r);
          }
          t.closePath();
        },
      };
      const No = (0, xo.RZ)(3);
      const Lo = {
        draw(t, e) {
          const n = -(0, xo.RZ)(e / (No * 3));
          t.moveTo(0, n * 2);
          t.lineTo(-No * n, -n);
          t.lineTo(No * n, -n);
          t.closePath();
        },
      };
      const Po = (0, xo.RZ)(3);
      const qo = {
        draw(t, e) {
          const n = (0, xo.RZ)(e) * 0.6824;
          const i = n / 2;
          const r = (n * Po) / 2;
          t.moveTo(0, -n);
          t.lineTo(r, i);
          t.lineTo(-r, i);
          t.closePath();
        },
      };
      const Io = -0.5;
      const Uo = (0, xo.RZ)(3) / 2;
      const jo = 1 / (0, xo.RZ)(12);
      const Go = (jo / 2 + 1) * 3;
      const Yo = {
        draw(t, e) {
          const n = (0, xo.RZ)(e / Go);
          const i = n / 2,
            r = n * jo;
          const s = i,
            a = n * jo + n;
          const o = -s,
            u = a;
          t.moveTo(i, r);
          t.lineTo(s, a);
          t.lineTo(o, u);
          t.lineTo(Io * i - Uo * r, Uo * i + Io * r);
          t.lineTo(Io * s - Uo * a, Uo * s + Io * a);
          t.lineTo(Io * o - Uo * u, Uo * o + Io * u);
          t.lineTo(Io * i + Uo * r, Io * r - Uo * i);
          t.lineTo(Io * s + Uo * a, Io * a - Uo * s);
          t.lineTo(Io * o + Uo * u, Io * u - Uo * o);
          t.closePath();
        },
      };
      const Wo = {
        draw(t, e) {
          const n = (0, xo.RZ)(e - (0, xo.jk)(e / 6, 1.7)) * 0.6189;
          t.moveTo(-n, -n);
          t.lineTo(n, n);
          t.moveTo(-n, n);
          t.lineTo(n, -n);
        },
      };
      const Xo = [Ao, ko, Do, So, To, Lo, Yo];
      const Ho = [Ao, Fo, Wo, qo, wo, Bo, Co];
      function Vo(t, e) {
        let n = null,
          i = (0, yo.i)(r);
        t = typeof t === "function" ? t : (0, mo.A)(t || Ao);
        e = typeof e === "function" ? e : (0, mo.A)(e === undefined ? 64 : +e);
        function r() {
          let r;
          if (!n) n = r = i();
          t.apply(this, arguments).draw(n, +e.apply(this, arguments));
          if (r) return (n = null), r + "" || null;
        }
        r.type = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : (0, mo.A)(e)), r) : t;
        };
        r.size = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, mo.A)(+t)), r) : e;
        };
        r.context = function (t) {
          return arguments.length ? ((n = t == null ? null : t), r) : n;
        };
        return r;
      }
      var Qo = n(69450);
      function Ko(t, e) {
        if (typeof document !== "undefined" && document.createElement) {
          const n = document.createElement("canvas");
          if (n && n.getContext) {
            n.width = t;
            n.height = e;
            return n;
          }
        }
        return null;
      }
      const Zo = () => (typeof Image !== "undefined" ? Image : null);
      var Jo = n(71363);
      var tu = n(20481);
      var eu = n(60117);
      function nu(t) {
        var e;
        function n(t) {
          return t == null || isNaN((t = +t)) ? e : t;
        }
        n.invert = n;
        n.domain = n.range = function (e) {
          return arguments.length ? ((t = Array.from(e, eu.A)), n) : t.slice();
        };
        n.unknown = function (t) {
          return arguments.length ? ((e = t), n) : e;
        };
        n.copy = function () {
          return nu(t).unknown(e);
        };
        t = arguments.length ? Array.from(t, eu.A) : [0, 1];
        return (0, tu.C)(n);
      }
      var iu = n(60125);
      var ru = n(52178);
      var su = n(25758);
      function au(t) {
        return Math.log(t);
      }
      function ou(t) {
        return Math.exp(t);
      }
      function uu(t) {
        return -Math.log(-t);
      }
      function lu(t) {
        return -Math.exp(-t);
      }
      function cu(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function fu(t) {
        return t === 10 ? cu : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
      }
      function du(t) {
        return t === Math.E ? Math.log : (t === 10 && Math.log10) || (t === 2 && Math.log2) || ((t = Math.log(t)), (e) => Math.log(e) / t);
      }
      function hu(t) {
        return (e, n) => -t(-e, n);
      }
      function pu(t) {
        const e = t(au, ou);
        const n = e.domain;
        let i = 10;
        let r;
        let s;
        function a() {
          (r = du(i)), (s = fu(i));
          if (n()[0] < 0) {
            (r = hu(r)), (s = hu(s));
            t(uu, lu);
          } else {
            t(au, ou);
          }
          return e;
        }
        e.base = function (t) {
          return arguments.length ? ((i = +t), a()) : i;
        };
        e.domain = function (t) {
          return arguments.length ? (n(t), a()) : n();
        };
        e.ticks = (t) => {
          const e = n();
          let a = e[0];
          let o = e[e.length - 1];
          const u = o < a;
          if (u) [a, o] = [o, a];
          let l = r(a);
          let c = r(o);
          let f;
          let d;
          const h = t == null ? 10 : +t;
          let p = [];
          if (!(i % 1) && c - l < h) {
            (l = Math.floor(l)), (c = Math.ceil(c));
            if (a > 0)
              for (; l <= c; ++l) {
                for (f = 1; f < i; ++f) {
                  d = l < 0 ? f / s(-l) : f * s(l);
                  if (d < a) continue;
                  if (d > o) break;
                  p.push(d);
                }
              }
            else
              for (; l <= c; ++l) {
                for (f = i - 1; f >= 1; --f) {
                  d = l > 0 ? f / s(-l) : f * s(l);
                  if (d < a) continue;
                  if (d > o) break;
                  p.push(d);
                }
              }
            if (p.length * 2 < h) p = (0, N.Ay)(a, o, h);
          } else {
            p = (0, N.Ay)(l, c, Math.min(c - l, h)).map(s);
          }
          return u ? p.reverse() : p;
        };
        e.tickFormat = (t, n) => {
          if (t == null) t = 10;
          if (n == null) n = i === 10 ? "s" : ",";
          if (typeof n !== "function") {
            if (!(i % 1) && (n = (0, L.A)(n)).precision == null) n.trim = true;
            n = (0, U.GP)(n);
          }
          if (t === Infinity) return n;
          const a = Math.max(1, (i * t) / e.ticks().length);
          return (t) => {
            let e = t / s(Math.round(r(t)));
            if (e * i < i - 0.5) e *= i;
            return e <= a ? n(t) : "";
          };
        };
        e.nice = () => n((0, iu.A)(n(), { floor: (t) => s(Math.floor(r(t))), ceil: (t) => s(Math.ceil(r(t))) }));
        return e;
      }
      function mu() {
        const t = pu((0, ru.Gu)()).domain([1, 10]);
        t.copy = () => (0, ru.C)(t, mu()).base(t.base());
        su.C.apply(t, arguments);
        return t;
      }
      function gu(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function yu(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function vu(t) {
        return t < 0 ? -t * t : t * t;
      }
      function bu(t) {
        var e = t(ru.D_, ru.D_),
          n = 1;
        function i() {
          return n === 1 ? t(ru.D_, ru.D_) : n === 0.5 ? t(yu, vu) : t(gu(n), gu(1 / n));
        }
        e.exponent = function (t) {
          return arguments.length ? ((n = +t), i()) : n;
        };
        return (0, tu.C)(e);
      }
      function xu() {
        var t = bu((0, ru.Gu)());
        t.copy = function () {
          return (0, ru.C)(t, xu()).exponent(t.exponent());
        };
        su.C.apply(t, arguments);
        return t;
      }
      function _u() {
        return xu.apply(null, arguments).exponent(0.5);
      }
      function wu(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function Au(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function ku(t) {
        var e = 1,
          n = t(wu(e), Au(e));
        n.constant = function (n) {
          return arguments.length ? t(wu((e = +n)), Au(e)) : e;
        };
        return (0, tu.C)(n);
      }
      function Eu() {
        var t = ku((0, ru.Gu)());
        t.copy = function () {
          return (0, ru.C)(t, Eu()).constant(t.constant());
        };
        return su.C.apply(t, arguments);
      }
      var Mu = n(74725);
      var Du = n(20421);
      function Cu() {
        return su.C.apply(
          (0, Mu.B)(Du.$Z, Du.lk, W.Mb, X.R6, Y.Hl, G.dA, H.pz, V.vD, Q.R, fe.aL).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
          arguments
        );
      }
      var Fu = n(21406);
      var Su = n(15307);
      function Bu() {
        var t = 0,
          e = 1,
          n,
          i,
          r,
          s,
          a = ru.D_,
          o = false,
          u;
        function l(t) {
          return t == null || isNaN((t = +t)) ? u : a(r === 0 ? 0.5 : ((t = (s(t) - n) * r), o ? Math.max(0, Math.min(1, t)) : t));
        }
        l.domain = function (a) {
          return arguments.length ? (([t, e] = a), (n = s((t = +t))), (i = s((e = +e))), (r = n === i ? 0 : 1 / (i - n)), l) : [t, e];
        };
        l.clamp = function (t) {
          return arguments.length ? ((o = !!t), l) : o;
        };
        l.interpolator = function (t) {
          return arguments.length ? ((a = t), l) : a;
        };
        function c(t) {
          return function (e) {
            var n, i;
            return arguments.length ? (([n, i] = e), (a = t(n, i)), l) : [a(0), a(1)];
          };
        }
        l.range = c(Fu.A);
        l.rangeRound = c(Su.A);
        l.unknown = function (t) {
          return arguments.length ? ((u = t), l) : u;
        };
        return function (a) {
          (s = a), (n = a(t)), (i = a(e)), (r = n === i ? 0 : 1 / (i - n));
          return l;
        };
      }
      function zu(t, e) {
        return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
      }
      function $u() {
        var t = (0, tu.C)(Bu()(ru.D_));
        t.copy = function () {
          return zu(t, $u());
        };
        return su.K.apply(t, arguments);
      }
      function Ru() {
        var t = pu(Bu()).domain([1, 10]);
        t.copy = function () {
          return zu(t, Ru()).base(t.base());
        };
        return su.K.apply(t, arguments);
      }
      function Ou() {
        var t = ku(Bu());
        t.copy = function () {
          return zu(t, Ou()).constant(t.constant());
        };
        return su.K.apply(t, arguments);
      }
      function Tu() {
        var t = bu(Bu());
        t.copy = function () {
          return zu(t, Tu()).exponent(t.exponent());
        };
        return su.K.apply(t, arguments);
      }
      function Nu() {
        return Tu.apply(null, arguments).exponent(0.5);
      }
      var Lu = n(99793);
      function Pu() {
        var t = 0,
          e = 0.5,
          n = 1,
          i = 1,
          r,
          s,
          a,
          o,
          u,
          l = ru.D_,
          c,
          f = false,
          d;
        function h(t) {
          return isNaN((t = +t)) ? d : ((t = 0.5 + ((t = +c(t)) - s) * (i * t < i * s ? o : u)), l(f ? Math.max(0, Math.min(1, t)) : t));
        }
        h.domain = function (l) {
          return arguments.length
            ? (([t, e, n] = l),
              (r = c((t = +t))),
              (s = c((e = +e))),
              (a = c((n = +n))),
              (o = r === s ? 0 : 0.5 / (s - r)),
              (u = s === a ? 0 : 0.5 / (a - s)),
              (i = s < r ? -1 : 1),
              h)
            : [t, e, n];
        };
        h.clamp = function (t) {
          return arguments.length ? ((f = !!t), h) : f;
        };
        h.interpolator = function (t) {
          return arguments.length ? ((l = t), h) : l;
        };
        function p(t) {
          return function (e) {
            var n, i, r;
            return arguments.length ? (([n, i, r] = e), (l = (0, Lu.A)(t, [n, i, r])), h) : [l(0), l(0.5), l(1)];
          };
        }
        h.range = p(Fu.A);
        h.rangeRound = p(Su.A);
        h.unknown = function (t) {
          return arguments.length ? ((d = t), h) : d;
        };
        return function (l) {
          (c = l), (r = l(t)), (s = l(e)), (a = l(n)), (o = r === s ? 0 : 0.5 / (s - r)), (u = s === a ? 0 : 0.5 / (a - s)), (i = s < r ? -1 : 1);
          return h;
        };
      }
      function qu() {
        var t = (0, tu.C)(Pu()(ru.D_));
        t.copy = function () {
          return zu(t, qu());
        };
        return su.K.apply(t, arguments);
      }
      function Iu() {
        var t = pu(Pu()).domain([0.1, 1, 10]);
        t.copy = function () {
          return zu(t, Iu()).base(t.base());
        };
        return su.K.apply(t, arguments);
      }
      function Uu() {
        var t = ku(Pu());
        t.copy = function () {
          return zu(t, Uu()).constant(t.constant());
        };
        return su.K.apply(t, arguments);
      }
      function ju() {
        var t = bu(Pu());
        t.copy = function () {
          return zu(t, ju()).exponent(t.exponent());
        };
        return su.K.apply(t, arguments);
      }
      function Gu() {
        return ju.apply(null, arguments).exponent(0.5);
      }
      function Yu() {
        var t = [],
          e = [],
          n = [],
          i;
        function r() {
          var i = 0,
            r = Math.max(1, e.length);
          n = new Array(r - 1);
          while (++i < r) n[i - 1] = Wi(t, i / r);
          return s;
        }
        function s(t) {
          return t == null || isNaN((t = +t)) ? i : e[(0, Jo.Ay)(n, t)];
        }
        s.invertExtent = function (i) {
          var r = e.indexOf(i);
          return r < 0 ? [NaN, NaN] : [r > 0 ? n[r - 1] : t[0], r < n.length ? n[r] : t[t.length - 1]];
        };
        s.domain = function (e) {
          if (!arguments.length) return t.slice();
          t = [];
          for (let n of e) if (n != null && !isNaN((n = +n))) t.push(n);
          t.sort(Ti.A);
          return r();
        };
        s.range = function (t) {
          return arguments.length ? ((e = Array.from(t)), r()) : e.slice();
        };
        s.unknown = function (t) {
          return arguments.length ? ((i = t), s) : i;
        };
        s.quantiles = function () {
          return n.slice();
        };
        s.copy = function () {
          return Yu().domain(t).range(e).unknown(i);
        };
        return su.C.apply(s, arguments);
      }
      function Wu() {
        var t = 0,
          e = 1,
          n = 1,
          i = [0.5],
          r = [0, 1],
          s;
        function a(t) {
          return t != null && t <= t ? r[(0, Jo.Ay)(i, t, 0, n)] : s;
        }
        function o() {
          var r = -1;
          i = new Array(n);
          while (++r < n) i[r] = ((r + 1) * e - (r - n) * t) / (n + 1);
          return a;
        }
        a.domain = function (n) {
          return arguments.length ? (([t, e] = n), (t = +t), (e = +e), o()) : [t, e];
        };
        a.range = function (t) {
          return arguments.length ? ((n = (r = Array.from(t)).length - 1), o()) : r.slice();
        };
        a.invertExtent = function (s) {
          var a = r.indexOf(s);
          return a < 0 ? [NaN, NaN] : a < 1 ? [t, i[0]] : a >= n ? [i[n - 1], e] : [i[a - 1], i[a]];
        };
        a.unknown = function (t) {
          return arguments.length ? ((s = t), a) : a;
        };
        a.thresholds = function () {
          return i.slice();
        };
        a.copy = function () {
          return Wu().domain([t, e]).range(r).unknown(s);
        };
        return su.C.apply((0, tu.C)(a), arguments);
      }
      function Xu() {
        var t = [0.5],
          e = [0, 1],
          n,
          i = 1;
        function r(r) {
          return r != null && r <= r ? e[(0, Jo.Ay)(t, r, 0, i)] : n;
        }
        r.domain = function (n) {
          return arguments.length ? ((t = Array.from(n)), (i = Math.min(t.length, e.length - 1)), r) : t.slice();
        };
        r.range = function (n) {
          return arguments.length ? ((e = Array.from(n)), (i = Math.min(t.length, e.length - 1)), r) : e.slice();
        };
        r.invertExtent = function (n) {
          var i = e.indexOf(n);
          return [t[i - 1], t[i]];
        };
        r.unknown = function (t) {
          return arguments.length ? ((n = t), r) : n;
        };
        r.copy = function () {
          return Xu().domain(t).range(e).unknown(n);
        };
        return su.C.apply(r, arguments);
      }
      var Hu = n(16527);
      var Vu = n(26698);
      var Qu = n(67360);
      var Ku = n(58177);
      const Zu = (0, Ku.A)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
      const Ju = (0, Ku.A)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
      const tl = (0, Ku.A)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
      const el = (0, Ku.A)("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");
      const nl = (0, Ku.A)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
      const il = (0, Ku.A)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
      const rl = (0, Ku.A)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
      const sl = (0, Ku.A)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
      const al = (0, Ku.A)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
      const ol = (0, Ku.A)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
      function ul(t, e, n) {
        const i = t - e + n * 2;
        return t ? (i > 0 ? i : 1) : 0;
      }
      const ll = "identity";
      const cl = "linear";
      const fl = "log";
      const dl = "pow";
      const hl = "sqrt";
      const pl = "symlog";
      const ml = "time";
      const gl = "utc";
      const yl = "sequential";
      const vl = "diverging";
      const bl = "quantile";
      const xl = "quantize";
      const _l = "threshold";
      const wl = "ordinal";
      const Al = "point";
      const kl = "band";
      const El = "bin-ordinal";
      const Ml = "continuous";
      const Dl = "discrete";
      const Cl = "discretizing";
      const Fl = "interpolating";
      const Sl = "temporal";
      function Bl(t) {
        return function (e) {
          let n = e[0],
            i = e[1],
            r;
          if (i < n) {
            r = n;
            n = i;
            i = r;
          }
          return [t.invert(n), t.invert(i)];
        };
      }
      function zl(t) {
        return function (e) {
          const n = t.range();
          let i = e[0],
            r = e[1],
            s = -1,
            a,
            o,
            u,
            l;
          if (r < i) {
            o = i;
            i = r;
            r = o;
          }
          for (u = 0, l = n.length; u < l; ++u) {
            if (n[u] >= i && n[u] <= r) {
              if (s < 0) s = u;
              a = u;
            }
          }
          if (s < 0) return undefined;
          i = t.invertExtent(n[s]);
          r = t.invertExtent(n[a]);
          return [i[0] === undefined ? i[1] : i[0], r[1] === undefined ? r[0] : r[1]];
        };
      }
      function $l() {
        const t = (0, Hu.A)().unknown(undefined),
          e = t.domain,
          n = t.range;
        let i = [0, 1],
          r,
          s,
          a = false,
          o = 0,
          u = 0,
          l = 0.5;
        delete t.unknown;
        function c() {
          const t = e().length,
            c = i[1] < i[0],
            f = i[1 - c],
            d = ul(t, o, u);
          let h = i[c - 0];
          r = (f - h) / (d || 1);
          if (a) {
            r = Math.floor(r);
          }
          h += (f - h - r * (t - o)) * l;
          s = r * (1 - o);
          if (a) {
            h = Math.round(h);
            s = Math.round(s);
          }
          const p = (0, es.A)(t).map((t) => h + r * t);
          return n(c ? p.reverse() : p);
        }
        t.domain = function (t) {
          if (arguments.length) {
            e(t);
            return c();
          } else {
            return e();
          }
        };
        t.range = function (t) {
          if (arguments.length) {
            i = [+t[0], +t[1]];
            return c();
          } else {
            return i.slice();
          }
        };
        t.rangeRound = function (t) {
          i = [+t[0], +t[1]];
          a = true;
          return c();
        };
        t.bandwidth = function () {
          return s;
        };
        t.step = function () {
          return r;
        };
        t.round = function (t) {
          if (arguments.length) {
            a = !!t;
            return c();
          } else {
            return a;
          }
        };
        t.padding = function (t) {
          if (arguments.length) {
            u = Math.max(0, Math.min(1, t));
            o = u;
            return c();
          } else {
            return o;
          }
        };
        t.paddingInner = function (t) {
          if (arguments.length) {
            o = Math.max(0, Math.min(1, t));
            return c();
          } else {
            return o;
          }
        };
        t.paddingOuter = function (t) {
          if (arguments.length) {
            u = Math.max(0, Math.min(1, t));
            return c();
          } else {
            return u;
          }
        };
        t.align = function (t) {
          if (arguments.length) {
            l = Math.max(0, Math.min(1, t));
            return c();
          } else {
            return l;
          }
        };
        t.invertRange = function (t) {
          if (t[0] == null || t[1] == null) return;
          const r = i[1] < i[0],
            a = r ? n().reverse() : n(),
            o = a.length - 1;
          let u = +t[0],
            l = +t[1],
            c,
            f,
            d;
          if (u !== u || l !== l) return;
          if (l < u) {
            d = u;
            u = l;
            l = d;
          }
          if (l < a[0] || u > i[1 - r]) return;
          c = Math.max(0, (0, Jo.Jj)(a, u) - 1);
          f = u === l ? c : (0, Jo.Jj)(a, l) - 1;
          if (u - a[c] > s + 1e-10) ++c;
          if (r) {
            d = c;
            c = o - f;
            f = o - d;
          }
          return c > f ? undefined : e().slice(c, f + 1);
        };
        t.invert = function (e) {
          const n = t.invertRange([e, e]);
          return n ? n[0] : n;
        };
        t.copy = function () {
          return $l().domain(e()).range(i).round(a).paddingInner(o).paddingOuter(u).align(l);
        };
        return c();
      }
      function Rl(t) {
        const e = t.copy;
        t.padding = t.paddingOuter;
        delete t.paddingInner;
        t.copy = function () {
          return Rl(e());
        };
        return t;
      }
      function Ol() {
        return Rl($l().paddingInner(1));
      }
      var Tl = Array.prototype.map;
      function Nl(t) {
        return Tl.call(t, p.Ro);
      }
      const Ll = Array.prototype.slice;
      function Pl() {
        let t = [],
          e = [];
        function n(n) {
          return n == null || n !== n ? undefined : e[((0, Jo.Ay)(t, n) - 1) % e.length];
        }
        n.domain = function (e) {
          if (arguments.length) {
            t = Nl(e);
            return n;
          } else {
            return t.slice();
          }
        };
        n.range = function (t) {
          if (arguments.length) {
            e = Ll.call(t);
            return n;
          } else {
            return e.slice();
          }
        };
        n.tickFormat = function (e, n) {
          return (0, Vu.A)(t[0], (0, p.se)(t), e == null ? 10 : e, n);
        };
        n.copy = function () {
          return Pl().domain(n.domain()).range(n.range());
        };
        return n;
      }
      const ql = new Map();
      const Il = Symbol("vega_scale");
      function Ul(t) {
        t[Il] = true;
        return t;
      }
      function jl(t) {
        return t && t[Il] === true;
      }
      function Gl(t, e, n) {
        const i = function n() {
          const i = e();
          if (!i.invertRange) {
            i.invertRange = i.invert ? Bl(i) : i.invertExtent ? zl(i) : undefined;
          }
          i.type = t;
          return Ul(i);
        };
        i.metadata = (0, p.M1)((0, p.YO)(n));
        return i;
      }
      function Yl(t, e, n) {
        if (arguments.length > 1) {
          ql.set(t, Gl(t, e, n));
          return this;
        } else {
          return Wl(t) ? ql.get(t) : undefined;
        }
      }
      Yl(ll, nu);
      Yl(cl, tu.A, Ml);
      Yl(fl, mu, [Ml, fl]);
      Yl(dl, xu, Ml);
      Yl(hl, _u, Ml);
      Yl(pl, Eu, Ml);
      Yl(ml, Mu.A, [Ml, Sl]);
      Yl(gl, Cu, [Ml, Sl]);
      Yl(yl, $u, [Ml, Fl]);
      Yl(`${yl}-${cl}`, $u, [Ml, Fl]);
      Yl(`${yl}-${fl}`, Ru, [Ml, Fl, fl]);
      Yl(`${yl}-${dl}`, Tu, [Ml, Fl]);
      Yl(`${yl}-${hl}`, Nu, [Ml, Fl]);
      Yl(`${yl}-${pl}`, Ou, [Ml, Fl]);
      Yl(`${vl}-${cl}`, qu, [Ml, Fl]);
      Yl(`${vl}-${fl}`, Iu, [Ml, Fl, fl]);
      Yl(`${vl}-${dl}`, ju, [Ml, Fl]);
      Yl(`${vl}-${hl}`, Gu, [Ml, Fl]);
      Yl(`${vl}-${pl}`, Uu, [Ml, Fl]);
      Yl(bl, Yu, [Cl, bl]);
      Yl(xl, Wu, Cl);
      Yl(_l, Xu, Cl);
      Yl(El, Pl, [Dl, Cl]);
      Yl(wl, Hu.A, Dl);
      Yl(kl, $l, Dl);
      Yl(Al, Ol, Dl);
      function Wl(t) {
        return ql.has(t);
      }
      function Xl(t, e) {
        const n = ql.get(t);
        return n && n.metadata[e];
      }
      function Hl(t) {
        return Xl(t, Ml);
      }
      function Vl(t) {
        return Xl(t, Dl);
      }
      function Ql(t) {
        return Xl(t, Cl);
      }
      function Kl(t) {
        return Xl(t, fl);
      }
      function Zl(t) {
        return Xl(t, Sl);
      }
      function Jl(t) {
        return Xl(t, Fl);
      }
      function tc(t) {
        return Xl(t, bl);
      }
      const ec = ["clamp", "base", "constant", "exponent"];
      function nc(t, e) {
        const n = e[0],
          i = (0, p.se)(e) - n;
        return function (e) {
          return t(n + e * i);
        };
      }
      function ic(t, e, n) {
        return Lu.A(oc(e || "rgb", n), t);
      }
      function rc(t, e) {
        const n = new Array(e),
          i = e + 1;
        for (let r = 0; r < e; ) n[r] = t(++r / i);
        return n;
      }
      function sc(t) {
        const e = t.type,
          n = t.copy();
        n.type = e;
        return n;
      }
      function ac(t, e, n) {
        const i = n - e;
        let r, s, a;
        if (!i || !Number.isFinite(i)) {
          return (0, p.dY)(0.5);
        } else {
          r = (s = t.type).indexOf("-");
          s = r < 0 ? s : s.slice(r + 1);
          a = Yl(s)().domain([e, n]).range([0, 1]);
          ec.forEach((e) => (t[e] ? a[e](t[e]()) : 0));
          return a;
        }
      }
      function oc(t, e) {
        const n = Qu[uc(t)];
        return e != null && n && n.gamma ? n.gamma(e) : n;
      }
      function uc(t) {
        return (
          "interpolate" +
          t
            .toLowerCase()
            .split("-")
            .map((t) => t[0].toUpperCase() + t.slice(1))
            .join("")
        );
      }
      const lc = {
        blues: "cfe1f2bed8eca8cee58fc1de74b2d75ba3cf4592c63181bd206fb2125ca40a4a90",
        greens: "d3eecdc0e6baabdda594d3917bc77d60ba6c46ab5e329a512089430e7735036429",
        greys: "e2e2e2d4d4d4c4c4c4b1b1b19d9d9d8888887575756262624d4d4d3535351e1e1e",
        oranges: "fdd8b3fdc998fdb87bfda55efc9244f87f2cf06b18e4580bd14904b93d029f3303",
        purples: "e2e1efd4d4e8c4c5e0b4b3d6a3a0cc928ec3827cb97566ae684ea25c3696501f8c",
        reds: "fdc9b4fcb49afc9e80fc8767fa7051f6573fec3f2fdc2a25c81b1db21218970b13",
        blueGreen: "d5efedc1e8e0a7ddd18bd2be70c6a958ba9144ad77319c5d2089460e7736036429",
        bluePurple: "ccddecbad0e4a8c2dd9ab0d4919cc98d85be8b6db28a55a6873c99822287730f71",
        greenBlue: "d3eecec5e8c3b1e1bb9bd8bb82cec269c2ca51b2cd3c9fc7288abd1675b10b60a1",
        orangeRed: "fddcaffdcf9bfdc18afdad77fb9562f67d53ee6545e24932d32d1ebf130da70403",
        purpleBlue: "dbdaebc8cee4b1c3de97b7d87bacd15b9fc93a90c01e7fb70b70ab056199045281",
        purpleBlueGreen: "dbd8eac8cee4b0c3de93b7d872acd1549fc83892bb1c88a3097f8702736b016353",
        purpleRed: "dcc9e2d3b3d7ce9eccd186c0da6bb2e14da0e23189d91e6fc61159ab07498f023a",
        redPurple: "fccfccfcbec0faa9b8f98faff571a5ec539ddb3695c41b8aa908808d0179700174",
        yellowGreen: "e4f4acd1eca0b9e2949ed68880c97c62bb6e47aa5e3297502083440e723b036034",
        yellowOrangeBrown: "feeaa1fedd84fecc63feb746fca031f68921eb7215db5e0bc54c05ab3d038f3204",
        yellowOrangeRed: "fee087fed16ffebd59fea849fd903efc7335f9522bee3423de1b20ca0b22af0225",
        blueOrange: "134b852f78b35da2cb9dcae1d2e5eff2f0ebfce0bafbbf74e8932fc5690d994a07",
        brownBlueGreen: "704108a0651ac79548e3c78af3e6c6eef1eac9e9e48ed1c74da79e187a72025147",
        purpleGreen: "5b1667834792a67fb6c9aed3e6d6e8eff0efd9efd5aedda971bb75368e490e5e29",
        purpleOrange: "4114696647968f83b7b9b4d6dadbebf3eeeafce0bafbbf74e8932fc5690d994a07",
        redBlue: "8c0d25bf363adf745ef4ae91fbdbc9f2efeed2e5ef9dcae15da2cb2f78b3134b85",
        redGrey: "8c0d25bf363adf745ef4ae91fcdccbfaf4f1e2e2e2c0c0c0969696646464343434",
        yellowGreenBlue: "eff9bddbf1b4bde5b594d5b969c5be45b4c22c9ec02182b82163aa23479c1c3185",
        redYellowBlue: "a50026d4322cf16e43fcac64fedd90faf8c1dcf1ecabd6e875abd04a74b4313695",
        redYellowGreen: "a50026d4322cf16e43fcac63fedd8df9f7aed7ee8ea4d86e64bc6122964f006837",
        pinkYellowGreen: "8e0152c0267edd72adf0b3d6faddedf5f3efe1f2cab6de8780bb474f9125276419",
        spectral: "9e0142d13c4bf0704afcac63fedd8dfbf8b0e0f3a1a9dda269bda94288b55e4fa2",
        viridis:
          "440154470e61481a6c482575472f7d443a834144873d4e8a39568c35608d31688e2d708e2a788e27818e23888e21918d1f988b1fa08822a8842ab07f35b77943bf7154c56866cc5d7ad1518fd744a5db36bcdf27d2e21be9e51afde725",
        magma:
          "0000040404130b0924150e3720114b2c11603b0f704a107957157e651a80721f817f24828c29819a2e80a8327db6377ac43c75d1426fde4968e95462f1605df76f5cfa7f5efc8f65fe9f6dfeaf78febf84fece91fddea0fcedaffcfdbf",
        inferno:
          "0000040403130c0826170c3b240c4f330a5f420a68500d6c5d126e6b176e781c6d86216b932667a12b62ae305cbb3755c73e4cd24644dd513ae65c30ed6925f3771af8850ffb9506fca50afcb519fac62df6d645f2e661f3f484fcffa4",
        plasma:
          "0d088723069033059742039d5002a25d01a66a00a87801a88405a7900da49c179ea72198b12a90ba3488c33d80cb4779d35171da5a69e16462e76e5bed7953f2834cf68f44fa9a3dfca636fdb32ffec029fcce25f9dc24f5ea27f0f921",
        cividis:
          "00205100235800265d002961012b65042e670831690d346b11366c16396d1c3c6e213f6e26426e2c456e31476e374a6e3c4d6e42506e47536d4c566d51586e555b6e5a5e6e5e616e62646f66676f6a6a706e6d717270717573727976737c79747f7c75827f758682768985778c8877908b78938e789691789a94789e9778a19b78a59e77a9a177aea575b2a874b6ab73bbaf71c0b26fc5b66dc9b96acebd68d3c065d8c462ddc85fe2cb5ce7cf58ebd355f0d652f3da4ff7de4cfae249fce647",
        rainbow:
          "6e40aa883eb1a43db3bf3cafd83fa4ee4395fe4b83ff576eff6659ff7847ff8c38f3a130e2b72fcfcc36bee044aff05b8ff4576ff65b52f6673af27828ea8d1ddfa319d0b81cbecb23abd82f96e03d82e14c6edb5a5dd0664dbf6e40aa",
        sinebow:
          "ff4040fc582af47218e78d0bd5a703bfbf00a7d5038de70b72f41858fc2a40ff402afc5818f4720be78d03d5a700bfbf03a7d50b8de71872f42a58fc4040ff582afc7218f48d0be7a703d5bf00bfd503a7e70b8df41872fc2a58ff4040",
        turbo:
          "23171b32204a3e2a71453493493eae4b49c54a53d7485ee44569ee4074f53c7ff8378af93295f72e9ff42ba9ef28b3e926bce125c5d925cdcf27d5c629dcbc2de3b232e9a738ee9d3ff39347f68950f9805afc7765fd6e70fe667cfd5e88fc5795fb51a1f84badf545b9f140c5ec3cd0e637dae034e4d931ecd12ef4c92bfac029ffb626ffad24ffa223ff9821ff8d1fff821dff771cfd6c1af76118f05616e84b14df4111d5380fcb2f0dc0260ab61f07ac1805a313029b0f00950c00910b00",
        browns: "eedbbdecca96e9b97ae4a865dc9856d18954c7784cc0673fb85536ad44339f3632",
        tealBlues: "bce4d89dd3d181c3cb65b3c245a2b9368fae347da0306a932c5985",
        teals: "bbdfdfa2d4d58ac9c975bcbb61b0af4da5a43799982b8b8c1e7f7f127273006667",
        warmGreys: "dcd4d0cec5c1c0b8b4b3aaa7a59c9998908c8b827f7e7673726866665c5a59504e",
        goldGreen: "f4d166d5ca60b6c35c98bb597cb25760a6564b9c533f8f4f33834a257740146c36",
        goldOrange: "f4d166f8be5cf8aa4cf5983bf3852aef701be2621fd65322c54923b142239e3a26",
        goldRed: "f4d166f6be59f9aa51fc964ef6834bee734ae56249db5247cf4244c43141b71d3e",
        lightGreyRed: "efe9e6e1dad7d5cbc8c8bdb9bbaea9cd967ddc7b43e15f19df4011dc000b",
        lightGreyTeal: "e4eaead6dcddc8ced2b7c2c7a6b4bc64b0bf22a6c32295c11f85be1876bc",
        lightMulti: "e0f1f2c4e9d0b0de9fd0e181f6e072f6c053f3993ef77440ef4a3c",
        lightOrange: "f2e7daf7d5baf9c499fab184fa9c73f68967ef7860e8645bde515bd43d5b",
        lightTealBlue: "e3e9e0c0dccf9aceca7abfc859afc0389fb9328dad2f7ca0276b95255988",
        darkBlue: "3232322d46681a5c930074af008cbf05a7ce25c0dd38daed50f3faffffff",
        darkGold: "3c3c3c584b37725e348c7631ae8b2bcfa424ecc31ef9de30fff184ffffff",
        darkGreen: "3a3a3a215748006f4d048942489e4276b340a6c63dd2d836ffeb2cffffaa",
        darkMulti: "3737371f5287197d8c29a86995ce3fffe800ffffff",
        darkRed: "3434347036339e3c38cc4037e75d1eec8620eeab29f0ce32ffeb2c",
      };
      const cc = {
        accent: Zu,
        category10: Ju,
        category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
        category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
        category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
        dark2: tl,
        observable10: el,
        paired: nl,
        pastel1: il,
        pastel2: rl,
        set1: sl,
        set2: al,
        set3: ol,
        tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
        tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5",
      };
      function fc(t) {
        if ((0, p.cy)(t)) return t;
        const e = (t.length / 6) | 0,
          n = new Array(e);
        for (let i = 0; i < e; ) {
          n[i] = "#" + t.slice(i * 6, ++i * 6);
        }
        return n;
      }
      function dc(t, e) {
        for (const n in t) pc(n, e(t[n]));
      }
      const hc = {};
      dc(cc, fc);
      dc(lc, (t) => ic(fc(t)));
      function pc(t, e) {
        t = t && t.toLowerCase();
        if (arguments.length > 1) {
          hc[t] = e;
          return this;
        } else {
          return hc[t];
        }
      }
      const mc = "symbol";
      const gc = "discrete";
      const yc = "gradient";
      const vc = (t) => ((0, p.cy)(t) ? t.map((t) => String(t)) : String(t));
      const bc = (t, e) => t[1] - e[1];
      const xc = (t, e) => e[1] - t[1];
      function _c(t, e, n) {
        let i;
        if ((0, p.Et)(e)) {
          if (t.bins) {
            e = Math.max(e, t.bins.length);
          }
          if (n != null) {
            e = Math.min(e, Math.floor((0, p.Ln)(t.domain()) / n || 1) + 1);
          }
        }
        if ((0, p.Gv)(e)) {
          i = e.step;
          e = e.interval;
        }
        if ((0, p.Kg)(e)) {
          e = t.type === ml ? qt(e) : t.type == gl ? It(e) : (0, p.z3)("Only time and utc scales accept interval strings.");
          if (i) e = e.every(i);
        }
        return e;
      }
      function wc(t, e, n) {
        let i = t.range(),
          r = i[0],
          s = (0, p.se)(i),
          a = bc;
        if (r > s) {
          i = s;
          s = r;
          r = i;
          a = xc;
        }
        r = Math.floor(r);
        s = Math.ceil(s);
        e = e
          .map((e) => [e, t(e)])
          .filter((t) => r <= t[1] && t[1] <= s)
          .sort(a)
          .map((t) => t[0]);
        if (n > 0 && e.length > 1) {
          const t = [e[0], (0, p.se)(e)];
          while (e.length > n && e.length >= 3) {
            e = e.filter((t, e) => !(e % 2));
          }
          if (e.length < 3) {
            e = t;
          }
        }
        return e;
      }
      function Ac(t, e) {
        return t.bins ? wc(t, t.bins, e) : t.ticks ? t.ticks(e) : t.domain();
      }
      function kc(t, e, n, i, r, s) {
        const a = e.type;
        let o = vc;
        if (a === ml || r === ml) {
          o = t.timeFormat(i);
        } else if (a === gl || r === gl) {
          o = t.utcFormat(i);
        } else if (Kl(a)) {
          const r = t.formatFloat(i);
          if (s || e.bins) {
            o = r;
          } else {
            const t = Ec(e, n, false);
            o = (e) => (t(e) ? r(e) : "");
          }
        } else if (e.tickFormat) {
          const r = e.domain();
          o = t.formatSpan(r[0], r[r.length - 1], n, i);
        } else if (i) {
          o = t.format(i);
        }
        return o;
      }
      function Ec(t, e, n) {
        const i = Ac(t, e),
          r = t.base(),
          s = Math.log(r),
          a = Math.max(1, (r * e) / i.length);
        const o = (t) => {
          let e = t / Math.pow(r, Math.round(Math.log(t) / s));
          if (e * r < r - 0.5) e *= r;
          return e <= a;
        };
        return n ? i.filter(o) : o;
      }
      const Mc = { [bl]: "quantiles", [xl]: "thresholds", [_l]: "domain" };
      const Dc = { [bl]: "quantiles", [xl]: "domain" };
      function Cc(t, e) {
        return t.bins ? Bc(t.bins) : t.type === fl ? Ec(t, e, true) : Mc[t.type] ? Sc(t[Mc[t.type]]()) : Ac(t, e);
      }
      function Fc(t, e, n) {
        const i = e[Dc[e.type]](),
          r = i.length;
        let s = r > 1 ? i[1] - i[0] : i[0],
          a;
        for (a = 1; a < r; ++a) {
          s = Math.min(s, i[a] - i[a - 1]);
        }
        return t.formatSpan(0, s, 3 * 10, n);
      }
      function Sc(t) {
        const e = [-Infinity].concat(t);
        e.max = +Infinity;
        return e;
      }
      function Bc(t) {
        const e = t.slice(0, -1);
        e.max = (0, p.se)(t);
        return e;
      }
      const zc = (t) => Mc[t.type] || t.bins;
      function $c(t, e, n, i, r, s, a) {
        const o = Dc[e.type] && s !== ml && s !== gl ? Fc(t, e, r) : kc(t, e, n, r, s, a);
        return i === mc && zc(e) ? Rc(o) : i === gc ? Tc(o) : Nc(o);
      }
      const Rc = (t) => (e, n, i) => {
        const r = Oc(i[n + 1], Oc(i.max, +Infinity)),
          s = Lc(e, t),
          a = Lc(r, t);
        return s && a ? s + " – " + a : a ? "< " + a : "≥ " + s;
      };
      const Oc = (t, e) => (t != null ? t : e);
      const Tc = (t) => (e, n) => (n ? t(e) : null);
      const Nc = (t) => (e) => t(e);
      const Lc = (t, e) => (Number.isFinite(t) ? e(t) : null);
      function Pc(t) {
        const e = t.domain(),
          n = e.length - 1;
        let i = +e[0],
          r = +(0, p.se)(e),
          s = r - i;
        if (t.type === _l) {
          const t = n ? s / n : 0.1;
          i -= t;
          r += t;
          s = r - i;
        }
        return (t) => (t - i) / s;
      }
      function qc(t, e, n, i) {
        const r = i || e.type;
        if ((0, p.Kg)(n) && Zl(r)) {
          n = n.replace(/%a/g, "%A").replace(/%b/g, "%B");
        }
        return !n && r === ml
          ? t.timeFormat("%A, %d %B %Y, %X")
          : !n && r === gl
            ? t.utcFormat("%A, %d %B %Y, %X UTC")
            : $c(t, e, 5, null, n, i, true);
      }
      function Ic(t, e, n) {
        n = n || {};
        const i = Math.max(3, n.maxlen || 7),
          r = qc(t, e, n.format, n.formatType);
        if (Ql(e.type)) {
          const t = Cc(e).slice(1).map(r),
            n = t.length;
          return `${n} boundar${n === 1 ? "y" : "ies"}: ${t.join(", ")}`;
        } else if (Vl(e.type)) {
          const t = e.domain(),
            n = t.length,
            s =
              n > i
                ? t
                    .slice(0, i - 2)
                    .map(r)
                    .join(", ") +
                  ", ending with " +
                  t.slice(-1).map(r)
                : t.map(r).join(", ");
          return `${n} value${n === 1 ? "" : "s"}: ${s}`;
        } else {
          const t = e.domain();
          return `values from ${r(t[0])} to ${r((0, p.se)(t))}`;
        }
      }
      let Uc = 0;
      function jc() {
        Uc = 0;
      }
      const Gc = "p_";
      function Yc(t) {
        return t && t.gradient;
      }
      function Wc(t, e, n) {
        const i = t.gradient;
        let r = t.id,
          s = i === "radial" ? Gc : "";
        if (!r) {
          r = t.id = "gradient_" + Uc++;
          if (i === "radial") {
            t.x1 = Xc(t.x1, 0.5);
            t.y1 = Xc(t.y1, 0.5);
            t.r1 = Xc(t.r1, 0);
            t.x2 = Xc(t.x2, 0.5);
            t.y2 = Xc(t.y2, 0.5);
            t.r2 = Xc(t.r2, 0.5);
            s = Gc;
          } else {
            t.x1 = Xc(t.x1, 0);
            t.y1 = Xc(t.y1, 0);
            t.x2 = Xc(t.x2, 1);
            t.y2 = Xc(t.y2, 0);
          }
        }
        e[r] = t;
        return "url(" + (n || "") + "#" + s + r + ")";
      }
      function Xc(t, e) {
        return t != null ? t : e;
      }
      function Hc(t, e) {
        var n = [],
          i;
        return (i = {
          gradient: "linear",
          x1: t ? t[0] : 0,
          y1: t ? t[1] : 0,
          x2: e ? e[0] : 1,
          y2: e ? e[1] : 0,
          stops: n,
          stop: function (t, e) {
            n.push({ offset: t, color: e });
            return i;
          },
        });
      }
      const Vc = {
        basis: { curve: Ka.Ay },
        "basis-closed": { curve: Za.A },
        "basis-open": { curve: Ja.A },
        bundle: { curve: to.A, tension: "beta", value: 0.85 },
        cardinal: { curve: eo.Ay, tension: "tension", value: 0 },
        "cardinal-open": { curve: no.A, tension: "tension", value: 0 },
        "cardinal-closed": { curve: io.A, tension: "tension", value: 0 },
        "catmull-rom": { curve: ro.A, tension: "alpha", value: 0.5 },
        "catmull-rom-closed": { curve: so.A, tension: "alpha", value: 0.5 },
        "catmull-rom-open": { curve: ao.A, tension: "alpha", value: 0.5 },
        linear: { curve: oo.A },
        "linear-closed": { curve: uo.A },
        monotone: { horizontal: lo.N, vertical: lo.G },
        natural: { curve: co.A },
        step: { curve: fo.Ay },
        "step-after": { curve: fo.Ps },
        "step-before": { curve: fo.Ko },
      };
      function Qc(t, e, n) {
        var i = (0, p.mQ)(Vc, t) && Vc[t],
          r = null;
        if (i) {
          r = i.curve || i[e || "vertical"];
          if (i.tension && n != null) {
            r = r[i.tension](n);
          }
        }
        return r;
      }
      const Kc = { m: 2, l: 2, h: 1, v: 1, z: 0, c: 6, s: 4, q: 4, t: 2, a: 7 };
      const Zc = /[mlhvzcsqta]([^mlhvzcsqta]+|$)/gi;
      const Jc = /^[+-]?(([0-9]*\.[0-9]+)|([0-9]+\.)|([0-9]+))([eE][+-]?[0-9]+)?/;
      const tf = /^((\s+,?\s*)|(,\s*))/;
      const ef = /^[01]/;
      function nf(t) {
        const e = [];
        const n = t.match(Zc) || [];
        n.forEach((t) => {
          let n = t[0];
          const i = n.toLowerCase();
          const r = Kc[i];
          const s = rf(i, r, t.slice(1).trim());
          const a = s.length;
          if (a < r || (a && a % r !== 0)) {
            throw Error("Invalid SVG path, incorrect parameter count");
          }
          e.push([n, ...s.slice(0, r)]);
          if (a === r) {
            return;
          }
          if (i === "m") {
            n = n === "M" ? "L" : "l";
          }
          for (let o = r; o < a; o += r) {
            e.push([n, ...s.slice(o, o + r)]);
          }
        });
        return e;
      }
      function rf(t, e, n) {
        const i = [];
        for (let r = 0; e && r < n.length; ) {
          for (let s = 0; s < e; ++s) {
            const e = t === "a" && (s === 3 || s === 4) ? ef : Jc;
            const a = n.slice(r).match(e);
            if (a === null) {
              throw Error("Invalid SVG path, incorrect parameter type");
            }
            r += a[0].length;
            i.push(+a[0]);
            const o = n.slice(r).match(tf);
            if (o !== null) {
              r += o[0].length;
            }
          }
        }
        return i;
      }
      const sf = Math.PI / 180;
      const af = 1e-14;
      const of = Math.PI / 2;
      const uf = Math.PI * 2;
      const lf = Math.sqrt(3) / 2;
      var cf = {};
      var ff = {};
      var df = [].join;
      function hf(t, e, n, i, r, s, a, o, u) {
        const l = df.call(arguments);
        if (cf[l]) {
          return cf[l];
        }
        const c = a * sf;
        const f = Math.sin(c);
        const d = Math.cos(c);
        n = Math.abs(n);
        i = Math.abs(i);
        const h = d * (o - t) * 0.5 + f * (u - e) * 0.5;
        const p = d * (u - e) * 0.5 - f * (o - t) * 0.5;
        let m = (h * h) / (n * n) + (p * p) / (i * i);
        if (m > 1) {
          m = Math.sqrt(m);
          n *= m;
          i *= m;
        }
        const g = d / n;
        const y = f / n;
        const v = -f / i;
        const b = d / i;
        const x = g * o + y * u;
        const _ = v * o + b * u;
        const w = g * t + y * e;
        const A = v * t + b * e;
        const k = (w - x) * (w - x) + (A - _) * (A - _);
        let E = 1 / k - 0.25;
        if (E < 0) E = 0;
        let M = Math.sqrt(E);
        if (s == r) M = -M;
        const D = 0.5 * (x + w) - M * (A - _);
        const C = 0.5 * (_ + A) + M * (w - x);
        const F = Math.atan2(_ - C, x - D);
        const S = Math.atan2(A - C, w - D);
        let B = S - F;
        if (B < 0 && s === 1) {
          B += uf;
        } else if (B > 0 && s === 0) {
          B -= uf;
        }
        const z = Math.ceil(Math.abs(B / (of + 0.001)));
        const $ = [];
        for (let R = 0; R < z; ++R) {
          const t = F + (R * B) / z;
          const e = F + ((R + 1) * B) / z;
          $[R] = [D, C, t, e, n, i, f, d];
        }
        return (cf[l] = $);
      }
      function pf(t) {
        const e = df.call(t);
        if (ff[e]) {
          return ff[e];
        }
        var n = t[0],
          i = t[1],
          r = t[2],
          s = t[3],
          a = t[4],
          o = t[5],
          u = t[6],
          l = t[7];
        const c = l * a;
        const f = -u * o;
        const d = u * a;
        const h = l * o;
        const p = Math.cos(r);
        const m = Math.sin(r);
        const g = Math.cos(s);
        const y = Math.sin(s);
        const v = 0.5 * (s - r);
        const b = Math.sin(v * 0.5);
        const x = ((8 / 3) * b * b) / Math.sin(v);
        const _ = n + p - x * m;
        const w = i + m + x * p;
        const A = n + g;
        const k = i + y;
        const E = A + x * y;
        const M = k - x * g;
        return (ff[e] = [c * _ + f * w, d * _ + h * w, c * E + f * M, d * E + h * M, c * A + f * k, d * A + h * k]);
      }
      const mf = ["l", 0, 0, 0, 0, 0, 0, 0];
      function gf(t, e, n) {
        const i = (mf[0] = t[0]);
        if (i === "a" || i === "A") {
          mf[1] = e * t[1];
          mf[2] = n * t[2];
          mf[3] = t[3];
          mf[4] = t[4];
          mf[5] = t[5];
          mf[6] = e * t[6];
          mf[7] = n * t[7];
        } else if (i === "h" || i === "H") {
          mf[1] = e * t[1];
        } else if (i === "v" || i === "V") {
          mf[1] = n * t[1];
        } else {
          for (var r = 1, s = t.length; r < s; ++r) {
            mf[r] = (r % 2 == 1 ? e : n) * t[r];
          }
        }
        return mf;
      }
      function yf(t, e, n, i, r, s) {
        var a,
          o = null,
          u = 0,
          l = 0,
          c = 0,
          f = 0,
          d,
          h,
          p,
          m,
          g = 0,
          y = 0;
        if (n == null) n = 0;
        if (i == null) i = 0;
        if (r == null) r = 1;
        if (s == null) s = r;
        if (t.beginPath) t.beginPath();
        for (var v = 0, b = e.length; v < b; ++v) {
          a = e[v];
          if (r !== 1 || s !== 1) {
            a = gf(a, r, s);
          }
          switch (a[0]) {
            case "l":
              u += a[1];
              l += a[2];
              t.lineTo(u + n, l + i);
              break;
            case "L":
              u = a[1];
              l = a[2];
              t.lineTo(u + n, l + i);
              break;
            case "h":
              u += a[1];
              t.lineTo(u + n, l + i);
              break;
            case "H":
              u = a[1];
              t.lineTo(u + n, l + i);
              break;
            case "v":
              l += a[1];
              t.lineTo(u + n, l + i);
              break;
            case "V":
              l = a[1];
              t.lineTo(u + n, l + i);
              break;
            case "m":
              u += a[1];
              l += a[2];
              g = u;
              y = l;
              t.moveTo(u + n, l + i);
              break;
            case "M":
              u = a[1];
              l = a[2];
              g = u;
              y = l;
              t.moveTo(u + n, l + i);
              break;
            case "c":
              d = u + a[5];
              h = l + a[6];
              c = u + a[3];
              f = l + a[4];
              t.bezierCurveTo(u + a[1] + n, l + a[2] + i, c + n, f + i, d + n, h + i);
              u = d;
              l = h;
              break;
            case "C":
              u = a[5];
              l = a[6];
              c = a[3];
              f = a[4];
              t.bezierCurveTo(a[1] + n, a[2] + i, c + n, f + i, u + n, l + i);
              break;
            case "s":
              d = u + a[3];
              h = l + a[4];
              c = 2 * u - c;
              f = 2 * l - f;
              t.bezierCurveTo(c + n, f + i, u + a[1] + n, l + a[2] + i, d + n, h + i);
              c = u + a[1];
              f = l + a[2];
              u = d;
              l = h;
              break;
            case "S":
              d = a[3];
              h = a[4];
              c = 2 * u - c;
              f = 2 * l - f;
              t.bezierCurveTo(c + n, f + i, a[1] + n, a[2] + i, d + n, h + i);
              u = d;
              l = h;
              c = a[1];
              f = a[2];
              break;
            case "q":
              d = u + a[3];
              h = l + a[4];
              c = u + a[1];
              f = l + a[2];
              t.quadraticCurveTo(c + n, f + i, d + n, h + i);
              u = d;
              l = h;
              break;
            case "Q":
              d = a[3];
              h = a[4];
              t.quadraticCurveTo(a[1] + n, a[2] + i, d + n, h + i);
              u = d;
              l = h;
              c = a[1];
              f = a[2];
              break;
            case "t":
              d = u + a[1];
              h = l + a[2];
              if (o[0].match(/[QqTt]/) === null) {
                c = u;
                f = l;
              } else if (o[0] === "t") {
                c = 2 * u - p;
                f = 2 * l - m;
              } else if (o[0] === "q") {
                c = 2 * u - c;
                f = 2 * l - f;
              }
              p = c;
              m = f;
              t.quadraticCurveTo(c + n, f + i, d + n, h + i);
              u = d;
              l = h;
              c = u + a[1];
              f = l + a[2];
              break;
            case "T":
              d = a[1];
              h = a[2];
              c = 2 * u - c;
              f = 2 * l - f;
              t.quadraticCurveTo(c + n, f + i, d + n, h + i);
              u = d;
              l = h;
              break;
            case "a":
              vf(t, u + n, l + i, [a[1], a[2], a[3], a[4], a[5], a[6] + u + n, a[7] + l + i]);
              u += a[6];
              l += a[7];
              break;
            case "A":
              vf(t, u + n, l + i, [a[1], a[2], a[3], a[4], a[5], a[6] + n, a[7] + i]);
              u = a[6];
              l = a[7];
              break;
            case "z":
            case "Z":
              u = g;
              l = y;
              t.closePath();
              break;
          }
          o = a;
        }
      }
      function vf(t, e, n, i) {
        const r = hf(i[5], i[6], i[0], i[1], i[3], i[4], i[2], e, n);
        for (let s = 0; s < r.length; ++s) {
          const e = pf(r[s]);
          t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
        }
      }
      const bf = 0.5773502691896257;
      const xf = {
        circle: {
          draw: function (t, e) {
            const n = Math.sqrt(e) / 2;
            t.moveTo(n, 0);
            t.arc(0, 0, n, 0, uf);
          },
        },
        cross: {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = n / 2.5;
            t.moveTo(-n, -i);
            t.lineTo(-n, i);
            t.lineTo(-i, i);
            t.lineTo(-i, n);
            t.lineTo(i, n);
            t.lineTo(i, i);
            t.lineTo(n, i);
            t.lineTo(n, -i);
            t.lineTo(i, -i);
            t.lineTo(i, -n);
            t.lineTo(-i, -n);
            t.lineTo(-i, -i);
            t.closePath();
          },
        },
        diamond: {
          draw: function (t, e) {
            const n = Math.sqrt(e) / 2;
            t.moveTo(-n, 0);
            t.lineTo(0, -n);
            t.lineTo(n, 0);
            t.lineTo(0, n);
            t.closePath();
          },
        },
        square: {
          draw: function (t, e) {
            var n = Math.sqrt(e),
              i = -n / 2;
            t.rect(i, i, n, n);
          },
        },
        arrow: {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = n / 7,
              r = n / 2.5,
              s = n / 8;
            t.moveTo(-i, n);
            t.lineTo(i, n);
            t.lineTo(i, -s);
            t.lineTo(r, -s);
            t.lineTo(0, -n);
            t.lineTo(-r, -s);
            t.lineTo(-i, -s);
            t.closePath();
          },
        },
        wedge: {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = lf * n,
              r = i - n * bf,
              s = n / 4;
            t.moveTo(0, -i - r);
            t.lineTo(-s, i - r);
            t.lineTo(s, i - r);
            t.closePath();
          },
        },
        triangle: {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = lf * n,
              r = i - n * bf;
            t.moveTo(0, -i - r);
            t.lineTo(-n, i - r);
            t.lineTo(n, i - r);
            t.closePath();
          },
        },
        "triangle-up": {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = lf * n;
            t.moveTo(0, -i);
            t.lineTo(-n, i);
            t.lineTo(n, i);
            t.closePath();
          },
        },
        "triangle-down": {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = lf * n;
            t.moveTo(0, i);
            t.lineTo(-n, -i);
            t.lineTo(n, -i);
            t.closePath();
          },
        },
        "triangle-right": {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = lf * n;
            t.moveTo(i, 0);
            t.lineTo(-i, -n);
            t.lineTo(-i, n);
            t.closePath();
          },
        },
        "triangle-left": {
          draw: function (t, e) {
            var n = Math.sqrt(e) / 2,
              i = lf * n;
            t.moveTo(-i, 0);
            t.lineTo(i, -n);
            t.lineTo(i, n);
            t.closePath();
          },
        },
        stroke: {
          draw: function (t, e) {
            const n = Math.sqrt(e) / 2;
            t.moveTo(-n, 0);
            t.lineTo(n, 0);
          },
        },
      };
      function _f(t) {
        return (0, p.mQ)(xf, t) ? xf[t] : Af(t);
      }
      var wf = {};
      function Af(t) {
        if (!(0, p.mQ)(wf, t)) {
          const e = nf(t);
          wf[t] = {
            draw: function (t, n) {
              yf(t, e, 0, 0, Math.sqrt(n) / 2);
            },
          };
        }
        return wf[t];
      }
      const kf = 0.448084975506;
      function Ef(t) {
        return t.x;
      }
      function Mf(t) {
        return t.y;
      }
      function Df(t) {
        return t.width;
      }
      function Cf(t) {
        return t.height;
      }
      function Ff(t) {
        return typeof t === "function" ? t : () => +t;
      }
      function Sf(t, e, n) {
        return Math.max(e, Math.min(t, n));
      }
      function Bf() {
        var t = Ef,
          e = Mf,
          n = Df,
          i = Cf,
          r = Ff(0),
          s = r,
          a = r,
          o = r,
          u = null;
        function l(l, c, f) {
          var d,
            h = c != null ? c : +t.call(this, l),
            p = f != null ? f : +e.call(this, l),
            m = +n.call(this, l),
            g = +i.call(this, l),
            y = Math.min(m, g) / 2,
            v = Sf(+r.call(this, l), 0, y),
            b = Sf(+s.call(this, l), 0, y),
            x = Sf(+a.call(this, l), 0, y),
            _ = Sf(+o.call(this, l), 0, y);
          if (!u) u = d = (0, Qo.Ae)();
          if (v <= 0 && b <= 0 && x <= 0 && _ <= 0) {
            u.rect(h, p, m, g);
          } else {
            var w = h + m,
              A = p + g;
            u.moveTo(h + v, p);
            u.lineTo(w - b, p);
            u.bezierCurveTo(w - kf * b, p, w, p + kf * b, w, p + b);
            u.lineTo(w, A - _);
            u.bezierCurveTo(w, A - kf * _, w - kf * _, A, w - _, A);
            u.lineTo(h + x, A);
            u.bezierCurveTo(h + kf * x, A, h, A - kf * x, h, A - x);
            u.lineTo(h, p + v);
            u.bezierCurveTo(h, p + kf * v, h + kf * v, p, h + v, p);
            u.closePath();
          }
          if (d) {
            u = null;
            return d + "" || null;
          }
        }
        l.x = function (e) {
          if (arguments.length) {
            t = Ff(e);
            return l;
          } else {
            return t;
          }
        };
        l.y = function (t) {
          if (arguments.length) {
            e = Ff(t);
            return l;
          } else {
            return e;
          }
        };
        l.width = function (t) {
          if (arguments.length) {
            n = Ff(t);
            return l;
          } else {
            return n;
          }
        };
        l.height = function (t) {
          if (arguments.length) {
            i = Ff(t);
            return l;
          } else {
            return i;
          }
        };
        l.cornerRadius = function (t, e, n, i) {
          if (arguments.length) {
            r = Ff(t);
            s = e != null ? Ff(e) : r;
            o = n != null ? Ff(n) : r;
            a = i != null ? Ff(i) : s;
            return l;
          } else {
            return r;
          }
        };
        l.context = function (t) {
          if (arguments.length) {
            u = t == null ? null : t;
            return l;
          } else {
            return u;
          }
        };
        return l;
      }
      function zf() {
        var t,
          e,
          n,
          i,
          r = null,
          s,
          a,
          o,
          u;
        function l(t, e, n) {
          const i = n / 2;
          if (s) {
            var l = o - e,
              c = t - a;
            if (l || c) {
              var f = Math.hypot(l, c),
                d = (l /= f) * u,
                h = (c /= f) * u,
                p = Math.atan2(c, l);
              r.moveTo(a - d, o - h);
              r.lineTo(t - l * i, e - c * i);
              r.arc(t, e, i, p - Math.PI, p);
              r.lineTo(a + d, o + h);
              r.arc(a, o, u, p, p + Math.PI);
            } else {
              r.arc(t, e, i, 0, uf);
            }
            r.closePath();
          } else {
            s = 1;
          }
          a = t;
          o = e;
          u = i;
        }
        function c(a) {
          var o,
            u = a.length,
            c,
            f = false,
            d;
          if (r == null) r = d = (0, Qo.Ae)();
          for (o = 0; o <= u; ++o) {
            if (!(o < u && i((c = a[o]), o, a)) === f) {
              if ((f = !f)) s = 0;
            }
            if (f) l(+t(c, o, a), +e(c, o, a), +n(c, o, a));
          }
          if (d) {
            r = null;
            return d + "" || null;
          }
        }
        c.x = function (e) {
          if (arguments.length) {
            t = e;
            return c;
          } else {
            return t;
          }
        };
        c.y = function (t) {
          if (arguments.length) {
            e = t;
            return c;
          } else {
            return e;
          }
        };
        c.size = function (t) {
          if (arguments.length) {
            n = t;
            return c;
          } else {
            return n;
          }
        };
        c.defined = function (t) {
          if (arguments.length) {
            i = t;
            return c;
          } else {
            return i;
          }
        };
        c.context = function (t) {
          if (arguments.length) {
            if (t == null) {
              r = null;
            } else {
              r = t;
            }
            return c;
          } else {
            return r;
          }
        };
        return c;
      }
      function $f(t, e) {
        return t != null ? t : e;
      }
      const Rf = (t) => t.x || 0,
        Of = (t) => t.y || 0,
        Tf = (t) => t.width || 0,
        Nf = (t) => t.height || 0,
        Lf = (t) => (t.x || 0) + (t.width || 0),
        Pf = (t) => (t.y || 0) + (t.height || 0),
        qf = (t) => t.startAngle || 0,
        If = (t) => t.endAngle || 0,
        Uf = (t) => t.padAngle || 0,
        jf = (t) => t.innerRadius || 0,
        Gf = (t) => t.outerRadius || 0,
        Yf = (t) => t.cornerRadius || 0,
        Wf = (t) => $f(t.cornerRadiusTopLeft, t.cornerRadius) || 0,
        Xf = (t) => $f(t.cornerRadiusTopRight, t.cornerRadius) || 0,
        Hf = (t) => $f(t.cornerRadiusBottomRight, t.cornerRadius) || 0,
        Vf = (t) => $f(t.cornerRadiusBottomLeft, t.cornerRadius) || 0,
        Qf = (t) => $f(t.size, 64),
        Kf = (t) => t.size || 1,
        Zf = (t) => !(t.defined === false),
        Jf = (t) => _f(t.shape || "circle");
      const td = (0, ho.A)().startAngle(qf).endAngle(If).padAngle(Uf).innerRadius(jf).outerRadius(Gf).cornerRadius(Yf),
        ed = bo().x(Rf).y1(Of).y0(Pf).defined(Zf),
        nd = bo().y(Of).x1(Rf).x0(Lf).defined(Zf),
        id = (0, go.A)().x(Rf).y(Of).defined(Zf),
        rd = Bf().x(Rf).y(Of).width(Tf).height(Nf).cornerRadius(Wf, Xf, Hf, Vf),
        sd = Vo().type(Jf).size(Qf),
        ad = zf().x(Rf).y(Of).defined(Zf).size(Kf);
      function od(t) {
        return t.cornerRadius || t.cornerRadiusTopLeft || t.cornerRadiusTopRight || t.cornerRadiusBottomRight || t.cornerRadiusBottomLeft;
      }
      function ud(t, e) {
        return td.context(t)(e);
      }
      function ld(t, e) {
        const n = e[0],
          i = n.interpolate || "linear";
        return (n.orient === "horizontal" ? nd : ed).curve(Qc(i, n.orient, n.tension)).context(t)(e);
      }
      function cd(t, e) {
        const n = e[0],
          i = n.interpolate || "linear";
        return id.curve(Qc(i, n.orient, n.tension)).context(t)(e);
      }
      function fd(t, e, n, i) {
        return rd.context(t)(e, n, i);
      }
      function dd(t, e) {
        return (e.mark.shape || e.shape).context(t)(e);
      }
      function hd(t, e) {
        return sd.context(t)(e);
      }
      function pd(t, e) {
        return ad.context(t)(e);
      }
      var md = 1;
      function gd() {
        md = 1;
      }
      function yd(t, e, n) {
        var i = e.clip,
          r = t._defs,
          s = e.clip_id || (e.clip_id = "clip" + md++),
          a = r.clipping[s] || (r.clipping[s] = { id: s });
        if ((0, p.Tn)(i)) {
          a.path = i(null);
        } else if (od(n)) {
          a.path = fd(null, n, 0, 0);
        } else {
          a.width = n.width || 0;
          a.height = n.height || 0;
        }
        return "url(#" + s + ")";
      }
      function vd(t) {
        this.clear();
        if (t) this.union(t);
      }
      vd.prototype = {
        clone() {
          return new vd(this);
        },
        clear() {
          this.x1 = +Number.MAX_VALUE;
          this.y1 = +Number.MAX_VALUE;
          this.x2 = -Number.MAX_VALUE;
          this.y2 = -Number.MAX_VALUE;
          return this;
        },
        empty() {
          return this.x1 === +Number.MAX_VALUE && this.y1 === +Number.MAX_VALUE && this.x2 === -Number.MAX_VALUE && this.y2 === -Number.MAX_VALUE;
        },
        equals(t) {
          return this.x1 === t.x1 && this.y1 === t.y1 && this.x2 === t.x2 && this.y2 === t.y2;
        },
        set(t, e, n, i) {
          if (n < t) {
            this.x2 = t;
            this.x1 = n;
          } else {
            this.x1 = t;
            this.x2 = n;
          }
          if (i < e) {
            this.y2 = e;
            this.y1 = i;
          } else {
            this.y1 = e;
            this.y2 = i;
          }
          return this;
        },
        add(t, e) {
          if (t < this.x1) this.x1 = t;
          if (e < this.y1) this.y1 = e;
          if (t > this.x2) this.x2 = t;
          if (e > this.y2) this.y2 = e;
          return this;
        },
        expand(t) {
          this.x1 -= t;
          this.y1 -= t;
          this.x2 += t;
          this.y2 += t;
          return this;
        },
        round() {
          this.x1 = Math.floor(this.x1);
          this.y1 = Math.floor(this.y1);
          this.x2 = Math.ceil(this.x2);
          this.y2 = Math.ceil(this.y2);
          return this;
        },
        scale(t) {
          this.x1 *= t;
          this.y1 *= t;
          this.x2 *= t;
          this.y2 *= t;
          return this;
        },
        translate(t, e) {
          this.x1 += t;
          this.x2 += t;
          this.y1 += e;
          this.y2 += e;
          return this;
        },
        rotate(t, e, n) {
          const i = this.rotatedPoints(t, e, n);
          return this.clear().add(i[0], i[1]).add(i[2], i[3]).add(i[4], i[5]).add(i[6], i[7]);
        },
        rotatedPoints(t, e, n) {
          var { x1: i, y1: r, x2: s, y2: a } = this,
            o = Math.cos(t),
            u = Math.sin(t),
            l = e - e * o + n * u,
            c = n - e * u - n * o;
          return [
            o * i - u * r + l,
            u * i + o * r + c,
            o * i - u * a + l,
            u * i + o * a + c,
            o * s - u * r + l,
            u * s + o * r + c,
            o * s - u * a + l,
            u * s + o * a + c,
          ];
        },
        union(t) {
          if (t.x1 < this.x1) this.x1 = t.x1;
          if (t.y1 < this.y1) this.y1 = t.y1;
          if (t.x2 > this.x2) this.x2 = t.x2;
          if (t.y2 > this.y2) this.y2 = t.y2;
          return this;
        },
        intersect(t) {
          if (t.x1 > this.x1) this.x1 = t.x1;
          if (t.y1 > this.y1) this.y1 = t.y1;
          if (t.x2 < this.x2) this.x2 = t.x2;
          if (t.y2 < this.y2) this.y2 = t.y2;
          return this;
        },
        encloses(t) {
          return t && this.x1 <= t.x1 && this.x2 >= t.x2 && this.y1 <= t.y1 && this.y2 >= t.y2;
        },
        alignsWith(t) {
          return t && (this.x1 == t.x1 || this.x2 == t.x2 || this.y1 == t.y1 || this.y2 == t.y2);
        },
        intersects(t) {
          return t && !(this.x2 < t.x1 || this.x1 > t.x2 || this.y2 < t.y1 || this.y1 > t.y2);
        },
        contains(t, e) {
          return !(t < this.x1 || t > this.x2 || e < this.y1 || e > this.y2);
        },
        width() {
          return this.x2 - this.x1;
        },
        height() {
          return this.y2 - this.y1;
        },
      };
      function bd(t) {
        this.mark = t;
        this.bounds = this.bounds || new vd();
      }
      function xd(t) {
        bd.call(this, t);
        this.items = this.items || [];
      }
      (0, p.B)(xd, bd);
      class _d {
        constructor(t) {
          this._pending = 0;
          this._loader = t || fn();
        }
        pending() {
          return this._pending;
        }
        sanitizeURL(t) {
          const e = this;
          wd(e);
          return e._loader
            .sanitize(t, { context: "href" })
            .then((t) => {
              Ad(e);
              return t;
            })
            .catch(() => {
              Ad(e);
              return null;
            });
        }
        loadImage(t) {
          const e = this,
            n = Zo();
          wd(e);
          return e._loader
            .sanitize(t, { context: "image" })
            .then((t) => {
              const i = t.href;
              if (!i || !n) throw { url: i };
              const r = new n();
              const s = (0, p.mQ)(t, "crossOrigin") ? t.crossOrigin : "anonymous";
              if (s != null) r.crossOrigin = s;
              r.onload = () => Ad(e);
              r.onerror = () => Ad(e);
              r.src = i;
              return r;
            })
            .catch((t) => {
              Ad(e);
              return { complete: false, width: 0, height: 0, src: (t && t.url) || "" };
            });
        }
        ready() {
          const t = this;
          return new Promise((e) => {
            function n(i) {
              if (!t.pending()) e(i);
              else
                setTimeout(() => {
                  n(true);
                }, 10);
            }
            n(false);
          });
        }
      }
      function wd(t) {
        t._pending += 1;
      }
      function Ad(t) {
        t._pending -= 1;
      }
      function kd(t, e, n) {
        if (e.stroke && e.opacity !== 0 && e.strokeOpacity !== 0) {
          const i = e.strokeWidth != null ? +e.strokeWidth : 1;
          t.expand(i + (n ? Ed(e, i) : 0));
        }
        return t;
      }
      function Ed(t, e) {
        return t.strokeJoin && t.strokeJoin !== "miter" ? 0 : e;
      }
      const Md = uf - 1e-8;
      let Dd, Cd, Fd, Sd, Bd, zd, $d, Rd;
      const Od = (t, e) => Dd.add(t, e);
      const Td = (t, e) => Od((Cd = t), (Fd = e));
      const Nd = (t) => Od(t, Dd.y1);
      const Ld = (t) => Od(Dd.x1, t);
      const Pd = (t, e) => Bd * t + $d * e;
      const qd = (t, e) => zd * t + Rd * e;
      const Id = (t, e) => Od(Pd(t, e), qd(t, e));
      const Ud = (t, e) => Td(Pd(t, e), qd(t, e));
      function jd(t, e) {
        Dd = t;
        if (e) {
          Sd = e * sf;
          Bd = Rd = Math.cos(Sd);
          zd = Math.sin(Sd);
          $d = -zd;
        } else {
          Bd = Rd = 1;
          Sd = zd = $d = 0;
        }
        return Gd;
      }
      const Gd = {
        beginPath() {},
        closePath() {},
        moveTo: Ud,
        lineTo: Ud,
        rect(t, e, n, i) {
          if (Sd) {
            Id(t + n, e);
            Id(t + n, e + i);
            Id(t, e + i);
            Ud(t, e);
          } else {
            Od(t + n, e + i);
            Td(t, e);
          }
        },
        quadraticCurveTo(t, e, n, i) {
          const r = Pd(t, e),
            s = qd(t, e),
            a = Pd(n, i),
            o = qd(n, i);
          Yd(Cd, r, a, Nd);
          Yd(Fd, s, o, Ld);
          Td(a, o);
        },
        bezierCurveTo(t, e, n, i, r, s) {
          const a = Pd(t, e),
            o = qd(t, e),
            u = Pd(n, i),
            l = qd(n, i),
            c = Pd(r, s),
            f = qd(r, s);
          Wd(Cd, a, u, c, Nd);
          Wd(Fd, o, l, f, Ld);
          Td(c, f);
        },
        arc(t, e, n, i, r, s) {
          i += Sd;
          r += Sd;
          Cd = n * Math.cos(r) + t;
          Fd = n * Math.sin(r) + e;
          if (Math.abs(r - i) > Md) {
            Od(t - n, e - n);
            Od(t + n, e + n);
          } else {
            const a = (i) => Od(n * Math.cos(i) + t, n * Math.sin(i) + e);
            let o, u;
            a(i);
            a(r);
            if (r !== i) {
              i = i % uf;
              if (i < 0) i += uf;
              r = r % uf;
              if (r < 0) r += uf;
              if (r < i) {
                s = !s;
                o = i;
                i = r;
                r = o;
              }
              if (s) {
                r -= uf;
                o = i - (i % of);
                for (u = 0; u < 4 && o > r; ++u, o -= of) a(o);
              } else {
                o = i - (i % of) + of;
                for (u = 0; u < 4 && o < r; ++u, o = o + of) a(o);
              }
            }
          }
        },
      };
      function Yd(t, e, n, i) {
        const r = (t - e) / (t + n - 2 * e);
        if (0 < r && r < 1) i(t + (e - t) * r);
      }
      function Wd(t, e, n, i, r) {
        const s = i - t + 3 * e - 3 * n,
          a = t + n - 2 * e,
          o = t - e;
        let u = 0,
          l = 0,
          c;
        if (Math.abs(s) > af) {
          c = a * a + o * s;
          if (c >= 0) {
            c = Math.sqrt(c);
            u = (-a + c) / s;
            l = (-a - c) / s;
          }
        } else {
          u = (0.5 * o) / a;
        }
        if (0 < u && u < 1) r(Xd(u, t, e, n, i));
        if (0 < l && l < 1) r(Xd(l, t, e, n, i));
      }
      function Xd(t, e, n, i, r) {
        const s = 1 - t,
          a = s * s,
          o = t * t;
        return a * s * e + 3 * a * t * n + 3 * s * o * i + o * t * r;
      }
      var Hd = (Hd = Ko(1, 1)) ? Hd.getContext("2d") : null;
      const Vd = new vd();
      function Qd(t) {
        return function (e, n) {
          if (!Hd) return true;
          t(Hd, e);
          Vd.clear().union(e.bounds).intersect(n).round();
          const { x1: i, y1: r, x2: s, y2: a } = Vd;
          for (let t = r; t <= a; ++t) {
            for (let e = i; e <= s; ++e) {
              if (Hd.isPointInPath(e, t)) {
                return true;
              }
            }
          }
          return false;
        };
      }
      function Kd(t, e) {
        return e.contains(t.x || 0, t.y || 0);
      }
      function Zd(t, e) {
        const n = t.x || 0,
          i = t.y || 0,
          r = t.width || 0,
          s = t.height || 0;
        return e.intersects(Vd.set(n, i, n + r, i + s));
      }
      function Jd(t, e) {
        const n = t.x || 0,
          i = t.y || 0,
          r = t.x2 != null ? t.x2 : n,
          s = t.y2 != null ? t.y2 : i;
        return th(e, n, i, r, s);
      }
      function th(t, e, n, i, r) {
        const { x1: s, y1: a, x2: o, y2: u } = t,
          l = i - e,
          c = r - n;
        let f = 0,
          d = 1,
          h,
          p,
          m,
          g;
        for (g = 0; g < 4; ++g) {
          if (g === 0) {
            h = -l;
            p = -(s - e);
          }
          if (g === 1) {
            h = l;
            p = o - e;
          }
          if (g === 2) {
            h = -c;
            p = -(a - n);
          }
          if (g === 3) {
            h = c;
            p = u - n;
          }
          if (Math.abs(h) < 1e-10 && p < 0) return false;
          m = p / h;
          if (h < 0) {
            if (m > d) return false;
            else if (m > f) f = m;
          } else if (h > 0) {
            if (m < f) return false;
            else if (m < d) d = m;
          }
        }
        return true;
      }
      function eh(t, e) {
        t.globalCompositeOperation = e.blend || "source-over";
      }
      function nh(t, e) {
        return t == null ? e : t;
      }
      function ih(t, e) {
        const n = e.length;
        for (let i = 0; i < n; ++i) {
          t.addColorStop(e[i].offset, e[i].color);
        }
        return t;
      }
      function rh(t, e, n) {
        const i = n.width(),
          r = n.height();
        let s;
        if (e.gradient === "radial") {
          s = t.createRadialGradient(
            n.x1 + nh(e.x1, 0.5) * i,
            n.y1 + nh(e.y1, 0.5) * r,
            Math.max(i, r) * nh(e.r1, 0),
            n.x1 + nh(e.x2, 0.5) * i,
            n.y1 + nh(e.y2, 0.5) * r,
            Math.max(i, r) * nh(e.r2, 0.5)
          );
        } else {
          const a = nh(e.x1, 0),
            o = nh(e.y1, 0),
            u = nh(e.x2, 1),
            l = nh(e.y2, 0);
          if (a === u || o === l || i === r) {
            s = t.createLinearGradient(n.x1 + a * i, n.y1 + o * r, n.x1 + u * i, n.y1 + l * r);
          } else {
            const n = Ko(Math.ceil(i), Math.ceil(r)),
              s = n.getContext("2d");
            s.scale(i, r);
            s.fillStyle = ih(s.createLinearGradient(a, o, u, l), e.stops);
            s.fillRect(0, 0, i, r);
            return t.createPattern(n, "no-repeat");
          }
        }
        return ih(s, e.stops);
      }
      function sh(t, e, n) {
        return Yc(n) ? rh(t, n, e.bounds) : n;
      }
      function ah(t, e, n) {
        n *= e.fillOpacity == null ? 1 : e.fillOpacity;
        if (n > 0) {
          t.globalAlpha = n;
          t.fillStyle = sh(t, e, e.fill);
          return true;
        } else {
          return false;
        }
      }
      var oh = [];
      function uh(t, e, n) {
        var i = (i = e.strokeWidth) != null ? i : 1;
        if (i <= 0) return false;
        n *= e.strokeOpacity == null ? 1 : e.strokeOpacity;
        if (n > 0) {
          t.globalAlpha = n;
          t.strokeStyle = sh(t, e, e.stroke);
          t.lineWidth = i;
          t.lineCap = e.strokeCap || "butt";
          t.lineJoin = e.strokeJoin || "miter";
          t.miterLimit = e.strokeMiterLimit || 10;
          if (t.setLineDash) {
            t.setLineDash(e.strokeDash || oh);
            t.lineDashOffset = e.strokeDashOffset || 0;
          }
          return true;
        } else {
          return false;
        }
      }
      function lh(t, e) {
        return t.zindex - e.zindex || t.index - e.index;
      }
      function ch(t) {
        if (!t.zdirty) return t.zitems;
        var e = t.items,
          n = [],
          i,
          r,
          s;
        for (r = 0, s = e.length; r < s; ++r) {
          i = e[r];
          i.index = r;
          if (i.zindex) n.push(i);
        }
        t.zdirty = false;
        return (t.zitems = n.sort(lh));
      }
      function fh(t, e) {
        var n = t.items,
          i,
          r;
        if (!n || !n.length) return;
        const s = ch(t);
        if (s && s.length) {
          for (i = 0, r = n.length; i < r; ++i) {
            if (!n[i].zindex) e(n[i]);
          }
          n = s;
        }
        for (i = 0, r = n.length; i < r; ++i) {
          e(n[i]);
        }
      }
      function dh(t, e) {
        var n = t.items,
          i,
          r;
        if (!n || !n.length) return null;
        const s = ch(t);
        if (s && s.length) n = s;
        for (r = n.length; --r >= 0; ) {
          if ((i = e(n[r]))) return i;
        }
        if (n === s) {
          for (n = t.items, r = n.length; --r >= 0; ) {
            if (!n[r].zindex) {
              if ((i = e(n[r]))) return i;
            }
          }
        }
        return null;
      }
      function hh(t) {
        return function (e, n, i) {
          fh(n, (n) => {
            if (!i || i.intersects(n.bounds)) {
              mh(t, e, n, n);
            }
          });
        };
      }
      function ph(t) {
        return function (e, n, i) {
          if (n.items.length && (!i || i.intersects(n.bounds))) {
            mh(t, e, n.items[0], n.items);
          }
        };
      }
      function mh(t, e, n, i) {
        var r = n.opacity == null ? 1 : n.opacity;
        if (r === 0) return;
        if (t(e, i)) return;
        eh(e, n);
        if (n.fill && ah(e, n, r)) {
          e.fill();
        }
        if (n.stroke && uh(e, n, r)) {
          e.stroke();
        }
      }
      function gh(t) {
        t = t || p.vN;
        return function (e, n, i, r, s, a) {
          i *= e.pixelRatio;
          r *= e.pixelRatio;
          return dh(n, (n) => {
            const o = n.bounds;
            if ((o && !o.contains(s, a)) || !o) return;
            if (t(e, n, i, r, s, a)) return n;
          });
        };
      }
      function yh(t, e) {
        return function (n, i, r, s) {
          var a = Array.isArray(i) ? i[0] : i,
            o = e == null ? a.fill : e,
            u = a.stroke && n.isPointInStroke,
            l,
            c;
          if (u) {
            l = a.strokeWidth;
            c = a.strokeCap;
            n.lineWidth = l != null ? l : 1;
            n.lineCap = c != null ? c : "butt";
          }
          return t(n, i) ? false : (o && n.isPointInPath(r, s)) || (u && n.isPointInStroke(r, s));
        };
      }
      function vh(t) {
        return gh(yh(t));
      }
      function bh(t, e) {
        return "translate(" + t + "," + e + ")";
      }
      function xh(t) {
        return "rotate(" + t + ")";
      }
      function _h(t, e) {
        return "scale(" + t + "," + e + ")";
      }
      function wh(t) {
        return bh(t.x || 0, t.y || 0);
      }
      function Ah(t) {
        return bh(t.x || 0, t.y || 0) + (t.angle ? " " + xh(t.angle) : "");
      }
      function kh(t) {
        return bh(t.x || 0, t.y || 0) + (t.angle ? " " + xh(t.angle) : "") + (t.scaleX || t.scaleY ? " " + _h(t.scaleX || 1, t.scaleY || 1) : "");
      }
      function Eh(t, e, n) {
        function i(t, n) {
          t("transform", Ah(n));
          t("d", e(null, n));
        }
        function r(t, n) {
          e(jd(t, n.angle), n);
          return kd(t, n).translate(n.x || 0, n.y || 0);
        }
        function s(t, n) {
          var i = n.x || 0,
            r = n.y || 0,
            s = n.angle || 0;
          t.translate(i, r);
          if (s) t.rotate((s *= sf));
          t.beginPath();
          e(t, n);
          if (s) t.rotate(-s);
          t.translate(-i, -r);
        }
        return { type: t, tag: "path", nested: false, attr: i, bound: r, draw: hh(s), pick: vh(s), isect: n || Qd(s) };
      }
      var Mh = Eh("arc", ud);
      function Dh(t, e) {
        var n = t[0].orient === "horizontal" ? e[1] : e[0],
          i = t[0].orient === "horizontal" ? "y" : "x",
          r = t.length,
          s = +Infinity,
          a,
          o;
        while (--r >= 0) {
          if (t[r].defined === false) continue;
          o = Math.abs(t[r][i] - n);
          if (o < s) {
            s = o;
            a = t[r];
          }
        }
        return a;
      }
      function Ch(t, e) {
        var n = Math.pow(t[0].strokeWidth || 1, 2),
          i = t.length,
          r,
          s,
          a;
        while (--i >= 0) {
          if (t[i].defined === false) continue;
          r = t[i].x - e[0];
          s = t[i].y - e[1];
          a = r * r + s * s;
          if (a < n) return t[i];
        }
        return null;
      }
      function Fh(t, e) {
        var n = t.length,
          i,
          r,
          s;
        while (--n >= 0) {
          if (t[n].defined === false) continue;
          i = t[n].x - e[0];
          r = t[n].y - e[1];
          s = i * i + r * r;
          i = t[n].size || 1;
          if (s < i * i) return t[n];
        }
        return null;
      }
      function Sh(t, e, n) {
        function i(t, n) {
          var i = n.mark.items;
          if (i.length) t("d", e(null, i));
        }
        function r(t, n) {
          var i = n.items;
          if (i.length === 0) {
            return t;
          } else {
            e(jd(t), i);
            return kd(t, i[0]);
          }
        }
        function s(t, n) {
          t.beginPath();
          e(t, n);
        }
        const a = yh(s);
        function o(t, e, n, i, r, s) {
          var o = e.items,
            u = e.bounds;
          if (!o || !o.length || (u && !u.contains(r, s))) {
            return null;
          }
          n *= t.pixelRatio;
          i *= t.pixelRatio;
          return a(t, o, n, i) ? o[0] : null;
        }
        return { type: t, tag: "path", nested: true, attr: i, bound: r, draw: ph(s), pick: o, isect: Kd, tip: n };
      }
      var Bh = Sh("area", ld, Dh);
      function zh(t, e) {
        var n = e.clip;
        t.save();
        if ((0, p.Tn)(n)) {
          t.beginPath();
          n(t);
          t.clip();
        } else {
          $h(t, e.group);
        }
      }
      function $h(t, e) {
        t.beginPath();
        od(e) ? fd(t, e, 0, 0) : t.rect(0, 0, e.width || 0, e.height || 0);
        t.clip();
      }
      function Rh(t) {
        const e = nh(t.strokeWidth, 1);
        return t.strokeOffset != null ? t.strokeOffset : t.stroke && e > 0.5 && e < 1.5 ? 0.5 - Math.abs(e - 1) : 0;
      }
      function Oh(t, e) {
        t("transform", wh(e));
      }
      function Th(t, e) {
        const n = Rh(e);
        t("d", fd(null, e, n, n));
      }
      function Nh(t, e) {
        t("class", "background");
        t("aria-hidden", true);
        Th(t, e);
      }
      function Lh(t, e) {
        t("class", "foreground");
        t("aria-hidden", true);
        if (e.strokeForeground) {
          Th(t, e);
        } else {
          t("d", "");
        }
      }
      function Ph(t, e, n) {
        const i = e.clip ? yd(n, e, e) : null;
        t("clip-path", i);
      }
      function qh(t, e) {
        if (!e.clip && e.items) {
          const n = e.items,
            i = n.length;
          for (let e = 0; e < i; ++e) {
            t.union(n[e].bounds);
          }
        }
        if ((e.clip || e.width || e.height) && !e.noBound) {
          t.add(0, 0).add(e.width || 0, e.height || 0);
        }
        kd(t, e);
        return t.translate(e.x || 0, e.y || 0);
      }
      function Ih(t, e, n, i) {
        const r = Rh(e);
        t.beginPath();
        fd(t, e, (n || 0) + r, (i || 0) + r);
      }
      const Uh = yh(Ih);
      const jh = yh(Ih, false);
      const Gh = yh(Ih, true);
      function Yh(t, e, n, i) {
        fh(e, (e) => {
          const r = e.x || 0,
            s = e.y || 0,
            a = e.strokeForeground,
            o = e.opacity == null ? 1 : e.opacity;
          if ((e.stroke || e.fill) && o) {
            Ih(t, e, r, s);
            eh(t, e);
            if (e.fill && ah(t, e, o)) {
              t.fill();
            }
            if (e.stroke && !a && uh(t, e, o)) {
              t.stroke();
            }
          }
          t.save();
          t.translate(r, s);
          if (e.clip) $h(t, e);
          if (n) n.translate(-r, -s);
          fh(e, (e) => {
            if (e.marktype === "group" || i == null || i.includes(e.marktype)) {
              this.draw(t, e, n, i);
            }
          });
          if (n) n.translate(r, s);
          t.restore();
          if (a && e.stroke && o) {
            Ih(t, e, r, s);
            eh(t, e);
            if (uh(t, e, o)) {
              t.stroke();
            }
          }
        });
      }
      function Wh(t, e, n, i, r, s) {
        if ((e.bounds && !e.bounds.contains(r, s)) || !e.items) {
          return null;
        }
        const a = n * t.pixelRatio,
          o = i * t.pixelRatio;
        return dh(e, (u) => {
          let l, c, f;
          const d = u.bounds;
          if (d && !d.contains(r, s)) return;
          c = u.x || 0;
          f = u.y || 0;
          const h = c + (u.width || 0),
            p = f + (u.height || 0),
            m = u.clip;
          if (m && (r < c || r > h || s < f || s > p)) return;
          t.save();
          t.translate(c, f);
          c = r - c;
          f = s - f;
          if (m && od(u) && !Gh(t, u, a, o)) {
            t.restore();
            return null;
          }
          const g = u.strokeForeground,
            y = e.interactive !== false;
          if (y && g && u.stroke && jh(t, u, a, o)) {
            t.restore();
            return u;
          }
          l = dh(u, (t) => (Xh(t, c, f) ? this.pick(t, n, i, c, f) : null));
          if (!l && y && (u.fill || (!g && u.stroke)) && Uh(t, u, a, o)) {
            l = u;
          }
          t.restore();
          return l || null;
        });
      }
      function Xh(t, e, n) {
        return (t.interactive !== false || t.marktype === "group") && t.bounds && t.bounds.contains(e, n);
      }
      var Hh = {
        type: "group",
        tag: "g",
        nested: false,
        attr: Oh,
        bound: qh,
        draw: Yh,
        pick: Wh,
        isect: Zd,
        content: Ph,
        background: Nh,
        foreground: Lh,
      };
      var Vh = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1" };
      function Qh(t, e) {
        var n = t.image;
        if (!n || (t.url && t.url !== n.url)) {
          n = { complete: false, width: 0, height: 0 };
          e.loadImage(t.url).then((e) => {
            t.image = e;
            t.image.url = t.url;
          });
        }
        return n;
      }
      function Kh(t, e) {
        return t.width != null ? t.width : !e || !e.width ? 0 : t.aspect !== false && t.height ? (t.height * e.width) / e.height : e.width;
      }
      function Zh(t, e) {
        return t.height != null ? t.height : !e || !e.height ? 0 : t.aspect !== false && t.width ? (t.width * e.height) / e.width : e.height;
      }
      function Jh(t, e) {
        return t === "center" ? e / 2 : t === "right" ? e : 0;
      }
      function tp(t, e) {
        return t === "middle" ? e / 2 : t === "bottom" ? e : 0;
      }
      function ep(t, e, n) {
        const i = Qh(e, n),
          r = Kh(e, i),
          s = Zh(e, i),
          a = (e.x || 0) - Jh(e.align, r),
          o = (e.y || 0) - tp(e.baseline, s),
          u = !i.src && i.toDataURL ? i.toDataURL() : i.src || "";
        t("href", u, Vh["xmlns:xlink"], "xlink:href");
        t("transform", bh(a, o));
        t("width", r);
        t("height", s);
        t("preserveAspectRatio", e.aspect === false ? "none" : "xMidYMid");
      }
      function np(t, e) {
        const n = e.image,
          i = Kh(e, n),
          r = Zh(e, n),
          s = (e.x || 0) - Jh(e.align, i),
          a = (e.y || 0) - tp(e.baseline, r);
        return t.set(s, a, s + i, a + r);
      }
      function ip(t, e, n) {
        fh(e, (e) => {
          if (n && !n.intersects(e.bounds)) return;
          const i = Qh(e, this);
          let r = Kh(e, i);
          let s = Zh(e, i);
          if (r === 0 || s === 0) return;
          let a = (e.x || 0) - Jh(e.align, r),
            o = (e.y || 0) - tp(e.baseline, s),
            u,
            l,
            c,
            f;
          if (e.aspect !== false) {
            l = i.width / i.height;
            c = e.width / e.height;
            if (l === l && c === c && l !== c) {
              if (c < l) {
                f = r / l;
                o += (s - f) / 2;
                s = f;
              } else {
                f = s * l;
                a += (r - f) / 2;
                r = f;
              }
            }
          }
          if (i.complete || i.toDataURL) {
            eh(t, e);
            t.globalAlpha = (u = e.opacity) != null ? u : 1;
            t.imageSmoothingEnabled = e.smooth !== false;
            t.drawImage(i, a, o, r, s);
          }
        });
      }
      var rp = {
        type: "image",
        tag: "image",
        nested: false,
        attr: ep,
        bound: np,
        draw: ip,
        pick: gh(),
        isect: p.vN,
        get: Qh,
        xOffset: Jh,
        yOffset: tp,
      };
      var sp = Sh("line", cd, Ch);
      function ap(t, e) {
        var n = e.scaleX || 1,
          i = e.scaleY || 1;
        if (n !== 1 || i !== 1) {
          t("vector-effect", "non-scaling-stroke");
        }
        t("transform", kh(e));
        t("d", e.path);
      }
      function op(t, e) {
        var n = e.path;
        if (n == null) return true;
        var i = e.x || 0,
          r = e.y || 0,
          s = e.scaleX || 1,
          a = e.scaleY || 1,
          o = (e.angle || 0) * sf,
          u = e.pathCache;
        if (!u || u.path !== n) {
          (e.pathCache = u = nf(n)).path = n;
        }
        if (o && t.rotate && t.translate) {
          t.translate(i, r);
          t.rotate(o);
          yf(t, u, 0, 0, s, a);
          t.rotate(-o);
          t.translate(-i, -r);
        } else {
          yf(t, u, i, r, s, a);
        }
      }
      function up(t, e) {
        return op(jd(t, e.angle), e) ? t.set(0, 0, 0, 0) : kd(t, e, true);
      }
      var lp = { type: "path", tag: "path", nested: false, attr: ap, bound: up, draw: hh(op), pick: vh(op), isect: Qd(op) };
      function cp(t, e) {
        t("d", fd(null, e));
      }
      function fp(t, e) {
        var n, i;
        return kd(t.set((n = e.x || 0), (i = e.y || 0), n + e.width || 0, i + e.height || 0), e);
      }
      function dp(t, e) {
        t.beginPath();
        fd(t, e);
      }
      var hp = { type: "rect", tag: "path", nested: false, attr: cp, bound: fp, draw: hh(dp), pick: vh(dp), isect: Zd };
      function pp(t, e) {
        t("transform", wh(e));
        t("x2", e.x2 != null ? e.x2 - (e.x || 0) : 0);
        t("y2", e.y2 != null ? e.y2 - (e.y || 0) : 0);
      }
      function mp(t, e) {
        var n, i;
        return kd(t.set((n = e.x || 0), (i = e.y || 0), e.x2 != null ? e.x2 : n, e.y2 != null ? e.y2 : i), e);
      }
      function gp(t, e, n) {
        var i, r, s, a;
        if (e.stroke && uh(t, e, n)) {
          i = e.x || 0;
          r = e.y || 0;
          s = e.x2 != null ? e.x2 : i;
          a = e.y2 != null ? e.y2 : r;
          t.beginPath();
          t.moveTo(i, r);
          t.lineTo(s, a);
          return true;
        }
        return false;
      }
      function yp(t, e, n) {
        fh(e, (e) => {
          if (n && !n.intersects(e.bounds)) return;
          var i = e.opacity == null ? 1 : e.opacity;
          if (i && gp(t, e, i)) {
            eh(t, e);
            t.stroke();
          }
        });
      }
      function vp(t, e, n, i) {
        if (!t.isPointInStroke) return false;
        return gp(t, e, 1) && t.isPointInStroke(n, i);
      }
      var bp = { type: "rule", tag: "line", nested: false, attr: pp, bound: mp, draw: yp, pick: gh(vp), isect: Jd };
      var xp = Eh("shape", dd);
      var _p = Eh("symbol", hd, Kd);
      const wp = (0, p.EV)();
      var Ap = { height: Fp, measureWidth: Dp, estimateWidth: Ep, width: Ep, canvas: kp };
      kp(true);
      function kp(t) {
        Ap.width = t && Hd ? Dp : Ep;
      }
      function Ep(t, e) {
        return Mp(Rp(t, e), Fp(t));
      }
      function Mp(t, e) {
        return ~~(0.8 * t.length * e);
      }
      function Dp(t, e) {
        return Fp(t) <= 0 || !(e = Rp(t, e)) ? 0 : Cp(e, Lp(t));
      }
      function Cp(t, e) {
        const n = `(${e}) ${t}`;
        let i = wp.get(n);
        if (i === undefined) {
          Hd.font = e;
          i = Hd.measureText(t).width;
          wp.set(n, i);
        }
        return i;
      }
      function Fp(t) {
        return t.fontSize != null ? +t.fontSize || 0 : 11;
      }
      function Sp(t) {
        return t.lineHeight != null ? t.lineHeight : Fp(t) + 2;
      }
      function Bp(t) {
        return (0, p.cy)(t) ? (t.length > 1 ? t : t[0]) : t;
      }
      function zp(t) {
        return Bp(t.lineBreak && t.text && !(0, p.cy)(t.text) ? t.text.split(t.lineBreak) : t.text);
      }
      function $p(t) {
        const e = zp(t);
        return ((0, p.cy)(e) ? e.length - 1 : 0) * Sp(t);
      }
      function Rp(t, e) {
        const n = e == null ? "" : (e + "").trim();
        return t.limit > 0 && n.length ? Tp(t, n) : n;
      }
      function Op(t) {
        if (Ap.width === Dp) {
          const e = Lp(t);
          return (t) => Cp(t, e);
        } else if (Ap.width === Ep) {
          const e = Fp(t);
          return (t) => Mp(t, e);
        } else {
          return (e) => Ap.width(t, e);
        }
      }
      function Tp(t, e) {
        var n = +t.limit,
          i = Op(t);
        if (i(e) < n) return e;
        var r = t.ellipsis || "…",
          s = t.dir === "rtl",
          a = 0,
          o = e.length,
          u;
        n -= i(r);
        if (s) {
          while (a < o) {
            u = (a + o) >>> 1;
            if (i(e.slice(u)) > n) a = u + 1;
            else o = u;
          }
          return r + e.slice(a);
        } else {
          while (a < o) {
            u = 1 + ((a + o) >>> 1);
            if (i(e.slice(0, u)) < n) a = u;
            else o = u - 1;
          }
          return e.slice(0, a) + r;
        }
      }
      function Np(t, e) {
        var n = t.font;
        return (e && n ? String(n).replace(/"/g, "'") : n) || "sans-serif";
      }
      function Lp(t, e) {
        return (
          "" +
          (t.fontStyle ? t.fontStyle + " " : "") +
          (t.fontVariant ? t.fontVariant + " " : "") +
          (t.fontWeight ? t.fontWeight + " " : "") +
          Fp(t) +
          "px " +
          Np(t, e)
        );
      }
      function Pp(t) {
        var e = t.baseline,
          n = Fp(t);
        return Math.round(
          e === "top"
            ? 0.79 * n
            : e === "middle"
              ? 0.3 * n
              : e === "bottom"
                ? -0.21 * n
                : e === "line-top"
                  ? 0.29 * n + 0.5 * Sp(t)
                  : e === "line-bottom"
                    ? 0.29 * n - 0.5 * Sp(t)
                    : 0
        );
      }
      const qp = { left: "start", center: "middle", right: "end" };
      const Ip = new vd();
      function Up(t) {
        var e = t.x || 0,
          n = t.y || 0,
          i = t.radius || 0,
          r;
        if (i) {
          r = (t.theta || 0) - of;
          e += i * Math.cos(r);
          n += i * Math.sin(r);
        }
        Ip.x1 = e;
        Ip.y1 = n;
        return Ip;
      }
      function jp(t, e) {
        var n = e.dx || 0,
          i = (e.dy || 0) + Pp(e),
          r = Up(e),
          s = r.x1,
          a = r.y1,
          o = e.angle || 0,
          u;
        t("text-anchor", qp[e.align] || "start");
        if (o) {
          u = bh(s, a) + " " + xh(o);
          if (n || i) u += " " + bh(n, i);
        } else {
          u = bh(s + n, a + i);
        }
        t("transform", u);
      }
      function Gp(t, e, n) {
        var i = Ap.height(e),
          r = e.align,
          s = Up(e),
          a = s.x1,
          o = s.y1,
          u = e.dx || 0,
          l = (e.dy || 0) + Pp(e) - Math.round(0.8 * i),
          c = zp(e),
          f;
        if ((0, p.cy)(c)) {
          i += Sp(e) * (c.length - 1);
          f = c.reduce((t, n) => Math.max(t, Ap.width(e, n)), 0);
        } else {
          f = Ap.width(e, c);
        }
        if (r === "center") {
          u -= f / 2;
        } else if (r === "right") {
          u -= f;
        } else;
        t.set((u += a), (l += o), u + f, l + i);
        if (e.angle && !n) {
          t.rotate(e.angle * sf, a, o);
        } else if (n === 2) {
          return t.rotatedPoints(e.angle * sf, a, o);
        }
        return t;
      }
      function Yp(t, e, n) {
        fh(e, (e) => {
          var i = e.opacity == null ? 1 : e.opacity,
            r,
            s,
            a,
            o,
            u,
            l,
            c;
          if ((n && !n.intersects(e.bounds)) || i === 0 || e.fontSize <= 0 || e.text == null || e.text.length === 0) return;
          t.font = Lp(e);
          t.textAlign = e.align || "left";
          r = Up(e);
          (s = r.x1), (a = r.y1);
          if (e.angle) {
            t.save();
            t.translate(s, a);
            t.rotate(e.angle * sf);
            s = a = 0;
          }
          s += e.dx || 0;
          a += (e.dy || 0) + Pp(e);
          l = zp(e);
          eh(t, e);
          if ((0, p.cy)(l)) {
            u = Sp(e);
            for (o = 0; o < l.length; ++o) {
              c = Rp(e, l[o]);
              if (e.fill && ah(t, e, i)) {
                t.fillText(c, s, a);
              }
              if (e.stroke && uh(t, e, i)) {
                t.strokeText(c, s, a);
              }
              a += u;
            }
          } else {
            c = Rp(e, l);
            if (e.fill && ah(t, e, i)) {
              t.fillText(c, s, a);
            }
            if (e.stroke && uh(t, e, i)) {
              t.strokeText(c, s, a);
            }
          }
          if (e.angle) t.restore();
        });
      }
      function Wp(t, e, n, i, r, s) {
        if (e.fontSize <= 0) return false;
        if (!e.angle) return true;
        var a = Up(e),
          o = a.x1,
          u = a.y1,
          l = Gp(Ip, e, 1),
          c = -e.angle * sf,
          f = Math.cos(c),
          d = Math.sin(c),
          h = f * r - d * s + (o - f * o + d * u),
          p = d * r + f * s + (u - d * o - f * u);
        return l.contains(h, p);
      }
      function Xp(t, e) {
        const n = Gp(Ip, t, 2);
        return th(e, n[0], n[1], n[2], n[3]) || th(e, n[0], n[1], n[4], n[5]) || th(e, n[4], n[5], n[6], n[7]) || th(e, n[2], n[3], n[6], n[7]);
      }
      var Hp = { type: "text", tag: "text", nested: false, attr: jp, bound: Gp, draw: Yp, pick: gh(Wp), isect: Xp };
      var Vp = Sh("trail", pd, Fh);
      var Qp = { arc: Mh, area: Bh, group: Hh, image: rp, line: sp, path: lp, rect: hp, rule: bp, shape: xp, symbol: _p, text: Hp, trail: Vp };
      function Kp(t, e, n) {
        var i = Qp[t.mark.marktype],
          r = e || i.bound;
        if (i.nested) t = t.mark;
        return r(t.bounds || (t.bounds = new vd()), t, n);
      }
      var Zp = { mark: null };
      function Jp(t, e, n) {
        var i = Qp[t.marktype],
          r = i.bound,
          s = t.items,
          a = s && s.length,
          o,
          u,
          l,
          c;
        if (i.nested) {
          if (a) {
            l = s[0];
          } else {
            Zp.mark = t;
            l = Zp;
          }
          c = Kp(l, r, n);
          e = (e && e.union(c)) || c;
          return e;
        }
        e = e || (t.bounds && t.bounds.clear()) || new vd();
        if (a) {
          for (o = 0, u = s.length; o < u; ++o) {
            e.union(Kp(s[o], r, n));
          }
        }
        return (t.bounds = e);
      }
      const tm = [
        "marktype",
        "name",
        "role",
        "interactive",
        "clip",
        "items",
        "zindex",
        "x",
        "y",
        "width",
        "height",
        "align",
        "baseline",
        "fill",
        "fillOpacity",
        "opacity",
        "blend",
        "stroke",
        "strokeOpacity",
        "strokeWidth",
        "strokeCap",
        "strokeDash",
        "strokeDashOffset",
        "strokeForeground",
        "strokeOffset",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "cornerRadius",
        "padAngle",
        "cornerRadiusTopLeft",
        "cornerRadiusTopRight",
        "cornerRadiusBottomLeft",
        "cornerRadiusBottomRight",
        "interpolate",
        "tension",
        "orient",
        "defined",
        "url",
        "aspect",
        "smooth",
        "path",
        "scaleX",
        "scaleY",
        "x2",
        "y2",
        "size",
        "shape",
        "text",
        "angle",
        "theta",
        "radius",
        "dir",
        "dx",
        "dy",
        "ellipsis",
        "limit",
        "lineBreak",
        "lineHeight",
        "font",
        "fontSize",
        "fontWeight",
        "fontStyle",
        "fontVariant",
        "description",
        "aria",
        "ariaRole",
        "ariaRoleDescription",
      ];
      function em(t, e) {
        return JSON.stringify(t, tm, e);
      }
      function nm(t) {
        const e = typeof t === "string" ? JSON.parse(t) : t;
        return im(e);
      }
      function im(t) {
        var e = t.marktype,
          n = t.items,
          i,
          r,
          s;
        if (n) {
          for (r = 0, s = n.length; r < s; ++r) {
            i = e ? "mark" : "group";
            n[r][i] = t;
            if (n[r].zindex) n[r][i].zdirty = true;
            if ("group" === (e || i)) im(n[r]);
          }
        }
        if (e) Jp(t);
        return t;
      }
      class rm {
        constructor(t) {
          if (arguments.length) {
            this.root = nm(t);
          } else {
            this.root = sm({ marktype: "group", name: "root", role: "frame" });
            this.root.items = [new xd(this.root)];
          }
        }
        toJSON(t) {
          return em(this.root, t || 0);
        }
        mark(t, e, n) {
          e = e || this.root.items[0];
          const i = sm(t, e);
          e.items[n] = i;
          if (i.zindex) i.group.zdirty = true;
          return i;
        }
      }
      function sm(t, e) {
        const n = {
          bounds: new vd(),
          clip: !!t.clip,
          group: e,
          interactive: t.interactive === false ? false : true,
          items: [],
          marktype: t.marktype,
          name: t.name || undefined,
          role: t.role || undefined,
          zindex: t.zindex || 0,
        };
        if (t.aria != null) {
          n.aria = t.aria;
        }
        if (t.description) {
          n.description = t.description;
        }
        return n;
      }
      function am(t, e, n) {
        if (!t && typeof document !== "undefined" && document.createElement) {
          t = document;
        }
        return t ? (n ? t.createElementNS(n, e) : t.createElement(e)) : null;
      }
      function om(t, e) {
        e = e.toLowerCase();
        var n = t.childNodes,
          i = 0,
          r = n.length;
        for (; i < r; ++i)
          if (n[i].tagName.toLowerCase() === e) {
            return n[i];
          }
      }
      function um(t, e, n, i) {
        var r = t.childNodes[e],
          s;
        if (!r || r.tagName.toLowerCase() !== n.toLowerCase()) {
          s = r || null;
          r = am(t.ownerDocument, n, i);
          t.insertBefore(r, s);
        }
        return r;
      }
      function lm(t, e) {
        var n = t.childNodes,
          i = n.length;
        while (i > e) t.removeChild(n[--i]);
        return t;
      }
      function cm(t) {
        return "mark-" + t.marktype + (t.role ? " role-" + t.role : "") + (t.name ? " " + t.name : "");
      }
      function fm(t, e) {
        const n = e.getBoundingClientRect();
        return [t.clientX - n.left - (e.clientLeft || 0), t.clientY - n.top - (e.clientTop || 0)];
      }
      function dm(t, e, n, i) {
        var r = t && t.mark,
          s,
          a;
        if (r && (s = Qp[r.marktype]).tip) {
          a = fm(e, n);
          a[0] -= i[0];
          a[1] -= i[1];
          while ((t = t.mark.group)) {
            a[0] -= t.x || 0;
            a[1] -= t.y || 0;
          }
          t = s.tip(r.items, a);
        }
        return t;
      }
      class hm {
        constructor(t, e) {
          this._active = null;
          this._handlers = {};
          this._loader = t || fn();
          this._tooltip = e || pm;
        }
        initialize(t, e, n) {
          this._el = t;
          this._obj = n || null;
          return this.origin(e);
        }
        element() {
          return this._el;
        }
        canvas() {
          return this._el && this._el.firstChild;
        }
        origin(t) {
          if (arguments.length) {
            this._origin = t || [0, 0];
            return this;
          } else {
            return this._origin.slice();
          }
        }
        scene(t) {
          if (!arguments.length) return this._scene;
          this._scene = t;
          return this;
        }
        on() {}
        off() {}
        _handlerIndex(t, e, n) {
          for (let i = t ? t.length : 0; --i >= 0; ) {
            if (t[i].type === e && (!n || t[i].handler === n)) {
              return i;
            }
          }
          return -1;
        }
        handlers(t) {
          const e = this._handlers,
            n = [];
          if (t) {
            n.push(...e[this.eventName(t)]);
          } else {
            for (const t in e) {
              n.push(...e[t]);
            }
          }
          return n;
        }
        eventName(t) {
          const e = t.indexOf(".");
          return e < 0 ? t : t.slice(0, e);
        }
        handleHref(t, e, n) {
          this._loader
            .sanitize(n, { context: "href" })
            .then((e) => {
              const n = new MouseEvent(t.type, t),
                i = am(null, "a");
              for (const t in e) i.setAttribute(t, e[t]);
              i.dispatchEvent(n);
            })
            .catch(() => {});
        }
        handleTooltip(t, e, n) {
          if (e && e.tooltip != null) {
            e = dm(e, t, this.canvas(), this._origin);
            const i = (n && e && e.tooltip) || null;
            this._tooltip.call(this._obj, this, t, e, i);
          }
        }
        getItemBoundingClientRect(t) {
          const e = this.canvas();
          if (!e) return;
          const n = e.getBoundingClientRect(),
            i = this._origin,
            r = t.bounds,
            s = r.width(),
            a = r.height();
          let o = r.x1 + i[0] + n.left,
            u = r.y1 + i[1] + n.top;
          while (t.mark && (t = t.mark.group)) {
            o += t.x || 0;
            u += t.y || 0;
          }
          return { x: o, y: u, width: s, height: a, left: o, top: u, right: o + s, bottom: u + a };
        }
      }
      function pm(t, e, n, i) {
        t.element().setAttribute("title", i || "");
      }
      class mm {
        constructor(t) {
          this._el = null;
          this._bgcolor = null;
          this._loader = new _d(t);
        }
        initialize(t, e, n, i, r) {
          this._el = t;
          return this.resize(e, n, i, r);
        }
        element() {
          return this._el;
        }
        canvas() {
          return this._el && this._el.firstChild;
        }
        background(t) {
          if (arguments.length === 0) return this._bgcolor;
          this._bgcolor = t;
          return this;
        }
        resize(t, e, n, i) {
          this._width = t;
          this._height = e;
          this._origin = n || [0, 0];
          this._scale = i || 1;
          return this;
        }
        dirty() {}
        render(t, e) {
          const n = this;
          n._call = function () {
            n._render(t, e);
          };
          n._call();
          n._call = null;
          return n;
        }
        _render() {}
        renderAsync(t, e) {
          const n = this.render(t, e);
          return this._ready ? this._ready.then(() => n) : Promise.resolve(n);
        }
        _load(t, e) {
          var n = this,
            i = n._loader[t](e);
          if (!n._ready) {
            const t = n._call;
            n._ready = n._loader.ready().then((e) => {
              if (e) t();
              n._ready = null;
            });
          }
          return i;
        }
        sanitizeURL(t) {
          return this._load("sanitizeURL", t);
        }
        loadImage(t) {
          return this._load("loadImage", t);
        }
      }
      const gm = "keydown";
      const ym = "keypress";
      const vm = "keyup";
      const bm = "dragenter";
      const xm = "dragleave";
      const _m = "dragover";
      const wm = "pointerdown";
      const Am = "pointerup";
      const km = "pointermove";
      const Em = "pointerout";
      const Mm = "pointerover";
      const Dm = "mousedown";
      const Cm = "mouseup";
      const Fm = "mousemove";
      const Sm = "mouseout";
      const Bm = "mouseover";
      const zm = "click";
      const $m = "dblclick";
      const Rm = "wheel";
      const Om = "mousewheel";
      const Tm = "touchstart";
      const Nm = "touchmove";
      const Lm = "touchend";
      const Pm = [gm, ym, vm, bm, xm, _m, wm, Am, km, Em, Mm, Dm, Cm, Fm, Sm, Bm, zm, $m, Rm, Om, Tm, Nm, Lm];
      const qm = km;
      const Im = Sm;
      const Um = zm;
      class jm extends hm {
        constructor(t, e) {
          super(t, e);
          this._down = null;
          this._touch = null;
          this._first = true;
          this._events = {};
          this.events = Pm;
          this.pointermove = Hm([km, Fm], [Mm, Bm], [Em, Sm]);
          (this.dragover = Hm([_m], [bm], [xm])), (this.pointerout = Vm([Em, Sm]));
          this.dragleave = Vm([xm]);
        }
        initialize(t, e, n) {
          this._canvas = t && om(t, "canvas");
          [zm, Dm, wm, km, Em, xm].forEach((t) => Ym(this, t));
          return super.initialize(t, e, n);
        }
        canvas() {
          return this._canvas;
        }
        context() {
          return this._canvas.getContext("2d");
        }
        DOMMouseScroll(t) {
          this.fire(Om, t);
        }
        pointerdown(t) {
          this._down = this._active;
          this.fire(wm, t);
        }
        mousedown(t) {
          this._down = this._active;
          this.fire(Dm, t);
        }
        click(t) {
          if (this._down === this._active) {
            this.fire(zm, t);
            this._down = null;
          }
        }
        touchstart(t) {
          this._touch = this.pickEvent(t.changedTouches[0]);
          if (this._first) {
            this._active = this._touch;
            this._first = false;
          }
          this.fire(Tm, t, true);
        }
        touchmove(t) {
          this.fire(Nm, t, true);
        }
        touchend(t) {
          this.fire(Lm, t, true);
          this._touch = null;
        }
        fire(t, e, n) {
          const i = n ? this._touch : this._active,
            r = this._handlers[t];
          e.vegaType = t;
          if (t === Um && i && i.href) {
            this.handleHref(e, i, i.href);
          } else if (t === qm || t === Im) {
            this.handleTooltip(e, i, t !== Im);
          }
          if (r) {
            for (let t = 0, n = r.length; t < n; ++t) {
              r[t].handler.call(this._obj, e, i);
            }
          }
        }
        on(t, e) {
          const n = this.eventName(t),
            i = this._handlers,
            r = this._handlerIndex(i[n], t, e);
          if (r < 0) {
            Ym(this, t);
            (i[n] || (i[n] = [])).push({ type: t, handler: e });
          }
          return this;
        }
        off(t, e) {
          const n = this.eventName(t),
            i = this._handlers[n],
            r = this._handlerIndex(i, t, e);
          if (r >= 0) {
            i.splice(r, 1);
          }
          return this;
        }
        pickEvent(t) {
          const e = fm(t, this._canvas),
            n = this._origin;
          return this.pick(this._scene, e[0], e[1], e[0] - n[0], e[1] - n[1]);
        }
        pick(t, e, n, i, r) {
          const s = this.context(),
            a = Qp[t.marktype];
          return a.pick.call(this, s, t, e, n, i, r);
        }
      }
      const Gm = (t) => (t === Tm || t === Nm || t === Lm ? [Tm, Nm, Lm] : [t]);
      function Ym(t, e) {
        Gm(e).forEach((e) => Wm(t, e));
      }
      function Wm(t, e) {
        const n = t.canvas();
        if (n && !t._events[e]) {
          t._events[e] = 1;
          n.addEventListener(e, t[e] ? (n) => t[e](n) : (n) => t.fire(e, n));
        }
      }
      function Xm(t, e, n) {
        e.forEach((e) => t.fire(e, n));
      }
      function Hm(t, e, n) {
        return function (i) {
          const r = this._active,
            s = this.pickEvent(i);
          if (s === r) {
            Xm(this, t, i);
          } else {
            if (!r || !r.exit) {
              Xm(this, n, i);
            }
            this._active = s;
            Xm(this, e, i);
            Xm(this, t, i);
          }
        };
      }
      function Vm(t) {
        return function (e) {
          Xm(this, t, e);
          this._active = null;
        };
      }
      function Qm() {
        return typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      }
      function Km(t, e, n, i, r, s) {
        const a = typeof HTMLElement !== "undefined" && t instanceof HTMLElement && t.parentNode != null,
          o = t.getContext("2d"),
          u = a ? Qm() : r;
        t.width = e * u;
        t.height = n * u;
        for (const l in s) {
          o[l] = s[l];
        }
        if (a && u !== 1) {
          t.style.width = e + "px";
          t.style.height = n + "px";
        }
        o.pixelRatio = u;
        o.setTransform(u, 0, 0, u, u * i[0], u * i[1]);
        return t;
      }
      class Zm extends mm {
        constructor(t) {
          super(t);
          this._options = {};
          this._redraw = false;
          this._dirty = new vd();
          this._tempb = new vd();
        }
        initialize(t, e, n, i, r, s) {
          this._options = s || {};
          this._canvas = this._options.externalContext ? null : Ko(1, 1, this._options.type);
          if (t && this._canvas) {
            lm(t, 0).appendChild(this._canvas);
            this._canvas.setAttribute("class", "marks");
          }
          return super.initialize(t, e, n, i, r);
        }
        resize(t, e, n, i) {
          super.resize(t, e, n, i);
          if (this._canvas) {
            Km(this._canvas, this._width, this._height, this._origin, this._scale, this._options.context);
          } else {
            const t = this._options.externalContext;
            if (!t) (0, p.z3)("CanvasRenderer is missing a valid canvas or context");
            t.scale(this._scale, this._scale);
            t.translate(this._origin[0], this._origin[1]);
          }
          this._redraw = true;
          return this;
        }
        canvas() {
          return this._canvas;
        }
        context() {
          return this._options.externalContext || (this._canvas ? this._canvas.getContext("2d") : null);
        }
        dirty(t) {
          const e = this._tempb.clear().union(t.bounds);
          let n = t.mark.group;
          while (n) {
            e.translate(n.x || 0, n.y || 0);
            n = n.mark.group;
          }
          this._dirty.union(e);
        }
        _render(t, e) {
          const n = this.context(),
            i = this._origin,
            r = this._width,
            s = this._height,
            a = this._dirty,
            o = Jm(i, r, s);
          n.save();
          const u = this._redraw || a.empty() ? ((this._redraw = false), o.expand(1)) : tg(n, o.intersect(a), i);
          this.clear(-i[0], -i[1], r, s);
          this.draw(n, t, u, e);
          n.restore();
          a.clear();
          return this;
        }
        draw(t, e, n, i) {
          if (e.marktype !== "group" && i != null && !i.includes(e.marktype)) {
            return;
          }
          const r = Qp[e.marktype];
          if (e.clip) zh(t, e);
          r.draw.call(this, t, e, n, i);
          if (e.clip) t.restore();
        }
        clear(t, e, n, i) {
          const r = this._options,
            s = this.context();
          if (r.type !== "pdf" && !r.externalContext) {
            s.clearRect(t, e, n, i);
          }
          if (this._bgcolor != null) {
            s.fillStyle = this._bgcolor;
            s.fillRect(t, e, n, i);
          }
        }
      }
      const Jm = (t, e, n) => new vd().set(0, 0, e, n).translate(-t[0], -t[1]);
      function tg(t, e, n) {
        e.expand(1).round();
        if (t.pixelRatio % 1) {
          e.scale(t.pixelRatio)
            .round()
            .scale(1 / t.pixelRatio);
        }
        e.translate(-(n[0] % 1), -(n[1] % 1));
        t.beginPath();
        t.rect(e.x1, e.y1, e.width(), e.height());
        t.clip();
        return e;
      }
      class eg extends hm {
        constructor(t, e) {
          super(t, e);
          const n = this;
          n._hrefHandler = ng(n, (t, e) => {
            if (e && e.href) n.handleHref(t, e, e.href);
          });
          n._tooltipHandler = ng(n, (t, e) => {
            n.handleTooltip(t, e, t.type !== Im);
          });
        }
        initialize(t, e, n) {
          let i = this._svg;
          if (i) {
            i.removeEventListener(Um, this._hrefHandler);
            i.removeEventListener(qm, this._tooltipHandler);
            i.removeEventListener(Im, this._tooltipHandler);
          }
          this._svg = i = t && om(t, "svg");
          if (i) {
            i.addEventListener(Um, this._hrefHandler);
            i.addEventListener(qm, this._tooltipHandler);
            i.addEventListener(Im, this._tooltipHandler);
          }
          return super.initialize(t, e, n);
        }
        canvas() {
          return this._svg;
        }
        on(t, e) {
          const n = this.eventName(t),
            i = this._handlers,
            r = this._handlerIndex(i[n], t, e);
          if (r < 0) {
            const r = { type: t, handler: e, listener: ng(this, e) };
            (i[n] || (i[n] = [])).push(r);
            if (this._svg) {
              this._svg.addEventListener(n, r.listener);
            }
          }
          return this;
        }
        off(t, e) {
          const n = this.eventName(t),
            i = this._handlers[n],
            r = this._handlerIndex(i, t, e);
          if (r >= 0) {
            if (this._svg) {
              this._svg.removeEventListener(n, i[r].listener);
            }
            i.splice(r, 1);
          }
          return this;
        }
      }
      const ng = (t, e) => (n) => {
        let i = n.target.__data__;
        i = Array.isArray(i) ? i[0] : i;
        n.vegaType = n.type;
        e.call(t._obj, n, i);
      };
      const ig = "aria-hidden";
      const rg = "aria-label";
      const sg = "role";
      const ag = "aria-roledescription";
      const og = "graphics-object";
      const ug = "graphics-symbol";
      const lg = (t, e, n) => ({ [sg]: t, [ag]: e, [rg]: n || undefined });
      const cg = (0, p.M1)([
        "axis-domain",
        "axis-grid",
        "axis-label",
        "axis-tick",
        "axis-title",
        "legend-band",
        "legend-entry",
        "legend-gradient",
        "legend-label",
        "legend-title",
        "legend-symbol",
        "title",
      ]);
      const fg = {
        axis: { desc: "axis", caption: vg },
        legend: { desc: "legend", caption: bg },
        "title-text": { desc: "title", caption: (t) => `Title text '${yg(t)}'` },
        "title-subtitle": { desc: "subtitle", caption: (t) => `Subtitle text '${yg(t)}'` },
      };
      const dg = { ariaRole: sg, ariaRoleDescription: ag, description: rg };
      function hg(t, e) {
        const n = e.aria === false;
        t(ig, n || undefined);
        if (n || e.description == null) {
          for (const e in dg) {
            t(dg[e], undefined);
          }
        } else {
          const n = e.mark.marktype;
          t(rg, e.description);
          t(sg, e.ariaRole || (n === "group" ? og : ug));
          t(ag, e.ariaRoleDescription || `${n} mark`);
        }
      }
      function pg(t) {
        return t.aria === false ? { [ig]: true } : cg[t.role] ? null : fg[t.role] ? gg(t, fg[t.role]) : mg(t);
      }
      function mg(t) {
        const e = t.marktype;
        const n = e === "group" || e === "text" || t.items.some((t) => t.description != null && t.aria !== false);
        return lg(n ? og : ug, `${e} mark container`, t.description);
      }
      function gg(t, e) {
        try {
          const n = t.items[0],
            i = e.caption || (() => "");
          return lg(e.role || ug, e.desc, n.description || i(n));
        } catch (n) {
          return null;
        }
      }
      function yg(t) {
        return (0, p.YO)(t.text).join(" ");
      }
      function vg(t) {
        const e = t.datum,
          n = t.orient,
          i = e.title ? xg(t) : null,
          r = t.context,
          s = r.scales[e.scale].value,
          a = r.dataflow.locale(),
          o = s.type,
          u = n === "left" || n === "right" ? "Y" : "X";
        return `${u}-axis` + (i ? ` titled '${i}'` : "") + ` for a ${Vl(o) ? "discrete" : o} scale` + ` with ${Ic(a, s, t)}`;
      }
      function bg(t) {
        const e = t.datum,
          n = e.title ? xg(t) : null,
          i = `${e.type || ""} legend`.trim(),
          r = e.scales,
          s = Object.keys(r),
          a = t.context,
          o = a.scales[r[s[0]]].value,
          u = a.dataflow.locale();
        return wg(i) + (n ? ` titled '${n}'` : "") + ` for ${_g(s)}` + ` with ${Ic(u, o, t)}`;
      }
      function xg(t) {
        try {
          return (0, p.YO)((0, p.se)(t.items).items[0].text).join(" ");
        } catch (e) {
          return null;
        }
      }
      function _g(t) {
        t = t.map((t) => t + (t === "fill" || t === "stroke" ? " color" : ""));
        return t.length < 2 ? t[0] : t.slice(0, -1).join(", ") + " and " + (0, p.se)(t);
      }
      function wg(t) {
        return t.length ? t[0].toUpperCase() + t.slice(1) : t;
      }
      const Ag = (t) => (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const kg = (t) => Ag(t).replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      function Eg() {
        let t = "",
          e = "",
          n = "";
        const i = [],
          r = () => (e = n = ""),
          s = (s) => {
            if (e) {
              t += `${e}>${n}`;
              r();
            }
            i.push(s);
          },
          a = (t, n) => {
            if (n != null) e += ` ${t}="${kg(n)}"`;
            return o;
          },
          o = {
            open(t) {
              s(t);
              e = "<" + t;
              for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
                i[r - 1] = arguments[r];
              }
              for (const e of i) {
                for (const t in e) a(t, e[t]);
              }
              return o;
            },
            close() {
              const s = i.pop();
              if (e) {
                t += e + (n ? `>${n}</${s}>` : "/>");
              } else {
                t += `</${s}>`;
              }
              r();
              return o;
            },
            attr: a,
            text: (t) => ((n += Ag(t)), o),
            toString: () => t,
          };
        return o;
      }
      const Mg = (t) => Dg(Eg(), t) + "";
      function Dg(t, e) {
        t.open(e.tagName);
        if (e.hasAttributes()) {
          const n = e.attributes,
            i = n.length;
          for (let e = 0; e < i; ++e) {
            t.attr(n[e].name, n[e].value);
          }
        }
        if (e.hasChildNodes()) {
          const n = e.childNodes;
          for (const e of n) {
            e.nodeType === 3 ? t.text(e.nodeValue) : Dg(t, e);
          }
        }
        return t.close();
      }
      const Cg = {
        fill: "fill",
        fillOpacity: "fill-opacity",
        stroke: "stroke",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        strokeCap: "stroke-linecap",
        strokeJoin: "stroke-linejoin",
        strokeDash: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeMiterLimit: "stroke-miterlimit",
        opacity: "opacity",
      };
      const Fg = { blend: "mix-blend-mode" };
      const Sg = { fill: "none", "stroke-miterlimit": 10 };
      const Bg = 0,
        zg = "http://www.w3.org/2000/xmlns/",
        $g = Vh.xmlns;
      class Rg extends mm {
        constructor(t) {
          super(t);
          this._dirtyID = 0;
          this._dirty = [];
          this._svg = null;
          this._root = null;
          this._defs = null;
        }
        initialize(t, e, n, i, r) {
          this._defs = {};
          this._clearDefs();
          if (t) {
            this._svg = um(t, 0, "svg", $g);
            this._svg.setAttributeNS(zg, "xmlns", $g);
            this._svg.setAttributeNS(zg, "xmlns:xlink", Vh["xmlns:xlink"]);
            this._svg.setAttribute("version", Vh["version"]);
            this._svg.setAttribute("class", "marks");
            lm(t, 1);
            this._root = um(this._svg, Bg, "g", $g);
            Wg(this._root, Sg);
            lm(this._svg, Bg + 1);
          }
          this.background(this._bgcolor);
          return super.initialize(t, e, n, i, r);
        }
        background(t) {
          if (arguments.length && this._svg) {
            this._svg.style.setProperty("background-color", t);
          }
          return super.background(...arguments);
        }
        resize(t, e, n, i) {
          super.resize(t, e, n, i);
          if (this._svg) {
            Wg(this._svg, { width: this._width * this._scale, height: this._height * this._scale, viewBox: `0 0 ${this._width} ${this._height}` });
            this._root.setAttribute("transform", `translate(${this._origin})`);
          }
          this._dirty = [];
          return this;
        }
        canvas() {
          return this._svg;
        }
        svg() {
          const t = this._svg,
            e = this._bgcolor;
          if (!t) return null;
          let n;
          if (e) {
            t.removeAttribute("style");
            n = um(t, Bg, "rect", $g);
            Wg(n, { width: this._width, height: this._height, fill: e });
          }
          const i = Mg(t);
          if (e) {
            t.removeChild(n);
            this._svg.style.setProperty("background-color", e);
          }
          return i;
        }
        _render(t, e) {
          if (this._dirtyCheck()) {
            if (this._dirtyAll) this._clearDefs();
            this.mark(this._root, t, undefined, e);
            lm(this._root, 1);
          }
          this.defs();
          this._dirty = [];
          ++this._dirtyID;
          return this;
        }
        dirty(t) {
          if (t.dirty !== this._dirtyID) {
            t.dirty = this._dirtyID;
            this._dirty.push(t);
          }
        }
        isDirty(t) {
          return this._dirtyAll || !t._svg || !t._svg.ownerSVGElement || t.dirty === this._dirtyID;
        }
        _dirtyCheck() {
          this._dirtyAll = true;
          const t = this._dirty;
          if (!t.length || !this._dirtyID) return true;
          const e = ++this._dirtyID;
          let n, i, r, s, a, o, u;
          for (a = 0, o = t.length; a < o; ++a) {
            n = t[a];
            i = n.mark;
            if (i.marktype !== r) {
              r = i.marktype;
              s = Qp[r];
            }
            if (i.zdirty && i.dirty !== e) {
              this._dirtyAll = false;
              Og(n, e);
              i.items.forEach((t) => {
                t.dirty = e;
              });
            }
            if (i.zdirty) continue;
            if (n.exit) {
              if (s.nested && i.items.length) {
                u = i.items[0];
                if (u._svg) this._update(s, u._svg, u);
              } else if (n._svg) {
                u = n._svg.parentNode;
                if (u) u.removeChild(n._svg);
              }
              n._svg = null;
              continue;
            }
            n = s.nested ? i.items[0] : n;
            if (n._update === e) continue;
            if (!n._svg || !n._svg.ownerSVGElement) {
              this._dirtyAll = false;
              Og(n, e);
            } else {
              this._update(s, n._svg, n);
            }
            n._update = e;
          }
          return !this._dirtyAll;
        }
        mark(t, e, n, i) {
          if (!this.isDirty(e)) {
            return e._svg;
          }
          const r = this._svg,
            s = e.marktype,
            a = Qp[s],
            o = e.interactive === false ? "none" : null,
            u = a.tag === "g";
          const l = Pg(e, t, n, "g", r);
          if (s !== "group" && i != null && !i.includes(s)) {
            lm(l, 0);
            return e._svg;
          }
          l.setAttribute("class", cm(e));
          const c = pg(e);
          for (const p in c) Xg(l, p, c[p]);
          if (!u) {
            Xg(l, "pointer-events", o);
          }
          Xg(l, "clip-path", e.clip ? yd(this, e, e.group) : null);
          let f = null,
            d = 0;
          const h = (t) => {
            const e = this.isDirty(t),
              n = Pg(t, l, f, a.tag, r);
            if (e) {
              this._update(a, n, t);
              if (u) Lg(this, n, t, i);
            }
            f = n;
            ++d;
          };
          if (a.nested) {
            if (e.items.length) h(e.items[0]);
          } else {
            fh(e, h);
          }
          lm(l, d);
          return l;
        }
        _update(t, e, n) {
          Ig = e;
          Ug = e.__values__;
          hg(Gg, n);
          t.attr(Gg, n, this);
          const i = jg[t.type];
          if (i) i.call(this, t, e, n);
          if (Ig) this.style(Ig, n);
        }
        style(t, e) {
          if (e == null) return;
          for (const n in Cg) {
            let i = n === "font" ? Np(e) : e[n];
            if (i === Ug[n]) continue;
            const r = Cg[n];
            if (i == null) {
              t.removeAttribute(r);
            } else {
              if (Yc(i)) {
                i = Wc(i, this._defs.gradient, Vg());
              }
              t.setAttribute(r, i + "");
            }
            Ug[n] = i;
          }
          for (const n in Fg) {
            Yg(t, Fg[n], e[n]);
          }
        }
        defs() {
          const t = this._svg,
            e = this._defs;
          let n = e.el,
            i = 0;
          for (const r in e.gradient) {
            if (!n) e.el = n = um(t, Bg + 1, "defs", $g);
            i = Tg(n, e.gradient[r], i);
          }
          for (const r in e.clipping) {
            if (!n) e.el = n = um(t, Bg + 1, "defs", $g);
            i = Ng(n, e.clipping[r], i);
          }
          if (n) {
            i === 0 ? (t.removeChild(n), (e.el = null)) : lm(n, i);
          }
        }
        _clearDefs() {
          const t = this._defs;
          t.gradient = {};
          t.clipping = {};
        }
      }
      function Og(t, e) {
        for (; t && t.dirty !== e; t = t.mark.group) {
          t.dirty = e;
          if (t.mark && t.mark.dirty !== e) {
            t.mark.dirty = e;
          } else return;
        }
      }
      function Tg(t, e, n) {
        let i, r, s;
        if (e.gradient === "radial") {
          let i = um(t, n++, "pattern", $g);
          Wg(i, { id: Gc + e.id, viewBox: "0,0,1,1", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid slice" });
          i = um(i, 0, "rect", $g);
          Wg(i, { width: 1, height: 1, fill: `url(${Vg()}#${e.id})` });
          t = um(t, n++, "radialGradient", $g);
          Wg(t, { id: e.id, fx: e.x1, fy: e.y1, fr: e.r1, cx: e.x2, cy: e.y2, r: e.r2 });
        } else {
          t = um(t, n++, "linearGradient", $g);
          Wg(t, { id: e.id, x1: e.x1, x2: e.x2, y1: e.y1, y2: e.y2 });
        }
        for (i = 0, r = e.stops.length; i < r; ++i) {
          s = um(t, i, "stop", $g);
          s.setAttribute("offset", e.stops[i].offset);
          s.setAttribute("stop-color", e.stops[i].color);
        }
        lm(t, i);
        return n;
      }
      function Ng(t, e, n) {
        let i;
        t = um(t, n, "clipPath", $g);
        t.setAttribute("id", e.id);
        if (e.path) {
          i = um(t, 0, "path", $g);
          i.setAttribute("d", e.path);
        } else {
          i = um(t, 0, "rect", $g);
          Wg(i, { x: 0, y: 0, width: e.width, height: e.height });
        }
        lm(t, 1);
        return n + 1;
      }
      function Lg(t, e, n, i) {
        e = e.lastChild.previousSibling;
        let r,
          s = 0;
        fh(n, (n) => {
          r = t.mark(e, n, r, i);
          ++s;
        });
        lm(e, 1 + s);
      }
      function Pg(t, e, n, i, r) {
        let s = t._svg,
          a;
        if (!s) {
          a = e.ownerDocument;
          s = am(a, i, $g);
          t._svg = s;
          if (t.mark) {
            s.__data__ = t;
            s.__values__ = { fill: "default" };
            if (i === "g") {
              const e = am(a, "path", $g);
              s.appendChild(e);
              e.__data__ = t;
              const n = am(a, "g", $g);
              s.appendChild(n);
              n.__data__ = t;
              const i = am(a, "path", $g);
              s.appendChild(i);
              i.__data__ = t;
              i.__values__ = { fill: "default" };
            }
          }
        }
        if (s.ownerSVGElement !== r || qg(s, n)) {
          e.insertBefore(s, n ? n.nextSibling : e.firstChild);
        }
        return s;
      }
      function qg(t, e) {
        return t.parentNode && t.parentNode.childNodes.length > 1 && t.previousSibling != e;
      }
      let Ig = null,
        Ug = null;
      const jg = {
        group(t, e, n) {
          const i = (Ig = e.childNodes[2]);
          Ug = i.__values__;
          t.foreground(Gg, n, this);
          Ug = e.__values__;
          Ig = e.childNodes[1];
          t.content(Gg, n, this);
          const r = (Ig = e.childNodes[0]);
          t.background(Gg, n, this);
          const s = n.mark.interactive === false ? "none" : null;
          if (s !== Ug.events) {
            Xg(i, "pointer-events", s);
            Xg(r, "pointer-events", s);
            Ug.events = s;
          }
          if (n.strokeForeground && n.stroke) {
            const t = n.fill;
            Xg(i, "display", null);
            this.style(r, n);
            Xg(r, "stroke", null);
            if (t) n.fill = null;
            Ug = i.__values__;
            this.style(i, n);
            if (t) n.fill = t;
            Ig = null;
          } else {
            Xg(i, "display", "none");
          }
        },
        image(t, e, n) {
          if (n.smooth === false) {
            Yg(e, "image-rendering", "optimizeSpeed");
            Yg(e, "image-rendering", "pixelated");
          } else {
            Yg(e, "image-rendering", null);
          }
        },
        text(t, e, n) {
          const i = zp(n);
          let r, s, a, o;
          if ((0, p.cy)(i)) {
            s = i.map((t) => Rp(n, t));
            r = s.join("\n");
            if (r !== Ug.text) {
              lm(e, 0);
              a = e.ownerDocument;
              o = Sp(n);
              s.forEach((t, i) => {
                const r = am(a, "tspan", $g);
                r.__data__ = n;
                r.textContent = t;
                if (i) {
                  r.setAttribute("x", 0);
                  r.setAttribute("dy", o);
                }
                e.appendChild(r);
              });
              Ug.text = r;
            }
          } else {
            s = Rp(n, i);
            if (s !== Ug.text) {
              e.textContent = s;
              Ug.text = s;
            }
          }
          Xg(e, "font-family", Np(n));
          Xg(e, "font-size", Fp(n) + "px");
          Xg(e, "font-style", n.fontStyle);
          Xg(e, "font-variant", n.fontVariant);
          Xg(e, "font-weight", n.fontWeight);
        },
      };
      function Gg(t, e, n) {
        if (e === Ug[t]) return;
        if (n) {
          Hg(Ig, t, e, n);
        } else {
          Xg(Ig, t, e);
        }
        Ug[t] = e;
      }
      function Yg(t, e, n) {
        if (n !== Ug[e]) {
          if (n == null) {
            t.style.removeProperty(e);
          } else {
            t.style.setProperty(e, n + "");
          }
          Ug[e] = n;
        }
      }
      function Wg(t, e) {
        for (const n in e) {
          Xg(t, n, e[n]);
        }
      }
      function Xg(t, e, n) {
        if (n != null) {
          t.setAttribute(e, n);
        } else {
          t.removeAttribute(e);
        }
      }
      function Hg(t, e, n, i) {
        if (n != null) {
          t.setAttributeNS(i, e, n);
        } else {
          t.removeAttributeNS(i, e);
        }
      }
      function Vg() {
        let t;
        return typeof window === "undefined" ? "" : (t = window.location).hash ? t.href.slice(0, -t.hash.length) : t.href;
      }
      class Qg extends mm {
        constructor(t) {
          super(t);
          this._text = null;
          this._defs = { gradient: {}, clipping: {} };
        }
        svg() {
          return this._text;
        }
        _render(t) {
          const e = Eg();
          e.open(
            "svg",
            (0, p.X$)({}, Vh, {
              class: "marks",
              width: this._width * this._scale,
              height: this._height * this._scale,
              viewBox: `0 0 ${this._width} ${this._height}`,
            })
          );
          const n = this._bgcolor;
          if (n && n !== "transparent" && n !== "none") {
            e.open("rect", { width: this._width, height: this._height, fill: n }).close();
          }
          e.open("g", Sg, { transform: "translate(" + this._origin + ")" });
          this.mark(e, t);
          e.close();
          this.defs(e);
          this._text = e.close() + "";
          return this;
        }
        mark(t, e) {
          const n = Qp[e.marktype],
            i = n.tag,
            r = [hg, n.attr];
          t.open("g", { class: cm(e), "clip-path": e.clip ? yd(this, e, e.group) : null }, pg(e), {
            "pointer-events": i !== "g" && e.interactive === false ? "none" : null,
          });
          const s = (s) => {
            const a = this.href(s);
            if (a) t.open("a", a);
            t.open(i, this.attr(e, s, r, i !== "g" ? i : null));
            if (i === "text") {
              const e = zp(s);
              if ((0, p.cy)(e)) {
                const n = { x: 0, dy: Sp(s) };
                for (let i = 0; i < e.length; ++i) {
                  t.open("tspan", i ? n : null)
                    .text(Rp(s, e[i]))
                    .close();
                }
              } else {
                t.text(Rp(s, e));
              }
            } else if (i === "g") {
              const i = s.strokeForeground,
                r = s.fill,
                a = s.stroke;
              if (i && a) {
                s.stroke = null;
              }
              t.open("path", this.attr(e, s, n.background, "bgrect")).close();
              t.open("g", this.attr(e, s, n.content));
              fh(s, (e) => this.mark(t, e));
              t.close();
              if (i && a) {
                if (r) s.fill = null;
                s.stroke = a;
                t.open("path", this.attr(e, s, n.foreground, "bgrect")).close();
                if (r) s.fill = r;
              } else {
                t.open("path", this.attr(e, s, n.foreground, "bgfore")).close();
              }
            }
            t.close();
            if (a) t.close();
          };
          if (n.nested) {
            if (e.items && e.items.length) s(e.items[0]);
          } else {
            fh(e, s);
          }
          return t.close();
        }
        href(t) {
          const e = t.href;
          let n;
          if (e) {
            if ((n = this._hrefs && this._hrefs[e])) {
              return n;
            } else {
              this.sanitizeURL(e).then((t) => {
                t["xlink:href"] = t.href;
                t.href = null;
                (this._hrefs || (this._hrefs = {}))[e] = t;
              });
            }
          }
          return null;
        }
        attr(t, e, n, i) {
          const r = {},
            s = (t, e, n, i) => {
              r[i || t] = e;
            };
          if (Array.isArray(n)) {
            n.forEach((t) => t(s, e, this));
          } else {
            n(s, e, this);
          }
          if (i) {
            Kg(r, e, t, i, this._defs);
          }
          return r;
        }
        defs(t) {
          const e = this._defs.gradient,
            n = this._defs.clipping,
            i = Object.keys(e).length + Object.keys(n).length;
          if (i === 0) return;
          t.open("defs");
          for (const r in e) {
            const n = e[r],
              i = n.stops;
            if (n.gradient === "radial") {
              t.open("pattern", { id: Gc + r, viewBox: "0,0,1,1", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid slice" });
              t.open("rect", { width: "1", height: "1", fill: "url(#" + r + ")" }).close();
              t.close();
              t.open("radialGradient", { id: r, fx: n.x1, fy: n.y1, fr: n.r1, cx: n.x2, cy: n.y2, r: n.r2 });
            } else {
              t.open("linearGradient", { id: r, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
            }
            for (let e = 0; e < i.length; ++e) {
              t.open("stop", { offset: i[e].offset, "stop-color": i[e].color }).close();
            }
            t.close();
          }
          for (const r in n) {
            const e = n[r];
            t.open("clipPath", { id: r });
            if (e.path) {
              t.open("path", { d: e.path }).close();
            } else {
              t.open("rect", { x: 0, y: 0, width: e.width, height: e.height }).close();
            }
            t.close();
          }
          t.close();
        }
      }
      function Kg(t, e, n, i, r) {
        let s;
        if (e == null) return t;
        if (i === "bgrect" && n.interactive === false) {
          t["pointer-events"] = "none";
        }
        if (i === "bgfore") {
          if (n.interactive === false) {
            t["pointer-events"] = "none";
          }
          t.display = "none";
          if (e.fill !== null) return t;
        }
        if (i === "image" && e.smooth === false) {
          s = ["image-rendering: optimizeSpeed;", "image-rendering: pixelated;"];
        }
        if (i === "text") {
          t["font-family"] = Np(e);
          t["font-size"] = Fp(e) + "px";
          t["font-style"] = e.fontStyle;
          t["font-variant"] = e.fontVariant;
          t["font-weight"] = e.fontWeight;
        }
        for (const a in Cg) {
          let n = e[a];
          const i = Cg[a];
          if (n === "transparent" && (i === "fill" || i === "stroke"));
          else if (n != null) {
            if (Yc(n)) {
              n = Wc(n, r.gradient, "");
            }
            t[i] = n;
          }
        }
        for (const a in Fg) {
          const t = e[a];
          if (t != null) {
            s = s || [];
            s.push(`${Fg[a]}: ${t};`);
          }
        }
        if (s) {
          t.style = s.join(" ");
        }
        return t;
      }
      const Zg = { svgMarkTypes: ["text"], svgOnTop: true, debug: false };
      function Jg(t) {
        Zg["svgMarkTypes"] = t.svgMarkTypes ?? ["text"];
        Zg["svgOnTop"] = t.svgOnTop ?? true;
        Zg["debug"] = t.debug ?? false;
      }
      class ty extends mm {
        constructor(t) {
          super(t);
          this._svgRenderer = new Rg(t);
          this._canvasRenderer = new Zm(t);
        }
        initialize(t, e, n, i, r) {
          this._root_el = um(t, 0, "div");
          const s = um(this._root_el, 0, "div");
          const a = um(this._root_el, 1, "div");
          this._root_el.style.position = "relative";
          if (!Zg.debug) {
            s.style.height = "100%";
            a.style.position = "absolute";
            a.style.top = "0";
            a.style.left = "0";
            a.style.height = "100%";
            a.style.width = "100%";
          }
          this._svgEl = Zg.svgOnTop ? a : s;
          this._canvasEl = Zg.svgOnTop ? s : a;
          this._svgEl.style.pointerEvents = "none";
          this._canvasRenderer.initialize(this._canvasEl, e, n, i, r);
          this._svgRenderer.initialize(this._svgEl, e, n, i, r);
          return super.initialize(t, e, n, i, r);
        }
        dirty(t) {
          if (Zg.svgMarkTypes.includes(t.mark.marktype)) {
            this._svgRenderer.dirty(t);
          } else {
            this._canvasRenderer.dirty(t);
          }
          return this;
        }
        _render(t, e) {
          const n = e ?? ["arc", "area", "image", "line", "path", "rect", "rule", "shape", "symbol", "text", "trail"];
          const i = n.filter((t) => !Zg.svgMarkTypes.includes(t));
          this._svgRenderer.render(t, Zg.svgMarkTypes);
          this._canvasRenderer.render(t, i);
        }
        resize(t, e, n, i) {
          super.resize(t, e, n, i);
          this._svgRenderer.resize(t, e, n, i);
          this._canvasRenderer.resize(t, e, n, i);
          return this;
        }
        background(t) {
          if (Zg.svgOnTop) {
            this._canvasRenderer.background(t);
          } else {
            this._svgRenderer.background(t);
          }
          return this;
        }
      }
      class ey extends jm {
        constructor(t, e) {
          super(t, e);
        }
        initialize(t, e, n) {
          const i = um(um(t, 0, "div"), Zg.svgOnTop ? 0 : 1, "div");
          return super.initialize(i, e, n);
        }
      }
      const ny = "canvas";
      const iy = "hybrid";
      const ry = "png";
      const sy = "svg";
      const ay = "none";
      const oy = { Canvas: ny, PNG: ry, SVG: sy, Hybrid: iy, None: ay };
      const uy = {};
      uy[ny] = uy[ry] = { renderer: Zm, headless: Zm, handler: jm };
      uy[sy] = { renderer: Rg, headless: Qg, handler: eg };
      uy[iy] = { renderer: ty, headless: ty, handler: ey };
      uy[ay] = {};
      function ly(t, e) {
        t = String(t || "").toLowerCase();
        if (arguments.length > 1) {
          uy[t] = e;
          return this;
        } else {
          return uy[t];
        }
      }
      function cy(t, e, n) {
        const i = [],
          r = new vd().union(e),
          s = t.marktype;
        return s ? fy(t, r, n, i) : s === "group" ? hy(t, r, n, i) : (0, p.z3)("Intersect scene must be mark node or group item.");
      }
      function fy(t, e, n, i) {
        if (dy(t, e, n)) {
          const r = t.items,
            s = t.marktype,
            a = r.length;
          let o = 0;
          if (s === "group") {
            for (; o < a; ++o) {
              hy(r[o], e, n, i);
            }
          } else {
            for (const t = Qp[s].isect; o < a; ++o) {
              const n = r[o];
              if (py(n, e, t)) i.push(n);
            }
          }
        }
        return i;
      }
      function dy(t, e, n) {
        return t.bounds && e.intersects(t.bounds) && (t.marktype === "group" || (t.interactive !== false && (!n || n(t))));
      }
      function hy(t, e, n, i) {
        if (n && n(t.mark) && py(t, e, Qp.group.isect)) {
          i.push(t);
        }
        const r = t.items,
          s = r && r.length;
        if (s) {
          const a = t.x || 0,
            o = t.y || 0;
          e.translate(-a, -o);
          for (let t = 0; t < s; ++t) {
            fy(r[t], e, n, i);
          }
          e.translate(a, o);
        }
        return i;
      }
      function py(t, e, n) {
        const i = t.bounds;
        return e.encloses(i) || (e.intersects(i) && n(t, e));
      }
      const my = new vd();
      function gy(t) {
        const e = t.clip;
        if ((0, p.Tn)(e)) {
          e(jd(my.clear()));
        } else if (e) {
          my.set(0, 0, t.group.width, t.group.height);
        } else return;
        t.bounds.intersect(my);
      }
      const yy = 1e-9;
      function vy(t, e, n) {
        return t === e
          ? true
          : n === "path"
            ? by(t, e)
            : t instanceof Date && e instanceof Date
              ? +t === +e
              : (0, p.Et)(t) && (0, p.Et)(e)
                ? Math.abs(t - e) <= yy
                : !t || !e || (!(0, p.Gv)(t) && !(0, p.Gv)(e))
                  ? t == e
                  : xy(t, e);
      }
      function by(t, e) {
        return vy(nf(t), nf(e));
      }
      function xy(t, e) {
        var n = Object.keys(t),
          i = Object.keys(e),
          r,
          s;
        if (n.length !== i.length) return false;
        n.sort();
        i.sort();
        for (s = n.length - 1; s >= 0; s--) {
          if (n[s] != i[s]) return false;
        }
        for (s = n.length - 1; s >= 0; s--) {
          r = n[s];
          if (!vy(t[r], e[r], r)) return false;
        }
        return typeof t === typeof e;
      }
      function _y() {
        gd();
        jc();
      }
      const wy = "top";
      const Ay = "left";
      const ky = "right";
      const Ey = "bottom";
      const My = "top-left";
      const Dy = "top-right";
      const Cy = "bottom-left";
      const Fy = "bottom-right";
      const Sy = "start";
      const By = "middle";
      const zy = "end";
      const $y = "x";
      const Ry = "y";
      const Oy = "group";
      const Ty = "axis";
      const Ny = "title";
      const Ly = "frame";
      const Py = "scope";
      const qy = "legend";
      const Iy = "row-header";
      const Uy = "row-footer";
      const jy = "row-title";
      const Gy = "column-header";
      const Yy = "column-footer";
      const Wy = "column-title";
      const Xy = "padding";
      const Hy = "symbol";
      const Vy = "fit";
      const Qy = "fit-x";
      const Ky = "fit-y";
      const Zy = "pad";
      const Jy = "none";
      const tv = "all";
      const ev = "each";
      const nv = "flush";
      const iv = "column";
      const rv = "row";
      function sv(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(sv, zi, {
        transform(t, e) {
          const n = e.dataflow,
            i = t.mark,
            r = i.marktype,
            s = Qp[r],
            a = s.bound;
          let o = i.bounds,
            u;
          if (s.nested) {
            if (i.items.length) n.dirty(i.items[0]);
            o = av(i, a);
            i.items.forEach((t) => {
              t.bounds.clear().union(o);
            });
          } else if (r === Oy || t.modified()) {
            e.visit(e.MOD, (t) => n.dirty(t));
            o.clear();
            i.items.forEach((t) => o.union(av(t, a)));
            switch (i.role) {
              case Ty:
              case qy:
              case Ny:
                e.reflow();
            }
          } else {
            u = e.changed(e.REM);
            e.visit(e.ADD, (t) => {
              o.union(av(t, a));
            });
            e.visit(e.MOD, (t) => {
              u = u || o.alignsWith(t.bounds);
              n.dirty(t);
              o.union(av(t, a));
            });
            if (u) {
              o.clear();
              i.items.forEach((t) => o.union(t.bounds));
            }
          }
          gy(i);
          return e.modifies("bounds");
        },
      });
      function av(t, e, n) {
        return e(t.bounds.clear(), t, n);
      }
      const ov = ":vega_identifier:";
      function uv(t) {
        zi.call(this, 0, t);
      }
      uv.Definition = { type: "Identifier", metadata: { modifies: true }, params: [{ name: "as", type: "string", required: true }] };
      (0, p.B)(uv, zi, {
        transform(t, e) {
          const n = lv(e.dataflow),
            i = t.as;
          let r = n.value;
          e.visit(e.ADD, (t) => (t[i] = t[i] || ++r));
          n.set((this.value = r));
          return e;
        },
      });
      function lv(t) {
        return t._signals[ov] || (t._signals[ov] = t.add(0));
      }
      function cv(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(cv, zi, {
        transform(t, e) {
          let n = this.value;
          if (!n) {
            n = e.dataflow.scenegraph().mark(t.markdef, fv(t), t.index);
            n.group.context = t.context;
            if (!t.context.group) t.context.group = n.group;
            n.source = this.source;
            n.clip = t.clip;
            n.interactive = t.interactive;
            this.value = n;
          }
          const i = n.marktype === Oy ? xd : bd;
          e.visit(e.ADD, (t) => i.call(t, n));
          if (t.modified("clip") || t.modified("interactive")) {
            n.clip = t.clip;
            n.interactive = !!t.interactive;
            n.zdirty = true;
            e.reflow();
          }
          n.items = e.source;
          return e;
        },
      });
      function fv(t) {
        const e = t.groups,
          n = t.parent;
        return e && e.size === 1 ? e.get(Object.keys(e.object)[0]) : e && n ? e.lookup(n) : null;
      }
      function dv(t) {
        zi.call(this, null, t);
      }
      const hv = {
        parity: (t) => t.filter((t, e) => (e % 2 ? (t.opacity = 0) : 1)),
        greedy: (t, e) => {
          let n;
          return t.filter((t, i) => (!i || !pv(n.bounds, t.bounds, e) ? ((n = t), 1) : (t.opacity = 0)));
        },
      };
      const pv = (t, e, n) => n > Math.max(e.x1 - t.x2, t.x1 - e.x2, e.y1 - t.y2, t.y1 - e.y2);
      const mv = (t, e) => {
        for (var n = 1, i = t.length, r = t[0].bounds, s; n < i; r = s, ++n) {
          if (pv(r, (s = t[n].bounds), e)) return true;
        }
      };
      const gv = (t) => {
        const e = t.bounds;
        return e.width() > 1 && e.height() > 1;
      };
      const yv = (t, e, n) => {
        var i = t.range(),
          r = new vd();
        if (e === wy || e === Ey) {
          r.set(i[0], -Infinity, i[1], +Infinity);
        } else {
          r.set(-Infinity, i[0], +Infinity, i[1]);
        }
        r.expand(n || 1);
        return (t) => r.encloses(t.bounds);
      };
      const vv = (t) => {
        t.forEach((t) => (t.opacity = 1));
        return t;
      };
      const bv = (t, e) => t.reflow(e.modified()).modifies("opacity");
      (0, p.B)(dv, zi, {
        transform(t, e) {
          const n = hv[t.method] || hv.parity,
            i = t.separation || 0;
          let r = e.materialize(e.SOURCE).source,
            s,
            a;
          if (!r || !r.length) return;
          if (!t.method) {
            if (t.modified("method")) {
              vv(r);
              e = bv(e, t);
            }
            return e;
          }
          r = r.filter(gv);
          if (!r.length) return;
          if (t.sort) {
            r = r.slice().sort(t.sort);
          }
          s = vv(r);
          e = bv(e, t);
          if (s.length >= 3 && mv(s, i)) {
            do {
              s = n(s, i);
            } while (s.length >= 3 && mv(s, i));
            if (s.length < 3 && !(0, p.se)(r).opacity) {
              if (s.length > 1) (0, p.se)(s).opacity = 0;
              (0, p.se)(r).opacity = 1;
            }
          }
          if (t.boundScale && t.boundTolerance >= 0) {
            a = yv(t.boundScale, t.boundOrient, +t.boundTolerance);
            r.forEach((t) => {
              if (!a(t)) t.opacity = 0;
            });
          }
          const o = s[0].mark.bounds.clear();
          r.forEach((t) => {
            if (t.opacity) o.union(t.bounds);
          });
          return e;
        },
      });
      function xv(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(xv, zi, {
        transform(t, e) {
          const n = e.dataflow;
          e.visit(e.ALL, (t) => n.dirty(t));
          if (e.fields && e.fields["zindex"]) {
            const t = e.source && e.source[0];
            if (t) t.mark.zdirty = true;
          }
        },
      });
      const _v = new vd();
      function wv(t, e, n) {
        return t[e] === n ? 0 : ((t[e] = n), 1);
      }
      function Av(t) {
        var e = t.items[0].orient;
        return e === Ay || e === ky;
      }
      function kv(t) {
        let e = +t.grid;
        return [t.ticks ? e++ : -1, t.labels ? e++ : -1, e + +t.domain];
      }
      function Ev(t, e, n, i) {
        var r = e.items[0],
          s = r.datum,
          a = r.translate != null ? r.translate : 0.5,
          o = r.orient,
          u = kv(s),
          l = r.range,
          c = r.offset,
          f = r.position,
          d = r.minExtent,
          h = r.maxExtent,
          p = s.title && r.items[u[2]].items[0],
          m = r.titlePadding,
          g = r.bounds,
          y = p && $p(p),
          v = 0,
          b = 0,
          x,
          _;
        _v.clear().union(g);
        g.clear();
        if ((x = u[0]) > -1) g.union(r.items[x].bounds);
        if ((x = u[1]) > -1) g.union(r.items[x].bounds);
        switch (o) {
          case wy:
            v = f || 0;
            b = -c;
            _ = Math.max(d, Math.min(h, -g.y1));
            g.add(0, -_).add(l, 0);
            if (p) Mv(t, p, _, m, y, 0, -1, g);
            break;
          case Ay:
            v = -c;
            b = f || 0;
            _ = Math.max(d, Math.min(h, -g.x1));
            g.add(-_, 0).add(0, l);
            if (p) Mv(t, p, _, m, y, 1, -1, g);
            break;
          case ky:
            v = n + c;
            b = f || 0;
            _ = Math.max(d, Math.min(h, g.x2));
            g.add(0, 0).add(_, l);
            if (p) Mv(t, p, _, m, y, 1, 1, g);
            break;
          case Ey:
            v = f || 0;
            b = i + c;
            _ = Math.max(d, Math.min(h, g.y2));
            g.add(0, 0).add(l, _);
            if (p) Mv(t, p, _, m, 0, 0, 1, g);
            break;
          default:
            v = r.x;
            b = r.y;
        }
        kd(g.translate(v, b), r);
        if (wv(r, "x", v + a) | wv(r, "y", b + a)) {
          r.bounds = _v;
          t.dirty(r);
          r.bounds = g;
          t.dirty(r);
        }
        return r.mark.bounds.clear().union(g);
      }
      function Mv(t, e, n, i, r, s, a, o) {
        const u = e.bounds;
        if (e.auto) {
          const o = a * (n + r + i);
          let l = 0,
            c = 0;
          t.dirty(e);
          s ? (l = (e.x || 0) - (e.x = o)) : (c = (e.y || 0) - (e.y = o));
          e.mark.bounds.clear().union(u.translate(-l, -c));
          t.dirty(e);
        }
        o.union(u);
      }
      const Dv = (t, e) => Math.floor(Math.min(t, e));
      const Cv = (t, e) => Math.ceil(Math.max(t, e));
      function Fv(t) {
        var e = t.items,
          n = e.length,
          i = 0,
          r,
          s;
        const a = { marks: [], rowheaders: [], rowfooters: [], colheaders: [], colfooters: [], rowtitle: null, coltitle: null };
        for (; i < n; ++i) {
          r = e[i];
          s = r.items;
          if (r.marktype === Oy) {
            switch (r.role) {
              case Ty:
              case qy:
              case Ny:
                break;
              case Iy:
                a.rowheaders.push(...s);
                break;
              case Uy:
                a.rowfooters.push(...s);
                break;
              case Gy:
                a.colheaders.push(...s);
                break;
              case Yy:
                a.colfooters.push(...s);
                break;
              case jy:
                a.rowtitle = s[0];
                break;
              case Wy:
                a.coltitle = s[0];
                break;
              default:
                a.marks.push(...s);
            }
          }
        }
        return a;
      }
      function Sv(t) {
        return new vd().set(0, 0, t.width || 0, t.height || 0);
      }
      function Bv(t) {
        const e = t.bounds.clone();
        return e.empty() ? e.set(0, 0, 0, 0) : e.translate(-(t.x || 0), -(t.y || 0));
      }
      function zv(t, e, n) {
        const i = (0, p.Gv)(t) ? t[e] : t;
        return i != null ? i : n !== undefined ? n : 0;
      }
      function $v(t) {
        return t < 0 ? Math.ceil(-t) : 0;
      }
      function Rv(t, e, n) {
        var i = !n.nodirty,
          r = n.bounds === nv ? Sv : Bv,
          s = _v.set(0, 0, 0, 0),
          a = zv(n.align, iv),
          o = zv(n.align, rv),
          u = zv(n.padding, iv),
          l = zv(n.padding, rv),
          c = n.columns || e.length,
          f = c <= 0 ? 1 : Math.ceil(e.length / c),
          d = e.length,
          h = Array(d),
          p = Array(c),
          m = 0,
          g = Array(d),
          y = Array(f),
          v = 0,
          b = Array(d),
          x = Array(d),
          _ = Array(d),
          w,
          A,
          k,
          E,
          M,
          D,
          C,
          F,
          S,
          B,
          z;
        for (A = 0; A < c; ++A) p[A] = 0;
        for (A = 0; A < f; ++A) y[A] = 0;
        for (A = 0; A < d; ++A) {
          D = e[A];
          M = _[A] = r(D);
          D.x = D.x || 0;
          b[A] = 0;
          D.y = D.y || 0;
          x[A] = 0;
          k = A % c;
          E = ~~(A / c);
          m = Math.max(m, (C = Math.ceil(M.x2)));
          v = Math.max(v, (F = Math.ceil(M.y2)));
          p[k] = Math.max(p[k], C);
          y[E] = Math.max(y[E], F);
          h[A] = u + $v(M.x1);
          g[A] = l + $v(M.y1);
          if (i) t.dirty(e[A]);
        }
        for (A = 0; A < d; ++A) {
          if (A % c === 0) h[A] = 0;
          if (A < c) g[A] = 0;
        }
        if (a === ev) {
          for (k = 1; k < c; ++k) {
            for (z = 0, A = k; A < d; A += c) {
              if (z < h[A]) z = h[A];
            }
            for (A = k; A < d; A += c) {
              h[A] = z + p[k - 1];
            }
          }
        } else if (a === tv) {
          for (z = 0, A = 0; A < d; ++A) {
            if (A % c && z < h[A]) z = h[A];
          }
          for (A = 0; A < d; ++A) {
            if (A % c) h[A] = z + m;
          }
        } else {
          for (a = false, k = 1; k < c; ++k) {
            for (A = k; A < d; A += c) {
              h[A] += p[k - 1];
            }
          }
        }
        if (o === ev) {
          for (E = 1; E < f; ++E) {
            for (z = 0, A = E * c, w = A + c; A < w; ++A) {
              if (z < g[A]) z = g[A];
            }
            for (A = E * c; A < w; ++A) {
              g[A] = z + y[E - 1];
            }
          }
        } else if (o === tv) {
          for (z = 0, A = c; A < d; ++A) {
            if (z < g[A]) z = g[A];
          }
          for (A = c; A < d; ++A) {
            g[A] = z + v;
          }
        } else {
          for (o = false, E = 1; E < f; ++E) {
            for (A = E * c, w = A + c; A < w; ++A) {
              g[A] += y[E - 1];
            }
          }
        }
        for (S = 0, A = 0; A < d; ++A) {
          S = h[A] + (A % c ? S : 0);
          b[A] += S - e[A].x;
        }
        for (k = 0; k < c; ++k) {
          for (B = 0, A = k; A < d; A += c) {
            B += g[A];
            x[A] += B - e[A].y;
          }
        }
        if (a && zv(n.center, iv) && f > 1) {
          for (A = 0; A < d; ++A) {
            M = a === tv ? m : p[A % c];
            S = M - _[A].x2 - e[A].x - b[A];
            if (S > 0) b[A] += S / 2;
          }
        }
        if (o && zv(n.center, rv) && c !== 1) {
          for (A = 0; A < d; ++A) {
            M = o === tv ? v : y[~~(A / c)];
            B = M - _[A].y2 - e[A].y - x[A];
            if (B > 0) x[A] += B / 2;
          }
        }
        for (A = 0; A < d; ++A) {
          s.union(_[A].translate(b[A], x[A]));
        }
        S = zv(n.anchor, $y);
        B = zv(n.anchor, Ry);
        switch (zv(n.anchor, iv)) {
          case zy:
            S -= s.width();
            break;
          case By:
            S -= s.width() / 2;
        }
        switch (zv(n.anchor, rv)) {
          case zy:
            B -= s.height();
            break;
          case By:
            B -= s.height() / 2;
        }
        S = Math.round(S);
        B = Math.round(B);
        s.clear();
        for (A = 0; A < d; ++A) {
          e[A].mark.bounds.clear();
        }
        for (A = 0; A < d; ++A) {
          D = e[A];
          D.x += b[A] += S;
          D.y += x[A] += B;
          s.union(D.mark.bounds.union(D.bounds.translate(b[A], x[A])));
          if (i) t.dirty(D);
        }
        return s;
      }
      function Ov(t, e, n) {
        var i = Fv(e),
          r = i.marks,
          s = n.bounds === nv ? Tv : Nv,
          a = n.offset,
          o = n.columns || r.length,
          u = o <= 0 ? 1 : Math.ceil(r.length / o),
          l = u * o,
          c,
          f,
          d,
          h,
          p,
          m,
          g;
        const y = Rv(t, r, n);
        if (y.empty()) y.set(0, 0, 0, 0);
        if (i.rowheaders) {
          m = zv(n.headerBand, rv, null);
          c = Lv(t, i.rowheaders, r, o, u, -zv(a, "rowHeader"), Dv, 0, s, "x1", 0, o, 1, m);
        }
        if (i.colheaders) {
          m = zv(n.headerBand, iv, null);
          f = Lv(t, i.colheaders, r, o, o, -zv(a, "columnHeader"), Dv, 1, s, "y1", 0, 1, o, m);
        }
        if (i.rowfooters) {
          m = zv(n.footerBand, rv, null);
          d = Lv(t, i.rowfooters, r, o, u, zv(a, "rowFooter"), Cv, 0, s, "x2", o - 1, o, 1, m);
        }
        if (i.colfooters) {
          m = zv(n.footerBand, iv, null);
          h = Lv(t, i.colfooters, r, o, o, zv(a, "columnFooter"), Cv, 1, s, "y2", l - o, 1, o, m);
        }
        if (i.rowtitle) {
          p = zv(n.titleAnchor, rv);
          g = zv(a, "rowTitle");
          g = p === zy ? d + g : c - g;
          m = zv(n.titleBand, rv, 0.5);
          Pv(t, i.rowtitle, g, 0, y, m);
        }
        if (i.coltitle) {
          p = zv(n.titleAnchor, iv);
          g = zv(a, "columnTitle");
          g = p === zy ? h + g : f - g;
          m = zv(n.titleBand, iv, 0.5);
          Pv(t, i.coltitle, g, 1, y, m);
        }
      }
      function Tv(t, e) {
        return e === "x1"
          ? t.x || 0
          : e === "y1"
            ? t.y || 0
            : e === "x2"
              ? (t.x || 0) + (t.width || 0)
              : e === "y2"
                ? (t.y || 0) + (t.height || 0)
                : undefined;
      }
      function Nv(t, e) {
        return t.bounds[e];
      }
      function Lv(t, e, n, i, r, s, a, o, u, l, c, f, d, h) {
        var p = n.length,
          m = 0,
          g = 0,
          y,
          v,
          b,
          x,
          _,
          w,
          A,
          k,
          E;
        if (!p) return m;
        for (y = c; y < p; y += f) {
          if (n[y]) m = a(m, u(n[y], l));
        }
        if (!e.length) return m;
        if (e.length > r) {
          t.warn("Grid headers exceed limit: " + r);
          e = e.slice(0, r);
        }
        m += s;
        for (v = 0, x = e.length; v < x; ++v) {
          t.dirty(e[v]);
          e[v].mark.bounds.clear();
        }
        for (y = c, v = 0, x = e.length; v < x; ++v, y += f) {
          w = e[v];
          _ = w.mark.bounds;
          for (b = y; b >= 0 && (A = n[b]) == null; b -= d);
          if (o) {
            k = h == null ? A.x : Math.round(A.bounds.x1 + h * A.bounds.width());
            E = m;
          } else {
            k = m;
            E = h == null ? A.y : Math.round(A.bounds.y1 + h * A.bounds.height());
          }
          _.union(w.bounds.translate(k - (w.x || 0), E - (w.y || 0)));
          w.x = k;
          w.y = E;
          t.dirty(w);
          g = a(g, _[l]);
        }
        return g;
      }
      function Pv(t, e, n, i, r, s) {
        if (!e) return;
        t.dirty(e);
        var a = n,
          o = n;
        i ? (a = Math.round(r.x1 + s * r.width())) : (o = Math.round(r.y1 + s * r.height()));
        e.bounds.translate(a - (e.x || 0), o - (e.y || 0));
        e.mark.bounds.clear().union(e.bounds);
        e.x = a;
        e.y = o;
        t.dirty(e);
      }
      function qv(t, e) {
        const n = t[e] || {};
        return (e, i) => (n[e] != null ? n[e] : t[e] != null ? t[e] : i);
      }
      function Iv(t, e) {
        let n = -Infinity;
        t.forEach((t) => {
          if (t.offset != null) n = Math.max(n, t.offset);
        });
        return n > -Infinity ? n : e;
      }
      function Uv(t, e, n, i, r, s, a) {
        const o = qv(n, e),
          u = Iv(t, o("offset", 0)),
          l = o("anchor", Sy),
          c = l === zy ? 1 : l === By ? 0.5 : 0;
        const f = {
          align: ev,
          bounds: o("bounds", nv),
          columns: o("direction") === "vertical" ? 1 : t.length,
          padding: o("margin", 8),
          center: o("center"),
          nodirty: true,
        };
        switch (e) {
          case Ay:
            f.anchor = { x: Math.floor(i.x1) - u, column: zy, y: c * (a || i.height() + 2 * i.y1), row: l };
            break;
          case ky:
            f.anchor = { x: Math.ceil(i.x2) + u, y: c * (a || i.height() + 2 * i.y1), row: l };
            break;
          case wy:
            f.anchor = { y: Math.floor(r.y1) - u, row: zy, x: c * (s || r.width() + 2 * r.x1), column: l };
            break;
          case Ey:
            f.anchor = { y: Math.ceil(r.y2) + u, x: c * (s || r.width() + 2 * r.x1), column: l };
            break;
          case My:
            f.anchor = { x: u, y: u };
            break;
          case Dy:
            f.anchor = { x: s - u, y: u, column: zy };
            break;
          case Cy:
            f.anchor = { x: u, y: a - u, row: zy };
            break;
          case Fy:
            f.anchor = { x: s - u, y: a - u, column: zy, row: zy };
            break;
        }
        return f;
      }
      function jv(t, e) {
        var n = e.items[0],
          i = n.datum,
          r = n.orient,
          s = n.bounds,
          a = n.x,
          o = n.y,
          u,
          l;
        n._bounds ? n._bounds.clear().union(s) : (n._bounds = s.clone());
        s.clear();
        Yv(t, n, n.items[0].items[0]);
        s = Gv(n, s);
        u = 2 * n.padding;
        l = 2 * n.padding;
        if (!s.empty()) {
          u = Math.ceil(s.width() + u);
          l = Math.ceil(s.height() + l);
        }
        if (i.type === Hy) {
          Hv(n.items[0].items[0].items[0].items);
        }
        if (r !== Jy) {
          n.x = a = 0;
          n.y = o = 0;
        }
        n.width = u;
        n.height = l;
        kd(s.set(a, o, a + u, o + l), n);
        n.mark.bounds.clear().union(s);
        return n;
      }
      function Gv(t, e) {
        t.items.forEach((t) => e.union(t.bounds));
        e.x1 = t.padding;
        e.y1 = t.padding;
        return e;
      }
      function Yv(t, e, n) {
        var i = e.padding,
          r = i - n.x,
          s = i - n.y;
        if (!e.datum.title) {
          if (r || s) Xv(t, n, r, s);
        } else {
          var a = e.items[1].items[0],
            o = a.anchor,
            u = e.titlePadding || 0,
            l = i - a.x,
            c = i - a.y;
          switch (a.orient) {
            case Ay:
              r += Math.ceil(a.bounds.width()) + u;
              break;
            case ky:
            case Ey:
              break;
            default:
              s += a.bounds.height() + u;
          }
          if (r || s) Xv(t, n, r, s);
          switch (a.orient) {
            case Ay:
              c += Wv(e, n, a, o, 1, 1);
              break;
            case ky:
              l += Wv(e, n, a, zy, 0, 0) + u;
              c += Wv(e, n, a, o, 1, 1);
              break;
            case Ey:
              l += Wv(e, n, a, o, 0, 0);
              c += Wv(e, n, a, zy, -1, 0, 1) + u;
              break;
            default:
              l += Wv(e, n, a, o, 0, 0);
          }
          if (l || c) Xv(t, a, l, c);
          if ((l = Math.round(a.bounds.x1 - i)) < 0) {
            Xv(t, n, -l, 0);
            Xv(t, a, -l, 0);
          }
        }
      }
      function Wv(t, e, n, i, r, s, a) {
        const o = t.datum.type !== "symbol",
          u = n.datum.vgrad,
          l = o && (s || !u) && !a ? e.items[0] : e,
          c = l.bounds[r ? "y2" : "x2"] - t.padding,
          f = u && s ? c : 0,
          d = u && s ? 0 : c,
          h = r <= 0 ? 0 : $p(n);
        return Math.round(i === Sy ? f : i === zy ? d - h : 0.5 * (c - h));
      }
      function Xv(t, e, n, i) {
        e.x += n;
        e.y += i;
        e.bounds.translate(n, i);
        e.mark.bounds.translate(n, i);
        t.dirty(e);
      }
      function Hv(t) {
        const e = t.reduce((t, e) => {
          t[e.column] = Math.max(e.bounds.x2 - e.x, t[e.column] || 0);
          return t;
        }, {});
        t.forEach((t) => {
          t.width = e[t.column];
          t.height = t.bounds.y2 - t.y;
        });
      }
      function Vv(t, e, n, i, r) {
        var s = e.items[0],
          a = s.frame,
          o = s.orient,
          u = s.anchor,
          l = s.offset,
          c = s.padding,
          f = s.items[0].items[0],
          d = s.items[1] && s.items[1].items[0],
          h = o === Ay || o === ky ? i : n,
          p = 0,
          m = 0,
          g = 0,
          y = 0,
          v = 0,
          b;
        if (a !== Oy) {
          o === Ay ? ((p = r.y2), (h = r.y1)) : o === ky ? ((p = r.y1), (h = r.y2)) : ((p = r.x1), (h = r.x2));
        } else if (o === Ay) {
          (p = i), (h = 0);
        }
        b = u === Sy ? p : u === zy ? h : (p + h) / 2;
        if (d && d.text) {
          switch (o) {
            case wy:
            case Ey:
              v = f.bounds.height() + c;
              break;
            case Ay:
              y = f.bounds.width() + c;
              break;
            case ky:
              y = -f.bounds.width() - c;
              break;
          }
          _v.clear().union(d.bounds);
          _v.translate(y - (d.x || 0), v - (d.y || 0));
          if (wv(d, "x", y) | wv(d, "y", v)) {
            t.dirty(d);
            d.bounds.clear().union(_v);
            d.mark.bounds.clear().union(_v);
            t.dirty(d);
          }
          _v.clear().union(d.bounds);
        } else {
          _v.clear();
        }
        _v.union(f.bounds);
        switch (o) {
          case wy:
            m = b;
            g = r.y1 - _v.height() - l;
            break;
          case Ay:
            m = r.x1 - _v.width() - l;
            g = b;
            break;
          case ky:
            m = r.x2 + _v.width() + l;
            g = b;
            break;
          case Ey:
            m = b;
            g = r.y2 + l;
            break;
          default:
            m = s.x;
            g = s.y;
        }
        if (wv(s, "x", m) | wv(s, "y", g)) {
          _v.translate(m, g);
          t.dirty(s);
          s.bounds.clear().union(_v);
          e.bounds.clear().union(_v);
          t.dirty(s);
        }
        return s.bounds;
      }
      function Qv(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(Qv, zi, {
        transform(t, e) {
          const n = e.dataflow;
          t.mark.items.forEach((e) => {
            if (t.layout) Ov(n, e, t.layout);
            Zv(n, e, t);
          });
          return Kv(t.mark.group) ? e.reflow() : e;
        },
      });
      function Kv(t) {
        return t && t.mark.role !== "legend-entry";
      }
      function Zv(t, e, n) {
        var i = e.items,
          r = Math.max(0, e.width || 0),
          s = Math.max(0, e.height || 0),
          a = new vd().set(0, 0, r, s),
          o = a.clone(),
          u = a.clone(),
          l = [],
          c,
          f,
          d,
          h,
          p,
          m;
        for (p = 0, m = i.length; p < m; ++p) {
          f = i[p];
          switch (f.role) {
            case Ty:
              h = Av(f) ? o : u;
              h.union(Ev(t, f, r, s));
              break;
            case Ny:
              c = f;
              break;
            case qy:
              l.push(jv(t, f));
              break;
            case Ly:
            case Py:
            case Iy:
            case Uy:
            case jy:
            case Gy:
            case Yy:
            case Wy:
              o.union(f.bounds);
              u.union(f.bounds);
              break;
            default:
              a.union(f.bounds);
          }
        }
        if (l.length) {
          const e = {};
          l.forEach((t) => {
            d = t.orient || ky;
            if (d !== Jy) (e[d] || (e[d] = [])).push(t);
          });
          for (const i in e) {
            const a = e[i];
            Rv(t, a, Uv(a, i, n.legends, o, u, r, s));
          }
          l.forEach((e) => {
            const i = e.bounds;
            if (!i.equals(e._bounds)) {
              e.bounds = e._bounds;
              t.dirty(e);
              e.bounds = i;
              t.dirty(e);
            }
            if (n.autosize && (n.autosize.type === Vy || n.autosize.type === Qy || n.autosize.type === Ky)) {
              switch (e.orient) {
                case Ay:
                case ky:
                  a.add(i.x1, 0).add(i.x2, 0);
                  break;
                case wy:
                case Ey:
                  a.add(0, i.y1).add(0, i.y2);
              }
            } else {
              a.union(i);
            }
          });
        }
        a.union(o).union(u);
        if (c) {
          a.union(Vv(t, c, r, s, a));
        }
        if (e.clip) {
          a.set(0, 0, e.width || 0, e.height || 0);
        }
        Jv(t, e, a, n);
      }
      function Jv(t, e, n, i) {
        const r = i.autosize || {},
          s = r.type;
        if (t._autosize < 1 || !s) return;
        let a = t._width,
          o = t._height,
          u = Math.max(0, e.width || 0),
          l = Math.max(0, Math.ceil(-n.x1)),
          c = Math.max(0, e.height || 0),
          f = Math.max(0, Math.ceil(-n.y1));
        const d = Math.max(0, Math.ceil(n.x2 - u)),
          h = Math.max(0, Math.ceil(n.y2 - c));
        if (r.contains === Xy) {
          const e = t.padding();
          a -= e.left + e.right;
          o -= e.top + e.bottom;
        }
        if (s === Jy) {
          l = 0;
          f = 0;
          u = a;
          c = o;
        } else if (s === Vy) {
          u = Math.max(0, a - l - d);
          c = Math.max(0, o - f - h);
        } else if (s === Qy) {
          u = Math.max(0, a - l - d);
          o = c + f + h;
        } else if (s === Ky) {
          a = u + l + d;
          c = Math.max(0, o - f - h);
        } else if (s === Zy) {
          a = u + l + d;
          o = c + f + h;
        }
        t._resizeView(a, o, u, c, [l, f], r.resize);
      }
      function tb(t, e) {
        let n = 0;
        if (e === undefined) {
          for (let e of t) {
            if ((e = +e)) {
              n += e;
            }
          }
        } else {
          let i = -1;
          for (let r of t) {
            if ((r = +e(r, ++i, t))) {
              n += r;
            }
          }
        }
        return n;
      }
      function eb(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(eb, zi, {
        transform(t, e) {
          if (this.value && !t.modified()) {
            return e.StopPropagation;
          }
          var n = e.dataflow.locale(),
            i = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            r = this.value,
            s = t.scale,
            a = t.count == null ? (t.values ? t.values.length : 10) : t.count,
            o = _c(s, a, t.minstep),
            u = t.format || kc(n, s, o, t.formatSpecifier, t.formatType, !!t.values),
            l = t.values ? wc(s, t.values, o) : Ac(s, o);
          if (r) i.rem = r;
          r = l.map((t, e) => bn({ index: e / (l.length - 1 || 1), value: t, label: u(t) }));
          if (t.extra && r.length) {
            r.push(bn({ index: -1, extra: { value: r[0].value }, label: "" }));
          }
          i.source = r;
          i.add = r;
          this.value = r;
          return i;
        },
      });
      function nb(t) {
        zi.call(this, null, t);
      }
      function ib() {
        return bn({});
      }
      function rb(t) {
        const e = (0, p.nG)().test((t) => t.exit);
        e.lookup = (n) => e.get(t(n));
        return e;
      }
      (0, p.B)(nb, zi, {
        transform(t, e) {
          var n = e.dataflow,
            i = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            r = t.item || ib,
            s = t.key || yn,
            a = this.value;
          if ((0, p.cy)(i.encode)) {
            i.encode = null;
          }
          if (a && (t.modified("key") || e.modified(s))) {
            (0, p.z3)("DataJoin does not support modified key function or fields.");
          }
          if (!a) {
            e = e.addAll();
            this.value = a = rb(s);
          }
          e.visit(e.ADD, (t) => {
            const e = s(t);
            let n = a.get(e);
            if (n) {
              if (n.exit) {
                a.empty--;
                i.add.push(n);
              } else {
                i.mod.push(n);
              }
            } else {
              n = r(t);
              a.set(e, n);
              i.add.push(n);
            }
            n.datum = t;
            n.exit = false;
          });
          e.visit(e.MOD, (t) => {
            const e = s(t),
              n = a.get(e);
            if (n) {
              n.datum = t;
              i.mod.push(n);
            }
          });
          e.visit(e.REM, (t) => {
            const e = s(t),
              n = a.get(e);
            if (t === n.datum && !n.exit) {
              i.rem.push(n);
              n.exit = true;
              ++a.empty;
            }
          });
          if (e.changed(e.ADD_MOD)) i.modifies("datum");
          if (e.clean() || (t.clean && a.empty > n.cleanThreshold)) {
            n.runAfter(a.clean);
          }
          return i;
        },
      });
      function sb(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(sb, zi, {
        transform(t, e) {
          var n = e.fork(e.ADD_REM),
            i = t.mod || false,
            r = t.encoders,
            s = e.encode;
          if ((0, p.cy)(s)) {
            if (n.changed() || s.every((t) => r[t])) {
              s = s[0];
              n.encode = null;
            } else {
              return e.StopPropagation;
            }
          }
          var a = s === "enter",
            o = r.update || p.me,
            u = r.enter || p.me,
            l = r.exit || p.me,
            c = (s && !a ? r[s] : o) || p.me;
          if (e.changed(e.ADD)) {
            e.visit(e.ADD, (e) => {
              u(e, t);
              o(e, t);
            });
            n.modifies(u.output);
            n.modifies(o.output);
            if (c !== p.me && c !== o) {
              e.visit(e.ADD, (e) => {
                c(e, t);
              });
              n.modifies(c.output);
            }
          }
          if (e.changed(e.REM) && l !== p.me) {
            e.visit(e.REM, (e) => {
              l(e, t);
            });
            n.modifies(l.output);
          }
          if (a || c !== p.me) {
            const r = e.MOD | (t.modified() ? e.REFLOW : 0);
            if (a) {
              e.visit(r, (e) => {
                const r = u(e, t) || i;
                if (c(e, t) || r) n.mod.push(e);
              });
              if (n.mod.length) n.modifies(u.output);
            } else {
              e.visit(r, (e) => {
                if (c(e, t) || i) n.mod.push(e);
              });
            }
            if (n.mod.length) n.modifies(c.output);
          }
          return n.changed() ? n : e.StopPropagation;
        },
      });
      function ab(t) {
        zi.call(this, [], t);
      }
      (0, p.B)(ab, zi, {
        transform(t, e) {
          if (this.value != null && !t.modified()) {
            return e.StopPropagation;
          }
          var n = e.dataflow.locale(),
            i = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            r = this.value,
            s = t.type || mc,
            a = t.scale,
            o = +t.limit,
            u = _c(a, t.count == null ? 5 : t.count, t.minstep),
            l = !!t.values || s === mc,
            c = t.format || $c(n, a, u, s, t.formatSpecifier, t.formatType, l),
            f = t.values || Cc(a, u),
            d,
            h,
            m,
            g,
            y;
          if (r) i.rem = r;
          if (s === mc) {
            if (o && f.length > o) {
              e.dataflow.warn("Symbol legend count exceeds limit, filtering items.");
              r = f.slice(0, o - 1);
              y = true;
            } else {
              r = f;
            }
            if ((0, p.Tn)((m = t.size))) {
              if (!t.values && a(r[0]) === 0) {
                r = r.slice(1);
              }
              g = r.reduce((e, n) => Math.max(e, m(n, t)), 0);
            } else {
              m = (0, p.dY)((g = m || 8));
            }
            r = r.map((e, n) => bn({ index: n, label: c(e, n, r), value: e, offset: g, size: m(e, t) }));
            if (y) {
              y = f[r.length];
              r.push(bn({ index: r.length, label: `…${f.length - r.length} entries`, value: y, offset: g, size: m(y, t) }));
            }
          } else if (s === yc) {
            (d = a.domain()), (h = ac(a, d[0], (0, p.se)(d)));
            if (f.length < 3 && !t.values && d[0] !== (0, p.se)(d)) {
              f = [d[0], (0, p.se)(d)];
            }
            r = f.map((t, e) => bn({ index: e, label: c(t, e, f), value: t, perc: h(t) }));
          } else {
            m = f.length - 1;
            h = Pc(a);
            r = f.map((t, e) => bn({ index: e, label: c(t, e, f), value: t, perc: e ? h(t) : 0, perc2: e === m ? 1 : h(f[e + 1]) }));
          }
          i.source = r;
          i.add = r;
          this.value = r;
          return i;
        },
      });
      const ob = (t) => t.source.x;
      const ub = (t) => t.source.y;
      const lb = (t) => t.target.x;
      const cb = (t) => t.target.y;
      function fb(t) {
        zi.call(this, {}, t);
      }
      fb.Definition = {
        type: "LinkPath",
        metadata: { modifies: true },
        params: [
          { name: "sourceX", type: "field", default: "source.x" },
          { name: "sourceY", type: "field", default: "source.y" },
          { name: "targetX", type: "field", default: "target.x" },
          { name: "targetY", type: "field", default: "target.y" },
          { name: "orient", type: "enum", default: "vertical", values: ["horizontal", "vertical", "radial"] },
          { name: "shape", type: "enum", default: "line", values: ["line", "arc", "curve", "diagonal", "orthogonal"] },
          { name: "require", type: "signal" },
          { name: "as", type: "string", default: "path" },
        ],
      };
      (0, p.B)(fb, zi, {
        transform(t, e) {
          var n = t.sourceX || ob,
            i = t.sourceY || ub,
            r = t.targetX || lb,
            s = t.targetY || cb,
            a = t.as || "path",
            o = t.orient || "vertical",
            u = t.shape || "line",
            l = kb.get(u + "-" + o) || kb.get(u);
          if (!l) {
            (0, p.z3)("LinkPath unsupported type: " + t.shape + (t.orient ? "-" + t.orient : ""));
          }
          e.visit(e.SOURCE, (t) => {
            t[a] = l(n(t), i(t), r(t), s(t));
          });
          return e.reflow(t.modified()).modifies(a);
        },
      });
      const db = (t, e, n, i) => "M" + t + "," + e + "L" + n + "," + i;
      const hb = (t, e, n, i) => db(e * Math.cos(t), e * Math.sin(t), i * Math.cos(n), i * Math.sin(n));
      const pb = (t, e, n, i) => {
        var r = n - t,
          s = i - e,
          a = Math.hypot(r, s) / 2,
          o = (180 * Math.atan2(s, r)) / Math.PI;
        return "M" + t + "," + e + "A" + a + "," + a + " " + o + " 0 1" + " " + n + "," + i;
      };
      const mb = (t, e, n, i) => pb(e * Math.cos(t), e * Math.sin(t), i * Math.cos(n), i * Math.sin(n));
      const gb = (t, e, n, i) => {
        const r = n - t,
          s = i - e,
          a = 0.2 * (r + s),
          o = 0.2 * (s - r);
        return "M" + t + "," + e + "C" + (t + a) + "," + (e + o) + " " + (n + o) + "," + (i - a) + " " + n + "," + i;
      };
      const yb = (t, e, n, i) => gb(e * Math.cos(t), e * Math.sin(t), i * Math.cos(n), i * Math.sin(n));
      const vb = (t, e, n, i) => "M" + t + "," + e + "V" + i + "H" + n;
      const bb = (t, e, n, i) => "M" + t + "," + e + "H" + n + "V" + i;
      const xb = (t, e, n, i) => {
        const r = Math.cos(t),
          s = Math.sin(t),
          a = Math.cos(n),
          o = Math.sin(n),
          u = Math.abs(n - t) > Math.PI ? n <= t : n > t;
        return "M" + e * r + "," + e * s + "A" + e + "," + e + " 0 0," + (u ? 1 : 0) + " " + e * a + "," + e * o + "L" + i * a + "," + i * o;
      };
      const _b = (t, e, n, i) => {
        const r = (t + n) / 2;
        return "M" + t + "," + e + "C" + r + "," + e + " " + r + "," + i + " " + n + "," + i;
      };
      const wb = (t, e, n, i) => {
        const r = (e + i) / 2;
        return "M" + t + "," + e + "C" + t + "," + r + " " + n + "," + r + " " + n + "," + i;
      };
      const Ab = (t, e, n, i) => {
        const r = Math.cos(t),
          s = Math.sin(t),
          a = Math.cos(n),
          o = Math.sin(n),
          u = (e + i) / 2;
        return "M" + e * r + "," + e * s + "C" + u * r + "," + u * s + " " + u * a + "," + u * o + " " + i * a + "," + i * o;
      };
      const kb = (0, p.nG)({
        line: db,
        "line-radial": hb,
        arc: pb,
        "arc-radial": mb,
        curve: gb,
        "curve-radial": yb,
        "orthogonal-horizontal": vb,
        "orthogonal-vertical": bb,
        "orthogonal-radial": xb,
        "diagonal-horizontal": _b,
        "diagonal-vertical": wb,
        "diagonal-radial": Ab,
      });
      function Eb(t) {
        zi.call(this, null, t);
      }
      Eb.Definition = {
        type: "Pie",
        metadata: { modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "startAngle", type: "number", default: 0 },
          { name: "endAngle", type: "number", default: 6.283185307179586 },
          { name: "sort", type: "boolean", default: false },
          { name: "as", type: "string", array: true, length: 2, default: ["startAngle", "endAngle"] },
        ],
      };
      (0, p.B)(Eb, zi, {
        transform(t, e) {
          var n = t.as || ["startAngle", "endAngle"],
            i = n[0],
            r = n[1],
            s = t.field || p.xH,
            a = t.startAngle || 0,
            o = t.endAngle != null ? t.endAngle : 2 * Math.PI,
            u = e.source,
            l = u.map(s),
            c = l.length,
            f = a,
            d = (o - a) / tb(l),
            h = (0, es.A)(c),
            m,
            g,
            y;
          if (t.sort) {
            h.sort((t, e) => l[t] - l[e]);
          }
          for (m = 0; m < c; ++m) {
            y = l[h[m]];
            g = u[h[m]];
            g[i] = f;
            g[r] = f += y * d;
          }
          this.value = l;
          return e.reflow(t.modified()).modifies(n);
        },
      });
      const Mb = 5;
      function Db(t) {
        const e = t.type;
        return !t.bins && (e === cl || e === dl || e === hl);
      }
      function Cb(t) {
        return Hl(t) && t !== yl;
      }
      const Fb = (0, p.M1)([
        "set",
        "modified",
        "clear",
        "type",
        "scheme",
        "schemeExtent",
        "schemeCount",
        "domain",
        "domainMin",
        "domainMid",
        "domainMax",
        "domainRaw",
        "domainImplicit",
        "nice",
        "zero",
        "bins",
        "range",
        "rangeStep",
        "round",
        "reverse",
        "interpolate",
        "interpolateGamma",
      ]);
      function Sb(t) {
        zi.call(this, null, t);
        this.modified(true);
      }
      (0, p.B)(Sb, zi, {
        transform(t, e) {
          var n = e.dataflow,
            i = this.value,
            r = Bb(t);
          if (!i || r !== i.type) {
            this.value = i = Yl(r)();
          }
          for (r in t)
            if (!Fb[r]) {
              if (r === "padding" && Cb(i.type)) continue;
              (0, p.Tn)(i[r]) ? i[r](t[r]) : n.warn("Unsupported scale property: " + r);
            }
          Lb(i, t, Nb(i, t, $b(i, t, n)));
          return e.fork(e.NO_SOURCE | e.NO_FIELDS);
        },
      });
      function Bb(t) {
        var e = t.type,
          n = "",
          i;
        if (e === yl) return yl + "-" + cl;
        if (zb(t)) {
          i = t.rawDomain ? t.rawDomain.length : t.domain ? t.domain.length + +(t.domainMid != null) : 0;
          n = i === 2 ? yl + "-" : i === 3 ? vl + "-" : "";
        }
        return (n + e || cl).toLowerCase();
      }
      function zb(t) {
        const e = t.type;
        return Hl(e) && e !== ml && e !== gl && (t.scheme || (t.range && t.range.length && t.range.every(p.Kg)));
      }
      function $b(t, e, n) {
        const i = Rb(t, e.domainRaw, n);
        if (i > -1) return i;
        var r = e.domain,
          s = t.type,
          a = e.zero || (e.zero === undefined && Db(t)),
          o,
          u;
        if (!r) return 0;
        if (a || e.domainMin != null || e.domainMax != null || e.domainMid != null) {
          o = (r = r.slice()).length - 1 || 1;
          if (a) {
            if (r[0] > 0) r[0] = 0;
            if (r[o] < 0) r[o] = 0;
          }
          if (e.domainMin != null) r[0] = e.domainMin;
          if (e.domainMax != null) r[o] = e.domainMax;
          if (e.domainMid != null) {
            u = e.domainMid;
            const t = u > r[o] ? o + 1 : u < r[0] ? 0 : o;
            if (t !== o) n.warn("Scale domainMid exceeds domain min or max.", u);
            r.splice(t, 0, u);
          }
        }
        if (Cb(s) && e.padding && r[0] !== (0, p.se)(r)) {
          r = Ob(s, r, e.range, e.padding, e.exponent, e.constant);
        }
        t.domain(Tb(s, r, n));
        if (s === wl) {
          t.unknown(e.domainImplicit ? Hu.h : undefined);
        }
        if (e.nice && t.nice) {
          t.nice((e.nice !== true && _c(t, e.nice)) || null);
        }
        return r.length;
      }
      function Rb(t, e, n) {
        if (e) {
          t.domain(Tb(t.type, e, n));
          return e.length;
        } else {
          return -1;
        }
      }
      function Ob(t, e, n, i, r, s) {
        var a = Math.abs((0, p.se)(n) - n[0]),
          o = a / (a - 2 * i),
          u =
            t === fl
              ? (0, p.oV)(e, null, o)
              : t === hl
                ? (0, p.SW)(e, null, o, 0.5)
                : t === dl
                  ? (0, p.SW)(e, null, o, r || 1)
                  : t === pl
                    ? (0, p.B2)(e, null, o, s || 1)
                    : (0, p.lL)(e, null, o);
        e = e.slice();
        e[0] = u[0];
        e[e.length - 1] = u[1];
        return e;
      }
      function Tb(t, e, n) {
        if (Kl(t)) {
          var i = Math.abs(e.reduce((t, e) => t + (e < 0 ? -1 : e > 0 ? 1 : 0), 0));
          if (i !== e.length) {
            n.warn("Log scale domain includes zero: " + (0, p.r$)(e));
          }
        }
        return e;
      }
      function Nb(t, e, n) {
        let i = e.bins;
        if (i && !(0, p.cy)(i)) {
          const e = t.domain(),
            n = e[0],
            r = (0, p.se)(e),
            s = i.step;
          let a = i.start == null ? n : i.start,
            o = i.stop == null ? r : i.stop;
          if (!s) (0, p.z3)("Scale bins parameter missing step property.");
          if (a < n) a = s * Math.ceil(n / s);
          if (o > r) o = s * Math.floor(r / s);
          i = (0, es.A)(a, o + s / 2, s);
        }
        if (i) {
          t.bins = i;
        } else if (t.bins) {
          delete t.bins;
        }
        if (t.type === El) {
          if (!i) {
            t.bins = t.domain();
          } else if (!e.domain && !e.domainRaw) {
            t.domain(i);
            n = i.length;
          }
        }
        return n;
      }
      function Lb(t, e, n) {
        var i = t.type,
          r = e.round || false,
          s = e.range;
        if (e.rangeStep != null) {
          s = Pb(i, e, n);
        } else if (e.scheme) {
          s = qb(i, e, n);
          if ((0, p.Tn)(s)) {
            if (t.interpolator) {
              return t.interpolator(s);
            } else {
              (0, p.z3)(`Scale type ${i} does not support interpolating color schemes.`);
            }
          }
        }
        if (s && Jl(i)) {
          return t.interpolator(ic(Ub(s, e.reverse), e.interpolate, e.interpolateGamma));
        }
        if (s && e.interpolate && t.interpolate) {
          t.interpolate(oc(e.interpolate, e.interpolateGamma));
        } else if ((0, p.Tn)(t.round)) {
          t.round(r);
        } else if ((0, p.Tn)(t.rangeRound)) {
          t.interpolate(r ? Su.A : Fu.A);
        }
        if (s) t.range(Ub(s, e.reverse));
      }
      function Pb(t, e, n) {
        if (t !== kl && t !== Al) {
          (0, p.z3)("Only band and point scales support rangeStep.");
        }
        var i = (e.paddingOuter != null ? e.paddingOuter : e.padding) || 0,
          r = t === Al ? 1 : (e.paddingInner != null ? e.paddingInner : e.padding) || 0;
        return [0, e.rangeStep * ul(n, r, i)];
      }
      function qb(t, e, n) {
        var i = e.schemeExtent,
          r,
          s;
        if ((0, p.cy)(e.scheme)) {
          s = ic(e.scheme, e.interpolate, e.interpolateGamma);
        } else {
          r = e.scheme.toLowerCase();
          s = pc(r);
          if (!s) (0, p.z3)(`Unrecognized scheme name: ${e.scheme}`);
        }
        n = t === _l ? n + 1 : t === El ? n - 1 : t === bl || t === xl ? +e.schemeCount || Mb : n;
        return Jl(t) ? Ib(s, i, e.reverse) : (0, p.Tn)(s) ? rc(Ib(s, i), n) : t === wl ? s : s.slice(0, n);
      }
      function Ib(t, e, n) {
        return (0, p.Tn)(t) && (e || n) ? nc(t, Ub(e || [0, 1], n)) : t;
      }
      function Ub(t, e) {
        return e ? t.slice().reverse() : t;
      }
      function jb(t) {
        zi.call(this, null, t);
      }
      (0, p.B)(jb, zi, {
        transform(t, e) {
          const n = t.modified("sort") || e.changed(e.ADD) || e.modified(t.sort.fields) || e.modified("datum");
          if (n) e.source.sort(An(t.sort));
          this.modified(n);
          return e;
        },
      });
      const Gb = "zero",
        Yb = "center",
        Wb = "normalize",
        Xb = ["y0", "y1"];
      function Hb(t) {
        zi.call(this, null, t);
      }
      Hb.Definition = {
        type: "Stack",
        metadata: { modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "groupby", type: "field", array: true },
          { name: "sort", type: "compare" },
          { name: "offset", type: "enum", default: Gb, values: [Gb, Yb, Wb] },
          { name: "as", type: "string", array: true, length: 2, default: Xb },
        ],
      };
      (0, p.B)(Hb, zi, {
        transform(t, e) {
          var n = t.as || Xb,
            i = n[0],
            r = n[1],
            s = An(t.sort),
            a = t.field || p.xH,
            o = t.offset === Yb ? Vb : t.offset === Wb ? Qb : Kb,
            u,
            l,
            c,
            f;
          u = Zb(e.source, t.groupby, s, a);
          for (l = 0, c = u.length, f = u.max; l < c; ++l) {
            o(u[l], f, a, i, r);
          }
          return e.reflow(t.modified()).modifies(n);
        },
      });
      function Vb(t, e, n, i, r) {
        var s = (e - t.sum) / 2,
          a = t.length,
          o = 0,
          u;
        for (; o < a; ++o) {
          u = t[o];
          u[i] = s;
          u[r] = s += Math.abs(n(u));
        }
      }
      function Qb(t, e, n, i, r) {
        var s = 1 / t.sum,
          a = 0,
          o = t.length,
          u = 0,
          l = 0,
          c;
        for (; u < o; ++u) {
          c = t[u];
          c[i] = a;
          c[r] = a = s * (l += Math.abs(n(c)));
        }
      }
      function Kb(t, e, n, i, r) {
        var s = 0,
          a = 0,
          o = t.length,
          u = 0,
          l,
          c;
        for (; u < o; ++u) {
          c = t[u];
          l = +n(c);
          if (l < 0) {
            c[i] = a;
            c[r] = a += l;
          } else {
            c[i] = s;
            c[r] = s += l;
          }
        }
      }
      function Zb(t, e, n, i) {
        var r = [],
          s = (t) => t(c),
          a,
          o,
          u,
          l,
          c,
          f,
          d,
          h,
          p;
        if (e == null) {
          r.push(t.slice());
        } else {
          for (a = {}, o = 0, u = t.length; o < u; ++o) {
            c = t[o];
            f = e.map(s);
            d = a[f];
            if (!d) {
              a[f] = d = [];
              r.push(d);
            }
            d.push(c);
          }
        }
        for (f = 0, p = 0, l = r.length; f < l; ++f) {
          d = r[f];
          for (o = 0, h = 0, u = d.length; o < u; ++o) {
            h += Math.abs(i(d[o]));
          }
          d.sum = h;
          if (h > p) p = h;
          if (n) d.sort(n);
        }
        r.max = p;
        return r;
      }
      const Jb = (t) => t;
      function tx(t, e) {
        if (t && nx.hasOwnProperty(t.type)) {
          nx[t.type](t, e);
        }
      }
      var ex = {
        Feature: function (t, e) {
          tx(t.geometry, e);
        },
        FeatureCollection: function (t, e) {
          var n = t.features,
            i = -1,
            r = n.length;
          while (++i < r) tx(n[i].geometry, e);
        },
      };
      var nx = {
        Sphere: function (t, e) {
          e.sphere();
        },
        Point: function (t, e) {
          t = t.coordinates;
          e.point(t[0], t[1], t[2]);
        },
        MultiPoint: function (t, e) {
          var n = t.coordinates,
            i = -1,
            r = n.length;
          while (++i < r) (t = n[i]), e.point(t[0], t[1], t[2]);
        },
        LineString: function (t, e) {
          ix(t.coordinates, e, 0);
        },
        MultiLineString: function (t, e) {
          var n = t.coordinates,
            i = -1,
            r = n.length;
          while (++i < r) ix(n[i], e, 0);
        },
        Polygon: function (t, e) {
          rx(t.coordinates, e);
        },
        MultiPolygon: function (t, e) {
          var n = t.coordinates,
            i = -1,
            r = n.length;
          while (++i < r) rx(n[i], e);
        },
        GeometryCollection: function (t, e) {
          var n = t.geometries,
            i = -1,
            r = n.length;
          while (++i < r) tx(n[i], e);
        },
      };
      function ix(t, e, n) {
        var i = -1,
          r = t.length - n,
          s;
        e.lineStart();
        while (++i < r) (s = t[i]), e.point(s[0], s[1], s[2]);
        e.lineEnd();
      }
      function rx(t, e) {
        var n = -1,
          i = t.length;
        e.polygonStart();
        while (++n < i) ix(t[n], e, 1);
        e.polygonEnd();
      }
      function sx(t, e) {
        if (t && ex.hasOwnProperty(t.type)) {
          ex[t.type](t, e);
        } else {
          tx(t, e);
        }
      }
      class ax {
        constructor() {
          this._partials = new Float64Array(32);
          this._n = 0;
        }
        add(t) {
          const e = this._partials;
          let n = 0;
          for (let i = 0; i < this._n && i < 32; i++) {
            const r = e[i],
              s = t + r,
              a = Math.abs(t) < Math.abs(r) ? t - (s - r) : r - (s - t);
            if (a) e[n++] = a;
            t = s;
          }
          e[n] = t;
          this._n = n + 1;
          return this;
        }
        valueOf() {
          const t = this._partials;
          let e = this._n,
            n,
            i,
            r,
            s = 0;
          if (e > 0) {
            s = t[--e];
            while (e > 0) {
              n = s;
              i = t[--e];
              s = n + i;
              r = i - (s - n);
              if (r) break;
            }
            if (e > 0 && ((r < 0 && t[e - 1] < 0) || (r > 0 && t[e - 1] > 0))) {
              i = r * 2;
              n = s + i;
              if (i == n - s) s = n;
            }
          }
          return s;
        }
      }
      function ox(t, e) {
        const n = new ax();
        if (e === undefined) {
          for (let e of t) {
            if ((e = +e)) {
              n.add(e);
            }
          }
        } else {
          let i = -1;
          for (let r of t) {
            if ((r = +e(r, ++i, t))) {
              n.add(r);
            }
          }
        }
        return +n;
      }
      function ux(t, e) {
        const n = new ax();
        let i = -1;
        return Float64Array.from(t, e === undefined ? (t) => n.add(+t || 0) : (r) => n.add(+e(r, ++i, t) || 0));
      }
      var lx = 1e-6;
      var cx = 1e-12;
      var fx = Math.PI;
      var dx = fx / 2;
      var hx = fx / 4;
      var px = fx * 2;
      var mx = 180 / fx;
      var gx = fx / 180;
      var yx = Math.abs;
      var vx = Math.atan;
      var bx = Math.atan2;
      var xx = Math.cos;
      var _x = Math.ceil;
      var wx = Math.exp;
      var Ax = Math.floor;
      var kx = Math.hypot;
      var Ex = Math.log;
      var Mx = Math.pow;
      var Dx = Math.sin;
      var Cx =
        Math.sign ||
        function (t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        };
      var Fx = Math.sqrt;
      var Sx = Math.tan;
      function Bx(t) {
        return t > 1 ? 0 : t < -1 ? fx : Math.acos(t);
      }
      function zx(t) {
        return t > 1 ? dx : t < -1 ? -dx : Math.asin(t);
      }
      function $x(t) {
        return (t = Dx(t / 2)) * t;
      }
      function Rx() {}
      var Ox = new ax(),
        Tx = new ax(),
        Nx,
        Lx,
        Px,
        qx;
      var Ix = {
        point: Rx,
        lineStart: Rx,
        lineEnd: Rx,
        polygonStart: function () {
          Ix.lineStart = Ux;
          Ix.lineEnd = Yx;
        },
        polygonEnd: function () {
          Ix.lineStart = Ix.lineEnd = Ix.point = Rx;
          Ox.add(yx(Tx));
          Tx = new ax();
        },
        result: function () {
          var t = Ox / 2;
          Ox = new ax();
          return t;
        },
      };
      function Ux() {
        Ix.point = jx;
      }
      function jx(t, e) {
        Ix.point = Gx;
        (Nx = Px = t), (Lx = qx = e);
      }
      function Gx(t, e) {
        Tx.add(qx * t - Px * e);
        (Px = t), (qx = e);
      }
      function Yx() {
        Gx(Nx, Lx);
      }
      const Wx = Ix;
      var Xx = Infinity,
        Hx = Xx,
        Vx = -Xx,
        Qx = Vx;
      var Kx = {
        point: Zx,
        lineStart: Rx,
        lineEnd: Rx,
        polygonStart: Rx,
        polygonEnd: Rx,
        result: function () {
          var t = [
            [Xx, Hx],
            [Vx, Qx],
          ];
          Vx = Qx = -(Hx = Xx = Infinity);
          return t;
        },
      };
      function Zx(t, e) {
        if (t < Xx) Xx = t;
        if (t > Vx) Vx = t;
        if (e < Hx) Hx = e;
        if (e > Qx) Qx = e;
      }
      const Jx = Kx;
      var t_ = 0,
        e_ = 0,
        n_ = 0,
        i_ = 0,
        r_ = 0,
        s_ = 0,
        a_ = 0,
        o_ = 0,
        u_ = 0,
        l_,
        c_,
        f_,
        d_;
      var h_ = {
        point: p_,
        lineStart: m_,
        lineEnd: v_,
        polygonStart: function () {
          h_.lineStart = b_;
          h_.lineEnd = x_;
        },
        polygonEnd: function () {
          h_.point = p_;
          h_.lineStart = m_;
          h_.lineEnd = v_;
        },
        result: function () {
          var t = u_ ? [a_ / u_, o_ / u_] : s_ ? [i_ / s_, r_ / s_] : n_ ? [t_ / n_, e_ / n_] : [NaN, NaN];
          t_ = e_ = n_ = i_ = r_ = s_ = a_ = o_ = u_ = 0;
          return t;
        },
      };
      function p_(t, e) {
        t_ += t;
        e_ += e;
        ++n_;
      }
      function m_() {
        h_.point = g_;
      }
      function g_(t, e) {
        h_.point = y_;
        p_((f_ = t), (d_ = e));
      }
      function y_(t, e) {
        var n = t - f_,
          i = e - d_,
          r = Fx(n * n + i * i);
        i_ += (r * (f_ + t)) / 2;
        r_ += (r * (d_ + e)) / 2;
        s_ += r;
        p_((f_ = t), (d_ = e));
      }
      function v_() {
        h_.point = p_;
      }
      function b_() {
        h_.point = __;
      }
      function x_() {
        w_(l_, c_);
      }
      function __(t, e) {
        h_.point = w_;
        p_((l_ = f_ = t), (c_ = d_ = e));
      }
      function w_(t, e) {
        var n = t - f_,
          i = e - d_,
          r = Fx(n * n + i * i);
        i_ += (r * (f_ + t)) / 2;
        r_ += (r * (d_ + e)) / 2;
        s_ += r;
        r = d_ * t - f_ * e;
        a_ += r * (f_ + t);
        o_ += r * (d_ + e);
        u_ += r * 3;
        p_((f_ = t), (d_ = e));
      }
      const A_ = h_;
      function k_(t) {
        this._context = t;
      }
      k_.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line === 0) this._context.closePath();
          this._point = NaN;
        },
        point: function (t, e) {
          switch (this._point) {
            case 0: {
              this._context.moveTo(t, e);
              this._point = 1;
              break;
            }
            case 1: {
              this._context.lineTo(t, e);
              break;
            }
            default: {
              this._context.moveTo(t + this._radius, e);
              this._context.arc(t, e, this._radius, 0, px);
              break;
            }
          }
        },
        result: Rx,
      };
      var E_ = new ax(),
        M_,
        D_,
        C_,
        F_,
        S_;
      var B_ = {
        point: Rx,
        lineStart: function () {
          B_.point = z_;
        },
        lineEnd: function () {
          if (M_) $_(D_, C_);
          B_.point = Rx;
        },
        polygonStart: function () {
          M_ = true;
        },
        polygonEnd: function () {
          M_ = null;
        },
        result: function () {
          var t = +E_;
          E_ = new ax();
          return t;
        },
      };
      function z_(t, e) {
        B_.point = $_;
        (D_ = F_ = t), (C_ = S_ = e);
      }
      function $_(t, e) {
        (F_ -= t), (S_ -= e);
        E_.add(Fx(F_ * F_ + S_ * S_));
        (F_ = t), (S_ = e);
      }
      const R_ = B_;
      let O_, T_, N_, L_;
      class P_ {
        constructor(t) {
          this._append = t == null ? q_ : I_(t);
          this._radius = 4.5;
          this._ = "";
        }
        pointRadius(t) {
          this._radius = +t;
          return this;
        }
        polygonStart() {
          this._line = 0;
        }
        polygonEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          if (this._line === 0) this._ += "Z";
          this._point = NaN;
        }
        point(t, e) {
          switch (this._point) {
            case 0: {
              this._append`M${t},${e}`;
              this._point = 1;
              break;
            }
            case 1: {
              this._append`L${t},${e}`;
              break;
            }
            default: {
              this._append`M${t},${e}`;
              if (this._radius !== N_ || this._append !== T_) {
                const t = this._radius;
                const e = this._;
                this._ = "";
                this._append`m0,${t}a${t},${t} 0 1,1 0,${-2 * t}a${t},${t} 0 1,1 0,${2 * t}z`;
                N_ = t;
                T_ = this._append;
                L_ = this._;
                this._ = e;
              }
              this._ += L_;
              break;
            }
          }
        }
        result() {
          const t = this._;
          this._ = "";
          return t.length ? t : null;
        }
      }
      function q_(t) {
        let e = 1;
        this._ += t[0];
        for (const n = t.length; e < n; ++e) {
          this._ += arguments[e] + t[e];
        }
      }
      function I_(t) {
        const e = Math.floor(t);
        if (!(e >= 0)) throw new RangeError(`invalid digits: ${t}`);
        if (e > 15) return q_;
        if (e !== O_) {
          const t = 10 ** e;
          O_ = e;
          T_ = function e(n) {
            let i = 1;
            this._ += n[0];
            for (const r = n.length; i < r; ++i) {
              this._ += Math.round(arguments[i] * t) / t + n[i];
            }
          };
        }
        return T_;
      }
      function U_(t, e) {
        let n = 3,
          i = 4.5,
          r,
          s;
        function a(t) {
          if (t) {
            if (typeof i === "function") s.pointRadius(+i.apply(this, arguments));
            sx(t, r(s));
          }
          return s.result();
        }
        a.area = function (t) {
          sx(t, r(Wx));
          return Wx.result();
        };
        a.measure = function (t) {
          sx(t, r(R_));
          return R_.result();
        };
        a.bounds = function (t) {
          sx(t, r(Jx));
          return Jx.result();
        };
        a.centroid = function (t) {
          sx(t, r(A_));
          return A_.result();
        };
        a.projection = function (e) {
          if (!arguments.length) return t;
          r = e == null ? ((t = null), Jb) : (t = e).stream;
          return a;
        };
        a.context = function (t) {
          if (!arguments.length) return e;
          s = t == null ? ((e = null), new P_(n)) : new k_((e = t));
          if (typeof i !== "function") s.pointRadius(i);
          return a;
        };
        a.pointRadius = function (t) {
          if (!arguments.length) return i;
          i = typeof t === "function" ? t : (s.pointRadius(+t), +t);
          return a;
        };
        a.digits = function (t) {
          if (!arguments.length) return n;
          if (t == null) n = null;
          else {
            const e = Math.floor(t);
            if (!(e >= 0)) throw new RangeError(`invalid digits: ${t}`);
            n = e;
          }
          if (e === null) s = new P_(n);
          return a;
        };
        return a.projection(t).digits(n).context(e);
      }
      function j_() {
        var t = [],
          e;
        return {
          point: function (t, n, i) {
            e.push([t, n, i]);
          },
          lineStart: function () {
            t.push((e = []));
          },
          lineEnd: Rx,
          rejoin: function () {
            if (t.length > 1) t.push(t.pop().concat(t.shift()));
          },
          result: function () {
            var n = t;
            t = [];
            e = null;
            return n;
          },
        };
      }
      function G_(t, e) {
        return yx(t[0] - e[0]) < lx && yx(t[1] - e[1]) < lx;
      }
      function Y_(t, e, n, i) {
        this.x = t;
        this.z = e;
        this.o = n;
        this.e = i;
        this.v = false;
        this.n = this.p = null;
      }
      function W_(t, e, n, i, r) {
        var s = [],
          a = [],
          o,
          u;
        t.forEach(function (t) {
          if ((e = t.length - 1) <= 0) return;
          var e,
            n = t[0],
            i = t[e],
            u;
          if (G_(n, i)) {
            if (!n[2] && !i[2]) {
              r.lineStart();
              for (o = 0; o < e; ++o) r.point((n = t[o])[0], n[1]);
              r.lineEnd();
              return;
            }
            i[0] += 2 * lx;
          }
          s.push((u = new Y_(n, t, null, true)));
          a.push((u.o = new Y_(n, null, u, false)));
          s.push((u = new Y_(i, t, null, false)));
          a.push((u.o = new Y_(i, null, u, true)));
        });
        if (!s.length) return;
        a.sort(e);
        X_(s);
        X_(a);
        for (o = 0, u = a.length; o < u; ++o) {
          a[o].e = n = !n;
        }
        var l = s[0],
          c,
          f;
        while (1) {
          var d = l,
            h = true;
          while (d.v) if ((d = d.n) === l) return;
          c = d.z;
          r.lineStart();
          do {
            d.v = d.o.v = true;
            if (d.e) {
              if (h) {
                for (o = 0, u = c.length; o < u; ++o) r.point((f = c[o])[0], f[1]);
              } else {
                i(d.x, d.n.x, 1, r);
              }
              d = d.n;
            } else {
              if (h) {
                c = d.p.z;
                for (o = c.length - 1; o >= 0; --o) r.point((f = c[o])[0], f[1]);
              } else {
                i(d.x, d.p.x, -1, r);
              }
              d = d.p;
            }
            d = d.o;
            c = d.z;
            h = !h;
          } while (!d.v);
          r.lineEnd();
        }
      }
      function X_(t) {
        if (!(e = t.length)) return;
        var e,
          n = 0,
          i = t[0],
          r;
        while (++n < e) {
          i.n = r = t[n];
          r.p = i;
          i = r;
        }
        i.n = r = t[0];
        r.p = i;
      }
      function H_(t) {
        return [bx(t[1], t[0]), zx(t[2])];
      }
      function V_(t) {
        var e = t[0],
          n = t[1],
          i = xx(n);
        return [i * xx(e), i * Dx(e), Dx(n)];
      }
      function Q_(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function K_(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
      }
      function Z_(t, e) {
        (t[0] += e[0]), (t[1] += e[1]), (t[2] += e[2]);
      }
      function J_(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e];
      }
      function tw(t) {
        var e = Fx(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= e), (t[1] /= e), (t[2] /= e);
      }
      function ew(t) {
        return yx(t[0]) <= fx ? t[0] : Cx(t[0]) * (((yx(t[0]) + fx) % px) - fx);
      }
      function nw(t, e) {
        var n = ew(e),
          i = e[1],
          r = Dx(i),
          s = [Dx(n), -xx(n), 0],
          a = 0,
          o = 0;
        var u = new ax();
        if (r === 1) i = dx + lx;
        else if (r === -1) i = -dx - lx;
        for (var l = 0, c = t.length; l < c; ++l) {
          if (!(d = (f = t[l]).length)) continue;
          var f,
            d,
            h = f[d - 1],
            p = ew(h),
            m = h[1] / 2 + hx,
            g = Dx(m),
            y = xx(m);
          for (var v = 0; v < d; ++v, p = x, g = w, y = A, h = b) {
            var b = f[v],
              x = ew(b),
              _ = b[1] / 2 + hx,
              w = Dx(_),
              A = xx(_),
              k = x - p,
              E = k >= 0 ? 1 : -1,
              M = E * k,
              D = M > fx,
              C = g * w;
            u.add(bx(C * E * Dx(M), y * A + C * xx(M)));
            a += D ? k + E * px : k;
            if (D ^ (p >= n) ^ (x >= n)) {
              var F = K_(V_(h), V_(b));
              tw(F);
              var S = K_(s, F);
              tw(S);
              var B = (D ^ (k >= 0) ? -1 : 1) * zx(S[2]);
              if (i > B || (i === B && (F[0] || F[1]))) {
                o += D ^ (k >= 0) ? 1 : -1;
              }
            }
          }
        }
        return (a < -lx || (a < lx && u < -cx)) ^ (o & 1);
      }
      function* iw(t) {
        for (const e of t) {
          yield* e;
        }
      }
      function rw(t) {
        return Array.from(iw(t));
      }
      function sw(t, e, n, i) {
        return function (r) {
          var s = e(r),
            a = j_(),
            o = e(a),
            u = false,
            l,
            c,
            f;
          var d = {
            point: h,
            lineStart: m,
            lineEnd: g,
            polygonStart: function () {
              d.point = y;
              d.lineStart = v;
              d.lineEnd = b;
              c = [];
              l = [];
            },
            polygonEnd: function () {
              d.point = h;
              d.lineStart = m;
              d.lineEnd = g;
              c = rw(c);
              var t = nw(l, i);
              if (c.length) {
                if (!u) r.polygonStart(), (u = true);
                W_(c, ow, t, n, r);
              } else if (t) {
                if (!u) r.polygonStart(), (u = true);
                r.lineStart();
                n(null, null, 1, r);
                r.lineEnd();
              }
              if (u) r.polygonEnd(), (u = false);
              c = l = null;
            },
            sphere: function () {
              r.polygonStart();
              r.lineStart();
              n(null, null, 1, r);
              r.lineEnd();
              r.polygonEnd();
            },
          };
          function h(e, n) {
            if (t(e, n)) r.point(e, n);
          }
          function p(t, e) {
            s.point(t, e);
          }
          function m() {
            d.point = p;
            s.lineStart();
          }
          function g() {
            d.point = h;
            s.lineEnd();
          }
          function y(t, e) {
            f.push([t, e]);
            o.point(t, e);
          }
          function v() {
            o.lineStart();
            f = [];
          }
          function b() {
            y(f[0][0], f[0][1]);
            o.lineEnd();
            var t = o.clean(),
              e = a.result(),
              n,
              i = e.length,
              s,
              d,
              h;
            f.pop();
            l.push(f);
            f = null;
            if (!i) return;
            if (t & 1) {
              d = e[0];
              if ((s = d.length - 1) > 0) {
                if (!u) r.polygonStart(), (u = true);
                r.lineStart();
                for (n = 0; n < s; ++n) r.point((h = d[n])[0], h[1]);
                r.lineEnd();
              }
              return;
            }
            if (i > 1 && t & 2) e.push(e.pop().concat(e.shift()));
            c.push(e.filter(aw));
          }
          return d;
        };
      }
      function aw(t) {
        return t.length > 1;
      }
      function ow(t, e) {
        return ((t = t.x)[0] < 0 ? t[1] - dx - lx : dx - t[1]) - ((e = e.x)[0] < 0 ? e[1] - dx - lx : dx - e[1]);
      }
      const uw = sw(
        function () {
          return true;
        },
        lw,
        fw,
        [-fx, -dx]
      );
      function lw(t) {
        var e = NaN,
          n = NaN,
          i = NaN,
          r;
        return {
          lineStart: function () {
            t.lineStart();
            r = 1;
          },
          point: function (s, a) {
            var o = s > 0 ? fx : -fx,
              u = yx(s - e);
            if (yx(u - fx) < lx) {
              t.point(e, (n = (n + a) / 2 > 0 ? dx : -dx));
              t.point(i, n);
              t.lineEnd();
              t.lineStart();
              t.point(o, n);
              t.point(s, n);
              r = 0;
            } else if (i !== o && u >= fx) {
              if (yx(e - i) < lx) e -= i * lx;
              if (yx(s - o) < lx) s -= o * lx;
              n = cw(e, n, s, a);
              t.point(i, n);
              t.lineEnd();
              t.lineStart();
              t.point(o, n);
              r = 0;
            }
            t.point((e = s), (n = a));
            i = o;
          },
          lineEnd: function () {
            t.lineEnd();
            e = n = NaN;
          },
          clean: function () {
            return 2 - r;
          },
        };
      }
      function cw(t, e, n, i) {
        var r,
          s,
          a = Dx(t - n);
        return yx(a) > lx ? vx((Dx(e) * (s = xx(i)) * Dx(n) - Dx(i) * (r = xx(e)) * Dx(t)) / (r * s * a)) : (e + i) / 2;
      }
      function fw(t, e, n, i) {
        var r;
        if (t == null) {
          r = n * dx;
          i.point(-fx, r);
          i.point(0, r);
          i.point(fx, r);
          i.point(fx, 0);
          i.point(fx, -r);
          i.point(0, -r);
          i.point(-fx, -r);
          i.point(-fx, 0);
          i.point(-fx, r);
        } else if (yx(t[0] - e[0]) > lx) {
          var s = t[0] < e[0] ? fx : -fx;
          r = (n * s) / 2;
          i.point(-s, r);
          i.point(0, r);
          i.point(s, r);
        } else {
          i.point(e[0], e[1]);
        }
      }
      function dw(t, e, n, i, r, s) {
        if (!n) return;
        var a = xx(e),
          o = Dx(e),
          u = i * n;
        if (r == null) {
          r = e + i * px;
          s = e - u / 2;
        } else {
          r = hw(a, r);
          s = hw(a, s);
          if (i > 0 ? r < s : r > s) r += i * px;
        }
        for (var l, c = r; i > 0 ? c > s : c < s; c -= u) {
          l = H_([a, -o * xx(c), -o * Dx(c)]);
          t.point(l[0], l[1]);
        }
      }
      function hw(t, e) {
        (e = V_(e)), (e[0] -= t);
        tw(e);
        var n = Bx(-e[1]);
        return ((-e[2] < 0 ? -n : n) + px - lx) % px;
      }
      function pw() {
        var t = constant([0, 0]),
          e = constant(90),
          n = constant(6),
          i,
          r,
          s = { point: a };
        function a(t, e) {
          i.push((t = r(t, e)));
          (t[0] *= degrees), (t[1] *= degrees);
        }
        function o() {
          var a = t.apply(this, arguments),
            o = e.apply(this, arguments) * radians,
            u = n.apply(this, arguments) * radians;
          i = [];
          r = rotateRadians(-a[0] * radians, -a[1] * radians, 0).invert;
          dw(s, o, u, 1);
          a = { type: "Polygon", coordinates: [i] };
          i = r = null;
          return a;
        }
        o.center = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : constant([+e[0], +e[1]])), o) : t;
        };
        o.radius = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : constant(+t)), o) : e;
        };
        o.precision = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : constant(+t)), o) : n;
        };
        return o;
      }
      function mw(t) {
        var e = xx(t),
          n = 6 * gx,
          i = e > 0,
          r = yx(e) > lx;
        function s(e, i, r, s) {
          dw(s, t, n, r, e, i);
        }
        function a(t, n) {
          return xx(t) * xx(n) > e;
        }
        function o(t) {
          var e, n, s, o, c;
          return {
            lineStart: function () {
              o = s = false;
              c = 1;
            },
            point: function (f, d) {
              var h = [f, d],
                p,
                m = a(f, d),
                g = i ? (m ? 0 : l(f, d)) : m ? l(f + (f < 0 ? fx : -fx), d) : 0;
              if (!e && (o = s = m)) t.lineStart();
              if (m !== s) {
                p = u(e, h);
                if (!p || G_(e, p) || G_(h, p)) h[2] = 1;
              }
              if (m !== s) {
                c = 0;
                if (m) {
                  t.lineStart();
                  p = u(h, e);
                  t.point(p[0], p[1]);
                } else {
                  p = u(e, h);
                  t.point(p[0], p[1], 2);
                  t.lineEnd();
                }
                e = p;
              } else if (r && e && i ^ m) {
                var y;
                if (!(g & n) && (y = u(h, e, true))) {
                  c = 0;
                  if (i) {
                    t.lineStart();
                    t.point(y[0][0], y[0][1]);
                    t.point(y[1][0], y[1][1]);
                    t.lineEnd();
                  } else {
                    t.point(y[1][0], y[1][1]);
                    t.lineEnd();
                    t.lineStart();
                    t.point(y[0][0], y[0][1], 3);
                  }
                }
              }
              if (m && (!e || !G_(e, h))) {
                t.point(h[0], h[1]);
              }
              (e = h), (s = m), (n = g);
            },
            lineEnd: function () {
              if (s) t.lineEnd();
              e = null;
            },
            clean: function () {
              return c | ((o && s) << 1);
            },
          };
        }
        function u(t, n, i) {
          var r = V_(t),
            s = V_(n);
          var a = [1, 0, 0],
            o = K_(r, s),
            u = Q_(o, o),
            l = o[0],
            c = u - l * l;
          if (!c) return !i && t;
          var f = (e * u) / c,
            d = (-e * l) / c,
            h = K_(a, o),
            p = J_(a, f),
            m = J_(o, d);
          Z_(p, m);
          var g = h,
            y = Q_(p, g),
            v = Q_(g, g),
            b = y * y - v * (Q_(p, p) - 1);
          if (b < 0) return;
          var x = Fx(b),
            _ = J_(g, (-y - x) / v);
          Z_(_, p);
          _ = H_(_);
          if (!i) return _;
          var w = t[0],
            A = n[0],
            k = t[1],
            E = n[1],
            M;
          if (A < w) (M = w), (w = A), (A = M);
          var D = A - w,
            C = yx(D - fx) < lx,
            F = C || D < lx;
          if (!C && E < k) (M = k), (k = E), (E = M);
          if (F ? (C ? (k + E > 0) ^ (_[1] < (yx(_[0] - w) < lx ? k : E)) : k <= _[1] && _[1] <= E) : (D > fx) ^ (w <= _[0] && _[0] <= A)) {
            var S = J_(g, (-y + x) / v);
            Z_(S, p);
            return [_, H_(S)];
          }
        }
        function l(e, n) {
          var r = i ? t : fx - t,
            s = 0;
          if (e < -r) s |= 1;
          else if (e > r) s |= 2;
          if (n < -r) s |= 4;
          else if (n > r) s |= 8;
          return s;
        }
        return sw(a, o, s, i ? [0, -t] : [-fx, t - fx]);
      }
      function gw(t, e, n, i, r, s) {
        var a = t[0],
          o = t[1],
          u = e[0],
          l = e[1],
          c = 0,
          f = 1,
          d = u - a,
          h = l - o,
          p;
        p = n - a;
        if (!d && p > 0) return;
        p /= d;
        if (d < 0) {
          if (p < c) return;
          if (p < f) f = p;
        } else if (d > 0) {
          if (p > f) return;
          if (p > c) c = p;
        }
        p = r - a;
        if (!d && p < 0) return;
        p /= d;
        if (d < 0) {
          if (p > f) return;
          if (p > c) c = p;
        } else if (d > 0) {
          if (p < c) return;
          if (p < f) f = p;
        }
        p = i - o;
        if (!h && p > 0) return;
        p /= h;
        if (h < 0) {
          if (p < c) return;
          if (p < f) f = p;
        } else if (h > 0) {
          if (p > f) return;
          if (p > c) c = p;
        }
        p = s - o;
        if (!h && p < 0) return;
        p /= h;
        if (h < 0) {
          if (p > f) return;
          if (p > c) c = p;
        } else if (h > 0) {
          if (p < c) return;
          if (p < f) f = p;
        }
        if (c > 0) (t[0] = a + c * d), (t[1] = o + c * h);
        if (f < 1) (e[0] = a + f * d), (e[1] = o + f * h);
        return true;
      }
      var yw = 1e9,
        vw = -yw;
      function bw(t, e, n, i) {
        function r(r, s) {
          return t <= r && r <= n && e <= s && s <= i;
        }
        function s(r, s, o, l) {
          var c = 0,
            f = 0;
          if (r == null || (c = a(r, o)) !== (f = a(s, o)) || (u(r, s) < 0) ^ (o > 0)) {
            do {
              l.point(c === 0 || c === 3 ? t : n, c > 1 ? i : e);
            } while ((c = (c + o + 4) % 4) !== f);
          } else {
            l.point(s[0], s[1]);
          }
        }
        function a(i, r) {
          return yx(i[0] - t) < lx ? (r > 0 ? 0 : 3) : yx(i[0] - n) < lx ? (r > 0 ? 2 : 1) : yx(i[1] - e) < lx ? (r > 0 ? 1 : 0) : r > 0 ? 3 : 2;
        }
        function o(t, e) {
          return u(t.x, e.x);
        }
        function u(t, e) {
          var n = a(t, 1),
            i = a(e, 1);
          return n !== i ? n - i : n === 0 ? e[1] - t[1] : n === 1 ? t[0] - e[0] : n === 2 ? t[1] - e[1] : e[0] - t[0];
        }
        return function (a) {
          var u = a,
            l = j_(),
            c,
            f,
            d,
            h,
            p,
            m,
            g,
            y,
            v,
            b,
            x;
          var _ = { point: w, lineStart: M, lineEnd: D, polygonStart: k, polygonEnd: E };
          function w(t, e) {
            if (r(t, e)) u.point(t, e);
          }
          function A() {
            var e = 0;
            for (var n = 0, r = f.length; n < r; ++n) {
              for (var s = f[n], a = 1, o = s.length, u = s[0], l, c, d = u[0], h = u[1]; a < o; ++a) {
                (l = d), (c = h), (u = s[a]), (d = u[0]), (h = u[1]);
                if (c <= i) {
                  if (h > i && (d - l) * (i - c) > (h - c) * (t - l)) ++e;
                } else {
                  if (h <= i && (d - l) * (i - c) < (h - c) * (t - l)) --e;
                }
              }
            }
            return e;
          }
          function k() {
            (u = l), (c = []), (f = []), (x = true);
          }
          function E() {
            var t = A(),
              e = x && t,
              n = (c = rw(c)).length;
            if (e || n) {
              a.polygonStart();
              if (e) {
                a.lineStart();
                s(null, null, 1, a);
                a.lineEnd();
              }
              if (n) {
                W_(c, o, t, s, a);
              }
              a.polygonEnd();
            }
            (u = a), (c = f = d = null);
          }
          function M() {
            _.point = C;
            if (f) f.push((d = []));
            b = true;
            v = false;
            g = y = NaN;
          }
          function D() {
            if (c) {
              C(h, p);
              if (m && v) l.rejoin();
              c.push(l.result());
            }
            _.point = w;
            if (v) u.lineEnd();
          }
          function C(s, a) {
            var o = r(s, a);
            if (f) d.push([s, a]);
            if (b) {
              (h = s), (p = a), (m = o);
              b = false;
              if (o) {
                u.lineStart();
                u.point(s, a);
              }
            } else {
              if (o && v) u.point(s, a);
              else {
                var l = [(g = Math.max(vw, Math.min(yw, g))), (y = Math.max(vw, Math.min(yw, y)))],
                  c = [(s = Math.max(vw, Math.min(yw, s))), (a = Math.max(vw, Math.min(yw, a)))];
                if (gw(l, c, t, e, n, i)) {
                  if (!v) {
                    u.lineStart();
                    u.point(l[0], l[1]);
                  }
                  u.point(c[0], c[1]);
                  if (!o) u.lineEnd();
                  x = false;
                } else if (o) {
                  u.lineStart();
                  u.point(s, a);
                  x = false;
                }
              }
            }
            (g = s), (y = a), (v = o);
          }
          return _;
        };
      }
      function xw(t, e) {
        function n(n, i) {
          return (n = t(n, i)), e(n[0], n[1]);
        }
        if (t.invert && e.invert)
          n.invert = function (n, i) {
            return (n = e.invert(n, i)), n && t.invert(n[0], n[1]);
          };
        return n;
      }
      function _w(t, e) {
        if (yx(t) > fx) t -= Math.round(t / px) * px;
        return [t, e];
      }
      _w.invert = _w;
      function ww(t, e, n) {
        return (t %= px) ? (e || n ? xw(kw(t), Ew(e, n)) : kw(t)) : e || n ? Ew(e, n) : _w;
      }
      function Aw(t) {
        return function (e, n) {
          e += t;
          if (yx(e) > fx) e -= Math.round(e / px) * px;
          return [e, n];
        };
      }
      function kw(t) {
        var e = Aw(t);
        e.invert = Aw(-t);
        return e;
      }
      function Ew(t, e) {
        var n = xx(t),
          i = Dx(t),
          r = xx(e),
          s = Dx(e);
        function a(t, e) {
          var a = xx(e),
            o = xx(t) * a,
            u = Dx(t) * a,
            l = Dx(e),
            c = l * n + o * i;
          return [bx(u * r - c * s, o * n - l * i), zx(c * r + u * s)];
        }
        a.invert = function (t, e) {
          var a = xx(e),
            o = xx(t) * a,
            u = Dx(t) * a,
            l = Dx(e),
            c = l * r - u * s;
          return [bx(u * r + l * s, o * n + c * i), zx(c * n - o * i)];
        };
        return a;
      }
      function Mw(t) {
        t = ww(t[0] * gx, t[1] * gx, t.length > 2 ? t[2] * gx : 0);
        function e(e) {
          e = t(e[0] * gx, e[1] * gx);
          return (e[0] *= mx), (e[1] *= mx), e;
        }
        e.invert = function (e) {
          e = t.invert(e[0] * gx, e[1] * gx);
          return (e[0] *= mx), (e[1] *= mx), e;
        };
        return e;
      }
      function Dw(t) {
        return { stream: Cw(t) };
      }
      function Cw(t) {
        return function (e) {
          var n = new Fw();
          for (var i in t) n[i] = t[i];
          n.stream = e;
          return n;
        };
      }
      function Fw() {}
      Fw.prototype = {
        constructor: Fw,
        point: function (t, e) {
          this.stream.point(t, e);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      function Sw(t, e, n) {
        var i = t.clipExtent && t.clipExtent();
        t.scale(150).translate([0, 0]);
        if (i != null) t.clipExtent(null);
        sx(n, t.stream(Jx));
        e(Jx.result());
        if (i != null) t.clipExtent(i);
        return t;
      }
      function Bw(t, e, n) {
        return Sw(
          t,
          function (n) {
            var i = e[1][0] - e[0][0],
              r = e[1][1] - e[0][1],
              s = Math.min(i / (n[1][0] - n[0][0]), r / (n[1][1] - n[0][1])),
              a = +e[0][0] + (i - s * (n[1][0] + n[0][0])) / 2,
              o = +e[0][1] + (r - s * (n[1][1] + n[0][1])) / 2;
            t.scale(150 * s).translate([a, o]);
          },
          n
        );
      }
      function zw(t, e, n) {
        return Bw(t, [[0, 0], e], n);
      }
      function $w(t, e, n) {
        return Sw(
          t,
          function (n) {
            var i = +e,
              r = i / (n[1][0] - n[0][0]),
              s = (i - r * (n[1][0] + n[0][0])) / 2,
              a = -r * n[0][1];
            t.scale(150 * r).translate([s, a]);
          },
          n
        );
      }
      function Rw(t, e, n) {
        return Sw(
          t,
          function (n) {
            var i = +e,
              r = i / (n[1][1] - n[0][1]),
              s = -r * n[0][0],
              a = (i - r * (n[1][1] + n[0][1])) / 2;
            t.scale(150 * r).translate([s, a]);
          },
          n
        );
      }
      var Ow = 16,
        Tw = xx(30 * gx);
      function Nw(t, e) {
        return +e ? Pw(t, e) : Lw(t);
      }
      function Lw(t) {
        return Cw({
          point: function (e, n) {
            e = t(e, n);
            this.stream.point(e[0], e[1]);
          },
        });
      }
      function Pw(t, e) {
        function n(i, r, s, a, o, u, l, c, f, d, h, p, m, g) {
          var y = l - i,
            v = c - r,
            b = y * y + v * v;
          if (b > 4 * e && m--) {
            var x = a + d,
              _ = o + h,
              w = u + p,
              A = Fx(x * x + _ * _ + w * w),
              k = zx((w /= A)),
              E = yx(yx(w) - 1) < lx || yx(s - f) < lx ? (s + f) / 2 : bx(_, x),
              M = t(E, k),
              D = M[0],
              C = M[1],
              F = D - i,
              S = C - r,
              B = v * F - y * S;
            if ((B * B) / b > e || yx((y * F + v * S) / b - 0.5) > 0.3 || a * d + o * h + u * p < Tw) {
              n(i, r, s, a, o, u, D, C, E, (x /= A), (_ /= A), w, m, g);
              g.point(D, C);
              n(D, C, E, x, _, w, l, c, f, d, h, p, m, g);
            }
          }
        }
        return function (e) {
          var i, r, s, a, o, u, l, c, f, d, h, p;
          var m = {
            point: g,
            lineStart: y,
            lineEnd: b,
            polygonStart: function () {
              e.polygonStart();
              m.lineStart = x;
            },
            polygonEnd: function () {
              e.polygonEnd();
              m.lineStart = y;
            },
          };
          function g(n, i) {
            n = t(n, i);
            e.point(n[0], n[1]);
          }
          function y() {
            c = NaN;
            m.point = v;
            e.lineStart();
          }
          function v(i, r) {
            var s = V_([i, r]),
              a = t(i, r);
            n(c, f, l, d, h, p, (c = a[0]), (f = a[1]), (l = i), (d = s[0]), (h = s[1]), (p = s[2]), Ow, e);
            e.point(c, f);
          }
          function b() {
            m.point = g;
            e.lineEnd();
          }
          function x() {
            y();
            m.point = _;
            m.lineEnd = w;
          }
          function _(t, e) {
            v((i = t), e), (r = c), (s = f), (a = d), (o = h), (u = p);
            m.point = v;
          }
          function w() {
            n(c, f, l, d, h, p, r, s, i, a, o, u, Ow, e);
            m.lineEnd = b;
            b();
          }
          return m;
        };
      }
      var qw = Cw({
        point: function (t, e) {
          this.stream.point(t * gx, e * gx);
        },
      });
      function Iw(t) {
        return Cw({
          point: function (e, n) {
            var i = t(e, n);
            return this.stream.point(i[0], i[1]);
          },
        });
      }
      function Uw(t, e, n, i, r) {
        function s(s, a) {
          s *= i;
          a *= r;
          return [e + t * s, n - t * a];
        }
        s.invert = function (s, a) {
          return [((s - e) / t) * i, ((n - a) / t) * r];
        };
        return s;
      }
      function jw(t, e, n, i, r, s) {
        if (!s) return Uw(t, e, n, i, r);
        var a = xx(s),
          o = Dx(s),
          u = a * t,
          l = o * t,
          c = a / t,
          f = o / t,
          d = (o * n - a * e) / t,
          h = (o * e + a * n) / t;
        function p(t, s) {
          t *= i;
          s *= r;
          return [u * t - l * s + e, n - l * t - u * s];
        }
        p.invert = function (t, e) {
          return [i * (c * t - f * e + d), r * (h - f * t - c * e)];
        };
        return p;
      }
      function Gw(t) {
        return Yw(function () {
          return t;
        })();
      }
      function Yw(t) {
        var e,
          n = 150,
          i = 480,
          r = 250,
          s = 0,
          a = 0,
          o = 0,
          u = 0,
          l = 0,
          c,
          f = 0,
          d = 1,
          h = 1,
          p = null,
          m = uw,
          g = null,
          y,
          v,
          b,
          x = Jb,
          _ = 0.5,
          w,
          A,
          k,
          E,
          M;
        function D(t) {
          return k(t[0] * gx, t[1] * gx);
        }
        function C(t) {
          t = k.invert(t[0], t[1]);
          return t && [t[0] * mx, t[1] * mx];
        }
        D.stream = function (t) {
          return E && M === t ? E : (E = qw(Iw(c)(m(w(x((M = t)))))));
        };
        D.preclip = function (t) {
          return arguments.length ? ((m = t), (p = undefined), S()) : m;
        };
        D.postclip = function (t) {
          return arguments.length ? ((x = t), (g = y = v = b = null), S()) : x;
        };
        D.clipAngle = function (t) {
          return arguments.length ? ((m = +t ? mw((p = t * gx)) : ((p = null), uw)), S()) : p * mx;
        };
        D.clipExtent = function (t) {
          return arguments.length
            ? ((x = t == null ? ((g = y = v = b = null), Jb) : bw((g = +t[0][0]), (y = +t[0][1]), (v = +t[1][0]), (b = +t[1][1]))), S())
            : g == null
              ? null
              : [
                  [g, y],
                  [v, b],
                ];
        };
        D.scale = function (t) {
          return arguments.length ? ((n = +t), F()) : n;
        };
        D.translate = function (t) {
          return arguments.length ? ((i = +t[0]), (r = +t[1]), F()) : [i, r];
        };
        D.center = function (t) {
          return arguments.length ? ((s = (t[0] % 360) * gx), (a = (t[1] % 360) * gx), F()) : [s * mx, a * mx];
        };
        D.rotate = function (t) {
          return arguments.length
            ? ((o = (t[0] % 360) * gx), (u = (t[1] % 360) * gx), (l = t.length > 2 ? (t[2] % 360) * gx : 0), F())
            : [o * mx, u * mx, l * mx];
        };
        D.angle = function (t) {
          return arguments.length ? ((f = (t % 360) * gx), F()) : f * mx;
        };
        D.reflectX = function (t) {
          return arguments.length ? ((d = t ? -1 : 1), F()) : d < 0;
        };
        D.reflectY = function (t) {
          return arguments.length ? ((h = t ? -1 : 1), F()) : h < 0;
        };
        D.precision = function (t) {
          return arguments.length ? ((w = Nw(A, (_ = t * t))), S()) : Fx(_);
        };
        D.fitExtent = function (t, e) {
          return Bw(D, t, e);
        };
        D.fitSize = function (t, e) {
          return zw(D, t, e);
        };
        D.fitWidth = function (t, e) {
          return $w(D, t, e);
        };
        D.fitHeight = function (t, e) {
          return Rw(D, t, e);
        };
        function F() {
          var t = jw(n, 0, 0, d, h, f).apply(null, e(s, a)),
            p = jw(n, i - t[0], r - t[1], d, h, f);
          c = ww(o, u, l);
          A = xw(e, p);
          k = xw(c, A);
          w = Nw(A, _);
          return S();
        }
        function S() {
          E = M = null;
          return D;
        }
        return function () {
          e = t.apply(this, arguments);
          D.invert = e.invert && C;
          return F();
        };
      }
      function Ww(t) {
        var e = 0,
          n = fx / 3,
          i = Yw(t),
          r = i(e, n);
        r.parallels = function (t) {
          return arguments.length ? i((e = t[0] * gx), (n = t[1] * gx)) : [e * mx, n * mx];
        };
        return r;
      }
      function Xw(t) {
        var e = xx(t);
        function n(t, n) {
          return [t * e, Dx(n) / e];
        }
        n.invert = function (t, n) {
          return [t / e, zx(n * e)];
        };
        return n;
      }
      function Hw(t, e) {
        var n = Dx(t),
          i = (n + Dx(e)) / 2;
        if (yx(i) < lx) return Xw(t);
        var r = 1 + n * (2 * i - n),
          s = Fx(r) / i;
        function a(t, e) {
          var n = Fx(r - 2 * i * Dx(e)) / i;
          return [n * Dx((t *= i)), s - n * xx(t)];
        }
        a.invert = function (t, e) {
          var n = s - e,
            a = bx(t, yx(n)) * Cx(n);
          if (n * i < 0) a -= fx * Cx(t) * Cx(n);
          return [a / i, zx((r - (t * t + n * n) * i * i) / (2 * i))];
        };
        return a;
      }
      function Vw() {
        return Ww(Hw).scale(155.424).center([0, 33.6442]);
      }
      function Qw() {
        return Vw().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
      }
      function Kw(t) {
        var e = t.length;
        return {
          point: function (n, i) {
            var r = -1;
            while (++r < e) t[r].point(n, i);
          },
          sphere: function () {
            var n = -1;
            while (++n < e) t[n].sphere();
          },
          lineStart: function () {
            var n = -1;
            while (++n < e) t[n].lineStart();
          },
          lineEnd: function () {
            var n = -1;
            while (++n < e) t[n].lineEnd();
          },
          polygonStart: function () {
            var n = -1;
            while (++n < e) t[n].polygonStart();
          },
          polygonEnd: function () {
            var n = -1;
            while (++n < e) t[n].polygonEnd();
          },
        };
      }
      function Zw() {
        var t,
          e,
          n = Qw(),
          i,
          r = Vw().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          s,
          a = Vw().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          o,
          u,
          l = {
            point: function (t, e) {
              u = [t, e];
            },
          };
        function c(t) {
          var e = t[0],
            n = t[1];
          return (u = null), (i.point(e, n), u) || (s.point(e, n), u) || (o.point(e, n), u);
        }
        c.invert = function (t) {
          var e = n.scale(),
            i = n.translate(),
            s = (t[0] - i[0]) / e,
            o = (t[1] - i[1]) / e;
          return (o >= 0.12 && o < 0.234 && s >= -0.425 && s < -0.214 ? r : o >= 0.166 && o < 0.234 && s >= -0.214 && s < -0.115 ? a : n).invert(t);
        };
        c.stream = function (i) {
          return t && e === i ? t : (t = Kw([n.stream((e = i)), r.stream(i), a.stream(i)]));
        };
        c.precision = function (t) {
          if (!arguments.length) return n.precision();
          n.precision(t), r.precision(t), a.precision(t);
          return f();
        };
        c.scale = function (t) {
          if (!arguments.length) return n.scale();
          n.scale(t), r.scale(t * 0.35), a.scale(t);
          return c.translate(n.translate());
        };
        c.translate = function (t) {
          if (!arguments.length) return n.translate();
          var e = n.scale(),
            u = +t[0],
            c = +t[1];
          i = n
            .translate(t)
            .clipExtent([
              [u - 0.455 * e, c - 0.238 * e],
              [u + 0.455 * e, c + 0.238 * e],
            ])
            .stream(l);
          s = r
            .translate([u - 0.307 * e, c + 0.201 * e])
            .clipExtent([
              [u - 0.425 * e + lx, c + 0.12 * e + lx],
              [u - 0.214 * e - lx, c + 0.234 * e - lx],
            ])
            .stream(l);
          o = a
            .translate([u - 0.205 * e, c + 0.212 * e])
            .clipExtent([
              [u - 0.214 * e + lx, c + 0.166 * e + lx],
              [u - 0.115 * e - lx, c + 0.234 * e - lx],
            ])
            .stream(l);
          return f();
        };
        c.fitExtent = function (t, e) {
          return Bw(c, t, e);
        };
        c.fitSize = function (t, e) {
          return zw(c, t, e);
        };
        c.fitWidth = function (t, e) {
          return $w(c, t, e);
        };
        c.fitHeight = function (t, e) {
          return Rw(c, t, e);
        };
        function f() {
          t = e = null;
          return c;
        }
        return c.scale(1070);
      }
      function Jw(t) {
        return function (e, n) {
          var i = xx(e),
            r = xx(n),
            s = t(i * r);
          if (s === Infinity) return [2, 0];
          return [s * r * Dx(e), s * Dx(n)];
        };
      }
      function tA(t) {
        return function (e, n) {
          var i = Fx(e * e + n * n),
            r = t(i),
            s = Dx(r),
            a = xx(r);
          return [bx(e * s, i * a), zx(i && (n * s) / i)];
        };
      }
      var eA = Jw(function (t) {
        return Fx(2 / (1 + t));
      });
      eA.invert = tA(function (t) {
        return 2 * zx(t / 2);
      });
      function nA() {
        return Gw(eA)
          .scale(124.75)
          .clipAngle(180 - 0.001);
      }
      var iA = Jw(function (t) {
        return (t = Bx(t)) && t / Dx(t);
      });
      iA.invert = tA(function (t) {
        return t;
      });
      function rA() {
        return Gw(iA)
          .scale(79.4188)
          .clipAngle(180 - 0.001);
      }
      function sA(t, e) {
        return [t, Ex(Sx((dx + e) / 2))];
      }
      sA.invert = function (t, e) {
        return [t, 2 * vx(wx(e)) - dx];
      };
      function aA() {
        return oA(sA).scale(961 / px);
      }
      function oA(t) {
        var e = Gw(t),
          n = e.center,
          i = e.scale,
          r = e.translate,
          s = e.clipExtent,
          a = null,
          o,
          u,
          l;
        e.scale = function (t) {
          return arguments.length ? (i(t), c()) : i();
        };
        e.translate = function (t) {
          return arguments.length ? (r(t), c()) : r();
        };
        e.center = function (t) {
          return arguments.length ? (n(t), c()) : n();
        };
        e.clipExtent = function (t) {
          return arguments.length
            ? (t == null ? (a = o = u = l = null) : ((a = +t[0][0]), (o = +t[0][1]), (u = +t[1][0]), (l = +t[1][1])), c())
            : a == null
              ? null
              : [
                  [a, o],
                  [u, l],
                ];
        };
        function c() {
          var n = fx * i(),
            r = e(Mw(e.rotate()).invert([0, 0]));
          return s(
            a == null
              ? [
                  [r[0] - n, r[1] - n],
                  [r[0] + n, r[1] + n],
                ]
              : t === sA
                ? [
                    [Math.max(r[0] - n, a), o],
                    [Math.min(r[0] + n, u), l],
                  ]
                : [
                    [a, Math.max(r[1] - n, o)],
                    [u, Math.min(r[1] + n, l)],
                  ]
          );
        }
        return c();
      }
      function uA(t) {
        return Sx((dx + t) / 2);
      }
      function lA(t, e) {
        var n = xx(t),
          i = t === e ? Dx(t) : Ex(n / xx(e)) / Ex(uA(e) / uA(t)),
          r = (n * Mx(uA(t), i)) / i;
        if (!i) return sA;
        function s(t, e) {
          if (r > 0) {
            if (e < -dx + lx) e = -dx + lx;
          } else {
            if (e > dx - lx) e = dx - lx;
          }
          var n = r / Mx(uA(e), i);
          return [n * Dx(i * t), r - n * xx(i * t)];
        }
        s.invert = function (t, e) {
          var n = r - e,
            s = Cx(i) * Fx(t * t + n * n),
            a = bx(t, yx(n)) * Cx(n);
          if (n * i < 0) a -= fx * Cx(t) * Cx(n);
          return [a / i, 2 * vx(Mx(r / s, 1 / i)) - dx];
        };
        return s;
      }
      function cA() {
        return Ww(lA).scale(109.5).parallels([30, 30]);
      }
      function fA(t, e) {
        return [t, e];
      }
      fA.invert = fA;
      function dA() {
        return Gw(fA).scale(152.63);
      }
      function hA(t, e) {
        var n = xx(t),
          i = t === e ? Dx(t) : (n - xx(e)) / (e - t),
          r = n / i + t;
        if (yx(i) < lx) return fA;
        function s(t, e) {
          var n = r - e,
            s = i * t;
          return [n * Dx(s), r - n * xx(s)];
        }
        s.invert = function (t, e) {
          var n = r - e,
            s = bx(t, yx(n)) * Cx(n);
          if (n * i < 0) s -= fx * Cx(t) * Cx(n);
          return [s / i, r - Cx(i) * Fx(t * t + n * n)];
        };
        return s;
      }
      function pA() {
        return Ww(hA).scale(131.154).center([0, 13.9389]);
      }
      var mA = 1.340264,
        gA = -0.081106,
        yA = 893e-6,
        vA = 0.003796,
        bA = Fx(3) / 2,
        xA = 12;
      function _A(t, e) {
        var n = zx(bA * Dx(e)),
          i = n * n,
          r = i * i * i;
        return [(t * xx(n)) / (bA * (mA + 3 * gA * i + r * (7 * yA + 9 * vA * i))), n * (mA + gA * i + r * (yA + vA * i))];
      }
      _A.invert = function (t, e) {
        var n = e,
          i = n * n,
          r = i * i * i;
        for (var s = 0, a, o, u; s < xA; ++s) {
          o = n * (mA + gA * i + r * (yA + vA * i)) - e;
          u = mA + 3 * gA * i + r * (7 * yA + 9 * vA * i);
          (n -= a = o / u), (i = n * n), (r = i * i * i);
          if (yx(a) < cx) break;
        }
        return [(bA * t * (mA + 3 * gA * i + r * (7 * yA + 9 * vA * i))) / xx(n), zx(Dx(n) / bA)];
      };
      function wA() {
        return Gw(_A).scale(177.158);
      }
      function AA(t, e) {
        var n = xx(e),
          i = xx(t) * n;
        return [(n * Dx(t)) / i, Dx(e) / i];
      }
      AA.invert = tA(vx);
      function kA() {
        return Gw(AA).scale(144.049).clipAngle(60);
      }
      function EA() {
        var t = 1,
          e = 0,
          n = 0,
          i = 1,
          r = 1,
          s = 0,
          a,
          o,
          u = null,
          l,
          c,
          f,
          d = 1,
          h = 1,
          p = Cw({
            point: function (t, e) {
              var n = b([t, e]);
              this.stream.point(n[0], n[1]);
            },
          }),
          m = Jb,
          g,
          y;
        function v() {
          d = t * i;
          h = t * r;
          g = y = null;
          return b;
        }
        function b(t) {
          var i = t[0] * d,
            r = t[1] * h;
          if (s) {
            var u = r * a - i * o;
            i = i * a + r * o;
            r = u;
          }
          return [i + e, r + n];
        }
        b.invert = function (t) {
          var i = t[0] - e,
            r = t[1] - n;
          if (s) {
            var u = r * a + i * o;
            i = i * a - r * o;
            r = u;
          }
          return [i / d, r / h];
        };
        b.stream = function (t) {
          return g && y === t ? g : (g = p(m((y = t))));
        };
        b.postclip = function (t) {
          return arguments.length ? ((m = t), (u = l = c = f = null), v()) : m;
        };
        b.clipExtent = function (t) {
          return arguments.length
            ? ((m = t == null ? ((u = l = c = f = null), Jb) : bw((u = +t[0][0]), (l = +t[0][1]), (c = +t[1][0]), (f = +t[1][1]))), v())
            : u == null
              ? null
              : [
                  [u, l],
                  [c, f],
                ];
        };
        b.scale = function (e) {
          return arguments.length ? ((t = +e), v()) : t;
        };
        b.translate = function (t) {
          return arguments.length ? ((e = +t[0]), (n = +t[1]), v()) : [e, n];
        };
        b.angle = function (t) {
          return arguments.length ? ((s = (t % 360) * gx), (o = Dx(s)), (a = xx(s)), v()) : s * mx;
        };
        b.reflectX = function (t) {
          return arguments.length ? ((i = t ? -1 : 1), v()) : i < 0;
        };
        b.reflectY = function (t) {
          return arguments.length ? ((r = t ? -1 : 1), v()) : r < 0;
        };
        b.fitExtent = function (t, e) {
          return Bw(b, t, e);
        };
        b.fitSize = function (t, e) {
          return zw(b, t, e);
        };
        b.fitWidth = function (t, e) {
          return $w(b, t, e);
        };
        b.fitHeight = function (t, e) {
          return Rw(b, t, e);
        };
        return b;
      }
      function MA(t, e) {
        var n = e * e,
          i = n * n;
        return [
          t * (0.8707 - 0.131979 * n + i * (-0.013791 + i * (0.003971 * n - 0.001529 * i))),
          e * (1.007226 + n * (0.015085 + i * (-0.044475 + 0.028874 * n - 0.005916 * i))),
        ];
      }
      MA.invert = function (t, e) {
        var n = e,
          i = 25,
          r;
        do {
          var s = n * n,
            a = s * s;
          n -= r =
            (n * (1.007226 + s * (0.015085 + a * (-0.044475 + 0.028874 * s - 0.005916 * a))) - e) /
            (1.007226 + s * (0.015085 * 3 + a * (-0.044475 * 7 + 0.028874 * 9 * s - 0.005916 * 11 * a)));
        } while (yx(r) > lx && --i > 0);
        return [t / (0.8707 + (s = n * n) * (-0.131979 + s * (-0.013791 + s * s * s * (0.003971 - 0.001529 * s)))), n];
      };
      function DA() {
        return Gw(MA).scale(175.295);
      }
      function CA(t, e) {
        return [xx(e) * Dx(t), Dx(e)];
      }
      CA.invert = tA(zx);
      function FA() {
        return Gw(CA)
          .scale(249.5)
          .clipAngle(90 + lx);
      }
      function SA(t, e) {
        var n = xx(e),
          i = 1 + xx(t) * n;
        return [(n * Dx(t)) / i, Dx(e) / i];
      }
      SA.invert = tA(function (t) {
        return 2 * vx(t);
      });
      function BA() {
        return Gw(SA).scale(250).clipAngle(142);
      }
      function zA(t, e) {
        return [Ex(Sx((dx + e) / 2)), -t];
      }
      zA.invert = function (t, e) {
        return [-e, 2 * vx(wx(t)) - dx];
      };
      function $A() {
        var t = oA(zA),
          e = t.center,
          n = t.rotate;
        t.center = function (t) {
          return arguments.length ? e([-t[1], t[0]]) : ((t = e()), [t[1], -t[0]]);
        };
        t.rotate = function (t) {
          return arguments.length ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : ((t = n()), [t[0], t[1], t[2] - 90]);
        };
        return n([0, 0, 90]).scale(159.155);
      }
      var RA = Math.abs;
      var OA = Math.atan;
      var TA = Math.atan2;
      var NA = Math.ceil;
      var LA = Math.cos;
      var PA = Math.exp;
      var qA = Math.floor;
      var IA = Math.log;
      var UA = Math.max;
      var jA = Math.min;
      var GA = Math.pow;
      var YA = Math.round;
      var WA =
        Math.sign ||
        function (t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        };
      var XA = Math.sin;
      var HA = Math.tan;
      var VA = 1e-6;
      var QA = 1e-12;
      var KA = Math.PI;
      var ZA = KA / 2;
      var JA = KA / 4;
      var tk = Math.SQRT1_2;
      var ek = lk(2);
      var nk = lk(KA);
      var ik = KA * 2;
      var rk = 180 / KA;
      var sk = KA / 180;
      function ak(t) {
        return t ? t / Math.sin(t) : 1;
      }
      function ok(t) {
        return t > 1 ? ZA : t < -1 ? -ZA : Math.asin(t);
      }
      function uk(t) {
        return t > 1 ? 0 : t < -1 ? KA : Math.acos(t);
      }
      function lk(t) {
        return t > 0 ? Math.sqrt(t) : 0;
      }
      function ck(t) {
        t = PA(2 * t);
        return (t - 1) / (t + 1);
      }
      function fk(t) {
        return (PA(t) - PA(-t)) / 2;
      }
      function dk(t) {
        return (PA(t) + PA(-t)) / 2;
      }
      function hk(t) {
        return IA(t + lk(t * t + 1));
      }
      function pk(t) {
        return IA(t + lk(t * t - 1));
      }
      function mk(t, e) {
        var n = t * XA(e),
          i = 30,
          r;
        do {
          e -= r = (e + XA(e) - n) / (1 + LA(e));
        } while (RA(r) > VA && --i > 0);
        return e / 2;
      }
      function gk(t, e, n) {
        function i(i, r) {
          return [t * i * LA((r = mk(n, r))), e * XA(r)];
        }
        i.invert = function (i, r) {
          return (r = ok(r / e)), [i / (t * LA(r)), ok((2 * r + XA(2 * r)) / n)];
        };
        return i;
      }
      var yk = gk(ek / ZA, ek, KA);
      function vk() {
        return Gw(yk).scale(169.529);
      }
      const bk = U_();
      const xk = [
        "clipAngle",
        "clipExtent",
        "scale",
        "translate",
        "center",
        "rotate",
        "parallels",
        "precision",
        "reflectX",
        "reflectY",
        "coefficient",
        "distance",
        "fraction",
        "lobes",
        "parallel",
        "radius",
        "ratio",
        "spacing",
        "tilt",
      ];
      function _k(t, e) {
        return function n() {
          const i = e();
          i.type = t;
          i.path = U_().projection(i);
          i.copy =
            i.copy ||
            function () {
              const t = n();
              xk.forEach((e) => {
                if (i[e]) t[e](i[e]());
              });
              t.path.pointRadius(i.path.pointRadius());
              return t;
            };
          return Ul(i);
        };
      }
      function wk(t, e) {
        if (!t || typeof t !== "string") {
          throw new Error("Projection type must be a name string.");
        }
        t = t.toLowerCase();
        if (arguments.length > 1) {
          kk[t] = _k(t, e);
          return this;
        } else {
          return kk[t] || null;
        }
      }
      function Ak(t) {
        return (t && t.path) || bk;
      }
      const kk = {
        albers: Qw,
        albersusa: Zw,
        azimuthalequalarea: nA,
        azimuthalequidistant: rA,
        conicconformal: cA,
        conicequalarea: Vw,
        conicequidistant: pA,
        equalEarth: wA,
        equirectangular: dA,
        gnomonic: kA,
        identity: EA,
        mercator: aA,
        mollweide: vk,
        naturalEarth1: DA,
        orthographic: FA,
        stereographic: BA,
        transversemercator: $A,
      };
      for (const yW in kk) {
        wk(yW, kk[yW]);
      }
      function Ek(t, e, n) {
        var i = (0, es.A)(t, e - lx, n).concat(e);
        return function (t) {
          return i.map(function (e) {
            return [t, e];
          });
        };
      }
      function Mk(t, e, n) {
        var i = (0, es.A)(t, e - lx, n).concat(e);
        return function (t) {
          return i.map(function (e) {
            return [e, t];
          });
        };
      }
      function Dk() {
        var t,
          e,
          n,
          i,
          r,
          s,
          a,
          o,
          u = 10,
          l = u,
          c = 90,
          f = 360,
          d,
          h,
          p,
          m,
          g = 2.5;
        function y() {
          return { type: "MultiLineString", coordinates: v() };
        }
        function v() {
          return (0, es.A)(_x(i / c) * c, n, c)
            .map(p)
            .concat((0, es.A)(_x(o / f) * f, a, f).map(m))
            .concat(
              (0, es.A)(_x(e / u) * u, t, u)
                .filter(function (t) {
                  return yx(t % c) > lx;
                })
                .map(d)
            )
            .concat(
              (0, es.A)(_x(s / l) * l, r, l)
                .filter(function (t) {
                  return yx(t % f) > lx;
                })
                .map(h)
            );
        }
        y.lines = function () {
          return v().map(function (t) {
            return { type: "LineString", coordinates: t };
          });
        };
        y.outline = function () {
          return { type: "Polygon", coordinates: [p(i).concat(m(a).slice(1), p(n).reverse().slice(1), m(o).reverse().slice(1))] };
        };
        y.extent = function (t) {
          if (!arguments.length) return y.extentMinor();
          return y.extentMajor(t).extentMinor(t);
        };
        y.extentMajor = function (t) {
          if (!arguments.length)
            return [
              [i, o],
              [n, a],
            ];
          (i = +t[0][0]), (n = +t[1][0]);
          (o = +t[0][1]), (a = +t[1][1]);
          if (i > n) (t = i), (i = n), (n = t);
          if (o > a) (t = o), (o = a), (a = t);
          return y.precision(g);
        };
        y.extentMinor = function (n) {
          if (!arguments.length)
            return [
              [e, s],
              [t, r],
            ];
          (e = +n[0][0]), (t = +n[1][0]);
          (s = +n[0][1]), (r = +n[1][1]);
          if (e > t) (n = e), (e = t), (t = n);
          if (s > r) (n = s), (s = r), (r = n);
          return y.precision(g);
        };
        y.step = function (t) {
          if (!arguments.length) return y.stepMinor();
          return y.stepMajor(t).stepMinor(t);
        };
        y.stepMajor = function (t) {
          if (!arguments.length) return [c, f];
          (c = +t[0]), (f = +t[1]);
          return y;
        };
        y.stepMinor = function (t) {
          if (!arguments.length) return [u, l];
          (u = +t[0]), (l = +t[1]);
          return y;
        };
        y.precision = function (u) {
          if (!arguments.length) return g;
          g = +u;
          d = Ek(s, r, 90);
          h = Mk(e, t, g);
          p = Ek(o, a, 90);
          m = Mk(i, n, g);
          return y;
        };
        return y
          .extentMajor([
            [-180, -90 + lx],
            [180, 90 - lx],
          ])
          .extentMinor([
            [-180, -80 - lx],
            [180, 80 + lx],
          ]);
      }
      function Ck() {
        return Dk()();
      }
      var Fk = n(33844);
      function Sk() {}
      const Bk = [
        [],
        [
          [
            [1, 1.5],
            [0.5, 1],
          ],
        ],
        [
          [
            [1.5, 1],
            [1, 1.5],
          ],
        ],
        [
          [
            [1.5, 1],
            [0.5, 1],
          ],
        ],
        [
          [
            [1, 0.5],
            [1.5, 1],
          ],
        ],
        [
          [
            [1, 1.5],
            [0.5, 1],
          ],
          [
            [1, 0.5],
            [1.5, 1],
          ],
        ],
        [
          [
            [1, 0.5],
            [1, 1.5],
          ],
        ],
        [
          [
            [1, 0.5],
            [0.5, 1],
          ],
        ],
        [
          [
            [0.5, 1],
            [1, 0.5],
          ],
        ],
        [
          [
            [1, 1.5],
            [1, 0.5],
          ],
        ],
        [
          [
            [0.5, 1],
            [1, 0.5],
          ],
          [
            [1.5, 1],
            [1, 1.5],
          ],
        ],
        [
          [
            [1.5, 1],
            [1, 0.5],
          ],
        ],
        [
          [
            [0.5, 1],
            [1.5, 1],
          ],
        ],
        [
          [
            [1, 1.5],
            [1.5, 1],
          ],
        ],
        [
          [
            [0.5, 1],
            [1, 1.5],
          ],
        ],
        [],
      ];
      function zk() {
        var t = 1,
          e = 1,
          n = o;
        function i(t, e) {
          return e.map((e) => r(t, e));
        }
        function r(t, e) {
          var i = [],
            r = [];
          s(t, e, (s) => {
            n(s, t, e);
            if ($k(s) > 0) i.push([s]);
            else r.push(s);
          });
          r.forEach((t) => {
            for (var e = 0, n = i.length, r; e < n; ++e) {
              if (Rk((r = i[e])[0], t) !== -1) {
                r.push(t);
                return;
              }
            }
          });
          return { type: "MultiPolygon", value: e, coordinates: i };
        }
        function s(n, i, r) {
          var s = [],
            o = [],
            u,
            l,
            c,
            f,
            d,
            h;
          u = l = -1;
          f = n[0] >= i;
          Bk[f << 1].forEach(p);
          while (++u < t - 1) {
            (c = f), (f = n[u + 1] >= i);
            Bk[c | (f << 1)].forEach(p);
          }
          Bk[f << 0].forEach(p);
          while (++l < e - 1) {
            u = -1;
            f = n[l * t + t] >= i;
            d = n[l * t] >= i;
            Bk[(f << 1) | (d << 2)].forEach(p);
            while (++u < t - 1) {
              (c = f), (f = n[l * t + t + u + 1] >= i);
              (h = d), (d = n[l * t + u + 1] >= i);
              Bk[c | (f << 1) | (d << 2) | (h << 3)].forEach(p);
            }
            Bk[f | (d << 3)].forEach(p);
          }
          u = -1;
          d = n[l * t] >= i;
          Bk[d << 2].forEach(p);
          while (++u < t - 1) {
            (h = d), (d = n[l * t + u + 1] >= i);
            Bk[(d << 2) | (h << 3)].forEach(p);
          }
          Bk[d << 3].forEach(p);
          function p(t) {
            var e = [t[0][0] + u, t[0][1] + l],
              n = [t[1][0] + u, t[1][1] + l],
              i = a(e),
              c = a(n),
              f,
              d;
            if ((f = o[i])) {
              if ((d = s[c])) {
                delete o[f.end];
                delete s[d.start];
                if (f === d) {
                  f.ring.push(n);
                  r(f.ring);
                } else {
                  s[f.start] = o[d.end] = { start: f.start, end: d.end, ring: f.ring.concat(d.ring) };
                }
              } else {
                delete o[f.end];
                f.ring.push(n);
                o[(f.end = c)] = f;
              }
            } else if ((f = s[c])) {
              if ((d = o[i])) {
                delete s[f.start];
                delete o[d.end];
                if (f === d) {
                  f.ring.push(n);
                  r(f.ring);
                } else {
                  s[d.start] = o[f.end] = { start: d.start, end: f.end, ring: d.ring.concat(f.ring) };
                }
              } else {
                delete s[f.start];
                f.ring.unshift(e);
                s[(f.start = i)] = f;
              }
            } else {
              s[i] = o[c] = { start: i, end: c, ring: [e, n] };
            }
          }
        }
        function a(e) {
          return e[0] * 2 + e[1] * (t + 1) * 4;
        }
        function o(n, i, r) {
          n.forEach((n) => {
            var s = n[0],
              a = n[1],
              o = s | 0,
              u = a | 0,
              l,
              c = i[u * t + o];
            if (s > 0 && s < t && o === s) {
              l = i[u * t + o - 1];
              n[0] = s + (r - l) / (c - l) - 0.5;
            }
            if (a > 0 && a < e && u === a) {
              l = i[(u - 1) * t + o];
              n[1] = a + (r - l) / (c - l) - 0.5;
            }
          });
        }
        i.contour = r;
        i.size = function (n) {
          if (!arguments.length) return [t, e];
          var r = Math.floor(n[0]),
            s = Math.floor(n[1]);
          if (!(r >= 0 && s >= 0)) (0, p.z3)("invalid size");
          return (t = r), (e = s), i;
        };
        i.smooth = function (t) {
          return arguments.length ? ((n = t ? o : Sk), i) : n === o;
        };
        return i;
      }
      function $k(t) {
        var e = 0,
          n = t.length,
          i = t[n - 1][1] * t[0][0] - t[n - 1][0] * t[0][1];
        while (++e < n) i += t[e - 1][1] * t[e][0] - t[e - 1][0] * t[e][1];
        return i;
      }
      function Rk(t, e) {
        var n = -1,
          i = e.length,
          r;
        while (++n < i) if ((r = Ok(t, e[n]))) return r;
        return 0;
      }
      function Ok(t, e) {
        var n = e[0],
          i = e[1],
          r = -1;
        for (var s = 0, a = t.length, o = a - 1; s < a; o = s++) {
          var u = t[s],
            l = u[0],
            c = u[1],
            f = t[o],
            d = f[0],
            h = f[1];
          if (Tk(u, f, e)) return 0;
          if (c > i !== h > i && n < ((d - l) * (i - c)) / (h - c) + l) r = -r;
        }
        return r;
      }
      function Tk(t, e, n) {
        var i;
        return Nk(t, e, n) && Lk(t[(i = +(t[0] === e[0]))], n[i], e[i]);
      }
      function Nk(t, e, n) {
        return (e[0] - t[0]) * (n[1] - t[1]) === (n[0] - t[0]) * (e[1] - t[1]);
      }
      function Lk(t, e, n) {
        return (t <= e && e <= n) || (n <= e && e <= t);
      }
      function Pk(t, e, n) {
        return function (i) {
          var r = (0, p.Xx)(i),
            s = n ? Math.min(r[0], 0) : r[0],
            a = r[1],
            o = a - s,
            u = e ? (0, N.sG)(s, a, t) : o / (t + 1);
          return (0, es.A)(s + u, a, u);
        };
      }
      function qk(t) {
        zi.call(this, null, t);
      }
      qk.Definition = {
        type: "Isocontour",
        metadata: { generates: true },
        params: [
          { name: "field", type: "field" },
          { name: "thresholds", type: "number", array: true },
          { name: "levels", type: "number" },
          { name: "nice", type: "boolean", default: false },
          { name: "resolve", type: "enum", values: ["shared", "independent"], default: "independent" },
          { name: "zero", type: "boolean", default: true },
          { name: "smooth", type: "boolean", default: true },
          { name: "scale", type: "number", expr: true },
          { name: "translate", type: "number", array: true, expr: true },
          { name: "as", type: "string", null: true, default: "contour" },
        ],
      };
      (0, p.B)(qk, zi, {
        transform(t, e) {
          if (this.value && !e.changed() && !t.modified()) {
            return e.StopPropagation;
          }
          var n = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            i = e.materialize(e.SOURCE).source,
            r = t.field || p.D_,
            s = zk().smooth(t.smooth !== false),
            a = t.thresholds || Ik(i, r, t),
            o = t.as === null ? null : t.as || "contour",
            u = [];
          i.forEach((e) => {
            const n = r(e);
            const i = s.size([n.width, n.height])(n.values, (0, p.cy)(a) ? a : a(n.values));
            Uk(i, n, e, t);
            i.forEach((t) => {
              u.push(_n(e, bn(o != null ? { [o]: t } : t)));
            });
          });
          if (this.value) n.rem = this.value;
          this.value = n.source = n.add = u;
          return n;
        },
      });
      function Ik(t, e, n) {
        const i = Pk(n.levels || 10, n.nice, n.zero !== false);
        return n.resolve !== "shared" ? i : i(t.map((t) => (0, Ni.A)(e(t).values)));
      }
      function Uk(t, e, n, i) {
        let r = i.scale || e.scale,
          s = i.translate || e.translate;
        if ((0, p.Tn)(r)) r = r(n, i);
        if ((0, p.Tn)(s)) s = s(n, i);
        if ((r === 1 || r == null) && !s) return;
        const a = ((0, p.Et)(r) ? r : r[0]) || 1,
          o = ((0, p.Et)(r) ? r : r[1]) || 1,
          u = (s && s[0]) || 0,
          l = (s && s[1]) || 0;
        t.forEach(jk(e, a, o, u, l));
      }
      function jk(t, e, n, i, r) {
        const s = t.x1 || 0,
          a = t.y1 || 0,
          o = e * n < 0;
        function u(t) {
          t.forEach(l);
        }
        function l(t) {
          if (o) t.reverse();
          t.forEach(c);
        }
        function c(t) {
          t[0] = (t[0] - s) * e + i;
          t[1] = (t[1] - a) * n + r;
        }
        return function (t) {
          t.coordinates.forEach(u);
          return t;
        };
      }
      function Gk(t, e, n) {
        const i = t >= 0 ? t : er(e, n);
        return Math.round((Math.sqrt(4 * i * i + 1) - 1) / 2);
      }
      function Yk(t) {
        return (0, p.Tn)(t) ? t : (0, p.dY)(+t);
      }
      function Wk() {
        var t = (t) => t[0],
          e = (t) => t[1],
          n = p.xH,
          i = [-1, -1],
          r = 960,
          s = 500,
          a = 2;
        function o(o, u) {
          const l = Gk(i[0], o, t) >> a,
            c = Gk(i[1], o, e) >> a,
            f = l ? l + 2 : 0,
            d = c ? c + 2 : 0,
            h = 2 * f + (r >> a),
            p = 2 * d + (s >> a),
            m = new Float32Array(h * p),
            g = new Float32Array(h * p);
          let y = m;
          o.forEach((i) => {
            const r = f + (+t(i) >> a),
              s = d + (+e(i) >> a);
            if (r >= 0 && r < h && s >= 0 && s < p) {
              m[r + s * h] += +n(i);
            }
          });
          if (l > 0 && c > 0) {
            Xk(h, p, m, g, l);
            Hk(h, p, g, m, c);
            Xk(h, p, m, g, l);
            Hk(h, p, g, m, c);
            Xk(h, p, m, g, l);
            Hk(h, p, g, m, c);
          } else if (l > 0) {
            Xk(h, p, m, g, l);
            Xk(h, p, g, m, l);
            Xk(h, p, m, g, l);
            y = g;
          } else if (c > 0) {
            Hk(h, p, m, g, c);
            Hk(h, p, g, m, c);
            Hk(h, p, m, g, c);
            y = g;
          }
          const v = u ? Math.pow(2, -2 * a) : 1 / tb(y);
          for (let t = 0, e = h * p; t < e; ++t) y[t] *= v;
          return { values: y, scale: 1 << a, width: h, height: p, x1: f, y1: d, x2: f + (r >> a), y2: d + (s >> a) };
        }
        o.x = function (e) {
          return arguments.length ? ((t = Yk(e)), o) : t;
        };
        o.y = function (t) {
          return arguments.length ? ((e = Yk(t)), o) : e;
        };
        o.weight = function (t) {
          return arguments.length ? ((n = Yk(t)), o) : n;
        };
        o.size = function (t) {
          if (!arguments.length) return [r, s];
          var e = +t[0],
            n = +t[1];
          if (!(e >= 0 && n >= 0)) (0, p.z3)("invalid size");
          return (r = e), (s = n), o;
        };
        o.cellSize = function (t) {
          if (!arguments.length) return 1 << a;
          if (!((t = +t) >= 1)) (0, p.z3)("invalid cell size");
          a = Math.floor(Math.log(t) / Math.LN2);
          return o;
        };
        o.bandwidth = function (t) {
          if (!arguments.length) return i;
          t = (0, p.YO)(t);
          if (t.length === 1) t = [+t[0], +t[0]];
          if (t.length !== 2) (0, p.z3)("invalid bandwidth");
          return (i = t), o;
        };
        return o;
      }
      function Xk(t, e, n, i, r) {
        const s = (r << 1) + 1;
        for (let a = 0; a < e; ++a) {
          for (let e = 0, o = 0; e < t + r; ++e) {
            if (e < t) {
              o += n[e + a * t];
            }
            if (e >= r) {
              if (e >= s) {
                o -= n[e - s + a * t];
              }
              i[e - r + a * t] = o / Math.min(e + 1, t - 1 + s - e, s);
            }
          }
        }
      }
      function Hk(t, e, n, i, r) {
        const s = (r << 1) + 1;
        for (let a = 0; a < t; ++a) {
          for (let o = 0, u = 0; o < e + r; ++o) {
            if (o < e) {
              u += n[a + o * t];
            }
            if (o >= r) {
              if (o >= s) {
                u -= n[a + (o - s) * t];
              }
              i[a + (o - r) * t] = u / Math.min(o + 1, e - 1 + s - o, s);
            }
          }
        }
      }
      function Vk(t) {
        zi.call(this, null, t);
      }
      Vk.Definition = {
        type: "KDE2D",
        metadata: { generates: true },
        params: [
          { name: "size", type: "number", array: true, length: 2, required: true },
          { name: "x", type: "field", required: true },
          { name: "y", type: "field", required: true },
          { name: "weight", type: "field" },
          { name: "groupby", type: "field", array: true },
          { name: "cellSize", type: "number" },
          { name: "bandwidth", type: "number", array: true, length: 2 },
          { name: "counts", type: "boolean", default: false },
          { name: "as", type: "string", default: "grid" },
        ],
      };
      const Qk = ["x", "y", "weight", "size", "cellSize", "bandwidth"];
      function Kk(t, e) {
        Qk.forEach((n) => (e[n] != null ? t[n](e[n]) : 0));
        return t;
      }
      (0, p.B)(Vk, zi, {
        transform(t, e) {
          if (this.value && !e.changed() && !t.modified()) return e.StopPropagation;
          var n = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            i = e.materialize(e.SOURCE).source,
            r = Zk(i, t.groupby),
            s = (t.groupby || []).map(p.N6),
            a = Kk(Wk(), t),
            o = t.as || "grid",
            u = [];
          function l(t, e) {
            for (let n = 0; n < s.length; ++n) t[s[n]] = e[n];
            return t;
          }
          u = r.map((e) => bn(l({ [o]: a(e, t.counts) }, e.dims)));
          if (this.value) n.rem = this.value;
          this.value = n.source = n.add = u;
          return n;
        },
      });
      function Zk(t, e) {
        var n = [],
          i = (t) => t(o),
          r,
          s,
          a,
          o,
          u,
          l;
        if (e == null) {
          n.push(t);
        } else {
          for (r = {}, s = 0, a = t.length; s < a; ++s) {
            o = t[s];
            u = e.map(i);
            l = r[u];
            if (!l) {
              r[u] = l = [];
              l.dims = u;
              n.push(l);
            }
            l.push(o);
          }
        }
        return n;
      }
      function Jk(t) {
        zi.call(this, null, t);
      }
      Jk.Definition = {
        type: "Contour",
        metadata: { generates: true },
        params: [
          { name: "size", type: "number", array: true, length: 2, required: true },
          { name: "values", type: "number", array: true },
          { name: "x", type: "field" },
          { name: "y", type: "field" },
          { name: "weight", type: "field" },
          { name: "cellSize", type: "number" },
          { name: "bandwidth", type: "number" },
          { name: "count", type: "number" },
          { name: "nice", type: "boolean", default: false },
          { name: "thresholds", type: "number", array: true },
          { name: "smooth", type: "boolean", default: true },
        ],
      };
      (0, p.B)(Jk, zi, {
        transform(t, e) {
          if (this.value && !e.changed() && !t.modified()) {
            return e.StopPropagation;
          }
          var n = e.fork(e.NO_SOURCE | e.NO_FIELDS),
            i = zk().smooth(t.smooth !== false),
            r = t.values,
            s = t.thresholds || Pk(t.count || 10, t.nice, !!r),
            a = t.size,
            o,
            u;
          if (!r) {
            r = e.materialize(e.SOURCE).source;
            o = Kk(Wk(), t)(r, true);
            u = jk(o, o.scale || 1, o.scale || 1, 0, 0);
            a = [o.width, o.height];
            r = o.values;
          }
          s = (0, p.cy)(s) ? s : s(r);
          r = i.size(a)(r, s);
          if (u) r.forEach(u);
          if (this.value) n.rem = this.value;
          this.value = n.source = n.add = (r || []).map(bn);
          return n;
        },
      });
      const tE = "Feature";
      const eE = "FeatureCollection";
      const nE = "MultiPoint";
      function iE(t) {
        zi.call(this, null, t);
      }
      iE.Definition = {
        type: "GeoJSON",
        metadata: {},
        params: [
          { name: "fields", type: "field", array: true, length: 2 },
          { name: "geojson", type: "field" },
        ],
      };
      (0, p.B)(iE, zi, {
        transform(t, e) {
          var n = this._features,
            i = this._points,
            r = t.fields,
            s = r && r[0],
            a = r && r[1],
            o = t.geojson || (!r && p.D_),
            u = e.ADD,
            l;
          l = t.modified() || e.changed(e.REM) || e.modified((0, p.nS)(o)) || (s && e.modified((0, p.nS)(s))) || (a && e.modified((0, p.nS)(a)));
          if (!this.value || l) {
            u = e.SOURCE;
            this._features = n = [];
            this._points = i = [];
          }
          if (o) {
            e.visit(u, (t) => n.push(o(t)));
          }
          if (s && a) {
            e.visit(u, (t) => {
              var e = s(t),
                n = a(t);
              if (e != null && n != null && (e = +e) === e && (n = +n) === n) {
                i.push([e, n]);
              }
            });
            n = n.concat({ type: tE, geometry: { type: nE, coordinates: i } });
          }
          this.value = { type: eE, features: n };
        },
      });
      function rE(t) {
        zi.call(this, null, t);
      }
      rE.Definition = {
        type: "GeoPath",
        metadata: { modifies: true },
        params: [
          { name: "projection", type: "projection" },
          { name: "field", type: "field" },
          { name: "pointRadius", type: "number", expr: true },
          { name: "as", type: "string", default: "path" },
        ],
      };
      (0, p.B)(rE, zi, {
        transform(t, e) {
          var n = e.fork(e.ALL),
            i = this.value,
            r = t.field || p.D_,
            s = t.as || "path",
            a = n.SOURCE;
          if (!i || t.modified()) {
            this.value = i = Ak(t.projection);
            n.materialize().reflow();
          } else {
            a = r === p.D_ || e.modified(r.fields) ? n.ADD_MOD : n.ADD;
          }
          const o = sE(i, t.pointRadius);
          n.visit(a, (t) => (t[s] = i(r(t))));
          i.pointRadius(o);
          return n.modifies(s);
        },
      });
      function sE(t, e) {
        const n = t.pointRadius();
        t.context(null);
        if (e != null) {
          t.pointRadius(e);
        }
        return n;
      }
      function aE(t) {
        zi.call(this, null, t);
      }
      aE.Definition = {
        type: "GeoPoint",
        metadata: { modifies: true },
        params: [
          { name: "projection", type: "projection", required: true },
          { name: "fields", type: "field", array: true, required: true, length: 2 },
          { name: "as", type: "string", array: true, length: 2, default: ["x", "y"] },
        ],
      };
      (0, p.B)(aE, zi, {
        transform(t, e) {
          var n = t.projection,
            i = t.fields[0],
            r = t.fields[1],
            s = t.as || ["x", "y"],
            a = s[0],
            o = s[1],
            u;
          function l(t) {
            const e = n([i(t), r(t)]);
            if (e) {
              t[a] = e[0];
              t[o] = e[1];
            } else {
              t[a] = undefined;
              t[o] = undefined;
            }
          }
          if (t.modified()) {
            e = e.materialize().reflow(true).visit(e.SOURCE, l);
          } else {
            u = e.modified(i.fields) || e.modified(r.fields);
            e.visit(u ? e.ADD_MOD : e.ADD, l);
          }
          return e.modifies(s);
        },
      });
      function oE(t) {
        zi.call(this, null, t);
      }
      oE.Definition = {
        type: "GeoShape",
        metadata: { modifies: true, nomod: true },
        params: [
          { name: "projection", type: "projection" },
          { name: "field", type: "field", default: "datum" },
          { name: "pointRadius", type: "number", expr: true },
          { name: "as", type: "string", default: "shape" },
        ],
      };
      (0, p.B)(oE, zi, {
        transform(t, e) {
          var n = e.fork(e.ALL),
            i = this.value,
            r = t.as || "shape",
            s = n.ADD;
          if (!i || t.modified()) {
            this.value = i = uE(Ak(t.projection), t.field || (0, p.ZZ)("datum"), t.pointRadius);
            n.materialize().reflow();
            s = n.SOURCE;
          }
          n.visit(s, (t) => (t[r] = i));
          return n.modifies(r);
        },
      });
      function uE(t, e, n) {
        const i =
          n == null
            ? (n) => t(e(n))
            : (i) => {
                var r = t.pointRadius(),
                  s = t.pointRadius(n)(e(i));
                t.pointRadius(r);
                return s;
              };
        i.context = (e) => {
          t.context(e);
          return i;
        };
        return i;
      }
      function lE(t) {
        zi.call(this, [], t);
        this.generator = Dk();
      }
      lE.Definition = {
        type: "Graticule",
        metadata: { changes: true, generates: true },
        params: [
          { name: "extent", type: "array", array: true, length: 2, content: { type: "number", array: true, length: 2 } },
          { name: "extentMajor", type: "array", array: true, length: 2, content: { type: "number", array: true, length: 2 } },
          { name: "extentMinor", type: "array", array: true, length: 2, content: { type: "number", array: true, length: 2 } },
          { name: "step", type: "number", array: true, length: 2 },
          { name: "stepMajor", type: "number", array: true, length: 2, default: [90, 360] },
          { name: "stepMinor", type: "number", array: true, length: 2, default: [10, 10] },
          { name: "precision", type: "number", default: 2.5 },
        ],
      };
      (0, p.B)(lE, zi, {
        transform(t, e) {
          var n = this.value,
            i = this.generator,
            r;
          if (!n.length || t.modified()) {
            for (const e in t) {
              if ((0, p.Tn)(i[e])) {
                i[e](t[e]);
              }
            }
          }
          r = i();
          if (n.length) {
            e.mod.push(wn(n[0], r));
          } else {
            e.add.push(bn(r));
          }
          n[0] = r;
          return e;
        },
      });
      function cE(t) {
        zi.call(this, null, t);
      }
      cE.Definition = {
        type: "heatmap",
        metadata: { modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "color", type: "string", expr: true },
          { name: "opacity", type: "number", expr: true },
          { name: "resolve", type: "enum", values: ["shared", "independent"], default: "independent" },
          { name: "as", type: "string", default: "image" },
        ],
      };
      (0, p.B)(cE, zi, {
        transform(t, e) {
          if (!e.changed() && !t.modified()) {
            return e.StopPropagation;
          }
          var n = e.materialize(e.SOURCE).source,
            i = t.resolve === "shared",
            r = t.field || p.D_,
            s = dE(t.opacity, t),
            a = fE(t.color, t),
            o = t.as || "image",
            u = { $x: 0, $y: 0, $value: 0, $max: i ? (0, Ni.A)(n.map((t) => (0, Ni.A)(r(t).values))) : 0 };
          n.forEach((t) => {
            const e = r(t);
            const n = (0, p.X$)({}, t, u);
            if (!i) n.$max = (0, Ni.A)(e.values || []);
            t[o] = pE(e, n, a.dep ? a : (0, p.dY)(a(n)), s.dep ? s : (0, p.dY)(s(n)));
          });
          return e.reflow(true).modifies(o);
        },
      });
      function fE(t, e) {
        let n;
        if ((0, p.Tn)(t)) {
          n = (n) => (0, Fk.Qh)(t(n, e));
          n.dep = hE(t);
        } else {
          n = (0, p.dY)((0, Fk.Qh)(t || "#888"));
        }
        return n;
      }
      function dE(t, e) {
        let n;
        if ((0, p.Tn)(t)) {
          n = (n) => t(n, e);
          n.dep = hE(t);
        } else if (t) {
          n = (0, p.dY)(t);
        } else {
          n = (t) => t.$value / t.$max || 0;
          n.dep = true;
        }
        return n;
      }
      function hE(t) {
        if (!(0, p.Tn)(t)) return false;
        const e = (0, p.M1)((0, p.nS)(t));
        return e.$x || e.$y || e.$value || e.$max;
      }
      function pE(t, e, n, i) {
        const r = t.width,
          s = t.height,
          a = t.x1 || 0,
          o = t.y1 || 0,
          u = t.x2 || r,
          l = t.y2 || s,
          c = t.values,
          f = c ? (t) => c[t] : p.v_,
          d = Ko(u - a, l - o),
          h = d.getContext("2d"),
          m = h.getImageData(0, 0, u - a, l - o),
          g = m.data;
        for (let p = o, y = 0; p < l; ++p) {
          e.$y = p - o;
          for (let t = a, s = p * r; t < u; ++t, y += 4) {
            e.$x = t - a;
            e.$value = f(t + s);
            const r = n(e);
            g[y + 0] = r.r;
            g[y + 1] = r.g;
            g[y + 2] = r.b;
            g[y + 3] = ~~(255 * i(e));
          }
        }
        h.putImageData(m, 0, 0);
        return d;
      }
      function mE(t) {
        zi.call(this, null, t);
        this.modified(true);
      }
      (0, p.B)(mE, zi, {
        transform(t, e) {
          let n = this.value;
          if (!n || t.modified("type")) {
            this.value = n = yE(t.type);
            xk.forEach((e) => {
              if (t[e] != null) vE(n, e, t[e]);
            });
          } else {
            xk.forEach((e) => {
              if (t.modified(e)) vE(n, e, t[e]);
            });
          }
          if (t.pointRadius != null) n.path.pointRadius(t.pointRadius);
          if (t.fit) gE(n, t);
          return e.fork(e.NO_SOURCE | e.NO_FIELDS);
        },
      });
      function gE(t, e) {
        const n = bE(e.fit);
        e.extent ? t.fitExtent(e.extent, n) : e.size ? t.fitSize(e.size, n) : 0;
      }
      function yE(t) {
        const e = wk((t || "mercator").toLowerCase());
        if (!e) (0, p.z3)("Unrecognized projection type: " + t);
        return e();
      }
      function vE(t, e, n) {
        if ((0, p.Tn)(t[e])) t[e](n);
      }
      function bE(t) {
        t = (0, p.YO)(t);
        return t.length === 1 ? t[0] : { type: eE, features: t.reduce((t, e) => t.concat(xE(e)), []) };
      }
      function xE(t) {
        return t.type === eE
          ? t.features
          : (0, p.YO)(t)
              .filter((t) => t != null)
              .map((t) => (t.type === tE ? t : { type: tE, geometry: t }));
      }
      function _E(t, e) {
        var n,
          i = 1;
        if (t == null) t = 0;
        if (e == null) e = 0;
        function r() {
          var r,
            s = n.length,
            a,
            o = 0,
            u = 0;
          for (r = 0; r < s; ++r) {
            (a = n[r]), (o += a.x), (u += a.y);
          }
          for (o = (o / s - t) * i, u = (u / s - e) * i, r = 0; r < s; ++r) {
            (a = n[r]), (a.x -= o), (a.y -= u);
          }
        }
        r.initialize = function (t) {
          n = t;
        };
        r.x = function (e) {
          return arguments.length ? ((t = +e), r) : t;
        };
        r.y = function (t) {
          return arguments.length ? ((e = +t), r) : e;
        };
        r.strength = function (t) {
          return arguments.length ? ((i = +t), r) : i;
        };
        return r;
      }
      function wE(t) {
        const e = +this._x.call(null, t),
          n = +this._y.call(null, t);
        return AE(this.cover(e, n), e, n, t);
      }
      function AE(t, e, n, i) {
        if (isNaN(e) || isNaN(n)) return t;
        var r,
          s = t._root,
          a = { data: i },
          o = t._x0,
          u = t._y0,
          l = t._x1,
          c = t._y1,
          f,
          d,
          h,
          p,
          m,
          g,
          y,
          v;
        if (!s) return (t._root = a), t;
        while (s.length) {
          if ((m = e >= (f = (o + l) / 2))) o = f;
          else l = f;
          if ((g = n >= (d = (u + c) / 2))) u = d;
          else c = d;
          if (((r = s), !(s = s[(y = (g << 1) | m)]))) return (r[y] = a), t;
        }
        h = +t._x.call(null, s.data);
        p = +t._y.call(null, s.data);
        if (e === h && n === p) return (a.next = s), r ? (r[y] = a) : (t._root = a), t;
        do {
          r = r ? (r[y] = new Array(4)) : (t._root = new Array(4));
          if ((m = e >= (f = (o + l) / 2))) o = f;
          else l = f;
          if ((g = n >= (d = (u + c) / 2))) u = d;
          else c = d;
        } while ((y = (g << 1) | m) === (v = ((p >= d) << 1) | (h >= f)));
        return (r[v] = s), (r[y] = a), t;
      }
      function kE(t) {
        var e,
          n,
          i = t.length,
          r,
          s,
          a = new Array(i),
          o = new Array(i),
          u = Infinity,
          l = Infinity,
          c = -Infinity,
          f = -Infinity;
        for (n = 0; n < i; ++n) {
          if (isNaN((r = +this._x.call(null, (e = t[n])))) || isNaN((s = +this._y.call(null, e)))) continue;
          a[n] = r;
          o[n] = s;
          if (r < u) u = r;
          if (r > c) c = r;
          if (s < l) l = s;
          if (s > f) f = s;
        }
        if (u > c || l > f) return this;
        this.cover(u, l).cover(c, f);
        for (n = 0; n < i; ++n) {
          AE(this, a[n], o[n], t[n]);
        }
        return this;
      }
      function EE(t, e) {
        if (isNaN((t = +t)) || isNaN((e = +e))) return this;
        var n = this._x0,
          i = this._y0,
          r = this._x1,
          s = this._y1;
        if (isNaN(n)) {
          r = (n = Math.floor(t)) + 1;
          s = (i = Math.floor(e)) + 1;
        } else {
          var a = r - n || 1,
            o = this._root,
            u,
            l;
          while (n > t || t >= r || i > e || e >= s) {
            l = ((e < i) << 1) | (t < n);
            (u = new Array(4)), (u[l] = o), (o = u), (a *= 2);
            switch (l) {
              case 0:
                (r = n + a), (s = i + a);
                break;
              case 1:
                (n = r - a), (s = i + a);
                break;
              case 2:
                (r = n + a), (i = s - a);
                break;
              case 3:
                (n = r - a), (i = s - a);
                break;
            }
          }
          if (this._root && this._root.length) this._root = o;
        }
        this._x0 = n;
        this._y0 = i;
        this._x1 = r;
        this._y1 = s;
        return this;
      }
      function ME() {
        var t = [];
        this.visit(function (e) {
          if (!e.length)
            do {
              t.push(e.data);
            } while ((e = e.next));
        });
        return t;
      }
      function DE(t) {
        return arguments.length
          ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
          : isNaN(this._x0)
            ? undefined
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
      }
      function CE(t, e, n, i, r) {
        this.node = t;
        this.x0 = e;
        this.y0 = n;
        this.x1 = i;
        this.y1 = r;
      }
      function FE(t, e, n) {
        var i,
          r = this._x0,
          s = this._y0,
          a,
          o,
          u,
          l,
          c = this._x1,
          f = this._y1,
          d = [],
          h = this._root,
          p,
          m;
        if (h) d.push(new CE(h, r, s, c, f));
        if (n == null) n = Infinity;
        else {
          (r = t - n), (s = e - n);
          (c = t + n), (f = e + n);
          n *= n;
        }
        while ((p = d.pop())) {
          if (!(h = p.node) || (a = p.x0) > c || (o = p.y0) > f || (u = p.x1) < r || (l = p.y1) < s) continue;
          if (h.length) {
            var g = (a + u) / 2,
              y = (o + l) / 2;
            d.push(new CE(h[3], g, y, u, l), new CE(h[2], a, y, g, l), new CE(h[1], g, o, u, y), new CE(h[0], a, o, g, y));
            if ((m = ((e >= y) << 1) | (t >= g))) {
              p = d[d.length - 1];
              d[d.length - 1] = d[d.length - 1 - m];
              d[d.length - 1 - m] = p;
            }
          } else {
            var v = t - +this._x.call(null, h.data),
              b = e - +this._y.call(null, h.data),
              x = v * v + b * b;
            if (x < n) {
              var _ = Math.sqrt((n = x));
              (r = t - _), (s = e - _);
              (c = t + _), (f = e + _);
              i = h.data;
            }
          }
        }
        return i;
      }
      function SE(t) {
        if (isNaN((c = +this._x.call(null, t))) || isNaN((f = +this._y.call(null, t)))) return this;
        var e,
          n = this._root,
          i,
          r,
          s,
          a = this._x0,
          o = this._y0,
          u = this._x1,
          l = this._y1,
          c,
          f,
          d,
          h,
          p,
          m,
          g,
          y;
        if (!n) return this;
        if (n.length)
          while (true) {
            if ((p = c >= (d = (a + u) / 2))) a = d;
            else u = d;
            if ((m = f >= (h = (o + l) / 2))) o = h;
            else l = h;
            if (!((e = n), (n = n[(g = (m << 1) | p)]))) return this;
            if (!n.length) break;
            if (e[(g + 1) & 3] || e[(g + 2) & 3] || e[(g + 3) & 3]) (i = e), (y = g);
          }
        while (n.data !== t) if (!((r = n), (n = n.next))) return this;
        if ((s = n.next)) delete n.next;
        if (r) return s ? (r.next = s) : delete r.next, this;
        if (!e) return (this._root = s), this;
        s ? (e[g] = s) : delete e[g];
        if ((n = e[0] || e[1] || e[2] || e[3]) && n === (e[3] || e[2] || e[1] || e[0]) && !n.length) {
          if (i) i[y] = n;
          else this._root = n;
        }
        return this;
      }
      function BE(t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this;
      }
      function zE() {
        return this._root;
      }
      function $E() {
        var t = 0;
        this.visit(function (e) {
          if (!e.length)
            do {
              ++t;
            } while ((e = e.next));
        });
        return t;
      }
      function RE(t) {
        var e = [],
          n,
          i = this._root,
          r,
          s,
          a,
          o,
          u;
        if (i) e.push(new CE(i, this._x0, this._y0, this._x1, this._y1));
        while ((n = e.pop())) {
          if (!t((i = n.node), (s = n.x0), (a = n.y0), (o = n.x1), (u = n.y1)) && i.length) {
            var l = (s + o) / 2,
              c = (a + u) / 2;
            if ((r = i[3])) e.push(new CE(r, l, c, o, u));
            if ((r = i[2])) e.push(new CE(r, s, c, l, u));
            if ((r = i[1])) e.push(new CE(r, l, a, o, c));
            if ((r = i[0])) e.push(new CE(r, s, a, l, c));
          }
        }
        return this;
      }
      function OE(t) {
        var e = [],
          n = [],
          i;
        if (this._root) e.push(new CE(this._root, this._x0, this._y0, this._x1, this._y1));
        while ((i = e.pop())) {
          var r = i.node;
          if (r.length) {
            var s,
              a = i.x0,
              o = i.y0,
              u = i.x1,
              l = i.y1,
              c = (a + u) / 2,
              f = (o + l) / 2;
            if ((s = r[0])) e.push(new CE(s, a, o, c, f));
            if ((s = r[1])) e.push(new CE(s, c, o, u, f));
            if ((s = r[2])) e.push(new CE(s, a, f, c, l));
            if ((s = r[3])) e.push(new CE(s, c, f, u, l));
          }
          n.push(i);
        }
        while ((i = n.pop())) {
          t(i.node, i.x0, i.y0, i.x1, i.y1);
        }
        return this;
      }
      function TE(t) {
        return t[0];
      }
      function NE(t) {
        return arguments.length ? ((this._x = t), this) : this._x;
      }
      function LE(t) {
        return t[1];
      }
      function PE(t) {
        return arguments.length ? ((this._y = t), this) : this._y;
      }
      function qE(t, e, n) {
        var i = new IE(e == null ? TE : e, n == null ? LE : n, NaN, NaN, NaN, NaN);
        return t == null ? i : i.addAll(t);
      }
      function IE(t, e, n, i, r, s) {
        this._x = t;
        this._y = e;
        this._x0 = n;
        this._y0 = i;
        this._x1 = r;
        this._y1 = s;
        this._root = undefined;
      }
      function UE(t) {
        var e = { data: t.data },
          n = e;
        while ((t = t.next)) n = n.next = { data: t.data };
        return e;
      }
      var jE = (qE.prototype = IE.prototype);
      jE.copy = function () {
        var t = new IE(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          e = this._root,
          n,
          i;
        if (!e) return t;
        if (!e.length) return (t._root = UE(e)), t;
        n = [{ source: e, target: (t._root = new Array(4)) }];
        while ((e = n.pop())) {
          for (var r = 0; r < 4; ++r) {
            if ((i = e.source[r])) {
              if (i.length) n.push({ source: i, target: (e.target[r] = new Array(4)) });
              else e.target[r] = UE(i);
            }
          }
        }
        return t;
      };
      jE.add = wE;
      jE.addAll = kE;
      jE.cover = EE;
      jE.data = ME;
      jE.extent = DE;
      jE.find = FE;
      jE.remove = SE;
      jE.removeAll = BE;
      jE.root = zE;
      jE.size = $E;
      jE.visit = RE;
      jE.visitAfter = OE;
      jE.x = NE;
      jE.y = PE;
      function GE(t) {
        return function () {
          return t;
        };
      }
      function YE(t) {
        return (t() - 0.5) * 1e-6;
      }
      function WE(t) {
        return t.x + t.vx;
      }
      function XE(t) {
        return t.y + t.vy;
      }
      function HE(t) {
        var e,
          n,
          i,
          r = 1,
          s = 1;
        if (typeof t !== "function") t = GE(t == null ? 1 : +t);
        function a() {
          var t,
            a = e.length,
            u,
            l,
            c,
            f,
            d,
            h;
          for (var p = 0; p < s; ++p) {
            u = qE(e, WE, XE).visitAfter(o);
            for (t = 0; t < a; ++t) {
              l = e[t];
              (d = n[l.index]), (h = d * d);
              c = l.x + l.vx;
              f = l.y + l.vy;
              u.visit(m);
            }
          }
          function m(t, e, n, s, a) {
            var o = t.data,
              u = t.r,
              p = d + u;
            if (o) {
              if (o.index > l.index) {
                var m = c - o.x - o.vx,
                  g = f - o.y - o.vy,
                  y = m * m + g * g;
                if (y < p * p) {
                  if (m === 0) (m = YE(i)), (y += m * m);
                  if (g === 0) (g = YE(i)), (y += g * g);
                  y = ((p - (y = Math.sqrt(y))) / y) * r;
                  l.vx += (m *= y) * (p = (u *= u) / (h + u));
                  l.vy += (g *= y) * p;
                  o.vx -= m * (p = 1 - p);
                  o.vy -= g * p;
                }
              }
              return;
            }
            return e > c + p || s < c - p || n > f + p || a < f - p;
          }
        }
        function o(t) {
          if (t.data) return (t.r = n[t.data.index]);
          for (var e = (t.r = 0); e < 4; ++e) {
            if (t[e] && t[e].r > t.r) {
              t.r = t[e].r;
            }
          }
        }
        function u() {
          if (!e) return;
          var i,
            r = e.length,
            s;
          n = new Array(r);
          for (i = 0; i < r; ++i) (s = e[i]), (n[s.index] = +t(s, i, e));
        }
        a.initialize = function (t, n) {
          e = t;
          i = n;
          u();
        };
        a.iterations = function (t) {
          return arguments.length ? ((s = +t), a) : s;
        };
        a.strength = function (t) {
          return arguments.length ? ((r = +t), a) : r;
        };
        a.radius = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : GE(+e)), u(), a) : t;
        };
        return a;
      }
      var VE = n(62996);
      var QE = n(14036);
      const KE = 1664525;
      const ZE = 1013904223;
      const JE = 4294967296;
      function tM() {
        let t = 1;
        return () => (t = (KE * t + ZE) % JE) / JE;
      }
      function eM(t) {
        return t.x;
      }
      function nM(t) {
        return t.y;
      }
      var iM = 10,
        rM = Math.PI * (3 - Math.sqrt(5));
      function sM(t) {
        var e,
          n = 1,
          i = 0.001,
          r = 1 - Math.pow(i, 1 / 300),
          s = 0,
          a = 0.6,
          o = new Map(),
          u = (0, QE.O1)(f),
          l = (0, VE.A)("tick", "end"),
          c = tM();
        if (t == null) t = [];
        function f() {
          d();
          l.call("tick", e);
          if (n < i) {
            u.stop();
            l.call("end", e);
          }
        }
        function d(i) {
          var u,
            l = t.length,
            c;
          if (i === undefined) i = 1;
          for (var f = 0; f < i; ++f) {
            n += (s - n) * r;
            o.forEach(function (t) {
              t(n);
            });
            for (u = 0; u < l; ++u) {
              c = t[u];
              if (c.fx == null) c.x += c.vx *= a;
              else (c.x = c.fx), (c.vx = 0);
              if (c.fy == null) c.y += c.vy *= a;
              else (c.y = c.fy), (c.vy = 0);
            }
          }
          return e;
        }
        function h() {
          for (var e = 0, n = t.length, i; e < n; ++e) {
            (i = t[e]), (i.index = e);
            if (i.fx != null) i.x = i.fx;
            if (i.fy != null) i.y = i.fy;
            if (isNaN(i.x) || isNaN(i.y)) {
              var r = iM * Math.sqrt(0.5 + e),
                s = e * rM;
              i.x = r * Math.cos(s);
              i.y = r * Math.sin(s);
            }
            if (isNaN(i.vx) || isNaN(i.vy)) {
              i.vx = i.vy = 0;
            }
          }
        }
        function p(e) {
          if (e.initialize) e.initialize(t, c);
          return e;
        }
        h();
        return (e = {
          tick: d,
          restart: function () {
            return u.restart(f), e;
          },
          stop: function () {
            return u.stop(), e;
          },
          nodes: function (n) {
            return arguments.length ? ((t = n), h(), o.forEach(p), e) : t;
          },
          alpha: function (t) {
            return arguments.length ? ((n = +t), e) : n;
          },
          alphaMin: function (t) {
            return arguments.length ? ((i = +t), e) : i;
          },
          alphaDecay: function (t) {
            return arguments.length ? ((r = +t), e) : +r;
          },
          alphaTarget: function (t) {
            return arguments.length ? ((s = +t), e) : s;
          },
          velocityDecay: function (t) {
            return arguments.length ? ((a = 1 - t), e) : 1 - a;
          },
          randomSource: function (t) {
            return arguments.length ? ((c = t), o.forEach(p), e) : c;
          },
          force: function (t, n) {
            return arguments.length > 1 ? (n == null ? o.delete(t) : o.set(t, p(n)), e) : o.get(t);
          },
          find: function (e, n, i) {
            var r = 0,
              s = t.length,
              a,
              o,
              u,
              l,
              c;
            if (i == null) i = Infinity;
            else i *= i;
            for (r = 0; r < s; ++r) {
              l = t[r];
              a = e - l.x;
              o = n - l.y;
              u = a * a + o * o;
              if (u < i) (c = l), (i = u);
            }
            return c;
          },
          on: function (t, n) {
            return arguments.length > 1 ? (l.on(t, n), e) : l.on(t);
          },
        });
      }
      function aM() {
        var t,
          e,
          n,
          i,
          r = GE(-30),
          s,
          a = 1,
          o = Infinity,
          u = 0.81;
        function l(n) {
          var r,
            s = t.length,
            a = qE(t, eM, nM).visitAfter(f);
          for (i = n, r = 0; r < s; ++r) (e = t[r]), a.visit(d);
        }
        function c() {
          if (!t) return;
          var e,
            n = t.length,
            i;
          s = new Array(n);
          for (e = 0; e < n; ++e) (i = t[e]), (s[i.index] = +r(i, e, t));
        }
        function f(t) {
          var e = 0,
            n,
            i,
            r = 0,
            a,
            o,
            u;
          if (t.length) {
            for (a = o = u = 0; u < 4; ++u) {
              if ((n = t[u]) && (i = Math.abs(n.value))) {
                (e += n.value), (r += i), (a += i * n.x), (o += i * n.y);
              }
            }
            t.x = a / r;
            t.y = o / r;
          } else {
            n = t;
            n.x = n.data.x;
            n.y = n.data.y;
            do {
              e += s[n.data.index];
            } while ((n = n.next));
          }
          t.value = e;
        }
        function d(t, r, l, c) {
          if (!t.value) return true;
          var f = t.x - e.x,
            d = t.y - e.y,
            h = c - r,
            p = f * f + d * d;
          if ((h * h) / u < p) {
            if (p < o) {
              if (f === 0) (f = YE(n)), (p += f * f);
              if (d === 0) (d = YE(n)), (p += d * d);
              if (p < a) p = Math.sqrt(a * p);
              e.vx += (f * t.value * i) / p;
              e.vy += (d * t.value * i) / p;
            }
            return true;
          } else if (t.length || p >= o) return;
          if (t.data !== e || t.next) {
            if (f === 0) (f = YE(n)), (p += f * f);
            if (d === 0) (d = YE(n)), (p += d * d);
            if (p < a) p = Math.sqrt(a * p);
          }
          do {
            if (t.data !== e) {
              h = (s[t.data.index] * i) / p;
              e.vx += f * h;
              e.vy += d * h;
            }
          } while ((t = t.next));
        }
        l.initialize = function (e, i) {
          t = e;
          n = i;
          c();
        };
        l.strength = function (t) {
          return arguments.length ? ((r = typeof t === "function" ? t : GE(+t)), c(), l) : r;
        };
        l.distanceMin = function (t) {
          return arguments.length ? ((a = t * t), l) : Math.sqrt(a);
        };
        l.distanceMax = function (t) {
          return arguments.length ? ((o = t * t), l) : Math.sqrt(o);
        };
        l.theta = function (t) {
          return arguments.length ? ((u = t * t), l) : Math.sqrt(u);
        };
        return l;
      }
      function oM(t) {
        return t.index;
      }
      function uM(t, e) {
        var n = t.get(e);
        if (!n) throw new Error("node not found: " + e);
        return n;
      }
      function lM(t) {
        var e = oM,
          n = f,
          i,
          r = GE(30),
          s,
          a,
          o,
          u,
          l,
          c = 1;
        if (t == null) t = [];
        function f(t) {
          return 1 / Math.min(o[t.source.index], o[t.target.index]);
        }
        function d(e) {
          for (var n = 0, r = t.length; n < c; ++n) {
            for (var a = 0, o, f, d, h, p, m, g; a < r; ++a) {
              (o = t[a]), (f = o.source), (d = o.target);
              h = d.x + d.vx - f.x - f.vx || YE(l);
              p = d.y + d.vy - f.y - f.vy || YE(l);
              m = Math.sqrt(h * h + p * p);
              m = ((m - s[a]) / m) * e * i[a];
              (h *= m), (p *= m);
              d.vx -= h * (g = u[a]);
              d.vy -= p * g;
              f.vx += h * (g = 1 - g);
              f.vy += p * g;
            }
          }
        }
        function h() {
          if (!a) return;
          var n,
            r = a.length,
            l = t.length,
            c = new Map(a.map((t, n) => [e(t, n, a), t])),
            f;
          for (n = 0, o = new Array(r); n < l; ++n) {
            (f = t[n]), (f.index = n);
            if (typeof f.source !== "object") f.source = uM(c, f.source);
            if (typeof f.target !== "object") f.target = uM(c, f.target);
            o[f.source.index] = (o[f.source.index] || 0) + 1;
            o[f.target.index] = (o[f.target.index] || 0) + 1;
          }
          for (n = 0, u = new Array(l); n < l; ++n) {
            (f = t[n]), (u[n] = o[f.source.index] / (o[f.source.index] + o[f.target.index]));
          }
          (i = new Array(l)), p();
          (s = new Array(l)), m();
        }
        function p() {
          if (!a) return;
          for (var e = 0, r = t.length; e < r; ++e) {
            i[e] = +n(t[e], e, t);
          }
        }
        function m() {
          if (!a) return;
          for (var e = 0, n = t.length; e < n; ++e) {
            s[e] = +r(t[e], e, t);
          }
        }
        d.initialize = function (t, e) {
          a = t;
          l = e;
          h();
        };
        d.links = function (e) {
          return arguments.length ? ((t = e), h(), d) : t;
        };
        d.id = function (t) {
          return arguments.length ? ((e = t), d) : e;
        };
        d.iterations = function (t) {
          return arguments.length ? ((c = +t), d) : c;
        };
        d.strength = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : GE(+t)), p(), d) : n;
        };
        d.distance = function (t) {
          return arguments.length ? ((r = typeof t === "function" ? t : GE(+t)), m(), d) : r;
        };
        return d;
      }
      function cM(t) {
        var e = GE(0.1),
          n,
          i,
          r;
        if (typeof t !== "function") t = GE(t == null ? 0 : +t);
        function s(t) {
          for (var e = 0, s = n.length, a; e < s; ++e) {
            (a = n[e]), (a.vx += (r[e] - a.x) * i[e] * t);
          }
        }
        function a() {
          if (!n) return;
          var s,
            a = n.length;
          i = new Array(a);
          r = new Array(a);
          for (s = 0; s < a; ++s) {
            i[s] = isNaN((r[s] = +t(n[s], s, n))) ? 0 : +e(n[s], s, n);
          }
        }
        s.initialize = function (t) {
          n = t;
          a();
        };
        s.strength = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : GE(+t)), a(), s) : e;
        };
        s.x = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : GE(+e)), a(), s) : t;
        };
        return s;
      }
      function fM(t) {
        var e = GE(0.1),
          n,
          i,
          r;
        if (typeof t !== "function") t = GE(t == null ? 0 : +t);
        function s(t) {
          for (var e = 0, s = n.length, a; e < s; ++e) {
            (a = n[e]), (a.vy += (r[e] - a.y) * i[e] * t);
          }
        }
        function a() {
          if (!n) return;
          var s,
            a = n.length;
          i = new Array(a);
          r = new Array(a);
          for (s = 0; s < a; ++s) {
            i[s] = isNaN((r[s] = +t(n[s], s, n))) ? 0 : +e(n[s], s, n);
          }
        }
        s.initialize = function (t) {
          n = t;
          a();
        };
        s.strength = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : GE(+t)), a(), s) : e;
        };
        s.y = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : GE(+e)), a(), s) : t;
        };
        return s;
      }
      const dM = { center: _E, collide: HE, nbody: aM, link: lM, x: cM, y: fM };
      const hM = "forces",
        pM = ["alpha", "alphaMin", "alphaTarget", "velocityDecay", "forces"],
        mM = ["static", "iterations"],
        gM = ["x", "y", "vx", "vy"];
      function yM(t) {
        zi.call(this, null, t);
      }
      yM.Definition = {
        type: "Force",
        metadata: { modifies: true },
        params: [
          { name: "static", type: "boolean", default: false },
          { name: "restart", type: "boolean", default: false },
          { name: "iterations", type: "number", default: 300 },
          { name: "alpha", type: "number", default: 1 },
          { name: "alphaMin", type: "number", default: 0.001 },
          { name: "alphaTarget", type: "number", default: 0 },
          { name: "velocityDecay", type: "number", default: 0.4 },
          {
            name: "forces",
            type: "param",
            array: true,
            params: [
              {
                key: { force: "center" },
                params: [
                  { name: "x", type: "number", default: 0 },
                  { name: "y", type: "number", default: 0 },
                ],
              },
              {
                key: { force: "collide" },
                params: [
                  { name: "radius", type: "number", expr: true },
                  { name: "strength", type: "number", default: 0.7 },
                  { name: "iterations", type: "number", default: 1 },
                ],
              },
              {
                key: { force: "nbody" },
                params: [
                  { name: "strength", type: "number", default: -30, expr: true },
                  { name: "theta", type: "number", default: 0.9 },
                  { name: "distanceMin", type: "number", default: 1 },
                  { name: "distanceMax", type: "number" },
                ],
              },
              {
                key: { force: "link" },
                params: [
                  { name: "links", type: "data" },
                  { name: "id", type: "field" },
                  { name: "distance", type: "number", default: 30, expr: true },
                  { name: "strength", type: "number", expr: true },
                  { name: "iterations", type: "number", default: 1 },
                ],
              },
              {
                key: { force: "x" },
                params: [
                  { name: "strength", type: "number", default: 0.1 },
                  { name: "x", type: "field" },
                ],
              },
              {
                key: { force: "y" },
                params: [
                  { name: "strength", type: "number", default: 0.1 },
                  { name: "y", type: "field" },
                ],
              },
            ],
          },
          { name: "as", type: "string", array: true, modify: false, default: gM },
        ],
      };
      (0, p.B)(yM, zi, {
        transform(t, e) {
          var n = this.value,
            i = e.changed(e.ADD_REM),
            r = t.modified(pM),
            s = t.iterations || 300;
          if (!n) {
            this.value = n = bM(e.source, t);
            n.on("tick", vM(e.dataflow, this));
            if (!t.static) {
              i = true;
              n.tick();
            }
            e.modifies("index");
          } else {
            if (i) {
              e.modifies("index");
              n.nodes(e.source);
            }
            if (r || e.changed(e.MOD)) {
              xM(n, t, 0, e);
            }
          }
          if (r || i || t.modified(mM) || (e.changed() && t.restart)) {
            n.alpha(Math.max(n.alpha(), t.alpha || 1)).alphaDecay(1 - Math.pow(n.alphaMin(), 1 / s));
            if (t.static) {
              for (n.stop(); --s >= 0; ) n.tick();
            } else {
              if (n.stopped()) n.restart();
              if (!i) return e.StopPropagation;
            }
          }
          return this.finish(t, e);
        },
        finish(t, e) {
          const n = e.dataflow;
          for (let o = this._argops, u = 0, l = o.length, c; u < l; ++u) {
            c = o[u];
            if (c.name !== hM || c.op._argval.force !== "link") {
              continue;
            }
            for (var i = c.op._argops, r = 0, s = i.length, a; r < s; ++r) {
              if (i[r].name === "links" && (a = i[r].op.source)) {
                n.pulse(a, n.changeset().reflow());
                break;
              }
            }
          }
          return e.reflow(t.modified()).modifies(gM);
        },
      });
      function vM(t, e) {
        return () => t.touch(e).run();
      }
      function bM(t, e) {
        const n = sM(t),
          i = n.stop,
          r = n.restart;
        let s = false;
        n.stopped = () => s;
        n.restart = () => ((s = false), r());
        n.stop = () => ((s = true), i());
        return xM(n, e, true).on("end", () => (s = true));
      }
      function xM(t, e, n, i) {
        var r = (0, p.YO)(e.forces),
          s,
          a,
          o,
          u;
        for (s = 0, a = pM.length; s < a; ++s) {
          o = pM[s];
          if (o !== hM && e.modified(o)) t[o](e[o]);
        }
        for (s = 0, a = r.length; s < a; ++s) {
          u = hM + s;
          o = n || e.modified(hM, s) ? wM(r[s]) : i && _M(r[s], i) ? t.force(u) : null;
          if (o) t.force(u, o);
        }
        for (a = t.numForces || 0; s < a; ++s) {
          t.force(hM + s, null);
        }
        t.numForces = r.length;
        return t;
      }
      function _M(t, e) {
        var n, i;
        for (n in t) {
          if ((0, p.Tn)((i = t[n])) && e.modified((0, p.nS)(i))) return 1;
        }
        return 0;
      }
      function wM(t) {
        var e, n;
        if (!(0, p.mQ)(dM, t.force)) {
          (0, p.z3)("Unrecognized force: " + t.force);
        }
        e = dM[t.force]();
        for (n in t) {
          if ((0, p.Tn)(e[n])) AM(e[n], t[n], t);
        }
        return e;
      }
      function AM(t, e, n) {
        t((0, p.Tn)(e) ? (t) => e(t, n) : e);
      }
      function kM(t) {
        var e = 0,
          n = t.children,
          i = n && n.length;
        if (!i) e = 1;
        else while (--i >= 0) e += n[i].value;
        t.value = e;
      }
      function EM() {
        return this.eachAfter(kM);
      }
      function MM(t, e) {
        let n = -1;
        for (const i of this) {
          t.call(e, i, ++n, this);
        }
        return this;
      }
      function DM(t, e) {
        var n = this,
          i = [n],
          r,
          s,
          a = -1;
        while ((n = i.pop())) {
          t.call(e, n, ++a, this);
          if ((r = n.children)) {
            for (s = r.length - 1; s >= 0; --s) {
              i.push(r[s]);
            }
          }
        }
        return this;
      }
      function CM(t, e) {
        var n = this,
          i = [n],
          r = [],
          s,
          a,
          o,
          u = -1;
        while ((n = i.pop())) {
          r.push(n);
          if ((s = n.children)) {
            for (a = 0, o = s.length; a < o; ++a) {
              i.push(s[a]);
            }
          }
        }
        while ((n = r.pop())) {
          t.call(e, n, ++u, this);
        }
        return this;
      }
      function FM(t, e) {
        let n = -1;
        for (const i of this) {
          if (t.call(e, i, ++n, this)) {
            return i;
          }
        }
      }
      function SM(t) {
        return this.eachAfter(function (e) {
          var n = +t(e.data) || 0,
            i = e.children,
            r = i && i.length;
          while (--r >= 0) n += i[r].value;
          e.value = n;
        });
      }
      function BM(t) {
        return this.eachBefore(function (e) {
          if (e.children) {
            e.children.sort(t);
          }
        });
      }
      function zM(t) {
        var e = this,
          n = $M(e, t),
          i = [e];
        while (e !== n) {
          e = e.parent;
          i.push(e);
        }
        var r = i.length;
        while (t !== n) {
          i.splice(r, 0, t);
          t = t.parent;
        }
        return i;
      }
      function $M(t, e) {
        if (t === e) return t;
        var n = t.ancestors(),
          i = e.ancestors(),
          r = null;
        t = n.pop();
        e = i.pop();
        while (t === e) {
          r = t;
          t = n.pop();
          e = i.pop();
        }
        return r;
      }
      function RM() {
        var t = this,
          e = [t];
        while ((t = t.parent)) {
          e.push(t);
        }
        return e;
      }
      function OM() {
        return Array.from(this);
      }
      function TM() {
        var t = [];
        this.eachBefore(function (e) {
          if (!e.children) {
            t.push(e);
          }
        });
        return t;
      }
      function NM() {
        var t = this,
          e = [];
        t.each(function (n) {
          if (n !== t) {
            e.push({ source: n.parent, target: n });
          }
        });
        return e;
      }
      function* LM() {
        var t = this,
          e,
          n = [t],
          i,
          r,
          s;
        do {
          (e = n.reverse()), (n = []);
          while ((t = e.pop())) {
            yield t;
            if ((i = t.children)) {
              for (r = 0, s = i.length; r < s; ++r) {
                n.push(i[r]);
              }
            }
          }
        } while (n.length);
      }
      function PM(t, e) {
        if (t instanceof Map) {
          t = [undefined, t];
          if (e === undefined) e = UM;
        } else if (e === undefined) {
          e = IM;
        }
        var n = new YM(t),
          i,
          r = [n],
          s,
          a,
          o,
          u;
        while ((i = r.pop())) {
          if ((a = e(i.data)) && (u = (a = Array.from(a)).length)) {
            i.children = a;
            for (o = u - 1; o >= 0; --o) {
              r.push((s = a[o] = new YM(a[o])));
              s.parent = i;
              s.depth = i.depth + 1;
            }
          }
        }
        return n.eachBefore(GM);
      }
      function qM() {
        return PM(this).eachBefore(jM);
      }
      function IM(t) {
        return t.children;
      }
      function UM(t) {
        return Array.isArray(t) ? t[1] : null;
      }
      function jM(t) {
        if (t.data.value !== undefined) t.value = t.data.value;
        t.data = t.data.data;
      }
      function GM(t) {
        var e = 0;
        do {
          t.height = e;
        } while ((t = t.parent) && t.height < ++e);
      }
      function YM(t) {
        this.data = t;
        this.depth = this.height = 0;
        this.parent = null;
      }
      YM.prototype = PM.prototype = {
        constructor: YM,
        count: EM,
        each: MM,
        eachAfter: CM,
        eachBefore: DM,
        find: FM,
        sum: SM,
        sort: BM,
        path: zM,
        ancestors: RM,
        descendants: OM,
        leaves: TM,
        links: NM,
        copy: qM,
        [Symbol.iterator]: LM,
      };
      function WM(t) {
        return t == null ? null : XM(t);
      }
      function XM(t) {
        if (typeof t !== "function") throw new Error();
        return t;
      }
      function HM() {
        return 0;
      }
      function VM(t) {
        return function () {
          return t;
        };
      }
      const QM = 1664525;
      const KM = 1013904223;
      const ZM = 4294967296;
      function JM() {
        let t = 1;
        return () => (t = (QM * t + KM) % ZM) / ZM;
      }
      function tD(t) {
        return typeof t === "object" && "length" in t ? t : Array.from(t);
      }
      function eD(t, e) {
        let n = t.length,
          i,
          r;
        while (n) {
          r = (e() * n--) | 0;
          i = t[n];
          t[n] = t[r];
          t[r] = i;
        }
        return t;
      }
      function nD(t) {
        return iD(t, lcg());
      }
      function iD(t, e) {
        var n = 0,
          i = (t = eD(Array.from(t), e)).length,
          r = [],
          s,
          a;
        while (n < i) {
          s = t[n];
          if (a && aD(a, s)) ++n;
          else (a = uD((r = rD(r, s)))), (n = 0);
        }
        return a;
      }
      function rD(t, e) {
        var n, i;
        if (oD(e, t)) return [e];
        for (n = 0; n < t.length; ++n) {
          if (sD(e, t[n]) && oD(cD(t[n], e), t)) {
            return [t[n], e];
          }
        }
        for (n = 0; n < t.length - 1; ++n) {
          for (i = n + 1; i < t.length; ++i) {
            if (sD(cD(t[n], t[i]), e) && sD(cD(t[n], e), t[i]) && sD(cD(t[i], e), t[n]) && oD(fD(t[n], t[i], e), t)) {
              return [t[n], t[i], e];
            }
          }
        }
        throw new Error();
      }
      function sD(t, e) {
        var n = t.r - e.r,
          i = e.x - t.x,
          r = e.y - t.y;
        return n < 0 || n * n < i * i + r * r;
      }
      function aD(t, e) {
        var n = t.r - e.r + Math.max(t.r, e.r, 1) * 1e-9,
          i = e.x - t.x,
          r = e.y - t.y;
        return n > 0 && n * n > i * i + r * r;
      }
      function oD(t, e) {
        for (var n = 0; n < e.length; ++n) {
          if (!aD(t, e[n])) {
            return false;
          }
        }
        return true;
      }
      function uD(t) {
        switch (t.length) {
          case 1:
            return lD(t[0]);
          case 2:
            return cD(t[0], t[1]);
          case 3:
            return fD(t[0], t[1], t[2]);
        }
      }
      function lD(t) {
        return { x: t.x, y: t.y, r: t.r };
      }
      function cD(t, e) {
        var n = t.x,
          i = t.y,
          r = t.r,
          s = e.x,
          a = e.y,
          o = e.r,
          u = s - n,
          l = a - i,
          c = o - r,
          f = Math.sqrt(u * u + l * l);
        return { x: (n + s + (u / f) * c) / 2, y: (i + a + (l / f) * c) / 2, r: (f + r + o) / 2 };
      }
      function fD(t, e, n) {
        var i = t.x,
          r = t.y,
          s = t.r,
          a = e.x,
          o = e.y,
          u = e.r,
          l = n.x,
          c = n.y,
          f = n.r,
          d = i - a,
          h = i - l,
          p = r - o,
          m = r - c,
          g = u - s,
          y = f - s,
          v = i * i + r * r - s * s,
          b = v - a * a - o * o + u * u,
          x = v - l * l - c * c + f * f,
          _ = h * p - d * m,
          w = (p * x - m * b) / (_ * 2) - i,
          A = (m * g - p * y) / _,
          k = (h * b - d * x) / (_ * 2) - r,
          E = (d * y - h * g) / _,
          M = A * A + E * E - 1,
          D = 2 * (s + w * A + k * E),
          C = w * w + k * k - s * s,
          F = -(Math.abs(M) > 1e-6 ? (D + Math.sqrt(D * D - 4 * M * C)) / (2 * M) : C / D);
        return { x: i + w + A * F, y: r + k + E * F, r: F };
      }
      function dD(t, e, n) {
        var i = t.x - e.x,
          r,
          s,
          a = t.y - e.y,
          o,
          u,
          l = i * i + a * a;
        if (l) {
          (s = e.r + n.r), (s *= s);
          (u = t.r + n.r), (u *= u);
          if (s > u) {
            r = (l + u - s) / (2 * l);
            o = Math.sqrt(Math.max(0, u / l - r * r));
            n.x = t.x - r * i - o * a;
            n.y = t.y - r * a + o * i;
          } else {
            r = (l + s - u) / (2 * l);
            o = Math.sqrt(Math.max(0, s / l - r * r));
            n.x = e.x + r * i - o * a;
            n.y = e.y + r * a + o * i;
          }
        } else {
          n.x = e.x + n.r;
          n.y = e.y;
        }
      }
      function hD(t, e) {
        var n = t.r + e.r - 1e-6,
          i = e.x - t.x,
          r = e.y - t.y;
        return n > 0 && n * n > i * i + r * r;
      }
      function pD(t) {
        var e = t._,
          n = t.next._,
          i = e.r + n.r,
          r = (e.x * n.r + n.x * e.r) / i,
          s = (e.y * n.r + n.y * e.r) / i;
        return r * r + s * s;
      }
      function mD(t) {
        this._ = t;
        this.next = null;
        this.previous = null;
      }
      function gD(t, e) {
        if (!(s = (t = tD(t)).length)) return 0;
        var n, i, r, s, a, o, u, l, c, f, d;
        (n = t[0]), (n.x = 0), (n.y = 0);
        if (!(s > 1)) return n.r;
        (i = t[1]), (n.x = -i.r), (i.x = n.r), (i.y = 0);
        if (!(s > 2)) return n.r + i.r;
        dD(i, n, (r = t[2]));
        (n = new mD(n)), (i = new mD(i)), (r = new mD(r));
        n.next = r.previous = i;
        i.next = n.previous = r;
        r.next = i.previous = n;
        t: for (u = 3; u < s; ++u) {
          dD(n._, i._, (r = t[u])), (r = new mD(r));
          (l = i.next), (c = n.previous), (f = i._.r), (d = n._.r);
          do {
            if (f <= d) {
              if (hD(l._, r._)) {
                (i = l), (n.next = i), (i.previous = n), --u;
                continue t;
              }
              (f += l._.r), (l = l.next);
            } else {
              if (hD(c._, r._)) {
                (n = c), (n.next = i), (i.previous = n), --u;
                continue t;
              }
              (d += c._.r), (c = c.previous);
            }
          } while (l !== c.next);
          (r.previous = n), (r.next = i), (n.next = i.previous = i = r);
          a = pD(n);
          while ((r = r.next) !== i) {
            if ((o = pD(r)) < a) {
              (n = r), (a = o);
            }
          }
          i = n.next;
        }
        (n = [i._]), (r = i);
        while ((r = r.next) !== i) n.push(r._);
        r = iD(n, e);
        for (u = 0; u < s; ++u) (n = t[u]), (n.x -= r.x), (n.y -= r.y);
        return r.r;
      }
      function yD(t) {
        gD(t, lcg());
        return t;
      }
      function vD(t) {
        return Math.sqrt(t.value);
      }
      function bD() {
        var t = null,
          e = 1,
          n = 1,
          i = HM;
        function r(r) {
          const s = JM();
          (r.x = e / 2), (r.y = n / 2);
          if (t) {
            r.eachBefore(xD(t))
              .eachAfter(_D(i, 0.5, s))
              .eachBefore(wD(1));
          } else {
            r.eachBefore(xD(vD))
              .eachAfter(_D(HM, 1, s))
              .eachAfter(_D(i, r.r / Math.min(e, n), s))
              .eachBefore(wD(Math.min(e, n) / (2 * r.r)));
          }
          return r;
        }
        r.radius = function (e) {
          return arguments.length ? ((t = WM(e)), r) : t;
        };
        r.size = function (t) {
          return arguments.length ? ((e = +t[0]), (n = +t[1]), r) : [e, n];
        };
        r.padding = function (t) {
          return arguments.length ? ((i = typeof t === "function" ? t : VM(+t)), r) : i;
        };
        return r;
      }
      function xD(t) {
        return function (e) {
          if (!e.children) {
            e.r = Math.max(0, +t(e) || 0);
          }
        };
      }
      function _D(t, e, n) {
        return function (i) {
          if ((r = i.children)) {
            var r,
              s,
              a = r.length,
              o = t(i) * e || 0,
              u;
            if (o) for (s = 0; s < a; ++s) r[s].r += o;
            u = gD(r, n);
            if (o) for (s = 0; s < a; ++s) r[s].r -= o;
            i.r = u + o;
          }
        };
      }
      function wD(t) {
        return function (e) {
          var n = e.parent;
          e.r *= t;
          if (n) {
            e.x = n.x + t * e.x;
            e.y = n.y + t * e.y;
          }
        };
      }
      function AD(t) {
        t.x0 = Math.round(t.x0);
        t.y0 = Math.round(t.y0);
        t.x1 = Math.round(t.x1);
        t.y1 = Math.round(t.y1);
      }
      function kD(t, e, n, i, r) {
        var s = t.children,
          a,
          o = -1,
          u = s.length,
          l = t.value && (i - e) / t.value;
        while (++o < u) {
          (a = s[o]), (a.y0 = n), (a.y1 = r);
          (a.x0 = e), (a.x1 = e += a.value * l);
        }
      }
      function ED() {
        var t = 1,
          e = 1,
          n = 0,
          i = false;
        function r(r) {
          var a = r.height + 1;
          r.x0 = r.y0 = n;
          r.x1 = t;
          r.y1 = e / a;
          r.eachBefore(s(e, a));
          if (i) r.eachBefore(AD);
          return r;
        }
        function s(t, e) {
          return function (i) {
            if (i.children) {
              kD(i, i.x0, (t * (i.depth + 1)) / e, i.x1, (t * (i.depth + 2)) / e);
            }
            var r = i.x0,
              s = i.y0,
              a = i.x1 - n,
              o = i.y1 - n;
            if (a < r) r = a = (r + a) / 2;
            if (o < s) s = o = (s + o) / 2;
            i.x0 = r;
            i.y0 = s;
            i.x1 = a;
            i.y1 = o;
          };
        }
        r.round = function (t) {
          return arguments.length ? ((i = !!t), r) : i;
        };
        r.size = function (n) {
          return arguments.length ? ((t = +n[0]), (e = +n[1]), r) : [t, e];
        };
        r.padding = function (t) {
          return arguments.length ? ((n = +t), r) : n;
        };
        return r;
      }
      var MD = { depth: -1 },
        DD = {},
        CD = {};
      function FD(t) {
        return t.id;
      }
      function SD(t) {
        return t.parentId;
      }
      function BD() {
        var t = FD,
          e = SD,
          n;
        function i(i) {
          var r = Array.from(i),
            s = t,
            a = e,
            o,
            u,
            l,
            c,
            f,
            d,
            h,
            p,
            m = new Map();
          if (n != null) {
            const t = r.map((t, e) => zD(n(t, e, i)));
            const e = t.map($D);
            const o = new Set(t).add("");
            for (const n of e) {
              if (!o.has(n)) {
                o.add(n);
                t.push(n);
                e.push($D(n));
                r.push(CD);
              }
            }
            s = (e, n) => t[n];
            a = (t, n) => e[n];
          }
          for (l = 0, o = r.length; l < o; ++l) {
            (u = r[l]), (d = r[l] = new YM(u));
            if ((h = s(u, l, i)) != null && (h += "")) {
              p = d.id = h;
              m.set(p, m.has(p) ? DD : d);
            }
            if ((h = a(u, l, i)) != null && (h += "")) {
              d.parent = h;
            }
          }
          for (l = 0; l < o; ++l) {
            d = r[l];
            if ((h = d.parent)) {
              f = m.get(h);
              if (!f) throw new Error("missing: " + h);
              if (f === DD) throw new Error("ambiguous: " + h);
              if (f.children) f.children.push(d);
              else f.children = [d];
              d.parent = f;
            } else {
              if (c) throw new Error("multiple roots");
              c = d;
            }
          }
          if (!c) throw new Error("no root");
          if (n != null) {
            while (c.data === CD && c.children.length === 1) {
              (c = c.children[0]), --o;
            }
            for (let t = r.length - 1; t >= 0; --t) {
              d = r[t];
              if (d.data !== CD) break;
              d.data = null;
            }
          }
          c.parent = MD;
          c.eachBefore(function (t) {
            t.depth = t.parent.depth + 1;
            --o;
          }).eachBefore(GM);
          c.parent = null;
          if (o > 0) throw new Error("cycle");
          return c;
        }
        i.id = function (e) {
          return arguments.length ? ((t = WM(e)), i) : t;
        };
        i.parentId = function (t) {
          return arguments.length ? ((e = WM(t)), i) : e;
        };
        i.path = function (t) {
          return arguments.length ? ((n = WM(t)), i) : n;
        };
        return i;
      }
      function zD(t) {
        t = `${t}`;
        let e = t.length;
        if (RD(t, e - 1) && !RD(t, e - 2)) t = t.slice(0, -1);
        return t[0] === "/" ? t : `/${t}`;
      }
      function $D(t) {
        let e = t.length;
        if (e < 2) return "";
        while (--e > 1) if (RD(t, e)) break;
        return t.slice(0, e);
      }
      function RD(t, e) {
        if (t[e] === "/") {
          let n = 0;
          while (e > 0 && t[--e] === "\\") ++n;
          if ((n & 1) === 0) return true;
        }
        return false;
      }
      function OD(t, e) {
        return t.parent === e.parent ? 1 : 2;
      }
      function TD(t) {
        var e = t.children;
        return e ? e[0] : t.t;
      }
      function ND(t) {
        var e = t.children;
        return e ? e[e.length - 1] : t.t;
      }
      function LD(t, e, n) {
        var i = n / (e.i - t.i);
        e.c -= i;
        e.s += n;
        t.c += i;
        e.z += n;
        e.m += n;
      }
      function PD(t) {
        var e = 0,
          n = 0,
          i = t.children,
          r = i.length,
          s;
        while (--r >= 0) {
          s = i[r];
          s.z += e;
          s.m += e;
          e += s.s + (n += s.c);
        }
      }
      function qD(t, e, n) {
        return t.a.parent === e.parent ? t.a : n;
      }
      function ID(t, e) {
        this._ = t;
        this.parent = null;
        this.children = null;
        this.A = null;
        this.a = this;
        this.z = 0;
        this.m = 0;
        this.c = 0;
        this.s = 0;
        this.t = null;
        this.i = e;
      }
      ID.prototype = Object.create(YM.prototype);
      function UD(t) {
        var e = new ID(t, 0),
          n,
          i = [e],
          r,
          s,
          a,
          o;
        while ((n = i.pop())) {
          if ((s = n._.children)) {
            n.children = new Array((o = s.length));
            for (a = o - 1; a >= 0; --a) {
              i.push((r = n.children[a] = new ID(s[a], a)));
              r.parent = n;
            }
          }
        }
        (e.parent = new ID(null, 0)).children = [e];
        return e;
      }
      function jD() {
        var t = OD,
          e = 1,
          n = 1,
          i = null;
        function r(r) {
          var o = UD(r);
          o.eachAfter(s), (o.parent.m = -o.z);
          o.eachBefore(a);
          if (i) r.eachBefore(u);
          else {
            var l = r,
              c = r,
              f = r;
            r.eachBefore(function (t) {
              if (t.x < l.x) l = t;
              if (t.x > c.x) c = t;
              if (t.depth > f.depth) f = t;
            });
            var d = l === c ? 1 : t(l, c) / 2,
              h = d - l.x,
              p = e / (c.x + d + h),
              m = n / (f.depth || 1);
            r.eachBefore(function (t) {
              t.x = (t.x + h) * p;
              t.y = t.depth * m;
            });
          }
          return r;
        }
        function s(e) {
          var n = e.children,
            i = e.parent.children,
            r = e.i ? i[e.i - 1] : null;
          if (n) {
            PD(e);
            var s = (n[0].z + n[n.length - 1].z) / 2;
            if (r) {
              e.z = r.z + t(e._, r._);
              e.m = e.z - s;
            } else {
              e.z = s;
            }
          } else if (r) {
            e.z = r.z + t(e._, r._);
          }
          e.parent.A = o(e, r, e.parent.A || i[0]);
        }
        function a(t) {
          t._.x = t.z + t.parent.m;
          t.m += t.parent.m;
        }
        function o(e, n, i) {
          if (n) {
            var r = e,
              s = e,
              a = n,
              o = r.parent.children[0],
              u = r.m,
              l = s.m,
              c = a.m,
              f = o.m,
              d;
            while (((a = ND(a)), (r = TD(r)), a && r)) {
              o = TD(o);
              s = ND(s);
              s.a = e;
              d = a.z + c - r.z - u + t(a._, r._);
              if (d > 0) {
                LD(qD(a, e, i), e, d);
                u += d;
                l += d;
              }
              c += a.m;
              u += r.m;
              f += o.m;
              l += s.m;
            }
            if (a && !ND(s)) {
              s.t = a;
              s.m += c - l;
            }
            if (r && !TD(o)) {
              o.t = r;
              o.m += u - f;
              i = e;
            }
          }
          return i;
        }
        function u(t) {
          t.x *= e;
          t.y = t.depth * n;
        }
        r.separation = function (e) {
          return arguments.length ? ((t = e), r) : t;
        };
        r.size = function (t) {
          return arguments.length ? ((i = false), (e = +t[0]), (n = +t[1]), r) : i ? null : [e, n];
        };
        r.nodeSize = function (t) {
          return arguments.length ? ((i = true), (e = +t[0]), (n = +t[1]), r) : i ? [e, n] : null;
        };
        return r;
      }
      function GD(t, e) {
        return t.parent === e.parent ? 1 : 2;
      }
      function YD(t) {
        return t.reduce(WD, 0) / t.length;
      }
      function WD(t, e) {
        return t + e.x;
      }
      function XD(t) {
        return 1 + t.reduce(HD, 0);
      }
      function HD(t, e) {
        return Math.max(t, e.y);
      }
      function VD(t) {
        var e;
        while ((e = t.children)) t = e[0];
        return t;
      }
      function QD(t) {
        var e;
        while ((e = t.children)) t = e[e.length - 1];
        return t;
      }
      function KD() {
        var t = GD,
          e = 1,
          n = 1,
          i = false;
        function r(r) {
          var s,
            a = 0;
          r.eachAfter(function (e) {
            var n = e.children;
            if (n) {
              e.x = YD(n);
              e.y = XD(n);
            } else {
              e.x = s ? (a += t(e, s)) : 0;
              e.y = 0;
              s = e;
            }
          });
          var o = VD(r),
            u = QD(r),
            l = o.x - t(o, u) / 2,
            c = u.x + t(u, o) / 2;
          return r.eachAfter(
            i
              ? function (t) {
                  t.x = (t.x - r.x) * e;
                  t.y = (r.y - t.y) * n;
                }
              : function (t) {
                  t.x = ((t.x - l) / (c - l)) * e;
                  t.y = (1 - (r.y ? t.y / r.y : 1)) * n;
                }
          );
        }
        r.separation = function (e) {
          return arguments.length ? ((t = e), r) : t;
        };
        r.size = function (t) {
          return arguments.length ? ((i = false), (e = +t[0]), (n = +t[1]), r) : i ? null : [e, n];
        };
        r.nodeSize = function (t) {
          return arguments.length ? ((i = true), (e = +t[0]), (n = +t[1]), r) : i ? [e, n] : null;
        };
        return r;
      }
      function ZD(t, e, n, i, r) {
        var s = t.children,
          a,
          o = s.length,
          u,
          l = new Array(o + 1);
        for (l[0] = u = a = 0; a < o; ++a) {
          l[a + 1] = u += s[a].value;
        }
        c(0, o, t.value, e, n, i, r);
        function c(t, e, n, i, r, a, o) {
          if (t >= e - 1) {
            var u = s[t];
            (u.x0 = i), (u.y0 = r);
            (u.x1 = a), (u.y1 = o);
            return;
          }
          var f = l[t],
            d = n / 2 + f,
            h = t + 1,
            p = e - 1;
          while (h < p) {
            var m = (h + p) >>> 1;
            if (l[m] < d) h = m + 1;
            else p = m;
          }
          if (d - l[h - 1] < l[h] - d && t + 1 < h) --h;
          var g = l[h] - f,
            y = n - g;
          if (a - i > o - r) {
            var v = n ? (i * y + a * g) / n : a;
            c(t, h, g, i, r, v, o);
            c(h, e, y, v, r, a, o);
          } else {
            var b = n ? (r * y + o * g) / n : o;
            c(t, h, g, i, r, a, b);
            c(h, e, y, i, b, a, o);
          }
        }
      }
      function JD(t, e, n, i, r) {
        var s = t.children,
          a,
          o = -1,
          u = s.length,
          l = t.value && (r - n) / t.value;
        while (++o < u) {
          (a = s[o]), (a.x0 = e), (a.x1 = i);
          (a.y0 = n), (a.y1 = n += a.value * l);
        }
      }
      function tC(t, e, n, i, r) {
        (t.depth & 1 ? JD : kD)(t, e, n, i, r);
      }
      var eC = (1 + Math.sqrt(5)) / 2;
      function nC(t, e, n, i, r, s) {
        var a = [],
          o = e.children,
          u,
          l,
          c = 0,
          f = 0,
          d = o.length,
          h,
          p,
          m = e.value,
          g,
          y,
          v,
          b,
          x,
          _,
          w;
        while (c < d) {
          (h = r - n), (p = s - i);
          do {
            g = o[f++].value;
          } while (!g && f < d);
          y = v = g;
          _ = Math.max(p / h, h / p) / (m * t);
          w = g * g * _;
          x = Math.max(v / w, w / y);
          for (; f < d; ++f) {
            g += l = o[f].value;
            if (l < y) y = l;
            if (l > v) v = l;
            w = g * g * _;
            b = Math.max(v / w, w / y);
            if (b > x) {
              g -= l;
              break;
            }
            x = b;
          }
          a.push((u = { value: g, dice: h < p, children: o.slice(c, f) }));
          if (u.dice) kD(u, n, i, r, m ? (i += (p * g) / m) : s);
          else JD(u, n, i, m ? (n += (h * g) / m) : r, s);
          (m -= g), (c = f);
        }
        return a;
      }
      const iC = (function t(e) {
        function n(t, n, i, r, s) {
          nC(e, t, n, i, r, s);
        }
        n.ratio = function (e) {
          return t((e = +e) > 1 ? e : 1);
        };
        return n;
      })(eC);
      const rC = (function t(e) {
        function n(t, n, i, r, s) {
          if ((a = t._squarify) && a.ratio === e) {
            var a,
              o,
              u,
              l,
              c = -1,
              f,
              d = a.length,
              h = t.value;
            while (++c < d) {
              (o = a[c]), (u = o.children);
              for (l = o.value = 0, f = u.length; l < f; ++l) o.value += u[l].value;
              if (o.dice) kD(o, n, i, r, h ? (i += ((s - i) * o.value) / h) : s);
              else JD(o, n, i, h ? (n += ((r - n) * o.value) / h) : r, s);
              h -= o.value;
            }
          } else {
            t._squarify = a = nC(e, t, n, i, r, s);
            a.ratio = e;
          }
        }
        n.ratio = function (e) {
          return t((e = +e) > 1 ? e : 1);
        };
        return n;
      })(eC);
      function sC() {
        var t = iC,
          e = false,
          n = 1,
          i = 1,
          r = [0],
          s = HM,
          a = HM,
          o = HM,
          u = HM,
          l = HM;
        function c(t) {
          t.x0 = t.y0 = 0;
          t.x1 = n;
          t.y1 = i;
          t.eachBefore(f);
          r = [0];
          if (e) t.eachBefore(AD);
          return t;
        }
        function f(e) {
          var n = r[e.depth],
            i = e.x0 + n,
            c = e.y0 + n,
            f = e.x1 - n,
            d = e.y1 - n;
          if (f < i) i = f = (i + f) / 2;
          if (d < c) c = d = (c + d) / 2;
          e.x0 = i;
          e.y0 = c;
          e.x1 = f;
          e.y1 = d;
          if (e.children) {
            n = r[e.depth + 1] = s(e) / 2;
            i += l(e) - n;
            c += a(e) - n;
            f -= o(e) - n;
            d -= u(e) - n;
            if (f < i) i = f = (i + f) / 2;
            if (d < c) c = d = (c + d) / 2;
            t(e, i, c, f, d);
          }
        }
        c.round = function (t) {
          return arguments.length ? ((e = !!t), c) : e;
        };
        c.size = function (t) {
          return arguments.length ? ((n = +t[0]), (i = +t[1]), c) : [n, i];
        };
        c.tile = function (e) {
          return arguments.length ? ((t = XM(e)), c) : t;
        };
        c.padding = function (t) {
          return arguments.length ? c.paddingInner(t).paddingOuter(t) : c.paddingInner();
        };
        c.paddingInner = function (t) {
          return arguments.length ? ((s = typeof t === "function" ? t : VM(+t)), c) : s;
        };
        c.paddingOuter = function (t) {
          return arguments.length ? c.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : c.paddingTop();
        };
        c.paddingTop = function (t) {
          return arguments.length ? ((a = typeof t === "function" ? t : VM(+t)), c) : a;
        };
        c.paddingRight = function (t) {
          return arguments.length ? ((o = typeof t === "function" ? t : VM(+t)), c) : o;
        };
        c.paddingBottom = function (t) {
          return arguments.length ? ((u = typeof t === "function" ? t : VM(+t)), c) : u;
        };
        c.paddingLeft = function (t) {
          return arguments.length ? ((l = typeof t === "function" ? t : VM(+t)), c) : l;
        };
        return c;
      }
      function aC(t, e, n) {
        const i = {};
        t.each((t) => {
          const r = t.data;
          if (n(r)) i[e(r)] = t;
        });
        t.lookup = i;
        return t;
      }
      function oC(t) {
        zi.call(this, null, t);
      }
      oC.Definition = {
        type: "Nest",
        metadata: { treesource: true, changes: true },
        params: [
          { name: "keys", type: "field", array: true },
          { name: "generate", type: "boolean" },
        ],
      };
      const uC = (t) => t.values;
      (0, p.B)(oC, zi, {
        transform(t, e) {
          if (!e.source) {
            (0, p.z3)("Nest transform requires an upstream data source.");
          }
          var n = t.generate,
            i = t.modified(),
            r = e.clone(),
            s = this.value;
          if (!s || i || e.changed()) {
            if (s) {
              s.each((t) => {
                if (t.children && gn(t.data)) {
                  r.rem.push(t.data);
                }
              });
            }
            this.value = s = PM(
              {
                values: (0, p.YO)(t.keys)
                  .reduce((t, e) => {
                    t.key(e);
                    return t;
                  }, lC())
                  .entries(r.source),
              },
              uC
            );
            if (n) {
              s.each((t) => {
                if (t.children) {
                  t = bn(t.data);
                  r.add.push(t);
                  r.source.push(t);
                }
              });
            }
            aC(s, yn, yn);
          }
          r.source.root = s;
          return r;
        },
      });
      function lC() {
        const t = [],
          e = { entries: (t) => i(n(t, 0), 0), key: (n) => (t.push(n), e) };
        function n(e, i) {
          if (i >= t.length) {
            return e;
          }
          const r = e.length,
            s = t[i++],
            a = {},
            o = {};
          let u = -1,
            l,
            c,
            f;
          while (++u < r) {
            l = s((c = e[u])) + "";
            if ((f = a[l])) {
              f.push(c);
            } else {
              a[l] = [c];
            }
          }
          for (l in a) {
            o[l] = n(a[l], i);
          }
          return o;
        }
        function i(e, n) {
          if (++n > t.length) return e;
          const r = [];
          for (const t in e) {
            r.push({ key: t, values: i(e[t], n) });
          }
          return r;
        }
        return e;
      }
      function cC(t) {
        zi.call(this, null, t);
      }
      const fC = (t, e) => (t.parent === e.parent ? 1 : 2);
      (0, p.B)(cC, zi, {
        transform(t, e) {
          if (!e.source || !e.source.root) {
            (0, p.z3)(this.constructor.name + " transform requires a backing tree data source.");
          }
          const n = this.layout(t.method),
            i = this.fields,
            r = e.source.root,
            s = t.as || i;
          if (t.field) r.sum(t.field);
          else r.count();
          if (t.sort) r.sort(An(t.sort, (t) => t.data));
          dC(n, this.params, t);
          if (n.separation) {
            n.separation(t.separation !== false ? fC : p.xH);
          }
          try {
            this.value = n(r);
          } catch (a) {
            (0, p.z3)(a);
          }
          r.each((t) => hC(t, i, s));
          return e.reflow(t.modified()).modifies(s).modifies("leaf");
        },
      });
      function dC(t, e, n) {
        for (let i, r = 0, s = e.length; r < s; ++r) {
          i = e[r];
          if (i in n) t[i](n[i]);
        }
      }
      function hC(t, e, n) {
        const i = t.data,
          r = e.length - 1;
        for (let s = 0; s < r; ++s) {
          i[n[s]] = t[e[s]];
        }
        i[n[r]] = t.children ? t.children.length : 0;
      }
      const pC = ["x", "y", "r", "depth", "children"];
      function mC(t) {
        cC.call(this, t);
      }
      mC.Definition = {
        type: "Pack",
        metadata: { tree: true, modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "sort", type: "compare" },
          { name: "padding", type: "number", default: 0 },
          { name: "radius", type: "field", default: null },
          { name: "size", type: "number", array: true, length: 2 },
          { name: "as", type: "string", array: true, length: pC.length, default: pC },
        ],
      };
      (0, p.B)(mC, cC, { layout: bD, params: ["radius", "size", "padding"], fields: pC });
      const gC = ["x0", "y0", "x1", "y1", "depth", "children"];
      function yC(t) {
        cC.call(this, t);
      }
      yC.Definition = {
        type: "Partition",
        metadata: { tree: true, modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "sort", type: "compare" },
          { name: "padding", type: "number", default: 0 },
          { name: "round", type: "boolean", default: false },
          { name: "size", type: "number", array: true, length: 2 },
          { name: "as", type: "string", array: true, length: gC.length, default: gC },
        ],
      };
      (0, p.B)(yC, cC, { layout: ED, params: ["size", "round", "padding"], fields: gC });
      function vC(t) {
        zi.call(this, null, t);
      }
      vC.Definition = {
        type: "Stratify",
        metadata: { treesource: true },
        params: [
          { name: "key", type: "field", required: true },
          { name: "parentKey", type: "field", required: true },
        ],
      };
      (0, p.B)(vC, zi, {
        transform(t, e) {
          if (!e.source) {
            (0, p.z3)("Stratify transform requires an upstream data source.");
          }
          let n = this.value;
          const i = t.modified(),
            r = e.fork(e.ALL).materialize(e.SOURCE),
            s = !n || i || e.changed(e.ADD_REM) || e.modified(t.key.fields) || e.modified(t.parentKey.fields);
          r.source = r.source.slice();
          if (s) {
            n = r.source.length ? aC(BD().id(t.key).parentId(t.parentKey)(r.source), t.key, p.vN) : aC(BD()([{}]), t.key, t.key);
          }
          r.source.root = this.value = n;
          return r;
        },
      });
      const bC = { tidy: jD, cluster: KD };
      const xC = ["x", "y", "depth", "children"];
      function _C(t) {
        cC.call(this, t);
      }
      _C.Definition = {
        type: "Tree",
        metadata: { tree: true, modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "sort", type: "compare" },
          { name: "method", type: "enum", default: "tidy", values: ["tidy", "cluster"] },
          { name: "size", type: "number", array: true, length: 2 },
          { name: "nodeSize", type: "number", array: true, length: 2 },
          { name: "separation", type: "boolean", default: true },
          { name: "as", type: "string", array: true, length: xC.length, default: xC },
        ],
      };
      (0, p.B)(_C, cC, {
        layout(t) {
          const e = t || "tidy";
          if ((0, p.mQ)(bC, e)) return bC[e]();
          else (0, p.z3)("Unrecognized Tree layout method: " + e);
        },
        params: ["size", "nodeSize"],
        fields: xC,
      });
      function wC(t) {
        zi.call(this, [], t);
      }
      wC.Definition = { type: "TreeLinks", metadata: { tree: true, generates: true, changes: true }, params: [] };
      (0, p.B)(wC, zi, {
        transform(t, e) {
          const n = this.value,
            i = e.source && e.source.root,
            r = e.fork(e.NO_SOURCE),
            s = {};
          if (!i) (0, p.z3)("TreeLinks transform requires a tree data source.");
          if (e.changed(e.ADD_REM)) {
            r.rem = n;
            e.visit(e.SOURCE, (t) => (s[yn(t)] = 1));
            i.each((t) => {
              const e = t.data,
                n = t.parent && t.parent.data;
              if (n && s[yn(e)] && s[yn(n)]) {
                r.add.push(bn({ source: n, target: e }));
              }
            });
            this.value = r.add;
          } else if (e.changed(e.MOD)) {
            e.visit(e.MOD, (t) => (s[yn(t)] = 1));
            n.forEach((t) => {
              if (s[yn(t.source)] || s[yn(t.target)]) {
                r.mod.push(t);
              }
            });
          }
          return r;
        },
      });
      const AC = { binary: ZD, dice: kD, slice: JD, slicedice: tC, squarify: iC, resquarify: rC };
      const kC = ["x0", "y0", "x1", "y1", "depth", "children"];
      function EC(t) {
        cC.call(this, t);
      }
      EC.Definition = {
        type: "Treemap",
        metadata: { tree: true, modifies: true },
        params: [
          { name: "field", type: "field" },
          { name: "sort", type: "compare" },
          { name: "method", type: "enum", default: "squarify", values: ["squarify", "resquarify", "binary", "dice", "slice", "slicedice"] },
          { name: "padding", type: "number", default: 0 },
          { name: "paddingInner", type: "number", default: 0 },
          { name: "paddingOuter", type: "number", default: 0 },
          { name: "paddingTop", type: "number", default: 0 },
          { name: "paddingRight", type: "number", default: 0 },
          { name: "paddingBottom", type: "number", default: 0 },
          { name: "paddingLeft", type: "number", default: 0 },
          { name: "ratio", type: "number", default: 1.618033988749895 },
          { name: "round", type: "boolean", default: false },
          { name: "size", type: "number", array: true, length: 2 },
          { name: "as", type: "string", array: true, length: kC.length, default: kC },
        ],
      };
      (0, p.B)(EC, cC, {
        layout() {
          const t = sC();
          t.ratio = (e) => {
            const n = t.tile();
            if (n.ratio) t.tile(n.ratio(e));
          };
          t.method = (e) => {
            if ((0, p.mQ)(AC, e)) t.tile(AC[e]);
            else (0, p.z3)("Unrecognized Treemap layout method: " + e);
          };
          return t;
        },
        params: [
          "method",
          "ratio",
          "size",
          "round",
          "padding",
          "paddingInner",
          "paddingOuter",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ],
        fields: kC,
      });
      const MC = 4278190080;
      function DC(t, e) {
        const n = t.bitmap();
        (e || []).forEach((e) => n.set(t(e.boundary[0]), t(e.boundary[3])));
        return [n, undefined];
      }
      function CC(t, e, n, i, r) {
        const s = t.width,
          a = t.height,
          o = i || r,
          u = Ko(s, a).getContext("2d"),
          l = Ko(s, a).getContext("2d"),
          c = o && Ko(s, a).getContext("2d");
        n.forEach((t) => SC(u, t, false));
        SC(l, e, false);
        if (o) {
          SC(c, e, true);
        }
        const f = FC(u, s, a),
          d = FC(l, s, a),
          h = o && FC(c, s, a),
          p = t.bitmap(),
          m = o && t.bitmap();
        let g, y, v, b, x, _, w, A;
        for (y = 0; y < a; ++y) {
          for (g = 0; g < s; ++g) {
            x = y * s + g;
            _ = f[x] & MC;
            A = d[x] & MC;
            w = o && h[x] & MC;
            if (_ || w || A) {
              v = t(g);
              b = t(y);
              if (!r && (_ || A)) p.set(v, b);
              if (o && (_ || w)) m.set(v, b);
            }
          }
        }
        return [p, m];
      }
      function FC(t, e, n) {
        return new Uint32Array(t.getImageData(0, 0, e, n).data.buffer);
      }
      function SC(t, e, n) {
        if (!e.length) return;
        const i = e[0].mark.marktype;
        if (i === "group") {
          e.forEach((e) => {
            e.items.forEach((e) => SC(t, e.items, n));
          });
        } else {
          Qp[i].draw(t, { items: n ? e.map(BC) : e });
        }
      }
      function BC(t) {
        const e = _n(t, {});
        if ((e.stroke && e.strokeOpacity !== 0) || (e.fill && e.fillOpacity !== 0)) {
          return { ...e, strokeOpacity: 1, stroke: "#000", fillOpacity: 0 };
        }
        return e;
      }
      const zC = 5,
        $C = 31,
        RC = 32,
        OC = new Uint32Array(RC + 1),
        TC = new Uint32Array(RC + 1);
      TC[0] = 0;
      OC[0] = ~TC[0];
      for (let yW = 1; yW <= RC; ++yW) {
        TC[yW] = (TC[yW - 1] << 1) | 1;
        OC[yW] = ~TC[yW];
      }
      function NC(t, e) {
        const n = new Uint32Array(~~((t * e + RC) / RC));
        function i(t, e) {
          n[t] |= e;
        }
        function r(t, e) {
          n[t] &= e;
        }
        return {
          array: n,
          get: (e, i) => {
            const r = i * t + e;
            return n[r >>> zC] & (1 << (r & $C));
          },
          set: (e, n) => {
            const r = n * t + e;
            i(r >>> zC, 1 << (r & $C));
          },
          clear: (e, n) => {
            const i = n * t + e;
            r(i >>> zC, ~(1 << (i & $C)));
          },
          getRange: (e, i, r, s) => {
            let a = s,
              o,
              u,
              l,
              c;
            for (; a >= i; --a) {
              o = a * t + e;
              u = a * t + r;
              l = o >>> zC;
              c = u >>> zC;
              if (l === c) {
                if (n[l] & OC[o & $C] & TC[(u & $C) + 1]) {
                  return true;
                }
              } else {
                if (n[l] & OC[o & $C]) return true;
                if (n[c] & TC[(u & $C) + 1]) return true;
                for (let t = l + 1; t < c; ++t) {
                  if (n[t]) return true;
                }
              }
            }
            return false;
          },
          setRange: (e, n, r, s) => {
            let a, o, u, l, c;
            for (; n <= s; ++n) {
              a = n * t + e;
              o = n * t + r;
              u = a >>> zC;
              l = o >>> zC;
              if (u === l) {
                i(u, OC[a & $C] & TC[(o & $C) + 1]);
              } else {
                i(u, OC[a & $C]);
                i(l, TC[(o & $C) + 1]);
                for (c = u + 1; c < l; ++c) i(c, 4294967295);
              }
            }
          },
          clearRange: (e, n, i, s) => {
            let a, o, u, l, c;
            for (; n <= s; ++n) {
              a = n * t + e;
              o = n * t + i;
              u = a >>> zC;
              l = o >>> zC;
              if (u === l) {
                r(u, TC[a & $C] | OC[(o & $C) + 1]);
              } else {
                r(u, TC[a & $C]);
                r(l, OC[(o & $C) + 1]);
                for (c = u + 1; c < l; ++c) r(c, 0);
              }
            }
          },
          outOfBounds: (n, i, r, s) => n < 0 || i < 0 || s >= e || r >= t,
        };
      }
      function LC(t, e, n) {
        const i = Math.max(1, Math.sqrt((t * e) / 1e6)),
          r = ~~((t + 2 * n + i) / i),
          s = ~~((e + 2 * n + i) / i),
          a = (t) => ~~((t + n) / i);
        a.invert = (t) => t * i - n;
        a.bitmap = () => NC(r, s);
        a.ratio = i;
        a.padding = n;
        a.width = t;
        a.height = e;
        return a;
      }
      function PC(t, e, n, i) {
        const r = t.width,
          s = t.height;
        return function (t) {
          const e = t.datum.datum.items[i].items,
            n = e.length,
            a = t.datum.fontSize,
            o = Ap.width(t.datum, t.datum.text);
          let u = 0,
            l,
            c,
            f,
            d,
            h,
            p,
            m;
          for (let i = 0; i < n; ++i) {
            l = e[i].x;
            f = e[i].y;
            c = e[i].x2 === undefined ? l : e[i].x2;
            d = e[i].y2 === undefined ? f : e[i].y2;
            h = (l + c) / 2;
            p = (f + d) / 2;
            m = Math.abs(c - l + d - f);
            if (m >= u) {
              u = m;
              t.x = h;
              t.y = p;
            }
          }
          h = o / 2;
          p = a / 2;
          l = t.x - h;
          c = t.x + h;
          f = t.y - p;
          d = t.y + p;
          t.align = "center";
          if (l < 0 && c <= r) {
            t.align = "left";
          } else if (0 <= l && r < c) {
            t.align = "right";
          }
          t.baseline = "middle";
          if (f < 0 && d <= s) {
            t.baseline = "top";
          } else if (0 <= f && s < d) {
            t.baseline = "bottom";
          }
          return true;
        };
      }
      function qC(t, e, n, i, r, s) {
        let a = n / 2;
        return t - a < 0 || t + a > r || e - (a = i / 2) < 0 || e + a > s;
      }
      function IC(t, e, n, i, r, s, a, o) {
        const u = (r * s) / (i * 2),
          l = t(e - u),
          c = t(e + u),
          f = t(n - (s = s / 2)),
          d = t(n + s);
        return a.outOfBounds(l, f, c, d) || a.getRange(l, f, c, d) || (o && o.getRange(l, f, c, d));
      }
      function UC(t, e, n, i) {
        const r = t.width,
          s = t.height,
          a = e[0],
          o = e[1];
        function u(e, n, i, u, l) {
          const c = t.invert(e),
            f = t.invert(n);
          let d = i,
            h = s,
            p;
          if (!qC(c, f, u, l, r, s) && !IC(t, c, f, l, u, d, a, o) && !IC(t, c, f, l, u, l, a, null)) {
            while (h - d >= 1) {
              p = (d + h) / 2;
              if (IC(t, c, f, l, u, p, a, o)) {
                h = p;
              } else {
                d = p;
              }
            }
            if (d > i) {
              return [c, f, d, true];
            }
          }
        }
        return function (e) {
          const o = e.datum.datum.items[i].items,
            l = o.length,
            c = e.datum.fontSize,
            f = Ap.width(e.datum, e.datum.text);
          let d = n ? c : 0,
            h = false,
            p = false,
            m = 0,
            g,
            y,
            v,
            b,
            x,
            _,
            w,
            A,
            k,
            E,
            M,
            D,
            C,
            F,
            S,
            B,
            z;
          for (let i = 0; i < l; ++i) {
            g = o[i].x;
            v = o[i].y;
            y = o[i].x2 === undefined ? g : o[i].x2;
            b = o[i].y2 === undefined ? v : o[i].y2;
            if (g > y) {
              z = g;
              g = y;
              y = z;
            }
            if (v > b) {
              z = v;
              v = b;
              b = z;
            }
            k = t(g);
            M = t(y);
            E = ~~((k + M) / 2);
            D = t(v);
            F = t(b);
            C = ~~((D + F) / 2);
            for (w = E; w >= k; --w) {
              for (A = C; A >= D; --A) {
                B = u(w, A, d, f, c);
                if (B) {
                  [e.x, e.y, d, h] = B;
                }
              }
            }
            for (w = E; w <= M; ++w) {
              for (A = C; A <= F; ++A) {
                B = u(w, A, d, f, c);
                if (B) {
                  [e.x, e.y, d, h] = B;
                }
              }
            }
            if (!h && !n) {
              S = Math.abs(y - g + b - v);
              x = (g + y) / 2;
              _ = (v + b) / 2;
              if (S >= m && !qC(x, _, f, c, r, s) && !IC(t, x, _, c, f, c, a, null)) {
                m = S;
                e.x = x;
                e.y = _;
                p = true;
              }
            }
          }
          if (h || p) {
            x = f / 2;
            _ = c / 2;
            a.setRange(t(e.x - x), t(e.y - _), t(e.x + x), t(e.y + _));
            e.align = "center";
            e.baseline = "middle";
            return true;
          } else {
            return false;
          }
        };
      }
      const jC = [-1, -1, 1, 1];
      const GC = [-1, 1, -1, 1];
      function YC(t, e, n, i) {
        const r = t.width,
          s = t.height,
          a = e[0],
          o = e[1],
          u = t.bitmap();
        return function (e) {
          const l = e.datum.datum.items[i].items,
            c = l.length,
            f = e.datum.fontSize,
            d = Ap.width(e.datum, e.datum.text),
            h = [];
          let p = n ? f : 0,
            m = false,
            g = false,
            y = 0,
            v,
            b,
            x,
            _,
            w,
            A,
            k,
            E,
            M,
            D,
            C,
            F;
          for (let i = 0; i < c; ++i) {
            v = l[i].x;
            x = l[i].y;
            b = l[i].x2 === undefined ? v : l[i].x2;
            _ = l[i].y2 === undefined ? x : l[i].y2;
            h.push([t((v + b) / 2), t((x + _) / 2)]);
            while (h.length) {
              [k, E] = h.pop();
              if (a.get(k, E) || o.get(k, E) || u.get(k, E)) continue;
              u.set(k, E);
              for (let t = 0; t < 4; ++t) {
                w = k + jC[t];
                A = E + GC[t];
                if (!u.outOfBounds(w, A, w, A)) h.push([w, A]);
              }
              w = t.invert(k);
              A = t.invert(E);
              M = p;
              D = s;
              if (!qC(w, A, d, f, r, s) && !IC(t, w, A, f, d, M, a, o) && !IC(t, w, A, f, d, f, a, null)) {
                while (D - M >= 1) {
                  C = (M + D) / 2;
                  if (IC(t, w, A, f, d, C, a, o)) {
                    D = C;
                  } else {
                    M = C;
                  }
                }
                if (M > p) {
                  e.x = w;
                  e.y = A;
                  p = M;
                  m = true;
                }
              }
            }
            if (!m && !n) {
              F = Math.abs(b - v + _ - x);
              w = (v + b) / 2;
              A = (x + _) / 2;
              if (F >= y && !qC(w, A, d, f, r, s) && !IC(t, w, A, f, d, f, a, null)) {
                y = F;
                e.x = w;
                e.y = A;
                g = true;
              }
            }
          }
          if (m || g) {
            w = d / 2;
            A = f / 2;
            a.setRange(t(e.x - w), t(e.y - A), t(e.x + w), t(e.y + A));
            e.align = "center";
            e.baseline = "middle";
            return true;
          } else {
            return false;
          }
        };
      }
      const WC = ["right", "center", "left"],
        XC = ["bottom", "middle", "top"];
      function HC(t, e, n, i) {
        const r = t.width,
          s = t.height,
          a = e[0],
          o = e[1],
          u = i.length;
        return function (e) {
          const l = e.boundary,
            c = e.datum.fontSize;
          if (l[2] < 0 || l[5] < 0 || l[0] > r || l[3] > s) {
            return false;
          }
          let f = e.textWidth ?? 0,
            d,
            h,
            p,
            m,
            g,
            y,
            v,
            b,
            x,
            _,
            w,
            A,
            k,
            E,
            M;
          for (let r = 0; r < u; ++r) {
            d = (n[r] & 3) - 1;
            h = ((n[r] >>> 2) & 3) - 1;
            p = (d === 0 && h === 0) || i[r] < 0;
            m = d && h ? Math.SQRT1_2 : 1;
            g = i[r] < 0 ? -1 : 1;
            y = l[1 + d] + i[r] * d * m;
            w = l[4 + h] + (g * c * h) / 2 + i[r] * h * m;
            b = w - c / 2;
            x = w + c / 2;
            A = t(y);
            E = t(b);
            M = t(x);
            if (!f) {
              if (!VC(A, A, E, M, a, o, y, y, b, x, l, p)) {
                continue;
              } else {
                f = Ap.width(e.datum, e.datum.text);
              }
            }
            _ = y + (g * f * d) / 2;
            y = _ - f / 2;
            v = _ + f / 2;
            A = t(y);
            k = t(v);
            if (VC(A, k, E, M, a, o, y, v, b, x, l, p)) {
              e.x = !d ? _ : d * g < 0 ? v : y;
              e.y = !h ? w : h * g < 0 ? x : b;
              e.align = WC[d * g + 1];
              e.baseline = XC[h * g + 1];
              a.setRange(A, E, k, M);
              return true;
            }
          }
          return false;
        };
      }
      function VC(t, e, n, i, r, s, a, o, u, l, c, f) {
        return !(r.outOfBounds(t, n, e, i) || ((f && s) || r).getRange(t, n, e, i));
      }
      const QC = 0,
        KC = 4,
        ZC = 8,
        JC = 0,
        tF = 1,
        eF = 2;
      const nF = {
        "top-left": QC + JC,
        top: QC + tF,
        "top-right": QC + eF,
        left: KC + JC,
        middle: KC + tF,
        right: KC + eF,
        "bottom-left": ZC + JC,
        bottom: ZC + tF,
        "bottom-right": ZC + eF,
      };
      const iF = { naive: PC, "reduced-search": UC, floodfill: YC };
      function rF(t, e, n, i, r, s, a, o, u, l, c) {
        if (!t.length) return t;
        const f = Math.max(i.length, r.length),
          d = sF(i, f),
          h = aF(r, f),
          p = oF(t[0].datum),
          m = p === "group" && t[0].datum.items[u].marktype,
          g = m === "area",
          y = uF(p, m, o, u),
          v = l === null || l === Infinity,
          b = g && c === "naive";
        let x = -1,
          _ = -1;
        const w = t.map((t) => {
          const e = v ? Ap.width(t, t.text) : undefined;
          x = Math.max(x, e);
          _ = Math.max(_, t.fontSize);
          return { datum: t, opacity: 0, x: undefined, y: undefined, align: undefined, baseline: undefined, boundary: y(t), textWidth: e };
        });
        l = l === null || l === Infinity ? Math.max(x, _) + Math.max(...i) : l;
        const A = LC(e[0], e[1], l);
        let k;
        if (!b) {
          if (n) {
            w.sort((t, e) => n(t.datum, e.datum));
          }
          let e = false;
          for (let t = 0; t < h.length && !e; ++t) {
            e = h[t] === 5 || d[t] < 0;
          }
          const i = ((p && a) || g) && t.map((t) => t.datum);
          k = s.length || i ? CC(A, i || [], s, e, g) : DC(A, a && w);
        }
        const E = g ? iF[c](A, k, a, u) : HC(A, k, h, d);
        w.forEach((t) => (t.opacity = +E(t)));
        return w;
      }
      function sF(t, e) {
        const n = new Float64Array(e),
          i = t.length;
        for (let r = 0; r < i; ++r) n[r] = t[r] || 0;
        for (let r = i; r < e; ++r) n[r] = n[i - 1];
        return n;
      }
      function aF(t, e) {
        const n = new Int8Array(e),
          i = t.length;
        for (let r = 0; r < i; ++r) n[r] |= nF[t[r]];
        for (let r = i; r < e; ++r) n[r] = n[i - 1];
        return n;
      }
      function oF(t) {
        return t && t.mark && t.mark.marktype;
      }
      function uF(t, e, n, i) {
        const r = (t) => [t.x, t.x, t.x, t.y, t.y, t.y];
        if (!t) {
          return r;
        } else if (t === "line" || t === "area") {
          return (t) => r(t.datum);
        } else if (e === "line") {
          return (t) => {
            const e = t.datum.items[i].items;
            return r(e.length ? e[n === "start" ? 0 : e.length - 1] : { x: NaN, y: NaN });
          };
        } else {
          return (t) => {
            const e = t.datum.bounds;
            return [e.x1, (e.x1 + e.x2) / 2, e.x2, e.y1, (e.y1 + e.y2) / 2, e.y2];
          };
        }
      }
      const lF = ["x", "y", "opacity", "align", "baseline"];
      const cF = ["top-left", "left", "bottom-left", "top", "bottom", "top-right", "right", "bottom-right"];
      function fF(t) {
        zi.call(this, null, t);
      }
      fF.Definition = {
        type: "Label",
        metadata: { modifies: true },
        params: [
          { name: "size", type: "number", array: true, length: 2, required: true },
          { name: "sort", type: "compare" },
          { name: "anchor", type: "string", array: true, default: cF },
          { name: "offset", type: "number", array: true, default: [1] },
          { name: "padding", type: "number", default: 0, null: true },
          { name: "lineAnchor", type: "string", values: ["start", "end"], default: "end" },
          { name: "markIndex", type: "number", default: 0 },
          { name: "avoidBaseMark", type: "boolean", default: true },
          { name: "avoidMarks", type: "data", array: true },
          { name: "method", type: "string", default: "naive" },
          { name: "as", type: "string", array: true, length: lF.length, default: lF },
        ],
      };
      (0, p.B)(fF, zi, {
        transform(t, e) {
          function n(n) {
            const i = t[n];
            return (0, p.Tn)(i) && e.modified(i.fields);
          }
          const i = t.modified();
          if (!(i || e.changed(e.ADD_REM) || n("sort"))) return;
          if (!t.size || t.size.length !== 2) {
            (0, p.z3)("Size parameter should be specified as a [width, height] array.");
          }
          const r = t.as || lF;
          rF(
            e.materialize(e.SOURCE).source || [],
            t.size,
            t.sort,
            (0, p.YO)(t.offset == null ? 1 : t.offset),
            (0, p.YO)(t.anchor || cF),
            t.avoidMarks || [],
            t.avoidBaseMark !== false,
            t.lineAnchor || "end",
            t.markIndex || 0,
            t.padding === undefined ? 0 : t.padding,
            t.method || "naive"
          ).forEach((t) => {
            const e = t.datum;
            e[r[0]] = t.x;
            e[r[1]] = t.y;
            e[r[2]] = t.opacity;
            e[r[3]] = t.align;
            e[r[4]] = t.baseline;
          });
          return e.reflow(i).modifies(r);
        },
      });
      function dF(t, e) {
        var n = [],
          i = function (t) {
            return t(o);
          },
          r,
          s,
          a,
          o,
          u,
          l;
        if (e == null) {
          n.push(t);
        } else {
          for (r = {}, s = 0, a = t.length; s < a; ++s) {
            o = t[s];
            u = e.map(i);
            l = r[u];
            if (!l) {
              r[u] = l = [];
              l.dims = u;
              n.push(l);
            }
            l.push(o);
          }
        }
        return n;
      }
      function hF(t) {
        zi.call(this, null, t);
      }
      hF.Definition = {
        type: "Loess",
        metadata: { generates: true },
        params: [
          { name: "x", type: "field", required: true },
          { name: "y", type: "field", required: true },
          { name: "groupby", type: "field", array: true },
          { name: "bandwidth", type: "number", default: 0.3 },
          { name: "as", type: "string", array: true },
        ],
      };
      (0, p.B)(hF, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE | e.NO_FIELDS);
          if (!this.value || e.changed() || t.modified()) {
            const i = e.materialize(e.SOURCE).source,
              r = dF(i, t.groupby),
              s = (t.groupby || []).map(p.N6),
              a = s.length,
              o = t.as || [(0, p.N6)(t.x), (0, p.N6)(t.y)],
              u = [];
            r.forEach((e) => {
              Wr(e, t.x, t.y, t.bandwidth || 0.3).forEach((t) => {
                const n = {};
                for (let i = 0; i < a; ++i) {
                  n[s[i]] = e.dims[i];
                }
                n[o[0]] = t[0];
                n[o[1]] = t[1];
                u.push(bn(n));
              });
            });
            if (this.value) n.rem = this.value;
            this.value = n.add = n.source = u;
          }
          return n;
        },
      });
      const pF = { constant: Br, linear: Tr, log: Nr, exp: Lr, pow: Pr, quad: qr, poly: Ir };
      const mF = (t, e) => (t === "poly" ? e : t === "quad" ? 2 : 1);
      function gF(t) {
        zi.call(this, null, t);
      }
      gF.Definition = {
        type: "Regression",
        metadata: { generates: true },
        params: [
          { name: "x", type: "field", required: true },
          { name: "y", type: "field", required: true },
          { name: "groupby", type: "field", array: true },
          { name: "method", type: "string", default: "linear", values: Object.keys(pF) },
          { name: "order", type: "number", default: 3 },
          { name: "extent", type: "number", array: true, length: 2 },
          { name: "params", type: "boolean", default: false },
          { name: "as", type: "string", array: true },
        ],
      };
      (0, p.B)(gF, zi, {
        transform(t, e) {
          const n = e.fork(e.NO_SOURCE | e.NO_FIELDS);
          if (!this.value || e.changed() || t.modified()) {
            const i = e.materialize(e.SOURCE).source,
              r = dF(i, t.groupby),
              s = (t.groupby || []).map(p.N6),
              a = t.method || "linear",
              o = t.order == null ? 3 : t.order,
              u = mF(a, o),
              l = t.as || [(0, p.N6)(t.x), (0, p.N6)(t.y)],
              c = pF[a],
              f = [];
            let d = t.extent;
            if (!(0, p.mQ)(pF, a)) {
              (0, p.z3)("Invalid regression method: " + a);
            }
            if (d != null) {
              if (a === "log" && d[0] <= 0) {
                e.dataflow.warn("Ignoring extent with values <= 0 for log regression.");
                d = null;
              }
            }
            r.forEach((n) => {
              const i = n.length;
              if (i <= u) {
                e.dataflow.warn("Skipping regression with more parameters than data points.");
                return;
              }
              const r = c(n, t.x, t.y, o);
              if (t.params) {
                f.push(bn({ keys: n.dims, coef: r.coef, rSquared: r.rSquared }));
                return;
              }
              const h = d || (0, p.Xx)(n, t.x),
                m = (t) => {
                  const e = {};
                  for (let i = 0; i < s.length; ++i) {
                    e[s[i]] = n.dims[i];
                  }
                  e[l[0]] = t[0];
                  e[l[1]] = t[1];
                  f.push(bn(e));
                };
              if (a === "linear" || a === "constant") {
                h.forEach((t) => m([t, r.predict(t)]));
              } else {
                Kr(r.predict, h, 25, 200).forEach(m);
              }
            });
            if (this.value) n.rem = this.value;
            this.value = n.add = n.source = f;
          }
          return n;
        },
      });
      const yF = 11102230246251565e-32;
      const vF = 134217729;
      const bF = (3 + 8 * yF) * yF;
      function xF(t, e, n, i, r) {
        let s, a, o, u;
        let l = e[0];
        let c = i[0];
        let f = 0;
        let d = 0;
        if (c > l === c > -l) {
          s = l;
          l = e[++f];
        } else {
          s = c;
          c = i[++d];
        }
        let h = 0;
        if (f < t && d < n) {
          if (c > l === c > -l) {
            a = l + s;
            o = s - (a - l);
            l = e[++f];
          } else {
            a = c + s;
            o = s - (a - c);
            c = i[++d];
          }
          s = a;
          if (o !== 0) {
            r[h++] = o;
          }
          while (f < t && d < n) {
            if (c > l === c > -l) {
              a = s + l;
              u = a - s;
              o = s - (a - u) + (l - u);
              l = e[++f];
            } else {
              a = s + c;
              u = a - s;
              o = s - (a - u) + (c - u);
              c = i[++d];
            }
            s = a;
            if (o !== 0) {
              r[h++] = o;
            }
          }
        }
        while (f < t) {
          a = s + l;
          u = a - s;
          o = s - (a - u) + (l - u);
          l = e[++f];
          s = a;
          if (o !== 0) {
            r[h++] = o;
          }
        }
        while (d < n) {
          a = s + c;
          u = a - s;
          o = s - (a - u) + (c - u);
          c = i[++d];
          s = a;
          if (o !== 0) {
            r[h++] = o;
          }
        }
        if (s !== 0 || h === 0) {
          r[h++] = s;
        }
        return h;
      }
      function _F(t, e, n, i, r, s, a, o) {
        return xF(xF(t, e, n, i, a), a, r, s, o);
      }
      function wF(t, e, n, i) {
        let r, s, a, o, u;
        let l, c, f, d, h, p;
        c = vF * n;
        h = c - (c - n);
        p = n - h;
        let m = e[0];
        r = m * n;
        c = vF * m;
        f = c - (c - m);
        d = m - f;
        a = d * p - (r - f * h - d * h - f * p);
        let g = 0;
        if (a !== 0) {
          i[g++] = a;
        }
        for (let y = 1; y < t; y++) {
          m = e[y];
          o = m * n;
          c = vF * m;
          f = c - (c - m);
          d = m - f;
          u = d * p - (o - f * h - d * h - f * p);
          s = r + u;
          l = s - r;
          a = r - (s - l) + (u - l);
          if (a !== 0) {
            i[g++] = a;
          }
          r = o + s;
          a = s - (r - o);
          if (a !== 0) {
            i[g++] = a;
          }
        }
        if (r !== 0 || g === 0) {
          i[g++] = r;
        }
        return g;
      }
      function AF(t, e) {
        for (let n = 0; n < t; n++) e[n] = -e[n];
        return t;
      }
      function kF(t, e) {
        let n = e[0];
        for (let i = 1; i < t; i++) n += e[i];
        return n;
      }
      function EF(t) {
        return new Float64Array(t);
      }
      const MF = (3 + 16 * yF) * yF;
      const DF = (2 + 12 * yF) * yF;
      const CF = (9 + 64 * yF) * yF * yF;
      const FF = EF(4);
      const SF = EF(8);
      const BF = EF(12);
      const zF = EF(16);
      const $F = EF(4);
      function RF(t, e, n, i, r, s, a) {
        let o, u, l, c;
        let f, d, h, p, m, g, y, v, b, x, _, w, A, k;
        const E = t - r;
        const M = n - r;
        const D = e - s;
        const C = i - s;
        x = E * C;
        d = vF * E;
        h = d - (d - E);
        p = E - h;
        d = vF * C;
        m = d - (d - C);
        g = C - m;
        _ = p * g - (x - h * m - p * m - h * g);
        w = D * M;
        d = vF * D;
        h = d - (d - D);
        p = D - h;
        d = vF * M;
        m = d - (d - M);
        g = M - m;
        A = p * g - (w - h * m - p * m - h * g);
        y = _ - A;
        f = _ - y;
        FF[0] = _ - (y + f) + (f - A);
        v = x + y;
        f = v - x;
        b = x - (v - f) + (y - f);
        y = b - w;
        f = b - y;
        FF[1] = b - (y + f) + (f - w);
        k = v + y;
        f = k - v;
        FF[2] = v - (k - f) + (y - f);
        FF[3] = k;
        let F = kF(4, FF);
        let S = DF * a;
        if (F >= S || -F >= S) {
          return F;
        }
        f = t - E;
        o = t - (E + f) + (f - r);
        f = n - M;
        l = n - (M + f) + (f - r);
        f = e - D;
        u = e - (D + f) + (f - s);
        f = i - C;
        c = i - (C + f) + (f - s);
        if (o === 0 && u === 0 && l === 0 && c === 0) {
          return F;
        }
        S = CF * a + bF * Math.abs(F);
        F += E * c + C * o - (D * l + M * u);
        if (F >= S || -F >= S) return F;
        x = o * C;
        d = vF * o;
        h = d - (d - o);
        p = o - h;
        d = vF * C;
        m = d - (d - C);
        g = C - m;
        _ = p * g - (x - h * m - p * m - h * g);
        w = u * M;
        d = vF * u;
        h = d - (d - u);
        p = u - h;
        d = vF * M;
        m = d - (d - M);
        g = M - m;
        A = p * g - (w - h * m - p * m - h * g);
        y = _ - A;
        f = _ - y;
        $F[0] = _ - (y + f) + (f - A);
        v = x + y;
        f = v - x;
        b = x - (v - f) + (y - f);
        y = b - w;
        f = b - y;
        $F[1] = b - (y + f) + (f - w);
        k = v + y;
        f = k - v;
        $F[2] = v - (k - f) + (y - f);
        $F[3] = k;
        const B = xF(4, FF, 4, $F, SF);
        x = E * c;
        d = vF * E;
        h = d - (d - E);
        p = E - h;
        d = vF * c;
        m = d - (d - c);
        g = c - m;
        _ = p * g - (x - h * m - p * m - h * g);
        w = D * l;
        d = vF * D;
        h = d - (d - D);
        p = D - h;
        d = vF * l;
        m = d - (d - l);
        g = l - m;
        A = p * g - (w - h * m - p * m - h * g);
        y = _ - A;
        f = _ - y;
        $F[0] = _ - (y + f) + (f - A);
        v = x + y;
        f = v - x;
        b = x - (v - f) + (y - f);
        y = b - w;
        f = b - y;
        $F[1] = b - (y + f) + (f - w);
        k = v + y;
        f = k - v;
        $F[2] = v - (k - f) + (y - f);
        $F[3] = k;
        const z = xF(B, SF, 4, $F, BF);
        x = o * c;
        d = vF * o;
        h = d - (d - o);
        p = o - h;
        d = vF * c;
        m = d - (d - c);
        g = c - m;
        _ = p * g - (x - h * m - p * m - h * g);
        w = u * l;
        d = vF * u;
        h = d - (d - u);
        p = u - h;
        d = vF * l;
        m = d - (d - l);
        g = l - m;
        A = p * g - (w - h * m - p * m - h * g);
        y = _ - A;
        f = _ - y;
        $F[0] = _ - (y + f) + (f - A);
        v = x + y;
        f = v - x;
        b = x - (v - f) + (y - f);
        y = b - w;
        f = b - y;
        $F[1] = b - (y + f) + (f - w);
        k = v + y;
        f = k - v;
        $F[2] = v - (k - f) + (y - f);
        $F[3] = k;
        const $ = xF(z, BF, 4, $F, zF);
        return zF[$ - 1];
      }
      function OF(t, e, n, i, r, s) {
        const a = (e - s) * (n - r);
        const o = (t - r) * (i - s);
        const u = a - o;
        if (a === 0 || o === 0 || a > 0 !== o > 0) return u;
        const l = Math.abs(a + o);
        if (Math.abs(u) >= MF * l) return u;
        return -RF(t, e, n, i, r, s, l);
      }
      function TF(t, e, n, i, r, s) {
        return (e - s) * (n - r) - (t - r) * (i - s);
      }
      const NF = (7 + 56 * yF) * yF;
      const LF = (3 + 28 * yF) * yF;
      const PF = (26 + 288 * yF) * yF * yF;
      const qF = EF(4);
      const IF = EF(4);
      const UF = EF(4);
      const jF = EF(4);
      const GF = EF(4);
      const YF = EF(4);
      const WF = EF(4);
      const XF = EF(4);
      const HF = EF(4);
      const VF = EF(8);
      const QF = EF(8);
      const KF = EF(8);
      const ZF = EF(4);
      const JF = EF(8);
      const tS = EF(8);
      const eS = EF(8);
      const nS = EF(12);
      let iS = EF(192);
      let rS = EF(192);
      function sS(t, e, n) {
        t = sum(t, iS, e, n, rS);
        const i = iS;
        iS = rS;
        rS = i;
        return t;
      }
      function aS(t, e, n, i, r, s, a, o) {
        let u, l, c, f, d, h, p, m, g, y, v, b, x, _, w, A;
        if (t === 0) {
          if (e === 0) {
            a[0] = 0;
            o[0] = 0;
            return 1;
          } else {
            A = -e;
            v = A * n;
            l = splitter * A;
            c = l - (l - A);
            f = A - c;
            l = splitter * n;
            d = l - (l - n);
            h = n - d;
            a[0] = f * h - (v - c * d - f * d - c * h);
            a[1] = v;
            v = e * r;
            l = splitter * e;
            c = l - (l - e);
            f = e - c;
            l = splitter * r;
            d = l - (l - r);
            h = r - d;
            o[0] = f * h - (v - c * d - f * d - c * h);
            o[1] = v;
            return 2;
          }
        } else {
          if (e === 0) {
            v = t * i;
            l = splitter * t;
            c = l - (l - t);
            f = t - c;
            l = splitter * i;
            d = l - (l - i);
            h = i - d;
            a[0] = f * h - (v - c * d - f * d - c * h);
            a[1] = v;
            A = -t;
            v = A * s;
            l = splitter * A;
            c = l - (l - A);
            f = A - c;
            l = splitter * s;
            d = l - (l - s);
            h = s - d;
            o[0] = f * h - (v - c * d - f * d - c * h);
            o[1] = v;
            return 2;
          } else {
            v = t * i;
            l = splitter * t;
            c = l - (l - t);
            f = t - c;
            l = splitter * i;
            d = l - (l - i);
            h = i - d;
            b = f * h - (v - c * d - f * d - c * h);
            x = e * n;
            l = splitter * e;
            c = l - (l - e);
            f = e - c;
            l = splitter * n;
            d = l - (l - n);
            h = n - d;
            _ = f * h - (x - c * d - f * d - c * h);
            p = b - _;
            u = b - p;
            a[0] = b - (p + u) + (u - _);
            m = v + p;
            u = m - v;
            y = v - (m - u) + (p - u);
            p = y - x;
            u = y - p;
            a[1] = y - (p + u) + (u - x);
            w = m + p;
            u = w - m;
            a[2] = m - (w - u) + (p - u);
            a[3] = w;
            v = e * r;
            l = splitter * e;
            c = l - (l - e);
            f = e - c;
            l = splitter * r;
            d = l - (l - r);
            h = r - d;
            b = f * h - (v - c * d - f * d - c * h);
            x = t * s;
            l = splitter * t;
            c = l - (l - t);
            f = t - c;
            l = splitter * s;
            d = l - (l - s);
            h = s - d;
            _ = f * h - (x - c * d - f * d - c * h);
            p = b - _;
            u = b - p;
            o[0] = b - (p + u) + (u - _);
            m = v + p;
            u = m - v;
            y = v - (m - u) + (p - u);
            p = y - x;
            u = y - p;
            o[1] = y - (p + u) + (u - x);
            w = m + p;
            u = w - m;
            o[2] = m - (w - u) + (p - u);
            o[3] = w;
            return 4;
          }
        }
      }
      function oS(t, e, n, i, r) {
        let s, a, o, u, l, c, f, d, h, p, m, g, y;
        m = e * n;
        a = splitter * e;
        o = a - (a - e);
        u = e - o;
        a = splitter * n;
        l = a - (a - n);
        c = n - l;
        g = u * c - (m - o * l - u * l - o * c);
        a = splitter * i;
        l = a - (a - i);
        c = i - l;
        f = g * i;
        a = splitter * g;
        o = a - (a - g);
        u = g - o;
        ZF[0] = u * c - (f - o * l - u * l - o * c);
        d = m * i;
        a = splitter * m;
        o = a - (a - m);
        u = m - o;
        p = u * c - (d - o * l - u * l - o * c);
        h = f + p;
        s = h - f;
        ZF[1] = f - (h - s) + (p - s);
        y = d + h;
        ZF[2] = h - (y - d);
        ZF[3] = y;
        t = sS(t, 4, ZF);
        if (r !== 0) {
          a = splitter * r;
          l = a - (a - r);
          c = r - l;
          f = g * r;
          a = splitter * g;
          o = a - (a - g);
          u = g - o;
          ZF[0] = u * c - (f - o * l - u * l - o * c);
          d = m * r;
          a = splitter * m;
          o = a - (a - m);
          u = m - o;
          p = u * c - (d - o * l - u * l - o * c);
          h = f + p;
          s = h - f;
          ZF[1] = f - (h - s) + (p - s);
          y = d + h;
          ZF[2] = h - (y - d);
          ZF[3] = y;
          t = sS(t, 4, ZF);
        }
        return t;
      }
      function uS(t, e, n, i, r, s, a, o, u, l, c, f, d) {
        let h;
        let p, m, g;
        let y, v, b;
        let x, _, w;
        let A, k, E, M, D, C, F, S, B, z, $, R, O, T, N;
        const L = t - l;
        const P = i - l;
        const q = a - l;
        const I = e - c;
        const U = r - c;
        const j = o - c;
        const G = n - f;
        const Y = s - f;
        const W = u - f;
        $ = P * j;
        k = splitter * P;
        E = k - (k - P);
        M = P - E;
        k = splitter * j;
        D = k - (k - j);
        C = j - D;
        R = M * C - ($ - E * D - M * D - E * C);
        O = q * U;
        k = splitter * q;
        E = k - (k - q);
        M = q - E;
        k = splitter * U;
        D = k - (k - U);
        C = U - D;
        T = M * C - (O - E * D - M * D - E * C);
        F = R - T;
        A = R - F;
        qF[0] = R - (F + A) + (A - T);
        S = $ + F;
        A = S - $;
        z = $ - (S - A) + (F - A);
        F = z - O;
        A = z - F;
        qF[1] = z - (F + A) + (A - O);
        N = S + F;
        A = N - S;
        qF[2] = S - (N - A) + (F - A);
        qF[3] = N;
        $ = q * I;
        k = splitter * q;
        E = k - (k - q);
        M = q - E;
        k = splitter * I;
        D = k - (k - I);
        C = I - D;
        R = M * C - ($ - E * D - M * D - E * C);
        O = L * j;
        k = splitter * L;
        E = k - (k - L);
        M = L - E;
        k = splitter * j;
        D = k - (k - j);
        C = j - D;
        T = M * C - (O - E * D - M * D - E * C);
        F = R - T;
        A = R - F;
        IF[0] = R - (F + A) + (A - T);
        S = $ + F;
        A = S - $;
        z = $ - (S - A) + (F - A);
        F = z - O;
        A = z - F;
        IF[1] = z - (F + A) + (A - O);
        N = S + F;
        A = N - S;
        IF[2] = S - (N - A) + (F - A);
        IF[3] = N;
        $ = L * U;
        k = splitter * L;
        E = k - (k - L);
        M = L - E;
        k = splitter * U;
        D = k - (k - U);
        C = U - D;
        R = M * C - ($ - E * D - M * D - E * C);
        O = P * I;
        k = splitter * P;
        E = k - (k - P);
        M = P - E;
        k = splitter * I;
        D = k - (k - I);
        C = I - D;
        T = M * C - (O - E * D - M * D - E * C);
        F = R - T;
        A = R - F;
        UF[0] = R - (F + A) + (A - T);
        S = $ + F;
        A = S - $;
        z = $ - (S - A) + (F - A);
        F = z - O;
        A = z - F;
        UF[1] = z - (F + A) + (A - O);
        N = S + F;
        A = N - S;
        UF[2] = S - (N - A) + (F - A);
        UF[3] = N;
        h = sum(sum(scale(4, qF, G, JF), JF, scale(4, IF, Y, tS), tS, eS), eS, scale(4, UF, W, JF), JF, iS);
        let X = estimate(h, iS);
        let H = LF * d;
        if (X >= H || -X >= H) {
          return X;
        }
        A = t - L;
        p = t - (L + A) + (A - l);
        A = i - P;
        m = i - (P + A) + (A - l);
        A = a - q;
        g = a - (q + A) + (A - l);
        A = e - I;
        y = e - (I + A) + (A - c);
        A = r - U;
        v = r - (U + A) + (A - c);
        A = o - j;
        b = o - (j + A) + (A - c);
        A = n - G;
        x = n - (G + A) + (A - f);
        A = s - Y;
        _ = s - (Y + A) + (A - f);
        A = u - W;
        w = u - (W + A) + (A - f);
        if (p === 0 && m === 0 && g === 0 && y === 0 && v === 0 && b === 0 && x === 0 && _ === 0 && w === 0) {
          return X;
        }
        H = PF * d + resulterrbound * Math.abs(X);
        X +=
          G * (P * b + j * m - (U * g + q * v)) +
          x * (P * j - U * q) +
          Y * (q * y + I * g - (j * p + L * b)) +
          _ * (q * I - j * L) +
          W * (L * v + U * p - (I * m + P * y)) +
          w * (L * U - I * P);
        if (X >= H || -X >= H) {
          return X;
        }
        const V = aS(p, y, P, U, q, j, jF, GF);
        const Q = aS(m, v, q, j, L, I, YF, WF);
        const K = aS(g, b, L, I, P, U, XF, HF);
        const Z = sum(Q, YF, K, HF, VF);
        h = sS(h, scale(Z, VF, G, eS), eS);
        const J = sum(K, XF, V, GF, QF);
        h = sS(h, scale(J, QF, Y, eS), eS);
        const tt = sum(V, jF, Q, WF, KF);
        h = sS(h, scale(tt, KF, W, eS), eS);
        if (x !== 0) {
          h = sS(h, scale(4, qF, x, nS), nS);
          h = sS(h, scale(Z, VF, x, eS), eS);
        }
        if (_ !== 0) {
          h = sS(h, scale(4, IF, _, nS), nS);
          h = sS(h, scale(J, QF, _, eS), eS);
        }
        if (w !== 0) {
          h = sS(h, scale(4, UF, w, nS), nS);
          h = sS(h, scale(tt, KF, w, eS), eS);
        }
        if (p !== 0) {
          if (v !== 0) {
            h = oS(h, p, v, W, w);
          }
          if (b !== 0) {
            h = oS(h, -p, b, Y, _);
          }
        }
        if (m !== 0) {
          if (b !== 0) {
            h = oS(h, m, b, G, x);
          }
          if (y !== 0) {
            h = oS(h, -m, y, W, w);
          }
        }
        if (g !== 0) {
          if (y !== 0) {
            h = oS(h, g, y, Y, _);
          }
          if (v !== 0) {
            h = oS(h, -g, v, G, x);
          }
        }
        return iS[h - 1];
      }
      function lS(t, e, n, i, r, s, a, o, u, l, c, f) {
        const d = t - l;
        const h = i - l;
        const p = a - l;
        const m = e - c;
        const g = r - c;
        const y = o - c;
        const v = n - f;
        const b = s - f;
        const x = u - f;
        const _ = h * y;
        const w = p * g;
        const A = p * m;
        const k = d * y;
        const E = d * g;
        const M = h * m;
        const D = v * (_ - w) + b * (A - k) + x * (E - M);
        const C = (Math.abs(_) + Math.abs(w)) * Math.abs(v) + (Math.abs(A) + Math.abs(k)) * Math.abs(b) + (Math.abs(E) + Math.abs(M)) * Math.abs(x);
        const F = NF * C;
        if (D > F || -D > F) {
          return D;
        }
        return uS(t, e, n, i, r, s, a, o, u, l, c, f, C);
      }
      function cS(t, e, n, i, r, s, a, o, u, l, c, f) {
        const d = t - l;
        const h = i - l;
        const p = a - l;
        const m = e - c;
        const g = r - c;
        const y = o - c;
        const v = n - f;
        const b = s - f;
        const x = u - f;
        return d * (g * x - b * y) + h * (y * v - x * m) + p * (m * b - v * g);
      }
      const fS = (10 + 96 * yF) * yF;
      const dS = (4 + 48 * yF) * yF;
      const hS = (44 + 576 * yF) * yF * yF;
      const pS = EF(4);
      const mS = EF(4);
      const gS = EF(4);
      const yS = EF(4);
      const vS = EF(4);
      const bS = EF(4);
      const xS = EF(4);
      const _S = EF(4);
      const wS = EF(8);
      const AS = EF(8);
      const kS = EF(8);
      const ES = EF(8);
      const MS = EF(8);
      const DS = EF(8);
      const CS = EF(8);
      const FS = EF(8);
      const SS = EF(8);
      const BS = EF(4);
      const zS = EF(4);
      const $S = EF(4);
      const RS = EF(8);
      const OS = EF(16);
      const TS = EF(16);
      const NS = EF(16);
      const LS = EF(32);
      const PS = EF(32);
      const qS = EF(48);
      const IS = EF(64);
      let US = EF(1152);
      let jS = EF(1152);
      function GS(t, e, n) {
        t = sum(t, US, e, n, jS);
        const i = US;
        US = jS;
        jS = i;
        return t;
      }
      function YS(t, e, n, i, r, s, a, o, u) {
        let l;
        let c, f, d, h, p, m;
        let g, y, v, b, x, _;
        let w, A, k;
        let E, M, D;
        let C, F;
        let S, B, z, $, R, O, T, N, L, P, q, I, U, j;
        const G = t - a;
        const Y = n - a;
        const W = r - a;
        const X = e - o;
        const H = i - o;
        const V = s - o;
        P = Y * V;
        B = splitter * Y;
        z = B - (B - Y);
        $ = Y - z;
        B = splitter * V;
        R = B - (B - V);
        O = V - R;
        q = $ * O - (P - z * R - $ * R - z * O);
        I = W * H;
        B = splitter * W;
        z = B - (B - W);
        $ = W - z;
        B = splitter * H;
        R = B - (B - H);
        O = H - R;
        U = $ * O - (I - z * R - $ * R - z * O);
        T = q - U;
        S = q - T;
        pS[0] = q - (T + S) + (S - U);
        N = P + T;
        S = N - P;
        L = P - (N - S) + (T - S);
        T = L - I;
        S = L - T;
        pS[1] = L - (T + S) + (S - I);
        j = N + T;
        S = j - N;
        pS[2] = N - (j - S) + (T - S);
        pS[3] = j;
        P = W * X;
        B = splitter * W;
        z = B - (B - W);
        $ = W - z;
        B = splitter * X;
        R = B - (B - X);
        O = X - R;
        q = $ * O - (P - z * R - $ * R - z * O);
        I = G * V;
        B = splitter * G;
        z = B - (B - G);
        $ = G - z;
        B = splitter * V;
        R = B - (B - V);
        O = V - R;
        U = $ * O - (I - z * R - $ * R - z * O);
        T = q - U;
        S = q - T;
        mS[0] = q - (T + S) + (S - U);
        N = P + T;
        S = N - P;
        L = P - (N - S) + (T - S);
        T = L - I;
        S = L - T;
        mS[1] = L - (T + S) + (S - I);
        j = N + T;
        S = j - N;
        mS[2] = N - (j - S) + (T - S);
        mS[3] = j;
        P = G * H;
        B = splitter * G;
        z = B - (B - G);
        $ = G - z;
        B = splitter * H;
        R = B - (B - H);
        O = H - R;
        q = $ * O - (P - z * R - $ * R - z * O);
        I = Y * X;
        B = splitter * Y;
        z = B - (B - Y);
        $ = Y - z;
        B = splitter * X;
        R = B - (B - X);
        O = X - R;
        U = $ * O - (I - z * R - $ * R - z * O);
        T = q - U;
        S = q - T;
        gS[0] = q - (T + S) + (S - U);
        N = P + T;
        S = N - P;
        L = P - (N - S) + (T - S);
        T = L - I;
        S = L - T;
        gS[1] = L - (T + S) + (S - I);
        j = N + T;
        S = j - N;
        gS[2] = N - (j - S) + (T - S);
        gS[3] = j;
        l = sum(
          sum(
            sum(scale(scale(4, pS, G, RS), RS, G, OS), OS, scale(scale(4, pS, X, RS), RS, X, TS), TS, LS),
            LS,
            sum(scale(scale(4, mS, Y, RS), RS, Y, OS), OS, scale(scale(4, mS, H, RS), RS, H, TS), TS, PS),
            PS,
            IS
          ),
          IS,
          sum(scale(scale(4, gS, W, RS), RS, W, OS), OS, scale(scale(4, gS, V, RS), RS, V, TS), TS, LS),
          LS,
          US
        );
        let Q = estimate(l, US);
        let K = dS * u;
        if (Q >= K || -Q >= K) {
          return Q;
        }
        S = t - G;
        c = t - (G + S) + (S - a);
        S = e - X;
        h = e - (X + S) + (S - o);
        S = n - Y;
        f = n - (Y + S) + (S - a);
        S = i - H;
        p = i - (H + S) + (S - o);
        S = r - W;
        d = r - (W + S) + (S - a);
        S = s - V;
        m = s - (V + S) + (S - o);
        if (c === 0 && f === 0 && d === 0 && h === 0 && p === 0 && m === 0) {
          return Q;
        }
        K = hS * u + resulterrbound * Math.abs(Q);
        Q +=
          (G * G + X * X) * (Y * m + V * f - (H * d + W * p)) +
          2 * (G * c + X * h) * (Y * V - H * W) +
          ((Y * Y + H * H) * (W * h + X * d - (V * c + G * m)) + 2 * (Y * f + H * p) * (W * X - V * G)) +
          ((W * W + V * V) * (G * p + H * c - (X * f + Y * h)) + 2 * (W * d + V * m) * (G * H - X * Y));
        if (Q >= K || -Q >= K) {
          return Q;
        }
        if (f !== 0 || p !== 0 || d !== 0 || m !== 0) {
          P = G * G;
          B = splitter * G;
          z = B - (B - G);
          $ = G - z;
          q = $ * $ - (P - z * z - (z + z) * $);
          I = X * X;
          B = splitter * X;
          z = B - (B - X);
          $ = X - z;
          U = $ * $ - (I - z * z - (z + z) * $);
          T = q + U;
          S = T - q;
          yS[0] = q - (T - S) + (U - S);
          N = P + T;
          S = N - P;
          L = P - (N - S) + (T - S);
          T = L + I;
          S = T - L;
          yS[1] = L - (T - S) + (I - S);
          j = N + T;
          S = j - N;
          yS[2] = N - (j - S) + (T - S);
          yS[3] = j;
        }
        if (d !== 0 || m !== 0 || c !== 0 || h !== 0) {
          P = Y * Y;
          B = splitter * Y;
          z = B - (B - Y);
          $ = Y - z;
          q = $ * $ - (P - z * z - (z + z) * $);
          I = H * H;
          B = splitter * H;
          z = B - (B - H);
          $ = H - z;
          U = $ * $ - (I - z * z - (z + z) * $);
          T = q + U;
          S = T - q;
          vS[0] = q - (T - S) + (U - S);
          N = P + T;
          S = N - P;
          L = P - (N - S) + (T - S);
          T = L + I;
          S = T - L;
          vS[1] = L - (T - S) + (I - S);
          j = N + T;
          S = j - N;
          vS[2] = N - (j - S) + (T - S);
          vS[3] = j;
        }
        if (c !== 0 || h !== 0 || f !== 0 || p !== 0) {
          P = W * W;
          B = splitter * W;
          z = B - (B - W);
          $ = W - z;
          q = $ * $ - (P - z * z - (z + z) * $);
          I = V * V;
          B = splitter * V;
          z = B - (B - V);
          $ = V - z;
          U = $ * $ - (I - z * z - (z + z) * $);
          T = q + U;
          S = T - q;
          bS[0] = q - (T - S) + (U - S);
          N = P + T;
          S = N - P;
          L = P - (N - S) + (T - S);
          T = L + I;
          S = T - L;
          bS[1] = L - (T - S) + (I - S);
          j = N + T;
          S = j - N;
          bS[2] = N - (j - S) + (T - S);
          bS[3] = j;
        }
        if (c !== 0) {
          g = scale(4, pS, c, wS);
          l = GS(
            l,
            sum_three(scale(g, wS, 2 * G, OS), OS, scale(scale(4, bS, c, RS), RS, H, TS), TS, scale(scale(4, vS, c, RS), RS, -V, NS), NS, LS, qS),
            qS
          );
        }
        if (h !== 0) {
          y = scale(4, pS, h, AS);
          l = GS(
            l,
            sum_three(scale(y, AS, 2 * X, OS), OS, scale(scale(4, vS, h, RS), RS, W, TS), TS, scale(scale(4, bS, h, RS), RS, -Y, NS), NS, LS, qS),
            qS
          );
        }
        if (f !== 0) {
          v = scale(4, mS, f, kS);
          l = GS(
            l,
            sum_three(scale(v, kS, 2 * Y, OS), OS, scale(scale(4, yS, f, RS), RS, V, TS), TS, scale(scale(4, bS, f, RS), RS, -X, NS), NS, LS, qS),
            qS
          );
        }
        if (p !== 0) {
          b = scale(4, mS, p, ES);
          l = GS(
            l,
            sum_three(scale(b, ES, 2 * H, OS), OS, scale(scale(4, bS, p, RS), RS, G, TS), TS, scale(scale(4, yS, p, RS), RS, -W, NS), NS, LS, qS),
            qS
          );
        }
        if (d !== 0) {
          x = scale(4, gS, d, MS);
          l = GS(
            l,
            sum_three(scale(x, MS, 2 * W, OS), OS, scale(scale(4, vS, d, RS), RS, X, TS), TS, scale(scale(4, yS, d, RS), RS, -H, NS), NS, LS, qS),
            qS
          );
        }
        if (m !== 0) {
          _ = scale(4, gS, m, DS);
          l = GS(
            l,
            sum_three(scale(_, DS, 2 * V, OS), OS, scale(scale(4, yS, m, RS), RS, Y, TS), TS, scale(scale(4, vS, m, RS), RS, -G, NS), NS, LS, qS),
            qS
          );
        }
        if (c !== 0 || h !== 0) {
          if (f !== 0 || p !== 0 || d !== 0 || m !== 0) {
            P = f * V;
            B = splitter * f;
            z = B - (B - f);
            $ = f - z;
            B = splitter * V;
            R = B - (B - V);
            O = V - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = Y * m;
            B = splitter * Y;
            z = B - (B - Y);
            $ = Y - z;
            B = splitter * m;
            R = B - (B - m);
            O = m - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q + U;
            S = T - q;
            xS[0] = q - (T - S) + (U - S);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L + I;
            S = T - L;
            xS[1] = L - (T - S) + (I - S);
            j = N + T;
            S = j - N;
            xS[2] = N - (j - S) + (T - S);
            xS[3] = j;
            P = d * -H;
            B = splitter * d;
            z = B - (B - d);
            $ = d - z;
            B = splitter * -H;
            R = B - (B - -H);
            O = -H - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = W * -p;
            B = splitter * W;
            z = B - (B - W);
            $ = W - z;
            B = splitter * -p;
            R = B - (B - -p);
            O = -p - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q + U;
            S = T - q;
            _S[0] = q - (T - S) + (U - S);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L + I;
            S = T - L;
            _S[1] = L - (T - S) + (I - S);
            j = N + T;
            S = j - N;
            _S[2] = N - (j - S) + (T - S);
            _S[3] = j;
            A = sum(4, xS, 4, _S, FS);
            P = f * m;
            B = splitter * f;
            z = B - (B - f);
            $ = f - z;
            B = splitter * m;
            R = B - (B - m);
            O = m - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = d * p;
            B = splitter * d;
            z = B - (B - d);
            $ = d - z;
            B = splitter * p;
            R = B - (B - p);
            O = p - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q - U;
            S = q - T;
            zS[0] = q - (T + S) + (S - U);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L - I;
            S = L - T;
            zS[1] = L - (T + S) + (S - I);
            j = N + T;
            S = j - N;
            zS[2] = N - (j - S) + (T - S);
            zS[3] = j;
            M = 4;
          } else {
            FS[0] = 0;
            A = 1;
            zS[0] = 0;
            M = 1;
          }
          if (c !== 0) {
            const t = scale(A, FS, c, NS);
            l = GS(l, sum(scale(g, wS, c, OS), OS, scale(t, NS, 2 * G, LS), LS, qS), qS);
            const e = scale(M, zS, c, RS);
            l = GS(l, sum_three(scale(e, RS, 2 * G, OS), OS, scale(e, RS, c, TS), TS, scale(t, NS, c, LS), LS, PS, IS), IS);
            if (p !== 0) {
              l = GS(l, scale(scale(4, bS, c, RS), RS, p, OS), OS);
            }
            if (m !== 0) {
              l = GS(l, scale(scale(4, vS, -c, RS), RS, m, OS), OS);
            }
          }
          if (h !== 0) {
            const t = scale(A, FS, h, NS);
            l = GS(l, sum(scale(y, AS, h, OS), OS, scale(t, NS, 2 * X, LS), LS, qS), qS);
            const e = scale(M, zS, h, RS);
            l = GS(l, sum_three(scale(e, RS, 2 * X, OS), OS, scale(e, RS, h, TS), TS, scale(t, NS, h, LS), LS, PS, IS), IS);
          }
        }
        if (f !== 0 || p !== 0) {
          if (d !== 0 || m !== 0 || c !== 0 || h !== 0) {
            P = d * X;
            B = splitter * d;
            z = B - (B - d);
            $ = d - z;
            B = splitter * X;
            R = B - (B - X);
            O = X - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = W * h;
            B = splitter * W;
            z = B - (B - W);
            $ = W - z;
            B = splitter * h;
            R = B - (B - h);
            O = h - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q + U;
            S = T - q;
            xS[0] = q - (T - S) + (U - S);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L + I;
            S = T - L;
            xS[1] = L - (T - S) + (I - S);
            j = N + T;
            S = j - N;
            xS[2] = N - (j - S) + (T - S);
            xS[3] = j;
            C = -V;
            F = -m;
            P = c * C;
            B = splitter * c;
            z = B - (B - c);
            $ = c - z;
            B = splitter * C;
            R = B - (B - C);
            O = C - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = G * F;
            B = splitter * G;
            z = B - (B - G);
            $ = G - z;
            B = splitter * F;
            R = B - (B - F);
            O = F - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q + U;
            S = T - q;
            _S[0] = q - (T - S) + (U - S);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L + I;
            S = T - L;
            _S[1] = L - (T - S) + (I - S);
            j = N + T;
            S = j - N;
            _S[2] = N - (j - S) + (T - S);
            _S[3] = j;
            k = sum(4, xS, 4, _S, SS);
            P = d * h;
            B = splitter * d;
            z = B - (B - d);
            $ = d - z;
            B = splitter * h;
            R = B - (B - h);
            O = h - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = c * m;
            B = splitter * c;
            z = B - (B - c);
            $ = c - z;
            B = splitter * m;
            R = B - (B - m);
            O = m - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q - U;
            S = q - T;
            $S[0] = q - (T + S) + (S - U);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L - I;
            S = L - T;
            $S[1] = L - (T + S) + (S - I);
            j = N + T;
            S = j - N;
            $S[2] = N - (j - S) + (T - S);
            $S[3] = j;
            D = 4;
          } else {
            SS[0] = 0;
            k = 1;
            $S[0] = 0;
            D = 1;
          }
          if (f !== 0) {
            const t = scale(k, SS, f, NS);
            l = GS(l, sum(scale(v, kS, f, OS), OS, scale(t, NS, 2 * Y, LS), LS, qS), qS);
            const e = scale(D, $S, f, RS);
            l = GS(l, sum_three(scale(e, RS, 2 * Y, OS), OS, scale(e, RS, f, TS), TS, scale(t, NS, f, LS), LS, PS, IS), IS);
            if (m !== 0) {
              l = GS(l, scale(scale(4, yS, f, RS), RS, m, OS), OS);
            }
            if (h !== 0) {
              l = GS(l, scale(scale(4, bS, -f, RS), RS, h, OS), OS);
            }
          }
          if (p !== 0) {
            const t = scale(k, SS, p, NS);
            l = GS(l, sum(scale(b, ES, p, OS), OS, scale(t, NS, 2 * H, LS), LS, qS), qS);
            const e = scale(D, $S, p, RS);
            l = GS(l, sum_three(scale(e, RS, 2 * H, OS), OS, scale(e, RS, p, TS), TS, scale(t, NS, p, LS), LS, PS, IS), IS);
          }
        }
        if (d !== 0 || m !== 0) {
          if (c !== 0 || h !== 0 || f !== 0 || p !== 0) {
            P = c * H;
            B = splitter * c;
            z = B - (B - c);
            $ = c - z;
            B = splitter * H;
            R = B - (B - H);
            O = H - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = G * p;
            B = splitter * G;
            z = B - (B - G);
            $ = G - z;
            B = splitter * p;
            R = B - (B - p);
            O = p - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q + U;
            S = T - q;
            xS[0] = q - (T - S) + (U - S);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L + I;
            S = T - L;
            xS[1] = L - (T - S) + (I - S);
            j = N + T;
            S = j - N;
            xS[2] = N - (j - S) + (T - S);
            xS[3] = j;
            C = -X;
            F = -h;
            P = f * C;
            B = splitter * f;
            z = B - (B - f);
            $ = f - z;
            B = splitter * C;
            R = B - (B - C);
            O = C - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = Y * F;
            B = splitter * Y;
            z = B - (B - Y);
            $ = Y - z;
            B = splitter * F;
            R = B - (B - F);
            O = F - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q + U;
            S = T - q;
            _S[0] = q - (T - S) + (U - S);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L + I;
            S = T - L;
            _S[1] = L - (T - S) + (I - S);
            j = N + T;
            S = j - N;
            _S[2] = N - (j - S) + (T - S);
            _S[3] = j;
            w = sum(4, xS, 4, _S, CS);
            P = c * p;
            B = splitter * c;
            z = B - (B - c);
            $ = c - z;
            B = splitter * p;
            R = B - (B - p);
            O = p - R;
            q = $ * O - (P - z * R - $ * R - z * O);
            I = f * h;
            B = splitter * f;
            z = B - (B - f);
            $ = f - z;
            B = splitter * h;
            R = B - (B - h);
            O = h - R;
            U = $ * O - (I - z * R - $ * R - z * O);
            T = q - U;
            S = q - T;
            BS[0] = q - (T + S) + (S - U);
            N = P + T;
            S = N - P;
            L = P - (N - S) + (T - S);
            T = L - I;
            S = L - T;
            BS[1] = L - (T + S) + (S - I);
            j = N + T;
            S = j - N;
            BS[2] = N - (j - S) + (T - S);
            BS[3] = j;
            E = 4;
          } else {
            CS[0] = 0;
            w = 1;
            BS[0] = 0;
            E = 1;
          }
          if (d !== 0) {
            const t = scale(w, CS, d, NS);
            l = GS(l, sum(scale(x, MS, d, OS), OS, scale(t, NS, 2 * W, LS), LS, qS), qS);
            const e = scale(E, BS, d, RS);
            l = GS(l, sum_three(scale(e, RS, 2 * W, OS), OS, scale(e, RS, d, TS), TS, scale(t, NS, d, LS), LS, PS, IS), IS);
            if (h !== 0) {
              l = GS(l, scale(scale(4, vS, d, RS), RS, h, OS), OS);
            }
            if (p !== 0) {
              l = GS(l, scale(scale(4, yS, -d, RS), RS, p, OS), OS);
            }
          }
          if (m !== 0) {
            const t = scale(w, CS, m, NS);
            l = GS(l, sum(scale(_, DS, m, OS), OS, scale(t, NS, 2 * V, LS), LS, qS), qS);
            const e = scale(E, BS, m, RS);
            l = GS(l, sum_three(scale(e, RS, 2 * V, OS), OS, scale(e, RS, m, TS), TS, scale(t, NS, m, LS), LS, PS, IS), IS);
          }
        }
        return US[l - 1];
      }
      function WS(t, e, n, i, r, s, a, o) {
        const u = t - a;
        const l = n - a;
        const c = r - a;
        const f = e - o;
        const d = i - o;
        const h = s - o;
        const p = l * h;
        const m = c * d;
        const g = u * u + f * f;
        const y = c * f;
        const v = u * h;
        const b = l * l + d * d;
        const x = u * d;
        const _ = l * f;
        const w = c * c + h * h;
        const A = g * (p - m) + b * (y - v) + w * (x - _);
        const k = (Math.abs(p) + Math.abs(m)) * g + (Math.abs(y) + Math.abs(v)) * b + (Math.abs(x) + Math.abs(_)) * w;
        const E = fS * k;
        if (A > E || -A > E) {
          return A;
        }
        return YS(t, e, n, i, r, s, a, o, k);
      }
      function XS(t, e, n, i, r, s, a, o) {
        const u = t - a;
        const l = e - o;
        const c = n - a;
        const f = i - o;
        const d = r - a;
        const h = s - o;
        const p = u * f - c * l;
        const m = c * h - d * f;
        const g = d * l - u * h;
        const y = u * u + l * l;
        const v = c * c + f * f;
        const b = d * d + h * h;
        return y * m + v * g + b * p;
      }
      const HS = (16 + 224 * yF) * yF;
      const VS = (5 + 72 * yF) * yF;
      const QS = (71 + 1408 * yF) * yF * yF;
      const KS = EF(4);
      const ZS = EF(4);
      const JS = EF(4);
      const tB = EF(4);
      const eB = EF(4);
      const nB = EF(4);
      const iB = EF(4);
      const rB = EF(4);
      const sB = EF(4);
      const aB = EF(4);
      const oB = EF(24);
      const uB = EF(24);
      const lB = EF(24);
      const cB = EF(24);
      const fB = EF(24);
      const dB = EF(24);
      const hB = EF(24);
      const pB = EF(24);
      const mB = EF(24);
      const gB = EF(24);
      const yB = EF(1152);
      const vB = EF(1152);
      const bB = EF(1152);
      const xB = EF(1152);
      const _B = EF(1152);
      const wB = EF(2304);
      const AB = EF(2304);
      const kB = EF(3456);
      const EB = EF(5760);
      const MB = EF(8);
      const DB = EF(8);
      const CB = EF(8);
      const FB = EF(16);
      const SB = EF(24);
      const BB = EF(48);
      const zB = EF(48);
      const $B = EF(96);
      const RB = EF(192);
      const OB = EF(384);
      const TB = EF(384);
      const NB = EF(384);
      const LB = EF(768);
      function PB(t, e, n, i, r, s, a) {
        return sum_three(scale(4, t, i, MB), MB, scale(4, e, r, DB), DB, scale(4, n, s, CB), CB, FB, a);
      }
      function qB(t, e, n, i, r, s, a, o, u, l, c, f) {
        const d = sum(sum(t, e, n, i, BB), BB, negate(sum(r, s, a, o, zB), zB), zB, $B);
        return sum_three(
          scale(scale(d, $B, u, RB), RB, u, OB),
          OB,
          scale(scale(d, $B, l, RB), RB, l, TB),
          TB,
          scale(scale(d, $B, c, RB), RB, c, NB),
          NB,
          LB,
          f
        );
      }
      function IB(t, e, n, i, r, s, a, o, u, l, c, f, d, h, p) {
        let m, g, y, v, b, x, _, w, A, k, E, M, D, C;
        k = t * r;
        g = splitter * t;
        y = g - (g - t);
        v = t - y;
        g = splitter * r;
        b = g - (g - r);
        x = r - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = i * e;
        g = splitter * i;
        y = g - (g - i);
        v = i - y;
        g = splitter * e;
        b = g - (g - e);
        x = e - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        KS[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        KS[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        KS[2] = w - (C - m) + (_ - m);
        KS[3] = C;
        k = i * o;
        g = splitter * i;
        y = g - (g - i);
        v = i - y;
        g = splitter * o;
        b = g - (g - o);
        x = o - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = a * r;
        g = splitter * a;
        y = g - (g - a);
        v = a - y;
        g = splitter * r;
        b = g - (g - r);
        x = r - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        ZS[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        ZS[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        ZS[2] = w - (C - m) + (_ - m);
        ZS[3] = C;
        k = a * c;
        g = splitter * a;
        y = g - (g - a);
        v = a - y;
        g = splitter * c;
        b = g - (g - c);
        x = c - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = l * o;
        g = splitter * l;
        y = g - (g - l);
        v = l - y;
        g = splitter * o;
        b = g - (g - o);
        x = o - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        JS[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        JS[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        JS[2] = w - (C - m) + (_ - m);
        JS[3] = C;
        k = l * h;
        g = splitter * l;
        y = g - (g - l);
        v = l - y;
        g = splitter * h;
        b = g - (g - h);
        x = h - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = d * c;
        g = splitter * d;
        y = g - (g - d);
        v = d - y;
        g = splitter * c;
        b = g - (g - c);
        x = c - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        tB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        tB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        tB[2] = w - (C - m) + (_ - m);
        tB[3] = C;
        k = d * e;
        g = splitter * d;
        y = g - (g - d);
        v = d - y;
        g = splitter * e;
        b = g - (g - e);
        x = e - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = t * h;
        g = splitter * t;
        y = g - (g - t);
        v = t - y;
        g = splitter * h;
        b = g - (g - h);
        x = h - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        eB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        eB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        eB[2] = w - (C - m) + (_ - m);
        eB[3] = C;
        k = t * o;
        g = splitter * t;
        y = g - (g - t);
        v = t - y;
        g = splitter * o;
        b = g - (g - o);
        x = o - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = a * e;
        g = splitter * a;
        y = g - (g - a);
        v = a - y;
        g = splitter * e;
        b = g - (g - e);
        x = e - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        nB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        nB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        nB[2] = w - (C - m) + (_ - m);
        nB[3] = C;
        k = i * c;
        g = splitter * i;
        y = g - (g - i);
        v = i - y;
        g = splitter * c;
        b = g - (g - c);
        x = c - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = l * r;
        g = splitter * l;
        y = g - (g - l);
        v = l - y;
        g = splitter * r;
        b = g - (g - r);
        x = r - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        iB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        iB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        iB[2] = w - (C - m) + (_ - m);
        iB[3] = C;
        k = a * h;
        g = splitter * a;
        y = g - (g - a);
        v = a - y;
        g = splitter * h;
        b = g - (g - h);
        x = h - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = d * o;
        g = splitter * d;
        y = g - (g - d);
        v = d - y;
        g = splitter * o;
        b = g - (g - o);
        x = o - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        rB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        rB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        rB[2] = w - (C - m) + (_ - m);
        rB[3] = C;
        k = l * e;
        g = splitter * l;
        y = g - (g - l);
        v = l - y;
        g = splitter * e;
        b = g - (g - e);
        x = e - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = t * c;
        g = splitter * t;
        y = g - (g - t);
        v = t - y;
        g = splitter * c;
        b = g - (g - c);
        x = c - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        sB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        sB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        sB[2] = w - (C - m) + (_ - m);
        sB[3] = C;
        k = d * r;
        g = splitter * d;
        y = g - (g - d);
        v = d - y;
        g = splitter * r;
        b = g - (g - r);
        x = r - b;
        E = v * x - (k - y * b - v * b - y * x);
        M = i * h;
        g = splitter * i;
        y = g - (g - i);
        v = i - y;
        g = splitter * h;
        b = g - (g - h);
        x = h - b;
        D = v * x - (M - y * b - v * b - y * x);
        _ = E - D;
        m = E - _;
        aB[0] = E - (_ + m) + (m - D);
        w = k + _;
        m = w - k;
        A = k - (w - m) + (_ - m);
        _ = A - M;
        m = A - _;
        aB[1] = A - (_ + m) + (m - M);
        C = w + _;
        m = C - w;
        aB[2] = w - (C - m) + (_ - m);
        aB[3] = C;
        const F = PB(KS, ZS, nB, u, n, -s, oB);
        const S = PB(ZS, JS, iB, f, s, -u, uB);
        const B = PB(JS, tB, rB, p, u, -f, lB);
        const z = PB(tB, eB, sB, n, f, -p, cB);
        const $ = PB(eB, KS, aB, s, p, -n, fB);
        const R = PB(KS, iB, sB, f, n, s, dB);
        const O = PB(ZS, rB, aB, p, s, u, hB);
        const T = PB(JS, sB, nB, n, u, f, pB);
        const N = PB(tB, aB, iB, s, f, p, mB);
        const L = PB(eB, nB, rB, u, p, n, gB);
        const P = sum_three(
          qB(B, lB, O, hB, N, mB, S, uB, t, e, n, yB),
          yB,
          qB(z, cB, T, pB, L, gB, B, lB, i, r, s, vB),
          vB,
          sum_three(
            qB($, fB, N, mB, R, dB, z, cB, a, o, u, bB),
            bB,
            qB(F, oB, L, gB, O, hB, $, fB, l, c, f, xB),
            xB,
            qB(S, uB, R, dB, T, pB, F, oB, d, h, p, _B),
            _B,
            AB,
            kB
          ),
          kB,
          wB,
          EB
        );
        return EB[P - 1];
      }
      const UB = EF(96);
      const jB = EF(96);
      const GB = EF(96);
      const YB = EF(1152);
      function WB(t, e, n, i, r, s, a, o, u, l) {
        const c = PB(t, e, n, i, r, s, SB);
        return sum_three(
          scale(scale(c, SB, a, BB), BB, a, UB),
          UB,
          scale(scale(c, SB, o, BB), BB, o, jB),
          jB,
          scale(scale(c, SB, u, BB), BB, u, GB),
          GB,
          RB,
          l
        );
      }
      function XB(t, e, n, i, r, s, a, o, u, l, c, f, d, h, p, m) {
        let g, y, v, b, x, _;
        let w, A, k, E;
        let M, D, C, F;
        let S, B, z, $;
        let R, O, T, N, L, P, q, I, U, j, G, Y, W;
        const X = t - d;
        const H = i - d;
        const V = a - d;
        const Q = l - d;
        const K = e - h;
        const Z = r - h;
        const J = o - h;
        const tt = c - h;
        const et = n - p;
        const nt = s - p;
        const it = u - p;
        const rt = f - p;
        j = X * Z;
        O = splitter * X;
        T = O - (O - X);
        N = X - T;
        O = splitter * Z;
        L = O - (O - Z);
        P = Z - L;
        G = N * P - (j - T * L - N * L - T * P);
        Y = H * K;
        O = splitter * H;
        T = O - (O - H);
        N = H - T;
        O = splitter * K;
        L = O - (O - K);
        P = K - L;
        W = N * P - (Y - T * L - N * L - T * P);
        q = G - W;
        R = G - q;
        KS[0] = G - (q + R) + (R - W);
        I = j + q;
        R = I - j;
        U = j - (I - R) + (q - R);
        q = U - Y;
        R = U - q;
        KS[1] = U - (q + R) + (R - Y);
        g = I + q;
        R = g - I;
        KS[2] = I - (g - R) + (q - R);
        KS[3] = g;
        j = H * J;
        O = splitter * H;
        T = O - (O - H);
        N = H - T;
        O = splitter * J;
        L = O - (O - J);
        P = J - L;
        G = N * P - (j - T * L - N * L - T * P);
        Y = V * Z;
        O = splitter * V;
        T = O - (O - V);
        N = V - T;
        O = splitter * Z;
        L = O - (O - Z);
        P = Z - L;
        W = N * P - (Y - T * L - N * L - T * P);
        q = G - W;
        R = G - q;
        ZS[0] = G - (q + R) + (R - W);
        I = j + q;
        R = I - j;
        U = j - (I - R) + (q - R);
        q = U - Y;
        R = U - q;
        ZS[1] = U - (q + R) + (R - Y);
        y = I + q;
        R = y - I;
        ZS[2] = I - (y - R) + (q - R);
        ZS[3] = y;
        j = V * tt;
        O = splitter * V;
        T = O - (O - V);
        N = V - T;
        O = splitter * tt;
        L = O - (O - tt);
        P = tt - L;
        G = N * P - (j - T * L - N * L - T * P);
        Y = Q * J;
        O = splitter * Q;
        T = O - (O - Q);
        N = Q - T;
        O = splitter * J;
        L = O - (O - J);
        P = J - L;
        W = N * P - (Y - T * L - N * L - T * P);
        q = G - W;
        R = G - q;
        JS[0] = G - (q + R) + (R - W);
        I = j + q;
        R = I - j;
        U = j - (I - R) + (q - R);
        q = U - Y;
        R = U - q;
        JS[1] = U - (q + R) + (R - Y);
        v = I + q;
        R = v - I;
        JS[2] = I - (v - R) + (q - R);
        JS[3] = v;
        j = Q * K;
        O = splitter * Q;
        T = O - (O - Q);
        N = Q - T;
        O = splitter * K;
        L = O - (O - K);
        P = K - L;
        G = N * P - (j - T * L - N * L - T * P);
        Y = X * tt;
        O = splitter * X;
        T = O - (O - X);
        N = X - T;
        O = splitter * tt;
        L = O - (O - tt);
        P = tt - L;
        W = N * P - (Y - T * L - N * L - T * P);
        q = G - W;
        R = G - q;
        sB[0] = G - (q + R) + (R - W);
        I = j + q;
        R = I - j;
        U = j - (I - R) + (q - R);
        q = U - Y;
        R = U - q;
        sB[1] = U - (q + R) + (R - Y);
        b = I + q;
        R = b - I;
        sB[2] = I - (b - R) + (q - R);
        sB[3] = b;
        j = X * J;
        O = splitter * X;
        T = O - (O - X);
        N = X - T;
        O = splitter * J;
        L = O - (O - J);
        P = J - L;
        G = N * P - (j - T * L - N * L - T * P);
        Y = V * K;
        O = splitter * V;
        T = O - (O - V);
        N = V - T;
        O = splitter * K;
        L = O - (O - K);
        P = K - L;
        W = N * P - (Y - T * L - N * L - T * P);
        q = G - W;
        R = G - q;
        nB[0] = G - (q + R) + (R - W);
        I = j + q;
        R = I - j;
        U = j - (I - R) + (q - R);
        q = U - Y;
        R = U - q;
        nB[1] = U - (q + R) + (R - Y);
        x = I + q;
        R = x - I;
        nB[2] = I - (x - R) + (q - R);
        nB[3] = x;
        j = H * tt;
        O = splitter * H;
        T = O - (O - H);
        N = H - T;
        O = splitter * tt;
        L = O - (O - tt);
        P = tt - L;
        G = N * P - (j - T * L - N * L - T * P);
        Y = Q * Z;
        O = splitter * Q;
        T = O - (O - Q);
        N = Q - T;
        O = splitter * Z;
        L = O - (O - Z);
        P = Z - L;
        W = N * P - (Y - T * L - N * L - T * P);
        q = G - W;
        R = G - q;
        iB[0] = G - (q + R) + (R - W);
        I = j + q;
        R = I - j;
        U = j - (I - R) + (q - R);
        q = U - Y;
        R = U - q;
        iB[1] = U - (q + R) + (R - Y);
        _ = I + q;
        R = _ - I;
        iB[2] = I - (_ - R) + (q - R);
        iB[3] = _;
        const st = sum(
          sum(negate(WB(ZS, JS, iB, rt, nt, -it, X, K, et, yB), yB), yB, WB(JS, sB, nB, et, it, rt, H, Z, nt, vB), vB, wB),
          wB,
          sum(negate(WB(sB, KS, iB, nt, rt, et, V, J, it, bB), bB), bB, WB(KS, ZS, nB, it, et, -nt, Q, tt, rt, xB), xB, AB),
          AB,
          YB
        );
        let at = estimate(st, YB);
        let ot = VS * m;
        if (at >= ot || -at >= ot) {
          return at;
        }
        R = t - X;
        w = t - (X + R) + (R - d);
        R = e - K;
        M = e - (K + R) + (R - h);
        R = n - et;
        S = n - (et + R) + (R - p);
        R = i - H;
        A = i - (H + R) + (R - d);
        R = r - Z;
        D = r - (Z + R) + (R - h);
        R = s - nt;
        B = s - (nt + R) + (R - p);
        R = a - V;
        k = a - (V + R) + (R - d);
        R = o - J;
        C = o - (J + R) + (R - h);
        R = u - it;
        z = u - (it + R) + (R - p);
        R = l - Q;
        E = l - (Q + R) + (R - d);
        R = c - tt;
        F = c - (tt + R) + (R - h);
        R = f - rt;
        $ = f - (rt + R) + (R - p);
        if (w === 0 && M === 0 && S === 0 && A === 0 && D === 0 && B === 0 && k === 0 && C === 0 && z === 0 && E === 0 && F === 0 && $ === 0) {
          return at;
        }
        ot = QS * m + resulterrbound * Math.abs(at);
        const ut = X * D + Z * w - (K * A + H * M);
        const lt = H * C + J * A - (Z * k + V * D);
        const ct = V * F + tt * k - (J * E + Q * C);
        const ft = Q * M + K * E - (tt * w + X * F);
        const dt = X * C + J * w - (K * k + V * M);
        const ht = H * F + tt * A - (Z * E + Q * D);
        at +=
          (H * H + Z * Z + nt * nt) * (it * ft + rt * dt + et * ct + (z * b + $ * x + S * v)) +
          (Q * Q + tt * tt + rt * rt) * (et * lt - nt * dt + it * ut + (S * y - B * x + z * g)) -
          ((X * X + K * K + et * et) * (nt * ct - it * ht + rt * lt + (B * v - z * _ + $ * y)) +
            (V * V + J * J + it * it) * (rt * ut + et * ht + nt * ft + ($ * g + S * _ + B * b))) +
          2 *
            ((H * A + Z * D + nt * B) * (it * b + rt * x + et * v) +
              (Q * E + tt * F + rt * $) * (et * y - nt * x + it * g) -
              ((X * w + K * M + et * S) * (nt * v - it * _ + rt * y) + (V * k + J * C + it * z) * (rt * g + et * _ + nt * b)));
        if (at >= ot || -at >= ot) {
          return at;
        }
        return IB(t, e, n, i, r, s, a, o, u, l, c, f, d, h, p);
      }
      function HB(t, e, n, i, r, s, a, o, u, l, c, f, d, h, p) {
        const m = t - d;
        const g = i - d;
        const y = a - d;
        const v = l - d;
        const b = e - h;
        const x = r - h;
        const _ = o - h;
        const w = c - h;
        const A = n - p;
        const k = s - p;
        const E = u - p;
        const M = f - p;
        const D = m * x;
        const C = g * b;
        const F = D - C;
        const S = g * _;
        const B = y * x;
        const z = S - B;
        const $ = y * w;
        const R = v * _;
        const O = $ - R;
        const T = v * b;
        const N = m * w;
        const L = T - N;
        const P = m * _;
        const q = y * b;
        const I = P - q;
        const U = g * w;
        const j = v * x;
        const G = U - j;
        const Y = A * z - k * I + E * F;
        const W = k * O - E * G + M * z;
        const X = E * L + M * I + A * O;
        const H = M * F + A * G + k * L;
        const V = m * m + b * b + A * A;
        const Q = g * g + x * x + k * k;
        const K = y * y + _ * _ + E * E;
        const Z = v * v + w * w + M * M;
        const J = K * H - Z * Y + (V * W - Q * X);
        const tt = Math.abs(A);
        const et = Math.abs(k);
        const nt = Math.abs(E);
        const it = Math.abs(M);
        const rt = Math.abs(D);
        const st = Math.abs(C);
        const at = Math.abs(S);
        const ot = Math.abs(B);
        const ut = Math.abs($);
        const lt = Math.abs(R);
        const ct = Math.abs(T);
        const ft = Math.abs(N);
        const dt = Math.abs(P);
        const ht = Math.abs(q);
        const pt = Math.abs(U);
        const mt = Math.abs(j);
        const gt =
          ((ut + lt) * et + (mt + pt) * nt + (at + ot) * it) * V +
          ((ct + ft) * nt + (dt + ht) * it + (ut + lt) * tt) * Q +
          ((rt + st) * it + (pt + mt) * tt + (ct + ft) * et) * K +
          ((at + ot) * tt + (ht + dt) * et + (rt + st) * nt) * Z;
        const yt = HS * gt;
        if (J > yt || -J > yt) {
          return J;
        }
        return -XB(t, e, n, i, r, s, a, o, u, l, c, f, d, h, p, gt);
      }
      function VB(t, e, n, i, r, s, a, o, u, l, c, f, d, h, p) {
        const m = t - d;
        const g = i - d;
        const y = a - d;
        const v = l - d;
        const b = e - h;
        const x = r - h;
        const _ = o - h;
        const w = c - h;
        const A = n - p;
        const k = s - p;
        const E = u - p;
        const M = f - p;
        const D = m * x - g * b;
        const C = g * _ - y * x;
        const F = y * w - v * _;
        const S = v * b - m * w;
        const B = m * _ - y * b;
        const z = g * w - v * x;
        const $ = A * C - k * B + E * D;
        const R = k * F - E * z + M * C;
        const O = E * S + M * B + A * F;
        const T = M * D + A * z + k * S;
        const N = m * m + b * b + A * A;
        const L = g * g + x * x + k * k;
        const P = y * y + _ * _ + E * E;
        const q = v * v + w * w + M * M;
        return P * T - q * $ + (N * R - L * O);
      }
      const QB = Math.pow(2, -52);
      const KB = new Uint32Array(512);
      class ZB {
        static from(t, e = az, n = oz) {
          const i = t.length;
          const r = new Float64Array(i * 2);
          for (let s = 0; s < i; s++) {
            const i = t[s];
            r[2 * s] = e(i);
            r[2 * s + 1] = n(i);
          }
          return new ZB(r);
        }
        constructor(t) {
          const e = t.length >> 1;
          if (e > 0 && typeof t[0] !== "number") throw new Error("Expected coords to contain numbers.");
          this.coords = t;
          const n = Math.max(2 * e - 5, 0);
          this._triangles = new Uint32Array(n * 3);
          this._halfedges = new Int32Array(n * 3);
          this._hashSize = Math.ceil(Math.sqrt(e));
          this._hullPrev = new Uint32Array(e);
          this._hullNext = new Uint32Array(e);
          this._hullTri = new Uint32Array(e);
          this._hullHash = new Int32Array(this._hashSize).fill(-1);
          this._ids = new Uint32Array(e);
          this._dists = new Float64Array(e);
          this.update();
        }
        update() {
          const { coords: t, _hullPrev: e, _hullNext: n, _hullTri: i, _hullHash: r } = this;
          const s = t.length >> 1;
          let a = Infinity;
          let o = Infinity;
          let u = -Infinity;
          let l = -Infinity;
          for (let E = 0; E < s; E++) {
            const e = t[2 * E];
            const n = t[2 * E + 1];
            if (e < a) a = e;
            if (n < o) o = n;
            if (e > u) u = e;
            if (n > l) l = n;
            this._ids[E] = E;
          }
          const c = (a + u) / 2;
          const f = (o + l) / 2;
          let d = Infinity;
          let h, p, m;
          for (let E = 0; E < s; E++) {
            const e = tz(c, f, t[2 * E], t[2 * E + 1]);
            if (e < d) {
              h = E;
              d = e;
            }
          }
          const g = t[2 * h];
          const y = t[2 * h + 1];
          d = Infinity;
          for (let E = 0; E < s; E++) {
            if (E === h) continue;
            const e = tz(g, y, t[2 * E], t[2 * E + 1]);
            if (e < d && e > 0) {
              p = E;
              d = e;
            }
          }
          let v = t[2 * p];
          let b = t[2 * p + 1];
          let x = Infinity;
          for (let E = 0; E < s; E++) {
            if (E === h || E === p) continue;
            const e = nz(g, y, v, b, t[2 * E], t[2 * E + 1]);
            if (e < x) {
              m = E;
              x = e;
            }
          }
          let _ = t[2 * m];
          let w = t[2 * m + 1];
          if (x === Infinity) {
            for (let i = 0; i < s; i++) {
              this._dists[i] = t[2 * i] - t[0] || t[2 * i + 1] - t[1];
            }
            rz(this._ids, this._dists, 0, s - 1);
            const e = new Uint32Array(s);
            let n = 0;
            for (let t = 0, i = -Infinity; t < s; t++) {
              const r = this._ids[t];
              if (this._dists[r] > i) {
                e[n++] = r;
                i = this._dists[r];
              }
            }
            this.hull = e.subarray(0, n);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
          }
          if (OF(g, y, v, b, _, w) < 0) {
            const t = p;
            const e = v;
            const n = b;
            p = m;
            v = _;
            b = w;
            m = t;
            _ = e;
            w = n;
          }
          const A = iz(g, y, v, b, _, w);
          this._cx = A.x;
          this._cy = A.y;
          for (let E = 0; E < s; E++) {
            this._dists[E] = tz(t[2 * E], t[2 * E + 1], A.x, A.y);
          }
          rz(this._ids, this._dists, 0, s - 1);
          this._hullStart = h;
          let k = 3;
          n[h] = e[m] = p;
          n[p] = e[h] = m;
          n[m] = e[p] = h;
          i[h] = 0;
          i[p] = 1;
          i[m] = 2;
          r.fill(-1);
          r[this._hashKey(g, y)] = h;
          r[this._hashKey(v, b)] = p;
          r[this._hashKey(_, w)] = m;
          this.trianglesLen = 0;
          this._addTriangle(h, p, m, -1, -1, -1);
          for (let E = 0, M, D; E < this._ids.length; E++) {
            const s = this._ids[E];
            const a = t[2 * s];
            const o = t[2 * s + 1];
            if (E > 0 && Math.abs(a - M) <= QB && Math.abs(o - D) <= QB) continue;
            M = a;
            D = o;
            if (s === h || s === p || s === m) continue;
            let u = 0;
            for (let t = 0, e = this._hashKey(a, o); t < this._hashSize; t++) {
              u = r[(e + t) % this._hashSize];
              if (u !== -1 && u !== n[u]) break;
            }
            u = e[u];
            let l = u,
              c;
            while (((c = n[l]), OF(a, o, t[2 * l], t[2 * l + 1], t[2 * c], t[2 * c + 1]) >= 0)) {
              l = c;
              if (l === u) {
                l = -1;
                break;
              }
            }
            if (l === -1) continue;
            let f = this._addTriangle(l, s, n[l], -1, -1, i[l]);
            i[s] = this._legalize(f + 2);
            i[l] = f;
            k++;
            let d = n[l];
            while (((c = n[d]), OF(a, o, t[2 * d], t[2 * d + 1], t[2 * c], t[2 * c + 1]) < 0)) {
              f = this._addTriangle(d, s, c, i[s], -1, i[d]);
              i[s] = this._legalize(f + 2);
              n[d] = d;
              k--;
              d = c;
            }
            if (l === u) {
              while (((c = e[l]), OF(a, o, t[2 * c], t[2 * c + 1], t[2 * l], t[2 * l + 1]) < 0)) {
                f = this._addTriangle(c, s, l, -1, i[l], i[c]);
                this._legalize(f + 2);
                i[c] = f;
                n[l] = l;
                k--;
                l = c;
              }
            }
            this._hullStart = e[s] = l;
            n[l] = e[d] = s;
            n[s] = d;
            r[this._hashKey(a, o)] = s;
            r[this._hashKey(t[2 * l], t[2 * l + 1])] = l;
          }
          this.hull = new Uint32Array(k);
          for (let E = 0, M = this._hullStart; E < k; E++) {
            this.hull[E] = M;
            M = n[M];
          }
          this.triangles = this._triangles.subarray(0, this.trianglesLen);
          this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
        }
        _hashKey(t, e) {
          return Math.floor(JB(t - this._cx, e - this._cy) * this._hashSize) % this._hashSize;
        }
        _legalize(t) {
          const { _triangles: e, _halfedges: n, coords: i } = this;
          let r = 0;
          let s = 0;
          while (true) {
            const a = n[t];
            const o = t - (t % 3);
            s = o + ((t + 2) % 3);
            if (a === -1) {
              if (r === 0) break;
              t = KB[--r];
              continue;
            }
            const u = a - (a % 3);
            const l = o + ((t + 1) % 3);
            const c = u + ((a + 2) % 3);
            const f = e[s];
            const d = e[t];
            const h = e[l];
            const p = e[c];
            const m = ez(i[2 * f], i[2 * f + 1], i[2 * d], i[2 * d + 1], i[2 * h], i[2 * h + 1], i[2 * p], i[2 * p + 1]);
            if (m) {
              e[t] = p;
              e[a] = f;
              const i = n[c];
              if (i === -1) {
                let e = this._hullStart;
                do {
                  if (this._hullTri[e] === c) {
                    this._hullTri[e] = t;
                    break;
                  }
                  e = this._hullPrev[e];
                } while (e !== this._hullStart);
              }
              this._link(t, i);
              this._link(a, n[s]);
              this._link(s, c);
              const o = u + ((a + 1) % 3);
              if (r < KB.length) {
                KB[r++] = o;
              }
            } else {
              if (r === 0) break;
              t = KB[--r];
            }
          }
          return s;
        }
        _link(t, e) {
          this._halfedges[t] = e;
          if (e !== -1) this._halfedges[e] = t;
        }
        _addTriangle(t, e, n, i, r, s) {
          const a = this.trianglesLen;
          this._triangles[a] = t;
          this._triangles[a + 1] = e;
          this._triangles[a + 2] = n;
          this._link(a, i);
          this._link(a + 1, r);
          this._link(a + 2, s);
          this.trianglesLen += 3;
          return a;
        }
      }
      function JB(t, e) {
        const n = t / (Math.abs(t) + Math.abs(e));
        return (e > 0 ? 3 - n : 1 + n) / 4;
      }
      function tz(t, e, n, i) {
        const r = t - n;
        const s = e - i;
        return r * r + s * s;
      }
      function ez(t, e, n, i, r, s, a, o) {
        const u = t - a;
        const l = e - o;
        const c = n - a;
        const f = i - o;
        const d = r - a;
        const h = s - o;
        const p = u * u + l * l;
        const m = c * c + f * f;
        const g = d * d + h * h;
        return u * (f * g - m * h) - l * (c * g - m * d) + p * (c * h - f * d) < 0;
      }
      function nz(t, e, n, i, r, s) {
        const a = n - t;
        const o = i - e;
        const u = r - t;
        const l = s - e;
        const c = a * a + o * o;
        const f = u * u + l * l;
        const d = 0.5 / (a * l - o * u);
        const h = (l * c - o * f) * d;
        const p = (a * f - u * c) * d;
        return h * h + p * p;
      }
      function iz(t, e, n, i, r, s) {
        const a = n - t;
        const o = i - e;
        const u = r - t;
        const l = s - e;
        const c = a * a + o * o;
        const f = u * u + l * l;
        const d = 0.5 / (a * l - o * u);
        const h = t + (l * c - o * f) * d;
        const p = e + (a * f - u * c) * d;
        return { x: h, y: p };
      }
      function rz(t, e, n, i) {
        if (i - n <= 20) {
          for (let r = n + 1; r <= i; r++) {
            const i = t[r];
            const s = e[i];
            let a = r - 1;
            while (a >= n && e[t[a]] > s) t[a + 1] = t[a--];
            t[a + 1] = i;
          }
        } else {
          const r = (n + i) >> 1;
          let s = n + 1;
          let a = i;
          sz(t, r, s);
          if (e[t[n]] > e[t[i]]) sz(t, n, i);
          if (e[t[s]] > e[t[i]]) sz(t, s, i);
          if (e[t[n]] > e[t[s]]) sz(t, n, s);
          const o = t[s];
          const u = e[o];
          while (true) {
            do {
              s++;
            } while (e[t[s]] < u);
            do {
              a--;
            } while (e[t[a]] > u);
            if (a < s) break;
            sz(t, s, a);
          }
          t[n + 1] = t[a];
          t[a] = o;
          if (i - s + 1 >= a - n) {
            rz(t, e, s, i);
            rz(t, e, n, a - 1);
          } else {
            rz(t, e, n, a - 1);
            rz(t, e, s, i);
          }
        }
      }
      function sz(t, e, n) {
        const i = t[e];
        t[e] = t[n];
        t[n] = i;
      }
      function az(t) {
        return t[0];
      }
      function oz(t) {
        return t[1];
      }
      const uz = 1e-6;
      class lz {
        constructor() {
          this._x0 = this._y0 = this._x1 = this._y1 = null;
          this._ = "";
        }
        moveTo(t, e) {
          this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
        }
        closePath() {
          if (this._x1 !== null) {
            (this._x1 = this._x0), (this._y1 = this._y0);
            this._ += "Z";
          }
        }
        lineTo(t, e) {
          this._ += `L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        arc(t, e, n) {
          (t = +t), (e = +e), (n = +n);
          const i = t + n;
          const r = e;
          if (n < 0) throw new Error("negative radius");
          if (this._x1 === null) this._ += `M${i},${r}`;
          else if (Math.abs(this._x1 - i) > uz || Math.abs(this._y1 - r) > uz) this._ += "L" + i + "," + r;
          if (!n) return;
          this._ += `A${n},${n},0,1,1,${t - n},${e}A${n},${n},0,1,1,${(this._x1 = i)},${(this._y1 = r)}`;
        }
        rect(t, e, n, i) {
          this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${+n}v${+i}h${-n}Z`;
        }
        value() {
          return this._ || null;
        }
      }
      class cz {
        constructor() {
          this._ = [];
        }
        moveTo(t, e) {
          this._.push([t, e]);
        }
        closePath() {
          this._.push(this._[0].slice());
        }
        lineTo(t, e) {
          this._.push([t, e]);
        }
        value() {
          return this._.length ? this._ : null;
        }
      }
      class fz {
        constructor(t, [e, n, i, r] = [0, 0, 960, 500]) {
          if (!((i = +i) >= (e = +e)) || !((r = +r) >= (n = +n))) throw new Error("invalid bounds");
          this.delaunay = t;
          this._circumcenters = new Float64Array(t.points.length * 2);
          this.vectors = new Float64Array(t.points.length * 2);
          (this.xmax = i), (this.xmin = e);
          (this.ymax = r), (this.ymin = n);
          this._init();
        }
        update() {
          this.delaunay.update();
          this._init();
          return this;
        }
        _init() {
          const {
            delaunay: { points: t, hull: e, triangles: n },
            vectors: i,
          } = this;
          let r, s;
          const a = (this.circumcenters = this._circumcenters.subarray(0, (n.length / 3) * 2));
          for (let p = 0, m = 0, g = n.length, y, v; p < g; p += 3, m += 2) {
            const i = n[p] * 2;
            const o = n[p + 1] * 2;
            const u = n[p + 2] * 2;
            const l = t[i];
            const c = t[i + 1];
            const f = t[o];
            const d = t[o + 1];
            const h = t[u];
            const g = t[u + 1];
            const b = f - l;
            const x = d - c;
            const _ = h - l;
            const w = g - c;
            const A = (b * w - x * _) * 2;
            if (Math.abs(A) < 1e-9) {
              if (r === undefined) {
                r = s = 0;
                for (const n of e) (r += t[n * 2]), (s += t[n * 2 + 1]);
                (r /= e.length), (s /= e.length);
              }
              const n = 1e9 * Math.sign((r - l) * w - (s - c) * _);
              y = (l + h) / 2 - n * w;
              v = (c + g) / 2 + n * _;
            } else {
              const t = 1 / A;
              const e = b * b + x * x;
              const n = _ * _ + w * w;
              y = l + (w * e - x * n) * t;
              v = c + (b * n - _ * e) * t;
            }
            a[m] = y;
            a[m + 1] = v;
          }
          let o = e[e.length - 1];
          let u,
            l = o * 4;
          let c,
            f = t[2 * o];
          let d,
            h = t[2 * o + 1];
          i.fill(0);
          for (let p = 0; p < e.length; ++p) {
            o = e[p];
            (u = l), (c = f), (d = h);
            (l = o * 4), (f = t[2 * o]), (h = t[2 * o + 1]);
            i[u + 2] = i[l] = d - h;
            i[u + 3] = i[l + 1] = f - c;
          }
        }
        render(t) {
          const e = t == null ? (t = new lz()) : undefined;
          const {
            delaunay: { halfedges: n, inedges: i, hull: r },
            circumcenters: s,
            vectors: a,
          } = this;
          if (r.length <= 1) return null;
          for (let l = 0, c = n.length; l < c; ++l) {
            const e = n[l];
            if (e < l) continue;
            const i = Math.floor(l / 3) * 2;
            const r = Math.floor(e / 3) * 2;
            const a = s[i];
            const o = s[i + 1];
            const u = s[r];
            const c = s[r + 1];
            this._renderSegment(a, o, u, c, t);
          }
          let o,
            u = r[r.length - 1];
          for (let l = 0; l < r.length; ++l) {
            (o = u), (u = r[l]);
            const e = Math.floor(i[u] / 3) * 2;
            const n = s[e];
            const c = s[e + 1];
            const f = o * 4;
            const d = this._project(n, c, a[f + 2], a[f + 3]);
            if (d) this._renderSegment(n, c, d[0], d[1], t);
          }
          return e && e.value();
        }
        renderBounds(t) {
          const e = t == null ? (t = new lz()) : undefined;
          t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
          return e && e.value();
        }
        renderCell(t, e) {
          const n = e == null ? (e = new lz()) : undefined;
          const i = this._clip(t);
          if (i === null || !i.length) return;
          e.moveTo(i[0], i[1]);
          let r = i.length;
          while (i[0] === i[r - 2] && i[1] === i[r - 1] && r > 1) r -= 2;
          for (let s = 2; s < r; s += 2) {
            if (i[s] !== i[s - 2] || i[s + 1] !== i[s - 1]) e.lineTo(i[s], i[s + 1]);
          }
          e.closePath();
          return n && n.value();
        }
        *cellPolygons() {
          const {
            delaunay: { points: t },
          } = this;
          for (let e = 0, n = t.length / 2; e < n; ++e) {
            const t = this.cellPolygon(e);
            if (t) (t.index = e), yield t;
          }
        }
        cellPolygon(t) {
          const e = new cz();
          this.renderCell(t, e);
          return e.value();
        }
        _renderSegment(t, e, n, i, r) {
          let s;
          const a = this._regioncode(t, e);
          const o = this._regioncode(n, i);
          if (a === 0 && o === 0) {
            r.moveTo(t, e);
            r.lineTo(n, i);
          } else if ((s = this._clipSegment(t, e, n, i, a, o))) {
            r.moveTo(s[0], s[1]);
            r.lineTo(s[2], s[3]);
          }
        }
        contains(t, e, n) {
          if (((e = +e), e !== e) || ((n = +n), n !== n)) return false;
          return this.delaunay._step(t, e, n) === t;
        }
        *neighbors(t) {
          const e = this._clip(t);
          if (e)
            for (const n of this.delaunay.neighbors(t)) {
              const t = this._clip(n);
              if (t)
                t: for (let i = 0, r = e.length; i < r; i += 2) {
                  for (let s = 0, a = t.length; s < a; s += 2) {
                    if (e[i] === t[s] && e[i + 1] === t[s + 1] && e[(i + 2) % r] === t[(s + a - 2) % a] && e[(i + 3) % r] === t[(s + a - 1) % a]) {
                      yield n;
                      break t;
                    }
                  }
                }
            }
        }
        _cell(t) {
          const {
            circumcenters: e,
            delaunay: { inedges: n, halfedges: i, triangles: r },
          } = this;
          const s = n[t];
          if (s === -1) return null;
          const a = [];
          let o = s;
          do {
            const n = Math.floor(o / 3);
            a.push(e[n * 2], e[n * 2 + 1]);
            o = o % 3 === 2 ? o - 2 : o + 1;
            if (r[o] !== t) break;
            o = i[o];
          } while (o !== s && o !== -1);
          return a;
        }
        _clip(t) {
          if (t === 0 && this.delaunay.hull.length === 1) {
            return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
          }
          const e = this._cell(t);
          if (e === null) return null;
          const { vectors: n } = this;
          const i = t * 4;
          return this._simplify(n[i] || n[i + 1] ? this._clipInfinite(t, e, n[i], n[i + 1], n[i + 2], n[i + 3]) : this._clipFinite(t, e));
        }
        _clipFinite(t, e) {
          const n = e.length;
          let i = null;
          let r,
            s,
            a = e[n - 2],
            o = e[n - 1];
          let u,
            l = this._regioncode(a, o);
          let c,
            f = 0;
          for (let d = 0; d < n; d += 2) {
            (r = a), (s = o), (a = e[d]), (o = e[d + 1]);
            (u = l), (l = this._regioncode(a, o));
            if (u === 0 && l === 0) {
              (c = f), (f = 0);
              if (i) i.push(a, o);
              else i = [a, o];
            } else {
              let e, n, d, h, p;
              if (u === 0) {
                if ((e = this._clipSegment(r, s, a, o, u, l)) === null) continue;
                [n, d, h, p] = e;
              } else {
                if ((e = this._clipSegment(a, o, r, s, l, u)) === null) continue;
                [h, p, n, d] = e;
                (c = f), (f = this._edgecode(n, d));
                if (c && f) this._edge(t, c, f, i, i.length);
                if (i) i.push(n, d);
                else i = [n, d];
              }
              (c = f), (f = this._edgecode(h, p));
              if (c && f) this._edge(t, c, f, i, i.length);
              if (i) i.push(h, p);
              else i = [h, p];
            }
          }
          if (i) {
            (c = f), (f = this._edgecode(i[0], i[1]));
            if (c && f) this._edge(t, c, f, i, i.length);
          } else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
            return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
          }
          return i;
        }
        _clipSegment(t, e, n, i, r, s) {
          const a = r < s;
          if (a) [t, e, n, i, r, s] = [n, i, t, e, s, r];
          while (true) {
            if (r === 0 && s === 0) return a ? [n, i, t, e] : [t, e, n, i];
            if (r & s) return null;
            let o,
              u,
              l = r || s;
            if (l & 8) (o = t + ((n - t) * (this.ymax - e)) / (i - e)), (u = this.ymax);
            else if (l & 4) (o = t + ((n - t) * (this.ymin - e)) / (i - e)), (u = this.ymin);
            else if (l & 2) (u = e + ((i - e) * (this.xmax - t)) / (n - t)), (o = this.xmax);
            else (u = e + ((i - e) * (this.xmin - t)) / (n - t)), (o = this.xmin);
            if (r) (t = o), (e = u), (r = this._regioncode(t, e));
            else (n = o), (i = u), (s = this._regioncode(n, i));
          }
        }
        _clipInfinite(t, e, n, i, r, s) {
          let a = Array.from(e),
            o;
          if ((o = this._project(a[0], a[1], n, i))) a.unshift(o[0], o[1]);
          if ((o = this._project(a[a.length - 2], a[a.length - 1], r, s))) a.push(o[0], o[1]);
          if ((a = this._clipFinite(t, a))) {
            for (let e = 0, n = a.length, i, r = this._edgecode(a[n - 2], a[n - 1]); e < n; e += 2) {
              (i = r), (r = this._edgecode(a[e], a[e + 1]));
              if (i && r) (e = this._edge(t, i, r, a, e)), (n = a.length);
            }
          } else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
            a = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
          }
          return a;
        }
        _edge(t, e, n, i, r) {
          while (e !== n) {
            let n, s;
            switch (e) {
              case 5:
                e = 4;
                continue;
              case 4:
                (e = 6), (n = this.xmax), (s = this.ymin);
                break;
              case 6:
                e = 2;
                continue;
              case 2:
                (e = 10), (n = this.xmax), (s = this.ymax);
                break;
              case 10:
                e = 8;
                continue;
              case 8:
                (e = 9), (n = this.xmin), (s = this.ymax);
                break;
              case 9:
                e = 1;
                continue;
              case 1:
                (e = 5), (n = this.xmin), (s = this.ymin);
                break;
            }
            if ((i[r] !== n || i[r + 1] !== s) && this.contains(t, n, s)) {
              i.splice(r, 0, n, s), (r += 2);
            }
          }
          return r;
        }
        _project(t, e, n, i) {
          let r = Infinity,
            s,
            a,
            o;
          if (i < 0) {
            if (e <= this.ymin) return null;
            if ((s = (this.ymin - e) / i) < r) (o = this.ymin), (a = t + (r = s) * n);
          } else if (i > 0) {
            if (e >= this.ymax) return null;
            if ((s = (this.ymax - e) / i) < r) (o = this.ymax), (a = t + (r = s) * n);
          }
          if (n > 0) {
            if (t >= this.xmax) return null;
            if ((s = (this.xmax - t) / n) < r) (a = this.xmax), (o = e + (r = s) * i);
          } else if (n < 0) {
            if (t <= this.xmin) return null;
            if ((s = (this.xmin - t) / n) < r) (a = this.xmin), (o = e + (r = s) * i);
          }
          return [a, o];
        }
        _edgecode(t, e) {
          return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (e === this.ymin ? 4 : e === this.ymax ? 8 : 0);
        }
        _regioncode(t, e) {
          return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (e < this.ymin ? 4 : e > this.ymax ? 8 : 0);
        }
        _simplify(t) {
          if (t && t.length > 4) {
            for (let e = 0; e < t.length; e += 2) {
              const n = (e + 2) % t.length,
                i = (e + 4) % t.length;
              if ((t[e] === t[n] && t[n] === t[i]) || (t[e + 1] === t[n + 1] && t[n + 1] === t[i + 1])) {
                t.splice(n, 2), (e -= 2);
              }
            }
            if (!t.length) t = null;
          }
          return t;
        }
      }
      const dz = 2 * Math.PI,
        hz = Math.pow;
      function pz(t) {
        return t[0];
      }
      function mz(t) {
        return t[1];
      }
      function gz(t) {
        const { triangles: e, coords: n } = t;
        for (let i = 0; i < e.length; i += 3) {
          const t = 2 * e[i],
            r = 2 * e[i + 1],
            s = 2 * e[i + 2],
            a = (n[s] - n[t]) * (n[r + 1] - n[t + 1]) - (n[r] - n[t]) * (n[s + 1] - n[t + 1]);
          if (a > 1e-10) return false;
        }
        return true;
      }
      function yz(t, e, n) {
        return [t + Math.sin(t + e) * n, e + Math.cos(t - e) * n];
      }
      class vz {
        static from(t, e = pz, n = mz, i) {
          return new vz("length" in t ? bz(t, e, n, i) : Float64Array.from(xz(t, e, n, i)));
        }
        constructor(t) {
          this._delaunator = new ZB(t);
          this.inedges = new Int32Array(t.length / 2);
          this._hullIndex = new Int32Array(t.length / 2);
          this.points = this._delaunator.coords;
          this._init();
        }
        update() {
          this._delaunator.update();
          this._init();
          return this;
        }
        _init() {
          const t = this._delaunator,
            e = this.points;
          if (t.hull && t.hull.length > 2 && gz(t)) {
            this.collinear = Int32Array.from({ length: e.length / 2 }, (t, e) => e).sort(
              (t, n) => e[2 * t] - e[2 * n] || e[2 * t + 1] - e[2 * n + 1]
            );
            const t = this.collinear[0],
              n = this.collinear[this.collinear.length - 1],
              i = [e[2 * t], e[2 * t + 1], e[2 * n], e[2 * n + 1]],
              r = 1e-8 * Math.hypot(i[3] - i[1], i[2] - i[0]);
            for (let s = 0, a = e.length / 2; s < a; ++s) {
              const t = yz(e[2 * s], e[2 * s + 1], r);
              e[2 * s] = t[0];
              e[2 * s + 1] = t[1];
            }
            this._delaunator = new ZB(e);
          } else {
            delete this.collinear;
          }
          const n = (this.halfedges = this._delaunator.halfedges);
          const i = (this.hull = this._delaunator.hull);
          const r = (this.triangles = this._delaunator.triangles);
          const s = this.inedges.fill(-1);
          const a = this._hullIndex.fill(-1);
          for (let o = 0, u = n.length; o < u; ++o) {
            const t = r[o % 3 === 2 ? o - 2 : o + 1];
            if (n[o] === -1 || s[t] === -1) s[t] = o;
          }
          for (let o = 0, u = i.length; o < u; ++o) {
            a[i[o]] = o;
          }
          if (i.length <= 2 && i.length > 0) {
            this.triangles = new Int32Array(3).fill(-1);
            this.halfedges = new Int32Array(3).fill(-1);
            this.triangles[0] = i[0];
            s[i[0]] = 1;
            if (i.length === 2) {
              s[i[1]] = 0;
              this.triangles[1] = i[1];
              this.triangles[2] = i[1];
            }
          }
        }
        voronoi(t) {
          return new fz(this, t);
        }
        *neighbors(t) {
          const { inedges: e, hull: n, _hullIndex: i, halfedges: r, triangles: s, collinear: a } = this;
          if (a) {
            const e = a.indexOf(t);
            if (e > 0) yield a[e - 1];
            if (e < a.length - 1) yield a[e + 1];
            return;
          }
          const o = e[t];
          if (o === -1) return;
          let u = o,
            l = -1;
          do {
            yield (l = s[u]);
            u = u % 3 === 2 ? u - 2 : u + 1;
            if (s[u] !== t) return;
            u = r[u];
            if (u === -1) {
              const e = n[(i[t] + 1) % n.length];
              if (e !== l) yield e;
              return;
            }
          } while (u !== o);
        }
        find(t, e, n = 0) {
          if (((t = +t), t !== t) || ((e = +e), e !== e)) return -1;
          const i = n;
          let r;
          while ((r = this._step(n, t, e)) >= 0 && r !== n && r !== i) n = r;
          return r;
        }
        _step(t, e, n) {
          const { inedges: i, hull: r, _hullIndex: s, halfedges: a, triangles: o, points: u } = this;
          if (i[t] === -1 || !u.length) return (t + 1) % (u.length >> 1);
          let l = t;
          let c = hz(e - u[t * 2], 2) + hz(n - u[t * 2 + 1], 2);
          const f = i[t];
          let d = f;
          do {
            let i = o[d];
            const f = hz(e - u[i * 2], 2) + hz(n - u[i * 2 + 1], 2);
            if (f < c) (c = f), (l = i);
            d = d % 3 === 2 ? d - 2 : d + 1;
            if (o[d] !== t) break;
            d = a[d];
            if (d === -1) {
              d = r[(s[t] + 1) % r.length];
              if (d !== i) {
                if (hz(e - u[d * 2], 2) + hz(n - u[d * 2 + 1], 2) < c) return d;
              }
              break;
            }
          } while (d !== f);
          return l;
        }
        render(t) {
          const e = t == null ? (t = new lz()) : undefined;
          const { points: n, halfedges: i, triangles: r } = this;
          for (let s = 0, a = i.length; s < a; ++s) {
            const e = i[s];
            if (e < s) continue;
            const a = r[s] * 2;
            const o = r[e] * 2;
            t.moveTo(n[a], n[a + 1]);
            t.lineTo(n[o], n[o + 1]);
          }
          this.renderHull(t);
          return e && e.value();
        }
        renderPoints(t, e) {
          if (e === undefined && (!t || typeof t.moveTo !== "function")) (e = t), (t = null);
          e = e == undefined ? 2 : +e;
          const n = t == null ? (t = new lz()) : undefined;
          const { points: i } = this;
          for (let r = 0, s = i.length; r < s; r += 2) {
            const n = i[r],
              s = i[r + 1];
            t.moveTo(n + e, s);
            t.arc(n, s, e, 0, dz);
          }
          return n && n.value();
        }
        renderHull(t) {
          const e = t == null ? (t = new lz()) : undefined;
          const { hull: n, points: i } = this;
          const r = n[0] * 2,
            s = n.length;
          t.moveTo(i[r], i[r + 1]);
          for (let a = 1; a < s; ++a) {
            const e = 2 * n[a];
            t.lineTo(i[e], i[e + 1]);
          }
          t.closePath();
          return e && e.value();
        }
        hullPolygon() {
          const t = new cz();
          this.renderHull(t);
          return t.value();
        }
        renderTriangle(t, e) {
          const n = e == null ? (e = new lz()) : undefined;
          const { points: i, triangles: r } = this;
          const s = r[(t *= 3)] * 2;
          const a = r[t + 1] * 2;
          const o = r[t + 2] * 2;
          e.moveTo(i[s], i[s + 1]);
          e.lineTo(i[a], i[a + 1]);
          e.lineTo(i[o], i[o + 1]);
          e.closePath();
          return n && n.value();
        }
        *trianglePolygons() {
          const { triangles: t } = this;
          for (let e = 0, n = t.length / 3; e < n; ++e) {
            yield this.trianglePolygon(e);
          }
        }
        trianglePolygon(t) {
          const e = new cz();
          this.renderTriangle(t, e);
          return e.value();
        }
      }
      function bz(t, e, n, i) {
        const r = t.length;
        const s = new Float64Array(r * 2);
        for (let a = 0; a < r; ++a) {
          const r = t[a];
          s[a * 2] = e.call(i, r, a, t);
          s[a * 2 + 1] = n.call(i, r, a, t);
        }
        return s;
      }
      function* xz(t, e, n, i) {
        let r = 0;
        for (const s of t) {
          yield e.call(i, s, r, t);
          yield n.call(i, s, r, t);
          ++r;
        }
      }
      function _z(t) {
        zi.call(this, null, t);
      }
      _z.Definition = {
        type: "Voronoi",
        metadata: { modifies: true },
        params: [
          { name: "x", type: "field", required: true },
          { name: "y", type: "field", required: true },
          { name: "size", type: "number", array: true, length: 2 },
          {
            name: "extent",
            type: "array",
            array: true,
            length: 2,
            default: [
              [-1e5, -1e5],
              [1e5, 1e5],
            ],
            content: { type: "number", array: true, length: 2 },
          },
          { name: "as", type: "string", default: "path" },
        ],
      };
      const wz = [-1e5, -1e5, 1e5, 1e5];
      (0, p.B)(_z, zi, {
        transform(t, e) {
          const n = t.as || "path",
            i = e.source;
          if (!i || !i.length) return e;
          let r = t.size;
          r = r ? [0, 0, r[0], r[1]] : (r = t.extent) ? [r[0][0], r[0][1], r[1][0], r[1][1]] : wz;
          const s = (this.value = vz.from(i, t.x, t.y).voronoi(r));
          for (let a = 0, o = i.length; a < o; ++a) {
            const t = s.cellPolygon(a);
            i[a][n] = t && !kz(t) ? Az(t) : null;
          }
          return e.reflow(t.modified()).modifies(n);
        },
      });
      function Az(t) {
        const e = t[0][0],
          n = t[0][1];
        let i = t.length - 1;
        for (; t[i][0] === e && t[i][1] === n; --i);
        return "M" + t.slice(0, i + 1).join("L") + "Z";
      }
      function kz(t) {
        return t.length === 2 && t[0][0] === t[1][0] && t[0][1] === t[1][1];
      }
      var Ez = Math.PI / 180,
        Mz = (1 << 11) >> 5,
        Dz = 1 << 11;
      function Cz() {
        var t = [256, 256],
          e,
          n,
          i,
          r,
          s,
          a,
          o,
          u = $z,
          l = [],
          c = Math.random,
          f = {};
        f.layout = function () {
          var u = d(Ko()),
            f = Oz((t[0] >> 5) * t[1]),
            p = null,
            m = l.length,
            g = -1,
            y = [],
            v = l
              .map((t) => ({
                text: e(t),
                font: n(t),
                style: r(t),
                weight: s(t),
                rotate: a(t),
                size: ~~(i(t) + 1e-14),
                padding: o(t),
                xoff: 0,
                yoff: 0,
                x1: 0,
                y1: 0,
                x0: 0,
                y0: 0,
                hasText: false,
                sprite: null,
                datum: t,
              }))
              .sort((t, e) => e.size - t.size);
          while (++g < m) {
            var b = v[g];
            b.x = (t[0] * (c() + 0.5)) >> 1;
            b.y = (t[1] * (c() + 0.5)) >> 1;
            Fz(u, b, v, g);
            if (b.hasText && h(f, b, p)) {
              y.push(b);
              if (p) Bz(p, b);
              else
                p = [
                  { x: b.x + b.x0, y: b.y + b.y0 },
                  { x: b.x + b.x1, y: b.y + b.y1 },
                ];
              b.x -= t[0] >> 1;
              b.y -= t[1] >> 1;
            }
          }
          return y;
        };
        function d(t) {
          t.width = t.height = 1;
          var e = Math.sqrt(t.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
          t.width = (Mz << 5) / e;
          t.height = Dz / e;
          var n = t.getContext("2d");
          n.fillStyle = n.strokeStyle = "red";
          n.textAlign = "center";
          return { context: n, ratio: e };
        }
        function h(e, n, i) {
          var r = n.x,
            s = n.y,
            a = Math.hypot(t[0], t[1]),
            o = u(t),
            l = c() < 0.5 ? 1 : -1,
            f = -l,
            d,
            h,
            p;
          while ((d = o((f += l)))) {
            h = ~~d[0];
            p = ~~d[1];
            if (Math.min(Math.abs(h), Math.abs(p)) >= a) break;
            n.x = r + h;
            n.y = s + p;
            if (n.x + n.x0 < 0 || n.y + n.y0 < 0 || n.x + n.x1 > t[0] || n.y + n.y1 > t[1]) continue;
            if (!i || !Sz(n, e, t[0])) {
              if (!i || zz(n, i)) {
                var m = n.sprite,
                  g = n.width >> 5,
                  y = t[0] >> 5,
                  v = n.x - (g << 4),
                  b = v & 127,
                  x = 32 - b,
                  _ = n.y1 - n.y0,
                  w = (n.y + n.y0) * y + (v >> 5),
                  A;
                for (var k = 0; k < _; k++) {
                  A = 0;
                  for (var E = 0; E <= g; E++) {
                    e[w + E] |= (A << x) | (E < g ? (A = m[k * g + E]) >>> b : 0);
                  }
                  w += y;
                }
                n.sprite = null;
                return true;
              }
            }
          }
          return false;
        }
        f.words = function (t) {
          if (arguments.length) {
            l = t;
            return f;
          } else {
            return l;
          }
        };
        f.size = function (e) {
          if (arguments.length) {
            t = [+e[0], +e[1]];
            return f;
          } else {
            return t;
          }
        };
        f.font = function (t) {
          if (arguments.length) {
            n = Tz(t);
            return f;
          } else {
            return n;
          }
        };
        f.fontStyle = function (t) {
          if (arguments.length) {
            r = Tz(t);
            return f;
          } else {
            return r;
          }
        };
        f.fontWeight = function (t) {
          if (arguments.length) {
            s = Tz(t);
            return f;
          } else {
            return s;
          }
        };
        f.rotate = function (t) {
          if (arguments.length) {
            a = Tz(t);
            return f;
          } else {
            return a;
          }
        };
        f.text = function (t) {
          if (arguments.length) {
            e = Tz(t);
            return f;
          } else {
            return e;
          }
        };
        f.spiral = function (t) {
          if (arguments.length) {
            u = Nz[t] || t;
            return f;
          } else {
            return u;
          }
        };
        f.fontSize = function (t) {
          if (arguments.length) {
            i = Tz(t);
            return f;
          } else {
            return i;
          }
        };
        f.padding = function (t) {
          if (arguments.length) {
            o = Tz(t);
            return f;
          } else {
            return o;
          }
        };
        f.random = function (t) {
          if (arguments.length) {
            c = t;
            return f;
          } else {
            return c;
          }
        };
        return f;
      }
      function Fz(t, e, n, i) {
        if (e.sprite) return;
        var r = t.context,
          s = t.ratio;
        r.clearRect(0, 0, (Mz << 5) / s, Dz / s);
        var a = 0,
          o = 0,
          u = 0,
          l = n.length,
          c,
          f,
          d,
          h,
          p;
        --i;
        while (++i < l) {
          e = n[i];
          r.save();
          r.font = e.style + " " + e.weight + " " + ~~((e.size + 1) / s) + "px " + e.font;
          c = r.measureText(e.text + "m").width * s;
          d = e.size << 1;
          if (e.rotate) {
            var m = Math.sin(e.rotate * Ez),
              g = Math.cos(e.rotate * Ez),
              y = c * g,
              v = c * m,
              b = d * g,
              x = d * m;
            c = ((Math.max(Math.abs(y + x), Math.abs(y - x)) + 31) >> 5) << 5;
            d = ~~Math.max(Math.abs(v + b), Math.abs(v - b));
          } else {
            c = ((c + 31) >> 5) << 5;
          }
          if (d > u) u = d;
          if (a + c >= Mz << 5) {
            a = 0;
            o += u;
            u = 0;
          }
          if (o + d >= Dz) break;
          r.translate((a + (c >> 1)) / s, (o + (d >> 1)) / s);
          if (e.rotate) r.rotate(e.rotate * Ez);
          r.fillText(e.text, 0, 0);
          if (e.padding) {
            r.lineWidth = 2 * e.padding;
            r.strokeText(e.text, 0, 0);
          }
          r.restore();
          e.width = c;
          e.height = d;
          e.xoff = a;
          e.yoff = o;
          e.x1 = c >> 1;
          e.y1 = d >> 1;
          e.x0 = -e.x1;
          e.y0 = -e.y1;
          e.hasText = true;
          a += c;
        }
        var _ = r.getImageData(0, 0, (Mz << 5) / s, Dz / s).data,
          w = [];
        while (--i >= 0) {
          e = n[i];
          if (!e.hasText) continue;
          c = e.width;
          f = c >> 5;
          d = e.y1 - e.y0;
          for (h = 0; h < d * f; h++) w[h] = 0;
          a = e.xoff;
          if (a == null) return;
          o = e.yoff;
          var A = 0,
            k = -1;
          for (p = 0; p < d; p++) {
            for (h = 0; h < c; h++) {
              var E = f * p + (h >> 5),
                M = _[((o + p) * (Mz << 5) + (a + h)) << 2] ? 1 << (31 - (h % 32)) : 0;
              w[E] |= M;
              A |= M;
            }
            if (A) k = p;
            else {
              e.y0++;
              d--;
              p--;
              o++;
            }
          }
          e.y1 = e.y0 + k;
          e.sprite = w.slice(0, (e.y1 - e.y0) * f);
        }
      }
      function Sz(t, e, n) {
        n >>= 5;
        var i = t.sprite,
          r = t.width >> 5,
          s = t.x - (r << 4),
          a = s & 127,
          o = 32 - a,
          u = t.y1 - t.y0,
          l = (t.y + t.y0) * n + (s >> 5),
          c;
        for (var f = 0; f < u; f++) {
          c = 0;
          for (var d = 0; d <= r; d++) {
            if (((c << o) | (d < r ? (c = i[f * r + d]) >>> a : 0)) & e[l + d]) return true;
          }
          l += n;
        }
        return false;
      }
      function Bz(t, e) {
        var n = t[0],
          i = t[1];
        if (e.x + e.x0 < n.x) n.x = e.x + e.x0;
        if (e.y + e.y0 < n.y) n.y = e.y + e.y0;
        if (e.x + e.x1 > i.x) i.x = e.x + e.x1;
        if (e.y + e.y1 > i.y) i.y = e.y + e.y1;
      }
      function zz(t, e) {
        return t.x + t.x1 > e[0].x && t.x + t.x0 < e[1].x && t.y + t.y1 > e[0].y && t.y + t.y0 < e[1].y;
      }
      function $z(t) {
        var e = t[0] / t[1];
        return function (t) {
          return [e * (t *= 0.1) * Math.cos(t), t * Math.sin(t)];
        };
      }
      function Rz(t) {
        var e = 4,
          n = (e * t[0]) / t[1],
          i = 0,
          r = 0;
        return function (t) {
          var s = t < 0 ? -1 : 1;
          switch ((Math.sqrt(1 + 4 * s * t) - s) & 3) {
            case 0:
              i += n;
              break;
            case 1:
              r += e;
              break;
            case 2:
              i -= n;
              break;
            default:
              r -= e;
              break;
          }
          return [i, r];
        };
      }
      function Oz(t) {
        var e = [],
          n = -1;
        while (++n < t) e[n] = 0;
        return e;
      }
      function Tz(t) {
        return typeof t === "function"
          ? t
          : function () {
              return t;
            };
      }
      var Nz = { archimedean: $z, rectangular: Rz };
      const Lz = ["x", "y", "font", "fontSize", "fontStyle", "fontWeight", "angle"];
      const Pz = ["text", "font", "rotate", "fontSize", "fontStyle", "fontWeight"];
      function qz(t) {
        zi.call(this, Cz(), t);
      }
      qz.Definition = {
        type: "Wordcloud",
        metadata: { modifies: true },
        params: [
          { name: "size", type: "number", array: true, length: 2 },
          { name: "font", type: "string", expr: true, default: "sans-serif" },
          { name: "fontStyle", type: "string", expr: true, default: "normal" },
          { name: "fontWeight", type: "string", expr: true, default: "normal" },
          { name: "fontSize", type: "number", expr: true, default: 14 },
          { name: "fontSizeRange", type: "number", array: "nullable", default: [10, 50] },
          { name: "rotate", type: "number", expr: true, default: 0 },
          { name: "text", type: "field" },
          { name: "spiral", type: "string", values: ["archimedean", "rectangular"] },
          { name: "padding", type: "number", expr: true },
          { name: "as", type: "string", array: true, length: 7, default: Lz },
        ],
      };
      (0, p.B)(qz, zi, {
        transform(t, e) {
          if (t.size && !(t.size[0] && t.size[1])) {
            (0, p.z3)("Wordcloud size dimensions must be non-zero.");
          }
          function n(n) {
            const i = t[n];
            return (0, p.Tn)(i) && e.modified(i.fields);
          }
          const i = t.modified();
          if (!(i || e.changed(e.ADD_REM) || Pz.some(n))) return;
          const r = e.materialize(e.SOURCE).source,
            s = this.value,
            a = t.as || Lz;
          let o = t.fontSize || 14,
            u;
          (0, p.Tn)(o) ? (u = t.fontSizeRange) : (o = (0, p.dY)(o));
          if (u) {
            const t = o,
              e = Yl("sqrt")()
                .domain((0, p.Xx)(r, t))
                .range(u);
            o = (n) => e(t(n));
          }
          r.forEach((t) => {
            t[a[0]] = NaN;
            t[a[1]] = NaN;
            t[a[3]] = 0;
          });
          const l = s
            .words(r)
            .text(t.text)
            .size(t.size || [500, 500])
            .padding(t.padding || 1)
            .spiral(t.spiral || "archimedean")
            .rotate(t.rotate || 0)
            .font(t.font || "sans-serif")
            .fontStyle(t.fontStyle || "normal")
            .fontWeight(t.fontWeight || "normal")
            .fontSize(o)
            .random(ir)
            .layout();
          const c = s.size(),
            f = c[0] >> 1,
            d = c[1] >> 1,
            h = l.length;
          for (let p = 0, m, g; p < h; ++p) {
            m = l[p];
            g = m.datum;
            g[a[0]] = m.x + f;
            g[a[1]] = m.y + d;
            g[a[2]] = m.font;
            g[a[3]] = m.size;
            g[a[4]] = m.style;
            g[a[5]] = m.weight;
            g[a[6]] = m.rotate;
          }
          return e.reflow(i).modifies(a);
        },
      });
      function Iz(t, e) {
        return Array.from(e, (e) => t[e]);
      }
      const Uz = (t) => new Uint8Array(t);
      const jz = (t) => new Uint16Array(t);
      const Gz = (t) => new Uint32Array(t);
      function Yz() {
        let t = 8,
          e = [],
          n = Gz(0),
          i = Xz(0, t),
          r = Xz(0, t);
        return {
          data: () => e,
          seen: () => (n = Wz(n, e.length)),
          add(t) {
            for (let n = 0, i = e.length, r = t.length, s; n < r; ++n) {
              s = t[n];
              s._index = i++;
              e.push(s);
            }
          },
          remove(t, n) {
            const s = e.length,
              a = Array(s - t),
              o = e;
            let u, l, c;
            for (l = 0; !n[l] && l < s; ++l) {
              a[l] = e[l];
              o[l] = l;
            }
            for (c = l; l < s; ++l) {
              u = e[l];
              if (!n[l]) {
                o[l] = c;
                i[c] = i[l];
                r[c] = r[l];
                a[c] = u;
                u._index = c++;
              } else {
                o[l] = -1;
              }
              i[l] = 0;
            }
            e = a;
            return o;
          },
          size: () => e.length,
          curr: () => i,
          prev: () => r,
          reset: (t) => (r[t] = i[t]),
          all: () => (t < 257 ? 255 : t < 65537 ? 65535 : 4294967295),
          set(t, e) {
            i[t] |= e;
          },
          clear(t, e) {
            i[t] &= ~e;
          },
          resize(e, n) {
            const s = i.length;
            if (e > s || n > t) {
              t = Math.max(n, t);
              i = Xz(e, t, i);
              r = Xz(e, t);
            }
          },
        };
      }
      function Wz(t, e, n) {
        if (t.length >= e) return t;
        n = n || new t.constructor(e);
        n.set(t);
        return n;
      }
      function Xz(t, e, n) {
        const i = (e < 257 ? Uz : e < 65537 ? jz : Gz)(t);
        if (n) i.set(n);
        return i;
      }
      function Hz(t, e, n) {
        const i = 1 << e;
        return {
          one: i,
          zero: ~i,
          range: n.slice(),
          bisect: t.bisect,
          index: t.index,
          size: t.size,
          onAdd(t, e) {
            const n = this,
              r = n.bisect(n.range, t.value),
              s = t.index,
              a = r[0],
              o = r[1],
              u = s.length;
            let l;
            for (l = 0; l < a; ++l) e[s[l]] |= i;
            for (l = o; l < u; ++l) e[s[l]] |= i;
            return n;
          },
        };
      }
      function Vz() {
        let t = Gz(0),
          e = [],
          n = 0;
        function i(i, r, s) {
          if (!r.length) return [];
          const a = n,
            o = r.length,
            u = Gz(o);
          let l = Array(o),
            c,
            f,
            d;
          for (d = 0; d < o; ++d) {
            l[d] = i(r[d]);
            u[d] = d;
          }
          l = Qz(l, u);
          if (a) {
            c = e;
            f = t;
            e = Array(a + o);
            t = Gz(a + o);
            Kz(s, c, f, a, l, u, o, e, t);
          } else {
            if (s > 0)
              for (d = 0; d < o; ++d) {
                u[d] += s;
              }
            e = l;
            t = u;
          }
          n = a + o;
          return { index: u, value: l };
        }
        function r(i, r) {
          const s = n;
          let a, o, u;
          for (o = 0; !r[t[o]] && o < s; ++o);
          for (u = o; o < s; ++o) {
            if (!r[(a = t[o])]) {
              t[u] = a;
              e[u] = e[o];
              ++u;
            }
          }
          n = s - i;
        }
        function s(e) {
          for (let i = 0, r = n; i < r; ++i) {
            t[i] = e[t[i]];
          }
        }
        function a(t, i) {
          let r;
          if (i) {
            r = i.length;
          } else {
            i = e;
            r = n;
          }
          return [(0, Jo.ah)(i, t[0], 0, r), (0, Jo.Jj)(i, t[1], 0, r)];
        }
        return { insert: i, remove: r, bisect: a, reindex: s, index: () => t, size: () => n };
      }
      function Qz(t, e) {
        t.sort.call(e, (e, n) => {
          const i = t[e],
            r = t[n];
          return i < r ? -1 : i > r ? 1 : 0;
        });
        return Iz(t, e);
      }
      function Kz(t, e, n, i, r, s, a, o, u) {
        let l = 0,
          c = 0,
          f;
        for (f = 0; l < i && c < a; ++f) {
          if (e[l] < r[c]) {
            o[f] = e[l];
            u[f] = n[l++];
          } else {
            o[f] = r[c];
            u[f] = s[c++] + t;
          }
        }
        for (; l < i; ++l, ++f) {
          o[f] = e[l];
          u[f] = n[l];
        }
        for (; c < a; ++c, ++f) {
          o[f] = r[c];
          u[f] = s[c] + t;
        }
      }
      function Zz(t) {
        zi.call(this, Yz(), t);
        this._indices = null;
        this._dims = null;
      }
      Zz.Definition = {
        type: "CrossFilter",
        metadata: {},
        params: [
          { name: "fields", type: "field", array: true, required: true },
          { name: "query", type: "array", array: true, required: true, content: { type: "number", array: true, length: 2 } },
        ],
      };
      (0, p.B)(Zz, zi, {
        transform(t, e) {
          if (!this._dims) {
            return this.init(t, e);
          } else {
            var n = t.modified("fields") || t.fields.some((t) => e.modified(t.fields));
            return n ? this.reinit(t, e) : this.eval(t, e);
          }
        },
        init(t, e) {
          const n = t.fields,
            i = t.query,
            r = (this._indices = {}),
            s = (this._dims = []),
            a = i.length;
          let o = 0,
            u,
            l;
          for (; o < a; ++o) {
            u = n[o].fname;
            l = r[u] || (r[u] = Vz());
            s.push(Hz(l, o, i[o]));
          }
          return this.eval(t, e);
        },
        reinit(t, e) {
          const n = e.materialize().fork(),
            i = t.fields,
            r = t.query,
            s = this._indices,
            a = this._dims,
            o = this.value,
            u = o.curr(),
            l = o.prev(),
            c = o.all(),
            f = (n.rem = n.add),
            d = n.mod,
            h = r.length,
            p = {};
          let m, g, y, v, b, x, _, w, A;
          l.set(u);
          if (e.rem.length) {
            b = this.remove(t, e, n);
          }
          if (e.add.length) {
            o.add(e.add);
          }
          if (e.mod.length) {
            x = {};
            for (v = e.mod, _ = 0, w = v.length; _ < w; ++_) {
              x[v[_]._index] = 1;
            }
          }
          for (_ = 0; _ < h; ++_) {
            A = i[_];
            if (!a[_] || t.modified("fields", _) || e.modified(A.fields)) {
              y = A.fname;
              if (!(m = p[y])) {
                s[y] = g = Vz();
                p[y] = m = g.insert(A, e.source, 0);
              }
              a[_] = Hz(g, _, r[_]).onAdd(m, u);
            }
          }
          for (_ = 0, w = o.data().length; _ < w; ++_) {
            if (b[_]) {
              continue;
            } else if (l[_] !== u[_]) {
              f.push(_);
            } else if (x[_] && u[_] !== c) {
              d.push(_);
            }
          }
          o.mask = (1 << h) - 1;
          return n;
        },
        eval(t, e) {
          const n = e.materialize().fork(),
            i = this._dims.length;
          let r = 0;
          if (e.rem.length) {
            this.remove(t, e, n);
            r |= (1 << i) - 1;
          }
          if (t.modified("query") && !t.modified("fields")) {
            r |= this.update(t, e, n);
          }
          if (e.add.length) {
            this.insert(t, e, n);
            r |= (1 << i) - 1;
          }
          if (e.mod.length) {
            this.modify(e, n);
            r |= (1 << i) - 1;
          }
          this.value.mask = r;
          return n;
        },
        insert(t, e, n) {
          const i = e.add,
            r = this.value,
            s = this._dims,
            a = this._indices,
            o = t.fields,
            u = {},
            l = n.add,
            c = r.size() + i.length,
            f = s.length;
          let d = r.size(),
            h,
            p,
            m;
          r.resize(c, f);
          r.add(i);
          const g = r.curr(),
            y = r.prev(),
            v = r.all();
          for (h = 0; h < f; ++h) {
            p = o[h].fname;
            m = u[p] || (u[p] = a[p].insert(o[h], i, d));
            s[h].onAdd(m, g);
          }
          for (; d < c; ++d) {
            y[d] = v;
            if (g[d] !== v) l.push(d);
          }
        },
        modify(t, e) {
          const n = e.mod,
            i = this.value,
            r = i.curr(),
            s = i.all(),
            a = t.mod;
          let o, u, l;
          for (o = 0, u = a.length; o < u; ++o) {
            l = a[o]._index;
            if (r[l] !== s) n.push(l);
          }
        },
        remove(t, e, n) {
          const i = this._indices,
            r = this.value,
            s = r.curr(),
            a = r.prev(),
            o = r.all(),
            u = {},
            l = n.rem,
            c = e.rem;
          let f, d, h, p;
          for (f = 0, d = c.length; f < d; ++f) {
            h = c[f]._index;
            u[h] = 1;
            a[h] = p = s[h];
            s[h] = o;
            if (p !== o) l.push(h);
          }
          for (h in i) {
            i[h].remove(d, u);
          }
          this.reindex(e, d, u);
          return u;
        },
        reindex(t, e, n) {
          const i = this._indices,
            r = this.value;
          t.runAfter(() => {
            const t = r.remove(e, n);
            for (const e in i) i[e].reindex(t);
          });
        },
        update(t, e, n) {
          const i = this._dims,
            r = t.query,
            s = e.stamp,
            a = i.length;
          let o = 0,
            u,
            l;
          n.filters = 0;
          for (l = 0; l < a; ++l) {
            if (t.modified("query", l)) {
              u = l;
              ++o;
            }
          }
          if (o === 1) {
            o = i[u].one;
            this.incrementOne(i[u], r[u], n.add, n.rem);
          } else {
            for (l = 0, o = 0; l < a; ++l) {
              if (!t.modified("query", l)) continue;
              o |= i[l].one;
              this.incrementAll(i[l], r[l], s, n.add);
              n.rem = n.add;
            }
          }
          return o;
        },
        incrementAll(t, e, n, i) {
          const r = this.value,
            s = r.seen(),
            a = r.curr(),
            o = r.prev(),
            u = t.index(),
            l = t.bisect(t.range),
            c = t.bisect(e),
            f = c[0],
            d = c[1],
            h = l[0],
            p = l[1],
            m = t.one;
          let g, y, v;
          if (f < h) {
            for (g = f, y = Math.min(h, d); g < y; ++g) {
              v = u[g];
              if (s[v] !== n) {
                o[v] = a[v];
                s[v] = n;
                i.push(v);
              }
              a[v] ^= m;
            }
          } else if (f > h) {
            for (g = h, y = Math.min(f, p); g < y; ++g) {
              v = u[g];
              if (s[v] !== n) {
                o[v] = a[v];
                s[v] = n;
                i.push(v);
              }
              a[v] ^= m;
            }
          }
          if (d > p) {
            for (g = Math.max(f, p), y = d; g < y; ++g) {
              v = u[g];
              if (s[v] !== n) {
                o[v] = a[v];
                s[v] = n;
                i.push(v);
              }
              a[v] ^= m;
            }
          } else if (d < p) {
            for (g = Math.max(h, d), y = p; g < y; ++g) {
              v = u[g];
              if (s[v] !== n) {
                o[v] = a[v];
                s[v] = n;
                i.push(v);
              }
              a[v] ^= m;
            }
          }
          t.range = e.slice();
        },
        incrementOne(t, e, n, i) {
          const r = this.value,
            s = r.curr(),
            a = t.index(),
            o = t.bisect(t.range),
            u = t.bisect(e),
            l = u[0],
            c = u[1],
            f = o[0],
            d = o[1],
            h = t.one;
          let p, m, g;
          if (l < f) {
            for (p = l, m = Math.min(f, c); p < m; ++p) {
              g = a[p];
              s[g] ^= h;
              n.push(g);
            }
          } else if (l > f) {
            for (p = f, m = Math.min(l, d); p < m; ++p) {
              g = a[p];
              s[g] ^= h;
              i.push(g);
            }
          }
          if (c > d) {
            for (p = Math.max(l, d), m = c; p < m; ++p) {
              g = a[p];
              s[g] ^= h;
              n.push(g);
            }
          } else if (c < d) {
            for (p = Math.max(f, c), m = d; p < m; ++p) {
              g = a[p];
              s[g] ^= h;
              i.push(g);
            }
          }
          t.range = e.slice();
        },
      });
      function Jz(t) {
        zi.call(this, null, t);
      }
      Jz.Definition = {
        type: "ResolveFilter",
        metadata: {},
        params: [
          { name: "ignore", type: "number", required: true, description: "A bit mask indicating which filters to ignore." },
          { name: "filter", type: "object", required: true, description: "Per-tuple filter bitmaps from a CrossFilter transform." },
        ],
      };
      (0, p.B)(Jz, zi, {
        transform(t, e) {
          const n = ~(t.ignore || 0),
            i = t.filter,
            r = i.mask;
          if ((r & n) === 0) return e.StopPropagation;
          const s = e.fork(e.ALL),
            a = i.data(),
            o = i.curr(),
            u = i.prev(),
            l = (t) => (!(o[t] & n) ? a[t] : null);
          s.filter(s.MOD, l);
          if (!(r & (r - 1))) {
            s.filter(s.ADD, l);
            s.filter(s.REM, (t) => ((o[t] & n) === r ? a[t] : null));
          } else {
            s.filter(s.ADD, (t) => {
              const e = o[t] & n,
                i = !e && e ^ (u[t] & n);
              return i ? a[t] : null;
            });
            s.filter(s.REM, (t) => {
              const e = o[t] & n,
                i = e && !(e ^ (e ^ (u[t] & n)));
              return i ? a[t] : null;
            });
          }
          return s.filter(s.SOURCE, (t) => l(t._index));
        },
      });
      const t$ = "RawCode";
      const e$ = "Literal";
      const n$ = "Property";
      const i$ = "Identifier";
      const r$ = "ArrayExpression";
      const s$ = "BinaryExpression";
      const a$ = "CallExpression";
      const o$ = "ConditionalExpression";
      const u$ = "LogicalExpression";
      const l$ = "MemberExpression";
      const c$ = "ObjectExpression";
      const f$ = "UnaryExpression";
      function d$(t) {
        this.type = t;
      }
      d$.prototype.visit = function (t) {
        let e, n, i;
        if (t(this)) return 1;
        for (e = h$(this), n = 0, i = e.length; n < i; ++n) {
          if (e[n].visit(t)) return 1;
        }
      };
      function h$(t) {
        switch (t.type) {
          case r$:
            return t.elements;
          case s$:
          case u$:
            return [t.left, t.right];
          case a$:
            return [t.callee].concat(t.arguments);
          case o$:
            return [t.test, t.consequent, t.alternate];
          case l$:
            return [t.object, t.property];
          case c$:
            return t.properties;
          case n$:
            return [t.key, t.value];
          case f$:
            return [t.argument];
          case i$:
          case e$:
          case t$:
          default:
            return [];
        }
      }
      var p$, m$, g$, y$, v$;
      var b$ = 1,
        x$ = 2,
        _$ = 3,
        w$ = 4,
        A$ = 5,
        k$ = 6,
        E$ = 7,
        M$ = 8,
        D$ = 9;
      p$ = {};
      p$[b$] = "Boolean";
      p$[x$] = "<end>";
      p$[_$] = "Identifier";
      p$[w$] = "Keyword";
      p$[A$] = "Null";
      p$[k$] = "Numeric";
      p$[E$] = "Punctuator";
      p$[M$] = "String";
      p$[D$] = "RegularExpression";
      var C$ = "ArrayExpression",
        F$ = "BinaryExpression",
        S$ = "CallExpression",
        B$ = "ConditionalExpression",
        z$ = "Identifier",
        $$ = "Literal",
        R$ = "LogicalExpression",
        O$ = "MemberExpression",
        T$ = "ObjectExpression",
        N$ = "Property",
        L$ = "UnaryExpression";
      var P$ = "Unexpected token %0",
        q$ = "Unexpected number",
        I$ = "Unexpected string",
        U$ = "Unexpected identifier",
        j$ = "Unexpected reserved word",
        G$ = "Unexpected end of input",
        Y$ = "Invalid regular expression",
        W$ = "Invalid regular expression: missing /",
        X$ = "Octal literals are not allowed in strict mode.",
        H$ = "Duplicate data property in object literal not allowed in strict mode";
      var V$ = "ILLEGAL",
        Q$ = "Disabled.";
      var K$ = new RegExp(
          "[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"
        ),
        Z$ = new RegExp(
          "[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"
        );
      function J$(t, e) {
        if (!t) {
          throw new Error("ASSERT: " + e);
        }
      }
      function tR(t) {
        return t >= 48 && t <= 57;
      }
      function eR(t) {
        return "0123456789abcdefABCDEF".includes(t);
      }
      function nR(t) {
        return "01234567".includes(t);
      }
      function iR(t) {
        return (
          t === 32 ||
          t === 9 ||
          t === 11 ||
          t === 12 ||
          t === 160 ||
          (t >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(t))
        );
      }
      function rR(t) {
        return t === 10 || t === 13 || t === 8232 || t === 8233;
      }
      function sR(t) {
        return t === 36 || t === 95 || (t >= 65 && t <= 90) || (t >= 97 && t <= 122) || t === 92 || (t >= 128 && K$.test(String.fromCharCode(t)));
      }
      function aR(t) {
        return (
          t === 36 ||
          t === 95 ||
          (t >= 65 && t <= 90) ||
          (t >= 97 && t <= 122) ||
          (t >= 48 && t <= 57) ||
          t === 92 ||
          (t >= 128 && Z$.test(String.fromCharCode(t)))
        );
      }
      const oR = {
        if: 1,
        in: 1,
        do: 1,
        var: 1,
        for: 1,
        new: 1,
        try: 1,
        let: 1,
        this: 1,
        else: 1,
        case: 1,
        void: 1,
        with: 1,
        enum: 1,
        while: 1,
        break: 1,
        catch: 1,
        throw: 1,
        const: 1,
        yield: 1,
        class: 1,
        super: 1,
        return: 1,
        typeof: 1,
        delete: 1,
        switch: 1,
        export: 1,
        import: 1,
        public: 1,
        static: 1,
        default: 1,
        finally: 1,
        extends: 1,
        package: 1,
        private: 1,
        function: 1,
        continue: 1,
        debugger: 1,
        interface: 1,
        protected: 1,
        instanceof: 1,
        implements: 1,
      };
      function uR() {
        while (g$ < y$) {
          const t = m$.charCodeAt(g$);
          if (iR(t) || rR(t)) {
            ++g$;
          } else {
            break;
          }
        }
      }
      function lR(t) {
        var e,
          n,
          i,
          r = 0;
        n = t === "u" ? 4 : 2;
        for (e = 0; e < n; ++e) {
          if (g$ < y$ && eR(m$[g$])) {
            i = m$[g$++];
            r = r * 16 + "0123456789abcdef".indexOf(i.toLowerCase());
          } else {
            NR({}, P$, V$);
          }
        }
        return String.fromCharCode(r);
      }
      function cR() {
        var t, e, n, i;
        t = m$[g$];
        e = 0;
        if (t === "}") {
          NR({}, P$, V$);
        }
        while (g$ < y$) {
          t = m$[g$++];
          if (!eR(t)) {
            break;
          }
          e = e * 16 + "0123456789abcdef".indexOf(t.toLowerCase());
        }
        if (e > 1114111 || t !== "}") {
          NR({}, P$, V$);
        }
        if (e <= 65535) {
          return String.fromCharCode(e);
        }
        n = ((e - 65536) >> 10) + 55296;
        i = ((e - 65536) & 1023) + 56320;
        return String.fromCharCode(n, i);
      }
      function fR() {
        var t, e;
        t = m$.charCodeAt(g$++);
        e = String.fromCharCode(t);
        if (t === 92) {
          if (m$.charCodeAt(g$) !== 117) {
            NR({}, P$, V$);
          }
          ++g$;
          t = lR("u");
          if (!t || t === "\\" || !sR(t.charCodeAt(0))) {
            NR({}, P$, V$);
          }
          e = t;
        }
        while (g$ < y$) {
          t = m$.charCodeAt(g$);
          if (!aR(t)) {
            break;
          }
          ++g$;
          e += String.fromCharCode(t);
          if (t === 92) {
            e = e.substr(0, e.length - 1);
            if (m$.charCodeAt(g$) !== 117) {
              NR({}, P$, V$);
            }
            ++g$;
            t = lR("u");
            if (!t || t === "\\" || !aR(t.charCodeAt(0))) {
              NR({}, P$, V$);
            }
            e += t;
          }
        }
        return e;
      }
      function dR() {
        var t, e;
        t = g$++;
        while (g$ < y$) {
          e = m$.charCodeAt(g$);
          if (e === 92) {
            g$ = t;
            return fR();
          }
          if (aR(e)) {
            ++g$;
          } else {
            break;
          }
        }
        return m$.slice(t, g$);
      }
      function hR() {
        var t, e, n;
        t = g$;
        e = m$.charCodeAt(g$) === 92 ? fR() : dR();
        if (e.length === 1) {
          n = _$;
        } else if (oR.hasOwnProperty(e)) {
          n = w$;
        } else if (e === "null") {
          n = A$;
        } else if (e === "true" || e === "false") {
          n = b$;
        } else {
          n = _$;
        }
        return { type: n, value: e, start: t, end: g$ };
      }
      function pR() {
        var t = g$,
          e = m$.charCodeAt(g$),
          n,
          i = m$[g$],
          r,
          s,
          a;
        switch (e) {
          case 46:
          case 40:
          case 41:
          case 59:
          case 44:
          case 123:
          case 125:
          case 91:
          case 93:
          case 58:
          case 63:
          case 126:
            ++g$;
            return { type: E$, value: String.fromCharCode(e), start: t, end: g$ };
          default:
            n = m$.charCodeAt(g$ + 1);
            if (n === 61) {
              switch (e) {
                case 43:
                case 45:
                case 47:
                case 60:
                case 62:
                case 94:
                case 124:
                case 37:
                case 38:
                case 42:
                  g$ += 2;
                  return { type: E$, value: String.fromCharCode(e) + String.fromCharCode(n), start: t, end: g$ };
                case 33:
                case 61:
                  g$ += 2;
                  if (m$.charCodeAt(g$) === 61) {
                    ++g$;
                  }
                  return { type: E$, value: m$.slice(t, g$), start: t, end: g$ };
              }
            }
        }
        a = m$.substr(g$, 4);
        if (a === ">>>=") {
          g$ += 4;
          return { type: E$, value: a, start: t, end: g$ };
        }
        s = a.substr(0, 3);
        if (s === ">>>" || s === "<<=" || s === ">>=") {
          g$ += 3;
          return { type: E$, value: s, start: t, end: g$ };
        }
        r = s.substr(0, 2);
        if ((i === r[1] && "+-<>&|".includes(i)) || r === "=>") {
          g$ += 2;
          return { type: E$, value: r, start: t, end: g$ };
        }
        if (r === "//") {
          NR({}, P$, V$);
        }
        if ("<>=!+-*%&|^/".includes(i)) {
          ++g$;
          return { type: E$, value: i, start: t, end: g$ };
        }
        NR({}, P$, V$);
      }
      function mR(t) {
        let e = "";
        while (g$ < y$) {
          if (!eR(m$[g$])) {
            break;
          }
          e += m$[g$++];
        }
        if (e.length === 0) {
          NR({}, P$, V$);
        }
        if (sR(m$.charCodeAt(g$))) {
          NR({}, P$, V$);
        }
        return { type: k$, value: parseInt("0x" + e, 16), start: t, end: g$ };
      }
      function gR(t) {
        let e = "0" + m$[g$++];
        while (g$ < y$) {
          if (!nR(m$[g$])) {
            break;
          }
          e += m$[g$++];
        }
        if (sR(m$.charCodeAt(g$)) || tR(m$.charCodeAt(g$))) {
          NR({}, P$, V$);
        }
        return { type: k$, value: parseInt(e, 8), octal: true, start: t, end: g$ };
      }
      function yR() {
        var t, e, n;
        n = m$[g$];
        J$(tR(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point");
        e = g$;
        t = "";
        if (n !== ".") {
          t = m$[g$++];
          n = m$[g$];
          if (t === "0") {
            if (n === "x" || n === "X") {
              ++g$;
              return mR(e);
            }
            if (nR(n)) {
              return gR(e);
            }
            if (n && tR(n.charCodeAt(0))) {
              NR({}, P$, V$);
            }
          }
          while (tR(m$.charCodeAt(g$))) {
            t += m$[g$++];
          }
          n = m$[g$];
        }
        if (n === ".") {
          t += m$[g$++];
          while (tR(m$.charCodeAt(g$))) {
            t += m$[g$++];
          }
          n = m$[g$];
        }
        if (n === "e" || n === "E") {
          t += m$[g$++];
          n = m$[g$];
          if (n === "+" || n === "-") {
            t += m$[g$++];
          }
          if (tR(m$.charCodeAt(g$))) {
            while (tR(m$.charCodeAt(g$))) {
              t += m$[g$++];
            }
          } else {
            NR({}, P$, V$);
          }
        }
        if (sR(m$.charCodeAt(g$))) {
          NR({}, P$, V$);
        }
        return { type: k$, value: parseFloat(t), start: e, end: g$ };
      }
      function vR() {
        var t = "",
          e,
          n,
          i,
          r,
          s = false;
        e = m$[g$];
        J$(e === "'" || e === '"', "String literal must starts with a quote");
        n = g$;
        ++g$;
        while (g$ < y$) {
          i = m$[g$++];
          if (i === e) {
            e = "";
            break;
          } else if (i === "\\") {
            i = m$[g$++];
            if (!i || !rR(i.charCodeAt(0))) {
              switch (i) {
                case "u":
                case "x":
                  if (m$[g$] === "{") {
                    ++g$;
                    t += cR();
                  } else {
                    t += lR(i);
                  }
                  break;
                case "n":
                  t += "\n";
                  break;
                case "r":
                  t += "\r";
                  break;
                case "t":
                  t += "\t";
                  break;
                case "b":
                  t += "\b";
                  break;
                case "f":
                  t += "\f";
                  break;
                case "v":
                  t += "\v";
                  break;
                default:
                  if (nR(i)) {
                    r = "01234567".indexOf(i);
                    if (r !== 0) {
                      s = true;
                    }
                    if (g$ < y$ && nR(m$[g$])) {
                      s = true;
                      r = r * 8 + "01234567".indexOf(m$[g$++]);
                      if ("0123".includes(i) && g$ < y$ && nR(m$[g$])) {
                        r = r * 8 + "01234567".indexOf(m$[g$++]);
                      }
                    }
                    t += String.fromCharCode(r);
                  } else {
                    t += i;
                  }
                  break;
              }
            } else {
              if (i === "\r" && m$[g$] === "\n") {
                ++g$;
              }
            }
          } else if (rR(i.charCodeAt(0))) {
            break;
          } else {
            t += i;
          }
        }
        if (e !== "") {
          NR({}, P$, V$);
        }
        return { type: M$, value: t, octal: s, start: n, end: g$ };
      }
      function bR(t, e) {
        let n = t;
        if (e.includes("u")) {
          n = n
            .replace(/\\u\{([0-9a-fA-F]+)\}/g, (t, e) => {
              if (parseInt(e, 16) <= 1114111) {
                return "x";
              }
              NR({}, Y$);
            })
            .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x");
        }
        try {
          new RegExp(n);
        } catch (i) {
          NR({}, Y$);
        }
        try {
          return new RegExp(t, e);
        } catch (r) {
          return null;
        }
      }
      function xR() {
        var t, e, n, i, r;
        t = m$[g$];
        J$(t === "/", "Regular expression literal must start with a slash");
        e = m$[g$++];
        n = false;
        i = false;
        while (g$ < y$) {
          t = m$[g$++];
          e += t;
          if (t === "\\") {
            t = m$[g$++];
            if (rR(t.charCodeAt(0))) {
              NR({}, W$);
            }
            e += t;
          } else if (rR(t.charCodeAt(0))) {
            NR({}, W$);
          } else if (n) {
            if (t === "]") {
              n = false;
            }
          } else {
            if (t === "/") {
              i = true;
              break;
            } else if (t === "[") {
              n = true;
            }
          }
        }
        if (!i) {
          NR({}, W$);
        }
        r = e.substr(1, e.length - 2);
        return { value: r, literal: e };
      }
      function _R() {
        var t, e, n;
        e = "";
        n = "";
        while (g$ < y$) {
          t = m$[g$];
          if (!aR(t.charCodeAt(0))) {
            break;
          }
          ++g$;
          if (t === "\\" && g$ < y$) {
            NR({}, P$, V$);
          } else {
            n += t;
            e += t;
          }
        }
        if (n.search(/[^gimuy]/g) >= 0) {
          NR({}, Y$, n);
        }
        return { value: n, literal: e };
      }
      function wR() {
        var t, e, n, i;
        v$ = null;
        uR();
        t = g$;
        e = xR();
        n = _R();
        i = bR(e.value, n.value);
        return { literal: e.literal + n.literal, value: i, regex: { pattern: e.value, flags: n.value }, start: t, end: g$ };
      }
      function AR(t) {
        return t.type === _$ || t.type === w$ || t.type === b$ || t.type === A$;
      }
      function kR() {
        uR();
        if (g$ >= y$) {
          return { type: x$, start: g$, end: g$ };
        }
        const t = m$.charCodeAt(g$);
        if (sR(t)) {
          return hR();
        }
        if (t === 40 || t === 41 || t === 59) {
          return pR();
        }
        if (t === 39 || t === 34) {
          return vR();
        }
        if (t === 46) {
          if (tR(m$.charCodeAt(g$ + 1))) {
            return yR();
          }
          return pR();
        }
        if (tR(t)) {
          return yR();
        }
        return pR();
      }
      function ER() {
        const t = v$;
        g$ = t.end;
        v$ = kR();
        g$ = t.end;
        return t;
      }
      function MR() {
        const t = g$;
        v$ = kR();
        g$ = t;
      }
      function DR(t) {
        const e = new d$(C$);
        e.elements = t;
        return e;
      }
      function CR(t, e, n) {
        const i = new d$(t === "||" || t === "&&" ? R$ : F$);
        i.operator = t;
        i.left = e;
        i.right = n;
        return i;
      }
      function FR(t, e) {
        const n = new d$(S$);
        n.callee = t;
        n.arguments = e;
        return n;
      }
      function SR(t, e, n) {
        const i = new d$(B$);
        i.test = t;
        i.consequent = e;
        i.alternate = n;
        return i;
      }
      function BR(t) {
        const e = new d$(z$);
        e.name = t;
        return e;
      }
      function zR(t) {
        const e = new d$($$);
        e.value = t.value;
        e.raw = m$.slice(t.start, t.end);
        if (t.regex) {
          if (e.raw === "//") {
            e.raw = "/(?:)/";
          }
          e.regex = t.regex;
        }
        return e;
      }
      function $R(t, e, n) {
        const i = new d$(O$);
        i.computed = t === "[";
        i.object = e;
        i.property = n;
        if (!i.computed) n.member = true;
        return i;
      }
      function RR(t) {
        const e = new d$(T$);
        e.properties = t;
        return e;
      }
      function OR(t, e, n) {
        const i = new d$(N$);
        i.key = e;
        i.value = n;
        i.kind = t;
        return i;
      }
      function TR(t, e) {
        const n = new d$(L$);
        n.operator = t;
        n.argument = e;
        n.prefix = true;
        return n;
      }
      function NR(t, e) {
        var n,
          i = Array.prototype.slice.call(arguments, 2),
          r = e.replace(/%(\d)/g, (t, e) => {
            J$(e < i.length, "Message reference must be in range");
            return i[e];
          });
        n = new Error(r);
        n.index = g$;
        n.description = r;
        throw n;
      }
      function LR(t) {
        if (t.type === x$) {
          NR(t, G$);
        }
        if (t.type === k$) {
          NR(t, q$);
        }
        if (t.type === M$) {
          NR(t, I$);
        }
        if (t.type === _$) {
          NR(t, U$);
        }
        if (t.type === w$) {
          NR(t, j$);
        }
        NR(t, P$, t.value);
      }
      function PR(t) {
        const e = ER();
        if (e.type !== E$ || e.value !== t) {
          LR(e);
        }
      }
      function qR(t) {
        return v$.type === E$ && v$.value === t;
      }
      function IR(t) {
        return v$.type === w$ && v$.value === t;
      }
      function UR() {
        const t = [];
        g$ = v$.start;
        PR("[");
        while (!qR("]")) {
          if (qR(",")) {
            ER();
            t.push(null);
          } else {
            t.push(rO());
            if (!qR("]")) {
              PR(",");
            }
          }
        }
        ER();
        return DR(t);
      }
      function jR() {
        g$ = v$.start;
        const t = ER();
        if (t.type === M$ || t.type === k$) {
          if (t.octal) {
            NR(t, X$);
          }
          return zR(t);
        }
        return BR(t.value);
      }
      function GR() {
        var t, e, n, i;
        g$ = v$.start;
        t = v$;
        if (t.type === _$) {
          n = jR();
          PR(":");
          i = rO();
          return OR("init", n, i);
        }
        if (t.type === x$ || t.type === E$) {
          LR(t);
        } else {
          e = jR();
          PR(":");
          i = rO();
          return OR("init", e, i);
        }
      }
      function YR() {
        var t = [],
          e,
          n,
          i,
          r = {},
          s = String;
        g$ = v$.start;
        PR("{");
        while (!qR("}")) {
          e = GR();
          if (e.key.type === z$) {
            n = e.key.name;
          } else {
            n = s(e.key.value);
          }
          i = "$" + n;
          if (Object.prototype.hasOwnProperty.call(r, i)) {
            NR({}, H$);
          } else {
            r[i] = true;
          }
          t.push(e);
          if (!qR("}")) {
            PR(",");
          }
        }
        PR("}");
        return RR(t);
      }
      function WR() {
        PR("(");
        const t = sO();
        PR(")");
        return t;
      }
      const XR = { if: 1 };
      function HR() {
        var t, e, n;
        if (qR("(")) {
          return WR();
        }
        if (qR("[")) {
          return UR();
        }
        if (qR("{")) {
          return YR();
        }
        t = v$.type;
        g$ = v$.start;
        if (t === _$ || XR[v$.value]) {
          n = BR(ER().value);
        } else if (t === M$ || t === k$) {
          if (v$.octal) {
            NR(v$, X$);
          }
          n = zR(ER());
        } else if (t === w$) {
          throw new Error(Q$);
        } else if (t === b$) {
          e = ER();
          e.value = e.value === "true";
          n = zR(e);
        } else if (t === A$) {
          e = ER();
          e.value = null;
          n = zR(e);
        } else if (qR("/") || qR("/=")) {
          n = zR(wR());
          MR();
        } else {
          LR(ER());
        }
        return n;
      }
      function VR() {
        const t = [];
        PR("(");
        if (!qR(")")) {
          while (g$ < y$) {
            t.push(rO());
            if (qR(")")) {
              break;
            }
            PR(",");
          }
        }
        PR(")");
        return t;
      }
      function QR() {
        g$ = v$.start;
        const t = ER();
        if (!AR(t)) {
          LR(t);
        }
        return BR(t.value);
      }
      function KR() {
        PR(".");
        return QR();
      }
      function ZR() {
        PR("[");
        const t = sO();
        PR("]");
        return t;
      }
      function JR() {
        var t, e, n;
        t = HR();
        for (;;) {
          if (qR(".")) {
            n = KR();
            t = $R(".", t, n);
          } else if (qR("(")) {
            e = VR();
            t = FR(t, e);
          } else if (qR("[")) {
            n = ZR();
            t = $R("[", t, n);
          } else {
            break;
          }
        }
        return t;
      }
      function tO() {
        const t = JR();
        if (v$.type === E$) {
          if (qR("++") || qR("--")) {
            throw new Error(Q$);
          }
        }
        return t;
      }
      function eO() {
        var t, e;
        if (v$.type !== E$ && v$.type !== w$) {
          e = tO();
        } else if (qR("++") || qR("--")) {
          throw new Error(Q$);
        } else if (qR("+") || qR("-") || qR("~") || qR("!")) {
          t = ER();
          e = eO();
          e = TR(t.value, e);
        } else if (IR("delete") || IR("void") || IR("typeof")) {
          throw new Error(Q$);
        } else {
          e = tO();
        }
        return e;
      }
      function nO(t) {
        let e = 0;
        if (t.type !== E$ && t.type !== w$) {
          return 0;
        }
        switch (t.value) {
          case "||":
            e = 1;
            break;
          case "&&":
            e = 2;
            break;
          case "|":
            e = 3;
            break;
          case "^":
            e = 4;
            break;
          case "&":
            e = 5;
            break;
          case "==":
          case "!=":
          case "===":
          case "!==":
            e = 6;
            break;
          case "<":
          case ">":
          case "<=":
          case ">=":
          case "instanceof":
          case "in":
            e = 7;
            break;
          case "<<":
          case ">>":
          case ">>>":
            e = 8;
            break;
          case "+":
          case "-":
            e = 9;
            break;
          case "*":
          case "/":
          case "%":
            e = 11;
            break;
        }
        return e;
      }
      function iO() {
        var t, e, n, i, r, s, a, o, u, l;
        t = v$;
        u = eO();
        i = v$;
        r = nO(i);
        if (r === 0) {
          return u;
        }
        i.prec = r;
        ER();
        e = [t, v$];
        a = eO();
        s = [u, i, a];
        while ((r = nO(v$)) > 0) {
          while (s.length > 2 && r <= s[s.length - 2].prec) {
            a = s.pop();
            o = s.pop().value;
            u = s.pop();
            e.pop();
            n = CR(o, u, a);
            s.push(n);
          }
          i = ER();
          i.prec = r;
          s.push(i);
          e.push(v$);
          n = eO();
          s.push(n);
        }
        l = s.length - 1;
        n = s[l];
        e.pop();
        while (l > 1) {
          e.pop();
          n = CR(s[l - 1].value, s[l - 2], n);
          l -= 2;
        }
        return n;
      }
      function rO() {
        var t, e, n;
        t = iO();
        if (qR("?")) {
          ER();
          e = rO();
          PR(":");
          n = rO();
          t = SR(t, e, n);
        }
        return t;
      }
      function sO() {
        const t = rO();
        if (qR(",")) {
          throw new Error(Q$);
        }
        return t;
      }
      function aO(t) {
        m$ = t;
        g$ = 0;
        y$ = m$.length;
        v$ = null;
        MR();
        const e = sO();
        if (v$.type !== x$) {
          throw new Error("Unexpect token after expression.");
        }
        return e;
      }
      var oO = {
        NaN: "NaN",
        E: "Math.E",
        LN2: "Math.LN2",
        LN10: "Math.LN10",
        LOG2E: "Math.LOG2E",
        LOG10E: "Math.LOG10E",
        PI: "Math.PI",
        SQRT1_2: "Math.SQRT1_2",
        SQRT2: "Math.SQRT2",
        MIN_VALUE: "Number.MIN_VALUE",
        MAX_VALUE: "Number.MAX_VALUE",
      };
      function uO(t) {
        function e(e, n, i, r) {
          let s = t(n[0]);
          if (i) {
            s = i + "(" + s + ")";
            if (i.lastIndexOf("new ", 0) === 0) s = "(" + s + ")";
          }
          return s + "." + e + (r < 0 ? "" : r === 0 ? "()" : "(" + n.slice(1).map(t).join(",") + ")");
        }
        function n(t, n, i) {
          return (r) => e(t, r, n, i);
        }
        const i = "new Date",
          r = "String",
          s = "RegExp";
        return {
          isNaN: "Number.isNaN",
          isFinite: "Number.isFinite",
          abs: "Math.abs",
          acos: "Math.acos",
          asin: "Math.asin",
          atan: "Math.atan",
          atan2: "Math.atan2",
          ceil: "Math.ceil",
          cos: "Math.cos",
          exp: "Math.exp",
          floor: "Math.floor",
          hypot: "Math.hypot",
          log: "Math.log",
          max: "Math.max",
          min: "Math.min",
          pow: "Math.pow",
          random: "Math.random",
          round: "Math.round",
          sin: "Math.sin",
          sqrt: "Math.sqrt",
          tan: "Math.tan",
          clamp: function (e) {
            if (e.length < 3) (0, p.z3)("Missing arguments to clamp function.");
            if (e.length > 3) (0, p.z3)("Too many arguments to clamp function.");
            const n = e.map(t);
            return "Math.max(" + n[1] + ", Math.min(" + n[2] + "," + n[0] + "))";
          },
          now: "Date.now",
          utc: "Date.UTC",
          datetime: i,
          date: n("getDate", i, 0),
          day: n("getDay", i, 0),
          year: n("getFullYear", i, 0),
          month: n("getMonth", i, 0),
          hours: n("getHours", i, 0),
          minutes: n("getMinutes", i, 0),
          seconds: n("getSeconds", i, 0),
          milliseconds: n("getMilliseconds", i, 0),
          time: n("getTime", i, 0),
          timezoneoffset: n("getTimezoneOffset", i, 0),
          utcdate: n("getUTCDate", i, 0),
          utcday: n("getUTCDay", i, 0),
          utcyear: n("getUTCFullYear", i, 0),
          utcmonth: n("getUTCMonth", i, 0),
          utchours: n("getUTCHours", i, 0),
          utcminutes: n("getUTCMinutes", i, 0),
          utcseconds: n("getUTCSeconds", i, 0),
          utcmilliseconds: n("getUTCMilliseconds", i, 0),
          length: n("length", null, -1),
          parseFloat: "parseFloat",
          parseInt: "parseInt",
          upper: n("toUpperCase", r, 0),
          lower: n("toLowerCase", r, 0),
          substring: n("substring", r),
          split: n("split", r),
          trim: n("trim", r, 0),
          btoa: "btoa",
          atob: "atob",
          regexp: s,
          test: n("test", s),
          if: function (e) {
            if (e.length < 3) (0, p.z3)("Missing arguments to if function.");
            if (e.length > 3) (0, p.z3)("Too many arguments to if function.");
            const n = e.map(t);
            return "(" + n[0] + "?" + n[1] + ":" + n[2] + ")";
          },
        };
      }
      function lO(t) {
        const e = t && t.length - 1;
        return e && ((t[0] === '"' && t[e] === '"') || (t[0] === "'" && t[e] === "'")) ? t.slice(1, -1) : t;
      }
      function cO(t) {
        t = t || {};
        const e = t.allowed ? (0, p.M1)(t.allowed) : {},
          n = t.forbidden ? (0, p.M1)(t.forbidden) : {},
          i = t.constants || oO,
          r = (t.functions || uO)(f),
          s = t.globalvar,
          a = t.fieldvar,
          o = (0, p.Tn)(s) ? s : (t) => `${s}["${t}"]`;
        let u = {},
          l = {},
          c = 0;
        function f(t) {
          if ((0, p.Kg)(t)) return t;
          const e = d[t.type];
          if (e == null) (0, p.z3)("Unsupported type: " + t.type);
          return e(t);
        }
        const d = {
          Literal: (t) => t.raw,
          Identifier: (t) => {
            const r = t.name;
            if (c > 0) {
              return r;
            } else if ((0, p.mQ)(n, r)) {
              return (0, p.z3)("Illegal identifier: " + r);
            } else if ((0, p.mQ)(i, r)) {
              return i[r];
            } else if ((0, p.mQ)(e, r)) {
              return r;
            } else {
              u[r] = 1;
              return o(r);
            }
          },
          MemberExpression: (t) => {
            const e = !t.computed,
              n = f(t.object);
            if (e) c += 1;
            const i = f(t.property);
            if (n === a) {
              l[lO(i)] = 1;
            }
            if (e) c -= 1;
            return n + (e ? "." + i : "[" + i + "]");
          },
          CallExpression: (t) => {
            if (t.callee.type !== "Identifier") {
              (0, p.z3)("Illegal callee type: " + t.callee.type);
            }
            const e = t.callee.name,
              n = t.arguments,
              i = (0, p.mQ)(r, e) && r[e];
            if (!i) (0, p.z3)("Unrecognized function: " + e);
            return (0, p.Tn)(i) ? i(n) : i + "(" + n.map(f).join(",") + ")";
          },
          ArrayExpression: (t) => "[" + t.elements.map(f).join(",") + "]",
          BinaryExpression: (t) => "(" + f(t.left) + " " + t.operator + " " + f(t.right) + ")",
          UnaryExpression: (t) => "(" + t.operator + f(t.argument) + ")",
          ConditionalExpression: (t) => "(" + f(t.test) + "?" + f(t.consequent) + ":" + f(t.alternate) + ")",
          LogicalExpression: (t) => "(" + f(t.left) + t.operator + f(t.right) + ")",
          ObjectExpression: (t) => "{" + t.properties.map(f).join(",") + "}",
          Property: (t) => {
            c += 1;
            const e = f(t.key);
            c -= 1;
            return e + ":" + f(t.value);
          },
        };
        function h(t) {
          const e = { code: f(t), globals: Object.keys(u), fields: Object.keys(l) };
          u = {};
          l = {};
          return e;
        }
        h.functions = r;
        h.constants = i;
        return h;
      }
      var fO = new ax();
      var dO = new ax(),
        hO,
        pO,
        mO,
        gO,
        yO;
      var vO = {
        point: Rx,
        lineStart: Rx,
        lineEnd: Rx,
        polygonStart: function () {
          fO = new ax();
          vO.lineStart = bO;
          vO.lineEnd = xO;
        },
        polygonEnd: function () {
          var t = +fO;
          dO.add(t < 0 ? px + t : t);
          this.lineStart = this.lineEnd = this.point = Rx;
        },
        sphere: function () {
          dO.add(px);
        },
      };
      function bO() {
        vO.point = _O;
      }
      function xO() {
        wO(hO, pO);
      }
      function _O(t, e) {
        vO.point = wO;
        (hO = t), (pO = e);
        (t *= gx), (e *= gx);
        (mO = t), (gO = xx((e = e / 2 + hx))), (yO = Dx(e));
      }
      function wO(t, e) {
        (t *= gx), (e *= gx);
        e = e / 2 + hx;
        var n = t - mO,
          i = n >= 0 ? 1 : -1,
          r = i * n,
          s = xx(e),
          a = Dx(e),
          o = yO * a,
          u = gO * s + o * xx(r),
          l = o * i * Dx(r);
        fO.add(bx(l, u));
        (mO = t), (gO = s), (yO = a);
      }
      function AO(t) {
        dO = new ax();
        sx(t, vO);
        return dO * 2;
      }
      var kO, EO, MO, DO, CO, FO, SO, BO, zO, $O, RO;
      var OO = {
        point: TO,
        lineStart: LO,
        lineEnd: PO,
        polygonStart: function () {
          OO.point = qO;
          OO.lineStart = IO;
          OO.lineEnd = UO;
          zO = new ax();
          vO.polygonStart();
        },
        polygonEnd: function () {
          vO.polygonEnd();
          OO.point = TO;
          OO.lineStart = LO;
          OO.lineEnd = PO;
          if (fO < 0) (kO = -(MO = 180)), (EO = -(DO = 90));
          else if (zO > lx) DO = 90;
          else if (zO < -lx) EO = -90;
          (RO[0] = kO), (RO[1] = MO);
        },
        sphere: function () {
          (kO = -(MO = 180)), (EO = -(DO = 90));
        },
      };
      function TO(t, e) {
        $O.push((RO = [(kO = t), (MO = t)]));
        if (e < EO) EO = e;
        if (e > DO) DO = e;
      }
      function NO(t, e) {
        var n = V_([t * gx, e * gx]);
        if (BO) {
          var i = K_(BO, n),
            r = [i[1], -i[0], 0],
            s = K_(r, i);
          tw(s);
          s = H_(s);
          var a = t - CO,
            o = a > 0 ? 1 : -1,
            u = s[0] * mx * o,
            l,
            c = yx(a) > 180;
          if (c ^ (o * CO < u && u < o * t)) {
            l = s[1] * mx;
            if (l > DO) DO = l;
          } else if (((u = ((u + 360) % 360) - 180), c ^ (o * CO < u && u < o * t))) {
            l = -s[1] * mx;
            if (l < EO) EO = l;
          } else {
            if (e < EO) EO = e;
            if (e > DO) DO = e;
          }
          if (c) {
            if (t < CO) {
              if (jO(kO, t) > jO(kO, MO)) MO = t;
            } else {
              if (jO(t, MO) > jO(kO, MO)) kO = t;
            }
          } else {
            if (MO >= kO) {
              if (t < kO) kO = t;
              if (t > MO) MO = t;
            } else {
              if (t > CO) {
                if (jO(kO, t) > jO(kO, MO)) MO = t;
              } else {
                if (jO(t, MO) > jO(kO, MO)) kO = t;
              }
            }
          }
        } else {
          $O.push((RO = [(kO = t), (MO = t)]));
        }
        if (e < EO) EO = e;
        if (e > DO) DO = e;
        (BO = n), (CO = t);
      }
      function LO() {
        OO.point = NO;
      }
      function PO() {
        (RO[0] = kO), (RO[1] = MO);
        OO.point = TO;
        BO = null;
      }
      function qO(t, e) {
        if (BO) {
          var n = t - CO;
          zO.add(yx(n) > 180 ? n + (n > 0 ? 360 : -360) : n);
        } else {
          (FO = t), (SO = e);
        }
        vO.point(t, e);
        NO(t, e);
      }
      function IO() {
        vO.lineStart();
      }
      function UO() {
        qO(FO, SO);
        vO.lineEnd();
        if (yx(zO) > lx) kO = -(MO = 180);
        (RO[0] = kO), (RO[1] = MO);
        BO = null;
      }
      function jO(t, e) {
        return (e -= t) < 0 ? e + 360 : e;
      }
      function GO(t, e) {
        return t[0] - e[0];
      }
      function YO(t, e) {
        return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e;
      }
      function WO(t) {
        var e, n, i, r, s, a, o;
        DO = MO = -(kO = EO = Infinity);
        $O = [];
        sx(t, OO);
        if ((n = $O.length)) {
          $O.sort(GO);
          for (e = 1, i = $O[0], s = [i]; e < n; ++e) {
            r = $O[e];
            if (YO(i, r[0]) || YO(i, r[1])) {
              if (jO(i[0], r[1]) > jO(i[0], i[1])) i[1] = r[1];
              if (jO(r[0], i[1]) > jO(i[0], i[1])) i[0] = r[0];
            } else {
              s.push((i = r));
            }
          }
          for (a = -Infinity, n = s.length - 1, e = 0, i = s[n]; e <= n; i = r, ++e) {
            r = s[e];
            if ((o = jO(i[1], r[0])) > a) (a = o), (kO = r[0]), (MO = i[1]);
          }
        }
        $O = RO = null;
        return kO === Infinity || EO === Infinity
          ? [
              [NaN, NaN],
              [NaN, NaN],
            ]
          : [
              [kO, EO],
              [MO, DO],
            ];
      }
      var XO, HO, VO, QO, KO, ZO, JO, tT, eT, nT, iT, rT, sT, aT, oT, uT;
      var lT = {
        sphere: Rx,
        point: cT,
        lineStart: dT,
        lineEnd: mT,
        polygonStart: function () {
          lT.lineStart = gT;
          lT.lineEnd = yT;
        },
        polygonEnd: function () {
          lT.lineStart = dT;
          lT.lineEnd = mT;
        },
      };
      function cT(t, e) {
        (t *= gx), (e *= gx);
        var n = xx(e);
        fT(n * xx(t), n * Dx(t), Dx(e));
      }
      function fT(t, e, n) {
        ++XO;
        VO += (t - VO) / XO;
        QO += (e - QO) / XO;
        KO += (n - KO) / XO;
      }
      function dT() {
        lT.point = hT;
      }
      function hT(t, e) {
        (t *= gx), (e *= gx);
        var n = xx(e);
        aT = n * xx(t);
        oT = n * Dx(t);
        uT = Dx(e);
        lT.point = pT;
        fT(aT, oT, uT);
      }
      function pT(t, e) {
        (t *= gx), (e *= gx);
        var n = xx(e),
          i = n * xx(t),
          r = n * Dx(t),
          s = Dx(e),
          a = bx(Fx((a = oT * s - uT * r) * a + (a = uT * i - aT * s) * a + (a = aT * r - oT * i) * a), aT * i + oT * r + uT * s);
        HO += a;
        ZO += a * (aT + (aT = i));
        JO += a * (oT + (oT = r));
        tT += a * (uT + (uT = s));
        fT(aT, oT, uT);
      }
      function mT() {
        lT.point = cT;
      }
      function gT() {
        lT.point = vT;
      }
      function yT() {
        bT(rT, sT);
        lT.point = cT;
      }
      function vT(t, e) {
        (rT = t), (sT = e);
        (t *= gx), (e *= gx);
        lT.point = bT;
        var n = xx(e);
        aT = n * xx(t);
        oT = n * Dx(t);
        uT = Dx(e);
        fT(aT, oT, uT);
      }
      function bT(t, e) {
        (t *= gx), (e *= gx);
        var n = xx(e),
          i = n * xx(t),
          r = n * Dx(t),
          s = Dx(e),
          a = oT * s - uT * r,
          o = uT * i - aT * s,
          u = aT * r - oT * i,
          l = kx(a, o, u),
          c = zx(l),
          f = l && -c / l;
        eT.add(f * a);
        nT.add(f * o);
        iT.add(f * u);
        HO += c;
        ZO += c * (aT + (aT = i));
        JO += c * (oT + (oT = r));
        tT += c * (uT + (uT = s));
        fT(aT, oT, uT);
      }
      function xT(t) {
        XO = HO = VO = QO = KO = ZO = JO = tT = 0;
        eT = new ax();
        nT = new ax();
        iT = new ax();
        sx(t, lT);
        var e = +eT,
          n = +nT,
          i = +iT,
          r = kx(e, n, i);
        if (r < cx) {
          (e = ZO), (n = JO), (i = tT);
          if (HO < lx) (e = VO), (n = QO), (i = KO);
          r = kx(e, n, i);
          if (r < cx) return [NaN, NaN];
        }
        return [bx(n, e) * mx, zx(i / r) * mx];
      }
      var _T = n(14180);
      var wT = n(30352);
      function AT(...t) {
        const e = new wT.v();
        for (const n of t) {
          for (const t of n) {
            e.add(t);
          }
        }
        return e;
      }
      function kT(t, ...e) {
        t = new wT.v(t);
        e = e.map(ET);
        t: for (const n of t) {
          for (const i of e) {
            if (!i.has(n)) {
              t.delete(n);
              continue t;
            }
          }
        }
        return t;
      }
      function ET(t) {
        return t instanceof wT.v ? t : new wT.v(t);
      }
      const MT = Symbol("vega_selection_getter");
      function DT(t) {
        if (!t.getter || !t.getter[MT]) {
          t.getter = (0, p.ZZ)(t.field);
          t.getter[MT] = true;
        }
        return t.getter;
      }
      const CT = "intersect";
      const FT = "union";
      const ST = "vlMulti";
      const BT = "vlPoint";
      const zT = "or";
      const $T = "and";
      const RT = "_vgsid_";
      const OT = (0, p.ZZ)(RT);
      const TT = "E",
        NT = "R",
        LT = "R-E",
        PT = "R-LE",
        qT = "R-RE",
        IT = "E-LT",
        UT = "E-LTE",
        jT = "E-GT",
        GT = "E-GTE",
        YT = "E-VALID",
        WT = "E-ONE",
        XT = "index:unit";
      function HT(t, e) {
        var n = e.fields,
          i = e.values,
          r = n.length,
          s = 0,
          a,
          o;
        for (; s < r; ++s) {
          o = n[s];
          a = DT(o)(t);
          if ((0, p.$P)(a)) a = (0, p.Ro)(a);
          if ((0, p.$P)(i[s])) i[s] = (0, p.Ro)(i[s]);
          if ((0, p.cy)(i[s]) && (0, p.$P)(i[s][0])) i[s] = i[s].map(p.Ro);
          if (o.type === TT) {
            if ((0, p.cy)(i[s]) ? !i[s].includes(a) : a !== i[s]) {
              return false;
            }
          } else {
            if (o.type === NT) {
              if (!(0, p.PK)(a, i[s])) return false;
            } else if (o.type === qT) {
              if (!(0, p.PK)(a, i[s], true, false)) return false;
            } else if (o.type === LT) {
              if (!(0, p.PK)(a, i[s], false, false)) return false;
            } else if (o.type === PT) {
              if (!(0, p.PK)(a, i[s], false, true)) return false;
            } else if (o.type === IT) {
              if (a >= i[s]) return false;
            } else if (o.type === UT) {
              if (a > i[s]) return false;
            } else if (o.type === jT) {
              if (a <= i[s]) return false;
            } else if (o.type === GT) {
              if (a < i[s]) return false;
            } else if (o.type === YT) {
              if (a === null || isNaN(a)) return false;
            } else if (o.type === WT) {
              if (i[s].indexOf(a) === -1) return false;
            }
          }
        }
        return true;
      }
      function VT(t, e, n) {
        var i = this.context.data[t],
          r = i ? i.values.value : [],
          s = i ? i[XT] && i[XT].value : undefined,
          a = n === CT,
          o = r.length,
          u = 0,
          l,
          c,
          f,
          d,
          h;
        for (; u < o; ++u) {
          l = r[u];
          if (s && a) {
            c = c || {};
            f = c[(d = l.unit)] || 0;
            if (f === -1) continue;
            h = HT(e, l);
            c[d] = h ? -1 : ++f;
            if (h && s.size === 1) return true;
            if (!h && f === s.get(d).count) return false;
          } else {
            h = HT(e, l);
            if (a ^ h) return h;
          }
        }
        return o && a;
      }
      const QT = (0, Z.A)(OT),
        KT = QT.left,
        ZT = QT.right;
      function JT(t, e, n) {
        const i = this.context.data[t],
          r = i ? i.values.value : [],
          s = i ? i[XT] && i[XT].value : undefined,
          a = n === CT,
          o = OT(e),
          u = KT(r, o);
        if (u === r.length) return false;
        if (OT(r[u]) !== o) return false;
        if (s && a) {
          if (s.size === 1) return true;
          if (ZT(r, o) - u < s.size) return false;
        }
        return true;
      }
      function tN(t, e) {
        return t.map((t) => (0, p.X$)(e.fields ? { values: e.fields.map((e) => DT(e)(t.datum)) } : { [RT]: OT(t.datum) }, e));
      }
      function eN(t, e, n, i) {
        var r = this.context.data[t],
          s = r ? r.values.value : [],
          a = {},
          o = {},
          u = {},
          l,
          c,
          f,
          d,
          h,
          m,
          g,
          y,
          v,
          b,
          x = s.length,
          _ = 0,
          w,
          A;
        for (; _ < x; ++_) {
          l = s[_];
          d = l.unit;
          c = l.fields;
          f = l.values;
          if (c && f) {
            for (w = 0, A = c.length; w < A; ++w) {
              h = c[w];
              g = a[h.field] || (a[h.field] = {});
              y = g[d] || (g[d] = []);
              u[h.field] = v = h.type.charAt(0);
              b = nN[`${v}_union`];
              g[d] = b(y, (0, p.YO)(f[w]));
            }
            if (n) {
              y = o[d] || (o[d] = []);
              y.push((0, p.YO)(f).reduce((t, e, n) => ((t[c[n].field] = e), t), {}));
            }
          } else {
            h = RT;
            m = OT(l);
            g = a[h] || (a[h] = {});
            y = g[d] || (g[d] = []);
            y.push(m);
            if (n) {
              y = o[d] || (o[d] = []);
              y.push({ [RT]: m });
            }
          }
        }
        e = e || FT;
        if (a[RT]) {
          a[RT] = nN[`${RT}_${e}`](...Object.values(a[RT]));
        } else {
          Object.keys(a).forEach((t) => {
            a[t] = Object.keys(a[t])
              .map((e) => a[t][e])
              .reduce((n, i) => (n === undefined ? i : nN[`${u[t]}_${e}`](n, i)));
          });
        }
        s = Object.keys(o);
        if (n && s.length) {
          const t = i ? BT : ST;
          a[t] = e === FT ? { [zT]: s.reduce((t, e) => (t.push(...o[e]), t), []) } : { [$T]: s.map((t) => ({ [zT]: o[t] })) };
        }
        return a;
      }
      var nN = {
        [`${RT}_union`]: AT,
        [`${RT}_intersect`]: kT,
        E_union: function (t, e) {
          if (!t.length) return e;
          var n = 0,
            i = e.length;
          for (; n < i; ++n) if (!t.includes(e[n])) t.push(e[n]);
          return t;
        },
        E_intersect: function (t, e) {
          return !t.length ? e : t.filter((t) => e.includes(t));
        },
        R_union: function (t, e) {
          var n = (0, p.Ro)(e[0]),
            i = (0, p.Ro)(e[1]);
          if (n > i) {
            n = e[1];
            i = e[0];
          }
          if (!t.length) return [n, i];
          if (t[0] > n) t[0] = n;
          if (t[1] < i) t[1] = i;
          return t;
        },
        R_intersect: function (t, e) {
          var n = (0, p.Ro)(e[0]),
            i = (0, p.Ro)(e[1]);
          if (n > i) {
            n = e[1];
            i = e[0];
          }
          if (!t.length) return [n, i];
          if (i < t[0] || t[1] < n) {
            return [];
          } else {
            if (t[0] < n) t[0] = n;
            if (t[1] > i) t[1] = i;
          }
          return t;
        },
      };
      const iN = ":",
        rN = "@";
      function sN(t, e, n, i) {
        if (e[0].type !== e$) (0, p.z3)("First argument to selection functions must be a string literal.");
        const r = e[0].value,
          s = e.length >= 2 && (0, p.se)(e).value,
          a = "unit",
          o = rN + a,
          u = iN + r;
        if (s === CT && !(0, p.mQ)(i, o)) {
          i[o] = n.getData(r).indataRef(n, a);
        }
        if (!(0, p.mQ)(i, u)) {
          i[u] = n.getData(r).tuplesRef();
        }
      }
      function aN(t) {
        const e = this.context.data[t];
        return e ? e.values.value : [];
      }
      function oN(t, e, n) {
        const i = this.context.data[t]["index:" + e],
          r = i ? i.value.get(n) : undefined;
        return r ? r.count : r;
      }
      function uN(t, e) {
        const n = this.context.dataflow,
          i = this.context.data[t],
          r = i.input;
        n.pulse(r, n.changeset().remove(p.vN).insert(e));
        return 1;
      }
      function lN(t, e, n) {
        if (t) {
          const n = this.context.dataflow,
            i = t.mark.source;
          n.pulse(i, n.changeset().encode(t, e));
        }
        return n !== undefined ? n : t;
      }
      const cN = (t) =>
        function (e, n) {
          const i = this.context.dataflow.locale();
          return e === null ? "null" : i[t](n)(e);
        };
      const fN = cN("format");
      const dN = cN("timeFormat");
      const hN = cN("utcFormat");
      const pN = cN("timeParse");
      const mN = cN("utcParse");
      const gN = new Date(2e3, 0, 1);
      function yN(t, e, n) {
        if (!Number.isInteger(t) || !Number.isInteger(e)) return "";
        gN.setYear(2e3);
        gN.setMonth(t);
        gN.setDate(e);
        return dN.call(this, gN, n);
      }
      function vN(t) {
        return yN.call(this, t, 1, "%B");
      }
      function bN(t) {
        return yN.call(this, t, 1, "%b");
      }
      function xN(t) {
        return yN.call(this, 0, 2 + t, "%A");
      }
      function _N(t) {
        return yN.call(this, 0, 2 + t, "%a");
      }
      const wN = ":";
      const AN = "@";
      const kN = "%";
      const EN = "$";
      function MN(t, e, n, i) {
        if (e[0].type !== e$) {
          (0, p.z3)("First argument to data functions must be a string literal.");
        }
        const r = e[0].value,
          s = wN + r;
        if (!(0, p.mQ)(s, i)) {
          try {
            i[s] = n.getData(r).tuplesRef();
          } catch (a) {}
        }
      }
      function DN(t, e, n, i) {
        if (e[0].type !== e$) (0, p.z3)("First argument to indata must be a string literal.");
        if (e[1].type !== e$) (0, p.z3)("Second argument to indata must be a string literal.");
        const r = e[0].value,
          s = e[1].value,
          a = AN + s;
        if (!(0, p.mQ)(a, i)) {
          i[a] = n.getData(r).indataRef(n, s);
        }
      }
      function CN(t, e, n, i) {
        if (e[0].type === e$) {
          FN(n, i, e[0].value);
        } else {
          for (t in n.scales) {
            FN(n, i, t);
          }
        }
      }
      function FN(t, e, n) {
        const i = kN + n;
        if (!(0, p.mQ)(e, i)) {
          try {
            e[i] = t.scaleRef(n);
          } catch (r) {}
        }
      }
      function SN(t, e) {
        if ((0, p.Kg)(t)) {
          const n = e.scales[t];
          return n && jl(n.value) ? n.value : undefined;
        } else if ((0, p.Tn)(t)) {
          return jl(t) ? t : undefined;
        }
        return undefined;
      }
      function BN(t, e, n) {
        e.__bandwidth = (t) => (t && t.bandwidth ? t.bandwidth() : 0);
        n._bandwidth = CN;
        n._range = CN;
        n._scale = CN;
        const i = (e) => "_[" + (e.type === e$ ? (0, p.r$)(kN + e.value) : (0, p.r$)(kN) + "+" + t(e)) + "]";
        return { _bandwidth: (t) => `this.__bandwidth(${i(t[0])})`, _range: (t) => `${i(t[0])}.range()`, _scale: (e) => `${i(e[0])}(${t(e[1])})` };
      }
      function zN(t, e) {
        return function (n, i, r) {
          if (n) {
            const e = SN(n, (r || this).context);
            return e && e.path[t](i);
          } else {
            return e(i);
          }
        };
      }
      const $N = zN("area", AO);
      const RN = zN("bounds", WO);
      const ON = zN("centroid", xT);
      function TN(t, e) {
        const n = SN(t, (e || this).context);
        return n && n.scale();
      }
      function NN(t) {
        const e = this.context.group;
        let n = false;
        if (e)
          while (t) {
            if (t === e) {
              n = true;
              break;
            }
            t = t.mark.group;
          }
        return n;
      }
      function LN(t, e, n) {
        try {
          t[e].apply(t, ["EXPRESSION"].concat([].slice.call(n)));
        } catch (i) {
          t.warn(i);
        }
        return n[n.length - 1];
      }
      function PN() {
        return LN(this.context.dataflow, "warn", arguments);
      }
      function qN() {
        return LN(this.context.dataflow, "info", arguments);
      }
      function IN() {
        return LN(this.context.dataflow, "debug", arguments);
      }
      function UN(t) {
        const e = t / 255;
        if (e <= 0.03928) {
          return e / 12.92;
        }
        return Math.pow((e + 0.055) / 1.055, 2.4);
      }
      function jN(t) {
        const e = (0, Fk.Qh)(t),
          n = UN(e.r),
          i = UN(e.g),
          r = UN(e.b);
        return 0.2126 * n + 0.7152 * i + 0.0722 * r;
      }
      function GN(t, e) {
        const n = jN(t),
          i = jN(e),
          r = Math.max(n, i),
          s = Math.min(n, i);
        return (r + 0.05) / (s + 0.05);
      }
      function YN() {
        const t = [].slice.call(arguments);
        t.unshift({});
        return (0, p.X$)(...t);
      }
      function WN(t, e) {
        return t === e || (t !== t && e !== e)
          ? true
          : (0, p.cy)(t)
            ? (0, p.cy)(e) && t.length === e.length
              ? XN(t, e)
              : false
            : (0, p.Gv)(t) && (0, p.Gv)(e)
              ? HN(t, e)
              : false;
      }
      function XN(t, e) {
        for (let n = 0, i = t.length; n < i; ++n) {
          if (!WN(t[n], e[n])) return false;
        }
        return true;
      }
      function HN(t, e) {
        for (const n in t) {
          if (!WN(t[n], e[n])) return false;
        }
        return true;
      }
      function VN(t) {
        return (e) => HN(t, e);
      }
      function QN(t, e, n, i, r, s) {
        const a = this.context.dataflow,
          o = this.context.data[t],
          u = o.input,
          l = a.stamp();
        let c = o.changes,
          f,
          d;
        if (a._trigger === false || !(u.value.length || e || i)) {
          return 0;
        }
        if (!c || c.stamp < l) {
          o.changes = c = a.changeset();
          c.stamp = l;
          a.runAfter(
            () => {
              o.modified = true;
              a.pulse(u, c).run();
            },
            true,
            1
          );
        }
        if (n) {
          f = n === true ? p.vN : (0, p.cy)(n) || gn(n) ? n : VN(n);
          c.remove(f);
        }
        if (e) {
          c.insert(e);
        }
        if (i) {
          f = VN(i);
          if (u.value.some(f)) {
            c.remove(f);
          } else {
            c.insert(i);
          }
        }
        if (r) {
          for (d in s) {
            c.modify(r, d, s[d]);
          }
        }
        return 1;
      }
      function KN(t) {
        const e = t.touches,
          n = e[0].clientX - e[1].clientX,
          i = e[0].clientY - e[1].clientY;
        return Math.hypot(n, i);
      }
      function ZN(t) {
        const e = t.touches;
        return Math.atan2(e[0].clientY - e[1].clientY, e[0].clientX - e[1].clientX);
      }
      const JN = {};
      function tL(t, e) {
        const n = JN[e] || (JN[e] = (0, p.ZZ)(e));
        return (0, p.cy)(t) ? t.map(n) : n(t);
      }
      function eL(t) {
        return (0, p.cy)(t) || ArrayBuffer.isView(t) ? t : null;
      }
      function nL(t) {
        return eL(t) || ((0, p.Kg)(t) ? t : null);
      }
      function iL(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
          n[i - 1] = arguments[i];
        }
        return eL(t).join(...n);
      }
      function rL(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
          n[i - 1] = arguments[i];
        }
        return nL(t).indexOf(...n);
      }
      function sL(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
          n[i - 1] = arguments[i];
        }
        return nL(t).lastIndexOf(...n);
      }
      function aL(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
          n[i - 1] = arguments[i];
        }
        return nL(t).slice(...n);
      }
      function oL(t, e, n) {
        if ((0, p.Tn)(n)) (0, p.z3)("Function argument passed to replace.");
        if (!(0, p.Kg)(e) && !(0, p.gd)(e)) (0, p.z3)("Please pass a string or RegExp argument to replace.");
        return String(t).replace(e, n);
      }
      function uL(t) {
        return eL(t).slice().reverse();
      }
      function lL(t) {
        return eL(t).slice().sort(p.V_);
      }
      function cL(t, e, n) {
        return ul(t || 0, e || 0, n || 0);
      }
      function fL(t, e) {
        const n = SN(t, (e || this).context);
        return n && n.bandwidth ? n.bandwidth() : 0;
      }
      function dL(t, e) {
        const n = SN(t, (e || this).context);
        return n ? n.copy() : undefined;
      }
      function hL(t, e) {
        const n = SN(t, (e || this).context);
        return n ? n.domain() : [];
      }
      function pL(t, e, n) {
        const i = SN(t, (n || this).context);
        return !i ? undefined : (0, p.cy)(e) ? (i.invertRange || i.invert)(e) : (i.invert || i.invertExtent)(e);
      }
      function mL(t, e) {
        const n = SN(t, (e || this).context);
        return n && n.range ? n.range() : [];
      }
      function gL(t, e, n) {
        const i = SN(t, (n || this).context);
        return i ? i(e) : undefined;
      }
      function yL(t, e, n, i, r) {
        t = SN(t, (r || this).context);
        const s = Hc(e, n);
        let a = t.domain(),
          o = a[0],
          u = (0, p.se)(a),
          l = p.D_;
        if (!(u - o)) {
          t = (
            t.interpolator ? Yl("sequential")().interpolator(t.interpolator()) : Yl("linear")().interpolate(t.interpolate()).range(t.range())
          ).domain([(o = 0), (u = 1)]);
        } else {
          l = ac(t, o, u);
        }
        if (t.ticks) {
          a = t.ticks(+i || 15);
          if (o !== a[0]) a.unshift(o);
          if (u !== (0, p.se)(a)) a.push(u);
        }
        a.forEach((e) => s.stop(l(e), t(e)));
        return s;
      }
      function vL(t, e, n) {
        const i = SN(t, (n || this).context);
        return function (t) {
          return i ? i.path.context(t)(e) : "";
        };
      }
      function bL(t) {
        let e = null;
        return function (n) {
          return n ? yf(n, (e = e || nf(t))) : t;
        };
      }
      const xL = (t) => t.data;
      function _L(t, e) {
        const n = aN.call(e, t);
        return (n.root && n.root.lookup) || {};
      }
      function wL(t, e, n) {
        const i = _L(t, this),
          r = i[e],
          s = i[n];
        return r && s ? r.path(s).map(xL) : undefined;
      }
      function AL(t, e) {
        const n = _L(t, this)[e];
        return n ? n.ancestors().map(xL) : undefined;
      }
      const kL = () => (typeof window !== "undefined" && window) || null;
      function EL() {
        const t = kL();
        return t ? t.screen : {};
      }
      function ML() {
        const t = kL();
        return t ? [t.innerWidth, t.innerHeight] : [undefined, undefined];
      }
      function DL() {
        const t = this.context.dataflow,
          e = t.container && t.container();
        return e ? [e.clientWidth, e.clientHeight] : [undefined, undefined];
      }
      function CL(t, e, n) {
        if (!t) return [];
        const [i, r] = t,
          s = new vd().set(i[0], i[1], r[0], r[1]),
          a = n || this.context.dataflow.scenegraph().root;
        return cy(a, s, FL(e));
      }
      function FL(t) {
        let e = null;
        if (t) {
          const n = (0, p.YO)(t.marktype),
            i = (0, p.YO)(t.markname);
          e = (t) => (!n.length || n.some((e) => t.marktype === e)) && (!i.length || i.some((e) => t.name === e));
        }
        return e;
      }
      function SL(t, e, n) {
        let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
        t = (0, p.YO)(t);
        const r = t[t.length - 1];
        return r === undefined || Math.hypot(r[0] - e, r[1] - n) > i ? [...t, [e, n]] : t;
      }
      function BL(t) {
        return (0, p.YO)(t).reduce((e, n, i) => {
          let [r, s] = n;
          return (e += i == 0 ? `M ${r},${s} ` : i === t.length - 1 ? " Z" : `L ${r},${s} `);
        }, "");
      }
      function zL(t, e, n) {
        const { x: i, y: r, mark: s } = n;
        const a = new vd().set(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        for (const [u, l] of e) {
          if (u < a.x1) a.x1 = u;
          if (u > a.x2) a.x2 = u;
          if (l < a.y1) a.y1 = l;
          if (l > a.y2) a.y2 = l;
        }
        a.translate(i, r);
        const o = CL(
          [
            [a.x1, a.y1],
            [a.x2, a.y2],
          ],
          t,
          s
        );
        return o.filter((t) => $L(t.x, t.y, e));
      }
      function $L(t, e, n) {
        let i = 0;
        for (let r = 0, s = n.length - 1; r < n.length; s = r++) {
          const [a, o] = n[s];
          const [u, l] = n[r];
          if (l > e != o > e && t < ((a - u) * (e - l)) / (o - l) + u) {
            i++;
          }
        }
        return i & 1;
      }
      const RL = {
        random() {
          return ir();
        },
        cumulativeNormal: mr,
        cumulativeLogNormal: wr,
        cumulativeUniform: Cr,
        densityNormal: pr,
        densityLogNormal: _r,
        densityUniform: Dr,
        quantileNormal: gr,
        quantileLogNormal: Ar,
        quantileUniform: Fr,
        sampleNormal: hr,
        sampleLogNormal: xr,
        sampleUniform: Mr,
        isArray: p.cy,
        isBoolean: p.Lm,
        isDate: p.$P,
        isDefined(t) {
          return t !== undefined;
        },
        isNumber: p.Et,
        isObject: p.Gv,
        isRegExp: p.gd,
        isString: p.Kg,
        isTuple: gn,
        isValid(t) {
          return t != null && t === t;
        },
        toBoolean: p.G4,
        toDate(t) {
          return (0, p.ay)(t);
        },
        toNumber: p.Ro,
        toString: p.dI,
        indexof: rL,
        join: iL,
        lastindexof: sL,
        replace: oL,
        reverse: uL,
        sort: lL,
        slice: aL,
        flush: p.bX,
        lerp: p.Cc,
        merge: YN,
        pad: p.eV,
        peek: p.se,
        pluck: tL,
        span: p.Ln,
        inrange: p.PK,
        truncate: p.xv,
        rgb: Fk.Qh,
        lab: _T.Ay,
        hcl: _T.aq,
        hsl: Fk.KI,
        luminance: jN,
        contrast: GN,
        sequence: es.A,
        format: fN,
        utcFormat: hN,
        utcParse: mN,
        utcOffset: Gt,
        utcSequence: Xt,
        timeFormat: dN,
        timeParse: pN,
        timeOffset: jt,
        timeSequence: Wt,
        timeUnitSpecifier: pt,
        monthFormat: vN,
        monthAbbrevFormat: bN,
        dayFormat: xN,
        dayAbbrevFormat: _N,
        quarter: p.$G,
        utcquarter: p.vu,
        week: vt,
        utcweek: kt,
        dayofyear: yt,
        utcdayofyear: At,
        warn: PN,
        info: qN,
        debug: IN,
        extent(t) {
          return (0, p.Xx)(t);
        },
        inScope: NN,
        intersect: CL,
        clampRange: p.BS,
        pinchDistance: KN,
        pinchAngle: ZN,
        screen: EL,
        containerSize: DL,
        windowSize: ML,
        bandspace: cL,
        setdata: uN,
        pathShape: bL,
        panLinear: p.VC,
        panLog: p.KH,
        panPow: p.co,
        panSymlog: p.zy,
        zoomLinear: p.lL,
        zoomLog: p.oV,
        zoomPow: p.SW,
        zoomSymlog: p.B2,
        encode: lN,
        modify: QN,
        lassoAppend: SL,
        lassoPath: BL,
        intersectLasso: zL,
      };
      const OL = ["view", "item", "group", "xy", "x", "y"],
        TL = "event.vega.",
        NL = "this.",
        LL = {};
      const PL = {
        forbidden: ["_"],
        allowed: ["datum", "event", "item"],
        fieldvar: "datum",
        globalvar: (t) => `_[${(0, p.r$)(EN + t)}]`,
        functions: IL,
        constants: oO,
        visitors: LL,
      };
      const qL = cO(PL);
      function IL(t) {
        const e = uO(t);
        OL.forEach((t) => (e[t] = TL + t));
        for (const n in RL) {
          e[n] = NL + n;
        }
        (0, p.X$)(e, BN(t, RL, LL));
        return e;
      }
      function UL(t, e, n) {
        if (arguments.length === 1) {
          return RL[t];
        }
        RL[t] = e;
        if (n) LL[t] = n;
        if (qL) qL.functions[t] = NL + t;
        return this;
      }
      UL("bandwidth", fL, CN);
      UL("copy", dL, CN);
      UL("domain", hL, CN);
      UL("range", mL, CN);
      UL("invert", pL, CN);
      UL("scale", gL, CN);
      UL("gradient", yL, CN);
      UL("geoArea", $N, CN);
      UL("geoBounds", RN, CN);
      UL("geoCentroid", ON, CN);
      UL("geoShape", vL, CN);
      UL("geoScale", TN, CN);
      UL("indata", oN, DN);
      UL("data", aN, MN);
      UL("treePath", wL, MN);
      UL("treeAncestors", AL, MN);
      UL("vlSelectionTest", VT, sN);
      UL("vlSelectionIdTest", JT, sN);
      UL("vlSelectionResolve", eN, sN);
      UL("vlSelectionTuples", tN);
      function jL(t, e) {
        const n = {};
        let i;
        try {
          t = (0, p.Kg)(t) ? t : (0, p.r$)(t) + "";
          i = aO(t);
        } catch (s) {
          (0, p.z3)("Expression parse error: " + t);
        }
        i.visit((t) => {
          if (t.type !== a$) return;
          const i = t.callee.name,
            r = PL.visitors[i];
          if (r) r(i, t.arguments, e, n);
        });
        const r = qL(i);
        r.globals.forEach((t) => {
          const i = EN + t;
          if (!(0, p.mQ)(n, i) && e.getSignal(t)) {
            n[i] = e.signalRef(t);
          }
        });
        return { $expr: (0, p.X$)({ code: r.code }, e.options.ast ? { ast: i } : null), $fields: r.fields, $params: n };
      }
      function GL(t) {
        const e = this,
          n = t.operators || [];
        if (t.background) {
          e.background = t.background;
        }
        if (t.eventConfig) {
          e.eventConfig = t.eventConfig;
        }
        if (t.locale) {
          e.locale = t.locale;
        }
        n.forEach((t) => e.parseOperator(t));
        n.forEach((t) => e.parseOperatorParameters(t));
        (t.streams || []).forEach((t) => e.parseStream(t));
        (t.updates || []).forEach((t) => e.parseUpdate(t));
        return e.resolve();
      }
      const YL = (0, p.M1)(["rule"]),
        WL = (0, p.M1)(["group", "image", "rect"]);
      function XL(t, e) {
        let n = "";
        if (YL[e]) return n;
        if (t.x2) {
          if (t.x) {
            if (WL[e]) {
              n += "if(o.x>o.x2)$=o.x,o.x=o.x2,o.x2=$;";
            }
            n += "o.width=o.x2-o.x;";
          } else {
            n += "o.x=o.x2-(o.width||0);";
          }
        }
        if (t.xc) {
          n += "o.x=o.xc-(o.width||0)/2;";
        }
        if (t.y2) {
          if (t.y) {
            if (WL[e]) {
              n += "if(o.y>o.y2)$=o.y,o.y=o.y2,o.y2=$;";
            }
            n += "o.height=o.y2-o.y;";
          } else {
            n += "o.y=o.y2-(o.height||0);";
          }
        }
        if (t.yc) {
          n += "o.y=o.yc-(o.height||0)/2;";
        }
        return n;
      }
      function HL(t) {
        return (t + "").toLowerCase();
      }
      function VL(t) {
        return HL(t) === "operator";
      }
      function QL(t) {
        return HL(t) === "collect";
      }
      function KL(t, e, n) {
        if (!n.endsWith(";")) {
          n = "return(" + n + ");";
        }
        const i = Function(...e.concat(n));
        return t && t.functions ? i.bind(t.functions) : i;
      }
      function ZL(t, e, n, i) {
        return `((u = ${t}) < (v = ${e}) || u == null) && v != null ? ${n}\n  : (u > v || v == null) && u != null ? ${i}\n  : ((v = v instanceof Date ? +v : v), (u = u instanceof Date ? +u : u)) !== u && v === v ? ${n}\n  : v !== v && u === u ? ${i} : `;
      }
      var JL = {
        operator: (t, e) => KL(t, ["_"], e.code),
        parameter: (t, e) => KL(t, ["datum", "_"], e.code),
        event: (t, e) => KL(t, ["event"], e.code),
        handler: (t, e) => {
          const n = `var datum=event.item&&event.item.datum;return ${e.code};`;
          return KL(t, ["_", "event"], n);
        },
        encode: (t, e) => {
          const { marktype: n, channels: i } = e;
          let r = "var o=item,datum=o.datum,m=0,$;";
          for (const s in i) {
            const t = "o[" + (0, p.r$)(s) + "]";
            r += `$=${i[s].code};if(${t}!==$)${t}=$,m=1;`;
          }
          r += XL(i, n);
          r += "return m;";
          return KL(t, ["item", "_"], r);
        },
        codegen: {
          get(t) {
            const e = `[${t.map(p.r$).join("][")}]`;
            const n = Function("_", `return _${e};`);
            n.path = e;
            return n;
          },
          comparator(t, e) {
            let n;
            const i = (t, i) => {
              const r = e[i];
              let s, a;
              if (t.path) {
                s = `a${t.path}`;
                a = `b${t.path}`;
              } else {
                (n = n || {})["f" + i] = t;
                s = `this.f${i}(a)`;
                a = `this.f${i}(b)`;
              }
              return ZL(s, a, -r, r);
            };
            const r = Function("a", "b", "var u, v; return " + t.map(i).join("") + "0;");
            return n ? r.bind(n) : r;
          },
        },
      };
      function tP(t) {
        const e = this;
        if (VL(t.type) || !t.type) {
          e.operator(t, t.update ? e.operatorExpression(t.update) : null);
        } else {
          e.transform(t, t.type);
        }
      }
      function eP(t) {
        const e = this;
        if (t.params) {
          const n = e.get(t.id);
          if (!n) (0, p.z3)("Invalid operator id: " + t.id);
          e.dataflow.connect(n, n.parameters(e.parseParameters(t.params), t.react, t.initonly));
        }
      }
      function nP(t, e) {
        e = e || {};
        const n = this;
        for (const i in t) {
          const r = t[i];
          e[i] = (0, p.cy)(r) ? r.map((t) => iP(t, n, e)) : iP(r, n, e);
        }
        return e;
      }
      function iP(t, e, n) {
        if (!t || !(0, p.Gv)(t)) return t;
        for (let i = 0, r = rP.length, s; i < r; ++i) {
          s = rP[i];
          if ((0, p.mQ)(t, s.key)) {
            return s.parse(t, e, n);
          }
        }
        return t;
      }
      var rP = [
        { key: "$ref", parse: sP },
        { key: "$key", parse: oP },
        { key: "$expr", parse: aP },
        { key: "$field", parse: uP },
        { key: "$encode", parse: cP },
        { key: "$compare", parse: lP },
        { key: "$context", parse: fP },
        { key: "$subflow", parse: dP },
        { key: "$tupleid", parse: hP },
      ];
      function sP(t, e) {
        return e.get(t.$ref) || (0, p.z3)("Operator not defined: " + t.$ref);
      }
      function aP(t, e, n) {
        if (t.$params) {
          e.parseParameters(t.$params, n);
        }
        const i = "e:" + t.$expr.code;
        return e.fn[i] || (e.fn[i] = (0, p.sY)(e.parameterExpression(t.$expr), t.$fields));
      }
      function oP(t, e) {
        const n = "k:" + t.$key + "_" + !!t.$flat;
        return e.fn[n] || (e.fn[n] = (0, p.Eb)(t.$key, t.$flat, e.expr.codegen));
      }
      function uP(t, e) {
        if (!t.$field) return null;
        const n = "f:" + t.$field + "_" + t.$name;
        return e.fn[n] || (e.fn[n] = (0, p.ZZ)(t.$field, t.$name, e.expr.codegen));
      }
      function lP(t, e) {
        const n = "c:" + t.$compare + "_" + t.$order,
          i = (0, p.YO)(t.$compare).map((t) => (t && t.$tupleid ? yn : t));
        return e.fn[n] || (e.fn[n] = (0, p.UD)(i, t.$order, e.expr.codegen));
      }
      function cP(t, e) {
        const n = t.$encode,
          i = {};
        for (const r in n) {
          const t = n[r];
          i[r] = (0, p.sY)(e.encodeExpression(t.$expr), t.$fields);
          i[r].output = t.$output;
        }
        return i;
      }
      function fP(t, e) {
        return e;
      }
      function dP(t, e) {
        const n = t.$subflow;
        return function (t, i, r) {
          const s = e.fork().parse(n),
            a = s.get(n.operators[0].id),
            o = s.signals.parent;
          if (o) o.set(r);
          a.detachSubflow = () => e.detach(s);
          return a;
        };
      }
      function hP() {
        return yn;
      }
      function pP(t) {
        var e = this,
          n = t.filter != null ? e.eventExpression(t.filter) : undefined,
          i = t.stream != null ? e.get(t.stream) : undefined,
          r;
        if (t.source) {
          i = e.events(t.source, t.type, n);
        } else if (t.merge) {
          r = t.merge.map((t) => e.get(t));
          i = r[0].merge.apply(r[0], r.slice(1));
        }
        if (t.between) {
          r = t.between.map((t) => e.get(t));
          i = i.between(r[0], r[1]);
        }
        if (t.filter) {
          i = i.filter(n);
        }
        if (t.throttle != null) {
          i = i.throttle(+t.throttle);
        }
        if (t.debounce != null) {
          i = i.debounce(+t.debounce);
        }
        if (i == null) {
          (0, p.z3)("Invalid stream definition: " + JSON.stringify(t));
        }
        if (t.consume) i.consume(true);
        e.stream(t, i);
      }
      function mP(t) {
        var e = this,
          n = (0, p.Gv)((n = t.source)) ? n.$ref : n,
          i = e.get(n),
          r = null,
          s = t.update,
          a = undefined;
        if (!i) (0, p.z3)("Source not defined: " + t.source);
        r = t.target && t.target.$expr ? e.eventExpression(t.target.$expr) : e.get(t.target);
        if (s && s.$expr) {
          if (s.$params) {
            a = e.parseParameters(s.$params);
          }
          s = e.handlerExpression(s.$expr);
        }
        e.update(t, i, r, s, a);
      }
      const gP = { skip: true };
      function yP(t) {
        var e = this,
          n = {};
        if (t.signals) {
          var i = (n.signals = {});
          Object.keys(e.signals).forEach((n) => {
            const r = e.signals[n];
            if (t.signals(n, r)) {
              i[n] = r.value;
            }
          });
        }
        if (t.data) {
          var r = (n.data = {});
          Object.keys(e.data).forEach((n) => {
            const i = e.data[n];
            if (t.data(n, i)) {
              r[n] = i.input.value;
            }
          });
        }
        if (e.subcontext && t.recurse !== false) {
          n.subcontext = e.subcontext.map((e) => e.getState(t));
        }
        return n;
      }
      function vP(t) {
        var e = this,
          n = e.dataflow,
          i = t.data,
          r = t.signals;
        Object.keys(r || {}).forEach((t) => {
          n.update(e.signals[t], r[t], gP);
        });
        Object.keys(i || {}).forEach((t) => {
          n.pulse(e.data[t].input, n.changeset().remove(p.vN).insert(i[t]));
        });
        (t.subcontext || []).forEach((t, n) => {
          const i = e.subcontext[n];
          if (i) i.setState(t);
        });
      }
      function bP(t, e, n, i) {
        return new xP(t, e, n, i);
      }
      function xP(t, e, n, i) {
        this.dataflow = t;
        this.transforms = e;
        this.events = t.events.bind(t);
        (this.expr = i || JL), (this.signals = {});
        this.scales = {};
        this.nodes = {};
        this.data = {};
        this.fn = {};
        if (n) {
          this.functions = Object.create(n);
          this.functions.context = this;
        }
      }
      function _P(t) {
        this.dataflow = t.dataflow;
        this.transforms = t.transforms;
        this.events = t.events;
        this.expr = t.expr;
        this.signals = Object.create(t.signals);
        this.scales = Object.create(t.scales);
        this.nodes = Object.create(t.nodes);
        this.data = Object.create(t.data);
        this.fn = Object.create(t.fn);
        if (t.functions) {
          this.functions = Object.create(t.functions);
          this.functions.context = this;
        }
      }
      xP.prototype = _P.prototype = {
        fork() {
          const t = new _P(this);
          (this.subcontext || (this.subcontext = [])).push(t);
          return t;
        },
        detach(t) {
          this.subcontext = this.subcontext.filter((e) => e !== t);
          const e = Object.keys(t.nodes);
          for (const n of e) t.nodes[n]._targets = null;
          for (const n of e) t.nodes[n].detach();
          t.nodes = null;
        },
        get(t) {
          return this.nodes[t];
        },
        set(t, e) {
          return (this.nodes[t] = e);
        },
        add(t, e) {
          const n = this,
            i = n.dataflow,
            r = t.value;
          n.set(t.id, e);
          if (QL(t.type) && r) {
            if (r.$ingest) {
              i.ingest(e, r.$ingest, r.$format);
            } else if (r.$request) {
              i.preload(e, r.$request, r.$format);
            } else {
              i.pulse(e, i.changeset().insert(r));
            }
          }
          if (t.root) {
            n.root = e;
          }
          if (t.parent) {
            let r = n.get(t.parent.$ref);
            if (r) {
              i.connect(r, [e]);
              e.targets().add(r);
            } else {
              (n.unresolved = n.unresolved || []).push(() => {
                r = n.get(t.parent.$ref);
                i.connect(r, [e]);
                e.targets().add(r);
              });
            }
          }
          if (t.signal) {
            n.signals[t.signal] = e;
          }
          if (t.scale) {
            n.scales[t.scale] = e;
          }
          if (t.data) {
            for (const i in t.data) {
              const r = n.data[i] || (n.data[i] = {});
              t.data[i].forEach((t) => (r[t] = e));
            }
          }
        },
        resolve() {
          (this.unresolved || []).forEach((t) => t());
          delete this.unresolved;
          return this;
        },
        operator(t, e) {
          this.add(t, this.dataflow.add(t.value, e));
        },
        transform(t, e) {
          this.add(t, this.dataflow.add(this.transforms[HL(e)]));
        },
        stream(t, e) {
          this.set(t.id, e);
        },
        update(t, e, n, i, r) {
          this.dataflow.on(e, n, i, r, t.options);
        },
        operatorExpression(t) {
          return this.expr.operator(this, t);
        },
        parameterExpression(t) {
          return this.expr.parameter(this, t);
        },
        eventExpression(t) {
          return this.expr.event(this, t);
        },
        handlerExpression(t) {
          return this.expr.handler(this, t);
        },
        encodeExpression(t) {
          return this.expr.encode(this, t);
        },
        parse: GL,
        parseOperator: tP,
        parseOperatorParameters: eP,
        parseParameters: nP,
        parseStream: pP,
        parseUpdate: mP,
        getState: yP,
        setState: vP,
      };
      function wP(t, e, n) {
        var i = new QE.M4(),
          r = e;
        if (e == null) return i.restart(t, e, n), i;
        i._restart = i.restart;
        i.restart = function (t, e, n) {
          (e = +e), (n = n == null ? (0, QE.tB)() : +n);
          i._restart(
            function s(a) {
              a += r;
              i._restart(s, (r += e), n);
              t(a);
            },
            e,
            n
          );
        };
        i.restart(t, e, n);
        return i;
      }
      function AP(t) {
        const e = t.container();
        if (e) {
          e.setAttribute("role", "graphics-document");
          e.setAttribute("aria-roleDescription", "visualization");
          kP(e, t.description());
        }
      }
      function kP(t, e) {
        if (t) e == null ? t.removeAttribute("aria-label") : t.setAttribute("aria-label", e);
      }
      function EP(t) {
        t.add(
          null,
          (e) => {
            t._background = e.bg;
            t._resize = 1;
            return e.bg;
          },
          { bg: t._signals.background }
        );
      }
      const MP = "default";
      function DP(t) {
        const e = t._signals.cursor || (t._signals.cursor = t.add({ user: MP, item: null }));
        t.on(t.events("view", "pointermove"), e, (t, n) => {
          const i = e.value,
            r = i ? ((0, p.Kg)(i) ? i : i.user) : MP,
            s = (n.item && n.item.cursor) || null;
          return i && r === i.user && s == i.item ? i : { user: r, item: s };
        });
        t.add(
          null,
          function (e) {
            let n = e.cursor,
              i = this.value;
            if (!(0, p.Kg)(n)) {
              i = n.item;
              n = n.user;
            }
            CP(t, n && n !== MP ? n : i || n);
            return i;
          },
          { cursor: e }
        );
      }
      function CP(t, e) {
        const n = t.globalCursor() ? typeof document !== "undefined" && document.body : t.container();
        if (n) {
          return e == null ? n.style.removeProperty("cursor") : (n.style.cursor = e);
        }
      }
      function FP(t, e) {
        var n = t._runtime.data;
        if (!(0, p.mQ)(n, e)) {
          (0, p.z3)("Unrecognized data set: " + e);
        }
        return n[e];
      }
      function SP(t, e) {
        return arguments.length < 2 ? FP(this, t).values.value : BP.call(this, t, En().remove(p.vN).insert(e));
      }
      function BP(t, e) {
        if (!kn(e)) {
          (0, p.z3)("Second argument to changes must be a changeset.");
        }
        const n = FP(this, t);
        n.modified = true;
        return this.pulse(n.input, e);
      }
      function zP(t, e) {
        return BP.call(this, t, En().insert(e));
      }
      function $P(t, e) {
        return BP.call(this, t, En().remove(e));
      }
      function RP(t) {
        var e = t.padding();
        return Math.max(0, t._viewWidth + e.left + e.right);
      }
      function OP(t) {
        var e = t.padding();
        return Math.max(0, t._viewHeight + e.top + e.bottom);
      }
      function TP(t) {
        var e = t.padding(),
          n = t._origin;
        return [e.left + n[0], e.top + n[1]];
      }
      function NP(t) {
        var e = TP(t),
          n = RP(t),
          i = OP(t);
        t._renderer.background(t.background());
        t._renderer.resize(n, i, e);
        t._handler.origin(e);
        t._resizeListeners.forEach((e) => {
          try {
            e(n, i);
          } catch (r) {
            t.error(r);
          }
        });
      }
      function LP(t, e, n) {
        var i = t._renderer,
          r = i && i.canvas(),
          s,
          a,
          o;
        if (r) {
          o = TP(t);
          a = e.changedTouches ? e.changedTouches[0] : e;
          s = fm(a, r);
          s[0] -= o[0];
          s[1] -= o[1];
        }
        e.dataflow = t;
        e.item = n;
        e.vega = PP(t, n, s);
        return e;
      }
      function PP(t, e, n) {
        const i = e ? (e.mark.marktype === "group" ? e : e.mark.group) : null;
        function r(t) {
          var n = i,
            r;
          if (t)
            for (r = e; r; r = r.mark.group) {
              if (r.mark.name === t) {
                n = r;
                break;
              }
            }
          return n && n.mark && n.mark.interactive ? n : {};
        }
        function s(t) {
          if (!t) return n;
          if ((0, p.Kg)(t)) t = r(t);
          const e = n.slice();
          while (t) {
            e[0] -= t.x || 0;
            e[1] -= t.y || 0;
            t = t.mark && t.mark.group;
          }
          return e;
        }
        return { view: (0, p.dY)(t), item: (0, p.dY)(e || {}), group: r, xy: s, x: (t) => s(t)[0], y: (t) => s(t)[1] };
      }
      const qP = "view",
        IP = "timer",
        UP = "window",
        jP = { trap: false };
      function GP(t) {
        const e = (0, p.X$)({ defaults: {} }, t);
        const n = (t, e) => {
          e.forEach((e) => {
            if ((0, p.cy)(t[e])) t[e] = (0, p.M1)(t[e]);
          });
        };
        n(e.defaults, ["prevent", "allow"]);
        n(e, ["view", "window", "selector"]);
        return e;
      }
      function YP(t, e, n, i) {
        t._eventListeners.push({ type: n, sources: (0, p.YO)(e), handler: i });
      }
      function WP(t, e) {
        var n = t._eventConfig.defaults,
          i = n.prevent,
          r = n.allow;
        return i === false || r === true ? false : i === true || r === false ? true : i ? i[e] : r ? !r[e] : t.preventDefault();
      }
      function XP(t, e, n) {
        const i = t._eventConfig && t._eventConfig[e];
        if (i === false || ((0, p.Gv)(i) && !i[n])) {
          t.warn(`Blocked ${e} ${n} event listener.`);
          return false;
        }
        return true;
      }
      function HP(t, e, n) {
        var i = this,
          r = new Ln(n),
          s = function (n, s) {
            i.runAsync(null, () => {
              if (t === qP && WP(i, e)) {
                n.preventDefault();
              }
              r.receive(LP(i, n, s));
            });
          },
          a;
        if (t === IP) {
          if (XP(i, "timer", e)) {
            i.timer(s, e);
          }
        } else if (t === qP) {
          if (XP(i, "view", e)) {
            i.addEventListener(e, s, jP);
          }
        } else {
          if (t === UP) {
            if (XP(i, "window", e) && typeof window !== "undefined") {
              a = [window];
            }
          } else if (typeof document !== "undefined") {
            if (XP(i, "selector", e)) {
              a = Array.from(document.querySelectorAll(t));
            }
          }
          if (!a) {
            i.warn("Can not resolve event source: " + t);
          } else {
            for (var o = 0, u = a.length; o < u; ++o) {
              a[o].addEventListener(e, s);
            }
            YP(i, a, e, s);
          }
        }
        return r;
      }
      function VP(t) {
        return t.item;
      }
      function QP(t) {
        return t.item.mark.source;
      }
      function KP(t) {
        return function (e, n) {
          return n.vega.view().changeset().encode(n.item, t);
        };
      }
      function ZP(t, e) {
        t = [t || "hover"];
        e = [e || "update", t[0]];
        this.on(this.events("view", "pointerover", VP), QP, KP(t));
        this.on(this.events("view", "pointerout", VP), QP, KP(e));
        return this;
      }
      function JP() {
        var t = this._tooltip,
          e = this._timers,
          n = this._handler.handlers(),
          i = this._eventListeners,
          r,
          s,
          a,
          o,
          u;
        r = e.length;
        while (--r >= 0) {
          e[r].stop();
        }
        r = i.length;
        while (--r >= 0) {
          a = i[r];
          s = a.sources.length;
          while (--s >= 0) {
            a.sources[s].removeEventListener(a.type, a.handler);
          }
        }
        if (t) {
          t.call(this, this._handler, null, null, null);
        }
        r = n.length;
        while (--r >= 0) {
          u = n[r].type;
          o = n[r].handler;
          this._handler.off(u, o);
        }
        return this;
      }
      function tq(t, e, n) {
        const i = document.createElement(t);
        for (const r in e) i.setAttribute(r, e[r]);
        if (n != null) i.textContent = n;
        return i;
      }
      const eq = "vega-bind",
        nq = "vega-bind-name",
        iq = "vega-bind-radio";
      function rq(t, e, n) {
        if (!e) return;
        const i = n.param;
        let r = n.state;
        if (!r) {
          r = n.state = {
            elements: null,
            active: false,
            set: null,
            update: (e) => {
              if (e != t.signal(i.signal)) {
                t.runAsync(null, () => {
                  r.source = true;
                  t.signal(i.signal, e);
                });
              }
            },
          };
          if (i.debounce) {
            r.update = (0, p.sg)(i.debounce, r.update);
          }
        }
        const s = i.input == null && i.element ? sq : oq;
        s(r, e, i, t);
        if (!r.active) {
          t.on(t._signals[i.signal], null, () => {
            r.source ? (r.source = false) : r.set(t.signal(i.signal));
          });
          r.active = true;
        }
        return r;
      }
      function sq(t, e, n, i) {
        const r = n.event || "input";
        const s = () => t.update(e.value);
        i.signal(n.signal, e.value);
        e.addEventListener(r, s);
        YP(i, e, r, s);
        t.set = (t) => {
          e.value = t;
          e.dispatchEvent(aq(r));
        };
      }
      function aq(t) {
        return typeof Event !== "undefined" ? new Event(t) : { type: t };
      }
      function oq(t, e, n, i) {
        const r = i.signal(n.signal);
        const s = tq("div", { class: eq });
        const a = n.input === "radio" ? s : s.appendChild(tq("label"));
        a.appendChild(tq("span", { class: nq }, n.name || n.signal));
        e.appendChild(s);
        let o = uq;
        switch (n.input) {
          case "checkbox":
            o = lq;
            break;
          case "select":
            o = cq;
            break;
          case "radio":
            o = fq;
            break;
          case "range":
            o = dq;
            break;
        }
        o(t, a, n, r);
      }
      function uq(t, e, n, i) {
        const r = tq("input");
        for (const s in n) {
          if (s !== "signal" && s !== "element") {
            r.setAttribute(s === "input" ? "type" : s, n[s]);
          }
        }
        r.setAttribute("name", n.signal);
        r.value = i;
        e.appendChild(r);
        r.addEventListener("input", () => t.update(r.value));
        t.elements = [r];
        t.set = (t) => (r.value = t);
      }
      function lq(t, e, n, i) {
        const r = { type: "checkbox", name: n.signal };
        if (i) r.checked = true;
        const s = tq("input", r);
        e.appendChild(s);
        s.addEventListener("change", () => t.update(s.checked));
        t.elements = [s];
        t.set = (t) => (s.checked = !!t || null);
      }
      function cq(t, e, n, i) {
        const r = tq("select", { name: n.signal }),
          s = n.labels || [];
        n.options.forEach((t, e) => {
          const n = { value: t };
          if (hq(t, i)) n.selected = true;
          r.appendChild(tq("option", n, (s[e] || t) + ""));
        });
        e.appendChild(r);
        r.addEventListener("change", () => {
          t.update(n.options[r.selectedIndex]);
        });
        t.elements = [r];
        t.set = (t) => {
          for (let e = 0, i = n.options.length; e < i; ++e) {
            if (hq(n.options[e], t)) {
              r.selectedIndex = e;
              return;
            }
          }
        };
      }
      function fq(t, e, n, i) {
        const r = tq("span", { class: iq }),
          s = n.labels || [];
        e.appendChild(r);
        t.elements = n.options.map((e, a) => {
          const o = { type: "radio", name: n.signal, value: e };
          if (hq(e, i)) o.checked = true;
          const u = tq("input", o);
          u.addEventListener("change", () => t.update(e));
          const l = tq("label", {}, (s[a] || e) + "");
          l.prepend(u);
          r.appendChild(l);
          return u;
        });
        t.set = (e) => {
          const n = t.elements,
            i = n.length;
          for (let t = 0; t < i; ++t) {
            if (hq(n[t].value, e)) n[t].checked = true;
          }
        };
      }
      function dq(t, e, n, i) {
        i = i !== undefined ? i : (+n.max + +n.min) / 2;
        const r = n.max != null ? n.max : Math.max(100, +i) || 100,
          s = n.min || Math.min(0, r, +i) || 0,
          a = n.step || (0, N.sG)(s, r, 100);
        const o = tq("input", { type: "range", name: n.signal, min: s, max: r, step: a });
        o.value = i;
        const u = tq("span", {}, +i);
        e.appendChild(o);
        e.appendChild(u);
        const l = () => {
          u.textContent = o.value;
          t.update(+o.value);
        };
        o.addEventListener("input", l);
        o.addEventListener("change", l);
        t.elements = [o];
        t.set = (t) => {
          o.value = t;
          u.textContent = t;
        };
      }
      function hq(t, e) {
        return t === e || t + "" === e + "";
      }
      function pq(t, e, n, i, r, s) {
        e = e || new i(t.loader());
        return e.initialize(n, RP(t), OP(t), TP(t), r, s).background(t.background());
      }
      function mq(t, e) {
        return !e
          ? null
          : function () {
              try {
                e.apply(this, arguments);
              } catch (n) {
                t.error(n);
              }
            };
      }
      function gq(t, e, n, i) {
        const r = new i(t.loader(), mq(t, t.tooltip())).scene(t.scenegraph().root).initialize(n, TP(t), t);
        if (e) {
          e.handlers().forEach((t) => {
            r.on(t.type, t.handler);
          });
        }
        return r;
      }
      function yq(t, e) {
        const n = this,
          i = n._renderType,
          r = n._eventConfig.bind,
          s = ly(i);
        t = n._el = t ? vq(n, t, true) : null;
        AP(n);
        if (!s) n.error("Unrecognized renderer type: " + i);
        const a = s.handler || jm,
          o = t ? s.renderer : s.headless;
        n._renderer = !o ? null : pq(n, n._renderer, t, o);
        n._handler = gq(n, n._handler, t, a);
        n._redraw = true;
        if (t && r !== "none") {
          e = e ? (n._elBind = vq(n, e, true)) : t.appendChild(tq("form", { class: "vega-bindings" }));
          n._bind.forEach((t) => {
            if (t.param.element && r !== "container") {
              t.element = vq(n, t.param.element, !!t.param.input);
            }
          });
          n._bind.forEach((t) => {
            rq(n, t.element || e, t);
          });
        }
        return n;
      }
      function vq(t, e, n) {
        if (typeof e === "string") {
          if (typeof document !== "undefined") {
            e = document.querySelector(e);
            if (!e) {
              t.error("Signal bind element not found: " + e);
              return null;
            }
          } else {
            t.error("DOM document instance not found.");
            return null;
          }
        }
        if (e && n) {
          try {
            e.textContent = "";
          } catch (i) {
            e = null;
            t.error(i);
          }
        }
        return e;
      }
      const bq = (t) => +t || 0;
      const xq = (t) => ({ top: t, bottom: t, left: t, right: t });
      function _q(t) {
        return (0, p.Gv)(t) ? { top: bq(t.top), bottom: bq(t.bottom), left: bq(t.left), right: bq(t.right) } : xq(bq(t));
      }
      async function wq(t, e, n, i) {
        const r = ly(e),
          s = r && r.headless;
        if (!s) (0, p.z3)("Unrecognized renderer type: " + e);
        await t.runAsync();
        return pq(t, null, null, s, n, i).renderAsync(t._scenegraph.root);
      }
      async function Aq(t, e) {
        if (t !== oy.Canvas && t !== oy.SVG && t !== oy.PNG) {
          (0, p.z3)("Unrecognized image type: " + t);
        }
        const n = await wq(this, t, e);
        return t === oy.SVG ? kq(n.svg(), "image/svg+xml") : n.canvas().toDataURL("image/png");
      }
      function kq(t, e) {
        const n = new Blob([t], { type: e });
        return window.URL.createObjectURL(n);
      }
      async function Eq(t, e) {
        const n = await wq(this, oy.Canvas, t, e);
        return n.canvas();
      }
      async function Mq(t) {
        const e = await wq(this, oy.SVG, t);
        return e.svg();
      }
      function Dq(t, e, n) {
        return bP(t, $i, RL, n).parse(e);
      }
      function Cq(t) {
        var e = this._runtime.scales;
        if (!(0, p.mQ)(e, t)) {
          (0, p.z3)("Unrecognized scale or projection: " + t);
        }
        return e[t].value;
      }
      var Fq = "width",
        Sq = "height",
        Bq = "padding",
        zq = { skip: true };
      function $q(t, e) {
        var n = t.autosize(),
          i = t.padding();
        return e - (n && n.contains === Bq ? i.left + i.right : 0);
      }
      function Rq(t, e) {
        var n = t.autosize(),
          i = t.padding();
        return e - (n && n.contains === Bq ? i.top + i.bottom : 0);
      }
      function Oq(t) {
        var e = t._signals,
          n = e[Fq],
          i = e[Sq],
          r = e[Bq];
        function s() {
          t._autosize = t._resize = 1;
        }
        t._resizeWidth = t.add(
          null,
          (e) => {
            t._width = e.size;
            t._viewWidth = $q(t, e.size);
            s();
          },
          { size: n }
        );
        t._resizeHeight = t.add(
          null,
          (e) => {
            t._height = e.size;
            t._viewHeight = Rq(t, e.size);
            s();
          },
          { size: i }
        );
        const a = t.add(null, s, { pad: r });
        t._resizeWidth.rank = n.rank + 1;
        t._resizeHeight.rank = i.rank + 1;
        a.rank = r.rank + 1;
      }
      function Tq(t, e, n, i, r, s) {
        this.runAfter(
          (a) => {
            let o = 0;
            a._autosize = 0;
            if (a.width() !== n) {
              o = 1;
              a.signal(Fq, n, zq);
              a._resizeWidth.skip(true);
            }
            if (a.height() !== i) {
              o = 1;
              a.signal(Sq, i, zq);
              a._resizeHeight.skip(true);
            }
            if (a._viewWidth !== t) {
              a._resize = 1;
              a._viewWidth = t;
            }
            if (a._viewHeight !== e) {
              a._resize = 1;
              a._viewHeight = e;
            }
            if (a._origin[0] !== r[0] || a._origin[1] !== r[1]) {
              a._resize = 1;
              a._origin = r;
            }
            if (o) a.run("enter");
            if (s) a.runAfter((t) => t.resize());
          },
          false,
          1
        );
      }
      function Nq(t) {
        return this._runtime.getState(t || { data: Lq, signals: Pq, recurse: true });
      }
      function Lq(t, e) {
        return e.modified && (0, p.cy)(e.input.value) && !t.startsWith("_:vega:_");
      }
      function Pq(t, e) {
        return !(t === "parent" || e instanceof $i.proxy);
      }
      function qq(t) {
        this.runAsync(
          null,
          (e) => {
            e._trigger = false;
            e._runtime.setState(t);
          },
          (t) => {
            t._trigger = true;
          }
        );
        return this;
      }
      function Iq(t, e) {
        function n(e) {
          t({ timestamp: Date.now(), elapsed: e });
        }
        this._timers.push(wP(n, e));
      }
      function Uq(t, e, n, i) {
        const r = t.element();
        if (r) r.setAttribute("title", jq(i));
      }
      function jq(t) {
        return t == null ? "" : (0, p.cy)(t) ? Yq(t) : (0, p.Gv)(t) && !(0, p.$P)(t) ? Gq(t) : t + "";
      }
      function Gq(t) {
        return Object.keys(t)
          .map((e) => {
            const n = t[e];
            return e + ": " + ((0, p.cy)(n) ? Yq(n) : Wq(n));
          })
          .join("\n");
      }
      function Yq(t) {
        return "[" + t.map(Wq).join(", ") + "]";
      }
      function Wq(t) {
        return (0, p.cy)(t) ? "[…]" : (0, p.Gv)(t) && !(0, p.$P)(t) ? "{…}" : t;
      }
      function Xq() {
        if (this.renderer() === "canvas" && this._renderer._canvas) {
          let t = null;
          const e = () => {
            if (t != null) {
              t();
            }
            const n = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
            n.addEventListener("change", e);
            t = () => {
              n.removeEventListener("change", e);
            };
            this._renderer._canvas.getContext("2d").pixelRatio = window.devicePixelRatio || 1;
            this._redraw = true;
            this._resize = 1;
            this.resize().runAsync();
          };
          e();
        }
      }
      function Hq(t, e) {
        const n = this;
        e = e || {};
        Si.call(n);
        if (e.loader) n.loader(e.loader);
        if (e.logger) n.logger(e.logger);
        if (e.logLevel != null) n.logLevel(e.logLevel);
        if (e.locale || t.locale) {
          const i = (0, p.X$)({}, t.locale, e.locale);
          n.locale(Ce(i.number, i.time));
        }
        n._el = null;
        n._elBind = null;
        n._renderType = e.renderer || oy.Canvas;
        n._scenegraph = new rm();
        const i = n._scenegraph.root;
        n._renderer = null;
        (n._tooltip = e.tooltip || Uq), (n._redraw = true);
        n._handler = new jm().scene(i);
        n._globalCursor = false;
        n._preventDefault = false;
        n._timers = [];
        n._eventListeners = [];
        n._resizeListeners = [];
        n._eventConfig = GP(t.eventConfig);
        n.globalCursor(n._eventConfig.globalCursor);
        const r = Dq(n, t, e.expr);
        n._runtime = r;
        n._signals = r.signals;
        n._bind = (t.bindings || []).map((t) => ({ state: null, param: (0, p.X$)({}, t) }));
        if (r.root) r.root.set(i);
        i.source = r.data.root.input;
        n.pulse(r.data.root.input, n.changeset().insert(i.items));
        n._width = n.width();
        n._height = n.height();
        n._viewWidth = $q(n, n._width);
        n._viewHeight = Rq(n, n._height);
        n._origin = [0, 0];
        n._resize = 0;
        n._autosize = 1;
        Oq(n);
        EP(n);
        DP(n);
        n.description(t.description);
        if (e.hover) n.hover();
        if (e.container) n.initialize(e.container, e.bind);
        if (e.watchPixelRatio) n._watchPixelRatio();
      }
      function Vq(t, e) {
        return (0, p.mQ)(t._signals, e) ? t._signals[e] : (0, p.z3)("Unrecognized signal name: " + (0, p.r$)(e));
      }
      function Qq(t, e) {
        const n = (t._targets || []).filter((t) => t._update && t._update.handler === e);
        return n.length ? n[0] : null;
      }
      function Kq(t, e, n, i) {
        let r = Qq(n, i);
        if (!r) {
          r = mq(t, () => i(e, n.value));
          r.handler = i;
          t.on(n, null, r);
        }
        return t;
      }
      function Zq(t, e, n) {
        const i = Qq(e, n);
        if (i) e._targets.remove(i);
        return t;
      }
      (0, p.B)(Hq, Si, {
        async evaluate(t, e, n) {
          await Si.prototype.evaluate.call(this, t, e);
          if (this._redraw || this._resize) {
            try {
              if (this._renderer) {
                if (this._resize) {
                  this._resize = 0;
                  NP(this);
                }
                await this._renderer.renderAsync(this._scenegraph.root);
              }
              this._redraw = false;
            } catch (i) {
              this.error(i);
            }
          }
          if (n) hn(this, n);
          return this;
        },
        dirty(t) {
          this._redraw = true;
          this._renderer && this._renderer.dirty(t);
        },
        description(t) {
          if (arguments.length) {
            const e = t != null ? t + "" : null;
            if (e !== this._desc) kP(this._el, (this._desc = e));
            return this;
          }
          return this._desc;
        },
        container() {
          return this._el;
        },
        scenegraph() {
          return this._scenegraph;
        },
        origin() {
          return this._origin.slice();
        },
        signal(t, e, n) {
          const i = Vq(this, t);
          return arguments.length === 1 ? i.value : this.update(i, e, n);
        },
        width(t) {
          return arguments.length ? this.signal("width", t) : this.signal("width");
        },
        height(t) {
          return arguments.length ? this.signal("height", t) : this.signal("height");
        },
        padding(t) {
          return arguments.length ? this.signal("padding", _q(t)) : _q(this.signal("padding"));
        },
        autosize(t) {
          return arguments.length ? this.signal("autosize", t) : this.signal("autosize");
        },
        background(t) {
          return arguments.length ? this.signal("background", t) : this.signal("background");
        },
        renderer(t) {
          if (!arguments.length) return this._renderType;
          if (!ly(t)) (0, p.z3)("Unrecognized renderer type: " + t);
          if (t !== this._renderType) {
            this._renderType = t;
            this._resetRenderer();
          }
          return this;
        },
        tooltip(t) {
          if (!arguments.length) return this._tooltip;
          if (t !== this._tooltip) {
            this._tooltip = t;
            this._resetRenderer();
          }
          return this;
        },
        loader(t) {
          if (!arguments.length) return this._loader;
          if (t !== this._loader) {
            Si.prototype.loader.call(this, t);
            this._resetRenderer();
          }
          return this;
        },
        resize() {
          this._autosize = 1;
          return this.touch(Vq(this, "autosize"));
        },
        _resetRenderer() {
          if (this._renderer) {
            this._renderer = null;
            this.initialize(this._el, this._elBind);
          }
        },
        _resizeView: Tq,
        addEventListener(t, e, n) {
          let i = e;
          if (!(n && n.trap === false)) {
            i = mq(this, e);
            i.raw = e;
          }
          this._handler.on(t, i);
          return this;
        },
        removeEventListener(t, e) {
          var n = this._handler.handlers(t),
            i = n.length,
            r,
            s;
          while (--i >= 0) {
            s = n[i].type;
            r = n[i].handler;
            if (t === s && (e === r || e === r.raw)) {
              this._handler.off(s, r);
              break;
            }
          }
          return this;
        },
        addResizeListener(t) {
          const e = this._resizeListeners;
          if (!e.includes(t)) {
            e.push(t);
          }
          return this;
        },
        removeResizeListener(t) {
          var e = this._resizeListeners,
            n = e.indexOf(t);
          if (n >= 0) {
            e.splice(n, 1);
          }
          return this;
        },
        addSignalListener(t, e) {
          return Kq(this, t, Vq(this, t), e);
        },
        removeSignalListener(t, e) {
          return Zq(this, Vq(this, t), e);
        },
        addDataListener(t, e) {
          return Kq(this, t, FP(this, t).values, e);
        },
        removeDataListener(t, e) {
          return Zq(this, FP(this, t).values, e);
        },
        globalCursor(t) {
          if (arguments.length) {
            if (this._globalCursor !== !!t) {
              const e = CP(this, null);
              this._globalCursor = !!t;
              if (e) CP(this, e);
            }
            return this;
          } else {
            return this._globalCursor;
          }
        },
        preventDefault(t) {
          if (arguments.length) {
            this._preventDefault = t;
            return this;
          } else {
            return this._preventDefault;
          }
        },
        timer: Iq,
        events: HP,
        finalize: JP,
        hover: ZP,
        data: SP,
        change: BP,
        insert: zP,
        remove: $P,
        scale: Cq,
        initialize: yq,
        toImageURL: Aq,
        toCanvas: Eq,
        toSVG: Mq,
        getState: Nq,
        setState: qq,
        _watchPixelRatio: Xq,
      });
      var Jq = n(45948);
      function tI(t) {
        return (0, p.Gv)(t) ? t : { type: t || "pad" };
      }
      const eI = (t) => +t || 0;
      const nI = (t) => ({ top: t, bottom: t, left: t, right: t });
      function iI(t) {
        return !(0, p.Gv)(t) ? nI(eI(t)) : t.signal ? t : { top: eI(t.top), bottom: eI(t.bottom), left: eI(t.left), right: eI(t.right) };
      }
      const rI = (t) => ((0, p.Gv)(t) && !(0, p.cy)(t) ? (0, p.X$)({}, t) : { value: t });
      function sI(t, e, n, i) {
        if (n != null) {
          const r = ((0, p.Gv)(n) && !(0, p.cy)(n)) || ((0, p.cy)(n) && n.length && (0, p.Gv)(n[0]));
          if (r) {
            t.update[e] = n;
          } else {
            t[i || "enter"][e] = { value: n };
          }
          return 1;
        } else {
          return 0;
        }
      }
      function aI(t, e, n) {
        for (const i in e) {
          sI(t, i, e[i]);
        }
        for (const i in n) {
          sI(t, i, n[i], "update");
        }
      }
      function oI(t, e, n) {
        for (const i in e) {
          if (n && (0, p.mQ)(n, i)) continue;
          t[i] = (0, p.X$)(t[i] || {}, e[i]);
        }
        return t;
      }
      function uI(t, e) {
        return e && ((e.enter && e.enter[t]) || (e.update && e.update[t]));
      }
      const lI = "mark";
      const cI = "frame";
      const fI = "scope";
      const dI = "axis";
      const hI = "axis-domain";
      const pI = "axis-grid";
      const mI = "axis-label";
      const gI = "axis-tick";
      const yI = "axis-title";
      const vI = "legend";
      const bI = "legend-band";
      const xI = "legend-entry";
      const _I = "legend-gradient";
      const wI = "legend-label";
      const AI = "legend-symbol";
      const kI = "legend-title";
      const EI = "title";
      const MI = "title-text";
      const DI = "title-subtitle";
      function CI(t, e, n, i, r) {
        const s = {},
          a = {};
        let o, u, l, c;
        u = "lineBreak";
        if (e === "text" && r[u] != null && !uI(u, t)) {
          FI(s, u, r[u]);
        }
        if (n == "legend" || String(n).startsWith("axis")) {
          n = null;
        }
        c = n === cI ? r.group : n === lI ? (0, p.X$)({}, r.mark, r[e]) : null;
        for (u in c) {
          l = uI(u, t) || ((u === "fill" || u === "stroke") && (uI("fill", t) || uI("stroke", t)));
          if (!l) FI(s, u, c[u]);
        }
        (0, p.YO)(i).forEach((e) => {
          const n = r.style && r.style[e];
          for (const i in n) {
            if (!uI(i, t)) {
              FI(s, i, n[i]);
            }
          }
        });
        t = (0, p.X$)({}, t);
        for (u in s) {
          c = s[u];
          if (c.signal) {
            (o = o || {})[u] = c;
          } else {
            a[u] = c;
          }
        }
        t.enter = (0, p.X$)(a, t.enter);
        if (o) t.update = (0, p.X$)(o, t.update);
        return t;
      }
      function FI(t, e, n) {
        t[e] = n && n.signal ? { signal: n.signal } : { value: n };
      }
      const SI = (t) => ((0, p.Kg)(t) ? (0, p.r$)(t) : t.signal ? `(${t.signal})` : TI(t));
      function BI(t) {
        if (t.gradient != null) {
          return RI(t);
        }
        let e = t.signal
          ? `(${t.signal})`
          : t.color
            ? $I(t.color)
            : t.field != null
              ? TI(t.field)
              : t.value !== undefined
                ? (0, p.r$)(t.value)
                : undefined;
        if (t.scale != null) {
          e = LI(t, e);
        }
        if (e === undefined) {
          e = null;
        }
        if (t.exponent != null) {
          e = `pow(${e},${OI(t.exponent)})`;
        }
        if (t.mult != null) {
          e += `*${OI(t.mult)}`;
        }
        if (t.offset != null) {
          e += `+${OI(t.offset)}`;
        }
        if (t.round) {
          e = `round(${e})`;
        }
        return e;
      }
      const zI = (t, e, n, i) => `(${t}(${[e, n, i].map(BI).join(",")})+'')`;
      function $I(t) {
        return t.c
          ? zI("hcl", t.h, t.c, t.l)
          : t.h || t.s
            ? zI("hsl", t.h, t.s, t.l)
            : t.l || t.a
              ? zI("lab", t.l, t.a, t.b)
              : t.r || t.g || t.b
                ? zI("rgb", t.r, t.g, t.b)
                : null;
      }
      function RI(t) {
        const e = [t.start, t.stop, t.count].map((t) => (t == null ? null : (0, p.r$)(t)));
        while (e.length && (0, p.se)(e) == null) e.pop();
        e.unshift(SI(t.gradient));
        return `gradient(${e.join(",")})`;
      }
      function OI(t) {
        return (0, p.Gv)(t) ? "(" + BI(t) + ")" : t;
      }
      function TI(t) {
        return NI((0, p.Gv)(t) ? t : { datum: t });
      }
      function NI(t) {
        let e, n, i;
        if (t.signal) {
          e = "datum";
          i = t.signal;
        } else if (t.group || t.parent) {
          n = Math.max(1, t.level || 1);
          e = "item";
          while (n-- > 0) {
            e += ".mark.group";
          }
          if (t.parent) {
            i = t.parent;
            e += ".datum";
          } else {
            i = t.group;
          }
        } else if (t.datum) {
          e = "datum";
          i = t.datum;
        } else {
          (0, p.z3)("Invalid field reference: " + (0, p.r$)(t));
        }
        if (!t.signal) {
          i = (0, p.Kg)(i) ? (0, p.iv)(i).map(p.r$).join("][") : NI(i);
        }
        return e + "[" + i + "]";
      }
      function LI(t, e) {
        const n = SI(t.scale);
        if (t.range != null) {
          e = `lerp(_range(${n}), ${+t.range})`;
        } else {
          if (e !== undefined) e = `_scale(${n}, ${e})`;
          if (t.band) {
            e = (e ? e + "+" : "") + `_bandwidth(${n})` + (+t.band === 1 ? "" : "*" + OI(t.band));
            if (t.extra) {
              e = `(datum.extra ? _scale(${n}, datum.extra.value) : ${e})`;
            }
          }
          if (e == null) e = "0";
        }
        return e;
      }
      function PI(t) {
        let e = "";
        t.forEach((t) => {
          const n = BI(t);
          e += t.test ? `(${t.test})?${n}:` : n;
        });
        if ((0, p.se)(e) === ":") {
          e += "null";
        }
        return e;
      }
      function qI(t, e, n, i, r, s) {
        const a = {};
        s = s || {};
        s.encoders = { $encode: a };
        t = CI(t, e, n, i, r.config);
        for (const o in t) {
          a[o] = II(t[o], e, s, r);
        }
        return s;
      }
      function II(t, e, n, i) {
        const r = {},
          s = {};
        for (const a in t) {
          if (t[a] != null) {
            r[a] = jI(UI(t[a]), i, n, s);
          }
        }
        return { $expr: { marktype: e, channels: r }, $fields: Object.keys(s), $output: Object.keys(t) };
      }
      function UI(t) {
        return (0, p.cy)(t) ? PI(t) : BI(t);
      }
      function jI(t, e, n, i) {
        const r = jL(t, e);
        r.$fields.forEach((t) => (i[t] = 1));
        (0, p.X$)(n, r.$params);
        return r.$expr;
      }
      const GI = "outer",
        YI = ["value", "update", "init", "react", "bind"];
      function WI(t, e) {
        (0, p.z3)(t + ' for "outer" push: ' + (0, p.r$)(e));
      }
      function XI(t, e) {
        const n = t.name;
        if (t.push === GI) {
          if (!e.signals[n]) WI("No prior signal definition", n);
          YI.forEach((e) => {
            if (t[e] !== undefined) WI("Invalid property ", e);
          });
        } else {
          const i = e.addSignal(n, t.value);
          if (t.react === false) i.react = false;
          if (t.bind) e.addBinding(n, t.bind);
        }
      }
      function HI(t, e, n, i) {
        this.id = -1;
        this.type = t;
        this.value = e;
        this.params = n;
        if (i) this.parent = i;
      }
      function VI(t, e, n, i) {
        return new HI(t, e, n, i);
      }
      function QI(t, e) {
        return VI("operator", t, e);
      }
      function KI(t) {
        const e = { $ref: t.id };
        if (t.id < 0) (t.refs = t.refs || []).push(e);
        return e;
      }
      function ZI(t, e) {
        return e ? { $field: t, $name: e } : { $field: t };
      }
      const JI = ZI("key");
      function tU(t, e) {
        return { $compare: t, $order: e };
      }
      function eU(t, e) {
        const n = { $key: t };
        if (e) n.$flat = true;
        return n;
      }
      const nU = "ascending";
      const iU = "descending";
      function rU(t) {
        return !(0, p.Gv)(t) ? "" : (t.order === iU ? "-" : "+") + sU(t.op, t.field);
      }
      function sU(t, e) {
        return (t && t.signal ? "$" + t.signal : t || "") + (t && e ? "_" : "") + (e && e.signal ? "$" + e.signal : e || "");
      }
      const aU = "scope";
      const oU = "view";
      function uU(t) {
        return t && t.signal;
      }
      function lU(t) {
        return t && t.expr;
      }
      function cU(t) {
        if (uU(t)) return true;
        if ((0, p.Gv)(t))
          for (const e in t) {
            if (cU(t[e])) return true;
          }
        return false;
      }
      function fU(t, e) {
        return t != null ? t : e;
      }
      function dU(t) {
        return (t && t.signal) || t;
      }
      const hU = "timer";
      function pU(t, e) {
        const n = t.merge ? gU : t.stream ? yU : t.type ? vU : (0, p.z3)("Invalid stream specification: " + (0, p.r$)(t));
        return n(t, e);
      }
      function mU(t) {
        return t === aU ? oU : t || oU;
      }
      function gU(t, e) {
        const n = t.merge.map((t) => pU(t, e)),
          i = bU({ merge: n }, t, e);
        return e.addStream(i).id;
      }
      function yU(t, e) {
        const n = pU(t.stream, e),
          i = bU({ stream: n }, t, e);
        return e.addStream(i).id;
      }
      function vU(t, e) {
        let n;
        if (t.type === hU) {
          n = e.event(hU, t.throttle);
          t = { between: t.between, filter: t.filter };
        } else {
          n = e.event(mU(t.source), t.type);
        }
        const i = bU({ stream: n }, t, e);
        return Object.keys(i).length === 1 ? n : e.addStream(i).id;
      }
      function bU(t, e, n) {
        let i = e.between;
        if (i) {
          if (i.length !== 2) {
            (0, p.z3)('Stream "between" parameter must have 2 entries: ' + (0, p.r$)(e));
          }
          t.between = [pU(i[0], n), pU(i[1], n)];
        }
        i = e.filter ? [].concat(e.filter) : [];
        if (e.marktype || e.markname || e.markrole) {
          i.push(xU(e.marktype, e.markname, e.markrole));
        }
        if (e.source === aU) {
          i.push("inScope(event.item)");
        }
        if (i.length) {
          t.filter = jL("(" + i.join(")&&(") + ")", n).$expr;
        }
        if ((i = e.throttle) != null) {
          t.throttle = +i;
        }
        if ((i = e.debounce) != null) {
          t.debounce = +i;
        }
        if (e.consume) {
          t.consume = true;
        }
        return t;
      }
      function xU(t, e, n) {
        const i = "event.item";
        return (
          i +
          (t && t !== "*" ? "&&" + i + ".mark.marktype==='" + t + "'" : "") +
          (n ? "&&" + i + ".mark.role==='" + n + "'" : "") +
          (e ? "&&" + i + ".mark.name==='" + e + "'" : "")
        );
      }
      const _U = { code: "_.$value", ast: { type: "Identifier", value: "value" } };
      function wU(t, e, n) {
        const i = t.encode,
          r = { target: n };
        let s = t.events,
          a = t.update,
          o = [];
        if (!s) {
          (0, p.z3)("Signal update missing events specification.");
        }
        if ((0, p.Kg)(s)) {
          s = (0, Jq.P)(s, e.isSubscope() ? aU : oU);
        }
        s = (0, p.YO)(s).filter((t) => (t.signal || t.scale ? (o.push(t), 0) : 1));
        if (o.length > 1) {
          o = [kU(o)];
        }
        if (s.length) {
          o.push(s.length > 1 ? { merge: s } : s[0]);
        }
        if (i != null) {
          if (a) (0, p.z3)("Signal encode and update are mutually exclusive.");
          a = "encode(item()," + (0, p.r$)(i) + ")";
        }
        r.update = (0, p.Kg)(a)
          ? jL(a, e)
          : a.expr != null
            ? jL(a.expr, e)
            : a.value != null
              ? a.value
              : a.signal != null
                ? { $expr: _U, $params: { $value: e.signalRef(a.signal) } }
                : (0, p.z3)("Invalid signal update specification.");
        if (t.force) {
          r.options = { force: true };
        }
        o.forEach((t) => e.addUpdate((0, p.X$)(AU(t, e), r)));
      }
      function AU(t, e) {
        return { source: t.signal ? e.signalRef(t.signal) : t.scale ? e.scaleRef(t.scale) : pU(t, e) };
      }
      function kU(t) {
        return { signal: "[" + t.map((t) => (t.scale ? 'scale("' + t.scale + '")' : t.signal)) + "]" };
      }
      function EU(t, e) {
        const n = e.getSignal(t.name);
        let i = t.update;
        if (t.init) {
          if (i) {
            (0, p.z3)("Signals can not include both init and update expressions.");
          } else {
            i = t.init;
            n.initonly = true;
          }
        }
        if (i) {
          i = jL(i, e);
          n.update = i.$expr;
          n.params = i.$params;
        }
        if (t.on) {
          t.on.forEach((t) => wU(t, e, n.id));
        }
      }
      const MU = (t) => (e, n, i) => VI(t, n, e || undefined, i);
      const DU = MU("aggregate");
      const CU = MU("axisticks");
      const FU = MU("bound");
      const SU = MU("collect");
      const BU = MU("compare");
      const zU = MU("datajoin");
      const $U = MU("encode");
      const RU = MU("expression");
      const OU = MU("facet");
      const TU = MU("field");
      const NU = MU("key");
      const LU = MU("legendentries");
      const PU = MU("load");
      const qU = MU("mark");
      const IU = MU("multiextent");
      const UU = MU("multivalues");
      const jU = MU("overlap");
      const GU = MU("params");
      const YU = MU("prefacet");
      const WU = MU("projection");
      const XU = MU("proxy");
      const HU = MU("relay");
      const VU = MU("render");
      const QU = MU("scale");
      const KU = MU("sieve");
      const ZU = MU("sortitems");
      const JU = MU("viewlayout");
      const tj = MU("values");
      let ej = 0;
      const nj = { min: "min", max: "max", count: "sum" };
      function ij(t, e) {
        const n = t.type || "linear";
        if (!Wl(n)) {
          (0, p.z3)("Unrecognized scale type: " + (0, p.r$)(n));
        }
        e.addScale(t.name, { type: n, domain: undefined });
      }
      function rj(t, e) {
        const n = e.getScale(t.name).params;
        let i;
        n.domain = uj(t.domain, t, e);
        if (t.range != null) {
          n.range = xj(t, e, n);
        }
        if (t.interpolate != null) {
          bj(t.interpolate, n);
        }
        if (t.nice != null) {
          n.nice = vj(t.nice, e);
        }
        if (t.bins != null) {
          n.bins = yj(t.bins, e);
        }
        for (i in t) {
          if ((0, p.mQ)(n, i) || i === "name") continue;
          n[i] = sj(t[i], e);
        }
      }
      function sj(t, e) {
        return !(0, p.Gv)(t) ? t : t.signal ? e.signalRef(t.signal) : (0, p.z3)("Unsupported object: " + (0, p.r$)(t));
      }
      function aj(t, e) {
        return t.signal ? e.signalRef(t.signal) : t.map((t) => sj(t, e));
      }
      function oj(t) {
        (0, p.z3)("Can not find data set: " + (0, p.r$)(t));
      }
      function uj(t, e, n) {
        if (!t) {
          if (e.domainMin != null || e.domainMax != null) {
            (0, p.z3)("No scale domain defined for domainMin/domainMax to override.");
          }
          return;
        }
        return t.signal ? n.signalRef(t.signal) : ((0, p.cy)(t) ? lj : t.fields ? fj : cj)(t, e, n);
      }
      function lj(t, e, n) {
        return t.map((t) => sj(t, n));
      }
      function cj(t, e, n) {
        const i = n.getData(t.data);
        if (!i) oj(t.data);
        return Vl(e.type) ? i.valuesRef(n, t.field, pj(t.sort, false)) : tc(e.type) ? i.domainRef(n, t.field) : i.extentRef(n, t.field);
      }
      function fj(t, e, n) {
        const i = t.data,
          r = t.fields.reduce((t, e) => {
            e = (0, p.Kg)(e) ? { data: i, field: e } : (0, p.cy)(e) || e.signal ? dj(e, n) : e;
            t.push(e);
            return t;
          }, []);
        return (Vl(e.type) ? hj : tc(e.type) ? mj : gj)(t, n, r);
      }
      function dj(t, e) {
        const n = "_:vega:_" + ej++,
          i = SU({});
        if ((0, p.cy)(t)) {
          i.value = { $ingest: t };
        } else if (t.signal) {
          const r = "setdata(" + (0, p.r$)(n) + "," + t.signal + ")";
          i.params.input = e.signalRef(r);
        }
        e.addDataPipeline(n, [i, KU({})]);
        return { data: n, field: "data" };
      }
      function hj(t, e, n) {
        const i = pj(t.sort, true);
        let r, s;
        const a = n.map((t) => {
          const n = e.getData(t.data);
          if (!n) oj(t.data);
          return n.countsRef(e, t.field, i);
        });
        const o = { groupby: JI, pulse: a };
        if (i) {
          r = i.op || "count";
          s = i.field ? sU(r, i.field) : "count";
          o.ops = [nj[r]];
          o.fields = [e.fieldRef(s)];
          o.as = [s];
        }
        r = e.add(DU(o));
        const u = e.add(SU({ pulse: KI(r) }));
        s = e.add(tj({ field: JI, sort: e.sortRef(i), pulse: KI(u) }));
        return KI(s);
      }
      function pj(t, e) {
        if (t) {
          if (!t.field && !t.op) {
            if ((0, p.Gv)(t)) t.field = "key";
            else t = { field: "key" };
          } else if (!t.field && t.op !== "count") {
            (0, p.z3)("No field provided for sort aggregate op: " + t.op);
          } else if (e && t.field) {
            if (t.op && !nj[t.op]) {
              (0, p.z3)("Multiple domain scales can not be sorted using " + t.op);
            }
          }
        }
        return t;
      }
      function mj(t, e, n) {
        const i = n.map((t) => {
          const n = e.getData(t.data);
          if (!n) oj(t.data);
          return n.domainRef(e, t.field);
        });
        return KI(e.add(UU({ values: i })));
      }
      function gj(t, e, n) {
        const i = n.map((t) => {
          const n = e.getData(t.data);
          if (!n) oj(t.data);
          return n.extentRef(e, t.field);
        });
        return KI(e.add(IU({ extents: i })));
      }
      function yj(t, e) {
        return t.signal || (0, p.cy)(t) ? aj(t, e) : e.objectProperty(t);
      }
      function vj(t, e) {
        return t.signal ? e.signalRef(t.signal) : (0, p.Gv)(t) ? { interval: sj(t.interval), step: sj(t.step) } : sj(t);
      }
      function bj(t, e) {
        e.interpolate = sj(t.type || t);
        if (t.gamma != null) {
          e.interpolateGamma = sj(t.gamma);
        }
      }
      function xj(t, e, n) {
        const i = e.config.range;
        let r = t.range;
        if (r.signal) {
          return e.signalRef(r.signal);
        } else if ((0, p.Kg)(r)) {
          if (i && (0, p.mQ)(i, r)) {
            t = (0, p.X$)({}, t, { range: i[r] });
            return xj(t, e, n);
          } else if (r === "width") {
            r = [0, { signal: "width" }];
          } else if (r === "height") {
            r = Vl(t.type) ? [0, { signal: "height" }] : [{ signal: "height" }, 0];
          } else {
            (0, p.z3)("Unrecognized scale range value: " + (0, p.r$)(r));
          }
        } else if (r.scheme) {
          n.scheme = (0, p.cy)(r.scheme) ? aj(r.scheme, e) : sj(r.scheme, e);
          if (r.extent) n.schemeExtent = aj(r.extent, e);
          if (r.count) n.schemeCount = sj(r.count, e);
          return;
        } else if (r.step) {
          n.rangeStep = sj(r.step, e);
          return;
        } else if (Vl(t.type) && !(0, p.cy)(r)) {
          return uj(r, t, e);
        } else if (!(0, p.cy)(r)) {
          (0, p.z3)("Unsupported range type: " + (0, p.r$)(r));
        }
        return r.map((t) => ((0, p.cy)(t) ? aj : sj)(t, e));
      }
      function _j(t, e) {
        const n = e.config.projection || {},
          i = {};
        for (const r in t) {
          if (r === "name") continue;
          i[r] = wj(t[r], r, e);
        }
        for (const r in n) {
          if (i[r] == null) {
            i[r] = wj(n[r], r, e);
          }
        }
        e.addProjection(t.name, i);
      }
      function wj(t, e, n) {
        return (0, p.cy)(t)
          ? t.map((t) => wj(t, e, n))
          : !(0, p.Gv)(t)
            ? t
            : t.signal
              ? n.signalRef(t.signal)
              : e === "fit"
                ? t
                : (0, p.z3)("Unsupported parameter object: " + (0, p.r$)(t));
      }
      const Aj = "top";
      const kj = "left";
      const Ej = "right";
      const Mj = "bottom";
      const Dj = "center";
      const Cj = "vertical";
      const Fj = "start";
      const Sj = "middle";
      const Bj = "end";
      const zj = "index";
      const $j = "label";
      const Rj = "offset";
      const Oj = "perc";
      const Tj = "perc2";
      const Nj = "value";
      const Lj = "guide-label";
      const Pj = "guide-title";
      const qj = "group-title";
      const Ij = "group-subtitle";
      const Uj = "symbol";
      const jj = "gradient";
      const Gj = "discrete";
      const Yj = "size";
      const Wj = "shape";
      const Xj = "fill";
      const Hj = "stroke";
      const Vj = "strokeWidth";
      const Qj = "strokeDash";
      const Kj = "opacity";
      const Zj = [Yj, Wj, Xj, Hj, Vj, Qj, Kj];
      const Jj = { name: 1, style: 1, interactive: 1 };
      const tG = { value: 0 };
      const eG = { value: 1 };
      const nG = "group";
      const iG = "rect";
      const rG = "rule";
      const sG = "symbol";
      const aG = "text";
      function oG(t) {
        t.type = nG;
        t.interactive = t.interactive || false;
        return t;
      }
      function uG(t, e) {
        const n = (n, i) => fU(t[n], fU(e[n], i));
        n.isVertical = (n) => Cj === fU(t.direction, e.direction || (n ? e.symbolDirection : e.gradientDirection));
        n.gradientLength = () => fU(t.gradientLength, e.gradientLength || e.gradientWidth);
        n.gradientThickness = () => fU(t.gradientThickness, e.gradientThickness || e.gradientHeight);
        n.entryColumns = () => fU(t.columns, fU(e.columns, +n.isVertical(true)));
        return n;
      }
      function lG(t, e) {
        const n = e && ((e.update && e.update[t]) || (e.enter && e.enter[t]));
        return n && n.signal ? n : n ? n.value : null;
      }
      function cG(t, e, n) {
        const i = e.config.style[n];
        return i && i[t];
      }
      function fG(t, e, n) {
        return `item.anchor === '${Fj}' ? ${t} : item.anchor === '${Bj}' ? ${e} : ${n}`;
      }
      const dG = fG((0, p.r$)(kj), (0, p.r$)(Ej), (0, p.r$)(Dj));
      function hG(t) {
        const e = t("tickBand");
        let n = t("tickOffset"),
          i,
          r;
        if (!e) {
          i = t("bandPosition");
          r = t("tickExtra");
        } else if (e.signal) {
          i = { signal: `(${e.signal}) === 'extent' ? 1 : 0.5` };
          r = { signal: `(${e.signal}) === 'extent'` };
          if (!(0, p.Gv)(n)) {
            n = { signal: `(${e.signal}) === 'extent' ? 0 : ${n}` };
          }
        } else if (e === "extent") {
          i = 1;
          r = true;
          n = 0;
        } else {
          i = 0.5;
          r = false;
        }
        return { extra: r, band: i, offset: n };
      }
      function pG(t, e) {
        return !e ? t : !t ? e : !(0, p.Gv)(t) ? { value: t, offset: e } : Object.assign({}, t, { offset: pG(t.offset, e) });
      }
      function mG(t, e) {
        if (e) {
          t.name = e.name;
          t.style = e.style || t.style;
          t.interactive = !!e.interactive;
          t.encode = oI(t.encode, e, Jj);
        } else {
          t.interactive = false;
        }
        return t;
      }
      function gG(t, e, n, i) {
        const r = uG(t, n),
          s = r.isVertical(),
          a = r.gradientThickness(),
          o = r.gradientLength();
        let u, l, c, f, d;
        if (s) {
          l = [0, 1];
          c = [0, 0];
          f = a;
          d = o;
        } else {
          l = [0, 0];
          c = [1, 0];
          f = o;
          d = a;
        }
        const h = {
          enter: (u = { opacity: tG, x: tG, y: tG, width: rI(f), height: rI(d) }),
          update: (0, p.X$)({}, u, { opacity: eG, fill: { gradient: e, start: l, stop: c } }),
          exit: { opacity: tG },
        };
        aI(h, { stroke: r("gradientStrokeColor"), strokeWidth: r("gradientStrokeWidth") }, { opacity: r("gradientOpacity") });
        return mG({ type: iG, role: _I, encode: h }, i);
      }
      function yG(t, e, n, i, r) {
        const s = uG(t, n),
          a = s.isVertical(),
          o = s.gradientThickness(),
          u = s.gradientLength();
        let l,
          c,
          f,
          d,
          h = "";
        a ? ((l = "y"), (f = "y2"), (c = "x"), (d = "width"), (h = "1-")) : ((l = "x"), (f = "x2"), (c = "y"), (d = "height"));
        const m = { opacity: tG, fill: { scale: e, field: Nj } };
        m[l] = { signal: h + "datum." + Oj, mult: u };
        m[c] = tG;
        m[f] = { signal: h + "datum." + Tj, mult: u };
        m[d] = rI(o);
        const g = { enter: m, update: (0, p.X$)({}, m, { opacity: eG }), exit: { opacity: tG } };
        aI(g, { stroke: s("gradientStrokeColor"), strokeWidth: s("gradientStrokeWidth") }, { opacity: s("gradientOpacity") });
        return mG({ type: iG, role: bI, key: Nj, from: r, encode: g }, i);
      }
      const vG = `datum.${Oj}<=0?"${kj}":datum.${Oj}>=1?"${Ej}":"${Dj}"`,
        bG = `datum.${Oj}<=0?"${Mj}":datum.${Oj}>=1?"${Aj}":"${Sj}"`;
      function xG(t, e, n, i) {
        const r = uG(t, e),
          s = r.isVertical(),
          a = rI(r.gradientThickness()),
          o = r.gradientLength();
        let u = r("labelOverlap"),
          l,
          c,
          f,
          d,
          h = "";
        const p = { enter: (l = { opacity: tG }), update: (c = { opacity: eG, text: { field: $j } }), exit: { opacity: tG } };
        aI(p, {
          fill: r("labelColor"),
          fillOpacity: r("labelOpacity"),
          font: r("labelFont"),
          fontSize: r("labelFontSize"),
          fontStyle: r("labelFontStyle"),
          fontWeight: r("labelFontWeight"),
          limit: fU(t.labelLimit, e.gradientLabelLimit),
        });
        if (s) {
          l.align = { value: "left" };
          l.baseline = c.baseline = { signal: bG };
          f = "y";
          d = "x";
          h = "1-";
        } else {
          l.align = c.align = { signal: vG };
          l.baseline = { value: "top" };
          f = "x";
          d = "y";
        }
        l[f] = c[f] = { signal: h + "datum." + Oj, mult: o };
        l[d] = c[d] = a;
        a.offset = fU(t.labelOffset, e.gradientLabelOffset) || 0;
        u = u ? { separation: r("labelSeparation"), method: u, order: "datum." + zj } : undefined;
        return mG({ type: aG, role: wI, style: Lj, key: Nj, from: i, encode: p, overlap: u }, n);
      }
      function _G(t, e, n, i, r) {
        const s = uG(t, e),
          a = n.entries,
          o = !!(a && a.interactive),
          u = a ? a.name : undefined,
          l = s("clipHeight"),
          c = s("symbolOffset"),
          f = { data: "value" },
          d = `(${r}) ? datum.${Rj} : datum.${Yj}`,
          h = l ? rI(l) : { field: Yj },
          p = `datum.${zj}`,
          m = `max(1, ${r})`;
        let g, y, v, b, x;
        h.mult = 0.5;
        g = {
          enter: (y = { opacity: tG, x: { signal: d, mult: 0.5, offset: c }, y: h }),
          update: (v = { opacity: eG, x: y.x, y: y.y }),
          exit: { opacity: tG },
        };
        let _ = null,
          w = null;
        if (!t.fill) {
          _ = e.symbolBaseFillColor;
          w = e.symbolBaseStrokeColor;
        }
        aI(
          g,
          {
            fill: s("symbolFillColor", _),
            shape: s("symbolType"),
            size: s("symbolSize"),
            stroke: s("symbolStrokeColor", w),
            strokeDash: s("symbolDash"),
            strokeDashOffset: s("symbolDashOffset"),
            strokeWidth: s("symbolStrokeWidth"),
          },
          { opacity: s("symbolOpacity") }
        );
        Zj.forEach((e) => {
          if (t[e]) {
            v[e] = y[e] = { scale: t[e], field: Nj };
          }
        });
        const A = mG({ type: sG, role: AI, key: Nj, from: f, clip: l ? true : undefined, encode: g }, n.symbols);
        const k = rI(c);
        k.offset = s("labelOffset");
        g = {
          enter: (y = { opacity: tG, x: { signal: d, offset: k }, y: h }),
          update: (v = { opacity: eG, text: { field: $j }, x: y.x, y: y.y }),
          exit: { opacity: tG },
        };
        aI(g, {
          align: s("labelAlign"),
          baseline: s("labelBaseline"),
          fill: s("labelColor"),
          fillOpacity: s("labelOpacity"),
          font: s("labelFont"),
          fontSize: s("labelFontSize"),
          fontStyle: s("labelFontStyle"),
          fontWeight: s("labelFontWeight"),
          limit: s("labelLimit"),
        });
        const E = mG({ type: aG, role: wI, style: Lj, key: Nj, from: f, encode: g }, n.labels);
        g = {
          enter: { noBound: { value: !l }, width: tG, height: l ? rI(l) : tG, opacity: tG },
          exit: { opacity: tG },
          update: (v = { opacity: eG, row: { signal: null }, column: { signal: null } }),
        };
        if (s.isVertical(true)) {
          b = `ceil(item.mark.items.length / ${m})`;
          v.row.signal = `${p}%${b}`;
          v.column.signal = `floor(${p} / ${b})`;
          x = { field: ["row", p] };
        } else {
          v.row.signal = `floor(${p} / ${m})`;
          v.column.signal = `${p} % ${m}`;
          x = { field: p };
        }
        v.column.signal = `(${r})?${v.column.signal}:${p}`;
        i = { facet: { data: i, name: "value", groupby: zj } };
        return oG({ role: fI, from: i, encode: oI(g, a, Jj), marks: [A, E], name: u, interactive: o, sort: x });
      }
      function wG(t, e) {
        const n = uG(t, e);
        return {
          align: n("gridAlign"),
          columns: n.entryColumns(),
          center: { row: true, column: false },
          padding: { row: n("rowPadding"), column: n("columnPadding") },
        };
      }
      const AG = 'item.orient === "left"',
        kG = 'item.orient === "right"',
        EG = `(${AG} || ${kG})`,
        MG = `datum.vgrad && ${EG}`,
        DG = fG('"top"', '"bottom"', '"middle"'),
        CG = fG('"right"', '"left"', '"center"'),
        FG = `datum.vgrad && ${kG} ? (${CG}) : (${EG} && !(datum.vgrad && ${AG})) ? "left" : ${dG}`,
        SG = `item._anchor || (${EG} ? "middle" : "start")`,
        BG = `${MG} ? (${AG} ? -90 : 90) : 0`,
        zG = `${EG} ? (datum.vgrad ? (${kG} ? "bottom" : "top") : ${DG}) : "top"`;
      function $G(t, e, n, i) {
        const r = uG(t, e);
        const s = {
          enter: { opacity: tG },
          update: { opacity: eG, x: { field: { group: "padding" } }, y: { field: { group: "padding" } } },
          exit: { opacity: tG },
        };
        aI(
          s,
          {
            orient: r("titleOrient"),
            _anchor: r("titleAnchor"),
            anchor: { signal: SG },
            angle: { signal: BG },
            align: { signal: FG },
            baseline: { signal: zG },
            text: t.title,
            fill: r("titleColor"),
            fillOpacity: r("titleOpacity"),
            font: r("titleFont"),
            fontSize: r("titleFontSize"),
            fontStyle: r("titleFontStyle"),
            fontWeight: r("titleFontWeight"),
            limit: r("titleLimit"),
            lineHeight: r("titleLineHeight"),
          },
          { align: r("titleAlign"), baseline: r("titleBaseline") }
        );
        return mG({ type: aG, role: kI, style: Pj, from: i, encode: s }, n);
      }
      function RG(t, e) {
        let n;
        if ((0, p.Gv)(t)) {
          if (t.signal) {
            n = t.signal;
          } else if (t.path) {
            n = "pathShape(" + OG(t.path) + ")";
          } else if (t.sphere) {
            n = "geoShape(" + OG(t.sphere) + ', {type: "Sphere"})';
          }
        }
        return n ? e.signalRef(n) : !!t;
      }
      function OG(t) {
        return (0, p.Gv)(t) && t.signal ? t.signal : (0, p.r$)(t);
      }
      function TG(t) {
        const e = t.role || "";
        return e.startsWith("axis") || e.startsWith("legend") || e.startsWith("title") ? e : t.type === nG ? fI : e || lI;
      }
      function NG(t) {
        return {
          marktype: t.type,
          name: t.name || undefined,
          role: t.role || TG(t),
          zindex: +t.zindex || undefined,
          aria: t.aria,
          description: t.description,
        };
      }
      function LG(t, e) {
        return t && t.signal ? e.signalRef(t.signal) : t === false ? false : true;
      }
      function PG(t, e) {
        const n = Ri(t.type);
        if (!n) (0, p.z3)("Unrecognized transform type: " + (0, p.r$)(t.type));
        const i = VI(n.type.toLowerCase(), null, qG(n, t, e));
        if (t.signal) e.addSignal(t.signal, e.proxy(i));
        i.metadata = n.metadata || {};
        return i;
      }
      function qG(t, e, n) {
        const i = {},
          r = t.params.length;
        for (let s = 0; s < r; ++s) {
          const r = t.params[s];
          i[r.name] = IG(r, e, n);
        }
        return i;
      }
      function IG(t, e, n) {
        const i = t.type,
          r = e[t.name];
        if (i === "index") {
          return jG(t, e, n);
        } else if (r === undefined) {
          if (t.required) {
            (0, p.z3)("Missing required " + (0, p.r$)(e.type) + " parameter: " + (0, p.r$)(t.name));
          }
          return;
        } else if (i === "param") {
          return GG(t, e, n);
        } else if (i === "projection") {
          return n.projectionRef(e[t.name]);
        }
        return t.array && !uU(r) ? r.map((e) => UG(t, e, n)) : UG(t, r, n);
      }
      function UG(t, e, n) {
        const i = t.type;
        if (uU(e)) {
          return VG(i)
            ? (0, p.z3)("Expression references can not be signals.")
            : QG(i)
              ? n.fieldRef(e)
              : KG(i)
                ? n.compareRef(e)
                : n.signalRef(e.signal);
        } else {
          const r = t.expr || QG(i);
          return r && WG(e)
            ? n.exprRef(e.expr, e.as)
            : r && XG(e)
              ? ZI(e.field, e.as)
              : VG(i)
                ? jL(e, n)
                : HG(i)
                  ? KI(n.getData(e).values)
                  : QG(i)
                    ? ZI(e)
                    : KG(i)
                      ? n.compareRef(e)
                      : e;
        }
      }
      function jG(t, e, n) {
        if (!(0, p.Kg)(e.from)) {
          (0, p.z3)('Lookup "from" parameter must be a string literal.');
        }
        return n.getData(e.from).lookupRef(n, e.key);
      }
      function GG(t, e, n) {
        const i = e[t.name];
        if (t.array) {
          if (!(0, p.cy)(i)) {
            (0, p.z3)("Expected an array of sub-parameters. Instead: " + (0, p.r$)(i));
          }
          return i.map((e) => YG(t, e, n));
        } else {
          return YG(t, i, n);
        }
      }
      function YG(t, e, n) {
        const i = t.params.length;
        let r;
        for (let a = 0; a < i; ++a) {
          r = t.params[a];
          for (const t in r.key) {
            if (r.key[t] !== e[t]) {
              r = null;
              break;
            }
          }
          if (r) break;
        }
        if (!r) (0, p.z3)("Unsupported parameter: " + (0, p.r$)(e));
        const s = (0, p.X$)(qG(r, e, n), r.key);
        return KI(n.add(GU(s)));
      }
      const WG = (t) => t && t.expr;
      const XG = (t) => t && t.field;
      const HG = (t) => t === "data";
      const VG = (t) => t === "expr";
      const QG = (t) => t === "field";
      const KG = (t) => t === "compare";
      function ZG(t, e, n) {
        let i, r, s, a, o;
        if (!t) {
          a = KI(n.add(SU(null, [{}])));
        } else if ((i = t.facet)) {
          if (!e) (0, p.z3)("Only group marks can be faceted.");
          if (i.field != null) {
            a = o = JG(i, n);
          } else {
            if (!t.data) {
              s = PG((0, p.X$)({ type: "aggregate", groupby: (0, p.YO)(i.groupby) }, i.aggregate), n);
              s.params.key = n.keyRef(i.groupby);
              s.params.pulse = JG(i, n);
              a = o = KI(n.add(s));
            } else {
              o = KI(n.getData(t.data).aggregate);
            }
            r = n.keyRef(i.groupby, true);
          }
        }
        if (!a) {
          a = JG(t, n);
        }
        return { key: r, pulse: a, parent: o };
      }
      function JG(t, e) {
        return t.$ref ? t : t.data && t.data.$ref ? t.data : KI(e.getData(t.data).output);
      }
      function tY(t, e, n, i, r) {
        this.scope = t;
        this.input = e;
        this.output = n;
        this.values = i;
        this.aggregate = r;
        this.index = {};
      }
      tY.fromEntries = function (t, e) {
        const n = e.length,
          i = e[n - 1],
          r = e[n - 2];
        let s = e[0],
          a = null,
          o = 1;
        if (s && s.type === "load") {
          s = e[1];
        }
        t.add(e[0]);
        for (; o < n; ++o) {
          e[o].params.pulse = KI(e[o - 1]);
          t.add(e[o]);
          if (e[o].type === "aggregate") a = e[o];
        }
        return new tY(t, s, r, i, a);
      };
      function eY(t) {
        return (0, p.Kg)(t) ? t : null;
      }
      function nY(t, e, n) {
        const i = sU(n.op, n.field);
        let r;
        if (e.ops) {
          for (let t = 0, n = e.as.length; t < n; ++t) {
            if (e.as[t] === i) return;
          }
        } else {
          e.ops = ["count"];
          e.fields = [null];
          e.as = ["count"];
        }
        if (n.op) {
          e.ops.push((r = n.op.signal) ? t.signalRef(r) : n.op);
          e.fields.push(t.fieldRef(n.field));
          e.as.push(i);
        }
      }
      function iY(t, e, n, i, r, s, a) {
        const o = e[n] || (e[n] = {}),
          u = rU(s);
        let l = eY(r),
          c,
          f;
        if (l != null) {
          t = e.scope;
          l = l + (u ? "|" + u : "");
          c = o[l];
        }
        if (!c) {
          const n = s ? { field: JI, pulse: e.countsRef(t, r, s) } : { field: t.fieldRef(r), pulse: KI(e.output) };
          if (u) n.sort = t.sortRef(s);
          f = t.add(VI(i, undefined, n));
          if (a) e.index[r] = f;
          c = KI(f);
          if (l != null) o[l] = c;
        }
        return c;
      }
      tY.prototype = {
        countsRef(t, e, n) {
          const i = this,
            r = i.counts || (i.counts = {}),
            s = eY(e);
          let a, o, u;
          if (s != null) {
            t = i.scope;
            a = r[s];
          }
          if (!a) {
            u = { groupby: t.fieldRef(e, "key"), pulse: KI(i.output) };
            if (n && n.field) nY(t, u, n);
            o = t.add(DU(u));
            a = t.add(SU({ pulse: KI(o) }));
            a = { agg: o, ref: KI(a) };
            if (s != null) r[s] = a;
          } else if (n && n.field) {
            nY(t, a.agg.params, n);
          }
          return a.ref;
        },
        tuplesRef() {
          return KI(this.values);
        },
        extentRef(t, e) {
          return iY(t, this, "extent", "extent", e, false);
        },
        domainRef(t, e) {
          return iY(t, this, "domain", "values", e, false);
        },
        valuesRef(t, e, n) {
          return iY(t, this, "vals", "values", e, n || true);
        },
        lookupRef(t, e) {
          return iY(t, this, "lookup", "tupleindex", e, false);
        },
        indataRef(t, e) {
          return iY(t, this, "indata", "tupleindex", e, true, true);
        },
      };
      function rY(t, e, n) {
        const i = t.from.facet,
          r = i.name,
          s = JG(i, e);
        let a;
        if (!i.name) {
          (0, p.z3)("Facet must have a name: " + (0, p.r$)(i));
        }
        if (!i.data) {
          (0, p.z3)("Facet must reference a data set: " + (0, p.r$)(i));
        }
        if (i.field) {
          a = e.add(YU({ field: e.fieldRef(i.field), pulse: s }));
        } else if (i.groupby) {
          a = e.add(OU({ key: e.keyRef(i.groupby), group: KI(e.proxy(n.parent)), pulse: s }));
        } else {
          (0, p.z3)("Facet must specify groupby or field: " + (0, p.r$)(i));
        }
        const o = e.fork(),
          u = o.add(SU()),
          l = o.add(KU({ pulse: KI(u) }));
        o.addData(r, new tY(o, u, u, l));
        o.addSignal("parent", null);
        a.params.subflow = { $subflow: o.parse(t).toRuntime() };
      }
      function sY(t, e, n) {
        const i = e.add(YU({ pulse: n.pulse })),
          r = e.fork();
        r.add(KU());
        r.addSignal("parent", null);
        i.params.subflow = { $subflow: r.parse(t).toRuntime() };
      }
      function aY(t, e, n) {
        const i = t.remove,
          r = t.insert,
          s = t.toggle,
          a = t.modify,
          o = t.values,
          u = e.add(QI());
        const l = "if(" + t.trigger + ',modify("' + n + '",' + [r, i, s, a, o].map((t) => (t == null ? "null" : t)).join(",") + "),0)";
        const c = jL(l, e);
        u.update = c.$expr;
        u.params = c.$params;
      }
      function oY(t, e) {
        const n = TG(t),
          i = t.type === nG,
          r = t.from && t.from.facet,
          s = t.overlap;
        let a = t.layout || n === fI || n === cI,
          o,
          u,
          l,
          c,
          f,
          d,
          h;
        const m = n === lI || a || r;
        const g = ZG(t.from, i, e);
        u = e.add(zU({ key: g.key || (t.key ? ZI(t.key) : undefined), pulse: g.pulse, clean: !i }));
        const y = KI(u);
        u = l = e.add(SU({ pulse: y }));
        u = e.add(
          qU({
            markdef: NG(t),
            interactive: LG(t.interactive, e),
            clip: RG(t.clip, e),
            context: { $context: true },
            groups: e.lookup(),
            parent: e.signals.parent ? e.signalRef("parent") : null,
            index: e.markpath(),
            pulse: KI(u),
          })
        );
        const v = KI(u);
        u = c = e.add($U(qI(t.encode, t.type, n, t.style, e, { mod: false, pulse: v })));
        u.params.parent = e.encode();
        if (t.transform) {
          t.transform.forEach((t) => {
            const n = PG(t, e),
              i = n.metadata;
            if (i.generates || i.changes) {
              (0, p.z3)("Mark transforms should not generate new data.");
            }
            if (!i.nomod) c.params.mod = true;
            n.params.pulse = KI(u);
            e.add((u = n));
          });
        }
        if (t.sort) {
          u = e.add(ZU({ sort: e.compareRef(t.sort), pulse: KI(u) }));
        }
        const b = KI(u);
        if (r || a) {
          a = e.add(JU({ layout: e.objectProperty(t.layout), legends: e.legends, mark: v, pulse: b }));
          d = KI(a);
        }
        const x = e.add(FU({ mark: v, pulse: d || b }));
        h = KI(x);
        if (i) {
          if (m) {
            o = e.operators;
            o.pop();
            if (a) o.pop();
          }
          e.pushState(b, d || h, y);
          r ? rY(t, e, g) : m ? sY(t, e, g) : e.parse(t);
          e.popState();
          if (m) {
            if (a) o.push(a);
            o.push(x);
          }
        }
        if (s) {
          h = uY(s, h, e);
        }
        const _ = e.add(VU({ pulse: h })),
          w = e.add(KU({ pulse: KI(_) }, undefined, e.parent()));
        if (t.name != null) {
          f = t.name;
          e.addData(f, new tY(e, l, _, w));
          if (t.on)
            t.on.forEach((t) => {
              if (t.insert || t.remove || t.toggle) {
                (0, p.z3)("Marks only support modify triggers.");
              }
              aY(t, e, f);
            });
        }
      }
      function uY(t, e, n) {
        const i = t.method,
          r = t.bound,
          s = t.separation;
        const a = { separation: uU(s) ? n.signalRef(s.signal) : s, method: uU(i) ? n.signalRef(i.signal) : i, pulse: e };
        if (t.order) {
          a.sort = n.compareRef({ field: t.order });
        }
        if (r) {
          const t = r.tolerance;
          a.boundTolerance = uU(t) ? n.signalRef(t.signal) : +t;
          a.boundScale = n.scaleRef(r.scale);
          a.boundOrient = r.orient;
        }
        return KI(n.add(jU(a)));
      }
      function lY(t, e) {
        const n = e.config.legend,
          i = t.encode || {},
          r = uG(t, n),
          s = i.legend || {},
          a = s.name || undefined,
          o = s.interactive,
          u = s.style,
          l = {};
        let c = 0,
          f,
          d,
          h;
        Zj.forEach((e) => (t[e] ? ((l[e] = t[e]), (c = c || t[e])) : 0));
        if (!c) (0, p.z3)("Missing valid scale for legend.");
        const m = cY(t, e.scaleType(c));
        const g = { title: t.title != null, scales: l, type: m, vgrad: m !== "symbol" && r.isVertical() };
        const y = KI(e.add(SU(null, [g])));
        const v = { enter: { x: { value: 0 }, y: { value: 0 } } };
        const b = KI(
          e.add(
            LU(
              (d = {
                type: m,
                scale: e.scaleRef(c),
                count: e.objectProperty(r("tickCount")),
                limit: e.property(r("symbolLimit")),
                values: e.objectProperty(t.values),
                minstep: e.property(t.tickMinStep),
                formatType: e.property(t.formatType),
                formatSpecifier: e.property(t.format),
              })
            )
          )
        );
        if (m === jj) {
          h = [gG(t, c, n, i.gradient), xG(t, n, i.labels, b)];
          d.count = d.count || e.signalRef(`max(2,2*floor((${dU(r.gradientLength())})/100))`);
        } else if (m === Gj) {
          h = [yG(t, c, n, i.gradient, b), xG(t, n, i.labels, b)];
        } else {
          f = wG(t, n);
          h = [_G(t, n, i, b, dU(f.columns))];
          d.size = hY(t, e, h[0].marks);
        }
        h = [oG({ role: xI, from: y, encode: v, marks: h, layout: f, interactive: o })];
        if (g.title) {
          h.push($G(t, n, i.title, y));
        }
        return oY(
          oG({
            role: vI,
            from: y,
            encode: oI(dY(r, t, n), s, Jj),
            marks: h,
            aria: r("aria"),
            description: r("description"),
            zindex: r("zindex"),
            name: a,
            interactive: o,
            style: u,
          }),
          e
        );
      }
      function cY(t, e) {
        let n = t.type || Uj;
        if (!t.type && fY(t) === 1 && (t.fill || t.stroke)) {
          n = Hl(e) ? jj : Ql(e) ? Gj : Uj;
        }
        return n !== jj ? n : Ql(e) ? Gj : jj;
      }
      function fY(t) {
        return Zj.reduce((e, n) => e + (t[n] ? 1 : 0), 0);
      }
      function dY(t, e, n) {
        const i = { enter: {}, update: {} };
        aI(i, {
          orient: t("orient"),
          offset: t("offset"),
          padding: t("padding"),
          titlePadding: t("titlePadding"),
          cornerRadius: t("cornerRadius"),
          fill: t("fillColor"),
          stroke: t("strokeColor"),
          strokeWidth: n.strokeWidth,
          strokeDash: n.strokeDash,
          x: t("legendX"),
          y: t("legendY"),
          format: e.format,
          formatType: e.formatType,
        });
        return i;
      }
      function hY(t, e, n) {
        const i = dU(pY("size", t, n)),
          r = dU(pY("strokeWidth", t, n)),
          s = dU(mY(n[1].encode, e, Lj));
        return jL(`max(ceil(sqrt(${i})+${r}),${s})`, e);
      }
      function pY(t, e, n) {
        return e[t] ? `scale("${e[t]}",datum)` : lG(t, n[0].encode);
      }
      function mY(t, e, n) {
        return lG("fontSize", t) || cG("fontSize", e, n);
      }
      const gY = `item.orient==="${kj}"?-90:item.orient==="${Ej}"?90:0`;
      function yY(t, e) {
        t = (0, p.Kg)(t) ? { text: t } : t;
        const n = uG(t, e.config.title),
          i = t.encode || {},
          r = i.group || {},
          s = r.name || undefined,
          a = r.interactive,
          o = r.style,
          u = [];
        const l = {},
          c = KI(e.add(SU(null, [l])));
        u.push(xY(t, n, vY(t), c));
        if (t.subtitle) {
          u.push(_Y(t, n, i.subtitle, c));
        }
        return oY(
          oG({
            role: EI,
            from: c,
            encode: bY(n, r),
            marks: u,
            aria: n("aria"),
            description: n("description"),
            zindex: n("zindex"),
            name: s,
            interactive: a,
            style: o,
          }),
          e
        );
      }
      function vY(t) {
        const e = t.encode;
        return (e && e.title) || (0, p.X$)({ name: t.name, interactive: t.interactive, style: t.style }, e);
      }
      function bY(t, e) {
        const n = { enter: {}, update: {} };
        aI(n, {
          orient: t("orient"),
          anchor: t("anchor"),
          align: { signal: dG },
          angle: { signal: gY },
          limit: t("limit"),
          frame: t("frame"),
          offset: t("offset") || 0,
          padding: t("subtitlePadding"),
        });
        return oI(n, e, Jj);
      }
      function xY(t, e, n, i) {
        const r = { value: 0 },
          s = t.text,
          a = { enter: { opacity: r }, update: { opacity: { value: 1 } }, exit: { opacity: r } };
        aI(
          a,
          {
            text: s,
            align: { signal: "item.mark.group.align" },
            angle: { signal: "item.mark.group.angle" },
            limit: { signal: "item.mark.group.limit" },
            baseline: "top",
            dx: e("dx"),
            dy: e("dy"),
            fill: e("color"),
            font: e("font"),
            fontSize: e("fontSize"),
            fontStyle: e("fontStyle"),
            fontWeight: e("fontWeight"),
            lineHeight: e("lineHeight"),
          },
          { align: e("align"), angle: e("angle"), baseline: e("baseline") }
        );
        return mG({ type: aG, role: MI, style: qj, from: i, encode: a }, n);
      }
      function _Y(t, e, n, i) {
        const r = { value: 0 },
          s = t.subtitle,
          a = { enter: { opacity: r }, update: { opacity: { value: 1 } }, exit: { opacity: r } };
        aI(
          a,
          {
            text: s,
            align: { signal: "item.mark.group.align" },
            angle: { signal: "item.mark.group.angle" },
            limit: { signal: "item.mark.group.limit" },
            baseline: "top",
            dx: e("dx"),
            dy: e("dy"),
            fill: e("subtitleColor"),
            font: e("subtitleFont"),
            fontSize: e("subtitleFontSize"),
            fontStyle: e("subtitleFontStyle"),
            fontWeight: e("subtitleFontWeight"),
            lineHeight: e("subtitleLineHeight"),
          },
          { align: e("align"), angle: e("angle"), baseline: e("baseline") }
        );
        return mG({ type: aG, role: DI, style: Ij, from: i, encode: a }, n);
      }
      function wY(t, e) {
        const n = [];
        if (t.transform) {
          t.transform.forEach((t) => {
            n.push(PG(t, e));
          });
        }
        if (t.on) {
          t.on.forEach((n) => {
            aY(n, e, t.name);
          });
        }
        e.addDataPipeline(t.name, AY(t, e, n));
      }
      function AY(t, e, n) {
        const i = [];
        let r = null,
          s = false,
          a = false,
          o,
          u,
          l,
          c,
          f;
        if (t.values) {
          if (uU(t.values) || cU(t.format)) {
            i.push(EY(e, t));
            i.push((r = kY()));
          } else {
            i.push((r = kY({ $ingest: t.values, $format: t.format })));
          }
        } else if (t.url) {
          if (cU(t.url) || cU(t.format)) {
            i.push(EY(e, t));
            i.push((r = kY()));
          } else {
            i.push((r = kY({ $request: t.url, $format: t.format })));
          }
        } else if (t.source) {
          r = o = (0, p.YO)(t.source).map((t) => KI(e.getData(t).output));
          i.push(null);
        }
        for (u = 0, l = n.length; u < l; ++u) {
          c = n[u];
          f = c.metadata;
          if (!r && !f.source) {
            i.push((r = kY()));
          }
          i.push(c);
          if (f.generates) a = true;
          if (f.modifies && !a) s = true;
          if (f.source) r = c;
          else if (f.changes) r = null;
        }
        if (o) {
          l = o.length - 1;
          i[0] = HU({ derive: s, pulse: l ? o : o[0] });
          if (s || l) {
            i.splice(1, 0, kY());
          }
        }
        if (!r) i.push(kY());
        i.push(KU({}));
        return i;
      }
      function kY(t) {
        const e = SU({}, t);
        e.metadata = { source: true };
        return e;
      }
      function EY(t, e) {
        return PU({
          url: e.url ? t.property(e.url) : undefined,
          async: e.async ? t.property(e.async) : undefined,
          values: e.values ? t.property(e.values) : undefined,
          format: t.objectProperty(e.format),
        });
      }
      const MY = (t) => t === Mj || t === Aj;
      const DY = (t, e, n) => (uU(t) ? RY(t.signal, e, n) : t === kj || t === Aj ? e : n);
      const CY = (t, e, n) => (uU(t) ? zY(t.signal, e, n) : MY(t) ? e : n);
      const FY = (t, e, n) => (uU(t) ? $Y(t.signal, e, n) : MY(t) ? n : e);
      const SY = (t, e, n) => (uU(t) ? OY(t.signal, e, n) : t === Aj ? { value: e } : { value: n });
      const BY = (t, e, n) => (uU(t) ? TY(t.signal, e, n) : t === Ej ? { value: e } : { value: n });
      const zY = (t, e, n) => NY(`${t} === '${Aj}' || ${t} === '${Mj}'`, e, n);
      const $Y = (t, e, n) => NY(`${t} !== '${Aj}' && ${t} !== '${Mj}'`, e, n);
      const RY = (t, e, n) => PY(`${t} === '${kj}' || ${t} === '${Aj}'`, e, n);
      const OY = (t, e, n) => PY(`${t} === '${Aj}'`, e, n);
      const TY = (t, e, n) => PY(`${t} === '${Ej}'`, e, n);
      const NY = (t, e, n) => {
        e = e != null ? rI(e) : e;
        n = n != null ? rI(n) : n;
        if (LY(e) && LY(n)) {
          e = e ? e.signal || (0, p.r$)(e.value) : null;
          n = n ? n.signal || (0, p.r$)(n.value) : null;
          return { signal: `${t} ? (${e}) : (${n})` };
        } else {
          return [(0, p.X$)({ test: t }, e)].concat(n || []);
        }
      };
      const LY = (t) => t == null || Object.keys(t).length === 1;
      const PY = (t, e, n) => ({ signal: `${t} ? (${IY(e)}) : (${IY(n)})` });
      const qY = (t, e, n, i, r) => ({
        signal:
          (i != null ? `${t} === '${kj}' ? (${IY(i)}) : ` : "") +
          (n != null ? `${t} === '${Mj}' ? (${IY(n)}) : ` : "") +
          (r != null ? `${t} === '${Ej}' ? (${IY(r)}) : ` : "") +
          (e != null ? `${t} === '${Aj}' ? (${IY(e)}) : ` : "") +
          "(null)",
      });
      const IY = (t) => (uU(t) ? t.signal : t == null ? null : (0, p.r$)(t));
      const UY = (t, e) => (e === 0 ? 0 : uU(t) ? { signal: `(${t.signal}) * ${e}` } : { value: t * e });
      const jY = (t, e) => {
        const n = t.signal;
        return n && n.endsWith("(null)") ? { signal: n.slice(0, -6) + e.signal } : t;
      };
      function GY(t, e, n, i) {
        let r;
        if (e && (0, p.mQ)(e, t)) {
          return e[t];
        } else if ((0, p.mQ)(n, t)) {
          return n[t];
        } else if (t.startsWith("title")) {
          switch (t) {
            case "titleColor":
              r = "fill";
              break;
            case "titleFont":
            case "titleFontSize":
            case "titleFontWeight":
              r = t[5].toLowerCase() + t.slice(6);
          }
          return i[Pj][r];
        } else if (t.startsWith("label")) {
          switch (t) {
            case "labelColor":
              r = "fill";
              break;
            case "labelFont":
            case "labelFontSize":
              r = t[5].toLowerCase() + t.slice(6);
          }
          return i[Lj][r];
        }
        return null;
      }
      function YY(t) {
        const e = {};
        for (const n of t) {
          if (!n) continue;
          for (const t in n) e[t] = 1;
        }
        return Object.keys(e);
      }
      function WY(t, e) {
        var n = e.config,
          i = n.style,
          r = n.axis,
          s = e.scaleType(t.scale) === "band" && n.axisBand,
          a = t.orient,
          o,
          u,
          l;
        if (uU(a)) {
          const t = YY([n.axisX, n.axisY]),
            e = YY([n.axisTop, n.axisBottom, n.axisLeft, n.axisRight]);
          o = {};
          for (l of t) {
            o[l] = CY(a, GY(l, n.axisX, r, i), GY(l, n.axisY, r, i));
          }
          u = {};
          for (l of e) {
            u[l] = qY(a.signal, GY(l, n.axisTop, r, i), GY(l, n.axisBottom, r, i), GY(l, n.axisLeft, r, i), GY(l, n.axisRight, r, i));
          }
        } else {
          o = a === Aj || a === Mj ? n.axisX : n.axisY;
          u = n["axis" + a[0].toUpperCase() + a.slice(1)];
        }
        const c = o || u || s ? (0, p.X$)({}, r, o, u, s) : r;
        return c;
      }
      function XY(t, e, n, i) {
        const r = uG(t, e),
          s = t.orient;
        let a, o;
        const u = { enter: (a = { opacity: tG }), update: (o = { opacity: eG }), exit: { opacity: tG } };
        aI(u, {
          stroke: r("domainColor"),
          strokeCap: r("domainCap"),
          strokeDash: r("domainDash"),
          strokeDashOffset: r("domainDashOffset"),
          strokeWidth: r("domainWidth"),
          strokeOpacity: r("domainOpacity"),
        });
        const l = HY(t, 0);
        const c = HY(t, 1);
        a.x = o.x = CY(s, l, tG);
        a.x2 = o.x2 = CY(s, c);
        a.y = o.y = FY(s, l, tG);
        a.y2 = o.y2 = FY(s, c);
        return mG({ type: rG, role: hI, from: i, encode: u }, n);
      }
      function HY(t, e) {
        return { scale: t.scale, range: e };
      }
      function VY(t, e, n, i, r) {
        const s = uG(t, e),
          a = t.orient,
          o = t.gridScale,
          u = DY(a, 1, -1),
          l = QY(t.offset, u);
        let c, f, d;
        const h = { enter: (c = { opacity: tG }), update: (d = { opacity: eG }), exit: (f = { opacity: tG }) };
        aI(h, {
          stroke: s("gridColor"),
          strokeCap: s("gridCap"),
          strokeDash: s("gridDash"),
          strokeDashOffset: s("gridDashOffset"),
          strokeOpacity: s("gridOpacity"),
          strokeWidth: s("gridWidth"),
        });
        const m = { scale: t.scale, field: Nj, band: r.band, extra: r.extra, offset: r.offset, round: s("tickRound") };
        const g = CY(a, { signal: "height" }, { signal: "width" });
        const y = o ? { scale: o, range: 0, mult: u, offset: l } : { value: 0, offset: l };
        const v = o ? { scale: o, range: 1, mult: u, offset: l } : (0, p.X$)(g, { mult: u, offset: l });
        c.x = d.x = CY(a, m, y);
        c.y = d.y = FY(a, m, y);
        c.x2 = d.x2 = FY(a, v);
        c.y2 = d.y2 = CY(a, v);
        f.x = CY(a, m);
        f.y = FY(a, m);
        return mG({ type: rG, role: pI, key: Nj, from: i, encode: h }, n);
      }
      function QY(t, e) {
        if (e === 1);
        else if (!(0, p.Gv)(t)) {
          t = uU(e) ? { signal: `(${e.signal}) * (${t || 0})` } : e * (t || 0);
        } else {
          let n = (t = (0, p.X$)({}, t));
          while (n.mult != null) {
            if (!(0, p.Gv)(n.mult)) {
              n.mult = uU(e) ? { signal: `(${n.mult}) * (${e.signal})` } : n.mult * e;
              return t;
            } else {
              n = n.mult = (0, p.X$)({}, n.mult);
            }
          }
          n.mult = e;
        }
        return t;
      }
      function KY(t, e, n, i, r, s) {
        const a = uG(t, e),
          o = t.orient,
          u = DY(o, -1, 1);
        let l, c, f;
        const d = { enter: (l = { opacity: tG }), update: (f = { opacity: eG }), exit: (c = { opacity: tG }) };
        aI(d, {
          stroke: a("tickColor"),
          strokeCap: a("tickCap"),
          strokeDash: a("tickDash"),
          strokeDashOffset: a("tickDashOffset"),
          strokeOpacity: a("tickOpacity"),
          strokeWidth: a("tickWidth"),
        });
        const h = rI(r);
        h.mult = u;
        const p = { scale: t.scale, field: Nj, band: s.band, extra: s.extra, offset: s.offset, round: a("tickRound") };
        f.y = l.y = CY(o, tG, p);
        f.y2 = l.y2 = CY(o, h);
        c.x = CY(o, p);
        f.x = l.x = FY(o, tG, p);
        f.x2 = l.x2 = FY(o, h);
        c.y = FY(o, p);
        return mG({ type: rG, role: gI, key: Nj, from: i, encode: d }, n);
      }
      function ZY(t, e, n, i, r) {
        return { signal: 'flush(range("' + t + '"), ' + 'scale("' + t + '", datum.value), ' + e + "," + n + "," + i + "," + r + ")" };
      }
      function JY(t, e, n, i, r, s) {
        const a = uG(t, e),
          o = t.orient,
          u = t.scale,
          l = DY(o, -1, 1),
          c = dU(a("labelFlush")),
          f = dU(a("labelFlushOffset")),
          d = a("labelAlign"),
          h = a("labelBaseline");
        let p = c === 0 || !!c,
          m;
        const g = rI(r);
        g.mult = l;
        g.offset = rI(a("labelPadding") || 0);
        g.offset.mult = l;
        const y = { scale: u, field: Nj, band: 0.5, offset: pG(s.offset, a("labelOffset")) };
        const v = CY(o, p ? ZY(u, c, '"left"', '"right"', '"center"') : { value: "center" }, BY(o, "left", "right"));
        const b = CY(o, SY(o, "bottom", "top"), p ? ZY(u, c, '"top"', '"bottom"', '"middle"') : { value: "middle" });
        const x = ZY(u, c, `-(${f})`, f, 0);
        p = p && f;
        const _ = { opacity: tG, x: CY(o, y, g), y: FY(o, y, g) };
        const w = {
          enter: _,
          update: (m = { opacity: eG, text: { field: $j }, x: _.x, y: _.y, align: v, baseline: b }),
          exit: { opacity: tG, x: _.x, y: _.y },
        };
        aI(w, { dx: !d && p ? CY(o, x) : null, dy: !h && p ? FY(o, x) : null });
        aI(
          w,
          {
            angle: a("labelAngle"),
            fill: a("labelColor"),
            fillOpacity: a("labelOpacity"),
            font: a("labelFont"),
            fontSize: a("labelFontSize"),
            fontWeight: a("labelFontWeight"),
            fontStyle: a("labelFontStyle"),
            limit: a("labelLimit"),
            lineHeight: a("labelLineHeight"),
          },
          { align: d, baseline: h }
        );
        const A = a("labelBound");
        let k = a("labelOverlap");
        k =
          k || A
            ? { separation: a("labelSeparation"), method: k, order: "datum.index", bound: A ? { scale: u, orient: o, tolerance: A } : null }
            : undefined;
        if (m.align !== v) {
          m.align = jY(m.align, v);
        }
        if (m.baseline !== b) {
          m.baseline = jY(m.baseline, b);
        }
        return mG({ type: aG, role: mI, style: Lj, key: Nj, from: i, encode: w, overlap: k }, n);
      }
      function tW(t, e, n, i) {
        const r = uG(t, e),
          s = t.orient,
          a = DY(s, -1, 1);
        let o, u;
        const l = {
          enter: (o = { opacity: tG, anchor: rI(r("titleAnchor", null)), align: { signal: dG } }),
          update: (u = (0, p.X$)({}, o, { opacity: eG, text: rI(t.title) })),
          exit: { opacity: tG },
        };
        const c = { signal: `lerp(range("${t.scale}"), ${fG(0, 1, 0.5)})` };
        u.x = CY(s, c);
        u.y = FY(s, c);
        o.angle = CY(s, tG, UY(a, 90));
        o.baseline = CY(s, SY(s, Mj, Aj), { value: Mj });
        u.angle = o.angle;
        u.baseline = o.baseline;
        aI(
          l,
          {
            fill: r("titleColor"),
            fillOpacity: r("titleOpacity"),
            font: r("titleFont"),
            fontSize: r("titleFontSize"),
            fontStyle: r("titleFontStyle"),
            fontWeight: r("titleFontWeight"),
            limit: r("titleLimit"),
            lineHeight: r("titleLineHeight"),
          },
          { align: r("titleAlign"), angle: r("titleAngle"), baseline: r("titleBaseline") }
        );
        eW(r, s, l, n);
        l.update.align = jY(l.update.align, o.align);
        l.update.angle = jY(l.update.angle, o.angle);
        l.update.baseline = jY(l.update.baseline, o.baseline);
        return mG({ type: aG, role: yI, style: Pj, from: i, encode: l }, n);
      }
      function eW(t, e, n, i) {
        const r = (t, e) => (t != null ? ((n.update[e] = jY(rI(t), n.update[e])), false) : !uI(e, i) ? true : false);
        const s = r(t("titleX"), "x"),
          a = r(t("titleY"), "y");
        n.enter.auto = a === s ? rI(a) : CY(e, rI(a), rI(s));
      }
      function nW(t, e) {
        const n = WY(t, e),
          i = t.encode || {},
          r = i.axis || {},
          s = r.name || undefined,
          a = r.interactive,
          o = r.style,
          u = uG(t, n),
          l = hG(u);
        const c = { scale: t.scale, ticks: !!u("ticks"), labels: !!u("labels"), grid: !!u("grid"), domain: !!u("domain"), title: t.title != null };
        const f = KI(e.add(SU({}, [c])));
        const d = KI(
          e.add(
            CU({
              scale: e.scaleRef(t.scale),
              extra: e.property(l.extra),
              count: e.objectProperty(t.tickCount),
              values: e.objectProperty(t.values),
              minstep: e.property(t.tickMinStep),
              formatType: e.property(t.formatType),
              formatSpecifier: e.property(t.format),
            })
          )
        );
        const h = [];
        let p;
        if (c.grid) {
          h.push(VY(t, n, i.grid, d, l));
        }
        if (c.ticks) {
          p = u("tickSize");
          h.push(KY(t, n, i.ticks, d, p, l));
        }
        if (c.labels) {
          p = c.ticks ? p : 0;
          h.push(JY(t, n, i.labels, d, p, l));
        }
        if (c.domain) {
          h.push(XY(t, n, i.domain, f));
        }
        if (c.title) {
          h.push(tW(t, n, i.title, f));
        }
        return oY(
          oG({
            role: dI,
            from: f,
            encode: oI(iW(u, t), r, Jj),
            marks: h,
            aria: u("aria"),
            description: u("description"),
            zindex: u("zindex"),
            name: s,
            interactive: a,
            style: o,
          }),
          e
        );
      }
      function iW(t, e) {
        const n = { enter: {}, update: {} };
        aI(n, {
          orient: t("orient"),
          offset: t("offset") || 0,
          position: fU(e.position, 0),
          titlePadding: t("titlePadding"),
          minExtent: t("minExtent"),
          maxExtent: t("maxExtent"),
          range: { signal: `abs(span(range("${e.scale}")))` },
          translate: t("translate"),
          format: e.format,
          formatType: e.formatType,
        });
        return n;
      }
      function rW(t, e, n) {
        const i = (0, p.YO)(t.signals),
          r = (0, p.YO)(t.scales);
        if (!n) i.forEach((t) => XI(t, e));
        (0, p.YO)(t.projections).forEach((t) => _j(t, e));
        r.forEach((t) => ij(t, e));
        (0, p.YO)(t.data).forEach((t) => wY(t, e));
        r.forEach((t) => rj(t, e));
        (n || i).forEach((t) => EU(t, e));
        (0, p.YO)(t.axes).forEach((t) => nW(t, e));
        (0, p.YO)(t.marks).forEach((t) => oY(t, e));
        (0, p.YO)(t.legends).forEach((t) => lY(t, e));
        if (t.title) yY(t.title, e);
        e.parseLambdas();
        return e;
      }
      const sW = (t) => oI({ enter: { x: { value: 0 }, y: { value: 0 } }, update: { width: { signal: "width" }, height: { signal: "height" } } }, t);
      function aW(t, e) {
        const n = e.config;
        const i = KI((e.root = e.add(QI())));
        const r = uW(t, n);
        r.forEach((t) => XI(t, e));
        e.description = t.description || n.description;
        e.eventConfig = n.events;
        e.legends = e.objectProperty(n.legend && n.legend.layout);
        e.locale = n.locale;
        const s = e.add(SU());
        const a = e.add($U(qI(sW(t.encode), nG, cI, t.style, e, { pulse: KI(s) })));
        const o = e.add(JU({ layout: e.objectProperty(t.layout), legends: e.legends, autosize: e.signalRef("autosize"), mark: i, pulse: KI(a) }));
        e.operators.pop();
        e.pushState(KI(a), KI(o), null);
        rW(t, e, r);
        e.operators.push(o);
        let u = e.add(FU({ mark: i, pulse: KI(o) }));
        u = e.add(VU({ pulse: KI(u) }));
        u = e.add(KU({ pulse: KI(u) }));
        e.addData("root", new tY(e, s, s, u));
        return e;
      }
      function oW(t, e) {
        return e && e.signal ? { name: t, update: e.signal } : { name: t, value: e };
      }
      function uW(t, e) {
        const n = (n) => fU(t[n], e[n]),
          i = [
            oW("background", n("background")),
            oW("autosize", tI(n("autosize"))),
            oW("padding", iI(n("padding"))),
            oW("width", n("width") || 0),
            oW("height", n("height") || 0),
          ],
          r = i.reduce((t, e) => ((t[e.name] = e), t), {}),
          s = {};
        (0, p.YO)(t.signals).forEach((t) => {
          if ((0, p.mQ)(r, t.name)) {
            t = (0, p.X$)(r[t.name], t);
          } else {
            i.push(t);
          }
          s[t.name] = t;
        });
        (0, p.YO)(e.signals).forEach((t) => {
          if (!(0, p.mQ)(s, t.name) && !(0, p.mQ)(r, t.name)) {
            i.push(t);
          }
        });
        return i;
      }
      function lW(t, e) {
        this.config = t || {};
        this.options = e || {};
        this.bindings = [];
        this.field = {};
        this.signals = {};
        this.lambdas = {};
        this.scales = {};
        this.events = {};
        this.data = {};
        this.streams = [];
        this.updates = [];
        this.operators = [];
        this.eventConfig = null;
        this.locale = null;
        this._id = 0;
        this._subid = 0;
        this._nextsub = [0];
        this._parent = [];
        this._encode = [];
        this._lookup = [];
        this._markpath = [];
      }
      function cW(t) {
        this.config = t.config;
        this.options = t.options;
        this.legends = t.legends;
        this.field = Object.create(t.field);
        this.signals = Object.create(t.signals);
        this.lambdas = Object.create(t.lambdas);
        this.scales = Object.create(t.scales);
        this.events = Object.create(t.events);
        this.data = Object.create(t.data);
        this.streams = [];
        this.updates = [];
        this.operators = [];
        this._id = 0;
        this._subid = ++t._nextsub[0];
        this._nextsub = t._nextsub;
        this._parent = t._parent.slice();
        this._encode = t._encode.slice();
        this._lookup = t._lookup.slice();
        this._markpath = t._markpath;
      }
      lW.prototype = cW.prototype = {
        parse(t) {
          return rW(t, this);
        },
        fork() {
          return new cW(this);
        },
        isSubscope() {
          return this._subid > 0;
        },
        toRuntime() {
          this.finish();
          return {
            description: this.description,
            operators: this.operators,
            streams: this.streams,
            updates: this.updates,
            bindings: this.bindings,
            eventConfig: this.eventConfig,
            locale: this.locale,
          };
        },
        id() {
          return (this._subid ? this._subid + ":" : 0) + this._id++;
        },
        add(t) {
          this.operators.push(t);
          t.id = this.id();
          if (t.refs) {
            t.refs.forEach((e) => {
              e.$ref = t.id;
            });
            t.refs = null;
          }
          return t;
        },
        proxy(t) {
          const e = t instanceof HI ? KI(t) : t;
          return this.add(XU({ value: e }));
        },
        addStream(t) {
          this.streams.push(t);
          t.id = this.id();
          return t;
        },
        addUpdate(t) {
          this.updates.push(t);
          return t;
        },
        finish() {
          let t, e;
          if (this.root) this.root.root = true;
          for (t in this.signals) {
            this.signals[t].signal = t;
          }
          for (t in this.scales) {
            this.scales[t].scale = t;
          }
          function n(t, e, n) {
            let i, r;
            if (t) {
              i = t.data || (t.data = {});
              r = i[e] || (i[e] = []);
              r.push(n);
            }
          }
          for (t in this.data) {
            e = this.data[t];
            n(e.input, t, "input");
            n(e.output, t, "output");
            n(e.values, t, "values");
            for (const i in e.index) {
              n(e.index[i], t, "index:" + i);
            }
          }
          return this;
        },
        pushState(t, e, n) {
          this._encode.push(KI(this.add(KU({ pulse: t }))));
          this._parent.push(e);
          this._lookup.push(n ? KI(this.proxy(n)) : null);
          this._markpath.push(-1);
        },
        popState() {
          this._encode.pop();
          this._parent.pop();
          this._lookup.pop();
          this._markpath.pop();
        },
        parent() {
          return (0, p.se)(this._parent);
        },
        encode() {
          return (0, p.se)(this._encode);
        },
        lookup() {
          return (0, p.se)(this._lookup);
        },
        markpath() {
          const t = this._markpath;
          return ++t[t.length - 1];
        },
        fieldRef(t, e) {
          if ((0, p.Kg)(t)) return ZI(t, e);
          if (!t.signal) {
            (0, p.z3)("Unsupported field reference: " + (0, p.r$)(t));
          }
          const n = t.signal;
          let i = this.field[n];
          if (!i) {
            const t = { name: this.signalRef(n) };
            if (e) t.as = e;
            this.field[n] = i = KI(this.add(TU(t)));
          }
          return i;
        },
        compareRef(t) {
          let e = false;
          const n = (t) => (uU(t) ? ((e = true), this.signalRef(t.signal)) : lU(t) ? ((e = true), this.exprRef(t.expr)) : t);
          const i = (0, p.YO)(t.field).map(n),
            r = (0, p.YO)(t.order).map(n);
          return e ? KI(this.add(BU({ fields: i, orders: r }))) : tU(i, r);
        },
        keyRef(t, e) {
          let n = false;
          const i = (t) => (uU(t) ? ((n = true), KI(r[t.signal])) : t);
          const r = this.signals;
          t = (0, p.YO)(t).map(i);
          return n ? KI(this.add(NU({ fields: t, flat: e }))) : eU(t, e);
        },
        sortRef(t) {
          if (!t) return t;
          const e = sU(t.op, t.field),
            n = t.order || nU;
          return n.signal ? KI(this.add(BU({ fields: e, orders: this.signalRef(n.signal) }))) : tU(e, n);
        },
        event(t, e) {
          const n = t + ":" + e;
          if (!this.events[n]) {
            const i = this.id();
            this.streams.push({ id: i, source: t, type: e });
            this.events[n] = i;
          }
          return this.events[n];
        },
        hasOwnSignal(t) {
          return (0, p.mQ)(this.signals, t);
        },
        addSignal(t, e) {
          if (this.hasOwnSignal(t)) {
            (0, p.z3)("Duplicate signal name: " + (0, p.r$)(t));
          }
          const n = e instanceof HI ? e : this.add(QI(e));
          return (this.signals[t] = n);
        },
        getSignal(t) {
          if (!this.signals[t]) {
            (0, p.z3)("Unrecognized signal name: " + (0, p.r$)(t));
          }
          return this.signals[t];
        },
        signalRef(t) {
          if (this.signals[t]) {
            return KI(this.signals[t]);
          } else if (!(0, p.mQ)(this.lambdas, t)) {
            this.lambdas[t] = this.add(QI(null));
          }
          return KI(this.lambdas[t]);
        },
        parseLambdas() {
          const t = Object.keys(this.lambdas);
          for (let e = 0, n = t.length; e < n; ++e) {
            const n = t[e],
              i = jL(n, this),
              r = this.lambdas[n];
            r.params = i.$params;
            r.update = i.$expr;
          }
        },
        property(t) {
          return t && t.signal ? this.signalRef(t.signal) : t;
        },
        objectProperty(t) {
          return !t || !(0, p.Gv)(t) ? t : this.signalRef(t.signal || fW(t));
        },
        exprRef(t, e) {
          const n = { expr: jL(t, this) };
          if (e) n.expr.$name = e;
          return KI(this.add(RU(n)));
        },
        addBinding(t, e) {
          if (!this.bindings) {
            (0, p.z3)("Nested signals do not support binding: " + (0, p.r$)(t));
          }
          this.bindings.push((0, p.X$)({ signal: t }, e));
        },
        addScaleProj(t, e) {
          if ((0, p.mQ)(this.scales, t)) {
            (0, p.z3)("Duplicate scale or projection name: " + (0, p.r$)(t));
          }
          this.scales[t] = this.add(e);
        },
        addScale(t, e) {
          this.addScaleProj(t, QU(e));
        },
        addProjection(t, e) {
          this.addScaleProj(t, WU(e));
        },
        getScale(t) {
          if (!this.scales[t]) {
            (0, p.z3)("Unrecognized scale name: " + (0, p.r$)(t));
          }
          return this.scales[t];
        },
        scaleRef(t) {
          return KI(this.getScale(t));
        },
        scaleType(t) {
          return this.getScale(t).params.type;
        },
        projectionRef(t) {
          return this.scaleRef(t);
        },
        projectionType(t) {
          return this.scaleType(t);
        },
        addData(t, e) {
          if ((0, p.mQ)(this.data, t)) {
            (0, p.z3)("Duplicate data set name: " + (0, p.r$)(t));
          }
          return (this.data[t] = e);
        },
        getData(t) {
          if (!this.data[t]) {
            (0, p.z3)("Undefined data set name: " + (0, p.r$)(t));
          }
          return this.data[t];
        },
        addDataPipeline(t, e) {
          if ((0, p.mQ)(this.data, t)) {
            (0, p.z3)("Duplicate data set name: " + (0, p.r$)(t));
          }
          return this.addData(t, tY.fromEntries(this, e));
        },
      };
      function fW(t) {
        return ((0, p.cy)(t) ? dW : hW)(t);
      }
      function dW(t) {
        const e = t.length;
        let n = "[";
        for (let i = 0; i < e; ++i) {
          const e = t[i];
          n += (i > 0 ? "," : "") + ((0, p.Gv)(e) ? e.signal || fW(e) : (0, p.r$)(e));
        }
        return n + "]";
      }
      function hW(t) {
        let e = "{",
          n = 0,
          i,
          r;
        for (i in t) {
          r = t[i];
          e += (++n > 1 ? "," : "") + (0, p.r$)(i) + ":" + ((0, p.Gv)(r) ? r.signal || fW(r) : (0, p.r$)(r));
        }
        return e + "}";
      }
      function pW() {
        const t = "sans-serif",
          e = 30,
          n = 2,
          i = "#4c78a8",
          r = "#000",
          s = "#888",
          a = "#ddd";
        return {
          description: "Vega visualization",
          padding: 0,
          autosize: "pad",
          background: null,
          events: { defaults: { allow: ["wheel"] } },
          group: null,
          mark: null,
          arc: { fill: i },
          area: { fill: i },
          image: null,
          line: { stroke: i, strokeWidth: n },
          path: { stroke: i },
          rect: { fill: i },
          rule: { stroke: r },
          shape: { stroke: i },
          symbol: { fill: i, size: 64 },
          text: { fill: r, font: t, fontSize: 11 },
          trail: { fill: i, size: n },
          style: {
            "guide-label": { fill: r, font: t, fontSize: 10 },
            "guide-title": { fill: r, font: t, fontSize: 11, fontWeight: "bold" },
            "group-title": { fill: r, font: t, fontSize: 13, fontWeight: "bold" },
            "group-subtitle": { fill: r, font: t, fontSize: 12 },
            point: { size: e, strokeWidth: n, shape: "circle" },
            circle: { size: e, strokeWidth: n },
            square: { size: e, strokeWidth: n, shape: "square" },
            cell: { fill: "transparent", stroke: a },
            view: { fill: "transparent" },
          },
          title: { orient: "top", anchor: "middle", offset: 4, subtitlePadding: 3 },
          axis: {
            minExtent: 0,
            maxExtent: 200,
            bandPosition: 0.5,
            domain: true,
            domainWidth: 1,
            domainColor: s,
            grid: false,
            gridWidth: 1,
            gridColor: a,
            labels: true,
            labelAngle: 0,
            labelLimit: 180,
            labelOffset: 0,
            labelPadding: 2,
            ticks: true,
            tickColor: s,
            tickOffset: 0,
            tickRound: true,
            tickSize: 5,
            tickWidth: 1,
            titlePadding: 4,
          },
          axisBand: { tickOffset: -0.5 },
          projection: { type: "mercator" },
          legend: {
            orient: "right",
            padding: 0,
            gridAlign: "each",
            columnPadding: 10,
            rowPadding: 2,
            symbolDirection: "vertical",
            gradientDirection: "vertical",
            gradientLength: 200,
            gradientThickness: 16,
            gradientStrokeColor: a,
            gradientStrokeWidth: 0,
            gradientLabelOffset: 2,
            labelAlign: "left",
            labelBaseline: "middle",
            labelLimit: 160,
            labelOffset: 4,
            labelOverlap: true,
            symbolLimit: 30,
            symbolType: "circle",
            symbolSize: 100,
            symbolOffset: 0,
            symbolStrokeWidth: 1.5,
            symbolBaseFillColor: "transparent",
            symbolBaseStrokeColor: s,
            titleLimit: 180,
            titleOrient: "top",
            titlePadding: 5,
            layout: { offset: 18, direction: "horizontal", left: { direction: "vertical" }, right: { direction: "vertical" } },
          },
          range: {
            category: { scheme: "tableau10" },
            ordinal: { scheme: "blues" },
            heatmap: { scheme: "yellowgreenblue" },
            ramp: { scheme: "blues" },
            diverging: { scheme: "blueorange", extent: [1, 0] },
            symbol: ["circle", "square", "triangle-up", "cross", "diamond", "triangle-right", "triangle-down", "triangle-left"],
          },
        };
      }
      function mW(t, e, n) {
        if (!(0, p.Gv)(t)) {
          (0, p.z3)("Input Vega specification must be an object.");
        }
        e = (0, p.io)(pW(), e, t.config);
        return aW(t, new lW(e, n)).toRuntime();
      }
      var gW = "5.33.0";
      (0, p.X$)($i, i, r, s, a, o, l, u, c, f, d, h);
    },
  },
]);
