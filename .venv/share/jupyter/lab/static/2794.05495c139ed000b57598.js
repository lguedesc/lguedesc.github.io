"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2794],
  {
    12794: (e, t, r) => {
      r.r(t);
      r.d(t, {
        Accordion: () => i,
        AccordionItem: () => d,
        Anchor: () => p,
        AnchoredRegion: () => c,
        Avatar: () => u,
        Badge: () => m,
        Breadcrumb: () => f,
        BreadcrumbItem: () => h,
        Button: () => y,
        Card: () => x,
        Checkbox: () => g,
        Combobox: () => b,
        DataGrid: () => R,
        DataGridCell: () => I,
        DataGridRow: () => w,
        DateField: () => v,
        Dialog: () => j,
        Disclosure: () => N,
        Divider: () => T,
        Listbox: () => D,
        Menu: () => E,
        MenuItem: () => S,
        NumberField: () => k,
        Option: () => F,
        Picker: () => X,
        PickerList: () => ee,
        PickerListItem: () => te,
        PickerMenu: () => Y,
        PickerMenuOption: () => Z,
        Progress: () => O,
        ProgressRing: () => C,
        Radio: () => H,
        RadioGroup: () => J,
        Search: () => z,
        Select: () => q,
        Skeleton: () => P,
        Slider: () => L,
        SliderLabel: () => A,
        Switch: () => M,
        Tab: () => V,
        TabPanel: () => B,
        Tabs: () => G,
        TextArea: () => W,
        TextField: () => _,
        Toolbar: () => U,
        Tooltip: () => Q,
        TreeItem: () => $,
        TreeView: () => K,
      });
      var a = r(78173);
      var n = r(44914);
      var l = r.n(n);
      function s(e, t, r) {
        (0, n.useEffect)(() => {
          if (r !== undefined && e.current && e.current[t] !== r) {
            try {
              e.current[t] = r;
            } catch (a) {
              console.warn(a);
            }
          }
        }, [r, e.current]);
      }
      function o(e, t, r) {
        (0, n.useLayoutEffect)(() => {
          if (r !== undefined) {
            e?.current?.addEventListener(t, r);
          }
          return () => {
            if (r?.cancel) {
              r.cancel();
            }
            e?.current?.removeEventListener(t, r);
          };
        }, [t, r, e.current]);
      }
      (0, a.provideJupyterDesignSystem)().register((0, a.jpAccordion)());
      const i = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, expandMode: s, ...i } = e;
        o(r, "change", e.onChange);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-accordion",
          {
            ref: r,
            ...i,
            "expand-mode": e.expandMode || e["expand-mode"],
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpAccordionItem)());
      const d = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, headingLevel: i, id: d, expanded: c, ...p } = e;
        o(r, "change", e.onChange);
        s(r, "expanded", e.expanded);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-accordion-item",
          {
            ref: r,
            ...p,
            "heading-level": e.headingLevel || e["heading-level"],
            id: e.id,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpAnchoredRegion)());
      const c = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          horizontalViewportLock: i,
          horizontalInset: d,
          verticalViewportLock: c,
          verticalInset: p,
          fixedPlacement: u,
          anchor: m,
          viewport: f,
          horizontalPositioningMode: h,
          horizontalDefaultPosition: y,
          horizontalThreshold: x,
          horizontalScaling: g,
          verticalPositioningMode: b,
          verticalDefaultPosition: v,
          verticalThreshold: I,
          verticalScaling: w,
          autoUpdateMode: R,
          anchorElement: j,
          viewportElement: N,
          verticalPosition: T,
          horizontalPosition: D,
          update: S,
          ...E
        } = e;
        o(r, "loaded", e.onLoaded);
        o(r, "positionchange", e.onPositionchange);
        s(r, "anchorElement", e.anchorElement);
        s(r, "viewportElement", e.viewportElement);
        s(r, "verticalPosition", e.verticalPosition);
        s(r, "horizontalPosition", e.horizontalPosition);
        s(r, "update", e.update);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-anchored-region",
          {
            ref: r,
            ...E,
            anchor: e.anchor,
            viewport: e.viewport,
            "horizontal-positioning-mode": e.horizontalPositioningMode || e["horizontal-positioning-mode"],
            "horizontal-default-position": e.horizontalDefaultPosition || e["horizontal-default-position"],
            "horizontal-threshold": e.horizontalThreshold || e["horizontal-threshold"],
            "horizontal-scaling": e.horizontalScaling || e["horizontal-scaling"],
            "vertical-positioning-mode": e.verticalPositioningMode || e["vertical-positioning-mode"],
            "vertical-default-position": e.verticalDefaultPosition || e["vertical-default-position"],
            "vertical-threshold": e.verticalThreshold || e["vertical-threshold"],
            "vertical-scaling": e.verticalScaling || e["vertical-scaling"],
            "auto-update-mode": e.autoUpdateMode || e["auto-update-mode"],
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "horizontal-viewport-lock": e.horizontalViewportLock ? "" : undefined,
            "horizontal-inset": e.horizontalInset ? "" : undefined,
            "vertical-viewport-lock": e.verticalViewportLock ? "" : undefined,
            "vertical-inset": e.verticalInset ? "" : undefined,
            "fixed-placement": e.fixedPlacement ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpAnchor)());
      const p = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          appearance: o,
          download: i,
          href: d,
          hreflang: c,
          ping: p,
          referrerpolicy: u,
          rel: m,
          target: f,
          type: h,
          control: y,
          ...x
        } = e;
        s(r, "control", e.control);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-anchor",
          {
            ref: r,
            ...x,
            appearance: e.appearance,
            download: e.download,
            href: e.href,
            hreflang: e.hreflang,
            ping: e.ping,
            referrerpolicy: e.referrerpolicy,
            rel: e.rel,
            target: e.target,
            type: e.type,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpAvatar)());
      const u = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, src: s, alt: o, fill: i, color: d, link: c, shape: p, ...u } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-avatar",
          {
            ref: r,
            ...u,
            src: e.src,
            alt: e.alt,
            fill: e.fill,
            color: e.color,
            link: e.link,
            shape: e.shape,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpBadge)());
      const m = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, fill: o, color: i, circular: d, ...c } = e;
        s(r, "circular", e.circular);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-badge",
          {
            ref: r,
            ...c,
            fill: e.fill,
            color: e.color,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpBreadcrumb)());
      const f = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, ...s } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-breadcrumb",
          { ref: r, ...s, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpBreadcrumbItem)());
      const h = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, download: o, href: i, hreflang: d, ping: c, referrerpolicy: p, rel: u, target: m, type: f, control: h, ...y } = e;
        s(r, "control", e.control);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-breadcrumb-item",
          {
            ref: r,
            ...y,
            download: e.download,
            href: e.href,
            hreflang: e.hreflang,
            ping: e.ping,
            referrerpolicy: e.referrerpolicy,
            rel: e.rel,
            target: e.target,
            type: e.type,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpButton)());
      const y = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          minimal: o,
          appearance: i,
          form: d,
          formaction: c,
          formenctype: p,
          formmethod: u,
          formtarget: m,
          type: f,
          autofocus: h,
          formnovalidate: y,
          defaultSlottedContent: x,
          disabled: g,
          required: b,
          ...v
        } = e;
        s(r, "autofocus", e.autofocus);
        s(r, "formnovalidate", e.formnovalidate);
        s(r, "defaultSlottedContent", e.defaultSlottedContent);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-button",
          {
            ref: r,
            ...v,
            appearance: e.appearance,
            form: e.form,
            formaction: e.formaction,
            formenctype: e.formenctype,
            formmethod: e.formmethod,
            formtarget: e.formtarget,
            type: e.type,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            minimal: e.minimal ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpCard)());
      const x = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, ...s } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-card",
          { ref: r, ...s, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpCheckbox)());
      const g = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, readonly: i, readOnly: d, indeterminate: c, checked: p, disabled: u, required: m, ...f } = e;
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "indeterminate", e.indeterminate);
        s(r, "checked", e.checked);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let h = a ?? "";
        if (r.current?.indeterminate) {
          h += " indeterminate";
        }
        return l().createElement(
          "jp-checkbox",
          {
            ref: r,
            ...f,
            class: h.trim(),
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpCombobox)());
      const b = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          autowidth: i,
          minimal: d,
          open: c,
          autocomplete: p,
          placeholder: u,
          position: m,
          autoWidth: f,
          filteredOptions: h,
          options: y,
          value: x,
          length: g,
          disabled: b,
          selectedIndex: v,
          selectedOptions: I,
          required: w,
          ...R
        } = e;
        o(r, "input", e.onInput);
        o(r, "change", e.onChange);
        s(r, "autoWidth", e.autoWidth);
        s(r, "filteredOptions", e.filteredOptions);
        s(r, "options", e.options);
        s(r, "value", e.value);
        s(r, "length", e.length);
        s(r, "disabled", e.disabled);
        s(r, "selectedIndex", e.selectedIndex);
        s(r, "selectedOptions", e.selectedOptions);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-combobox",
          {
            ref: r,
            ...R,
            autocomplete: e.autocomplete,
            placeholder: e.placeholder,
            position: e.position,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            autowidth: e.autowidth ? "" : undefined,
            minimal: e.minimal ? "" : undefined,
            open: e.open ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDateField)());
      const v = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, autofocus: i, step: d, max: c, min: p, disabled: u, required: m, ...f } = e;
        o(r, "input", e.onInput);
        o(r, "change", e.onChange);
        s(r, "autofocus", e.autofocus);
        s(r, "step", e.step);
        s(r, "max", e.max);
        s(r, "min", e.min);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-date-field",
          { ref: r, ...f, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDataGridCell)());
      const I = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, cellType: i, gridColumn: d, rowData: c, columnDefinition: p, ...u } = e;
        o(r, "cell-focused", e.onCellFocused);
        s(r, "rowData", e.rowData);
        s(r, "columnDefinition", e.columnDefinition);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let m = a ?? "";
        if (r.current?.cellType === "columnheader") {
          m += " column-header";
        }
        return l().createElement(
          "jp-data-grid-cell",
          {
            ref: r,
            ...u,
            "cell-type": e.cellType || e["cell-type"],
            "grid-column": e.gridColumn || e["grid-column"],
            class: m.trim(),
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDataGridRow)());
      const w = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          gridTemplateColumns: i,
          rowType: d,
          rowData: c,
          columnDefinitions: p,
          cellItemTemplate: u,
          headerCellItemTemplate: m,
          rowIndex: f,
          ...h
        } = e;
        o(r, "row-focused", e.onRowFocused);
        s(r, "rowData", e.rowData);
        s(r, "columnDefinitions", e.columnDefinitions);
        s(r, "cellItemTemplate", e.cellItemTemplate);
        s(r, "headerCellItemTemplate", e.headerCellItemTemplate);
        s(r, "rowIndex", e.rowIndex);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let y = a ?? "";
        if (r.current) {
          if (r.current.rowType !== "default") {
            y += ` ${r.current.rowType}`;
          }
        }
        return l().createElement(
          "jp-data-grid-row",
          {
            ref: r,
            ...h,
            "grid-template-columns": e.gridTemplateColumns || e["grid-template-columns"],
            "row-type": e.rowType || e["row-type"],
            class: y.trim(),
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDataGrid)());
      const R = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          noTabbing: o,
          generateHeader: i,
          gridTemplateColumns: d,
          rowsData: c,
          columnDefinitions: p,
          rowItemTemplate: u,
          cellItemTemplate: m,
          headerCellItemTemplate: f,
          focusRowIndex: h,
          focusColumnIndex: y,
          rowElementTag: x,
          ...g
        } = e;
        s(r, "rowsData", e.rowsData);
        s(r, "columnDefinitions", e.columnDefinitions);
        s(r, "rowItemTemplate", e.rowItemTemplate);
        s(r, "cellItemTemplate", e.cellItemTemplate);
        s(r, "headerCellItemTemplate", e.headerCellItemTemplate);
        s(r, "focusRowIndex", e.focusRowIndex);
        s(r, "focusColumnIndex", e.focusColumnIndex);
        s(r, "rowElementTag", e.rowElementTag);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-data-grid",
          {
            ref: r,
            ...g,
            "generate-header": e.generateHeader || e["generate-header"],
            "grid-template-columns": e.gridTemplateColumns || e["grid-template-columns"],
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "no-tabbing": e.noTabbing ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDialog)());
      const j = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, trapFocus: i, ariaDescribedby: d, ariaLabelledby: c, ariaLabel: p, modal: u, hidden: m, ...f } = e;
        o(r, "cancel", e.onCancel);
        o(r, "close", e.onClose);
        s(r, "modal", e.modal);
        s(r, "hidden", e.hidden);
        (0, n.useImperativeHandle)(t, () => ({
          show: () => r.current.show(),
          hide: () => r.current.hide(),
          compose: (e, t) => r.current.compose(e, t),
        }));
        return l().createElement(
          "jp-dialog",
          {
            ref: r,
            ...f,
            "aria-describedby": e.ariaDescribedby || e["aria-describedby"],
            "aria-labelledby": e.ariaLabelledby || e["aria-labelledby"],
            "aria-label": e.ariaLabel || e["aria-label"],
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "trap-focus": e.trapFocus ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDisclosure)());
      const N = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, appearance: i, title: d, expanded: c, ...p } = e;
        o(r, "toggle", e.onToggle);
        s(r, "expanded", e.expanded);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-disclosure",
          {
            ref: r,
            ...p,
            appearance: e.appearance,
            title: e.title,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpDivider)());
      const T = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, role: s, orientation: o, ...i } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-divider",
          {
            ref: r,
            ...i,
            role: e.role,
            orientation: e.orientation,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpListbox)());
      const D = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, multiple: i, size: d, length: c, options: p, disabled: u, selectedIndex: m, selectedOptions: f, ...h } = e;
        o(r, "change", e.onChange);
        s(r, "multiple", e.multiple);
        s(r, "size", e.size);
        s(r, "length", e.length);
        s(r, "options", e.options);
        s(r, "disabled", e.disabled);
        s(r, "selectedIndex", e.selectedIndex);
        s(r, "selectedOptions", e.selectedOptions);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-listbox",
          { ref: r, ...h, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpMenuItem)());
      const S = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, role: i, disabled: d, expanded: c, checked: p, ...u } = e;
        o(r, "expanded-change", e.onExpand);
        o(r, "change", e.onChange);
        s(r, "disabled", e.disabled);
        s(r, "expanded", e.expanded);
        s(r, "checked", e.checked);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let m = a ?? "";
        if (r.current) {
          m += ` indent-${r.current.startColumnCount}`;
          if (r.current.expanded) {
            m += " expanded";
          }
        }
        return l().createElement(
          "jp-menu-item",
          {
            ref: r,
            ...u,
            role: e.role,
            class: m.trim(),
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpMenu)());
      const E = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, ...s } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-menu",
          { ref: r, ...s, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpNumberField)());
      const k = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          readonly: i,
          hideStep: d,
          appearance: c,
          placeholder: p,
          list: u,
          readOnly: m,
          autofocus: f,
          maxlength: h,
          minlength: y,
          size: x,
          step: g,
          max: b,
          min: v,
          disabled: I,
          required: w,
          ...R
        } = e;
        o(r, "input", e.onInput);
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "autofocus", e.autofocus);
        s(r, "maxlength", e.maxlength);
        s(r, "minlength", e.minlength);
        s(r, "size", e.size);
        s(r, "step", e.step);
        s(r, "max", e.max);
        s(r, "min", e.min);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-number-field",
          {
            ref: r,
            ...R,
            appearance: e.appearance,
            placeholder: e.placeholder,
            list: e.list,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            "hide-step": e.hideStep ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpOption)());
      const F = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          selected: o,
          value: i,
          checked: d,
          content: c,
          defaultSelected: p,
          disabled: u,
          selectedAttribute: m,
          dirtyValue: f,
          ...h
        } = e;
        s(r, "checked", e.checked);
        s(r, "content", e.content);
        s(r, "defaultSelected", e.defaultSelected);
        s(r, "disabled", e.disabled);
        s(r, "selectedAttribute", e.selectedAttribute);
        s(r, "dirtyValue", e.dirtyValue);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-option",
          {
            ref: r,
            ...h,
            value: e.value,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            selected: e.selected ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpProgressRing)());
      const C = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, value: o, min: i, max: d, paused: c, ...p } = e;
        s(r, "value", e.value);
        s(r, "min", e.min);
        s(r, "max", e.max);
        s(r, "paused", e.paused);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-progress-ring",
          { ref: r, ...p, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpProgress)());
      const O = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, value: o, min: i, max: d, paused: c, ...p } = e;
        s(r, "value", e.value);
        s(r, "min", e.min);
        s(r, "max", e.max);
        s(r, "paused", e.paused);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-progress",
          { ref: r, ...p, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpRadio)());
      const H = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, readonly: i, readOnly: d, name: c, checked: p, disabled: u, required: m, ...f } = e;
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "name", e.name);
        s(r, "checked", e.checked);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-radio",
          {
            ref: r,
            ...f,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpRadioGroup)());
      const J = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, readonly: i, disabled: d, name: c, value: p, orientation: u, readOnly: m, ...f } = e;
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-radio-group",
          {
            ref: r,
            ...f,
            name: e.name,
            value: e.value,
            orientation: e.orientation,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            disabled: e.disabled ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpSearch)());
      const z = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          readonly: i,
          appearance: d,
          placeholder: c,
          list: p,
          pattern: u,
          readOnly: m,
          autofocus: f,
          maxlength: h,
          minlength: y,
          size: x,
          spellcheck: g,
          disabled: b,
          required: v,
          ...I
        } = e;
        o(r, "input", e.onInput);
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "autofocus", e.autofocus);
        s(r, "maxlength", e.maxlength);
        s(r, "minlength", e.minlength);
        s(r, "size", e.size);
        s(r, "spellcheck", e.spellcheck);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-search",
          {
            ref: r,
            ...I,
            appearance: e.appearance,
            placeholder: e.placeholder,
            list: e.list,
            pattern: e.pattern,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpSelect)());
      const q = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          autowidth: i,
          minimal: d,
          open: c,
          position: p,
          autoWidth: u,
          value: m,
          displayValue: f,
          multiple: h,
          size: y,
          length: x,
          options: g,
          disabled: b,
          selectedIndex: v,
          selectedOptions: I,
          required: w,
          ...R
        } = e;
        o(r, "input", e.onInput);
        o(r, "change", e.onChange);
        s(r, "autoWidth", e.autoWidth);
        s(r, "value", e.value);
        s(r, "displayValue", e.displayValue);
        s(r, "multiple", e.multiple);
        s(r, "size", e.size);
        s(r, "length", e.length);
        s(r, "options", e.options);
        s(r, "disabled", e.disabled);
        s(r, "selectedIndex", e.selectedIndex);
        s(r, "selectedOptions", e.selectedOptions);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-select",
          {
            ref: r,
            ...R,
            position: e.position,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            autowidth: e.autowidth ? "" : undefined,
            minimal: e.minimal ? "" : undefined,
            open: e.open ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpSkeleton)());
      const P = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, fill: o, shape: i, pattern: d, shimmer: c, ...p } = e;
        s(r, "shimmer", e.shimmer);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-skeleton",
          {
            ref: r,
            ...p,
            fill: e.fill,
            shape: e.shape,
            pattern: e.pattern,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpSlider)());
      const L = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          readonly: i,
          orientation: d,
          mode: c,
          readOnly: p,
          valueAsNumber: u,
          valueTextFormatter: m,
          min: f,
          max: h,
          step: y,
          disabled: x,
          required: g,
          ...b
        } = e;
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "valueAsNumber", e.valueAsNumber);
        s(r, "valueTextFormatter", e.valueTextFormatter);
        s(r, "min", e.min);
        s(r, "max", e.max);
        s(r, "step", e.step);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-slider",
          {
            ref: r,
            ...b,
            orientation: e.orientation,
            mode: e.mode,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpSliderLabel)());
      const A = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, hideMark: s, disabled: o, position: i, ...d } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let c = a ?? "";
        if (r.current?.disabled) {
          c += " disabled";
        }
        return l().createElement(
          "jp-slider-label",
          {
            ref: r,
            ...d,
            position: e.position,
            class: c.trim(),
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "hide-mark": e.hideMark ? "" : undefined,
            disabled: e.disabled ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpSwitch)());
      const M = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, readonly: i, readOnly: d, checked: c, disabled: p, required: u, ...m } = e;
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "checked", e.checked);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-switch",
          {
            ref: r,
            ...m,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTab)());
      const V = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, disabled: o, ...i } = e;
        s(r, "disabled", e.disabled);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let d = a ?? "";
        if (r.current?.classList.contains("vertical")) {
          d += " vertical";
        }
        return l().createElement(
          "jp-tab",
          { ref: r, ...i, class: d.trim(), exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTabPanel)());
      const B = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, ...s } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-tab-panel",
          { ref: r, ...s, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTabs)());
      const G = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, orientation: i, activeid: d, activeindicator: c, activetab: p, ...u } = e;
        o(r, "change", e.onChange);
        s(r, "activeindicator", e.activeindicator);
        s(r, "activetab", e.activetab);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-tabs",
          {
            ref: r,
            ...u,
            orientation: e.orientation,
            activeid: e.activeid,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTextArea)());
      const W = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          appearance: i,
          resize: d,
          form: c,
          list: p,
          name: u,
          placeholder: m,
          readOnly: f,
          autofocus: h,
          maxlength: y,
          minlength: x,
          cols: g,
          rows: b,
          spellcheck: v,
          disabled: I,
          required: w,
          ...R
        } = e;
        o(r, "select", e.onSelect);
        o(r, "change", e.onChange);
        s(r, "readOnly", e.readOnly);
        s(r, "autofocus", e.autofocus);
        s(r, "maxlength", e.maxlength);
        s(r, "minlength", e.minlength);
        s(r, "cols", e.cols);
        s(r, "rows", e.rows);
        s(r, "spellcheck", e.spellcheck);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-text-area",
          {
            ref: r,
            ...R,
            appearance: e.appearance,
            resize: e.resize,
            form: e.form,
            list: e.list,
            name: e.name,
            placeholder: e.placeholder,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTextField)());
      const _ = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          readonly: i,
          appearance: d,
          placeholder: c,
          type: p,
          list: u,
          pattern: m,
          readOnly: f,
          autofocus: h,
          maxlength: y,
          minlength: x,
          size: g,
          spellcheck: b,
          disabled: v,
          required: I,
          ...w
        } = e;
        o(r, "change", e.onChange);
        o(r, "input", e.onInput);
        s(r, "readOnly", e.readOnly);
        s(r, "autofocus", e.autofocus);
        s(r, "maxlength", e.maxlength);
        s(r, "minlength", e.minlength);
        s(r, "size", e.size);
        s(r, "spellcheck", e.spellcheck);
        s(r, "disabled", e.disabled);
        s(r, "required", e.required);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-text-field",
          {
            ref: r,
            ...w,
            appearance: e.appearance,
            placeholder: e.placeholder,
            type: e.type,
            list: e.list,
            pattern: e.pattern,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            readonly: e.readonly ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpToolbar)());
      const U = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, ...s } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-toolbar",
          { ref: r, ...s, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTooltip)());
      const Q = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          horizontalViewportLock: i,
          verticalViewportLock: d,
          anchor: c,
          delay: p,
          position: u,
          autoUpdateMode: m,
          visible: f,
          anchorElement: h,
          ...y
        } = e;
        o(r, "dismiss", e.onDismiss);
        s(r, "visible", e.visible);
        s(r, "anchorElement", e.anchorElement);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-tooltip",
          {
            ref: r,
            ...y,
            anchor: e.anchor,
            delay: e.delay,
            position: e.position,
            "auto-update-mode": e.autoUpdateMode || e["auto-update-mode"],
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "horizontal-viewport-lock": e.horizontalViewportLock ? "" : undefined,
            "vertical-viewport-lock": e.verticalViewportLock ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTreeItem)());
      const $ = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, expanded: i, selected: d, disabled: c, ...p } = e;
        o(r, "expanded-change", e.onExpand);
        o(r, "selected-change", e.onSelect);
        s(r, "expanded", e.expanded);
        s(r, "selected", e.selected);
        s(r, "disabled", e.disabled);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        let u = a ?? "";
        if (r.current?.nested) {
          u += " nested";
        }
        return l().createElement(
          "jp-tree-item",
          { ref: r, ...p, class: u.trim(), exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpTreeView)());
      const K = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, renderCollapsedNodes: o, currentSelected: i, ...d } = e;
        (0, n.useLayoutEffect)(() => {
          r.current?.setItems();
        }, [r.current]);
        s(r, "currentSelected", e.currentSelected);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-tree-view",
          {
            ref: r,
            ...d,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "render-collapsed-nodes": e.renderCollapsedNodes ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpPicker)());
      const X = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const {
          className: a,
          filterSelected: o,
          filterQuery: i,
          selection: d,
          options: c,
          maxSelected: p,
          noSuggestionsText: u,
          suggestionsAvailableText: m,
          loadingText: f,
          label: h,
          labelledby: y,
          placeholder: x,
          menuPlacement: g,
          showLoading: b,
          listItemTemplate: v,
          defaultListItemTemplate: I,
          menuOptionTemplate: w,
          defaultMenuOptionTemplate: R,
          listItemContentsTemplate: j,
          menuOptionContentsTemplate: N,
          optionsList: T,
          query: D,
          itemsPlaceholderElement: S,
          ...E
        } = e;
        s(r, "showLoading", e.showLoading);
        s(r, "listItemTemplate", e.listItemTemplate);
        s(r, "defaultListItemTemplate", e.defaultListItemTemplate);
        s(r, "menuOptionTemplate", e.menuOptionTemplate);
        s(r, "defaultMenuOptionTemplate", e.defaultMenuOptionTemplate);
        s(r, "listItemContentsTemplate", e.listItemContentsTemplate);
        s(r, "menuOptionContentsTemplate", e.menuOptionContentsTemplate);
        s(r, "optionsList", e.optionsList);
        s(r, "query", e.query);
        s(r, "itemsPlaceholderElement", e.itemsPlaceholderElement);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-draft-picker",
          {
            ref: r,
            ...E,
            selection: e.selection,
            options: e.options,
            "max-selected": e.maxSelected || e["max-selected"],
            "no-suggestions-text": e.noSuggestionsText || e["no-suggestions-text"],
            "suggestions-available-text": e.suggestionsAvailableText || e["suggestions-available-text"],
            "loading-text": e.loadingText || e["loading-text"],
            label: e.label,
            labelledby: e.labelledby,
            placeholder: e.placeholder,
            "menu-placement": e.menuPlacement || e["menu-placement"],
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            "filter-selected": e.filterSelected ? "" : undefined,
            "filter-query": e.filterQuery ? "" : undefined,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpPickerMenu)());
      const Y = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, suggestionsAvailableText: o, ...i } = e;
        s(r, "suggestionsAvailableText", e.suggestionsAvailableText);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-draft-picker-menu",
          { ref: r, ...i, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpPickerMenuOption)());
      const Z = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, value: o, contentsTemplate: i, ...d } = e;
        s(r, "contentsTemplate", e.contentsTemplate);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-draft-picker-menu-option",
          {
            ref: r,
            ...d,
            value: e.value,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpPickerList)());
      const ee = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, ...s } = e;
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-draft-picker-list",
          { ref: r, ...s, class: e.className, exportparts: e.exportparts, for: e.htmlFor, part: e.part, tabindex: e.tabIndex, style: { ...e.style } },
          e.children
        );
      });
      (0, a.provideJupyterDesignSystem)().register((0, a.jpPickerListItem)());
      const te = (0, n.forwardRef)((e, t) => {
        const r = (0, n.useRef)(null);
        const { className: a, value: o, contentsTemplate: i, ...d } = e;
        s(r, "contentsTemplate", e.contentsTemplate);
        (0, n.useImperativeHandle)(t, () => r.current, [r.current]);
        return l().createElement(
          "jp-draft-picker-list-item",
          {
            ref: r,
            ...d,
            value: e.value,
            class: e.className,
            exportparts: e.exportparts,
            for: e.htmlFor,
            part: e.part,
            tabindex: e.tabIndex,
            style: { ...e.style },
          },
          e.children
        );
      });
    },
  },
]);
