!function() {
    var e, n, t, r = {
        3832: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "claim"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "code"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "claim"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "code"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "code"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "item"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "icon"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "payload"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "lm"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            function t(e, n) {
                if ("FragmentSpread" === e.kind)
                    n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var r = e.type;
                    "NamedType" === r.kind && n.add(r.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                }
                )),
                e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                }
                )),
                e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }
                ))
            }
            n.loc.source = {
                body: "mutation claim($code: String!) {\n  claim(code: $code) {\n    type\n    item { name icon }\n    payload\n    lm { name }\n  }\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            function i(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var r = e.definitions[t];
                    if (r.name && r.name.value == n)
                        return r
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n),
                    r[e.name.value] = n
                }
            }
            )),
            e.exports = n,
            e.exports.claim = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [i(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var a = r.claim || new Set
                  , o = new Set
                  , c = new Set;
                for (a.forEach((function(e) {
                    c.add(e)
                }
                )); c.size > 0; ) {
                    var u = c;
                    c = new Set,
                    u.forEach((function(e) {
                        o.has(e) || (o.add(e),
                        (r[e] || new Set).forEach((function(e) {
                            c.add(e)
                        }
                        )))
                    }
                    ))
                }
                return o.forEach((function(n) {
                    var r = i(e, n);
                    r && t.definitions.push(r)
                }
                )),
                t
            }(n, "claim")
        },
        3192: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "me"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "me"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tc"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 47
                }
            };
            function t(e, n) {
                if ("FragmentSpread" === e.kind)
                    n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var r = e.type;
                    "NamedType" === r.kind && n.add(r.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                }
                )),
                e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                }
                )),
                e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }
                ))
            }
            n.loc.source = {
                body: "query me {\n  me {\n    id\n    name\n    tc\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            function i(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var r = e.definitions[t];
                    if (r.name && r.name.value == n)
                        return r
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n),
                    r[e.name.value] = n
                }
            }
            )),
            e.exports = n,
            e.exports.me = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [i(e, "me")]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var a = r.me || new Set
                  , o = new Set
                  , c = new Set;
                for (a.forEach((function(e) {
                    c.add(e)
                }
                )); c.size > 0; ) {
                    var u = c;
                    c = new Set,
                    u.forEach((function(e) {
                        o.has(e) || (o.add(e),
                        (r[e] || new Set).forEach((function(e) {
                            c.add(e)
                        }
                        )))
                    }
                    ))
                }
                return o.forEach((function(n) {
                    var r = i(e, n);
                    r && t.definitions.push(r)
                }
                )),
                t
            }(n)
        },
        3411: function(e, n, t) {
            "use strict";
            t.r(n)
        },
        1261: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var r = t(5893);
            t(3411);
            var i = u(t(7294))
              , a = o(t(8251));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function c(e) {
                if ("function" != typeof WeakMap)
                    return null;
                var n = new WeakMap
                  , t = new WeakMap;
                return (c = function(e) {
                    return e ? t : n
                }
                )(e)
            }
            function u(e, n) {
                if (!n && e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = c(n);
                if (t && t.has(e))
                    return t.get(e);
                var r = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    }
                return r.default = e,
                t && t.set(e, r),
                r
            }
            var l = function() {
                var e = "UA-165862936-10"
                  , n = document.createElement("script");
                function t() {
                    dataLayer.push(arguments)
                }
                n.async = !0,
                n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(e),
                window.dataLayer = window.dataLayer || [],
                t("js", new Date),
                t("config", e),
                document.head.appendChild(n)
            }
              , s = function() {
                return (0,
                i.useEffect)(l, []),
                (0,
                r.jsx)(a.default, {})
            }
        },
        8251: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return k
                }
            });
            var r = t(5893)
              , i = h(t(7294))
              , a = t(7417)
              , o = f(t(3192))
              , c = f(t(3832));
            function u(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++)
                    r[t] = e[t];
                return r
            }
            function l(e, n, t, r, i, a, o) {
                try {
                    var c = e[a](o)
                      , u = c.value
                } catch (e) {
                    return void t(e)
                }
                c.done ? n(u) : Promise.resolve(u).then(r, i)
            }
            function s(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t,
                e
            }
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function d(e) {
                if ("function" != typeof WeakMap)
                    return null;
                var n = new WeakMap
                  , t = new WeakMap;
                return (d = function(e) {
                    return e ? t : n
                }
                )(e)
            }
            function h(e, n) {
                if (!n && e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = d(n);
                if (t && t.has(e))
                    return t.get(e);
                var r = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    }
                return r.default = e,
                t && t.set(e, r),
                r
            }
            function m(e, n) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [], o = !0, c = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done) && (a.push(r.value),
                            !n || a.length !== n); o = !0)
                                ;
                        } catch (e) {
                            c = !0,
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (c)
                                    throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return u(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? u(e, n) : void 0
                    }
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e, n, t, r) {
                return Swal.fire(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {}
                          , r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }
                        )))),
                        r.forEach((function(n) {
                            s(e, n, t[n])
                        }
                        ))
                    }
                    return e
                }({
                    title: e,
                    html: n,
                    icon: t
                }, r))
            }
              , v = /^[0-9A-Z]{1,16}(\_[A-Z0-9]{1,16})?$/
              , b = !localStorage.getItem("access_token")
              , g = function(e) {
                var n, t, r, i;
                console.error(e);
                var a = null !== (i = null == e || null === (n = e.graphQLErrors) || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t.message) && void 0 !== i ? i : null == e ? void 0 : e.message;
                switch (a) {
                case "Unauthorized":
                    r = '\nVui lòng đăng nhập\n<div style="margin-top: 1em;">\n  <a href="/connect/garena?platform=3"><img style="width: 2em;" src="images/icon-fb.png" /></a>\n  &nbsp;\n  <a href="/connect/garena"><img style="width: 2em;" src="images/icon-gr.png" /></a>\n</div>\n';
                    break;
                case "DontHaveTcid":
                case "PlayerNotFound":
                case "DontHaveTencentId":
                    r = "Tài khoản này chưa liên kết với Liên Quân Mobile. Vui lòng tải game và đăng nhập lại";
                    break;
                case "CodeEmpty":
                    r = "Vui lòng nhập Giftcode";
                    break;
                case "CodeInvalid":
                    r = "Giftcode không chính xác";
                    break;
                case "CodeClaimed":
                    r = "Bạn đã nhận Giftcode này rồi";
                    break;
                case "CodeEnded":
                    r = "Đã hết thời gian để nhận giftcode này";
                    break;
                case "CodeNotStart":
                    r = "Bạn chưa thể nhận giftcode này";
                    break;
                case "CodeLimited":
                    r = "Giftcode hiện tại đã hết lượt nhận quà";
                    break;
                case "Processing":
                    r = "Yêu cầu của bạn đang được thực hiện. Vui lòng đợi trong giây lát";
                    break;
                default:
                    r = "Lỗi không xác định<br>[".concat(a, "]")
                }
                return p("Thông báo", r, "info")
            }
              , y = function(e) {
                var n, t, o = e.user, u = m((0,
                i.useState)(""), 2), s = u[0], f = u[1], d = m((0,
                i.useState)(!1), 2), h = d[0], b = d[1], y = m((0,
                a.useMutation)(c.default), 1)[0], k = (0,
                i.useCallback)((function(e) {
                    var n;
                    f(null === (n = e.target.value) || void 0 === n ? void 0 : n.toUpperCase())
                }
                ), [f]), w = (0,
                i.useCallback)((n = function(e) {
                    var n, t, r, i, a, c, u, l, f, d;
                    return function(e, n) {
                        var t, r, i, a, o = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0])
                                    throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        a;
                        function c(a) {
                            return function(c) {
                                return function(a) {
                                    if (t)
                                        throw new TypeError("Generator is already executing.");
                                    for (; o; )
                                        try {
                                            if (t = 1,
                                            r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, a[1])).done)
                                                return i;
                                            switch (r = 0,
                                            i && (a = [2 & a[0], i.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                i = a;
                                                break;
                                            case 4:
                                                return o.label++,
                                                {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++,
                                                r = a[1],
                                                a = [0];
                                                continue;
                                            case 7:
                                                a = o.ops.pop(),
                                                o.trys.pop();
                                                continue;
                                            default:
                                                if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                    o.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && o.label < i[1]) {
                                                    o.label = i[1],
                                                    i = a;
                                                    break
                                                }
                                                if (i && o.label < i[2]) {
                                                    o.label = i[2],
                                                    o.ops.push(a);
                                                    break
                                                }
                                                i[2] && o.ops.pop(),
                                                o.trys.pop();
                                                continue
                                            }
                                            a = n.call(e, o)
                                        } catch (e) {
                                            a = [6, e],
                                            r = 0
                                        } finally {
                                            t = i = 0
                                        }
                                    if (5 & a[0])
                                        throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0
                                    }
                                }([a, c])
                            }
                        }
                    }(this, (function(m) {
                        switch (m.label) {
                        case 0:
                            if (e.preventDefault(),
                            h)
                                return [2, !1];
                            m.label = 1;
                        case 1:
                            if (m.trys.push([1, 3, 4, 5]),
                            b(!0),
                            !o)
                                throw Error("Unauthorized");
                            if (!o.tc)
                                throw Error("DontHaveTencentId");
                            if (!(null == s ? void 0 : s.length))
                                throw Error("CodeEmpty");
                            if (!v.test(s))
                                throw Error("CodeInvalid");
                            return [4, y(((l = {}).variables = {
                                code: s
                            },
                            l))];
                        case 2:
                            switch (n = m.sent(),
                            t = n.data,
                            r = t.claim,
                            i = r.type,
                            a = r.item,
                            c = r.payload,
                            u = r.lm,
                            i) {
                            case 0:
                                p("Thông báo", (f = c).msg, 0 == f.code ? "success" : "error");
                                break;
                            case 1:
                                p("Chúc mừng", u ? '<img style="width: 8em; margin-bottom: 1em;" src="'.concat(a.icon, '"/><br/>Quà giới hạn <b>').concat(u.name, "</b> đã được nhận hết, bạn nhận được quà dự bị <b>").concat(a.name, "</b>") : '<img style="width: 8em; margin-bottom: 1em;" src="'.concat(a.icon, '"/><br/>Chúc mừng bạn nhận được <b>').concat(a.name, "</b>"), "")
                            }
                            return [3, 5];
                        case 3:
                            return d = m.sent(),
                            g(d),
                            [3, 5];
                        case 4:
                            return b(!1),
                            [7];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ,
                t = function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(r, i) {
                        var a = n.apply(e, t);
                        function o(e) {
                            l(a, r, i, o, c, "next", e)
                        }
                        function c(e) {
                            l(a, r, i, o, c, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                ,
                function(e) {
                    return t.apply(this, arguments)
                }
                ), [h, o, s]);
                return (0,
                r.jsxs)("form", {
                    onSubmit: w,
                    children: [(0,
                    r.jsx)("div", {
                        className: "mw-100",
                        children: (0,
                        r.jsx)("input", {
                            name: "code",
                            placeholder: "Vui lòng nhập code",
                            value: s,
                            onChange: k
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "btn-section",
                        children: (0,
                        r.jsx)("div", {
                            className: "btn",
                            onClick: w,
                            children: (0,
                            r.jsx)("img", {
                                src: "images/btn01.png",
                                alt: ""
                            })
                        })
                    })]
                })
            }
              , k = function() {
                var e = (0,
                a.useQuery)(o.default)
                  , n = e.data
                  , t = (void 0 === n ? {} : n).me
                  , c = e.loading
                  , u = e.error;
                return (0,
                i.useEffect)((function() {
                    c || (u ? g(u) : t.tc || g(Error("DontHaveTencentId")))
                }
                ), [c]),
                (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("header", {
                        children: (0,
                        r.jsx)("img", {
                            src: "https://lienquan.garena.vn/giftcode/pr.png",
                            alt: ""
                        })
                    }), (0,
                    r.jsxs)("main", {
                        children: [t && (0,
                        r.jsxs)("div", {
                            className: "user",
                            children: ["Xin chào, ", (0,
                            r.jsx)("span", {
                                className: "user-name",
                                children: t.name
                            }), ". ", b && (0,
                            r.jsx)("a", {
                                className: "logout",
                                href: "/connect/garena/logout",
                                children: "Đăng xuất"
                            })]
                        }), (0,
                        r.jsx)(y, {
                            user: t
                        }), (0,
                        r.jsx)("div", {
                            className: "noted",
                            children: 'Khi số lượng người cùng quy đổi quá nhiều, bạn có thể gặp lỗi "Hệ thống đang bận". Vui lòng chờ một chút rồi thử lại nhé!'
                        }), (0,
                        r.jsx)("div", {
                            className: "line"
                        })]
                    }), (0,
                    r.jsxs)("footer", {
                        children: [(0,
                        r.jsx)("p", {
                            children: (0,
                            r.jsx)("img", {
                                src: "https://lienquan.garena.vn/asset/images/logo-footer.png",
                                alt: ""
                            })
                        }), (0,
                        r.jsxs)("p", {
                            className: "address",
                            children: ["CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ THỂ THAO ĐIỆN TỬ VIỆT NAM", (0,
                            r.jsx)("br", {}), "Giấy CNĐKKD số 0105301438, cấp lần đầu ngày 10/05/2011", (0,
                            r.jsx)("br", {}), "Cơ quan cấp: Phòng Đăng ký kinh doanh- Sở Kế hoạch và đầu tư TP Hà Nội", (0,
                            r.jsx)("br", {}), "Địa chỉ trụ sở chính: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54, đường Liễu Giai, Phường Cống Vị, ", (0,
                            r.jsx)("br", {}), "Quận Ba Đình, Thành phố Hà Nội, Việt Nam.", (0,
                            r.jsx)("br", {}), "Điện thoại: 024 73053939"]
                        })]
                    })]
                })
            }
        },
        4462: function(e, n, t) {
            "use strict";
            var r = t(5893);
            t(4609),
            t(7294);
            var i = t(745)
              , a = u(t(3871))
              , o = t(7417)
              , c = u(t(1261));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            (0,
            i.createRoot)(document.getElementById("main")).render((0,
            r.jsx)(o.ApolloProvider, {
                client: a.default,
                children: (0,
                r.jsx)(c.default, {})
            }))
        },
        9494: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var r = c(t(129))
              , i = c(t(9259))
              , a = c(t(3192));
            function o(e, n, t, r, i, a, o) {
                try {
                    var c = e[a](o)
                      , u = c.value
                } catch (e) {
                    return void t(e)
                }
                c.done ? n(u) : Promise.resolve(u).then(r, i)
            }
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u, l, s = (u = function() {
                var e, n, i, o, c, u, l, s, f, d, h, m, p;
                return function(e, n) {
                    var t, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0])
                                throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    a;
                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (t)
                                    throw new TypeError("Generator is already executing.");
                                for (; o; )
                                    try {
                                        if (t = 1,
                                        r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, a[1])).done)
                                            return i;
                                        switch (r = 0,
                                        i && (a = [2 & a[0], i.value]),
                                        a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return o.label++,
                                            {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++,
                                            r = a[1],
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(),
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1],
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2],
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop(),
                                            o.trys.pop();
                                            continue
                                        }
                                        a = n.call(e, o)
                                    } catch (e) {
                                        a = [6, e],
                                        r = 0
                                    } finally {
                                        t = i = 0
                                    }
                                if (5 & a[0])
                                    throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                }(this, (function(v) {
                    switch (v.label) {
                    case 0:
                        if (e = r.default.parse(location.search.slice(1)),
                        n = e.access_token,
                        i = e.partition,
                        o = void 0 === i ? 1011 : i,
                        c = function(e, n) {
                            if (null == e)
                                return {};
                            var t, r, i = function(e, n) {
                                if (null == e)
                                    return {};
                                var t, r, i = {}, a = Object.keys(e);
                                for (r = 0; r < a.length; r++)
                                    t = a[r],
                                    n.indexOf(t) >= 0 || (i[t] = e[t]);
                                return i
                            }(e, n);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < a.length; r++)
                                    t = a[r],
                                    n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, ["access_token", "partition"]),
                        64 !== (null == n ? void 0 : n.length))
                            return [3, 9];
                        v.label = 1;
                    case 1:
                        if (v.trys.push([1, 7, 8, 9]),
                        !(o == localStorage.getItem("partition") && n == localStorage.getItem("access_token") && Date.now() - 216e5 <= localStorage.getItem("active_token")))
                            return [3, 6];
                        v.label = 2;
                    case 2:
                        return v.trys.push([2, 5, , 6]),
                        [4, Promise.resolve().then(t.bind(t, 3871))];
                    case 3:
                        return u = v.sent(),
                        l = u.default,
                        s = {},
                        [4, l.query((s.query = a.default,
                        s))];
                    case 4:
                        return v.sent(),
                        [2, !0];
                    case 5:
                        return f = v.sent(),
                        console.error(f),
                        [3, 6];
                    case 6:
                        return localStorage.setItem("partition", o),
                        localStorage.setItem("active_token", Date.now()),
                        localStorage.setItem("access_token", n),
                        d = {},
                        window.location.replace("/connect/garena/callback?".concat(r.default.stringify((d.ingame = !0,
                        d.access_token = n,
                        d.partition = o,
                        d.state = location.href,
                        d)))),
                        [3, 9];
                    case 7:
                        return h = v.sent(),
                        console.error(h),
                        [3, 9];
                    case 8:
                        return m = "".concat(location.protocol, "//").concat(location.host).concat(location.pathname),
                        (p = r.default.stringify(c)) && (m += "?" + p),
                        history.replaceState(null, "", m),
                        [7];
                    case 9:
                        return [2]
                    }
                }
                ))
            }
            ,
            l = function() {
                var e = this
                  , n = arguments;
                return new Promise((function(t, r) {
                    var i = u.apply(e, n);
                    function a(e) {
                        o(i, t, r, a, c, "next", e)
                    }
                    function c(e) {
                        o(i, t, r, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            ,
            function() {
                return l.apply(this, arguments)
            }
            );
            s();
            var f = i.default
        },
        9610: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            var r = t(5113)
              , i = t(5874)
              , a = function(e, n) {
                return e instanceof Function && (e = e(n)),
                (0,
                i.createPersistedQueryLink)({
                    sha256: r.sha256
                }).concat(e)
            }
        },
        9259: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var r = t(5645)
              , i = t(9539)
              , a = o(t(9610));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function(e) {
                var n = new ((e = Object.assign({
                    apq: !0,
                    batch: !0,
                    batchMax: 32,
                    batchInterval: 100,
                    useGETForHashedQueries: void 0 !== e.batch && !e.batch
                }, e)).batch ? i.BatchHttpLink : r.HttpLink)(e);
                return e.apq ? (0,
                a.default)(n, e) : n
            }
        },
        3871: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var r, i = t(7417), a = c(t(9494)), o = c(t(4435));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = new i.InMemoryCache
              , l = (0,
            a.default)({
                credentials: "include",
                uri: null === o.default || void 0 === o.default || null === (r = o.default.graphql) || void 0 === r ? void 0 : r.endpoint,
                batch: !1,
                useGETForHashedQueries: !1
            })
              , s = new i.ApolloClient({
                link: l,
                cache: u
            })
        },
        4435: function(e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            var t = {
                language: "vi",
                graphql: {
                    endpoint: "graphql"
                }
            }
        },
        4654: function() {}
    }, i = {};
    function a(e) {
        var n = i[e];
        if (void 0 !== n)
            return n.exports;
        var t = i[e] = {
            exports: {}
        };
        return r[e](t, t.exports, a),
        t.exports
    }
    a.m = r,
    e = [],
    a.O = function(n, t, r, i) {
        if (!t) {
            var o = 1 / 0;
            for (s = 0; s < e.length; s++) {
                t = e[s][0],
                r = e[s][1],
                i = e[s][2];
                for (var c = !0, u = 0; u < t.length; u++)
                    (!1 & i || o >= i) && Object.keys(a.O).every((function(e) {
                        return a.O[e](t[u])
                    }
                    )) ? t.splice(u--, 1) : (c = !1,
                    i < o && (o = i));
                if (c) {
                    e.splice(s--, 1);
                    var l = r();
                    void 0 !== l && (n = l)
                }
            }
            return n
        }
        i = i || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > i; s--)
            e[s] = e[s - 1];
        e[s] = [t, r, i]
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    a.t = function(e, r) {
        if (1 & r && (e = this(e)),
        8 & r)
            return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule)
                return e;
            if (16 & r && "function" == typeof e.then)
                return e
        }
        var i = Object.create(null);
        a.r(i);
        var o = {};
        n = n || [null, t({}), t([]), t(t)];
        for (var c = 2 & r && e; "object" == typeof c && !~n.indexOf(c); c = t(c))
            Object.getOwnPropertyNames(c).forEach((function(n) {
                o[n] = function() {
                    return e[n]
                }
            }
            ));
        return o.default = function() {
            return e
        }
        ,
        a.d(i, o),
        i
    }
    ,
    a.d = function(e, n) {
        for (var t in n)
            a.o(n, t) && !a.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: n[t]
            })
    }
    ,
    a.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    function() {
        var e = {
            763: 0
        };
        a.O.j = function(n) {
            return 0 === e[n]
        }
        ;
        var n = function(n, t) {
            var r, i, o = t[0], c = t[1], u = t[2], l = 0;
            if (o.some((function(n) {
                return 0 !== e[n]
            }
            ))) {
                for (r in c)
                    a.o(c, r) && (a.m[r] = c[r]);
                if (u)
                    var s = u(a)
            }
            for (n && n(t); l < o.length; l++)
                i = o[l],
                a.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return a.O(s)
        }
          , t = self.webpackChunknode_graphql_kit = self.webpackChunknode_graphql_kit || [];
        t.forEach(n.bind(null, 0)),
        t.push = n.bind(null, t.push.bind(t))
    }();
    var o = a.O(void 0, [736], (function() {
        return a(4462)
    }
    ));
    o = a.O(o)
}();
