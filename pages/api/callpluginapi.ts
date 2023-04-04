import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text, plugin } = req.body;
  const openai_api_key = process.env.OPENAI_API_KEY
  const pluginbaseApiServer = process.env.PLUGINBASE_API_SERVER;
  const pluginbaseApiKey = process.env.PLUGINBASE_API_KEY;
  const apiUrl = pluginbaseApiServer + 'v1/generate';
  
  const requestBody = {
    text,
    plugin,
    llm: 'openai',
    llm_api_key: openai_api_key
  };
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      Authorization: `Bearer ${pluginbaseApiKey}`,
    },
    body: JSON.stringify(requestBody),
  });
  const responseData = await response.json();
  res.status(response.status).json(responseData);
}
