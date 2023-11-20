import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRaf = useRef(null)
    const [disabal, setdisabal] = useState(true)


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const handlsubmit = e => {
        e.preventDefault();
        const from = e.target;
        const password = from.password.value;
        const email = from.email.value;
        console.log(password, email)
    }

    const handlcapcha = e => {
        e.preventDefault();
        const user_captcha_value = captchaRaf.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setdisabal(false)
        }

    }
    return (

        <div>
            <Helmet>
                <title>bistro boss |Login</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">

                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>

                                <input type="text" ref={captchaRaf} placeholder="type the capcha" className="input input-bordered" required />


                                <button onClick={handlcapcha} className="btn btn-outline btn-error btn-xs mt-3 p- ">Error</button>

                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabal} className="btn btn-primary" type="submit" onSubmit={handlsubmit} value="Login" />
                            </div>
                        </form>
                        <p>Are you new ? <Link to={'/singup'}>Sing up</Link></p>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Login;