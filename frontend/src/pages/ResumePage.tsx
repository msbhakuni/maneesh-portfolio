import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download'; // Import the download icon

// Styled Box for the content area to match your existing design
// This component provides the background, padding, border-radius, and shadow
// to give it a card-like appearance, consistent with the home page.
const ResumeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1f2937', // Equivalent to Tailwind's gray-800
  padding: theme.spacing(4), // Equivalent to Tailwind's p-8
  borderRadius: theme.shape.borderRadius * 2, // Equivalent to Tailwind's rounded-xl
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)', // Equivalent to Tailwind's shadow-2xl
  textAlign: 'center', // Center align text within the container
  maxWidth: '64rem', // Increased from '48rem' to '64rem' (e.g., Tailwind's max-w-5xl)
  width: '100%', // Ensures the container takes full width up to maxWidth
  minHeight: '70vh', // Sets a minimum height to ensure it takes up significant screen space
  display: 'flex', // Use flexbox for internal layout
  flexDirection: 'column', // Arrange children vertically
  alignItems: 'center', // Center children horizontally
  justifyContent: 'center', // Center content vertically within the container
  color: '#f9fafb', // Equivalent to Tailwind's gray-100 for text color
}));

// Styled iframe for embedding the PDF resume
// This ensures the PDF viewer is responsive and visually integrated with the theme.
const PDFViewer = styled('iframe')({
  width: '100%', // Take full width of its parent (ResumeContainer)
  height: '600px', // Fixed height for the PDF viewer, adjust as needed
  border: '1px solid #374151', // Subtle border to match the dark theme
  borderRadius: '8px', // Rounded corners for the iframe
  marginTop: '1.5rem', // Space above the PDF viewer
});

// ResumePage component displays a welcome message, a download button, and an embedded PDF.
const ResumePage: React.FC = () => {
  // Define the path to your resume PDF.
  // This assumes 'Maneesh_Resume.pdf' is placed directly in the 'public' folder of your React project.
  const resumePath = '/Maneesh_Resume.pdf';

  return (
    // Outer Box for the entire page, providing the background gradient and centering
    <Box
      sx={{
        minHeight: '100vh', // Ensures the background covers the entire viewport height
        display: 'flex', // Use flexbox for centering the ResumeContainer
        flexDirection: 'column', // Arrange children vertically
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center', // Center children vertically
        background: 'linear-gradient(to bottom right, #111827, #374151)', // Dark gradient background
        p: 2, // Padding around the entire page
      }}
    >
      {/* The main container for the resume content */}
      <ResumeContainer>
        {/* Page Title */}
        <Typography
          variant="h4" // Material-UI heading variant
          component="h2" // Semantic HTML tag for the heading
          sx={{
            fontWeight: 'bold', // Bold font weight
            mb: 2, // Margin bottom for spacing
            background: 'linear-gradient(to right, #60a5fa, #a855f7)', // Gradient text color
            WebkitBackgroundClip: 'text', // Clip background to text shape
            WebkitTextFillColor: 'transparent', // Make text transparent to show background
          }}
        >
          My Resume
        </Typography>

        {/* Introductory text */}
        <Typography variant="body1" sx={{ mb: 2, color: '#d1d5db' }}>
          Here's a preview of my resume. You can also download it directly.
        </Typography>

        {/* Download Button */}
        <IconButton
          href={resumePath} // Link to the PDF file
          download="Maneesh_Resume.pdf" // Suggests a filename when downloaded
          color="primary" // Uses the primary color from the MUI theme
          sx={{
            backgroundColor: '#2563eb', // Equivalent to Tailwind's blue-600
            '&:hover': { backgroundColor: '#1d4ed8' }, // Darker blue on hover
            px: 3, // Horizontal padding
            py: 1.5, // Vertical padding
            borderRadius: '8px', // Rounded corners
            color: 'white', // White text color
          }}
        >
          <DownloadIcon sx={{ mr: 1 }} /> Download Resume {/* Download icon with right margin */}
        </IconButton>

        {/* PDF Viewer iframe */}
        {/* The src attribute points to the PDF file in the public folder. */}
        {/* The title attribute provides accessibility for screen readers. */}
        <PDFViewer src={resumePath} title="Maneesh's Resume" />
      </ResumeContainer>
    </Box>
  );
};

export default ResumePage;
