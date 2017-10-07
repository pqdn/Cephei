export const strings = {
  common: {
    statuses: {
      draft: 'Черновик',
      register: 'Заявление зарегистрировано',
      approved: 'Одобрена выдача Уполномоченным сотрудником'
    },
    document: {
      seria: 'Серия',
      num: 'Номер'
    },
    queryTypes:{
      GET: "GET",
      POST: "POST",
      DELETE: "DELETE",
      PUT: "PUT"
    },
    currencies: {
      ruble: "Российский рубль",
      dollar: "Доллар США"
    }
  },
  inflow: {
    title: 'Приходная кассовая операция',
    title2: 'Приходная кассовая операция в рублях Российской Федерации',
    title3: 'Приходная кассовая операция в рублях РФ',
    status: 'Статус операции:',
    selectClientTab: {
      title: '1. Поиск клиента',
      name: 'Наименование',
      inn: 'ИНН',
      opf: 'Организационно-правовая форма',
      billNumber: 'Номер счета',
      surname: 'Фамилия представителя',
      documentNumber: 'Серия и номер ДУЛ представителя',
      osbBsp: 'Номер ОСБ/ВСП обслуживания',
      find: 'Найти',
      clientTable:{
        clientNotFound: 'Клиентов с такими данными не найдено',
        findClients: 'Найденные клиенты',
        title: 'Клиент',
        inn: 'ИНН',
        kpp: 'КПП',
        ogrn:'ОГРН',
        selectClient: 'Далее'
      },
      agentTable:{
        agentNotFound: 'Не найдено представителей пользователя',
        confirmationStatus: '2. Подтверждение представителя клиента',
        client: 'Клиент',
        agents: 'Представители клиента',
        agentType: 'Тип представительства',
        fio: 'ФИО',
        birthday: 'Дата рождения',
        documentData: 'Серия и номер ДУЛ',
        documentPlace: 'Дата и место выдачи ДУЛ',
        agentDocumentType: 'Тип документа, подтверждающего полномочия',
        proxyNumber: 'Номер доверенности',
        proxyDate: 'Дата действия доверенности',
        selectAgent: 'Далее',
        cancel: 'Отмена'
      }
    },
    selectAccountTab: {
      title: '3. Выбор счета для совершения операции',
      number: '№ счета',
      openDate: 'Дата открытия',
      name: 'Наименование счета',
      currency: 'Валюта счета',
      availableSum: 'Доступный остаток, руб.',
      isLimited: 'Наличие ограничений по счету',
      stoppedOperations: 'Приостановление операций по счету',
      arrestedSum: 'Сумма ареста, руб.',
      sumCart1: 'Сумма по картотеке 1, руб.',
      sumCart2: 'Сумма по картотеке 2, руб.',
      operationsWasStopped: 'Приостановлены расходные операции',
      selectAccount: 'Далее',
      btn: {
        selectAccount_2: 'Зарегистрировать заявление',
        cancel: 'Назад'
      }
    },
    DetailsFormTab: {
      title: '4. Реквизиты операции',
      clients: 'Клиент:',
      cause: 'Источник поступления:',
      inn: 'ИНН:',
      comission: 'Сумма комиссии:'
    },
    KassaRedirection: {
      message: 'Операция сформирована и направленна в кассу'
    },
    getMoneyTab: {
      title: '7.Прием денежных средств',
      clients: 'Клиент:',
      id: 'Номер счета:',
      person: 'Вноситель:',
      date: 'Дата операции:',
      cause: 'Источник поступления:',
      sum: 'Сумма операции:',
      inputMoney: 'Принято от клиента, руб.',
      btm: {
        ok: 'Завершить операцию',
        change: 'Назад',
        cancel: 'Отмена',
        autograph: 'Подпись ЭЦП',
        back: 'Возврат на предыдущий шаг',
        save: 'Сохранение черновика',
        printCheck: "Напечатать чек",
        pos: "Передать на POS-терминал",
        confirmation: "Подтверждение операции"
      }
    }
  },
  outflow: {
    title: 'Расходная кассовая операция',
    title3: 'Расходная кассовая операция в рублях РФ',
    DetailsFormTab: {
      title: '4. Реквизиты операции',
      clients: 'Клиент:',
      cause: 'Источник поступления*',
      inn: 'ИНН:',
      dateCheckOut: 'Дата выдачи чека:',
      numberAndSeriesCheck: 'Серия и номер чека:',
      comission: 'Сумма комиссии:'
    },
    finalOperationTab: {
      title: 'Операция содержит признаки обналичивания!',
      getter: 'Получатель:',
      solution: 'Решение Комплаенс:',
      comment: 'Комментарий:',
      btm: {
        ok: 'Завершить операцию',
        getSolution: 'Отправить Уведомление в Комплаенс',
        print: 'Печать Заявления',
        save: 'Сохранить',
        nextStep: 'Продолжить оформление операции'
      }
    }
  },
  checkbook: {
    title: 'Оформление и выдача чековой книжки',
    selectClientTab: {
      title: '1. Поиск клиента',
      name: 'Наименование',
      inn: 'ИНН',
      opf: 'Организационно-правовая форма',
      fio: 'Фамилия представителя',
      billNumber: 'Номер счета',
      surname: 'Фамилия представителя',
      documentNumber: 'Серия и номер ДУЛ представителя',
      osbBsp: 'Номер ОСБ/ВСП обслуживания',
      find: 'Найти',
      clientTable: {
        clientNotFound: 'Клиентов с такими данными не найдено',
        findClients: 'Найденные клиенты',
        title: 'Клиент',
        inn: 'ИНН',
        kpp: 'КПП',
        ogrn: 'ОГРН',
        selectClient: 'Далее'
      }
    },
    statementRegistration: {
      title: '4. Регистрация заявления:',
      status: 'Заявление успешно зарегистрировано!',
      statementNumber: 'Номер заявления:',
      statementData: 'Дата заявления:',
      btn: {
        setCheckbook: 'Оформить чековую книжку',
        finishIssue: 'Завершить операцию приема Заявления'
      },
    },
    enteringRequisites: {
      title: '5. Ввод реквизитов',
      checkbookNumber: 'Номер книжки: ',
      checkFirstNumber: 'Номер первого чека: ',
      checkLastNumber: 'Номер последнего чека: ',
      totalSheets: 'Количество листов: ',
      btn: {
        finishCheckbook:'Завершить операцию оформления чековой книжки',
        printTicket: 'Печать квитанции о получении',
        calculateComission: 'Рассчитать комиссию'
      }
    },
    comission: {
      symbolSum: 'Комиссия составляет: ',
      title: '6. Выбор варианта оплаты комиссии:',
      sum: 'Сумма комиссии:',
      type: {
        nal: 'Наличными',
        card: 'С расчетного счета'
      },
      btn: {
        toControl: 'На контроль 2-й руки',
        cancel: 'Отмена операции'
      }
    },
    finalOperation:{
      title: '7. Выдача чековой книжки',
      person: 'Получатель чековой книжки:',
      approved: 'Выдача одобрена  Уполномоченным сотрудником!',
      finishedLocation: 'Место завершения операции:',
      finaltitle: 'Завершение выдачи чековой книжки:',
      btn:{
        urm:'Продолжить на УРМ',
        sendToCashbox: 'Отправить операцию в кассу',
        checkbookGiven: 'Чековая книжка выдана',
        return: 'Назад',
        cancelOperation: 'Отмена операции'
      }
    }
  },
  deposit:{
    title: 'Взнос наличных на счет корпоративной/бюджетной карты',
    finalOperationTab: {
      title: 'Операция содержит признаки обналичивания!',
      getter: 'Получатель:',
      solution: 'Решение Комплаенс:',
      comment: 'Комментарий:',
      btm: {
        getSolution: 'Отправить Уведомление в Комплаенс',
        print: 'Печать Заявления',
        save: 'Сохранить',
        nextStep: 'Продолжить оформление операции'
      }
    }
  },
  withdrawal:{
    title: 'Выдача наличных со счета корпоративной/бюджетной карты'
  },
  missedPage:{
    title: 'Страница находится в разработке',
    missedPageText: 'Скоро она заработает, благодарим вас за терпение.'
  },
  armCashier:{
    title: 'Поиск клиента',
    formTitle: 'Представитель клиента:',
    formSubTitle: '(Поиск по ДУЛ представителя)',
    selectOperation: 'Провести операцию',
    dulType: 'Тип',
    dulls:{
      passport: 'Паспорт'
    },
    dulNum: 'Серия и номер',
    find: 'Найти',
  },
  armManager:{
    title: 'Журнал аудита'
  },
  audit:{
    cashOutSignsFound: 'Выявлены признаки обналичивания',
    operationSentSecondHandControl: 'Операция отправлена на контроль 2й рукой',
    checkbookOperationFinish: 'Реквизиты чековых книжки заполнены, операция оформления чековой книжки завершена',
    operationConfirmed: 'Операция подтверждена Сотрудником',
    printChequeOnPos: 'Чек отправлен на печать на POS-терминале',
    moneyFromClientAccepted: 'Денежные средства приняты от Клиента',
    complianceRequestCreatedAndPrinted: 'Сформировано и распечатано заявление в Комплаенс',
    clientPOSIdentificationRequest: 'Запрошена идентификация Клиента по карте на POS-терминале',
    selectClient: 'Выбран клиент для совершения операции',
    selectAgent: 'Выбран представитель',
    selectAccount: 'Выбран расчетный счет/счет карты',
    inputParamsOperation: 'Введены реквизиты операции, запрошен расчет комиссии',
    selectTypePayCommission: 'Выбран вариант оплаты комиссии',
    requestLimits: 'Запрошен расчет лимитов на УРМ',
    routedInCash: 'Задача/пакет маршрутизированы в Кассу',
    selectPlaceEndOperation: 'Выбрано место завершения операции'
  }
};