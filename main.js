const sign = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const date = ['today', 'tomorrow', 'this month', 'this year', 'this week', 'next week', 'next month'];
const message = ['you will find good luck', 'love will come', 'bad luck shall find you', 'work and finances will ask more from you', 'will be more chaotic than usual', 'will bring more surprises than usual'];
const buildMessage = (arrSign, arrDate, arrMes) => {
    const randSign = arrSign[Math.floor(Math.random()*(arrSign.length-1))];
    const randDate = arrDate[Math.floor(Math.random()*(arrDate.length-1))];
    const randMes = arrMes[Math.floor(Math.random()*(arrMes.length-1))]
    return `${randSign}: ${randDate} ${randMes}`;
};
console.log(buildMessage(sign, date, message));