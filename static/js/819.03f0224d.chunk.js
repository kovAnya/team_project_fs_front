"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[819],{2819:function(e,t,a){a.r(t),a.d(t,{default:function(){return st}});var n=a(5861),s=a(9439),r=a(4687),c=a.n(r),i=a(4087),l=a(3433),o=a(176),d=a(9229),u=a(7639),m=a(2791);var h=a.p+"static/media/petDefaultAvatar.0ac8b76f65c4b836a6e35d03df291105.svg",p=a(5048),x=a(1243),_=a(4724);x.Z.defaults.baseURL="https://backend.petly.club",(0,_.ok)();var f=function(){var e=(0,n.Z)(c().mark((function e(t){var a,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("/pets",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,n.Z)(c().mark((function e(t){var a,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.delete("/pets/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a(5273),v=a(5985),N=function(e){return v.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},g=function(e){return v.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},y=(0,b.hg)("auth/addPet",function(){var e=(0,n.Z)(c().mark((function e(t,a){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),N("Something went wrong, try to reload the page"),e.abrupt("return",a.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),P=(0,b.hg)("auth/deletePet",function(){var e=(0,n.Z)(c().mark((function e(t,a){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:return g("Pet was successfully deleted"),e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),N("Something went wrong, try to reload the page"),e.abrupt("return",a.rejectWithValue(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),k="PetsList_container_pets_list__2UI9e",w="PetsList_container_pets_img__OkewA",Z="PetsList_pets_img__butis",C="PetsList_title_info__oGLsL",F="PetsList_text_info_pets__Pxjy8",S="PetsList_ul_pets_info__HCoEI",A="PetsList_button_delete_pet__sd8nM",D="PetsList_li_pets_info__2fBYT",L="PetsList_container_button_ul_pets__W-BxH",U="PetsList_icon_delete__qb9GB",M="PetsList_fon_delete_icon__+odm0",R=a(184),Y=function(e){var t=e.pets,a=e.setAddPet,n=e.addPet,s=t.reduce((function(e,t){return[t].concat((0,l.Z)(e))}),[]),r=(0,p.I0)();return s.length>0?(0,R.jsx)("div",{children:s.map((function(e){var t=e._id,s=e.name,c=e.date,i=e.breed,l=e.photoURL,o=e.comments;return(0,R.jsxs)("div",{className:k,children:[(0,R.jsx)("div",{className:w,children:(0,R.jsx)("img",{src:null!==l&&void 0!==l?l:h,alt:"pet",className:Z})}),(0,R.jsxs)("div",{className:L,children:[(0,R.jsx)("button",{onClick:function(e){return function(e,t){r(P(t)),e.preventDefault()}(e,t)},type:"button",className:A,children:(0,R.jsx)("div",{className:M,onClick:function(){return a(!n)},children:(0,R.jsx)(u.p,{border:"none",className:U})})}),(0,R.jsxs)("ul",{className:S,children:[(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Name:"})," ",s]})}),(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Date of birth:"})," ",c]})}),(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Breed:"})," ",i]})}),(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Comments:"})," ",o]})})]})]})]},t)}))}):(0,R.jsx)(o.k,{bgColor:"accent.white","box-shadow":"7px 4px 14px rgba(0, 0, 0, 0.11)",borderRadius:"40px",direction:{base:"column",md:"row",xl:"row"},mb:{base:"20px",xl:"22px"},px:{base:"20px",md:"20px",xl:"28px"},py:{base:"40px",md:"20px",xl:"20px"},w:{base:"280px",md:"704px",xl:"821px"},children:(0,R.jsx)(d.x,{mx:"auto",children:" You have no pets yet "})})},q=a(9817),B=a(1413),E=a(2426),I=a.n(E),O=function(e){var t=e.onClose,a=e.setAddPet,n=e.addPet,r=(0,m.useState)(!0),c=(0,s.Z)(r,2),i=c[0],l=c[1],o=(0,p.I0)(),d=(0,m.useState)({breed:"Dog",name:"",date:"",photoURL:"",comments:""}),u=(0,s.Z)(d,2),h=u[0],x=u[1],_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(x((function(t){return(0,B.Z)((0,B.Z)({},t),e)})),t){var s=I()(e.date,"YYYYY-MM-DD").format("DD.MM.YYYY"),r={name:e.name,date:s,breed:e.breed,photoURL:e.photoURL,comments:e.comments};return o(y(r)),void a(!n)}l(!1)};return(0,R.jsx)(R.Fragment,{children:i?(0,R.jsx)(ce,{next:_,data:h,onClose:t}):(0,R.jsx)(le,{next:_,prev:function(e){x((function(t){return(0,B.Z)((0,B.Z)({},t),e)})),l(!0)},data:h,onClose:t})})},z=a(5705),T="ModalAddsPet_container__FYpU2",W="ModalAddsPet_title__Ts2JQ",H="ModalAddsPet_label__USmjo",J="ModalAddsPet_label_photo__scDyl",G="ModalAddsPet_file_btn__YQHEJ",Q="ModalAddsPet_field__iYkor",V="ModalAddsPet_label_last__nJyRm",$="ModalAddsPet_btn__nl-ae",K="ModalAddsPet_accent_btn__bcdtA",X="ModalAddsPet_field_photo__8WK5N",ee="ModalAddsPet_img_photo__1NCT+",te="ModalAddsPet_error_msg__lKCO0",ae="ModalAddsPet_btn_list__xRRpn",ne="ModalAddsPet_field_comments__+qNEA",se=a(6727),re=se.Ry().shape({name:se.Z_().min(2).max(16).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491\s\-']+$/,"Can only contain letters").required("Required"),date:se.hT().min(I()("06021995","DDMMYYYY"),"Must be at later than 06.02.1995").max(I()(),"Must be at earlier than ".concat(I()().add(1,"days").format("DD.MM.YYYY"))).required("Required"),breed:se.Z_().required("Required").default("Dog")}),ce=function(e){var t=e.data,a=e.next,n=e.onClose;return(0,R.jsxs)("div",{className:T,children:[(0,R.jsx)("h1",{className:W,children:"Add pet"}),(0,R.jsx)(z.J9,{onSubmit:function(e){a((0,B.Z)({},e))},initialValues:t,validationSchema:re,children:(0,R.jsxs)(z.l0,{autoComplete:"off",children:[(0,R.jsxs)("label",{htmlFor:"name",className:H,children:["Name pet",(0,R.jsx)(z.gN,{className:Q,id:"name",type:"text",name:"name",placeholder:"Type name pet",required:!0}),(0,R.jsx)(z.Bc,{name:"name",component:"div",className:te})]}),(0,R.jsxs)("label",{className:H,htmlFor:"date",children:["Date of birth",(0,R.jsx)(z.gN,{className:Q,id:"date",type:"date",name:"date",placeholder:"DD.MM.YYYY",required:!0}),(0,R.jsx)(z.Bc,{name:"date",component:"div",className:te})]}),(0,R.jsxs)("label",{className:"".concat(H," ").concat(V),htmlFor:"breed",children:["Breed",(0,R.jsxs)(z.gN,{className:Q,id:"breed",type:"text",name:"breed",component:"select",placeholder:"Type breed",required:!0,children:[(0,R.jsx)("option",{value:"Dog",children:"Dog"}),(0,R.jsx)("option",{value:"Cat",children:"Cat"}),(0,R.jsx)("option",{value:"Hamster",children:"Hamster"}),(0,R.jsx)("option",{value:"Parrot",children:"Parrot"}),(0,R.jsx)("option",{value:"Guinea pig",children:"Guinea pig"}),(0,R.jsx)("option",{value:"Wookiee",children:"Wookiee"}),(0,R.jsx)("option",{value:"Ewoks",children:"Ewoks"}),(0,R.jsx)("option",{value:"The Dark Lord",children:"The Dark Lord"}),(0,R.jsx)("option",{value:"Grud",children:"Grud"}),(0,R.jsx)("option",{value:"Other",children:"Other"})]}),(0,R.jsx)(z.Bc,{name:"breed",component:"div",className:te})]}),(0,R.jsxs)("div",{className:ae,children:[(0,R.jsx)("button",{type:"submit",className:"".concat($," ").concat(K),"aria-label":"next",children:"Next"}),(0,R.jsx)("button",{type:"button",onClick:n,className:$,"aria-label":"cancel",children:"Cancel"})]})]})})]})},ie=se.Ry().shape({comments:se.Z_().min(8).max(120).required("Required")}),le=function(e){var t=e.data,a=e.next,r=e.prev,i=e.onClose,l=(0,m.useState)(""),o=(0,s.Z)(l,2),d=o[0],u=o[1],h=function(){var e=(0,n.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.files[0]){e.next=3;break}return v.Am.error("Please select a file"),e.abrupt("return");case 3:if(!(t.target.files[0].size>375e3)){e.next=6;break}return v.Am.error("You can not upload the file greater then 3 MB"),e.abrupt("return");case 6:(a=new FormData).append("avatar",t.target.files[0]),(0,_.WW)(a).then((function(e){u(e.urlAvatar)})).catch((function(e){console.log("Error",e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,R.jsx)("div",{className:T,children:(0,R.jsx)(z.J9,{onSubmit:function(e){var t=d||"https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg",n=(0,B.Z)((0,B.Z)({},e),{},{photoURL:t});a(n,!0),i()},initialValues:t,validationSchema:ie,children:(0,R.jsxs)(z.l0,{autoComplete:"off",children:[(0,R.jsx)("label",{htmlFor:"imageURL",className:"".concat(H," ").concat(J),children:"Add photo and some comments"}),(0,R.jsxs)("label",{htmlFor:"imageURL",className:X,children:[(0,R.jsx)(z.gN,{className:G,id:"imageURL",type:"file",name:"imageURL",accept:"image/*,.png,.jpg,.gif,.web,",onChange:h}),d&&(0,R.jsx)("img",{src:d,className:ee,alt:"Pet",height:116,width:116})]}),(0,R.jsxs)("label",{htmlFor:"comments",className:"".concat(H," ").concat(V),children:["Comments",(0,R.jsx)(z.gN,{as:"textarea",className:"".concat(Q," ").concat(ne),id:"comments",type:"text",name:"comments",rows:"1",placeholder:"Some comments",onClick:function(){document.querySelector("textarea").addEventListener("keyup",(function(){this.scrollTop>0&&(this.style.height=this.scrollHeight+"px",this.style.borderRadius="20px")}))},required:!0}),(0,R.jsx)(z.Bc,{name:"comments",component:"div",className:te})]}),(0,R.jsxs)("div",{className:ae,children:[(0,R.jsx)("button",{type:"submit","aria-label":"add",className:"".concat($," ").concat(K),children:"Done"}),(0,R.jsx)("button",{onClick:function(){return r()},type:"button",className:$,"aria-label":"back",children:"Back"})]})]})})})},oe=a(9126),de="PetsData_title__gB1RG",ue="PetsData_icon_plus__JC4So",me="PetsData_button_add__9-wSa",he="PetsData_text_button__cl99l",pe="PetsData_header_my_pets__8HpS8",xe=function(e){var t=e.pets,a=e.setAddPet,n=e.addPet,r=(0,m.useState)(!1),c=(0,s.Z)(r,2),l=c[0],o=c[1],d=function(){o(!l)};return(0,R.jsxs)(i.xu,{ml:{xl:"32px"},w:"100%",children:[(0,R.jsxs)("div",{className:pe,children:[(0,R.jsx)("h2",{className:de,children:"My pets:"})," ",(0,R.jsxs)("button",{onClick:d,type:"button",className:me,children:[(0,R.jsx)("p",{className:he,children:"Add pet"}),(0,R.jsx)(oe.Y_C,{className:ue})]})]}),(0,R.jsx)(Y,{pets:t,setAddPet:a,addPet:n}),l&&(0,R.jsx)(q.u,{onClose:d,children:(0,R.jsx)(O,{onClose:d,setAddPet:a,addPet:n})})]})},_e=a(8617),fe="UserDataItem_form_user_input__95YW8",je="UserDataItem_td_user__pYCXv",be="UserDataItem_text_user__a0yxL",ve="UserDataItem_container_text__FpQYW",Ne="UserDataItem_button_pencil__w1LRs",ge="UserDataItem_pencil__el8SJ",ye="UserDataItem_pencil_disabled__sxFTe",Pe="UserDataItem_check__ZyFe0",ke="UserDataItem_input__VhN2V";function we(e){var t=e.user,a=t.birthdate,n=t.cityRegion,r=t.email,c=t.mobilePhone,i=t.name,l=(0,m.useState)(i),o=(0,s.Z)(l,2),d=o[0],u=o[1],h=(0,m.useState)(r),p=(0,s.Z)(h,2),x=p[0],f=p[1],j=(0,m.useState)(a||"01.01.2000"),b=(0,s.Z)(j,2),v=b[0],N=b[1],g=(0,m.useState)(c||"+38000000000"),y=(0,s.Z)(g,2),P=y[0],k=y[1],w=(0,m.useState)(n),Z=(0,s.Z)(w,2),C=Z[0],F=Z[1],S=(0,m.useState)(!1),A=(0,s.Z)(S,2),D=A[0],L=A[1],U=(0,m.useState)(!1),M=(0,s.Z)(U,2),Y=M[0],q=M[1],B=(0,m.useState)(!1),E=(0,s.Z)(B,2),I=E[0],O=E[1],z=(0,m.useState)(!1),T=(0,s.Z)(z,2),W=T[0],H=T[1],J=(0,m.useState)(!1),G=(0,s.Z)(J,2),Q=G[0],V=G[1],$=(0,m.useState)(!1),K=(0,s.Z)($,2),X=K[0],ee=K[1],te=function(e){switch(e.preventDefault(),e.currentTarget.name[0].name||e.currentTarget.name){case"name":ee(!0),L(!D);break;case"email":ee(!0),q(!Y);break;case"birthday":ee(!0),O(!I);break;case"phone":ee(!0),H(!W);break;case"city":ee(!0),V(!Q);break;default:console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 UserDataItem (handleVlick)")}},ae=function(e){switch(e.preventDefault(),e.target.name){case"name":u(e.target.value);break;case"email":f(e.target.value);break;case"birthday":N(e.target.value);break;case"phone":k(e.target.value);break;case"city":F(e.target.value);break;default:console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 UserDataItem (handleChange)")}},ne=function(e){if(e.preventDefault(),te(e),ee(!1),d!==i)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:P}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else if(x!==r)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:P}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else if(P!==c)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:P}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else if(C!==n)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:P}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else{if(v===a)return;(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:P}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v})}};return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("table",{className:ve,children:(0,R.jsxs)("tbody",{children:[(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:"Name:"})}),!1===D?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:d})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"button",className:Ne,name:"name",onClick:te,disabled:!1!==X,children:(0,R.jsx)(_e.LsQ,{className:!1===X?ge:ye})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("form",{id:"sub_name",name:"name",onSubmit:ne,className:fe,children:(0,R.jsx)("input",{type:"text",name:"name",required:!0,pattern:"^[a-zA-Z]+$",value:d,onChange:ae,className:ke})})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"submit",form:"sub_name",className:Ne,name:"name",children:(0,R.jsx)(oe.oFd,{className:Pe})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:"Email:"})}),!1===Y?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:x})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"button",className:Ne,name:"email",onClick:te,disabled:!1!==X,children:(0,R.jsx)(_e.LsQ,{className:!1===X?ge:ye})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("form",{id:"sub_email",name:"email",onSubmit:ne,className:fe,children:(0,R.jsx)("input",{type:"email",name:"email",required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",value:x,onChange:ae,className:ke})})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"submit",className:Ne,name:"email",form:"sub_email",children:(0,R.jsx)(oe.oFd,{className:Pe})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:"Birthday:"})}),!1===I?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:v||"01.01.2000"})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"button",className:Ne,name:"birthday",onClick:te,disabled:!1!==X,children:(0,R.jsx)(_e.LsQ,{className:!1===X?ge:ye})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("form",{id:"sub_birt",name:"birthday",onSubmit:ne,className:fe,children:(0,R.jsx)("input",{type:"text",name:"birthday",required:!0,pattern:"(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",value:v,onChange:ae,className:ke})})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"submit",className:Ne,name:"birthday",form:"sub_birt",children:(0,R.jsx)(oe.oFd,{className:Pe})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:"Phone:"})}),!1===W?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:P||"+38000000000"})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"button",className:Ne,name:"phone",onClick:te,disabled:!1!==X,children:(0,R.jsx)(_e.LsQ,{className:!1===X?ge:ye})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("form",{id:"sub_phone",name:"phone",onSubmit:ne,className:fe,children:(0,R.jsx)("input",{type:"tel",name:"phone",required:!0,pattern:"\\+?[0-9\\s\\-\\(\\)]+",value:P,onChange:ae,className:ke})})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"submit",className:Ne,name:"phone",form:"sub_phone",children:(0,R.jsx)(oe.oFd,{className:Pe})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:"City:"})}),!1===Q?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("p",{className:be,children:C})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"button",className:Ne,name:"city",onClick:te,disabled:!1!==X,children:(0,R.jsx)(_e.LsQ,{className:!1===X?ge:ye})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:je,children:(0,R.jsx)("form",{id:"sub_city",name:"city",onSubmit:ne,className:fe,children:(0,R.jsx)("input",{type:"text",name:"city",required:!0,pattern:"^[a-zA-Z]+$",value:C,onChange:ae,className:ke})})}),(0,R.jsx)("td",{className:je,children:(0,R.jsx)("button",{type:"submit",className:Ne,name:"city",form:"sub_city",children:(0,R.jsx)(oe.oFd,{className:Pe})})})]})]})]})})})}function Ze(e){var t=e.user;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(we,{user:t})})}var Ce=a(71),Fe=a(4396),Se=a(7689),Ae="LogOut_container_logOut__+ahIw",De="LogOut_button_logOut__rIu97",Le="LogOut_svg_logOut__66un1",Ue="LogOut_text_logOut__pbfSv";function Me(){var e=(0,Fe.$n)(),t=(0,s.Z)(e,1)[0],a=(0,Se.s0)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:Ae,children:(0,R.jsxs)("button",{type:"button",className:De,onClick:function(){t(),a("/")},children:[(0,R.jsx)(Ce.qgu,{className:Le}),(0,R.jsx)("span",{className:Ue,children:"Log Out"})]})})})}var Re=a(9983),Ye=a(8820),qe="UserFoto_conteiner_foto__vwSUu",Be="UserFoto_foto_img__Rt+HP",Ee="UserFoto_foto_svg_container__Ndr6Y",Ie="UserFoto_foto_svg__-yoiM";function Oe(e){var t=e.userFoto,a=e.user.photoURL;return null!==t&&(a=t),(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(Re.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,R.jsx)("div",{className:qe,children:a?(0,R.jsx)("img",{src:a,alt:"User Foto",className:Be}):(0,R.jsx)("div",{className:Ee,children:(0,R.jsx)(Ye.nf1,{className:Ie})})})})})}var ze=a(3479),Te="EditFoto_svg_camera__2Utdn",We="EditFoto_container_edit__Rgrwp",He="EditFoto_field_photo__1d6r6",Je="EditFoto_input_file__SvS56";function Ge(e){var t=e.setUserFoto,a=localStorage.getItem("persist:users");if(null!==a){var s=JSON.parse(a).token;!function(e){x.Z.defaults.headers.common.Authorization="Bearer ".concat(e)}(s.slice(1,s.length-1))}else x.Z.defaults.headers.common.Authorization="";var r=function(){var e=(0,n.Z)(c().mark((function e(a){var n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=a.target.files[0]).size>375e3&&v.Am.error("Maximum file size is 3 MB"),(s=new FormData).append("avatar",n),(0,_.WW)(s).then((function(e){(0,_.f7)({photoURL:e.urlAvatar}),t(e.urlAvatar)})).catch((function(e){console.log("Error",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:We,children:(0,R.jsxs)("label",{htmlFor:"file",className:He,children:[(0,R.jsx)(ze.wa4,{className:Te}),"Edit photo",(0,R.jsx)("input",{className:Je,id:"file",type:"file",name:"file",accept:"image/*,.png,.jpg,.gif,.web,",onChange:r,required:!0})]})})})}var Qe="UserPage_container__dD64l",Ve="UserPage_title__5CGDq",$e="UserPage_container__userdata__NV8sG",Ke="UserPage_container_desktop__FvMg8",Xe="UserPage_container_pets__o0dmH",et="UserPage_container__petsdata__wEphH",tt="UserPage_container_tablet__htLg9",at="UserPage_container_tablet_tab__Hjgpr",nt=a(4217);function st(){var e=(0,m.useState)({}),t=(0,s.Z)(e,2),a=t[0],r=t[1],i=(0,m.useState)(null),l=(0,s.Z)(i,2),o=l[0],d=l[1],u=(0,m.useState)(!1),h=(0,s.Z)(u,2),x=h[0],f=h[1],j=(0,Fe.$n)(),b=(0,s.Z)(j,1)[0],v=(0,p.v9)(nt.wl.getToken),N=(0,Se.s0)();return(0,m.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.J$)(v);case 2:return t=e.sent,r(t),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[v,x]),void 0===a?(b(),N("/login")):(0,R.jsxs)("div",{className:Qe,children:[a.user&&(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)("div",{className:$e,children:[(0,R.jsx)("h2",{className:Ve,children:"My information:"}),(0,R.jsxs)("div",{className:Ke,children:[(0,R.jsxs)("div",{className:tt,children:[(0,R.jsx)(Oe,{userFoto:o,user:a.user}),(0,R.jsx)(Ge,{setUserFoto:d})]}),(0,R.jsxs)("div",{className:at,children:[(0,R.jsx)(Ze,{user:a.user}),(0,R.jsx)(Me,{})]})]})]})}),a.pets&&(0,R.jsx)("div",{className:Xe,children:(0,R.jsx)("div",{className:et,children:(0,R.jsx)(xe,{pets:a.pets,setAddPet:f,addPet:x})})})]})}},9817:function(e,t,a){a.d(t,{u:function(){return m}});var n=a(2791),s=a(4164),r="Modal_container__vBmG0",c="Modal_overlay__4cVbv",i="Modal_icon__RWxm6",l="Modal_close__xTbKf",o=a(1213),d=a(184),u=document.querySelector("#modal-root");function m(e){var t=e.children,a=e.onClose;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var m=function(e){e.currentTarget===e.target&&a()};return(0,s.createPortal)((0,d.jsx)("div",{className:c,onClick:m,children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("button",{className:i,onClick:m,children:(0,d.jsx)("span",{className:l,children:(0,d.jsx)(o.ySC,{size:"16px",onClick:m})})}),t]})}),u)}},4724:function(e,t,a){a.d(t,{Bn:function(){return i},J$:function(){return o},WW:function(){return d},aL:function(){return l},f7:function(){return m},jQ:function(){return p},ok:function(){return u},up:function(){return h}});var n=a(5861),s=a(4687),r=a.n(s),c=a(1243);c.Z.defaults.baseURL="https://backend.petly.club";var i=function(){var e=(0,n.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/servicesSidebar").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/news").then((function(e){return e.data})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/userAndPets",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.status);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("/uploadAvatar",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=localStorage.getItem("persist:users");if(null!==e){var t=JSON.parse(e).token;!function(e){c.Z.defaults.headers.common.Authorization="Bearer ".concat(e)}(t.slice(1,t.length-1))}else c.Z.defaults.headers.common.Authorization=""},m=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/users/edit",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=localStorage.getItem("persist:users");if("null"!==e){var t=JSON.parse(e).id;if("null"===t)return;return t.slice(1,t.length-1)}}}}]);
//# sourceMappingURL=819.03f0224d.chunk.js.map