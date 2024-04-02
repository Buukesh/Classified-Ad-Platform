import React, { useState } from "react";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "password") {
            const digitRegex = /\d/;
            const lowercaseRegex = /[a-z]/;
            const uppercaseRegex = /[A-Z]/;

            const hasDigit = digitRegex.test(value);
            const hasLowercase = lowercaseRegex.test(value);
            const hasUppercase = uppercaseRegex.test(value);

            if (
                !(hasDigit && hasLowercase && hasUppercase && value.length >= 8)
            ) {
                setPasswordError(
                    "Password must be 8+ characters long and contain at least one digit, one lowercase letter, one uppercase letter."
                );
            } else {
                setPasswordError("");
            }
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const validEmail = emailRegex.test(value);
            setEmailError("");
            if (!validEmail || !value.endsWith("@torontomu.ca")) {
                setEmailError(
                    "Please enter a valid email address ending with @torontomu.ca."
                );
            }
        }
    };

    const isFormValid = () => {
        return (
            formData.email.trim() !== "" &&
            formData.password.trim() !== "" &&
            !emailError &&
            !passwordError
        );
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
                            onChange={handleChange}
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm">{emailError}</p>
                        )}
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <div className="join">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="input input-bordered input-primary join-item w-full max-w-xs pr-20"
                                placeholder="••••••••"
                                required
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-primary join-item"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="text-red-500 text-sm">
                                {passwordError}
                            </p>
                        )}
                    </div>
                    <div className="card-actions justify-center">
                        <button
                            className="btn btn-secondary"
                            disabled={!isFormValid()}
                        >
                            Sign up
                        </button>
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
