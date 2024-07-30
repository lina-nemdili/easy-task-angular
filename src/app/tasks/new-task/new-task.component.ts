import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true})userId!: string;
@Output() close  =new EventEmitter<void>();


entredTitle='';
entredSummary='';
entredDate='';

private taskService=inject(TasksService);
  onCancel(){
this.close.emit();
  }
  onSubmit(){
this.taskService.addTask({
  title:this.entredTitle,
  summary:this.entredSummary,
  date:this.entredDate
},this.userId);
this.close.emit();
  }

}
