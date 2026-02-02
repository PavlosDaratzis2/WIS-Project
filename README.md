# WIS-Project

A small beginner-friendly full-stack project: a **Flask backend** (REST API + MongoDB) and a minimal **HTML/JS frontend**.  
Built to practice API development, database operations, basic recommendations, and web crawling.

---

## Features
- Store and manage products in **MongoDB**
- Search products by name
- Add/update products (upsert)
- Content-based recommendations (cosine similarity)
- Selenium crawler endpoint (AUTH study guide)

---

## Tech Stack
Python, Flask, MongoDB, PyMongo, NumPy, Selenium, HTML/CSS/JavaScript

---

## Requirements
- Python 3.x
- MongoDB running locally
- Google Chrome installed (for Selenium crawler)

---

## Run locally
```bash
git clone https://github.com/PavlosDaratzis2/WIS-Project
cd WIS-Project
pip install -r requirements.txt
# Make sure MongoDB is running locally (default expected by this project):
# mongodb://127.0.0.1:27017/pspi
python app.py
# API: http://127.0.0.1:5000
# Open one of these files in your browser:
# - homepage.html
# - products.html
# API Endpoints (quick):
# GET  /search?name=<text>
# POST /add-product
# POST /content-based-filtering
# GET  /crawler?semester=<number>

### 1) Clone the repository
```bash
git clone https://github.com/PavlosDaratzis2/WIS-Project
cd WIS-Project
