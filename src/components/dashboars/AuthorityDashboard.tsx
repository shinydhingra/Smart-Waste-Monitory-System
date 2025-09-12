import React from 'react';
import { BarChart3, Users, TrendingUp, Download, FileText, MapPin } from 'lucide-react';
import { mockWasteData, mockComplianceData, mockCollectionRecords } from '../../utils/mockData';
import ComplianceChart from '../charts/ComplianceChart';
import WasteDistributionChart from '../charts/WasteDistributionChart';
import TrendChart from '../charts/TrendChart';

const AuthorityDashboard: React.FC = () => {
  const totalHouseholds = 156;
  const avgCompliance = mockComplianceData.reduce((acc, curr) => acc + curr.compliance, 0) / mockComplianceData.length;
  const totalWasteCollected = mockCollectionRecords.reduce((acc, curr) => acc + curr.weight, 0);
  const improperSegregations = mockCollectionRecords.filter(r => r.status === 'improper').length;

  const exportReport = (format: 'pdf' | 'excel') => {
    // Simulate export functionality
    const data = {
      households: totalHouseholds,
      compliance: avgCompliance,
      wasteCollected: totalWasteCollected,
      improperSegregations
    };
    
    console.log(`Exporting ${format.toUpperCase()} report:`, data);
    alert(`${format.toUpperCase()} report export started! Check your downloads folder.`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Authority Dashboard</h1>
            <p className="text-gray-600">Monitor citywide waste segregation performance</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => exportReport('pdf')}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Export PDF</span>
            </button>
            <button 
              onClick={() => exportReport('excel')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Export Excel</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Households</p>
                <p className="text-3xl font-bold text-blue-600">{totalHouseholds}</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12 this month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Avg. Compliance</p>
                <p className="text-3xl font-bold text-green-600">{avgCompliance.toFixed(1)}%</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +5.2% this month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Waste Collected</p>
                <p className="text-3xl font-bold text-orange-600">{totalWasteCollected.toFixed(1)} kg</p>
                <p className="text-orange-600 text-sm flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  Today
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Improper Segregation</p>
                <p className="text-3xl font-bold text-red-600">{improperSegregations}</p>
                <p className="text-red-600 text-sm flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  -2 from yesterday
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ComplianceChart data={mockComplianceData} />
          <WasteDistributionChart data={mockWasteData} />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <TrendChart data={mockWasteData} />
        </div>

        {/* Collection Summary */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Recent Collection Summary</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {mockCollectionRecords.filter(r => r.status === 'completed').length}
                </div>
                <p className="text-green-700 font-medium">Completed Collections</p>
                <p className="text-green-600 text-sm">High segregation accuracy</p>
              </div>
              
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {mockCollectionRecords.filter(r => r.status === 'pending').length}
                </div>
                <p className="text-yellow-700 font-medium">Pending Collections</p>
                <p className="text-yellow-600 text-sm">Scheduled for today</p>
              </div>
              
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {improperSegregations}
                </div>
                <p className="text-red-700 font-medium">Improper Segregation</p>
                <p className="text-red-600 text-sm">Requires follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;
