import React from "react";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

export default function Content({ nasaPicData }) {
  const { url, date, title, media_type, explanation } = nasaPicData;
  return (
    <StyledSection>
      <StyledHeader>
        <h1>
          {" "}
          NASA PHOTO OF THE DAY
          <br></br>
          {date}
        </h1>
      </StyledHeader>
      {media_type === "video" ? (
        <ReactPlayer url={url} />
      ) : (
        <StyledImg src={url} alt={title} />
      )}
      <StyledTextContent>
        <h2> {title} </h2>
        <p> {explanation} </p>
        <img alt=""></img>
      </StyledTextContent>
      <StyledFooter>
        <nav>
          <a href="https://apod.nasa.gov/apod/astropix.html">
            {" "}
            Go to the Source!{" "}
          </a>
        </nav>
        <h4>
          {" "}
          Project By Chance Swartz! Be on the lookout for more of his work!
        </h4>
      </StyledFooter>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: #222222;
  color: #d8d8d8;
  text-align: center;
`;

const StyledHeader = styled.header`
  color: #d8d8d8;
  background-color: #111111;
`;

const StyledImg = styled.img`
  width: 90%;
  margin: 0% 5% 0 5%;
`;

const StyledTextContent = styled.div`
  color: #d8d8d8;
  background-color: #222222;
  margin: 1% 2% 0 2%;
`;

const StyledFooter = styled.footer`
  color: #d8d8d8;
  background: #111111;
`;
