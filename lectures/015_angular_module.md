# Angular Module
เป็นโครงสร้างพื้นฐานของ angular ที่จัดกลุ่มของชุดคำสั่งที่เกี่ยวข้องกัน เข้ามาไว้ด้วยกัน เช่น Component, Directive, Pipe, Service, Routing

*เปรียบเสมือนแผงควบคุมของฟิเจอร์นั้น ๆ*

### โดยโมดูลถูกแบ่งออกเป็น 3 ประเภทดังนี้
1. **Root Module** เป็นจุดเริ่มต้นของแอพพลิเคชัน
2. **Feature Module** เป็นโมดูลสำหรับแต่ละฟิเจอร์ เช่น OrderModule, ProductModule
3. **Shared Module** เป็นโมดูลที่ใช้จัดเก็บฟิเจอร์ที่ใช้ร่วมกันทั้งระบบ เช่น ButtonComponent, LoadingSpinnerComponent, Shared Pipes

### โครงสร้างของ NgModule
    @NgModule({
        declarations: [],
        imports: [],
        exports: [],
        providers: [],
        bootstrap: []
    })
    export class ExampleModule {}

**คำอธิบาย**
1. **declarations** ประกาศ component, directive, pipe ที่เป็นของ module นี้
2. **imports** ประกาศโมดูลที่คอมโพเนนท์ด้านในต้องการจะใช้ เช่น CommonModule, FormsModule
3. **exports** สิ่งที่ต้องการส่งออกให้โมดูลอื่นสามารถนำไปใช้ได้
4. **providers** ประกาศ service ที่จะถูกสร้างในรูปแบบ single instant ในโมดูลนี้
4. **bootstrap** คอมโพเนนท์ที่ต้องการใช้เป็นจุดเริ่มต้นของแอพพลิเคชัน (เฉพาะ Root Module)

