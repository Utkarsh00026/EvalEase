import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
constructor(private userService:UserService,private snack : MatSnackBar){}

public user = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

ngOnInit(): void {}

formSubmit(){
  
  console.log(this.user);
  if(this.user.username=='' || this.user.username==null)
  {
    this.snack.open("Username is required!!" , '',{duration:3000,verticalPosition:'top',horizontalPosition:'right'});
    return;
  }

  // addUser: userService 
  this.userService.addUser(this.user).subscribe(
    (data) => {
      console.log(data);
      Swal.fire('User is registered')
    },
    (error) => {
      console.log(error);
      this.snack.open('Something went wrong!!','',{duration:3000,verticalPosition:'top',horizontalPosition:'right'})
      
    }
  );
}

 

}
