import { EntriesState } from '.';
import { Entry } from '../../interfaces/entry';

type EntriesActionType =
    | { type: '[Entry] Add-Entry'; payload: Entry }
    | { type: '[Entry] Entry-Updated'; payload: Entry }
    | { type: '[Entry] Load-Data'; payload: Entry[] }
    | { type: '[Entry] Delete-Entry'; payload: string };

export const entriesReducer = (
    state: EntriesState,
    action: EntriesActionType,
): EntriesState => {
    switch (action.type) {
        case '[Entry] Add-Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };
        case '[Entry] Entry-Updated':
            return {
                ...state,
                entries: state.entries.map((entry) => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                }),
            };
        case '[Entry] Load-Data':
            return {
                ...state,
                entries: [...action.payload],
            };
        case '[Entry] Delete-Entry':
            return {
                ...state,
                entries: state.entries.filter(
                    (entry) => entry._id !== action.payload,
                ),
            };
        default:
            return state;
    }
};
