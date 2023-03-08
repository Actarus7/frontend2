import React from 'react';
import { TComment } from '../types/TComment.type';

export const CommentsContext = React.createContext({
    comments: [] as TComment[],
    setComments: (value: TComment[]) => {},
});