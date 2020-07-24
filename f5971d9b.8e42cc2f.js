(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(184)),i={id:"open-source-guidelines",title:"Open Source Contributing Guidelines",sidebar_label:"Open Source Guidelines"},s={id:"open-source-guidelines",isDocsHomePage:!1,title:"Open Source Contributing Guidelines",description:"Development Process",source:"@site/docs/open-source-guidelines.md",permalink:"/docs/open-source-guidelines",lastUpdatedBy:"kurono",lastUpdatedAt:1595595820,sidebar_label:"Open Source Guidelines",sidebar:"docs",previous:{title:"Engineering Culture",permalink:"/docs/engineering-culture"},next:{title:"Web App Boilerplate",permalink:"/docs/web-app-boilerplate"}},l=[{value:"Development Process",id:"development-process",children:[]},{value:"Pull Request General Guidelines",id:"pull-request-general-guidelines",children:[]},{value:"Commit Message Guidelines",id:"commit-message-guidelines",children:[{value:"Commit Message Format",id:"commit-message-format",children:[]},{value:"Revert",id:"revert",children:[]},{value:"Type",id:"type",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Body",id:"body",children:[]},{value:"Footer",id:"footer",children:[]}]},{value:"Reporting bugs",id:"reporting-bugs",children:[]},{value:"Releases",id:"releases",children:[{value:"Changelog Generation",id:"changelog-generation",children:[]}]},{value:"Advanced Git tools",id:"advanced-git-tools",children:[]},{value:"Code Standards",id:"code-standards",children:[]},{value:"Continuous Integration and Delivery",id:"continuous-integration-and-delivery",children:[]},{value:"Pre-commit Hooks",id:"pre-commit-hooks",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"development-process"},"Development Process"),Object(o.b)("p",null,"We use a Kanban-style board to prioritize the work. For example the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-rate/projects/1"}),"EOS rate project board"),"."),Object(o.b)("p",null,"We have added a additional column to the default automated board in order to maintain a prioritized To Do column.\nWhen a new issues is create you need to explicitly use the project option on the GitHub issue to include it in the board; Once you do that it gets automatically added to the New Issues column."),Object(o.b)("p",null,"Periodically we move the new Issues to the To Do column and manually and give it the appropriate priority."),Object(o.b)("p",null,"When you start working on a task you must manually move it to In Progress column."),Object(o.b)("p",null,"We use GitHub flow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://guides.github.com/introduction/flow/"}),"https://guides.github.com/introduction/flow/")," to request code changes.\nWe develop on master and release using tags with semver versioning."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://gaboesquivel.com/img/2018/05/github-flow.png",alt:null}))),Object(o.b)("p",null,"New and reopened pull request are automatically added to the board in the In Progress column."),Object(o.b)("p",null,"When the pull request is closed is moved to the Done column automatically. If the pull request closes and issues it is properly stated with the GitHub keywords closes in the pull request it gets automatically moved to the Done column too."),Object(o.b)("h2",{id:"pull-request-general-guidelines"},"Pull Request General Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned."),Object(o.b)("li",{parentName:"ul"},"Check for related issues on the issue tracker."),Object(o.b)("li",{parentName:"ul"},"Non-trivial changes should be discussed on an issue first."),Object(o.b)("li",{parentName:"ul"},"Develop in a topic branch, never on master: ",Object(o.b)("inlineCode",{parentName:"li"},"git checkout -b topic-branch"),"."),Object(o.b)("li",{parentName:"ul"},"Provide useful pull request description."),Object(o.b)("li",{parentName:"ul"},'Make "atomic", well scoped pull requests. 1 PR per feature of bug fix.'),Object(o.b)("li",{parentName:"ul"},"Link the issue on the pull request description for cross references between code and issues.")),Object(o.b)("p",null,"We only support support ",Object(o.b)("strong",{parentName:"p"},"squash merge"),' of the pull requests as a best practice for ensure the master log is maintained clean and relevant, without requiring the pull request to be rebased. This strategy requires that all pull request made are "atomic", in other words they solve one thing only.  One pull request per feature, bug fix or documentation update.'),Object(o.b)("h2",{id:"commit-message-guidelines"},"Commit Message Guidelines"),Object(o.b)("p",null,"We have very precise rules over how our git commit messages can be formatted.  This leads to ",Object(o.b)("strong",{parentName:"p"},"more\nreadable messages")," that are easy to follow when looking through the ",Object(o.b)("strong",{parentName:"p"},"project history"),".  But also,\nwe use the git commit messages to ",Object(o.b)("strong",{parentName:"p"},"generate the project change log"),"."),Object(o.b)("p",null,"We follow angularJS commit message conventions as follows:"),Object(o.b)("h3",{id:"commit-message-format"},"Commit Message Format"),Object(o.b)("p",null,"Each commit message consists of a ",Object(o.b)("strong",{parentName:"p"},"header"),", a ",Object(o.b)("strong",{parentName:"p"},"body")," and a ",Object(o.b)("strong",{parentName:"p"},"footer"),".  The header has a special\nformat that includes a ",Object(o.b)("strong",{parentName:"p"},"type"),", a ",Object(o.b)("strong",{parentName:"p"},"scope")," and a ",Object(o.b)("strong",{parentName:"p"},"subject"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"header")," is mandatory and the ",Object(o.b)("strong",{parentName:"p"},"scope")," of the header is optional."),Object(o.b)("p",null,"Any line of the commit message cannot be longer 100 characters! This allows the message to be easier\nto read on GitHub as well as in various git tools."),Object(o.b)("p",null,"The footer should contain a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/closing-issues-via-commit-messages/"}),"closing reference to an issue")," if any."),Object(o.b)("p",null,"Samples:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"docs(changelog): update changelog to beta.5\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"fix(release): need to depend on latest rxjs and zone.js\n\nThe version in our package.json gets copied to the one we publish, and users need the latest of these.\n")),Object(o.b)("p",null,"even more ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/angular/angular/commits/master"}),"samples")),Object(o.b)("h3",{id:"revert"},"Revert"),Object(o.b)("p",null,"If the commit reverts a previous commit, it should begin with ",Object(o.b)("inlineCode",{parentName:"p"},"revert: "),", followed by the header of the reverted commit. In the body it should say: ",Object(o.b)("inlineCode",{parentName:"p"},"This reverts commit <hash>."),", where the hash is the SHA of the commit being reverted."),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"docs"),": Documentation only changes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"feat"),": A new feature"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"fix"),": A bug fix"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"content"),": Adding or removing content"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"devtools"),": Developer tooling related")),Object(o.b)("h3",{id:"scope"},"Scope"),Object(o.b)("p",null,"The scope is the name of the component or service that it affects. Eg:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"common")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"smart-contracts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"webapp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"graphql")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"frontend")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"demux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"docker"))),Object(o.b)("h3",{id:"subject"},"Subject"),Object(o.b)("p",null,"The subject contains a succinct description of the change:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),Object(o.b)("li",{parentName:"ul"},"don't capitalize the first letter"),Object(o.b)("li",{parentName:"ul"},"no dot (.) at the end")),Object(o.b)("h3",{id:"body"},"Body"),Object(o.b)("p",null,"Just as in the ",Object(o.b)("strong",{parentName:"p"},"subject"),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.'),Object(o.b)("h3",{id:"footer"},"Footer"),Object(o.b)("p",null,"The footer should contain any information about ",Object(o.b)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to\nreference GitHub issues that this commit ",Object(o.b)("strong",{parentName:"p"},"Closes"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Breaking Changes")," should start with the word ",Object(o.b)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two newlines. The rest of the commit message is then used for this."),Object(o.b)("h2",{id:"reporting-bugs"},"Reporting bugs"),Object(o.b)("p",null,"Before submitting your issue please check that you've completed the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Made sure you're on the latest version."),Object(o.b)("li",{parentName:"ul"},"Used the search feature to ensure that the bug hasn't been reported before.")),Object(o.b)("p",null,"Bug reports should contain the following information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Summary: A brief description."),Object(o.b)("li",{parentName:"ul"},"Steps to reproduce: How did you encounter the bug? Instructions to reproduce it."),Object(o.b)("li",{parentName:"ul"},"Expected behavior: How did you expect it to behave?"),Object(o.b)("li",{parentName:"ul"},"Actual behavior: How did it actually behave?"),Object(o.b)("li",{parentName:"ul"},"References: Links to any related tickets or information sources."),Object(o.b)("li",{parentName:"ul"},"If possible, attach visual documentation of the bug. Screenshot or animated gif.")),Object(o.b)("h2",{id:"releases"},"Releases"),Object(o.b)("p",null,"We release the production software version using github tags following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://semver.org"}),"Semver"),', except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".'),Object(o.b)("h4",{id:"breakingfeaturefix"},"Breaking.Feature.Fix"),Object(o.b)("p",null,"We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people."),Object(o.b)("h5",{id:"breaking"},"Breaking"),Object(o.b)("p",null,"Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release."),Object(o.b)("h5",{id:"feature"},"Feature"),Object(o.b)("p",null,"When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed."),Object(o.b)("h5",{id:"fix"},"Fix"),Object(o.b)("p",null,"When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior."),Object(o.b)("h3",{id:"changelog-generation"},"Changelog Generation"),Object(o.b)("p",null,"On each release we generate a changelog file to document changes using the standard ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rafinskipg/git-changelog"}),"git-changelog")," package. There's an npm task for it."),Object(o.b)("h2",{id:"advanced-git-tools"},"Advanced Git tools"),Object(o.b)("p",null,"There are also tools like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.github.com/"}),"Hub")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tj/git-extras"}),"git-extras")," that facilitate interacting with Github. You can leverage these tools to contribute to this repository."),Object(o.b)("h2",{id:"code-standards"},"Code Standards"),Object(o.b)("p",null,"We use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardjs.com"}),"standardjs code style"),"."),Object(o.b)("h2",{id:"continuous-integration-and-delivery"},"Continuous Integration and Delivery"),Object(o.b)("p",null,"This is a work in progress, we are going to probably want to use Netifly and TravisCI."),Object(o.b)("h2",{id:"pre-commit-hooks"},"Pre-commit Hooks"),Object(o.b)("p",null,"We use pre-commit hooks to ensure that both the code standards and commit message conventions are met."))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);