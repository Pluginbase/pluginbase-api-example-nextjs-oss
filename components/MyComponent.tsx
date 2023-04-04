import { useState } from 'react';

interface ApiResponse {
  response: string;
}

function MyComponent() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiUrl = '/api/callpluginapi';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         text 
        }),
    });
    const responseData: ApiResponse = await response.json();
    setResult(responseData.response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text:
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
      {result && <div>Result: {result}</div>}
    </form>
  );
}


export default MyComponent;