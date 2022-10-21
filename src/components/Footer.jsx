import { Link,NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='container'>
  
          <nav className='d-flex justify-content-center'>
              <NavLink to='/' 
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Home</NavLink>
              <NavLink to='about'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >About</NavLink>
              <NavLink to='products'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Products</NavLink>
              <NavLink to='posts'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Posts</NavLink>
          </nav>
          <section class="footer container"><div class="footer-section"><span class="footer-section-title">Links</span> <span class="footer-section-underbar"></span> <a href="#past-events">Events</a> <a href="#gallery">Gallery</a></div> <span class="footer-divider"></span> <div class="footer-section"><span class="footer-section-title">Developed by</span> <span class="footer-section-underbar"></span> <a href="https://www.linkedin.com/in/aditya-kharote-b280b6135/">Aditya Kharote</a></div> <span class="footer-divider"></span> <div class="footer-section"><span class="footer-section-title">Connect With Us</span> <span class="footer-section-underbar"></span> <a href="https://www.linkedin.com/company/f-a-c-e-forum-for-aspiring-computer-engineers/">LinkedIn</a> <a href="https://www.instagram.com/face_spit/">Instagram</a></div></section>
     </div>
     </footer>
    )
  }
  
  export default Footer