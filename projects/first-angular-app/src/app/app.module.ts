import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from './app';
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { Card } from "./shared/card/card";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [App, Header, User, Tasks, Task, NewTask, Card],
    imports: [BrowserModule, FormsModule, DatePipe],
    bootstrap: [App]
})
export class AppModule {}