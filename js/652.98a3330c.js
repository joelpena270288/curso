(self["webpackChunktraining"]=self["webpackChunktraining"]||[]).push([[652],{3855:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var a=t(52),r=t.n(a),o=t(2599),n=t.n(o);const l="http://ec2-18-118-101-31.us-east-2.compute.amazonaws.com/api/auth/",d={setUserLogged(e){n().set("userLogged",e)},getUserLogged(){return n().get("userLogged")},register(e,s){const t={username:e,password:s};return r().post(l+"regiser",t)},login(e,s){const t={username:e,password:s};return r().post(l+"signin",t)},deleteUserLogged(){n().remove("userLogged")}}},652:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>C});t(7280),t(5363);var a=t(3673),r=t(8880);const o=(0,a.HX)("data-v-321c6c7d");(0,a.dD)("data-v-321c6c7d");const n={class:"column q-pa-lg"},l={class:"row"},d=(0,a.Wm)("h4",{class:"text-h5 text-white q-my-md"},"Sign In ",-1),u={class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)"}},i=(0,a.Wm)("p",{class:"text-grey-6"},"Forgot your password?",-1);(0,a.Cn)();const c=o(((e,s,t,c,m,p)=>{const g=(0,a.up)("q-btn"),h=(0,a.up)("q-card-section"),w=(0,a.up)("q-icon"),f=(0,a.up)("q-input"),q=(0,a.up)("q-form"),W=(0,a.up)("q-card-actions"),b=(0,a.up)("q-card"),v=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(v,{class:"window-height window-width row justify-center items-center"},{default:o((()=>[(0,a.Wm)("div",n,[(0,a.Wm)("div",l,[(0,a.Wm)(b,{square:"",class:"shadow-24",style:{width:"300px",height:"500px"}},{default:o((()=>[(0,a.Wm)(h,{class:"bg-deep-purple-7"},{default:o((()=>[d,(0,a.Wm)("div",u,[(0,a.Wm)(g,{fab:"",icon:"add",color:"blue-4",onClick:s[1]||(s[1]=s=>e.$router.replace("/signup"))})])])),_:1}),(0,a.Wm)(h,null,{default:o((()=>[(0,a.Wm)(q,{class:"q-px-sm q-pt-xl",onSubmit:(0,r.iM)(p.login,["prevent"])},{default:o((()=>[(0,a.Wm)(f,{square:"",clearable:"",modelValue:m.username,"onUpdate:modelValue":s[2]||(s[2]=e=>m.username=e),type:"email",label:"Username"},{prepend:o((()=>[(0,a.Wm)(w,{name:"person"})])),_:1},8,["modelValue"]),(0,a.Wm)(f,{square:"",clearable:"",modelValue:m.password,"onUpdate:modelValue":s[3]||(s[3]=e=>m.password=e),type:"password",label:"Password"},{prepend:o((()=>[(0,a.Wm)(w,{name:"lock"})])),_:1},8,["modelValue"])])),_:1},8,["onSubmit"])])),_:1}),(0,a.Wm)(W,{class:"q-px-lg"},{default:o((()=>[(0,a.Wm)(g,{unelevated:"",size:"lg",color:"blue-4",class:"full-width text-white",label:"Sign In",onClick:s[4]||(s[4]=e=>p.login())})])),_:1}),(0,a.Wm)(h,{class:"text-center q-pa-sm"},{default:o((()=>[i])),_:1})])),_:1})])])])),_:1})}));t(5474),t(4434);var m=t(3824),p=t.n(m),g=t(3855);const h={name:"Login",methods:{auth(e){this.$hello(e).login({scope:"friends"}).then((()=>{this.$router.push("profile")}))},async login(){try{const e=await g.Z.login(this.username,this.password);if(e){let s=0,t=p().read(e.data.token);t.claim.roles,g.Z.setUserLogged(e.data.token);for(let e=0;e<t.claim.roles.length;e++)"ADMIN"===t.claim.roles[e]&&s++;s>0&&this.$router.push("/Administracion")}else this.$router.push("/")}catch(e){"INACTIVE"===e.response.data.message?this.$router.push({path:"/Codigo/"+this.username,params:{username:this.username}}):this.$q.notify({type:"negative",message:e.response.data.message})}}},data(){return{email:"",username:"",password:""}}};var w=t(4379),f=t(151),q=t(5589),W=t(2165),b=t(5269),v=t(4842),y=t(4554),Z=t(9367),_=t(7518),x=t.n(_);h.render=c,h.__scopeId="data-v-321c6c7d";const C=h;x()(h,"components",{QPage:w.Z,QCard:f.Z,QCardSection:q.Z,QBtn:W.Z,QForm:b.Z,QInput:v.Z,QIcon:y.Z,QCardActions:Z.Z})}}]);