(this.webpackJsonpdemo_consultancyapp=this.webpackJsonpdemo_consultancyapp||[]).push([[0],{40:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),s=a.n(r),c=a(14),o=a(15),m=a(18),i=a(16),h=a(19),u=(a(45),a(71));a(46);function d(e){var t=e.name;return l.a.createElement(n.Fragment,null,l.a.createElement("li",null,l.a.createElement("a",{href:" "},t)))}var p=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"NAVBARMAIN"},l.a.createElement("ul",{className:"navbarUl"},l.a.createElement(d,{name:"HOME"}),l.a.createElement(d,{name:"ABOUT US"}),l.a.createElement(d,{name:"JOBS"}),l.a.createElement(d,{name:"CLIENTS"}),l.a.createElement(d,{name:" CONTACT US"}))))},g=a(70);function E(e){return l.a.createElement("div",null,l.a.createElement(g.a,{show:e.show,onHide:e.close,size:"lg","aria-labelledby":"contained-modal-title-vcenter"},l.a.createElement(g.a.Header,{closeButton:!0,className:"bg-danger"},l.a.createElement(g.a.Title,null,"Register")),l.a.createElement(g.a.Body,null,e.children)))}var v=a(35),f=a(38),b=a(22),N=a.n(b),y=a(36),w=a(37),C=a.n(w),S=function(e){var t=Object.assign({},e);return l.a.createElement(n.Fragment,null,l.a.createElement("input",t))},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).onSubmitMethod=function(){var e=Object(y.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("photo",a.state.photo),n.append("firstname",a.state.firstname),n.append("lastname",a.state.lastname),n.append("email",a.state.email),n.append("phonenumber",a.state.phonenumber),n.append("price",a.state.age),n.append("state",a.state.state),n.append("address",a.state.address),n.append("tagsArray",a.state.tagsArray),e.next=13,C.a.post("http://localhost:4000/post/form",n,{}).then((function(e){console.log(e),alert("Thank you"),a.props.close()}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handletagmethod=function(e){var t=a.state.tagsArray.filter((function(t){return t!==e}));a.setState({tagsArray:t})},a.addinarray=function(){if(!a.state.tags||a.state.tagsArray.length>5)return null;a.setState({tagsArray:[].concat(Object(f.a)(a.state.tagsArray),[a.state.tags])}),a.setState({tags:""})},a.onchangemethod=function(e){var t=document.getElementById("myRange");document.getElementById("myOwnSpan").style.left="".concat(t.value-1,"%"),a.setState(Object(v.a)({},e.target.name,e.target.value))},a.img=function(e){a.setState({photo:e.target.files[0]},(function(){console.log(a.state.photo)}))},a.state={firstname:"",lastname:"",email:"",phonenumber:"",age:"18",state:"Maharashtra",address:"",tags:"",tagsArray:[],photo:null},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.onSubmitMethod},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"subbox1 col-lg-3 ml-4 col-md-3 "},l.a.createElement("input",{type:"file",id:"photo",name:"photo",placeholder:"Photo",onChange:this.img,value:this.state.value,style:{backgroundColor:"#EEFFDF",width:"max-fit",height:"3rem"},className:" col-lg-10 col-sm-12 m-2 form-control "})),l.a.createElement("div",{className:"col-lg-7 col-md-7 mt-2   subbox2"},l.a.createElement("input",{type:"text",name:"firstname",placeholder:"FirstName",pattern:"[a-z,A-Z]{3,10}",value:this.state.firstname,onChange:this.onchangemethod,className:"form-control col-lg-11"}),l.a.createElement("input",{type:"text",className:"ml-0 mt-3 form-control col-lg-11 ",name:"lastname",placeholder:"LastName",value:this.state.lastname,onChange:this.onchangemethod}),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(S,{type:"email",className:"col-lg-11 form-control",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onchangemethod}))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("input",{type:"text",className:"col-lg-11 form-control",name:"phonenumber",placeholder:"+91",value:this.state.phonenumber,onChange:this.onchangemethod}))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-lg-11 "},l.a.createElement("input",{type:"range",min:"1",max:"100",name:"age",onChange:this.onchangemethod,value:this.state.age,id:"myRange"}),l.a.createElement("span",{id:"myOwnSpan"}," ",this.state.age))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("select",{id:"state",name:"state",onChange:this.onchangemethod,className:"custom-select col-lg-11"},l.a.createElement("option",{value:"Maharashtra"},"Maharashtra"),l.a.createElement("option",{value:"Goa"},"Goa"),l.a.createElement("option",{value:"MP"},"MP")))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("input",{type:"text",className:"col-lg-11 form-control",name:"address",placeholder:"Address",value:this.state.address,onChange:this.onchangemethod}))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-lg-12 btn-group"},l.a.createElement("input",{type:"text",className:"col-lg-8 col-sm-6 form-control",name:"tags",placeholder:"Tags",value:this.state.tags,onChange:this.onchangemethod}),l.a.createElement("button",{className:"col-lg-2 col-sm-6 btn btn-success",type:"button",onClick:this.addinarray}," Add")),l.a.createElement("section",{className:"col-md-12 mt-2"},this.state.tagsArray.map((function(t,a){return l.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm mr-1",key:t+a,onClick:function(){e.handletagmethod(t)}}," ",t)})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row m-3"},l.a.createElement("div",{className:"col-md-6 mx-auto "},l.a.createElement(u.a,{variant:"dark",type:"submit",onClick:this.props.close},"Cancel")),l.a.createElement("div",{className:"col-md-6 mx-auto "},l.a.createElement(u.a,{variant:"primary",type:""},"Submit ")))))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleClose=function(){return a.setState({show:!1})},a.handleShow=function(){return a.setState({show:!0})},a.state={show:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"homeMainRoot"},l.a.createElement("div",{className:"logo"},"Logo"),l.a.createElement("div",{className:"NavabrHolder"},l.a.createElement(p,null)),l.a.createElement(E,{close:this.handleClose,Show:this.handleShow,show:this.state.show},l.a.createElement(O,{close:this.handleClose})),l.a.createElement("div",{className:"button"},l.a.createElement(u.a,{variant:"dark",onClick:this.handleShow},"Register")))}}]),t}(n.Component),j=function(){return l.a.createElement("div",null,l.a.createElement(A,null))};a(67);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,null))};s.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.47d28f6e.chunk.js.map