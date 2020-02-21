import { INCREMENT, DECREMENT } from './types';

export const incrementByOne = () => {
    return {
        type: INCREMENT
    }
}
export const decrementByOne = () => {
    return {
        type: DECREMENT
    }
}