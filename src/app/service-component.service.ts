import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  forkJoin,
  observable,
  Observable,
  Subject,
  throwError,
  zip,
} from 'rxjs';
import { catchError ,map} from 'rxjs/operators';

class Complaints {
  complaint: string;

  count: number;
}

export class ComplaintsWithPercent {
  complaint: string;

  count: number;

  cumulativePercent: number;
}

const complaintsData: Complaints[] = [
  { complaint: 'Cold pizza', count: 780 },
  { complaint: 'Not enough cheese', count: 120 },
  { complaint: 'Underbaked or Overbaked', count: 52 },
  { complaint: 'Delayed delivery', count: 1123 },
  { complaint: 'Damaged pizza', count: 321 },
  { complaint: 'Incorrect billing', count: 89 },
  { complaint: 'Wrong size delivered', count: 222 },
];

@Injectable()
export class ServiceChart {
  getComplaintsData(): ComplaintsWithPercent[] {
    const data = complaintsData.sort((a, b) => b.count - a.count);
    const totalCount = data.reduce(
      (prevValue, item) => prevValue + item.count,
      0
    );
    let cumulativeCount = 0;
    return data.map((item, index) => {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercent: Math.round((cumulativeCount * 100) / totalCount),
      };
    });
  }
}

export class Appointment {
  title: string;
  startDate: Date;
  endDate: Date;
  dayLong?: boolean;
  recurrence?: string;
}
export class Employee {
  ID: Number;
  FirstName: String;
  LastName: String;
}

const employees: Employee[] = [
  { ID: 1, FirstName: 'Sandra', LastName: 'Johnson' },
  { ID: 2, FirstName: 'James', LastName: 'Scott' },
  { ID: 3, FirstName: 'Nancy', LastName: 'Smith' },
];

@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;
  }
}

const appointments: Appointment[] = [
  {
    title: 'Install New Database',
    startDate: new Date('2021-05-23T08:45:00.000Z'),
    endDate: new Date('2021-05-23T09:45:00.000Z'),
  },
  {
    title: 'Create New Online Marketing Strategy',
    startDate: new Date('2021-05-24T09:00:00.000Z'),
    endDate: new Date('2021-05-24T11:00:00.000Z'),
  },
  {
    title: 'Upgrade Personal Computers',
    startDate: new Date('2021-05-25T10:15:00.000Z'),
    endDate: new Date('2021-05-25T13:30:00.000Z'),
  },
  {
    title: 'Customer Workshop',
    startDate: new Date('2021-05-26T08:00:00.000Z'),
    endDate: new Date('2021-05-26T10:00:00.000Z'),
    dayLong: true,
    recurrence: 'FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10',
  },
  {
    title: 'Prepare Development Plan',
    startDate: new Date('2021-05-27T08:00:00.000Z'),
    endDate: new Date('2021-05-27T10:30:00.000Z'),
  },
  {
    title: 'Testing',
    startDate: new Date('2021-05-23T09:00:00.000Z'),
    endDate: new Date('2021-05-23T10:00:00.000Z'),
    recurrence: 'FREQ=WEEKLY;INTERVAL=2;COUNT=2',
  },
  {
    title: 'Meeting of Instructors',
    startDate: new Date('2021-05-24T10:00:00.000Z'),
    endDate: new Date('2021-05-24T11:15:00.000Z'),
    recurrence: 'FREQ=DAILY;BYDAY=WE;UNTIL=20211001',
  },
  {
    title: 'Recruiting students',
    startDate: new Date('2021-05-25T08:00:00.000Z'),
    endDate: new Date('2021-05-25T09:00:00.000Z'),
    recurrence: 'FREQ=YEARLY',
  },
  {
    title: 'Monthly Planning',
    startDate: new Date('2021-05-26T09:30:00.000Z'),
    endDate: new Date('2021-05-26T10:45:00.000Z'),
    recurrence: 'FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1',
  },
  {
    title: 'Open Day',
    startDate: new Date('2021-05-27T09:30:00.000Z'),
    endDate: new Date('2021-05-27T19:00:00.000Z'),
  },
];

