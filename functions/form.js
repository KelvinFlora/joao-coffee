export async function onRequestPost({ request }) {
  const contentType = request.headers.get("content-type");

  if (contentType.includes("application/json")) {
    const body = await request.json();

    if (!body.age) {
      return new Response(JSON.stringify({ message: "Age is required" }));
    }

    return new Response(JSON.stringify(body));
  }

  return new Response({ message: "Invalid Body" }, { status: 400 });
}
