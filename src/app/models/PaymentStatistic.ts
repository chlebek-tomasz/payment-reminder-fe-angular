import { Payment } from './Payment';

export class PaymentStatistic {

    private since: string;
    private dueTo: string;
    private summaryAmount: number;
    private paymentCounts: number;
    private payments: Payment[];

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
}