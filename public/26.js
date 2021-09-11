(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{234:function(t,a,e){"use strict";e.r(a);var o={name:"DashboardNotifications",data:function(){return{color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}},computed:{parsedDirection:function(){return this.direction.split(" ")}},methods:{randomColor:function(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}},s=e(0),i=Object(s.a)(o,(function(){var t,a=this,e=a.$createElement,o=a._self._c||e;return o("v-container",{attrs:{id:"alerts",fluid:"",tag:"section"}},[o("base-v-component",{attrs:{heading:"Alerts",link:"components/alerts"}}),a._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-card",[o("v-card-text",[o("base-subheading",{attrs:{subheading:"Notification Style"}}),a._v(" "),o("base-material-alert",{attrs:{color:"info",dark:""}},[a._v("\n            This is a plain notification.\n          ")]),a._v(" "),o("base-material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[a._v("\n            This is a notification with close button.\n          ")]),a._v(" "),o("base-material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[a._v("\n            This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.\n          ")]),a._v(" "),o("base-material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[a._v("\n            You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.\n          ")])],1)],1)],1),a._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-card",[o("v-card-text",[o("base-subheading",{attrs:{subheading:"Notification states"}}),a._v(" "),a._l(a.colors,(function(t){return o("base-material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[o("span",{staticClass:"text-uppercase",domProps:{textContent:a._s(t)}}),a._v(' — This is a regular alert made with the color of "'+a._s(t)+'"\n          ')])})),a._v(" "),o("base-material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[o("span",[a._v("PRIMARY")]),a._v(' — This is a regular alert made with the color "secondary"\n          ')]),a._v(" "),o("base-material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[o("span",[a._v("PINK DARKEN-1")]),a._v(' — This is a regular alert made with the color "pink darken-1"\n          ')])],2)],1)],1),a._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-card",[o("v-card-text",{staticClass:"text-center"},[o("base-subheading",{staticClass:"text-center",attrs:{subheading:"Snackbar Locations"}}),a._v(" "),o("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"10",lg:"8"}},[o("v-row",a._l(a.directions,(function(t){return o("v-col",{key:t,attrs:{cols:"4"}},[o("v-btn",{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(e){a.randomColor(),a.direction=t,a.snackbar=!0}}},[a._v("\n                    "+a._s(t)+"\n                  ")])],1)})),1)],1)],1),a._v(" "),o("base-subheading",{staticClass:"text-center",attrs:{subheading:"Dialogs"}}),a._v(" "),o("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"10",lg:"8"}},[o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-btn",{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){a.dialog=!0}}},[a._v("\n                    Classic Dialog\n                  ")])],1),a._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-btn",{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){a.dialog2=!0}}},[a._v("\n                    Notice Modal\n                  ")])],1),a._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-btn",{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){a.dialog3=!0}}},[a._v("\n                    Small Alert Modal\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1),a._v(" "),o("base-material-snackbar",a._b({attrs:{type:a.color},model:{value:a.snackbar,callback:function(t){a.snackbar=t},expression:"snackbar"}},"base-material-snackbar",(t={},t[a.parsedDirection[0]]=!0,t[a.parsedDirection[1]]=!0,t),!1),[a._v("\n    Welcome to "),o("span",{staticClass:"font-weight-bold"},[a._v(" MATERIAL DASHBOARD ")]),a._v(" — a beautiful admin panel for every web developer.\n  ")]),a._v(" "),o("v-dialog",{attrs:{"max-width":"500"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[o("v-card",{staticClass:"text-center"},[o("v-card-title",[a._v("\n        Dialog Title\n\n        "),o("v-spacer"),a._v(" "),o("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog=!1}}},[a._v("\n          mdi-close\n        ")])],1),a._v(" "),o("v-card-text",[a._v("\n        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n      ")]),a._v(" "),o("v-card-actions",[o("v-spacer"),a._v(" "),o("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("\n          Close\n        ")])],1)],1)],1),a._v(" "),o("v-dialog",{attrs:{"max-width":"500"},model:{value:a.dialog2,callback:function(t){a.dialog2=t},expression:"dialog2"}},[o("v-card",[o("v-card-title",[a._v("\n        How do you become an affiliate?\n\n        "),o("v-spacer"),a._v(" "),o("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog2=!1}}},[a._v("\n          mdi-close\n        ")])],1),a._v(" "),o("v-card-text",{staticClass:"body-1 text-center"},[o("v-row",[o("v-col",{attrs:{cols:"12",md:"8"}},[o("div",[o("div",[o("strong",[a._v("1. Register")])]),a._v(" "),o("div",{staticClass:"grey--text"},[a._v("\n                The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you.\n              ")])])]),a._v(" "),o("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[o("v-sheet",[o("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),a._v(" "),o("v-col",{attrs:{cols:"12",md:"8"}},[o("div",[o("div",[o("strong",[a._v("2. Apply")])]),a._v(" "),o("div",{staticClass:"grey--text"},[a._v("\n                The first step is to create an account at "),o("a",{attrs:{href:"http://www.creative-tim.com/"}},[a._v("Creative Tim")]),a._v(". You can choose a social network or go for the classic version, whatever works best for you.\n              ")])])]),a._v(" "),o("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[o("v-sheet",[o("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),a._v(" "),o("v-col",{attrs:{cols:"12"}},[a._v("\n            If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!\n          ")])],1),a._v(" "),o("v-btn",{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){a.dialog2=!1}}},[a._v("\n          Sounds good\n        ")])],1)],1)],1),a._v(" "),o("v-dialog",{attrs:{"max-width":"300"},model:{value:a.dialog3,callback:function(t){a.dialog3=t},expression:"dialog3"}},[o("v-card",[o("v-card-title",[a._v("\n        Are you sure?\n\n        "),o("v-spacer"),a._v(" "),o("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog3=!1}}},[a._v("\n          mdi-close\n        ")])],1),a._v(" "),o("v-card-text",{staticClass:"pb-6 pt-12 text-center"},[o("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){a.dialog3=!1}}},[a._v("\n          Nevermind\n        ")]),a._v(" "),o("v-btn",{attrs:{color:"success",text:""},on:{click:function(t){a.dialog3=!1}}},[a._v("\n          Yes\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);