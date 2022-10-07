import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nomeHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nomeBSM')
  getBSM():string{
    return this.appService.getBSM();
  }
@Get('nomeOS')
getObjSemanal():string{
  return this.appService.getObjSemanal();
}
}
