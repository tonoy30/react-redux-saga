import { DECREMENT, INCREMENT, COUNTER_INCREMENT, COUNTER_DECREMENT } from './types';

export const incrementByOne = () => ({
    type: INCREMENT
}
)
export const decrementByOne = () => ({
    type: DECREMENT
}
)
export const increment = () => ({
    type: COUNTER_INCREMENT
})
export const decrement = () => ({
    type: COUNTER_DECREMENT
})