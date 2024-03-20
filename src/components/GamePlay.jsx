import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "./styled/Button";
import { OutlineButton } from "./styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score,setscore]=useState(0);
  const [SelectedNumber,setSelectedNumber] =useState();
  const [currentdice,setCurrentdice]=useState(1);
  const [error, seterror]= useState();

const resetScore =() =>{
  setscore(0);

}


  const generateRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max - min) + min);
  };
  const roleDice = () =>{
    if (!SelectedNumber) {

       seterror("You have not selected any number");

      return;
    }

   
    const randomNumber = generateRandomNumber(1,7);
    setCurrentdice((prev)=>randomNumber);

    
   
     if(SelectedNumber == randomNumber){
      setscore((prev) => prev + randomNumber);

     } else{

      setscore((prev) => prev - 2);
     }


   setSelectedNumber (undefined);

  };






  return (
   <MainContainer>
   
   <div className="top_section">
   <TotalScore score={score}/>
    <NumberSelector 
    error={error}
    seterror={ seterror}
    SelectedNumber={SelectedNumber}  setSelectedNumber={setSelectedNumber} />
   </div>
   <RoleDice 
   currentdice={currentdice}  roleDice={roleDice}
   />
   <div className="btn">
   <OutlineButton
    onClick={resetScore}
   >Reset </OutlineButton>
   <Button> Show Rules</Button>
   
   </div>

   </MainContainer>
  
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top_section{

  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.btn{

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
}
  
`;