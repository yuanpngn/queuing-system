export async function GET() {
	return new Response(JSON.stringify({ ok: true, users: [] }), {
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST(request: Request) {
	return new Response(JSON.stringify({ ok: true }), {
		headers: { "Content-Type": "application/json" },
	});
}
