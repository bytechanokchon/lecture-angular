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