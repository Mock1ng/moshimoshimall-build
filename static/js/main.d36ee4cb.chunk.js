(this["webpackJsonpmoshi-moshi-mall"]=this["webpackJsonpmoshi-moshi-mall"]||[]).push([[0],{33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),c=a.n(s),n=a(19),r=a.n(n),l=(a(33),a(12)),d=a(3),o=a(5),j=Object(s.createContext)(),u=function(e){var t=e.children,a=Object(s.useState)(!1),c=Object(o.a)(a,2),n=c[0],r=c[1],l=Object(s.useState)(!0),d=Object(o.a)(l,2),u=d[0],m=d[1];return Object(i.jsx)(j.Provider,{value:{isNavbarCategoryOpen:n,setIsNavbarCategoryOpen:r,setIsOpenFlashSale:m,isOpenFlashSale:u},children:t})},m=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("ul",{className:"header-menu",children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{className:"menu-item",exact:!0,to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{className:"menu-item",to:"/promo",children:"Promo"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{className:"menu-item",to:"/bestseller",children:"Terlaris"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{className:"menu-item",to:"/help",children:"Pusat Bantuan"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{className:"menu-item",to:"/contact",children:"Hubungi Kami"})})]})})},b=a.p+"static/media/dropdown-icon.c8b6f404.svg",h=function(){var e=Object(s.useContext)(j),t=e.isNavbarCategoryOpen,a=e.setIsNavbarCategoryOpen;return Object(i.jsxs)("div",{className:"dropdown-category",children:[Object(i.jsxs)("button",{className:"btn-dd-title",onClick:function(){return a((function(e){return!e}))},style:t?{filter:"brightness(60%)"}:{},children:["Kategori ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",style:t?{transform:"rotate(180deg)"}:{}})})]}),Object(i.jsxs)("ul",{className:"dd-menus",style:t?{display:"block"}:{display:"none"},children:[Object(i.jsxs)("li",{className:"dd-menu",children:["Belanja ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(i.jsxs)("li",{className:"dd-menu",children:["Travel ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(i.jsxs)("li",{className:"dd-menu",children:["Featured ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(i.jsxs)("li",{className:"dd-menu",children:["Jual ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(i.jsxs)("li",{className:"dd-menu",children:["Top Up & Tagihan ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(i.jsxs)("li",{className:"dd-menu",children:["Entertainment ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(i.jsxs)("li",{className:"dd-menu",children:["Keuangan ",Object(i.jsx)("span",{children:Object(i.jsx)("img",{src:b,alt:"dropdown icon",className:"subdropdown-icon"})})]})]})]})},p=function(){return Object(i.jsxs)("form",{className:"form-navbar",children:[Object(i.jsx)("input",{type:"text",placeholder:"Cari Nama Produk"}),Object(i.jsx)("span",{className:"magnify-icon",children:Object(i.jsx)("i",{className:"fas fa-search"})})]})},O=a.p+"static/media/cart-icon.1314163f.svg",x=function(){return Object(i.jsx)("div",{className:"cart",children:Object(i.jsx)("img",{src:O,alt:"cart icon"})})},g=a.p+"static/media/like-icon.db8aa0d9.svg",N=function(){return Object(i.jsx)("div",{className:"like",children:Object(i.jsx)("img",{src:g,alt:"heart icon"})})},f=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){document.addEventListener("scroll",(function(e){var t=document.scrollingElement.scrollTop;c(!(t>=5))}))}),[a]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"navbar-wrapper navbar-sticky "+(a?"":"navbar-shadow"),children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("div",{className:"navbar-left",children:Object(i.jsx)("h1",{className:"logo",children:"MoshiMoshiMall"})}),Object(i.jsxs)("div",{className:"navbar-center",children:[Object(i.jsx)(h,{}),Object(i.jsx)(p,{})]}),Object(i.jsxs)("div",{className:"navbar-right",children:[Object(i.jsx)(x,{}),Object(i.jsx)(N,{}),Object(i.jsx)("a",{href:"/login",className:"login",children:"Masuk"}),Object(i.jsx)("a",{href:"/signup",className:"signup",children:"Daftar"})]})]})})}),Object(i.jsx)("div",{style:{marginTop:"110px"}})]})},k=function(){var e=Object(s.useContext)(j),t=e.isNavbarCategoryOpen,a=e.setIsNavbarCategoryOpen;return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)(f,{}),Object(i.jsx)("div",{className:"dd-menus-overlay",style:t?{display:"block"}:{display:"none"},onClick:function(){return a((function(e){return!e}))}}),Object(i.jsx)(m,{})]})},v=a(4),P=a(11),y=a.n(P),S=(a(53),a(54),a.p+"static/media/banner.21cd18bc.jpg"),w={dots:!0,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,easing:"ease-in-out",pauseOnHover:!0},T=function(){return Object(i.jsx)("div",{className:"banner container",children:Object(i.jsx)("div",{className:"banner-slider",children:Object(i.jsxs)(y.a,Object(v.a)(Object(v.a)({},w),{},{children:[Object(i.jsx)("img",{src:S,alt:"banner",className:"img-slider"}),Object(i.jsx)("img",{src:S,alt:"banner",className:"img-slider"}),Object(i.jsx)("img",{src:S,alt:"banner",className:"img-slider"})]}))})})},q=a.p+"static/media/pulsa-icon.3b00609b.svg",M=a.p+"static/media/kuota-icon.34316e4a.svg",C=a.p+"static/media/listrik-icon.04c49500.svg",F=a.p+"static/media/pesawat-icon.4c5ad70f.svg",W=a.p+"static/media/kereta-icon.b03f3876.svg",B=a.p+"static/media/bus-icon.6d287b4c.svg",D=a.p+"static/media/credit-card-icon.f58b627b.svg",K=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"categories",children:[Object(i.jsxs)("ul",{className:"categories-wrapper",children:[Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:q,alt:"pulsa icon"}),Object(i.jsx)("span",{children:"Produk 1"})]}),Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:M,alt:"kuota icon"}),Object(i.jsx)("span",{children:"Produk 2"})]}),Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:C,alt:"listrik icon"}),Object(i.jsx)("span",{children:"Produk 3"})]}),Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:F,alt:"pesawat icon"}),Object(i.jsx)("span",{children:"Produk 4"})]}),Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:W,alt:"kereta icon"}),Object(i.jsx)("span",{children:"Produk 5"})]}),Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:B,alt:"bus icon"}),Object(i.jsx)("span",{children:"Produk 6"})]}),Object(i.jsxs)("li",{className:"category",children:[Object(i.jsx)("img",{src:D,alt:"credit card icon"}),Object(i.jsx)("span",{children:"Produk 7"})]})]}),Object(i.jsx)("p",{className:"categories-see-all",children:"Lihat Semua"})]})})},I=function(){return Object(i.jsxs)("div",{className:"hero",children:[Object(i.jsx)(k,{}),Object(i.jsx)(T,{}),Object(i.jsx)(K,{})]})},E=a(9),H=function(e){var t=e.img,a=e.alt,c=e.productName,n=e.qty,r=e.discount,l=e.discountPrice,d=e.actualPrice,j=Object(s.useState)((function(){return n<6})),u=Object(o.a)(j,2),m=u[0];u[1];return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"card-image",children:[Object(i.jsx)("img",{src:t,alt:a}),Object(i.jsxs)("span",{className:"tooltip",children:[r," OFF"]})]}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:c}),Object(i.jsxs)("p",{className:"stock-text",children:[Object(i.jsx)("span",{style:m?{color:"#FF0000"}:{color:"#026BB9"},children:n})," Produk Tersisa"]}),Object(i.jsxs)("div",{className:"card-description",children:[Object(i.jsxs)("p",{className:"discount",children:["Rp. ",l]}),Object(i.jsxs)("p",{className:"price",children:["Rp. ",d]})]})]})]})},L=a.p+"static/media/hot-icon.2a20b7f4.svg",A={dots:!1,infinite:!0,easing:"ease-in-out",speed:500,slidesToShow:5,swipeToSlide:!0,centerPadding:"0",responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},_=function(){var e=Object(s.useContext)(j).setIsOpenFlashSale,t=Object(E.b)((function(e){return e.flashSale})),a=t.items,c=t.timerFlashSale,n=Object(s.useState)(new Date(c.startTimer).getTime()),r=Object(o.a)(n,1)[0],l=Object(s.useState)(new Date(c.endTimer).getTime()),d=Object(o.a)(l,1)[0],u=Object(s.useState)({days:0,hours:0,minutes:0,seconds:0}),m=Object(o.a)(u,2),b=m[0],h=m[1];Object(s.useEffect)((function(){setInterval((function(){return p()}),1e3)}),[]);var p=function(){var t=(new Date).getTime();if(d&&r<t){var a=d-t,i=Math.floor(a/864e5),s=Math.floor(a%864e5/36e5),c=Math.floor(a%36e5/6e4),n=Math.floor(a%6e4/1e3),l=[1,2,3,4,5,6,7,8,9];l.includes(s)&&(s="0".concat(s)),l.includes(c)&&(c="0".concat(c)),l.includes(n)&&(n="0".concat(n)),h({days:i,hours:s,minutes:c,seconds:n,currentTime:t}),e(!(s<0))}else e(!1)};return Object(i.jsx)("div",{className:"flash-sale container",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"flash-sale-head",children:[Object(i.jsxs)("h3",{children:["Flash Sale",Object(i.jsxs)("span",{children:[Object(i.jsx)("img",{src:L,alt:"hot icon"}),"Hot!"]})]}),Object(i.jsxs)("div",{className:"timer",children:["Berakhir dalam :",Object(i.jsxs)("div",{className:"time",children:[b.hours||"00"," : ",b.minutes||"00"," : ",b.seconds||"00"]})]}),Object(i.jsx)("p",{className:"text-more",children:"Lihat Semua"})]}),Object(i.jsx)("div",{children:Object(i.jsx)(y.a,Object(v.a)(Object(v.a)({},A),{},{children:a.map((function(e){return Object(i.jsx)(H,{img:e.img,alt:e.alt,productName:e.productName,qty:e.qty,discount:e.discount,discountPrice:e.discountPrice,actualPrice:e.actualPrice},e.id)}))}))})]})})},R={dots:!1,infinite:!0,easing:"ease-in-out",speed:500,slidesToShow:5,slidesToScroll:1,swipeToSlide:!0,centerPadding:"0",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},J=function(){var e=Object(E.b)((function(e){return e.mostPopularSearches})).items;return Object(i.jsx)("div",{className:"most-popular container",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"most-popular-head",children:[Object(i.jsx)("h3",{children:"Pencarian Terpopuler"}),Object(i.jsx)("p",{children:"Lihat Semua"})]}),Object(i.jsx)(y.a,Object(v.a)(Object(v.a)({},R),{},{children:e.map((function(e){return Object(i.jsx)(H,{img:e.img,alt:e.alt,productName:e.productName,qty:e.qty,discount:e.discount,discountPrice:e.discountPrice,actualPrice:e.actualPrice},e.id)}))}))]})})},X={dots:!1,infinite:!0,easing:"ease-in-out",speed:500,slidesToShow:5,slidesToScroll:1,swipeToSlide:!0,centerPadding:"0",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},z=function(){var e=Object(E.b)((function(e){return e.bestSelling})).items;return Object(i.jsx)("div",{className:"best-selling container",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"best-selling-head",children:[Object(i.jsx)("h3",{children:"Produk Terlaris"}),Object(i.jsx)("p",{children:"Lihat Semua"})]}),Object(i.jsx)(y.a,Object(v.a)(Object(v.a)({},X),{},{children:e.map((function(e){return Object(i.jsx)(H,{img:e.img,alt:e.alt,productName:e.productName,qty:e.qty,discount:e.discount,discountPrice:e.discountPrice,actualPrice:e.actualPrice},e.id)}))}))]})})},G=a.p+"static/media/big-sized-sofa.17175035.png",U=a.p+"static/media/big-sized-wallet.a2fd2646.png",V=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"big-cart",children:[Object(i.jsxs)("div",{className:"big-cart-wrapper",style:{marginBottom:"40px"},children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:G,alt:"sofa",className:"big-cart-image"})}),Object(i.jsxs)("div",{className:"text-wrapper",children:[Object(i.jsx)("p",{className:"header-text",children:"Perabotan Rumah Tangga"}),Object(i.jsx)("p",{className:"child-text",children:"Percantik rumah anda dengan sofa nyaman dan murah."}),Object(i.jsx)("p",{className:"box-text",children:"Belanja Perabot Rumah Tangga"})]})]}),Object(i.jsxs)("div",{className:"big-cart-wrapper rtl",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:U,alt:"dompet",className:"big-cart-image"})}),Object(i.jsxs)("div",{className:"text-wrapper",children:[Object(i.jsx)("p",{className:"header-text",children:"Aksesoris Pria"}),Object(i.jsx)("p",{className:"child-text",children:"Tampil lebih keren dengan dompet kulit awet dan stylish."}),Object(i.jsx)("p",{className:"box-text",children:"Belanja Aksesoris Pria"})]})]})]})})},Q=function(e){var t=e.img,a=e.alt,s=e.category;return Object(i.jsxs)("div",{className:"card-ppc",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:t,alt:a})}),Object(i.jsxs)("div",{className:"card-desc",children:[Object(i.jsx)("p",{className:"card-category",children:s}),Object(i.jsx)("p",{className:"see-all-at-category",children:"Lihat Semua"})]})]})},Y=function(){return Object(i.jsx)("div",{style:{display:"none"}})},Z=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(1),r=Object(o.a)(n,2),l=r[0],d=r[1],j={slidesToShow:4,slidesToScroll:1,variableWidth:!0,swipeToSlide:!0,infinite:!1,speed:300,beforeChange:function(e,t){return c(e)},afterChange:function(e){return c(e)},prevArrow:0===a&&Object(i.jsx)(Y,{})};return Object(s.useEffect)((function(){c(0),d(1)}),[]),Object(i.jsx)("div",{className:"menu-slider",style:{maxHeight:"35px"},children:Object(i.jsx)(y.a,Object(v.a)(Object(v.a)({},j),{},{children:[{id:1,title:"Aksesoris Wanita"},{id:2,title:"Rumah Tangga"},{id:3,title:"Otomotif"},{id:4,title:"Fashion Pria"},{id:5,title:"Fashion Wanita"},{id:6,title:"Jacket"},{id:7,title:"Jacket Pria"},{id:8,title:"Jacket Wanita"},{id:9,title:"Blaze"},{id:10,title:"sepatu"},{id:11,title:"Kaos Kaki"},{id:12,title:"Pakaian Bayi"},{id:13,title:"Laptop"},{id:14,title:"Handphone"},{id:15,title:"Komputer"}].map((function(e){return Object(i.jsx)("a",{onClick:function(){return d(e.id)},className:l===e.id?"active":"",children:e.title},e.id)}))}))})},$=function(){var e=Object(E.b)((function(e){return e.highlight.productPerCategory})).categories;return Object(i.jsxs)("div",{className:"product-per-category",children:[Object(i.jsxs)("div",{className:"product-per-category-head",children:[Object(i.jsx)("h2",{children:"Belanja per Kategori"}),Object(i.jsx)("div",{className:"see-all-at-category",children:"Lihat Semua"})]}),Object(i.jsx)(Z,{}),Object(i.jsx)("div",{className:"ppc-cards",children:e.map((function(e){return Object(i.jsx)(Q,{category:e.title,img:e.img,alt:e.name},e.id)}))})]})},ee=function(e){var t=e.img,a=e.alt,c=e.productName,n=e.qty,r=e.discount,l=e.discountPrice,d=e.actualPrice,j=Object(s.useState)((function(){return n<6})),u=Object(o.a)(j,2),m=u[0],b=(u[1],function(e){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(e)});return Object(i.jsxs)("div",{className:"card-todays-promo",children:[Object(i.jsxs)("div",{className:"img-wrapper",children:[Object(i.jsxs)("div",{className:"discount",children:[r," OFF"]}),Object(i.jsx)("img",{src:t,alt:a})]}),Object(i.jsxs)("div",{className:"card-desc",children:[Object(i.jsx)("div",{className:"product-name",children:c}),Object(i.jsxs)("div",{className:"qty-left",children:[Object(i.jsx)("span",{style:m?{color:"#FF0000"}:{color:"#026BB9"},children:n})," Produk Tersisa"]}),Object(i.jsx)("div",{className:"discount-price",children:b(l)}),Object(i.jsx)("div",{className:"actual-price",children:b(d)})]})]})},te=a.p+"static/media/fire.2a20b7f4.svg",ae=function(){var e=Object(E.b)((function(e){return e.highlight.todaysPromo})).items;return Object(i.jsxs)("div",{className:"todays-promo",children:[Object(i.jsxs)("div",{className:"todays-promo-head",children:[Object(i.jsxs)("h2",{children:["Promo Hari Ini",Object(i.jsxs)("span",{children:[Object(i.jsx)("img",{src:te,alt:"fire icon"})," ",Object(i.jsx)("p",{children:"Hot!"})]})]}),Object(i.jsx)("div",{className:"see-all-at-promo",children:"Lihat Semua"})]}),Object(i.jsx)(Z,{}),Object(i.jsx)("div",{className:"todays-promo-cards",children:e.map((function(e){return Object(i.jsx)(ee,{img:e.img,alt:e.alt,productName:e.name,qty:e.qty,discount:e.discount,discountPrice:e.discountPrice,actualPrice:e.actualPrice},e.name)}))})]})},ie=function(){return Object(i.jsxs)("div",{className:"highlight container",children:[Object(i.jsx)($,{}),Object(i.jsx)(ae,{})]})},se=a.p+"static/media/partnert-merchant.30f1640e.svg",ce=function(){return Object(i.jsx)("div",{className:"partners",children:Object(i.jsxs)("div",{className:"partners-wrapper container",children:[Object(i.jsxs)("div",{className:"partners-left",children:[Object(i.jsx)("img",{className:"partners-icon",src:se,alt:"partner merchant"}),Object(i.jsxs)("div",{className:"partners-content",children:[Object(i.jsx)("p",{className:"partners-content-title",children:"Ingin Bergabung Menjadi Mitra MoshiMoshiMall?"}),Object(i.jsxs)("p",{className:"partners-content-desc",children:["Mudah, nyaman dan bebas komisi transaksi. ",Object(i.jsx)("span",{children:"GRATIS!"})]})]}),Object(i.jsx)("button",{className:"partners-button",children:"Gabung Mitra Sekarang"})]}),Object(i.jsx)("p",{className:"partners-link",children:"Pelajari Lebih Lanjut"})]})})},ne=function(){return Object(i.jsxs)("div",{className:"about-us container",children:[Object(i.jsx)("p",{className:"about-us-title",children:"MoshiMoshiMall - Situs Jual Beli Barang Jepang Online di Indonesia"}),Object(i.jsx)("p",{className:"about-us-desc",children:"MoshiMoshiMall merupakan situs jual beli online di Indonesia yang memiliki jutaan toko online dan menjual berbagai macam produk untuk memenuhi kebutuhan Anda. Belanja online terasa semakin mudah dan menyenangkan saat ini karena apapun yang Anda inginkan pasti bisa ditemukan di MoshiMoshiMall. Cek barang kesukaanmu, belanja kado terindah untuk si dia, beli berbagai kebutuhan rumah tangga, beli gadget terbaru yang sedang tren, belanja pakaian yang sudah kamu idamkan, sampai dengan bayar tagihan listrik setiap bulan, semua bisa kamu lakukan hanya dengan sekali klik."}),Object(i.jsx)("p",{className:"about-us-link",children:"Baca Selengkapnya"})]})},re=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"benefits-card",children:[Object(i.jsx)("img",{src:t.img,alt:t.title}),Object(i.jsxs)("div",{className:"benefits-content",children:[Object(i.jsx)("p",{className:"benefits-content-title",children:t.title}),Object(i.jsx)("p",{className:"benefits-content-desc",children:t.desc})]})]})},le=a.p+"static/media/facility-icon.e5b3667a.svg",de=a.p+"static/media/security-icon.7014a249.svg",oe=a.p+"static/media/transparent-icon.59446e03.svg",je=function(){var e=[{id:1,title:"Transparan",desc:"Pembayaran anda baru diteruskan ke penjual setelah barang anda terima.",img:oe},{id:2,title:"Aman",desc:"Bandingkan review untuk berbagai online shop terpercaya se-Indonesia.",img:de},{id:3,title:"Fasilitas Gratis",desc:"Fasilitas rekening bersama MoshiMoshi Mall tidak dikenakan biaya tambahan.",img:le}];return Object(i.jsx)("div",{className:"benefits container",children:e.map((function(e){return Object(i.jsx)(re,{data:e},e.id)}))})},ue=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(ne,{}),Object(i.jsx)(je,{})]})},me=a.p+"static/media/facebook.2db8fd65.svg",be=a.p+"static/media/twitter.e892fb1e.svg",he=a.p+"static/media/ig.0e9f9d01.svg",pe=function(){return Object(i.jsxs)("div",{className:"header-footer",children:[Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("div",{className:"footer-wrapper container",children:[Object(i.jsxs)("div",{className:"footer-content",children:[Object(i.jsx)("section",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"footer-text",onClick:function(){return window.scrollTo(0,0)},children:Object(i.jsx)(l.b,{to:"/",children:"Karir"})}),Object(i.jsx)("li",{className:"footer-text",children:"Blog"}),Object(i.jsx)("li",{className:"footer-text",children:"Official Store"}),Object(i.jsx)("li",{className:"footer-text",children:"Tagihan & Top up"}),Object(i.jsx)("li",{className:"footer-text",children:"Syarat dan ketentuan"})]})}),Object(i.jsx)("section",{className:"promotions",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"footer-text",children:"Tiket Kereta"}),Object(i.jsx)("li",{className:"footer-text",children:"Pusat Penjualan"}),Object(i.jsx)("li",{className:"footer-text",children:"Hotlist"}),Object(i.jsx)("li",{className:"footer-text",children:"Keuangan"}),Object(i.jsx)("li",{className:"footer-text",children:"Kebijakan Privasi"})]})}),Object(i.jsx)("section",{className:"become-partner",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"footer-text",children:"Bantuan Tokopedia"}),Object(i.jsx)("li",{className:"footer-text",children:"Aplikasi Tokopedia"}),Object(i.jsx)("li",{className:"footer-text",children:"Mitra Toppers"}),Object(i.jsx)("li",{className:"footer-text",children:"Daftar Official Store"})]})}),Object(i.jsx)("section",{className:"become-partner",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"footer-text",children:"Kategori"}),Object(i.jsx)("li",{className:"footer-text",children:"Kamus Tokopedia"}),Object(i.jsx)("li",{className:"footer-text",children:"Deals Tokopedia"}),Object(i.jsx)("li",{className:"footer-text",children:"Tiket Pesawat"})]})})]}),Object(i.jsxs)("div",{className:"follow",children:[Object(i.jsx)("p",{className:"footer-text",children:"Ikuti kami di : "}),Object(i.jsx)("img",{src:me,alt:"facebook logo",className:"sosmed"}),Object(i.jsx)("img",{src:be,alt:"twitter logo",className:"sosmed"}),Object(i.jsx)("img",{src:he,alt:"instagram logo",className:"sosmed"})]})]})}),Object(i.jsxs)("div",{className:"under-footer container",children:[Object(i.jsx)("p",{children:"\xa9"}),Object(i.jsxs)("div",{className:"block",children:[Object(i.jsx)("p",{children:"2020-2021, MoshiMoshiMall"}),Object(i.jsx)("p",{children:"Server process time: 0.096 secs."})]})]})]})},Oe=function(){var e=c.a.useContext(j).isOpenFlashSale;return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)(I,{}),Object(i.jsx)(ie,{}),e&&Object(i.jsx)(_,{}),Object(i.jsx)(J,{}),Object(i.jsx)(z,{}),Object(i.jsx)(V,{}),Object(i.jsx)(ce,{}),Object(i.jsx)(ue,{}),Object(i.jsx)(pe,{})]})},xe=function(){return Object(i.jsx)("div",{className:"promo",children:Object(i.jsx)(I,{})})},ge=function(){return Object(i.jsx)("div",{className:"bestseller",children:Object(i.jsx)(I,{})})},Ne=function(){return Object(i.jsx)("div",{className:"help",children:Object(i.jsx)(I,{})})},fe=function(){return Object(i.jsx)("div",{className:"contact",children:Object(i.jsx)(I,{})})};a(56);var ke=function(){return Object(i.jsx)(u,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{path:"/",exact:!0,component:Oe}),Object(i.jsx)(d.a,{path:"/promo",exact:!0,component:xe}),Object(i.jsx)(d.a,{path:"/bestseller",exact:!0,component:ge}),Object(i.jsx)(d.a,{path:"/help",exact:!0,component:Ne}),Object(i.jsx)(d.a,{path:"/contact",exact:!0,component:fe})]})})})})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))},Pe=a(14),ye=a.p+"static/media/tas-pink.94791830.png",Se=a.p+"static/media/dompet-coklat.e0390e50.png",we=a.p+"static/media/sofa-ijo.363748d1.png",Te=a.p+"static/media/sabun-muka.dbf85db5.png",qe=a.p+"static/media/sabun-batang.f4e6ea15.png",Me={productPerCategory:{categories:[{id:"aksesosris-wanita",title:"Aksesoris Wanita",img:ye,url:""},{id:"dompet-coklat",title:"Aksesoris Pria",img:Se,url:""},{id:"perabotan-rumah-tangga",title:"Perabotan Rumah Tangga",img:we,url:""}]},todaysPromo:{items:[{id:"white-skin-cream-whitening",name:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:1e5,actualPrice:3e4,img:Te},{id:"pink-soap",name:"Pink Soap",qty:78,discount:"50%",discountPrice:3e4,actualPrice:15e3,img:qe},{id:"sofa-klasik-putih",name:"Sofa Klasik Putih",qty:1,discount:"30%",discountPrice:3e6,actualPrice:21e5,img:a.p+"static/media/kursi-putih.6134b0a8.png"},{id:"dompet-kulit-pria",name:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:248e3,actualPrice:124e3,img:Se}]}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return e},Fe="flashsale-timer-seted",We={timerFlashSale:{startTimer:"11/26/2020 21:40",endTimer:"12/20/2020 00:00"},items:[{id:"pink-soap",productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:qe,alt:"sabun batang"},{id:"white-skin-cream-whitening",productName:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:"30.000",actualPrice:"15.000",img:Te,alt:"sabun muka"},{id:"tas-selempang-wanita",productName:"Tas Selempang Wanita",qty:1,discount:"20%",discountPrice:"30.000",actualPrice:"15.000",img:ye,alt:"tas pink"},{id:"dompet-kulit-pria",productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:Se,alt:"dompet coklat"},{id:"sofa-hijau",productName:"Sofa Hijau",qty:1,discount:"10%",discountPrice:"30.000",actualPrice:"15.000",img:we,alt:"kursi hijau"},{id:"pink-soap2",productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:qe,alt:"sabun batang"},{id:"white-skin-cream-whitening2",productName:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:"30.000",actualPrice:"15.000",img:Te,alt:"sabun muka"},{id:"tas-selempang-wanita2",productName:"Tas Selempang Wanita",qty:1,discount:"20%",discountPrice:"30.000",actualPrice:"15.000",img:ye,alt:"tas pink"},{id:"dompet-kulit-pria2",productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:Se,alt:"dompet coklat"},{id:"sofa-hijau2",productName:"Sofa Hijau",qty:1,discount:"10%",discountPrice:"30.000",actualPrice:"15.000",img:we,alt:"kursi hijau"}]},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;return t.type===Fe?Object(v.a)(Object(v.a)({},e),{},{timerFlashSale:t.payload}):e},De={items:[{id:"sofa-hijau",productName:"Sofa Hijau",qty:1,discount:"10%",discountPrice:"30.000",actualPrice:"15.000",img:we,alt:"kursi hijau"},{id:"pink-soap2",productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:qe,alt:"sabun batang"},{id:"white-skin-cream-whitening2",productName:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:"30.000",actualPrice:"15.000",img:Te,alt:"sabun muka"},{id:"tas-selempang-wanita2",productName:"Tas Selempang Wanita",qty:1,discount:"20%",discountPrice:"30.000",actualPrice:"15.000",img:ye,alt:"tas pink"},{id:"dompet-kulit-pria2",productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:Se,alt:"dompet coklat"},{id:"sofa-hijau2",productName:"Sofa Hijau",qty:1,discount:"10%",discountPrice:"30.000",actualPrice:"15.000",img:we,alt:"kursi hijau"},{id:"pink-soap",productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:qe,alt:"sabun batang"},{id:"white-skin-cream-whitening",productName:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:"30.000",actualPrice:"15.000",img:Te,alt:"sabun muka"},{id:"tas-selempang-wanita",productName:"Tas Selempang Wanita",qty:1,discount:"20%",discountPrice:"30.000",actualPrice:"15.000",img:ye,alt:"tas pink"},{id:"dompet-kulit-pria",productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:Se,alt:"dompet coklat"}]},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return e},Ie={items:[{id:"tas-selempang-wanita",productName:"Tas Selempang Wanita",qty:1,discount:"20%",discountPrice:"30.000",actualPrice:"15.000",img:ye,alt:"tas pink"},{id:"dompet-kulit-pria",productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:Se,alt:"dompet coklat"},{id:"sofa-hijau",productName:"Sofa Hijau",qty:1,discount:"10%",discountPrice:"30.000",actualPrice:"15.000",img:we,alt:"kursi hijau"},{id:"pink-soap2",productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:qe,alt:"sabun batang"},{id:"white-skin-cream-whitening2",productName:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:"30.000",actualPrice:"15.000",img:Te,alt:"sabun muka"},{id:"tas-selempang-wanita2",productName:"Tas Selempang Wanita",qty:1,discount:"20%",discountPrice:"30.000",actualPrice:"15.000",img:ye,alt:"tas pink"},{id:"dompet-kulit-pria2",productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:Se,alt:"dompet coklat"},{id:"sofa-hijau2",productName:"Sofa Hijau",qty:1,discount:"10%",discountPrice:"30.000",actualPrice:"15.000",img:we,alt:"kursi hijau"},{id:"pink-soap",productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:qe,alt:"sabun batang"},{id:"white-skin-cream-whitening",productName:"White Skin Cream Whitening",qty:21,discount:"70%",discountPrice:"30.000",actualPrice:"15.000",img:Te,alt:"sabun muka"}]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return e},He=Object(Pe.b)({highlight:Ce,flashSale:Be,bestSelling:Ke,mostPopularSearches:Ee}),Le=Object(Pe.c)(He,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(E.a,{store:Le,children:Object(i.jsx)(ke,{})})}),document.getElementById("root")),ve()}},[[57,1,2]]]);
//# sourceMappingURL=main.d36ee4cb.chunk.js.map