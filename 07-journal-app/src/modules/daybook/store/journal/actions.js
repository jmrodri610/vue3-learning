import journalApi from "../../../../api/journalApi";

export const loadEntries = async ({ commit })=> {
    const { data } = await journalApi.get('/entries.json')

    if(!data) {
        commit('setEntries', [])
        return
    }
    
    const entries = []

    for( let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
}

export const updateEntry = async ({commit}, entry) => {

    const { date, text } = entry;

    const dataToSave = { date, text }

    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)

    commit('updateEntry', { ...entry })


}

export const createEntry = async ({commit}, entry)=> {

    const response = await journalApi.post(`/entries.json`, entry)

    const id = response.data.name

    commit('addEntry', { id, ...entry })

    return id
}

export const deleteEntry = async ({commit}, id)=> {


    await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry', id)

}