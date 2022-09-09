import icon3 from "../assets/dash-3.svg";
import { useState } from "react";
import Modal from "react-modal";


const Order = ({ cartItem, handleDelete, count }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <button className="dash__btn" onClick={() => setModalIsOpen(true)}>
        <img src={icon3} alt="orders" />
        Orders
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
          <div>Still yet to Order</div>
        ) : (
          <div className="cart__container">
            <h3>Your Orders</h3>
            <div className="grid cart">
              <div className="grid grid--1x2 cart__tags">
                <p>Item</p>
                <div className="grid grid--1x3L">
                  <span>Qty</span>
                  <span>price</span>
                  <span>Sub-total</span>
                </div>
              </div>
              <div>
                {cartItem?.map((addedFood, index) => (
                  <div
                    className="grid grid--1x2 cart__content"
                    key={index}
                  >
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
                      <h3>{count}</h3>
                      <h3>{addedFood.price}</h3>
                      {(addedFood.ready)? <h3 style={{color:"green", fontSize:"11px", margin: "3px"}}>Delivered</h3> : <h3 style={{color:"red", fontSize:"11px",margin: "3px"}}>Cooking</h3>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Order;
