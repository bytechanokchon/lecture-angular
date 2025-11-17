import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  // ระบุ อนรก เพื่อบอกว่า event นี้เมือเกิดขึ้น จะไม่มีการส่งข้อมูลอะไร
  @Output("cancel") cancelEvent = new EventEmitter<void>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancel(): void {
    this.cancelEvent.emit();
  }
}
