(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(3),i=n.n(a),s=(n(12),n(13),n(4)),o=n(5),u=n(7),d=n(6),j=n(0);var b=function(t){var e=t.name,n=t.increment;return Object(j.jsx)("button",{type:"button",onClick:n,children:e})},l=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.incrementGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.incrementNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.incrementBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}))},t.countTotal=function(){var e=Object.values(t.state).map((function(e){return 100*e/t.countTotalFeedback()}));return Math.round(e[0])},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Please leave feedback"}),Object(j.jsx)(b,{increment:this.incrementGood,name:"good"}),Object(j.jsx)(b,{increment:this.incrementNeutral,name:"neutral"}),Object(j.jsx)(b,{increment:this.incrementBad,name:"bad"}),Object(j.jsx)("h2",{children:"Statistics"}),Object(j.jsxs)("p",{children:["Good: ",Object(j.jsx)("span",{children:this.state.good})]}),Object(j.jsxs)("p",{children:["Neutral: ",Object(j.jsx)("span",{children:this.state.neutral})]}),Object(j.jsxs)("p",{children:["Bad: ",Object(j.jsx)("span",{children:this.state.bad})]}),Object(j.jsxs)("p",{children:["Total: ",Object(j.jsx)("span",{children:this.countTotalFeedback()})]}),Object(j.jsxs)("p",{children:["Positive feedback:",Object(j.jsxs)("span",{children:[this.countTotal(),"%"]})]})]})}}]),n}(c.Component);var h=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(l,{})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.736b2fb1.chunk.js.map