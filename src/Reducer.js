export const initialState = {
    fromCountry: "Select Country",
    toCountry: "Select Country",
    chart:false
};


const reducer = (state,action)=>{ 
   
    
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
        case "SHOW_CHART":
            return {
                ...state,
                chart: action.chart
            }
        default:
                return state;
        }
    }
    
    export default reducer;