import React from 'react';
import pic404 from '../assets/404pic.png'; // Assuming you have a 404 image in your assets folder

const ErrorPage404 = () => {
    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-500 p-4">
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-16 flex flex-col items-center">
                <div className="mb-6">
                    {/* 404 Browser Window Illustration */}
                    <div className="w-64 h-44 relative">
                        <img src={pic404} alt="404" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />

                        {/* Browser Window Details */}
                        <div className="absolute bottom-6 left-6">
                            <div className="h-1.5 w-8 bg-white rounded-full mb-2"></div>
                            <div className="h-1.5 w-5 bg-white rounded-full"></div>
                        </div>

                        <div className="absolute bottom-6 right-6">
                            <div className="flex">
                                <div className="h-1.5 w-1.5 bg-white rounded-full mx-0.5"></div>
                                <div className="h-1.5 w-1.5 bg-white rounded-full mx-0.5"></div>
                                <div className="h-1.5 w-1.5 bg-white rounded-full mx-0.5"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-medium text-gray-800 mb-8">
                    Looks like you've got lost....
                </h2>

                <button
                    onClick={handleClick}
                    className="w-2/3 bg-rose-400 hover:bg-rose-600 text-white py-2 rounded-md transition duration-200"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default ErrorPage404;