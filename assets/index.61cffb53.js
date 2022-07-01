var J=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var O=(e,i,o)=>i in e?J(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,E=(e,i)=>{for(var o in i||(i={}))Z.call(i,o)&&O(e,o,i[o]);if(R)for(var o of R(i))ee.call(i,o)&&O(e,o,i[o]);return e},F=(e,i)=>Q(e,X(i));import{c as te}from"./react-dom.d958f7a7.js";import{W as ie,s as r,C as N,F as re}from"./styled-components.001ea363.js";import{r as ne}from"./styled-reset.8caa7408.js";import{L as B,u as I,B as oe}from"./react-router-dom.0d3d2e23.js";import{j as U,r as l}from"./react.d8f3f670.js";import{S as ae}from"./react-slick.572c4849.js";/* empty css                       */import{F as D,f as le,a as se,b as ce,c as de,d as ue,e as he,g as me}from"./@fortawesome.bd52ce82.js";import{a as K}from"./axios.58752079.js";import{R as pe}from"./react-loading.4d8416f9.js";import{b as ge,d as fe,N as Ce,a as L,O as xe,e as be,f as k}from"./react-router.4a916808.js";import{P as we}from"./prismjs.046ff70f.js";import{d as ye,V as Y,b as ve}from"./@toast-ui.cc26c44f.js";import{c as H}from"./polished.e82268f0.js";import"./scheduler.5f5f7e6c.js";import"./react-is.b63e81e6.js";import"./@emotion.33d3dd4a.js";import"./hoist-non-react-statics.835ababa.js";import"./history.1843f9b0.js";import"./@babel.5d9a9475.js";import"./lodash.debounce.2ce39cde.js";import"./classnames.3863ceae.js";import"./resize-observer-polyfill.b92cc30d.js";import"./json2mq.53c61db7.js";import"./string-convert.6bceaa61.js";import"./enquire.js.dc5c4458.js";import"./prop-types.d8c62f81.js";import"./prosemirror-model.de87f77c.js";import"./orderedmap.6572a778.js";import"./prosemirror-view.d65e6816.js";import"./prosemirror-state.4f5a2670.js";import"./prosemirror-transform.1bd77a3d.js";import"./prosemirror-keymap.bd3461ca.js";import"./w3c-keyname.74927781.js";import"./prosemirror-commands.659c660b.js";import"./prosemirror-inputrules.a99610f2.js";import"./prosemirror-history.fcca1a4d.js";import"./rope-sequence.7d68748c.js";const Be=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerpolicy&&(u.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?u.credentials="include":n.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(n){if(n.ep)return;n.ep=!0;const u=o(n);fetch(n.href,u)}};Be();const $e=ie`
  ${ne};
  html, body{
  };
  h1{
    width:100%;
    padding-bottom: 10px;
    font-size: 2em;
    font-weight: Bolder;
    border-bottom: 1px solid ${e=>e.theme.palette.daydream} ;
  };
  h2{
    font-size: 1.5em;
    font-weight: bold;
  };
  h3{
     font-size: 1.17em;
     font-weight: bold;
  };
`,M={mobile:"767px",desktop:"768px"},ke={palette:{triconblack:"#2D2D2D",africanviolet:"#6C4F85",daydream:"#BFC1CE",lobelia:"#7D95C1",extrawhite:"#EFF0EB",africanruby:"#d63031"},devices:{desktop:`(min-width: ${M.desktop})`,mobile:`(max-width: ${M.mobile})`}},t=U.exports.jsx,s=U.exports.jsxs,S=U.exports.Fragment;function De(){return t("div",{})}const Ae=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.gifer.com/81mz.gif");
  background-size: cover;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`,Se=r.div`
  color: white;
`,Pe=r.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media screen and ${e=>e.theme.devices.mobile} {
    font-size: 2rem; 
  }
`,Ie=r.div`
  font-size: 1.5rem;
  text-align: center;
  @media screen and ${e=>e.theme.devices.mobile} {
    font-size: 1rem;
  }
`,Ee=r(B)`
  position: fixed;
  bottom: 30%;
  left: 45%;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 1rem;
  :hover {
    background-color: white;
    color: black;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }

  @media screen and ${e=>e.theme.devices.mobile} {
    left: 40%;
    bottom: 35%;
  }
`;function Fe(){return t(Ae,{children:s(Se,{children:[t(Pe,{children:"\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \uAE30\uBCF8 \uC18C\uC591 \uC804\uC2DC\uD68C"}),t(Ie,{children:"To be a great Front-end Developer"}),t(Ee,{to:"/gallery",children:"\uB4E4\uC5B4\uAC00\uAE30"})]})})}const Le="http://ec2-3-128-87-34.us-east-2.compute.amazonaws.com/",v=K.create({baseURL:Le}),ze={getAuthToken:e=>v.get(`/auth/${e}`)},A={getAllPosts:e=>v.get("/post",{params:e}),getPostById:e=>v.get(`/post/${e}`),deletePost:(e,i)=>v.delete(`/post/${e}`,{headers:{Authorization:`Bearer ${i}`}}),updatePost:(e,i,o)=>v.post(`/post/${e}`,i,{headers:{Authorization:`Bearer ${o}`}}),publishPost:(e,i)=>v.post("/post",e,{headers:{Authorization:`Bearer ${i}`}})},Te={getAllUser:()=>v.get("/user"),getUserById:e=>v.get(`/user/${e}`),updateUser:(e,i,o)=>v.patch(`/user/${e}`,i,{headers:{Authorization:`Bearer ${o}`}}),deleteUser:(e,i)=>v.delete(`/user/${e}`,{headers:{Authorization:`Bearer ${i}`}})};function z(){return s("div",{className:"contentWrap",children:[" ",s("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[t("h2",{children:"Waiting"})," ",t(pe,{type:"cylon",color:"black",height:"80%",width:"80%"})," "]})," "]})}var je="/assets/noImage.203ebb80.jpeg";const Ne=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ue=r.div`
  width: 50rem;
  height: 33rem;
  margin: 0 0;
  border-radius: 5%;
  background-color: ${e=>e.theme.palette.extrawhite};

  @media screen and ${e=>e.theme.devices.mobile} {
    width: 30rem;
    height: 28rem;
  }
`,_e=r.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
`,Re=r.span`
  font-size: 1.3rem;
  margin-left: 1rem;
`,Oe=r.span`
  font-size: 1.3rem;
  margin-right: 1rem;
`,He=r.img`
  cursor: pointer;
  box-sizing: border-box;
  width: 30rem;
  height: 20rem;
  padding: 2rem;
  margin: 1rem auto;
  object-fit: contain;
  @media screen and ${e=>e.theme.devices.mobile} {
    width: 20rem;
    height: 15rem;
  }
`,Me=r.div`
  font-size: 2rem;
  text-align: center;
`,Ge=r.div`
  font-size: 1.2rem;
  text-align: center;
  width: 45rem;
  margin: 1rem 1.5rem;
  text-overflow: ellipsis;
  overflow:hidden;
  white-space:nowrap;
  @media screen and ${e=>e.theme.devices.mobile} {
    width: 27rem;
  }
`,Ve=r.div`
  text-align: end;
  margin-top: 1rem;
  & :last-child {
    margin-right: 1rem;
  }
  @media screen and ${e=>e.theme.devices.mobile} {
    text-align: center;
    margin-top: 2rem;
  }
`,We=r(B)`
  background-color: ${e=>e.theme.palette.triconblack};
  margin-left: 0.5rem;
  padding: 0.5rem;
  color: white;
  border-radius: 10%;
  text-decoration: none;
`;function qe({post:e}){const i=()=>{location.href=`/gallery/${e._id}`},o=["jpg","jpeg","png"],a=e.thumbnail.fileUrl.split("."),n=a[a.length-1],u=o.includes(n)?e.thumbnail.fileUrl:je;return t(Ne,{children:s(Ue,{children:[s(_e,{children:[e.createdAt&&t(Re,{children:e.createdAt.slice(0,10)}),e.author&&s(Oe,{children:["Made By"," ",e.author.username]})]}),t(He,{onClick:i,src:u}),t(Me,{children:e.title}),t(Ge,{children:e.description}),t(Ve,{children:e.categories.map(({category:c})=>t(We,{to:`/gallery?tag=${c._id}`,children:c.name}))})]})})}const Ke=r.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`,Ye=r.span`
  color: ${e=>e.color};
  font-size: 1.3rem;
`;function G({color:e,message:i}){return t(Ke,{children:t(Ye,{color:e,children:i})})}const Je=r.div`
  text-align: center;
  margin-top: 1rem;
  & :not(:first-child) {
    margin-left: 1rem;
  }
`,T=r.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: #fff;
  font-size: 24px;
  display: inline-block;
  background-color: #585858;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  margin-right: 10px;
`,Qe=r(T)``,Xe=r(T)`
  display: ${e=>e.isPlay?"inline-block":"none"};
`,Ze=r(T)`
  display: ${e=>e.isPlay?"none":"inline-block"};
`,et=r(T)``;function tt(){const[e,i]=l.exports.useState([]),[o,a]=l.exports.useState(null),[n,u]=l.exports.useState(!0),[c,f]=l.exports.useState(!0),d=l.exports.useRef(null),b=ge(),p=new URLSearchParams(b.search),x=p.get("tag"),C=p.get("auth"),$={infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3},h=async()=>{try{if(!x&&!C){const{data:g}=await A.getAllPosts();i(g)}else{const g={categoryId:x,authorId:C},{data:m}=await A.getAllPosts(g);i(m)}}catch(g){a(g)}finally{u(!1)}};return l.exports.useEffect(()=>{h()},[x,C]),n?t(z,{}):s(S,{children:[t(ae,F(E({ref:d},$),{children:e.map(g=>s(S,{children:[t(qe,{post:g}),s(Je,{children:[t(Qe,{onClick:()=>{var m;return(m=d==null?void 0:d.current)==null?void 0:m.slickPrev()},children:t(D,{icon:le})}),t(Xe,{isPlay:c,onClick:()=>{var m;(m=d==null?void 0:d.current)==null||m.slickPause(),f(w=>!w)},children:t(D,{icon:se})}),t(Ze,{isPlay:c,onClick:()=>{var m;(m=d==null?void 0:d.current)==null||m.slickPlay(),f(w=>!w)},children:t(D,{icon:ce})}),t(et,{onClick:()=>{var m;return(m=d==null?void 0:d.current)==null?void 0:m.slickNext()},children:t(D,{icon:de})})]})]}))})),!e.length&&!o&&t(G,{color:"#73777B",message:"\uD574\uB2F9 \uC791\uAC00\uC758 \uC791\uD488\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}),o&&t(G,{color:"red",message:"\uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294\uB370 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."})]})}const it=r.div`
    position: absolute;
    width: 11.5rem;
    left: -13.5rem;
    margin-top: 2rem;

    & .title {
        font-size: 1rem;
        line-height: 1.5;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${e=>e.theme.palette.triconblack};
        margin-bottom: 1rem;
        color: ${e=>e.theme.palette.triconblack};
        font-weight: bold;
    };

    & ul :not(:first-child) {
      margin-top: 0.25rem;
    };

    @media (max-width: 1200px) {
      display: none;
    };
`,rt=r.li`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${e=>e.theme.palette.triconblack};
  font-weight: bold;
  cursor: pointer;

  &.selected span {
    color: ${e=>e.theme.palette.lobelia};
    font-weight: bold;
  }
`,nt=r.span`
  margin-left: 0.5rem;
  color: ${e=>e.theme.palette.daydream};
  font-weight: normal;

  :hover {
    text-decoration: underline;
  };
`;function ot({tags:e}){const[i,o]=I();return t(it,{className:"TagList",onClick:n=>{n.preventDefault(),o(i)},children:s("div",{children:[t("div",{className:"title",children:"\uD0DC\uADF8 \uBAA9\uB85D"}),t("ul",{children:e.map(({_id:n,name:u,post:c,selected:f})=>t(rt,{"data-id":`taglist-${n}`,className:f?"selected":void 0,children:t(nt,{children:`${u}(${c})`})},n))})]})})}const at=r.div`
  display: none;
  overflow-x: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;

  & :not(:first-child) {
    margin-left: 0.5rem;
  };

  @media (max-width: 1200px) {
    display: flex;
  };

  @media ${e=>e.theme.devices.mobile} {
    justify-content: center;
  } ;
`,lt=r.span`
  flex-shrink: 0;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background: ${e=>e.theme.palette.daydream};
  color: ${e=>e.theme.palette.triconblack};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5;
  text-decoration: none;

  &.selected {
    background: ${e=>e.theme.palette.lobelia};
    color: ${e=>e.theme.palette.extrawhite};
  }
 `;function st({tags:e}){const[i,o]=I();return t(at,{className:"Tags",onClick:n=>{n.preventDefault(),o(i)},children:e.map(({_id:n,name:u,post:c,selected:f})=>t(lt,{"data-id":`tags-${n}`,className:f?"selected":void 0,children:`${u}(${c})`},n))})}function ct(){const[e,i]=l.exports.useState(!0),[o,a]=l.exports.useState([]),[n]=I(),u=async()=>{i(!0);try{const f={authorId:n.get("auth")},{data:d}=await A.getAllPosts(f),b={_id:"all",name:"\uC804\uCCB4\uBCF4\uAE30",lowerName:"\uC804\uCCB4\uBCF4\uAE30",post:d.length,selected:!1,__v:0},p=d.reduce((C,$)=>{const{categories:h}=$;return h.forEach(({category:g})=>{if(C[g._id]){C[g._id].post+=1;return}C[g._id]=F(E({},g),{post:1,selected:!1})}),C},{}),x=Object.values(p);a([b,...x])}catch(f){console.log(f)}i(!1)},c=()=>{const d=n.get("tag")||"all";a(b=>b.map(p=>{const{_id:x,selected:C}=p;return C||x===d?C&&x===d?p:F(E({},p),{selected:!C}):p}))};return l.exports.useEffect(()=>{u()},[n]),l.exports.useEffect(()=>{e||c()},[e,n]),s("div",{className:"SideBar",style:{position:"relative"},children:[t(ot,{tags:o}),t(st,{tags:o})]})}const dt=r.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;

  @media ${e=>e.theme.devices.mobile} {
    width: 100%;
  } ;
`;function ut(){const[e,i]=l.exports.useState(!0);return l.exports.useEffect(()=>{i(!1)},[]),e?t(z,{}):s(dt,{children:[t(ct,{}),t(tt,{})]})}const ht=r.iframe`
    width:100%;
    height: 100%;
    margin: 0;
`,mt=r.div`
    width:100%;
    height: 500px;
    overflow: visible;
    resize: both;
`;function pt({files:e}){const[i,o]=l.exports.useState();return l.exports.useEffect(()=>{e&&e.forEach(a=>{if(a.fileName==="index.jsx"){const n=a.fileUrl.split("/").slice(-2,-1).join();o(n)}})},[]),t(mt,{children:i&&t(ht,{marginwidth:"0",marginheight:"0",frameborder:"0",src:`http://ec2-3-128-87-34.us-east-2.compute.amazonaws.com:5000//${i}`})})}const gt=l.exports.forwardRef((e,i)=>t(ye,{ref:i}));function ft({text:e}){return t(Y,{initialValue:e})}const Ct=r(B)`
  text-decoration: none;
`,xt=r.div`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease all;
  margin: 0 auto;
  height: 24px;
  color: black;
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
`,bt=r.div`
  margin-bottom: 40px;
`,wt=r.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 20px;
  & a {
    margin-right: 10px;
    background-color: ${e=>e.theme.palette.triconblack};
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
    line-height: 20px;
    text-align: center;
  }
`,yt=r.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`,vt=r.div`
  width: 60%;
  @media screen and ${e=>e.theme.devices.desktop}{

  }
  @media screen and ${e=>e.theme.devices.mobile}{
    width: 90%;
  }

  & h2{
    margin: 20px 0;
  }
  & h4{
    margin: 5px;
    line-height: 20px;
  }
`;function Bt({title:e}){return t("div",{children:t("h1",{children:e})})}function $t({categories:e}){return t(wt,{children:e.map(i=>t(Ct,{to:`/gallery?tag=${i.category._id}`,children:i.category.name},i._id))})}function kt({description:e}){return t(bt,{children:t(ft,{text:e})})}function Dt({code:e}){const[i,o]=l.exports.useState(!1);function a(){o(n=>!n)}return s(S,{children:[t(xt,{onClick:a,children:i?`${e.fileName} \u25B2`:`${e.fileName} \u25BC`}),i&&t(Y,{initialValue:`\`\`\`js ${e.fileData}\`\`\``,plugins:[[ve,{highlighter:we}]]})]})}function At(){const[e,i]=l.exports.useState(),[o,a]=l.exports.useState(!0),[n,u]=l.exports.useState([]),{postId:c}=fe(),f=async()=>{try{const{data:d}=await A.getPostById(c),b=await Promise.all(d.code.map(async({fileName:p,fileUrl:x})=>{const C=await K(x);return{fileName:p,fileData:C.data}}));u(b),i(d)}catch(d){console.log(d)}finally{a(!1)}};return l.exports.useEffect(()=>{f()},[]),o?t(z,{}):t(yt,{children:s(vt,{children:[t(Bt,{title:e==null?void 0:e.title}),t($t,{categories:e==null?void 0:e.categories}),t(kt,{description:e==null?void 0:e.description}),n.map(d=>t(Dt,{code:d})),t(pt,{files:e==null?void 0:e.code})]})})}function St(){return l.exports.useEffect(()=>{alert("\uB4F1\uB85D\uB41C \uC791\uAC00\uB9CC \uC774\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")},[]),t(Ce,{to:"/"})}const Pt=r.div`
  width:100%;
  height:100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  // hover시 어두워지면서 포인터
${e=>{const{africanviolet:i,daydream:o}=e.theme.palette;return N`background: linear-gradient(${i}, ${o})`}}
  //드래그 중일때 다른 색깔
`,It=r.label`
  width:80%;
  height:80%;
  border-radius: 10px;
  border: 3px dashed ${e=>e.theme.palette.extrawhite};
  &:hover{
    background: ${e=>H(.1,e.theme.palette.daydream)};
    cursor: pointer;
    transition: 0.3s linear;
  }
  ${e=>{const{daydream:i}=e.theme.palette;return e.isDrag?N`
      background: ${H(.1,i)};
    `:N`
    `}}
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
    color: ${e=>e.theme.palette.extrawhite};
    & * {
      margin:2px 0;
    }
    & h3{
      margin-bottom:5px;
    }
    & p{
      display: flex;
      width: 80%;
      justify-content: space-around;
    }
  }

  & input{
    display:none;
  }

  // 모바일에서 문구 교체
  @media screen and ${e=>e.theme.devices.mobile}{
    height: 50%;
    & div h3{
      font-size: 0;
    }
    & div h3::before{
      font-size: 1rem;
      content: 'click or touch';
    }
  }
`,Et=r(D)`
  &:hover{
    color: ${e=>e.theme.palette.triconblack}
    
  }
`;function V({name:e,multiple:i,fileState:o,setFileState:a}){const[n,u]=l.exports.useState(!1),c=l.exports.useRef(null),f=l.exports.useRef(0),d=h=>{h.preventDefault();let g;h.type==="drop"?g=h.dataTransfer.files:g=h.target.files,console.log(g),g.length&&(i?Object.keys(g).forEach((m,w)=>{a([...o,{id:f.current++,file:g.item(0)}])}):a([{id:0,file:g.item(0)}]))},b=h=>{h.preventDefault(),h.stopPropagation()},p=h=>{h.preventDefault(),h.stopPropagation(),u(!1)},x=h=>{h.preventDefault(),h.stopPropagation(),h.dataTransfer.files&&u(!0)},C=h=>{h.preventDefault(),h.stopPropagation(),u(!1),d(h)},$=(h,g)=>{h.preventDefault(),h.stopPropagation(),a(o.filter(m=>m.id!==g))};return t(Pt,{children:s(It,{htmlFor:e,isDrag:n,ref:c,onDragEnter:b,onDragLeave:p,onDragOver:x,onDrop:C,children:[t("input",{onChange:d,type:"file",id:e,multiple:i}),s("div",{children:[t("h3",{children:"Drag & Drop a File Here"}),Boolean(o.length)&&o.map(h=>{var g;return s("p",{children:[(g=h.file)==null?void 0:g.name,t(Et,{onClick:m=>{$(m,h.id)},icon:ue})]},h.id)})]})]})})}const Ft=r.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`,Lt=r.form`
  width: 60%;
  @media screen and ${e=>e.theme.devices.desktop}{

  }
   @media screen and ${e=>e.theme.devices.mobile}{
    width: 90%;
  }

  & h2{
    margin: 20px 0;
  }
  & h4{
    margin: 5px;
    line-height: 20px;
  }
  & input{
    border:none;
    border-radius: 5px;
    width: calc(100% - 20px);
    height: 20px;
    background-color: ${e=>e.theme.palette.extrawhite} ;
    padding: 10px;

    &:focus{
      outline: 1px solid ${e=>e.theme.palette.triconblack};
    }
  }
`,zt=r.div`
  display :flex;
  & h2 {
    flex:1;
  }
  & div {
    display: flex;
    align-items: center;
    flex:5;
    overflow-x: auto;
    &::-webkit-scrollbar {
        height: 8px;
        background-color: ${e=>e.theme.palette.extrawhite};
        border-radius:2px;
    }
    &::-webkit-scrollbar-thumb {
        height:8px;
        background-color: ${e=>e.theme.palette.triconblack};
        border-radius: 2px;
    }
    & .tag{
      background-color: ${e=>e.theme.palette.daydream} ;
      margin:0 5px;
      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center ;
      min-width: 80px;
      max-width: 80px;
      font-size:15px;
      font-weight: 600;
      color:  ${e=>e.theme.palette.triconblack} ;
      height: 15px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      cursor: pointer;
      &:focus{
        outline: none;
      }
    }
  }
`,Tt=r.div`
  position:relative;
  display: flex;
  & input{
    padding-left: 50px ;
  }
`,jt=r(D)`
  cursor: pointer;
  position: absolute;
  left:10px;
  height: 30px;
  top:50%;
  transform: translateY(-50%);
`,j=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:50%;
  min-width: 300px;
  height:250px;
  margin: auto;
   @media screen and ${e=>e.theme.devices.mobile}{
    width: 100% ;
    min-height: 100px;
  }
`,Nt=r.div`
  display: flex;
  justify-content: flex-end;
  margin: 50px 0;
  
  & button{
    width:120px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: ${e=>e.theme.palette.lobelia} ;
    color:  ${e=>e.theme.palette.extrawhite};
    &:hover{
      cursor:pointer;
    };
  };

  @media screen and ${e=>e.theme.devices.mobile}{
    justify-content: center;
    & button{
      width:100%;
    }
  }
`;function Ut(){const e=window.localStorage.getItem("token"),i=L(),[o,a]=l.exports.useState([]),[n,u]=l.exports.useState([]),[c,f]=l.exports.useState([]),[d,b]=l.exports.useState(""),p=l.exports.useRef(null),x=l.exports.useRef(0),C=async m=>{var w;m.preventDefault();try{const y=new FormData(m.target),_=(w=p.current)==null?void 0:w.getInstance().getMarkdown();_&&y.append("description",_),o.forEach(({file:P})=>{P&&y.append("code",P)}),n[0].file&&y.append("thumbnail",n[0].file);for(const P of y.entries())if(!P[1])throw new Error(`${P[0]}\uD544\uB4DC\uB97C \uCC44\uC6CC\uC8FC\uC138\uC694.`);await A.publishPost(y,e),i("/gallery")}catch(y){alert(y)}},$=m=>{b(m.target.value)},h=m=>{d&&f([...c,{id:x.current++,tag:d}]),b("")},g=(m,w)=>{f(c.filter(y=>y.id!==w))};return e?t(Ft,{children:s(Lt,{onSubmit:C,children:[t("h1",{children:"\uAE00 \uC4F0\uAE30"}),t("h2",{children:"Title"}),t("input",{name:"title"}),s(zt,{children:[t("h2",{children:"Tag"}),t("div",{children:c.map(({id:m,tag:w})=>t("input",{className:"tag",name:"categories",value:w,onClick:y=>{g(y,m)},readOnly:!0},m))})]}),s(Tt,{children:[t("input",{value:d,onChange:$,type:"text"}),t(jt,{icon:he,onClick:h})]}),t("h2",{children:"Description"}),t(gt,{ref:p}),t("h2",{children:"Thumbnail"}),s(j,{children:[t("h3",{children:"\uC0AC\uC9C4 \uC5C5\uB85C\uB4DC \uC720\uC758\uC0AC\uD56D"}),t("br",{}),t("h4",{children:"\u2705 \uC0AC\uC9C4\uC740 .jpg .png \uD30C\uC77C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."}),t(V,{name:"thumbnail",multiple:!1,fileState:n,setFileState:u})]}),t("h2",{children:"Code"}),s(j,{children:[t("h3",{children:"\uCF54\uB4DC \uC5C5\uB85C\uB4DC \uC720\uC758\uC0AC\uD56D"}),t("br",{}),t("h4",{children:"\u2705 \uCF54\uB4DC \uD655\uC7A5\uC790\uB294 .jsx\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."}),t("h4",{children:"\u2705 \uCF54\uB4DC\uB294 \uC5EC\uB7EC \uAC1C \uC5C5\uB85C\uB4DC \uAC00\uB2A5\uD569\uB2C8\uB2E4."}),t("h4",{children:"\u2705 \uCF54\uB4DC\uD30C\uC77C\uC740 \uD55C \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4."}),t("h4",{children:"\u2705 styled-component \uC678 \uBCC4\uB3C4\uC758 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC2DC\uBA74 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}),t("h4",{children:"\u2705 \uCF54\uB4DC\uD30C\uC77C \uC911 index.jsx\uB77C\uB294 \uC774\uB984\uC758 \uD30C\uC77C\uC744 \uBC18\uB4DC\uC2DC \uD3EC\uD568\uD574\uC57C\uD558\uBA70, \uADF8 \uD30C\uC77C \uB0B4 default\uB85C export\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uB9CC\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. "})]}),t(j,{children:t(V,{name:"code",multiple:!0,fileState:o,setFileState:a})}),t(Nt,{children:t("button",{type:"submit",children:"Submit"})})]})}):t(St,{})}function _t(){const e=L(),[i]=I(),o=i.get("code");return l.exports.useEffect(()=>{o&&ze.getAuthToken(o).then(a=>{const n=a.data;console.log(n),window.localStorage.setItem("token",n.token),window.localStorage.setItem("user",n.username),window.localStorage.setItem("authorId",n.userId),e("/gallery")}).catch(a=>{alert(a),e("/gallery")})},[]),t(z,{})}var Rt="/assets/GithubIconWhite.6349af69.png";const Ot=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.palette.extrawhite};
  border-radius: 5px;
  box-sizing: border-box;
  width: 7rem;
  transition: all ease 0.3s;
  border: ${e=>e.theme.palette.triconblack};
  cursor: pointer;
  & .btn {
    display: none;
  }
  & .active {
    display: box;
  }

  &:hover {
    background-color: ${e=>e.theme.palette.triconblack};
    border: 1px white solid;
    color: white;
  }
`;function Ht(){return t(B,{to:"publish",children:t(Ot,{children:"Publish"})})}const Mt=r.button`
  color: white;
  border-radius: 5px;
  background-color: ${e=>e.theme.palette.extrawhite};
  border: ${e=>e.theme.palette.triconblack};
  border-radius: 5px;
  box-sizing: border-box;
  width: 5rem;
  padding: 0.1rem 0rem;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.theme.palette.triconblack};
    border: 1px white solid;
    color: white;
  }
`;function Gt(){return t(B,{to:"/edit",children:t(Mt,{children:"Edit"})})}const Vt=r.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.palette.extrawhite};
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  width: 8rem;
  height: 2rem;
  transition: all ease 0.3s;
  border: ${e=>e.theme.palette.triconblack};
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.palette.triconblack};
    border: 1px white solid;
    & p {
      color: white;
    }

    & img {
      background-image: url('@images/GithubIconWhite.png');
    }
  }
`,Wt=r.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #727272;
`,qt=r.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
`;function W({token:e,handleAuth:i}){return s(S,{children:[e?t(Ht,{}):null,e?t(Gt,{}):null,s(Vt,{onClick:i,children:[t(qt,{src:Rt}),t(Wt,{children:e?"Logout":"Login"})]})]})}const Kt=r.li``,Yt=r(B)`
  font-size: 1.5vw;
  border-bottom: ${e=>e.ismatch?`3px solid ${e.theme.palette.africanruby}`:null};
`,Jt=r.img`
  width: 3.5vw;
`;function q(){const[e,i]=l.exports.useState([]),[o]=I(),a=o.get("auth"),n=async()=>{try{const{data:c}=await Te.getAllUser();i(c)}catch(c){alert(c)}};l.exports.useEffect(()=>{n()},[]);const u=e.map(c=>t(Kt,{children:s(Yt,{ismatch:a===c._id?"true":void 0,to:`gallery?auth=${c._id}`,children:[t(Jt,{src:c.avatar}),c.username]})},c._id));return t(S,{children:u})}const Qt=r.div`
  width: 100%;
  background-color: ${e=>e.theme.palette.triconblack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 1rem;
  height: 8rem;
  @media ${e=>e.theme.devices.mobile} {
    height: 5rem;
  }
`,Xt=r.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;

  & .logo {
    width: 40%;
    font-size: 3.5vmin;
  }
  & a {
    color: ${e=>e.theme.palette.extrawhite};

    text-decoration: none;
    margin: 10px;
  }
  & button {
    background-color: none;
    border: none;
  }
  .hamburger-bar {
    color: ${e=>e.theme.palette.extrawhite};
    margin: 20px;
  }
  .login-info {
    display: flex;
  }

  button {
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: #727272;
  }

  @media ${e=>e.theme.devices.desktop} {
    .hamburger-bar {
      display: none;
    }
  }

  @media ${e=>e.theme.devices.mobile} {
    .login-info {
      display: none;
    }

    .hamburger-bar {
      display: box;
      cursor: pointer;
    }
    .hamburger-member {
      display: none;
    }

    .hamburger-bar:hover {
      .hamburger-member {
        display: flex;
        background-color: ${e=>e.theme.palette.lobelia};
        flex-direction: column;
        display: flex;
        align-items: flex-start;
        position: absolute;
        right: 0;
        z-index: 100;
        border-radius: 30px;
        padding: 0.2rem;
        & li {
          color: ${e=>e.theme.palette.extrawhite};
          display: flex;
          flex-direction: flex-start;
          justify-content: center;
          align-items: center;
          & a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        & img {
          border-radius: 100%;
          width: 38px;
          border: 3px solid ${e=>e.theme.palette.extrawhite};
          margin-right: 10px;
        }
      }
    }
  }
`,Zt=r.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & a {
    text-decoration: none;
    color: ${e=>e.theme.palette.extrawhite};
  }

  & ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & li a {
    color: ${e=>e.theme.palette.extrawhite};
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0;
  }

  & img {
    border-radius: 100%;
    width: 38px;
    border: 3px solid ${e=>e.theme.palette.extrawhite};
    margin: 10px;
  }
  @media ${e=>e.theme.devices.mobile} {
    display: none;
  }
`;function ei(){const e="https://github.com/login/oauth/authorize?client_id=2913a6fa5590b4d17c98&redirect_uri=http://localhost:3000/auth/callback",i=localStorage.getItem("token"),o=L();function a(){i?(localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("authorId"),o("/")):window.location.href=e}return s(Qt,{children:[s(Xt,{children:[t(B,{className:"logo",to:"/",children:"\u{1F3A8} CHECKLIST GALLERY"}),t("div",{className:"login-info",children:t(W,{token:i,handleAuth:a})}),s("ul",{className:"hamburger-bar",children:[t(D,{icon:me}),s("div",{className:"hamburger-member",children:[t(W,{token:i,handleAuth:a}),t(q,{})]})]})]}),t(Zt,{children:s("ul",{children:[t("li",{children:t(B,{to:"/gallery",children:"\uC804\uCCB4\uBCF4\uAE30"})}),t(q,{})]})})]})}function ti(){return s(S,{children:[t(ei,{}),t(xe,{})]})}const ii=r.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 360px;
  margin: 0 auto;
`,ri=r.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  margin: 1rem 0rem;
  width: 360px;
  border: 1px solid ${e=>e.theme.palette.triconblack};
  border-radius: 1rem;
  padding: 1rem;
`,ni=r.span`
  cursor: pointer;
  margin-top: 0.5rem;
`,oi=r.button`
  position: relative;
  margin-left: 50%;
  width:3rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: ${e=>e.theme.palette.lobelia} ;
  color:  ${e=>e.theme.palette.extrawhite};
  &:hover{
    cursor:pointer;
  }
`;function ai(){const[e,i]=l.exports.useState([]),[o,a]=l.exports.useState(!1),n=L(),u=window.localStorage.getItem("authorId"),c=window.localStorage.getItem("token"),f=async()=>{const{data:p}=await A.getAllPosts({authorId:u});i(p)},d=p=>{n(`/gallery/${p}`)},b=async p=>{try{(await A.deletePost(p,c)).status===200&&(alert("\uC0AD\uC81C \uC644\uB8CC"),a(C=>!C))}catch(x){alert(x)}};return l.exports.useEffect(()=>{f()},[o]),t(ii,{children:e.map(p=>s(ri,{children:[t(ni,{onClick:()=>d(p._id),children:p.title}),t(oi,{onClick:x=>b(p._id),children:"\uC0AD\uC81C"})]},p._id))})}function li(){return s(oe,{children:[s(be,{children:[t(k,{path:"/",element:t(Fe,{})}),s(k,{element:t(ti,{}),children:[t(k,{path:"/auth/callback",element:t(_t,{})}),t(k,{path:"/gallery",element:t(ut,{})}),t(k,{path:"/gallery/:postId",element:t(At,{})}),t(k,{path:"/publish",element:t(Ut,{})}),t(k,{path:"/edit",element:t(ai,{})})]})]}),t(De,{})]})}te.createRoot(document.getElementById("root")).render(s(re,{theme:ke,children:[t($e,{}),t(li,{})]}));
