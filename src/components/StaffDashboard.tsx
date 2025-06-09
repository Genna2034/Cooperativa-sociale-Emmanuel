import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  LogOut, 
  CheckCircle, 
  AlertCircle,
  BarChart,
  Settings,
  Home,
  Phone
} from 'lucide-react';

interface User {
  username: string;
  name: string;
  role: string;
  profession?: string;
  permissions: string[];
}

interface AttendanceRecord {
  id: string;
  staffName: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  location: string;
  status: 'present' | 'absent' | 'late' | 'on_break';
  hoursWorked?: number;
}

const StaffDashboard = ({ user, onLogout }: { user: User; onLogout: () => void }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Demo data
  const demoAttendance: AttendanceRecord[] = [
    {
      id: '1',
      staffName: 'Maria Rossi',
      date: '2024-12-06',
      clockIn: '08:00',
      clockOut: '16:00',
      location: 'Napoli Centro',
      status: 'present',
      hoursWorked: 8
    },
    {
      id: '2',
      staffName: 'Giuseppe Verdi',
      date: '2024-12-06',
      clockIn: '08:15',
      location: 'Vomero',
      status: 'late',
      hoursWorked: 0
    },
    {
      id: '3',
      staffName: 'Anna Bianchi',
      date: '2024-12-06',
      clockIn: '07:45',
      clockOut: '15:45',
      location: 'Fuorigrotta',
      status: 'present',
      hoursWorked: 8
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    setAttendanceRecords(demoAttendance);
    return () => clearInterval(timer);
  }, []);

  const handleClockInOut = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    
    if (!isClockedIn) {
      // Clock In
      const newRecord: AttendanceRecord = {
        id: Date.now().toString(),
        staffName: user.name,
        date: now.toISOString().split('T')[0],
        clockIn: timeString,
        location: 'Napoli Centro',
        status: 'present'
      };
      setAttendanceRecords([newRecord, ...attendanceRecords]);
      setIsClockedIn(true);
      alert(`Entrata registrata alle ${timeString}`);
    } else {
      // Clock Out
      const updatedRecords = attendanceRecords.map(record => {
        if (record.staffName === user.name && !record.clockOut) {
          const clockInTime = new Date(`2024-01-01 ${record.clockIn}`);
          const clockOutTime = new Date(`2024-01-01 ${timeString}`);
          const hoursWorked = (clockOutTime.getTime() - clockInTime.getTime()) / (1000 * 60 * 60);
          
          return {
            ...record,
            clockOut: timeString,
            hoursWorked: Math.round(hoursWorked * 100) / 100
          };
        }
        return record;
      });
      setAttendanceRecords(updatedRecords);
      setIsClockedIn(false);
      alert(`Uscita registrata alle ${timeString}`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'text-green-600 bg-green-100';
      case 'late': return 'text-orange-600 bg-orange-100';
      case 'absent': return 'text-red-600 bg-red-100';
      case 'on_break': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present': return 'Presente';
      case 'late': return 'In Ritardo';
      case 'absent': return 'Assente';
      case 'on_break': return 'In Pausa';
      default: return 'Sconosciuto';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Staff Presente Oggi</p>
              <p className="text-2xl font-bold text-gray-800">
                {attendanceRecords.filter(r => r.status === 'present').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Ore Lavorate Oggi</p>
              <p className="text-2xl font-bold text-gray-800">
                {attendanceRecords.reduce((sum, r) => sum + (r.hoursWorked || 0), 0)}h
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Zone Coperte</p>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clock In/Out */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Timbratura</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Ora Attuale</p>
            <p className="text-2xl font-bold text-gray-800">
              {currentTime.toLocaleTimeString('it-IT')}
            </p>
            <p className="text-sm text-gray-500">
              {currentTime.toLocaleDateString('it-IT', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <button
            onClick={handleClockInOut}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isClockedIn 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isClockedIn ? 'Timbra Uscita' : 'Timbra Entrata'}
          </button>
        </div>
      </div>

      {/* Recent Attendance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Presenze Oggi</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Nome</th>
                <th className="text-left py-2">Entrata</th>
                <th className="text-left py-2">Uscita</th>
                <th className="text-left py-2">Zona</th>
                <th className="text-left py-2">Stato</th>
                <th className="text-left py-2">Ore</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record) => (
                <tr key={record.id} className="border-b">
                  <td className="py-2">{record.staffName}</td>
                  <td className="py-2">{record.clockIn}</td>
                  <td className="py-2">{record.clockOut || '-'}</td>
                  <td className="py-2">{record.location}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(record.status)}`}>
                      {getStatusText(record.status)}
                    </span>
                  </td>
                  <td className="py-2">{record.hoursWorked || 0}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Pianificazione Turni</h3>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map(day => (
          <div key={day} className="text-center font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="border rounded p-2 min-h-[100px]">
            <div className="text-sm text-gray-600">{i + 1}</div>
            {i < 5 && (
              <div className="mt-2">
                <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded mb-1">
                  08:00-16:00
                </div>
                <div className="text-xs text-gray-600">ADI Napoli</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/images/Logo.png" alt="Emmanuel" className="h-8 w-8 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Area Staff Emmanuel</h1>
                <p className="text-sm text-gray-600">Benvenuto, {user.name}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Esci
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart },
              { id: 'schedule', label: 'Turni', icon: Calendar },
              { id: 'reports', label: 'Report', icon: Clock },
              { id: 'settings', label: 'Impostazioni', icon: Settings }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'reports' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Report Presenze</h3>
            <p className="text-gray-600">Funzionalità in sviluppo...</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Impostazioni</h3>
            <p className="text-gray-600">Funzionalità in sviluppo...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;