(self["webpackChunktraining"]=self["webpackChunktraining"]||[]).push([[593],{3855:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(52),n=t.n(a),r=t(2599),o=t.n(r);const l="http://ec2-18-118-101-31.us-east-2.compute.amazonaws.com/api/auth/",i={setUserLogged(e){o().set("userLogged",e)},getUserLogged(){return o().get("userLogged")},register(e,s){const t={username:e,password:s};return n().post(l+"regiser",t)},login(e,s){const t={username:e,password:s};return n().post(l+"signin",t)},deleteUserLogged(){o().remove("userLogged")}}},546:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>D});var a=t(3673),n=t(2323);const r={class:"q-pa-md"},o={class:"row items-start q-gutter-md"},l={class:"q-pa-md q-gutter-y-md column items-start"},i={class:"q-pa-md"},u={key:0},d={class:"q-pa-md"},m={key:1},p={class:"q-pa-md"},c={key:2},g={class:"q-pa-md"},h={class:"row justify-center"};function j(e,s,t,j,w,f){const k=(0,a.up)("q-btn"),b=(0,a.up)("q-chip"),v=(0,a.up)("q-btn-group"),y=(0,a.up)("q-item-section"),q=(0,a.up)("q-item"),W=(0,a.up)("q-separator"),x=(0,a.up)("q-item-label"),z=(0,a.up)("q-radio"),_=(0,a.up)("q-td"),V=(0,a.up)("q-tr"),L=(0,a.up)("q-table"),M=(0,a.up)("q-checkbox"),Z=(0,a.up)("q-select"),$=(0,a.up)("q-carousel-slide"),C=(0,a.up)("q-carousel"),Q=(0,a.up)("q-btn-toggle"),S=(0,a.up)("q-card-section"),U=(0,a.up)("q-card"),T=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",r,[(0,a.Wm)("div",o,[(0,a.Wm)(U,{flat:"",bordered:"",class:"col"},{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",l,[(0,a.Wm)(v,{push:""},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{color:"blue",glossy:"","text-color":"black",push:"",label:"Finish",icon:"verified_user",onClick:s[1]||(s[1]=e=>f.EvaluarExamen())}),(0,a.Wm)(b,{square:"",color:"red","text-color":"white",icon:"alarm"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(w.countdown),1)])),_:1})])),_:1})])])),_:1})])),_:1}),(0,a.Wm)(W),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",i,[(0,a.Wm)(C,{modelValue:w.slide,"onUpdate:modelValue":s[2]||(s[2]=e=>w.slide=e),"transition-prev":"slide-right","transition-next":"slide-left",animated:"","control-color":"primary",class:"rounded-borders"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(w.mostarpreguntas,(e=>((0,a.wg)(),(0,a.j4)($,{key:e.id,name:e.id,class:"column no-wrap flex-center"},{default:(0,a.w5)((()=>["PreguntaChecked"===e.tipopregunta?((0,a.wg)(),(0,a.j4)("div",u,[(0,a.Wm)(x,{class:"text-subtitle2",innerHTML:w.preguntasCkecked[e.posicion].enunciado},null,8,["innerHTML"]),(0,a.Wm)("div",d,[(0,a.Wm)(L,{class:"my-sticky-header-column-table",title:"Questions",rows:e.rows,columns:e.columns,"row-key":"name","selected-rows-label":e.getSelectedString},{body:(0,a.w5)((s=>[(0,a.Wm)(V,{props:s},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{key:"name",props:s},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{class:"primero",size:"sm",modelValue:e.respuesta,"onUpdate:modelValue":s=>e.respuesta=s,val:s.row.name,color:"teal"},null,8,["modelValue","onUpdate:modelValue","val"])])),_:2},1032,["props"]),(0,a.Wm)(_,{key:"question",props:s},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"text-subtitle4",innerHTML:s.row.name},null,8,["innerHTML"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:2},1032,["rows","columns","selected-rows-label"])])])):(0,a.kq)("",!0),"PreguntaMulti"===e.tipopregunta?((0,a.wg)(),(0,a.j4)("div",m,[(0,a.Wm)(x,{class:"text-subtitle2",innerHTML:w.preguntasMultiselected[e.posicion].enunciado},null,8,["innerHTML"]),(0,a.Wm)("div",p,[(0,a.Wm)(L,{class:"my-sticky-header-column-table",title:"Questions",rows:e.rows,columns:e.columns,"row-key":"name","selected-rows-label":e.getSelectedString},{body:(0,a.w5)((e=>[(0,a.Wm)(V,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{key:"name",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(M,{size:"sm",class:"primer",modelValue:e.row.respuesta,"onUpdate:modelValue":s=>e.row.respuesta=s,val:e.row.name,color:"teal"},null,8,["modelValue","onUpdate:modelValue","val"])])),_:2},1032,["props"]),(0,a.Wm)(_,{key:"question",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"text-subtitle4",innerHTML:e.row.name},null,8,["innerHTML"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:2},1032,["rows","columns","selected-rows-label"])])])):(0,a.kq)("",!0),"PreguntaVerdadero"===e.tipopregunta?((0,a.wg)(),(0,a.j4)("div",c,[(0,a.Wm)(x,{class:"text-subtitle2",innerHTML:w.preguntasVerdadero[e.posicion].enunciado},null,8,["innerHTML"]),(0,a.Wm)("div",g,[(0,a.Wm)(L,{class:"my-sticky-header-column-table",title:"Questions",rows:e.rows,columns:e.columns,"row-key":"name"},{body:(0,a.w5)((e=>[(0,a.Wm)(V,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{key:"name",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"segundo",filled:"","bottom-slots":"",modelValue:e.row.respuesta,"onUpdate:modelValue":s=>e.row.respuesta=s,dense:w.dense,"options-dense":w.denseOpts,options:["True","False"]},null,8,["modelValue","onUpdate:modelValue","dense","options-dense"])])),_:2},1032,["props"]),(0,a.Wm)(_,{key:"question",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"text-subtitle4",innerHTML:e.row.name},null,8,["innerHTML"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:2},1032,["rows","columns"])])])):(0,a.kq)("",!0)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),(0,a.Wm)("div",h,[(0,a.Wm)(Q,{glossy:"",modelValue:w.slide,"onUpdate:modelValue":s[3]||(s[3]=e=>w.slide=e),options:w.menuoption},null,8,["modelValue","options"])])])),_:1})])),_:1})])])])),_:1})}var w=t(5474),f=t(3824),k=t.n(f),b=t(3855),v=t(1488),y=t.n(v);t(4434);const q={data(){return{countdown:null,expires_in:null,interval:null,preguntasCkecked:[{id:"",enunciado:"",preguntas:[{id:"",pregunta:""}],respuesta:[]}],preguntasMultiselected:[{id:"",enunciado:"",preguntas:[{id:"",pregunta:""}],respuestas:[]}],preguntasVerdadero:[{id:"",enunciado:"",preguntasvf:[{id:"",pregunta:"",respuesta:""}]}],cursoprogreso:{id:""},mostarpreguntas:[],menuoption:[],slide:"",selected:[],dense:!0,denseOpts:!0,examen:{id:"",tiempo:0}}},computed:{userLogged(){return k().read(b.Z.getUserLogged()).claim.username},getAdmin(){let e=k().read(b.Z.getUserLogged()).claim.roles,s=0;for(let t=0;t<e.length;t++)"PROFESOR"==e[t]&&s++;return s>=1}},mounted(){this.CargarDatos()},unmounted(){clearInterval(this.interval)},methods:{_setInterval:function(){this.interval=setInterval((()=>{0===this.expires_in?(this.$q.notify({type:"negative",message:"Time is over"}),clearInterval(this.interval)):(this.expires_in-=1,this.countdown=y().utc(1e3*this.expires_in).subtract(1,"seconds").format("HH:mm:ss"))}),1e3)},async CargarDatos(){await w.api.get("/preguntachecked/"+this.$route.params.idcursoprogreso+"/"+this.$route.params.idexamenmodulo,{headers:{Authorization:`Bearer ${b.Z.getUserLogged()}`}}).then((e=>this.preguntasCkecked=e.data)).catch((e=>this.$q.notify({type:"negative",message:e}))),await w.api.get("/examenModulo/getByIdCursoAndIdExamen/"+this.$route.params.idcursoprogreso+"/"+this.$route.params.idexamenmodulo,{headers:{Authorization:`Bearer ${b.Z.getUserLogged()}`}}).then((e=>this.examen=e.data)).catch((e=>this.$q.notify({type:"negative",message:e}))),await w.api.get("/preguntamultiselected/"+this.$route.params.idcursoprogreso+"/"+this.$route.params.idexamenmodulo,{headers:{Authorization:`Bearer ${b.Z.getUserLogged()}`}}).then((e=>this.preguntasMultiselected=e.data)).catch((e=>this.$q.notify({type:"negative",message:e}))),await w.api.get("/desicion/"+this.$route.params.idcursoprogreso+"/"+this.$route.params.idexamenmodulo,{headers:{Authorization:`Bearer ${b.Z.getUserLogged()}`}}).then((e=>this.preguntasVerdadero=e.data)).catch((e=>this.$q.notify({type:"negative",message:e})));let e=0;for(let s=0;s<this.preguntasCkecked.length;s++){e++;let t=[],a=[{name:"name",label:"Answer",required:!0,align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"question",align:"center",label:"Question",field:"question",sortable:!0}];for(let e=0;e<this.preguntasCkecked[s].preguntas.length;e++)t.push({name:this.preguntasCkecked[s].preguntas[e].pregunta});this.mostarpreguntas.push({id:this.preguntasCkecked[s].id,tipopregunta:"PreguntaChecked",posicion:s,rows:t,columns:a,getSelectedString:this.getSelectedString()}),this.menuoption.push({label:e,value:this.preguntasCkecked[s].id})}for(let s=0;s<this.preguntasMultiselected.length;s++){e++;let t=[],a=[{name:"name",label:"Answer",required:!0,align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"question",align:"center",label:"Question",field:"question",sortable:!0}];for(let e=0;e<this.preguntasMultiselected[s].preguntas.length;e++)t.push({name:this.preguntasMultiselected[s].preguntas[e].pregunta});this.mostarpreguntas.push({id:this.preguntasMultiselected[s].id,tipopregunta:"PreguntaMulti",posicion:s,rows:t,columns:a,getSelectedString:this.getSelectedString()}),this.menuoption.push({label:e,value:this.preguntasMultiselected[s].id})}for(let s=0;s<this.preguntasVerdadero.length;s++){e++;let t=[],a=[{name:"name",required:!0,label:"Answer",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"question",align:"center",label:"Question",field:"question",sortable:!0}];for(let e=0;e<this.preguntasVerdadero[s].preguntasvf.length;e++)t.push({name:this.preguntasVerdadero[s].preguntasvf[e].pregunta,respuesta:""});this.mostarpreguntas.push({id:this.preguntasVerdadero[s].id,tipopregunta:"PreguntaVerdadero",posicion:s,rows:t,columns:a,getSelectedString:this.getSelectedString()}),this.menuoption.push({label:e,value:this.preguntasVerdadero[s].id})}this.mostarpreguntas.length>0&&(this.slide=this.mostarpreguntas[0].id),this.countdown=y().utc(60*this.examen.tiempo).format("HH:mm:ss"),this.expires_in=60*this.examen.tiempo,this._setInterval()},async EvaluarExamen(){let e;const s={id:this.$route.params.idexamenmodulo,tiempo:this.examen.tiempo,preguntaChecked:this.preguntasCkecked,preguntaMultiselected:this.preguntasMultiselected,preguntasDesicion:this.preguntasVerdadero};await w.api.post("/examenModulo/",s,{headers:{Authorization:`Bearer ${b.Z.getUserLogged()}`}}).then((s=>e=s.data)).catch((e=>this.$q.notify({type:"negative",message:e})))},getSelectedString(){return 0===this.selected.length?"":`${this.selected.length} record${this.selected.length>1?"s":""} selected of ${this.rows.length}`}}};var W=t(4379),x=t(151),z=t(3414),_=t(2035),V=t(6375),L=t(2165),M=t(7030),Z=t(5869),$=t(5589),C=t(1277),Q=t(4593),S=t(2350),U=t(8468),T=t(8186),H=t(3884),A=t(7991),I=t(6271),B=t(3314),E=t(201),O=t(7518),P=t.n(O);q.render=j;const D=q;P()(q,"components",{QPage:W.Z,QCard:x.Z,QItem:z.Z,QItemSection:_.Z,QBtnGroup:V.Z,QBtn:L.Z,QChip:M.Z,QSeparator:Z.Z,QCardSection:$.Z,QCarousel:C.Z,QCarouselSlide:Q.Z,QItemLabel:S.Z,QTable:U.Z,QTr:T.Z,QTd:H.Z,QRadio:A.Z,QCheckbox:I.Z,QSelect:B.Z,QBtnToggle:E.Z})},6700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=6700}}]);