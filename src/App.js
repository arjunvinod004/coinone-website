
import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import 'typed.js'
import '@splidejs/splide/dist/css/splide.min.css';
import axios from 'axios';
import { ReactTyped } from "react-typed";
import './App.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function App() {
  const skewUpRef = useRef([]);
  console.log(skewUpRef);
  return (
    <body>
    {/* Start Header */}
    <Header />
    {/* End Header */}

    {/* <!-- ======= Hero Section ======= --> */}
<section id="hero" className="hero d-flex align-items-center">
  <video autoPlay muted loop id="bg-video">
    <source src={require('../src/images/coinone 1.mp4')} type="video/mp4" />
  </video>
  <div className="video-overlay">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center" style={{ marginTop: '280px' }}>
              <h1 data-aos="fade-up">
                We develop <br />
                <span>
                  <ReactTyped
                    strings={["smart and scalable solution", "custom Mobile & Web App"]}
                    typeSpeed={120}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>

              <h2 ref={(el) => {
                if (el && !skewUpRef.current.includes(el)) {
                  skewUpRef.current.push(el);
                }
              }}>
                We build high-performing digital products tailored for your business.
              </h2>

              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#services" type="button" style={{ fontSize: '14px' }} className="btn btn-outline-light btn-lg mx-2">
                  Our Services <i className="bi bi-arrow-right mx-1"></i>
                </a>

                <Link to="/contact">
                  <button type="button" style={{ fontSize: '14px' }} className="btn btn-dark btn-lg">
                    Get in touch <i className="bi bi-envelope mx-1"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<p id="about"></p>


      {/* <!-- End Hero --> */}

      <main id="main" >
        <section  class="bg-light paddingtop80" >
   <div class="container features_mbg" data-aos="fade-up" data-aos-delay="100">
            <div class="row flex-row-reverse">
              <div class="col-md-12 col-lg-9 features_box_bg">
                <div class="row  ">
                  <div class="features_text" >
                    <h3 className='font-bold text-dark ' ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Why choose Coinone Global Solution ?</h3>
                    <p>Coinone Global Solution is committed to connecting businesses across the world towards digitalisation highlighting the knowledge of skills. We, the ideal digital agency, provide bespoke solutions to meet all your digital needs. Coinone aims to expand, innovate, or enhance businesses and propel your projects to new heights. Coinone holds the power for better experiences.
                    We as a Team, ensure to develop products in high standards keeping the technology in mind and you receive consistent quality deliverable. 
Coinone always make sure to deliver the best quality products keeping the customer satisfaction up to mark.
                    </p>
                  </div>
                  
                  <div class="col-md-6 features_box f_box1" >

                    <h3> 12 +</h3>
                    <p> Years of Experiences </p>
                  </div>
                  <div class="col-md-6 features_box f_box2">
                    <h3> 1000 +</h3>
                    <p>  Projects Completed </p>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-12 col-lg-3  bubbles_anmtn_bg">
                <img src={`${process.env.PUBLIC_URL}/assets/images/coinone home.jpg`} class="img-fluid rounded" alt="best web designers in kerala
                  "/>

              </div>
            </div>
          </div>
        </section>
<p id="services"></p>
    <section  class="page-service--list lazyloaded paddingtop80 " >
          <div class="container">
          <div className="section-title"  ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >
          <h2 className=''>our Services</h2>
          
        </div>


            <div class="row "  >
              <div class="col-md-6 col-lg-4 box-gap"  >
                <Link to={`/services/erp`}>
                <a href="#">
                  <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                    <div class="icon icon-shape lazyloaded"> <img alt="icon" className='img-fluid lazyloaded' src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/60/external-erp-digital-transformation-parzival-1997-outline-color-parzival-1997.png"  />
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>ERP Development</h5> <p >We Enterprise resource planning (ERP) is the integrated management of main business processes</p>
                  </div>
                </a>
                </Link>
              </div>


              <div class="col-md-6 col-lg-4 box-gap"  >
                <Link to={`/services/web`}>
                <a href="#">
                  <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                    <div class="icon icon-shape lazyloaded"> <img alt="icon" className='img-fluid lazyloaded' src="https://img.icons8.com/color/48/code.png"  />
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Web Development</h5> <p >We design top-quality websites that will be a sure asset for your business and brand concepts.</p>
                  </div>
                </a>
                </Link>
              </div>

              <div class="col-md-6 col-lg-4 box-gap"  >
                <Link to={`/services/mobile`}>
                <a href="#">
                  <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                    <div class="icon icon-shape lazyloaded"> <img alt="icon" className='img-fluid lazyloaded' src="https://img.icons8.com/external-vectorslab-flat-vectorslab/60/external-33-web-design-and-development-vectorslab-flat-vectorslab.png"  />
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Mobile App Development</h5> <p > Most trusted among  Mobile App Development Company in Kerala</p>
       
                  </div>
                </a>
                </Link>
              </div>



              <div class="col-md-6 col-lg-4 box-gap">
                <Link to={`/services/crm`}>
                <a href="#">
                  <div data-wow-delay=".3s" class="service-box text-left wow fadeIn lazyloaded" >
                    <div class="icon icon-shape lazyloaded">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/external-crm-media-agency-flaticons-lineal-color-flat-icons-2.png"/>
                  
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>CRM Development</h5>
                    <p>We develop top-quality Crm Development Services that will be a sure asset for your business and brand concepts.</p>
                     </div> 
                     </a> 
                     </Link>
                     </div> 
                    
           
             
            
              <div class="col-md-6 col-lg-4 box-gap">
               <Link to={`/services/restaurant`}> <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                  <div class="icon icon-shape lazyloaded">
                    <img alt="icon" src="https://img.icons8.com/color/60/pos-terminal--v1.png" />
                  </div>
                  <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Restuarant POS System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Restuarant Pos System services..</p>
                </div>
                </a>
                </Link>
              </div>

              <div class="col-md-6 col-lg-4 box-gap">
                <Link to={`/services/temple`}>
                <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                  <div class="icon icon-shape lazyloaded">
                  <img src="https://img.icons8.com/color-glass/48/temple.png"/>
                  
                  </div>
                  <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Temple Management System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Temple Management  services..</p>
                </div>
                </a>
                </Link>
              </div>
              <div class="col-md-6 col-lg-4 box-gap">
                <Link to={`/services/boutique`}>
                <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                  <div class="icon icon-shape lazyloaded">
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/external-boutique-hotel-management-flaticons-lineal-color-flat-icons.png" />
                   
                  </div>
                  <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Boutique Management System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Boutique Management services..</p>
                </div>
            
                </a>
                </Link>
              </div>

              <div class="col-md-6 col-lg-4 box-gap">

              <Link to={`/services/retail`}><a href=""><div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >   
                  <div class="icon icon-shape lazyloaded">
                  <img src="https://img.icons8.com/fluency/60/imac-settings.png" />
                   
                  </div>
                   <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Retail Management System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Retail Management services..</p>
                </div>
              
                </a>
                </Link> 
              </div>
              <div class="col-md-6 col-lg-4 box-gap">

<Link to={`/services/billing`}><a href=""><div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >   
    <div class="icon icon-shape lazyloaded">
    <img src="https://img.icons8.com/fluency/48/billing-machine.png" />
     
    </div>
     <h5 ref={(el) => {
if (el && !skewUpRef.current.includes(el)) {
skewUpRef.current.push(el);
}
}}>Billing and Invoicing</h5>
    <p>We are the best Application software companies in Cochin which provide custom Billling and Invoice services..</p>
  </div>

  </a>
  </Link> 
</div>
                     </div> 
                     </div> 
                     </section>


<p id="testimonials"></p>

  <section  class="testimonials paddingtop80">
          <div class="container">


<div class="clients-slider swiper" >
            <div class="section-title" ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >
              <h2 >Our Clients</h2>
              
            </div>
              <div class="client-slider">
                <div class="client-slide-track ">
                

                  
                    <div className='client-slide logo-wrapper'>
                      <img className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/clients/amazing_fresh.png`} alt="" />
                    </div>

                      <div className='client-slide logo-wrapper'>
                      <img className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/clients/kerala_farm.png`} alt="" />
                    </div>

                     <div className='client-slide logo-wrapper'>
                      <img className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/imelt.png`} alt="" />
                    </div>
                 
                   <div className='client-slide logo-wrapper'>
                      <img className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/Flowares.png`} alt="" />
                    </div> 

                   <div className='client-slide logo-wrapper'>
                      <img className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/syswares.png`} alt="" />
                    </div>
                    
            
                     <div className='client-slide logo-wrapper'>
                      <img style={{backgroundColor:'#fff'}}  className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/woodsberg_logo.png`} alt="" />
                    </div>

                      <div className='client-slide logo-wrapper'>
                      <img style={{backgroundColor:'#fff'}} className='img-fluid' src={`${process.env.PUBLIC_URL}/assets/img/clients/emigo-networks.svg`} alt="" />
                    </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </section>




