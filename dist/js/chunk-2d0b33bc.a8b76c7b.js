(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b33bc"],{2800:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("楼盘")]),a("el-breadcrumb-item",[e._v("修改")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"楼盘名称"}},[a("el-input",{model:{value:e.form.pName,callback:function(t){e.$set(e.form,"pName",t)},expression:"form.pName"}})],1),a("el-form-item",{attrs:{label:"出售状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{key:"0",attrs:{label:"待开盘",value:"0"}}),a("el-option",{key:"1",attrs:{label:"在售",value:"1"}}),a("el-option",{key:"2",attrs:{label:"售完",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"供应商"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.spId,callback:function(t){e.$set(e.form,"spId",t)},expression:"form.spId"}},e._l(e.providers,function(e){return a("el-option",{key:e.spId,attrs:{label:e.spName,value:e.spId}})}),1)],1),a("el-form-item",{attrs:{label:"最小面积(平米)"}},[a("el-input",{model:{value:e.form.minSquare,callback:function(t){e.$set(e.form,"minSquare",t)},expression:"form.minSquare"}})],1),a("el-form-item",{attrs:{label:"最大面积(平米)"}},[a("el-input",{model:{value:e.form.maxSquare,callback:function(t){e.$set(e.form,"maxSquare",t)},expression:"form.maxSquare"}})],1),a("el-form-item",{attrs:{label:"最低价格(万)"}},[a("el-input",{model:{value:e.form.minPrice,callback:function(t){e.$set(e.form,"minPrice",t)},expression:"form.minPrice"}})],1),a("el-form-item",{attrs:{label:"最高价格(万)"}},[a("el-input",{model:{value:e.form.maxPrice,callback:function(t){e.$set(e.form,"maxPrice",t)},expression:"form.maxPrice"}})],1),a("el-form-item",{attrs:{label:"国家地区"}},[a("el-cascader",{attrs:{options:e.addresses},on:{change:e.addrChange},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("el-form-item",{attrs:{label:"完整地址"}},[a("el-input",{model:{value:e.form.fullAddr,callback:function(t){e.$set(e.form,"fullAddr",t)},expression:"form.fullAddr"}})],1),a("el-form-item",{attrs:{label:"产权年限"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.prightId,callback:function(t){e.$set(e.form,"prightId",t)},expression:"form.prightId"}},e._l(e.prights,function(e){return a("el-option",{key:e.prId,attrs:{label:e.name,value:e.prId}})}),1)],1),a("el-form-item",{attrs:{label:"交房时间-年"}},[a("el-input",{model:{value:e.form.handoverYear,callback:function(t){e.$set(e.form,"handoverYear",t)},expression:"form.handoverYear"}})],1),a("el-form-item",{attrs:{label:"交房时间-月"}},[a("el-input",{model:{value:e.form.handoverMonth,callback:function(t){e.$set(e.form,"handoverMonth",t)},expression:"form.handoverMonth"}})],1),a("el-form-item",{attrs:{label:"交房时间-日"}},[a("el-input",{model:{value:e.form.handoverDay,callback:function(t){e.$set(e.form,"handoverDay",t)},expression:"form.handoverDay"}})],1),a("el-form-item",{attrs:{label:"能否贷款"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.canLoan,callback:function(t){e.$set(e.form,"canLoan",t)},expression:"form.canLoan"}},[a("el-option",{key:"0",attrs:{label:"不能",value:"0"}}),a("el-option",{key:"1",attrs:{label:"能",value:"1"}})],1)],1),a("el-form-item",{attrs:{label:"规划面积(平米)"}},[a("el-input",{model:{value:e.form.totalSquare,callback:function(t){e.$set(e.form,"totalSquare",t)},expression:"form.totalSquare"}})],1),a("el-form-item",{attrs:{label:"总户数/总房数"}},[a("el-input",{model:{value:e.form.totalAmount,callback:function(t){e.$set(e.form,"totalAmount",t)},expression:"form.totalAmount"}})],1),a("el-form-item",{attrs:{label:"预计出租年收益(元)"}},[a("el-input",{model:{value:e.form.predictYearRent,callback:function(t){e.$set(e.form,"predictYearRent",t)},expression:"form.predictYearRent"}})],1),a("el-form-item",{attrs:{label:"缩略图"}},[a("el-input",{model:{value:e.form.thumbnail,callback:function(t){e.$set(e.form,"thumbnail",t)},expression:"form.thumbnail"}})],1),a("el-form-item",{attrs:{label:"图片名称-1"}},[a("el-input",{model:{value:e.form.picture1,callback:function(t){e.$set(e.form,"picture1",t)},expression:"form.picture1"}})],1),a("el-form-item",{attrs:{label:"图片名称-2"}},[a("el-input",{model:{value:e.form.picture2,callback:function(t){e.$set(e.form,"picture2",t)},expression:"form.picture2"}})],1),a("el-form-item",{attrs:{label:"图片名称-3"}},[a("el-input",{model:{value:e.form.picture3,callback:function(t){e.$set(e.form,"picture3",t)},expression:"form.picture3"}})],1),a("el-form-item",{attrs:{label:"图片名称-4"}},[a("el-input",{model:{value:e.form.picture4,callback:function(t){e.$set(e.form,"picture4",t)},expression:"form.picture4"}})],1),a("el-form-item",{attrs:{label:"详细介绍"}},[a("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("el-form-item",{attrs:{label:"是否加入首页精选"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{key:"0",attrs:{label:"不加",value:"0"}}),a("el-option",{key:"1",attrs:{label:"加",value:"1"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),a("el-button",{on:{click:e.cancel2list}},[e._v("取消")])],1)],1)],1)])])},l=[],o=(a("d85c"),a("175c"),a("bc97"),a("a5be"),{name:"typeadd",data:function(){return{addresses:[],address:[],prights:[],providers:[],pid:0,form:{name:""}}},created:function(){var e=this,t=this.$route.query.pId;this.$axios.get("https://bhost.pk4yo.com/projects/getbyid?pId="+t,{page:this.cur_page}).then(function(a){200==a.status&&a.data.data&&a.data.data.length>0&&(e.form=a.data.data[0],e.form.pId=t,e.address=[e.form.countryId,e.form.provinceId,e.form.cityId])}),this.$axios.get("https://bhost.pk4yo.com/areas",{page:this.cur_page}).then(function(t){if(200==t.status&&t.data.data&&t.data.data.length>0){var a=t.data.data,r=0,l=0,o=0;for(r=0;r<a.length;r++)1==a[r].level&&e.addresses.unshift({value:a[r].addrId,label:a[r].name,children:[]});for(r=0;r<a.length;r++)if(2==a[r].level)for(l=0;l<e.addresses.length;l++)if(a[r].parentId==e.addresses[l].value){e.addresses[l].children.unshift({value:a[r].addrId,label:a[r].name,children:[]});break}for(r=0;r<a.length;r++)if(3==a[r].level)e:for(l=0;l<e.addresses.length;l++)for(o=0;o<e.addresses[l].children.length;o++)if(a[r].parentId==e.addresses[l].children[o].value){e.addresses[l].children[o].children.unshift({value:a[r].addrId,label:a[r].name});break e}e.projects=t.data.data}}),this.$axios.get("https://bhost.pk4yo.com/providers",{page:this.cur_page}).then(function(t){200==t.status&&t.data.data&&t.data.data.length>0&&(e.providers=t.data.data)}),this.$axios.get("https://bhost.pk4yo.com/prights",{page:this.cur_page}).then(function(t){200==t.status&&t.data.data&&t.data.data.length>0&&(e.prights=t.data.data)})},methods:{cancel2list:function(){this.$router.push({path:"/projectlist"})},addrChange:function(e){console.log(e),this.form.countryId=e[0],this.form.provinceId=e[1],this.form.cityId=e[2]},onSubmit:function(){var e=this;this.$axios.get("https://bhost.pk4yo.com/projects/update",{params:this.form}).then(function(t){200==t.status&&t.data&&0==t.data.code&&(e.$message.success("更新成功！"),e.$router.push({path:"/projectlist"}))}).catch(function(t){console.log(t),e.$message.error(t)})}}}),s=o,i=a("25c1"),n=Object(i["a"])(s,r,l,!1,null,null,null);n.options.__file="modify.vue";t["default"]=n.exports}}]);