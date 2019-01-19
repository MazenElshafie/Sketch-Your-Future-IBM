
export class faculty {
  public name: string;
  public description: string;
  public imagePath: string;
  public departments: string[];
  

  constructor(name: string, desc: string, imagePath: string, departments:string[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.departments=departments;
  }
}
