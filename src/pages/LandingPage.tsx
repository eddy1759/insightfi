import { Box } from '@mui/material';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import FAQ from '../components/sections/FAQ';
// import Work from '../components/sections/Works';
import WaitList from '../components/sections/WaitlistForm';

const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <Features />
      {/* <Work /> */}
      <FAQ />
      <WaitList />
    </Box>
  );
};

export default LandingPage;