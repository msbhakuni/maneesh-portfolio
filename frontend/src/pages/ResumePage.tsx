import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled iframe for embedding the PDF resume
// This ensures the PDF viewer is responsive and visually integrated with the theme.
const PDFViewer = styled('iframe')({
  width: '100vw', // Full viewport width
  height: '100vh', // Full viewport height
  border: 'none', // No border
  borderRadius: 0, // No border radius
  marginTop: 0, // No top margin
  display: 'block', // Remove inline gap
});

// ResumePage component displays a welcome message, a download button, and an embedded PDF.
const ResumePage: React.FC = () => {
  const resumePath = '/src/assets/Maneesh_Resume.pdf';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        background: 'linear-gradient(to bottom right, #111827, #374151)',
        p: 0,
        m: 0,
      }}
    >
      <PDFViewer src={resumePath} title="Maneesh's Resume" />
    </Box>
  );
};

export default ResumePage;
