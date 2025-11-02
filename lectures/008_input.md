# input
เราสามารถรับข้อมูลจาก component อื่น ๆ ได้โดยการาใช้งาน input คู่กับ property เช่น

    @Input('avatar') avatar: string;

เราสามารถเติมเครื่องหมาย ! เพื่อบอก compiler ว่า property นี้จะไม่เป็น null แน่นอน เช่น

    @Input('avatar') avatar!: string;

การส่งข้อมูลจาก component อื่นเข้ามา

    <app-user [avatar]="user-black.png" />