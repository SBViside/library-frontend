import styled from "styled-components";

const StyledImage = styled.div`
  width: 120px;
  height: 120px;
  background-image: url("${(props) => props.url}");
  background-repeat: no-repeat;
  background-size: contain;
`;

function BookImage(props) {
  return <StyledImage {...props} />;
}

export default BookImage;
