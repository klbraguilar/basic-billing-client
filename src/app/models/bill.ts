export class Bill{
    id?: number;
    clientId: string;
    categoryId: string;
    period: string;
    state: string;
    amount: number;

    constructor(clientId: string, categoryId: string, period: string, state: string, amount: number){
        this.clientId = clientId;
        this.categoryId = categoryId;
        this.period = period;
        this.state = state;
        this.amount = amount;
    }
}