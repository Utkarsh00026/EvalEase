import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
constructor(private userService:UserService){}

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
    alert('User is required!!')
    return;
  }

  // addUser: userService 
  this.userService.addUser(this.user).subscribe(
    (data) => {
      console.log(data);
      alert('success');
    },
    (error) => {
      console.log(error);
      alert('something went wrong');
      
    }
  );
}

 

}
