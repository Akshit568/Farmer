markdown
# 🌾 AI-Based Farmer Query Support and Advisory System

> **Research Paper Implementation**
> Authors: Akshit Thakur
---

## Overview

An AI-powered backend system that provides real-time agricultural
advisory to farmers using machine learning and natural language
processing. The system delivers personalized crop recommendations,
pest diagnosis, fertiliser advice, weather alerts, and multilingual
farming guidance through a conversational chatbot interface.

---

## Features

- 🌱 ML-Based Crop Recommendation (Random Forest + kNN + SVM Ensemble)
- 🤖 AI Chatbot — KisanMitra (Powered by Groq Llama 3.3 70B)
- 🐛 Pest and Disease Diagnosis
- 💊 Fertiliser Advisory by Growth Stage
- ☁️ 7-Day Weather Forecast and Farming Alerts
- 👨‍🌾 Farmer and Farm Profile Management
- 📋 Activity Tracking (Sowing, Pest Events, Irrigation)
- 📊 Personalized Proactive Advisory

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | FastAPI |
| Database | SQLAlchemy + SQLite |
| ML Models | scikit-learn (RF + kNN + SVM) |
| AI Chatbot | Groq API (Llama 3.3 70B) |
| Weather | Open-Meteo (Free, No Key) |
| Validation | Pydantic v2 |
| Server | Uvicorn |

---

## Project Structure
```
backend/
├── main.py              # FastAPI app entry point
├── database.py          # Database configuration
├── schemas.py           # Pydantic request/response models
├── requirements.txt     # Dependencies
├── .env.example         # Environment variables template
│
├── models/
│   ├── farmer.py        # Farmer profile database model
│   └── activity.py      # Activity tracking database model
│
├── routers/
│   ├── farmers.py       # Farmer CRUD endpoints
│   ├── crops.py         # Crop recommendation endpoints
│   ├── chatbot.py       # AI chatbot endpoints
│   ├── activities.py    # Activity tracking endpoints
│   ├── advisory.py      # Personalized advisory endpoints
│   └── weather.py       # Weather forecast endpoints
│
└── services/
    ├── ml_service.py        # ML ensemble model
    ├── chatbot_service.py   # Groq API integration
    └── weather_service.py   # Open-Meteo integration
```

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/farmer-advisory-backend.git
cd farmer-advisory-backend
```

### 2. Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Linux/Mac
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables
```bash
cp .env.example .env
```
Add your Groq API key in `.env`:
```
GROQ_API_KEY=your_groq_api_key_here
```
Get your free key at: https://console.groq.com

### 5. Run the Server
```bash
python -m uvicorn main:app --reload --port 8000
```

### 6. Open API Documentation
```
http://localhost:8000/docs
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/farmers/ | Register farmer |
| GET | /api/farmers/{id} | Get farmer profile |
| POST | /api/crops/recommend | Get crop recommendations |
| POST | /api/chatbot/chat | Chat with KisanMitra |
| POST | /api/chatbot/diagnose-pest | Pest diagnosis |
| POST | /api/chatbot/fertiliser-advice | Fertiliser advice |
| POST | /api/activities/ | Log farm activity |
| GET | /api/activities/farmer/{id} | Get farmer activities |
| POST | /api/advisory/generate | Get personalized advisory |
| GET | /api/weather/forecast | Get weather forecast |

---

## ML Model

The crop recommendation engine uses a **Voting Classifier Ensemble**:

| Model | Role |
|-------|------|
| Random Forest (100 trees) | Primary classifier |
| k-Nearest Neighbours (k=5) | Local pattern matching |
| SVM (RBF kernel) | High-dimensional classification |

**Input:** N, P, K (kg/ha) · Temperature (°C) · Humidity (%) · pH · Rainfall (mm)
**Output:** Top 3 crop recommendations with confidence scores
**Crops Supported:** 23 crops including rice, wheat, maize, cotton, coffee, banana, mango and more

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| GROQ_API_KEY | Groq API key for chatbot | ✅ Yes |
| DATABASE_URL | Database connection URL | ❌ Optional (SQLite default) |

---

## Research Paper

This backend implements the system proposed in:

> **"AI-Based Farmer Query Support and Advisory System"**
> Akshit Thakur, Kanav Sharma, Abhinav Sharma, Shivam Nagar,
> Mellamputi Sai Harshavardhan, Prashanth
> Lovely Professional University, Jalandhar, India, 2025

---
