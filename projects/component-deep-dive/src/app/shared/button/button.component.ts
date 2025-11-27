import { Component } from '@angular/core';

/*
  selector: 'button[appButton]'
  หมายถึง element <button /> ใด ๆ ก็ตามที่มี attribute [appButton] 
  จะถูกควบคุมด้วย element นี้ทั้งหมด
*/
@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
