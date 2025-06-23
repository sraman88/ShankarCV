document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const companyBoxes = document.querySelectorAll('.company-box');
  const expertiseBoxes = document.querySelectorAll('.expertise-box');
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  const chatbot = document.querySelector('.chatbot');
  const chatInput = document.querySelector('.chatbot-input');
  const miniMan = document.querySelector('.mini-man');
  const progressBar = document.querySelector('.progress');
  const themeToggle = document.querySelector('.theme-toggle');
  let milestones = 0;
  const maxMilestones = 10;

  function updateMiniMan(element) {
    const rect = element.getBoundingClientRect();
    miniMan.style.left = (rect.left + rect.width / 2) + 'px';
    miniMan.style.top = (window.scrollY + rect.top + rect.height / 2) + 'px';
  }

  function updateProgress() {
    milestones = document.querySelectorAll('.active').length;
    progressBar.style.width = (milestones / maxMilestones * 100) + '%';
  }

  function addMessage(type, text) {
    const messages = document.querySelector('.chatbot-messages');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotResponse(query) {
    const responses = {
      "Tell me about Shankar's career journey": "Shankar Raman has 15 years of experience in tech recruitment, working with OpenText, Target, WNS, and more.",
      "Describe Shankar's recruiting expertise": "Shankar specializes in GenAI hiring, leadership roles, DEI programs, and campus strategies.",
      "What are Shankar's special projects?": "Projects include BounceBack at Target, Buddy program at BrowserStack, and 40% diversity at WNS."
    };
    return responses[query] || "Try asking about Shankar’s journey, expertise, or projects.";
  }

  [...cards, ...companyBoxes, ...expertiseBoxes].forEach(el => {
    el.addEventListener('click', () => {
      if (!el.classList.contains('active')) {
        el.classList.add('active');
        updateMiniMan(el);
        updateProgress();
      }
    });
  });

  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
    chatbotToggle.textContent = chatbot.style.display === 'none' ? '💬' : '✖';
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
      addMessage('user', chatInput.value.trim());
      setTimeout(() => {
        addMessage('bot', getBotResponse(chatInput.value.trim()));
        document.querySelector('.typing-indicator').style.display = 'none';
      }, 500);
      chatInput.value = '';
      document.querySelector('.typing-indicator').style.display = 'flex';
    }
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
