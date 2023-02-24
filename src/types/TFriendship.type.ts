import { TUser } from "./TUser.type";


export type TFriendship = {

    id: number;

    status: boolean;

    userSender: TUser;

    userReceiver: TUser;
}