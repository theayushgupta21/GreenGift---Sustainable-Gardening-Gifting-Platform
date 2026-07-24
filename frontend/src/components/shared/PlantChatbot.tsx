"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  CloudSun, 
  MapPin, 
  Heart, 
  RotateCcw, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  AlertCircle
} from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  options?: string[];
  type?: "text" | "selection" | "recommendation";
  recommendations?: Plant[];
}

interface Plant {
  name: string;
  desc: string;
  image: string;
  care: string;
}

// Plant Recommendation Database
const plantDb: Record<string, Plant[]> = {
  // Key format: location_weather_care
  "balcony_sunny_low": [
    {
      name: "Jade Plant (Crassula ovata) 🌿",
      desc: "A beautiful succulent with fleshy leaves that thrives in hot, sunny spots and needs minimal watering.",
      image: "/plant4.jfif",
      care: "Water only when soil is completely dry. Needs 4-6 hours of sunlight."
    },
    {
      name: "Aloe Vera 🌱",
      desc: "Medicinal powerhouse that loves bright direct sun and filters toxins from the air.",
      image: "/plant2.jfif",
      care: "Water once every 2 weeks. Use well-draining sandy soil."
    }
  ],
  "balcony_sunny_moderate": [
    {
      name: "Bougainvillea 🌸",
      desc: "Spectacular climbing shrub that produces vibrant paper-like flowers under intense summer heat.",
      image: "/plant3.jfif",
      care: "Requires full sun. Water moderately; drought increases flowering."
    }
  ],
  "balcony_sunny_high": [
    {
      name: "Vibrant Rose 🌹",
      desc: "Classic flowering plant that thrives in sunny balconies but requires regular pruning, pest protection, and feeding.",
      image: "/plant1.jfif",
      care: "Water daily in summer. Fertilize monthly. Prune spent blooms."
    }
  ],
  "indoor_desk_moderate_low": [
    {
      name: "Snake Plant (Sansevieria) 🐍",
      desc: "The ultimate beginner plant. Virtually indestructible, filters indoor air pollutants, and releases oxygen at night.",
      image: "/plant4.jfif",
      care: "Thrives on neglect. Water once a month. Low to indirect light."
    },
    {
      name: "ZZ Plant (Zamioculcas) 🌿",
      desc: "Features shiny waxy leaves and handles extremely dark corners and irregular watering with ease.",
      image: "/plant1.jfif",
      care: "Water once every 3 weeks. Tolerates very low light."
    }
  ],
  "indoor_desk_humid_low": [
    {
      name: "Peace Lily ☮️",
      desc: "Elegant deep green leaves with white spathes. Loves humidity and alerts you by drooping when thirsty.",
      image: "/plant3.jfif",
      care: "Keep soil moist. Thrives in medium indirect light and humid spots."
    },
    {
      name: "Boston Fern 🌿",
      desc: "Feathery emerald fronds that love moisture. Excellent for desktop decoration in humid rooms.",
      image: "/plant4.jfif",
      care: "Mist regularly. Keep soil consistently damp but not soggy."
    }
  ],
  "outdoor_garden_sunny_low": [
    {
      name: "Periwinkle (Sadabahar) 🌸",
      desc: "Hardy native Indian plant that blooms year-round in hot, sun-exposed outdoor garden soil.",
      image: "/plant2.jfif",
      care: "Water when topsoil dries. Extremely drought-resistant."
    }
  ],
  "living_room_moderate_low": [
    {
      name: "Golden Pothos (Money Plant) 🍃",
      desc: "Fast-growing vine with heart-shaped variegated leaves. Symbolizes prosperity and cleans indoor air.",
      image: "/plant1.jfif",
      care: "Water weekly. Grows in water or soil, medium to low light."
    }
  ],
  // Fallbacks
  "default": [
    {
      name: "Spider Plant 🕷️",
      desc: "Safe for pets, extremely resilient, produces tiny 'spiderettes' that hang beautifully from baskets.",
      image: "/plant4.jfif",
      care: "Water weekly. Bright to moderate indirect sunlight."
    },
    {
      name: "Snake Plant 🐍",
      desc: "Adapts to almost all indoor settings. Excellent air-purifier.",
      image: "/plant2.jfif",
      care: "Water once every 2-3 weeks. Indirect sunlight."
    }
  ]
};

