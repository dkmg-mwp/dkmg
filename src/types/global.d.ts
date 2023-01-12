type Food = {
    id: number;
    image: string;
    imageType: string;
    title: string;
};

type Allergies = {
    dairyFree: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
    title: string;
};

type Guest = {
    id: string;
    name: string;
    dairyFree?: boolean;
    glutenFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
};
