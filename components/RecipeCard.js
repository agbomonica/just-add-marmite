import Image from "next/image";
import Link from "next/link";

function RecipeCard({ recipe }) {
  const {
    slug,
    title,
    ingredients,
    cookingTime,
    method: cookingMethod,
    featuredImage,
    thumbnail,
  } = recipe.fields;

  console.log();

  return (
    <div className="recipe">
      <div className="recipe-thumbnail">
        {/* <Image src={thumbnail.fields.file.url} width={550} height={366} /> */}
      </div>

      <div className="recipe-content">
        <h4 className="recipe-title">{title}</h4>
        <p className="recipe-cooking-time">{`Takes approx ${cookingTime} mins to make`}</p>
        <div className="recipe-cta">
          <Link href={`/recipes/${slug}`}>Cook this</Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
