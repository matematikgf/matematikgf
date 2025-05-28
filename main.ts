//main.ts
Deno.serve( (_req) => {
  return new Response("Hej fra Deno!", {
    headers: { "Content-Type": "text/plain" },
  });
});
