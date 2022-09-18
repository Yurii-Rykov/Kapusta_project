"use strict";(self.webpackChunkkapusta_project=self.webpackChunkkapusta_project||[]).push([[204],{7628:function(e,n,t){t.d(n,{r:function(){return _}});var a,s,r=t(2791),i=["title","titleId"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function o(e,n){var t=e.title,o=e.titleId,_=l(e,i);return r.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:n,"aria-labelledby":o},_),t?r.createElement("title",{id:o},t):null,a||(a=r.createElement("g",{clipPath:"url(#clip0_11_747)"},r.createElement("path",{fill:"#FF751D",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}))),s||(s=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_11_747"},r.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var _=r.forwardRef(o);t.p},5698:function(e,n,t){t.d(n,{Z:function(){return N}});var a,s=t(885),r="Modal_modal__DJDMv",i="Modal_active__-p53x Modal_modal__DJDMv",c="Modal_partOfModal__yZSNf",l="Modal_text__KJZTz",o=t(2791),_=["title","titleId"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function m(e,n){var t=e.title,s=e.titleId,r=u(e,_);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:n,"aria-labelledby":s},r),t?o.createElement("title",{id:s},t):null,a||(a=o.createElement("path",{d:"M8 3 0 13h16z"})))}var p=o.forwardRef(m),v=(t.p,t(184)),h=function(e){var n=e.handleToggle,t=e.active;e.setActive;return(0,v.jsxs)("div",{className:"".concat(t?i:r," "),onClick:function(e){e.target===e.currentTarget&&n()},children:[(0,v.jsx)("p",{children:"Hello! To get started, enter the current balance of your account!"}),(0,v.jsx)("p",{className:l,children:"You can't spend money until you have it :)"}),(0,v.jsx)(p,{width:"25px",className:c})]})},f=t(1726),x=t(5048),b=t(6871),j=t(6912),g=t(8724),y={container:"Balance_container__qL3d1",balance:"Balance_balance__41oSS",wrap:"Balance_wrap__-7-60",input:"Balance_input__5zeug",spinner:"Balance_spinner__y8L42",confirmBtn:"Balance_confirmBtn__ctfY4",amount:"Balance_amount__PZJn2"},N=function(e){var n=e.dateReports,t=e.dateTransactions,a=(0,x.I0)(),r=(0,o.useState)(!1),i=(0,s.Z)(r,2),c=i[0],l=i[1],_=(0,x.v9)((function(e){return e.auth.userData.transactions})),d=(0,b.TH)().pathname,u=(0,o.useState)(new Date),m=(0,s.Z)(u,2),p=m[0],N=m[1];(0,o.useEffect)((function(){"/transactions"!==d&&"/transactions/expenses"!==d&&"/transactions/incomes"!==d||N(t),"/reports"!==d&&"/reports/*"!==d||N(n)}),[d,t,n]),(0,o.useEffect)((function(){"/transactions/expenses"!==d||0!==_.length||l(!0)}),[d,_]);var w=(0,j.L5)(function(e){var n=((null===e||void 0===e?void 0:e.getMonth())+1).toString(),t=null===e||void 0===e?void 0:e.getFullYear();return n.length<2&&(n="0"+n),[t,n].join("-")}(p)),O=w.currentData,E=w.isFetching,k=(null===O||void 0===O?void 0:O.incomes.incomeTotal)-(null===O||void 0===O?void 0:O.expenses.expenseTotal),T=(null===k||void 0===k?void 0:k.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.";return(0,v.jsxs)("div",{className:y.container,children:[(0,v.jsx)("span",{className:y.balance,children:"Balance:"}),(0,v.jsxs)("div",{className:y.wrap,children:[(0,v.jsx)("div",{className:y.amount,children:E?(0,v.jsx)("div",{className:y.spinner,children:(0,v.jsx)(f.Nx,{width:"80",color:"#3f51b5"})}):(0,v.jsx)(v.Fragment,{children:T})}),(0,v.jsx)("button",{className:y.confirmBtn,type:"button",onClick:function(){return e=k,void a((0,g.Xv)(e));var e},children:"CONFIRM"}),c&&(0,v.jsx)(h,{className:y.modal,handleToggle:function(){l(!c)},active:c,setActive:l})]})]})}},204:function(e,n,t){t.r(n),t.d(n,{default:function(){return ze}});var a,s,r=t(885),i="TransactionsPage_main__XB168",c="TransactionsPage_meta__XhHZj",l="TransactionsPage_container__hW7yI",o="TransactionsPage_wrap__S5Fc3",_="TransactionsPage_reportsBtn__2I+bo",d="TransactionsPage_reports__1Sq5I",u="TransactionsPage_icon__kXk+3",m="TransactionsPage_absCalendar__-n7Vo",p=t(2791),v=["title","titleId"];function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function x(e,n){var t=e.title,r=e.titleId,i=f(e,v);return p.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:n,"aria-labelledby":r},i),t?p.createElement("title",{id:r},t):null,a||(a=p.createElement("g",{clipPath:"url(#clip0_19402_517)"},p.createElement("path",{d:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"}))),s||(s=p.createElement("defs",null,p.createElement("clipPath",{id:"clip0_19402_517"},p.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var b=p.forwardRef(x),j=(t.p,t(5698)),g={wrapper_nav:"Dashboard_wrapper_nav__98+UW",link:"Dashboard_link__HbyMz",activeLink:"Dashboard_activeLink__QzHKR Dashboard_link__HbyMz",summ__link:"Dashboard_summ__link__EBhPm"},y=t(6871),N={tableContainer:"TransactionDetailsMobile_tableContainer__MwzI0",title:"TransactionDetailsMobile_title__ve3nk",list__item:"TransactionDetailsMobile_list__item__kd1zb",text__container:"TransactionDetailsMobile_text__container__gsHwm",item__text:"TransactionDetailsMobile_item__text__dkknX",divSumAndButtonFlex:"TransactionDetailsMobile_divSumAndButtonFlex__ebExB",btnDelete:"TransactionDetailsMobile_btnDelete__4qwV4",plus:"TransactionDetailsMobile_plus__ZQrTn",minus:"TransactionDetailsMobile_minus__u7kvK"},w=t(5048),O=t(6912),E=t(8724),k=t(184),T=function(){var e=(0,p.useState)([]),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=(0,w.I0)(),i=(0,w.v9)((function(e){return e.auth.userData.transactions})),c=(0,O.yC)(),l=(0,r.Z)(c,1)[0];(0,p.useEffect)((function(){a(i)}),[i]),(0,p.useEffect)((function(){s((0,E.ts)())}),[s]);var o=function(e,n){return"".concat(e)+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d."},_=t.slice(-3).reverse().map((function(e){var n="\u0417/\u041f"===e.category||"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"===e.category;return(0,k.jsxs)("li",{className:N.list__item,children:[(0,k.jsxs)("div",{className:N.item__container,children:[(0,k.jsx)("h2",{className:N.title,children:e.description}),(0,k.jsxs)("div",{className:N.text__container,children:[(0,k.jsx)("p",{className:N.item__text,children:e.date}),(0,k.jsx)("p",{className:N.item__text,children:e.category})]})]}),(0,k.jsxs)("div",{className:N.divSumAndButtonFlex,children:[n?(0,k.jsx)("p",{className:N.plus,children:o("+",e.amount)}):(0,k.jsx)("p",{className:N.minus,children:o("-",e.amount)}),(0,k.jsx)("button",{onClick:function(){return n=e._id,l(n),void a(t.filter((function(e){return e._id!==n})));var n},type:"button",className:N.btnDelete})]})]},e._id)}));return(0,k.jsx)("div",{className:N.tableContainer,children:(0,k.jsx)("ul",{className:N.list,children:_})})},D=t(3504),I={container:"ExpensesAndIncome_container__VzR9B",thumbs:"ExpensesAndIncome_thumbs__A-7FH",form:"ExpensesAndIncome_form__mTRS9",input:"ExpensesAndIncome_input__eyApu",select:"ExpensesAndIncome_select__l3klf",price:"ExpensesAndIncome_price__bRDBN",background_icon:"ExpensesAndIncome_background_icon__ycQ0a",icon_cal:"ExpensesAndIncome_icon_cal__8oIj+",wrapper_input_cal:"ExpensesAndIncome_wrapper_input_cal__g69cH",btn:"ExpensesAndIncome_btn__I4lWn",wrapper_button:"ExpensesAndIncome_wrapper_button__WtfSp",icon_second_cal:"ExpensesAndIncome_icon_second_cal__i57ii",blok_input:"ExpensesAndIncome_blok_input__6Cd+S",block:"ExpensesAndIncome_block__3cU2C",backArrow:"ExpensesAndIncome_backArrow__vCA0W",wrapper_nav:"ExpensesAndIncome_wrapper_nav__LXTMa",link:"ExpensesAndIncome_link__TMsTg",icon_back:"ExpensesAndIncome_icon_back__x+EKg",activeLink:"ExpensesAndIncome_activeLink__zWY4i ExpensesAndIncome_link__TMsTg",summ__link:"ExpensesAndIncome_summ__link__sqvpu ExpensesAndIncome_link__TMsTg"},M=function(e){var n=e.onClickSubmit,t=e.onClickReset;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("button",{className:I.btn,type:"submit",onClick:n,children:"INPUT"}),(0,k.jsx)("button",{className:I.btn,type:"submit",onClick:t,children:"CLEAR"})]})},z=function(e){return e.isActive?I.activeLink:I.link},A=function(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("ul",{className:I.wrapper_nav,children:[(0,k.jsx)("li",{className:I.item,children:(0,k.jsx)(D.OL,{className:z,to:"/transactions/expenses",children:"Expenses"})}),(0,k.jsx)("li",{className:I.item,children:(0,k.jsx)(D.OL,{className:z,to:"/transactions/incomes",children:"Income"})})]})})};function H(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function S(){var e=(0,p.useState)(H()),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,p.useEffect)((function(){function e(){a(H())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}var C,P,B=function(){var e=(0,y.TH)(),n=S().width,t="/transactions"===e.pathname&&Boolean(n)<768;return(0,k.jsx)("div",{className:g.container,children:"/transactions"===e.pathname&&(0,k.jsxs)("div",{className:g.wrap,children:[(0,k.jsx)(T,{}),t&&(0,k.jsx)(A,{})]})})},F="Calendar_container__zNs0t",Z="Calendar_calendar__vKx+D",R="Calendar_icon__AiXLB",L=t(9513),V=t.n(L),W=["title","titleId"];function J(){return J=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)}function X(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function Y(e,n){var t=e.title,a=e.titleId,s=X(e,W);return p.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:n,"aria-labelledby":a},s),t?p.createElement("title",{id:a},t):null,C||(C=p.createElement("path",{fill:"#52555F",d:"M17.475 2.067h-1.312v-.32a.586.586 0 1 0-1.171 0v.32h-1.617v-.32a.586.586 0 0 0-1.172 0v.32h-1.617v-.32a.586.586 0 1 0-1.172 0v.32H7.797v-.32a.586.586 0 0 0-1.172 0v.32H5.008v-.32a.586.586 0 0 0-1.171 0v.32H2.525A2.527 2.527 0 0 0 0 4.592v11.724a2.527 2.527 0 0 0 2.525 2.524h14.95A2.527 2.527 0 0 0 20 16.316V4.592a2.527 2.527 0 0 0-2.525-2.525zm1.353 14.249c0 .746-.607 1.352-1.353 1.352H2.525a1.354 1.354 0 0 1-1.353-1.352V6.733h17.656v9.583zm0-10.755H1.172v-.97c0-.745.607-1.352 1.353-1.352h1.312v.227a.586.586 0 0 0 1.171 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.171 0v-.227h1.312c.746 0 1.353.607 1.353 1.353v.969z"})),P||(P=p.createElement("path",{fill:"#52555F",d:"M6.532 7.981H4.22a.586.586 0 0 0-.586.586v2.393c0 .323.262.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393h-1.14v-1.22h1.14v1.22zM11.156 7.981H8.844a.586.586 0 0 0-.586.586v2.393c0 .323.262.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393H9.43v-1.22h1.14v1.22zM15.78 7.981h-2.312a.586.586 0 0 0-.586.586v2.393c0 .323.263.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393h-1.14v-1.22h1.14v1.22zM6.532 12.526H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 12.526H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 12.526h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.263.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22z"})))}var q,U,K=p.forwardRef(Y),$=(t.p,t(8639),function(e){var n=e.date,t=e.setDate;return(0,k.jsxs)("div",{className:F,children:[(0,k.jsx)(K,{className:R}),(0,k.jsx)(V(),{className:Z,selected:n,onChange:function(e){return t(e)}})]})}),Q="Summary_summary__N6WqZ",G="Summary_month__8pRdL",ee="Summary_title__jaC+J",ne="Summary_text__8p6lE",te=function(e){var n=e.params,t=void 0===n?"":n,a=null===Object||void 0===Object?void 0:Object.values(t)[0],s=(0,p.useState)(!1),i=(0,r.Z)(s,2),c=i[0],l=i[1],o=(0,p.useState)(!0),_=(0,r.Z)(o,2),d=_[0],u=_[1],m=(0,O.yp)().data,v=(0,O.FF)().data;(0,p.useEffect)((function(){if("expenses"===a)return u(!0),void l(!1);"incomes"===a&&(l(!0),u(!1))}),[a]);return(0,k.jsxs)("div",{className:Q,children:[(0,k.jsx)("h2",{className:ee,children:"SUMMARY"}),v&&(c?Object.entries(m.monthsStats).map((function(e){return Object.assign({},e)})):d?Object.entries(v.monthsStats).map((function(e){return Object.assign({},e)})):void 0).filter((function(e){return"number"===typeof e[1]})).map((function(e){return(0,k.jsxs)("div",{className:G,children:[(0,k.jsx)("span",{className:ne,children:e[0]}),(0,k.jsx)("span",{className:ne,children:e[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")})]},e[0])}))]})},ae=t(5861),se=t(4687),re=t.n(se),ie="TransactionDetails_scrollTable__D0L7h",ce="TransactionDetails_scrollTableBody__gCYBA",le="TransactionDetails_tableHead__82mZ0",oe="TransactionDetails_table__head__empty__WJNnA",_e="TransactionDetails_body__empty__No4mR",de="TransactionDetails_table__head__date__Nim+4",ue="TransactionDetails_table__head__text__EmaRA",me="TransactionDetails_table__head__category__P2gCX",pe="TransactionDetails_table__head__sum__7Z+6J",ve="TransactionDetails_table__head__delete__bjI+x",he="TransactionDetails_body__8gCsI",fe="TransactionDetails_body__date__pl8jk",xe="TransactionDetails_body__description__6vghR",be="TransactionDetails_body__category__6fuP0",je="TransactionDetails_minus__XmGjy",ge="TransactionDetails_plus__5gB6v",ye="TransactionDetails_body__delete__oMzJJ",Ne="TransactionDetails_btnDelete__YA2q5",we=function(){var e,n=(0,y.TH)(),t=(0,O.yC)(),a=(0,r.Z)(t,1)[0],s=(0,O.FF)().data,i=void 0===s?[]:s,c=(0,O.yp)().data,l=void 0===c?[]:c,o=i.expenses,_=l.incomes,d="/transactions/expenses"===n.pathname?o:_,u=function(){var e=(0,ae.Z)(re().mark((function e(n){return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n).unwrap();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m="/transactions/expenses"===n.pathname?je:ge;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:ie,children:[(0,k.jsx)("table",{children:(0,k.jsx)("thead",{className:le,children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{className:oe}),(0,k.jsx)("th",{className:de,children:"DATE"}),(0,k.jsx)("th",{className:ue,children:"DESCRIPTION"}),(0,k.jsx)("th",{className:me,children:"CATEGORY"}),(0,k.jsx)("th",{className:pe,children:"SUM"}),(0,k.jsx)("th",{className:ve})]})})}),(0,k.jsx)("div",{className:ce,children:(0,k.jsx)("table",{children:(0,k.jsx)("tbody",{children:null===d||void 0===d||null===(e=d.map((function(e){return(0,k.jsxs)("tr",{className:he,children:[(0,k.jsx)("td",{className:_e}),(0,k.jsx)("td",{className:fe,children:e.date}),(0,k.jsx)("td",{className:xe,children:e.description}),(0,k.jsx)("td",{className:be,children:e.category}),(0,k.jsx)("td",{className:m,children:(t=e.amount,"/transactions/expenses"===n.pathname?"- "+t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d.":"+ "+t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d.")}),(0,k.jsx)("td",{className:ye,children:(0,k.jsx)("button",{onClick:function(){return u(e._id)},type:"button",className:Ne})})]},e._id);var t})))||void 0===e?void 0:e.reverse()})})})]})})},Oe=t(7628),Ee=["title","titleId"];function ke(){return ke=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ke.apply(this,arguments)}function Te(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function De(e,n){var t=e.title,a=e.titleId,s=Te(e,Ee);return p.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:n,"aria-labelledby":a},s),t?p.createElement("title",{id:a},t):null,q||(q=p.createElement("path",{fill:"#52555F",d:"M17.031 0H2.97A1.76 1.76 0 0 0 1.21 1.758v16.484c0 .97.788 1.758 1.758 1.758H17.03a1.76 1.76 0 0 0 1.758-1.758V1.758A1.76 1.76 0 0 0 17.031 0zm.586 18.242a.587.587 0 0 1-.586.586H2.97a.587.587 0 0 1-.586-.586V1.758c0-.323.263-.586.586-.586H17.03c.323 0 .586.263.586.586v16.484z"})),U||(U=p.createElement("path",{fill:"#52555F",d:"M15.86 2.344H4.14a.586.586 0 0 0-.585.586v4.765c0 .324.262.586.586.586h11.718a.586.586 0 0 0 .586-.586V2.93a.586.586 0 0 0-.586-.586zm-.587 4.765H4.727V3.516h10.546v3.593zM6.484 9.453H4.141a.586.586 0 0 0-.586.586v2.344c0 .323.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-2.344a.586.586 0 0 0-.586-.586zm-.586 2.344H4.727v-1.172h1.171v1.172zM6.484 14.14H4.141a.586.586 0 0 0-.586.587v2.343c0 .324.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-2.343a.586.586 0 0 0-.586-.586zm-.586 2.344H4.727v-1.172h1.171v1.172zM11.172 9.453H8.828a.586.586 0 0 0-.586.586v2.344c0 .323.263.586.586.586h2.344a.586.586 0 0 0 .586-.586v-2.344a.586.586 0 0 0-.586-.586zm-.586 2.344H9.414v-1.172h1.172v1.172zM11.172 14.14H8.828a.586.586 0 0 0-.586.587v2.343c0 .324.263.586.586.586h2.344a.586.586 0 0 0 .586-.586v-2.343a.586.586 0 0 0-.586-.586zm-.586 2.344H9.414v-1.172h1.172v1.172zM15.86 9.453h-2.344a.586.586 0 0 0-.586.586v7.031c0 .324.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-7.03a.586.586 0 0 0-.586-.587zm-.587 7.031h-1.171v-5.859h1.171v5.86z"})))}var Ie=p.forwardRef(De),Me=(t.p,function(e){var n=e.date,t=e.setDate,a=(0,y.UO)(),s=(0,p.useState)(""),i=(0,r.Z)(s,2),c=i[0],l=i[1],o=(0,p.useState)(""),_=(0,r.Z)(o,2),d=_[0],u=_[1],m=(0,p.useState)(""),v=(0,r.Z)(m,2),h=v[0],f=v[1],x=(0,O.H6)().data,b=(0,O.qS)(),j=(0,r.Z)(b,1)[0],g=(0,O.M8)(),N=(0,r.Z)(g,1)[0],w=(0,y.TH)(),E=(0,O.jN)().data,T=n.toJSON().slice(0,10),z=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"description":l(a);break;case"price":f(a);break;case"category":u(a);break;default:return}},H=S().width;return(0,k.jsxs)(k.Fragment,{children:[Boolean(H>768)&&(0,k.jsx)(A,{}),(0,k.jsxs)("div",{className:I.container,children:[(0,k.jsxs)("div",{className:I.block,children:[(0,k.jsxs)("div",{className:I.thumbs,children:[(0,k.jsx)(D.OL,{to:"/",className:I.icon_back,children:(0,k.jsx)(Oe.r,{className:I.backArrow})}),(0,k.jsx)($,{date:n,setDate:t}),(0,k.jsxs)("form",{className:I.form,children:[(0,k.jsxs)("div",{className:I.blok_input,children:[(0,k.jsx)("input",{className:I.input,name:"description",value:c,type:"text",onChange:z,placeholder:"Product description"}),(0,k.jsxs)("select",{className:I.select,placeholder:"Product category",name:"category",value:d,autoComplete:"off",autoCorrect:"off",onChange:z,children:[(0,k.jsx)("option",{defaultValue:!0,children:"Product category"}),"/transactions/expenses"===w.pathname?x&&x.map((function(e){return(0,k.jsx)("option",{value:e,children:e},e)})):E&&E.map((function(e){return(0,k.jsx)("option",{value:e,children:e},e)}))]}),(0,k.jsxs)("div",{className:I.wrapper_input_cal,children:[(0,k.jsx)("input",{className:I.price,name:"price",value:h,placeholder:"00.00",onChange:z}),(0,k.jsx)("div",{className:I.background_icon,children:(0,k.jsx)(Ie,{className:I.icon_cal})}),(0,k.jsx)(Ie,{className:I.icon_second_cal})]})]}),(0,k.jsx)("div",{className:I.wrapper_button,children:(0,k.jsx)(M,{className:I.btn,type:"submit",onClickSubmit:function(e){e.preventDefault(),"/transactions/expenses"===w.pathname?j({description:c,amount:h,date:T,category:d}):N({description:c,amount:h,date:T,category:d}),l(""),u(""),f("")},onClickReset:function(e){e.preventDefault(),l(""),u(""),f("")}})})]})]}),(0,k.jsx)(we,{})]}),(0,k.jsx)(te,{params:a})]})]})}),ze=function(){var e=(0,y.TH)().pathname,n=window.innerWidth>767||"/transactions"===e,t=window.innerWidth<767&&"/transactions"===e,a=(0,p.useState)((function(){return new Date})),s=(0,r.Z)(a,2),v=s[0],h=s[1];return(0,k.jsxs)("main",{className:c,children:[(0,k.jsx)("div",{className:l}),(0,k.jsxs)("div",{className:i,children:[n&&(0,k.jsxs)("div",{className:o,children:[(0,k.jsxs)(D.rU,{className:_,to:"/reports",children:[(0,k.jsx)("span",{className:d,children:"Reports"}),(0,k.jsx)(b,{className:u})]}),(0,k.jsx)(j.Z,{dateTransactions:v})]}),t&&(0,k.jsx)("div",{className:m,children:(0,k.jsx)($,{date:v,setDate:h})}),(0,k.jsx)(B,{date:v,setDate:h}),(0,k.jsxs)(y.Z5,{children:[(0,k.jsx)(y.AW,{path:"expenses",element:(0,k.jsx)(Me,{date:v,setDate:h})}),(0,k.jsx)(y.AW,{path:"incomes",element:(0,k.jsx)(Me,{date:v,setDate:h})})]})]})]})}}}]);
//# sourceMappingURL=204.62dd377d.chunk.js.map