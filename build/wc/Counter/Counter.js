import{S as f,i as m,a as b,b as c,s as h,e as p,t as l,n as i,c as d,l as g,f as _,d as k}from"../assets/vendor.e1a4e816.js";function v(s){let t,r,e,o,u;return{c(){t=p("button"),r=l("Clicks: "),e=l(s[0]),this.c=i},m(n,a){c(n,t,a),d(t,r),d(t,e),o||(u=g(t,"click",s[1]),o=!0)},p(n,[a]){a&1&&_(e,n[0])},i,o:i,d(n){n&&k(t),o=!1,u()}}}function x(s,t,r){let e=0;return[e,()=>{r(0,e+=1)}]}class y extends f{constructor(t){super();this.shadowRoot.innerHTML="<style>button{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}button:focus{border:2px solid #ff3e00}button:active{background-color:rgba(255, 62, 0, 0.2)}</style>",m(this,{target:this.shadowRoot,props:b(this.attributes),customElement:!0},x,v,h,{},null),t&&t.target&&c(t.target,this,t.anchor)}}customElements.define("my-counter",y);
