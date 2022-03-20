@app.route("/signup", methods=["POST", "GET"])
def signup_post():
    """
    ->Render
    """
    # code to validate and add user to database goes here
    data = request.form
    email = data.get("email")
    firstname = data.get("firstname")
    lastname = data.get("lastname")
    username = data.get("username")
    password = data.get("password")
    hashbrown = generate_password_hash(password, method="sha256")
    db.session.begin()
    new_user = User(
        email=email,
        password=hashbrown,
        username=username,
        firstname=firstname,
        lastname=lastname,
    )

    print("Form Data: ", data)

    print(" Trying to Sign Up ")

    user = User.query.filter_by(
        username=username
    ).first()  # if this returns a user, then the email already exists in database
    print(" Trying to Sign Up Again ")
    if (
        user
    ):  # if a user is found, we want to redirect back to signup page so user can try again
        return redirect(url_for("signup"))

    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for("login"))