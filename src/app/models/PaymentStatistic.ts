import { Payment } from './Payment';

export class PaymentStatistic {

    private since: string;
    private dueTo: string;
    private summaryAmount: number;
    private paymentCounts: number;
    private payments: Payment[];

    public get Since(): string {
        return this.since;
    }

    public set Since(since: string) {
        this.since = since;
    }

    public get DueTo(): string {
        return this.dueTo;
    }

    public set DueTo(dueTo: string) {
        this.dueTo = dueTo;
    }

    public get SummaryAmount(): number {
        return this.summaryAmount;
    }

    public set SummaryAmount(summaryAmount: number) {
        this.summaryAmount = summaryAmount;
    }

    public get PaymentCounts(): number {
        return this.paymentCounts;
    }

    public set PaymentCounts(paymentCounts: number) {
        this.paymentCounts = paymentCounts;
    }

    public get Payments(): Payment[] {
        return this.payments;
    }

    public set Payments(payments: Payment[]) {
        this.payments = payments;
    }

    public deserialize(input: any): PaymentStatistic {

        this.since = input.since;
        this.dueTo = input.dueTo;
        this.summaryAmount = input.summaryAmount;
        this.paymentCounts = input.paymentCounts;

        for (let payment in input.paymentsDTOs) {
            this.payments.push(new Payment().deserialize(payment));
        }

        return this;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}