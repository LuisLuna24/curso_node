"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userData = void 0;
const domain_1 = require("../domain");
exports.userData = [
    {
        id: 1,
        name_user: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
        role: domain_1.StatusRole.admin
    },
    {
        id: 2,
        name_user: 'Jane Smith',
        email: 'janesmith@example.com',
        password: '654321',
        role: domain_1.StatusRole.user
    },
    {
        id: 3,
        name_user: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        password: '789012',
        role: domain_1.StatusRole.user
    }
];
