import { createClient } from "jsr:@supabase/supabase-js@2";

Deno.serve(async () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return new Response(
      JSON.stringify({ ok: false, error: "Missing environment variables" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { error } = await supabase.rpc("keepalive_ping");

  if (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error.message }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      message: "keepalive pinged",
      timestamp: new Date().toISOString(),
    }),
    { headers: { "content-type": "application/json" } }
  );
});