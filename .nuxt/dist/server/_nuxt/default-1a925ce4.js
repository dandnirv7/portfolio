import __nuxt_component_0$1 from "./Icon-2b1be823.js";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "flowbite";
import "destr";
import "devalue";
import "./config-0b7ecc6c.js";
import "klona";
import "hookable";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const _imports_0 = "data:image/png;base64,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";
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 border-b border-gray-600 backdrop-blur bg-black/20 lg:px-20 xl:px-40 md:px-8 md:border-0" }, _attrs))}><div class="flex items-center justify-between px-5 py-3">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        "aria-label": "Logo",
        class: "items-center justify-center order-2 w-full -ml-5 md:order-1 md:-ml-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Dandnirv" class="w-9"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Dandnirv",
                class: "w-9"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full md:hidden"><button class="md:hidden text-gray-400 hover:text-[#64ffda] hover:no-underline">`);
      if (!unref(mobileMenuActive)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:menu",
          size: "24px"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (unref(mobileMenuActive)) {
        _push(`<button class="text-gray-400 hover:text-[#64ffda] hover:no-underline absolute top-5 left-5">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons-solid:x",
          size: "24px"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><header class="hidden md:block md:w-full md:order-2"><nav class="flex items-center justify-center space-x-6">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: ["font-semibold hover:text-decoration hover:underline", {
          "text-[#64ffda] hover:no-underline": _ctx.$route.path === "/",
          "text-gray-400": _ctx.$route.path !== "/"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/about-me",
        class: ["font-semibold hover:text-decoration hover:underline", {
          "text-[#64ffda] hover:no-underline": _ctx.$route.path === "/about-me",
          "text-gray-400": _ctx.$route.path !== "/about-me"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Me `);
          } else {
            return [
              createTextVNode(" About Me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/projects",
        class: ["font-semibold hover:text-decoration hover:underline", {
          "text-[#64ffda] hover:no-underline": _ctx.$route.path === "/projects",
          "text-gray-400": _ctx.$route.path !== "/projects"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` My Work `);
          } else {
            return [
              createTextVNode(" My Work ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header></div>`);
      if (unref(mobileMenuActive)) {
        _push(`<div class="md:hidden"><div class="backdrop-filter-lg"><div class="px-5 py-3">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/",
          class: ["block py-2 font-semibold text-gray-400 hover:text-[#64ffda] hover:no-underline", {
            "text-[#64ffda] hover:no-underline": _ctx.$route.path === "/"
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: "/about-me",
          class: ["block py-2 font-semibold text-gray-400 hover:text-[#64ffda] hover:no-underline", {
            "text-[#64ffda] hover:no-underline": _ctx.$route.path === "/about-me"
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` About Me `);
            } else {
              return [
                createTextVNode(" About Me ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: "/projects",
          class: ["block py-2 font-semibold text-gray-400 hover:text-[#64ffda] hover:no-underline", {
            "text-[#64ffda] hover:no-underline": _ctx.$route.path === "/projects"
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Work `);
            } else {
              return [
                createTextVNode(" My Work ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Icon = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "px-6 py-5 lg:px-20 xl:px-40 md:px-8" }, _attrs))}><div class="my-6"><nav class="flex items-center justify-start space-x-6">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "font-semibold text-gray-400 hover:underline hover:text-decoration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/about-me",
    class: "font-semibold text-gray-400 hover:underline hover:text-decoration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Me`);
      } else {
        return [
          createTextVNode("About Me")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/projects",
    class: "font-semibold text-gray-400 hover:underline hover:text-decoration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`My Work`);
      } else {
        return [
          createTextVNode("My Work")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div><div class="flex flex-col items-start justify-between py-4 space-y-4 border-t border-gray-400/20 md:items-center md:flex-row"><span>© 2023 Dandnirv. All Rights Reserved.</span><div class="flex items-center justify-center space-x-5"><a href="mailto:dandinirpana7@gmail.com">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "heroicons:envelope-20-solid",
    size: "24px"
  }, null, _parent));
  _push(`</a><a href="https://twitter.com/dandnirv">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:twitter",
    size: "24px"
  }, null, _parent));
  _push(`</a>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:baseline-discord",
    size: "24px"
  }, null, _parent));
  _push(`<a href="https://github.com/dandnirv7">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:github",
    size: "24px"
  }, null, _parent));
  _push(`</a></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div class="flex flex-col min-h-screen px-6 py-5 lg:px-20 xl:px-40 md:px-8"><main class="flex-1 h-full pt-16">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-1a925ce4.js.map
