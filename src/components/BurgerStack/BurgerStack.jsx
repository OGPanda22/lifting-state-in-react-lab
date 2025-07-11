import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <li style={{ backgroundColor: '#555' }}>No Ingredients</li>
      ) : (
        stack
          .map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onClick={() => onRemove(index)}
              buttonLabel="X"
            />
          ))
          .reverse() // optional: stacks from bottom up
      )}
    </ul>
  );
};

export default BurgerStack;