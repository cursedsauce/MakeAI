// Interface strings and the Russian version of the site's default content.
// English lives in Site.tsx; this file adds the other language.
import type { SiteProps } from "./Site"

export type Lang = "en" | "ru"

/** Where the contact buttons and the Telegram icon lead. */
export const TELEGRAM_URL = "https://t.me/dyxmain"

export type UIStrings = {
  htmlLang: string
  locale: string
  menu: string
  navMain: string
  navMobile: string
  switchLang: string
  switchTheme: (to: "light" | "dark") => string
  light: string
  dark: string
  brandHome: (brand: string) => string
  clientsAria: string
  servicesAria: string
  heroHint: string
  rated: string
  readCase: string
  selectedWork: string
  workTitle: string
  allCases: string
  dayOne: (n: number) => string
  dayRange: (a: number, b: number) => string
  dayWord: string
  startCall: string
  dragTimeline: string
  prevQuote: string
  nextQuote: string
  quoteN: (n: number) => string
  all: string
  filterAria: string
  loadMore: string
  endOfStories: string
  casesTitle: string
  casesSubtitle: string
  backToCases: string
  nextCaseAria: (name: string) => string
  results: string
  connected: string
  nextCase: string
  notFoundTitle: string
  notFoundText: string
  backHome: string
  seeCases: string
  // booking dialog
  close: string
  booked: string
  bookedMsg: (day: string, time: string) => string
  done: string
  freeCall: string
  bookTitle: string
  bookSub: (brand: string) => string
  dayAria: string
  timeAria: string
  fName: string
  fEmail: string
  fCompany: string
  fMessage: string
  phName: string
  phEmail: string
  phCompany: string
  phMessage: string
  errName: string
  errEmail: string
  errTime: string
  errSend: string
  noTime: string
  booking: string
  bookBtn: string
}

export const UI_EN: UIStrings = {
  htmlLang: "en",
  locale: "en-US",
  menu: "Menu",
  navMain: "Main",
  navMobile: "Mobile",
  switchLang: "Switch language",
  switchTheme: (to) => "Switch to " + to + " theme",
  light: "Light",
  dark: "Dark",
  brandHome: (b) => b + " home",
  clientsAria: "Clients: ",
  servicesAria: "Services",
  heroHint: "Click to spin the light",
  rated: "Rated 5 out of 5",
  readCase: "Read full case study",
  selectedWork: "Selected work",
  workTitle: "Real teams.\nReal hours back.",
  allCases: "All case studies",
  dayOne: (n) => "Day " + n,
  dayRange: (a, b) => "Days " + a + "–" + b,
  dayWord: "Day",
  startCall: "Start with a message on Telegram",
  dragTimeline: "Drag along the timeline",
  prevQuote: "Previous quote",
  nextQuote: "Next quote",
  quoteN: (n) => "Quote " + n,
  all: "All",
  filterAria: "Filter by industry",
  loadMore: "Load more",
  endOfStories: "That's every story — for now.",
  casesTitle: "Don't take our word for it.\nTake theirs.",
  casesSubtitle: "The outcomes speak for themselves. Here's exactly what we built, why we built it, and what happened next.",
  backToCases: "Back to case studies",
  nextCaseAria: (n) => "Next case study: " + n,
  results: "Results",
  connected: "Connected",
  nextCase: "Next case study",
  notFoundTitle: "This page took the day off.",
  notFoundText: "Probably automated itself out of a job. Everything else is still here.",
  backHome: "Back home",
  seeCases: "See case studies",
  close: "Close",
  booked: "You're booked.",
  bookedMsg: (d, t) => d + " at " + t + ". A calendar invite is on its way to",
  done: "Done",
  freeCall: "Free 30-minute call",
  bookTitle: "Let's find your hours.",
  bookSub: (b) => "Talk to an automation lead at " + b + ". No slides, no pitch — just where your week goes.",
  dayAria: "Day",
  timeAria: "Time",
  fName: "Name",
  fEmail: "Work email",
  fCompany: "Company",
  fMessage: "What eats most of your week?",
  phName: "Ada Lovelace",
  phEmail: "ada@company.com",
  phCompany: "Optional",
  phMessage: "Copying orders between three tools…",
  errName: "Tell us who we're talking to.",
  errEmail: "That email doesn't look right.",
  errTime: "Pick a time that works.",
  errSend: "Something went wrong sending that. Try again?",
  noTime: "No time picked yet",
  booking: "Booking…",
  bookBtn: "Book the call",
}

