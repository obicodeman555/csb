import { nanoid } from "nanoid";
import React, { Dispatch, FC, createContext, useContext, useReducer } from "react";
import { AppState, Bookable, User } from "./appStateReducer";
import { appStateReducer } from "./appStateReducer";
import { Action } from "./actions";


const appData: AppState = {
    bookables: [
        {
            id: nanoid(),
            group: "Rooms",
            title: "Games Room",
            notes: "Table tennis, table football, pinball! Please tidy up!",
            sessions: [
                0,
                2,
                4
            ],
            days: [
                0,
                2,
                3,
                4,
                5,
                6
            ]
        }
    ],
    users: [
        {
            id: nanoid(),
            name: "Mark",
            img: "",
            title: "Envisioning Sculptor",
            notes: "With the company for 15 years, Mark has consistently..."
        }
    ],
    // bookings: [],
    sessions: [
        "Breakfast",
        "Morning",
        "Lunch",
        "Afternoon",
        "Evening"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
}




type AppStateContextProps = {
    bookables: Bookable[],
    users: User[],
    sessions: string[],
    days: string[]
    dispatch: Dispatch<Action>
}



const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);


export const AppStateProvider: FC<React.PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(appStateReducer, appData);
    const { bookables, users, sessions, days } = state


    return (
        <AppStateContext.Provider value={{ bookables, users, sessions, days, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}



export const useAppState = () => {
    return useContext(AppStateContext)
}