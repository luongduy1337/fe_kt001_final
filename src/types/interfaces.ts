export interface User {
    name? : string | undefined | null;
    role? : string;
    userName? : string;
    accessToken? : string,
    refreshToken? : string,
}

export interface Posts {
    id : number,
    content : string,
    description : string,
    title : string,
    categoryId : number,
}