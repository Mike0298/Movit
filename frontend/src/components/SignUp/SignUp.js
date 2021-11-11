import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/actions/userAction";
import "../SignIn/SignInAndSignUp.css";

const SignUp = () => {
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
                <label>Password</label>
                <input
                    className="input"
                    {...register("password", {
                        required: "This is required",
                        maxLength: {
                            value: 100,
                            message:
                                "How could someone remember this??(too long)",
                        },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <input className="input" type="submit" value="Sign in" />
                {/* <p>
                    Already have an account? <a href="#">Sign in</a>
                </p> */}
            </form>
        </div>
    );
};

export default SignUp;
