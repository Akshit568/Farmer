import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageCircle, Bot, User, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const sampleConversation = [
  { role: 'user', text: 'എന്റെ വിളയ്ക്ക് രോഗമുണ്ടോ?', translation: 'Does my crop have disease?' },
  {
    role: 'bot',
    text: 'നിങ്ങളുടെ വിളയുടെ ഇലകളിൽ മഞ്ഞനിറം കാണുന്നുണ്ടോ? ദയവായി കൂടുതൽ വിവരങ്ങൾ നൽകുക.',
    translation: 'Are you seeing yellowing on the leaves of your crop? Please provide more details.'
  },
  { role: 'user', text: 'അതെ, ഇലകൾ മഞ്ഞയാണ്', translation: 'Yes, the leaves are yellow' },
  {
    role: 'bot',
    text: 'നൈട്രജൻ കുറവായിരിക്കാം. യൂറിയ 50 കിലോ/ഹെക്ടർ എന്ന അളവിൽ പ്രയോഗിക്കുക. 7 ദിവസത്തിനുള്ളിൽ പുരോഗതി കാണും.',
    translation: 'This may be nitrogen deficiency. Apply urea at 50 kg/hectare. You should see improvement within 7 days.'
  },
];

export const ChatbotDemo = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [messages, setMessages] = useState<typeof sampleConversation>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isVisible || currentIndex >= sampleConversation.length) return;

    const timer = setTimeout(() => {
      if (sampleConversation[currentIndex].role === 'bot') {
        setIsTyping(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, sampleConversation[currentIndex]]);
          setIsTyping(false);
          setCurrentIndex((prev) => prev + 1);
        }, 1500);
      } else {
        setMessages((prev) => [...prev, sampleConversation[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, currentIndex === 0 ? 500 : 2000);

    return () => clearTimeout(timer);
  }, [isVisible, currentIndex]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzFCNUUyMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-5 h-5" />
            <span className="font-poppins font-medium">Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-darktext mb-4">
            Experience the Chatbot
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-3xl mx-auto">
            Natural Malayalam conversation for agricultural advisory
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-r from-primary to-green-light p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-poppins font-semibold text-lg">AI Farm Advisor</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''} animate-slide-up`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-accent to-sky-custom'
                        : 'bg-gradient-to-br from-primary to-green-light'
                    }`}>
                      {message.role === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'text-right' : ''}`}>
                      <div className={`inline-block p-4 rounded-2xl shadow-md ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-accent to-sky-custom text-white rounded-tr-none'
                          : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                      }`}>
                        <p className="font-inter leading-relaxed mb-1">{message.text}</p>
                        <p className={`text-xs italic ${message.role === 'user' ? 'text-white/80' : 'text-gray-500'}`}>
                          {message.translation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start gap-3 animate-fade-in">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-green-light">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-gray-200">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക... (Type your question...)"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                  disabled
                />
                <button className="p-3 bg-gradient-to-r from-primary to-green-light text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={`mt-8 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-600 font-inter">
              Demo showcasing natural language interaction in Malayalam with intelligent agricultural advisory
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
