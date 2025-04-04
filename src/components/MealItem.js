const MealItem = (props) => {
    const { image, name, price, description } = props.meal;
  
    return (
      <li className="meal-item">
        <article>
          <img src={require(`../assets/${image}`)} alt={name} />
          <div className="meal-item-description">
            <h3>{name}</h3>
            <p className="meal-item-price">${price}</p>
            <p>{description}</p>
          </div>
          <p className="meal-item-actions">
            <button className="button">Add to Cart</button>
          </p>
        </article>
      </li>
    );
  };
  
  export default MealItem;
  