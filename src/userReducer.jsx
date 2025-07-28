import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const uu = state.find(f=>f.id == id);
            if(uu){
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action)=>{
            const { id } = action.payload;
            const delUser = state.find(f=>f.id == id)
            if(delUser){
               return state.filter(f=>f.id!=id)
            }
        }

    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer