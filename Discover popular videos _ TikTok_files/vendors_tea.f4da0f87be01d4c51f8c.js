(window["bytedance_secsdk_captcha_jsonp_2.16.22"]=window["bytedance_secsdk_captcha_jsonp_2.16.22"]||[]).push([[3],{434:function(e,t,i){"use strict";i.r(t),i.d(t,"Collector",function(){return ue});var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function r(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var n,r,o=i.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return s}function o(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}var s,a=function(e,t){var i,n,r=function(e){var t=document.createElement("a");return t.href=e,t},o=window.screen.width,s=window.screen.height,a=window.navigator.appVersion,u=window.navigator.userAgent,c=window.navigator.language,h=document.referrer,d=h?r(h).hostname:"",l=function(e){var t=r(e).search;t=t.slice(1);var i={};return t.split("&").forEach(function(e){var t,n,r=e.split("=");r.length&&(t=r[0],n=r[1]);try{i[t]=decodeURIComponent(void 0===n?"":n)}catch(e){i[t]=n}}),i}(window.location.href),p="",f="",_="",g=""+parseFloat(a);-1!==(i=u.indexOf("Opera"))&&(_="Opera",g=u.substring(i+6),-1!==(i=u.indexOf("Version"))&&(g=u.substring(i+8))),-1!==(i=u.indexOf("Edge"))?(_="Microsoft Edge",g=u.substring(i+5)):-1!==(i=u.indexOf("MSIE"))?(_="Microsoft Internet Explorer",g=u.substring(i+5)):-1!==u.indexOf("Chrome")?-1!==(i=u.indexOf("Chrome"))&&(_="Chrome",g=u.substring(i+7)):-1!==u.indexOf("Safari")?-1!==(i=u.indexOf("Safari"))&&(_="Safari",g=u.substring(i+7),-1!==(i=u.indexOf("Version"))&&(g=u.substring(i+8))):-1!==(i=u.indexOf("Firefox"))&&(_="Firefox",g=u.substring(i+8)),-1!==(n=g.indexOf(";"))&&(g=g.substring(0,n)),-1!==(n=g.indexOf(" "))&&(g=g.substring(0,n)),-1!==(n=g.indexOf(")"))&&(g=g.substring(0,n));for(var v,m,y=/Mobile|htc|mini|Android|iP(ad|od|hone)/.test(a)?"wap":"web",b=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Android",r:/Android/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}],w=0;w<b.length;w++){var S=b[w];if(S.r.test(u)){p=S.s;break}}function k(e,t){var i=e.exec(t);return i&&i[1]?i[1]:""}switch(/Windows/.test(p)&&(f=k(/Windows (.*)/,p),p="windows"),p){case"Mac OS X":f=k(/Mac OS X (10[\.\_\d]+)/,u),p="mac";break;case"Android":(m=k(/Android ([\.\_\d]+)/,v=u))||(m=k(/Android\/([\.\_\d]+)/,v)),f=m,p="android";break;case"iOS":f=(f=/OS (\d+)_(\d+)_?(\d+)?/.exec(a))?f[1]+"."+f[2]+"."+(0|f[3]):"",p="ios"}var I=e?function(){var e=t?"_tea_utm_cache_"+t:"_tea_utm_cache",i={},n={utm_source:l.utm_source,utm_medium:l.utm_medium,utm_campaign:l.utm_campaign,utm_term:l.utm_term,utm_content:l.utm_content};try{var r=window.sessionStorage,o=!1;for(var s in n)n[s]&&(i[s]=n[s],o=!0);if(o)r.setItem(e,JSON.stringify(i));else{var a=r.getItem(e);a&&(i=JSON.parse(a))}}catch(e){return n}return i}():{};return{browser:_,browser_version:g,platform:y,os_name:p,os_version:f,userAgent:u,screen_width:o,screen_height:s,device_model:function(e){var t="";try{if("android"===e)navigator.userAgent.split(";").forEach(function(e){e.indexOf("Build/")>-1&&(t=e.slice(0,e.indexOf("Build/")))});else if("ios"===e||"mac"===e){var i=navigator.userAgent.replace("Mozilla/5.0 (",""),n=i.indexOf(";");t=i.slice(0,n)}}catch(e){}return t.trim()}(p),language:c,referrer:h,referrer_host:d,utm_source:I.utm_source,utm_medium:I.utm_medium,utm_campaign:I.utm_campaign,utm_term:I.utm_term,utm_content:I.utm_content,isSupportBeacon:("ios"!==p||"safari"!==_)&&(!(!window.navigator||!window.navigator.sendBeacon)||void 0)}},u=(function(e,t){var i;i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var n in i)t[n]=i[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function i(n){function r(){}function o(t,i,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var s=JSON.stringify(i);/^[\{\[]/.test(s)&&(i=s)}catch(e){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in o)o[u]&&(a+="; "+u,!0!==o[u]&&(a+="="+o[u].split(";")[0]));return document.cookie=t+"="+i+a}}function s(e,i){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),u=a.slice(1).join("=");i||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var c=t(a[0]);if(u=(n.read||n)(u,c)||t(u),i)try{u=JSON.parse(u)}catch(e){}if(r[c]=u,e===c)break}catch(e){}}return e?r[e]:r}}return r.set=o,r.get=function(e){return s(e,!1)},r.getJSON=function(e){return s(e,!0)},r.remove=function(t,i){o(t,"",e(i,{expires:-1}))},r.defaults={},r.withConverter=i,r}(function(){})},e.exports=i()}(s={exports:{}}),s.exports),c=function(){function e(){this.cache={}}return e.prototype.setItem=function(e,t){this.cache[e]=t},e.prototype.getItem=function(e){return this.cache[e]},e.prototype.removeItem=function(e){this.cache[e]=void 0},e}(),h={getItem:function(e){try{var t=localStorage.getItem(e),i=t;try{t&&"string"==typeof t&&(i=JSON.parse(t))}catch(e){}return i||void 0}catch(e){}},setItem:function(e,t){try{var i="string"==typeof t?t:JSON.stringify(t);localStorage.setItem(e,i)}catch(e){}},removeItem:function(e){try{localStorage.removeItem(e)}catch(e){}},getCookie:function(e){try{var t=document.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)")),i=t?t[1]:"";return decodeURIComponent(i)}catch(e){return""}},setCookie:function(e,t,i){try{var n=+new Date+i;u.set(e,t,{expires:new Date(n),path:"/",domain:document.domain.split(".").slice(-2).join(".")})}catch(e){}},isSupportLS:function(){try{return localStorage.setItem("_ranger-test-key","hi"),localStorage.getItem("_ranger-test-key"),localStorage.removeItem("_ranger-test-key"),!0}catch(e){return!1}}()},d=function(){function e(e){this._storage=!e&&h.isSupportLS?h:new c}return e.prototype.getItem=function(e){return this._storage.getItem(e)},e.prototype.setItem=function(e,t){this._storage.setItem(e,t)},e.prototype.getCookie=function(e){return this._storage.getCookie(e)},e.prototype.setCookie=function(e,t,i){this._storage.setCookie(e,t,i)},e.prototype.removeItem=function(e){this._storage.removeItem(e)},e}(),l={sg:"1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z21z1ez4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",va:"1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",in:"1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z49z23z21z1cz18z21z22z4ez18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k"},p="/v1/user/webid",f="/v1/list",_=4001,g=4e3,v=4002,m=4003,y=500,b=function(e,t){return t?"__tea_cache_tokens_"+e:"__tea_cache_events_"+e},w=function(){if("undefined"!=typeof window)return window.TeaAnalyticsObject},S=function(e,t,i,n){try{var r,o=e.match(/\/v\d\//);r=o?o[0]:-1!==e.indexOf("/v1/")?"/v1/":"/v2/";var s=e.split(r)[0];if(!s)return void n(e,t,_);t.forEach(function(r){var o=function(e){var t="";for(var i in e)e.hasOwnProperty(i)&&void 0!==e[i]&&(t+="&"+i+"="+encodeURIComponent(JSON.stringify(e[i])));return"&"===t[0]?t.slice(1):t}(r),a=new Image(1,1);a.onload=function(){a=null,i&&i()},a.onerror=function(){a=null,n&&n(e,t,g)},a.src=s+"/v1/gif?"+o})}catch(i){n&&n(e,t,v,i.message)}},k=function(e,t,i,n,r,o,s,u){var c=window.navigator.userAgent,h=-1!==window.navigator.appName.indexOf("Microsoft Internet Explorer")&&(-1!==c.indexOf("MSIE 8.0")||-1!==c.indexOf("MSIE 9.0")),d=!!i;if(!d&&h)S(e,t,n,r);else if(!d&&s)return a(!1).isSupportBeacon?(u&&u(),void(window.navigator.sendBeacon(e,JSON.stringify(t))?n():r(e,t,m))):void S(e,t,n,r);o&&delete t.app_key,function(e,t,i,n,r,o,s){var a=new XMLHttpRequest;a.open("POST",""+e,!0),a.setRequestHeader("Content-Type","application/json; charset=utf-8"),r&&a.setRequestHeader("X-MCS-AppKey",""+r),a.onload=function(){if(i){var e=null;if(a.responseText){try{e=JSON.parse(a.responseText)}catch(t){e={}}i(e)}}},a.onerror=function(){a.abort(),n&&n(t,y)},a.send(JSON.stringify(t))}(e,t,n,r,i)};function I(e){return e?(e^16*Math.random()>>e/4).toString(10):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,I)}var O=function(){return I().replace(/-/g,"").slice(0,19)},x=function(e){return function(e,t,i){if("string"==typeof e&&"number"==typeof i){var n,r=[];i=i<=25?i:i%25;var o=String.fromCharCode(i+97);n=e.split(o);for(var s=0;s<n.length;s++){var a=parseInt(n[s],i);a=1*a^64;var u=String.fromCharCode(a);r.push(u)}return r.join("")}}(e,0,25)},z=function(){function e(e,t){this.browser=a(!0,e.app_id),this.config=e,this.cfg=t,this.storage=new d(!1),this.appInfo=e.app_key||e.app_id,this.isNoWebid=e.disable_webid,this.domain=e.channel_domain||x(l[e.channel]),this.tokenReady=!1,this.checkExp=e.checkExp||!1,this.enableCookie=e.cross_subdomain||!1,this.expiresTime=this.enableCookie?94608e6:0,this.fetchUrl=""+this.domain+p}return e.prototype._getToken=function(){this.tokensKey=b(this.appInfo,!0),this.cookieKey="__tea_cookie_tokens_"+this.appInfo;var e=this.storage.getItem(this.tokensKey);if(this.enableCookie){var t=this.storage.getCookie(this.cookieKey);if(t){t=decodeURIComponent(t);var i=(t=JSON.parse(t)).user_unique_id,n=t.web_id,r=t.timestamp;this._setToken(n,i,r)}else{if(!e)return void this._requestWebId();this.storage.setCookie(this.cookieKey,encodeURIComponent(JSON.stringify(e)),this.expiresTime),this._checkLocal(e)}}else this._checkLocal(e)},e.prototype._checkLocal=function(e){if(e){var t=e.user_unique_id,i=e.web_id,n=e.timestamp;i&&t?this._setToken(i,t,n):this._requestWebId()}else this._requestWebId()},e.prototype._setToken=function(e,t,i){Date.now()-parseFloat(i)>7344e6?this._requestWebId():this._complete(e,t)},e.prototype._complete=function(e,t){this.cfg.envInfo.user.web_id=e,this.cfg.envInfo.user.user_unique_id=t,this.tokenReady=!0},e.prototype._requestWebId=function(){this.isNoWebid?this._setwebId({web_id:O()}):this._fetchWebId(this.fetchUrl)},e.prototype._fetchWebId=function(e){var t=this;k(e,{app_key:this.config.app_key,app_id:this.config.app_id,url:location.href,user_agent:this.browser.userAgent,referer:this.browser.referrer,user_unique_id:""},this.config.app_key,function(e){e&&0===e.e?(t._setwebId(e),t.callback&&t.callback()):console.log("get webid error, please retry later~")},function(){},!0)},e.prototype._setwebId=function(e){var t=this.cfg.envInfo.user.web_id||e.web_id,i={web_id:t,user_unique_id:this.cfg.envInfo.user.user_unique_id||t,timestamp:Date.now()};this.enableCookie&&this.storage.setCookie(this.cookieKey,encodeURIComponent(JSON.stringify(i)),this.expiresTime),this.storage.setItem(this.tokensKey,i),this.cfg.envInfo.user.web_id=t,this.cfg.envInfo.user.user_unique_id=this.cfg.envInfo.user.user_unique_id||t,this.tokenReady=!0},e.prototype._updateUuid=function(e){var t=this.storage.getItem(this.tokensKey);t&&t.user_unique_id&&t.user_unique_id!==e&&(t.user_unique_id=e,this.storage.setItem(this.tokensKey,t))},e.prototype.isTokenReady=function(){return this.tokenReady},e}(),T=function(e,t,i){void 0===e&&(e=[]),void 0===t&&(t=function(e){return e}),void 0===i&&(i=20);var n,r=[],o=0;return e.forEach(function(e){var s=t(e);void 0===n?n=s:(s!==n||r[o].length>=i)&&(o+=1,n=s),r[o]=r[o]||[],r[o].push(e)}),r},E=function(){function e(e,t,i,n,r){this.collect=e,this.cfg=i,this.config=t,this._token=n,this.appInfo=t.app_key||t.app_id,this.debugMode=!!t.log,this.evtDataKey=b(this.appInfo,!1);var o=t.channel_domain||x(l[t.channel]);this.reportUrl=t.report_url?t.report_url:""+o+f,this.storage=new d(!0),this.EventStorage=new d(!1),this.maxStorage=t.max_storage_num||-1,this.maxReport=t.max_report||20;var s=t.enable_storage,a=t.disable_storage;this.closeStorage=!0,(s||!1===a)&&(this.closeStorage=!1),this.plugin=r,this.addListener()}return e.prototype.addListener=function(){var e=this;window.addEventListener("unload",function(){e.report(!0)},!1),window.addEventListener("beforeunload",function(){e.report(!0)},!1),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&e.report(!0)},!1)},e.prototype.setReady=function(){this.isReady=!0,this.closeStorage||this.checkStorageEvent(),this.report()},e.prototype.event=function(e,t){var i=this;void 0===e&&(e=[]),void 0===t&&(t=!1);var n=this.storage.getItem(this.evtDataKey)||[],r=t?o(e,n):o(n,e);this.storage.setItem(this.evtDataKey,r),this.reportTimer&&clearTimeout(this.reportTimer),r.length>=this.maxReport?this.report():this.reportTimer=setTimeout(function(){i.report(),i.reportTimer=null},30)},e.prototype.report=function(e){if(void 0===e&&(e=!1),!this.collect.destroyInstance&&this._token.isTokenReady()&&this.isReady){var t=this.storage.getItem(this.evtDataKey)||[],i=this._mergeEvents(t);this.storage.removeItem(this.evtDataKey),this._dealData(i,e)}},e.prototype._mergeEvents=function(e){var t=this;if(!e.length)return e;var i=this.cfg.get();return i.header.custom=JSON.stringify(i.header.custom),T(e,function(e){return!t.closeStorage&&!!e.params.__disable_storage__},this.maxReport).map(function(e){return n({events:e.map(function(e){var i=n({},t.cfg.get("evtParams"),e.params);return delete i.__disable_storage__,n({},e,{params:JSON.stringify(i)})}),user:i.user,header:i.header,verbose:t.debugMode?1:void 0},t.closeStorage?{}:{__disable_storage__:e[0].params.__disable_storage__})})},e.prototype._dealData=function(e,t){var i=this;if(!e.length)return e;var n=[];n=T(e,function(e){return!!e.__disable_storage__},this.maxReport),this.closeStorage||this.plugin.maxStorage&&this.plugin.maxStorage(n,this.maxStorage,this.evtDataKey,this.storage);var r={};n.forEach(function(e){var n=O();if(!i.closeStorage&&!e[0].__disable_storage__){var o=JSON.parse(JSON.stringify(e));o&&o[0]&&(o[0].header.__storage_index__=Date.now()),r[n]=o,i.EventStorage.setItem(i.evtDataKey,r)}i._send(n,e,t)})},e.prototype._send=function(e,t,i){var n=this;this.isSending=!0;var r=function(){n.isSending=!1};if(!this.closeStorage)try{t&&t[0]&&t[0].header.__storage_index__&&delete(t=JSON.parse(JSON.stringify(t)))[0].header.__storage_index__}catch(e){}this.plugin&&this.plugin.et_test&&this.plugin.et_test.send(t),k(this.reportUrl,t,this.config.app_key,function(){r();var t=n.EventStorage.getItem(n.evtDataKey)||{};Object.keys(t).length?(delete t[e],n.EventStorage.setItem(n.evtDataKey,t)):n.EventStorage.removeItem(n.evtDataKey)},function(e,t){r(),n.cfg.get("reportErrorCallback")(e,t),n.plugin&&n.plugin.monitor&&n.plugin.monitor.sdkError(n.config.app_key,n.reportUrl,e,t)},!1,i,r),this.plugin&&this.plugin.monitor&&this.plugin.monitor.sdkOnload(this.config.app_key,this.reportUrl,t)},e.prototype.checkStorageEvent=function(){var e=this;try{var t=this.EventStorage.getItem(this.evtDataKey)||{},i=Object.keys(t);i.length>0&&setTimeout(function n(){for(var r=[],o=0;o<e.maxReport;o++)i.length>0&&r.push(i.shift());r.length>0&&r.forEach(function(i){e._send(i,t[i],!1)}),setTimeout(n,5)},5)}catch(e){}},e}(),C=void 0,D=(new Date).getTimezoneOffset(),N=parseInt(""+-D/60,10),q=60*D,P="4.1.23",R=function(){function e(e,t){var i=a(!0,e);this.initConfig=t,this.envInfo={user:{user_unique_id:C,user_type:C,user_id:C,user_is_auth:C,user_is_login:C,device_id:C,web_id:C,ip_addr_id:C},header:{app_id:C,app_name:C,app_install_id:C,install_id:C,app_package:C,app_channel:C,app_version:C,os_name:i.os_name,os_version:i.os_version,device_model:i.device_model,ab_client:C,ab_version:C,ab_sdk_version:C,traffic_type:C,client_ip:C,device_brand:C,os_api:C,access:C,language:i.language,region:C,app_language:C,app_region:C,creative_id:C,ad_id:C,campaign_id:C,log_type:C,rnd:C,platform:i.platform,sdk_version:P,province:C,city:C,timezone:N,tz_offset:q,tz_name:C,sim_region:C,carrier:C,resolution:i.screen_width+"x"+i.screen_height,browser:i.browser,browser_version:i.browser_version,referrer:i.referrer,referrer_host:i.referrer_host,width:i.screen_width,height:i.screen_height,screen_width:i.screen_width,screen_height:i.screen_height,utm_term:i.utm_term,utm_content:i.utm_content,utm_source:i.utm_source,utm_medium:i.utm_medium,utm_campaign:i.utm_campaign,custom:{}}},this.evtParams={},this.reportErrorCallback=function(){}}return e.prototype.set=function(e,t){var i=this;if("disable_auto_pv"!==e)if("evtParams"===e||"_staging_flag"===e){var r;r="evtParams"===e?t:{_staging_flag:Number(t)};var o=n({},r);Object.keys(o).forEach(function(e){i.evtParams[e]=o[e]})}else if("reportErrorCallback"===e&&"function"==typeof t)this.reportErrorCallback=t;else{var s="";if(e.indexOf(".")>-1){var a=e.split(".");s=a[0],e=a[1]}if("user_unique_id"===e){if(!t||"string"!=typeof t)return void console.warn("user_unique_id must be string");if(-1!==["0","Null","None","","undefined"].indexOf(t))return}if("os_version"===e&&(e=""+t),"web_id"===e){if(!t)return;(!this.envInfo.user.user_unique_id||this.envInfo.user.user_unique_id&&this.envInfo.user.user_unique_id===this.envInfo.user.web_id)&&(this.envInfo.user.user_unique_id=t)}s?"user"===s||"header"===s?this.envInfo[s][e]=t:this.envInfo.header.custom[e]=t:this.envInfo.user.hasOwnProperty(e)?["user_type","ip_addr_id"].indexOf(e)>-1?this.envInfo.user[e]=Number(t):["user_id","web_id","user_unique_id"].indexOf(e)>-1?this.envInfo.user[e]=String(t):["user_is_auth","user_is_login"].indexOf(e)>-1?this.envInfo.user[e]=Boolean(t):"device_id"===e&&(this.envInfo.user[e]=Number(t)):this.envInfo.header.hasOwnProperty(e)?this.envInfo.header[e]=t:this.envInfo.header.custom[e]=t}},e.prototype.get=function(e){return e?"evtParams"===e?this.evtParams:"reportErrorCallback"===e?this.reportErrorCallback:JSON.parse(JSON.stringify(this.envInfo[e])):JSON.parse(JSON.stringify(this.envInfo))},e}();function A(e,t,i){return{title:t||document.title||location.pathname,url:i||location.href,url_path:e||location.pathname}}function J(){return Date.now()}function L(){var e=w();return window[e]?window[e].l:J()}function M(){var e=!1;return["hidden","msHidden","webkitHidden"].forEach(function(t){void 0!==document[t]&&(e=!0)}),e}var U,j=function(e){navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?window.addEventListener("pagehide",e,!1):window.addEventListener("beforeunload",e,!1)},W=function(){function e(e,t){var i=this;this._sendEvent=function(e){void 0===e&&(e=!1);var t=e?i.options.aliveDTime:J()-i.sessionStartTime;J()-i.pageStartTime>i.options.maxDuration||(i.event("predefine_page_alive",n({},A(i.url_path,i.title,i.url),{duration:t,is_support_visibility_change:i.options.sup_vis_change?1:0})),i.sessionStartTime=J())},this._setUpTimer=function(){return i.timerHandler&&clearInterval(i.timerHandler),setInterval(function(){J()-i.sessionStartTime>i.options.aliveDTime&&i._sendEvent(!0)},1e3)},this._visibilitychange=function(){"hidden"===document.visibilityState?i.timerHandler&&(clearInterval(i.timerHandler),i._sendEvent()):"visible"===document.visibilityState&&(i.sessionStartTime=J(),i.timerHandler=i._setUpTimer())},this._beforeunload=function(){document.hidden||i._sendEvent()},this._wtest=function(){document.getElementById("wtest").innerHTML="visibilitychange"},this._dtest=function(){document.getElementById("dtest").innerHTML="dvisibilitychange"},this.event=e,this.config=t,this.isSupVisChange=M(),this.options={maxDuration:432e5,aliveDTime:6e4,sup_vis_change:M()},this.pageStartTime=L(),this.sessionStartTime=this.pageStartTime,this.timerHandler=null,this.disableCallback=function(){}}return e.prototype.enable=function(e,t,i){this.url_path=e,this.url=i,this.title=t,this.disableCallback=this._enablePageAlive()},e.prototype.disable=function(){this.disableCallback(),this.pageStartTime=Date.now()},e.prototype._enablePageAlive=function(){var e=this;return this.timerHandler=this._setUpTimer(),document.addEventListener("visibilitychange",this._visibilitychange),j(this._beforeunload),function(){e._beforeunload(),document.removeEventListener("visibilitychange",e._visibilitychange),window.removeEventListener("beforeunload",e._beforeunload),window.removeEventListener("pagehide",e._beforeunload)}},e}(),K=function(){function e(e,t){var i=this;this._visibilitychange=function(){"hidden"===document.visibilityState?i.activeEndTime=J():"visible"===document.visibilityState&&(i.activeEndTime&&(i.totalTime+=i.activeEndTime-i.activeStartTime,i.activeTimes+=1),i.activeEndTime=void 0,i.activeStartTime=J())},this._beforeunload=function(){i.totalTime+=(i.activeEndTime||J())-i.activeStartTime,i._sendEventPageClose()},this.event=e,this.config=t,this.isSupVisChange=M(),this.options={sup_vis_change:this.isSupVisChange},this.maxDuration=t.maxDuration||864e5,this.disableCallback=function(){},this.pageStartTime=L(),this._resetData()}return e.prototype.enable=function(e,t,i){this.url_path=e,this.url=i,this.title=t,this.disableCallback=this._enablePageClose()},e.prototype.disable=function(){this.disableCallback()},e.prototype._resetData=function(){this.activeStartTime=void 0===this.activeStartTime?L():Date.now(),this.activeEndTime=void 0,this.activeTimes=1,this.totalTime=0},e.prototype._sendEventPageClose=function(){var e=J()-this.pageStartTime;this.totalTime>=this.maxDuration||(this.event("predefine_page_close",n({},A(this.url_path,this.title,this.url),{active_times:this.activeTimes,duration:this.totalTime,total_duration:e,is_support_visibility_change:this.options.sup_vis_change?1:0})),this.pageStartTime=Date.now(),this._resetData())},e.prototype._enablePageClose=function(){var e=this;return document.addEventListener("visibilitychange",this._visibilitychange),j(this._beforeunload),function(){e._beforeunload(),document.removeEventListener("visibilitychange",e._visibilitychange),window.removeEventListener("beforeunload",e._beforeunload),window.removeEventListener("pagehide",e._beforeunload)}},e}(),V=function(){function e(e,t){this.pageAlive=new W(e,t),this.pageClose=new K(e,t),this._enable()}return e.prototype._enable=function(e,t,i){this.pageAlive.enable(e,t,i),this.pageClose.enable(e,t,i)},e.prototype._disable=function(){this.pageAlive.disable(),this.pageClose.disable()},e.prototype.reset=function(e,t,i){this._disable(),this._enable(e,t,i)},e}(),H=function(){function e(e){var t=this;this._setInterval=function(){t._clearIntervalFunc=function(e,t){void 0===e&&(e=function(){}),void 0===t&&(t=1e3);var i,n=Date.now()+t;return i=window.setTimeout(function r(){var o=Date.now()-n;e(),n+=t,i=window.setTimeout(r,Math.max(0,t-o))},t),function(){window.clearTimeout(i)}}(function(){t._isSessionhasEvent&&t._endCurrentSession()},t.sessionInterval)},this._clearInterval=function(){t._clearIntervalFunc&&t._clearIntervalFunc()},this.sessionInterval=6e4,this._eventSenderFunc=e,this._startTime=0,this._lastTime=0,this._setInterval()}return e.prototype._endCurrentSession=function(){this._eventSenderFunc("_be_active",{start_time:this._startTime,end_time:this._lastTime,url:window.location.href,referrer:window.document.referrer}),this._isSessionhasEvent=!1,this._startTime=0},e.prototype.process=function(){this._isSessionhasEvent||(this._isSessionhasEvent=!0,this._startTime=+new Date);var e=this._lastTime||+new Date;this._lastTime=+new Date,this._lastTime-e>this.sessionInterval&&(this._clearInterval(),this._endCurrentSession(),this._setInterval())},e}(),B=function(){function e(){}return e.prototype.sdkOnload=function(e,t,i){if(!this.sdkReady){this.sdkReady=!0;try{if(0===i.length)return;var n=i[0],r=n.header,o=n.user,s=r.app_id,a=r.app_name,u=r.sdk_version,c=o.web_id,h={events:[{event:"onload",params:JSON.stringify({app_key:e,app_id:s,app_name:a||"",sdk_version:u}),local_time_ms:Date.now()}],user:{user_unique_id:c},header:{}};setTimeout(function(){k(t,[h],"566f58151b0ed37e")},16)}catch(e){}}},e.prototype.sdkError=function(e,t,i,n){try{var r=i[0],o=r.user,s=r.header,a=[];i.forEach(function(e){e.events.forEach(function(e){a.push(e)})});var u={events:a.map(function(t){return{event:"on_error",params:JSON.stringify({error_code:n,app_key:e,app_id:s.app_id,app_name:s.app_name||"",error_event:t.event,local_time_ms:t.local_time_ms,tea_event_index:Date.now(),params:t.params,header:JSON.stringify(s),user:JSON.stringify(o)}),local_time_ms:Date.now()}}),user:{user_unique_id:o.user_unique_id},header:{}};setTimeout(function(){k(t,[u],"566f58151b0ed37e")},16)}catch(e){}},e}(),F=function(e,t,i,n){if(t){var r=e.filter(function(e){return!e[0].__disable_storage__}).length;if(r>0)try{var o=n.getItem(i);if(o){var s=Object.keys(o),a=s.length+r-t;if(a>0){for(var u=s.map(function(e){var t=o[e];return{id:e,index:t&&t[0]?t[0].header.__storage_index__:+new Date}}).sort(function(e,t){return e.index-t.index}),c=0;c<a;c++){var h=u.shift();h&&h.id&&o[h.id]&&delete o[h.id]}n.setItem(i,o)}}}catch(e){}}},Q=function(e,t,i){t&&(t.enable_stay_duration&&(this.stay=new V(i,t)),t.disable_session||(this.session=new H(i)),t.disable_sdk_monitor||(this.monitor=new B),t.max_storage_num&&(this.maxStorage=F))},X=function(){function e(e,t){this.isLog=t,this.name=e||""}var t=e.prototype;return t.info=function(e){this.isLog&&console.log(this.name+" "+e)},t.warn=function(e){this.isLog&&console.warn(this.name+" "+e)},t.error=function(e){this.isLog&&console.error(this.name+" "+e)},t.throw=function(e){throw this.error(this.name),new Error(e)},e}(),Z=["getVar","openOverlayer","closeOverlayer","getAllVars","getToken"],G=o(["init","config","send","start","predefinePageView","resetStayDuration"],Z),Y=(U=+Date.now()+Number((""+Math.random()).slice(2,8)),function(){return U+=1}),$=function(){function e(e){var t=this;this.predefinePageView=function(e){void 0===e&&(e={});var i=n({title:document.title||location.pathname,url:location.href,url_path:location.pathname,time:Date.now(),referrer:window.document.referrer},t._event.closeStorage?{}:{__disable_storage__:1}),r=n({},i,e);t.event("predefine_pageview",r,!0)},this.getToken=function(e){var i;t._token.isTokenReady()&&(i=t._config.get().user,e(n({},i)))},this.name=e,this._isSend=!1,this.autoPV=!0}return e.prototype.init=function(e){var t=this;if(!this._inited){if(this._inited=!0,!e||"object"!=typeof e)throw new Error("init params is error, please check");var i=e.app_id,n=e.app_key,r=e.log;this._config=new R(i,e),this.logger=new X(this.name,r),n||i||this.logger.throw("no app_key or app_id "),i&&"number"!=typeof i&&this.logger.throw("app_id param is error, must be number, please check "),n&&"string"!=typeof n&&this.logger.warn("app_key is empty, please check"),e.channel_domain||-1!==["sg","va","in"].indexOf(e.channel)||this.logger.throw("channel must be  `sg`,`va`,`in`"),this._config.set("app_id",i),this._initConfig=e,this._token=new z(e,this._config),this._token.callback=function(){t.callbackSend?t.start():t._event&&t._event.report()},this.plugin=new Q(this,e,this.event.bind(this)),this._event=new E(this,e,this._config,this._token,this.plugin),this._token._getToken()}},e.prototype.config=function(e){if(this._inited)if(e&&"object"==typeof e){if(e.user_unique_id){"string"!=typeof e.user_unique_id&&this.logger.warn("user_unique_id must be string!!! please check");try{var t=String(e.user_unique_id);this._token._updateUuid(t)}catch(e){}}for(var i in e.disable_auto_pv&&(this.autoPV=!1),e)this._config.set(i,e[i])}else this.logger.warn("config params is error, please check");else this.logger.warn("config must be use after function init")},e.prototype.send=function(){this.start()},e.prototype.start=function(){if(this._token.isTokenReady()){if(this._isSend)return;this._isSend=!0,this.logger.info("userInfo: "+JSON.stringify(this._config.get("user"))),this._event.setReady(),this.autoPV&&this.predefinePageView(),this.plugin&&this.plugin.profile&&this.plugin.profile.start(),this.plugin&&this.plugin.ab&&this.plugin.ab.init(this._config.get())}else this.callbackSend=!0},e.prototype.event=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var n="boolean"==typeof t[t.length-1]&&t[t.length-1],s="boolean"==typeof t[t.length-1]?t.slice(0,t.length-1):t,a=r(s,1)[0],u=[];"Array"!==Object.prototype.toString.call(a).slice(8,-1)?u[0]=s:u=s;this._initConfig.autotrack;u=u.map(function(e){return function(e,t,i){var n=e;/^event\./.test(e)&&(n=e.slice(6));var r=t;return"object"!=typeof r&&(r={}),r.event_index=Y(),{event:n,params:r,local_time_ms:+new Date,is_bav:0}}(e[0],e[1])}),this._event.event(u,n),this.plugin&&this.plugin.session&&(e=this.plugin.session).process.apply(e,o(t))},e.prototype.resetStayDuration=function(e,t,i){!this.plugin||this.plugin.stay?this.plugin&&this.plugin.stay&&this.plugin.stay.reset(e,t,i):this.logger.info("stayDuration is not init")},e.prototype.getVar=function(e,t,i){this.plugin&&this.plugin.ab&&this.plugin.ab.getVar(e,t,i)},e.prototype.openOverlayer=function(){this.plugin&&this.plugin.ab&&this.plugin.ab.openOverlayer()},e.prototype.closeOverlayer=function(){this.plugin&&this.plugin.ab&&this.plugin.ab.closeOverlayer()},e.prototype.getAllVars=function(e){this.plugin&&this.plugin.ab&&this.plugin.ab.getAllVars(e)},e}();function ee(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var te=function(e){var t=this;return ee(this,"_exportCollect",function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];t._isProcess?t._executeCmd.apply(t,i):(t.cmdQueue.push(i),t._processCmd())}),ee(this,"_processCmd",function(){if(0!==t.cmdQueue.length){var e,i,n=(e=t.cmdQueue,"init","0",i=-1,e.forEach(function(e,t){"init"===e[0]&&(i=t)}),i);if(-1!==n){t._isProcess=!0;var r=t.cmdQueue[n][1];if(r&&r.alias){var o=r.alias,s=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(r,["alias"]);t._alias=Object.keys(o).reduce(function(e,t){var i=o[t];return i&&Z.includes(t)&&(e[i]=t),e},{}),t.cmdQueue[n][1]=Object.assign({},s||{})}t._executeCmd.apply(t,t.cmdQueue[n]),t.cmdQueue.forEach(function(e,i){i!==n&&t._executeCmd.apply(t,e)}),t.cmdQueue=[]}}}),ee(this,"_executeCmd",function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];var r,o,s=i[0];t._alias[s]&&(s=t._alias[s]),G.indexOf(s)>-1?(r=t.colloctor)[s].apply(r,i.slice(1)):(o=t.colloctor).event.apply(o,i)}),this.cmdQueue=[],this.name=e,this.colloctor=new $(e),this._isProcess=!1,this._alias={},this._processCmd(),G.forEach(function(e){t._exportCollect[e]=t._exportCollect.bind(t,e)}),this._exportCollect},ie={},ne={},re=function(e){return ne[e]||(ne[e]=[]),ne[e]},oe=function(e){try{var t=r(e),i=t[0],n=t.slice(1);if(!i)return void console.error("the eventname is: "+i+", error, stop report, please check");var s=i.split(".");if(1===s.length)re("default").push(o([i],n));else if(2===s.length)"event"===s[0]?re("default").push(o([i],n)):re(s[0]).push(o([s[1]],n));else{var a=s[0],u=[s[1],s[2]].join(".");re(a).push(o([u],n))}}catch(e){console.log(""+JSON.stringify(e))}},se=function(){ae.q.forEach(function(e){var t=[].slice.call(e);"Array"===Object.prototype.toString.call(t[0]).slice(8,-1)?t.forEach(function(e){oe(e)}):oe(t)}),Object.keys(ne).forEach(function(e){ne[e].forEach(function(t){(function(e){return ie[e]||(ie[e]=new te(e)),ie[e]})(e).apply(void 0,o(t))}),ne[e]=[]}),ae.q=[]},ae=function e(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];e.q.push(t),se()};ae.q=[],ae.l=Date.now(),ae._instanceMap=ie,ae._instanceCmdMap=ne,G.forEach(function(e){ae[e]=ae.bind(null,e)}),function(e){if("undefined"!=typeof window){var t=w();if(t&&window[t]){var i=window[t];i.init||(e.q=i.q||[],e.l=i.l||Date.now(),window[t]=e)}}}(ae),se();var ue=te;t.default=ae}}]);