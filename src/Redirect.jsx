import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Settings from './Settings.jsx';

function Redirect() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root URL to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Your actual page routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Redirect;