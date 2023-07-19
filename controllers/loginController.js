import jwt from "jsonwebtoken";

const loginController = (req, res) => {
  try {
    //get the username and password of the user from POST request
    const { username, password } = req.body;
    const id = new Date().getDate();

    //check if username and password is provided
    if (!username || !password) {
      throw new Error("Please provide correct username and password !");
    }
    //creating jwt
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};

export default loginController;
