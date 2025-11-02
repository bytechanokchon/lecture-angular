# Project Structure

## tsconfig.app.json
    ใช้สำหรับตั้งค่า typescript

## tsconfig.json
    ใช้สำหรับตั้งค่า typescript

## tsconfig.spec.json
    ใช้สำหรับตั้งค่า typescript

## package-lock.json
    จัดเก็บ version ที่แน่นอนของ dependency ที่แอพพลิเคชันใช้

## package.json
    จัดเก็บการตั้งค่าของโปรเจคและ dependencies ทั้งหมดของแอพพลิเคชัน

## angular.json
    จัดเก็บการตั้งค่าของ angular application

## .editorconfig
    จัดเก็บกฏบางอย่างสำหรับการพัฒนาโปรแกรม เช่น ชุดคำสั่งควรเขียนด้วย format อะไร

## .gitignore
    ใช้สำหรับระบุว่า file, folder อะไรบ้างที่จะไม่นำขึ้น git

## ./src
    จัดเก็บชุเคำสั่งทั้งหมดของ angular application

## ./src/styles.css
    จัดเก็บ style sheet ที่ทุก component สามารถใช้งานได้

## ./src/index.html
    จัดเก็บ html หน้าหลักสำหรับแสดงผล component ต่าง ๆ

## ./src/main.ts
    เป็นไฟล์แรกของ project ที่จะถูกเรียกใช้งานเมื่อ angular applcation ถูกโหลด

## ./src/app
    โฟลเดอร์จัดเก็บ component