import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Buy groceries',
      description: 'Milk, Bread, Eggs',
      status: 'open',
      priority: 'low',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Do the laundry',
      description: 'Wash and dry clothes',
      status: 'in_progress',
      priority: 'medium',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Finish project',
      description: 'Complete the NestJS assignment',
      status: 'done',
      priority: 'high',
      createdAt: new Date().toISOString(),
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findByStatus(status: string): Task[] {
    return this.tasks.filter((t) => t.status === status);
  }

  findOne(id: string): Task | null {
    return this.tasks.find((t) => t.id === id) ?? null;
  }

  create(dto: CreateTaskDto): Task {
    const id = Math.random().toString(36).substring(2, 9);
    const task: Task = {
      id,
      title: dto.title,
      description: dto.description ?? '',
      status: 'open',
      priority: dto.priority,
      createdAt: new Date().toISOString(),
    };
    this.tasks.push(task);
    return task;
  }

  update(id: string, dto: UpdateTaskDto): Task | null {
    const task = this.findOne(id);
    if (!task) return null;
    if (dto.title !== undefined) task.title = dto.title;
    if (dto.description !== undefined) task.description = dto.description;
    if (dto.priority !== undefined) task.priority = dto.priority as any;
    if (dto.status !== undefined) task.status = dto.status as any;
    return task;
  }

  remove(id: string): boolean {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
}
