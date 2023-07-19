import jwt from "jsonwebtoken";

const dashboardHandler = (req, res) => {
  console.log(req.headers.authorization);
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new Error("Invalid Auth Token");
  }

  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      message: `Hello ${decoded.username}, Please note your lucky number ${luckyNumber}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default dashboardHandler;
