import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const NavItems = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSocialVisible, setSocialVisible] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);

    window.addEventListener('scroll', () =>{
        if (window.scrollY > 200) {
            setHeaderFixed(true);
          } else {
            setHeaderFixed(false);
          }
    });


    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    
    
    return (
      
        <header className={`header-section style-4 ${isHeaderFixed ? 'header-fixed fadeInUp' : ''}`}>
    
        <div className={`header-top d-md-none  ${isSocialVisible ? 'open' : ''}`}>
          <div className='container'>
            <div className='header-top-area'>
    
              <Link to="/signup" className="lab-btn me-3">
                <span>Sign Up For Free</span>
              </Link>
    
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
    
        {/* header button */}
        <div className='header-button'>
          <div className='container'>
            <div className='header-wrapper'>
    
              {/* logo */}
              <div className='logo-search-acte'>
                <div className='logo'>
                  <Link to="/">
                    <img src={logo} alt="Logo" /> 
                  </Link>
                </div>
              </div>
    
              {/* header menu */}
              <div className='menu-area' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='menu'>
                  <ul className='lab-ul' style={{ listStyleType: 'none', padding: 0, margin: 0 , fontSize: '10px', color: '7287A7'}}>
                    <li><Link to='/home' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal'}}>About Us</Link></li>
                    <li><Link to='/shop' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>Product Categories</Link></li>
                    <li><Link to='/blog' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>Blog</Link></li>
                    <li><Link to='/about' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>Join as a Supplier</Link></li>
                  </ul>
                </div>
              </div>

                {/* sign in & log in */}
                <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block' style={{ marginLeft: '-10px', backgroundColor: '#690896', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>
                Join as a Reseller <i class="icofont-sign-in"></i>
                </Link>
    
                <Link to="/login" className='d-none d-md-block' style={{ fontFamily: 'Outfit, sans-serif', marginRight: '50px' }}>Log In</Link>
    
                {/* menu toggler */}
                <div className={`header-bar d-lg-none ${isMenuOpen ? 'active' : ''}`} style={{ color: '#690896', fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

      </div>
    </div>
</header>
); };

          
export default NavItems;