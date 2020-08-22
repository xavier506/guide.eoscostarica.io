(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(o,".").concat(h)]||p[h]||b[h]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(106)),o={id:"accounts-and-permissions",title:"Accounts and Permissions",sidebar_label:"Accounts and Permissions"},s={unversionedId:"eos-learn/accounts-and-permissions",id:"eos-learn/accounts-and-permissions",isDocsHomePage:!1,title:"Accounts and Permissions",description:"Accounts",source:"@site/docs/eos-learn/accounts-and-permissions.md",permalink:"/docs/eos-learn/accounts-and-permissions",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/accounts-and-permissions.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1598055206,sidebar_label:"Accounts and Permissions",sidebar:"docs",previous:{title:"System Resources",permalink:"/docs/eos-learn/system-resources"},next:{title:"Important Functions in EOSIO",permalink:"/docs/eos-learn/important-functions"}},c=[{value:"Accounts",id:"accounts",children:[]},{value:"Account Permissions",id:"account-permissions",children:[]},{value:"Authorizations",id:"authorizations",children:[]},{value:"Authenticators (Wallets)",id:"authenticators-wallets",children:[]},{value:"Transit Wallet Access Layer",id:"transit-wallet-access-layer",children:[]},{value:"Universal Authenticator Library",id:"universal-authenticator-library",children:[]},{value:"Available Authenticators:",id:"available-authenticators",children:[]},{value:"KEOSD",id:"keosd",children:[]},{value:"EOSIO permissions",id:"eosio-permissions",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"accounts"},"Accounts"),Object(i.b)("p",null,"An ",Object(i.b)("strong",{parentName:"p"},"account")," on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain."),Object(i.b)("p",null,"The account name must comply with certain requirements: characters from ",Object(i.b)("inlineCode",{parentName:"p"},"a")," to ",Object(i.b)("inlineCode",{parentName:"p"},"z")," in lower case, numbers from ",Object(i.b)("inlineCode",{parentName:"p"},"1")," to ",Object(i.b)("inlineCode",{parentName:"p"},"5")," and have 12 characters length. E. g. ",Object(i.b)("inlineCode",{parentName:"p"},"eosioaccount")),Object(i.b)("p",null,"Read more on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions#2-accounts"}),"EOSIO accounts")),Object(i.b)("h2",{id:"account-permissions"},"Account Permissions"),Object(i.b)("p",null,"EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"For example:")," Any account can create a custom permission with its unique key pair to solely interact with a single contract.")),Object(i.b)("p",null,"In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol."),Object(i.b)("p",null,"Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute."),Object(i.b)("h2",{id:"authorizations"},"Authorizations"),Object(i.b)("p",null,"Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain."),Object(i.b)("p",null,"In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied"),Object(i.b)("p",null,"To get more information about these concepts, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"}),"accounts and permissions documentation"),"."),Object(i.b)("h2",{id:"authenticators-wallets"},"Authenticators (Wallets)"),Object(i.b)("p",null,"The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password."),Object(i.b)("h2",{id:"transit-wallet-access-layer"},"Transit Wallet Access Layer"),Object(i.b)("p",null,"This library is a small abstraction layer on top of ",Object(i.b)("inlineCode",{parentName:"p"},"eosjs")," which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API."),Object(i.b)("p",null,"Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up ",Object(i.b)("inlineCode",{parentName:"p"},"eosjs")," and wallet connections."),Object(i.b)("p",null,'Please see the "Quick Start" and thorough guide in the ',Object(i.b)("inlineCode",{parentName:"p"},"eos-transit")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/eosnewyork/eos-transit"}),"package docs")),Object(i.b)("h2",{id:"universal-authenticator-library"},"Universal Authenticator Library"),Object(i.b)("p",null,"A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/universal-authenticator-library"}),"Universal Authenticator Library (UAL)")," achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API."),Object(i.b)("h2",{id:"available-authenticators"},"Available Authenticators:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-scatter"}),"UAL for Scatter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-lynx"}),"UAL for Lynx")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-ledger"}),"UAL for Ledger")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-token-pocket"}),"UAL for Token Pocket")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/meet-one/ual-meetone"}),"UAL for MEET.ONE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/greymass/ual-anchor"}),"UAL for Anchor"))),Object(i.b)("h2",{id:"keosd"},"KEOSD"),Object(i.b)("p",null,"In the EOSIO's distribution comes included a CLI client called ",Object(i.b)("inlineCode",{parentName:"p"},"cleos")," that interacts with lite client called ",Object(i.b)("inlineCode",{parentName:"p"},"keosd")," which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider."),Object(i.b)("h2",{id:"eosio-permissions"},"EOSIO permissions"),Object(i.b)("p",null,"EOSIO's permissions make it possible to strengthen account security to the point where the loss or theft of keys is nothing more than minor inconveniences. This weekly EOS episode covers what EOSIO permissions are on a conceptual level and the trend towards strong interconnected account networks."),Object(i.b)("figure",{class:"video_container"},Object(i.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameborder:"0",allowfullscreen:"true"}," ")))}u.isMDXComponent=!0}}]);