import { createSlice } from "@reduxjs/toolkit";

const getId = createSlice({
    name: "id",
    initialState: {valor: 0},
    reducers:{
        ReceberId: (state, id) =>{
            state.valor  = id.payload;
            console.log(state.valor);
            window.scrollTo({
                behavior: "instant",
                top: 160
            })
        },
    },
});

export const {ReceberId} = getId.actions;
export default getId.reducer;