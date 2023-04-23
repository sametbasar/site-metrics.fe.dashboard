import bcrypt from 'bcrypt';

export async function passwordGenerator(pass: string): Promise<string> {
  try {
    return await bcrypt.hash(pass, 10);
  } catch (e) {
    console.log(e);
    return pass;
  }
}

export async function comparePassword(plaintextPassword: string, hash: string): Promise<boolean> {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}
