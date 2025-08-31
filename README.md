# 🤖 Modern AI Chatbot - Dialogflow Inspired

A beautiful, modern AI chatbot interface inspired by Dialogflow with a sleek design, smooth animations, and excellent user experience.

## ✨ Features

### 🎨 Modern UI Design
- **Gradient Headers**: Beautiful purple-blue gradient header with glassmorphism effects
- **Smooth Animations**: Message slide-in animations and typing indicators
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark Mode Support**: Automatically adapts to system preferences
- **Modern Typography**: Uses Inter font for excellent readability

### 💬 Enhanced Chat Experience
- **Typing Indicators**: Shows when AI is "thinking" with animated dots
- **Smart Suggestions**: Context-aware suggestion chips that adapt to conversation
- **Better Message Bubbles**: Rounded corners with subtle shadows and gradients
- **Avatar Icons**: FontAwesome icons for user and bot avatars
- **Auto-scroll**: Smooth scrolling to latest messages

### 🚀 Interactive Elements
- **Action Buttons**: Settings and Help buttons in the header
- **Enhanced Input**: Auto-resizing input field with better focus states
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for new lines
- **Hover Effects**: Beautiful hover animations on all interactive elements

## 🛠️ Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
4. **Open your browser** and go to `http://localhost:3000`

## 🎯 Usage

### Basic Chat
- Type your message in the input field
- Press Enter to send
- Use Shift+Enter for new lines
- Click suggestion chips for quick responses

### Interactive Features
- Click the **Settings** button (⚙️) for configuration options
- Click the **Help** button (❓) for assistance
- Use suggestion chips to guide the conversation

### Keyboard Shortcuts
- `Enter` - Send message
- `Shift + Enter` - New line
- `Tab` - Navigate between elements

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple-blue gradient (#667eea → #764ba2)
- **Secondary**: Green gradient for user messages (#10b981 → #059669)
- **Background**: Light gray (#f8fafc) with white cards
- **Text**: Dark slate (#1e293b) for excellent contrast

### Visual Elements
- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Shadows**: Subtle shadows for depth and hierarchy
- **Gradients**: Beautiful color transitions throughout
- **Rounded Corners**: Modern, friendly appearance
- **Smooth Transitions**: 200ms ease transitions for all interactions

## 📱 Responsive Design

The chatbot automatically adapts to different screen sizes:
- **Desktop**: Full-width layout with centered content
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Full-screen layout with touch-friendly elements

## 🌙 Dark Mode

Automatically detects system dark mode preference and applies:
- Dark backgrounds (#0f172a, #1e293b)
- Light text (#f1f5f9)
- Adjusted shadows and borders
- Maintains accessibility and contrast

## 🔧 Customization

### Colors
Modify the CSS custom properties in `styles.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
}
```

### Animations
Adjust animation timing in the CSS:
```css
.message {
  animation: messageSlideIn 0.3s ease-out;
}
```

### Typography
Change fonts by updating the font-family in the CSS:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

## 🚀 Development

### Development Mode
```bash
npm run dev
```
Uses nodemon for automatic server restart on file changes.

### Project Structure
```
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS with animations
├── script.js           # Enhanced JavaScript functionality
├── server.js           # Express server
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🎭 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on the project repository.

---

**Built with ❤️ using modern web technologies**
