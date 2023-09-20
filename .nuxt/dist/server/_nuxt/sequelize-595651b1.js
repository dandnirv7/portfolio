import { defineComponent } from "vue";
import { u as useHead } from "./index-6a088328.js";
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const Title = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const html5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII=";
const css3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=";
const javascript = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVR4nO2WT0hVQRTGz/GZ7yEiRJJ/SsMiRaigUFwUhQgGouLChZS5Cmmj5c4kol1tRNoYLcJ0JRKUFYmUJi5EQSP/dEFxkUW4iQyUIMS+mHe5jtN7ihLeO8L54OPBmXmX+c2c+90hEolEIisFh2CTSQAcOQFIC+1GQbcM5CV2gt91SIw6we885EPm2GHarYJeMATACX7XIS3k/M+O8YZ7282xmT5CbTkjI42RGGJkHWbUVTJmX+4DgMFOQiSsx2iTkyMcHbcWYH2WkHtU18NJjILj7q9XKz7D+PPJUoCPz3U9IYEx/cKtLw4STmQzbl5jrExYfALDXbqu2uj3lJ7/64NlKRQP4MuQWa8uZXx+t9PnWQCgfPmC+eJGwozrNYz5/n0C8G2YcLYgNoFCIRdkddJyAGW1yNYGRkpyLMjpPMaPMcsBPH8fJdxvJqQfMiEar3KwACrvtwP4N+d/jlM0/7352Rk+AqgUqSphvH6kawsDJsCrDj3W/YBQeCo279tb9H+SDvgE0NNG0c+/lya36hkddwnnz5ktoe4+ar66/3i1kmLG1yG3vjxOuFSkx9TX2heAuTcaYCufPKavBg9bzZNhZhxJN68SyrcbfGyh908JqSnxF69a4e0Ts/fv3Nge+GJh/CjdMwDlpRFCUx0jJ9PNc3VNriljTD6LP3+sh3ClgpGf6+7+wVR34Y/vEdZmtkq1PQTwwyQAjpwAfG0hkUgkIj/0FxH0JVVHu8XgAAAAAElFTkSuQmCC";
const nodejs = "" + __buildAssetsURL("nodejs.e60d016c.png");
const nuxtjs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVR4nO1ZXWwUVRQ+toAI0Yii0u7MEoVoxESJP0EN0QfFGPXNxEhMNKIh+KAJmqDEn4WZUtGmd7YtRWq0NOxM0TVGaffeWktnCmmNSG1qUglpmiAkpXOXgixWC9p2zCx0Zc7d7ezKlp9kv+S+zJzT/b5z7rn3nClAAQUUUEABlxyOc1Upjy0NDMWWgWPNgCsJtwy13ixzuk/mzHGXZNOBhUdjd8KVAomzbyfJp0Rw2nef0z0TLnfINl2ByaeWzdbC5YwlfdFZsk0PZhIg2TQRjLeUCI6hUBGYxptgGb1g6vvBNFZfEgESp+tQxMdc0uhZveBo6e+BZThovXZRyS/ksQWYrGTTrcF4yxteAXQiYLMHU45txm1gGqNpBCRgT0TM1nRB5jTiJc9OlAw2zQcnWixz+gt61w1OqCjpaBm70pB3zq3PLwr5II897EYW7fnUFpA5W47fS3G2Cizj8SnIO2Aa42A2Lpte9k60WLJpD9omve7z880km315vk1gMDYIbZFuL2m9CyzjV/RsX7LIpwuyTdcIp02cPYrtAsNMkjkdmbSZG63vgOotHZ5od0QeADPyWJpsvDwt5IMnY/Nkzo4hAUYme8mm77s2pYea4qBqCVC1f2BXQ/+5SG9LGVpCXXCwtl+fdwGyTWsR+T9LBpuCmewX97OrZZv1z9xS2wmq5iTX5nAPmMYJsIz5KcP2nYvA0k+jeiB5JR/g393jnvNeAXS9n9+cr+pfAoVMpAS4q7Z2nWBoGR8hAX/D7siSvAmQObXQmT/gRnhKJ7cYVfKTh7y7FO0IVFTM9dh2fnYtmMZRVNDteSEv2S0rceEG4y1P+zoqZLVAPiWCbBTs2yOr0hytz14Q+ZLBpjkyZ4dR9Ft9HT/cOg8UEs8oQNVGQa2+VciYe4x6BOhHoHWHN1u5QLJZubdNZmdK4/R2X0eV1KBtMwIKsb0iyDeCX4fxEJj6BMrEhv9FXuZskcTpKGoLyn0dFXJX8sj0ClgPivaimInKJwV/yzBQFv6CPTu82coGEmfNiPzQ4mF2XRYCLLTfByAUmu2OnaBqe1EWDkBdnXfw2d0QAMsYQVn4OifyMmdPiP19y0p/8pXPiwUbfib1vozcCwoZ876vfEv4O6bxgXhDN4rZynZQkWzWmYzgVAjVzQFF+w1F+HtRJPkUba9TUEa8rfQP0WvA1A+hrXQAulG20kHm7B08qLhfHHwdFW0Tiv4ZULQ7RKGVN4BChpHQ7YJde+NzYhb0tTkPKm4L4UterVp09mj0kNqc2Z68jupkAtTwcsHO0jvQvXBqysHHbc5Qu3A8Oaj4QdGaUPSHIFSVueCj0WJQtV60lX4WWmlLXwqWPoa2kjimZhxUbLrGl/zG8ArxeCQv+Pq5EVdQn6SQVwU7y6hDAibAivw3pibhhIokm+1HN24PHlQEhEKzQCUHEYku34KfhEK+QL7DUF5zo8dmb/QmMI3fUT10e7LljoR4GJfisUf8CWhvo+iPQxm5PyvyyQBUSclb2iuiSrA7+xkG9Un6K1MMKlT3//GPF4BKEkjAJ5ArFO1dJGAMNoXv9thY1gyw9L60g4/EqYai/4c03BzI4ocbEPnjQvqzQSg0O3lbewu6TbBrN55K060Sd/Q7mvHzYKY1xMZBId7U53u16bidSLcS7qh4JFcBpYebT04reVU7k5UAd3KTOd2QcwY4c4oqqnumTUBFdVcW0XcLeSe4/5CQOVUlTnlOWTi061hxuOZHUMjpPJJPQLimE3ZHpo5+8sOAvi05ihZQQAEFFAAXgH8BPtbcUT8gORQAAAAASUVORK5CYII=";
const vuejs = "" + __buildAssetsURL("vue-js.c5050165.svg");
const tailwindcss = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2Yy29NURTGv6pHmIigngMDMTDz/BckUoRi4pUYYEaQYKIGEhMzDcGMNGSvdUqbqkebnLVOVSQakVRo4zXy6MREqoq6svdt1U3a6+7T4547OL9kT+7d99y1zl7rW2ttICMjIyMjI+MvLndPg+lcA5ZN4HCPW6RbEOhqmOfTUbFGk+wAy32wfAVrbvwl30H6AKT73G8qAqPrQdozsdETLNJ37pRShWSne6u+xheeSkM6p8GyEaw/J2e8jp5GC9raZpTP+KCrBiT9iRjPo07IPbR0z/Kyw4QL4znAcmnk+IdA2gzS42A5AJajYLlRPJGLrk6Y9tklG096xt9407EEpN9A0opb4bJx9zS1zwXptZhOPMXth4uL2xCtBEkfAtnq7wDJCZCcQy5X9c+9rCdB8itGYn9GoEfQ2Dmn4HlBuBSkZ0EyANZXMKba3wGjuzz3HwTLcMzk/gGWXrB0g+RNwcuwtSQWcbymaHdiisUu4VtLioBECaLtYB1MQHJ7YKL55TX+jxOyzsVubAekKz3jR7Faz3LaJSqXHDIfwHIY9bkpqBjMo5lgrQPrFbA+AemnkRAbBMl795ltM6xUxmo1bOtr45b0otNm1o/5h7sa0O+UgeWq60J9K+h/xZhqV1m9WgUbDlKfviNBVw1YHk9CIV679joVmjsWgPRFAjo96EKvrORyVSC9m1ihsUXLFi9fTJzWwEKyv/DPpW9EBXrz5TyWZg+D9JCfHZG/0wjDqWB5C9YvLhEDXVTwvW2obGPlo9tj+m17l1MlRsB5Jx7eWBkkfYmmaEXRfbbFzctpnNO4jsZw3rjPNeHy/GWADsYbUOxQYNWnFOywYYeOuMlNchMsx/LDj2219c7YTC0NiK0+Plitt+Nfcgmfc0WyrD2OHcDtKJmE8eREYgNSusy6MDkHxIZPHVKFotr8JZW3Qj0DhWtREdjTcPeg7mpxqIjRA65gkmxz8l2R2C6WZBUC2Qwje/OXu1Gtu9ytWKMzMjIyMjKQDr8BpC0SbqrQ1j8AAAAASUVORK5CYII=";
const express = "" + __buildAssetsURL("express.31419152.svg");
const axios = "" + __buildAssetsURL("axios.99d73245.svg");
const sequelize = "" + __buildAssetsURL("sequelize.46b9a32d.svg");
export {
  Head as H,
  Title as T,
  nodejs as a,
  axios as b,
  css3 as c,
  express as e,
  html5 as h,
  javascript as j,
  nuxtjs as n,
  sequelize as s,
  tailwindcss as t,
  vuejs as v
};
//# sourceMappingURL=sequelize-595651b1.js.map
