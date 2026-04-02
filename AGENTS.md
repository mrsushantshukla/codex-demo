# AGENTS

This file defines how humans and automated agents (AI, scripts, CI) should work in this repository. It is written to reduce ambiguity, protect user data, and keep changes consistent and reviewable.

## Project Snapshot

- App type: Flask + Jinja landing page with static assets
- Languages: Python, HTML (Jinja), CSS, JavaScript
- Entry point: `app.py`
- Templates: `templates/`
- Static assets: `static/`

## Guardrails (Read First)

1. Keep user-visible behavior stable unless the change request explicitly asks otherwise.
2. Do not introduce new dependencies without explaining why and updating `requirements.txt`.
3. Avoid breaking the local dev instructions in `README.md`.
4. Never commit secrets or real user data. Use placeholders and document any required env vars.
5. Prefer small, reviewable changes with clear commit messages.

## Repository Map

- `app.py`: Flask app, routes, and form handling
- `templates/`: Jinja HTML templates
- `static/`: CSS, JS, images
- `requirements.txt`: Python dependencies
- `README.md`: Setup and run instructions

## Local Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000/`.

## Development Workflow

1. Create a focused branch.
2. Make minimal changes to satisfy the request.
3. Update docs if behavior or setup changes.
4. Run manual smoke checks: Home page renders; Contact form validates; `/admin/messages` loads.
5. Summarize changes and any manual checks.

## Coding Conventions

### Python
- Prefer clear, explicit code over cleverness.
- Keep route handlers small; move helpers into well-named functions if needed.
- Validate and sanitize any user inputs.

### Templates
- Keep markup readable and semantic.
- Avoid inline scripts and styles unless a one-off is justified.

### CSS
- Keep selectors scoped and specific to avoid global collisions.
- Use consistent spacing and naming.

### JavaScript
- Keep DOM access defensive (elements may not exist).
- Avoid introducing heavy dependencies.

## Testing

There is no automated test suite. If you add one, document it in `README.md` and include a quickstart.

## Security & Privacy

- Do not log personal data unnecessarily.
- Ensure form handling remains safe (basic validation and escaping).
- Avoid storing data on disk unless explicitly requested.

## Change Communication

When submitting changes, include:

- Summary of what changed and why
- Files touched
- Manual checks performed (and results)
- Any follow-up recommendations

## For Automated Agents

- Always read `README.md` and this file first.
- If requirements are unclear, ask a concise clarifying question before making risky changes.
- Use minimal diffs and avoid reformatting unrelated code.
- Prefer `rg` for search.

## Ownership

If you are unsure about a requirement, stop and ask. The safest path is preferred over speculation.
