import countries from './countries.json'

type Field = 'nombre' | 'name' | 'nom' | 'iso2' | 'iso3' | 'phone_code'

export const getCountries = () => countries

export const getCountryAttributeByField = (attributeToGet:Field, fieldByGet:Field, valueOfTheField:string | number) => countries.find((it)=>it[fieldByGet] === valueOfTheField)?.[attributeToGet]

export const getCountriesAttribute = (attributeToGet:Field) => getCountries().map((it)=>it[attributeToGet])

export const getCountryBy = (field:Field, value:string|number) => countries.find((it)=>it[field] === value)

export const getIso2Codes = () => getCountriesAttribute('iso2')

export const getIso3Codes = () => getCountriesAttribute('iso3')

export const getPhoneCodes = () => getCountriesAttribute('phone_code')

export const getSpanishNames = () => getCountriesAttribute('nombre')

export const getIso2CodeBySpanishName = (code:string) => getCountryAttributeByField('iso2','nombre',code)

export const getIso3CodeBySpanishName = (code:string) => getCountryAttributeByField('iso3','nombre',code)

export const getPhoneCodeBySpanishName = (phone_code:string) => getCountryAttributeByField('phone_code','nombre',phone_code)

export const iso3ToIso2 = (iso3:string) => getCountryAttributeByField('iso2','iso3',iso3)

export const iso2ToIso3 = (iso2:string) => getCountryAttributeByField('iso3','iso2',iso2)
