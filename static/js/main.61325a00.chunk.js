(this["webpackJsonpivs-moderation-dr"]=this["webpackJsonpivs-moderation-dr"]||[]).push([[0],{34:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var r,i,a,c,o,l,s,d,u,m,b,h=n(0),f=n.n(h),g=n(21),p=n.n(g),O=n(17),j=n(11),v=n(9),x=Object(h.createContext)(null),w=n(1),y="SET_CHANNELS",C="SET_SELECTED_CHANNEL",E={channels:[],selectedChannelId:""},k=function(t,e){switch(e.type){case y:return Object(v.a)(Object(v.a)({},t),{},{channels:e.channels});case C:return Object(v.a)(Object(v.a)({},t),{},{selectedChannelId:e.selectedChannelId});default:throw new Error("Unexpected action type")}},M=function(t){var e=t.children,n=Object(h.useReducer)(k,E),r=Object(j.a)(n,2),i=r[0],a=r[1],c=Object(h.useCallback)((function(t){return a({type:y,channels:t})}),[]),o=Object(h.useCallback)((function(t){return a({type:C,selectedChannelId:t})}),[]),l=Object(h.useMemo)((function(){return Object(v.a)(Object(v.a)({},i),{},{setChannels:c,setSelectedChannelId:o})}),[i,c,o]);return Object(w.jsx)(x.Provider,{value:l,children:e})},B=n(22),q=n.n(B),L=Object(h.createContext)(null),z=["xs","sm"],I={xs:0,sm:600,md:960,lg:1280,xl:1920},S=function(t){var e=t.children,n=Object(h.useState)(window.innerWidth),r=Object(j.a)(n,2),i=r[0],a=r[1],c=Object(h.useCallback)((function(t){var e="xs";return q.a.forEach(I,(function(n,r){if(!(t>n))return!1;e=r})),e}),[]);Object(h.useEffect)((function(){var t=function(){a(window.innerWidth)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var o=Object(h.useMemo)((function(){var t=c(i);return{breakpoint:t,isMobile:z.includes(t)}}),[c,i]);return Object(w.jsx)(L.Provider,{value:o,children:e})},T=(n(34),n(4)),H=n(2),P=n(3),A={primary:"#008CF6",primaryHover:"#0070C5",secondary:"#ffffff",alert:"#FD2222",alertHover:"#CA1B1B",tertiary:"#F90000",black:"#000000",gray900:"#17212B",gray800:"#1B2733",gray700:"#1C2935",gray600:"#22303F",gray500:"#2A323E",gray400:"#2E3845",gray300:"#414852",gray100:"#BABABA",green:"#1BC718",lightGreen:"#02CA46",lightRed:"#BC3E57",darkRed:"#A13156"},K=P.a.span(r||(r=Object(H.a)(["\n\tcolor: ",";\n"])),A.primary),V=P.a.div(i||(i=Object(H.a)(["\n\tmargin-top: 5rem;\n\theight: calc(100vh - 5rem);\n\toverflow-y: overlay;\n\tmargin-left: ",";\n\n\t","\n"])),(function(t){return t.isMobile?0:"30rem"}),(function(t){if(t.isMobile)return"&::-webkit-scrollbar {\n\t\t\t\tbackground: transparent; /* Chrome/Safari/Webkit */\n\t\t\t\twidth: 0px;\n\t\t\t}"})),_=P.a.h1(a||(a=Object(H.a)(["\n\tbackground-color: ",";\n\tpadding: 0.6rem 1.5rem;\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tline-height: 1.7rem;\n\tborder-radius: 1.6rem;\n\tmargin: 0;\n"])),A.gray400),F=P.a.section(c||(c=Object(H.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-top: ",";\n"])),(function(t){return t.isMobile?"3.5rem":"0"})),Z=P.a.button(o||(o=Object(H.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tborder: none;\n  width: 100%;\n  border-radius: 0.6rem;\n\tcursor: pointer;\n\tpadding: 1rem;\n\tmargin-top: 0.5rem;\n\tbackground-color: ",";\n\n\ttransition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"])),(function(t){return t.isActive?A.gray400:"transparent"}),A.gray400),R=P.a.img(l||(l=Object(H.a)(["\n\tobject-fit: cover;\n\theight: 5.8rem;\n\twidth: 6.8rem;\n\tborder-radius: 1rem;\n"]))),N=P.a.p(s||(s=Object(H.a)(["\n\tcolor: ",";\n\tfont-family: Inter;\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tline-height: 1.7rem;\n\ttext-align: center;\n\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding-left: 1.3rem;\n"])),(function(t){return t.isActive?A.primary:A.secondary})),W=function(t){var e=t.item,n=e.id,r=e.name,i=e.image,a=e.alt,c=e.isActive,o=t.setSelectedItem;return Object(w.jsxs)(Z,{isActive:c,onClick:function(){return o(n)},children:[Object(w.jsx)(R,{src:i,alt:a}),Object(w.jsx)(N,{isActive:c,children:r})]})},D=P.a.aside(d||(d=Object(H.a)(["\n\tbackground-color: ",";\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\tpadding: 0.5rem;\n\tz-index: 1000;\n\n\t","\n"])),A.gray900,(function(t){var e=t.isMobile,n=t.isMenuOpen;return e?n?"\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\ttop: 5rem;\n\t\t\t\t":"\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\ttop: 5rem;\n\t\t\t\t":"width: 30rem;"})),G=P.a.header(u||(u=Object(H.a)(["\n\tfont-size: 1.4rem;\n\tfont-weight: bold;\n\tline-height: 1.7rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tpadding: 1.2rem 0 1.6rem 0;\n"]))),J=function(t){var e=t.children,n=t.items,r=t.setSelectedChannelId,i=t.isMobile,a=t.isMenuOpen,c=t.setMenuOpen,o=function(t){r(t),a&&c(!1)};return Object(w.jsxs)(D,{isMobile:i,isMenuOpen:a,children:[Object(w.jsx)(G,{children:e}),null===n||void 0===n?void 0:n.map((function(t){return Object(w.jsx)(W,{item:t,setSelectedItem:o},t.id)}))]})},U=P.a.div(m||(m=Object(H.a)(["\n\tdisplay: grid;\n\tgrid-gap: 2.5rem;\n\tmargin: 0 auto;\n\tpadding: 2.9rem;\n\toverflow-y: overlay;\n\n\t@media (min-width: ","px) {\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t}\n\n\t@media (min-width: ","px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t@media (min-width: ","px) {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n"])),I.xs,I.sm,I.lg),Q=P.a.img(b||(b=Object(H.a)(["\n\twidth: 100%;\n\tmin-width: 25rem;\n\tmax-width: 40rem;\n\tborder-radius: 0.8rem;\n"]))),X=function(t){var e=t.imgSources;return Object(w.jsx)(U,{children:e.map((function(t,e){return Object(w.jsx)(Q,{src:t,alt:"flagged ".concat(t,"-").concat(e)},"".concat(t,"-").concat(e))}))})};X.defaultProps={imgSources:[]};var Y,$,tt,et=X,nt=P.a.div(Y||(Y=Object(H.a)(["\n\tposition: fixed;\n\tbottom: 3.5rem;\n\tbackground: linear-gradient(\n\t\t\t104.48deg,\n\t\t\trgba(101, 8, 145, 0.3) -1.61%,\n\t\t\trgba(19, 56, 151, 0) 73.97%\n\t\t),\n\t\t",";\n\tbox-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n\tborder-radius: 16px;\n\tz-index: 100;\n\tpadding: 1.2rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolumn-gap: 1.5rem;\n"])),A.primary),rt=n(27),it=P.a.button($||($=Object(H.a)(["\n\tborder: none;\n\theight: 3.8rem;\n\tpadding: 0 2rem;\n\tborder-radius: 0.6rem;\n\tcolor: white;\n\tbackground-color: ",";\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tline-height: 1.7rem;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\ttransition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n\t\tbox-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n\t\tborder 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n\t","\n"])),A.gray400,(function(t){if(!t.disableHover)return"&:hover {\n\t\t\t\tbackground-color: ".concat(A.primary,";\n\t\t\t}")})),at=P.a.button(tt||(tt=Object(H.a)(["\n\twidth: 15rem;\n\theight: 7.2rem;\n\tborder: none;\n\tborder-radius: 1.2rem;\n\tcolor: white;\n\tbackground-color: rgba(255, 255, 255, 0.3);\n\tfont-family: Inter;\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tline-height: 1.7rem;\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\trow-gap: 0.9rem;\n\tpadding: 1rem 5.9rem;\n\n\ttransition: 0.3s background-color;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"])),(function(t){return t.hoverColor||A.primary})),ct=["children","variant"],ot=function(t){var e=t.children,n=t.variant,r=Object(rt.a)(t,ct);return"action"===n?Object(w.jsx)(at,Object(v.a)(Object(v.a)({},r),{},{children:e})):Object(w.jsx)(it,Object(v.a)(Object(v.a)({},r),{},{children:e}))};ot.defaultProps={variant:"default"};var lt,st=ot,dt=["title","titleId"];function ut(){return ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ut.apply(this,arguments)}function mt(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function bt(t,e){var n=t.title,r=t.titleId,i=mt(t,dt);return h.createElement("svg",ut({width:23,height:20,viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),n?h.createElement("title",{id:r},n):null,lt||(lt=h.createElement("path",{d:"M12.12 0.559969L6.58 6.09997C6.21 6.46997 6 6.97997 6 7.50997V17.5C6 18.6 6.9 19.5 8 19.5H17C17.8 19.5 18.52 19.02 18.84 18.29L22.1 10.68C22.94 8.69997 21.49 6.49997 19.34 6.49997H13.69L14.64 1.91997C14.74 1.41997 14.59 0.909969 14.23 0.549969C13.64 -0.0300311 12.7 -0.0300311 12.12 0.559969ZM2 19.5C3.1 19.5 4 18.6 4 17.5V9.49997C4 8.39997 3.1 7.49997 2 7.49997C0.9 7.49997 0 8.39997 0 9.49997V17.5C0 18.6 0.9 19.5 2 19.5Z",fill:"white"})))}var ht,ft=h.forwardRef(bt),gt=(n.p,["title","titleId"]);function pt(){return pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pt.apply(this,arguments)}function Ot(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function jt(t,e){var n=t.title,r=t.titleId,i=Ot(t,gt);return h.createElement("svg",pt({width:23,height:20,viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),n?h.createElement("title",{id:r},n):null,ht||(ht=h.createElement("path",{d:"M10.88 19.44L16.41 13.9C16.78 13.53 16.99 13.02 16.99 12.49V2.5C16.99 1.4 16.09 0.5 14.99 0.5H6.00002C5.20002 0.5 4.48002 0.98 4.17002 1.71L0.910022 9.32C0.0600216 11.3 1.51002 13.5 3.66002 13.5H9.31002L8.36002 18.08C8.26002 18.58 8.41002 19.09 8.77002 19.45C9.36002 20.03 10.3 20.03 10.88 19.44ZM21 0.5C19.9 0.5 19 1.4 19 2.5V10.5C19 11.6 19.9 12.5 21 12.5C22.1 12.5 23 11.6 23 10.5V2.5C23 1.4 22.1 0.5 21 0.5Z",fill:"white"})))}var vt,xt=h.forwardRef(jt),wt=(n.p,function(t){t.children;return Object(w.jsxs)(nt,{children:[Object(w.jsxs)(st,{variant:"action",hoverColor:A.lightGreen,children:[Object(w.jsx)(ft,{}),"Ignore"]}),Object(w.jsxs)(st,{variant:"action",hoverColor:A.lightRed,children:[Object(w.jsx)(xt,{}),"Terminate"]})]})}),yt=["title","titleId"];function Ct(){return Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ct.apply(this,arguments)}function Et(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function kt(t,e){var n=t.title,r=t.titleId,i=Et(t,yt);return h.createElement("svg",Ct({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),n?h.createElement("title",{id:r},n):null,vt||(vt=h.createElement("path",{d:"M17.5 10C17.5 9.77 17.49 9.55 17.47 9.32L19.33 7.91C19.73 7.61 19.84 7.05 19.59 6.61L17.72 3.38C17.47 2.94 16.93 2.76 16.47 2.96L14.32 3.87C13.95 3.61 13.56 3.38 13.15 3.19L12.86 0.88C12.8 0.38 12.37 0 11.87 0H8.14003C7.63003 0 7.20003 0.38 7.14003 0.88L6.85003 3.19C6.44003 3.38 6.05003 3.61 5.68003 3.87L3.53003 2.96C3.07003 2.76 2.53003 2.94 2.28003 3.38L0.410031 6.62C0.160031 7.06 0.270031 7.61 0.670031 7.92L2.53003 9.33C2.51003 9.55 2.50003 9.77 2.50003 10C2.50003 10.23 2.51003 10.45 2.53003 10.68L0.670031 12.09C0.270031 12.39 0.160031 12.95 0.410031 13.39L2.28003 16.62C2.53003 17.06 3.07003 17.24 3.53003 17.04L5.68003 16.13C6.05003 16.39 6.44003 16.62 6.85003 16.81L7.14003 19.12C7.20003 19.62 7.63003 20 8.13003 20H11.86C12.36 20 12.79 19.62 12.85 19.12L13.14 16.81C13.55 16.62 13.94 16.39 14.31 16.13L16.46 17.04C16.92 17.24 17.46 17.06 17.71 16.62L19.58 13.39C19.83 12.95 19.72 12.4 19.32 12.09L17.46 10.68C17.49 10.45 17.5 10.23 17.5 10ZM10.04 13.5C8.11003 13.5 6.54003 11.93 6.54003 10C6.54003 8.07 8.11003 6.5 10.04 6.5C11.97 6.5 13.54 8.07 13.54 10C13.54 11.93 11.97 13.5 10.04 13.5Z",fill:"white"})))}var Mt,Bt=h.forwardRef(kt),qt=(n.p,["title","titleId"]);function Lt(){return Lt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lt.apply(this,arguments)}function zt(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function It(t,e){var n=t.title,r=t.titleId,i=zt(t,qt);return h.createElement("svg",Lt({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),n?h.createElement("title",{id:r},n):null,Mt||(Mt=h.createElement("circle",{cx:7.5,cy:7.5,r:6.5,fill:"#008CF6",stroke:"#2A323E",strokeWidth:2})))}var St,Tt,Ht,Pt=h.forwardRef(It),At=(n.p,function(t){var e=t.active,n=t.notif;return Object(w.jsxs)(w.Fragment,{children:[n&&Object(w.jsx)(Pt,{style:{position:"absolute",transform:"translate(12px, -7px)"}}),Object(w.jsx)("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",fill:e?A.primary:A.secondary})})]})}),Kt=P.a.header(St||(St=Object(H.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 5rem;\n\tz-index: 10;\n\tbackground-color: #1b2733;\n\tpadding: 0.6rem 1.5rem;\n"]))),Vt=P.a.nav(Tt||(Tt=Object(H.a)([""]))),_t=P.a.nav(Ht||(Ht=Object(H.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\n\t& > button {\n\t\tmargin-left: 1.5rem;\n\t}\n"]))),Ft=function(){var t=Object(h.useContext)(L);if(!t)throw new Error("Breakpoints context must be consumed inside the Breakpoints Provider");return t},Zt=function(t){var e=t.isMenuOpen,n=t.setMenuOpen,r=t.hasChannels,i=Ft().isMobile;return Object(w.jsxs)(Kt,{children:[Object(w.jsx)(Vt,{children:i&&Object(w.jsx)(st,{disableHover:e,onClick:function(){return n((function(t){return!t}))},children:Object(w.jsx)(At,{active:e,notif:r})})}),Object(w.jsxs)(_t,{children:[Object(w.jsx)(st,{children:Object(w.jsx)(Bt,{})}),Object(w.jsx)(st,{children:"Log out"})]})]})},Rt={listChannelss:{items:[{id:"arn:aws:ivs:us-west-2:150635757663:channel/pnOBmgfqbdOT-0",playback_url:"https://053e3dc19af8.us-west-2.playback.live-video.net/api/video/v1/us-west-2.150635757663.channel.pnOBmgfqbdOT.m3u8",time:"2021-06-18T23:28:21.079420",flagged_images:["https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb50.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb12.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb1.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb35.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb8.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb19.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb10.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb4.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb15.jpg"]},{id:"arn:aws:ivs:us-west-2:150635757663:channel/pnOBmgfqbdOT-1",playback_url:"https://053e3dc19af8.us-west-2.playback.live-video.net/api/video/v1/us-west-2.150635757663.channel.pnOBmgfqbdOT.m3u8",time:"2021-06-18T23:28:21.079420",flagged_images:["https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb35.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb8.jpg","https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb19.jpg"]},{id:"arn:aws:ivs:us-west-2:150635757663:channel/pnOBmgfqbdOT-2",playback_url:"https://053e3dc19af8.us-west-2.playback.live-video.net/api/video/v1/us-west-2.150635757663.channel.pnOBmgfqbdOT.m3u8",time:"2021-06-18T23:28:21.079420",flagged_images:["https://d372avd287zhsq.cloudfront.net/ivs/v1/150635757663/pnOBmgfqbdOT/2021/6/18/23/20/EK2r858C0mmE/media/thumbnails/thumb70.jpg"]}]}},Nt=function(){var t=Object(h.useContext)(x);if(!t)throw new Error("Channels context must be consumed inside the Channels Provider");return t},Wt=function(t,e){return t.map((function(t){var n=t.id,r=t.flagged_images,i=n.indexOf("channel"),a=n.slice(i);return{id:n,name:a,image:r[0],alt:"flagged thumbnail for channel: ".concat(a),isActive:n===e}}))},Dt=function(){var t=Object(h.useState)(!1),e=Object(j.a)(t,2),n=e[0],r=e[1],i=Ft().isMobile,a=Nt(),c=a.channels,o=a.selectedChannelId,l=a.setChannels,s=a.setSelectedChannelId,d=Object(h.useMemo)((function(){return function(t,e){return null===t||void 0===t?void 0:t.find((function(t){return t.id===e}))}(c,o)}),[c,o]);return Object(h.useEffect)((function(){var t=Rt.listChannelss.items;l(t),t.length?s(t[0].id):s(null)}),[l,s]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(J,{items:Wt(c,o),setSelectedChannelId:s,isMobile:i,isMenuOpen:n,setMenuOpen:r,children:c.length?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(K,{children:c.length}),"\xa0","Stream".concat(1===c.length?"":"s"," to review")]}):Object(w.jsx)(w.Fragment,{children:"No streams to review"})}),Object(w.jsxs)(V,{isMobile:i,children:[Object(w.jsx)(Zt,{isMenuOpen:n,setMenuOpen:r,hasChannels:!!c.length}),d&&Object(w.jsxs)(F,{isMobile:i,children:[Object(w.jsx)(_,{children:"".concat(d.flagged_images.length," flagged thumbnails")}),Object(w.jsx)(et,{imgSources:d.flagged_images}),Object(w.jsx)(wt,{})]})]})]})},Gt={HOME:"/"},Jt=function(){return Object(w.jsx)(T.c,{children:Object(w.jsx)(T.a,{exact:!0,path:Gt.HOME,component:Dt})})};p.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsx)(O.a,{basename:"/ivs-moderation-dr",children:Object(w.jsx)(M,{children:Object(w.jsx)(S,{children:Object(w.jsx)(Jt,{})})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.61325a00.chunk.js.map