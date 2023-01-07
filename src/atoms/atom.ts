import { atom } from 'recoil';

export const foodState = atom({
    key: 'foodState',
    default: [] as Food[],
});
