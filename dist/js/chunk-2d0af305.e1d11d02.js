(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af305"],{"0cea":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("房源类型")]),a("el-breadcrumb-item",[t._v("装修类型")]),a("el-breadcrumb-item",[t._v("添加")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{staticClass:"housetypeadd-label",attrs:{label:"装修类型名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),a("el-button",{on:{click:t.cancel2list}},[t._v("取消")])],1)],1)],1)])])},n=[],o={name:"typeadd",data:function(){return{form:{name:""}}},created:function(){},methods:{cancel2list:function(){this.$router.push({path:"/housefitmentlist"})},onSubmit:function(){var t=this;this.$axios.get("/fitments/add",{params:this.form}).then(function(e){200==e.status&&e.data&&0==e.data.code&&(t.$message.success("提交成功！"),t.$router.push({path:"/housefitmentlist"}))}).catch(function(e){console.log(e),t.$message.error(e)})}}},r=o,i=a("25c1"),c=Object(i["a"])(r,s,n,!1,null,null,null);c.options.__file="add.vue";e["default"]=c.exports}}]);