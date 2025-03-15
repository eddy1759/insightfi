// import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
// import { TrendingUp, IntegrationInstructions, BarChart, CheckCircle } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import { IMAGES } from '../../constants/images';

// const Works = () => {
//     const [activeStep, setActiveStep] = useState(0);

//     const works = [
//         {
//             number: "01",
//             title: "Easy Integration",
//             description: "Securely connect your bank statement with our encrypted system.",
//             icon: <IntegrationInstructions fontSize="large" className="text-primary-600" />,
//             image: IMAGES.PLACEHOLDERS.INTEGRATION
//         },
//         {
//             number: "02",
//             title: "Spending Analytics",
//             description: "Our AI analyzes your transactions and identifies spending patterns in real-time.",
//             icon: <BarChart fontSize="large" className="text-primary-600" />,
//             image: IMAGES.PLACEHOLDERS.ANALYTICS
//         },
//         {
//             number: "03",
//             title: "Get Personalized Insights",
//             description: "Receive custom insights and recommendations based on your specific financial behaviors.",
//             icon: <TrendingUp fontSize="large" className="text-primary-600" />,
//             image: IMAGES.PLACEHOLDERS.INSIGHTS
//         },
//         {
//             number: "04",
//             title: "Improve Your Finances",
//             description: "Take action on recommendations to save money and build better financial habits.",
//             icon: <CheckCircle fontSize="large" className="text-primary-600" />,
//             image: IMAGES.PLACEHOLDERS.IMPROVE
//         }
//     ];

//     return (
//         <Box id="works" className="py-20 bg-gradient-to-b from-white to-gray-50">
//             <Container maxWidth="lg">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-12"
//                 >
//                     <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
//                         How InsightFi Works
//                     </Typography>
//                     <Typography variant="body" className="text-lg text-gray-600 max-w-2xl mx-auto">
//                         Our AI technology makes it simple to understand and improve your financial habits.
//                     </Typography>
//                 </motion.div>

//                 <Grid container spacing={6} alignItems="center" className="mt-8">
//                     {/* Left side - Interactive Steps */}
//                     <Grid item xs={12} md={5}>
//                         <Box className="relative">
//                             {works.map((work, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <Card 
//                                         className={`mb-4 transition-all duration-300 border-l-4 hover:shadow-lg cursor-pointer ${
//                                             activeStep === index ? 'border-l-primary-600 shadow-md bg-gray-50' : 'border-l-gray-200'
//                                         }`}
//                                         onClick={() => setActiveStep(index)}
//                                     >
//                                         <CardContent className="p-6">
//                                             <Box className="flex items-center">
//                                                 <Box className="flex-shrink-0 mr-4">
//                                                     <Box className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                                                         activeStep === index ? 'bg-primary-100' : 'bg-gray-100'
//                                                     }`}>
//                                                         {work.icon}
//                                                     </Box>
//                                                 </Box>
//                                                 <Box>
//                                                     <Typography variant="h6" className="font-bold mb-1 flex items-center">
//                                                         <span className="opacity-50 mr-2">{work.number}</span>
//                                                         {work.title}
//                                                     </Typography>
//                                                     <Typography variant="body2" className="text-gray-600">
//                                                         {work.description}
//                                                     </Typography>
//                                                 </Box>
//                                             </Box>
//                                         </CardContent>
//                                     </Card>
//                                 </motion.div>
//                             ))}
//                         </Box>
//                     </Grid>

//                     {/* Right side - Interactive Image */}
//                     <Grid item xs={12} md={7}>
//                         <Box className="relative rounded-lg overflow-hidden shadow-xl">
//                             {works.map((work, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0 }}
//                                     animate={{ 
//                                         opacity: activeStep === index ? 1 : 0,
//                                         scale: activeStep === index ? 1 : 0.95
//                                     }}
//                                     transition={{ duration: 0.4 }}
//                                     className="absolute inset-0"
//                                     style={{ display: activeStep === index ? 'block' : 'none' }}
//                                 >
//                                     <img
//                                         src={work.image || IMAGES.PLACEHOLDERS.ANALYTICS}
//                                         alt={work.title}
//                                         className="w-full h-full object-cover"
//                                     />
//                                     <Box className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
//                                         <Box className="p-6 text-white">
//                                             <Typography variant="h5" className="font-bold mb-2">
//                                                 {work.title}
//                                             </Typography>
//                                             <Typography variant="body2">
//                                                 {work.description}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </motion.div>
//                             ))}
//                         </Box>
//                     </Grid>
//                 </Grid>

//                 {/* Progress Indicator */}
//                 <Box className="flex justify-center mt-10">
//                     {works.map((_, index) => (
//                         <Box
//                             key={index}
//                             className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
//                                 activeStep === index ? 'bg-primary-600 w-6' : 'bg-gray-300'
//                             }`}
//                             onClick={() => setActiveStep(index)}
//                         />
//                     ))}
//                 </Box>
//             </Container>
//         </Box>
//     );
// };

// export default Works;