export default function QuoteCard({ Icon, title, quote }) {
  const ReactIcon = Icon;
  return (
    <div className="text-center">
      <ReactIcon className="text-7xl mx-auto text-green-600" />
      <h4 className="text-xl font-bold py-2 uppercase">{title}</h4>
      <p className="font-medium">{quote}</p>
    </div>
  );
}
