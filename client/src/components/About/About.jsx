import Container from "../ui/Container/Container";
import Section from "../ui/Section/Section";
import Heading from "../ui/Heading/Heading";

import { aboutItems } from "../../data/about";

function About() {
  return (
    <Section>
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <Heading>
              Why DevVerse AI?
            </Heading>

            <p className="mt-6 text-gray-600 leading-8">
              DevVerse AI combines AI, learning,
              projects and placement preparation
              into one modern developer platform.
            </p>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {aboutItems.map((item) => (

              <div
                key={item.id}
                className="rounded-2xl border p-6 hover:shadow-lg transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </Section>
  );
}

export default About;