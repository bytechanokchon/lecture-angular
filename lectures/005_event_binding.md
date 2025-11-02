# Event Binding
เป็นการผูกเหตุการที่เกิดขึ้นใน .html เข้ากับ function ใน .ts โดยเราสามารถใช้สัญลักษณ์ event binding () ในการผูก
เช่น
    
    [.ts]
    onUserSelect(): void {
        console.log('click');
    }

    [.html]
    <button (click)="onUserSelect()">user 1</button>

*การตั้งชื่อให้ function ที่จะนำมาผูกกับ event ควรขึ้นต้นด้วย on เสมอ*