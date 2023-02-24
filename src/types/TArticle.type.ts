import { TComment } from "./TComment.type";
import { TUser } from "./TUser.type";


export type TArticle = {

    id: number;

    title: string;

    type: string;

    body: string;

    createdAt: Date;

    published: boolean;

    likes: number;

    comments: TComment [];

    user: TUser;


}