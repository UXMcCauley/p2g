import React, { Fragment } from 'react';
import { UIProvider, CartProvider, CustomerProvider, ProductsProvider } from 'contexts/index';
import { Header, CartPanel, GetProducts, SectionTitle, HomeHero, Footer} from 'components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
   return (
     <Fragment>
       <div style={{ height: 185 }}></div>
       <UIProvider>
         <CartProvider>
           <CustomerProvider>
             <ProductsProvider>
               <Header/>
               <CartPanel/>
               <HomeHero/>
               <GetProducts type="featuredProducts"/>
               <SectionTitle section="seatingAndGenerators"/>
               <GetProducts type="otherProducts"/>
               <Footer/>
           </ProductsProvider>
         </CustomerProvider>
       </CartProvider>
     </UIProvider>
   </Fragment>
   )
}

export default App;
