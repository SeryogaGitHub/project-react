(window["webpackJsonpproject-react"]=window["webpackJsonpproject-react"]||[]).push([[3],{289:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),u=a(27),c=a(26),s=a(28),l=a(0),o=a.n(l),i=a(89),m=function(e){var t=e.message,a=e.like,n=e.ava;return o.a.createElement("div",{className:"post-block"},o.a.createElement("div",{className:"logo",style:{backgroundImage:"url(".concat(n,")")}},"\xa0"),o.a.createElement("pre",{className:"message"},t),o.a.createElement("div",{className:"like"},"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c Like: ",a))},p=a(82),f=a(123),b=a(37),d=a(30),v=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onPostClick,a=e.postData.map(function(e,t){return o.a.createElement(m,{key:t,message:e.message,like:e.like,ava:e.ava})});return o.a.createElement("div",{className:"posts-block"},o.a.createElement("h2",null,"\u041c\u043e\u0457 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"),o.a.createElement(E,{onSubmit:function(e){t(e.message)}}),a)}}]),t}(l.PureComponent),h=Object(b.a)(10),E=Object(f.a)({form:"profile"})(function(e){var t=e.handleSubmit;return o.a.createElement("form",{onSubmit:t},o.a.createElement(p.a,{component:d.b,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",name:"message",validate:[b.b,h]}),o.a.createElement("button",null,"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"))}),g=v,j=a(8),O=Object(j.b)(function(e){return{postData:e.profilePage.postData,textareaDefault:e.profilePage.textareaDefault}},function(e){return{onPostClick:function(t){e(Object(i.a)(t))}}})(g),k=a(63),S=a(114),N=a.n(S),y=a(124),P=function(e){var t=Object(l.useState)(!1),a=Object(y.a)(t,2),n=a[0],r=a[1],u=Object(l.useState)(e.status),c=Object(y.a)(u,2),s=c[0],i=c[1],m=e.updateStatus;return Object(l.useEffect)(function(){i(e.status)},[e.status]),o.a.createElement("div",null,!n&&o.a.createElement("div",{onClick:function(){r(!0)},className:"status-info",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"},s||"\u041d\u0435\u043c\u0430\u0454 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"),n&&o.a.createElement("div",{className:"status-info"},o.a.createElement("input",{autoFocus:!0,onChange:function(e){i(e.currentTarget.value)},onBlur:function(){r(!1),m(s)},value:s})))},C=o.a.memo(function(e){if(!e.profile)return o.a.createElement(k.a,null);var t=e.profile,a=t.photos,n=t.aboutMe,r=t.fullName,u=e.status,c=e.updateStatus;return o.a.createElement("div",{className:"account"},o.a.createElement("img",{src:a.large?a.large:N.a,alt:"alt"}),o.a.createElement("p",null,"\u041f\u0440\u043e \u043c\u0435\u043d\u0435: ",n),o.a.createElement("p",null,"\u0418\u043c\u044f: ",r),o.a.createElement("div",null,o.a.createElement(P,{status:u,updateStatus:c})))}),w=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return o.a.createElement("div",{className:"content-profile"},o.a.createElement(C,{profile:t,status:a,updateStatus:n}),o.a.createElement(O,null))},D=a(14),I=a(113),U=a(6),x=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,a){return e!==this.props||t!==this.state}},{key:"componentDidMount",value:function(){var e=this.props,t=e.getUserProfile,a=e.getStatus,n=e.history,r=e.match;e.authId;console.log(this.props);var u=r.params.userId;u||(u=1218)||n.push("/login"),t(u),a(u)}},{key:"render",value:function(){return o.a.createElement(w,this.props)}}]),t}(o.a.Component);t.default=Object(U.d)(Object(j.b)(function(e){return{profile:e.profilePage.profile,auth:e.auth.isAuth,status:e.profilePage.status,authId:e.auth.id}},{getUserProfile:i.d,getStatus:i.c,updateStatus:i.e}),I.a,D.e)(x)}}]);
//# sourceMappingURL=3.cf97c1a0.chunk.js.map