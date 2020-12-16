export const initialState = {
    fromCountry: "",
    toCountry: ""
};


const reducer = (state,action)=>{ 
   console.log("action",action);
    
    switch(action.type) {
        case "FROM_COUNTRY":
            return {
                ...state,
                fromCountry: action.fromCountry
            };
        case "TO_COUNTRY":
            return {
                    ...state,
                    toCountry: action.toCountry
                };
        default:
                return state;
        }
    }
    
    export default reducer;