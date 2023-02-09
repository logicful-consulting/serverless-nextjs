import axios from "axios";

export const getServerSideProps = async (ctx) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ctx.query.id}`);

  return {
    props: {
      resource: {
        ...data
      }
    }
  }
}

export default ({ resource }) => {
  return (
    <main>
      <h1>SSR Page</h1>
      <p>ID: {resource.id}</p>
      <p>Name: {resource.name}</p>
      <p>Weight (KG): {resource.weight}</p>
    </main>
  )
}