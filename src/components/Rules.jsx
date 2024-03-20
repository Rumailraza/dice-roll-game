import { styled } from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>

        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>after click on dice if selected number is equal to dice number you will gey same point as dice{" "}</p>
            <P>i fyou got worng guess then 2 point will be dedcuted</P>
        </div>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer = styled.div `
background-color: #fbf1f1;
padding: 20px;
h2{
    font-size: 24px;
}
text{
 margin-top: 24px;
}
`;