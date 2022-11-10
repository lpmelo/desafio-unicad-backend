const express = require("express");
//FAKE DATABASE
let deliveries = [];
// CRIAR APP
const app = express();

const cors = require("cors");

app.use(cors()); // Use this after the variable declaration

app.use(express.json());

app.post("/deliveries", (req, res) => {
  const {
    clientName,
    deliveryDate,
    cep,
    uf,
    city,
    district,
    address,
    number,
    complement,
  } = req.body;

  const { id } = req.headers;

  const delivery = {
    id,
    clientName,
    deliveryDate,
    cep,
    uf,
    city,
    district,
    address,
    number,
    complement,
  };

  deliveries.push(delivery);

  return res
    .status(201)
    .json({ data: delivery, message: "Entrega cadastrada com sucesso!" });
});

app.get(`/deliveries`, (req, res) => {
  const allDeliveries = deliveries;
  return res.status(200).json(allDeliveries);
});
// APLICAR MIDDLEWARES

// MANDAR O SERVIDOR RODAR
app.listen(3333, () => console.log("Server is Running"));