// Help Q&A Database
const generalQA: Record<string, string> = {
  "watering": "Generally, it is safer to underwater than overwater. Stick your finger 1-2 inches into the soil: if dry, water it; if damp, wait. Ensure your pots have drainage holes so roots don't rot! 💧",
  "yellow leaves": "Yellow leaves usually signal overwatering, poor drainage, or a nutrient deficiency. Check if the soil is waterlogged. If it is, let it dry out completely before watering again. 🍂",
  "soil": "Most indoor plants love a light, chunky potting mix: 40% garden soil, 30% coco peat (for moisture), and 30% perlite or compost (for drainage). Succulents prefer sandier soil. 🏜️",
  "fertilizer": "Feed your plants during their active growing season (Spring and Summer) once a month. Liquid organic fertilizers, seaweed extract, or vermicompost work best! 🍃",
  "pests": "If you notice sticky residue or tiny bugs, spray the leaves with a diluted Neem Oil solution (1 tsp neem oil + 1/2 tsp mild soap in 1 liter of warm water) once a week. 🐛"
};

export default function PlantChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState<"none" | "location" | "weather" | "care" | "finished">("none");
  const [selections, setSelections] = useState({ location: "", weather: "", care: "" });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Global Event Listener to open chatbot from external components
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      handleReset();
    };
    window.addEventListener("open-plant-chatbot", handleOpenChat);
    return () => window.removeEventListener("open-plant-chatbot", handleOpenChat);
  }, []);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Hello! 🌿 I am Leafy, your GreenGift Assistant. Let's find your perfect plant match! Where do you plan to place your plant?",
          options: ["Balcony", "Indoor Desk", "Outdoor Garden", "Living Room"],
          type: "selection"
        }
      ]);
      setCurrentStep("location");
    }
  }, [messages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle click on multiple-choice options
  const handleOptionClick = (option: string) => {
    // Add user message
    const updatedMessages = [...messages, { sender: "user" as const, text: option, type: "text" as const }];
    setMessages(updatedMessages);

    if (currentStep === "location") {
      setSelections((prev) => ({ ...prev, location: option.toLowerCase().replace(" ", "_") }));
      setCurrentStep("weather");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Perfect! 📍 What is the general weather or climate in your area?`,
            options: ["Sunny / Hot", "Cold / Dry", "Humid / Rainy", "Moderate / Pleasant"],
            type: "selection"
          }
        ]);
      }, 600);
    } else if (currentStep === "weather") {
      // Map display option to DB key part
      let weatherKey = "moderate";
      if (option.includes("Sunny")) weatherKey = "sunny";
      else if (option.includes("Cold")) weatherKey = "cold";
      else if (option.includes("Humid")) weatherKey = "humid";

      setSelections((prev) => ({ ...prev, weather: weatherKey }));
      setCurrentStep("care");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Understood! ☀️ Finally, how much time can you spend caring for the plant?`,
            options: ["Low Maintenance (Beginner)", "Moderate Care", "Daily Attention (Enthusiast)"],
            type: "selection"
          }
        ]);
      }, 600);
    } else if (currentStep === "care") {
      let careKey = "moderate";
      if (option.includes("Low")) careKey = "low";
      else if (option.includes("Daily")) careKey = "high";

      const finalSelections = { ...selections, care: careKey };
      setSelections(finalSelections);
      setCurrentStep("finished");

      // Generate recommendation
      const dbKey = `${finalSelections.location}_${finalSelections.weather}_${finalSelections.care}`;
      const recs = plantDb[dbKey] || plantDb["default"];

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `🎉 Analysis Complete! Based on your local weather, ${option.toLowerCase()} care commitment, and placement in the ${finalSelections.location.replace("_", " ")}, here are my recommendations:`,
            type: "recommendation",
            recommendations: recs
          },
          {
            sender: "bot",
            text: "Would you like to search for another plant or ask me a care question? You can ask about: watering, yellow leaves, soil, pests, or fertilizer.",
            options: ["Restart Recommendation Builder", "Ask about watering", "Ask about yellow leaves"],
            type: "selection"
          }
        ]);
      }, 800);
    } else if (currentStep === "finished") {
      if (option.includes("Restart")) {
        handleReset();
      } else {
        const query = option.replace("Ask about ", "");
        handleGeneralQuestion(query);
      }
    }
  };

  // Reset/Restart the flow
  const handleReset = () => {
    setSelections({ location: "", weather: "", care: "" });
    setCurrentStep("location");
    setMessages([
      {
        sender: "bot",
        text: "Let's start fresh! 🌿 Where do you plan to place your plant?",
        options: ["Balcony", "Indoor Desk", "Outdoor Garden", "Living Room"],
        type: "selection"
      }
    ]);
  };

  // Answer specific care questions
  const handleGeneralQuestion = (topic: string) => {
    const cleanTopic = topic.toLowerCase();
    let responseText = "I'm not fully sure about that topic, but you can search our GreenGift store for natural products! Try typing keywords like 'watering', 'soil', 'pests', 'yellow leaves', or 'fertilizer'. 🌸";
    
    // Look up in simple Q&A DB
    for (const key in generalQA) {
      if (cleanTopic.includes(key)) {
        responseText = generalQA[key];
        break;
      }
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: responseText,
        type: "text"
      }
    ]);
  };

  // Handle typing custom message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { sender: "user", text: userText, type: "text" }]);
    setInputValue("");

    setTimeout(() => {
      handleGeneralQuestion(userText);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] cursor-pointer relative"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[10px] items-center justify-center font-bold text-emerald-950">1</span>
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[550px] bg-white border border-emerald-100 rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-wide">Leafy AI 🌿</h3>
                  <p className="text-[10px] text-emerald-300/80 font-medium">Smart Plant Advisor</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-emerald-100/60 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chatbot Messages List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-emerald-50/10">
              {messages.map((msg, index) => (
                <div key={index} className="space-y-3">
                  <div
                    className={`flex items-start gap-2.5 ${
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                        msg.sender === "user"
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    {/* Chat Bubble text */}
                    <div
                      className={`max-w-[75%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-emerald-600 text-white rounded-tr-none font-medium"
                          : "bg-white border border-emerald-100/60 text-gray-700 rounded-tl-none font-light"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  {/* Recommendation Details Card if present */}
                  {msg.type === "recommendation" && msg.recommendations && (
                    <div className="pl-9 space-y-3.5">
                      {msg.recommendations.map((plant, pIdx) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: pIdx * 0.15 }}
                          className="bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm flex flex-col"
                        >
                          <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url(${plant.image})` }} />
                          <div className="p-4 space-y-2">
                            <h4 className="font-extrabold text-emerald-950 text-sm">{plant.name}</h4>
                            <p className="text-[11px] text-gray-500 font-light leading-relaxed">{plant.desc}</p>
                            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-800 font-medium">
                              💡 <strong>Care:</strong> {plant.care}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Options List if present */}
                  {msg.sender === "bot" && msg.options && (
                    <div className="pl-9 flex flex-wrap gap-2 pt-1.5">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionClick(opt)}
                          className="px-3.5 py-2 rounded-xl border border-emerald-200 bg-white hover:bg-emerald-600 text-emerald-800 hover:text-white text-xs font-semibold transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar Form */}
            <form
              onSubmit={handleSendMessage}
              className="px-4 py-3 bg-white border-t border-emerald-50 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about watering, soil, yellow leaves..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-emerald-50/50 text-xs text-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-emerald-400 border border-emerald-100"
              />
              <button
                type="submit"
                className="w-9 h-9 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white shadow shrink-0 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
