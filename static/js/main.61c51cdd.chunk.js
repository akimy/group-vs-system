(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(73),n(60)),l=n.n(i),s=n(44),u=n.n(s),m=n(19),d=n(89),f=n(61),p=n(4),v=n(32),_=n(17),E=n(46),y=n(150);function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var o={type:e};return n.forEach(function(e,t){o[n[t]]=a[t]}),o}}var g,L=b("ADD_PLAYER","id","name","teamN"),O=b("REMOVE_PLAYER","id"),A=b("TOGGLE_PLAYER_STATUS","id"),N=b("TOGGLE_PLAYER_1ST_LIVE","id"),j=b("TOGGLE_PLAYER_2ND_LIVE","id"),h=b("SHUFFLE","isFinished","teamN"),S=(b("SHUFFLE_END"),b("WRITE_LOG","message"),function(e,t){return e.players.find(function(e){return e.id===t})});var k,G,T=function(e){return e[Math.floor(Math.random()*e.length)]},B=function(e,t){var n=e.logs;return[{id:Object(y.a)(),message:t,time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}].concat(Object(_.a)(n))},w=(k=[],g={},Object(p.a)(g,"ADD_PLAYER",function(e,t){var n=t.id,a=t.name,r=t.teamN;return Object(v.a)({},e,{players:[].concat(Object(_.a)(e.players),[{id:n,name:a,teamN:r,isActive:!0,firstLive:!0,secondLive:!0,inBattle:!1}]),logs:B(e,"".concat(a," added to team #").concat(r))})}),Object(p.a)(g,"REMOVE_PLAYER",function(e,t){var n=t.id,a=S(e,n);return Object(v.a)({},e,{players:e.players.filter(function(e){return e.id!==n}),logs:B(e,"".concat(a.name," removed"))})}),Object(p.a)(g,"TOGGLE_PLAYER_STATUS",function(e,t){var n=t.id,a=S(e,n),r=e.players.findIndex(function(e){return e.id===n}),o=Object(E.a)(e.players);return o[r].isActive=!o[r].isActive,Object(v.a)({},e,{players:o,logs:B(e,"".concat(a.name," is now ").concat(a.isActive?"inactive":"active"))})}),Object(p.a)(g,"TOGGLE_PLAYER_1ST_LIVE",function(e,t){var n=t.id,a=S(e,n),r=e.players.findIndex(function(e){return e.id===n}),o=Object(E.a)(e.players);return o[r].firstLive=!o[r].firstLive,Object(v.a)({},e,{players:o,logs:B(e,"".concat(a.name," ").concat(o[r].firstLive?"recieved one live":"lost one live"))})}),Object(p.a)(g,"TOGGLE_PLAYER_2ND_LIVE",function(e,t){var n=t.id,a=S(e,n),r=e.players.findIndex(function(e){return e.id===n}),o=Object(E.a)(e.players);return o[r].secondLive=!o[r].secondLive,Object(v.a)({},e,{players:o,logs:B(e,"".concat(a.name," ").concat(o[r].secondLive?"recieved one live":"lost one live"))})}),Object(p.a)(g,"SHUFFLE",function(e,t){var n,a,r=t.isFinished,o=t.teamN,c=Object(E.a)(e.players),i=c.filter(function(e){return 1===e.teamN&&e.isActive}),l=c.filter(function(e){return 2===e.teamN&&e.isActive});if(0===i.length||0===l.length)return e;switch(o){case 1:n=T(i),a=l.find(function(e){return e.inBattle});break;case 2:a=T(l),n=i.find(function(e){return e.inBattle});break;default:n=T(i),a=T(l)}return function(e){e.forEach(function(e){e.inBattle=!1})}(c),n.inBattle=!0,a.inBattle=!0,Object(v.a)({},e,{players:c,logs:r?B(e,"Match started ".concat(n.name," vs ").concat(a.name)):e.logs})}),G=g,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return G.hasOwnProperty(t.type)?G[t.type](e,t):e}),P={players:[],animationActive:!1,logs:[]};function R(){var e=f.composeWithDevTools.apply(void 0,[]);return Object(d.createStore)(w,P,e)}var D=n(152),I=n(88),F=n.n(I),C=n(45),Y=n.n(C),x=function(){var e=Object(m.c)(function(e){return e.logs});return r.a.createElement("div",{className:Y.a.root},r.a.createElement("h2",{className:Y.a.title},"LOG"),e.map(function(e){return r.a.createElement("div",{className:Y.a.log,key:e.id},r.a.createElement("span",{className:Y.a.time},e.time),e.message)}))},z=n(62),H=n.n(z),M=n(55),V=n.n(M),J=n(56),U=n.n(J),W=n(63),X=n.n(W),Q=n(149),K=n(84),Z=n(33),q=n.n(Z),$=function(e){var t=e.id,n=Object(m.b)(),a=function(e){return n(N(e))},o=function(e){return n(j(e))},c=Object(m.c)(function(e){return e.players.find(function(e){return e.id===t})}),i=c.name,l=c.isActive,s=c.firstLive,u=c.secondLive,d=c.inBattle;return r.a.createElement("div",{className:H()(q.a.root,d&&q.a.rootActive,!l&&q.a.rootDisabled)},r.a.createElement("div",{className:q.a.name},i,r.a.createElement("div",{className:q.a.clearIcon},r.a.createElement(X.a,{fontSize:"small",color:"error",onClick:function(){return function(e){return n(O(e))}(t)}}))),r.a.createElement("div",{className:q.a.controls},s?r.a.createElement(V.a,{fontSize:"small",color:"error",onClick:function(){return a(t)}}):r.a.createElement(U.a,{fontSize:"small",color:"error",onClick:function(){return a(t)}}),u?r.a.createElement(V.a,{fontSize:"small",color:"error",onClick:function(){return o(t)}}):r.a.createElement(U.a,{fontSize:"small",color:"error",onClick:function(){return o(t)}}),r.a.createElement(Q.a,{checked:l,onChange:function(){return function(e){return n(A(e))}(t)},size:"small",sx:{color:K.a[800],"&.Mui-checked":{color:K.a[600]}}})))},ee=n(147),te=n(91),ne=n.n(te),ae=function(e){var t=e.teamN,n=Object(m.b)(),o=Object(m.c)(function(e){return e.players.filter(function(e){return e.teamN===t})});return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:ne.a.root},o.map(function(e){var t=e.id,n=e.name;return r.a.createElement($,{key:t,id:t,name:n})}),r.a.createElement("div",{className:ne.a.input},r.a.createElement(ee.a,{id:"standard-basic",label:"Add player",variant:"standard",onKeyDown:function(e){if(13===e.keyCode){var a=e.target;r=a.value,n(L(Object(y.a)(),r,t)),a.value=""}var r}}))))},re=n(34),oe=n.n(re),ce=function(e){var t=e.players;return{p1:t.find(function(e){return 1===e.teamN&&e.inBattle&&e.isActive}),p2:t.find(function(e){return 2===e.teamN&&e.inBattle&&e.isActive})}},ie=function(e,t){return e.filter(function(e){return e.teamN===t&&!0===e.isActive&&!1===e.inBattle}).length},le=function(e){var t=e.players,n=ie(t,1),a=ce(e).p2;return 0===n||!Boolean(a)},se=function(e){var t=e.players,n=ie(t,2),a=ce(e).p1;return 0===n||!Boolean(a)},ue=function(e){var t=e.players,n=ie(t,1),a=ie(t,2);return 0===n||0===a},me=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=function(n){var a=15===n;setTimeout(function(){e(h(a,t))},70*n)},a=0;a<=15;a++)n(a)},de=function(){var e=Object(m.b)(),t=Object(m.c)(ce),n=t.p1,a=t.p2,o=Object(m.c)(le),c=Object(m.c)(se),i=Object(m.c)(ue),l=Boolean(n)&&Boolean(a);return r.a.createElement("div",{className:oe.a.root},r.a.createElement(x,null),r.a.createElement("div",{className:oe.a.battlefield},r.a.createElement("div",{className:oe.a.wrapper},l&&r.a.createElement("div",{className:oe.a.vsString},n.name," vs ",a.name),r.a.createElement(ae,{teamN:1}),r.a.createElement("div",{className:oe.a.separator}),r.a.createElement(ae,{teamN:2})),r.a.createElement("div",null,r.a.createElement(D.a,{disabled:o,onClick:function(){me(e,1)},variant:"contained",color:"error",endIcon:r.a.createElement(F.a,null)},"L"),r.a.createElement(D.a,{disabled:i,className:oe.a.mainButton,onClick:function(){me(e,null)},variant:"contained",color:"error",endIcon:r.a.createElement(F.a,null)},"Start"),r.a.createElement(D.a,{disabled:c,onClick:function(){me(e,2)},variant:"contained",color:"error",endIcon:r.a.createElement(F.a,null)},"R"))))};var fe=function(){return r.a.createElement(m.a,{store:R()},r.a.createElement("div",{className:u.a.app},r.a.createElement("header",{className:u.a.appHeader},r.a.createElement("img",{src:l.a,className:u.a.appLogo,alt:"logo"}),r.a.createElement("h1",{className:u.a.title},"Tekken Group VS System")),r.a.createElement(de,null)))},pe=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,146)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),pe()},33:function(e,t,n){e.exports={root:"styles_root__2iJXA",clearIcon:"styles_clearIcon__bPkNH",controls:"styles_controls__3Y0sM",rootActive:"styles_rootActive__7GjpF",rootDisabled:"styles_rootDisabled__2lkJb",name:"styles_name__3pf0v"}},34:function(e,t,n){e.exports={root:"styles_root__R6jQW",battlefield:"styles_battlefield__3wzGZ",wrapper:"styles_wrapper__RkgXi",separator:"styles_separator__1GQcm",vsString:"styles_vsString__3GrTs",mainButton:"styles_mainButton__1n76P"}},44:function(e,t,n){e.exports={app:"App_app__3rd5h",appLogo:"App_appLogo__uPv6G",title:"App_title__2H4-c","App-logo-spin":"App_App-logo-spin__2Jd8e",appHeader:"App_appHeader__36oj6"}},45:function(e,t,n){e.exports={root:"styles_root__AkpRS",time:"styles_time__1g8XD",title:"styles_title__3DYrk",log:"styles_log__PFzm5"}},60:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},65:function(e,t,n){e.exports=n(104)},73:function(e,t,n){},91:function(e,t,n){e.exports={root:"styles_root__2jUEJ",input:"styles_input__21o8u"}}},[[65,3,2]]]);
//# sourceMappingURL=main.61c51cdd.chunk.js.map