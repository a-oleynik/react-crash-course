import {people} from "./data/people";
import Profile from "./components/Profile";

export default function Gallery() {

  return (
    <div>
      <h1>Notable Scientists</h1>
      <div>{people.map(function (person) {
        return (<Profile person={person}/>)
      })}</div>

    </div>
  );
}

