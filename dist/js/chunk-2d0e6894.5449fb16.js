(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6894"],{"98ba":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("活动管理")]),a("el-breadcrumb-item",[t._v("添加")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{staticClass:"housetypeadd-label",attrs:{label:"活动主题"}},[a("el-input",{model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),a("el-form-item",{staticClass:"housetypeadd-label",attrs:{label:"活动地址"}},[a("el-input",{model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("el-form-item",{staticClass:"housetypeadd-label",attrs:{label:"时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},on:{change:t.timeChange},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1),a("el-form-item",{staticClass:"housetypeadd-label",attrs:{label:"图片名称"}},[a("el-input",{model:{value:t.form.imgname,callback:function(e){t.$set(t.form,"imgname",e)},expression:"form.imgname"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),a("el-button",{on:{click:t.cancel2list}},[t._v("取消")])],1)],1)],1)])])},i=[],r={name:"activityadd",data:function(){return{form:{name:""}}},created:function(){},methods:{cancel2list:function(){this.$router.push({path:"/activitylist"})},timeChange:function(){},onSubmit:function(){var t=this,e=new Date(this.form.startTime),a=e.getMonth()+1;this.form.startTime=e.getFullYear()+"-"+a+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),this.$axios.get("/activity/add",{params:this.form}).then(function(e){200==e.status&&e.data&&0==e.data.code&&(t.$message.success("提交成功！"),t.$router.push({path:"/activitylist"}))}).catch(function(e){console.log(e),t.$message.error(e)})}}},l=r,o=a("25c1"),n=Object(o["a"])(l,s,i,!1,null,null,null);n.options.__file="add.vue";e["default"]=n.exports}}]);