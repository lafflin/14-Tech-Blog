const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				len: [1],
			},
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
			},
		},
		user_id: {
			type: DataTypes.UUID,
			references: {
				model: "users",
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "posts",
	}
);

module.exports = Post;
