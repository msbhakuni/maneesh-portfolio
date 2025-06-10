import Header from './pages/Header.tsx';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  // Hide sidebar/header for both /resume and /resume-full
  const hideSidebar = location.pathname === '/resume' || location.pathname === '/resume-full';

  return (
    // Main container for the entire application, applying general styling
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {!hideSidebar && <Header />}
      <main style={{ flexGrow: 1, background: 'inherit' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
