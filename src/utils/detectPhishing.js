// Mock AI detection function
export const detectPhishing = async (input) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock detection logic
  const suspiciousKeywords = [
    'urgent', 'click now', 'verify account', 'suspended', 'bitcoin', 
    'lottery', 'winner', 'congratulations', 'limited time', 'act now',
    'free money', 'inheritance', 'prince', 'tax refund'
  ];
  
  const phishingDomains = [
    'bit.ly', 'tinyurl', 'short.link', 'suspicious-bank', 'fake-paypal',
    'amazon-security', 'apple-verification', 'microsoft-alert'
  ];

  const safeKeywords = ['unsubscribe', 'privacy policy', 'customer service'];
  const safeDomains = ['google.com', 'microsoft.com', 'apple.com', 'amazon.com', 'paypal.com'];

  let score = 0;
  let reasons = [];
  let riskLevel = 'safe';

  const lowerInput = input.toLowerCase();

  // Check for suspicious keywords
  suspiciousKeywords.forEach(keyword => {
    if (lowerInput.includes(keyword)) {
      score += 20;
      reasons.push(`Contains suspicious phrase: "${keyword}"`);
    }
  });

  // Check for phishing domains
  phishingDomains.forEach(domain => {
    if (lowerInput.includes(domain)) {
      score += 30;
      reasons.push(`Contains suspicious domain: "${domain}"`);
    }
  });

  // Check for safe indicators
  safeKeywords.forEach(keyword => {
    if (lowerInput.includes(keyword)) {
      score -= 10;
      reasons.push(`Contains legitimate element: "${keyword}"`);
    }
  });

  safeDomains.forEach(domain => {
    if (lowerInput.includes(domain)) {
      score -= 15;
      reasons.push(`Contains known safe domain: "${domain}"`);
    }
  });

  // URL-specific checks
  if (lowerInput.startsWith('http://') && !lowerInput.startsWith('https://')) {
    score += 15;
    reasons.push('Uses insecure HTTP instead of HTTPS');
  }

  // Check for URL shorteners
  if (lowerInput.match(/bit\.ly|tinyurl|t\.co|goo\.gl|short/)) {
    score += 25;
    reasons.push('Uses URL shortening service');
  }

  // Check for suspicious characters
  if (lowerInput.match(/[а-я]|[α-ω]/)) {
    score += 20;
    reasons.push('Contains suspicious characters (possible homograph attack)');
  }

  // Email-specific checks
  if (lowerInput.includes('@')) {
    if (lowerInput.match(/@[0-9]+\./)) {
      score += 25;
      reasons.push('Email from suspicious numeric domain');
    }
    if (lowerInput.includes('noreply@') || lowerInput.includes('no-reply@')) {
      score -= 5;
      reasons.push('Uses standard no-reply format');
    }
  }

  // Determine risk level
  if (score >= 50) {
    riskLevel = 'phishing';
  } else if (score >= 25) {
    riskLevel = 'suspicious';
  } else {
    riskLevel = 'safe';
    if (reasons.length === 0) {
      reasons.push('No suspicious patterns detected');
    }
  }

  return {
    riskLevel,
    confidence: Math.min(95, Math.max(65, 70 + score)),
    reasons: reasons.slice(0, 4), // Limit to 4 reasons
    score
  };
};