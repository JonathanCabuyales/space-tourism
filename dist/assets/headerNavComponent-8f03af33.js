import{r as a,j as t,N as u}from"./index-d3ebde64.js";const p="/assets/logo-43040818.svg";sessionStorage.setItem("index","0");const S=()=>{const n=a.useRef(),g=a.useRef();a.useRef(),a.useState(0);const[N,x]=a.useState(!1),[o,k]=a.useState([{id:0,name:"Home",className:"nav__link",to:"/"},{id:1,name:"Destination",className:"nav__link",to:"/destination"},{id:2,name:"Crew",className:"nav__link",to:"/crew"},{id:3,name:"Technology",className:"nav__link",to:"/technology"}]);let i=parseInt(JSON.parse(sessionStorage.getItem("index")))||0;const[c,v]=a.useState(i),l=(e,s)=>{e.target.classList.add("hover"),i===s&&v(s)},m=e=>{e.target.classList.remove("hover")},f=e=>{var s,r,_,h;if(x(j=>!j),((r=(s=n.current)==null?void 0:s.style)==null?void 0:r.height)==""||((h=(_=n.current)==null?void 0:_.style)==null?void 0:h.height)=="0px"){n.current.style.height="14em",n.current.style.border="1px solid #eee";return}n.current.style.border="",n.current.style.height=0},d=e=>{sessionStorage.setItem("index",JSON.stringify(e))};return t.jsxs("header",{className:"header",children:[t.jsx("figure",{className:"header__figure",children:t.jsx("img",{src:p,alt:"logo",className:"header__img"})}),t.jsx("figure",{className:N?"header__menu--active":"header__menu",onClick:f}),t.jsx("nav",{className:"nav",id:"nav",ref:n,children:t.jsx("ul",{className:"nav__list",children:o.map((e,s)=>t.jsx(u,{onClick:()=>d(s),onMouseEnter:r=>l(r,s),className:`${e.className} ${c===s?"remove__cursor":""}`,onMouseLeave:m,to:e.to,children:e.name},e==null?void 0:e.id))})}),t.jsx("nav",{className:"nav--tablet",id:"nav--tablet",children:t.jsx("ul",{className:"nav__list--tablet",ref:g,children:o.map((e,s)=>t.jsx(u,{onClick:()=>d(s),onMouseEnter:r=>l(r,s),className:`nav__link--tablet ${c===s?"active--tablet remove__cursor":""}`,onMouseLeave:m,to:e.to,children:e.name},e==null?void 0:e.id))})})]})};export{S as H};
