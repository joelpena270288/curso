(self["webpackChunktraining"]=self["webpackChunktraining"]||[]).push([[764],{3855:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(52),l=s.n(a),i=s(2599),r=s.n(i);const n="api/auth/",o={setUserLogged(e){r().set("userLogged",e)},getUserLogged(){return r().get("userLogged")},register(e,t){const s={username:e,password:t};return l().post(n+"regiser",s)},login(e,t){const s={username:e,password:t};return l().post(n+"signin",s)},deleteUserLogged(){r().remove("userLogged")}}},5024:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>re});var a=s(3673),l=s(2323);const i={class:"q-pa-md"},r={class:"row items-start q-gutter-md"},n={class:"q-pa-md q-gutter-y-md column items-start"},o={class:"q-pa-md"},m=(0,a.Uk)(" Number: "),d=(0,a.Wm)("br",null,null,-1),u=(0,a.Wm)("br",null,null,-1),c=(0,a.Uk)(" Topic: "),p=(0,a.Wm)("br",null,null,-1),h=(0,a.Wm)("br",null,null,-1),j=(0,a.Uk)(" Description: "),g=(0,a.Wm)("br",null,null,-1),f={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},b=(0,a.Uk)(" Name: "),y=(0,a.Wm)("br",null,null,-1),v=(0,a.Wm)("br",null,null,-1),w=(0,a.Uk)(" Description: "),W=(0,a.Wm)("br",null,null,-1),k={class:"q-gutter-y-md column",align:"center"},z=(0,a.Wm)("div",{class:"text-h6"},"Add Activity",-1),_=(0,a.Uk)(" Description: "),q={class:"q-gutter-y-md column",align:"center"},V=(0,a.Wm)("div",{class:"text-h6"},"Edit Lesson",-1),U=(0,a.Wm)("p",null," Start Date",-1),C={class:"q-ml-sm"};function A(e,t,s,A,D,L){const Z=(0,a.up)("q-btn"),x=(0,a.up)("q-btn-group"),Q=(0,a.up)("q-item-section"),$=(0,a.up)("q-item"),Y=(0,a.up)("q-separator"),M=(0,a.up)("q-item-label"),P=(0,a.up)("q-icon"),E=(0,a.up)("q-input"),B=(0,a.up)("q-card-section"),N=(0,a.up)("q-card"),I=(0,a.up)("q-table"),T=(0,a.up)("q-responsive"),H=(0,a.up)("q-editor"),S=(0,a.up)("q-card-actions"),O=(0,a.up)("q-dialog"),F=(0,a.up)("q-date"),R=(0,a.up)("q-avatar"),G=(0,a.up)("q-page"),J=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(G,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",i,[(0,a.Wm)("div",r,[(0,a.Wm)(N,{flat:"",bordered:"",class:"col"},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",n,[(0,a.Wm)(x,{push:""},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{color:"red",glossy:"","text-color":"black",push:"",label:"Delete Lesson",icon:"verified_user",onClick:t[1]||(t[1]=e=>L.Delete())}),(0,a.Wm)(Z,{color:"yellow-14",glossy:"","text-color":"black",push:"",label:"Add Activitie",icon:"verified_user",onClick:t[2]||(t[2]=e=>L.AddActivity())})])),_:1})])])),_:1})])),_:1}),(0,a.Wm)(Y),(0,a.Wm)(T,{ratio:1/3},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",o,[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(M,{class:"text-subtitle1"},{default:(0,a.w5)((()=>[m,d,(0,a.Uk)(" "+(0,l.zw)(D.lesson.numeroclase)+" ",1),u,c,p,(0,a.Uk)(" "+(0,l.zw)(D.lesson.nombre)+" ",1),h,j,(0,a.Wm)(M,{class:"text-subtitle1",innerHTML:D.lesson.descripcion},null,8,["innerHTML"]),g,(0,a.Uk)(" Date: "+(0,l.zw)(L.ArreglarFecha(D.lesson.fecha_inicio)),1)])),_:1})])),_:1}),(0,a.Wm)(Q,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{size:"12px",flat:"",dense:"",round:"",icon:"edit",onClick:t[3]||(t[3]=e=>L.Edit())})])),_:1})])),_:1}),(0,a.Wm)(I,{grid:"",title:"Activities's Class",rows:D.rowsactivity,columns:D.columnsactivity,"row-key":"name",filter:A.filter1,"hide-header":"","margin-right":"200px"},{"top-right":(0,a.w5)((()=>[(0,a.Wm)(E,{borderless:"",dense:"",rounded:"",outlined:"",debounce:"300",modelValue:A.filter1,"onUpdate:modelValue":t[4]||(t[4]=e=>A.filter1=e),placeholder:"Search"},{append:(0,a.w5)((()=>[(0,a.Wm)(P,{name:"search"})])),_:1},8,["modelValue"])])),item:(0,a.w5)((e=>[(0,a.Wm)("div",f,[(0,a.Wm)(N,{onClick:t=>L.IrComplemento(e.row.id)},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)("strong",null,"Number: "+(0,l.zw)(e.row.numero),1)])),_:2},1024),(0,a.Wm)(Y),(0,a.Wm)(B,{class:"flex flex-rigth",style:{fontSize:"15px"}},{default:(0,a.w5)((()=>[b,y,(0,a.Uk)(" "+(0,l.zw)(e.row.nombre)+" ",1),v,w,(0,a.Wm)(M,{class:"text-subtitle1",innerHTML:e.row.descripcion},null,8,["innerHTML"]),W])),_:2},1024)])),_:2},1032,["onClick"])])])),_:1},8,["rows","columns","filter"])])])),_:1})])),_:1})])),_:1})])]),(0,a.Wm)(O,{modelValue:D.promptdateactivity,"onUpdate:modelValue":t[9]||(t[9]=e=>D.promptdateactivity=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)("div",k,[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[z])),_:1}),(0,a.Wm)(B,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{ref:"numeroactividad",filled:"",type:"number",modelValue:D.numeroactividad,"onUpdate:modelValue":t[5]||(t[5]=e=>D.numeroactividad=e),label:"Number of Activity *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type number of Activity",e=>e>-1&&e<1e5||"Please type a real number"]},null,8,["modelValue","rules"]),(0,a.Wm)(E,{ref:"nombreactivity",filled:"",modelValue:D.nombreactivity,"onUpdate:modelValue":t[6]||(t[6]=e=>D.nombreactivity=e),label:"Activity' Name ","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),_,(0,a.Wm)(H,{modelValue:D.editoractivity,"onUpdate:modelValue":t[7]||(t[7]=e=>D.editoractivity=e),"min-height":"5rem"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(S,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Cancel"},null,512),[[J]]),(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Add Activity",onClick:t[8]||(t[8]=e=>L.AddActividad())},null,512),[[J]])])),_:1})])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(O,{modelValue:D.prompt,"onUpdate:modelValue":t[16]||(t[16]=e=>D.prompt=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{style:{"min-width":"450px"}},{default:(0,a.w5)((()=>[(0,a.Wm)("div",q,[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[V])),_:1}),(0,a.Wm)(B,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{ref:"numeroclase",filled:"",type:"number",modelValue:D.numeroclase,"onUpdate:modelValue":t[10]||(t[10]=e=>D.numeroclase=e),label:"Number' Lesson *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type number of Lesson",e=>e>-1&&e<1e5||"Please type a real number"]},null,8,["modelValue","rules"]),(0,a.Wm)(E,{ref:"tema",filled:"",modelValue:D.tema,"onUpdate:modelValue":t[11]||(t[11]=e=>D.tema=e),label:"Topic","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,a.Wm)(H,{modelValue:D.descripcion,"onUpdate:modelValue":t[12]||(t[12]=e=>D.descripcion=e),"min-height":"5rem"},null,8,["modelValue"]),(0,a.Wm)(E,{ref:"nota",filled:"",type:"number",modelValue:D.nota,"onUpdate:modelValue":t[13]||(t[13]=e=>D.nota=e),label:"Qualification *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type Qualification",e=>e>-1&&e<1e5||"Please type a real number"]},null,8,["modelValue","rules"]),U,(0,a.Wm)(F,{modelValue:D.date,"onUpdate:modelValue":t[14]||(t[14]=e=>D.date=e),minimal:""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(S,{align:"center",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Cancel"},null,512),[[J]]),(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Add Lesson",onClick:t[15]||(t[15]=e=>L.EditClase())},null,512),[[J]])])),_:1})])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(O,{modelValue:D.confirm,"onUpdate:modelValue":t[18]||(t[18]=e=>D.confirm=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B,{class:"row items-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),(0,a.Wm)("span",C,"You are shure to delete this lesson "+(0,l.zw)(D.mensajeborrar),1)])),_:1}),(0,a.Wm)(S,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Cancel",color:"primary"},null,512),[[J]]),(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Delete",color:"red",onClick:t[17]||(t[17]=e=>L.BorrarClase())},null,512),[[J]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var D=s(1959),L=s(5474),Z=s(3824),x=s.n(Z),Q=s(3855),$=s(1488),Y=s.n($);s(4434);const M={setup(){return{filter1:(0,D.iH)(""),filter2:(0,D.iH)(""),filter3:(0,D.iH)("")}},data(){return{rowsactivity:[],activities:[],promptdateactivity:!1,numeroactividad:"",nombreactivity:"",editoractivity:"",columnsactivity:[{name:"desc",required:!0,label:"Course",align:"left",field:e=>e.numero,format:e=>`${e}`,sortable:!0},{name:"nombre",align:"center",label:"Nombre",field:"nombre",sortable:!0},{name:"descripcion",align:"center",label:"Descripcion",field:"descripcion",sortable:!0},{name:"id",field:"id"}],lesson:{id:"",nombre:"",descripcion:"",numeroclase:0,fecha_inicio:Date.now()},prompt:!1,numeroclase:1,tema:"",descripcion:"",nota:"",confirm:!1,mensajeborrar:"",date:Y()(new Date(Date.now())).format("YYYY/MM/DD")}},computed:{userLogged(){return x().read(Q.Z.getUserLogged()).claim.username},getAdmin(){let e=x().read(Q.Z.getUserLogged()).claim.roles,t=0;for(let s=0;s<e.length;s++)"PROFESOR"==e[s]&&t++;return t>=1}},mounted(){this.CargarDatos()},methods:{AddActivity(){this.numeroactividad="",this.nombreactivity="",this.editoractivity="",this.promptdateactivity=!0},async CargarDatos(){this.date=Y()(this.lesson.fecha_inicio).format("YYYY/MM/DD"),this.rowsactivity=[],await L.api.get("/actividad/allbyIdClase/"+this.$route.params.clasid,{headers:{Authorization:`Bearer ${Q.Z.getUserLogged()}`}}).then((e=>this.activities=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message}))),await L.api.get("/clase/"+this.$route.params.clasid,{headers:{Authorization:`Bearer ${Q.Z.getUserLogged()}`}}).then((e=>this.lesson=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message})));for(let e=0;e<this.activities.length;e++)this.rowsactivity.push({nombre:this.activities[e].nombre,numero:this.activities[e].numero,descripcion:this.activities[e].descripcion,id:this.activities[e].id})},IrComplemento(e){1==this.getAdmin?this.$router.push({path:"/Complemento/"+e,params:{idactividad:e}}):this.$router.push({path:"/Error404"})},async AddActividad(){await L.api.post("actividad",{numero:this.numeroactividad,nombre:this.nombreactivity,descripcion:this.editoractivity,clase:this.$route.params.clasid},{headers:{Authorization:`Bearer ${Q.Z.getUserLogged()}`}}).then((e=>this.activities=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message}))),this.rowsactivity=[],await this.CargarDatos(),this.clase="",this.numeroactividad="",this.nombreactivity="",this.editoractivity=""},Edit(){this.prompt=!0,this.numeroclase=this.lesson.numeroclase,this.tema=this.lesson.nombre,this.descripcion=this.lesson.descripcion,this.nota=this.lesson.nota,this.date=Y()(this.lesson.fecha_inicio).format("YYYY/MM/DD")},Delete(){this.confirm=!0,this.mensajeborrar=this.lesson.nombre},async BorrarClase(){let e;await L.api.delete("/clase/"+this.$route.params.clasid,{headers:{Authorization:`Bearer ${Q.Z.getUserLogged()}`}}).then((t=>(e=t.data,this.$q.notify({type:"positive",message:"Lesson was delete"})))).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message}))),this.$router.push({path:"/Lessons/"+e.modulo.id,params:{idmodulo:e.modulo.id}})},async EditClase(){await L.api.patch("/clase",{id:this.$route.params.clasid,numeroclase:this.numeroclase,nombre:this.tema,descripcion:this.descripcion,nota:this.nota,fecha_inicio:this.date},{headers:{Authorization:`Bearer ${Q.Z.getUserLogged()}`}}).then((e=>this.clase=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message}))),await this.CargarDatos(),this.prompt=!1,this.numeroclase="",this.tema="",this.descripcion="",this.nota="",this.date=(new Date).now,this.idclase=""},ArreglarFecha(e){return Y()(e).format("YYYY/MM/DD")}}};var P=s(4379),E=s(151),B=s(3414),N=s(2035),I=s(6375),T=s(2165),H=s(5869),S=s(7050),O=s(5589),F=s(2350),R=s(955),G=s(4842),J=s(4554),K=s(6778),X=s(7662),ee=s(9367),te=s(5836),se=s(5096),ae=s(677),le=s(7518),ie=s.n(le);M.render=A;const re=M;ie()(M,"components",{QPage:P.Z,QCard:E.Z,QItem:B.Z,QItemSection:N.Z,QBtnGroup:I.Z,QBtn:T.Z,QSeparator:H.Z,QResponsive:S.Z,QCardSection:O.Z,QItemLabel:F.Z,QTable:R.Z,QInput:G.Z,QIcon:J.Z,QDialog:K.Z,QEditor:X.Z,QCardActions:ee.Z,QDate:te.Z,QAvatar:se.Z}),ie()(M,"directives",{ClosePopup:ae.Z})},6700:(e,t,s)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=i,e.exports=l,l.id=6700}}]);