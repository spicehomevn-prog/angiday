exports.handler = async (event) => {
  const query = event.queryStringParameters?.query || '';
  const key = process.env.PEXELS_API_KEY;
  if (!key) return { statusCode: 500, body: JSON.stringify({ error: 'missing key' }) };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const r = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: key }, signal: controller.signal }
    );
    clearTimeout(timer);
    const data = await r.json();
    return {
      statusCode: r.status,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=86400' },
      body: JSON.stringify(data),
    };
  } catch {
    clearTimeout(timer);
    return { statusCode: 504, body: JSON.stringify({ error: 'timeout' }) };
  }
};
