import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import HelpIcon from '@mui/icons-material/Help';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = {
  all: "All Questions",
  product: "Product Info",
  security: "Security & Privacy",
  pricing: "Pricing & Plans",
  technical: "Technical Details"
};

interface FAQItem {
  question: string;
  answer: string;
  category: CategoryIconKeys;
}

const faqItems: FAQItem[] = [
  {
    question: "What is InsightFi?",
    answer: "InsightFi is an AI-powered financial analytics tool that helps you understand your spending patterns and improve your financial habits through personalized insights and recommendations.",
    category: "product"
  },
  {
    question: "When will it be available?",
    answer: "We're currently in the development phase and plan to launch soon. Join our waitlist to be notified as soon as we launch!",
    category: "product"
  },
  {
    question: "How do I get early access?",
    answer: "The best way to get early access is to join our waitlist. We'll be inviting people from the waitlist in batches as we approach our launch date.",
    category: "product"
  },
  {
    question: "How does InsightFi analyze my statements?",
    answer: "InsightFi uses advanced OCR and AI technologies to extract transaction data from your uploaded statements. Our algorithms then categorize transactions, identify patterns, and generate personalized insights based on your spending habits.",
    category: "technical"
  },
  {
    question: "What makes InsightFi different from other budgeting apps?",
    answer: "InsightFi combines statement uploading convenience with powerful AI analysis. Unlike basic budgeting tools, we provide actionable recommendations based on your specific spending patterns, not generic advice.",
    category: "product"
  }
];

type CategoryIconKeys = 'product' | 'security' | 'pricing' | 'technical';

const categoryIcons: Record<CategoryIconKeys, JSX.Element> = {
  product: <HelpIcon />,
  security: <SecurityIcon />,
  pricing: <PaymentIcon />,
  technical: <IntegrationInstructionsIcon />
};

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(faqItems);

  interface AccordionChangeHandler {
    (event: React.SyntheticEvent, isExpanded: boolean): void;
  }

  const handleChange = (panel: string): AccordionChangeHandler => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(event.target.value);
  };

  type FAQCategory = 'all' | 'product' | 'security' | 'pricing' | 'technical';

  const handleCategoryFilter = (category: FAQCategory) => {
    setActiveCategory(category);
    setExpanded(false);
  };

  useEffect(() => {
    let filtered = faqItems;
    
    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(term) || 
        item.answer.toLowerCase().includes(term)
      );
    }
    
    setFilteredItems(filtered);
  }, [searchTerm, activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </Typography>
        </motion.div>
          
        
        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={`faq-${index}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -10 }}
                  layout
                >
                  <Accordion
                    expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                    className="mb-3 rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className="text-primary-500 transition-transform duration-300" />
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                      className={`${expanded === `panel${index}` ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 transition-colors duration-300`}
                    >
                      <Box className="flex items-center">
                        <Box className="mr-3">
                          {categoryIcons[item.category]}
                        </Box>
                        <Typography className="font-medium">
                          {item.question}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className="bg-white border-t border-gray-100">
                      <Typography className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Box className="bg-gray-50 rounded-lg py-8 px-4">
                  <Typography variant="h6" className="text-gray-500 mb-2">
                    No matching questions
                  </Typography>
                  <Typography className="text-gray-500">
                    Try adjusting your search or category filter
                  </Typography>
                  <Box className="mt-4">
                    <button
                      onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                      className="px-4 py-2 bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100 transition-colors duration-300"
                    >
                      Reset filters
                    </button>
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 shadow-sm"
        >
          <Typography variant="h5" className="font-bold mb-2">
            Still have questions?
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Our team is here to help you with any questions about InsightFi
          </Typography>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </Container>
    </Box>
  );
}

export default FAQ