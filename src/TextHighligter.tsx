import { useState } from "react";


function TextHighligter() {
    const [data, setData] = useState([""]);
    const [input, setInput] = useState("");
    function handleButoon() {
      setData((prev) => [...prev, input]);
      setInput('');
    }
    return (
      <div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {data.map((value, index) => {
            return (
              <p className="data" key={index}>
                {value}
              </p>
            );
          })}
        </div>
        <div style={{ display: 'flex' }}>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleButoon}>enter</button>
        </div>
      </div>
    );
}

export default TextHighligter
