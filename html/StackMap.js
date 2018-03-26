function SMcontentLoaded(t,e){var a=!1,o=!0,n=t.document,i=n.documentElement,r=n.addEventListener,l=r?"addEventListener":"attachEvent",c=r?"removeEventListener":"detachEvent",s=r?"":"on",d=function(o){"readystatechange"==o.type&&"complete"!=n.readyState||(("load"==o.type?t:n)[c](s+o.type,d,!1),!a&&(a=!0)&&e.call(t,o.type||o))},p=function(){try{i.doScroll("left")}catch(t){return void setTimeout(p,50)}d("poll")};if("complete"==n.readyState)e.call(t,"lazy");else{if(!r&&i.doScroll){try{o=!t.frameElement}catch(t){}o&&p()}n[l](s+"DOMContentLoaded",d,!1),n[l](s+"readystatechange",d,!1),t[l](s+"load",d,!1)}}var StackMap=StackMap||{domain:"https://brandeis.stackmap.com",popupCounter:0,delayImgLoad:!0,libraries:{"Main Library":"Main Library"},mobile:!1,setup:function(){StackMap.boxHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(StackMap.mobile=Math.max(document.documentElement.clientHeight,window.innerHeight||0));var t=document.getElementsByTagName("body")[0],e=document.createElement("div");e.id="SMblock-screen",t.appendChild(e),e.addEventListener("click",StackMap.hideAllPopups,!1);var a=document.documentElement;a.addEventListener("click",function(t){var e=StackMap.utils.getEventTarget(t);if(StackMap.utils.hasClass(e,"SMclose"))t.preventDefault(),t.stopPropagation(),StackMap.hideAllPopups();else if(StackMap.utils.hasClass(e,"SMprinter-friendly")){t.preventDefault(),t.stopPropagation();var a;a=t.srcElement?t.srcElement.parentNode.parentNode.parentNode:t.target.parentNode.parentNode;var o=a.getAttribute("data-callno"),n=a.getAttribute("data-location"),i=a.getAttribute("data-library"),r=a.getAttribute("data-title");StackMap.openPrinterFriendly(o,n,i,r)}})},scrapeDom:function(){for(var t={holding:[],alt:!0},e=[],a=document.querySelectorAll(".result-item-text"),o=0;o<a.length;o++){var n=a[o];if(void 0===n)return;if(!StackMap.utils.hasClass(n,"sm-checked")){var i=n.querySelector(".layout-row");if(i){StackMap.utils.addClass(n,"sm-checked");var r=i.querySelector(".best-location-library-code");if(null!==r){var l=i.querySelector(".best-location-sub-location"),c=i.querySelector(".best-location-delivery"),s=StackMap.utils.text(r);if(s=StackMap.libraries[s]){var d=StackMap.utils.text(l),p=StackMap.utils.text(c);if(p.length>3&&(p=p.slice(1,p.length-2)),!StackMap.utils.exitEary(s,d,p)){var u=s+"$$"+d+"$$"+p;t.holding.push(u);var m=n,h=m.querySelector(".item-title"),f=StackMap.utils.text(h);m.setAttribute("data-title",f),e.push(m)}}}}}}0!==t.holding.length&&StackMap.getJson(t,e,"jsonp")},getAsUriParameters:function(t){return Object.keys(t).map(function(e){if(Array.isArray(t[e])){var a=encodeURIComponent(e+"[]");return t[e].map(function(t){return a+"="+encodeURIComponent(t)}).join("&")}return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},jsonpWrapper:function(t,e,a){var o="jsonp_callback_"+Math.floor(1e5*Math.random());return window[o]=function(n){t(n,e,a),delete window[o]},o},loadJSONP:function(t,e,a){var o=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src=t+(t.indexOf("?")+1?"&":"?")+"callback="+e,o.parentNode.insertBefore(n,o),n.onload=function(){this.remove()}},getJson:function(t,e,a){if("jsonp"===a){var o=StackMap.domain+"/json/?callback=?";o=o+"&"+StackMap.getAsUriParameters(t);var n=StackMap.jsonpWrapper(StackMap.buildMapAndButtons,t,e);StackMap.loadJSONP(o,n)}},logClick:function(t){function e(){}var a=StackMap.domain+"/logmapit/?callback=?";a=a+"&"+StackMap.getAsUriParameters(t),StackMap.loadJSONP(a,e)},buildMapAndButtons:function(t,e,a){for(var o=0;o<a.length;o++){var n=t.results[o];if(0!==n.maps.length){map=n.maps[0];var i=document.createElement("div");StackMap.utils.addClass(i,"SMpopup"),i.id="SM"+StackMap.popupCounter,i.dataset.callno=n.callno,i.dataset.location=n.location,i.dataset.library=n.library;var r=document.createElement("button"),l=document.createElement("i");StackMap.utils.addClass(r,"SMclose"),StackMap.utils.addClass(l,["fa","fa-times","fa-1x","SMclose"]);
//Added for accessibility - AGRS
r.setAttribute("aria-label","Close StackMap Popup");
var c=document.createElement("button"),s=document.createElement("i");StackMap.utils.addClass(c,"SMprinter-friendly"),StackMap.utils.addClass(s,["fa","fa-print","fa-1x","SMprinter-friendly"]),r.appendChild(l),c.appendChild(s);
//Added for accessibility - AGRS
c.setAttribute("aria-label","StackMap Printer Friendly View");
var d=document.createElement("div");d.appendChild(r),d.appendChild(c),StackMap.utils.addClass(d,"SMheaderbtns"),i.appendChild(d);var p=document.createElement("div");StackMap.utils.addClass(p,"SMheader");
//changed this from h2 to span - AGRS
var u,m=document.createElement("span");a[o].dataset.title?(u=a[o].getAttribute("data-title"),u=document.createTextNode(u)):u=document.createTextNode(map.library+", "+map.floorname),m.appendChild(u),p.appendChild(m),i.appendChild(p);var h=document.createElement("img");StackMap.utils.addClass(h,["SMmap"]);var f="Location of item with callnumber "+n.callno+" is "+n.library+", "+map.floorname;h.setAttribute("alt",f),h.setAttribute("draggable","true"),StackMap.delayImgLoad?h.setAttribute("othersrc",map.mapurl+"&marker=1"):h.setAttribute("src",map.mapurl+"&marker=1");var g=document.createElement("div");StackMap.utils.addClass(g,["SMmap-container"]);var v=document.createElement("ul");StackMap.utils.addClass(v,"SMmap-buttons");var S=document.createElement("li"),y=document.createElement("li"),M=document.createElement("li"),C=document.createElement("button"),_=document.createElement("button"),E=document.createElement("button");StackMap.utils.addClass(C,"zoom-in"),StackMap.utils.addClass(_,"zoom-out"),StackMap.utils.addClass(E,"zoom-fit");var b=document.createElement("i"),k=document.createElement("i"),x=document.createElement("i");StackMap.utils.addClass(b,["fa","fa-plus-circle","SMicon","fa-1x"]),StackMap.utils.addClass(k,["fa","fa-minus-circle","SMicon","fa-1x"]),StackMap.utils.addClass(x,["fa","fa-arrows","SMicon","fa-1x"]);var w=document.createElement("span"),T=document.createElement("span"),N=document.createElement("span"),z=document.createTextNode("zoom in"),P=document.createTextNode("zoom out"),D=document.createTextNode("entire map");w.appendChild(z),T.appendChild(P),N.appendChild(D),C.appendChild(b),_.appendChild(k),E.appendChild(x),C.appendChild(w),_.appendChild(T),E.appendChild(N),S.appendChild(C),y.appendChild(_),M.appendChild(E),v.appendChild(S),v.appendChild(y),v.appendChild(M);var I=document.createElement("div");StackMap.mobile?StackMap.mobile<600?I.style.height=StackMap.mobile/2.2+"px":StackMap.mobile<800&&(I.style.height=StackMap.mobile/2.2+"px"):I.style.height=StackMap.boxHeight/2+"px",StackMap.utils.addClass(I,"SMmap-window"),I.appendChild(h),g.appendChild(v),g.appendChild(I);var L=document.createElement("div");StackMap.utils.addClass(L,"SMmore-info");var A=document.createElement("ul"),H=document.createElement("li"),B=document.createElement("p"),F=document.createElement("strong"),O=document.createTextNode("Directions:");F.appendChild(O),B.appendChild(F),H.appendChild(B);var W=document.createElement("li"),q=document.createElement("p");StackMap.utils.addClass(q,"SMemph");var Y=document.createTextNode(map.directions);q.appendChild(Y),W.appendChild(q);var j=document.createElement("li"),X=document.createElement("p");StackMap.utils.addClass(X,"SMdirectionstxt");var Z=document.createTextNode("This pin indicates your item's location on the map"),U=document.createElement("i");U.setAttribute("aria-hidden","true"),StackMap.utils.addClass(U,["fa","fa-map-marker","fa-1x","SMdirections"]),X.appendChild(U),X.appendChild(Z),j.appendChild(X);var R=document.createElement("li"),K=document.createElement("p"),J=document.createTextNode("Go to the shelving row labeled:");K.appendChild(J),R.appendChild(K);var $=document.createElement("li"),G=document.createElement("p");StackMap.utils.addClass(G,"SMemph");var Q=document.createTextNode(map.ranges[0].rangename);G.appendChild(Q),$.appendChild(G);var V=document.createElement("li"),tt=document.createElement("p"),et=document.createTextNode("Look for the item with this call number: ");tt.appendChild(et),V.appendChild(tt);var at=document.createElement("li"),ot=document.createElement("p");StackMap.utils.addClass(ot,"SMemph");var nt=document.createTextNode(n.callno);ot.appendChild(nt),at.appendChild(ot);for(var it=[j,H,W,R,$,V,at],rt=0;rt<it.length;rt++){var lt=it[rt];A.appendChild(lt)}L.appendChild(A),g.appendChild(L),i.appendChild(g);var ct=document.createElement("li"),st=document.createElement("p");StackMap.utils.addClass(st,"poweredby-container");var dt=document.createElement("a");StackMap.utils.addClass(dt,"poweredby-link"),dt.setAttribute("href","http://stackmap.com");var pt=document.createTextNode("StackMap.com"),ut=document.createTextNode("Powered by");dt.appendChild(pt),st.appendChild(ut),st.appendChild(dt),ct.appendChild(st),A.appendChild(ct);var mt=document.getElementsByTagName("body")[0],ht=document.createElement("div");StackMap.utils.addClass(ht,"SMoutercontainer"),ht.appendChild(i),mt.appendChild(ht);var ft=i.querySelector(".SMmap-container"),gt={container:ft,originalWidth:map.width,originalHeight:map.height};StackMap.mobile?(gt.boxHeight=StackMap.mobile/2,gt.boxWidth=StackMap.mobile/2):(gt.boxHeight=StackMap.boxHeight/2,gt.boxWidth=StackMap.boxWidth/2);var vt=(new StackMap.utils.StackMapZoomMap(gt),document.createElement("button"));StackMap.utils.addClass(vt,["SMButton","SMsearchbtn"]),vt.setAttribute("type","button"),vt.style.zIndex=1e4,vt.style.fontSize="12px",vt.style.margin="0",vt.style.position="relative",vt.dataset.id=StackMap.popupCounter,function(t){vt.addEventListener("click",function(e){e||(e=windows.event),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),StackMap.showPopup("SM"+t,e)})}(StackMap.popupCounter);var St=document.createTextNode("Map it"),yt=document.createElement("i");StackMap.utils.addClass(yt,["fa","fa-map-marker","searchIcon"]),vt.appendChild(yt),vt.appendChild(St);var Mt=document.createElement("td");Mt.style.padding="2px",Mt.style.zIndex=1e4,Mt.appendChild(vt),a[o].appendChild(Mt);
var Ct=Mt.parentNode.parentNode.parentNode.querySelector("thead tr");Ct&&Ct.appendChild(document.createElement("th")),StackMap.popupCounter++}}},openPrinterFriendly:function(t,e,a,o){var n=StackMap.domain+"/view/?callno="+encodeURIComponent(t)+"&amp;location="+encodeURIComponent(e).replace("&amp;","%26")+"&amp;library="+encodeURIComponent(a)+"&amp;title="+encodeURIComponent(o)+"&amp;v=pf",i="width=950,height=800,toolbar=no,directories=no,scrollbars=1,location=no,menubar=no,status=no,left=0,top=0";return window.open(n,"stackmap",i),!1},showPopup:function(t,e){var a=StackMap.utils.getEventTarget(e);e||(e=windows.event),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation();var o=document.getElementById(t);o.parentNode;if(StackMap.delayImgLoad){var n=o.querySelector(".SMmap");n.setAttribute("src",n.getAttribute("othersrc"))}var i={callno:o.dataset.callno,library:o.dataset.library,location:o.dataset.location,action:"mapit"};StackMap.logClick(i);var r=document.body,l=document.documentElement,c=(Math.max(r.scrollHeight,r.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight),StackMap.utils.ancestorForDialogContainer(a)),s=document.querySelector(".main");if(c)o.style.top=c.style.top;else{var d;d=0===window.scrollY?30:window.scrollY,o.style.top=d+"px"}var p=(document.documentElement.clientWidth,o.querySelector(".SMmap")),u=o.querySelector(".SMmap-window");u.style.height=p.style.height,StackMap.utils.addClass(o,"SMpopup-show"),o.parentNode.style.display="flex";var m=o.parentNode;StackMap.utils.addClass(m,"SMoutercontainer-on");var h=document.querySelector(".SMpopup-show").offsetWidth,f=window.innerWidth/2-h/2;o.style.left=f+"px";var g=document.getElementById("SMblock-screen");s?g.style.height=s.scrollHeight+"px":g.style.height=document.body.scrollHeight+"px",g.style.display="block"},hideAllPopups:function(){var t=document.getElementsByClassName("SMpopup");if(t)for(var e=0;e<t.length;e++)StackMap.utils.removeClass(t[e],"SMpopup-show"),StackMap.utils.removeClass(t[e].parentNode,"SMoutercontainer-on"),t[e].parentNode.style.display="none";return document.getElementById("SMblock-screen").style.display="none",!1},utils:{ancestorForDialogContainer:function(t){for(;t&&!StackMap.utils.hasClass(t,"md-dialog-container");)t=t.parentNode;return t},exitEary:function(t,e,a,o){if(""===t||void 0===t)return!0;if(""===e||void 0===e)return!0;if(""===a||void 0===a)return!0;if("Searching...Unavailable"===e)return!0;if(""===e||""===a)return!0;if("On hold for someone"===e||"Item has been checked out"===e)return!0;var n=e.charCodeAt(0);return!(n>=65&&n<=90||n>=97&&n<=122)},text:function(t){return t?t.textContent?t.textContent.trim():t.innerText?t.innerText.trim().replace("\n"," "):"":""},hasClass:function(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className.replace(e,"")},addClass:function(t,e){if(Array.isArray(e))for(var a=!!t.classList,o=0;o<e.length;o++){var n=e[o];a?t.classList.add(n):t.className+=n}else t.classList?t.classList.add(e):t.className+=e},getEventTarget:function(t){return t=t||window.event,t.target||t.srcElement},getOffset:function(t){for(var e=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-t.scrollLeft,a+=t.offsetTop-t.scrollTop,t=t.offsetParent;return{top:a,left:e}},round:function(t,e){var a=Math.pow(10,e),o=t*a,n=Math.round(o);return n/a},StackMapZoomMap:function(t){function e(t){t.preventDefault(),t||(t=window.event);var e=t.target?t.target:t.srcElement;"SMmap"===e.className&&(offsetX=t.clientX,offsetY=t.clientY,e.style.left||(e.style.left="0px"),e.style.top||(e.style.top="0px"),coordX=parseInt(e.style.left),coordY=parseInt(e.style.top),o.drag=!0,o.map.addEventListener("mousemove",a))}function a(t){if(t.preventDefault(),o.drag){t||(t=window.event);var e=t.target?t.target:t.srcElement;return e.style.left=coordX+t.clientX-offsetX+"px",e.style.top=coordY+t.clientY-offsetY+"px",!1}}var o=this,n=2;o.boxHeight=t.boxHeight/n||510,o.boxWidth=t.boxWidth/n||680,o.container=document.getElementById("SMmap-container")||t.container,o.fitX=0,o.fitY=0,o.lockEdges=!0,o.mapSelector=".SMmap",o.originalWidth=t.originalWidth||800,o.originalHeight=t.originalHeight||600,o.windowSelector=".SMmap-window",o.zoomFactor=1.1,o.zoomFit=StackMap.mobile?.3:.5,o.zoomFitBtn=".zoom-fit",o.zoomInBtn=".zoom-in",o.zoomMin=.1,o.zoomMax=2,o.zoomOutBtn=".zoom-out",o.mapWindow=o.container.querySelector(o.windowSelector),o.popupWindow=o.mapWindow.querySelector(".SMpopup"),o.map=o.mapWindow.querySelector(o.mapSelector),o.mapElem=o.map,o.halfBoxHeight=o.boxHeight/n,o.halfBoxWidth=o.boxWidth/n,o.curZoomFactor=1,o.zoomFactorElem=o.mapWindow.querySelector(o.zoomFactorSelector),o.zoomMin=Math.min(o.boxWidth/o.originalWidth,o.boxHeight/o.originalHeight),o.zoomMin<1&&(o.zoomMin=Math.pow(o.zoomFactor,Math.floor(Math.log(o.zoomMin)/Math.log(o.zoomFactor)))),o.zoomFit==-1&&(o.zoomFit=o.zoomMin),o.curSize={x:0,y:0},o.mousePosition={x:0,y:0},o.moveMap=function(t,e,a){var n=t,i=e;if(o.lockEdges){var r=-o.curSize.x+o.boxWidth,l=-o.curSize.y+o.boxHeight;n=n<r?r:n,i=i<l?l:i,n=n>0?0:n,i=i>0?0:i}a?(o.mapElem.style.left="",o.mapElem.style.top=""):(o.mapElem.style.left=n+"px",o.mapElem.style.top=i+"px")},o.setZoomFactor=function(t,e,a){var n=o.map,i=(-n.left+e)/o.curZoomFactor,r=(-n.top+a)/o.curZoomFactor;o.curZoomFactor=t,o.curSize.x=o.originalWidth*o.curZoomFactor,o.curSize.y=o.originalHeight*o.curZoomFactor,o.mapElem.style.width=o.curSize.x+"px",o.mapElem.style.height=o.curSize.y+"px",i=e-i*t,r=a-r*t,o.moveMap(i,r)},o.drag=!1,o.setZoomFactor(o.zoomFit,o.halfBoxWidth,o.halfBoxHeight),o.map.addEventListener("mousedown",function(t){e(t,o.map,o.mapWindow)}),o.map.addEventListener("mouseup",function(){o.drag=!1,o.map.removeEventListener("mousemove",a),o.map.removeEventListener("mousedown",e)}),o.container.addEventListener("click",function(t){var e=StackMap.utils.getEventTarget(t);return StackMap.utils.hasClass(e,o.zoomInBtn.slice(1))||StackMap.utils.hasClass(e.parentNode,o.zoomInBtn.slice(1))?o.setZoomFactor(o.curZoomFactor*o.zoomFactor,o.halfBoxWidth,o.halfBoxHeight):StackMap.utils.hasClass(e,o.zoomOutBtn.slice(1))||StackMap.utils.hasClass(e.parentNode,o.zoomOutBtn.slice(1))?o.setZoomFactor(o.curZoomFactor/o.zoomFactor,o.halfBoxWidth,o.halfBoxHeight):(StackMap.utils.hasClass(e,o.zoomFitBtn.slice(1))||StackMap.utils.hasClass(e.parentNode,o.zoomFitBtn.slice(1)))&&(o.setZoomFactor(o.zoomFit,o.halfBoxWidth,o.halfBoxHeight),o.moveMap(o.fitX,o.fitY,!0)),!1})}},init:function(){StackMap.setup();var t=3e3;setInterval(function(){StackMap.scrapeDom()},t)}};SMcontentLoaded(window,StackMap.init);var DragDropTouch;!function(t){"use strict";var e=function(){function t(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(t){this._dropEffect=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(t){this._effectAllowed=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),t.prototype.clearData=function(t){null!==t?delete this._data[t]:this._data=null},t.prototype.getData=function(t){return this._data[t]||""},t.prototype.setData=function(t,e){this._data[t]=e},t.prototype.setDragImage=function(t,e,o){var n=a._instance;n._imgCustom=t,n._imgOffset={x:e,y:o}},t}();t.DataTransfer=e;var a=function(){function t(){if(this._lastClick=0,t._instance)throw"DragDropTouch instance already created.";var e=!1;if(document.addEventListener("test",null,{get passive(){return e=!0,!0}}),"ontouchstart"in document){var a=document,o=this._touchstart.bind(this),n=this._touchmove.bind(this),i=this._touchend.bind(this),r=!!e&&{passive:!1,capture:!1};a.addEventListener("touchstart",o,r),a.addEventListener("touchmove",n,r),a.addEventListener("touchend",i),a.addEventListener("touchcancel",i)}}return t.getInstance=function(){return t._instance},t.prototype._touchstart=function(e){var a=this;if(this._shouldHandle(e)){if(Date.now()-this._lastClick<t._DBLCLICK&&this._dispatchEvent(e,"dblclick",e.target))return e.preventDefault(),void this._reset();this._reset();var o=this._closestDraggable(e.target);o&&(this._dispatchEvent(e,"mousemove",e.target)||this._dispatchEvent(e,"mousedown",e.target)||(this._dragSource=o,this._ptDown=this._getPoint(e),this._lastTouch=e,e.preventDefault(),setTimeout(function(){a._dragSource==o&&null===a._img&&a._dispatchEvent(e,"contextmenu",o)&&a._reset()},t._CTXMENU)))}},t.prototype._touchmove=function(e){if(this._shouldHandle(e)){var a=this._getTarget(e);if(this._dispatchEvent(e,"mousemove",a))return this._lastTouch=e,void e.preventDefault();if(this._dragSource&&!this._img){var o=this._getDelta(e);
o>t._THRESHOLD&&(this._dispatchEvent(e,"dragstart",this._dragSource),this._createImage(e),this._dispatchEvent(e,"dragenter",a))}this._img&&(this._lastTouch=e,e.preventDefault(),a!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(e,"dragenter",a),this._lastTarget=a),this._moveImage(e),this._dispatchEvent(e,"dragover",a))}},t.prototype._touchend=function(t){if(this._shouldHandle(t)){if(this._dispatchEvent(this._lastTouch,"mouseup",t.target))return void t.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",t.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(t.type.indexOf("cancel")<0&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},t.prototype._shouldHandle=function(t){return t&&!t.defaultPrevented&&t.touches&&t.touches.length<2},t.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._dataTransfer=new e},t.prototype._getPoint=function(t,e){return t&&t.touches&&(t=t.touches[0]),{x:e?t.pageX:t.clientX,y:e?t.pageY:t.clientY}},t.prototype._getDelta=function(t){var e=this._getPoint(t);return Math.abs(e.x-this._ptDown.x)+Math.abs(e.y-this._ptDown.y)},t.prototype._getTarget=function(t){for(var e=this._getPoint(t),a=document.elementFromPoint(e.x,e.y);a&&"none"==getComputedStyle(a).pointerEvents;)a=a.parentElement;return a},t.prototype._createImage=function(e){this._img&&this._destroyImage();var a=this._imgCustom||this._dragSource;if(this._img=a.cloneNode(!0),this._copyStyle(a,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var o=a.getBoundingClientRect(),n=this._getPoint(e);this._imgOffset={x:n.x-o.left,y:n.y-o.top},this._img.style.opacity=t._OPACITY.toString()}this._moveImage(e),document.body.appendChild(this._img)},t.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},t.prototype._moveImage=function(t){var e=this;this._img&&requestAnimationFrame(function(){var a=e._getPoint(t,!0),o=e._img.style;o.position="absolute",o.pointerEvents="none",o.zIndex="999999",o.left=Math.round(a.x-e._imgOffset.x)+"px",o.top=Math.round(a.y-e._imgOffset.y)+"px"})},t.prototype._copyProps=function(t,e,a){for(var o=0;o<a.length;o++){var n=a[o];t[n]=e[n]}},t.prototype._copyStyle=function(e,a){if(t._rmvAtts.forEach(function(t){a.removeAttribute(t)}),e instanceof HTMLCanvasElement){var o=e,n=a;n.width=o.width,n.height=o.height,n.getContext("2d").drawImage(o,0,0)}for(var i=getComputedStyle(e),r=0;r<i.length;r++){var l=i[r];l.indexOf("transition")<0&&(a.style[l]=i[l])}a.style.pointerEvents="none";for(var r=0;r<e.children.length;r++)this._copyStyle(e.children[r],a.children[r])},t.prototype._dispatchEvent=function(e,a,o){if(e&&o){var n=document.createEvent("Event"),i=e.touches?e.touches[0]:e;return n.initEvent(a,!0,!0),n.button=0,n.which=n.buttons=1,this._copyProps(n,e,t._kbdProps),this._copyProps(n,i,t._ptProps),n.dataTransfer=this._dataTransfer,o.dispatchEvent(n),n.defaultPrevented}return!1},t.prototype._closestDraggable=function(t){for(;t;t=t.parentElement)if(t.hasAttribute("draggable")&&t.draggable)return t;return null},t}();a._instance=new a,a._THRESHOLD=5,a._OPACITY=.5,a._DBLCLICK=500,a._CTXMENU=900,a._rmvAtts="id,class,style,draggable".split(","),a._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),a._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),t.DragDropTouch=a}(DragDropTouch||(DragDropTouch={}));