import { TComment } from "./TComment.type";
import { TExercise } from "./TExercise.type";
import { TSession } from "./TSesssion.type";
import { TUser } from "./TUser.type";


export type TTraining = {

    id: number;

    title: string;

    description: string;

    sessions: TSession[];

    exercises: TExercise[];

    users: TUser[];

    comments: TComment[];
}