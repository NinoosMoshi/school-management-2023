import { User } from "./user";

export class Instructor {

  instructorId: number;
  firstName: string;
  lastName: string;
  summary: string;
  user: User;


  constructor(instructorId:number, firstName:string, lastName:string, summary:string,user:User){
    this.instructorId = instructorId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.summary = summary;
    this.user = user;
  }





}
