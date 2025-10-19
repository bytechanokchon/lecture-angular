# โครงสร้างโปรเจค Angular

## โครงสร้างโปรเจคแบบย่อ
- node_modules จัดเก็บชุดคำสั่ง javascript ที่ถูกติดตั้งจากภายนอก
- package.json จัดเก็บ configuration ของโปรเจค
- src เป็น folder ที่เราจะเก็บชุดคำสั่งของโปรเจคเราไว้ทั้งหมด
    - app จัดเก็บ component, service, module ที่เราสร้างขึ้น
        - app.module.ts (ทุกแอพจะมีเพียง 1 ไฟล์)
    - main.ts เป็นจุดเริ่มต้นของการรัน angular application
    - styles.css เป็น css กลางที่จะถูกใช้ในทุก component
- public จัดเก็บ constant content ทั้งหมด เช่น รูปภาพ ไอคอน
- .editorconfig ตั้งค่าการทำงานสำหรับ team
- .gitignore ระบุว่ามีไฟล์แบบไหนบ้างที่จะไม่นำขึ้นไปบน git repository
- angular.json จัดเก็บการตั้งค่าทั้งหมดของ angular project
- package-lock.json บันทึกเวอร์ชันที่แน่นอนของทุก dependencies
- tsconfig.json จัดเก็บการตั้งค่า typescript


## .spec.ts
เป็นไฟล์ที่ใช้สำหรับการเขียน unit test

## .component.ts
    เป็น typescript file ใช้สำหรับเขียน logic ควบคุม UI
    โดยไฟล์เหล่านี้ มักจะขึ้นตอนด้วย declorator นี้ ไว้บน class ของ component

    @Component({
        selector: 'app-root',
        templateUrl: './xxx.component.html',
        styleUrls: ['./xxx.component.css]
    })

    โดยส่วนประกอยของ @Component มีดังนี้
        1. selector 
        2. templateUrl  ที่อยู่ของ html file ที่ component นี้กำลังทำงานด้วย
        3. styleUrls    ที่อยู่ของ css file ที่ใช้ใน component นี้

## .component.html


## .component.css

## โครงสร้างโปรเจค
- node_moduls จัดเก็บชุดคำสั่ง javascript ที่ถูกติดตั้งจากภายนอก (npm install) โดยปกติแล้ว folder นี้จะไม่ถูกนำไป deploy และ push ขึ้น git
- package.json เป็นไฟล์ configuration ของโปรเจค โดนจัดเก็บว่า
    - โปรเจคนี้ สามารถใช้คำสั่งอะไรใน command ได้บ้าง
    - มี dependencies อะไรบ้างที่ถูกนำเข้ามาใช้จากภายนอก
    - ชื่อของโปรเจค
    - version ของโปรเจค
- src เป็น folder ที่เราจะเก็บชุดคำสั่งของโปรเจคเราไว้ทั้งหมด (component, service, etc)
- src/app จัดเก็บ component, service, module ที่เราสร้างขึ้น
- .editorconfig ตั้งค่าการทำงานสำหรับ team (ทุกคนที่ทำงาน จะต้องทำตาม standard ในไฟล์นี้)
- angular.json จัดเก็บการตั้งค่าทั้งหมดของ angular project
- package-lock.json บันทึกเวอร์ชันที่แน่นอนของทุก dependencies