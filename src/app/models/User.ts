
export class User {
    private id: string;
    private email: string;
    private firstName: string;
    private lastName: string;

    public deserialize(input: any): User {

        this.id = input.id;
        this.email = input.email;
        this.firstName = input.firstName;
        this.lastName = input.lastName;

        return this;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}