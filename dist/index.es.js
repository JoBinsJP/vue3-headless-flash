import { defineComponent as c, openBlock as i, createElementBlock as l, createElementVNode as a, normalizeClass as d, createBlock as w, resolveDynamicComponent as k, toDisplayString as I, withModifiers as x, ref as E, onMounted as N, resolveComponent as S, Fragment as b, renderList as F, renderSlot as O, createVNode as j, createCommentVNode as D } from "vue";
const M = c({
  name: "InfoIcon"
}), p = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, R = {
  fill: "none",
  viewBox: "0 0 24 24"
}, B = /* @__PURE__ */ a("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), A = [
  B
];
function q(e, t, n, s, o, r) {
  return i(), l("svg", R, A);
}
const z = /* @__PURE__ */ p(M, [["render", q]]), T = c({
  name: "SuccessIcon"
}), V = {
  fill: "none",
  viewBox: "0 0 24 24"
}, W = /* @__PURE__ */ a("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), L = [
  W
];
function U(e, t, n, s, o, r) {
  return i(), l("svg", V, L);
}
const G = /* @__PURE__ */ p(T, [["render", U]]), P = c({
  name: "ErrorIcon"
}), H = {
  viewBox: "0 0 24 24",
  fill: "none"
}, J = /* @__PURE__ */ a("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), K = [
  J
];
function Q(e, t, n, s, o, r) {
  return i(), l("svg", H, K);
}
const $ = /* @__PURE__ */ p(P, [["render", Q]]), X = c({
  name: "WarningIcon"
}), Y = {
  fill: "none",
  viewBox: "0 0 24 24"
}, Z = /* @__PURE__ */ a("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), ee = [
  Z
];
function te(e, t, n, s, o, r) {
  return i(), l("svg", Y, ee);
}
const se = /* @__PURE__ */ p(X, [["render", te]]), v = "flash", ne = {
  success: {
    icon: G,
    class: "bg-green-500",
    textClass: "text-white",
    iconClass: "stroke-[#fff]"
  },
  error: {
    icon: $,
    class: "bg-red-200",
    textClass: "text-red-500",
    iconClass: "stroke-red-500"
  },
  info: {
    icon: z,
    class: "bg-gray-300",
    textClass: "text-gray-600",
    iconClass: "stroke-gray-600"
  },
  warning: {
    icon: se,
    class: "bg-yellow-400",
    textClass: "text-gray-800",
    iconClass: "stroke-gray-800"
  }
};
var g = { exports: {} };
function _() {
}
_.prototype = {
  on: function(e, t, n) {
    var s = this.e || (this.e = {});
    return (s[e] || (s[e] = [])).push({
      fn: t,
      ctx: n
    }), this;
  },
  once: function(e, t, n) {
    var s = this;
    function o() {
      s.off(e, o), t.apply(n, arguments);
    }
    return o._ = t, this.on(e, o, n);
  },
  emit: function(e) {
    var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, o = n.length;
    for (s; s < o; s++)
      n[s].fn.apply(n[s].ctx, t);
    return this;
  },
  off: function(e, t) {
    var n = this.e || (this.e = {}), s = n[e], o = [];
    if (s && t)
      for (var r = 0, u = s.length; r < u; r++)
        s[r].fn !== t && s[r].fn._ !== t && o.push(s[r]);
    return o.length ? n[e] = o : delete n[e], this;
  }
};
g.exports = _;
var oe = g.exports.TinyEmitter = _;
const C = new oe(), re = c({
  name: "FlashDefaultItem",
  components: { ErrorIcon: $ },
  emits: ["close"],
  props: {
    flash: {
      type: Object,
      required: !0
    },
    option: {
      type: Object,
      required: !0
    }
  },
  setup(e, { emit: t }) {
    return {
      close: () => {
        t("close", e.flash.timestamp);
      }
    };
  }
}), ie = { class: "flex items-center" };
function ae(e, t, n, s, o, r) {
  return i(), l("div", {
    class: d(["relative flex justify-between rounded-md px-6 py-3 mb-2", e.option.class])
  }, [
    a("div", ie, [
      (i(), w(k(e.option.icon), {
        class: d(["w-6 h-6", e.option.iconClass])
      }, null, 8, ["class"])),
      a("div", {
        class: d(["ml-2", e.option.textClass])
      }, I(e.flash.message), 3)
    ]),
    a("button", {
      type: "button",
      class: d(["w-6 h-6", e.option.textClass]),
      onClick: t[0] || (t[0] = x((...u) => e.close && e.close(...u), ["stop"]))
    }, " \xD7 ", 2)
  ], 2);
}
const le = /* @__PURE__ */ p(re, [["render", ae]]), ce = c({
  name: "FlashContainer",
  components: { FlashDefaultItem: le },
  props: {
    timeout: {
      type: Number,
      required: !1,
      default: () => 2e3
    },
    options: {
      type: Object,
      required: !1,
      default: () => ne
    },
    wrapperClass: {
      type: String,
      required: !1,
      default: () => "absolute w-[200px] right-[20px] top-[20px]"
    }
  },
  setup(e) {
    const t = E([]);
    N(() => {
      C.on(v, n);
    });
    const n = (o) => {
      t.value.push(o), e.timeout && setTimeout(() => s(o.timestamp), e.timeout);
    }, s = (o) => {
      t.value = t.value.filter(
        (r) => r.timestamp !== o
      );
    };
    return {
      messages: t,
      hideFlash: s
    };
  }
});
function pe(e, t, n, s, o, r) {
  const u = S("FlashDefaultItem");
  return Object.keys(e.messages).length ? (i(), l("div", {
    key: 0,
    class: d(e.wrapperClass)
  }, [
    (i(!0), l(b, null, F(e.messages, (m, de) => O(e.$slots, "default", {
      flash: m,
      click: (y) => e.hideFlash(y),
      option: e.options[m.type]
    }, () => [
      j(u, {
        option: e.options[m.type],
        flash: m,
        onClose: e.hideFlash
      }, null, 8, ["option", "flash", "onClose"])
    ])), 256))
  ], 2)) : D("", !0);
}
const ue = /* @__PURE__ */ p(ce, [["render", pe]]), he = {
  install(e) {
    e.component("FlashContainer", ue);
  }
};
var f = /* @__PURE__ */ ((e) => (e.SUCCESS = "success", e.ERROR = "error", e.INFO = "info", e.WARNING = "warning", e))(f || {});
class h {
  static success(t) {
    h.flash(t, f.SUCCESS);
  }
  static error(t) {
    h.flash(t, f.ERROR);
  }
  static info(t) {
    h.flash(t, f.INFO);
  }
  static warning(t) {
    h.flash(t, f.WARNING);
  }
  static flash(t, n) {
    const s = new Date().getTime();
    C.emit(v, {
      timestamp: s,
      type: n,
      message: t
    });
  }
}
export {
  h as Flash,
  ue as FlashContainer,
  he as FlashPlugin
};
