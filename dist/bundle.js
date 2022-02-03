'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var emitter = require('tiny-emitter/instance');
var vue = require('vue');
var Constants = require('../../../../../../js/Constants');
var FlashItem = require('../../../../../../components/  FlashItem');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var emitter__default = /*#__PURE__*/_interopDefaultLegacy(emitter);
var FlashItem__default = /*#__PURE__*/_interopDefaultLegacy(FlashItem);

var script = vue.defineComponent({
        name: "Flash",

        components: { FlashItem: FlashItem__default["default"] },

        setup() {
            const messages = vue.ref([]);

            vue.onMounted(() => {
                emitter__default["default"].on(Constants.FLASH_EVENT_NAME, handleFlashEvent);
            });

            function handleFlashEvent({ message, type }) {
                messages.value.push({
                    timestamp: (new Date()).getTime(),
                    type,
                    message,
                });
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

const _hoisted_1 = {
  key: 0,
  class: "alert-wrapper absolute top-14 z-[9999]"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flash_item = vue.resolveComponent("flash-item");

  return (Object.keys(_ctx.messages).length)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.messages, (notification, index) => {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            (notification.message!=='')
              ? (vue.openBlock(), vue.createBlock(_component_flash_item, {
                  key: index,
                  notification: notification,
                  onHide: _ctx.hideFlash
                }, null, 8 /* PROPS */, ["notification", "onHide"]))
              : vue.createCommentVNode("v-if", true)
          ], 64 /* STABLE_FRAGMENT */))
        }), 256 /* UNKEYED_FRAGMENT */))
      ]))
    : vue.createCommentVNode("v-if", true)
}

script.render = render;
script.__file = "src/components/Flash.vue";

// Install function used by Vue to register the plugin
const FlashPlugin = {
    install(app) {
        // register Headline as a global component, so you can use it wherever you want in your app
        // app.component('Headline', Headline)
    }
};

exports.Flash = script;
exports.FlashPlugin = FlashPlugin;
