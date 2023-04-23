import { NextRequest } from 'next/server';

import { checkEmailExist } from '@/services/user';
import { responseJSON } from '@/utils/services/response';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await checkEmailExist(body.email);
  return responseJSON<boolean>({ data, status: data ? 200 : 500, success: data ? true : false, message: '' });
}
