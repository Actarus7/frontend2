import { TArticle } from "./TArticle.type";
import { TComment } from "./TComment.type";
import { TFriendship } from "./TFriendship.type";
import { TTraining } from "./TTraining.type";


export type TUser = {

    id: number;

    pseudo: string;

    password: string;

    email: string;

    admin: boolean;

    photo: string;

    city: string;

    registrationDate: Date;

    description: string;

    trainings: TTraining [];

    sentFriendships: TFriendship [];

    receivedFriendships: TFriendship [];

    articles: TArticle [];
    
    comments: TComment[];
    

}