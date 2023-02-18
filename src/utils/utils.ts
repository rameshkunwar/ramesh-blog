export const readTime = (text:string) : string => {
    const wordsPerMinute = 200;
    const wordsCountWithoutWhiteSpace = text.trim().split(/\s+/).length;
    const timeToRead = Math.ceil(wordsCountWithoutWhiteSpace / wordsPerMinute);
    console.info("time to read = " + timeToRead)
    return `${timeToRead} min.`;
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
    // var isLocalhost = window?.location?.href.indexOf('localhost') > 0;
    // if(isLocalhost){
    //   return `http://localhost:8000/posts/${slug}`
    // }else{
    //   return `https://kunwar.dk/posts/${slug}`
    // }
  }
