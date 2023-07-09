import { FC, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { entriesApi } from '@/apis';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
};

interface Props {
    children: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async (description: string) => {
        const { data } = await entriesApi.post<Entry>('/entries', {
            description,
        });

        dispatch({ type: '[Entry] Add-Entry', payload: data });
    };

    const updateEntry = async (
        { _id, description, status }: Entry,
        showSnackBar = false,
    ) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
                description,
                status,
            });
            dispatch({ type: '[Entry] Entry-Updated', payload: data });
            if (showSnackBar) {
                enqueueSnackbar('Entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        } catch (error) {
            console.log({ error });
        }
    };

    const deleteEntry = async (id: string) => {
        await entriesApi.delete(`/entries/${id}`);
        dispatch({ type: '[Entry] Delete-Entry', payload: id });
        enqueueSnackbar('Entrada eliminada', {
            variant: 'success',
            autoHideDuration: 1500,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            },
        });
    };

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('entries');
        dispatch({ type: '[Entry] Load-Data', payload: data });
    };

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider
            value={{ ...state, addNewEntry, updateEntry, deleteEntry }}
        >
            {children}
        </EntriesContext.Provider>
    );
};
