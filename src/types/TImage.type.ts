import { TUser } from "./TUser.type";
import { TSession } from "./TSesssion.type";
import { TExercise } from "./TExercise.type";
import { TComment } from "./TComment.type";


export type TImage = {

    id: number;

    originalName: string;

    fileName: string;

    mimeType: string;
}