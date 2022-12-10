import styled from "styled-components";

export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};

  width: ${(props) => props.w};

  margin: ${(props) => props.m};

  @media (min-width: 768px) {
    height: 432px;
    text-align: center;
  }
`;

export const ThemeTextDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  gap: ${(props) => props.g};

  width: ${(props) => props.w};

  margin: ${(props) => props.m};

  p {
    width: 100%;

    text-align: center;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    flex-direction: row;

    h2 {
      font-size: 25px;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 17;
      -webkit-box-orient: vertical;
      text-align: start;
    }
  }
`;

export const ThemeSection = styled.section`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  gap: ${(props) => props.g};

  width: ${(props) => props.w};

  img {
    width: 270px;
    height: 270px;
  }

  .img2 {
    display: none;
  }

  span {
    font-size: 18px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-align: center;
  }

  @media (min-width: 768px) {
    span {
      width: 95%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 12;
      -webkit-box-orient: vertical;
      text-align: start;
    }

    .img2 {
      display: flex;
    }

    img {
      width: 40%;
      height: 40%;
    }
  }
`;
