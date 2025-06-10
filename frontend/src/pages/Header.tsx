import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar, // Import Avatar for the profile picture
  Divider, // Import Divider for horizontal separation
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work'; // Icon for Experience
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'; // Icon for Projects
import CodeIcon from '@mui/icons-material/Code'; // Icon for Skills
import SchoolIcon from '@mui/icons-material/School'; // Icon for Education
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Icon for Contact
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240; // Increased width for the header/sidebar

const Header: React.FC = () => {
  const navigate = useNavigate();
  // Define navigation items with their text, icons, and paths
  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Experience', icon: <WorkIcon />, path: '/experience' },
    { text: 'Projects', icon: <FolderSpecialIcon />, path: '/projects' },
    { text: 'Skills', icon: <CodeIcon />, path: '/skills' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> {/* Resets CSS for consistent rendering */}
      <Drawer
        variant="permanent" // Makes the drawer always visible
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(135deg, #4f8cff 0%, #a084ee 100%)', // Attractive blue to purple gradient
            color: 'white', // White text color for contrast
            borderRight: 'none', // Remove border for a cleaner look
            boxShadow: '2px 0 5px rgba(0,0,0,0.2)', // Subtle shadow
            borderRadius: '0 8px 8px 0', // Rounded right corners
            display: 'flex', // Use flex for internal layout
            flexDirection: 'column', // Stack content vertically
            alignItems: 'center', // Center items horizontally
            p: 2, // Padding inside the drawer
          },
        }}
      >
        {/* Profile Picture and Name Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 2, // Reduced margin-bottom to decrease gap before navigation items
            mt: 2, // Margin top for spacing from the top of the drawer
            width: '100%', // Ensure the box takes full width for divider alignment
          }}
        >
          <Avatar
            alt="Maneesh Bhakuni"
            src="https://placehold.co/120x120/E0E0E0/3F51B5?text=MB" // Placeholder image for the avatar
            sx={{ width: 96, height: 96, mb: 1, border: '2px solid white' }} // Increased width and height for larger avatar
          />
          <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'white' }}>
            Maneesh Bhakuni
          </Typography>
          <Divider sx={{ width: '80%', my: 2, backgroundColor: 'rgba(255,255,255,0.3)' }} /> {/* White semi-transparent divider */}
        </Box>
        {/* End Profile Picture and Name Section */}

        <List sx={{ width: '100%' }}> {/* List for navigation items */}
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  borderRadius: '8px',
                  py: 1.5, // Vertical padding for buttons
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)', // Light hover effect
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}> {/* White icons */}
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ '& .MuiListItemText-primary': { fontWeight: 'medium' } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth}px` }}>

      </Box>
    </Box>
  );
};

export default Header; // Exporting Header
