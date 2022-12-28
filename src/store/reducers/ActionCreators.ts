import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlise } from "./UserSlice";


// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//     try{

//         dispatch(userSlise.actions.usersFetching())
//        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
//         dispatch(userSlise.actions.userFetchingSuccess(response.data))
//     } catch(e:any) {
//         dispatch(userSlise.actions.userFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) => {
    try{
        const respone = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return respone.data;
    }catch(e){
        return thunkAPI.rejectWithValue("не удалось загрузить")
    }
    }
)
