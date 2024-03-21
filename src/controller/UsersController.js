const { hash, compare } = require("bcryptjs");
const sqlConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqlConnection();
    const checkUserExist = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExist) {
      throw new AppError("Usuário já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    );

    return response.status(200).json();
  }

  async update(request, response) {
    const { name, email, password, old_passwod } = request.body;
    const { id } = request.params;

    const database = await sqlConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?) ",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Esse email já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (old_passwod && !old_passwod) {
      throw new AppError("Você precisa inserir a senha antiga");
    }

    if (password && old_passwod) {
      const checkOldPassword = await compare(old_passwod, user.password);

      if (!checkOldPassword) {
        throw new AppError("Senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `
     UPDATE users SET 
     name = ?,
     email = ?,
     password = ?,
     updated_at = DATETIME('now')
     WHERE id = ?
    `,
      [user.name, user.email, user.password, id]
    );

    return response.json();
  }

  async delete(request, response) {
    const { id } = request.params

    const database = await sqlConnection()

    await database.run(
      `DELETE FROM users WHERE id = ?`, [id]
    )

    return response.json()
  }
}

module.exports = UsersController;
