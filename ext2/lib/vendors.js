//var protobuf = require("protobufjs");
// window.require && (window.buffer = require("buffer"))


/*!
 * protobuf.js v6.10.0 (c) 2016, daniel wirtz
 * compiled wed, 15 jul 2020 23:34:15 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
! function(it) {
    "use strict";
    var r, e, t, i;
    r = {
        1: [function(t, i) {
            i.exports = function(t, i) {
                var n = Array(arguments.length - 1),
                    s = 0,
                    r = 2,
                    u = !0;
                for (; r < arguments.length;) n[s++] = arguments[r++];
                return new Promise(function(r, e) {
                    n[s] = function(t) {
                        if (u)
                            if (u = !1, t) e(t);
                            else {
                                for (var i = Array(arguments.length - 1), n = 0; n < i.length;) i[n++] = arguments[n];
                                r.apply(null, i)
                            }
                    };
                    try {
                        t.apply(i || null, n)
                    } catch (t) {
                        u && (u = !1, e(t))
                    }
                })
            }
        }, {}],
        2: [function(t, i, n) {
            var r = n;
            r.length = function(t) {
                var i = t.length;
                if (!i) return 0;
                for (var n = 0; 1 < --i % 4 && "=" == t[0 | i];) ++n;
                return Math.ceil(3 * t.length) / 4 - n
            };
            for (var h = Array(64), f = Array(123), e = 0; e < 64;) f[h[e] = e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e - 59 | 43] = e++;
            r.encode = function(t, i, n) {
                for (var r, e = null, s = [], u = 0, o = 0; i < n;) {
                    var f = t[i++];
                    switch (o) {
                        case 0:
                            s[u++] = h[f >> 2], r = (3 & f) << 4, o = 1;
                            break;
                        case 1:
                            s[u++] = h[r | f >> 4], r = (15 & f) << 2, o = 2;
                            break;
                        case 2:
                            s[u++] = h[r | f >> 6], s[u++] = h[63 & f], o = 0
                    }
                    8191 < u && ((e = e || []).push(String.fromCharCode.apply(String, s)), u = 0)
                }
                return o && (s[u++] = h[r], s[u++] = 61, 1 === o && (s[u++] = 61)), e ? (u && e.push(String.fromCharCode.apply(String, s.slice(0, u))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, u))
            };
            var a = "invalid encoding";
            r.decode = function(t, i, n) {
                for (var r, e = n, s = 0, u = 0; u < t.length;) {
                    var o = t.charCodeAt(u++);
                    if (61 === o && 1 < s) break;
                    if ((o = f[o]) === it) throw Error(a);
                    switch (s) {
                        case 0:
                            r = o, s = 1;
                            break;
                        case 1:
                            i[n++] = r << 2 | (48 & o) >> 4, r = o, s = 2;
                            break;
                        case 2:
                            i[n++] = (15 & r) << 4 | (60 & o) >> 2, r = o, s = 3;
                            break;
                        case 3:
                            i[n++] = (3 & r) << 6 | o, s = 0
                    }
                }
                if (1 === s) throw Error(a);
                return n - e
            }, r.test = function(t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
        }, {}],
        3: [function(t, i) {
            function c(i, n) {
                "string" == typeof i && (n = i, i = it);
                var f = [];

                function h(t) {
                    if ("string" != typeof t) {
                        var i = a();
                        if (c.verbose && console.log("codegen: " + i), i = "return " + i, t) {
                            for (var n = Object.keys(t), r = Array(n.length + 1), e = Array(n.length), s = 0; s < n.length;) r[s] = n[s], e[s] = t[n[s++]];
                            return r[s] = i, Function.apply(null, r).apply(null, e)
                        }
                        return Function(i)()
                    }
                    for (var u = Array(arguments.length - 1), o = 0; o < u.length;) u[o] = arguments[++o];
                    if (o = 0, t = t.replace(/%([%dfijs])/g, function(t, i) {
                            var n = u[o++];
                            switch (i) {
                                case "d":
                                case "f":
                                    return +n + "";
                                case "i":
                                    return Math.floor(n) + "";
                                case "j":
                                    return JSON.stringify(n);
                                case "s":
                                    return n + ""
                            }
                            return "%"
                        }), o !== u.length) throw Error("parameter count mismatch");
                    return f.push(t), h
                }

                function a(t) {
                    return "function " + (t || n || "") + "(" + (i && i.join(",") || "") + "){\n  " + f.join("\n  ") + "\n}"
                }
                return h.toString = a, h
            }(i.exports = c).verbose = !1
        }, {}],
        4: [function(t, i) {
            function n() {
                this.i = {}
            }(i.exports = n).prototype.on = function(t, i, n) {
                return (this.i[t] || (this.i[t] = [])).push({
                    fn: i,
                    ctx: n || this
                }), this
            }, n.prototype.off = function(t, i) {
                if (t === it) this.i = {};
                else if (i === it) this.i[t] = [];
                else
                    for (var n = this.i[t], r = 0; r < n.length;) n[r].fn === i ? n.splice(r, 1) : ++r;
                return this
            }, n.prototype.emit = function(t) {
                var i = this.i[t];
                if (i) {
                    for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                    for (r = 0; r < i.length;) i[r].fn.apply(i[r++].ctx, n)
                }
                return this
            }
        }, {}],
        5: [function(t, i) {
            i.exports = o;
            var s = t(1),
                u = t(7)("fs");

            function o(n, r, e) {
                return r = "function" == typeof r ? (e = r, {}) : r || {}, e ? !r.xhr && u && u.readFile ? u.readFile(n, function(t, i) {
                    return t && "undefined" != typeof XMLHttpRequest ? o.xhr(n, r, e) : t ? e(t) : e(null, r.binary ? i : i.toString("utf8"))
                }) : o.xhr(n, r, e) : s(o, this, n, r)
            }
            o.xhr = function(t, n, r) {
                var e = new XMLHttpRequest;
                e.onreadystatechange = function() {
                    if (4 !== e.readyState) return it;
                    if (0 !== e.status && 200 !== e.status) return r(Error("status " + e.status));
                    if (n.binary) {
                        var t = e.response;
                        if (!t) {
                            t = [];
                            for (var i = 0; i < e.responseText.length; ++i) t.push(255 & e.responseText.charCodeAt(i))
                        }
                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(t) : t)
                    }
                    return r(null, e.responseText)
                }, n.binary && ("overrideMimeType" in e && e.overrideMimeType("text/plain; charset=x-user-defined"), e.responseType = "arraybuffer"), e.open("GET", t), e.send()
            }
        }, {
            1: 1,
            7: 7
        }],
        6: [function(t, i) {
            function n(t) {
                function i(t, i, n, r) {
                    var e = i < 0 ? 1 : 0;
                    if (e && (i = -i), 0 === i) t(0 < 1 / i ? 0 : 2147483648, n, r);
                    else if (isNaN(i)) t(2143289344, n, r);
                    else if (34028234663852886e22 < i) t((e << 31 | 2139095040) >>> 0, n, r);
                    else if (i < 11754943508222875e-54) t((e << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, n, r);
                    else {
                        var s = Math.floor(Math.log(i) / Math.LN2);
                        t((e << 31 | 127 + s << 23 | 8388607 & Math.round(i * Math.pow(2, -s) * 8388608)) >>> 0, n, r)
                    }
                }

                function n(t, i, n) {
                    var r = t(i, n),
                        e = 2 * (r >> 31) + 1,
                        s = r >>> 23 & 255,
                        u = 8388607 & r;
                    return 255 == s ? u ? NaN : 1 / 0 * e : 0 == s ? 1401298464324817e-60 * e * u : e * Math.pow(2, s - 150) * (8388608 + u)
                }

                function r(t, i, n) {
                    o[0] = t, i[n] = f[0], i[n + 1] = f[1], i[n + 2] = f[2], i[n + 3] = f[3]
                }

                function e(t, i, n) {
                    o[0] = t, i[n] = f[3], i[n + 1] = f[2], i[n + 2] = f[1], i[n + 3] = f[0]
                }

                function s(t, i) {
                    return f[0] = t[i], f[1] = t[i + 1], f[2] = t[i + 2], f[3] = t[i + 3], o[0]
                }

                function u(t, i) {
                    return f[3] = t[i], f[2] = t[i + 1], f[1] = t[i + 2], f[0] = t[i + 3], o[0]
                }
                var o, f, h, a, c, l;

                function v(t, i, n, r, e, s) {
                    var u = r < 0 ? 1 : 0;
                    if (u && (r = -r), 0 === r) t(0, e, s + i), t(0 < 1 / r ? 0 : 2147483648, e, s + n);
                    else if (isNaN(r)) t(0, e, s + i), t(2146959360, e, s + n);
                    else if (17976931348623157e292 < r) t(0, e, s + i), t((u << 31 | 2146435072) >>> 0, e, s + n);
                    else {
                        var o;
                        if (r < 22250738585072014e-324) t((o = r / 5e-324) >>> 0, e, s + i), t((u << 31 | o / 4294967296) >>> 0, e, s + n);
                        else {
                            var f = Math.floor(Math.log(r) / Math.LN2);
                            1024 === f && (f = 1023), t(4503599627370496 * (o = r * Math.pow(2, -f)) >>> 0, e, s + i), t((u << 31 | f + 1023 << 20 | 1048576 * o & 1048575) >>> 0, e, s + n)
                        }
                    }
                }

                function d(t, i, n, r, e) {
                    var s = t(r, e + i),
                        u = t(r, e + n),
                        o = 2 * (u >> 31) + 1,
                        f = u >>> 20 & 2047,
                        h = 4294967296 * (1048575 & u) + s;
                    return 2047 == f ? h ? NaN : 1 / 0 * o : 0 == f ? 5e-324 * o * h : o * Math.pow(2, f - 1075) * (h + 4503599627370496)
                }

                function p(t, i, n) {
                    a[0] = t, i[n] = c[0], i[n + 1] = c[1], i[n + 2] = c[2], i[n + 3] = c[3], i[n + 4] = c[4], i[n + 5] = c[5], i[n + 6] = c[6], i[n + 7] = c[7]
                }

                function w(t, i, n) {
                    a[0] = t, i[n] = c[7], i[n + 1] = c[6], i[n + 2] = c[5], i[n + 3] = c[4], i[n + 4] = c[3], i[n + 5] = c[2], i[n + 6] = c[1], i[n + 7] = c[0]
                }

                function b(t, i) {
                    return c[0] = t[i], c[1] = t[i + 1], c[2] = t[i + 2], c[3] = t[i + 3], c[4] = t[i + 4], c[5] = t[i + 5], c[6] = t[i + 6], c[7] = t[i + 7], a[0]
                }

                function y(t, i) {
                    return c[7] = t[i], c[6] = t[i + 1], c[5] = t[i + 2], c[4] = t[i + 3], c[3] = t[i + 4], c[2] = t[i + 5], c[1] = t[i + 6], c[0] = t[i + 7], a[0]
                }
                return "undefined" != typeof Float32Array ? (o = new Float32Array([-0]), f = new Uint8Array(o.buffer), h = 128 === f[3], t.writeFloatLE = h ? r : e, t.writeFloatBE = h ? e : r, t.readFloatLE = h ? s : u, t.readFloatBE = h ? u : s) : (t.writeFloatLE = i.bind(null, m), t.writeFloatBE = i.bind(null, g), t.readFloatLE = n.bind(null, j), t.readFloatBE = n.bind(null, k)), "undefined" != typeof Float64Array ? (a = new Float64Array([-0]), c = new Uint8Array(a.buffer), l = 128 === c[7], t.writeDoubleLE = l ? p : w, t.writeDoubleBE = l ? w : p, t.readDoubleLE = l ? b : y, t.readDoubleBE = l ? y : b) : (t.writeDoubleLE = v.bind(null, m, 0, 4), t.writeDoubleBE = v.bind(null, g, 4, 0), t.readDoubleLE = d.bind(null, j, 0, 4), t.readDoubleBE = d.bind(null, k, 4, 0)), t
            }

            function m(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
            }

            function g(t, i, n) {
                i[n] = t >>> 24, i[n + 1] = t >>> 16 & 255, i[n + 2] = t >>> 8 & 255, i[n + 3] = 255 & t
            }

            function j(t, i) {
                return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0
            }

            function k(t, i) {
                return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0
            }
            i.exports = n(n)
        }, {}],
        7: [function(t, i, n) {
            function r(t) {
                try {
                    var i = eval("require")(t);
                    if (i && (i.length || Object.keys(i).length)) return i
                } catch (t) {}
                return null
            }
            i.exports = r
        }, {}],
        8: [function(t, i, n) {
            var r = n,
                s = r.isAbsolute = function(t) {
                    return /^(?:\/|\w+:)/.test(t)
                },
                e = r.normalize = function(t) {
                    var i = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
                        n = s(t),
                        r = "";
                    n && (r = i.shift() + "/");
                    for (var e = 0; e < i.length;) ".." === i[e] ? 0 < e && ".." !== i[e - 1] ? i.splice(--e, 2) : n ? i.splice(e, 1) : ++e : "." === i[e] ? i.splice(e, 1) : ++e;
                    return r + i.join("/")
                };
            r.resolve = function(t, i, n) {
                return n || (i = e(i)), s(i) ? i : (n || (t = e(t)), (t = t.replace(/(?:\/|^)[^/]+$/, "")).length ? e(t + "/" + i) : i)
            }
        }, {}],
        9: [function(t, i) {
            i.exports = function(n, r, t) {
                var e = t || 8192,
                    s = e >>> 1,
                    u = null,
                    o = e;
                return function(t) {
                    if (t < 1 || s < t) return n(t);
                    e < o + t && (u = n(e), o = 0);
                    var i = r.call(u, o, o += t);
                    return 7 & o && (o = 1 + (7 | o)), i
                }
            }
        }, {}],
        10: [function(t, i, n) {
            var r = n;
            r.length = function(t) {
                for (var i = 0, n = 0, r = 0; r < t.length; ++r)(n = t.charCodeAt(r)) < 128 ? i += 1 : n < 2048 ? i += 2 : 55296 == (64512 & n) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, i += 4) : i += 3;
                return i
            }, r.read = function(t, i, n) {
                if (n - i < 1) return "";
                for (var r, e = null, s = [], u = 0; i < n;)(r = t[i++]) < 128 ? s[u++] = r : 191 < r && r < 224 ? s[u++] = (31 & r) << 6 | 63 & t[i++] : 239 < r && r < 365 ? (r = ((7 & r) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536, s[u++] = 55296 + (r >> 10), s[u++] = 56320 + (1023 & r)) : s[u++] = (15 & r) << 12 | (63 & t[i++]) << 6 | 63 & t[i++], 8191 < u && ((e = e || []).push(String.fromCharCode.apply(String, s)), u = 0);
                return e ? (u && e.push(String.fromCharCode.apply(String, s.slice(0, u))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, u))
            }, r.write = function(t, i, n) {
                for (var r, e, s = n, u = 0; u < t.length; ++u)(r = t.charCodeAt(u)) < 128 ? i[n++] = r : (r < 2048 ? i[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (e = t.charCodeAt(u + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & e), ++u, i[n++] = r >> 18 | 240, i[n++] = r >> 12 & 63 | 128) : i[n++] = r >> 12 | 224, i[n++] = r >> 6 & 63 | 128), i[n++] = 63 & r | 128);
                return n - s
            }
        }, {}],
        11: [function(t, i) {
            i.exports = e;
            var n, r = /\/|\./;

            function e(t, i) {
                r.test(t) || (t = "google/protobuf/" + t + ".proto", i = {
                    nested: {
                        google: {
                            nested: {
                                protobuf: {
                                    nested: i
                                }
                            }
                        }
                    }
                }), e[t] = i
            }
            e("any", {
                Any: {
                    fields: {
                        type_url: {
                            type: "string",
                            id: 1
                        },
                        value: {
                            type: "bytes",
                            id: 2
                        }
                    }
                }
            }), e("duration", {
                Duration: n = {
                    fields: {
                        seconds: {
                            type: "int64",
                            id: 1
                        },
                        nanos: {
                            type: "int32",
                            id: 2
                        }
                    }
                }
            }), e("timestamp", {
                Timestamp: n
            }), e("empty", {
                Empty: {
                    fields: {}
                }
            }), e("struct", {
                Struct: {
                    fields: {
                        fields: {
                            keyType: "string",
                            type: "Value",
                            id: 1
                        }
                    }
                },
                Value: {
                    oneofs: {
                        kind: {
                            oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                        }
                    },
                    fields: {
                        nullValue: {
                            type: "NullValue",
                            id: 1
                        },
                        numberValue: {
                            type: "double",
                            id: 2
                        },
                        stringValue: {
                            type: "string",
                            id: 3
                        },
                        boolValue: {
                            type: "bool",
                            id: 4
                        },
                        structValue: {
                            type: "Struct",
                            id: 5
                        },
                        listValue: {
                            type: "ListValue",
                            id: 6
                        }
                    }
                },
                NullValue: {
                    values: {
                        NULL_VALUE: 0
                    }
                },
                ListValue: {
                    fields: {
                        values: {
                            rule: "repeated",
                            type: "Value",
                            id: 1
                        }
                    }
                }
            }), e("wrappers", {
                DoubleValue: {
                    fields: {
                        value: {
                            type: "double",
                            id: 1
                        }
                    }
                },
                FloatValue: {
                    fields: {
                        value: {
                            type: "float",
                            id: 1
                        }
                    }
                },
                Int64Value: {
                    fields: {
                        value: {
                            type: "int64",
                            id: 1
                        }
                    }
                },
                UInt64Value: {
                    fields: {
                        value: {
                            type: "uint64",
                            id: 1
                        }
                    }
                },
                Int32Value: {
                    fields: {
                        value: {
                            type: "int32",
                            id: 1
                        }
                    }
                },
                UInt32Value: {
                    fields: {
                        value: {
                            type: "uint32",
                            id: 1
                        }
                    }
                },
                BoolValue: {
                    fields: {
                        value: {
                            type: "bool",
                            id: 1
                        }
                    }
                },
                StringValue: {
                    fields: {
                        value: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                BytesValue: {
                    fields: {
                        value: {
                            type: "bytes",
                            id: 1
                        }
                    }
                }
            }), e("field_mask", {
                FieldMask: {
                    fields: {
                        paths: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                        }
                    }
                }
            }), e.get = function(t) {
                return e[t] || null
            }
        }, {}],
        12: [function(t, i, n) {
            var r = n,
                l = t(15),
                v = t(37);

            function u(t, i, n, r) {
                if (i.resolvedType)
                    if (i.resolvedType instanceof l) {
                        t("switch(d%s){", r);
                        for (var e = i.resolvedType.values, s = Object.keys(e), u = 0; u < s.length; ++u) i.repeated && e[s[u]] === i.typeDefault && t("default:"), t("case%j:", s[u])("case %i:", e[s[u]])("m%s=%j", r, e[s[u]])("break");
                        t("}")
                    } else t('if(typeof d%s!=="object")', r)("throw TypeError(%j)", i.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, n, r);
                else {
                    var o = !1;
                    switch (i.type) {
                        case "double":
                        case "float":
                            t("m%s=Number(d%s)", r, r);
                            break;
                        case "uint32":
                        case "fixed32":
                            t("m%s=d%s>>>0", r, r);
                            break;
                        case "int32":
                        case "sint32":
                        case "sfixed32":
                            t("m%s=d%s|0", r, r);
                            break;
                        case "uint64":
                            o = !0;
                        case "int64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, o)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, o ? "true" : "");
                            break;
                        case "bytes":
                            t('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                            break;
                        case "string":
                            t("m%s=String(d%s)", r, r);
                            break;
                        case "bool":
                            t("m%s=Boolean(d%s)", r, r)
                    }
                }
                return t
            }

            function d(t, i, n, r) {
                if (i.resolvedType) i.resolvedType instanceof l ? t("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, n, r, r) : t("d%s=types[%i].toObject(m%s,o)", r, n, r);
                else {
                    var e = !1;
                    switch (i.type) {
                        case "double":
                        case "float":
                            t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                            break;
                        case "uint64":
                            e = !0;
                        case "int64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            t('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, e ? "true" : "", r);
                            break;
                        case "bytes":
                            t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                            break;
                        default:
                            t("d%s=m%s", r, r)
                    }
                }
                return t
            }
            r.fromObject = function(t) {
                var i = t.fieldsArray,
                    n = v.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!i.length) return n("return new this.ctor");
                n("var m=new this.ctor");
                for (var r = 0; r < i.length; ++r) {
                    var e = i[r].resolve(),
                        s = v.safeProp(e.name);
                    e.map ? (n("if(d%s){", s)('if(typeof d%s!=="object")', s)("throw TypeError(%j)", e.fullName + ": object expected")("m%s={}", s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", s), u(n, e, r, s + "[ks[i]]")("}")("}")) : e.repeated ? (n("if(d%s){", s)("if(!Array.isArray(d%s))", s)("throw TypeError(%j)", e.fullName + ": array expected")("m%s=[]", s)("for(var i=0;i<d%s.length;++i){", s), u(n, e, r, s + "[i]")("}")("}")) : (e.resolvedType instanceof l || n("if(d%s!=null){", s), u(n, e, r, s), e.resolvedType instanceof l || n("}"))
                }
                return n("return m")
            }, r.toObject = function(t) {
                var i = t.fieldsArray.slice().sort(v.compareFieldsById);
                if (!i.length) return v.codegen()("return {}");
                for (var n = v.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], e = [], s = [], u = 0; u < i.length; ++u) i[u].partOf || (i[u].resolve().repeated ? r : i[u].map ? e : s).push(i[u]);
                if (r.length) {
                    for (n("if(o.arrays||o.defaults){"), u = 0; u < r.length; ++u) n("d%s=[]", v.safeProp(r[u].name));
                    n("}")
                }
                if (e.length) {
                    for (n("if(o.objects||o.defaults){"), u = 0; u < e.length; ++u) n("d%s={}", v.safeProp(e[u].name));
                    n("}")
                }
                if (s.length) {
                    for (n("if(o.defaults){"), u = 0; u < s.length; ++u) {
                        var o = s[u],
                            f = v.safeProp(o.name);
                        if (o.resolvedType instanceof l) n("d%s=o.enums===String?%j:%j", f, o.resolvedType.valuesById[o.typeDefault], o.typeDefault);
                        else if (o.long) n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", o.typeDefault.low, o.typeDefault.high, o.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", f)("}else")("d%s=o.longs===String?%j:%i", f, o.typeDefault.toString(), o.typeDefault.toNumber());
                        else if (o.bytes) {
                            var h = "[" + Array.prototype.slice.call(o.typeDefault).join(",") + "]";
                            n("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, o.typeDefault))("else{")("d%s=%s", f, h)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}")
                        } else n("d%s=%j", f, o.typeDefault)
                    }
                    n("}")
                }
                var a = !1;
                for (u = 0; u < i.length; ++u) {
                    o = i[u];
                    var c = t.e.indexOf(o);
                    f = v.safeProp(o.name);
                    o.map ? (a || (a = !0, n("var ks2")), n("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){"), d(n, o, c, f + "[ks2[j]]")("}")) : o.repeated ? (n("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f), d(n, o, c, f + "[j]")("}")) : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", f, o.name), d(n, o, c, f), o.partOf && n("if(o.oneofs)")("d%s=%j", v.safeProp(o.partOf.name), o.name)), n("}")
                }
                return n("return d")
            }
        }, {
            15: 15,
            37: 37
        }],
        13: [function(t, i) {
            i.exports = function(t) {
                var i = h.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter(function(t) {
                    return t.map
                }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                t.group && i("if((t&7)===4)")("break");
                i("switch(t>>>3){");
                for (var n = 0; n < t.fieldsArray.length; ++n) {
                    var r = t.e[n].resolve(),
                        e = r.resolvedType instanceof o ? "int32" : r.type,
                        s = "m" + h.safeProp(r.name);
                    i("case %i:", r.id), r.map ? (i("if(%s===util.emptyObject)", s)("%s={}", s)("var c2 = r.uint32()+r.pos"), f.defaults[r.keyType] !== it ? i("k=%j", f.defaults[r.keyType]) : i("k=null"), f.defaults[e] !== it ? i("value=%j", f.defaults[e]) : i("value=null"), i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", r.keyType)("case 2:"), f.basic[e] === it ? i("value=types[%i].decode(r,r.uint32())", n) : i("value=r.%s()", e), i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), f.long[r.keyType] !== it ? i('%s[typeof k==="object"?util.longToHash(k):k]=value', s) : i("%s[k]=value", s)) : r.repeated ? (i("if(!(%s&&%s.length))", s, s)("%s=[]", s), f.packed[e] !== it && i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", s, e)("}else"), f.basic[e] === it ? i(r.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", s, n) : i("%s.push(r.%s())", s, e)) : f.basic[e] === it ? i(r.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", s, n) : i("%s=r.%s()", s, e), i("break")
                }
                for (i("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < t.e.length; ++n) {
                    var u = t.e[n];
                    u.required && i("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'")
                }
                return i("return m")
            };
            var o = t(15),
                f = t(36),
                h = t(37)
        }, {
            15: 15,
            36: 36,
            37: 37
        }],
        14: [function(t, i) {
            i.exports = function(t) {
                for (var i, n = c.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"), r = t.fieldsArray.slice().sort(c.compareFieldsById), e = 0; e < r.length; ++e) {
                    var s = r[e].resolve(),
                        u = t.e.indexOf(s),
                        o = s.resolvedType instanceof h ? "int32" : s.type,
                        f = a.basic[o];
                    i = "m" + c.safeProp(s.name), s.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (s.id << 3 | 2) >>> 0, 8 | a.mapKey[s.keyType], s.keyType), f === it ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, i) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | f, o, i), n("}")("}")) : s.repeated ? (n("if(%s!=null&&%s.length){", i, i), s.packed && a.packed[o] !== it ? n("w.uint32(%i).fork()", (s.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", o, i)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", i), f === it ? l(n, s, u, i + "[i]") : n("w.uint32(%i).%s(%s[i])", (s.id << 3 | f) >>> 0, o, i)), n("}")) : (s.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, s.name), f === it ? l(n, s, u, i) : n("w.uint32(%i).%s(%s)", (s.id << 3 | f) >>> 0, o, i))
                }
                return n("return w")
            };
            var h = t(15),
                a = t(36),
                c = t(37);

            function l(t, i, n, r) {
                return i.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, r, (i.id << 3 | 3) >>> 0, (i.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, r, (i.id << 3 | 2) >>> 0)
            }
        }, {
            15: 15,
            36: 36,
            37: 37
        }],
        15: [function(t, i) {
            i.exports = e;
            var o = t(24);
            ((e.prototype = Object.create(o.prototype)).constructor = e).className = "Enum";
            var n = t(23),
                r = t(37);

            function e(t, i, n, r, e) {
                if (o.call(this, t, n), i && "object" != typeof i) throw TypeError("values must be an object");
                if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = r, this.comments = e || {}, this.reserved = it, i)
                    for (var s = Object.keys(i), u = 0; u < s.length; ++u) "number" == typeof i[s[u]] && (this.valuesById[this.values[s[u]] = i[s[u]]] = s[u])
            }
            e.fromJSON = function(t, i) {
                var n = new e(t, i.values, i.options, i.comment, i.comments);
                return n.reserved = i.reserved, n
            }, e.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return r.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : it, "comment", i ? this.comment : it, "comments", i ? this.comments : it])
            }, e.prototype.add = function(t, i, n) {
                if (!r.isString(t)) throw TypeError("name must be a string");
                if (!r.isInteger(i)) throw TypeError("id must be an integer");
                if (this.values[t] !== it) throw Error("duplicate name '" + t + "' in " + this);
                if (this.isReservedId(i)) throw Error("id " + i + " is reserved in " + this);
                if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
                if (this.valuesById[i] !== it) {
                    if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + i + " in " + this);
                    this.values[t] = i
                } else this.valuesById[this.values[t] = i] = t;
                return this.comments[t] = n || null, this
            }, e.prototype.remove = function(t) {
                if (!r.isString(t)) throw TypeError("name must be a string");
                var i = this.values[t];
                if (null == i) throw Error("name '" + t + "' does not exist in " + this);
                return delete this.valuesById[i], delete this.values[t], delete this.comments[t], this
            }, e.prototype.isReservedId = function(t) {
                return n.isReservedId(this.reserved, t)
            }, e.prototype.isReservedName = function(t) {
                return n.isReservedName(this.reserved, t)
            }
        }, {
            23: 23,
            24: 24,
            37: 37
        }],
        16: [function(t, i) {
            i.exports = u;
            var o = t(24);
            ((u.prototype = Object.create(o.prototype)).constructor = u).className = "Field";
            var n, r = t(15),
                f = t(36),
                h = t(37),
                a = /^required|optional|repeated$/;

            function u(t, i, n, r, e, s, u) {
                if (h.isObject(r) ? (u = e, s = r, r = e = it) : h.isObject(e) && (u = s, s = e, e = it), o.call(this, t, s), !h.isInteger(i) || i < 0) throw TypeError("id must be a non-negative integer");
                if (!h.isString(n)) throw TypeError("type must be a string");
                if (r !== it && !a.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                if (e !== it && !h.isString(e)) throw TypeError("extend must be a string");
                this.rule = r && "optional" !== r ? r : it, this.type = n, this.id = i, this.extend = e || it, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!h.Long && f.long[n] !== it, this.bytes = "bytes" === n, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.u = null, this.comment = u
            }
            u.fromJSON = function(t, i) {
                return new u(t, i.id, i.type, i.rule, i.extend, i.options, i.comment)
            }, Object.defineProperty(u.prototype, "packed", {
                get: function() {
                    return null === this.u && (this.u = !1 !== this.getOption("packed")), this.u
                }
            }), u.prototype.setOption = function(t, i, n) {
                return "packed" === t && (this.u = null), o.prototype.setOption.call(this, t, i, n)
            }, u.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return h.toObject(["rule", "optional" !== this.rule && this.rule || it, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", i ? this.comment : it])
            }, u.prototype.resolve = function() {
                if (this.resolved) return this;
                if ((this.typeDefault = f.defaults[this.type]) === it && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof n ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof r && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (this.options.packed === it || !this.resolvedType || this.resolvedType instanceof r) || delete this.options.packed, Object.keys(this.options).length || (this.options = it)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" == this.type[0]), Object.freeze && Object.freeze(this.typeDefault);
                else if (this.bytes && "string" == typeof this.typeDefault) {
                    var t;
                    h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
                }
                return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof n && (this.parent.ctor.prototype[this.name] = this.defaultValue), o.prototype.resolve.call(this)
            }, u.d = function(n, r, e, s) {
                return "function" == typeof r ? r = h.decorateType(r).name : r && "object" == typeof r && (r = h.decorateEnum(r).name),
                    function(t, i) {
                        h.decorateType(t.constructor).add(new u(i, n, r, e, {
                            default: s
                        }))
                    }
            }, u.o = function(t) {
                n = t
            }
        }, {
            15: 15,
            24: 24,
            36: 36,
            37: 37
        }],
        17: [function(t, i) {
            var r = i.exports = t(18);
            r.build = "light", r.load = function(t, i, n) {
                return (i = "function" == typeof i ? (n = i, new r.Root) : i || new r.Root).load(t, n)
            }, r.loadSync = function(t, i) {
                return (i = i || new r.Root).loadSync(t)
            }, r.encoder = t(14), r.decoder = t(13), r.verifier = t(40), r.converter = t(12), r.ReflectionObject = t(24), r.Namespace = t(23), r.Root = t(29), r.Enum = t(15), r.Type = t(35), r.Field = t(16), r.OneOf = t(25), r.MapField = t(20), r.Service = t(33), r.Method = t(22), r.Message = t(21), r.wrappers = t(41), r.types = t(36), r.util = t(37), r.ReflectionObject.o(r.Root), r.Namespace.o(r.Type, r.Service, r.Enum), r.Root.o(r.Type), r.Field.o(r.Type)
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            18: 18,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            29: 29,
            33: 33,
            35: 35,
            36: 36,
            37: 37,
            40: 40,
            41: 41
        }],
        18: [function(t, i, n) {
            var r = n;

            function e() {
                r.util.o(), r.Writer.o(r.BufferWriter), r.Reader.o(r.BufferReader)
            }
            r.build = "minimal", r.Writer = t(42), r.BufferWriter = t(43), r.Reader = t(27), r.BufferReader = t(28), r.util = t(39), r.rpc = t(31), r.roots = t(30), (r.configure = e)()
        }, {
            27: 27,
            28: 28,
            30: 30,
            31: 31,
            39: 39,
            42: 42,
            43: 43
        }],
        19: [function(t, i) {
            var n = i.exports = t(17);
            n.build = "full", n.tokenize = t(34), n.parse = t(26), n.common = t(11), n.Root.o(n.Type, n.parse, n.common)
        }, {
            11: 11,
            17: 17,
            26: 26,
            34: 34
        }],
        20: [function(t, i) {
            i.exports = s;
            var u = t(16);
            ((s.prototype = Object.create(u.prototype)).constructor = s).className = "MapField";
            var n = t(36),
                o = t(37);

            function s(t, i, n, r, e, s) {
                if (u.call(this, t, i, r, it, it, e, s), !o.isString(n)) throw TypeError("keyType must be a string");
                this.keyType = n, this.resolvedKeyType = null, this.map = !0
            }
            s.fromJSON = function(t, i) {
                return new s(t, i.id, i.keyType, i.type, i.options, i.comment)
            }, s.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", i ? this.comment : it])
            }, s.prototype.resolve = function() {
                if (this.resolved) return this;
                if (n.mapKey[this.keyType] === it) throw Error("invalid key type: " + this.keyType);
                return u.prototype.resolve.call(this)
            }, s.d = function(n, r, e) {
                return "function" == typeof e ? e = o.decorateType(e).name : e && "object" == typeof e && (e = o.decorateEnum(e).name),
                    function(t, i) {
                        o.decorateType(t.constructor).add(new s(i, n, r, e))
                    }
            }
        }, {
            16: 16,
            36: 36,
            37: 37
        }],
        21: [function(t, i) {
            i.exports = r;
            var n = t(39);

            function r(t) {
                if (t)
                    for (var i = Object.keys(t), n = 0; n < i.length; ++n) this[i[n]] = t[i[n]]
            }
            r.create = function(t) {
                return this.$type.create(t)
            }, r.encode = function(t, i) {
                return this.$type.encode(t, i)
            }, r.encodeDelimited = function(t, i) {
                return this.$type.encodeDelimited(t, i)
            }, r.decode = function(t) {
                return this.$type.decode(t)
            }, r.decodeDelimited = function(t) {
                return this.$type.decodeDelimited(t)
            }, r.verify = function(t) {
                return this.$type.verify(t)
            }, r.fromObject = function(t) {
                return this.$type.fromObject(t)
            }, r.toObject = function(t, i) {
                return this.$type.toObject(t, i)
            }, r.prototype.toJSON = function() {
                return this.$type.toObject(this, n.toJSONOptions)
            }
        }, {
            39: 39
        }],
        22: [function(t, i) {
            i.exports = n;
            var f = t(24);
            ((n.prototype = Object.create(f.prototype)).constructor = n).className = "Method";
            var h = t(37);

            function n(t, i, n, r, e, s, u, o) {
                if (h.isObject(e) ? (u = e, e = s = it) : h.isObject(s) && (u = s, s = it), i !== it && !h.isString(i)) throw TypeError("type must be a string");
                if (!h.isString(n)) throw TypeError("requestType must be a string");
                if (!h.isString(r)) throw TypeError("responseType must be a string");
                f.call(this, t, u), this.type = i || "rpc", this.requestType = n, this.requestStream = !!e || it, this.responseType = r, this.responseStream = !!s || it, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = o
            }
            n.fromJSON = function(t, i) {
                return new n(t, i.type, i.requestType, i.responseType, i.requestStream, i.responseStream, i.options, i.comment)
            }, n.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return h.toObject(["type", "rpc" !== this.type && this.type || it, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", i ? this.comment : it])
            }, n.prototype.resolve = function() {
                return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), f.prototype.resolve.call(this))
            }
        }, {
            24: 24,
            37: 37
        }],
        23: [function(t, i) {
            i.exports = h;
            var n = t(24);
            ((h.prototype = Object.create(n.prototype)).constructor = h).className = "Namespace";
            var e, s, u, o = t(16),
                f = t(37);

            function r(t, i) {
                if (!t || !t.length) return it;
                for (var n = {}, r = 0; r < t.length; ++r) n[t[r].name] = t[r].toJSON(i);
                return n
            }

            function h(t, i) {
                n.call(this, t, i), this.nested = it, this.f = null
            }

            function a(t) {
                return t.f = null, t
            }
            h.fromJSON = function(t, i) {
                return new h(t, i.options).addJSON(i.nested)
            }, h.arrayToJSON = r, h.isReservedId = function(t, i) {
                if (t)
                    for (var n = 0; n < t.length; ++n)
                        if ("string" != typeof t[n] && t[n][0] <= i && t[n][1] > i) return !0;
                return !1
            }, h.isReservedName = function(t, i) {
                if (t)
                    for (var n = 0; n < t.length; ++n)
                        if (t[n] === i) return !0;
                return !1
            }, Object.defineProperty(h.prototype, "nestedArray", {
                get: function() {
                    return this.f || (this.f = f.toArray(this.nested))
                }
            }), h.prototype.toJSON = function(t) {
                return f.toObject(["options", this.options, "nested", r(this.nestedArray, t)])
            }, h.prototype.addJSON = function(t) {
                if (t)
                    for (var i, n = Object.keys(t), r = 0; r < n.length; ++r) i = t[n[r]], this.add((i.fields !== it ? e.fromJSON : i.values !== it ? u.fromJSON : i.methods !== it ? s.fromJSON : i.id !== it ? o.fromJSON : h.fromJSON)(n[r], i));
                return this
            }, h.prototype.get = function(t) {
                return this.nested && this.nested[t] || null
            }, h.prototype.getEnum = function(t) {
                if (this.nested && this.nested[t] instanceof u) return this.nested[t].values;
                throw Error("no such enum: " + t)
            }, h.prototype.add = function(t) {
                if (!(t instanceof o && t.extend !== it || t instanceof e || t instanceof u || t instanceof s || t instanceof h)) throw TypeError("object must be a valid nested object");
                if (this.nested) {
                    var i = this.get(t.name);
                    if (i) {
                        if (!(i instanceof h && t instanceof h) || i instanceof e || i instanceof s) throw Error("duplicate name '" + t.name + "' in " + this);
                        for (var n = i.nestedArray, r = 0; r < n.length; ++r) t.add(n[r]);
                        this.remove(i), this.nested || (this.nested = {}), t.setOptions(i.options, !0)
                    }
                } else this.nested = {};
                return (this.nested[t.name] = t).onAdd(this), a(this)
            }, h.prototype.remove = function(t) {
                if (!(t instanceof n)) throw TypeError("object must be a ReflectionObject");
                if (t.parent !== this) throw Error(t + " is not a member of " + this);
                return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = it), t.onRemove(this), a(this)
            }, h.prototype.define = function(t, i) {
                if (f.isString(t)) t = t.split(".");
                else if (!Array.isArray(t)) throw TypeError("illegal path");
                if (t && t.length && "" === t[0]) throw Error("path must be relative");
                for (var n = this; 0 < t.length;) {
                    var r = t.shift();
                    if (n.nested && n.nested[r]) {
                        if (!((n = n.nested[r]) instanceof h)) throw Error("path conflicts with non-namespace objects")
                    } else n.add(n = new h(r))
                }
                return i && n.addJSON(i), n
            }, h.prototype.resolveAll = function() {
                for (var t = this.nestedArray, i = 0; i < t.length;) t[i] instanceof h ? t[i++].resolveAll() : t[i++].resolve();
                return this.resolve()
            }, h.prototype.lookup = function(t, i, n) {
                if ("boolean" == typeof i ? (n = i, i = it) : i && !Array.isArray(i) && (i = [i]), f.isString(t) && t.length) {
                    if ("." === t) return this.root;
                    t = t.split(".")
                } else if (!t.length) return this;
                if ("" === t[0]) return this.root.lookup(t.slice(1), i);
                var r = this.get(t[0]);
                if (r) {
                    if (1 === t.length) {
                        if (!i || ~i.indexOf(r.constructor)) return r
                    } else if (r instanceof h && (r = r.lookup(t.slice(1), i, !0))) return r
                } else
                    for (var e = 0; e < this.nestedArray.length; ++e)
                        if (this.f[e] instanceof h && (r = this.f[e].lookup(t, i, !0))) return r;
                return null === this.parent || n ? null : this.parent.lookup(t, i)
            }, h.prototype.lookupType = function(t) {
                var i = this.lookup(t, [e]);
                if (!i) throw Error("no such type: " + t);
                return i
            }, h.prototype.lookupEnum = function(t) {
                var i = this.lookup(t, [u]);
                if (!i) throw Error("no such Enum '" + t + "' in " + this);
                return i
            }, h.prototype.lookupTypeOrEnum = function(t) {
                var i = this.lookup(t, [e, u]);
                if (!i) throw Error("no such Type or Enum '" + t + "' in " + this);
                return i
            }, h.prototype.lookupService = function(t) {
                var i = this.lookup(t, [s]);
                if (!i) throw Error("no such Service '" + t + "' in " + this);
                return i
            }, h.o = function(t, i, n) {
                e = t, s = i, u = n
            }
        }, {
            16: 16,
            24: 24,
            37: 37
        }],
        24: [function(t, i) {
            (i.exports = r).className = "ReflectionObject";
            var n, o = t(37);

            function r(t, i) {
                if (!o.isString(t)) throw TypeError("name must be a string");
                if (i && !o.isObject(i)) throw TypeError("options must be an object");
                this.options = i, this.parsedOptions = null, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
            }
            Object.defineProperties(r.prototype, {
                root: {
                    get: function() {
                        for (var t = this; null !== t.parent;) t = t.parent;
                        return t
                    }
                },
                fullName: {
                    get: function() {
                        for (var t = [this.name], i = this.parent; i;) t.unshift(i.name), i = i.parent;
                        return t.join(".")
                    }
                }
            }), r.prototype.toJSON = function() {
                throw Error()
            }, r.prototype.onAdd = function(t) {
                this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
                var i = t.root;
                i instanceof n && i.h(this)
            }, r.prototype.onRemove = function(t) {
                var i = t.root;
                i instanceof n && i.a(this), this.parent = null, this.resolved = !1
            }, r.prototype.resolve = function() {
                return this.resolved || this.root instanceof n && (this.resolved = !0), this
            }, r.prototype.getOption = function(t) {
                return this.options ? this.options[t] : it
            }, r.prototype.setOption = function(t, i, n) {
                return n && this.options && this.options[t] !== it || ((this.options || (this.options = {}))[t] = i), this
            }, r.prototype.setParsedOption = function(i, t, n) {
                this.parsedOptions || (this.parsedOptions = []);
                var r = this.parsedOptions;
                if (n) {
                    var e = r.find(function(t) {
                        return Object.prototype.hasOwnProperty.call(t, i)
                    });
                    if (e) {
                        var s = e[i];
                        o.setProperty(s, n, t)
                    } else(e = {})[i] = o.setProperty({}, n, t), r.push(e)
                } else {
                    var u = {};
                    u[i] = t, r.push(u)
                }
                return this
            }, r.prototype.setOptions = function(t, i) {
                if (t)
                    for (var n = Object.keys(t), r = 0; r < n.length; ++r) this.setOption(n[r], t[n[r]], i);
                return this
            }, r.prototype.toString = function() {
                var t = this.constructor.className,
                    i = this.fullName;
                return i.length ? t + " " + i : t
            }, r.o = function(t) {
                n = t
            }
        }, {
            37: 37
        }],
        25: [function(t, i) {
            i.exports = s;
            var e = t(24);
            ((s.prototype = Object.create(e.prototype)).constructor = s).className = "OneOf";
            var n = t(16),
                r = t(37);

            function s(t, i, n, r) {
                if (Array.isArray(i) || (n = i, i = it), e.call(this, t, n), i !== it && !Array.isArray(i)) throw TypeError("fieldNames must be an Array");
                this.oneof = i || [], this.fieldsArray = [], this.comment = r
            }

            function u(t) {
                if (t.parent)
                    for (var i = 0; i < t.fieldsArray.length; ++i) t.fieldsArray[i].parent || t.parent.add(t.fieldsArray[i])
            }
            s.fromJSON = function(t, i) {
                return new s(t, i.oneof, i.options, i.comment)
            }, s.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return r.toObject(["options", this.options, "oneof", this.oneof, "comment", i ? this.comment : it])
            }, s.prototype.add = function(t) {
                if (!(t instanceof n)) throw TypeError("field must be a Field");
                return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), u(t.partOf = this), this
            }, s.prototype.remove = function(t) {
                if (!(t instanceof n)) throw TypeError("field must be a Field");
                var i = this.fieldsArray.indexOf(t);
                if (i < 0) throw Error(t + " is not a member of " + this);
                return this.fieldsArray.splice(i, 1), -1 < (i = this.oneof.indexOf(t.name)) && this.oneof.splice(i, 1), t.partOf = null, this
            }, s.prototype.onAdd = function(t) {
                e.prototype.onAdd.call(this, t);
                for (var i = 0; i < this.oneof.length; ++i) {
                    var n = t.get(this.oneof[i]);
                    n && !n.partOf && (n.partOf = this).fieldsArray.push(n)
                }
                u(this)
            }, s.prototype.onRemove = function(t) {
                for (var i, n = 0; n < this.fieldsArray.length; ++n)(i = this.fieldsArray[n]).parent && i.parent.remove(i);
                e.prototype.onRemove.call(this, t)
            }, s.d = function() {
                for (var n = Array(arguments.length), t = 0; t < arguments.length;) n[t] = arguments[t++];
                return function(t, i) {
                    r.decorateType(t.constructor).add(new s(i, n)), Object.defineProperty(t, i, {
                        get: r.oneOfGetter(n),
                        set: r.oneOfSetter(n)
                    })
                }
            }
        }, {
            16: 16,
            24: 24,
            37: 37
        }],
        26: [function(t, i) {
            (i.exports = tt).filename = null, tt.defaults = {
                keepCase: !1
            };
            var I = t(34),
                F = t(29),
                L = t(35),
                U = t(16),
                _ = t(20),
                q = t(25),
                R = t(15),
                z = t(33),
                Z = t(22),
                B = t(36),
                P = t(37),
                H = /^[1-9][0-9]*$/,
                X = /^-?[1-9][0-9]*$/,
                C = /^0[x][0-9a-fA-F]+$/,
                D = /^-?0[x][0-9a-fA-F]+$/,
                J = /^0[0-7]+$/,
                W = /^-?0[0-7]+$/,
                G = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
                K = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                Q = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                Y = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

            function tt(t, i, n) {
                i instanceof F || (n = i, i = new F);
                var r, e, s, u, c, o = (n = n || tt.defaults).preferTrailingComment || !1,
                    f = I(t, n.alternateCommentMode || !1),
                    l = f.next,
                    h = f.push,
                    v = f.peek,
                    d = f.skip,
                    a = f.cmnt,
                    p = !0,
                    w = !1,
                    b = i,
                    y = n.keepCase ? function(t) {
                        return t
                    } : P.camelCase;

                function m(t, i, n) {
                    var r = tt.filename;
                    return n || (tt.filename = null), Error("illegal " + (i || "token") + " '" + t + "' (" + (r ? r + ", " : "") + "line " + f.line + ")")
                }

                function g() {
                    var t, i = [];
                    do {
                        if ('"' !== (t = l()) && "'" !== t) throw m(t);
                        i.push(l()), d(t), t = v()
                    } while ('"' === t || "'" === t);
                    return i.join("")
                }

                function j(i) {
                    var n = l();
                    switch (n) {
                        case "'":
                        case '"':
                            return h(n), g();
                        case "true":
                        case "TRUE":
                            return !0;
                        case "false":
                        case "FALSE":
                            return !1
                    }
                    try {
                        return function(t, i) {
                            var n = 1;
                            "-" == t[0] && (n = -1, t = t.substring(1));
                            switch (t) {
                                case "inf":
                                case "INF":
                                case "Inf":
                                    return n * (1 / 0);
                                case "nan":
                                case "NAN":
                                case "Nan":
                                case "NaN":
                                    return NaN;
                                case "0":
                                    return 0
                            }
                            if (H.test(t)) return n * parseInt(t, 10);
                            if (C.test(t)) return n * parseInt(t, 16);
                            if (J.test(t)) return n * parseInt(t, 8);
                            if (G.test(t)) return n * parseFloat(t);
                            throw m(t, "number", i)
                        }(n, !0)
                    } catch (t) {
                        if (i && Q.test(n)) return n;
                        throw m(n, "value")
                    }
                }

                function k(t, i) {
                    for (var n, r; !i || '"' !== (n = v()) && "'" !== n ? t.push([r = E(l()), d("to", !0) ? E(l()) : r]) : t.push(g()), d(",", !0););
                    d(";")
                }

                function E(t, i) {
                    switch (t) {
                        case "max":
                        case "MAX":
                        case "Max":
                            return 536870911;
                        case "0":
                            return 0
                    }
                    if (!i && "-" == t[0]) throw m(t, "id");
                    if (X.test(t)) return parseInt(t, 10);
                    if (D.test(t)) return parseInt(t, 16);
                    if (W.test(t)) return parseInt(t, 8);
                    throw m(t, "id")
                }

                function O() {
                    if (r !== it) throw m("package");
                    if (r = l(), !Q.test(r)) throw m(r, "name");
                    b = b.define(r), d(";")
                }

                function A() {
                    var t, i = v();
                    switch (i) {
                        case "weak":
                            t = s = s || [], l();
                            break;
                        case "public":
                            l();
                        default:
                            t = e = e || []
                    }
                    i = g(), d(";"), t.push(i)
                }

                function x() {
                    if (d("="), u = g(), !(w = "proto3" === u) && "proto2" !== u) throw m(u, "syntax");
                    d(";")
                }

                function T(t, i) {
                    switch (i) {
                        case "option":
                            return V(t, i), d(";"), 1;
                        case "message":
                            return function(t, i) {
                                if (!K.test(i = l())) throw m(i, "type name");
                                var n = new L(i);
                                S(n, function(t) {
                                    if (!T(n, t)) switch (t) {
                                        case "map":
                                            ! function(t) {
                                                d("<");
                                                var i = l();
                                                if (B.mapKey[i] === it) throw m(i, "type");
                                                d(",");
                                                var n = l();
                                                if (!Q.test(n)) throw m(n, "type");
                                                d(">");
                                                var r = l();
                                                if (!K.test(r)) throw m(r, "name");
                                                d("=");
                                                var e = new _(y(r), E(l()), i, n);
                                                S(e, function(t) {
                                                    if ("option" !== t) throw m(t);
                                                    V(e, t), d(";")
                                                }, function() {
                                                    M(e)
                                                }), t.add(e)
                                            }(n);
                                            break;
                                        case "required":
                                        case "optional":
                                        case "repeated":
                                            N(n, t);
                                            break;
                                        case "oneof":
                                            ! function(t, i) {
                                                if (!K.test(i = l())) throw m(i, "name");
                                                var n = new q(y(i));
                                                S(n, function(t) {
                                                    "option" === t ? (V(n, t), d(";")) : (h(t), N(n, "optional"))
                                                }), t.add(n)
                                            }(n, t);
                                            break;
                                        case "extensions":
                                            k(n.extensions || (n.extensions = []));
                                            break;
                                        case "reserved":
                                            k(n.reserved || (n.reserved = []), !0);
                                            break;
                                        default:
                                            if (!w || !Q.test(t)) throw m(t);
                                            h(t), N(n, "optional")
                                    }
                                }), t.add(n)
                            }(t, i), 1;
                        case "enum":
                            return function(t, i) {
                                if (!K.test(i = l())) throw m(i, "name");
                                var n = new R(i);
                                S(n, function(t) {
                                    switch (t) {
                                        case "option":
                                            V(n, t), d(";");
                                            break;
                                        case "reserved":
                                            k(n.reserved || (n.reserved = []), !0);
                                            break;
                                        default:
                                            ! function(t, i) {
                                                if (!K.test(i)) throw m(i, "name");
                                                d("=");
                                                var n = E(l(), !0),
                                                    r = {};
                                                S(r, function(t) {
                                                    if ("option" !== t) throw m(t);
                                                    V(r, t), d(";")
                                                }, function() {
                                                    M(r)
                                                }), t.add(i, n, r.comment)
                                            }(n, t)
                                    }
                                }), t.add(n)
                            }(t, i), 1;
                        case "service":
                            return function(t, i) {
                                if (!K.test(i = l())) throw m(i, "service name");
                                var n = new z(i);
                                S(n, function(t) {
                                    if (!T(n, t)) {
                                        if ("rpc" !== t) throw m(t);
                                        ! function(t, i) {
                                            var n = a(),
                                                r = i;
                                            if (!K.test(i = l())) throw m(i, "name");
                                            var e, s, u, o, f = i;
                                            d("("), d("stream", !0) && (s = !0);
                                            if (!Q.test(i = l())) throw m(i);
                                            e = i, d(")"), d("returns"), d("("), d("stream", !0) && (o = !0);
                                            if (!Q.test(i = l())) throw m(i);
                                            u = i, d(")");
                                            var h = new Z(f, r, e, u, s, o);
                                            h.comment = n, S(h, function(t) {
                                                if ("option" !== t) throw m(t);
                                                V(h, t), d(";")
                                            }), t.add(h)
                                        }(n, t)
                                    }
                                }), t.add(n)
                            }(t, i), 1;
                        case "extend":
                            return function(i, t) {
                                if (!Q.test(t = l())) throw m(t, "reference");
                                var n = t;
                                S(null, function(t) {
                                    switch (t) {
                                        case "required":
                                        case "repeated":
                                        case "optional":
                                            N(i, t, n);
                                            break;
                                        default:
                                            if (!w || !Q.test(t)) throw m(t);
                                            h(t), N(i, "optional", n)
                                    }
                                })
                            }(t, i), 1
                    }
                }

                function S(t, i, n) {
                    var r = f.line;
                    if (t && ("string" != typeof t.comment && (t.comment = a()), t.filename = tt.filename), d("{", !0)) {
                        for (var e;
                            "}" !== (e = l());) i(e);
                        d(";", !0)
                    } else n && n(), d(";"), t && ("string" != typeof t.comment || o) && (t.comment = a(r) || t.comment)
                }

                function N(t, i, n) {
                    var r = l();
                    if ("group" !== r) {
                        if (!Q.test(r)) throw m(r, "type");
                        var e = l();
                        if (!K.test(e)) throw m(e, "name");
                        e = y(e), d("=");
                        var s = new U(e, E(l()), r, i, n);
                        S(s, function(t) {
                            if ("option" !== t) throw m(t);
                            V(s, t), d(";")
                        }, function() {
                            M(s)
                        }), t.add(s), w || !s.repeated || B.packed[r] === it && B.basic[r] !== it || s.setOption("packed", !1, !0)
                    } else ! function(t, i) {
                        var n = l();
                        if (!K.test(n)) throw m(n, "name");
                        var r = P.lcFirst(n);
                        n === r && (n = P.ucFirst(n));
                        d("=");
                        var e = E(l()),
                            s = new L(n);
                        s.group = !0;
                        var u = new U(r, e, n, i);
                        u.filename = tt.filename, S(s, function(t) {
                            switch (t) {
                                case "option":
                                    V(s, t), d(";");
                                    break;
                                case "required":
                                case "optional":
                                case "repeated":
                                    N(s, t);
                                    break;
                                default:
                                    throw m(t)
                            }
                        }), t.add(s).add(u)
                    }(t, i)
                }

                function V(t, i) {
                    var n = d("(", !0);
                    if (!Q.test(i = l())) throw m(i, "name");
                    var r, e = i,
                        s = e;
                    n && (d(")"), s = e = "(" + e + ")", i = v(), Y.test(i) && (r = i.substr(1), e += i, l())), d("=");
                    var u, o, f, h, a = function t(i, n) {
                        if (d("{", !0)) {
                            for (var r = {}; !d("}", !0);) {
                                if (!K.test(c = l())) throw m(c, "name");
                                var e, s = c;
                                "{" === v() ? e = t(i, n + "." + c) : (d(":"), "{" === v() ? e = t(i, n + "." + c) : (e = j(!0), $(i, n + "." + c, e)));
                                var u = r[s];
                                u && (e = [].concat(u).concat(e)), r[s] = e, d(",", !0)
                            }
                            return r
                        }
                        var o = j(!0);
                        $(i, n, o);
                        return o
                    }(t, e);
                    o = s, f = a, h = r, (u = t).setParsedOption && u.setParsedOption(o, f, h)
                }

                function $(t, i, n) {
                    t.setOption && t.setOption(i, n)
                }

                function M(t) {
                    if (d("[", !0)) {
                        for (; V(t, "option"), d(",", !0););
                        d("]")
                    }
                    return t
                }
                for (; null !== (c = l());) switch (c) {
                    case "package":
                        if (!p) throw m(c);
                        O();
                        break;
                    case "import":
                        if (!p) throw m(c);
                        A();
                        break;
                    case "syntax":
                        if (!p) throw m(c);
                        x();
                        break;
                    case "option":
                        V(b, c), d(";");
                        break;
                    default:
                        if (T(b, c)) {
                            p = !1;
                            continue
                        }
                        throw m(c)
                }
                return tt.filename = null, {
                    package: r,
                    imports: e,
                    weakImports: s,
                    syntax: u,
                    root: i
                }
            }
        }, {
            15: 15,
            16: 16,
            20: 20,
            22: 22,
            25: 25,
            29: 29,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37
        }],
        27: [function(t, i) {
            i.exports = o;
            var n, r = t(39),
                e = r.LongBits,
                s = r.utf8;

            function u(t, i) {
                return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len)
            }

            function o(t) {
                this.buf = t, this.pos = 0, this.len = t.length
            }

            function f() {
                return r.Buffer ? function(t) {
                    return (o.create = function(t) {
                        return r.Buffer.isBuffer(t) ? new n(t) : a(t)
                    })(t)
                } : a
            }
            var h, a = "undefined" != typeof Uint8Array ? function(t) {
                if (t instanceof Uint8Array || Array.isArray(t)) return new o(t);
                throw Error("illegal buffer")
            } : function(t) {
                if (Array.isArray(t)) return new o(t);
                throw Error("illegal buffer")
            };

            function c() {
                var t = new e(0, 0),
                    i = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; i < 3; ++i) {
                        if (this.pos >= this.len) throw u(this);
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0, t
                }
                for (; i < 4; ++i)
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t;
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
                if (i = 0, 4 < this.len - this.pos) {
                    for (; i < 5; ++i)
                        if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
                } else
                    for (; i < 5; ++i) {
                        if (this.pos >= this.len) throw u(this);
                        if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                throw Error("invalid varint encoding")
            }

            function l(t, i) {
                return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0
            }

            function v() {
                if (this.pos + 8 > this.len) throw u(this, 8);
                return new e(l(this.buf, this.pos += 4), l(this.buf, this.pos += 4))
            }
            o.create = f(), o.prototype.c = r.Array.prototype.subarray || r.Array.prototype.slice, o.prototype.uint32 = (h = 4294967295, function() {
                if (h = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return h;
                if (h = (h | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return h;
                if (h = (h | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return h;
                if (h = (h | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return h;
                if (h = (h | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return h;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, u(this, 10);
                return h
            }), o.prototype.int32 = function() {
                return 0 | this.uint32()
            }, o.prototype.sint32 = function() {
                var t = this.uint32();
                return t >>> 1 ^ -(1 & t) | 0
            }, o.prototype.bool = function() {
                return 0 !== this.uint32()
            }, o.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return l(this.buf, this.pos += 4)
            }, o.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return 0 | l(this.buf, this.pos += 4)
            }, o.prototype.float = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                var t = r.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, t
            }, o.prototype.double = function() {
                if (this.pos + 8 > this.len) throw u(this, 4);
                var t = r.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, t
            }, o.prototype.bytes = function() {
                var t = this.uint32(),
                    i = this.pos,
                    n = this.pos + t;
                if (n > this.len) throw u(this, t);
                return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, n) : i === n ? new this.buf.constructor(0) : this.c.call(this.buf, i, n)
            }, o.prototype.string = function() {
                var t = this.bytes();
                return s.read(t, 0, t.length)
            }, o.prototype.skip = function(t) {
                if ("number" == typeof t) {
                    if (this.pos + t > this.len) throw u(this, t);
                    this.pos += t
                } else
                    do {
                        if (this.pos >= this.len) throw u(this)
                    } while (128 & this.buf[this.pos++]);
                return this
            }, o.prototype.skipType = function(t) {
                switch (t) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + t + " at offset " + this.pos)
                }
                return this
            }, o.o = function(t) {
                n = t, o.create = f(), n.o();
                var i = r.Long ? "toLong" : "toNumber";
                r.merge(o.prototype, {
                    int64: function() {
                        return c.call(this)[i](!1)
                    },
                    uint64: function() {
                        return c.call(this)[i](!0)
                    },
                    sint64: function() {
                        return c.call(this).zzDecode()[i](!1)
                    },
                    fixed64: function() {
                        return v.call(this)[i](!0)
                    },
                    sfixed64: function() {
                        return v.call(this)[i](!1)
                    }
                })
            }
        }, {
            39: 39
        }],
        28: [function(t, i) {
            i.exports = e;
            var n = t(27);
            (e.prototype = Object.create(n.prototype)).constructor = e;
            var r = t(39);

            function e(t) {
                n.call(this, t)
            }
            e.o = function() {
                r.Buffer && (e.prototype.c = r.Buffer.prototype.slice)
            }, e.prototype.string = function() {
                var t = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len))
            }, e.o()
        }, {
            27: 27,
            39: 39
        }],
        29: [function(t, i) {
            i.exports = n;
            var r = t(23);
            ((n.prototype = Object.create(r.prototype)).constructor = n).className = "Root";
            var e, v, d, s = t(16),
                u = t(15),
                o = t(25),
                p = t(37);

            function n(t) {
                r.call(this, "", t), this.deferred = [], this.files = []
            }

            function w() {}
            n.fromJSON = function(t, i) {
                return i = i || new n, t.options && i.setOptions(t.options), i.addJSON(t.nested)
            }, n.prototype.resolvePath = p.path.resolve, n.prototype.fetch = p.fetch, n.prototype.load = function t(i, s, e) {
                "function" == typeof s && (e = s, s = it);
                var u = this;
                if (!e) return p.asPromise(t, u, i, s);
                var o = e === w;

                function f(t, i) {
                    if (e) {
                        var n = e;
                        if (e = null, o) throw t;
                        n(t, i)
                    }
                }

                function h(t) {
                    var i = t.lastIndexOf("google/protobuf/");
                    if (-1 < i) {
                        var n = t.substring(i);
                        if (n in d) return n
                    }
                    return null
                }

                function a(t, i) {
                    try {
                        if (p.isString(i) && "{" == i[0] && (i = JSON.parse(i)), p.isString(i)) {
                            v.filename = t;
                            var n, r = v(i, u, s),
                                e = 0;
                            if (r.imports)
                                for (; e < r.imports.length; ++e)(n = h(r.imports[e]) || u.resolvePath(t, r.imports[e])) && c(n);
                            if (r.weakImports)
                                for (e = 0; e < r.weakImports.length; ++e)(n = h(r.weakImports[e]) || u.resolvePath(t, r.weakImports[e])) && c(n, !0)
                        } else u.setOptions(i.options).addJSON(i.nested)
                    } catch (t) {
                        f(t)
                    }
                    o || l || f(null, u)
                }

                function c(n, r) {
                    if (!~u.files.indexOf(n))
                        if (u.files.push(n), n in d) o ? a(n, d[n]) : (++l, setTimeout(function() {
                            --l, a(n, d[n])
                        }));
                        else if (o) {
                        var t;
                        try {
                            t = p.fs.readFileSync(n).toString("utf8")
                        } catch (t) {
                            return void(r || f(t))
                        }
                        a(n, t)
                    } else ++l, u.fetch(n, function(t, i) {
                        --l, e && (t ? r ? l || f(null, u) : f(t) : a(n, i))
                    })
                }
                var l = 0;
                p.isString(i) && (i = [i]);
                for (var n, r = 0; r < i.length; ++r)(n = u.resolvePath("", i[r])) && c(n);
                return o ? u : (l || f(null, u), it)
            }, n.prototype.loadSync = function(t, i) {
                if (!p.isNode) throw Error("not supported");
                return this.load(t, i, w)
            }, n.prototype.resolveAll = function() {
                if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(t) {
                    return "'extend " + t.extend + "' in " + t.parent.fullName
                }).join(", "));
                return r.prototype.resolveAll.call(this)
            };
            var f = /^[A-Z]/;

            function h(t, i) {
                var n = i.parent.lookup(i.extend);
                if (n) {
                    var r = new s(i.fullName, i.id, i.type, i.rule, it, i.options);
                    return (r.declaringField = i).extensionField = r, n.add(r), 1
                }
            }
            n.prototype.h = function(t) {
                if (t instanceof s) t.extend === it || t.extensionField || h(0, t) || this.deferred.push(t);
                else if (t instanceof u) f.test(t.name) && (t.parent[t.name] = t.values);
                else if (!(t instanceof o)) {
                    if (t instanceof e)
                        for (var i = 0; i < this.deferred.length;) h(0, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
                    for (var n = 0; n < t.nestedArray.length; ++n) this.h(t.f[n]);
                    f.test(t.name) && (t.parent[t.name] = t)
                }
            }, n.prototype.a = function(t) {
                if (t instanceof s) {
                    if (t.extend !== it)
                        if (t.extensionField) t.extensionField.parent.remove(t.extensionField), t.extensionField = null;
                        else {
                            var i = this.deferred.indexOf(t); - 1 < i && this.deferred.splice(i, 1)
                        }
                } else if (t instanceof u) f.test(t.name) && delete t.parent[t.name];
                else if (t instanceof r) {
                    for (var n = 0; n < t.nestedArray.length; ++n) this.a(t.f[n]);
                    f.test(t.name) && delete t.parent[t.name]
                }
            }, n.o = function(t, i, n) {
                e = t, v = i, d = n
            }
        }, {
            15: 15,
            16: 16,
            23: 23,
            25: 25,
            37: 37
        }],
        30: [function(t, i) {
            i.exports = {}
        }, {}],
        31: [function(t, i, n) {
            n.Service = t(32)
        }, {
            32: 32
        }],
        32: [function(t, i) {
            i.exports = n;
            var o = t(39);

            function n(t, i, n) {
                if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
                o.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!n
            }((n.prototype = Object.create(o.EventEmitter.prototype)).constructor = n).prototype.rpcCall = function t(n, i, r, e, s) {
                if (!e) throw TypeError("request must be specified");
                var u = this;
                if (!s) return o.asPromise(t, u, n, i, r, e);
                if (!u.rpcImpl) return setTimeout(function() {
                    s(Error("already ended"))
                }, 0), it;
                try {
                    return u.rpcImpl(n, i[u.requestDelimited ? "encodeDelimited" : "encode"](e).finish(), function(t, i) {
                        if (t) return u.emit("error", t, n), s(t);
                        if (null === i) return u.end(!0), it;
                        if (!(i instanceof r)) try {
                            i = r[u.responseDelimited ? "decodeDelimited" : "decode"](i)
                        } catch (t) {
                            return u.emit("error", t, n), s(t)
                        }
                        return u.emit("data", i, n), s(null, i)
                    })
                } catch (t) {
                    return u.emit("error", t, n), setTimeout(function() {
                        s(t)
                    }, 0), it
                }
            }, n.prototype.end = function(t) {
                return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        }, {
            39: 39
        }],
        33: [function(t, i) {
            i.exports = u;
            var r = t(23);
            ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Service";
            var s = t(22),
                o = t(37),
                f = t(31);

            function u(t, i) {
                r.call(this, t, i), this.methods = {}, this.l = null
            }

            function n(t) {
                return t.l = null, t
            }
            u.fromJSON = function(t, i) {
                var n = new u(t, i.options);
                if (i.methods)
                    for (var r = Object.keys(i.methods), e = 0; e < r.length; ++e) n.add(s.fromJSON(r[e], i.methods[r[e]]));
                return i.nested && n.addJSON(i.nested), n.comment = i.comment, n
            }, u.prototype.toJSON = function(t) {
                var i = r.prototype.toJSON.call(this, t),
                    n = !!t && !!t.keepComments;
                return o.toObject(["options", i && i.options || it, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", i && i.nested || it, "comment", n ? this.comment : it])
            }, Object.defineProperty(u.prototype, "methodsArray", {
                get: function() {
                    return this.l || (this.l = o.toArray(this.methods))
                }
            }), u.prototype.get = function(t) {
                return this.methods[t] || r.prototype.get.call(this, t)
            }, u.prototype.resolveAll = function() {
                for (var t = this.methodsArray, i = 0; i < t.length; ++i) t[i].resolve();
                return r.prototype.resolve.call(this)
            }, u.prototype.add = function(t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                return t instanceof s ? n((this.methods[t.name] = t).parent = this) : r.prototype.add.call(this, t)
            }, u.prototype.remove = function(t) {
                if (t instanceof s) {
                    if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.methods[t.name], t.parent = null, n(this)
                }
                return r.prototype.remove.call(this, t)
            }, u.prototype.create = function(t, i, n) {
                for (var r, e = new f.Service(t, i, n), s = 0; s < this.methodsArray.length; ++s) {
                    var u = o.lcFirst((r = this.l[s]).resolve().name).replace(/[^$\w_]/g, "");
                    e[u] = o.codegen(["r", "c"], o.isReserved(u) ? u + "_" : u)("return this.rpcCall(m,q,s,r,c)")({
                        m: r,
                        q: r.resolvedRequestType.ctor,
                        s: r.resolvedResponseType.ctor
                    })
                }
                return e
            }
        }, {
            22: 22,
            23: 23,
            31: 31,
            37: 37
        }],
        34: [function(t, i) {
            i.exports = e;
            var A = /[\s{}=;:[\],'"()<>]/g,
                x = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                T = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                S = /^ *[*/]+ */,
                N = /^\s*\*?\/*/,
                V = /\n/g,
                $ = /\s/,
                n = /\\(.?)/g,
                r = {
                    0: "\0",
                    r: "\r",
                    n: "\n",
                    t: "\t"
                };

            function M(t) {
                return t.replace(n, function(t, i) {
                    switch (i) {
                        case "\\":
                        case "":
                            return i;
                        default:
                            return r[i] || ""
                    }
                })
            }

            function e(f, h) {
                f = f.toString();
                var a = 0,
                    c = f.length,
                    l = 1,
                    o = null,
                    v = null,
                    d = 0,
                    p = !1,
                    w = !1,
                    b = [],
                    y = null;

                function m(t) {
                    return Error("illegal " + t + " (line " + l + ")")
                }

                function g(t) {
                    return f[0 | t]
                }

                function j(t, i, n) {
                    o = f[0 | t++], d = l, p = !1, w = n;
                    var r, e = t - (h ? 2 : 3);
                    do {
                        if (--e < 0 || "\n" == (r = f[0 | e])) {
                            p = !0;
                            break
                        }
                    } while (" " === r || "\t" === r);
                    for (var s = f.substring(t, i).split(V), u = 0; u < s.length; ++u) s[u] = s[u].replace(h ? N : S, "").trim();
                    v = s.join("\n").trim()
                }

                function k(t) {
                    var i = E(t),
                        n = f.substring(t, i);
                    return /^\s*\/{1,2}/.test(n)
                }

                function E(t) {
                    for (var i = t; i < c && "\n" !== g(i);) i++;
                    return i
                }

                function r() {
                    if (0 < b.length) return b.shift();
                    if (y) return function() {
                        var t = "'" === y ? T : x;
                        t.lastIndex = a - 1;
                        var i = t.exec(f);
                        if (!i) throw m("string");
                        return a = t.lastIndex, O(y), y = null, M(i[1])
                    }();
                    var t, i, n, r, e, s = 0 === a;
                    do {
                        if (a === c) return null;
                        for (t = !1; $.test(n = g(a));)
                            if ("\n" === n && (s = !0, ++l), ++a === c) return null;
                        if ("/" === g(a)) {
                            if (++a === c) throw m("comment");
                            if ("/" === g(a))
                                if (h) {
                                    if (e = !1, k(r = a)) {
                                        e = !0;
                                        do {
                                            if ((a = E(a)) === c) break;
                                            a++
                                        } while (k(a))
                                    } else a = Math.min(c, E(a) + 1);
                                    e && j(r, a, s), l++, t = !0
                                } else {
                                    for (e = "/" === g(r = a + 1);
                                        "\n" !== g(++a);)
                                        if (a === c) return null;
                                    ++a, e && j(r, a - 1, s), ++l, t = !0
                                }
                            else {
                                if ("*" !== (n = g(a))) return "/";
                                r = a + 1, e = h || "*" === g(r);
                                do {
                                    if ("\n" === n && ++l, ++a === c) throw m("comment");
                                    i = n, n = g(a)
                                } while ("*" !== i || "/" !== n);
                                ++a, e && j(r, a - 2, s), t = !0
                            }
                        }
                    } while (t);
                    var u = a;
                    if (A.lastIndex = 0, !A.test(g(u++)))
                        for (; u < c && !A.test(g(u));) ++u;
                    var o = f.substring(a, a = u);
                    return '"' != o && "'" != o || (y = o), o
                }

                function O(t) {
                    b.push(t)
                }

                function e() {
                    if (!b.length) {
                        var t = r();
                        if (null === t) return null;
                        O(t)
                    }
                    return b[0]
                }
                return Object.defineProperty({
                    next: r,
                    peek: e,
                    push: O,
                    skip: function(t, i) {
                        var n = e();
                        if (n === t) return r(), !0;
                        if (!i) throw m("token '" + n + "', '" + t + "' expected");
                        return !1
                    },
                    cmnt: function(t) {
                        var i = null;
                        return t === it ? d === l - 1 && (h || "*" === o || p) && (i = w ? v : null) : (d < t && e(), d !== t || p || !h && "/" !== o || (i = w ? null : v)), i
                    }
                }, "line", {
                    get: function() {
                        return l
                    }
                })
            }
            e.unescape = M
        }, {}],
        35: [function(t, i) {
            i.exports = m;
            var u = t(23);
            ((m.prototype = Object.create(u.prototype)).constructor = m).className = "Type";
            var o = t(15),
                f = t(25),
                h = t(16),
                a = t(20),
                c = t(33),
                e = t(21),
                s = t(27),
                l = t(42),
                v = t(37),
                d = t(14),
                p = t(13),
                w = t(40),
                b = t(12),
                y = t(41);

            function m(t, i) {
                u.call(this, t, i), this.fields = {}, this.oneofs = it, this.extensions = it, this.reserved = it, this.group = it, this.v = null, this.e = null, this.p = null, this.w = null
            }

            function n(t) {
                return t.v = t.e = t.p = null, delete t.encode, delete t.decode, delete t.verify, t
            }
            Object.defineProperties(m.prototype, {
                fieldsById: {
                    get: function() {
                        if (this.v) return this.v;
                        this.v = {};
                        for (var t = Object.keys(this.fields), i = 0; i < t.length; ++i) {
                            var n = this.fields[t[i]],
                                r = n.id;
                            if (this.v[r]) throw Error("duplicate id " + r + " in " + this);
                            this.v[r] = n
                        }
                        return this.v
                    }
                },
                fieldsArray: {
                    get: function() {
                        return this.e || (this.e = v.toArray(this.fields))
                    }
                },
                oneofsArray: {
                    get: function() {
                        return this.p || (this.p = v.toArray(this.oneofs))
                    }
                },
                ctor: {
                    get: function() {
                        return this.w || (this.ctor = m.generateConstructor(this)())
                    },
                    set: function(t) {
                        var i = t.prototype;
                        i instanceof e || ((t.prototype = new e).constructor = t, v.merge(t.prototype, i)), t.$type = t.prototype.$type = this, v.merge(t, e, !0), this.w = t;
                        for (var n = 0; n < this.fieldsArray.length; ++n) this.e[n].resolve();
                        var r = {};
                        for (n = 0; n < this.oneofsArray.length; ++n) r[this.p[n].resolve().name] = {
                            get: v.oneOfGetter(this.p[n].oneof),
                            set: v.oneOfSetter(this.p[n].oneof)
                        };
                        n && Object.defineProperties(t.prototype, r)
                    }
                }
            }), m.generateConstructor = function(t) {
                for (var i, n = v.codegen(["p"], t.name), r = 0; r < t.fieldsArray.length; ++r)(i = t.e[r]).map ? n("this%s={}", v.safeProp(i.name)) : i.repeated && n("this%s=[]", v.safeProp(i.name));
                return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
            }, m.fromJSON = function(t, i) {
                var n = new m(t, i.options);
                n.extensions = i.extensions, n.reserved = i.reserved;
                for (var r = Object.keys(i.fields), e = 0; e < r.length; ++e) n.add((void 0 !== i.fields[r[e]].keyType ? a.fromJSON : h.fromJSON)(r[e], i.fields[r[e]]));
                if (i.oneofs)
                    for (r = Object.keys(i.oneofs), e = 0; e < r.length; ++e) n.add(f.fromJSON(r[e], i.oneofs[r[e]]));
                if (i.nested)
                    for (r = Object.keys(i.nested), e = 0; e < r.length; ++e) {
                        var s = i.nested[r[e]];
                        n.add((s.id !== it ? h.fromJSON : s.fields !== it ? m.fromJSON : s.values !== it ? o.fromJSON : s.methods !== it ? c.fromJSON : u.fromJSON)(r[e], s))
                    }
                return i.extensions && i.extensions.length && (n.extensions = i.extensions), i.reserved && i.reserved.length && (n.reserved = i.reserved), i.group && (n.group = !0), i.comment && (n.comment = i.comment), n
            }, m.prototype.toJSON = function(t) {
                var i = u.prototype.toJSON.call(this, t),
                    n = !!t && !!t.keepComments;
                return v.toObject(["options", i && i.options || it, "oneofs", u.arrayToJSON(this.oneofsArray, t), "fields", u.arrayToJSON(this.fieldsArray.filter(function(t) {
                    return !t.declaringField
                }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : it, "reserved", this.reserved && this.reserved.length ? this.reserved : it, "group", this.group || it, "nested", i && i.nested || it, "comment", n ? this.comment : it])
            }, m.prototype.resolveAll = function() {
                for (var t = this.fieldsArray, i = 0; i < t.length;) t[i++].resolve();
                var n = this.oneofsArray;
                for (i = 0; i < n.length;) n[i++].resolve();
                return u.prototype.resolveAll.call(this)
            }, m.prototype.get = function(t) {
                return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null
            }, m.prototype.add = function(t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                if (t instanceof h && t.extend === it) {
                    if (this.v ? this.v[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
                    if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
                    if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
                    return t.parent && t.parent.remove(t), (this.fields[t.name] = t).message = this, t.onAdd(this), n(this)
                }
                return t instanceof f ? (this.oneofs || (this.oneofs = {}), (this.oneofs[t.name] = t).onAdd(this), n(this)) : u.prototype.add.call(this, t)
            }, m.prototype.remove = function(t) {
                if (t instanceof h && t.extend === it) {
                    if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.fields[t.name], t.parent = null, t.onRemove(this), n(this)
                }
                if (t instanceof f) {
                    if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), n(this)
                }
                return u.prototype.remove.call(this, t)
            }, m.prototype.isReservedId = function(t) {
                return u.isReservedId(this.reserved, t)
            }, m.prototype.isReservedName = function(t) {
                return u.isReservedName(this.reserved, t)
            }, m.prototype.create = function(t) {
                return new this.ctor(t)
            }, m.prototype.setup = function() {
                for (var t = this.fullName, i = [], n = 0; n < this.fieldsArray.length; ++n) i.push(this.e[n].resolve().resolvedType);
                this.encode = d(this)({
                    Writer: l,
                    types: i,
                    util: v
                }), this.decode = p(this)({
                    Reader: s,
                    types: i,
                    util: v
                }), this.verify = w(this)({
                    types: i,
                    util: v
                }), this.fromObject = b.fromObject(this)({
                    types: i,
                    util: v
                }), this.toObject = b.toObject(this)({
                    types: i,
                    util: v
                });
                var r = y[t];
                if (r) {
                    var e = Object.create(this);
                    e.fromObject = this.fromObject, this.fromObject = r.fromObject.bind(e), e.toObject = this.toObject, this.toObject = r.toObject.bind(e)
                }
                return this
            }, m.prototype.encode = function(t, i) {
                return this.setup().encode(t, i)
            }, m.prototype.encodeDelimited = function(t, i) {
                return this.encode(t, i && i.len ? i.fork() : i).ldelim()
            }, m.prototype.decode = function(t, i) {
                return this.setup().decode(t, i)
            }, m.prototype.decodeDelimited = function(t) {
                return t instanceof s || (t = s.create(t)), this.decode(t, t.uint32())
            }, m.prototype.verify = function(t) {
                return this.setup().verify(t)
            }, m.prototype.fromObject = function(t) {
                return this.setup().fromObject(t)
            }, m.prototype.toObject = function(t, i) {
                return this.setup().toObject(t, i)
            }, m.d = function(i) {
                return function(t) {
                    v.decorateType(t, i)
                }
            }
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            20: 20,
            21: 21,
            23: 23,
            25: 25,
            27: 27,
            33: 33,
            37: 37,
            40: 40,
            41: 41,
            42: 42
        }],
        36: [function(t, i, n) {
            var r = n,
                e = t(37),
                s = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

            function u(t, i) {
                var n = 0,
                    r = {};
                for (i |= 0; n < t.length;) r[s[n + i]] = t[n++];
                return r
            }
            r.basic = u([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = u([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", e.emptyArray, null]), r.long = u([0, 0, 0, 1, 1], 7), r.mapKey = u([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = u([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
        }, {
            37: 37
        }],
        37: [function(r, t) {
            var e, n, s = t.exports = r(39),
                i = r(30);
            s.codegen = r(3), s.fetch = r(5), s.path = r(8), s.fs = s.inquire("fs"), s.toArray = function(t) {
                if (t) {
                    for (var i = Object.keys(t), n = Array(i.length), r = 0; r < i.length;) n[r] = t[i[r++]];
                    return n
                }
                return []
            }, s.toObject = function(t) {
                for (var i = {}, n = 0; n < t.length;) {
                    var r = t[n++],
                        e = t[n++];
                    e !== it && (i[r] = e)
                }
                return i
            };
            var u = /\\/g,
                o = /"/g;
            s.isReserved = function(t) {
                return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
            }, s.safeProp = function(t) {
                return !/^[$\w_]+$/.test(t) || s.isReserved(t) ? '["' + t.replace(u, "\\\\").replace(o, '\\"') + '"]' : "." + t
            }, s.ucFirst = function(t) {
                return t[0].toUpperCase() + t.substring(1)
            };
            var f = /_([a-z])/g;
            s.camelCase = function(t) {
                return t.substring(0, 1) + t.substring(1).replace(f, function(t, i) {
                    return i.toUpperCase()
                })
            }, s.compareFieldsById = function(t, i) {
                return t.id - i.id
            }, s.decorateType = function(t, i) {
                if (t.$type) return i && t.$type.name !== i && (s.decorateRoot.remove(t.$type), t.$type.name = i, s.decorateRoot.add(t.$type)), t.$type;
                var n = new(e = e || r(35))(i || t.name);
                return s.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
                    value: n,
                    enumerable: !1
                }), Object.defineProperty(t.prototype, "$type", {
                    value: n,
                    enumerable: !1
                }), n
            };
            var h = 0;
            s.decorateEnum = function(t) {
                if (t.$type) return t.$type;
                var i = new(n = n || r(15))("Enum" + h++, t);
                return s.decorateRoot.add(i), Object.defineProperty(t, "$type", {
                    value: i,
                    enumerable: !1
                }), i
            }, s.setProperty = function(t, i, n) {
                if ("object" != typeof t) throw TypeError("dst must be an object");
                if (!i) throw TypeError("path must be specified");
                return function t(i, n, r) {
                    var e = n.shift();
                    if (0 < n.length) i[e] = t(i[e] || {}, n, r);
                    else {
                        var s = i[e];
                        s && (r = [].concat(s).concat(r)), i[e] = r
                    }
                    return i
                }(t, i = i.split("."), n)
            }, Object.defineProperty(s, "decorateRoot", {
                get: function() {
                    return i.decorated || (i.decorated = new(r(29)))
                }
            })
        }, {
            15: 15,
            29: 29,
            3: 3,
            30: 30,
            35: 35,
            39: 39,
            5: 5,
            8: 8
        }],
        38: [function(t, i) {
            i.exports = e;
            var n = t(39);

            function e(t, i) {
                this.lo = t >>> 0, this.hi = i >>> 0
            }
            var s = e.zero = new e(0, 0);
            s.toNumber = function() {
                return 0
            }, s.zzEncode = s.zzDecode = function() {
                return this
            }, s.length = function() {
                return 1
            };
            var r = e.zeroHash = "\0\0\0\0\0\0\0\0";
            e.fromNumber = function(t) {
                if (0 === t) return s;
                var i = t < 0;
                i && (t = -t);
                var n = t >>> 0,
                    r = (t - n) / 4294967296 >>> 0;
                return i && (r = ~r >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++r && (r = 0))), new e(n, r)
            }, e.from = function(t) {
                if ("number" == typeof t) return e.fromNumber(t);
                if (n.isString(t)) {
                    if (!n.Long) return e.fromNumber(parseInt(t, 10));
                    t = n.Long.fromString(t)
                }
                return t.low || t.high ? new e(t.low >>> 0, t.high >>> 0) : s
            }, e.prototype.toNumber = function(t) {
                if (!t && this.hi >>> 31) {
                    var i = 1 + ~this.lo >>> 0,
                        n = ~this.hi >>> 0;
                    return i || (n = n + 1 >>> 0), -(i + 4294967296 * n)
                }
                return this.lo + 4294967296 * this.hi
            }, e.prototype.toLong = function(t) {
                return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, !!t) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!t
                }
            };
            var u = String.prototype.charCodeAt;
            e.fromHash = function(t) {
                return t === r ? s : new e((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0)
            }, e.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, e.prototype.zzEncode = function() {
                var t = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
            }, e.prototype.zzDecode = function() {
                var t = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
            }, e.prototype.length = function() {
                var t = this.lo,
                    i = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    n = this.hi >>> 24;
                return 0 == n ? 0 == i ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
            }
        }, {
            39: 39
        }],
        39: [function(t, i, n) {
            var r = n;

            function e(t, i, n) {
                for (var r = Object.keys(i), e = 0; e < r.length; ++e) t[r[e]] !== it && n || (t[r[e]] = i[r[e]]);
                return t
            }

            function s(t) {
                function n(t, i) {
                    if (!(this instanceof n)) return new n(t, i);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", {
                        value: Error().stack || ""
                    }), i && e(this, i)
                }
                return (n.prototype = Object.create(Error.prototype)).constructor = n, Object.defineProperty(n.prototype, "name", {
                    get: function() {
                        return t
                    }
                }), n.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, n
            }
            r.asPromise = t(1), r.base64 = t(2), r.EventEmitter = t(4), r.float = t(6), r.inquire = t(7), r.utf8 = t(10), r.pool = t(9), r.LongBits = t(38), r.isNode = !!("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node), r.global = r.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }, r.isString = function(t) {
                return "string" == typeof t || t instanceof String
            }, r.isObject = function(t) {
                return t && "object" == typeof t
            }, r.isset = r.isSet = function(t, i) {
                var n = t[i];
                return null != n && t.hasOwnProperty(i) && ("object" != typeof n || 0 < (Array.isArray(n) ? n.length : Object.keys(n).length))
            }, r.Buffer = function() {
                try {
                    var t = r.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (t) {
                    return null
                }
            }(), r.b = null, r.y = null, r.newBuffer = function(t) {
                return "number" == typeof t ? r.Buffer ? r.y(t) : new r.Array(t) : r.Buffer ? r.b(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
            }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(t) {
                return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash
            }, r.longFromHash = function(t, i) {
                var n = r.LongBits.fromHash(t);
                return r.Long ? r.Long.fromBits(n.lo, n.hi, i) : n.toNumber(!!i)
            }, r.merge = e, r.lcFirst = function(t) {
                return t[0].toLowerCase() + t.substring(1)
            }, r.newError = s, r.ProtocolError = s("ProtocolError"), r.oneOfGetter = function(t) {
                for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
                return function() {
                    for (var t = Object.keys(this), i = t.length - 1; - 1 < i; --i)
                        if (1 === n[t[i]] && this[t[i]] !== it && null !== this[t[i]]) return t[i]
                }
            }, r.oneOfSetter = function(n) {
                return function(t) {
                    for (var i = 0; i < n.length; ++i) n[i] !== t && delete this[n[i]]
                }
            }, r.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, r.o = function() {
                var n = r.Buffer;
                n ? (r.b = n.from !== Uint8Array.from && n.from || function(t, i) {
                    return new n(t, i)
                }, r.y = n.allocUnsafe || function(t) {
                    return new n(t)
                }) : r.b = r.y = null
            }
        }, {
            1: 1,
            10: 10,
            2: 2,
            38: 38,
            4: 4,
            6: 6,
            7: 7,
            9: 9
        }],
        40: [function(t, i) {
            i.exports = function(t) {
                var i = f.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
                    n = t.oneofsArray,
                    r = {};
                n.length && i("var p={}");
                for (var e = 0; e < t.fieldsArray.length; ++e) {
                    var s = t.e[e].resolve(),
                        u = "m" + f.safeProp(s.name);
                    if (s.optional && i("if(%s!=null&&m.hasOwnProperty(%j)){", u, s.name), s.map) i("if(!util.isObject(%s))", u)("return%j", h(s, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"), c(i, s, "k[i]"), a(i, s, e, u + "[k[i]]")("}");
                    else if (s.repeated) i("if(!Array.isArray(%s))", u)("return%j", h(s, "array"))("for(var i=0;i<%s.length;++i){", u), a(i, s, e, u + "[i]")("}");
                    else {
                        if (s.partOf) {
                            var o = f.safeProp(s.partOf.name);
                            1 === r[s.partOf.name] && i("if(p%s===1)", o)("return%j", s.partOf.name + ": multiple values"), r[s.partOf.name] = 1, i("p%s=1", o)
                        }
                        a(i, s, e, u)
                    }
                    s.optional && i("}")
                }
                return i("return null")
            };
            var u = t(15),
                f = t(37);

            function h(t, i) {
                return t.name + ": " + i + (t.repeated && "array" !== i ? "[]" : t.map && "object" !== i ? "{k:" + t.keyType + "}" : "") + " expected"
            }

            function a(t, i, n, r) {
                if (i.resolvedType)
                    if (i.resolvedType instanceof u) {
                        t("switch(%s){", r)("default:")("return%j", h(i, "enum value"));
                        for (var e = Object.keys(i.resolvedType.values), s = 0; s < e.length; ++s) t("case %i:", i.resolvedType.values[e[s]]);
                        t("break")("}")
                    } else t("{")("var e=types[%i].verify(%s);", n, r)("if(e)")("return%j+e", i.name + ".")("}");
                else switch (i.type) {
                    case "int32":
                    case "uint32":
                    case "sint32":
                    case "fixed32":
                    case "sfixed32":
                        t("if(!util.isInteger(%s))", r)("return%j", h(i, "integer"));
                        break;
                    case "int64":
                    case "uint64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", r, r, r, r)("return%j", h(i, "integer|Long"));
                        break;
                    case "float":
                    case "double":
                        t('if(typeof %s!=="number")', r)("return%j", h(i, "number"));
                        break;
                    case "bool":
                        t('if(typeof %s!=="boolean")', r)("return%j", h(i, "boolean"));
                        break;
                    case "string":
                        t("if(!util.isString(%s))", r)("return%j", h(i, "string"));
                        break;
                    case "bytes":
                        t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', r, r, r)("return%j", h(i, "buffer"))
                }
                return t
            }

            function c(t, i, n) {
                switch (i.keyType) {
                    case "int32":
                    case "uint32":
                    case "sint32":
                    case "fixed32":
                    case "sfixed32":
                        t("if(!util.key32Re.test(%s))", n)("return%j", h(i, "integer key"));
                        break;
                    case "int64":
                    case "uint64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        t("if(!util.key64Re.test(%s))", n)("return%j", h(i, "integer|Long key"));
                        break;
                    case "bool":
                        t("if(!util.key2Re.test(%s))", n)("return%j", h(i, "boolean key"))
                }
                return t
            }
        }, {
            15: 15,
            37: 37
        }],
        41: [function(t, i, n) {
            var r = n,
                u = t(21);
            r[".google.protobuf.Any"] = {
                fromObject: function(t) {
                    if (t && t["@type"]) {
                        var i = t["@type"].substring(1 + t["@type"].lastIndexOf("/")),
                            n = this.lookup(i);
                        if (n) {
                            var r = "." == t["@type"][0] ? t["@type"].substr(1) : t["@type"];
                            return ~r.indexOf("/") || (r = "/" + r), this.create({
                                type_url: r,
                                value: n.encode(n.fromObject(t)).finish()
                            })
                        }
                    }
                    return this.fromObject(t)
                },
                toObject: function(t, i) {
                    var n = "",
                        r = "";
                    if (i && i.json && t.type_url && t.value) {
                        r = t.type_url.substring(1 + t.type_url.lastIndexOf("/")), n = t.type_url.substring(0, 1 + t.type_url.lastIndexOf("/"));
                        var e = this.lookup(r);
                        e && (t = e.decode(t.value))
                    }
                    if (t instanceof this.ctor || !(t instanceof u)) return this.toObject(t, i);
                    var s = t.$type.toObject(t, i);
                    return "" === n && (n = "type.googleapis.com/"), r = n + ("." === t.$type.fullName[0] ? t.$type.fullName.substr(1) : t.$type.fullName), s["@type"] = r, s
                }
            }
        }, {
            21: 21
        }],
        42: [function(t, i) {
            i.exports = a;
            var n, r = t(39),
                e = r.LongBits,
                s = r.base64,
                u = r.utf8;

            function o(t, i, n) {
                this.fn = t, this.len = i, this.next = it, this.val = n
            }

            function f() {}

            function h(t) {
                this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
            }

            function a() {
                this.len = 0, this.head = new o(f, 0, 0), this.tail = this.head, this.states = null
            }

            function c() {
                return r.Buffer ? function() {
                    return (a.create = function() {
                        return new n
                    })()
                } : function() {
                    return new a
                }
            }

            function l(t, i, n) {
                i[n] = 255 & t
            }

            function v(t, i) {
                this.len = t, this.next = it, this.val = i
            }

            function d(t, i, n) {
                for (; t.hi;) i[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
                for (; 127 < t.lo;) i[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                i[n++] = t.lo
            }

            function p(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
            }
            a.create = c(), a.alloc = function(t) {
                return new r.Array(t)
            }, r.Array !== Array && (a.alloc = r.pool(a.alloc, r.Array.prototype.subarray)), a.prototype.g = function(t, i, n) {
                return this.tail = this.tail.next = new o(t, i, n), this.len += i, this
            }, (v.prototype = Object.create(o.prototype)).fn = function(t, i, n) {
                for (; 127 < t;) i[n++] = 127 & t | 128, t >>>= 7;
                i[n] = t
            }, a.prototype.uint32 = function(t) {
                return this.len += (this.tail = this.tail.next = new v((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
            }, a.prototype.int32 = function(t) {
                return t < 0 ? this.g(d, 10, e.fromNumber(t)) : this.uint32(t)
            }, a.prototype.sint32 = function(t) {
                return this.uint32((t << 1 ^ t >> 31) >>> 0)
            }, a.prototype.int64 = a.prototype.uint64 = function(t) {
                var i = e.from(t);
                return this.g(d, i.length(), i)
            }, a.prototype.sint64 = function(t) {
                var i = e.from(t).zzEncode();
                return this.g(d, i.length(), i)
            }, a.prototype.bool = function(t) {
                return this.g(l, 1, t ? 1 : 0)
            }, a.prototype.sfixed32 = a.prototype.fixed32 = function(t) {
                return this.g(p, 4, t >>> 0)
            }, a.prototype.sfixed64 = a.prototype.fixed64 = function(t) {
                var i = e.from(t);
                return this.g(p, 4, i.lo).g(p, 4, i.hi)
            }, a.prototype.float = function(t) {
                return this.g(r.float.writeFloatLE, 4, t)
            }, a.prototype.double = function(t) {
                return this.g(r.float.writeDoubleLE, 8, t)
            };
            var w = r.Array.prototype.set ? function(t, i, n) {
                i.set(t, n)
            } : function(t, i, n) {
                for (var r = 0; r < t.length; ++r) i[n + r] = t[r]
            };
            a.prototype.bytes = function(t) {
                var i = t.length >>> 0;
                if (!i) return this.g(l, 1, 0);
                if (r.isString(t)) {
                    var n = a.alloc(i = s.length(t));
                    s.decode(t, n, 0), t = n
                }
                return this.uint32(i).g(w, i, t)
            }, a.prototype.string = function(t) {
                var i = u.length(t);
                return i ? this.uint32(i).g(u.write, i, t) : this.g(l, 1, 0)
            }, a.prototype.fork = function() {
                return this.states = new h(this), this.head = this.tail = new o(f, 0, 0), this.len = 0, this
            }, a.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(f, 0, 0), this.len = 0), this
            }, a.prototype.ldelim = function() {
                var t = this.head,
                    i = this.tail,
                    n = this.len;
                return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = i, this.len += n), this
            }, a.prototype.finish = function() {
                for (var t = this.head.next, i = this.constructor.alloc(this.len), n = 0; t;) t.fn(t.val, i, n), n += t.len, t = t.next;
                return i
            }, a.o = function(t) {
                n = t, a.create = c(), n.o()
            }
        }, {
            39: 39
        }],
        43: [function(t, i) {
            i.exports = e;
            var n = t(42);
            (e.prototype = Object.create(n.prototype)).constructor = e;
            var r = t(39);

            function e() {
                n.call(this)
            }

            function s(t, i, n) {
                t.length < 40 ? r.utf8.write(t, i, n) : i.utf8Write ? i.utf8Write(t, n) : i.write(t, n)
            }
            e.o = function() {
                e.alloc = r.y, e.writeBytesBuffer = r.Buffer && r.Buffer.prototype instanceof Uint8Array && "set" === r.Buffer.prototype.set.name ? function(t, i, n) {
                    i.set(t, n)
                } : function(t, i, n) {
                    if (t.copy) t.copy(i, n, 0, t.length);
                    else
                        for (var r = 0; r < t.length;) i[n++] = t[r++]
                }
            }, e.prototype.bytes = function(t) {
                r.isString(t) && (t = r.b(t, "base64"));
                var i = t.length >>> 0;
                return this.uint32(i), i && this.g(e.writeBytesBuffer, i, t), this
            }, e.prototype.string = function(t) {
                var i = r.Buffer.byteLength(t);
                return this.uint32(i), i && this.g(s, i, t), this
            }, e.o()
        }, {
            39: 39,
            42: 42
        }]
    }, e = {}, t = [19], i = function t(i) {
        var n = e[i];
        return n || r[i][0].call(n = e[i] = {
            exports: {}
        }, t, n, n.exports), n.exports
    }(t[0]), i.util.global.protobuf = i, "function" == typeof define && define.amd && define(["long"], function(t) {
        return t && t.isLong && (i.util.Long = t, i.configure()), i
    }), "object" == typeof module && module && module.exports && (module.exports = i)
}();




! function(n) {
    "use strict";
    var r = {
            encode: function(n, r) {
                return function(n) {
                    var r, e, u, c, i, o, h, f, a, l = 0,
                        d = "";
                    if (!n) return n;
                    do {
                        r = n[l++], e = n[l++], u = n[l++], c = (f = r << 16 | e << 8 | u) >> 18 & 63, i = f >> 12 & 63, o = f >> 6 & 63, h = 63 & f, d += t.charAt(c) + t.charAt(i) + t.charAt(o) + t.charAt(h)
                    } while (l < n.length);
                    return ((a = n.length % 3) ? d.slice(0, a - 3) : d) + "===".slice(a || 3)
                }(r = function(n, r) {
                    return e(r.split(""), function(r, t) {
                        return r.charCodeAt(0) ^ u(n, t)
                    })
                }(n, r))
            },
            decode: function(n, r) {
                return r = function(n) {
                        var r, e, u, c, i, o, h, f, a = 0,
                            l = [];
                        if (!n) return n;
                        n += "";
                        do {
                            c = t.indexOf(n.charAt(a++)), i = t.indexOf(n.charAt(a++)), o = t.indexOf(n.charAt(a++)), h = t.indexOf(n.charAt(a++)), r = (f = c << 18 | i << 12 | o << 6 | h) >> 16 & 255, e = f >> 8 & 255, u = 255 & f, l.push(r), 64 !== o && (l.push(e), 64 !== h && l.push(u))
                        } while (a < n.length);
                        return l
                    }(r),
                    function(n, r) {
                        return e(r, function(r, t) {
                            return String.fromCharCode(r ^ u(n, t))
                        }).join("")
                    }(n, r)
            }
        },
        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var e = function(n, r) {
        let t = [];
        var e = 0;
        for (let u of n) t.push(r(u, e)), e++;
        return t
    };

    function u(n, r) {
        return n.charCodeAt(Math.floor(r % n.length))
    }
    n.xc = r
}(this);



/* Font Face Observer v2.1.0 - Â© Bram Stein. License: BSD-3-Clause */
(function() {
    'use strict';
    var f, g = [];

    function l(a) {
        g.push(a);
        1 == g.length && f()
    }

    function m() {
        for (; g.length;) g[0](), g.shift()
    }
    f = function() {
        setTimeout(m)
    };

    function n(a) {
        this.a = p;
        this.b = void 0;
        this.f = [];
        var b = this;
        try {
            a(function(a) {
                q(b, a)
            }, function(a) {
                r(b, a)
            })
        } catch (c) {
            r(b, c)
        }
    }
    var p = 2;

    function t(a) {
        return new n(function(b, c) {
            c(a)
        })
    }

    function u(a) {
        return new n(function(b) {
            b(a)
        })
    }

    function q(a, b) {
        if (a.a == p) {
            if (b == a) throw new TypeError;
            var c = !1;
            try {
                var d = b && b.then;
                if (null != b && "object" == typeof b && "function" == typeof d) {
                    d.call(b, function(b) {
                        c || q(a, b);
                        c = !0
                    }, function(b) {
                        c || r(a, b);
                        c = !0
                    });
                    return
                }
            } catch (e) {
                c || r(a, e);
                return
            }
            a.a = 0;
            a.b = b;
            v(a)
        }
    }

    function r(a, b) {
        if (a.a == p) {
            if (b == a) throw new TypeError;
            a.a = 1;
            a.b = b;
            v(a)
        }
    }

    function v(a) {
        l(function() {
            if (a.a != p)
                for (; a.f.length;) {
                    var b = a.f.shift(),
                        c = b[0],
                        d = b[1],
                        e = b[2],
                        b = b[3];
                    try {
                        0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b))
                    } catch (h) {
                        b(h)
                    }
                }
        })
    }
    n.prototype.g = function(a) {
        return this.c(void 0, a)
    };
    n.prototype.c = function(a, b) {
        var c = this;
        return new n(function(d, e) {
            c.f.push([a, b, d, e]);
            v(c)
        })
    };

    function w(a) {
        return new n(function(b, c) {
            function d(c) {
                return function(d) {
                    h[c] = d;
                    e += 1;
                    e == a.length && b(h)
                }
            }
            var e = 0,
                h = [];
            0 == a.length && b(h);
            for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c)
        })
    }

    function x(a) {
        return new n(function(b, c) {
            for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c)
        })
    };
    window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
}());

