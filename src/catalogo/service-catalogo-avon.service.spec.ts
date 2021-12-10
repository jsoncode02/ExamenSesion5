import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCatalogoAvonService } from './service-catalogo-avon.service';

describe('ServiceCatalogoAvonService', () => {
  let service: ServiceCatalogoAvonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceCatalogoAvonService],
    }).compile();

    service = module.get<ServiceCatalogoAvonService>(ServiceCatalogoAvonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
