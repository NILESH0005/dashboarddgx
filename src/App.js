import React, { useState, useEffect } from 'react';
import './App.css';
import './theme.css'; // Assuming theme.css defines the light/dark theme styles
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Sidebar } from './component/Sidebar';
import { Dashboard } from './component/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StudentModal } from './component/modals/StudentModal';
import { ThemeProvider, useTheme } from './ThemeContext'; // Import ThemeProvider and useTheme

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <ThemeProvider>
      <AppContent 
        openModal={openModal} 
        closeModal={closeModal} 
        isModalOpen={isModalOpen} // Pass the state here
      />
    </ThemeProvider>
  );
}

const AppContent = ({ openModal, closeModal, isModalOpen }) => {
  const { theme } = useTheme(); // Get current theme from context

  // Apply theme class globally
  useEffect(() => {
    document.body.setAttribute('data-theme', theme); // Dynamically change the data-theme attribute
  }, [theme]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        gridTemplateRows: 'auto 1fr auto',
        height: '100vh',
        gridTemplateAreas: '"header header" "sidebar content" "footer footer"',
      }}
    >
      {/* Header */}
      <div style={{ gridArea: 'header' }}>
        <Header /> {/* Theme toggle moved to Header */}
      </div>

      {/* Sidebar */}
      <div className={`${theme}`}style={{ gridArea: 'sidebar', marginTop: '20px' }}>
        <Sidebar openModal={openModal} />
      </div>

      {/* Main content area */}
      <div  style={{ gridArea: 'content',  }}>
        <div
          style={{
            backgroundColor: 'var(--card-background)',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Dashboard />
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridArea: 'footer' }}>
        <Footer />
      </div>

      {/* Show the modal only if isModalOpen is true */}
      {isModalOpen && <StudentModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
