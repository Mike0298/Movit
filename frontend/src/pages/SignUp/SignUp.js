import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/actions/userAction";
import "../SignIn/SignInAndSignUp.css";
import usePasswordToggle from "../../redux/actions/uiAction";
import { Link } from "react-router-dom";
import {FaBeer} from "react-icons/fa"
const SignUp = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        registerUser(data);
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-name">Sign up</h1>
                <label>Name</label>
                <input
                    className="input"
                    {...register("name", {
                        required: "This is required",
                        maxLength: {
                            value: 20,
                            message: "Too long >:(((((",
                        },
                    })}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <label>Email</label>
                <input
                    className="input"
                    {...register("email", { required: "This is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <label>Password
                <input
                    className="input"
                    type={PasswordInputType}
                    {...register("password", {
                        required: "This is required",
                        maxLength: {
                            value: 100,
                            message:
                                "How could someone remember this??(too long)",
                        },
                    })}
                />
                <i>{ToggleIcon}</i></label>
                {errors.password && <p>{errors.password.message}</p>}
                <label>Have an account?<Link to="/sign-in" className="link"> Sign in</Link></label>
                <input className="input" type="submit" value="Sign in" />
                {/* <p>
                    Already have an account? <a href="#">Sign in</a>
                </p> */}
            </form>
        </div>
    );
};

export default SignUp;
