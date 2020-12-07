const dataJSON = require("../lib/data.json");

// Lambda-like handler function
module.exports.handler = async (event: any) => {
	console.log(typeof event);
	//Event ID for switch function
	const getId = event.id;

	// Function Gallery
	const filterByZipCodes = () => {
		// Method Integration, filtering user data from event object
		const zipCode = event.zip;
		const zipResult = dataJSON.filter((items: any) =>
			items.zip.includes(zipCode)
		);
		console.log(zipResult);
		return zipResult;
	};

	const filterByCityName = () => {
		// Method Integration, filtering user data from event object
		const cityName = event.city;
		const cityResult = dataJSON.filter((items: any) =>
			items.primary_city.includes(cityName)
		);
		console.log(cityResult);
		return cityResult;
	};

	const filterByLat = () => {
		// Method Integration, filtering user data from event object
		const lat = parseFloat(event.latitude);
		const dataItemsByLatitude = dataJSON
			.map((items: any) => parseFloat(items.latitude))
			.sort();
		const dataItem = dataItemsByLatitude.reduce((prev: any, curr: any) => {
			return Math.abs(curr - lat) < Math.abs(prev - lat) ? curr : prev;
		});
		const latResult = dataJSON.filter((el: any) => el.latitude == dataItem);
		console.log(latResult);
		return latResult;
	};

	const filterByLong = () => {
		// Method Integration, filtering user data from event object.
		const long = parseFloat(event.longitude);
		const dataItemsByLongitude = dataJSON
			.map((items: any) => parseFloat(items.longitude))
			.sort();
		const dataItem = dataItemsByLongitude.reduce((prev: any, curr: any) => {
			return Math.abs(curr - long) < Math.abs(prev - long) ? curr : prev;
		});
		const longResult = dataJSON.filter((el: any) => el.longitude == dataItem);
		console.log(longResult);
		return longResult;
	};

	const filterByAttribute = () => {
		// Method Integration, filtering user data from event object
		const state = event.state.toUpperCase();
		const attrResult = dataJSON.filter((items: any) => {
			return items.state.includes(state);
		});
		console.log(attrResult);
		return attrResult;
	};

	switch (getId) {
		case 0:
			return await filterByZipCodes();
		case 1:
			return await filterByCityName();
		case 2:
			return await filterByLat();
		case 3:
			return await filterByLong();
		case 4:
			return await filterByAttribute();
	}
};
