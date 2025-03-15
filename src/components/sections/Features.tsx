import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { TrendingUp, Lightbulb, Security, BarChart, CheckCircle } from '@mui/icons-material';
import IntegrationIcon from '@mui/icons-material/IntegrationInstructions';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IMAGES } from '../../constants/images';

const Features = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true, amount: 0.2 });
  
  const features = [
    {
      icon: <TrendingUp fontSize="large" sx={{ color: '#4f46e5' }} />,
      title: "Spending Analytics",
      description: "Get detailed insights into your spending patterns across different categories with beautiful visualizations."
    },
    {
      icon: <Lightbulb fontSize="large" sx={{ color: '#4f46e5' }} />,
      title: "Smart Recommendations",
      description: "Receive actionable tips to save money and improve your financial habits."
    },
    {
      icon: <Security fontSize="large" sx={{ color: '#4f46e5' }} />,
      title: "Private & Secure",
      description: "Your financial data stays private - and secure."
    },
    {
      icon: <IntegrationIcon fontSize="large" sx={{ color: '#4f46e5' }} />,
      title: "Easy Integration",
      description: "Securely connect your accounts and get started in minutes."
    },
    {
      icon: <BarChart fontSize="large" sx={{ color: '#4f46e5' }} />,
      title: "Budget Optimization",
      description: "AI-powered budget suggestions based on your income and historical spending."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <Box 
      id="features" 
      ref={featuresRef}
      sx={{
        py: { xs: 10, md: 15 },
        background: '#ffffff',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-5rem',
          left: 0,
          width: '100%',
          height: '5rem',
          background: 'linear-gradient(to bottom, transparent, white)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="overline" 
              sx={{ color: '#4f46e5', fontWeight: 600, letterSpacing: 1.5, display: 'block', mb: 1 }}
            >
              POWERFUL FEATURES
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ fontWeight: 700, color: '#111827', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              Manage Your Money Better with AI
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ color: '#6b7280', maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
            >
              InsightFi uses advanced AI to analyze your financial statements and provide intelligent 
              insights without requiring bank connections.
            </Typography>
          </motion.div>
        </Box>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%', 
                      transition: 'all 0.3s ease', 
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                      },
                      border: '1px solid rgba(229, 231, 235, 0.5)',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1))',
                          }}
                        >
                          {feature.icon}
                        </Box>
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ fontWeight: 600, mb: 1.5, color: '#111827' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ color: '#6b7280', lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        
        <Box sx={{ mt: { xs: 10, md: 15 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box sx={{ 
                  position: 'relative', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}>
                <img 
                    src={IMAGES.DASHBOARD.FEATURES}
                    alt="AI-Powered Financial Analysis Interface"
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    aria-label="Detailed view of InsightFi's AI-powered financial analysis features"
                  />
                  <Box sx={{ 
                    position: 'absolute', 
                    bottom: '-1rem', 
                    right: '-1rem', 
                    width: '8rem', 
                    height: '8rem', 
                    backgroundColor: 'rgba(199, 210, 254, 0.6)', 
                    borderRadius: '50%', 
                    zIndex: -1 
                  }} />
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Typography 
                  variant="overline" 
                  sx={{ color: '#4f46e5', fontWeight: 600, letterSpacing: 1.5, display: 'block', mb: 1 }}
                >
                  ADVANCED ANALYSIS
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ fontWeight: 700, color: '#111827', mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
                >
                  See Where Your Money Goes & Get Smart Recommendations
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ color: '#6b7280', mb: 4, lineHeight: 1.7 }}
                >
                  Analyze your transactions, categorize them, and provide personalized insights to help you 
                  make better financial decisions.
                </Typography>
                <Box sx={{ '& > div': { mb: 2 } }}>
                  {["Automatic transaction categorization", "Spending trend analysis", "Personalized savings opportunities", "Monthly comparison reports"].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: '#10b981', mr: 2 }} />
                      <Typography variant="body1" sx={{ color: '#374151' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;