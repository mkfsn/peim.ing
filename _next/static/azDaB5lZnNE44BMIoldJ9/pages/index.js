(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(i.default.useContext(r.AmpStateContext))};var a,i=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,i=void 0!==a&&a,r=e.hasQuery;return n||i&&(void 0!==r&&r)}},"1cof":function(e,t,n){e.exports={education:"education_education__16WA-"}},"1dv8":function(e,t,n){e.exports={home:"index_home__ZdSNF","theme-selector":"index_theme-selector__cRS2C"}},"1ju0":function(e,t,n){e.exports={projects:"projects_projects__3Z4EW",project:"projects_project__3Czgd",header:"projects_header__1S9u5",title:"projects_title__2zROs",type:"projects_type__3ErGL",details:"projects_details__2ysQ6"}},"219c":function(e,t,n){e.exports={profile:"profile_profile__2l5XC",container:"profile_container__eOu_d",name:"profile_name__w1lMe",aka:"profile_aka__5OGI0",sns:"profile_sns__9P9Wk",location:"profile_location__FBl8P",email:"profile_email__5MVan"}},"36qb":function(e,t,n){e.exports={icon:"icon_icon__3hfwQ"}},"5fIB":function(e,t,n){var a=n("7eYB");e.exports=function(e){if(Array.isArray(e))return a(e)}},"6lMS":function(e,t,n){e.exports={experiences:"experiences_experiences__3jQ6f"}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var a=s(n("q1tI")),i=s(n("Xuae")),r=n("lwAK"),l=n("FYa8"),o=n("/0+H");function s(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(i){var r=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var l=i.key.slice(i.key.indexOf("$")+1);e.has(l)?r=!1:e.add(l)}switch(i.type){case"title":case"base":t.has(i.type)?r=!1:t.add(i.type);break;case"meta":for(var o=0,s=p.length;o<s;o++){var c=p[o];if(i.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?r=!1:n.add(c);else{var u=i.props[c],d=a[c]||new Set;d.has(u)?r=!1:(d.add(u),a[c]=d)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var m=(0,i.default)();function f(e){var t=e.children;return(a.default.createElement(r.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(m,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,o.isInAmpMode)(e)},t)}))})))}f.rewind=m.rewind;var _=f;t.default=_},"DrD/":function(e,t,n){e.exports={dropdown:"theme-selector_dropdown__2Q0n9","dropdown-btn":"theme-selector_dropdown-btn__kiPeH","dropdown-content":"theme-selector_dropdown-content__3YqQU"}},E4Hn:function(e,t,n){e.exports={skills:"skills_skills__3pqkL","set-wrapper":"skills_set-wrapper__sCt2l","skill-set":"skills_skill-set__231Tg"}},PbOz:function(e,t,n){e.exports={experiences:"experiences_experiences__3sl2s",experience:"experiences_experience__38vyo",date:"experiences_date__2Bs71",title:"experiences_title__3YCNB",details:"experiences_details__Mdwy5"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return De}));var a=n("q1tI"),i=n.n(a),r=n("8Kt/"),l=n.n(r),o=n("1dv8"),s=n.n(o),c=n("nOHt"),u=n("qtWn"),p=n.n(u),d=n("k7Sn"),m=n("Yps9"),f=n.n(m),_=n("k3Ah"),g=n.n(_),h=n("36qb"),v=n.n(h),k=i.a.createElement;function b(e){return k("span",{className:v.a.icon},k("ion-icon",{className:v.a.icon,name:e.name,style:{color:e.color}}))}var w=i.a.createElement;function y(e){return w("a",{className:g.a.link,target:"_blank",href:e.link,key:e.link},w(b,{name:e.name,color:e.color}))}var N=i.a.createElement;function x(e){var t=e.sns;return N(i.a.Fragment,null,t.home&&N(y,{link:t.home,name:"home",color:"rgb(78,165,133)"}),t.github&&N(y,{link:t.github,name:"logo-github",color:"rgb(33,37,40)"}),t.twitter&&N(y,{link:t.twitter,name:"logo-twitter",color:"rgb(43,152,236)"}),t.linkedin&&N(y,{link:t.linkedin,name:"logo-linkedin",color:"rgb(23,104,166)"}))}var S=i.a.createElement,E=Object(d.withTranslation)("common")((function(e){var t=e.profile,n=e.t;return S("header",{className:f.a.profile},S("div",{className:f.a.container},S("h1",{className:f.a.name},S("span",null,t.name),"\xa0",""!==t.nickname&&S("span",{className:f.a.aka},"(aka ",t.nickname,")")),S("h4",{className:f.a.address}),S("h4",{className:f.a.sns},t.sns&&S(x,{sns:t.sns}),S("span",{className:f.a.location},S(b,{name:"pin"}),t.location),"\xa0",S("span",{className:f.a.email},S(b,{name:"mail"})," \xa0",t.email)),S("div",{className:f.a.avatar},S("img",{src:t.avatar,alt:"avatar"})),S("hr",null),S("p",{onClick:function(){return d.i18n.changeLanguage("en"===d.i18n.language?"ja":"en")}},n(t.summary))))})),C=n("xq06"),j=n.n(C);function D(e){var t,n=function(e){if(e instanceof Date)return e;return new Date(e)}(e),a=new Date;if((t=n)instanceof Date&&!isNaN(t)||(n=a),a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth())return"Current";var i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],r=n.getFullYear().toString().substr(2);return"".concat(i,"'").concat(r)}var P=i.a.createElement;function A(e,t){return new Date(e.from)<=new Date(t.from)&&new Date(e.to)>=new Date(t.to)}function T(e){var t=[];return e.forEach((function(e){e.beforeChildren=[],e.afterChildren=[];var n=!1;t.forEach((function(t){switch(a=t.date,A(i=e.date,a)?-1:A(a,i)?2:-1){case-1:break;case 2:new Date(e.date.from)-new Date(t.date.from)>new Date(t.date.to)-new Date(e.date.to)?t.afterChildren.push(e):t.beforeChildren.push(e),n=!0}var a,i})),n||t.push(e)})),t}function M(e,t,n){return P("div",{className:j.a["timeline-outline"]+" "+j.a[t]},P("div",{className:j.a.end},D(e.to)),P("div",{className:j.a.begin},D(e.from)))}function I(e){return P("div",{className:j.a.title},P("h3",null,e))}function R(e){return Array.isArray(e)?P("div",{className:j.a.detail},P("ul",null,e.map((function(e){return P("li",{key:e},e)})))):P("div",{className:j.a.detail},e.toString())}function H(e){var t=T(e.periods);return P("div",{className:j.a.timeline+" "+j.a[e.color]},t.map((function(e){return function(e){var t=void 0!==e.afterChildren[0]&&P("div",{className:j.a["timeline-container"]+" "+j.a.overlap},M(e.afterChildren[0].date,e.afterChildren[0].color,e.afterChildren[0].icon),P("div",{className:j.a["timeline-content"]+" "+j.a[e.afterChildren[0].color]},I(e.afterChildren[0].title),R(e.afterChildren[0].details)));return P("div",{className:j.a["timeline-container"],key:e.title},M(e.date,e.color,e.icon),P("div",{className:j.a["timeline-content"]+" "+j.a[e.color]},t,I(e.title),R(e.details)))}(e)})))}var O=n("1cof"),q=n.n(O),B=i.a.createElement;function Z(e){var t=e.educations;return B("section",{class:q.a.education,id:"education"},B("h1",null,"Education"),B(H,{periods:t,color:"yellow"}))}var L=n("6lMS"),z=n.n(L),J=i.a.createElement;function K(e){var t=e.experiences;return J("section",{className:z.a.experiences,id:"experience"},J("h1",null,"Experience"),J(H,{periods:t,color:"green"}))}var F=n("1ju0"),G=n.n(F),Q=i.a.createElement;function W(e){var t=e.projects;return Q("section",{className:G.a.projects,id:"projects"},Q("h1",null,"Projects"),t.map((function(e){return function(e){return Q("div",{className:G.a.project,key:e.title},Q("div",{className:G.a.header},Q("h4",{className:G.a.title},Q("p",null,e.title)),Q("h4",{className:G.a.type},Q("p",null,e.type))),Q("div",{className:G.a.details},Q("ul",null,e.details.map((function(e){return Q("li",{key:e},e)})))))}(e)})))}var Y=n("eYM0"),X=n.n(Y),U=i.a.createElement;function V(e){return U("div",{className:X.a["skill-group"],key:e.title},U("h3",{className:X.a.header},e.title),U("div",{className:X.a.body},e.skills.map((function(t){return void 0===t.color&&(t.color=e.color),n=t,U("div",{className:X.a["skill-bar"],key:n.title},U("div",{className:X.a.wrapper},U("span",{className:X.a.filled,style:{backgroundColor:n.color,width:n.percentage}})),U("span",{className:X.a.percentage},n.percentage),U("span",{className:X.a.title},n.title));var n}))))}function $(e){var t=e.skills;return U("section",{className:X.a.skills},U("h1",null,"Skills"),U("div",{className:X.a["group-wrapper"]},t.map((function(e){return V(e)}))))}var ee=i.a.createElement;function te(){return ee("main",null,ee(E,{profile:p.a.profile}),ee(Z,{educations:p.a.educations}),ee(K,{experiences:p.a.experiences}),ee(W,{projects:p.a.projects}),ee($,{skills:p.a.skills}))}var ne=n("219c"),ae=n.n(ne),ie=n("DrD/"),re=n.n(ie),le=i.a.createElement;function oe(){return le("div",{className:re.a.dropdown},le("button",{className:re.a["dropdown-btn"]},"Theme \xa0",le(b,{name:"arrow-dropdown-circle"})),le("div",{className:re.a["dropdown-content"]},le("a",{href:"/resume/?theme=printable"},"Printable"),le("a",{href:"/resume/"},"Prettier")))}var se=i.a.createElement,ce=Object(d.withTranslation)("common")((function(e){var t=e.t,n=e.profile;return se("header",{className:ae.a.profile},se("div",{className:ae.a.container},se("h1",{className:ae.a.name},se("span",null,n.name),"\xa0",""!==n.nickname&&se("span",{className:ae.a.aka},"(aka ",n.nickname,")")),se("h4",{className:ae.a.sns},n.sns&&se(x,{sns:n.sns}),se("span",{className:ae.a.location},se(b,{name:"pin"}),n.location," \xa0"),se("span",{className:ae.a.email},se(b,{name:"mail"})," \xa0",n.email)),se("hr",null),se("p",{onClick:function(){return d.i18n.changeLanguage("en"===d.i18n.language?"ja":"en")}},t(n.summary))))})),ue=n("zbQ1"),pe=n.n(ue),de=i.a.createElement;function me(e){var t=e.educations;return de("section",{className:pe.a["education-container"],id:"education"},de("h1",null,"Education"),t.map((function(e){return de("div",{className:pe.a.education,key:e.title},de("h3",{className:pe.a.name},e.title),de("p",{className:pe.a.date},de("i",null,D(e.date.from)," - ",D(e.date.to))),de("p",{className:pe.a.degree},e.details))})))}var fe=n("PbOz"),_e=n.n(fe),ge=i.a.createElement;function he(e){var t=e.experiences;return ge("section",{className:_e.a.experiences,id:"experiences"},ge("h1",null,"Experience"),t.map((function(e){return ge("div",{className:_e.a.experience,key:e.organization+"-"+e.title},ge("h3",{className:_e.a.title},e.organization,", ",e.title),ge("p",{className:_e.a.date},ge("i",null,D(e.date.from)," - ",D(e.date.to))),ge("ul",{className:_e.a.details},e.details.map((function(e){return ge("li",{key:e},e)}))))})))}var ve=n("x1Xe"),ke=n.n(ve),be=i.a.createElement;function we(e){var t=e.projects;return be("section",{className:ke.a.projects,id:"projects"},be("h1",null,"Projects"),t.map((function(e){return function(e){return be("div",{className:ke.a.project,key:e.title},be("p",{className:ke.a.type},be("i",null,e.type)),be("h3",{className:ke.a.title},e.title),be("div",{className:ke.a.details},be("ul",null,e.details.map((function(e){return be("li",{key:e},e)})))))}(e)})))}var ye=n("E4Hn"),Ne=n.n(ye),xe=i.a.createElement;function Se(e){var t=e.skills;return xe("section",{className:Ne.a.skills},xe("h1",null,"Skills"),xe("div",{className:Ne.a["set-wrapper"]},t.map((function(e){return function(e){var t={};e.skills.forEach((function(e){t[e.label]||(t[e.label]=[]),t[e.label].push(e.title)}));var n=Object.keys(t).map((function(e){return t[e].join(" / ")}));return xe("div",{className:Ne.a["skill-set"],key:e.title},xe("h3",null,e.title),xe("ul",null,n.map((function(e){return xe("li",{key:e},e)}))))}(e)}))))}var Ee=i.a.createElement;function Ce(){return Ee("main",null,Ee(ce,{profile:p.a.profile}),Ee(me,{educations:p.a.educations}),Ee(he,{experiences:p.a.experiences}),Ee(we,{projects:p.a.projects}),Ee(Se,{skills:p.a.skills}))}var je=i.a.createElement;function De(){var e=function(e){switch(e){case"printable":return je(Ce,null)}return je(te,null)}(Object(c.useRouter)().query.theme);return je("div",{className:s.a.home},je(l.a,null,je("title",null,"Pei-Ming Wu"),je("link",{rel:"icon",href:"/favicon.ico"}),je("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=1"}),je("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans",rel:"stylesheet"})),je("div",{className:s.a["theme-selector"]},je(oe,null)),e,je("script",{src:"https://unpkg.com/ionicons@4.4.2/dist/ionicons.js"}))}},Xuae:function(e,t,n){"use strict";var a=n("/GRZ"),i=n("qXWd"),r=n("i2R6"),l=n("48fX"),o=n("tCBg"),s=n("T0f4"),c=n("mPvQ");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(o){l(c,o);var s=u(c);function c(e){var r;return a(this,c),r=s.call(this,e),d&&(t.add(i(r)),n(i(r))),r}return r(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),r(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(p.Component))}},Yps9:function(e,t,n){e.exports={profile:"profile_profile__3PSRo",container:"profile_container__2ESgj",name:"profile_name__3awmn",aka:"profile_aka__uwX86",avatar:"profile_avatar__1BJRe",address:"profile_address__rKQOV",sns:"profile_sns__3yWbI",location:"profile_location__vYZkI",email:"profile_email__2i1iV"}},eYM0:function(e,t,n){e.exports={skills:"skills_skills__2RKN8","group-wrapper":"skills_group-wrapper__16sIh","skill-group":"skills_skill-group__15kWJ",header:"skills_header__3iWZA",body:"skills_body__xSptX","skill-bar":"skills_skill-bar__2H9Wx",filled:"skills_filled__2Sxz1",percentage:"skills_percentage__3Idbo",title:"skills_title__Cx7q6",wrapper:"skills_wrapper__2j8Rj"}},k3Ah:function(e,t,n){e.exports={link:"icon-link_link__ysJTq"}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var i=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=i},mPvQ:function(e,t,n){var a=n("5fIB"),i=n("rlHP"),r=n("KckH"),l=n("kG2m");e.exports=function(e){return a(e)||i(e)||r(e)||l()}},qtWn:function(e,t){const n=[{profile:{name:"Pei-Ming Wu",nickname:"mkfsn",location:"Taiwan",email:"p408865(#)gmail.com",avatar:"/resume/avatar.png",sns:{home:"https://mkfsn.github.io",github:"https://github.com/mkfsn",twitter:"https://twitter.com/mkfsn",linkedin:"https://linkedin.com/in/mkfsn"},summary:"Quick-learning software engineer with experience in computer science, programming and networking for various projects.\n"},educations:[{title:"Institute of Computer and Communication Engineering, National Cheng Kung University, Taiwan.",icon:"https://web.ncku.edu.tw/var/file/0/1000/msys_1000_556236_23708.ico",date:{from:"2013-09-01T00:00:00Z",to:"2016-09-01T00:00:00Z"},details:"Master of Science",color:"yellow"},{title:"Graduate School of Information Science and Technology, Osaka University, Japan.",icon:"https://www.osaka-u.ac.jp/favicon.ico",date:{from:"2015-09-01T00:00:00Z",to:"2016-08-01T00:00:00Z"},details:"Exchange Student",color:"blue"},{title:"Computer Science Engineering, National Sun Yat-Sen University, Taiwan.",icon:"https://www.nsysu.edu.tw//var/file/0/1000/msys_1000_5687921_59580.ico",date:{from:"2009-09-01T00:00:00Z",to:"2013-06-01T00:00:00Z"},details:"Bachelor of Science",color:"yellow"}],experiences:[{title:"Lead Developer",organization:"Glasnostic",date:{from:"2018-11-01T00:00:00Z",to:""},icon:"https://glasnostic.com/favicon.ico",details:["Responsible for the cloud project (i.e., developing, reviewing, testing and QA front-end/back-end web services, managing staging and production environments).","Experience in engineering leadership (i.e., team member management, sprint planning, shift rosters, performance appraisals).","Experience in testing micro-services (i.e., planing test cases for unit test and integration test, developing integration test for micro-services).","Experience with AWS (i.e., EC2, VPS).","Experience with Azure (i.e., ACS, AKS, OMS, Service Bus, CosmosDB).","Experience with several Kubernetes CNIs (e.g., flannel, calico, weave, canal)."],color:"green"},{title:"Software Engineer",organization:"Glasnostic",date:{from:"2017-02-01T00:00:00Z",to:"2018-11-01T00:00:00Z"},icon:"https://glasnostic.com/favicon.ico",details:["Experience deploying and administering micro-services using Docker and Kubernetes.","Experience administering and deploying development CI/CD tools such as Git, Github, TravisCI.","Experience developing software router in Go and C with userspace packet processing frameworks (e.g., DPDK, Netmap).","Experience in back-end web development in Go with several technologies (e.g., MongoDB, InfluxDB, RESTful, Websocket, gRPC, LDAP).","Experience in front-end web development in TypeScript, HTML, SCSS using Anguler 1.5/2/4, D3.js, RxJS.","Experience with Linux operating system environments (e.g., Ubuntu, CentOS, Alpine)."],color:"green"},{title:"Network and System Administrator",organization:"NCKU EE",date:{from:"2013-09-01T00:00:00Z",to:"2015-06-01T00:00:00Z"},icon:"https://www.ee.ncku.edu.tw/image/nckuee.ico",details:["Experience maintaining layer 2/3 switches and Linux operating systems.","Experience with Linux operating system environments (e.g., Ubuntu, CentOS).","Experience developing web-based network management system in PHP, HTML, JavaScript with LAMP."],color:"green"},{title:"Network and System Administrator",organization:"NSYSU-CDPA (Campus Dorm-net Promotion Association)",date:{from:"2010-09-01T00:00:00Z",to:"2013-06-01T00:00:00Z"},icon:"https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-9/11232064_885586498187186_2626790383753317843_n.png?_nc_cat=106&_nc_sid=85a577&_nc_ohc=zEkI2EQ0HJMAX-i5tTL&_nc_ht=scontent.fkhh1-1.fna&oh=fbaaf10901ae081009d4901128c6ee8d&oe=5F546C90",details:["Experience with management of layer 2/3 switches (i.e., reconfiguration, replacement, upgrade).","Experience with RJ45 sockets replacement.","Experience in network monitoring using several tools and technologies (e.g., SNMP, MRTG, Netflow).","Experience maintaining web-based network management system.","Experience with Unix-like operating system environments (e.g., Ubuntu, Gentoo, FreeBSD, Solaris)."],color:"green"}],projects:[{type:"Master Thesis",title:"Design and Implementation of a Network Traffic Classification Caching Mechanism Based on Net-DPIS",details:["Improved performance of a host-based DPIS (Deep Packet Inspection System) which was developed as Linux kernel module."]}],skills:[{title:"Frontend",color:"rgb(228, 182, 97)",skills:[{title:"HTML5",percentage:"80%",label:"1"},{title:"CSS3",percentage:"70%",label:"1"},{title:"jQuery",percentage:"75%",label:"1"},{title:"Bootstrap",percentage:"70%",label:"1"},{title:"AngularJS",percentage:"72%",label:"2"},{title:"Angular",percentage:"75%",label:"2"},{title:"React",percentage:"20%",label:"2"},{title:"Vue",percentage:"20%",label:"2"}]},{title:"Programming Language",color:"rgb(107, 153, 208)",skills:[{title:"Go",percentage:"90%",label:"1"},{title:"C",percentage:"90%",label:"1"},{title:"C++",percentage:"85%",label:"1"},{title:"Python",percentage:"65%",label:"2"},{title:"PHP",percentage:"60%",label:"2"},{title:"TypeScript",percentage:"75%",label:"2"},{title:"Ruby",percentage:"35%",label:"3"},{title:"NodeJS",percentage:"35%",label:"3"},{title:"Rust",percentage:"15%",label:"3"},{title:"Java",percentage:"20%",label:"3"}]},{title:"Backend & Database",color:"rgb(122, 193, 149)",skills:[{title:"REST API",percentage:"75%",label:"1"},{title:"Protobuf",percentage:"70%",label:"1"},{title:"MySQL",percentage:"70%",label:"2"},{title:"MongoDB",percentage:"65%",label:"2"},{title:"InfluxDB",percentage:"65%",label:"2"},{title:"Flask",percentage:"70%",label:"3"},{title:"GIN",percentage:"75%",label:"3"},{title:"Codeigniter",percentage:"70%",label:"3"}]},{title:"DevOps",color:"rgb(222, 132, 130)",skills:[{title:"Docker",percentage:"85%",label:"1"},{title:"Kubernetes",percentage:"85%",label:"1"},{title:"AWS",percentage:"30%",label:"2"},{title:"Azure",percentage:"65%",label:"2"},{title:"TravisCI",percentage:"70%",label:"3"},{title:"Github Actions",percentage:"60%",label:"3"}]},{title:"Networking & Security",color:"rgb(143, 133, 230)",skills:[{title:"OpenFlow",percentage:"65%",label:"1"},{title:"OpenStack",percentage:"55%",label:"1"},{title:"Netfilter",percentage:"70%",label:"2"},{title:"DPDK",percentage:"60%",label:"2"},{title:"eBPF",percentage:"40%",label:"2"},{title:"XDP",percentage:"40%",label:"2"},{title:"Netmap",percentage:"50%",label:"2"},{title:"Certified Ethical Hacker",percentage:"100%",label:"3"}]},{title:"Language",color:"rgb(144, 200, 234)",skills:[{title:"\ud83c\uddf9\ud83c\uddfc Chinese",percentage:"95%",label:"1"},{title:"\ud83c\uddf9\ud83c\uddfc Taiwanese",percentage:"95%",label:"1"},{title:"\ud83c\uddef\ud83c\uddf5 Japanese",percentage:"70%",label:"2"},{title:"\ud83c\uddfa\ud83c\uddf8 English",percentage:"70%",label:"3"}]}]}];e.exports=n.length<=1?n[0]:n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},x1Xe:function(e,t,n){e.exports={projects:"projects_projects__2PBKH",project:"projects_project__2PLDu",type:"projects_type__1dIzw",title:"projects_title__2he0I",details:"projects_details__2zaAT"}},xq06:function(e,t,n){e.exports={timeline:"timeline_timeline__npR-r",green:"timeline_green__3Cu53",blue:"timeline_blue__2LDE_",yellow:"timeline_yellow__2rJpF","timeline-container":"timeline_timeline-container__3baPo","timeline-outline":"timeline_timeline-outline__3p_EH",icon:"timeline_icon__2rEhM",end:"timeline_end__36d8k",begin:"timeline_begin___PsYZ","timeline-content":"timeline_timeline-content__1SW4x",title:"timeline_title__3ESH8",detail:"timeline_detail__2Db0Z",overlap:"timeline_overlap__EI7Ow"}},zbQ1:function(e,t,n){e.exports={"education-container":"education_education-container__1tHT0",education:"education_education__ivbK4",degree:"education_degree__ZvHjQ",name:"education_name__guq70",date:"education_date__1s2-4"}}},[["vlRD",1,2,0,3]]]);