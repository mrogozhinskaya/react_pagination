(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),l=a(1);a(10);function r(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var s=a(2),o=a.n(s),j=a(0),d=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/a),l=r(1,i),s=1===t,d=t===i;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:s}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":s,onClick:function(){s||n(t-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===t}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){e!==t&&n(e)}(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:d}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":d,onClick:function(){d||n(t+1)},children:"\xbb"})})]})},u=r(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(l.useState)(5),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(l.useState)(1),r=Object(i.a)(n,2),s=r[0],o=r[1],h=u.length,b=s*a,p=b-a+1,m=b>h?h:b,g=u.slice(p-1,m);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(p," - ").concat(m," of ").concat(h,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){return function(e){t(+e.target.value),o(1)}(e)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h,perPage:a,currentPage:s,onPageChange:function(e){o(e)}}),Object(j.jsx)("ul",{children:g.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.162c1a02.chunk.js.map