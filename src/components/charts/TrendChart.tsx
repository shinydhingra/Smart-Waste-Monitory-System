import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TrendChartProps {
  data: Array<{
    month: string;
    compliance: number;
    organic: number;
    recyclable: number;
  }>;
}

const TrendChart: React.FC<TrendChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Compliance Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${value}%`, 
              name === 'compliance' ? 'Compliance Rate' : `${name} Segregation`
            ]}
          />
          <Legend />
          <Line type="monotone" dataKey="compliance" stroke="#16A34A" strokeWidth={3} />
          <Line type="monotone" dataKey="organic" stroke="#0EA5E9" strokeWidth={2} />
          <Line type="monotone" dataKey="recyclable" stroke="#F59E0B" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
