//import {getImageUrl} from '././utils.js';

import {getImageUrl} from "../utils";

export default function Avatar({person}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={70}
      height={70}
    />
  );
}
