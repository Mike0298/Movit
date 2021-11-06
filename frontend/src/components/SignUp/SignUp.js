import React from "react";
import { useForm } from "react-hook-form"
import '../SignIn/SignInAndSignUp.css'
import { registerUser } from "../../redux/actions/userAction";
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        registerUser(data)
    };
    return (
        <div>
            <h1>This is Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input {...register("name", { required: "This is required", maxLength: { value: 20, message: "Too long >:(((((" } })} />
                {errors.name && <p>{errors.name.message}</p>}
                <label>Email</label>
                <input {...register("email", { required: "This is required" })} />
                {errors.email && <p>{errors.email.message}</p>}
                <label>Password</label>
                <input {...register("password", { required: "This is required", maxLength: { value: 100, message: "How could someone remember this??(too long)" } })} />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" value="Sign in" />
            </form>
        </div>
    );
};

export default SignUp;
