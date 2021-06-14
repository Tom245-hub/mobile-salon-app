const User = require("../db/models/user");

exports.postUser = async (req, res) => {
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

    if (user.accessLevel === 1) {
      const user = await User.findOne({ login: login })
        .populate("stylistData")
        .populate("portfolio")
        .populate("reviews");
      res.status(200).json({
        user,
      });
    } else if (user.accessLevel === 2) {
      const user = await User.findOne({ login: login }).populate("clientData");
      res.status(200).json({
        user,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie POST w endpointcie users",
    });
  }
};
