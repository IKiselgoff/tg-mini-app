import {Telegraf, Markup} from 'telegraf'
import { message } from 'telegraf/filters'
const token = '7157499281:AAG5ZfVjy2nfIcwJZTl6KkrCaMTlt3dlpA4'
const webAppUrl = 'https://angular-tg-app-1799a.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl + '/feedback')])
    )
} )

bot.on(message('web_app_data'), async (ctx) => {
    const data = ctx.webAppData.data.json()
    ctx.reply( `Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()