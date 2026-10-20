// Basklass vi har för person //
class Person{
    name: string;
    adress: string;
    phone: string;
    // Konstruktor för att initiera egenskaper //
    constructor(name: string, adress: string, phone: string){
        this.name = name;
        this.adress = adress;
        this.phone = phone;
    }
    // Metod för att returnera data för senare utskrift //
    skrivUt(): string{
        return `Namn: ${this.name}\nAdress: ${this.adress}\nTelefonnummer: ${this.phone}`;
        
    }
}

// Ärvd klass från Person //
class Student extends Person{
    className: string;
    program: string;
    // Konstruktor för att initiera egenskaper //
    constructor(name: string, adress: string, phone: string, className: string, program: string){
        // Vi använder super() för initiera egenskaper från bas-klassen //
        super(name, adress, phone);

        // Extra egenskaper för enbart den ärvda klassen //
        this.className = className;
        this.program = program;
    }
        // Vi skriver över skrivUt och utökar med information från den ärvda klassen //
        override skrivUt(): string{
        return `${super.skrivUt()}\nKlass: ${this.className}\nProgram: ${this.program}`;
    }
}

// Ärvd klass från Person //
class Teacher extends Person{
    subject: string;
    course: string;
    // Konstruktor för att initiera egenskaper //
    constructor(name: string, adress: string, phone: string, subject: string, course: string){
        // Vi använder super() för initiera egenskaper från bas-klassen //
        super(name, adress, phone);

        // Extra egenskaper för enbart den ärvda klassen //
        this.subject = subject;
        this.course = course;
    }
    // Vi skriver över skrivUt och utökar med information från den ärvda klassen //
    override skrivUt(): string{
        return `${super.skrivUt()}\nÄmne: ${this.subject}\nKurs: ${this.course}`;
    }
}

// Vi skapar två personer, en med klassen Student och en med klassen Teacher //
const student1 = new Student("Anna", "Gärdhemsvägen 7B", "0707865389", "WU26", "Webbutvecklare");
const teacher1 = new Teacher("Johan", "Knopvägen 13", "0765883975", "Matematik", "Geopolitisk algebra");

console.log(teacher1.skrivUt());
console.log("");
console.log(student1.skrivUt());