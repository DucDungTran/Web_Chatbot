// Modern AI Assistant with Dialogflow-inspired UI
(function () {
    const messagesEl = document.getElementById('messages');
    const formEl = document.getElementById('composer');
    const inputEl = document.getElementById('input');
    const typingIndicator = document.getElementById('typing-indicator');
    const history = [];

    // Show typing indicator
    function showTyping() {
        typingIndicator.style.display = 'flex';
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // Hide typing indicator
    function hideTyping() {
        typingIndicator.style.display = 'none';
    }

    function appendMessage(role, text, chips) {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${role}`;

        const avatarEl = document.createElement('div');
        avatarEl.className = 'avatar';
        avatarEl.innerHTML = role === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';

        const bubbleEl = document.createElement('div');
        bubbleEl.className = 'bubble';
        bubbleEl.textContent = text;

        messageEl.appendChild(avatarEl);
        messageEl.appendChild(bubbleEl);
        
        if (Array.isArray(chips) && chips.length) {
            const chipsWrap = document.createElement('div');
            chipsWrap.className = 'chips';
            chips.forEach((label) => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'chip';
                chip.textContent = label;
                chip.addEventListener('click', () => sendUserMessage(label));
                chipsWrap.appendChild(chip);
            });
            bubbleEl.appendChild(chipsWrap);
        }
        
        messagesEl.appendChild(messageEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    async function botReply(userText) {
        try {
            showTyping();
            
            // Simulate typing delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
            
            const payload = { messages: buildChatMessages(userText) };
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            hideTyping();
            
            if (!res.ok) throw new Error('Request failed');
            const data = await res.json();
            const reply = data.reply || "I'm here to help! What would you like to know?";
            history.push({ role: 'assistant', content: reply });
            
            // Modern suggestion chips
            const suggestions = getSuggestions(userText);
            appendMessage('bot', reply, suggestions);
        } catch (e) {
            hideTyping();
            const fallback = "I'm having trouble connecting right now. Let me show you what I can do instead.";
            appendMessage('bot', fallback, ['Try again', 'Show examples', 'Help']);
        }
    }

    function getSuggestions(userText) {
        const text = userText.toLowerCase();
        
        if (text.includes('hello') || text.includes('hi')) {
            return ['How can you help me?', 'What can you do?', 'Tell me about yourself'];
        } else if (text.includes('help') || text.includes('support')) {
            return ['Common questions', 'Contact support', 'User guide'];
        } else if (text.includes('weather') || text.includes('temperature')) {
            return ['Current weather', 'Forecast', 'Weather alerts'];
        } else if (text.includes('news') || text.includes('latest')) {
            return ['Top stories', 'Technology news', 'Business news'];
        } else {
            return ['Ask another question', 'Get help', 'Learn more'];
        }
    }

    function buildChatMessages(userText) {
        const systemPrompt = { 
            role: 'system', 
            content: 'You are a helpful, friendly AI assistant with a modern personality. Keep responses concise but informative.' 
        };
        const convo = [systemPrompt, ...history];
        if (userText && userText.trim()) {
            convo.push({ role: 'user', content: userText.trim() });
        }
        return convo;
    }

    function sendUserMessage(text) {
        if (!text.trim()) return;
        
        appendMessage('user', text);
        history.push({ role: 'user', content: text });
        
        // Clear input immediately for better UX
        inputEl.value = '';
        
        // Add small delay to show typing indicator
        setTimeout(() => botReply(text), 300);
    }

    // Enhanced form handling
    formEl.addEventListener('submit', function (e) {
        e.preventDefault();
        const text = (inputEl.value || '').trim();
        if (!text) return;
        sendUserMessage(text);
    });

    // Enhanced input handling
    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const text = (inputEl.value || '').trim();
            if (!text) return;
            sendUserMessage(text);
        }
    });

    // Auto-resize input for better UX
    inputEl.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });

    // Focus input on load
    inputEl.focus();

    // Welcome message with modern suggestions
    setTimeout(() => {
        appendMessage('bot', 'Hello! I\'m your AI assistant. I can help you with various tasks, answer questions, and provide information. What would you like to know?', [
            'Tell me about yourself',
            'What can you do?',
            'Show me examples'
        ]);
    }, 500);

    // Add some interactive features
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('action-btn')) {
            const action = e.target.getAttribute('aria-label');
            if (action === 'Settings') {
                appendMessage('bot', 'Settings panel coming soon! For now, you can customize your experience through the chat.', ['Got it']);
            } else if (action === 'Help') {
                appendMessage('bot', 'I\'m here to help! You can ask me questions, request information, or just chat. Type your message below to get started.', ['Examples', 'Commands', 'Thanks']);
            }
        }
    });
})();


