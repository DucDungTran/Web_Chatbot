const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Chat API endpoint
app.post('/api/chat', (req, res) => {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid messages format' });
    }

    const lastMessage = messages[messages.length - 1];
    
    // Simple response logic for demo
    let reply = "I'm here to help! What would you like to know?";
    
    if (lastMessage && lastMessage.content) {
        const content = lastMessage.content.toLowerCase();
        
        if (content.includes('hello') || content.includes('hi')) {
            reply = "Hello! Great to meet you. I'm your AI assistant and I'm here to help with any questions or tasks you might have.";
        } else if (content.includes('help')) {
            reply = "I can help you with information, answer questions, provide explanations, and assist with various tasks. Just let me know what you need!";
        } else if (content.includes('weather')) {
            reply = "I can help you find weather information! However, I don't have real-time access to current weather data. You might want to check a weather service or app for the most up-to-date information.";
        } else if (content.includes('news')) {
            reply = "I can discuss current events and topics I was trained on, but for the most recent news, I recommend checking reliable news sources or news apps for real-time updates.";
        } else if (content.includes('yourself') || content.includes('about you')) {
            reply = "I'm an AI assistant designed to help you with information, answer questions, and assist with various tasks. I aim to be helpful, accurate, and friendly in our conversations.";
        } else if (content.includes('examples')) {
            reply = "Here are some things I can help with: explaining concepts, answering questions, helping with writing, providing information on various topics, and assisting with problem-solving.";
        } else {
            reply = "That's an interesting question! I'd be happy to help you with that. Could you provide a bit more context so I can give you the most helpful response?";
        }
    }

    // Simulate processing delay
    setTimeout(() => {
        res.json({ reply });
    }, 500);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📱 Modern AI Assistant ready!`);
});



