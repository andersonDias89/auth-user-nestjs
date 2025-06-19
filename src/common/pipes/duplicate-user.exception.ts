// common/pipes/duplicate-user.exception.ts
import { BadRequestException } from '@nestjs/common';

export class DuplicateUserException extends BadRequestException {
  constructor(email: string) {
    super(`O e-mail "${email}" já existe no sistema`);
  }
}
