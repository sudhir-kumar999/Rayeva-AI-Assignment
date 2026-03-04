# Rayeva – AI Systems Assignment

## Overview

This project is an AI-powered system designed to automate product catalog management and B2B proposal generation for sustainable commerce.
The system integrates **AI capabilities with real business logic** to reduce manual work and assist businesses in generating structured product data and corporate sustainability proposals.

The project implements two modules from the assignment:

1. **AI Auto-Category & Tag Generator**
2. **AI B2B Proposal Generator**

The application uses **React for frontend**, **Node.js + Express for backend**, **MongoDB for database**, and **Google Gemini API for AI processing**.

---

# Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI Integration

* Google Gemini API

---

# Project Architecture

```
User
   ↓
React Frontend
   ↓
Express API Server
   ↓
AI Service (Gemini API)
   ↓
MongoDB Database
```

The system separates **AI logic, business logic, and API routes** for clean architecture.

---

# Module 1: AI Auto-Category & Tag Generator

### Objective

Automatically classify products and generate SEO metadata using AI.

### Input

Product name and description.

Example input:

```
Product Name: Bamboo Toothbrush  
Description: Eco-friendly toothbrush with biodegradable handle
```

### AI Output

```
{
  "primary_category": "Oral Care",
  "sub_category": "Toothbrush",
  "tags": ["eco friendly", "bamboo toothbrush", "biodegradable"],
  "sustainability_filters": ["plastic free", "recyclable"]
}
```

### Features

* Auto-detect primary category
* Suggest sub-category
* Generate **5–10 SEO tags**
* Suggest sustainability filters
* Return **structured JSON output**
* Store results in MongoDB

---

# Module 2: AI B2B Proposal Generator

### Objective

Generate sustainable corporate gift proposals based on company requirements.

### Input

```
Budget
Number of Employees
Goal (Example: Sustainable corporate gifts)
```

Example:

```
Budget: 5000
Employees: 200
Goal: Sustainable corporate gift kits
```

### AI Output

```
{
 "product_mix":[
   {
    "item":"Reusable Water Bottle",
    "description":"Durable stainless steel bottle",
    "quantity":200
   }
 ],
 "budget_allocation":{},
 "estimated_sustainability_impact":{},
 "impact_summary":"Reusable products reduce plastic waste"
}
```

### Features

* AI-generated product mix
* Budget allocation
* Sustainability impact estimation
* Human-readable impact summary
* Structured JSON output
* MongoDB storage

---

# Database Design

### Product Collection

Stores generated product categorization results.

Fields:

* productName
* description
* primary_category
* sub_category
* tags
* sustainability_filters

### Proposal Collection

Stores generated AI proposals.

Fields:

* budget
* employees
* goal
* product_mix
* budget_allocation
* estimated_sustainability_impact
* impact_summary

### AI Log Collection

Stores prompt and response history.

Fields:

* module
* prompt
* response
* timestamp

---

# AI Prompt Design

Example prompt used for category generation:

```
You are an AI product catalog assistant.

Generate:
- primary category
- sub category
- SEO tags
- sustainability filters

Return only JSON.
```

Example prompt for proposal generation:

```
You are an AI sustainability consultant.

Generate:
- sustainable product mix
- budget allocation
- sustainability impact
- summary

Return structured JSON only.
```

---

# Technical Requirements Covered

✔ Structured JSON outputs
✔ Prompt and response logging
✔ Environment-based API key management
✔ Clear separation of AI logic and business logic
✔ Error handling and validation

---

# Modules Architecture (Future Scope)

## Module 3 – AI Impact Reporting Generator

Architecture:

```
Order Data
   ↓
Impact Calculation Service
   ↓
AI Summary Generator
   ↓
Impact Report JSON
```

This module would estimate:

* plastic saved
* carbon avoided
* local sourcing impact

---

## Module 4 – AI WhatsApp Support Bot

Architecture:

```
Customer WhatsApp Message
        ↓
Webhook API
        ↓
Order Database
        ↓
AI Response Generator
        ↓
WhatsApp Reply
```

This module would allow customers to:

* check order status
* ask return policy questions
* escalate issues.

---

# Running the Project

## Backend

```
cd server
npm install
npm run dev
```

## Frontend

```
cd client
npm install
npm run dev
```

---

# Demo

The application demonstrates:

1. AI product category generation
2. AI corporate proposal generation
3. MongoDB storage of results
4. Structured AI outputs

---

# Author

Sudhir Kumar
Full Stack Developer | MERN Stack | Generative AI
