import React from "react";
import { useForm } from "react-hook-form"
import './SignInAndSignUp.css'
import { loginUser } from "../../redux/actions/userAction";
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        loginUser(data)
        };
    return (
        <div>
            <h1>This is Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input {...register("email", { required: "This is required",maxLength:{value:100,message:"Too long >:((((("}})} />
                {errors.email && <p>{errors.email.message}</p>}
                <label>Password</label>
                <input {...register("password", { required: "This is required",maxLength:{value:100,message:"Invaild password"} })} />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" value="Sign in" />
            </form>
        </div>
    );
};

export default SignIn;
