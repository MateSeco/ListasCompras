import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from "../components/MainView";
import ListView from "../components/ListView";
import CreateList from "../components/CreateList";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={MainView} />
      <Route path="/lista" component={ListView} />
      <Route path="/crear-lista" component={CreateList} />
    </Router>
  );
}
