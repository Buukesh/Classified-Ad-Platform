// LoginPage.jsx
import React, { useState } from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login form submitted:", formData);
        // Add login logic here (e.g., API call)
    };

    return (
        <section className="flex items-center justify-center min-h-screen">
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <img
                        src="https://www.torontomu.ca/content/dam/brand/global/images/visual-guide/tmu-logo-social-media.jpg"
                        alt="Image"
                        className="mb-4 rounded-lg w-24 h-24 mx-auto"
                    />
                    <h2 className="card-title">Sign in to your account</h2>
                    <div>
                        <label htmlFor="email" className="label">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input w-full max-w-xs"
                            placeholder="name@torontomu.ca"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input w-full max-w-xs"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
