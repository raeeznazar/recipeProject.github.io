export class ingredients {
  //   public name: string;
  //   public amount: number;
  // we can get rid of the declaration of properties here

  constructor(public name: string, public amount: number) 
  ///what this will do is behind the scenes it will create same effects we had before, simply add an accessor in front of the property name here, so public in front of both arguments. 
  //so it will automatically give us properties with the names we specify here as argument names, so name and amount in this case and it will automatically assign the values we receive in this constructor to these newly created properties.
  {
    // this.name = name;
    // this.amount = amount;
    //Also we can get rid of the content in the body of the constructor and simply add an accesor in the fron of the property name here
  }
}
