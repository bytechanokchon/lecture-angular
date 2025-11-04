# Output
ใช้สำหรับการให้ parent component สามารถส่งฟังก์ชันเข้ามาดักจับเหตุการณ์ที่เกิดขึ้นได้ ตามที่เรากำหนด เช่น

    ในส่วนของ <button></button> จะมี output ที่ชื่อว่า click
    โดยเราสามารถส่ง function เข้าไปได้ เมื่อเกิดเหตุการณ์ผู้ใช้คลิกที่ปุ่ม

    <button (click)="onUserClick()">click me!</button>

## EventEmitter
ใช่คู่กับ output ทำให้เราสามารถส่งออกเหตุการที่เกิดขึ้นออกไม่ได้

## $event
เป็นตัวแปรที่มีอยู่แล้วในระบบ angular ใช้สำหรับรับข้อมูลที่ถูกส่งออกมาจาก event emitter

## signal output

    userId: string = '1';
    select = output<string>(); // ตัวแปรนี้จะเป็น output โดยใช้ signal

    onSelectUser() {
        this.select.emit(this.userId);
    }
