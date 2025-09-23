import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FlashSales from './FlashSales';
import ProductCategories from './ProductCategories';
import BestSellingProducts from './BestSellingProducts';
import PromotionalBanners from './PromotionalBanners';
import NewArrivals from './NewArrivals';
import CustomerService from './CustomerService';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Premium Electronics Store | Flash Sales, Apple Vouchers & Best Deals</title>
        <meta 
          name="description" 
          content="Shop premium electronics including smartphones, computers, smartwatches, cameras, headphones & gaming accessories. Exclusive flash sales with countdown timers, Apple iPhone vouchers up to 10% off, and guaranteed customer service. Free delivery on orders over $140." 
        />
        <meta property="og:title" content="Premium Electronics Store | Flash Sales, Apple Vouchers & Best Deals" />
        <meta property="og:description" content="Shop premium electronics including smartphones, computers, smartwatches, cameras, headphones & gaming accessories. Exclusive flash sales with countdown timers, Apple iPhone vouchers up to 10% off, and guaranteed customer service. Free delivery on orders over $140." />
      </Helmet>

      <main>
        <Header className="" />
        <HeroSection className="" />
        <FlashSales className="" />
        <ProductCategories className="" />
        <BestSellingProducts className="" />
        <PromotionalBanners className="" />
        <NewArrivals className="" />
        <CustomerService className="" />
        <Footer className="" />
      </main>
    </>
  );
};

export default Homepage;