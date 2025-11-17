import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { INewTaskModel } from './new-task/new-tasks.model';
import TasksService from './task.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUserId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  private taskService!: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.selectedUserId);
  }

  // onCompleteTask(id: string) {
  //   this.taskService.removeTask(id);
  // }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }

  onAddTasks(taskData: INewTaskModel): void {
    this.taskService.addTask(taskData, this.selectedUserId);
    this.isAddingTask = false;
  }
}
