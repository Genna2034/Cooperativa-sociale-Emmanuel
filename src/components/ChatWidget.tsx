import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Ciao! Sono l'assistente virtuale della Cooperativa Emmanuel. Come posso aiutarti oggi?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Informazioni sui servizi ADI",
    "Come prenotare una visita",
    "Costi e tariffe",
    "Orari di apertura",
    "Contatti diretti"
  ];

  const autoResponses: { [key: string]: string } = {
    "informazioni sui servizi adi": "La Cooperativa Emmanuel offre servizi di Assistenza Domiciliare Integrata accreditati con la Regione Campania. I servizi includono visite mediche, assistenza infermieristica, fisioterapia e supporto psicologico. Vuoi maggiori dettagli su un servizio specifico?",
    "come prenotare una visita": "Puoi prenotare una visita in diversi modi: 1) Online tramite il nostro modulo di prenotazione 2) Chiamando il +39 081 7877064 3) Inviando una email a cooperativa.emmanuel@outlook.it. La prima consulenza è sempre gratuita!",
    "costi e tariffe": "I servizi ADI sono gratuiti per gli aventi diritto con prescrizione medica. Per i servizi privati, offriamo tariffe competitive e trasparenti. Contattaci per un preventivo personalizzato gratuito.",
    "orari di apertura": "Siamo aperti dal Lunedì al Venerdì dalle 9:00 alle 18:00 e il Sabato dalle 9:00 alle 13:00. Per emergenze, abbiamo un servizio di reperibilità 24/7.",
    "contatti diretti": `Puoi contattarci direttamente: 📞 ${CONTACT_INFO.phone} ✉️ ${CONTACT_INFO.email}. Siamo sempre disponibili per aiutarti!`
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simula risposta automatica
    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let response = "Grazie per il tuo messaggio! Per una risposta più dettagliata, ti consiglio di contattarci direttamente al +39 081 7877064 o via email. Il nostro team sarà felice di aiutarti!";

      // Cerca una risposta automatica
      for (const [key, value] of Object.entries(autoResponses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-20 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Apri chat di supporto"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-4 w-80 max-w-[calc(100vw-2rem)] h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold">Supporto Emmanuel</h3>
                <p className="text-sm text-blue-100">Di solito rispondiamo subito</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('it-IT', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t">
              <p className="text-sm text-gray-600 mb-2">Domande frequenti:</p>
              <div className="space-y-2">
                {quickReplies.slice(0, 3).map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left text-sm p-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Scrivi un messaggio..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Contact Options */}
            <div className="flex justify-center space-x-4 mt-3 pt-3 border-t">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center text-xs text-blue-600 hover:text-blue-700"
              >
                <Phone className="h-3 w-3 mr-1" />
                Chiama
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center text-xs text-blue-600 hover:text-blue-700"
              >
                <Mail className="h-3 w-3 mr-1" />
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;