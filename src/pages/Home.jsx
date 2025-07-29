import { ArticleSection } from "../components/ArticleSection";
import Banner from "../components/Banner";
import BrandCarousel from "../components/BrandCarousel";
import QuickSearchBodyType from "../components/QuickSearchBodyType";
import ReadContent from "../components/ReadContent";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <QuickSearchBodyType />
      <ArticleSection/>
      <BrandCarousel />
      <ReadContent/>
    </div>
  );
};

export default Home;
