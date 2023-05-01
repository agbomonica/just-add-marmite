import { client } from "../contentful_db/connection";

// components
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  const response = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: response.items,
    },
  };
}

export default function Recipes({ recipes }) {
  return (
    <>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}

        <style jsx>{`
          .recipe-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
            row-gap: 40px;
          }
        `}</style>
      </div>
    </>
  );
}
