import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RandomService } from './random/random.service';
import { ConfigurationService } from './configuration/configuration.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private randomService: RandomService,
    private configService: ConfigurationService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('environment')
  getEnvironment(): string {
    return this.configService.getValue('environment');
  }

  @Get('lancer')
  lancer(): number {
    return this.randomService.getLancer();
  }
}
