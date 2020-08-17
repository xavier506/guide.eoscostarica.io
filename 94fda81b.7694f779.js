(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(104)),c={id:"command-line",title:"Command Line Interface",sidebar_label:"Command Line"},s={unversionedId:"tools/command-line",id:"tools/command-line",isDocsHomePage:!1,title:"Command Line Interface",description:"CLEOS",source:"@site/docs/tools/command-line.md",permalink:"/docs/tools/command-line",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tools/command-line.md",lastUpdatedBy:"Jean",lastUpdatedAt:1597686100,sidebar_label:"Command Line",sidebar:"docs",previous:{title:"Block Explorers",permalink:"/docs/tools/block-explorers"},next:{title:"EOSIO SDK Libraries",permalink:"/docs/tools/eosio-sdk-libraries"}},i=[{value:"CLEOS",id:"cleos",children:[]},{value:"Installation",id:"installation",children:[]},{value:"How to use Cleos",id:"how-to-use-cleos",children:[{value:"Cleos command",id:"cleos-command",children:[]},{value:"Cleos subcommands",id:"cleos-subcommands",children:[]}]},{value:"Cleos example",id:"cleos-example",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cleos"},"CLEOS"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleos")," is a command line tool that interacts with the API REST exposed by nodeos. The developers also can use code to implement and test EOSIO's Smart Contracts."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleos")," is distributed as part of EOSIO. In order to install ",Object(r.b)("inlineCode",{parentName:"p"},"cleos")," follow the instructions written in the EOSIO's software installation section."),Object(r.b)("h2",{id:"how-to-use-cleos"},"How to use Cleos"),Object(r.b)("p",null,"In order to use ",Object(r.b)("inlineCode",{parentName:"p"},"cleos"),", you need the domain or IP direction (and the port number) of an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos")," in execution. The instance of ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos")," needs to be configured to load ",Object(r.b)("inlineCode",{parentName:"p"},"eosio :: chain_api_plugin")," when starts. This allows that ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos")," responds to the RPC request that come from ",Object(r.b)("inlineCode",{parentName:"p"},"cleos"),"."),Object(r.b)("h3",{id:"cleos-command"},"Cleos command"),Object(r.b)("p",null,"Show the complete command reference in the following link to Cleos Documentation"),Object(r.b)("p",null,"To get a full list of the available ",Object(r.b)("inlineCode",{parentName:"p"},"cleos")," commands, execute:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cleos --help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Command Line Interface to EOSIO Client\nUsage: cleos [OPTIONS] SUBCOMMAND\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -u,--url TEXT=http://127.0.0.1:8888/\n                              the http/https URL where nodeos is running\n   --wallet-url TEXT=unix:///Users/username/eosio-wallet/keosd.sock\n                              the http/https URL where keosd is running\n  -r,--header                 pass specific HTTP header; repeat this option to pass multiple headers\n  -n,--no-verify              don't verify peer certificate when using HTTPS\n  --no-auto-keosd             don't automatically launch a keosd if one is not currently running\n  -v,--verbose                output verbose errors and action console output\n  --print-request             print HTTP request to STDERR\n  --print-response            print HTTP response to STDERR\n\nSubcommands:\n  version                     Retrieve version information\n  create                      Create various items, on and off the blockchain\n  convert                     Pack and unpack transactions\n  get                         Retrieve various items and information from the blockchain\n  set                         Set or update blockchain state\n  transfer                    Transfer tokens from account to account\n  net                         Interact with local p2p network connections\n  wallet                      Interact with local wallet\n  sign                        Sign a transaction\n  push                        Push arbitrary transactions to the blockchain\n  multisig                    Multisig contract commands\n  wrap                        Wrap contract commands\n  system                      Send eosio.system contract action to the blockchain.\n")),Object(r.b)("h3",{id:"cleos-subcommands"},"Cleos subcommands"),Object(r.b)("p",null,"To get help whit whatever subcommand in particular, execute ",Object(r.b)("inlineCode",{parentName:"p"},"code SUBCOMMAND --help"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cleos create --help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Create various items, on and off the blockchain\nUsage: cleos create SUBCOMMAND\n\nSubcommands:\n  key                         Create a new keypair and print the public and private keys\n  account                     Create a new account on the blockchain\n                              (assumes system contract does not restrict RAM usage)\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleos")," can also provide help for subcommands use within subcommands. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cleos create account --help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Create a new account on the blockchain (assumes system contract does not restrict RAM usage)\nUsage: cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]\n\nPositionals:\n  creator TEXT                The name of the account creating the new account (required)\n  name TEXT                   The name of the new account (required)\n  OwnerKey TEXT               The owner public key or permission level for the new account (required)\n  ActiveKey TEXT              The active public key or permission level for the new account\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s\n  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times\n  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction\n  -j,--json                   print result as json\n  --json-file TEXT            save result in json format into a file\n  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)\n  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction\n  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)\n  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction\n  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')\n  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)\n  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)\n  --delay-sec UINT            set the delay_sec seconds, defaults to 0s\n")),Object(r.b)("h2",{id:"cleos-example"},"Cleos example"),Object(r.b)("p",null,"The following command ",Object(r.b)("inlineCode",{parentName:"p"},"cleos")," creates a local wallet called ",Object(r.b)("inlineCode",{parentName:"p"},"my_wallet")," and shows the password on the screen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"cleos wallet create -n my_wallet --to-console\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'Creating wallet: my_wallet\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\n"PW5JbF34UdA193Eps1bjrWVJRaNMt1VKddLn4Dx6SPVTfMDRnMBWN"\n')))}p.isMDXComponent=!0}}]);