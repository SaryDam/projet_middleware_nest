import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();

  private requestCounter = 0;
  private requestLancer: number = 0;

  use(req: Request, res: Response, next: NextFunction) {
    this.requestCounter++;
    if (req.route.path == '/lancer') {
      this.requestLancer++;
    }
    this.logNewRequestMade();
    next();
  }

  private logNewRequestMade(): void {
    this.logger.verbose(
      `New request! Request counter : ${this.requestCounter}`,
      this.constructor.name,
    );
    this.logger.verbose(
      `Nombre de lancer de dés : ${this.requestLancer}`,
      this.constructor.name,
    );
  }
}
