'use server'
import axios from 'axios'
import * as cheerio from 'cheerio'
import puppeteer from "puppeteer";
export async function scrapmovies(url:string,type:string){
    if(!url) return;

    try{
      const response = await axios.get(url);
        const html = response.data;
         console.log(url);
        // Load HTML content into Cheerio
        const $ = cheerio.load(html);
        const latestmovies = $('.section-name:contains("Latest Movies")').closest('.section-row');
        const genres = $('.section-area');
        // Select the container that holds all the movie items
        const movieContainer = (type == 'trending')? $('#trending-movies .section-items-default .item') :(type == 'latest')? latestmovies.find($('.section-items-default .item')): genres.find($('.section-items-default .item'));
        const movies = [];

        //puppeteer launch
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Iterate through each movie item
        for (let index = 0; index < movieContainer.length; index++) {
            const movieElement = movieContainer.eq(index);
            const movieThumbnail = movieElement.find('.movie-thumbnail');
            const movieLink = movieThumbnail.find('a').attr('href');

            await page.goto(movieLink, { waitUntil: 'domcontentloaded' });
            const movieHtml = await page.content();
            await page.waitForSelector('#first');
            const moviePage = cheerio.load(movieHtml);


            // const moviePage = cheerio.load(movieHtml);


            const movieDetail = moviePage('.movie-detail');
            const thumbnail = movieDetail.find('.is-poster .movie-thumbnail img').attr('src')
            const name = movieDetail.find('.is-name .movie-name').text().trim();
            const description = movieDetail.find('.is-description .dropdown-text').text().trim();
            const genres = movieDetail.find('.is-sub .name:contains("Genres") + .value a').map((i, el) => moviePage(el).text()).get();
            const cast = movieDetail.find('.is-sub .name:contains("Cast") + .value a').map((i, el) => moviePage(el).text()).get();
            const production = movieDetail.find('.is-sub .name:contains("Production") + .value a').map((i, el) => moviePage(el).text()).get();
            const country = movieDetail.find('.is-sub .name:contains("Country") + .value a').map((i, el) => moviePage(el).text()).get();
            const year = movieDetail.find('.is-sub .name:contains("Year") + .value a').text().trim();
            const duration = movieDetail.find('.is-sub .name:contains("Duration") + .value').text().trim();

            //extracting streaming links
            const serverPlayButton = movieDetail.find('#server-play');
            const serverPlayDropdown = serverPlayButton.find('#list_of');

            // Extracting links from the dropdown menu
            const streamlinks = await page.evaluate(() => {
                const links = [];
                const items = document.querySelectorAll('#list_of .sv-item');
                items.forEach((item) => {
                    const dataId = item.getAttribute('data-id');
                    if (dataId) {
                        links.push(dataId);
                    }
                });
                return links;
            });



            // Log or process the movie details as needed
            const data = {
                    name,description,genres,cast,production,country,year,duration,thumbnail,streamlinks,type:type
            }
            movies.push(data);
        }
        await browser.close();

        return movies;
    }catch (error: any) {
    console.log(error);
  }
}