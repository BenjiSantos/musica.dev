(function(g){var window=this;var Qoa=function(a,b,c,d){var e=a||window.document;return g.Ek(e,b,function(a){var b=g.kf(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})},c4=function(a,b,c,d){return Qoa(a,b,c,function(a){return g.hh(a,d)})},d4=function(a,b){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);
var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e},e4=function(a){var b=g.Xl(a.g).Ua(),b=new g.yf(0,0,b.width,b.height);
if(a.B.o&&!g.J1(a)){if(g.U(a.g).Ob){var c=g.j1(a)?69:48;b.top+=c;b.height-=c}a.A&&(b.height-=g.j1(a.A.A)?72:50)}return b},Roa=function(a,b,c,d){c=(0,g.z)(c,d||a.o);
b=c4(b,"change",c,"iv-card-poll-choice-input");a.g.push(b)},Soa=function(a,b,c){c=(0,g.z)(c,a.o);
b=g.Gk(b,"mouseleave",c);a.g.push(b);return b},f4=function(a){var b={};
void 0!==a.g?b.trackingParams=a.g:(b.veType=a.A,null!=a.o&&(b.veCounter=a.o));return b},g4=function(a){a.Ra("cardstatechange",g.fm(a)&&g.gm(a)?1:0)},h4=function(a){if(window.document.createEvent){var b=window.document.createEvent("HTMLEvents");
b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=window.document.createEventObject(),a.fireEvent("onclick",b)},j4=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in i4?i4[c]:d4(a,c)},k4=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;
return c?d4(a,c):0},Toa=function(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.ud(d),b.apply(void 0,arguments))},a)},l4=function(a,b){g.Uc.call(this);
this.yi=a;this.Qn=b;this[g.uc]=!1},m4=function(a,b){var c=":"+(g.mw.getInstance().g++).toString(36);
b.setAttribute("result",c);a.appendChild(b);return c},n4=function(a,b,c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",a);
b&&g.Fb(b,function(a,b){d.setAttribute(b,a)});
for(var e=2;e<arguments.length;e++)d.appendChild(arguments[e]);return d},s4=function(a,b,c,d){l4.call(this,a,b);
a=this.Qn;b=this.na();c?(b.setAttribute("stroke",c.g),b.setAttribute("stroke-opacity",c.o),c=c.ub(),g.y(c)&&-1!=c.indexOf("px")?b.setAttribute("stroke-width",(0,window.parseFloat)(c)/Uoa(a)):b.setAttribute("stroke-width",c)):b.setAttribute("stroke","none");this.fill=d;c=this.Qn;a=this.na();if(d instanceof o4)a.setAttribute("fill",d.H),a.setAttribute("fill-opacity",d.J);else if(d instanceof p4){b="lg-"+d.C+"-"+d.F+"-"+d.D+"-"+d.G+"-"+d.g+"-"+d.o;var e=b in c.o?c.o[b]:null;if(!e){var e=q4(c,"linearGradient",
{x1:d.C,y1:d.F,x2:d.D,y2:d.G,gradientUnits:"userSpaceOnUse"}),f="stop-color:"+d.g;g.qa(d.A)&&(f+=";stop-opacity:"+d.A);f=q4(c,"stop",{offset:"0%",style:f});e.appendChild(f);f="stop-color:"+d.o;g.qa(d.B)&&(f+=";stop-opacity:"+d.B);d=q4(c,"stop",{offset:"100%",style:f});e.appendChild(d);e=r4(c,b,e)}a.setAttribute("fill","url(#"+e+")")}else a.setAttribute("fill","none")},Voa=function(a,b){return b},Woa=function(a,b){var c=m4(a,n4("feOffset",{"in":b,
dx:"-7",dy:"-7"})),c=m4(a,n4("feGaussianBlur",{"in":c,stdDeviation:"3"})),c=m4(a,n4("feColorMatrix",{"in":c,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"})),d=m4(a,n4("feColorMatrix",{"in":b,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"})),d=m4(a,n4("feGaussianBlur",{"in":d,stdDeviation:"1"})),c=m4(a,n4("feComposite",{operator:"out","in":c,in2:d}));return m4(a,n4("feComposite",{operator:"over","in":b,in2:c}))},Xoa=function(a,b){var c=m4(a,n4("feGaussianBlur",
{"in":b,
stdDeviation:"1.8"})),c=m4(a,n4("feDiffuseLighting",{"in":c,surfaceScale:"4",diffuseConstant:"1"},n4("feDistantLight",{azimuth:"270",elevation:"15","lighting-color":"white"}))),c=m4(a,n4("feComposite",{"in":c,in2:b,operator:"in"}));return m4(a,n4("feComposite",{in2:c,"in":b,operator:"arithmetic",k2:1,k3:.5,k4:0}))},t4=function(a,b,c,d){s4.call(this,a,b,c,d)},u4=function(a,b){l4.call(this,a,b)},v4=function(){},x4=function(){w4||(w4=new g.Fd(400),w4.start());
return w4},Zoa=function(a){var b=[];
Yoa(a,function(a,d){switch(a){case 0:b.push("M");Array.prototype.push.apply(b,d);break;case 1:b.push("L");Array.prototype.push.apply(b,d);break;case 2:b.push("C");Array.prototype.push.apply(b,d);break;case 3:var c=d[3];b.push("A",d[0],d[1],0,180<Math.abs(c)?1:0,0<c?1:0,d[4],d[5]);break;case 4:b.push("Z")}});
return b.join(" ")},y4=function(a,b,c,d){s4.call(this,a,b,c,d)},z4=function(a,b){l4.call(this,a,b)},A4=function(a,b,c,d,e){g.nw.call(this,e);
this.width=a;this.height=b;this.A=c||null;this.O=d||null},Uoa=function(a){var b=a.Yg();
return b?b.width/(a.A?new g.ue(a.A,a.O):a.Yg()).width:0},o4=function(a,b){this.H=a;
this.J=null==b?1:b},p4=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=g.p(k)?k:null;this.B=g.p(l)?l:null},B4=function(a,b,c){var d=(c="xy"==c||"yy"==c)?360:640;
return(d+((c?a.height:a.width)-d)*b)/d},C4=function(a,b,c){var d=(c="xx"==c||"xy"==c)?640:360;
return(d+((c?a.width:a.height)-d)*b)/d},D4=function(a){a=a.replace(/^(https?:)?\/\//,"");
a=a.split("/",1);return!a||1>a.length||!a[0]?[]:a[0].toLowerCase().split(".").reverse()},$oa=function(a){return(new g.nd(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,
_c:{jsl:{h:a.gapiHintParams}},callback:b},d=g.ra(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||g.Yb(d,{_c:{jsl:{h:g.$g("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||g.$g("GAPI_HINT_OVERRIDE")){var e=g.Jh(window.document.location.href).gapi_jsh;e&&g.Yb(d,{_c:{jsl:{h:e}}})}g.gu("client",d)}catch(f){g.eh(f)}})).then(function(){})},apa=function(a){var b={};
a.analyticsChannelData&&(b.analyticsDatas=(0,g.Q)(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}},bpa=function(a){var b=n4("filter",{filterUnits:"userSpaceOnUse"}),c="SourceGraphic";
(0,g.F)(a,function(a){a:{switch(a){case "bevel":a=Xoa;break a;case "dropshadow":a=Woa;break a}a=Voa}c=a(b,c)});
return b},E4=function(a,b,c,d,e){A4.call(this,a,b,c,d,e);
this.o={};this.N=g.pc&&!g.nc(526);this.J=new g.Ev(this)},q4=function(a,b,c){a=a.H.g.createElementNS("http://www.w3.org/2000/svg",b);
c&&F4(a,c);return a},F4=function(a,b){for(var c in b)a.setAttribute(c,b[c])},G4=function(a,b,c,d){b=q4(a,"path",{d:Zoa(b)});
c=new y4(b,a,c,d);a.C.na().appendChild(c.na())},r4=function(a,b,c){if(b in a.o)return a.o[b];
var d="_svgdef_"+cpa++;c.setAttribute("id",d);a.o[b]=d;a.G.appendChild(c);return d},H4=function(){this.Aa=[];
this.Ia=[];this.Md=[]},I4=function(a,b,c){0==g.Ua(a.Aa)?a.Md.length-=2:(a.Aa.push(0),a.Ia.push(1));
a.Md.push(b,c);a.pd=a.Ce=[b,c]},J4=function(a,b,c,d){var e=a.pd[0]-b*Math.cos(d*Math.PI/180)+b*Math.cos((d+90)*Math.PI/180),f=a.pd[1]-c*Math.sin(d*Math.PI/180)+c*Math.sin((d+90)*Math.PI/180);
a.Aa.push(3);a.Ia.push(1);a.Md.push(b,c,d,90,e,f);a.cj=!1;a.pd=[e,f]},Yoa=function(a,b){for(var c=a.Md,d=0,e=0,f=a.Aa.length;e<f;e++){var k=a.Aa[e],l=dpa[k]*a.Ia[e];
b(k,c.slice(d,d+l));d+=l}},K4=function(a,b,c,d,e,f,k,l,m,n,q){this.x=a;
this.y=b;this.hj=c;this.A=d;this.t=e;this.H=f;this.C=k;this.D=l;this.B=m;this.o=n;this.g=q},N4=function(a,b){var c=L4(b,M4(a,new g.yf(a.x,a.y,a.hj,a.A),b.g)),d=b.g,e=c.clone();
d&&!d.contains(c)&&(c.width<d.width?e.left=g.ne(c.left,d.left,d.left+d.width-c.width):(e.left=d.left,e.width=d.width),c.height<d.height?e.top=g.ne(c.top,d.top,d.top+d.height-c.height):(e.top=d.top,e.height=d.height));return e},M4=function(a,b,c){var d=a.C,e=a.D,f=a.g?a.g:"xy",k=C4(c,a.B,f);
a=B4(c,a.o,f);var f=640*b.width*k/100,l=360*b.height*a/100;return new g.yf(0==d?640*b.left*k/100:0<d?d:c.width+d-f,0==e?360*b.top*a/100:0<e?e:c.height+e-l,f,l)},epa=function(a,b,c,d){this.value=a;
this.target=b;this.showLinkIcon=c;this.g=d},O4=function(a){return a.value?a.value:null},fpa=function(a){if(null==a)return 0;
if("never"==a)return-1;a=a.split(":");if(3<a.length)return 0;var b=0,c=1;(0,g.F)(a,function(a){a=(0,window.parseFloat)(a);0>a&&(c=-c);b=60*b+Math.abs(a)});
return c*b},P4=function(a,b){return g.y(a)?(0,window.parseFloat)(a):b},Q4=function(a,b){return"true"==a||"false"==a?"true"==a:b},R4=function(a,b,c){for(var d in b)if(b[d]==a)return a;
return c},S4=function(a){return g.y(a)?a:""},U4=function(a){this.g=a||g.eq();
T4||(T4=$oa(this.g))},gpa=function(a,b,c,d){var e={path:"/youtubei/"+a.g.innertubeApiVersion+"/"+b,
headers:{"X-Goog-Visitor-Id":g.$g("VISITOR_DATA")},method:"POST",body:g.tf(c)},f=(0,g.z)(a.B,a);T4.then(function(){f();g.u("gapi.client.request")(e).execute(d||g.w)})},V4=function(a,b,c){b.eventTimeMs=Math.round((0,g.wl)());
b.lactMs=g.Qk();c&&(b.clientData=apa(c));g.Jq({endpoint:"log_interaction",$v:b},a)},hpa=function(a){return g.Wa(a,function(a){return"dropshadow"==a})?new g.xf(0,7,7,0):new g.xf(0,0,0,0)},ipa=function(a){a=(0,g.Xe)(a,function(a){return a in W4});
g.vb(a,function(a,c){return W4[a]-W4[c]});
return a},X4=function(a,b,c){this.A=a;
this.g=b;this.o=null==c?1:c},Y4=function(a,b,c){this.id=a;
this.timestamp=b.timestamp||0;this.type=b.card_type;this.teaserText=b.teaser_text;this.teaserDurationMs=b.teaser_duration_ms;this.startMs=b.start_ms;this.autoOpen=b.auto_open||!1;this.hd=b.session_data||{};this.Mb=c;this.sponsored=b.sponsored||!1;a=b.tracking||{};this.o={QE:a.impression,click:a.click,close:a.close,DK:a.teaser_impression,rp:a.teaser_click};b=b.tracking_params||{};this.C=new g.aq(b.card);this.F=new g.aq(b.teaser);this.D=new g.aq(b.icon)},jpa=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=k;this.B=l},Z4=function(a,b,c,d,e,f,k,l,m,n,q,t,v){K4.call(this,a,b,c,d,e,l,m,n,q,t,v);
this.F=f;this.G=k},$4=function(a,b){if(!a)return null;
var c=P4(a.x,0),d=P4(a.y,0),e=P4(a.w,0),f=P4(a.h,0),k=fpa(a.t),l=P4(a.scaleSlope,1);return b(c,d,e,f,k,P4(a.d,0),P4(a.px,0),P4(a.py,0),P4(a.scaleSlopeX,l),P4(a.scaleSlopeY,l),R4(a.scaleDimension,kpa,"xy"))},lpa=function(a,b,c){c=c.replace(/\/(u|b)\/[0-9]+/g,"");
var d=/^[0-9]+$/;a&&d.test(a)&&(c="/b/"+a+c);b&&d.test(b)&&(c="/u/"+b+c);return c},a5=function(a){var b;
(b=a)&&!(b=1<a.length?"/"==a.charAt(0)&&"/"!=a.charAt(1):"/"==a)&&(b=D4(a),b="com"==b[0]&&"youtube"==b[1]||"be"==b[0]&&"youtu"==b[1]);return b?-1==a.indexOf("/redirect?"):!1},b5=function(a){if(!a)return null;
var b=S4(a.value);if(!b)return null;var c=R4(a.target,mpa,"current");return null==c?null:new epa(b,c,Q4(a.show_link_icon,!0),null!=a.pause_on_navigation?a.pause_on_navigation:!0)},c5=function(a,b,c,d,e){a=(0,window.parseFloat)(a);
if(null!=a&&!(0,window.isNaN)(a)){if(d)return g.ne(a,b,c);if(a>=b&&a<=c)return a}return e},d5=function(a,b){if(null==a)return b;
var c=(0,window.parseInt)(a,0);if((0,window.isNaN)(c))return b;c=c.toString(16);return"#"+"000000".substring(0,6-c.length)+c},e5=function(a,b){g.bc.call(this,a);
this.x=b.o[0];this.y=b.o[1];this.z=b.o[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.F;this.state=b.g},f5=function(a){a=g.ua(a);
delete g.$v[a];g.Sb(g.$v)&&g.Yv&&g.Yv.stop()},g5=function(){return g.ym("enable_youtubei_innertube")?g.Qq:U4},h5=function(a){return new g.yf(a.left,a.top,a.right-a.left,a.bottom-a.top)},npa=function(a,b){var c=a.top-b.y,d=b.x-a.left-a.width,e=b.y-a.top-a.height,f=a.left-b.x,k=Math.max(c,d,e,f);
if(0>k)return"i";switch(k){case c:return"t";case d:return"r";case e:return"b";case f:return"l"}return"i"},i5=function(a,b,c){if(c.length&&(b=g.Ce("g",void 0,b),b.length)){var d=ipa(c);
if(d){c="effects:"+(d?d.join("|"):"");var e=c in a.o?a.o[c]:null;e?a=e:(d=bpa(d),a=0<d.childNodes.length?r4(a,c,d):null)}else a=null;a&&b[0].setAttribute("filter","url(#"+a+")")}},j5=function(a,b){var c=g.zf(a);
c.expand(hpa(b));return h5(c)},k5=function(a,b,c,d){var e=a.G;
e?a=new p4(e.C*b/100,e.F*c/100,e.D*b/100,e.G*c/100,e.g,e.o,e.A,e.B):(b=a.o,a=new o4(a.bgColor,d?Math.max(b,.9):b));return a},l5=function(a,b,c){var d=new H4;
I4(d,a.left+b+c,a.top+c);d.dc(a.left+a.width-b-c,a.top+c);J4(d,b,b,-90);d.dc(a.left+a.width-c,a.top+a.height-b-c);J4(d,b,b,0);d.dc(a.left+b+c,a.top+a.height-c);J4(d,b,b,90);d.dc(a.left+c,a.top+b+c);J4(d,b,b,180);d.close();return d},m5=function(){this.g=!1;
this.C=this.o=null},n5=function(a,b,c){a.o?(a.o.setSize(b,c),a.o.clear()):(b=new E4(b,c,void 0,void 0,void 0),a.o=b,a.o.Gk(),a.C=g.M("DIV"),b=a.o.na(),a.C.appendChild(b));
return a.o},o5=function(a,b){this.start=a<b?a:b;
this.end=a<b?b:a},p5=function(a,b){var c="ivTriggerCondition:"+a;
return b?c+":"+b:c},opa=function(a){this.merchant=g.D(a.merchant);
this.price=g.D(a.price)},q5=function(a,b,c){Y4.call(this,a,b,c);
this.imageUrl=b.image_url;this.displayDomain=b.display_domain;this.showLinkIcon=b.show_link_icon;this.g=b.button_icon_url;this.title=b.title;this.customMessage=b.custom_message;this.url=b5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url});this.A=null;b.signin_url&&(this.A=b5({target:"current",value:b.signin_url}));this.H=b.signin_title||null;this.G=b.signin_message||null},ppa=function(a,b){this.state=a;
this.g=b},qpa=function(a,b,c,d){this.type=a;
this.o=b;this.g=c;this.A=d},r5=function(a){return a.o&&a.o.length?a.o[0]:a.g&&a.g.length?a.g[0]:a.A&&a.A.length?a.A[0]:null},rpa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x){this.B=a;
this.bgColor=b;this.D=c;this.g=d;this.o=e;this.H=f;this.C=k;this.textAlign=l;this.textSize=m;this.F=n;this.padding=q;this.effects=t;this.A=v;this.G=x},spa=function(a){if(!a)return null;
var b=P4(a.sx,0),c=P4(a.sy,0);return $4(a,function(a,e,f,k,l,m,n,q,t,v,x){return new Z4(a,e,f,k,l,b,c,m,n,q,t,v,x)})},s5=function(a){return a?$4(a,function(a,c,d,e,f,k,l,m,n,q,t){return new K4(a,c,d,e,f,k,l,m,n,q,t)}):null},t5=function(a,b){return b?b:a5(a)?"current":"new"},u5=function(a,b,c,d){(a=O4(a))?a5(a)?d=g.Mh(a,{feature:"iv",
src_vid:c,annotation_id:b}):(a?(b=D4(a),b="com"==b[0]&&"google"==b[1]&&"plus"==b[2]):b=!1,b&&d?(d=g.va(lpa,d.pageId,d.oc),a=new g.ig(a),g.mg(a,d(a.A)),d=a.toString()):d=a):d=null;return d},tpa=function(a){function b(a){return(0,g.Xe)(a.split(/ +/),function(a){return""!=a})}
return null==a?[]:b(a)},upa=function(a){function b(a){return null!=a&&!(0,window.isNaN)(a)}
return(a=a?new g.xf((0,window.parseFloat)(a.top),(0,window.parseFloat)(a.right),(0,window.parseFloat)(a.bottom),(0,window.parseFloat)(a.left)):null)&&b(a.top)&&b(a.right)&&b(a.bottom)&&b(a.left)?a:null},v5=function(a,b){if(null==a)return null;
if(g.oa(a)){var c=[];(0,g.F)(a,function(a){(a=b(a))&&c.push(a)});
return c}var d=b(a);return d?[d]:[]},w5=function(a){var b=/.+/;
return g.y(a)&&null!=b&&null!=a&&a.match(b)?a:""},x5=function(a){return g.na(a)&&a.length?a[0]:a},y5=function(a,b,c,d){g.aw.call(this);
if(!g.na(a)||!g.na(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.A=a;this.G=b;this.duration=c;this.D=d;this.o=[];this.progress=this.F=0;this.C=null},A5=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);
a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.F=1E3/(b-a.C);a.C=b;z5(a,a.progress);1==a.progress?(a.g=0,f5(a),a.gd(),a.Ri()):a.ib()&&a.Mo()},z5=function(a,b){g.ra(a.D)&&(b=a.D(b));
a.o=Array(a.A.length);for(var c=0;c<a.A.length;c++)a.o[c]=(a.G[c]-a.A[c])*b+a.A[c]},B5=function(a){V4(g5(),{click:{csn:g.Yq()||"",
visualElement:f4(a)}},void 0)},C5=function(a){return"rtl"==g.Yj(a,"direction")},D5=function(){m5.call(this);
this.B=0},E5=function(a,b,c){this.g={};
this.o=!1;this.C="ivTrigger:"+a;this.A=c;vpa(b,function(a,b){var c=p5(b.state,b.g);this.A.subscribe(c,(0,g.z)(this.B,this,c,a));this.g[c]=a},this)},F5=function(a,b,c,d,e){y5.call(this,b,c,d,e);
this.element=a},G5=function(a,b,c){Y4.call(this,a,b,c);
this.J=b.image_url;this.B=b.badge_symbol||"";this.priceText=b.price_text||"";this.title=b.title;this.g=b.meta_info;this.G=!!b.is_paygated;this.H=!!b.user_has_entitlement;this.url=b5({target:b.target||"new",value:b.url})},H5=function(a,b,c){Y4.call(this,a,b,c);
this.G=b.image_url;this.videoDuration=b.video_duration||null;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.B=!!b.is_live_now;this.url=b5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},I5=function(a,b,c){q5.call(this,a,b,c);
this.J=b.ypc_item_type;this.B=b.ypc_item_id;this.L=b.ypc_flow_type},J5=function(a,b,c){q5.call(this,a,b,c);
this.offers=[];a=b.offers||[];for(b=0;b<a.length;b++)this.offers.push(new opa(a[b]))},K5=function(a,b,c){Y4.call(this,a,b,c);
this.B=this.id.replace(/[^a-z0-9-]/gi,"-");this.title=b.title;this.choices=b.choices;this.g=b.hasOwnProperty("old_vote")?b.old_vote:null;this.A=null;b.signin_url&&(this.A=b5({target:"current",value:b.signin_url}));this.G=b.hasOwnProperty("xsrf_token")?b.xsrf_token:null},L5=function(a,b,c){Y4.call(this,a,b,c);
this.B=b.image_url;this.playlistVideoCount=b.playlist_video_count;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.url=b5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},M5=function(a,b){return g.t3&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())},N5=function(a,b,c){q5.call(this,a,b,c);
this.J=b.ypc_flow_type;this.B=b.innertube_request_params},O5=function(a,b,c){Y4.call(this,a,b,c);
this.channelId=b.channel_id;this.customMessage=b.custom_message;this.profileImageUrl=b.image_url;this.title=b.title;this.g=b.meta_info;this.url=b5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},wpa=function(a,b,c,d){this.g=a||[];
this.A=b||[];this.B=c;this.o=d;this.value=!1},vpa=function(a,b,c){(0,g.F)(a.g,g.va(b,!1),c);
(0,g.F)(a.A,g.va(b,!0),c)},P5=function(a){if(!a)return null;
var b=R4(a.state,xpa);a=w5(a.ref);return b?new ppa(b,a):null},ypa=function(a,b){this.o=a;
this.g=b},Apa=function(a){if(!a)return null;
var b=R4(a.type,zpa,"rect"),c=v5(a.rectRegion,s5),d=v5(a.anchoredRegion,spa);a=v5(a.shapelessRegion,s5);return new qpa(b,c,d,a)},Q5=function(a){if(!a)return null;
var b=d5(a.fgColor,"#1A1A1A"),c=d5(a.bgColor,"#FFF"),d=d5(a.borderColor,"#000"),e=c5(a.borderWidth,0,5,!1,0),f=c5(a.bgAlpha,0,1,!1,.8),k=d5(a.highlightFontColor,"#F2F2F2"),l=c5(a.highlightWidth,0,5,!1,3),m=S4(a.textAlign),n=c5(a.textSize,3.3,30.1,!0,3.6107),q=S4(a.fontWeight),t=upa(a.padding),v=tpa(a.effects),x=c5(a.cornerRadius,0,10,!0,0);if(a=x5(a.gradient)){var A=c5(a.x1,0,100,!0,0),G=c5(a.y1,0,100,!0,0),I=c5(a.x2,0,100,!0,100),K=c5(a.y2,0,100,!0,100),$a=d5(a.color1,"#FFF"),sb=d5(a.color2,"#000");
a=new jpa(A,G,I,K,$a,sb,c5(a.opacity1,0,100,!0,100),c5(a.opacity2,0,100,!0,0))}else a=null;return new rpa(b,c,d,e,f,k,l,m,n,q,t,v,x,a)},Bpa=function(a,b,c){this.type=a;
this.trigger=b;this.url=c},R5=function(a,b){this.oa=a;
this.context=b;this.Fp=!1;this.N=0},S5=function(a,b,c,d,e,f){b=new g.zm(b,c,{id:d});
b.namespace="annotations_module";e&&(b.g||(b.g=new g.Ef)).subscribe("onEnter",e,a);f&&(b.g||(b.g=new g.Ef)).subscribe("onExit",f,a);g.mm(a.context.o,[b])},Cpa=function(a){return(0,g.E)()-a.N},Dpa=function(a,b,c,d,e,f,k,l){var m=(0,g.z)(function(){l&&this.context.o.kd();
g.hv(b,"current"==c?"_top":void 0,d)},a);
"new"==c&&(m(),m=null);var n={};n.interval=Cpa(a);T5(a.context.logger,e,m,n,f,k);a5(b)||(a=d.itct)&&B5(new g.aq(a))},U5=function(a){var b=g.Yq()||"",c=g5();
a=(0,g.Q)(a,function(a){return f4(a)});
V4(c,{visibilityUpdate:{csn:b,visualElements:a}})},Hpa=function(a){var b=g.Yj(a,"fontSize"),c;
c=(c=b.match(Epa))&&c[0]||null;if(b&&"px"==c)return(0,window.parseInt)(b,10);if(g.Je){if(String(c)in Fpa)return d4(a,b);if(a.parentNode&&1==a.parentNode.nodeType&&String(c)in Gpa)return a=a.parentNode,c=g.Yj(a,"fontSize"),d4(a,b==c?"1em":b)}c=g.M("SPAN",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});a.appendChild(c);b=c.offsetHeight;g.Ve(c);return b},Jpa=function(a,b){Ipa(a,function(c){return new E5(a.id,c,b)})},V5=function(a,b){return b?new g.yf(a.x+
b.left,a.y+b.top,b.width,b.height):null},W5=function(){D5.call(this)},X5=function(){m5.call(this)},Y5=function(){m5.call(this)},Z5=function(a,b,c){R5.call(this,a,b);
this.annotation=c;this.isActive=!1},$5=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");
F5.apply(this,arguments)},a6=function(a,b,c){this.g=a;
this.A=b;this.C=c;this.B=new g.It(null)},Kpa=function(a,b){var c=["ul",
"",{role:"radiogroup"}];(0,g.F)(b.choices,function(a){c.push(["li",b.B+"-"+a.index.toString(),["label","",["input","iv-card-poll-choice-input",{type:"checkbox",role:"radio",name:b.B+a.index.toString(),value:a.index.toString(),"data-poll-choice-index":a.index.toString()}],["span","iv-card-poll-choice-text",["span","iv-card-poll-choice-percent"],b6(this,"span",void 0,a.desc)]],["div","iv-card-poll-result",["div","iv-card-poll-result-bar"]]])},a);
var d={};b.A&&(d["aria-label"]=g.P("YTP_DRAWER_POLL_TITLE_ARIA_LABEL",{POLL_TITLE:b.title}));var e=["iv-card","iv-card-poll"],d=[["div","iv-card-content",b6(a,"h2",d,b.title),["form","",["fieldset","",c]]]];b.A&&(e.push("iv-card-unavailable"),d.push(["div",["iv-card-sign-in"],["h2","",g.P("YTP_DRAWER_POLL_SIGNIN_TITLE")],["a",["iv-card-sign-in-button","iv-button"],{href:O4(b.A)},["span",["iv-button-content"],g.P("YTP_SIGN_IN")]]]));e=new g.V(["div",e].concat(d));d=e.element;c6(b,d);Roa(a.g.g,d,g.va(a.F,
b),a);(0,g.F)(g.De("iv-card-poll-choice-input",d),function(a){this.g.g.S(a,"focus",g.va(this.o,!0));this.g.g.S(a,"blur",g.va(this.o,!1))},a);
b.A&&a.A(g.L("iv-card-sign-in-button",d),b.A,b.id,b.hd,b.Mb,b.o.click,5);return e},h6=function(a,b,c,d){var e=d6(a,b.url,b.id),f=b.displayDomain?["div",
"iv-card-image-text",b.displayDomain]:"",k=e6(a,b),l=["iv-card"];b.A&&l.push("iv-card-unavailable");e=["div",l,["a","iv-click-target",{href:e},f6(b.imageUrl,f),["div","iv-card-content",b6(a,"h2",void 0,b.title),k]]];b.A&&(e=e.concat([["div",["iv-card-sign-in"],b6(a,"h2",void 0,b.H||""),["p","",b.G],["a",["iv-card-sign-in-button","iv-button"],{href:O4(b.A)},b6(a,"span","iv-button-content",g.P("YTP_SIGN_IN"))]]]));e=new g.V(e);g6(a,e,b,c,d);return e},j6=function(a,b,c){var d=d6(a,b.url,b.id),e=["yt-badge",
"standalone-ypc-badge-renderer-icon",b.H?"standalone-ypc-badge-renderer-icon-purchased":"standalone-ypc-badge-renderer-icon-available"],f={},e=b.G&&b.B?["span",e,f,b.B]:"";c=["div",["iv-card",c],["a","iv-click-target",{href:d},f6(b.J,e?["div","iv-card-image-text",e,b.priceText]:""),["div","iv-card-content",["h2","iv-card-primary-link",b.title],i6(a,b)]]];c=new g.V(c);g6(a,c,b);return c},k6=function(a,b){return b.customMessage?b6(a,"div","iv-card-message",b.customMessage):""},f6=function(a,b){var c=
["div",
"iv-card-image",{style:"background-image: url("+a+");"}];b&&c.push(b);return c},i6=function(a,b){if(!b.g||0==b.g.length)return"";
var c=["ul","iv-card-meta-info"];(0,g.F)(b.g,function(a){c.push(b6(this,"li","",a))},a);
return c},b6=function(a,b,c,d){c?g.y(c)?c={"class":c}:g.na(c)&&(c={"class":c.join(" ")}):c={};
c.dir=g.Jt(a.B,d);return[b,c,d]},e6=function(a,b){if(!b.customMessage)return"";
var c=["iv-card-action","iv-card-primary-link"],d={};b.g&&(c.push("iv-card-action-icon"),d.style="background-image: url("+b.g+");");d.dir=g.Jt(a.B,b.customMessage);c=["div",c,d,["span","",b.customMessage]];b.showLinkIcon&&(c.push("\u00a0"),c.push(["span","iv-card-link-icon"]));return c},c6=function(a,b){var c=0;
(0,g.F)(a.choices,function(a){c+=a.count});
for(var c=c||1,d=0;d<a.choices.length;d++){var e=a.choices[d],f=g.L(a.B+"-"+e.index.toString(),b),e=e.count/c;null==a.g&&(e=0);g.O(f.getElementsByTagName("label")[0],"iv-card-poll-choice-checked",a.g==d);f.getElementsByTagName("input")[0].checked=a.g==d;g.df(g.L("iv-card-poll-choice-percent",f),g.P("YTP_DRAWER_POLL_PERCENT",{PERCENT:Math.floor(100*e).toFixed(0)}));g.Uj(g.L("iv-card-poll-result-bar",f),"transform","scaleX("+e.toFixed(2)+")")}g.O(b,"iv-card-poll-voted",null!=a.g);g.O(b,"iv-card-poll-expanded",
null!=a.g&&1<a.choices.length)},l6=function(a,b,c,d){d?(c&&a.g.videoData.o||a.g.o.kd(),a.g.o.isFullscreen()&&g.Zl(a.g.o),T5(a.g.logger,b.Mb,d,void 0,b.o.click,5)):b.url&&a.C(b.url,b.id,b.hd,b.Mb,b.o.click||[],5)},d6=function(a,b,c){return b?u5(b,c,a.g.videoData.videoId,a.g.C):null},g6=function(a,b,c,d,e){c.A&&m6(a,g.De("iv-card-sign-in-button",b.element),c,c.A,e);
c.url&&m6(a,g.De("iv-click-target",b.element),c,c.url,d)},m6=function(a,b,c,d,e){(0,g.F)(b,function(a){if(e){var b=(0,g.z)(function(a){a.stopPropagation();
a.preventDefault();e();return!1},this);
this.g.g.S(a,"click",b)}else d&&this.A(a,d,c.id,c.hd,c.Mb,c.o.click,5)},a)},n6=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x,A){this.id=a;
this.author=b;this.type=c;this.style=d;this.B=e;this.o=f;this.A=k||[];this.F=l||[];this.g=m;this.D=n;this.C=q;this.htmlBlob=v;this.data=x;this.Mb=A},o6=function(a){return(a=Lpa(a,function(a){return"openUrl"==a.type&&null!=a.url}))?a.url:null},q6=function(a){return p6(a,function(a){return"click"==a.trigger})},p6=function(a,b){return(0,g.wh)(a.A,b,void 0)},Mpa=function(a,b,c){(0,g.F)(a.A,b,c)},Lpa=function(a,b){return g.Wa(a.A,b,void 0)},r6=function(a,b,c){(0,g.F)(a.F,b,c)},Ipa=function(a,b){(0,g.Q)(a.F,
b,void 0)},t6=function(a){return(a=s6(a))?r5(a):null},s6=function(a){a.o?(a=a.o,a=a.g.length?a.g[0]:null):a=null;
return a},u6=function(a,b){var c=t6(a);
return c&&b?B4(b,c.o,c.g?c.g:"xy"):1},Npa=function(a){if(!a)return null;
var b=v5(a.condition,P5),c=v5(a.notCondition,P5),d=Q4(a.show_delay,!1);a=Q4(a.hide_delay,!1);return b||c?new wpa(b,c,d,a):null},v6=function(a,b){this.g=a;
this.o=b||null},L4=function(a,b){var c;
c=a.o?N4(a.o,new v6(a.g)):a.g;var d=b.clone(),e=c.left;c=c.top;e instanceof g.re?(d.left+=e.x,d.top+=e.y):(d.left+=e,g.qa(c)&&(d.top+=c));return d},Qpa=function(a){if(!a)return null;
var b=R4(a.type,Opa),c=R4(a.trigger,Ppa),d=b5(x5(a.url));x5(a.subscribeData);return b?new Bpa(b,c,d):null},Rpa=function(a){return 3*a*a-2*a*a*a},Spa=function(a){return Math.pow(a,3)},w6=function(a,b){return(b&8&&C5(a)?b^4:b)&-9},x6=function(a,b,c){var d=g5();
a={csn:a,parentVisualElement:f4(b),visualElements:(0,g.Q)(c,function(a){return f4(a)})};
V4(d,{attachChild:a},void 0)},Tpa=function(a){var b=0;
-1!=a.indexOf("h")&&(a=a.split("h"),b=3600*a[0],a=a[1]);-1!=a.indexOf("m")&&(a=a.split("m"),b=60*a[0]+b,a=a[1]);-1!=a.indexOf("s")?(a=a.split("s"),b=1*a[0]+b):b=1*a+b;return b},y6=function(a,b){b.match(/\sstyle\s*=/);
a.innerHTML=b},z6=function(a,b,c){this.A=a;
this.annotation=b;this.g=c;this.o=null;this.C=this.isVisible=!1;Jpa(b,a)},Upa=function(a){g.Ff(a.A,"resize",a.D,a);
g.Ff(a.A,"onVideoAreaChange",a.B,a)},A6=function(a){a.o&&(a.o.stop(),a.o=null)},Vpa=function(a,b,c,d,e){this.g=a;
this.$=b;this.D=c;this.fa=d;this.da=e;this.N=!1;this.F=new g.Tv(this);this.P=this.C=this.G=this.O=this.o=null;this.ca=!1;this.ba=this.J=this.L=null;this.Lo=new g.kw(this.nN,100,this);this.H=new g.Kd(this.$t,500,this);this.V=this.A=this.B=null},Wpa=function(a,b){var c=(0,g.z)(function(a,c,f){c=f?B6(this,c,(0,g.z)(f,this)):B6(this,c);
this.F.S(b,a,c)},a);
c("mouseover","d",a.Ay);c("mouseout","c",a.Of);c("click","a");c("touchend","a")},Xpa=function(a){if(a.g.C){var b;
p6(a.g,function(a){return"close"==a.type})?b=a.o:(a.B=g.M("DIV","annotation-close-button"),g.R(a.B,!1),g.bh(a.B,"annotation_id",a.g.id),a.o.appendChild(a.B),b=a.B);
var c=function(a){a.stopPropagation()};
a.F.S(b,"click",B6(a,"b",c));a.F.S(b,"touchend",B6(a,"b",c))}},B6=function(a,b,c){return(0,g.z)(function(a){if(this.da)c&&c(a);
else if(a.event.target instanceof window.Element){var d=a.event.target;g.R(d,!1);try{var f=window.document.elementFromPoint(a.event.clientX,a.event.clientY);if(g.mf(f,"annotation")){var k=window.document.createEvent("MouseEvent");k.initMouseEvent(a.event.type,a.event.bubbles,a.event.cancelable,a.event.view,a.event.detail,a.event.screenX,a.event.screenY,a.event.clientX,a.event.clientY,a.event.ctrlKey,a.event.altKey,a.event.shiftKey,a.event.metaKey,a.event.button,a.event.relatedTarget);f.dispatchEvent(k)}}finally{g.R(d,
!0)}}d=g.nk(a.target);a=new g.re(a.clientX,a.clientY);"c"==b&&d.contains(a)||this.fa.Lb(b,this.g)},a)},D6=function(a){if(a.o||a.A){var b=t6(a.g);
if(b){var c=C6(a);if(a.o){var b=N4(b,c),d=g.cZ(g.Xl(a.D));g.lk(a.o,b.width,b.height);g.ak(a.o,b.left,b.top);a.O=new g.yf(d.left+b.left,d.top+b.top,b.width,b.height);var e;e=(e=t6(a.g))&&d?C4(d,e.B,e.g?e.g:"xy"):1;var f=u6(a.g,d),d=a.g.g;d.padding?d=d.padding:(d="speech"==a.g.style?1.6:.8,d=new g.xf(d,d,d,d));d=new g.xf(360*d.top*f/100,640*d.right*e/100,360*d.bottom*f/100,640*d.left*e/100);a.C&&(d.right+=1.5*c.g.height/100);a.o.style.padding=d.top+"px "+d.right+"px "+d.bottom+"px "+d.left+"px";"label"==
a.g.style&&a.G&&(a.G.style.padding=a.o.style.padding);var d=c.g,k=!1,l=0,m=0,n;n=g.cZ(g.Xl(a.D));var q=e4(a.D.app.B.J);g.Af(n,q)?n=null:(q.top+=20,q.height-=40,"player_relative"!=a.g.D&&(q.left-=n.left,q.top-=n.top),n=q);n&&(l=n.top-(b.top+b.height),m=b.top-(n.top+n.height),k=0<l||0<m);if(k&&n){d=n;e=l;var f=m,t;a.C&&(m=Ypa(a,23,b,e,f),a.B&&(t=43-m.width,0<t&&(b.left+m.left-t>d.left&&(m.left-=t),m.width+=t)),t=m,g.lk(a.C,m.width,m.height),g.ak(a.C,m.left,m.top));a.B&&(t?b=new g.re(t.left+t.width-
23-18,a.ca?t.top+2:t.top+t.height-18-2):(t=Ypa(a,18,b,e,f),b=new g.re(t.left,t.top),g.lk(a.B,t.width,t.height)),g.ak(a.B,b));a.P=new g.yf(a.O.left+t.left,a.O.top+t.top,t.width,t.height);a.L=a.F.S(g.Xl(a.D),"mousemove",a.DH)}else a.C&&(t=e/f*d.height*4.2/100,t=new g.ue(t,t),"highlight"==a.g.type||"label"==a.g.style?(e=1.5*d.height/100,t=new g.yf(b.width-t.width-e,b.height-t.height-e,t.width,t.height)):t=new g.yf(b.width-t.width-3*d.height/100,(b.height-t.height)/2,t.width,t.height),g.lk(a.C,t.width,
t.height),g.ak(a.C,t.left,t.top)),a.B&&(t=9<=d.left+d.width-(b.left+b.width),e=9<=b.top-d.top,g.ak(a.B,t&&e?new g.re(b.width-9,-9):t?new g.re(b.width-9,45<b.height?9:b.height-9):e?new g.re(45<b.width?b.width-9-18:-9,-9):b.width/d.width>b.height/d.height?new g.re(45<b.width?b.width-9-18:-9,b.height-9):new g.re(-9,45<b.height?9:b.height-9)))}a.A&&a.A.A(a.g,c);if(a.o){c=a.o;b=a.g.g;c.style.color="highlightText"==a.g.style?b.H:b.B;t=g.cZ(g.Xl(a.D));c.style.fontSize=360*b.textSize*u6(a.g,t)/100+"px";t=
a.g.style;c.style.textAlign=b.textAlign?b.textAlign:"title"==t||"highlightText"==t?"center":"left";b.F&&(c.style.fontWeight=b.F);a=a.o;c=a.style.overflow;t=(b=g.L("annotation-link-icon",a))?g.pk(b):!1;e=(d=g.L("annotation-close-button",a))?g.pk(d):!1;t&&g.R(b,!1);e&&g.R(d,!1);m=f="";if(l=g.L("inner-text",a))f=l.style.overflow,m=l.style.position,l.style.overflow="visible",l.style.position="static";a.style.overflow="scroll";if(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth){n=k=Hpa(a);for(var q=
5,v=Math.floor(k/2);v;)a.scrollHeight<=a.offsetHeight&&a.scrollWidth<=a.offsetWidth?(q=n,n=Math.min(n+v,k)):n=Math.max(n-v,q),v=Math.floor(v/2),a.style.fontSize=n+"px";n!=q&&(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth)&&(a.style.fontSize=q+"px")}a.style.overflow=c;l&&(l.style.overflow=f,l.style.position=m);e&&g.R(d,!0);t&&g.R(b,!0)}}}},Ypa=function(a,b,c,d,e){var f=0<e;
b=new g.yf(0,c.height-b,Math.max(c.width,b),b);0<d&&(b.top=c.height,20<d&&(b.height+=d-20),g.N(a.o,"annotation-extend-down"));f&&(b.top=-b.height,20<e&&(c=e-20,b.top-=c,b.height+=c),g.N(a.o,"annotation-extend-up"),a.ca=!0);return b},E6=function(a){return"label"!=a.g.style||a.A.g},C6=function(a){var b;
b=g.cZ(g.Xl(a.D));if("player_relative"==a.g.D){var c=g.Xl(a.D).Ua();b=new g.yf(-b.left,-b.top,c.width,c.height)}else b=new g.yf(0,0,b.width,b.height);return new v6(b,a.V?t6(a.V):null)},F6=function(a,b,c){Z5.call(this,a,b,c);
this.F=this.B=this.G=!1;this.D=5E3;this.A=null;this.bi=g.M("DIV","iv-promo-contents");this.g=this.o=this.$c=null;this.C=new g.Kd(function(){this.$c.setAttribute("aria-hidden",!0);g.R(this.o,!1);g.R(this.g,!0)},700,this)},Zpa=function(a){var b=a.annotation.data,c;
if("cta"==a.annotation.style)c=6;else if("video"==a.annotation.style||"playlist"==a.annotation.style)c=7;a.D=b.collapse_delay_ms||a.D;var d=["iv-promo","iv-promo-inactive"];a.na().setAttribute("aria-hidden",!0);a.na().setAttribute("aria-label",g.P("YTP_INVIDEO_PROMOTION_ARIA_LABEL"));a.na().tabIndex=0;var e=o6(a.annotation),f;if(b.image_url){f=g.M("DIV",["iv-promo-img","iv-click-target"]);var k=g.M("IMG",{src:b.image_url,"aria-hidden":"true"});f.appendChild(k);b.video_duration&&!b.is_live?(k=g.M("SPAN",
"iv-promo-video-duration",b.video_duration),f.appendChild(k)):b.playlist_length&&(k=g.M("SPAN","iv-promo-playlist-length",b.playlist_length.toString()),f.appendChild(k));e&&a.Ch(f,e,a.annotation.id,b.session_data,a.annotation.Mb,void 0,c)}e?a.$c=g.M("A",{href:O4(e),"class":"iv-promo-txt"}):a.$c=g.M("DIV","iv-promo-txt");var l,m,n,q;switch(a.annotation.style){case "cta":case "website":l=g.M("P",null,g.M("STRONG",null,b.text_line_1));m=g.M("P",null,g.M("SPAN","iv-promo-link",b.text_line_2));b.text_line_3&&
(d.push("iv-promo-website-card-cta"),n=g.M("P",null,g.M("SPAN","iv-promo-action-text",b.text_line_3)));g.N(a.$c,"iv-click-target");e&&a.Ch(a.$c,e,a.annotation.id,b.session_data,a.annotation.Mb,void 0,c);break;case "playlist":case "video":l=g.M("P",null,g.M("SPAN",null,b.text_line_1));m=g.M("P",null,g.M("STRONG",null,b.text_line_2));b.is_live&&(l=m,m=g.M("SPAN",["yt-badge","iv-promo-badge-live"],g.P("YTP_LIVE_NOW")));g.N(a.$c,"iv-click-target");e&&a.Ch(a.$c,e,a.annotation.id,b.session_data,a.annotation.Mb,
void 0,c);d.push("iv-promo-video");break;case "vote":l=g.M("P",null,g.M("STRONG",null,b.text_line_1)),m=g.M("P",null,g.M("SPAN",null,b.text_line_2)),q=g.M("DIV","iv-promo-button-container"),c=g.M("BUTTON",["iv-button","iv-promo-button"],g.M("SPAN","iv-button-content",b.button_text)),a.context.g.S(c,"click",function(a){a.stopPropagation();T5(this.context.logger,this.annotation.Mb,null,{contest_vote:"1"},(b.tracking||{}).vote);a=this.annotation.data;this.$c=g.L("iv-promo-txt",this.bi);var c=g.L("iv-promo-button-container",
this.bi),d=g.M("DIV",["iv-promo-txt","iv-click-target"]),e=g.M("P",null,g.M("STRONG",null,a.text_line_3)),f=g.M("P",null,a.text_line_4);g.Re(d,e,f);g.Ve(c);g.We(d,this.$c);g.jh(this.na(),"iv-promo-with-button");(c=o6(this.annotation))&&this.Ch(d,c,this.annotation.id,a.session_data,this.annotation.Mb)},a),q.appendChild(c),d.push("iv-promo-with-button")}l&&a.$c.appendChild(l);
m&&a.$c.appendChild(m);n&&a.$c.appendChild(n);a.bi.appendChild(a.$c);q&&a.bi.appendChild(q);l=g.M("DIV","iv-promo-actions");a.g=g.M("BUTTON",["iv-promo-expand","ytp-button"]);a.g.title=g.P("YTP_EXPAND");a.context.g.S(a.g,"click",g.va(a.Wn,5E3),a);l.appendChild(a.g);g.R(a.g,!1);a.context.g.S(a.na(),"mouseover",a.pD,a);a.context.g.S(a.na(),"mouseout",a.oD,a);a.context.g.S(a.na(),"touchend",g.va(a.Wn,5E3),a);a.o=g.M("BUTTON",["iv-promo-close","ytp-button"]);a.o.title=g.P("YTP_CLOSE");a.context.g.S(a.o,
"click","cta"==a.annotation.style&&b.text_line_3?a.eD:a.qN,a);l.appendChild(a.o);g.ih(a.na(),d);f&&g.Qe(a.na(),f);g.Qe(a.na(),a.bi);g.Qe(a.na(),l)},$pa=function(a){a.B||a.F||a.A||(g.N(a.na(),"iv-promo-collapsed"),a.B=!0,a.C.start())},aqa=function(a){a.C.stop();
a.B&&(g.kh(a.na(),["iv-promo-collapsed","iv-promo-collapsed-no-delay"]),a.B=!1,a.$c&&a.$c.removeAttribute("aria-hidden"),g.R(a.g,!1),g.R(a.o,!0))},bqa=function(a,b){a.A||(a.A=g.Hd(function(){G6(this);
$pa(this)},b,a))},G6=function(a){a.A&&(g.Jd(a.A),a.A=null)},H6=function(a,b,c){Z5.call(this,a,b,c);
this.H=b;this.o=null;this.F=!1;this.A=null;this.B=!1;this.G=0;this.g=this.D=this.C=null},I6=function(a,b,c){R5.call(this,b,c);
this.X=a;this.L=null;this.Sk=this.ga=this.B=this.la=!1;this.Va=null;this.cn=new g.Kd(g.w,c.C.useTabletControls?4E3:3E3);this.fa=new g.Kd(g.w);this.C=new a6(c,(0,g.z)(this.Ch,this),(0,g.z)(this.Uk,this));a=["div","iv-drawer",["div","iv-drawer-header",{"aria-role":"heading"},["span","iv-drawer-header-text"],["button",["iv-drawer-close-button","ytp-button"],{"aria-label":g.P("YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL"),tabindex:"0"}]],["div","iv-drawer-content"]];this.H=new g.V(a);this.D=this.H.element;this.da=
new g.vv(this.H,330);this.pa=g.L("iv-drawer-header-text",this.D);this.A=g.L("iv-drawer-content",this.D);a=["iv-drawer-teaser"];a.push("iv-exp-cards-teaser-prominent");a=["div",a,["div","iv-drawer-teaser-box"],["div","iv-drawer-teaser-text"],["button","iv-drawer-open-button",{"aria-label":g.P("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-haspopup":"true"},["span"]]];new g.V(a);this.o=[];this.ba=this.J=this.F=this.O=this.g=null;this.ca=[];S5(this,0,1E3*c.videoData.lengthSeconds,"",this.WB,this.wC);this.G=this.$=
this.P=null},hqa=function(a,b){var c=b&&b.data&&b.data.card_type;
if(c&&cqa[c]){c=new cqa[c](b.id,b.data,b.Mb);a.la||(g.ih(a.na(),["html5-stop-propagation","iv-drawer-manager"]),g.sm(a.X,a.D,6),dqa(a),a.J=g.L("ytp-cards-button"),a.ba=g.L("iv-drawer-close-button",a.D),a.la=!0);eqa(a,c.id);var d=fqa(a,c);if(d){var e={Ub:c,jn:d.element,Hu:!1},f=gqa(a,e);g.ob(a.o,f,0,e);d.Ha(a.A,f);a.Zj();c.autoOpen?S5(a,c.startMs,0x8000000000000,c.id,g.va(a.qK,e)):(d=1E3*a.context.o.getCurrentTime(),5E3>d&&d>c.startMs&&a.Gw(e),S5(a,c.startMs,c.startMs+1,c.id,g.va(a.Gw,e)),J6(a))}}},
iqa=function(a,b){b.data.autoOpenMs&&S5(a,b.data.autoOpenMs,0x8000000000000,"",a.oN);
b.data.autoCloseMs&&S5(a,b.data.autoCloseMs,0x8000000000000,"",a.ek);var c=b.data.headerText;g.df(a.pa,c);a.J&&a.J.setAttribute("title",c);b.data.eventId&&(a.L=b.data.eventId);a.P=new g.aq(b.data.trackingParams);a.G=new g.aq(b.data.closeTrackingParams);a.$=new g.aq(b.data.iconTrackingParams)},eqa=function(a,b){var c=jqa(a,b);
c&&(c==a.g&&(a.g=null),a.X.Px(c.Ub.id),g.Ve(c.jn),g.fb(a.o,c),a.Zj(),J6(a))},M6=function(a,b,c,d){if(!a.B){a.da.show();
a.O=new g.Kd(function(){g.N(this.context.o.getRootNode(),"ytp-iv-drawer-open")},0,a);
a.O.start();a.B=!0;a.N=(0,g.E)();K6(a.context.logger,a.L,7,void 0,d&&d.Ub?d.Ub.Mb:void 0);a.P&&a.G&&U5([a.P,a.G]);var e={TRIGGER_TYPE:b};(0,g.F)(a.o,function(a){a.Hu||(a.Hu=!0,L6(this.context.logger,a.Ub.Mb,a.Ub.o.QE,e));U5([a.Ub.C])},a);
g4(a.X);c&&(a.F=new g.Kd(function(){this.V=this.J;this.ba.focus()},330,a),a.F.start())}},dqa=function(a){a.context.g.S(g.L("iv-drawer-close-button",a.D),"click",a.oC,a);
a.context.g.S(a.A,"touchend",function(){this.cn.start()},a);
a.context.g.S(a.A,"scroll",a.BC,a);a.Va=g.Ek(a.A,"mousewheel",(0,g.z)(a.pN,a));a.context.A.subscribe("onHideControls",function(){this.Sk=!0},a);
a.context.A.subscribe("onShowControls",function(){this.Sk=!1},a);
a.context.A.subscribe("onVideoAreaChange",function(){this.Sk=g.hh(this.X.getRootNode(),"ytp-autohide")},a);
a.ca.push(g.Gi("iv-teaser-shown",a.jF,a));a.ca.push(g.Gi("iv-teaser-clicked",a.iF,a))},fqa=function(a,b){switch(b.type){case "simple":return h6(a.C,b);
case "collaborator":var c=a.C,d=["div",["iv-card","iv-card-channel"],["a",["iv-click-target","g-hovercard"],{href:d6(c,b.url,b.id),"data-ytid":b.channelId},f6(b.profileImageUrl),["div","iv-card-content",k6(c,b),["h2","iv-card-primary-link",b.title],i6(c,b)]]],d=new g.V(d);g6(c,d,b);return d;case "donation":return c=a.C,d=(0,g.z)(c.D,c,b),h6(c,b,d,d);case "episode":return j6(a.C,b,"iv-card-episode");case "movie":return j6(a.C,b,"iv-card-movie");case "playlist":return c=a.C,d=["div",["iv-card","iv-card-playlist"],
["a","iv-click-target",{href:d6(c,b.url,b.id)},f6(b.B,["div","iv-card-image-overlay",["span","iv-card-playlist-video-count",b.playlistVideoCount.toString()]]),["div","iv-card-content",k6(c,b),b6(c,"h2","iv-card-primary-link",b.title),i6(c,b)]]],d=new g.V(d),g6(c,d,b),d;case "poll":return Kpa(a.C,b);case "productListing":var c=a.C,d=d6(c,b.url,b.id),e=!g.bb(b.offers),f=["iv-card"],k="",l=e6(c,b);e&&(f.push("iv-card-product-listing"),k="iv-card-primary-link",l=b.offers[0],e=["div",null],l.price&&e.push(["div",
"iv-card-offer-price",l.price]),l.merchant&&e.push(["div","iv-card-offer-merchant",l.merchant]),l=e);e=b.sponsored?["div","iv-card-sponsored",g.P("YTP_SPONSORED"),["div","iv-ad-info-container",["div","iv-ad-info","{{adInfo}}"],["div","iv-ad-info-icon-container",["div","iv-ad-info-icon"],["div","iv-ad-info-callout"]]]]:"";d=["div",f,{tabindex:"0"},["a",["iv-card-image","iv-click-target"],{style:"background-image: url("+b.imageUrl+");",href:d,"aria-hidden":"true",tabindex:"-1"}],["div","iv-card-content",
e,["a","iv-click-target",{href:d},b6(c,"h2",k,b.title),l]]];d=new g.V(d);f=g.Oe("span");g.df(f,g.P("YTP_SPONSORED_PRODUCT_INFO"));d.xc(f,"adInfo");g6(c,d,b);return d;case "tip":return c=a.C,d=(0,g.z)(c.G,c,b),h6(c,b,d,d);case "video":return c=a.C,d=d6(c,b.url,b.id),f=b.videoDuration?["span","iv-card-video-duration",b.videoDuration]:"",k=b.B?["span",["yt-badge","yt-badge-live"],g.P("YTP_LIVE_NOW")]:"",d=["div",["iv-card","iv-card-video"],["a","iv-click-target",{href:d},f6(b.G,f),["div","iv-card-content",
k6(c,b),b6(c,"h2","iv-card-primary-link",b.title),i6(c,b),k]]],d=new g.V(d),g6(c,d,b),d}return null},gqa=function(a,b){if(0==a.o.length)return 0;
var c=g.Xa(a.o,function(a){return b.Ub.startMs>a.Ub.startMs||b.Ub.startMs==a.Ub.startMs&&b.Ub.timestamp>=a.Ub.timestamp?!0:!1});
return-1==c?0:c+1},kqa=function(a){return a.g?"productListing"==a.g.Ub.type:(0,g.pj)(a.o,function(a){return"productListing"==a.Ub.type})},J6=function(a){g.O(a.X.getRootNode(),"ytp-cards-shopping-active",kqa(a))},lqa=function(a,b){if(a.H.g){var c=new y5([0,
a.A.scrollTop],[0,b.jn.offsetTop],600,Rpa);g.Gv(a.context.B,c,"animate",function(a){this.A.scrollTop=a.y},void 0,a);
g.Gv(a.context.B,c,"finish",function(a){this.A.scrollTop=a.y},void 0,a);
c.play()}else a.H.Cb(!0),a.A.scrollTop=b.jn.offsetTop,a.H.Cb(!1)},N6=function(a){return a.g&&a.g.Ub?a.g.Ub:a.o[0]&&a.o[0].Ub?a.o[0].Ub:null},jqa=function(a,b){return g.Wa(a.o,function(a){return a.Ub.id==b},a)},oqa=function(a){if(!a)return null;
var b=w5(a.id),c=w5(a.author),d=R4(a.type,mqa),e=R4(a.style,O6),f=S4(x5(a.TEXT)),k=S4(a.data),k=0!=k.length?g.pf(k):{},l;var m=x5(a.segment);m?(w5(m.timeRelative),l=w5(m.spaceRelative),l=(m=v5(m.movingRegion,Apa))?new ypa(l,m):null):l=null;var m=v5(a.action,Qpa),n=v5(a.trigger,Npa),q=Q5(x5(a.appearance));q||(q=Q5({}));var t=R4(a.coordinate_system,nqa,"video_relative"),v=Q4(a.closeable,!0),x=S4(a.html_blob);a=S4(a.log_data);return b&&d?new n6(b,c,d,e,f,l,m,n,q,t,v,0,x,k,a):null},pqa=function(a,b,c,
d,e,f,k){this.g=a;
this.B=b;this.C=c;this.videoData=d;this.logger=e;this.o=f;this.A=k},qqa=function(a){this.X=a;
this.g={}},L6=function(a,b,c,d){if(b){var e=P6(a,b);
a.g[b]=e["p-time"];e["iv-event"]=e.link||e["l-class"]||e["link-id"]?2:7;b=Q6(a,"cta_annotation_shown",e,c);R6(a,e,rqa(b,d))}},T5=function(a,b,c,d,e,f){if(b){var k=P6(a,b);
k["iv-event"]=3;k["i-time"]=a.g[b]||"";g.Yb(k,d||{});b=Q6(a,"cta_annotation_clicked",k,e);R6(a,k,b,c,f)}},S6=function(a,b){if(b){var c=P6(a,b);
c["iv-event"]=4;c["i-time"]=a.g[b]||"";var d=Q6(a,"cta_annotation_closed",c);R6(a,c,d)}},rqa=function(a,b){return b?(0,g.Q)(a,g.va(function(a,b){return g.hw(b,a)},b||{})):a},Q6=function(a,b,c,d){d=g.jb(d||[]);
if(30==c["a-type"]){a:{c=c["a-id"];a=a.X.getVideoData();if(a.nl){if((b=a.nl[b])&&g.ct.test(b)){a=g.Ba("[ANNOTATION_ID]");0<=b.indexOf("[ANNOTATION_ID]")?b=b.replace("[ANNOTATION_ID]",c):0<=b.indexOf(a)&&(b=b.replace(a,c));break a}}else if(a.za){b=g.Lh(a.za,{label:b,value:"a_id="+c});break a}b=""}b&&d.push(b)}return d},R6=function(a,b,c,d,e){var f=1,k,l=-1;
if(d){var m=!1;k=function(){f--;f||m||((0,window.clearTimeout)(l),m=!0,d())};
l=(0,window.setTimeout)(function(){m=!0;d()},1E3)}(0,g.F)(c||[],function(a){f++;
g.Ri(a,k)});
e&&(f++,0!=e&&a.X.Eg(e,k));sqa(a,b,k)},P6=function(a,b){var c={};
if(b){var d=new g.pg(b);(0,g.F)(d.sb(),function(a){c[a]=(0,window.escape)(d.get(a,""))})}c["p-time"]=a.X.getCurrentTime().toFixed(2);
c.ps=g.U(a.X).o;return c},K6=function(a,b,c,d,e){e=P6(a,e);
e["iv-event"]=c;b&&(e.ei=b);e["a-id"]||(e["a-id"]="card:drawer");e["a-type"]=51;R6(a,e,d)},T6=function(a,b,c,d){c&&(c=P6(a,c),c["iv-event"]=b,R6(a,c,d))},sqa=function(a,b,c){g.dm(a.X,"iv",b,c)},tqa=function(a){a=O4(a);
a=a.replace(/https?:\/\//g,"");return a5(a)?(a=g.Jh(a))&&a.v?a.v:null:null},uqa=function(a){a=O4(a);
if(!a)return null;a=a.replace(/https?:\/\//g,"");var b;(b=!a5(a))||(b=g.Tf(g.Sf(a)[5]||null)||"",b=b.split("/"),b="/"+(1<b.length?b[1]:""),b="/watch"!=b);if(b)return null;b=g.Jh(a);if(!b||!b.v)return null;if(b.t)return Tpa(b.t);a=a.split("#",2);return!a||2>a.length?null:(a=g.Hh(a[1]))&&a.t?Tpa(a.t):-1},vqa=function(a,b,c,d,e,f,k){a=a.clone();
var l=w6(b,c);c=g.mk(b);k=k?k.clone():c.clone();a=g.Mv(a,k,l,d,e,f);if(a.status&496)return a.status;g.ak(b,g.Df(a.rect));k=g.Cf(a.rect);g.ve(c,k)||(d=k,f=g.Ge(g.Ae(g.ye(b)).g),!g.Je||g.nc("10")||f&&g.nc("8")?(b=b.style,g.Qj?b.MozBoxSizing="border-box":g.pc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(d.width,0)+"px",b.height=Math.max(d.height,0)+"px"):(e=b.style,f?(g.Je?(f=k4(b,"paddingLeft"),c=k4(b,"paddingRight"),k=k4(b,"paddingTop"),l=k4(b,"paddingBottom"),f=new g.xf(k,
c,l,f)):(f=g.Xj(b,"paddingLeft"),c=g.Xj(b,"paddingRight"),k=g.Xj(b,"paddingTop"),l=g.Xj(b,"paddingBottom"),f=new g.xf((0,window.parseFloat)(k),(0,window.parseFloat)(c),(0,window.parseFloat)(l),(0,window.parseFloat)(f))),g.Je&&!g.oc(9)?(c=j4(b,"borderLeft"),k=j4(b,"borderRight"),l=j4(b,"borderTop"),b=j4(b,"borderBottom"),b=new g.xf(l,k,b,c)):(c=g.Xj(b,"borderLeftWidth"),k=g.Xj(b,"borderRightWidth"),l=g.Xj(b,"borderTopWidth"),b=g.Xj(b,"borderBottomWidth"),b=new g.xf((0,window.parseFloat)(l),(0,window.parseFloat)(k),
(0,window.parseFloat)(b),(0,window.parseFloat)(c))),e.pixelWidth=d.width-b.left-f.left-f.right-b.right,e.pixelHeight=d.height-b.top-f.top-f.bottom-b.bottom):(e.pixelWidth=d.width,e.pixelHeight=d.height)));return a.status},U6=function(a){return"creator-endscreen-editor"===a},wqa=function(a,b){function c(a){return a.baseUrl}
function d(a){if(a&&a.runs)return(0,g.Q)(a.runs,function(a){return a.text}).join("")}
function e(a){var b=[];a.videoId&&b.push("v="+a.videoId);a.playlistId&&b.push("list="+a.playlistId);a.startTimeSeconds&&b.push("t="+a.startTimeSeconds);return"/watch?"+b.join("&")}
var f={};f.startMs=(0,window.parseInt)(a.startMs,10);f.impressionUrls=(0,g.Q)(a.impressionUrls||[],c);f.skip=a.skipEndscreen;f.visualElement=new g.aq(a.trackingParams);f.elements=(0,g.Q)(a.elements||[],function(f,l){var k=f.endscreenElementRenderer,n={},q=k.style,t=k.endpoint;n.id="element-"+l;n.type=q;n.title=d(k.title);n.metadata=d(k.metadata);n.callToAction=d(k.callToAction);n.xn=k.image;n.Vj=k.animatedImage;n.left=(0,window.parseFloat)(k.left);n.width=(0,window.parseFloat)(k.width);n.top=(0,window.parseFloat)(k.top);
n.aspectRatio=(0,window.parseFloat)(k.aspectRatio);n.startMs=(0,window.parseInt)(k.startMs,10);n.endMs=(0,window.parseInt)(k.endMs,10);t&&(n.hd={itct:t.click_tracking_params},n.clickUrls=(0,g.Q)(t.loggingUrls||[],c));k.title.accessibility&&(n.Vh=k.title.accessibility.accessibilityData.label);n.impressionUrls=(0,g.Q)(k.impressionUrls||[],c);n.au=(0,g.Q)(k.hovercardShowUrls||[],c);n.visualElement=new g.aq(a.trackingParams);if("VIDEO"==q)t&&(n.targetUrl=e(t.watchEndpoint)),n.Ii=!1,n.dj=b,n.videoDuration=
d(k.videoDuration);else if("PLAYLIST"==q)n.targetUrl=e(t.watchEndpoint),n.Ii=!1,n.dj=b,n.playlistLength=d(k.playlistLength);else if("CHANNEL"==q)if(q=t.browseEndpoint.browseId,n.channelId=q,n.targetUrl="/channel/"+q,n.Ii=!1,n.dj="new",n.Fo=!!k.hovercardButton,n.Fo){n.htmlBlob=k.htmlBlob;var k=k.hovercardButton.subscribeButtonRenderer,v;k.subscribed?(v=d(k.subscriberCountWithUnsubscribeText),q=d(k.subscriberCountText)):(v=d(k.subscriberCountText),q=d(k.subscriberCountWithSubscribeText));t=d(k.unsubscribedButtonText);
t.match(/[0-9]/)||v&&"0"!==v&&(t+=" "+v);v=d(k.subscribedButtonText);v.match(/[0-9]/)||q&&(v+=" "+q);n.subscribeButton={subscribed:k.subscribed,feature:"endscreen",subscribeText:t,unsubscribeText:v,enabled:k.enabled}}else n.subscribersText=d(k.subscribersText);else"WEBSITE"==q&&(n.targetUrl=t.urlEndpoint.url,n.Ii=!0,n.dj="new",n.bu=k.icon.thumbnails[0].url);return n});
return f},xqa=function(a){var b={};
b.startMs=a.startMs;b.impressionUrls=a.impressionUrls;b.skip=a.skip||!1;b.visualElement=new g.aq(a.trackingParams);b.elements=(0,g.Q)(a.elements||[],function(a){var b={};b.id=a.id;b.type=a.type;b.title=a.title;b.metadata=a.metadata;b.callToAction=a.callToAction;b.imageUrl=a.imageUrl;b.xn=a.displayImages;b.Vj=a.animatedDisplayImages;b.bu=a.iconUrl;b.left=a.left;b.width=a.width;b.top=a.top;b.aspectRatio=a.aspectRatio;b.startMs=a.startMs;b.endMs=a.endMs;b.videoDuration=a.videoDuration;b.playlistLength=
a.playlistLength;b.channelId=a.channelId;b.htmlBlob=a.htmlBlob;b.subscribeButton=a.subscribeButton;b.subscribersText=a.subscribersText;b.Fo=a.isSubscribe;b.targetUrl=a.targetUrl;b.Ii="WEBSITE"==b.type;b.hd=a.sessionData||[];b.dj=a.targetTab;b.Vh=a.accessibilityStr;b.UE=a.isPlaceholder;b.impressionUrls=a.impressionUrls;b.au=a.hoverUrls;b.NW=a.dismissUrls;b.clickUrls=a.clickUrls;b.visualElement=new g.aq(b.hd.itct);return b});
return b},yqa=function(){var a=g.$g("ROOT_VE_TYPE",void 0);
return a?new g.aq(void 0,a,void 0):null},Bqa=function(a,b,c){if(!(a.nodeName in zqa))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in Aqa)b.push(Aqa[a.nodeName]);else for(a=a.firstChild;a;)Bqa(a,b,c),a=a.nextSibling},Cqa=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Cqa(a,b,c,d))return!0;
a=a.nextSibling}return!1},V6=function(a){g.iu.call(this,a);
this.G=0;this.A={};this.H={};this.ka=new qqa(a);this.D=new g.Pn(this);g.J(this,this.D);this.D.U(this.g,"onVideoAreaChange",(0,g.z)(this.aa,this,"onVideoAreaChange"));this.D.U(this.g,"onHideControls",(0,g.z)(this.aa,this,"onHideControls"));this.D.U(this.g,"onShowControls",(0,g.z)(this.aa,this,"onShowControls"));this.D.U(this.g,"resize",(0,g.z)(this.aa,this,"resize"));this.D.U(this.g,"presentingplayerstatechange",(0,g.z)(this.aa,this,"presentingplayerstatechange"));this.subscribe("onHideControls",this.bH,
this);this.subscribe("onShowControls",this.JI,this);this.subscribe("presentingplayerstatechange",this.gI,this);this.subscribe("resize",this.To,this);this.subscribe("d",this.IM,this);this.subscribe("c",this.Of,this);this.subscribe("a",this.QF,this);this.subscribe("b",this.qG,this);g.U(this.g).F.subscribe("vast_info_card_add",this.Xv,this);this.g.addEventListener("crn_annotations_module",this.jy,this);this.g.addEventListener("crx_annotations_module",this.ky,this);this.J=g.M("DIV",["video-legacy-annotations",
"html5-stop-propagation"]);this.O=g.M("DIV","video-custom-annotations");this.B=new g.V(["div",["ytp-player-content","ytp-iv-player-content"]]);g.J(this,this.B);g.sm(this.g,this.B.element,5);this.B.ma();this.C=new g.V(["div",["ytp-iv-video-content"]]);g.J(this,this.C);a=g.M("DIV","video-annotations",this.J,this.O);this.C.element.appendChild(a);this.F=this.o=null;this.L=[];a=g.U(this.g);var b=this.g.getVideoData();(1!=(a.Jg||b.zd)||b.Er)&&null===a.F.get(b.videoId)||this.load()},Dqa=function(a,b){for(var c=
{},d=0;d<b.attributes.length;d++){var e=b.attributes[d];
c[e.name]=e.nodeValue}for(d=0;d<b.childNodes.length;d++)if(e=b.childNodes[d],e.tagName){var f;if(c[e.tagName])f=c[e.tagName];else if("html_blob"==e.tagName||"data"==e.tagName){g.U(a.g).experiments.g("text_content_for_xml_node_value")&&e.textContent?c[e.tagName]=e.textContent.trim():0<e.childNodes.length&&(f=e.childNodes[0].nodeValue,c[e.tagName]="string"==typeof f?f.trim():f);continue}else f=[],c[e.tagName]=f;e&&"TEXT"==e.tagName?1==e.childNodes.length&&3==e.childNodes[0].nodeType?f.push(e.childNodes[0].nodeValue):
f.push(""):e&&f.push(Dqa(a,e))}return c},Eqa=function(a,b,c){return!(a.loaded&&a.G==b&&a.g.getVideoData().videoId==c)},Gqa=function(a,b){var c=Fqa(a,b);
if(!c&&"marker"!=b.type)return null;r6(b,function(a){a=(0,g.z)(this.gJ,this,b.id,a);this.subscribe("ivTrigger:"+b.id,a)},a);
return new z6(a.ca,b,c)},Hqa=function(a,b){var c=V6.o(),d=null;
switch(b.type){case "branding":if(g.U(a.g).ff)break;a.B.element.appendChild(c);d=new H6(c,W6(a),b);break;case "promotion":g.sm(a.g,c,5),d=new F6(c,W6(a),b)}d&&d.Bl();return d},Kqa=function(a){var b=a.g.getVideoData();
if(b.sa){var c=g.U(a.g),d=c.F.get(b.videoId);if(d){var e={format:"XML",wc:{}};c.experiments.g("disable_iv_cors")||(e.method="POST",e.withCredentials=!0);"gaming"==c.o&&(e.wc.gaming="1");e.gd=(0,g.z)(function(a,b,c){Eqa(this,a,b)||(a=g.mi(c)&&c.responseXML?c.responseXML:null)&&X6(this,a)},a,a.G,b.videoId);
g.kq()&&(e.gd=Iqa(a,e.gd));e.Ib={ic_only:"1"};Jqa(e,d);g.Oi(b.sa,e)}}},Jqa=function(a,b){a.method="POST";
a.Ib=a.Ib||{};b.fg&&(a.Ib.ic_xml=b.fg);b.Gh&&(a.Ib.ic_track=b.Gh)},Lqa=function(a){var b=new g.V(["div"]);
g.R(b.element,!1);var c=new I6(a.g,b.element,W6(a));b.Ha(a.B.element);c.Bl();return c},W6=function(a){a.F||(a.F=new pqa(new g.Tv(a),new g.Ev(a),g.U(a.g),a.g.getVideoData(),a.ka,a.g,a.ca));
return a.F},X6=function(a,b){var c=!1;
Mqa(b);for(var d=b.getElementsByTagName("annotation"),e=0;e<d.length;e++){var f=Dqa(a,d[e]),k=null;try{k=oqa(f)}catch(l){}k&&(V6.A(k)?(f=Hqa(a,k))&&(a.H[k.id]=f):V6.B(k)?(a.o||(a.o=Lqa(a)),"card"==k.type?hqa(a.o,k):iqa(a.o,k),c=!0):(f=Gqa(a,k))&&(a.A[k.id]=f))}c&&(g4(a.g),a.To());g.Fb(a.A,function(a){if(a.g){var b=a.annotation;(a=a.g)&&b.o&&b.o.o&&(b=this.A[b.o.o])&&(a.V=b.annotation)}},a)},Mqa=function(a){if((a=a.getElementsByTagName("annotations"))&&!(1>a.length)&&(a=a[0].getAttribute("itct"))){var b=
g.Yq();
if(b){var c=yqa();c&&x6(b,c,[new g.aq(a)])}}},Oqa=function(a,b,c,d){d?Nqa(a,b,c):Y6(a,b,c)},Y6=function(a,b,c){if(b=a.A[b])A6(b),c&&c.o?(a=(0,g.z)(a.Yt,a,b),b.o=new g.Kd(a,2E3),b.o.start()):a.Yt(b)},Nqa=function(a,b,c){if(b=a.A[b])A6(b),c&&c.B?(a=(0,g.z)(a.Rw,a,b),b.o=new g.Kd(a,2E3),b.o.start()):a.Rw(b)},Pqa=function(a,b,c){if("new"==b.target)return!1;
var d=O4(b);if(!d)return!1;d=d.replace(/https?:\/\//g,"");if(!a5(d))return!1;d=g.Jh(d);if(d.list||d.p)return!1;b=tqa(b);if(!b)return!1;if(c==b)return!0;a=g.U(a.g);return a.C&&a.gb?!0:!1},Fqa=function(a,b){if(Qqa(b)){var c=b.C||p6(b,function(a){return"click"==a||"rollOut"==a||"rollOut"==a});
return new Vpa(b,(0,g.z)(a.J.appendChild,a.J),a.g,a.ca,c)}return null},Qqa=function(a){if("highlight"==a.type||"widget"==a.type)return!0;
if("text"==a.type)for(var b in O6)if(a.style==O6[b])return!0;return!1},Z6=function(a,b,c,d){a.aa(p5(b,d),c,d)},Iqa=function(a,b){return(0,g.z)(function(){if(!this.isDisposed()){var a=Array.prototype.slice.call(arguments,0);
a.unshift(b);b=g.va.apply(window,a);this.L.push(g.lq(b,1,void 0))}},a)},$6=function(a,b,c,d,e,f,k){var l,m;
if(l=c.offsetParent){var n="HTML"==l.tagName||"BODY"==l.tagName;n&&"static"==g.Yj(l,"position")||(m=g.ek(l),n||(n=(n=C5(l))&&g.Qj?-l.scrollLeft:!n||g.Ss&&g.nc("8")||"visible"==g.Yj(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,m=g.te(m,new g.re(n,l.scrollTop))))}l=m||new g.re;m=g.nk(a);(n=g.fk(a))&&g.Bf(m,h5(n));var n=g.Ae(a),q=g.Ae(c);if(n.g!=q.g){var t=n.g.body,q=g.hk(t,g.of(q)),q=g.te(q,g.ek(t));!g.Je||g.oc(9)||g.Ge(n.g)||(q=g.te(q,g.Ke(n.g)));m.left+=q.x;m.top+=q.y}a=w6(a,
b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new g.re(b,m.top+(a&1?m.height:0));b=g.te(b,l);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;k&&(v=g.fk(c))&&(v.top-=l.y,v.right-=l.x,v.bottom-=l.y,v.left-=l.x);return vqa(b,c,d,f,v,k,void 0)},a7=function(a,b,c,d,e,f,k){this.date=g.qa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,k||0):new Date(a&&a.getTime?a.getTime():(0,g.E)())},b7=function(a){return(a=g.Be(a))?g.pk(a)&&!g.hh(a,"hid"):!1},c7=function(a){g.iu.call(this,a);
this.o=null;this.F=!1;this.B=null;this.A={};this.D={};this.C=null;this.J=!1;this.L=null;this.O=g.U(this.g).experiments.g("enable_creator_endscreen_moving_thumbs_on_hover");this.G=[];this.P=g.U(this.g).experiments.g("enable_creator_endscreen_html5_renderers");a=g.U(a).g;this.N="embedded"==a||"profilepage"==a;this.H=new g.It(null);this.g.addEventListener("crn_creatorendscreen",this.ly,this);this.g.addEventListener("crx_creatorendscreen",this.my,this);this.load()},d7=function(a,b){g.pm(a.g,"creatorendscreen");
a.C&&(a.C.dispose(),a.C=null);for(var c in a.A){var d=a.A[c];d.dispose()}a.A={};a.D={};0<a.G.length&&(a.G.forEach(function(a){a.dispose()}),a.G.length=0);
if((a.o=b)&&b.elements){Rqa(a);c=[];d=new g.zm(b.startMs,0x7ffffffffffff,{id:"ytp-ce-in-endscreen",namespace:"creatorendscreen"});c.push(d);a.C=new g.V(["div","ytp-ce-shadow"]);g.sm(a.g,a.C.element,5);for(var e=0;e<b.elements.length;++e){var f=b.elements[e],d=Sqa(a,f);a.A[f.id]=d;a.D[f.id]=f;g.sm(a.g,d.element,5);var k=new g.zm(f.startMs,f.endMs,{id:"ytp-ce-element-"+f.id,namespace:"creatorendscreen"});c.push(k);Tqa(a,d,f)}g.mm(a.g,c);a.cq()}},Rqa=function(a){var b=yqa();
b&&x6(g.Yq()||"",b,[a.o.visualElement])},Sqa=function(a,b){var c=null;
switch(b.type){case "VIDEO":c=["div",["ytp-ce-element","ytp-ce-video"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",e7(f7(a,b,!1)),["div","ytp-ce-covering-animated-image",e7(f7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-video-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Jt(a.H,b.title||"")},b.title],["div","ytp-ce-video-duration",b.videoDuration]]];
c=new g.V(c);break;case "PLAYLIST":c=["div",["ytp-ce-element","ytp-ce-playlist"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",e7(f7(a,b,!1)),["div","ytp-ce-covering-animated-image",e7(f7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-playlist-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Jt(a.H,b.title||"")},b.title],["div","ytp-ce-playlist-count",
["div","ytp-ce-playlist-icon"],["div","ytp-ce-playlist-count-text",b.playlistLength]]]];c=new g.V(c);break;case "CHANNEL":var c=["div",["ytp-ce-element","ytp-ce-channel",b.Fo?"ytp-ce-channel-this":"ytp-ce-channel-that"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",
["div","ytp-ce-expanding-overlay-body-padding",["a",["ytp-ce-channel-title","ytp-ce-link"],b.title,{href:b.targetUrl,target:"_blank",tabindex:"-1",dir:g.Jt(a.H,b.title||"")}],b.htmlBlob||b.subscribeButton?["div","ytp-ce-subscribe-container",["div","ytp-ce-channel-subscribe"]]:"",b.subscribersText?["div","ytp-ce-channel-subscribers-text",b.subscribersText]:"",b.metadata?["div",["ytp-ce-channel-metadata","yt-ui-ellipsis","yt-ui-ellipsis-3"],b.metadata]:""]]]],["div","ytp-ce-expanding-image",e7(f7(a,
b,!1))]],c=new g.V(c),d=g.Ce("div","ytp-ce-channel-subscribe",c.element)[0];if(b.subscribeButton){g.N(d,"ytp-ce-subscribe-button");var e=new g.tu(b.subscribeButton.subscribeText,b.subscribeButton.unsubscribeText,b.subscribeButton.enabled,b.channelId,!!b.subscribeButton.subscribed,b.subscribeButton.feature,null,a.g);d.appendChild(e.element);a.G.push(e)}else b.htmlBlob&&y6(d,b.htmlBlob);break;case "WEBSITE":c=["div",["ytp-ce-element","ytp-ce-website"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},
["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",["div","ytp-ce-expanding-overlay-body-padding",["div","ytp-ce-website-title",{dir:g.Jt(a.H,b.title||"")},b.title],["div","ytp-ce-website-metadata",b.metadata],["a",["ytp-ce-website-goto","ytp-ce-link"],b.callToAction,{href:b.targetUrl,target:"_blank",tabindex:"-1"}]]]]],
["div","ytp-ce-expanding-image",e7(f7(a,b,!1))],["div","ytp-ce-expanding-icon",e7(b.bu)]],c=new g.V(c)}b.UE&&g.N(c.element,"ytp-ce-placeholder");return c},Uqa=function(a,b,c){a.O&&(a=g.L("ytp-ce-covering-animated-image",b.element))&&(a.style.display=c?"block":"none")},e7=function(a){return a?{style:"background-image: url("+a+")"}:{}},f7=function(a,b,c){var d;
b.xn&&(d=b.xn.thumbnails);!U6(g.U(a.g).o)&&a.L&&b.Vj&&b.Vj.thumbnails&&(!a.O||c)&&(d=b.Vj.thumbnails);return d?d[d.length-1].url:null},Tqa=function(a,b,c){b.S("mouseenter",(0,g.z)(a.bq,a,b,c));
b.S("mouseleave",(0,g.z)(a.oy,a,b,c));b.S("click",(0,g.z)(function(a){g.N(a.element,"ytp-ce-element-hover")},a,b));
b.S("click",(0,g.z)(a.uv,a,c));b.S("keypress",(0,g.z)(a.uv,a,c));b.S("focus",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");this.bq(a,b)},a,b,c));
b.S("blur",(0,g.z)(function(a,b){g.jh(a.element,"ytp-ce-force-expand");this.oy(a,b)},a,b,c));
b.S("touchstart",(0,g.z)(a.bq,a,b,c));var d=g.L("ytp-ce-expanding-overlay-hider",b.element);d&&b.U(d,"touchstart",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();g.jh(b.element,"ytp-ce-element-hover");g.jh(b.element,"ytp-ce-force-expand")});
var e=(0,g.z)(function(a,b,c){c=g.Ye(c);(0,g.F)(c,function(c){e(c);g.jf(c)&&(a.U(c,"focus",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");g7(this,b.id,!0)},this,a,b)),a.U(c,"click",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");
g7(this,b.id,!0);this.J=!0},this,a,b)),a.U(c,"blur",(0,g.z)(function(a,b){this.J?(this.J=!1,a.element.focus()):(g.jh(a.element,"ytp-ce-force-expand"),g7(this,b.id,!1))},this,a,b)))},this)},a,b,c);
e(b.element)},g7=function(a,b,c){g.O(a.C.element,"ytp-ce-shadow-show",c);
for(var d in a.A)d!=b&&g.O(a.A[d].element,"ytp-ce-element-shadow-show",c)},h7=function(a,b,c){function d(){k||(f++,f==e.length&&(l.stop(),c&&c()))}
if(!b||U6(g.U(a.g).o))c&&c();else{var e=Vqa(a,b),f=0,k=!1,l=new g.Kd(function(){k=!0;c&&c()},1E3,a);
l.start();for(a=0;a<e.length;a++)g.Ri(e[a],d)}},i7=function(a,b,c){h7(a,b.clickUrls,c);
b.Ii&&B5(b.visualElement)},Vqa=function(a,b){for(var c=a.g.getVideoData().clientPlaybackNonce,d=a.g.getCurrentTime().toFixed(2),c={CPN:c,
AD_CPN:c,MT:d},d=[],e=0;e<b.length;e++)d.push(Wqa(b[e],c));return d},Wqa=function(a,b){return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g,function(a){var c=(0,window.unescape)(a),c=c.substring(1,c.length-1);
return b[c]?(0,window.escape)(b[c]):a})},Xqa=function(a,b){var c=new window.Image;
c.onload=(0,g.z)(function(){this.L=0<c.width&&0<c.height;b()},a);
c.onerror=(0,g.z)(function(){this.L=!1;b()},a);
c.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},Yqa=function(){g.O(window.document.body,"hide-players",!1);
(0,g.F)(g.De("preserve-players"),function(a){g.jh(a,"preserve-players")})},Zqa=function(a,b){var c=g.Ce(a,null,b);
return c.length?c[0]:null},j7=function(a,b){a=g.Be(a);
b=g.Be(b);return!!g.kf(a,function(a){return a===b},!0,void 0)},k7=function(a){var b=a.__yt_uid_key;
b||(b=(0,g.b3)(),a.__yt_uid_key=b);return b},l7=function(a,b){a&&(a.dataset?delete a.dataset[g.ah(b)]:a.removeAttribute("data-"+b))},m7=function(a){if(g.$2&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");
else{var b=[];Bqa(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");g.$2||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},n7=function(a,b){var c=[];
return Cqa(a,b,c,!0)?c[0]:void 0},o7=function(a){g.bq.call(this,1,arguments);
this.g=a},p7=function(a,b,c,d,e){g.bq.call(this,2,arguments);
this.source=e||null},$qa=function(a,b,c){g.bq.call(this,1,arguments);
this.g=a;this.o=b},q7=function(a,b,c,d,e,f,k){g.bq.call(this,1,arguments);
this.g=d||null;this.source=k||null},r7=function(a,b,c){var d;
switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return g.kf(c,function(a){return g.hh(a,b)},!0,d)},t7=function(a){var b="mouseover"==a.type&&"mouseenter"in s7||"mouseout"==a.type&&"mouseleave"in s7,c=a.type in s7||b;
if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=s7[b],d;for(d in c.o){var e=r7(b,d,a.target);e&&!g.kf(a.relatedTarget,function(a){return a==e},!0)&&c.Lb(d,e,b,a)}}if(b=s7[a.type])for(d in b.o)(e=r7(a.type,d,a.target))&&b.Lb(d,e,a.type,a)}},u7=function(a){this.C=a;
this.F={};this.H=[];this.G=[]},Z=function(a,b){return"yt-uix"+(a.C?"-"+a.C:"")+(b?"-"+b:"")},v7=function(a,b,c){a.H.push(g.Gi(b,c,a))},w7=function(a,b,c){a.G.push(g.Bq(b,c,a))},ara=function(a,b){g.bh(a,"tooltip-text",b)},x7=function(){u7.call(this,"button");
this.g=null;this.A=[];this.o={}},bra=function(a,b,c,d,e){var f=b7(c),k=9==d.keyCode;
k||32==d.keyCode||13==d.keyCode?(d=y7(a,c))?(b=g.$e(d),"a"==b.tagName.toLowerCase()?g.ev(b.href):h4(b)):k&&z7(a,b):f?27==d.keyCode?(y7(a,c),z7(a,b)):e(b,c,d):(a=g.hh(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(h4(b),d.preventDefault()))},y7=function(a,b){var c=Z(a,"menu-item-highlight"),d=g.L(c,b);
d&&g.jh(d,c);return d},cra=function(a,b,c){g.N(c,Z(a,"menu-item-highlight"));
var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+g.ua(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)},dra=function(a,b,c,d){var e=b.length;
a=(0,g.Za)(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a},A7=function(a,b){var c=b.iframeMask;
c||(c=window.document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),g.uv(c),b.iframeMask=c);return c},B7=function(a,b,c,d){var e=g.mf(b,Z(a,"group")),f=!!a.wa(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,k=8,l=g.nk(b);
if(g.hh(b,Z(a,"reverse"))){f=8;k=9;l=l.top+"px";try{c.style.maxHeight=l}catch(q){}}g.hh(b,"flip")&&(g.hh(b,Z(a,"reverse"))?(f=12,k=13):(f=13,k=12));var m;a.wa(b,"button-has-sibling-menu")?m=g.dk(e):a.wa(b,"button-menu-root-container")&&(m=era(a,b));g.Je&&!g.nc("8")&&(m=null);var n;m&&(n=g.nk(m),n=new g.xf(-n.top,n.left,n.top,-n.left));m=new g.re(0,1);g.hh(b,Z(a,"center-menu"))&&(m.x-=Math.round((g.mk(c).width-g.mk(b).width)/2));d&&(m.y+=g.Ke(window.document).y);if(a=A7(a,b))b=g.mk(c),a.style.width=
b.width+"px",a.style.height=b.height+"px",$6(e,f,a,k,m,n,197),d&&g.Uj(a,"position","fixed");$6(e,f,c,k,m,n,197)},era=function(a,b){if(a.wa(b,"button-menu-root-container")){var c=a.wa(b,"button-menu-root-container");
return g.mf(b,c)}return window.document.body},z7=function(a,b){if(b){var c=C7(a,b);
if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");g.uv(c);a.Pg(b,"button-menu-action",!1);var d=A7(a,b),e=k7(c).toString();delete a.o[e];g.ni(function(){d&&d.parentNode&&(g.uv(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=g.mf(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));g.kh(b,f);g.Ji("yt-uix-button-menu-hide",b);g.Fk(a.A);a.A.length=0}},fra=function(a,b,c){var d=Z(a,"menu-item-selected");
(0,g.F)(g.De(d,b),function(a){g.jh(a,d)});
g.N(c.parentNode,d)},C7=function(a,b){if(!b.widgetMenu){var c=a.wa(b,"button-menu-id"),c=c&&g.Be(c),d=Z(a,"menu");
c?g.ih(c,[d,Z(a,"menu-external")]):c=g.L(d,b);b.widgetMenu=c}return b.widgetMenu},gra=function(a,b){if(a.wa(b,"button-toggle")){var c=g.mf(b,Z(a,"group")),d=Z(a,"toggled"),e=g.hh(b,d);
if(c&&a.wa(c,"button-toggle-group")){var f=a.wa(c,"button-toggle-group");(0,g.F)(g.De(Z(a),c),function(a){a!=b||"optional"==f&&e?(g.jh(a,d),a.removeAttribute("aria-pressed")):(g.N(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),g.oh(b,d)}},D7=function(a){a.g&&z7(a,a.g)},E7=function(a){u7.call(this,a);
this.A=null},hra=function(a,b,c){var d=c||b,e=Z(a,"card");
c=a.ac(d);var f=g.Be(Z(a,"card")+k7(d));if(f)return a=g.L(Z(a,"card-body"),f),g.bf(a,c)||(g.Ve(c),a.appendChild(c)),f;f=window.document.createElement("div");f.id=Z(a,"card")+k7(d);f.className=e;(d=a.wa(d,"card-class"))&&g.ih(f,d.split(/\s+/));d=window.document.createElement("div");d.className=Z(a,"card-border");b=a.wa(b,"orientation")||"horizontal";e=window.document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var k=window.document.createElement("div");k.className=
Z(a,"card-body");a=window.document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;g.Ve(c);k.appendChild(c);d.appendChild(a);d.appendChild(k);f.appendChild(e);f.appendChild(d);window.document.body.appendChild(f);return f},ira=function(a,b,c){var d=a.wa(b,"orientation")||"horizontal",e=g.L(Z(a,"anchor"),b)||b,f=a.wa(b,"position"),k=!!a.wa(b,"force-position"),l=a.wa(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==
f,q,t;
n&&m?(t=13,q=8):n&&!m?(t=12,q=9):!n&&m?(t=9,q=12):(t=8,q=13);var v=C5(window.document.body),f=C5(b);v!=f&&(t^=4);var x;d?(f=b.offsetHeight/2-12,x=new g.re(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,x=new g.re(b.offsetWidth+6,-12));var A=g.mk(c),f=Math.min(f,(d?A.height:A.width)-24-6);6>f&&(f=6,d?x.y+=12-b.offsetHeight/2:x.x+=12-b.offsetWidth/2);A=null;k||(A=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");g.O(c,b,n);g.O(c,a,m);A=$6(e,t,c,q,x,null,A);!k&&A&&(A&48&&(n=!n,t^=4,q^=4),A&192&&(m=!m,t^=1,q^=
1),g.O(c,b,n),g.O(c,a,m),$6(e,t,c,q,x));l&&(e=(0,window.parseInt)(c.style.top,10),k=g.Ke(window.document).y,g.Uj(c,"position","fixed"),g.Uj(c,"top",e-k+"px"));v&&(c.style.right="",e=g.nk(c),e.left=e.left||(0,window.parseInt)(c.style.left,10),k=g.He(window),c.style.left="",c.style.right=k.width-e.left-e.width+"px");e=g.L("yt-uix-card-body-arrow",c);k=g.L("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!v&&n||v&&!n?"left":"right";e.setAttribute("style","");k.setAttribute("style","");e.style[d]=f+
"px";k.style[d]=f+"px";m=g.L("yt-uix-card-arrow",c);n=g.L("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?g.mk(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")},F7=function(a){a.A&&a.df(a.A)},jra=function(a){var b=a.cardMask;
b||(b=window.document.createElement("iframe"),b.src='javascript:""',g.ih(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";window.document.body.appendChild(b)},G7=function(){u7.call(this,"kbd-nav")},kra=function(a,b,c){b&&c&&(g.N(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,g.t3&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+
"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))},lra=function(a,b){if(b){var c=g.lf(b,"LI");
c&&(g.N(c,Z(a,"highlight")),H7=g.Ek(b,"blur",(0,g.z)(function(a){g.jh(a,Z(this,"highlight"));g.Fk(H7)},a,c)))}},mra=function(a){if("UL"!=a.tagName.toUpperCase())return[];
a=(0,g.Xe)(g.Ye(a),function(a){return"LI"==a.tagName.toUpperCase()});
return(0,g.Xe)((0,g.Q)(a,function(a){return b7(a)?n7(a,function(a){return g.sa(a)&&1==a.nodeType?g.jf(a):!1}):!1}),function(a){return!!a})},I7=function(){u7.call(this,"menu");
this.o=this.g=null;this.A={};this.D={};this.B=null},J7=function(a){var b=I7.getInstance();
if(g.hh(a,Z(b)))return a;var c=b.Dd(a);return c?c:g.mf(a,Z(b,"content"))==b.g?b.o:null},nra=function(a,b,c){var d=K7(a,b);
d&&g.lk(d,g.mk(c));if(c==a.g){var e=9,f=8;g.hh(b,Z(a,"reversed"))&&(e^=1,f^=1);g.hh(b,Z(a,"flipped"))&&(e^=4,f^=4);a=new g.re(0,1);d&&$6(b,e,d,f,a,null,197);$6(b,e,c,f,a,null,197)}},pra=function(a,b,c){L7(a,b)&&!c?M7(a,b):(ora(a,b),!a.g||j7(b,a.g)?a.Pz(b):Toa(a.B,(0,g.z)(a.Pz,a,b)))},ora=function(a,b){if(b){var c=g.mf(b,Z(a,"content"));
c&&(0,g.F)(g.De(Z(a),c),function(a){!j7(a,b)&&L7(this,a)&&N7(this,a)},a)}},M7=function(a,b){if(b){var c=[];
c.push(b);var d=O7(a,b);d&&(d=g.De(Z(a),d),d=g.jb(d),c=c.concat(d),(0,g.F)(c,function(a){L7(this,a)&&N7(this,a)},a))}},N7=function(a,b){if(b){var c=O7(a,b);
g.kh(P7(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);g.N(c,Z(a,"content-hidden"));var d=O7(a,b);d&&g.Fe(d,{"aria-expanded":"false"});(d=K7(a,b))&&d.parentNode&&g.Ve(d);c&&c==a.g&&(a.o.appendChild(c),a.g=null,a.o=null,a.B&&a.B.Lb("ROOT_MENU_REMOVED"));g.Ji("yt-uix-menu-hide",b);c=g.ua(b).toString();g.Fk(a.A[c]);delete a.A[c]}},qra=function(a,b){var c=O7(a,b);
if(c){(0,g.F)(c.children,function(a){"LI"==a.tagName&&g.Fe(a,{role:"menuitem"})});
g.Fe(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+g.ua(c),c.id=d);(c=P7(a,b))&&g.Fe(c,{"aria-controls":d})}},rra=function(a,b,c){var d=O7(a,b);
d&&g.hh(b,Z(a,"checked"))&&(a=g.lf(c,"LI"))&&(a=g.L("yt-ui-menu-item-checked-hid",a))&&((0,g.F)(g.De("yt-ui-menu-item-checked",d),function(a){g.lh(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),g.lh(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))},L7=function(a,b){var c=O7(a,b);
return c?!g.hh(c,Z(a,"content-hidden")):!1},sra=function(a){(0,g.F)(g.Ce("UL",null,a),function(a){a.tabIndex=0;
var b=G7.getInstance();g.ih(a,[Z(b),Z(b,"list")])})},O7=function(a,b){var c=g.ch(b,"menu-content-id");
return c&&(c=g.Be(c))?(g.ih(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.o?a.g:g.L(Z(a,"content"),b)},K7=function(a,b){var c=g.ua(b).toString(),d=a.D[c];
if(!d){d=g.Oe("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];(0,g.F)(g.gh(b),function(a){e.push(a+"-mask")});
g.ih(d,e);a.D[c]=d}return d||null},P7=function(a,b){return g.L(Z(a,"trigger"),b)},tra=function(a,b){return j7(b,a.g)||j7(b,a.o)},Q7=function(){E7.call(this,"clickcard");
this.g={};this.o={}},R7=function(){E7.call(this,"hovercard")},S7=function(a,b,c,d,e,f){this.g=a;
this.F=null;this.A=g.L("yt-dialog-fg",this.g)||this.g;if(a=g.L("yt-dialog-title",this.A)){var k="yt-dialog-title-"+g.ua(this.A);a.setAttribute("id",k);this.A.setAttribute("aria-labelledby",k)}this.A.setAttribute("tabindex","-1");this.J=g.L("yt-dialog-focus-trap",this.g);this.L=!1;this.B=new g.Ef;this.G=[];this.G.push(c4(this.g,"click",(0,g.z)(this.nG,this),"yt-dialog-dismiss"));this.G.push(g.Ek(this.J,"focus",(0,g.z)(this.NC,this),!0));ura(this);this.O=b;this.P=c;this.N=d;this.H=e;this.V=f;this.D=
this.C=null},vra=function(a,b){a.isDisposed()||a.B.subscribe("post-all",b)},ura=function(a){a=g.L("yt-dialog-fg-content",a.g);
var b=[];g.Fb(wra,function(a){b.push("yt-dialog-show-"+a)});
g.kh(a,b);g.N(a,"yt-dialog-show-content")},xra=function(){return(0,g.wh)(g.De("yt-dialog"),function(a){return b7(a)})},yra=function(a){var b=g.Ce("iframe",null,a.g);
(0,g.F)(b,function(a){var b=g.ch(a,"onload");b&&(b=g.u(b))&&g.Ek(a,"load",b);if(b=g.ch(a,"src"))a.src=b},a);
return g.jb(b)},zra=function(a){(0,g.F)(window.document.getElementsByTagName("iframe"),function(b){-1==(0,g.Za)(a,b)&&g.N(b,"iframe-hid")})},Ara=function(){(0,g.F)(g.De("iframe-hid"),function(a){g.jh(a,"iframe-hid")})},Bra=function(a){g.ni((0,g.z)(function(){this.A&&this.A.focus()},a),0)},T7=function(){u7.call(this,"overlay");
this.B=this.o=this.A=this.g=null},Dra=function(a){a.B||(a.B=g.Gi("yt-uix-overlay-hide",Cra));
a.g&&vra(a.g,function(){var a=T7.getInstance();a.A=null;a.g.dispose();a.g=null})},Era=function(a){if(a.g){var b=a.A;
a.g.dismiss("overlayhide");b&&a.Pg(b,"overlay-hidden");a.A=null;a.o&&(g.Fk(a.o),a.o=null);a.g=null}},Fra=function(a,b){var c;
if(a)if(c=g.L("yt-dialog",a)){var d=g.Be("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=g.mf(b,"yt-dialog"));return c},Gra=function(){var a=T7.getInstance();
if(a.A)a=g.L("yt-dialog-fg-content",a.A.overlayContentNode);else a:{if(a=g.De("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=g.mf(a[b],"yt-dialog");if(b7(c)){a=a[b];break a}}a=null}return a},Cra=function(){Era(T7.getInstance())},Hra=function(a){a=g.mf(a,"yt-uix-button-subscription-container");
return g.L("yt-dialog",g.L("unsubscribe-confirmation-overlay-container",a))},Ira=function(a,b){g.Fk(U7);
U7.length=0;V7[b]||(V7[b]=Hra(a));T7.getInstance().show(V7[b]);var c=Gra();return new g.nd(function(a){U7.push(c4(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})},Jra=function(a){var b=window.document.location.protocol+"//"+window.document.domain+"/post_login",b=g.bg(b,"mode","subscribe"),b=g.bg("/signin?context=popup","next",b),b=g.bg(b,"feature","sub_button");
if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=g.Gi("LOGGED_IN",function(b){g.Hi(g.$g("LOGGED_IN_PUBSUB_KEY",void 0));g.Zg("LOGGED_IN",!0);a(b)});
g.Zg("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((window.screen.width-375)/2,(window.screen.height-440)/2)}},Kra=function(){var a=g.$g("PLAYER_CONFIG");
return a&&a.args&&void 0!==a.args.authuser?!0:!(!g.$g("SESSION_INDEX")&&!g.$g("LOGGED_IN"))},W7=function(){u7.call(this,"tooltip");
this.g=0;this.o={}},Lra=function(a,b,c){ara(b,c);
a=a.wa(b,"content-id");(a=g.Be(a))&&g.df(a,c)},Mra=function(a,b){return a.wa(b,"tooltip-text")||b.title},Pra=function(a,b){if(b){var c=Mra(a,b);
if(c){var d=g.Be(X7(a,b));if(!d){d=window.document.createElement("div");d.id=X7(a,b);d.className=Z(a,"tip");var e=window.document.createElement("div");e.className=Z(a,"tip-body");var f=window.document.createElement("div");f.className=Z(a,"tip-arrow");var k=window.document.createElement("div");k.setAttribute("aria-hidden","true");k.className=Z(a,"tip-content");var l=Nra(a,b),m=X7(a,b,"content");k.id=m;g.bh(b,"content-id",m);e.appendChild(k);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);var n=
m7(b),m=X7(a,b,"arialabel"),f=window.document.createElement("div");g.N(f,Z(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==window.document.body.getAttribute("dir")?c+" "+n:n+" "+c;g.df(f,n);b.setAttribute("aria-labelledby",m);m=g.zh()||window.document.body;m.appendChild(f);m.appendChild(d);Lra(a,b,c);(c=(0,window.parseInt)(a.wa(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",g.N(k,Z(a,"normal-wrap")));k=g.hh(b,Z(a,"reverse"));Ora(a,b,d,
e,l,k)||Ora(a,b,d,e,l,!k);var q=Z(a,"tip-visible");g.ni(function(){g.N(d,q)},0)}}}},Ora=function(a,b,c,d,e,f){g.O(c,Z(a,"tip-reverse"),f);
var k=0;f&&(k=1);var l=g.mk(b);f=new g.re((l.width-10)/2,f?l.height:0);var m=g.ek(b);vqa(new g.re(m.x+f.x,m.y+f.y),c,k);var m=g.He(window),n=g.ik(c);c=g.mk(d);var q=Math.floor(c.width/2),k=!!(m.height<n.y+l.height),l=!!(n.y<l.height);f=!!(n.x<q);m=!!(m.width<n.x+q);n=(c.width+3)/-2- -5;a=a.wa(b,"force-tooltip-direction");if("left"==a||f)n=-5;else if("right"==a||m)n=20-c.width-3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||
l)},X7=function(a,b,c){a=Z(a)+k7(b);
c&&(a+="-"+c);return a},Nra=function(a,b){var c=null;
g.S2&&g.hh(b,Z(a,"masked"))&&((c=g.Be("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),g.tv(c)):(c=window.document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Z(a,"tip-mask")));return c},Qra=function(a){var b=g.Be("yt-uix-tooltip-shared-mask"),c=b&&g.kf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),g.uv(b),window.document.body.appendChild(b))},Y7=function(){u7.call(this,"subscription-button")},Rra=function(a,b){if(!a.wa(b,"ypc-enabled"))return null;
var c=a.wa(b,"ypc-item-type"),d=a.wa(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}},Sra=function(a,b){var c=a.wa(b,Z7.GB),d=!!a.wa(b,"is-subscribed"),c="-"+c,e=$7.jA+c;
g.O(b,$7.iA+c,!d);g.O(b,e,d);a.wa(b,Z7.uA)&&!a.wa(b,Z7.tA)&&(c=Z(W7.getInstance()),g.O(b,c,!d),b.title=d?"":a.wa(b,Z7.vA));d?g.ni(function(){g.N(b,$7.Dq)},1E3):g.jh(b,$7.Dq)},Tra=function(a,b){return(0,g.Xe)(g.De(Z(a)),function(a){return b==this.wa(a,"channel-external-id")},a)},Ura=function(a,b){var c=(0,g.z)(function(a){a.discoverable_subscriptions&&g.Zg("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);
this.Aq(b)},a);
Jra(c)},Vra=function(a,b){if(!a.wa(b,"show-unsub-confirm-dialog"))return!1;
var c=a.wa(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=(0,window.parseInt)(a.wa(b,"subscribed-timestamp"),10),(new a7).getTime()<1E3*(c+600))?!0:!1},i4={thin:2,
medium:4,thick:6},dpa=[2,2,6,6,0];g.B(l4,g.Uc);g.h=l4.prototype;g.h.Qn=null;g.h.yi=null;g.h.na=function(){return this.yi};
g.h.addEventListener=function(a,b,c,d){g.Fc(this.yi,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Oc(this.yi,a,b,c,d)};
g.h.R=function(){l4.M.R.call(this);var a=this.yi;if(a)if(g.wc(a))a.Rd&&g.Cc(a.Rd);else if(a=g.Ic(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)g.Pc(d[e])&&++b}};
g.B(s4,l4);s4.prototype.fill=null;var w4;g.B(t4,s4);g.B(u4,l4);var cpa=0;g.B(y4,t4);g.B(z4,u4);z4.prototype.clear=function(){g.Se(this.na())};
z4.prototype.setSize=function(a,b){F4(this.na(),{width:a,height:b})};
g.B(A4,g.nw);A4.prototype.C=null;A4.prototype.Yg=function(){return this.ke?g.mk(this.na()):g.qa(this.width)&&g.qa(this.height)?new g.ue(this.width,this.height):null};
A4.prototype.resume=function(){};
g.B(o4,v4);g.B(p4,v4);var T4=null,W4={bevel:1,dropshadow:2};g.B(E4,A4);g.h=E4.prototype;g.h.Gk=function(){var a=q4(this,"svg",{width:this.width,height:this.height,overflow:"hidden"}),b=q4(this,"g");this.G=q4(this,"defs");this.C=new z4(b,this);a.appendChild(this.G);a.appendChild(b);this.g=a;this.A&&(this.na().setAttribute("preserveAspectRatio","none"),this.N?this.Jl():this.na().setAttribute("viewBox","0 0 "+(this.A?this.A+" "+this.O:"")))};
g.h.Jl=function(){if(this.ke){var a=this.Yg();if(0==a.width)this.na().style.visibility="hidden";else{this.na().style.visibility="";var b=a.width/this.A,a=a.height/this.O;this.C.na().setAttribute("transform","scale("+b+" "+a+") translate(0 0)")}}};
g.h.setSize=function(a,b){g.lk(this.na(),a,b)};
g.h.Yg=function(){if(!g.Qj)return this.ke?g.mk(this.na()):E4.M.Yg.call(this);var a=this.width,b=this.height,c=g.y(a)&&-1!=a.indexOf("%"),d=g.y(b)&&-1!=b.indexOf("%");if(!this.ke&&(c||d))return null;var e,f;c&&(e=this.na().parentNode,f=g.mk(e),a=(0,window.parseFloat)(a)*f.width/100);d&&(e=e||this.na().parentNode,f=f||g.mk(e),b=(0,window.parseFloat)(b)*f.height/100);return new g.ue(a,b)};
g.h.clear=function(){this.C.clear();g.Se(this.G);this.o={}};
g.h.Tg=function(){var a=this.Yg();E4.M.Tg.call(this);a||this.dispatchEvent("resize");if(this.N){var a=this.width,b=this.height;"string"==typeof a&&-1!=a.indexOf("%")&&"string"==typeof b&&-1!=b.indexOf("%")&&this.J.S(x4(),"tick",this.Jl);this.Jl()}};
g.h.hi=function(){E4.M.hi.call(this);this.N&&this.J.Da(x4(),"tick",this.Jl)};
g.h.R=function(){delete this.o;delete this.G;delete this.C;this.J.dispose();delete this.J;E4.M.R.call(this)};
g.h=H4.prototype;g.h.Ce=null;g.h.pd=null;g.h.cj=!0;g.h.clear=function(){this.Aa.length=0;this.Ia.length=0;this.Md.length=0;delete this.Ce;delete this.pd;delete this.cj;return this};
g.h.dc=function(a){var b=g.Ua(this.Aa);if(null==b)throw Error("Path cannot start with lineTo");1!=b&&(this.Aa.push(1),this.Ia.push(0));for(b=0;b<arguments.length;b+=2){var c=arguments[b],d=arguments[b+1];this.Md.push(c,d)}this.Ia[this.Ia.length-1]+=b/2;this.pd=[c,d]};
g.h.close=function(){var a=g.Ua(this.Aa);if(null==a)throw Error("Path cannot start with close");4!=a&&(this.Aa.push(4),this.Ia.push(1),this.pd=this.Ce);return this};
g.h.clone=function(){var a=new this.constructor;a.Aa=this.Aa.concat();a.Ia=this.Ia.concat();a.Md=this.Md.concat();a.Ce=this.Ce&&this.Ce.concat();a.pd=this.pd&&this.pd.concat();a.cj=this.cj;return a};
g.h.transform=function(a){if(!this.cj)throw Error("Non-simple path");a.transform(this.Md,0,this.Md,0,this.Md.length/2);this.Ce&&a.transform(this.Ce,0,this.Ce,0,1);this.pd&&this.Ce!=this.pd&&a.transform(this.pd,0,this.pd,0,1);return this};
g.h.isEmpty=function(){return 0==this.Aa.length};
var kpa={BW:"xx",DW:"xy",GW:"yx",HW:"yy"},mpa={VQ:"current",OT:"new"};U4.prototype.B=function(){var a=g.u("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.g.apiaryHost;g.C(g.D(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.Xm;g.C(g.D(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",g.$g("SESSION_INDEX"));g.u("gapi.client.setApiKey")(this.g.innertubeApiKey)};
U4.prototype.o=function(){return{context:g.fq(this.g)}};
U4.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.ni(function(){e||(e=!0,c.Xc&&c.Xc())},c.timeout));
gpa(this,a,b,function(a){if(!e)if(e=!0,d&&g.pi(d),a)c.Eb&&c.Eb(a);else if(c.onError)c.onError()})};
X4.prototype.ub=function(){return this.A};
g.B(Z4,K4);g.B(e5,g.bc);var Epa=/[^\d]+$/;m5.prototype.na=function(){return this.C};
m5.prototype.A=function(){};
o5.prototype.clone=function(){return new o5(this.start,this.end)};
g.B(q5,Y4);var xpa={CLOSED:"closed",fU:"playerControlShow",yB:"rollOver",AB:"shown"},zpa={eA:"anchored",CU:"rect",YU:"shapeless"};g.B(y5,g.aw);g.h=y5.prototype;
g.h.play=function(a){if(a||0==this.g)this.progress=0,this.o=this.A;else if(this.ib())return!1;f5(this);this.startTime=a=(0,g.E)();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.C=this.startTime;this.progress||this.Zk();this.Qd("play");-1==this.g&&this.Qd("resume");this.g=1;var b=g.ua(this);b in g.$v||(g.$v[b]=this);g.Zv();A5(this,a);return!0};
g.h.stop=function(a){f5(this);this.g=0;a&&(this.progress=1);z5(this,this.progress);this.Qd("stop");this.Ri()};
g.h.pause=function(){this.ib()&&(f5(this),this.g=-1,this.Qd("pause"))};
g.h.R=function(){0==this.g||this.stop(!1);this.Qd("destroy");y5.M.R.call(this)};
g.h.destroy=function(){this.dispose()};
g.h.PF=function(a){A5(this,a)};
g.h.Mo=function(){this.Qd("animate")};
g.h.Qd=function(a){this.dispatchEvent(new e5(a,this))};
var Gpa={em:1,ex:1},Fpa={cm:1,"in":1,mm:1,pc:1,pt:1};g.B(D5,m5);
D5.prototype.A=function(a,b){var c=t6(a);if(c){var d=N4(c,b);if(!(0>=d.width||0>=d.height)){var e;if(e=(c=(c=s6(a))&&c.g?c.g:null)&&c.length?c[0]:null){var f=g.Df(L4(b,M4(e,new g.yf(e.F,e.G,e.hj,e.A),b.g))),k=d.clone(),c=new g.yf(f.x,f.y,1,1),l=Math.max(k.left+k.width,c.left+c.width),m=Math.max(k.top+k.height,c.top+c.height);k.left=Math.min(k.left,c.left);k.top=Math.min(k.top,c.top);k.width=l-k.left;k.height=m-k.top;var c=a.g,k=j5(k,c.effects),l=n5(this,k.width,k.height),m=k5(c,k.width,k.height,this.g),
d=new g.yf(d.left-k.left,d.top-k.top,d.width,d.height),n=new g.re(f.x-k.left,f.y-k.top);this.B=17*B4(b.g,e.o,e.g?e.g:"xy");e=c.A;var f=a.g,q=this.g&&q6(a),t=q?f.g+1:f.g,q=(f=t?new X4(t,q?f.B:f.D):null)?f.ub()/2:0,t=npa(d,n),v=this.D(d,e,n,t),x=n.x,n=n.y,A=d.width,G=d.height,I=d.left,d=d.top,K=new H4;I4(K,I+e+q,d+q);"t"==t&&(K.dc(v.start,d+q),K.dc(x,n),K.dc(v.end,d+q));K.dc(I+A-e-q,d+q);J4(K,e,e,-90);"r"==t&&(K.dc(I+A-q,v.start),K.dc(x,n),K.dc(I+A-q,v.end));K.dc(I+A-q,d+G-e-q);J4(K,e,e,0);"b"==t&&
(K.dc(v.end,d+G-q),K.dc(x,n),K.dc(v.start,d+G-q));K.dc(I+e+q,d+G-q);J4(K,e,e,90);"l"==t&&(K.dc(I+q,v.end),K.dc(x,n),K.dc(I+q,v.start));K.dc(I+q,d+e+q);J4(K,e,e,180);K.close();G4(l,K,f,m);if(m=this.na())g.N(m,"annotation-shape"),g.N(m,"annotation-speech-shape"),g.ak(m,k.left,k.top),g.lk(m,k.width,k.height),i5(l,m,c.effects)}}}};
D5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=g.ne(c-a/2,d+b,d+e-a-b);return new o5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new o5(0,0)};
E5.prototype.B=function(a,b,c,d){this.g[a]=b?!c:c;a=g.Ib(this.g,function(a){return a});
this.o!=a&&(this.o=a,this.A.Lb(this.C,a,d))};
g.B(F5,y5);F5.prototype.B=g.w;F5.prototype.Mo=function(){this.B();F5.M.Mo.call(this)};
F5.prototype.Ri=function(){this.B();F5.M.Ri.call(this)};
F5.prototype.Zk=function(){this.B();F5.M.Zk.call(this)};
g.B(G5,Y4);g.B(H5,Y4);g.B(I5,q5);g.B(J5,q5);g.B(K5,Y4);g.B(L5,Y4);g.B(N5,q5);g.B(O5,Y4);var Ppa={wm:"click",CLOSE:"close",hS:"hidden",NU:"rollOut",yB:"rollOver",AB:"shown"},Opa={CLOSE:"close",VT:"openUrl",HB:"subscribe"};g.h=R5.prototype;g.h.Bl=function(){this.context.A.subscribe("resize",this.Zj,this)};
g.h.na=function(){return this.oa};
g.h.Ch=function(a,b,c,d,e,f,k){this.context.g.S(a,"click",g.va(this.Uk,b,c,d,e,f||[],k||0),this);this.context.g.S(a,"touchstart",g.va(function(){this.Fp=!1}),this);
this.context.g.S(a,"touchmove",g.va(function(){this.Fp=!0}),this)};
g.h.Uk=function(a,b,c,d,e,f,k){if(this.Fp)return!1;k&&(k.stopPropagation(),k.preventDefault());(b=u5(a,b,this.context.videoData.videoId))&&Dpa(this,b,t5(b,a.target),c,d,e,f,a.g);return!1};
g.h.show=function(){this.N=(0,g.E)()};
g.h.im=function(){};
g.h.destroy=function(){g.Ve(this.na())};
g.h.Zj=function(){};
g.B(W5,D5);W5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=c<=d+e/2?Math.max(d+e/4-a/2,d+b):Math.min(d+3*e/4-a/2,d+e-a-b);return new o5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new o5(0,0)};
g.B(X5,m5);X5.prototype.A=function(a,b){var c=t6(a);if(c){var d=N4(c,b);if(!(0>=d.width||0>=d.height)){var c=a.g,e=j5(d,c.effects),f=n5(this,e.width,e.height),k=k5(c,d.width,d.height,this.g),d=new g.yf(0,0,d.width,d.height),l=c.A,m=a.g,n=this.g&&q6(a),q=n?m.g+1:m.g,n=(m=q?new X4(q,n?m.B:m.D):null)?m.ub()/2+1:0,d=l5(d,l,n);G4(f,d,m,k);if(k=this.na())g.N(k,"annotation-shape"),g.N(k,"annotation-popup-shape"),g.ak(k,e.left,e.top),g.lk(k,e.width,e.height),i5(f,k,c.effects)}}};
g.B(Y5,m5);Y5.prototype.A=function(a,b){var c=t6(a);if(c){var d=N4(c,b);if(!(0>=d.width||0>=d.height)){var e=a.g,c=j5(d,e.effects),f=n5(this,c.width,c.height),k=new g.yf(0,0,d.width,d.height),l=e.A,d=new X4(!e.C&&this.g?1:e.C,e.bgColor),m=new o4("#000",0),n=d?d.ub()/2+1:0,k=l5(k,l,n);G4(f,k,d,m);f=this.na();g.N(f,"annotation-shape");e=e.o;g.ok(f,this.g?Math.max(e,.9):e);g.ak(f,c.left,c.top);g.lk(f,c.width,c.height)}}};
g.B(Z5,R5);Z5.prototype.Bl=function(){Z5.M.Bl.call(this);var a=this.annotation.data;"start_ms"in a&&"end_ms"in a&&S5(this,this.annotation.data.start_ms,this.annotation.data.end_ms,this.annotation.id,this.show,this.im)};
g.B($5,F5);$5.prototype.B=function(){this.element.style.left=Math.round(this.o[0])+"px";this.element.style.top=Math.round(this.o[1])+"px"};
var cqa={collaborator:O5,donation:N5,episode:G5,movie:G5,playlist:L5,poll:K5,productListing:J5,simple:q5,tip:I5,video:H5};a6.prototype.o=function(a,b){var c=g.lf(b.target,"label");c&&g.O(c,"iv-card-poll-choice-focused",a)};
a6.prototype.F=function(a,b){var c=g.mf(b.target,"iv-card-poll");if(c)if(a.A)g.L("iv-card-sign-in-button",c).click();else{var d=(0,window.parseInt)(M5(b.target,"pollChoiceIndex"),10);if(null==a.g)a.choices[d].count++,a.g=d;else if(a.g!=d){var e=a.choices[a.g];e.count=Math.max(e.count-1,0);a.choices[d].count++;a.g=d}else e=a.choices[a.g],e.count=Math.max(e.count-1,0),a.g=null;c6(a,c);g.Pi(this.g.videoData.sa,{wc:{action_poll_vote:1},Ib:{poll_id:a.id,index:d,session_token:a.G}});c={};c["link-id"]=d;
T5(this.g.logger,a.Mb,void 0,c,a.o.click,5);B5(a.C)}};
a6.prototype.D=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");b&&(b=g.va(b,a.J,a.B));l6(this,a,!0,b)};
a6.prototype.G=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffers");b&&(b=g.va(b,a.J,a.B,a.L));l6(this,a,!1,b)};
var nqa={mW:"video_relative",gU:"player_relative"},mqa={hA:"branding",tQ:"card",ER:"drawer",jS:"highlight",eT:"marker",vU:"promotion",TEXT:"text",xW:"widget"},O6={eA:"anchored",hA:"branding",CHANNEL:"channel",UQ:"cta",kS:"highlightText",KS:"label",PLAYLIST:"playlist",qU:"popup",jV:"speech",HB:"subscribe",FV:"title",VIDEO:"video",rW:"vote",uW:"website"};n6.prototype.showLinkIcon=function(){return p6(this,function(a){return null!=a.url&&a.url.showLinkIcon})};
var Aqa={IMG:" ",BR:"\n"},zqa={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};z6.prototype.show=function(){this.isVisible=!0;this.g&&(this.g.show(),this.A.subscribe("resize",this.D,this),this.A.subscribe("onVideoAreaChange",this.B,this))};
z6.prototype.destroy=function(){if(this.g){Upa(this);var a=this.g;g.Uv(a.F);a.Lo.dispose();a.H.dispose();a.o&&g.Ve(a.o);a.A&&a.A.na()&&g.Ve(a.A.na())}A6(this)};
z6.prototype.B=function(){D6(this.g)};
z6.prototype.D=function(){D6(this.g)};
g.h=Vpa.prototype;g.h.Ay=function(){this.N||(this.B&&g.R(this.B,!0),this.C&&g.R(this.C,!0),this.A&&(this.A.g=!0,g.ok(this.o,E6(this)?1:0),this.A.A(this.g,C6(this))),this.H.isActive()&&this.H.stop(),this.N=!0,this.J=Soa(this.F,g.Xl(this.D),function(a){this.Lo.stop();this.Of(a)}))};
g.h.Of=function(){this.N&&(this.P?this.H.start():this.$t(),this.A&&(this.A.g=!1,g.ok(this.o,E6(this)?1:0),this.A.A(this.g,C6(this))),this.N=!1,this.J&&(this.F.Da(this.J),this.J=null))};
g.h.$t=function(){this.B&&g.R(this.B,!1);this.C&&g.R(this.C,!1)};
g.h.DH=function(a){this.ba=a;this.Lo.$g()};
g.h.nN=function(){var a=this.ba,b=new g.re(a.clientX,a.clientY),c=g.ek(this.D.getRootNode()),d=V5(c,this.O),c=(this.C&&g.pk(this.C)||this.B&&g.pk(this.B))&&V5(c,this.P);d&&d.contains(b)||c&&c.contains(b)?this.Ay():this.Of(a)};
g.h.show=function(){var a=this.g.g,a=(a&&0==a.o||"title"==this.g.style||"highlightText"==this.g.style?!1:!0)&&!this.A,b=!this.o,c="widget"==this.g.type;if(a){var d=C6(this),e=null;"highlight"==this.g.type||"label"==this.g.style?e=new Y5:"popup"==this.g.style?e=new X5:"anchored"==this.g.style?e=new D5:"speech"==this.g.style&&(e=new W5);e&&(e.A(this.g,d),this.A=e,d=e.na())&&(g.R(d,!1),g.N(d,"annotation-type-"+this.g.type.toLowerCase()),this.$(d))}if(b){d=["annotation"];"highlightText"!=this.g.style||
d.push("annotation-no-mouse");d.push("annotation-type-"+this.g.type.toLowerCase());this.o=g.M("DIV",d);g.R(this.o,!1);this.g.B&&(this.G=g.M("DIV","inner-text"),"label"==this.g.style&&(g.N(this.G,"label-text"),this.G.style.backgroundColor=this.g.g.bgColor),g.df(this.G,this.g.B),this.o.appendChild(this.G));g.bh(this.o,"annotation_id",this.g.id);this.$(this.o);Wpa(this,this.o);if(q6(this.g)&&this.g.showLinkIcon()){if(e=o6(this.g))d=this.o,e=new g.ig(O4(e)),d.title=e.o+e.A;this.C=g.M("SPAN","annotation-link-icon");
g.R(this.C,!1);this.o.appendChild(this.C)}Xpa(this);q6(this.g)||(this.o.style.cursor="default")}c&&("subscribe"==this.g.style?g.L("yt-uix-subscription-button",this.o)||y6(this.o,this.g.htmlBlob):this.g.htmlBlob&&y6(this.o,this.g.htmlBlob));if(a||b){a:{a=this.g.o.g;if(a.length&&(a=r5(a[0]))){a=a.H;break a}a=0}this.o&&(this.o.style.zIndex=a);this.A&&this.A.na()&&(this.A.na().style.zIndex=a)}g.R(this.o,!0);g.ok(this.o,E6(this)?1:0);D6(this);this.A&&this.A.na()&&g.R(this.A.na(),!0)};
g.B(F6,Z5);g.h=F6.prototype;g.h.show=function(){this.isActive||(F6.M.show.call(this),this.G||(Zpa(this),this.G=!0),g.R(this.na(),!0),this.annotation&&this.annotation.Mb&&L6(this.context.logger,this.annotation.Mb),g.jh(this.na(),"iv-promo-inactive"),this.na().removeAttribute("aria-hidden"),this.isActive=!0,G6(this),aqa(this),bqa(this,this.D))};
g.h.im=function(){this.isActive&&(g.N(this.na(),"iv-promo-inactive"),this.isActive=!1,this.na().setAttribute("aria-hidden",!0))};
g.h.Uk=function(a,b,c,d,e,f,k){return this.B?!1:F6.M.Uk.call(this,a,b,c,d,e,f,k)};
g.h.Wn=function(a,b){b.stopPropagation();aqa(this);bqa(this,a);this.$c.focus()};
g.h.pD=function(a){this.F=!0;this.Wn(500,a)};
g.h.oD=function(){this.F=!1;$pa(this)};
g.h.qN=function(a){a.stopPropagation();this.im();S6(this.context.logger,this.annotation.Mb)};
g.h.eD=function(a){a.stopPropagation();G6(this);this.B=!0;g.N(this.na(),"iv-promo-collapsed-no-delay");this.C.start();S6(this.context.logger,this.annotation.Mb)};
g.h.destroy=function(){this.C.dispose();F6.M.destroy.call(this)};
g.B(H6,Z5);g.h=H6.prototype;g.h.zK=function(a,b,c,d){this.A.stop();if(!this.B){var e=g.mk(a);this.g||(g.kk(a,e.width),g.kk(b,e.width));g.ak(c,e.width,e.height-Math.max(Math.min(e.height,d)/2+Math.round(10),20));this.B=!0;g.R(a,!0);this.C=new g.Kd(function(){g.N(this.na(),"iv-branding-active")},0,this);
this.C.start()}};
g.h.bE=function(a,b){g.jh(this.na(),"iv-branding-active");this.D=new g.Kd((0,g.z)(function(){g.R(a,!1);this.g||g.kk(b,0)},this),250);
this.D.start();this.B=!1};
g.h.show=function(){if(!this.isActive){H6.M.show.call(this);if(!this.F){g.N(this.na(),"iv-branding");var a=this.annotation.data;this.G=a.image_width;this.o=g.M("IMG",{src:a.image_url,"class":"branding-img iv-click-target",width:a.image_width,height:a.image_height});g.R(this.o,!1);var b=g.M("DIV","branding-img-container",this.o);this.na().appendChild(b);var c=g.M("DIV","iv-branding-context-name");g.df(c,a.channel_name);var d=g.M("DIV","iv-branding-context-subscribe");if(a.use_standalone_subscribe_button){if(b=
a.standalone_subscribe_button_data)this.g=new g.tu(b.subscribeText,b.unsubscribeText,!!b.enabled,a.channel_id,!!b.subscribed,b.feature,a.session_data.itct,this.H.o),this.g.Ha(d)}else this.annotation.htmlBlob?y6(d,this.annotation.htmlBlob):a.num_subscribers&&g.df(d,a.num_subscribers);b=g.M("DIV","iv-branding-context-subscribe-caret");c=g.M("DIV","branding-context-container-inner",b,c,d);g.R(c,!1);d=g.M("DIV","branding-context-container-outer",c);g.Uj(d,"right",this.G+"px");this.na().appendChild(d);
var e=o6(this.annotation);e&&this.Ch(this.o,e,this.annotation.id,a.session_data,this.annotation.Mb);this.A=new g.Kd(g.va(this.bE,c,d),500,this);this.context.g.S(this.na(),"mouseover",(0,g.z)(this.zK,this,c,d,b,a.image_height));this.context.g.S(this.na(),"mouseout",(0,g.z)(this.A.start,this.A,void 0));this.F=!0}L6(this.context.logger,this.annotation.Mb);g.R(this.na(),!0);this.isActive=!0;if(this.o){var a=this.o,f,b=g.nk(a).width,c=g.qa(void 0)?void 0:b;f=f||0;g.ak(a,c);f=new $5(a,[c,a.offsetTop],[c-
b-f,a.offsetTop],200,Spa);this.context.B.S(f,"begin",g.va(g.R,a,!0));f.play()}}};
g.h.im=function(){this.isActive&&(g.R(this.na(),!1),this.isActive=!1)};
g.h.destroy=function(){this.g&&(this.g.dispose(),this.g=null);H6.M.destroy.call(this)};
g.B(I6,R5);g.h=I6.prototype;g.h.isAvailable=function(){var a;if(a=!!this.o.length)(a=this.X.getRootNode())?(a=g.mk(a),a=177<a.width&&177<a.height):a=!1;return a};
g.h.WB=function(){this.ga&&M6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.wC=function(){(this.ga=this.B)&&this.ek()};
g.h.oN=function(){M6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.ek=function(){this.B&&(g.xv(this.da),g.jh(this.context.o.getRootNode(),"ytp-iv-drawer-open"),this.B=!1,g4(this.X),this.F&&this.F.stop(),this.F=new g.Kd(function(){this.V&&(this.V.focus(),this.V=null)},330,this),this.F.start())};
g.h.Zj=function(){var a=this.isAvailable();g.R(this.na(),a);g.O(this.context.o.getRootNode(),"ytp-iv-drawer-enabled",a);g4(this.X)};
g.h.destroy=function(){var a=g.Ll(this.X).o;a&&a.$p(!1,void 0);this.X.getRootNode().removeChild(this.D);g.Hi(this.ca);g.Fk(this.Va);this.O&&this.O.dispose();this.F&&this.F.dispose();I6.M.destroy.call(this)};
g.h.pN=function(a){this.cn.start();a.preventDefault();a=a||window.event;var b=0;"MozMousePixelScroll"==a.type?b=0==(a.axis==a.HORIZONTAL_AXIS)?a.detail:0:window.opera?b=a.detail:b=0==a.wheelDelta%120?"WebkitTransform"in window.document.documentElement.style?window.chrome&&0==window.navigator.platform.indexOf("Mac")?a.wheelDeltaY/-30:a.wheelDeltaY/-1.2:a.wheelDelta/-1.6:a.wheelDeltaY/-3;if(a=b)this.A.scrollTop+=a};
g.h.Gw=function(a){if(!g.hh(this.X.getRootNode(),"ytp-cards-teaser-shown")){this.g!=a&&(this.g=a,J6(this));if(g.pk(this.na())){var b;2==this.context.o.Xa()?b=1==((0,window.isNaN)(void 0)?this.context.o.Kx():void 0):(b=(0,window.isNaN)(void 0)?this.context.o.nj():void 0,b=1==b||0==b&&0===this.context.o.getCurrentTime());if(b&&a.Ub.teaserDurationMs){b={teaserText:a.Ub.teaserText,durationMs:a.Ub.teaserDurationMs};var c=g.Ll(this.X).o;c&&c.$p(!0,b)}}this.fa.isActive()||((!this.B||!this.cn.isActive()&&
this.Sk)&&lqa(this,a),this.fa.start(910+a.Ub.teaserDurationMs))}};
g.h.qK=function(a){this.B||(this.g=a,J6(this),lqa(this,a),M6(this,"YOUTUBE_DRAWER_AUTO_OPEN",!1,a))};
g.h.oC=function(){this.B&&(K6(this.context.logger,this.L,4,N6(this).o.close),this.G&&B5(this.G),this.ek())};
g.h.BC=function(){g.O(this.D,"iv-drawer-scrolled",0<this.A.scrollTop)};
g.h.jF=function(){var a=N6(this);T6(this.context.logger,8,a.Mb,a.o.DK);a&&U5([a.F,a.D])};
g.h.iF=function(a){var b=N6(this);this.g?a?(a=this.context.logger,T6(a,9,b.Mb,b.o.rp),a.X.Eg(4,void 0),B5(b.F)):(a=this.context.logger,T6(a,12,b.Mb,b.o.rp),a.X.Eg(4,void 0),B5(b.D)):(a=this.context.logger,K6(a,this.L,12,b.o.rp),a.X.Eg(4,void 0),this.$&&B5(this.$))};
var Wra=["ytp-ce-top-left-quad","ytp-ce-top-right-quad","ytp-ce-bottom-left-quad","ytp-ce-bottom-right-quad"];g.B(V6,g.iu);V6.C="AnnotationsModule";V6.A=function(a){switch(a.type){case "branding":case "promotion":return!0}return!1};
V6.B=function(a){return"card"==a.type||"drawer"==a.type};
V6.o=function(){var a=g.M("DIV",["annotation","annotation-type-custom"]);g.R(a,!1);return a};
V6.g=function(a){switch(a){case "annotation-editor":case "live-dashboard":return!0}return!1};
g.h=V6.prototype;g.h.GM=function(a,b){if(!V6.g(g.U(this.g).o))return null;switch(a){case "loadCustomAnnotationsXml":var c=g.Qv(b);c&&X6(this,c);return!0;case "removeCustomAnnotationById":return b&&this.o&&(eqa(this.o,b),g4(this.g)),!0}return null};
g.h.HM=function(){return V6.g(g.U(this.g).o)?["loadCustomAnnotationsXml","removeCustomAnnotationById"]:[]};
g.h.To=function(){if(this.C){var a=g.cZ(g.Xl(this.g),!0);g.lk(this.C.element,a.width,a.height);g.ak(this.C.element,a.left,a.top)}if(this.o){var b=e4(this.g.app.B.J),a=this.o,b=b.width;g.O(a.D,"iv-drawer-small",426>=b);g.O(a.D,"iv-drawer-big",1280<=b)}};
g.h.gI=function(a){g.S(a.state,2)&&(this.tj()&&this.iy()&&2!=this.g.Xa()&&this.aq(!1),this.$p(!1))};
g.h.load=function(){V6.M.load.call(this);this.B.show();this.G++;var a=this.g.getVideoData(),b=a.videoId,c=(0,g.z)(this.UG,this,b,this.G);g.kq()&&(c=Iqa(this,c));c={format:"XML",gd:c,wc:{}};a.isPharma&&(c.wc.pharma="1");c.method="POST";c.withCredentials=!0;var d=g.U(this.g);"gaming"==d.o&&(c.wc.gaming="1");(b=d.F.get(b))&&Jqa(c,b);a.sa&&(b=b&&b.fg,a.ll&&!b||g.Oi(a.sa,c));g.sm(this.g,this.C.element,5);this.To()};
g.h.unload=function(){sqa(this.ka,{"iv-event":1});g.pm(this.g,"annotations_module");g.Fb(this.A,function(a){a.destroy()});
g.Fb(this.H,function(a){a.destroy()});
this.F=null;this.o&&(this.o.destroy(),this.o=null,g4(this.g));this.A={};this.H={};this.B.ma();V6.M.unload.call(this);this.C.detach()};
g.h.UG=function(a,b,c){if(!Eqa(this,b,a)&&(a=g.mi(c)&&c.responseXML?c.responseXML:null)){X6(this,a);g.N(this.g.getRootNode(),"iv-module-loaded");a=[];for(var d in this.A){b=this.A[d].annotation;if(b.o)if(c=b.o,c.g.length)if(c=c.g[0].o||c.g[0].g||c.g[0].A,!c||2>c.length)c=null;else{var e=c.length-1;c=0>=c[0].t&&0>=c[e].t?null:{start:c[0].t,end:c[e].t}}else c=null;else c=null;if(e=c)if(c=1E3*e.start,e=1E3*e.end,0==c&&(c++,e++),!(e<c)){var f={id:d,namespace:"annotations_module"};"marker"==b.type&&(f.style=
"ytp-chapter-marker",f.tooltip=b.B,f.visible=!0);b=new g.zm(c,e,f);a.push(b)}}g.mm(this.g,a)}};
g.h.Xv=function(a){a==this.g.getVideoData().videoId&&(this.loaded?Kqa(this):this.load())};
g.h.jy=function(a){a=a.getId();var b=this.A[a];b&&!b.C&&(b=b.annotation,Nqa(this,a),L6(this.ka,b.Mb))};
g.h.ky=function(a){Y6(this,a.getId())};
g.h.Yt=function(a){if(a){a.isVisible=!1;if(a.g){Upa(a);var b=a.g;b.o&&g.R(b.o,!1);b.A&&b.A.na()&&g.R(b.A.na(),!1);b.L&&(b.F.Da(b.L),b.L=null)}Z6(this,"shown",!1,a.annotation.id);this.ik(a.annotation,"hidden")}};
g.h.Rw=function(a){a&&(a.show(),Z6(this,"shown",!0,a.annotation.id),this.ik(a.annotation,"shown"))};
g.h.gJ=function(a,b,c){var d=this.A[a];if(d&&b.value!=c){b.value=c;var e=!1;r6(d.annotation,function(a){e|=a.value});
Oqa(this,a,b,e)}};
g.h.QF=function(a){if(a&&a.id){var b=o6(a);if(b){var c=O4(b);if(c){var d=(0,g.z)(this.ik,this,a,"click"),e=this.g.getVideoData();if("new"==t5(c,b.target)||Pqa(this,b,e.videoId))d(),d=null;T5(this.ka,a.Mb,d)}}}};
g.h.ik=function(a,b){Mpa(a,function(c){if(c.trigger==b&&"openUrl"==c.type&&c.url){var d=this.g.getVideoData(),e;if(!(e=!Pqa(this,c.url,d.videoId))){e=tqa(c.url);var f=uqa(c.url);if(e){if(d.videoId==e)this.g.Ic(f||0);else{var k=W6(this).o;g.B2(k.app,e,void 0,void 0,void 0,void 0);f&&g.km(W6(this).o)&&W6(this).o.Ic(f)}e=!0}else e=!1;e=!e}e&&(d=u5(c.url,a.id,d.videoId,g.U(this.g)))&&(this.g.kd(),e=t5(d,c.url.target),c=d,d="current"==e?"_top":void 0,e=g.Jh(c),f=null,"ei"in e&&(f={ei:e.ei},c=g.gg(c,"ei")),
g.hv(c,d,f))}},this)};
g.h.bH=function(){Z6(this,"playerControlShow",!1)};
g.h.JI=function(){Z6(this,"playerControlShow",!0)};
g.h.IM=function(a){Z6(this,"rollOver",!0,a.id)};
g.h.Of=function(a){Z6(this,"rollOver",!1,a.id)};
g.h.qG=function(a){a&&a.id&&(this.A[a.id].C=!0,Y6(this,a.id),S6(this.ka,a.Mb),this.ik(a,"close"),Z6(this,"closed",!0,a.id))};
g.h.tj=function(){return!!this.o&&this.o.isAvailable()};
g.h.iy=function(){this.tj();return!!this.o&&this.o.B};
g.h.aq=function(a,b,c){this.tj();this.o&&(b=!!b,a?g.p(c)?M6(this.o,c,b):M6(this.o,"YOUTUBE_DRAWER_AUTO_OPEN",b):this.o.ek())};
g.h.$p=function(a,b){this.g.Ra(a?"cardsteasershow":"cardsteaserhide",b)};
g.h.R=function(){g.U(this.g).F.Ka("vast_info_card_add",this.Xv,this);this.g.removeEventListener("crn_annotations_module",this.jy,this);this.g.removeEventListener("crx_annotations_module",this.ky,this);g.jh(this.g.getRootNode(),"ytp-iv-drawer-open");for(var a=this.L,b=0,c=a.length;b<c;b++)g.mq(a[b]);this.L.length=0;V6.M.R.call(this)};
g.B(a7,g.Cv);g.h=a7.prototype;g.h.getHours=function(){return this.date.getHours()};
g.h.getMinutes=function(){return this.date.getMinutes()};
g.h.getSeconds=function(){return this.date.getSeconds()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.Ek=function(a,b){var c=g.Cv.prototype.Ek.call(this,a);return a?c+" "+g.Ja(this.getHours(),2)+":"+g.Ja(this.getMinutes(),2)+":"+g.Ja(this.getSeconds(),2)+(b?g.Dv(this):""):c+"T"+g.Ja(this.getHours(),2)+g.Ja(this.getMinutes(),2)+g.Ja(this.getSeconds(),2)+(b?g.Dv(this):"")};
g.h.toString=function(){return this.Ek()};
g.h.clone=function(){var a=new a7(this.date);a.lk=this.lk;a.nk=this.nk;return a};
g.B(c7,g.iu);g.h=c7.prototype;g.h.load=function(){c7.M.load.call(this);this.g.addEventListener("resize",this.cq,this);var a=U6(g.U(this.g).o)?function(){}:(0,g.z)(this.JC,this);
Xqa(this,a)};
g.h.unload=function(){d7(this,null);this.g.removeEventListener("resize",this.cq,this);this.B&&(this.B.abort(),this.B=null);c7.M.unload.call(this)};
g.h.JM=function(a,b){if(!U6(g.U(this.g).o))return null;var c;switch(a){case "loadCustomEndscreenRenderer":return c=wqa(b,"new"),d7(this,c),!0;case "loadCustomEndscreenJson":return(c=xqa(b))&&d7(this,c),!0;case "unloadCustomEndscreenJson":return d7(this,null),!0}return null};
g.h.JC=function(){var a=this.g.getVideoData(),b=a.videoId;this.B&&this.B.abort();b={method:"POST",gd:(0,g.z)(this.QG,this,b),wc:{v:b},withCredentials:!0};this.P&&(b.wc.r=1);"gaming"==g.U(this.g).o&&(b.wc.gaming="1");this.N&&(b.wc.ptype="embedded");var c=this.g.getVideoData().ox;c&&(b.Ib={ad_tracking:c});if(a=g.vt(a))this.B=g.Oi(a,b)};
g.h.QG=function(a,b){var c=this.B=null;if(200==b.status){var d=b.responseText;")]}"==d.substring(0,3)&&(d=d.substring(3),c=JSON.parse(d),c=this.P?wqa(c,this.N?"new":"current"):xqa(c))}d7(this,c)};
g.h.cq=function(){if(this.o&&this.o.elements){var a=this.g.Vx(),b=a.width,c=a.height;if(0!=b&&0!=c){var d=b/c,e;e=e4(this.g.app.B.J).width;for(var f=null,k=-1,l=0;l<g.p3.length;l++){var m=Math.abs(e-g.p3[l]);if(-1==k||f>=m)k=l,f=m}e=g.q3[k];for(f=0;f<this.o.elements.length;++f){var l=this.o.elements[f].id,k=this.A[l],m=this.D[l],n=m.width*d/m.aspectRatio,l=Math.round(n*c),q=a.left+Math.round(m.left*b),t=a.top+Math.round(m.top*c);g.lk(k.element,Math.round(m.width*b),l);g.ak(k.element,q,t);g.kh(k.element,
Wra);q=m.left+m.width/2;m=m.top+n/2;g.N(k.element,.5>=q&&.5>=m?"ytp-ce-top-left-quad":.5<q&&.5>=m?"ytp-ce-top-right-quad":.5>=q&&.5<m?"ytp-ce-bottom-left-quad":"ytp-ce-bottom-right-quad");g.kh(k.element,g.q3);g.N(k.element,e);(k=g.Ce("div","ytp-ce-expanding-overlay-body",k.element)[0])&&g.Uj(k,"height",l+"px")}}}};
g.h.ly=function(a){if(this.o)if("ytp-ce-in-endscreen"==a.getId())this.F=!1,this.o.skip&&1==this.g.nj()?(a=this.g,(a=g.Vl(a.app,a.playerType||1))&&g.LU(a,!0),this.g.Ic(window.Infinity),this.F=!0):(h7(this,this.o.impressionUrls),U5([this.o.visualElement]));else if(!this.F){a=a.getId().substring(15);var b=this.A[a],c=this.D[a];g.N(b.element,"ytp-ce-element-show");b.element.removeAttribute("aria-hidden");h7(this,c.impressionUrls);U5([c.visualElement]);g.U(this.g).ob&&this.g.ya("endscreenelementshown",
a)}};
g.h.my=function(a){if("ytp-ce-in-endscreen"!=a.getId()&&!this.F){a=a.getId().substring(15);var b=this.A[a];g.jh(b.element,"ytp-ce-element-show");b.element.setAttribute("aria-hidden",!0);g.U(this.g).ob&&this.g.ya("endscreenelementhidden",a)}};
g.h.uv=function(a,b){if(a.targetUrl&&(!b||"keypress"!=b.type||13==b.keyCode)){for(var c=b.target;c&&!g.hh(c,"ytp-ce-element");){g.hh(c,"subscribe-label")&&i7(this,a);if(g.hh(c,"ytp-ce-channel-subscribe"))return;c=g.af(c)}if(!c||g.hh(c,"ytp-ce-element-hover"))b.preventDefault(),b.stopPropagation(),b.ctrlKey||b.metaKey||"new"==a.dj?(i7(this,a),this.xw(),this.g.kd(),g.hv(a.targetUrl,void 0,a.hd)):(c=(0,g.z)(this.xw,this,g.va(g.gv,a.targetUrl,a.hd)),i7(this,a,c))}};
g.h.bq=function(a,b){g.hh(a.element,"ytp-ce-element-hover")||("VIDEO"==b.type||"PLAYLIST"==b.type?g.N(a.element,"ytp-ce-element-hover"):(new g.Kd(function(){g.N(a.element,"ytp-ce-element-hover")},200)).start(),h7(this,b.au),g7(this,b.id,!0),Uqa(this,a,!0))};
g.h.oy=function(a,b){g.jh(a.element,"ytp-ce-element-hover");g.jh(a.element,"ytp-ce-force-expand");g7(this,b.id,!1);Uqa(this,a,!1)};
g.h.xw=function(a){this.g.Eg(17,a)};
g.h.R=function(){this.g.removeEventListener("crn_creatorendscreen",this.ly,this);this.g.removeEventListener("crx_creatorendscreen",this.my,this);c7.M.R.call(this)};g.B(o7,g.bq);g.B(p7,g.bq);g.B($qa,g.bq);g.B(q7,g.bq);
var Xra=new g.cq("subscription-subscribe",p7),Yra=new g.cq("subscription-subscribe-loading",o7),Zra=new g.cq("subscription-subscribe-loaded",o7),$ra=new g.cq("subscription-subscribe-success",$qa),asa=new g.cq("subscription-unsubscribe",q7),bsa=new g.cq("subscription-unsubscirbe-loading",o7),csa=new g.cq("subscription-unsubscribe-loaded",o7),dsa=new g.cq("subscription-unsubscribe-success",o7),esa=new g.cq("subscription-enable-ypc",o7),fsa=new g.cq("subscription-disable-ypc",o7);var s7={},gsa="ontouchstart"in window.document;g.Ek(window.document,"blur",t7,!0);g.Ek(window.document,"change",t7,!0);g.Ek(window.document,"click",t7);g.Ek(window.document,"focus",t7,!0);g.Ek(window.document,"mouseover",t7);g.Ek(window.document,"mouseout",t7);g.Ek(window.document,"mousedown",t7);g.Ek(window.document,"keydown",t7);g.Ek(window.document,"keyup",t7);g.Ek(window.document,"keypress",t7);g.Ek(window.document,"cut",t7);g.Ek(window.document,"paste",t7);
gsa&&(g.Ek(window.document,"touchstart",t7),g.Ek(window.document,"touchend",t7),g.Ek(window.document,"touchcancel",t7));g.h=u7.prototype;g.h.Dd=function(a){return g.mf(a,Z(this))};
g.h.unregister=function(){g.Hi(this.H);this.H.length=0;g.Dq(this.G);this.G.length=0};
g.h.init=g.w;g.h.dispose=g.w;g.h.addBehavior=function(a,b,c){c=Z(this,c);var d=(0,g.z)(b,this);a in s7||(s7[a]=new g.Ef);s7[a].subscribe(c,d);this.F[b]=d};
g.h.removeBehavior=function(a,b,c){if(a in s7){var d=s7[a];g.Ff(d,Z(this,c),this.F[b]);0>=d.sc()&&(d.dispose(),delete s7[a])}delete this.F[b]};
g.h.Pg=function(a,b,c){var d=this.wa(a,b);if(d&&(d=g.u(d))){var e=g.lb(arguments,2);g.ob(e,0,0,a);d.apply(null,e)}};
g.h.wa=function(a,b){return g.ch(a,b)};g.B(x7,u7);g.la(x7);g.h=x7.prototype;g.h.register=function(){this.addBehavior("click",this.Lz);this.addBehavior("keydown",this.Bu);this.addBehavior("keypress",this.Cu);v7(this,"page-scroll",this.sD)};
g.h.unregister=function(){this.removeBehavior("click",this.Lz);this.removeBehavior("keydown",this.Bu);this.removeBehavior("keypress",this.Cu);D7(this);this.o={};x7.M.unregister.call(this)};
g.h.Lz=function(a){a&&!a.disabled&&(gra(this,a),this.click(a))};
g.h.Bu=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=C7(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=n7(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.sF:"table"==e&&(f=this.rF);f&&bra(this,a,b,c,(0,g.z)(f,this))}}};
g.h.sD=function(){var a=this.o;if(0!=g.Jb(a))for(var b in a){var c=a[b],d=g.mf(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;B7(this,d,c,!0)}};
g.h.Cu=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=C7(this,a),b7(a)&&c.preventDefault())};
g.h.rF=function(a,b,c){var d=y7(this,b);if(d){var e=Zqa("table",b);b=g.Ce("td",null,e);d=dra(d,b,g.Ce("td",null,Zqa("tr",e)).length,c);-1!=d&&(cra(this,a,b[d]),c.preventDefault())}};
g.h.sF=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=y7(this,b);d&&(b=(0,g.Xe)(g.Ce("li",null,b),b7),cra(this,a,b[dra(d,b,1,c)]),c.preventDefault())}};
g.h.Nz=function(a){if(a){var b=C7(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.wa(a,"button-has-sibling-menu")?c=a.parentNode:c=era(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=A7(this,a);d&&c.appendChild(d);(c=!!this.wa(a,"button-menu-fixed"))&&(this.o[k7(a).toString()]=b);B7(this,a,b,c);g.Ki("yt-uix-button-menu-before-show",a,b);g.tv(b);
d&&g.tv(d);this.Pg(a,"button-menu-action",!0);g.N(a,Z(this,"active"));b=(0,g.z)(this.Mz,this,a,!1);d=(0,g.z)(this.Mz,this,a,!0);c=(0,g.z)(this.LK,this,a,void 0);this.g&&C7(this,this.g)==C7(this,a)||D7(this);g.Ji("yt-uix-button-menu-show",a);g.Fk(this.A);this.A=[g.Ek(window.document,"click",d),g.Ek(window.document,"contextmenu",b),g.Ek(window,"resize",c)];this.g=a}}};
g.h.LK=function(a,b){var c=C7(this,a);if(c){b&&(b instanceof g.fe?c.innerHTML=g.ge(b):g.df(c,b));var d=!!this.wa(a,"button-menu-fixed");B7(this,a,c,d)}};
g.h.Uc=function(a){return g.L(Z(this,"content"),a)};
g.h.Mz=function(a,b,c){c=g.Hk(c);var d=g.mf(c,Z(this));if(d){var d=C7(this,d),e=C7(this,a);if(d==e)return}var d=g.mf(c,Z(this,"menu")),e=d==C7(this,a),f=g.hh(c,Z(this,"menu-item")),k=g.hh(c,Z(this,"menu-close"));if(!d||e&&(f||k))z7(this,a),d&&b&&this.wa(a,"button-menu-indicate-selected")&&((a=g.L(Z(this,"content"),a))&&g.df(a,m7(c)),fra(this,d,c))};
g.h.isToggled=function(a){return g.hh(a,Z(this,"toggled"))};
g.h.click=function(a){if(C7(this,a)){var b=C7(this,a);if(b){var c=g.mf(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(z7(this,c),g.ni((0,g.z)(this.Nz,this,a),1)):b7(b)?z7(this,a):this.Nz(a)}a.focus()}this.Pg(a,"button-action")};g.B(E7,u7);g.h=E7.prototype;g.h.Dd=function(a){var b=u7.prototype.Dd.call(this,a);return b?b:a};
g.h.register=function(){v7(this,"yt-uix-kbd-nav-move-out-done",this.df)};
g.h.dispose=function(){E7.M.dispose.call(this);F7(this)};
g.h.wa=function(a,b){var c=E7.M.wa.call(this,a,b);return c?c:(c=E7.M.wa.call(this,a,"card-config"))&&(c=g.u(c))&&c[b]?c[b]:null};
g.h.show=function(a){var b=this.Dd(a);if(b){g.N(b,Z(this,"active"));var c=hra(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;ira(this,a,c);var d=Z(this,"card-visible"),e=this.wa(a,"card-delegate-show")&&this.wa(b,"card-action");this.Pg(b,"card-action",a);this.A=a;g.uv(c);g.ni((0,g.z)(function(){e||(g.tv(c),g.Ji("yt-uix-card-show",b,a,c));jra(c);g.N(c,d);g.Ji("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
g.h.df=function(a){if(a=this.Dd(a)){var b=g.Be(Z(this,"card")+k7(a));b&&(g.jh(a,Z(this,"active")),g.jh(b,Z(this,"card-visible")),g.uv(b),this.A=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(g.Ve(b.cardMask),b.cardMask=null))}};
g.h.KK=function(a,b){var c=this.Dd(a);if(c){if(b){var d=this.ac(c);if(!d)return;b instanceof g.fe?d.innerHTML=g.ge(b):g.df(d,b)}g.hh(c,Z(this,"active"))&&(c=hra(this,a,c),ira(this,a,c),g.tv(c),jra(c))}};
g.h.isActive=function(a){return(a=this.Dd(a))?g.hh(a,Z(this,"active")):!1};
g.h.ac=function(a){var b=a.cardContentNode;if(!b){var c=Z(this,"content"),d=Z(this,"card-content");(b=(b=this.wa(a,"card-id"))?g.Be(b):g.L(c,a))||(b=window.document.createElement("div"));var e=b;g.jh(e,c);g.N(e,d);a.cardContentNode=b}return b};var H7;g.B(G7,u7);g.la(G7);g.h=G7.prototype;g.h.register=function(){this.addBehavior("keydown",this.Qt);v7(this,"yt-uix-kbd-nav-move-in",this.Su);v7(this,"yt-uix-kbd-nav-move-in-to",this.wF);v7(this,"yt-uix-kbd-move-next",this.Tu);v7(this,"yt-uix-kbd-nav-move-to",this.pk)};
g.h.unregister=function(){this.removeBehavior("keydown",this.Qt);g.Fk(H7)};
g.h.Qt=function(a,b,c){var d=c.keyCode;if(a=g.mf(a,Z(this)))switch(d){case 13:case 32:this.Su(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=M5(a,"kbdNavMoveOut");!c;){c=g.mf(a.parentElement,Z(this));if(!c)break a;c=M5(c,"kbdNavMoveOut")}c=g.Be(c);this.pk(c);g.Ji("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&g.hh(a,Z(this,"list")))switch(d){case 40:this.Tu(b,a);break;case 38:d=window.document.activeElement==a,a=mra(a),b=a.indexOf(b),0>b&&!d||(b=
d?a.length-1:(a.length+b-1)%a.length,a[b].focus(),lra(this,a[b]))}c.preventDefault()}};
g.h.Su=function(a){var b=M5(a,"kbdNavMoveIn"),b=g.Be(b);kra(this,a,b);this.pk(b)};
g.h.wF=function(a){kra(this,g.nf(),a);this.pk(a)};
g.h.pk=function(a){if(a)if(g.jf(a))a.focus();else{var b=n7(a,function(a){return g.sa(a)&&1==a.nodeType?g.jf(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
g.h.Tu=function(a,b){var c=window.document.activeElement==b,d=mra(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),lra(this,d[c]))};g.B(I7,u7);g.la(I7);g.h=I7.prototype;g.h.register=function(){this.addBehavior("click",this.Oz);this.addBehavior("mouseenter",this.mD);v7(this,"page-scroll",this.AD);v7(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.Dd(a);M7(this,a)});
this.B=new g.Ef};
g.h.unregister=function(){this.removeBehavior("click",this.Oz);this.o=this.g=null;g.Fk(g.Bb(g.Lb(this.A)));this.A={};g.Fb(this.D,function(a){g.Ve(a)},this);
this.D={};g.Db(this.B);this.B=null;I7.M.unregister.call(this)};
g.h.Oz=function(a,b,c){a&&(b=P7(this,a),!b.disabled&&j7(c.target,b)&&pra(this,a))};
g.h.mD=function(a,b,c){a&&g.hh(a,Z(this,"hover"))&&j7(c.target,P7(this,a))&&pra(this,a,!0)};
g.h.AD=function(){this.g&&this.o&&nra(this,this.o,this.g)};
g.h.Pz=function(a){if(a){var b=O7(this,a);if(b){g.Ki("yt-uix-menu-before-show",a,b);this.g?j7(a,this.g)||M7(this,this.o):(this.o=a,this.g=b,g.hh(a,Z(this,"sibling-content"))||(g.Ve(b),window.document.body.appendChild(b)),b.style.minWidth=P7(this,a).offsetWidth-2+"px");var c=K7(this,a);c&&g.Te(c,b);g.jh(b,Z(this,"content-hidden"));nra(this,a,b);g.ih(P7(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);g.Ji("yt-uix-menu-show",a);sra(b);qra(this,a);g.Ji("yt-uix-kbd-nav-move-in-to",b);var d=
(0,g.z)(this.fP,this,a),e=(0,g.z)(this.pF,this,a),c=g.ua(a).toString();this.A[c]=[g.Ek(b,"click",e),g.Ek(window.document,"click",d)];g.hh(a,Z(this,"indicate-selected"))&&(d=(0,g.z)(this.qF,this,a),this.A[c].push(g.Ek(b,"click",d)));g.hh(a,Z(this,"hover"))&&(a=(0,g.z)(this.eP,this,a),this.A[c].push(g.Ek(window.document,"mousemove",a)))}}};
g.h.eP=function(a,b){var c=g.Hk(b);c&&(j7(c,P7(this,a))||tra(this,c)||N7(this,a))};
g.h.fP=function(a,b){var c=g.Hk(b);if(c){if(tra(this,c)){var d=g.mf(c,Z(this,"content")),e=g.lf(c,"LI");e&&d&&g.bf(d,e)&&g.Ki("yt-uix-menu-item-clicked",c);c=g.mf(c,Z(this,"close-on-select"));if(!c)return;d=J7(c)}M7(this,d||a)}};
g.h.pF=function(a,b){var c=g.Hk(b);c&&rra(this,a,c)};
g.h.qF=function(a,b){var c=g.Hk(b);if(c){var d=P7(this,a);if(d&&(c=g.lf(c,"LI")))if(c=m7(c).trim(),d.hasChildNodes()){var e=x7.getInstance();(d=g.L(Z(e,"content"),d))&&g.df(d,c)}else g.df(d,c)}};g.B(Q7,E7);g.la(Q7);g.h=Q7.prototype;g.h.register=function(){Q7.M.register.call(this);this.addBehavior("click",this.Ds,"target");this.addBehavior("click",this.Cs,"close")};
g.h.unregister=function(){Q7.M.unregister.call(this);this.removeBehavior("click",this.Ds,"target");this.removeBehavior("click",this.Cs,"close");for(var a in this.g)g.Fk(this.g[a]);this.g={};for(a in this.o)g.Fk(this.o[a]);this.o={}};
g.h.Ds=function(a,b,c){c.preventDefault();b=g.lf(c.target,"button");b&&b.disabled||(a=(b=this.wa(a,"card-target"))?g.y(b)?window.document.getElementById(b):b:a,b=this.Dd(a),this.wa(b,"disabled")||(g.hh(b,Z(this,"active"))?(this.df(a),g.jh(b,Z(this,"active"))):(this.show(a),g.N(b,Z(this,"active")))))};
g.h.show=function(a){Q7.M.show.call(this,a);var b=this.Dd(a),c=g.ua(a).toString();if(!g.ch(b,"click-outside-persists")){if(this.g[c])return;var b=g.Ek(window.document,"click",(0,g.z)(this.Es,this,a)),d=g.Ek(window,"blur",(0,g.z)(this.Es,this,a));this.g[c]=[b,d]}a=g.Ek(window,"resize",(0,g.z)(this.KK,this,a,void 0));this.o[c]=a};
g.h.df=function(a){Q7.M.df.call(this,a);a=g.ua(a).toString();var b=this.g[a];b&&(g.Fk(b),this.g[a]=null);if(b=this.o[a])g.Fk(b),delete this.o[a]};
g.h.Es=function(a,b){var c="yt-uix"+(this.C?"-"+this.C:"")+"-card",d=null;b.target&&(d=g.mf(b.target,c)||g.mf(J7(b.target),c));(d=d||g.mf(window.document.activeElement,c)||g.mf(J7(window.document.activeElement),c))||this.df(a)};
g.h.Cs=function(a){(a=g.mf(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.df(a)};g.B(R7,E7);g.la(R7);g.h=R7.prototype;g.h.register=function(){this.addBehavior("mouseenter",this.Ou,"target");this.addBehavior("mouseleave",this.Qu,"target");this.addBehavior("mouseenter",this.Pu,"card");this.addBehavior("mouseleave",this.Ru,"card")};
g.h.unregister=function(){this.removeBehavior("mouseenter",this.Ou,"target");this.removeBehavior("mouseleave",this.Qu,"target");this.removeBehavior("mouseenter",this.Pu,"card");this.removeBehavior("mouseleave",this.Ru,"card")};
g.h.Ou=function(a){if(a8!=a){a8&&(this.df(a8),a8=null);var b=(0,g.z)(this.show,this,a),c=(0,window.parseInt)(this.wa(a,"delay-show"),10),b=g.ni(b,-1<c?c:200);g.bh(a,"card-timer",b.toString());a8=a;a.alt&&(g.bh(a,"card-alt",a.alt),a.alt="");a.title&&(g.bh(a,"card-title",a.title),a.title="")}};
g.h.Qu=function(a){var b=(0,window.parseInt)(this.wa(a,"card-timer"),10);g.pi(b);this.Dd(a).isCardHidable=!0;b=(0,window.parseInt)(this.wa(a,"delay-hide"),10);b=-1<b?b:200;g.ni((0,g.z)(this.cE,this,a),b);if(b=this.wa(a,"card-alt"))a.alt=b;if(b=this.wa(a,"card-title"))a.title=b};
g.h.cE=function(a){this.Dd(a).isCardHidable&&(this.df(a),a8=null)};
g.h.Pu=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.h.Ru=function(a){a&&this.df(a.cardTargetNode)};
var a8=null;var wra={LOADING:"loading",sA:"content",yW:"working"};g.h=S7.prototype;
g.h.show=function(){if(!this.isDisposed()){this.F=window.document.activeElement;if(!this.N){this.o||(this.o=g.Be("yt-dialog-bg"),this.o||(this.o=g.Oe("div"),this.o.id="yt-dialog-bg",this.o.className="yt-dialog-bg",window.document.body.appendChild(this.o)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=g.He(b).height,g.Ge(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.o.style.height=a+"px";g.tv(this.o)}this.Zt();a=yra(this);zra(a);this.C=g.Ek(window.document,"keydown",(0,g.z)(this.$E,this));a=this.g;d=g.Gi("player-added",this.Zt,this);g.bh(a,"player-ready-pubsub-key",d);this.P&&(this.D=g.Ek(window.document,"click",(0,g.z)(this.KJ,this)));g.tv(this.g);this.A.setAttribute("tabindex","0");Bra(this);this.H||g.N(window.document.body,"yt-dialog-active");D7(x7.getInstance());F7(Q7.getInstance());F7(R7.getInstance());
g.Ji("yt-ui-dialog-show-complete",this)}};
g.h.Zt=function(){if(!this.V){var a=this.g;g.O(window.document.body,"hide-players",!0);a&&g.O(a,"preserve-players",!0)}};
g.h.nG=function(a){a=a.currentTarget;a.disabled||(a=g.ch(a,"action")||"",this.dismiss(a))};
g.h.dismiss=function(a){if(!this.isDisposed()){this.B.Lb("pre-all");this.B.Lb("pre-"+a);g.uv(this.g);F7(Q7.getInstance());F7(R7.getInstance());this.A.setAttribute("tabindex","-1");xra()||(g.uv(this.o),this.H||g.jh(window.document.body,"yt-dialog-active"),Yqa(),Ara());this.C&&(g.Fk(this.C),this.C=null);this.D&&(g.Fk(this.D),this.D=null);var b=this.g;if(b){var c=g.ch(b,"player-ready-pubsub-key");c&&(g.Hi(c),l7(b,"player-ready-pubsub-key"))}this.B.Lb("post-all");g.Ji("yt-ui-dialog-hide-complete",this);
"cancel"==a&&g.Ji("yt-ui-dialog-cancelled",this);this.B&&this.B.Lb("post-"+a);this.F&&this.F.focus()}};
g.h.setTitle=function(a){g.df(g.L("yt-dialog-title",this.g),a)};
g.h.$E=function(a){g.ni((0,g.z)(function(){this.O||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&g.hh(window.document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.h.KJ=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.h.isDisposed=function(){return this.L};
g.h.dispose=function(){b7(this.g)&&this.dismiss("dispose");g.Fk(this.G);this.G.length=0;g.ni((0,g.z)(function(){this.F=null},this),0);
this.J=this.A=null;this.B.dispose();this.B=null;this.L=!0};
g.h.NC=function(a){a.stopPropagation();Bra(this)};
g.ka("yt.ui.Dialog",S7,void 0);g.B(T7,u7);g.la(T7);g.h=T7.prototype;g.h.register=function(){this.addBehavior("click",this.lp,"target");this.addBehavior("click",this.Qz,"close");Dra(this)};
g.h.unregister=function(){T7.M.unregister.call(this);this.removeBehavior("click",this.lp,"target");this.removeBehavior("click",this.Qz,"close");this.B&&(g.Hi(this.B),this.B=null);this.o&&(g.Fk(this.o),this.o=null)};
g.h.lp=function(a){if(!this.g||!b7(this.g.g)){var b=this.Dd(a);a=Fra(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.wa(b,"disable-shortcuts")||!1,d=!!this.wa(b,"disable-outside-click-dismiss")||!1;this.g=new S7(a,c);this.A=b;var e=g.L("yt-dialog-fg",a);if(e){var f=this.wa(b,"overlay-class")||"",k=this.wa(b,"overlay-style")||"default",l=this.wa(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,k));f.push(Z(this,l));g.ih(e,f)}this.g.show();g.Ji("yt-uix-kbd-nav-move-to",e||
a);Dra(this);c||d||(c=(0,g.z)(function(a){g.hh(a.target,"yt-dialog-base")&&Era(this)},this),this.o=g.Ek(g.L("yt-dialog-base",a),"click",c));
this.Pg(b,"overlay-shown");g.Ji("yt-uix-overlay-shown",b)}}};
g.h.ac=function(a){return g.L("yt-dialog-content",a.overlayContentNode||a)};
g.h.Qz=function(a){a&&a.disabled||g.Ji("yt-uix-overlay-hide")};
g.h.show=function(a){this.lp(a)};var V7={},U7=[];g.ka("yt.pubsub.publish",g.Ji,void 0);g.B(W7,u7);g.la(W7);g.h=W7.prototype;g.h.register=function(){this.addBehavior("mouseover",this.Xk);this.addBehavior("mouseout",this.wg);this.addBehavior("focus",this.lt);this.addBehavior("blur",this.hs);this.addBehavior("click",this.wg);this.addBehavior("touchstart",this.$w);this.addBehavior("touchend",this.Hl);this.addBehavior("touchcancel",this.Hl)};
g.h.unregister=function(){this.removeBehavior("mouseover",this.Xk);this.removeBehavior("mouseout",this.wg);this.removeBehavior("focus",this.lt);this.removeBehavior("blur",this.hs);this.removeBehavior("click",this.wg);this.removeBehavior("touchstart",this.$w);this.removeBehavior("touchend",this.Hl);this.removeBehavior("touchcancel",this.Hl);this.dispose();W7.M.unregister.call(this)};
g.h.dispose=function(){for(var a in this.o)this.wg(this.o[a]);this.o={}};
g.h.Xk=function(a){if(!(this.g&&1E3>(0,g.E)()-this.g)){var b=(0,window.parseInt)(this.wa(a,"tooltip-hide-timer"),10);b&&(l7(a,"tooltip-hide-timer"),g.pi(b));var b=(0,g.z)(function(){Pra(this,a);l7(a,"tooltip-show-timer")},this),c=(0,window.parseInt)(this.wa(a,"tooltip-show-delay"),10)||0,b=g.ni(b,c);
g.bh(a,"tooltip-show-timer",b.toString());a.title&&(ara(a,Mra(this,a)),a.title="");b=g.ua(a).toString();this.o[b]=a}};
g.h.wg=function(a){var b=(0,window.parseInt)(this.wa(a,"tooltip-show-timer"),10);b&&(g.pi(b),l7(a,"tooltip-show-timer"));b=(0,g.z)(function(){if(a){var b=g.Be(X7(this,a));b&&(Qra(b),g.Ve(b),l7(a,"content-id"));b=g.Be(X7(this,a,"arialabel"));g.Ve(b)}l7(a,"tooltip-hide-timer")},this);
b=g.ni(b,50);g.bh(a,"tooltip-hide-timer",b.toString());if(b=this.wa(a,"tooltip-text"))a.title=b;b=g.ua(a).toString();delete this.o[b]};
g.h.lt=function(a){this.g=0;this.Xk(a)};
g.h.hs=function(a){this.g=0;this.wg(a)};
g.h.$w=function(a,b,c){c.changedTouches&&(this.g=0,(a=r7(b,Z(this),c.changedTouches[0].target))&&this.Xk(a))};
g.h.Hl=function(a,b,c){c.changedTouches&&(this.g=(0,g.E)(),(a=r7(b,Z(this),c.changedTouches[0].target))&&this.wg(a))};g.B(Y7,u7);g.la(Y7);Y7.prototype.register=function(){this.addBehavior("click",this.Aq);w7(this,Yra,this.zv);w7(this,Zra,this.Rz);w7(this,$ra,this.TI);w7(this,bsa,this.zv);w7(this,csa,this.Rz);w7(this,dsa,this.hJ);w7(this,esa,this.MG);w7(this,fsa,this.JG)};
Y7.prototype.unregister=function(){this.removeBehavior("click",this.Aq);Y7.M.unregister.call(this)};
var $7={Dq:"hover-enabled",iA:"yt-uix-button-subscribe",jA:"yt-uix-button-subscribed",oQ:"ypc-enabled",qA:"yt-uix-button-subscription-container",rA:"yt-subscription-button-disabled-mask-container"},Z7={EQ:"channel-external-id",tA:"subscriber-count-show-when-subscribed",uA:"subscriber-count-tooltip",vA:"subscriber-count-title",mS:"href",vS:"insecure",Xq:"is-subscribed",cU:"parent-url",XU:"clicktracking",BB:"show-unsub-confirm-dialog",$U:"show-unsub-confirm-time-frame",GB:"style-type",Cr:"subscribed-timestamp",
Dr:"subscription-id",xV:"target",SB:"ypc-enabled"};g.h=Y7.prototype;
g.h.Aq=function(a){var b=this.wa(a,"href"),c=this.wa(a,"insecure"),d=Kra(),c=c&&!0;if(b)a=this.wa(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.wa(a,"channel-external-id"),d=this.wa(a,"clicktracking"),c=Rra(this,a),e=this.wa(a,"parent-url");if(this.wa(a,"is-subscribed")){var f=this.wa(a,"subscription-id"),k=new q7(b,f,c,a,d,e);Vra(this,a)?Ira(a,b).then(function(){g.xq(asa,k)}):g.xq(asa,k)}else g.xq(Xra,new p7(b,c,d,e))}else Ura(this,a)};
g.h.zv=function(a){this.Lg(a.g,this.Hw,!0)};
g.h.Rz=function(a){this.Lg(a.g,this.Hw,!1)};
g.h.TI=function(a){this.Lg(a.g,this.Mw,!0,a.o)};
g.h.hJ=function(a){this.Lg(a.g,this.Mw,!1)};
g.h.MG=function(a){this.Lg(a.g,this.EC)};
g.h.JG=function(a){this.Lg(a.g,this.zC)};
g.h.Mw=function(a,b,c){b?(g.bh(a,Z7.Xq,"true"),c&&g.bh(a,Z7.Dr,c),this.wa(a,Z7.BB)&&(b=new a7,g.bh(a,Z7.Cr,(b.getTime()/1E3).toString()))):(l7(a,Z7.Xq),l7(a,Z7.Cr),l7(a,Z7.Dr));Sra(this,a)};
g.h.Hw=function(a,b){var c=g.mf(a,$7.qA);g.O(c,$7.rA,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
g.h.EC=function(a){var b=!!this.wa(a,"ypc-item-type"),c=!!this.wa(a,"ypc-item-id");!this.wa(a,"ypc-enabled")&&b&&c&&(g.N(a,"ypc-enabled"),g.bh(a,Z7.SB,"true"))};
g.h.zC=function(a){this.wa(a,"ypc-enabled")&&(g.jh(a,"ypc-enabled"),l7(a,"ypc-enabled"))};
g.h.bC=function(a,b,c){var d=g.lb(arguments,2);(0,g.F)(a,function(a){b.apply(this,g.ib(a,d))},this)};
g.h.Lg=function(a,b,c){var d=Tra(this,a);this.bC.apply(this,g.ib([d],g.lb(arguments,1)))};var b8=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};g.ka("yt.uix.widgets_",b8,void 0);window._exportCheck==g.xa&&(g.ka("ytmod.player.annotations_module",V6,void 0),g.ka("ytmod.player.creatorendscreen",c7,void 0));var c8=Y7.getInstance(),d8=Z(c8);d8 in b8||(c8.register(),v7(c8,"yt-uix-init-"+d8,c8.init),v7(c8,"yt-uix-dispose-"+d8,c8.dispose),b8[d8]=c8);})(_yt_player);
