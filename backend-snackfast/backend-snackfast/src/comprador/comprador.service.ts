import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comprador } from './comprador.entity';

@Injectable()
export class CompradorService {
  constructor(
    @InjectRepository(Comprador)
    private readonly compradorRepository: Repository<Comprador>,
  ) {}

  findAll(): Promise<Comprador[]> {
    return this.compradorRepository.find();
  }

  findOne(id: number): Promise<Comprador> {
    return this.compradorRepository.findOneBy({ idComprador: id });
  }

  create(comprador: Comprador): Promise<Comprador> {
    return this.compradorRepository.save(comprador);
  }

  async update(id: number, comprador: Comprador): Promise<Comprador> {
    await this.compradorRepository.update(id, comprador);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.compradorRepository.delete(id);
  }
}
