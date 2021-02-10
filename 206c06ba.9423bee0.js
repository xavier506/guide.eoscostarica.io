(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(n),h=a,d=b["".concat(i,".").concat(h)]||b[h]||p[h]||o;return n?r.a.createElement(d,s(s({ref:t},u),{},{components:n})):r.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(130)),i={id:"github-keys",title:"GitHub Keys",sidebar_label:"GitHub Keys"},s={unversionedId:"tutorials/github-keys",id:"tutorials/github-keys",isDocsHomePage:!1,title:"GitHub Keys",description:"Why we need GitHub Keys?",source:"@site/docs/tutorials/github-keys.md",slug:"/tutorials/github-keys",permalink:"/docs/tutorials/github-keys",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/github-keys.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1612978567,sidebar_label:"GitHub Keys",sidebar:"docs",previous:{title:"GitHub Guide",permalink:"/docs/tutorials/github-guide"},next:{title:"React JS",permalink:"/docs/tutorials/react-tutorial"}},l=[{value:"Why we need GitHub Keys?",id:"why-we-need-github-keys",children:[]},{value:"How to generate a new SSH key?",id:"how-to-generate-a-new-ssh-key",children:[]},{value:"How to Add your SSH Key to the ssh-agent",id:"how-to-add-your-ssh-key-to-the-ssh-agent",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-we-need-github-keys"},"Why we need GitHub Keys?"),Object(o.b)("p",null,"Let's first define GitHub as a browser-based online control system of distributed version for those software developers using the Git revision control system. Git uses SSH public key authentication and not a password authentication.  Each user of the system has to generate a key."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SSH")," is also known as Secure Shell or Secure Socket Shell ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh"},"More About SSH in GitHub"),". SSH keys are used to authenticate secure connections they are generate through a public key cryptographic algorithm, the most common being RSA or DSA. This is a one-way formula that ensures the public key can be derived from the private key but the private key cannot be derived from the public key."),Object(o.b)("h2",{id:"how-to-generate-a-new-ssh-key"},"How to generate a new SSH key?"),Object(o.b)("p",null,"This guide is for Windows users, more information for Linux and Mac ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"on this site"),"."),Object(o.b)("p",null,"Windows environments do not have a standard default Unix shell. External shell programs will need to be installed for to have a complete keygen experience. The most straight forward option is to utilize Git Bash."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open Git Bash")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Paste the text below, substitute ",Object(o.b)("inlineCode",{parentName:"p"},'"your_email@example.com"')," with your GitHub email address"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t ed25519 -C "your_email@example.com"\n')),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE :"),"\nIf you are using a legacy system that doesn't support the ",Object(o.b)("inlineCode",{parentName:"p"},"ed25519")," algorithm, use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n')),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It will ask for a file to save the key, just press enter. This accepts the default file location. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"At the prompt, type a secure passphrase. For security reasons it should be as complex as possible."))),Object(o.b)("p",null,"Now you have a new SSH key!"),Object(o.b)("h2",{id:"how-to-add-your-ssh-key-to-the-ssh-agent"},"How to Add your SSH Key to the ssh-agent"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ensure the ssh-agent is running ",Object(o.b)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases"},"more information")," , or start it manually:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"#start the ssh-agent in the background\n$ eval $(ssh-agent -s)\n> Agent pid 59566\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE :"),"\nIf you are following this ssh key generation flow , there is no need to start the ssh-agent."),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace ",Object(o.b)("inlineCode",{parentName:"li"},"id_ed25519")," in the command with the name of your private key file.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ ssh-add ~/.ssh/id_ed25519\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Now you need to add your public key to your ",Object(o.b)("strong",{parentName:"li"},"GitHub account")," , for this ",Object(o.b)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"follow this steps"),".")),Object(o.b)("p",null,"Now you are set."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.preveil.com/blog/public-and-private-key/"},"More information on how it works"),"."))}c.isMDXComponent=!0}}]);