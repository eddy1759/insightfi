import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { 
  Typography, 
  Box, 
  TextField,
  Button,
  Alert,
  Snackbar,
  CircularProgress,
  InputAdornment,
  Container,
  Paper,
  Grid
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
// import { IMAGES } from '../../constants/images';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // In development mode, simulate success
      // if (import.meta.env.DEV) {
      //   await new Promise(resolve => setTimeout(resolve, 1000));
      //   setSuccess(true);
      //   setEmail('');
      //   setIsLoading(false);
      //   return;
      // }
      
      // Call your Vercel serverless function
      await axios.post('/api/subscribe', { email });
      
      setSuccess(true);
      setEmail('');
      
      // Track conversion with Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'waitlist_signup', {
          'event_category': 'engagement',
          'event_label': 'waitlist',
          'value': 1
        });
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message?.includes('already subscribed')) {
        setSuccess(true);
        setEmail('');
      } else {
        setError(
          axios.isAxiosError(err) 
            ? err.response?.data?.error || 'Failed to join waitlist' 
            : 'Something went wrong. Please try again.'
        );
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleCloseSnackbar = () => {
    setSuccess(false);
  };
  
  return (
    <Box 
      id="join-waitlist"
      ref={sectionRef}
      sx={{
        py: { xs: 12, md: 15 },
        backgroundImage: 'linear-gradient(135deg, #f5f7ff 0%, #f9f0ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: { xs: 200 + i * 50, md: 300 + i * 100 },
              height: { xs: 200 + i * 50, md: 300 + i * 100 },
              borderRadius: '50%',
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(196,181,253,0.2) 0%, rgba(196,181,253,0) 70%)' 
                : 'radial-gradient(circle, rgba(165,180,252,0.2) 0%, rgba(165,180,252,0) 70%)',
              top: `${(i * 15) % 100}%`,
              left: `${(i * 20) % 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `float-${i} ${15 + i * 2}s infinite ease-in-out`
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Paper 
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  border: '1px solid rgba(229, 231, 235, 0.5)'
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    background: 'linear-gradient(to right, #4f46e5, #8b5cf6)', 
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
                  }}
                >
                  Be the First to Know
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ mb: 4, color: '#6b7280', maxWidth: '600px', mx: 'auto' }}
                >
                  Join our exclusive waitlist and be among the first to experience InsightFi when we launch. 
                  Early access members will receive special benefits and features.
                </Typography>
                
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-6"
                  >
                    <CheckCircleIcon 
                      sx={{ fontSize: 80, color: '#10b981', mb: 3 }} 
                    />
                    <Typography 
                      variant="h5" 
                      sx={{ mb: 2, fontWeight: 600, color: '#111827' }}
                    >
                      You're on the list!
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ color: '#6b7280', maxWidth: '500px', mx: 'auto' }}
                    >
                      Thanks for joining our waitlist! We'll notify you when InsightFi launches.
                      Keep an eye on your inbox for updates and early access information.
                    </Typography>
                  </motion.div>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '500px', mx: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center' }}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '9999px',
                            backgroundColor: '#fff',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#a5b4fc'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4f46e5'
                            }
                          },
                          '& .MuiOutlinedInput-input': {
                            py: 1.5
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: '#9ca3af' }} />
                            </InputAdornment>
                          ),
                        }}
                        disabled={isLoading}
                        error={!!error}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          borderRadius: '9999px',
                          py: 1.5,
                          px: { xs: 3, sm: 4 },
                          background: 'linear-gradient(to right, #4f46e5, #6366f1)',
                          '&:hover': {
                            background: 'linear-gradient(to right, #4338ca, #4f46e5)',
                          },
                          boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2), 0 2px 4px -1px rgba(79, 70, 229, 0.1)',
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          width: { xs: '100%', sm: 'auto' },
                          flexShrink: 0,
                          alignSelf: { xs: 'stretch', sm: 'center' }
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : "Join Waitlist"}
                      </Button>
                    </Box>

                    {error && (
                      <Typography variant="body2" sx={{ color: '#ef4444', mt: 1, textAlign: 'left' }}>
                        {error}
                      </Typography>
                    )}

                    <Typography variant="body2" sx={{ 
                      color: '#6b7280', 
                      mt: 2, 
                      textAlign: 'center',
                      width: '100%'
                    }}>
                      We respect your privacy. Unsubscribe at any time.
                    </Typography>
                  </Box>
                )}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thanks for joining our waitlist! We'll notify you when we launch.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WaitlistForm;