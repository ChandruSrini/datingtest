import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComp: any
  @Output() cancelRegister = new EventEmitter()
  registerForm: FormGroup
  maxDate: Date
  validationError: string[] = []

  constructor(private accountService: AccountService, private toastr: ToastrService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm()
    this.maxDate = new Date()
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
  }

  initializeForm(){
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword:['', [Validators.required, this.matchValues('password')]]
    })
    this.registerForm.controls.password.valueChanges.subscribe(() =>{
      this.registerForm.controls.confirmPassword.updateValueAndValidity()
    })
  }

  matchValues(match: string): ValidatorFn{
    return (control: AbstractControl) =>{
      return control?.value === control?.parent?.controls[match].value ? null : {isMatching: true}
    }
  }

  register(){
    //console.log(this.registerForm.value)
    this.accountService.Register(this.registerForm.value).subscribe(response =>{
      //console.log(response) will be undefined since we dont return anything in pipe map
      //this.cancel()
      this.router.navigateByUrl('/members')
    }, error =>{
      this.validationError = error
      //console.log(error)
      //this.toastr.error(error.error)
    })
  }

  cancel(){
    //console.log('cancelled')
    this.cancelRegister.emit(false)
  }

}
