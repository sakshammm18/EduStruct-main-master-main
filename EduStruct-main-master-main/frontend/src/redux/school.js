import { createSlice } from "@reduxjs/toolkit";

const schoolSlice= createSlice({
    name:"school",
    initialState:{
        loading:false,
     allSchools:[],
        schools:[]
},

reducers:{
    // actions
    setLoading:(state, action) => {
        state.loading = action.payload;
    },
    setSchools:(state, action) => {
        state.schools = action.payload;
    },
    updateSchool: (state, action) => {
        const updated = action.payload;
        const index = state.schools.findIndex(s => s._id === updated._id);
        if (index !== -1) {
          state.schools[index] = updated;
        }
      },
      deleteSchool: (state, action) => {
        state.schools = state.schools.filter(s => s._id !== action.payload);
      },
      setAllSchools: (state, action) => {
        state.allSchools = action.payload;
      }
}

}
);


export const {setLoading, setSchools, updateSchool, deleteSchool, setAllSchools} = schoolSlice.actions;
export default schoolSlice.reducer;