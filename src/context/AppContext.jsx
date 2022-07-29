import React, {
    createContext,
    Dispatch,
    useMemo,
    useReducer,
} from 'react'

interface State {
    modal: string
}

const initialState: State = {
    modal: 'false',
}


export const AppContext = createContext({
    state: initialState,
    dispatch: (() => {}) as Dispatch<{
      type: string
      data: any
    }>
})

export const AppProvider: React.FC = ({ children }) => {
    const reducer = (state: State, action: { type: string; data: any }) =>
    action.type.slice(0, 4) === 'set_'
      ? {
          ...state,
          [action.type.replace('set_', '')]: action.data,
        }
      : state

    const [state, dispatch] = useReducer(reducer, initialState)
    const value = useMemo(
        () => ({
          state,
          dispatch,
        }),
        [state],
    )
    //console..log(state.modal)
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
