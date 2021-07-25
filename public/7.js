(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{229:function(t,e,r){"use strict";r.r(e);var a=r(15),s=r(6);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={name:"DashboardCoreSettings",mixins:[a.a],data:function(){return{color:"#E91E63",colors:["#9C27b0","#00CAE3","#4CAF50","#ff9800","#E91E63","#FF5252"],menu:!1,saveImage:"",showImg:!0}},computed:i(i({},Object(s.c)(["barImage","emailDev","instagram","facebook"])),{},{image:function(){return console.log(barImage),this.images.push(barImage),this.barImage}}),watch:{color:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t},showImg:function(t){t?this.saveImage?(this.setBarImage(this.saveImage),this.saveImage=""):this.setBarImage(t):(this.saveImage=this.barImage,this.setBarImage(""))}},methods:i({},Object(s.b)({setBarImage:"SET_BAR_IMAGE"}))},l=(r(92),r(0)),v=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"settings-wrapper"}},[r("v-card",{staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"115px",right:"-35px","border-radius":"8px"},attrs:{id:"settings",color:"rgba(0, 0, 0, .3)",dark:"",flat:"",link:"","min-width":"100"}},[r("v-icon",{attrs:{large:""}},[t._v("\n      mdi-cog\n    ")])],1),t._v(" "),r("v-menu",{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-card",{staticClass:"text-center mb-0",attrs:{width:"300"}},[r("v-card-text",[r("strong",{staticClass:"mb-3 d-inline-block"},[t._v("SIDEBAR FILTERS")]),t._v(" "),r("v-item-group",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},t._l(t.colors,(function(e){return r("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var a=t.active,s=t.toggle;return[r("v-avatar",{staticClass:"v-settings__item",class:a&&"v-settings__item--active",attrs:{color:e,size:"25"},on:{click:s}})]}}],null,!0)})})),1),t._v(" "),r("v-divider",{staticClass:"my-4 secondary"}),t._v(" "),r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"auto"}},[r("span",{domProps:{textContent:t._s(t.$t("dark-mode"))}})]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1),t._v(" "),r("v-divider",{staticClass:"my-4 secondary"}),t._v(" "),r("div",{staticClass:"my-12"}),t._v(" "),r("a",{attrs:{href:t.instagram,target:"_blank"}},[r("v-btn",{staticClass:"ma-1",attrs:{color:"#55acee",dark:"",default:"",rounded:""}},[r("v-icon",[t._v("mdi-instagram")])],1)],1),t._v(" "),r("a",{attrs:{href:t.facebook,target:"_blank"}},[r("v-btn",{staticClass:"ma-1",attrs:{color:"#3b5998",dark:"",default:"",rounded:""}},[r("v-icon",[t._v("mdi-facebook")])],1)],1),t._v(" "),r("v-divider",{staticClass:"my-4 primary"}),t._v(" "),r("a",{attrs:{href:"mailto:"+t.emailDev}},[r("strong",{staticClass:"mb-3 d-inline-block"},[t._v("Saludos jmdev!")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports},39:function(t,e,r){var a=r(93);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(4)(a,s);a.locals&&(t.exports=a.locals)},92:function(t,e,r){"use strict";r(39)},93:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".v-settings .v-item-group>*{cursor:pointer}.v-settings__item{border-width:3px;border-style:solid;border-color:transparent!important}.v-settings__item--active{border-color:#00cae3!important}",""])}}]);