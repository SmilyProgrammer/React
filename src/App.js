import React, { createContext } from "react";
import Practice from "./components/Practice";
// import ComponentC from "./components/ComponentC";
// export const UserContext = createContext();
// export const ChannelContext = createContext();

function App() {
  return (
    <div>
      {/**
       * <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
       */}
      <Practice />
    </div>
  );
}

export default App;
