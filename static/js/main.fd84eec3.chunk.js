(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),r=s.n(a),c=s(12),o=s.n(c),i=s(13),l=s(14),d=s(17),h=s(16);s(23);var j=function(e){return e.employees.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:e.picture.thumbnail,alt:"employee"})," ",e.name.first," ",e.name.last]}),Object(n.jsx)("td",{children:e.gender}),Object(n.jsxs)("td",{children:[e.location.city,", ",e.location.state]}),Object(n.jsx)("td",{children:e.email})]},e.login.uuid)}))};s(24);var u=function(e){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Full name"}),Object(n.jsx)("th",{children:"Gender"}),Object(n.jsx)("th",{children:"City/State"}),Object(n.jsx)("th",{children:"Email"})]})})},b=s(15),m=s.n(b),p=function(){return m.a.get("https://randomuser.me/api/?results=5&nat=us")},x={margin:"25px 0",fontSize:"0.9em",minWidth:"400px",borderRadius:"10px 10px 0 0",overflow:"hidden",boxShadow:"0 0 20px rgba(0, 0, 0, 0.15)"},O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).onchange=function(t){e.setState({search:t.target.value}),console.log(e.state.search)},e.state={employees:[],search:"",sortType:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){var e=this,t=this.state.employees.filter((function(t){return-1!==t.gender.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.name.first.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.name.last.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.location.city.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.location.state.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.email.toLowerCase().indexOf(e.state.search.toLowerCase())})),s=this.state.sortType;t.sort((function(e,t){return("asc"===s?1:-1)*e.name.last.toString().localeCompare(t.name.last.toString())}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("input",{style:{marginTop:"15px"},type:"text",className:"col",placeholder:"Search for an employee",onChange:this.onchange})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"col-sm",style:x,children:[Object(n.jsx)(u,{}),Object(n.jsx)("tbody",{children:Object(n.jsx)(j,{employees:t})})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("button",{className:"btn btn-primary",style:{backgroundColor:"purple",marginRight:"10px"},onClick:function(){return e.setState({sortType:"asc"})},children:"Sort by last name asc."}),Object(n.jsx)("button",{className:"btn btn-primary",style:{backgroundColor:"purple"},onClick:function(){return e.setState({sortType:"desc"})},children:"Sort by last name desc."})]})})]})}}]),s}(r.a.Component);s(42);o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fd84eec3.chunk.js.map