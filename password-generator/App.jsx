import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-20 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full px-2 py-3"
          placeholder="password"
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
     
        <div className="flex gap-y-4 gap-x-2 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              type="range"
              id="lengthInput"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="lengthInput">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
   
  );
}

export default App;
