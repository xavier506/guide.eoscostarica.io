(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(131)),i={id:"accounts-and-permissions",title:"Accounts And Permissions",sidebar_label:"Accounts And Permissions"},s={unversionedId:"eos-learn/accounts-and-permissions",id:"eos-learn/accounts-and-permissions",isDocsHomePage:!1,title:"Accounts And Permissions",description:"Accounts",source:"@site/docs/eos-learn/accounts-and-permissions.md",slug:"/eos-learn/accounts-and-permissions",permalink:"/docs/eos-learn/accounts-and-permissions",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/accounts-and-permissions.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1613186032,sidebar_label:"Accounts And Permissions",sidebar:"docs",previous:{title:"EOSIO Components",permalink:"/docs/eos-learn/eosio-components"},next:{title:"Important Functions in EOSIO",permalink:"/docs/eos-learn/important-functions"}},c=[{value:"Accounts",id:"accounts",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Authorizations",id:"authorizations",children:[]},{value:"Authenticators (Wallets)",id:"authenticators-wallets",children:[]},{value:"Transit Wallet Access Layer",id:"transit-wallet-access-layer",children:[]},{value:"Universal Authenticator Library",id:"universal-authenticator-library",children:[{value:"Available Authenticators:",id:"available-authenticators",children:[]}]},{value:"KEOSD",id:"keosd",children:[]},{value:"EOSIO Permissions",id:"eosio-permissions",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"accounts"},"Accounts"),Object(r.b)("p",null,"An ",Object(r.b)("strong",{parentName:"p"},"account")," on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain."),Object(r.b)("p",null,"The account name must comply with certain requirements: characters from ",Object(r.b)("inlineCode",{parentName:"p"},"a")," to ",Object(r.b)("inlineCode",{parentName:"p"},"z")," in lower case, numbers from ",Object(r.b)("inlineCode",{parentName:"p"},"1")," to ",Object(r.b)("inlineCode",{parentName:"p"},"5")," and have 12 characters length. E. g. ",Object(r.b)("inlineCode",{parentName:"p"},"eosioaccount"),"."),Object(r.b)("p",null,"Read more on ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions#2-accounts"},"EOSIO accounts"),"."),Object(r.b)("h2",{id:"permissions"},"Permissions"),Object(r.b)("p",null,"EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"For example:")," Any account can create a custom permission with its unique key pair to solely interact with a single contract.")),Object(r.b)("p",null,"In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol."),Object(r.b)("p",null,"Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute."),Object(r.b)("h2",{id:"authorizations"},"Authorizations"),Object(r.b)("p",null,"Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain."),Object(r.b)("p",null,"In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied"),Object(r.b)("p",null,"To get more information about these concepts, see ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"},"accounts and permissions documentation"),"."),Object(r.b)("h2",{id:"authenticators-wallets"},"Authenticators (Wallets)"),Object(r.b)("p",null,"The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password."),Object(r.b)("h2",{id:"transit-wallet-access-layer"},"Transit Wallet Access Layer"),Object(r.b)("p",null,"This library is a small abstraction layer on top of ",Object(r.b)("inlineCode",{parentName:"p"},"eosjs")," which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API."),Object(r.b)("p",null,"Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up ",Object(r.b)("inlineCode",{parentName:"p"},"eosjs")," and wallet connections."),Object(r.b)("p",null,"Please see the ",Object(r.b)("strong",{parentName:"p"},"Quick Start guide")," and thorough guide in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eosnewyork/eos-transit"},"eos-transit")," package docs."),Object(r.b)("h2",{id:"universal-authenticator-library"},"Universal Authenticator Library"),Object(r.b)("p",null,"A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice."),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/EOSIO/universal-authenticator-library"},"Universal Authenticator Library (UAL)")," achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API."),Object(r.b)("h3",{id:"available-authenticators"},"Available Authenticators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-scatter"},"UAL for Scatter")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-lynx"},"UAL for Lynx")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-ledger"},"UAL for Ledger")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-token-pocket"},"UAL for Token Pocket")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/meet-one/ual-meetone"},"UAL for MEET.ONE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/greymass/ual-anchor"},"UAL for Anchor"))),Object(r.b)("h2",{id:"keosd"},"KEOSD"),Object(r.b)("p",null,"In the EOSIO's distribution comes included a CLI client called ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"cleos")," that interacts with lite client called ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"keosd")," which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider."),Object(r.b)("h2",{id:"eosio-permissions"},"EOSIO Permissions"),Object(r.b)("p",null,"EOSIO's permissions make it possible to strengthen account security to the point where the loss or theft of keys is nothing more than minor inconveniences. This weekly EOS episode covers what EOSIO permissions are on a conceptual level and the trend towards strong interconnected account networks."),Object(r.b)("figure",{class:"video_container"},Object(r.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameborder:"0",allowfullscreen:"true"}," ")))}u.isMDXComponent=!0}}]);