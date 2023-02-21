export const readTime = (text:string) : string => {
    const wordsPerMinute = 200;
    const wordsCountWithoutWhiteSpace = text.trim().split(/\s+/).length;
    const timeToRead = Math.ceil(wordsCountWithoutWhiteSpace / wordsPerMinute);
    console.info("time to read = " + timeToRead)
    return `${timeToRead} min read`;
}
/*
 * Words per minute data - Might not be accurate, do we know exact? 
* Third-grade students = 150 words per minute (wpm)
* Eighth grade students = 250 wpm
* Average college student = 450 wpm
* Average "high-level exec" = 575 wpm
* Average college professor = 675 wpm
* Speed readers = 1,500 wpm
* World speed reading champion = 4,700 wpm
* Average adult = 300 wpm 
 */

export const generateShareLinks = (type : string, description:string, url:string) :string =>{
    const twitterShareUrl = "https://twitter.com/share";
    const linkedInShareUrl = "https://www.linkedin.com/shareArticle?mini=true";
    let returnUrl;
    switch (type) {
      case "TWITTER":
        returnUrl = `${twitterShareUrl}?text=${encodeURI(description)}&url=${encodeURI(getFullUrl(url))}`;
        break;
      case "LINKEDIN":
        returnUrl = `${linkedInShareUrl}&url=${encodeURI(getFullUrl(url))}?ocid=ww.social.link.linkedin&title=${encodeURI(description)}`;
        break;
      default:
        break;
    }
    return returnUrl;
  }
  export const getFullUrl = (slug:string) => {
    return `https://kunwar.dk/posts/${slug}`   
  }

  export const dateToMonthYear = (date:string) : string => {
    if(!date) throw "not a vlaid date. given date = "+date;
    const parsedDate = Date.parse(date);
    if(isNaN(parsedDate)) throw "not a vlaid date. given date = "+date;

    const fullYear = new Date(parsedDate).getFullYear();

    const month = new Date(parsedDate).toLocaleString("default", {month:'long'});

    return `${month} ${fullYear}`;
  }
