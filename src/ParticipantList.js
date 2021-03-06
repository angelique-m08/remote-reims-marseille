import React from "react";
import Participant from "./Participant";
import participants from "./participants";

// Un composant pour afficher UN participant
// Participant => <li>Anaïs a un jeton</li>
// comment faire pour afficher des données différentes avec le même composant ?
// props =>
// name: String
// hasToken: Boolean

// où est ce que je dois récupérer la liste de participants ?
// dans ParticipantList

//importer les particpants

function ParticipantList() {
  // console.log(participants);
  return (
    <ul>
      <Participant name="Anaïs" hasToken={true} />
      <Participant name="Angélique" hasToken={false} />
    </ul>
  );
}

export default ParticipantList;
