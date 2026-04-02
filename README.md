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
- Popular model cards with updated bike names:
  - Classic 350
  - Hunter 350
  - Meteor 350
- Contact form with client-side validation
- Backend form submission and flash messages
- Demo endpoint to view submitted messages: `/admin/messages`
