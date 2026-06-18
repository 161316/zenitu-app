const getBaseUrl = () => `https://${process.env["EXPO_PUBLIC_DOMAIN"]}`;

export async function apiFetch(path: string, options?: RequestInit): Promise<Response> {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
  });
  return res;
}
