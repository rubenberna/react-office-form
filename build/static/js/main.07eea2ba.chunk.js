(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){},192:function(e,t,a){e.exports=a.p+"static/media/logo.9856c8a5.png"},204:function(e,t,a){e.exports=a(436)},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},417:function(e,t,a){},436:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),l=a.n(i),o=a(17),c=a(18),s=a(20),u=a(19),d=a(21),m=a(41),p=a(53),f=(a(209),a(210),a(449)),h=a(446),g=a(445),b=a(437),v=a(450),y=(a(211),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderIfVisible",value:function(){if(this.props.visible)return r.a.createElement(v.a,{negative:!0,attached:"top",onDismiss:this.props.onClose},r.a.createElement(v.a.Header,null,this.props.children[0]),this.props.children[1])}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderIfVisible())}}]),t}(r.a.Component)),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.state.password&&a.state.office?a.props.onFormSubmit(a.state):a.setState({messageVisible:!0})},a.closeMsg=function(){a.setState({messageVisible:!1})},a.state={office:null,password:null,officesList:[],messageVisible:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.list){var t=this.props.list,a=[];t.map(function(t,n){var r={key:n,text:t.name,value:t.name};a.push(r),e.setState({officesList:a})})}else this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.messageVisible;return r.a.createElement("div",null,r.a.createElement(y,{visible:t,onClose:this.closeMsg},r.a.createElement("span",null,"Haastige spoed is zelden goed "),r.a.createElement("p",null,"Je moet een kantoor en een password selecteren!")),r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(f.a.Group,{className:"login-form",widths:"equal"},r.a.createElement(f.a.Field,{control:h.a,options:this.state.officesList,label:"Select your Kantoor",placeholder:"Kantoor",onChange:function(t){return e.setState({office:t.target.innerText})}}),r.a.createElement(f.a.Field,{id:"form-input-control-first-name",control:g.a,label:"Password",type:"password",placeholder:"*******",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement(f.a.Field,{id:"form-button-control-public",primary:!0,control:b.a,content:"Sign in"}))))}}]),t}(r.a.Component),E=Object(p.d)(k),j=a(447),A=function(){return r.a.createElement(j.a,{active:!0,inline:"centered",size:"huge"})},S={offices:[{key:"0",name:"Roeselare",password:"Roeselare06",regioID:"20006",sf_id:"0010Y000012KduBQAS",company:"SIVAC"},{key:"1",name:"Schilde",password:"Schilde04",regioID:"10004",sf_id:"0010Y00000ryjbuQAA",company:"EasyLife"},{key:"2",name:"Westmalle",password:"Westmalle05",regioID:"10005",sf_id:"0010Y00000ryjbqQAA",company:"EasyLife"},{key:"3",name:"Hasselt",password:"Hasselt07",regioID:"10007",sf_id:"0010Y00000ryjbnQAA",company:"EasyLife"},{key:"4",name:"Oostkamp",password:"Oostkamp05",regioID:"20005",sf_id:"0010Y00000ryjbrQAA",company:"SIVAC"},{key:"5",name:"Aalter",password:"Aalter04",regioID:"20004",sf_id:"0010Y00000ryjbsQAA",company:"SIVAC"},{key:"6",name:"Maldegem",password:"Maldegem03",regioID:"20003",sf_id:"0010Y00000ryjbtQAA",company:"SIVAC"},{key:"7",name:"Kortrijk",password:"Kortrijk07",regioID:"20007",sf_id:"0011v0000206dutAAA",company:"SIVAC"},{key:"8",name:"Oostduinkerke",password:"Oostduinkerke02",regioID:"20002",sf_id:"0010Y00000ryjbmQAA",company:"SIVAC"},{key:"9",name:"Genk",password:"Genk08",regioID:"10008",sf_id:"0010Y000015olJqQAI",company:"EasyLife"},{key:"10",name:"Kontich",password:"Kontich03",regioID:"10003",sf_id:"0010Y00000ryjbvQAA",company:"EasyLife"},{key:"11",name:"Sint-Martens-Latem",password:"Latem01",regioID:"30001",sf_id:"0010Y00000ryjbpQAA",company:"DILITO"},{key:"12",name:"Borsbeek",password:"Borsbeek02",regioID:"10002",sf_id:"0010Y00000ryjbyQAA",company:"EasyLife"},{key:"13",name:"Mechelen",password:"Mechelen09",regioID:"10009",sf_id:"0011v00001ik4TXAAY",company:"EasyLife"},{key:"14",name:"Lier",password:"Lier10",regioID:"10010",sf_id:"0011v00001rYSVSAA4",company:"EasyLife"},{key:"15",name:"Aalst",password:"Aalst03",regioID:"30003",sf_id:"0010Y00000ryjc0QAA",company:"DILITO"},{key:"16",name:"Londerzeel",password:"Londerzeel06",regioID:"10006",sf_id:"0010Y00000ryjbzQAA",company:"EasyLife"},{key:"17",name:"Middelkerke",password:"Middelkerke01",regioID:"20001",sf_id:"0010Y00000ryjbwQAA",company:"SIVAC"},{key:"18",name:"Wilrijk",password:"Wilrijk01",regioID:"10001",sf_id:"0010Y00000ryjbxQAA",company:"EasyLife"},{key:"19",name:"Melle",password:"Melle02",regioID:"30002",sf_id:"0010Y00000ryjboQAA",company:"DILITO"}],originKlant:[{key:"0",text:"Prints",value:"Prints"},{key:"1",text:"Telefoon",value:"Telefoon"},{key:"2",text:"Gekoppeld",value:"Gekoppeld"},{key:"3",text:"Personeel",value:"Personeel"},{key:"4",text:"Mond aan mond",value:"Mond aan mond"},{key:"5",text:"Radio & televisie",value:"Radio & televisie"},{key:"6",text:"Strijk",value:"Strijk"},{key:"7",text:"Tusci",value:"Tusci"},{key:"8",text:"Walk-in",value:"PerWalk-insoneel"},{key:"9",text:"Easy Partner",value:"Easy Partner"},{key:"10",text:"Facebook",value:"Facebook"},{key:"11",text:"Actie",value:"Actie"},{key:"12",text:"Andere",value:"Andere"}],availabilityKlant:[{key:"0",text:"Niet mogelijk",value:"Niet mogelijk"},{key:"1",text:"Voormidag",value:"Voormidag"},{key:"2",text:"Namiddag",value:"Namiddag"},{key:"3",text:"Maakt niet uit",value:"Maakt niet uit"},{key:"4",text:"Niet geweten",value:"Niet geweten"}],languages:[{key:"n",text:"Nederlands",value:"Nederlands"},{key:"f",text:"Frans",value:"Frans"}],originSolicitant:[{key:"0",text:"VDAB",value:"VDAB"},{key:"1",text:"Collega",value:"Collega"},{key:"2",text:"Walk in",value:"Walk in"},{key:"3",text:"EasyJobs",value:"EasyJobs"},{key:"4",text:"JobsDate",value:"JobsDate"},{key:"5",text:"Mond aan mond",value:"Mond aan mond"},{key:"6",text:"Radio &amp; televisie",value:"Radio &amp; televisie"},{key:"7",text:"Easy Partner",value:"Easy Partner"},{key:"8",text:"Facebook",value:"Facebook"},{key:"9",text:"Actie",value:"Actie"},{key:"10",text:"SMS",value:"SMS"}]},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={offices:S.offices.sort(a.compare),messageVisible:!1},a.validate=function(e){var t=a.state.offices,n=a.props.history,r=a.props.onLoggedIn,i=t.find(function(t){return t.name===e.office});i.password!==e.password?a.setState({messageVisible:!0}):(r(i),n.push("/"))},a.closeMsg=function(){a.setState({messageVisible:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"compare",value:function(e,t){var a=e.name,n=t.name,r=0;return a>n?r=1:a<n&&(r=-1),r}},{key:"renderLoading",value:function(){var e=this.state.offices;return e?r.a.createElement(E,{list:e,onFormSubmit:this.validate}):r.a.createElement(A,null)}},{key:"render",value:function(){var e=this.state.messageVisible;return r.a.createElement("div",{className:"login-container"},r.a.createElement(y,{visible:e,onClose:this.closeMsg},r.a.createElement("span",null,"Helaas pindakaas "),r.a.createElement("p",null,"Je password is niet juist ingevuld !")),this.renderLoading())}}]),t}(r.a.Component),C=Object(p.d)(w),I=a(28),O=a.n(I),x=a(43),N=a(54),_=a(448),L=a(26),D=(a(113),a(189)),V=a(27);function q(){var e=Object(L.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n"]);return q=function(){return e},e}var T=V.a.div(q()),F=function(){return r.a.createElement(T,null,r.a.createElement(D.a,{url:"https://giphy.com/embed/l4pTfx2qLszoacZRS",width:"480px",height:"480px",id:"myId",className:"myClassname",display:"initial",frameBorder:"0",position:"relative"}))},R=a(45);function Y(){var e=Object(L.a)(["\n  animation: 2s ",";\n  color: #16AB39;\n  text-align: center;\n"]);return Y=function(){return e},e}function B(){var e=Object(L.a)(["",""]);return B=function(){return e},e}var K=Object(V.b)(B(),R.fadeIn),P=V.a.div(Y(),K),Q=function(e){return r.a.createElement(P,null,e.children)};function H(){var e=Object(L.a)(["\n  animation: 1s ",";\n  background: aliceblue;\n"]);return H=function(){return e},e}function G(){var e=Object(L.a)(["",""]);return G=function(){return e},e}var M=Object(V.b)(G(),R.slideInRight),X=V.a.div(H(),M),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messageVisible:!1,Maandagpicklist__c:"Niet mogelijk",Dinsdagpicklist__c:"Niet mogelijk",Woensdagpicklist__c:"Niet mogelijk",Donderdagpicklist__c:"Niet mogelijk",Vrijdagpicklist__c:"Niet mogelijk",Zaterdagpicklist__c:"Niet mogelijk",lead_source:null},a.handleRadioChange=function(e,t){var n=t.value;a.setState({Frequentie__c:n})},a.handleInput=function(e,t){var n={};n[e]=t.target.value,a.setState(Object(N.a)({},n))},a.toggleGif=function(){a.props.error||a.setState({messageVisible:!0})},a.handleSubmit=function(){var e=Object(x.a)(O.a.mark(function e(t){var n,r,i,l;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.props,r=n.onFormSubmit,i=n.closeForm,l=n.closeError,r(a.state,"lead"),a.setState({loading:!0}),setTimeout(function(){a.setState({loading:!1}),a.toggleGif()},1e3),setTimeout(function(){i("klantBtn"),l()},6e3);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.Frequentie__c,n=t.messageVisible,i=t.lead_source,l=t.loading,o=this.props,c=o.error,s=o.closeError;return r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(Q,null,r.a.createElement("h2",null,"Lead created !"))),!n&&!l&&r.a.createElement(X,null,r.a.createElement(f.a,{className:"form-border",onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Nieuwe Klant"),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Voornaam",placeholder:"Voornaam",onChange:function(t){return e.handleInput("first_name",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Achternaam",placeholder:"Achternaam",onChange:function(t){return e.handleInput("last_name",t)}}),r.a.createElement(f.a.Select,{required:!0,fluid:!0,label:"Taal",options:S.languages,placeholder:"Taal",onChange:function(t){return e.setState({language_lead__c:t.target.innerText})}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{fluid:!0,label:"E-mail",placeholder:"E-mail",type:"email",onChange:function(t){return e.handleInput("email",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"GSM-Nummer",placeholder:"GSM-Nummer",type:"number",onChange:function(t){return e.handleInput("mobile",t)}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Straat",placeholder:"Straat",onChange:function(t){return e.handleInput("street",t)}}),r.a.createElement(f.a.Input,{fluid:!0,label:"Box",placeholder:"Box",onChange:function(t){return e.handleInput("Box__c",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Postcode",type:"number",placeholder:"Postcode",onChange:function(t){return e.handleInput("zip",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Gemeente",placeholder:"Gemeente",onChange:function(t){return e.handleInput("city",t)}})),r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Gewenst aantal uren (Per week)",placeholder:"bv: 3",type:"number",onChange:function(t){return e.handleInput("Gewenst_aantal_uren_per_week__c",t)}}),r.a.createElement(f.a.TextArea,{required:!0,label:"Bijkomende info",placeholder:"bv: heeft u huisdieren?",onChange:function(t){return e.handleInput("Wensen__c",t)}}),r.a.createElement(f.a.Group,{inline:!0,required:!0},r.a.createElement("label",null,"Hoevaak?"),r.a.createElement(f.a.Radio,{label:"Wekelijks",value:"Wekelijks",checked:"Wekelijks"===a,onChange:this.handleRadioChange}),r.a.createElement(f.a.Radio,{label:"Niet geweten",value:"Niet geweten",checked:"Niet geweten"===a,onChange:this.handleRadioChange}),r.a.createElement(f.a.Radio,{label:"Tweewekelijks",value:"Tweewekelijks",checked:"Tweewekelijks"===a,onChange:this.handleRadioChange})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Select,{fluid:!0,label:"Maandag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Maandagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,label:"Dinsdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Dinsdagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,label:"Woensdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Woensdagpicklist__c:t.target.innerText})}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Select,{fluid:!0,label:"Donderdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Donderdagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,label:"Vrijdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Vrijdagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,label:"Zaterdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Zaterdagpicklist__c:t.target.innerText})}})),r.a.createElement(f.a.Select,{fluid:!0,required:!0,label:"Oorsprong",options:S.originKlant,placeholder:"Telefoon",onChange:function(t){return e.setState({lead_source:t.target.innerText})}}),"Actie"===i&&r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Name",placeholder:"bv: Kerstmis",onChange:function(t){return e.handleInput("NaamActie__c",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,label:"Detail",placeholder:"bv: 24 December",onChange:function(t){return e.handleInput("DetailActie__c",t)}})),r.a.createElement(f.a.Button,{type:"submit",name:"submit",color:"orange"},"Bevestigen"))),r.a.createElement(y,{visible:c,onClose:s},r.a.createElement("span",null,"Something went wrong :("),r.a.createElement("p",null,"Please contact Red Carrots team")),l&&r.a.createElement(A,null))}}]),t}(n.Component),z=Object(p.d)(W),J=a(55);function U(){var e=Object(L.a)(["\n  animation: 1s ",";\n"]);return U=function(){return e},e}function Z(){var e=Object(L.a)(["",""]);return Z=function(){return e},e}var $=Object(V.b)(Z(),R.zoomIn),ee=V.a.div(U(),$),te=function(){return r.a.createElement(ee,null,r.a.createElement(J.a,{color:"green",size:"massive",className:"check-icon",style:{float:"right"},name:"check"}))};function ae(){var e=Object(L.a)(["\n  animation: 1s ",";\n  background: aliceblue;\n"]);return ae=function(){return e},e}function ne(){var e=Object(L.a)(["",""]);return ne=function(){return e},e}var re=Object(V.b)(ne(),R.slideInRight),ie=V.a.div(ae(),re),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messageVisible:!1,lead_source:null,disabled:!1},a.handleInput=function(e,t){var n={};n[e]=t.target.value,a.setState(Object(N.a)({},n))},a.toggleSuccess=function(){a.props.error||a.setState({messageVisible:!0})},a.handleSubmit=function(){var e=Object(x.a)(O.a.mark(function e(t){var n,r,i,l;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.props,r=n.onFormSubmit,i=n.closeForm,l=n.closeError,r(a.state,"solicitant"),a.setState({loading:!0,disabled:!0}),setTimeout(function(){a.setState({loading:!1}),a.toggleSuccess()},1e3),setTimeout(function(){i("solicitantBtn"),l()},4500);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.messageVisible,n=t.lead_source,i=t.loading,l=t.disabled,o=this.props,c=o.error,s=o.closeError;return r.a.createElement("div",null,a&&r.a.createElement(te,null),r.a.createElement(ie,null,r.a.createElement(f.a,{className:"form-border",onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Nieuwe Solicitant"),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"Voornaam",placeholder:"Voornaam",onChange:function(t){return e.handleInput("first_name",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"Achternaam",placeholder:"Achternaam",onChange:function(t){return e.handleInput("last_name",t)}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{fluid:!0,disabled:l,label:"E-mail",type:"email",placeholder:"E-mail",onChange:function(t){return e.handleInput("email",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"GSM-Nummer",placeholder:"GSM-Nummer",type:"number",onChange:function(t){return e.handleInput("mobile",t)}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"Straat",placeholder:"Straat",onChange:function(t){return e.handleInput("street",t)}}),r.a.createElement(f.a.Input,{fluid:!0,disabled:l,label:"Box",placeholder:"Box",onChange:function(t){return e.handleInput("Box__c",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,type:"number",label:"Postcode",placeholder:"Postcode",onChange:function(t){return e.handleInput("zip",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"Gemeente",placeholder:"Gemeente",onChange:function(t){return e.handleInput("city",t)}})),r.a.createElement(f.a.Select,{fluid:!0,disabled:l,required:!0,label:"Oorsprong",options:S.originSolicitant,placeholder:"Collega",onChange:function(t){return e.setState({lead_source:t.target.innerText})}}),"Actie"===n&&r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"Name",placeholder:"bv: Kerstmis",onChange:function(t){return e.handleInput("NaamActie__c",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:l,fluid:!0,label:"Detail",placeholder:"bv: 24 December",onChange:function(t){return e.handleInput("DetailActie__c",t)}})),r.a.createElement(f.a.Button,{color:"orange"},"Bevestigen"))),r.a.createElement(y,{visible:c,onClose:s},r.a.createElement("span",null,"Something went wrong :("),r.a.createElement("p",null,"Please contact Red Carrots team")),i&&r.a.createElement(A,{className:"loader-form"}))}}]),t}(n.Component),oe=(a(417),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".bounce").style.backgroundImage="url(data:image/png;base64,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)"}},{key:"render",value:function(){return r.a.createElement("div",{className:"empty-icon-container"},r.a.createElement("div",{className:"animation-container"},r.a.createElement("div",{className:"bounce"}),r.a.createElement("div",{className:"pebble1"}),r.a.createElement("div",{className:"pebble2"}),r.a.createElement("div",{className:"pebble3"})),r.a.createElement("div",null,r.a.createElement("h3",{style:{fontStyle:"italic",marginTop:"40px"}},"Waiting for your move...")))}}]),t}(r.a.Component)),ce=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={klantBtn:!1,solicitantBtn:!1},a.handleClick=function(e){var t,n=a.state,r=e.target.value,i={};Object.keys(n).forEach(function(e){e!==r&&(t=e)}),i[r]=!1===n[r],i[t]=!1,a.setState(Object(N.a)({},i))},a.closeForm=function(e){var t={};t[e]=!1,a.setState(Object(N.a)({},t))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"switchForm",value:function(){var e=this.props,t=e.onFormSubmit,a=e.error,n=e.closeError,i=this.state,l=i.klantBtn,o=i.solicitantBtn;return l?r.a.createElement(z,{onFormSubmit:t,closeForm:this.closeForm,error:a,closeError:n}):o?r.a.createElement(le,{onFormSubmit:t,closeForm:this.closeForm,error:a,closeError:n}):r.a.createElement(oe,null)}},{key:"render",value:function(){var e=this,t=this.state,a=t.klantBtn,n=t.solicitantBtn;return r.a.createElement(_.a,null,r.a.createElement("div",{className:"form-options"},r.a.createElement("div",{className:"form-options-buttons"},r.a.createElement("h3",{style:{textAlign:"center"}},"Selecteer uw form"),r.a.createElement("div",null,r.a.createElement(b.a,{toggle:!0,active:a,value:"klantBtn",onClick:function(t){return e.handleClick(t)}},"Klant"),r.a.createElement(b.a,{toggle:!0,active:n,value:"solicitantBtn",onClick:function(t){return e.handleClick(t)}},"Solicitant"))),r.a.createElement("div",{className:"form-options-selected"},this.switchForm())))}}]),t}(r.a.Component),se=a(124),ue=a.n(se),de="https://cors-anywhere.herokuapp.com/",me="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=00D1q0000008dST",pe={postLead:function(e){return ue.a.post("".concat(de).concat(me,"&first_name=").concat(e.first_name,"&last_name=").concat(e.last_name,"&00N1v00000SjZYU=").concat(e.language_lead__c,"&email=").concat(e.email,"&mobile=").concat(e.mobile,"&street=").concat(e.street,"&00N0Y00000R6Rsq=").concat(e.Box__c,"&zip=").concat(e.zip,"&city=").concat(e.city,"&00N0Y000007xqGf=").concat(e.Gewenst_aantal_uren_per_week__c,"&00N0Y000009dQFo=").concat(e.Wensen__c,"&00N0Y00000R6Rt2=").concat(e.Frequentie__c,"&00N0Y00000R6RtA=").concat(e.Maandagpicklist__c,"&00N0Y00000R6Rsv=").concat(e.Dinsdagpicklist__c,"&00N0Y00000R6RtN=").concat(e.Woensdagpicklist__c,"&00N0Y00000R6Rsw=").concat(e.Donderdagpicklist__c,"&00N0Y00000R6RtL=").concat(e.Vrijdagpicklist__c,"&00N0Y00000R6RtO=").concat(e.Zaterdagpicklist__c,"&lead_source=").concat(e.lead_source,"&00N0Y00000R6RtI=").concat(e.RegioId__c,"&00N0Y00000R6Rt5=").concat(e.KantoorId__c,"&00N0Y00000RzeEo=").concat(e.NaamActie__c,"&00N0Y00000RzeEt=").concat(e.DetailActie__c)).then(function(e){return e.status}).catch(function(e){return e})},postSolicitant:function(e){return ue.a.post("".concat(de).concat(me,"&first_name=").concat(e.first_name,"&last_name=").concat(e.last_name,"&00N1v00000SjZYU=").concat(e.language_lead__c,"&email=").concat(e.email,"&mobile=").concat(e.mobile,"&street=").concat(e.street,"&00N0Y00000R6Rsq=").concat(e.Box__c,"&zip=").concat(e.zip,"&city=").concat(e.city,"&lead_source=").concat(e.lead_source,"&00N0Y00000R6RtI=").concat(e.RegioId__c,"&00N0Y00000R6Rt5=").concat(e.KantoorId__c,"&00N0Y00000R8AfP=1&00N0Y00000RzeEo=").concat(e.NaamActie__c,"&00N0Y00000RzeEt=").concat(e.DetailActie__c)).then(function(e){return e.status}).catch(function(e){return e})}},fe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={error:!1},a.renderOptions=function(){var e=a.props,t=e.user,n=e.history,i=a.state.error;if(t)return r.a.createElement(ce,{onFormSubmit:a.switchForm,error:i,closeError:a.closeError});n.push("/login")},a.closeError=function(){a.setState({error:!1})},a.switchForm=function(e,t){"lead"===t&&a.createLead(e),"solicitant"===t&&a.createSolicitant(e)},a.createLead=function(){var e=Object(x.a)(O.a.mark(function e(t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.user,t.RegioId__c=n.regioID,t.KantoorId__c=n.sf_id,t.company=n.name,e.next=6,pe.postLead(t);case 6:200!==(r=e.sent)&&a.setState({error:r});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.createSolicitant=function(){var e=Object(x.a)(O.a.mark(function e(t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.user,t.KantoorId__c=n.sf_id,t.company=n.name,t.RegioId__c=n.regioID,e.next=6,pe.postSolicitant(t);case 6:200!==(r=e.sent)&&a.setState({error:r});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},this.renderOptions())}}]),t}(r.a.Component),he=Object(p.d)(fe),ge=a(192),be=a.n(ge),ve=(a(115),function(e){var t=e.office,a=e.quitSession;return r.a.createElement("button",{className:"ui red button logout-btn "+(t?"show":"hide"),onClick:a},r.a.createElement("i",{className:"icon user"}),"Logout")}),ye=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).openLoginForm=Object(x.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.history.push("/login");case 1:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"ui red button logout-btn ",onClick:this.openLoginForm},r.a.createElement("i",{className:"icon user"}),"Login")}}]),t}(r.a.Component),ke=Object(p.d)(ye),Ee=function(e){var t=e.office,a=e.onLogout;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("div",{className:"navbar-logo"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:be.a,alt:"Logo",className:"logo"}))),r.a.createElement("div",{className:"navbar-greeting"},function(){if(t)return r.a.createElement("h2",null,"Hallo, ",t.name,"!")}())),t?r.a.createElement(ve,{office:t,quitSession:a}):r.a.createElement(ke,null))},je=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem("user"))},a.saveUser=function(e){localStorage.setItem("user",JSON.stringify(e)),a.setState({user:e})},a.logoutUser=function(){localStorage.removeItem("user"),a.setState({user:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(Ee,{office:this.state.user,onLogout:this.logoutUser}),r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(he,{user:e.state.user})}}),r.a.createElement(p.a,{path:"/login",render:function(){return r.a.createElement(C,{onLoggedIn:e.saveUser})}})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(je,null),document.querySelector("#root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.07eea2ba.chunk.js.map