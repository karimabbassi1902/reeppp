import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent {

  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private courseservice:CourseService,private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this._courseForm = this.formBuilder.group({
      descriptioncourse: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      fileUrl: new FormControl('', [Validators.required]),

    });
  }
  private _courseForm: FormGroup = new FormGroup({
    descriptioncourse: new FormControl('', [Validators.required]),
    name/: new FormControl('', [Validators.required]),
    fileUrl: new FormControl('', [Validators.required]),
  });
  get courseForm(): FormGroup {
    return this._courseForm;
  }
  add(data:any){
    console.log(data);
    this.courseservice.add(data).subscribe(()=>this.route.navigate(['CourseList']));
    console.log(data);
  }


}
