export const maskMomey = {
  input: /^[1-9][0-9]{0,16}(?:\.[0-9]{0,2})?/
};

export const maskAccount = {
  input: /\d{0,20}/,
  strict: /\d{18,20}/,
  tooltip: 'Номер счета состоит из 18-20 цифр'
};

export const maskInn = {
  input: /\d{0,10}/,
  strict: /\d{10}/,
  tooltip: 'ИНН состоит из 10 цифр'
};

export const maskOcbBcb = {
  input: /(^\d{4}\/\d{0,4})?(^\d{0,4})?/,
  strict: /^\d{4}\/\d{4}/,
  tooltip: 'Цифры в формате: хххх/хххх'
};

export const maskPassport = {
  input: /(^\d{4}\s\d{0,6})?(^\d{0,4})?/,
  strict: /^\d{4}\s\d{6}/,
  tooltip: 'Цифры в формате: хххх хххххх'
};

export const maskFio = {
  input: /[A-Za-zА-ЯЁа-яё\s\-]{0,40}/,
  tooltip: 'Фамилия Имя Отчество'
};

export const maskSurname = {
  input: /[a-zA-ZА-ЯЁа-яё\-]{0,20}/,
  tooltip: 'Фамилия'
};

export const maskSourceOperation = {
  input: /[\wА-ЯЁа-яё\s]{0,80}/
};

export const maskLogin = {
  input: /\S{0,255}/,
  strict: /\S{5,255}/,
  tooltip: 'от 5 до 255 непробельных симоволов'
};