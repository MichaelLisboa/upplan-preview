(this["webpackJsonpupplan-preview"]=this["webpackJsonpupplan-preview"]||[]).push([[0],{12:function(e,a,t){e.exports={header:"Hero_header__rypkM",ctaButton:"Hero_ctaButton__64yRr",headlineContainer:"Hero_headlineContainer__25a5A",overlayGrey:"Hero_overlayGrey__1NMie"}},21:function(e,a,t){e.exports={ctaOffer:"Landing_ctaOffer__9AeW_",ctaButton:"Landing_ctaButton__3J0Lu",header:"Landing_header__2yzsh",headlineContainer:"Landing_headlineContainer__3huJ3",overlayGrey:"Landing_overlayGrey__U6poY",customSection:"Landing_customSection__i2cug"}},218:function(e,a,t){},219:function(e,a,t){},220:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(88),i=t.n(r),c=t(2),o=t(5),u=Object(o.a)(),s=t(98),m=function(e){var a=e.component,t=Object(s.a)(e,["component"]),n=localStorage.getItem("auth_token"),r="87q364hn39qwo09ioxnbqu4b98y7bxqe8EWFW93q3oiybo.76132v5xgs0964"===n;return console.log("VALID TOKEN",r),l.a.createElement(c.b,Object.assign({},t,{render:function(e){return n?l.a.createElement(a,e):l.a.createElement(c.a,{to:{pathname:"/",state:{from:e.location}}})}}))},d=t(7),k=function(e){Object.assign({},e);var a=Object(c.g)(),t=Object(n.useState)(""),r=Object(d.a)(t,2),i=r[0],o=r[1],u=Object(n.useState)(""),s=Object(d.a)(u,2),m=s[0],k=s[1],g=Object(n.useState)(localStorage.auth_token),f=Object(d.a)(g,2),h=f[0];f[1];Object(n.useEffect)((function(){h&&a.push("/landing")}),[]);return l.a.createElement("div",{className:"uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport","data-uk-height-viewport":!0},l.a.createElement("div",{className:"uk-width-medium uk-padding-small"},l.a.createElement("h2",null,"Login In"),l.a.createElement("form",{className:"toggle-class",autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),i==="shannon.cullum@bettertradeoff.com"&&m==="!tsfuckingdrupa1"){localStorage.setItem("auth_token","87q364hn39qwo09ioxnbqu4b98y7bxqe8EWFW93q3oiybo.76132v5xgs0964"),a.push("/landing")}else alert("wrong email or password combination")}},l.a.createElement("fieldset",{className:"uk-fieldset"},l.a.createElement("div",{className:"uk-margin-small"},l.a.createElement("div",{className:"uk-inline uk-width-1-1"},l.a.createElement("span",{className:"uk-form-icon uk-form-icon-flip","data-uk-icon":"icon: mail"}),l.a.createElement("input",{className:"uk-input uk-form-large uk-border-rounded",required:!0,placeholder:"Enter email",type:"email",value:i,onChange:function(e){o(e.target.value)}}))),l.a.createElement("div",{className:"uk-margin-small"},l.a.createElement("div",{className:"uk-inline uk-width-1-1"},l.a.createElement("span",{className:"uk-form-icon uk-form-icon-flip","data-uk-icon":"icon: lock"}),l.a.createElement("input",{className:"uk-input uk-form-large uk-border-rounded",required:!0,type:"password",id:"exampleInputPassword1",placeholder:"Password",value:m,onChange:function(e){k(e.target.value)}}))),l.a.createElement("div",{className:"uk-margin-bottom"},l.a.createElement("button",{type:"submit",className:"uk-button uk-button-large uk-button-secondary uk-border-rounded uk-width-1-1"},"LOG IN"))))))},g=t(11),f=t(97),h=Object(f.a)({space:"4ildk6z8kuhl",accessToken:"szqyojqD-KuKMmItEy-9uWEd8q7T2xYkU6GKQQA3IC4",host:"preview.contentful.com"});var p=function(e){Object.assign({},e);var a=Object(n.useState)(!0),t=Object(d.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)({}),o=Object(d.a)(c,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){h.getEntries({content_type:"goBigTemplate"}).then((function(e){console.log(e),s(e.items.map((function(e){return e.fields}))),i(!1)}))}),[]),r?l.a.createElement("div",null):l.a.createElement("section",{className:"uk-section uk-section-large uk-section-muted"},l.a.createElement("div",{className:"uk-container uk-container-small"},l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match","data-uk-grid":!0},u.map((function(e,a){return l.a.createElement("div",{key:e.pageItentifier,className:"uk-margin"},l.a.createElement("div",{className:"uk-card uk-card-body uk-card-default uk-margin uk-box-shadow-small uk-box-shadow-hover-large"},l.a.createElement("p",{className:"uk-h4"},e.description),l.a.createElement("p",{className:"uk-text-small"},e.pageName),l.a.createElement(g.a,{className:"uk-button uk-button-text cta-button",to:"/landing/".concat(e.pageIdentifier)},"View this")))})))))},v=t(52),E=t.n(v),b=t(94),N=t.n(b),y=function(e){var a=e.logo,t=e.conversionUrl;return l.a.createElement("div",{className:E.a.nav,"data-uk-sticky":"cls-active: uk-navbar-sticky uk-box-shadow-small; bottom: #transparent-sticky-navbar"},l.a.createElement("div",{className:"uk-container"},l.a.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},l.a.createElement("div",{className:"uk-navbar-left uk-margin-xlarge-left@m"},l.a.createElement("div",{className:"uk-navbar-item uk-logo ".concat(E.a.Logo)},a?l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.code.content[0].content[0].value}}):l.a.createElement("img",{src:N.a,alt:"Up Plan by BetterTradeOff",width:"50","data-uk-img":!0}))),l.a.createElement("div",{className:"uk-navbar-right"},l.a.createElement("div",{className:"uk-navbar-nav uk-margin-xlarge-right@m","data-uk-scrollspy":"cls:uk-animation-fade"},l.a.createElement("div",{className:"uk-navbar-item"},l.a.createElement("a",{href:t||"https://account.upplan.sg/",className:"uk-button uk-button-blue uk-border-pill"},"Start Now")))))))},x=function(e){var a=e.children,r=e.props;return Object(n.useEffect)((function(){try{var e=t(196),a=t(197);e.use(a)}catch(n){console.error("UIKit ERROR",n)}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{logo:r&&r.logo,conversionUrl:r&&r.conversionUrl}),l.a.createElement("main",null,a),l.a.createElement("footer",{className:"uk-section uk-background-secondary"},l.a.createElement("div",{className:"uk-text-center uk-padding-remove-horizontal"},l.a.createElement("p",{className:"uk-text-small uk-text-muted"},l.a.createElement("small",null,"\xa9 2018-2020 BetterTradeOff Solutions Pte Ltd. All Rights Reserved",l.a.createElement("br",null),l.a.createElement("a",{className:"uk-link-reset uk-margin-small-left",target:"_blank",rel:"noopener noreferrer",href:"https://www.upplan.sg/privacy-policy"},"Privacy Policy"),l.a.createElement("a",{className:"uk-link-reset uk-margin-small-left",target:"_blank",rel:"noopener noreferrer",href:"https://www.upplan.sg/terms"},"Terms of Use"),l.a.createElement("a",{className:"uk-link-reset uk-margin-small-left",target:"_blank",rel:"noopener noreferrer",href:"https://cdn.bettertradeoff.com/web/documents/promo_tnc.pdf"},"*Promotion Term and Conditions"))))))},w=(t(84),t(48)),_=t(25),T=t.n(_),O=t(12),C=t.n(O),S=t(53),I=t.n(S),L=function(e){var a=e.videoSrcURL,t="".concat(a,"?autoplay=1&loop=1&background=1&autopause=0");return l.a.createElement("div",{className:"".concat(I.a.responsiveVideo)},l.a.createElement("iframe",{src:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",autoPlay:!0,frameBorder:"0"}))},j=function(e){var a=e.videoSrcURL,t=e.children,n="".concat(a,"?autoplay=1&loop=1&background=1&autopause=0");return l.a.createElement("div",{style:{height:"vh50",overflow:"hidden"},className:"uk-cover-container"},l.a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",zIndex:"5"}},l.a.createElement("div",{className:I.a.overlayGrey},l.a.createElement("iframe",{style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"},src:n,autoPlay:!0,frameBorder:"0"})),l.a.createElement("div",{style:{minHeight:"800px",position:"relative",zIndex:"2"},className:"uk-container uk-light uk-flex uk-flex-column uk-flex-center","data-uk-parallax":"y: 0,50; easing:0; opacity:0.2"},t)))},H=function(e){var a=e.data,t=a.heroCTA.desktopOffer;return l.a.createElement("section",{className:"hero-default uk-section uk-margin-remove-bottom"},l.a.createElement("div",{className:"uk-container uk-flex uk-flex-center uk-flex-column"},l.a.createElement("div",{className:"uk-grid uk-grid-margin-large uk-grid-medium","data-uk-grid":!0},l.a.createElement("div",{className:"uk-width-1-1 uk-width-2-5@m uk-margin-small-left uk-margin-small-right"},l.a.createElement("h1",null,a.heroCTA.headline),a.leader&&a.leader.map((function(e,a){return l.a.createElement("p",{key:"text-".concat(a)},e[0].value)})),l.a.createElement("div",null,l.a.createElement("a",{href:a.ctaUrl,className:"".concat(C.a.ctaButton," uk-width-1-1 uk-width-auto@m uk-button uk-button-large uk-button-blue uk-border-pill")},a.heroCTA.heroCtaButtonLabel)),t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"uk-container uk-container-expand uk-visible@m"},l.a.createElement("div",{className:"uk-width-2-3"},l.a.createElement(T.a,{fluid:t.fluid,alt:"",style:{maxWidth:"400px"}}),l.a.createElement("p",{className:"uk-text-small uk-margin-remove uk-text-muted"},l.a.createElement("small",null,"* Terms and conditions apply"))))):null),l.a.createElement("div",{className:"uk-width-1-1 uk-width-expand@m uk-flex uk-flex-center uk-flex-column"},l.a.createElement(L,{videoSrcURL:a.heroCTA.videoPath})))))},B=t(95),A=t.n(B),U=function(e){var a=e.data,t=a.heroCTA.subHeadline.content.map((function(e){return e.content})),n=a.heroCTA.desktopOffer;return l.a.createElement("div",{className:"uk-cover-container ".concat(C.a.header)},l.a.createElement(A.a,{Tag:"div",fluid:a.heroCTA.imageFile.fluid,preserveStackingContext:!0,style:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"rgba(29, 38, 54, 0.6)",backgroundPosition:"center center",display:"flex",alignItems:"center",height:"100%"}},l.a.createElement("div",{className:"uk-container uk-light"},l.a.createElement("div",{className:"uk-grid uk-grid-large","data-uk-grid":!0},l.a.createElement("div",{className:"uk-width-1-1 uk-width-2-5@m uk-margin-small-left uk-margin-small-right"},l.a.createElement("h1",null,a.heroCTA.headline),t.map((function(e,a){return l.a.createElement("p",{className:"",key:"text-".concat(a)},e[0].value)})),l.a.createElement("div",{className:""},l.a.createElement("a",{href:a.ctaUrl,className:"".concat(C.a.ctaButton," uk-width-1-1 uk-width-auto@m uk-button uk-button-large uk-button-default uk-border-pill")},a.heroCTA.heroCtaButtonLabel)),n?l.a.createElement("div",{className:"uk-container uk-container-expand uk-visible@m"},l.a.createElement("div",{className:"uk-width-2-3"},l.a.createElement(T.a,{fluid:n.fluid,alt:""}),l.a.createElement("p",{className:"uk-text-small uk-margin-remove uk-text-muted"},l.a.createElement("small",null,"* Terms and conditions apply")))):null)))))},P=function(e){var a=e.data,t=a.heroCTA.subHeadline.content.map((function(e){return e.content})),n=a.heroCTA.offer;return l.a.createElement("div",{className:"uk-cover-container ".concat(C.a.header)},l.a.createElement(j,{videoSrcURL:a.heroCTA.videoPath},l.a.createElement("div",{className:"uk-container uk-light"},l.a.createElement("div",{className:"uk-margin-top@m uk-margin-bottom@m uk-margin-remove@m"},l.a.createElement("div",{className:"uk-width-1-1 uk-width-2-5@m uk-margin-small-left uk-margin-small-right"},l.a.createElement("h1",null,a.heroCTA.headline),t.map((function(e,a){return l.a.createElement("p",{className:"",key:"text-".concat(a)},e[0].value)})),l.a.createElement("div",{className:"uk-margin-bottom"},l.a.createElement("a",{href:a.ctaUrl,className:"uk-width-1-1 uk-width-auto@m uk-button uk-button-large uk-button-default uk-border-pill"},a.heroCTA.heroCtaButtonLabel)),n.offer?l.a.createElement("div",{className:"uk-width-4-5 uk-width-3-5@m"},l.a.createElement("div",{className:C.a.ctaOffer,dangerouslySetInnerHTML:{__html:n.offer.childMarkdownRemark.html}}),l.a.createElement("p",{className:"uk-text-small uk-margin-remove"},l.a.createElement("small",null,"* Terms and conditions apply"))):null)))))},q=function(e){var a=e.data;return l.a.createElement("section",{className:"uk-section uk-section-xsmall"},l.a.createElement("div",{className:"uk-container uk-container-large"},l.a.createElement("div",{style:{position:"relative",paddingBottom:"55.25%",height:"0",overflow:"hidden",zIndex:"5"},className:"uk-box-shadow-large"},l.a.createElement("iframe",{style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"},src:a.heroCTA.mediaPath,frameBorder:"0"}))))},M=function(e){var a=e.benefits;return l.a.createElement("div",{className:"uk-container uk-margin-large-bottom"},l.a.createElement("div",{className:"uk-grid uk-grid-row-large uk-child-width-1-2@s uk-child-width-1-3@m","data-uk-grid":!0},a.map((function(e,a){return l.a.createElement("div",{key:e.fields.benefitId,className:"uk-text-center@m"},l.a.createElement("div",{className:"uk-grid uk-padding-small uk-margin-remove@m","data-uk-grid":!0},l.a.createElement("div",{className:"uk-width-1-4 uk-width-1-1@m uk-margin-small-top uk-margin-remove-top@m"},l.a.createElement("img",{src:e.fields.benefitIcon.fields.file.url,alt:e.fields.benefitTitle,style:{width:"100%",maxWidth:"100px"},className:"uk-margin-auto-left uk-margin-auto-right"})),l.a.createElement("div",{className:"uk-width-expand uk-width-1-1@m"},l.a.createElement("h4",{className:"uk-margin-medium-top@m uk-margin-small-bottom"},e.fields.benefitTitle),l.a.createElement("p",{className:"uk-margin-remove-top"},e.fields.benefitCopy))))}))))},R=function(e){var a=e.sections;return l.a.createElement("div",{className:"go-big-go-home uk-container"},a.map((function(e,a){return l.a.createElement("div",{key:e.fields.sectionId},l.a.createElement("div",{key:"sections-".concat(a),className:"uk-grid uk-grid-large uk-margin-xlarge","data-uk-grid":!0},l.a.createElement("div",{key:"benefit-".concat(a),className:"uk-flex uk-flex-middle uk-width-3-5@m ".concat(a%2===0?"uk-flex-right":"uk-flex-left")},"image"===e.fields.sectionMedia.fields.file.contentType.split("/")[0]?l.a.createElement("img",{src:e.fields.sectionMedia.fields.file.url,alt:e.fields.sectionMedia.fields.file.fileName}):l.a.createElement("video",{className:"uk-box-shadow-hover-xlarge uk-box-shadow-large",autoPlay:!0,muted:!0,loop:!0},l.a.createElement("source",{src:e.fields.sectionMedia.fields.file.url,type:"video/mp4"}))),l.a.createElement("div",{className:"benefits-copy uk-flex uk-flex-column uk-flex-center uk-width-2-5@m ".concat(a%2===0&&"uk-flex-first@m")},l.a.createElement("h2",null,e.fields.sectionTitle),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.fields.sectionCopy}}))))})))},G=t(54),V=t.n(G),W=function(e){var a=e.logos;return console.log(a),a.map((function(e,a){return l.a.createElement("div",{key:a,className:"".concat(V.a.LogoImage)},l.a.createElement("img",{src:e.fields.file.url,alt:"",className:V.a.gatsbyImage}))}))},z=function(e){var a=e.items;return l.a.createElement("div",{className:"uk-container uk-container-small"},a.sectionHeadline?l.a.createElement("h1",{className:"uk-text-center uk-margin-bottom"},a.sectionHeadline):null,a.sectionSubHeadline?l.a.createElement("div",{className:"uk-h3 uk-text-center",dangerouslySetInnerHTML:{__html:a.sectionSubHeadline.childMarkdownRemark.html}}):null,l.a.createElement("div",{className:"uk-margin-auto-left uk-margin-auto-right"},l.a.createElement("div",{className:"uk-grid uk-margin-remove-left uk-margin-remove-right uk-grid-row-large uk-child-width-".concat(a.logoImage.length<=3?"1-3":"1-4"," uk-child-width-2-4@m uk-margin-large-top"),"data-uk-scrollspy":"cls: uk-animation-slide-bottom-medium; target: div; delay: ".concat(20,";"),"data-uk-grid":!0},l.a.createElement(W,{logos:a.logoImage}))))},K=function(e){var a=e.items;return l.a.createElement("div",{className:"uk-container uk-container-small uk-margin-xlarge"},a.sectionHeadline?l.a.createElement("h2",{className:"uk-text-center uk-margin-medium-bottom"},a.sectionHeadline):null,a.sectionSubHeadline?l.a.createElement("div",{className:"uk-h3 uk-text-center",dangerouslySetInnerHTML:{__html:a.sectionSubHeadline}}):null,l.a.createElement("div",{className:"uk-slider-container","data-uk-slider":"autoplay: true; sets: true; autoplay-interval: 4000;"},l.a.createElement("div",{className:"uk-grid uk-margin-remove-left uk-margin-remove-right uk-slider-items uk-child-width-1-4 uk-child-width-1-5@m","data-uk-grid":!0},l.a.createElement(W,{logos:a.logoImage}))))},D=(t(96),t(21)),F=t.n(D),J=function(e){var a=Object.assign({},e),t=Object(n.useState)(!0),r=Object(d.a)(t,2),i=r[0],c=r[1],o=Object(n.useState)({}),u=Object(d.a)(o,2),s=u[0],m=u[1];if(Object(n.useEffect)((function(){var e;(e=a.match.params.slug,console.log("THE SLUG",e,h.getEntries()),h.getEntries({content_type:"goBigTemplate","fields.pageIdentifier":e,include:5})).then((function(e){m(e.items[0].fields),c(!1)}))}),[]),i)return l.a.createElement("div",null);var k=s.conversionUrl,g=s.desktopOffer,f=s.videoPath,p=s.benefitsHeadline,v=s.benefitsSection,E=s.customSection,b=(s.description,s.heroCtaComponent),N=(s.logo,s.logoCollection),y=(s.metaDescription,s.metaKeywords,s.pageIdentifier,s.pageName,s.stackedSections);console.log(N);var w={template:b.fields.templateLayout||"",heroCTA:b.fields||"",ctaUrl:k||"https://account.upplan.sg/register",leader:b.fields.subHeadline?b.fields.subHeadline.content.map((function(e){return e.content})):"",offer:g||"",mediaLink:f||""},_=function(e){switch(e){case"Text Left":return"uk-flex-first@s";case"Text Right":return null;default:return"uk-flex-first@s"}},T=function(e){switch(e){case"LightGrey":return"uk-background-muted-light";case"Grey":return"uk-background-secondary uk-light";case"Blue":return"uk-background-blue uk-light";case"Purple":return"uk-background-primary uk-light";default:return"uk-background-default"}};return l.a.createElement(x,null,l.a.createElement("div",{className:"".concat(F.a.landingWrapper)},function(e){switch(e.template){case"Hero Image":return l.a.createElement(U,{data:e});case"Hero Video":return l.a.createElement(P,{data:e});case"Embed Video":return l.a.createElement(q,{data:e});default:return l.a.createElement(H,{data:e})}}(w),y&&l.a.createElement("section",{className:"uk-section uk-section-large"},l.a.createElement("div",{className:"uk-container uk-container-small uk-margin-large"},p.length&&l.a.createElement("h2",{className:"".concat(F.a.titleCenter," uk-margin-large-left uk-margin-large-right uk-text-center")},p)),l.a.createElement(R,{sections:y})),v&&l.a.createElement("section",{className:"uk-section uk-section-large uk-padding-remove-top"},l.a.createElement(M,{benefits:v})),E&&E.length&&E.map((function(e,a){return l.a.createElement("section",{key:e.fields.sectionId,className:"".concat(F.a.customSection," uk-section uk-section-small ").concat(T(e.fields.sectionColor))},l.a.createElement("div",{className:"uk-container"},l.a.createElement("div",{className:"uk-margin-large-top uk-margin-large-bottom"},l.a.createElement("div",{className:"uk-grid uk-grid-large uk-flex-middle uk-child-width-1-2@s","data-uk-grid":!0},l.a.createElement("div",{className:"".concat(_(e.fields.sectionAlignment)),"data-uk-margin":!0},l.a.createElement("h2",null,e.fields.sectionTitle),l.a.createElement("div",{className:"custom-section-copy",dangerouslySetInnerHTML:{__html:e.fields.sectionCopy}})),l.a.createElement("div",{className:"uk-flex-first","data-uk-margin":!0},l.a.createElement("img",{src:e.fields.sectionMedia.fields.file.url,alt:e.fields.sectionTitle,"data-uk-img":!0}))))))})),N&&N.length&&l.a.createElement("section",{className:"logo-grid uk-section uk-section-large"},N.map((function(e,a){var t=e.fields;return console.log(t),"grid"===t.displayType?l.a.createElement(z,{key:"logo-grid-".concat(a),items:t}):l.a.createElement(K,{key:"logo-carousel-".concat(a),items:t})})))))},Q=function(e){var a=Object.assign({},e),t=Object(n.useState)(!0),r=Object(d.a)(t,2),i=r[0],c=r[1],o=Object(n.useState)({}),u=Object(d.a)(o,2),s=u[0],m=u[1];if(Object(n.useEffect)((function(){var e;(e=a.match.params.slug,h.getEntries({content_type:"staticRichTextPage","fields.slug":e,include:5})).then((function(e){m(e.items[0].fields),c(!1)}))}),[]),i)return l.a.createElement("div",null);var k=Object(w.documentToReactComponents)(s.content);return console.log("TEXT",s),l.a.createElement("div",{className:"".concat(F.a.landingWrapper)},l.a.createElement("section",{className:"uk-section uk-section-large"},l.a.createElement("div",{className:"uk-container uk-container-small uk-margin-large"},k)),"}")},Z=function(e){return l.a.createElement(c.d,null,l.a.createElement(m,{path:"/landing/:slug",component:J}),l.a.createElement(m,{path:"/landing",component:p}),l.a.createElement(m,{path:"/static-rich-text-page/:slug",component:Q}),l.a.createElement(c.b,{path:"/",component:k}))};function Y(){return l.a.createElement(Z,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(218),t(219);i.a.render(l.a.createElement(c.c,{history:u,basename:""},l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,a){},52:function(e,a,t){e.exports={nav:"Navigation_nav__INfuO",Logo:"Navigation_Logo__1xUBl"}},53:function(e,a,t){e.exports={responsiveVideo:"Video_responsiveVideo__1xd8v",fullscreenVideo:"Video_fullscreenVideo__1q5iB",overlayGrey:"Video_overlayGrey__5fZjP",topContainer:"Video_topContainer__2ZoOG"}},54:function(e,a,t){e.exports={LogoImage:"LogoGrid_LogoImage__2cVC1"}},94:function(e,a,t){e.exports=t.p+"static/media/up-logo.75bff75e.svg"},96:function(e,a,t){e.exports={testimonialQuote:"Testimonials_testimonialQuote__3-DZ1"}},99:function(e,a,t){e.exports=t(220)}},[[99,1,2]]]);