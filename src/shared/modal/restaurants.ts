export class Restaurants {
    // tslint:disable-next-line: variable-name
    public Restaurant_ID: number;
    public Restaurant_Name: string;
    public Average_Cost_for_two: number;
    public Currency: string;
    public Has_Table_booking: string;
    public Has_Online_delivery: string;
    public Aggregate_rating: number;
    public Rating_color: string;
    public Rating_text: string;
    public Votes: number;

// tslint:disable-next-line: variable-name
    constructor(Restaurant_ID: number,
        Restaurant_Name: string,
        Average_Cost_for_two: number,
        Currency: string,
        Has_Table_booking: string,
        Has_Online_delivery: string,
        Aggregate_rating: number,
        Rating_color: string,
        Rating_text: string,
        Votes: number) {
        this.Restaurant_ID = Restaurant_ID;
        this.Restaurant_Name = Restaurant_Name;
        this.Average_Cost_for_two = Average_Cost_for_two;
        this.Currency = Currency;
        this.Has_Table_booking = Has_Table_booking;
        this.Has_Online_delivery = Has_Online_delivery;
        this.Aggregate_rating = Aggregate_rating;
        this.Rating_color = Rating_color;
        this.Rating_text = Rating_text;
        this.Votes = Votes;
    }
}