import React from "react";
import { useForm } from "react-hook-form";
import "./SignInAndSignUp.css";
import usePasswordToggle from "../../redux/actions/uiAction";
import { loginUser } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";
const SignIn = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
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
                    type={PasswordInputType}
                    {...register("password", {
                        required: "This is required",
                        maxLength: { value: 100, message: "Invaild password" },
                    })}
                />
                <i>{ToggleIcon}</i>
                {errors.password && <p>{errors.password.message}</p>}
                <input className="input" type="submit" value="Sign in" />
                <div>
                    <div
                        style={{ margin: "30px auto 0", width: "fit-content" }}
                    >
                        Don't have an account yet?{" "}
                        <Link to="/sign-up" style={{ color: "#7975ec" }}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
