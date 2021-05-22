export class PaymentRequest {

  title: string;
  recipient: string;
  recipientAccountNumber: string;
  periodicity: number;
  categoryId: string;
  dueTo: string;
  amount: number;

  public deserialize(input: any): PaymentRequest {
    this.title = input.title;
    this.recipient = input.recipient;
    this.recipientAccountNumber = input.recipientAccountNumber;
    this.categoryId = input.category.id;
    this.dueTo = input.dueTo;
    this.amount = input.amount;

    return this;
  }

}
