function StatCard({ number, label }) {
  return (
    <div className="rounded-2xl border p-8 text-center bg-white shadow-sm hover:shadow-lg transition">
      <h2 className="text-5xl font-black text-indigo-600">
        {number}
      </h2>

      <p className="mt-4 text-gray-600">
        {label}
      </p>
    </div>
  );
}

export default StatCard;