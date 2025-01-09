
export default function Ingredient({ name, quantity, unit }) {
  const writeGoodDeOrD = (ingredient) => {
    const d = ["a", "e", "i", "o", "u", "y", "h"];
    return unit ? (d.find((l) => l === ingredient[0]) ? " d'" : " de ") : "";
  };
  const singularOrPlural = (quantity) => {
    return quantity > 1 ? "s" : "";
  };

  return (
    <div className="ingredient">
      <img
        src={`/assets/images/ingredients/${name}.jpg`}
        alt={name}
      />
      <p>
        {quantity} {unit} {writeGoodDeOrD(name)}
        {name}
        {singularOrPlural(quantity)}
      </p>
    </div>
  );
}
