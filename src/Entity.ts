export class ComplexNumber {
    RealPart: number;
    ImaginaryPart: number;

    constructor(real: number, imaginary: number) {
        this.RealPart = real;
        this.ImaginaryPart = imaginary;
    }

    getRealPart(): number {
        return this.RealPart;
    }

    setRealPart(real: number): void {
        this.RealPart = real;
    }

    getImaginaryPart(): number {
        return this.ImaginaryPart;
    }

    setImaginaryPart(imaginary: number): void {
        this.ImaginaryPart = imaginary;
    }

    addRealPart(real: number) {
        this.RealPart += real;
    }

    addImaginaryPart(imaginary: number) {
        this.ImaginaryPart += imaginary;
    }

    showDetails() {
        console.log("The resultant complex number is " + this.RealPart + " + " + this.ImaginaryPart + "i");
    }
}