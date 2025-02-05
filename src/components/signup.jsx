import { useState } from "react";
import {Link} from 'react-router-dom'


export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <div className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
              
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              />
           
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
            />
          
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
            //   {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
            />
         
          </div>
          <button className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"><Link
           
           to='/'
            
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Link></button>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-500 hover:underline ml-1"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
