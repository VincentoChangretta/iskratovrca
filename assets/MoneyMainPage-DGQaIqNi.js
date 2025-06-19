import{j as s,u as Dt,r as N,a as zt,f as it,b as K,I as Yt,c as Mn,d as Z,B as fe,e as me,g as ue,P as Bt,h as Gt,O as Wt,A as Ut,R as $t}from"./index-CXj40nJW.js";import{I as _,S as Ht,p as Fn,P as Ln,E as Rn,T as Dn,C as je,a as g,O as zn,b as Yn,V as Bn}from"./img-BYiKy2Hm.js";const Vt=e=>e.activeProduct.activeProduct,B=e=>{const{children:t,className:n,baseStyles:a="text-mainYellow mb-5"}=e;return s.jsx("p",{className:`text-6xl text-pretty font-Bebas ${a} ${n} max-1000:text-[40px]`,children:t})},Gn=e=>{const{className:t}=e,n=Dt(Vt),a=n==null?void 0:n.title,r=n==null?void 0:n.points,i=n==null?void 0:n.prices,o=i==null?void 0:i[1],[l,m]=N.useState(null),[f,u]=N.useState(null),[p,h]=N.useState(!1),b=zt(),j=["искра","Arman","Artak"],A=()=>{j.find(v=>v.toLowerCase()===(l==null?void 0:l.toLowerCase()))&&(u(i==null?void 0:i[2]),h(!0),it())};return N.useEffect(()=>{m(null),u(null),h(!1)},[n]),N.useEffect(()=>{const x=new Date().toLocaleDateString("ru-RU");it(),b(K.changeDateNow(x))},[b]),N.useEffect(()=>{o!==void 0&&b(K.changePrevPrice(o))},[o,b]),N.useEffect(()=>{l!==null&&b(K.changeActivePromocode(l))},[l,b]),N.useEffect(()=>{f&&b(K.changeActivePrice(f))},[f,b]),s.jsx("article",{className:t,children:s.jsxs("div",{className:"flex justify-between max-1120:flex-col max-1120:max-w-[600px] max-1120:mx-auto max-1120:gap-5",children:[s.jsxs("div",{children:[s.jsx(B,{className:"max-1120:text-center",children:a}),s.jsx("ul",{className:"flex flex-col gap-3 list-type-star",children:r==null?void 0:r.map((x,v)=>s.jsx("li",{children:x},v))})]}),s.jsxs("div",{className:"max-w-[400px] w-full max-1120:mx-auto",children:[f?s.jsxs("div",{className:"flex gap-5 items-center max-1120:text-center max-1120:justify-center",children:[s.jsx(B,{className:"line-through opacity-25 text-white",children:o}),s.jsx(B,{children:f})]}):s.jsx(B,{className:"max-1120:text-center",children:o}),n&&s.jsx(Yt,{value:l||"",onChange:m,buttonOnClick:A,theme:Z.WITH_GLASS,variant:Mn.WITH_BUTTON,activated:p,truePlaceholder:"Промокод",className:"w-full text-2xl ",inputStyles:"max-w-[250px] text-xl !pr-2 max-1000:text-lg max-395:max-w-[130px]"})]})]})})},Wn=[{title:"ДЕНЕЖНЫЙ КОД",subtitle:"Стандартная группа.",time:"1 день, онлайн, 8 часов",points:["Участие в практиках и групповых разборах денежных блоков","Работа с МАК-картами и коучинговыми техниками","Запись семинара в телеграмм боте - 1 месяц"],gifts:["Гайд «101 денежное ограничение» после участия"],prices:["30 000 ₽","14 800 ₽","9 800 ₽"]},{title:"КЛЮЧ ИЗОБИЛИЯ",subtitle:"VIP-наставничество. ",time:"1 день, онлайн, 8 часов.",points:["Личный разбор денежных блоков и ограничений","Глубокая проработка с МАК-картами и коучинговыми техниками","Запись 1-го дня в ТелеГрамм чате - 3 месяца","Вопросы/ответы в ТГ чате 1 день"],gifts:["Гайд «101 денежное ограничение» после участия","Доп. материал в закрытом ТГ чате"],prices:["80 000 ₽","38 800 ₽","28 800 ₽"]},{title:"VIP ИСКРА ТВОРЦА",time:"онлайн, 3 встречи",subtitle:"VIP-наставничество",points:["1 день, онлайн, 8 часов - все что входит в пакет КЛЮЧ ИЗОБИЛИЯ",'2 день, онлайн, до 8 часов - глубокий разбор каждого участника в группе по Методу Вселенской Терапии на тему "Деньги" с приглашенным экспертом на следующий день',"2 часа, персональная коуч-практика в VIP группе с МАК-картами на тему «Энергия. Деньги. Ресурсы» с Евгением Савченко, онлайн, вопросы-ответы, запись встречи в закрытом ТГ чате 3 месяца, открытая дата"],gifts:["Гайд «Энергия на миллион»"],prices:["120 000 ₽","58 800 ₽","48 800 ₽"]}],ot="money/img/Expert.webp",Un="money/img/mainBackground.webp",Xt="money/img/blik.webp",$n="money/img/Expert2.webp",Hn="money/img/gift.webp",Vn="money/img/planet.webp",Xn="money/img/registrationBg.webp",qn=()=>s.jsx("div",{className:"absolute top-[-250px] left-[700px] animate-fallingStar z-10",children:s.jsx("div",{className:"absolute -top-[1px] -left-[200px] w-[200px] h-[3px] bg-gradient-to-r from-white to-transparent opacity-80",children:s.jsx("div",{className:"w-3 h-3 top-[-3px] left-[-3px] blur-[2px]  rounded-full absolute bg-white",children:s.jsx(_,{imgBoxClassName:"animate-spin absolute top-2/4 left-2/4 -translate-2/4 w-[70px] h-[70px]",src:Xt,alt:"Блик"})})})}),Kn=()=>{const e="text-[180px] text-center leading-[150px] font-Bebas !mb-3 max-1380:text-[150px] max-1380:leading-[130px] max-1120:text-[110px] max-1120:leading-[95px] max-1000:text-[70px] max-1000:leading-[60px] max-520:!mb-0",t="absolute max-w-[200px] top-[-90px] left-[180px] animate-upScale max-1380:left-[135px] max-1380:top-[-90px] max-1120:left-[70px] max-1120:top-[-92px] max-1000:max-w-[100px] max-1000:top-[-52px] max-1000:left-[125px] max-520:left-[72px]",n="relative font-Bebas mb-3 text-[85px] leading-[70px] max-1380:mb-0 max-1380:text-[70px] max-1380:leading-[65px] max-1120:text-[55px] max-1120:leading-[50px] max-1000:text-4xl max-1000:leading-[15px]",a="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-[#050b14] to-transparent w-full",r="w-fit text-2xl text-balance font-bold mx-auto px-10 py-1.5 mb-7 bg-mainPurple rounded-stdRadius max-1380:text-xl max-1380:leading-[25px] max-1380:px-6 max-1120:text-base max-1000:relative max-1000:z-10 max-1000:bg-transparent max-1000:font-normal max-520:text-xs max-520:leading-[18px] max-395:max-w-[320px]",i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return s.jsx(s.Fragment,{children:s.jsxs("header",{className:"relative overflow-hidden mb-[100px] max-1000:mb-[30px]",children:[s.jsx(_,{src:Un,alt:"фон",imgBoxClassName:"absolute inset-[-100px] animate-universe"}),s.jsx(Ht,{quantity:50}),s.jsx("div",{className:"relative std-container",children:s.jsxs("div",{className:"relative min-h-svh flex items-center justify-end max-1000:justify-center max-1000:min-h-auto max-1000:pt-[30px]",children:[s.jsxs("div",{className:"relative z-10 max-w-[750px] text-center",children:[s.jsxs("div",{className:"text-2xl font-bold mb-6 max-1000:text-[15px] max-1000:mb-5",children:[s.jsx("p",{children:"22 июня 11.00-20.00 МСК"}),s.jsx("p",{className:"w-fit mx-auto px-5 py-1 bg-mainPurple rounded-stdRadius",children:"онлайн встреча"})]}),s.jsxs("div",{className:"max-1000:mb-1 max-520:max-w-[300px]",children:[s.jsxs("div",{className:n,children:["«ИСКРА ТВОРЦА»",s.jsx(_,{src:Xt,alt:"искра",imgBoxClassName:t})]}),s.jsx("p",{className:` ${i&&"mt-[-20px] mb-[20px] max-1000:mt-[5px]"} text-[40px] leading-[40px] font-bold max-1380:text-3xl max-1380:leading-3xl max-1380:leading-[30px] max-1380:mb-1 max-1120:text-[25px] max-1120:mb-0 max-1000:text-xl`,children:"тот самый"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("h1",{className:e,children:["ДЕНЕЖНЫЙ ",s.jsx("br",{})," РЕТРИТ"]}),s.jsx(qn,{})]}),s.jsxs("div",{className:r,children:[s.jsx("span",{children:"Как перейти на новый уровень дохода"})," ",s.jsx("br",{})," И начать зарабатывать"," ",s.jsx("span",{className:"max-520:block max-1000:font-bold",children:"бО́льшИ́е деньги?"})]}),s.jsxs("div",{className:"max-1000:relative max-1000:pt-[220px]",children:[s.jsx(_,{imgBoxClassName:"hidden max-1000:block w-[260px] absolute left-2/4 bottom-[30px] -translate-x-2/4",imgClassName:"!object-contain",src:ot,alt:"Егвений Савченко"}),s.jsx(fe,{primary:!0,theme:me.MONEY_STANDART_BIG_PRIMARY,primaryClassName:"max-w-[400px] mx-auto mb-5 max-1380:max-w-[350px]",a:!0,to:"#products",children:"Записаться"})]}),s.jsxs("div",{className:"flex justify-center items-center gap-2.5 max-w-[400px] mx-auto w-full max-1000:max-w-[280px]",children:[s.jsx("div",{children:s.jsx("img",{className:"w-[45px] aspect-square animate-pulse max-1000:w-[40px]",src:Hn,alt:"подарок"})}),s.jsxs("div",{className:"text-pretty text-left text-xs max-1000:text-[10px]",children:[s.jsx("p",{className:"mb-1",children:"В подарок за регистрацию вы получите"}),s.jsx("p",{children:"1. аудио аффирмацию “ДЕНЬГИ”"}),s.jsx("p",{children:"2. гайд ТОП 11 денежных ограничений"})]})]})]}),s.jsx(_,{imgBoxClassName:"max-w-[870px] absolute left-0 top-0 bottom-[-30px] max-1540:left-[-50px] max-1480:left-[-150px] max-1260:left-[-200px] max-1200:left-[-280px] max-1000:hidden",imgClassName:"!object-contain",src:ot,alt:"Егвений Савченко"})]})}),s.jsx("div",{className:`h-[300px] ${a}`}),s.jsx("div",{className:`h-[150px] ${a}`})]})})},de=e=>{const{children:t,className:n,small:a}=e;return a?s.jsx("h3",{className:`text-4xl text-center font-Bebas ${n}`,children:t}):s.jsx("h2",{className:`text-[100px] leading-[100px] mb-10 font-Bebas ${n} max-1000:mb-5 max-1000:text-5xl max-1000:leading-none`,children:t})},Zn=()=>s.jsx("section",{className:"relative z-0 bg-no-repeat bg-cover bg-center bg-mainDarkBlue overflow-hidden",children:s.jsx("div",{className:"std-container",children:s.jsxs("div",{className:"flex items-center justify-between w-full gap-[50px] max-1400:flex-col-reverse max-1000:gap-5",children:[s.jsxs("div",{className:"flex flex-col gap-5 max-w-2/4 w-full max-1400:max-w-[800px] max-1000:gap-0",children:[s.jsxs(de,{className:"relative z-10 text-left text-balance max-1400:text-center max-1000:max-w-[500px] max-1000:mx-auto",children:["Что будет на ",s.jsx("span",{className:"text-mainYellow",children:"«ДЕНЕЖНОМ РЕТРИТЕ»"}),"?"]}),s.jsx("span",{className:"hidden opacity-0",children:"39148"}),s.jsxs("div",{className:"flex flex-col gap-6 text-xl max-1000:text-sm max-1000:max-w-[400px] max-1000:mx-auto max-1000:gap-3",children:[s.jsxs("ul",{className:"flex flex-col gap-3 list-type-star mb-3",children:[s.jsx("li",{children:"Семинар «БОГатое мышление»."}),s.jsx("li",{children:"Что такое деньги и как они работают?"}),s.jsx("li",{children:"Узнаете формулы к финансовому и ментальному благополучию."}),s.jsx("li",{children:"Пройдете коуч-практики с МАК-картами и рассмотрим 113 денежных ограничений."}),s.jsx("li",{children:"Осознаете пути решения ключевых денежных блоков и ограничений."}),s.jsx("li",{children:"Раскроете необходимые жизненные и внутренние ресурсы."}),s.jsxs("li",{children:["Погрузитесь в авторскую медитацию «Я из Будущего».",s.jsx("div",{className:"font-bold",children:"+ БОНУС распакуем лично Вашу ДНК аффирмацию про деньги."})]})]}),s.jsx(de,{small:!0,className:"text-left max-1000:text-center max-1000:text-3xl",children:"Это для тех, кто реально хочет и готов:"}),s.jsxs("ul",{className:"flex flex-col gap-3 list-type-star ",children:[s.jsx("li",{children:"Понять, как пробить свой финансовый потолок."}),s.jsx("li",{children:"Начать зарабатывать бО́льшИ́е деньги через легкость."})]})]})]}),s.jsx(_,{src:Vn,imgBoxClassName:"max-w-[900px] relative z-0 animate-spin360 aspect-square max-1000:max-w-[300px]",alt:"Галактика"})]})})}),Qn=()=>s.jsx("section",{className:"relative bg-mainDarkBlue",children:s.jsx("div",{className:"std-container",children:s.jsxs("div",{className:"flex items-center justify-between gap-[100px] max-1400:flex-col max-1400:gap-[50px] max-1000:max-w-[400px] max-1000:mx-auto max-1000:gap-5",children:[s.jsx(_,{src:$n,imgBoxClassName:"relative z-50 max-w-[600px] max-1000:max-w-[400px]",imgClassName:"rounded-bigRadius",alt:"Евгений Савченко"}),s.jsxs("div",{className:"max-w-[60%] max-1000:max-w-full",children:[s.jsx(de,{className:"max-1400:text-center",children:"ЕВГЕНИЙ САВЧЕНКО"}),s.jsx("span",{className:"hidden opacity-0",children:"39148"}),s.jsxs("div",{className:"flex flex-col gap-7 text-2xl max-1000:text-sm max-1000:gap-4",children:[s.jsxs("p",{className:"font-bold text-lg text-pretty opacity-40 max-1000:text-sm",children:["ПроЯвленный ЭнергоКоуч, проводник, мастер гвоздестояния и саундхиллинга, ",s.jsx("br",{})," основатель production Twins Studio, эксперт по МАК картам, ",s.jsx("br",{className:"max-1000:hidden"})," автор трансформационных методик: “Искра Творца”, “Феникс”, “Я - Творец”."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Деньги"})," - это мощный ресурс, благодаря которому исполняются Ваши мечты. Вы можете много работать, но мало зарабатывать, потому что внутри “живут” страхи и ограничения, например:"]}),s.jsxs("ul",{className:"list-type-star",children:[s.jsx("li",{children:"«я не достоин(а) больших денег»"}),s.jsx("li",{children:"«иметь много денег - опасно, могут отобрать»"}),s.jsx("li",{children:"«честным трудом много не заработать»"}),s.jsx("li",{children:"«деньги портят человека»"}),s.jsx("li",{children:"«деньги – это зло» и др."})]}),s.jsx("p",{children:"Пока вы не осознайте, что у Вас скрыто за деньгами и что их “блокирует” - вы не сможете зарабатывать большие деньги."}),s.jsxs("p",{className:"font-bold text-pretty",children:[s.jsx("span",{className:"animate-scale inline-block",children:"⚠️"})," Осторожно: после этого денежного ретрита жизнь может кратно улучшится. Жить счастливую и богатую жизнь - это выбор, а что выберешь ты?!"]})]})]})]})})});async function Jn(e){var n,a,r;const t="/api/form";try{return(await ue.post(t,e)).data}catch(i){if(ue.isAxiosError(i)){const o=(n=i.response)==null?void 0:n.status,l=(r=(a=i.response)==null?void 0:a.data)==null?void 0:r.comment;if(o)switch(o){case 400:throw new Error(l||"Некорректные данные формы (400)");case 401:throw new Error("Не авторизован (401)");case 403:throw new Error("Нет доступа (403)");case 404:throw new Error("Ресурс не найден (404)");case 422:throw new Error(l||"Ошибка валидации (422)");case 500:throw new Error("Ошибка сервера (500)");default:throw new Error(l||`Ошибка: ${o}`)}else throw new Error(i.message||"Сетевая ошибка без ответа от сервера")}throw new Error("Неизвестная ошибка при отправке формы")}}const ea=async(e,t,n,a)=>{if(e.preventDefault(),!t.current||!a)return;const r=new window.FormData(t.current),i=r.get("number"),o=r.get("email"),l=r.get("name"),m=r.get("username"),f=r.get("privacyCheckbox"),u=r.get("ofertaCheckbox"),p={number:i.length!==Fn,email:!o,name:!l,username:!m,privacyCheckbox:!f,ofertaCheckbox:!u};if(Object.values(p).some(Boolean)){n(p),console.error("Ошибки валидации:",p);return}const h={number:i,email:o,name:l,username:m};try{const b=await Jn(h);console.log("Success bro:",b),n({...p,sended:!0}),window.open("https://t.me/vincentochangretta","_blank")}catch(b){n({...p,sendError:!0}),console.error("Ошибка при отправке:",b)}},ta=e=>{const{className:t}=e,n=Dt(Vt),[a,r]=N.useState(""),[i,o]=N.useState(""),[l,m]=N.useState(""),[f,u]=N.useState(!1),[p,h]=N.useState(!1),[b,j]=N.useState(!1),A=N.useRef(null),[x,v]=N.useState(null);return N.useEffect(()=>{let w;return x&&Object.values(x).some(Boolean)&&!x.sended&&(w=setTimeout(()=>{v(null)},2500)),()=>clearTimeout(w)},[x]),s.jsxs("div",{className:`relative z-100 w-full mx-auto p-10 rounded-stdRadius border-2 border-smAlphaMainBg-inv backdrop-blur-2xl mb-5 ${t} max-1000:p-5 max-1000:py-5`,children:[!n&&s.jsx("a",{href:"#products",children:s.jsx(fe,{primary:!0,theme:me.MONEY_STANDART_BIG_PRIMARY,primaryClassName:"max-w-[350px] mx-auto",children:"Выберите услугу"})}),s.jsx("form",{ref:A,onSubmit:w=>ea(w,A,v,n),children:s.jsxs("div",{className:`${!n&&"opacity-30 pointer-events-none select-none"}`,children:[s.jsxs("div",{className:"max-w-[1200px] mx-auto flex flex-col items-center gap-5 mb-10 max-1000:gap-2",children:[s.jsx(Gn,{className:"w-full"}),s.jsxs("div",{className:"w-full grid grid-cols-2 gap-x-5 max-1120:grid-cols-1 max-1120:max-w-[600px]",children:[s.jsx(Yt,{name:"name",theme:Z.WITH_GLASS,placeholder:"Имя",truePlaceholder:"Иван",placeholderStyles:"text-center mb-2 text-2xl max-1000:text-base",inputStyles:`${(x==null?void 0:x.name)&&"!bg-red-400"}`,className:"text-2xl max-1000:text-base",required:!0}),s.jsx(Ln,{name:"number",value:a,onChange:r,placeholder:`${x!=null&&x.number?"Ошибка в номере телефона":"Телефон"}`,className:"text-2xl max-1000:text-base",inputStyles:`${(x==null?void 0:x.number)&&"!bg-red-400"}`,placeholderStyles:`${(x==null?void 0:x.number)&&"text-red-400"} text-center mb-2 text-2xl max-1000:text-base`,theme:Z.WITH_GLASS}),s.jsx(Rn,{name:"email",value:i,onChange:o,placeholder:"Email",className:"text-2xl max-1000:text-base",inputStyles:`${(x==null?void 0:x.email)&&"!bg-red-400"}`,truePlaceholder:"ivanivanov@mail.ru",placeholderStyles:"text-center mb-2 text-2xl max-1000:text-base",theme:Z.WITH_GLASS}),s.jsx(Dn,{name:"username",value:l,onChange:m,placeholder:"Имя пользователя в Telegram",placeholderStyles:"text-center mb-2 text-2xl max-1000:text-base",className:"text-2xl max-1000:text-base",inputStyles:`${(x==null?void 0:x.username)&&"!bg-red-400"}`,truePlaceholder:"@ivanivanov",theme:Z.WITH_GLASS})]}),s.jsxs("div",{className:"flex flex-col gap-2 max-1120:max-w-[600px]",children:[s.jsx(je,{name:"privacyCheckbox",text:s.jsxs(s.Fragment,{children:["Даю"," ",s.jsx("a",{href:Bt,target:"_blank",rel:"noopener noreferrer",className:"underline",children:"согласие на обработку"})," ","моих персональных данных на условиях"," ",s.jsx("a",{href:Gt,target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Политики обработки персональных данных"})]}),checked:p,onChange:h,textStyles:"text-xs max-1000:text-[10px]",error:x==null?void 0:x.privacyCheckbox}),s.jsx(je,{name:"ofertaCheckbox",text:s.jsxs(s.Fragment,{children:["Выражаю согласие с уловиями"," ",s.jsx("a",{href:Wt,target:"_blank",rel:"noopener noreferrer",className:"underline",children:"оферты"})," "]}),checked:f,onChange:u,textStyles:"text-xs max-1000:text-[10px]",error:x==null?void 0:x.ofertaCheckbox}),s.jsx(je,{name:"adverstingCheckbox",text:s.jsxs(s.Fragment,{children:["Даю согласие на получение"," ",s.jsx("a",{href:Ut,target:"_blank",rel:"noopener noreferrer",className:"underline",children:"рекламных и информационных рассылок"})]}),checked:b,onChange:j,textStyles:"text-xs max-1000:text-[10px]",error:x==null?void 0:x.adverstingCheckbox})]})]}),s.jsx(fe,{type:"submit",primary:!0,theme:me.MONEY_STANDART_BIG_PRIMARY,primaryClassName:"max-w-[350px] mx-auto",className:"text-xl",children:"Купить"})]})})]})},na=()=>s.jsx("section",{id:"registration",className:"bg-no-repeat bg-center bg-contain",style:{backgroundImage:`url(${Xn})`},children:s.jsx("div",{className:"std-container",children:s.jsxs("div",{className:"max-1000:max-w-[400px] max-1000:mx-auto",children:[s.jsxs(de,{className:"text-center max-1340:max-w-[800px] max-1340:mx-auto",children:["Регистрация на денежный ретрит",s.jsx("br",{})," ",s.jsx("span",{className:"text-mainYellow",children:"«ИСКРА ТВОРЦА»"})]}),s.jsx("span",{className:"hidden opacity-0",children:"39148"}),s.jsx(ta,{}),s.jsx("p",{className:"max-w-[600px] mx-auto text-sm text-center text-pretty font-bold",children:"После регистрации вас направит в телеграм бот, нажмите старт или начать для завершения регистрации"})]})})}),aa=async()=>{try{return(await ue.get("/api/timer-api/get-timer/")).data.data}catch(e){throw ue.isAxiosError(e)?console.error("Axios error:",e.message):console.error("Unexpected error:",e),e}},ra=e=>{const t=e.getTime()-Date.now(),n=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),r=Math.floor(t/(1e3*60*60)%24),i=Math.floor(t/(1e3*60*60*24));return{total:t,days:i,hours:r,minutes:a,seconds:n}},sa=()=>{const[e,t]=N.useState({total:0,days:0,hours:0,minutes:0,seconds:0});return N.useEffect(()=>{let n;return(async()=>{try{const r=await aa(),i=parseFloat(r);if(isNaN(i)){console.error("Некорректное значение времени таймера");return}const o=new Date(Date.now()+i*1e3),l=()=>{const m=ra(o);t(m),m.total<=0&&clearInterval(n)};l(),n=setInterval(l,1e3)}catch(r){console.error("Ошибка загрузки таймера:",r)}})(),()=>clearInterval(n)},[]),e},ia=N.memo(({label:e,value:t})=>{const n=a=>a.toString().padStart(2,"0");return s.jsxs("div",{children:[s.jsx("span",{className:"font-Bebas text-7xl max-520:text-6xl",children:n(t)}),s.jsx("div",{className:"text-xl max-520:text-base",children:e})]})}),oa=N.memo(()=>{const{total:e,days:t,hours:n,minutes:a,seconds:r}=sa();if(e<=0)return null;const i=[{label:"дней",value:t},{label:"часов",value:n},{label:"минут",value:a},{label:"секунд",value:r}];return s.jsxs("div",{className:"bg-mainDarkBlue text-pretty font-bold p-6 rounded-lg mx-auto text-center select-none mb-10 max-1400:max-w-[600px] max-1000:max-w-[400px] max-1000:p-2",children:[s.jsx(B,{className:"mb-3 text-2xl font-normal",children:"Количество мест ограничено!"}),s.jsx("p",{className:"text-2xl mb-5 max-1000:text-xl max-550:text-lg",children:"До повышения цены осталось:"}),s.jsx("div",{className:"flex justify-center gap-6 text-2xl max-1000:text-xl max-1400:text-xl max-1400:gap-3 max-550:text-lg",children:i.map(o=>s.jsx(ia,{label:o.label,value:o.value},o.label))})]})});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const la={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},ca={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function fa(e,t,n){return(t=ua(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(n),!0).forEach(function(a){fa(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ma(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ua(e){var t=ma(e,"string");return typeof t=="symbol"?t:t+""}const ct=()=>{};let qe={},qt={},Kt=null,Zt={mark:ct,measure:ct};try{typeof window<"u"&&(qe=window),typeof document<"u"&&(qt=document),typeof MutationObserver<"u"&&(Kt=MutationObserver),typeof performance<"u"&&(Zt=performance)}catch{}const{userAgent:ft=""}=qe.navigator||{},D=qe,y=qt,mt=Kt,ie=Zt;D.document;const L=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Qt=~ft.indexOf("MSIE")||~ft.indexOf("Trident/");var da=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Jt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},pa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},en=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",ge="duotone",ha="sharp",ga="sharp-duotone",tn=[k,ge,ha,ga],ba={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ya={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},va=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),wa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Na=["fak","fa-kit","fakd","fa-kit-duotone"],ut={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ja=["kit"],Aa={kit:{"fa-kit":"fak"}},ka=["fak","fakd"],Pa={kit:{fak:"fa-kit"}},dt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Oa=["fak","fa-kit","fakd","fa-kit-duotone"],Ea={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ca={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ia={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ce={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ta=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ie=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Sa,...Ta],_a=["solid","regular","light","thin","duotone","brands"],nn=[1,2,3,4,5,6,7,8,9,10],Ma=nn.concat([11,12,13,14,15,16,17,18,19,20]),Fa=[...Object.keys(Ia),..._a,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY].concat(nn.map(e=>"".concat(e,"x"))).concat(Ma.map(e=>"w-".concat(e))),La={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const M="___FONT_AWESOME___",Te=16,an="fa",rn="svg-inline--fa",W="data-fa-i2svg",_e="data-fa-pseudo-element",Ra="data-fa-pseudo-element-pending",Ke="data-prefix",Ze="data-icon",xt="fontawesome-i2svg",Da="async",za=["HTML","HEAD","STYLE","SCRIPT"],sn=(()=>{try{return!0}catch{return!1}})();function re(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[k]}})}const on=c({},Jt);on[k]=c(c(c(c({},{"fa-duotone":"duotone"}),Jt[k]),ut.kit),ut["kit-duotone"]);const Ya=re(on),Me=c({},wa);Me[k]=c(c(c(c({},{duotone:"fad"}),Me[k]),dt.kit),dt["kit-duotone"]);const pt=re(Me),Fe=c({},Ce);Fe[k]=c(c({},Fe[k]),Pa.kit);const Qe=re(Fe),Le=c({},Ca);Le[k]=c(c({},Le[k]),Aa.kit);re(Le);const Ba=da,ln="fa-layers-text",Ga=xa,Wa=c({},ba);re(Wa);const Ua=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=pa,$a=[...ja,...Fa],J=D.FontAwesomeConfig||{};function Ha(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Va(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Va(Ha(n));r!=null&&(J[a]=r)});const cn={styleDefault:"solid",familyDefault:k,cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);const X=c(c({},cn),J);X.autoReplaceSvg||(X.observeMutations=!1);const d={};Object.keys(cn).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(t){X[e]=t,ee.forEach(n=>n(d))},get:function(){return X[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){X.cssPrefix=e,ee.forEach(t=>t(d))},get:function(){return X.cssPrefix}});D.FontAwesomeConfig=d;const ee=[];function Xa(e){return ee.push(e),()=>{ee.splice(ee.indexOf(e),1)}}const R=Te,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qa(e){if(!e||!L)return;const t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),e}const Ka="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function te(){let e=12,t="";for(;e-- >0;)t+=Ka[Math.random()*62|0];return t}function q(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Je(e){return e.classList?q(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function fn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Za(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(fn(e[n]),'" '),"").trim()}function be(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function et(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function Qa(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),m={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:m,path:f}}function Ja(e){let{transform:t,width:n=Te,height:a=Te,startCentered:r=!1}=e,i="";return r&&Qt?i+="translate(".concat(t.x/R-n/2,"em, ").concat(t.y/R-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):i+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),i+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var er=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function mn(){const e=an,t=rn,n=d.cssPrefix,a=d.replacementClass;let r=er;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let ht=!1;function ke(){d.autoAddCss&&!ht&&(qa(mn()),ht=!0)}var tr={mixout(){return{dom:{css:mn,insertCss:ke}}},hooks(){return{beforeDOMElementCreation(){ke()},beforeI2svg(){ke()}}}};const F=D||{};F[M]||(F[M]={});F[M].styles||(F[M].styles={});F[M].hooks||(F[M].hooks={});F[M].shims||(F[M].shims=[]);var I=F[M];const un=[],dn=function(){y.removeEventListener("DOMContentLoaded",dn),xe=1,un.map(e=>e())};let xe=!1;L&&(xe=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),xe||y.addEventListener("DOMContentLoaded",dn));function nr(e){L&&(xe?setTimeout(e,0):un.push(e))}function se(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?fn(e):"<".concat(t," ").concat(Za(n),">").concat(a.map(se).join(""),"</").concat(t,">")}function gt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pe=function(t,n,a,r){var i=Object.keys(t),o=i.length,l=n,m,f,u;for(a===void 0?(m=1,u=t[i[0]]):(m=0,u=a);m<o;m++)f=i[m],u=l(u,t[f],f,t);return u};function ar(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Re(e){const t=ar(e);return t.length===1?t[0].toString(16):null}function rr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function bt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function De(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=bt(t);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(e,bt(t)):I.styles[e]=c(c({},I.styles[e]||{}),r),e==="fas"&&De("fa",t)}const{styles:ne,shims:sr}=I,xn=Object.keys(Qe),ir=xn.reduce((e,t)=>(e[t]=Object.keys(Qe[t]),e),{});let tt=null,pn={},hn={},gn={},bn={},yn={};function or(e){return~$a.indexOf(e)}function lr(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!or(r)?r:null}const vn=()=>{const e=a=>Pe(ne,(r,i,o)=>(r[o]=Pe(i,a,{}),r),{});pn=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),hn=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),yn=e((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const t="far"in ne||d.autoFetchSvg,n=Pe(sr,(a,r)=>{const i=r[0];let o=r[1];const l=r[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});gn=n.names,bn=n.unicodes,tt=ye(d.styleDefault,{family:d.familyDefault})};Xa(e=>{tt=ye(e.styleDefault,{family:d.familyDefault})});vn();function nt(e,t){return(pn[e]||{})[t]}function cr(e,t){return(hn[e]||{})[t]}function G(e,t){return(yn[e]||{})[t]}function wn(e){return gn[e]||{prefix:null,iconName:null}}function fr(e){const t=bn[e],n=nt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return tt}const Nn=()=>({prefix:null,iconName:null,rest:[]});function mr(e){let t=k;const n=xn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return tn.forEach(a=>{(e.includes(n[a])||e.some(r=>ir[a].includes(r)))&&(t=a)}),t}function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=k}=t,a=Ya[n][e];if(n===ge&&!e)return"fad";const r=pt[n][e]||pt[n][a],i=e in I.styles?e:null;return r||i||null}function ur(e){let t=[],n=null;return e.forEach(a=>{const r=lr(d.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function yt(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=Ie.concat(Oa),i=yt(e.filter(p=>r.includes(p))),o=yt(e.filter(p=>!Ie.includes(p))),l=i.filter(p=>(a=p,!en.includes(p))),[m=null]=l,f=mr(i),u=c(c({},ur(o)),{},{prefix:ye(m,{family:f})});return c(c(c({},u),hr({values:e,family:f,styles:ne,config:d,canonical:u,givenPrefix:a})),dr(n,a,u))}function dr(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const i=t==="fa"?wn(r):{},o=G(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!ne.far&&ne.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const xr=tn.filter(e=>e!==k||e!==ge),pr=Object.keys(Ce).filter(e=>e!==k).map(e=>Object.keys(Ce[e])).flat();function hr(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=e,l=n===ge,m=t.includes("fa-duotone")||t.includes("fad"),f=o.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(m||f||u)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&xr.includes(n)&&(Object.keys(i).find(h=>pr.includes(h))||o.autoFetchSvg)){const h=va.get(n).defaultShortPrefixId;a.prefix=h,a.iconName=G(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=z()||"fas"),a}class gr{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=c(c({},this.definitions[i]||{}),r[i]),De(i,r[i]);const o=Qe[k][i];o&&De(o,r[i]),vn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:l}=a[r],m=l[2];t[i]||(t[i]={}),m.length>0&&m.forEach(f=>{typeof f=="string"&&(t[i][f]=l)}),t[i][o]=l}),t}}let vt=[],$={};const V={},br=Object.keys(V);function yr(e,t){let{mixoutsTo:n}=t;return vt=e,$={},Object.keys(V).forEach(a=>{br.indexOf(a)===-1&&delete V[a]}),vt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{$[o]||($[o]=[]),$[o].push(i[o])})}a.provides&&a.provides(V)}),n}function ze(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function U(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];($[e]||[]).forEach(i=>{i.apply(null,n)})}function Y(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return V[e]?V[e].apply(null,t):void 0}function Ye(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||z();if(t)return t=G(n,t)||t,gt(jn.definitions,n,t)||gt(I.styles,n,t)}const jn=new gr,vr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,U("noAuto")},wr={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(U("beforeI2svg",e),Y("pseudoElements2svg",e),Y("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,nr(()=>{jr({autoReplaceSvgRoot:t}),U("watch",e)})}},Nr={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ye(e[0]);return{prefix:n,iconName:G(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Ba))){const t=ve(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||z(),iconName:G(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=z();return{prefix:t,iconName:G(t,e)||e}}}},S={noAuto:vr,config:d,dom:wr,parse:Nr,library:jn,findIconDefinition:Ye,toHtml:se},jr=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=y}=e;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&L&&d.autoReplaceSvg&&S.dom.i2svg({node:t})};function we(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>se(n))}}),Object.defineProperty(e,"node",{get:function(){if(!L)return;const n=y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ar(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:o}=e;if(et(o)&&n.found&&!a.found){const{width:l,height:m}=n,f={x:l/m/2,y:.5};r.style=be(c(c({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function kr(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function at(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:l,maskId:m,titleId:f,extra:u,watchable:p=!1}=e,{width:h,height:b}=n.found?n:t,j=ka.includes(a),A=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(O=>u.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(u.classes).join(" ");let x={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(b)})};const v=j&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/b*16*.0625,"em")}:{};p&&(x.attributes[W]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||te())},children:[l]}),delete x.attributes.title);const w=c(c({},x),{},{prefix:a,iconName:r,main:t,mask:n,maskId:m,transform:i,symbol:o,styles:c(c({},v),u.styles)}),{children:P,attributes:T}=n.found&&t.found?Y("generateAbstractMask",w)||{children:[],attributes:{}}:Y("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=P,w.attributes=T,o?kr(w):Ar(w)}function wt(e){const{content:t,width:n,height:a,transform:r,title:i,extra:o,watchable:l=!1}=e,m=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(m[W]="");const f=c({},o.styles);et(r)&&(f.transform=Ja({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=be(f);u.length>0&&(m.style=u);const p=[];return p.push({tag:"span",attributes:m,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Pr(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=be(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Se}=I;function Be(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Sr={found:!1,width:512,height:512};function Or(e,t){!sn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ge(e,t){let n=t;return t==="fa"&&d.styleDefault!==null&&(t=z()),new Promise((a,r)=>{if(n==="fa"){const i=wn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Se[t]&&Se[t][e]){const i=Se[t][e];return a(Be(i))}Or(e,t),a(c(c({},Sr),{},{icon:d.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}const Nt=()=>{},We=d.measurePerformance&&ie&&ie.mark&&ie.measure?ie:{mark:Nt,measure:Nt},Q='FA "6.7.2"',Er=e=>(We.mark("".concat(Q," ").concat(e," begins")),()=>An(e)),An=e=>{We.mark("".concat(Q," ").concat(e," ends")),We.measure("".concat(Q," ").concat(e),"".concat(Q," ").concat(e," begins"),"".concat(Q," ").concat(e," ends"))};var rt={begin:Er,end:An};const le=()=>{};function jt(e){return typeof(e.getAttribute?e.getAttribute(W):null)=="string"}function Cr(e){const t=e.getAttribute?e.getAttribute(Ke):null,n=e.getAttribute?e.getAttribute(Ze):null;return t&&n}function Ir(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function Tr(){return d.autoReplaceSvg===!0?ce.replace:ce[d.autoReplaceSvg]||ce.replace}function _r(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function Mr(e){return y.createElement(e)}function kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?_r:Mr}=t;if(typeof e=="string")return y.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(kn(i,{ceFn:n}))}),a}function Fr(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ce={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(kn(n),t)}),t.getAttribute(W)===null&&d.keepOriginalSource){let n=y.createComment(Fr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Je(t).indexOf(d.replacementClass))return ce.replace(e);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===d.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>se(i)).join(`
`);t.setAttribute(W,""),t.innerHTML=r}};function At(e){e()}function Pn(e,t){const n=typeof t=="function"?t:le;if(e.length===0)n();else{let a=At;d.mutateApproach===Da&&(a=D.requestAnimationFrame||At),a(()=>{const r=Tr(),i=rt.begin("mutate");e.map(r),i(),n()})}}let st=!1;function Sn(){st=!0}function Ue(){st=!1}let pe=null;function kt(e){if(!mt||!d.observeMutations)return;const{treeCallback:t=le,nodeCallback:n=le,pseudoElementsCallback:a=le,observeMutationsRoot:r=y}=e;pe=new mt(i=>{if(st)return;const o=z();q(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!jt(l.addedNodes[0])&&(d.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&d.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&jt(l.target)&&~Ua.indexOf(l.attributeName))if(l.attributeName==="class"&&Cr(l.target)){const{prefix:m,iconName:f}=ve(Je(l.target));l.target.setAttribute(Ke,m||o),f&&l.target.setAttribute(Ze,f)}else Ir(l.target)&&n(l.target)})}),L&&pe.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Lr(){pe&&pe.disconnect()}function Rr(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Dr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=ve(Je(e));return r.prefix||(r.prefix=z()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=cr(r.prefix,e.innerText)||nt(r.prefix,Re(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function zr(e){const t=q(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||te()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Dr(e),i=zr(e),o=ze("parseNodeAttributes",{},e);let l=t.styleParser?Rr(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i}},o)}const{styles:Br}=I;function On(e){const t=d.autoReplaceSvg==="nest"?Pt(e,{styleParser:!1}):Pt(e);return~t.extra.classes.indexOf(ln)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}function Gr(){return[...Na,...Ie]}function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(xt,"-").concat(u)),r=u=>n.remove("".concat(xt,"-").concat(u)),i=d.autoFetchSvg?Gr():en.concat(Object.keys(Br));i.includes("fa")||i.push("fa");const o=[".".concat(ln,":not([").concat(W,"])")].concat(i.map(u=>".".concat(u,":not([").concat(W,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=q(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const m=rt.begin("onTree"),f=l.reduce((u,p)=>{try{const h=On(p);h&&u.push(h)}catch(h){sn||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,p)=>{Promise.all(f).then(h=>{Pn(h,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),m(),u()})}).catch(h=>{m(),p(h)})})}function Wr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;On(e).then(n=>{n&&Pn([n],t)})}function Ur(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Ye(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ye(r||{})),e(a,c(c({},n),{},{mask:r}))}}const $r=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:l=null,classes:m=[],attributes:f={},styles:u={}}=t;if(!e)return;const{prefix:p,iconName:h,icon:b}=e;return we(c({type:"icon"},e),()=>(U("beforeDOMElementCreation",{iconDefinition:e,params:t}),d.autoA11y&&(o?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(l||te()):(f["aria-hidden"]="true",f.focusable="false")),at({icons:{main:Be(b),mask:r?Be(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:c(c({},C),n),symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:f,styles:u,classes:m}})))};var Hr={mixout(){return{icon:Ur($r)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=St,e.nodeCallback=Wr,e}}},provides(e){e.i2svg=function(t){const{node:n=y,callback:a=()=>{}}=t;return St(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:l,symbol:m,mask:f,maskId:u,extra:p}=n;return new Promise((h,b)=>{Promise.all([Ge(a,o),f.iconName?Ge(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[A,x]=j;h([t,at({icons:{main:A,mask:x},prefix:o,iconName:a,transform:l,symbol:m,maskId:u,title:r,titleId:i,extra:p,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:i,styles:o}=t;const l=be(o);l.length>0&&(a.style=l);let m;return et(i)&&(m=Y("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(m||r.icon),{children:n,attributes:a}}}},Vr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return we({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Xr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t;return we({type:"counter",content:e},()=>(U("beforeDOMElementCreation",{content:e,params:t}),Pr({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},qr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:i={},styles:o={}}=t;return we({type:"text",content:e},()=>(U("beforeDOMElementCreation",{content:e,params:t}),wt({content:e,transform:c(c({},C),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:i}=n;let o=null,l=null;if(Qt){const m=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/m,l=f.height/m}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,wt({content:t.innerHTML,width:o,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const Kr=new RegExp('"',"ug"),Ot=[1105920,1112319],Et=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),ya),La),Ea),$e=Object.keys(Et).reduce((e,t)=>(e[t.toLowerCase()]=Et[t],e),{}),Zr=Object.keys($e).reduce((e,t)=>{const n=$e[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Qr(e){const t=e.replace(Kr,""),n=rr(t,0),a=n>=Ot[0]&&n<=Ot[1],r=t.length===2?t[0]===t[1]:!1;return{value:Re(r?t[0]:t),isSecondary:a||r}}function Jr(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return($e[n]||{})[r]||Zr[n]}function Ct(e,t){const n="".concat(Ra).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const o=q(e.children).filter(h=>h.getAttribute(_e)===t)[0],l=D.getComputedStyle(e,t),m=l.getPropertyValue("font-family"),f=m.match(Ga),u=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&p!=="none"&&p!==""){const h=l.getPropertyValue("content");let b=Jr(m,u);const{value:j,isSecondary:A}=Qr(h),x=f[0].startsWith("FontAwesome");let v=nt(b,j),w=v;if(x){const P=fr(j);P.iconName&&P.prefix&&(v=P.iconName,b=P.prefix)}if(v&&!A&&(!o||o.getAttribute(Ke)!==b||o.getAttribute(Ze)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);const P=Yr(),{extra:T}=P;T.attributes[_e]=t,Ge(v,b).then(O=>{const Tn=at(c(c({},P),{},{icons:{main:O,mask:Nn()},prefix:b,iconName:w,extra:T,watchable:!0})),Ne=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ne,e.firstChild):e.appendChild(Ne),Ne.outerHTML=Tn.map(_n=>se(_n)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function es(e){return Promise.all([Ct(e,"::before"),Ct(e,"::after")])}function ts(e){return e.parentNode!==document.head&&!~za.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function It(e){if(L)return new Promise((t,n)=>{const a=q(e.querySelectorAll("*")).filter(ts).map(es),r=rt.begin("searchPseudoElements");Sn(),Promise.all(a).then(()=>{r(),Ue(),t()}).catch(()=>{r(),Ue(),n()})})}var ns={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=It,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=y}=t;d.searchPseudoElements&&It(n)}}};let Tt=!1;var as={mixout(){return{dom:{unwatch(){Sn(),Tt=!0}}}},hooks(){return{bootstrap(){kt(ze("mutationObserverCallbacks",{}))},noAuto(){Lr()},watch(e){const{observeMutationsRoot:t}=e;Tt?Ue():kt(ze("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const _t=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var rs={mixout(){return{parse:{transform:e=>_t(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=_t(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:i}=t;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),m="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(m," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:u,path:p};return{tag:"g",attributes:c({},h.outer),children:[{tag:"g",attributes:c({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),h.path)}]}]}}}};const Oe={x:0,y:0,width:"100%",height:"100%"};function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ss(e){return e.tag==="g"?e.children:[e]}var is={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?ve(n.split(" ").map(r=>r.trim())):Nn();return a.prefix||(a.prefix=z()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:l}=t;const{width:m,icon:f}=r,{width:u,icon:p}=i,h=Qa({transform:l,containerWidth:u,iconWidth:m}),b={tag:"rect",attributes:c(c({},Oe),{},{fill:"white"})},j=f.children?{children:f.children.map(Mt)}:{},A={tag:"g",attributes:c({},h.inner),children:[Mt(c({tag:f.tag,attributes:c(c({},f.attributes),h.path)},j))]},x={tag:"g",attributes:c({},h.outer),children:[A]},v="mask-".concat(o||te()),w="clip-".concat(o||te()),P={tag:"mask",attributes:c(c({},Oe),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:ss(p)},P]};return n.push(T,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},Oe)}),{children:n,attributes:a}}}},os={provides(e){let t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=c(c({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ls={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},cs=[tr,Hr,Vr,Xr,qr,ns,as,rs,is,os,ls];yr(cs,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;const He=S.parse;S.findIconDefinition;S.toHtml;const fs=S.icon;S.layer;S.text;S.counter;function Ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ft(Object(n),!0).forEach(function(a){H(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ft(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ms(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function us(e,t){if(e==null)return{};var n=ms(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ve(e){return ds(e)||xs(e)||ps(e)||hs()}function ds(e){if(Array.isArray(e))return Xe(e)}function xs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ps(e,t){if(e){if(typeof e=="string")return Xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xe(e,t)}}function Xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function hs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gs(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,m=e.spin,f=e.spinPulse,u=e.spinReverse,p=e.pulse,h=e.fixedWidth,b=e.inverse,j=e.border,A=e.listItem,x=e.flip,v=e.size,w=e.rotation,P=e.pull,T=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":m,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":h,"fa-inverse":b,"fa-border":j,"fa-li":A,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},H(t,"fa-".concat(v),typeof v<"u"&&v!==null),H(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),H(t,"fa-pull-".concat(P),typeof P<"u"&&P!==null),H(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(O){return T[O]?O:null}).filter(function(O){return O})}function bs(e){return e=e-0,e===e}function En(e){return bs(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ys=["style"];function vs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ws(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=En(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[vs(r)]=i:t[r]=i,t},{})}function Cn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(m){return Cn(e,m)}),r=Object.keys(t.attributes||{}).reduce(function(m,f){var u=t.attributes[f];switch(f){case"class":m.attrs.className=u,delete t.attributes.class;break;case"style":m.attrs.style=ws(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?m.attrs[f.toLowerCase()]=u:m.attrs[En(f)]=u}return m},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=us(n,ys);return r.attrs.style=E(E({},r.attrs.style),o),e.apply(void 0,[t.tag,E(E({},r.attrs),l)].concat(Ve(a)))}var In=!1;try{In=!0}catch{}function Ns(){if(!In&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Lt(e){if(e&&he(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(He.icon)return He.icon(e);if(e===null)return null;if(e&&he(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ee(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?H({},e,t):{}}var Rt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ae=$t.forwardRef(function(e,t){var n=E(E({},Rt),e),a=n.icon,r=n.mask,i=n.symbol,o=n.className,l=n.title,m=n.titleId,f=n.maskId,u=Lt(a),p=Ee("classes",[].concat(Ve(gs(n)),Ve((o||"").split(" ")))),h=Ee("transform",typeof n.transform=="string"?He.transform(n.transform):n.transform),b=Ee("mask",Lt(r)),j=fs(u,E(E(E(E({},p),h),b),{},{symbol:i,title:l,titleId:m,maskId:f}));if(!j)return Ns("Could not find icon",u),null;var A=j.abstract,x={ref:t};return Object.keys(n).forEach(function(v){Rt.hasOwnProperty(v)||(x[v]=n[v])}),js(A[0],x)});ae.displayName="FontAwesomeIcon";ae.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var js=Cn.bind(null,$t.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const As={prefix:"fas",iconName:"gift",icon:[512,512,[127873],"f06b","M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"]},ks=e=>{const{title:t,subtitle:n,points:a,gifts:r,prices:i,time:o}=e.data,l=e.index,m=zt(),f=()=>{m(K.changeActiveProduct(e.data))};return s.jsxs("article",{className:`relative z-10 flex flex-col  ${l===1?"bg-baseAlphaMainBg-inv":"bg-smAlphaMainBg-inv"} border-2 border-smAlphaMainBg-inv backdrop-blur-3xl rounded-stdRadius p-5 max-w-[31%] mx-auto shadow-lg duration-200 text-balance hover:scale-[1.02] max-1400:max-w-[600px] max-1000:max-w-[400px]`,children:[s.jsxs("div",{className:"min-h-[150px]",children:[s.jsx(B,{className:"mb-4 text-center",children:t}),n&&s.jsxs("div",{className:"mb-6 text-xl font-semibold text-balance text-center",children:[n," ",s.jsx("p",{children:o})]})]}),s.jsx("h3",{className:"text-4xl text-center mb-3 font-Bebas text-mainYellow",children:"Что входит"}),a.length>0&&s.jsx("ul",{className:"list-type-star flex flex-col gap-3 text-lg mb-5 max-1000:text-sm",children:a.map((u,p)=>s.jsx("li",{children:u},p))}),r&&r.length>0&&s.jsxs("div",{className:"mb-5",children:[s.jsxs("h3",{className:"flex items-center justify-center gap-2 text-4xl text-center mb-3 font-Bebas text-mainYellow",children:[s.jsx(ae,{icon:As,className:"max-w-[36px]"})," ",s.jsx("span",{children:"в подарок"})]}),s.jsx("ul",{className:"list-type-star",children:r.map((u,p)=>s.jsx("li",{className:`mb-1 text-balance font-medium text-lg ${p===r.length-1,""} max-1000:text-base`,children:u},p))})]}),l===1&&s.jsx("p",{className:"font-Bebas text-3xl text-center text-shadow-(--textShadow-goldGlow) mb-3",children:"Максимум до 15 человек!"}),s.jsxs("div",{className:"mt-auto",children:[s.jsxs("div",{className:"text-center font-bold text-3xl mb-8 max-1000:text-xl",children:["Стоимость",t!=="VIP. 2 день, онлайн, до 8 часов"?"":" за 2 дня",":"," ",s.jsxs("div",{className:"flex justify-center gap-5",children:[s.jsx("p",{className:"line-through opacity-50 mr-2",children:i[0]}),s.jsx("p",{className:"mr-2 text-shadow-(--textShadow-goldGlow)",children:i[1]})]})]}),s.jsx("a",{href:"#registration",children:s.jsx(fe,{theme:me.MONEY_STANDART_BIG_PRIMARY,primary:!0,primaryClassName:"max-w-[350px] mx-auto",onClick:f,children:"Купить"})})]})]},l)},Ps=()=>s.jsx("section",{id:"products",className:"bg-mainDarkBlue ",children:s.jsxs("div",{className:"std-container",children:[s.jsx("div",{className:"flex items-stretch justify-between gap-10 mb-10 max-1400:flex-col",children:Wn.map((e,t)=>s.jsx(ks,{data:e,index:t},t))}),s.jsx(oa,{}),s.jsx("div",{children:s.jsxs("div",{className:"text-center text-balance max-1000:max-w-[400px] max-1000:mx-auto",children:[s.jsx(B,{children:"У ТЕБЯ ОСТАЛИСЬ ВОПРОСЫ?"}),s.jsx("p",{className:"text-2xl mb-5 max-1000:text-xl max-550:text-lg",children:"Обратитесь в службу заботы и Вам обязательно помогут!"}),s.jsxs("div",{className:"flex items-center justify-center  gap-10 cursor-pointer",children:[s.jsx(ae,{icon:ca,className:"max-w-[50px] text-6xl hover:text-mainYellow hover:scale-[1.05]"}),s.jsx(ae,{icon:la,className:"max-w-[50px] text-6xl hover:text-mainYellow hover:scale-[1.05]"})]})]})})]})}),Ss=()=>s.jsx("footer",{className:"py-10",children:s.jsxs("div",{className:"std-container",children:[s.jsxs("div",{className:"max-w-[800px] mx-auto mb-7 text-center text-gray-500 max-1000:max-w-[400px] max-1000:text-xs ",children:[s.jsxs("div",{className:"hidden opacity-0",children:[s.jsx(_,{src:zn,alt:"ом"}),s.jsx(_,{src:Yn,alt:"бесконечность"}),s.jsx("span",{children:"39148"})]}),s.jsx("nav",{className:"mb-3",children:s.jsxs("ul",{className:"flex flex-col gap-2 text-mainBg-inv text-balance",children:[s.jsx("li",{children:s.jsx("a",{href:Gt,target:"_blank",rel:"noopener noreferrer",children:"Политика обработки персональных данных"})}),s.jsx("li",{children:s.jsx("a",{href:Ut,target:"_blank",rel:"noopener noreferrer",children:"Согласие на получение рекламных и информационных сообщений"})}),s.jsx("li",{children:s.jsx("a",{href:Bt,target:"_blank",rel:"noopener noreferrer",children:"Согласие на обработку персональных данных"})}),s.jsx("li",{children:s.jsx("a",{href:Wt,target:"_blank",rel:"noopener noreferrer",children:"Оферта"})})]})}),s.jsxs("ul",{className:"mb-3",children:[s.jsx("li",{children:"ИП Савченко Евгений Владимирович"}),s.jsx("li",{children:"ИНН: 230211698170"}),s.jsx("li",{children:"ОГРНИП: 325237500235788"}),s.jsx("li",{children:"Email: evgenisavchenko@bk.ru"})]}),s.jsx("p",{className:"text-pretty mb-5 text-[10px] text-gray-500",children:"Автор вебинара не гарантирует увеличение заработка, предлагает к использованию авторскую методику. Увеличение заработка зависит от множества факторов, в том числе, индивидуальных способностей, обстоятельств, на которые автор курса не может оказать влияния"}),s.jsx("p",{className:"text-mainBg-inv text-xs",children:"© evgenisavchenko.com Все права защищены."})]}),s.jsx(Bn,{})]})}),Cs=()=>s.jsxs(s.Fragment,{children:[s.jsx(Kn,{}),s.jsx("main",{className:"grow",children:s.jsxs("div",{className:"relative",children:[s.jsx(Ht,{className:"z-10",quantity:150}),s.jsx(Zn,{}),s.jsx(Ps,{}),s.jsx(Qn,{}),s.jsx(na,{})]})}),s.jsx(Ss,{})]});export{Cs as default};
