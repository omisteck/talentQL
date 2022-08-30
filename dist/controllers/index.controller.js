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
class indexController {
    calculate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let years = null;
            let dob = req.query.dob;
            if (dob = new Date(parseInt(dob))) {
                years = (0, moment_1.default)().diff(dob, 'years', false);
            }
            res.json({
                "age": (years && years >= 0) ? years : null
            });
        });
    }
}
exports.default = new indexController;
