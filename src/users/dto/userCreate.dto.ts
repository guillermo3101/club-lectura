import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsNotEmpty, IsInt } from "class-validator";
import { UserTypes } from "src/user-types/userTypes.entity";

export class UserTypesDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  name: string;
}

export class UserCreate {
  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  userName: string

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  password: string

  @ApiProperty({ type: UserTypesDto }) // Especifica el tipo del objeto UserTypesDto
  @IsNotEmpty()
  userTypes: UserTypesDto;
}

export class UserUpdate {
  
  @ApiProperty()
  @IsInt()
  id: number; 
  
  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  userName: string

 
  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  password: string

  @ApiProperty({ type: UserTypesDto }) // Especifica el tipo del objeto UserTypesDto
  @IsNotEmpty()
  userTypes: UserTypesDto;

}
