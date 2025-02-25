export default function MealDetailsPage({ params }) {
  return (
    <main>
      <p style={{ color: "white", textAlign: "center" }}>{params.slug}</p>
    </main>
  );
}
