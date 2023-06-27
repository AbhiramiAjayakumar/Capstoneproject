import { Topic } from "./Topic";


export class Course1 {
  title: string='';
  description: string;
  topics: Topic[] = [];
  imageFile: File | null;
  

  constructor(
    title: string,
    description: string,
    topics: Topic[],
    imageFile: File
  ) {
    this.title = title;
    this.description = description;
    this.topics = topics;
    this.imageFile = imageFile;
   
}
}
