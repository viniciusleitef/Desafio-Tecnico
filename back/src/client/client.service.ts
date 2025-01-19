import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClientDto } from './dto/client.dto';
@Injectable()
export class ClientService {
  private fakeDb: ClientDto[] = [];
  create(client: ClientDto): ClientDto {
    const existsClient = this.fakeDb.find(
      (existingClient) => existingClient.email === client.email,
    );
    if (existsClient) {
      throw new HttpException(
        'Client with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newClient = { ...client, id: this.fakeDb.length + 1 };
    this.fakeDb.push(newClient);
    return newClient;
  }
}