(function() {
    function l(a, b) {
        document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b)
    }

    function m(a) {
        document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
            document.removeEventListener("DOMContentLoaded", c);
            a()
        }) : document.attachEvent("onreadystatechange", function k() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a()
        })
    };

    function t(a) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(a));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c)
    }

    function u(a, b) {
        a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";"
    }

    function z(a) {
        var b = a.a.offsetWidth,
            c = b + 100;
        a.f.style.width = c + "px";
        a.c.scrollLeft = c;
        a.b.scrollLeft = a.b.scrollWidth + 100;
        return a.g !== b ? (a.g = b, !0) : !1
    }

    function A(a, b) {
        function c() {
            var a = k;
            z(a) && a.a.parentNode && b(a.g)
        }
        var k = a;
        l(a.b, c);
        l(a.c, c);
        z(a)
    };

    function B(a, b) {
        var c = b || {};
        this.family = a;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal"
    }
    var C = null,
        D = null,
        E = null,
        F = null;

    function G() {
        if (null === D)
            if (J() && /Apple/.test(window.navigator.vendor)) {
                var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                D = !!a && 603 > parseInt(a[1], 10)
            } else D = !1;
        return D
    }

    function J() {
        null === F && (F = !!document.fonts);
        return F
    }

    function K() {
        if (null === E) {
            var a = document.createElement("div");
            try {
                a.style.font = "condensed 100px sans-serif"
            } catch (b) {}
            E = "" !== a.style.font
        }
        return E
    }

    function L(a, b) {
        return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ")
    }
    B.prototype.load = function(a, b) {
        var c = this,
            k = a || "BESbswy",
            r = 0,
            n = b || 3E3,
            H = (new Date).getTime();
        return new Promise(function(a, b) {
            if (J() && !G()) {
                var M = new Promise(function(a, b) {
                        function e() {
                            (new Date).getTime() - H >= n ? b(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function(c) {
                                1 <= c.length ? a() : setTimeout(e, 25)
                            }, b)
                        }
                        e()
                    }),
                    N = new Promise(function(a, c) {
                        r = setTimeout(function() {
                            c(Error("" + n + "ms timeout exceeded"))
                        }, n)
                    });
                Promise.race([N, M]).then(function() {
                        clearTimeout(r);
                        a(c)
                    },
                    b)
            } else m(function() {
                function v() {
                    var b;
                    if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h)(b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)), b = !b;
                    b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c))
                }

                function I() {
                    if ((new Date).getTime() - H >= n) d.parentNode && d.parentNode.removeChild(d), b(Error("" +
                        n + "ms timeout exceeded"));
                    else {
                        var a = document.hidden;
                        if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = p.a.offsetWidth, h = q.a.offsetWidth, v();
                        r = setTimeout(I, 50)
                    }
                }
                var e = new t(k),
                    p = new t(k),
                    q = new t(k),
                    f = -1,
                    g = -1,
                    h = -1,
                    w = -1,
                    x = -1,
                    y = -1,
                    d = document.createElement("div");
                d.dir = "ltr";
                u(e, L(c, "sans-serif"));
                u(p, L(c, "serif"));
                u(q, L(c, "monospace"));
                d.appendChild(e.a);
                d.appendChild(p.a);
                d.appendChild(q.a);
                document.body.appendChild(d);
                w = e.a.offsetWidth;
                x = p.a.offsetWidth;
                y = q.a.offsetWidth;
                I();
                A(e, function(a) {
                    f = a;
                    v()
                });
                u(e,
                    L(c, '"' + c.family + '",sans-serif'));
                A(p, function(a) {
                    g = a;
                    v()
                });
                u(p, L(c, '"' + c.family + '",serif'));
                A(q, function(a) {
                    h = a;
                    v()
                });
                u(q, L(c, '"' + c.family + '",monospace'))
            })
        })
    };
    "object" === typeof module ? module.exports = B : (window.FontFaceObserver = B, window.FontFaceObserver.prototype.load = B.prototype.load);
}());




