import { Laptop } from "./laptop";

export class RowOfLaptops {
	first: Laptop | undefined;
	second: Laptop | undefined;
	third: Laptop | undefined;
	fourth: Laptop | undefined;
	constructor(fi: Laptop, s: Laptop, t: Laptop, f: Laptop) {
        this.first = fi;
        this.second = s;
		this.third = t;
		this.fourth = f;
    }
}
