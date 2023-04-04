export interface IProduct {
    id: number;
    name: string;
    isNew: boolean;
    price: number;
    sizes: [string];
    compound: string;
    sizeOnTheModel: string;
    modelParameters: string;
    growthModel: string;
    length: string;
    lengthSleeve: string;
    season: string;
    article: string;
    description: string;
    idCategory: number;
    photo: string;
    images: [string];
}
