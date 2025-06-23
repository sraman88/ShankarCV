document.addEventListener('DOMContentLoaded', () => {
  const ribbons = document.querySelectorAll('.ribbon-toggle');
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbot = document.getElementById('chatbot');
  const input = document.querySelector('.chatbot-input');
  const messages = document.querySelector('.chatbot-messages');
  const typingIndicator = document.querySelector('.typing-indicator');

  // Toggle ribbon content
  ribbons.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const section = toggle.parentElement;
      section.classList.toggle('active');
    });
  });

  // Show/hide chatbot
  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
  });

  // Chat input handler
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      const userMsg = input.value.trim();
      addMessage('You', userMsg);
      input.value = '';
      typingIndicator.style.display = 'block';

      setTimeout(() => {
        const reply = getBotResponse(userMsg);
        addMessage('ShankarBot', reply);
        typingIndicator.style.display = 'none';
      }, 800);
    }
  });

  function addMessage(sender, text) {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotResponse(query) {
    const lower = query.toLowerCase();
    if (lower.includes('experience')) return '15+ years in recruitment, tech and leadership hiring.';
    if (lower.includes('genai')) return 'GenAI helped me reduce TAT by 20%. Ask me how!';
    if (lower.includes('leadership')) return 'I’ve hired Directors, Principals and built executive pipelines.';
    if (lower.includes('contact')) return 'Email me at fortunate.gui@gmail.com or drop a WhatsApp!';
    return 'I’m ShankarBot – ask me about GenAI, hiring, or team building.';
  }
});
