//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Image LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    export interface Image
    {
		/**
		 * File name of full image.
		 */
		full: string;

		/**
		 * Image group.
		 */
		group: string;

		/**
		 * File name of sprite image.
		 */
		sprite: string;

		/**
		 * A image's height.
		 */
		h: number;

		/**
		 * A image's width.
		 */
		w: number;

		/**
		 * A image's x point.
		 */
		x: number;

		/**
		 * A image's y point.
		 */
		y: number;
    }
}
