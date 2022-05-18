import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { GestDocumentService } from 'src/app/services/gest.document.service';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  step = 0;
  user: any;
  type: any;
  constructor(private authService: UserService,private gestDocumentService: GestDocumentService,private router: Router) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  onAddDocument(form: NgForm) {
    return this.gestDocumentService.addDocument({
      email: this.user.email,
      bibliography: form.value.bibliography,
      articleText: form.value.articleText,
      articleImage: form.value.articleImage,
      articleTitle: form.value.articleTitle,
      anonimus: form.value.anonimus,
      title: form.value.title
    })
    .subscribe((res: any) =>{
      if(res.ok = true){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Document add!!!',
          showConfirmButton: false,
          timer: 1000
        });
      this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/tasting'])
      }
    })
  }
}

