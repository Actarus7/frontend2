import { TArticle } from "./TArticle.type";
import { TTraining } from "./TTraining.type";
import { TUser } from "./TUser.type";

export type TComment = {

    id: number;

    message: string;

    createdAt: Date;

    article: TArticle;

    training: TTraining;

    user: TUser;

}