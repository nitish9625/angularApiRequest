import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { AleryfyService } from 'src/app/services/aleryfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
registrationForm !: FormGroup
user!:User;
userSubmitted: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService, private alertyfyService: AleryfyService) { }

  ngOnInit(): void {
    this.CreateRegisterForm();
  }

  CreateRegisterForm(){
    this.registrationForm = this.fb.group({
      userName:[null,Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(8)]],
      confirmPassword:[null, [Validators.required]],
      mobile:[null,[Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidators})
  }


  passwordMatchingValidators(fg:FormControl): Validators{
    return fg.get('password')?.value === fg.get('confirmPassword')?.value? '': 
    {notmatched: true}
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;  
    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertyfyService.success("Congrats, you are successfully registered");
    }else{
      this.alertyfyService.error("Kindly provide the required fields");
    }
   
  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

//getter method for all
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
      return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  //.......................

 

 

}
