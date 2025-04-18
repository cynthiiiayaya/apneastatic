import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TableDetailPage from './pages/TableDetailPage';
import SettingsPage from './pages/SettingsPage';
import HistoryPage from './pages/HistoryPage';
import { TimerProvider } from './contexts/TimerContext';
import { TableProvider } from './contexts/TableContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <TableProvider>
        <TimerProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/:tableId" element={<TableDetailPage />} />
              </Routes>
            </Layout>
          </Router>
        </TimerProvider>
      </TableProvider>
    </UserProvider>
  );
}

export default App;