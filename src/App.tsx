import { getCocktailsByName } from "./api/getCocktailsByName"
import React from 'react'

function App() {
  const data = getCocktailsByName("vodka")
  console.log(data)
  return (
    <div>
      hello
    </div>
  );
}

export default App;
