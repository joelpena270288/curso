(self["webpackChunktraining"]=self["webpackChunktraining"]||[]).push([[662],{3855:(e,a,t)=>{"use strict";t.d(a,{Z:()=>d});var s=t(52),l=t.n(s),i=t(2599),o=t.n(i);const n="api/auth/",d={setUserLogged(e){o().set("userLogged",e)},getUserLogged(){return o().get("userLogged")},register(e,a){const t={username:e,password:a};return l().post(n+"regiser",t)},login(e,a){const t={username:e,password:a};return l().post(n+"signin",t)},deleteUserLogged(){o().remove("userLogged")}}},5662:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>N});t(71);var s=t(3673),l=t(2323);const i={class:"q-pa-md"},o={class:"q-gutter-y-md",style:{"max-width":"1600px"}},n={class:"row items-start q-gutter-md"},d={class:"colunm items-start q-gutter-md"},r={class:"text-subtitle2"},m={class:"text-subtitle2"},u={class:"text-subtitle2"},p={class:"text-subtitle2"},g={class:"colunm items-start q-gutter-md"},c=(0,s.Wm)("span",{class:"material-icons",style:{width:"40px"}}," photo_camera ",-1),h={class:"row items-start q-gutter-md"},f={class:"row items-start q-gutter-md"},W={class:"text-subtitle2"},w=(0,s.Wm)("div",{class:"text-h6"},"Edit Education",-1),b=(0,s.Wm)("div",{class:"q-pa-md",style:{"min-height":"200px"}},null,-1);function y(e,a,t,y,x,v){const q=(0,s.up)("q-tab"),_=(0,s.up)("q-tabs"),V=(0,s.up)("q-separator"),U=(0,s.up)("q-avatar"),Z=(0,s.up)("q-btn"),z=(0,s.up)("q-item-section"),Q=(0,s.up)("q-item"),L=(0,s.up)("q-card-section"),C=(0,s.up)("q-responsive"),E=(0,s.up)("q-input"),$=(0,s.up)("q-select"),k=(0,s.up)("q-card-actions"),I=(0,s.up)("q-card"),P=(0,s.up)("q-dialog"),S=(0,s.up)("q-tab-panel"),A=(0,s.up)("q-tab-panels"),B=(0,s.up)("q-page"),T=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(B,{padding:""},{default:(0,s.w5)((()=>[(0,s.Wm)("div",i,[(0,s.Wm)("div",o,[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{modelValue:x.tab,"onUpdate:modelValue":a[1]||(a[1]=e=>x.tab=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{name:"personal",label:"Personal Information"}),(0,s.Wm)(q,{name:"education",label:"Education"}),(0,s.Wm)(q,{name:"interesting",label:"Interesting"})])),_:1},8,["modelValue"]),(0,s.Wm)(V),(0,s.Wm)(A,{modelValue:x.tab,"onUpdate:modelValue":a[14]||(a[14]=e=>x.tab=e),animated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{name:"personal"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{ratio:4},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"border-radius-inherit flex flex-right bg-grey-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)("div",n,[(0,s.Wm)(U,{size:"150px"},{default:(0,s.w5)((()=>[(0,s.Wm)("img",{src:x.datosmios.details.photo},null,8,["src"])])),_:1}),(0,s.Wm)("div",d,[(0,s.Wm)("div",r,"Name: "+(0,l.zw)(x.datosmios.details.name),1),(0,s.Wm)("div",m,"Last Name: "+(0,l.zw)(x.datosmios.details.lastname),1),(0,s.Wm)("div",u,"Age: "+(0,l.zw)(x.datosmios.details.age),1),(0,s.Wm)("div",p,"Sex: "+(0,l.zw)(x.datosmios.details.sex),1)]),(0,s.Wm)(z,{side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)("div",g,[(0,s.Wm)(Z,{size:"12px",flat:"",dense:"",round:"",icon:"edit",onClick:a[2]||(a[2]=e=>v.EditUser())})])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(P,{modelValue:x.prompbasicinfo,"onUpdate:modelValue":a[9]||(a[9]=e=>x.prompbasicinfo=e),persistent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{style:{"min-width":"350px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"text-primary"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{size:"150px"},{default:(0,s.w5)((()=>[(0,s.Wm)("img",{src:x.foto},null,8,["src"])])),_:1}),(0,s.Wm)("div",null,[c,(0,s.Wm)("input",{type:"file",accept:"image/jpeg",onChange:a[3]||(a[3]=(...e)=>v.uploadImage&&v.uploadImage(...e))},null,32)]),(0,s.Wm)(E,{ref:"name",filled:"",modelValue:x.nombre,"onUpdate:modelValue":a[4]||(a[4]=e=>x.nombre=e),label:"Your name ","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,s.Wm)(E,{ref:"lastname",filled:"",modelValue:x.lastname,"onUpdate:modelValue":a[5]||(a[5]=e=>x.lastname=e),label:"Your Last Name ","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,s.Wm)(E,{ref:"age",filled:"",type:"number",modelValue:x.age,"onUpdate:modelValue":a[6]||(a[6]=e=>x.age=e),label:"Your age *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your age",e=>e>18&&e<100||"Please type a real age"]},null,8,["modelValue","rules"]),(0,s.Wm)($,{clearable:"",filled:"",modelValue:x.sexo,"onUpdate:modelValue":a[7]||(a[7]=e=>x.sexo=e),options:x.optionssexo,label:"Sex"},null,8,["modelValue","options"])])),_:1}),(0,s.Wm)(k,{align:"right",class:"text-primary"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(Z,{flat:"",color:"green",label:"Cancel"},null,512),[[T]]),(0,s.wy)((0,s.Wm)(Z,{flat:"",color:"blue",label:"Save",onClick:a[8]||(a[8]=e=>v.EditarUsuario())},null,512),[[T]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(S,{name:"education"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{ratio:4},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"border-radius-inherit flex flex-right bg-grey-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(z,{side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)("div",h,[(0,s.Wm)("div",f,[(0,s.Wm)("div",W,(0,l.zw)(x.datosmios.details.education),1),(0,s.Wm)(Z,{size:"12px",flat:"",dense:"",round:"",icon:"edit",onClick:a[10]||(a[10]=e=>v.EditEducation())})])])])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(P,{modelValue:x.promptpersonaleducation,"onUpdate:modelValue":a[13]||(a[13]=e=>x.promptpersonaleducation=e),persistent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{style:{"min-width":"350px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(L,{class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{filled:"",modelValue:x.modeleducation,"onUpdate:modelValue":a[11]||(a[11]=e=>x.modeleducation=e),label:"Education Level",options:x.stringOptions,style:{width:"350px"},behavior:"menu"},null,8,["modelValue","options"])])),_:1}),(0,s.Wm)(k,{align:"right",class:"text-primary"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(Z,{flat:"",label:"Cancel"},null,512),[[T]]),(0,s.wy)((0,s.Wm)(Z,{flat:"",label:"Save",onClick:a[12]||(a[12]=e=>v.EditarUsuario())},null,512),[[T]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(S,{name:"interesting"},{default:(0,s.w5)((()=>[b])),_:1})])),_:1},8,["modelValue"])])),_:1})])])])),_:1})}var x=t(5474),v=t(3824),q=t.n(v),_=t(3855);t(4434);const V={data(){return{tab:"personal",nombre:"",lastname:"",age:"",sex:"",sexo:"Male",modeleducation:null,intereses:"",optionssexo:["Male","Famele"],stringOptions:["High school degree","College degree","Masters degree","Doctoral degree","Postgraduate degree"],foto:"",datosmios:{details:{name:"",photo:"",lastname:"",age:0,sex:"",education:""}},prompbasicinfo:!1,previewImage:null,promptpersonaleducation:!1}},mounted(){this.CargarUsuario()},methods:{checkFileSize(e){return e.filter((e=>e.size<2048))},checkFileType(e){return e.filter((e=>"image/png"===e.type))},onRejected(e){this.$q.notify({type:"negative",message:`${e.length} file(s) did not pass validation constraints`})},onSubmit(){},async CargarUsuario(){await x.api.get("users/mi",{headers:{Authorization:`Bearer ${_.Z.getUserLogged()}`}}).then((e=>this.datosmios=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message})))},EditUser(){this.nombre=this.datosmios.details.name,this.lastname=this.datosmios.details.lastname,this.age=this.datosmios.details.age,this.sexo=this.datosmios.details.sex,this.foto=this.datosmios.details.photo,this.prompbasicinfo=!0},async EditEducation(){this.modeleducation=this.datosmios.details.education,this.promptpersonaleducation=!0,await x.api.get("users/mi",{headers:{Authorization:`Bearer ${_.Z.getUserLogged()}`}}).then((e=>this.datosmios=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message})))},uploadImage(e){const a=e.target.files[0],t=new FileReader;t.readAsDataURL(a),t.onload=e=>{this.foto=e.target.result}},async EditarUsuario(){await x.api.post("/users/adddetail",{name:this.nombre,lastname:this.lastname,sex:this.sexo,age:this.age,photo:this.foto,education:this.modeleducation,intereses:this.interesting},{headers:{Authorization:`Bearer ${_.Z.getUserLogged()}`}});await x.api.get("users/mi",{headers:{Authorization:`Bearer ${_.Z.getUserLogged()}`}}).then((e=>this.datosmios=e.data)).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message})))}},computed:{userLogged(){return q().read(_.Z.getUserLogged()).claim.username}},async Inicio(){await x.api.get("users/mi",{headers:{Authorization:`Bearer ${_.Z.getUserLogged()}`}}).then((e=>(this.datosmios=e.data,this.foto=e.data.photo))).catch((e=>this.$q.notify({type:"negative",message:e.response.data.message})))}};var U=t(4379),Z=t(151),z=t(7547),Q=t(3269),L=t(5869),C=t(5906),E=t(6602),$=t(7050),k=t(5589),I=t(3414),P=t(2035),S=t(5096),A=t(2165),B=t(6778),T=t(4842),j=t(8516),F=t(9367),R=t(677),D=t(7518),M=t.n(D);V.render=y;const N=V;M()(V,"components",{QPage:U.Z,QCard:Z.Z,QTabs:z.Z,QTab:Q.Z,QSeparator:L.Z,QTabPanels:C.Z,QTabPanel:E.Z,QResponsive:$.Z,QCardSection:k.Z,QItem:I.Z,QItemSection:P.Z,QAvatar:S.Z,QBtn:A.Z,QDialog:B.Z,QInput:T.Z,QSelect:j.Z,QCardActions:F.Z}),M()(V,"directives",{ClosePopup:R.Z})}}]);