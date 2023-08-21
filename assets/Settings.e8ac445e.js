import{_ as $,i as z,s as j,a as G,L as v,o as H,r as M,R as P,b as U,c as x,e as s,g as d,k as J,w as l,v as p,bx as h,z as K,A as O,q as Q}from"./index.d5019723.js";import{u as W,m as X,s as Y,t as Z,v as ss}from"./userStore.d171f388.js";import{i as c,a as I,b as k,c as V}from"./validate.ec48e346.js";const i=u=>(K("data-v-2859d18d"),u=u(),O(),u),as={class:"headshot-wrap","data-aos":"fade-up","data-aos-delay":"300"},es={class:"headshot"},os=["src"],ts=i(()=>s("i",{class:"icon-plus"},null,-1)),ds={class:"content","data-aos":"clip-down","data-aos-duration":"800"},rs={class:"inner"},ns=i(()=>s("h2",null,"\u7DE8\u8F2F\u500B\u4EBA\u8CC7\u6599",-1)),is=["data-warning"],ls=i(()=>s("span",null,"\u4F7F\u7528\u8005\u540D\u7A31",-1)),cs={class:"form-row form-radio"},us=i(()=>s("p",null,"\u4F7F\u7528\u8005\u6027\u5225",-1)),ps={for:"male"},ms=i(()=>s("div",{class:"fake-radio"},null,-1)),ws=i(()=>s("span",null,"\u7537\u6027",-1)),fs={for:"female"},_s=i(()=>s("div",{class:"fake-radio"},null,-1)),gs=i(()=>s("span",null,"\u5973\u6027",-1)),vs={for:"unknown"},Ps=i(()=>s("div",{class:"fake-radio"},null,-1)),hs=i(()=>s("span",null,"\u672A\u77E5\u5B87\u5B99\u751F\u7269",-1)),ks=i(()=>s("h2",null,"\u91CD\u65B0\u8A2D\u5B9A\u5BC6\u78BC",-1)),ys=["data-warning"],Ns=i(()=>s("span",null,"\u539F\u5BC6\u78BC",-1)),bs=["data-warning"],Ss=i(()=>s("span",null,"\u4F7F\u7528\u8005\u5BC6\u78BC",-1)),Ms=["data-warning"],Us=i(()=>s("span",null,"\u78BA\u8A8D\u4F7F\u7528\u8005\u5BC6\u78BC",-1)),xs={setup(u){const q=z(),m=W(),{patchUser:F}=m;let{name:y,gender:N,image:R,_id:C}=j(m);const L=G(),{openModalLoader:w,closeModalLoader:f,openModalAlert:b}=L,e=v({nickName:"",gender:0,image:"",oldPassword:"",password:"",confirmPassword:""}),t=v({image:R.value,nickName:y.value,gender:N?N.value:2}),A=async()=>{const{data:a}=await X();a.status==="success"&&(t.nickName=a.data.nickName,t.gender=a.data.gender,t.image=a.data.avatar)};H(()=>{y.value||A()});const S=M(),B=async()=>{w("\u4E0A\u50B3\u4E2D");const a=S.value.files[0];console.dir(a);const o=new FormData;o.append("file-to-upload",a);const{data:n}=await Y(o);n.status==="success"&&(t.image=n.data.upload),f()};P(t,(a,o)=>{e.nickName=c(a.nickName),e.gender=c(a.gender)},{deep:!0});const D=async()=>{if(e.nickName=c(t.nickName),e.nickName)return;const a={id:C.value,data:{nickName:t.nickName.trim(),gender:t.gender}};t.image&&(a.data.avatar=t.image),w();const{data:o}=await Z(a);o.status==="success"&&(b("\u4FEE\u6539\u500B\u4EBA\u8CC7\u6599\u6210\u529F"),F({name:o.data.nickName,gender:o.data.gender,image:o.data.avatar})),f()},r=v({oldPassword:"",password:"",confirmPassword:""});P(r,a=>{e.oldPassword=c(a.oldPassword),e.confirmPassword=I(a.password,a.confirmPassword)},{deep:!0}),P(()=>r.password,a=>k(a)?e.password=k(a):e.password=V(a,r.oldPassword));const T=async()=>{if(e.oldPassword=c(r.oldPassword),e.password=c(r.password),e.confirmPassword=c(r.confirmPassword),e.oldPassword||e.password||e.confirmPassword||(e.confirmPassword=I(r.password,r.confirmPassword),e.confirmPassword)||(e.confirmPassword=k(r.password),e.confirmPassword)||(e.password=V(r.password,r.oldPassword),e.password))return;w();const{data:a,error:o}=await ss(r);a.status==="success"?(b(`${a.message}\uFF0C\u5C07\u8FD4\u56DE\u767B\u5165\u9801\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165`),E()):a.message.includes("\u60A8\u7684\u820A\u5BC6\u78BC\u4E0D\u6B63\u78BA")&&(e.oldPassword="\u5BC6\u78BC\u4E0D\u6B63\u78BA"),f()};let _=null,g=M(3);function E(){_=setInterval(()=>{g.value=g.value-1,g.value<=0&&(clearInterval(_),_=null,Q(),m.$reset(),q.push({path:"/login"}))},1e3)}return(a,o)=>(U(),x("section",null,[s("div",as,[s("label",es,[s("input",{type:"file",accept:"image/*",onChange:B,ref_key:"fileInput",ref:S},null,544),d(t).image?(U(),x("img",{key:0,src:d(t).image,alt:""},null,8,os)):J("",!0)]),ts]),s("div",ds,[s("div",rs,[ns,s("form",null,[s("label",{class:"form-row","data-warning":d(e).nickName},[l(s("input",{id:"name",type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=n=>d(t).nickName=n)},null,512),[[p,d(t).nickName]]),ls],8,is),s("div",cs,[us,s("label",ps,[l(s("input",{name:"gender",id:"male",value:"0",type:"radio","onUpdate:modelValue":o[1]||(o[1]=n=>d(t).gender=n)},null,512),[[h,d(t).gender]]),ms,ws]),s("label",fs,[l(s("input",{name:"gender",id:"female",value:"1",type:"radio","onUpdate:modelValue":o[2]||(o[2]=n=>d(t).gender=n)},null,512),[[h,d(t).gender]]),_s,gs]),s("label",vs,[l(s("input",{name:"gender",id:"unknown",value:"2",type:"radio","onUpdate:modelValue":o[3]||(o[3]=n=>d(t).gender=n)},null,512),[[h,d(t).gender]]),Ps,hs])]),s("div",{class:"rect-btn fill submit-btn",onClick:D}," \u4FEE\u6539\u500B\u4EBA\u8CC7\u6599 ")]),ks,s("form",null,[s("label",{class:"form-row","data-warning":d(e).oldPassword},[l(s("input",{id:"old-password",type:"password",required:"","onUpdate:modelValue":o[4]||(o[4]=n=>d(r).oldPassword=n)},null,512),[[p,d(r).oldPassword,void 0,{trim:!0}]]),Ns],8,ys),s("label",{class:"form-row","data-warning":d(e).password},[l(s("input",{id:"password",type:"password",required:"","onUpdate:modelValue":o[5]||(o[5]=n=>d(r).password=n)},null,512),[[p,d(r).password,void 0,{trim:!0}]]),Ss],8,bs),s("label",{class:"form-row","data-warning":d(e).confirmPassword},[l(s("input",{id:"confirm-password",type:"password",required:"","onUpdate:modelValue":o[6]||(o[6]=n=>d(r).confirmPassword=n)},null,512),[[p,d(r).confirmPassword,void 0,{trim:!0}]]),Us],8,Ms)]),s("div",{class:"rect-btn fill submit-btn",onClick:T}," \u4FEE\u6539\u5BC6\u78BC ")])])]))}};var Fs=$(xs,[["__scopeId","data-v-2859d18d"]]);export{Fs as default};