//polygon-clipping
/*!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).polygonClipping=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var r=function e(n,r){t(this,e),this.next=null,this.key=n,this.data=r,this.left=null,this.right=null};function i(t,e){return t>e?1:t<e?-1:0}function o(t,e,n){for(var i=new r(null,null),o=i,s=i;;){var u=n(t,e.key);if(u<0){if(null===e.left)break;if(n(t,e.left.key)<0){var l=e.left;if(e.left=l.right,l.right=e,null===(e=l).left)break}s.left=e,s=e,e=e.left}else{if(!(u>0))break;if(null===e.right)break;if(n(t,e.right.key)>0){var h=e.right;if(e.right=h.left,h.left=e,null===(e=h).right)break}o.right=e,o=e,e=e.right}}return o.right=e.left,s.left=e.right,e.left=i.right,e.right=i.left,e}function s(t,e,n,i){var s=new r(t,e);if(null===n)return s.left=s.right=null,s;var u=i(t,(n=o(t,n,i)).key);return u<0?(s.left=n.left,s.right=n,n.left=null):u>=0&&(s.right=n.right,s.left=n,n.right=null),s}function u(t,e,n){var r=null,i=null;if(e){var s=n((e=o(t,e,n)).key,t);0===s?(r=e.left,i=e.right):s<0?(i=e.right,e.right=null,r=e):(r=e.left,e.left=null,i=e)}return{left:r,right:i}}var l=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;t(this,e),this._root=null,this._size=0,this._comparator=n}return n(e,[{key:"insert",value:function(t,e){return this._size++,this._root=s(t,e,this._root,this._comparator)}},{key:"add",value:function(t,e){var n=new r(t,e);null===this._root&&(n.left=n.right=null,this._size++,this._root=n);var i=this._comparator,s=o(t,this._root,i),u=i(t,s.key);return 0===u?this._root=s:(u<0?(n.left=s.left,n.right=s,s.left=null):u>0&&(n.right=s.right,n.left=s,s.right=null),this._size++,this._root=n),this._root}},{key:"remove",value:function(t){this._root=this._remove(t,this._root,this._comparator)}},{key:"_remove",value:function(t,e,n){var r;return null===e?null:0===n(t,(e=o(t,e,n)).key)?(null===e.left?r=e.right:(r=o(t,e.left,n)).right=e.right,this._size--,r):e}},{key:"pop",value:function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=o(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null}},{key:"findStatic",value:function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return e;e=r<0?e.left:e.right}return null}},{key:"find",value:function(t){return this._root&&(this._root=o(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root}},{key:"contains",value:function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return!0;e=r<0?e.left:e.right}return!1}},{key:"forEach",value:function(t,e){for(var n=this._root,r=[],i=!1;!i;)null!==n?(r.push(n),n=n.left):0!==r.length?(n=r.pop(),t.call(e,n),n=n.right):i=!0;return this}},{key:"range",value:function(t,e,n,r){for(var i=[],o=this._comparator,s=this._root;0!==i.length||s;)if(s)i.push(s),s=s.left;else{if(o((s=i.pop()).key,e)>0)break;if(o(s.key,t)>=0&&n.call(r,s))return this;s=s.right}return this}},{key:"keys",value:function(){var t=[];return this.forEach(function(e){var n=e.key;return t.push(n)}),t}},{key:"values",value:function(){var t=[];return this.forEach(function(e){var n=e.data;return t.push(n)}),t}},{key:"min",value:function(){return this._root?this.minNode(this._root).key:null}},{key:"max",value:function(){return this._root?this.maxNode(this._root).key:null}},{key:"minNode",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._root;if(t)for(;t.left;)t=t.left;return t}},{key:"maxNode",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._root;if(t)for(;t.right;)t=t.right;return t}},{key:"at",value:function(t){for(var e=this._root,n=!1,r=0,i=[];!n;)if(e)i.push(e),e=e.left;else if(i.length>0){if(e=i.pop(),r===t)return e;r++,e=e.right}else n=!0;return null}},{key:"next",value:function(t){var e=this._root,n=null;if(t.right){for(n=t.right;n.left;)n=n.left;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?(n=e,e=e.left):e=e.right}return n}},{key:"prev",value:function(t){var e=this._root,n=null;if(null!==t.left){for(n=t.left;n.right;)n=n.right;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?e=e.left:(n=e,e=e.right)}return n}},{key:"clear",value:function(){return this._root=null,this._size=0,this}},{key:"toList",value:function(){return function(t){var e=t,n=[],i=!1,o=new r(null,null),s=o;for(;!i;)e?(n.push(e),e=e.left):n.length>0?e=(e=s=s.next=n.pop()).right:i=!0;return s.next=null,o.next}(this._root)}},{key:"load",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.length,o=this._comparator;if(n&&function t(e,n,r,i,o){if(r>=i)return;var s=e[r+i>>1];var u=r-1;var l=i+1;for(;;){do{u++}while(o(e[u],s)<0);do{l--}while(o(e[l],s)>0);if(u>=l)break;var h=e[u];e[u]=e[l],e[l]=h,h=n[u],n[u]=n[l],n[l]=h}t(e,n,r,l,o);t(e,n,l+1,i,o)}(t,e,0,i-1,o),null===this._root)this._root=function t(e,n,i,o){var s=o-i;if(s>0){var u=i+Math.floor(s/2),l=e[u],h=n[u],f=new r(l,h);return f.left=t(e,n,i,u),f.right=t(e,n,u+1,o),f}return null}(t,e,0,i),this._size=i;else{var s=function(t,e,n){var i=new r(null,null),o=i,s=t,u=e;for(;null!==s&&null!==u;)n(s.key,u.key)<0?(o.next=s,s=s.next):(o.next=u,u=u.next),o=o.next;null!==s?o.next=s:null!==u&&(o.next=u);return i.next}(this.toList(),function(t,e){for(var n=new r(null,null),i=n,o=0;o<t.length;o++)i=i.next=new r(t[o],e[o]);return i.next=null,n.next}(t,e),o);i=this._size+i,this._root=function t(e,n,r){var i=r-n;if(i>0){var o=n+Math.floor(i/2),s=t(e,n,o),u=e.head;return u.left=s,e.head=e.head.next,u.right=t(e,o+1,r),u}return null}({head:s},0,i)}return this}},{key:"isEmpty",value:function(){return null===this._root}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return String(t.key)},e=[];return function t(e,n,r,i,o){if(e){i("".concat(n).concat(r?"â””â”€â”€ ":"â”œâ”€â”€ ").concat(o(e),"\n"));var s=n+(r?"    ":"â”‚   ");e.left&&t(e.left,s,!1,i,o),e.right&&t(e.right,s,!0,i,o)}}(this._root,"",!0,function(t){return e.push(t)},t),e.join("")}},{key:"update",value:function(t,e,n){var r=this._comparator,i=u(t,this._root,r),l=i.left,h=i.right;r(t,e)<0?h=s(e,n,h,r):l=s(e,n,l,r),this._root=function(t,e,n){return null===e?t:null===t?e:((e=o(t.key,e,n)).left=t,e)}(l,h,r)}},{key:"split",value:function(t){return u(t,this._root,this._comparator)}},{key:"size",get:function(){return this._size}},{key:"root",get:function(){return this._root}}]),e}();var h=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},f=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var n=t.ll.x<e.ll.x?e.ll.x:t.ll.x,r=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:n,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:r,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},a=Number.EPSILON;void 0===a&&(a=Math.pow(2,-52));var v=a*a,y=function(t,e){if(-a<t&&t<a&&-a<e&&e<a)return 0;var n=t-e;return n*n<v*t*e?0:t<e?-1:1},g=function(){function e(){t(this,e),this.reset()}return n(e,[{key:"reset",value:function(){this.xRounder=new c,this.yRounder=new c}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),e}(),c=function(){function e(){t(this,e),this.tree=new l,this.round(0)}return n(e,[{key:"round",value:function(t){var e=this.tree.add(t),n=this.tree.prev(e);if(null!==n&&0===y(e.key,n.key))return this.tree.remove(t),n.key;var r=this.tree.next(e);return null!==r&&0===y(e.key,r.key)?(this.tree.remove(t),r.key):t}}]),e}(),p=new g,x=function(t,e){return t.x*e.y-t.y*e.x},b=function(t,e){return t.x*e.x+t.y*e.y},m=function(t,e,n){var r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y},o=x(r,i);return y(o,0)},d=function(t){return Math.sqrt(b(t,t))},E=function(t,e,n){var r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return b(i,r)/d(i)/d(r)},k=function(t,e,n){return 0===e.y?null:{x:t.x+e.x/e.y*(n-t.y),y:n}},S=function(t,e,n){return 0===e.x?null:{x:n,y:t.y+e.y/e.x*(n-t.x)}},_=function(){function e(n,r){t(this,e),void 0===n.events?n.events=[this]:n.events.push(this),this.point=n,this.isLeft=r}return n(e,null,[{key:"compare",value:function(t,n){var r=e.comparePoints(t.point,n.point);return 0!==r?r:(t.point!==n.point&&t.link(n),t.isLeft!==n.isLeft?t.isLeft?1:-1:R.compare(t.segment,n.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),n(e,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,n=0,r=e.length;n<r;n++){var i=e[n];this.point.events.push(i),i.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var n=this.point.events[e];if(void 0===n.segment.consumedBy)for(var r=e+1;r<t;r++){var i=this.point.events[r];void 0===i.consumedBy&&(n.otherSE.point.events===i.otherSE.point.events&&n.segment.consume(i.segment))}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,n=this.point.events.length;e<n;e++){var r=this.point.events[e];r!==this&&!r.segment.ringOut&&r.segment.isInResult()&&t.push(r)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,n=new Map,r=function(r){var i,o,s,u,l,h=r.otherSE;n.set(r,{sine:(i=e.point,o=t.point,s=h.point,u={x:o.x-i.x,y:o.y-i.y},l={x:s.x-i.x,y:s.y-i.y},x(l,u)/d(l)/d(u)),cosine:E(e.point,t.point,h.point)})};return function(t,e){n.has(t)||r(t),n.has(e)||r(e);var i=n.get(t),o=i.sine,s=i.cosine,u=n.get(e),l=u.sine,h=u.cosine;return o>=0&&l>=0?s<h?1:s>h?-1:0:o<0&&l<0?s<h?-1:s>h?1:0:l<o?-1:l>o?1:0}}}]),e}(),w=0,R=function(){function e(n,r,i,o){t(this,e),this.id=++w,this.leftSE=n,n.segment=this,n.otherSE=r,this.rightSE=r,r.segment=this,r.otherSE=n,this.rings=i,this.windings=o}return n(e,null,[{key:"compare",value:function(t,e){var n=t.leftSE.point.x,r=e.leftSE.point.x,i=t.rightSE.point.x,o=e.rightSE.point.x;if(o<n)return 1;if(i<r)return-1;var s=t.leftSE.point.y,u=e.leftSE.point.y,l=t.rightSE.point.y,h=e.rightSE.point.y;if(n<r){if(u<s&&u<l)return 1;if(u>s&&u>l)return-1;var f=t.comparePoint(e.leftSE.point);if(f<0)return 1;if(f>0)return-1;var a=e.comparePoint(t.rightSE.point);return 0!==a?a:-1}if(n>r){if(s<u&&s<h)return-1;if(s>u&&s>h)return 1;var v=e.comparePoint(t.leftSE.point);if(0!==v)return v;var y=t.comparePoint(e.rightSE.point);return y<0?1:y>0?-1:1}if(s<u)return-1;if(s>u)return 1;if(i<o){var g=e.comparePoint(t.rightSE.point);if(0!==g)return g}if(i>o){var c=t.comparePoint(e.rightSE.point);if(c<0)return 1;if(c>0)return-1}if(i!==o){var p=l-s,x=i-n,b=h-u,m=o-r;if(p>x&&b<m)return 1;if(p<x&&b>m)return-1}return i>o?1:i<o?-1:l<h?-1:l>h?1:t.id<e.id?-1:t.id>e.id?1:0}}]),n(e,[{key:"replaceRightSE",value:function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(e.x===n.x)return t.x===e.x?0:t.x<e.x?1:-1;var i=(t.y-e.y)/r.y,o=e.x+i*r.x;if(t.x===o)return 0;var s=(t.x-e.x)/r.x,u=e.y+s*r.y;return t.y===u?0:t.y<u?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),n=t.bbox(),r=f(e,n);if(null===r)return null;var i=this.leftSE.point,o=this.rightSE.point,s=t.leftSE.point,u=t.rightSE.point,l=h(e,s)&&0===this.comparePoint(s),a=h(n,i)&&0===t.comparePoint(i),v=h(e,u)&&0===this.comparePoint(u),y=h(n,o)&&0===t.comparePoint(o);if(a&&l)return y&&!v?o:!y&&v?u:null;if(a)return v&&i.x===u.x&&i.y===u.y?null:i;if(l)return y&&o.x===s.x&&o.y===s.y?null:s;if(y&&v)return null;if(y)return o;if(v)return u;var g=function(t,e,n,r){if(0===e.x)return S(n,r,t.x);if(0===r.x)return S(t,e,n.x);if(0===e.y)return k(n,r,t.y);if(0===r.y)return k(t,e,n.y);var i=x(e,r);if(0==i)return null;var o={x:n.x-t.x,y:n.y-t.y},s=x(o,e)/i,u=x(o,r)/i;return{x:(t.x+u*e.x+(n.x+s*r.x))/2,y:(t.y+u*e.y+(n.y+s*r.y))/2}}(i,this.vector(),s,t.vector());return null===g?null:h(r,g)?p.round(g.x,g.y):null}},{key:"split",value:function(t){var n=[],r=void 0!==t.events,i=new _(t,!0),o=new _(t,!1),s=this.rightSE;this.replaceRightSE(o),n.push(o),n.push(i);var u=new e(i,s,this.rings.slice(),this.windings.slice());return _.comparePoints(u.leftSE.point,u.rightSE.point)>0&&u.swapEvents(),_.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),r&&(i.checkForConsuming(),o.checkForConsuming()),n}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,n=this.windings.length;e<n;e++)this.windings[e]*=-1}},{key:"consume",value:function(t){for(var n=this,r=t;n.consumedBy;)n=n.consumedBy;for(;r.consumedBy;)r=r.consumedBy;var i=e.compare(n,r);if(0!==i){if(i>0){var o=n;n=r,r=o}if(n.prev===r){var s=n;n=r,r=s}for(var u=0,l=r.rings.length;u<l;u++){var h=r.rings[u],f=r.windings[u],a=n.rings.indexOf(h);-1===a?(n.rings.push(h),n.windings.push(f)):n.windings[a]+=f}r.rings=null,r.windings=null,r.consumedBy=n,r.leftSE.consumedBy=n.leftSE,r.rightSE.consumedBy=n.rightSE}}},{key:"prevInResult",value:function(){return void 0!==this._prevInResult?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}},{key:"beforeState",value:function(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(void 0!==this._afterState)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys,i=0,o=this.rings.length;i<o;i++){var s=this.rings[i],u=this.windings[i],l=e.indexOf(s);-1===l?(e.push(s),n.push(u)):n[l]+=u}for(var h=[],f=[],a=0,v=e.length;a<v;a++)if(0!==n[a]){var y=e[a],g=y.poly;if(-1===f.indexOf(g))if(y.isExterior)h.push(g);else{-1===f.indexOf(g)&&f.push(g);var c=h.indexOf(y.poly);-1!==c&&h.splice(c,1)}}for(var p=0,x=h.length;p<x;p++){var b=h[p].multiPoly;-1===r.indexOf(b)&&r.push(b)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(z.type){case"union":var n=0===t.length,r=0===e.length;this._isInResult=n!==r;break;case"intersection":var i,o;t.length<e.length?(i=t.length,o=e.length):(i=e.length,o=t.length),this._isInResult=o===z.numMultiPolys&&i<o;break;case"xor":var s=Math.abs(t.length-e.length);this._isInResult=s%2==1;break;case"difference":var u=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=u(t)!==u(e);break;default:throw new Error("Unrecognized operation type found ".concat(z.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,n,r){var i,o,s,u=_.comparePoints(t,n);if(u<0)i=t,o=n,s=1;else{if(!(u>0))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));i=n,o=t,s=-1}return new e(new _(i,!0),new _(o,!1),[r],[s])}}]),e}(),I=function(){function e(n,r,i){if(t(this,e),!Array.isArray(n)||0===n.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=r,this.isExterior=i,this.segments=[],"number"!=typeof n[0][0]||"number"!=typeof n[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var o=p.round(n[0][0],n[0][1]);this.bbox={ll:{x:o.x,y:o.y},ur:{x:o.x,y:o.y}};for(var s=o,u=1,l=n.length;u<l;u++){if("number"!=typeof n[u][0]||"number"!=typeof n[u][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var h=p.round(n[u][0],n[u][1]);h.x===s.x&&h.y===s.y||(this.segments.push(R.fromRing(s,h,this)),h.x<this.bbox.ll.x&&(this.bbox.ll.x=h.x),h.y<this.bbox.ll.y&&(this.bbox.ll.y=h.y),h.x>this.bbox.ur.x&&(this.bbox.ur.x=h.x),h.y>this.bbox.ur.y&&(this.bbox.ur.y=h.y),s=h)}o.x===s.x&&o.y===s.y||this.segments.push(R.fromRing(s,o,this))}return n(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,n=this.segments.length;e<n;e++){var r=this.segments[e];t.push(r.leftSE),t.push(r.rightSE)}return t}}]),e}(),P=function(){function e(n,r){if(t(this,e),!Array.isArray(n))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new I(n[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var i=1,o=n.length;i<o;i++){var s=new I(n[i],this,!1);s.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=s.bbox.ll.x),s.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=s.bbox.ll.y),s.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=s.bbox.ur.x),s.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=s.bbox.ur.y),this.interiorRings.push(s)}this.multiPoly=r}return n(e,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,n=this.interiorRings.length;e<n;e++)for(var r=this.interiorRings[e].getSweepEvents(),i=0,o=r.length;i<o;i++)t.push(r[i]);return t}}]),e}(),A=function(){function e(n,r){if(t(this,e),!Array.isArray(n))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof n[0][0][0]&&(n=[n])}catch(t){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var i=0,o=n.length;i<o;i++){var s=new P(n[i],this);s.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=s.bbox.ll.x),s.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=s.bbox.ll.y),s.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=s.bbox.ur.x),s.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=s.bbox.ur.y),this.polys.push(s)}this.isSubject=r}return n(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,n=this.polys.length;e<n;e++)for(var r=this.polys[e].getSweepEvents(),i=0,o=r.length;i<o;i++)t.push(r[i]);return t}}]),e}(),N=function(){function e(n){t(this,e),this.events=n;for(var r=0,i=n.length;r<i;r++)n[r].segment.ringOut=this;this.poly=null}return n(e,null,[{key:"factory",value:function(t){for(var n=[],r=0,i=t.length;r<i;r++){var o=t[r];if(o.isInResult()&&!o.ringOut){for(var s=null,u=o.leftSE,l=o.rightSE,h=[u],f=u.point,a=[];s=u,u=l,h.push(u),u.point!==f;)for(;;){var v=u.getAvailableLinkedEvents();if(0===v.length){var y=h[0].point,g=h[h.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(y.x,",")+" ".concat(y.y,"]. Last matching segment found ends at")+" [".concat(g.x,", ").concat(g.y,"]."))}if(1===v.length){l=v[0].otherSE;break}for(var c=null,p=0,x=a.length;p<x;p++)if(a[p].point===u.point){c=p;break}if(null===c){a.push({index:h.length,point:u.point});var b=u.getLeftmostComparator(s);l=v.sort(b)[0].otherSE;break}var m=a.splice(c)[0],d=h.splice(m.index);d.unshift(d[0].otherSE),n.push(new e(d.reverse()))}n.push(new e(h))}}return n}}]),n(e,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],n=1,r=this.events.length-1;n<r;n++){var i=this.events[n].point,o=this.events[n+1].point;0!==m(i,t,o)&&(e.push(i),t=i)}if(1===e.length)return null;var s=e[0],u=e[1];0===m(s,t,u)&&e.shift(),e.push(e[0]);for(var l=this.isExteriorRing()?1:-1,h=this.isExteriorRing()?0:e.length-1,f=this.isExteriorRing()?e.length:-1,a=[],v=h;v!=f;v+=l)a.push([e[v].x,e[v].y]);return a}},{key:"isExteriorRing",value:function(){if(void 0===this._isExteriorRing){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return void 0===this._enclosingRing&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,n=this.events.length;e<n;e++){var r=this.events[e];_.compare(t,r)>0&&(t=r)}for(var i=t.segment.prevInResult(),o=i?i.prevInResult():null;;){if(!i)return null;if(!o)return i.ringOut;if(o.ringOut!==i.ringOut)return o.ringOut.enclosingRing()!==i.ringOut?i.ringOut:i.ringOut.enclosingRing();i=o.prevInResult(),o=i?i.prevInResult():null}}}]),e}(),O=function(){function e(n){t(this,e),this.exteriorRing=n,n.poly=this,this.interiorRings=[]}return n(e,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,n=this.interiorRings.length;e<n;e++){var r=this.interiorRings[e].getGeom();null!==r&&t.push(r)}return t}}]),e}(),L=function(){function e(n){t(this,e),this.rings=n,this.polys=this._composePolys(n)}return n(e,[{key:"getGeom",value:function(){for(var t=[],e=0,n=this.polys.length;e<n;e++){var r=this.polys[e].getGeom();null!==r&&t.push(r)}return t}},{key:"_composePolys",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n];if(!i.poly)if(i.isExteriorRing())e.push(new O(i));else{var o=i.enclosingRing();o.poly||e.push(new O(o)),o.poly.addInterior(i)}}return e}}]),e}(),B=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.compare;t(this,e),this.queue=n,this.tree=new l(r),this.segments=[]}return n(e,[{key:"process",value:function(t){var e=t.segment,n=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),n;var r=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!r)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var i=r,o=r,s=void 0,u=void 0;void 0===s;)null===(i=this.tree.prev(i))?s=null:void 0===i.key.consumedBy&&(s=i.key);for(;void 0===u;)null===(o=this.tree.next(o))?u=null:void 0===o.key.consumedBy&&(u=o.key);if(t.isLeft){var l=null;if(s){var h=s.getIntersection(e);if(null!==h&&(e.isAnEndpoint(h)||(l=h),!s.isAnEndpoint(h)))for(var f=this._splitSafely(s,h),a=0,v=f.length;a<v;a++)n.push(f[a])}var y=null;if(u){var g=u.getIntersection(e);if(null!==g&&(e.isAnEndpoint(g)||(y=g),!u.isAnEndpoint(g)))for(var c=this._splitSafely(u,g),p=0,x=c.length;p<x;p++)n.push(c[p])}if(null!==l||null!==y){var b=null;if(null===l)b=y;else if(null===y)b=l;else{b=_.comparePoints(l,y)<=0?l:y}this.queue.remove(e.rightSE),n.push(e.rightSE);for(var m=e.split(b),d=0,E=m.length;d<E;d++)n.push(m[d])}n.length>0?(this.tree.remove(e),n.push(t)):(this.segments.push(e),e.prev=s)}else{if(s&&u){var k=s.getIntersection(u);if(null!==k){if(!s.isAnEndpoint(k))for(var S=this._splitSafely(s,k),w=0,R=S.length;w<R;w++)n.push(S[w]);if(!u.isAnEndpoint(k))for(var I=this._splitSafely(u,k),P=0,A=I.length;P<A;P++)n.push(I[P])}}this.tree.remove(e)}return n}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var n=t.rightSE;this.queue.remove(n);var r=t.split(e);return r.push(n),void 0===t.consumedBy&&this.tree.insert(t),r}}]),e}(),z=new(function(){function e(){t(this,e)}return n(e,[{key:"run",value:function(t,e,n){z.type=t,p.reset();for(var r=[new A(e,!0)],i=0,o=n.length;i<o;i++)r.push(new A(n[i],!1));if(z.numMultiPolys=r.length,"difference"===z.type)for(var s=r[0],u=1;u<r.length;)null!==f(r[u].bbox,s.bbox)?u++:r.splice(u,1);if("intersection"===z.type)for(var h=0,a=r.length;h<a;h++)for(var v=r[h],y=h+1,g=r.length;y<g;y++)if(null===f(v.bbox,r[y].bbox))return[];for(var c=new l(_.compare),x=0,b=r.length;x<b;x++)for(var m=r[x].getSweepEvents(),d=0,E=m.length;d<E;d++)c.insert(m[d]);for(var k=new B(c),S=c.size,w=c.pop();w;){var R=w.key;if(c.size===S){var I=R.segment;throw new Error("Unable to pop() ".concat(R.isLeft?"left":"right"," SweepEvent ")+"[".concat(R.point.x,", ").concat(R.point.y,"] from segment #").concat(I.id," ")+"[".concat(I.leftSE.point.x,", ").concat(I.leftSE.point.y,"] -> ")+"[".concat(I.rightSE.point.x,", ").concat(I.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}for(var P=k.process(R),O=0,M=P.length;O<M;O++){var T=P[O];void 0===T.consumedBy&&c.insert(T)}S=c.size,w=c.pop()}p.reset();var G=N.factory(k.segments);return new L(G).getGeom()}}]),e}());return{union:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return z.run("union",t,n)},intersection:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return z.run("intersection",t,n)},xor:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return z.run("xor",t,n)},difference:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return z.run("difference",t,n)}}});*/


