(this["webpackJsonplights-out"]=this["webpackJsonplights-out"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(14),n(1)),l=n(2),i=n(4),u=n(3),h=n(8),p=n(5),m=(n(15),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),n}(a.Component)),d=(n(16),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasWon:!1,board:a.createBoard()},a}return Object(l.a)(n,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split("-").map(Number),c=Object(h.a)(o,2),s=c[0],l=c[1];function i(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}i(s,l),i(s,l-1),i(s,l+1),i(s-1,l),i(s+1,l);var u=r.every((function(e){return e.every((function(e){return!e}))}));this.setState({board:r,hasWon:u})}},{key:"makeTable",value:function(){for(var e=this,t=[],n=0;n<this.props.nrows;n++){for(var a=[],o=function(t){var o="".concat(n,"-").concat(t);a.push(r.a.createElement(m,{key:o,isLit:e.state.board[n][t],flipCellsAroundMe:function(){return e.flipCellsAround(o)}}))},c=0;c<this.props.ncols;c++)o(c);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.hasWon?r.a.createElement("div",{className:"winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN!")):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),this.makeTable()))}}]),n}(a.Component));d.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var v=d,f=(n(17),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7f477791.chunk.js.map