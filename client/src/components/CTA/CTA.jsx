import Container from "../ui/Container/Container";
import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";

function CTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl bg-indigo-600 px-8 py-20 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Become a Better Developer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
            Learn faster, build better projects,
            prepare for placements and grow your
            career with DevVerse AI.
          </p>

          <div className="mt-10">
            <Button className="bg-white  text-indigo-600 hover:bg-gray-100">
              Get Started
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}

export default CTA;