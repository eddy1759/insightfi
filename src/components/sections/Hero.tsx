import { useState, useEffect } from 'react';
import { Button, Typography, Container, Box, Grid, Avatar, Chip } from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowForward, Check, ArrowDownward } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { IMAGES } from '../../constants/images';

const Hero = () => {
  // const navigate = useNavigate();
  const [contentRef, contentControls] = useScrollAnimation();
  const [imageRef, imageControls] = useScrollAnimation();
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const features = [
    "Understand your spending patterns",
    "Get personalized financial insights",
    "Build better money habits effortlessly",
    "Save more with AI-powered recommendations"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [features.length]);


  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>InsightFi - Understand Your Spending with AI Insights</title>
        <meta name="description" content="Get personalized spending analysis and smart recommendations to save more and build better financial habits." />
        <meta property="og:title" content="InsightFi - Understand Your Spending with AI Insights" />
        <meta property="og:description" content="Get personalized spending analysis and smart recommendations to save more and build better financial habits." />
        <meta property="og:image" content="../../../insight.svg" />
        <meta property="og:url" content="https://insightfi.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box 
        id="hero" 
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 12, md: 20 },
          pb: { xs: 10, md: 16 },
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(238,242,255,1) 0%, rgba(249,240,255,1) 100%)'
        }}
      >
        {/* Animated background elements */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1 }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-100/50 blur-3xl"
              initial={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50,
                scale: 0.8 + Math.random() * 0.4
              }}
              animate={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50,
                scale: 0.9 + Math.random() * 0.3
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 15 + Math.random() * 10 
              }}
              style={{ 
                width: (200 + i * 100) + 'px', 
                height: (200 + i * 100) + 'px',
                left: (10 + i * 15) + '%',
                top: (10 + i * 10) + '%',
              }}
            />
          ))}
        </Box>
        
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                ref={contentRef}
                initial="hidden"
                animate={contentControls}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Chip 
                    label="AI-Powered Finance" 
                    color="primary" 
                    sx={{ 
                      mb: 3, 
                      bgcolor: 'rgba(79, 70, 229, 0.1)', 
                      color: '#4f46e5', 
                      fontWeight: 500,
                      px: 1.5,
                      py: 2.5,
                      borderRadius: '16px'
                    }} 
                    icon={<span className="animate-pulse">✨</span>}
                  />
                </motion.div>
                
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 800, 
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.2,
                    mb: 2,
                    color: '#111827'
                  }}
                >
                  Understand Your Spending with{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      background: 'linear-gradient(to right, #4f46e5, #8b5cf6)',
                      backgroundClip: 'text',
                      color: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    AI Insights
                  </Box>
                </Typography>
                
                <Box sx={{ height: 64, mb: 4, overflow: 'hidden' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeatureIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{color: '#4b5563', 
                          display: 'flex', 
                          alignItems: 'center' 
                        }}
                      >
                      <Check sx={{ mr: 1, color: '#10b981' }} />
                      {features[currentFeatureIndex]}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="contained" 
                    size="large"
                    endIcon={<ArrowForward />} 
                    onClick={() => scrollToSection('join-waitlist')}
                    sx={{
                      background: 'linear-gradient(to right, #4f46e5, #6366f1)',
                      px: 4,
                      py: 1.5,
                      borderRadius: '9999px',
                      boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.5)',
                      '&:hover': {
                        background: 'linear-gradient(to right, #4338ca, #4f46e5)',
                        boxShadow: '0 15px 30px -5px rgba(79, 70, 229, 0.6)',
                      },
                      textTransform: 'none',
                      fontSize: '1rem'
                    }}
                  >
                    Join Waitlist
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outlined" 
                    size="large"
                    onClick={() => scrollToSection('features')}
                    sx={{
                      borderColor: 'rgba(156, 163, 175, 0.5)',
                      color: '#4b5563',
                      '&:hover': { 
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79, 70, 229, 0.04)',
                        color: '#4f46e5'
                      },
                      px: 4,
                      py: 1.5,
                      borderRadius: '9999px',
                      textTransform: 'none',
                      fontSize: '1rem'
                    }}
                  >
                    How It Works
                  </Button>
                </motion.div>
              </Box>
              
              <Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', mr: -1 }}>
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar 
                      key={i}
                      sx={{ 
                        width: 36, 
                        height: 36, 
                        border: '2px solid white',
                        ml: i > 1 ? -1.5 : 0,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                      src={`https://randomuser.me/api/portraits/${i % 2 ? 'men' : 'women'}/${20 + i}.jpg`} 
                    />
                  ))}
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Box sx={{ display: 'flex', color: '#fbbf24' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>★</span>
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
                    Join 10,000+ early adopters
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              ref={imageRef}
              initial="hidden"
              animate={imageControls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
              }}
              style={{ position: 'relative' }}
            >
              <motion.div 
                style={{ 
                  position: 'relative', 
                  zIndex: 10, 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.35)' 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={IMAGES.DASHBOARD.MAIN}
                  alt="InsightFi Financial Dashboard Interface"
                  style={{ width: '100%', height: 'auto' }}
                  loading="eager"
                  aria-label="Interactive preview of InsightFi's financial dashboard"
                />
                <Box sx={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                  opacity: 0,
                  '&:hover': { opacity: 1 },
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end'
                }}>
                  <Box sx={{ p: 3, color: 'white' }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Interactive dashboard preview
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
              
              <motion.div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-1.5rem', 
                  right: '-1.5rem', 
                  width: '66.666667%', 
                  height: '66.666667%', 
                  backgroundColor: 'rgba(199, 210, 254, 0.8)', 
                  borderRadius: '12px', 
                  zIndex: -1 
                }}
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                style={{ 
                  position: 'absolute', 
                  top: '-1.5rem', 
                  left: '-1.5rem', 
                  width: '66.666667%', 
                  height: '66.666667%', 
                  backgroundColor: 'rgba(221, 214, 254, 0.8)',
                  borderRadius: '12px', 
                  zIndex: -1 
                }}
                animate={{ 
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Scroll down indicator */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          opacity
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Button
          startIcon={<ArrowDownward />}
          sx={{ color: '#6b7280', '&:hover': { color: '#374151' } }}
          onClick={() => scrollToSection('features')}
        >
          Scroll to learn more
        </Button>
      </motion.div>
    </Box>
  </>
  );
};

export default Hero;