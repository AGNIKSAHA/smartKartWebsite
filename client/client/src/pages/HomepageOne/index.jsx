import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FlashSales from './FlashSales';
import ProductCategories from './ProductCategories';
import BestSellingProducts from './BestSellingProducts';
import PromotionalBanners from './PromotionalBanners';
import ExploreProducts from './ExploreProducts';
import NewArrivals from './NewArrivals';
import CustomerService from './CustomerService';

const HomepageOne = () => {
  return (
    <>
      <Helmet>
        <title>Premium Electronics Store | Flash Sales & Exclusive Deals | Exclusive</title>
        <meta 
          name="description" 
          content="Discover premium electronics with exclusive flash sales on smartphones, gaming accessories, computers & more. Apple vouchers, 24/7 support & money-back guarantee available." 
        />
        <meta property="og:title" content="Premium Electronics Store | Flash Sales & Exclusive Deals | Exclusive" />
        <meta property="og:description" content="Discover premium electronics with exclusive flash sales on smartphones, gaming accessories, computers & more. Apple vouchers, 24/7 support & money-back guarantee available." />
      </Helmet>

      <main className="w-full bg-white">
        <Header className="" />
        <HeroSection />
        <FlashSales />
        <ProductCategories />
        <BestSellingProducts />
        <PromotionalBanners />
        <ExploreProducts />
        <NewArrivals />
        <CustomerService />
        <Footer className="" />
      </main>
    </>
  );
};

export default HomepageOne;