const User = require('../app/models/User');


module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const users = await User.findAll();

    return res.json(users);
  },

  async query(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });

    return res.json(user);
  },

  async store(req, res) {
    const userExists = await User.findOne({ where: { cpf: req.body.cpf } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' })
    }

    const { id, name, age, maritalStatus, city, state } = await User.create(req.body);

    return res.json({
      id,
      name,
      age,
      maritalStatus,
      city,
      state
    });
  },
  async update(req, res) {
    const users =
      await User.update({
        name: req.body.name,
        age: req.body.age,
        maritalStatus: req.body.maritalStatus,
        city: req.body.city,
        state: req.body.state
      }, {
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.status(200).json(users)
      })
  },
  async destroy(req, res) {
    await User.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.status(202).json()
    })
  }
};

