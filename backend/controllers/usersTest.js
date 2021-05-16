const User = require("../db/models/user");

exports.postUserTest = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login: login });

    if (!user) {
      response.status(404).json({
        message: "Użytkownik o podanym loginie nie istnieje",
      });

      return;
    }

    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      res.status(401).json({
        message: "Hasło lub login się nie zgadza",
      });

      return;
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /users",
    });
  }
};

// exports.postNewUserTest = async (req, res) => {
//   let newUser;

//   try {
//     // const { firstName, lastName, email, phone, birthYear, zipcode, hairStylExp, makeupStylExp, city } = req.body;

//     const newUserData = {
//       accessLevel: 0,
//       login: "d",
//       password: "1",
//       user_id: "60a184eee8ea742bd06ad53a",
//     };

//     newUser = new User(newUserData);

//     await newUser.save();
//   } catch (err) {
//     return res.status(422).json({ message: err.message });
//   }

//   res.status(201).json(newUser);
// };
