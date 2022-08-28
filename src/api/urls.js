export const apiUrls = {
  getSearchResult: {
    universitiesUrl: `http://universities.hipolabs.com/search?country=`,
    wikiUrl: `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`,
    mapIpUrl: `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/`,
    mapRenderUrl: `https://api.maptiler.com/maps/streets/style.json?key=ciIcRLdEWxdk5UYhs2Uk`,
    youTube: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key=AIzaSyDAUN7QvFhcRzT8PrtcCFMeAVPId8Kxses&q=`,
    vimeo: `https://v1.nocodeapi.com/sergii/vimeo/lbIUApOKpWfIUrtF/search?q=`,
    webPages: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI`,
    images: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI`,
    news: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI`,
    searx: {
      searxGeneral: `https://searx.org/search?format=json&categories=general&language=en-EN&q=`,
      searxIamges: `https://searx.org/search?format=json&categories=images&language=en-EN&q=`,
      searxNews: `https://searx.org/search?format=json&categories=news&language=en-EN&q=`,
      searxMap: `https://searx.org/search?format=json&categories=maps&language=en-EN&q=`,
    },
    amazon: `https://amazon24.p.rapidapi.com/api/product`,
    videos: {
      search: `https://inv.riverside.rocks/api/v1/search?local=true&region=DE&q=`,
      popular: `https://inv.riverside.rocks/api/v1/popular?local=true&region=DE`,
      trending: `https://inv.riverside.rocks/api/v1/trending?local=true&region=DE`,
    },
  },
}
