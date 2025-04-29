
'use client';

import FitnessChat from '../../components/FitnessChat';

export default function AiCoach() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ProFit AI Coach</h1>
          <p className="text-lg text-gray-600">
            Your personal AI fitness assistant. Ask anything about workouts, nutrition, and wellness.
          </p>
        </div>
        <FitnessChat />
      </div>
    </div>
  );
}

