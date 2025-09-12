import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  BarChart3, 
  Truck, 
  Award, 
  Settings, 
  LogOut, 
  Leaf,
  Bell,
  FileText,
  Users
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const { user, logout } = useAuth();

  const getMenuItems = () => {
    switch (user?.role) {
      case 'resident':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'compliance', label: 'Compliance', icon: BarChart3 },
          { id: 'rewards', label: 'Rewards', icon: Award },
          { id: 'notifications', label: 'Notifications', icon: Bell }
        ];
      case 'collector':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'collections', label: 'Collections', icon: Truck },
          { id: 'alerts', label: 'Alerts', icon: Bell },
          { id: 'reports', label: 'Reports', icon: FileText }
        ];
      case 'authority':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'households', label: 'Households', icon: Users },
          { id: 'reports', label: 'Reports', icon: FileText }
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="bg-white h-screen w-64 shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <Leaf className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">SegreTrack</h1>
            <p className="text-sm text-gray-500 capitalize">{user?.role} Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3 mb-4">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-semibold">
                {user?.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <button
            onClick={() => onViewChange('settings')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span className="text-sm">Settings</span>
          </button>
          
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
