(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?n.a.createElement(m,c(c({ref:t},s),{},{components:r})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(130)),i={id:"git-workflow-tutorial",title:"Git workflow Tutorial",sidebar_label:"Git Workflow"},c={unversionedId:"tutorials/git-workflow-tutorial",id:"tutorials/git-workflow-tutorial",isDocsHomePage:!1,title:"Git workflow Tutorial",description:"In this tutorial, we explain step by step how to program an open source project using the GitHub platform. This is a repository with access to various functions and tools for project development and administration.",source:"@site/docs/tutorials/workflow-tutorial.md",slug:"/tutorials/git-workflow-tutorial",permalink:"/docs/tutorials/git-workflow-tutorial",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/workflow-tutorial.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1612978567,sidebar_label:"Git Workflow",sidebar:"docs",previous:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"},next:{title:"Markdown Guide",permalink:"/docs/tutorials/markdown-guide"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, we explain step by step how to program an open source project using the ",Object(a.b)("strong",{parentName:"p"},"GitHub")," platform. This is a repository with access to various functions and tools for project development and administration."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"GitHub")," contains a function called ",Object(a.b)("inlineCode",{parentName:"p"},"forking"),", which allows you to copy a repository from another account and request access to modify it in the user's account. In case the user decides to make sharing changes, he can send a notification to the original owner of the repository called ",Object(a.b)("inlineCode",{parentName:"p"},"pull request"),". In this way, you can unify the changes with the original repository, this is called ",Object(a.b)("inlineCode",{parentName:"p"},"merge"),"."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/K33cFzHWBt0",frameborder:"0",allowfullscreen:"true"}))}u.isMDXComponent=!0}}]);