import axios from "axios";

const deleteNoteService = (note, authToken) => 
    axios.delete(`/api/notes/${note._id}`, { note: note }, { headers: { authorization: authToken }});

export { deleteNoteService };