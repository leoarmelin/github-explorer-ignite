import styled from "styled-components";

export const Container = styled.li`
  & + li {
    margin-top: 20px;
  }
`;

export const Title = styled.strong``;

export const Description = styled.p`
  margin-top: 8px;

  font-size: 14px;

  columns: #444;
`;

export const Link = styled.a`
  display: inline-block;

  margin-top: 16px;

  text-decoration: none;

  color: #8257e6;
`;
