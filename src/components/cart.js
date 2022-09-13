import { useState } from "react";
import Modal from "react-modal";
import icon4 from "../assets/dash-4.svg";
import Checkout from "./checkout";

Modal.setAppElement("#root");
const Cart = ({ cartItem, handleDelete, totalNum }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sumItem = (details) => {
    let sum = Number(details.count * details.price);
    return sum;
  };

  const totalAmount = () => {
    let subTotal = cartItem.map((sub) => sub.count * sub.price);
    let sub = 0;
    for (let i = 0; i < subTotal.length; i += 1) {
      sub += subTotal[i];
    }
    return sub;
  };

  return (
    <div>
      <button className="dash__btn" onClick={() => setModalIsOpen(true)}>
        <img src={icon4} alt="cart" />
        Your Cart <span className="badge badge-primary ml-2">{totalNum}</span>
      </button>

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
            zIndex: 999,
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
            padding: "20px",
          },
        }}
      >
        {cartItem.length === 0 ? (
          <div>No items are added</div>
        ) : (
          <div className="cart__container">
            <h3>Your Cart</h3>
            <div className="grid cart">
              <div className="grid grid--1x2 cart__tags">
                <p>Item</p>
                <div className="grid grid--1x3L cart__sub">
                  <span>Qty</span>
                  <span>Unit-price</span>
                  <span>Sub-total</span>
                </div>
              </div>
              <div>
                {cartItem?.map((addedFood, index) => (
                  <div className="grid grid--1x2 cart__content" key={index}>
                    <div className="flex--box cart__start">
                      <img src={addedFood.image} alt="cart" />
                      <div className="cart__name">
                        <h3>{addedFood.name}</h3>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(addedFood.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="grid grid--1x3L cart__end">
                      <h6>{addedFood.count}</h6>
                      <h6>{`N${addedFood.price}.00`}</h6>
                      <h6>{`N${sumItem(addedFood)}.00`}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total">
              <span>Total:</span>
              <h3>{`N${totalAmount()}.00`}</h3>
            </div>
            <Checkout />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cart;
