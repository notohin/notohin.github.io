(function(t){function e(e){for(var s,i,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)i=r[d],a[i]&&p.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://notohin.github.io/hstool/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"0e63":function(t,e){t.exports="data:image/png;base64,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"},1771:function(t,e,n){var s={"./bill_bottom.png":"0e63","./bill_camlinhhanayuki.png":"4fc8","./bill_hanayukiduong.png":"ed90","./bill_hongvan.png":"69bd","./bill_lamdephieuqua.png":"ac21","./bill_lathimieu.png":"d1d4","./bill_linhthuy.png":"4ae7","./bill_top.png":"9b25","./bill_tutrinh.png":"4c7c","./logo.png":"cf05"};function a(t){var e=o(t);return n(e)}function o(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="1771"},"2aa9":function(t,e,n){},"4ae7":function(t,e,n){t.exports=n.p+"img/bill_linhthuy.ef5d273c.png"},"4c7c":function(t,e,n){t.exports=n.p+"img/bill_tutrinh.d12a3287.png"},"4fc8":function(t,e,n){t.exports=n.p+"img/bill_camlinhhanayuki.44bf8a46.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[t.success?n("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e(),t._v("\n    | Công cụ hỗ trợ Team Tú Trinh Hanayuki | "),n("a",{attrs:{href:"https://hanayukishop.com"}},[t._v("hanayukishop.com")])],1),n("router-view",{key:t.componentKey,on:{authenticated:t.setAuthenticated}})],1)},o=[],i=(n("6b54"),n("a481"),n("3452")),r={name:"App",data:function(){return{componentKey:0,authenticated:"",success:!1,data1e:"U2FsdGVkX1+gH95MZg8bWiCebsVFq0LZV2DAQ9ss9+NB9jPTt4kWKyvp7L9pT34IhvC0KjFVceirdlKhyxqTuNTs3g7CiXlrBti43p0DlSA70MtnIQhIeXxGVnR3XlFA2qgdQcbO50SWnIfS4u4tcd02jaEIxdxRqkBxgCO3qojJSvmJGuJe64gNNIhhG/14Ng/3uEKO7SGmDN9Rj7u8fYw0benfGhdiV8vXUnJiAuv2oIkZxrpFiBrNwkVY8d2wglLwg78nMQMO75W/O+jKRz9SBmXbFS/PumBFQGw9SGgw5WtBLXS++JPXeUPiXZ1MwgIqI8e9FwuZs72qYYURgCegCzp9hANcQOwrv32m6wgbmtMNwsRNKjJPOGV4PjBetEsfzuhc/R7FDQcxFTqnkwBhEqf5eTRItUQPJOKL/QEjhB08yCT+1Qww/WD7xoQnDRQHcwxjbagsK0AT/tR7ikl7CnRVon3wiOEUPPFqB4fVMPonA34HWtW7kR5p9amKsGuyLbo1Ut2y6T8pmIQrUDja6aSmBtmnpFn8k9iAB7IbPARh7gaUjBU9DQ0NUOsUiSHPH9zTAF302sRk4EMalA1mYttM8XgrYockfM3lSTKsjeicyyGABK6+MKFTG369Ift4vqvhDJLKgU+5MQGyHQye5jPzJO3zeRpGqytrx7FI5SiIXpILC526mdgEjYlW/v18GFWiF4rR8Z9yrxgdiNhaJ7O+PhYZ1/w5DDrPM/I7dyMwX7jBiDZqIKxE6YFRvorBbFiXRLoObCbO4wwbwZvK5ffl7HutoP1kZkg2iZcFiiBo6yEFkE8dldDYgJyn+Dhkm+f9HP3pOT6DiqfTIn0kSToz5jPLoO0oOJJ8JaITudAWxioE+7c87sWzsHsslUO/pR2W3QQ3Zm6vDI/CXV3y3fSliMhIDrm1S45mQpVTAF6C1WMDO25nUev3qnj+Yb2wqwZewy5vGMRs0U/u2FSHDRc6jdJTioctFHuAgHxGppJccPAqfAbsTsaEPLXBiBai0ileOAc5PgtTkJ0OhBtfqqYNB4du1DovXAQbygcSKk2itMCbpUeG5f9QZToGF8pxqPGIQdILVRW1PuGAonmD8ipDcc+eYOCDoCh/8PAT/e+cnT8FiOdg9fTP9CUjPWyirFEWh7DtHFQI5AtW7IaNjA/6R7vwLME2fkGGpTGkNfSZEi3BwI7Ux97xhBLpnaA7xvfFVgmeqFR6FtC2Y70D4MW5yPxoD2++xlQ4yaJcc8Mmc2m+F9XXzyuIfFeEJjNZO9vG8+Cu82IXcrciaRpDc2TgTbzu37Hzco7BFaH+jXaj4SgipvMhu3qr7pkET/2T/+KE2XF6+aMleZti1t7WJFL+1WVmTBOgJ4NRUusSzE2uApVaHNPvId5NMojEwA2pGyxsk9nzgxVMLpqx32p/5XVl57iEBHiSRKpZ3AKNp7ca9+6BMQoCUx1qGIcN5gddHAtcP+56nxPMe476vFytlrFDkqixT1cvWuLj9HjL8cLLFwiWDRCC4lEDQ8ZE",data1d:null,data2e:"U2FsdGVkX18v4GbsmAIiS5kS8qMTszc1TX9hBYUk6U9/odMQAS3pdYvFJuVftCuyU8TV2whyUS8H/L6h7X0IZATHdVpOHfvhS8shAS1thhPuzC6OB6HEXV1befmXCs06cHhL92r/TFytzKtppFwlpUT9ET5EmfIkUYqLSL+Y+J0XoSIC07yL90N6Sn4bK1FWJ0ZIWLe/8zCAA/kY5z/XwtWN6/HxCbJB+f3ikXfgC9yPemrX+1RAJxDzwboBURbg+1fZCNdi0oSk4Ag/gUK+j/dq41ODIib8vkCcqguCFVmqqaQTKgqDecpU513KK3g4l0VQrlw5ZU+yI7t2BupC8JvAtDwH+cEYN8FRofyhlujpD8PYLNjxKY6RuP/dzbW2PCa+kuC9022pAl4MyYqsF37pg+uevXGbn1IjJZiC4ag=",data2d:null}},mounted:function(){this.authenticated=localStorage.authenticated,this.checkAuth(),this.success?this.$router.replace({name:"secure"}):this.$router.replace({name:"login"}),this.componentKey+=1},watch:{authenticated:function(t){localStorage.authenticated=t}},methods:{checkAuth:function(){var t=!1,e=i.AES.decrypt(this.data1e,this.authenticated),n=i.AES.decrypt(this.data2e,this.authenticated);try{e=e.toString(i.enc.Utf8),e=JSON.parse(e),this.data1d=e,n=n.toString(i.enc.Utf8),n=JSON.parse(n),this.data2d=n,t=!0}catch(s){t=!1}return this.success=t,t},setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1}}},c=r,u=(n("034f"),n("2877")),l=Object(u["a"])(c,a,o,!1,null,null,null),d=l.exports,p=n("5f5b"),h=(n("f9e3"),n("2dd8"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}})]),n("div",{staticClass:"card-body"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")])])])},v=[],g={name:"Login",data:function(){return{input:{password:""}}},methods:{login:function(){""!=this.input.password?(this.$emit("authenticated",this.input.password),this.$parent.checkAuth()?this.$router.replace({name:"secure"}):alert("The password is incorrect")):alert("A username and password must be present")}}},m=g,b=Object(u["a"])(m,f,v,!1,null,"ec74dffa",null),y=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table table-striped table-responsive"},[t._m(0),t._l(t.groups,(function(e,s){return n("MakeBillGroup",{key:s,attrs:{groupId:s,maxRow:e.maxRow,myPhams:t.getMyPhams(e.myPhams)},on:{updated:t.onChildUpdated}})})),n("tbody",[n("tr",{staticClass:"table-success"},[n("td",[t._v("\n          Quà tặng / Free Ship\n          "),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tong.free,expression:"tong.free",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",inputmode:"numeric",pattern:"[0-9]*",min:"0",step:"1"},domProps:{value:t.tong.free},on:{change:function(e){return t.updateData()},input:function(e){e.target.composing||t.$set(t.tong,"free",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("td",[t._v(t._s(t.tong.sl))]),n("td",{staticClass:"bg-danger text-white"},[n("div",[t._v(t._s(t.tong.gia))]),t.tong.free>0?n("div",[t._v(t._s(t.tong.gia+t.tong.free))]):t._e()]),n("td",[t._v(t._s(t.tong.soSanh2(0)))]),n("td",[t._v(t._s(t.tong.soSanh2(1)))]),n("td",[t._v(t._s(t.tong.soSanh2(2)))]),n("td",[t._v(t._s(t.tong.soSanh2(3)))]),n("td",[t._v(t._s(t.tong.soSanh2(4)))]),n("td",[t._v(t._s(t.tong.soSanh2(5)))]),n("td",[t._v(t._s(t.tong.soSanh2(6)))]),n("td",[t._v(t._s(t.tong.soSanh2(7)))]),n("td",[t._v(t._s(t.tong.soSanh2(8)))]),n("td")])])],2),n("div",{staticClass:"mb-3 form-inline"},[n("button",{staticClass:"btn btn-primary mt-3 ml-3",attrs:{type:"button"},on:{click:function(e){return t.onAddGroup()}}},[t._v("Tạo nhóm sp")]),n("button",{staticClass:"btn btn-danger ml-3 mt-3",attrs:{type:"button"},on:{click:function(e){return t.onRemoveGroup()}}},[t._v("Xoá nhóm sp")]),n("button",{staticClass:"btn ml-3 btn-primary mt-3",attrs:{type:"button"},on:{click:function(e){return t.onDownloadImage()}}},[t._v("Tải ảnh")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.userInfo,expression:"userInfo"}],staticClass:"custom-select ml-3 mt-3",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.userInfo=e.target.multiple?n:n[0]},function(e){return t.onSelectUserInfo()}]}},t._l(t.userInfos,(function(e){return n("option",{key:e.fb,domProps:{value:e}},[t._v(t._s(e.fb))])})),0)]),n("div",{staticClass:"container-fluid overflow-auto"},[n("div",{staticClass:"bg-white",staticStyle:{width:"720px",padding:"20px"},attrs:{id:"BillImage"}},[this.userInfo.imgBill?[n("div",{staticClass:"text-center",staticStyle:{"padding-bottom":"20px"}},[n("img",{attrs:{src:t.getImgUrl("bill_"+this.userInfo.imgBill+".png")}})]),n("div",{staticClass:"note2"},[n("pre",[t._v(t._s(t.note2))])])]:[t._m(1),n("div",{staticClass:"text-center"},[n("p",[t._v(t._s(this.userInfo.web))])]),n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col"},[n("font-awesome-icon",{staticClass:"mr-1",staticStyle:{color:"#3b5998"},attrs:{icon:"phone-square"}}),t._v("\n            "+t._s(this.userInfo.phone)+"\n          ")],1),n("div",{staticClass:"col"},[n("font-awesome-icon",{staticClass:"mr-1",staticStyle:{color:"#3b5998"},attrs:{icon:["fab","facebook-square"]}}),t._v("\n            "+t._s(this.userInfo.fb)+"\n          ")],1)])],n("table",{staticClass:"table"},[t._m(2),n("tbody",[t._l(t.tong.allHaveValue(),(function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(s+1))]),n("td",[t._v(t._s(e.spKey))]),n("td",[t._v(t._s(e.sl))]),n("td",[t._v("\n              "+t._s(t.formatCurrency(e.giaSi()))+"\n              "),e.siIndex>0?n("span",{staticClass:"badge badge-primary"},[t._v(t._s(e.siText()))]):t._e()]),n("td",[t._v(t._s(t.formatCurrency(e.gia())))])])})),n("tr",[n("td"),n("td"),n("td"),n("td",[t._v("Tổng")]),n("td",[t._v(t._s(t.formatCurrency(t.tong.gia)))])]),n("tr",[n("td",{attrs:{colspan:"5"}},[n("pre",[t._v(t._s(t.note))])])])],2),n("tbody")]),t._m(3)],2)]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"note"}},[t._v("Ghi chú:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.note=e.target.multiple?n:n[0]}}},t._l(t.savedNotes,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"form-control",attrs:{rows:"5",id:"note"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"note2"}},[t._v("Ghi chú 2:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.note2,expression:"note2"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.note2=e.target.multiple?n:n[0]}}},t._l(t.savedNotes2,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note2,expression:"note2"}],staticClass:"form-control",attrs:{rows:"5",id:"note2"},domProps:{value:t.note2},on:{input:function(e){e.target.composing||(t.note2=e.target.value)}}})])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{staticStyle:{"min-width":"260px"},attrs:{scope:"col"}},[t._v("Sản phẩm")]),n("th",{staticStyle:{"min-width":"100px"},attrs:{scope:"col"}},[t._v("Số lượng")]),n("th",{staticStyle:{"min-width":"100px"},attrs:{scope:"col"}},[t._v("Tổng giá")]),n("th",{attrs:{scope:"col"}},[t._v("Giá lẻ")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 5")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 10")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 20")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 50")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 100")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 200")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 500")]),n("th",{attrs:{scope:"col"}},[t._v("Sỉ 1000")]),n("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{attrs:{src:n("9b25")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",[t._v("STT")]),n("th",[t._v("Sản Phẩm")]),n("th",[t._v("SL")]),n("th",[t._v("Đơn Giá")]),n("th",[t._v("Tổng")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{attrs:{src:n("0e63")}})])}],x=(n("c5f6"),n("ac4d"),n("8a81"),n("ac6a"),n("d225")),A=n("b0b4"),w=n("bd86"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",[t._l(t.dangChons,(function(e,s){return n("tr",{key:s},[n("td",[n("div",{staticClass:"input-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.spKey,expression:"v.spKey"}],staticClass:"custom-select",on:{change:[function(n){var s=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"spKey",n.target.multiple?s:s[0])},function(n){return t.onSelectSP(n,e)}]}},[n("option",{attrs:{value:""}}),e.spKey?n("option",{domProps:{value:e.spKey}},[t._v(t._s(e.spKey))]):t._e(),t._l(t.listSelectSP,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)])]),n("td",[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sl,expression:"v.sl",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",inputmode:"numeric",pattern:"[0-9]*",min:"0",step:"1"},domProps:{value:e.sl},on:{change:function(e){return t.updateData()},input:function(n){n.target.composing||t.$set(e,"sl",t._n(n.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("td",[t._v(t._s(e.gia()))]),n("td",{class:{"table-info":0==e.siIndex}},[t._v(t._s(e.s(0)))]),n("td",{class:{"table-info":1==e.siIndex}},[t._v(t._s(e.s(1)))]),n("td",{class:{"table-info":2==e.siIndex}},[t._v(t._s(e.s(2)))]),n("td",{class:{"table-info":3==e.siIndex}},[t._v(t._s(e.s(3)))]),n("td",{class:{"table-info":4==e.siIndex}},[t._v(t._s(e.s(4)))]),n("td",{class:{"table-info":5==e.siIndex}},[t._v(t._s(e.s(5)))]),n("td",{class:{"table-info":6==e.siIndex}},[t._v(t._s(e.s(6)))]),n("td",{class:{"table-info":7==e.siIndex}},[t._v(t._s(e.s(7)))]),n("td",{class:{"table-info":8==e.siIndex}},[t._v(t._s(e.s(8)))]),n("td",[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(n){return t.onRemoveSP(e,s)}}},[t._v("X")])])])})),n("tr",{staticClass:"table-primary"},[n("td",[t._v("Tổng")]),n("td",[t._v(t._s(t.tong.sl))]),n("td",{staticClass:"bg-danger text-white"},[t._v(t._s(t.tong.gia))]),n("td",[t._v(t._s(t.tong.s(0)))]),n("td",[t._v(t._s(t.tong.s(1)))]),n("td",[t._v(t._s(t.tong.s(2)))]),n("td",[t._v(t._s(t.tong.s(3)))]),n("td",[t._v(t._s(t.tong.s(4)))]),n("td",[t._v(t._s(t.tong.s(5)))]),n("td",[t._v(t._s(t.tong.s(6)))]),n("td",[t._v(t._s(t.tong.s(7)))]),n("td",[t._v(t._s(t.tong.s(8)))]),n("td")]),n("tr",{staticClass:"table-primary"},[n("td",[t._v("So sánh")]),n("td",[t.showAdd()?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.onAddSP()}}},[t._v("+")]):t._e()]),n("td",{staticStyle:{"padding-left":"0","padding-right":"0"}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tong.siIndexCustom,expression:"tong.siIndexCustom",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",inputmode:"numeric",pattern:"[0-9]*",step:"5",placeholder:"Sỉ:1-1000"},domProps:{value:t.tong.siIndexCustom},on:{change:function(e){return t.updateData()},input:function(e){e.target.composing||t.$set(t.tong,"siIndexCustom",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("td",[t._v(t._s(t.tong.soSanh(0)))]),n("td",[t._v(t._s(t.tong.soSanh(1)))]),n("td",[t._v(t._s(t.tong.soSanh(2)))]),n("td",[t._v(t._s(t.tong.soSanh(3)))]),n("td",[t._v(t._s(t.tong.soSanh(4)))]),n("td",[t._v(t._s(t.tong.soSanh(5)))]),n("td",[t._v(t._s(t.tong.soSanh(6)))]),n("td",[t._v(t._s(t.tong.soSanh(7)))]),n("td",[t._v(t._s(t.tong.soSanh(8)))]),n("td")])],2)},I=[],k=(n("6762"),n("2fdb"),n("456d"),function(){function t(){Object(x["a"])(this,t),Object(w["a"])(this,"sp",void 0),Object(w["a"])(this,"spKey",void 0),Object(w["a"])(this,"sl",1),Object(w["a"])(this,"siIndex",-1)}return Object(A["a"])(t,[{key:"gia",value:function(){return this.sp&&this.siIndex>=0?this.sp.gia[this.siIndex]*this.sl:0}},{key:"s",value:function(t){return this.sp?this.sp.gia[t]:""}},{key:"giaSi",value:function(){return this.sp&&this.siIndex>=0?this.sp.gia[this.siIndex]:0}},{key:"siText",value:function(){var t=[0,5,10,20,50,100,200,500,1e3];return"Sỉ "+t[this.siIndex]}}]),t}()),P=function(){function t(){Object(x["a"])(this,t),Object(w["a"])(this,"sl",0),Object(w["a"])(this,"gia",0),Object(w["a"])(this,"giaSi",[]),Object(w["a"])(this,"siIndex",-1),Object(w["a"])(this,"siIndexCustom",""),Object(w["a"])(this,"dangChons",void 0)}return Object(A["a"])(t,[{key:"s",value:function(t){return this.giaSi[t]}},{key:"soSanh",value:function(t){var e=this.giaSi[t];return e?this.gia-e:0}},{key:"cal",value:function(t){var e,n=0,s=[0,0,0,0,0,0,0,0,0];t.forEach((function(t){t.spKey&&(n+=t.sl,[0,1,2,3,4,5,6,7,8].forEach((function(e){s[e]+=t.sp.gia[e]*t.sl})))})),this.sl=n,this.giaSi=s,e=this.siIndexCustom>0?this.siIndexOf(this.siIndexCustom):this.siIndexOf(n),this.siIndex=e,this.gia=s[e],t.forEach((function(t){t.siIndex=e})),this.dangChons=t}},{key:"siIndexOf",value:function(t){var e;return e=t<5?0:t<10?1:t<20?2:t<50?3:t<100?4:t<200?5:t<500?6:t<1e3?7:8,e}}]),t}(),j={name:"MakeBillGroup",props:{myPhams:Object,groupId:Number,maxRow:Number},data:function(){return{dangChons:[new k],listSelectSP:[],tong:new P}},mounted:function(){this.myPhams&&(this.listSelectSP=Object.keys(this.myPhams))},watch:{myPhams:function(t){t&&(this.listSelectSP=Object.keys(t))}},methods:{updateData:function(){this.tong.cal(this.dangChons);var t=Object.keys(this.myPhams),e=this.dangChons.map((function(t){return t.spKey}));this.listSelectSP=t.filter((function(t){return!1===e.includes(t)})),this.$emit("updated",this.tong,this.groupId)},onSelectSP:function(t,e){var n=t.target.value,s=this.myPhams[n];e.sp=s,this.updateData()},showAdd:function(){return!this.maxRow||this.dangChons.length<this.maxRow},onAddSP:function(){this.dangChons.push(new k),this.updateData()},onRemoveSP:function(t,e){this.dangChons.splice(e,1),this.updateData()}}},F=j,O=Object(u["a"])(F,C,I,!1,null,null,null),N=O.exports,R=n("70b0"),T=n.n(R),D=n("aeb1"),M=n.n(D),U=function(){function t(){Object(x["a"])(this,t),Object(w["a"])(this,"tongs",[]),Object(w["a"])(this,"sl",0),Object(w["a"])(this,"gia",0),Object(w["a"])(this,"free",0)}return Object(A["a"])(t,[{key:"soSanh2",value:function(t){var e=0,n=!0,s=!1,a=void 0;try{for(var o,i=this.tongs[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var r=o.value;r&&(e+=r.soSanh(t))}}catch(c){s=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}return e-this.free}},{key:"cal",value:function(){var t=0,e=0,n=!0,s=!1,a=void 0;try{for(var o,i=this.tongs[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var r=o.value;r&&(t+=r.gia,e+=r.sl)}}catch(c){s=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}this.gia=t,this.sl=e}},{key:"allHaveValue",value:function(){return this.tongs.map((function(t){return t.dangChons})).flat().filter((function(t){return t.spKey}))}}]),t}(),B={name:"MakeBill",components:{MakeBillGroup:N},data:function(){var t=new Date;return{myPhams:{},tong:new U,groups:[],userInfos:[{phone:"077.8765.013",fb:"Làm Đẹp Hiệu Quả",imgBill:"lamdephieuqua"},{phone:"077.8765.013",fb:"Tú Trinh Hanayuki",imgBill:"tutrinh"},{phone:"039.2379.515",fb:"Hồng Vân",web:"hanayukishop.com",imgBill:"hongvan"},{phone:"039.999.7336",fb:"La Thị Miếu",web:"hanayukishop.com",imgBill:"lathimieu"},{phone:"0337.896.527",fb:"Linh Thùy",web:"hanayukishop.com",imgBill:"linhthuy"},{phone:"0931.996.835",fb:"Cẩm Linh Hanayuki",web:"hanayukiplus.com",imgBill:"camlinhhanayuki"},{phone:"035.964.2146",fb:"Hanayuki Dương",web:"hanayukishop.com",imgBill:"hanayukiduong"}],userInfo:{},note:"",savedNotes:[],note2:"Ngày: "+t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear(),savedNotes2:[]}},mounted:function(){this.myPhams.h1=this.$parent.data1d,this.myPhams.h2=this.$parent.data2d,this.groups=[{maxRow:11,myPhams:"h1"}],this.updateData();var t=0|localStorage.getItem("userInfoIndex");this.userInfo=this.userInfos[t];var e=localStorage.getItem("savedNotes");e=JSON.parse(e),this.savedNotes=Array.isArray(e)?e:[];var n=localStorage.getItem("savedNotes2");n=JSON.parse(n),this.savedNotes2=Array.isArray(n)?n:[]},methods:{onChildUpdated:function(t,e){this.tong.tongs[e]=t,this.tong.cal()},updateData:function(){this.tong.cal()},getMyPhams:function(t){return this.myPhams[t]||{}},onAddGroup:function(){this.groups.push({maxRow:1,myPhams:"h2"})},onRemoveGroup:function(){this.groups.length>1&&(this.groups.splice(this.groups.length-1,1),this.updateData())},formatCurrency:function(t){return Number(1e3*t).toLocaleString("en")+"₫"},onDownloadImage:function(){var t=document.getElementById("BillImage"),e={quality:.95};T.a.toJpeg(t,e).then((function(t){M()(t,"hanayukishop_bill.jpg","image/jpeg;base64")})).catch((function(t){console.error("oops, something went wrong!",t)}));var n=this.note;if(n&&n.trim()){var s=this.savedNotes,a=s.indexOf(n);a>=0&&s.splice(a,1),s.splice(0,0,n),s.length>20&&(s.length=20),localStorage.setItem("savedNotes",JSON.stringify(s))}var o=this.note2;if(o&&o.trim()){var i=this.savedNotes2,r=i.indexOf(o);r>=0&&i.splice(r,1),i.splice(0,0,o),i.length>20&&(i.length=20),localStorage.setItem("savedNotes2",JSON.stringify(i))}},onSelectUserInfo:function(){var t=this.userInfos.indexOf(this.userInfo);localStorage.setItem("userInfoIndex",t)},getImgUrl:function(t){return n("1771")("./"+t)}}},G=B,J=(n("ae56"),Object(u["a"])(G,_,S,!1,null,"9aff56e0",null)),V=J.exports;s["default"].use(h["a"]);var X=new h["a"]({routes:[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:y},{path:"/secure",name:"secure",component:V}]}),K=n("ecee"),q=n("c074"),E=n("f2d1"),L=n("ad3d");s["default"].use(p["a"]),K["c"].add(q["a"]),K["c"].add(E["a"]),s["default"].component("font-awesome-icon",L["a"]),s["default"].config.productionTip=!1,new s["default"]({router:X,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,n){},"69bd":function(t,e,n){t.exports=n.p+"img/bill_hongvan.44b888c6.png"},"9b25":function(t,e,n){t.exports=n.p+"img/bill_top.28ad5af7.png"},ac21:function(t,e,n){t.exports=n.p+"img/bill_lamdephieuqua.f7b116fd.png"},ae56:function(t,e,n){"use strict";var s=n("2aa9"),a=n.n(s);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.349f8360.png"},d1d4:function(t,e,n){t.exports=n.p+"img/bill_lathimieu.ccd29504.png"},ed90:function(t,e,n){t.exports=n.p+"img/bill_hanayukiduong.94483139.png"}});