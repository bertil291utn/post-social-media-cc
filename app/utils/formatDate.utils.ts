import { formatDistanceToNow } from 'date-fns'

export const formatDate = (inputDate: string) => {

  const respuesta = formatDistanceToNow(new Date(inputDate), { addSuffix: true })
  return respuesta.replace(/^about /i, '');
}