import Input from "./Layout/Input"

const Search = ({ search, setSearch }) => {
  return (
    <>
        <Input 
          id="searchInput"
          type="text"
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Tarefa..."
        />
    </>
  )
}

export default Search