export async function GET() {
  return new Response(JSON.stringify({ name: 'João', age: 25 }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
