import{m as c}from"./chunk-NCDLYK7T.js";import{Aa as i,qa as a}from"./chunk-H2VV5PGB.js";var l=(()=>{let t=class t{constructor(r){this.router=r}canActivate(r,o){return localStorage.getItem("token")&&localStorage.getItem("authorities")?!0:(localStorage.clear(),this.router.navigate(["/login"]),!1)}};t.\u0275fac=function(o){return new(o||t)(i(c))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{l as a};