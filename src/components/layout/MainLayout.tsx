import { ReactNode, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Hero from '../../components/sections/Hero';
import Features from '../../components/sections/Features';
import FAQ from '../../components/sections/FAQ';
import WaitList from '../../components/sections/WaitlistForm';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Box>
        <Header isScrolled={scrolled} />
        <Hero />
        <Features />
        {/* <Work /> */}
        <WaitList />
        <FAQ />
        <Footer />
    </Box>
  );
};

export default MainLayout;