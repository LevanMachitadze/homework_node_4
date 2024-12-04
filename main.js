// const fs = require('fs/promises');
// const https = require('https');

// const fetchData = async () => {
//   try {
//     const data = await new Promise((resolve, reject) => {
//       https
//         .get('https://jsonplaceholder.typicode.com/users', (res) => {
//           let rawData = '';

//           res.on('data', (chunk) => {
//             rawData += chunk;
//           });

//           res.on('end', () => {
//             try {
//               const parsedData = JSON.parse(rawData);
//               resolve(parsedData);
//             } catch (error) {
//               reject(error);
//             }
//           });
//         })
//         .on('error', reject);
//     });
s;
// const filteredData = data.map(({ id, name, username, email }) => ({
//   id,
//   name,
//   username,
//   email,
// }));

//     await fs.writeFile('users.json', JSON.stringify(filteredData, null, 2));
//     console.log('Data successfully written to users.json');
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// };

// fetchData();

//////////////////////////

// const fs = require('fs/promises');
// const path = require('path');

// const main = async () => {
//   try {
//     const [, , carModel, carReleaseDate, carColor] = process.argv;

//     if (!carModel || !carReleaseDate || !carColor) {
//       console.error(
//         'Please provide all required arguments: carModel, carReleaseDate, carColor.'
//       );
//       process.exit(1);
//     }

//     const id = Date.now();

//     const car = {
//       id,
//       carModel,
//       carColor,
//       carReleaseDate,
//     };

//     const filePath = path.join(__dirname, 'cars.json');

//     let cars = [];
//     try {
//       const fileData = await fs.readFile(filePath, 'utf-8');
//       cars = JSON.parse(fileData);
//     } catch (error) {
//       if (error.code !== 'ENOENT') {
//         throw error;
//       }
//     }

//     cars.push(car);

//     await fs.writeFile(filePath, JSON.stringify(cars, null, 2));

//     console.log('Car successfully added:', car);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// };

// main();

/////////////////////////////////////////////////////////////

const fs = require('fs/promises');

const countVowels = (text) => {
  const vowels = text.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
};

const main = async () => {
  try {
    const randomText =
      'This is a random text file with some vowels and consonants.';
    await fs.writeFile('text.txt', randomText);
    console.log('Text written to file.');

    const fileContent = await fs.readFile('text.txt', 'utf-8');

    const vowelCount = countVowels(fileContent);

    console.log(`The text contains ${vowelCount} vowels.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

main();
