"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login-form.css"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validateForm = () => {
        let formErrors = {}

        if (!email) {
            formErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid"
        }

        if (!password) {
            formErrors.password = "Password is required"
        } else if (password.length < 6) {
            formErrors.password = "Password must be at least 6 characters"
        }

        return formErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm()

        if (Object.keys(formErrors).length === 0) {
            if (email !== "dhruv21@gmail.com") {
                setErrors({ email: "Incorrect Email" })
                return
            }
            if (password !== "123123") {
                setErrors({ password: "Incorrect Password" })
                return
            }

            // Successful login
            console.log("Login successful")
            navigate("/dashboard")
        } else {
            setErrors(formErrors)
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
