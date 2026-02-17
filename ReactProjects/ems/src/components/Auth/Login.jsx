import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] px-4">

      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-30 bottom-[-100px] right-[-100px]"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Access your EMS Dashboard
        </p>

        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="name@gmail.com"
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Password
            </label>

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder-gray-500"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 cursor-pointer text-gray-400 hover:text-white transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 cursor-pointer active:scale-95 transition-all duration-300 text-white font-semibold py-2.5 rounded-xl shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
           All rights reserved.© 2026 EMS.
        </p>

      </div>
    </div>
  );
};

export default Login;
