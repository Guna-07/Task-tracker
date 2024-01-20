import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DbtasksService } from '../../services/dbtasks.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService,private dbtaskService: DbtasksService) {}

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    this.dbtaskService.getTasks().subscribe(
      data => {
        this.tasks = data;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    )
  }

  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id 
      !== task.id))
      );
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
