import {atom} from 'recoil'

export const postsAtom = atom({
    key: 'posts',
    default: []
})
export const currentIdAtom = atom({
    key: 'currentId',   
    default: null
});