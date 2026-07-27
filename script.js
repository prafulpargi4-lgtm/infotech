/* ===========================
   FOOTER
=========================== */

footer{
    background:#050b18;
    padding:70px 20px 30px;
    text-align:center;
    border-top:1px solid rgba(255,255,255,.08);
}

.footer-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
}

.footer-logo{
    display:flex;
    align-items:center;
    gap:12px;
}

.footer-logo img{
    width:50px;
    height:50px;
}

.footer-logo h2{
    font-size:32px;
    background:linear-gradient(90deg,#00e5ff,#fff);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

.social-icons{
    display:flex;
    gap:18px;
}

.social-icons a{
    width:50px;
    height:50px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#00e5ff;
    color:#000;
    transition:.3s;
}

.social-icons a:hover{
    transform:translateY(-6px);
}

.copyright{
    color:#999;
}

/* ===========================
   FLOATING BUTTONS
=========================== */

.whatsapp,
.call-btn,
.top-btn{
    position:fixed;
    width:58px;
    height:58px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    z-index:999;
}

.whatsapp{
    left:20px;
    bottom:20px;
    background:#25D366;
    color:#fff;
}

.call-btn{
    left:20px;
    bottom:90px;
    background:#0d6efd;
    color:#fff;
}

.top-btn{
    right:20px;
    bottom:20px;
    background:#00e5ff;
    color:#000;
}

/* ===========================
   MOBILE
=========================== */

@media(max-width:768px){

.hero-content,
.about-container,
.contact-container{
grid-template-columns:1fr;
text-align:center;
}

.hero-text h1{
font-size:40px;
}

.nav-links{
position:absolute;
top:80px;
left:-100%;
width:100%;
background:#071d49;
flex-direction:column;
padding:30px;
transition:.4s;
}

.nav-links.active{
left:0;
}

.menu-btn{
display:block;
}

}

/* ===========================
   SCROLL ANIMATION
=========================== */

.hero-text,
.about-text,
.service-card,
.project-card,
.contact-info,
.contact-form{
opacity:0;
transform:translateY(40px);
transition:.8s;
}

.show{
opacity:1;
transform:translateY(0);
}

/* ===========================
   SCROLLBAR
=========================== */

::-webkit-scrollbar{
width:10px;
}

::-webkit-scrollbar-thumb{
background:#00e5ff;
border-radius:20px;
}