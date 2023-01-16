import React from "react";
import PetCard from "./PetsCard";

const pets = [
    { id: 1, name: "Fezzik",favouriteSnack:["Peanut Butter", "Soccer Balls"],isAdopted: true},
    { id: 2, name: "Lucy", image: "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",favouriteSnack:["Cake", "Bacon"],isAdopted: false},
    { id: 3, name: "Blaise", image: "https://www.thesprucepets.com/thmb/P8d4QM0bI4rJh1WygZDI8f8kNV4=/1000x1000/smart/filters:no_upscale()/GettyImages-870255568-8639765b08c6441dbe35ed72e2d8fb48.jpg",favouriteSnack: ["Pigeons", "Grass", "Chicken"],isAdopted: false }
  ]

  function Pets(){
    const arrayOfPets = pets.map((pet)=>{
        return(
          <PetCard key = {pet.id} name={pet.name} image={pet.image} favouriteSnack = {pet.favouriteSnack} isAdopted={pet.isAdopted} />
      
        )
      })
      return(
        <>
        {arrayOfPets}
        </>
      )

  }
  export default Pets;