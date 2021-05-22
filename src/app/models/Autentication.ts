import {User} from './User';

export class Authentication {
  private token: string;
  private user: User;

  public get Token(): string {
    return this.token;
  }

  public set Token(token: string) {
    this.token = token;
  }

  public get User(): User {
    return this.user;
  }

  public set User(user: User) {
    this.user = user;
  }

  public deserialize(input: any): Authentication {

    this.token = input.token;
    this.user = new User().deserialize(input.user);

    return this;
  }

  public serialize(): string {
    return JSON.stringify(this);
  }
}
