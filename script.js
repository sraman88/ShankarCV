document.addEventListener('DOMContentLoaded', () => {
    const expertiseBoxes = document.querySelectorAll('.expertise-box');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbot = document.querySelector('.chatbot');
    const chatInput = document.querySelector('.chatbot-input');
    const messages = document.querySelector('.chatbot-messages');
    const typing = document.querySelector('.typing-indicator');

    // Toggle expertise details
    expertiseBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const target = box.getAttribute('data-target');
            const detail = document.querySelector(`.expertise-detail[data-target="${target}"]`);
            const isActive = detail.style.display === 'block';
            detail.style.display = isActive ? 'none' : 'block';
            box.classList.toggle('active');
        });
    });

    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
    });

    // Simple GenAI-style bot responses
    function getBotResponse(query) {
        const q = query.toLowerCase();
        if (q.includes("genai")) return "I implemented Phenom, automated resume parsing & trained recruiters on GenAI!";
        if (q.includes("leadership")) return "Hired for OpenText, Target & WNS – building executive teams from scratch.";
        if (q.includes("diversity")) return "I led programs like BounceBack, driving 40% diversity hiring at WNS.";
        if (q.includes("projects")) return "I've run RPOs, built referral engines, and drove 30% cost savings in TA.";
        return "Ask me about GenAI, Leadership, Diversity, or Projects!";
    }

    // Handle user messages
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatInput.value.trim()) {
            const userMsg = chatInput.value.trim();
            appendMessage('user', userMsg);
            chatInput.value = '';
            typing.style.display = 'flex';
            setTimeout(() => {
                appendMessage('bot', getBotResponse(userMsg));
                typing.style.display = 'none';
            }, 600);
        }
    });

    function appendMessage(type, text) {
        const msg = document.createElement('div');
        msg.className = `message ${type}`;
        msg.textContent = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }
});
