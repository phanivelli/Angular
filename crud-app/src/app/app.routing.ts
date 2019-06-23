import { Routes,RouterModule } from '@angular/router';


import { StudentFormComponent } from './student-add/student-form.component';
import { StudentListComponent } from './student-display/student-list.component';
import { EditStudentComponent } from './student-edit/student-edit.component';


 const routes: Routes = [
    { path: 'student-form', component: StudentFormComponent },
    {path: 'student-list', component:StudentListComponent},
    {path:'student-edit',component:EditStudentComponent},
    {path:'',component:StudentListComponent}
    
    
  ];

  export const routing = RouterModule.forRoot(routes);
