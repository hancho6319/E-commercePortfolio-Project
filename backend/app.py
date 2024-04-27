from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def method_name():
    user_agent = request.user_agent.string

    # Check if the User-Agent string contains keywords indicative of a mobile device
    is_mobile = 'Mobi' in user_agent or 'Android' in user_agent or 'iOS' in user_agent
    if is_mobile:
        return render_template('index.html', mode="mobile")
    else:
        return render_template('index.html', mode="desktop")
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=81)
