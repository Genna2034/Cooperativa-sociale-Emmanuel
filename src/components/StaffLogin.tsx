import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Shield } from 'lucide-react';

interface LoginForm {
  username: string;
  password: string;
  role: 'admin' | 'staff';
}

const StaffLogin = ({ onLogin }: { onLogin: (user: any) => void }) => {
  const [formData, setFormData] = useState<LoginForm>({
    username: '',
    password: '',
    role: 'staff'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // DEMO USERS - In produzione questi dati verrebbero da un database sicuro
  const demoUsers = {
    admin: {
      username: 'admin.emmanuel',
      password: 'Emmanuel2024!',
      role: 'admin',
      name: 'Luigi Borriello',
      permissions: ['view_all', 'manage_staff', 'reports', 'settings']
    },
    coordinator: {
      username: 'gennaro.borriello',
      password: 'Coord2024!',
      role: 'coordinator',
      name: 'Dott. Gennaro Borriello',
      permissions: ['view_all', 'manage_schedules', 'reports']
    },
    staff1: {
      username: 'infermiere.01',
      password: 'Staff2024!',
      role: 'staff',
      name: 'Maria Rossi',
      profession: 'Infermiere Professionale',
      permissions: ['view_own', 'clock_in_out']
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula autenticazione
    setTimeout(() => {
      const user = Object.values(demoUsers).find(
        u => u.username === formData.username && u.password === formData.password
      );

      if (user) {
        onLogin(user);
      } else {
        alert('Credenziali non valide');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/images/Logo.png" 
            alt="Cooperativa Emmanuel" 
            className="h-16 w-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Area Riservata Staff</h1>
          <p className="text-gray-600">Cooperativa Sociale Emmanuel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                required
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Inserisci username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Inserisci password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
            ) : (
              <Shield className="h-5 w-5 mr-2" />
            )}
            {isLoading ? 'Accesso in corso...' : 'Accedi'}
          </button>
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">Demo Credenziali:</h3>
          <div className="text-sm space-y-1">
            <p><strong>Admin:</strong> admin.emmanuel / Emmanuel2024!</p>
            <p><strong>Coordinatore:</strong> gennaro.borriello / Coord2024!</p>
            <p><strong>Staff:</strong> infermiere.01 / Staff2024!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;