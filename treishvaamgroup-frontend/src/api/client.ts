// Enterprise API Client for treishvaamgroup.com
// Handles Tenant Context (treishvaam_corporate) and Error Logging

const TENANT_ID = 'treishvaam_corporate';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

interface ApiRequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Constructs headers with the critical X-Tenant-ID
   */
  private buildHeaders(customHeaders?: HeadersInit): HeadersInit {
    return {
      'Content-Type': 'application/json',
      'X-Tenant-ID': TENANT_ID, // Connects to Backend TenantInterceptor
      ...customHeaders,
    };
  }

  /**
   * Builds the URL with query params
   */
  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
    let url = `${this.baseUrl}${endpoint}`;
    if (params) {
      const qs = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, String(value)])
      ).toString();
      url += `?${qs}`;
    }
    return url;
  }

  /**
   * Generic fetch wrapper
   */
  private async request<T>(endpoint: string, config: ApiRequestConfig): Promise<T> {
    const url = this.buildUrl(endpoint, config.params);
    const headers = this.buildHeaders(config.headers);

    try {
      const response = await fetch(url, { ...config, headers });

      if (!response.ok) {
        // Handle 401/403 specifically if needed, or throw generic error
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.message || `API Error: ${response.status}`);
      }

      if (response.status === 204) return {} as T;
      return await response.json();
    } catch (error) {
      console.error(`[API] Request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Public Methods
  public get<T>(endpoint: string, params?: Record<string, string | number | boolean>) {
    return this.request<T>(endpoint, { method: 'GET', params });
  }

  public post<T>(endpoint: string, body: any) {
    return this.request<T>(endpoint, { method: 'POST', body: JSON.stringify(body) });
  }

  public put<T>(endpoint: string, body: any) {
    return this.request<T>(endpoint, { method: 'PUT', body: JSON.stringify(body) });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;