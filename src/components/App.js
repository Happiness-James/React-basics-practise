import '../App.css';
import Cards from './Cards';
import Header from './Header';
import Button from './Button';
import Pets from './Pets';


function App() {

  return (
    <>
      <Header isLoggedIn={true}/>
      <Pets/>
      <Cards header="Welcome to PetLand!">
        <em>Find your dream pet</em>
      </Cards>
      <Cards header="What pets would you like to see?">
        <Button image="😸" label="Cats" />
        <Button image="🐕" label="Dogs" />
      </Cards>
    </>
  );
}

export default App;
