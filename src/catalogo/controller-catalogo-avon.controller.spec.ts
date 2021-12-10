import { Test, TestingModule } from '@nestjs/testing';
import { ControllerCatalogoAvonController } from './controller-catalogo-avon.controller';

describe('ControllerCatalogoAvonController', () => {
  let controller: ControllerCatalogoAvonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerCatalogoAvonController],
    }).compile();

    controller = module.get<ControllerCatalogoAvonController>(ControllerCatalogoAvonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
