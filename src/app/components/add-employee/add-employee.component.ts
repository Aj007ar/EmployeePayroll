import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.required]],
      gender: ['', [Validators.required, Validators.email, Validators.required]],
      department: ['', [Validators.required, Validators.required]],
      salary: ['', [Validators.required, Validators.required]],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log("employee added successfully");
      let payload = {
        name: this.registerForm.value.name,
        gender: this.registerForm.value.gender,
        department: this.registerForm.value.departrment,
       salary: this.registerForm.value.salary
      }
      this.user.addEmployee(payload).subscribe((response: any) => {
        console.log(response)
      }
      )
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
