import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const Register = () => {
    const { createUser } = useAuth();
    const imageHostingKey = import.meta.env.VITE_IMAGE_KEY;
    const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const imageFile = new FormData();
        imageFile.append("image", data.photo[0]);
        const res = await axios.post(imageHostingAPI, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (res.data.success) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateProfile(loggedUser, {
                        displayName: data.name,
                        photoURL: res.data.data.display_url
                    })
                })
        }
    }
    return (
        <div className="bg-third mb-16 w-full">

            <div className="flex-col max-w-6xl p-24  mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-poppins font-bold">Create Your Account</h1>
                </div>
                <h2 className="text-center p-1 mt-4 bg-second w-64 mx-auto font-semibold"> Already have an account<Link className="font-bold" to="/login"> Login</Link></h2>
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-6">
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
                                    <span className="label-text">Name*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span>Name is required</span>}
                            </div>
                        </div>

                        <div className="flex gap-6">


                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Avater*</span>
                                </label>
                                <input
                                    type="file"
                                    name="avater"
                                    className="file-input file-input-bordered "
                                    {...register("photo", { required: true })}
                                />
                                {errors.photo && <span>Photo is required</span>}
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
                            <button className="btn hover:text-gray-800 btn-block bg-second">Register</button>
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

export default Register;