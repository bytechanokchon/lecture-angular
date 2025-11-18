import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { DatePipe } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [Tasks, Task, NewTask],
    exports: [Tasks, Task, NewTask],
    imports: [DatePipe, SharedModule, FormsModule]
})
export class TasksModule {}