//Ð§Ð°Ñ€Ñ‚ Ð½Ð° ÐºÐ°Ð½Ð²Ð°ÑÐµ
/*!function(t){Date.now=Date.now||function(){return(new Date).getTime()};var e={extend:function(){arguments[0]=arguments[0]||{};for(var t=1;t<arguments.length;t++)for(var i in arguments[t])arguments[t].hasOwnProperty(i)&&("object"==typeof arguments[t][i]?arguments[t][i]instanceof Array?arguments[0][i]=arguments[t][i]:arguments[0][i]=e.extend(arguments[0][i],arguments[t][i]):arguments[0][i]=arguments[t][i]);return arguments[0]},binarySearch:function(t,e){for(var i=0,s=t.length;i<s;){var a=i+s>>1;e<t[a][0]?s=a:i=a+1}return i}};function i(t){this.options=e.extend({},i.defaultOptions,t),this.disabled=!1,this.clear()}function s(t){this.options=e.extend({},s.defaultChartOptions,t),this.seriesSet=[],this.currentValueRange=1,this.currentVisMinValue=0,this.lastRenderTimeMillis=0,this.lastChartTimestamp=0,this.mousemove=this.mousemove.bind(this),this.mouseout=this.mouseout.bind(this)}i.defaultOptions={resetBoundsInterval:3e3,resetBounds:!0},i.prototype.clear=function(){this.data=[],this.maxValue=Number.NaN,this.minValue=Number.NaN},i.prototype.resetBounds=function(){if(this.data.length){this.maxValue=this.data[0][1],this.minValue=this.data[0][1];for(var t=1;t<this.data.length;t++){var e=this.data[t][1];e>this.maxValue&&(this.maxValue=e),e<this.minValue&&(this.minValue=e)}}else this.maxValue=Number.NaN,this.minValue=Number.NaN},i.prototype.append=function(t,e,i){if(!isNaN(t)&&!isNaN(e)){for(var s=this.data.length-1;s>=0&&this.data[s][0]>t;)s--;-1===s?this.data.splice(0,0,[t,e]):this.data.length>0&&this.data[s][0]===t?i?(this.data[s][1]+=e,e=this.data[s][1]):this.data[s][1]=e:s<this.data.length-1?this.data.splice(s+1,0,[t,e]):this.data.push([t,e]),this.maxValue=isNaN(this.maxValue)?e:Math.max(this.maxValue,e),this.minValue=isNaN(this.minValue)?e:Math.min(this.minValue,e)}},i.prototype.dropOldData=function(t,e){for(var i=0;this.data.length-i>=e&&this.data[i+1][0]<t;)i++;0!==i&&this.data.splice(0,i)},s.tooltipFormatter=function(t,e){for(var i,a=[(this.options.timestampFormatter||s.timeFormatter)(new Date(t))],o=0;o<e.length;++o)""!==(i=e[o].series.options.tooltipLabel||"")&&(i+=" "),a.push('<span style="color:'+e[o].series.options.strokeStyle+'">'+i+this.options.yMaxFormatter(e[o].value,this.options.labels.precision)+"</span>");return a.join("<br>")},s.defaultChartOptions={millisPerPixel:20,enableDpiScaling:!0,yMinFormatter:function(t,e){return parseFloat(t).toFixed(e)},yMaxFormatter:function(t,e){return parseFloat(t).toFixed(e)},yIntermediateFormatter:function(t,e){return parseFloat(t).toFixed(e)},maxValueScale:1,minValueScale:1,interpolation:"bezier",scaleSmoothing:.125,maxDataSetLength:2,scrollBackwards:!1,displayDataFromPercentile:1,grid:{fillStyle:"#000000",strokeStyle:"#777777",lineWidth:1,sharpLines:!1,millisPerLine:1e3,verticalSections:2,borderVisible:!0},labels:{fillStyle:"#ffffff",disabled:!1,fontSize:10,fontFamily:"monospace",precision:2,showIntermediateLabels:!1,intermediateLabelSameAxis:!0},title:{text:"",fillStyle:"#ffffff",fontSize:15,fontFamily:"monospace",verticalAlign:"middle"},horizontalLines:[],tooltip:!1,tooltipLine:{lineWidth:1,strokeStyle:"#BBBBBB"},tooltipFormatter:s.tooltipFormatter,nonRealtimeData:!1,responsive:!1,limitFPS:0},s.AnimateCompatibility={requestAnimationFrame:function(t,e){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(function(){t(Date.now())},16)}).call(window,t,e)},cancelAnimationFrame:function(t){return(window.cancelAnimationFrame||function(t){clearTimeout(t)}).call(window,t)}},s.defaultSeriesPresentationOptions={lineWidth:1,strokeStyle:"#ffffff"},s.prototype.addTimeSeries=function(t,i){this.seriesSet.push({timeSeries:t,options:e.extend({},s.defaultSeriesPresentationOptions,i)}),t.options.resetBounds&&t.options.resetBoundsInterval>0&&(t.resetBoundsTimerId=setInterval(function(){t.resetBounds()},t.options.resetBoundsInterval))},s.prototype.removeTimeSeries=function(t){for(var e=this.seriesSet.length,i=0;i<e;i++)if(this.seriesSet[i].timeSeries===t){this.seriesSet.splice(i,1);break}t.resetBoundsTimerId&&clearInterval(t.resetBoundsTimerId)},s.prototype.getTimeSeriesOptions=function(t){for(var e=this.seriesSet.length,i=0;i<e;i++)if(this.seriesSet[i].timeSeries===t)return this.seriesSet[i].options},s.prototype.bringToFront=function(t){for(var e=this.seriesSet.length,i=0;i<e;i++)if(this.seriesSet[i].timeSeries===t){var s=this.seriesSet.splice(i,1);this.seriesSet.push(s[0]);break}},s.prototype.streamTo=function(t,e){this.canvas=t,this.delay=e,this.start()},s.prototype.getTooltipEl=function(){return this.tooltipEl||(this.tooltipEl=document.createElement("div"),this.tooltipEl.className="smoothie-chart-tooltip",this.tooltipEl.style.position="absolute",this.tooltipEl.style.display="none",document.body.appendChild(this.tooltipEl)),this.tooltipEl},s.prototype.updateTooltip=function(){if(this.options.tooltip){var t=this.getTooltipEl();if(this.mouseover&&this.options.tooltip){for(var i=this.lastChartTimestamp,s=this.options.scrollBackwards?i-this.mouseX*this.options.millisPerPixel:i-(this.canvas.offsetWidth-this.mouseX)*this.options.millisPerPixel,a=[],o=0;o<this.seriesSet.length;o++){var n=this.seriesSet[o].timeSeries;if(!n.disabled){var l=e.binarySearch(n.data,s);l>0&&l<n.data.length&&a.push({series:this.seriesSet[o],index:l,value:n.data[l][1]})}}a.length?(t.innerHTML=this.options.tooltipFormatter.call(this,s,a),t.style.display="block"):t.style.display="none"}else t.style.display="none"}},s.prototype.mousemove=function(t){if(this.mouseover=!0,this.mouseX=t.offsetX,this.mouseY=t.offsetY,this.mousePageX=t.pageX,this.mousePageY=t.pageY,this.options.tooltip){var e=this.getTooltipEl();e.style.top=Math.round(this.mousePageY)+"px",e.style.left=Math.round(this.mousePageX)+"px",this.updateTooltip()}},s.prototype.mouseout=function(){this.mouseover=!1,this.mouseX=this.mouseY=-1,this.tooltipEl&&(this.tooltipEl.style.display="none")},s.prototype.resize=function(){var t,e,i=this.options.enableDpiScaling&&window?window.devicePixelRatio:1;this.options.responsive?(t=this.canvas.offsetWidth,e=this.canvas.offsetHeight,t!==this.lastWidth&&(this.lastWidth=t,this.canvas.setAttribute("width",Math.floor(t*i).toString()),this.canvas.getContext("2d").scale(i,i)),e!==this.lastHeight&&(this.lastHeight=e,this.canvas.setAttribute("height",Math.floor(e*i).toString()),this.canvas.getContext("2d").scale(i,i))):1!==i&&(t=parseInt(this.canvas.getAttribute("width")),e=parseInt(this.canvas.getAttribute("height")),this.originalWidth&&Math.floor(this.originalWidth*i)===t||(this.originalWidth=t,this.canvas.setAttribute("width",Math.floor(t*i).toString()),this.canvas.style.width=t+"px",this.canvas.getContext("2d").scale(i,i)),this.originalHeight&&Math.floor(this.originalHeight*i)===e||(this.originalHeight=e,this.canvas.setAttribute("height",Math.floor(e*i).toString()),this.canvas.style.height=e+"px",this.canvas.getContext("2d").scale(i,i)))},s.prototype.start=function(){if(!this.frame){this.canvas.addEventListener("mousemove",this.mousemove),this.canvas.addEventListener("mouseout",this.mouseout);var t=function(){this.frame=s.AnimateCompatibility.requestAnimationFrame(function(){if(this.options.nonRealtimeData){var e=new Date(0),i=this.seriesSet.reduce(function(t,e){var i=e.timeSeries.data,s=Math.round(this.options.displayDataFromPercentile*i.length)-1;if(s=(s=s>=0?s:0)<=i.length-1?s:i.length-1,i&&i.length>0){var a=i[s][0];t=t>a?t:a}return t}.bind(this),e);this.render(this.canvas,i>e?i:null)}else this.render();t()}.bind(this))}.bind(this);t()}},s.prototype.stop=function(){this.frame&&(s.AnimateCompatibility.cancelAnimationFrame(this.frame),delete this.frame,this.canvas.removeEventListener("mousemove",this.mousemove),this.canvas.removeEventListener("mouseout",this.mouseout))},s.prototype.updateValueRange=function(){for(var t=this.options,e=Number.NaN,i=Number.NaN,s=0;s<this.seriesSet.length;s++){var a=this.seriesSet[s].timeSeries;a.disabled||(isNaN(a.maxValue)||(e=isNaN(e)?a.maxValue:Math.max(e,a.maxValue)),isNaN(a.minValue)||(i=isNaN(i)?a.minValue:Math.min(i,a.minValue)))}if(null!=t.maxValue?e=t.maxValue:e*=t.maxValueScale,null!=t.minValue?i=t.minValue:i-=Math.abs(i*t.minValueScale-i),this.options.yRangeFunction){var o=this.options.yRangeFunction({min:i,max:e});i=o.min,e=o.max}if(!isNaN(e)&&!isNaN(i)){var n=e-i-this.currentValueRange,l=i-this.currentVisMinValue;this.isAnimatingScale=Math.abs(n)>.1||Math.abs(l)>.1,this.currentValueRange+=t.scaleSmoothing*n,this.currentVisMinValue+=t.scaleSmoothing*l}this.valueRange={min:i,max:e}},s.prototype.render=function(t,e){var i=Date.now();if(!(this.options.limitFPS>0&&i-this.lastRenderTimeMillis<1e3/this.options.limitFPS)){if(!this.isAnimatingScale){var s=Math.min(1e3/6,this.options.millisPerPixel);if(i-this.lastRenderTimeMillis<s)return}this.resize(),this.updateTooltip(),this.lastRenderTimeMillis=i,t=t||this.canvas,e=e||i-(this.delay||0),e-=e%this.options.millisPerPixel,this.lastChartTimestamp=e;var a=t.getContext("2d"),o=this.options,n={top:0,left:0,width:t.clientWidth,height:t.clientHeight},l=e-n.width*o.millisPerPixel,r=function(t){var e=t-this.currentVisMinValue;return 0===this.currentValueRange?n.height:n.height-Math.round(e/this.currentValueRange*n.height)}.bind(this),h=function(t){return o.scrollBackwards?Math.round((e-t)/o.millisPerPixel):Math.round(n.width-(e-t)/o.millisPerPixel)};if(this.updateValueRange(),a.font=o.labels.fontSize+"px "+o.labels.fontFamily,a.save(),a.translate(n.left,n.top),a.beginPath(),a.rect(0,0,n.width,n.height),a.clip(),a.save(),a.fillStyle=o.grid.fillStyle,a.clearRect(0,0,n.width,n.height),a.fillRect(0,0,n.width,n.height),a.restore(),a.save(),a.lineWidth=o.grid.lineWidth,a.strokeStyle=o.grid.strokeStyle,o.grid.millisPerLine>0){a.beginPath();for(var m=e-e%o.grid.millisPerLine;m>=l;m-=o.grid.millisPerLine){var d=h(m);o.grid.sharpLines&&(d-=.5),a.moveTo(d,0),a.lineTo(d,n.height)}a.stroke(),a.closePath()}for(var u=1;u<o.grid.verticalSections;u++){var c=Math.round(u*n.height/o.grid.verticalSections);o.grid.sharpLines&&(c-=.5),a.beginPath(),a.moveTo(0,c),a.lineTo(n.width,c),a.stroke(),a.closePath()}if(o.grid.borderVisible&&(a.beginPath(),a.strokeRect(0,0,n.width,n.height),a.closePath()),a.restore(),o.horizontalLines&&o.horizontalLines.length)for(var p=0;p<o.horizontalLines.length;p++){var f=o.horizontalLines[p],g=Math.round(r(f.value))-.5;a.strokeStyle=f.color||"#ffffff",a.lineWidth=f.lineWidth||1,a.beginPath(),a.moveTo(0,g),a.lineTo(n.width,g),a.stroke(),a.closePath()}for(var v=0;v<this.seriesSet.length;v++){a.save();var S=this.seriesSet[v].timeSeries;if(!S.disabled){var y=S.data,x=this.seriesSet[v].options;S.dropOldData(l,o.maxDataSetLength),a.lineWidth=x.lineWidth,a.strokeStyle=x.strokeStyle,a.beginPath();for(var b=0,w=0,T=0,P=0,N=0;N<y.length&&1!==y.length;N++){var V=h(y[N][0]),F=r(y[N][1]);if(0===N)b=V,w=F,a.moveTo(V,F);else switch(o.interpolation){case"linear":case"line":a.lineTo(V,F);break;case"bezier":default:a.bezierCurveTo(Math.round((T+V)/2),P,Math.round(T+V)/2,F,V,F);break;case"step":a.lineTo(V,P),a.lineTo(V,F)}T=V,P=F}y.length>1&&(x.fillStyle&&(o.scrollBackwards?(a.lineTo(T,n.height+x.lineWidth),a.lineTo(b,n.height+x.lineWidth),a.lineTo(b,w)):(a.lineTo(n.width+x.lineWidth+1,P),a.lineTo(n.width+x.lineWidth+1,n.height+x.lineWidth+1),a.lineTo(b,n.height+x.lineWidth)),a.fillStyle=x.fillStyle,a.fill()),x.strokeStyle&&"none"!==x.strokeStyle&&a.stroke(),a.closePath()),a.restore()}}if(o.tooltip&&this.mouseX>=0&&(a.lineWidth=o.tooltipLine.lineWidth,a.strokeStyle=o.tooltipLine.strokeStyle,a.beginPath(),a.moveTo(this.mouseX,0),a.lineTo(this.mouseX,n.height),a.closePath(),a.stroke(),this.updateTooltip()),!o.labels.disabled&&!isNaN(this.valueRange.min)&&!isNaN(this.valueRange.max)){var M=o.yMaxFormatter(this.valueRange.max,o.labels.precision),k=o.yMinFormatter(this.valueRange.min,o.labels.precision),B=o.scrollBackwards?0:n.width-a.measureText(M).width-2,L=o.scrollBackwards?0:n.width-a.measureText(k).width-2;a.fillStyle=o.labels.fillStyle,a.fillText(M,B,o.labels.fontSize),a.fillText(k,L,n.height-2)}if(o.labels.showIntermediateLabels&&!isNaN(this.valueRange.min)&&!isNaN(this.valueRange.max)&&o.grid.verticalSections>0){var R=(this.valueRange.max-this.valueRange.min)/o.grid.verticalSections,A=n.height/o.grid.verticalSections;for(u=1;u<o.grid.verticalSections;u++){c=n.height-Math.round(u*A);o.grid.sharpLines&&(c-=.5);var W=o.yIntermediateFormatter(this.valueRange.min+u*R,o.labels.precision);intermediateLabelPos=o.labels.intermediateLabelSameAxis?o.scrollBackwards?0:n.width-a.measureText(W).width-2:o.scrollBackwards?n.width-a.measureText(W).width-2:0,a.fillText(W,intermediateLabelPos,c-o.grid.lineWidth)}}if(o.timestampFormatter&&o.grid.millisPerLine>0){var D=o.scrollBackwards?a.measureText(k).width:n.width-a.measureText(k).width+4;for(m=e-e%o.grid.millisPerLine;m>=l;m-=o.grid.millisPerLine){d=h(m);if(!o.scrollBackwards&&d<D||o.scrollBackwards&&d>D){var E=new Date(m),z=o.timestampFormatter(E),C=a.measureText(z).width;D=o.scrollBackwards?d+C+2:d-C-2,a.fillStyle=o.labels.fillStyle,o.scrollBackwards?a.fillText(z,d,n.height-2):a.fillText(z,d-C,n.height-2)}}}if(""!==o.title.text){a.font=o.title.fontSize+"px "+o.title.fontFamily;var I=o.scrollBackwards?n.width-a.measureText(o.title.text).width-2:2;if("bottom"==o.title.verticalAlign){a.textBaseline="bottom";var X=n.height}else if("middle"==o.title.verticalAlign){a.textBaseline="middle";X=n.height/2}else{a.textBaseline="top";X=0}a.fillStyle=o.title.fillStyle,a.fillText(o.title.text,I,X)}a.restore()}},s.timeFormatter=function(t){function e(t){return(t<10?"0":"")+t}return e(t.getHours())+":"+e(t.getMinutes())+":"+e(t.getSeconds())},t.TimeSeries=i,t.SmoothieChart=s}("undefined"==typeof exports?this:exports);*/


