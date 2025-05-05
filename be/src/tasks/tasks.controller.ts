import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('api')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('tasks')
  async getAlltasks() {
    return this.tasksService.getAlltasks();
  }

  @Post('tasks')
  async createTask(@Body() task) {
    this.tasksService.createTask(task);

    return { success: true };
  }

  @Put('tasks/:id')
  async updateTask(@Param('id') id: number, @Body() task) {
    this.tasksService.updateTask(id, task);

    return { success: true };
  }

  @Delete('tasks/:id')
  async deleteTask(@Param('id') id: number) {
    this.tasksService.deleteTask(id);

    return { success: true };
  }
}
