
import { styled } from "styled-components";

const NumberSelector = ({seterror,error,SelectedNumber,setSelectedNumber}) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];


  const numberSelectorHandler = (value) => {
   setSelectedNumber(value);
   seterror("");

  };

  
  console.log(SelectedNumber)
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
   <div className="flex">
    
   {
        arrNumber.map((value, i) =>(
          <Box 
          isSelected={value == SelectedNumber}
          key={i}  onClick={() => numberSelectorHandler(value)}
          
          >{value}</Box>
        ))}
   </div>
   <p>Select Number</p>
    </NumberSelectorContainer>  
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  
.flex{
  
 display: flex;
 justify-content: center;
  gap: 24px;
  
}
p{
  font-size: 24px;
  font-weight: 700px;
}
.error{
color: red;
}

`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  font-size: 24px;
  font-weight: 700;
 place-items: center;
 color: ${(props) => (!props.isSelected ? "black":"white")};
background-color: ${(props) => (props.isSelected ? "black":"white")};


`;