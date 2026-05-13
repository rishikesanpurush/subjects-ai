# Subjects AI 🎓

An intelligent, AI-powered educational platform providing personalized tutoring across six core subjects with advanced features including quiz generation, progress tracking, and comprehensive note management.

---

## 🌟 Features

### Core Learning Features
* **6 Subject Areas** - History, Science, Math, English, French, Spanish
* **36 Subcategories** - Specialized topics within each subject (e.g., Calculus, Ancient History, Grammar)
* **AI-Powered Answers** - Intelligent responses tailored to subject and difficulty level
* **Image Analysis** - Upload images for visual problem-solving and analysis
* **Demo Mode** - Full functionality without API costs (180+ pre-written responses)

### Study Tools
* **Interactive Quizzes** - AI-generated multiple-choice quizzes from your uploaded notes
* **Smart Note-Taking** - Save answers with personal annotations
* **Upload System** - Import your own study materials and textbooks
* **Search Functionality** - Quick search across all saved notes and uploads
* **Export System** - Download notes as text files for offline study

### Analytics & Progress
* **Progress Dashboard** - Visual analytics showing study patterns
* **Subject Breakdown** - Track notes and questions by subject area
* **Study Statistics** - Monitor total questions, uploads, and saved notes
* **Activity Tracking** - Date-stamped history of all learning sessions

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                            │
│                   React + Tailwind CSS                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │Dashboard │  │ Ask AI  │  │  Quiz    │  │  Notes   │  │
│  │Analytics │  │ Engine  │  │Generator │  │ Manager  │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │   State Management   │
        │   (React Hooks)      │
        └──────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │    API Layer         │
        │  (Demo/Live Toggle)  │
        └──────────────────────┘
                   │
          ┌────────┴────────┐
          ▼                 ▼
   ┌─────────────┐   ┌─────────────┐
   │ Mock Data   │   │ Anthropic   │
   │  Engine     │   │ Claude API  │
   └─────────────┘   └─────────────┘
```

---

## 🚀 How to Use

### Quick Start (Demo Mode)
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Sign in with any email (6+ characters password)
5. Start learning - no configuration needed!

### Setup for Live AI Mode (Optional)
1. Get an API key from [Anthropic Console](https://console.anthropic.com/)
2. Create a `.env` file in the root directory:
   ```
   REACT_APP_ANTHROPIC_API_KEY=your_api_key_here
   ```
3. Toggle to "Live Mode" in the application header
4. Enjoy real-time AI responses!

### Using the Platform

#### Ask Questions
1. Select your subject (History, Science, Math, English, French, Spanish)
2. Choose a specific topic (optional) for more focused answers
3. Type your question or upload an image
4. Receive detailed AI-generated explanations
5. Add personal notes and save for later review

#### Take Quizzes
1. Upload your study notes in the "Uploads" tab
2. Navigate to the "Quiz" tab
3. Click "Generate Quiz" - AI creates 5 questions from your notes
4. Answer questions and receive instant scoring
5. Review results and retake to improve

#### Manage Notes
1. All AI answers and uploads are automatically organized
2. Use the search bar to find specific topics
3. Filter by subject or note type (AI vs. Uploads)
4. Export individual notes for offline study
5. Delete outdated materials to stay organized

---

## 💻 Tech Stack

### Frontend
* **React 18** - Component-based UI framework
* **Tailwind CSS** - Utility-first styling
* **Lucide React** - Modern icon library
* **React Hooks** - State management (useState, useEffect)

### AI & APIs
* **Anthropic Claude Sonnet 4** - Advanced language model
* **Vision API** - Image analysis capabilities
* **Model:** `claude-sonnet-4-20250514`
* **Context Window:** 1000 tokens per response

### Features
* **Mock Response Engine** - 180+ pre-written educational responses
* **Local Storage** - Browser-based data persistence (demo mode)
* **File API** - Image upload and processing
* **Export System** - Text file generation

### Development Tools
* **Create React App** - Project scaffolding
* **npm** - Package management
* **Git** - Version control
* **ESLint** - Code quality

---

## 📁 Project Structure

```
subjects-ai/
├── public/
│   ├── index.html              # HTML template
│   └── manifest.json           # PWA configuration
├── src/
│   ├── App.js                  # Main application component
│   │   ├── Login System        # Authentication UI
│   │   ├── Dashboard           # Analytics & stats
│   │   ├── Ask AI Tab          # Question interface
│   │   ├── Quiz Tab            # Quiz generator
│   │   ├── Upload Tab          # Note upload system
│   │   └── Notes Tab           # Search & manage notes
│   ├── index.js                # React entry point
│   └── index.css               # Tailwind directives
├── .env                        # Environment variables (API keys)
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS setup
└── README.md                   # Documentation
```

---

## 🎯 Subject Coverage

### History
* Ancient History
* Medieval History
* Modern History
* World Wars
* American History
* European History

### Science
* Physics
* Chemistry
* Biology
* Astronomy
* Earth Science
* Environmental Science

### Mathematics
* Algebra
* Geometry
* Calculus
* Statistics
* Trigonometry
* Discrete Math

### English
* Grammar
* Literature
* Writing
* Poetry
* Essay Writing
* Reading Comprehension

### French
* Grammar
* Vocabulary
* Conversation
* Pronunciation
* Verb Conjugation
* French Culture

### Spanish
* Grammar
* Vocabulary
* Conversation
* Pronunciation
* Verb Conjugation
* Spanish Culture

---

## 🔧 API Reference (Live Mode)

### AI Question Endpoint
```javascript
POST https://api.anthropic.com/v1/messages
Headers:
  Content-Type: application/json
  x-api-key: YOUR_API_KEY
  anthropic-version: 2023-06-01

