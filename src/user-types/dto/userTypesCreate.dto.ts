import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsNotEmpty, IsInt } from "class-validator";

export class UserTypesCreate {
  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  name: string
}

export class UserTypesUpdate {

  @ApiProperty()
  @IsInt()
  @MaxLength(250)
  @IsNotEmpty()
  id: number

  @ApiProperty()
  @IsString()
  @MaxLength(250)
  @IsNotEmpty()
  name: string
}