import { useEffect, useState } from "react";
import { Container, Title, Content } from "../styles/RepositoryList";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/leoarmelin/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <Container>
      <Title>Lista de repositórios</Title>

      {repositories.map((repository) => (
        <RepositoryItem key={repository.name} repository={repository} />
      ))}
      <Content></Content>
    </Container>
  );
}
