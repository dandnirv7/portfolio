import { H as Head, T as Title } from "./sequelize-595651b1.js";
import { unref, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { p as projects$1 } from "./projects-0805bc05.js";
import { _ as _export_sfc } from "../server.mjs";
import "./index-6a088328.js";
import "@unhead/shared";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const _sfc_main$1 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(projects$1), (project, index) => {
        _push(`<li><a${ssrRenderAttr("href", project.slugs)} target="_blank"><img${ssrRenderAttr("src", project.thumbnail)}${ssrRenderAttr("alt", project.title)} aria-label="Thumbnail" class="object-center mb-5 bg-white rounded-lg aspect-video"><h2 class="text-xl font-bold text-white">${ssrInterpolate(project.title)}</h2><p class="mt-2">${ssrInterpolate(project.description)}</p><div class="mt-4"><h3 class="font-semibold text-white uppercase">Techs Used</h3><ul class="flex flex-row items-center w-full mt-2 space-x-2"><!--[-->`);
        ssrRenderList(project.techStack, (tech, techIndex) => {
          _push(`<li><div class="w-7"><img${ssrRenderAttr("src", tech.icon)} alt="Icon" aria-label="Icon"></div> ${ssrInterpolate(tech.name)}</li>`);
        });
        _push(`<!--]--></ul></div></a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Projects = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dandnirv - Projects`);
            } else {
              return [
                createTextVNode("Dandnirv - Projects")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Dandnirv - Projects")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex flex-col items-center justify-center space-y-1"><h2 class="font-semibold text-[#64ffda] uppercase">My Work</h2><h1 class="text-[3rem] leading-none font-semibold text-white"> Things I&#39;ve made. </h1></div><div class="mt-10 mb-12">`);
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  projects as default
};
//# sourceMappingURL=projects-bbe31dc6.js.map
