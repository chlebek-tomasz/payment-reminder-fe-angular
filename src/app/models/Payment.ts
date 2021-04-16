import { PaymentCategory } from './PaymentCategory';

export class Payment {
    private id: string;
    private title: string;
    private recipient: string;
    private recipientAccountNumber: string;
    private amount: number;
    private duetTo: string;
    private category: PaymentCategory;
    private status: string;

    public deserialize(input: any): Payment {

        this.id = input.id;
        this.title = input.title;
        this.recipient = input.recipient;
        this.recipientAccountNumber = input.recipientAccountNumber;
        this.amount = input.amount;
        this.duetTo = input.dueTo;
        this.category = new PaymentCategory().deserialize(input.category);
        this.status = input.status;

        return this;
    }
}