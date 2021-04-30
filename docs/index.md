# 泊舟凭证

::: warning WARNING
泊舟凭证目前刚刚从JSP转为ES6模型!
:::

泊舟凭证来源于 [财税达](http://csd.caishuida.cn/)

## 时间轴

- 以Vue2 cdn方式 在JSON 做凭证组件
- 细节业务，JSP不好调整数据原型
- 拓展加载js工具，加载模板,手动请求js,去获取组件之间模板
- 完成JSP解耦合 
- 拓展boozjs模块开发，底层使用seajs
- 拓展require引入css + js
- 去除vue依赖，layui依赖，jquery，闭环组件环境
- 闭环环境:boozjs-vue+boozjs-layer+boozjs-elementui+boozjs-jquery，闭环组件环境
- 重构ES6环境,完全解耦合，完全脱离，原生dom操作
- 高度使用vuex，全局数据一致性，数据模块聚合
- JSP环境 ES6模式加载凭证，完成解耦合
- 准备接入Node环境编译凭证组件

[comment]: <> (We love VuePress, but being built on top of Webpack, the time it takes to spin up the dev server for a simple doc site with a few pages is just becoming unbearable. Even HMR updates can take up to seconds to reflect in the browser!)

[comment]: <> (As a reference, the [Composition API RFC repo]&#40;https://github.com/vuejs/composition-api-rfc&#41; is just two pages, but it takes 4 seconds to spin up the server and almost 2 seconds for any edit to reflect in the browser.)

[comment]: <> (Fundamentally, this is because VuePress is a Webpack app under the hood. Even with just two pages, it's a full on Webpack project &#40;including all the theme source files&#41; being compiled. It gets even worse when the project has many pages – every page must first be fully compiled before the server can even display anything!)

[comment]: <> (Incidentally, Vite solves these problems really well: nearly instant server start, an on-demand compilation that only compiles the page being served, and lightning-fast HMR. Plus, there are a few additional design issues I have noted in VuePress over time but never had the time to fix due to the amount of refactoring it would require.)

[comment]: <> (Now, with Vite and Vue 3, it is time to rethink what a "Vue-powered static site generator" can really be.)

[comment]: <> (## Improvements Over VuePress)

[comment]: <> (There're couple of things that are improved from VuePress....)

[comment]: <> (### It Uses Vue 3)

[comment]: <> (Leverages Vue 3's improved template static analysis to stringify static content as much as possible. Static content is sent as string literals instead of JavaScript render function code – the JS payload is therefore _much_ cheaper to parse, and hydration also becomes faster.)

[comment]: <> (Note the optimization is applied while still allowing the user to freely mix Vue components inside markdown content – the compiler does the static/dynamic separation for you automatically and you never need to think about it.)

[comment]: <> (### It Uses Vite Under The Hood)

[comment]: <> (- Faster dev server start)

[comment]: <> (- Faster hot updates)

[comment]: <> (- Faster build &#40;uses Rollup internally&#41;)

[comment]: <> (### Lighter Page Weight)

[comment]: <> (- Vue 3 tree-shaking + Rollup code splitting)

[comment]: <> (- Does not ship metadata for every page on every request. This decouples page weight from total number of pages. Only the current page's metadata is sent. Client side navigation fetches the new page's component and metadata together.)

[comment]: <> (- Does not use `vue-router` because the need of VitePress is very simple and specific - a simple custom router &#40;under 200 LOC&#41; is used instead.)

[comment]: <> (- &#40;WIP&#41; i18n locale data should also be fetched on demand.)

[comment]: <> (## Other Differences)

[comment]: <> (VitePress is more opinionated and less configurable: VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots.)

[comment]: <> (VitePress is future oriented: VitePress only targets browsers that support native ES module imports. It encourages the use of native JavaScript without transpilation, and CSS variables for theming.)

[comment]: <> (## Will This Become The Next VuePress in The Future?)

[comment]: <> (Probably not. It's currently under a different name so that we don't over commit to the compatibility with the current VuePress ecosystem &#40;mostly themes and plugins&#41;. We'll see how close we can get without compromising the design goals listed above. But the overall idea is that VitePress will have a drastically more minimal theming API &#40;preferring JavaScript APIs instead of file layout conventions&#41; and likely no plugins &#40;all customization is done in themes&#41;.)
