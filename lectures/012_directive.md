# Directive
เป็นคุณสมบัติพิเศษใน angular ซึ่งทำให้เราสามารถปรับเปลี่ยนพฤติกรรมของ dom ได้ โดยสามารถ เพิ่มฟิเจอร์ ปรับแต่งลักษณะการทำงานของ element, component หรือ manipulate dom โดยเป็นระบบของ angular

## ประเภทของ directive
### Component
component ที่เราสร้างขึ้น เป็นหนึ่งในประเภทของ directive ที่มี template ของตัวเอง ทำให้เราสามารถปรับแต่ง dom ตามเงื่อนไขที่เรากำหนดขึ้นได้

ตัวอย่าง

    @Component({
      selector: 'app-hello',
      template: `<h1>Hello</h1>`
    })
    export class HelloComponent {}

## Structural
เป็นประเภทที่มีเงื่อนไขให้เราปรับโครงสร้างของ dom ได้ แต่ไมีมี template เป็นของตัวเอง เช่น
- *ngIf
- *ngFor
- *ngSwitch

ตัวอย่าง

    <div *ngIf="isLoggedIn">Welcome!</div>

## Attribute Directive 
เป็นการปรับแต่งพฤติกรรมของ element เช่น 
- ngClass
- ngStyle
- ngModel

ตัวอย่าง

    @Directive({
      selector: '[appHighlight]'
    })
    export class HighlightDirective {
      constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
      }
    }

    <p appHighlight>ข้อความนี้จะมีพื้นหลังสีเหลือง</p>

## Two-way Binding
เป็นหนนึ่งใน directive พิเศษของ angular โดยจะใช้ในการผูก event และ property เข้าด้วยกัน
ทำให้เวลารับข้อมูลจาก tag input สามารถทำได้ง่าย

ตัวอย่าง

    <input type="text" id="title" name="title" [(ngModel)]="title" />

ถ้าหากไม่ใช้ two-way binding จะต้องทำแบบนี้ (แยกการผูก property และ event ออกจากกัน)

    <input type="text" id="title" name="title" [value]="title" (input)="title = $event.target.value" />