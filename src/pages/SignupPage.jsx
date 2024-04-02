import React, { useState } from "react";
import { Button } from "daisyui";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === "password") {
            const digitRegex = /\d/; // Regex to match at least one digit
            const lowercaseRegex = /[a-z]/; // Regex to match at least one lowercase letter
            const uppercaseRegex = /[A-Z]/; // Regex to match at least one uppercase letter

            const hasDigit = digitRegex.test(value);
            const hasLowercase = lowercaseRegex.test(value);
            const hasUppercase = uppercaseRegex.test(value);

            let passwordError = "";
            if (
                !(hasDigit && hasLowercase && hasUppercase && value.length >= 8)
            ) {
                passwordError =
                    "Password must be 8+ characters long and contain at least one digit, one lowercase letter, one uppercase letter";
            }

            setPasswordError(passwordError);
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <img
                        src="https://www.torontomu.ca/content/dam/brand/global/images/visual-guide/tmu-logo-social-media.jpg"
                        alt="Image"
                        className="mb-4 rounded-lg w-24 h-24 mx-auto"
                    />
                    <h2 className="card-title">Create an account</h2>
                    <div>
                        <label htmlFor="email" className="label">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input input-bordered input-primary w-full max-w-xs"
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
                            className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="••••••••"
                            required
                            onChange={handleChange}
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm">
                                {passwordError}
                            </p>
                        )}
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
