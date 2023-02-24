import { TSession } from "./TSesssion.type";
import { TTraining } from "./TTraining.type";


export type TExercise = {

    id: number;

    title: string;

    content: string;

    time: string;

    beginner: string;

    medium: string;

    expert: string;

    rest_time: string;

    material: string;

    video: string;

    image: string;

    training: TTraining;

    session: TSession;
}