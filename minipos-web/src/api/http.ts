export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const getAuthToken = () => {
    return import.meta.env.VITE_API_TOKEN ?? localStorage.getItem("authToken") ?? undefined;
};

export async function http<T>(path: string, options?: RequestInit): Promise<T> {
    const token = getAuthToken();
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options?.headers as Record<string, string> | undefined),
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${API_URL}${path}`, {
        headers,
        ...options,
    });

    console.log("📡 Status:", res.status); // 👈 ver respuesta

    if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `HTTP ${res.status}`);
    }
    if (res.status === 204) return undefined as T;
    return res.json() as Promise<T>;
}