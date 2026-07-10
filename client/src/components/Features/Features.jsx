import Container from "../ui/Container/Container";
import Section from "../ui/Section/Section";
import Heading from "../ui/Heading/Heading";

import FeatureCard from "../FeatureCard/FeatureCard";

import { features } from "../../data/features";

function Features() {
  return (
    <Section>
      <Container>

        <div className="text-center">
          <Heading>
            Everything You Need
          </Heading>

          <p className="mt-5 text-gray-600">
            Build your developer career with AI-powered tools.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}

export default Features;