# Medico

An AI-powered CRM assistant for pharmaceutical sales representatives built using **React, FastAPI, LangGraph, LangChain, and Groq LLM**.

The assistant converts natural language into structured CRM interaction records and supports editing, summarization, follow-up generation, and next-best-action recommendations.

---

# Features

## Log Interaction

Example:

> Today I met Dr Smith. We discussed Ozempic. He liked the product and I shared brochures.

Automatically extracts:

- HCP Name
- Interaction Date
- Interaction Type
- Product
- Sentiment
- Discussion
- Brochure Shared
- Follow Up
- Summary

---

## Edit Interaction

Example:

> Actually the doctor's name was Dr John.

Only updates the requested field while preserving the rest.

---

## Generate Summary

Example:

> Summarize this interaction.

Produces a professional CRM summary.

---

## Generate Follow Up

Example:

> What should I follow up?

Returns actionable follow-up tasks.

---

## Recommend Next Action

Example:

> What should I do next?

Returns AI-generated next-best-action recommendations.

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Redux Toolkit
- Tailwind CSS v4
- React Markdown
- Axios
- Vite

## Backend

- FastAPI
- LangGraph
- LangChain
- Groq LLM
- Pydantic

---

# Project Structure

```
ai-first-crm/
│
├── frontend/
│
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── features/
│   └── app/
│
├── backend/
│
│   ├── app/
│   │
│   ├── api/
│   ├── graph/
│   ├── llm/
│   ├── schemas/
│   └── main.py
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/ai-first-crm.git
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env`

```
GROQ_API_KEY=your_api_key
```

Run server

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Navigate

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# API

POST

```
POST /chat/
```

Request

```json
{
  "message": "Today I met Dr Smith. We discussed Ozempic.",
  "interaction": {}
}
```

Response

```json
{
  "tool_name": "Log Interaction",
  "assistant_response": "Interaction logged successfully.",
  "interaction": {
    "hcp_name": "Dr Smith",
    "product": "Ozempic"
  }
}
```

---

# AI Workflow

```
User

↓

LangGraph Router

↓

Log Interaction
OR

Edit Interaction
OR

Generate Summary
OR

Generate Follow Up
OR

Recommend Action

↓

Groq LLM

↓

Structured CRM Response

↓

React UI
```

---

# Screenshots

Add screenshots of:

- Dashboard
- Interaction Logging
- Summary Generation
- Follow-up Recommendations

---

# Author

Ibrahim Munshi

GitHub:
https://github.com/IbrahimMunshi2003

linkedIn: