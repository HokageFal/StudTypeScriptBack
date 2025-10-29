import { compare, hash } from 'bcrypt';

const BCRYPT_ROUNDS = 10;

export class PasswordHelper {
  static async hash(password: string): Promise<string> {
    return hash(password, BCRYPT_ROUNDS);
  }

  static async compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
