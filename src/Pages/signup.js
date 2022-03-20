

export default function (){
    return(
        <>
            <form name="new_user" method="POST" action="/signup">
                <div className="container" style="padding: 10px">
                    <div className="grid" style="--bs-gap: .25rem 1rem"><br>
                        <div className="container-fluid bg-light" style="padding-bottom: 10px">
                            <H4 style="padding: 5px">Create Account</H4>
                            <div className="row g-3" style="padding: 5px">
                                <div className="col col-md-6">
                                    <input type="text" className="form-control" placeholder="Username"
                                           aria-label="Username" name="username">
                                </div>
                            </div>
                            <div className="row g-3" style="padding: 5px">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name"
                                           aria-label="First name" name="firstname">
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name"
                                           aria-label="Last name" name="lastname">
                                </div>
                            </div>
                            <div className="row g-3 " style="padding: 5px">
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email"
                                           name="email">
                                </div>
                            </div>
                            <div className="row g-3 col-md-6 is-offset-4" style="padding: 5px; padding-bottom: 15px">
                                <div className="col">
                                    To check a password between 6 to 20 characters which contain at least one numeric
                                    digit, one uppercase and one lowercase letter
                                    <input type="password" className="form-control" placeholder="Password"
                                           aria-label="Password" name="password">
                                </div>
                            </div>
                            <div className="row g-3 " style="padding: 5px; padding-bottom: 15px">
                                <div className="col col-md-6 is-offset-4 ">
                                    <input type="password" className="form-control" placeholder=" Verify Password"
                                           aria-label="Password" name="password_check">
                                </div>
                            </div>

                            <button className="btn btn-primary" type="submit" aria-label="Submit" name="submit"
                                    onClick="CheckPassword(document.new_user.password.text1)">Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}