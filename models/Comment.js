const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		comment_content: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				len: [1],
			},
		},

		user_id: {
			type: DataTypes.UUID,
			references: {
				model: "users",
				key: "id",
			},
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "posts",
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "comment",
	}
);

module.exports = Comment;
