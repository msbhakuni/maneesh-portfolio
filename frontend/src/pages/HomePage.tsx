import React from 'react';

// Main App component
const App: React.FC = () => {
  return (
    // Main container for the entire page, using flexbox for layout
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#87CEEB', fontFamily: 'Inter, sans-serif' }}>
      {/* Vertical Navigation Bar */}
      <nav style={{
        width: '250px',
        backgroundColor: '#D2B48C', // Light brown color for the nav bar
        padding: '16px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)', // Subtle shadow for elevation effect
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0 8px 8px 0', // Rounded right corners
        marginRight: '8px', // Small margin to separate from content
        margin: '8px 0 8px 8px' // Margin on all sides but top for alignment
      }}>
        {/* Profile Picture and Name */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center items horizontally
          marginBottom: '24px',
          borderBottom: '1px solid #E0E0E0', // Subtle divider
          paddingBottom: '16px'
        }}>
          <img
            src="https://placehold.co/80x80/cccccc/ffffff?text=Avatar" // Placeholder for profile picture
            alt="Profile Avatar"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%', // Make it round
              objectFit: 'cover',
              marginBottom: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)' // Slight shadow for the avatar
            }}
            // Fallback in case the image fails to load
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/80x80/cccccc/ffffff?text=User";
              e.currentTarget.alt = "Fallback Avatar";
            }}
          />
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333333',
            textAlign: 'center'
          }}>
            maneesh bhakuni
          </p>
        </div>
        {/* Navigation Links List */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
          {/* List Item for Home */}
          <li style={{ marginBottom: '8px' }}>
            <a
              href="#"
              style={{
                display: 'block',
                padding: '12px 16px',
                borderRadius: '4px', // Slightly rounded corners for list items
                color: '#555555',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                backgroundColor: '#E0E0E0', // Active/hover state background
                fontWeight: '500'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E0E0E0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Home
            </a>
          </li>
          {/* Other List Items */}
          <li style={{ marginBottom: '8px' }}>
            <a
              href="#"
              style={{
                display: 'block',
                padding: '12px 16px',
                borderRadius: '4px',
                color: '#555555',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E0E0E0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Dashboard
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a
              href="#"
              style={{
                display: 'block',
                padding: '12px 16px',
                borderRadius: '4px',
                color: '#555555',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E0E0E0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Settings
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a
              href="#"
              style={{
                display: 'block',
                padding: '12px 16px',
                borderRadius: '4px',
                color: '#555555',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E0E0E0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                display: 'block',
                padding: '12px 16px',
                borderRadius: '4px',
                color: '#555555',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E0E0E0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        {/* Page Title */}
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700', // Bold for main title
          color: '#333333',
          marginBottom: '24px'
        }}>
          Welcome to Your Material-Inspired Home Page
        </h1>
        {/* Content Paragraphs */}
        <p style={{
          fontSize: '16px',
          color: '#444444',
          lineHeight: '1.6',
          marginBottom: '16px'
        }}>
          This page features a design that visually resembles Material Design principles. The vertical
          navigation bar on the left provides a clear and accessible way to navigate through
          your application, while the main content area is spacious and designed for readability.
        </p>
        <p style={{
          fontSize: '16px',
          color: '#444444',
          lineHeight: '1.6',
          marginBottom: '16px'
        }}>
          You can extend this layout by adding more sections, cards, and interactive elements,
          all styled with a consistent Material-inspired aesthetic using standard CSS properties.
        </p>
        {/* Featured section, mimicking a Material Card */}
        <div style={{
          backgroundColor: '#F0F0F0', // Slightly darker background for the card
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Card shadow
          marginTop: '32px'
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#3F51B5', // A Material Blue color
            marginBottom: '16px'
          }}>
            Key Features (Material-Inspired):
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0, color: '#444444', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '8px' }}>Clean, flat design with subtle shadows.</li>
            <li style={{ marginBottom: '8px' }}>Intuitive vertical navigation sidebar.</li>
            <li style={{ marginBottom: '8px' }}>Spacious and readable content area.</li>
            <li style={{ marginBottom: '8px' }}>White background for a fresh and modern look.</li>
            <li>Customizable through inline styles for a Material-like feel.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