export const UI_RU: UIStrings = {
  htmlLang: "ru",
  locale: "ru-RU",
  menu: "Меню",
  navMain: "Основная навигация",
  navMobile: "Мобильное меню",
  switchLang: "Сменить язык",
  switchTheme: (to) => (to === "dark" ? "Включить темную тему" : "Включить светлую тему"),
  light: "Светлая",
  dark: "Темная",
  brandHome: (b) => b + " — на главную",
  clientsAria: "Клиенты: ",
  servicesAria: "Услуги",
  heroHint: "Нажмите, чтобы раскрутить свет",
  rated: "Оценка 5 из 5",
  readCase: "Читать кейс полностью",
  selectedWork: "Избранные проекты",
  workTitle: "Настоящие команды.\nНастоящая экономия часов.",
  allCases: "Все кейсы",
  dayOne: (n) => "День " + n,
  dayRange: (a, b) => "Дни " + a + "–" + b,
  dayWord: "День",
  startCall: "Начните с сообщения в Telegram",
  dragTimeline: "Проведите по шкале времени",
  prevQuote: "Предыдущий отзыв",
  nextQuote: "Следующий отзыв",
  quoteN: (n) => "Отзыв " + n,
  all: "Все",
  filterAria: "Фильтр по отрасли",
  loadMore: "Показать еще",
  endOfStories: "Это все истории — пока что.",
  casesTitle: "Не верьте нам на слово.\nПоверьте им.",
  casesSubtitle: "Результаты говорят сами за себя. Вот что именно мы построили, зачем и что из этого вышло.",
  backToCases: "Назад к кейсам",
  nextCaseAria: (n) => "Следующий кейс: " + n,
  results: "Результаты",
  connected: "Подключено",
  nextCase: "Следующий кейс",
  notFoundTitle: "У этой страницы выходной.",
  notFoundText: "Наверное, сама себя автоматизировала. Все остальное на месте.",
  backHome: "На главную",
  seeCases: "Смотреть кейсы",
  close: "Закрыть",
  booked: "Вы записаны.",
  bookedMsg: (d, t) => d + ", " + t + ". Приглашение в календарь уже летит на",
  done: "Готово",
  freeCall: "Бесплатный звонок на 30 минут",
  bookTitle: "Найдем ваши часы.",
  bookSub: (b) => "Поговорите с руководителем по автоматизации в " + b + ". Без слайдов и продаж — только о том, куда уходит ваша неделя.",
  dayAria: "День",
  timeAria: "Время",
  fName: "Имя",
  fEmail: "Рабочая почта",
  fCompany: "Компания",
  fMessage: "На что уходит больше всего времени?",
  phName: "Анна Иванова",
  phEmail: "anna@company.com",
  phCompany: "Необязательно",
  phMessage: "Переносим заказы между тремя сервисами…",
  errName: "Подскажите, как к вам обращаться.",
  errEmail: "Похоже, почта указана неверно.",
  errTime: "Выберите удобное время.",
  errSend: "Не удалось отправить. Попробуем еще раз?",
  noTime: "Время пока не выбрано",
  booking: "Записываем…",
  bookBtn: "Записаться на звонок",
}

export const UI: Record<Lang, UIStrings> = { en: UI_EN, ru: UI_RU }

