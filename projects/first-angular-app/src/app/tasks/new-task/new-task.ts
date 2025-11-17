import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  // ระบุ อนรก เพื่อบอกว่า event นี้เมือเกิดขึ้น จะไม่มีการส่งข้อมูลอะไร
  @Output("cancel") cancelEvent = new EventEmitter<void>();

  onCancel(): void {
    this.cancelEvent.emit();
  }
}
