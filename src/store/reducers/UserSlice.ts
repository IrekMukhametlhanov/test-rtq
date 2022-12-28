import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    IsLoading: boolean;
    error: string;
    
}


const initialState:UserState = {
     users: [],
     IsLoading:false,
     error: ''
     

}

export const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>)=>{
            state.IsLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state)=>{
            state.IsLoading = false;
           
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>)=>{
            state.IsLoading = false;
            state.error = action.payload
        },
    }
})

export default userSlise.reducer;