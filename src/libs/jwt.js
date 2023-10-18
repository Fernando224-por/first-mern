import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'
export function createAccessToken (playload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      playload,
      TOKEN_SECRET,
      {
        expiresIn: '1d'
      },
      (error, token) => {
        if (error) reject(error)
        resolve(token)
      }
    )
  })
}
