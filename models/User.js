// requiring sequelize and bcrypt
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
// requiring our connection
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				len: [8],
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				len: [8],
			},
		},
	},
	{
		sequelize,
		modelName: "users",
		hooks: {
			beforeCreate: async (user) => {
				try {
					const hashedPW = await bcrypt.hash(user.password, 8);
					user.password = hashedPW;
					return user;
				} catch (error) {
					console.error(error);
				}
			},
			beforeUpdate: async (user) => {
				if (user.password.trim().length > 0) {
					try {
						const hashedPW = await bcrypt.hash(user.password, 8);
						user.password = hashedPW;
						return user;
					} catch (error) {
						console.error(error);
					}
				}
			},
		},
	}
);

module.exports = User;
