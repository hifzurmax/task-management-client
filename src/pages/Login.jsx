import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
    const { signIn } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // navigate(from, { replace: true });
        })


    }


    return (
        <div className="bg-third mb-16 w-full">

            <div className="flex-col max-w-6xl p-24  mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-poppins font-bold">Login Your Account</h1>
                </div>
                <h2 className="text-center p-1 mt-4 bg-second w-64 mx-auto font-semibold"> New here<Link className="font-bold" to="/register"> Register</Link></h2>
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span>Password is required</span>}
                            </div>
                        </div>

                       


                        <div className="form-control mt-6">
                            <button className="btn hover:text-gray-800 btn-block bg-second">Login</button>
                        </div>
                    </form>

                    <div className="flex justify-center gap-3 items-center">
                        {/* <p className="font-bold text-lg">Signin With</p> */}
                        {/* <button onClick={handleGoogleLogin} className="btn bg-white border-main hover:bg-main px-16 border hover:shadow-md text-main hover:text-white"><img className="h-5 w-5" src={goo} alt="" /> Google</button> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;