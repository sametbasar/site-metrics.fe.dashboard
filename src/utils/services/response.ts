export interface IResponse<T> {
  data: T;
  success: boolean;
  message: string;
  status: number;
}

export function responseJSON<T>(response: IResponse<T>) {
  return new Response(JSON.stringify({ data: response.data, success: response.success, message: response.message }), {
    headers: {
      'content-type': 'application/json',
    },
    status: response.status,
  });
}
