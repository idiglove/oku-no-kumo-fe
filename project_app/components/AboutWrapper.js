import styled from "styled-components";

function AboutWrapper() {
  return (
    <Container>
      <p>
        Were an interactive community of avid boardgamers - be it in sharing
        Reviews, participating <br></br>
        and competing in Online Battles, achieving Challenges, and more.
        <br></br>
        We want you to play more of your favorite board games with friends,
        family and even potential friends!
        <br></br>
        We are in a very early stage of development, thus bugs and hiccups are
        expected. Because of this,<br></br> any feedback is welcome to make this
        place the best! So please contact us to give any feedback here.
        <br></br>
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(53, 53, 53);
  color: white;
  padding: 0px 2rem 2rem;
  text-align: center;
  height: 250px;

  p {
    position: absolute;
    text-align: center;
    margin: 0px auto;
    width: 50%;
    display: block;
    left: 380px;
    top: 800px;
    font-family: Quicksand-Regular;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
`;

export default AboutWrapper;
