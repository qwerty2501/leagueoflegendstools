//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying ProfileIconData LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
	/**
	 *  The container of profile icon data.
	 */
	export interface ProfileIconDataContainer extends APIDataContainer<ProfileIcon> { };


	/**
	 * The profile icon data.
	 */
	export interface ProfileIcon {

		/**
		 * icon ID.
		 */
		id: number;

		/**
		 * Image data.
		 */
		image: Image;
		
	}
}
