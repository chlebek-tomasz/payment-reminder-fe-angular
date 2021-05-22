import {PaymentCategory} from './PaymentCategory';

export class Payment {
  private id: string;
  private title: string;
  private recipient: string;
  private recipientAccountNumber: string;
  private amount: number;
  private dueTo: string;
  private category: PaymentCategory;
  private status: string;

  public get Id(): string {
    return this.id;
  }

  public set Id(id: string) {
    this.id = id;
  }

  public get Title(): string {
    return this.title;
  }

  public set Title(title: string) {
    this.title = title;
  }

  public get Recipient(): string {
    return this.recipient;
  }

  public set Recipient(recipient: string) {
    this.recipient = recipient;
  }

  public get RecipientAccountNumber(): string {
    return this.recipientAccountNumber;
  }

  public set RecipientAccountNumber(recipientAccountNumber: string) {
    this.recipientAccountNumber = recipientAccountNumber;
  }

  public get Amount(): number {
    return this.amount;
  }

  public set Amount(amount: number) {
    this.amount = amount;
  }

  public get DueTo(): string {
    return this.dueTo;
  }

  public set DueTo(dueTo: string) {
    this.dueTo = dueTo;
  }

  public get Category(): PaymentCategory {
    return this.category;
  }

  public set Category(category: PaymentCategory) {
    this.category = category;
  }

  public get Status(): string {
    return this.status;
  }

  public set Status(status: string) {
    this.status = status;
  }

  public deserialize(input: any): Payment {

    this.id = input.id;
    this.title = input.title;
    this.recipient = input.recipient;
    this.recipientAccountNumber = input.recipientAccountNumber;
    this.amount = input.amount;
    this.dueTo = input.dueTo;
    this.category = new PaymentCategory().deserialize(input.category);
    this.status = input.status;

    return this;
  }
}
