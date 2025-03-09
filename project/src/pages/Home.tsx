import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center text-white">
        <div className="mb-8 flex justify-center">
          <CheckCircle size={64} />
        </div>
        <h1 className="text-5xl font-bold mb-6">Task Management Made Simple</h1>
        <p className="text-xl mb-8">
          Organize your tasks, boost your productivity, and achieve your goals with our intuitive task
          management system.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};