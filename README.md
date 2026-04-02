# Royal Enfield Showroom Demo

A basic landing page project built with:
- HTML (Jinja template)
- CSS
- JavaScript
- Python Flask backend (contact form handling)

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000/`.

## Features

- Hero + model showcase sections
- Contact form with client-side validation
- Backend form submission and flash messages
- Demo endpoint to view submitted messages: `/admin/messages`
