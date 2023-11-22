// import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const {login}=useContext(AuthContext)
    const  navigate=useNavigate()
    const location=useLocation()

    let f =location.state?.from?.pathname ||'/'
    
    
    // const [disabal, setdisabal] = useState(true)


    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])



    const handlsubmit = e => {
        e.preventDefault();
        const from = e.target;
        const password = from.password.value;
        const email = from.email.value;
        console.log(password, email)
        login(email,password)
        .then(res=>{
            // console.log(res)
            if(res){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate(f, { replace: true });
            }
            
        })
        .catch(error=>{
            console.error(error)
        })
        
    }

    // const handlcapcha = (e) => {
        
    //     const user_captcha_value = e.current.value;
    //     if (validateCaptcha(user_captcha_value)) {
    //         setdisabal(false)
    //     }

    // }
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
                        <form onSubmit={handlsubmit} className="card-body">
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
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>

                                <input type="text" onBlur={handlcapcha} placeholder="type the capcha" className="input input-bordered" required />


                               
                            </div> */}
                            <div className="form-control mt-6">

                                <input  className="btn btn-primary" type="submit"  value="Login" />
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