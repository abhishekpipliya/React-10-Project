import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/navigation";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}
export default App;

/*import "./App.css";

import Navigation from "./components/navigation";

const App = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default App;
*/
