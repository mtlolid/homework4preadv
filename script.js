// Завдання 1

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    };

    getSalary(){
        return this.rate * this.days;
    };
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);

// Завдання 2

class MyString {
    constructor(string){
        this.string = string;
    }

    reverse(){
        return this.string.split('').reverse().join('');
    };


    ucFirst(){
        return this.string[0].toUpperCase() + this.string.slice(1).toLowerCase();
    }

    ucWords(){
        let arr = [];
        for (const elem of this.string.split(' ')) {
            arr.push(elem[0].toUpperCase() + elem.slice(1).toLowerCase());
        }

        return arr.join(' ');
    }

};

const str = new MyString('arsenal arsenal arsenal');

// Завдання 3


class CoffeeMake{
    on(){
        return 'Coffee is making!';  
    }
    off(){
        return 'Coffee is not making!';  
    }
};

class DripCoffeeMaker extends CoffeeMake{
    refillWater(){
        return 'Water is refilled!';
    }
}

class ExpressoCoffeeMaker extends CoffeeMake{
    makeExpresso(){
        return 'The expresso is done!';
    }  
};

class AutoCoffeeMaker extends CoffeeMake{
    grindCoffee(){
        return 'The coffee is grinded!';
    } 
}

let coffee1 = new DripCoffeeMaker();
let coffee2 = new ExpressoCoffeeMaker();
let coffee3 = new AutoCoffeeMaker();


