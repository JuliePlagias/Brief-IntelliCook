
export default function Ingredient({name, quantity, unit})
{
    const writeGoodDeOrD = (ingredient) => {
        const d = ["a", "e", "i", "o", "u", "y", "h"];
        return unit? d.find((l) => l === ingredient[0]) ? " d'" : " de ":"";
      };
      
    return (
        <>
        <img src={`/assets/images/${name}.jpg`} alt={name}/>
        <p>{quantity} {unit} {writeGoodDeOrD(name)}{name}</p>
        </>
    )
}
