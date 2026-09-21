export function PriceAmount({ amount }: { amount: string }) {
  const match = amount.match(/^(เริ่มต้น)\s(.+)$/);
  if (!match) return amount;
  return (
    <>
      <span className="price-prefix">{match[1]}</span> {match[2]}
    </>
  );
}
