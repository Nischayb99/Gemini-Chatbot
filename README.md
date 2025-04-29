# Gemini Chatbot 💬

A sleek and responsive AI chatbot web app powered by Google's Gemini models (`gemini-1.5-pro`, `gemini-1.5-flash`, and `gemini-2.0-flash`). This chatbot supports light/dark mode toggle, dynamic model selection, and a clean, modern UI.

## 🔥 Features

- 💡 **Model Selection:** Choose from multiple Gemini models.
- 🌓 **Dark/Light Mode Toggle:** Your theme preference is saved.
- 💬 **Smooth Chat Interface:** Clean, responsive chat layout.
- 🚀 **Fast API Integration:** Powered by Gemini's Generative AI.

## 📸 Screenshots

> (Add your screenshots in a `screenshots/` folder and update the links below)

![Gemini Chatbot Light Mode](./screenshots/light-mode.png)  
![Gemini Chatbot Dark Mode](./screenshots/dark-mode.png)

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **AI Model:** Google Generative AI (Gemini)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Gemini-Chatbot.git
   cd Gemini-Chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your environment**
   - Create a `.env` file in the root directory.
   - Add your Google API key:
     ```
     GOOGLE_API_KEY=your_google_api_key_here
     ```

4. **Start the server**
   ```bash
   node app.js
   ```

5. **Open in browser**
   - Navigate to: [http://localhost:3000](http://localhost:3000)

## 🌐 Model Options

You can choose from the following models:
- `models/gemini-1.5-pro` (default)
- `models/gemini-1.5-flash`
- `models/gemini-2.0-flash`

## 📁 Folder Structure

```
Gemini-Chatbot/
│
├── public/              # Frontend files (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env                 # Your API key (not pushed to GitHub)
├── app.js               # Express server
├── package.json
└── README.md
```

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)

---

### 🔗 Live Demo (optional)

> If you deploy it (on Render, Vercel, etc.), add the link here:

**🔗 Live App:** [https://your-app-url.com](https://your-app-url.com)
