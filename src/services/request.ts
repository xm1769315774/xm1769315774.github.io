interface RequestOptions extends RequestInit {
  timeout?: number;
}

export class RequestError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'RequestError';
  }
}

export const request = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
  const { timeout = 5000, ...fetchOptions } = options;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }

    throw new RequestError(
      '请求失败',
      response.status,
      response.status === 404 ? '资源不存在' : response.statusText
    );
  } catch (error) {
    if (error instanceof RequestError) {
      throw error;
    }
    if (error.name === 'AbortError') {
      throw new RequestError('请求超时');
    }
    throw new RequestError(error.message || '网络请求失败');
  }
};