// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const sendBtn = document.getElementById('sendMessage');
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbotMessages');
    
    // Toggle chatbot
    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
    });
    
    closeChatbot.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    // Send message
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        
        // Simulate bot thinking
        setTimeout(() => {
            addMessage(getBotResponse(message), 'bot');
        }, 600);
    }
    
    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Add message to chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${sender}-message`;
        messageDiv.innerHTML = <p>${message}</p>;
        chatbox.appendChild(messageDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
    }
    
    // Simple bot responses
    function getBotResponse(message) {
        const lowerMsg = message.toLowerCase();
        
        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            return "Hello there! How can I help you with your color choices today?";
        } else if (lowerMsg.includes('color') || lowerMsg.includes('paint')) {
            return "We have over 500 premium colors! Try asking about specific shades like 'What colors work for a bedroom?'";
        } else if (lowerMsg.includes('bedroom')) {
            return "For bedrooms, we recommend calming colors like soft blues (#45B7D1), gentle greens (#4ECDC4), or warm neutrals (#F7DBA7).";
        } else if (lowerMsg.includes('price')) {
            return "Our premium paints start at ₹499 per liter. Would you like me to check prices for a specific color?";
        } else {
            return "I'm your KS Coloring assistant! I can help with color recommendations, product info, and more. Try asking about specific colors or rooms!";
        }
    }
});