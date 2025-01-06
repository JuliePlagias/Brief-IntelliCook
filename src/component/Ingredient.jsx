const size = 150;

export default function Ingredient({ name, quantity, unit }) {
  const writeGoodDeOrD = (ingredient) => {
    const d = ["a", "e", "i", "o", "u", "y", "h"];
    return unit ? (d.find((l) => l === ingredient[0]) ? " d'" : " de ") : "";
  };
  const singularOrPlural = (quantity) => {
    return quantity > 1 ? "s" : "";
  };

  return (
    <>
      <img
        src={`/assets/images/${name}.jpg`}
        alt={name}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
      <p>
        {quantity} {unit} {writeGoodDeOrD(name)}
        {name}
        {singularOrPlural(quantity)}
      </p>
    </>
  );
}
