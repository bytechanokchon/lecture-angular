import { Component, Input } from '@angular/core';
import { ITaskModel } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import TasksService from '../task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITaskModel;
  // @Output("complete") completeEvent = new EventEmitter<string>();
  
  private tasksService!: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
    // this.completeEvent.emit(this.task.id);
  }
}
