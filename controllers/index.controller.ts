import express, { Express, Request, Response } from 'express';
import moment from 'moment';
import { validationResult, check } from 'express-validator';

class indexController {
    async calculate(req: Request, res: Response) {

        await check('dob').isDate()
            .withMessage('invalid date please enter date in this format 1996-01-20')
            .run(req);

        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        let dob: string = req.query.dob as string
        var years = moment().diff(dob, 'years', false);

        res.json({
            "birthDate": dob,
            "currentDate": moment().format("YYYY-MM-DD"),
            "age": years
        });
    }
}

export default new indexController;