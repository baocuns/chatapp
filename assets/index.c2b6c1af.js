var de=Object.defineProperty,ue=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var F=(t,n,s)=>n in t?de(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,D=(t,n)=>{for(var s in n||(n={}))me.call(n,s)&&F(t,s,n[s]);if(T)for(var s of T(n))fe.call(n,s)&&F(t,s,n[s]);return t},W=(t,n)=>ue(t,pe(n));import{r as o,c as z,j as e,a as i,S as P,I as G,b as _,B as he,d as ge,u as xe,G as B,e as b,f as be,L as K,F as H,g as J,h as ye,i as x,k as Se,l as Ie,m as C,n as V,M as ve,o as we,A as Ce,p as Ne,q as ke,s as je,t as q,C as ze,v as Be,w as Je,x as Me,R as N,y as Ee}from"./vendor.0507b3bd.js";const Re=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}};Re();const $=o.exports.createContext({}),Ae=({children:t})=>{const a=z("https://wperbafcyvdmgkgpxqxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZXJiYWZjeXZkbWdrZ3B4cXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4Njg5MTUsImV4cCI6MTk4NDQ0NDkxNX0.sZKGrXqhN16ijrJA3a9sy5xPjK-YWdeVs8S0zNUC67A");let r=null;const[c,d]=o.exports.useState(""),[p,f]=o.exports.useState([]),[h,g]=o.exports.useState(""),[m,I]=o.exports.useState(!0),[k,R]=o.exports.useState(""),[te,A]=o.exports.useState(!1),[v,re]=o.exports.useState(null),[se,U]=o.exports.useState(0),[ne,X]=o.exports.useState(""),oe=async()=>{try{const l=await fetch("https://api.db-ip.com/v2/free/self"),{countryCode:u,error:y}=await l.json();if(y)throw new Error(y);X(u),localStorage.setItem("countryCode",u)}catch(l){console.error("error getting location from api.db-ip.com:",l.message)}},Z=()=>`@user${Date.now().toString().substr(-4)}`,L=()=>{const l=a.auth.user();let u;l?(u=l.user_metadata.user_name,u||(u=l.email)):u=localStorage.getItem("username")||Z(),d(u),localStorage.setItem("username",u)};o.exports.useEffect(()=>{L(),O();const l=localStorage.getItem("countryCode");return l&&l!=="undefined"?X(l):oe(),a.auth.onAuthStateChange((u,y)=>{console.log("onAuthStateChange",{event:u,session:y}),u==="SIGNED_IN"&&L()}),()=>{a.removeSubscription(),console.log("Remove supabase subscription by useEffect unmount")}},[]),o.exports.useEffect(()=>{(v==null?void 0:v.username)===c?j():U(l=>l+1)},[v]);const ie=l=>{f(u=>[l.new,...u]),re(l.new)},ae=async()=>{if(!p.length){const{data:l,error:u}=await a.from("messages").select().range(0,49).order("id",{ascending:!1});if(I(!1),u){g(u.message),a.removeSubscription(r),r=null;return}f(l),j()}},O=async()=>{g(""),r||(ae(),r=a.from("messages").on("*",l=>{ie(l)}).subscribe())},w=o.exports.useRef(),ce=async({target:l})=>{if(l.scrollHeight-l.scrollTop<=l.clientHeight+1?(U(0),A(!0)):A(!1),l.scrollTop===0){const{data:u,error:y}=await a.from("messages").select().range(p.length,p.length+49).order("id",{ascending:!1});if(y){g(y.message);return}l.scrollTop=1,f(le=>[...le,...u])}},j=()=>{!w.current||(w.current.scrollTop=w.current.scrollHeight)};return e($.Provider,{value:{supabase:a,auth:a.auth,messages:p,loadingInitial:m,error:h,getMessagesAndSubscribe:O,username:c,setUsername:d,randomUsername:Z,routeHash:k,scrollRef:w,onScroll:ce,scrollToBottom:j,isOnBottom:te,country:ne,unviewedMessageCount:se},children:t})},S=()=>o.exports.useContext($);function Ue(){const{username:t,setUsername:n}=S(),[s,a]=o.exports.useState(t),[r,c]=o.exports.useState(!1),d=()=>{c(!r)},p=o.exports.useRef(null);o.exports.useEffect(()=>{r&&p.current.focus()},[r]),o.exports.useEffect(()=>{a(t)},[t]);const f=h=>{if(h.preventDefault(),d(),!s){a(t);return}n(s),localStorage.setItem("username",s)};return e("form",{onSubmit:f,style:{marginRight:"20px"},children:i(P,{direction:"row",children:[r?e(G,{name:"username",placeholder:"Choose a username",onChange:h=>a(h.target.value),value:s,bg:"gray.100",size:"sm",border:"none",onBlur:f,ref:p}):i("span",{onClick:d,style:{cursor:"pointer"},children:["Welcome ",e("strong",{children:s})]}),e(_,{size:"sm",paddingBottom:"12px",variant:"outline",colorScheme:"teal","aria-label":"Save",fontSize:"15px",icon:r?e(he,{}):e(ge,{}),border:"none",onClick:h=>{r?f(h):d()}})]})})}function Q(...t){return t.filter(Boolean).join(" ")}function M(){const n=xe().pathname,{username:s,setUsername:a,auth:r,randomUsername:c}=S();return i(B,{templateColumns:"max-content 1fr min-content",justifyItems:"center",alignItems:"center",bg:"white",position:"sticky",top:"0",zIndex:"10",borderBottom:"20px solid #edf2f7",children:[i(b,{justifySelf:"start",m:"2",className:"flex",children:[e(be,{src:"/logo.png",height:"30px",ml:"2"}),e(K,{to:"/chats",className:Q("md:mx-2 p-2 hover:text-red-500 font-bold",n==="/chats"?"text-red-500":"text-black"),children:"Chats"}),e(K,{to:"/posts",className:Q("md:mx-2 p-2 hover:text-red-500 font-bold",n==="/posts"?"text-red-500":"text-black"),children:"Posts"})]}),r.user()?i(H,{children:[i(b,{justifySelf:"end",alignSelf:"center",mr:"4",className:"hidden sm:block",children:["Welcome ",e("strong",{className:"hidden md:block",children:s})]}),e(J,{marginRight:"4",size:"sm",variant:"link",onClick:()=>{const{error:d}=r.signOut();if(d)return console.error("error signOut",d);const p=c();a(p),localStorage.setItem("username",p)},children:"Log out"})]}):i(H,{children:[e(b,{justifySelf:"end",alignSelf:"end",children:e(Ue,{username:s,setUsername:a})}),e(J,{size:"sm",marginRight:"2",colorScheme:"teal",rightIcon:e(ye,{}),variant:"outline",onClick:()=>r.signIn({provider:"google"}),children:"Login"})]})]})}function E(){return e(x,{position:"fixed",bottom:"0",width:"100%",children:i(B,{gridTemplateColumns:"auto 1fr",textAlign:"center",alignItems:"center",py:"4px",px:"30px",height:"40px",bg:"white",children:[e(b,{justifySelf:"start",children:i("a",{href:"https://twitter.com/shwosner",target:"_blank",rel:"noreferrer",className:"text-teal-600",children:[e(Se,{style:{display:"inline"}}),"@shwosner"]})}),e(b,{justifySelf:"end",children:i("a",{href:"https://github.com/shwosner/realtime-chat-supabase-react",target:"_blank",rel:"noreferrer",className:"text-teal-600",children:[e(Ie,{style:{display:"inline"}})," Source code"]})})]})})}C.extend(V);function Xe({message:t,isYou:n}){const s=t.country&&t.country!=="undefined"?t.country.toLowerCase():"";return e(x,{display:"grid",justifyItems:n?"end":"start",children:i(B,{templateRows:"30px 1fr 25px",templateColumns:"1fr",w:"70%",px:"3",py:"2",borderRadius:"5px",borderTopLeftRadius:n?"5px":"0",borderTopRightRadius:n?"0":"5px",bg:n?"#dbfff9":"#edf3f9",mt:"5",position:"relative",_after:{position:"absolute",content:"''",width:0,height:0,borderStyle:"solid",borderWidth:n?"0px 0px 10px 10px":"0px 10px 10px 0",borderColor:n?"transparent transparent transparent #dbfff9":"transparent #edf3f9 transparent transparent",top:0,left:n?"auto":"-10px",right:n?"-10px":"auto"},children:[i(b,{fontWeight:"500",fontSize:"md",justifySelf:"start",color:"gray.500",mb:"2",children:[i("span",{children:[t.username.length>10?`${t.username.substr(0,10)}...`:t.username," "]}),t.is_authenticated&&e(ve,{color:"#1d9bf0",style:{display:"inline",marginRight:"5px"}}),s&&i(x,{display:"inline-block",fontSize:"10px",children:["from ",t.country," ",e("img",{style:{display:"inline-block",marginTop:"-4px"},src:`/flags/${s}.png`,alt:t.country})]})]}),e(b,{justifySelf:"start",textAlign:"left",wordBreak:"break-word",fontSize:"md",fontFamily:"Montserrat, sans-serif",children:t.text}),e(b,{color:"gray",fontSize:"10px",justifySelf:"end",alignSelf:"end",children:C(t.timestamp).fromNow()})]})})}function Ze(){const{username:t,loadingInitial:n,error:s,getMessagesAndSubscribe:a,messages:r}=S(),c=[...r].reverse();return n?e(x,{textAlign:"center",children:e(we,{})}):s?i(Ce,{status:"error",mt:"20px",children:[s,e(J,{ml:"5px",onClick:a,colorScheme:"red",variant:"link",children:"try to reconnect"})]}):r.length?c.map(d=>{const p=d.username===t;return e(Xe,{message:d,isYou:p},d.id)}):e(x,{as:"h3",textAlign:"center",children:"No messages \u{1F61E}"})}function Le(){const{supabase:t,username:n,country:s,auth:a}=S(),[r,c]=o.exports.useState(""),d=Ne(),[p,f]=o.exports.useState(!1);return e(x,{py:"10px",pt:"15px",bg:"gray.100",children:i("div",{className:"full",children:[e("form",{onSubmit:async g=>{if(g.preventDefault(),f(!0),!!r){c("");try{const{error:m}=await t.from("messages").insert([{text:r,username:n,country:s,is_authenticated:!!a.user()}]);if(m){console.error(m.message),d({title:"Error sending",description:m.message,status:"error",duration:9e3,isClosable:!0});return}console.log("Sucsessfully sent!")}catch(m){console.log("error sending message:",m)}finally{f(!1)}}},autoComplete:"off",children:i(P,{direction:"row",children:[e(G,{name:"message",placeholder:"Enter a message",onChange:g=>c(g.target.value),value:r,bg:"white",border:"none",autoFocus:!0}),e(_,{colorScheme:"teal","aria-label":"Send",fontSize:"20px",icon:e(ke,{}),type:"submit",disabled:!r,isLoading:p})]})}),e(x,{fontSize:"10px",mt:"1",children:"Warning: do not share any sensitive information, it's a public chat room \u{1F642}"})]})})}function Oe(){const[t,n]=o.exports.useState(window.innerHeight-220),{scrollRef:s,onScroll:a,scrollToBottom:r,isOnBottom:c,unviewedMessageCount:d}=S();return o.exports.useEffect(()=>{window.addEventListener("resize",()=>{n(window.innerHeight-220)})},[]),e("div",{className:"flex p-4 justify-center",children:i("div",{className:"w-full md:w-1/2",children:[i(x,{bg:"white",p:"5",overflow:"auto",borderRadius:"10px",height:t,onScroll:a,ref:s,children:[e(Ze,{}),!c&&e("div",{style:{position:"sticky",bottom:8,float:"right",cursor:"pointer"},onClick:r,children:d>0?i(je,{ml:"1",fontSize:"0.8em",colorScheme:"green",display:"flex",borderRadius:"7px",padding:"3px 5px",alignItems:"center",children:[d,e(q,{style:{marginLeft:"3px"}})]}):e(q,{style:{marginLeft:"3px"}})})]}),e(Le,{})]})})}const Te="https://wperbafcyvdmgkgpxqxt.supabase.co",Fe="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZXJiYWZjeXZkbWdrZ3B4cXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4Njg5MTUsImV4cCI6MTk4NDQ0NDkxNX0.sZKGrXqhN16ijrJA3a9sy5xPjK-YWdeVs8S0zNUC67A",Y=z(Te,Fe),De=({open:t,handleOpen:n})=>{const[s,a]=o.exports.useState(!1),[r,c]=o.exports.useState({}),[d,p]=o.exports.useState(null),f=m=>{const{name:I,value:k}=m;c(R=>W(D({},R),{[I]:k}))},h=()=>{a(!s),n()},g=async m=>{m.preventDefault(),d||(alert("Login ?"),h()),!(!r.title||!r.content)&&(c({}),Y.from("posts").insert([{user_id:d.id,title:r==null?void 0:r.title,content:r==null?void 0:r.content}]).then(I=>{I.error?(alert("Faild!"),h()):(alert("Success!"),h())}))};return o.exports.useEffect(()=>{a(t)},[t]),o.exports.useEffect(()=>{p(Y.auth.user())},[]),e("div",{children:s&&e("div",{className:"fixed h-screen w-screen bg-gray-300/50 inset-0 z-50 items-center flex justify-center",children:i("div",{children:[e("button",{onClick:h,className:"p-1 border border-red-500 rounded",children:"Close"}),i("form",{onSubmit:g,autoComplete:"off",children:[e("div",{children:"Title"}),e("input",{type:"text",name:"title",className:"w-full",value:r==null?void 0:r.title,onChange:m=>f(m.target)}),e("div",{children:"Content"}),e("textarea",{name:"content",rows:4,className:"w-full",value:r==null?void 0:r.content,onChange:m=>f(m.target)}),e("button",{type:"submit",className:"p-1 border border-green-500 rounded",children:"Add posts"})]})]})})})},We="https://wperbafcyvdmgkgpxqxt.supabase.co",Pe="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZXJiYWZjeXZkbWdrZ3B4cXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4Njg5MTUsImV4cCI6MTk4NDQ0NDkxNX0.sZKGrXqhN16ijrJA3a9sy5xPjK-YWdeVs8S0zNUC67A",Ge=z(We,Pe);C.extend(V);const _e=()=>{const[t,n]=o.exports.useState([]);return o.exports.useEffect(async()=>{t.length||Ge.from("posts").select().range(0,10).order("id",{ascending:!1}).then(s=>{if(s.error)throw new Error(error);n(s.data)})},[]),e("div",{className:"p-2 w-auto",children:t&&t.map((s,a)=>i("div",{className:"my-4 border-t p-4",children:[i("div",{className:"flex items-center",children:[e("div",{children:e("img",{src:"https://i.pinimg.com/236x/2a/94/4e/2a944e3ae3c301e49a20b803956f271f.jpg",className:"object-cover h-12 w-12  rounded-full mr-2"})}),i("div",{children:[i("div",{className:"font-bold",children:[s.user_id.substr(0,10),"..."]}),e("div",{className:"text-sm",children:C(s.created_at).fromNow()})]})]}),e("div",{className:"p-2",children:e("div",{children:s.title})}),e("div",{className:"px-2",children:e("p",{children:s.content})})]},a))})},ee=()=>{const[t,n]=o.exports.useState(!1),s=()=>{n(!t)};return e("div",{className:"flex p-4 justify-center",children:i("div",{className:"p-4 bg-white w-full md:w-1/3 rounded mb-16",children:[e(De,{open:t,handleOpen:s}),e("button",{className:"p-2 border border-red-500 rounded hover:text-red-500",onClick:s,children:"Add"}),e(_e,{})]})})};function Ke(){const{username:t,setUsername:n,routeHash:s}=S();return s&&(s.endsWith("&type=recovery")&&window.location.replace(`/login/${s}`),s.startsWith("#error_code=404"))?i("div",{children:[e("p",{children:"This link has expired"}),e("a",{href:"/",style:{cursor:"pointer"},variant:"link",children:"Back to app"})]}):e(ze,{theme:Be,children:e(Ae,{children:e(x,{bg:"gray.100",children:e(Je,{children:i(Me,{children:[i(N,{exact:!0,path:"/chats",children:[e(M,{username:t,setUsername:n}),e(Oe,{username:t}),e(E,{username:t})]}),i(N,{exact:!0,path:"/posts",children:[e(M,{username:t,setUsername:n}),e(ee,{}),e(E,{username:t})]}),i(N,{exact:!0,path:"/*",children:[e(M,{username:t,setUsername:n}),e(ee,{}),e(E,{username:t})]}),e(N,{children:"Not found"})]})})})})})}Ee.render(e(o.exports.StrictMode,{children:e(Ke,{})}),document.getElementById("root"));
