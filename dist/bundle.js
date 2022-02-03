'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var emitter = require('tiny-emitter/instance');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var emitter__default = /*#__PURE__*/_interopDefaultLegacy(emitter);

var script$5 = vue.defineComponent({
        name: "InfoIcon",
    });

const _hoisted_1$4 = {
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /*#__PURE__*/vue.createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1 /* HOISTED */);
const _hoisted_3$3 = [
  _hoisted_2$3
];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$4, _hoisted_3$3))
}

script$5.render = render$5;
script$5.__file = "src/Icons/InfoIcon.vue";

var script$4 = vue.defineComponent({
        name: "SuccessIcon",
    });

const _hoisted_1$3 = {
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1 /* HOISTED */);
const _hoisted_3$2 = [
  _hoisted_2$2
];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$2))
}

script$4.render = render$4;
script$4.__file = "src/Icons/SuccessIcon.vue";

var script$3 = vue.defineComponent({
        name: "ErrorIcon",
    });

const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_2$1 = /*#__PURE__*/vue.createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1 /* HOISTED */);
const _hoisted_3$1 = [
  _hoisted_2$1
];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$1))
}

script$3.render = render$3;
script$3.__file = "src/Icons/ErrorIcon.vue";

var script$2 = vue.defineComponent({
        name: "WarningIcon",
    });

const _hoisted_1$1 = {
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1 /* HOISTED */);
const _hoisted_3 = [
  _hoisted_2
];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3))
}

script$2.render = render$2;
script$2.__file = "src/Icons/WarningIcon.vue";

const FLASH_EVENT_NAME = "flash";
const DEFAULT_OPTIONS = {
    success: {
        icon: script$4,
        class: "bg-green-500",
        textClass: "text-white",
        iconClass: "stroke-[#fff]",
    },
    error: {
        icon: script$3,
        class: "bg-red-200",
        textClass: "text-red-500",
        iconClass: "stroke-red-500",
    },
    info: {
        icon: script$5,
        class: "bg-gray-300",
        textClass: "text-gray-600",
        iconClass: "stroke-gray-600",
    },
    warning: {
        icon: script$2,
        class: "bg-yellow-400",
        textClass: "text-gray-800",
        iconClass: "stroke-gray-800",
    },
};

var script$1 = vue.defineComponent({
        name: "FlashDefaultItem",
        components: { ErrorIcon: script$3 },
        emits: ["close"],
        props: {
            flash: {
                type: Object,
                required: true,
            },
            option: {
                type: Object,
                required: true,
            },
        },
        setup(props, { emit }) {
            const close = () => {
                emit("close", props.flash.timestamp);
            };

            return {
                close,
            }
        },
    });

const _hoisted_1 = { class: "flex items-center" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["relative flex justify-between rounded-md px-6 py-3 mb-2", _ctx.option.class])
  }, [
    vue.createElementVNode("div", _hoisted_1, [
      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.option.icon), {
        class: vue.normalizeClass(["w-6 h-6", _ctx.option.iconClass])
      }, null, 8 /* PROPS */, ["class"])),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["ml-2", _ctx.option.textClass])
      }, vue.toDisplayString(_ctx.flash.message), 3 /* TEXT, CLASS */)
    ]),
    vue.createElementVNode("button", {
      type: "button",
      class: vue.normalizeClass(["w-6 h-6", _ctx.option.textClass]),
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.close && _ctx.close(...args)), ["stop"]))
    }, " × ", 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/components/FlashDefaultItem.vue";

var script = vue.defineComponent({
        name: "Flash",
        components: { FlashDefaultItem: script$1 },
        props: {
            timeout: {
                type: Number,
                required: false,
                default: () => 2000,
            },
            options: {
                type: Object,
                required: false,
                default: () => DEFAULT_OPTIONS,
            },
            wrapperClass: {
                type: String,
                required: false,
                default: () => "absolute w-[200px] right-[20px] top-[20px]",
            },
        },

        setup(props) {
            const messages = vue.ref([]);

            vue.onMounted(() => {
                emitter__default["default"].on(FLASH_EVENT_NAME, handleFlashEvent);
            });

            function handleFlashEvent({ message, type }) {
                const timestamp = (new Date()).getTime();

                messages.value.push({
                    timestamp: timestamp,
                    type,
                    message,
                });

                setTimeout(() => hideFlash(timestamp), props.timeout);
            }

            function hideFlash(timestamp) {
                messages.value = messages.value.filter(
                    notification => notification.timestamp !== timestamp,
                );
            }

            return {
                messages,
                hideFlash,
            }
        },
    });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FlashDefaultItem = vue.resolveComponent("FlashDefaultItem");

  return (Object.keys(_ctx.messages).length)
    ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(_ctx.wrapperClass)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.messages, (notification, index) => {
          return vue.renderSlot(_ctx.$slots, "default", {
            flash: notification,
            click: (timestamp)=>_ctx.hideFlash(timestamp),
            option: _ctx.options[notification.type]
          }, () => [
            vue.createVNode(_component_FlashDefaultItem, {
              option: _ctx.options[notification.type],
              flash: notification,
              onClose: _ctx.hideFlash
            }, null, 8 /* PROPS */, ["option", "flash", "onClose"])
          ])
        }), 256 /* UNKEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    : vue.createCommentVNode("v-if", true)
}

script.render = render;
script.__file = "src/components/Flash.vue";

const FlashPlugin = {
    install(app) {
        app.component('Flash', script);
    }
};

exports.Flash = script;
exports.FlashPlugin = FlashPlugin;
