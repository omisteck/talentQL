import express, { Express, Request, Response } from 'express';
import moment from 'moment';
class indexController {
    async calculate(req: Request, res: Response) {
        let years: number | null = null;
        let dob: any = req.query.dob

        if (dob = new Date(parseInt(dob))) {
            years = moment().diff(dob, 'years', false);
        }

        let statusCode = (years != null) ? 200 : 400;

        res.status(statusCode).json({
            "age": years
        });
    }
}

export default new indexController;