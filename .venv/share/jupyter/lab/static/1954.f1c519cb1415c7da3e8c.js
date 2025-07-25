"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1954],
  {
    21954: (e, r, o) => {
      o.r(r);
      o.d(r, { fSharp: () => n, oCaml: () => i, sml: () => d });
      function t(e) {
        var r = {
          as: "keyword",
          do: "keyword",
          else: "keyword",
          end: "keyword",
          exception: "keyword",
          fun: "keyword",
          functor: "keyword",
          if: "keyword",
          in: "keyword",
          include: "keyword",
          let: "keyword",
          of: "keyword",
          open: "keyword",
          rec: "keyword",
          struct: "keyword",
          then: "keyword",
          type: "keyword",
          val: "keyword",
          while: "keyword",
          with: "keyword",
        };
        var o = e.extraWords || {};
        for (var t in o) {
          if (o.hasOwnProperty(t)) {
            r[t] = e.extraWords[t];
          }
        }
        var i = [];
        for (var n in r) {
          i.push(n);
        }
        function d(o, t) {
          var i = o.next();
          if (i === '"') {
            t.tokenize = w;
            return t.tokenize(o, t);
          }
          if (i === "{") {
            if (o.eat("|")) {
              t.longString = true;
              t.tokenize = l;
              return t.tokenize(o, t);
            }
          }
          if (i === "(") {
            if (o.match(/^\*(?!\))/)) {
              t.commentLevel++;
              t.tokenize = k;
              return t.tokenize(o, t);
            }
          }
          if (i === "~" || i === "?") {
            o.eatWhile(/\w/);
            return "variableName.special";
          }
          if (i === "`") {
            o.eatWhile(/\w/);
            return "quote";
          }
          if (i === "/" && e.slashComments && o.eat("/")) {
            o.skipToEnd();
            return "comment";
          }
          if (/\d/.test(i)) {
            if (i === "0" && o.eat(/[bB]/)) {
              o.eatWhile(/[01]/);
            }
            if (i === "0" && o.eat(/[xX]/)) {
              o.eatWhile(/[0-9a-fA-F]/);
            }
            if (i === "0" && o.eat(/[oO]/)) {
              o.eatWhile(/[0-7]/);
            } else {
              o.eatWhile(/[\d_]/);
              if (o.eat(".")) {
                o.eatWhile(/[\d]/);
              }
              if (o.eat(/[eE]/)) {
                o.eatWhile(/[\d\-+]/);
              }
            }
            return "number";
          }
          if (/[+\-*&%=<>!?|@\.~:]/.test(i)) {
            return "operator";
          }
          if (/[\w\xa1-\uffff]/.test(i)) {
            o.eatWhile(/[\w\xa1-\uffff]/);
            var n = o.current();
            return r.hasOwnProperty(n) ? r[n] : "variable";
          }
          return null;
        }
        function w(e, r) {
          var o,
            t = false,
            i = false;
          while ((o = e.next()) != null) {
            if (o === '"' && !i) {
              t = true;
              break;
            }
            i = !i && o === "\\";
          }
          if (t && !i) {
            r.tokenize = d;
          }
          return "string";
        }
        function k(e, r) {
          var o, t;
          while (r.commentLevel > 0 && (t = e.next()) != null) {
            if (o === "(" && t === "*") r.commentLevel++;
            if (o === "*" && t === ")") r.commentLevel--;
            o = t;
          }
          if (r.commentLevel <= 0) {
            r.tokenize = d;
          }
          return "comment";
        }
        function l(e, r) {
          var o, t;
          while (r.longString && (t = e.next()) != null) {
            if (o === "|" && t === "}") r.longString = false;
            o = t;
          }
          if (!r.longString) {
            r.tokenize = d;
          }
          return "string";
        }
        return {
          startState: function () {
            return { tokenize: d, commentLevel: 0, longString: false };
          },
          token: function (e, r) {
            if (e.eatSpace()) return null;
            return r.tokenize(e, r);
          },
          languageData: { autocomplete: i, commentTokens: { line: e.slashComments ? "//" : undefined, block: { open: "(*", close: "*)" } } },
        };
      }
      const i = t({
        name: "ocaml",
        extraWords: {
          and: "keyword",
          assert: "keyword",
          begin: "keyword",
          class: "keyword",
          constraint: "keyword",
          done: "keyword",
          downto: "keyword",
          external: "keyword",
          function: "keyword",
          initializer: "keyword",
          lazy: "keyword",
          match: "keyword",
          method: "keyword",
          module: "keyword",
          mutable: "keyword",
          new: "keyword",
          nonrec: "keyword",
          object: "keyword",
          private: "keyword",
          sig: "keyword",
          to: "keyword",
          try: "keyword",
          value: "keyword",
          virtual: "keyword",
          when: "keyword",
          raise: "builtin",
          failwith: "builtin",
          true: "builtin",
          false: "builtin",
          asr: "builtin",
          land: "builtin",
          lor: "builtin",
          lsl: "builtin",
          lsr: "builtin",
          lxor: "builtin",
          mod: "builtin",
          or: "builtin",
          raise_notrace: "builtin",
          trace: "builtin",
          exit: "builtin",
          print_string: "builtin",
          print_endline: "builtin",
          int: "type",
          float: "type",
          bool: "type",
          char: "type",
          string: "type",
          unit: "type",
          List: "builtin",
        },
      });
      const n = t({
        name: "fsharp",
        extraWords: {
          abstract: "keyword",
          assert: "keyword",
          base: "keyword",
          begin: "keyword",
          class: "keyword",
          default: "keyword",
          delegate: "keyword",
          "do!": "keyword",
          done: "keyword",
          downcast: "keyword",
          downto: "keyword",
          elif: "keyword",
          extern: "keyword",
          finally: "keyword",
          for: "keyword",
          function: "keyword",
          global: "keyword",
          inherit: "keyword",
          inline: "keyword",
          interface: "keyword",
          internal: "keyword",
          lazy: "keyword",
          "let!": "keyword",
          match: "keyword",
          member: "keyword",
          module: "keyword",
          mutable: "keyword",
          namespace: "keyword",
          new: "keyword",
          null: "keyword",
          override: "keyword",
          private: "keyword",
          public: "keyword",
          "return!": "keyword",
          return: "keyword",
          select: "keyword",
          static: "keyword",
          to: "keyword",
          try: "keyword",
          upcast: "keyword",
          "use!": "keyword",
          use: "keyword",
          void: "keyword",
          when: "keyword",
          "yield!": "keyword",
          yield: "keyword",
          atomic: "keyword",
          break: "keyword",
          checked: "keyword",
          component: "keyword",
          const: "keyword",
          constraint: "keyword",
          constructor: "keyword",
          continue: "keyword",
          eager: "keyword",
          event: "keyword",
          external: "keyword",
          fixed: "keyword",
          method: "keyword",
          mixin: "keyword",
          object: "keyword",
          parallel: "keyword",
          process: "keyword",
          protected: "keyword",
          pure: "keyword",
          sealed: "keyword",
          tailcall: "keyword",
          trait: "keyword",
          virtual: "keyword",
          volatile: "keyword",
          List: "builtin",
          Seq: "builtin",
          Map: "builtin",
          Set: "builtin",
          Option: "builtin",
          int: "builtin",
          string: "builtin",
          not: "builtin",
          true: "builtin",
          false: "builtin",
          raise: "builtin",
          failwith: "builtin",
        },
        slashComments: true,
      });
      const d = t({
        name: "sml",
        extraWords: {
          abstype: "keyword",
          and: "keyword",
          andalso: "keyword",
          case: "keyword",
          datatype: "keyword",
          fn: "keyword",
          handle: "keyword",
          infix: "keyword",
          infixr: "keyword",
          local: "keyword",
          nonfix: "keyword",
          op: "keyword",
          orelse: "keyword",
          raise: "keyword",
          withtype: "keyword",
          eqtype: "keyword",
          sharing: "keyword",
          sig: "keyword",
          signature: "keyword",
          structure: "keyword",
          where: "keyword",
          true: "keyword",
          false: "keyword",
          int: "builtin",
          real: "builtin",
          string: "builtin",
          char: "builtin",
          bool: "builtin",
        },
        slashComments: true,
      });
    },
  },
]);
