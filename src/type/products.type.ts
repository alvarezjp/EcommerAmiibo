export interface ProductType {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release:      Release;
    tail:         string;
    type:         string;
    id:           number;
    price:        number;
}

export interface Release {
    au: Date;
    eu: Date;
    jp: Date;
    na: Date;
}

export interface ProductCartInterface {
    id:number;
    name:string;
    gameSeries:string;
    image:string;
    prise:number;
    quantity:number;
}
