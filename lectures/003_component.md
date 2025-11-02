# Component

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })

แต่ละ field คือ
- selector: ใช้สำหรับระบุชื่อที่ใช้ในการเรียกใช้งาน component นี้
- standalone:
- imports:
- templateUrl: ระบุส่วนแสดงผลของ component
- styleUrl: ระบุ style sheet ของ component

## ส่วนประกอบของ component
1. .ts จัดเก็บการประมวลผลของ component
2. .html จัดเก็บการแสดงผลของ component
3. .css จัดเก็บ style sheet ของ component
4. .spec.ts จัดเก็บ unit test ของ component