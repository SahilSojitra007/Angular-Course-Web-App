import{a as d,e as u}from"./chunk-AVF7RUFX.js";import"./chunk-7XHYQ6YF.js";import"./chunk-D5ALV4W7.js";import{b as f}from"./chunk-UUUA3KMO.js";import{Pa as t,Qa as e,Ra as s,V as a,Wa as n,X as p,bb as l,c as m,q as c}from"./chunk-QG57SYCU.js";var S=(()=>{class i{http=a(d);constructor(){}ngOnInit(){console.log("home ngoninit"),this.fetchHttpData()}fetchHttpData(){return m(this,null,function*(){try{let o=yield c(this.http.get("https://jsonplaceholder.typicode.com/posts"));console.log("posts: ",o)}catch(o){console.log(o)}})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["app-home"]],standalone:!0,features:[l],decls:15,vars:0,consts:[["src","imgs/banner.png"],[1,"main-content"],[1,"mt-2"],["routerLink","/courses",1,"btn","btn-lg","btn-secondary","mt-2"],["routerLink","/courses",1,"btn","btn-lg","btn-primary","mt-2"],[1,"courses"],[1,"container-fluid"],[1,"text-center"]],template:function(r,g){r&1&&(t(0,"section"),s(1,"img",0),t(2,"div",1)(3,"h1",2),n(4,"Explore amazing content"),e(),t(5,"a",3),n(6,"Courses"),e(),n(7," \xA0 "),t(8,"a",4),n(9,"Templates"),e()()(),t(10,"section",5)(11,"div",6)(12,"h1",7),n(13,"All Courses"),e(),s(14,"app-courses"),e()())},dependencies:[u,f],styles:["img[_ngcontent-%COMP%]{width:100%;object-fit:cover;object-position:center;height:80vh}.main-content[_ngcontent-%COMP%]{position:absolute;top:40%;left:20%;transform:translate(-50%,-50%)}.main-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem}section.courses[_ngcontent-%COMP%]{padding:6vh}"]})}return i})();export{S as HomeComponent};
