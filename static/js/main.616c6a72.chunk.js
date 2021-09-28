(this["webpackJsonpivs-moderation-dr"]=this["webpackJsonpivs-moderation-dr"]||[]).push([[0],{31:function(t,n,e){},38:function(t,n,e){"use strict";e.r(n);var r,i=e(0),a=e.n(i),c=e(20),o=e.n(c),l=e(17),s=e(11),d=e(9),u=Object(i.createContext)(null),b=e(1);!function(t){t.SET_CHANNELS="SET_CHANNELS",t.SET_SELECTED_CHANNEL="SET_SELECTED_CHANNEL"}(r||(r={}));var m,h={channels:[],selectedChannelId:""},f=function(t,n){switch(n.type){case r.SET_CHANNELS:return Object(d.a)(Object(d.a)({},t),{},{channels:n.channels});case r.SET_SELECTED_CHANNEL:return Object(d.a)(Object(d.a)({},t),{},{selectedChannelId:n.selectedChannelId});default:throw new Error("Unexpected action type")}},p=function(t){var n=t.children,e=Object(i.useReducer)(f,h),a=Object(s.a)(e,2),c=a[0],o=a[1],l=Object(i.useCallback)((function(t){return o({type:r.SET_CHANNELS,channels:t})}),[]),m=Object(i.useCallback)((function(t){return o({type:r.SET_SELECTED_CHANNEL,selectedChannelId:t})}),[]),p=Object(i.useMemo)((function(){return Object(d.a)(Object(d.a)({},c),{},{setChannels:l,setSelectedChannelId:m})}),[c,l,m]);return Object(b.jsx)(u.Provider,{value:p,children:n})},g=Object(i.createContext)(null);!function(t){t[t.XS=0]="XS",t[t.SM=600]="SM",t[t.MD=960]="MD",t[t.LG=1280]="LG",t[t.XL=1920]="XL"}(m||(m={}));var O,v=[m.XS,m.SM],j=m,C=function(t){var n=t.children,e=Object(i.useState)(window.innerWidth),r=Object(s.a)(e,2),a=r[0],c=r[1],o=Object(i.useCallback)((function(t){var n=j.XS;for(var e in j){var r=Number(e);if(!isNaN(r)){if(!(t>r))break;n=r}}return n}),[]);Object(i.useEffect)((function(){var t=function(){c(window.innerWidth)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var l=Object(i.useMemo)((function(){var t=o(a);return{breakpoint:t,isMobile:v.includes(t)}}),[o,a]);return Object(b.jsx)(g.Provider,{value:l,children:n})},w=(e(31),e(4)),x=e(2),E=e(3);!function(t){t.PRIMARY="#008CF6",t.PRIMARY_HOVER="#0070C5",t.SECONDARY="#ffffff",t.ALERT="#FD2222",t.ALERT_HOVER="#CA1B1B",t.TERTIARY="#F90000",t.BLACK="#000000",t.GRAY_900="#17212B",t.GRAY_800="#1B2733",t.GRAY_700="#1C2935",t.GRAY_600="#22303F",t.GRAY_500="#2A323E",t.GRAY_400="#2E3845",t.GRAY_300="#414852",t.GRAY_100="#BABABA",t.GREEN="#1BC718",t.LIGHT_GREEN="#02CA46",t.LIGHT_RED="#BC3E57",t.DARK_RED="#A13156"}(O||(O={}));var y,R,A,M,k,L,S,_,I,T,B,q,Y,H,P,z=O,N=E.a.span(y||(y=Object(x.a)(["\n\tcolor: ",";\n"])),z.PRIMARY),G=E.a.div(R||(R=Object(x.a)(["\n\tmargin-top: 5rem;\n\theight: calc(100vh - 5rem);\n\toverflow-y: overlay;\n\tmargin-left: ",";\n\n\t","\n"])),(function(t){return t.isMobile?0:"30rem"}),(function(t){if(t.isMobile)return"&::-webkit-scrollbar {\n\t\t\t\tbackground: transparent; /* Chrome/Safari/Webkit */\n\t\t\t\twidth: 0px;\n\t\t\t}"})),V=E.a.h1(A||(A=Object(x.a)(["\n\tbackground-color: ",";\n\tpadding: 0.6rem 1.5rem;\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tline-height: 1.7rem;\n\tborder-radius: 1.6rem;\n\tmargin: 0;\n"])),z.GRAY_400),K=E.a.section(M||(M=Object(x.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-top: ",";\n"])),(function(t){return t.isMobile?"3.5rem":"0"})),D=E.a.button(k||(k=Object(x.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tborder: none;\n\twidth: 100%;\n\tborder-radius: 0.6rem;\n\tcursor: pointer;\n\tpadding: 1rem;\n\tmargin-top: 0.5rem;\n\tbackground-color: ",";\n\tbackground-position: center;\n\ttransition: background 0.5s;\n\n\t&:hover {\n\t\tbackground: ","\n\t\t\tradial-gradient(circle, transparent 1%, "," 1%)\n\t\t\tcenter/15000%;\n\t}\n\n\t&:active {\n\t\tbackground-color: ",";\n\t\tbackground-size: 100%;\n\t\ttransition: background 0s;\n\t}\n"])),(function(t){return t.isActive?z.GRAY_400:"transparent"}),z.GRAY_400,z.GRAY_400,z.GRAY_300),F=E.a.img(L||(L=Object(x.a)(["\n\tobject-fit: cover;\n\theight: 5.8rem;\n\twidth: 6.8rem;\n\tborder-radius: 1rem;\n"]))),Z=E.a.p(S||(S=Object(x.a)(["\n\tcolor: ",";\n\tfont-family: Inter;\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tline-height: 1.7rem;\n\ttext-align: center;\n\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding-left: 1.3rem;\n"])),(function(t){return t.isActive?z.PRIMARY:z.SECONDARY})),X=function(t){var n=t.item,e=n.id,r=n.name,i=void 0===r?"":r,a=n.image,c=void 0===a?"":a,o=n.alt,l=void 0===o?"thumbnail-".concat(e):o,s=n.isActive,d=void 0!==s&&s,u=t.setSelectedItem;return Object(b.jsxs)(D,{isActive:d,onClick:function(){return u(e)},children:[Object(b.jsx)(F,{src:c,alt:l}),Object(b.jsx)(Z,{isActive:d,children:i})]})},W=E.a.aside(_||(_=Object(x.a)(["\n\tbackground-color: ",";\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\tpadding: 0.5rem;\n\tz-index: 1000;\n\n\t","\n"])),z.GRAY_900,(function(t){var n=t.isMobile,e=t.isMenuOpen;return n?e?"\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\ttop: 5rem;\n\t\t\t\t":"\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\ttop: 5rem;\n\t\t\t\t":"width: 30rem;"})),J=E.a.header(I||(I=Object(x.a)(["\n\tfont-size: 1.4rem;\n\tfont-weight: bold;\n\tline-height: 1.7rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tpadding: 1.2rem 0 1.6rem 0;\n"]))),U=function(t){var n=t.children,e=t.items,r=t.setSelectedChannelId,i=t.isMobile,a=t.isMenuOpen,c=t.setMenuOpen,o=function(t){r(t),a&&c(!1)};return Object(b.jsxs)(W,{isMobile:i,isMenuOpen:a,children:[Object(b.jsx)(J,{children:n}),null===e||void 0===e?void 0:e.map((function(t){return Object(b.jsx)(X,{item:t,setSelectedItem:o},t.id)}))]})},Q=E.a.div(T||(T=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-gap: 2.5rem;\n\tmargin: 0 auto;\n\tpadding: 2.9rem;\n\toverflow-y: overlay;\n\n\t@media (min-width: ","px) {\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t}\n\n\t@media (min-width: ","px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t@media (min-width: ","px) {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n"])),j.XS,j.SM,j.LG),$=E.a.img(B||(B=Object(x.a)(["\n\twidth: 100%;\n\tmin-width: 25rem;\n\tmax-width: 40rem;\n\tborder-radius: 0.8rem;\n"]))),tt=function(t){var n=t.imgSources,e=void 0===n?[]:n;return Object(b.jsx)(Q,{children:e.map((function(t,n){return Object(b.jsx)($,{src:t,alt:"flagged ".concat(t,"-").concat(n)},"".concat(t,"-").concat(n))}))})},nt=E.a.div(q||(q=Object(x.a)(["\n\tposition: fixed;\n\tbottom: 3.5rem;\n\tbackground: linear-gradient(\n\t\t\t104.48deg,\n\t\t\trgba(101, 8, 145, 0.3) -1.61%,\n\t\t\trgba(19, 56, 151, 0) 73.97%\n\t\t),\n\t\t",";\n\tbox-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n\tborder-radius: 16px;\n\tz-index: 100;\n\tpadding: 1.2rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolumn-gap: 1.5rem;\n"])),z.PRIMARY),et=e(25),rt=E.a.button(Y||(Y=Object(x.a)(["\n\tborder: none;\n\theight: 3.8rem;\n\tpadding: 0 2rem;\n\tborder-radius: 0.6rem;\n\tcolor: white;\n\tbackground-color: ",";\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tline-height: 1.7rem;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tbackground-position: center;\n\ttransition: background 0.5s;\n\n\t","\n\n\t&:active {\n\t\tbackground-color: ",";\n\t\tbackground-size: 100%;\n\t\ttransition: background 0s;\n\t}\n"])),z.GRAY_400,(function(t){var n=t.active,e=t.hoverColor;if(!n)return"\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: ".concat(e||z.PRIMARY,"\n\t\t\t\t\t\tradial-gradient(circle, transparent 1%, ").concat(e||z.PRIMARY," 1%)\n\t\t\t\t\t\tcenter/15000%;\n\t\t\t\t}\n\t\t\t")}),z.PRIMARY_HOVER),it=E.a.button(H||(H=Object(x.a)(["\n\twidth: 15rem;\n\theight: 7.2rem;\n\tborder: none;\n\tborder-radius: 1.2rem;\n\tcolor: white;\n\tbackground-color: rgba(255, 255, 255, 0.3);\n\tfont-family: Inter;\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tline-height: 1.7rem;\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\trow-gap: 0.9rem;\n\tpadding: 1rem 5.9rem;\n\n\tbackground-position: center;\n\ttransition: background 0.5s;\n\n\t&:hover {\n\t\tbackground: ","\n\t\t\tradial-gradient(\n\t\t\t\tcircle,\n\t\t\t\ttransparent 1%,\n\t\t\t\t"," 1%\n\t\t\t)\n\t\t\tcenter/15000%;\n\t}\n\n\t&:active {\n\t\tbackground-color: ",";\n\t\tbackground-size: 100%;\n\t\ttransition: background 0s;\n\t}\n"])),(function(t){return t.hoverColor||z.PRIMARY}),(function(t){return t.hoverColor||z.PRIMARY}),z.PRIMARY_HOVER),at=["children","variant"],ct=function(t){var n=t.children,e=t.variant,r=void 0===e?"default":e,i=Object(et.a)(t,at);return"action"===r?Object(b.jsx)(it,Object(d.a)(Object(d.a)({},i),{},{children:n})):Object(b.jsx)(rt,Object(d.a)(Object(d.a)({},i),{},{children:n}))},ot=["title","titleId"];function lt(){return lt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},lt.apply(this,arguments)}function st(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function dt(t,n){var e=t.title,r=t.titleId,a=st(t,ot);return i.createElement("svg",lt({width:23,height:20,viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,P||(P=i.createElement("path",{d:"M12.12 0.559969L6.58 6.09997C6.21 6.46997 6 6.97997 6 7.50997V17.5C6 18.6 6.9 19.5 8 19.5H17C17.8 19.5 18.52 19.02 18.84 18.29L22.1 10.68C22.94 8.69997 21.49 6.49997 19.34 6.49997H13.69L14.64 1.91997C14.74 1.41997 14.59 0.909969 14.23 0.549969C13.64 -0.0300311 12.7 -0.0300311 12.12 0.559969ZM2 19.5C3.1 19.5 4 18.6 4 17.5V9.49997C4 8.39997 3.1 7.49997 2 7.49997C0.9 7.49997 0 8.39997 0 9.49997V17.5C0 18.6 0.9 19.5 2 19.5Z",fill:"white"})))}var ut,bt=i.forwardRef(dt),mt=(e.p,["title","titleId"]);function ht(){return ht=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ht.apply(this,arguments)}function ft(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function pt(t,n){var e=t.title,r=t.titleId,a=ft(t,mt);return i.createElement("svg",ht({width:23,height:20,viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,ut||(ut=i.createElement("path",{d:"M10.88 19.44L16.41 13.9C16.78 13.53 16.99 13.02 16.99 12.49V2.5C16.99 1.4 16.09 0.5 14.99 0.5H6.00002C5.20002 0.5 4.48002 0.98 4.17002 1.71L0.910022 9.32C0.0600216 11.3 1.51002 13.5 3.66002 13.5H9.31002L8.36002 18.08C8.26002 18.58 8.41002 19.09 8.77002 19.45C9.36002 20.03 10.3 20.03 10.88 19.44ZM21 0.5C19.9 0.5 19 1.4 19 2.5V10.5C19 11.6 19.9 12.5 21 12.5C22.1 12.5 23 11.6 23 10.5V2.5C23 1.4 22.1 0.5 21 0.5Z",fill:"white"})))}var gt,Ot=i.forwardRef(pt),vt=(e.p,function(){return Object(b.jsxs)(nt,{children:[Object(b.jsxs)(ct,{variant:"action",hoverColor:z.LIGHT_GREEN,children:[Object(b.jsx)(bt,{}),"Ignore"]}),Object(b.jsxs)(ct,{variant:"action",hoverColor:z.LIGHT_RED,children:[Object(b.jsx)(Ot,{}),"Terminate"]})]})}),jt=["title","titleId"];function Ct(){return Ct=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ct.apply(this,arguments)}function wt(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function xt(t,n){var e=t.title,r=t.titleId,a=wt(t,jt);return i.createElement("svg",Ct({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,gt||(gt=i.createElement("path",{d:"M17.5 10C17.5 9.77 17.49 9.55 17.47 9.32L19.33 7.91C19.73 7.61 19.84 7.05 19.59 6.61L17.72 3.38C17.47 2.94 16.93 2.76 16.47 2.96L14.32 3.87C13.95 3.61 13.56 3.38 13.15 3.19L12.86 0.88C12.8 0.38 12.37 0 11.87 0H8.14003C7.63003 0 7.20003 0.38 7.14003 0.88L6.85003 3.19C6.44003 3.38 6.05003 3.61 5.68003 3.87L3.53003 2.96C3.07003 2.76 2.53003 2.94 2.28003 3.38L0.410031 6.62C0.160031 7.06 0.270031 7.61 0.670031 7.92L2.53003 9.33C2.51003 9.55 2.50003 9.77 2.50003 10C2.50003 10.23 2.51003 10.45 2.53003 10.68L0.670031 12.09C0.270031 12.39 0.160031 12.95 0.410031 13.39L2.28003 16.62C2.53003 17.06 3.07003 17.24 3.53003 17.04L5.68003 16.13C6.05003 16.39 6.44003 16.62 6.85003 16.81L7.14003 19.12C7.20003 19.62 7.63003 20 8.13003 20H11.86C12.36 20 12.79 19.62 12.85 19.12L13.14 16.81C13.55 16.62 13.94 16.39 14.31 16.13L16.46 17.04C16.92 17.24 17.46 17.06 17.71 16.62L19.58 13.39C19.83 12.95 19.72 12.4 19.32 12.09L17.46 10.68C17.49 10.45 17.5 10.23 17.5 10ZM10.04 13.5C8.11003 13.5 6.54003 11.93 6.54003 10C6.54003 8.07 8.11003 6.5 10.04 6.5C11.97 6.5 13.54 8.07 13.54 10C13.54 11.93 11.97 13.5 10.04 13.5Z",fill:"white"})))}var Et,yt=i.forwardRef(xt),Rt=(e.p,["title","titleId"]);function At(){return At=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},At.apply(this,arguments)}function Mt(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function kt(t,n){var e=t.title,r=t.titleId,a=Mt(t,Rt);return i.createElement("svg",At({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,Et||(Et=i.createElement("circle",{cx:7.5,cy:7.5,r:6.5,fill:"#008CF6",stroke:"#2A323E",strokeWidth:2})))}var Lt,St,_t,It,Tt=i.forwardRef(kt),Bt=(e.p,function(t){var n=t.active,e=t.notif;return Object(b.jsxs)(b.Fragment,{children:[e&&Object(b.jsx)(Tt,{style:{position:"absolute",transform:"translate(12px, -7px)"}}),Object(b.jsx)("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",fill:n?z.PRIMARY:z.SECONDARY})})]})}),qt=E.a.header(Lt||(Lt=Object(x.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 5rem;\n\tz-index: 10;\n\tbackground-color: #1b2733;\n\tpadding: 0.6rem 1.5rem;\n"]))),Yt=E.a.nav(St||(St=Object(x.a)([""]))),Ht=E.a.nav(_t||(_t=Object(x.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\n\t& > button {\n\t\tmargin-left: 1.5rem;\n\t}\n"]))),Pt=function(){var t=Object(i.useContext)(g);if(!t)throw new Error("Breakpoints context must be consumed inside the Breakpoints Provider");return t},zt=function(t){var n=t.isMenuOpen,e=t.setMenuOpen,r=t.hasChannels,i=Pt().isMobile;return Object(b.jsxs)(qt,{children:[Object(b.jsx)(Yt,{children:i&&Object(b.jsx)(ct,{active:n,onClick:function(){return e((function(t){return!t}))},children:Object(b.jsx)(Bt,{active:n,notif:r&&!n})})}),Object(b.jsxs)(Ht,{children:[Object(b.jsx)(ct,{children:Object(b.jsx)(yt,{})}),Object(b.jsx)(ct,{children:"Log out"})]})]})},Nt={listChannelss:{items:[{id:"arn:aws:ivs:us-west-2:150635757663:channel/pnOBmgfqbdOT-0",playback_url:"https://053e3dc19af8.us-west-2.playback.live-video.net/api/video/v1/us-west-2.150635757663.channel.pnOBmgfqbdOT.m3u8",time:"2021-06-18T23:28:21.079420",flagged_images:["https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb50.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb12.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb1.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb35.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb8.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb19.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb10.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb4.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb15.jpg"]},{id:"arn:aws:ivs:us-west-2:150635757663:channel/pnOBmgfqbdOT-1",playback_url:"https://053e3dc19af8.us-west-2.playback.live-video.net/api/video/v1/us-west-2.150635757663.channel.pnOBmgfqbdOT.m3u8",time:"2021-06-18T23:28:21.079420",flagged_images:["https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb35.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb8.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb19.jpg"]},{id:"arn:aws:ivs:us-west-2:150635757663:channel/pnOBmgfqbdOT-2",playback_url:"https://053e3dc19af8.us-west-2.playback.live-video.net/api/video/v1/us-west-2.150635757663.channel.pnOBmgfqbdOT.m3u8",time:"2021-06-18T23:28:21.079420",flagged_images:["https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb70.jpg"]}]}},Gt=function(){var t=Object(i.useContext)(u);if(!t)throw new Error("Channels context must be consumed inside the Channels Provider");return t},Vt=function(t,n){return t.map((function(t){var e=t.id,r=t.flagged_images,i=e.indexOf("channel"),a=e.slice(i);return{id:e,name:a,image:r[0],alt:"flagged thumbnail for channel: ".concat(a),isActive:e===n}}))},Kt=function(){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),e=n[0],r=n[1],a=Pt().isMobile,c=Gt(),o=c.channels,l=c.selectedChannelId,d=c.setChannels,u=c.setSelectedChannelId,m=Object(i.useMemo)((function(){return function(t,n){return null===t||void 0===t?void 0:t.find((function(t){return t.id===n}))}(o,l)}),[o,l]);return Object(i.useEffect)((function(){var t=Nt.listChannelss.items;d(t),t.length?u(t[0].id):u("")}),[d,u]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{items:Vt(o,l),setSelectedChannelId:u,isMobile:a,isMenuOpen:e,setMenuOpen:r,children:o.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(N,{children:[o.length,"\xa0"]}),"Stream".concat(1===o.length?"":"s"," to review")]}):Object(b.jsx)(b.Fragment,{children:"No streams to review"})}),Object(b.jsxs)(G,{isMobile:a,children:[Object(b.jsx)(zt,{isMenuOpen:e,setMenuOpen:r,hasChannels:!!o.length}),m&&Object(b.jsxs)(K,{isMobile:a,children:[Object(b.jsx)(V,{children:"".concat(m.flagged_images.length," flagged thumbnails")}),Object(b.jsx)(tt,{imgSources:m.flagged_images}),Object(b.jsx)(vt,{})]})]})]})};!function(t){t.HOME="/"}(It||(It={}));var Dt=It,Ft=function(){return Object(b.jsx)(w.c,{children:Object(b.jsx)(w.a,{exact:!0,path:Dt.HOME,component:Kt})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(l.a,{basename:"/ivs-moderation-dr",children:Object(b.jsx)(p,{children:Object(b.jsx)(C,{children:Object(b.jsx)(Ft,{})})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.616c6a72.chunk.js.map