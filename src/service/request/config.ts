import LocalCatche from '@/utils/cache'

const TOKEN = LocalCatche.getCatche('token')

const BASE_URL = '/api'
const TIME_OUT = 5000

//if(process.env.NODE_ENV)


export { BASE_URL, TIME_OUT, TOKEN }
