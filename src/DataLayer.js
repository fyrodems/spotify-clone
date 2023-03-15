/**
 * context api
 */
import { createContext, useContext, useReducer } from "react";

const DataLayerContext = createContext();

const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// export const useDataLayerValue = useContext(DataLayerContext);

export { DataLayerContext };
export default DataLayer;
