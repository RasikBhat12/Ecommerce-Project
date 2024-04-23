import React from 'react'
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
  return (
   <Layout title='Contact Us'> 
    <div className='row contactus'> 
        <div className='col-md-6'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/55/Office.jpeg'
            alt='contactus' style={ {width:'100%'} }></img>
        </div>
        <div className='col-md-6'>
         <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>   
         <p className='text-justify mt-2'>
            any query and info feel free to call anytime...
         </p>
         <p className='mt-3'><BiMailSend></BiMailSend>rasikbhat794@gmail.com</p>
         <p className='mt-3'><BiPhoneCall></BiPhoneCall>+91-7006780891</p>
         <p className='mt-3'><BiSupport></BiSupport>180011234564 (toolfree)</p>
        </div>
    </div>
   </Layout>
)
};

export default Contact;