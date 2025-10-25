# Component
    เป็นชิ้นส่วนต่าง ๆ ของ user interface
    โดยในการสร้าง angular application เราจะนำชิ้นส่วนต่าง ๆ ของ uer interface มาประกอบเข้าด้วยกัน

    ทุก angular application เริ่มต้นด้วย root component

## ตัวอย่าง
เรามี component ใหญ่ 1 ตัว และด้านในจะจัดเก็บไว้อีกหลาย component เช่น
- App
    - Header
    - Navbar
    - Main
        - Cover
        - Content
        - Subscribe
    - Footer
    - Sidebar
        - Popular Course 1
        - Popular Course 2
        - Popular Course 3

## วิธีสร้าง component
1. สร้าง typescript class และทำการ export
2. สร้าง decorate @Component ไว้ด้านบนของ class
3. นำ class ไปใช้งาน