/** The template's default content, in Russian. Anything the host passes explicitly still wins. */
export function ruProps(brand: string): SiteProps {
  return {
    nav: [
      { label: "Кейсы", href: "#cases" },
      { label: "Услуги", href: "#services" },
      { label: "О нас", href: "#about" },
      { label: "Статьи", href: "#insights" },
    ],
    navCta: { label: "Связаться в Telegram", href: TELEGRAM_URL },
    hero: {
      title: "Автоматизируйте бизнес и\nэкономьте часы каждый день.",
      subtitle: "Мы проектируем и внедряем ИИ-системы, которые частично или полностью убирают ручную работу, снижают расходы и масштабируют ваши процессы.",
      primary: { label: "Связаться в Telegram", href: TELEGRAM_URL },
      secondary: { label: "Как это работает", href: "#process" },
      badge: { title: "Автоматизация за 45 дней", text: "Четкие сроки. Измеримый результат." },
      trust: "Нам доверяют более 50 компаний",
    },
    clientsTitle: "Компании, которым мы уже помогли с ИИ-автоматизацией",
    stats: [
      { value: 170, suffix: "+", label: "часов в месяц мы экономим клиентам" },
      { value: 14, label: "дней до первой измеримой окупаемости" },
      { value: 63, suffix: "%", label: "в среднем меньше ручной работы" },
      { value: 120, suffix: "+", label: "компаний стали работать эффективнее" },
    ],
    services: {
      kicker: "Что мы создаем",
      title: "Все, что нужно.\nНичего лишнего.",
      items: [
        {
          title: "Автоматизация процессов",
          description: "От заказа до оплаты, онбординг, согласования. Мы находим рутину и передаем ее программам, которые не пропускают ни одного шага.",
          points: ["Строим на сервисах, за которые вы уже платите", "Каждый запуск записан и повторяем", "Человека зовем, только когда нужно решение"],
          flow: ["Оплата", "Склад", "Доставка", "Почта"],
          field: "ember",
        },
        {
          title: "ИИ-агенты",
          description: "Агенты читают почту, пишут ответ, обновляют CRM — и спрашивают, прежде чем сделать что-то рискованное.",
          points: ["Опираются на ваши данные, а не на догадки", "Понятные правила передачи человеку, которыми вы управляете", "Еженедельный разбор каждого решения"],
          flow: ["Письмо", "Агент", "CRM", "Проверка"],
          field: "dusk",
        },
        {
          title: "Интеграции систем",
          description: "Магазин общается с учетом. CRM общается со Slack. Наконец у всех инструментов один источник правды.",
          points: ["Двусторонняя синхронизация, а не ночные выгрузки", "Конфликты ловим до того, как они разойдутся", "Все задокументировано, чтобы команда могла вести систему сама"],
          flow: ["Магазин", "Учет", "CRM", "Slack"],
          field: "glacier",
        },
        {
          title: "Отчетность и аналитика",
          description: "Живые дашборды на тех же потоках данных: цифры за понедельник готовы раньше самого понедельника.",
          points: ["Одно определение для каждой метрики", "Комментарии пишутся за вас", "Оповещения, когда показатель уходит в сторону"],
          flow: ["Реклама", "Хранилище", "Модель", "Дашборд"],
          field: "moss",
        },
      ],
    },
    process: {
      kicker: "Как это работает",
      title: "От первого сообщения до\nполной автоматизации за 45 дней.",
      steps: [
        { title: "Знакомство в чате", days: [1, 1], description: "Короткая переписка о том, куда уходят часы. Вы получите три автоматизации, которые стоит сделать, — независимо от того, наймете ли вы нас.", deliverables: ["Карта потерь времени", "Три главные возможности"] },
        { title: "Аудит и проект", days: [2, 10], description: "Мы наблюдаем за работой, замеряем каждый шаг и проектируем систему на бумаге, прежде чем написана хоть строчка.", deliverables: ["Аудит процессов", "Проект и модель окупаемости", "Фиксированная цена"] },
        { title: "Разработка и тесты", days: [11, 35], description: "Еженедельные демо на реальных данных. Ничего не запускаем, пока ваша команда не попыталась это сломать.", deliverables: ["Рабочие автоматизации", "Тесты на крайние случаи", "Еженедельные демо"] },
        { title: "Запуск и передача", days: [36, 45], description: "Мы включаем систему, внимательно следим за ней и обучаем вашу команду управлять ею без нас.", deliverables: ["Поддержка при запуске", "Инструкции и обучение", "Проверка через 30 дней"] },
      ],
    },
    cases: [
      {
        id: "corvane",
        name: "Corvane",
        industry: "E-commerce",
        tagline: "Бренд прямых продаж, который торгует премиальным снаряжением для походов и приключений.",
        summary: "Как Corvane вдвое сократил время выполнения заказов и освободил 52 часа в месяц, не наняв ни одного человека.",
        field: "ember",
        mark: 0,
        sections: [
          {
            label: "Обзор",
            lead: "Corvane — средний e-commerce бренд, который обрабатывает более 3 000 заказов в месяц. Быстрый рост превратил операционную команду в узкое место: большая часть недели уходила на ручные задачи, существовавшие только потому, что системы не общались друг с другом.",
            body: "Штат рос, а маржа не двигалась. Они пришли к нам, не зная точно, что чинить, — только понимая, что новые люди в сломанном процессе не решение.",
          },
          {
            label: "Задачи",
            lead: "Каждый новый заказ запускал цепочку ручных шагов в четырех несвязанных сервисах. На один заказ приходилось до 11 касаний, прежде чем он считался обработанным, а ошибка на любом шаге тянулась дальше по цепочке.",
            body: "Ответы были медленными, ошибки частыми, а команда выгорала на работе, которая не давала никакой стратегической ценности. Ничего сложного — просто бесконечно, однообразно и совершенно ненужно.",
          },
          {
            label: "Что мы построили",
            lead: "Единый конвейер заказа от оплаты до двери клиента. Shopify, складская система, перевозчик и служба поддержки теперь работают с одной записью, а людям остались только шаги, где нужно суждение.",
            body: "ИИ-агент читает каждое входящее письмо в поддержку, сопоставляет его с заказом, пишет черновик ответа и отмечает все необычное. Исключения попадают в один канал Slack с уже предложенным решением.",
          },
        ],
        results: [
          { value: 52, label: "часа экономии каждый месяц" },
          { value: 48, suffix: "%", label: "быстрее выполнение заказов" },
          { value: 2, label: "касания на заказ вместо 11" },
        ],
        quote: { text: "Мы перестали нанимать людей под хаос. Команда наконец работает над бизнесом, а не внутри него.", name: "Maya Lindqvist", role: "COO, Corvane" },
        stack: ["Shopify", "ShipBob", "Gorgias", "Slack", "Airtable"],
      },
      {
        id: "synthwell",
        name: "Synthwell",
        industry: "Маркетинговое агентство",
        tagline: "Перформанс-агентство на 40 человек, которое ведет платную рекламу для потребительских брендов.",
        summary: "Как Synthwell превратил четыре дня авральной отчетности в дашборд, который сам собирается каждый понедельник в 7:00.",
        field: "moss",
        mark: 1,
        sections: [
          {
            label: "Обзор",
            lead: "Synthwell ведет платную рекламу для 60 клиентов на пяти площадках. Каждый понедельник аккаунт-менеджеры выгружали таблицы, вставляли их в презентации и вручную писали комментарии.",
            body: "Отчеты съедали первую половину каждой недели. Клиенты получали цифры в четверг, когда те уже устаревали.",
          },
          {
            label: "Задачи",
            lead: "Пять площадок, пять определений конверсии и один аналитик, который понимал, как устроена главная таблица. Когда она уходила в отпуск, отчетность просто останавливалась.",
            body: "Агентство уже дважды пробовало дашборды. Оба раза идея умирала, потому что никто не доверял показанным цифрам.",
          },
          {
            label: "Что мы построили",
            lead: "Ночной конвейер, который собирает данные всех площадок в одно хранилище с единым определением каждой метрики, и агент-отчетчик, который пишет первый черновик комментария для каждого клиента.",
            body: "Теперь менеджеры редактируют, а не собирают с нуля. Каждая цифра ведет к исходной строке, поэтому цифрам наконец доверяют.",
          },
        ],
        results: [
          { value: 31, label: "часа в неделю возвращено" },
          { value: 7, prefix: "Пн ", suffix: ":00", label: "отчеты готовы, а не в четверг" },
          { value: 100, suffix: "%", label: "клиентов на живых дашбордах" },
        ],
        quote: { text: "Понедельник был днем таблиц. Теперь это день стратегии.", name: "Theo Marchetti", role: "основатель, Synthwell" },
        stack: ["Google Ads", "Meta Ads", "BigQuery", "Looker Studio", "Notion"],
      },
      {
        id: "neuvra",
        name: "Neuvra",
        industry: "B2B-консалтинг",
        tagline: "Небольшая консалтинговая компания, которая советует производителям среднего размера.",
        summary: "Как консультанты Neuvra вернули себе два дня в неделю, поручив ИИ-агенту писать все предложения.",
        field: "copper",
        mark: 2,
        serif: true,
        sections: [
          {
            label: "Обзор",
            lead: "Neuvra выигрывает проекты благодаря своим предложениям: подробным, индивидуальным и долгим в написании. Партнеры вечерами пересобирали одни и те же документы из старых.",
            body: "Фирма хотела отправлять больше предложений, не опуская планку, которая приводила к ней клиентов.",
          },
          {
            label: "Задачи",
            lead: "Пятнадцать лет предложений лежали на общих дисках в девяти разных шаблонах. Лучшие ответы на частые вопросы существовали, но найти их вовремя никто не мог.",
            body: "Каждое предложение начиналось с чистого листа и смутного воспоминания о похожем.",
          },
          {
            label: "Что мы построили",
            lead: "Агент для предложений, обученный на собственном архиве фирмы. Дайте ему расшифровку звонка — и он набросает объем работ, подход и цену голосом Neuvra, указав, из какой прошлой работы взял материал.",
            body: "Партнеры проверяют, правят и отправляют. Агент учится на каждой правке.",
          },
        ],
        results: [
          { value: 2, label: "дня в неделю возвращено каждому консультанту" },
          { value: 3, suffix: "×", label: "больше предложений в месяц" },
          { value: 41, suffix: "%", label: "выше доля выигранных" },
        ],
        quote: { text: "Он пишет как мы в хороший день. Мы просто делаем текст еще лучше.", name: "Arjun Mehta", role: "управляющий партнер, Neuvra" },
        stack: ["HubSpot", "Google Drive", "Gong", "OpenAI", "DocuSign"],
      },
      {
        id: "kintsu",
        name: "Kintsu",
        industry: "SaaS",
        tagline: "Программа записи для 9 000 клиник по всей Европе.",
        summary: "Как Kintsu автоматически отвечает на 68% обращений, а удовлетворенность клиентов не упала, а выросла.",
        field: "redline",
        mark: 3,
        sections: [
          {
            label: "Обзор",
            lead: "Очередь обращений в поддержку Kintsu за год удвоилась. Большинство заявок повторяли одни и те же двадцать вопросов, и каждая ждала за сложными.",
            body: "Им нужны были быстрые ответы, но без того, чтобы прятать настоящие проблемы за стеной чат-бота.",
          },
          {
            label: "Задачи",
            lead: "Ответы зависели от тарифа, региона и настроек каждой клиники — а эти сведения были разбросаны по биллингу, базе продукта и справочному центру.",
            body: "Обычный бот уверенно ошибался бы. Клиенты из здравоохранения такого не прощают.",
          },
          {
            label: "Что мы построили",
            lead: "Агент поддержки, который сначала смотрит реальный аккаунт клиники, решает то, что может, а все остальное передает человеку с кратким изложением и предложенным решением.",
            body: "Он никогда не гадает о платежах и данных пациентов. Такие обращения сразу уходят команде, размеченные и с приоритетом.",
          },
        ],
        results: [
          { value: 68, suffix: "%", label: "обращений решено автоматически" },
          { value: 4.8, decimals: 1, label: "CSAT, было 4,3" },
          { value: 90, suffix: " с", label: "медианное время первого ответа" },
        ],
        quote: { text: "Наша поддержка перешла от тушения пожаров к улучшению продукта.", name: "Lena Okafor", role: "руководитель поддержки, Kintsu" },
        stack: ["Intercom", "Stripe", "Postgres", "Linear", "Slack"],
      },
      {
        id: "halyard",
        name: "Halyard",
        industry: "Логистика",
        tagline: "Региональный экспедитор, который отправляет 1 200 грузов в неделю.",
        summary: "Как Halyard заменил 14 таблиц одной живой диспетчерской доской — и перестал терять грузы.",
        field: "glacier",
        mark: 4,
        serif: true,
        sections: [
          {
            label: "Обзор",
            lead: "Диспетчеры Halyard вели бизнес по четырнадцати таблицам, трем почтовым ящикам и одной доске. Это работало, пока не ушел ключевой диспетчер.",
            body: "Грузы начали теряться в стыках между файлами, за которые никто не отвечал целиком.",
          },
          {
            label: "Задачи",
            lead: "Обновления от перевозчиков приходили письмами, PDF и звонками. Каждое изменение статуса приходилось вносить руками — обычно дважды.",
            body: "Клиенты звонили узнать, где их груз, и честный ответ часто был «сейчас уточню».",
          },
          {
            label: "Что мы построили",
            lead: "Диспетчерская доска, которую питает агент: он читает каждое письмо и PDF от перевозчиков, обновляет перевозку и пишет клиенту при любом изменении.",
            body: "Диспетчеры сначала видят исключения. Все, что идет по графику, им не мешает.",
          },
        ],
        results: [
          { value: 14, label: "таблиц выведено из работы" },
          { value: 0, label: "потерянных грузов с запуска" },
          { value: 37, suffix: "%", label: "меньше звонков «где мой груз»" },
        ],
        quote: { text: "Впервые все смотрят на одну и ту же картину.", name: "Rui Fernandes", role: "операционный директор, Halyard" },
        stack: ["Gmail", "Retool", "Postgres", "Twilio", "Make"],
      },
      {
        id: "quorra",
        name: "Quorra",
        industry: "Финтех",
        tagline: "Платежная платформа для независимых маркетплейсов.",
        summary: "Как Quorra сверяет 40 000 транзакций за ночь без единого ручного сопоставления.",
        field: "dusk",
        mark: 5,
        sections: [
          {
            label: "Обзор",
            lead: "Quorra проводит выплаты для 300 маркетплейсов. Финансисты каждое утро вручную сверяли банковские файлы с учетной книгой, и только после этого можно было платить.",
            body: "С ростом объема утро растянулось до обеда.",
          },
          {
            label: "Задачи",
            lead: "Три банка, три формата файлов и ссылки, которые редко совпадали чисто. Вся работа была в крайних случаях.",
            body: "Ошибка означала, что продавец получит деньги дважды или не получит вовсе. Ни то ни другое недопустимо.",
          },
          {
            label: "Что мы построили",
            lead: "Движок сопоставления, который закрывает очевидные пары, оценивает неточные и обращается к человеку, только когда уверенность падает ниже порога, выбранного финансистами.",
            body: "Каждое решение записано с причиной, и годовой аудит превратился в работу на один день.",
          },
        ],
        results: [
          { value: 40, suffix: " тыс.", label: "транзакций сверяется за ночь" },
          { value: 99.7, decimals: 1, suffix: "%", label: "доля автоматического сопоставления" },
          { value: 6, suffix: " ч", label: "экономии каждое утро" },
        ],
        quote: { text: "Теперь финансы закрывают день до завтрака.", name: "Sofia Brandt", role: "финансовый директор, Quorra" },
        stack: ["Stripe", "Xero", "Snowflake", "dbt", "Slack"],
      },
    ],
    casesPage: { title: UI_RU.casesTitle, subtitle: UI_RU.casesSubtitle },
    testimonials: [
      { text: "Они нашли 50 часов в месяц, о потере которых мы не знали, и за шесть недель вернули их нам.", name: "Maya Lindqvist", role: "COO, Corvane" },
      { text: "Первое агентство, которое попросило понаблюдать за нашей работой, прежде чем рассказывать, что покупать.", name: "Arjun Mehta", role: "управляющий партнер, Neuvra" },
      { text: "Спокойно, точно и быстро. Автоматизация просто работает, а когда не может — объясняет почему.", name: "Sofia Brandt", role: "финансовый директор, Quorra" },
    ],
    insights: {
      kicker: "Статьи",
      title: "Автоматизации изнутри.",
      items: [
        { title: "Заказ из 11 касаний: как найти работу, спрятанную в процессе", category: "Операции", read: "6 минут чтения", field: "copper" },
        { title: "Когда ИИ-агент должен спросить человека — и как это решить", category: "ИИ-агенты", read: "8 минут чтения", field: "dusk" },
        { title: "Сначала автоматизируйте скучные 80%. Хитрые 20% подождут.", category: "Стратегия", read: "4 минуты чтения", field: "sand" },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Вопросы и ответы.",
      items: [
        { question: "Как понять, что стоит автоматизировать?", answer: "Для этого и нужна первая переписка. Мы ищем работу, которая частая, подчиняется правилам и доставляет боль, — и честно скажем, если что-то пока не стоит автоматизации." },
        { question: "Придется ли менять инструменты, которыми мы пользуемся?", answer: "Почти никогда. Мы строим поверх того, что ваша команда уже знает, и предлагаем новый инструмент, только если он окупится в первом же квартале." },
        { question: "Сколько стоит проект?", answer: "Цена формируется в зависимости от сложности и объема работ, по фиксированной цене, согласованной после аудита." },
        { question: "Что будет, если что-то сломается?", answer: "Каждая автоматизация обладает системой логирования, позволяющей выявить ошибку. Дополнительные планы поддержки включают мониторинг и изменения." },
        { question: "Безопасны ли наши данные с ИИ-агентами?", answer: "Агенты видят только данные, нужные для задачи, по возможности работают в ваших аккаунтах и никогда не обучают публичные модели на вашей информации." },
      ],
    },
    cta: {
      title: "Начните экономить время и деньги.",
      subtitle: "Найдем, где автоматизация даст вашему бизнесу самый большой эффект.",
      action: { label: "Связаться в Telegram", href: TELEGRAM_URL },
    },
    footer: {
      tagline: "Автоматизируем процессы.\nДаем результат.",
      columns: [
        { title: "Навигация", links: [{ label: "Главная", href: "#home" }, { label: "О нас", href: "#about" }, { label: "Услуги", href: "#services" }, { label: "Процесс", href: "#process" }] },
        { title: "Ресурсы", links: [{ label: "Кейсы", href: "#cases" }, { label: "Как это работает", href: "#process" }, { label: "Статьи", href: "#insights" }, { label: "FAQ", href: "#faq" }] },
        { title: "Документы", links: [{ label: "Условия использования" }, { label: "Конфиденциальность" }, { label: "Политика cookie" }, { label: "Настройки cookie" }] },
      ],
      socials: [{ kind: "telegram" as const, href: TELEGRAM_URL }, { kind: "instagram" as const }],
      copyright: "© " + new Date().getFullYear() + " " + brand + " Inc. Все права защищены.",
    },
  }
}
