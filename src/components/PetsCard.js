import React from "react";
import Button from "./Button";

function PetCard({favouriteSnack,name,image = "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"},isAdopted) {
    const snackList =favouriteSnack.map((snack)=>{
        return(
            <li key={snack}>{snack}</li>
        )
    })
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        {isAdopted ? <Button label="Adopted"/>: null}
        <h3>Favourite Snacks</h3>
        <ul> 
            {snackList}
        </ul>
      </div>
    )
  }
  export default PetCard;