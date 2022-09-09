import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success("Payment Successful");
    setInterval(() => {
        setModalIsOpen(false)
    }, 4000);
  };

  return (
    <div>
      <button className="checkout__btn" onClick={() => setModalIsOpen(true)}>
        Checkout
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
            padding: "30px",
          },
        }}
      >
        <div className="checkout">
          <ToastContainer />
          <h3>Checkout</h3>
          <form onSubmit={handlePayment} className="checkout__input">
            <input
              type="text"
              name="name"
              required
              placeholder="Card Number"
            />
            <input
              type="text"
              name="date"
              required
              placeholder="Exp Date"
            />

            <input
              type="text"
              name="cvv"
              required
              placeholder="CVV/CVV2"
            />
             <input
              type="password"
              name="pin"
              required
              placeholder="Card Pin"
            />

            <button className="checkout__btn">Make Payment</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
