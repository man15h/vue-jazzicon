(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)o=u[d],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-jazzicon/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("h1",[e._v("vue-jazzicon")]),n("div",{staticClass:"container--header"},[n("div",{staticClass:"header--icon"},[n("Jazzicon",{attrs:{diameter:e.diameter,address:e.input}})],1),n("div",{staticClass:"header--control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text",max:"10",placeholder:"Type something here"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.diameter,expression:"diameter",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"Type number here"},domProps:{value:e.diameter},on:{input:function(t){t.target.composing||(e.diameter=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),n("div",{staticClass:"container--body"},e._l(20,function(e){return n("div",{key:e},[n("Jazzicon",{attrs:{diameter:100,seed:e}})],1)}),0)])])},i=[],o={name:"App",data:function(){return{input:"0x14e8d820996b84347a8a553a643c2953aa73be7b",diameter:100}}},u=o,s=(n("5c0b"),n("2877")),c=Object(s["a"])(u,a,i,!1,null,null,null),l=c.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"jazzicon"})},p=[],h=(n("6d67"),n("96cf"),n("3b8d")),f=(n("c5f6"),n("d34e")),m=n.n(f),v=n("6929"),b=n.n(v),g=n("e814"),y=n.n(g);function w(e){return y()(e.slice(2,10),16)}var x=w,S={name:"Jazzicon",props:{seed:{type:Number,default:Math.round(1e7*Math.random())},diameter:{type:Number,default:100},address:{type:String,default:null},shapeCount:{type:Number,default:4},colors:{type:Array,default:function(){return["#01888C","#FC7500","#034F5D","#F73F01","#FC1960","#C7144C","#F3C100","#1598F2","#2465E1","#F19E02"]}}},data:function(){return{generator:null,svgns:"http://www.w3.org/2000/svg"}},watch:{seed:{handler:function(){this.icon()}},address:{handler:function(){this.icon()}},diameter:{handler:function(){this.icon()}}},mounted:function(){this.icon()},methods:{icon:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.address?x(this.address):this.seed,this.$refs.jazzicon.innerHTML="",e.next=4,this.generateIdenticon(this.diameter,t);case 4:return n=e.sent,e.next=7,this.$refs.jazzicon.append(n);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),newPaper:function(e,t){var n=document.createElement("div");return n.style.borderRadius="".concat(e/2,"px"),n.style.overflow="hidden",n.style.padding="0px",n.style.margin="0px",n.style.width=e+"px",n.style.height=e+"px",n.style.display="inline-block",n.style.background=t,{container:n}},generateIdenticon:function(e,t){this.generator=new m.a(t);var n=this.hueShift(this.colors.slice(),this.generator),r=this.newPaper(e,this.genColor(n)),a=r.container,i=document.createElementNS(this.svgns,"svg");i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y","0"),i.setAttributeNS(null,"width",e),i.setAttributeNS(null,"height",e),a.appendChild(i);for(var o=0;o<this.shapeCount-1;o++)this.genShape(n,e,o,this.shapeCount-1,i);return a},genShape:function(e,t,n,r,a){var i=t/2,o=document.createElementNS(this.svgns,"rect");o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",t),o.setAttributeNS(null,"height",t);var u=this.generator.random(),s=2*Math.PI*u,c=t/r*this.generator.random()+n*t/r,l=Math.cos(s)*c,d=Math.sin(s)*c,p="translate("+l+" "+d+")",h=this.generator.random(),f=360*u+180*h,m="rotate("+f.toFixed(1)+" "+i+" "+i+")",v=p+" "+m;o.setAttributeNS(null,"transform",v);var b=this.genColor(e);o.setAttributeNS(null,"fill",b),a.appendChild(o)},genColor:function(e){this.generator.random();var t=Math.floor(e.length*this.generator.random()),n=e.splice(t,1)[0];return n},hueShift:function(e,t){var n=30,r=30*t.random()-n/2;return e.map(function(e){var t=b()(e);return t.rotate(r),t.hex()})}}},C=S,N=Object(s["a"])(C,d,p,!1,null,null,null),j=N.exports,z=j,_=n("0a89"),A=n.n(_);r["a"].config.productionTip=!1,r["a"].use(A.a),r["a"].component(z.name,z),new r["a"]({mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))},render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("b19e"),a=n.n(r);a.a},b19e:function(e,t,n){}});
//# sourceMappingURL=app.f1a28687.js.map