export default defineEventHandler(async (event) => {

    // //handle query params
    // const { name } = getQuery(event)
    // console.log(name);

    // //handle post data 
    // const { age } = await readBody(event)

    //api call with private key 
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?api_key=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2')

    return data
})