export class CustomError extends Error {
    private constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly debugMessage?: string
    ){
        super(message)
    }
}