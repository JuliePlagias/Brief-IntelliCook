
export default function Filters({searchType, setSearchType}){
    return (<div className="filters">
         <span>Filtrer par : </span>
        <input type="button" value="Nom de recette" onClick={() => setSearchType('name')} className={`filterButton ${searchType === 'name' ? 'filterButton--active' : ''}`} />

        <input type="button" value="Ingrédients" onClick={() => setSearchType('ingredients')}  className={`filterButton ${searchType === 'ingredients' ? 'filterButton--active' : ''}`} />
      
    </div>)
}