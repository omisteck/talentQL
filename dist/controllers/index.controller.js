"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const express_validator_1 = require("express-validator");
class indexController {
    calculate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, express_validator_1.check)('dob').isDate()
                .withMessage('invalid date please enter date in this format 1996-01-20')
                .run(req);
            const result = (0, express_validator_1.validationResult)(req);
            if (!result.isEmpty()) {
                return res.status(400).json({ errors: result.array() });
            }
            let dob = req.query.dob;
            var years = (0, moment_1.default)().diff(dob, 'years', false);
            res.json({
                "birthDate": dob,
                "currentDate": (0, moment_1.default)().format("YYYY-MM-DD"),
                "age": years
            });
        });
    }
}
exports.default = new indexController;
