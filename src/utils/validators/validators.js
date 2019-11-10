export const required = value => {
  if(value){
    return undefined;
  } else {
    return 'Поле є обовязкове!';
  }
};

export const maxLengthCreator = maxLength => value => {
  if(value.length > maxLength){
    return `Максимальна кількість в ${maxLength} символів перевищена`;
  } else {
    return undefined;
  }
};