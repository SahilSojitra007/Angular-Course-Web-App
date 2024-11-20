// import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
// import { Strings } from '../../enum/strings.enum';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interfaces/course.interface';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { HoverColorDirective } from '../../directives/hoverColor/hover-color.directive';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule,
    // NgIf,
    // NgFor,
    CoursesComponent,
    NgClass,
    NgStyle,
    UpperCasePipe,
    HoverColorDirective
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  // model: any = {};
  // cover!: string | null;
  // cover_file: any;
  // showError = false;

  model = signal<any>({});
  cover!:string | null;
  cover_file: any;
  showError = false;
  isSaved = signal<boolean>(false);

  // isActive = signal<boolean>(false);
  // courses: any[] = [];

  private courseService = inject(CourseService);

  constructor() {
    // effect(() => {
    //   console.log(this.isActive());
    // });
  }

  ngOnInit() {
    console.log('admin ngoninit');
    // this.getCourses();
  }

  // changeIsActive() {
  //   this.isActive.update((val) => !val);
  // }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if(data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

  onFileSelected(event:any) 
{
  const file = event.target.files[0];
    if(file)
    {
      this.cover_file = file;
      const reader = new FileReader();
      reader.onload = () => {
        const dataurl = reader.result as string;
        this.cover = dataurl;
        console.log('image: ', this.cover);
      };
      reader.readAsDataURL(file);
      this.showError = false;
    }
}

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('form invalid');
      form.control.markAllAsTouched();
      if (!this.cover) {
        // this.showError = true;
        this.showError= true;
      }
      return;
    }

    console.log(form.value);

    this.saveCourse(form);
  }

  clearForm(form: NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }


  async saveCourse(form: NgForm) {
    try {
      const formValue = form.value;
      console.log(formValue);

      const data: Course = {
        ...formValue,
        image: this.cover,
        // id: this.courses.length + 1,
      };

      await this.courseService.addCourse(data);

      // this.courses = [ ...this.courses, data ];
      // this.setItem(this.courses);

      this.isSaved.set(true);
      setTimeout(() => {
        this.isSaved.set(false);
      }, 2000);
      this.clearForm(form);
    } catch (e) {
      console.log(e);
    }
  }

  // deleteCourse(course: any) {
  // //   this.courses = this.courses.filter(course_item => course_item.id != course.id);
  // //   this.setItem(this.courses);
  // }
}
