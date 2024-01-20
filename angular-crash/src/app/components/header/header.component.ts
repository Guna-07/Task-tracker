import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask: boolean  = false;
  subscription!: Subscription;
  constructor(private uiService:UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {//life cycle method used to initilize the code
      
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
