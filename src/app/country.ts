export class Country {
    id!: number;
    name!: {
        common:string,
        official: string,
    }
    capital!:[];
    region!: string;
    subregion!:string;
    population!:number;
    area!: string;
    timezones!:[];
    flags!:{
        png: string,
        svg: string,
    }

}
