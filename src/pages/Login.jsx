import React, { useState } from 'react';
import bgshape from '../assets/Shape.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-500 p-4" style={{ backgroundImage: `url(${bgshape})`, backgroundSize: 'fit' }}>
            <div className="relative w-full bg-white rounded-lg shadow-lg max-w-lg p-8">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Login to Account</h1>
                    <p className="text-gray-600 mt-2">Please enter your email and password to continue</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 mb-2 text-start">
                            Email address:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
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

                    <div className="mb-8">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberPassword}
                                onChange={(e) => setRememberPassword(e.target.checked)}
                                className="h-4 w-4 rounded focus:ring-rose-500"
                            />
                            <span className="ml-2 text-gray-700">Remember Password</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full hover:bg-rose-600 bg-rose-400 text-white py-3 rounded-md transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <a href="#" className="hover:underline text-rose-500">
                            Create Account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;