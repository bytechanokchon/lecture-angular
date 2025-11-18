import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INewTaskModel } from './new-tasks.model';
import TasksService from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string;

  // ระบุ void เพื่อบอกว่า event นี้เมือเกิดขึ้น จะไม่มีการส่งข้อมูลอะไร
  @Output("close") closeEvent = new EventEmitter<void>();
  @Output('add') addEvent = new EventEmitter<INewTaskModel>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  private tasksService!: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
    
  }

  onCancel(): void {
    this.closeEvent.emit();
  }

  onSubmit(): void {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
  }
}
