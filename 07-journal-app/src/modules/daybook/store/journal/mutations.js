
export const setEntries = ( state, entries )=> {

    state.entries = [ ...state.entries, ...entries]
    setTimeout(() => {
        state.isLoading = false
    }, 500);

}

export const updateEntry = ( state, entry )=> {
    
    const index = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[index] = entry
}

export const addEntry = ( state, entry )=> {
    state.entries = [entry, ...state.entries]
}

export const deleteEntry = ( state, id ) => {

    const index = state.entries.map( e => e.id ).indexOf( id )
    
    state.entries.splice(index,1)
}