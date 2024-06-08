# iso-countries-spanish
The name, iso2 code, iso3 code and phone code of the countries by their spanish names
## Available fields
- nombre 
-  name  
- nom  
- iso2  
- iso3 
- phone_code
## Example
```js
import { getSpanishNames, getCountries, getCountryAttributeByField, getPhoneCodeBySpanishName, iso3ToIso2, iso2ToIso3, getIso3CodeBySpanishName, getIso2CodeBySpanishName, getPhoneCodes, getIso3Codes, getIso2Codes, getCountryBy, getCountriesAttribute } from  'iso-countries-spanish';

  

// This log all countries
console.log(getCountries());//[{ nombre: 'Afganistán', name: 'Afghanistan', nom: 'Afghanistan', iso2: 'AF', iso3: 'AFG', phone_code: '93'},{ nombre: 'Albania', name: 'Albania', nom: 'Albanie', iso2: 'AL', iso3: 'ALB', phone_code: '355'},...]

// This log the Spanish name for the country with ISO2 code 'ES'
console.log(getCountryAttributeByField('nombre', 'iso2', 'ES'));//'España'

// This log the Spanish names of all the countries
console.log(getCountriesAttribute('nombre'))//['Afganistán','Albania','Alemania',...]

// This log the object with spanish name 'España'
console.log(getCountryBy('nombre', 'España'));//{ nombre: 'España', name: 'Spain', nom: 'Espagne', iso2: 'ES', iso3: 'ESP', phone_code: '34'}

// This log the ISO2 codes of all the countries
console.log(getIso2Codes());//['AF', 'AL', 'DE', 'DZ', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AN', 'SA', 'AR',...]

// This log the ISO3 codes of all the countries
console.log(getIso3Codes());//['AFG', 'ALB', 'DEU', 'DZA', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ANT', 'SAU', 'ARG',...]

// This log the phone codes of all the countries
console.log(getPhoneCodes());//['93', '355', '49', '213', '376', '244', '1 264', '672', '1 268', '599', '966', '54', '374', '297',

// This log the spanish names of all the countries
console.log(getSpanishNames());// ['Afganistán','Albania','Alemania','Algeria','Andorra','Angola','Anguila','Antártida',...]

// This log the ISO2 code 'ES' for the Spanish name 'España'
console.log(getIso2CodeBySpanishName('España'));//ES

// This log the ISO3 code 'ESP' for the Spanish name 'España'
console.log(getIso3CodeBySpanishName('España'));//ESP

// This log the phone code '34' for the Spanish name 'España'
console.log(getPhoneCodeBySpanishName('España'));//34

// This log the ISO2 code 'ES' for the ISO3 code 'ESP'
console.log(iso3ToIso2('ESP'));//ES

// This log the ISO3 code 'ESP' for the ISO2 code 'ES'
console.log(iso2ToIso3('ES'));//ESP
```
## Contribute
https://github.com/JanselLopez/iso-countries-spanish.git
