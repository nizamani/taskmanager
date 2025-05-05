
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Tasks } from './task.entity';
import { DateTime } from 'luxon';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async getAlltasks() {
    return this.tasksRepository.find();
  }

  async createTask(task: DeepPartial<Tasks>) {
    const taskData = task;
    const now = DateTime.local().toISO();

    // append createdAt, this is current date time in ISO format
    taskData.createdat = now;

    return this.tasksRepository.save(task);
  }


  async updateTask(id: number, task: DeepPartial<Tasks>) {
    return await this.tasksRepository.update(
        id,
        task
      );
  }

  async deleteTask(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
