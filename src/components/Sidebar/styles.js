import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #121212;
  color: #b3b3b3;
  height: 100%;
  width: 200px;

  justify-content: space-between;
  flex-direction: column;
  display: flex;

  > div {
    padding: 25px;
  }
`;


export const Nav = styled.ul`
  list-style: none;

  &:not(:first-child) {
    margin-top: 25px;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;

      font-weight: ${({ main }) => main ? "bold" : "normal"};

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;

export const NewPlayList = styled.button`
  background-color: transparent;
  display: flex;
  border: 0;
  border-top: 1px solid #282828;
  color: #b3b3b3;
  align-items: center;
  padding: 15px 25px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;