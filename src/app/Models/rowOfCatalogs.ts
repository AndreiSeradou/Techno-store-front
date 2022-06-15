import { Catalog } from "./catalog";

export class RowOfCatalogs {
	first: Catalog | undefined;
	second: Catalog | undefined;
	third: Catalog | undefined;
	fourth: Catalog | undefined;
	constructor(fi: Catalog, s: Catalog, t: Catalog, f: Catalog) {
        this.first = fi;
        this.second = s;
		this.third = t;
		this.fourth = f;
    }
}