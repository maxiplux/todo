import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete?: boolean;






  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
