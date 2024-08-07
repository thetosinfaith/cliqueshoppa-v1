import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import image01 from '../assets/images/categoryTab/01.jpg';
import image02 from '../assets/images/categoryTab/02.jpg';
import image03 from '../assets/images/categoryTab/03.jpg';
import image04 from '../assets/images/categoryTab/04.jpg';
import image05 from '../assets/images/categoryTab/05.jpg';
import image06 from '../assets/images/categoryTab/06.jpg';
import image07 from '../assets/images/categoryTab/07.jpg';
import image08 from '../assets/images/categoryTab/08.jpg';

const title = 'Hot Niches 💰';
const btText = "View More";


const ProductData = [
  {
    imgUrl: image01,
    cate: 'Ring Lights & Mobile Flashes',
    title: '13-inch Ring Light Tripod',
    brandImg: 'assets/images/course/author/01.jpg',
    brand: 'Neewer',
    price: '₦ 15,000',
    id: 1,
  },
  {
    imgUrl: image02,
    cate: 'Baby Products',
    title: 'Bebem Natural Essences Maxi Diaper',
    brandImg: 'assets/images/course/author/02.jpg',
    brand: 'Bebem',
    price: '₦ 1,097',
    id: 2,
  },
  {
    imgUrl: image03,
    cate: 'Phones & Tablets',
    title: 'C Idea 8 Inches Android 12 Tablet',
    brandImg: 'assets/images/course/author/03.jpg',
    brand: 'C Idea',
    price: '₦ 68,160',
    id: 3,
  },
  {
    imgUrl: image04,
    cate: 'Beauty Care',
    title: 'Micolor Palette With Blush, & Bronzer',
    brandImg: 'assets/images/course/author/04.jpg',
    brand: 'Micolor',
    price: '₦ 3,890',
    id: 4,
  },
  {
    imgUrl: image05,
    cate: 'Fashion & Watches',
    title: 'Leather Strap Big Face Watch',
    brandImg: 'assets/images/course/author/05.jpg',
    brand: 'Söhne',
    price: '₦ 5,200',
    id: 5,
  },
  {
    imgUrl: image06,
    cate: 'Beauty Care',
    title: 'Cerave Lotion & Facial Cleanser',
    brandImg: 'assets/images/course/author/06.jpg',
    brand: 'Cerave',
    price: '₦ 8,700',
    id: 6,
  },
  {
    imgUrl: image07,
    cate: 'Shoes & Slippers',
    title: 'Men Sandals Flip-Flop',
    brandImg: 'assets/images/course/author/01.jpg',
    brand: 'Tijob',
    price: '₦ 14,500',
    id: 7,
  },
  {
    imgUrl: image08,
    cate: 'Home Appliances',
    title: 'Binatone 1.7 Electric Kettle',
    brandImg: 'assets/images/course/author/02.jpg',
    brand: 'Binatone',
    price: '₦ 21,599',
    id: 8,
  },
];

const CategoryShowcase = () => {
  const [items, setItems] = useState(ProductData);
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const filterItem = (category) => {
    if (category === 'All') {
      setItems(ProductData);
    } else {
      const updatedItems = ProductData.filter((item) => item.cate.includes(category));
      setItems(updatedItems);
    }
  };


  return (
    <div className='course-section style-3 padding-tb' >
      <div className='course-shape one'>
        <img src='/src/assets/images/shape-img/icon/01.png' alt='' />
      </div>
      <div className='course-shape two'>
        <img src='/src/assets/images/shape-img/icon/01.png' alt='' />
      </div>

      <div className='container'>
        <div className='section-header'>
          <h2 className='title' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'light', color: '#690896' }}>
            {title}
          </h2>
          <div className='course-filter-group' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal'}}>
            <ul className='lab-ul'>
              <li onClick={() => filterItem('All')} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', color: '#690896' }}>
                All
              </li>
              <li onClick={() => filterItem('Ring Lights')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Ring Lights
              </li>
              <li onClick={() => filterItem('Baby Products')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Baby Products
              </li>
              <li onClick={() => filterItem('Phones & Tablets')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Phones & Tablets
              </li>
              <li onClick={() => filterItem('Beauty Care')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Beauty Care
              </li>
              <li onClick={() => filterItem('Fashion & Watches')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Fashion & Watches
              </li>
            </ul>
          </div>
        </div>

        <div className='section-wrapper'>
          <div className='row'>
            {items.map((product) => (
              <div key={product.id} className='col-md-3 col-sm-6 mb-4'>
                <div className='course-item style-4' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold' }}>
                  <div className='course-inner' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }} 
                   onMouseEnter={() => handleMouseEnter(product.id)}
                   onMouseLeave={handleMouseLeave}>
                    <div className='course-thum'>
                      <img src={product.imgUrl} alt={product.title} />
                      <div className='course-category' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#690896' }}>
                        <a href='#' style={{marginLeft: '17px', color: '#690896'}}>{product.cate}</a>
                        {hoveredId === product.id && (
                          <div className='add-to-cart-button' style={{marginLeft: '15px'}}>
                            <button className='btn btn-primary' style={{backgroundColor: 'green', border: '2px green'}}>
                               <i class="icofont-cart-alt"></i> Resell Product 
                            </button>
                          </div>
                        )}

                        

                      </div>
                      
                    </div>
                    
                    <div className='course-content'>
                      <Link to={`/shop/${product.id}`} className='course-title' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold' }}>
                        {product.title}
                      </Link>
                      <div className='course-footer'>
                        <div className='course-author' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#690896' }}>
                          <Link to='/'>{product.brand}</Link>
                        </div>
                        <div className='course-price' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', color: '#690896', fontSize: '16px'}}>
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
        <div className='text-center mt-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to='/shop' className='bt me-3' style={{
                          borderRadius: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '170px',
                          height: '50px',
                          backgroundColor: '#690896',
                          color: 'white',
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 'normal',
                          fontSize: '16px',
                          boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
                          border: '5px solid #690896'
                        }}>
                          <span>{btText}<i className="icofont-click"></i></span>
                        </Link>
                      </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
