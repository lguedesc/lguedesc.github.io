"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8217],
  {
    58217: (E, T, I) => {
      I.r(T);
      I.d(T, { cobol: () => i });
      var N = "builtin",
        R = "comment",
        A = "string",
        O = "atom",
        C = "number",
        L = "keyword",
        D = "header",
        S = "def",
        U = "link";
      function P(E) {
        var T = {},
          I = E.split(" ");
        for (var N = 0; N < I.length; ++N) T[I[N]] = true;
        return T;
      }
      var e = P("TRUE FALSE ZEROES ZEROS ZERO SPACES SPACE LOW-VALUE LOW-VALUES ");
      var M = P(
        "ACCEPT ACCESS ACQUIRE ADD ADDRESS " +
          "ADVANCING AFTER ALIAS ALL ALPHABET " +
          "ALPHABETIC ALPHABETIC-LOWER ALPHABETIC-UPPER ALPHANUMERIC ALPHANUMERIC-EDITED " +
          "ALSO ALTER ALTERNATE AND ANY " +
          "ARE AREA AREAS ARITHMETIC ASCENDING " +
          "ASSIGN AT ATTRIBUTE AUTHOR AUTO " +
          "AUTO-SKIP AUTOMATIC B-AND B-EXOR B-LESS " +
          "B-NOT B-OR BACKGROUND-COLOR BACKGROUND-COLOUR BEEP " +
          "BEFORE BELL BINARY BIT BITS " +
          "BLANK BLINK BLOCK BOOLEAN BOTTOM " +
          "BY CALL CANCEL CD CF " +
          "CH CHARACTER CHARACTERS CLASS CLOCK-UNITS " +
          "CLOSE COBOL CODE CODE-SET COL " +
          "COLLATING COLUMN COMMA COMMIT COMMITMENT " +
          "COMMON COMMUNICATION COMP COMP-0 COMP-1 " +
          "COMP-2 COMP-3 COMP-4 COMP-5 COMP-6 " +
          "COMP-7 COMP-8 COMP-9 COMPUTATIONAL COMPUTATIONAL-0 " +
          "COMPUTATIONAL-1 COMPUTATIONAL-2 COMPUTATIONAL-3 COMPUTATIONAL-4 COMPUTATIONAL-5 " +
          "COMPUTATIONAL-6 COMPUTATIONAL-7 COMPUTATIONAL-8 COMPUTATIONAL-9 COMPUTE " +
          "CONFIGURATION CONNECT CONSOLE CONTAINED CONTAINS " +
          "CONTENT CONTINUE CONTROL CONTROL-AREA CONTROLS " +
          "CONVERTING COPY CORR CORRESPONDING COUNT " +
          "CRT CRT-UNDER CURRENCY CURRENT CURSOR " +
          "DATA DATE DATE-COMPILED DATE-WRITTEN DAY " +
          "DAY-OF-WEEK DB DB-ACCESS-CONTROL-KEY DB-DATA-NAME DB-EXCEPTION " +
          "DB-FORMAT-NAME DB-RECORD-NAME DB-SET-NAME DB-STATUS DBCS " +
          "DBCS-EDITED DE DEBUG-CONTENTS DEBUG-ITEM DEBUG-LINE " +
          "DEBUG-NAME DEBUG-SUB-1 DEBUG-SUB-2 DEBUG-SUB-3 DEBUGGING " +
          "DECIMAL-POINT DECLARATIVES DEFAULT DELETE DELIMITED " +
          "DELIMITER DEPENDING DESCENDING DESCRIBED DESTINATION " +
          "DETAIL DISABLE DISCONNECT DISPLAY DISPLAY-1 " +
          "DISPLAY-2 DISPLAY-3 DISPLAY-4 DISPLAY-5 DISPLAY-6 " +
          "DISPLAY-7 DISPLAY-8 DISPLAY-9 DIVIDE DIVISION " +
          "DOWN DROP DUPLICATE DUPLICATES DYNAMIC " +
          "EBCDIC EGI EJECT ELSE EMI " +
          "EMPTY EMPTY-CHECK ENABLE END END. END-ACCEPT END-ACCEPT. " +
          "END-ADD END-CALL END-COMPUTE END-DELETE END-DISPLAY " +
          "END-DIVIDE END-EVALUATE END-IF END-INVOKE END-MULTIPLY " +
          "END-OF-PAGE END-PERFORM END-READ END-RECEIVE END-RETURN " +
          "END-REWRITE END-SEARCH END-START END-STRING END-SUBTRACT " +
          "END-UNSTRING END-WRITE END-XML ENTER ENTRY " +
          "ENVIRONMENT EOP EQUAL EQUALS ERASE " +
          "ERROR ESI EVALUATE EVERY EXCEEDS " +
          "EXCEPTION EXCLUSIVE EXIT EXTEND EXTERNAL " +
          "EXTERNALLY-DESCRIBED-KEY FD FETCH FILE FILE-CONTROL " +
          "FILE-STREAM FILES FILLER FINAL FIND " +
          "FINISH FIRST FOOTING FOR FOREGROUND-COLOR " +
          "FOREGROUND-COLOUR FORMAT FREE FROM FULL " +
          "FUNCTION GENERATE GET GIVING GLOBAL " +
          "GO GOBACK GREATER GROUP HEADING " +
          "HIGH-VALUE HIGH-VALUES HIGHLIGHT I-O I-O-CONTROL " +
          "ID IDENTIFICATION IF IN INDEX " +
          "INDEX-1 INDEX-2 INDEX-3 INDEX-4 INDEX-5 " +
          "INDEX-6 INDEX-7 INDEX-8 INDEX-9 INDEXED " +
          "INDIC INDICATE INDICATOR INDICATORS INITIAL " +
          "INITIALIZE INITIATE INPUT INPUT-OUTPUT INSPECT " +
          "INSTALLATION INTO INVALID INVOKE IS " +
          "JUST JUSTIFIED KANJI KEEP KEY " +
          "LABEL LAST LD LEADING LEFT " +
          "LEFT-JUSTIFY LENGTH LENGTH-CHECK LESS LIBRARY " +
          "LIKE LIMIT LIMITS LINAGE LINAGE-COUNTER " +
          "LINE LINE-COUNTER LINES LINKAGE LOCAL-STORAGE " +
          "LOCALE LOCALLY LOCK " +
          "MEMBER MEMORY MERGE MESSAGE METACLASS " +
          "MODE MODIFIED MODIFY MODULES MOVE " +
          "MULTIPLE MULTIPLY NATIONAL NATIVE NEGATIVE " +
          "NEXT NO NO-ECHO NONE NOT " +
          "NULL NULL-KEY-MAP NULL-MAP NULLS NUMBER " +
          "NUMERIC NUMERIC-EDITED OBJECT OBJECT-COMPUTER OCCURS " +
          "OF OFF OMITTED ON ONLY " +
          "OPEN OPTIONAL OR ORDER ORGANIZATION " +
          "OTHER OUTPUT OVERFLOW OWNER PACKED-DECIMAL " +
          "PADDING PAGE PAGE-COUNTER PARSE PERFORM " +
          "PF PH PIC PICTURE PLUS " +
          "POINTER POSITION POSITIVE PREFIX PRESENT " +
          "PRINTING PRIOR PROCEDURE PROCEDURE-POINTER PROCEDURES " +
          "PROCEED PROCESS PROCESSING PROGRAM PROGRAM-ID " +
          "PROMPT PROTECTED PURGE QUEUE QUOTE " +
          "QUOTES RANDOM RD READ READY " +
          "REALM RECEIVE RECONNECT RECORD RECORD-NAME " +
          "RECORDS RECURSIVE REDEFINES REEL REFERENCE " +
          "REFERENCE-MONITOR REFERENCES RELATION RELATIVE RELEASE " +
          "REMAINDER REMOVAL RENAMES REPEATED REPLACE " +
          "REPLACING REPORT REPORTING REPORTS REPOSITORY " +
          "REQUIRED RERUN RESERVE RESET RETAINING " +
          "RETRIEVAL RETURN RETURN-CODE RETURNING REVERSE-VIDEO " +
          "REVERSED REWIND REWRITE RF RH " +
          "RIGHT RIGHT-JUSTIFY ROLLBACK ROLLING ROUNDED " +
          "RUN SAME SCREEN SD SEARCH " +
          "SECTION SECURE SECURITY SEGMENT SEGMENT-LIMIT " +
          "SELECT SEND SENTENCE SEPARATE SEQUENCE " +
          "SEQUENTIAL SET SHARED SIGN SIZE " +
          "SKIP1 SKIP2 SKIP3 SORT SORT-MERGE " +
          "SORT-RETURN SOURCE SOURCE-COMPUTER SPACE-FILL " +
          "SPECIAL-NAMES STANDARD STANDARD-1 STANDARD-2 " +
          "START STARTING STATUS STOP STORE " +
          "STRING SUB-QUEUE-1 SUB-QUEUE-2 SUB-QUEUE-3 SUB-SCHEMA " +
          "SUBFILE SUBSTITUTE SUBTRACT SUM SUPPRESS " +
          "SYMBOLIC SYNC SYNCHRONIZED SYSIN SYSOUT " +
          "TABLE TALLYING TAPE TENANT TERMINAL " +
          "TERMINATE TEST TEXT THAN THEN " +
          "THROUGH THRU TIME TIMES TITLE " +
          "TO TOP TRAILING TRAILING-SIGN TRANSACTION " +
          "TYPE TYPEDEF UNDERLINE UNEQUAL UNIT " +
          "UNSTRING UNTIL UP UPDATE UPON " +
          "USAGE USAGE-MODE USE USING VALID " +
          "VALIDATE VALUE VALUES VARYING VLR " +
          "WAIT WHEN WHEN-COMPILED WITH WITHIN " +
          "WORDS WORKING-STORAGE WRITE XML XML-CODE " +
          "XML-EVENT XML-NTEXT XML-TEXT ZERO ZERO-FILL "
      );
      var t = P("- * ** / + < <= = > >= ");
      var n = {
        digit: /\d/,
        digit_or_colon: /[\d:]/,
        hex: /[0-9a-f]/i,
        sign: /[+-]/,
        exponent: /e/i,
        keyword_char: /[^\s\(\[\;\)\]]/,
        symbol: /[\w*+\-]/,
      };
      function G(E, T) {
        if (E === "0" && T.eat(/x/i)) {
          T.eatWhile(n.hex);
          return true;
        }
        if ((E == "+" || E == "-") && n.digit.test(T.peek())) {
          T.eat(n.sign);
          E = T.next();
        }
        if (n.digit.test(E)) {
          T.eat(E);
          T.eatWhile(n.digit);
          if ("." == T.peek()) {
            T.eat(".");
            T.eatWhile(n.digit);
          }
          if (T.eat(n.exponent)) {
            T.eat(n.sign);
            T.eatWhile(n.digit);
          }
          return true;
        }
        return false;
      }
      const i = {
        name: "cobol",
        startState: function () {
          return { indentStack: null, indentation: 0, mode: false };
        },
        token: function (E, T) {
          if (T.indentStack == null && E.sol()) {
            T.indentation = 6;
          }
          if (E.eatSpace()) {
            return null;
          }
          var I = null;
          switch (T.mode) {
            case "string":
              var P = false;
              while ((P = E.next()) != null) {
                if ((P == '"' || P == "'") && !E.match(/['"]/, false)) {
                  T.mode = false;
                  break;
                }
              }
              I = A;
              break;
            default:
              var i = E.next();
              var r = E.column();
              if (r >= 0 && r <= 5) {
                I = S;
              } else if (r >= 72 && r <= 79) {
                E.skipToEnd();
                I = D;
              } else if (i == "*" && r == 6) {
                E.skipToEnd();
                I = R;
              } else if (i == '"' || i == "'") {
                T.mode = "string";
                I = A;
              } else if (i == "'" && !n.digit_or_colon.test(E.peek())) {
                I = O;
              } else if (i == ".") {
                I = U;
              } else if (G(i, E)) {
                I = C;
              } else {
                if (E.current().match(n.symbol)) {
                  while (r < 71) {
                    if (E.eat(n.symbol) === undefined) {
                      break;
                    } else {
                      r++;
                    }
                  }
                }
                if (M && M.propertyIsEnumerable(E.current().toUpperCase())) {
                  I = L;
                } else if (t && t.propertyIsEnumerable(E.current().toUpperCase())) {
                  I = N;
                } else if (e && e.propertyIsEnumerable(E.current().toUpperCase())) {
                  I = O;
                } else I = null;
              }
          }
          return I;
        },
        indent: function (E) {
          if (E.indentStack == null) return E.indentation;
          return E.indentStack.indent;
        },
      };
    },
  },
]);
