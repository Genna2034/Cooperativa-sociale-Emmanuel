import React, { useState } from 'react';
import StaffLogin from './StaffLogin';
import StaffDashboard from './StaffDashboard';

const StaffManagement = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <StaffLogin onLogin={handleLogin} />;
  }

  return <StaffDashboard user={user} onLogout={handleLogout} />;
};

export default StaffManagement;