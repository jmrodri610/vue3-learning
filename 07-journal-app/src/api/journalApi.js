import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://journal-app-f31aa-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi