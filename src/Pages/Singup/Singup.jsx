import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Singup = () => {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (

        <div>
          
            <Helmet>
                <title>bistro boss |Singup</title>

            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">

                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold">
                            Sing up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
                                    })}
                                    placeholder="password" name='password' className="input input-bordered" />

                                {errors.password?.type == "required " && <span className="text-red-500 mt-2">password is required</span>}
                                {errors.password?.type == "minLength" && <span className="text-red-500 mt-2"> min length mast 6</span>}
                                {errors.password?.type == "maxLength" && <span className="text-red-500 mt-2">Max length 20</span>}

                                {errors.password?.type == "pattern" && <span className="text-red-500 mt-2">Must have one capetal letter one small letter and one spacial caracter</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Sing up" />
                            </div>
                        </form>
                        <p>have an acount? <Link to={'/login'}> Long in</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Singup;