import React, { useState } from "react";
import Counter from "./counter";
const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Вилка" },
    { value: 4, id: 2, name: "Ложка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleReset = (counterId) => {
    setCounters(initialState);
  };

  const handleIncrement = (productId) => {
    const newCounters = [];
    counters.forEach((c) => {
      if (c.id === productId) {
        c.value += 1;
      }
      newCounters.push(c);
    });
    console.log(newCounters);
    setCounters(newCounters);
  };
  const handleDecrement = (productId) => {
    const newCounters = [];
    counters.forEach((c) => {
      if (c.id === productId) {
        c.value -= c.value > 0 ? 1 : 0;
      }
      newCounters.push(c);
    });
    console.log(newCounters);
    setCounters(newCounters);
  };
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
