import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Sidebar from './components/layout/Sidebar';
import ResidentDashboard from './components/dashboards/ResidentDashboard';
import CollectorDashboard from './components/dashboards/CollectorDashboard';
import AuthorityDashboard from './components/dashboards/AuthorityDashboard';
import Settings from './components/Settings';

const AuthContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Login onSwitchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
};

const DashboardContainer: React.FC = () => {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    if (currentView === 'settings') {
      return <Settings />;
    }

    switch (user?.role) {
      case 'resident':
        return <ResidentDashboard />;
      case 'collector':
        return <CollectorDashboard />;
      case 'authority':
        return <AuthorityDashboard />;
      default:
        return <div className="p-6">Unknown role</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return user ? <DashboardContainer /> : <AuthContainer />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
