(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-23fc51f5":"07f77ee6","chunk-279c5179":"1654b804","chunk-5c898379":"029a777d","chunk-a166c28e":"69280d6a","chunk-f6ed4226":"e8feb092","chunk-fb5305da":"beaf8012"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-23fc51f5":1,"chunk-279c5179":1,"chunk-5c898379":1,"chunk-a166c28e":1,"chunk-f6ed4226":1,"chunk-fb5305da":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-23fc51f5":"09fab1d5","chunk-279c5179":"09fab1d5","chunk-5c898379":"09fab1d5","chunk-a166c28e":"09fab1d5","chunk-f6ed4226":"09fab1d5","chunk-fb5305da":"09fab1d5"}[t]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete o[t],m.parentNode.removeChild(m),n(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/social-dashboard/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"111a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.component?n(t.component,{tag:"component",attrs:{data:t.data}}):t._e()},o=[],r={name:"dynamic",props:["data","type","network"],data:function(){return{component:null}},computed:{loader:function(){var t=this;return this.type?function(){return n("ce68")("./"+t.network+"/"+t.type)}:null}},mounted:function(){var t=this;this.loader().then(function(){t.component=function(){return t.loader()}}).catch(function(){t.component=function(){return n.e("chunk-fb5305da").then(n.bind(null,"b8d3"))}})}},i=r,s=n("2877"),l=Object(s["a"])(i,a,o,!1,null,null,null);e["default"]=l.exports},"393c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{staticClass:"w100",attrs:{type:t.type,loading:t.loading,size:"small"},on:{click:function(e){return t.auth(t.type)}}},[n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{icon:["fab",t.type]}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" ")]),t._v("Entrar con "+t._s(t.type))],1)],1)},o=[],r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("dc59")),i=r["a"].firestore(),s={props:["type"],name:"myLogin",data:function(){return{response:"",test:[],config:{}}},computed:{loading:function(){return this.$store.getters.loading(this.type)}},methods:{auth:function(t){switch(this.$store.commit("SET_LOADING",{client:this.type,status:!0}),t){case"instagram":console.log("Aun no :(");break;case"google":this.signIn(t,new r["a"].auth.GoogleAuthProvider);break;case"twitter":this.signIn(t,new r["a"].auth.TwitterAuthProvider);break;case"facebook":var e=new r["a"].auth.FacebookAuthProvider;e.addScope("user_birthday"),this.signIn(t,e);break}},signIn:function(t,e){var n=this;r["a"].auth().currentUser.linkWithPopup(e).then(function(t){var e={token:t.credential.accessToken,secret:t.credential.secret,user:t.user};console.log(e),n.$store.dispatch("appendCredentials",{client:"twitter",credentials:e}),n.$store.commit("SET_LOADING",{client:n.type,status:!1})}).catch(function(t){console.log(t)})}},firestore:function(){return{test:i.collection("test")}}},l=s,c=(n("3980"),n("2877")),u=Object(c["a"])(l,a,o,!1,null,"69dcf29f",null);e["default"]=u.exports},3980:function(t,e,n){"use strict";var a=n("eaf5"),o=n.n(a);o.a},3999:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.page,{tag:"component"},[n("router-view")],1)],1)},r=[],i=(n("28a5"),n("5d73")),s=n.n(i),l=n("dc59"),c=l["a"].firestore(),u={computed:{user:function(){return this.$store.getters.user},page:function(){return console.log(this.$route),(this.$route.meta.layout||"sidebar")+"-layout"}},data:function(){return{layout:[]}},mounted:function(){var t=this;console.log("loaded App"),this.$store.commit("SET_LOADING",!0),l["a"].auth().onAuthStateChanged(function(e){if(e){t.$store.commit("SET_USER",e);var n=!0,a=!1,o=void 0;try{for(var r,i=s()(e.providerData);!(n=(r=i.next()).done);n=!0){var l=r.value,u=l.providerId.split(".")[0];"password"!=u&&(t.$store.commit("SET_STATUS",{client:u,status:!0}),t.$store.commit("SET_DATA",{client:u,provider:l}))}}catch(d){a=!0,o=d}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}t.$store.commit("SET_LOADING",!1),c.collection("layouts").doc(e.uid).get().then(function(e){var n=e.data();t.$store.commit("SET_LAYOUT",n.layout)})}})}},d=u,m=(n("034f"),n("2877")),p=Object(m["a"])(d,o,r,!1,null,null,null),f=p.exports,h=n("8c4f"),v=n("59ca"),g=n.n(v),b=(n("ea7b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"features"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section-title"},[t._v("Características")]),n("el-row",{attrs:{gutter:20}},[n("el-col",{staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("img",{attrs:{src:"undraw_savings_hjfl.svg"}}),n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("Descripción corta del item.")])]),n("el-col",{staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("img",{attrs:{src:"undraw_visual_data_b1wx.svg"}}),n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("Descripción corta del item.")])]),n("el-col",{staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("img",{attrs:{src:"undraw_dashboard_nklg.svg"}}),n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("Descripción corta del item.")])]),n("el-col",{staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("img",{attrs:{src:"undraw_social_dashboard_k3pt.svg"}}),n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("Descripción corta del item.")])]),n("el-col",{staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("img",{attrs:{src:"undraw_data_xmfy.svg"}}),n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("Descripción corta del item.")])]),n("el-col",{staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("img",{attrs:{src:"undraw_teacher_35j2.svg"}}),n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("Descripción corta del item.")])])],1)],1)]),n("section",{staticClass:"big"},[n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{staticClass:"has-text",attrs:{xs:24,sm:12,md:16,lg:16,xl:16}},[n("div",{staticClass:"text"},[n("h3",[t._v("Section title")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus est, posuere et dolor ac, sagittis venenatis justo. Nam sed velit a massa tempor vestibulum ac a urna.")])])]),n("el-col",{staticClass:"has-img hidden-xs-only",attrs:{xs:24,sm:12,md:8,lg:8,xl:16}},[n("img",{attrs:{src:"undraw_chatting_2yvo.svg"}})])],1)],1)]),n("section",{staticClass:"big"},[n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{staticClass:"has-img hidden-xs-only",attrs:{xs:24,sm:12,md:8,lg:8,xl:16}},[n("img",{attrs:{src:"undraw_real-time_sync_o57k.svg"}})]),n("el-col",{staticClass:"has-text",attrs:{xs:24,sm:12,md:16,lg:16,xl:16}},[n("div",{staticClass:"text"},[n("h3",[t._v("Section title")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus est, posuere et dolor ac, sagittis venenatis justo. Nam sed velit a massa tempor vestibulum ac a urna.")])])])],1)],1)]),n("section",{staticClass:"big"},[n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{staticClass:"has-text",attrs:{xs:24,sm:12,md:16,lg:16,xl:16}},[n("div",{staticClass:"text"},[n("h3",[t._v("Section title")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus est, posuere et dolor ac, sagittis venenatis justo. Nam sed velit a massa tempor vestibulum ac a urna.")])])]),n("el-col",{staticClass:"has-img hidden-xs-only",attrs:{xs:24,sm:12,md:8,lg:8,xl:16}},[n("img",{attrs:{src:"undraw_mail_2_tqip.svg"}})])],1)],1)]),n("section",{staticClass:"last-cta"},[n("h2",{staticClass:"title"},[t._v("Hola")]),n("h3",{staticClass:"subtitle"},[t._v("Mundo")]),n("el-button",{attrs:{type:"success",round:""}},[t._v("Call to action")])],1)])}),_=[],y=(n("fdef"),{}),w=Object(m["a"])(y,b,_,!1,null,"0d4f3021",null),S=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont"},[n("el-card",[""!=t.error?n("el-alert",{attrs:{title:t.error,type:"error",closable:!1,"show-icon":""}}):t._e(),t.onSignIn?n("h1",[t._v("Sign in")]):n("h1",[t._v("Sign up")]),t.onSignIn?n("el-form",{attrs:{"label-position":"top"},nativeOn:{submit:function(e){return e.preventDefault(),t.doLogin(e)}}},[n("el-form-item",{attrs:{label:"Email"}},[n("el-input",{attrs:{placeholder:"Ej: email@domain.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("el-form-item",{attrs:{label:"Password"}},[n("el-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("el-form-item",{staticStyle:{margin:"0"}},[n("el-button",{attrs:{type:"success"},on:{click:t.doLogin}},[t._v("Sign in")]),n("el-button",{attrs:{type:"text"},on:{click:t.changeStatus}},[t._v("Sign up")])],1)],1):n("el-form",{attrs:{"label-position":"top"},nativeOn:{submit:function(e){return e.preventDefault(),t.doRegister(e)}}},[n("el-form-item",{attrs:{label:"Email"}},[n("el-input",{attrs:{placeholder:"Ej: email@domain.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("el-form-item",{attrs:{label:"Password"}},[n("el-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("el-form-item",{staticStyle:{margin:"0"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.doRegister}},[t._v("Sign up")]),n("el-button",{attrs:{type:"text"},on:{click:t.changeStatus}},[t._v("Sign in")])],1)],1)],1)],1)},k=[],C=l["a"].firestore(),T={name:"login",data:function(){return{onSignIn:!0,error:"",email:"fernando.delarosa@questionpro.com",password:"au6YJtseRH"}},methods:{changeStatus:function(){this.email="",this.password="",this.onSignIn=!this.onSignIn},doRegister:function(){var t=this;l["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){console.log(e),C.collection("layouts").doc(e.user.uid).set({layout:[],created:new Date,updated:new Date}),t.$router.push({name:"app"})}).catch(function(e){t.error=e.message})},doLogin:function(){var t=this;l["a"].auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push({name:"app"})}).catch(function(e){t.error=e.message})}}},E=T,A=(n("d6db"),Object(m["a"])(E,x,k,!1,null,null,null)),O=A.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"margin-bottom":"1rem"}},[n("el-button",{on:{click:function(e){t.dialogVisible=!0}}},[t._v("Add Widget")]),t.layout.length>0?n("el-button",{on:{click:t.reset}},[t._v("Reset Layout")]):t._e(),t.layout.length>0?n("el-button",{on:{click:t.update}},[t._v("Update Data Sources")]):t._e()],1),n("el-dialog",{attrs:{title:"Add Widget",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[t._l(t.notProviders,function(t){return n("div",{staticStyle:{"margin-bottom":"1rem"}},[n("my-login",{attrs:{type:t}})],1)}),n("hr",{staticStyle:{"margin-bottom":"0"}}),t._l(t.providers,function(e,a){return n("el-collapse-item",{staticStyle:{"margin-bottom":"1rem"},attrs:{title:e.name,name:a+1}},[n("el-table",{attrs:{data:t.componentList[e.name]}},[n("el-table-column",{attrs:{type:"index",label:"#"}}),n("el-table-column",{attrs:{prop:"name",label:"Nombre",width:"120"}}),n("el-table-column",{attrs:{prop:"desc",label:"Descripción"}}),n("el-table-column",{attrs:{label:"Opciones",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.addWidget(e.row.component)}}},[t._v("Agregar")])]}}])})],1)],1)})],2)],1),!t.loading&&t.layout.length>0?n("div",[n("grid-layout",{attrs:{layout:t.layout,"row-height":90,responsive:!1,"use-css-transforms":!1},on:{"update:layout":function(e){t.layout=e},"layout-updated":t.layoutUpdated}},t._l(t.layout,function(t,e){return n("grid-item",{key:e,attrs:{x:t.x,y:t.y,w:t.w,h:t.h,i:t.i}},[n("dynamic",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"item.loading"}],attrs:{type:t.component,network:t.network}})],1)}),1)],1):t._e()],1)},D=[],j=n("cebc"),L=n("2f62"),I=n("393c"),P=n("111a"),F=n("7be8"),N=n.n(F),U=(l["a"].firestore(),{components:{myLogin:I["default"],Dynamic:P["default"],GridLayout:N.a.GridLayout,GridItem:N.a.GridItem},name:"app",data:function(){return{dialogVisible:!1,loading:!1,user:null,activeNames:[],apps:["instagram","google","twitter","facebook"],componentList:{twitter:[{name:"Followers",desc:"Muestra el numero de followers",component:{component:"FollowersCount",network:"twitter",hidden:!1,pinned:!1,x:0,y:0,w:2,h:1}},{name:"Following",desc:"Muestra el numero de following",component:{component:"FollowingCount",network:"twitter",hidden:!1,pinned:!1,x:0,y:0,w:2,h:1}},{name:"Tweets",desc:"Muestra el numero de tweets",component:{component:"TweetsCount",network:"twitter",hidden:!1,pinned:!1,x:0,y:0,w:2,h:1}},{name:"Favoritos",desc:"Muestra el numero de tweets marcados como favorito",component:{component:"FavouritesCount",network:"twitter",hidden:!1,pinned:!1,x:0,y:0,w:2,h:1}}]}}},computed:Object(j["a"])({},Object(L["b"])({notProviders:"notProviders",providers:"providers"}),{twitterUid:function(){return this.$store.getters.provider("twitter").uid},layout:function(){return this.$store.getters.layout}}),methods:{admin:function(){this.$router.push({name:"admin"})},status:function(t){return this.$store.getters.status(t)},reset:function(){this.$store.commit("SET_LAYOUT",[])},addWidget:function(t){t.i=btoa(Math.random()).substring(0,12),this.layout.push(t),this.$store.dispatch("update_layout",this.layout),this.dialogVisible=!1},update:function(){this.$store.dispatch("updateDataSource",{endpoint:"twitter/users",param:this.twitterUid})},layoutUpdated:function(t){this.$store.dispatch("update_layout",t)}}}),M=U,R=(n("b444"),Object(m["a"])(M,$,D,!1,null,"195b5002",null)),q=R.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{attrs:{data:t.components}},[n("el-table-column",{attrs:{type:"index",label:"#"}}),n("el-table-column",{attrs:{prop:"name",label:"Name"}}),n("el-table-column",{attrs:{prop:"desc",label:"Description"}}),n("el-table-column",{attrs:{prop:"component",label:"Component Name"}}),n("el-table-column",{attrs:{prop:"network",label:"Network"}})],1)],1)},V=[],z=l["a"].firestore(),B={name:"admin",data:function(){return{components:[]}},firestore:{components:z.collection("components")}},W=B,Y=Object(m["a"])(W,G,V,!1,null,null,null),H=Y.exports;a["default"].use(h["a"]);var J=new h["a"]({base:"/social-dashboard/",routes:[{path:"/",name:"home",component:S,meta:{layout:"bulma"}},{path:"/login",name:"login",component:O,meta:{layout:"simple"}},{path:"/app",name:"app",component:q,meta:{requiresAuth:!0,layout:"sidebar"}},{path:"/admin",name:"admin",component:H,meta:{requiresAuth:!0,layout:"sidebar"}}]});J.beforeEach(function(t,e,n){var a=g.a.auth().currentUser,o=t.matched.some(function(t){return t.meta.requiresAuth});o&&!a?n({name:"login"}):n()});var K,Q=J,Z=n("bd86"),X=(n("7f7f"),n("bc3a")),tt=n.n(X),et=tt.a.create({baseURL:"https://jf-social-api.herokuapp.com/"});a["default"].use(L["a"]);var nt=l["a"].firestore(),at=new L["a"].Store({state:{user:null,loading:!1,conected:[],clients:[{name:"instagram",conected:!1,loading:!1,provider:{}},{name:"google",conected:!1,loading:!1,provider:{}},{name:"twitter",conected:!1,loading:!1,provider:{}},{name:"facebook",conected:!1,loading:!1,provider:{}}],dataSources:[],layout:[]},mutations:(K={SET_LOADING:function(t,e){a["default"].set(t.clients.filter(function(t){return t.name==e.client})[0],"loading",e.status)},SET_STATUS:function(t,e){a["default"].set(t.clients.filter(function(t){return t.name==e.client})[0],"conected",e.status)},SET_DATA:function(t,e){a["default"].set(t.clients.filter(function(t){return t.name==e.client})[0],"provider",e.provider)},SET_LAYOUT:function(t,e){t.layout=e},PUSH_LAYOUT:function(t,e){t.layout.push(e)},SET_USER:function(t,e){t.user=e}},Object(Z["a"])(K,"SET_LOADING",function(t,e){t.loading=e}),Object(Z["a"])(K,"pushDataSource",function(t,e){console.time("Api call from: "+e.endpoint),et.get(e.endpoint+"/"+e.param).then(function(n){console.timeEnd("Api call from: "+e.endpoint),t.dataSources.push({endpoint:e.endpoint,data:n.data})}).catch(function(t){console.log(t)})}),Object(Z["a"])(K,"updateDataSource",function(t,e){console.time("Api update: "+e.endpoint),et.get(e.endpoint+"/"+e.param).then(function(n){console.timeEnd("Api update: "+e.endpoint);for(var a=0;a<t.dataSources.length;a++){var o=t.dataSources[a];if(o.endpoint==e.endpoint){console.log("Updated!"),t.dataSources[a].data=n.data;break}}}).catch(function(t){console.log(t)})}),K),actions:{clearDataSource:function(t){t.commit;var e=t.state;e.dataSources=[]},addDataSource:function(t,e){var n=t.commit,a=(t.state,t.getters);0==a.getSource(e.endpoint).length&&n("pushDataSource",e)},updateDataSource:function(t,e){var n=t.commit,a=(t.state,t.getters);1==a.getSource(e.endpoint).length&&n("updateDataSource",e)},update_layout:function(t,e){var n=t.commit,a=(t.state,t.getters);console.log("update layouts"),nt.collection("layouts").doc(a.user.uid).update({layout:e,updated:new Date}),n("SET_LAYOUT",e)}},getters:{loading:function(t){return function(e){return t.clients.filter(function(t){return t.name==e})[0].loading}},status:function(t){return function(e){return t.clients.filter(function(t){return t.name==e})[0].conected}},provider:function(t){return function(e){return t.clients.filter(function(t){return t.name==e})[0].provider}},layout:function(t){return t.layout},clients:function(t){return t.clients},user:function(t){return t.user},is_loading:function(t){return t.loading},providers:function(t){return t.clients.filter(function(t){return t.conected})},notProviders:function(t){return t.clients.filter(function(t){return!t.conected}).map(function(t){return t.name})},getSource:function(t){return function(e){return t.dataSources.filter(function(t){return t.endpoint==e})}},dataSource:function(t,e){return function(t){var n=e.getSource(t);return 0==n.length?0:n[0].data}}}}),ot=n("ecee"),rt=n("f2d1"),it=n("ad3d"),st=n("0ff2"),lt=n("5c96"),ct=n.n(lt),ut=n("b2d6"),dt=n.n(ut),mt=n("4897"),pt=n.n(mt),ft=(n("0fae"),n("e05f"),n("3d5b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"app"},[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{staticClass:"sidebar-menu",attrs:{router:!0,"background-color":"#2f3542","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"app",route:{name:"app"}}},[n("i",{staticClass:"el-icon-menu"}),t._v("Home")]),t.user&&"fernando.delarosa@questionpro.com"==t.user.email?n("el-menu-item",{attrs:{index:"admin",route:{name:"admin"}}},[n("i",{staticClass:"el-icon-star-on"}),t._v("Admin")]):t._e(),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-setting"}),t._v("Opciones")]),n("el-menu-item",{attrs:{index:"#"},on:{click:t.logout}},[t._v("Salir")])],2)],1)],1),n("el-container",[n("el-main",[t._t("default")],2),n("el-footer",[n("span",[t._v("Made with"),n("span",{staticClass:"love"},[t._v("♥")])])])],1)],1)}),ht=[],vt={computed:{user:function(){return this.$store.getters.user},layout:function(){return this.$store.getters.layout}},methods:{logout:function(){var t=this;l["a"].auth().signOut().then(function(){t.$store.commit("SET_USER",null),t.$router.push({name:"home"})}).catch(function(t){console.log(t)})}}},gt=vt,bt=n("a14a");function _t(t){this["$style"]=bt["default"].locals||bt["default"]}var yt=Object(m["a"])(gt,ft,ht,!1,_t,null,null),wt=yt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("el-container",[t._t("default")],2),n("el-footer",[n("span",[t._v("Made with"),n("span",{staticClass:"love"},[t._v("♥")])])])],1)},xt=[],kt={},Ct=kt,Tt=(n("c473"),Object(m["a"])(Ct,St,xt,!1,null,"081d031c",null)),Et=Tt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("div",{staticClass:"container has-top-menu"},[n("el-menu",{staticClass:"top-menu",attrs:{mode:"horizontal",router:!0,"background-color":"transparent","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"app",route:{name:"home"}}},[t._v("Inicio")]),n("el-menu-item",{attrs:{index:"app",route:{name:"app"}}},[t._v("Precios")]),t.user?t._e():n("el-menu-item",{attrs:{index:"login",route:{name:"login"}}},[t._v("Iniciar sesión")]),t.user?t._e():n("el-menu-item",{staticClass:"has-button",attrs:{index:"register",route:{name:"login"}}},[n("el-button",{attrs:{type:"primary",round:""}},[t._v("Registro")])],1),t.user&&"fernando.delarosa@questionpro.com"==t.user.email?n("el-menu-item",{attrs:{index:"admin",route:{name:"admin"}}},[t._v("Admin")]):t._e(),t.user?n("el-menu-item",{attrs:{index:"#"},on:{click:t.logout}},[t._v("Salir")]):t._e(),t.user?n("el-menu-item",{staticClass:"has-button",attrs:{index:"app",route:{name:"app"}}},[n("el-button",{attrs:{type:"primary",round:""}},[t._v("Ir a la App")])],1):t._e()],1)],1),n("div",[n("h1",{staticClass:"title"},[t._v("Titulo")]),n("h3",{staticClass:"subtitle"},[t._v("subtitulo")])]),n("svg",{attrs:{viewBox:"0 0 100 25",preserveAspectRatio:"none",height:"200px"}},[n("path",{attrs:{fill:"#FFFFFF",opacity:"0.7",d:"M0 30 V15 Q30 3 60 15 V30z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M0 30 V12 Q30 17 55 12 T100 11 V30z"}})])]),n("el-main",[t._t("default"),n("footer",[n("p",[t._v("Diseñado por "),n("a",{attrs:{href:"#"}},[t._v("Internet Mariachi")]),t._v(".")])])],2)],1)},Ot=[],$t={computed:{user:function(){return this.$store.getters.user},layout:function(){return this.$store.getters.layout}},methods:{logout:function(){var t=this;l["a"].auth().signOut().then(function(){t.$store.commit("SET_USER",null),t.$router.push({name:"home"})}).catch(function(t){console.log(t)})}}},Dt=$t,jt=(n("6f70"),Object(m["a"])(Dt,At,Ot,!1,null,"99486832",null)),Lt=jt.exports;pt.a.use(dt.a),a["default"].use(ct.a);var It=tt.a.create({baseURL:"https://jf-social-api.herokuapp.com/"});a["default"].prototype.$http=It,a["default"].component("font-awesome-icon",it["a"]),a["default"].use(st["a"]),ot["c"].add(rt["a"]),a["default"].config.productionTip=!1,a["default"].component("sidebar-layout",wt),a["default"].component("simple-layout",Et),a["default"].component("bulma-layout",Lt),l["a"].auth().onAuthStateChanged(function(){new a["default"]({router:Q,store:at,render:function(t){return t(f)}}).$mount("#app")})},"64a9":function(t,e,n){},"6f70":function(t,e,n){"use strict";var a=n("8113"),o=n.n(a);o.a},"70fd":function(t,e,n){},8113:function(t,e,n){},a14a:function(t,e,n){"use strict";var a=n("b67f"),o=n.n(a);e["default"]=o.a},a9e7:function(t,e,n){},b444:function(t,e,n){"use strict";var a=n("cd0b"),o=n.n(a);o.a},b67f:function(t,e,n){t.exports={"el-menu":"Sidebar_el-menu_3epED",w100:"Sidebar_w100_1-lsk",p0:"Sidebar_p0_16iFP","el-card__body":"Sidebar_el-card__body_1ks50",fr:"Sidebar_fr_2XMTx",bw:"Sidebar_bw_xz9HZ",mb:"Sidebar_mb_1gd19",w0:"Sidebar_w0_1VPTo","el-footer":"Sidebar_el-footer_1-yNc","el-dialog__body":"Sidebar_el-dialog__body_9PCR0","el-form-item":"Sidebar_el-form-item_poUbz","el-form-item__label":"Sidebar_el-form-item__label_25ABE",love:"Sidebar_love_1ABy6"}},c473:function(t,e,n){"use strict";var a=n("70fd"),o=n.n(a);o.a},cd0b:function(t,e,n){},ce68:function(t,e,n){var a={"./Default":["b8d3","chunk-fb5305da"],"./Default.vue":["b8d3","chunk-fb5305da"],"./Dynamic":["111a"],"./Dynamic.vue":["111a"],"./Metric":["7b50","chunk-5c898379"],"./Metric.vue":["7b50","chunk-5c898379"],"./MyLogin":["393c"],"./MyLogin.vue":["393c"],"./twitter/FavouritesCount":["5e3d","chunk-a166c28e"],"./twitter/FavouritesCount.vue":["5e3d","chunk-a166c28e"],"./twitter/FollowersCount":["9bea","chunk-23fc51f5"],"./twitter/FollowersCount.vue":["9bea","chunk-23fc51f5"],"./twitter/FollowingCount":["f454","chunk-f6ed4226"],"./twitter/FollowingCount.vue":["f454","chunk-f6ed4226"],"./twitter/TweetsCount":["1ad5","chunk-279c5179"],"./twitter/TweetsCount.vue":["1ad5","chunk-279c5179"]};function o(t){var e=a[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return Object.keys(a)},o.id="ce68",t.exports=o},d6db:function(t,e,n){"use strict";var a=n("a9e7"),o=n.n(a);o.a},dc59:function(t,e,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");var a=n("59ca"),o=n.n(a);n("e71f"),n("ea7b");o.a.initializeApp({apiKey:"AIzaSyBWz6cbSDO0SVk3FZAh-g3U52boGyPNAKo",authDomain:"qp-social-dashboard.firebaseapp.com",databaseURL:"https://qp-social-dashboard.firebaseio.com",projectId:"qp-social-dashboard",storageBucket:"qp-social-dashboard.appspot.com",messagingSenderId:"852878284719"}),e["a"]=o.a},eaf5:function(t,e,n){},fdef:function(t,e,n){"use strict";var a=n("3999"),o=n.n(a);o.a}});
//# sourceMappingURL=app.ad0818dc.js.map