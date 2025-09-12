import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Bell, Shield, Palette, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    name: user?.name || '',
    email: user?.email || '',
    notifications: {
      email: true,
      push: false,
      sms: false
    },
    privacy: {
      dataSharing: false,
      analytics: true
    },
    theme: 'light'
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and privacy settings</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <User className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => setSettings({...settings, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({...settings, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Bell className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Notification Preferences</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Email Notifications</p>
                  <p className="text-gray-600 text-sm">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.email}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, email: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Push Notifications</p>
                  <p className="text-gray-600 text-sm">Receive push notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.push}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, push: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Privacy & Security</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Data Sharing</p>
                  <p className="text-gray-600 text-sm">Share anonymous usage data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.dataSharing}
                    onChange={(e) => setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, dataSharing: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Analytics</p>
                  <p className="text-gray-600 text-sm">Allow performance analytics</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.analytics}
                    onChange={(e) => setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, analytics: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Palette className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Appearance</h2>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Theme
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['light', 'dark', 'auto'].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setSettings({...settings, theme})}
                    className={`p-3 border-2 rounded-lg text-center capitalize transition-colors ${
                      settings.theme === theme
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
