(this["webpackJsonpjcw-app"]=this["webpackJsonpjcw-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return b}));var n=a(29),c=a(30);function r(){var e=Object(n.a)([""]);return r=function(){return e},e}var u=c.a.div.attrs((function(e){return{className:"text-app_ivory w-full  ".concat(e.children)}}))(r());function s(){var e=Object(n.a)([""]);return s=function(){return e},e}var o=c.a.div.attrs((function(e){return{className:"h-screen px-4  pb-24 overflow-y-scroll scrolling-touch ".concat(e)}}))(s());a(0),a(34),a(35);function i(){var e=Object(n.a)(["\n    & {\n        span {\n            ","\n        }\n    }\n"]);return i=function(){return e},e}c.a.div.attrs({className:"fixed top-0 left-0 z-50 flex items-center justify-center block w-full h-full bg-black"})(i(),{display:"block",width:"0",height:"0",marginTop:"-3rem",color:"#7E7E7E"});function l(){var e=Object(n.a)([""]);return l=function(){return e},e}var b=c.a.div.attrs((function(e){return{className:"w-full p-4 mt-4 rounded-lg bg-app_dark  ".concat(e.children)}}))(l())},11:function(e,t,a){"use strict";t.a={FETCH_IMG:"api/FETCH_IMG",FETCH_IMG_SUCC:"api/FETCH_IMG_SUCC",FETCH_IMG_FAILED:"api/FETCH_IMG_FAILED",FETCH_POOL_DEBT:"api/FETCH_POOL_DEBT",FETCH_POOL_DEBT_SUCC:"api/FETCH_POOL_DEBT_SUCC",FETCH_POOL_DEBT_FAILED:"api/FETCH_POOL_DEBT_FAILED",FETCH_REPORT:"api/FETCH_REPORT",FETCH_REPORT_SUCC:"api/FETCH_REPORT_SUCC",FETCH_REPORT_FAILED:"api/FETCH_REPORT_FAILED"}},117:function(e,t){},187:function(e,t,a){e.exports=a(394)},219:function(e,t){},235:function(e,t){},237:function(e,t){},243:function(e,t){},252:function(e,t){},254:function(e,t){},260:function(e,t){},262:function(e,t){},295:function(e,t){},296:function(e,t){},301:function(e,t){},303:function(e,t){},327:function(e,t){},383:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(67),u=a.n(r),s=a(22),o=a(47);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(24),l=a(179),b=a(186),f=a(15),p=a.n(f),E=a(13),_=a(180),O=a.n(_),d="ws/CONNECT",m="ws/CONNECT_SUCC",j="ws/UPDATE_PROFIBILITY",v="ws/UPDATE_SYSTEM_STATUS",T="ws/UPDATE_HASHRATE",h="ws/RECENT_BLOCK",C="WS/UPDATE_BALANCE",F=p.a.mark(x),w=p.a.mark(y);function x(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=new O.a({apiKey:"0a7a6fade943f7b6b9e96b4d1516bfcc733b5158af18d1b43aeec7e45a238c02",_debug:!1,subscribe:"all"}),t.next=4,Object(E.c)({type:m,connection:e});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),F,null,[[0,6]])}function y(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.e)(d,x);case 2:case"end":return e.stop()}}),w)}var g=a(70),H=a.n(g),k=a(11),D=p.a.mark(A),P=p.a.mark(S),I=p.a.mark(B),L=p.a.mark(U),R="https://prohashing.com/";function A(){var e,t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(E.b)(H.a.get,R+"coin/images");case 3:if(e=n.sent,t=e.status,a=e.data,200!==t){n.next=10;break}return n.next=9,Object(E.c)({type:k.a.FETCH_IMG_SUCC,img_url:a,status_code:0});case 9:return n.abrupt("return");case 10:return n.next=12,Object(E.c)({type:k.a.FETCH_IMG_FAILED,status_code:1});case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(E.c)({type:k.a.FETCH_IMG_FAILED,status_code:2});case 18:case"end":return n.stop()}}),D,null,[[0,14]])}function S(){var e,t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(E.b)(H.a.get,R+"statusPoolDebt");case 3:if(e=n.sent,t=e.status,a=e.data,200!==t){n.next=10;break}return n.next=9,Object(E.c)({type:k.a.FETCH_POOL_DEBT_SUCC,pool_debt:a,status_code:0});case 9:return n.abrupt("return");case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(E.c)({type:k.a.FETCH_POOL_DEBT_FAILED,status_code:2});case 16:case"end":return n.stop()}}),P,null,[[0,12]])}function B(){var e,t,a,n;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(E.d)((function(e){return e.api.date}));case 2:return e=c.sent,c.prev=3,c.next=6,Object(E.b)(H.a.get,R+"maintenance/profit?startDate=".concat(e));case 6:if(t=c.sent,a=t.status,n=t.data,200!==a){c.next=13;break}return c.next=12,Object(E.c)({type:k.a.FETCH_REPORT_SUCC,report:n,status_code:0});case 12:return c.abrupt("return");case 13:return c.next=15,Object(E.c)({type:k.a.FETCH_REPORT_FAILED,status_code:1});case 15:c.next=21;break;case 17:return c.prev=17,c.t0=c.catch(3),c.next=21,Object(E.c)({type:k.a.FETCH_REPORT_FAILED,status_code:2});case 21:case"end":return c.stop()}}),I,null,[[3,17]])}function U(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.e)(k.a.FETCH_IMG,A);case 2:return e.next=4,Object(E.e)(k.a.FETCH_POOL_DEBT,S);case 4:return e.next=6,Object(E.e)(k.a.FETCH_REPORT,B);case 6:case"end":return e.stop()}}),L)}var M=p.a.mark(N);function N(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([y(),U()]);case 2:case"end":return e.stop()}}),M)}var G=a(8),z=a(54),W=a.n(z),J={blocks:[],profitability:[]};var K={};var Y=Object(i.combineReducers)({ws:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object.assign({},e,t);case m:var a=t.connection;return Object(G.a)(Object(G.a)({},e),{},{connection:a});case j:var n=t.incoming,c=W.a.unionBy(n,e.profitability,"algorithm_name");return Object(G.a)(Object(G.a)({},e),{},{profitability:c});case v:var r=t.system_status;return Object(G.a)(Object(G.a)({},e),{},{system_status:r});case T:var u=t.hashrate;return Object(G.a)(Object(G.a)({},e),{},{hashrate:u});case h:var s=t.newBlocks,o=W.a.map(s,(function(e){return W.a.extend({},e,{now:new Date})})),i=W.a.unionBy(o,e.blocks,"block_hash");return Object(G.a)(Object(G.a)({},e),{},{blocks:i});case C:var l=t.newBalance;return Object(G.a)(Object(G.a)({},e),{},{balance:l});default:return e}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.a.FETCH_IMG:return Object.assign({},e,t);case k.a.FETCH_IMG_SUCC:var a=t.img_url;return Object(G.a)(Object(G.a)({},e),{},{img_url:a,status_code:t.status_code});case k.a.FETCH_IMG_FAILED:return Object(G.a)(Object(G.a)({},e),{},{status_code:t.status_code});case k.a.FETCH_POOL_DEBT:return Object.assign({},e,t);case k.a.FETCH_POOL_DEBT_SUCC:var n=t.pool_debt;return Object(G.a)(Object(G.a)({},e),{},{pool_debt:n,status_code:t.status_code});case k.a.FETCH_POOL_DEBT_FAILED:return Object(G.a)(Object(G.a)({},e),{},{status_code:t.status_code});case k.a.FETCH_REPORT:return Object.assign({},e,t);case k.a.FETCH_REPORT_SUCC:var c=t.report;return Object(G.a)(Object(G.a)({},e),{},{report:c,status_code:t.status_code});case k.a.FETCH_REPORT_FAILED:return Object(G.a)(Object(G.a)({},e),{},{status_code:t.status_code});default:return e}}}),$=Object(b.a)(),q=Object(l.composeWithDevTools)(Object(i.applyMiddleware)($)),Q=Object(i.createStore)(Y,{},q);$.run(N);a(383);var V=a(398),X=a(185),Z=a.n(X);function ee(e){var t=e.path;return c.a.createElement("div",{className:"absolute top-0 z-10 flex justify-between w-full px-8 pt-4 text-xl font-medium bg-black opacity-90 ".concat("pb-0")},"/"===t||"/blocks"===t?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.A,{href:"/",className:"/"===t?"text-app_ivory":"text-app_gray"},"Live Profit"),c.a.createElement(s.A,{href:"/blocks",className:"/blocks"===t?"text-app_ivory":"text-app_gray"},"Recent Blocks")):c.a.createElement("h1",null,t.substring(1).charAt(0).toUpperCase()+t.slice(2)))}var te=a(102);function ae(e){var t=e.children;return c.a.createElement(te.b,{className:"h-screen xl:mx-auto relative bg-black  xl:w-1/3"},c.a.createElement(c.a.Fragment,null,t))}var ne=a(34),ce=a(35);var re=function(){return c.a.createElement("div",{className:"absolute bottom-0 left-0 z-10 w-full h-auto pb-4 overflow-hidden bg-app_dark"},c.a.createElement("nav",{className:"flex items-center justify-between px-8 pt-2 pb-5 text-2xl bg-app_dark text-app_ivory rounded-md"},c.a.createElement(s.A,{href:"/"},c.a.createElement(ne.a,{icon:ce.a})),c.a.createElement(s.A,{href:"/charts"},c.a.createElement(ne.a,{icon:ce.b})),c.a.createElement(s.A,{href:"/report"},c.a.createElement(ne.a,{icon:ce.e})),c.a.createElement(s.A,{href:"/dashboard"},c.a.createElement(ne.a,{icon:ce.f}))))},ue=a(69);function se(e){var t=e.children,a=Object(o.c)((function(e){return e.ws.connection})),r=Object(o.b)(),u=Object(n.useState)([]),s=Object(ue.a)(u,2),i=s[0],l=s[1],b=Object(n.useState)([]),f=Object(ue.a)(b,2),p=f[0],E=f[1],_=Object(n.useState)([]),O=Object(ue.a)(_,2),m=O[0];O[1];return Object(n.useEffect)((function(){r({type:k.a.FETCH_IMG}),r({type:d})}),[r]),Object(n.useEffect)((function(){if(a)return a.on("profitability",(function(e){var t=e[0]?e[0]:e,a=Object.assign({},t);l(Object.values(a))})),a.on("systemStatus",(function(e){var t=e[0]?e[0]:e,a=t.subscriptions_count,n=t.block_template_count,c=t.total_hashrate_with_defaults;r({type:v,system_status:[a,n]}),r({type:T,hashrate:Object(G.a)({},c)})})),a.on("block",(function(e){E(e)})),function(){a.removeAllListeners()}}),[r,a]),Object(n.useEffect)((function(){r({type:j,incoming:i})}),[r,i]),Object(n.useEffect)((function(){r({type:h,newBlocks:p})}),[r,p]),Object(n.useEffect)((function(){r({type:C,newBalance:m})}),[r,m]),c.a.createElement(c.a.Fragment,null,t)}function oe(){return c.a.createElement("div",null,"404")}var ie=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,405))})),le=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,404))})),be=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,402))})),fe=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,406))})),pe=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,403))})),Ee={"/":function(){return c.a.createElement(ie,null)},"/blocks":function(){return c.a.createElement(le,null)},"/charts":function(){return c.a.createElement(be,null)},"/report":function(){return c.a.createElement(fe,null)},"/dashboard":function(){return c.a.createElement(pe,null)}};function _e(){var e=Object(s.useRoutes)(Ee),t=Object(s.usePath)();return c.a.createElement(o.a,{store:Q},c.a.createElement(se,null,c.a.createElement(ae,null,c.a.createElement(ee,{path:t}),c.a.createElement(n.Suspense,{fallback:c.a.createElement(c.a.Fragment,null)},e||c.a.createElement(oe,null)),c.a.createElement(re,null))))}u.a.render(c.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),V.a.addLocale(Z.a)}},[[187,1,2]]]);
//# sourceMappingURL=main.cf780ce9.chunk.js.map