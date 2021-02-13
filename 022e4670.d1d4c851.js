(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(131)),i={id:"kubernetes",title:"Kubernetes",sidebar_label:"Kubernetes"},c={unversionedId:"tutorials/kubernetes",id:"tutorials/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"Kubernetes is an open source platform, which was created by Google, used for the management, deployment, scalability and monitoring of Docker containers.",source:"@site/docs/tutorials/kubernetes.md",slug:"/tutorials/kubernetes",permalink:"/docs/tutorials/kubernetes",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/kubernetes.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1613186032,sidebar_label:"Kubernetes",sidebar:"docs",previous:{title:"Docker",permalink:"/docs/tutorials/docker"},next:{title:"EOSIO Node Installation",permalink:"/docs/tutorials/node-installation"}},s=[{value:"Kubernetes Features",id:"kubernetes-features",children:[]},{value:"Kubernetes Architecture",id:"kubernetes-architecture",children:[]},{value:"Kubernetes Architecture Diagram",id:"kubernetes-architecture-diagram",children:[]},{value:"Key Concepts in k8s",id:"key-concepts-in-k8s",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kubernetes is an open source platform, which was created by Google, used for the management, deployment, scalability and monitoring of Docker containers. "),Object(o.b)("h3",{id:"kubernetes-features"},"Kubernetes Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Intelligent container deployment."),Object(o.b)("li",{parentName:"ul"},"Management of workloads (provides load balancing)."),Object(o.b)("li",{parentName:"ul"},"Easy management of services and applications."),Object(o.b)("li",{parentName:"ul"},"High availability."),Object(o.b)("li",{parentName:"ul"},"Great flexibility and allows modular work."),Object(o.b)("li",{parentName:"ul"},"Container monitoring.")),Object(o.b)("h3",{id:"kubernetes-architecture"},"Kubernetes Architecture"),Object(o.b)("p",null,'There are two main roles, "master" and "node". The master is in charge of managing and orchestrating the different microservices between the 4 available nodes in the cluster.'),Object(o.b)("h3",{id:"kubernetes-architecture-diagram"},"Kubernetes Architecture Diagram"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/107062957-724c5c00-679f-11eb-88f0-fb4b884785ab.png",alt:"image"})),Object(o.b)("h3",{id:"key-concepts-in-k8s"},"Key Concepts in k8s"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cluster:")," It is a group of devices that can be physical or virtual, are united many times by a network and, therefore, they behave as one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kubernetes node:")," A machine that is running Kubernetes, on which pods can be programmed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pod:")," A group of one or more containers that share the storage and configurations needed to run."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Replication Controller:")," It is the one who handles the above mentioned failures and recreates, if necessary, the pods. In addition, it also ensures that the number of replicas of the pod is running."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Service:")," It is an abstraction that defines a logical set of pods, as well as the rules and logic to access them."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Infrastructure as IaC Code"),Object(o.b)("br",{parentName:"p"}),"\n","A repository will be created with code for the design and deployment of the project's infrastructure. This will represent the desired state on the servers, as well as pre-compiled images of each service to be deployed."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/devops#introduction-to-kubernetes-and-docker"},"More Information")))}u.isMDXComponent=!0}}]);