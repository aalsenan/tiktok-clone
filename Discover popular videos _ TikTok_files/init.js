(function(){(function(a){"use strict";var b=Function.prototype.call.bind(Function.prototype.toString);var c=void 0,d=void 0;var e=function f(){var g=c.lastIndexOf(this);if(g>=0){return d[g]}return b(this)};e.prototype=void 0;c=[e];d=[b(Function.prototype.toString)];var h=function(i,j){if(typeof j!=="function"){return}try{var k=e.call(j);d.push(k);c.push(i);if(Function.prototype.toString!==e){Function.prototype.toString=e}}catch(l){}};var m=Object.hasOwnProperty;var n=Object.getPrototypeOf;var o=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var q=Object.defineProperty;var r=Object.call.bind(Object.bind,Object.call);var s=r(Object.apply);var t=r(Object.call);var u=Object.create;var v=Function.prototype.bind;var w=Array.prototype.push;var x=Array.prototype.slice;var y=Array.prototype.indexOf;var z=["arguments","caller","prototype"];var A=null;if(typeof Reflect!=="undefined"&&Reflect!=null&&typeof Reflect.construct==="function"){A=Reflect.construct}else{A=function(B,C){var D=[null];s(w,D,C);var E=s(v,B,D);return new E}}function F(){var G=[];return{register:function(H){t(w,G,H);return this},clear:function(){G=[];return this},notify:function(I){var J=null;var K=t(x,G);var L=K.length;for(var M=0;M<L;++M){try{J=K[M](I,J)}catch(N){}}return J}}}function O(P,Q){var R=P;while(R!=null){var S=o(R,Q);if(S!=null){return{containingObj:R,desc:S}}R=n(R)}return null}function T(U,V){var W=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var X=O(U,V);if(X==null){return null}var Y=X.containingObj,Z=X.desc;var ba=Z.value,bb=Z.configurable,bc=Z.writable;if(!t(m,Z,"value")){return null}var bd=u(null);bd.value=ba;if(bb===false&&bc===false||typeof ba!=="function"){return{originals:bd}}var be=F();var bf=F();Z.value=function bg(){var bh=arguments;var bi=be.notify({args:bh,thisObj:this});if(bi!=null){if(bi.bypassResult!=null){if(bi.bypassResult.throw){throw bi.bypassResult.value}return bi.bypassResult.value}else if(bi.args!=null){bh=bi.args}}var bj;var bk={args:arguments,thisObj:this,threw:true,result:null};try{if(W&&this instanceof bg){bj=A(ba,bh)}else{bj=s(ba,this,bh)}bk={args:arguments,thisObj:this,threw:false,result:bj}}finally{var bl=bf.notify(bk);if(bl!=null&&bl.bypassResult!=null){if(bl.bypassResult.throw){throw bl.bypassResult.value}return bl.bypassResult.value}}return bj};var bm=Z.value;h(bm,ba);var bn=p(ba);for(var bo=0;bo<bn.length;++bo){var bp=bn[bo];if(t(y,z,bp)===-1){var bq=o(bm,bp);if(bq==null||bq.configurable===true||bq.writable===true){var br=o(ba,bp);if(br!=null){q(bm,bp,br)}}}}q(Y,V,Z);return{onBeforeInvoke:be,onAfterInvoke:bf,originals:bd}}function bs(bt,bu){var bv=O(bt,bu);if(bv==null){return null}var bw=bv.containingObj,bx=bv.desc;var by=bx.value,bz=bx.get,bA=bx.set,bB=bx.configurable;var bC=t(m,bx,"value");var bD=u(null);if(bB===false||bC){if(bz!=null){bD.get=bz}if(bA!=null){bD.set=bA}if(bC){bD.value=by}return{originals:bD}}var bE={};if(bz!=null){bD.get=bz;var bF=F();var bG=F();bx.get=function(){var bH=bF.notify({thisObj:this});if(bH!=null&&bH.bypassResult!=null){if(bH.bypassResult.throw){throw bH.bypassResult.value}return bH.bypassResult.value}var bI;var bJ={thisObj:this,result:null,threw:true};try{bI=t(bz,this);bJ={thisObj:this,result:bI,threw:false}}finally{var bK=bG.notify(bJ);if(bK!=null&&bK.bypassResult!=null){if(bK.bypassResult.throw){throw bK.bypassResult.value}return bK.bypassResult.value}}return bI};h(bx.get,bz);bE.onBeforeGet=bF;bE.onAfterGet=bG}if(bA!=null){bD.set=bA;var bL=F();var bM=F();bx.set=function(bN){var bO=bN;var bP=bL.notify({param:bN,thisObj:this});if(bP!=null){if(bP.bypassResult!=null){if(bP.bypassResult.throw){throw bP.bypassResult.value}return bP.bypassResult.value}else if(t(m,bP,"param")){bO=bP.param}}var bQ;var bR={param:bN,thisObj:this,result:null,threw:true};try{bQ=t(bA,this,bO);bR={param:bN,thisObj:this,result:bQ,threw:false}}finally{var bS=bM.notify(bR);if(bS!=null&&bS.bypassResult!=null){if(bS.bypassResult.throw){throw bS.bypassResult.value}return bS.bypassResult.value}}return bQ};h(bx.set,bA);bE.onBeforeSet=bL;bE.onAfterSet=bM}q(bw,bu,bx);bE.originals=bD;return bE}var bT={};var bU=void 0;var bV=void 0;var bW=void 0;var bX="\u202EpQHDeQkQA\u202D";var bY="\u202EHOYQAYqfF\u202D";var bZ="-2\u202EHOYQAYqfF\u202D";var ca=void 0;var cb=Object.defineProperty.bind(Object);function cc(cd,ce,cf,cg,ch){if(cg==="function"){bT[cd]=T(ci(cf),ce,!!ch)}else if(cg==="accessor"){bT[cd]=bs(ci(cf),ce)}}function ci(cj){var ck=window;for(var cl=0;cl<cj.length;cl++){if(!{}.hasOwnProperty.call(ck,cj[cl])){return void 0}ck=ck[cj[cl]]}return ck}cc("CustomEvent","CustomEvent",[],"function",true);cc("cancelBubble","cancelBubble",["Event","prototype"],"accessor");cc("fetch","fetch",[],"function");cc("formSubmit","submit",["HTMLFormElement","prototype"],"function");cc("preventDefault","preventDefault",["Event","prototype"],"function");cc("stopImmediatePropagation","stopImmediatePropagation",["Event","prototype"],"function");cc("stopPropagation","stopPropagation",["Event","prototype"],"function");cc("xhrOpen","open",["XMLHttpRequest","prototype"],"function");cc("xhrSend","send",["XMLHttpRequest","prototype"],"function");(function(){var cm=XMLHttpRequest;if(cm==null){return}var cn=cm.prototype;if(bT.xhrOpen!=null){bU=function(co){var cp=co.args==null?null:""+co.args[0].toLowerCase();Object.defineProperty(co.thisObj,bX,{writable:true,configurable:true,enumerable:false,value:{method:cp,url:co.args==null?null:co.args[1]}});return{args:co.args}};bT.xhrOpen.onBeforeInvoke.register(bU)}if(bT.xhrSend!=null){bV=function(cq){if(ca!=null&&bX in cq.thisObj&&ca.shouldHook(cq.thisObj[bX])){var cr=ca.getEncodedData();if(cr){for(var cs in cr){if(!{}.hasOwnProperty.call(cr,cs))continue;var ct=cr[cs];var cu=ca.config.headerNamePrefix+cs;var cv=ca.chunk(cu,ct,ca.config.headerChunkSize);for(var cw in cv){if(!{}.hasOwnProperty.call(cv,cw))continue;cn.setRequestHeader.call(cq.thisObj,cw,cv[cw])}}}}return{args:cq.args}};bT.xhrSend.onBeforeInvoke.register(bV)}}());(function(){var cx=window.Request;if(bT.fetch!=null){var cy=bT.fetch.originals.value;function cz(cA,cB){if(cA.args&&cA.args.length>0){var cC=cA.args[0];var cD=cA.args[1];var cE=new cx(cC,cD);var cF={url:cE.url,method:cE.method};if(ca!=null&&ca.shouldHook(cF)){var cG=ca.getEncodedData();if(cG){for(var cH in cG){if(!{}.hasOwnProperty.call(cG,cH))continue;var cI=cG[cH];var cJ=ca.config.headerNamePrefix+cH;var cK=ca.chunk(cJ,cI,ca.config.headerChunkSize);for(var cL in cK){if(!{}.hasOwnProperty.call(cK,cL))continue;cE.headers.set(cL,cK[cL])}}}}return{args:[cE,cD]}}return cB}bT.fetch.onBeforeInvoke.register(cz)}}());addEventListener(bY,function cM(cN){ca=cN.detail;removeEventListener(bY,cM,true)},true);addEventListener(bZ,function cO(cP){if(cP.detail!=null&&cP.detail.exchange!=null){if(bT.xhrOpen!=null){bT.xhrOpen.onBeforeInvoke.clear()}if(bT.xhrSend!=null){bT.xhrSend.onBeforeInvoke.clear()}if(bT.fetch!=null){bT.fetch.onBeforeInvoke.clear()}cP.detail.exchange({instrumented:bT})}removeEventListener(bZ,cO,true)},true)}(this))}())