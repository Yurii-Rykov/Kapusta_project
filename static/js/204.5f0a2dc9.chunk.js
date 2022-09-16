"use strict";(self.webpackChunkkapusta_project=self.webpackChunkkapusta_project||[]).push([[204],{7628:function(e,n,t){t.d(n,{r:function(){return _}});var a,s,r=t(2791),i=["title","titleId"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function o(e,n){var t=e.title,o=e.titleId,_=l(e,i);return r.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:n,"aria-labelledby":o},_),t?r.createElement("title",{id:o},t):null,a||(a=r.createElement("g",{clipPath:"url(#clip0_11_747)"},r.createElement("path",{fill:"#FF751D",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}))),s||(s=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_11_747"},r.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var _=r.forwardRef(o);t.p},5698:function(e,n,t){t.d(n,{Z:function(){return N}});var a,s=t(885),r="Modal_modal__DJDMv",i="Modal_active__-p53x Modal_modal__DJDMv",c="Modal_partOfModal__yZSNf",l="Modal_text__KJZTz",o=t(2791),_=["title","titleId"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function m(e,n){var t=e.title,s=e.titleId,r=u(e,_);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:n,"aria-labelledby":s},r),t?o.createElement("title",{id:s},t):null,a||(a=o.createElement("path",{d:"M8 3 0 13h16z"})))}var p=o.forwardRef(m),v=(t.p,t(184)),h=function(e){var n=e.handleToggle,t=e.active;e.setActive;return(0,v.jsxs)("div",{className:"".concat(t?i:r," "),onClick:function(e){e.target===e.currentTarget&&n()},children:[(0,v.jsx)("p",{children:"Hello! To get started, enter the current balance of your account!"}),(0,v.jsx)("p",{className:l,children:"You can't spend money until you have it :)"}),(0,v.jsx)(p,{width:"25px",className:c})]})},f=t(1726),x=t(5048),b=t(6871),j=t(6912),g=t(8724),y={container:"Balance_container__qL3d1",balance:"Balance_balance__41oSS",wrap:"Balance_wrap__-7-60",input:"Balance_input__5zeug",spinner:"Balance_spinner__y8L42",confirmBtn:"Balance_confirmBtn__ctfY4",amount:"Balance_amount__PZJn2"},N=function(e){var n=e.dateReports,t=e.dateTransactions,a=(0,x.I0)(),r=(0,o.useState)(!1),i=(0,s.Z)(r,2),c=i[0],l=i[1],_=(0,x.v9)((function(e){return e.auth.userData.transactions})),d=(0,b.TH)().pathname,u=(0,o.useState)(new Date),m=(0,s.Z)(u,2),p=m[0],N=m[1];(0,o.useEffect)((function(){"/transactions"!==d&&"/transactions/expenses"!==d&&"/transactions/incomes"!==d||N(t),"/reports"!==d&&"/reports/*"!==d||N(n)}),[d,t,n]),(0,o.useEffect)((function(){"/transactions/expenses"!==d||0!==_.length||l(!0)}),[d,_]);var w=(0,j.L5)(function(e){var n=((null===e||void 0===e?void 0:e.getMonth())+1).toString(),t=null===e||void 0===e?void 0:e.getFullYear();return n.length<2&&(n="0"+n),[t,n].join("-")}(p)),k=w.currentData,E=w.isFetching,O=(null===k||void 0===k?void 0:k.incomes.incomeTotal)-(null===k||void 0===k?void 0:k.expenses.expenseTotal),T=(null===O||void 0===O?void 0:O.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.";return(0,v.jsxs)("div",{className:y.container,children:[(0,v.jsx)("span",{className:y.balance,children:"Balance:"}),(0,v.jsxs)("div",{className:y.wrap,children:[(0,v.jsx)("div",{className:y.amount,children:E?(0,v.jsx)("div",{className:y.spinner,children:(0,v.jsx)(f.Nx,{width:"80",color:"#3f51b5"})}):(0,v.jsx)(v.Fragment,{children:T})}),(0,v.jsx)("button",{className:y.confirmBtn,type:"button",onClick:function(){return e=O,void a((0,g.Xv)(e));var e},children:"CONFIRM"}),c&&(0,v.jsx)(h,{className:y.modal,handleToggle:function(){l(!c)},active:c,setActive:l})]})]})}},204:function(e,n,t){t.r(n),t.d(n,{default:function(){return Me}});var a,s,r=t(885),i="TransactionsPage_main__XB168",c="TransactionsPage_meta__XhHZj",l="TransactionsPage_container__hW7yI",o="TransactionsPage_wrap__S5Fc3",_="TransactionsPage_reportsBtn__2I+bo",d="TransactionsPage_reports__1Sq5I",u="TransactionsPage_icon__kXk+3",m="TransactionsPage_absCalendar__-n7Vo",p=t(2791),v=["title","titleId"];function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function x(e,n){var t=e.title,r=e.titleId,i=f(e,v);return p.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:n,"aria-labelledby":r},i),t?p.createElement("title",{id:r},t):null,a||(a=p.createElement("g",{clipPath:"url(#clip0_19402_517)"},p.createElement("path",{d:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"}))),s||(s=p.createElement("defs",null,p.createElement("clipPath",{id:"clip0_19402_517"},p.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var b=p.forwardRef(x),j=(t.p,t(6912)),g=t(5698),y={wrapper_nav:"Dashboard_wrapper_nav__98+UW",link:"Dashboard_link__HbyMz",activeLink:"Dashboard_activeLink__QzHKR Dashboard_link__HbyMz",summ__link:"Dashboard_summ__link__EBhPm"},N=t(6871),w={tableContainer:"TransactionDetailsMobile_tableContainer__MwzI0",title:"TransactionDetailsMobile_title__ve3nk",list__item:"TransactionDetailsMobile_list__item__kd1zb",text__container:"TransactionDetailsMobile_text__container__gsHwm",item__text:"TransactionDetailsMobile_item__text__dkknX",divSumAndButtonFlex:"TransactionDetailsMobile_divSumAndButtonFlex__ebExB",btnDelete:"TransactionDetailsMobile_btnDelete__4qwV4",plus:"TransactionDetailsMobile_plus__ZQrTn",minus:"TransactionDetailsMobile_minus__u7kvK"},k=t(5048),E=t(8724),O=t(184),T=function(){var e=(0,p.useState)([]),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=(0,k.I0)(),i=(0,k.v9)((function(e){return e.auth.userData.transactions})),c=(0,j.yC)(),l=(0,r.Z)(c,1)[0];(0,p.useEffect)((function(){a(i)}),[i]),(0,p.useEffect)((function(){s((0,E.ts)())}),[s]);var o=function(e,n){return"".concat(e)+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d."},_=t.slice(-3).reverse().map((function(e){var n="\u0417/\u041f"===e.category||"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"===e.category;return(0,O.jsxs)("li",{className:w.list__item,children:[(0,O.jsxs)("div",{className:w.item__container,children:[(0,O.jsx)("h2",{className:w.title,children:e.description}),(0,O.jsxs)("div",{className:w.text__container,children:[(0,O.jsx)("p",{className:w.item__text,children:e.date}),(0,O.jsx)("p",{className:w.item__text,children:e.category})]})]}),(0,O.jsxs)("div",{className:w.divSumAndButtonFlex,children:[n?(0,O.jsx)("p",{className:w.plus,children:o("+",e.amount)}):(0,O.jsx)("p",{className:w.minus,children:o("-",e.amount)}),(0,O.jsx)("button",{onClick:function(){return n=e._id,l(n),void a(t.filter((function(e){return e._id!==n})));var n},type:"button",className:w.btnDelete})]})]},e._id)}));return(0,O.jsx)("div",{className:w.tableContainer,children:(0,O.jsx)("ul",{className:w.list,children:_})})},D=t(3504),I={container:"ExpensesAndIncome_container__VzR9B",thumbs:"ExpensesAndIncome_thumbs__A-7FH",form:"ExpensesAndIncome_form__mTRS9",input:"ExpensesAndIncome_input__eyApu",select:"ExpensesAndIncome_select__l3klf",price:"ExpensesAndIncome_price__bRDBN",background_icon:"ExpensesAndIncome_background_icon__ycQ0a",icon_cal:"ExpensesAndIncome_icon_cal__8oIj+",wrapper_input_cal:"ExpensesAndIncome_wrapper_input_cal__g69cH",btn:"ExpensesAndIncome_btn__I4lWn",wrapper_button:"ExpensesAndIncome_wrapper_button__WtfSp",icon_second_cal:"ExpensesAndIncome_icon_second_cal__i57ii",blok_input:"ExpensesAndIncome_blok_input__6Cd+S",block:"ExpensesAndIncome_block__3cU2C",backArrow:"ExpensesAndIncome_backArrow__vCA0W",wrapper_nav:"ExpensesAndIncome_wrapper_nav__LXTMa",link:"ExpensesAndIncome_link__TMsTg",icon_back:"ExpensesAndIncome_icon_back__x+EKg",activeLink:"ExpensesAndIncome_activeLink__zWY4i ExpensesAndIncome_link__TMsTg",summ__link:"ExpensesAndIncome_summ__link__sqvpu ExpensesAndIncome_link__TMsTg"},M=function(e){var n=e.onClickSubmit,t=e.onClickReset;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("button",{className:I.btn,type:"submit",onClick:n,children:"INPUT"}),(0,O.jsx)("button",{className:I.btn,type:"submit",onClick:t,children:"CLEAR"})]})},S=function(e){return e.isActive?I.activeLink:I.link},z=function(){return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("ul",{className:I.wrapper_nav,children:[(0,O.jsx)("li",{className:I.item,children:(0,O.jsx)(D.OL,{className:S,to:"/transactions/expenses",children:"Expenses"})}),(0,O.jsx)("li",{className:I.item,children:(0,O.jsx)(D.OL,{className:S,to:"/transactions/incomes",children:"Income"})})]})})};function A(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function H(){var e=(0,p.useState)(A()),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,p.useEffect)((function(){function e(){a(A())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}var C,P,B=function(){var e=(0,N.TH)(),n=H().width,t="/transactions"===e.pathname&&Boolean(n)<768;return(0,O.jsx)("div",{className:y.container,children:"/transactions"===e.pathname&&(0,O.jsxs)("div",{className:y.wrap,children:[(0,O.jsx)(T,{}),t&&(0,O.jsx)(z,{})]})})},F=t(188),Z="Calendar_container__zNs0t",R="Calendar_calendar__vKx+D",L="Calendar_icon__AiXLB",V=t(9513),W=t.n(V),J=["title","titleId"];function X(){return X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},X.apply(this,arguments)}function q(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function Y(e,n){var t=e.title,a=e.titleId,s=q(e,J);return p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:n,"aria-labelledby":a},s),t?p.createElement("title",{id:a},t):null,C||(C=p.createElement("path",{fill:"#52555F",d:"M17.475 2.067h-1.312v-.32a.586.586 0 1 0-1.171 0v.32h-1.617v-.32a.586.586 0 0 0-1.172 0v.32h-1.617v-.32a.586.586 0 1 0-1.172 0v.32H7.797v-.32a.586.586 0 0 0-1.172 0v.32H5.008v-.32a.586.586 0 0 0-1.171 0v.32H2.525A2.527 2.527 0 0 0 0 4.592v11.724a2.527 2.527 0 0 0 2.525 2.524h14.95A2.527 2.527 0 0 0 20 16.316V4.592a2.527 2.527 0 0 0-2.525-2.525zm1.353 14.249c0 .746-.607 1.352-1.353 1.352H2.525a1.354 1.354 0 0 1-1.353-1.352V6.733h17.656v9.583zm0-10.755H1.172v-.97c0-.745.607-1.352 1.353-1.352h1.312v.227a.586.586 0 0 0 1.171 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.171 0v-.227h1.312c.746 0 1.353.607 1.353 1.353v.969z"})),P||(P=p.createElement("path",{fill:"#52555F",d:"M6.532 7.981H4.22a.586.586 0 0 0-.586.586v2.393c0 .323.262.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393h-1.14v-1.22h1.14v1.22zM11.156 7.981H8.844a.586.586 0 0 0-.586.586v2.393c0 .323.262.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393H9.43v-1.22h1.14v1.22zM15.78 7.981h-2.312a.586.586 0 0 0-.586.586v2.393c0 .323.263.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393h-1.14v-1.22h1.14v1.22zM6.532 12.526H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 12.526H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 12.526h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.263.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22z"})))}var U,K,$=p.forwardRef(Y),Q=(t.p,t(8639),function(e){var n=e.date,t=e.setDate;return(0,O.jsxs)("div",{className:Z,children:[(0,O.jsx)($,{className:L}),(0,O.jsx)(W(),{className:R,selected:n,onChange:function(e){return t(e)}})]})}),G="Summary_summary__N6WqZ",ee="Summary_month__8pRdL",ne="Summary_title__jaC+J",te="Summary_text__8p6lE",ae=function(e){var n=e.params,t=void 0===n?"":n,a=null===Object||void 0===Object?void 0:Object.values(t)[0],s=(0,p.useState)(!1),i=(0,r.Z)(s,2),c=i[0],l=i[1],o=(0,p.useState)(!0),_=(0,r.Z)(o,2),d=_[0],u=_[1],m=(0,j.yp)({skip:c}).data,v=(0,j.FF)({skip:d}).data;(0,p.useEffect)((function(){if("expenses"===a)return u(!0),void l(!1);"incomes"===a&&(l(!0),u(!1))}),[a]);return(0,O.jsxs)("div",{className:G,children:[(0,O.jsx)("h2",{className:ne,children:"SUMMARY"}),v&&(c?Object.entries(m.monthsStats).map((function(e){return Object.assign({},e)})):d?Object.entries(v.monthsStats).map((function(e){return Object.assign({},e)})):void 0).filter((function(e){return"number"===typeof e[1]})).map((function(e){return(0,O.jsxs)("div",{className:ee,children:[(0,O.jsx)("span",{className:te,children:e[0]}),(0,O.jsx)("span",{className:te,children:e[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")})]},e[0])}))]})},se=t(2982),re="TransactionDetails_scrollTable__D0L7h",ie="TransactionDetails_scrollTableBody__gCYBA",ce="TransactionDetails_tableHead__82mZ0",le="TransactionDetails_table__head__empty__WJNnA",oe="TransactionDetails_body__empty__No4mR",_e="TransactionDetails_table__head__date__Nim+4",de="TransactionDetails_table__head__text__EmaRA",ue="TransactionDetails_table__head__category__P2gCX",me="TransactionDetails_table__head__sum__7Z+6J",pe="TransactionDetails_table__head__delete__bjI+x",ve="TransactionDetails_body__8gCsI",he="TransactionDetails_body__date__pl8jk",fe="TransactionDetails_body__description__6vghR",xe="TransactionDetails_body__category__6fuP0",be="TransactionDetails_minus__XmGjy",je="TransactionDetails_plus__5gB6v",ge="TransactionDetails_body__delete__oMzJJ",ye="TransactionDetails_btnDelete__YA2q5",Ne=function(){var e,n,t=(0,N.TH)(),a=(0,j.yC)(),s=(0,r.Z)(a,1)[0],i=(0,k.v9)((function(e){return e.auth.accessToken})),c=(0,p.useState)([]),l=(0,r.Z)(c,2),o=l[0],_=l[1],d=(0,j.FF)({skip:i}),u=(0,j.yp)({skip:i}),m=null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.expenses,v=null===u||void 0===u||null===(n=u.data)||void 0===n?void 0:n.incomes;(0,p.useEffect)((function(){void 0!==m&&void 0!==v&&("/transactions/expenses"===t.pathname?_((0,se.Z)(m).reverse()):_((0,se.Z)(v).reverse()))}),[v,m,t]);var h="/transactions/expenses"===t.pathname?be:je;return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("div",{className:re,children:[(0,O.jsx)("table",{children:(0,O.jsx)("thead",{className:ce,children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{className:le}),(0,O.jsx)("th",{className:_e,children:"DATE"}),(0,O.jsx)("th",{className:de,children:"DESCRIPTION"}),(0,O.jsx)("th",{className:ue,children:"CATEGORY"}),(0,O.jsx)("th",{className:me,children:"SUM"}),(0,O.jsx)("th",{className:pe})]})})}),(0,O.jsx)("div",{className:ie,children:(0,O.jsx)("table",{children:(0,O.jsx)("tbody",{children:o.map((function(e){return(0,O.jsxs)("tr",{className:ve,children:[(0,O.jsx)("td",{className:oe}),(0,O.jsx)("td",{className:he,children:e.date}),(0,O.jsx)("td",{className:fe,children:e.description}),(0,O.jsx)("td",{className:xe,children:e.category}),(0,O.jsx)("td",{className:h,children:(n=e.amount,"/transactions/expenses"===t.pathname?"- "+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d.":"+ "+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d.")}),(0,O.jsx)("td",{className:ge,children:(0,O.jsx)("button",{onClick:function(){return n=e._id,s(n),void _(o.filter((function(e){return e._id!==n})));var n},type:"button",className:ye})})]},e._id);var n}))})})})]})})},we=t(7628),ke=["title","titleId"];function Ee(){return Ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ee.apply(this,arguments)}function Oe(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function Te(e,n){var t=e.title,a=e.titleId,s=Oe(e,ke);return p.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:n,"aria-labelledby":a},s),t?p.createElement("title",{id:a},t):null,U||(U=p.createElement("path",{fill:"#52555F",d:"M17.031 0H2.97A1.76 1.76 0 0 0 1.21 1.758v16.484c0 .97.788 1.758 1.758 1.758H17.03a1.76 1.76 0 0 0 1.758-1.758V1.758A1.76 1.76 0 0 0 17.031 0zm.586 18.242a.587.587 0 0 1-.586.586H2.97a.587.587 0 0 1-.586-.586V1.758c0-.323.263-.586.586-.586H17.03c.323 0 .586.263.586.586v16.484z"})),K||(K=p.createElement("path",{fill:"#52555F",d:"M15.86 2.344H4.14a.586.586 0 0 0-.585.586v4.765c0 .324.262.586.586.586h11.718a.586.586 0 0 0 .586-.586V2.93a.586.586 0 0 0-.586-.586zm-.587 4.765H4.727V3.516h10.546v3.593zM6.484 9.453H4.141a.586.586 0 0 0-.586.586v2.344c0 .323.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-2.344a.586.586 0 0 0-.586-.586zm-.586 2.344H4.727v-1.172h1.171v1.172zM6.484 14.14H4.141a.586.586 0 0 0-.586.587v2.343c0 .324.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-2.343a.586.586 0 0 0-.586-.586zm-.586 2.344H4.727v-1.172h1.171v1.172zM11.172 9.453H8.828a.586.586 0 0 0-.586.586v2.344c0 .323.263.586.586.586h2.344a.586.586 0 0 0 .586-.586v-2.344a.586.586 0 0 0-.586-.586zm-.586 2.344H9.414v-1.172h1.172v1.172zM11.172 14.14H8.828a.586.586 0 0 0-.586.587v2.343c0 .324.263.586.586.586h2.344a.586.586 0 0 0 .586-.586v-2.343a.586.586 0 0 0-.586-.586zm-.586 2.344H9.414v-1.172h1.172v1.172zM15.86 9.453h-2.344a.586.586 0 0 0-.586.586v7.031c0 .324.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-7.03a.586.586 0 0 0-.586-.587zm-.587 7.031h-1.171v-5.859h1.171v5.86z"})))}var De=p.forwardRef(Te),Ie=(t.p,function(e){var n=e.date,t=e.setDate,a=(0,N.UO)(),s=(0,k.v9)((function(e){return e.auth.accessToken})),i=(0,p.useState)(""),c=(0,r.Z)(i,2),l=c[0],o=c[1],_=(0,p.useState)(""),d=(0,r.Z)(_,2),u=d[0],m=d[1],v=(0,p.useState)(""),h=(0,r.Z)(v,2),f=h[0],x=h[1],b=(0,j.qS)(),g=(0,r.Z)(b,1)[0],y=(0,j.M8)(),w=(0,r.Z)(y,1)[0],E=(0,N.TH)(),T=(0,j.H6)({skip:s}).data,S=(0,j.jN)({skip:s}).data,A=n.toJSON().slice(0,10),C=function(e){var n=e.currentTarget.name,t=e.currentTarget.value;switch(n){case"description":o(t);break;case"price":x(t);break;case"category":m(t);break;default:return}},P=H().width;return(0,O.jsxs)(O.Fragment,{children:[Boolean(P>768)&&(0,O.jsx)(z,{}),(0,O.jsxs)("div",{className:I.container,children:[(0,O.jsxs)("div",{className:I.block,children:[(0,O.jsxs)("div",{className:I.thumbs,children:[(0,O.jsx)(D.OL,{to:"/",className:I.icon_back,children:(0,O.jsx)(we.r,{className:I.backArrow})}),(0,O.jsx)(Q,{date:n,setDate:t}),(0,O.jsxs)("form",{className:I.form,children:[(0,O.jsxs)("div",{className:I.blok_input,children:[(0,O.jsx)("input",{className:I.input,name:"description",value:l,type:"text",onChange:C,placeholder:"Product description"}),(0,O.jsxs)("select",{className:I.select,placeholder:"Product category",name:"category",value:u,autoComplete:"off",autoCorrect:"off",onChange:C,children:[(0,O.jsx)("option",{defaultValue:!0,children:"Product category"}),"/transactions/expenses"===E.pathname?T&&T.map((function(e){return(0,O.jsx)("option",{value:e,children:e},e)})):S&&S.map((function(e){return(0,O.jsx)("option",{value:e,children:e},e)}))]}),(0,O.jsxs)("div",{className:I.wrapper_input_cal,children:[(0,O.jsx)("input",{className:I.price,name:"price",value:f,placeholder:"00.00",onChange:C}),(0,O.jsx)("div",{className:I.background_icon,children:(0,O.jsx)(De,{className:I.icon_cal})}),(0,O.jsx)(De,{className:I.icon_second_cal})]})]}),(0,O.jsx)("div",{className:I.wrapper_button,children:(0,O.jsx)(M,{className:I.btn,type:"submit",onClickSubmit:function(e){e.preventDefault(),"/transactions/expenses"===E.pathname?g({description:l,amount:f,date:A,category:u}):w({description:l,amount:f,date:A,category:u}),o(""),m(""),x("")},onClickReset:function(e){e.preventDefault(),o(""),m(""),x("")}})})]})]}),(0,O.jsx)(Ne,{})]}),(0,O.jsx)(ae,{params:a})]})]})}),Me=function(){var e=(0,N.TH)().pathname,n=window.innerWidth>767||"/transactions"===e,t=window.innerWidth<767&&"/transactions"===e,a=(0,k.I0)(),s=(0,j.qS)(),v=(0,r.Z)(s,1)[0],h=(0,j.M8)(),f=(0,r.Z)(h,1)[0],x=(0,p.useState)((function(){return new Date})),y=(0,r.Z)(x,2),w=y[0],E=y[1];return(0,p.useEffect)((function(){f.isSuccess&&a((0,F.F)(f.data))}),[a,f]),(0,p.useEffect)((function(){v.isSuccess&&a((0,F.F)(v.data))}),[a,v]),(0,O.jsxs)("main",{className:c,children:[(0,O.jsx)("div",{className:l}),(0,O.jsxs)("div",{className:i,children:[n&&(0,O.jsxs)("div",{className:o,children:[(0,O.jsxs)(D.rU,{className:_,to:"/reports",children:[(0,O.jsx)("span",{className:d,children:"Reports"}),(0,O.jsx)(b,{className:u})]}),(0,O.jsx)(g.Z,{dateTransactions:w})]}),t&&(0,O.jsx)("div",{className:m,children:(0,O.jsx)(Q,{date:w,setDate:E})}),(0,O.jsx)(B,{date:w,setDate:E}),(0,O.jsxs)(N.Z5,{children:[(0,O.jsx)(N.AW,{path:"expenses",element:(0,O.jsx)(Ie,{date:w,setDate:E})}),(0,O.jsx)(N.AW,{path:"incomes",element:(0,O.jsx)(Ie,{date:w,setDate:E})})]})]})]})}}}]);
//# sourceMappingURL=204.5f0a2dc9.chunk.js.map