@Injectable({
  providedIn: 'root',
})
export class AppService {
  userAddedEvent = new Subject<boolean>();
  getAppointments(): Appointment[] {
    return appointments;
  }
  addUser() {
    this.userAddedEvent.next(true);
  }
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  dataFromSources(): Observable<any> {
    // return zip(
    //  this.getEntries(),
    //   this.getFacts(),
    //   this.getCurrentPrices(),
    // );
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err) => {
        err['testProp'] = 'Test Error!!!';
        return throwError(err);
      })
    );
  }

  getEntries() {
    return this.http.get(' https://jsonplaceholder.typicode.com/posts');
  }
  // https://jsonplaceholder.typicode.com/posts
  getFacts() {
    return this.http.get(' https://jsonplaceholder.typicode.com/posts');
  }

  getCurrentPrices() {
    return this.http.get(' https://jsonplaceholder.typicode.com/posts');
  }
}

export class Product {
  ID: string;
  name: string;
  categoryId?: string;
  image?: string;
  price?: number;
}

const IMAGE_URL =
  'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/';

const products: Product[] = [
  {
    ID: '1',
    name: 'Stores',
  },
  {
    ID: '1_1',
    categoryId: '1',
    name: 'Super Mart of the West',
  },
  {
    ID: '1_1_1',
    categoryId: '1_1',
    name: 'Video Players',
  },
  {
    ID: '1_1_1_1',
    categoryId: '1_1_1',
    name: 'HD Video Player',
    image: IMAGE_URL + '1.png',
    price: 220,
  },
  {
    ID: '1_1_1_2',
    categoryId: '1_1_1',
    name: 'SuperHD Video Player',
    image: IMAGE_URL + '2.png',
    price: 270,
  },
  {
    ID: '1_1_2',
    categoryId: '1_1',
    name: 'Televisions',
  },
  {
    ID: '1_1_2_1',
    categoryId: '1_1_2',
    name: 'SuperLCD 42',
    image: IMAGE_URL + '7.png',
    price: 1200,
  },
  {
    ID: '1_1_2_2',
    categoryId: '1_1_2',
    name: 'SuperLED 42',
    image: IMAGE_URL + '5.png',
    price: 1450,
  },
  {
    ID: '1_1_2_3',
    categoryId: '1_1_2',
    name: 'SuperLED 50',
    image: IMAGE_URL + '4.png',
    price: 1600,
  },
  {
    ID: '1_1_2_4',
    categoryId: '1_1_2',
    name: 'SuperLCD 55',
    image: IMAGE_URL + '6.png',
    price: 1750,
  },
  {
    ID: '1_1_2_5',
    categoryId: '1_1_2',
    name: 'SuperLCD 70',
    image: IMAGE_URL + '9.png',
    price: 4000,
  },
  {
    ID: '1_1_3',
    categoryId: '1_1',
    name: 'Monitors',
  },
  {
    ID: '1_1_3_1',
    categoryId: '1_1_3',
    name: '19"',
  },
  {
    ID: '1_1_3_1_1',
    categoryId: '1_1_3_1',
    name: 'DesktopLCD 19',
    image: IMAGE_URL + '10.png',
    price: 160,
  },
  {
    ID: '1_1_4',
    categoryId: '1_1',
    name: 'Projectors',
  },
  {
    ID: '1_1_4_1',
    categoryId: '1_1_4',
    name: 'Projector Plus',
    image: IMAGE_URL + '14.png',
    price: 550,
  },
  {
    ID: '1_1_4_2',
    categoryId: '1_1_4',
    name: 'Projector PlusHD',
    image: IMAGE_URL + '15.png',
    price: 750,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Product[] {
    return products;
  }
}

export class Billionaires {
  country: string;
  amount: number;
}

const billionaires: Billionaires[] = [
  {
    country: 'China',
    amount: 1002,
  },
  {
    country: 'United States',
    amount: 716,
  },
  {
    country: 'India',
    amount: 215,
  },
  {
    country: 'United Kingdom',
    amount: 150,
  },
  {
    country: 'Germany',
    amount: 145,
  },
];
@Injectable({
  providedIn: 'root',
})
export class Piechart {
  getBillionaires(): Billionaires[] {
    return billionaires;
  }
}
