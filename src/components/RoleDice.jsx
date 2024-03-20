import { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({currentdice,roleDice}) => {

   




  return (
    <DiceContainer>
        
       <div className='dice' onClick={roleDice}>
       <img src={`/images/dice/dice_${currentdice}.png`} alt="diceimage" />
       </div>
       <p>Click on Dice to Roll</p>
        </DiceContainer>
  )
}

export default RoleDice;
const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

p{
font-size: 24px;


}
.dice{
    cursor: pointer;
}






`;