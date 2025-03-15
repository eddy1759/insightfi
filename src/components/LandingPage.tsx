// import { ThemeProvider } from '@mui/material/styles';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
// import theme from '../styles/theme';
// import WaitlistForm from './sections/WaitlistForm';

// import AnalyticsIcon from '@mui/icons-material/QueryStats';
// import RecommendIcon from '@mui/icons-material/Recommend';
// import IntegrationIcon from '@mui/icons-material/IntegrationInstructions';
// import SecurityIcon from '@mui/icons-material/Security';

// export default function LandingPage() {

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   return (
//     <ThemeProvider theme={theme}>

//       <Helmet>
//         <title>InsightFi - Understand Your Spending with AI Insights</title>
//         <meta name="description" content="Get personalized spending analysis and smart recommendations to save more and build better financial habits." />
//         <meta property="og:title" content="InsightFi - Understand Your Spending with AI Insights" />
//         <meta property="og:description" content="Get personalized spending analysis and smart recommendations to save more and build better financial habits." />
//         <meta property="og:image" content="/images/og-image.jpg" />
//         <meta property="og:url" content="https://insightfi.vercel.app" />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Helmet>

//       <Box className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
//         {/* Hero Section */}
//         <Box className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
//           <Container maxWidth="lg">
//             <Box className="py-16 md:py-24 px-4">
//               <Grid container spacing={4} alignItems="center">
//                 <Grid item xs={12} md={6}>
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeIn}
//                   >
//                     <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//                       Understand Your Spending with AI Insights
//                     </Typography>
//                     <Typography variant="body1" className="text-lg md:text-xl mb-8 text-indigo-100">
//                       Get personalized spending analysis and smart recommendations to save more and build better financial habits.
//                     </Typography>
//                   </motion.div>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex justify-center"
//                   >
//                     <Box className="relative">
//                       <img
//                         src="/images/financial-chart.svg"
//                         alt="Financial AI Analysis"
//                         className="w-full max-w-md rounded-lg shadow-xl"
//                       />
//                       <Box
//                         className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-lg"
//                       />
//                     </Box>
//                   </motion.div>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Container>
//         </Box>

//         {/* Waitlist Section */}
//         <Box className="bg-white py-12 md:py-16" id="waitlist">
//           <Container maxWidth="md">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <Box className="text-center mb-8">
//                 <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
//                   Be the First to Experience InsightFi
//                 </Typography>
//                 <Typography variant="body1" className="text-lg text-gray-600 max-w-lg mx-auto">
//                   Join our exclusive waitlist to receive early access when we launch.
//                 </Typography>
//               </Box>
//               <Box className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-md p-6 md:p-8">
//                 <WaitlistForm ctaText="Join the Waitlist Now" />
//               </Box>
//             </motion.div>
//           </Container>
//         </Box>

//         {/* Features Section */}
//         <Container maxWidth="lg">
//           <Box className="py-16 px-4" id="features">
//             <Typography
//               variant="h2"
//               className="text-3xl md:text-4xl font-bold text-center mb-12"
//             >
//               Revolutionize Your Financial Habits
//             </Typography>

//             <Grid container spacing={4}>
//               {[
//                 {
//                   icon: <AnalyticsIcon fontSize="large" className="text-indigo-600" />,
//                   title: "AI-Powered Analysis",
//                   description: "Our advanced AI analyzes your spending patterns to uncover personalized insights."
//                 },
//                 {
//                   icon: <RecommendIcon fontSize="large" className="text-indigo-600" />,
//                   title: "Smart Recommendations",
//                   description: "Receive actionable tips to save money and improve your financial habits."
//                 },
//                 {
//                   icon: <IntegrationIcon fontSize="large" className="text-indigo-600" />,
//                   title: "Easy Integration",
//                   description: "Securely connect your accounts and get started in minutes."
//                 },
//                 {
//                   icon: <SecurityIcon fontSize="large" className="text-indigo-600" />,
//                   title: "Privacy Focused",
//                   description: "Your data is encrypted and secure—we never sell your information."
//                 }
//               ].map((feature, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="h-full"
//                   >
//                     <Box className="h-full flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                       <Box className="mb-4 p-3 bg-indigo-50 rounded-full">{feature.icon}</Box>
//                       <Typography variant="h5" className="mb-2 font-medium">{feature.title}</Typography>
//                       <Typography variant="body1" color="textSecondary">{feature.description}</Typography>
//                     </Box>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Container>

