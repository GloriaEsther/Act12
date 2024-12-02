import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from './vendedor.entity';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly vendedorRepository: Repository<Vendedor>,
  ) {}

  findAll(): Promise<Vendedor[]> {
    return this.vendedorRepository.find();
  }

  findOne(id: number): Promise<Vendedor> {
    return this.vendedorRepository.findOneBy({ idVendedor: id });
  }

  create(vendedor: Vendedor): Promise<Vendedor> {
    return this.vendedorRepository.save(vendedor);
  }

  async update(id: number, vendedor: Vendedor): Promise<Vendedor> {
    await this.vendedorRepository.update(id, vendedor);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vendedorRepository.delete(id);
  }
}
