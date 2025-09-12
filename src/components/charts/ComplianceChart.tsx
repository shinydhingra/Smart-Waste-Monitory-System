import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ComplianceChartProps {
  data: Array<{
    household: string;
    compliance: number;
    wasteGenerated: number;
    rewardPoints: number;
  }>;
}

const ComplianceChart: React.FC<ComplianceChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Household Compliance Rates</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="household" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${value}${name === 'compliance' ? '%' : name === 'wasteGenerated' ? 'kg' : ' pts'}`,
              name === 'compliance' ? 'Compliance' : name === 'wasteGenerated' ? 'Waste Generated' : 'Reward Points'
            ]}
          />
          <Legend />
          <Bar dataKey="compliance" fill="#16A34A" name="Compliance %" />
          <Bar dataKey="rewardPoints" fill="#0EA5E9" name="Reward Points" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComplianceChart;
