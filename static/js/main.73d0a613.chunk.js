(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{15:function(e,t,a){e.exports={container:"Cards_container__116iq",card:"Cards_card__2yJuJ",infected:"Cards_infected__2GCM6",recovered:"Cards_recovered__IeJm1",deaths:"Cards_deaths__EXzBh"}},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(78),o=a.n(c),u=a(6),l=a.n(u),i=a(9),s=a(79),d=a(80),m=a(90),p=a(91),f=a(18),v=a(49),h=a(26),b=a.n(h),E="https://covid19.mathdro.id/api",y=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,c,o,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries/").concat(t.country,"/confirmed"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.map((function(e){return{provinceState:e.provinceState,confirmed:e.confirmed,active:e.active,recovered:e.recovered,deaths:e.deaths}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=a(82),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,s=Object(n.useState)({}),d=Object(f.a)(s,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?r.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current situation in ".concat(u)}}}):null,b=m[0]?r.a.createElement(v.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:_.a.container},u?h:b)},j=a(247),k=a(246),S=a(83),D=a.n(S),N=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:D.a.formControl},r.a.createElement(k.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},I=a(5),V=a(237),A=a(235),J=a(236),B=a(238),K=a(216),R=a(239),U=a(240),z=a(241),G=a(88),H=a.n(G),M=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){(function(){var t=Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,x(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var u=Object(I.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),s=Object(I.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(J.a),d=c,m=Object(V.a)({table:{minWidth:100}})();return r.a.createElement("div",{className:H.a.container},d.length>1?r.a.createElement("h3",null,"Statewise Data for ",e.country):r.a.createElement("h3",null,"Statewise Data for ",e.country," is not Available"),d.length>1?r.a.createElement(B.a,{component:K.a},r.a.createElement(R.a,{className:m.table,stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(u,{width:"100"},"States"),r.a.createElement(u,{align:"left",width:"50"},"Confirmed"),r.a.createElement(u,{align:"left",width:"50"},"Active"),r.a.createElement(u,{align:"left",width:"50"},"Recovered"),r.a.createElement(u,{align:"left",width:"50"},"Deaths"))),r.a.createElement(z.a,null,d.length>1?d.map((function(e){return r.a.createElement(s,{key:e.provinceState},r.a.createElement(u,{component:"th",scope:"row"},e.provinceState),r.a.createElement(u,{style:{color:"rgba(0, 139, 139, 0.8)"},align:"left"},e.confirmed),r.a.createElement(u,{style:{color:"rgba(0, 0, 255, 0.8)"},align:"left"},e.active),r.a.createElement(u,{style:{color:"rgba(0, 140, 0, 0.8)"},align:"left"},e.recovered),r.a.createElement(u,{style:{color:"rgba(255, 0, 0, 0.8)"},align:"left"},e.deaths))})):"Statewise Data for this Country is not Available."))):null)},P=a(242),q=a(243),L=a(244),T=a(245),W=a(38),X=a.n(W),F=a(39),Q=a.n(F),Y=a(15),Z=a.n(Y),$=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:Z.a.container},r.a.createElement(P.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(P.a,{item:!0,xs:12,md:3,component:q.a,className:Q()(Z.a.card,Z.a.infected)},r.a.createElement(L.a,null,r.a.createElement(T.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(T.a,{variant:"h5",component:"h2"},r.a.createElement(X.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(T.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(P.a,{item:!0,xs:12,md:3,component:q.a,className:Q()(Z.a.card,Z.a.recovered)},r.a.createElement(L.a,null,r.a.createElement(T.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(T.a,{variant:"h5",component:"h2"},r.a.createElement(X.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(T.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(P.a,{item:!0,xs:12,md:3,component:q.a,className:Q()(Z.a.card,Z.a.deaths)},r.a.createElement(L.a,null,r.a.createElement(T.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(T.a,{variant:"h5",component:"h2"},r.a.createElement(X.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(T.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},ee=a(51),te=a.n(ee),ae=a(89),ne=a.n(ae),re=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:te.a.container},r.a.createElement("img",{className:te.a.image,src:ne.a,alt:"COVID-19"}),r.a.createElement($,{data:t}),r.a.createElement(N,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t,country:a}),a?r.a.createElement(M,{country:a}):null)}}]),a}(r.a.Component);o.a.render(r.a.createElement(re,null),document.getElementById("root"))},51:function(e,t,a){e.exports={container:"App_container__1wNg5",image:"App_image__3H7sK"}},82:function(e,t,a){e.exports={container:"Chart_container__34VvV"}},83:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3hrp1"}},88:function(e,t,a){e.exports={container:"StateTable_container__3K5JK"}},89:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},95:function(e,t,a){e.exports=a(215)}},[[95,1,2]]]);
//# sourceMappingURL=main.73d0a613.chunk.js.map