<p id='works'></p>

<section className="services paddingtop80">
  <div className="container">
    <div
      className="section-title"
      ref={(el) => {
        if (el && !skewUpRef.current.includes(el)) {
          skewUpRef.current.push(el);
        }
      }}
    >
      <h2 style={{ color: "#fff" }}>Works</h2>
    </div>

<div className="row">
  {/* Sidebar Categories */}
  <div className="col-md-3 p-0">
    <div className="scroll" style={{ overflow: 'scroll', height: '655px' }}>
<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  {/* <button style={{  color: '#fff', }} className="nav-link active" id="all-tab" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab">
    <i className="bx bx-grid-alt"></i> All Services
  </button> */}
  <button style={{  color: '#fff', }} className="nav-link active" id="web-tab" data-bs-toggle="pill" data-bs-target="#web" type="button" role="tab">
    <i className="bx bx-desktop"></i> Web Development
  </button>
  <button style={{  color: '#fff', }} className="nav-link" id="app-tab" data-bs-toggle="pill" data-bs-target="#app" type="button" role="tab">
    <i className="bx bx-mobile-alt"></i> App Development
  </button>
</div>
    </div>
  </div>

  {/* Services Section */}
  <div className="col-md-9">
<div className="tab-content" id="v-pills-tabContent">
  

  <div className="tab-pane fade active show" id="web" role="tabpanel">
  <div className="row portfolio">
    {/* image 1 */}
    <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/flowares.png`} className="img-fluid" alt="Web Development"/>
           <div
      className="portfolio-overlay"
    >
      <a
        href="https://flowares.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
Flowares
      </a>
    </div>
      </div>
    </div>
{/* image 2 */}
        <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/emigo-website.png`} className="img-fluid" alt="Web Development"/>
       
    <div
      className="portfolio-overlay"
    >
      <a
        href="https://emigonetworks.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
