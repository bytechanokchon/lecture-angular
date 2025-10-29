# view template of component
โดยปกติแล้ว component ที่เราสร้าง จะถูกนำไปใช้ผ่านชื่อที่เราตั้งไว้ใน selector เช่น
    
    @Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
    })

เมื่อเราต้องการเรียกใช้ component นี้ใน html อื่น เราสามารถเรียกใช้ได้ดังนี้

    <app-header />

## view template
เป็นสิ่งที่บอกว่า angular จะต้อง render หน้าตาของ component นั้นอย่างไร