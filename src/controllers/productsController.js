const productsController = {
  getAll: (req, res) => {
    return res.send("acá voy a traer los productos");
  },
  getOne: (req, res) => {
    return res.send(`Traer el producto con el ID ${req.params.id}`);
  },
  create: (req, res) => {
    return res.send(`Acá voy a crear un producto`);
  },
  delete: (req, res) => {
    return res.send(`Acá voy a borrar el producto con el ID ${req.params.id}`);
  },
  update: (req, res) => {
    return res.send(
      `Acá voy a actualizar el prodcuto con el Id ${req.params.id}`
    );
  },
};

export default productsController;
