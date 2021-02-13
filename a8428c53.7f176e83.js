(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(131)),c={id:"important-functions",title:"Important Functions in EOSIO",sidebar_label:"Important Functions"},r={unversionedId:"eos-learn/important-functions",id:"eos-learn/important-functions",isDocsHomePage:!1,title:"Important Functions in EOSIO",description:"EOSIO Privileged Account",source:"@site/docs/eos-learn/important-functions.md",slug:"/eos-learn/important-functions",permalink:"/docs/eos-learn/important-functions",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/important-functions.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1613186032,sidebar_label:"Important Functions",sidebar:"docs",previous:{title:"Accounts And Permissions",permalink:"/docs/eos-learn/accounts-and-permissions"},next:{title:"Private Keys",permalink:"/docs/eos-learn/private-keys"}},l=[{value:"EOSIO Privileged Account",id:"eosio-privileged-account",children:[]},{value:"EOSIO Privileged Features",id:"eosio-privileged-features",children:[{value:"set_resource_limits",id:"set_resource_limits",children:[]},{value:"set_prods",id:"set_prods",children:[]},{value:"set_params",id:"set_params",children:[]},{value:"set_privileged",id:"set_privileged",children:[]}]},{value:"System Actions",id:"system-actions",children:[{value:"new_account",id:"new_account",children:[]},{value:"set code",id:"set-code",children:[]},{value:"set abi",id:"set-abi",children:[]},{value:"updateauth",id:"updateauth",children:[]},{value:"deleteauth",id:"deleteauth",children:[]},{value:"linkauth",id:"linkauth",children:[]},{value:"unlinkauth",id:"unlinkauth",children:[]}]},{value:"Native Token Contract <code>eosio.token</code>",id:"native-token-contract-eosiotoken",children:[{value:"create",id:"create",children:[]},{value:"issue",id:"issue",children:[]},{value:"retire",id:"retire",children:[]},{value:"transfer",id:"transfer",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"eosio-privileged-account"},"EOSIO Privileged Account"),Object(o.b)("p",null,"This account has unlimited access to CPU, NET, and RAM resources representing the highest authority of the network which can execute priviledged functions."),Object(o.b)("p",null,'Usually this authority is invoked by a multi-signature (or "multisig") contract that will require the consent of a super-majorit of the block producers. This privileged account will be called the ',Object(o.b)("inlineCode",{parentName:"p"},"eosio")," account."),Object(o.b)("h2",{id:"eosio-privileged-features"},"EOSIO Privileged Features"),Object(o.b)("p",null,"EOSIO smart contracts are simple WebAssembly files. The WebAssembly format allows you to define imports, functions that are not declared in WASM itself but in the environment in which the WebAssembly code is run. EOSIO uses these built-in (intrinsic) functions to exchange data between the WebAssembly contract code and the EOSIO node ",Object(o.b)("inlineCode",{parentName:"p"},"nodeos"),". Every time the EOS virtual machine (EOSVM), which runs the WebAssembly code, reaches an intrinsic level, control of the program is transferred to the node controller code to resolve it. A complete list of intrinsic functions for EOSIO 2.0.X can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"},"here"),"."),Object(o.b)("h3",{id:"set_resource_limits"},"set_resource_limits"),Object(o.b)("p",null,"Update the resource limits associated with an account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account:  The destination account\nram_bytes:  The RAM limit in bytes\nnet_weight:  Weight to determine your NET capacity\ncpu_weight:  Weight to determine your CPU capacity\n")),Object(o.b)("h3",{id:"set_prods"},"set_prods"),Object(o.b)("p",null,"Establish a new list of active producers (validators). Once the proposed block becomes irreversible, the new producers become active."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"schedule: JSON with list of producers and their signing keys\n")),Object(o.b)("h3",{id:"set_params"},"set_params"),Object(o.b)("p",null,"Modify one or more parameters of the blockchain."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_block_net_usage"),": The maximum amount of net usage in a block."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"target_block_net_usage_pct"),": The maximum percentage of net use, after this limit the network enters congestion mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_transaction_net_usage:")," The maximum use of net that the chain will allow, beyond the limits of the account."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"base_per_transaction_net_usage"),": The base amount of net usage billed for a transaction to cover incidentals."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_num"),": The numerator for the discount on net usage of context-free data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_den"),": The denominator for the discount on net usage of context-free data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_block_cpu_usage"),": The maxiumum billable cpu usage (in microseconds) for a block."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"target_block_cpu_usage_pct"),": The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_transaction_cpu_usage"),": The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"min_transaction_cpu_usage"),": The minimum billable cpu usage (in microseconds) that the chain requires."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_transaction_lifetime"),": The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"deferred_trx_expiration_window"),": The number of seconds after the time a deferred transaction can first execute until it expires."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_transaction_delay"),": The maximum number of seconds that can be imposed as a delay requirement by authorization checks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_inline_action_size"),": Maximum allowed size (in bytes) of an inline action."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_inline_action_depth"),": Recursion depth limit on sending inline actions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max_authority_depth"),": Recursion depth limit for checking if an authority is satisfied.")),Object(o.b)("h3",{id:"set_privileged"},"set_privileged"),Object(o.b)("p",null,"Allows you to establish an account as privileged."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta que se quiere setear como privilegiada.\nis_priv:  0 para falso, mayor a 0 para verdadero.\n")),Object(o.b)("h2",{id:"system-actions"},"System Actions"),Object(o.b)("p",null,"These actions do not need to be executed by a privileged account."),Object(o.b)("h3",{id:"new_account"},"new_account"),Object(o.b)("p",null,"Create a new account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"creator: Name of the account that creates the new account.\nname: New account name.\nowner: Owner public key.\nactive: Active public key.\n")),Object(o.b)("h3",{id:"set-code"},"set code"),Object(o.b)("p",null,"Set code publish or update a smart contract in an account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account: The account to which you want to post a contract.\ncode: The code in the form of a binary BLOB.\n")),Object(o.b)("h3",{id:"set-abi"},"set abi"),Object(o.b)("p",null,"It allows to establish or update the abi for the smart contract, it is identified by account_name."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account: The name of the destination account.\nabi:  The ABI.\n")),Object(o.b)("h3",{id:"updateauth"},"updateauth"),Object(o.b)("p",null,"Update an account's permissions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account:  The account to be modified.\npemission:  The name of the new permission.\nparent: The parent permission of the new permission.\nauth: The JSON defining permission authorization.\n")),Object(o.b)("h3",{id:"deleteauth"},"deleteauth"),Object(o.b)("p",null,"Removes permission authorization from an account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account: The destination account.\npermission: The name of the permission to be removed.\n")),Object(o.b)("h3",{id:"linkauth"},"linkauth"),Object(o.b)("p",null,"Assign a specific action of a contract to a specific permission, five actions cannot be linked updateauth, deleteauth, linkauth, unlikauth, canceldelay."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account: The destination account.\ncode: Account owner of the action to link.\ntype: The action to be linked.\nrequirement: Permission to link.\n")),Object(o.b)("h3",{id:"unlinkauth"},"unlinkauth"),Object(o.b)("p",null,"It is the reverse of linkauth."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"account: The destination account.\ncode: Account owner of the action to be unlinked.\ntype: The action to be unlinked.\n")),Object(o.b)("h2",{id:"native-token-contract-eosiotoken"},"Native Token Contract ",Object(o.b)("inlineCode",{parentName:"h2"},"eosio.token")),Object(o.b)("p",null,"These actions can be executed by any account in order to issue their own token."),Object(o.b)("h3",{id:"create"},"create"),Object(o.b)("p",null,"Allows an issuer account to create a token."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"issuer: The account that creates the token.\nmaximum_supply: The maximum amount next to the token symbol.\n")),Object(o.b)("h3",{id:"issue"},"issue"),Object(o.b)("p",null,"This action distributes a certain number of tokens to an account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"to: Account to which the tokens are distributed.\nquantity: The amount of tokens to distribute.\nmemo: Memo accompanying the transaction.\n")),Object(o.b)("h3",{id:"retire"},"retire"),Object(o.b)("p",null,"The opposite of creating a token."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"quantity: The amount of tokens to withdraw.\nmemo: Memo accompanying the transaction.\n")),Object(o.b)("h3",{id:"transfer"},"transfer"),Object(o.b)("p",null,'Transfer an "n" amount of tokens from a source account to a destination account.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"from: Source account from where tokens are debited.\nto: Target account to which to credit the tokens.\nquantity: The amount of tokens.\nmemo: Memo accompanying the transaction.\n")))}u.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,p=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(p,r(r({ref:t},s),{},{components:n})):i.a.createElement(p,r({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);