import { TExercise } from "./TExercise.type";
import { TTraining } from "./TTraining.type";


export type TSession = {

    id: number;

    description: string;

    time: string;

    training: TTraining;

    exercises: TExercise[];
}