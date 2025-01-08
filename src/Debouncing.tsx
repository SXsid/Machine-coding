import { useEffect, useState } from 'react';

const CountriesList = () => {
  const [res, setRes] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [selected, setSlected] = useState<string[]>([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const response = await fetch(
        `https://algochurn-server.onrender.com/practice/countries/${input}`
      );
      const data = await response.json();
      console.log(data);
      setRes(data.countries);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input]);

  function handClick(value: string) {
    setSlected((prev) => {
      if (!prev.includes(value)) {
        return [...prev, value];
      }
      return prev;
    });
  }
  function handleCancel(value: string) {
    setSlected((prev) => prev.filter((data) => data !== value));
  }
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <div>
        {res.map((data, index) => {
          return (
            <div
              onClick={() => handClick(data)}
              style={{
                backgroundColor: 'blue',
                margin: '2px',
                cursor: 'pointer',
              }}
              key={index}
            >
              {data}
            </div>
          );
        })}
      </div>
      {selected.map((data, index) => {
        return (
          <div style={{ display: 'flex', gap: '4px' }} key={index}>
            <div>{data}</div>
            <div
              onClick={() => handleCancel(data)}
              style={{ height: '8', cursor: 'pointer' }}
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
