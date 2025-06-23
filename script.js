document.addEventListener('DOMContentLoaded', () => {
  const ribbons = document.querySelectorAll('.ribbon-button');
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  const chatbot = document.querySelector('.chatbot');
  const chatInput = document.querySelector('.chatbot-input');
  const messagesContainer = document.querySelector('.chatbot-messages');

  ribbons.forEach(ribbon => {
    ribbon.addEventListener('click', () => {
      const targetId = ribbon.getAttribute('data-target');
      const detail = document.getElementById(targetId);
      if (detail.style.display === 'block') {
        detail.style.display = 'none';
      } else {
        detail.style.display = 'block';
      }
    });
  });

  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
      addMessage('user', chatInput.value.trim());
      setTimeout(() => addMessage('bot', getBotResponse(chatInput.value.trim())), 500);
      chatInput.value = '';
    }
  });

  function addMessage(type, text) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function getBotResponse(query) {
    const responses = {
      'experience': 'Shankar has led hiring for over 1000 roles at OpenText, Target and more.',
      'expertise': 'Leadership hiring, GenAI sourcing, team management, diversity hiring, and mentoring 9-box successors.',
      'awards': 'Shankar received a $1000 award at Target for pipeline building.',
      'contact': 'Email: fortunate.gui@gmail.com or message via WhatsApp.',
    };
    return responses[query.toLowerCase()] || "I'm learning more! Try keywords like 'experience', 'expertise', or 'contact'.";
  }

  // CV download and WhatsApp click handlers
  document.getElementById('download-cv').addEventListener('click', () => {
    window.open('assets/ShankarCV.pdf', '_blank');
  });

  document.getElementById('whatsapp-btn').addEventListener('click', () => {
    const message = encodeURIComponent('Hi Shankar, I visited your CV site and wanted to connect.');
    const phone = '919620572345';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});
