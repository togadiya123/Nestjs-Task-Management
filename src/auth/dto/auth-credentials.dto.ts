import { isString, maxLength, minLength } from 'class-validator';

export class AuthCredentialsDto {
  // @isString()
  // @minLength(4)
  // @maxLength(20)
  username: string;

  // @isString()
  // @minLength(8)
  // @maxLength(32)
  password: string;
}
