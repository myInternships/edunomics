(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(t,e,n){t.exports=n(48)},23:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),i=(n(23),n(13)),l=n(14),s=n(17),u=n(16),h=n(2),f=n.n(h),g=function(t){var e=t.x,n=t.y;return o.a.createElement(f.a,{data:[{x:e,y:n,type:"line",marker:{color:"blue"}}],layout:{width:500,height:500,title:"Plot"}})},m=n(15),v=n.n(m),p=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={x:[1,2,3],y:[1,2,3],coeff:.75,height:5},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(g,{x:this.state.x,y:this.state.y}),o.a.createElement("br",null),"Coefficient of restitution: ",o.a.createElement("input",{type:"text",value:this.state.coeff,onChange:function(e){t.setState({coeff:e.target.value}),console.log(t.state)}}),o.a.createElement("br",null),"Height: ",o.a.createElement("input",{type:"text",value:this.state.height,onChange:function(e){t.setState({height:e.target.value}),console.log(t.state)}}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){v.a.post("/calculate",{height:t.state.height||5,coeff:t.state.coeff||.75}).then((function(e){var n=e.data;t.setState({x:n.graph.time,y:n.graph.height})}))}},"Plot"))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.69d71f8c.chunk.js.map