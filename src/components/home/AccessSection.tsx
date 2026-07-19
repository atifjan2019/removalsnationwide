import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const accessPoints = [
  {
    heading: "Parking suspensions",
    body: "Most London residential streets require a parking suspension to secure a loading bay for the removal vehicle. Suspensions are applied through the relevant borough council, typically four to seven working days before the move date. Our operations team arranges the suspension as part of move planning and confirms the approval before move day.",
  },
  {
    heading: "Red routes and bus lanes",
    body: "London's red routes prohibit stopping at any time. All-day bus lanes on major arterial roads create additional restrictions during morning and evening rush hours. Our drivers know which routes permit loading and plan delivery access accordingly.",
  },
  {
    heading: "School Streets",
    body: "School Streets are camera-enforced road closures around primary schools, typically operating Monday to Friday from 08:00 to 09:00 and 15:00 to 16:30. In 2026 the School Streets network across London boroughs continues to expand. Moves near affected roads are timed outside these windows or routed to avoid them.",
  },
  {
    heading: "Docklands, Canary Wharf and new builds",
    body: "Modern developments in Docklands, Canary Wharf and across new-build sites restrict removal vehicle access to designated loading bays and goods lifts with mandatory booking windows. Our team contacts building management in advance to confirm access times and lift availability.",
  },
  {
    heading: "Mansion blocks and concierge buildings",
    body: "Older mansion blocks often require concierge approval, goods lift reservations and protective corridor matting. Our surveyor identifies all access requirements at the pre-move survey and books what is needed before move day.",
  },
  {
    heading: "Top-floor flats and narrow stairs",
    body: "Top-floor properties without a suitable goods lift require a furniture hoist or a stair-carry crew with an assessed access route. Narrow Victorian staircases in period properties need careful dismantling and measured furniture routing. Both are standard services, not extras.",
  },
];

export default function AccessSection() {
  return (
    <section
      id="access"
      className="bg-brand-navy py-20 text-white"
      aria-labelledby="access-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          tone="light"
          eyebrow="Parking, Loading and Access Intelligence"
          title="Local Parking, Access and Council Rules"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/80">
          London moving-day logistics involve more than the move itself. Borough parking rules,
          road enforcement and building access restrictions affect every London removal. Our
          team assesses and manages all of these as part of the move, not as an afterthought.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {accessPoints.map((point, i) => (
            <div
              key={point.heading}
              className="rounded-2xl border border-white/10 bg-white/8 p-7 transition-colors duration-200 hover:bg-white/[0.12]"
              data-reveal
              data-delay={String((i % 3) + 1)}
            >
              <h3 className="text-base font-bold uppercase tracking-wide text-brand-red">
                {point.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{point.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base leading-relaxed text-white/80">
            Every survey includes a dedicated access assessment. Parking permits, loading bay
            bookings and access arrangements are confirmed before move day at no extra charge.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/bookservice#quick-quote" variant="red" size="lg">
              Book a Free Survey
            </Button>
            <Button href="/areas" variant="outline-light" size="lg">
              Areas We Cover
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
