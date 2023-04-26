describe('Basic navigation', () => {
  it('puts me on the wiki page for help', async () => {
    await browser.url('https://www.wikipedia.org/')
    const searchButton = await $('button[type="submit"]')
    await searchButton.click();
    const helpButton = await $('div#mw-indicator-mw-helplink')
    await helpButton.click();
  })
})