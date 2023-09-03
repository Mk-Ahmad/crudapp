import { createSlice } from "@reduxjs/toolkit";
import userLists from "./Data";

const userSlice = createSlice({
    name : "users",
    initialState : userLists,
    reducers : {
      
      addUsers : (state, action) =>{
      state.push(action.payload)
      },

      updateUser : (state , action) =>{
       const {id, name , email} = action.payload;
       const upUser = state.find(user => user.id == id);
       if(upUser){
        
        upUser.name =name,
        upUser.email =email 
               }
      },
    delUser : (state , action) => {
        const {id} = action.payload;
        const upUser = state.find(user => user.id == id);
        if(upUser){
          
          return state.filter(f => f.id !== id)
        
                }
    },
    delAllUser : (state , action) => {
        state.splice(action.payload)
    }
    }
})
export const {addUsers , updateUser , delUser , delAllUser} = userSlice.actions
export default userSlice.reducer;