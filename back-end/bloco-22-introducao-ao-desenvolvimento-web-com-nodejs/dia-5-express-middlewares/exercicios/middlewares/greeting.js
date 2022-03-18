const greeting = (req, res, next) => {
  const { name, age } = req.body;
  if (age >= 18) return res.status(200).json({ message: `Hello, ${name}!` });
  if (age < 18) return res.status(401).json({ message: "Unauthorized" });
};

module.exports = greeting;
