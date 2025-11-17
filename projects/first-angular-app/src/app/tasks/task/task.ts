import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITaskModel } from './task.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITaskModel;
  @Output("complete") completeEvent = new EventEmitter<string>();

  onCompleteTask(): void {
    this.completeEvent.emit(this.task.id);
  }
}