//         {/* How It Works Section */}
//         <Box className="bg-indigo-50 py-16">
//           <Container maxWidth="lg">
//             <Box className="text-center mb-12">
//               <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
//                 How InsightFi Works
//               </Typography>
//               <Typography variant="body1" className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Our AI technology makes it simple to understand and improve your financial habits.
//               </Typography>
//             </Box>

//             <Grid container spacing={6} alignItems="center">
//               <Grid item xs={12} md={6}>
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                 >
//                   <img
//                     src="/images/how-it-works.svg"
//                     alt="How InsightFi Works"
//                     className="w-full rounded-lg shadow-md"
//                   />
//                 </motion.div>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box className="space-y-6">
//                     {[
//                       {
//                         number: "01",
//                         title: "Connect Your Accounts",
//                         description: "Securely link your financial accounts using bank-level encryption."
//                       },
//                       {
//                         number: "02",
//                         title: "AI Analysis",
//                         description: "Our AI analyzes your transactions and identifies spending patterns."
//                       },
//                       {
//                         number: "03",
//                         title: "Get Personalized Insights",
//                         description: "Receive custom insights and recommendations based on your spending habits."
//                       },
//                       {
//                         number: "04",
//                         title: "Improve Your Finances",
//                         description: "Take action on recommendations to save money and build better habits."
//                       }
//                     ].map((step, index) => (
//                       <Box key={index} className="flex items-start">
//                         <Box className="mr-4 flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-medium">
//                           {step.number}
//                         </Box>
//                         <Box>
//                           <Typography variant="h6" className="font-medium mb-1">{step.title}</Typography>
//                           <Typography variant="body2" color="textSecondary">{step.description}</Typography>
//                         </Box>
//                       </Box>
//                     ))}
//                   </Box>
//                 </motion.div>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>

//         {/* Second CTA Section */}
//         <Box className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
//           <Container maxWidth="md">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
//                 Ready to Transform Your Financial Habits?
//               </Typography>
//               <Typography variant="body1" className="text-lg mb-8 text-indigo-100 max-w-xl mx-auto">
//                 Join thousands of others who are taking control of their finances with InsightFi.
//               </Typography>
//               <Box className="flex justify-center">
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="large"
//                   href="#waitlist"
//                   className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-3"
//                 >
//                   Join the Waitlist Now
//                 </Button>
//               </Box>
//             </motion.div>
//           </Container>
//         </Box>

//         {/* Footer */}
//         <Box className="bg-gray-900 text-white py-12">
//           <Container maxWidth="lg">
//             <Grid container spacing={4}>
//               <Grid item xs={12} md={4}>
//                 <Typography variant="h6" className="font-bold mb-4">
//                   InsightFi
//                 </Typography>
//                 <Typography variant="body2" className="text-gray-400 mb-4">
//                   AI-powered financial insights to help you save more and build better habits.
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <Typography variant="h6" className="font-bold mb-4">
//                   Contact
//                 </Typography>
//                 <Typography variant="body2" className="text-gray-400">
//                   hello@insightfi.com
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <Typography variant="h6" className="font-bold mb-4">
//                   Legal
//                 </Typography>
//                 <Box className="flex flex-col space-y-2">
//                   <Button color="inherit" className="text-gray-400 hover:text-white justify-start p-0">
//                     Privacy Policy
//                   </Button>
//                   <Button color="inherit" className="text-gray-400 hover:text-white justify-start p-0">
//                     Terms of Service
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//             <Box className="mt-8 pt-8 border-t border-gray-800 text-center">
//               <Typography variant="body2" className="text-gray-500">
//                 © {new Date().getFullYear()} InsightFi. All rights reserved.
//               </Typography>
//             </Box>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }