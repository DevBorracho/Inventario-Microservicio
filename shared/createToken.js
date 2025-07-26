import jwt from "jsonwebtoken";
import "dotenv/config"; // Automatically loads environment variables from .env file
export const createToken = payload => {
  try {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        },
        (err, token) => {
          if (err) {
            return reject(new Error("Error signing token: " + err.message));
          }
          resolve(token);
        }
      );
    });
  } catch (error) {
    return Promise.reject(new Error("Error creating token: " + error.message));
  }
};
