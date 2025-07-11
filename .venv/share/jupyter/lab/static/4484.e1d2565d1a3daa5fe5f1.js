"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4484],
  {
    34484: (e, t, n) => {
      n.r(t);
      n.d(t, { xQuery: () => z });
      var r = (function () {
        function e(e) {
          return { type: e, style: "keyword" };
        }
        var t = e("operator"),
          n = { type: "atom", style: "atom" },
          r = { type: "punctuation", style: null },
          a = { type: "axis_specifier", style: "qualifier" };
        var i = { ",": r };
        var s = [
          "after",
          "all",
          "allowing",
          "ancestor",
          "ancestor-or-self",
          "any",
          "array",
          "as",
          "ascending",
          "at",
          "attribute",
          "base-uri",
          "before",
          "boundary-space",
          "by",
          "case",
          "cast",
          "castable",
          "catch",
          "child",
          "collation",
          "comment",
          "construction",
          "contains",
          "content",
          "context",
          "copy",
          "copy-namespaces",
          "count",
          "decimal-format",
          "declare",
          "default",
          "delete",
          "descendant",
          "descendant-or-self",
          "descending",
          "diacritics",
          "different",
          "distance",
          "document",
          "document-node",
          "element",
          "else",
          "empty",
          "empty-sequence",
          "encoding",
          "end",
          "entire",
          "every",
          "exactly",
          "except",
          "external",
          "first",
          "following",
          "following-sibling",
          "for",
          "from",
          "ftand",
          "ftnot",
          "ft-option",
          "ftor",
          "function",
          "fuzzy",
          "greatest",
          "group",
          "if",
          "import",
          "in",
          "inherit",
          "insensitive",
          "insert",
          "instance",
          "intersect",
          "into",
          "invoke",
          "is",
          "item",
          "language",
          "last",
          "lax",
          "least",
          "let",
          "levels",
          "lowercase",
          "map",
          "modify",
          "module",
          "most",
          "namespace",
          "next",
          "no",
          "node",
          "nodes",
          "no-inherit",
          "no-preserve",
          "not",
          "occurs",
          "of",
          "only",
          "option",
          "order",
          "ordered",
          "ordering",
          "paragraph",
          "paragraphs",
          "parent",
          "phrase",
          "preceding",
          "preceding-sibling",
          "preserve",
          "previous",
          "processing-instruction",
          "relationship",
          "rename",
          "replace",
          "return",
          "revalidation",
          "same",
          "satisfies",
          "schema",
          "schema-attribute",
          "schema-element",
          "score",
          "self",
          "sensitive",
          "sentence",
          "sentences",
          "sequence",
          "skip",
          "sliding",
          "some",
          "stable",
          "start",
          "stemming",
          "stop",
          "strict",
          "strip",
          "switch",
          "text",
          "then",
          "thesaurus",
          "times",
          "to",
          "transform",
          "treat",
          "try",
          "tumbling",
          "type",
          "typeswitch",
          "union",
          "unordered",
          "update",
          "updating",
          "uppercase",
          "using",
          "validate",
          "value",
          "variable",
          "version",
          "weight",
          "when",
          "where",
          "wildcards",
          "window",
          "with",
          "without",
          "word",
          "words",
          "xquery",
        ];
        for (var o = 0, l = s.length; o < l; o++) {
          i[s[o]] = e(s[o]);
        }
        var u = [
          "xs:anyAtomicType",
          "xs:anySimpleType",
          "xs:anyType",
          "xs:anyURI",
          "xs:base64Binary",
          "xs:boolean",
          "xs:byte",
          "xs:date",
          "xs:dateTime",
          "xs:dateTimeStamp",
          "xs:dayTimeDuration",
          "xs:decimal",
          "xs:double",
          "xs:duration",
          "xs:ENTITIES",
          "xs:ENTITY",
          "xs:float",
          "xs:gDay",
          "xs:gMonth",
          "xs:gMonthDay",
          "xs:gYear",
          "xs:gYearMonth",
          "xs:hexBinary",
          "xs:ID",
          "xs:IDREF",
          "xs:IDREFS",
          "xs:int",
          "xs:integer",
          "xs:item",
          "xs:java",
          "xs:language",
          "xs:long",
          "xs:Name",
          "xs:NCName",
          "xs:negativeInteger",
          "xs:NMTOKEN",
          "xs:NMTOKENS",
          "xs:nonNegativeInteger",
          "xs:nonPositiveInteger",
          "xs:normalizedString",
          "xs:NOTATION",
          "xs:numeric",
          "xs:positiveInteger",
          "xs:precisionDecimal",
          "xs:QName",
          "xs:short",
          "xs:string",
          "xs:time",
          "xs:token",
          "xs:unsignedByte",
          "xs:unsignedInt",
          "xs:unsignedLong",
          "xs:unsignedShort",
          "xs:untyped",
          "xs:untypedAtomic",
          "xs:yearMonthDuration",
        ];
        for (var o = 0, l = u.length; o < l; o++) {
          i[u[o]] = n;
        }
        var c = [
          "eq",
          "ne",
          "lt",
          "le",
          "gt",
          "ge",
          ":=",
          "=",
          ">",
          ">=",
          "<",
          "<=",
          ".",
          "|",
          "?",
          "and",
          "or",
          "div",
          "idiv",
          "mod",
          "*",
          "/",
          "+",
          "-",
        ];
        for (var o = 0, l = c.length; o < l; o++) {
          i[c[o]] = t;
        }
        var f = [
          "self::",
          "attribute::",
          "child::",
          "descendant::",
          "descendant-or-self::",
          "parent::",
          "ancestor::",
          "ancestor-or-self::",
          "following::",
          "preceding::",
          "following-sibling::",
          "preceding-sibling::",
        ];
        for (var o = 0, l = f.length; o < l; o++) {
          i[f[o]] = a;
        }
        return i;
      })();
      function a(e, t, n) {
        t.tokenize = n;
        return n(e, t);
      }
      function i(e, t) {
        var n = e.next(),
          i = false,
          o = v(e);
        if (n == "<") {
          if (e.match("!--", true)) return a(e, t, p);
          if (e.match("![CDATA", false)) {
            t.tokenize = m;
            return "tag";
          }
          if (e.match("?", false)) {
            return a(e, t, x);
          }
          var f = e.eat("/");
          e.eatSpace();
          var g = "",
            y;
          while ((y = e.eat(/[^\s\u00a0=<>\"\'\/?]/))) g += y;
          return a(e, t, c(g, f));
        } else if (n == "{") {
          b(t, { type: "codeblock" });
          return null;
        } else if (n == "}") {
          w(t);
          return null;
        } else if (d(t)) {
          if (n == ">") return "tag";
          else if (n == "/" && e.eat(">")) {
            w(t);
            return "tag";
          } else return "variable";
        } else if (/\d/.test(n)) {
          e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);
          return "atom";
        } else if (n === "(" && e.eat(":")) {
          b(t, { type: "comment" });
          return a(e, t, s);
        } else if (!o && (n === '"' || n === "'")) return l(e, t, n);
        else if (n === "$") {
          return a(e, t, u);
        } else if (n === ":" && e.eat("=")) {
          return "keyword";
        } else if (n === "(") {
          b(t, { type: "paren" });
          return null;
        } else if (n === ")") {
          w(t);
          return null;
        } else if (n === "[") {
          b(t, { type: "bracket" });
          return null;
        } else if (n === "]") {
          w(t);
          return null;
        } else {
          var k = r.propertyIsEnumerable(n) && r[n];
          if (o && n === '"') while (e.next() !== '"') {}
          if (o && n === "'") while (e.next() !== "'") {}
          if (!k) e.eatWhile(/[\w\$_-]/);
          var z = e.eat(":");
          if (!e.eat(":") && z) {
            e.eatWhile(/[\w\$_-]/);
          }
          if (e.match(/^[ \t]*\(/, false)) {
            i = true;
          }
          var I = e.current();
          k = r.propertyIsEnumerable(I) && r[I];
          if (i && !k) k = { type: "function_call", style: "def" };
          if (h(t)) {
            w(t);
            return "variable";
          }
          if (I == "element" || I == "attribute" || k.type == "axis_specifier") b(t, { type: "xmlconstructor" });
          return k ? k.style : "variable";
        }
      }
      function s(e, t) {
        var n = false,
          r = false,
          a = 0,
          i;
        while ((i = e.next())) {
          if (i == ")" && n) {
            if (a > 0) a--;
            else {
              w(t);
              break;
            }
          } else if (i == ":" && r) {
            a++;
          }
          n = i == ":";
          r = i == "(";
        }
        return "comment";
      }
      function o(e, t) {
        return function (n, r) {
          var a;
          while ((a = n.next())) {
            if (a == e) {
              w(r);
              if (t) r.tokenize = t;
              break;
            } else if (n.match("{", false) && g(r)) {
              b(r, { type: "codeblock" });
              r.tokenize = i;
              return "string";
            }
          }
          return "string";
        };
      }
      function l(e, t, n, r) {
        let i = o(n, r);
        b(t, { type: "string", name: n, tokenize: i });
        return a(e, t, i);
      }
      function u(e, t) {
        var n = /[\w\$_-]/;
        if (e.eat('"')) {
          while (e.next() !== '"') {}
          e.eat(":");
        } else {
          e.eatWhile(n);
          if (!e.match(":=", false)) e.eat(":");
        }
        e.eatWhile(n);
        t.tokenize = i;
        return "variable";
      }
      function c(e, t) {
        return function (n, r) {
          n.eatSpace();
          if (t && n.eat(">")) {
            w(r);
            r.tokenize = i;
            return "tag";
          }
          if (!n.eat("/")) b(r, { type: "tag", name: e, tokenize: i });
          if (!n.eat(">")) {
            r.tokenize = f;
            return "tag";
          } else {
            r.tokenize = i;
          }
          return "tag";
        };
      }
      function f(e, t) {
        var n = e.next();
        if (n == "/" && e.eat(">")) {
          if (g(t)) w(t);
          if (d(t)) w(t);
          return "tag";
        }
        if (n == ">") {
          if (g(t)) w(t);
          return "tag";
        }
        if (n == "=") return null;
        if (n == '"' || n == "'") return l(e, t, n, f);
        if (!g(t)) b(t, { type: "attribute", tokenize: f });
        e.eat(/[a-zA-Z_:]/);
        e.eatWhile(/[-a-zA-Z0-9_:.]/);
        e.eatSpace();
        if (e.match(">", false) || e.match("/", false)) {
          w(t);
          t.tokenize = i;
        }
        return "attribute";
      }
      function p(e, t) {
        var n;
        while ((n = e.next())) {
          if (n == "-" && e.match("->", true)) {
            t.tokenize = i;
            return "comment";
          }
        }
      }
      function m(e, t) {
        var n;
        while ((n = e.next())) {
          if (n == "]" && e.match("]", true)) {
            t.tokenize = i;
            return "comment";
          }
        }
      }
      function x(e, t) {
        var n;
        while ((n = e.next())) {
          if (n == "?" && e.match(">", true)) {
            t.tokenize = i;
            return "processingInstruction";
          }
        }
      }
      function d(e) {
        return k(e, "tag");
      }
      function g(e) {
        return k(e, "attribute");
      }
      function h(e) {
        return k(e, "xmlconstructor");
      }
      function y(e) {
        return k(e, "string");
      }
      function v(e) {
        if (e.current() === '"') return e.match(/^[^\"]+\"\:/, false);
        else if (e.current() === "'") return e.match(/^[^\"]+\'\:/, false);
        else return false;
      }
      function k(e, t) {
        return e.stack.length && e.stack[e.stack.length - 1].type == t;
      }
      function b(e, t) {
        e.stack.push(t);
      }
      function w(e) {
        e.stack.pop();
        var t = e.stack.length && e.stack[e.stack.length - 1].tokenize;
        e.tokenize = t || i;
      }
      const z = {
        name: "xquery",
        startState: function () {
          return { tokenize: i, cc: [], stack: [] };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          var n = t.tokenize(e, t);
          return n;
        },
        languageData: { commentTokens: { block: { open: "(:", close: ":)" } } },
      };
    },
  },
]);
