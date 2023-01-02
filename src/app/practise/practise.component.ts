import { Component, OnChanges, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface DataItem {
  name: string;
  chinese: number;
  math: number;
  english: number;
}

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css'],
})
export class PractiseComponent implements OnInit {
  // pratice: string | null = ' This is my  pratice';

  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   PassWord: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ]),
  // });

  constructor() {
    console.log('Construct works!');
  }
  submitted = false;
  user = {
    email: '',
    PassWord: '',
  };
  restricatedNames = ['one@gmail.com'];
  validateForm: any = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      this.isRestricated.bind(this),
    ]),
    PassWord: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),

    // hobbies: new FormArray([]),
  });
  submitForm() {
    console.warn(this.validateForm);
    console.log(' email value ', this.validateForm.value.email);
    this.validateForm.reset();
  }
  // onAddhubby() {
  //   const control = new FormControl(null, [Validators.required]);
  //   (<FormArray>this.validateForm.get('hobbies')).push(control);
  // }
  isRestricated(control: FormControl) {
    if (this.restricatedNames.includes(control.value)) {
      return {
        nameisRestricated: true,
      };
    }
    return null;
  }
  ngOnInit() {
    console.log('ngOnInit works!');
    setTimeout(() => {
      this.isloading = false;
    }, 4000);
  }

  OnChanges() {
    console.log('OnChanges  works!');
  }
  OnDestroy() {
    console.log('OnDestroy works!');
  }

  setValue() {
    this.validateForm.setValue({
      email: 'Carson@gmail.com',
      PassWord: '124563',
    });
  }
  // addControl(dir: NgControl): void{

  // }
  // loginUser() {
  //   console.warn(this.loginForm.value);
  //   // this.loginForm.get('email')
  // }

  // get emailValidator() {
  //   console.log('emailValidator =>', this.loginForm.get('email'));
  //   return this.loginForm.get('email');
  // }

  // get passwordValidator() {
  //   return this.loginForm.get('PassWord');
  // }

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  listOfColumn = [
    {
      title: 'Name',
      compare: null,
      priority: false,
    },
    {
      title: 'Chinese Score',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3,
    },
    {
      title: 'Math Score',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2,
    },
    {
      title: 'English Score',
      compare: (a: DataItem, b: DataItem) => a.english - b.english,
      priority: 1,
    },
  ];
  listOfData2: DataItem[] = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  dataSet = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  ObjMap: any = { lat: 34.052235, lng: -118.243683 };
  multiViewItems = [
    { text: 'Personal Data' },
    { text: 'Contacts' },
    { text: 'Address' },
  ];
  minDate: Date = new Date(1900, 0, 1);
  now: Date = new Date();
  onValueChanged(e: any) {
    console.log(e.previousValue);
    console.log(e.value);
  }
  date: any = new Date();
  isloading = true; 
  actions: Array<{id: Number, text: String, icon: String}> = [
    { id: 1, text: "My profile", icon: "user" },
    { id: 2, text: "Messages", icon: "email" },
    { id: 3, text: "Contacts", icon: "group" },
    { id: 4, text: "Log out", icon: "runner" }
];
logAction(e:any) {
  console.log(e.itemData.text + " was clicked");
} 
logButtonClick() {
  console.log("Main button was clicked");
}
logSelectionChanged(e:any) {
  console.log(e.item.text + " was selected; " + e.previousItem.text + " was deselected");
}
dropDownOptions = {
  height: 150
}

time: Date | null = null;

  log(time: Date): void {
    console.log(time && time.toTimeString());
  }
}
