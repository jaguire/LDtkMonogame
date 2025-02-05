const Classes = [
  "ContentManager",
  "EntityRef",
  "GraphicsDevice",
  "Guid",
  "IEnumerable",
  "LDtkFile",
  "LDtkIntGrid",
  "LDtkLevel",
  "LDtkRenderer",
  "LDtkWorld",
  "Point",
  "T",
  "Vector2",
  "Rectangle",
  "Color",
  "Player",
  "Gun_Pickup",
  "LDtkLevelData",
  "LdtkCustomCommand",
  "Definitions",
  "WorldLayout",
  "LevelBackgroundPosition",
  "NeighbourLevel",
  "FieldInstance",
  "LayerInstance",
  "EntityDefinition",
  "EnumDefinition",
  "LayerDefinition",
  "FieldDefinition",
  "TilesetDefinition",
  "EmbedAtlas",
  "EnumTagValue",
  "SpriteBatch",
  "Texture2D",
  "JsonSerializerOptions",
  "TilesetRectangle",
  "TileRenderMode",
  "EnumValueDefinition",
  "RenderedLevel",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]


/*!
  Highlight.js v11.7.0 (git: 82688fad18)
  (c) 2006-2022 undefined and other contributors
  License: BSD-3-Clause
 */

var hljs = function ()
{
  "use strict";
  var e = {
    exports: {}
  };

  function t(e)
  {
    return e instanceof Map ? e.clear = e.delete = e.set = () =>
    {
      throw Error("map is read-only")
    } : e instanceof Set && (e.add = e.clear = e.delete = () =>
    {
      throw Error("set is read-only")
    }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((n =>
    {
      var i = e[n];
      "object" != typeof i || Object.isFrozen(i) || t(i)
    })), e
  }
  e.exports = t, e.exports.default = t;
  class n
  {
    constructor(e)
    {
      void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
    }
    ignoreMatch()
    {
      this.isMatchIgnored = !0
    }
  }

  function i(e)
  {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
  }

  function r(e, ...t)
  {
    const n = Object.create(null);
    for (const t in e) n[t] = e[t];
    return t.forEach((e =>
    {
      for (const t in e) n[t] = e[t]
    })), n
  }
  const s = e => !!e.scope || e.sublanguage && e.language;
  class o
  {
    constructor(e, t)
    {
      this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
    }
    addText(e)
    {
      this.buffer += i(e)
    }
    openNode(e)
    {
      if (!s(e)) return;
      let t = "";
      t = e.sublanguage ? "language-" + e.language : ((e, {
        prefix: t
      }) =>
      {
        if (e.includes("."))
        {
          const n = e.split(".");
          return [`${t}${n.shift()}`, ...n.map(((e, t) => `${e}${"_".repeat(t + 1)}`))].join(" ")
        }
        return `${t}${e}`
      })(e.scope, {
        prefix: this.classPrefix
      }), this.span(t)
    }
    closeNode(e)
    {
      s(e) && (this.buffer += "</span>")
    }
    value()
    {
      return this.buffer
    }
    span(e)
    {
      this.buffer += `<span class="${e}">`
    }
  }
  const a = (e = {}) =>
  {
    const t = {
      children: []
    };
    return Object.assign(t, e), t
  };
  class c
  {
    constructor()
    {
      this.rootNode = a(), this.stack = [this.rootNode]
    }
    get top()
    {
      return this.stack[this.stack.length - 1]
    }
    get root()
    {
      return this.rootNode
    }
    add(e)
    {
      this.top.children.push(e)
    }
    openNode(e)
    {
      const t = a({
        scope: e
      });
      this.add(t), this.stack.push(t)
    }
    closeNode()
    {
      if (this.stack.length > 1) return this.stack.pop()
    }
    closeAllNodes()
    {
      for (; this.closeNode(););
    }
    toJSON()
    {
      return JSON.stringify(this.rootNode, null, 4)
    }
    walk(e)
    {
      return this.constructor._walk(e, this.rootNode)
    }
    static _walk(e, t)
    {
      return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t),
        t.children.forEach((t => this._walk(e, t))), e.closeNode(t)), e
    }
    static _collapse(e)
    {
      "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e =>
      {
        c._collapse(e)
      })))
    }
  }
  class l extends c
  {
    constructor(e)
    {
      super(), this.options = e
    }
    addKeyword(e, t)
    {
      "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
    }
    addText(e)
    {
      "" !== e && this.add(e)
    }
    addSublanguage(e, t)
    {
      const n = e.root;
      n.sublanguage = !0, n.language = t, this.add(n)
    }
    toHTML()
    {
      return new o(this, this.options).value()
    }
    finalize()
    {
      return !0
    }
  }

  function g(e)
  {
    return e ? "string" == typeof e ? e : e.source : null
  }

  function d(e)
  {
    return p("(?=", e, ")")
  }

  function u(e)
  {
    return p("(?:", e, ")*")
  }

  function h(e)
  {
    return p("(?:", e, ")?")
  }

  function p(...e)
  {
    return e.map((e => g(e))).join("")
  }

  function f(...e)
  {
    const t = (e =>
    {
      const t = e[e.length - 1];
      return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
    })(e);
    return "(" + (t.capture ? "" : "?:") + e.map((e => g(e))).join("|") + ")"
  }

  function b(e)
  {
    return RegExp(e.toString() + "|").exec("").length - 1
  }
  const m = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

  function E(e, {
    joinWith: t
  })
  {
    let n = 0;
    return e.map((e =>
    {
      n += 1;
      const t = n;
      let i = g(e),
        r = "";
      for (; i.length > 0;)
      {
        const e = m.exec(i);
        if (!e)
        {
          r += i;
          break
        }
        r += i.substring(0, e.index),
          i = i.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? r += "\\" + (Number(e[1]) + t) : (r += e[0],
            "(" === e[0] && n++)
      }
      return r
    })).map((e => `(${e})`)).join(t)
  }
  const x = "[a-zA-Z]\\w*",
    w = "[a-zA-Z_]\\w*",
    y = "\\b\\d+(\\.\\d+)?",
    _ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    O = "\\b(0b[01]+)",
    v = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    N = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [v]
    },
    k = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [v]
    },
    M = (e, t, n = {}) =>
    {
      const i = r({
        scope: "comment",
        begin: e,
        end: t,
        contains: []
      }, n);
      i.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0
      });
      const s = f("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
      return i.contains.push({
        begin: p(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}")
      }), i
    },
    S = M("//", "$"),
    R = M("/\\*", "\\*/"),
    j = M("#", "$");
  var A = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: x,
    UNDERSCORE_IDENT_RE: w,
    NUMBER_RE: y,
    C_NUMBER_RE: _,
    BINARY_NUMBER_RE: O,
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) =>
    {
      const t = /^#![ ]*\//;
      return e.binary && (e.begin = p(t, /.*\b/, e.binary, /\b.*/)), r({
        scope: "meta",
        begin: t,
        end: /$/,
        relevance: 0,
        "on:begin": (e, t) =>
        {
          0 !== e.index && t.ignoreMatch()
        }
      }, e)
    },
    BACKSLASH_ESCAPE: v,
    APOS_STRING_MODE: N,
    QUOTE_STRING_MODE: k,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    COMMENT: M,
    C_LINE_COMMENT_MODE: S,
    C_BLOCK_COMMENT_MODE: R,
    HASH_COMMENT_MODE: j,
    NUMBER_MODE: {
      scope: "number",
      begin: y,
      relevance: 0
    },
    C_NUMBER_MODE: {
      scope: "number",
      begin: _,
      relevance: 0
    },
    BINARY_NUMBER_MODE: {
      scope: "number",
      begin: O,
      relevance: 0
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        scope: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [v, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [v]
        }]
      }]
    },
    TITLE_MODE: {
      scope: "title",
      begin: x,
      relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
      scope: "title",
      begin: w,
      relevance: 0
    },
    METHOD_GUARD: {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0
    },
    END_SAME_AS_BEGIN: e => Object.assign(e, {
      "on:begin": (e, t) =>
      {
        t.data._beginMatch = e[1]
      },
      "on:end": (e, t) =>
      {
        t.data._beginMatch !== e[1] && t.ignoreMatch()
      }
    })
  });

  function I(e, t)
  {
    "." === e.input[e.index - 1] && t.ignoreMatch()
  }

  function T(e, t)
  {
    void 0 !== e.className && (e.scope = e.className, delete e.className)
  }

  function L(e, t)
  {
    t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
      e.__beforeBegin = I, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords,
      void 0 === e.relevance && (e.relevance = 0))
  }

  function B(e, t)
  {
    Array.isArray(e.illegal) && (e.illegal = f(...e.illegal))
  }

  function D(e, t)
  {
    if (e.match)
    {
      if (e.begin || e.end) throw Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match
    }
  }

  function H(e, t)
  {
    void 0 === e.relevance && (e.relevance = 1)
  }
  const P = (e, t) =>
  {
    if (!e.beforeMatch) return;
    if (e.starts) throw Error("beforeMatch cannot be used with starts");
    const n = Object.assign({}, e);
    Object.keys(e).forEach((t =>
    {
      delete e[t]
    })), e.keywords = n.keywords, e.begin = p(n.beforeMatch, d(n.begin)), e.starts = {
      relevance: 0,
      contains: [Object.assign(n, {
        endsParent: !0
      })]
    }, e.relevance = 0, delete n.beforeMatch
  },
    C = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

  function $(e, t, n = "keyword")
  {
    const i = Object.create(null);
    return "string" == typeof e ? r(n, e.split(" ")) : Array.isArray(e) ? r(n, e) : Object.keys(e).forEach((n =>
    {
      Object.assign(i, $(e[n], t, n))
    })), i;

    function r(e, n)
    {
      t && (n = n.map((e => e.toLowerCase()))), n.forEach((t =>
      {
        const n = t.split("|");
        i[n[0]] = [e, U(n[0], n[1])]
      }))
    }
  }

  function U(e, t)
  {
    return t ? Number(t) : (e => C.includes(e.toLowerCase()))(e) ? 0 : 1
  }
  const z = {},
    K = e =>
    {
      console.error(e)
    },
    W = (e, ...t) =>
    {
      console.log("WARN: " + e, ...t)
    },
    X = (e, t) =>
    {
      z[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), z[`${e}/${t}`] = !0)
    },
    G = Error();

  function Z(e, t, {
    key: n
  })
  {
    let i = 0;
    const r = e[n],
      s = {},
      o = {};
    for (let e = 1; e <= t.length; e++) o[e + i] = r[e], s[e + i] = !0, i += b(t[e - 1]);
    e[n] = o, e[n]._emit = s, e[n]._multi = !0
  }

  function F(e)
  {
    (e =>
    {
      e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope,
        delete e.scope)
    })(e), "string" == typeof e.beginScope && (e.beginScope = {
      _wrap: e.beginScope
    }), "string" == typeof e.endScope && (e.endScope = {
      _wrap: e.endScope
    }), (e =>
    {
      if (Array.isArray(e.begin))
      {
        if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
          G;
        if ("object" != typeof e.beginScope || null === e.beginScope) throw K("beginScope must be object"),
          G;
        Z(e, e.begin, {
          key: "beginScope"
        }), e.begin = E(e.begin, {
          joinWith: ""
        })
      }
    })(e), (e =>
    {
      if (Array.isArray(e.end))
      {
        if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
          G;
        if ("object" != typeof e.endScope || null === e.endScope) throw K("endScope must be object"),
          G;
        Z(e, e.end, {
          key: "endScope"
        }), e.end = E(e.end, {
          joinWith: ""
        })
      }
    })(e)
  }

  function V(e)
  {
    function t(t, n)
    {
      return RegExp(g(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""))
    }
    class n
    {
      constructor()
      {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
      }
      addRule(e, t)
      {
        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]),
          this.matchAt += b(e) + 1
      }
      compile()
      {
        0 === this.regexes.length && (this.exec = () => null);
        const e = this.regexes.map((e => e[1]));
        this.matcherRe = t(E(e, {
          joinWith: "|"
        }), !0), this.lastIndex = 0
      }
      exec(e)
      {
        this.matcherRe.lastIndex = this.lastIndex;
        const t = this.matcherRe.exec(e);
        if (!t) return null;
        const n = t.findIndex(((e, t) => t > 0 && void 0 !== e)),
          i = this.matchIndexes[n];
        return t.splice(0, n), Object.assign(t, i)
      }
    }
    class i
    {
      constructor()
      {
        this.rules = [], this.multiRegexes = [],
          this.count = 0, this.lastIndex = 0, this.regexIndex = 0
      }
      getMatcher(e)
      {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const t = new n;
        return this.rules.slice(e).forEach((([e, n]) => t.addRule(e, n))),
          t.compile(), this.multiRegexes[e] = t, t
      }
      resumingScanAtSamePosition()
      {
        return 0 !== this.regexIndex
      }
      considerAll()
      {
        this.regexIndex = 0
      }
      addRule(e, t)
      {
        this.rules.push([e, t]), "begin" === t.type && this.count++
      }
      exec(e)
      {
        const t = this.getMatcher(this.regexIndex);
        t.lastIndex = this.lastIndex;
        let n = t.exec(e);
        if (this.resumingScanAtSamePosition())
          if (n && n.index === this.lastIndex);
          else
          {
            const t = this.getMatcher(0);
            t.lastIndex = this.lastIndex + 1, n = t.exec(e)
          }
        return n && (this.regexIndex += n.position + 1,
          this.regexIndex === this.count && this.considerAll()), n
      }
    }
    if (e.compilerExtensions || (e.compilerExtensions = []),
      e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = r(e.classNameAliases || {}),
      function n(s, o)
      {
        const a = s;
        if (s.isCompiled) return a;
        [T, D, F, P].forEach((e => e(s, o))), e.compilerExtensions.forEach((e => e(s, o))),
          s.__beforeBegin = null, [L, B, H].forEach((e => e(s, o))), s.isCompiled = !0;
        let c = null;
        return "object" == typeof s.keywords && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords),
          c = s.keywords.$pattern,
          delete s.keywords.$pattern), c = c || /\w+/, s.keywords && (s.keywords = $(s.keywords, e.case_insensitive)),
          a.keywordPatternRe = t(c, !0),
          o && (s.begin || (s.begin = /\B|\b/), a.beginRe = t(a.begin), s.end || s.endsWithParent || (s.end = /\B|\b/),
            s.end && (a.endRe = t(a.end)),
            a.terminatorEnd = g(a.end) || "", s.endsWithParent && o.terminatorEnd && (a.terminatorEnd += (s.end ? "|" : "") + o.terminatorEnd)),
          s.illegal && (a.illegalRe = t(s.illegal)),
          s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map((e => (e => (e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((t => r(e, {
            variants: null
          }, t)))), e.cachedVariants ? e.cachedVariants : q(e) ? r(e, {
            starts: e.starts ? r(e.starts) : null
          }) : Object.isFrozen(e) ? r(e) : e))("self" === e ? s : e)))), s.contains.forEach((e =>
          {
            n(e, a)
          })), s.starts && n(s.starts, o), a.matcher = (e =>
          {
            const t = new i;
            return e.contains.forEach((e => t.addRule(e.begin, {
              rule: e,
              type: "begin"
            }))), e.terminatorEnd && t.addRule(e.terminatorEnd, {
              type: "end"
            }), e.illegal && t.addRule(e.illegal, {
              type: "illegal"
            }), t
          })(a), a
      }(e)
  }

  function q(e)
  {
    return !!e && (e.endsWithParent || q(e.starts))
  }
  class J extends Error
  {
    constructor(e, t)
    {
      super(e), this.name = "HTMLInjectionError", this.html = t
    }
  }
  const Y = i,
    Q = r,
    ee = Symbol("nomatch");
  var te = (t =>
  {
    const i = Object.create(null),
      r = Object.create(null),
      s = [];
    let o = !0;
    const a = "Could not find the language '{}', did you forget to load/include a language module?",
      c = {
        disableAutodetect: !0,
        name: "Plain text",
        contains: []
      };
    let g = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: l
    };

    function b(e)
    {
      return g.noHighlightRe.test(e)
    }

    function m(e, t, n)
    {
      let i = "",
        r = "";
      "object" == typeof t ? (i = e,
        n = t.ignoreIllegals, r = t.language) : (X("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
          X("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
          r = e, i = t), void 0 === n && (n = !0);
      const s = {
        code: i,
        language: r
      };
      k("before:highlight", s);
      const o = s.result ? s.result : E(s.language, s.code, n);
      return o.code = s.code, k("after:highlight", o), o
    }

    function E(e, t, r, s)
    {
      const c = Object.create(null);

      function l()
      {
        if (!N.keywords) return void M.addText(S);
        let e = 0;
        N.keywordPatternRe.lastIndex = 0;
        let t = N.keywordPatternRe.exec(S),
          n = "";
        for (; t;)
        {
          n += S.substring(e, t.index);
          const r = y.case_insensitive ? t[0].toLowerCase() : t[0],
            s = (i = r, N.keywords[i]);
          if (s)
          {
            const [e, i] = s
              ;
            if (M.addText(n), n = "", c[r] = (c[r] || 0) + 1, c[r] <= 7 && (R += i), e.startsWith("_")) n += t[0];
            else
            {
              const n = y.classNameAliases[e] || e;
              M.addKeyword(t[0], n)
            }
          } else n += t[0];
          e = N.keywordPatternRe.lastIndex, t = N.keywordPatternRe.exec(S)
        }
        var i;
        n += S.substring(e), M.addText(n)
      }

      function d()
      {
        null != N.subLanguage ? (() =>
        {
          if ("" === S) return;
          let e = null;
          if ("string" == typeof N.subLanguage)
          {
            if (!i[N.subLanguage]) return void M.addText(S);
            e = E(N.subLanguage, S, !0, k[N.subLanguage]), k[N.subLanguage] = e._top
          } else e = x(S, N.subLanguage.length ? N.subLanguage : null);
          N.relevance > 0 && (R += e.relevance), M.addSublanguage(e._emitter, e.language)
        })() : l(), S = ""
      }

      function u(e, t)
      {
        let n = 1;
        const i = t.length - 1;
        for (; n <= i;)
        {
          if (!e._emit[n])
          {
            n++;
            continue
          }
          const i = y.classNameAliases[e[n]] || e[n],
            r = t[n];
          i ? M.addKeyword(r, i) : (S = r, l(), S = ""), n++
        }
      }

      function h(e, t)
      {
        return e.scope && "string" == typeof e.scope && M.openNode(y.classNameAliases[e.scope] || e.scope),
          e.beginScope && (e.beginScope._wrap ? (M.addKeyword(S, y.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap),
            S = "") : e.beginScope._multi && (u(e.beginScope, t), S = "")), N = Object.create(e, {
              parent: {
                value: N
              }
            }), N
      }

      function p(e, t, i)
      {
        let r = ((e, t) =>
        {
          const n = e && e.exec(t);
          return n && 0 === n.index
        })(e.endRe, i);
        if (r)
        {
          if (e["on:end"])
          {
            const i = new n(e);
            e["on:end"](t, i), i.isMatchIgnored && (r = !1)
          }
          if (r)
          {
            for (; e.endsParent && e.parent;) e = e.parent;
            return e
          }
        }
        if (e.endsWithParent) return p(e.parent, t, i)
      }

      function f(e)
      {
        return 0 === N.matcher.regexIndex ? (S += e[0], 1) : (I = !0, 0)
      }

      function b(e)
      {
        const n = e[0],
          i = t.substring(e.index),
          r = p(N, e, i);
        if (!r) return ee;
        const s = N;
        N.endScope && N.endScope._wrap ? (d(),
          M.addKeyword(n, N.endScope._wrap)) : N.endScope && N.endScope._multi ? (d(),
            u(N.endScope, e)) : s.skip ? S += n : (s.returnEnd || s.excludeEnd || (S += n),
              d(), s.excludeEnd && (S = n));
        do
        {
          N.scope && M.closeNode(), N.skip || N.subLanguage || (R += N.relevance), N = N.parent
        } while (N !== r.parent);
        return r.starts && h(r.starts, e), s.returnEnd ? 0 : n.length
      }
      let m = {};

      function w(i, s)
      {
        const a = s && s[0];
        if (S += i, null == a) return d(), 0;
        if ("begin" === m.type && "end" === s.type && m.index === s.index && "" === a)
        {
          if (S += t.slice(s.index, s.index + 1), !o)
          {
            const t = Error(`0 width match regex (${e})`);
            throw t.languageName = e, t.badRule = m.rule, t
          }
          return 1
        }
        if (m = s, "begin" === s.type) return (e =>
        {
          const t = e[0],
            i = e.rule,
            r = new n(i),
            s = [i.__beforeBegin, i["on:begin"]];
          for (const n of s)
            if (n && (n(e, r), r.isMatchIgnored)) return f(t);
          return i.skip ? S += t : (i.excludeBegin && (S += t),
            d(), i.returnBegin || i.excludeBegin || (S = t)), h(i, e), i.returnBegin ? 0 : t.length
        })(s);
        if ("illegal" === s.type && !r)
        {
          const e = Error('Illegal lexeme "' + a + '" for mode "' + (N.scope || "<unnamed>") + '"');
          throw e.mode = N, e
        }
        if ("end" === s.type)
        {
          const e = b(s);
          if (e !== ee) return e
        }
        if ("illegal" === s.type && "" === a) return 1;
        if (A > 1e5 && A > 3 * s.index) throw Error("potential infinite loop, way more iterations than matches");
        return S += a, a.length
      }
      const y = O(e);
      if (!y) throw K(a.replace("{}", e)), Error('Unknown language: "' + e + '"');
      const _ = V(y);
      let v = "",
        N = s || _;
      const k = {},
        M = new g.__emitter(g);
      (() =>
      {
        const e = [];
        for (let t = N; t !== y; t = t.parent) t.scope && e.unshift(t.scope);
        e.forEach((e => M.openNode(e)))
      })();
      let S = "",
        R = 0,
        j = 0,
        A = 0,
        I = !1;
      try
      {
        for (N.matcher.considerAll(); ;)
        {
          A++, I ? I = !1 : N.matcher.considerAll(), N.matcher.lastIndex = j;
          const e = N.matcher.exec(t);
          if (!e) break;
          const n = w(t.substring(j, e.index), e);
          j = e.index + n
        }
        return w(t.substring(j)), M.closeAllNodes(), M.finalize(), v = M.toHTML(), {
          language: e,
          value: v,
          relevance: R,
          illegal: !1,
          _emitter: M,
          _top: N
        }
      } catch (n)
      {
        if (n.message && n.message.includes("Illegal")) return {
          language: e,
          value: Y(t),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: n.message,
            index: j,
            context: t.slice(j - 100, j + 100),
            mode: n.mode,
            resultSoFar: v
          },
          _emitter: M
        };
        if (o) return {
          language: e,
          value: Y(t),
          illegal: !1,
          relevance: 0,
          errorRaised: n,
          _emitter: M,
          _top: N
        };
        throw n
      }
    }

    function x(e, t)
    {
      t = t || g.languages || Object.keys(i);
      const n = (e =>
      {
        const t = {
          value: Y(e),
          illegal: !1,
          relevance: 0,
          _top: c,
          _emitter: new g.__emitter(g)
        };
        return t._emitter.addText(e), t
      })(e),
        r = t.filter(O).filter(N).map((t => E(t, e, !1)));
      r.unshift(n);
      const s = r.sort(((e, t) =>
      {
        if (e.relevance !== t.relevance) return t.relevance - e.relevance;
        if (e.language && t.language)
        {
          if (O(e.language).supersetOf === t.language) return 1;
          if (O(t.language).supersetOf === e.language) return -1
        }
        return 0
      })),
        [o, a] = s,
        l = o;
      return l.secondBest = a, l
    }

    function w(e)
    {
      let t = null;
      const n = (e =>
      {
        let t = e.className + " ";
        t += e.parentNode ? e.parentNode.className : "";
        const n = g.languageDetectRe.exec(t);
        if (n)
        {
          const t = O(n[1]);
          return t || (W(a.replace("{}", n[1])),
            W("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
        }
        return t.split(/\s+/).find((e => b(e) || O(e)))
      })(e);
      if (b(n)) return;
      if (k("before:highlightElement", {
        el: e,
        language: n
      }), e.children.length > 0 && (g.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
        console.warn("The element with unescaped HTML:"),
        console.warn(e)), g.throwUnescapedHTML)) throw new J("One of your code blocks includes unescaped HTML.", e.innerHTML);
      t = e;
      const i = t.textContent,
        s = n ? m(i, {
          language: n,
          ignoreIllegals: !0
        }) : x(i);
      e.innerHTML = s.value, ((e, t, n) =>
      {
        const i = t && r[t] || n;
        e.classList.add("hljs"), e.classList.add("language-" + i)
      })(e, n, s.language), e.result = {
        language: s.language,
        re: s.relevance,
        relevance: s.relevance
      }, s.secondBest && (e.secondBest = {
        language: s.secondBest.language,
        relevance: s.secondBest.relevance
      }), k("after:highlightElement", {
        el: e,
        result: s,
        text: i
      })
    }
    let y = !1;

    function _()
    {
      "loading" !== document.readyState ? document.querySelectorAll(g.cssSelector).forEach(w) : y = !0
    }

    function O(e)
    {
      return e = (e || "").toLowerCase(), i[e] || i[r[e]]
    }

    function v(e, {
      languageName: t
    })
    {
      "string" == typeof e && (e = [e]), e.forEach((e =>
      {
        r[e.toLowerCase()] = t
      }))
    }

    function N(e)
    {
      const t = O(e);
      return t && !t.disableAutodetect
    }

    function k(e, t)
    {
      const n = e;
      s.forEach((e =>
      {
        e[n] && e[n](t)
      }))
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", (() =>
    {
      y && _()
    }), !1), Object.assign(t, {
      highlight: m,
      highlightAuto: x,
      highlightAll: _,
      highlightElement: w,
      highlightBlock: e => (X("10.7.0", "highlightBlock will be removed entirely in v12.0"),
        X("10.7.0", "Please use highlightElement now."), w(e)),
      configure: e =>
      {
        g = Q(g, e)
      },
      initHighlighting: () =>
      {
        _(), X("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
      },
      initHighlightingOnLoad: () =>
      {
        _(), X("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
      },
      registerLanguage: (e, n) =>
      {
        let r = null;
        try
        {
          r = n(t)
        } catch (t)
        {
          if (K("Language definition for '{}' could not be registered.".replace("{}", e)),
            !o) throw t;
          K(t), r = c
        }
        r.name || (r.name = e), i[e] = r, r.rawDefinition = n.bind(null, t), r.aliases && v(r.aliases, {
          languageName: e
        })
      },
      unregisterLanguage: e =>
      {
        delete i[e];
        for (const t of Object.keys(r)) r[t] === e && delete r[t]
      },
      listLanguages: () => Object.keys(i),
      getLanguage: O,
      registerAliases: v,
      autoDetection: N,
      inherit: Q,
      addPlugin: e =>
      {
        (e =>
        {
          e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = t =>
          {
            e["before:highlightBlock"](Object.assign({
              block: t.el
            }, t))
          }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = t =>
          {
            e["after:highlightBlock"](Object.assign({
              block: t.el
            }, t))
          })
        })(e), s.push(e)
      }
    }), t.debugMode = () =>
    {
      o = !1
    }, t.safeMode = () =>
    {
      o = !0
    }, t.versionString = "11.7.0", t.regex = {
      concat: p,
      lookahead: d,
      either: f,
      optional: h,
      anyNumberOfTimes: u
    };
    for (const t in A) "object" == typeof A[t] && e.exports(A[t]);
    return Object.assign(t, A), t
  })({});
  return te
}();
"object" == typeof exports && "undefined" != typeof module && (module.exports = hljs); /*! `bash` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const s = e.regex,
        t = {},
        n = {
          begin: /\$\{/,
          end: /\}/,
          contains: ["self", {
            begin: /:-/,
            contains: [t]
          }]
        };
      Object.assign(t, {
        className: "variable",
        variants: [{
          begin: s.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
        }, n]
      });
      const a = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [e.BACKSLASH_ESCAPE]
      },
        i = {
          begin: /<<-?\s*(?=\w+)/,
          starts: {
            contains: [e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string"
            })]
          }
        },
        c = {
          className: "string",
          begin: /"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, t, a]
        };
      a.contains.push(c);
      const o = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [{
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        }, e.NUMBER_MODE, t]
      },
        r = e.SHEBANG({
          binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
          relevance: 10
        }),
        l = {
          className: "function",
          begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
          returnBegin: !0,
          contains: [e.inherit(e.TITLE_MODE, {
            begin: /\w[\w\d_]*/
          })],
          relevance: 0
        };
      return {
        name: "Bash",
        aliases: ["sh"],
        keywords: {
          $pattern: /\b[a-z][a-z0-9._-]+\b/,
          keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
          literal: ["true", "false"],
          built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
        },
        contains: [r, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, i, {
          match: /(\/[a-z._-]+)+/
        }, c, {
            className: "",
            begin: /\\"/
          }, {
            className: "string",
            begin: /'/,
            end: /'/
          }, t]
      }
    }
  })();
  hljs.registerLanguage("bash", e)
})(); /*! `plaintext` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var t = (() =>
  {
    "use strict";
    return t => ({
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0
    })
  })();
  hljs.registerLanguage("plaintext", t)
})(); /*! `ruby` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const n = e.regex,
        a = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
        s = n.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
        i = n.concat(s, /(::\w+)*/),
        t = {
          "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
          "variable.language": ["self", "super"],
          keyword: ["alias", "and", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield", "include", "extend", "prepend", "public", "private", "protected", "raise", "throw"],
          built_in: ["proc", "lambda", "attr_accessor", "attr_reader", "attr_writer", "define_method", "private_constant", "module_function"],
          literal: ["true", "false", "nil"]
        },
        c = {
          className: "doctag",
          begin: "@[A-Za-z]+"
        },
        r = {
          begin: "#<",
          end: ">"
        },
        b = [e.COMMENT("#", "$", {
          contains: [c]
        }), e.COMMENT("^=begin", "^=end", {
          contains: [c],
          relevance: 10
        }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)],
        l = {
          className: "subst",
          begin: /#\{/,
          end: /\}/,
          keywords: t
        },
        d = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE, l],
          variants: [{
            begin: /'/,
            end: /'/
          }, {
            begin: /"/,
            end: /"/
          }, {
            begin: /`/,
            end: /`/
          }, {
            begin: /%[qQwWx]?\(/,
            end: /\)/
          }, {
            begin: /%[qQwWx]?\[/,
            end: /\]/
          }, {
            begin: /%[qQwWx]?\{/,
            end: /\}/
          }, {
            begin: /%[qQwWx]?</,
            end: />/
          }, {
            begin: /%[qQwWx]?\//,
            end: /\//
          }, {
            begin: /%[qQwWx]?%/,
            end: /%/
          }, {
            begin: /%[qQwWx]?-/,
            end: /-/
          }, {
            begin: /%[qQwWx]?\|/,
            end: /\|/
          }, {
            begin: /\B\?(\\\d{1,3})/
          }, {
            begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
          }, {
            begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
          }, {
            begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
          }, {
            begin: /\B\?\\(c|C-)[\x20-\x7e]/
          }, {
            begin: /\B\?\\?\S/
          }, {
            begin: n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
            contains: [e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [e.BACKSLASH_ESCAPE, l]
            })]
          }]
        },
        o = "[0-9](_?[0-9])*",
        g = {
          className: "number",
          relevance: 0,
          variants: [{
            begin: `\\b([1-9](_?[0-9])*|0)(\\.(${o}))?([eE][+-]?(${o})|r)?i?\\b`
          }, {
            begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
          }, {
            begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
          }, {
            begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
          }, {
            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
          }, {
            begin: "\\b0(_?[0-7])+r?i?\\b"
          }]
        },
        _ = {
          variants: [{
            match: /\(\)/
          }, {
            className: "params",
            begin: /\(/,
            end: /(?=\))/,
            excludeBegin: !0,
            endsParent: !0,
            keywords: t
          }]
        },
        u = [d, {
          variants: [{
            match: [/class\s+/, i, /\s+<\s+/, i]
          }, {
            match: [/\b(class|module)\s+/, i]
          }],
          scope: {
            2: "title.class",
            4: "title.class.inherited"
          },
          keywords: t
        }, {
            match: [/(include|extend)\s+/, i],
            scope: {
              2: "title.class"
            },
            keywords: t
          }, {
            relevance: 0,
            match: [i, /\.new[. (]/],
            scope: {
              1: "title.class"
            }
          }, {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: "variable.constant"
          }, {
            relevance: 0,
            match: s,
            scope: "title.class"
          }, {
            match: [/def/, /\s+/, a],
            scope: {
              1: "keyword",
              3: "title.function"
            },
            contains: [_]
          }, {
            begin: e.IDENT_RE + "::"
          }, {
            className: "symbol",
            begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
            relevance: 0
          }, {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [d, {
              begin: a
            }],
            relevance: 0
          }, g, {
            className: "variable",
            begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
          }, {
            className: "params",
            begin: /\|/,
            end: /\|/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: t
          }, {
            begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [{
              className: "regexp",
              contains: [e.BACKSLASH_ESCAPE, l],
              illegal: /\n/,
              variants: [{
                begin: "/",
                end: "/[a-z]*"
              }, {
                begin: /%r\{/,
                end: /\}[a-z]*/
              }, {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              }, {
                begin: "%r!",
                end: "![a-z]*"
              }, {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }]
            }].concat(r, b),
            relevance: 0
          }].concat(r, b);
      l.contains = u, _.contains = u;
      const m = [{
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: u
        }
      }, {
        className: "meta.prompt",
        begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
        starts: {
          end: "$",
          keywords: t,
          contains: u
        }
      }];
      return b.unshift(r), {
        name: "Ruby",
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        keywords: t,
        illegal: /\/\*/,
        contains: [e.SHEBANG({
          binary: "ruby"
        })].concat(m).concat(b).concat(u)
      }
    }
  })();
  hljs.registerLanguage("ruby", e)
})(); /*! `yaml` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const n = "true false yes no null",
        a = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        s = {
          className: "string",
          relevance: 0,
          variants: [{
            begin: /'/,
            end: /'/
          }, {
            begin: /"/,
            end: /"/
          }, {
            begin: /\S+/
          }],
          contains: [e.BACKSLASH_ESCAPE, {
            className: "template-variable",
            variants: [{
              begin: /\{\{/,
              end: /\}\}/
            }, {
              begin: /%\{/,
              end: /\}/
            }]
          }]
        },
        i = e.inherit(s, {
          variants: [{
            begin: /'/,
            end: /'/
          }, {
            begin: /"/,
            end: /"/
          }, {
            begin: /[^\s,{}[\]]+/
          }]
        }),
        l = {
          end: ",",
          endsWithParent: !0,
          excludeEnd: !0,
          keywords: n,
          relevance: 0
        },
        t = {
          begin: /\{/,
          end: /\}/,
          contains: [l],
          illegal: "\\n",
          relevance: 0
        },
        g = {
          begin: "\\[",
          end: "\\]",
          contains: [l],
          illegal: "\\n",
          relevance: 0
        },
        b = [{
          className: "attr",
          variants: [{
            begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
          }, {
            begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
          }, {
            begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
          }]
        }, {
          className: "meta",
          begin: "^---\\s*$",
          relevance: 10
        }, {
          className: "string",
          begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
        }, {
          begin: "<%[%=-]?",
          end: "[%-]?%>",
          subLanguage: "ruby",
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        }, {
          className: "type",
          begin: "!\\w+!" + a
        }, {
          className: "type",
          begin: "!<" + a + ">"
        }, {
          className: "type",
          begin: "!" + a
        }, {
          className: "type",
          begin: "!!" + a
        }, {
          className: "meta",
          begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
        }, {
          className: "meta",
          begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
        }, {
          className: "bullet",
          begin: "-(?=[ ]|$)",
          relevance: 0
        }, e.HASH_COMMENT_MODE, {
          beginKeywords: n,
          keywords: {
            literal: n
          }
        }, {
          className: "number",
          begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
        }, {
          className: "number",
          begin: e.C_NUMBER_RE + "\\b",
          relevance: 0
        }, t, g, s],
        r = [...b];
      return r.pop(), r.push(i), l.contains = r, {
        name: "YAML",
        case_insensitive: !0,
        aliases: ["yml"],
        contains: b
      }
    }
  })();
  hljs.registerLanguage("yaml", e)
})(); /*! `ini` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const n = e.regex,
        a = {
          className: "number",
          relevance: 0,
          variants: [{
            begin: /([+-]+)?[\d]+_[\d_]+/
          }, {
            begin: e.NUMBER_RE
          }]
        },
        s = e.COMMENT();
      s.variants = [{
        begin: /;/,
        end: /$/
      }, {
        begin: /#/,
        end: /$/
      }];
      const i = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d"][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
        t = {
          className: "literal",
          begin: /\bon|off|true|false|yes|no\b/
        },
        r = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [{
            begin: "'''",
            end: "'''",
            relevance: 10
          }, {
            begin: '"""',
            end: '"""',
            relevance: 10
          }, {
            begin: '"',
            end: '"'
          }, {
            begin: "'",
            end: "'"
          }]
        },
        l = {
          begin: /\[/,
          end: /\]/,
          contains: [s, t, i, r, a, "self"],
          relevance: 0
        },
        c = n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
      return {
        name: "TOML, also INI",
        aliases: ["toml"],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [s, {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        }, {
            begin: n.concat(c, "(\\s*\\.\\s*", c, ")*", n.lookahead(/\s*=\s*[^#\s]/)),
            className: "attr",
            starts: {
              end: /$/,
              contains: [s, l, t, i, r, a]
            }
          }]
      }
    }
  })();
  hljs.registerLanguage("ini", e)
})(); /*! `csharp` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const n = {
        keyword: ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]),
        built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
        literal: ["default", "false", "null", "true"]
      },
        a = e.inherit(e.TITLE_MODE, {
          begin: "[a-zA-Z](\\.?\\w)*"
        }),
        i = {
          className: "number",
          variants: [{
            begin: "\\b(0b[01']+)"
          }, {
            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
          }, {
            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
          }],
          relevance: 0
        },
        s = {
          className: "string",
          begin: '@"',
          end: '"',
          contains: [{
            begin: '""'
          }]
        },
        t = e.inherit(s, {
          illegal: /\n/
        }),
        r = {
          className: "subst",
          begin: /\{/,
          end: /\}/,
          keywords: n
        },
        l = e.inherit(r, {
          illegal: /\n/
        }),
        c = {
          className: "string",
          begin: /\$"/,
          end: '"',
          illegal: /\n/,
          contains: [{
            begin: /\{\{/
          }, {
            begin: /\}\}/
          }, e.BACKSLASH_ESCAPE, l]
        },
        o = {
          className: "string",
          begin: /\$@"/,
          end: '"',
          contains: [{
            begin: /\{\{/
          }, {
            begin: /\}\}/
          }, {
            begin: '""'
          }, r]
        },
        d = e.inherit(o, {
          illegal: /\n/,
          contains: [{
            begin: /\{\{/
          }, {
            begin: /\}\}/
          }, {
            begin: '""'
          }, l]
        });
      r.contains = [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE],
        l.contains = [d, c, t, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.inherit(e.C_BLOCK_COMMENT_MODE, {
          illegal: /\n/
        })];
      const g = {
        variants: [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
      },
        E = {
          begin: "<",
          end: ">",
          contains: [{
            beginKeywords: "in out"
          }, a]
        },
        _ = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?",
        b = {
          begin: "@" + e.IDENT_RE,
          relevance: 0
        };
      return {
        name: "C#",
        aliases: ["cs", "c#"],
        keywords: n,
        illegal: /::/,
        contains: [e.COMMENT("///", "$", {
          returnBegin: !0,
          contains: [{
            className: "doctag",
            variants: [{
              begin: "///",
              relevance: 0
            }, {
              begin: "\x3c!--|--\x3e"
            }, {
              begin: "</?",
              end: ">"
            }]
          }]
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: {
            keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
          }
        }, g, i, {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [{
            beginKeywords: "where class"
          }, a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [{
            className: "string",
            begin: /"/,
            end: /"/
          }]
        }, {
          beginKeywords: "new return throw await else",
          relevance: 0
        }, {
          className: "function",
          begin: "(" + _ + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: n,
          contains: [{
            beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
            relevance: 0
          }, {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [e.TITLE_MODE, E],
            relevance: 0
          }, {
            match: /\(\)/
          }, {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: n,
            relevance: 0,
            contains: [g, i, e.C_BLOCK_COMMENT_MODE]
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, b]
      }
    }
  })();
  hljs.registerLanguage("csharp", e)
})(); /*! `xml` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const a = e.regex,
        n = a.concat(/[\p{L}_]/u, a.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
        s = {
          className: "symbol",
          begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
        },
        t = {
          begin: /\s/,
          contains: [{
            className: "keyword",
            begin: /#?[a-z_][a-z1-9_-]+/,
            illegal: /\n/
          }]
        },
        i = e.inherit(t, {
          begin: /\(/,
          end: /\)/
        }),
        c = e.inherit(e.APOS_STRING_MODE, {
          className: "string"
        }),
        l = e.inherit(e.QUOTE_STRING_MODE, {
          className: "string"
        }),
        r = {
          endsWithParent: !0,
          illegal: /</,
          relevance: 0,
          contains: [{
            className: "attr",
            begin: /[\p{L}0-9._:-]+/u,
            relevance: 0
          }, {
            begin: /=\s*/,
            relevance: 0,
            contains: [{
              className: "string",
              endsParent: !0,
              variants: [{
                begin: /"/,
                end: /"/,
                contains: [s]
              }, {
                begin: /'/,
                end: /'/,
                contains: [s]
              }, {
                begin: /[^\s"'=<>`]+/
              }]
            }]
          }]
        };
      return {
        name: "HTML, XML",
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
        case_insensitive: !0,
        unicodeRegex: !0,
        contains: [{
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [t, l, c, i, {
            begin: /\[/,
            end: /\]/,
            contains: [{
              className: "meta",
              begin: /<![a-z]/,
              end: />/,
              contains: [t, i, l, c]
            }]
          }]
        }, e.COMMENT(/<!--/, /-->/, {
          relevance: 10
        }), {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        }, s, {
          className: "meta",
          end: /\?>/,
          variants: [{
            begin: /<\?xml/,
            relevance: 10,
            contains: [l]
          }, {
            begin: /<\?[a-z][a-z0-9]+/
          }]
        }, {
          className: "tag",
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: {
            name: "style"
          },
          contains: [r],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: ["css", "xml"]
          }
        }, {
          className: "tag",
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: {
            name: "script"
          },
          contains: [r],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: ["javascript", "handlebars", "xml"]
          }
        }, {
          className: "tag",
          begin: /<>|<\/>/
        }, {
          className: "tag",
          begin: a.concat(/</, a.lookahead(a.concat(n, a.either(/\/>/, />/, /\s/)))),
          end: /\/?>/,
          contains: [{
            className: "name",
            begin: n,
            relevance: 0,
            starts: r
          }]
        }, {
          className: "tag",
          begin: a.concat(/<\//, a.lookahead(a.concat(n, />/))),
          contains: [{
            className: "name",
            begin: n,
            relevance: 0
          }, {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }]
        }]
      }
    }
  })();
  hljs.registerLanguage("xml", e)
})(); /*! `markdown` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const n = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      },
        a = {
          variants: [{
            begin: /\[.+?\]\[.*?\]/,
            relevance: 0
          }, {
            begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
            relevance: 2
          }, {
            begin: e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
            relevance: 2
          }, {
            begin: /\[.+?\]\([./?&#].*?\)/,
            relevance: 1
          }, {
            begin: /\[.*?\]\(.*?\)/,
            relevance: 0
          }],
          returnBegin: !0,
          contains: [{
            match: /\[(?=\])/
          }, {
            className: "string",
            relevance: 0,
            begin: "\\[",
            end: "\\]",
            excludeBegin: !0,
            returnEnd: !0
          }, {
            className: "link",
            relevance: 0,
            begin: "\\]\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0
          }, {
            className: "symbol",
            relevance: 0,
            begin: "\\]\\[",
            end: "\\]",
            excludeBegin: !0,
            excludeEnd: !0
          }]
        },
        i = {
          className: "strong",
          contains: [],
          variants: [{
            begin: /_{2}(?!\s)/,
            end: /_{2}/
          }, {
            begin: /\*{2}(?!\s)/,
            end: /\*{2}/
          }]
        },
        s = {
          className: "emphasis",
          contains: [],
          variants: [{
            begin: /\*(?![*\s])/,
            end: /\*/
          }, {
            begin: /_(?![_\s])/,
            end: /_/,
            relevance: 0
          }]
        },
        c = e.inherit(i, {
          contains: []
        }),
        t = e.inherit(s, {
          contains: []
        });
      i.contains.push(t), s.contains.push(c);
      let g = [n, a];
      return [i, s, c, t].forEach((e =>
      {
        e.contains = e.contains.concat(g)
      })), g = g.concat(i, s), {
        name: "Markdown",
        aliases: ["md", "mkdown", "mkd"],
        contains: [{
          className: "section",
          variants: [{
            begin: "^#{1,6}",
            end: "$",
            contains: g
          }, {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [{
              begin: "^[=-]*$"
            }, {
              begin: "^",
              end: "\\n",
              contains: g
            }]
          }]
        }, n, {
          className: "bullet",
          begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
          end: "\\s+",
          excludeEnd: !0
        }, i, s, {
          className: "quote",
          begin: "^>\\s+",
          contains: g,
          end: "$"
        }, {
          className: "code",
          variants: [{
            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
          }, {
            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
          }, {
            begin: "```",
            end: "```+[ ]*$"
          }, {
            begin: "~~~",
            end: "~~~+[ ]*$"
          }, {
            begin: "`.+?`"
          }, {
            begin: "(?=^( {4}|\\t))",
            contains: [{
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }],
            relevance: 0
          }]
        }, {
          begin: "^[-\\*]{3,}",
          end: "$"
        }, a, {
          begin: /^\[[^\n]+\]:/,
          returnBegin: !0,
          contains: [{
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0
          }, {
            className: "link",
            begin: /:\s*/,
            end: /$/,
            excludeBegin: !0
          }]
        }]
      }
    }
  })();
  hljs.registerLanguage("markdown", e)
})(); /*! `shell` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var s = (() =>
  {
    "use strict";
    return s => ({
      name: "Shell Session",
      aliases: ["console", "shellsession"],
      contains: [{
        className: "meta.prompt",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }]
    })
  })();
  hljs.registerLanguage("shell", s)
})();

/*! `csharp` grammar compiled for Highlight.js 11.7.0 */
(() =>
{
  var e = (() =>
  {
    "use strict";
    return e =>
    {
      const n = {
        keyword: (["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"])),
        built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
        literal: ["default", "false", "null", "true"],
        type: Classes
      },
        a = e.inherit(e.TITLE_MODE, {
          begin: "[a-zA-Z](\\.?\\w)*"
        }),
        i = {
          className: "number",
          variants: [{
            begin: "\\b(0b[01']+)"
          }, {
            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
          }, {
            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
          }],
          relevance: 0
        },
        s = {
          className: "string",
          begin: '@"',
          end: '"',
          contains: [{
            begin: '""'
          }]
        },
        t = e.inherit(s, {
          illegal: /\n/
        }),
        r = {
          className: "subst",
          begin: /\{/,
          end: /\}/,
          keywords: n
        },
        l = e.inherit(r, {
          illegal: /\n/
        }),
        c = {
          className: "string",
          begin: /\$"/,
          end: '"',
          illegal: /\n/,
          contains: [{
            begin: /\{\{/
          }, {
            begin: /\}\}/
          }, e.BACKSLASH_ESCAPE, l]
        },
        o = {
          className: "string",
          begin: /\$@"/,
          end: '"',
          contains: [{
            begin: /\{\{/
          }, {
            begin: /\}\}/
          }, {
            begin: '""'
          }, r]
        },
        d = e.inherit(o, {
          illegal: /\n/,
          contains: [{
            begin: /\{\{/
          }, {
            begin: /\}\}/
          }, {
            begin: '""'
          }, l]
        });
      r.contains = [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE],
        l.contains = [d, c, t, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.inherit(e.C_BLOCK_COMMENT_MODE, {
          illegal: /\n/
        })];
      const g = {
        variants: [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
      },
        E = {
          begin: "<",
          end: ">",
          contains: [{
            beginKeywords: "in out"
          }, a]
        },
        _ = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?",
        b = {
          begin: "@" + e.IDENT_RE,
          relevance: 0
        };
      return {
        name: "C#",
        aliases: ["cs", "c#"],
        keywords: n,
        illegal: /::/,
        contains: [e.COMMENT("///", "$", {
          returnBegin: !0,
          contains: [{
            className: "doctag",
            variants: [{
              begin: "///",
              relevance: 0
            }, {
              begin: "\x3c!--|--\x3e"
            }, {
              begin: "</?",
              end: ">"
            }]
          }]
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: {
            keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
          }
        }, g, i, {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [{
            beginKeywords: "where class"
          }, a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [{
            className: "string",
            begin: /"/,
            end: /"/
          }]
        }, {
          beginKeywords: "new return throw await else",
          relevance: 0
        }, {
          className: "function",
          begin: "(" + _ + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: n,
          contains: [{
            beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
            relevance: 0
          }, {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [e.TITLE_MODE, E],
            relevance: 0
          }, {
            match: /\(\)/
          }, {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: n,
            relevance: 0,
            contains: [g, i, e.C_BLOCK_COMMENT_MODE]
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, b]
      }
    }
  })();
  hljs.registerLanguage("csharp", e)
})();
