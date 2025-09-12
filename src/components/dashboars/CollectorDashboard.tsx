import React from 'react';
import { Truck, AlertTriangle, CheckCircle, Clock, MapPin, Scale } from 'lucide-react';
import { mockCollectionRecords, mockAlerts } from '../../utils/mockData';

const CollectorDashboard: React.FC = () => {
  const todayCollections = mockCollectionRecords.length;
  const completedCollections = mockCollectionRecords.filter(r => r.status === 'completed').length;
  const averageAccuracy = mockCollectionRecords.reduce((acc, curr) => acc + curr.segregationAccuracy, 0) / mockCollectionRecords.length;
  
  const alerts = mockAlerts.filter(alert => alert.type === 'warning' || alert.type === 'error');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'improper': return 'text-red-600 bg-red-100';
      default: return 'text-yellow-600 bg-yellow-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'improper': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Collector Dashboard</h1>
          <p className="text-gray-600">Manage your daily collections and monitor accuracy</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Today's Collections</p>
                <p className="text-2xl font-bold text-blue-600">{todayCollections}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-green-600">{completedCollections}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Avg. Accuracy</p>
                <p className="text-2xl font-bold text-orange-600">{averageAccuracy.toFixed(1)}%</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Scale className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Alerts</p>
                <p className="text-2xl font-bold text-red-600">{alerts.length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Collection Records */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Today's Collection Records</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Address</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Waste Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Weight</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Accuracy</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCollectionRecords.map((record) => (
                    <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-gray-800">{record.address}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{record.wasteType}</td>
                      <td className="py-4 px-4 text-gray-600">{record.weight} kg</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-12 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                record.segregationAccuracy >= 90 ? 'bg-green-500' : 
                                record.segregationAccuracy >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${record.segregationAccuracy}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{record.segregationAccuracy}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(record.status)}`}>
                          {getStatusIcon(record.status)}
                          <span>{record.status}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Active Alerts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="flex items-start space-x-4 p-4 border-l-4 border-red-400 bg-red-50 rounded-lg"
                >
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-red-800 font-medium">{alert.message}</p>
                    {alert.location && (
                      <p className="text-red-600 text-sm flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {alert.location}
                      </p>
                    )}
                    <p className="text-red-500 text-sm">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                    Resolve
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;
