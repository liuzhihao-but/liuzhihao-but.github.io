(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-263c6697"],{"0826":function(e,t,a){"use strict";a("26f2")},"26f2":function(e,t,a){},"77b8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{attrs:{id:"home-body"}},[a("a-layout-sider",[a("div",{staticClass:"logo"},[a("img",{attrs:{src:"/logo.png",alt:""}})]),a("a-menu",{style:{height:"100%",background:"#3B7FFF",color:"#fff"},on:{select:e.scope}},[a("a-menu-item",{key:"/productlist"},[a("span",[e._v("商品管理")])]),a("a-menu-item",{key:"/management"},[a("span",[e._v("订单管理")])]),a("a-menu-item",{key:"/userslist",attrs:{disabled:""}},[a("span",[e._v("用户管理")])]),a("a-menu-item",{key:"/essential"},[a("span",[e._v("合同管理")])]),a("a-menu-item",{key:"/allocation"},[a("span",[e._v("配置管理")])]),a("a-menu-item",{key:"/mine"},[a("span",[e._v("我的")])])],1)],1),a("a-layout",[a("a-layout-header",{attrs:{id:"home-header"}},[a("div",{staticClass:"home-conter"},[a("div",[a("img",{attrs:{src:"/默认头像.png",alt:""}})]),a("div",[a("span",[e._v(e._s(e.merdata.name))]),a("span",[e._v("账号:"+e._s(e.merdata.phone))])]),a("div",[a("img",{attrs:{src:"/退出.png",alt:""},on:{click:e.tc}})])])]),a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"80vh"}},[a("router-view")],1)],1)],1)},r=[],s=(a("ac1f"),a("5319"),a("96cf"),a("1da1")),o={data:function(){return{collapsed:!0,merdata:[]}},mounted:function(){this.item()},methods:{item:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={id:sessionStorage.getItem("id")},t.next=3,e.$http.getmer(a);case 3:n=t.sent,r=n.data,"0000"==r.code&&(e.merdata=r.data.mer);case 6:case"end":return t.stop()}}),t)})))()},scope:function(e){var t=e.key;this.$router.push(t)},tc:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={phone:e.merdata.phone,token:sessionStorage.getItem("token")},t.next=3,e.$http.logout(a);case 3:n=t.sent,r=n.data,"0000"==r.code&&(e.$message({showClose:!0,message:"退出登录成功",type:"success"}),sessionStorage.clear(),e.$router.replace("/"));case 6:case"end":return t.stop()}}),t)})))()}}},i=o,c=(a("0826"),a("2877")),u=Object(c["a"])(i,n,r,!1,null,"0690d9fc",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-263c6697.4d8bf1d0.js.map