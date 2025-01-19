import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto, CreateClientResponseDto } from './dto/client.dto';

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
  create(@Body() client: ClientDto): Promise<CreateClientResponseDto> {
    return this.clientService.create(client);
  }
}
