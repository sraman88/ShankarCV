// Wait for DOM to load
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
      const content = toggle.nextElementSibling;
      const ribbon = toggle.parentElement;
      ribbon.classList.toggle('active');
    });
  });

  // Show/hide chatbot on avatar click
  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
  });

  // Chatbot basic responses
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      const userMsg = input.value.trim();
      appendMessage('You', userMsg);
      input.value = '';
      typingIndicator.style.display = 'block';

      setTimeout(() => {
        const reply = getBotResponse(userMsg);
        appendMessage('ShankarBot', reply);
        typingIndicator.style.display = 'none';
      }, 800);
    }
  });

  function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotResponse(query) {
    const lower = query.toLowerCase();
    if (lower.includes('experience')) return '15+ years in tech hiring, product, and leadership recruitment.';
    if (lower.includes('genai')) return 'I implemented GenAI sourcing, reducing hiring time by 20%.';
    if (lower.includes('leadership')) return 'I’ve hired directors, principal engineers, and built leadership pipelines.';
    if (lower.includes('contact')) return 'You can email me at fortunate.gui@gmail.com or WhatsApp me using the button below.';
    return 'I’m ShankarBot – ask me about my experience, GenAI work, or leadership hiring!';
  }
});
