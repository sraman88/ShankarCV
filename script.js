document.addEventListener('DOMContentLoaded', () => {
  const ribbonButtons = document.querySelectorAll('.ribbon-button');
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  const chatbot = document.querySelector('.chatbot');
  const chatInput = document.querySelector('.chatbot-input');
  const chatMessages = document.querySelector('.chatbot-messages');
  const typingIndicator = document.querySelector('.typing-indicator');
  const progressBar = document.querySelector('.progress');
  const miniMan = document.querySelector('.mini-man');
  const downloadBtn = document.getElementById('download-cv');

  // Toggle ribbon detail
  ribbonButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const detail = document.getElementById(targetId);
      if (detail.style.display === 'block') {
        detail.style.display = 'none';
      } else {
        detail.style.display = 'block';
      }
      updateProgress();
      updateMiniMan(button);
    });
  });

  // Chatbot toggle via avatar image
  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
  });

  // Chat input logic
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
      const query = chatInput.value.trim();
      addMessage('user', query);
      chatInput.value = '';
      typingIndicator.style.display = 'block';
      setTimeout(() => {
        const response = getBotResponse(query);
        typingIndicator.style.display = 'none';
        addMessage('bot', response);
      }, 600);
    }
  });

  // WhatsApp API button logic
  document.getElementById('whatsapp-btn').addEventListener('click', () => {
    const message = encodeURIComponent("Hi Shankar, I viewed your CV website and wanted to connect!");
    const url = `https://wa.me/919620572345?text=${message}`;
    window.open(url, '_blank');
  });

  // Download CV
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.open('https://github.com/sraman88/ShankarCV/raw/main/Shankar_Raman_CV.pdf', '_blank');
    });
  }

  function addMessage(type, text) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getBotResponse(query) {
    const responses = {
      "genai": "I implemented GenAI tools for sourcing and screening, improving speed by 40%.",
      "leadership": "I led leadership hiring at OpenText, Target, and BrowserStack.",
      "projects": "Key projects include BounceBack, Buddy Program, Referral 2.0, and DEI initiatives.",
      "tools": "I’ve worked with Phenom, SuccessFactors, Zoho Recruit, and others.",
      "training": "I’ve trained teams in DEI, sourcing, and GenAI workflows.",
      "email": "You can reach me at fortunate.gui@gmail.com."
    };
    query = query.toLowerCase();
    for (const key in responses) {
      if (query.includes(key)) return responses[key];
    }
    return "Try asking about GenAI, leadership, tools, or projects!";
  }

  function updateMiniMan(element) {
    const rect = element.getBoundingClientRect();
    miniMan.style.left = (rect.left + rect.width / 2) + 'px';
    miniMan.style.top = (rect.top + window.scrollY + rect.height / 2) + 'px';
  }

  function updateProgress() {
    const total = document.querySelectorAll('.ribbon-button').length;
    const active = [...document.querySelectorAll('.ribbon-detail')].filter(d => d.style.display === 'block').length;
    const percent = Math.round((active / total) * 100);
    progressBar.style.width = percent + '%';
  }
});
