// src/App.tsx (This file now contains both App and HomePage components for the immersive)

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Correct import for ThemeProvider and createTheme
import CssBaseline from '@mui/material/CssBaseline'; // For consistent baseline styles

// Define the type for navigation items
interface NavItem {
  name: string;
  path: string;
}

// Styled Box for the main content area to mimic the previous card-like appearance
const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#1f2937', // gray-800 equivalent
  padding: theme.spacing(4), // p-8 equivalent
  borderRadius: theme.shape.borderRadius * 2, // rounded-xl equivalent
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)', // shadow-2xl equivalent
  textAlign: 'center',
  maxWidth: '48rem', // max-w-2xl equivalent (adjust as needed for desired width)
  width: '100%',
}));

// HomePage component displays a welcome message and navigation options.
// This component is now defined within the same file as App.tsx for the immersive.
const HomePage: React.FC = () => {
  // Define navigation items with their types
  const navItems: NavItem[] = [
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #111827, #374151)', // from-gray-900 to-gray-700 equivalent
        color: '#f9fafb', // gray-100 equivalent
        p: 2, // p-4 equivalent
        fontFamily: 'Inter, sans-serif', // Using Inter font
      }}
    >
      {/* Main content area */}
      <ContentBox>
        {/* Welcome Section */}
        <Typography
          variant="h3" // Equivalent to text-5xl md:text-6xl
          component="h1"
          sx={{
            fontWeight: 'extrabold', // font-extrabold
            mb: 2, // mb-4 equivalent
            background: 'linear-gradient(to right, #60a5fa, #a855f7)', // from-blue-400 to-purple-600
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            '@media (min-width: 768px)': { // md:text-6xl
              fontSize: '4rem', // Adjust as needed for md:text-6xl
            },
          }}
        >
          Hello, I'm Maneesh!
        </Typography>
        <Typography
          variant="h5" // Equivalent to text-xl md:text-2xl
          sx={{
            mb: 4, // mb-8 equivalent
            color: '#d1d5db', // gray-300 equivalent
            '@media (min-width: 768px)': { // md:text-2xl
              fontSize: '1.5rem', // Adjust as needed for md:text-2xl
            },
          }}
        >
          A Software Engineer passionate about building impactful web applications.
        </Typography>

        {/* Navigation Section */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2, // gap-4 equivalent
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              href={item.path} // Using href for now; replace with Link from react-router-dom later
              variant="contained"
              sx={{
                px: 3, // px-6 equivalent
                py: 1.5, // py-3 equivalent
                backgroundColor: '#2563eb', // blue-600 equivalent
                '&:hover': {
                  backgroundColor: '#1d4ed8', // blue-700 equivalent
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)', // shadow-md equivalent
                },
                color: 'white',
                fontWeight: 'semibold',
                borderRadius: '8px', // rounded-lg equivalent
                transition: 'all 0.3s ease-in-out',
                textTransform: 'none', // Prevent uppercase default for MUI Button
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </ContentBox>

      {/* Optional: Footer or decorative element */}
      <Typography variant="caption" sx={{ mt: 6, color: '#9ca3af' }}>
        &copy; {new Date().getFullYear()} Maneesh. All rights reserved.
      </Typography>
    </Box>
  );
};


// Define a custom MUI theme (optional, but good practice for consistency)
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Enable dark mode
    primary: {
      main: '#2563eb', // blue-600
    },
    secondary: {
      main: '#a855f7', // purple-600
    },
    background: {
      default: '#111827', // dark background
      paper: '#1f2937', // slightly lighter for cards/surfaces
    },
    text: {
      primary: '#f9fafb', // light text
      secondary: '#d1d5db', // slightly darker secondary text
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '3rem', // Default for h1, will be overridden by sx prop in HomePage
    },
    h3: {
      fontSize: '2.5rem', // Default for h3, will be overridden by sx prop in HomePage
    },
    h5: {
      fontSize: '1.25rem', // Default for h5, will be overridden by sx prop in HomePage
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // You can add global button styles here if needed
        },
      },
    },
  },
});

// The main App component that renders your portfolio.
const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline provides a consistent baseline to build upon. */}
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
