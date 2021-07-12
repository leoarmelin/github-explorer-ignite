import { Container, Title, Description, Link } from "../styles/RepositoryItem";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <Container>
      <Title>{repository.name}</Title>
      <Description>{repository.description}</Description>

      <Link href={repository.html_url}>Acessar repositório</Link>
    </Container>
  );
}
