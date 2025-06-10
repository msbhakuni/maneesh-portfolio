import Header from './pages/Header.tsx';
import { Outlet } from 'react-router-dom';

function App() {
  // State to manage which page is currently active
  
  return (
    // Main container for the entire application, applying general styling
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1, background: 'inherit' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
