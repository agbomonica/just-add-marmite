import Image from "next/image";
import Link from "next/link";

function RecipeCard({ recipe }) {
  const { slug, title, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className="recipe">
      <div className="recipe-thumbnail">
        <Image
          alt={title}
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>

      <div className="recipe-content">
        <div className="recipe-info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>

        <div className="recipe-actions">
          {/* dynamic path with interpolation */}
          <Link href={`/recipes/${encodeURIComponent(slug)}`}>Cook this</Link>
        </div>
      </div>

      <style jsx>{`
        .recipe {
          transform: rotateZ(-1deg);
        }

        .recipe-content {
          background-color: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          width: 550px;
          position: relative;
          top: -40px;
          left: -10px;
        }

        .recipe-info {
          padding: 16px;
        }

        .recipe-info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }

        .recipe-info p {
          margin: 0;
          color: #777;
        }

        .recipe-actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }

        .recipe-actions :global(a) {
          display: inline-block;
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default RecipeCard;
