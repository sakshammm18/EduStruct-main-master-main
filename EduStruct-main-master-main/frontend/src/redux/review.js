import { createSlice } from "@reduxjs/toolkit";

const reviewSlice= createSlice({    
    name:"review",
    initialState:{
        loading:false,
     allReviews:[],
        reviews:[]
},

reducers:{
    // actions
    setLoading:(state, action) => {
        state.loading = action.payload;
    },
    setReviews:(state, action) => {
        state.reviews = action.payload;
    },    
      setAllReviews: (state, action) => {
        state.allReviews = action.payload;
      }
}

}
);


export const {setLoading, setReviews, setAllReviews} = reviewSlice.actions;
export default reviewSlice.reducer;