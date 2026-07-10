import Container from "../ui/Container/Container";
import Section from "../ui/Section/Section";
import Heading from "../ui/Heading/Heading";

import StatCard from "../StatCard/StatCard";

import { stats } from "../../data/stats";

function Stats() {
  return (
    <Section>
      <Container>

        <div className="text-center">
          <Heading>
            Numbers That Inspire Confidence
          </Heading>

          <p className="mt-5 text-gray-600">
            DevVerse AI is designed to help every developer grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <StatCard
              key={item.id}
              number={item.number}
              label={item.label}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}

export default Stats;