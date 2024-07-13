import{a as Z,b as ee}from"./chunk-6GBTJKMQ.js";import{Ba as K,Ca as Q,Da as W,Ea as X,Ga as Y,Ha as te,Ia as ie,ca as k,ga as G,ja as L,la as U,na as B,oa as H,pa as O,ra as C,sa as V,ua as z,va as R,xa as $,ya as J}from"./chunk-S4MYAB2F.js";import{$b as x,Bb as p,Cb as T,Db as E,Eb as D,Fb as a,Gb as r,Hb as d,O as y,Ob as w,Qb as u,Qc as q,Za as I,Zb as m,_b as N,ab as s,ac as P,bb as f,cc as _,da as F,gc as A,hc as j,ia as S,na as h,ob as g,t as M,ub as l,wb as b}from"./chunk-4N56W5ZJ.js";var v=class t{constructor(e){Object.assign(this,e)}static createFromApiModel(e){return new t({id:e.id,amount:e.amount,createdAt:new Date(e.created_at),fromMember:e.from_member,toMember:e.to_member,transactionType:e.type})}};var re=(()=>{let e=class e{constructor(i){this._requestHelper=i}query(i){return this._requestHelper.get("/transactions",{params:i})}trade(i,n){return this._requestHelper.post("/transactions",{to_member:i,amount:n})}};e.\u0275fac=function(n){return new(n||e)(S(Y))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function me(t,e){if(t&1&&(a(0,"li"),m(1),A(2,"date"),r()),t&2){let o=e.$implicit;s(),P("On ",j(2,4,o.createdAt),", amount of ",o.amount," has been transferred from ",o.fromMember.name," to ",o.toMember.name,". ")}}function se(t,e){if(t&1&&(a(0,"ul"),E(1,me,3,6,"li",null,T),r()),t&2){let o=u(2);s(),D(o.transactions)}}function ce(t,e){t&1&&(a(0,"div",0),m(1,"No transactions found."),r())}function le(t,e){if(t&1&&l(0,se,3,0,"ul")(1,ce,2,0,"div",0),t&2){let o=u();p((o.transactions==null?null:o.transactions.length)>0?0:1)}}var oe=(()=>{let e=class e{constructor(i){this._transactionService=i,this.isLoading=g(!0)}ngOnInit(){this._getTransactions()}_getTransactions(){let i=this.specificMemberId?{to_member:this.specificMemberId,from_member:this.specificMemberId}:{};this.isLoading.set(!0),this._transactionService.query(i).pipe(y(()=>this.isLoading.set(!1)),M(n=>n.map(c=>v.createFromApiModel(c)))).subscribe(n=>this.transactions=n)}};e.\u0275fac=function(n){return new(n||e)(f(re))},e.\u0275cmp=h({type:e,selectors:[["app-transactions"]],inputs:{specificMemberId:"specificMemberId"},standalone:!0,features:[_],decls:1,vars:1,consts:[[1,"text-center","mt-4"]],template:function(n,c){n&1&&l(0,le,2,1),n&2&&p(c.isLoading()?-1:0)},dependencies:[q]});let t=e;return t})();function pe(t,e){if(t&1&&(a(0,"p"),m(1),r(),a(2,"p"),m(3),r(),d(4,"img",8),a(5,"p"),m(6),r()),t&2){let o=u();s(),N(o.member.name),s(2),x("",o.member.email," "),s(),b("src",o.member.picture,I),s(2),x("Balance: ",o.member.balance,"")}}function de(t,e){if(t&1&&d(0,"app-transactions",7),t&2){let o=u();b("specificMemberId",o.member.id)}}var ke=(()=>{let e=class e{constructor(i,n){this._appDataService=i,this._securityService=n,this.mainForm=this._constructForm()}ngOnInit(){this._appDataService.currentUser$.subscribe(i=>{this.member=i,this.mainForm.patchValue({name:this.member?.name,picture:this.member?.picture})})}_constructForm(){return new O({name:new C(null,[U.required]),picture:new C(null)})}update(){let i=this._preparePayload();this._securityService.updateCurrentUser(i).subscribe(()=>{this._appDataService.initializeUser(),this.mainForm.markAsPristine()})}_preparePayload(){let i={};return this.mainForm.controls.name.dirty&&(i.name=this.mainForm.controls.name.value),this.mainForm.controls.picture.dirty&&(i.picture=this.mainForm.controls.picture.value),i}};e.\u0275fac=function(n){return new(n||e)(f(ie),f(te))},e.\u0275cmp=h({type:e,selectors:[["app-member-profile"]],standalone:!0,features:[_],decls:25,vars:4,consts:[[1,"text-align-center"],[1,"p-4","w-50"],[3,"formGroup"],[1,"w-100","mt-2"],["matInput","","placeholder","Name","formControlName","name"],["matInput","","placeholder","Enter image url","formControlName","picture"],["mat-flat-button","","color","primary","aria-label","Add row",1,"mt-2",3,"click","disabled"],[3,"specificMemberId"],["alt","Profile image","width","100","height","100",3,"src"]],template:function(n,c){n&1&&(a(0,"section",0)(1,"h1"),m(2,"Profile"),r(),l(3,pe,7,4),r(),d(4,"mat-divider"),a(5,"section",1)(6,"h3"),m(7,"Update profile"),r(),a(8,"form",2)(9,"mat-form-field",3)(10,"mat-label"),m(11,"Name"),r(),d(12,"input",4),r(),a(13,"mat-form-field",3)(14,"mat-label"),m(15,"Profile image url"),r(),d(16,"input",5),r(),a(17,"button",6),w("click",function(){return c.update()}),a(18,"mat-icon"),m(19,"save"),r(),m(20," Save "),r()()(),a(21,"section",1)(22,"h3"),m(23,"Transaction history"),r(),l(24,de,1,1,"app-transactions",7),r()),n&2&&(s(3),p(c.member?3:-1),s(5),b("formGroup",c.mainForm),s(9),b("disabled",!c.mainForm.dirty||!c.mainForm.valid),s(7),p(c.member?24:-1))},dependencies:[ee,Z,$,V,L,B,H,z,R,Q,K,J,X,W,k,G,oe]});let t=e;return t})();export{ke as MemberProfileComponent};
