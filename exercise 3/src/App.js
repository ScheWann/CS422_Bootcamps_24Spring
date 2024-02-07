import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: "item1", quantity: 1, isSelected: false },
    { itemName: "item2", quantity: 1, isSelected: true },
    { itemName: "item3", quantity: 1, isSelected: false },
  ]);

  const [totalQuantity, setTotalQuantity] = useState(3);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    calculateTotalQuantity();
  }, [items]);

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    calculateTotalQuantity();
  };

  const handleDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    calculateTotalQuantity();
  };

  const toggle = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const handleAddButton = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };
    setItems([...items, newItem]);
    setInputValue("");
  };

  const calculateTotalQuantity = () => {
    const total = items.reduce((total, item) => total + item.quantity, 0);

    setTotalQuantity(total);
  };
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            className="add-item-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Add an item..."
          />
          <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButton()} />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggle(index)}>
                {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleDecrease(index)}
                  />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalQuantity}</div>
      </div>
    </div>
  );
};

export default App;
