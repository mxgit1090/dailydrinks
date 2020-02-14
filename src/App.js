import React, { useState } from 'react';
import nanoid from 'nanoid';
import './App.scss';
import Header from './components/Header';
import Order from './components/Order';
import Form from './components/Form';

/*
https://github.com/17media/frontend-hq/blob/master/pretest2.md
*/

function App() {
  const [currentOrder, setCurrentOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const addOrder = order => {
    setOrders(prevOrders => ([
      ...prevOrders,
      {
        ...order,
        id: nanoid(10)
      },
    ]));
  };
  const editOrder = order => {
    setOrders(prevOrders => {
      const orderIndex = prevOrders.findIndex(({ id }) => id === order.id)
      if (orderIndex < 0) return prevOrders;
      return [
        ...prevOrders.slice(0, orderIndex),
        order,
        ...prevOrders.slice(orderIndex + 1, prevOrders.length),
      ];
    });
  };
  const deleteOrder = order => {
    setOrders(prevOrders =>  
      prevOrders.filter(({ id }) => id !== order?.id)
    );
  };
  const formOpen = currentOrder !== null; 
  return (
    <div className="app__container">
      <Header
        formOpen={formOpen}
        orderExist={!!(currentOrder?.id)}
        onAdd={() => {
          setCurrentOrder({});
        }}
      />
      {formOpen
        ? (
          <Form
            order={currentOrder}
            submit={order => {
              if (order.id) {
                editOrder(order);
              } else {
                addOrder(order);
              }
              setCurrentOrder(null);
            }}
            cancel={() => {
              setCurrentOrder(null);
            }}
          />
        )
        : (
          <div id="orders">
            {orders.map(order => (
              <Order
                key={order.id}
                name={order.name}
                price={order.price}
                notes={order.notes}
                onEdit={() => {
                  setCurrentOrder(order);
                }}
                onDelete={() => {
                  deleteOrder(order);
                }}
              />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default App;
