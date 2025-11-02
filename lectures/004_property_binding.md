# Property Binding
เป็นการนำข้อมูลที่อยู่ส่วนของการประมวลผล (.ts) มาแสดงผลในหน้าจอ (.html) โดยเราสามารถทำได้ผ่านสัญญลักษณ์ property binding ({{ property_name }})
เช่น

    <p>{{ user.username }}</p>

ในการนำข้อมูลเข้าไปใส่ใน property ของ element tag เราสามารถใส่ [property_tag_name] ได้
เช่น

    <img [src]="user.photoUrl" />
