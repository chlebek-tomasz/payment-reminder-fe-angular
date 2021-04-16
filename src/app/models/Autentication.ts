import { User } from './User';

export class Authentication {
    private token: string;
    private user: User;

    public deserialize(input: any): Authentication {

        this.token = input.token;
        this.user = new User().deserialize(input.user);
        
        return this;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}