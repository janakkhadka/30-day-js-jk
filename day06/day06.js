// //day6
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = []
// for(let i = 0; i < countries.length; i++){
//   newArr.push(countries[i].toUpperCase())
// }
// console.log(newArr)

// // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// const numbers=[1,2,3,4,5]
// const newArr1=[]
// for(let i=0;i<numbers.length;i++)
// {
//     newArr1.push(numbers[i]**2)
// }
// console.log(newArr1)

// //with break
// for(let i=0;i<=5;i++)
// {
//     if(i==3)
//     {
//        break; 
//     }
//     console.log(i);
// }
//with continue
// for(let i=0;i<=5;i++)
// {
//     if(i==3)
//     {
//         continue;
//     }
//     console.log(i);
// }

//excercise
//5.
// for(let i=0;i<=10;i++)
// {
//     console.log(i,"*",i,"=",i*i)
// }

//14. random numbers
// const arr3=[]
// for(i=0;i<=5;i++)
// {
//     console.log(Math.round(Math.random()*100))
// }
//const arr4=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
// let js='1234567890abcdefghijklmnopqrstuvwxyz'
// const arr4=js.split('')
// const arr5=[]
// for(let i=0;i<=6;i++)
//     {
//         arr5.push(arr4[Math.round(Math.random()*arr4.length)])
    
//     }
//     document.write("#"+arr5)

//     for (let i=0;i<=Math.random()*20;i++)
//     {
//         arr5.push(arr4[Math.round(Math.random()*arr4.length)])
//     }
//     console.log("#"+arr5)
//     console.log(arr4)
//ex level2 
//5
// const arr6=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// for(let i=0;i<arr6.length;i++)
// {
//     console.log(arr6[i].length)
// }

//exercise level 3
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  for(let i=0;i<countries.length;i++)
  {
    if(countries[i].includes("land"))
    {
        console.log(countries[i])
    }
  }

  //6
  let i=0
  const a=['janak']
  for(i=0;i<countries.length;i++)
  {
    if(countries[i].length>a[0].length)
    {
        a[0]=countries[i]
    }
  }
  console.log(a)

    



