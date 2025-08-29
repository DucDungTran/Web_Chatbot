// Basic chatbot with fixed reply
(function () {
    const messagesEl = document.getElementById('messages');
    const formEl = document.getElementById('composer');
    const inputEl = document.getElementById('input');

    function appendMessage(role, text, chips) {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${role}`;

        const avatarEl = document.createElement('div');
        avatarEl.className = 'avatar';
        avatarEl.textContent = role === 'user' ? 'U' : 'B';

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

    function botReply(userText) {
        const fixedResponse = "What would you like to try?";
        const suggestions = ['Tell me a joke', 'Show features', 'Help'];
        appendMessage('bot', fixedResponse, suggestions);
    }

    function sendUserMessage(text) {
        appendMessage('user', text);
        // Simulate typing delay
        setTimeout(() => botReply(text), 350);
    }

    formEl.addEventListener('submit', function (e) {
        e.preventDefault();
        const text = (inputEl.value || '').trim();
        if (!text) return;
        sendUserMessage(text);
        inputEl.value = '';
    });

    // Greet on load
    appendMessage('bot', 'Hi! I am Demo Bot.');
    botReply('');
})();


