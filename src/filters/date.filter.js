export default function dateFilter(value, format = 'date') {
  const optioms = {}
  
  return new Intl.DateTimeFormat('ua-UA', optioms).format(new Date(value))
}