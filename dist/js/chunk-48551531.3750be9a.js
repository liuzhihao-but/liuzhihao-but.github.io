(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48551531"],{ac78:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mine-body"},[a("div",{staticClass:"mine-header"},[a("a-breadcrumb",{attrs:{separator:">"}},[a("a-breadcrumb-item",[e._v("我的")]),a("a-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),a("hr")],1),a("div",{staticClass:"mine-section"},[a("span",[e._v(e._s(this.$route.meta.title))]),a("div",[a("span",[e._v("工厂名称︰")]),a("span",[e._v(e._s(e.mineitem.merName))])]),e._m(0),a("div",[a("span",[e._v("商标类型：")]),a("span",[e._v(e._s(e.mineitem.trademarkType))])]),a("div",[a("span",[e._v("入驻类型：")]),a("span",[e._v(e._s(e.mineitem.businessOperation))])]),a("div",[a("a-button",{attrs:{type:"link",href:"/minelist"}},[e._v("查看详情")]),a("a-button",{attrs:{type:"link",href:"/change"}},[e._v("更改密码")])],1)]),a("div",{staticClass:"mine-footer"},[a("span",[e._v("我的襄理 "),a("a-button",{attrs:{type:"primary"}},[e._v("工单列表")])],1),a("div",[a("span",[e._v("当前无襄理")]),a("a-button",{attrs:{type:"primary"}},[e._v(" 去选择")])],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",[e._v("负责人：")]),a("span",[e._v("数据")])])}],s=(a("96cf"),a("1da1")),r={data:function(){return{mineitem:[]}},mounted:function(){this.mine()},methods:{mine:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={id:sessionStorage.getItem("id")},t.next=3,e.$http.getmer(a);case 3:n=t.sent,i=n.data,console.log(i),"0000"==i.code&&(e.mineitem=i.data.mer.merInfo,e.status());case 7:case"end":return t.stop()}}),t)})))()},status:function(){switch(this.mineitem.trademarkType){case 0:this.mineitem.trademarkType="自由品牌";break;case 1:this.mineitem.trademarkType="共有品牌";break;case 2:this.mineitem.trademarkType="加盟蓝天";break}}}},m=r,c=(a("bd5d"),a("2877")),o=Object(c["a"])(m,n,i,!1,null,"8e00f0ae",null);t["default"]=o.exports},bd5d:function(e,t,a){"use strict";a("df60")},df60:function(e,t,a){}}]);
//# sourceMappingURL=chunk-48551531.3750be9a.js.map