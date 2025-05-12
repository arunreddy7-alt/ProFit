'use client';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

export default function FitnessChat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const defaultQuestions = [
    "Create a beginner workout plan for me",
    "What should I eat before a workout?",
    "Help me plan a high-protein meal plan",
    "How can I improve my running endurance?",
    "Give me a 7-day weight loss meal plan"
  ];

  // Predefined responses for default questions
  const defaultResponses = {
    "Create a beginner workout plan for me": 
      "Here's a simple beginner workout plan:\n\n" +
      "Monday: 30 min walking + 3 sets of 10 squats, 10 push-ups, 10 sit-ups\n" +
      "Tuesday: Rest day\n" +
      "Wednesday: 30 min walking + 3 sets of 10 lunges, 10 dumbbell rows, 10 crunches\n" +
      "Thursday: Rest day\n" +
      "Friday: 30 min walking + Full body stretching\n" +
      "Weekend: Active recovery - light walking, swimming, or cycling\n\n" +
      "Start with light weights and focus on form. Increase intensity gradually each week.",
    
    "What should I eat before a workout?": 
      "For pre-workout nutrition:\n\n" +
      "1-3 hours before: Balanced meal with protein and complex carbs (chicken with brown rice, oatmeal with protein)\n" +
      "30-60 minutes before: Light snack (banana, toast with honey, small smoothie)\n" +
      "Stay hydrated by drinking 16-20oz of water 2-3 hours before exercise\n\n" +
      "Avoid heavy, fatty, or high-fiber foods right before working out as they may cause discomfort.",
    
    "Help me plan a high-protein meal plan":
      "High-Protein Meal Plan:\n\n" +
      "Breakfast: Greek yogurt with berries and nuts or 3-egg omelet with vegetables\n" +
      "Lunch: Grilled chicken salad with quinoa or tuna wrap with whole grain bread\n" +
      "Dinner: Baked salmon with roasted vegetables or lean beef stir-fry with broccoli\n" +
      "Snacks: Protein shake, cottage cheese, turkey slices, or hard-boiled eggs\n\n" +
      "Aim for 0.8-1g of protein per pound of body weight daily, spread across all meals.",
    
    "How can I improve my running endurance?":
      "To improve running endurance:\n\n" +
      "1. Follow the 10% rule - increase weekly mileage by no more than 10%\n" +
      "2. Add one long run per week (increase by 5-10 minutes each week)\n" +
      "3. Include interval training: alternate between high intensity and recovery periods\n" +
      "4. Try tempo runs at a challenging but sustainable pace\n" +
      "5. Cross-train with swimming, cycling, or strength training\n" +
      "6. Ensure proper nutrition and hydration\n" +
      "7. Get adequate rest between training sessions\n\n" +
      "Consistency is key - run at least 3-4 times per week.",
    
    "Give me a 7-day weight loss meal plan":
      "7-Day Weight Loss Meal Plan:\n\n" +
      "Day 1-7 Pattern:\n" +
      "Breakfast: Protein smoothie or egg whites with vegetables\n" +
      "Lunch: Lean protein (chicken/fish) with large salad and olive oil dressing\n" +
      "Dinner: Grilled protein with steamed vegetables\n" +
      "Snacks: Apple with almond butter, Greek yogurt, or vegetable sticks\n\n" +
      "Tips: Drink plenty of water, limit processed foods and added sugars, control portion sizes, and include protein in every meal. Aim for a 500 calorie deficit daily for sustainable weight loss."
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage('');
    setChat(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setChat(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm a demo version of the fitness coach." 
      }]);
      setLoading(false);
    }, 1000);
  };

  const handleDefaultQuestion = (question) => {
    setMessage('');
    setChat(prev => [...prev, { role: 'user', content: question }]);
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setChat(prev => [...prev, { 
        role: 'assistant', 
        content: defaultResponses[question] 
      }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 min-h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chat.length === 0 && (
            <div className="text-center text-gray-500 my-8">
              <p className="text-lg mb-2">👋 Welcome to ProFit AI Coach!</p>
              <p className="text-sm mb-6">
                Ask me anything about workouts, nutrition, or fitness goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {defaultQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleDefaultQuestion(question)}
                    className="text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-4 rounded-lg max-w-[80%] ${
                  msg.role === 'user' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about workouts, nutrition, or fitness..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
