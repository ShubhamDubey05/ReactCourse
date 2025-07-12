import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pas = "";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+/-";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pas += str.charAt(idx);
    }
    setPassword(pas);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    if(passRef.current)
    passRef.current.select();
    passRef.current.setSelectionRange(0, 8);
    navigator.clipboard.writeText(password.slice( 0, 8));
    // alert("✅ Password copied to clipboard!");
  }, [password]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex items-center mb-4 rounded-lg overflow-hidden border border-gray-300">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 outline-none text-gray-800 font-mono"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">
              Length: <span className="font-bold">{length}</span>
            </label>
            <input
              id="length"
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberInput">Include Numbers</label>
            <input
              id="numberInput"
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-4 w-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="charInput">Include Special Characters</label>
            <input
              id="charInput"
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-4 w-4"
            />
          </div>
        </div>

        <button
          onClick={passwordGenrator}
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 rounded-lg font-semibold transition-all duration-200"
        >
          🔁 Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;
