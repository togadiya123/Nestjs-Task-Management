import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, {
    message:
      'Password must be 8 character long and contains at least one special character (!,@,#,$,&,*), one numeral, one latter in upper case and one latte in lower case.',
  })
  password: string;
}
