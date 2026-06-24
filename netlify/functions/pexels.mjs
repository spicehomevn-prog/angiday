export default async (req) => {
  const url = new URL(req.url);
  const query = url.searchParams.get("query") || "";
  const key = process.env.PEXELS_API_KEY;
  if (!key) return new Response(JSON.stringify({ error: "missing key" }), {
    status: 500, headers: { "Content-Type": "application/json" }
  });
  const r = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=3`,
    { headers: { Authorization: key } }
  );
  const data = await r.json();
  return new Response(JSON.stringify(data), {
    status: r.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" }
  });
};
