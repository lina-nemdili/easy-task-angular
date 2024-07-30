import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";
@Injectable({providedIn:'root'})
 export class TasksService{
   private  tasks=[
        {
          id:'t1',
          userId:'u1',
          title: 'Master Angular',
          summary:'Learn all the basic and advanced feautures of Angular & how to apply them. ',
          dueDate: '2024-08-08'
        },
        {
          id:'t2',
          userId:'u2',
          title: 'Build first prototype',
          summary:'Learn all the basic and advanced feautures of Angular & how to apply them. ',
          dueDate: '2024-08-08'
        },
        {
          id:'t3',
          userId:'u3',
          title: 'Prepare issue template',
          summary:'Learn all the basic and advanced feautures of Angular & how to apply them. ',
          dueDate: '2024-08-08'
        },
      ];
      constructor(){
        const tasks= localStorage.getItem('tasks');
        if(tasks){
            this.tasks= JSON.parse(tasks);
        }
      }
      getUserTasks(userId: string){
        return this.tasks.filter((task)=> task.userId==userId);
      }
      addTask(taskData: NewTaskData, userId:string){
        this.tasks.unshift({
            id: new  Date().getTime().toString(),
            title :taskData.title,
            userId:userId,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
      }
      removeTask(id: string){
        this.tasks=this.tasks.filter((task) => task.id!==id);
        this.saveTasks();
      }
      private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
      }
}