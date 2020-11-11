(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),l=a(9),u=a(4),o=a.n(u),i=a(7),m=a(25),d=a.n(m),p="/api/blogs",f=null,_={getAll:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(p);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:f}},e.next=3,d.a.post(p,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),like:function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat(p,"/like/").concat(t.id),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),comment:function(){var e=Object(i.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={comment:a},e.next=3,d.a.put("".concat(p,"/comment/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:f}},e.next=3,d.a.delete("".concat(p,"/").concat(t),a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateToken:function(e){f="bearer ".concat(e)}},v=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.create(e);case 2:n=t.sent,a({type:"CREATE_BLOG",data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.like(e);case 2:n=t.sent,a({type:"UPDATE_BLOG",data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var a=Object(i.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.comment(e,t);case 2:r=a.sent,n({type:"UPDATE_BLOG",data:r});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"id to delete + running dispatch delete fn"),t.next=3,_.deleteBlog(e);case 3:a({type:"DELETE_BLOG",data:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_BLOG":return e.concat(t.data);case"UPDATE_BLOG":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data}));case"INIT_BLOGS":return t.data;default:return e}},N=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SET_USER",data:e}),_.updateToken(e.token);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"LOGOUT_USER":return null;default:return e}},y=a(14),w=a(17),k=function(){var e;return function(t,a,n){return function(){var r=Object(i.a)(o.a.mark((function r(c){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:clearTimeout(e),c(x(t,a)),e=setTimeout((function(){c(j())}),1e3*n);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}(),x=function(e,t){return{type:"SHOW_NOTIFICATION",data:{message:e,isError:t}}},j=function(){return{type:"CLEAR_NOTIFICATION"}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return t.data;case"CLEAR_NOTIFICATION":return null;default:return e}},C=a(37),T=a.n(C),U=function(e){var t=e.blog,a=Object(l.b)(),n=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(h(t)),a(k("LIKED",!1,4))}catch(n){console.log(n,"blog like err")}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"thought"},r.a.createElement(w.b,{className:"thouhgt__link",to:"/thoughts/".concat(t.id),style:{textDecoration:"none"}},r.a.createElement("div",{className:"thouhgt__maincontent"},r.a.createElement("div",{className:"thouhgt__title"},t.title),r.a.createElement("div",{className:"thouhgt__user"},"/user/",t.users.username))),r.a.createElement("div",{className:"thouhgt__action",onClick:n},r.a.createElement(T.a,{className:"thouhgt__likeicon"}),r.a.createElement("span",{className:"thouhgt__likenumber"},t.likes)))},I=a(15),A=a(164),L=a(165);function D(e){var t=e.createBlog,a=Object(l.b)(),c=Object(n.useState)(""),s=Object(I.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(I.a)(d,2),f=p[0],_=p[1],v=Object(l.c)((function(e){return e.user})),h=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),""!==u&&""!==f?(t({title:u,thought:f,url:"na"}),m(""),_("")):a(k("Add a Title and a Thought",!0,7));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.preventDefault(),m(e.target.value)},E=function(e){e.preventDefault(),_(e.target.value)},b=v?null:{opacity:"0.6"};return r.a.createElement("div",{className:"form__container",style:b},r.a.createElement("form",{className:"form",onSubmit:h,autoComplete:"off"},v?r.a.createElement(A.a,{className:"form__input",placeholder:"title",type:"text",name:"title",value:u,onChange:g,color:"secondary"}):r.a.createElement(A.a,{className:"form__input",placeholder:"title",type:"text",name:"title",onChange:g,color:"secondary",disabled:!0}),v?r.a.createElement(A.a,{className:"form__input",placeholder:"what's your thought",type:"text",name:"thought",onChange:E,value:f,id:"filled-multiline-static",multiline:!0,rows:5,variant:"filled",color:"secondary"}):r.a.createElement(A.a,{className:"form__input",placeholder:"what's your thought",type:"text",name:"thought",onChange:E,id:"filled-multiline-static",multiline:!0,rows:5,variant:"filled",color:"secondary",disabled:!0}),v?r.a.createElement(L.a,{className:"form__btn form__btn--glow form__btn--primary",type:"submit"},"Add Thought..."):r.a.createElement(L.a,{className:"form__btn form__btn--primary",type:"submit",disabled:!0},"Add Thought...")))}var B={signUpUser:function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getUsers();case 2:a=e.sent,t({type:"SET_USERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return t.data;default:return e}},G=(a(74),a(53)),F=a.n(G),V=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.allUsers}));return Object(n.useEffect)((function(){e(R())}),[e]),r.a.createElement("div",{className:"users"},r.a.createElement("div",{className:"users__header"},r.a.createElement("div",{className:"users__header__title"},r.a.createElement(F.a,{className:"users__icon"}),r.a.createElement("div",{className:"users__title"},"Users")),r.a.createElement("div",{className:"users__header__info"},"# of Thoughts")),r.a.createElement("div",{className:"users__informationContainer"},t&&t.map((function(e){return r.a.createElement(w.b,{className:"users__link",to:"/users/".concat(e.id),key:e.id},r.a.createElement("div",{className:"users__user"},r.a.createElement("div",null,e.username),r.a.createElement("div",{className:"users__bloglegnth"},e.blogs.length)))}))))},P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})).allUsers;Object(n.useEffect)((function(){e(R())}),[e]);var a=Object(y.h)("/users/:id"),c=a?a.params.id:null,s=t?t.find((function(e){return e.id===c})):null;return r.a.createElement("div",null,c?function(){if(s)return r.a.createElement("div",{className:"users"},r.a.createElement("div",null,r.a.createElement("div",{className:"users__user__usertitle"},"viewing user:"),r.a.createElement("div",{className:"users__user__currentUserHeader"},r.a.createElement(F.a,{className:"user__text--orange"}),r.a.createElement("div",{className:"users__user__username user__text--orange"},s.username))),r.a.createElement("ul",{className:"users__informationContainer"},r.a.createElement("div",{className:"users__user__usertitle"},"Thoughts Submitted:"),s.blogs.map((function(e){return r.a.createElement(w.b,{to:"/thoughts/".concat(e.id),className:"users__link",key:e.id},r.a.createElement("li",{className:"users__user"},r.a.createElement("div",{className:"user__text--orange"},e.title),r.a.createElement("div",{className:"users__user__likes"},r.a.createElement(T.a,{className:"user__text--orange"}),r.a.createElement("div",{className:"users__user__likesnumber user__text--orange"},e.likes))))}))))}():null)},J=a(80),W=a.n(J),z=(a(125),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})),a=t.blogs,c=t.user,s=Object(n.useState)(""),u=Object(I.a)(s,2),m=u[0],d=u[1],p=Object(y.g)(),f=Object(y.h)("/thoughts/:id"),_=f?f.params.id:null,v=c?c.name:null,b=a?a.find((function(e){return e.id===_})):null,N=function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(h(b))}catch(a){console.log(a,"blog like err")}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("Are you sure you want to delete this thought?"))try{console.log("confirmed in app.js"),e(E(a)),p.push("/")}catch(n){e(k("Unauthorized to Delete This Thought",!0,4))}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),null!==m)try{e(g(_,m)),e(k("Comment Added",!1,4)),d("")}catch(n){e(k("Comment Failed",!0,4))}else e(k("comment empty",!0,4));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,b?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"thought"},r.a.createElement("div",{className:"thought__display"},r.a.createElement("div",{className:"maincontent"},r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},b.title),r.a.createElement("div",null,r.a.createElement(w.b,{className:"user",to:"/users/".concat(b.users.id)},"/users/",b.users.username))),r.a.createElement("div",{className:"content"},b.thought)),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"likeaction",onClick:N},r.a.createElement(T.a,{className:"likeicon"}),r.a.createElement("div",{className:"likenumber"},b.likes)),b.users.name===v?r.a.createElement("div",{className:"deleteaction",onClick:function(){return O(b.id)}},r.a.createElement(W.a,{className:"deleteicon"}),r.a.createElement("div",{className:"deletetext"},"DELETE")):null))),r.a.createElement("div",{className:"comments"},r.a.createElement("form",{className:"form"},r.a.createElement(A.a,{id:"comment",className:"form__input",placeholder:"comment",type:"text",name:"comment",value:m,onChange:function(e){e.preventDefault(),d(e.target.value)},multiline:!0,rows:3,variant:"filled",color:"secondary"}),r.a.createElement(L.a,{className:"form__btn",type:"submit",onClick:x},"Add Comment")),b.comments[0]?r.a.createElement("ul",{className:"commentsection"},r.a.createElement("div",{className:"commentsection__title"},"comments:"),b.comments.map((function(e,t){return r.a.createElement("li",{className:"commentsection__comment",key:t},e)}))):r.a.createElement("div",{className:"commentsection"},"no comments yet..."))):null)}),H=function(e){var t=Object(n.useState)(""),a=Object(I.a)(t,2),r=a[0],c=a[1];return{inputValues:{name:e,value:r,onChange:function(e){c(e.target.value)}},reset:function(){return c("")}}},Y=function(){var e=Object(n.useState)(!1),t=Object(I.a)(e,2),a=t[0],r=t[1];return{open:a,flipModalState:function(){r(!a)}}},K=(a(126),{loginUser:function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),q=a(167),Q=(a(127),function(e){var t=e.flipModalState,a=e.isSignInModalOpen,c=Object(l.b)(),s=Object(n.useRef)(null),u=Object(n.useRef)(null),m=function(){var e=Object(i.a)(o.a.mark((function e(a){var n,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.username.value,r=a.target.password.value,e.prev=3,e.next=6,K.loginUser({username:n,password:r});case 6:l=e.sent,window.localStorage.setItem("loggedInBlogListUser",JSON.stringify(l)),c(N(l)),c(k("You have logged in",!1,7)),t(),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(3),c(k("wrong un and pw",!0,7)),s.current.value="",u.current.value="",t();case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{className:"modal",open:a,onClose:t,"aria-labelledby":"form-dialog-title-signin"},r.a.createElement("h2",{className:"modal__title",id:"form-dialog-title-signin"},"Sign In"),r.a.createElement("div",{className:"modal__content"},r.a.createElement("form",{className:"modal__form",onSubmit:m},r.a.createElement(A.a,{id:"login__username",className:"modal__input",placeholder:"username",type:"text",name:"username",ref:s,color:"secondary"}),r.a.createElement(A.a,{id:"login__password",className:"modal__input",placeholder:"password",type:"text",name:"password",ref:u,color:"secondary"}),r.a.createElement("p",{className:"modal__note"},"*case sensitive"),r.a.createElement(L.a,{variant:"contained",className:"modal__btn",type:"submit"},"Login")))))}),X=function(e){var t=e.flipModalState,a=e.isSignUpModalOpen,n=H("name"),c=H("username"),s=H("password"),u=Object(l.b)(),m=Object(y.g)(),d=function(){var e=Object(i.a)(o.a.mark((function e(a){var r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,B.signUpUser({username:c.inputValues.value,password:s.inputValues.value,name:n.inputValues.value});case 4:return r=e.sent,e.next=7,K.loginUser({username:c.inputValues.value,password:s.inputValues.value});case 7:l=e.sent,window.localStorage.setItem("loggedInBlogListUser",JSON.stringify(l)),u(N(l)),u(k("You have created an account: ".concat(r.username),!1,4)),t(),m.push("/"),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),u(k("Failed Account Creation",!0,4)),t();case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q.a,{open:a,onClose:t,"aria-labelledby":"form-dialog-title-signup",className:"modal"},r.a.createElement("h2",{id:"form-dialog-title-signup",className:"modal__title"},"Create Account"),r.a.createElement("div",{className:"modal__content"},r.a.createElement("form",{className:"signup__form modal__form",onSubmit:d},r.a.createElement("div",null,r.a.createElement(A.a,{id:"signup__name",className:"modal__input",placeholder:"Name",type:"text",name:"name",onChange:n.inputValues.onChange})),r.a.createElement("div",null,r.a.createElement(A.a,{id:"signup__username",className:"modal__input",placeholder:"Username",type:"text",name:"username",onChange:c.inputValues.onChange})),r.a.createElement("div",null,r.a.createElement(A.a,{id:"signup__password",className:"modal__input",placeholder:"Password",type:"text",name:"password",onChange:s.inputValues.onChange})),r.a.createElement("p",{className:"modal__note"},"*case sensitive"),r.a.createElement(L.a,{variant:"contained",className:"modal__btn",type:"submit"},"Sign Up"))))},Z=a(81),$=a.n(Z),ee=a(82),te=a.n(ee);function ae(){var e=Object(l.c)((function(e){return e.notifications})),t=e.message,a=e.isError;return r.a.createElement("div",{className:"nav__loginstatus nav__notification",style:a?{color:"#222",backgroundColor:"white",textDecoration:"underlined"}:{color:"white",background:"linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",textDecoration:"underlined"}},a?r.a.createElement($.a,{className:"nav__notiIcon"}):r.a.createElement(te.a,{className:"nav__notiIcon"}),a?"ERROR: ":"",t)}var ne=function(){var e=Y(),t=Y(),a=Object(l.b)(),n=Object(l.c)((function(e){return e})),c=n.notifications,s=n.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav__left"},r.a.createElement(w.c,{activeClassName:"nav__link--active",className:"nav__item nav__link",to:"/thoughts"},"Thoughts"),r.a.createElement(w.c,{activeClassName:"nav__link--active",className:"nav__item nav__link",to:"/users"},"Users")),r.a.createElement("div",{className:"nav__right"},s?r.a.createElement(L.a,{className:"nav__btn nav__item nav__btn--secondary nav__btn--logout",onClick:function(){window.localStorage.removeItem("loggedInBlogListUser"),a(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT_USER"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a(k("You have logged out",!1,7))}},"log out"):r.a.createElement("div",null,r.a.createElement(L.a,{className:"nav__btn nav__btn--primary",onClick:e.flipModalState},"Sign In"),r.a.createElement(Q,{flipModalState:e.flipModalState,isSignInModalOpen:e.open}),r.a.createElement(L.a,{className:"nav__btn nav__btn--secondary",onClick:t.flipModalState},"Create Account"),r.a.createElement(X,{flipModalState:t.flipModalState,isSignUpModalOpen:t.open})))),r.a.createElement("div",{className:"nav__info"},null===c?s?r.a.createElement("p",null):r.a.createElement("div",{className:"nav__loginstatus nav__notification"},"// sign in to add thoughts"):r.a.createElement(ae,null),r.a.createElement("p",{className:"nav__loginstatus"},"Logged In As ",r.a.createElement("span",{className:"nav__user"},s?s.username:"Guest"))))},re=(a(128),a(168)),ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})),a=function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(v(a)),e(k("BLOG POST ADDED",!1,10))}catch(n){e(k("Err Creating Blog Post",!0,5))}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/thoughts/:id"},r.a.createElement("div",{className:"thought__display__container"},r.a.createElement(z,null))),r.a.createElement(y.b,{path:"/users/:id"},r.a.createElement("div",{className:"main__container"},r.a.createElement(P,null))),r.a.createElement(y.b,{path:"/users"},r.a.createElement("div",{className:"thought__display__container"},r.a.createElement(V,null))),r.a.createElement(y.b,{path:"/thoughts"},r.a.createElement("div",{className:"main__container"},r.a.createElement("div",{className:"thoughts__container"},t.blogs.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(U,{key:e.id,blog:e})}))),t.user?r.a.createElement(D,{createBlog:a}):r.a.createElement(re.a,{title:"Sign in to add thoughts",placement:"top-start",arrow:!0},r.a.createElement("div",null,r.a.createElement(D,{createBlog:a}))))),r.a.createElement(y.a,{exact:!0,from:"/",to:"/thoughts"})))},se=a(162),le=a(163),ue=a(85),oe=Object(ue.a)({palette:{primary:{main:"#fe6b8b"},secondary:{main:"#fff"}},overrides:{MuiBackdrop:{root:{backgroundColor:"rgba(0,0,0,0.7)"}},MuiPaper:{root:{display:"flex",flexDirection:"column",background:"linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",borderRadius:"0px",height:"fit-content"},rounded:{borderRadius:"0px"}},MuiDialog:{container:{height:"unset"},paperWidthSm:{width:"100%",maxWidth:"400px"},paper:{margin:"unset"}}}}),ie=function(){var e=Object(l.b)();return Object(n.useEffect)((function(){var t=JSON.parse(window.localStorage.getItem("loggedInBlogListUser"));console.log(t),t&&e(N(t))}),[]),Object(n.useEffect)((function(){e(function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(se.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(le.a,{theme:oe},r.a.createElement(ce,null))))},me=a(38),de=a(84),pe=Object(me.c)({notifications:S,blogs:b,user:O,allUsers:M}),fe=Object(me.d)(pe,Object(me.a)(de.a));a(129),a(130);s.a.render(r.a.createElement(l.a,{store:fe},r.a.createElement(w.a,null,r.a.createElement(ie,null))),document.getElementById("root"))},74:function(e,t,a){},95:function(e,t,a){e.exports=a(131)}},[[95,1,2]]]);
//# sourceMappingURL=main.1cfa8ebe.chunk.js.map