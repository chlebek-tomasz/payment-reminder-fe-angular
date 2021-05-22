export class User {
  private id: string;
  private email: string;
  private firstName: string;
  private lastName: string;

  public get Id(): string {
    return this.id;
  }

  public set Id(id: string) {
    this.id = id;
  }

  public get Email(): string {
    return this.email;
  }

  public set Email(email: string) {
    this.email = email;
  }

  public get FirstName(): string {
    return this.firstName;
  }

  public set FirstName(firstName: string) {
    this.FirstName = firstName;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public set LastName(id: string) {
    this.lastName = this.lastName;
  }

  public deserialize(input: any): User {

    this.id = input.id;
    this.email = input.email;
    this.firstName = input.firstName;
    this.lastName = input.lastName;

    return this;
  }

  public serialize(): string {
    return JSON.parse(JSON.stringify(this));
  }
}
