import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";
import {useForm} from "react-hook-form";

const Auth = () => {
    const [mode, setMode] = useState('signup')
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const {signup, login} = useAuth()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    function onSubmit(data) {
        setError(null)
        let result;
        if (mode === 'signup') {
            result = signup(data.email, data.password)
        } else {
            result = login(data.email, data.password)
        }

        result.success ? navigate('/') : setError(result.message)


    }


    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">
                        {mode === 'signup' ? "Signup" : "Login"}
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                        {error && <p className="error-message">{error}</p>}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-input"
                                id="email"
                                {...register("email", {
                                        required: 'Email is required',

                                    }
                                )}
                            />
                            {errors.email && (
                                <span className="form-error">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-input"
                                id="password"
                                {...register("password", {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: 'Password must be at most 12 characters',
                                    }
                                })}
                            />
                            {errors.password && (
                                <span className="form-error">{errors.password.message}</span>
                            )}
                        </div>
                        <button className="btn btn-primary btn-large" type="submit">
                            {mode === 'signup' ? "Signup" : "Login"}
                        </button>
                    </form>

                    <div className="auth-switch">
                        {mode === 'signup' ? (
                            <p>Already have an account? {" "}
                                <span className="auth-link" onClick={() => setMode("login")}>Login</span>
                            </p>
                        ) : (
                            <p>Don`t have an account? {" "}
                                <span className="auth-link" onClick={() => setMode("signup")}>Signup</span>
                            </p>
                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Auth
