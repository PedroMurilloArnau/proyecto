import { Component, OnInit } from '@angular/core';
import { GestDocumentService } from '../../../services/gest.document.service'

@Component({
  selector: 'app-all-documentation',
  templateUrl: './all-documentation.component.html',
  styleUrls: ['./all-documentation.component.css']
})
export class AllDocumentationComponent implements OnInit {
  documents: any;

  constructor(private gestDocumentService: GestDocumentService) { }

  ngOnInit(): void {
    this.documents = this.gestDocumentService.gestDocument()
    .subscribe((res: any) =>{
      this.documents = res;
    })
  }

}
