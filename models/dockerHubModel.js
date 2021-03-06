module.exports = (sequelize, DataTypes) =>
    sequelize.define('DockerHub', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        repo: DataTypes.TEXT,
        pull: DataTypes.INTEGER,
        star: DataTypes.INTEGER,
    });
