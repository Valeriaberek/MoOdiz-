import { Injectable } from '@nestjs/common';

@Injectable()
export class ChildrenService {

  findAll() {
    return [
      { id: 1, name: 'Lina', age: 4 },
      { id: 2, name: 'Noah', age: 5 },
    ];
  }

}