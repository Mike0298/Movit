import React from "react";
import { useForm } from "react-hook-form";
import "./SignInAndSignUp.css";
import { loginUser } from "../../redux/actions/userAction";
const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        loginUser(data);
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-name">Sign in</h1>
                <label>Email</label>
                <input
                    className="input"
                    {...register("email", {
                        required: "This is required",
                        maxLength: { value: 100, message: "Too long >:(((((" },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <label>Password</label>
                <input
                    className="input"
                    {...register("password", {
                        required: "This is required",
                        maxLength: { value: 100, message: "Invaild password" },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <input className="input" type="submit" value="Sign in" />
                {/* <p>
                    Don't have an account yet? <a href="#">Sign up</a>
                </p> */}
            </form>
        </div>
    );
};

export default SignIn;
