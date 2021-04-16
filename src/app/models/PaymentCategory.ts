export class PaymentCategory {
    private id: string;
    private categoryName: string;

    public deserialize(input: any): PaymentCategory {
        
        this.id = input.id;
        this.categoryName = input.categoryName;

        return this;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}