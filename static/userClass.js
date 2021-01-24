let numInterests = 11;

class Student {
  Name;
  ClassYear;
  //Major;
  Home;
  Age;
  Gender;
  Pronouns;
  SocialMedia = [];
  //most probably 11
  Interests = [];

  constructor(name, classYear, major, home, age, gender, pronouns, socialMedia, interests) {
    this.Name = name;
    this.ClassYear = classYear;
    this.Major = major;
    this.Home = home;
    this.Age = age;
    this.Gender = gender;
    this.Pronouns = pronouns;
    for(let id of socialMedia){
        this.SocialMedia.push(id);
    }
    for(let interest of interests){
        this.Interests.push(interest);
    }
  }
    
  }

let student1 = new Student('Aryan',2023,'CS','Earth',19,'Male','he/his',['Instagram','Snapchat','Discord'],['Programming','Cybersec','Procrastination']);
//let student2 = new Student('X',2023,)
