import{a as s}from"./chunk-45VFKY7Y.js";import{m as c}from"./chunk-NCDLYK7T.js";import{Aa as o,qa as n}from"./chunk-H2VV5PGB.js";var l=(()=>{let t=class t{constructor(r,e){this.encryptionService=r,this.router=e}canActivate(r,e){let a=localStorage.getItem("authorities");return this.encryptionService.decrypt(a,"2f7").includes("READ::ATTENDANCE")?!0:(this.router.navigate(["/notfound"]),!1)}};t.\u0275fac=function(e){return new(e||t)(o(s),o(c))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{l as a};
