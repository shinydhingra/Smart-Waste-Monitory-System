import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogIn, Leaf, AlertCircle, Loader } from 'lucide-react';

interface LoginProps {
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid credentials. Try: john@resident.com, mike@collector.com, or sarah@authority.com');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const demoLogins = [
    { email: 'john@resident.com', role: 'Resident', color: 'text-green-600' },
    { email: 'mike@collector.com', role: 'Collector', color: 'text-blue-600' },
    { email: 'sarah@authority.com', role: 'Authority', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">SegreTrack</span>
          </div>
          <h2 className="text-xl text-gray-600">Smart Waste Segregation Monitoring</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? <Loader className="h-5 w-5 animate-spin" /> : <LogIn className="h-5 w-5" />}
            <span>{loading ? 'Signing In...' : 'Sign In'}</span>
          </button>
        </form>

        <div className="mt-8">
          <div className="text-center text-sm text-gray-600 mb-4">Demo Accounts:</div>
          <div className="space-y-2">
            {demoLogins.map((demo, index) => (
              <button
                key={index}
                onClick={() => {
                  setEmail(demo.email);
                  setPassword('demo123');
                }}
                className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{demo.email}</span>
                  <span className={`text-xs font-semibold ${demo.color}`}>{demo.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onSwitchToSignup}
            className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
