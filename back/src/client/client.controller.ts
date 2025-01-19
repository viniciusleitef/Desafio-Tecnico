import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientDto } from './dto/client.dto';
import { ClientService } from './client.service';
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get()
  findAll(): ClientDto[] {
    return [
      {
        name: 'John Doe',
        cpf: '12345678901',
        email: 'john.doe@example.com',
        favoriteColor: 'blue',
        note: 'Hello, I am John Doe.',
      },
    ];
  }
  @Post()
  create(@Body() client: ClientDto): ClientDto {
    return this.clientService.create(client);
  }
}
