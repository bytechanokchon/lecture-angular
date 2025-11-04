# Input
เราสามารถรับข้อมูลจาก component อื่น ๆ ได้โดยการาใช้งาน input คู่กับ property เช่น

    @Input('avatar') avatar: string;

เราสามารถเติมเครื่องหมาย ! เพื่อบอก compiler ว่า property นี้จะไม่เป็น null แน่นอน เช่น

    @Input('avatar') avatar!: string;

การส่งข้อมูลจาก component อื่นเข้ามา

    <app-user [avatar]="user-black.png" />

เราสามารถตั้งค่าให้กับ input ได้ เช่น

    @Input({
        required: true
    }) avatar!: string;

*required เป็นการบังคับให้ component ที่เรียกใช้งาน จะค้องระบุ property นี้เข้ามาด้วย*

# input
เป็นการรับข้อมูลจาก component อื่นเข้ามา พร้อมกับให้ข้อมูลนั้นใช้งาน singnal ไปด้วย เช่น

    avatar = input('');

หากต้องหารให้ property นั้น required มาจากข้างนอก สามารถทำได้ดังนี้

    name = input.required<string>();

การใช้งาน input จะเป็น read-only

*การใช้งาน signal จะทำให้แอพพลิเคชันมีประสิทธิภาพมากขึ้น เพราะมันจะอัพเดทแค่ส่วนที่ได้รับสัญญาณว่าจะต้องอัพเดทเท่านั้น ไม่จำเป็นต้องอัพเดททุกที่พร้อมกัน*