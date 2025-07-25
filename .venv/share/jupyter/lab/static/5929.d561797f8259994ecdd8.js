"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5929],
  {
    25929: (e, t, n) => {
      n.r(t);
      n.d(t, { asn1: () => a });
      function r(e) {
        var t = {},
          n = e.split(" ");
        for (var r = 0; r < n.length; ++r) t[n[r]] = true;
        return t;
      }
      const i = {
        keywords: r(
          "DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION" +
            " REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED" +
            " WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN" +
            " IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS" +
            " MINACCESS MAXACCESS REVISION STATUS DESCRIPTION" +
            " SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName" +
            " ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY" +
            " IMPLIED EXPORTS"
        ),
        cmipVerbs: r("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),
        compareTypes: r(
          "OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY" +
            " MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY" +
            " OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL" +
            " SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL" +
            " TEXTUAL-CONVENTION"
        ),
        status: r("current deprecated mandatory obsolete"),
        tags: r("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS" + " UNIVERSAL"),
        storage: r(
          "BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING" +
            " UTCTime InterfaceIndex IANAifType CMIP-Attribute" +
            " REAL PACKAGE PACKAGES IpAddress PhysAddress" +
            " NetworkAddress BITS BMPString TimeStamp TimeTicks" +
            " TruthValue RowStatus DisplayString GeneralString" +
            " GraphicString IA5String NumericString" +
            " PrintableString SnmpAdminString TeletexString" +
            " UTF8String VideotexString VisibleString StringStore" +
            " ISO646String T61String UniversalString Unsigned32" +
            " Integer32 Gauge Gauge32 Counter Counter32 Counter64"
        ),
        modifier: r("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS" + " GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS" + " DEFINED"),
        accessTypes: r("not-accessible accessible-for-notify read-only" + " read-create read-write"),
        multiLineStrings: true,
      };
      function a(e) {
        var t = e.keywords || i.keywords,
          n = e.cmipVerbs || i.cmipVerbs,
          r = e.compareTypes || i.compareTypes,
          a = e.status || i.status,
          s = e.tags || i.tags,
          E = e.storage || i.storage,
          o = e.modifier || i.modifier,
          u = e.accessTypes || i.accessTypes,
          I = e.multiLineStrings || i.multiLineStrings,
          T = e.indentStatements !== false;
        var l = /[\|\^]/;
        var S;
        function p(e, i) {
          var I = e.next();
          if (I == '"' || I == "'") {
            i.tokenize = f(I);
            return i.tokenize(e, i);
          }
          if (/[\[\]\(\){}:=,;]/.test(I)) {
            S = I;
            return "punctuation";
          }
          if (I == "-") {
            if (e.eat("-")) {
              e.skipToEnd();
              return "comment";
            }
          }
          if (/\d/.test(I)) {
            e.eatWhile(/[\w\.]/);
            return "number";
          }
          if (l.test(I)) {
            e.eatWhile(l);
            return "operator";
          }
          e.eatWhile(/[\w\-]/);
          var T = e.current();
          if (t.propertyIsEnumerable(T)) return "keyword";
          if (n.propertyIsEnumerable(T)) return "variableName";
          if (r.propertyIsEnumerable(T)) return "atom";
          if (a.propertyIsEnumerable(T)) return "comment";
          if (s.propertyIsEnumerable(T)) return "typeName";
          if (E.propertyIsEnumerable(T)) return "modifier";
          if (o.propertyIsEnumerable(T)) return "modifier";
          if (u.propertyIsEnumerable(T)) return "modifier";
          return "variableName";
        }
        function f(e) {
          return function (t, n) {
            var r = false,
              i,
              a = false;
            while ((i = t.next()) != null) {
              if (i == e && !r) {
                var s = t.peek();
                if (s) {
                  s = s.toLowerCase();
                  if (s == "b" || s == "h" || s == "o") t.next();
                }
                a = true;
                break;
              }
              r = !r && i == "\\";
            }
            if (a || !(r || I)) n.tokenize = null;
            return "string";
          };
        }
        function c(e, t, n, r, i) {
          this.indented = e;
          this.column = t;
          this.type = n;
          this.align = r;
          this.prev = i;
        }
        function A(e, t, n) {
          var r = e.indented;
          if (e.context && e.context.type == "statement") r = e.context.indented;
          return (e.context = new c(r, t, n, null, e.context));
        }
        function N(e) {
          var t = e.context.type;
          if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
          return (e.context = e.context.prev);
        }
        return {
          name: "asn1",
          startState: function () {
            return { tokenize: null, context: new c(-2, 0, "top", false), indented: 0, startOfLine: true };
          },
          token: function (e, t) {
            var n = t.context;
            if (e.sol()) {
              if (n.align == null) n.align = false;
              t.indented = e.indentation();
              t.startOfLine = true;
            }
            if (e.eatSpace()) return null;
            S = null;
            var r = (t.tokenize || p)(e, t);
            if (r == "comment") return r;
            if (n.align == null) n.align = true;
            if ((S == ";" || S == ":" || S == ",") && n.type == "statement") {
              N(t);
            } else if (S == "{") A(t, e.column(), "}");
            else if (S == "[") A(t, e.column(), "]");
            else if (S == "(") A(t, e.column(), ")");
            else if (S == "}") {
              while (n.type == "statement") n = N(t);
              if (n.type == "}") n = N(t);
              while (n.type == "statement") n = N(t);
            } else if (S == n.type) N(t);
            else if (T && (((n.type == "}" || n.type == "top") && S != ";") || (n.type == "statement" && S == "newstatement")))
              A(t, e.column(), "statement");
            t.startOfLine = false;
            return r;
          },
          languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "--" } },
        };
      }
    },
  },
]);
