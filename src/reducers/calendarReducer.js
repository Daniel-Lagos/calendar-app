import {types} from "../types/types";
/*{
    id: new Date().getTime(),
    title: 'Cumpleanios del jefe',
    start: moment().toDate(), //Es como un new Date
    end: moment().add(2, 'hours').toDate(),
    notes: 'Comprar leche',
    user: {
    uid: '123',
        name: 'Daniel'
}
}*/
const initialState = {
    events: [],
    activeEvent: null
}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };
        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            };
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(event => (event.id === action.payload.id)
                    ? action.payload
                    : event)
            }
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(event => event.id !== state.activeEvent.id),
                activeEvent: null
            }

        case types.eventLoaded:
            return {
                ...state,
                events: [
                    ...action.payload
                ]
            }
        case types.eventLogout:
            return {
                ...initialState
            }
        default:
            return state;

    }
}