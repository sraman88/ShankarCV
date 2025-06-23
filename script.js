function getBotResponse(query) {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("career") || lowerQuery.includes("journey")) {
    return "I've worked across OpenText, Target, Browserstack and more — building high-performance recruiting teams and scaling tech hiring globally.";
  }

  if (lowerQuery.includes("project") || lowerQuery.includes("initiative")) {
    return "Some signature initiatives: BounceBack (Target), Buddy Program (Browserstack), 40% diversity hiring at WNS, and hiring 650+ tech professionals at OpenText.";
  }

  if (lowerQuery.includes("strength") || lowerQuery.includes("good at")) {
    return "I'm strong in GenAI-enabled recruiting, leadership hiring, and translating complex hiring goals into action. I love simplifying chaos.";
  }

  if (lowerQuery.includes("genai") || lowerQuery.includes("ai")) {
    return "I'm exploring GenAI tools to enhance sourcing, screening, and candidate experience. I believe AI should augment, not replace, human judgment.";
  }

  if (lowerQuery.includes("why hire") || lowerQuery.includes("fit")) {
    return "I’m not just a recruiter — I’m a builder. I align fast with org culture, bring strong people energy, and lead with empathy and speed.";
  }

  if (lowerQuery.includes("fun") || lowerQuery.includes("joke")) {
    return "Why did the recruiter sleep well? Because all roles were finally filled 😴";
  }

  if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
    return "Hi there! 👋 I'm ShankarBot. Ask me about Shankar’s experience, projects, or what makes him a great TA leader.";
  }

  if (lowerQuery.includes("linkedin")) {
    return "Here you go 👉 https://www.linkedin.com/in/shankar111";
  }

  return "Hmm 🤔 I didn’t catch that. Try asking about Shankar’s career, projects, or recruiting skills.";
}
