import React from 'react'
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
   <Layout title={'About Us'}>
    <div className='row contactus'> 
      <div className='col-md-6'>
      <h2>About Us</h2>
      <p>Welcome to Our eCommerce Store! We strive to provide our customers with high-quality products and excellent service.</p>
      <p>Our team is dedicated to ensuring your shopping experience is seamless and enjoyable. We offer a wide range of products to suit your needs, from electronics to fashion and everything in between.</p>
      <p>Feel free to contact us if you have any questions or feedback. We're here to help!</p>
      </div>
        
        <div className='col-md-6'>
        <img src='https://images.ctfassets.net/n2ifzifcqscw/5TrPDACnGo4sk0WdbaKbmm/d96c25ece88a6fcf37e06be9276c0a29/home-office-setups-hero.jpeg'
        alt='contactus' style={ {width:'100%'} }></img>
        </div>
    </div>
   </Layout>
)
};
export default About;