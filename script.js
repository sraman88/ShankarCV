document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbot = document.querySelector('.chatbot');
    const chatInput = document.querySelector('.chatbot-input');
    const messages = document.querySelector('.chatbot-messages');
    const typingIndicator = document.querySelector('.typing-indicator');

    chatbotToggle.addEventListener('click', () => {
        chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatInput.value.trim()) {
            const userMsg = chatInput.value.trim();
            addMessage('user', userMsg);
            chatInput.value = '';
            typingIndicator.style.display = 'flex';

            setTimeout(() => {
                const botReply = getBotResponse(userMsg);
                addMessage('bot', botReply);
                typingIndicator.style.display = 'none';
            }, 700);
        }
    });

    function addMessage(type, text) {
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function getBotResponse(query) {
        const responses = {
            "hello": "Hi there! I'm here to help you learn about Shankar.",
            "who is shankar": "Shankar Raman is a TA pro with 15 years of experience, currently at OpenText.",
            "genai": "Shankar integrates GenAI into hiring—automating screening, reducing time-to-hire.",
            "leadership hiring": "He led leadership hiring at Target and OpenText. Ask me more!",
            "awards": "He received a $1,000 award for accelerating hiring by 25% at OpenText.",
            "default": "Try asking: 'Who is Shankar?', 'GenAI expertise', or 'Awards'."
        };

        query = query.toLowerCase();
        return responses[query] || responses["default"];
    }
});
