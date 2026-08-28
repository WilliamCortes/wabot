const EDGE_URL = () => {
  const u = process.env.WB_EDGE_URL;
  if (!u) throw new Error("WB_EDGE_URL no configurado");
  return u.replace(/\/$/, "");
};

export async function edgeFetch(
  path: string,
  init: { method?: string; body?: string; searchParams?: string } = {}
): Promise<Response> {
  const secret = process.env.WB_INTERNAL_SECRET;
  if (!secret) throw new Error("WB_INTERNAL_SECRET no configurado");
  const qs = init.searchParams ? `?${init.searchParams}` : "";
  return fetch(`${EDGE_URL()}/${path.replace(/^\//, "")}${qs}`, {
    method: init.method ?? "GET",
    headers: {
      "content-type": "application/json",
      "x-wb-secret": secret,
    },
    body: init.body,
    cache: "no-store",
  });
}
