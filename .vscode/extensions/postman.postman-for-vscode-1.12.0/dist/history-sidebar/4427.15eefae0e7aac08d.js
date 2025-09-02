"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[4427],{4427:(e,t,r)=>{r.d(t,{Z:()=>Ht});var s=r(7560),n=r(40540),i=r(59530),o=r.n(i),a=r(494),l=r(31660),c=r.n(l),d=r(76707),h=r.n(d),u=r(83096),p=r(35736),x=r(32220),g=r(80605),y=r(21180),m=r(39245),v=r(60398),f=r(32234),j=r(56880),w=r(52322);function b({workspaceId:e}){const t=(0,m.useNavigate)();return(0,w.jsx)(y.GenericErrorMessage,{illustration:"illustration-no-history",title:"You haven't sent any requests.",description:"Any request you send in this workspace will appear here.",primaryAction:(0,w.jsx)(g.Z,{type:"primary",text:"Show me how",onClick:()=>{j.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"show-me-how",value:1}),t(`/workspace/${e}/request/create?requestId=${(0,v.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",requestData:f.Base64.encode(JSON.stringify({data:{url:"https://postman-echo.com/get",method:"GET",workspace:e}}))})}})})}function k({searchQuery:e}){return(0,w.jsx)(y.GenericErrorMessage,{illustration:"illustration-no-history",title:`No results found for "${e}"`,description:"Please try again using different keywords, and don’t forget to check for typos."})}function C(e){return"more"===e.type?32:28}var E=r(77986);const Z="yyyy MM dd",I=(e,t,r,s="asc")=>{let n=0,i=e.length;for(;n<i;){const o=n+i>>>1;("asc"===s?r(e[o])<r(t):r(e[o])>r(t))?n=o+1:i=o}const o=n;return e.splice(o,0,t),e},N=e=>(0,E.parse)(e,Z,new Date).getTime(),L=(e,t)=>({id:e,type:"meta",depth:0,value:(0,E.parse)(e,Z,new Date),children:t}),S=e=>+e.createdAt,T=(e,t,r)=>{if(null==e)return[];let s=[];const n=(e=>{const t=new Map;for(const r of e){const e=(0,E.format)(r.createdAt,Z);if(t.has(e)){const s=t.get(e);I(s,r,S,"desc")}else t.set(e,[r])}return t})([...e,...t]),i=[...n.keys()].sort(((e,t)=>N(t)-N(e)));for(const e of i){const t=n.get(e),i=L(e,null!=t?t:[]),o=r.has(e)?[]:null!=t?t:[];s=[...s,i,...o]}return s};var M=r(58560),R=r(11327),O=r(64691),P=r(48263),z=r(59824),D=r(17282),A=r(17647),_=r(29225),$=r(10099),U=r(19832),q=r(19578);let H;const Q=o()(M.Z)(H||(H=(e=>e)`
  flex-grow: 1;
  margin: var(--spacing-s);
