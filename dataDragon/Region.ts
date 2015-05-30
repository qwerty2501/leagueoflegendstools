//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Region LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
	/**
		Region corresponding to data to retrieve.
	*/
    export enum Region
    {
		br,
		eune,
		euw,
		kr,
		lan,
		las,
		na,
		oce,
		ru,
		tr,
    }

    /**
		default region.
	*/
    export const defaultRegion = Region.na;
}
