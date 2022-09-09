import { useState } from "react";
import Modal from "react-modal";
import Counter from "./counter";

const FoodCard = ({
  productItem,
  handleClick,
  handleDetails,
  details,
  handleIncrement,
  handleDecrement,
  count,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClick = (item) => {
    handleClick(item);
    setModalIsOpen(false);
  };

  return (
    <div className="grid grid--1x3 all__card">
      {productItem?.map((food) => {
        return (
          <div
            className="card"
            key={food.id}
            onClick={() => handleDetails(food.id)}
          >
            <div onClick={() => setModalIsOpen(true)}>
              <div>
                <img src={food.image} alt="" className="card-image" />
              </div>
              <h3>{food.name}</h3>
              <p>{food.content}</p>
            </div>
            <div className="flex--box card__footer">
              <h4>{food.price}</h4>
              <button onClick={() => setModalIsOpen(true)}>Add to cart</button>
            </div>
          </div>
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#C4C4C46B",
          },
          content: {
            position: "absolute",
            height: "100vh",
            top: "0px",
            left: "50%",
            right: "0px",
            border: "none",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: "30px",
          },
        }}
      >
        <div>
          {details?.map((item) => (
            <div key={item.id}>
              <div className="details__start">
                <img src={item.image} alt="details" />
                <h3>{item.name}</h3>
                <p>{item.content}</p>
              </div>
              <div className="flex--box details__center">
                <p>NGN 2000</p>
                <p>10-20 Mins</p>
                <p>10 Pcs Avail</p>
              </div>
              <div className="flex--box details__footer">
                <Counter
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  item={item}
                  count={count}
                />
                <button
                  onClick={() => onClick(item)}
                  className="btn"
                  disabled={count === 0 ? "disabled" : null}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default FoodCard;
