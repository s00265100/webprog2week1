export class AppError extends Error {
   

    constructor(message: string, statusCode: number)
     {
        super(message);
        this.name = this.constructor.name;
   }
}
export class NotFoundError extends AppError {
    constructor(resource:string){
        super(`${resource} not found`, 404);

    }
}
        