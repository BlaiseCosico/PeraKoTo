import React from "react";
import GoogleLogin from 'react-google-login';
import "bootstrap/dist/css/bootstrap.min.css";

const responseGoogle = (response) => {
    console.log(response);
}

function loginPage(){
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form>
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Register
            </button>

            <GoogleLogin
                clientId="571981908200-b9kkn6gprh4g09qkg9qumagipju4s4bs.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            
        </form>
    </div>
    );
}

export default loginPage