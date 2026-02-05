export default function CommunityPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Community {params.id}</h1>
    </div>
  );
}
