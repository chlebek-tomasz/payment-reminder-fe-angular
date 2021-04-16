export class PaymentCategory {
    private id: string;
    private categoryName: string;

    public get Id(): string {
        return this.id;
    }

    public set Id(id: string) {
        this.id = id;
    }

    public get CategoryName(): string {
        return this.categoryName;
    }

    public set CategoryName(categoryName: string) {
        this.categoryName = categoryName;
    }

    public deserialize(input: any): PaymentCategory {
        
        this.id = input.id;
        this.categoryName = input.categoryName;

        return this;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}