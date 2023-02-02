import React from "react";
import Product from "./Product";
import Info from "./Info";

function App() {
  return (
    <div>
      <h1>Manish Project</h1>
      <Product
        name="Amazon Echo"
        description="Your AI assistance"
        price={59.99}
      />
      <Info id="12312" add="varanasi" />
      {/*Product name,description,price*/}
      {/*Product name,description,price*/}
      {/*Product name,description,price*/}
      {/*Product name,description,price*/}
    </div>
  );
}

export default App;
