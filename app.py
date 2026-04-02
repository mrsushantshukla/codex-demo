from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime

app = Flask(__name__)
app.secret_key = "royal-enfield-demo-secret"

# In-memory storage for demo purposes.
messages = []


@app.route("/")
def index():
    return render_template("index.html", year=datetime.utcnow().year)


@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    phone = request.form.get("phone", "").strip()
    message = request.form.get("message", "").strip()

    if not name or not email or not message:
        flash("Please fill in name, email, and message fields.", "error")
        return redirect(url_for("index") + "#contact")

    messages.append(
        {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message,
            "created_at": datetime.utcnow().isoformat(),
        }
    )

    flash("Thanks! Your message has been submitted.", "success")
    return redirect(url_for("index") + "#contact")


@app.route("/admin/messages")
def admin_messages():
    return {
        "count": len(messages),
        "messages": messages,
    }


if __name__ == "__main__":
    app.run(debug=True)
