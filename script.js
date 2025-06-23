document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const companyBoxes = document.querySelectorAll('.company-box');
  const expertiseBoxes = document.querySelectorAll('.expertise-box');
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  const chatbot = document.querySelector('.chatbot');
  const chatInput = document.querySelector('.chatbot-input');
  const miniMan = document.querySelector('.mini-man');
  const progressBar = document.querySelector('.progress');
  const profileSpotlight = document.querySelector('.profile-spotlight');
  let milestones = 0;
  const maxMilestones = 10;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('active')) {
        card.classList.add('active');
        updateMiniMan(card);
        updateProgress();
      }
    });
  });

  companyBoxes.forEach(box => {
    box.addEventListener('click', () => {
      if (!box.classList.contains('active')) {
        box.classList.add('active');
        updateMiniMan(box);
        updateProgress();
      }
    });
  });

  expertiseBoxes.forEach(box => {
    box.addEventListener('click', () => {
      if (!box.classList.contains('active')) {
        box.classList.add('active');
        updateMiniMan(box);
        updateProgress();
      }
    });
  });

  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
    chatbotToggle.textContent = chatbot.style.display === 'none' ? '✖' : '💬';
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
      addMessage('user', chatInput.value.trim());
      setTimeout(() => addMessage('bot', getBotResponse(chatInput.value.trim())), 500);
      chatInput.value = '';
    }
  });

  profileSpotlight.addEventListener('click', () => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
    profileSpotlight.classList.add('active');
    updateProgress();
  });

  function updateMiniMan(element) {
    const rect = element.getBoundingClientRect();
    miniMan.style.left = (rect.left + rect.width / 2) + 'px';
    miniMan.style.top = (rect.top + rect.height / 2) + 'px';
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
      "Tell me about Shankar's career journey": "Shankar Raman has 15 years of experience in tech recruitment...",
      "Describe Shankar's recruiting expertise": "Expert in Gen AI, leadership hiring, DEI projects...",
      "What are Shankar's special projects?": "Diversity hiring, BounceBack at Target, Buddy Program...",
    };
    return responses[query] || "Try asking about Shankar’s journey, projects, or expertise.";
  }
});
