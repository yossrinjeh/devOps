import{a as v}from"./chunk-B5ERMHV3.js";import{s as w,t as F,u as M}from"./chunk-6AOILKHN.js";import{k as I,m as E,o as h}from"./chunk-NCDLYK7T.js";import{$a as l,Eb as n,Fb as r,Gb as C,Nc as b,Rc as S,Xb as a,Zb as c,_a as d,ga as s,ha as f,ra as u,tb as y,vb as x}from"./chunk-H2VV5PGB.js";function T(e,t){if(e&1&&(n(0,"div",15)(1,"div",16)(2,"div",12)(3,"p",17),a(4),r(),n(5,"p",17),a(6),r(),n(7,"p",17),a(8),r(),n(9,"p",17),a(10),r(),n(11,"p",17),a(12),r(),n(13,"p",17),a(14),r(),n(15,"p",17),a(16),r()()()()),e&2){let m=t.$implicit;d(4),c("companyName: ",m.companyName,""),d(2),c("adress: ",m.address,""),d(2),c("Pay Day: ",m.payDay,""),d(2),c("delay before payement: ",m.delayBeforePayment,""),d(2),c("cnss affiliation: ",m.cnssAffiliation,""),d(2),c("cnss rate: ",m.cnssrate,""),d(2),c("css rate: ",m.cssrate,"")}}var j=(()=>{let t=class t{constructor(o,i,p,O){this.route=o,this.router=i,this.formB=p,this.configService=O,this.data=[]}ngOnInit(){this.configService.getConfig().subscribe(o=>{console.log(o),this.data=o}),this.configService.getConfig().subscribe(o=>{this.totalAnnouncements=o.length})}deleteAnnCarpooling(o){this.configService.deleteConfig(o).subscribe(i=>{alert(" Announcement deleted Successfully!"),this.ngOnInit()})}};t.\u0275fac=function(i){return new(i||t)(l(I),l(E),l(w),l(v))},t.\u0275cmp=s({type:t,selectors:[["app-list-config"]],decls:17,vars:2,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"card"],[1,"card-header"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalupdate","data-toggle","tooltip","data-placement","top","title","Edit",1,"btn","btn-success","btn-sm","float-right","mr-2"],[1,"fa","fa-edit"],[1,"card-body"],[1,"row"],["class","col-md-12 mb-4",4,"ngFor","ngForOf"],[1,"col-md-12","mb-4"],[1,"card","custom-card"],[1,"card-text"]],template:function(i,p){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"h5"),a(11),r(),n(12,"button",10),C(13,"i",11),r()(),n(14,"div",12)(15,"div",13),y(16,T,17,7,"div",14),r()()()()()()()()()()()),i&2&&(d(11),c(" ",p.data[0].companyName,""),d(5),x("ngForOf",p.data))},dependencies:[b],styles:[".custom-card[_ngcontent-%COMP%]{width:100%;padding:20px;border-radius:15px}"]});let e=t;return e})();var D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["app-add-config"]],decls:2,vars:0,template:function(i,p){i&1&&(n(0,"p"),a(1,"add-config works!"),r())}});let e=t;return e})();var N=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["app-update-config"]],decls:2,vars:0,template:function(i,p){i&1&&(n(0,"p"),a(1,"update-config works!"),r())}});let e=t;return e})();var B=[{path:"",component:j},{path:"addConfig",component:D},{path:"updateConfig",component:N}],A=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({imports:[h.forChild(B),h]});let e=t;return e})();var ot=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({providers:[v],imports:[S,A,F,M]});let e=t;return e})();export{ot as a};