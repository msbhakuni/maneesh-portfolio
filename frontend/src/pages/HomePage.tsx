import { Box, Card, CardContent, Typography } from '@mui/material';

function HomePage() {
  // The header/sidebar is 200px wide, so add a left margin to avoid overlap
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 5,
        width: { xs: '95vw', sm: 'calc(100vw - 220px)' }, // Add a little extra for margin
        maxWidth: 1200,
        justifyItems: 'stretch',
        px: { xs: 2, sm: 3, md: 4 }, // Add horizontal padding for margin
        ml: { xs: 2, sm: '250px' }, // Add margin between header (240px) and grid
        mr: { xs: 2, sm: 2 }, // Restore previous right margin
      }}
    >
      {/* 1st Card: Experience */}
      <Card sx={{ minHeight: 260, width: '100%', background: 'linear-gradient(135deg, #4f8cff 0%, #a084ee 100%)', color: 'white', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            3+ Years Experience
          </Typography>
          <Typography variant="h6">
            Building software solutions with passion and precision.
          </Typography>
        </CardContent>
      </Card>
      {/* 2nd Card: Quote */}
      <Card sx={{ minHeight: 260, width: '100%', background: 'linear-gradient(135deg, #a084ee 0%, #4f8cff 100%)', color: 'white', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent>
          <Typography variant="h4" fontStyle="italic" gutterBottom>
            "Code is like humor. When you have to explain it, it’s bad."
          </Typography>
          <Typography variant="h6" align="right">
            – Cory House
          </Typography>
        </CardContent>
      </Card>
      {/* 3rd Card: Projects */}
      <Card sx={{ minHeight: 260, width: '100%', background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)', color: 'white', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Projects
          </Typography>
          <Typography variant="h6">
            Explore all my work and case studies.
          </Typography>
        </CardContent>
      </Card>
      {/* 4th Card: Skills */}
      <Card sx={{ minHeight: 260, width: '100%', background: 'linear-gradient(135deg, #f472b6 0%, #6366f1 100%)', color: 'white', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Skills
          </Typography>
          <Typography variant="h6">
            Discover my technical expertise and tools.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomePage;