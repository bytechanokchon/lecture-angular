## Output list content
โดยปกติเราจะใช้ @for สำหรับการวนซ้ำเพื่อแสดงข้อมูลที่เป็น list ออกมา เช่น
    
    @for (user of users; tract user.id) {
        <p>{{ user.name }}</p>
    }

### track
angular จำเป็นต้องติดตาม item ที่ถูก loop ออกมาแสดงผลทุกตัว เพื่อดูว่าใน item นั้นมีกาเปลี่ยนแปรงหรือไม่ โดยทุกครั้งที่ item นั้นมีการอัพเดทข้อมูล angular จะทำการ re-render แค่ component ของ item นั้นใหม่ (จากเดิมจะ re-render ใหม่ทั้ง list)

โดยสิ่งที่ระบุให้กับ tract จะเป็น ID ของข้อมูลนั้น ๆ และควรเป็นข้อมูลที่ไม่ซ้ำกับข้อมูลอื่น ๆ (Unique)

### *ngFor
ใช้ได้ตั้งแต่ angular version 17 ขึ้นไป โดยสามารถเขียนคำสั่งลงไปที่ element ได้เลย

    <li *ngFor="let user of users">
        <p>{{ user.name }}</p>
    </li>

โดยใน .component.ts จะต้องทำการ import NgFor มาด้วย

    import { NgFor } from "@angular/common";
    @Component({
        selector: 'app-root',
        imports: [Header, User, Tasks, NgFor],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
    