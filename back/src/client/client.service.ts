import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClientDto, CreateClientResponseDto } from './dto/client.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ClientService {
  private prisma = new PrismaClient();
  async findClientbyEmail(email: string): Promise<CreateClientResponseDto> {
    const client = await this.prisma.client.findUnique({
      where: {
        email,
      },
    });
    await this.prisma.$disconnect();
    return client;
  }
  async findClientbyCpf(cpf: string): Promise<CreateClientResponseDto> {
    const client = await this.prisma.client.findUnique({
      where: {
        cpf,
      },
    });
    await this.prisma.$disconnect();
    return client;
  }
  async create(client: ClientDto): Promise<CreateClientResponseDto> {
    try {
      if (await this.findClientbyEmail(client.email)) {
        throw new HttpException(
          'Client with this email already exists',
          HttpStatus.CONFLICT,
        );
      }
      if (await this.findClientbyCpf(client.cpf)) {
        throw new HttpException(
          'Client with this cpf already exists',
          HttpStatus.CONFLICT,
        );
      }
      const newClient = await this.prisma.client.create({
        data: {
          name: client.name,
          cpf: client.cpf,
          email: client.email,
          color: client.favoriteColor,
          note: client.note,
        },
      });
      return newClient;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Error creating client',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
