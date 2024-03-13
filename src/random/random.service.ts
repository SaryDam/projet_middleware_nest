import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService {
  getLancer(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
