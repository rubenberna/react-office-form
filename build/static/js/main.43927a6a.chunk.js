(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){},131:function(e,t,a){},192:function(e,t,a){e.exports=a.p+"static/media/logo.9856c8a5.png"},206:function(e,t,a){e.exports=a(437)},211:function(e,t,a){},212:function(e,t,a){},418:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(45),o=a.n(i),l=a(17),c=a(18),s=a(20),u=a(19),d=a(21),m=a(43),p=a(55),f=(a(211),a(212),a(450)),g=a(447),h=a(446),b=a(438),v=a(451),k=(a(131),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderIfVisible",value:function(){if(this.props.visible)return r.a.createElement(v.a,{negative:!0,attached:"top",onDismiss:this.props.onClose},r.a.createElement(v.a.Header,null,this.props.children[0]),this.props.children[1])}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderIfVisible())}}]),t}(r.a.Component)),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.state.password&&a.state.office?a.props.onFormSubmit(a.state):a.setState({messageVisible:!0})},a.closeMsg=function(){a.setState({messageVisible:!1})},a.state={office:null,password:null,officesList:[],messageVisible:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.list){var t=this.props.list,a=[];t.map(function(t,n){var r={key:n,text:t.name,value:t.name};a.push(r),e.setState({officesList:a})})}else this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.messageVisible;return r.a.createElement("div",null,r.a.createElement(k,{visible:t,onClose:this.closeMsg},r.a.createElement("span",null,"Haastige spoed is zelden goed "),r.a.createElement("p",null,"Je moet een kantoor en een password selecteren!")),r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(f.a.Group,{className:"login-form",widths:"equal"},r.a.createElement(f.a.Field,{control:g.a,options:this.state.officesList,label:"Select your Kantoor",placeholder:"Kantoor",onChange:function(t){return e.setState({office:t.target.innerText})}}),r.a.createElement(f.a.Field,{id:"form-input-control-first-name",control:h.a,label:"Password",type:"password",placeholder:"*******",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement(f.a.Field,{id:"form-button-control-public",primary:!0,control:b.a,content:"Sign in"}))))}}]),t}(r.a.Component),E=Object(p.d)(_),y=a(448),j=function(){return r.a.createElement(y.a,{active:!0,inline:"centered",size:"huge"})},S={offices:[{key:"0",name:"Roeselare",password:"Roeselare06",regioID:"20006",sf_id:"0010Y000012KduBQAS",company:"SIVAC"},{key:"1",name:"Schilde",password:"Schilde04",regioID:"10004",sf_id:"0010Y00000ryjbuQAA",company:"EasyLife"},{key:"2",name:"Westmalle",password:"Westmalle05",regioID:"10005",sf_id:"0010Y00000ryjbqQAA",company:"EasyLife"},{key:"3",name:"Hasselt",password:"Hasselt07",regioID:"10007",sf_id:"0010Y00000ryjbnQAA",company:"EasyLife"},{key:"4",name:"Oostkamp",password:"Oostkamp05",regioID:"20005",sf_id:"0010Y00000ryjbrQAA",company:"SIVAC"},{key:"5",name:"Aalter",password:"Aalter04",regioID:"20004",sf_id:"0010Y00000ryjbsQAA",company:"SIVAC"},{key:"6",name:"Maldegem",password:"Maldegem03",regioID:"20003",sf_id:"0010Y00000ryjbtQAA",company:"SIVAC"},{key:"7",name:"Kortrijk",password:"Kortrijk07",regioID:"20007",sf_id:"0011v0000206dutAAA",company:"SIVAC"},{key:"8",name:"Oostduinkerke",password:"Oostduinkerke02",regioID:"20002",sf_id:"0010Y00000ryjbmQAA",company:"SIVAC"},{key:"9",name:"Genk",password:"Genk08",regioID:"10008",sf_id:"0010Y000015olJqQAI",company:"EasyLife"},{key:"10",name:"Kontich",password:"Kontich03",regioID:"10003",sf_id:"0010Y00000ryjbvQAA",company:"EasyLife"},{key:"11",name:"Sint-Martens-Latem",password:"Latem01",regioID:"30001",sf_id:"0010Y00000ryjbpQAA",company:"DILITO"},{key:"12",name:"Borsbeek",password:"Borsbeek02",regioID:"10002",sf_id:"0010Y00000ryjbyQAA",company:"EasyLife"},{key:"13",name:"Mechelen",password:"Mechelen09",regioID:"10009",sf_id:"0011v00001ik4TXAAY",company:"EasyLife"},{key:"14",name:"Lier",password:"Lier10",regioID:"10010",sf_id:"0011v00001rYSVSAA4",company:"EasyLife"},{key:"15",name:"Aalst",password:"Aalst03",regioID:"30003",sf_id:"0010Y00000ryjc0QAA",company:"DILITO"},{key:"16",name:"Londerzeel",password:"Londerzeel06",regioID:"10006",sf_id:"0010Y00000ryjbzQAA",company:"EasyLife"},{key:"17",name:"Middelkerke",password:"Middelkerke01",regioID:"20001",sf_id:"0010Y00000ryjbwQAA",company:"SIVAC"},{key:"18",name:"Wilrijk",password:"Wilrijk01",regioID:"10001",sf_id:"0010Y00000ryjbxQAA",company:"EasyLife"},{key:"19",name:"Melle",password:"Melle02",regioID:"30002",sf_id:"0010Y00000ryjboQAA",company:"DILITO"}],originKlant:[{key:"0",text:"Prints",value:"Prints"},{key:"1",text:"Google",value:"Google"},{key:"2",text:"Actie",value:"Actie"},{key:"3",text:"Personeel",value:"Personeel"},{key:"4",text:"Mond aan mond",value:"Mond aan mond"},{key:"5",text:"Radio & televisie",value:"Radio & televisie"},{key:"6",text:"Strijk",value:"Strijk"},{key:"7",text:"Facebook",value:"Facebook"},{key:"8",text:"Walk-in",value:"PerWalk-insoneel"}],availabilityKlant:[{key:"0",text:"Niet mogelijk",value:"Niet mogelijk"},{key:"1",text:"Voormidag",value:"Voormidag"},{key:"2",text:"Namiddag",value:"Namiddag"},{key:"3",text:"Maakt niet uit",value:"Maakt niet uit"},{key:"4",text:"Niet geweten",value:"Niet geweten"}],languages:[{key:"n",text:"nl",value:"Nederlands"},{key:"f",text:"fr",value:"Frans"}],originSolicitant:[{key:"0",text:"VDAB",value:"VDAB"},{key:"1",text:"Collega",value:"Collega"},{key:"2",text:"Walk in",value:"Walk in"},{key:"3",text:"Google",value:"Google"},{key:"4",text:"JobDate",value:"JobDate"},{key:"5",text:"Mond aan mond",value:"Mond aan mond"},{key:"6",text:"Radio & televisie",value:"Radio & televisie"},{key:"7",text:"Indeed",value:"Indeed"},{key:"8",text:"Facebook",value:"Facebook"},{key:"9",text:"Actie",value:"Actie"},{key:"10",text:"SMS",value:"SMS"}]},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={offices:S.offices.sort(a.compare),messageVisible:!1},a.validate=function(e){var t=a.state.offices,n=a.props.history,r=a.props.onLoggedIn,i=t.find(function(t){return t.name===e.office});i.password!==e.password?a.setState({messageVisible:!0}):(r(i),n.push("/"))},a.closeMsg=function(){a.setState({messageVisible:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"compare",value:function(e,t){var a=e.name,n=t.name,r=0;return a>n?r=1:a<n&&(r=-1),r}},{key:"renderLoading",value:function(){var e=this.state.offices;return e?r.a.createElement(E,{list:e,onFormSubmit:this.validate}):r.a.createElement(j,null)}},{key:"render",value:function(){var e=this.state.messageVisible;return r.a.createElement("div",{className:"login-container"},r.a.createElement(k,{visible:e,onClose:this.closeMsg},r.a.createElement("span",null,"Helaas pindakaas "),r.a.createElement("p",null,"Je password is niet juist ingevuld !")),this.renderLoading())}}]),t}(r.a.Component),w=Object(p.d)(I),O=a(23),A=a.n(O),N=a(30),C=a(47),x=a(449),R=a(32),D=a(445),F=a(33),q=(a(113),a(57)),V=a(56);a(418);function Y(){var e=Object(R.a)(["\n  animation: 1s ",";\n"]);return Y=function(){return e},e}function L(){var e=Object(R.a)(["\n  animation: 1s ",";\n"]);return L=function(){return e},e}function T(){var e=Object(R.a)(["",""]);return T=function(){return e},e}function B(){var e=Object(R.a)(["",""]);return B=function(){return e},e}var G=Object(F.b)(B(),V.zoomIn),M=Object(F.b)(T(),V.fadeIn),K=F.a.div(L(),G),z=F.a.div(Y(),M),P=function(){return r.a.createElement("div",null,r.a.createElement(K,null,r.a.createElement(q.a,{color:"green",size:"massive",className:"check-icon",name:"check"})),r.a.createElement(z,{className:"check-icon-thanks"},"Prima !"))},Q=a(75),W=a.n(Q),J=function(e){return W.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat("http://opzoeken-postcode.be/").concat(e,".json")).then(function(e){return e}).then(function(e){return e.data}).catch(function(e){return e})};function U(){var e=Object(R.a)(["\n  animation: 1s ",";\n  background: #F9FAFB;\n"]);return U=function(){return e},e}function H(){var e=Object(R.a)(["",""]);return H=function(){return e},e}var Z=Object(F.b)(H(),V.slideInRight),X=F.a.div(U(),Z),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messageVisible:!1,cities:[],loadingInput:!1,disabled:!1,originError:null,cityError:null,langError:null,first_name:"",last_name:"",language_lead__c:"",email:"",mobile:"",street:"",Box__c:"",zip:"",city:"",Gewenst_aantal_uren_per_week__c:"",strijk:!1,Wensen__c:"",Frequentie__c:"",lead_source:"",NaamActie__c:"",DetailActie__c:"",Maandagpicklist__c:"Niet mogelijk",Dinsdagpicklist__c:"Niet mogelijk",Woensdagpicklist__c:"Niet mogelijk",Donderdagpicklist__c:"Niet mogelijk",Vrijdagpicklist__c:"Niet mogelijk",Zaterdagpicklist__c:"Niet mogelijk"},a.handleRadioChange=function(e,t){var n=t.value;a.setState({Frequentie__c:n})},a.handleStrijkChange=function(){a.setState({strijk:!a.state.strijk})},a.handleInput=function(e,t){var n={},r=t.target.value;r=r.charAt(0).toUpperCase()+r.slice(1),n[e]=r,a.setState(Object(C.a)({},n))},a.clearFieldError=function(e){var t={};t[e]=!1,a.setState(Object(C.a)({},t))},a.toggleGif=function(){a.props.error||a.setState({messageVisible:!0})},a.findCity=function(){var e=Object(N.a)(A.a.mark(function e(t){var n,r,i;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,a.setState({zip:n}),!n){e.next=10;break}return a.setState({loadingInput:!0}),e.next=6,J(n);case 6:r=e.sent,i=r.map(function(e){return{key:e.Postcode.naam_deelgemeente,text:e.Postcode.naam_deelgemeente,value:e.Postcode.naam_deelgemeente}}),a.setState({cities:i}),a.setState({loadingInput:!1});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(){var e=Object(N.a)(A.a.mark(function e(t){var n,r,i,o,l,c,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.props,r=n.onFormSubmit,i=n.closeForm,o=n.closeError,l=a.state,c=l.lead_source,s=l.city,l.language_lead__c?s?c?(r(a.state,"lead"),a.setState({loading:!0,disabled:!0}),setTimeout(function(){a.setState({loading:!1}),a.toggleGif()},1e3),setTimeout(function(){i("klantBtn"),o()},6e3)):a.setState({originError:!0}):a.setState({cityError:!0}):a.setState({langError:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.Frequentie__c,n=t.messageVisible,i=t.lead_source,o=t.loading,l=t.cities,c=t.loadingInput,s=t.disabled,u=t.cityError,d=t.originError,m=t.langError,p=this.props,g=p.error,h=p.closeError;return r.a.createElement("div",null,n&&r.a.createElement(P,null),r.a.createElement(X,null,r.a.createElement(f.a,{className:"form-border",onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Nieuwe Klant"),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"Voornaam",placeholder:"Voornaam",onChange:function(t){return e.handleInput("first_name",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"Achternaam",placeholder:"Achternaam",onChange:function(t){return e.handleInput("last_name",t)}}),r.a.createElement(f.a.Select,{required:!0,fluid:!0,disabled:s,error:m,label:"Taal",options:S.languages,placeholder:"Taal",onFocus:function(t){return e.clearFieldError("langError")},onChange:function(t){return e.setState({language_lead__c:t.target.innerText})}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{fluid:!0,disabled:s,label:"E-mail",placeholder:"E-mail",type:"email",onChange:function(t){return e.handleInput("email",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"GSM-Nummer",placeholder:"GSM-Nummer",type:"number",onChange:function(t){return e.handleInput("mobile",t)}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"Straat",placeholder:"Straat",onChange:function(t){return e.handleInput("street",t)}}),r.a.createElement(f.a.Input,{fluid:!0,disabled:s,label:"Box",placeholder:"Box",onChange:function(t){return e.handleInput("Box__c",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"Postcode",type:"number",placeholder:"Postcode",onChange:function(t){return e.findCity(t)}}),r.a.createElement(f.a.Select,{required:!0,disabled:s,error:u,loading:c,fluid:!0,label:"Gemeente",options:l,placeholder:l.length>0?"selecteer":"geen resultaat",onFocus:function(t){return e.clearFieldError("cityError")},onChange:function(t){return e.setState({city:t.target.innerText})}})),r.a.createElement(f.a.Group,{style:{display:"flex",alignItems:"center"}},r.a.createElement(f.a.Input,{width:7,required:!0,disabled:s,fluid:!0,label:"Gewenst aantal uren (Per week)",placeholder:"bv: 3",type:"number",onChange:function(t){return e.handleInput("Gewenst_aantal_uren_per_week__c",t)}}),r.a.createElement(f.a.Field,{control:D.a,disabled:s,label:"Strijk",onChange:this.handleStrijkChange})),r.a.createElement(f.a.TextArea,{required:!0,disabled:s,label:"Bijkomende info",placeholder:"bv: heeft u huisdieren?",onChange:function(t){return e.handleInput("Wensen__c",t)}}),r.a.createElement(f.a.Group,{inline:!0,required:!0},r.a.createElement("label",null,"Hoevaak?"),r.a.createElement(f.a.Radio,{label:"Wekelijks",value:"Wekelijks",checked:"Wekelijks"===a,onChange:this.handleRadioChange,disabled:s}),r.a.createElement(f.a.Radio,{label:"Niet geweten",value:"Niet geweten",checked:"Niet geweten"===a,onChange:this.handleRadioChange,disabled:s}),r.a.createElement(f.a.Radio,{label:"Tweewekelijks",value:"Tweewekelijks",checked:"Tweewekelijks"===a,onChange:this.handleRadioChange,disabled:s})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Select,{fluid:!0,disabled:s,label:"Maandag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Maandagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,disabled:s,label:"Dinsdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Dinsdagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,disabled:s,label:"Woensdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Woensdagpicklist__c:t.target.innerText})}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Select,{fluid:!0,disabled:s,label:"Donderdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Donderdagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,disabled:s,label:"Vrijdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Vrijdagpicklist__c:t.target.innerText})}}),r.a.createElement(f.a.Select,{fluid:!0,disabled:s,label:"Zaterdag",defaultValue:"Niet mogelijk",options:S.availabilityKlant,placeholder:"Niet mogelijk",onChange:function(t){return e.setState({Zaterdagpicklist__c:t.target.innerText})}})),r.a.createElement(f.a.Select,{fluid:!0,disabled:s,error:d,required:!0,label:"Oorsprong",options:S.originKlant,placeholder:"Telefoon",onFocus:function(t){return e.clearFieldError("originError")},onChange:function(t){return e.setState({lead_source:t.target.innerText})}}),"Actie"===i&&r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"Name",placeholder:"bv: Kerstmis",onChange:function(t){return e.handleInput("NaamActie__c",t)}}),r.a.createElement(f.a.Input,{required:!0,fluid:!0,disabled:s,label:"Detail",placeholder:"bv: 24 December",onChange:function(t){return e.handleInput("DetailActie__c",t)}})),r.a.createElement(f.a.Button,{type:"submit",name:"submit",color:"orange"},"Bevestigen"))),r.a.createElement(k,{visible:g,onClose:h},r.a.createElement("span",null,"Something went wrong :("),r.a.createElement("p",null,"Please contact Red Carrots team")),o&&r.a.createElement(j,null))}}]),t}(n.Component),ee=Object(p.d)($);function te(){var e=Object(R.a)(["\n  animation: 1s ",";\n  background: #F9FAFB;\n"]);return te=function(){return e},e}function ae(){var e=Object(R.a)(["",""]);return ae=function(){return e},e}var ne=Object(F.b)(ae(),V.slideInUp),re=F.a.div(te(),ne),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messageVisible:!1,originError:null,cityError:null,lead_source:"",disabled:!1,cities:[],loadingInput:!1,first_name:"",last_name:"",email:"",mobile:"",street:"",Box__c:"",zip:"",city:"",NaamActie__c:"",DetailActie__c:""},a.handleInput=function(e,t){var n={},r=t.target.value;r=r.charAt(0).toUpperCase()+r.slice(1),n[e]=r,a.setState(Object(C.a)({},n))},a.clearFieldError=function(e){var t={};t[e]=!1,a.setState(Object(C.a)({},t))},a.toggleSuccess=function(){a.props.error||a.setState({messageVisible:!0})},a.findCity=function(){var e=Object(N.a)(A.a.mark(function e(t){var n,r,i;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,a.setState({zip:n}),!n){e.next=10;break}return a.setState({loadingInput:!0}),e.next=6,J(n);case 6:r=e.sent,i=r.map(function(e){return{key:e.Postcode.naam_deelgemeente,text:e.Postcode.naam_deelgemeente,value:e.Postcode.naam_deelgemeente}}),a.setState({cities:i}),a.setState({loadingInput:!1});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(){var e=Object(N.a)(A.a.mark(function e(t){var n,r,i,o,l,c;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.props,r=n.onFormSubmit,i=n.closeForm,o=n.closeError,l=a.state,c=l.lead_source,l.city?c?(r(a.state,"solicitant"),a.setState({loading:!0,disabled:!0}),setTimeout(function(){a.setState({loading:!1}),a.toggleSuccess()},1e3),setTimeout(function(){i("solicitantBtn"),o()},6e3)):a.setState({originError:!0}):a.setState({cityError:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.messageVisible,n=t.lead_source,i=t.loading,o=t.disabled,l=t.cities,c=t.loadingInput,s=t.cityError,u=t.originError,d=this.props,m=d.error,p=d.closeError;return r.a.createElement("div",null,a&&r.a.createElement(P,null),r.a.createElement(re,null,r.a.createElement(f.a,{className:"form-border",onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Nieuwe Solicitant"),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"Voornaam",placeholder:"Voornaam",onChange:function(t){return e.handleInput("first_name",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"Achternaam",placeholder:"Achternaam",onChange:function(t){return e.handleInput("last_name",t)}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{fluid:!0,disabled:o,label:"E-mail",type:"email",placeholder:"E-mail",onChange:function(t){return e.handleInput("email",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"GSM-Nummer",placeholder:"GSM-Nummer",type:"number",onChange:function(t){return e.handleInput("mobile",t)}})),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"Straat",placeholder:"Straat",onChange:function(t){return e.handleInput("street",t)}}),r.a.createElement(f.a.Input,{fluid:!0,disabled:o,label:"Box",placeholder:"Box",onChange:function(t){return e.handleInput("Box__c",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"Postcode",type:"number",placeholder:"Postcode",onChange:function(t){return e.findCity(t)}}),r.a.createElement(f.a.Select,{required:!0,disabled:o,error:s,loading:c,fluid:!0,label:"Gemeente",options:l,placeholder:l.length>0?"selecteer":"geen resultaat",onFocus:function(t){return e.clearFieldError("cityError")},onChange:function(t){return e.setState({city:t.target.innerText})}})),r.a.createElement(f.a.Select,{required:!0,fluid:!0,disabled:o,error:u,onFocus:function(t){return e.clearFieldError("originError")},label:"Oorsprong",options:S.originSolicitant,placeholder:"Collega",onChange:function(t){return e.setState({lead_source:t.target.innerText})}}),"Actie"===n&&r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"Name",placeholder:"bv: Kerstmis",onChange:function(t){return e.handleInput("NaamActie__c",t)}}),r.a.createElement(f.a.Input,{required:!0,disabled:o,fluid:!0,label:"Detail",placeholder:"bv: 24 December",onChange:function(t){return e.handleInput("DetailActie__c",t)}})),r.a.createElement(f.a.Button,{color:"orange"},"Bevestigen"))),r.a.createElement(k,{visible:m,onClose:p},r.a.createElement("span",null,"Something went wrong :("),r.a.createElement("p",null,"Please contact Red Carrots team")),i&&r.a.createElement(j,{className:"loader-form"}))}}]),t}(n.Component),oe=a(452),le=a(453),ce=function(){return r.a.createElement(oe.a,{placeholder:!0},r.a.createElement(le.a,{icon:!0},r.a.createElement(q.a,{name:"wpforms"}),"Maak een keuze."))},se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={klantBtn:!1,solicitantBtn:!1},a.handleClick=function(e){var t,n=a.state,r=e.target.value,i={};Object.keys(n).forEach(function(e){e!==r&&(t=e)}),i[r]=!1===n[r],i[t]=!1,a.setState(Object(C.a)({},i))},a.closeForm=function(e){var t={};t[e]=!1,a.setState(Object(C.a)({},t))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"switchForm",value:function(){var e=this.props,t=e.onFormSubmit,a=e.error,n=e.closeError,i=this.state,o=i.klantBtn,l=i.solicitantBtn;return o?r.a.createElement(ee,{onFormSubmit:t,closeForm:this.closeForm,error:a,closeError:n}):l?r.a.createElement(ie,{onFormSubmit:t,closeForm:this.closeForm,error:a,closeError:n}):r.a.createElement(ce,null)}},{key:"render",value:function(){var e=this,t=this.state,a=t.klantBtn,n=t.solicitantBtn;return r.a.createElement(x.a,null,r.a.createElement("div",{className:"form-options"},r.a.createElement("div",{className:"form-options-buttons"},r.a.createElement("h3",{style:{textAlign:"center"}},"Selecteer uw form"),r.a.createElement("div",null,r.a.createElement(b.a,{toggle:!0,active:a,value:"klantBtn",onClick:function(t){return e.handleClick(t)}},"Klant"),r.a.createElement(b.a,{toggle:!0,active:n,value:"solicitantBtn",onClick:function(t){return e.handleClick(t)}},"Sollicitant"))),r.a.createElement("div",{className:"form-options-selected"},this.switchForm())))}}]),t}(r.a.Component),ue="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=00D0Y000000ZTQZ",de={postLead:function(e){return W.a.post("".concat("https://cors-anywhere.herokuapp.com/").concat(ue,"&first_name=").concat(e.first_name,"&last_name=").concat(e.last_name,"&00N1v00000SjZYU=").concat(e.language_lead__c,"&email=").concat(e.email,"&mobile=").concat(e.mobile,"&street=").concat(e.street,"&00N0Y00000R6Rsq=").concat(e.Box__c,"&zip=").concat(e.zip,"&city=").concat(e.city,"&00N0Y000007xqGf=").concat(e.Gewenst_aantal_uren_per_week__c,"&00N0Y000009dQFo=").concat(e.Wensen__c,"&00N0Y00000R6Rt2=").concat(e.Frequentie__c,"&00N0Y00000R6RtA=").concat(e.Maandagpicklist__c,"&00N0Y00000R6Rsv=").concat(e.Dinsdagpicklist__c,"&00N0Y00000R6RtN=").concat(e.Woensdagpicklist__c,"&00N0Y00000R6Rsw=").concat(e.Donderdagpicklist__c,"&00N0Y00000R6RtL=").concat(e.Vrijdagpicklist__c,"&00N0Y00000R6RtO=").concat(e.Zaterdagpicklist__c,"&lead_source=").concat(e.lead_source,"&00N0Y00000R6RtI=").concat(e.RegioId__c,"&00N0Y00000R6Rt5=").concat(e.KantoorId__c,"&00N0Y00000RzeEo=").concat(e.NaamActie__c,"&00N0Y00000RzeEt=").concat(e.DetailActie__c,"&00N0Y00000RvK5Q=").concat(e.strijk?1:0,"&00N0Y00000R6Rt7=1")).then(function(e){return e.status}).catch(function(e){return e})},postSolicitant:function(e){return W.a.post("".concat("https://cors-anywhere.herokuapp.com/").concat(ue,"&first_name=").concat(e.first_name,"&last_name=").concat(e.last_name,"&email=").concat(e.email,"&mobile=").concat(e.mobile,"&street=").concat(e.street,"&00N0Y00000R6Rsq=").concat(e.Box__c,"&zip=").concat(e.zip,"&city=").concat(e.city,"&lead_source=").concat(e.lead_source,"&00N0Y00000R6RtI=").concat(e.RegioId__c,"&00N0Y00000R6Rt5=").concat(e.KantoorId__c,"&00N0Y00000R8AfP=1&00N0Y00000RzeEo=").concat(e.NaamActie__c,"&00N0Y00000RzeEt=").concat(e.DetailActie__c,"&00N0Y00000R6Rt7=1")).then(function(e){return e.status}).catch(function(e){return e})}},me=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderIfVisible",value:function(){if(this.props.visible)return r.a.createElement(v.a,{floating:!0,onDismiss:this.props.onClose},r.a.createElement(v.a.Header,null,this.props.children[0]),this.props.children[1])}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderIfVisible())}}]),t}(r.a.Component),pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={error:!1,success:!1,name:null},a.renderOptions=function(){var e=a.props,t=e.user,n=e.history,i=a.state.error;if(t)return r.a.createElement(se,{onFormSubmit:a.switchForm,error:i,closeError:a.closeError});n.push("/login")},a.closeError=function(){a.setState({error:!1})},a.switchForm=function(e,t){"lead"===t&&a.createLead(e),"solicitant"===t&&a.createSolicitant(e)},a.createLead=function(){var e=Object(N.a)(A.a.mark(function e(t){var n,r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.user,a.setState({name:"".concat(t.first_name," ").concat(t.last_name)}),t.RegioId__c=n.regioID,t.KantoorId__c=n.sf_id,t.company=n.name,e.next=7,de.postLead(t);case 7:200!==(r=e.sent)?a.setState({error:r}):(setTimeout(function(){return a.setState({success:!0})},1e3),setTimeout(function(){return a.setState({success:!1})},5e3));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.createSolicitant=function(){var e=Object(N.a)(A.a.mark(function e(t){var n,r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.user,a.setState({name:"".concat(t.first_name," ").concat(t.last_name)}),t.KantoorId__c=n.sf_id,t.company=n.name,t.RegioId__c=n.regioID,e.next=7,de.postSolicitant(t);case 7:200!==(r=e.sent)?a.setState({error:r}):(setTimeout(function(){return a.setState({success:!0})},1e3),setTimeout(function(){return a.setState({success:!1})},5e3));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement(me,{visible:this.state.success},r.a.createElement("span",null,this.state.name),r.a.createElement("p",null,"Opgeslagen!")),this.renderOptions())}}]),t}(r.a.Component),fe=Object(p.d)(pe),ge=a(192),he=a.n(ge),be=(a(115),function(e){var t=e.office,a=e.quitSession;return r.a.createElement("button",{className:"ui red button logout-btn "+(t?"show":"hide"),onClick:a},r.a.createElement("i",{className:"icon user"}),"Logout")}),ve=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).openLoginForm=Object(N.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.history.push("/login");case 1:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"ui red button logout-btn ",onClick:this.openLoginForm},r.a.createElement("i",{className:"icon user"}),"Login")}}]),t}(r.a.Component),ke=Object(p.d)(ve),_e=function(e){var t=e.office,a=e.onLogout;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("div",{className:"navbar-logo"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:he.a,alt:"Logo",className:"logo"}))),r.a.createElement("div",{className:"navbar-greeting"},function(){if(t)return r.a.createElement("h2",null,"Hallo, ",t.name,"!")}())),t?r.a.createElement(be,{office:t,quitSession:a}):r.a.createElement(ke,null))},Ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem("user"))},a.saveUser=function(e){localStorage.setItem("user",JSON.stringify(e)),a.setState({user:e})},a.logoutUser=function(){localStorage.removeItem("user"),a.setState({user:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(_e,{office:this.state.user,onLogout:this.logoutUser}),r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(fe,{user:e.state.user})}}),r.a.createElement(p.a,{path:"/login",render:function(){return r.a.createElement(w,{onLoggedIn:e.saveUser})}})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(Ee,null),document.querySelector("#root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.43927a6a.chunk.js.map