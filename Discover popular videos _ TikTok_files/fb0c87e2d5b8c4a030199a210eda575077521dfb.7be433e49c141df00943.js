(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{svF6:function(e,t,n){"use strict";n.d(t,"o",(function(){return s})),n.d(t,"n",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return y})),n.d(t,"g",(function(){return g})),n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return M})),n.d(t,"q",(function(){return Y})),n.d(t,"r",(function(){return x})),n.d(t,"i",(function(){return j})),n.d(t,"p",(function(){return O})),n.d(t,"f",(function(){return D})),n.d(t,"j",(function(){return _})),n.d(t,"e",(function(){return k})),n.d(t,"c",(function(){return E})),n.d(t,"m",(function(){return A})),n.d(t,"l",(function(){return V})),n.d(t,"d",(function(){return U}));var r=n("NthX"),o=n.n(r),a=n("eijD"),i=n("6CzD"),u=n("jTUD"),c=n.n(u),l=n("Kv1s"),f=n.n(l),v=n("9bu8");c.a.extend(f.a);var s=function(e){return"undefined"===typeof e||null===e};function d(e){var t=e.split(" ");return 1===t.length?e:[Object(v.c)(t[0])].concat(Object(i.a)(t.slice(1))).join(" ")}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()(),n=t.subtract(e,"day").year(),r=!1,o=5,a=new Array(e).fill(null).map((function(a,i){var u=t.subtract(e-i,"day");return e>=28&&(e-1-i)%o!==0?"":n===u.year()||r?d(u.format("MMM DD")):(r=!0,d(u.format("MMM DD, YYYY")))}));return a}function b(e,t,n){return new Array(e).fill(null).map((function(r,o){return d(t.subtract(e-o,"day").format(n))}))}function p(e){return e>12?"".concat(e-12,"pm"):12===e?"12pm":0===e?"12am":"".concat(e,"am")}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM DD, YYYY";if(e&&e.length){var r=c()(),o=Object(i.a)(e),a=0;0!==o[o.length-1].status?(o=o.slice(0,o.length-1),r=r.subtract(1,"day")):(o=o.slice(1),a=1);var u=h(o.length,r),l=b(o.length,r,n);if(!t)return o.map((function(e,t){return{x:u[t],y:e.value,fullDay:l[t],index:a+t}}));var f=Array(0);return o.forEach((function(e,n){Array(t).fill(0).forEach((function(t,r){var o=e.value instanceof Array&&!s(e.value[r])?e.value[r]:null;f.push({x:10===r?u[n]:"",y:o,fullDay:l[n],time:p(r)})}))})),f}}var y=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s(e))return"--";if("string"===typeof e)return e;var n=y(Number(e));return t&&e>=0?"+".concat(n):n}var w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s(e))return"";var n=e>=0&&t?"+":"",r=Number(Number(e).toFixed(1)),o="";return e>9999&&e<=999949?(r=(r/1e3).toFixed(1),o="K"):e>999949&&(r=(r/1e6).toFixed(1),o="M"),"".concat(n).concat(y(r)).concat(o)};function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:13,n=document.createElement("canvas"),r=n.getContext("2d");if(!r)return t*e.length;r.font="".concat(t,"px proxima-regular");var o=r.measureText(e),a=o.width;return a}function Y(e,t){return e.reduce((function(e,n){return t(e)>t(n)?e:n}),e&&e[0])}function x(e){var t=document.createElement("canvas").getContext("2d");return t?(t.font="15px proxima-regular",Y(e,(function(e){return t.measureText(e).width}))):""}function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=3,r=Math.max.apply(Math,Object(i.a)(e.filter((function(e){return!s(e)})))),o=0,a=r/n;a<=0&&(a=1);var u=(n+1)*a;return t&&r>0&&(r-(o=Math.min.apply(Math,Object(i.a)(e.filter((function(e){return!s(e)})))))<n&&(o=r-n),u=(n+1)*(a=(r-o)/n)+o),{interval:a,max:u,min:o}}function O(e){return e&&0===e.status&&!s(e.value)}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HHh:MMm:SSs",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(s(e))return"--";if("s"===t)return"".concat((Number(e)/1e3).toFixed(2),"s");if("s0"===t)return"".concat((Number(e)/1e3).toFixed(0),"s");var r=Math.floor(Number(e)/60/60/1e3),o=Math.floor(Number(e)%36e5/6e4),a=Math.floor(Number(e)%6e4/1e3),i=t;return n&&0===r?i=0===o?"SSs":"MMmSSs":-1===t.indexOf("SS")&&a>29&&60===(o+=1)&&(o=0,r+=1),i.replace("HH","".concat(r)).replace("MM","".concat(o)).replace("SS","".concat(a))}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM DD",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=c()(),a=o.subtract(e+t,"day"),i=o.subtract(1+t,"day"),u=r&&a.year()!==i.year()&&!n.includes("YY")?"".concat(n,", YYYY"):n;return u.includes("MMM")?[d(a.format(u)),d(i.format(u))]:[a.format(u),i.format(u)]}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-DD-YYYY HH:mm",n=c.a.unix(e).utc().format(t);return t.includes("MMM")?d(n):n}function H(e,t){return N.apply(this,arguments)}function N(){return(N=Object(a.a)(o.a.mark((function e(t,r){var a,i,u,c,l,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("csv"!==r){e.next=4;break}return a=t.map((function(e){return e.map((function(e){return'"'.concat(e,'"')})).join(",")})).join("\n"),"\ufeff",e.abrupt("return",new Blob(["\ufeff"+a],{type:"text/csv;charset=utf-8;"}));case 4:return i="SheetJS",e.next=7,Promise.all([n.e(64),n.e(59),n.e(61),n.e(54),n.e(151)]).then(n.t.bind(null,"Isj4",7));case 7:return u=e.sent,c=u.utils.aoa_to_sheet(t),l=u.utils.book_new(),u.utils.book_append_sheet(l,c,i),f=u.write(l,{type:"array",bookType:"xlsx"}),e.abrupt("return",new Blob([f],{type:"application/octet-stream"}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=e.length-1;return"".concat(e[0].fullDay,"_").concat(e[t].fullDay)}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e&&e.length){var t=Array.from(e),n=0!==t[t.length-1].status?0!==t[t.length-2].status?2:1:0;return t.slice(2-n,0===n?void 0:0-n).reduce((function(e,t){return 0===t.status?t.value+e:e}),0)}};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c()(),r=n.subtract(t,"day").year(),o=!1,a=t>=10?Math.floor(t/5):2,i=new Array(e).fill(null).map((function(i,u){var c=n.subtract(e-u,"day");return t>7&&(e-1-u)%a!==0?"":r===c.year()||o?d(c.format("MMM DD")):(o=!0,d(c.format("MMM DD, YYYY")))}));return i}function A(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"MMM DD, YYYY",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(e&&e.length){var l=c()().subtract(n+r,"day"),f=Object(i.a)(e),v=F(f.length,t,l),d=b(f.length,l,a);if(!o)return f.map((function(e,t){return{x:v[t],y:e.value,fullDay:d[t],index:t+u}}));var h=Array(0);return f.forEach((function(e,t){Array(o).fill(0).forEach((function(n,r){var o=e.value instanceof Array&&!s(e.value[r])?e.value[r]:null;h.push({x:10===r?v[t]:"",y:o,fullDay:d[t],time:p(r)})}))})),h}}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM DD, YYYY",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e&&e.length){var o=0!==e[e.length-1].status?0!==e[e.length-2].status?2:1:0;return A(e.slice(2-o,0===o?void 0:0-o),e.length-2,o,r,t,n,2-o)}}function T(e){var t=[[Object(v.c)("date"),Object(v.c)("Video Views"),Object(v.c)("Followers"),Object(v.c)("difference_in_followers_from_previous_day"),Object(v.c)("Profile Views")]],n=e.vvHistory,r=void 0===n?[]:n,o=e.pvHistory,a=void 0===o?[]:o,i=e.followerNumHistory,u=void 0===i?[]:i,c=e.delay,l=e.dayOffset,f=void 0===l?0:l,s=A(r,r.length,null!==c&&void 0!==c?c:0,f,null,"YYYY-MM-DD");return null===s||void 0===s||s.forEach((function(e,n){var o=s[n].index||n,i=Number(u[o+1].value||0),c=Number(u[o].value||0);t.push([s[n].fullDay,r[o].value||0,i,i-c,a[o].value||0])})),{rows:t,dateFilter:S(s)}}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=c()().format("YYYY-MM-DD HH:mm"),r=[[Object(v.c)("time"),Object(v.c)("video_title"),Object(v.c)("video_link"),Object(v.c)("post_time")].concat(Object(i.a)(t?[Object(v.c)("video_view_within_days",{x:7})]:[]),[Object(v.c)("total_likes"),Object(v.c)("total_comments"),Object(v.c)("total_shares"),Object(v.c)("total_views")])];return e.value&&e.value.forEach((function(e){var o,a,u,c,l,f=e.desc,v=e.create_time,s=e.statistics,d=e.aweme_id,h=e.author,b="https://www.tiktok.com/@".concat(h.unique_id,"/video/").concat(d),p=[n,f,b,k(v,"YYYY-MM-DD HH:mm")].concat(Object(i.a)(t?[String(null!==(o=e.weekly_incr_pv)&&void 0!==o?o:"")]:[]),[String(null!==(a=null===s||void 0===s?void 0:s.digg_count)&&void 0!==a?a:""),String(null!==(u=null===s||void 0===s?void 0:s.comment_count)&&void 0!==u?u:""),String(null!==(c=null===s||void 0===s?void 0:s.share_count)&&void 0!==c?c:""),String(null!==(l=null===s||void 0===s?void 0:s.play_count)&&void 0!==l?l:"")]);r.push(p)})),r}var C=function(e){var t,n,r,o,a,i,u,c,l=[[Object(v.c)("date"),Object(v.c)("total_views"),Object(v.c)("unique_views"),Object(v.c)("live_earnings"),Object(v.c)("pcu"),Object(v.c)("new_followers"),Object(v.c)("gifters"),Object(v.c)("total_time")]],f=null!==(t=e.liveViewHistory)&&void 0!==t?t:[],s=null!==(n=e.liveUniqueViewerHistory)&&void 0!==n?n:[],d=null!==(r=e.liveDiamondsHistory)&&void 0!==r?r:[],h=null!==(o=e.liveTopViewerHistory)&&void 0!==o?o:[],b=null!==(a=e.liveNewFollowersHistory)&&void 0!==a?a:[],p=null!==(i=e.liveDurationTimeHistory)&&void 0!==i?i:[],m=null!==(u=e.liveGiftersHistory)&&void 0!==u?u:[],y=null!==(c=e.liveHistory)&&void 0!==c?c:[],g=V(f,null,"YYYY-MM-DD");return null===g||void 0===g||g.forEach((function(e,t){var n=g[t].index||t;if(y[n]&&0===y[n].value)return l.push([g[t].fullDay,"","","","","","",""]);l.push([g[t].fullDay,f[n]&&f[n].value||0,s[n]&&s[n].value||0,d[n]&&d[n].value||0,h[n]&&h[n].value||0,b[n]&&b[n].value||0,m[n]&&m[n].value||0,p[n]&&p[n].value||0])})),{rows:l,dateFilter:S(g)}};function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[[Object(v.c)(e),Object(v.c)("distribution")]];return t.value&&t.value.forEach((function(e){var t=e.key,r=e.value;n.push([Object(v.c)(null!==t&&void 0!==t?t:""),"".concat((100*Number(r)).toFixed(0),"%")])})),n}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[[Object(v.c)("date"),Object(v.c)("hour"),Object(v.c)("active_followers")]],n=m(e,24,"YYYY-MM-DD");return null===n||void 0===n||n.forEach((function(e,n){t.push([e.fullDay,n%24+1,e.y||0])})),t}function I(e,t){var n=document.createElement("a");n.download=t,n.style.display="none",n.href=URL.createObjectURL(e),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function G(e,t,n,r){return R.apply(this,arguments)}function R(){return(R=Object(a.a)(o.a.mark((function e(t,n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(r,a);case 2:i=e.sent,t.file("".concat(n,".").concat(a),i,"xlsx"===a?{binary:!0}:{});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,n,r){return B.apply(this,arguments)}function B(){return(B=Object(a.a)(o.a.mark((function e(t,r,a,i){var u,l,f,s,d,h,b,p,y,g,w,M,Y,x,j,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(54),n.e(146)]).then(n.t.bind(null,"Nhct",7)).then((function(e){return e.default()}));case 2:if(u=e.sent,l=a.toLocaleLowerCase(),f=c()().format("YYYY-MM-DD"),s="","Overview"!==t){e.next=13;break}return d=T(r),h=d.rows,b=d.dateFilter,f=b,e.next=11,G(u,i,h,l);case 11:e.next=41;break;case 13:if("Content"!==t){e.next=23;break}return p=L(r.weekNewVideos),e.next=17,G(u,Object(v.c)("Video Posts"),p,l);case 17:return y=L(r.weekTopVideos,!0),e.next=20,G(u,Object(v.c)("Trending Videos"),y,l);case 20:f=S(m(r.vvHistory,null,"YYYY-MM-DD")),e.next=41;break;case 23:if("Followers"!==t){e.next=36;break}return g=P("Gender",r.followerGenderPercent),e.next=27,G(u,Object(v.c)("Gender"),g,l);case 27:if(!r.followerRegionPercent){e.next=31;break}return w=P("Top Locations",r.followerRegionPercent),e.next=31,G(u,Object(v.c)("Top Locations"),w,l);case 31:return M=q(r.followerActiveHistoryHours),e.next=34,G(u,Object(v.c)("Follower activity"),M,l);case 34:e.next=41;break;case 36:if("LIVE"!==t){e.next=41;break}return Y=C(r),x=Y.rows,j=Y.dateFilter,e.next=40,G(u,"LIVE_overview",x,l);case 40:f=j;case 41:r.userInfo&&(s=null!==(O=r.userInfo.unique_id)&&void 0!==O?O:""),u.generateAsync({type:"blob"}).then((function(e){I(e,"".concat(Object(v.c)(t),"_").concat(f,"_").concat(s,".zip"))}));case 43:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);