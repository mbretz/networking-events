export default function EventPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Event {params.id}</h1>
    </div>
  );
}
