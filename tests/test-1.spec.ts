import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mycar.kz/');
  //await page.getByRole('banner').getByRole('link', { name: 'Поиск авто' }).click();
  await expect(page.getByRole('banner').getByRole('link', { name: 'Поиск авто'})).toBeEnabled();
  
  //await page.getByRole('link', { name: 'Новые авто' }).click();
  await expect(page.getByRole('link', { name: 'Новые авто' })).toBeEnabled();
 
  // await page.getByRole('link', { name: 'Автоцентры' }).click();
 await expect(page.getByRole('link', { name: 'Автоцентры', exact: true })).toBeEnabled();
 
 //await page.getByRole('link', { name: 'Бонусы' }).click();
  await expect(page.getByRole('link', { name: 'Бонусы' })).toBeEnabled();
 
  //await page.getByRole('link', { name: 'Mycar Finance' }).click();
  await expect(page.getByRole('link', { name: 'Mycar Finance' })).toBeEnabled();
 
  //await page.getByRole('link', { name: 'Купить онлайн' }).click();
  await expect(page.getByRole('link', { name: 'Купить онлайн', exact: true })).toBeEnabled();
 
  //await page.getByRole('heading', { name: 'Надежный сервис по покупке, продаже и обслуживанию авто' }).click();
  await expect(page.getByRole('heading', { name: 'Надежный сервис по покупке, продаже и обслуживанию авто' })).toBeEnabled();
 
  // await page.getByRole('link', { name: 'Найти авто из тысячи вариантов' }).click();
 await expect(page.getByRole('link', { name: 'Найти авто из тысячи вариантов' })).toBeEnabled();
 
 // await page.getByRole('link', { name: 'Продать авто выгодно и удобно' }).click();
 await expect(page.getByRole('link', { name: 'Продать авто выгодно и удобно' })).toBeEnabled();
 
 //await page.getByRole('link', { name: 'Купить онлайн безопасно' }).click();
  await expect(page.getByRole('link', { name: 'Найти авто из тысячи вариантов' })).toBeEnabled();

  // await page.getByRole('link', { name: 'Автокредит от наших партнеров' }).click();
 await expect(page.getByRole('link', { name: 'Автокредит от наших партнеров' })).toBeEnabled();
 
 // await page.getByRole('link', { name: 'Гараж все об авто' }).click();
  await expect(page.getByRole('link', { name: 'Гараж все об авто'})).toBeEnabled();
 
  // await page.getByRole('button', { name: 'Марка и модель' })
 await expect(page.getByRole('button', { name: 'Марка и модель' })).toBeEnabled();

 // await page.getByRole('button', { name: 'Цена' })
 await expect(page.getByRole('button', { name: 'Цена' })).toBeEnabled();
 
 // await page.getByRole('button', { name: 'Год выпуска' })
 await expect(page.getByRole('button', { name: 'Год выпуска'})).toBeEnabled();
 
 // await page.getByRole('link', { name: 'Расширенный поиск' })
 await expect(page.getByRole('link', { name: 'Расширенный поиск'})).toBeEnabled();

});