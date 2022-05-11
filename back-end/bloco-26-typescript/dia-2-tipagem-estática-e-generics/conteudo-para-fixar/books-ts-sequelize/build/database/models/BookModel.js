"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Books extends sequelize_1.Model {
}
Books.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DECIMAL,
        allowNull: false,
    },
    author: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    isbn: {
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
});
exports.default = Books;
