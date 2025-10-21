# Bootstrapping Angular Application
    เป็นกระบวนการเริ่มต้น initializing และ loading angular application
    ตัวอย่างกระบวนการ
        1. เริ่มต้น angular project
        2. โหลด index.html
        3. โหลด angular.json
        4. โหลด main.ts (app.module ถูกโหลดที่นี่)

## app-root
    ทำให้ angular รู้ว่าจะต้องทำการโหลดอะไรบ้างเมื่องแอพพลิเคชันเริ่มทำงาน

## webpack
    เป็นตัวรวมโมดูลที่ angular ใช้ โดยมันจะนำ javascript file ทั้งโปรเจคเรามารวมเข้าไว้ด้วยกันเป็นไฟล์เดียว