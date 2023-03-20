import { Article } from '../ArticlesFolder/Article';
/*
/**|======================================
/**| Pics Import
/**|======================================
*/
import NxncImg from '../../pictures/articles/creating-fish-club/nxnc.jpg';
// import FirstChamp from '../../pictures/articles/first-champion/1camp.jpg';
/*
/**|======================================
/**| Articles List Component
/**|======================================
*/
export const ArticlesList = () => {
  const articles = [
    {
      date: '21 березня 2023',
      previewImage: NxncImg,
      heading: 'Як створювався рибальський клуб НХНЛ.',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. 
      <img src=https://iuriius.github.io/strashnyi/nxnc.8e5decfd.jpg} alt="description of image" />
      Sed non risus.Suspendisse lectus tortor, dignissim sit met, adipiscing nec, ultricies sed, dolorLorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorLorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorLorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorLorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorLorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor`,
    },
  ];

  return (
    <div>
      {articles.map((article, index) => (
        <Article
          key={index}
          date={article.date}
          previewImage={article.previewImage}
          heading={article.heading}
          content={article.content}
        />
      ))}
    </div>
  );
};
