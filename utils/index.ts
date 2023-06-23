const url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f8acc0fa5emshd5ef2f975f2e69fp100d6djsnfd08fe60fe91',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}