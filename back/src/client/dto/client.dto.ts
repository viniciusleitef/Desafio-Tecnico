import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
} from 'class-validator';

export class ClientDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 80)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
    message: 'cpf must be a valid format (XXX.XXX.XXX-XX)',
  })
  cpf: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  favoriteColor: string;

  @IsString()
  note: string;
}
