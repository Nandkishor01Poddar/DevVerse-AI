import { technologies } from "../../data/technologies";
import Badge from "../ui/Badge/Badge";
import Container from "../ui/Container/Container";
import Section from "../ui/Section/Section";

function TrustedBy() {
  return (
    <Section>
      <Container>
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Built with Modern Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Technologies Powering DevVerse AI
          </h2>
        </div>

        {/* Technology Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TrustedBy;