Emigo Networks
      </a>
    </div>
      </div>
    </div>

    {/* image 3 */}
    <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/omaglobal.png`} className="img-fluid" alt="Web Development"/>
  <div
      className="portfolio-overlay"
    >
      <a
        href="https://www.omaglobalacademy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
Oma Global Academy
      </a>
    </div>
      </div>
    </div>
   {/* image 4 */}
       <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/netlife.png`} className="img-fluid" alt="Web Development"/>
<div
      className="portfolio-overlay"
    >
      <a
        href="https://www.netlifeqatar.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
Netlife Qatar
      </a>
    </div>
      </div>
    </div>

      {/* image 5 */}
       <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/syswares.png`} className="img-fluid" alt="Web Development"/>
           <div
      className="portfolio-overlay"
    >
      <a
        href="https://syswares.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
    Syswares
      </a>
    </div>
  
      </div>
    </div>

          {/* image 6 */}
       <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/woodsberg.png`} className="img-fluid" alt="Web Development"/>
        <div
      className="portfolio-overlay"
    >
      <a
        href="https://woodsberg.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      Woodsberg
      </a>
    </div>
      </div>
    </div>


              {/* image 7 */}
       <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/emigo restuarant.png`} className="img-fluid" alt="Web Development"/>
        <div
      className="portfolio-overlay"
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      Restaurant
      </a>
    </div>
      </div>
    </div>

            {/* image 8 */}

            <div className="col-lg-6 col-md-6 portfolio-item">
  <div
    className="portfolio-wrap"
  >
    <img
      src={`${process.env.PUBLIC_URL}/assets/img/portfolio/amazingfreshmain.png`}
      className="img-fluid"
      alt="Web Development"
    
    />

    {/* Overlay with button */}
    <div
      className="portfolio-overlay"
    >
      <a
        href="https://amazingfresh.co.uk/amazing/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      Amazing Fresh
      </a>
    </div>
  </div>


</div>

       {/* <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/amazingfreshmain.png`} className="img-fluid" alt="Web Development"/>
      </div>
    </div> */}



  </div>
  </div>

  <div className="tab-pane fade" id="app" role="tabpanel">
   <div className="row portfolio">
    {/* image 1 */}
    <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/teresa_design.png`} className="img-fluid" alt="Web Development"/>
   <div
      className="portfolio-overlay"
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      Teresa Template
      </a>
    </div>
      </div>
    </div>
{/* image 2 */}  
        <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/teresa-design 1.png`} className="img-fluid" alt="Web Development"/>
     <div
      className="portfolio-overlay"
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.coinone.teresacustomer"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      Teresa Customer
      </a>
    </div>
      </div>
    </div>


    {/* image 3 */}  
        <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/lasavrona.png`} className="img-fluid" alt="Web Development"/>
     <div
      className="portfolio-overlay"
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.coinone.lasovflowx"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      La Savrona orders
      </a>
    </div>
      </div>
    </div>

        {/* image 3 */}  
        <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/lasavrona1.png`} className="img-fluid" alt="Web Development"/>
       <div
      className="portfolio-overlay"
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.coinone.lasovflowx"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      La Savrona Orders
      </a>
    </div>
      </div>
    </div>

    {/* image 3 */}  
        <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/lasavrona2.png`} className="img-fluid" alt="Web Development"/>
         <div
      className="portfolio-overlay"
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.coinone.lasov"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      La Savrona 
      </a>
    </div>
      </div>
    </div>

        {/* image 3 */}  
        <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/lasavrona3.png`} className="img-fluid" alt="Web Development"/>
  <div
      className="portfolio-overlay"
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.coinone.lasov"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
      La Savrona 
      </a>
    </div>
      </div>
    </div>


            <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/seashore.png`} className="img-fluid" alt="Web Development"/>
  <div
      className="portfolio-overlay"
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
    Seashore
      </a>
    </div>
      </div>
    </div>


               <div className="col-lg-6 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
       <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/seashore1.png`} className="img-fluid" alt="Web Development"/>
  <div
      className="portfolio-overlay"
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
        style={{ padding: "10px 20px", fontWeight: "bold", zIndex: 3 }}
      >
    Seashore
      </a>
    </div>
      </div>
    </div>

  </div>
  </div>

  
</div>

  </div>
</div>

  </div>
</section>
<Footer />
</main>












      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>





    </body>
  );
}

export default App;
