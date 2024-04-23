import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';

//using html metatags within helmet
const Layout = ({children,title,desription,keywords,author}) => {
  return (
    <div> 
    <Helmet>
    <meta name="description" content={desription} />    
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <title>{title}</title>
    </Helmet>
    <Header></Header>

    <main style={ {minHeight:'70vh'} }> 
    <Toaster></Toaster>
     {children}
    </main>    

    <Footer></Footer>
    </div>
  )
};

Layout.defaultProps = {
  title:'Ecommerce App - Shop Now',
  description:'MERN stack project',
  keywords:'mern,react,node,mongodb',
  author:'Rasik'
}

export default Layout;
