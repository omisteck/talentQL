import express, { Express, Request, Response } from 'express';
import moment from 'moment';
class indexController {
    async calculate(req: Request, res: Response) {
        let years;
        let dob: any = req.query.dob

        if (dob = new Date(parseInt(dob))) {
            years = moment().diff(dob, 'years', false);
        }

        res.json({
            "age": (years && years >= 0 )? years : null
        });
    }
}

export default new indexController;