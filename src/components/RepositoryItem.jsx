import { Container, Title, Description, Link } from "../styles/RepositoryItem";

export function RepositoryItem({ repository }) {
  return (
    <Container>
      <Title>{repository.name}</Title>
      <Description>{repository.description}</Description>

      <Link href={repository.html_url}>Acessar repositório</Link>
    </Container>
  );
}
