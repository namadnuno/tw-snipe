(this["webpackJsonptw-snipe"]=this["webpackJsonptw-snipe"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),c=a.n(r),l=(a(22),a(5)),i=(a(23),a(12)),o=a(13),d=function(){function e(){Object(i.a)(this,e),this.units=void 0,this.units=[{name:"spear",speed:18},{name:"sword",speed:22},{name:"axe",speed:18},{name:"archer",speed:18},{name:"spy",speed:9},{name:"light",speed:10},{name:"marcher",speed:10},{name:"heavy",speed:11},{name:"ram",speed:30},{name:"catapult",speed:30},{name:"knight",speed:10},{name:"snob",speed:35}]}return Object(o.a)(e,[{key:"getUnits",value:function(){return this.units}},{key:"getSpeedOrdered",value:function(){return this.units.sort((function(e,t){return e.speed-t.speed}))}}]),e}(),u=a(17),m=a(1),b=function(e){var t=e.units,a=e.Submited;return Object(m.jsx)(u.a,{initialValues:{defender_coords:"",attack_datetime:"",defender_slowest_unit:null,nearest_babarian_village_coords:"",support_max_time:5,world:""},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){a(e),n(!1)}),400)},children:function(e){var a=e.values,n=(e.errors,e.touched,e.handleChange),s=e.handleBlur,r=e.handleSubmit,c=e.isSubmitting,l=e.setFieldValue;return Object(m.jsxs)("form",{onSubmit:r,children:[Object(m.jsxs)("div",{className:"f-group",children:[Object(m.jsx)("label",{htmlFor:"world",children:"World"}),Object(m.jsx)("input",{type:"text",name:"world",onChange:n,onBlur:s,value:a.world,placeholder:"pt77"})]}),Object(m.jsxs)("div",{className:"f-group",children:[Object(m.jsx)("label",{htmlFor:"defender_coords",children:"Defender Coordenates"}),Object(m.jsx)("input",{type:"text",name:"defender_coords",onChange:n,onBlur:s,value:a.defender_coords,placeholder:"453|347"})]}),Object(m.jsxs)("div",{className:"f-group",children:[Object(m.jsx)("label",{htmlFor:"nearest_babarian_village_coords",children:"Nearest Barbarian Village Coordenates"}),Object(m.jsx)("input",{type:"text",name:"nearest_babarian_village_coords",onChange:n,onBlur:s,value:a.nearest_babarian_village_coords,placeholder:"452|349"})]}),Object(m.jsxs)("div",{className:"f-group",children:[Object(m.jsx)("label",{htmlFor:"attack_datetime",children:"Attack datetime:"}),Object(m.jsx)("input",{type:"datetime",name:"attack_datetime",onChange:n,onBlur:s,placeholder:"2021-02-20 02:14:53",value:a.attack_datetime})]}),Object(m.jsxs)("div",{className:"unit-list",children:[Object(m.jsx)("label",{htmlFor:"slowest_unit",children:"Slowest Unit"}),t.map((function(e){return Object(m.jsx)("button",{type:"button",onClick:function(){l("defender_slowest_unit",e)},className:a.defender_slowest_unit===e?"is-selected":"",children:Object(m.jsx)("img",{src:"/units/Unit_"+e.name+".png",alt:e.name})})}))]}),Object(m.jsxs)("div",{className:"f-group",children:[Object(m.jsx)("label",{htmlFor:"support_max_time",children:"Support max time"}),Object(m.jsx)("input",{type:"number",max:"10",min:"2",name:"support_max_time",onChange:n,onBlur:s,value:a.support_max_time})]}),Object(m.jsx)("button",{type:"submit",disabled:c,children:"Submit"})]})}})},p=a(16),j=a.n(p),_=function(e){var t=e.nearest_babarian_village_coords.replace("|",";"),a=function(e,t){var a=e.split("|").map((function(e){return parseInt(e,10)})),n=Object(l.a)(a,2),s=n[0],r=n[1],c=t.split("|").map((function(e){return parseInt(e,10)})),i=Object(l.a)(c,2),o=i[0],d=i[1];return Math.max(Math.abs(s-o),Math.abs(r-d))}(e.defender_coords,e.nearest_babarian_village_coords);console.log(a);var n=100;e.defender_slowest_unit&&(n=a*e.defender_slowest_unit.speed),console.log(e.defender_slowest_unit,"defender_slowest_unit",n);var s,r=2*e.support_max_time,c=j()(e.attack_datetime),i=(s=n,Math.floor(s/60)+":"+s%60);return console.log(i,"cacelSuportTime"),{attack_barbarian_at:c.subtract(r,"minutes").format("YYYY-MM-DD HH:mm:ss"),cancel_attack_at:c.subtract(e.support_max_time,"minutes").format("YYYY-MM-DD HH:mm:ss"),cancel_suport_command_at:i,attack_at:c.format("YYYY-MM-DD HH:mm:ss"),attack_barbarian_village_url:"https://"+e.world+".tribalwars.com.pt/game.php?screen=map#"+t,commands_place_url:"https://"+e.world+".tribalwars.com.pt/game.php?screen=place"}},h=function(){var e=new d,t=Object(n.useState)(!1),a=Object(l.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(null),i=Object(l.a)(c,2),o=i[0],u=i[1];return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",{src:"/logo.png",className:"App-logo",alt:"logo"}),Object(m.jsx)("p",{children:"TW Sniper"}),!s&&Object(m.jsx)(b,{units:e.getSpeedOrdered(),Submited:function(e){u(_(e)),r(!0)}}),s&&null!=o&&Object(m.jsxs)("div",{className:"result",children:[Object(m.jsxs)("div",{className:"line",children:[Object(m.jsx)("span",{className:"label",children:"Attack:"}),Object(m.jsx)("span",{className:"value",children:o.attack_at})]}),Object(m.jsxs)("div",{className:"line",children:[Object(m.jsx)("span",{className:"label",children:"Attack the barbarian village at:"}),Object(m.jsx)("a",{rel:"noreferrer",href:o.attack_barbarian_village_url,target:"_blank",className:"value",children:o.attack_barbarian_at})]}),Object(m.jsxs)("div",{className:"line",children:[Object(m.jsx)("span",{className:"label",children:"Cancel the barbarian village attack at:"}),Object(m.jsxs)("a",{rel:"noreferrer",href:o.commands_place_url,target:"_blank",className:"value",children:[o.cancel_attack_at,", ",o.cancel_suport_command_at]})]}),Object(m.jsx)("button",{onClick:function(){r(!1)},type:"button",children:"Reset"})]}),Object(m.jsx)("div",{className:"bg-left"}),Object(m.jsx)("div",{className:"bg-right"})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.697d4359.chunk.js.map