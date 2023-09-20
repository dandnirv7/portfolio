import { H as Head, T as Title } from "./sequelize-595651b1.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { p as projects } from "./projects-0805bc05.js";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
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
  __name: "RandomProjects",
  __ssrInlineRender: true,
  setup(__props) {
    const getRandomProjects = () => {
      const randomProjects = [];
      const projectCount = projects.length;
      if (projectCount >= 3) {
        const randomIndices = [];
        while (randomIndices.length < 3) {
          const randomIndex = Math.floor(Math.random() * projectCount);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        randomIndices.forEach((index2) => {
          randomProjects.push(projects[index2]);
        });
      }
      return randomProjects;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2"><!--[-->`);
      ssrRenderList(getRandomProjects(), (project, index2) => {
        _push(`<li class=""><a${ssrRenderAttr("href", project.slugs)} target="_blank"><div class="mb-5 bg-white rounded-lg shadow-md aspect-video"><img${ssrRenderAttr("src", project.thumbnail)}${ssrRenderAttr("alt", project.title)} aria-label="Thumbnail" class="object-cover w-full h-full rounded-lg"></div><h2 class="text-xl font-bold text-white">${ssrInterpolate(project.title)}</h2><p class="mt-2">${ssrInterpolate(project.description)}</p><div class="mt-4"><h3 class="font-semibold text-white uppercase">Techs Used</h3><ul class="flex flex-row w-24 mt-2"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RandomProjects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_router_link = resolveComponent("router-link");
  const _component_RandomProjects = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dandnirv`);
            } else {
              return [
                createTextVNode("Dandnirv")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Dandnirv")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex flex-col items-center justify-center space-y-10 md:items-start"><div><h1 class="text-[2.5rem] md:text-[3rem] leading-none font-bold text-center md:text-start text-white"> I&#39;m <span class="text-[#64ffda]">Dandi</span>, a front-end developer with a passion for creating attractive, powerful and responsive web applications. </h1></div><div class="w-max">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/about-me",
    class: "flex items-center justify-center px-10 py-3 text-lg font-semibold text-white rounded-full bg-[#64ffda]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get to know me `);
      } else {
        return [
          createTextVNode(" Get to know me ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mt-40"><h1 class="text-3xl font-bold text-white">Things I Worked on.</h1><div class="mt-10 mb-12">`);
  _push(ssrRenderComponent(_component_RandomProjects, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/projects",
    class: "py-3 text-lg font-semibold text-black transition-all duration-200 bg-white rounded-full px-9 hover:bg-white/80"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View All `);
      } else {
        return [
          createTextVNode(" View All ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-09c4e89d.js.map
