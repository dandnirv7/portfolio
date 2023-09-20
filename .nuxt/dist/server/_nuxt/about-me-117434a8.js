import { h as html5, c as css3, j as javascript, v as vuejs, n as nuxtjs, a as nodejs, e as express, s as sequelize, b as axios, t as tailwindcss, H as Head, T as Title } from "./sequelize-595651b1.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, createVNode } from "vue";
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
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-center justify-center space-y-1"><h2 class="font-semibold text-[#64ffda]">ABOUT ME</h2><h1 class="md:text-[3rem] text-center text-[2.5rem] leading-none font-semibold text-white"> Get to know me. </h1></div><div class="flex flex-col mt-8 space-y-6"><p class="text-xl"> Hi, my name is Dandi and I&#39;m a 20-year-old frontend developer. My passion for creating web applications led me to specialize in frontend development. I believe in using technology to improve the web experience, which is why I&#39;ve made it my mission to create user-friendly applications. </p><p class="text-xl"> Currently, I am a graduate of Alkademi Bootcamp with 4 months of experience in the world of fullstack web development. During the program, I explored technologies such as Vue, Nuxt, Tailwind CSS, and Flowbite for front-end web development. Additionally, I also have a basic understanding of using Git for version control and project management with Trello. I am excited to continue developing my skills in web development and look for opportunities to contribute to challenging projects. </p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Summary.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const git = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC";
const technologies = [
  {
    name: "HTML",
    image: html5
  },
  {
    name: "CSS",
    image: css3
  },
  {
    name: "JavaScript",
    image: javascript
  },
  {
    name: "Git",
    image: git
  },
  {
    name: "Vue",
    image: vuejs
  },
  {
    name: "Nuxt",
    image: nuxtjs
  },
  {
    name: "Node",
    image: nodejs
  },
  {
    name: "Express",
    image: express
  },
  {
    name: "Sequelize",
    image: sequelize
  },
  {
    name: "Axios",
    image: axios
  },
  {
    name: "Tailwind",
    image: tailwindcss
  }
];
const _sfc_main$2 = {
  __name: "Technologies",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20" }, _attrs))}><h1 class="mb-10 text-3xl font-bold text-white"> Technologies I make us of. </h1><div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center"><!--[-->`);
      ssrRenderList(unref(technologies), (technology) => {
        _push(`<div class="flex flex-col items-center w-full p-4 space-y-3 rounded-xl bg-zinc-800 lg:flex-row lg:space-y-0 lg:space-x-3"><div class="flex-none w-10 h-10 lg:h-8 lg:w-8"><div class="aspect-square"><img${ssrRenderAttr("src", technology.image)}${ssrRenderAttr("alt", technology.name)} class="object-contain w-full h-full"></div></div><span class="text-lg font-semibold text-white">${ssrInterpolate(technology.name)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technologies.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-16" }, _attrs))}><h1 class="mb-10 text-3xl font-bold text-white">Educations I&#39;ve done.</h1><ol class="relative border-l border-gray-200 dark:border-gray-700"><li class="mb-10 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div><div class="flex flex-row items-center"><h3 class="text-lg font-semibold text-[#64ffda] dark:text-white"> Bootcamp PESILAT Alkademi - AWS in Communities </h3><span class="bg-white/50 text-[#64ffda] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#64ffda] dark:text-[#64ffda] ml-3">Latest</span></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023 - August 2023</time><p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> HTML, CSS, JavaScript, Git, Tailwind CSS, Flowbite, Vue JS, Nuxt JS, Node JS, Express JS, MySQL, Sequelize, SDLC, Budibase </p></li><li class="mb-10 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div><h3 class="text-lg font-semibold text-[#64ffda] dark:text-white"> ITBOX - Fullstack Web Developer </h3><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022 - June 2022</time><p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> HTML, CSS, JavaScript, Node JS, Express JS </p></li></ol></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Educations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Summary = __nuxt_component_2;
  const _component_Technologies = __nuxt_component_3;
  const _component_Educations = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dandnirv - About Me`);
            } else {
              return [
                createTextVNode("Dandnirv - About Me")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Dandnirv - About Me")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Summary, null, null, _parent));
  _push(ssrRenderComponent(_component_Technologies, null, null, _parent));
  _push(ssrRenderComponent(_component_Educations, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-me.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  aboutMe as default
};
//# sourceMappingURL=about-me-117434a8.js.map