`));function W(e){const t=(0,$.useActiveWorkspaceId)(),{deleteRuns:r}=(0,U.useDeleteRuns)(20);return(0,w.jsxs)(Q,{alignItems:"center",justifyContent:"space-between",gap:"spacing-s",children:[(0,w.jsx)(R.Z,{onChange:t=>e.onSearchQueryChange(t.target.value),value:e.searchQuery,placeholder:"Filter",prefix:(0,w.jsx)(A.Z,{}),onClear:()=>e.onSearchQueryChange(""),"data-testid":"history-top-bar-search-input"}),(0,w.jsxs)(O.Z,{children:[(0,w.jsx)(P.Z,{children:(0,w.jsx)(g.Z,{"data-testid":"history-top-bar-menu-button",icon:(0,w.jsx)(_.Z,{}),type:"tertiary"})}),(0,w.jsx)(z.Z,{children:(0,w.jsx)(D.Z,{onClick:()=>{(0,u.deleteAllHistory)(t),r((()=>{q.Toast.getToasts().addToast({status:"error",description:"Could not delete some collection runs."})}))},children:"Clear All"})})]})]})}let B;const F=o().ul(B||(B=(e=>e)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .indent {
    flex: 0 0 var(--spacing-s);
    box-sizing: border-box;
    height: inherit;
    border-right: thin solid transparent;
  }

  &:hover,
  &:focus {
    .indent {
      border-right: thin solid var(--border-color-default);
    }
  }
`)),K=(0,n.forwardRef)(((e,t)=>(0,w.jsx)(F,(0,s.Z)({role:"tree",tabIndex:0,ref:t},e,{children:e.children}))));K.displayName="forwardRef(ReactWindowList)";const G=K;var V=r(98283),X=r(69356),J=r.n(X),Y=r(22833),ee=r.n(Y),te=r(81397),re=r(43088);let se;const ne={PROPFIND:"PROP",DELETE:"DEL",OPTIONS:"OPT",UNLINK:"UNLNK",UNLOCK:"UNLCK"},ie=e=>e?ne[e]||e.slice(0,5):null,oe=o().div(se||(se=(e=>e)`
  color: ${0};
`),(({method:e})=>{switch(e){case"GET":return"var(--base-color-success, #0CBB52)";case"PUT":return"var(--base-color-info, #097BED)";case"POST":return"var(--base-color-warning, #FFB400)";case"PATCH":return"var(--content-color-patch-method)";case"OPTIONS":return"var(--content-color-options-method)";case"DELETE":return"var(--base-color-error, #EB2013)";default:return"var(--content-color-primary, #212121)"}}));function ae(e){const t=e.method.toUpperCase();return(0,w.jsx)(oe,{method:t,children:(0,w.jsx)("div",{children:ie(t)})})}let le,ce,de,he,ue=e=>e;const pe=o()(m.Link)(le||(le=ue`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  color: var(--content-color-primary);

  &:hover {
    color: var(--content-color-primary);
  }
`)),xe=o().span(ce||(ce=ue`
  flex: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: var(--spacing-s, 8px);
  height: var(--size-xs, 16px);
  min-width: 32px;
  font-size: 9px;
`)),ge=o().span(de||(de=ue`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),ye=o().div(he||(he=ue`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  padding: var(--spacing-xs) 0;
  color: var(--content-color-tertiary);
  border-top: thin solid var(--border-color-default);
  border-bottom: thin solid var(--border-color-default);
`));let me,ve,fe,je=e=>e;const we=o()(g.Z)(me||(me=je`
  height: var(--spacing-xl);
  margin-left: auto;
`)),be=o()(pe)(ve||(ve=je`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),ke=o().div(fe||(fe=je`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function Ce(e){const[t,r]=(0,n.useState)(!1),s=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)(ke,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(be,{to:`/workspace/${s}/history/${e.id}`,customNavEvent:m.OPEN_EXTENSION_URL,children:[(0,w.jsx)(xe,{children:(0,w.jsx)(ae,{method:e.method})}),(0,w.jsx)(te.Z,{content:e.url,children:(0,w.jsx)(ge,{children:e.url})})]}),t&&(0,w.jsx)(we,{"data-testid":"delete-http-history-item",onClick:()=>{(0,u.deleteHttpHistoryItem)(s,[`${e.id}`]).catch((()=>{}))},icon:(0,w.jsx)(re.Z,{}),type:"tertiary"})]})}var Ee=r(29706);let Ze,Ie,Ne,Le=e=>e;const Se=o()(g.Z)(Ze||(Ze=Le`
  height: var(--spacing-xl);
  margin-left: auto;
`)),Te=o()(pe)(Ie||(Ie=Le`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),Me=o().div(Ne||(Ne=Le`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function Re(e){const[t,r]=(0,n.useState)(!1),s=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)(Me,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(Te,{to:`/workspace/${s}/grpc-request/history/${e.id}`,customNavEvent:m.OPEN_EXTENSION_URL,children:[(0,w.jsx)(xe,{children:(0,w.jsx)(Ee.Z,{color:"content-color-info"})}),(0,w.jsx)(te.Z,{content:e.url,children:(0,w.jsx)(ge,{children:e.url})})]}),t&&(0,w.jsx)(Se,{"data-testid":"delete-grpc-history-item",onClick:()=>{(0,u.deleteMultiprotocolHistory)(s,[e.id]).catch((()=>{}))},icon:(0,w.jsx)(re.Z,{}),type:"tertiary"})]})}var Oe=r(44306),Pe=r(57747);let ze,De,Ae,_e=e=>e;const $e=o()(g.Z)(ze||(ze=_e`
  height: var(--spacing-xl);
  margin-left: auto;
`)),Ue=o()(pe)(De||(De=_e`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),qe=o().div(Ae||(Ae=_e`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function He(e){const t="ws-raw-request"===e.type?Oe.Z:Pe.Z,[r,s]=(0,n.useState)(!1),i=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)(qe,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,w.jsxs)(Ue,{to:`/workspace/${i}/${e.type}/history/${e.id}`,customNavEvent:m.OPEN_EXTENSION_URL,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,w.jsx)(xe,{children:(0,w.jsx)(t,{color:"content-color-brand"})}),(0,w.jsx)(te.Z,{content:e.url,children:(0,w.jsx)(ge,{children:e.url})})]}),r&&(0,w.jsx)($e,{"data-testid":"delete-ws-history-item",onClick:()=>{(0,u.deleteMultiprotocolHistory)(i,[e.id]).catch((()=>{}))},icon:(0,w.jsx)(re.Z,{}),type:"tertiary"})]})}var Qe=r(3341),We=r(56415);const Be=(e,t)=>{const r=(0,E.startOfDay)(new Date),s=(0,E.addDays)(r,-1);return+r<=+e?"Today":+s<=+e?"Yesterday":(0,E.format)(e,t)};let Fe,Ke,Ge,Ve,Xe,Je=e=>e;const Ye=o()(g.Z)(Fe||(Fe=Je`
  margin-left: auto;
  height: var(--spacing-xl);
`)),et=o().div(Ke||(Ke=Je`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-right: var(--spacing-s);
`)),tt=o().div(Ge||(Ge=Je`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`)),rt=o().div(Ve||(Ve=Je`
  margin-right: var(--spacing-s, 8px);
  display: flex;
  justify-content: center;
  align-items: center;
`)),st=o().div(Xe||(Xe=Je`
  user-select: none;
  font-size: var(--text-size-m, 12px);
  font-weight: var(--text-weight-regular, 400);
  color: var(--content-color-secondary, var(--grey-50));
`));function nt(e){const[t,r]=(0,n.useState)(!1);return(0,w.jsxs)(et,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(tt,{onClick:()=>e.onClick&&e.onClick(e.id,e.isCollapsed),children:[(0,w.jsx)(rt,{children:e.isCollapsed?(0,w.jsx)(Qe.Z,{}):(0,w.jsx)(We.Z,{})}),(0,w.jsx)(st,{children:Be(e.date,"MMMM dd")})]}),t&&(0,w.jsx)(Ye,{"data-testid":"delete-history-day-meta-item",onClick:()=>(()=>{const t=e.children.map((e=>({id:e.id,type:e.type})));(0,u.deleteHistory)(e.workspaceId,t)})(),icon:(0,w.jsx)(re.Z,{}),type:"tertiary"})]})}let it;const ot=o().div(it||(it=(e=>e)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`));function at({srText:e="Loading more items"}){return(0,w.jsx)(ye,{children:(0,w.jsxs)(ot,{children:[(0,w.jsx)(p.Z,{size:"small"}),(0,w.jsx)("span",{className:"sr-only",children:e})]})})}var lt=r(97913),ct=r(53186);let dt,ht,ut,pt=e=>e;const xt=o()(g.Z)(dt||(dt=pt`
  height: var(--spacing-xl);
  margin-left: auto;
`)),gt=o().div(ht||(ht=pt`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),yt=o().div(ut||(ut=pt`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function mt(e){const[t,r]=(0,n.useState)(!1),s=(0,$.useActiveWorkspaceId)(),i=(0,m.useNavigate)(),o=(0,U.useDeleteCollectionRun)(),{userCanDeleteHistory:a}=(0,ct.useWorkspacePermissions)(s);return(0,w.jsxs)(yt,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(gt,{onClick:()=>{i(`/workspace/${s}/run/${e.id}`,{state:JSON.stringify({additionalContext:{id:e.id,loadFromHistory:!0,additionalContext:{payload:{collectionId:e.collection}}}})},{customNavEvent:m.OPEN_EXTENSION_URL})},children:[(0,w.jsx)(xe,{children:(0,w.jsx)(lt.Z,{color:"content-color-secondary"})}),(0,w.jsx)(te.Z,{content:e.name,children:(0,w.jsx)(ge,{children:e.name})})]}),t&&(0,w.jsx)(xt,{"data-testid":"delete-http-history-item",isDisabled:!a,onClick:()=>{o.mutate({runId:e.id,userId:e.owner,workspaceId:s,collectionId:e.collection},{onError:()=>{q.Toast.getToasts().addToast({status:"error",description:"Could not delete the collection run."})}})},icon:(0,w.jsx)(re.Z,{}),type:"tertiary"})]})}const vt=["item","workspaceId","style"];let ft;const jt=o().li(ft||(ft=(e=>e)`
  display: flex;
  height: 28px;
  align-items: center;
  font-size: var(--text-size-m, 12px);
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
  color: var(--content-color-primary, var(--grey-90));

  /* Depth starts with 0 index */
  padding: var(--spacing-zero) var(--spacing-s);

  > * {
    box-sizing: border-box;
  }

  .indent + *:not(.indent) {
    padding-right: var(--spacing-s);
  }

  &.action {
    cursor: pointer;

    /* Backwards compatibility */
    &:hover {
      background-color: var(--highlight-background-color-secondary);

      .sidebar-list-item__right-section-actions,
      .actions-dropdown {
        .btn {
          height: var(--size-s);
        }
      }
    }

    &:has(*:hover),
    &:has(*:focus) {
      background-color: var(--highlight-background-color-secondary);

      .sidebar-list-item__right-section-actions,
      .actions-dropdown {
        .btn {
          height: var(--size-s);
        }
      }
    }
  }
`)),wt=e=>{const{item:t,workspaceId:r,isCollapsed:n,onCollapse:i}=e;switch(t.type){case"grpc-request":return(0,w.jsx)(Re,(0,s.Z)({},t));case"request":return(0,w.jsx)(Ce,(0,s.Z)({},t));case"ws-raw-request":case"ws-socketio-request":return(0,w.jsx)(He,(0,s.Z)({},t));case"meta":return(0,w.jsx)(nt,{id:t.id,workspaceId:r,children:t.children,date:t.value,isCollapsed:n,onClick:i});case"more":return(0,w.jsx)(at,{});case"collectionrun":return(0,w.jsx)(mt,(0,s.Z)({},t));default:return null}},bt=e=>{const{item:t,workspaceId:r,style:n}=e,i=(0,V.Z)(e,vt),o=0===t.depth?!i.isCollapsed:void 0;return(0,w.jsxs)(jt,{className:ee()({action:"more"!==t.type}),style:n,role:"treeitem","aria-expanded":o,tabIndex:-1,children:[Array.from({length:t.depth}).fill(null).map(((e,t)=>(0,w.jsx)("div",{className:"indent"},`indent-${t}`))),(0,w.jsx)(wt,(0,s.Z)({item:t,workspaceId:r},i))]})},kt=["items"],Ct=["style","data"],Et=["items"],Zt=["style","data"],It=["collapsedKeys","items"];function Nt(e,t){const{style:r,data:{items:s}}=e,n=(0,V.Z)(e.data,kt),i=(0,V.Z)(e,Ct),{style:o,data:{items:a}}=t,l=(0,V.Z)(t.data,Et),c=(0,V.Z)(t,Zt);return J()(r,o)&&J()(s,a)&&J()(n,l)&&J()(i,c)}const Lt=(0,n.memo)((({data:e,index:t,style:r})=>{const{collapsedKeys:n,items:i}=e,o=(0,V.Z)(e,It),a=i[t];return(0,w.jsx)(bt,(0,s.Z)({item:a,style:r,isCollapsed:n.has(a.id)},o),a.id)}),Nt);Lt.displayName="memo(ItemRenderer)";const St=Lt;var Tt=r(63622);let Mt;const Rt=o().button(Mt||(Mt=(e=>e)`
  all: unset;
  color: var(--content-color-brand);
  cursor: pointer;
  display: inline-block;
  margin-left: var(--spacing-xs);
`));function Ot({isRefetching:e,onRetry:t}){return e?(0,w.jsx)(at,{srText:"Refetching failed items"}):(0,w.jsx)(ye,{children:(0,w.jsxs)(Tt.ZP,{type:"para",children:["Unable to load items.",t&&(0,w.jsx)(Rt,{onClick:t,children:"Retry"})]})})}let Pt,zt,Dt,At=e=>e;const _t=o().div(Pt||(Pt=At`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`)),$t=o().div(zt||(zt=At`
  max-height: ${0}px;
`),C({type:"more"})),Ut=()=>{const e=(0,$.useActiveWorkspaceId)(),{data:t,fetchNextPage:r,hasNextPage:i,hasPageError:o,refetch:l,isRefetching:d}=(0,u.useHistoryItems)({workspaceId:e,pageSize:u.PAGE_SIZE}),{data:x,isLoading:g}=(0,U.useCollectionRuns)({workspaceId:e,count:20});(0,u.useHistorySubscription)({workspaceId:e});const[y,m]=(0,n.useState)(new Set),[v,f]=(0,n.useState)(""),j=e=>{f(e)},E=e=>""===v||null==e?e:e.filter((e=>{var t;return null==(t=e.url)?void 0:t.toLowerCase().includes(v.toLowerCase())})),Z=e=>""===v?e:e.filter((e=>{var t;return null==(t=e.name)?void 0:t.toLowerCase().includes(v.toLowerCase())})),I=(0,n.useMemo)((()=>{const e=i?[(r=i,{type:"more",id:"more",depth:0,loading:null==r||r})]:[];var r;return[...T(E(t),Z(x?x.map((e=>{const t=new Date(e.data.createdAt);return(0,s.Z)({},e.data,{createdAt:t,depth:1,type:"collectionrun"})})):[]),y),...e]}),[t,x,y,i]),N={collapsedKeys:y,items:I,workspaceId:e,onCollapse:(e,t)=>{m((()=>(t?y.delete(e):y.add(e),new Set(y))))}};return null==t||g?(0,w.jsxs)(_t,{children:[(0,w.jsx)(p.Z,{size:"large"}),(0,w.jsx)("span",{className:"sr-only",children:"Loading..."})]}):0===t.length&&0===(null==x?void 0:x.length)?(0,w.jsx)(b,{workspaceId:e}):0===I.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(W,{onSearchQueryChange:j,searchQuery:v}),(0,w.jsx)(k,{searchQuery:v})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(W,{onSearchQueryChange:j,searchQuery:v}),o&&(0,w.jsx)($t,{children:(0,w.jsx)(Ot,{isRefetching:d,onRetry:l})}),(0,w.jsx)(c(),{children:({height:e,width:t})=>(0,w.jsx)(h(),{isItemLoaded:e=>!i||e<I.length-1,itemCount:I.length,loadMoreItems:()=>{r()},children:({onItemsRendered:r,ref:s})=>(0,w.jsx)(a.VariableSizeList,{ref:s,onItemsRendered:r,height:e,itemData:N,itemCount:I.length,itemSize:e=>C(I[e]),width:t,innerElementType:G,children:St})})})]})},qt=o().div(Dt||(Dt=At`
  height: 100%;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`)),Ht=()=>(0,w.jsx)(y.CustomErrorBoundary,{appId:"history-sidebar",errorElementId:"history-sidebar",fallback:(0,w.jsx)(y.GenericErrorMessage,{title:"Couldn't load history",description:"Something went wrong while trying to load history items. Check your internet and try again."}),children:(0,w.jsx)(qt,{children:(0,w.jsx)(x.VW,{children:(0,w.jsx)(q.Toast.Ui.ToastEventEmitter,{children:(0,w.jsx)(Ut,{})})})})})}}]);
//# sourceMappingURL=4427.15eefae0e7aac08d.js.map