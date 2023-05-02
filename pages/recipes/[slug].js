import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../contentful_db/connection";
import Skeleton from "../../components/Skeleton";

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "recipe" });

  return {
    fallback: false,
    paths: response.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const { items } = await client.getEntries({
    content_type: "recipe",
    // SELECT * from contentful WHERE 'fields.slug'=slug
    "fields.slug": slug,
  });

  return {
    revalidate: 1,
    props: { recipe: items[0] },
  };
}

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;

  const {
    title,
    cookingTime,
    method,
    ingredients,
    featuredImage: { fields },
  } = recipe.fields;

  return (
    <div>
      <div className="banner">
        <Image
          // absolute url
          src={`https:${fields.file.url}`}
          width={fields.file.details.image.width}
          height={fields.file.details.image.height}
          alt={title}
        />
        <h2>{title}</h2>
      </div>

      <div className="info">
        <p>Take about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>

        {ingredients.map((ing) => (
          <span key={ing}>{ing}</span>
        ))}
      </div>

      <div className="method">
        <h3>Method</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>

      <style>{`
        h2, h3 {
          text-transform: uppercase;
        }

        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }

        .info p {
          margin: 0;
        }
        
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }`}</style>
    </div>
  );
}