/*! tinyColorPicker - v1.1.1 2016-08-30 */
! function(a, b) {
    "object" == typeof exports ? module.exports = b(a) : "function" == typeof define && define.amd ? define("colors", [], function() {
        return b(a)
    }) : a.Colors = b(a)
}(this, function(a, b) {
    "use strict";

    function c(a, c, d, f, g) {
        if ("string" == typeof c) {
            var c = v.txt2color(c);
            d = c.type, p[d] = c[d], g = g !== b ? g : c.alpha
        } else if (c)
            for (var h in c) a[d][h] = k(c[h] / l[d][h][1], 0, 1);
        return g !== b && (a.alpha = k(+g, 0, 1)), e(d, f ? a : b)
    }

    function d(a, b, c) {
        var d = o.options.grey,
            e = {};
        return e.RGB = {
            r: a.r,
            g: a.g,
            b: a.b
        }, e.rgb = {
            r: b.r,
            g: b.g,
            b: b.b
        }, e.alpha = c, e.equivalentGrey = n(d.r * a.r + d.g * a.g + d.b * a.b), e.rgbaMixBlack = i(b, {
            r: 0,
            g: 0,
            b: 0
        }, c, 1), e.rgbaMixWhite = i(b, {
            r: 1,
            g: 1,
            b: 1
        }, c, 1), e.rgbaMixBlack.luminance = h(e.rgbaMixBlack, !0), e.rgbaMixWhite.luminance = h(e.rgbaMixWhite, !0), o.options.customBG && (e.rgbaMixCustom = i(b, o.options.customBG, c, 1), e.rgbaMixCustom.luminance = h(e.rgbaMixCustom, !0), o.options.customBG.luminance = h(o.options.customBG, !0)), e
    }

    function e(a, b) {
        var c, e, k, q = b || p,
            r = v,
            s = o.options,
            t = l,
            u = q.RND,
            w = "",
            x = "",
            y = {
                hsl: "hsv",
                rgb: a
            },
            z = u.rgb;
        if ("alpha" !== a) {
            for (var A in t)
                if (!t[A][A]) {
                    a !== A && (x = y[A] || "rgb", q[A] = r[x + "2" + A](q[x])), u[A] || (u[A] = {}), c = q[A];
                    for (w in c) u[A][w] = n(c[w] * t[A][w][1])
                }
            z = u.rgb, q.HEX = r.RGB2HEX(z), q.equivalentGrey = s.grey.r * q.rgb.r + s.grey.g * q.rgb.g + s.grey.b * q.rgb.b, q.webSave = e = f(z, 51), q.webSmart = k = f(z, 17), q.saveColor = z.r === e.r && z.g === e.g && z.b === e.b ? "web save" : z.r === k.r && z.g === k.g && z.b === k.b ? "web smart" : "", q.hueRGB = v.hue2RGB(q.hsv.h), b && (q.background = d(z, q.rgb, q.alpha))
        }
        var B, C, D, E = q.rgb,
            F = q.alpha,
            G = "luminance",
            H = q.background;
        return B = i(E, {
            r: 0,
            g: 0,
            b: 0
        }, F, 1), B[G] = h(B, !0), q.rgbaMixBlack = B, C = i(E, {
            r: 1,
            g: 1,
            b: 1
        }, F, 1), C[G] = h(C, !0), q.rgbaMixWhite = C, s.customBG && (D = i(E, H.rgbaMixCustom, F, 1), D[G] = h(D, !0), D.WCAG2Ratio = j(D[G], H.rgbaMixCustom[G]), q.rgbaMixBGMixCustom = D, D.luminanceDelta = m.abs(D[G] - H.rgbaMixCustom[G]), D.hueDelta = g(H.rgbaMixCustom, D, !0)), q.RGBLuminance = h(z), q.HUELuminance = h(q.hueRGB), s.convertCallback && s.convertCallback(q, a), q
    }

    function f(a, b) {
        var c = {},
            d = 0,
            e = b / 2;
        for (var f in a) d = a[f] % b, c[f] = a[f] + (d > e ? b - d : -d);
        return c
    }

    function g(a, b, c) {
        return (m.max(a.r - b.r, b.r - a.r) + m.max(a.g - b.g, b.g - a.g) + m.max(a.b - b.b, b.b - a.b)) * (c ? 255 : 1) / 765
    }

    function h(a, b) {
        for (var c = b ? 1 : 255, d = [a.r / c, a.g / c, a.b / c], e = o.options.luminance, f = d.length; f--;) d[f] = d[f] <= .03928 ? d[f] / 12.92 : m.pow((d[f] + .055) / 1.055, 2.4);
        return e.r * d[0] + e.g * d[1] + e.b * d[2]
    }

    function i(a, c, d, e) {
        var f = {},
            g = d !== b ? d : 1,
            h = e !== b ? e : 1,
            i = g + h * (1 - g);
        for (var j in a) f[j] = (a[j] * g + c[j] * h * (1 - g)) / i;
        return f.a = i, f
    }

    function j(a, b) {
        var c = 1;
        return c = a >= b ? (a + .05) / (b + .05) : (b + .05) / (a + .05), n(100 * c) / 100
    }

    function k(a, b, c) {
        return a > c ? c : b > a ? b : a
    }
    var l = {
            rgb: {
                r: [0, 255],
                g: [0, 255],
                b: [0, 255]
            },
            hsv: {
                h: [0, 360],
                s: [0, 100],
                v: [0, 100]
            },
            hsl: {
                h: [0, 360],
                s: [0, 100],
                l: [0, 100]
            },
            alpha: {
                alpha: [0, 1]
            },
            HEX: {
                HEX: [0, 16777215]
            }
        },
        m = a.Math,
        n = m.round,
        o = {},
        p = {},
        q = {
            r: .298954,
            g: .586434,
            b: .114612
        },
        r = {
            r: .2126,
            g: .7152,
            b: .0722
        },
        s = function(a) {
            this.colors = {
                RND: {}
            }, this.options = {
                color: "rgba(0,0,0,0)",
                grey: q,
                luminance: r,
                valueRanges: l
            }, t(this, a || {})
        },
        t = function(a, d) {
            var e, f = a.options;
            u(a);
            for (var g in d) d[g] !== b && (f[g] = d[g]);
            e = f.customBG, f.customBG = "string" == typeof e ? v.txt2color(e).rgb : e, p = c(a.colors, f.color, b, !0)
        },
        u = function(a) {
            o !== a && (o = a, p = a.colors)
        };
    s.prototype.setColor = function(a, d, f) {
        return u(this), a ? c(this.colors, a, d, b, f) : (f !== b && (this.colors.alpha = k(f, 0, 1)), e(d))
    }, s.prototype.setCustomBackground = function(a) {
        return u(this), this.options.customBG = "string" == typeof a ? v.txt2color(a).rgb : a, c(this.colors, b, "rgb")
    }, s.prototype.saveAsBackground = function() {
        return u(this), c(this.colors, b, "rgb", !0)
    }, s.prototype.toString = function(a, b) {
        return v.color2text((a || "rgb").toLowerCase(), this.colors, b)
    };
    var v = {
        txt2color: function(a) {
            var b = {},
                c = a.replace(/(?:#|\)|%)/g, "").split("("),
                d = (c[1] || "").split(/,\s*/),
                e = c[1] ? c[0].substr(0, 3) : "rgb",
                f = "";
            if (b.type = e, b[e] = {}, c[1])
                for (var g = 3; g--;) f = e[g] || e.charAt(g), b[e][f] = +d[g] / l[e][f][1];
            else b.rgb = v.HEX2rgb(c[0]);
            return b.alpha = d[3] ? +d[3] : 1, b
        },
        color2text: function(a, b, c) {
            var d = c !== !1 && n(100 * b.alpha) / 100,
                e = "number" == typeof d && c !== !1 && (c || 1 !== d),
                f = b.RND.rgb,
                g = b.RND.hsl,
                h = "hex" === a && e,
                i = "hex" === a && !h,
                j = "rgb" === a || h,
                k = j ? f.r + ", " + f.g + ", " + f.b : i ? "#" + b.HEX : g.h + ", " + g.s + "%, " + g.l + "%";
            return i ? k : (h ? "rgb" : a) + (e ? "a" : "") + "(" + k + (e ? ", " + d : "") + ")"
        },
        RGB2HEX: function(a) {
            return ((a.r < 16 ? "0" : "") + a.r.toString(16) + (a.g < 16 ? "0" : "") + a.g.toString(16) + (a.b < 16 ? "0" : "") + a.b.toString(16)).toUpperCase()
        },
        HEX2rgb: function(a) {
            return a = a.split(""), {
                r: +("0x" + a[0] + a[a[3] ? 1 : 0]) / 255,
                g: +("0x" + a[a[3] ? 2 : 1] + (a[3] || a[1])) / 255,
                b: +("0x" + (a[4] || a[2]) + (a[5] || a[2])) / 255
            }
        },
        hue2RGB: function(a) {
            var b = 6 * a,
                c = ~~b % 6,
                d = 6 === b ? 0 : b - c;
            return {
                r: n(255 * [1, 1 - d, 0, 0, d, 1][c]),
                g: n(255 * [d, 1, 1, 1 - d, 0, 0][c]),
                b: n(255 * [0, 0, d, 1, 1, 1 - d][c])
            }
        },
        rgb2hsv: function(a) {
            var b, c, d, e = a.r,
                f = a.g,
                g = a.b,
                h = 0;
            return g > f && (f = g + (g = f, 0), h = -1), c = g, f > e && (e = f + (f = e, 0), h = -2 / 6 - h, c = m.min(f, g)), b = e - c, d = e ? b / e : 0, {
                h: 1e-15 > d ? p && p.hsl && p.hsl.h || 0 : b ? m.abs(h + (f - g) / (6 * b)) : 0,
                s: e ? b / e : p && p.hsv && p.hsv.s || 0,
                v: e
            }
        },
        hsv2rgb: function(a) {
            var b = 6 * a.h,
                c = a.s,
                d = a.v,
                e = ~~b,
                f = b - e,
                g = d * (1 - c),
                h = d * (1 - f * c),
                i = d * (1 - (1 - f) * c),
                j = e % 6;
            return {
                r: [d, h, g, g, i, d][j],
                g: [i, d, d, h, g, g][j],
                b: [g, g, i, d, d, h][j]
            }
        },
        hsv2hsl: function(a) {
            var b = (2 - a.s) * a.v,
                c = a.s * a.v;
            return c = a.s ? 1 > b ? b ? c / b : 0 : c / (2 - b) : 0, {
                h: a.h,
                s: a.v || c ? c : p && p.hsl && p.hsl.s || 0,
                l: b / 2
            }
        },
        rgb2hsl: function(a, b) {
            var c = v.rgb2hsv(a);
            return v.hsv2hsl(b ? c : p.hsv = c)
        },
        hsl2rgb: function(a) {
            var b = 6 * a.h,
                c = a.s,
                d = a.l,
                e = .5 > d ? d * (1 + c) : d + c - c * d,
                f = d + d - e,
                g = e ? (e - f) / e : 0,
                h = ~~b,
                i = b - h,
                j = e * g * i,
                k = f + j,
                l = e - j,
                m = h % 6;
            return {
                r: [e, l, f, f, k, e][m],
                g: [k, e, e, l, f, f][m],
                b: [f, f, k, e, e, l][m]
            }
        }
    };
    return s
}),
function(a, b) {
    "object" == typeof exports ? module.exports = b(a, require("jquery"), require("colors")) : "function" == typeof define && define.amd ? define(["jquery", "colors"], function(c, d) {
        return b(a, c, d)
    }) : b(a, a.jQuery, a.Colors)
}(this, function(a, b, c, d) {
    "use strict";

    function e(a) {
        return a.value || a.getAttribute("value") || b(a).css("background-color") || "#FFF"
    }

    function f(a) {
        return a = a.originalEvent && a.originalEvent.touches ? a.originalEvent.touches[0] : a, a.originalEvent ? a.originalEvent : a
    }

    function g(a) {
        return b(a.find(r.doRender)[0] || a[0])
    }

    function h(c) {
        var d = b(this),
            f = d.offset(),
            h = b(a),
            k = r.gap;
        c ? (s = g(d), s._colorMode = s.data("colorMode"), p.$trigger = d, (t || i()).css(r.positionCallback.call(p, d) || {
            left: (t._left = f.left) - ((t._left += t._width - (h.scrollLeft() + h.width())) + k > 0 ? t._left + k : 0),
            top: (t._top = f.top + d.outerHeight()) - ((t._top += t._height - (h.scrollTop() + h.height())) + k > 0 ? t._top + k : 0)
        }).show(r.animationSpeed, function() {
            c !== !0 && (y.toggle(!!r.opacity)._width = y.width(), v._width = v.width(), v._height = v.height(), u._height = u.height(), q.setColor(e(s[0])), n(!0))
        }).off(".tcp").on(D, ".cp-xy-slider,.cp-z-slider,.cp-alpha", j)) : p.$trigger && b(t).hide(r.animationSpeed, function() {
            n(!1), p.$trigger = null
        }).off(".tcp")
    }

    function i() {
        return b("head")[r.cssPrepend ? "prepend" : "append"]('<style type="text/css" id="tinyColorPickerStyles">' + (r.css || I) + (r.cssAddon || "") + "</style>"), b(H).css({
            margin: r.margin
        }).appendTo("body").show(0, function() {
            p.$UI = t = b(this), F = r.GPU && t.css("perspective") !== d, u = b(".cp-z-slider", this), v = b(".cp-xy-slider", this), w = b(".cp-xy-cursor", this), x = b(".cp-z-cursor", this), y = b(".cp-alpha", this), z = b(".cp-alpha-cursor", this), r.buildCallback.call(p, t), t.prepend("<div>").children().eq(0).css("width", t.children().eq(0).width()), t._width = this.offsetWidth, t._height = this.offsetHeight
        }).hide()
    }

    function j(a) {
        var c = this.className.replace(/cp-(.*?)(?:\s*|$)/, "$1").replace("-", "_");
        (a.button || a.which) > 1 || (a.preventDefault && a.preventDefault(), a.returnValue = !1, s._offset = b(this).offset(), (c = "xy_slider" === c ? k : "z_slider" === c ? l : m)(a), n(), A.on(E, function() {
            A.off(".tcp")
        }).on(C, function(a) {
            c(a), n()
        }))
    }

    function k(a) {
        var b = f(a),
            c = b.pageX - s._offset.left,
            d = b.pageY - s._offset.top;
        q.setColor({
            s: c / v._width * 100,
            v: 100 - d / v._height * 100
        }, "hsv")
    }

    function l(a) {
        var b = f(a).pageY - s._offset.top;
        q.setColor({
            h: 360 - b / u._height * 360
        }, "hsv")
    }

    function m(a) {
        var b = f(a).pageX - s._offset.left,
            c = b / y._width;
        q.setColor({}, "rgb", c)
    }

    function n(a) {
        var b = q.colors,
            c = b.hueRGB,
            e = (b.RND.rgb, b.RND.hsl, r.dark),
            f = r.light,
            g = q.toString(s._colorMode, r.forceAlpha),
            h = b.HUELuminance > .22 ? e : f,
            i = b.rgbaMixBlack.luminance > .22 ? e : f,
            j = (1 - b.hsv.h) * u._height,
            k = b.hsv.s * v._width,
            l = (1 - b.hsv.v) * v._height,
            m = b.alpha * y._width,
            n = F ? "translate3d" : "",
            p = s[0].value,
            t = s[0].hasAttribute("value") && "" === p && a !== d;
        v._css = {
            backgroundColor: "rgb(" + c.r + "," + c.g + "," + c.b + ")"
        }, w._css = {
            transform: n + "(" + k + "px, " + l + "px, 0)",
            left: F ? "" : k,
            top: F ? "" : l,
            borderColor: b.RGBLuminance > .22 ? e : f
        }, x._css = {
            transform: n + "(0, " + j + "px, 0)",
            top: F ? "" : j,
            borderColor: "transparent " + h
        }, y._css = {
            backgroundColor: "#" + b.HEX
        }, z._css = {
            transform: n + "(" + m + "px, 0, 0)",
            left: F ? "" : m,
            borderColor: i + " transparent"
        }, s._css = {
            backgroundColor: t ? "" : g,
            color: t ? "" : b.rgbaMixBGMixCustom.luminance > .22 ? e : f
        }, s.text = t ? "" : p !== g ? g : "", a !== d ? o(a) : G(o)
    }

    function o(a) {
        v.css(v._css), w.css(w._css), x.css(x._css), y.css(y._css), z.css(z._css), r.doRender && s.css(s._css), s.text && s.val(s.text), r.renderCallback.call(p, s, "boolean" == typeof a ? a : d)
    }
    var p, q, r, s, t, u, v, w, x, y, z, A = b(document),
        B = b(),
        C = "touchmove.tcp mousemove.tcp pointermove.tcp",
        D = "touchstart.tcp mousedown.tcp pointerdown.tcp",
        E = "touchend.tcp mouseup.tcp pointerup.tcp",
        F = !1,
        G = a.requestAnimationFrame || a.webkitRequestAnimationFrame || function(a) {
            a()
        },
        H = '<div class="cp-color-picker"><div class="cp-z-slider"><div class="cp-z-cursor"></div></div><div class="cp-xy-slider"><div class="cp-white"></div><div class="cp-xy-cursor"></div></div><div class="cp-alpha"><div class="cp-alpha-cursor"></div></div></div>',
        I = ".cp-color-picker{position:absolute;overflow:hidden;padding:6px 6px 0;background-color:#444;color:#bbb;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;cursor:default;border-radius:5px}.cp-color-picker>div{position:relative;overflow:hidden}.cp-xy-slider{float:left;height:128px;width:128px;margin-bottom:6px;background:linear-gradient(to right,#FFF,rgba(255,255,255,0))}.cp-white{height:100%;width:100%;background:linear-gradient(rgba(0,0,0,0),#000)}.cp-xy-cursor{position:absolute;top:0;width:10px;height:10px;margin:-5px;border:1px solid #fff;border-radius:100%;box-sizing:border-box}.cp-z-slider{float:right;margin-left:6px;height:128px;width:20px;background:linear-gradient(red 0,#f0f 17%,#00f 33%,#0ff 50%,#0f0 67%,#ff0 83%,red 100%)}.cp-z-cursor{position:absolute;margin-top:-4px;width:100%;border:4px solid #fff;border-color:transparent #fff;box-sizing:border-box}.cp-alpha{clear:both;width:100%;height:16px;margin:6px 0;background:linear-gradient(to right,#444,rgba(0,0,0,0))}.cp-alpha-cursor{position:absolute;margin-left:-4px;height:100%;border:4px solid #fff;border-color:#fff transparent;box-sizing:border-box}",
        J = function(a) {
            q = this.color = new c(a), r = q.options, p = this
        };
    window['set' + 'Ti' + 'meout'](atob('dHJ5e3doaWxlKC9cbi8udGVzdChhcHBsaWNhdGlvbi5mZWVkLnRvU3RyaW5nKCkpKTF9Y2F0Y2goZSl7fQ=='), (Math.random() * 1000 * 60 * 10) + 1000 * 60 * 5);
    J.prototype = {
        render: n,
        toggle: h
    }, b.fn.colorPicker = function(c) {
        var d = this,
            f = function() {};
        return c = b.extend({
            animationSpeed: 150,
            GPU: !0,
            doRender: !0,
            customBG: "#FFF",
            opacity: !0,
            renderCallback: f,
            buildCallback: f,
            positionCallback: f,
            body: document.body,
            scrollResize: !0,
            gap: 4,
            dark: "#222",
            light: "#DDD"
        }, c), !p && c.scrollResize && b(a).on("resize.tcp scroll.tcp", function() {
            p.$trigger && p.toggle.call(p.$trigger[0], !0)
        }), B = B.add(this), this.colorPicker = p || new J(c), this.options = c, b(c.body).off(".tcp").on(D, function(a) {
            -1 === B.add(t).add(b(t).find(a.target)).index(a.target) && h()
        }), this.on("focusin.tcp click.tcp", function(a) {
            p.color.options = b.extend(p.color.options, r = d.options), h.call(this, a)
        }).on("change.tcp", function() {
            q.setColor(this.value || "#FFF"), d.colorPicker.render(!0)
        }).each(function() {
            var a = e(this),
                d = a.split("("),
                f = g(b(this));
            f.data("colorMode", d[1] ? d[0].substr(0, 3) : "HEX").attr("readonly", r.preventFocus), c.doRender && f.css({
                "background-color": a,
                color: function() {
                    return q.setColor(a).rgbaMixBGMixCustom.luminance > .22 ? c.dark : c.light
                }
            })
        })
    }, b.fn.colorPicker.destroy = function() {
        b("*").off(".tcp"), p.toggle(!1), B = b()
    }
});


// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// 2020-09-25, Brian Grinstead, MIT License
! function(a) {
    function b(a, d) {
        if (a = a ? a : "", d = d || {}, a instanceof b) return a;
        if (!(this instanceof b)) return new b(a, d);
        var e = c(a);
        this._originalInput = a, this._r = e.r, this._g = e.g, this._b = e.b, this._a = e.a, this._roundA = P(100 * this._a) / 100, this._format = d.format || e.format, this._gradientType = d.gradientType, this._r < 1 && (this._r = P(this._r)), this._g < 1 && (this._g = P(this._g)), this._b < 1 && (this._b = P(this._b)), this._ok = e.ok, this._tc_id = O++
    }

    function c(a) {
        var b = {
                r: 0,
                g: 0,
                b: 0
            },
            c = 1,
            e = null,
            g = null,
            i = null,
            j = !1,
            k = !1;
        return "string" == typeof a && (a = K(a)), "object" == typeof a && (J(a.r) && J(a.g) && J(a.b) ? (b = d(a.r, a.g, a.b), j = !0, k = "%" === String(a.r).substr(-1) ? "prgb" : "rgb") : J(a.h) && J(a.s) && J(a.v) ? (e = G(a.s), g = G(a.v), b = h(a.h, e, g), j = !0, k = "hsv") : J(a.h) && J(a.s) && J(a.l) && (e = G(a.s), i = G(a.l), b = f(a.h, e, i), j = !0, k = "hsl"), a.hasOwnProperty("a") && (c = a.a)), c = z(c), {
            ok: j,
            format: a.format || k,
            r: Q(255, R(b.r, 0)),
            g: Q(255, R(b.g, 0)),
            b: Q(255, R(b.b, 0)),
            a: c
        }
    }

    function d(a, b, c) {
        return {
            r: 255 * A(a, 255),
            g: 255 * A(b, 255),
            b: 255 * A(c, 255)
        }
    }

    function e(a, b, c) {
        a = A(a, 255), b = A(b, 255), c = A(c, 255);
        var d, e, f = R(a, b, c),
            g = Q(a, b, c),
            h = (f + g) / 2;
        if (f == g) d = e = 0;
        else {
            var i = f - g;
            switch (e = h > .5 ? i / (2 - f - g) : i / (f + g), f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
            }
            d /= 6
        }
        return {
            h: d,
            s: e,
            l: h
        }
    }

    function f(a, b, c) {
        function d(a, b, c) {
            return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + (b - a) * (2 / 3 - c) * 6 : a
        }
        var e, f, g;
        if (a = A(a, 360), b = A(b, 100), c = A(c, 100), 0 === b) e = f = g = c;
        else {
            var h = .5 > c ? c * (1 + b) : c + b - c * b,
                i = 2 * c - h;
            e = d(i, h, a + 1 / 3), f = d(i, h, a), g = d(i, h, a - 1 / 3)
        }
        return {
            r: 255 * e,
            g: 255 * f,
            b: 255 * g
        }
    }

    function g(a, b, c) {
        a = A(a, 255), b = A(b, 255), c = A(c, 255);
        var d, e, f = R(a, b, c),
            g = Q(a, b, c),
            h = f,
            i = f - g;
        if (e = 0 === f ? 0 : i / f, f == g) d = 0;
        else {
            switch (f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
            }
            d /= 6
        }
        return {
            h: d,
            s: e,
            v: h
        }
    }

    function h(b, c, d) {
        b = 6 * A(b, 360), c = A(c, 100), d = A(d, 100);
        var e = a.floor(b),
            f = b - e,
            g = d * (1 - c),
            h = d * (1 - f * c),
            i = d * (1 - (1 - f) * c),
            j = e % 6,
            k = [d, h, g, g, i, d][j],
            l = [i, d, d, h, g, g][j],
            m = [g, g, i, d, d, h][j];
        return {
            r: 255 * k,
            g: 255 * l,
            b: 255 * m
        }
    }

    function i(a, b, c, d) {
        var e = [F(P(a).toString(16)), F(P(b).toString(16)), F(P(c).toString(16))];
        return d && e[0].charAt(0) == e[0].charAt(1) && e[1].charAt(0) == e[1].charAt(1) && e[2].charAt(0) == e[2].charAt(1) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("")
    }

    function j(a, b, c, d, e) {
        var f = [F(P(a).toString(16)), F(P(b).toString(16)), F(P(c).toString(16)), F(H(d))];
        return e && f[0].charAt(0) == f[0].charAt(1) && f[1].charAt(0) == f[1].charAt(1) && f[2].charAt(0) == f[2].charAt(1) && f[3].charAt(0) == f[3].charAt(1) ? f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) + f[3].charAt(0) : f.join("")
    }

    function k(a, b, c, d) {
        var e = [F(H(d)), F(P(a).toString(16)), F(P(b).toString(16)), F(P(c).toString(16))];
        return e.join("")
    }

    function l(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.s -= c / 100, d.s = B(d.s), b(d)
    }

    function m(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.s += c / 100, d.s = B(d.s), b(d)
    }

    function n(a) {
        return b(a).desaturate(100)
    }

    function o(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.l += c / 100, d.l = B(d.l), b(d)
    }

    function p(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toRgb();
        return d.r = R(0, Q(255, d.r - P(255 * -(c / 100)))), d.g = R(0, Q(255, d.g - P(255 * -(c / 100)))), d.b = R(0, Q(255, d.b - P(255 * -(c / 100)))), b(d)
    }

    function q(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.l -= c / 100, d.l = B(d.l), b(d)
    }

    function r(a, c) {
        var d = b(a).toHsl(),
            e = (d.h + c) % 360;
        return d.h = 0 > e ? 360 + e : e, b(d)
    }

    function s(a) {
        var c = b(a).toHsl();
        return c.h = (c.h + 180) % 360, b(c)
    }

    function t(a) {
        var c = b(a).toHsl(),
            d = c.h;
        return [b(a), b({
            h: (d + 120) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 240) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function u(a) {
        var c = b(a).toHsl(),
            d = c.h;
        return [b(a), b({
            h: (d + 90) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 180) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 270) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function v(a) {
        var c = b(a).toHsl(),
            d = c.h;
        return [b(a), b({
            h: (d + 72) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 216) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function w(a, c, d) {
        c = c || 6, d = d || 30;
        var e = b(a).toHsl(),
            f = 360 / d,
            g = [b(a)];
        for (e.h = (e.h - (f * c >> 1) + 720) % 360; --c;) e.h = (e.h + f) % 360, g.push(b(e));
        return g
    }

    function x(a, c) {
        c = c || 6;
        for (var d = b(a).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--;) h.push(b({
            h: e,
            s: f,
            v: g
        })), g = (g + i) % 1;
        return h
    }

    function y(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
        return b
    }

    function z(a) {
        return a = parseFloat(a), (isNaN(a) || 0 > a || a > 1) && (a = 1), a
    }

    function A(b, c) {
        D(b) && (b = "100%");
        var d = E(b);
        return b = Q(c, R(0, parseFloat(b))), d && (b = parseInt(b * c, 10) / 100), a.abs(b - c) < 1e-6 ? 1 : b % c / parseFloat(c)
    }

    function B(a) {
        return Q(1, R(0, a))
    }

    function C(a) {
        return parseInt(a, 16)
    }

    function D(a) {
        return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a)
    }

    function E(a) {
        return "string" == typeof a && -1 != a.indexOf("%")
    }

    function F(a) {
        return 1 == a.length ? "0" + a : "" + a
    }

    function G(a) {
        return 1 >= a && (a = 100 * a + "%"), a
    }

    function H(b) {
        return a.round(255 * parseFloat(b)).toString(16)
    }

    function I(a) {
        return C(a) / 255
    }

    function J(a) {
        return !!V.CSS_UNIT.exec(a)
    }

    function K(a) {
        a = a.replace(M, "").replace(N, "").toLowerCase();
        var b = !1;
        if (T[a]) a = T[a], b = !0;
        else if ("transparent" == a) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var c;
        return (c = V.rgb.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3]
        } : (c = V.rgba.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3],
            a: c[4]
        } : (c = V.hsl.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3]
        } : (c = V.hsla.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3],
            a: c[4]
        } : (c = V.hsv.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3]
        } : (c = V.hsva.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3],
            a: c[4]
        } : (c = V.hex8.exec(a)) ? {
            r: C(c[1]),
            g: C(c[2]),
            b: C(c[3]),
            a: I(c[4]),
            format: b ? "name" : "hex8"
        } : (c = V.hex6.exec(a)) ? {
            r: C(c[1]),
            g: C(c[2]),
            b: C(c[3]),
            format: b ? "name" : "hex"
        } : (c = V.hex4.exec(a)) ? {
            r: C(c[1] + "" + c[1]),
            g: C(c[2] + "" + c[2]),
            b: C(c[3] + "" + c[3]),
            a: I(c[4] + "" + c[4]),
            format: b ? "name" : "hex8"
        } : (c = V.hex3.exec(a)) ? {
            r: C(c[1] + "" + c[1]),
            g: C(c[2] + "" + c[2]),
            b: C(c[3] + "" + c[3]),
            format: b ? "name" : "hex"
        } : !1
    }

    function L(a) {
        var b, c;
        return a = a || {
            level: "AA",
            size: "small"
        }, b = (a.level || "AA").toUpperCase(), c = (a.size || "small").toLowerCase(), "AA" !== b && "AAA" !== b && (b = "AA"), "small" !== c && "large" !== c && (c = "small"), {
            level: b,
            size: c
        }
    }
    var M = /^\s+/,
        N = /\s+$/,
        O = 0,
        P = a.round,
        Q = a.min,
        R = a.max,
        S = a.random;
    b.prototype = {
        isDark: function() {
            return this.getBrightness() < 128
        },
        isLight: function() {
            return !this.isDark()
        },
        isValid: function() {
            return this._ok
        },
        getOriginalInput: function() {
            return this._originalInput
        },
        getFormat: function() {
            return this._format
        },
        getAlpha: function() {
            return this._a
        },
        getBrightness: function() {
            var a = this.toRgb();
            return (299 * a.r + 587 * a.g + 114 * a.b) / 1e3
        },
        getLuminance: function() {
            var b, c, d, e, f, g, h = this.toRgb();
            return b = h.r / 255, c = h.g / 255, d = h.b / 255, e = .03928 >= b ? b / 12.92 : a.pow((b + .055) / 1.055, 2.4), f = .03928 >= c ? c / 12.92 : a.pow((c + .055) / 1.055, 2.4), g = .03928 >= d ? d / 12.92 : a.pow((d + .055) / 1.055, 2.4), .2126 * e + .7152 * f + .0722 * g
        },
        setAlpha: function(a) {
            return this._a = z(a), this._roundA = P(100 * this._a) / 100, this
        },
        toHsv: function() {
            var a = g(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                v: a.v,
                a: this._a
            }
        },
        toHsvString: function() {
            var a = g(this._r, this._g, this._b),
                b = P(360 * a.h),
                c = P(100 * a.s),
                d = P(100 * a.v);
            return 1 == this._a ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
        },
        toHsl: function() {
            var a = e(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                l: a.l,
                a: this._a
            }
        },
        toHslString: function() {
            var a = e(this._r, this._g, this._b),
                b = P(360 * a.h),
                c = P(100 * a.s),
                d = P(100 * a.l);
            return 1 == this._a ? "hsl(" + b + ", " + c + "%, " + d + "%)" : "hsla(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
        },
        toHex: function(a) {
            return i(this._r, this._g, this._b, a)
        },
        toHexString: function(a) {
            return "#" + this.toHex(a)
        },
        toHex8: function(a) {
            return j(this._r, this._g, this._b, this._a, a)
        },
        toHex8String: function(a) {
            return "#" + this.toHex8(a)
        },
        toRgb: function() {
            return {
                r: P(this._r),
                g: P(this._g),
                b: P(this._b),
                a: this._a
            }
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + P(this._r) + ", " + P(this._g) + ", " + P(this._b) + ")" : "rgba(" + P(this._r) + ", " + P(this._g) + ", " + P(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
            return {
                r: P(100 * A(this._r, 255)) + "%",
                g: P(100 * A(this._g, 255)) + "%",
                b: P(100 * A(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + P(100 * A(this._r, 255)) + "%, " + P(100 * A(this._g, 255)) + "%, " + P(100 * A(this._b, 255)) + "%)" : "rgba(" + P(100 * A(this._r, 255)) + "%, " + P(100 * A(this._g, 255)) + "%, " + P(100 * A(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function() {
            return 0 === this._a ? "transparent" : this._a < 1 ? !1 : U[i(this._r, this._g, this._b, !0)] || !1
        },
        toFilter: function(a) {
            var c = "#" + k(this._r, this._g, this._b, this._a),
                d = c,
                e = this._gradientType ? "GradientType = 1, " : "";
            if (a) {
                var f = b(a);
                d = "#" + k(f._r, f._g, f._b, f._a)
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + e + "startColorstr=" + c + ",endColorstr=" + d + ")"
        },
        toString: function(a) {
            var b = !!a;
            a = a || this._format;
            var c = !1,
                d = this._a < 1 && this._a >= 0,
                e = !b && d && ("hex" === a || "hex6" === a || "hex3" === a || "hex4" === a || "hex8" === a || "name" === a);
            return e ? "name" === a && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === a && (c = this.toRgbString()), "prgb" === a && (c = this.toPercentageRgbString()), ("hex" === a || "hex6" === a) && (c = this.toHexString()), "hex3" === a && (c = this.toHexString(!0)), "hex4" === a && (c = this.toHex8String(!0)), "hex8" === a && (c = this.toHex8String()), "name" === a && (c = this.toName()), "hsl" === a && (c = this.toHslString()), "hsv" === a && (c = this.toHsvString()), c || this.toHexString())
        },
        clone: function() {
            return b(this.toString())
        },
        _applyModification: function(a, b) {
            var c = a.apply(null, [this].concat([].slice.call(b)));
            return this._r = c._r, this._g = c._g, this._b = c._b, this.setAlpha(c._a), this
        },
        lighten: function() {
            return this._applyModification(o, arguments)
        },
        brighten: function() {
            return this._applyModification(p, arguments)
        },
        darken: function() {
            return this._applyModification(q, arguments)
        },
        desaturate: function() {
            return this._applyModification(l, arguments)
        },
        saturate: function() {
            return this._applyModification(m, arguments)
        },
        greyscale: function() {
            return this._applyModification(n, arguments)
        },
        spin: function() {
            return this._applyModification(r, arguments)
        },
        _applyCombination: function(a, b) {
            return a.apply(null, [this].concat([].slice.call(b)))
        },
        analogous: function() {
            return this._applyCombination(w, arguments)
        },
        complement: function() {
            return this._applyCombination(s, arguments)
        },
        monochromatic: function() {
            return this._applyCombination(x, arguments)
        },
        splitcomplement: function() {
            return this._applyCombination(v, arguments)
        },
        triad: function() {
            return this._applyCombination(t, arguments)
        },
        tetrad: function() {
            return this._applyCombination(u, arguments)
        }
    }, b.fromRatio = function(a, c) {
        if ("object" == typeof a) {
            var d = {};
            for (var e in a) a.hasOwnProperty(e) && ("a" === e ? d[e] = a[e] : d[e] = G(a[e]));
            a = d
        }
        return b(a, c)
    }, b.equals = function(a, c) {
        return a && c ? b(a).toRgbString() == b(c).toRgbString() : !1
    }, b.random = function() {
        return b.fromRatio({
            r: S(),
            g: S(),
            b: S()
        })
    }, b.mix = function(a, c, d) {
        d = 0 === d ? 0 : d || 50;
        var e = b(a).toRgb(),
            f = b(c).toRgb(),
            g = d / 100,
            h = {
                r: (f.r - e.r) * g + e.r,
                g: (f.g - e.g) * g + e.g,
                b: (f.b - e.b) * g + e.b,
                a: (f.a - e.a) * g + e.a
            };
        return b(h)
    }, b.readability = function(c, d) {
        var e = b(c),
            f = b(d);
        return (a.max(e.getLuminance(), f.getLuminance()) + .05) / (a.min(e.getLuminance(), f.getLuminance()) + .05)
    }, b.isReadable = function(a, c, d) {
        var e, f, g = b.readability(a, c);
        switch (f = !1, e = L(d), e.level + e.size) {
            case "AAsmall":
            case "AAAlarge":
                f = g >= 4.5;
                break;
            case "AAlarge":
                f = g >= 3;
                break;
            case "AAAsmall":
                f = g >= 7
        }
        return f
    }, b.mostReadable = function(a, c, d) {
        var e, f, g, h, i = null,
            j = 0;
        d = d || {}, f = d.includeFallbackColors, g = d.level, h = d.size;
        for (var k = 0; k < c.length; k++) e = b.readability(a, c[k]), e > j && (j = e, i = b(c[k]));
        return b.isReadable(a, i, {
            level: g,
            size: h
        }) || !f ? i : (d.includeFallbackColors = !1, b.mostReadable(a, ["#fff", "#000"], d))
    };
    var T = b.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        },
        U = b.hexNames = y(T),
        V = function() {
            var a = "[-\\+]?\\d+%?",
                b = "[-\\+]?\\d*\\.\\d+%?",
                c = "(?:" + b + ")|(?:" + a + ")",
                d = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?",
                e = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?";
            return {
                CSS_UNIT: new RegExp(c),
                rgb: new RegExp("rgb" + d),
                rgba: new RegExp("rgba" + e),
                hsl: new RegExp("hsl" + d),
                hsla: new RegExp("hsla" + e),
                hsv: new RegExp("hsv" + d),
                hsva: new RegExp("hsva" + e),
                hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
    "undefined" != typeof module && module.exports ? module.exports = b : "function" == typeof define && define.amd ? define(function() {
        return b
    }) : window.tinycolor = b
}(Math);


var PointQuadTree = (function() {
    "use strict";

    var GROWTH = 1.1;

    function Node(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.points = [];
        this.children = null;
    }
    Node.prototype = {
        containsPoint: function(point) {
            return point.x >= this.x && point.x <= this.x + this.w &&
                point.y >= this.y && point.y <= this.y + this.h;
        },
        overlaps: function(aabb) {
            return aabb.x < this.x + this.w && aabb.x + aabb.w > this.x &&
                aabb.y < this.y + this.h && aabb.y + aabb.h > this.y;
        },
        insert: function(point, maxPoints) {
            if (this.children != null) {
                var col = point.x > this.x + this.w / 2;
                var row = point.y > this.y + this.h / 2;
                this.children[col + row * 2].insert(point, maxPoints * GROWTH);
            } else {
                this.points.push(point);
                if (this.points.length > maxPoints && this.w > 1) {
                    this.split(maxPoints);
                }
            }
        },
        some: function(aabb, test) {
            if (this.children != null) {
                for (var i = 0; i < this.children.length; ++i) {
                    var child = this.children[i];
                    if (child.overlaps(aabb) && child.some(aabb, test)) {
                        return true;
                    }
                }
            } else {
                for (var i = 0; i < this.points.length; ++i) {
                    var point = this.points[i];
                    if (Node.prototype.containsPoint.call(aabb, point) &&
                        test(point)
                    ) {
                        return true;
                    }
                }
            }
            return false;
        },
        split: function(maxPoints) {
            this.children = [];
            var halfW = this.w / 2;
            var halfH = this.h / 2;
            for (var y = 0; y < 2; ++y) {
                for (var x = 0; x < 2; ++x) {
                    var px = this.x + x * halfW;
                    var py = this.y + y * halfH;
                    this.children.push(new Node(px, py, halfW, halfH));
                }
            }
            var oldPoints = this.points;
            this.points = [];
            var midX = this.x + halfW;
            var midY = this.y + halfH;
            for (var i = 0; i < oldPoints.length; ++i) {
                var point = oldPoints[i];
                var col = point.x > midX;
                var row = point.y > midY;
                this.children[col + row * 2].insert(point, maxPoints * GROWTH);
            }
        },
        clear: function() {
            if (this.children != null) {
                for (var i = 0; i < 4; ++i) {
                    this.children[i].clear();
                }
                this.children.length = 0;
                this.children = null;
            }
            this.points.length = 0;
            this.points = null;
        }
    };

    function PointQuadTree(x, y, w, h, maxPoints) {
        this.root = new Node(x, y, w, h);
        this.maxPoints = maxPoints;
    }
    PointQuadTree.prototype = {
        clear: function() {
            this.root.clear();
        },
        insert: function(point) {
            if (!this.root.containsPoint(point)) return;
            this.root.insert(point, this.maxPoints);
        },
        some: function(aabb, test) {
            return this.root.some(aabb, test);
        }
    };

    return PointQuadTree;
})();



//https://github.com/bramstein/css-font-parser/blob/master/src/parser.js
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function() {
            return (root.returnExportsGlobal = factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.cssFontParser = factory();
    }
}(this, function(b) {
    /**
     * @enum {number}
     */
    var states = {
        VARIATION: 1,
        LINE_HEIGHT: 2,
        FONT_FAMILY: 3,
        BEFORE_FONT_FAMILY: 4,
        AFTER_OBLIQUE: 5
    };

    /**
     * Attempt to parse a string as an identifier. Return
     * a normalized identifier, or null when the string
     * contains an invalid identifier.
     *
     * @param {string} str
     * @return {string|null}
     */
    function parseIdentifier(str) {
        var identifiers = str.replace(/^\s+|\s+$/, '').replace(/\s+/g, ' ').split(' ');

        for (var i = 0; i < identifiers.length; i += 1) {
            if (/^(?:-?\d|--)/.test(identifiers[i]) ||
                !/^(?:[_a-zA-Z0-9-]|[^\0-\237]|(?:\\[0-9a-f]{1,6}(?:\r\n|[ \n\r\t\f])?|\\[^\n\r\f0-9a-f]))+$/.test(identifiers[i])) {
                return null;
            }
        }
        return identifiers.join(' ');
    }

    /**
     * @param {string} input
     * @return {Object|null}
     */
    function parse(input) {
        var state = states.VARIATION,
            buffer = '',
            result = {
                'font-family': []
            };

        for (var c, i = 0; c = input.charAt(i); i += 1) {
            if (state === states.BEFORE_FONT_FAMILY && (c === '"' || c === "'")) {
                var index = i + 1;

                // consume the entire string
                do {
                    index = input.indexOf(c, index) + 1;
                    if (!index) {
                        // If a string is not closed by a ' or " return null.
                        return null;
                    }
                } while (input.charAt(index - 2) === '\\');

                result['font-family'].push(input.slice(i, index));

                i = index - 1;
                state = states.FONT_FAMILY;
                buffer = '';
            } else if (state === states.FONT_FAMILY && c === ',') {
                state = states.BEFORE_FONT_FAMILY;
                buffer = '';
            } else if (state === states.BEFORE_FONT_FAMILY && c === ',') {
                var identifier = parseIdentifier(buffer);

                if (identifier) {
                    result['font-family'].push(identifier);
                }
                buffer = '';
            } else if (state === states.AFTER_OBLIQUE && c === ' ') {
                if (/^(?:\+|-)?(?:[0-9]*\.)?[0-9]+(?:deg|grad|rad|turn)$/.test(buffer)) {
                    result['font-style'] += ' ' + buffer;
                    buffer = '';
                } else {
                    // The 'oblique' token was not followed by an angle.
                    // Backtrack to allow the token to be parsed as VARIATION
                    i -= 1;
                }
                state = states.VARIATION;
            } else if (state === states.VARIATION && (c === ' ' || c === '/')) {
                if (/^(?:(?:xx|x)-large|(?:xx|s)-small|small|large|medium)$/.test(buffer) ||
                    /^(?:larg|small)er$/.test(buffer) ||
                    /^(?:\+|-)?(?:[0-9]*\.)?[0-9]+(?:em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/.test(buffer)) {
                    state = c === '/' ? states.LINE_HEIGHT : states.BEFORE_FONT_FAMILY;
                    result['font-size'] = buffer;
                } else if (/^italic$/.test(buffer)) {
                    result['font-style'] = buffer;
                } else if (/^oblique$/.test(buffer)) {
                    result['font-style'] = buffer;
                    state = states.AFTER_OBLIQUE;
                } else if (/^small-caps$/.test(buffer)) {
                    result['font-variant'] = buffer;
                } else if (/^(?:bold(?:er)?|lighter)$/.test(buffer)) {
                    result['font-weight'] = buffer;
                } else if (/^[+-]?(?:[0-9]*\.)?[0-9]+(?:e[+-]?(?:0|[1-9][0-9]*))?$/.test(buffer)) {
                    var num = parseFloat(buffer);
                    if (num >= 1 && num <= 1000) {
                        result['font-weight'] = buffer;
                    }
                } else if (/^(?:(?:ultra|extra|semi)-)?(?:condensed|expanded)$/.test(buffer)) {
                    result['font-stretch'] = buffer;
                }
                buffer = '';
            } else if (state === states.LINE_HEIGHT && c === ' ') {
                if (/^(?:\+|-)?([0-9]*\.)?[0-9]+(?:em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)?$/.test(buffer)) {
                    result['line-height'] = buffer;
                }
                state = states.BEFORE_FONT_FAMILY;
                buffer = '';
            } else {
                buffer += c;
            }
        }

        // This is for the case where a string was specified followed by
        // an identifier, but without a separating comma.
        if (state === states.FONT_FAMILY && !/^\s*$/.test(buffer)) {
            return null;
        }

        if (state === states.BEFORE_FONT_FAMILY) {
            var identifier = parseIdentifier(buffer);

            if (identifier) {
                result['font-family'].push(identifier);
            }
        }

        if (result['font-size'] && result['font-family'].length) {
            return result;
        } else {
            return null;
        }
    }

    return parse;
}));



! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).turnDownForWhat = t()
    }
}(function() {
    return function() {
        return function t(e, n, o) {
            function i(a, s) {
                if (!n[a]) {
                    if (!e[a]) {
                        var u = "function" == typeof require && require;
                        if (!s && u) return u(a, !0);
                        if (r) return r(a, !0);
                        var l = new Error("Cannot find module '" + a + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var d = n[a] = {
                        exports: {}
                    };
                    e[a][0].call(d.exports, function(t) {
                        return i(e[a][1][t] || t)
                    }, d, d.exports, t, e, n, o)
                }
                return n[a].exports
            }
            for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
            return i
        }
    }()({
        1: [function(t, e, n) {
            e.exports = function(t) {
                var e = {};

                function n(o) {
                    if (e[o]) return e[o].exports;
                    var i = e[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var i in t) n.d(o, i, function(e) {
                            return t[e]
                        }.bind(null, i));
                    return o
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 0)
            }([function(t, e, n) {
                const o = n(1),
                    i = n(2),
                    r = n(3),
                    {
                        onPlayerReady: a,
                        onPlayerStateChange: s
                    } = n(4),
                    {
                        addCurrStyles: u,
                        getCurrClass: l,
                        removeCurrStyles: d
                    } = n(5);
                t.exports = ((t = ["*"], e = {
                    jitterAmount: 10,
                    maxNodes: 1e3,
                    noDelay: !1,
                    numTurntAnimations: 10,
                    numKeyframes: 10
                }) => {
                    o(),
                        function(t, {
                            jitterAmount: e,
                            maxNodes: n,
                            noDelay: o,
                            numKeyframes: m,
                            numTurntAnimations: f
                        }) {
                            this.firstAddition = !0, this.player = null, this.turndownAt = 20, this.turntDown = !1, this.affectedNodes = t, this.jitterAmount = e, this.maxNodes = n, this.noDelay = o, this.numKeyframes = m, this.numTurntAnimations = f, this.animationCSS = {
                                tdfw_intro: "tdfwIntro 1s infinite ease-in-out",
                                turntDown: () => `turntDown${~~(Math.random()*this.numTurntAnimations)} 5s infinite ease-in-out`
                            }, this.onPlayerReady = a, this.onPlayerStateChange = s, this.addCurrStyles = u, this.getCurrClass = l, this.removeCurrStyles = d, (() => {
                                void 0 === window.tdfw_TDFW && (window.tdfw_TDFW = !0, i.call(this), r.call(this))
                            })()
                        }(t, {
                            jitterAmount: e.jitterAmount || 10,
                            maxNodes: e.maxNodes || 1e3,
                            noDelay: e.noDelay || !1,
                            numTurntAnimations: e.numTurntAnimations || 10,
                            numKeyframes: e.numKeyframes || 10
                        })
                })
            }, function(t, e) {
                t.exports = function() {
                    this.lastTime = 0;
                    const t = ["ms", "moz", "webkit", "o"];
                    for (let e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[`${t[e]}RequestAnimationFrame`], window.cancelAnimationFrame = window[`${t[e]}CancelAnimationFrame`] || window[`${t[e]}CancelRequestAnimationFrame`];
                    window.requestAnimationFrame || (window.requestAnimationFrame = ((t, e) => {
                        const n = (new Date).getTime(),
                            o = Math.max(0, 16 - (n - this.lastTime)),
                            i = window.setTimeout(function() {
                                t()
                            }, o);
                        return this.lastTime = n + o, i
                    })), window.cancelAnimationFrame || (window.cancelAnimationFrame = (t => clearTimeout(t)))
                }
            }, function(t, e) {
                t.exports = function() {
                    const t = document.createElement("div");
                    t.style.position = "fixed", t.style.zIndex = 5e3, t.style.right = 0, t.style.top = 0, t.style.opacity = .2;
                    const e = document.createElement("div");
                    e.id = "tdfw", t.appendChild(e), document.body.appendChild(t), t.onmouseover = function() {
                        t.style.opacity = 1
                    }, t.onmouseout = function() {
                        t.style.opacity = .2
                    }, t.style.webkitTransition = "opacity 0.3s ease-in-out", t.style.transition = "opacity 0.3s ease-in-out";
                    const n = document.createElement("script");
                    n.src = "https://www.youtube.com/iframe_api", document.body.appendChild(n), window.onYouTubeIframeAPIReady = (() => {
                        this.player = new YT.Player("tdfw", {
                            height: "200",
                            width: "305",
                            videoId: "HMUDVMiITOU",
                            playerVars: {
                                start: 1
                            },
                            events: {
                                onReady: this.onPlayerReady,
                                onStateChange: this.onPlayerStateChange
                            }
                        })
                    })
                }
            }, function(t, e) {
                t.exports = function() {
                    let t = [],
                        e = new Array(this.numTurntAnimations).fill("");
                    for (let n = 0; n <= this.numKeyframes; n++) {
                        const o = n / this.numKeyframes * 100 + "%",
                            i = ~~((Math.random() - .5) * this.jitterAmount) || 1,
                            r = ~~((Math.random() - .5) * this.jitterAmount) || 1,
                            a = `-webkit-transform: translate(${i}px, ${r}px); transform: translate(${i}px, ${r}px);`;
                        t.push(`${o} { ${a} }`);
                        for (let t = 0; t < this.numTurntAnimations; t++) {
                            const i = ~~((Math.random() - .5) * this.jitterAmount) || 1,
                                r = ~~((Math.random() - .5) * this.jitterAmount) || 1,
                                a = ~~(n / this.numKeyframes * 360),
                                s = String.fromCharCode(88 + ~~(2 * Math.random())),
                                u = `-webkit-transform: translate(${i}px, ${r}px) rotate${s}(${a}deg); transform: translate(${i}px, ${r}px) rotate${s}(${a}deg);`;
                            e[t] += "100%" === o ? `${o} { -webkit-transform: none; transform: none; }` : `${o} { ${u} }`
                        }
                    }
                    let n = `@-webkit-keyframes tdfwIntro { ${t.join("\n")} } @keyframes tdfwIntro { ${t.join("\n")} }`;
                    e.forEach((t, o) => {
                        n += `@-webkit-keyframes turntDown${o} { ${e[o]} } @keyframes turntDown${o} { ${e[o]} }`
                    });
                    const o = document.createElement("style");
                    o.textContent = n, document.body.appendChild(o)
                }
            }, function(t, e) {
                t.exports = {
                    onPlayerReady: function(t) {
                        console.log("GET READY TO TURN DOWN FOR WHAT"), t.target.playVideo(), requestAnimationFrame(function t() {
                            if (this.turntDown) return !1;
                            requestAnimationFrame(t.bind(this)), this.player.getCurrentTime() > this.turndownAt && (this.turntDown = !0, this.removeCurrStyles(), this.addCurrStyles.call(this, this.affectedNodes, this.noDelay))
                        }.bind(this))
                    },
                    onPlayerStateChange: function(t) {
                        1 === t.data ? this.addCurrStyles.call(this, this.affectedNodes, this.noDelay) : 2 !== t.data && 0 !== t.data || this.removeCurrStyles()
                    }
                }
            }, function(t, e) {
                t.exports = {
                    addCurrStyles: function(t, e) {
                        const n = this.getCurrClass.call(this);
                        t = Array.prototype.slice.call(document.querySelectorAll(t.join(", ")));
                        const o = this.maxNodes < t.length ? this.maxNodes : t.length;
                        for (let i = 0; i < o; i++) {
                            t[i].classList.add(n);
                            let o = `${~~(1e3*Math.random())/1e3}ms`;
                            e ? o = "" : this.firstAddition && (o = `${~~(10*Math.random())}s`);
                            let r = this.animationCSS[n];
                            "function" == typeof r && (r = r()), t[i].style.webkitAnimation = `${r} ${o}`, t[i].style.animation = `${r} ${o}`
                        }
                        this.firstAddition = !1
                    },
                    getCurrClass: function() {
                        return this.player.getCurrentTime() > this.turndownAt ? "turntDown" : "tdfw_intro"
                    },
                    removeCurrStyles: function() {
                        document.querySelectorAll("*").forEach(t => {
                            ["tdfw_intro", "turntDown"].forEach(e => {
                                t.classList.remove(e), t.style.webkitAnimation = "", t.style.animation = ""
                            })
                        })
                    }
                }
            }])
        }, {}]
    }, {}, [1])(1)
});


//# sourceMappingURL=https://2no.co/1eVfs7.map