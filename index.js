class KioskCalc{
constructor(fruit,quantity){

    this.fruit="orange";
    this.price=30;
    this.quantity=3;

    this.fruit1="mango";
    this.price1=15;
    this.quantity1=4;

    this.fruit2="avocado";
    this.price2=40;
    this.quantity2=6;
     
    }getTotalCost(){
        return `${this.quantity} ${this.fruit} for KES ${this.price*this.quantity}`;
}getTotalCost1(){
    return `${this.quantity1} ${this.fruit1} for KES ${this.price1*this.quantity1}`;

}getTotalCost2(){
    return`${this.quantity2} ${this.fruit2} for KES ${this.price2*this.quantity2}`;
}

}
var fruit=new KioskCalc("orange",3);
console.log(fruit.getTotalCost());
console.log(fruit.getTotalCost1());
console.log(fruit.getTotalCost());

