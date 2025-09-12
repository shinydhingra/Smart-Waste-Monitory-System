import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface WasteDistributionChartProps {
  data: Array<{
    month: string;
    organic: number;
    recyclable: number;
    hazardous: number;
    general: number;
  }>;
}

const WasteDistributionChart: React.FC<WasteDistributionChartProps> = ({ data }) => {
  const latestMonth = data[data.length - 1];
  
  const pieData = [
    { name: 'Organic', value: latestMonth.organic, color: '#16A34A' },
    { name: 'Recyclable', value: latestMonth.recyclable, color: '#0EA5E9' },
    { name: 'Hazardous', value: latestMonth.hazardous, color: '#EF4444' },
    { name: 'General', value: latestMonth.general, color: '#6B7280' }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Waste Distribution ({latestMonth.month})</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteDistributionChart;
