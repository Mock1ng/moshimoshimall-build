(this["webpackJsonpmoshi-moshi-mall"]=this["webpackJsonpmoshi-moshi-mall"]||[]).push([[0],{30:function(e,a,s){},52:function(e,a,s){},53:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(1),i=s.n(c),n=s(23),r=s.n(n),l=(s(30),s(7)),j=s(2),d=s(8),o=s.p+"static/media/sabun-muka.dbf85db5.png",b=s.p+"static/media/sabun-batang.f4e6ea15.png",m=s.p+"static/media/kursi-putih.6134b0a8.png",x=s.p+"static/media/dompet-coklat.e0390e50.png",h=Object(c.createContext)(),u=function(e){var a=e.children,s=Object(c.useState)(!1),i=Object(d.a)(s,2),n=i[0],r=i[1],l=[{productName:"White Skin Cream",qty:21,discount:"70%",discountPrice:"100.000",actualPrice:"30.000",img:o,alt:"sabun muka"},{productName:"Pink Soap",qty:78,discount:"50%",discountPrice:"30.000",actualPrice:"15.000",img:b,alt:"sabun batang"},{productName:"Sofa Klasik Putih",qty:1,discount:"30%",discountPrice:"3.000.000",actualPrice:"2.100.000",img:m,alt:"kursi putih"},{productName:"Dompet Kulit Pria",qty:3,discount:"50%",discountPrice:"248.000",actualPrice:"124.000",img:x,alt:"dompet coklat"}];return Object(t.jsx)(h.Provider,{value:{isNavbarCategoryOpen:n,setIsNavbarCategoryOpen:r,todaysPromoProducts:l},children:a})},O=function(){return Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("ul",{className:"header-menu",children:[Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{className:"menu-item",exact:!0,to:"/",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{className:"menu-item",to:"/promo",children:"Promo"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{className:"menu-item",to:"/bestseller",children:"Terlaris"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{className:"menu-item",to:"/help",children:"Pusat Bantuan"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{className:"menu-item",to:"/contact",children:"Hubungi Kami"})})]})})},p=s.p+"static/media/dropdown-icon.c8b6f404.svg",g=function(){var e=Object(c.useContext)(h),a=e.isNavbarCategoryOpen,s=e.setIsNavbarCategoryOpen;return Object(t.jsxs)("div",{className:"dropdown-category",children:[Object(t.jsxs)("button",{className:"btn-dd-title",onClick:function(){return s((function(e){return!e}))},style:a?{filter:"brightness(60%)"}:{},children:["Kategori ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",style:a?{transform:"rotate(180deg)"}:{}})})]}),Object(t.jsxs)("ul",{className:"dd-menus",style:a?{display:"block"}:{display:"none"},children:[Object(t.jsxs)("li",{className:"dd-menu",children:["Belanja ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(t.jsxs)("li",{className:"dd-menu",children:["Travel ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(t.jsxs)("li",{className:"dd-menu",children:["Featured ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(t.jsxs)("li",{className:"dd-menu",children:["Jual ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(t.jsxs)("li",{className:"dd-menu",children:["Top Up & Tagihan ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(t.jsxs)("li",{className:"dd-menu",children:["Entertainment ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]}),Object(t.jsxs)("li",{className:"dd-menu",children:["Keuangan ",Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:p,alt:"dropdown icon",className:"subdropdown-icon"})})]})]})]})},N=function(){return Object(t.jsxs)("form",{className:"form-navbar",children:[Object(t.jsx)("input",{type:"text",placeholder:"Cari Nama Produk"}),Object(t.jsx)("span",{className:"magnify-icon",children:Object(t.jsx)("i",{className:"fas fa-search"})})]})},f=s.p+"static/media/cart-icon.1314163f.svg",v=function(){return Object(t.jsx)("div",{className:"cart",children:Object(t.jsx)("img",{src:f,alt:"cart icon"})})},k=s.p+"static/media/like-icon.db8aa0d9.svg",y=function(){return Object(t.jsx)("div",{className:"like",children:Object(t.jsx)("img",{src:k,alt:"heart icon"})})},P=function(){return Object(t.jsx)("div",{className:"navbar-wrapper",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("nav",{className:"navbar",children:[Object(t.jsx)("div",{className:"navbar-left",children:Object(t.jsx)("h1",{className:"logo",children:"MoshiMoshiMall"})}),Object(t.jsxs)("div",{className:"navbar-center",children:[Object(t.jsx)(g,{}),Object(t.jsx)(N,{})]}),Object(t.jsxs)("div",{className:"navbar-right",children:[Object(t.jsx)(v,{}),Object(t.jsx)(y,{}),Object(t.jsx)("a",{href:"/login",className:"login",children:"Masuk"}),Object(t.jsx)("a",{href:"/signup",className:"signup",children:"Daftar"})]})]})})})},w=function(){var e=Object(c.useContext)(h),a=e.isNavbarCategoryOpen,s=e.setIsNavbarCategoryOpen;return Object(t.jsxs)("header",{className:"header",children:[Object(t.jsx)(P,{}),Object(t.jsx)("div",{className:"dd-menus-overlay",style:a?{display:"block"}:{display:"none"},onClick:function(){return s((function(e){return!e}))}}),Object(t.jsx)(O,{})]})},T=s(10),M=s(15),S=s.n(M),C=(s(50),s(51),s.p+"static/media/banner.21cd18bc.jpg"),B={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},K=function(){return Object(t.jsx)("div",{className:"banner container",children:Object(t.jsx)("div",{className:"banner-slider",children:Object(t.jsxs)(S.a,Object(T.a)(Object(T.a)({},B),{},{children:[Object(t.jsx)("img",{src:C,alt:"banner",className:"img-slider"}),Object(t.jsx)("img",{src:C,alt:"banner",className:"img-slider"}),Object(t.jsx)("img",{src:C,alt:"banner",className:"img-slider"})]}))})})},F=s.p+"static/media/pulsa-icon.3b00609b.svg",A=s.p+"static/media/kuota-icon.34316e4a.svg",I=s.p+"static/media/listrik-icon.04c49500.svg",L=s.p+"static/media/pesawat-icon.4c5ad70f.svg",q=s.p+"static/media/kereta-icon.b03f3876.svg",J=s.p+"static/media/bus-icon.6d287b4c.svg",H=s.p+"static/media/credit-card-icon.f58b627b.svg",R=function(){return Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"categories",children:[Object(t.jsxs)("ul",{className:"categories-wrapper",children:[Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:F,alt:"pulsa icon"}),Object(t.jsx)("span",{children:"Produk 1"})]}),Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:A,alt:"kuota icon"}),Object(t.jsx)("span",{children:"Produk 2"})]}),Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:I,alt:"listrik icon"}),Object(t.jsx)("span",{children:"Produk 3"})]}),Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:L,alt:"pesawat icon"}),Object(t.jsx)("span",{children:"Produk 4"})]}),Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:q,alt:"kereta icon"}),Object(t.jsx)("span",{children:"Produk 5"})]}),Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:J,alt:"bus icon"}),Object(t.jsx)("span",{children:"Produk 6"})]}),Object(t.jsxs)("li",{className:"category",children:[Object(t.jsx)("img",{src:H,alt:"credit card icon"}),Object(t.jsx)("span",{children:"Produk 7"})]})]}),Object(t.jsx)("p",{className:"categories-see-all",children:"Lihat Semua"})]})})},W=function(){return Object(t.jsxs)("div",{className:"hero",children:[Object(t.jsx)(w,{}),Object(t.jsx)(K,{}),Object(t.jsx)(R,{})]})},D=function(){return Object(t.jsx)("div",{className:"flash-sale container",children:Object(t.jsx)("div",{className:"flash-sale-head"})})},z=s.p+"static/media/big-sized-sofa.17175035.png",E=s.p+"static/media/big-sized-wallet.a2fd2646.png",G=function(){return Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"big-cart",children:[Object(t.jsxs)("div",{className:"big-cart-wrapper",style:{marginBottom:"40px"},children:[Object(t.jsx)("div",{className:"img-wrapper",children:Object(t.jsx)("img",{src:z,alt:"sofa",className:"big-cart-image"})}),Object(t.jsxs)("div",{className:"text-wrapper-left",children:[Object(t.jsx)("p",{className:"header-text",children:"Perabotan Rumah Tangga"}),Object(t.jsx)("p",{className:"child-text",children:"Percantik rumah anda dengan sofa nyaman dan murah."}),Object(t.jsx)("p",{className:"box-text",children:"Belanja Perabot Rumah Tangga"})]})]}),Object(t.jsxs)("div",{className:"big-cart-wrapper",children:[Object(t.jsxs)("div",{className:"text-wrapper-right",children:[Object(t.jsx)("p",{className:"header-text",children:"Aksesoris Pria"}),Object(t.jsx)("p",{className:"child-text",children:"Tampil lebih keren dengan dompet kulit awet dan stylish."}),Object(t.jsx)("p",{className:"box-text",children:"Belanja Aksesoris Pria"})]}),Object(t.jsx)("div",{className:"img-wrapper",children:Object(t.jsx)("img",{src:E,alt:"dompet",className:"big-cart-image"})})]})]})})},U=s.p+"static/media/tas-pink.94791830.png",Q=s.p+"static/media/sofa-ijo.363748d1.png",V=function(e){var a=e.img,s=e.alt,c=e.category;return Object(t.jsxs)("div",{className:"card-ppc",children:[Object(t.jsx)("div",{className:"img-wrapper",children:Object(t.jsx)("img",{src:a,alt:s})}),Object(t.jsxs)("div",{className:"card-desc",children:[Object(t.jsx)("p",{className:"card-category",children:c}),Object(t.jsx)("p",{className:"see-all-at-category",children:"Lihat Semua"})]})]})},X=function(){return Object(t.jsx)("div",{style:{display:"none"}})},Y=function(){var e=Object(c.useState)(0),a=Object(d.a)(e,2),s=a[0],i=a[1],n=Object(c.useState)(1),r=Object(d.a)(n,2),l=r[0],j=r[1],o={slidesToShow:4,slidesToScroll:1,variableWidth:!0,swipeToSlide:!0,infinite:!1,speed:300,beforeChange:function(e,a){return i(e)},afterChange:function(e){return i(e)},prevArrow:0===s&&Object(t.jsx)(X,{})};return Object(c.useEffect)((function(){i(0),j(1)}),[]),Object(t.jsx)("div",{className:"menu-slider",style:{maxHeight:"35px"},children:Object(t.jsx)(S.a,Object(T.a)(Object(T.a)({},o),{},{children:[{id:1,title:"Aksesoris Wanita"},{id:2,title:"Rumah Tangga"},{id:3,title:"Otomotif"},{id:4,title:"Fashion Pria"},{id:5,title:"Fashion Wanita"},{id:6,title:"Jacket"},{id:7,title:"Jacket Pria"},{id:8,title:"Jacket Wanita"},{id:9,title:"Blaze"},{id:10,title:"sepatu"},{id:11,title:"Kaos Kaki"},{id:12,title:"Pakaian Bayi"},{id:13,title:"Laptop"},{id:14,title:"Handphone"},{id:15,title:"Komputer"}].map((function(e){return Object(t.jsx)("a",{onClick:function(){return j(e.id)},className:l===e.id?"active":"",children:e.title})}))}))})},Z=function(){return Object(t.jsxs)("div",{className:"product-per-category",children:[Object(t.jsxs)("div",{className:"product-per-category-head",children:[Object(t.jsx)("h2",{children:"Belanja per Kategori"}),Object(t.jsx)("div",{className:"see-all-at-category",children:"Lihat Semua"})]}),Object(t.jsx)(Y,{}),Object(t.jsxs)("div",{className:"ppc-cards",children:[Object(t.jsx)(V,{img:U,alt:"tas pink",category:"Aksesoris Wanita"}),Object(t.jsx)(V,{img:x,alt:"dompet coklat",category:"Aksesoris Pria"}),Object(t.jsx)(V,{img:Q,alt:"sofa ijo",category:"Perabotan Rumah Tangga Banget"})]})]})},$=function(e){var a=e.img,s=e.alt,i=e.productName,n=e.qty,r=e.discount,l=e.discountPrice,j=e.actualPrice,o=Object(c.useState)((function(){return n<6})),b=Object(d.a)(o,2),m=b[0];b[1];return Object(t.jsxs)("div",{className:"card-todays-promo",children:[Object(t.jsxs)("div",{className:"img-wrapper",children:[Object(t.jsxs)("div",{className:"discount",children:[r," OFF"]}),Object(t.jsx)("img",{src:a,alt:s})]}),Object(t.jsxs)("div",{className:"card-desc",children:[Object(t.jsx)("div",{className:"product-name",children:i}),Object(t.jsxs)("div",{className:"qty-left",children:[Object(t.jsx)("span",{style:m?{color:"#FF0000"}:{color:"#026BB9"},children:n})," Produk Tersisa"]}),Object(t.jsxs)("div",{className:"discount-price",children:["Rp. ",l]}),Object(t.jsxs)("div",{className:"actual-price",children:["Rp. ",j]})]})]})},_=s.p+"static/media/fire.2a20b7f4.svg",ee=function(){var e=Object(c.useContext)(h).todaysPromoProducts;return Object(t.jsxs)("div",{className:"todays-promo",children:[Object(t.jsxs)("div",{className:"todays-promo-head",children:[Object(t.jsxs)("h2",{children:["Promo Hari Ini",Object(t.jsxs)("span",{children:[Object(t.jsx)("img",{src:_,alt:"fire icon"})," ",Object(t.jsx)("p",{children:"Hot!"})]})]}),Object(t.jsx)("div",{className:"see-all-at-promo",children:"Lihat Semua"})]}),Object(t.jsx)(Y,{}),Object(t.jsx)("div",{className:"todays-promo-cards",children:e.map((function(e){return Object(t.jsx)($,{img:e.img,alt:e.alt,productName:e.productName,qty:e.qty,discount:e.discount,discountPrice:e.discountPrice,actualPrice:e.actualPrice})}))})]})},ae=function(){return Object(t.jsxs)("div",{className:"highlight container",children:[Object(t.jsx)(Z,{}),Object(t.jsx)(ee,{})]})},se=s.p+"static/media/partnert-merchant.30f1640e.svg",te=function(){return Object(t.jsx)("div",{className:"partners",children:Object(t.jsxs)("div",{className:"partners-wrapper container",children:[Object(t.jsxs)("div",{className:"partners-left",children:[Object(t.jsx)("img",{className:"partners-icon",src:se,alt:"partner merchant"}),Object(t.jsxs)("div",{className:"partners-content",children:[Object(t.jsx)("p",{className:"partners-content-title",children:"Ingin Bergabung Menjadi Mitra MoshiMoshiMall?"}),Object(t.jsxs)("p",{className:"partners-content-desc",children:["Mudah, nyaman dan bebas komisi transaksi. ",Object(t.jsx)("span",{children:"GRATIS!"})]})]}),Object(t.jsx)("button",{className:"partners-button",children:"Gabung Mitra Sekarang"})]}),Object(t.jsx)("a",{href:"#",className:"partners-link",children:"Pelajari Lebih Lanjut"})]})})},ce=function(){return Object(t.jsxs)("div",{className:"about-us container",children:[Object(t.jsx)("p",{className:"about-us-title",children:"MoshiMoshiMall - Situs Jual Beli Barang Jepang Online di Indonesia"}),Object(t.jsx)("p",{className:"about-us-desc",children:"MoshiMoshiMall merupakan situs jual beli online di Indonesia yang memiliki jutaan toko online dan menjual berbagai macam produk untuk memenuhi kebutuhan Anda. Belanja online terasa semakin mudah dan menyenangkan saat ini karena apapun yang Anda inginkan pasti bisa ditemukan di MoshiMoshiMall. Cek barang kesukaanmu, belanja kado terindah untuk si dia, beli berbagai kebutuhan rumah tangga, beli gadget terbaru yang sedang tren, belanja pakaian yang sudah kamu idamkan, sampai dengan bayar tagihan listrik setiap bulan, semua bisa kamu lakukan hanya dengan sekali klik."}),Object(t.jsx)("a",{href:"#",className:"about-us-link",children:"Baca Selengkapnya"})]})},ie=function(e){var a=e.data;return Object(t.jsxs)("div",{className:"benefits-card",children:[Object(t.jsx)("img",{src:a.img,alt:a.title}),Object(t.jsxs)("div",{className:"benefits-content",children:[Object(t.jsx)("p",{className:"benefits-content-title",children:a.title}),Object(t.jsx)("p",{className:"benefits-content-desc",children:a.desc})]})]})},ne=s.p+"static/media/facility-icon.e5b3667a.svg",re=s.p+"static/media/security-icon.7014a249.svg",le=s.p+"static/media/transparent-icon.59446e03.svg",je=function(){var e=[{id:1,title:"Transparan",desc:"Pembayaran anda baru diteruskan ke penjual setelah barang anda terima.",img:le},{id:2,title:"Aman",desc:"Bandingkan review untuk berbagai online shop terpercaya se-Indonesia.",img:re},{id:3,title:"Fasilitas Gratis",desc:"Fasilitas rekening bersama MoshiMoshi Mall tidak dikenakan biaya tambahan.",img:ne}];return Object(t.jsx)("div",{className:"benefits container",children:e.map((function(e){return Object(t.jsx)(ie,{data:e})}))})},de=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(ce,{}),Object(t.jsx)(je,{})]})},oe=s(13),be=s.p+"static/media/facebook.2db8fd65.svg",me=s.p+"static/media/twitter.e892fb1e.svg",xe=s.p+"static/media/ig.0e9f9d01.svg",he=function(){var e;return Object(t.jsxs)("div",{className:"header-footer",children:[Object(t.jsx)("div",{className:"footer",children:Object(t.jsxs)("div",{className:"footer-wrapper container",children:[Object(t.jsxs)("div",{className:"footer-content",children:[Object(t.jsx)("section",{children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{className:"footer-text",onClick:function(){return window.scrollTo(0,0)},children:Object(t.jsx)(l.b,{to:"/",children:"Karir"})}),Object(t.jsx)("li",(e={className:"footer-text"},Object(oe.a)(e,"className","footer-text"),Object(oe.a)(e,"children","Blog"),e)),Object(t.jsx)("li",{className:"footer-text",children:"Official Store"}),Object(t.jsx)("li",{className:"footer-text",children:"Tagihan & Top up"}),Object(t.jsx)("li",{className:"footer-text",children:"Syarat dan ketentuan"})]})}),Object(t.jsx)("section",{className:"promotions",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{className:"footer-text",children:"Tiket Kereta"}),Object(t.jsx)("li",{className:"footer-text",children:"Pusat Penjualan"}),Object(t.jsx)("li",{className:"footer-text",children:"Hotlist"}),Object(t.jsx)("li",{className:"footer-text",children:"Keuangan"}),Object(t.jsx)("li",{className:"footer-text",children:"Kebijakan Privasi"})]})}),Object(t.jsx)("section",{className:"become-partner",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{className:"footer-text",children:"Bantuan Tokopedia"}),Object(t.jsx)("li",{className:"footer-text",children:"Aplikasi Tokopedia"}),Object(t.jsx)("li",{className:"footer-text",children:"Mitra Toppers"}),Object(t.jsx)("li",{className:"footer-text",children:"Daftar Official Store"})]})}),Object(t.jsx)("section",{className:"become-partner",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{className:"footer-text",children:"Kategori"}),Object(t.jsx)("li",{className:"footer-text",children:"Kamus Tokopedia"}),Object(t.jsx)("li",{className:"footer-text",children:"Deals Tokopedia"}),Object(t.jsx)("li",{className:"footer-text",children:"Tiket Pesawat"})]})})]}),Object(t.jsxs)("div",{className:"follow",children:[Object(t.jsx)("p",{className:"footer-text",children:"Ikuti kami di : "}),Object(t.jsx)("img",{src:be}),Object(t.jsx)("img",{src:me}),Object(t.jsx)("img",{src:xe})]})]})}),Object(t.jsxs)("div",{className:"under-footer container",children:[Object(t.jsx)("p",{children:"\xa9"}),Object(t.jsxs)("div",{className:"block",children:[Object(t.jsx)("p",{children:"2020-2021, MoshiMoshiMall"}),Object(t.jsx)("p",{children:"Server process time: 0.096 secs."})]})]})]})},ue=function(){return Object(t.jsxs)("div",{className:"home",children:[Object(t.jsx)(W,{}),Object(t.jsx)(ae,{}),Object(t.jsx)(D,{}),Object(t.jsx)(G,{}),Object(t.jsx)(te,{}),Object(t.jsx)(de,{}),Object(t.jsx)(he,{})]})},Oe=function(){return Object(t.jsx)("div",{className:"promo",children:Object(t.jsx)(W,{})})},pe=function(){return Object(t.jsx)("div",{className:"bestseller",children:Object(t.jsx)(W,{})})},ge=function(){return Object(t.jsx)("div",{className:"help",children:Object(t.jsx)(W,{})})},Ne=function(){return Object(t.jsx)("div",{className:"contact",children:Object(t.jsx)(W,{})})};s(52);var fe=function(){return Object(t.jsx)(u,{children:Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(l.a,{children:Object(t.jsxs)(j.c,{children:[Object(t.jsx)(j.a,{path:"/",exact:!0,component:ue}),Object(t.jsx)(j.a,{path:"/promo",exact:!0,component:Oe}),Object(t.jsx)(j.a,{path:"/bestseller",exact:!0,component:pe}),Object(t.jsx)(j.a,{path:"/help",exact:!0,component:ge}),Object(t.jsx)(j.a,{path:"/contact",exact:!0,component:Ne})]})})})})},ve=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,n=a.getTTFB;s(e),t(e),c(e),i(e),n(e)}))};r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(fe,{})}),document.getElementById("root")),ve()}},[[53,1,2]]]);
//# sourceMappingURL=main.34cb3aa4.chunk.js.map