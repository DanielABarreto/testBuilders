// o endpoint do weather de pegar a previsão do tempo de vários dias está
// com algum problema e dando 401 para o token deles mesmo, por esse motivo
// que esse arquivo existe para que possa ser feito o que a api deveria fazer.

interface ForecastProps {
  list: ListProps[]
}

interface ListProps {
  name?: string;
  dt_txt?: string;
}

const uniqueDateArray = (array: ForecastProps) => {
  const data: ListProps[] = [];
  const add = (value: ListProps) => {
    const valueDate = value.dt_txt?.split(/ (.*)/);
    const found = data.some(foundValue => {
      const foundDate = foundValue.dt_txt?.split(/ (.*)/);
      if (valueDate && foundDate) return valueDate[0] === foundDate[0]
    });
    if (!found) data.push(value);
    return data;
  }

  array.list?.map((value: ListProps) => {
    add(value);
  })

  return data.slice(0, 3)
};

export default uniqueDateArray;