Body:
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1000,
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Your question here"
        }
      ]
    }
  ],
  "system": "You are an expert educator..."
}

Response:
{
  "content": [
    {
      "type": "text",
      "text": "AI-generated answer..."
    }
  ]
}
```

### Image Analysis
```javascript
// Supports image upload for visual problem-solving
content: [
  {
    "type": "image",
    "source": {
      "type": "base64",
      "media_type": "image/jpeg",
      "data": "base64_encoded_image"
    }
  },
  {
    "type": "text",
    "text": "Analyze this image..."
  }
]
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Optional - only needed for Live AI mode
REACT_APP_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx

# The app works in Demo Mode without any API key
```

**Important:** Never commit your `.env` file to version control!

---

## 🎓 Educational Use Cases

### For Students
* **Homework Help** - Get explanations for difficult concepts
* **Exam Preparation** - Generate practice quizzes from notes
* **Language Learning** - Practice French and Spanish
* **Study Organization** - Keep all notes in one place

### For Teachers
* **Assignment Ideas** - Generate example problems
* **Lesson Planning** - Quick reference for teaching materials
* **Student Resources** - Share the demo mode for study help

### For Self-Learners
* **Skill Development** - Learn new subjects at your own pace
* **Knowledge Retention** - Quiz yourself regularly
* **Progress Tracking** - Monitor your learning journey

---

## 🛡️ Security & Privacy

* **No User Data Collection** - All data stored locally in browser
* **API Key Security** - Environment variables never exposed
* **No Server** - Pure client-side application in demo mode
* **Open Source** - Transparent, auditable code

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Areas for Contribution
* Additional mock responses for subjects
* New subject areas (e.g., Computer Science, Art History)
* UI/UX improvements
* Bug fixes and performance optimization
* Documentation improvements

---

## 📈 Project Stats

* **6 Subjects** with comprehensive coverage
* **36 Subcategories** for specialized learning
* **180+ Mock Responses** for demo mode
* **5 Major Features** (Ask, Quiz, Upload, Search, Dashboard)
* **100% Client-Side** in demo mode (no backend required)

---

## ⭐ Star This Repository

If you find this project useful, please consider giving it a star! It helps others discover the project.

---

**Built with ❤️ for learners everywhere**
