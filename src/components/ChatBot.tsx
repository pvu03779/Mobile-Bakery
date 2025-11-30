import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Bon Pas Bakery. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("hours") || message.includes("open")) {
      return "We're open Monday-Friday from 7am to 7pm, and Saturday-Sunday from 8am to 6pm. Come visit us!";
    } else if (message.includes("location") || message.includes("address") || message.includes("where")) {
      return "You can find us at 123 Baker Street, Sweet Town, ST 12345. We'd love to see you!";
    } else if (message.includes("phone") || message.includes("call") || message.includes("contact")) {
      return "You can reach us at (555) 123-4567 or email us at info@bonpasbakery.com.";
    } else if (message.includes("price") || message.includes("cost") || message.includes("how much")) {
      return "Our prices vary by product. Croissants start at $3.50, fresh bread at $4.50, and custom cakes from $35. Check our Products page for full pricing!";
    } else if (message.includes("order") || message.includes("delivery")) {
      return "We currently offer in-store pickup. For custom orders, please call us at (555) 123-4567 or visit our Contact page.";
    } else if (message.includes("cake") || message.includes("birthday") || message.includes("wedding")) {
      return "We specialize in custom cakes! Birthday cakes start at $35 and wedding cakes at $150. Contact us to discuss your design ideas!";
    } else if (message.includes("bread") || message.includes("sourdough") || message.includes("baguette")) {
      return "Our breads are baked fresh daily! We offer sourdough, baguettes, whole wheat, and more. All made with organic flour from local farms.";
    } else if (message.includes("gluten free") || message.includes("vegan") || message.includes("allergy")) {
      return "Yes! We offer gluten-free and vegan options. Please call us to discuss your dietary needs so we can help you find the perfect treat.";
    } else if (message.includes("class") || message.includes("learn") || message.includes("workshop")) {
      return "We're starting baking classes in December! Learn to make croissants, artisan bread, and more from our master bakers. Check our News page for details!";
    } else if (message.includes("thank")) {
      return "You're very welcome! Is there anything else I can help you with?";
    } else if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
      return "Hello! How can I help you today? Feel free to ask about our hours, menu, or anything else!";
    } else if (message.includes("bye") || message.includes("goodbye")) {
      return "Thanks for chatting! Have a wonderful day, and we hope to see you soon at Bon Pas Bakery!";
    } else {
      return "I'd be happy to help! You can ask me about our hours, location, products, prices, or custom orders. What would you like to know?";
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 w-14 h-14 bg-[#fdcd00] hover:bg-[#e6b900] text-[#1a1a1a] rounded-full shadow-lg flex items-center justify-center transition-all z-50 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-lg shadow-2xl z-50 flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="bg-[#fdcd00] text-[#1a1a1a] p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#fdcd00]" />
              </div>
              <div>
                <h4 className="m-0">Bon Pas Assistant</h4>
                <p className="text-xs text-[#1a1a1a]/80 m-0">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-[#e6b900] rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fffef5]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-[#fdcd00] text-[#1a1a1a]"
                      : "bg-white text-[#1a1a1a] border border-[#fdcd00]/20"
                  }`}
                >
                  <p className="text-sm m-0">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1 m-0">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#fdcd00]/20 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-[#fdcd00]/30 focus:border-[#fdcd00]"
              />
              <Button
                onClick={handleSend}
                className="bg-[#fdcd00] hover:bg-[#e6b900] text-[#1a1a1a] px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
