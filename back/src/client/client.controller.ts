import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto, CreateClientResponseDto } from './dto/client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // GET route to get all clients
  @Get('/all')
  findAll(): Promise<CreateClientResponseDto[]> {
    return this.clientService.findAll();
  }
  // POST route to create a new client by passing the client data in the request body
  @Post()
  create(@Body() client: ClientDto): Promise<CreateClientResponseDto> {
    return this.clientService.create(client);
  }
}
