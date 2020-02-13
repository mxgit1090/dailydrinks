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
  const createOrder = order => {
    setOrders(ordersToMutate => ([
      ...ordersToMutate,
      {
        ...order,
        id: nanoid(10)
      },
    ]));
  };
  const editOrder = order => {
    setOrders(ordersToMutate => {
      const orderIndex = ordersToMutate.findIndex(({ id }) => id === order.id)
      if (orderIndex < 0) return ordersToMutate;
      return [
        ...ordersToMutate.slice(0, orderIndex - 1),
        order,
        ...ordersToMutate.slice(orderIndex + 1, ordersToMutate.length),
      ];
    });
  };
  const removeOrder = order => {
    setOrders(ordersToMutate =>  
      ordersToMutate.filter(({ id }) => id !== order?.id)
    );
  };
  const formOpen = currentOrder !== null; 
  return (
    <div className="app__container">
      <Header
        formOpen={formOpen}
        orderExist={!!(currentOrder?.id)}
        onCreate={() => {
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
                createOrder(order);
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
                onRemove={() => {
                  removeOrder(order);
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
