body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  background-color: #f0f8ff;
  color: #222;
  transition: background-color 0.3s, color 0.3s;
}

header {
  background-color: #4682b4;
  color: white;
  padding: 20px;
  text-align: center;
}

header nav a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.resume-download {
  display: inline-block;
  margin-top: 10px;
  background: #ffd700;
  padding: 8px 12px;
  border-radius: 4px;
  color: #000;
  text-decoration: none;
}

section {
  padding: 20px;
}

.card, .company-box, .expertise-box {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-left: 5px solid #4682b4;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.active {
  background-color: #e0fff0;
}

footer {
  background: #f4f4f4;
  text-align: center;
  padding: 20px;
  margin-top: 30px;
}

.theme-toggle {
  margin-top: 10px;
  padding: 6px 10px;
  border: none;
  background-color: #4682b4;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

/* Chatbot */
.chatbot-toggle {
  position: fixed;
  bottom: 90px;
  right: 20px;
  background: #333;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
}

.chatbot {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 90%;
  max-width: 320px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.chatbot-messages {
  height: 150px;
  overflow-y: auto;
  font-size: 14px;
}

.chatbot-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.message.user {
  text-align: right;
  font-weight: bold;
}

.message.bot {
  text-align: left;
  color: #007;
}

.typing-indicator {
  font-size: 12px;
  color: gray;
}

.progress-container {
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  margin-top: 20px;
  border-radius: 5px;
}

.progress {
  height: 10px;
  background: #4caf50;
  width: 0%;
  border-radius: 5px;
}

.mini-man {
  position: absolute;
  transition: all 0.4s ease;
}

/* Dark mode */
body.dark {
  background-color: #1e1e1e;
  color: #f5f5f5;
}

body.dark header {
  background-color: #222;
}

body.dark .card,
body.dark .company-box,
body.dark .expertise-box,
body.dark .chatbot,
body.dark footer {
  background-color: #2e2e2e;
  color: #fff;
  border-color: #444;
}

body.dark .theme-toggle {
  background-color: #ffd700;
  color: black;
}

/* Ghibli-style animation */
section, header, footer {
  animation: fadeInSlide 0.8s ease-out;
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  header h1 {
    font-size: 24px;
  }
  header nav a {
    display: block;
    margin: 5px 0;
  }
}
