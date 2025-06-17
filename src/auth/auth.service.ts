import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  testLogin(): string {
    return 'Auth Service OK';
  }
}
