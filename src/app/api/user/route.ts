import type { NextRequest } from 'next/server';

import { addUser } from '@/services/user';
import { responseJSON } from '@/utils/services/response';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await addUser(body);
  return responseJSON<string | null>({ data, status: data ? 200 : 404, success: data ? true : false, message: '' });
}
