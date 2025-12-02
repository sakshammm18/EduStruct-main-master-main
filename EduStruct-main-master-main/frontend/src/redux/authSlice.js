import { createSlice } from "@reduxjs/toolkit";






const authSlice= createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null,
        allUsers:[],
       
},

reducers:{
    // actions
    setLoading:(state, action) => {
        state.loading = action.payload;
    },
    setUser:(state, action) => {
        state.user = action.payload;
    },
    setAllUsers:(state, action) => {
        state.allUsers = action.payload;
    }
},

}
);


export const {setLoading, setUser, setAllUsers} = authSlice.actions;
export default authSlice.reducer;