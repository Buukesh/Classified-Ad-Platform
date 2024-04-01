import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { postData } from "../../utils";
import useAppContext from "../context/useAppContext";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { setToken } = useAppContext();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // when this boolean is set, a loading animation will show
        setIsLoading(true);

        const data = await postData("/api/token", {
            username: formData.email,
            password: formData.password,
        });

        setToken(data.token);
        setIsLoading(false);

        // go to homepage after logging in
        navigate("/");
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="card-actions justify-center">
                        <button
                            className={`btn btn-primary ${
                                isLoading ? "loading" : ""
                            }`}
                            onClick={handleSubmit}
                        >
                            Sign in
                        </button>
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
