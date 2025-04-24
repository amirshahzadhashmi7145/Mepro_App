import React, { useState } from 'react';
import bgshape from "../assets/Shape.png";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-500 p-4" style={{ backgroundImage: `url(${bgshape})`, backgroundSize: 'auto' }}>
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
                    <p className="text-gray-600 mt-2">Create a account to continue</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="text-start block text-gray-700 mb-2">
                            Email address:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="text-gray-500 w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="username" className="text-start block text-gray-700 mb-2">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="text-gray-500 w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" className="block text-gray-700">
                                Password
                            </label>
                            <a href="#" className="text-sm text-gray-500 hover:text-rose-500">
                                Forget Password?
                            </a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-gray-500 w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                className="h-4 w-4 text-rose-500 rounded focus:ring-rose-500 border-gray-300"
                                required
                            />
                            <span className="ml-2 text-gray-700">I accept terms and conditions</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-md transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <a href="#" className="text-rose-500 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;