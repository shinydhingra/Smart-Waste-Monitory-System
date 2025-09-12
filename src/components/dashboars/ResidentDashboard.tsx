import React from 'react';
import { Award, TrendingUp, AlertTriangle, CheckCircle, Recycle, Leaf } from 'lucide-react';
import { mockWasteData, mockAlerts } from '../../utils/mockData';
import WasteDistributionChart from '../charts/WasteDistributionChart';
import TrendChart from '../charts/TrendChart';

const ResidentDashboard: React.FC = () => {
  const currentCompliance = 92;
  const rewardPoints = 1250;
  const monthlyWaste = 45.2;
  
  const notifications = mockAlerts.filter(alert => 
    alert.type === 'success' || alert.type === 'info'
  ).slice(0, 3);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Resident Dashboard</h1>
          <p className="text-gray-600">Track your waste segregation and earn rewards</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Compliance Rate</p>
                <p className="text-3xl font-bold text-green-600">{currentCompliance}%</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +3% from last month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Reward Points</p>
                <p className="text-3xl font-bold text-blue-600">{rewardPoints.toLocaleString()}</p>
                <p className="text-blue-600 text-sm flex items-center mt-1">
                  <Award className="h-4 w-4 mr-1" />
                  +125 this month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Monthly Waste</p>
                <p className="text-3xl font-bold text-orange-600">{monthlyWaste} kg</p>
                <p className="text-orange-600 text-sm flex items-center mt-1">
                  <Recycle className="h-4 w-4 mr-1" />
                  -2.3kg from last month
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <WasteDistributionChart data={mockWasteData} />
          <TrendChart data={mockWasteData} />
        </div>

        {/* Recent Notifications */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Notifications</h3>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-full ${
                  notification.type === 'success' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {notification.type === 'success' 
                    ? <CheckCircle className="h-5 w-5" />
                    : <AlertTriangle className="h-5 w-5" />
                  }
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{notification.message}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(notification.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentDashboard;
