import { Controller, Get, Post, Patch, Delete, Param, Query, Body, HttpCode, NotFoundException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get('search')
  findByStatus(@Query('status') status: string): Task[] {
    if (!status) return [];
    return this.tasksService.findByStatus(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task {
    const task = this.tasksService.findOne(id);
    if (!task) throw new NotFoundException(`Task #${id} not found`);
    return task;
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateTaskDto): Task {
    return this.tasksService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto): Task {
    const updated = this.tasksService.update(id, dto);
    if (!updated) throw new NotFoundException(`Task #${id} not found`);
    return updated;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    const removed = this.tasksService.remove(id);
    if (!removed) throw new NotFoundException(`Task #${id} not found`);
  }
}
