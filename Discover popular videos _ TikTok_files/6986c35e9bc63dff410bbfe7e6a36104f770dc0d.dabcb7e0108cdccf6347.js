/*! For license information please see 6986c35e9bc63dff410bbfe7e6a36104f770dc0d.dabcb7e0108cdccf6347.js.LICENSE.txt */
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"0pOA":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"2LUv":function(e,t,n){var r=n("m1Oa"),o=n("o/EK"),a=n("ShTl"),i=n("sJOi");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},"2W1i":function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(a){if(void 0===(o="function"===typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var i=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(s){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,!0!==a[u]&&(c+="="+a[u].split(";")[0]));return document.cookie=t+"="+n+c}}function i(e,n){if("undefined"!==typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=t(c[0]);if(u=(r.read||r)(u,s)||t(u),n)try{u=JSON.parse(u)}catch(f){}if(o[s]=u,e===s)break}catch(f){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(t,n){a(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},"2lck":function(e,t,n){"use strict";var r,o=n("6CzD"),a=n("dV/x"),i=n("mK0O"),c=n("hisu"),u=n("yBJb"),s=n("CHlC"),f=n("kMo5"),p=n("P+uj"),d=n("mXGw"),l=n.n(d),g=n("vvX8"),h=n.n(g),v=n("GeWT"),m=n.n(v),_=n("OSs+"),b=n("J2F4"),y=n("ou9M"),O=n("dAGg"),w=n("pWCa"),E=n.n(w),j=n("jR5A"),I=n("lEqP"),C=n("E3zU"),P=n("K92R"),T=n("mfX+"),S=n("hi5D"),R=n("xTjj"),A=l.a.createElement;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}!function(e){e.INIT="init",e.INIT_GA="init_ga",e.RESTART="restart"}(r||(r={}));var D=function(e){return d.Children.map(e,(function(e){return e}))};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=function(n){Object(s.a)(f,n);var i=M(f);function f(t){var n;return Object(c.a)(this,f),(n=i.call(this,t))._config=e,n.mountTea=!1,n.isLandingPage=0,n.onUrlChanged=function(e){var t=e||{},o=t.pathname,a=t.isFromWebApp,i=void 0===a?"0":a,c=t.isCopyUrl,u=void 0!==c&&c;if(o===R.ROUTER_CLIENT.FORYOU){n._config=Object(T.c)(S.PageNames.TRENDING,!0);var s=n.getLoggerInfo(r.INIT,{is_from_webapp:i,is_copy_url:u?1:0});_.c.config(s)}},n.handleRouterStart=function(){n.mountTea=!1},n.handleRouterChange=function(){if(n.mountTea)n.mountTea=!1;else{_.c.pause();var e=n.getLoggerInfo(r.RESTART);_.c.restart(e)}},n.getGaIds=function(){return[]},n.getLoggerInfo=function(e,t){var i,c,u,s="function"===typeof n._config?n._config(x({},n.props)):n._config,f=(s.openGa,s.gaIds,s.channels),p=void 0===f?[]:f,d=Object(a.a)(s,["openGa","gaIds","channels"]),l=n.props,g=l.$abTestVersion,v=l.$region,m=l.$wid,O=l.$sgOpen,w=l.$appId,E=l.$botType,C=l.$user,R=l.statusCode,A=l.$needFix,k=n.getGaIds();switch(e===r.INIT_GA&&(p=[]),e){case r.INIT:case r.INIT_GA:var M=Object(P.c)(y.FIRST_OPEN_KEY);M||(n.isLandingPage=1,Object(P.h)(y.FIRST_OPEN_KEY,d.page_name)),d.is_landing_page=n.isLandingPage,p.forEach((function(e){_.c.config([{loggerType:_.b.TEA,id:e,"header.custom":{user_is_login:C?1:0,landing_page:M||d.page_name}}])})),k.forEach((function(e){_.c.config([{loggerType:_.b.GA,id:e,landing_page:M||d.page_name}])}));break;case r.RESTART:d.is_landing_page=0}(d=Object(T.d)(d)).region=v,d.page_url||(d.page_url=location.href);var D=d,N=D.seo_ab_version,G=D.routeChangePageView,L=Object(a.a)(D,["seo_ab_version","routeChangePageView"]);p.forEach((function(e){return _.c.setEventCommons(x({id:e},L))}));var U=h.a.parse((null===(i=location.href.split("?"))||void 0===i||null===(c=i[1])||void 0===c||null===(u=c.split("#"))||void 0===u?void 0:u[0])||"",{ignoreQueryPrefix:!0});p.forEach((function(n){if(e===r.INIT||e===r.INIT_GA||G){var o=Boolean(U.sender_web_id)?{sender_device:U.sender_device,sender_web_id:U.sender_web_id}:{},a=["/","/foryou","/following","/trending"].indexOf(location.pathname)>-1||Object(j.a)("#".concat(location.pathname))?x({is_copy_url:t?t.is_copy_url:"1"===U.is_copy_url?1:0,is_from_webapp:t?t.is_from_webapp:"v2"===U.is_from_webapp?"v2":"v1"===U.is_from_webapp?"v1":"0"},o):{},i=x({teaChannel:n,seo_ab_version:N,bot_type:E||"others",need_fix:A?"1":"0"},a);R&&R!==I.OK&&(i.error_code=String(R)),_.c.event(b.j.PAGE_VIEW,i,_.a.TEA)}})),k.forEach((function(e){return _.c.setEventCommons(x({id:e},L))})),k.forEach((function(t){if(e===r.INIT||e===r.INIT_GA||G){var n={gaChannel:t,seo_ab_version:N};R&&R!==I.OK&&(n.error_code=String(R)),_.c.event(b.j.PAGE_VIEW,n,_.a.GA)}}));var V=Object(P.c)("webapp_session_id");V||(V=m+String(Date.now()),Object(P.h)("webapp_session_id",V));var $=p.map((function(e){var t={loggerType:_.b.TEA,id:e,region:v,user_unique_id:m,web_id:m,abTestVersion:g,session_id:V};return t.channel=1180===w||O?"sg":"va",C&&C.uid&&d.page_name!==S.PageNames.EMBED_V2&&(t.user_id=C.uid),t})),F=k.map((function(e){return{loggerType:_.b.GA,id:e,region:v,user_unique_id:m,web_id:m,bot_type:E||"others",abTestVersion:g,session_id:V}}));return C&&C.uid&&d.page_name!==S.PageNames.EMBED_V2&&(F.user_id=C.uid),[].concat(Object(o.a)($),Object(o.a)(F))},n.googleAnalyticsScript=function(){var e=n.getGaIds();return 0===e.length?null:[A("script",{key:"a",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(e[0])}),A("script",{key:"b",dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag() {\n                    dataLayer.push(arguments);\n                }\n                gtag('js', new Date());\n            "}})]},n.state={initialized:!1},n}return Object(u.a)(f,[{key:"componentDidMount",value:function(){_.c.initialized=!1;var e=this.getLoggerInfo(r.INIT);_.c.init(e),O.Router.events.on("routeChangeStart",this.handleRouterStart),O.Router.events.on("routeChangeComplete",this.handleRouterChange),window.addEventListener("replaceState",this.onUrlChanged),this.mountTea=!0,Object(P.e)("TEST_LOCAL_STORAGE_KEY"),this.setState({initialized:!0})}},{key:"componentDidUpdate",value:function(t,n){if(this._config=e,t.$cookieConsent!==this.props.$cookieConsent||n.initialized!==this.state.initialized){_.c.pause();var a=_.c.getIds().filter((function(e){return e.loggerType===_.b.TEA})),i=this.getLoggerInfo(r.INIT_GA);a.push.apply(a,Object(o.a)(i)),_.c.restart(a)}}},{key:"componentWillUnmount",value:function(){O.Router.events.on("routeChangeStart",this.handleRouterStart),O.Router.events.off("routeChangeComplete",this.handleRouterChange),window.removeEventListener("replaceState",this.onUrlChanged)}},{key:"render",value:function(){var e=this.props;return A(l.a.Fragment,null,A(E.a,null,D(this.googleAnalyticsScript())),A(t,e))}}]),f}(d.PureComponent);return n.displayName="withPageLogger(".concat(Object(C.a)(t),")"),m()(n,t),n}}},"5YB7":function(e,t,n){var r=n("PbJ5");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7osH":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"9fEB":function(e,t,n){"use strict";n("OQL8");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),a=(r=n("GlZI"))&&r.__esModule?r:{default:r},i=n("9rrO"),c=n("bxxT"),u=n("vI6Y");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?a=!1:(p.add(f),r[s]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:l,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}g.rewind=function(){};var h=g;t.default=h},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},GlZI:function(e,t,n){"use strict";var r=n("2LUv"),o=n("fwM5"),a=n("bkNG"),i=(n("0pOA"),n("5YB7")),c=n("Y8Bl"),u=n("7osH");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("mXGw"),p=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},Y8Bl:function(e,t,n){var r=n("pSYS"),o=n("0pOA");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bxxT:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},m1Oa:function(e,t,n){var r=n("z3mR");e.exports=function(e){if(Array.isArray(e))return r(e)}},"mfX+":function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return O}));var r=n("mK0O"),o=n("cBaE"),a=n("kfo7"),i=n("hi5D"),c=n("J2F4"),u=n("ou9M"),s=n("lilA"),f=n("2W1i"),p=n.n(f),d=n("K92R");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){return function(t){var n=t.$appType;return{pageType:e,context:Object(a.c)(e,t),chromeThemeColor:"t"===n?"#161823":"#ffffff"}}}function v(){var e="user";return navigator.userAgent.match(/google/gi)&&(e="search"),e}function m(e,t,n,r){var a=r.seoProps,i=(a=void 0===a?{}:a).testId,c=void 0===i?"":i;return{page_type:e,page_url:location&&location.href,app_name:n?null:t?"musical_wap":"tiktok_wap",utm_campaign:Object(o.g)("utm_campaign"),utm_medium:Object(o.g)("utm_medium"),utm_source:Object(o.g)("utm_source"),share_region:Object(o.g)("region"),iid:Object(o.g)("iid","share_iid"),date:(new Date).toString(),domain_name:location&&location.host||"unknown",user_type_alias:navigator&&v(),language:navigator&&navigator.language||"unknown",seo_ab_version:c}}function _(e,t,n){return{pageId:n?t:"".concat(t,"_h5"),bid:"tiktok_web"}}function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){var r=n.$appType,o=n.$abTestVersion,a=m(e,"m"===r,t,n),u={};if(e===i.PageNames.USER||e===i.PageNames.PROFILE){var f=n.uniqueId,d=n.$user;e=d&&f===d.uniqueId?i.PageNames.PROFILE:i.PageNames.USER;var l=Object(s.a)(o,"OTHERS_FEED_TEST"),h=l.vid,v=l.vidMap,_=p.a.get("others_view_mode");u.view_mode=i.OthersVideoListMode.GRID,e!==i.PageNames.PROFILE&&(_===i.OthersVideoListMode.FEED&&h!==v.V1||_!==i.OthersVideoListMode.GRID&&h===v.V3)&&(u.view_mode=i.OthersVideoListMode.FEED)}return g(g({channels:[c.w.PWA],page_name:e,enter_from:e,routeChangePageView:!0},a),u)}}function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){var r=n.$appType,o="m"===r?"#ffffff":"#000000";return{slardar:_(0,e,t),chromeThemeColor:!t&&o,report:(t&&e===i.PageNames.VIDEO||!t)&&{open:!0},saveRegion:!t&&!0,onDidMount:t?"":function(){n.$downloadLink&&n.$downloadLink.download&&n.$downloadLink.download.visible&&(document.body.dataset.downloadLink=n.$downloadLink.download.channelshare_web)}}}}function O(e){var t;try{var n;t=JSON.parse(null!==(n=Object(d.c)(u.PREVOUS_PAGE_KEY))&&void 0!==n?n:"null")||{}}catch(r){t={}}return location.href!==t.href||e.page_name!==t.pageName?(Object(d.h)(u.PREVOUS_PAGE_KEY,JSON.stringify({href:location.href,pageName:e.page_name,twoPrev:t.pageName,twoPrevHref:t.href})),e.previous_page=t.pageName):e.previous_page=t.twoPrev,e}},"o/EK":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},pWCa:function(e,t,n){e.exports=n("9fEB")},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},a=n("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}}}]);