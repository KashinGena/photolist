(this.webpackJsonpphoto_album=this.webpackJsonpphoto_album||[]).push([[0],[,function(e,t,o){e.exports={modal__overlay:"PhotoInfo_modal__overlay__3lSb1",modal__window:"PhotoInfo_modal__window__2PY1g",modal__inner:"PhotoInfo_modal__inner__2PkEl",modal__photo:"PhotoInfo_modal__photo__1gYLI",modal__form:"PhotoInfo_modal__form__27Tqk",modal__input:"PhotoInfo_modal__input__nOfJ_",modal__photoinfo:"PhotoInfo_modal__photoinfo__3Uaap",modal__btn:"PhotoInfo_modal__btn__CyWPI",modal__comments:"PhotoInfo_modal__comments__2hjwg",comment:"PhotoInfo_comment__2vI2Z",comment__date:"PhotoInfo_comment__date__GT5LM",comment__text:"PhotoInfo_comment__text__2RPaH",close:"PhotoInfo_close__pMdQJ"}},,,,,,,,function(e,t,o){e.exports={photo:"PhotoList_photo__53IMk",photolist:"PhotoList_photolist__ckOoz",photolist__inner:"PhotoList_photolist__inner__zsxxY"}},,,function(e,t,o){e.exports=o(20)},,,,,function(e,t,o){},function(e,t,o){},,function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(3),l=o.n(c),r=(o(17),o(18),o(2)),s=o.n(r),i=o(8),m=o(4),u=o(5),_=o(7),h=o(6),p=o(9),d=o.n(p),f=o(10),v=function(e){Object(_.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(m.a)(this,o),(n=t.call(this,e)).el=document.createElement("div"),n}return Object(u.a)(o,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return l.a.createPortal(this.props.children,this.el)}}]),o}(a.a.Component),g=o(1),b=o.n(g),E=function(e){var t=Object(n.useState)(""),o=Object(f.a)(t,2),c=o[0],l=o[1],r=Object(n.useState)(""),s=Object(f.a)(r,2),i=s[0],m=s[1];return a.a.createElement(a.a.Fragment,null,e.isOpen&&a.a.createElement(v,null,a.a.createElement("div",{className:b.a.modal__overlay},a.a.createElement("div",{className:b.a.modal__window},a.a.createElement("div",{className:b.a.modal__inner},a.a.createElement("div",{className:b.a.modal__photoinfo},a.a.createElement("img",{className:b.a.modal__photo,alt:"1",src:e.photo.url}),a.a.createElement("div",{className:b.a.modal__comments},0!==e.photo.comments.length?e.photo.comments.map((function(e){return a.a.createElement("div",{className:b.a.comment},a.a.createElement("p",{className:b.a.comment__date},(t=e.date,new Date(t).toLocaleString().split(",")[0])),a.a.createElement("p",{className:b.a.comment__text},e.text));var t})):a.a.createElement("div",{className:b.a.comment},a.a.createElement("p",{className:b.a.comment__text},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")))),a.a.createElement("form",{onSubmit:function(t){console.log(t.target),t.preventDefault(),e.addComment(c,i),l(""),m("")},className:b.a.modal__form},a.a.createElement("input",{className:b.a.modal__input,type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:c,onChange:function(e){return l(e.target.value)}}),a.a.createElement("input",{className:b.a.modal__input,type:"text",placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:i,onChange:function(e){return m(e.target.value)}}),a.a.createElement("input",{disabled:(console.log(c),console.log(i),console.log(0!==c.length&&0!==i.length),!(0!==c.length&&0!==i.length)),className:b.a.modal__btn,type:"submit",value:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}))),a.a.createElement("button",{onClick:e.onClose,className:b.a.close})))))},w=function(e){Object(_.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(m.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={photos:[],photo:null,isOpen:!1},e.getDate=function(){return(new Date).toLocaleString().split(",")[0]},e.openModal=function(t){var o=+t.target.id;console.log(t.target.id),void 0!==o&&(e.fetchPhoto(o),e.setState({isOpen:!0}))},e.handleSubmit=function(t,o){var n=e.state.photo;n.comments.push({id:(new Date).toLocaleString(),text:o,date:Date.parse(new Date)}),e.postComment({name:t,comment:o}),e.setState({photo:n}),console.log("Submit function!")},e.handleCancel=function(){console.log("Cancel function!"),e.setState({isOpen:!1,photo:null})},e}return Object(u.a)(o,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://boiling-refuge-66454.herokuapp.com/images");case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent,this.setState({photos:o});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postComment",value:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.photo.comments),e.prev=1,e.next=4,fetch("https://boiling-refuge-66454.herokuapp.com/images/".concat(this.state.photo.id,"/comments"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchPhoto",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var o,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://boiling-refuge-66454.herokuapp.com/images/"+t);case 2:return o=e.sent,e.next=5,o.json();case 5:n=e.sent,console.log(n),this.setState({photo:n});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:d.a.photolist},a.a.createElement("div",{className:d.a.photolist__inner},this.state.photos.map((function(t){return a.a.createElement("img",{id:t.id,onClick:function(t){return e.openModal(t)},className:d.a.photo,alt:"photo1",src:t.url})})))),this.state.photo?a.a.createElement(E,{isOpen:this.state.isOpen,photo:this.state.photo,onClose:this.handleCancel,addComment:this.handleSubmit}):null)}}]),o}(n.Component);var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",{className:"title"},"TEST APP")),a.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5a93ebc8.chunk.js.map