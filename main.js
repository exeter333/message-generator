const sign = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const date = ['today', 'tomorrow', 'this month', 'this year', 'this week', 'next week', 'next month'];
const message = ['you will find good luck', 'love will come', 'bad luck shall find you', 'work and finances will ask more from you', 'will be more chaotic than usual', 'will bring more surprises than usual'];
const buildMessage = (arrSign, arrDate, arrMes) => {
    return `${sign[Math.floor(Math.random()*(sign.length-1))]} + ${date[Math.floor(Math.random()*(date.length-1))]} ${message[Math.floor(Math.random()*(message.length-1))]}`;
};