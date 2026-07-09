import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DocLayout } from './components/DocLayout';
import { DocPageRenderer } from './components/DocPageRenderer';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { docsData } from './data/docsData';

// Resolve page from route param and render with layout
const DocPageWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const page = docsData.find(p => p.id === id);

  if (!page) return <Navigate to="/docs/welcome" replace />;

  return (
    <DocLayout page={page}>
      <DocPageRenderer page={page} />
    </DocLayout>
  );
};

// Landing page with shared layout but custom home content + footer
const HomeWrapper: React.FC = () => {
  const welcomeDoc = docsData[0];

  const handleSearchTrigger = () => {
    window.dispatchEvent(new CustomEvent('open-nola-search'));
  };

  return (
    <DocLayout page={welcomeDoc}>
      <Home onSearchClick={handleSearchTrigger} />
      <Footer />
    </DocLayout>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/docs/:id" element={<DocPageWrapper />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
