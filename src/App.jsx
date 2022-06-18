import { useContext } from "react";

import Selector from "./components/Selector";
import Header from "./components/Header";
import Formulario from "./components/ButtonsResume";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ThemeContext from "./storage/storage";

function App() {
  
  const context = useContext(ThemeContext);

  return (
    <>
      <Header />
          <Main>
            {console.log(context)}
            {/* {context.params.map((parametro) => (
              <Selector 
                key={parametro}
                placeholderMessage={parametro} 
              />
            ))} */}
            <Formulario />
          </Main>
      <Footer />
    </>
  );
}

export default App;
