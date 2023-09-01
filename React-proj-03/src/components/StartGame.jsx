import styled from "styled-components"


function StartGame() {
  return (
    <Container>
      <div> <img src="/images/dices.png" alt="dices" /></div>
       <div className="content">
      <h1>Dice Game</h1>
      <Button>Play Now</Button>

       </div>
    </Container>
  )
}

export default StartGame;


const Container = styled.div`
max-width: 1180px;
display:flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content{
    h1{
        font-size: 6rem;
        white-space: nowrap;
    }
}
`;

const Button = styled.button`
padding: 10px 18px;
background:  black;
color:white ;
border-radius: 5px;
min-width:220px;
font-size:1rem;
border:none;
border: 1px solid transparent;
transition:0.4s background ease-in;
cursor: pointer;
margin-left: 19.5em;




&:hover{
    background-color: white;
    border: 1px solid black;
    color:black;
    transition:0.3s background ease-in;
}

`