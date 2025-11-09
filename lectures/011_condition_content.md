## Condtion Content
เป็นการใส่เงื่อนไขในการแสดงผล โดยเรามักจะใช้เมื่อ **ต้องการให้ component แสดงเฉพาะเมื่อเกิดสถาณการณ์ที่เรากำหนด**

ตัวอย่าง เราต้องการแสดง component เมื่อ user ที่ถูกเลือกมีค่า

    @if (selectedUser) {
        <app-tasks [name]="selectedUser ? selectedUser.name : ''"></app-tasks>
    }

ในบางกรณีอาจจำเป็นต้องแสดงผล หากเงื่อนไขที่กำหนดเป็น false

    @if (selectedUser) {
        <app-tasks [name]="selectedUser ? selectedUser.name : ''"></app-tasks>
    } @else {
        <p>Plase select user</p>
    }

### *ngIf
ใช้ได้ตั้งแต่ angular version 17 ขึ้นไป โดยสามารถเขียนคำสั่งลงไปที่ element ได้เลย
    <app-tasks *ngIf="selectedUser" [name]="selectedUser.name"></app-tasks>

โดยใน .component.ts จะต้องทำการ import NgFor มาด้วย

    import { NgFor, NgIf } from "@angular/common";
    @Component({
        selector: 'app-root',
        imports: [Header, User, Tasks, NgFor, NgIf],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })

ตัวอย่างแบบเต็ม

    <ng-template *ngIf="selectedUser; else fallback">
        <app-tasks [name]="selectedUser.name"></app-tasks>
    </ng-template>
    <ng-template #fallback>
        <p id="fallback">Select a user to see their tasks!</p> 
    </ng-template>