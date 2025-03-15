import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, Container, Box, IconButton } from '@mui/material';
import { BarChart, Menu as MenuIcon, Close } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {

    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const menuItems = [
    { text: 'Features', action: () => scrollToSection('features') },
    { text: 'Join Waitlist', action: () => scrollToSection('join-waitlist') },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 4 : 0}
      sx={{
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'opacity: 0.05',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 0.7)' : 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.2s ease'
              }} 
              onClick={() => navigate('/')}
            >
              <BarChart sx={{ mr: 1, color: '#4f46e5' }} /> 
              <span style={{ color: '#4f46e5' }}>Insight</span>
              <span style={{ color: isScrolled ? '#1f2937' : '#fff' }}>Fi</span>
            </Typography>
          </motion.div>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button 
                  onClick={item.action}
                  sx={{ 
                    color: isScrolled ? '#4b5563' : '#fff', 
                    fontWeight: 500,
                    '&:hover': { color: '#4f46e5' },
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#4f46e5',
                      transition: 'width 0.3s ease, left 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '80%',
                      left: '10%',
                    }
                  }}
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button 
                variant="contained" 
                onClick={() => scrollToSection('join-waitlist')}
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: '9999px',
                  background: 'linear-gradient(to right, #4f46e5, #6366f1)',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(to right, #4338ca, #4f46e5)',
                    boxShadow: '0 6px 20px rgba(79, 70, 229, 0.6)',
                  }
                }}
              >
                Get Early Access
              </Button>
            </motion.div>
          </Box>
          
          {/* Mobile Menu Button */}
          <IconButton 
            edge="end" 
            sx={{ display: { md: 'none' }, color: isScrolled ? '#1f2937' : '#fff' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Close /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            sx={{ display: { md: 'none' }, py: 2, background: '#fff' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button 
                    fullWidth
                    onClick={item.action}
                    sx={{ 
                      color: '#4b5563', 
                      justifyContent: 'flex-start',
                      py: 1.5,
                      '&:hover': { 
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        color: '#4f46e5'
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Button 
                  variant="contained"
                  fullWidth
                  onClick={() => scrollToSection('join-waitlist')}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    background: 'linear-gradient(to right, #4f46e5, #6366f1)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #4338ca, #4f46e5)',
                    }
                  }}
                >
                  Get Early Access
                </Button>
              </motion.div>
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;