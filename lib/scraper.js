// app/lib/scraper.js
import axios from 'axios';
import { load } from 'cheerio';

export default async function scrapeFromLinks(links) {
  const results = [];

  for (const url of links) {
    try {
      const { data: html } = await axios.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const $ = load(html);
      const macros = {};

      // Parse the nutrition table
      $('#tblNutrition tr').each((_, row) => {
        const label = $(row).find('td').first().text().toLowerCase();
        const val   = parseFloat($(row).find('td').eq(1).text()) || 0;
        if (label.includes('calories'))     macros.cal   = val;
        if (label.includes('protein'))      macros.prot  = val;
        if (label.includes('carbohydrate')) macros.carbs = val;
        if (label.includes('total lipid'))  macros.fat   = val;
      });

      if (Object.keys(macros).length) {
        results.push({ url, macros });
      }
    } catch (err) {
      console.warn(`Failed to scrape ${url}: ${err.message}`);
    }
  }

  return results;
}