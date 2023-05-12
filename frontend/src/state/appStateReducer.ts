import { Action } from "./actions"


export type Bookable = {
    id: string,
    group: string,
    title: string,
    notes: string,
    days: number[],
    sessions: number[]
}
// export type Booking = {

// }[]

export type User = {
    id: string,
    name: string,
    img: string,
    title: string,
    notes: string
}




export type AppState = {
    bookables: Bookable[],
    // bookings: Booking[]
    users: User[],
    sessions: string[],
    days: string[]
}





export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {


        default: {
            return state
        }
    }
}