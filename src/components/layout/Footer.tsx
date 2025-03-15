import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Divider,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import InsightFiLogo from '../../../insight.svg'; 

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <Box 
      sx={{ 
        background: '#111827', 
        color: '#e5e7eb',
        pt: { xs: 8, md: 10 },
        pb: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Logo and text on the same line */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 3
                  }}
                >
                  <Box 
                    component="img" 
                    src={InsightFiLogo} 
                    alt="InsightFi Logo"
                    sx={{ 
                      height: '32px',
                      mr: 2
                    }} 
                  />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ color: '#818cf8' }}>Insight</span>
                    <span>Fi</span>
                  </Typography>
                </Box>
              </motion.div>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 4, 
                  color: '#9ca3af', 
                  maxWidth: '350px',
                  lineHeight: 1.8,
                  letterSpacing: '0.01em',
                  fontSize: '0.95rem'
                }}
              >
                AI-powered financial insights to help you understand your spending,
                save more, and build better financial habits.
              </Typography>
            </Box>
          </Grid>
          
          {/* Moved Quick Links further to the right */}
          <Grid item xs={12} sm={6} md={3} sx={{ ml: { md: 'auto' }, pr: { md: 2 } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#fff', 
                mb: 3, 
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Join Waitlist", href: "#waitlist" }
              ].map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.href.substring(1);
                      scrollToSection(id);
                    }}
                    sx={{ 
                      color: '#9ca3af', 
                      textDecoration: 'none',
                      '&:hover': { 
                        color: '#818cf8',
                        textDecoration: 'none'
                      },
                      display: 'inline-block',
                      transition: 'color 0.2s ease',
                      fontSize: '0.95rem',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 8, backgroundColor: 'rgba(156, 163, 175, 0.2)' }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'center' },
          gap: 3
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#6b7280',
              textAlign: { xs: 'center', md: 'left' },
              fontSize: '0.9rem',
              letterSpacing: '0.01em'
            }}
          >
            © {new Date().getFullYear()} InsightFi. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 4, md: 5 },
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <Link
                key={index}
                href="#"
                sx={{ 
                  color: '#6b7280', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: '#818cf8',
                    textDecoration: 'none'
                  },
                  fontSize: '0.9rem',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s ease'
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;