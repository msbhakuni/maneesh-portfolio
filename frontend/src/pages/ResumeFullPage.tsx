import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const PDFViewer = styled('iframe')({
  width: '100vw',
  height: '100vh',
  border: 'none',
  background: '#181e29',
});

const ResumeFullPage: React.FC = () => {
  const resumePath = '/src/assets/Maneesh_Resume.pdf';

  return (
    <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#181e29', p: 0, m: 0, position: 'relative' }}>
      <Button
        variant="contained"
        color="primary"
        href={resumePath}
        download="Maneesh_Resume.pdf"
        sx={{ position: 'absolute', top: 24, right: 24, zIndex: 10, fontWeight: 'bold', borderRadius: 2, textTransform: 'none', px: 4, py: 1.5 }}
      >
        Download PDF
      </Button>
      <PDFViewer src={resumePath} title="Maneesh's Resume Fullscreen" />
    </Box>
  );
};

export default ResumeFullPage;
