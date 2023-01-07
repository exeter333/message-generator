const sign = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const date = ['today', 'tomorrow', 'this month', 'this year', 'this week', 'next week', 'next month'];
const message = ['you will find good luck', 'love will come', 'bad luck shall find you', 'work and finances will ask more from you', 'will be more chaotic than usual', 'will bring more surprises than usual'];
const buildMessage = (arrSign, arrDate, arrMes) => {
    return `${arrSign[Math.floor(Math.random()*(arrSign.length-1))]} + ${arrDate[Math.floor(Math.random()*(arrDate.length-1))]} ${arrMes[Math.floor(Math.random()*(arrMes.length-1))]}`;
};
console.log(buildMessage(sign, date, message));