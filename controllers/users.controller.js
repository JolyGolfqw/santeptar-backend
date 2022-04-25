const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  registration: async (req, res) => {
    try {
      const { login, password, name, avatar } = req.body;

      const hash = await bcrypt.hash(password, Number(process.env.ROUNDS));

      const user = await User.create({ login, password: hash, name });

      res.json(user);
    } catch (err) {
      res
        .status(400)
        .json({ error: `Ошибка при регистрации: такой логин уже существует` });
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await User.findOne({ login });

    if (!candidate) {
      return res.status(401).json({ error: "Неверный логин" });
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json({ error: "Неверный пароль" });
    }

    const payload = { id: candidate._id };

    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: "24h",
    });
    console.log(candidate.name)
    res.json({ token, id: payload.id, name: candidate.name, avatar: candidate.avatar });
  },

  editProfile: async (req, res) => {
    try {
     const user =  await User.findByIdAndUpdate(req.params.id, {
        // avatar: req.file.path,
        description: req.body.description
      })
      res.json(user)
    } catch (err) {
      res.json({error: 'Ошибка при изменении профиля'})
    }
  },

  editAvatar: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        avatar: req.file.path,
      })
      const user = await User.findById(req.params.id)
      res.json(user)
    } catch (err) {
      res.json({error: 'Ошибка при изменении профиля'})
    }
  },

  follow: async (req, res) => {
    try {
     await User.findByIdAndUpdate(req.params.id, {
       $push: {
        followers: req.body.followers
       }
      })
      const user = await User.findById(req.params.id)
      res.json(user)
    } catch (err) {
      res.json({error: 'Ошибка при подписке'})
    }
  },

  unfollow: async (req, res) => {
    try {
     await User.findByIdAndUpdate(req.params.id, {
       $pull: {
        followers: req.body.followers
       }
      })
      const user = await User.findById(req.params.id)
      res.json(user)
    } catch (err) {
      res.json({error: 'Ошибка при отписке'})
    }
  }
};

